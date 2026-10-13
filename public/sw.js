// Lưu toàn bộ game vào máy để chơi khi không có mạng.
// Trang chính: lấy bản mới nếu có mạng, không có mạng thì dùng bản đã lưu.
// Hình, mã, phông chữ: dùng bản đã lưu, đồng thời cập nhật ngầm.
const CACHE = 'maisies-farm-v1';
self.addEventListener('install', e => { self.skipWaiting(); e.waitUntil(caches.open(CACHE).then(c => c.addAll(['./', './index.html', './manifest.webmanifest']))); });
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const isPage = req.mode === 'navigate';
  e.respondWith(caches.open(CACHE).then(async cache => {
    const hit = await cache.match(req, { ignoreSearch: isPage });
    const net = fetch(req).then(res => { if (res && (res.ok || res.type === 'opaque')) cache.put(req, res.clone()); return res; }).catch(() => null);
    if (isPage) return (await net) || hit || cache.match('./index.html');
    return hit || (await net) || new Response('', { status: 504 });
  }));
});
