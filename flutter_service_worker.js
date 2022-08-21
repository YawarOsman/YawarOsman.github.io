'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "988c654583126c31477c3cefab2c20d8",
"index.html": "49470555a6b1412571b9dfa7062f906f",
"/": "49470555a6b1412571b9dfa7062f906f",
"main.dart.js": "e1d8ca7610fc826e75af3ebb6c4de08e",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "df3b683a601912a835357c15f58e02e5",
"assets/AssetManifest.json": "ce58f1436fdafeee64f0dd5ddd081b2c",
"assets/NOTICES": "16ea721cb6a6ba7c6adc6717d2a54bf6",
"assets/FontManifest.json": "30af7c86ae582a9d4ff50c5953e83de0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/images/access.png": "f647589868393aaa90195156890e88f0",
"assets/assets/images/dynamodb.png": "7bfdf8a668ddb48b717d1319366f47ef",
"assets/assets/images/git.png": "02e89cd8b2512f0a0e7e384fbaed278c",
"assets/assets/images/python.png": "7aa95368ed2cd2a4217eeb1a4e80a422",
"assets/assets/images/flutter.png": "d1fbadada84cea3f0dd3a5add5fe1cf3",
"assets/assets/images/visio.png": "56569d75c8aab2822b73b8e57c52dd4d",
"assets/assets/images/sql.png": "ca10f5fd022ef38af3df2c706e70ca80",
"assets/assets/images/firebase.png": "c24b6b9c0fcd84c7b258879880472660",
"assets/assets/images/java.png": "4eb1819dc863ef386e09d86e9f482a9f",
"assets/assets/images/powerpoint.png": "5f97ba846d45dd2bdb89d34d007479ce",
"assets/assets/images/aws.png": "9de1b80fd0bc51c26f367e9bbdeadf20",
"assets/assets/images/android.png": "04051982191d6ac06f44530e5498c54d",
"assets/assets/images/linux.png": "c204f91a3adf3d731309be986c4d1960",
"assets/assets/images/javascript.png": "58965cd02343fdfd72c673d5d6e8354e",
"assets/assets/images/graphql.png": "7c64d4f7ea5070f290427a97f27b151f",
"assets/assets/images/mysql.png": "593a57486ec798b22ec9a45435c03b05",
"assets/assets/images/css3.png": "d61b03f6b279599f606479a131bfdb34",
"assets/assets/images/macos.png": "4214d3778e4119a82d4bbc9c23fa82ba",
"assets/assets/images/uos.jpeg": "b8943a5ea9e0fd631732c4b02e4330d9",
"assets/assets/images/ios.png": "93d257ef58f8771899ecdb276a6dd9c1",
"assets/assets/images/windows.png": "4da02935e2b9e2a0ca6b402bf36ef441",
"assets/assets/images/php.png": "da8527456f28185fb4f0254e45eb3bae",
"assets/assets/images/dart.png": "a34ed43d94df95deb4be82d2c9cdc735",
"assets/assets/images/mongodb.png": "483e48ce586246480be32443c9d5e764",
"assets/assets/images/sqlite.png": "7600ca438cdc3a6b685ab91089f28ff2",
"assets/assets/images/word.png": "5b2f696eb228d04e621476742cddc25f",
"assets/assets/images/html5.png": "334a35d353fed1484c6bd38f8cc240bb",
"assets/assets/images/yawar.jpg": "0a9d9af7177d3360eafa4243b64344c4",
"assets/assets/projects/Dark_Light.mp4": "19d97dbbd933db876036fe33571b9b8c",
"assets/assets/projects/Chat_App.mp4": "5862d8e3d2cce39f30ee4ea3df773a8b",
"assets/assets/projects/Facebook.mp4": "d8b980e621a5cca77e4efd97ad8ded89",
"assets/assets/projects/Video_Player.mp4": "b5a9ffcc0ce69f9228a86e68ee094b51",
"assets/assets/projects/Stop_Watch_&_Timer.mp4": "abe9a81c12f2e524e5466679cbf99b9e",
"assets/assets/projects/Music_Player.mp4": "70d5e6e28e14ed2c19f2f12b3809cb13",
"assets/assets/projects/Music_Visualization.mp4": "38cf79ad45306d2c3efdcb5e63fe1ca9",
"assets/assets/projects/Ecommerce.mp4": "73bbb9426ea2a545c4ceeca6631fce60",
"assets/assets/projects/Note.mp4": "83eec1b87ac44d56d703297eada930c8",
"assets/assets/projects/Check_Internet.mp4": "0127f1a549ff295679d034a37d866e52",
"assets/assets/fonts/ABeeZee/abeezeeitalic.ttf": "edd03f664078e033f40495d57483f092",
"assets/assets/fonts/ABeeZee/abeezeebold.ttf": "cb714a0b844e87337aef21078fddcecc",
"assets/assets/fonts/Nunito/nunitoitalic.ttf": "35214fe3c667c57530f7cc4c9f8d2f48",
"assets/assets/fonts/Nunito/nunitobold.ttf": "bc1d0d2571eadab780ef9f510fb6675c",
"assets/assets/fonts/CustomIcons.ttf": "d338cf9ee52571e25516cd9b6f64fedc",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
