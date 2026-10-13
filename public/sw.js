// Lưu toàn bộ game vào máy để chơi khi không có mạng.
const CACHE = 'maisies-farm-__VERSION__';
self.addEventListener('install', e => {
  self.skipWaiting();
  e.waitUntil((async () => {
    const cache = await caches.open(CACHE);
    const list = await fetch('precache.json', { cache: 'no-store' }).then(r => r.json());
    await cache.addAll(list.files);
  })());
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k.startsWith('maisies-farm-') && k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const isPage = req.mode === 'navigate';
  e.respondWith(caches.open(CACHE).then(async cache => {
    const hit = await cache.match(isPage ? './' : req, { ignoreSearch: true });
    // Trang chính: ưu tiên bản mới trên mạng để nhận cập nhật; mất mạng thì dùng bản đã lưu
    if (isPage) {
      try { const res = await fetch(req); if (res.ok) cache.put('./', res.clone()); return res; } catch { return hit; }
    }
    if (hit) return hit;
    try { const res = await fetch(req); if (res.ok || res.type === 'opaque') cache.put(req, res.clone()); return res; }
    catch { return new Response('', { status: 504 }); }
  }));
});
