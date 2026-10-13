import { defineConfig } from 'vite';
import fs from 'node:fs';
import path from 'node:path';

// Ghi danh sách mọi file đã build để service worker lưu sẵn (chơi không cần mạng)
function precacheList() {
  return {
    name: 'precache-list',
    apply: 'build',
    closeBundle() {
      const dir = path.resolve('dist'), files = [];
      const walk = d => fs.readdirSync(d, { withFileTypes: true }).forEach(e => {
        const p = path.join(d, e.name);
        if (e.isDirectory()) walk(p);
        else if (!/^(sw\.js|precache\.json|\.nojekyll)$/.test(e.name) && !e.name.endsWith('.txt')) files.push(path.relative(dir, p).split(path.sep).join('/'));
      });
      walk(dir);
      const version = Date.now().toString(36);
      fs.writeFileSync(path.join(dir, 'precache.json'), JSON.stringify({ version, files: ['./', ...files] }));
      const sw = fs.readFileSync(path.join(dir, 'sw.js'), 'utf8').replace('__VERSION__', version);
      fs.writeFileSync(path.join(dir, 'sw.js'), sw);
    },
  };
}

export default defineConfig({
  base: '/maisies-farm/',
  build: { chunkSizeWarningLimit: 1200 },
  plugins: [precacheList()],
});
