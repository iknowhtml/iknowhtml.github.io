!function(e){function t(a){if(n[a])return n[a].exports;var r=n[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,a){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:a})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=1)}([function(e,t,n){"use strict";function a(e,t,n,a){a=a||0;var r=0;(0,u.default)(function(){return document.getElementById(e).innerHTML=document.getElementById(e).innerHTML+n[r],r++,n[r-1]+n[r]==". "},t,n.length,a)}Object.defineProperty(t,"__esModule",{value:!0});var r=n(2),u=function(e){return e&&e.__esModule?e:{default:e}}(r);t.default=a},function(e,t,n){"use strict";var a=n(0),r=function(e){return e&&e.__esModule?e:{default:e}}(a);document.addEventListener("DOMContentLoaded",function(){var e="Hi, I'm Aki. This is my website. Learn more about me below.",t=50*e.length+400*e.match(/(\w\.$)|(\w\. )/g).length;(0,r.default)("header-text",50,e,400),setTimeout(function(){document.getElementById("search-bar").classList.add("fade-in"),document.getElementsByTagName("h1")[0].removeChild(document.getElementById("cursor")),document.getElementById("search-bar").focus()},t);var n=null,a=null;document.getElementById("search-bar").addEventListener("keyup",function(t){var r=this;clearTimeout(n),clearTimeout(a),n=setTimeout(function(){function n(e,t){var n=document.getElementById(e);n.classList.remove(t),n.addEventListener("transitionend",function(t){t.elapsedTime<=1&&t.elapsedTime>=.5&&"resume"==e&&n.classList.remove("show")})}function u(e,t){var n=document.getElementById(e);n.classList.add("show"),a=setTimeout(function(){n.classList.add(t)},250)}if(t.keyCode>=48&&t.keyCode<=90||t.keyCode>=186){if(/^a((b|(bo)|(bou)|(bout))?)$/.test(r.value)){var o=r.value.length;r.value="about",r.setSelectionRange(o,5),r.focus()}if(/^r((e|(es)|(esu)|(esum)|(esume))?)$/.test(r.value)){var o=r.value.length;r.value="resume",r.setSelectionRange(o,6),r.focus()}if(/^p((r|(ro)|(roj)|(roje)|(rojec)|(roject)|(rojects))?)$/.test(r.value)){var o=r.value.length;r.value="projects",r.setSelectionRange(o,8),r.focus()}}switch(r.value){case"about":n("projects","expand-fast"),n("resume","expand-fast"),u("about","expand");break;case"projects":n("about","expand"),n("resume","expand-fast"),u("projects","expand-fast");break;case"resume":n("about","expand"),n("projects","expand-fast"),u("resume","expand-fast");break;default:n("about","expand"),n("projects","expand-fast"),n("resume","expand-fast")}var s=document.getElementById("header-text");r.value?"about"===r.value||"resume"===r.value||"projects"===r.value?"Aki Gao - 1 search result"!=s.innerHTML&&(s.style.opacity=0,s.addEventListener("transitionend",function(){s.innerHTML="Aki Gao - 1 search result",s.style.opacity=1})):"Aki Gao - 0 search results"!=s.innerHTML&&(s.style.opacity=0,s.addEventListener("transitionend",function(){s.innerHTML="Aki Gao - 0 search results",s.style.opacity=1})):s.innerHTML!=e&&(s.style.opacity=0,s.addEventListener("transitionend",function(){s.innerHTML=e,s.style.opacity=1}))},150)})})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(e,t,n,a){function r(n){if(0!=n){var o=Date.now()-u;e.apply(null,arguments)?(u+=a,setTimeout(function(){return r(n-1)},a-o)):(u+=t,setTimeout(function(){return r(n-1)},t-o))}}var u=Date.now();r(n)};t.default=a}]);