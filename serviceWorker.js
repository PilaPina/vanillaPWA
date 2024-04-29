// Here we are creating our service worker. 

// We start by creating a name for our cache. 
const staticFlower = "pwa-flower-cache-v1";  
//We define the list of assets to cache. These are the resources that our PWA will use.
const assets = [
    "/",              // We cache our root path
    "/index.html",    // Our html,
    "/style.css",     // our styles
    "/app.js",        // and our javascript 
                      // and our assets
    './images/flower1.jpg',  
    './images/flower2.jpg',
    './images/flower3.jpg',
    './images/flower4.jpg',
    './images/flower5.jpg',
    './images/flower6.jpg',
];

// Add an event listener for the 'install' event
// This event is fired when the browser installs the service worker. 
// we add an waitUntil to extend the time for the install event  until the promise is resolved
self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    // open the cache with the name we defined earlier
    caches.open(staticFlower).then(cache => {
      // Once the cache is open, add all the assets to the cache
      cache.addAll(assets);
    })
  );
});


//Then we do another eventListener for fetching our cache. 
//This is fired everytime the browser requests a resource. 
self.addEventListener("fetch", fetchEvent => {
  // it responds and checks for a match.  If there’s a match in the cache, then return it from there. 
  // otherwise, go ahead and try to get it from the network.
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      // If the resource is found in the cache (if res is truthy) then we get a message in console
      console.log("it's cached!")
      // Return the cached resource if it's found (res is truthy).
      // If the resource is not found in the cache (res is falsy), fetch it from the network.
      return res || fetch(fetchEvent.request);
    })
  );
});
