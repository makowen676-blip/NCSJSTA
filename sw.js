const C='nscjsta-v5',F=['./','index.html','xlsx.full.min.js','firebase-config.js','manifest.webmanifest','icon-192.png','icon-512.png'];
// Each file is cached on its own, so one missing file can never stop the app from installing.
self.addEventListener('install',e=>e.waitUntil(caches.open(C).then(c=>Promise.all(F.map(f=>c.add(f).catch(()=>{})))).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x)))).then(()=>self.clients.claim())));
// Network first (so updates arrive), cache fallback (so it works offline).
// Only the app's own files and the Firebase library scripts are handled; Firestore/Auth traffic is left alone.
self.addEventListener('fetch',e=>{
  const r=e.request,u=new URL(r.url);
  if(r.method!=='GET')return;
  const mine=u.origin===location.origin,lib=u.hostname==='www.gstatic.com'&&u.pathname.startsWith('/firebasejs/');
  if(!mine&&!lib)return;
  e.respondWith(fetch(r).then(res=>{if(res.ok){const cp=res.clone();caches.open(C).then(c=>c.put(r,cp))}return res}).catch(()=>caches.match(r,{ignoreSearch:true})));
});
