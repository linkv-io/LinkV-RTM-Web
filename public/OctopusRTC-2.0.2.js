(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["OctopusRTC"] = factory();
	else
		root["OctopusRTC"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/OctopusRTC.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./config.ts":
/*!*******************!*\
  !*** ./config.ts ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ENV = exports.projectName = exports.version = void 0;
/*
 * @Date: 2020-07-10 17:41:32
 * @LastEditors: GWK
 * @LastEditTime: 2020-07-17 13:31:05
 * @FilePath: /Web_SDK/version.config.js
 */
exports.version = "2.0.2";
exports.projectName = "";
exports.ENV = "development";


/***/ }),

/***/ "./node_modules/base64-js/index.js":
/*!*****************************************!*\
  !*** ./node_modules/base64-js/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  var i
  for (i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}


/***/ }),

/***/ "./node_modules/bowser/es5.js":
/*!************************************!*\
  !*** ./node_modules/bowser/es5.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():undefined}(this,(function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=90)}({17:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var n=r(18),i=function(){function e(){}return e.getFirstMatch=function(e,t){var r=t.match(e);return r&&r.length>0&&r[1]||""},e.getSecondMatch=function(e,t){var r=t.match(e);return r&&r.length>1&&r[2]||""},e.matchAndReturnConst=function(e,t,r){if(e.test(t))return r},e.getWindowsVersionName=function(e){switch(e){case"NT":return"NT";case"XP":return"XP";case"NT 5.0":return"2000";case"NT 5.1":return"XP";case"NT 5.2":return"2003";case"NT 6.0":return"Vista";case"NT 6.1":return"7";case"NT 6.2":return"8";case"NT 6.3":return"8.1";case"NT 10.0":return"10";default:return}},e.getMacOSVersionName=function(e){var t=e.split(".").splice(0,2).map((function(e){return parseInt(e,10)||0}));if(t.push(0),10===t[0])switch(t[1]){case 5:return"Leopard";case 6:return"Snow Leopard";case 7:return"Lion";case 8:return"Mountain Lion";case 9:return"Mavericks";case 10:return"Yosemite";case 11:return"El Capitan";case 12:return"Sierra";case 13:return"High Sierra";case 14:return"Mojave";case 15:return"Catalina";default:return}},e.getAndroidVersionName=function(e){var t=e.split(".").splice(0,2).map((function(e){return parseInt(e,10)||0}));if(t.push(0),!(1===t[0]&&t[1]<5))return 1===t[0]&&t[1]<6?"Cupcake":1===t[0]&&t[1]>=6?"Donut":2===t[0]&&t[1]<2?"Eclair":2===t[0]&&2===t[1]?"Froyo":2===t[0]&&t[1]>2?"Gingerbread":3===t[0]?"Honeycomb":4===t[0]&&t[1]<1?"Ice Cream Sandwich":4===t[0]&&t[1]<4?"Jelly Bean":4===t[0]&&t[1]>=4?"KitKat":5===t[0]?"Lollipop":6===t[0]?"Marshmallow":7===t[0]?"Nougat":8===t[0]?"Oreo":9===t[0]?"Pie":void 0},e.getVersionPrecision=function(e){return e.split(".").length},e.compareVersions=function(t,r,n){void 0===n&&(n=!1);var i=e.getVersionPrecision(t),s=e.getVersionPrecision(r),a=Math.max(i,s),o=0,u=e.map([t,r],(function(t){var r=a-e.getVersionPrecision(t),n=t+new Array(r+1).join(".0");return e.map(n.split("."),(function(e){return new Array(20-e.length).join("0")+e})).reverse()}));for(n&&(o=a-Math.min(i,s)),a-=1;a>=o;){if(u[0][a]>u[1][a])return 1;if(u[0][a]===u[1][a]){if(a===o)return 0;a-=1}else if(u[0][a]<u[1][a])return-1}},e.map=function(e,t){var r,n=[];if(Array.prototype.map)return Array.prototype.map.call(e,t);for(r=0;r<e.length;r+=1)n.push(t(e[r]));return n},e.find=function(e,t){var r,n;if(Array.prototype.find)return Array.prototype.find.call(e,t);for(r=0,n=e.length;r<n;r+=1){var i=e[r];if(t(i,r))return i}},e.assign=function(e){for(var t,r,n=e,i=arguments.length,s=new Array(i>1?i-1:0),a=1;a<i;a++)s[a-1]=arguments[a];if(Object.assign)return Object.assign.apply(Object,[e].concat(s));var o=function(){var e=s[t];"object"==typeof e&&null!==e&&Object.keys(e).forEach((function(t){n[t]=e[t]}))};for(t=0,r=s.length;t<r;t+=1)o();return e},e.getBrowserAlias=function(e){return n.BROWSER_ALIASES_MAP[e]},e.getBrowserTypeByAlias=function(e){return n.BROWSER_MAP[e]||""},e}();t.default=i,e.exports=t.default},18:function(e,t,r){"use strict";t.__esModule=!0,t.ENGINE_MAP=t.OS_MAP=t.PLATFORMS_MAP=t.BROWSER_MAP=t.BROWSER_ALIASES_MAP=void 0;t.BROWSER_ALIASES_MAP={"Amazon Silk":"amazon_silk","Android Browser":"android",Bada:"bada",BlackBerry:"blackberry",Chrome:"chrome",Chromium:"chromium",Electron:"electron",Epiphany:"epiphany",Firefox:"firefox",Focus:"focus",Generic:"generic","Google Search":"google_search",Googlebot:"googlebot","Internet Explorer":"ie","K-Meleon":"k_meleon",Maxthon:"maxthon","Microsoft Edge":"edge","MZ Browser":"mz","NAVER Whale Browser":"naver",Opera:"opera","Opera Coast":"opera_coast",PhantomJS:"phantomjs",Puffin:"puffin",QupZilla:"qupzilla",QQ:"qq",QQLite:"qqlite",Safari:"safari",Sailfish:"sailfish","Samsung Internet for Android":"samsung_internet",SeaMonkey:"seamonkey",Sleipnir:"sleipnir",Swing:"swing",Tizen:"tizen","UC Browser":"uc",Vivaldi:"vivaldi","WebOS Browser":"webos",WeChat:"wechat","Yandex Browser":"yandex",Roku:"roku"};t.BROWSER_MAP={amazon_silk:"Amazon Silk",android:"Android Browser",bada:"Bada",blackberry:"BlackBerry",chrome:"Chrome",chromium:"Chromium",electron:"Electron",epiphany:"Epiphany",firefox:"Firefox",focus:"Focus",generic:"Generic",googlebot:"Googlebot",google_search:"Google Search",ie:"Internet Explorer",k_meleon:"K-Meleon",maxthon:"Maxthon",edge:"Microsoft Edge",mz:"MZ Browser",naver:"NAVER Whale Browser",opera:"Opera",opera_coast:"Opera Coast",phantomjs:"PhantomJS",puffin:"Puffin",qupzilla:"QupZilla",qq:"QQ Browser",qqlite:"QQ Browser Lite",safari:"Safari",sailfish:"Sailfish",samsung_internet:"Samsung Internet for Android",seamonkey:"SeaMonkey",sleipnir:"Sleipnir",swing:"Swing",tizen:"Tizen",uc:"UC Browser",vivaldi:"Vivaldi",webos:"WebOS Browser",wechat:"WeChat",yandex:"Yandex Browser"};t.PLATFORMS_MAP={tablet:"tablet",mobile:"mobile",desktop:"desktop",tv:"tv"};t.OS_MAP={WindowsPhone:"Windows Phone",Windows:"Windows",MacOS:"macOS",iOS:"iOS",Android:"Android",WebOS:"WebOS",BlackBerry:"BlackBerry",Bada:"Bada",Tizen:"Tizen",Linux:"Linux",ChromeOS:"Chrome OS",PlayStation4:"PlayStation 4",Roku:"Roku"};t.ENGINE_MAP={EdgeHTML:"EdgeHTML",Blink:"Blink",Trident:"Trident",Presto:"Presto",Gecko:"Gecko",WebKit:"WebKit"}},90:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var n,i=(n=r(91))&&n.__esModule?n:{default:n},s=r(18);function a(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var o=function(){function e(){}var t,r,n;return e.getParser=function(e,t){if(void 0===t&&(t=!1),"string"!=typeof e)throw new Error("UserAgent should be a string");return new i.default(e,t)},e.parse=function(e){return new i.default(e).getResult()},t=e,n=[{key:"BROWSER_MAP",get:function(){return s.BROWSER_MAP}},{key:"ENGINE_MAP",get:function(){return s.ENGINE_MAP}},{key:"OS_MAP",get:function(){return s.OS_MAP}},{key:"PLATFORMS_MAP",get:function(){return s.PLATFORMS_MAP}}],(r=null)&&a(t.prototype,r),n&&a(t,n),e}();t.default=o,e.exports=t.default},91:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var n=u(r(92)),i=u(r(93)),s=u(r(94)),a=u(r(95)),o=u(r(17));function u(e){return e&&e.__esModule?e:{default:e}}var d=function(){function e(e,t){if(void 0===t&&(t=!1),null==e||""===e)throw new Error("UserAgent parameter can't be empty");this._ua=e,this.parsedResult={},!0!==t&&this.parse()}var t=e.prototype;return t.getUA=function(){return this._ua},t.test=function(e){return e.test(this._ua)},t.parseBrowser=function(){var e=this;this.parsedResult.browser={};var t=o.default.find(n.default,(function(t){if("function"==typeof t.test)return t.test(e);if(t.test instanceof Array)return t.test.some((function(t){return e.test(t)}));throw new Error("Browser's test function is not valid")}));return t&&(this.parsedResult.browser=t.describe(this.getUA())),this.parsedResult.browser},t.getBrowser=function(){return this.parsedResult.browser?this.parsedResult.browser:this.parseBrowser()},t.getBrowserName=function(e){return e?String(this.getBrowser().name).toLowerCase()||"":this.getBrowser().name||""},t.getBrowserVersion=function(){return this.getBrowser().version},t.getOS=function(){return this.parsedResult.os?this.parsedResult.os:this.parseOS()},t.parseOS=function(){var e=this;this.parsedResult.os={};var t=o.default.find(i.default,(function(t){if("function"==typeof t.test)return t.test(e);if(t.test instanceof Array)return t.test.some((function(t){return e.test(t)}));throw new Error("Browser's test function is not valid")}));return t&&(this.parsedResult.os=t.describe(this.getUA())),this.parsedResult.os},t.getOSName=function(e){var t=this.getOS().name;return e?String(t).toLowerCase()||"":t||""},t.getOSVersion=function(){return this.getOS().version},t.getPlatform=function(){return this.parsedResult.platform?this.parsedResult.platform:this.parsePlatform()},t.getPlatformType=function(e){void 0===e&&(e=!1);var t=this.getPlatform().type;return e?String(t).toLowerCase()||"":t||""},t.parsePlatform=function(){var e=this;this.parsedResult.platform={};var t=o.default.find(s.default,(function(t){if("function"==typeof t.test)return t.test(e);if(t.test instanceof Array)return t.test.some((function(t){return e.test(t)}));throw new Error("Browser's test function is not valid")}));return t&&(this.parsedResult.platform=t.describe(this.getUA())),this.parsedResult.platform},t.getEngine=function(){return this.parsedResult.engine?this.parsedResult.engine:this.parseEngine()},t.getEngineName=function(e){return e?String(this.getEngine().name).toLowerCase()||"":this.getEngine().name||""},t.parseEngine=function(){var e=this;this.parsedResult.engine={};var t=o.default.find(a.default,(function(t){if("function"==typeof t.test)return t.test(e);if(t.test instanceof Array)return t.test.some((function(t){return e.test(t)}));throw new Error("Browser's test function is not valid")}));return t&&(this.parsedResult.engine=t.describe(this.getUA())),this.parsedResult.engine},t.parse=function(){return this.parseBrowser(),this.parseOS(),this.parsePlatform(),this.parseEngine(),this},t.getResult=function(){return o.default.assign({},this.parsedResult)},t.satisfies=function(e){var t=this,r={},n=0,i={},s=0;if(Object.keys(e).forEach((function(t){var a=e[t];"string"==typeof a?(i[t]=a,s+=1):"object"==typeof a&&(r[t]=a,n+=1)})),n>0){var a=Object.keys(r),u=o.default.find(a,(function(e){return t.isOS(e)}));if(u){var d=this.satisfies(r[u]);if(void 0!==d)return d}var c=o.default.find(a,(function(e){return t.isPlatform(e)}));if(c){var f=this.satisfies(r[c]);if(void 0!==f)return f}}if(s>0){var l=Object.keys(i),h=o.default.find(l,(function(e){return t.isBrowser(e,!0)}));if(void 0!==h)return this.compareVersion(i[h])}},t.isBrowser=function(e,t){void 0===t&&(t=!1);var r=this.getBrowserName().toLowerCase(),n=e.toLowerCase(),i=o.default.getBrowserTypeByAlias(n);return t&&i&&(n=i.toLowerCase()),n===r},t.compareVersion=function(e){var t=[0],r=e,n=!1,i=this.getBrowserVersion();if("string"==typeof i)return">"===e[0]||"<"===e[0]?(r=e.substr(1),"="===e[1]?(n=!0,r=e.substr(2)):t=[],">"===e[0]?t.push(1):t.push(-1)):"="===e[0]?r=e.substr(1):"~"===e[0]&&(n=!0,r=e.substr(1)),t.indexOf(o.default.compareVersions(i,r,n))>-1},t.isOS=function(e){return this.getOSName(!0)===String(e).toLowerCase()},t.isPlatform=function(e){return this.getPlatformType(!0)===String(e).toLowerCase()},t.isEngine=function(e){return this.getEngineName(!0)===String(e).toLowerCase()},t.is=function(e,t){return void 0===t&&(t=!1),this.isBrowser(e,t)||this.isOS(e)||this.isPlatform(e)},t.some=function(e){var t=this;return void 0===e&&(e=[]),e.some((function(e){return t.is(e)}))},e}();t.default=d,e.exports=t.default},92:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var n,i=(n=r(17))&&n.__esModule?n:{default:n};var s=/version\/(\d+(\.?_?\d+)+)/i,a=[{test:[/googlebot/i],describe:function(e){var t={name:"Googlebot"},r=i.default.getFirstMatch(/googlebot\/(\d+(\.\d+))/i,e)||i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/opera/i],describe:function(e){var t={name:"Opera"},r=i.default.getFirstMatch(s,e)||i.default.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/opr\/|opios/i],describe:function(e){var t={name:"Opera"},r=i.default.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i,e)||i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/SamsungBrowser/i],describe:function(e){var t={name:"Samsung Internet for Android"},r=i.default.getFirstMatch(s,e)||i.default.getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/Whale/i],describe:function(e){var t={name:"NAVER Whale Browser"},r=i.default.getFirstMatch(s,e)||i.default.getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/MZBrowser/i],describe:function(e){var t={name:"MZ Browser"},r=i.default.getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i,e)||i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/focus/i],describe:function(e){var t={name:"Focus"},r=i.default.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i,e)||i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/swing/i],describe:function(e){var t={name:"Swing"},r=i.default.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i,e)||i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/coast/i],describe:function(e){var t={name:"Opera Coast"},r=i.default.getFirstMatch(s,e)||i.default.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/opt\/\d+(?:.?_?\d+)+/i],describe:function(e){var t={name:"Opera Touch"},r=i.default.getFirstMatch(/(?:opt)[\s/](\d+(\.?_?\d+)+)/i,e)||i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/yabrowser/i],describe:function(e){var t={name:"Yandex Browser"},r=i.default.getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i,e)||i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/ucbrowser/i],describe:function(e){var t={name:"UC Browser"},r=i.default.getFirstMatch(s,e)||i.default.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/Maxthon|mxios/i],describe:function(e){var t={name:"Maxthon"},r=i.default.getFirstMatch(s,e)||i.default.getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/epiphany/i],describe:function(e){var t={name:"Epiphany"},r=i.default.getFirstMatch(s,e)||i.default.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/puffin/i],describe:function(e){var t={name:"Puffin"},r=i.default.getFirstMatch(s,e)||i.default.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/sleipnir/i],describe:function(e){var t={name:"Sleipnir"},r=i.default.getFirstMatch(s,e)||i.default.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/k-meleon/i],describe:function(e){var t={name:"K-Meleon"},r=i.default.getFirstMatch(s,e)||i.default.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/micromessenger/i],describe:function(e){var t={name:"WeChat"},r=i.default.getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i,e)||i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/qqbrowser/i],describe:function(e){var t={name:/qqbrowserlite/i.test(e)?"QQ Browser Lite":"QQ Browser"},r=i.default.getFirstMatch(/(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i,e)||i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/msie|trident/i],describe:function(e){var t={name:"Internet Explorer"},r=i.default.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/\sedg\//i],describe:function(e){var t={name:"Microsoft Edge"},r=i.default.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/edg([ea]|ios)/i],describe:function(e){var t={name:"Microsoft Edge"},r=i.default.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/vivaldi/i],describe:function(e){var t={name:"Vivaldi"},r=i.default.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/seamonkey/i],describe:function(e){var t={name:"SeaMonkey"},r=i.default.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/sailfish/i],describe:function(e){var t={name:"Sailfish"},r=i.default.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i,e);return r&&(t.version=r),t}},{test:[/silk/i],describe:function(e){var t={name:"Amazon Silk"},r=i.default.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/phantom/i],describe:function(e){var t={name:"PhantomJS"},r=i.default.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/slimerjs/i],describe:function(e){var t={name:"SlimerJS"},r=i.default.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/blackberry|\bbb\d+/i,/rim\stablet/i],describe:function(e){var t={name:"BlackBerry"},r=i.default.getFirstMatch(s,e)||i.default.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/(web|hpw)[o0]s/i],describe:function(e){var t={name:"WebOS Browser"},r=i.default.getFirstMatch(s,e)||i.default.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/bada/i],describe:function(e){var t={name:"Bada"},r=i.default.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/tizen/i],describe:function(e){var t={name:"Tizen"},r=i.default.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i,e)||i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/qupzilla/i],describe:function(e){var t={name:"QupZilla"},r=i.default.getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i,e)||i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/firefox|iceweasel|fxios/i],describe:function(e){var t={name:"Firefox"},r=i.default.getFirstMatch(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/electron/i],describe:function(e){var t={name:"Electron"},r=i.default.getFirstMatch(/(?:electron)\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/MiuiBrowser/i],describe:function(e){var t={name:"Miui"},r=i.default.getFirstMatch(/(?:MiuiBrowser)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/chromium/i],describe:function(e){var t={name:"Chromium"},r=i.default.getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i,e)||i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/chrome|crios|crmo/i],describe:function(e){var t={name:"Chrome"},r=i.default.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/GSA/i],describe:function(e){var t={name:"Google Search"},r=i.default.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:function(e){var t=!e.test(/like android/i),r=e.test(/android/i);return t&&r},describe:function(e){var t={name:"Android Browser"},r=i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/playstation 4/i],describe:function(e){var t={name:"PlayStation 4"},r=i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/safari|applewebkit/i],describe:function(e){var t={name:"Safari"},r=i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/.*/i],describe:function(e){var t=-1!==e.search("\\(")?/^(.*)\/(.*)[ \t]\((.*)/:/^(.*)\/(.*) /;return{name:i.default.getFirstMatch(t,e),version:i.default.getSecondMatch(t,e)}}}];t.default=a,e.exports=t.default},93:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var n,i=(n=r(17))&&n.__esModule?n:{default:n},s=r(18);var a=[{test:[/Roku\/DVP/],describe:function(e){var t=i.default.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i,e);return{name:s.OS_MAP.Roku,version:t}}},{test:[/windows phone/i],describe:function(e){var t=i.default.getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i,e);return{name:s.OS_MAP.WindowsPhone,version:t}}},{test:[/windows /i],describe:function(e){var t=i.default.getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i,e),r=i.default.getWindowsVersionName(t);return{name:s.OS_MAP.Windows,version:t,versionName:r}}},{test:[/Macintosh(.*?) FxiOS(.*?)\//],describe:function(e){var t={name:s.OS_MAP.iOS},r=i.default.getSecondMatch(/(Version\/)(\d[\d.]+)/,e);return r&&(t.version=r),t}},{test:[/macintosh/i],describe:function(e){var t=i.default.getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i,e).replace(/[_\s]/g,"."),r=i.default.getMacOSVersionName(t),n={name:s.OS_MAP.MacOS,version:t};return r&&(n.versionName=r),n}},{test:[/(ipod|iphone|ipad)/i],describe:function(e){var t=i.default.getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i,e).replace(/[_\s]/g,".");return{name:s.OS_MAP.iOS,version:t}}},{test:function(e){var t=!e.test(/like android/i),r=e.test(/android/i);return t&&r},describe:function(e){var t=i.default.getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i,e),r=i.default.getAndroidVersionName(t),n={name:s.OS_MAP.Android,version:t};return r&&(n.versionName=r),n}},{test:[/(web|hpw)[o0]s/i],describe:function(e){var t=i.default.getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i,e),r={name:s.OS_MAP.WebOS};return t&&t.length&&(r.version=t),r}},{test:[/blackberry|\bbb\d+/i,/rim\stablet/i],describe:function(e){var t=i.default.getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i,e)||i.default.getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i,e)||i.default.getFirstMatch(/\bbb(\d+)/i,e);return{name:s.OS_MAP.BlackBerry,version:t}}},{test:[/bada/i],describe:function(e){var t=i.default.getFirstMatch(/bada\/(\d+(\.\d+)*)/i,e);return{name:s.OS_MAP.Bada,version:t}}},{test:[/tizen/i],describe:function(e){var t=i.default.getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i,e);return{name:s.OS_MAP.Tizen,version:t}}},{test:[/linux/i],describe:function(){return{name:s.OS_MAP.Linux}}},{test:[/CrOS/],describe:function(){return{name:s.OS_MAP.ChromeOS}}},{test:[/PlayStation 4/],describe:function(e){var t=i.default.getFirstMatch(/PlayStation 4[/\s](\d+(\.\d+)*)/i,e);return{name:s.OS_MAP.PlayStation4,version:t}}}];t.default=a,e.exports=t.default},94:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var n,i=(n=r(17))&&n.__esModule?n:{default:n},s=r(18);var a=[{test:[/googlebot/i],describe:function(){return{type:"bot",vendor:"Google"}}},{test:[/huawei/i],describe:function(e){var t=i.default.getFirstMatch(/(can-l01)/i,e)&&"Nova",r={type:s.PLATFORMS_MAP.mobile,vendor:"Huawei"};return t&&(r.model=t),r}},{test:[/nexus\s*(?:7|8|9|10).*/i],describe:function(){return{type:s.PLATFORMS_MAP.tablet,vendor:"Nexus"}}},{test:[/ipad/i],describe:function(){return{type:s.PLATFORMS_MAP.tablet,vendor:"Apple",model:"iPad"}}},{test:[/Macintosh(.*?) FxiOS(.*?)\//],describe:function(){return{type:s.PLATFORMS_MAP.tablet,vendor:"Apple",model:"iPad"}}},{test:[/kftt build/i],describe:function(){return{type:s.PLATFORMS_MAP.tablet,vendor:"Amazon",model:"Kindle Fire HD 7"}}},{test:[/silk/i],describe:function(){return{type:s.PLATFORMS_MAP.tablet,vendor:"Amazon"}}},{test:[/tablet(?! pc)/i],describe:function(){return{type:s.PLATFORMS_MAP.tablet}}},{test:function(e){var t=e.test(/ipod|iphone/i),r=e.test(/like (ipod|iphone)/i);return t&&!r},describe:function(e){var t=i.default.getFirstMatch(/(ipod|iphone)/i,e);return{type:s.PLATFORMS_MAP.mobile,vendor:"Apple",model:t}}},{test:[/nexus\s*[0-6].*/i,/galaxy nexus/i],describe:function(){return{type:s.PLATFORMS_MAP.mobile,vendor:"Nexus"}}},{test:[/[^-]mobi/i],describe:function(){return{type:s.PLATFORMS_MAP.mobile}}},{test:function(e){return"blackberry"===e.getBrowserName(!0)},describe:function(){return{type:s.PLATFORMS_MAP.mobile,vendor:"BlackBerry"}}},{test:function(e){return"bada"===e.getBrowserName(!0)},describe:function(){return{type:s.PLATFORMS_MAP.mobile}}},{test:function(e){return"windows phone"===e.getBrowserName()},describe:function(){return{type:s.PLATFORMS_MAP.mobile,vendor:"Microsoft"}}},{test:function(e){var t=Number(String(e.getOSVersion()).split(".")[0]);return"android"===e.getOSName(!0)&&t>=3},describe:function(){return{type:s.PLATFORMS_MAP.tablet}}},{test:function(e){return"android"===e.getOSName(!0)},describe:function(){return{type:s.PLATFORMS_MAP.mobile}}},{test:function(e){return"macos"===e.getOSName(!0)},describe:function(){return{type:s.PLATFORMS_MAP.desktop,vendor:"Apple"}}},{test:function(e){return"windows"===e.getOSName(!0)},describe:function(){return{type:s.PLATFORMS_MAP.desktop}}},{test:function(e){return"linux"===e.getOSName(!0)},describe:function(){return{type:s.PLATFORMS_MAP.desktop}}},{test:function(e){return"playstation 4"===e.getOSName(!0)},describe:function(){return{type:s.PLATFORMS_MAP.tv}}},{test:function(e){return"roku"===e.getOSName(!0)},describe:function(){return{type:s.PLATFORMS_MAP.tv}}}];t.default=a,e.exports=t.default},95:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var n,i=(n=r(17))&&n.__esModule?n:{default:n},s=r(18);var a=[{test:function(e){return"microsoft edge"===e.getBrowserName(!0)},describe:function(e){if(/\sedg\//i.test(e))return{name:s.ENGINE_MAP.Blink};var t=i.default.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i,e);return{name:s.ENGINE_MAP.EdgeHTML,version:t}}},{test:[/trident/i],describe:function(e){var t={name:s.ENGINE_MAP.Trident},r=i.default.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:function(e){return e.test(/presto/i)},describe:function(e){var t={name:s.ENGINE_MAP.Presto},r=i.default.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:function(e){var t=e.test(/gecko/i),r=e.test(/like gecko/i);return t&&!r},describe:function(e){var t={name:s.ENGINE_MAP.Gecko},r=i.default.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/(apple)?webkit\/537\.36/i],describe:function(){return{name:s.ENGINE_MAP.Blink}}},{test:[/(apple)?webkit/i],describe:function(e){var t={name:s.ENGINE_MAP.WebKit},r=i.default.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}}];t.default=a,e.exports=t.default}})}));

/***/ }),

/***/ "./node_modules/buffer/index.js":
/*!**************************************!*\
  !*** ./node_modules/buffer/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(/*! base64-js */ "./node_modules/base64-js/index.js")
var ieee754 = __webpack_require__(/*! ieee754 */ "./node_modules/ieee754/index.js")
var isArray = __webpack_require__(/*! isarray */ "./node_modules/buffer/node_modules/isarray/index.js")

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/buffer/node_modules/isarray/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/buffer/node_modules/isarray/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),

/***/ "./node_modules/eventemitter3/umd/eventemitter3.min.js":
/*!*************************************************************!*\
  !*** ./node_modules/eventemitter3/umd/eventemitter3.min.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var require;var require;!function(e){ true?module.exports=e():undefined}(function(){return function i(s,f,c){function u(t,e){if(!f[t]){if(!s[t]){var n="function"==typeof require&&require;if(!e&&n)return require(t,!0);if(a)return a(t,!0);var r=new Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}var o=f[t]={exports:{}};s[t][0].call(o.exports,function(e){return u(s[t][1][e]||e)},o,o.exports,i,s,f,c)}return f[t].exports}for(var a="function"==typeof require&&require,e=0;e<c.length;e++)u(c[e]);return u}({1:[function(e,t,n){"use strict";var r=Object.prototype.hasOwnProperty,v="~";function o(){}function f(e,t,n){this.fn=e,this.context=t,this.once=n||!1}function i(e,t,n,r,o){if("function"!=typeof n)throw new TypeError("The listener must be a function");var i=new f(n,r||e,o),s=v?v+t:t;return e._events[s]?e._events[s].fn?e._events[s]=[e._events[s],i]:e._events[s].push(i):(e._events[s]=i,e._eventsCount++),e}function u(e,t){0==--e._eventsCount?e._events=new o:delete e._events[t]}function s(){this._events=new o,this._eventsCount=0}Object.create&&(o.prototype=Object.create(null),(new o).__proto__||(v=!1)),s.prototype.eventNames=function(){var e,t,n=[];if(0===this._eventsCount)return n;for(t in e=this._events)r.call(e,t)&&n.push(v?t.slice(1):t);return Object.getOwnPropertySymbols?n.concat(Object.getOwnPropertySymbols(e)):n},s.prototype.listeners=function(e){var t=v?v+e:e,n=this._events[t];if(!n)return[];if(n.fn)return[n.fn];for(var r=0,o=n.length,i=new Array(o);r<o;r++)i[r]=n[r].fn;return i},s.prototype.listenerCount=function(e){var t=v?v+e:e,n=this._events[t];return n?n.fn?1:n.length:0},s.prototype.emit=function(e,t,n,r,o,i){var s=v?v+e:e;if(!this._events[s])return!1;var f,c=this._events[s],u=arguments.length;if(c.fn){switch(c.once&&this.removeListener(e,c.fn,void 0,!0),u){case 1:return c.fn.call(c.context),!0;case 2:return c.fn.call(c.context,t),!0;case 3:return c.fn.call(c.context,t,n),!0;case 4:return c.fn.call(c.context,t,n,r),!0;case 5:return c.fn.call(c.context,t,n,r,o),!0;case 6:return c.fn.call(c.context,t,n,r,o,i),!0}for(p=1,f=new Array(u-1);p<u;p++)f[p-1]=arguments[p];c.fn.apply(c.context,f)}else for(var a,l=c.length,p=0;p<l;p++)switch(c[p].once&&this.removeListener(e,c[p].fn,void 0,!0),u){case 1:c[p].fn.call(c[p].context);break;case 2:c[p].fn.call(c[p].context,t);break;case 3:c[p].fn.call(c[p].context,t,n);break;case 4:c[p].fn.call(c[p].context,t,n,r);break;default:if(!f)for(a=1,f=new Array(u-1);a<u;a++)f[a-1]=arguments[a];c[p].fn.apply(c[p].context,f)}return!0},s.prototype.on=function(e,t,n){return i(this,e,t,n,!1)},s.prototype.once=function(e,t,n){return i(this,e,t,n,!0)},s.prototype.removeListener=function(e,t,n,r){var o=v?v+e:e;if(!this._events[o])return this;if(!t)return u(this,o),this;var i=this._events[o];if(i.fn)i.fn!==t||r&&!i.once||n&&i.context!==n||u(this,o);else{for(var s=0,f=[],c=i.length;s<c;s++)(i[s].fn!==t||r&&!i[s].once||n&&i[s].context!==n)&&f.push(i[s]);f.length?this._events[o]=1===f.length?f[0]:f:u(this,o)}return this},s.prototype.removeAllListeners=function(e){var t;return e?(t=v?v+e:e,this._events[t]&&u(this,t)):(this._events=new o,this._eventsCount=0),this},s.prototype.off=s.prototype.removeListener,s.prototype.addListener=s.prototype.on,s.prefixed=v,s.EventEmitter=s,void 0!==t&&(t.exports=s)},{}]},{},[1])(1)});

/***/ }),

/***/ "./node_modules/ieee754/index.js":
/*!***************************************!*\
  !*** ./node_modules/ieee754/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),

/***/ "./node_modules/sdp-transform/lib/grammar.js":
/*!***************************************************!*\
  !*** ./node_modules/sdp-transform/lib/grammar.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var grammar = module.exports = {
  v: [{
    name: 'version',
    reg: /^(\d*)$/
  }],
  o: [{
    // o=- 20518 0 IN IP4 203.0.113.1
    // NB: sessionId will be a String in most cases because it is huge
    name: 'origin',
    reg: /^(\S*) (\d*) (\d*) (\S*) IP(\d) (\S*)/,
    names: ['username', 'sessionId', 'sessionVersion', 'netType', 'ipVer', 'address'],
    format: '%s %s %d %s IP%d %s'
  }],
  // default parsing of these only (though some of these feel outdated)
  s: [{ name: 'name' }],
  i: [{ name: 'description' }],
  u: [{ name: 'uri' }],
  e: [{ name: 'email' }],
  p: [{ name: 'phone' }],
  z: [{ name: 'timezones' }], // TODO: this one can actually be parsed properly...
  r: [{ name: 'repeats' }],   // TODO: this one can also be parsed properly
  // k: [{}], // outdated thing ignored
  t: [{
    // t=0 0
    name: 'timing',
    reg: /^(\d*) (\d*)/,
    names: ['start', 'stop'],
    format: '%d %d'
  }],
  c: [{
    // c=IN IP4 10.47.197.26
    name: 'connection',
    reg: /^IN IP(\d) (\S*)/,
    names: ['version', 'ip'],
    format: 'IN IP%d %s'
  }],
  b: [{
    // b=AS:4000
    push: 'bandwidth',
    reg: /^(TIAS|AS|CT|RR|RS):(\d*)/,
    names: ['type', 'limit'],
    format: '%s:%s'
  }],
  m: [{
    // m=video 51744 RTP/AVP 126 97 98 34 31
    // NB: special - pushes to session
    // TODO: rtp/fmtp should be filtered by the payloads found here?
    reg: /^(\w*) (\d*) ([\w/]*)(?: (.*))?/,
    names: ['type', 'port', 'protocol', 'payloads'],
    format: '%s %d %s %s'
  }],
  a: [
    {
      // a=rtpmap:110 opus/48000/2
      push: 'rtp',
      reg: /^rtpmap:(\d*) ([\w\-.]*)(?:\s*\/(\d*)(?:\s*\/(\S*))?)?/,
      names: ['payload', 'codec', 'rate', 'encoding'],
      format: function (o) {
        return (o.encoding)
          ? 'rtpmap:%d %s/%s/%s'
          : o.rate
            ? 'rtpmap:%d %s/%s'
            : 'rtpmap:%d %s';
      }
    },
    {
      // a=fmtp:108 profile-level-id=24;object=23;bitrate=64000
      // a=fmtp:111 minptime=10; useinbandfec=1
      push: 'fmtp',
      reg: /^fmtp:(\d*) ([\S| ]*)/,
      names: ['payload', 'config'],
      format: 'fmtp:%d %s'
    },
    {
      // a=control:streamid=0
      name: 'control',
      reg: /^control:(.*)/,
      format: 'control:%s'
    },
    {
      // a=rtcp:65179 IN IP4 193.84.77.194
      name: 'rtcp',
      reg: /^rtcp:(\d*)(?: (\S*) IP(\d) (\S*))?/,
      names: ['port', 'netType', 'ipVer', 'address'],
      format: function (o) {
        return (o.address != null)
          ? 'rtcp:%d %s IP%d %s'
          : 'rtcp:%d';
      }
    },
    {
      // a=rtcp-fb:98 trr-int 100
      push: 'rtcpFbTrrInt',
      reg: /^rtcp-fb:(\*|\d*) trr-int (\d*)/,
      names: ['payload', 'value'],
      format: 'rtcp-fb:%s trr-int %d'
    },
    {
      // a=rtcp-fb:98 nack rpsi
      push: 'rtcpFb',
      reg: /^rtcp-fb:(\*|\d*) ([\w-_]*)(?: ([\w-_]*))?/,
      names: ['payload', 'type', 'subtype'],
      format: function (o) {
        return (o.subtype != null)
          ? 'rtcp-fb:%s %s %s'
          : 'rtcp-fb:%s %s';
      }
    },
    {
      // a=extmap:2 urn:ietf:params:rtp-hdrext:toffset
      // a=extmap:1/recvonly URI-gps-string
      // a=extmap:3 urn:ietf:params:rtp-hdrext:encrypt urn:ietf:params:rtp-hdrext:smpte-tc 25@600/24
      push: 'ext',
      reg: /^extmap:(\d+)(?:\/(\w+))?(?: (urn:ietf:params:rtp-hdrext:encrypt))? (\S*)(?: (\S*))?/,
      names: ['value', 'direction', 'encrypt-uri', 'uri', 'config'],
      format: function (o) {
        return (
          'extmap:%d' +
          (o.direction ? '/%s' : '%v') +
          (o['encrypt-uri'] ? ' %s' : '%v') +
          ' %s' +
          (o.config ? ' %s' : '')
        );
      }
    },
    {
      // a=extmap-allow-mixed
      name: 'extmapAllowMixed',
      reg: /^(extmap-allow-mixed)/
    },
    {
      // a=crypto:1 AES_CM_128_HMAC_SHA1_80 inline:PS1uQCVeeCFCanVmcjkpPywjNWhcYD0mXXtxaVBR|2^20|1:32
      push: 'crypto',
      reg: /^crypto:(\d*) ([\w_]*) (\S*)(?: (\S*))?/,
      names: ['id', 'suite', 'config', 'sessionConfig'],
      format: function (o) {
        return (o.sessionConfig != null)
          ? 'crypto:%d %s %s %s'
          : 'crypto:%d %s %s';
      }
    },
    {
      // a=setup:actpass
      name: 'setup',
      reg: /^setup:(\w*)/,
      format: 'setup:%s'
    },
    {
      // a=connection:new
      name: 'connectionType',
      reg: /^connection:(new|existing)/,
      format: 'connection:%s'
    },
    {
      // a=mid:1
      name: 'mid',
      reg: /^mid:([^\s]*)/,
      format: 'mid:%s'
    },
    {
      // a=msid:0c8b064d-d807-43b4-b434-f92a889d8587 98178685-d409-46e0-8e16-7ef0db0db64a
      name: 'msid',
      reg: /^msid:(.*)/,
      format: 'msid:%s'
    },
    {
      // a=ptime:20
      name: 'ptime',
      reg: /^ptime:(\d*(?:\.\d*)*)/,
      format: 'ptime:%d'
    },
    {
      // a=maxptime:60
      name: 'maxptime',
      reg: /^maxptime:(\d*(?:\.\d*)*)/,
      format: 'maxptime:%d'
    },
    {
      // a=sendrecv
      name: 'direction',
      reg: /^(sendrecv|recvonly|sendonly|inactive)/
    },
    {
      // a=ice-lite
      name: 'icelite',
      reg: /^(ice-lite)/
    },
    {
      // a=ice-ufrag:F7gI
      name: 'iceUfrag',
      reg: /^ice-ufrag:(\S*)/,
      format: 'ice-ufrag:%s'
    },
    {
      // a=ice-pwd:x9cml/YzichV2+XlhiMu8g
      name: 'icePwd',
      reg: /^ice-pwd:(\S*)/,
      format: 'ice-pwd:%s'
    },
    {
      // a=fingerprint:SHA-1 00:11:22:33:44:55:66:77:88:99:AA:BB:CC:DD:EE:FF:00:11:22:33
      name: 'fingerprint',
      reg: /^fingerprint:(\S*) (\S*)/,
      names: ['type', 'hash'],
      format: 'fingerprint:%s %s'
    },
    {
      // a=candidate:0 1 UDP 2113667327 203.0.113.1 54400 typ host
      // a=candidate:1162875081 1 udp 2113937151 192.168.34.75 60017 typ host generation 0 network-id 3 network-cost 10
      // a=candidate:3289912957 2 udp 1845501695 193.84.77.194 60017 typ srflx raddr 192.168.34.75 rport 60017 generation 0 network-id 3 network-cost 10
      // a=candidate:229815620 1 tcp 1518280447 192.168.150.19 60017 typ host tcptype active generation 0 network-id 3 network-cost 10
      // a=candidate:3289912957 2 tcp 1845501695 193.84.77.194 60017 typ srflx raddr 192.168.34.75 rport 60017 tcptype passive generation 0 network-id 3 network-cost 10
      push:'candidates',
      reg: /^candidate:(\S*) (\d*) (\S*) (\d*) (\S*) (\d*) typ (\S*)(?: raddr (\S*) rport (\d*))?(?: tcptype (\S*))?(?: generation (\d*))?(?: network-id (\d*))?(?: network-cost (\d*))?/,
      names: ['foundation', 'component', 'transport', 'priority', 'ip', 'port', 'type', 'raddr', 'rport', 'tcptype', 'generation', 'network-id', 'network-cost'],
      format: function (o) {
        var str = 'candidate:%s %d %s %d %s %d typ %s';

        str += (o.raddr != null) ? ' raddr %s rport %d' : '%v%v';

        // NB: candidate has three optional chunks, so %void middles one if it's missing
        str += (o.tcptype != null) ? ' tcptype %s' : '%v';

        if (o.generation != null) {
          str += ' generation %d';
        }

        str += (o['network-id'] != null) ? ' network-id %d' : '%v';
        str += (o['network-cost'] != null) ? ' network-cost %d' : '%v';
        return str;
      }
    },
    {
      // a=end-of-candidates (keep after the candidates line for readability)
      name: 'endOfCandidates',
      reg: /^(end-of-candidates)/
    },
    {
      // a=remote-candidates:1 203.0.113.1 54400 2 203.0.113.1 54401 ...
      name: 'remoteCandidates',
      reg: /^remote-candidates:(.*)/,
      format: 'remote-candidates:%s'
    },
    {
      // a=ice-options:google-ice
      name: 'iceOptions',
      reg: /^ice-options:(\S*)/,
      format: 'ice-options:%s'
    },
    {
      // a=ssrc:2566107569 cname:t9YU8M1UxTF8Y1A1
      push: 'ssrcs',
      reg: /^ssrc:(\d*) ([\w_-]*)(?::(.*))?/,
      names: ['id', 'attribute', 'value'],
      format: function (o) {
        var str = 'ssrc:%d';
        if (o.attribute != null) {
          str += ' %s';
          if (o.value != null) {
            str += ':%s';
          }
        }
        return str;
      }
    },
    {
      // a=ssrc-group:FEC 1 2
      // a=ssrc-group:FEC-FR 3004364195 1080772241
      push: 'ssrcGroups',
      // token-char = %x21 / %x23-27 / %x2A-2B / %x2D-2E / %x30-39 / %x41-5A / %x5E-7E
      reg: /^ssrc-group:([\x21\x23\x24\x25\x26\x27\x2A\x2B\x2D\x2E\w]*) (.*)/,
      names: ['semantics', 'ssrcs'],
      format: 'ssrc-group:%s %s'
    },
    {
      // a=msid-semantic: WMS Jvlam5X3SX1OP6pn20zWogvaKJz5Hjf9OnlV
      name: 'msidSemantic',
      reg: /^msid-semantic:\s?(\w*) (\S*)/,
      names: ['semantic', 'token'],
      format: 'msid-semantic: %s %s' // space after ':' is not accidental
    },
    {
      // a=group:BUNDLE audio video
      push: 'groups',
      reg: /^group:(\w*) (.*)/,
      names: ['type', 'mids'],
      format: 'group:%s %s'
    },
    {
      // a=rtcp-mux
      name: 'rtcpMux',
      reg: /^(rtcp-mux)/
    },
    {
      // a=rtcp-rsize
      name: 'rtcpRsize',
      reg: /^(rtcp-rsize)/
    },
    {
      // a=sctpmap:5000 webrtc-datachannel 1024
      name: 'sctpmap',
      reg: /^sctpmap:([\w_/]*) (\S*)(?: (\S*))?/,
      names: ['sctpmapNumber', 'app', 'maxMessageSize'],
      format: function (o) {
        return (o.maxMessageSize != null)
          ? 'sctpmap:%s %s %s'
          : 'sctpmap:%s %s';
      }
    },
    {
      // a=x-google-flag:conference
      name: 'xGoogleFlag',
      reg: /^x-google-flag:([^\s]*)/,
      format: 'x-google-flag:%s'
    },
    {
      // a=rid:1 send max-width=1280;max-height=720;max-fps=30;depend=0
      push: 'rids',
      reg: /^rid:([\d\w]+) (\w+)(?: ([\S| ]*))?/,
      names: ['id', 'direction', 'params'],
      format: function (o) {
        return (o.params) ? 'rid:%s %s %s' : 'rid:%s %s';
      }
    },
    {
      // a=imageattr:97 send [x=800,y=640,sar=1.1,q=0.6] [x=480,y=320] recv [x=330,y=250]
      // a=imageattr:* send [x=800,y=640] recv *
      // a=imageattr:100 recv [x=320,y=240]
      push: 'imageattrs',
      reg: new RegExp(
        // a=imageattr:97
        '^imageattr:(\\d+|\\*)' +
        // send [x=800,y=640,sar=1.1,q=0.6] [x=480,y=320]
        '[\\s\\t]+(send|recv)[\\s\\t]+(\\*|\\[\\S+\\](?:[\\s\\t]+\\[\\S+\\])*)' +
        // recv [x=330,y=250]
        '(?:[\\s\\t]+(recv|send)[\\s\\t]+(\\*|\\[\\S+\\](?:[\\s\\t]+\\[\\S+\\])*))?'
      ),
      names: ['pt', 'dir1', 'attrs1', 'dir2', 'attrs2'],
      format: function (o) {
        return 'imageattr:%s %s %s' + (o.dir2 ? ' %s %s' : '');
      }
    },
    {
      // a=simulcast:send 1,2,3;~4,~5 recv 6;~7,~8
      // a=simulcast:recv 1;4,5 send 6;7
      name: 'simulcast',
      reg: new RegExp(
        // a=simulcast:
        '^simulcast:' +
        // send 1,2,3;~4,~5
        '(send|recv) ([a-zA-Z0-9\\-_~;,]+)' +
        // space + recv 6;~7,~8
        '(?:\\s?(send|recv) ([a-zA-Z0-9\\-_~;,]+))?' +
        // end
        '$'
      ),
      names: ['dir1', 'list1', 'dir2', 'list2'],
      format: function (o) {
        return 'simulcast:%s %s' + (o.dir2 ? ' %s %s' : '');
      }
    },
    {
      // old simulcast draft 03 (implemented by Firefox)
      //   https://tools.ietf.org/html/draft-ietf-mmusic-sdp-simulcast-03
      // a=simulcast: recv pt=97;98 send pt=97
      // a=simulcast: send rid=5;6;7 paused=6,7
      name: 'simulcast_03',
      reg: /^simulcast:[\s\t]+([\S+\s\t]+)$/,
      names: ['value'],
      format: 'simulcast: %s'
    },
    {
      // a=framerate:25
      // a=framerate:29.97
      name: 'framerate',
      reg: /^framerate:(\d+(?:$|\.\d+))/,
      format: 'framerate:%s'
    },
    {
      // RFC4570
      // a=source-filter: incl IN IP4 239.5.2.31 10.1.15.5
      name: 'sourceFilter',
      reg: /^source-filter: *(excl|incl) (\S*) (IP4|IP6|\*) (\S*) (.*)/,
      names: ['filterMode', 'netType', 'addressTypes', 'destAddress', 'srcList'],
      format: 'source-filter: %s %s %s %s %s'
    },
    {
      // a=bundle-only
      name: 'bundleOnly',
      reg: /^(bundle-only)/
    },
    {
      // a=label:1
      name: 'label',
      reg: /^label:(.+)/,
      format: 'label:%s'
    },
    {
      // RFC version 26 for SCTP over DTLS
      // https://tools.ietf.org/html/draft-ietf-mmusic-sctp-sdp-26#section-5
      name: 'sctpPort',
      reg: /^sctp-port:(\d+)$/,
      format: 'sctp-port:%s'
    },
    {
      // RFC version 26 for SCTP over DTLS
      // https://tools.ietf.org/html/draft-ietf-mmusic-sctp-sdp-26#section-6
      name: 'maxMessageSize',
      reg: /^max-message-size:(\d+)$/,
      format: 'max-message-size:%s'
    },
    {
      // RFC7273
      // a=ts-refclk:ptp=IEEE1588-2008:39-A7-94-FF-FE-07-CB-D0:37
      push:'tsRefClocks',
      reg: /^ts-refclk:([^\s=]*)(?:=(\S*))?/,
      names: ['clksrc', 'clksrcExt'],
      format: function (o) {
        return 'ts-refclk:%s' + (o.clksrcExt != null ? '=%s' : '');
      }
    },
    {
      // RFC7273
      // a=mediaclk:direct=963214424
      name:'mediaClk',
      reg: /^mediaclk:(?:id=(\S*))? *([^\s=]*)(?:=(\S*))?(?: *rate=(\d+)\/(\d+))?/,
      names: ['id', 'mediaClockName', 'mediaClockValue', 'rateNumerator', 'rateDenominator'],
      format: function (o) {
        var str = 'mediaclk:';
        str += (o.id != null ? 'id=%s %s' : '%v%s');
        str += (o.mediaClockValue != null ? '=%s' : '');
        str += (o.rateNumerator != null ? ' rate=%s' : '');
        str += (o.rateDenominator != null ? '/%s' : '');
        return str;
      }
    },
    {
      // a=keywds:keywords
      name: 'keywords',
      reg: /^keywds:(.+)$/,
      format: 'keywds:%s'
    },
    {
      // a=content:main
      name: 'content',
      reg: /^content:(.+)/,
      format: 'content:%s'
    },
    // BFCP https://tools.ietf.org/html/rfc4583
    {
      // a=floorctrl:c-s
      name: 'bfcpFloorCtrl',
      reg: /^floorctrl:(c-only|s-only|c-s)/,
      format: 'floorctrl:%s'
    },
    {
      // a=confid:1
      name: 'bfcpConfId',
      reg: /^confid:(\d+)/,
      format: 'confid:%s'
    },
    {
      // a=userid:1
      name: 'bfcpUserId',
      reg: /^userid:(\d+)/,
      format: 'userid:%s'
    },
    {
      // a=floorid:1
      name: 'bfcpFloorId',
      reg: /^floorid:(.+) (?:m-stream|mstrm):(.+)/,
      names: ['id', 'mStream'],
      format: 'floorid:%s mstrm:%s'
    },
    {
      // any a= that we don't understand is kept verbatim on media.invalid
      push: 'invalid',
      names: ['value']
    }
  ]
};

// set sensible defaults to avoid polluting the grammar with boring details
Object.keys(grammar).forEach(function (key) {
  var objs = grammar[key];
  objs.forEach(function (obj) {
    if (!obj.reg) {
      obj.reg = /(.*)/;
    }
    if (!obj.format) {
      obj.format = '%s';
    }
  });
});


/***/ }),

/***/ "./node_modules/sdp-transform/lib/index.js":
/*!*************************************************!*\
  !*** ./node_modules/sdp-transform/lib/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parser = __webpack_require__(/*! ./parser */ "./node_modules/sdp-transform/lib/parser.js");
var writer = __webpack_require__(/*! ./writer */ "./node_modules/sdp-transform/lib/writer.js");

exports.write = writer;
exports.parse = parser.parse;
exports.parseParams = parser.parseParams;
exports.parseFmtpConfig = parser.parseFmtpConfig; // Alias of parseParams().
exports.parsePayloads = parser.parsePayloads;
exports.parseRemoteCandidates = parser.parseRemoteCandidates;
exports.parseImageAttributes = parser.parseImageAttributes;
exports.parseSimulcastStreamList = parser.parseSimulcastStreamList;


/***/ }),

/***/ "./node_modules/sdp-transform/lib/parser.js":
/*!**************************************************!*\
  !*** ./node_modules/sdp-transform/lib/parser.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toIntIfInt = function (v) {
  return String(Number(v)) === v ? Number(v) : v;
};

var attachProperties = function (match, location, names, rawName) {
  if (rawName && !names) {
    location[rawName] = toIntIfInt(match[1]);
  }
  else {
    for (var i = 0; i < names.length; i += 1) {
      if (match[i+1] != null) {
        location[names[i]] = toIntIfInt(match[i+1]);
      }
    }
  }
};

var parseReg = function (obj, location, content) {
  var needsBlank = obj.name && obj.names;
  if (obj.push && !location[obj.push]) {
    location[obj.push] = [];
  }
  else if (needsBlank && !location[obj.name]) {
    location[obj.name] = {};
  }
  var keyLocation = obj.push ?
    {} :  // blank object that will be pushed
    needsBlank ? location[obj.name] : location; // otherwise, named location or root

  attachProperties(content.match(obj.reg), keyLocation, obj.names, obj.name);

  if (obj.push) {
    location[obj.push].push(keyLocation);
  }
};

var grammar = __webpack_require__(/*! ./grammar */ "./node_modules/sdp-transform/lib/grammar.js");
var validLine = RegExp.prototype.test.bind(/^([a-z])=(.*)/);

exports.parse = function (sdp) {
  var session = {}
    , media = []
    , location = session; // points at where properties go under (one of the above)

  // parse lines we understand
  sdp.split(/(\r\n|\r|\n)/).filter(validLine).forEach(function (l) {
    var type = l[0];
    var content = l.slice(2);
    if (type === 'm') {
      media.push({rtp: [], fmtp: []});
      location = media[media.length-1]; // point at latest media line
    }

    for (var j = 0; j < (grammar[type] || []).length; j += 1) {
      var obj = grammar[type][j];
      if (obj.reg.test(content)) {
        return parseReg(obj, location, content);
      }
    }
  });

  session.media = media; // link it up
  return session;
};

var paramReducer = function (acc, expr) {
  var s = expr.split(/=(.+)/, 2);
  if (s.length === 2) {
    acc[s[0]] = toIntIfInt(s[1]);
  } else if (s.length === 1 && expr.length > 1) {
    acc[s[0]] = undefined;
  }
  return acc;
};

exports.parseParams = function (str) {
  return str.split(/;\s?/).reduce(paramReducer, {});
};

// For backward compatibility - alias will be removed in 3.0.0
exports.parseFmtpConfig = exports.parseParams;

exports.parsePayloads = function (str) {
  return str.toString().split(' ').map(Number);
};

exports.parseRemoteCandidates = function (str) {
  var candidates = [];
  var parts = str.split(' ').map(toIntIfInt);
  for (var i = 0; i < parts.length; i += 3) {
    candidates.push({
      component: parts[i],
      ip: parts[i + 1],
      port: parts[i + 2]
    });
  }
  return candidates;
};

exports.parseImageAttributes = function (str) {
  return str.split(' ').map(function (item) {
    return item.substring(1, item.length-1).split(',').reduce(paramReducer, {});
  });
};

exports.parseSimulcastStreamList = function (str) {
  return str.split(';').map(function (stream) {
    return stream.split(',').map(function (format) {
      var scid, paused = false;

      if (format[0] !== '~') {
        scid = toIntIfInt(format);
      } else {
        scid = toIntIfInt(format.substring(1, format.length));
        paused = true;
      }

      return {
        scid: scid,
        paused: paused
      };
    });
  });
};


/***/ }),

/***/ "./node_modules/sdp-transform/lib/writer.js":
/*!**************************************************!*\
  !*** ./node_modules/sdp-transform/lib/writer.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var grammar = __webpack_require__(/*! ./grammar */ "./node_modules/sdp-transform/lib/grammar.js");

// customized util.format - discards excess arguments and can void middle ones
var formatRegExp = /%[sdv%]/g;
var format = function (formatStr) {
  var i = 1;
  var args = arguments;
  var len = args.length;
  return formatStr.replace(formatRegExp, function (x) {
    if (i >= len) {
      return x; // missing argument
    }
    var arg = args[i];
    i += 1;
    switch (x) {
    case '%%':
      return '%';
    case '%s':
      return String(arg);
    case '%d':
      return Number(arg);
    case '%v':
      return '';
    }
  });
  // NB: we discard excess arguments - they are typically undefined from makeLine
};

var makeLine = function (type, obj, location) {
  var str = obj.format instanceof Function ?
    (obj.format(obj.push ? location : location[obj.name])) :
    obj.format;

  var args = [type + '=' + str];
  if (obj.names) {
    for (var i = 0; i < obj.names.length; i += 1) {
      var n = obj.names[i];
      if (obj.name) {
        args.push(location[obj.name][n]);
      }
      else { // for mLine and push attributes
        args.push(location[obj.names[i]]);
      }
    }
  }
  else {
    args.push(location[obj.name]);
  }
  return format.apply(null, args);
};

// RFC specified order
// TODO: extend this with all the rest
var defaultOuterOrder = [
  'v', 'o', 's', 'i',
  'u', 'e', 'p', 'c',
  'b', 't', 'r', 'z', 'a'
];
var defaultInnerOrder = ['i', 'c', 'b', 'a'];


module.exports = function (session, opts) {
  opts = opts || {};
  // ensure certain properties exist
  if (session.version == null) {
    session.version = 0; // 'v=0' must be there (only defined version atm)
  }
  if (session.name == null) {
    session.name = ' '; // 's= ' must be there if no meaningful name set
  }
  session.media.forEach(function (mLine) {
    if (mLine.payloads == null) {
      mLine.payloads = '';
    }
  });

  var outerOrder = opts.outerOrder || defaultOuterOrder;
  var innerOrder = opts.innerOrder || defaultInnerOrder;
  var sdp = [];

  // loop through outerOrder for matching properties on session
  outerOrder.forEach(function (type) {
    grammar[type].forEach(function (obj) {
      if (obj.name in session && session[obj.name] != null) {
        sdp.push(makeLine(type, obj, session));
      }
      else if (obj.push in session && session[obj.push] != null) {
        session[obj.push].forEach(function (el) {
          sdp.push(makeLine(type, obj, el));
        });
      }
    });
  });

  // then for each media line, follow the innerOrder
  session.media.forEach(function (mLine) {
    sdp.push(makeLine('m', grammar.m[0], mLine));

    innerOrder.forEach(function (type) {
      grammar[type].forEach(function (obj) {
        if (obj.name in mLine && mLine[obj.name] != null) {
          sdp.push(makeLine(type, obj, mLine));
        }
        else if (obj.push in mLine && mLine[obj.push] != null) {
          mLine[obj.push].forEach(function (el) {
            sdp.push(makeLine(type, obj, el));
          });
        }
      });
    });
  });

  return sdp.join('\r\n') + '\r\n';
};


/***/ }),

/***/ "./node_modules/socket.io-client/dist/socket.io.slim.js":
/*!**************************************************************!*\
  !*** ./node_modules/socket.io-client/dist/socket.io.slim.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(Buffer) {/*!
 * Socket.IO v2.4.0
 * (c) 2014-2021 Guillermo Rauch
 * Released under the MIT License.
 */
!function(t,e){ true?module.exports=e():undefined}(this,function(){return function(t){function e(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return t[n].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var r={};return e.m=t,e.c=r,e.p="",e(0)}([function(t,e,r){"use strict";function n(t,e){"object"===("undefined"==typeof t?"undefined":o(t))&&(e=t,t=void 0),e=e||{};var r,n=i(t),s=n.source,p=n.id,h=n.path,u=c[p]&&h in c[p].nsps,f=e.forceNew||e["force new connection"]||!1===e.multiplex||u;return f?r=a(s,e):(c[p]||(c[p]=a(s,e)),r=c[p]),n.query&&!e.query&&(e.query=n.query),r.socket(n.path,e)}var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=r(1),s=r(4),a=r(9);r(3)("socket.io-client");t.exports=e=n;var c=e.managers={};e.protocol=s.protocol,e.connect=n,e.Manager=r(9),e.Socket=r(34)},function(t,e,r){"use strict";function n(t,e){var r=t;e=e||"undefined"!=typeof location&&location,null==t&&(t=e.protocol+"//"+e.host),"string"==typeof t&&("/"===t.charAt(0)&&(t="/"===t.charAt(1)?e.protocol+t:e.host+t),/^(https?|wss?):\/\//.test(t)||(t="undefined"!=typeof e?e.protocol+"//"+t:"https://"+t),r=o(t)),r.port||(/^(http|ws)$/.test(r.protocol)?r.port="80":/^(http|ws)s$/.test(r.protocol)&&(r.port="443")),r.path=r.path||"/";var n=r.host.indexOf(":")!==-1,i=n?"["+r.host+"]":r.host;return r.id=r.protocol+"://"+i+":"+r.port,r.href=r.protocol+"://"+i+(e&&e.port===r.port?"":":"+r.port),r}var o=r(2);r(3)("socket.io-client:url");t.exports=n},function(t,e){function r(t,e){var r=/\/{2,9}/g,n=e.replace(r,"/").split("/");return"/"!=e.substr(0,1)&&0!==e.length||n.splice(0,1),"/"==e.substr(e.length-1,1)&&n.splice(n.length-1,1),n}function n(t,e){var r={};return e.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(t,e,n){e&&(r[e]=n)}),r}var o=/^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,i=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];t.exports=function(t){var e=t,s=t.indexOf("["),a=t.indexOf("]");s!=-1&&a!=-1&&(t=t.substring(0,s)+t.substring(s,a).replace(/:/g,";")+t.substring(a,t.length));for(var c=o.exec(t||""),p={},h=14;h--;)p[i[h]]=c[h]||"";return s!=-1&&a!=-1&&(p.source=e,p.host=p.host.substring(1,p.host.length-1).replace(/;/g,":"),p.authority=p.authority.replace("[","").replace("]","").replace(/;/g,":"),p.ipv6uri=!0),p.pathNames=r(p,p.path),p.queryKey=n(p,p.query),p}},function(t,e){"use strict";t.exports=function(){return function(){}}},function(t,e,r){function n(){}function o(t){var r=""+t.type;if(e.BINARY_EVENT!==t.type&&e.BINARY_ACK!==t.type||(r+=t.attachments+"-"),t.nsp&&"/"!==t.nsp&&(r+=t.nsp+","),null!=t.id&&(r+=t.id),null!=t.data){var n=i(t.data);if(n===!1)return m;r+=n}return r}function i(t){try{return JSON.stringify(t)}catch(t){return!1}}function s(t,e){function r(t){var r=l.deconstructPacket(t),n=o(r.packet),i=r.buffers;i.unshift(n),e(i)}l.removeBlobs(t,r)}function a(){this.reconstructor=null}function c(t){var r=0,n={type:Number(t.charAt(0))};if(null==e.types[n.type])return u("unknown packet type "+n.type);if(e.BINARY_EVENT===n.type||e.BINARY_ACK===n.type){for(var o="";"-"!==t.charAt(++r)&&(o+=t.charAt(r),r!=t.length););if(o!=Number(o)||"-"!==t.charAt(r))throw new Error("Illegal attachments");n.attachments=Number(o)}if("/"===t.charAt(r+1))for(n.nsp="";++r;){var i=t.charAt(r);if(","===i)break;if(n.nsp+=i,r===t.length)break}else n.nsp="/";var s=t.charAt(r+1);if(""!==s&&Number(s)==s){for(n.id="";++r;){var i=t.charAt(r);if(null==i||Number(i)!=i){--r;break}if(n.id+=t.charAt(r),r===t.length)break}n.id=Number(n.id)}if(t.charAt(++r)){var a=p(t.substr(r)),c=a!==!1&&(n.type===e.ERROR||d(a));if(!c)return u("invalid payload");n.data=a}return n}function p(t){try{return JSON.parse(t)}catch(t){return!1}}function h(t){this.reconPack=t,this.buffers=[]}function u(t){return{type:e.ERROR,data:"parser error: "+t}}var f=(r(3)("socket.io-parser"),r(5)),l=r(6),d=r(7),y=r(8);e.protocol=4,e.types=["CONNECT","DISCONNECT","EVENT","ACK","ERROR","BINARY_EVENT","BINARY_ACK"],e.CONNECT=0,e.DISCONNECT=1,e.EVENT=2,e.ACK=3,e.ERROR=4,e.BINARY_EVENT=5,e.BINARY_ACK=6,e.Encoder=n,e.Decoder=a;var m=e.ERROR+'"encode error"';n.prototype.encode=function(t,r){if(e.BINARY_EVENT===t.type||e.BINARY_ACK===t.type)s(t,r);else{var n=o(t);r([n])}},f(a.prototype),a.prototype.add=function(t){var r;if("string"==typeof t)r=c(t),e.BINARY_EVENT===r.type||e.BINARY_ACK===r.type?(this.reconstructor=new h(r),0===this.reconstructor.reconPack.attachments&&this.emit("decoded",r)):this.emit("decoded",r);else{if(!y(t)&&!t.base64)throw new Error("Unknown type: "+t);if(!this.reconstructor)throw new Error("got binary data when not reconstructing a packet");r=this.reconstructor.takeBinaryData(t),r&&(this.reconstructor=null,this.emit("decoded",r))}},a.prototype.destroy=function(){this.reconstructor&&this.reconstructor.finishedReconstruction()},h.prototype.takeBinaryData=function(t){if(this.buffers.push(t),this.buffers.length===this.reconPack.attachments){var e=l.reconstructPacket(this.reconPack,this.buffers);return this.finishedReconstruction(),e}return null},h.prototype.finishedReconstruction=function(){this.reconPack=null,this.buffers=[]}},function(t,e,r){function n(t){if(t)return o(t)}function o(t){for(var e in n.prototype)t[e]=n.prototype[e];return t}t.exports=n,n.prototype.on=n.prototype.addEventListener=function(t,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+t]=this._callbacks["$"+t]||[]).push(e),this},n.prototype.once=function(t,e){function r(){this.off(t,r),e.apply(this,arguments)}return r.fn=e,this.on(t,r),this},n.prototype.off=n.prototype.removeListener=n.prototype.removeAllListeners=n.prototype.removeEventListener=function(t,e){if(this._callbacks=this._callbacks||{},0==arguments.length)return this._callbacks={},this;var r=this._callbacks["$"+t];if(!r)return this;if(1==arguments.length)return delete this._callbacks["$"+t],this;for(var n,o=0;o<r.length;o++)if(n=r[o],n===e||n.fn===e){r.splice(o,1);break}return 0===r.length&&delete this._callbacks["$"+t],this},n.prototype.emit=function(t){this._callbacks=this._callbacks||{};for(var e=new Array(arguments.length-1),r=this._callbacks["$"+t],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(r){r=r.slice(0);for(var n=0,o=r.length;n<o;++n)r[n].apply(this,e)}return this},n.prototype.listeners=function(t){return this._callbacks=this._callbacks||{},this._callbacks["$"+t]||[]},n.prototype.hasListeners=function(t){return!!this.listeners(t).length}},function(t,e,r){function n(t,e){if(!t)return t;if(s(t)){var r={_placeholder:!0,num:e.length};return e.push(t),r}if(i(t)){for(var o=new Array(t.length),a=0;a<t.length;a++)o[a]=n(t[a],e);return o}if("object"==typeof t&&!(t instanceof Date)){var o={};for(var c in t)o[c]=n(t[c],e);return o}return t}function o(t,e){if(!t)return t;if(t&&t._placeholder)return e[t.num];if(i(t))for(var r=0;r<t.length;r++)t[r]=o(t[r],e);else if("object"==typeof t)for(var n in t)t[n]=o(t[n],e);return t}var i=r(7),s=r(8),a=Object.prototype.toString,c="function"==typeof Blob||"undefined"!=typeof Blob&&"[object BlobConstructor]"===a.call(Blob),p="function"==typeof File||"undefined"!=typeof File&&"[object FileConstructor]"===a.call(File);e.deconstructPacket=function(t){var e=[],r=t.data,o=t;return o.data=n(r,e),o.attachments=e.length,{packet:o,buffers:e}},e.reconstructPacket=function(t,e){return t.data=o(t.data,e),t.attachments=void 0,t},e.removeBlobs=function(t,e){function r(t,a,h){if(!t)return t;if(c&&t instanceof Blob||p&&t instanceof File){n++;var u=new FileReader;u.onload=function(){h?h[a]=this.result:o=this.result,--n||e(o)},u.readAsArrayBuffer(t)}else if(i(t))for(var f=0;f<t.length;f++)r(t[f],f,t);else if("object"==typeof t&&!s(t))for(var l in t)r(t[l],l,t)}var n=0,o=t;r(o),n||e(o)}},function(t,e){var r={}.toString;t.exports=Array.isArray||function(t){return"[object Array]"==r.call(t)}},function(t,e){function r(t){return n&&Buffer.isBuffer(t)||o&&(t instanceof ArrayBuffer||i(t))}t.exports=r;var n="function"==typeof Buffer&&"function"==typeof Buffer.isBuffer,o="function"==typeof ArrayBuffer,i=function(t){return"function"==typeof ArrayBuffer.isView?ArrayBuffer.isView(t):t.buffer instanceof ArrayBuffer}},function(t,e,r){"use strict";function n(t,e){if(!(this instanceof n))return new n(t,e);t&&"object"===("undefined"==typeof t?"undefined":o(t))&&(e=t,t=void 0),e=e||{},e.path=e.path||"/socket.io",this.nsps={},this.subs=[],this.opts=e,this.reconnection(e.reconnection!==!1),this.reconnectionAttempts(e.reconnectionAttempts||1/0),this.reconnectionDelay(e.reconnectionDelay||1e3),this.reconnectionDelayMax(e.reconnectionDelayMax||5e3),this.randomizationFactor(e.randomizationFactor||.5),this.backoff=new f({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(null==e.timeout?2e4:e.timeout),this.readyState="closed",this.uri=t,this.connecting=[],this.lastPing=null,this.encoding=!1,this.packetBuffer=[];var r=e.parser||c;this.encoder=new r.Encoder,this.decoder=new r.Decoder,this.autoConnect=e.autoConnect!==!1,this.autoConnect&&this.open()}var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=r(10),s=r(34),a=r(5),c=r(4),p=r(36),h=r(37),u=(r(3)("socket.io-client:manager"),r(33)),f=r(38),l=Object.prototype.hasOwnProperty;t.exports=n,n.prototype.emitAll=function(){this.emit.apply(this,arguments);for(var t in this.nsps)l.call(this.nsps,t)&&this.nsps[t].emit.apply(this.nsps[t],arguments)},n.prototype.updateSocketIds=function(){for(var t in this.nsps)l.call(this.nsps,t)&&(this.nsps[t].id=this.generateId(t))},n.prototype.generateId=function(t){return("/"===t?"":t+"#")+this.engine.id},a(n.prototype),n.prototype.reconnection=function(t){return arguments.length?(this._reconnection=!!t,this):this._reconnection},n.prototype.reconnectionAttempts=function(t){return arguments.length?(this._reconnectionAttempts=t,this):this._reconnectionAttempts},n.prototype.reconnectionDelay=function(t){return arguments.length?(this._reconnectionDelay=t,this.backoff&&this.backoff.setMin(t),this):this._reconnectionDelay},n.prototype.randomizationFactor=function(t){return arguments.length?(this._randomizationFactor=t,this.backoff&&this.backoff.setJitter(t),this):this._randomizationFactor},n.prototype.reconnectionDelayMax=function(t){return arguments.length?(this._reconnectionDelayMax=t,this.backoff&&this.backoff.setMax(t),this):this._reconnectionDelayMax},n.prototype.timeout=function(t){return arguments.length?(this._timeout=t,this):this._timeout},n.prototype.maybeReconnectOnOpen=function(){!this.reconnecting&&this._reconnection&&0===this.backoff.attempts&&this.reconnect()},n.prototype.open=n.prototype.connect=function(t,e){if(~this.readyState.indexOf("open"))return this;this.engine=i(this.uri,this.opts);var r=this.engine,n=this;this.readyState="opening",this.skipReconnect=!1;var o=p(r,"open",function(){n.onopen(),t&&t()}),s=p(r,"error",function(e){if(n.cleanup(),n.readyState="closed",n.emitAll("connect_error",e),t){var r=new Error("Connection error");r.data=e,t(r)}else n.maybeReconnectOnOpen()});if(!1!==this._timeout){var a=this._timeout;0===a&&o.destroy();var c=setTimeout(function(){o.destroy(),r.close(),r.emit("error","timeout"),n.emitAll("connect_timeout",a)},a);this.subs.push({destroy:function(){clearTimeout(c)}})}return this.subs.push(o),this.subs.push(s),this},n.prototype.onopen=function(){this.cleanup(),this.readyState="open",this.emit("open");var t=this.engine;this.subs.push(p(t,"data",h(this,"ondata"))),this.subs.push(p(t,"ping",h(this,"onping"))),this.subs.push(p(t,"pong",h(this,"onpong"))),this.subs.push(p(t,"error",h(this,"onerror"))),this.subs.push(p(t,"close",h(this,"onclose"))),this.subs.push(p(this.decoder,"decoded",h(this,"ondecoded")))},n.prototype.onping=function(){this.lastPing=new Date,this.emitAll("ping")},n.prototype.onpong=function(){this.emitAll("pong",new Date-this.lastPing)},n.prototype.ondata=function(t){this.decoder.add(t)},n.prototype.ondecoded=function(t){this.emit("packet",t)},n.prototype.onerror=function(t){this.emitAll("error",t)},n.prototype.socket=function(t,e){function r(){~u(o.connecting,n)||o.connecting.push(n)}var n=this.nsps[t];if(!n){n=new s(this,t,e),this.nsps[t]=n;var o=this;n.on("connecting",r),n.on("connect",function(){n.id=o.generateId(t)}),this.autoConnect&&r()}return n},n.prototype.destroy=function(t){var e=u(this.connecting,t);~e&&this.connecting.splice(e,1),this.connecting.length||this.close()},n.prototype.packet=function(t){var e=this;t.query&&0===t.type&&(t.nsp+="?"+t.query),e.encoding?e.packetBuffer.push(t):(e.encoding=!0,this.encoder.encode(t,function(r){for(var n=0;n<r.length;n++)e.engine.write(r[n],t.options);e.encoding=!1,e.processPacketQueue()}))},n.prototype.processPacketQueue=function(){if(this.packetBuffer.length>0&&!this.encoding){var t=this.packetBuffer.shift();this.packet(t)}},n.prototype.cleanup=function(){for(var t=this.subs.length,e=0;e<t;e++){var r=this.subs.shift();r.destroy()}this.packetBuffer=[],this.encoding=!1,this.lastPing=null,this.decoder.destroy()},n.prototype.close=n.prototype.disconnect=function(){this.skipReconnect=!0,this.reconnecting=!1,"opening"===this.readyState&&this.cleanup(),this.backoff.reset(),this.readyState="closed",this.engine&&this.engine.close()},n.prototype.onclose=function(t){this.cleanup(),this.backoff.reset(),this.readyState="closed",this.emit("close",t),this._reconnection&&!this.skipReconnect&&this.reconnect()},n.prototype.reconnect=function(){if(this.reconnecting||this.skipReconnect)return this;var t=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitAll("reconnect_failed"),this.reconnecting=!1;else{var e=this.backoff.duration();this.reconnecting=!0;var r=setTimeout(function(){t.skipReconnect||(t.emitAll("reconnect_attempt",t.backoff.attempts),t.emitAll("reconnecting",t.backoff.attempts),t.skipReconnect||t.open(function(e){e?(t.reconnecting=!1,t.reconnect(),t.emitAll("reconnect_error",e.data)):t.onreconnect()}))},e);this.subs.push({destroy:function(){clearTimeout(r)}})}},n.prototype.onreconnect=function(){var t=this.backoff.attempts;this.reconnecting=!1,this.backoff.reset(),this.updateSocketIds(),this.emitAll("reconnect",t)}},function(t,e,r){t.exports=r(11),t.exports.parser=r(19)},function(t,e,r){function n(t,e){return this instanceof n?(e=e||{},t&&"object"==typeof t&&(e=t,t=null),t?(t=p(t),e.hostname=t.host,e.secure="https"===t.protocol||"wss"===t.protocol,e.port=t.port,t.query&&(e.query=t.query)):e.host&&(e.hostname=p(e.host).host),this.secure=null!=e.secure?e.secure:"undefined"!=typeof location&&"https:"===location.protocol,e.hostname&&!e.port&&(e.port=this.secure?"443":"80"),this.agent=e.agent||!1,this.hostname=e.hostname||("undefined"!=typeof location?location.hostname:"localhost"),this.port=e.port||("undefined"!=typeof location&&location.port?location.port:this.secure?443:80),this.query=e.query||{},"string"==typeof this.query&&(this.query=h.decode(this.query)),this.upgrade=!1!==e.upgrade,this.path=(e.path||"/engine.io").replace(/\/$/,"")+"/",this.forceJSONP=!!e.forceJSONP,this.jsonp=!1!==e.jsonp,this.forceBase64=!!e.forceBase64,this.enablesXDR=!!e.enablesXDR,this.withCredentials=!1!==e.withCredentials,this.timestampParam=e.timestampParam||"t",this.timestampRequests=e.timestampRequests,this.transports=e.transports||["polling","websocket"],this.transportOptions=e.transportOptions||{},this.readyState="",this.writeBuffer=[],this.prevBufferLen=0,this.policyPort=e.policyPort||843,this.rememberUpgrade=e.rememberUpgrade||!1,this.binaryType=null,this.onlyBinaryUpgrades=e.onlyBinaryUpgrades,this.perMessageDeflate=!1!==e.perMessageDeflate&&(e.perMessageDeflate||{}),!0===this.perMessageDeflate&&(this.perMessageDeflate={}),this.perMessageDeflate&&null==this.perMessageDeflate.threshold&&(this.perMessageDeflate.threshold=1024),this.pfx=e.pfx||null,this.key=e.key||null,this.passphrase=e.passphrase||null,this.cert=e.cert||null,this.ca=e.ca||null,this.ciphers=e.ciphers||null,this.rejectUnauthorized=void 0===e.rejectUnauthorized||e.rejectUnauthorized,this.forceNode=!!e.forceNode,this.isReactNative="undefined"!=typeof navigator&&"string"==typeof navigator.product&&"reactnative"===navigator.product.toLowerCase(),("undefined"==typeof self||this.isReactNative)&&(e.extraHeaders&&Object.keys(e.extraHeaders).length>0&&(this.extraHeaders=e.extraHeaders),e.localAddress&&(this.localAddress=e.localAddress)),this.id=null,this.upgrades=null,this.pingInterval=null,this.pingTimeout=null,this.pingIntervalTimer=null,this.pingTimeoutTimer=null,void this.open()):new n(t,e)}function o(t){var e={};for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r]);return e}var i=r(12),s=r(5),a=(r(3)("engine.io-client:socket"),r(33)),c=r(19),p=r(2),h=r(27);t.exports=n,n.priorWebsocketSuccess=!1,s(n.prototype),n.protocol=c.protocol,n.Socket=n,n.Transport=r(18),n.transports=r(12),n.parser=r(19),n.prototype.createTransport=function(t){var e=o(this.query);e.EIO=c.protocol,e.transport=t;var r=this.transportOptions[t]||{};this.id&&(e.sid=this.id);var n=new i[t]({query:e,socket:this,agent:r.agent||this.agent,hostname:r.hostname||this.hostname,port:r.port||this.port,secure:r.secure||this.secure,path:r.path||this.path,forceJSONP:r.forceJSONP||this.forceJSONP,jsonp:r.jsonp||this.jsonp,forceBase64:r.forceBase64||this.forceBase64,enablesXDR:r.enablesXDR||this.enablesXDR,withCredentials:r.withCredentials||this.withCredentials,timestampRequests:r.timestampRequests||this.timestampRequests,timestampParam:r.timestampParam||this.timestampParam,policyPort:r.policyPort||this.policyPort,pfx:r.pfx||this.pfx,key:r.key||this.key,passphrase:r.passphrase||this.passphrase,cert:r.cert||this.cert,ca:r.ca||this.ca,ciphers:r.ciphers||this.ciphers,rejectUnauthorized:r.rejectUnauthorized||this.rejectUnauthorized,perMessageDeflate:r.perMessageDeflate||this.perMessageDeflate,extraHeaders:r.extraHeaders||this.extraHeaders,forceNode:r.forceNode||this.forceNode,localAddress:r.localAddress||this.localAddress,requestTimeout:r.requestTimeout||this.requestTimeout,protocols:r.protocols||void 0,isReactNative:this.isReactNative});return n},n.prototype.open=function(){var t;if(this.rememberUpgrade&&n.priorWebsocketSuccess&&this.transports.indexOf("websocket")!==-1)t="websocket";else{if(0===this.transports.length){var e=this;return void setTimeout(function(){e.emit("error","No transports available")},0)}t=this.transports[0]}this.readyState="opening";try{t=this.createTransport(t)}catch(t){return this.transports.shift(),void this.open()}t.open(),this.setTransport(t)},n.prototype.setTransport=function(t){var e=this;this.transport&&this.transport.removeAllListeners(),this.transport=t,t.on("drain",function(){e.onDrain()}).on("packet",function(t){e.onPacket(t)}).on("error",function(t){e.onError(t)}).on("close",function(){e.onClose("transport close")})},n.prototype.probe=function(t){function e(){if(u.onlyBinaryUpgrades){var t=!this.supportsBinary&&u.transport.supportsBinary;h=h||t}h||(p.send([{type:"ping",data:"probe"}]),p.once("packet",function(t){if(!h)if("pong"===t.type&&"probe"===t.data){if(u.upgrading=!0,u.emit("upgrading",p),!p)return;n.priorWebsocketSuccess="websocket"===p.name,u.transport.pause(function(){h||"closed"!==u.readyState&&(c(),u.setTransport(p),p.send([{type:"upgrade"}]),u.emit("upgrade",p),p=null,u.upgrading=!1,u.flush())})}else{var e=new Error("probe error");e.transport=p.name,u.emit("upgradeError",e)}}))}function r(){h||(h=!0,c(),p.close(),p=null)}function o(t){var e=new Error("probe error: "+t);e.transport=p.name,r(),u.emit("upgradeError",e)}function i(){o("transport closed")}function s(){o("socket closed")}function a(t){p&&t.name!==p.name&&r()}function c(){p.removeListener("open",e),p.removeListener("error",o),p.removeListener("close",i),u.removeListener("close",s),u.removeListener("upgrading",a)}var p=this.createTransport(t,{probe:1}),h=!1,u=this;n.priorWebsocketSuccess=!1,p.once("open",e),p.once("error",o),p.once("close",i),this.once("close",s),this.once("upgrading",a),p.open()},n.prototype.onOpen=function(){if(this.readyState="open",n.priorWebsocketSuccess="websocket"===this.transport.name,this.emit("open"),this.flush(),"open"===this.readyState&&this.upgrade&&this.transport.pause)for(var t=0,e=this.upgrades.length;t<e;t++)this.probe(this.upgrades[t])},n.prototype.onPacket=function(t){if("opening"===this.readyState||"open"===this.readyState||"closing"===this.readyState)switch(this.emit("packet",t),this.emit("heartbeat"),t.type){case"open":this.onHandshake(JSON.parse(t.data));break;case"pong":this.setPing(),this.emit("pong");break;case"error":var e=new Error("server error");e.code=t.data,this.onError(e);break;case"message":this.emit("data",t.data),this.emit("message",t.data)}},n.prototype.onHandshake=function(t){this.emit("handshake",t),this.id=t.sid,this.transport.query.sid=t.sid,this.upgrades=this.filterUpgrades(t.upgrades),this.pingInterval=t.pingInterval,this.pingTimeout=t.pingTimeout,this.onOpen(),"closed"!==this.readyState&&(this.setPing(),this.removeListener("heartbeat",this.onHeartbeat),this.on("heartbeat",this.onHeartbeat))},n.prototype.onHeartbeat=function(t){clearTimeout(this.pingTimeoutTimer);var e=this;e.pingTimeoutTimer=setTimeout(function(){"closed"!==e.readyState&&e.onClose("ping timeout")},t||e.pingInterval+e.pingTimeout)},n.prototype.setPing=function(){var t=this;clearTimeout(t.pingIntervalTimer),t.pingIntervalTimer=setTimeout(function(){t.ping(),t.onHeartbeat(t.pingTimeout)},t.pingInterval)},n.prototype.ping=function(){var t=this;this.sendPacket("ping",function(){t.emit("ping")})},n.prototype.onDrain=function(){this.writeBuffer.splice(0,this.prevBufferLen),this.prevBufferLen=0,0===this.writeBuffer.length?this.emit("drain"):this.flush()},n.prototype.flush=function(){"closed"!==this.readyState&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length&&(this.transport.send(this.writeBuffer),this.prevBufferLen=this.writeBuffer.length,this.emit("flush"))},n.prototype.write=n.prototype.send=function(t,e,r){return this.sendPacket("message",t,e,r),this},n.prototype.sendPacket=function(t,e,r,n){if("function"==typeof e&&(n=e,e=void 0),"function"==typeof r&&(n=r,r=null),"closing"!==this.readyState&&"closed"!==this.readyState){r=r||{},r.compress=!1!==r.compress;var o={type:t,data:e,options:r};this.emit("packetCreate",o),this.writeBuffer.push(o),n&&this.once("flush",n),this.flush()}},n.prototype.close=function(){function t(){n.onClose("forced close"),n.transport.close()}function e(){n.removeListener("upgrade",e),n.removeListener("upgradeError",e),t()}function r(){n.once("upgrade",e),n.once("upgradeError",e)}if("opening"===this.readyState||"open"===this.readyState){this.readyState="closing";var n=this;this.writeBuffer.length?this.once("drain",function(){this.upgrading?r():t()}):this.upgrading?r():t()}return this},n.prototype.onError=function(t){n.priorWebsocketSuccess=!1,this.emit("error",t),this.onClose("transport error",t)},n.prototype.onClose=function(t,e){if("opening"===this.readyState||"open"===this.readyState||"closing"===this.readyState){var r=this;clearTimeout(this.pingIntervalTimer),clearTimeout(this.pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),this.readyState="closed",this.id=null,this.emit("close",t,e),r.writeBuffer=[],r.prevBufferLen=0}},n.prototype.filterUpgrades=function(t){for(var e=[],r=0,n=t.length;r<n;r++)~a(this.transports,t[r])&&e.push(t[r]);return e}},function(t,e,r){function n(t){var e,r=!1,n=!1,a=!1!==t.jsonp;if("undefined"!=typeof location){var c="https:"===location.protocol,p=location.port;p||(p=c?443:80),r=t.hostname!==location.hostname||p!==t.port,n=t.secure!==c}if(t.xdomain=r,t.xscheme=n,e=new o(t),"open"in e&&!t.forceJSONP)return new i(t);if(!a)throw new Error("JSONP disabled");return new s(t)}var o=r(13),i=r(16),s=r(30),a=r(31);e.polling=n,e.websocket=a},function(t,e,r){var n=r(14),o=r(15);t.exports=function(t){var e=t.xdomain,r=t.xscheme,i=t.enablesXDR;try{if("undefined"!=typeof XMLHttpRequest&&(!e||n))return new XMLHttpRequest}catch(t){}try{if("undefined"!=typeof XDomainRequest&&!r&&i)return new XDomainRequest}catch(t){}if(!e)try{return new(o[["Active"].concat("Object").join("X")])("Microsoft.XMLHTTP")}catch(t){}}},function(t,e){try{t.exports="undefined"!=typeof XMLHttpRequest&&"withCredentials"in new XMLHttpRequest}catch(e){t.exports=!1}},function(t,e){t.exports=function(){return"undefined"!=typeof self?self:"undefined"!=typeof window?window:Function("return this")()}()},function(t,e,r){function n(){}function o(t){if(c.call(this,t),this.requestTimeout=t.requestTimeout,this.extraHeaders=t.extraHeaders,"undefined"!=typeof location){var e="https:"===location.protocol,r=location.port;r||(r=e?443:80),this.xd="undefined"!=typeof location&&t.hostname!==location.hostname||r!==t.port,this.xs=t.secure!==e}}function i(t){this.method=t.method||"GET",this.uri=t.uri,this.xd=!!t.xd,this.xs=!!t.xs,this.async=!1!==t.async,this.data=void 0!==t.data?t.data:null,this.agent=t.agent,this.isBinary=t.isBinary,this.supportsBinary=t.supportsBinary,this.enablesXDR=t.enablesXDR,this.withCredentials=t.withCredentials,this.requestTimeout=t.requestTimeout,this.pfx=t.pfx,this.key=t.key,this.passphrase=t.passphrase,this.cert=t.cert,this.ca=t.ca,this.ciphers=t.ciphers,this.rejectUnauthorized=t.rejectUnauthorized,this.extraHeaders=t.extraHeaders,this.create()}function s(){for(var t in i.requests)i.requests.hasOwnProperty(t)&&i.requests[t].abort()}var a=r(13),c=r(17),p=r(5),h=r(28),u=(r(3)("engine.io-client:polling-xhr"),r(15));if(t.exports=o,t.exports.Request=i,h(o,c),o.prototype.supportsBinary=!0,o.prototype.request=function(t){return t=t||{},t.uri=this.uri(),t.xd=this.xd,t.xs=this.xs,t.agent=this.agent||!1,t.supportsBinary=this.supportsBinary,t.enablesXDR=this.enablesXDR,t.withCredentials=this.withCredentials,t.pfx=this.pfx,t.key=this.key,t.passphrase=this.passphrase,t.cert=this.cert,t.ca=this.ca,t.ciphers=this.ciphers,t.rejectUnauthorized=this.rejectUnauthorized,t.requestTimeout=this.requestTimeout,t.extraHeaders=this.extraHeaders,new i(t)},o.prototype.doWrite=function(t,e){var r="string"!=typeof t&&void 0!==t,n=this.request({method:"POST",data:t,isBinary:r}),o=this;n.on("success",e),n.on("error",function(t){o.onError("xhr post error",t)}),this.sendXhr=n},o.prototype.doPoll=function(){var t=this.request(),e=this;t.on("data",function(t){e.onData(t)}),t.on("error",function(t){e.onError("xhr poll error",t)}),this.pollXhr=t},p(i.prototype),i.prototype.create=function(){var t={agent:this.agent,xdomain:this.xd,xscheme:this.xs,enablesXDR:this.enablesXDR};t.pfx=this.pfx,t.key=this.key,t.passphrase=this.passphrase,t.cert=this.cert,t.ca=this.ca,t.ciphers=this.ciphers,t.rejectUnauthorized=this.rejectUnauthorized;var e=this.xhr=new a(t),r=this;try{e.open(this.method,this.uri,this.async);try{if(this.extraHeaders){e.setDisableHeaderCheck&&e.setDisableHeaderCheck(!0);for(var n in this.extraHeaders)this.extraHeaders.hasOwnProperty(n)&&e.setRequestHeader(n,this.extraHeaders[n])}}catch(t){}if("POST"===this.method)try{this.isBinary?e.setRequestHeader("Content-type","application/octet-stream"):e.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch(t){}try{e.setRequestHeader("Accept","*/*")}catch(t){}"withCredentials"in e&&(e.withCredentials=this.withCredentials),this.requestTimeout&&(e.timeout=this.requestTimeout),this.hasXDR()?(e.onload=function(){r.onLoad()},e.onerror=function(){r.onError(e.responseText)}):e.onreadystatechange=function(){if(2===e.readyState)try{var t=e.getResponseHeader("Content-Type");(r.supportsBinary&&"application/octet-stream"===t||"application/octet-stream; charset=UTF-8"===t)&&(e.responseType="arraybuffer")}catch(t){}4===e.readyState&&(200===e.status||1223===e.status?r.onLoad():setTimeout(function(){r.onError("number"==typeof e.status?e.status:0)},0))},e.send(this.data)}catch(t){return void setTimeout(function(){r.onError(t)},0)}"undefined"!=typeof document&&(this.index=i.requestsCount++,i.requests[this.index]=this)},i.prototype.onSuccess=function(){this.emit("success"),this.cleanup()},i.prototype.onData=function(t){this.emit("data",t),this.onSuccess()},i.prototype.onError=function(t){this.emit("error",t),this.cleanup(!0)},i.prototype.cleanup=function(t){if("undefined"!=typeof this.xhr&&null!==this.xhr){if(this.hasXDR()?this.xhr.onload=this.xhr.onerror=n:this.xhr.onreadystatechange=n,t)try{this.xhr.abort()}catch(t){}"undefined"!=typeof document&&delete i.requests[this.index],this.xhr=null}},i.prototype.onLoad=function(){var t;try{var e;try{e=this.xhr.getResponseHeader("Content-Type")}catch(t){}t="application/octet-stream"===e||"application/octet-stream; charset=UTF-8"===e?this.xhr.response||this.xhr.responseText:this.xhr.responseText}catch(t){this.onError(t)}null!=t&&this.onData(t)},i.prototype.hasXDR=function(){return"undefined"!=typeof XDomainRequest&&!this.xs&&this.enablesXDR},i.prototype.abort=function(){this.cleanup()},i.requestsCount=0,i.requests={},"undefined"!=typeof document)if("function"==typeof attachEvent)attachEvent("onunload",s);else if("function"==typeof addEventListener){var f="onpagehide"in u?"pagehide":"unload";addEventListener(f,s,!1)}},function(t,e,r){function n(t){var e=t&&t.forceBase64;p&&!e||(this.supportsBinary=!1),o.call(this,t)}var o=r(18),i=r(27),s=r(19),a=r(28),c=r(29);r(3)("engine.io-client:polling");t.exports=n;var p=function(){var t=r(13),e=new t({xdomain:!1});return null!=e.responseType}();a(n,o),n.prototype.name="polling",n.prototype.doOpen=function(){this.poll()},n.prototype.pause=function(t){function e(){r.readyState="paused",t()}var r=this;if(this.readyState="pausing",this.polling||!this.writable){var n=0;this.polling&&(n++,this.once("pollComplete",function(){--n||e()})),this.writable||(n++,this.once("drain",function(){--n||e()}))}else e()},n.prototype.poll=function(){this.polling=!0,this.doPoll(),this.emit("poll")},n.prototype.onData=function(t){var e=this,r=function(t,r,n){return"opening"===e.readyState&&"open"===t.type&&e.onOpen(),"close"===t.type?(e.onClose(),!1):void e.onPacket(t)};s.decodePayload(t,this.socket.binaryType,r),"closed"!==this.readyState&&(this.polling=!1,this.emit("pollComplete"),"open"===this.readyState&&this.poll())},n.prototype.doClose=function(){function t(){e.write([{type:"close"}])}var e=this;"open"===this.readyState?t():this.once("open",t)},n.prototype.write=function(t){var e=this;this.writable=!1;var r=function(){e.writable=!0,e.emit("drain")};s.encodePayload(t,this.supportsBinary,function(t){e.doWrite(t,r)})},n.prototype.uri=function(){var t=this.query||{},e=this.secure?"https":"http",r="";!1!==this.timestampRequests&&(t[this.timestampParam]=c()),this.supportsBinary||t.sid||(t.b64=1),t=i.encode(t),this.port&&("https"===e&&443!==Number(this.port)||"http"===e&&80!==Number(this.port))&&(r=":"+this.port),t.length&&(t="?"+t);var n=this.hostname.indexOf(":")!==-1;return e+"://"+(n?"["+this.hostname+"]":this.hostname)+r+this.path+t}},function(t,e,r){function n(t){this.path=t.path,this.hostname=t.hostname,this.port=t.port,this.secure=t.secure,this.query=t.query,this.timestampParam=t.timestampParam,this.timestampRequests=t.timestampRequests,this.readyState="",this.agent=t.agent||!1,this.socket=t.socket,this.enablesXDR=t.enablesXDR,this.withCredentials=t.withCredentials,this.pfx=t.pfx,this.key=t.key,this.passphrase=t.passphrase,this.cert=t.cert,this.ca=t.ca,this.ciphers=t.ciphers,this.rejectUnauthorized=t.rejectUnauthorized,this.forceNode=t.forceNode,
this.isReactNative=t.isReactNative,this.extraHeaders=t.extraHeaders,this.localAddress=t.localAddress}var o=r(19),i=r(5);t.exports=n,i(n.prototype),n.prototype.onError=function(t,e){var r=new Error(t);return r.type="TransportError",r.description=e,this.emit("error",r),this},n.prototype.open=function(){return"closed"!==this.readyState&&""!==this.readyState||(this.readyState="opening",this.doOpen()),this},n.prototype.close=function(){return"opening"!==this.readyState&&"open"!==this.readyState||(this.doClose(),this.onClose()),this},n.prototype.send=function(t){if("open"!==this.readyState)throw new Error("Transport not open");this.write(t)},n.prototype.onOpen=function(){this.readyState="open",this.writable=!0,this.emit("open")},n.prototype.onData=function(t){var e=o.decodePacket(t,this.socket.binaryType);this.onPacket(e)},n.prototype.onPacket=function(t){this.emit("packet",t)},n.prototype.onClose=function(){this.readyState="closed",this.emit("close")}},function(t,e,r){function n(t,r){var n="b"+e.packets[t.type]+t.data.data;return r(n)}function o(t,r,n){if(!r)return e.encodeBase64Packet(t,n);var o=t.data,i=new Uint8Array(o),s=new Uint8Array(1+o.byteLength);s[0]=v[t.type];for(var a=0;a<i.length;a++)s[a+1]=i[a];return n(s.buffer)}function i(t,r,n){if(!r)return e.encodeBase64Packet(t,n);var o=new FileReader;return o.onload=function(){e.encodePacket({type:t.type,data:o.result},r,!0,n)},o.readAsArrayBuffer(t.data)}function s(t,r,n){if(!r)return e.encodeBase64Packet(t,n);if(g)return i(t,r,n);var o=new Uint8Array(1);o[0]=v[t.type];var s=new w([o.buffer,t.data]);return n(s)}function a(t){try{t=d.decode(t,{strict:!1})}catch(t){return!1}return t}function c(t,e,r){for(var n=new Array(t.length),o=l(t.length,r),i=function(t,r,o){e(r,function(e,r){n[t]=r,o(e,n)})},s=0;s<t.length;s++)i(s,t[s],o)}var p,h=r(20),u=r(21),f=r(22),l=r(23),d=r(24);"undefined"!=typeof ArrayBuffer&&(p=r(25));var y="undefined"!=typeof navigator&&/Android/i.test(navigator.userAgent),m="undefined"!=typeof navigator&&/PhantomJS/i.test(navigator.userAgent),g=y||m;e.protocol=3;var v=e.packets={open:0,close:1,ping:2,pong:3,message:4,upgrade:5,noop:6},b=h(v),k={type:"error",data:"parser error"},w=r(26);e.encodePacket=function(t,e,r,i){"function"==typeof e&&(i=e,e=!1),"function"==typeof r&&(i=r,r=null);var a=void 0===t.data?void 0:t.data.buffer||t.data;if("undefined"!=typeof ArrayBuffer&&a instanceof ArrayBuffer)return o(t,e,i);if("undefined"!=typeof w&&a instanceof w)return s(t,e,i);if(a&&a.base64)return n(t,i);var c=v[t.type];return void 0!==t.data&&(c+=r?d.encode(String(t.data),{strict:!1}):String(t.data)),i(""+c)},e.encodeBase64Packet=function(t,r){var n="b"+e.packets[t.type];if("undefined"!=typeof w&&t.data instanceof w){var o=new FileReader;return o.onload=function(){var t=o.result.split(",")[1];r(n+t)},o.readAsDataURL(t.data)}var i;try{i=String.fromCharCode.apply(null,new Uint8Array(t.data))}catch(e){for(var s=new Uint8Array(t.data),a=new Array(s.length),c=0;c<s.length;c++)a[c]=s[c];i=String.fromCharCode.apply(null,a)}return n+=btoa(i),r(n)},e.decodePacket=function(t,r,n){if(void 0===t)return k;if("string"==typeof t){if("b"===t.charAt(0))return e.decodeBase64Packet(t.substr(1),r);if(n&&(t=a(t),t===!1))return k;var o=t.charAt(0);return Number(o)==o&&b[o]?t.length>1?{type:b[o],data:t.substring(1)}:{type:b[o]}:k}var i=new Uint8Array(t),o=i[0],s=f(t,1);return w&&"blob"===r&&(s=new w([s])),{type:b[o],data:s}},e.decodeBase64Packet=function(t,e){var r=b[t.charAt(0)];if(!p)return{type:r,data:{base64:!0,data:t.substr(1)}};var n=p.decode(t.substr(1));return"blob"===e&&w&&(n=new w([n])),{type:r,data:n}},e.encodePayload=function(t,r,n){function o(t){return t.length+":"+t}function i(t,n){e.encodePacket(t,!!s&&r,!1,function(t){n(null,o(t))})}"function"==typeof r&&(n=r,r=null);var s=u(t);return r&&s?w&&!g?e.encodePayloadAsBlob(t,n):e.encodePayloadAsArrayBuffer(t,n):t.length?void c(t,i,function(t,e){return n(e.join(""))}):n("0:")},e.decodePayload=function(t,r,n){if("string"!=typeof t)return e.decodePayloadAsBinary(t,r,n);"function"==typeof r&&(n=r,r=null);var o;if(""===t)return n(k,0,1);for(var i,s,a="",c=0,p=t.length;c<p;c++){var h=t.charAt(c);if(":"===h){if(""===a||a!=(i=Number(a)))return n(k,0,1);if(s=t.substr(c+1,i),a!=s.length)return n(k,0,1);if(s.length){if(o=e.decodePacket(s,r,!1),k.type===o.type&&k.data===o.data)return n(k,0,1);var u=n(o,c+i,p);if(!1===u)return}c+=i,a=""}else a+=h}return""!==a?n(k,0,1):void 0},e.encodePayloadAsArrayBuffer=function(t,r){function n(t,r){e.encodePacket(t,!0,!0,function(t){return r(null,t)})}return t.length?void c(t,n,function(t,e){var n=e.reduce(function(t,e){var r;return r="string"==typeof e?e.length:e.byteLength,t+r.toString().length+r+2},0),o=new Uint8Array(n),i=0;return e.forEach(function(t){var e="string"==typeof t,r=t;if(e){for(var n=new Uint8Array(t.length),s=0;s<t.length;s++)n[s]=t.charCodeAt(s);r=n.buffer}e?o[i++]=0:o[i++]=1;for(var a=r.byteLength.toString(),s=0;s<a.length;s++)o[i++]=parseInt(a[s]);o[i++]=255;for(var n=new Uint8Array(r),s=0;s<n.length;s++)o[i++]=n[s]}),r(o.buffer)}):r(new ArrayBuffer(0))},e.encodePayloadAsBlob=function(t,r){function n(t,r){e.encodePacket(t,!0,!0,function(t){var e=new Uint8Array(1);if(e[0]=1,"string"==typeof t){for(var n=new Uint8Array(t.length),o=0;o<t.length;o++)n[o]=t.charCodeAt(o);t=n.buffer,e[0]=0}for(var i=t instanceof ArrayBuffer?t.byteLength:t.size,s=i.toString(),a=new Uint8Array(s.length+1),o=0;o<s.length;o++)a[o]=parseInt(s[o]);if(a[s.length]=255,w){var c=new w([e.buffer,a.buffer,t]);r(null,c)}})}c(t,n,function(t,e){return r(new w(e))})},e.decodePayloadAsBinary=function(t,r,n){"function"==typeof r&&(n=r,r=null);for(var o=t,i=[];o.byteLength>0;){for(var s=new Uint8Array(o),a=0===s[0],c="",p=1;255!==s[p];p++){if(c.length>310)return n(k,0,1);c+=s[p]}o=f(o,2+c.length),c=parseInt(c);var h=f(o,0,c);if(a)try{h=String.fromCharCode.apply(null,new Uint8Array(h))}catch(t){var u=new Uint8Array(h);h="";for(var p=0;p<u.length;p++)h+=String.fromCharCode(u[p])}i.push(h),o=f(o,c)}var l=i.length;i.forEach(function(t,o){n(e.decodePacket(t,r,!0),o,l)})}},function(t,e){t.exports=Object.keys||function(t){var e=[],r=Object.prototype.hasOwnProperty;for(var n in t)r.call(t,n)&&e.push(n);return e}},function(t,e,r){function n(t){if(!t||"object"!=typeof t)return!1;if(o(t)){for(var e=0,r=t.length;e<r;e++)if(n(t[e]))return!0;return!1}if("function"==typeof Buffer&&Buffer.isBuffer&&Buffer.isBuffer(t)||"function"==typeof ArrayBuffer&&t instanceof ArrayBuffer||s&&t instanceof Blob||a&&t instanceof File)return!0;if(t.toJSON&&"function"==typeof t.toJSON&&1===arguments.length)return n(t.toJSON(),!0);for(var i in t)if(Object.prototype.hasOwnProperty.call(t,i)&&n(t[i]))return!0;return!1}var o=r(7),i=Object.prototype.toString,s="function"==typeof Blob||"undefined"!=typeof Blob&&"[object BlobConstructor]"===i.call(Blob),a="function"==typeof File||"undefined"!=typeof File&&"[object FileConstructor]"===i.call(File);t.exports=n},function(t,e){t.exports=function(t,e,r){var n=t.byteLength;if(e=e||0,r=r||n,t.slice)return t.slice(e,r);if(e<0&&(e+=n),r<0&&(r+=n),r>n&&(r=n),e>=n||e>=r||0===n)return new ArrayBuffer(0);for(var o=new Uint8Array(t),i=new Uint8Array(r-e),s=e,a=0;s<r;s++,a++)i[a]=o[s];return i.buffer}},function(t,e){function r(t,e,r){function o(t,n){if(o.count<=0)throw new Error("after called too many times");--o.count,t?(i=!0,e(t),e=r):0!==o.count||i||e(null,n)}var i=!1;return r=r||n,o.count=t,0===t?e():o}function n(){}t.exports=r},function(t,e){function r(t){for(var e,r,n=[],o=0,i=t.length;o<i;)e=t.charCodeAt(o++),e>=55296&&e<=56319&&o<i?(r=t.charCodeAt(o++),56320==(64512&r)?n.push(((1023&e)<<10)+(1023&r)+65536):(n.push(e),o--)):n.push(e);return n}function n(t){for(var e,r=t.length,n=-1,o="";++n<r;)e=t[n],e>65535&&(e-=65536,o+=d(e>>>10&1023|55296),e=56320|1023&e),o+=d(e);return o}function o(t,e){if(t>=55296&&t<=57343){if(e)throw Error("Lone surrogate U+"+t.toString(16).toUpperCase()+" is not a scalar value");return!1}return!0}function i(t,e){return d(t>>e&63|128)}function s(t,e){if(0==(4294967168&t))return d(t);var r="";return 0==(4294965248&t)?r=d(t>>6&31|192):0==(4294901760&t)?(o(t,e)||(t=65533),r=d(t>>12&15|224),r+=i(t,6)):0==(4292870144&t)&&(r=d(t>>18&7|240),r+=i(t,12),r+=i(t,6)),r+=d(63&t|128)}function a(t,e){e=e||{};for(var n,o=!1!==e.strict,i=r(t),a=i.length,c=-1,p="";++c<a;)n=i[c],p+=s(n,o);return p}function c(){if(l>=f)throw Error("Invalid byte index");var t=255&u[l];if(l++,128==(192&t))return 63&t;throw Error("Invalid continuation byte")}function p(t){var e,r,n,i,s;if(l>f)throw Error("Invalid byte index");if(l==f)return!1;if(e=255&u[l],l++,0==(128&e))return e;if(192==(224&e)){if(r=c(),s=(31&e)<<6|r,s>=128)return s;throw Error("Invalid continuation byte")}if(224==(240&e)){if(r=c(),n=c(),s=(15&e)<<12|r<<6|n,s>=2048)return o(s,t)?s:65533;throw Error("Invalid continuation byte")}if(240==(248&e)&&(r=c(),n=c(),i=c(),s=(7&e)<<18|r<<12|n<<6|i,s>=65536&&s<=1114111))return s;throw Error("Invalid UTF-8 detected")}function h(t,e){e=e||{};var o=!1!==e.strict;u=r(t),f=u.length,l=0;for(var i,s=[];(i=p(o))!==!1;)s.push(i);return n(s)}/*! https://mths.be/utf8js v2.1.2 by @mathias */
var u,f,l,d=String.fromCharCode;t.exports={version:"2.1.2",encode:a,decode:h}},function(t,e){!function(t){"use strict";e.encode=function(e){var r,n=new Uint8Array(e),o=n.length,i="";for(r=0;r<o;r+=3)i+=t[n[r]>>2],i+=t[(3&n[r])<<4|n[r+1]>>4],i+=t[(15&n[r+1])<<2|n[r+2]>>6],i+=t[63&n[r+2]];return o%3===2?i=i.substring(0,i.length-1)+"=":o%3===1&&(i=i.substring(0,i.length-2)+"=="),i},e.decode=function(e){var r,n,o,i,s,a=.75*e.length,c=e.length,p=0;"="===e[e.length-1]&&(a--,"="===e[e.length-2]&&a--);var h=new ArrayBuffer(a),u=new Uint8Array(h);for(r=0;r<c;r+=4)n=t.indexOf(e[r]),o=t.indexOf(e[r+1]),i=t.indexOf(e[r+2]),s=t.indexOf(e[r+3]),u[p++]=n<<2|o>>4,u[p++]=(15&o)<<4|i>>2,u[p++]=(3&i)<<6|63&s;return h}}("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/")},function(t,e){function r(t){return t.map(function(t){if(t.buffer instanceof ArrayBuffer){var e=t.buffer;if(t.byteLength!==e.byteLength){var r=new Uint8Array(t.byteLength);r.set(new Uint8Array(e,t.byteOffset,t.byteLength)),e=r.buffer}return e}return t})}function n(t,e){e=e||{};var n=new i;return r(t).forEach(function(t){n.append(t)}),e.type?n.getBlob(e.type):n.getBlob()}function o(t,e){return new Blob(r(t),e||{})}var i="undefined"!=typeof i?i:"undefined"!=typeof WebKitBlobBuilder?WebKitBlobBuilder:"undefined"!=typeof MSBlobBuilder?MSBlobBuilder:"undefined"!=typeof MozBlobBuilder&&MozBlobBuilder,s=function(){try{var t=new Blob(["hi"]);return 2===t.size}catch(t){return!1}}(),a=s&&function(){try{var t=new Blob([new Uint8Array([1,2])]);return 2===t.size}catch(t){return!1}}(),c=i&&i.prototype.append&&i.prototype.getBlob;"undefined"!=typeof Blob&&(n.prototype=Blob.prototype,o.prototype=Blob.prototype),t.exports=function(){return s?a?Blob:o:c?n:void 0}()},function(t,e){e.encode=function(t){var e="";for(var r in t)t.hasOwnProperty(r)&&(e.length&&(e+="&"),e+=encodeURIComponent(r)+"="+encodeURIComponent(t[r]));return e},e.decode=function(t){for(var e={},r=t.split("&"),n=0,o=r.length;n<o;n++){var i=r[n].split("=");e[decodeURIComponent(i[0])]=decodeURIComponent(i[1])}return e}},function(t,e){t.exports=function(t,e){var r=function(){};r.prototype=e.prototype,t.prototype=new r,t.prototype.constructor=t}},function(t,e){"use strict";function r(t){var e="";do e=s[t%a]+e,t=Math.floor(t/a);while(t>0);return e}function n(t){var e=0;for(h=0;h<t.length;h++)e=e*a+c[t.charAt(h)];return e}function o(){var t=r(+new Date);return t!==i?(p=0,i=t):t+"."+r(p++)}for(var i,s="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""),a=64,c={},p=0,h=0;h<a;h++)c[s[h]]=h;o.encode=r,o.decode=n,t.exports=o},function(t,e,r){function n(){}function o(t){i.call(this,t),this.query=this.query||{},c||(c=a.___eio=a.___eio||[]),this.index=c.length;var e=this;c.push(function(t){e.onData(t)}),this.query.j=this.index,"function"==typeof addEventListener&&addEventListener("beforeunload",function(){e.script&&(e.script.onerror=n)},!1)}var i=r(17),s=r(28),a=r(15);t.exports=o;var c,p=/\n/g,h=/\\n/g;s(o,i),o.prototype.supportsBinary=!1,o.prototype.doClose=function(){this.script&&(this.script.parentNode.removeChild(this.script),this.script=null),this.form&&(this.form.parentNode.removeChild(this.form),this.form=null,this.iframe=null),i.prototype.doClose.call(this)},o.prototype.doPoll=function(){var t=this,e=document.createElement("script");this.script&&(this.script.parentNode.removeChild(this.script),this.script=null),e.async=!0,e.src=this.uri(),e.onerror=function(e){t.onError("jsonp poll error",e)};var r=document.getElementsByTagName("script")[0];r?r.parentNode.insertBefore(e,r):(document.head||document.body).appendChild(e),this.script=e;var n="undefined"!=typeof navigator&&/gecko/i.test(navigator.userAgent);n&&setTimeout(function(){var t=document.createElement("iframe");document.body.appendChild(t),document.body.removeChild(t)},100)},o.prototype.doWrite=function(t,e){function r(){n(),e()}function n(){if(o.iframe)try{o.form.removeChild(o.iframe)}catch(t){o.onError("jsonp polling iframe removal error",t)}try{var t='<iframe src="javascript:0" name="'+o.iframeId+'">';i=document.createElement(t)}catch(t){i=document.createElement("iframe"),i.name=o.iframeId,i.src="javascript:0"}i.id=o.iframeId,o.form.appendChild(i),o.iframe=i}var o=this;if(!this.form){var i,s=document.createElement("form"),a=document.createElement("textarea"),c=this.iframeId="eio_iframe_"+this.index;s.className="socketio",s.style.position="absolute",s.style.top="-1000px",s.style.left="-1000px",s.target=c,s.method="POST",s.setAttribute("accept-charset","utf-8"),a.name="d",s.appendChild(a),document.body.appendChild(s),this.form=s,this.area=a}this.form.action=this.uri(),n(),t=t.replace(h,"\\\n"),this.area.value=t.replace(p,"\\n");try{this.form.submit()}catch(t){}this.iframe.attachEvent?this.iframe.onreadystatechange=function(){"complete"===o.iframe.readyState&&r()}:this.iframe.onload=r}},function(t,e,r){function n(t){var e=t&&t.forceBase64;e&&(this.supportsBinary=!1),this.perMessageDeflate=t.perMessageDeflate,this.usingBrowserWebSocket=o&&!t.forceNode,this.protocols=t.protocols,this.usingBrowserWebSocket||(u=i),s.call(this,t)}var o,i,s=r(18),a=r(19),c=r(27),p=r(28),h=r(29);r(3)("engine.io-client:websocket");if("undefined"!=typeof WebSocket?o=WebSocket:"undefined"!=typeof self&&(o=self.WebSocket||self.MozWebSocket),"undefined"==typeof window)try{i=r(32)}catch(t){}var u=o||i;t.exports=n,p(n,s),n.prototype.name="websocket",n.prototype.supportsBinary=!0,n.prototype.doOpen=function(){if(this.check()){var t=this.uri(),e=this.protocols,r={};this.isReactNative||(r.agent=this.agent,r.perMessageDeflate=this.perMessageDeflate,r.pfx=this.pfx,r.key=this.key,r.passphrase=this.passphrase,r.cert=this.cert,r.ca=this.ca,r.ciphers=this.ciphers,r.rejectUnauthorized=this.rejectUnauthorized),this.extraHeaders&&(r.headers=this.extraHeaders),this.localAddress&&(r.localAddress=this.localAddress);try{this.ws=this.usingBrowserWebSocket&&!this.isReactNative?e?new u(t,e):new u(t):new u(t,e,r)}catch(t){return this.emit("error",t)}void 0===this.ws.binaryType&&(this.supportsBinary=!1),this.ws.supports&&this.ws.supports.binary?(this.supportsBinary=!0,this.ws.binaryType="nodebuffer"):this.ws.binaryType="arraybuffer",this.addEventListeners()}},n.prototype.addEventListeners=function(){var t=this;this.ws.onopen=function(){t.onOpen()},this.ws.onclose=function(){t.onClose()},this.ws.onmessage=function(e){t.onData(e.data)},this.ws.onerror=function(e){t.onError("websocket error",e)}},n.prototype.write=function(t){function e(){r.emit("flush"),setTimeout(function(){r.writable=!0,r.emit("drain")},0)}var r=this;this.writable=!1;for(var n=t.length,o=0,i=n;o<i;o++)!function(t){a.encodePacket(t,r.supportsBinary,function(o){if(!r.usingBrowserWebSocket){var i={};if(t.options&&(i.compress=t.options.compress),r.perMessageDeflate){var s="string"==typeof o?Buffer.byteLength(o):o.length;s<r.perMessageDeflate.threshold&&(i.compress=!1)}}try{r.usingBrowserWebSocket?r.ws.send(o):r.ws.send(o,i)}catch(t){}--n||e()})}(t[o])},n.prototype.onClose=function(){s.prototype.onClose.call(this)},n.prototype.doClose=function(){"undefined"!=typeof this.ws&&this.ws.close()},n.prototype.uri=function(){var t=this.query||{},e=this.secure?"wss":"ws",r="";this.port&&("wss"===e&&443!==Number(this.port)||"ws"===e&&80!==Number(this.port))&&(r=":"+this.port),this.timestampRequests&&(t[this.timestampParam]=h()),this.supportsBinary||(t.b64=1),t=c.encode(t),t.length&&(t="?"+t);var n=this.hostname.indexOf(":")!==-1;return e+"://"+(n?"["+this.hostname+"]":this.hostname)+r+this.path+t},n.prototype.check=function(){return!(!u||"__initialize"in u&&this.name===n.prototype.name)}},function(t,e){},function(t,e){var r=[].indexOf;t.exports=function(t,e){if(r)return t.indexOf(e);for(var n=0;n<t.length;++n)if(t[n]===e)return n;return-1}},function(t,e,r){"use strict";function n(t,e,r){this.io=t,this.nsp=e,this.json=this,this.ids=0,this.acks={},this.receiveBuffer=[],this.sendBuffer=[],this.connected=!1,this.disconnected=!0,this.flags={},r&&r.query&&(this.query=r.query),this.io.autoConnect&&this.open()}var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=r(4),s=r(5),a=r(35),c=r(36),p=r(37),h=(r(3)("socket.io-client:socket"),r(27)),u=r(21);t.exports=e=n;var f={connect:1,connect_error:1,connect_timeout:1,connecting:1,disconnect:1,error:1,reconnect:1,reconnect_attempt:1,reconnect_failed:1,reconnect_error:1,reconnecting:1,ping:1,pong:1},l=s.prototype.emit;s(n.prototype),n.prototype.subEvents=function(){if(!this.subs){var t=this.io;this.subs=[c(t,"open",p(this,"onopen")),c(t,"packet",p(this,"onpacket")),c(t,"close",p(this,"onclose"))]}},n.prototype.open=n.prototype.connect=function(){return this.connected?this:(this.subEvents(),this.io.reconnecting||this.io.open(),"open"===this.io.readyState&&this.onopen(),this.emit("connecting"),this)},n.prototype.send=function(){var t=a(arguments);return t.unshift("message"),this.emit.apply(this,t),this},n.prototype.emit=function(t){if(f.hasOwnProperty(t))return l.apply(this,arguments),this;var e=a(arguments),r={type:(void 0!==this.flags.binary?this.flags.binary:u(e))?i.BINARY_EVENT:i.EVENT,data:e};return r.options={},r.options.compress=!this.flags||!1!==this.flags.compress,"function"==typeof e[e.length-1]&&(this.acks[this.ids]=e.pop(),r.id=this.ids++),this.connected?this.packet(r):this.sendBuffer.push(r),this.flags={},this},n.prototype.packet=function(t){t.nsp=this.nsp,this.io.packet(t)},n.prototype.onopen=function(){if("/"!==this.nsp)if(this.query){var t="object"===o(this.query)?h.encode(this.query):this.query;this.packet({type:i.CONNECT,query:t})}else this.packet({type:i.CONNECT})},n.prototype.onclose=function(t){this.connected=!1,this.disconnected=!0,delete this.id,this.emit("disconnect",t)},n.prototype.onpacket=function(t){var e=t.nsp===this.nsp,r=t.type===i.ERROR&&"/"===t.nsp;if(e||r)switch(t.type){case i.CONNECT:this.onconnect();break;case i.EVENT:this.onevent(t);break;case i.BINARY_EVENT:this.onevent(t);break;case i.ACK:this.onack(t);break;case i.BINARY_ACK:this.onack(t);break;case i.DISCONNECT:this.ondisconnect();break;case i.ERROR:this.emit("error",t.data)}},n.prototype.onevent=function(t){var e=t.data||[];null!=t.id&&e.push(this.ack(t.id)),this.connected?l.apply(this,e):this.receiveBuffer.push(e)},n.prototype.ack=function(t){var e=this,r=!1;return function(){if(!r){r=!0;var n=a(arguments);e.packet({type:u(n)?i.BINARY_ACK:i.ACK,id:t,data:n})}}},n.prototype.onack=function(t){var e=this.acks[t.id];"function"==typeof e&&(e.apply(this,t.data),delete this.acks[t.id])},n.prototype.onconnect=function(){this.connected=!0,this.disconnected=!1,this.emit("connect"),this.emitBuffered()},n.prototype.emitBuffered=function(){var t;for(t=0;t<this.receiveBuffer.length;t++)l.apply(this,this.receiveBuffer[t]);for(this.receiveBuffer=[],t=0;t<this.sendBuffer.length;t++)this.packet(this.sendBuffer[t]);this.sendBuffer=[]},n.prototype.ondisconnect=function(){this.destroy(),this.onclose("io server disconnect")},n.prototype.destroy=function(){if(this.subs){for(var t=0;t<this.subs.length;t++)this.subs[t].destroy();this.subs=null}this.io.destroy(this)},n.prototype.close=n.prototype.disconnect=function(){return this.connected&&this.packet({type:i.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this},n.prototype.compress=function(t){return this.flags.compress=t,this},n.prototype.binary=function(t){return this.flags.binary=t,this}},function(t,e){function r(t,e){var r=[];e=e||0;for(var n=e||0;n<t.length;n++)r[n-e]=t[n];return r}t.exports=r},function(t,e){"use strict";function r(t,e,r){return t.on(e,r),{destroy:function(){t.removeListener(e,r)}}}t.exports=r},function(t,e){var r=[].slice;t.exports=function(t,e){if("string"==typeof e&&(e=t[e]),"function"!=typeof e)throw new Error("bind() requires a function");var n=r.call(arguments,2);return function(){return e.apply(t,n.concat(r.call(arguments)))}}},function(t,e){function r(t){t=t||{},this.ms=t.min||100,this.max=t.max||1e4,this.factor=t.factor||2,this.jitter=t.jitter>0&&t.jitter<=1?t.jitter:0,this.attempts=0}t.exports=r,r.prototype.duration=function(){var t=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var e=Math.random(),r=Math.floor(e*this.jitter*t);t=0==(1&Math.floor(10*e))?t-r:t+r}return 0|Math.min(t,this.max)},r.prototype.reset=function(){this.attempts=0},r.prototype.setMin=function(t){this.ms=t},r.prototype.setMax=function(t){this.max=t},r.prototype.setJitter=function(t){this.jitter=t}}])});
//# sourceMappingURL=socket.io.slim.js.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../buffer/index.js */ "./node_modules/buffer/index.js").Buffer))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/OctopusRTC.ts":
/*!***************************!*\
  !*** ./src/OctopusRTC.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var eventemitter3_1 = __importDefault(__webpack_require__(/*! eventemitter3 */ "./node_modules/eventemitter3/umd/eventemitter3.min.js"));
var logger_1 = __webpack_require__(/*! ./web/log/logger */ "./src/web/log/logger.ts");
var config_1 = __webpack_require__(/*! ../config */ "./config.ts");
// OctopusRTC as OctopusClient, 
var OctopusRTC_Core_1 = __webpack_require__(/*! ./web/OctopusRTC-Core */ "./src/web/OctopusRTC-Core.ts");
var Statistics_1 = __webpack_require__(/*! ./web/device/handlers/stats/Statistics */ "./src/web/device/handlers/stats/Statistics.ts");
var MediaDeviceInfoCategory_1 = __importDefault(__webpack_require__(/*! ./web/device/MediaDeviceInfoCategory */ "./src/web/device/MediaDeviceInfoCategory.ts"));
var Record_1 = __webpack_require__(/*! ./web/media/Record */ "./src/web/media/Record.ts");
var OctopusRTC = /** @class */ (function (_super) {
    __extends(OctopusRTC, _super);
    /**
    * des-创建OctopusRTC实例-des
    * @param {string} appId - appId
    * @param {string} userId - 用户的userId
    * @param {string} [env=prod] - SDK环境选择
    * @param {string} [type=international] - 节点环境选择
    * @param {number} [logLevel] - 日志级别
    * @param {string} [userName] - 用户名称
    *
    */
    function OctopusRTC(options) {
        var _this = _super.call(this) || this;
        _this._roomId = '';
        _this._userId = '';
        _this._userName = '';
        _this._octopusConfig = null;
        _this._octopusClient = null;
        _this._appId = '';
        _this._env = 'prod';
        _this._type = null;
        _this._customEdgeUrl = '';
        _this._version = config_1.version;
        _this._logger = null;
        _this._record = null;
        _this._appPackageName = '';
        if (!options.appId) {
            throw new Error('appId can not be empty.');
        }
        if (!options.userId) {
            throw new Error('userId can not be empty.');
        }
        _this._userId = options.userId;
        _this._appId = options.appId;
        if (options !== void 0) {
            if (options.userName !== void 0) {
                _this._userName = options.userName;
            }
            if (options.env !== void 0) {
                _this._env = options.env;
            }
            ;
            if (options.type !== void 0) {
                _this._type = options.type;
            }
            ;
            if (options.edgeUrl !== void 0) {
                _this._customEdgeUrl = options.edgeUrl;
            }
            if (options.appPackageName !== void 0) {
                _this._appPackageName = options.appPackageName;
            }
        }
        logger_1.generateLoggerInstance({
            appId: _this._appId,
            userId: _this._userId
        });
        _this._logger = logger_1.logger.collect;
        return _this;
        // 调试阶段默认上传日志---测试
        // this._logger.enableLogUpload();
    }
    Object.defineProperty(OctopusRTC.prototype, "roomId", {
        get: function () {
            return this._roomId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OctopusRTC.prototype, "userId", {
        get: function () {
            return this._userId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OctopusRTC.prototype, "userName", {
        get: function () {
            return this._userName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OctopusRTC.prototype, "version", {
        get: function () {
            return this._version;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * des-判断浏览器是否支持WebRTC-des
     * @return {boolean}
     */
    OctopusRTC.isSupported = function () {
        var rtconnection = window.RTCPeerConnection || window.webkitRTCPeerConnection;
        var media = navigator.getUserMedia || navigator.mediaDevices && navigator.mediaDevices.getUserMedia;
        var socket = window.WebSocket;
        return !!rtconnection && !!media && !!socket;
    };
    /**
     *
     * des-初始化SDK-des
     */
    OctopusRTC.prototype.init = function () {
        if (!config_1.projectName && !this._type) {
            throw new Error('type can not be empty.');
        }
        var project = config_1.projectName;
        if (this._type) {
            project = this._type == 'china' ? 'cm' : 'liveme';
        }
        this._octopusConfig = {
            appId: this._appId,
            env: this._env,
            projectName: project,
            userId: this._userId,
            userName: this._userName,
            customEdgeUrl: this._customEdgeUrl
        };
        this._octopusClient = new OctopusRTC_Core_1.OctopusClientTest(this._octopusConfig);
        this._logger.info('init params', this._octopusConfig);
        this.eventemitFunctions();
    };
    /**
     * des-登录房间-des
     * @param {string} roomId - 房间id
     * @param {(1 | 2)} role - 角色
     * @param {string} auth - 鉴权签名值
     * @param {string} expire - 过期时间戳
     * @return {Array | errMsg}  {(Promise<streamList[] | errMsg>)}
     * @memberof OctopusRTC
     */
    OctopusRTC.prototype.login = function (roomId, role, auth, expire) {
        return __awaiter(this, void 0, void 0, function () {
            var result, streamList, _a, _b, stream, reason_1;
            var e_1, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        this._logger.info('login start', { roomId: roomId, role: role, auth: auth, expire: expire });
                        this._roomId = roomId;
                        if (!this._octopusClient) {
                            throw new Error('OctopusRTC is not a instance.');
                        }
                        result = [];
                        _d.label = 1;
                    case 1:
                        _d.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this._octopusClient.login(this._appPackageName, this._roomId, role, auth, expire)];
                    case 2:
                        streamList = _d.sent();
                        if (!('code' in streamList)) {
                            try {
                                for (_a = __values(streamList), _b = _a.next(); !_b.done; _b = _a.next()) {
                                    stream = _b.value;
                                    result.push({
                                        streamId: stream.streamId,
                                        userId: stream.userId,
                                        roomId: stream.roomId
                                    });
                                }
                            }
                            catch (e_1_1) { e_1 = { error: e_1_1 }; }
                            finally {
                                try {
                                    if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                                }
                                finally { if (e_1) throw e_1.error; }
                            }
                        }
                        this._logger.info('login success', result);
                        return [2 /*return*/, result];
                    case 3:
                        reason_1 = _d.sent();
                        this._logger.info('login failed', reason_1);
                        return [2 /*return*/, reason_1];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * des-登出房间-des
     *
     * @memberof OctopusRTC
     */
    OctopusRTC.prototype.logout = function () {
        if (!this._octopusClient) {
            throw new Error('OctopusRTC is not a instance.');
        }
        this.removeAllListeners();
        this._logger.disableLogUpload();
        this._octopusClient.logout();
    };
    /**
     * @typedef videoQuality
     * @type {1|2|3|4}
     * @property {number} 1 - 分辨率: 320 * 240, 帧率: 15, 码率: 300
     * @property {number} 2 - 分辨率: 640 * 480, 帧率: 15, 码率: 800
     * @property {number} 3 - 分辨率: 1280 * 720, 帧率: 20, 码率: 1500
     * @property {number} 4 - 分辨率: width * height, 帧率: frameRate, 码率: bitRate(k)
    */
    /**
     * @param {object} [source] - 视频源类型
     * @param {object} [source.camera] - 摄像头
     * @param {object} [source.screen] - 屏幕共享
     * @param {object} [source.custom] - 自定义流
     * @param {boolean} [source.camera.audio] - 是否开启音频
     * @param {boolean} [source.camera.video] - 是否开启视频
     * @param {string} [source.camera.audioInput] - 音频输入设备
     * @param {number} [source.camera.audioBitrate] - 音频码率
     * @param {string} [source.camera.videoInput] - 视频输入设备
     * @param {1|2|3|4} [source.camera.videoQuality] - 视频质量
     * @param {string} [source.camera.facingMode] - 切换摄像头（移动端）
     * @param {number} [source.camera.width] - 宽
     * @param {number} [source.camera.height] - 高
     * @param {number} [source.camera.frameRate] - 帧率
     * @param {number} [source.camera.bitrate] - 码率
     * @param {boolean} [source.camera.AGC] - 自动增益
     * @param {boolean} [source.camera.ANS] - 回声消除
     * @param {boolean} [source.camera.AEC] - 降噪
     * @param {boolean} [source.screen.audio] - (共享屏幕)是否开启音频
     * @param {1|2|3|4} [source.screen.videoQuality] - 视频质量设置
     * @param {number} [source.screen.frameRate] - 帧率
     * @param {number} [source.screen.bitrate] - 码率
     * @param {MediaStream} source.custom.source - 视频流
     * @param {number} [source.custom.bitrate] - 码率
     * @return {mediastream}  {Promise<MediaStream>}
     * des-创建流
     * @memberof OctopusRTC
     */
    OctopusRTC.prototype.createStream = function (source) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this._logger.info('createStream params', source);
                return [2 /*return*/, this._octopusClient.createStream(source)];
            });
        });
    };
    /**
     * des-删除流-des
     *
     * @param {MediaStream} mediastream
     * @memberof OctopusRTC
     */
    OctopusRTC.prototype.destroyStream = function (mediastream) {
        if (!this._octopusClient) {
            throw new Error('OctopusRTC is not a instance.');
        }
        this._octopusClient.destroyStream(mediastream);
    };
    /**
     * des-开始推流-des
     *
     * @param {string} streamId - 流id
     * @param {MediaStream} mediaElement - 流
     * @return {void}  {Promise<void>}
     * @memberof OctopusRTC
     */
    OctopusRTC.prototype.startPublishingStream = function (streamId, mediaElement, extraInfo, publishOption) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this._logger.info('start publish stream', { streamId: streamId, mediaElement: mediaElement });
                        if (!this._octopusClient) return [3 /*break*/, 2];
                        return [4 /*yield*/, this._octopusClient.startPublishingStream(streamId, mediaElement, extraInfo, publishOption)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * des-停止推流-des
     *
     * @param {string} streamId - 流id
     * @memberof OctopusRTC
     */
    OctopusRTC.prototype.stopPublishingStream = function (streamId) {
        this._logger.info('stop publish stream', streamId);
        if (this._octopusClient) {
            this._octopusClient.stopPublishingStream(streamId);
        }
    };
    /**
     * des-开始拉流-des
     *
     * @param {string} streamId - 流id
     * @return {void}  {(Promise<MediaStream | void>)}
     * @memberof OctopusRTC
     */
    OctopusRTC.prototype.startPlayingStream = function (streamId, audioOutput, playOption) {
        return __awaiter(this, void 0, void 0, function () {
            var stream;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this._logger.info('start play stream.', { pullstreamUserId: streamId });
                        if (!this._octopusClient) return [3 /*break*/, 2];
                        return [4 /*yield*/, this._octopusClient.startPlayingStream(streamId, audioOutput, playOption)];
                    case 1:
                        stream = _a.sent();
                        return [2 /*return*/, stream];
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * des-停止拉流-des
     *
     * @param {string} streamId - 流id
     * @memberof OctopusRTC
     */
    OctopusRTC.prototype.stopPlayingStream = function (streamId) {
        this._logger.info('stop play stream', streamId);
        if (this._octopusClient) {
            this._octopusClient.stopPlayingStream(streamId);
        }
    };
    /**
     * des-混流-des
     *
     * @param {mixStreamConfig} mixStreamConfig
     * @return {*}  {Promise<void>}
     * @memberof OctopusRTC
     */
    OctopusRTC.prototype.updateMixStream = function (mixStreamConfig) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this._octopusClient) {
                _this._octopusClient.updateMixStream(mixStreamConfig, function (res) {
                    resolve(res);
                }, function (err) {
                    reject(err);
                });
            }
        });
    };
    /**
     * des-更改流track-des
     *
     * @param {MediaStream} currentStream
     * @param {MediaStreamTrack} track
     * @param {string} [streamId]
     * @memberof OctopusRTC
     */
    OctopusRTC.prototype.replaceTrack = function (currentStream, track, streamId) {
        if (!this._octopusClient) {
            throw new Error('OctopusRTC is not a instance.');
        }
        this._octopusClient.replaceTrack(currentStream, track, streamId);
    };
    /**
     * des-更改约束、设备-des
     *
     * @param {MediaStream} currentStream
     * @param {('audio' | 'video')} type
     * @param @type {(MediaTrackConstraints | sourceCamera)} constrains
     * @param {string} [streamId]
     * @return {Promise}  {(Promise<errMsg | void>)}
     * @memberof OctopusRTC
     */
    OctopusRTC.prototype.changeConstraints = function (currentStream, type, constrains, streamId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this._octopusClient) return [3 /*break*/, 2];
                        return [4 /*yield*/, this._octopusClient.changeConstraints(currentStream, type, constrains, streamId)];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * des-开启静音-des
     *
     * @param {string} streamId - 流id
     * @param {boolean} mute - 是否静音
     * @memberof OctopusRTC
     */
    OctopusRTC.prototype.muteSwitch = function (streamId, mute) {
        if (this._octopusClient) {
            this._octopusClient.muteSwitch(streamId, mute);
        }
    };
    /**
     * des-切换摄像头-des
     *
     * @param {string} streamId - 流id
     * @param {('close' | 'open')} state - 摄像头状态
     * @memberof OctopusRTC
     */
    OctopusRTC.prototype.cameraSwitch = function (streamId, state) {
        if (!this._octopusClient) {
            throw new Error('OctopusRTC is not a instance.');
        }
        this._octopusClient.cameraSwitch(streamId, state);
    };
    /**
     * des-获取本地音频统计数据-des
     *
     * @param {string} streamId
     * @return {LocalAudioTrackStats}
     * @memberof OctopusRTC
     */
    OctopusRTC.prototype.getLocalAudioStats = function (streamId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this._octopusClient) {
                            throw new Error('OctopusRTC is not a instance.');
                        }
                        return [4 /*yield*/, this._octopusClient.getMediaStreamTrackStats(streamId, Statistics_1.type.LocalAudio)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * des-获取本地视频统计数据-des
     *
     * @param {string} streamId
     * @return {LocalVideoTrackStats}
     * @memberof OctopusRTC
     */
    OctopusRTC.prototype.getLocalVideoStats = function (streamId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this._octopusClient) {
                            throw new Error('OctopusRTC is not a instance.');
                        }
                        return [4 /*yield*/, this._octopusClient.getMediaStreamTrackStats(streamId, Statistics_1.type.LocalVideo)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * des-获取远端音频统计数据-des
     *
     * @param {string} streamId
     * @return {RemoteAudioTrackStats}
     * @memberof OctopusRTC
     */
    OctopusRTC.prototype.getRemoteAudioStats = function (streamId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this._octopusClient) {
                            throw new Error('OctopusRTC is not a instance.');
                        }
                        return [4 /*yield*/, this._octopusClient.getMediaStreamTrackStats(streamId, Statistics_1.type.RemoteAudio)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     *des-获取远端视频统计数据-des
     *
     * @param {string} streamId
     * @return {RemoteVideoTrackStats}
     * @memberof OctopusRTC
     */
    OctopusRTC.prototype.getRemoteVideoStats = function (streamId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this._octopusClient) {
                            throw new Error('OctopusRTC is not a instance.');
                        }
                        return [4 /*yield*/, this._octopusClient.getMediaStreamTrackStats(streamId, Statistics_1.type.RemoteVideo)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     *des-录制本地视频-des
     * @param {mediastream} - 媒体流
     * @param {RecordMediastreamOptions} - 录制媒体参数
     * @returns {object} - record实例(调用startRecord()开始录制， stopRecord()结束录制，downRecord()下载录制)
     * @memberof OctopusRTC
     */
    OctopusRTC.prototype.initRecord = function (mediastream, _a) {
        var mimeType = _a.mimeType, codec = _a.codec;
        this._record = new Record_1.RecordMediastream(mediastream, {
            codec: codec,
            mimeType: mimeType
        });
        return this._record;
    };
    OctopusRTC.prototype.eventemitFunctions = function () {
        var _this = this;
        /**
         *
         * Throw a stream-update.
         *
         * @fires OctopusRTC#stream-update
         *
         *
         */
        if (this._octopusClient) {
            /**
             * @typedef stramStateResult
             * @property {number} code - 标识码 1: 推(拉)流成功; 11: 断网重连推(拉)流成功，用于通知业务端更改播放器状态等; 0: 推(拉)流失败
             * @property {string} streamId - 流Id
             * @property {string} state - PUBLISHING: 正在推流; PLAYING: 正在拉流; NO_PUBLISH: 推流失败; NO_PLAY: 拉流失败
            */
            this._octopusClient.on('@getpublishstate', function (result) {
                /**
                 * des-获取推流状态 event-des
                 *
                 * @since 2.0
                 * @event OctopusRTC#publish-state-update
                 * @returns {stramStateResult}
                 */
                _this.emit('publish-state-update', result);
            });
            this._octopusClient.on('@getplaystate', function (result) {
                /**
                 * des-获取拉流状态 event-des
                 *
                 * @since 2.0
                 * @event OctopusRTC#play-state-update
                 * @returns {stramStateResult}
                 */
                _this.emit('play-state-update', result);
            });
            this._octopusClient.on('@getstreamupdate', function (result) {
                /**
                 * @typedef stramUpdateResult
                 * @property {number} code - 标识码 1 为增加 0为减少
                 * @property {Array.<{streamId: string, userId: string, roomId: string}>} streamList - 流列表
                */
                /**
                 * des-流变化通知 event-des
                 *
                 * @since 2.0
                 * @event OctopusRTC#stream-update
                 * @returns {stramUpdateResult}
                 */
                _this.emit('stream-update', result);
            });
            this._octopusClient.on('@getdisconnect', function (result) {
                /**
                 * des-websocket 断开通知 event-des
                 *
                 * @since 2.0
                 * @event OctopusRTC#disconnect
                 * @returns {errMsg}
                 */
                _this.emit('disconnect', result);
            });
            this._octopusClient.on('@getkickout', function (result) {
                /**
                 * @typedef kickResult
                 * @property {string} userId - 用户Id
                 * @property {string} roomId - 房间Id
                 * @property {number} reason - 错误码
                */
                /**
                 * des-踢人通知 event-des
                 *
                 * @since 2.0
                 * @event OctopusRTC#kick-out
                 * @returns {kickResult}
                 */
                _this.emit('kick-out', result);
                _this.logout();
            });
        }
    };
    /**
     * des-设置日志等级-des
     * @param {(0 | 1 | 2 | 3 | 4)} level - 日志等级 0: debug 1: info 2: warning 3: error 4: none
     * @memberof OctopusRTC
     */
    OctopusRTC.prototype.setLogLevel = function (level) {
        this._logger.setLogLevel(level);
    };
    /**
     * des-设置开始上传日志-des
     *
     * @memberof OctopusRTC
     */
    OctopusRTC.prototype.enableLogUpload = function () {
        this._logger.enableLogUpload();
    };
    /**
     * des-设置停止上传日志-des
     *
     * @memberof OctopusRTC
     */
    OctopusRTC.prototype.disableLogUpload = function () {
        this._logger.disableLogUpload();
    };
    OctopusRTC.prototype.devicesList = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = MediaDeviceInfoCategory_1.default.bind;
                        return [4 /*yield*/, navigator.mediaDevices.enumerateDevices()];
                    case 1: return [2 /*return*/, new (_a.apply(MediaDeviceInfoCategory_1.default, [void 0, _b.sent()]))()];
                }
            });
        });
    };
    OctopusRTC.prototype.getCamerasList = function () {
        return __awaiter(this, void 0, void 0, function () {
            var cameras;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.devicesList()];
                    case 1:
                        cameras = (_a.sent()).cameras;
                        return [2 /*return*/, cameras];
                }
            });
        });
    };
    OctopusRTC.prototype.getMicrophonesList = function () {
        return __awaiter(this, void 0, void 0, function () {
            var microphones;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.devicesList()];
                    case 1:
                        microphones = (_a.sent()).microphones;
                        return [2 /*return*/, microphones];
                }
            });
        });
    };
    OctopusRTC.prototype.getSpeakersList = function () {
        return __awaiter(this, void 0, void 0, function () {
            var speakers;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.devicesList()];
                    case 1:
                        speakers = (_a.sent()).speakers;
                        return [2 /*return*/, speakers];
                }
            });
        });
    };
    return OctopusRTC;
}(eventemitter3_1.default));
/**
 * @global
 * @typedef {Object} errMsg
 * @alias errMsg
 * @property {number} code
 * @property {string} msg
 */
/**
 * @global
 * @typedef {Object} sourceCamera
 * @property {boolean} audio - 是否开启音频
 * @property {boolean} video - 是否开启视频
 * @property {string} audioInput - 音频输入设备
 * @property {string} videoInput - 视频输入设备
 * @property {number} videoQuality - 视频质量
 * @property {string} facingMode - 摄像头朝向，"user"表示前置摄像头，"environment"表示后置摄像头
 * @property {number} width - 宽
 * @property {number} height - 高
 * @property {number} frameRate - 帧率
 * @property {number} bitrate - 码率
 * @property {boolean} AGC - 自动增益
 * @property {boolean} ANS - 回声消除
 * @property {boolean} AEC - 降噪
 *
*/
/**
 * @global
 * @typedef {Object} LocalAudioTrackStats
 * @property {"opus" | "aac"} codecType 编码类型
 * @property {number} sendBitrate 音频发送码率
 * @property {number} sendBytes 音频字节
 * @property {number} sendPackets 音频发送包数
 * @property {number} sendPacketsLost 音频丢包数
 * @property {number}  sendVolumeLevel 声音级别
 */
/**
 * @global
 * @typedef {Object} LocalVideoTrackStats
 * @property {undefined | number} captureFrameRate 采集帧率
 * @property {number} captureResolutionHeight 采集分辨率高度
 * @property {number} captureResolutionWidth 采集分辨率宽度
 * @property {"H264" | "VP8" | "VP9"} codecType 视频编码类型
 * @property {undefined | number} encodeDelay 编码延迟
 * @property {number} sendBitrate 发送码率
 * @property {number} sendBytes 发送字节
 * @property {undefined | number} sendFrameRate 发送帧率
 * @property {number} sendPackets 发送包
 * @property {number} sendPacketsLost 丢包
 * @property {number} sendResolutionHeight 发送分辨率高度
 * @property {number} sendResolutionWidth 发送分辨率宽度
 * @property {number} targetSendBitrate 目标码率
 * @property {number} totalDuration 视频总时长，单位为秒
 * @property {number} totalFreezeTime 视频总卡顿时长，单位为秒
 */
/**
 * @global
 * @typedef {Object} RemoteAudioTrackStats
 * @property {"opus" | "aac"} codecType 编码类型
 * @property {number} freezeRate 卡顿率
 * @property {number} packetLossRate 丢包率
 * @property {number} publishDuration 发布时长
 * @property {number} receiveBitrate 接收码率
 * @property {number} receiveBytes 接收字节
 * @property {number} receiveDelay 接收延迟
 * @property {number} receiveDelay 音频级别
 * @property {number} receivePackets 音频包
 * @property {number} receivePacketsLost 接收丢包率
 * @property {number} totalDuration 接收时长
 * @property {number} totalFreezeTime 音频总卡顿时长
 * @property {number} transportDelay 传输延迟
 */
/**
 * @global
 * @typedef {Object} RemoteVideoTrackStats
 * @property {"opus" | "aac"} codecType 编码类型
 * @property {undefined | number} decodeFrameRate 解码帧率
 * @property {number} freezeRate 卡顿率
 * @property {number} packetLossRate 丢包率
 * @property {number} receiveBitrate 接收码率
 * @property {number} receiveBytes 接收字节数
 * @property {number} receiveDelay 接收延迟
 * @property {undefined | number} receiveFrameRate 接收帧率
 * @property {number} receivePackets 接收包
 * @property {number} receivePacketsLost 接收丢包
 * @property {number} receiveResolutionHeight 接收分辨率高度
 * @property {number} receiveResolutionWidth 接收分辨率高度
 * @property {number} renderFrameRate 渲染帧率
 * @property {number} totalDuration 接收的视频总时长，单位为秒。
 * @property {number} totalFreezeTime 接收的视频总卡顿时长，单位为秒。
 * @property {number} transportDelay 从远端发送视频到本地接收视频的延迟。
*/
/**
 * @global
 * @typedef {Object} RecordMediastreamOptions
 * @property {string} mimeType MIMETYPE
 * @property {string} codec 编码类型
*/
exports.default = OctopusRTC;


/***/ }),

/***/ "./src/common/defaultConfig.ts":
/*!*************************************!*\
  !*** ./src/common/defaultConfig.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.constantConfig = exports.envConfig = void 0;
exports.envConfig = {
    liveme: {
        prod: {
            CENTERURL: 'https://rtc-stream-global-center.linkv.fun',
            LOGURL: 'wss://rtc-fs.linkv.fun',
        },
        test: {
            CENTERURL: 'https://qa-rtc-stream-global-center.linkv.fun',
            LOGURL: 'wss://rtc-fs.linkv.fun',
        },
        dev: {
            CENTERURL: 'https://qa-rtc-stream-global-center.linkv.fun',
            LOGURL: 'wss://rtc-fs.linkv.fun',
        }
    },
    cm: {
        prod: {
            CENTERURL: 'https://rtc-stream-cn-center.linkv.fun',
            LOGURL: 'wss://rtc-fs.linkv.fun',
        },
        test: {
            CENTERURL: 'https://qa-rtc-stream-cn-center.linkv.fun',
            LOGURL: 'wss://rtc-fs.linkv.fun',
        },
        dev: {
            CENTERURL: 'https://qa-rtc-stream-cn-center.linkv.fun',
            LOGURL: 'wss://rtc-fs.linkv.fun',
        }
    }
};
exports.constantConfig = {
    LOGREPORT: 'https://joyme-weblog.linkv.fun',
    STATSURL: 'https://linkv-old-collect.linkv.fun'
};


/***/ }),

/***/ "./src/common/errorCode.ts":
/*!*********************************!*\
  !*** ./src/common/errorCode.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * 错误码长度为6位数字。
 * 1XXXXX device 异常
 * 4XXXXX http 异常
 * 5XXXXX signal 异常
 * 6XXXXX media 异常
 * 7XXXXX 缺省检查
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.errCode = exports.lackErrCode = void 0;
function lackErrCode(msg) {
    return {
        code: 700000,
        msg: "LACK OF " + msg.toUpperCase()
    };
}
exports.lackErrCode = lackErrCode;
exports.errCode = new Map([
    ['wsDisconnect', {
            code: 500000,
            msg: 'WS_DISCONNECT'
        }],
    ['kickOut', {
            code: 500001,
            msg: 'WS_KICK_OUT'
        }],
    ['constrainChangeSuccess', {
            code: 600000,
            msg: 'CONSTRAIN_CHANGE_SUCCESS'
        }],
    ['overConstrainedError', {
            code: 600001,
            msg: 'OVERCONSTRAINEDERROR'
        }],
    ['devicesSupportError', {
            code: 600002,
            msg: 'DEVICES_NOT_SUPPORTED'
        }],
    ['constrainChangeFailed', {
            code: 600003,
            msg: 'STREAM_NOT_EXIST'
        }],
    ['nullEdgeList', {
            code: 400000,
            msg: 'EDGE_LIST_NULL'
        }]
]);


/***/ }),

/***/ "./src/web/OctopusRTC-Core.ts":
/*!************************************!*\
  !*** ./src/web/OctopusRTC-Core.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OctopusClientTest = void 0;
var MediaDeviceController_1 = __importDefault(__webpack_require__(/*! ./media/MediaDeviceController */ "./src/web/media/MediaDeviceController.ts"));
var Index_1 = __importDefault(__webpack_require__(/*! ./signal/Index */ "./src/web/signal/Index.ts"));
var defaultMediaConfig_1 = __importDefault(__webpack_require__(/*! ./config/defaultMediaConfig */ "./src/web/config/defaultMediaConfig.ts"));
var logger_1 = __webpack_require__(/*! ./log/logger */ "./src/web/log/logger.ts");
var eventemitter3_1 = __importDefault(__webpack_require__(/*! eventemitter3 */ "./node_modules/eventemitter3/umd/eventemitter3.min.js"));
var Device_1 = __webpack_require__(/*! ./device/Device */ "./src/web/device/Device.ts");
var errorCode_1 = __webpack_require__(/*! ../common/errorCode */ "./src/common/errorCode.ts");
var serviceAPI_1 = __webpack_require__(/*! ./service/serviceAPI */ "./src/web/service/serviceAPI.ts");
var Statistics_1 = __webpack_require__(/*! ./device/handlers/stats/Statistics */ "./src/web/device/handlers/stats/Statistics.ts");
var OctopusClientTest = /** @class */ (function (_super) {
    __extends(OctopusClientTest, _super);
    function OctopusClientTest(options) {
        var _this = _super.call(this) || this;
        _this._roomId = '';
        _this._role = 1;
        _this._appId = '';
        _this._userId = "";
        _this._signal = null;
        _this._media = null;
        _this._logger = null;
        _this._mapStreamIdInfo = new Map();
        _this._audioCustomBitrate = 0;
        _this._videoCustomBitrate = 0;
        _this._customFramerate = 0;
        _this._env = 'prod';
        _this._projectName = 'liveme';
        _this._customEdgeUrl = '';
        _this._reportHandle = 0;
        _this._mapStreamIdhandler = new Map();
        _this._pullStreamList = new Map();
        _this.reconnectionFun = function (result) {
            var mediaStream = _this._mapStreamIdInfo.get(result.streamId);
            var currentHandler = _this._mapStreamIdhandler.get(result.streamId);
            if (!mediaStream || !currentHandler) {
                throw new Error('streamId is not exist.');
            }
            currentHandler.destroy();
            _this._mapStreamIdhandler.delete(result.streamId);
            clearTimeout(_this._reportHandle);
            if (result.userId == _this._userId) {
                _this.startPublishingStream(result.streamId, mediaStream.mediastream);
            }
            else {
                _this.startPlayingStream(result.streamId);
            }
        };
        _this._appId = options.appId;
        _this._userId = options.userId;
        if (options !== void 0) {
            if (options.customEdgeUrl !== void 0) {
                _this._customEdgeUrl = options.customEdgeUrl;
            }
            if (options.env !== void 0) {
                _this._env = options.env;
            }
            if (options.projectName !== void 0) {
                _this._projectName = options.projectName;
            }
        }
        _this._logger = logger_1.logger.collect;
        return _this;
    }
    OctopusClientTest.prototype.login = function (appPackageName, roomId, role, auth, expire) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this._signal = new Index_1.default({
                            appPackageName: appPackageName,
                            env: _this._env,
                            projectName: _this._projectName,
                            roomId: roomId,
                            appId: _this._appId,
                            userId: _this._userId,
                            customEdgeUrl: _this._customEdgeUrl
                        });
                        _this.getSignalState();
                        _this._signal.init({
                            auth: auth,
                            expire: expire,
                            role: role
                        });
                        _this._roomId = roomId;
                        _this._role = role;
                        _this._signal.on('@getjoinsucessresult', function (result) {
                            if (result.code == 200) {
                                resolve(result.msg);
                            }
                            else {
                                reject(result);
                            }
                        });
                    })];
            });
        });
    };
    OctopusClientTest.prototype.getSignalState = function () {
        var _this = this;
        if (!this._signal) {
            throw new Error('signal is not a instance.');
        }
        ;
        this._signal.on('@kickout', function (result) {
            _this.emit('@getkickout', result);
        });
        this._signal.on('@disconnect', function (result) {
            _this.emit('@getdisconnect', result);
        });
        this._signal.on('@streamupdate', function (result) {
            _this._logger.debug('streamupdate::::', result);
            _this.emit('@getstreamupdate', result);
        });
    };
    OctopusClientTest.prototype.logout = function () {
        if (this._signal) {
            clearTimeout(this._reportHandle);
            this.removeAllListeners();
            this._signal.logout();
        }
        else {
            return;
        }
    };
    OctopusClientTest.prototype.createStream = function (source) {
        return __awaiter(this, void 0, void 0, function () {
            var paramSource, handleConstraints, cameraParams, videoQualityConfig, screenParams, screenConstraints, screenQualityConfig;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        paramSource = source ? source : {};
                        handleConstraints = {
                            audio: true,
                            video: true
                        };
                        if (!this._media) {
                            this._media = new MediaDeviceController_1.default({
                                userId: this._userId
                            });
                        }
                        if (!paramSource.camera) return [3 /*break*/, 2];
                        cameraParams = paramSource.camera;
                        if (Object.keys(cameraParams).indexOf('audio') != -1) {
                            if (typeof cameraParams.audio == 'boolean') {
                                handleConstraints.audio = cameraParams.audio;
                                if (cameraParams.audio) {
                                    handleConstraints.audio = {};
                                    if (cameraParams.audioInput) {
                                        handleConstraints.audio.deviceId = cameraParams.audioInput;
                                    }
                                    if (cameraParams.AGC) {
                                        handleConstraints.audio.autoGainControl = cameraParams.AGC;
                                    }
                                    ;
                                    if (cameraParams.AEC) {
                                        handleConstraints.audio.echoCancellation = cameraParams.AEC;
                                    }
                                    if (cameraParams.ANS) {
                                        handleConstraints.audio.noiseSuppression = cameraParams.ANS;
                                    }
                                    if (cameraParams.sampleRate) {
                                        handleConstraints.audio.sampleRate = cameraParams.sampleRate;
                                    }
                                    if (cameraParams.channelCount) {
                                        handleConstraints.audio.channelCount = cameraParams.channelCount;
                                    }
                                    if (cameraParams.audioBitrate) {
                                        this._audioCustomBitrate = cameraParams.audioBitrate;
                                    }
                                    if (Object.keys(handleConstraints.audio).length === 0) {
                                        handleConstraints.audio = true;
                                    }
                                }
                            }
                            else {
                                throw new TypeError('audio must be boolean');
                            }
                        }
                        else {
                            handleConstraints.audio = true;
                        }
                        if (Object.keys(cameraParams).indexOf('video') != -1) {
                            if (typeof cameraParams.video == 'boolean') {
                                handleConstraints.video = cameraParams.video;
                                if (cameraParams.video) {
                                    handleConstraints.video = {};
                                    if (cameraParams.videoInput) {
                                        handleConstraints.video.deviceId = cameraParams.videoInput;
                                    }
                                    if (cameraParams.facingMode) {
                                        handleConstraints.video.facingMode = cameraParams.facingMode;
                                    }
                                    if (cameraParams.videoQuality) {
                                        if (cameraParams.videoQuality < 4) {
                                            videoQualityConfig = defaultMediaConfig_1.default.camera.videoQuality[cameraParams.videoQuality - 1];
                                            this._videoCustomBitrate = videoQualityConfig.bitRate;
                                            handleConstraints.video.width = videoQualityConfig.width;
                                            handleConstraints.video.height = videoQualityConfig.height;
                                            handleConstraints.video.frameRate = videoQualityConfig.frameRate;
                                        }
                                        else {
                                            if (cameraParams.width) {
                                                handleConstraints.video.width = cameraParams.width;
                                            }
                                            if (cameraParams.height) {
                                                handleConstraints.video.height = cameraParams.height;
                                            }
                                            if (cameraParams.frameRate) {
                                                handleConstraints.video.frameRate = cameraParams.frameRate;
                                            }
                                            if (cameraParams.bitrate) {
                                                this._videoCustomBitrate = cameraParams.bitrate;
                                            }
                                        }
                                        if (typeof handleConstraints.video.frameRate === 'number') {
                                            this._customFramerate = handleConstraints.video.frameRate;
                                        }
                                    }
                                    if (Object.keys(handleConstraints.video).length === 0) {
                                        handleConstraints.video = true;
                                    }
                                }
                            }
                            else {
                                throw new TypeError('video must be boolean');
                            }
                        }
                        else {
                            handleConstraints.video = true;
                        }
                        return [4 /*yield*/, this._media.getLocalMediaStream('camera', handleConstraints)];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        if (!paramSource.screen) return [3 /*break*/, 4];
                        screenParams = paramSource.screen;
                        screenConstraints = {
                            audio: false,
                            video: true
                        };
                        if (screenParams.audio) {
                            if (typeof screenParams.audio == 'boolean') {
                                screenConstraints.audio = screenParams.audio;
                            }
                            else {
                                throw new TypeError('audio must be boolean');
                            }
                        }
                        if (screenParams.videoQuality) {
                            screenConstraints.video = {};
                            if (screenParams.videoQuality < 4) {
                                screenQualityConfig = defaultMediaConfig_1.default.screen.videoQuality[screenParams.videoQuality - 1];
                                this._videoCustomBitrate = screenQualityConfig.bitRate;
                                screenConstraints.video.frameRate = screenQualityConfig.frameRate;
                            }
                            else {
                                if (screenParams.frameRate) {
                                    screenConstraints.video.frameRate = screenParams.frameRate;
                                }
                                if (screenParams.bitrate) {
                                    this._videoCustomBitrate = screenParams.bitrate;
                                }
                            }
                            if (typeof screenConstraints.video.frameRate === 'number') {
                                this._customFramerate = screenConstraints.video.frameRate;
                            }
                        }
                        return [4 /*yield*/, this._media.getLocalMediaStream('display', screenConstraints)];
                    case 3: return [2 /*return*/, _a.sent()];
                    case 4:
                        if (!paramSource.custom) return [3 /*break*/, 5];
                        return [2 /*return*/, paramSource.custom.source];
                    case 5: return [4 /*yield*/, this._media.getLocalMediaStream('camera', handleConstraints)];
                    case 6: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    OctopusClientTest.prototype.destroyStream = function (mediastream) {
        if (!this._media) {
            throw new Error('media is not a instance.');
        }
        this._media.destroyLocalMediaStream(mediastream);
    };
    OctopusClientTest.prototype.getMediaStreamTrackConstrains = function (mediastream) {
        var e_1, _a;
        try {
            for (var _b = __values(mediastream.getTracks()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var track = _c.value;
                if (track.kind == 'video') {
                    try {
                        var videoConstrains = track.getSettings();
                        // 神策上报
                        serviceAPI_1.uploadSensorsStats({
                            app_id: this._appId,
                            capture_height: videoConstrains.height,
                            capture_width: videoConstrains.width,
                            connect_state: -1,
                            edge_url: "",
                            encode_height: videoConstrains.height,
                            encode_width: videoConstrains.width,
                            event_type: 3,
                            fps: videoConstrains.frameRate,
                            is_host: this._role == 1 ? 1 : 0,
                            join_room_cost: 0,
                            log_type: "liveme_video_rtc_room_event",
                            min_bitrate: this._videoCustomBitrate,
                            push_bitrate: this._videoCustomBitrate,
                            room_id: this._roomId,
                            self_user_id: this._userId,
                        });
                    }
                    catch (e) {
                        this._logger.debug('brower can not support getSettings');
                    }
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    OctopusClientTest.prototype.startPublishingStream = function (streamId, mediastream, extraInfo, publishOption) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                // 上报神策
                serviceAPI_1.uploadSensorsStats({
                    app_id: this._appId,
                    event_type: 4,
                    log_type: "liveme_video_rtc_statistics",
                    room_id: this._roomId,
                    self_user_id: this._userId,
                    user_id: this._userId
                });
                // 上报神策 音视频参数
                this.getMediaStreamTrackConstrains(mediastream);
                if (!this._media) {
                    this._media = new MediaDeviceController_1.default({
                        userId: this._userId
                    });
                }
                // this._media.saveCurrentStream(streamId, mediastream);
                this._mapStreamIdInfo.set(streamId, {
                    mediastream: mediastream
                });
                this.transport(streamId, 'send');
                // 获取推流状态
                this.getStreamStateUpdate(streamId).then(function (result) {
                    // 上报神策
                    serviceAPI_1.uploadSensorsStats({
                        app_id: _this._appId,
                        event_type: 5,
                        isConnected: result.code,
                        log_type: "liveme_video_rtc_statistics",
                        room_id: _this._roomId,
                        self_user_id: _this._userId,
                        user_id: _this._userId
                    });
                    if (result.streamId == streamId) {
                        _this.emit('@getpublishstate', result);
                    }
                }, function (e) {
                    throw new Error(e);
                });
                return [2 /*return*/];
            });
        });
    };
    OctopusClientTest.prototype.startPlayingStream = function (streamId, audioOutput, playOption) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, _c, currentPlayInfo, currentPlayStream, _d, _e, item, _f, _g, cell, resultStreamInfo;
            var e_2, _h, e_3, _j;
            var _this = this;
            return __generator(this, function (_k) {
                switch (_k.label) {
                    case 0:
                        // 上报神策
                        serviceAPI_1.uploadSensorsStats({
                            app_id: this._appId,
                            event_type: 6,
                            log_type: "liveme_video_rtc_statistics",
                            room_id: this._roomId,
                            self_user_id: this._userId,
                            user_id: streamId
                        });
                        // NOTE: Stuff to play remote audios due to browsers' new autoplay policy.
                        // Just get access to the mic and DO NOT close the mic track for a while.
                        // Super hack!
                        // {
                        //     const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
                        //     const audioTrack = stream.getAudioTracks()[0];
                        //     audioTrack.enabled = false;
                        //     setTimeout(() => audioTrack.stop(), 120000);
                        // }
                        this.transport(streamId, 'recv');
                        _b = (_a = this._pullStreamList).set;
                        _c = [streamId];
                        return [4 /*yield*/, this._mapStreamIdhandler.get(streamId).getPlayStream()];
                    case 1:
                        _b.apply(_a, _c.concat([_k.sent()]));
                        currentPlayInfo = this._mapStreamIdInfo.get(streamId);
                        if (currentPlayInfo) {
                            // 上报神策
                            serviceAPI_1.uploadSensorsStats({
                                app_id: this._appId,
                                event_type: 7,
                                isConnected: 3,
                                log_type: "liveme_video_rtc_statistics",
                                room_id: this._roomId,
                                self_user_id: this._userId,
                                user_id: streamId
                            });
                            currentPlayStream = currentPlayInfo.mediastream;
                            try {
                                for (_d = __values(currentPlayStream.getTracks()), _e = _d.next(); !_e.done; _e = _d.next()) {
                                    item = _e.value;
                                    item.stop();
                                    currentPlayStream.removeTrack(item);
                                }
                            }
                            catch (e_2_1) { e_2 = { error: e_2_1 }; }
                            finally {
                                try {
                                    if (_e && !_e.done && (_h = _d.return)) _h.call(_d);
                                }
                                finally { if (e_2) throw e_2.error; }
                            }
                            try {
                                for (_f = __values(this._pullStreamList.get(streamId).getTracks()), _g = _f.next(); !_g.done; _g = _f.next()) {
                                    cell = _g.value;
                                    currentPlayStream.addTrack(cell);
                                }
                            }
                            catch (e_3_1) { e_3 = { error: e_3_1 }; }
                            finally {
                                try {
                                    if (_g && !_g.done && (_j = _f.return)) _j.call(_f);
                                }
                                finally { if (e_3) throw e_3.error; }
                            }
                            this.emit('@getplaystate', {
                                code: 11,
                                state: 'REPLAYING',
                                streamId: streamId
                            });
                        }
                        else {
                            this._mapStreamIdInfo.set(streamId, {
                                mediastream: this._pullStreamList.get(streamId)
                            });
                            // 获取拉流状态
                            this.getStreamStateUpdate(streamId).then(function (result) {
                                // 上报神策
                                serviceAPI_1.uploadSensorsStats({
                                    app_id: _this._appId,
                                    event_type: 7,
                                    isConnected: result.code,
                                    log_type: "liveme_video_rtc_statistics",
                                    room_id: _this._roomId,
                                    self_user_id: _this._userId,
                                    user_id: streamId
                                });
                                _this.emit('@getplaystate', result);
                            }, function (e) {
                                throw new Error(e);
                            });
                        }
                        resultStreamInfo = this._mapStreamIdInfo.get(streamId);
                        if (!resultStreamInfo) {
                            throw new Error('streamId is not exist.');
                        }
                        return [2 /*return*/, resultStreamInfo.mediastream];
                }
            });
        });
    };
    OctopusClientTest.prototype.transport = function (streamId, direction) {
        return __awaiter(this, void 0, void 0, function () {
            var options, streamInfo, mediastream, localOfferSdp, getCandidateCallback;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this._signal) {
                            throw new Error('signal is not a instance.');
                        }
                        this._mapStreamIdhandler.set(streamId, new Device_1.Device());
                        this._mapStreamIdhandler.get(streamId).load({
                            streamId: streamId,
                            direction: direction
                        });
                        if (direction == 'send' && (this._videoCustomBitrate || this._audioCustomBitrate)) {
                            this._mapStreamIdhandler.get(streamId).setUserCustomParams({
                                videoCustomBitrate: this._videoCustomBitrate,
                                audioCustomBitrate: this._audioCustomBitrate,
                                customFramerate: this._customFramerate
                            });
                        }
                        streamInfo = this._mapStreamIdInfo.get(streamId);
                        if (streamInfo) {
                            mediastream = streamInfo.mediastream;
                            options = { mediastream: mediastream };
                        }
                        return [4 /*yield*/, this._mapStreamIdhandler.get(streamId).getLocalOfferSdp(options)];
                    case 1:
                        localOfferSdp = (_a.sent()).localOfferSdp;
                        this._signal.sendLocalOfferSdp({
                            sdp: localOfferSdp,
                            pullStreamId: streamId,
                            pullStreamRoomId: this._roomId // 暂时没有多房间
                        });
                        this._signal.getCandidateArray(streamId);
                        getCandidateCallback = function (candidateResult) { return __awaiter(_this, void 0, void 0, function () {
                            var getAnswerSdpResult, remoteAnswerSdp, peerId;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (!this._signal) {
                                            throw new Error('signal not a instance.');
                                        }
                                        return [4 /*yield*/, this._signal.receiveAnswerSdp(streamId)];
                                    case 1:
                                        getAnswerSdpResult = _a.sent();
                                        this._logger.report('get answersdp', getAnswerSdpResult);
                                        if ('remoteAnswerSdp' in getAnswerSdpResult) {
                                            remoteAnswerSdp = getAnswerSdpResult.remoteAnswerSdp, peerId = getAnswerSdpResult.peerId;
                                            this._mapStreamIdhandler.get(streamId).setRemoteAnswerSdp({ remoteAnswerSdp: remoteAnswerSdp });
                                        }
                                        this._logger.report('get candidateResult', candidateResult);
                                        this._mapStreamIdhandler.get(streamId).setIceCandidate(candidateResult);
                                        return [2 /*return*/];
                                }
                            });
                        }); };
                        this._signal.on("@getcandidate" + streamId, function (candidateResult) {
                            getCandidateCallback(candidateResult);
                            if (!_this._signal) {
                                throw new Error('signal not a instance.');
                            }
                            _this._signal.off("@getcandidate" + streamId);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    OctopusClientTest.prototype.getStreamStateUpdate = function (streamId) {
        return __awaiter(this, void 0, void 0, function () {
            var currentHandlerDevices, result, e_4;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this._signal) {
                            throw new Error('signal not a instance.');
                        }
                        currentHandlerDevices = this._mapStreamIdhandler.get(streamId);
                        if (!currentHandlerDevices) {
                            throw new Error('Device handler not load.');
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        this._signal.off('@reconnection', this.reconnectionFun);
                        return [4 /*yield*/, currentHandlerDevices.getConnectionStateUpdate()];
                    case 2:
                        result = _a.sent();
                        if (result.code == 1) {
                            // 上报数据
                            if (this._reportHandle == 0) {
                                // 取值过早会没有处理，做延迟1s处理
                                setTimeout(function () {
                                    _this.uploadRealtimeStreamData();
                                }, 1000);
                            }
                            // 断网重连
                            this.reconnectionListeners();
                        }
                        return [2 /*return*/, result];
                    case 3:
                        e_4 = _a.sent();
                        throw new Error(e_4);
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    OctopusClientTest.prototype.stopPublishingStream = function (streamId) {
        var currentHandlerDevices = this._mapStreamIdhandler.get(streamId);
        if (!currentHandlerDevices) {
            throw new Error('Device handler not load.');
        }
        currentHandlerDevices.stopTransceiver();
        currentHandlerDevices.destroy();
        this._mapStreamIdhandler.delete(streamId);
        if (!this._media) {
            throw new Error('media is not a instance');
        }
        // this._media.deleteCurrentStream(streamId);
        if (!this._signal) {
            throw new Error('signal not a instance.');
        }
        this._signal.stopPush(streamId);
        this._logger && this._logger.info('stop publish stream success.');
    };
    OctopusClientTest.prototype.stopPlayingStream = function (streamId) {
        var currentDevices = this._mapStreamIdhandler.get(streamId);
        if (!currentDevices) {
            throw new Error('Device handler not load.');
        }
        currentDevices.stopTransceiver();
        currentDevices.destroy();
        // clearTimeout(this._reportHandle);
        this._mapStreamIdhandler.delete(streamId);
        if (!this._signal) {
            throw new Error('signal is not a instance.');
        }
        this._signal.stopPlay(streamId);
        this._logger && this._logger.info('stop play stream success.');
    };
    OctopusClientTest.prototype.updateMixStream = function (mixStreamConfig, successCallback, failedCallback) {
        if (!this._signal) {
            return;
        }
        this._signal.updateMixStream(mixStreamConfig);
    };
    OctopusClientTest.prototype.muteSwitch = function (streamId, mute) {
        var currentStreamInfo = this._mapStreamIdInfo.get(streamId);
        if (currentStreamInfo) {
            var currentStream = currentStreamInfo.mediastream;
            if (mute) {
                currentStream.getAudioTracks()[0].enabled = false;
            }
            else {
                currentStream.getAudioTracks()[0].enabled = true;
            }
        }
        else {
            throw new Error('streamId is not exist.');
        }
    };
    OctopusClientTest.prototype.cameraSwitch = function (streamId, state) {
        var currentStreamInfo = this._mapStreamIdInfo.get(streamId);
        if (currentStreamInfo) {
            var currentStream = currentStreamInfo.mediastream;
            if (state == 'open') {
                currentStream.getVideoTracks()[0].enabled = true;
                ;
            }
            else {
                currentStream.getVideoTracks()[0].enabled = false;
            }
        }
        else {
            throw new Error('streamId is not exist.');
        }
    };
    OctopusClientTest.prototype.updateDevice = function (type, currentStream, deviceId, streamId) {
        return __awaiter(this, void 0, void 0, function () {
            var deviceConstraints, mediastream, mediastreamTrack, e_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (type == 'audio') {
                            deviceConstraints = {
                                audio: {
                                    deviceId: {
                                        exact: deviceId
                                    }
                                }
                            };
                        }
                        else if (type == 'video') {
                            deviceConstraints = {
                                video: {
                                    deviceId: {
                                        exact: deviceId
                                    }
                                }
                            };
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, navigator.mediaDevices.getUserMedia(deviceConstraints)];
                    case 2:
                        mediastream = _a.sent();
                        mediastreamTrack = type == 'video' ? mediastream.getVideoTracks()[0] : mediastream.getAudioTracks()[0];
                        return [2 /*return*/, this.replaceTrack(currentStream, mediastreamTrack, streamId)];
                    case 3:
                        e_5 = _a.sent();
                        return [2 /*return*/, errorCode_1.errCode.get('devicesSupportError')];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    OctopusClientTest.prototype.replaceTrack = function (currentStream, track, streamId) {
        if (streamId) {
            var currentHandler = this._mapStreamIdhandler.get(streamId);
            if (currentHandler) {
                currentHandler.replaceTrack(track);
            }
        }
        if (!this._media) {
            throw new Error('media is not a instance');
        }
        return this._media.replaceTrack(currentStream, track);
    };
    OctopusClientTest.prototype.changeConstraints = function (currentStream, type, constrains, streamId) {
        return __awaiter(this, void 0, void 0, function () {
            var e_6, videoConstrains, e_7;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!constrains.audioInput) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.updateDevice(type, currentStream, constrains.audioInput, streamId)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        if (!constrains.videoInput) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.updateDevice(type, currentStream, constrains.videoInput, streamId)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4:
                        if (!currentStream) {
                            return [2 /*return*/, __assign({}, errorCode_1.errCode.get('constrainChangeFailed'))];
                        }
                        if (!(type === 'audio')) return [3 /*break*/, 9];
                        _a.label = 5;
                    case 5:
                        _a.trys.push([5, 7, , 8]);
                        return [4 /*yield*/, currentStream.getAudioTracks()[0].applyConstraints(constrains)];
                    case 6:
                        _a.sent();
                        return [3 /*break*/, 8];
                    case 7:
                        e_6 = _a.sent();
                        throw new Error(e_6);
                    case 8: return [3 /*break*/, 13];
                    case 9:
                        if (!(type === 'video')) return [3 /*break*/, 13];
                        videoConstrains = constrains;
                        if (constrains.videoQuality) {
                            videoConstrains = __assign(__assign({}, constrains), defaultMediaConfig_1.default.camera.videoQuality[constrains.videoQuality - 1]);
                        }
                        _a.label = 10;
                    case 10:
                        _a.trys.push([10, 12, , 13]);
                        return [4 /*yield*/, currentStream.getVideoTracks()[0].applyConstraints(videoConstrains)];
                    case 11:
                        _a.sent();
                        return [3 /*break*/, 13];
                    case 12:
                        e_7 = _a.sent();
                        throw new Error(e_7);
                    case 13: return [2 /*return*/, __assign({}, errorCode_1.errCode.get('constrainChangeSuccess'))];
                }
            });
        });
    };
    OctopusClientTest.prototype.uploadRealtimeStreamData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result, _a, _b, _c, streamId, currentHandler, crystalBallData, e_8_1;
            var e_8, _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        result = {
                            crystalBall: [],
                            sensorData: []
                        };
                        _e.label = 1;
                    case 1:
                        _e.trys.push([1, 6, 7, 8]);
                        _a = __values(this._mapStreamIdhandler), _b = _a.next();
                        _e.label = 2;
                    case 2:
                        if (!!_b.done) return [3 /*break*/, 5];
                        _c = __read(_b.value, 2), streamId = _c[0], currentHandler = _c[1];
                        if (!currentHandler) {
                            throw new Error('streamId is not exist.');
                        }
                        return [4 /*yield*/, currentHandler.getStatsData(Statistics_1.type.Sensor)];
                    case 3:
                        crystalBallData = _e.sent();
                        if (crystalBallData.crystalBall != void 0) {
                            result.crystalBall.push(__assign({ room_id: this._roomId, user_id: streamId }, crystalBallData.crystalBall));
                            result.sensorData.push(__assign({ room_id: this._roomId, self_user_id: this._userId, stream_user_id: streamId }, crystalBallData.sensor));
                        }
                        _e.label = 4;
                    case 4:
                        _b = _a.next();
                        return [3 /*break*/, 2];
                    case 5: return [3 /*break*/, 8];
                    case 6:
                        e_8_1 = _e.sent();
                        e_8 = { error: e_8_1 };
                        return [3 /*break*/, 8];
                    case 7:
                        try {
                            if (_b && !_b.done && (_d = _a.return)) _d.call(_a);
                        }
                        finally { if (e_8) throw e_8.error; }
                        return [7 /*endfinally*/];
                    case 8:
                        if (!this._signal) {
                            throw new Error('signal not a instance.');
                        }
                        if (result.crystalBall.length !== 0) {
                            this._signal.uploadStatsData(result);
                            result = {
                                crystalBall: [],
                                sensorData: []
                            };
                        }
                        this._reportHandle = setTimeout(this.uploadRealtimeStreamData.bind(this), 5000);
                        return [2 /*return*/];
                }
            });
        });
    };
    OctopusClientTest.prototype.reconnectionListeners = function () {
        if (!this._signal) {
            throw new Error('signal not a instance.');
        }
        this._signal.on('@reconnection', this.reconnectionFun);
    };
    OctopusClientTest.prototype.getMediaStreamTrackStats = function (streamId, type) {
        return __awaiter(this, void 0, void 0, function () {
            var currentHandler;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        currentHandler = this._mapStreamIdhandler.get(streamId);
                        if (!currentHandler) {
                            throw new Error('streamId is not exist.');
                        }
                        return [4 /*yield*/, currentHandler.getStatsData(type)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return OctopusClientTest;
}(eventemitter3_1.default));
exports.OctopusClientTest = OctopusClientTest;
;


/***/ }),

/***/ "./src/web/config/defaultMediaConfig.ts":
/*!**********************************************!*\
  !*** ./src/web/config/defaultMediaConfig.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var __DEFAULT_MEDIA_CONFIG__ = {
    camera: {
        videoQuality: [
            {
                width: 320,
                height: 240,
                frameRate: 15,
                bitRate: 300
            },
            {
                width: 640,
                height: 480,
                frameRate: 15,
                bitRate: 800
            },
            {
                width: 1280,
                height: 720,
                frameRate: 20,
                bitRate: 1500
            }
        ]
    },
    screen: {
        videoQuality: [
            {
                frameRate: 20,
                bitRate: 800
            },
            {
                frameRate: 15,
                bitRate: 1500
            },
            {
                frameRate: 5,
                bitRate: 2000
            }
        ]
    },
    custom: {}
};
exports.default = __DEFAULT_MEDIA_CONFIG__;


/***/ }),

/***/ "./src/web/device/Device.ts":
/*!**********************************!*\
  !*** ./src/web/device/Device.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Device = exports.detectDevice = void 0;
var bowser = __importStar(__webpack_require__(/*! bowser */ "./node_modules/bowser/es5.js"));
var logger_1 = __webpack_require__(/*! ../log/logger */ "./src/web/log/logger.ts");
var eventemitter3_1 = __importDefault(__webpack_require__(/*! eventemitter3 */ "./node_modules/eventemitter3/umd/eventemitter3.min.js"));
var Chrome58_1 = __webpack_require__(/*! ./handlers/Chrome58 */ "./src/web/device/handlers/Chrome58.ts");
var Chrome68_1 = __webpack_require__(/*! ./handlers/Chrome68 */ "./src/web/device/handlers/Chrome68.ts");
var Chrome70_1 = __webpack_require__(/*! ./handlers/Chrome70 */ "./src/web/device/handlers/Chrome70.ts");
var Safari11_1 = __webpack_require__(/*! ./handlers/Safari11 */ "./src/web/device/handlers/Safari11.ts");
var Safari12_1 = __webpack_require__(/*! ./handlers/Safari12 */ "./src/web/device/handlers/Safari12.ts");
var Firefox60_1 = __webpack_require__(/*! ./handlers/Firefox60 */ "./src/web/device/handlers/Firefox60.ts");
var Edge80_1 = __webpack_require__(/*! ./handlers/Edge80 */ "./src/web/device/handlers/Edge80.ts");
var Opera56_1 = __webpack_require__(/*! ./handlers/Opera56 */ "./src/web/device/handlers/Opera56.ts");
var Opera52_1 = __webpack_require__(/*! ./handlers/Opera52 */ "./src/web/device/handlers/Opera52.ts");
var Opera45_1 = __webpack_require__(/*! ./handlers/Opera45 */ "./src/web/device/handlers/Opera45.ts");
var QQ_1 = __webpack_require__(/*! ./handlers/QQ */ "./src/web/device/handlers/QQ.ts");
var WeChat70_1 = __webpack_require__(/*! ./handlers/WeChat70 */ "./src/web/device/handlers/WeChat70.ts");
function detectDevice() {
    // Browser.
    if (typeof navigator === 'object' && typeof navigator.userAgent === 'string') {
        var ua = navigator.userAgent;
        var browser = bowser.getParser(ua);
        var engine = browser.getEngine();
        // Chrome and Chromium.
        if (browser.satisfies({ chrome: '>=70', chromium: '>=70' })) {
            return 'Chrome70';
        }
        else if (browser.satisfies({ chrome: '>=68', chromium: '>=68' })) {
            return 'Chrome68';
        }
        else if (browser.satisfies({ chrome: '>=58', chromium: '>=58' })) {
            return 'Chrome58';
        }
        // Firefox.
        else if (browser.satisfies({ firefox: '>=60' })) {
            return 'Firefox60';
        }
        // Safari with Unified-Plan support enabled.
        else if (browser.satisfies({ safari: '>=12.0' }) &&
            typeof RTCRtpTransceiver !== 'undefined') {
            return 'Safari12';
        }
        // Safari with Plab-B support.
        else if (browser.satisfies({ safari: '>=11' })) {
            return 'Safari11';
        }
        // Old Edge with ORTC support.
        else if (browser.satisfies({ 'microsoft edge': '>=11' })) {
            return 'Edge80';
        }
        //weChat
        else if (browser.satisfies({ WeChat: '>=7.0' })) {
            return 'WeChat70';
        }
        else if (browser.satisfies({ 'Opera': '>=59' })) {
            return 'Chrome70';
        }
        else if (browser.satisfies({ 'Opera': '>=56' })) {
            return 'Opera56';
        }
        else if (browser.satisfies({ 'Opera': '>=52' })) {
            return 'Opera52';
        }
        // Old opera support.
        else if (browser.satisfies({ 'Opera': '>=45' })) {
            return 'Opera45';
        }
        else if (browser.satisfies({ 'QQ Browser': '>=10.5' })) {
            return 'QQ';
        }
        // Best effort for Chromium based browsers.
        else if (engine.name && engine.name.toLowerCase() === 'blink') {
            var match = ua.match(/(?:(?:Chrome|Chromium))[ /](\w+)/i);
            if (match) {
                var version = Number(match[1]);
                if (version >= 70) {
                    return 'Chrome70';
                }
                else if (version >= 68) {
                    return 'Chrome68';
                }
                else {
                    return 'Chrome58';
                }
            }
            else {
                return 'Chrome70';
            }
        }
        // Unsupported browser.
        else {
            console.warn('this._detectDevice() | browser not supported [name:%s, version:%s]', browser.getBrowserName(), browser.getBrowserVersion());
            return undefined;
        }
    }
    // Unknown device.
    else {
        console.warn('this._detectDevice() | unknown device');
        return undefined;
    }
}
exports.detectDevice = detectDevice;
var Device = /** @class */ (function (_super) {
    __extends(Device, _super);
    function Device(_a) {
        var _b = _a === void 0 ? {} : _a, handlerName = _b.handlerName, handlerFactory = _b.handlerFactory, Handler = _b.Handler;
        var _this = _super.call(this) || this;
        _this._direction = 'send';
        _this._streamId = '';
        _this._logger = null;
        _this._logger = logger_1.logger.collect;
        // Handle deprecated option.
        if (Handler) {
            _this._logger.warn('constructor() | Handler option is DEPRECATED, use handlerName or handlerFactory instead');
            if (typeof Handler === 'string')
                handlerName = Handler;
            else
                throw new TypeError('non string Handler option no longer supported, use handlerFactory instead');
        }
        if (handlerName && handlerFactory) {
            throw new TypeError('just one of handlerName or handlerInterface can be given');
        }
        if (handlerFactory) {
            _this._handlerFactory = handlerFactory;
        }
        else {
            if (handlerName) {
                _this._logger.debug('constructor() | handler given: %s', handlerName);
            }
            else {
                handlerName = detectDevice();
                if (handlerName)
                    _this._logger.debug('constructor() | detected handler: %s', handlerName);
                else
                    throw new Error('device not supported');
            }
            switch (handlerName) {
                case 'Chrome70':
                    _this._handlerFactory = Chrome70_1.Chrome70.createFactory();
                    break;
                case 'Chrome68':
                    _this._handlerFactory = Chrome68_1.Chrome68.createFactory();
                    break;
                case 'Chrome58':
                    _this._handlerFactory = Chrome58_1.Chrome58.createFactory();
                    break;
                case 'Firefox60':
                    _this._handlerFactory = Firefox60_1.Firefox60.createFactory();
                    break;
                case 'Safari12':
                    _this._handlerFactory = Safari12_1.Safari12.createFactory();
                    break;
                case 'Safari11':
                    _this._handlerFactory = Safari11_1.Safari11.createFactory();
                    break;
                case 'Edge80':
                    _this._handlerFactory = Edge80_1.Edge80.createFactory();
                    break;
                case 'Opera56':
                    _this._handlerFactory = Opera56_1.Opera56.createFactory();
                    break;
                case 'Opera52':
                    _this._handlerFactory = Opera52_1.Opera52.createFactory();
                    break;
                case 'Opera45':
                    _this._handlerFactory = Opera45_1.Opera45.createFactory();
                    break;
                case 'QQ':
                    _this._handlerFactory = QQ_1.QQ.createFactory();
                    break;
                case 'WeChat70':
                    _this._handlerFactory = WeChat70_1.WeChat70.createFactory();
                    break;
                default:
                    throw new TypeError("unknown handlerName \"" + handlerName + "\"");
            }
        }
        // Create a temporal handler to get its name.
        _this._handler = _this._handlerFactory();
        _this._handlerName = _this._handler.name;
        _this._handler.close();
        return _this;
    }
    Object.defineProperty(Device.prototype, "handlerName", {
        /**
         * The RTC handler name.
         */
        get: function () {
            return this._handlerName;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Initialize the Device.
     */
    Device.prototype.load = function (_a) {
        var streamId = _a.streamId, direction = _a.direction, iceServers = _a.iceServers, iceTransportPolicy = _a.iceTransportPolicy;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                try {
                    this._logger.report('device init', { streamId: streamId, direction: direction });
                    this._streamId = streamId;
                    this._direction = direction;
                    this._handler.run({
                        streamId: streamId,
                        direction: direction
                    });
                }
                catch (error) {
                    if (this._handler) {
                        this._handler.close();
                    }
                    throw error;
                }
                return [2 /*return*/];
            });
        });
    };
    Device.prototype.destroy = function () {
        this._handler.close();
    };
    Device.prototype.getLocalOfferSdp = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var localOfferSdp;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this._logger.report('getLocalOfferSdp params', params);
                        this._handler.setLocalOfferSdp(params);
                        return [4 /*yield*/, this._handler.getLocalOfferSdp()];
                    case 1:
                        localOfferSdp = _a.sent();
                        return [2 /*return*/, localOfferSdp];
                }
            });
        });
    };
    Device.prototype.setRemoteAnswerSdp = function (_a) {
        var remoteAnswerSdp = _a.remoteAnswerSdp;
        return this._handler.setRemoteAnswerSdp({ remoteAnswerSdp: remoteAnswerSdp });
    };
    Device.prototype.setIceCandidate = function (candidate) {
        this._handler.setIceCandidate(candidate);
    };
    Device.prototype.stopTransceiver = function () {
        this._handler.stopTransceiver();
    };
    Device.prototype.getConnectionStateUpdate = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, state, code;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this._handler.getICEConnectionState()];
                    case 1:
                        _a = _b.sent(), state = _a.state, code = _a.code;
                        return [2 /*return*/, {
                                state: state,
                                code: code,
                                streamId: this._streamId
                            }];
                }
            });
        });
    };
    Device.prototype.getPlayStream = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._handler.getTrack()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Device.prototype.setUserCustomParams = function (customParams) {
        this._logger.info('setCustom params', customParams);
        this._handler.setCustomerValue(customParams);
    };
    Device.prototype.replaceTrack = function (track) {
        this._handler.replaceTrack(track);
    };
    Device.prototype.getStatsData = function (type) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._handler.transportStats(type)];
                    case 1: 
                    // return await this._handler.transportStats();
                    return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return Device;
}(eventemitter3_1.default));
exports.Device = Device;


/***/ }),

/***/ "./src/web/device/MediaDeviceInfoCategory.ts":
/*!***************************************************!*\
  !*** ./src/web/device/MediaDeviceInfoCategory.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
var MediaDeviceInfoCategory = /** @class */ (function () {
    function MediaDeviceInfoCategory(deviceInfos) {
        var e_1, _a;
        this._cameras = [];
        this._microphones = [];
        this._speakers = [];
        try {
            for (var deviceInfos_1 = __values(deviceInfos), deviceInfos_1_1 = deviceInfos_1.next(); !deviceInfos_1_1.done; deviceInfos_1_1 = deviceInfos_1.next()) {
                var deviceInfo = deviceInfos_1_1.value;
                this.append(deviceInfo);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (deviceInfos_1_1 && !deviceInfos_1_1.done && (_a = deviceInfos_1.return)) _a.call(deviceInfos_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    }
    Object.defineProperty(MediaDeviceInfoCategory.prototype, "cameras", {
        get: function () {
            return this._cameras;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MediaDeviceInfoCategory.prototype, "microphones", {
        get: function () {
            return this._microphones;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MediaDeviceInfoCategory.prototype, "speakers", {
        get: function () {
            return this._speakers;
        },
        enumerable: false,
        configurable: true
    });
    MediaDeviceInfoCategory.prototype.append = function (deviceInfo) {
        switch (deviceInfo.kind) {
            case "videoinput" /* CAMERA */:
                this._cameras.push(deviceInfo);
                break;
            case "audioinput" /* MICROPHONE */:
                this._microphones.push(deviceInfo);
                break;
            case "audiooutput" /* SPEAKER */:
                this._speakers.push(deviceInfo);
                break;
            default: break;
        }
    };
    return MediaDeviceInfoCategory;
}());
exports.default = MediaDeviceInfoCategory;


/***/ }),

/***/ "./src/web/device/handlers/Chrome58.ts":
/*!*********************************************!*\
  !*** ./src/web/device/handlers/Chrome58.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Chrome58 = void 0;
var Chrome68_1 = __webpack_require__(/*! ./Chrome68 */ "./src/web/device/handlers/Chrome68.ts");
var Chrome58 = /** @class */ (function (_super) {
    __extends(Chrome58, _super);
    function Chrome58() {
        return _super.call(this) || this;
    }
    // private _currentStream: MediaStream | null = null;
    Chrome58.createFactory = function () {
        return function () { return new Chrome58(); };
    };
    Object.defineProperty(Chrome58.prototype, "name", {
        get: function () {
            return 'Chrome58';
        },
        enumerable: false,
        configurable: true
    });
    Chrome58.prototype.run = function (_a) {
        var _this = this;
        var direction = _a.direction, iceServers = _a.iceServers, iceTransportPolicy = _a.iceTransportPolicy;
        this._direction = direction;
        this._pc = new RTCPeerConnection({
            iceServers: iceServers || [],
            iceTransportPolicy: iceTransportPolicy || 'all',
            bundlePolicy: 'max-bundle',
            rtcpMuxPolicy: 'require',
            sdpSemantics: 'unified-plan',
        });
        this._pc.onicecandidate = function (e) {
            _this._logger.debug('onicecandidate event:::', e);
        };
        this._pc.onicegatheringstatechange = function (e) {
            _this._logger.debug('onicegatheringstatechange:::', e);
        };
        this._pc.onsignalingstatechange = function (e) {
            _this._logger.debug('onsignalingstatechange:::', e);
        };
        this._pc.onconnectionstatechange = function (e) {
            _this._logger.debug('onconnectionstatechange:::', e);
        };
    };
    Chrome58.prototype.setLocalOfferSdp = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var mediastream, encodings;
            return __generator(this, function (_a) {
                if (this._direction === 'recv') {
                    this._pc.addStream(this._sendStream);
                }
                else if (this._direction === 'send') {
                    if (params === void 0) {
                        throw new Error('mediastream must be not exist.');
                    }
                    mediastream = params.mediastream, encodings = params.encodings;
                    if (mediastream === void 0) {
                        throw new Error('mediastream must be not exist.');
                    }
                    this._pc.addStream(mediastream);
                    this._currentStream = mediastream;
                }
                return [2 /*return*/];
            });
        });
    };
    // stopTransceiver() {
    // 	if (!this._currentStream) {
    // 		throw new Error('mediastream not found');
    // 	}
    // 	for (let item of this._currentStream.getTracks()) {
    // 		this._pc.removeTrack(item);
    // 		item.stop();
    // 	}
    // 	this.close();
    // }
    Chrome58.prototype.getTrack = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._pc.onaddstream = function (e) {
                if (_this._hasTrack) {
                    return;
                }
                _this._hasTrack = true;
                _this._logger.debug('ontrack', e);
                if (e.stream) {
                    if (_this._direction == 'recv') {
                        _this._currentStream = e.stream;
                    }
                    resolve(e.stream);
                }
            };
        });
    };
    return Chrome58;
}(Chrome68_1.Chrome68));
exports.Chrome58 = Chrome58;


/***/ }),

/***/ "./src/web/device/handlers/Chrome68.ts":
/*!*********************************************!*\
  !*** ./src/web/device/handlers/Chrome68.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Chrome68 = void 0;
var handler_1 = __webpack_require__(/*! ./handler */ "./src/web/device/handlers/handler.ts");
var Chrome68 = /** @class */ (function (_super) {
    __extends(Chrome68, _super);
    function Chrome68() {
        return _super.call(this) || this;
    }
    // private readonly _mapUserIdStream: Map<string, MediaStream> = new Map();
    Chrome68.createFactory = function () {
        return function () { return new Chrome68(); };
    };
    Object.defineProperty(Chrome68.prototype, "name", {
        get: function () {
            return 'Chrome68';
        },
        enumerable: false,
        configurable: true
    });
    Chrome68.prototype.setLocalOfferSdp = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var mediastream, encodings, _a, _b, track;
            var e_1, _c;
            return __generator(this, function (_d) {
                if (this._direction === 'send') {
                    if (params === void 0) {
                        throw new Error('mediastream must be not exist.');
                    }
                    mediastream = params.mediastream, encodings = params.encodings;
                    if (mediastream === void 0) {
                        throw new Error('mediastream must be not exist.');
                    }
                    try {
                        for (_a = __values(mediastream.getTracks()), _b = _a.next(); !_b.done; _b = _a.next()) {
                            track = _b.value;
                            this._pc.addTrack(track, this._sendStream);
                        }
                    }
                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                    finally {
                        try {
                            if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                        }
                        finally { if (e_1) throw e_1.error; }
                    }
                    this._currentStream = mediastream;
                }
                return [2 /*return*/];
            });
        });
    };
    // stopTransceiver() {
    // 	if (!this._currentStream) {
    // 		throw new Error('associated stream not found');
    // 	}
    // 	for (let item of this._currentStream.getTracks()) {
    // 		item.stop();
    // 	}
    // 	this.close();
    // }
    Chrome68.prototype.getLocalOfferSdp = function () {
        return __awaiter(this, void 0, void 0, function () {
            var createOfferOptions, offer, sdp, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        createOfferOptions = {
                            offerToReceiveAudio: false,
                            offerToReceiveVideo: false
                        };
                        if (this._direction === 'recv') {
                            createOfferOptions = {
                                offerToReceiveAudio: true,
                                offerToReceiveVideo: true
                            };
                        }
                        return [4 /*yield*/, this._pc.createOffer(createOfferOptions)];
                    case 1:
                        offer = _a.sent();
                        sdp = void 0;
                        if (this._videoCustomBitrate !== 0 || this._audioCustomBitrate !== 0) {
                            sdp = this.setSdpCustomBitrate(offer.sdp);
                        }
                        else {
                            sdp = offer.sdp;
                        }
                        // await this._pc.setLocalDescription(offer);
                        return [4 /*yield*/, this._pc.setLocalDescription({
                                type: 'offer',
                                sdp: sdp
                            })];
                    case 2:
                        // await this._pc.setLocalDescription(offer);
                        _a.sent();
                        return [2 /*return*/, {
                                localOfferSdp: offer.sdp
                            }];
                    case 3:
                        e_2 = _a.sent();
                        throw new Error('set local offer sdp error');
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return Chrome68;
}(handler_1.Handler));
exports.Chrome68 = Chrome68;


/***/ }),

/***/ "./src/web/device/handlers/Chrome70.ts":
/*!*********************************************!*\
  !*** ./src/web/device/handlers/Chrome70.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Chrome70 = void 0;
var handler_1 = __webpack_require__(/*! ./handler */ "./src/web/device/handlers/handler.ts");
var Chrome70 = /** @class */ (function (_super) {
    __extends(Chrome70, _super);
    function Chrome70() {
        return _super.call(this) || this;
    }
    Chrome70.createFactory = function () {
        return function () { return new Chrome70(); };
    };
    Object.defineProperty(Chrome70.prototype, "name", {
        get: function () {
            return 'Chrome70';
        },
        enumerable: false,
        configurable: true
    });
    return Chrome70;
}(handler_1.Handler));
exports.Chrome70 = Chrome70;


/***/ }),

/***/ "./src/web/device/handlers/Edge80.ts":
/*!*******************************************!*\
  !*** ./src/web/device/handlers/Edge80.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Edge80 = void 0;
var handler_1 = __webpack_require__(/*! ./handler */ "./src/web/device/handlers/handler.ts");
var Edge80 = /** @class */ (function (_super) {
    __extends(Edge80, _super);
    function Edge80() {
        return _super.call(this) || this;
    }
    Edge80.createFactory = function () {
        return function () { return new Edge80(); };
    };
    Object.defineProperty(Edge80.prototype, "name", {
        get: function () {
            return 'Edge80';
        },
        enumerable: false,
        configurable: true
    });
    return Edge80;
}(handler_1.Handler));
exports.Edge80 = Edge80;


/***/ }),

/***/ "./src/web/device/handlers/Firefox60.ts":
/*!**********************************************!*\
  !*** ./src/web/device/handlers/Firefox60.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Firefox60 = void 0;
var handler_1 = __webpack_require__(/*! ./handler */ "./src/web/device/handlers/handler.ts");
var Firefox60 = /** @class */ (function (_super) {
    __extends(Firefox60, _super);
    function Firefox60() {
        return _super.call(this) || this;
    }
    Firefox60.createFactory = function () {
        return function () { return new Firefox60(); };
    };
    Object.defineProperty(Firefox60.prototype, "name", {
        get: function () {
            return 'Firefox60';
        },
        enumerable: false,
        configurable: true
    });
    return Firefox60;
}(handler_1.Handler));
exports.Firefox60 = Firefox60;


/***/ }),

/***/ "./src/web/device/handlers/HandlerInterface.ts":
/*!*****************************************************!*\
  !*** ./src/web/device/handlers/HandlerInterface.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HandlerInterface = void 0;
var eventemitter3_1 = __importDefault(__webpack_require__(/*! eventemitter3 */ "./node_modules/eventemitter3/umd/eventemitter3.min.js"));
var HandlerInterface = /** @class */ (function (_super) {
    __extends(HandlerInterface, _super);
    function HandlerInterface() {
        return _super.call(this) || this;
    }
    return HandlerInterface;
}(eventemitter3_1.default));
exports.HandlerInterface = HandlerInterface;


/***/ }),

/***/ "./src/web/device/handlers/Opera45.ts":
/*!********************************************!*\
  !*** ./src/web/device/handlers/Opera45.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Opera45 = void 0;
var handler_1 = __webpack_require__(/*! ./handler */ "./src/web/device/handlers/handler.ts");
var Opera45 = /** @class */ (function (_super) {
    __extends(Opera45, _super);
    function Opera45() {
        return _super.call(this) || this;
    }
    // private _currentStream: MediaStream | null = null;
    Opera45.createFactory = function () {
        return function () { return new Opera45(); };
    };
    Object.defineProperty(Opera45.prototype, "name", {
        get: function () {
            return 'Opera45';
        },
        enumerable: false,
        configurable: true
    });
    Opera45.prototype.run = function (_a) {
        var _this = this;
        var direction = _a.direction, iceServers = _a.iceServers, iceTransportPolicy = _a.iceTransportPolicy;
        this._direction = direction;
        this._pc = new RTCPeerConnection({
            iceServers: iceServers || [],
            iceTransportPolicy: iceTransportPolicy || 'all',
            bundlePolicy: 'max-bundle',
            rtcpMuxPolicy: 'require',
            sdpSemantics: 'unified-plan',
        });
        this._pc.onicecandidate = function (e) {
            _this._logger.debug('onicecandidate event:::', e);
        };
        this._pc.onicegatheringstatechange = function (e) {
            _this._logger.debug('onicegatheringstatechange:::', e);
        };
        this._pc.onsignalingstatechange = function (e) {
            _this._logger.debug('onsignalingstatechange:::', e);
        };
        this._pc.onconnectionstatechange = function (e) {
            _this._logger.debug('onconnectionstatechange:::', e);
        };
    };
    Opera45.prototype.setLocalOfferSdp = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var mediastream, encodings;
            return __generator(this, function (_a) {
                if (this._direction === 'recv') {
                    this._pc.addStream(this._sendStream);
                }
                else if (this._direction === 'send') {
                    if (params === void 0) {
                        throw new Error('mediastream must be not exist.');
                    }
                    mediastream = params.mediastream, encodings = params.encodings;
                    if (mediastream === void 0) {
                        throw new Error('mediastream must be not exist.');
                    }
                    this._pc.addStream(mediastream);
                    this._currentStream = mediastream;
                }
                return [2 /*return*/];
            });
        });
    };
    // stopTransceiver() {
    // 	if (!this._currentStream) {
    // 		throw new Error('mediastream not found');
    // 	}
    // 	for (let item of this._currentStream.getTracks()) {
    // 		// this._pc.removeTrack(item);
    // 		item.stop();
    // 	}
    // 	this.close();
    // }
    Opera45.prototype.getLocalOfferSdp = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this._pc.onnegotiationneeded = function (e) { return __awaiter(_this, void 0, void 0, function () {
                            var createOfferOptions, offer, sdp, e_1;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (this._isNegotiating) {
                                            return [2 /*return*/];
                                        }
                                        this._isNegotiating = true;
                                        _a.label = 1;
                                    case 1:
                                        _a.trys.push([1, 4, , 5]);
                                        createOfferOptions = {
                                            offerToReceiveAudio: false,
                                            offerToReceiveVideo: false
                                        };
                                        if (this._direction === 'recv') {
                                            createOfferOptions = {
                                                offerToReceiveAudio: true,
                                                offerToReceiveVideo: true
                                            };
                                        }
                                        return [4 /*yield*/, this._pc.createOffer(createOfferOptions)];
                                    case 2:
                                        offer = _a.sent();
                                        sdp = void 0;
                                        if (this._videoCustomBitrate !== 0 || this._audioCustomBitrate !== 0) {
                                            sdp = this.setSdpCustomBitrate(offer.sdp);
                                        }
                                        else {
                                            sdp = offer.sdp;
                                        }
                                        // await this._pc.setLocalDescription(offer);
                                        return [4 /*yield*/, this._pc.setLocalDescription({
                                                type: 'offer',
                                                sdp: sdp
                                            })];
                                    case 3:
                                        // await this._pc.setLocalDescription(offer);
                                        _a.sent();
                                        resolve({
                                            localOfferSdp: offer.sdp
                                        });
                                        return [3 /*break*/, 5];
                                    case 4:
                                        e_1 = _a.sent();
                                        throw new Error('set local offer sdp error');
                                    case 5: return [2 /*return*/];
                                }
                            });
                        }); };
                    })];
            });
        });
    };
    Opera45.prototype.getTrack = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._pc.onaddstream = function (e) {
                if (_this._hasTrack) {
                    return;
                }
                _this._hasTrack = true;
                _this._logger.debug('ontrack:::', e);
                if (e.stream) {
                    if (_this._direction == 'recv') {
                        _this._currentStream = e.stream;
                    }
                    resolve(e.stream);
                }
            };
        });
    };
    return Opera45;
}(handler_1.Handler));
exports.Opera45 = Opera45;


/***/ }),

/***/ "./src/web/device/handlers/Opera52.ts":
/*!********************************************!*\
  !*** ./src/web/device/handlers/Opera52.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Opera52 = void 0;
var handler_1 = __webpack_require__(/*! ./handler */ "./src/web/device/handlers/handler.ts");
var Opera52 = /** @class */ (function (_super) {
    __extends(Opera52, _super);
    function Opera52() {
        return _super.call(this) || this;
    }
    Opera52.createFactory = function () {
        return function () { return new Opera52(); };
    };
    Object.defineProperty(Opera52.prototype, "name", {
        get: function () {
            return 'Opera52';
        },
        enumerable: false,
        configurable: true
    });
    Opera52.prototype.run = function (_a) {
        var _this = this;
        var direction = _a.direction, iceServers = _a.iceServers, iceTransportPolicy = _a.iceTransportPolicy;
        this._direction = direction;
        this._pc = new RTCPeerConnection({
            iceServers: iceServers || [],
            iceTransportPolicy: iceTransportPolicy || 'all',
            bundlePolicy: 'max-bundle',
            rtcpMuxPolicy: 'require',
            sdpSemantics: 'unified-plan',
        });
        this._pc.onicecandidate = function (e) {
            _this._logger.debug('onicecandidate event:::', e);
        };
        this._pc.onicegatheringstatechange = function (e) {
            _this._logger.debug('onicegatheringstatechange:::', e);
        };
        this._pc.onsignalingstatechange = function (e) {
            _this._logger.debug('onsignalingstatechange:::', e);
        };
        this._pc.onconnectionstatechange = function (e) {
            _this._logger.debug('onconnectionstatechange:::', e);
        };
        this._pc.onaddstream = function (e) {
            _this._logger.debug('ontrack:::', e);
        };
    };
    Opera52.prototype.setLocalOfferSdp = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var mediastream, encodings;
            return __generator(this, function (_a) {
                if (this._direction === 'recv') {
                    // this._pc.addStream(this._sendStream);
                    // this.sendLocalOfferSdp();
                }
                else if (this._direction === 'send') {
                    if (params === void 0) {
                        throw new Error('mediastream must be not exist.');
                    }
                    mediastream = params.mediastream, encodings = params.encodings;
                    if (mediastream === void 0) {
                        throw new Error('mediastream must be not exist.');
                    }
                    this._pc.addStream(mediastream);
                    this._currentStream = mediastream;
                }
                return [2 /*return*/];
            });
        });
    };
    Opera52.prototype.getLocalOfferSdp = function () {
        return __awaiter(this, void 0, void 0, function () {
            var createOfferOptions, offer, sdp, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        createOfferOptions = {
                            offerToReceiveAudio: false,
                            offerToReceiveVideo: false
                        };
                        if (this._direction === 'recv') {
                            createOfferOptions = {
                                offerToReceiveAudio: true,
                                offerToReceiveVideo: true
                            };
                        }
                        return [4 /*yield*/, this._pc.createOffer(createOfferOptions)];
                    case 1:
                        offer = _a.sent();
                        sdp = void 0;
                        if (this._videoCustomBitrate !== 0 || this._audioCustomBitrate !== 0) {
                            sdp = this.setSdpCustomBitrate(offer.sdp);
                        }
                        else {
                            sdp = offer.sdp;
                        }
                        return [4 /*yield*/, this._pc.setLocalDescription({
                                type: 'offer',
                                sdp: sdp
                            })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, {
                                localOfferSdp: offer.sdp
                            }];
                    case 3:
                        e_1 = _a.sent();
                        throw new Error('set local offer sdp error');
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ;
    return Opera52;
}(handler_1.Handler));
exports.Opera52 = Opera52;


/***/ }),

/***/ "./src/web/device/handlers/Opera56.ts":
/*!********************************************!*\
  !*** ./src/web/device/handlers/Opera56.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Opera56 = void 0;
var handler_1 = __webpack_require__(/*! ./handler */ "./src/web/device/handlers/handler.ts");
var Opera56 = /** @class */ (function (_super) {
    __extends(Opera56, _super);
    function Opera56() {
        return _super.call(this) || this;
    }
    // private _currentStream: MediaStream | null = null;
    Opera56.createFactory = function () {
        return function () { return new Opera56(); };
    };
    Object.defineProperty(Opera56.prototype, "name", {
        get: function () {
            return 'Opera56';
        },
        enumerable: false,
        configurable: true
    });
    Opera56.prototype.run = function (_a) {
        var _this = this;
        var direction = _a.direction, iceServers = _a.iceServers, iceTransportPolicy = _a.iceTransportPolicy;
        this._direction = direction;
        this._pc = new RTCPeerConnection({
            iceServers: iceServers || [],
            iceTransportPolicy: iceTransportPolicy || 'all',
            bundlePolicy: 'max-bundle',
            rtcpMuxPolicy: 'require',
            sdpSemantics: 'unified-plan',
        });
        this._pc.onicecandidate = function (e) {
            _this._logger.debug('onicecandidate event:::', e);
        };
        this._pc.onicegatheringstatechange = function (e) {
            _this._logger.debug('onicegatheringstatechange:::', e);
        };
        this._pc.onsignalingstatechange = function (e) {
            _this._logger.debug('onsignalingstatechange:::', e);
        };
        this._pc.onconnectionstatechange = function (e) {
            _this._logger.debug('onconnectionstatechange:::', e);
        };
        // this._pc.onaddstream = (e: Event) => {
        // 	this._logger.debug('onaddstream:::', e);
        // }
    };
    Opera56.prototype.setLocalOfferSdp = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var mediastream, encodings;
            return __generator(this, function (_a) {
                if (this._direction === 'recv') {
                    // this._pc.addStream(this._sendStream);
                    this._transceiverArr.push(this._pc.addTransceiver('audio', { direction: 'recvonly' }));
                    this._transceiverArr.push(this._pc.addTransceiver('video', { direction: 'recvonly' }));
                }
                else if (this._direction === 'send') {
                    if (params === void 0) {
                        throw new Error('mediastream must be not exist.');
                    }
                    mediastream = params.mediastream, encodings = params.encodings;
                    if (mediastream === void 0) {
                        throw new Error('mediastream must be not exist.');
                    }
                    this._pc.addStream(mediastream);
                    this._currentStream = mediastream;
                }
                return [2 /*return*/];
            });
        });
    };
    Opera56.prototype.getLocalOfferSdp = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this._pc.onnegotiationneeded = function (e) { return __awaiter(_this, void 0, void 0, function () {
                            var createOfferOptions, offer, sdp, e_1;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (this._isNegotiating) {
                                            return [2 /*return*/];
                                        }
                                        this._isNegotiating = true;
                                        _a.label = 1;
                                    case 1:
                                        _a.trys.push([1, 4, , 5]);
                                        createOfferOptions = {
                                            offerToReceiveAudio: false,
                                            offerToReceiveVideo: false
                                        };
                                        if (this._direction === 'recv') {
                                            createOfferOptions = {
                                                offerToReceiveAudio: true,
                                                offerToReceiveVideo: true
                                            };
                                        }
                                        return [4 /*yield*/, this._pc.createOffer(createOfferOptions)];
                                    case 2:
                                        offer = _a.sent();
                                        sdp = void 0;
                                        if (this._videoCustomBitrate !== 0 || this._audioCustomBitrate !== 0) {
                                            sdp = this.setSdpCustomBitrate(offer.sdp);
                                        }
                                        else {
                                            sdp = offer.sdp;
                                        }
                                        // await this._pc.setLocalDescription(offer);
                                        return [4 /*yield*/, this._pc.setLocalDescription({
                                                type: 'offer',
                                                sdp: sdp
                                            })];
                                    case 3:
                                        // await this._pc.setLocalDescription(offer);
                                        _a.sent();
                                        resolve({
                                            localOfferSdp: offer.sdp
                                        });
                                        return [3 /*break*/, 5];
                                    case 4:
                                        e_1 = _a.sent();
                                        throw new Error('set local offer sdp error');
                                    case 5: return [2 /*return*/];
                                }
                            });
                        }); };
                    })];
            });
        });
    };
    return Opera56;
}(handler_1.Handler));
exports.Opera56 = Opera56;


/***/ }),

/***/ "./src/web/device/handlers/QQ.ts":
/*!***************************************!*\
  !*** ./src/web/device/handlers/QQ.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QQ = void 0;
var handler_1 = __webpack_require__(/*! ./handler */ "./src/web/device/handlers/handler.ts");
var QQ = /** @class */ (function (_super) {
    __extends(QQ, _super);
    function QQ() {
        return _super.call(this) || this;
    }
    QQ.createFactory = function () {
        return function () { return new QQ(); };
    };
    Object.defineProperty(QQ.prototype, "name", {
        get: function () {
            return 'QQ';
        },
        enumerable: false,
        configurable: true
    });
    QQ.prototype.setLocalOfferSdp = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var mediastream, encodings, _a, _b, track;
            var e_1, _c;
            return __generator(this, function (_d) {
                if (this._direction === 'send') {
                    if (params === void 0) {
                        throw new Error('mediastream must be not exist.');
                    }
                    mediastream = params.mediastream, encodings = params.encodings;
                    if (mediastream === void 0) {
                        throw new Error('mediastream must be not exist.');
                    }
                    try {
                        for (_a = __values(mediastream.getTracks()), _b = _a.next(); !_b.done; _b = _a.next()) {
                            track = _b.value;
                            this._pc.addTrack(track, this._sendStream);
                        }
                    }
                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                    finally {
                        try {
                            if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                        }
                        finally { if (e_1) throw e_1.error; }
                    }
                }
                else if (this._direction === 'recv') {
                    // for (let track of (this._sendStream as MediaStream).getTracks()) {
                    // 	this._pc.addTrack(track, this._sendStream); 
                    // }
                    this._transceiverArr.push(this._pc.addTransceiver('audio', { direction: 'recvonly' }));
                    this._transceiverArr.push(this._pc.addTransceiver('video', { direction: 'recvonly' }));
                }
                return [2 /*return*/];
            });
        });
    };
    return QQ;
}(handler_1.Handler));
exports.QQ = QQ;


/***/ }),

/***/ "./src/web/device/handlers/Safari11.ts":
/*!*********************************************!*\
  !*** ./src/web/device/handlers/Safari11.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Safari11 = void 0;
var handler_1 = __webpack_require__(/*! ./handler */ "./src/web/device/handlers/handler.ts");
var Safari11 = /** @class */ (function (_super) {
    __extends(Safari11, _super);
    function Safari11() {
        return _super.call(this) || this;
    }
    // private _currentStream: MediaStream | null = null;
    Safari11.createFactory = function () {
        return function () { return new Safari11(); };
    };
    Object.defineProperty(Safari11.prototype, "name", {
        get: function () {
            return 'Safari11';
        },
        enumerable: false,
        configurable: true
    });
    Safari11.prototype.setLocalOfferSdp = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var mediastream, encodings, _a, _b, track, _c, _d, track;
            var e_1, _e, e_2, _f;
            return __generator(this, function (_g) {
                if (this._direction === 'send') {
                    if (params === void 0) {
                        throw new Error('mediastream must be not exist.');
                    }
                    mediastream = params.mediastream, encodings = params.encodings;
                    if (mediastream === void 0) {
                        throw new Error('mediastream must be not exist.');
                    }
                    try {
                        for (_a = __values(mediastream.getTracks()), _b = _a.next(); !_b.done; _b = _a.next()) {
                            track = _b.value;
                            this._pc.addTrack(track, this._sendStream);
                        }
                    }
                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                    finally {
                        try {
                            if (_b && !_b.done && (_e = _a.return)) _e.call(_a);
                        }
                        finally { if (e_1) throw e_1.error; }
                    }
                    this._currentStream = mediastream;
                }
                else if (this._direction === 'recv') {
                    try {
                        for (_c = __values(this._sendStream.getTracks()), _d = _c.next(); !_d.done; _d = _c.next()) {
                            track = _d.value;
                            this._pc.addTrack(track, this._sendStream);
                        }
                    }
                    catch (e_2_1) { e_2 = { error: e_2_1 }; }
                    finally {
                        try {
                            if (_d && !_d.done && (_f = _c.return)) _f.call(_c);
                        }
                        finally { if (e_2) throw e_2.error; }
                    }
                }
                return [2 /*return*/];
            });
        });
    };
    return Safari11;
}(handler_1.Handler));
exports.Safari11 = Safari11;


/***/ }),

/***/ "./src/web/device/handlers/Safari12.ts":
/*!*********************************************!*\
  !*** ./src/web/device/handlers/Safari12.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Safari12 = void 0;
var handler_1 = __webpack_require__(/*! ./handler */ "./src/web/device/handlers/handler.ts");
var Safari12 = /** @class */ (function (_super) {
    __extends(Safari12, _super);
    function Safari12() {
        return _super.call(this) || this;
    }
    Safari12.createFactory = function () {
        return function () { return new Safari12(); };
    };
    Object.defineProperty(Safari12.prototype, "name", {
        get: function () {
            return 'Safari12';
        },
        enumerable: false,
        configurable: true
    });
    return Safari12;
}(handler_1.Handler));
exports.Safari12 = Safari12;


/***/ }),

/***/ "./src/web/device/handlers/WeChat70.ts":
/*!*********************************************!*\
  !*** ./src/web/device/handlers/WeChat70.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeChat70 = void 0;
var handler_1 = __webpack_require__(/*! ./handler */ "./src/web/device/handlers/handler.ts");
var WeChat70 = /** @class */ (function (_super) {
    __extends(WeChat70, _super);
    function WeChat70() {
        return _super.call(this) || this;
    }
    // private _currentStream: MediaStream | null = null;
    WeChat70.createFactory = function () {
        return function () { return new WeChat70(); };
    };
    Object.defineProperty(WeChat70.prototype, "name", {
        get: function () {
            return 'WeChat70';
        },
        enumerable: false,
        configurable: true
    });
    WeChat70.prototype.run = function (_a) {
        var _this = this;
        var direction = _a.direction, iceServers = _a.iceServers, iceTransportPolicy = _a.iceTransportPolicy;
        this._direction = direction;
        this._pc = new RTCPeerConnection({
            iceServers: iceServers || [],
            iceTransportPolicy: iceTransportPolicy || 'all',
            bundlePolicy: 'max-bundle',
            rtcpMuxPolicy: 'require',
            sdpSemantics: 'unified-plan',
        });
        this._pc.onicecandidate = function (e) {
            _this._logger.debug('onicecandidate event:::', e);
        };
        this._pc.onicegatheringstatechange = function (e) {
            _this._logger.debug('onicegatheringstatechange:::', e);
        };
        this._pc.onsignalingstatechange = function (e) {
            _this._logger.debug('onsignalingstatechange:::', e);
        };
        this._pc.onconnectionstatechange = function (e) {
            _this._logger.debug('onconnectionstatechange:::', e);
        };
        // this._pc.onaddstream = (e: Event) => {
        // 	console.log('ontrack:::', e);
        // }
    };
    WeChat70.prototype.setLocalOfferSdp = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var mediastream, encodings, _a, _b, track;
            var e_1, _c;
            return __generator(this, function (_d) {
                if (this._direction === 'send') {
                    if (params === void 0) {
                        throw new Error('mediastream must be not exist.');
                    }
                    mediastream = params.mediastream, encodings = params.encodings;
                    if (!mediastream) {
                        throw new Error('mediastream must be not exist.');
                    }
                    try {
                        for (_a = __values(mediastream.getTracks()), _b = _a.next(); !_b.done; _b = _a.next()) {
                            track = _b.value;
                            this._transceiverArr.push(this._pc.addTransceiver(track, {
                                direction: 'sendonly',
                                streams: [this._sendStream],
                                sendEncodings: encodings
                            }));
                        }
                    }
                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                    finally {
                        try {
                            if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                        }
                        finally { if (e_1) throw e_1.error; }
                    }
                }
                return [2 /*return*/];
            });
        });
    };
    WeChat70.prototype.getLocalOfferSdp = function () {
        return __awaiter(this, void 0, void 0, function () {
            var createOfferOptions, offer, sdp, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        createOfferOptions = {
                            offerToReceiveAudio: false,
                            offerToReceiveVideo: false
                        };
                        if (this._direction === 'recv') {
                            createOfferOptions = {
                                offerToReceiveAudio: true,
                                offerToReceiveVideo: true
                            };
                        }
                        return [4 /*yield*/, this._pc.createOffer(createOfferOptions)];
                    case 1:
                        offer = _a.sent();
                        sdp = void 0;
                        if (this._videoCustomBitrate !== 0 || this._audioCustomBitrate !== 0) {
                            sdp = this.setSdpCustomBitrate(offer.sdp);
                        }
                        else {
                            sdp = offer.sdp;
                        }
                        return [4 /*yield*/, this._pc.setLocalDescription({
                                type: 'offer',
                                sdp: sdp
                            })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, {
                                localOfferSdp: offer.sdp
                            }];
                    case 3:
                        e_2 = _a.sent();
                        throw new Error('set local offer sdp error');
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ;
    return WeChat70;
}(handler_1.Handler));
exports.WeChat70 = WeChat70;


/***/ }),

/***/ "./src/web/device/handlers/handler.ts":
/*!********************************************!*\
  !*** ./src/web/device/handlers/handler.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Handler = void 0;
var sdpTransform = __importStar(__webpack_require__(/*! sdp-transform */ "./node_modules/sdp-transform/lib/index.js"));
var logger_1 = __webpack_require__(/*! ../../log/logger */ "./src/web/log/logger.ts");
var Statistics_1 = __webpack_require__(/*! ./stats/Statistics */ "./src/web/device/handlers/stats/Statistics.ts");
var HandlerInterface_1 = __webpack_require__(/*! ./HandlerInterface */ "./src/web/device/handlers/HandlerInterface.ts");
var Handler = /** @class */ (function (_super) {
    __extends(Handler, _super);
    function Handler() {
        var _this = _super.call(this) || this;
        _this._logger = null;
        _this._statistics = null;
        _this._sensorstats = null;
        _this._streamId = '';
        _this._direction = 'send';
        _this._sendStream = new MediaStream();
        _this._videoCustomBitrate = 0;
        _this._audioCustomBitrate = 0;
        _this._customFramerate = 0;
        _this._hasTrack = false;
        _this._isNegotiating = false;
        _this._transceiverArr = new Array();
        _this._currentStream = null;
        _this._pcStats = null;
        _this._logger = logger_1.logger.collect;
        return _this;
    }
    Handler.createFactory = function () {
        return function () { return new Handler(); };
    };
    Object.defineProperty(Handler.prototype, "name", {
        get: function () {
            return 'Handler';
        },
        enumerable: false,
        configurable: true
    });
    Handler.prototype.close = function () {
        if (this._pc) {
            try {
                if (this._statistics) {
                    this._statistics.stopInterval();
                    this._statistics = null;
                }
                if (this._sensorstats) {
                    this._sensorstats = null;
                }
                this.removeAllListeners();
                this._pc.close();
                this._pc.onicecandidate = null;
                this._pc.oniceconnectionstatechange = null;
                this._pc.onicegatheringstatechange = null;
                this._pc.onsignalingstatechange = null;
                this._pc.onnegotiationneeded = null;
                this._pc.onconnectionstatechange = null;
                this._pc.ontrack = null;
                this._isNegotiating = false;
                this._hasTrack = false;
            }
            catch (error) { }
        }
    };
    Handler.prototype.run = function (_a) {
        var _this = this;
        var streamId = _a.streamId, direction = _a.direction, iceServers = _a.iceServers, iceTransportPolicy = _a.iceTransportPolicy;
        this._streamId = streamId;
        this._direction = direction;
        try {
            this._pc = new RTCPeerConnection({
                iceServers: iceServers || [],
                iceTransportPolicy: iceTransportPolicy || 'all',
                bundlePolicy: 'max-bundle',
                rtcpMuxPolicy: 'require',
                sdpSemantics: 'unified-plan',
            });
        }
        catch (e) {
            throw new Error(e);
        }
        this._pc.onicecandidate = function (e) {
            // console.log('onicecandidate event:::', e);
        };
        this._pc.onicegatheringstatechange = function (e) {
            _this._logger.debug(streamId + "onicegatheringstatechange:::", _this._pc.iceGatheringState);
        };
        this._pc.onsignalingstatechange = function (e) {
            _this._logger.debug(streamId + "onsignalingstatechange:::", _this._pc.signalingState);
        };
        this._pc.onconnectionstatechange = function (e) {
            _this._logger.debug('onconnectionstatechange:::', e.currentTarget.connectionState);
        };
    };
    Handler.prototype.setLocalOfferSdp = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var transceiverArr, mediastream, encodings, _a, _b, track;
            var e_1, _c;
            return __generator(this, function (_d) {
                transceiverArr = new Array();
                if (this._direction == 'recv') {
                    transceiverArr.push(this._pc.addTransceiver('audio', { direction: 'recvonly' }));
                    transceiverArr.push(this._pc.addTransceiver('video', { direction: 'recvonly' }));
                }
                else {
                    if (params === void 0) {
                        throw new Error('mediastream must be not exist.');
                    }
                    mediastream = params.mediastream, encodings = params.encodings;
                    if (!mediastream) {
                        throw new Error('mediastream must be not exist.');
                    }
                    this._currentStream = mediastream;
                    try {
                        for (_a = __values(mediastream.getTracks()), _b = _a.next(); !_b.done; _b = _a.next()) {
                            track = _b.value;
                            transceiverArr.push(this._pc.addTransceiver(track, {
                                direction: 'sendonly',
                                streams: [this._sendStream],
                                sendEncodings: encodings
                            }));
                        }
                    }
                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                    finally {
                        try {
                            if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                        }
                        finally { if (e_1) throw e_1.error; }
                    }
                }
                this._transceiverArr = transceiverArr;
                return [2 /*return*/];
            });
        });
    };
    Handler.prototype.setRemoteAnswerSdp = function (_a) {
        var remoteAnswerSdp = _a.remoteAnswerSdp;
        return __awaiter(this, void 0, void 0, function () {
            var sdp, remoteOffer, e_2;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (this._videoCustomBitrate !== 0 || this._audioCustomBitrate !== 0) {
                            sdp = this.setSdpCustomBitrate(remoteAnswerSdp);
                        }
                        else {
                            sdp = remoteAnswerSdp;
                        }
                        remoteOffer = { type: 'answer', sdp: sdp };
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        this._logger.report('remote answersdp', remoteOffer);
                        return [4 /*yield*/, this._pc.setRemoteDescription(remoteOffer)];
                    case 2:
                        _b.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        e_2 = _b.sent();
                        this._logger.report('set remote answersdp error', { streamId: this._streamId, reason: e_2 });
                        this._logger.error('set remote answersdp error.');
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    Handler.prototype.setIceCandidate = function (candidateArray) {
        var _this = this;
        for (var i = 0; i < candidateArray.length; i += 1) {
            var candidate = new RTCIceCandidate(candidateArray[i]);
            this._pc.addIceCandidate(candidate).catch(function (e) {
                _this._logger.error('addIceCandidate', e);
            });
        }
    };
    Handler.prototype.stopTransceiver = function () {
        var e_3, _a, e_4, _b;
        var transceiver = this._transceiverArr;
        if (!transceiver) {
            throw new Error('associated RTCRtpTransceiver not found');
        }
        if (this._pc.signalingState !== 'closed') {
            try {
                for (var transceiver_1 = __values(transceiver), transceiver_1_1 = transceiver_1.next(); !transceiver_1_1.done; transceiver_1_1 = transceiver_1.next()) {
                    var item = transceiver_1_1.value;
                    item.sender.replaceTrack(null);
                    this._pc.removeTrack(item.sender);
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (transceiver_1_1 && !transceiver_1_1.done && (_a = transceiver_1.return)) _a.call(transceiver_1);
                }
                finally { if (e_3) throw e_3.error; }
            }
        }
        if (this._currentStream != void 0) {
            try {
                for (var _c = __values(this._currentStream.getTracks()), _d = _c.next(); !_d.done; _d = _c.next()) {
                    var item = _d.value;
                    item.stop();
                }
            }
            catch (e_4_1) { e_4 = { error: e_4_1 }; }
            finally {
                try {
                    if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
                }
                finally { if (e_4) throw e_4.error; }
            }
        }
        this.close();
    };
    Handler.prototype.getLocalOfferSdp = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this._pc.onnegotiationneeded = function (e) { return __awaiter(_this, void 0, void 0, function () {
                            var offer, sdp, e_5, e_6;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (this._isNegotiating) {
                                            return [2 /*return*/];
                                        }
                                        this._isNegotiating = true;
                                        _a.label = 1;
                                    case 1:
                                        _a.trys.push([1, 7, , 8]);
                                        return [4 /*yield*/, this._pc.createOffer()];
                                    case 2:
                                        offer = _a.sent();
                                        sdp = void 0;
                                        if (this._videoCustomBitrate !== 0 || this._audioCustomBitrate !== 0) {
                                            sdp = this.setSdpCustomBitrate(offer.sdp);
                                        }
                                        else {
                                            sdp = offer.sdp;
                                        }
                                        this._logger.report('local offer sdp', sdp);
                                        _a.label = 3;
                                    case 3:
                                        _a.trys.push([3, 5, , 6]);
                                        return [4 /*yield*/, this._pc.setLocalDescription({
                                                type: 'offer',
                                                sdp: sdp
                                            })];
                                    case 4:
                                        _a.sent();
                                        return [3 /*break*/, 6];
                                    case 5:
                                        e_5 = _a.sent();
                                        throw new Error('set local offer sdp error');
                                    case 6:
                                        // 目前服务端不兼容,目前暂时不做处理
                                        resolve({
                                            localOfferSdp: offer.sdp
                                        });
                                        return [3 /*break*/, 8];
                                    case 7:
                                        e_6 = _a.sent();
                                        throw new Error('create local offer sdp error');
                                    case 8: return [2 /*return*/];
                                }
                            });
                        }); };
                    })];
            });
        });
    };
    Handler.prototype.getICEConnectionState = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._pc.oniceconnectionstatechange = function (e) {
                _this._logger.report(_this._streamId + "get connectionstatechange state:::", _this._pc.iceConnectionState);
                switch (_this._pc.iceConnectionState) {
                    case 'checking':
                        // this.emit('@connectionstatechange', 'checking');
                        break;
                    case 'connected':
                    case 'completed':
                        // 结果返回
                        var successState = _this._direction == 'send' ? 'PUBLISHING' : 'PLAYING';
                        _this._logger.info("stream " + successState + " success.");
                        resolve({
                            state: successState,
                            code: 1
                        });
                        break;
                    case 'failed':
                        var failedState = _this._direction == 'send' ? 'NO_PUBLISH' : 'NO_PLAY';
                        _this._logger.info("stream " + failedState);
                        resolve({
                            state: failedState,
                            code: 0
                        });
                        break;
                    case 'disconnected':
                        // this.emit('@connectionstatechange', 'disconnected');
                        break;
                    case 'closed':
                        // this.emit('@connectionstatechange', 'closed');
                        break;
                }
            };
        });
    };
    Handler.prototype.getTrack = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._pc.ontrack = function (e) {
                var e_7, _a;
                if (_this._hasTrack) {
                    return;
                }
                _this._hasTrack = true;
                _this._logger.debug(_this._streamId + "gettrack:::", e.streams.length);
                if (e.streams.length !== 0) {
                    try {
                        for (var _b = __values(e.streams[0].getTracks()), _c = _b.next(); !_c.done; _c = _b.next()) {
                            var track = _c.value;
                            _this._logger.debug(_this._streamId + "gettrack kind:::", track);
                        }
                    }
                    catch (e_7_1) { e_7 = { error: e_7_1 }; }
                    finally {
                        try {
                            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                        }
                        finally { if (e_7) throw e_7.error; }
                    }
                    ;
                    _this._currentStream = e.streams[0];
                    resolve(e.streams[0]);
                }
            };
        });
    };
    Handler.prototype.setCustomerValue = function (customParams) {
        this._videoCustomBitrate = customParams.videoCustomBitrate;
        this._audioCustomBitrate = customParams.audioCustomBitrate;
        this._customFramerate = customParams.customFramerate;
    };
    Handler.prototype.setSdpCustomBitrate = function (sdp) {
        var e_8, _a, e_9, _b;
        if (this._videoCustomBitrate !== 0 || this._audioCustomBitrate !== 0) {
            var sdpObj = sdpTransform.parse(sdp);
            var mediaArr = sdpObj.media;
            try {
                for (var mediaArr_1 = __values(mediaArr), mediaArr_1_1 = mediaArr_1.next(); !mediaArr_1_1.done; mediaArr_1_1 = mediaArr_1.next()) {
                    var item = mediaArr_1_1.value;
                    var fmtpArr = item.fmtp;
                    try {
                        for (var fmtpArr_1 = (e_9 = void 0, __values(fmtpArr)), fmtpArr_1_1 = fmtpArr_1.next(); !fmtpArr_1_1.done; fmtpArr_1_1 = fmtpArr_1.next()) {
                            var value = fmtpArr_1_1.value;
                            if (item.type === 'video' && this._videoCustomBitrate !== 0) {
                                var fmtpConfig = sdpTransform.parseParams(value.config);
                                if (fmtpConfig['profile-level-id']) {
                                    value.config += ";x-google-max-bitrate=" + this._videoCustomBitrate + ";x-google-min-bitrate=" + this._videoCustomBitrate + ";x-google-start-bitrate=" + this._videoCustomBitrate;
                                }
                            }
                            else if (item.type === 'audio' && this._audioCustomBitrate !== 0) {
                                value.config += ";maxaveragebitrate=" + this._audioCustomBitrate;
                            }
                        }
                    }
                    catch (e_9_1) { e_9 = { error: e_9_1 }; }
                    finally {
                        try {
                            if (fmtpArr_1_1 && !fmtpArr_1_1.done && (_b = fmtpArr_1.return)) _b.call(fmtpArr_1);
                        }
                        finally { if (e_9) throw e_9.error; }
                    }
                }
            }
            catch (e_8_1) { e_8 = { error: e_8_1 }; }
            finally {
                try {
                    if (mediaArr_1_1 && !mediaArr_1_1.done && (_a = mediaArr_1.return)) _a.call(mediaArr_1);
                }
                finally { if (e_8) throw e_8.error; }
            }
            return sdpTransform.write(sdpObj);
        }
        else {
            throw new RangeError('customBitRate value not invalid');
        }
    };
    Handler.prototype.replaceTrack = function (track) {
        return __awaiter(this, void 0, void 0, function () {
            var sender, e_10;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        sender = this._pc.getSenders().find(function (s) {
                            if (!s.track) {
                                throw new Error('mediastreamTrack is not exist.');
                            }
                            return s.track.kind == track.kind;
                        });
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, sender.replaceTrack(track)];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        e_10 = _a.sent();
                        throw new Error(e_10);
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    // async transportStats(): Promise<any> {
    // 	if (this._statistics == void 0) {
    // 		this._statistics = new Statistics({
    // 			framerate: this._customFramerate,
    // 			bitrate: this._videoCustomBitrate
    // 		});
    // 	}
    // 	if (this._sensorstats == void 0) {
    // 		this._sensorstats = new SensorStats({
    // 			framerate: this._customFramerate,
    // 			bitrate: this._videoCustomBitrate
    // 		})
    // 	}
    // 	const statsData = await this._pc.getStats();
    // 	const crystalBallStatsData = this._statistics.startInterval(statsData);
    // 	const sensorStatsData = this._sensorstats.collectRTCStatsReport(statsData);
    // 	// this._logger.debug('statsData::', {
    // 	// 	crystalBall: crystalBallStatsData,
    // 	// 	sensor: sensorStatsData
    // 	// })
    // 	return {
    // 		crystalBall: crystalBallStatsData,
    // 		sensor: sensorStatsData
    // 	};
    // }
    Handler.prototype.transportStats = function (typeData) {
        return __awaiter(this, void 0, void 0, function () {
            var statsData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this._pcStats == void 0) {
                            this._pcStats = new Statistics_1.pcStats({
                                framerate: this._customFramerate,
                                bitrate: this._videoCustomBitrate,
                                direction: this._direction
                            });
                        }
                        return [4 /*yield*/, this._pc.getStats()];
                    case 1:
                        statsData = _a.sent();
                        this._pcStats.collectRTCStatsReport(statsData);
                        switch (typeData) {
                            case Statistics_1.type.LocalAudio:
                                return [2 /*return*/, this._pcStats.getLocalAudioStats()];
                            case Statistics_1.type.LocalVideo:
                                return [2 /*return*/, this._pcStats.getLocalVideoStats()];
                            case Statistics_1.type.RemoteAudio:
                                return [2 /*return*/, this._pcStats.getRemoteAudioStats()];
                            case Statistics_1.type.RemoteVideo:
                                return [2 /*return*/, this._pcStats.getRemoteVideoStats()];
                            case Statistics_1.type.Sensor:
                            case Statistics_1.type.Crystalball:
                                return [2 /*return*/, {
                                        crystalBall: this._pcStats.getCrystalballStats(),
                                        sensor: this._pcStats.getSensorStats()
                                    }];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    // async statsDataInterval() {
    // 	if (this._pcStats == void 0) {
    // 		throw new Error('peer connection is not exist.')
    // 	}
    // 	const statsData = await this._pc.getStats();
    // 	this._pcStats.collectRTCStatsReport(statsData);
    // 	setTimeout(this.statsDataInterval, standard.getDataInterval);
    // }
    Handler.prototype._assertSendDirection = function () {
        if (this._direction !== 'send') {
            throw new Error('method can just be called for handlers with "send" direction');
        }
    };
    Handler.prototype._assertRecvDirection = function () {
        if (this._direction !== 'recv') {
            throw new Error('method can just be called for handlers with "recv" direction');
        }
    };
    return Handler;
}(HandlerInterface_1.HandlerInterface));
exports.Handler = Handler;


/***/ }),

/***/ "./src/web/device/handlers/stats/Statistics.ts":
/*!*****************************************************!*\
  !*** ./src/web/device/handlers/stats/Statistics.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.pcStats = exports.standard = exports.type = void 0;
var type;
(function (type) {
    type[type["LocalAudio"] = 0] = "LocalAudio";
    type[type["LocalVideo"] = 1] = "LocalVideo";
    type[type["RemoteAudio"] = 2] = "RemoteAudio";
    type[type["RemoteVideo"] = 3] = "RemoteVideo";
    type[type["Crystalball"] = 4] = "Crystalball";
    type[type["Sensor"] = 5] = "Sensor";
})(type = exports.type || (exports.type = {}));
var standard;
(function (standard) {
    standard[standard["freezeFrameRate"] = 8] = "freezeFrameRate";
    standard[standard["audioFreezeRate"] = 0.04] = "audioFreezeRate";
})(standard = exports.standard || (exports.standard = {}));
var pcStats = /** @class */ (function () {
    function pcStats(targetParams) {
        this._direction = 'send';
        this._interval = 1000; // 默认1s起始
        this._mapCodecId = new Map();
        this._targetFramerate = 0;
        // 帧率少于8帧默认为卡顿
        this._audioCodecId = '';
        this._videoCodecId = '';
        this._sendCountFreezeTimes = 0;
        this._recvCountFreezeTimes = 0;
        this._startTime = 0;
        this._endTime = 0;
        this._totalAudioFreezeTimes = 0;
        this._totalAudioRecvTimes = 0;
        this._currentRoundTripTime = 0;
        this._totalRenderFrame = 0;
        this._totalDecodeFrame = 0;
        this._audioJitterDelay = 0;
        this._videoJitterDelay = 0;
        this._totalRecvFrameRate = 0;
        this._totalfreezeFrame = 0;
        this._audioSendCodecType = 'aac';
        this._audioSendBitrate = 0; // bps
        this._audioSendBytes = 0; //bytes
        this._audioSendPackets = 0;
        this._andioSendPacketsLost = 0;
        this._sendVolumeLevel = 0;
        this._captureFrameRate = 0; // undefine
        this._captureResolutionHeight = 0;
        this._captureResolutionWidth = 0;
        this._videoSendCodecType = 'H264';
        this._encodeDelay = 0;
        this._videoSendBitrate = 0;
        this._videoSendBytes = 0;
        this._videoSendPackets = 0;
        this._videoSendPacketsLost = 0;
        this._sendResolutionHeight = 0;
        this._sendResolutionWidth = 0;
        this._targetSendBitrate = 0;
        this._sendTotalDuration = 0; //视频总时长，单位为秒
        this._sendTotalFreezeTime = 0; //视频总卡顿时长，单位为秒
        this._audioRecvCodecType = 'aac';
        this._audioEnd2EndDelay = 0;
        this._audioFreezeRate = 0;
        this._audioPacketLossRate = 0;
        this._audioPublishDuration = 0;
        this._audioReceiveBitrate = 0;
        this._audioReceiveBytes = 0;
        this._audioReceiveDelay = 0;
        this._receiveLevel = 0;
        this._audioReceivePackets = 0;
        this._audioReceivePacketsLost = 0;
        this._recvAudioTotalDuration = 0; ///////???
        this._recvAudioTotalFreezeTime = 0; //////???
        this._audioTransportDelay = 0;
        this._videoRecvCodecType = 'H264';
        this._decodeFrameRate = 0;
        this._videoEnd2EndDelay = 0;
        this._videoFreezeRate = 0;
        this._videoPacketLossRate = 0;
        this._videoPublishDuration = 0; /// ???
        this._videoReceiveBitrate = 0;
        this._videoReceiveBytes = 0;
        this._videoReceiveDelay = 0;
        this._receiveFrameRate = 0;
        this._videoReceivePackets = 0;
        this._videoReceivePacketsLost = 0;
        this._receiveResolutionHeight = 0;
        this._receiveResolutionWidth = 0;
        this._recvVideoTotalDuration = 0; // 接收的视频总时长，单位为秒。
        this._recvVideoTotalFreezeTime = 0; // 接收的视频总卡顿时长，单位为秒。
        this._videoTransportDelay = 0; // 从远端发送视频到本地接收视频的延迟。
        // sensor
        this._sendFramesEncoded = 0;
        this._sendFramesSent = 0;
        this._sendNackCount = 0;
        this._sendPliCount = 0;
        this._totalDecodeTime = 0;
        this._firCount = 0;
        this._recvNackCount = 0;
        this._recvPliCount = 0;
        // crystalball
        this._sendBandwidth = 0;
        this._direction = targetParams.direction;
        if (targetParams !== void 0) {
            if (targetParams.framerate !== void 0) {
                this._targetFramerate = targetParams.framerate;
            }
            ;
            if (targetParams.bitrate !== void 0) {
                this._targetSendBitrate = targetParams.bitrate;
            }
            ;
        }
    }
    pcStats.prototype.getLocalAudioStats = function () {
        this._calculateTotalIndex();
        return {
            codecType: this._audioSendCodecType,
            sendBitrate: this._audioSendBitrate,
            sendBytes: this._audioSendBytes,
            sendPackets: this._audioSendPackets,
            sendPacketsLost: this._andioSendPacketsLost,
            sendVolumeLevel: this._sendVolumeLevel
        };
    };
    pcStats.prototype.getLocalVideoStats = function () {
        this._calculateTotalIndex();
        return {
            captureFrameRate: this._captureFrameRate,
            captureResolutionHeight: this._captureResolutionHeight,
            captureResolutionWidth: this._captureResolutionWidth,
            codecType: this._videoSendCodecType,
            encodeDelay: this._encodeDelay,
            sendBitrate: this._videoSendBitrate,
            sendBytes: this._videoSendBytes,
            sendFrameRate: this._sendFrameRate,
            sendPackets: this._videoSendPackets,
            sendPacketsLost: this._videoSendPacketsLost,
            sendResolutionHeight: this._sendResolutionHeight,
            sendResolutionWidth: this._sendResolutionWidth,
            targetSendBitrate: this._targetSendBitrate,
            totalDuration: this._sendTotalDuration,
            totalFreezeTime: this._sendTotalFreezeTime //视频总卡顿时长，单位为秒
        };
    };
    pcStats.prototype.getRemoteAudioStats = function () {
        this._calculateTotalIndex();
        return {
            codecType: this._audioRecvCodecType,
            // end2EndDelay:  /////////????
            freezeRate: this._audioFreezeRate,
            packetLossRate: this._audioPacketLossRate,
            publishDuration: this._audioPublishDuration,
            receiveBitrate: this._audioReceiveBitrate,
            receiveBytes: this._audioReceiveBytes,
            receiveDelay: this._audioReceiveDelay,
            receiveLevel: this._receiveLevel,
            receivePackets: this._audioReceivePackets,
            receivePacketsLost: this._audioReceivePacketsLost,
            totalDuration: this._recvAudioTotalDuration,
            totalFreezeTime: this._recvAudioTotalFreezeTime,
            transportDelay: this._audioTransportDelay
        };
    };
    pcStats.prototype.getRemoteVideoStats = function () {
        this._calculateTotalIndex();
        return {
            codecType: this._videoRecvCodecType,
            decodeFrameRate: this._decodeFrameRate,
            // end2EndDelay: 
            freezeRate: this._videoFreezeRate,
            packetLossRate: this._videoPacketLossRate,
            // publishDuration: 
            receiveBitrate: this._videoReceiveBitrate,
            receiveBytes: this._videoReceiveBytes,
            receiveDelay: this._videoReceiveDelay,
            receiveFrameRate: this._receiveFrameRate,
            receivePackets: this._videoReceivePackets,
            receivePacketsLost: this._videoReceivePacketsLost,
            receiveResolutionHeight: this._receiveResolutionHeight,
            receiveResolutionWidth: this._receiveResolutionWidth,
            renderFrameRate: this._renderFrameRate,
            totalDuration: this._recvVideoTotalDuration,
            totalFreezeTime: this._recvVideoTotalFreezeTime,
            transportDelay: this._videoTransportDelay // 从远端发送视频到本地接收视频的延迟。
        };
    };
    pcStats.prototype.getSensorStats = function () {
        this._calculateTotalIndex();
        var sendData = {
            a_send_bitrate: this._audioSendBitrate,
            is_send: 1,
            v_actual_bitrate: this._videoSendBitrate,
            v_encode_cost: this._encodeDelay,
            v_frame_encode: this._sendFramesEncoded,
            v_frame_sent: this._sendFramesSent,
            v_input_frame_rate: this._targetFramerate,
            v_nack_pli: this._sendNackCount,
            v_send_frame_rate: this._sendFrameRate,
            v_send_packets: this._videoSendPackets,
            v_send_pli: this._sendPliCount,
            v_target_bitrate: this._targetSendBitrate
        };
        var recvData = {
            is_send: 0,
            a_recv_bitrate: this._audioReceiveBitrate,
            a_recv_packets: this._audioReceivePackets,
            a_lost_packets: this._audioReceivePacketsLost,
            v_recv_bitrate: this._videoReceiveBitrate,
            v_decode_cost: this._totalDecodeTime,
            v_lost_packets: this._videoReceivePacketsLost,
            v_recv_firs: this._firCount,
            v_recv_frame_rate: this._receiveFrameRate,
            v_recv_nack: this._recvNackCount,
            v_recv_plis: this._recvPliCount
        };
        if (this._direction === 'send') {
            return sendData;
        }
        else {
            return recvData;
        }
    };
    /*
    * 由于水晶球数据类型转换问题，目前水晶球rtt、encodeCost、decodeCost单位均使用ms
    */
    pcStats.prototype.getCrystalballStats = function () {
        this._calculateTotalIndex();
        var result = {};
        if (this._direction === 'send') {
            var encodeCost = this._encodeDelay ? this._encodeDelay * 1000 : 0;
            var sendData = {
                VSendBitrate1: this._videoSendBitrate,
                ASendBitrate: this._audioSendBitrate,
                SendBandwidth: this._sendBandwidth,
                SendRTT: this._currentRoundTripTime * 1000,
                EncodeCost: encodeCost,
                VFrameRate1: this._sendFrameRate,
                VFrameRate2: this._targetFramerate,
                VSendFrameRate1: this._sendFrameRate,
                VSendLostPercent: this._videoPacketLossRate,
                ASendLostPercent: this._audioPacketLossRate,
                nack_receive_times: this._sendNackCount,
                pli_receive_times: this._sendPliCount, // pli接收次数
            };
            for (var item in sendData) {
                if (sendData.hasOwnProperty(item)) {
                    if (sendData[item]) {
                        result[item] = Math.round(sendData[item]);
                    }
                }
            }
        }
        else if (this._direction === 'recv') {
            var recvData = {
                VRecvBitrate: this._videoReceiveBitrate,
                ARecvBitrate: this._audioReceiveBitrate,
                RecvRTT: this._currentRoundTripTime * 1000,
                DecodeCost: this._totalDecodeTime * 1000,
                VFrameRate: this._receiveFrameRate,
                VRecvLostPercent: this._videoReceivePacketsLost,
                ARecvLostPercent: this._audioReceivePacketsLost
            };
            for (var item in recvData) {
                if (recvData.hasOwnProperty(item)) {
                    if (recvData[item]) {
                        result[item] = Math.round(recvData[item]);
                    }
                }
            }
        }
        return result;
    };
    pcStats.prototype.collectRTCStatsReport = function (statsData) {
        this._analysisRTCStatsReport(statsData);
    };
    // RTCStatsReport
    pcStats.prototype._analysisRTCStatsReport = function (currentRTCStatsReport) {
        var _this = this;
        currentRTCStatsReport.forEach(function (report) {
            // console.log('report item:::', report);
            if (!_this._startTime) {
                _this._startTime = report.timestamp;
            }
            _this._endTime = report.timestamp;
            _this._interval = (_this._endTime - _this._startTime) + 1000;
            var id = report.id;
            var type = report.type;
            var kind = report.kind || report.mediaType;
            if (type === 'codec') {
                _this._mapCodecId.set(id, report.mimeType);
            }
            else if (type === 'candidate-pair') {
                _this._currentRoundTripTime = report.currentRoundTripTime;
                _this._sendBandwidth = report.availableOutgoingBitrate;
            }
            else if (type === 'track') {
                if (kind === 'audio') {
                    _this._audioJitterDelay = report.jitterBufferDelay / report.jitterBufferEmittedCount;
                }
                else if (kind === 'video') {
                    _this._videoJitterDelay = report.jitterBufferDelay / report.jitterBufferEmittedCount;
                }
            }
            else if (type === 'media-source') {
                if (kind === 'audio') {
                    _this._sendVolumeLevel = report.audioLevel; // *1000
                }
                else if (kind === 'video') {
                    _this._captureFrameRate = report.framesPerSecond;
                    _this._captureResolutionWidth = report.width;
                    _this._captureResolutionHeight = report.height;
                }
            }
            else if (type === 'remote-inbound-rtp') {
                if (kind === 'audio') {
                    _this._andioSendPacketsLost = report.packetsLost;
                }
                else if (kind === 'video') {
                    _this._videoSendPacketsLost = report.packetsLost;
                }
            }
            else if (type === 'outbound-rtp') {
                if (kind === 'audio') {
                    _this._audioCodecId = report.codecId;
                    _this._audioSendBitrate = _this._calculateKBitsPerSecond(report.bytesSent);
                    _this._audioSendBytes = report.bytesSent;
                    _this._audioSendPackets = report.packetsSent;
                }
                else if (kind === 'video') {
                    _this._videoCodecId = report.codecId;
                    _this._encodeDelay = report.totalEncodeTime;
                    _this._videoSendBitrate = _this._calculateKBitsPerSecond(report.bytesSent);
                    _this._videoSendBytes = report.bytesSent;
                    _this._sendFrameRate = report.framesPerSecond;
                    _this._videoSendPackets = report.packetsSent;
                    _this._sendResolutionHeight = report.frameHeight;
                    _this._sendResolutionWidth = report.frameWidth;
                    _this._sendFramesEncoded = report.framesEncoded;
                    _this._sendFramesSent = report.framesSent;
                    _this._sendNackCount = report.nackCount;
                    _this._sendPliCount = report.pliCount;
                    if (report.framesPerSecond <= standard.freezeFrameRate) {
                        _this._sendCountFreezeTimes += 1;
                    }
                }
            }
            else if (type === 'inbound-rtp') {
                if (kind === 'audio') {
                    _this._audioCodecId = report.codecId;
                    _this._audioPublishDuration = report.totalSamplesDuration;
                    _this._audioReceiveBitrate = _this._calculateKBitsPerSecond(report.bytesReceived);
                    _this._audioReceiveBytes = report.bytesReceived;
                    _this._receiveLevel = report.audioLevel;
                    _this._audioReceivePackets = report.packetsReceived;
                    _this._audioReceivePacketsLost = report.packetsLost;
                    _this._audioPacketLossRate = _this._calcuatePacketsLostRatio(report.packetsLost, report.packetsReceived);
                    // 当前丢包率大于4%的即为卡顿
                    if (_this._audioReceivePacketsLost / (_this._audioReceivePackets + _this._audioReceivePacketsLost) >= standard.audioFreezeRate) {
                        _this._totalAudioFreezeTimes += 1;
                    }
                    _this._totalAudioRecvTimes += 1;
                }
                else if (kind === 'video') {
                    _this._videoCodecId = report.codecId;
                    _this._videoReceiveBitrate = _this._calculateKBitsPerSecond(report.bytesReceived);
                    _this._videoReceiveBytes = report.bytesReceived;
                    _this._receiveFrameRate = report.framesPerSecond || 0;
                    _this._videoReceivePackets = report.packetsReceived;
                    _this._videoReceivePacketsLost = report.packetsLost;
                    _this._receiveResolutionHeight = report.frameHeight;
                    _this._receiveResolutionWidth = report.frameWidth;
                    _this._videoPacketLossRate = _this._calcuatePacketsLostRatio(report.packetsLost, report.packetsReceived);
                    _this._totalRenderFrame = report.framesDecoded - report.framesDropped;
                    _this._totalDecodeFrame = report.framesDecoded;
                    _this._totalRecvFrameRate += report.framesPerSecond || 0;
                    _this._totalDecodeTime = report.totalDecodeTime;
                    _this._recvNackCount = report.nackCount;
                    _this._recvPliCount = report.pliCount;
                    if (report.framesPerSecond <= standard.freezeFrameRate) {
                        _this._recvCountFreezeTimes += 1;
                        _this._totalfreezeFrame += report.framesPerSecond;
                    }
                }
            }
        });
        var audioMimeType = this._mapCodecId.get(this._audioCodecId);
        var videoMimeType = this._mapCodecId.get(this._videoCodecId);
        if (this._direction === 'send') {
            this._audioSendCodecType = audioMimeType === null || audioMimeType === void 0 ? void 0 : audioMimeType.split('/')[1];
            this._videoSendCodecType = videoMimeType === null || videoMimeType === void 0 ? void 0 : videoMimeType.split('/')[1];
        }
        else {
            this._audioRecvCodecType = audioMimeType === null || audioMimeType === void 0 ? void 0 : audioMimeType.split('/')[1];
            this._videoRecvCodecType = videoMimeType === null || videoMimeType === void 0 ? void 0 : videoMimeType.split('/')[1];
            this._audioTransportDelay = this._currentRoundTripTime / 2; //rtt/2
            this._videoTransportDelay = this._currentRoundTripTime / 2;
            this._audioReceiveDelay = (this._audioTransportDelay + this._audioJitterDelay); // ms  // rtt/2 + jitter
            this._videoReceiveDelay = (this._videoTransportDelay + this._videoJitterDelay); // ms
        }
    };
    pcStats.prototype._calculateTotalIndex = function () {
        if (this._direction === 'send') {
            this._sendTotalDuration = (this._endTime - this._startTime) * 0.001;
            this._sendTotalFreezeTime = this._sendCountFreezeTimes * this._interval / 1000;
        }
        else {
            this._recvVideoTotalDuration = (this._endTime - this._startTime) * 0.001;
            this._audioFreezeRate = this._totalAudioFreezeTimes / this._totalAudioRecvTimes;
            this._renderFrameRate = this._totalRenderFrame / (this._interval * 0.001);
            this._decodeFrameRate = this._totalDecodeFrame / (this._interval * 0.001); //framesDecoded
            this._recvAudioTotalFreezeTime = this._totalAudioFreezeTimes * this._interval * 0.001;
            this._recvVideoTotalFreezeTime = this._recvCountFreezeTimes * this._interval * 0.001;
            this._videoFreezeRate = this._totalfreezeFrame / this._totalRecvFrameRate;
        }
    };
    pcStats.prototype._calculateKBitsPerSecond = function (bytes) {
        // (byte * 8 / 1000 ) / (interval(ms) / 1000)
        return Math.round((bytes * 0.008) / (this._interval * 0.001)); // 单位：kbp/s
    };
    pcStats.prototype._calcuatePacketsLostRatio = function (packetsLost, packetsReceived) {
        if (packetsLost === 0 && packetsReceived === 0) {
            return 0;
        }
        return packetsLost / (packetsLost + packetsReceived); // 范围：[0-1]
    };
    pcStats.prototype._calculatePacketsPerSecond = function (packets, interval) {
        return (packets) / (interval * 0.001); // 单位：packet/s
    };
    pcStats.prototype._calcuateFramesPerSecond = function (frames, interval) {
        return Math.round((frames) / (interval * 0.001)); // 单位：frame/s
    };
    return pcStats;
}());
exports.pcStats = pcStats;


/***/ }),

/***/ "./src/web/log/Log.ts":
/*!****************************!*\
  !*** ./src/web/log/Log.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Log = void 0;
/**
 * 日志针对不同环境打印不同格式 dev: 不做格式转换; test 和 prod 需要做格式转换
 * 日志等级 0: debug 1: info 2: warning 3: error 4: none
 * 上报日志格式 this._logger.report(key<string>, value<string|object|array>)
 * 是否开始上传日志: enableLogUpload / disableLogUpload
 * @class Log
 */
var config_1 = __webpack_require__(/*! ../../../config */ "./config.ts");
var serviceAPI_1 = __webpack_require__(/*! ../service/serviceAPI */ "./src/web/service/serviceAPI.ts");
var Log = /** @class */ (function () {
    function Log(options) {
        this._logLevel = 0;
        this._LOGLEVELARR = ['debug', 'info', 'warn', 'error', 'report'];
        this._appId = '';
        this._userId = '';
        this._uploadMsgArr = [];
        this._reportTime = 5000;
        this._reportHandler = 0;
        this.debug = null;
        this.info = null;
        this.warn = null;
        this.error = null;
        this.report = null;
        this._appId = options.appId;
        this._userId = options.userId;
        this.debug = this.proxyConsole.bind(this, 'debug');
        this.info = this.proxyConsole.bind(this, 'info');
        this.warn = this.proxyConsole.bind(this, 'warn');
        this.error = this.proxyConsole.bind(this, 'error');
        this.report = this.proxyConsole.bind(this, 'report');
    }
    Log.prototype.setLogLevel = function (level) {
        this._logLevel = level;
    };
    Log.prototype.enableLogUpload = function () {
        // 测试阶段
        // if (ENV != 'development') {
        this.startIntervalUploadLog();
        // }
    };
    Log.prototype.disableLogUpload = function () {
        if (this._reportHandler) {
            clearTimeout(this._reportHandler);
        }
    };
    // private recursiveArgs(args: any) {
    // 	let content: any = [];
    // 	if (typeof args == 'string') {
    // 		content.push(args);
    // 	} else if (isMap(args)) {
    // 		content.push([...args]);
    // 	} else if (isArray(args)) {
    // 		for (const item of args) {
    // 			if (!isArray(item) && typeof item == 'object') {
    // 				content.push(this.recursiveArgs(item));
    // 			} else {
    // 				content.push(item);
    // 			}
    // 		}
    // 	} else if (typeof args == 'object') {
    // 		for (const prop in args) {
    // 			if (args.hasOwnProperty(prop)) {
    // 				if (typeof args[prop] == 'object') {
    // 					content.push(`{${prop}: ${this.recursiveArgs(args[prop])}}`);
    // 				} else {
    // 					content.push(`{${prop}: ${args[prop]}}`);
    // 				}
    // 			}
    // 		}
    // 	}
    // 	return content;
    // }
    /*
    * 针对特定格式转换 [time, string, [string|array|object]]
    */
    Log.prototype.formatArgs = function (args, type) {
        var msgObj = {
            time: args[0]
        };
        if (typeof args[1] !== 'string') {
            throw new Error('lack of keyword.');
        }
        var reportKey = args[1];
        var data = args[2];
        if (data) {
            if (typeof data === 'string') {
                msgObj[reportKey] = data;
            }
            else if (typeof data === 'object') {
                msgObj[reportKey] = data;
            }
        }
        else {
            msgObj.msg = reportKey;
        }
        if (type == 'report') {
            this._uploadMsgArr.push(JSON.stringify(msgObj));
        }
        return msgObj;
    };
    Log.prototype.startIntervalUploadLog = function () {
        var _this = this;
        // console.log('uploadLog interval');
        if (this._uploadMsgArr.length !== 0) {
            serviceAPI_1.uploadLog({
                appId: this._appId,
                userId: this._userId,
                message: this._uploadMsgArr
            }).then(function (result) {
                if (result.code === 0) {
                    _this._uploadMsgArr = [];
                }
                else {
                    throw new Error('report log error.');
                }
            }, function (reason) {
                throw new Error('report log error.');
            });
        }
        this._reportHandler = setTimeout(this.startIntervalUploadLog.bind(this), this._reportTime);
    };
    Log.prototype.proxyConsole = function (type) {
        var args = Array.prototype.slice.call(arguments);
        args.shift();
        args.unshift(this.dateFormat());
        // dev 环境不做转义，增加可读性
        if (config_1.ENV == 'development') {
            this._LOGLEVELARR.push('log');
        }
        var printLogLevel = this._LOGLEVELARR.slice(this._logLevel);
        if (this._logLevel == 4) {
            printLogLevel = ['report', 'info'];
        }
        if (printLogLevel.indexOf(type) != -1) {
            switch (type) {
                case 'report':
                    this.formatArgs(args, 'report');
                    break;
                case 'log':
                    console.log.apply(null, __spreadArray([''], __read(args)));
                    break;
                case 'debug':
                    console.info.call(null, JSON.stringify(this.formatArgs(args)));
                    break;
                case 'info':
                    if (this._logLevel == 4) {
                        this.formatArgs(args, 'report');
                    }
                    else {
                        console.info.call(null, "%c" + JSON.stringify(this.formatArgs(args, 'report')), 'color: #311078');
                    }
                    break;
                case 'warn':
                    console.warn.apply(null, __spreadArray([''], __read(args)));
                    break;
                case 'error':
                    console.error.apply(null, __spreadArray([''], __read(args)));
                    break;
            }
        }
    };
    Log.prototype.dateFormat = function () {
        var date = new Date();
        var o = {
            "y": date.getFullYear(),
            "M": date.getMonth() + 1,
            "d": date.getDate(),
            "h": date.getHours(),
            "m": date.getMinutes(),
            "s": date.getSeconds(),
            "S": date.getMilliseconds()
        };
        return o.y + "-" + o.M + "-" + o.d + " " + o.h + ":" + o.m + ":" + o.s + "." + o.S;
    };
    return Log;
}());
exports.Log = Log;


/***/ }),

/***/ "./src/web/log/logger.ts":
/*!*******************************!*\
  !*** ./src/web/log/logger.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.generateLoggerInstance = exports.logger = void 0;
var Log_1 = __webpack_require__(/*! ./Log */ "./src/web/log/Log.ts");
exports.logger = {};
function generateLoggerInstance(params) {
    var instance = new Log_1.Log(params);
    Object.defineProperty(exports.logger, 'collect', {
        value: instance,
        writable: false,
        enumerable: false,
        configurable: true
    });
}
exports.generateLoggerInstance = generateLoggerInstance;


/***/ }),

/***/ "./src/web/media/MediaDeviceController.ts":
/*!************************************************!*\
  !*** ./src/web/media/MediaDeviceController.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
var logger_1 = __webpack_require__(/*! ../log/logger */ "./src/web/log/logger.ts");
var MediaDeviceKind;
(function (MediaDeviceKind) {
    MediaDeviceKind["MICROPHONE"] = "audioinput";
    MediaDeviceKind["SPEAKER"] = "audiooutput";
    MediaDeviceKind["CAMERA"] = "videoinput";
})(MediaDeviceKind || (MediaDeviceKind = {}));
var MediaController = /** @class */ (function () {
    function MediaController(options) {
        this._currentStream = {};
        this._userId = '';
        this._mapStreamIdMediastream = new Map();
        this._logger = null;
        this._userId = options.userId;
        this._logger = logger_1.logger.collect;
    }
    MediaController.enumerateDevices = function (onSuccess, onFailed) {
        return __awaiter(this, void 0, void 0, function () {
            var devices, microphones, speakers, cameras, devices_1, devices_1_1, device, e_1;
            var e_2, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, navigator.mediaDevices.enumerateDevices()];
                    case 1:
                        devices = _b.sent();
                        microphones = [];
                        speakers = [];
                        cameras = [];
                        try {
                            for (devices_1 = __values(devices), devices_1_1 = devices_1.next(); !devices_1_1.done; devices_1_1 = devices_1.next()) {
                                device = devices_1_1.value;
                                switch (device.kind) {
                                    case MediaDeviceKind.MICROPHONE:
                                        microphones.push(device);
                                        break;
                                    case MediaDeviceKind.SPEAKER:
                                        speakers.push(device);
                                        break;
                                    case MediaDeviceKind.CAMERA:
                                        cameras.push(device);
                                        break;
                                    default: break;
                                }
                            }
                        }
                        catch (e_2_1) { e_2 = { error: e_2_1 }; }
                        finally {
                            try {
                                if (devices_1_1 && !devices_1_1.done && (_a = devices_1.return)) _a.call(devices_1);
                            }
                            finally { if (e_2) throw e_2.error; }
                        }
                        if (typeof onSuccess === "function") {
                            onSuccess({ microphones: microphones, speakers: speakers, cameras: cameras });
                        }
                        return [2 /*return*/, Promise.resolve({ microphones: microphones, speakers: speakers, cameras: cameras })];
                    case 2:
                        e_1 = _b.sent();
                        if (typeof onFailed === "function") {
                            onFailed(e_1);
                        }
                        return [2 /*return*/, Promise.reject(e_1)];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    MediaController.prototype.getLocalMediaStream = function (type, constraints) {
        return __awaiter(this, void 0, void 0, function () {
            var mediaDevices, displayStream, cameraStream, systemAudioTrack, _a, _b, track, _c, _d, e_3, stream;
            var e_4, _e;
            return __generator(this, function (_f) {
                switch (_f.label) {
                    case 0:
                        this._logger.debug('local mediastream constraints', constraints);
                        _f.label = 1;
                    case 1:
                        _f.trys.push([1, 7, , 11]);
                        if (!(type == 'display')) return [3 /*break*/, 4];
                        mediaDevices = navigator.mediaDevices;
                        return [4 /*yield*/, mediaDevices.getDisplayMedia(constraints)];
                    case 2:
                        displayStream = _f.sent();
                        return [4 /*yield*/, navigator.mediaDevices.getUserMedia({ audio: true })];
                    case 3:
                        cameraStream = _f.sent();
                        systemAudioTrack = cameraStream.getAudioTracks()[0];
                        if (constraints && !constraints.audio) {
                            systemAudioTrack.enabled = false; // 兼容现服务端获取candidate错误
                        }
                        try {
                            // 部分浏览器display可自采集声音轨
                            for (_a = __values(displayStream.getTracks()), _b = _a.next(); !_b.done; _b = _a.next()) {
                                track = _b.value;
                                this._logger.report('displayStream has audio track', track);
                                if (track.kind == 'audio') {
                                    track.stop();
                                    displayStream.removeTrack(track);
                                }
                            }
                        }
                        catch (e_4_1) { e_4 = { error: e_4_1 }; }
                        finally {
                            try {
                                if (_b && !_b.done && (_e = _a.return)) _e.call(_a);
                            }
                            finally { if (e_4) throw e_4.error; }
                        }
                        ;
                        displayStream.addTrack(systemAudioTrack);
                        return [2 /*return*/, Promise.resolve(displayStream)];
                    case 4:
                        _d = (_c = Promise).resolve;
                        return [4 /*yield*/, navigator.mediaDevices.getUserMedia(constraints)];
                    case 5: return [2 /*return*/, _d.apply(_c, [_f.sent()])];
                    case 6: return [3 /*break*/, 11];
                    case 7:
                        e_3 = _f.sent();
                        if (!(e_3.constraint && type == 'camera')) return [3 /*break*/, 9];
                        this._logger.report('getUserMedia error', e_3);
                        return [4 /*yield*/, navigator.mediaDevices.getUserMedia({ audio: true, video: true })];
                    case 8:
                        stream = _f.sent();
                        return [2 /*return*/, Promise.resolve(stream)];
                    case 9: return [2 /*return*/, Promise.reject(e_3)];
                    case 10: return [3 /*break*/, 11];
                    case 11: return [2 /*return*/];
                }
            });
        });
    };
    MediaController.prototype.destroyLocalMediaStream = function (mediastream) {
        var e_5, _a;
        try {
            for (var _b = __values(mediastream.getTracks()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var track = _c.value;
                track.stop();
                mediastream.removeTrack(track);
            }
        }
        catch (e_5_1) { e_5 = { error: e_5_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_5) throw e_5.error; }
        }
        ;
    };
    MediaController.prototype.replaceTrack = function (mediastream, track) {
        var e_6, _a;
        try {
            for (var _b = __values(mediastream.getTracks()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var item = _c.value;
                if (item.kind == track.kind) {
                    item.stop();
                    mediastream.removeTrack(item);
                }
            }
        }
        catch (e_6_1) { e_6 = { error: e_6_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_6) throw e_6.error; }
        }
        mediastream.addTrack(track);
        return mediastream;
    };
    // public saveCurrentStream(streamId: string, mediastream: MediaStream) {
    //     this._mapStreamIdMediastream.set(streamId, mediastream);
    // }
    // public deleteCurrentStream(streamId: string) {
    //     this._mapStreamIdMediastream.delete(streamId);
    // }
    MediaController.prototype.enumerateDevices = function (onSuccess, onFailed) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, MediaController.enumerateDevices(onSuccess, onFailed)];
            });
        });
    };
    return MediaController;
}());
exports.default = MediaController;


/***/ }),

/***/ "./src/web/media/Record.ts":
/*!*********************************!*\
  !*** ./src/web/media/Record.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.RecordMediastream = void 0;
var RecordMediastream = /** @class */ (function () {
    function RecordMediastream(mediastream, options) {
        var _this = this;
        this._mimeType = '';
        this._currentMediaStream = null;
        this._mediaRecordInstance = null;
        this._recordedBlobs = [];
        this.handleDataAvailable = function (event) {
            if (event.data && event.data.size > 0) {
                _this._recordedBlobs.push(event.data);
            }
        };
        this._currentMediaStream = mediastream;
        this._mimeType = options.mimeType + ";" + options.codec;
        this._mediaRecordInstance = new MediaRecorder(this._currentMediaStream, {
            mimeType: this._mimeType
        });
        this._mediaRecordInstance.ondataavailable = this.handleDataAvailable;
    }
    RecordMediastream.prototype.isSupport = function () {
        if (!MediaRecorder.isTypeSupported(this._mimeType)) {
            console.error(this._mimeType + " is not supported");
            return false;
        }
        else {
            return true;
        }
    };
    RecordMediastream.prototype.start = function () {
        if (!this._mediaRecordInstance) {
            throw new Error('mediaRecorder is not supported.');
        }
        this._mediaRecordInstance.start();
    };
    RecordMediastream.prototype.stop = function () {
        if (!this._mediaRecordInstance) {
            throw new Error('mediaRecorder is not supported.');
        }
        this._mediaRecordInstance.stop();
    };
    RecordMediastream.prototype.download = function () {
        return new Blob(this._recordedBlobs, { type: this._mimeType });
    };
    return RecordMediastream;
}());
exports.RecordMediastream = RecordMediastream;


/***/ }),

/***/ "./src/web/service/serviceAPI.ts":
/*!***************************************!*\
  !*** ./src/web/service/serviceAPI.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadLog = exports.getAuthEdgeList = exports.getEdgeList = exports.getUserSource = exports.uploadSensorsStats = exports.numberVersion = void 0;
var bowser = __importStar(__webpack_require__(/*! bowser */ "./node_modules/bowser/es5.js"));
var defaultConfig_1 = __webpack_require__(/*! ../../common/defaultConfig */ "./src/common/defaultConfig.ts");
var config_1 = __webpack_require__(/*! ../../../config */ "./config.ts");
var ipInfo = null;
var currentAppId = '';
var currentUserId = '';
function fetchData(params) {
    return __awaiter(this, void 0, void 0, function () {
        var fetchOptions, result, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!params.method) {
                        params.method = 'GET';
                    }
                    if (!params.data) {
                        fetchOptions = {
                            method: params.method
                        };
                    }
                    else {
                        if (typeof params.data !== 'object') {
                            throw new Error('data must be an object.');
                        }
                        if (params.data.headers) {
                            fetchOptions = {
                                body: JSON.stringify(params.data),
                                method: params.method,
                                headers: params.data.headers
                            };
                        }
                        else {
                            fetchOptions = {
                                body: JSON.stringify(params.data),
                                method: params.method
                            };
                        }
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, fetch(params.url, fetchOptions)];
                case 2:
                    result = _a.sent();
                    return [4 /*yield*/, result.json()];
                case 3: return [2 /*return*/, _a.sent()];
                case 4:
                    e_1 = _a.sent();
                    throw new Error(e_1);
                case 5: return [2 /*return*/];
            }
        });
    });
}
function numberVersion() {
    var versionArr = [];
    config_1.version.split('.').forEach(function (value) {
        if (value.length <= 1) {
            value = value + '0';
        }
        versionArr.push(value);
    });
    return parseInt(versionArr.join('') + '0');
}
exports.numberVersion = numberVersion;
function getSensorCommonData() {
    var sdkVersion = numberVersion();
    var netType = 0;
    if (navigator.connection || navigator.mozConnection || navigator.webkitConnection) {
        var connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
        var type = connection.type;
        netType = type == 'wifi' ? 1 : type == '2g' ? 2 : type == '3g' ? 3 : type == '4g' ? 4 : type == '5g' ? 5 : 0;
    }
    var _a = bowser.parse(window.navigator.userAgent), browser = _a.browser, engine = _a.engine, os = _a.os, platform = _a.platform;
    // console.log('getBrowser info::', browser, engine, os, platform);
    return {
        os_type: platform.type,
        brand: platform.vendor,
        model: "" + browser.name + browser.version,
        system_version: os.version,
        system_name: os.name,
        system_versionName: os.versionName,
        app_version: browser.version,
        app_engine: engine.name,
        sdk_version: config_1.version,
        sdk_version_int: sdkVersion,
        net_type: netType
    };
}
function uploadSensorsStats(customData) {
    return __awaiter(this, void 0, void 0, function () {
        var commonData, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    commonData = getSensorCommonData();
                    return [4 /*yield*/, fetchData({
                            url: defaultConfig_1.constantConfig.STATSURL + "/data_collect",
                            method: 'POST',
                            data: __assign(__assign(__assign({}, commonData), customData), { event_time: Math.round(new Date().getTime() / 1000), time: new Date().getTime() })
                        })];
                case 1:
                    result = _a.sent();
                    if (result.status !== 200) {
                        throw new Error('sensors stats error.');
                    }
                    return [2 /*return*/];
            }
        });
    });
}
exports.uploadSensorsStats = uploadSensorsStats;
function getUserSource() {
    var platform = bowser.parse(window.navigator.userAgent).platform;
    return platform.type;
}
exports.getUserSource = getUserSource;
function getEdgeList(params) {
    return __awaiter(this, void 0, void 0, function () {
        var currentConfig, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    currentConfig = defaultConfig_1.envConfig[params.projectName][params.env];
                    if (!(ipInfo == void 0)) return [3 /*break*/, 2];
                    return [4 /*yield*/, getClientIp()];
                case 1:
                    ipInfo = _a.sent();
                    _a.label = 2;
                case 2: return [4 /*yield*/, fetchData({
                        url: currentConfig.CENTERURL + "/api/v1/join",
                        method: 'POST',
                        data: {
                            app_id: params.appId,
                            user_id: params.userId,
                            client_ip: ipInfo && ipInfo.client_ip,
                            proto: 'https',
                            role: '',
                            room_id: params.roomId,
                            user_source: 'pc_center',
                        },
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    })];
                case 3:
                    result = _a.sent();
                    if (result.code !== 200) {
                        throw new Error('get EdgeList failed.');
                    }
                    return [2 /*return*/, result.data.edge_urls];
            }
        });
    });
}
exports.getEdgeList = getEdgeList;
function createNonce() {
    var s = [];
    var hexDigits = "0123456789abcdef";
    for (var i = 0; i < 36; i++) {
        s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
    }
    s[14] = "4";
    s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);
    s[8] = s[13] = s[18] = s[23] = "-";
    var uuid = s.join("");
    return uuid;
}
function getClientIp() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetchData({
                        url: 'https://geoip.linkv.fun/ip_geo',
                        method: 'GET'
                    })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
function getAuthEdgeList(_a) {
    var appId = _a.appId, auth = _a.auth, expire = _a.expire, projectName = _a.projectName, env = _a.env;
    return __awaiter(this, void 0, void 0, function () {
        var currentConfig, result;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    currentConfig = defaultConfig_1.envConfig[projectName][env];
                    if (!(ipInfo == void 0)) return [3 /*break*/, 2];
                    return [4 /*yield*/, getClientIp()];
                case 1:
                    ipInfo = _b.sent();
                    _b.label = 2;
                case 2: return [4 /*yield*/, fetchData({
                        url: currentConfig.CENTERURL + "/api/v1/auth",
                        method: 'POST',
                        data: __assign({ app_id: appId, auth: auth, timestamp: "" + Math.round((new Date().getTime() / 1000)), expire_ts: expire, user_source: 'pc_center', nonce: createNonce() }, ipInfo)
                    })];
                case 3:
                    result = _b.sent();
                    if (result.code !== 200) {
                        throw new Error('get EdgeList failed.');
                    }
                    return [2 /*return*/, result.data.edge_urls];
            }
        });
    });
}
exports.getAuthEdgeList = getAuthEdgeList;
/*
* 上传日志https接口
*/
function uploadLog(_a) {
    var appId = _a.appId, userId = _a.userId, message = _a.message;
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!(ipInfo == void 0)) return [3 /*break*/, 2];
                    return [4 /*yield*/, getClientIp()];
                case 1:
                    ipInfo = _b.sent();
                    _b.label = 2;
                case 2:
                    if (!appId) {
                        if (!currentAppId) {
                            throw new Error('appId can not be empty.');
                        }
                    }
                    else {
                        currentAppId = appId;
                    }
                    if (!userId) {
                        if (!currentUserId) {
                            throw new Error('userId can not be empty.');
                        }
                    }
                    else {
                        currentUserId = userId;
                    }
                    return [4 /*yield*/, fetchData({
                            url: defaultConfig_1.constantConfig.LOGREPORT + "/v1/log/report",
                            method: 'POST',
                            data: {
                                appid: currentAppId,
                                userid: currentUserId,
                                country: ipInfo && ipInfo.country_code,
                                message: message,
                                timestamp: Math.round(new Date().getTime() / 1000)
                            }
                        })];
                case 3: return [2 /*return*/, _b.sent()];
            }
        });
    });
}
exports.uploadLog = uploadLog;


/***/ }),

/***/ "./src/web/signal/Index.ts":
/*!*********************************!*\
  !*** ./src/web/signal/Index.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var SignalHandling_1 = __importDefault(__webpack_require__(/*! ./SignalHandling */ "./src/web/signal/SignalHandling.ts"));
var Singal = /** @class */ (function (_super) {
    __extends(Singal, _super);
    function Singal(options) {
        return _super.call(this, options) || this;
    }
    return Singal;
}(SignalHandling_1.default));
exports.default = Singal;


/***/ }),

/***/ "./src/web/signal/SignalHandling.ts":
/*!******************************************!*\
  !*** ./src/web/signal/SignalHandling.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var signalConnect_1 = __importDefault(__webpack_require__(/*! ./signalConnect */ "./src/web/signal/signalConnect.ts"));
var errorCode_1 = __webpack_require__(/*! ../../common/errorCode */ "./src/common/errorCode.ts");
var utils_1 = __webpack_require__(/*! ../utils/utils */ "./src/web/utils/utils.ts");
var serviceAPI_1 = __webpack_require__(/*! ../service/serviceAPI */ "./src/web/service/serviceAPI.ts");
var SignalHandling = /** @class */ (function (_super) {
    __extends(SignalHandling, _super);
    function SignalHandling(options) {
        var _this = _super.call(this, options) || this;
        _this._timer = null;
        _this._timeouter = null;
        _this.signalTimeout = 90;
        _this._initJoinRoomParams = null;
        _this._isKick = false;
        _this._succeed = false;
        _this._roomOnlineList = [];
        _this._offerPeerId = 0;
        _this._connectState = 0;
        _this._role = 0;
        _this._joinRoomStartTime = 0;
        _this._portCandidateObj = {};
        _this._MapStreamIdCandidatePort = new Map();
        _this._MapStreamIdAnswerSdp = new Map();
        _this._iceConnectionStreamIdMap = new Map();
        _this._isExecAnswersdp = new Map();
        _this.onJoinSuccess = function (message) {
            var e_1, _a, e_2, _b;
            _this._logger.info('receive joinSuccess msg', message);
            // 上报数据
            serviceAPI_1.uploadSensorsStats({
                app_id: _this._appId,
                code: message.code,
                event_type: 13,
                is_host: _this._role == 1 ? 1 : 0,
                log_type: "liveme_video_rtc_statistics",
                room_id: _this._roomId,
                self_user_id: _this._userId
            });
            if (!message || message.code == 500) {
                _this.leaveRoom();
                _this.emit('@disconnect', errorCode_1.errCode.get('wsDisconnect'));
                return;
            }
            else if (message.code !== 200) {
                _this.resetSignalState('joinSuccess'); //重连
            }
            else {
                var result = utils_1.formatKeyToHump(message);
                // 上报
                serviceAPI_1.uploadSensorsStats({
                    app_id: _this._appId,
                    connect_state: result.connectState,
                    edge_url: _this._currentEdgeUrl,
                    event_type: 1,
                    is_host: _this._role == 1 ? 1 : 0,
                    join_room_cost: new Date().getTime() - _this._joinRoomStartTime,
                    log_type: "liveme_video_rtc_room_event",
                    room_id: _this._roomId,
                    self_user_id: _this._userId,
                });
                _this._succeed = true;
                var connectState = result.connectState;
                // 判断重连
                if (connectState == 1) {
                    return;
                }
                if (result.participants && result.participants.length !== 0) {
                    _this._roomOnlineList = result.participants;
                }
                else {
                    _this.emit('@getjoinsucessresult', {
                        code: 200,
                        msg: []
                    });
                }
                var joinSuccessResult = [];
                var currentUserIdArr = [];
                try {
                    for (var _c = __values(_this._roomOnlineList), _d = _c.next(); !_d.done; _d = _c.next()) {
                        var item = _d.value;
                        currentUserIdArr.push(item.userId);
                        if (item.userId != _this._userId) {
                            joinSuccessResult.push({
                                streamId: item.userId,
                                userId: item.userId,
                                roomId: item.roomId
                            });
                        }
                        if (item.userId !== _this._userId &&
                            !_this._iceConnectionStreamIdMap.get(item.userId) &&
                            (connectState == 2 || connectState == 3)) {
                            _this.emit('@streamupdate', {
                                code: 1,
                                streamList: [item]
                            });
                        }
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
                if (connectState == 2 || connectState == 3) {
                    try {
                        for (var _e = __values(_this._iceConnectionStreamIdMap), _f = _e.next(); !_f.done; _f = _e.next()) {
                            var _g = __read(_f.value, 2), key = _g[0], value = _g[1];
                            if (key !== _this._userId && currentUserIdArr.indexOf(key) == -1) {
                                _this.emit('@streamupdate', {
                                    code: 0,
                                    streamList: [{
                                            streamId: key,
                                            userId: key,
                                            roomId: _this._roomId
                                        }]
                                });
                            }
                            else {
                                _this.reconnection(key);
                            }
                        }
                    }
                    catch (e_2_1) { e_2 = { error: e_2_1 }; }
                    finally {
                        try {
                            if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                        }
                        finally { if (e_2) throw e_2.error; }
                    }
                }
                _this.emit('@getjoinsucessresult', {
                    code: 200,
                    msg: joinSuccessResult
                });
                _this._logger.info('login result', joinSuccessResult);
            }
        };
        _this.onAddParticipants = function (message) {
            var e_3, _a;
            var result = utils_1.formatKeyToHump(message);
            var responseMsg = [];
            result.participants.forEach(function (value, key) {
                value.streamId = value.userId;
                responseMsg.push(value);
                // responseMsg[key] = value;
                // responseMsg[key].streamId = value.userId
            });
            var tempArr = _this._roomOnlineList.concat(responseMsg);
            var tempObject = {};
            try {
                for (var tempArr_1 = __values(tempArr), tempArr_1_1 = tempArr_1.next(); !tempArr_1_1.done; tempArr_1_1 = tempArr_1.next()) {
                    var tempItem = tempArr_1_1.value;
                    tempObject[tempItem.userId] = tempItem;
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (tempArr_1_1 && !tempArr_1_1.done && (_a = tempArr_1.return)) _a.call(tempArr_1);
                }
                finally { if (e_3) throw e_3.error; }
            }
            _this._roomOnlineList = [];
            for (var item in tempObject) {
                _this._roomOnlineList.push(tempObject[item]);
            }
            _this.emit('@streamupdate', {
                code: 1,
                streamList: responseMsg
            });
            result = null;
            _this._logger.report('addparticipant message:', responseMsg);
        };
        _this.onUpdateParticipant = function (message) {
            var result = utils_1.formatKeyToHump(message);
            _this._logger.report('updateparticipant message:', result);
            _this._isExecAnswersdp.delete(result.userId);
            _this.reconnection(result.userId);
            result = null;
        };
        _this.onRemoveParticipant = function (message) {
            var result = utils_1.formatKeyToHump(message);
            _this._logger.report('removeparticipant message:', result);
            _this.emit('@streamupdate', {
                code: 0,
                streamList: [{
                        userId: result.userId,
                        streamId: result.userId,
                        roomId: result.roomId
                    }]
            });
            result = null;
        };
        _this.onKickParticipant = function (message) {
            _this._isKick = true;
            var result = utils_1.formatKeyToHump(message);
            _this._logger.report('updateparticipant message:', result);
            _this.emit('@kickout', result);
            result = null;
        };
        return _this;
    }
    SignalHandling.prototype.init = function (initParams) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this._initJoinRoomParams = initParams;
                        return [4 /*yield*/, this.connect({
                                auth: initParams.auth,
                                expire: initParams.expire
                            })];
                    case 1:
                        _a.sent();
                        this.wsEvents();
                        return [2 /*return*/];
                }
            });
        });
    };
    SignalHandling.prototype.logout = function () {
        clearTimeout(this._timer);
        clearTimeout(this._timeouter);
        this.leaveRoom();
    };
    SignalHandling.prototype.getNewEdgeList = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, serviceAPI_1.getEdgeList({
                            appId: this._appId,
                            roomId: this._roomId,
                            userId: this._userId,
                            env: this._env,
                            projectName: this._projectName
                        })];
                    case 1:
                        result = _a.sent();
                        this._edgeUrls = Array.from(new Set(__spreadArray(__spreadArray([], __read(this._edgeUrls)), __read(result))));
                        return [2 /*return*/];
                }
            });
        });
    };
    SignalHandling.prototype.errorFun = function (source) {
        switch (source) {
            // case 'answerSDP':
            //     this._emit('warn', { code: 500, msg: 'answerSDP error.' });
            //     break;
            case 'joinSuccess':
                this.emit('@getjoinsucessresult', {
                    code: 400,
                    msg: errorCode_1.errCode.get('wsDisconnect')
                });
                break;
        }
    };
    SignalHandling.prototype.signalReconnect = function (source) {
        var _this = this;
        // console.error('reconnect:::', this._retryTimes, this._maxRetryTimes, this._currentEdgeUrl, this._edgeUrls);
        if (!this._timeouter) {
            this._timeouter = setTimeout(function () {
                clearTimeout(_this._timer);
                clearTimeout(_this._timeouter);
                if (source) {
                    _this.errorFun(source);
                }
                else {
                    _this.changeVendor();
                }
                return;
            }, this.signalTimeout * 1000);
        }
        this.leaveRoom();
        this._timer = setTimeout(function () {
            var arrlength = Math.ceil(_this.signalTimeout / (2 * 4));
            if (_this._edgeUrls.length < arrlength) {
                _this.getNewEdgeList();
            }
            if (_this._retryTimes >= _this._maxRetryTimes) {
                _this._retryTimes = 0;
                if (_this._edgeUrls.length > 1) {
                    _this._edgeListIndex++;
                }
                _this._currentEdgeUrl = _this._edgeUrls[_this._edgeListIndex];
                _this._initJoinRoomParams && _this.init(_this._initJoinRoomParams);
                if (_this._succeed) {
                    _this._connectState = 2;
                } // 切换signal
                if (_this._edgeUrls.length > 1 && ((_this._edgeListIndex + 1) >= _this._edgeUrls.length)) {
                    _this._edgeListIndex = -1;
                }
            }
            else if (_this._retryTimes < _this._maxRetryTimes) {
                _this._initJoinRoomParams && _this.init(_this._initJoinRoomParams);
                if (_this._succeed) {
                    _this._connectState = 1;
                }
                _this._retryTimes++;
            }
        }, 2 * 1000);
    };
    SignalHandling.prototype.resetSignalState = function (source) {
        clearTimeout(this._timer);
        this.signalReconnect(source);
    };
    SignalHandling.prototype.sendMessage = function (event, message) {
        var sendMsg = utils_1.formatAppId(message, this._appId);
        this._ws && this._ws.emit(event, sendMsg);
        sendMsg = null;
    };
    SignalHandling.prototype.wsEvents = function () {
        var _this = this;
        if (!this._ws) {
            throw new Error('websocket connect failed.');
        }
        this._ws.on('connect', function () {
            _this._logger.info('signal connect success.');
            _this._retryTimes = 0;
            clearTimeout(_this._timer);
            clearTimeout(_this._timeouter);
            _this.onConnect();
        });
        this._ws.on('connect_error', function (error) {
            _this._logger.warn('signal connect_error', error);
            _this.resetSignalState();
        });
        this._ws.on('connect_timeout', function (error) {
            _this._logger.warn('signal connect_timeout', error);
            _this.resetSignalState();
        });
        this._ws.on('error', function (error) {
            _this._logger.warn('signal error', error);
            _this.resetSignalState();
        });
        this._ws.on('disconnect', function (reason) {
            _this._logger.debug('disconnect reason', reason);
            if (reason === 'io client disconnect') {
                clearTimeout(_this._timer);
                clearTimeout(_this._timeouter);
                return;
            }
            else {
                _this._logger.info('signal disconnect', reason);
                _this.resetSignalState();
            }
        });
        this._ws.on('close', function () {
            _this._logger.debug('signal status: close');
        });
        this._ws.on('joinSuccess', this.onJoinSuccess);
        this._ws.on('addParticipants', this.onAddParticipants);
        this._ws.on('updateParticipant', this.onUpdateParticipant);
        this._ws.on('removeParticipant', this.onRemoveParticipant);
        this._ws.on('kick', this.onKickParticipant);
    };
    SignalHandling.prototype.onConnect = function () {
        return __awaiter(this, void 0, void 0, function () {
            var iceMapSize, message;
            return __generator(this, function (_a) {
                if (!this._initJoinRoomParams) {
                    throw new Error('lack of joinroom params.');
                }
                iceMapSize = this._iceConnectionStreamIdMap.size;
                switch (iceMapSize) {
                    case 0:
                        this._syncRole = 0;
                        break;
                    case 1:
                        if (this._iceConnectionStreamIdMap.get(this._userId)) {
                            this._syncRole = 2;
                        }
                        else {
                            this._syncRole = 1;
                        }
                        break;
                    default:
                        if (this._iceConnectionStreamIdMap.get(this._userId)) {
                            this._syncRole = 3;
                        }
                        else {
                            this._syncRole = 1;
                        }
                }
                message = {
                    c_stream_id: "" + new Date().getTime(),
                    app_id: this._appId,
                    connect_state: this._connectState,
                    room_id: this._roomId,
                    user_id: this._userId,
                    host: this._initJoinRoomParams.role == 1 ? 1 : 0,
                    role: this._initJoinRoomParams.role == 2 ? 'viewer_cdn' : 'participant',
                    show: 'all',
                    user_source: serviceAPI_1.getUserSource(),
                    timestamp: new Date().getTime(),
                    sdk_version: serviceAPI_1.numberVersion(),
                    sync_role: this._syncRole,
                    app_package_name: this._appPackageName
                };
                this._role = this._initJoinRoomParams.role;
                // 上报
                serviceAPI_1.uploadSensorsStats({
                    app_id: this._appId,
                    room_id: this._roomId,
                    self_user_id: this._userId,
                    connect_state: this._connectState,
                    edge_url: this._currentEdgeUrl,
                    event_type: 0,
                    is_host: this._initJoinRoomParams.role == 1 ? 1 : 0,
                    join_room_cost: 0,
                    log_type: "liveme_video_rtc_room_event"
                });
                this._joinRoomStartTime = new Date().getTime();
                this.sendMessage('joinRoom', message);
                this._logger.info('send joinRoom msg', message);
                return [2 /*return*/];
            });
        });
    };
    SignalHandling.prototype.updateMixStream = function (mixStreamConfig) {
        var e_4, _a;
        // 修改 icconection 做断网重连
        var layoutArr = [];
        var layoutData = {
            auto_mix: 0,
            layout: layoutArr,
            mix_push_urls: [
                mixStreamConfig.outputUrl
            ],
            room_id: this._roomId,
            timestamp: new Date().getTime(),
            user_id: this._userId
        };
        layoutArr.push({
            layout_params: {
                bitrate: mixStreamConfig.outputBitrate,
                canvas_color: mixStreamConfig.outputBgColor,
                canvas_height: mixStreamConfig.outputHeight,
                canvas_image: mixStreamConfig.outputBgImage,
                canvas_width: mixStreamConfig.outputWidth,
                fps: mixStreamConfig.outputFps
            },
            session_id: "canvas"
        });
        var i = 1;
        try {
            for (var _b = __values(mixStreamConfig.streamList), _c = _b.next(); !_c.done; _c = _b.next()) {
                var item = _c.value;
                item.roomId = this._appId + "-" + item.roomId;
                item.streamId = this._appId + "-" + item.streamId;
                layoutArr.push({
                    layout_params: {
                        image_height: (item.bottom - item.top),
                        image_layer: i++,
                        image_width: (item.right - item.left),
                        location_x: item.left,
                        location_y: item.top
                    },
                    room_id: item.roomId ? item.roomId : this._roomId,
                    user_id: item.streamId
                });
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_4) throw e_4.error; }
        }
        // console.log('sendMixstreamParams:::', JSON.stringify(layoutData));
        this.sendMessage('mixStream', layoutData);
    };
    SignalHandling.prototype.stopMixStream = function () {
        this.sendMessage('mixStream', {
            room_id: this._roomId,
            timestamp: new Date().getTime(),
            user_id: this._userId
        });
    };
    SignalHandling.prototype.leaveRoom = function () {
        if (!this._ws) {
            this._logger.debug('websocket taskId is not exist.');
            return;
        }
        // 重置answersdp状态
        this._isExecAnswersdp.clear();
        this._portCandidateObj = {};
        if (!this._isKick) {
            this.sendMessage('leaveRoom', {
                room_id: this._roomId,
            });
        }
        //移除相关监听事件
        this.removeAllListeners('@disconnect');
        this.removeAllListeners('@getjoinsucessresult');
        this._ws.close();
        this._ws = null;
    };
    SignalHandling.prototype.stopPush = function (streamId) {
        this._isExecAnswersdp.delete(streamId);
        this.sendMessage('stopBeam', {
            room_id: this._roomId,
            user_id: this._userId,
            timestamp: new Date().getTime()
        });
    };
    SignalHandling.prototype.stopPlay = function (streamId) {
        this._isExecAnswersdp.delete(streamId);
        this.sendMessage('stop_play', {
            room_id: this._roomId,
            user_id: this._userId,
            timestamp: new Date().getTime(),
            play_user_id: streamId
        });
    };
    // 重新建立ice连接
    SignalHandling.prototype.reconnection = function (streamId) {
        this._logger.debug('reconnection', streamId);
        this.emit('@reconnection', {
            streamId: streamId,
            userId: streamId
        });
    };
    // send signal msg
    SignalHandling.prototype.sendLocalOfferSdp = function (_a) {
        var pullStreamId = _a.pullStreamId, pullStreamRoomId = _a.pullStreamRoomId, sdp = _a.sdp;
        this._offerPeerId += 1;
        this._iceConnectionStreamIdMap.set(pullStreamId, {
            offerPeerId: this._offerPeerId
        });
        var sendMsg = {
            peer_id: this._offerPeerId,
            offer_user_id: pullStreamId,
            offer_room_id: pullStreamRoomId,
            sdp_offer: sdp,
            timestamp: new Date().getTime(),
            room_id: this._roomId,
            user_id: this._userId,
            sdk_version: serviceAPI_1.numberVersion()
        };
        // 上报神策
        serviceAPI_1.uploadSensorsStats({
            app_id: this._appId,
            event_type: 8,
            log_type: "liveme_video_rtc_statistics",
            room_id: this._roomId,
            self_user_id: this._userId,
            user_id: pullStreamId
        });
        this.sendMessage('offerSDP', sendMsg);
        this._logger.report('send msg offerSDp', sendMsg);
        return this._offerPeerId;
    };
    SignalHandling.prototype.getCandidateArray = function (streamId) {
        var _this = this;
        if (!this._ws) {
            throw new Error('ws is not exist.');
        }
        var callback = function (res) {
            var result = utils_1.formatKeyToHump(res);
            var port = result.candidate.candidate.split(" ").slice(-3, -2)[0];
            _this._MapStreamIdCandidatePort.set(result.userId, port);
            if (_this._portCandidateObj[port]) {
                if (_this._portCandidateObj[port].length == 2) {
                    return;
                }
                var isExist_1 = false;
                _this._portCandidateObj[port].forEach(function (value, index, arr) {
                    if (value.sdpMLineIndex == result.candidate.sdpMLineIndex) {
                        isExist_1 = true;
                    }
                });
                if (!isExist_1) {
                    _this._portCandidateObj[port].push(result.candidate);
                }
            }
            else {
                _this._portCandidateObj[port] = [];
                _this._portCandidateObj[port].push(result.candidate);
            }
            if (result.userId == streamId) {
                var resultCandidate = _this._portCandidateObj[_this._MapStreamIdCandidatePort.get(streamId)];
                _this.emit("@getcandidate" + streamId, resultCandidate);
            }
            result = null;
        };
        this._ws.on('iceCandidate', callback);
    };
    SignalHandling.prototype.receiveAnswerSdp = function (streamId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (!_this._ws) {
                throw new Error('ws is not exist.');
            }
            ;
            var callback = function (message) {
                if (_this._isExecAnswersdp.get(streamId)) {
                    resolve({
                        code: 2,
                        msg: 'Repeated execute'
                    });
                    _this._ws.off('answerSDP', callback);
                    return;
                }
                else {
                    _this._isExecAnswersdp.set(streamId, true);
                }
                var result = utils_1.formatKeyToHump(message);
                // 上报神策
                serviceAPI_1.uploadSensorsStats({
                    app_id: _this._appId,
                    event_type: 9,
                    isSuccess: message.code == 200 ? 1 : 0,
                    log_type: "liveme_video_rtc_statistics",
                    room_id: _this._roomId,
                    self_user_id: _this._userId,
                    user_id: streamId
                });
                var currentIceConnection = _this._iceConnectionStreamIdMap.get(result.userId);
                if (!currentIceConnection) {
                    throw new Error('answersp streamId is not exist.');
                }
                if (result.peerId != currentIceConnection.offerPeerId) {
                    // return; 
                    resolve({
                        code: 0,
                        msg: 'peerId repeat'
                    });
                    return;
                }
                if (result.code != 200) {
                    resolve({
                        code: 0,
                        msg: 'answsdp error'
                    });
                }
                else {
                    _this._MapStreamIdAnswerSdp.set(result.userId, result.sdpAnswer);
                    if (streamId == result.userId && _this._MapStreamIdAnswerSdp.get(result.userId)) {
                        resolve({
                            peerId: result.peerId,
                            remoteAnswerSdp: _this._MapStreamIdAnswerSdp.get(result.userId)
                        });
                    }
                    _this._ws.off('answerSDP', callback);
                }
                result = null;
            };
            _this._ws.on('answerSDP', callback);
        });
    };
    SignalHandling.prototype.uploadStatsData = function (_a) {
        var crystalBall = _a.crystalBall, sensorData = _a.sensorData;
        sensorData.forEach(function (v) {
            // 上报神策
            serviceAPI_1.uploadSensorsStats(__assign(__assign({}, v), { log_type: "liveme_video_rtc_stream_heartbeat" }));
        });
        this.sendMessage("clientstatistics", {
            room_id: this._roomId,
            sdk_version: 1010000,
            user_id: this._userId,
            timestamp: new Date().getTime(),
            statistics: crystalBall
        });
    };
    return SignalHandling;
}(signalConnect_1.default));
exports.default = SignalHandling;


/***/ }),

/***/ "./src/web/signal/signalConnect.ts":
/*!*****************************************!*\
  !*** ./src/web/signal/signalConnect.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var socket_io_1 = __importDefault(__webpack_require__(/*! socket.io */ "./node_modules/socket.io-client/dist/socket.io.slim.js"));
var serviceAPI_1 = __webpack_require__(/*! ../service/serviceAPI */ "./src/web/service/serviceAPI.ts");
var eventemitter3_1 = __importDefault(__webpack_require__(/*! eventemitter3 */ "./node_modules/eventemitter3/umd/eventemitter3.min.js"));
var errorCode_1 = __webpack_require__(/*! ../../common/errorCode */ "./src/common/errorCode.ts");
var logger_1 = __webpack_require__(/*! ../log/logger */ "./src/web/log/logger.ts");
var SignalConnect = /** @class */ (function (_super) {
    __extends(SignalConnect, _super);
    function SignalConnect(options) {
        var _this = _super.call(this) || this;
        _this._customEdgeUrl = '';
        _this._logger = null;
        _this._retryTimes = 0;
        _this._maxRetryTimes = 3;
        _this._edgeListIndex = 0;
        _this._roomId = '';
        _this._userId = '';
        _this._appId = '';
        _this._currentEdgeUrl = '';
        _this._edgeUrls = [];
        _this._ws = null;
        _this._syncRole = 0;
        _this._env = 'prod';
        _this._projectName = 'liveme';
        _this._appPackageName = '';
        _this._logger = logger_1.logger.collect;
        _this._logger.debug('signal constructor params', options);
        _this._userId = options.userId;
        _this._roomId = options.roomId;
        if (options.appId !== void 0) {
            _this._appId = options.appId;
        }
        ;
        if (options.projectName !== void 0) {
            _this._projectName = options.projectName;
        }
        ;
        if (options.env !== void 0) {
            _this._env = options.env;
        }
        ;
        if (options.customEdgeUrl !== void 0) {
            _this._customEdgeUrl = options.customEdgeUrl;
        }
        ;
        if (options.appPackageName !== void 0) {
            _this._appPackageName = options.appPackageName;
        }
        return _this;
    }
    SignalConnect.prototype.connect = function (_a) {
        var auth = _a.auth, expire = _a.expire;
        return __awaiter(this, void 0, void 0, function () {
            var _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!!this._currentEdgeUrl) return [3 /*break*/, 3];
                        if (!this._customEdgeUrl) return [3 /*break*/, 1];
                        this._currentEdgeUrl = "wss://" + this._customEdgeUrl + "/octopus";
                        return [3 /*break*/, 3];
                    case 1:
                        // this._edgeUrls = await getEdgeList({
                        //     appId: this._appId,
                        //     roomId: this._roomId,
                        //     userId: this._userId,
                        //     env: this._env,
                        //     projectName: this._projectName
                        // });
                        _b = this;
                        return [4 /*yield*/, serviceAPI_1.getAuthEdgeList({
                                appId: this._appId,
                                auth: auth,
                                expire: expire,
                                env: this._env,
                                projectName: this._projectName
                            })];
                    case 2:
                        // this._edgeUrls = await getEdgeList({
                        //     appId: this._appId,
                        //     roomId: this._roomId,
                        //     userId: this._userId,
                        //     env: this._env,
                        //     projectName: this._projectName
                        // });
                        _b._edgeUrls = _c.sent();
                        this._logger.debug('current edge list', this._edgeUrls);
                        if (!this._edgeUrls || this._edgeUrls.length === 0) {
                            this._logger.error('edgelist is null');
                            this.emit('@disconnect', errorCode_1.errCode.get('nullEdgeList'));
                            return [2 /*return*/];
                        }
                        this._currentEdgeUrl = this._edgeUrls[this._edgeListIndex];
                        this.getIntervalEdgeUrls();
                        _c.label = 3;
                    case 3:
                        this._ws = socket_io_1.default(this._currentEdgeUrl, {
                            transports: ['websocket']
                        });
                        this._logger.debug('current websocket connect edge', this._currentEdgeUrl);
                        this._ws.connect();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * 定时取最近的edgelist
     */
    SignalConnect.prototype.getIntervalEdgeUrls = function () {
        var _this = this;
        setInterval(function () { return __awaiter(_this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, serviceAPI_1.getEdgeList({
                                appId: this._appId,
                                roomId: this._roomId,
                                userId: this._userId,
                                env: this._env,
                                projectName: this._projectName
                            })];
                    case 1:
                        _a._edgeUrls = _b.sent();
                        this._logger.debug('edgelist update', this._edgeUrls);
                        return [2 /*return*/];
                }
            });
        }); }, 60 * 60 * 1000);
    };
    /**
     * 替换使用zego
     */
    SignalConnect.prototype.changeVendor = function () {
        this.emit('@disconnect', errorCode_1.errCode.get('wsDisconnect'));
    };
    return SignalConnect;
}(eventemitter3_1.default));
exports.default = SignalConnect;


/***/ }),

/***/ "./src/web/utils/utils.ts":
/*!********************************!*\
  !*** ./src/web/utils/utils.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.formatAppId = exports.formatKeyToHump = exports.isArray = exports.isMap = exports.isObject = void 0;
function isObject(arg) {
    return Object.prototype.toString.call(arg) === '[object Object]';
}
exports.isObject = isObject;
function isMap(arg) {
    return Object.prototype.toString.call(arg) === '[object Map]';
}
exports.isMap = isMap;
function isArray(arg) {
    return Object.prototype.toString.call(arg) === '[object Array]';
}
exports.isArray = isArray;
function toHump(str, type) {
    if (type == 1) {
        return str.replace(/(^|_)(\w)/g, function (m, $1, $2) { return $2.toUpperCase(); });
    }
    else {
        return str.replace(/\_(\w)/g, function (all, letter) { return letter.toUpperCase(); });
    }
}
function formatKeyToHump(message, appId, targetObj, type) {
    var res = targetObj || {};
    var _loop_1 = function (key) {
        // 删除或补全appid
        if (key.indexOf('room_id') != -1 || key.indexOf('user_id') != -1) {
            if (appId) {
                message[key] = appId + "-" + message[key];
            }
            else {
                if (message[key].match(/-(.{1,})/)) {
                    message[key] = message[key].match(/-(.{1,})/)[1];
                }
            }
        }
        // format key
        if (Array.isArray(message[key])) {
            var newKey_1 = toHump(key, type);
            res[newKey_1] = [];
            message[key].forEach(function (v) {
                if (isObject(v)) {
                    res[newKey_1].push(formatKeyToHump(v));
                }
                else {
                    res[newKey_1].push(v);
                }
            });
        }
        else if (isObject(message[key])) {
            var newKey = toHump(key, type);
            res[newKey] = formatKeyToHump(message[key]);
        }
        else {
            var newKey = toHump(key, type);
            res[newKey] = message[key];
        }
    };
    for (var key in message) {
        _loop_1(key);
    }
    return res;
}
exports.formatKeyToHump = formatKeyToHump;
function formatAppId(message, appId) {
    for (var key in message) {
        if (key.indexOf('room_id') != -1 || key.indexOf('user_id') != -1) {
            if (appId) {
                message[key] = appId + "-" + message[key];
            }
            else {
                if (message[key].match(/-(.{1,})/)) {
                    message[key] = message[key].match(/-(.{1,})/)[1];
                }
            }
        }
        if (Array.isArray(message[key])) {
            message[key].forEach(function (value, key) {
                formatAppId(value, appId);
            });
        }
    }
    return message;
}
exports.formatAppId = formatAppId;


/***/ })

/******/ })["default"];
});