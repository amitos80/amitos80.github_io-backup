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
    "revision": "55fc7c6642e07631ccaffe67ec144936"
  },
  {
    "url": "404/index.html",
    "revision": "9d879c767647365ccc2e92fc6c5811ae"
  },
  {
    "url": "95b64a6e-7df4b477ec432349209d.js"
  },
  {
    "url": "95b64a6e-7df4b477ec432349209d.js.map",
    "revision": "d6c63b2ca14736c51bb6d230c2300200"
  },
  {
    "url": "about-screenshot.png",
    "revision": "597d63fa2d944d8e110eaae6fb9b0bf5"
  },
  {
    "url": "about/index.html",
    "revision": "8ac559ef84382433ee982e65e1953444"
  },
  {
    "url": "app-3b6e30f011455df0e4db.js"
  },
  {
    "url": "app-3b6e30f011455df0e4db.js.map",
    "revision": "ed2847de9532ecda3ad27f89106d537f"
  },
  {
    "url": "chunk-map.json",
    "revision": "4db6973bb43bd21cf2a36785075d2aed"
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
    "url": "component---src-pages-about-js-4f12a38c1f7ec899fae4.js"
  },
  {
    "url": "component---src-pages-about-js-4f12a38c1f7ec899fae4.js.map",
    "revision": "67dad002ce3dc2529c7c9737a078d363"
  },
  {
    "url": "component---src-pages-about-js-90875b2242061efde36c.js"
  },
  {
    "url": "component---src-pages-about-js-90875b2242061efde36c.js.map",
    "revision": "706d3adf0804f20264dd870b4ca57f2f"
  },
  {
    "url": "component---src-pages-about-js-a803faa39ce1467709cb.js"
  },
  {
    "url": "component---src-pages-about-js-a803faa39ce1467709cb.js.map",
    "revision": "163ad44e0aad8931cfb2bc3dc2c39155"
  },
  {
    "url": "component---src-pages-about-js-b07e29305eb8bf14c356.js"
  },
  {
    "url": "component---src-pages-about-js-b07e29305eb8bf14c356.js.map",
    "revision": "d0f82a1c9782051e6fae63a0bd73dea3"
  },
  {
    "url": "component---src-pages-about-js-d9a89b4e8f91d6f093ad.js"
  },
  {
    "url": "component---src-pages-about-js-d9a89b4e8f91d6f093ad.js.map",
    "revision": "e4e3a842e7839fc6debccc78b67c0b9e"
  },
  {
    "url": "component---src-pages-about-js-e431edf18f53cd95ae8d.js"
  },
  {
    "url": "component---src-pages-about-js-e431edf18f53cd95ae8d.js.map",
    "revision": "64a12541f2a6b4bbe9b6f48b6e7f2851"
  },
  {
    "url": "component---src-pages-experience-js-021ad2d4472667860533.js"
  },
  {
    "url": "component---src-pages-experience-js-021ad2d4472667860533.js.map",
    "revision": "b44289adca70850a330946bd8259e52c"
  },
  {
    "url": "component---src-pages-experience-js-110723d0c20407c44542.js"
  },
  {
    "url": "component---src-pages-experience-js-110723d0c20407c44542.js.map",
    "revision": "2211d77ff7324ee73751988e32342ad7"
  },
  {
    "url": "component---src-pages-experience-js-4cd9d1e69e5ce4be3393.js"
  },
  {
    "url": "component---src-pages-experience-js-4cd9d1e69e5ce4be3393.js.map",
    "revision": "279565dee971bbb6ad7772869359f077"
  },
  {
    "url": "component---src-pages-experience-js-abbe2915801fdba3430f.js"
  },
  {
    "url": "component---src-pages-experience-js-abbe2915801fdba3430f.js.map",
    "revision": "66be434066363df9395135111d81d34d"
  },
  {
    "url": "component---src-pages-experience-js-bd77bf14ac10f9687865.js"
  },
  {
    "url": "component---src-pages-experience-js-bd77bf14ac10f9687865.js.map",
    "revision": "dc2772d4597ec9ca0ba9934a944e80fb"
  },
  {
    "url": "component---src-pages-experience-js-fe8ab00e6ad4a6d7d7fe.js"
  },
  {
    "url": "component---src-pages-experience-js-fe8ab00e6ad4a6d7d7fe.js.map",
    "revision": "bbfaae3fbc2d93ccdbc97c1057c0105d"
  },
  {
    "url": "component---src-pages-index-js-18657812ecdbd593cf37.js"
  },
  {
    "url": "component---src-pages-index-js-18657812ecdbd593cf37.js.map",
    "revision": "58a599224c2c79c8a159c54887377fc8"
  },
  {
    "url": "component---src-pages-index-js-471dd313e5a556a9eaf0.js"
  },
  {
    "url": "component---src-pages-index-js-471dd313e5a556a9eaf0.js.map",
    "revision": "45a3646f0b76ba48ea163f30ac5296d8"
  },
  {
    "url": "component---src-pages-index-js-6e66d7bb7fbe0d0a3543.js"
  },
  {
    "url": "component---src-pages-index-js-6e66d7bb7fbe0d0a3543.js.map",
    "revision": "0220494880613e3a771ad2a3e69fe343"
  },
  {
    "url": "component---src-pages-index-js-84931c2cc786f8efdeb1.js"
  },
  {
    "url": "component---src-pages-index-js-84931c2cc786f8efdeb1.js.map",
    "revision": "00934eb976fc9a4c0bc1e7c688abe446"
  },
  {
    "url": "component---src-pages-index-js-dfb6f61142a5fe75d94f.js"
  },
  {
    "url": "component---src-pages-index-js-dfb6f61142a5fe75d94f.js.map",
    "revision": "51d960c0b64860b7a88117069f5feedd"
  },
  {
    "url": "component---src-pages-index-js-f73850629f3b8ee593e9.js"
  },
  {
    "url": "component---src-pages-index-js-f73850629f3b8ee593e9.js.map",
    "revision": "1c790d6bfa5ca46291ecd0636f1ef3ed"
  },
  {
    "url": "component---src-pages-projects-js-0ee1b7bc8839a03637b9.js"
  },
  {
    "url": "component---src-pages-projects-js-0ee1b7bc8839a03637b9.js.map",
    "revision": "e58f1655f5674ba65539d1ba9cb12e8d"
  },
  {
    "url": "component---src-pages-projects-js-3e673e6641a9031c8396.js"
  },
  {
    "url": "component---src-pages-projects-js-3e673e6641a9031c8396.js.map",
    "revision": "7e572621a129098995b7a91affba8aa7"
  },
  {
    "url": "component---src-pages-projects-js-822750c39969621765fe.js"
  },
  {
    "url": "component---src-pages-projects-js-822750c39969621765fe.js.map",
    "revision": "67d651fc18eeac52141d84d74e2d7156"
  },
  {
    "url": "component---src-pages-projects-js-91bb72fa6551be08fd60.js"
  },
  {
    "url": "component---src-pages-projects-js-91bb72fa6551be08fd60.js.map",
    "revision": "1e7a0e4fab25e0e55e4bb939888a6b49"
  },
  {
    "url": "component---src-pages-projects-js-9c42654b6ae05d35a863.js"
  },
  {
    "url": "component---src-pages-projects-js-9c42654b6ae05d35a863.js.map",
    "revision": "35a65b08fa749f7fd790066b488467b6"
  },
  {
    "url": "component---src-pages-projects-js-fe751af0981be75ca9bc.js"
  },
  {
    "url": "component---src-pages-projects-js-fe751af0981be75ca9bc.js.map",
    "revision": "1afae52133f96345f721b7f55ac5172a"
  },
  {
    "url": "component---src-pages-resume-js-02e6c8c16a21497b27ed.js"
  },
  {
    "url": "component---src-pages-resume-js-02e6c8c16a21497b27ed.js.map",
    "revision": "475a22f66ed2a059001f3c9cdca2e1e8"
  },
  {
    "url": "component---src-pages-resume-js-1aac8b7f275aefd8f3a7.js"
  },
  {
    "url": "component---src-pages-resume-js-1aac8b7f275aefd8f3a7.js.map",
    "revision": "40f457b1b289333de4042bb62cca4019"
  },
  {
    "url": "component---src-pages-resume-js-450f1223ec44d3707f68.js"
  },
  {
    "url": "component---src-pages-resume-js-450f1223ec44d3707f68.js.map",
    "revision": "eb4d26f215d19c39ff1b1a144943ecb5"
  },
  {
    "url": "component---src-pages-resume-js-aa9566566aa511169032.js"
  },
  {
    "url": "component---src-pages-resume-js-aa9566566aa511169032.js.map",
    "revision": "018f04030fb12f64856c694e71a311d1"
  },
  {
    "url": "component---src-pages-resume-js-d559a3ef8acdfaca460d.js"
  },
  {
    "url": "component---src-pages-resume-js-d559a3ef8acdfaca460d.js.map",
    "revision": "7d65cfbf7dd2971c7609182e3d256637"
  },
  {
    "url": "component---src-pages-resume-js-e4d029c63ca845aadba4.js"
  },
  {
    "url": "component---src-pages-resume-js-e4d029c63ca845aadba4.js.map",
    "revision": "5923fd87afbafa2f40900663b60ae664"
  },
  {
    "url": "component---src-pages-skills-js-62f63f0b91fc9587acb0.js"
  },
  {
    "url": "component---src-pages-skills-js-62f63f0b91fc9587acb0.js.map",
    "revision": "77bbdbf7761b6fac8773440a6c6848fb"
  },
  {
    "url": "component---src-pages-skills-js-697de759af46023eacef.js"
  },
  {
    "url": "component---src-pages-skills-js-697de759af46023eacef.js.map",
    "revision": "722d96cbfd0a404bcc1aa0b1a5e729fa"
  },
  {
    "url": "component---src-pages-skills-js-81100ae15ab07c4b5bc5.js"
  },
  {
    "url": "component---src-pages-skills-js-81100ae15ab07c4b5bc5.js.map",
    "revision": "1fe130efe49f1fa65074bfb41dd3e477"
  },
  {
    "url": "component---src-pages-skills-js-84ef98ebb520d1368cdf.js"
  },
  {
    "url": "component---src-pages-skills-js-84ef98ebb520d1368cdf.js.map",
    "revision": "2ec3227d23840d9a6997c8c6cea21d93"
  },
  {
    "url": "component---src-pages-skills-js-b374166aef3c288bceb0.js"
  },
  {
    "url": "component---src-pages-skills-js-b374166aef3c288bceb0.js.map",
    "revision": "5bc8f1b010270961b3776dd2757e0bef"
  },
  {
    "url": "component---src-pages-skills-js-d8b2ae30d6ec9ec6d870.js"
  },
  {
    "url": "component---src-pages-skills-js-d8b2ae30d6ec9ec6d870.js.map",
    "revision": "8f6b4c127516be6c6e8d7838c220f295"
  },
  {
    "url": "experience-screenshot.png",
    "revision": "fb4e35e8945b2a6ebce09535642de1f3"
  },
  {
    "url": "experience/index.html",
    "revision": "5a92c0dcc9114d40522cec5b1400a57f"
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
    "revision": "559055b30c48db2670d57302680b44c2"
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
    "revision": "a58634392d265d94c5ebbc6684dd3134"
  },
  {
    "url": "page-data/404.html/page-data.json",
    "revision": "d2d3612af1df181302e193fa8c922dd4"
  },
  {
    "url": "page-data/404/page-data.json",
    "revision": "20844607d05999773921df68a988a91a"
  },
  {
    "url": "page-data/about/page-data.json",
    "revision": "3d61bb1ad1152818a4d85cc2082b0c07"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "ce7a241e6c335fd143685812da3555c2"
  },
  {
    "url": "page-data/dev-404-page/page-data.json",
    "revision": "ee500814e536fa6b81b0de4cb4a11bbc"
  },
  {
    "url": "page-data/experience/page-data.json",
    "revision": "b039595895b5abc8aa8b35fd04ae2531"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "52ac373db6fdcd99395590a2c9514f68"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "cb7b22d6b08b7db6dfd1ac71359b5ebf"
  },
  {
    "url": "page-data/projects/page-data.json",
    "revision": "90670ff3891eb0dae388d43370e88dbd"
  },
  {
    "url": "page-data/resume/page-data.json",
    "revision": "043cd1c5db70ce9522012b2daed4c18a"
  },
  {
    "url": "page-data/skills/page-data.json",
    "revision": "957a842f379aba1d7d3ce53aaddaad17"
  },
  {
    "url": "profile.png",
    "revision": "aec40c5d062faba36e6e805e0c1a7dd6"
  },
  {
    "url": "projects-screenshot.png",
    "revision": "c2795ee1ba77a4c5468bb8fee542f8ba"
  },
  {
    "url": "projects/index.html",
    "revision": "1e5fc0d1d28b1e89ffdded8ac473fa97"
  },
  {
    "url": "resume-screenshot.png",
    "revision": "03f186c5cb3aa35897df9cdd5c41125c"
  },
  {
    "url": "resume/index.html",
    "revision": "0beb72ed607081dcee3224c85b6c9fe5"
  },
  {
    "url": "robots.txt",
    "revision": "211392364c6313af09166f431a123be4"
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
    "revision": "4b1bca566edd9ef4fc59c30280c59218"
  },
  {
    "url": "skills-screenshot.png",
    "revision": "17206c7358f98edabab69273d8214b69"
  },
  {
    "url": "skills/index.html",
    "revision": "f764266fb478c19306b9940608716ef4"
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
    "url": "static/d/2270776855.json"
  },
  {
    "url": "static/d/2542702433.json"
  },
  {
    "url": "static/d/297506416.json"
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
    "url": "styles.c13cded1885ab0b3710c.css"
  },
  {
    "url": "webpack-runtime-53cf99f629c47317bf30.js"
  },
  {
    "url": "webpack-runtime-53cf99f629c47317bf30.js.map",
    "revision": "26770bcc2656c425b9b4eaac1000619d"
  },
  {
    "url": "webpack-runtime-58197b6d20e1a961206d.js"
  },
  {
    "url": "webpack-runtime-58197b6d20e1a961206d.js.map",
    "revision": "45a3ccae59e8f474f4c1db3187354bc2"
  },
  {
    "url": "webpack-runtime-964989a661edf34b5667.js"
  },
  {
    "url": "webpack-runtime-964989a661edf34b5667.js.map",
    "revision": "f442afa946ea20832e2e0da9870447ca"
  },
  {
    "url": "webpack-runtime-96d0c8434534151e8c15.js"
  },
  {
    "url": "webpack-runtime-96d0c8434534151e8c15.js.map",
    "revision": "c88c8b891b6d68d62d699f9197334070"
  },
  {
    "url": "webpack-runtime-ababb4ef664956de20ce.js"
  },
  {
    "url": "webpack-runtime-ababb4ef664956de20ce.js.map",
    "revision": "c5a327f68d8380f56e6007f1ce037f79"
  },
  {
    "url": "webpack-runtime-acd1c708e1a19acd743f.js"
  },
  {
    "url": "webpack-runtime-acd1c708e1a19acd743f.js.map",
    "revision": "d41702119acc0cbe47416ec6fbe46226"
  },
  {
    "url": "webpack.stats.json",
    "revision": "cb6db8279976ba11d626373d3d4b3e31"
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
  if (!resources || !(await caches.match(`/app-3b6e30f011455df0e4db.js`))) {
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
