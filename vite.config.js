import { defineConfig } from 'vite';
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

// Ghi danh sách mọi file đã build (kèm mã băm nội dung) để service worker lưu sẵn (chơi không cần mạng).
// Mã băm giúp lần cập nhật sau chỉ tải lại file đã đổi; build giống hệt thì phiên bản không đổi.
function precacheList() {
  return {
    name: 'precache-list',
    apply: 'build',
    closeBundle() {
      const dir = path.resolve('dist'), files = [];
      const walk = d => fs.readdirSync(d, { withFileTypes: true }).forEach(e => {
        const p = path.join(d, e.name);
        if (e.isDirectory()) walk(p);
        else if (!/^(sw\.js|precache\.json|\.nojekyll|\.DS_Store)$/.test(e.name) && !e.name.endsWith('.txt')) files.push(path.relative(dir, p).split(path.sep).join('/'));
      });
      walk(dir);
      files.sort();
      const md5 = f => crypto.createHash('md5').update(fs.readFileSync(path.join(dir, f))).digest('hex').slice(0, 12);
      const hash = { './': md5('index.html') };
      files.forEach(f => { hash[f] = md5(f); });
      const version = crypto.createHash('md5').update(JSON.stringify(hash)).digest('hex').slice(0, 10);
      fs.writeFileSync(path.join(dir, 'precache.json'), JSON.stringify({ version, files: ['./', ...files], hash }));
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
