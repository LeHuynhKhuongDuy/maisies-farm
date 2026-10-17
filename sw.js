// Lưu toàn bộ game vào máy để chơi khi không có mạng.
const CACHE = 'maisies-farm-9b7d8e2b06';
self.addEventListener('install', e => {
  self.skipWaiting();
  e.waitUntil((async () => {
    const list = await fetch('precache.json', { cache: 'no-store' }).then(r => r.json());
    const cache = await caches.open(CACHE);
    // Bản đã lưu lần trước: file nào mã băm không đổi thì chép sang, khỏi tải lại qua mạng
    const oldKey = (await caches.keys()).filter(k => k.startsWith('maisies-farm-') && k !== CACHE).pop();
    const old = oldKey && await caches.open(oldKey);
    const oldHash = (old && await old.match('precache.json').then(r => r?.json()).catch(() => null))?.hash || {};
    await Promise.all(list.files.map(async f => {
      const prev = list.hash?.[f] && list.hash[f] === oldHash[f] && await old.match(f);
      if (prev) return cache.put(f, prev);
      const res = await fetch(f);
      if (!res.ok) throw new Error('Không tải được ' + f);
      return cache.put(f, res);
    }));
    await cache.put('precache.json', new Response(JSON.stringify(list), { headers: { 'Content-Type': 'application/json' } }));
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
