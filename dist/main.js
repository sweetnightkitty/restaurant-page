/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/greeting.js":
/*!*************************!*\
  !*** ./src/greeting.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   greeting: () => (/* binding */ greeting),\n/* harmony export */   loadHomeContent: () => (/* binding */ loadHomeContent)\n/* harmony export */ });\n/* harmony import */ var _sandwich_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sandwich.jpeg */ \"./src/sandwich.jpeg\");\n//import img\n\n\nconst greeting = \"Hello\";\n\nfunction loadHomeContent() {\n    //Create h1\n    const h1 = document.createElement(\"h1\");\n    h1.textContent = \"Sara's Sassy Sandwiches\";\n\n    //Create img\n    const image = document.createElement(\"img\");\n    image.src = _sandwich_jpeg__WEBPACK_IMPORTED_MODULE_0__;\n\n    //Create div text\n    const div = document.createElement(\"div\");\n    div.classList.add(\"text\");\n    div.textContent = \"The funny thing is Sara hate's sandwhiches so that explains all the sass.\";\n\n    //Add h1, img and div text in order\n    document.body.appendChild(h1);\n    document.body.appendChild(image);\n    document.body.appendChild()\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZ3JlZXRpbmcuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDdUM7O0FBRWhDOztBQUVBO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnQkFBZ0IsMkNBQVE7O0FBRXhCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvZ3JlZXRpbmcuanM/NjU1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyIvL2ltcG9ydCBpbWdcbmltcG9ydCBzYW5kd2ljaCBmcm9tIFwiLi9zYW5kd2ljaC5qcGVnXCI7XG5cbmV4cG9ydCBjb25zdCBncmVldGluZyA9IFwiSGVsbG9cIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRIb21lQ29udGVudCgpIHtcbiAgICAvL0NyZWF0ZSBoMVxuICAgIGNvbnN0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIGgxLnRleHRDb250ZW50ID0gXCJTYXJhJ3MgU2Fzc3kgU2FuZHdpY2hlc1wiO1xuXG4gICAgLy9DcmVhdGUgaW1nXG4gICAgY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGltYWdlLnNyYyA9IHNhbmR3aWNoO1xuXG4gICAgLy9DcmVhdGUgZGl2IHRleHRcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRpdi5jbGFzc0xpc3QuYWRkKFwidGV4dFwiKTtcbiAgICBkaXYudGV4dENvbnRlbnQgPSBcIlRoZSBmdW5ueSB0aGluZyBpcyBTYXJhIGhhdGUncyBzYW5kd2hpY2hlcyBzbyB0aGF0IGV4cGxhaW5zIGFsbCB0aGUgc2Fzcy5cIjtcblxuICAgIC8vQWRkIGgxLCBpbWcgYW5kIGRpdiB0ZXh0IGluIG9yZGVyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChoMSk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChpbWFnZSk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCgpXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/greeting.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _greeting__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./greeting */ \"./src/greeting.js\");\n\n\n\nconsole.log(_greeting__WEBPACK_IMPORTED_MODULE_0__.greeting);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7QUFBc0M7QUFDTzs7QUFFN0MsWUFBWSwrQ0FBUSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdyZWV0aW5nIH0gZnJvbSBcIi4vZ3JlZXRpbmdcIjtcbmltcG9ydCB7IGxvYWRIb21lQ29udGVudCB9IGZyb20gXCIuL2dyZWV0aW5nXCI7XG5cbmNvbnNvbGUubG9nKGdyZWV0aW5nKTtcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/sandwich.jpeg":
/*!***************************!*\
  !*** ./src/sandwich.jpeg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a4480e90147d2360023b.jpeg";

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
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
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
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;