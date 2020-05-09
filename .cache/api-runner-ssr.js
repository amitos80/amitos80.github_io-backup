var plugins = [{
      plugin: require('/Users/amit/Projects/amitos80.github.io/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/amit/Projects/amitos80.github.io/node_modules/gatsby-plugin-manifest/gatsby-ssr'),
      options: {"plugins":[],"name":"Freelance Web Developer - Amit Freidberg","short_name":"Freelance Web Developer","start_url":"/","background_color":"#fff","theme_color":"#9f7aea","display":"minimal-ui","icon":"src/images/icon.png","cache_busting_mode":"none"},
    },{
      plugin: require('/Users/amit/Projects/amitos80.github.io/node_modules/gatsby-plugin-offline/gatsby-ssr'),
      options: {"plugins":[],"precachePages":["/home/","/projects/","/skills/","/experience/","/resume/"]},
    },{
      plugin: require('/Users/amit/Projects/amitos80.github.io/node_modules/gatsby-plugin-google-fonts/gatsby-ssr'),
      options: {"plugins":[],"fonts":["Fira Sans:400,600"],"display":"swap"},
    },{
      plugin: require('/Users/amit/Projects/amitos80.github.io/node_modules/gatsby-plugin-breadcrumb/gatsby-ssr'),
      options: {"plugins":[],"useAutoGen":true},
    },{
      plugin: require('/Users/amit/Projects/amitos80.github.io/node_modules/gatsby-plugin-google-analytics/gatsby-ssr'),
      options: {"plugins":[],"trackingId":"UA-55236659-4","anonymize":true,"alwaysSendReferrer":true,"cookieExpires":2592000,"forceSSL":true,"head":false,"respectDNT":true,"pageTransitionDelay":180,"defer":false,"sampleRate":5,"siteSpeedSampleRate":10,"cookieDomain":"amitos80.github.io"},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    const result = plugin.plugin[api](args, plugin.options)
    if (result && argTransform) {
      args = argTransform({ args, result })
    }
    return result
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
