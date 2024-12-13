/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _src_Context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/src/Context */ \"./src/Context.js\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction App({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_Context__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Administrator\\\\Downloads\\\\Now\\\\axo\\\\pages\\\\_app.js\",\n            lineNumber: 7,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Administrator\\\\Downloads\\\\Now\\\\axo\\\\pages\\\\_app.js\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBcUM7QUFDUDtBQUVmLFNBQVNDLElBQUksRUFBRUMsVUFBUyxFQUFFQyxVQUFTLEVBQUUsRUFBRTtJQUNwRCxxQkFDRSw4REFBQ0gsb0RBQVFBO2tCQUNQLDRFQUFDRTtZQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7O0FBRzlCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9heG8tbmV4dC8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXhvU3RhdGUgZnJvbSBcIkAvc3JjL0NvbnRleHRcIjtcbmltcG9ydCBcIkAvc3R5bGVzL2dsb2JhbHMuY3NzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8QXhvU3RhdGU+XG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgPC9BeG9TdGF0ZT5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJBeG9TdGF0ZSIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./src/Context.js":
/*!************************!*\
  !*** ./src/Context.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AxoContext\": () => (/* binding */ AxoContext),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n// Create Context\nconst AxoContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\n// Type\nconst type = {\n    BLOG: \"BLOG\",\n    PORTFOLIO_MODAL: \"PORTFOLIO_MODAL\"\n};\nconst { BLOG , COLOR , PORTFOLIO_MODAL  } = type;\n// Initial Value\nconst initialState = {\n    blog: null,\n    blogs: [\n        {\n            id: 1,\n            date: \"23 Oct 2022\",\n            img: \"/assets/images/blog/1.png\",\n            title: \"User interface design or user interface engineering\",\n            catagory: \"UI/UX Design\"\n        },\n        {\n            id: 2,\n            date: \"13 Dec 2022\",\n            img: \"/assets/images/blog/2.png\",\n            title: \"Web design encompasses many different skills\",\n            catagory: \"Web Design\"\n        },\n        {\n            id: 3,\n            date: \"23 Dec 2022\",\n            img: \"/assets/images/blog/3.png\",\n            title: \"Jim Morisson Says when the musics over turn off the light\",\n            catagory: \"Web Development\"\n        }\n    ],\n    portfolio_modal: false\n};\n// Reducer\nconst reducer = (state, action)=>{\n    const { type , payload  } = action;\n    switch(type){\n        case BLOG:\n            return {\n                ...state,\n                blog: payload\n            };\n        case PORTFOLIO_MODAL:\n            return {\n                ...state,\n                portfolio_modal: payload\n            };\n        default:\n            return state;\n    }\n};\n// Watson State\nconst AxoState = ({ children  })=>{\n    const [state, dispatch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(reducer, initialState);\n    const blogDetails = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((value)=>{\n        dispatch({\n            type: BLOG,\n            payload: value\n        });\n    }, []);\n    const portfolio_modal_show = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((value)=>{\n        dispatch({\n            type: PORTFOLIO_MODAL,\n            payload: value\n        });\n    }, []);\n    const { color , blog , blogs , portfolio_modal  } = state;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AxoContext.Provider, {\n        value: {\n            blogs,\n            blog,\n            blogDetails,\n            portfolio_modal,\n            portfolio_modal_show\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Administrator\\\\Downloads\\\\Now\\\\axo\\\\src\\\\Context.js\",\n        lineNumber: 81,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AxoState);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQ29udGV4dC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQStEO0FBRS9ELGlCQUFpQjtBQUNqQixNQUFNRywyQkFBYUgsb0RBQWFBO0FBRWhDLE9BQU87QUFDUCxNQUFNSSxPQUFPO0lBQ1hDLE1BQU07SUFDTkMsaUJBQWlCO0FBQ25CO0FBQ0EsTUFBTSxFQUFFRCxLQUFJLEVBQUVFLE1BQUssRUFBRUQsZ0JBQWUsRUFBRSxHQUFHRjtBQUV6QyxnQkFBZ0I7QUFDaEIsTUFBTUksZUFBZTtJQUNuQkMsTUFBTSxJQUFJO0lBQ1ZDLE9BQU87UUFDTDtZQUNFQyxJQUFJO1lBQ0pDLE1BQU07WUFDTkMsS0FBSztZQUNMQyxPQUFPO1lBQ1BDLFVBQVU7UUFDWjtRQUNBO1lBQ0VKLElBQUk7WUFDSkMsTUFBTTtZQUNOQyxLQUFLO1lBQ0xDLE9BQU87WUFDUEMsVUFBVTtRQUNaO1FBQ0E7WUFDRUosSUFBSTtZQUNKQyxNQUFNO1lBQ05DLEtBQUs7WUFDTEMsT0FBTztZQUNQQyxVQUFVO1FBQ1o7S0FDRDtJQUNEQyxpQkFBaUIsS0FBSztBQUN4QjtBQUVBLFVBQVU7QUFDVixNQUFNQyxVQUFVLENBQUNDLE9BQU9DLFNBQVc7SUFDakMsTUFBTSxFQUFFZixLQUFJLEVBQUVnQixRQUFPLEVBQUUsR0FBR0Q7SUFDMUIsT0FBUWY7UUFDTixLQUFLQztZQUNILE9BQU87Z0JBQ0wsR0FBR2EsS0FBSztnQkFDUlQsTUFBTVc7WUFDUjtRQUNGLEtBQUtkO1lBQ0gsT0FBTztnQkFDTCxHQUFHWSxLQUFLO2dCQUNSRixpQkFBaUJJO1lBQ25CO1FBQ0Y7WUFDRSxPQUFPRjtJQUNYO0FBQ0Y7QUFFQSxlQUFlO0FBQ2YsTUFBTUcsV0FBVyxDQUFDLEVBQUVDLFNBQVEsRUFBRSxHQUFLO0lBQ2pDLE1BQU0sQ0FBQ0osT0FBT0ssU0FBUyxHQUFHckIsaURBQVVBLENBQUNlLFNBQVNUO0lBRTlDLE1BQU1nQixjQUFjdkIsa0RBQVdBLENBQUMsQ0FBQ3dCLFFBQVU7UUFDekNGLFNBQVM7WUFDUG5CLE1BQU1DO1lBQ05lLFNBQVNLO1FBQ1g7SUFDRixHQUFHLEVBQUU7SUFFTCxNQUFNQyx1QkFBdUJ6QixrREFBV0EsQ0FBQyxDQUFDd0IsUUFBVTtRQUNsREYsU0FBUztZQUNQbkIsTUFBTUU7WUFDTmMsU0FBU0s7UUFDWDtJQUNGLEdBQUcsRUFBRTtJQUVMLE1BQU0sRUFBRUUsTUFBSyxFQUFFbEIsS0FBSSxFQUFFQyxNQUFLLEVBQUVNLGdCQUFlLEVBQUUsR0FBR0U7SUFDaEQscUJBQ0UsOERBQUNmLFdBQVd5QixRQUFRO1FBQ2xCSCxPQUFPO1lBQ0xmO1lBQ0FEO1lBQ0FlO1lBQ0FSO1lBQ0FVO1FBQ0Y7a0JBRUNKOzs7Ozs7QUFHUDtBQUVBLGlFQUFlRCxRQUFRQSxFQUFDO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9heG8tbmV4dC8uL3NyYy9Db250ZXh0LmpzP2ViNTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlQ2FsbGJhY2ssIHVzZVJlZHVjZXIgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbi8vIENyZWF0ZSBDb250ZXh0XHJcbmNvbnN0IEF4b0NvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcblxyXG4vLyBUeXBlXHJcbmNvbnN0IHR5cGUgPSB7XHJcbiAgQkxPRzogXCJCTE9HXCIsXHJcbiAgUE9SVEZPTElPX01PREFMOiBcIlBPUlRGT0xJT19NT0RBTFwiLFxyXG59O1xyXG5jb25zdCB7IEJMT0csIENPTE9SLCBQT1JURk9MSU9fTU9EQUwgfSA9IHR5cGU7XHJcblxyXG4vLyBJbml0aWFsIFZhbHVlXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICBibG9nOiBudWxsLFxyXG4gIGJsb2dzOiBbXHJcbiAgICB7XHJcbiAgICAgIGlkOiAxLFxyXG4gICAgICBkYXRlOiBcIjIzIE9jdCAyMDIyXCIsXHJcbiAgICAgIGltZzogXCIvYXNzZXRzL2ltYWdlcy9ibG9nLzEucG5nXCIsXHJcbiAgICAgIHRpdGxlOiBcIlVzZXIgaW50ZXJmYWNlIGRlc2lnbiBvciB1c2VyIGludGVyZmFjZSBlbmdpbmVlcmluZ1wiLFxyXG4gICAgICBjYXRhZ29yeTogXCJVSS9VWCBEZXNpZ25cIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiAyLFxyXG4gICAgICBkYXRlOiBcIjEzIERlYyAyMDIyXCIsXHJcbiAgICAgIGltZzogXCIvYXNzZXRzL2ltYWdlcy9ibG9nLzIucG5nXCIsXHJcbiAgICAgIHRpdGxlOiBcIldlYiBkZXNpZ24gZW5jb21wYXNzZXMgbWFueSBkaWZmZXJlbnQgc2tpbGxzXCIsXHJcbiAgICAgIGNhdGFnb3J5OiBcIldlYiBEZXNpZ25cIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiAzLFxyXG4gICAgICBkYXRlOiBcIjIzIERlYyAyMDIyXCIsXHJcbiAgICAgIGltZzogXCIvYXNzZXRzL2ltYWdlcy9ibG9nLzMucG5nXCIsXHJcbiAgICAgIHRpdGxlOiBcIkppbSBNb3Jpc3NvbiBTYXlzIHdoZW4gdGhlIG11c2ljcyBvdmVyIHR1cm4gb2ZmIHRoZSBsaWdodFwiLFxyXG4gICAgICBjYXRhZ29yeTogXCJXZWIgRGV2ZWxvcG1lbnRcIixcclxuICAgIH0sXHJcbiAgXSxcclxuICBwb3J0Zm9saW9fbW9kYWw6IGZhbHNlLFxyXG59O1xyXG5cclxuLy8gUmVkdWNlclxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBjb25zdCB7IHR5cGUsIHBheWxvYWQgfSA9IGFjdGlvbjtcclxuICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgIGNhc2UgQkxPRzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBibG9nOiBwYXlsb2FkLFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBQT1JURk9MSU9fTU9EQUw6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgcG9ydGZvbGlvX21vZGFsOiBwYXlsb2FkLFxyXG4gICAgICB9O1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxufTtcclxuXHJcbi8vIFdhdHNvbiBTdGF0ZVxyXG5jb25zdCBBeG9TdGF0ZSA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIocmVkdWNlciwgaW5pdGlhbFN0YXRlKTtcclxuXHJcbiAgY29uc3QgYmxvZ0RldGFpbHMgPSB1c2VDYWxsYmFjaygodmFsdWUpID0+IHtcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogQkxPRyxcclxuICAgICAgcGF5bG9hZDogdmFsdWUsXHJcbiAgICB9KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IHBvcnRmb2xpb19tb2RhbF9zaG93ID0gdXNlQ2FsbGJhY2soKHZhbHVlKSA9PiB7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IFBPUlRGT0xJT19NT0RBTCxcclxuICAgICAgcGF5bG9hZDogdmFsdWUsXHJcbiAgICB9KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IHsgY29sb3IsIGJsb2csIGJsb2dzLCBwb3J0Zm9saW9fbW9kYWwgfSA9IHN0YXRlO1xyXG4gIHJldHVybiAoXHJcbiAgICA8QXhvQ29udGV4dC5Qcm92aWRlclxyXG4gICAgICB2YWx1ZT17e1xyXG4gICAgICAgIGJsb2dzLFxyXG4gICAgICAgIGJsb2csXHJcbiAgICAgICAgYmxvZ0RldGFpbHMsXHJcbiAgICAgICAgcG9ydGZvbGlvX21vZGFsLFxyXG4gICAgICAgIHBvcnRmb2xpb19tb2RhbF9zaG93LFxyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L0F4b0NvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEF4b1N0YXRlO1xyXG5leHBvcnQgeyBBeG9Db250ZXh0IH07XHJcbiJdLCJuYW1lcyI6WyJjcmVhdGVDb250ZXh0IiwidXNlQ2FsbGJhY2siLCJ1c2VSZWR1Y2VyIiwiQXhvQ29udGV4dCIsInR5cGUiLCJCTE9HIiwiUE9SVEZPTElPX01PREFMIiwiQ09MT1IiLCJpbml0aWFsU3RhdGUiLCJibG9nIiwiYmxvZ3MiLCJpZCIsImRhdGUiLCJpbWciLCJ0aXRsZSIsImNhdGFnb3J5IiwicG9ydGZvbGlvX21vZGFsIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwicGF5bG9hZCIsIkF4b1N0YXRlIiwiY2hpbGRyZW4iLCJkaXNwYXRjaCIsImJsb2dEZXRhaWxzIiwidmFsdWUiLCJwb3J0Zm9saW9fbW9kYWxfc2hvdyIsImNvbG9yIiwiUHJvdmlkZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/Context.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();