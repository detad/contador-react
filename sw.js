// ServiceWorker
const CACHE_ELEMENTS = [
  "./",
  "https://unpkg.com/react@17/umd/react.production.min.js",
  "https://unpkg.com/react-dom@17/umd/react-dom.production.min.js",
  "https://unpkg.com/@babel/standalone/babel.min.js",
  "./style.css",
  "./components/Contador.js",
];

const CACHE_NAME = "v1_cache_counter_react";

// First event by serviceWorker, install serviceWorker

self.addEventListener("install", (e) => {
  // console.log(e);
  e.waitUntil(
    caches
      .open(CACHE_NAME)
      .then(() => {
        self.skipWaiting();
      })
      .catch(console.log) // Allows to use the cache in the computer
  );
});

// Activate serviceWorker
// self.addEventListener("activate", (e) => {
//   // console.log(e);
//   const cacheWhiteList = [CACHE_NAME];
//   e.waitUntil(
//     caches
//       .keys()
//       .then((cachesNames) => {
//         console.log(cachesNames);
//         return Promise.all(
//           cachesNames.map((cacheName) => {
//             return (
//               cacheWhiteList.indexOf(cacheName) === -1 &&
//               caches.delete(cacheName)
//             );
//           })
//         );
//       })
//       .then(() => self.clients.claim())
//   );
// });

// Fetch serviceWorker
self.addEventListener("fetch", (e) => {
  //   console.log(e);
  e.respondWith(() => {
    caches.match(e.request).then((res) => (res ? res : fetch(e.request)));
  });
});
