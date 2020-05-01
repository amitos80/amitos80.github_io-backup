/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "_headers",
    "revision": "397601cddff7994707c58c05023f8cf2"
  },
  {
    "url": "1bfc9850-674029a6970ab3fbeb64.js"
  },
  {
    "url": "1bfc9850-674029a6970ab3fbeb64.js.map",
    "revision": "e1ca078b1d20c649264983cc10081ef0"
  },
  {
    "url": "252f366e-36b492e5794f9d1e61c1.js"
  },
  {
    "url": "252f366e-36b492e5794f9d1e61c1.js.map",
    "revision": "2b7af209568896d43ae1fcf6195d532e"
  },
  {
    "url": "404.html",
    "revision": "40c1099299a7b744c339b2c37894aaa0"
  },
  {
    "url": "404/index.html",
    "revision": "28076281d47fe544a124f3c5cfdd0075"
  },
  {
    "url": "95b64a6e-7df4b477ec432349209d.js"
  },
  {
    "url": "95b64a6e-7df4b477ec432349209d.js.map",
    "revision": "d6c63b2ca14736c51bb6d230c2300200"
  },
  {
    "url": "about/index.html",
    "revision": "87fbd4e9300b8c6ec1a36baca64b7865"
  },
  {
    "url": "app-bfb76851bd973ad470ed.js"
  },
  {
    "url": "app-bfb76851bd973ad470ed.js.map",
    "revision": "ba20b0006c8f9227bb43fb88314b3a86"
  },
  {
    "url": "chunk-map.json",
    "revision": "c4e9aaea0fc45adb4422c940f03b7e17"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-18b9bd78e89bbe4752a5.js"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-18b9bd78e89bbe4752a5.js.map",
    "revision": "62178bfc944a09db661e9157ace17cbe"
  },
  {
    "url": "component---src-pages-404-js-f041753f241893c6a803.js"
  },
  {
    "url": "component---src-pages-404-js-f041753f241893c6a803.js.map",
    "revision": "f3c2f59e70f621e379afc2ba8eb4fea1"
  },
  {
    "url": "component---src-pages-about-js-aa5d45517796c77504ec.js"
  },
  {
    "url": "component---src-pages-about-js-aa5d45517796c77504ec.js.map",
    "revision": "234922217077e68692f8bd5dbdb56b83"
  },
  {
    "url": "component---src-pages-about-js-c7fd7fe38caada7f05df.js"
  },
  {
    "url": "component---src-pages-about-js-c7fd7fe38caada7f05df.js.map",
    "revision": "fe0bdb686b2065995647747afc289042"
  },
  {
    "url": "component---src-pages-experience-js-28ce60f0e6b09c0f1859.js"
  },
  {
    "url": "component---src-pages-experience-js-28ce60f0e6b09c0f1859.js.map",
    "revision": "ae6488d192646ddfea0a8598c1ab794c"
  },
  {
    "url": "component---src-pages-experience-js-4f66f177813898c12cbc.js"
  },
  {
    "url": "component---src-pages-experience-js-4f66f177813898c12cbc.js.map",
    "revision": "40304560399b78f5f97c0b8158504e4c"
  },
  {
    "url": "component---src-pages-index-js-306925c50294433da8f3.js"
  },
  {
    "url": "component---src-pages-index-js-306925c50294433da8f3.js.map",
    "revision": "042843054df9358e56f35580e4f18442"
  },
  {
    "url": "component---src-pages-index-js-431d9f394c2f713ad6dd.js"
  },
  {
    "url": "component---src-pages-index-js-431d9f394c2f713ad6dd.js.map",
    "revision": "e180a46eff243c30116b4df3de94f671"
  },
  {
    "url": "component---src-pages-projects-js-7214ffcf7d790ae695cd.js"
  },
  {
    "url": "component---src-pages-projects-js-7214ffcf7d790ae695cd.js.map",
    "revision": "d9955881e4dab5d9713e97a6088a7240"
  },
  {
    "url": "component---src-pages-projects-js-ac6126ef304ca85ef1ce.js"
  },
  {
    "url": "component---src-pages-projects-js-ac6126ef304ca85ef1ce.js.map",
    "revision": "2b0df7338b43c5f21d80e6a92a08e13f"
  },
  {
    "url": "component---src-pages-resume-js-bfa93f0423564167b9ed.js"
  },
  {
    "url": "component---src-pages-resume-js-bfa93f0423564167b9ed.js.map",
    "revision": "e27a03763a073b8c0f0ccef48c257abc"
  },
  {
    "url": "component---src-pages-resume-js-c8e96bc534ced1e9231c.js"
  },
  {
    "url": "component---src-pages-resume-js-c8e96bc534ced1e9231c.js.map",
    "revision": "1093a789ab6b55841cb2c38d5bcc4ea5"
  },
  {
    "url": "component---src-pages-skills-js-5fc4cf0585f09c5f569b.js"
  },
  {
    "url": "component---src-pages-skills-js-5fc4cf0585f09c5f569b.js.map",
    "revision": "9844305c9c8082d862cf6d15d01e969e"
  },
  {
    "url": "component---src-pages-skills-js-a7a4e68c8714920a72c6.js"
  },
  {
    "url": "component---src-pages-skills-js-a7a4e68c8714920a72c6.js.map",
    "revision": "a3163842a790df6ec7c77e88f3501054"
  },
  {
    "url": "experience/index.html",
    "revision": "9e54ae9163c0568338c821bcfbc8ca1a"
  },
  {
    "url": "favicon-32x32.png",
    "revision": "c13d7de135016ba6486216b8ccde004d"
  },
  {
    "url": "framework-8145bab88101e522accb.js"
  },
  {
    "url": "framework-8145bab88101e522accb.js.map",
    "revision": "23ab39e28a76c003debb42b7b0bf0cdb"
  },
  {
    "url": "google3336ba03566cc13a.html",
    "revision": "200a92b74a5bdce65c1d1b003379a1c0"
  },
  {
    "url": "icons/icon-144x144.png",
    "revision": "713880dc1e30122674324a5e13019cc2"
  },
  {
    "url": "icons/icon-192x192.png",
    "revision": "3915ef16ade05bf54a3d38342a9bcbeb"
  },
  {
    "url": "icons/icon-256x256.png",
    "revision": "b627293dd27062392f77120025af2117"
  },
  {
    "url": "icons/icon-384x384.png",
    "revision": "3ed39e008de661180bd2103793318eb1"
  },
  {
    "url": "icons/icon-48x48.png",
    "revision": "a1518deb4009eb6aa7b2b35c2345aabd"
  },
  {
    "url": "icons/icon-512x512.png",
    "revision": "ae889b1d7a3dd5f8892722c76d799abb"
  },
  {
    "url": "icons/icon-72x72.png",
    "revision": "ca0c6ef8b56fe2806d87c02472d34140"
  },
  {
    "url": "icons/icon-96x96.png",
    "revision": "331b2859f02b4c30750ad1fdc486eb10"
  },
  {
    "url": "idb-keyval-iife.min.js"
  },
  {
    "url": "index.html",
    "revision": "4f4cf3b23736015b162b61317a77a362"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "ebd0b8c563d06a627651279018ab33f2"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "392f5caf4b329b8c98c8d7146c555278"
  },
  {
    "url": "page-data/404.html/page-data.json",
    "revision": "d2d3612af1df181302e193fa8c922dd4"
  },
  {
    "url": "page-data/404/page-data.json",
    "revision": "885296f794bc4c06d05f9cb1f0a23695"
  },
  {
    "url": "page-data/about/page-data.json",
    "revision": "3ddd5d51b095997b4d473ef99898912f"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "1904704478a1c7a4727463390c5317c5"
  },
  {
    "url": "page-data/experience/page-data.json",
    "revision": "4d89a4265928a862ec2ee5be51debf92"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "7ccb1677a3924eb7498e27ccb409e361"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "43232b01cc861c0701a3ece4bd67720b"
  },
  {
    "url": "page-data/projects/page-data.json",
    "revision": "ef0a865016a83bcdacbe2540b1c09236"
  },
  {
    "url": "page-data/resume/page-data.json",
    "revision": "0d65c3c533946d0a6d8decac07ab2b4a"
  },
  {
    "url": "page-data/skills/page-data.json",
    "revision": "dbf2fd7aa7f4f498c1114a4c6794b5f9"
  },
  {
    "url": "projects/index.html",
    "revision": "a95031ec2e6a6fb1ca64854f676e5145"
  },
  {
    "url": "resume/index.html",
    "revision": "97d09315af6e5bcf4bf168129c8f061b"
  },
  {
    "url": "sitemap.xml",
    "revision": "a94bbb4a3c02cf6a9d237f25b8b3d60d"
  },
  {
    "url": "sitemap1.xml",
    "revision": "7a6b84031b05f54257b2951ec8f4fcc8"
  },
  {
    "url": "skills/index.html",
    "revision": "fb566496c7a01e425dda793c78e29f07"
  },
  {
    "url": "static/03e555e6336ea52b8c891210a52be761/aff39/mta.png"
  },
  {
    "url": "static/03e555e6336ea52b8c891210a52be761/c1598/mta.png"
  },
  {
    "url": "static/03e555e6336ea52b8c891210a52be761/ea22a/mta.png"
  },
  {
    "url": "static/083b455ca3bb645359d936305803b8d0/0aa94/js.webp"
  },
  {
    "url": "static/083b455ca3bb645359d936305803b8d0/4c427/js.png"
  },
  {
    "url": "static/083b455ca3bb645359d936305803b8d0/91664/js.png"
  },
  {
    "url": "static/083b455ca3bb645359d936305803b8d0/c05ea/js.webp"
  },
  {
    "url": "static/083b455ca3bb645359d936305803b8d0/e711a/js.webp"
  },
  {
    "url": "static/083b455ca3bb645359d936305803b8d0/ff4be/js.png"
  },
  {
    "url": "static/0c1935335c89dc37774e49a4c69bfd41/1f5c5/ffm-player.webp"
  },
  {
    "url": "static/0c1935335c89dc37774e49a4c69bfd41/2a4de/ffm-player.png"
  },
  {
    "url": "static/0c1935335c89dc37774e49a4c69bfd41/497c6/ffm-player.png"
  },
  {
    "url": "static/0c1935335c89dc37774e49a4c69bfd41/58556/ffm-player.webp"
  },
  {
    "url": "static/0c1935335c89dc37774e49a4c69bfd41/61e93/ffm-player.webp"
  },
  {
    "url": "static/0c1935335c89dc37774e49a4c69bfd41/65e33/ffm-player.png"
  },
  {
    "url": "static/0c1935335c89dc37774e49a4c69bfd41/69585/ffm-player.png"
  },
  {
    "url": "static/0c1935335c89dc37774e49a4c69bfd41/a03f0/ffm-player.png"
  },
  {
    "url": "static/0c1935335c89dc37774e49a4c69bfd41/ad85c/ffm-player.webp"
  },
  {
    "url": "static/0c1935335c89dc37774e49a4c69bfd41/d1f52/ffm-player.webp"
  },
  {
    "url": "static/0c1935335c89dc37774e49a4c69bfd41/d891e/ffm-player.webp"
  },
  {
    "url": "static/0c1935335c89dc37774e49a4c69bfd41/ee604/ffm-player.png"
  },
  {
    "url": "static/33b7056daf1dfdb68139b7c22c29aad7/0aa94/react.webp"
  },
  {
    "url": "static/33b7056daf1dfdb68139b7c22c29aad7/4c427/react.png"
  },
  {
    "url": "static/33b7056daf1dfdb68139b7c22c29aad7/91664/react.png"
  },
  {
    "url": "static/33b7056daf1dfdb68139b7c22c29aad7/c05ea/react.webp"
  },
  {
    "url": "static/33b7056daf1dfdb68139b7c22c29aad7/e711a/react.webp"
  },
  {
    "url": "static/33b7056daf1dfdb68139b7c22c29aad7/ff4be/react.png"
  },
  {
    "url": "static/3474bed81a25ff7ab8d0206e2b60ca3f/1d3f3/lnrd.png"
  },
  {
    "url": "static/3474bed81a25ff7ab8d0206e2b60ca3f/1f5c5/lnrd.webp"
  },
  {
    "url": "static/3474bed81a25ff7ab8d0206e2b60ca3f/2a4de/lnrd.png"
  },
  {
    "url": "static/3474bed81a25ff7ab8d0206e2b60ca3f/497c6/lnrd.png"
  },
  {
    "url": "static/3474bed81a25ff7ab8d0206e2b60ca3f/58556/lnrd.webp"
  },
  {
    "url": "static/3474bed81a25ff7ab8d0206e2b60ca3f/61e93/lnrd.webp"
  },
  {
    "url": "static/3474bed81a25ff7ab8d0206e2b60ca3f/65e33/lnrd.png"
  },
  {
    "url": "static/3474bed81a25ff7ab8d0206e2b60ca3f/69585/lnrd.png"
  },
  {
    "url": "static/3474bed81a25ff7ab8d0206e2b60ca3f/a3b1c/lnrd.webp"
  },
  {
    "url": "static/3474bed81a25ff7ab8d0206e2b60ca3f/ad85c/lnrd.webp"
  },
  {
    "url": "static/3474bed81a25ff7ab8d0206e2b60ca3f/d1f52/lnrd.webp"
  },
  {
    "url": "static/3474bed81a25ff7ab8d0206e2b60ca3f/ee604/lnrd.png"
  },
  {
    "url": "static/35261891568ab6bb0697b2ee03e45d98/0aa94/seo.webp"
  },
  {
    "url": "static/35261891568ab6bb0697b2ee03e45d98/4c427/seo.png"
  },
  {
    "url": "static/35261891568ab6bb0697b2ee03e45d98/91664/seo.png"
  },
  {
    "url": "static/35261891568ab6bb0697b2ee03e45d98/c05ea/seo.webp"
  },
  {
    "url": "static/35261891568ab6bb0697b2ee03e45d98/e711a/seo.webp"
  },
  {
    "url": "static/35261891568ab6bb0697b2ee03e45d98/ff4be/seo.png"
  },
  {
    "url": "static/394d4a6d64b33c86aa71e6ec7896c283/0aa94/nodejs.webp"
  },
  {
    "url": "static/394d4a6d64b33c86aa71e6ec7896c283/4c427/nodejs.png"
  },
  {
    "url": "static/394d4a6d64b33c86aa71e6ec7896c283/91664/nodejs.png"
  },
  {
    "url": "static/394d4a6d64b33c86aa71e6ec7896c283/c05ea/nodejs.webp"
  },
  {
    "url": "static/394d4a6d64b33c86aa71e6ec7896c283/e711a/nodejs.webp"
  },
  {
    "url": "static/394d4a6d64b33c86aa71e6ec7896c283/ff4be/nodejs.png"
  },
  {
    "url": "static/670c6adcd1bff4a80d0e4f26dda2d541/91664/icon.png"
  },
  {
    "url": "static/670c6adcd1bff4a80d0e4f26dda2d541/a74cd/freelance.png"
  },
  {
    "url": "static/670c6adcd1bff4a80d0e4f26dda2d541/c6edb/freelance.webp"
  },
  {
    "url": "static/670c6adcd1bff4a80d0e4f26dda2d541/e711a/icon.webp"
  },
  {
    "url": "static/6cf8cfb9054331b03758031de453a9ef/1f5c5/fxempire.webp"
  },
  {
    "url": "static/6cf8cfb9054331b03758031de453a9ef/2a4de/fxempire.png"
  },
  {
    "url": "static/6cf8cfb9054331b03758031de453a9ef/30c3d/fxempire.png"
  },
  {
    "url": "static/6cf8cfb9054331b03758031de453a9ef/497c6/fxempire.png"
  },
  {
    "url": "static/6cf8cfb9054331b03758031de453a9ef/58556/fxempire.webp"
  },
  {
    "url": "static/6cf8cfb9054331b03758031de453a9ef/61e93/fxempire.webp"
  },
  {
    "url": "static/6cf8cfb9054331b03758031de453a9ef/65e33/fxempire.png"
  },
  {
    "url": "static/6cf8cfb9054331b03758031de453a9ef/69585/fxempire.png"
  },
  {
    "url": "static/6cf8cfb9054331b03758031de453a9ef/86eac/fxempire.webp"
  },
  {
    "url": "static/6cf8cfb9054331b03758031de453a9ef/ad85c/fxempire.webp"
  },
  {
    "url": "static/6cf8cfb9054331b03758031de453a9ef/d1f52/fxempire.webp"
  },
  {
    "url": "static/6cf8cfb9054331b03758031de453a9ef/ee604/fxempire.png"
  },
  {
    "url": "static/7268e8ad3f7ebbc25b2736ba14e2a666/0aa94/database.webp"
  },
  {
    "url": "static/7268e8ad3f7ebbc25b2736ba14e2a666/4c427/database.png"
  },
  {
    "url": "static/7268e8ad3f7ebbc25b2736ba14e2a666/91664/database.png"
  },
  {
    "url": "static/7268e8ad3f7ebbc25b2736ba14e2a666/c05ea/database.webp"
  },
  {
    "url": "static/7268e8ad3f7ebbc25b2736ba14e2a666/e711a/database.webp"
  },
  {
    "url": "static/7268e8ad3f7ebbc25b2736ba14e2a666/ff4be/database.png"
  },
  {
    "url": "static/8e0b048da80c2cdab277bc72f5448b46/0aa94/android.webp"
  },
  {
    "url": "static/8e0b048da80c2cdab277bc72f5448b46/4c427/android.png"
  },
  {
    "url": "static/8e0b048da80c2cdab277bc72f5448b46/91664/android.png"
  },
  {
    "url": "static/8e0b048da80c2cdab277bc72f5448b46/c05ea/android.webp"
  },
  {
    "url": "static/8e0b048da80c2cdab277bc72f5448b46/e711a/android.webp"
  },
  {
    "url": "static/8e0b048da80c2cdab277bc72f5448b46/ff4be/android.png"
  },
  {
    "url": "static/a0fd8243139181c9f9d2127821062cf1/0d3d9/fxempirenew.webp"
  },
  {
    "url": "static/a0fd8243139181c9f9d2127821062cf1/159a2/fxempirenew.png"
  },
  {
    "url": "static/a0fd8243139181c9f9d2127821062cf1/2ac84/fxempirenew.png"
  },
  {
    "url": "static/a0fd8243139181c9f9d2127821062cf1/4e805/fxempirenew.webp"
  },
  {
    "url": "static/a0fd8243139181c9f9d2127821062cf1/6258c/fxempirenew.webp"
  },
  {
    "url": "static/a0fd8243139181c9f9d2127821062cf1/b1497/fxempirenew.png"
  },
  {
    "url": "static/ab327704e52525135a3694a8a432c6db/1f5c5/ciyot.webp"
  },
  {
    "url": "static/ab327704e52525135a3694a8a432c6db/2a4de/ciyot.png"
  },
  {
    "url": "static/ab327704e52525135a3694a8a432c6db/46f63/ciyot.png"
  },
  {
    "url": "static/ab327704e52525135a3694a8a432c6db/497c6/ciyot.png"
  },
  {
    "url": "static/ab327704e52525135a3694a8a432c6db/53690/ciyot.webp"
  },
  {
    "url": "static/ab327704e52525135a3694a8a432c6db/58556/ciyot.webp"
  },
  {
    "url": "static/ab327704e52525135a3694a8a432c6db/61e93/ciyot.webp"
  },
  {
    "url": "static/ab327704e52525135a3694a8a432c6db/65e33/ciyot.png"
  },
  {
    "url": "static/ab327704e52525135a3694a8a432c6db/69585/ciyot.png"
  },
  {
    "url": "static/ab327704e52525135a3694a8a432c6db/ad85c/ciyot.webp"
  },
  {
    "url": "static/ab327704e52525135a3694a8a432c6db/d1f52/ciyot.webp"
  },
  {
    "url": "static/ab327704e52525135a3694a8a432c6db/ee604/ciyot.png"
  },
  {
    "url": "static/aec40c5d062faba36e6e805e0c1a7dd6/b3a76/photo.png"
  },
  {
    "url": "static/d/1013331041.json"
  },
  {
    "url": "static/d/1163432668.json"
  },
  {
    "url": "static/d/1281174074.json"
  },
  {
    "url": "static/d/2594087537.json"
  },
  {
    "url": "static/d/297506416.json"
  },
  {
    "url": "static/d/3208941252.json"
  },
  {
    "url": "static/d/3731995382.json"
  },
  {
    "url": "static/d/765055119.json"
  },
  {
    "url": "static/dedb287aa00d0d1b9774f50a82613374/0d3d9/equala.webp"
  },
  {
    "url": "static/dedb287aa00d0d1b9774f50a82613374/159a2/equala.png"
  },
  {
    "url": "static/dedb287aa00d0d1b9774f50a82613374/2ac84/equala.png"
  },
  {
    "url": "static/dedb287aa00d0d1b9774f50a82613374/4e805/equala.webp"
  },
  {
    "url": "static/dedb287aa00d0d1b9774f50a82613374/6258c/equala.webp"
  },
  {
    "url": "static/dedb287aa00d0d1b9774f50a82613374/b1497/equala.png"
  },
  {
    "url": "static/f5edf164c5a80253b50c4107bc22780e/210c1/cv.webp"
  },
  {
    "url": "static/f5edf164c5a80253b50c4107bc22780e/2a4de/cv.png"
  },
  {
    "url": "static/f5edf164c5a80253b50c4107bc22780e/403a4/cv.webp"
  },
  {
    "url": "static/f5edf164c5a80253b50c4107bc22780e/630fb/cv.png"
  },
  {
    "url": "static/f5edf164c5a80253b50c4107bc22780e/6d161/cv.png"
  },
  {
    "url": "static/f5edf164c5a80253b50c4107bc22780e/865c7/cv.webp"
  },
  {
    "url": "static/f5edf164c5a80253b50c4107bc22780e/99238/cv.webp"
  },
  {
    "url": "static/f5edf164c5a80253b50c4107bc22780e/ad85c/cv.webp"
  },
  {
    "url": "static/f5edf164c5a80253b50c4107bc22780e/b6e9a/cv.png"
  },
  {
    "url": "static/f5edf164c5a80253b50c4107bc22780e/db955/cv.png"
  },
  {
    "url": "static/f5edf164c5a80253b50c4107bc22780e/e7487/cv.webp"
  },
  {
    "url": "static/f5edf164c5a80253b50c4107bc22780e/f3583/cv.png"
  },
  {
    "url": "static/f8da7516563c19701a34da618d2c6cee/0d3d9/featurefm.webp"
  },
  {
    "url": "static/f8da7516563c19701a34da618d2c6cee/159a2/featurefm.png"
  },
  {
    "url": "static/f8da7516563c19701a34da618d2c6cee/2ac84/featurefm.png"
  },
  {
    "url": "static/f8da7516563c19701a34da618d2c6cee/4e805/featurefm.webp"
  },
  {
    "url": "static/f8da7516563c19701a34da618d2c6cee/6258c/featurefm.webp"
  },
  {
    "url": "static/f8da7516563c19701a34da618d2c6cee/b1497/featurefm.png"
  },
  {
    "url": "styles-6b8affa5cc22cb60670e.js"
  },
  {
    "url": "styles-6b8affa5cc22cb60670e.js.map",
    "revision": "1720725fc6619054e7d1014b20e71571"
  },
  {
    "url": "styles.cb64969f2ded0cb574a7.css"
  },
  {
    "url": "webpack-runtime-948596307071f68f52f5.js"
  },
  {
    "url": "webpack-runtime-948596307071f68f52f5.js.map",
    "revision": "a5ffc5e4979979aad0d810e21ef69d1a"
  },
  {
    "url": "webpack-runtime-c8b03c7d4e4ec94875bc.js"
  },
  {
    "url": "webpack-runtime-c8b03c7d4e4ec94875bc.js.map",
    "revision": "cc629672fc4f938f21689701fb62accc"
  },
  {
    "url": "webpack.stats.json",
    "revision": "6431e373392f58086a8850db3ebd252b"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$|static\/)/, new workbox.strategies.CacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\page-data\/.*\/page-data\.json/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');

/* global importScripts, workbox, idbKeyval */

importScripts(`idb-keyval-iife.min.js`)

const { NavigationRoute } = workbox.routing

let lastNavigationRequest = null
let offlineShellEnabled = true

// prefer standard object syntax to support more browsers
const MessageAPI = {
  setPathResources: (event, { path, resources }) => {
    event.waitUntil(idbKeyval.set(`resources:${path}`, resources))
  },

  clearPathResources: event => {
    event.waitUntil(idbKeyval.clear())
  },

  enableOfflineShell: () => {
    offlineShellEnabled = true
  },

  disableOfflineShell: () => {
    offlineShellEnabled = false
  },
}

self.addEventListener(`message`, event => {
  const { gatsbyApi: api } = event.data
  if (api) MessageAPI[api](event, event.data)
})

function handleAPIRequest({ event }) {
  const { pathname } = new URL(event.request.url)

  const params = pathname.match(/:(.+)/)[1]
  const data = {}

  if (params.includes(`=`)) {
    params.split(`&`).forEach(param => {
      const [key, val] = param.split(`=`)
      data[key] = val
    })
  } else {
    data.api = params
  }

  if (MessageAPI[data.api] !== undefined) {
    MessageAPI[data.api]()
  }

  if (!data.redirect) {
    return new Response()
  }

  return new Response(null, {
    status: 302,
    headers: {
      Location: lastNavigationRequest,
    },
  })
}

const navigationRoute = new NavigationRoute(async ({ event }) => {
  // handle API requests separately to normal navigation requests, so do this
  // check first
  if (event.request.url.match(/\/.gatsby-plugin-offline:.+/)) {
    return handleAPIRequest({ event })
  }

  if (!offlineShellEnabled) {
    return await fetch(event.request)
  }

  lastNavigationRequest = event.request.url

  let { pathname } = new URL(event.request.url)
  pathname = pathname.replace(new RegExp(`^`), ``)

  // Check for resources + the app bundle
  // The latter may not exist if the SW is updating to a new version
  const resources = await idbKeyval.get(`resources:${pathname}`)
  if (!resources || !(await caches.match(`/app-bfb76851bd973ad470ed.js`))) {
    return await fetch(event.request)
  }

  for (const resource of resources) {
    // As soon as we detect a failed resource, fetch the entire page from
    // network - that way we won't risk being in an inconsistent state with
    // some parts of the page failing.
    if (!(await caches.match(resource))) {
      return await fetch(event.request)
    }
  }

  const offlineShell = `/offline-plugin-app-shell-fallback/index.html`
  const offlineShellWithKey = workbox.precaching.getCacheKeyForURL(offlineShell)
  return await caches.match(offlineShellWithKey)
})

workbox.routing.registerRoute(navigationRoute)

// this route is used when performing a non-navigation request (e.g. fetch)
workbox.routing.registerRoute(/\/.gatsby-plugin-offline:.+/, handleAPIRequest)
