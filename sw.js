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
    "url": "webpack-runtime-8b3507593da496c74b19.js"
  },
  {
    "url": "styles.7301fbb3b9dbf4a92b2a.css"
  },
  {
    "url": "styles-6b8affa5cc22cb60670e.js"
  },
  {
    "url": "framework-6d74ccdfc38316c7de93.js"
  },
  {
    "url": "app-f1dcf4336f5ddf31c52d.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "648349dcc6b9d81a60047bec6e943c1c"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-18b9bd78e89bbe4752a5.js"
  },
  {
    "url": "1bfc9850-674029a6970ab3fbeb64.js"
  },
  {
    "url": "95b64a6e-7df4b477ec432349209d.js"
  },
  {
    "url": "252f366e-36b492e5794f9d1e61c1.js"
  },
  {
    "url": "component---src-pages-home-js-5114d1c84b2b0538b0ce.js"
  },
  {
    "url": "page-data/home/page-data.json",
    "revision": "be36a228229c3c4cf3f070f39dadf7fe"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "e7ac0c1e5c8c3f753861e04532d7ca69"
  },
  {
    "url": "component---src-pages-projects-js-a0df597648862f57ddfa.js"
  },
  {
    "url": "page-data/projects/page-data.json",
    "revision": "90670ff3891eb0dae388d43370e88dbd"
  },
  {
    "url": "component---src-pages-skills-js-fd7f9307f29b43489efa.js"
  },
  {
    "url": "page-data/skills/page-data.json",
    "revision": "957a842f379aba1d7d3ce53aaddaad17"
  },
  {
    "url": "component---src-pages-experience-js-080f7320eea262a8824d.js"
  },
  {
    "url": "page-data/experience/page-data.json",
    "revision": "b039595895b5abc8aa8b35fd04ae2531"
  },
  {
    "url": "component---src-pages-resume-js-80d3a3c80b300d0802ce.js"
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
  if (!resources || !(await caches.match(`/app-f1dcf4336f5ddf31c52d.js`))) {
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
