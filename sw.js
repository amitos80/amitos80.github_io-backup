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
    "url": "webpack-runtime-b275a535634bfbea6691.js"
  },
  {
    "url": "styles.e68d655f83bf70b95a76.css"
  },
  {
    "url": "styles-6b8affa5cc22cb60670e.js"
  },
  {
    "url": "framework-6d74ccdfc38316c7de93.js"
  },
  {
    "url": "app-6285c0467817c60216a0.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "1df50fe531faa33300fd98ddadb4db82"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-18b9bd78e89bbe4752a5.js"
  },
  {
    "url": "1bfc9850-fb75e6b4cc37f300b4a7.js"
  },
  {
    "url": "95b64a6e-7df4b477ec432349209d.js"
  },
  {
    "url": "252f366e-36b492e5794f9d1e61c1.js"
  },
  {
    "url": "component---src-pages-home-js-2e166c3ed6221409ede2.js"
  },
  {
    "url": "page-data/home/page-data.json",
    "revision": "be36a228229c3c4cf3f070f39dadf7fe"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "eead57eeb526f5b12b77ab265ae624ce"
  },
  {
    "url": "component---src-pages-projects-js-d64de56256fda617af94.js"
  },
  {
    "url": "page-data/projects/page-data.json",
    "revision": "90670ff3891eb0dae388d43370e88dbd"
  },
  {
    "url": "component---src-pages-skills-js-ef2556756df5495806ea.js"
  },
  {
    "url": "page-data/skills/page-data.json",
    "revision": "957a842f379aba1d7d3ce53aaddaad17"
  },
  {
    "url": "component---src-pages-experience-js-d5a3009eb271f848095d.js"
  },
  {
    "url": "page-data/experience/page-data.json",
    "revision": "b039595895b5abc8aa8b35fd04ae2531"
  },
  {
    "url": "component---src-pages-resume-js-8503c93a4e6838c3bf46.js"
  },
  {
    "url": "page-data/resume/page-data.json",
    "revision": "043cd1c5db70ce9522012b2daed4c18a"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "bd2039516523fe5ddab77c8073e9b3d4"
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
  if (!resources || !(await caches.match(`/app-6285c0467817c60216a0.js`))) {
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
