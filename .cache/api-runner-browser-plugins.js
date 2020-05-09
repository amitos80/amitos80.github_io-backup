module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"Freelance Web Developer - Amit Freidberg","short_name":"Freelance Web Developer","start_url":"/","background_color":"#fff","theme_color":"#9f7aea","display":"minimal-ui","icon":"src/images/icon.png","cache_busting_mode":"none"},
    },{
      plugin: require('../node_modules/gatsby-plugin-offline/gatsby-browser.js'),
      options: {"plugins":[],"precachePages":["/home/","/projects/","/skills/","/experience/","/resume/"]},
    },{
      plugin: require('../node_modules/gatsby-plugin-breadcrumb/gatsby-browser.js'),
      options: {"plugins":[],"useAutoGen":true},
    },{
      plugin: require('../node_modules/gatsby-plugin-google-analytics/gatsby-browser.js'),
      options: {"plugins":[],"trackingId":"UA-55236659-4","anonymize":true,"alwaysSendReferrer":true,"cookieExpires":2592000,"forceSSL":true,"head":false,"respectDNT":true,"pageTransitionDelay":180,"defer":false,"sampleRate":5,"siteSpeedSampleRate":10,"cookieDomain":"amitos80.github.io"},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
