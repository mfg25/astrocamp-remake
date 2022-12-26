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

/***/ "./src/components/footer/footer.css":
/*!******************************************!*\
  !*** ./src/components/footer/footer.css ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://astrocamp/./src/components/footer/footer.css?");

/***/ }),

/***/ "./src/components/header.css":
/*!***********************************!*\
  !*** ./src/components/header.css ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://astrocamp/./src/components/header.css?");

/***/ }),

/***/ "./src/components/mainPage/video-container.css":
/*!*****************************************************!*\
  !*** ./src/components/mainPage/video-container.css ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://astrocamp/./src/components/mainPage/video-container.css?");

/***/ }),

/***/ "./src/pressets.css":
/*!**************************!*\
  !*** ./src/pressets.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://astrocamp/./src/pressets.css?");

/***/ }),

/***/ "./src/components/footer/footer.js":
/*!*****************************************!*\
  !*** ./src/components/footer/footer.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _footer_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer.css */ \"./src/components/footer/footer.css\");\n\r\n\r\nfunction footer(){\r\n    const foot = document.createElement('footer')\r\n    foot.id = 'footer'\r\n\r\n    const text = document.createElement('h3')\r\n    text.innerText = 'Developed by Matheus Germano'\r\n    text.id = 'text'\r\n    foot.appendChild(text)\r\n    const svg = document.createElement('div')\r\n    svg.innerHTML = '<svg xmlns=\"http://www.w3.org/2000/svg\" fill= \"white\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z\"/></svg>'\r\n    svg.id = 'svg'\r\n    foot.appendChild(svg)\r\n   \r\n\r\n    \r\n    return foot;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (footer);\n\n//# sourceURL=webpack://astrocamp/./src/components/footer/footer.js?");

/***/ }),

/***/ "./src/components/header.js":
/*!**********************************!*\
  !*** ./src/components/header.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _header_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.css */ \"./src/components/header.css\");\n/* harmony import */ var _nav_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav.js */ \"./src/components/nav.js\");\n/* harmony import */ var _logo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logo.png */ \"./src/components/logo.png\");\n\r\n\r\n\r\n\r\nfunction Heading(){\r\n\r\n    let headerElement = document.createElement('header')\r\n    headerElement.id = 'header'\r\n\r\n    let astrocampLogo = document.createElement('img')\r\n    astrocampLogo.src = _logo_png__WEBPACK_IMPORTED_MODULE_2__\r\n    astrocampLogo.id = 'header-img'\r\n    headerElement.appendChild(astrocampLogo)\r\n\r\n    headerElement.appendChild((0,_nav_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])())\r\n\r\n    return headerElement;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Heading);\n\n//# sourceURL=webpack://astrocamp/./src/components/header.js?");

/***/ }),

/***/ "./src/components/mainPage/video-container.js":
/*!****************************************************!*\
  !*** ./src/components/mainPage/video-container.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _video_container_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./video-container.css */ \"./src/components/mainPage/video-container.css\");\n/* harmony import */ var _background_gif__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./background.gif */ \"./src/components/mainPage/background.gif\");\n\r\n\r\n\r\nfunction backgroundVideo(){\r\n\r\n    let divContainer = document.createElement('div')\r\n    divContainer.id = 'video-container'\r\n    \r\n    let backgroundVideo = document.createElement('img')\r\n    backgroundVideo.src = _background_gif__WEBPACK_IMPORTED_MODULE_1__\r\n    backgroundVideo.id = 'gif'\r\n\r\n    let introductionText = document.createElement('h1')\r\n    introductionText.id = 'introduction'\r\n    introductionText.innerText = `Take free online classes and courses in astronomy to build your\r\n    science skills. Explore astronomy, astrophysics and other popular\r\n    subjects with courses from top universities and institutions around\r\n    the world.`\r\n\r\n    divContainer.appendChild(backgroundVideo)\r\n    divContainer.appendChild(introductionText)\r\n    \r\n    return divContainer\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (backgroundVideo);\n\n//# sourceURL=webpack://astrocamp/./src/components/mainPage/video-container.js?");

/***/ }),

/***/ "./src/components/nav.js":
/*!*******************************!*\
  !*** ./src/components/nav.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction nav () {\r\n    let nav = document.createElement('nav')\r\n    nav.classList.add('nav-links')\r\n\r\n    nav.innerHTML = '<a onclick=\"loadAboutUs()\">About us</a><a>Our plans</a><a>Get started</a>'\r\n\r\n    return nav\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (nav);\n\n//# sourceURL=webpack://astrocamp/./src/components/nav.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_header_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/header.js */ \"./src/components/header.js\");\n/* harmony import */ var _components_mainPage_video_container_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/mainPage/video-container.js */ \"./src/components/mainPage/video-container.js\");\n/* harmony import */ var _components_footer_footer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/footer/footer.js */ \"./src/components/footer/footer.js\");\n/* harmony import */ var _pressets_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pressets.css */ \"./src/pressets.css\");\n\r\n\r\n\r\n\r\n\r\n\r\nloadPage()\r\n\r\nfunction loadPage(){\r\n    const heading = new _components_header_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]()\r\n    document.getElementById('content').appendChild(heading)\r\n    const backVideo = new _components_mainPage_video_container_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]()\r\n    document.getElementById('content').appendChild(backVideo)\r\n    const foot = new _components_footer_footer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]()\r\n    document.getElementById('content').appendChild(foot)\r\n}\r\n\r\nfunction loadAboutUs(){\r\n    console.log('teste')\r\n    const heading = new _components_header_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]()\r\n    document.getElementById('content').appendChild(heading)\r\n\r\n    const foot = new _components_footer_footer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]()\r\n    document.getElementById('content').appendChild(foot)\r\n}\n\n//# sourceURL=webpack://astrocamp/./src/index.js?");

/***/ }),

/***/ "./src/components/logo.png":
/*!*********************************!*\
  !*** ./src/components/logo.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"704a804addce6e647e0c.png\";\n\n//# sourceURL=webpack://astrocamp/./src/components/logo.png?");

/***/ }),

/***/ "./src/components/mainPage/background.gif":
/*!************************************************!*\
  !*** ./src/components/mainPage/background.gif ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"af4b2fecb4b476332d80.gif\";\n\n//# sourceURL=webpack://astrocamp/./src/components/mainPage/background.gif?");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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