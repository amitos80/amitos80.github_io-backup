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
    "revision": "c8f4350cdbfa42230e81d4962c1da7a3"
  },
  {
    "url": "404/index.html",
    "revision": "548a33ceac946b75f9a0a195c52f4651"
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
    "revision": "bb2c3b2951620ac9f4cb12a0d12e24dd"
  },
  {
    "url": "app-693f5d1beaf3d1ea25be.js"
  },
  {
    "url": "app-693f5d1beaf3d1ea25be.js.map",
    "revision": "6737f83cdc046c175ccc4b835fc62a57"
  },
  {
    "url": "chunk-map.json",
    "revision": "4865fcffdd3641ede623f9622549374d"
  },
  {
    "url": "ciyot.png",
    "revision": "ab327704e52525135a3694a8a432c6db"
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
    "url": "component---src-pages-about-js-8e87b996dbf4be01f34d.js"
  },
  {
    "url": "component---src-pages-about-js-8e87b996dbf4be01f34d.js.map",
    "revision": "18c718d99b6974d3e99d576ea168fd89"
  },
  {
    "url": "component---src-pages-experience-js-e0e3d3a017e5e86ee400.js"
  },
  {
    "url": "component---src-pages-experience-js-e0e3d3a017e5e86ee400.js.map",
    "revision": "789bfed11a213a130a6de42f200f07f1"
  },
  {
    "url": "component---src-pages-index-js-2cbd830825b53da351dd.js"
  },
  {
    "url": "component---src-pages-index-js-2cbd830825b53da351dd.js.map",
    "revision": "acdfa114e4ccb7567fa3bccbf487efb3"
  },
  {
    "url": "component---src-pages-projects-js-daeebb3e494eb53635ec.js"
  },
  {
    "url": "component---src-pages-projects-js-daeebb3e494eb53635ec.js.map",
    "revision": "404bef0ee75a4d59d21299f3bfcc382b"
  },
  {
    "url": "component---src-pages-resume-js-fd94776dfb24f0c88dd1.js"
  },
  {
    "url": "component---src-pages-resume-js-fd94776dfb24f0c88dd1.js.map",
    "revision": "581879c8724a5e8247ea1d09194eb490"
  },
  {
    "url": "component---src-pages-skills-js-a603280feb968651876d.js"
  },
  {
    "url": "component---src-pages-skills-js-a603280feb968651876d.js.map",
    "revision": "26708d95b24af77f129c39d8583bab4c"
  },
  {
    "url": "experience/index.html",
    "revision": "07b9cb8b19bca28b842de0b388e5040d"
  },
  {
    "url": "favicon-32x32.png",
    "revision": "c13d7de135016ba6486216b8ccde004d"
  },
  {
    "url": "ffm-player.png",
    "revision": "0c1935335c89dc37774e49a4c69bfd41"
  },
  {
    "url": "framework-8145bab88101e522accb.js"
  },
  {
    "url": "framework-8145bab88101e522accb.js.map",
    "revision": "23ab39e28a76c003debb42b7b0bf0cdb"
  },
  {
    "url": "fxempire.png",
    "revision": "6cf8cfb9054331b03758031de453a9ef"
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
    "revision": "fe6438a7701e4eec4231e45af9ceccf8"
  },
  {
    "url": "lnrd.png",
    "revision": "3474bed81a25ff7ab8d0206e2b60ca3f"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "7da23ac2fc28debfc4b22c64a1727654"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "dbf6b0232df17bc016f81d265d8cc840"
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
    "revision": "0978904db262033c05b8c024d4b74ef0"
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
    "url": "profile.png",
    "revision": "aec40c5d062faba36e6e805e0c1a7dd6"
  },
  {
    "url": "projects/index.html",
    "revision": "5c98f5661aea5154864f8532fc43f526"
  },
  {
    "url": "resume/index.html",
    "revision": "965b9be7ac7c620b7d1cb862d8ce0a57"
  },
  {
    "url": "robots.txt",
    "revision": "0055a8ec56a7e1a59c390981ba6c6ef8"
  },
  {
    "url": "site-screenshot.png",
    "revision": "b7c304ed54d1ae14cae97bda800bf149"
  },
  {
    "url": "sitemap.xml",
    "revision": "a94bbb4a3c02cf6a9d237f25b8b3d60d"
  },
  {
    "url": "sitemap1.xml",
    "revision": "d3cd42fd9ea04031584c6842f7f4ae24"
  },
  {
    "url": "skills/index.html",
    "revision": "055e128db8e93c1f0b3b33c776d864da"
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
    "url": "static/d/1281174074.json"
  },
  {
    "url": "static/d/2542702433.json"
  },
  {
    "url": "static/d/297506416.json"
  },
  {
    "url": "static/d/3731995382.json"
  },
  {
    "url": "static/d/3815159841.json"
  },
  {
    "url": "static/d/4131596027.json"
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
    "url": "styles.7d659acb735d0aaefe76.css"
  },
  {
    "url": "webpack-runtime-a6db6d1cf8c87183b508.js"
  },
  {
    "url": "webpack-runtime-a6db6d1cf8c87183b508.js.map",
    "revision": "8c4c5193be58b8021a7b536cccc06f17"
  },
  {
    "url": "webpack.stats.json",
    "revision": "be838e2de52829ebbd0dae02ec13e970"
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
  if (!resources || !(await caches.match(`/app-693f5d1beaf3d1ea25be.js`))) {
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
