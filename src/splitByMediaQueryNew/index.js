"use strict";var css=require("css"),CleanCSS=require("clean-css"),matchMedia=require("./matchMedia"),splitByMediaQuery=function(a){var b=a.cssFile,c=a.mediaOptions,d=a.minify,e={},f=css.parse(b).stylesheet.rules,g={common:[]};return Object.keys(c).forEach(function(a){g[a]=[]}),f.forEach(function(a,b){var d=a.type,e=a.media,h=matchMedia({mediaQuery:e,mediaOptions:c}),i=f[b],j=Object.values(h).every(function(a){return!a});"media"!==d||j?g.common.push(i):Object.keys(h).forEach(function(a){var b=h[a];b&&g[a].push(i)})}),Object.keys(g).forEach(function(a){e[a]=[];var b=g[a];b.forEach(function(b){var c=b.media,d=b.rules,f=e[a].map(function(a){var b=a.media;return b}).indexOf(c);!c||0>f?e[a].push(b):e[a][f].rules=e[a][f].rules.concat(d)});var c=css.stringify({type:"stylesheet",stylesheet:{rules:e[a]}});e[a]=d?new CleanCSS().minify(c).styles:c}),e};module.exports=splitByMediaQuery;