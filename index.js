/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _type = __webpack_require__(1);

	var _type2 = _interopRequireDefault(_type);

	var _domListener = __webpack_require__(3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	document.addEventListener("DOMContentLoaded", function () {
		var texts = ["Hi, I'm Aki.", "This is my website.", "Learn more about me below."];
		var interval = 100;
		var textDelay = 500;;
		(0, _type2.default)("header-text", interval, texts, textDelay);

		var delay = textDelay * texts.length - 1;
		for (var i = 0; i < texts.length; i++) {
			delay += interval * texts[i].length;
		}
		//fades search bar in and removes cursor from dom
		setTimeout(function () {
			document.getElementById('search-bar').classList.add("fade-in");
			document.getElementsByTagName('h1')[0].removeChild(document.getElementById('cursor'));
		}, delay);

		var typeTimer = null;
		var resultTimer = null;

		//sets up search bar autocomplete
		document.getElementById('search-bar').addEventListener("keyup", function (e) {
			var _this = this;

			clearTimeout(typeTimer);
			clearTimeout(resultTimer);

			typeTimer = setTimeout(function () {
				if (e.keyCode >= 48 && e.keyCode <= 90 || e.keyCode >= 186) {
					//eventually refactor to create function that generates regex and replicates functionality
					if (/^a((b|(bo)|(bou)|(bout))?)$/.test(_this.value)) {
						var start = _this.value.length;
						_this.value = "about";
						_this.setSelectionRange(start, 5);
						_this.focus();
					}

					if (/^r((e|(es)|(esu)|(esum)|(esume))?)$/.test(_this.value)) {
						var start = _this.value.length;
						_this.value = "resume";
						_this.setSelectionRange(start, 6);
						_this.focus();
					}

					if (/^p((r|(ro)|(roj)|(roje)|(rojec)|(roject)|(rojects))?)$/.test(_this.value)) {
						var start = _this.value.length;
						_this.value = "projects";
						_this.setSelectionRange(start, 8);
						_this.focus();
					}
				}
				switch (_this.value) {
					case "about":
						resultTimer = setTimeout(function () {
							return document.getElementById('about').classList.add('expand');
						}, 250);
						break;
					case "projects":
						resultTimer = setTimeout(function () {
							return document.getElementById('projects').classList.add('expand');
						}, 250);
						break;
					default:
						document.getElementById('about').classList.remove('expand');
						document.getElementById('projects').classList.remove('expand');
						break;
				}

				var headerText = document.getElementById('header-text');

				if (_this.value) {
					if (_this.value === "about" || _this.value === "resume" || _this.value === "projects") {
						if (headerText.innerHTML != "Aki Gao - 1 search result") {
							headerText.style.opacity = 0;
							document.addEventListener('transitionend', function () {
								headerText.innerHTML = "Aki Gao - 1 search result";
								headerText.style.opacity = 1;
							});
						}
					} else {
						if (headerText.innerHTML != "Aki Gao - 0 search results") {
							headerText.style.opacity = 0;
							document.addEventListener('transitionend', function () {
								headerText.innerHTML = "Aki Gao - 0 search results";
								headerText.style.opacity = 1;
							});
						}
					}
				} else {
					if (headerText.innerHTML != texts.join(' ')) {
						headerText.style.opacity = 0;
						document.addEventListener('transitionend', function () {
							headerText.innerHTML = texts.join(' ');
							headerText.style.opacity = 1;
						});
					}
				}
			}, 150);
		});
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _repeat = __webpack_require__(2);

	var _repeat2 = _interopRequireDefault(_repeat);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	function type(id, interval, values, textDelay) {
	  var texts = [];
	  values.constructor !== Array ? texts.push(values) : texts.push.apply(texts, _toConsumableArray(values));
	  textDelay = textDelay || 0;

	  texts.forEach(function (text, textsIndex) {
	    var delay = 0;

	    for (var i = 0; i < textsIndex; i++) {
	      //calculating delay due to typing different sentences being asynchronous
	      delay += interval * texts[i].length + textDelay;
	    }
	    var textIndex = 1;
	    (0, _repeat2.default)(function () {
	      if (textsIndex != 0 && textIndex == 1) {
	        document.getElementById(id).innerHTML = document.getElementById(id).innerHTML + " ";
	      }
	      document.getElementById(id).innerHTML = document.getElementById(id).innerHTML + text[textIndex - 1];
	      textIndex++;
	    }, 100, text.length, delay);
	  });
	}

	exports.default = type;

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var repeat = function repeat(callback, interval, repetitions, delay) {
	  function repeater(repetitions) {
	    if (repetitions != 0) {
	      callback.apply(null, arguments);
	      setTimeout(function () {
	        return repeater(repetitions - 1);
	      }, interval);
	    }
	  }
	  if (delay) {
	    setTimeout(function () {
	      return repeater(repetitions);
	    }, delay);
	  } else {
	    repeater(repetitions);
	  }
	};

	exports.default = repeat;

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	function addDOMListener(target, callback, config) {
	  var element = document.getElementById(target);
	  var observer = new WebKitMutationObserver(function (mutations) {
	    callback();
	  });

	  config = config || {
	    attributes: true,
	    childList: true,
	    characterData: true,
	    subtree: true
	  };

	  observer.observe(element, config);

	  return observer;
	}

	function removeDomListener(observer) {
	  observer.disconnect();
	}

	exports.addDOMListener = addDOMListener;
	exports.removeDomListener = removeDomListener;

/***/ }
/******/ ]);