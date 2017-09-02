"use strict";

var CACHE_KEY = "tv-series-v1";
var resources = [
  "/",
  "/index.html",
  "/assets/styles.css",
  "/dist/bundle.js"
];

self.addEventListener("install", function(event) {
  event.waitUntil(
    caches.open(CACHE_KEY)
      .then(function (cache) {
        return cache.addAll(resources);
      })
  );
});

self.addEventListener("fetch", function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});
