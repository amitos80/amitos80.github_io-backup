module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"Amit Friedberg's Resume on the Web","short_name":"Resume on the Web","start_url":"/","background_color":"#fff","theme_color":"#38b2ac","display":"minimal-ui","icon":"src/images/icon.png","cache_busting_mode":"none"},
    },{
      plugin: require('../node_modules/gatsby-plugin-offline/gatsby-browser.js'),
      options: {"plugins":[],"workboxConfig":{"globPatterns":["**/*"]}},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
