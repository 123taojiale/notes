/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _page_event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page/event */ \"./src/page/event.js\");\n\r\n\r\n/* import NumberTimer from \"./util/NumberTimer\";\r\nimport appendNumber from \"./page/appendNumber\";\r\n\r\nconst n = new NumberTimer(100);\r\n\r\nn.onNumberCreated = function (n, isPrime) {\r\n    appendNumber(n, isPrime);\r\n}\r\n\r\nn.start();\r\n\r\nsetTimeout(() => {\r\n    n.stop();\r\n}, 5000); */\r\n\r\n\r\n/* import NumberTimer from \"./util/NumberTimer\";\r\n\r\nconst n = new NumberTimer(100);\r\n\r\nn.onNumberCreated = function (n, isPrime) {\r\n    console.log(n, isPrime);\r\n}\r\n\r\nn.start();\r\n\r\nsetTimeout(() => {\r\n    n.stop();\r\n}, 3000); */\r\n\r\n\r\n\r\n/* import radColor, {\r\n    getRandom\r\n} from \"./util/radColor\";\r\n\r\nconsole.log(getRandom(1, 5));\r\nconsole.log(getRandom(1, 5));\r\nconsole.log(getRandom(1, 5));\r\nconsole.log(getRandom(1, 5));\r\nconsole.log(getRandom(1, 5));\r\nconsole.log(getRandom(1, 5));\r\nconsole.log(getRandom(1, 5));\r\nconsole.log(getRandom(1, 5));\r\n\r\nconsole.log(radColor());\r\nconsole.log(radColor());\r\nconsole.log(radColor());\r\nconsole.log(radColor());\r\nconsole.log(radColor());\r\nconsole.log(radColor()); */\r\n\r\n/* import isPrime from \"./util/isPrime\";\r\n\r\nconsole.log(isPrime(1));\r\nconsole.log(isPrime(2));\r\nconsole.log(isPrime(3));\r\nconsole.log(isPrime(4));\r\nconsole.log(isPrime(5));\r\nconsole.log(isPrime(6)); */\n\n//# sourceURL=webpack://test/./src/index.js?");

/***/ }),

/***/ "./src/page/appendNumber.js":
/*!**********************************!*\
  !*** ./src/page/appendNumber.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ appendNumber)\n/* harmony export */ });\n/* harmony import */ var _util_radColor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/radColor */ \"./src/util/radColor.js\");\n\r\n\r\nconst divContainer = document.getElementById('divContainer');\r\nconst divCenter = document.getElementById('divCenter');\r\n\r\n/**\r\n * ????????????????????????????????????????????????????????????\r\n * @param {Number} n ???????????????\r\n * @param {Boolean} isPrime ???????????????\r\n */\r\nfunction appendNumber(n, isPrime) {\r\n    const span = document.createElement('span');\r\n    span.innerText = n;\r\n\r\n    if (isPrime) {\r\n        const color = (0,_util_radColor__WEBPACK_IMPORTED_MODULE_0__.default)();\r\n        span.style.color = color;\r\n        createCenterPrimeNumber(n, color); // ?????????????????????????????????????????????????????????????????????????????????\r\n    }\r\n\r\n    divContainer.appendChild(span);\r\n    divCenter.innerText = n;\r\n}\r\n\r\n/**\r\n * ????????????????????????????????????\r\n * @param {Number} n ??????\r\n * @param {String} color ??????\r\n */\r\nfunction createCenterPrimeNumber(n, color) {\r\n    const div = document.createElement('div');\r\n    div.classList.add('center');\r\n    div.innerText = n;\r\n    div.style.color = color;\r\n    document.body.appendChild(div);\r\n\r\n    // ?????????????????? reflow ???????????? bug\r\n    getComputedStyle(div).left;\r\n\r\n    div.style.transform = `translate(${(0,_util_radColor__WEBPACK_IMPORTED_MODULE_0__.getRandom)(-200, 200)}px, ${(0,_util_radColor__WEBPACK_IMPORTED_MODULE_0__.getRandom)(-200, 200)}px)`;\r\n    div.style.opacity = 0;\r\n}\n\n//# sourceURL=webpack://test/./src/page/appendNumber.js?");

/***/ }),

/***/ "./src/page/event.js":
/*!***************************!*\
  !*** ./src/page/event.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util_NumberTimer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/NumberTimer */ \"./src/util/NumberTimer.js\");\n/* harmony import */ var _appendNumber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./appendNumber */ \"./src/page/appendNumber.js\");\n\r\n\r\n\r\nconst n = new _util_NumberTimer__WEBPACK_IMPORTED_MODULE_0__.default(100);\r\n\r\nn.onNumberCreated = function (n, isPrime) {\r\n    (0,_appendNumber__WEBPACK_IMPORTED_MODULE_1__.default)(n, isPrime);\r\n}\r\n\r\nlet isStart = false; // ???????????????????????????\r\n\r\nwindow.onclick = function () {\r\n    if (isStart) { // ???????????????\r\n        n.stop(); // ????????????\r\n        isStart = false;\r\n    } else { // ???????????????\r\n        n.start(); // ????????????\r\n        isStart = true;\r\n    }\r\n}\n\n//# sourceURL=webpack://test/./src/page/event.js?");

/***/ }),

/***/ "./src/util/NumberTimer.js":
/*!*********************************!*\
  !*** ./src/util/NumberTimer.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ NumberTimer)\n/* harmony export */ });\n/* harmony import */ var _isPrime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isPrime */ \"./src/util/isPrime.js\");\n\r\n\r\n/**\r\n * ??????????????????\r\n * @param {Number} duration ??????????????????????????????????????? 0.5s???\r\n */\r\nclass NumberTimer {\r\n    constructor(duration = 500) {\r\n        this.duration = duration;\r\n        this.timer = null;\r\n        this.number = 1; // ???????????????\r\n        this.onNumberCreated = null; // ?????????????????? ????????????\r\n    }\r\n\r\n    start() {\r\n        if (this.timer) {\r\n            return;\r\n        }\r\n        this.timer = setInterval(() => {\r\n            this.onNumberCreated && this.onNumberCreated(this.number, (0,_isPrime__WEBPACK_IMPORTED_MODULE_0__.default)(this.number));\r\n            this.number++;\r\n        }, this.duration);\r\n    }\r\n\r\n    stop() {\r\n        clearInterval(this.timer);\r\n        this.timer = null;\r\n    }\r\n}\n\n//# sourceURL=webpack://test/./src/util/NumberTimer.js?");

/***/ }),

/***/ "./src/util/isPrime.js":
/*!*****************************!*\
  !*** ./src/util/isPrime.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ isPrime)\n/* harmony export */ });\n/**\r\n * ??????????????????????????????????????????????????? true??????????????? false???\r\n * @param {Number} n ??????\r\n */\r\nfunction isPrime(n) {\r\n    if (n < 2) { // 2 ??????????????????\r\n        return false;\r\n    }\r\n    for (let i = 2; i < n - 1; i++) {\r\n        if (n % i === 0) {\r\n            return false;\r\n        }\r\n    }\r\n    return true;\r\n}\n\n//# sourceURL=webpack://test/./src/util/isPrime.js?");

/***/ }),

/***/ "./src/util/radColor.js":
/*!******************************!*\
  !*** ./src/util/radColor.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getRandom\": () => (/* binding */ getRandom),\n/* harmony export */   \"default\": () => (/* binding */ radColor)\n/* harmony export */ });\nconst colors = [\"#f26395\", \"#62efab\", \"#ef7658\", \"#ffe868\", \"#80e3f7\", \"#d781f9\"]; // ?????????\r\n\r\n/**\r\n * ???????????????????????? [min, max) ?????????????????????????????????????????????\r\n * @param {Number} min ?????????\r\n * @param {Number} max ?????????\r\n */\r\nfunction getRandom(min, max) {\r\n    return Math.floor(Math.random() * (max - min) + min);\r\n}\r\n\r\n/**\r\n * ???????????? colors ???????????????????????????\r\n */\r\nfunction radColor() {\r\n    const index = getRandom(0, colors.length);\r\n    return colors[index];\r\n}\n\n//# sourceURL=webpack://test/./src/util/radColor.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;