"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/techsummit/page",{

/***/ "(app-pages-browser)/./app/techsummit/EventCountdown.tsx":
/*!*******************************************!*\
  !*** ./app/techsummit/EventCountdown.tsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_countdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-countdown */ \"(app-pages-browser)/./node_modules/react-countdown/dist/index.es.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst EventCountdown = (param)=>{\n    let { eventDate } = param;\n    _s();\n    const [isMounted, setIsMounted] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setIsMounted(true);\n    }, []);\n    // Renderer callback function\n    const renderer = (param)=>{\n        let { days, hours, minutes, seconds, completed } = param;\n        if (completed) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                children: \"Event has started!\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Jocely\\\\pc.projectFiles\\\\kcl-tech-website\\\\app\\\\techsummit\\\\EventCountdown.tsx\",\n                lineNumber: 24,\n                columnNumber: 14\n            }, undefined);\n        } else {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Countdown to the Event\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Jocely\\\\pc.projectFiles\\\\kcl-tech-website\\\\app\\\\techsummit\\\\EventCountdown.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            days,\n                            \" days \",\n                            hours,\n                            \" hours \",\n                            minutes,\n                            \" minutes \",\n                            seconds,\n                            \" seconds\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Jocely\\\\pc.projectFiles\\\\kcl-tech-website\\\\app\\\\techsummit\\\\EventCountdown.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Jocely\\\\pc.projectFiles\\\\kcl-tech-website\\\\app\\\\techsummit\\\\EventCountdown.tsx\",\n                lineNumber: 27,\n                columnNumber: 9\n            }, undefined);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"countdown-container\",\n        suppressHydrationWarning: true,\n        children: isMounted ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_countdown__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            date: eventDate,\n            renderer: renderer\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Jocely\\\\pc.projectFiles\\\\kcl-tech-website\\\\app\\\\techsummit\\\\EventCountdown.tsx\",\n            lineNumber: 43,\n            columnNumber: 9\n        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Jocely\\\\pc.projectFiles\\\\kcl-tech-website\\\\app\\\\techsummit\\\\EventCountdown.tsx\",\n            lineNumber: 45,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Jocely\\\\pc.projectFiles\\\\kcl-tech-website\\\\app\\\\techsummit\\\\EventCountdown.tsx\",\n        lineNumber: 38,\n        columnNumber: 5\n    }, undefined);\n};\n_s(EventCountdown, \"h7njlszr1nxUzrk46zHyBTBrvgI=\");\n_c = EventCountdown;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EventCountdown);\nvar _c;\n$RefreshReg$(_c, \"EventCountdown\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC90ZWNoc3VtbWl0L0V2ZW50Q291bnRkb3duLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQW1EO0FBQ2M7QUFNakUsTUFBTUksaUJBQWdEO1FBQUMsRUFBRUMsU0FBUyxFQUFFOztJQUNsRSxNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR04sK0NBQVFBLENBQUM7SUFFM0NDLGdEQUFTQSxDQUFDO1FBQ1JLLGFBQWE7SUFDZixHQUFHLEVBQUU7SUFFTCw2QkFBNkI7SUFDN0IsTUFBTUMsV0FBZ0M7WUFBQyxFQUNyQ0MsSUFBSSxFQUNKQyxLQUFLLEVBQ0xDLE9BQU8sRUFDUEMsT0FBTyxFQUNQQyxTQUFTLEVBQ1Y7UUFDQyxJQUFJQSxXQUFXO1lBQ2IscUJBQU8sOERBQUNDOzBCQUFLOzs7Ozs7UUFDZixPQUFPO1lBQ0wscUJBQ0UsOERBQUNDOztrQ0FDQyw4REFBQ0M7a0NBQUc7Ozs7OztrQ0FDSiw4REFBQ0M7OzRCQUNFUjs0QkFBSzs0QkFBT0M7NEJBQU07NEJBQVFDOzRCQUFROzRCQUFVQzs0QkFBUTs7Ozs7Ozs7Ozs7OztRQUk3RDtJQUNGO0lBRUEscUJBQ0UsOERBQUNHO1FBQ0NHLFdBQVU7UUFDVkMsMEJBQTBCO2tCQUV6QmIsMEJBQ0MsOERBQUNILHVEQUFTQTtZQUFDaUIsTUFBTWY7WUFBV0csVUFBVUE7Ozs7O3NDQUV0Qyw4REFBQ1M7c0JBQUU7Ozs7Ozs7Ozs7O0FBSVg7R0F6Q01iO0tBQUFBO0FBMkNOLCtEQUFlQSxjQUFjQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC90ZWNoc3VtbWl0L0V2ZW50Q291bnRkb3duLnRzeD9iNzM0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBDb3VudGRvd24sIHsgQ291bnRkb3duUmVuZGVyZXJGbiB9IGZyb20gXCJyZWFjdC1jb3VudGRvd25cIjtcclxuXHJcbmludGVyZmFjZSBFdmVudENvdW50ZG93blByb3BzIHtcclxuICBldmVudERhdGU6IERhdGU7XHJcbn1cclxuXHJcbmNvbnN0IEV2ZW50Q291bnRkb3duOiBSZWFjdC5GQzxFdmVudENvdW50ZG93blByb3BzPiA9ICh7IGV2ZW50RGF0ZSB9KSA9PiB7XHJcbiAgY29uc3QgW2lzTW91bnRlZCwgc2V0SXNNb3VudGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldElzTW91bnRlZCh0cnVlKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIC8vIFJlbmRlcmVyIGNhbGxiYWNrIGZ1bmN0aW9uXHJcbiAgY29uc3QgcmVuZGVyZXI6IENvdW50ZG93blJlbmRlcmVyRm4gPSAoe1xyXG4gICAgZGF5cyxcclxuICAgIGhvdXJzLFxyXG4gICAgbWludXRlcyxcclxuICAgIHNlY29uZHMsXHJcbiAgICBjb21wbGV0ZWQsXHJcbiAgfSkgPT4ge1xyXG4gICAgaWYgKGNvbXBsZXRlZCkge1xyXG4gICAgICByZXR1cm4gPHNwYW4+RXZlbnQgaGFzIHN0YXJ0ZWQhPC9zcGFuPjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxoMT5Db3VudGRvd24gdG8gdGhlIEV2ZW50PC9oMT5cclxuICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICB7ZGF5c30gZGF5cyB7aG91cnN9IGhvdXJzIHttaW51dGVzfSBtaW51dGVzIHtzZWNvbmRzfSBzZWNvbmRzXHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgY2xhc3NOYW1lPVwiY291bnRkb3duLWNvbnRhaW5lclwiXHJcbiAgICAgIHN1cHByZXNzSHlkcmF0aW9uV2FybmluZz17dHJ1ZX0gLy8gU3VwcHJlc3MgdGhlIGh5ZHJhdGlvbiB3YXJuaW5nXHJcbiAgICA+XHJcbiAgICAgIHtpc01vdW50ZWQgPyAoXHJcbiAgICAgICAgPENvdW50ZG93biBkYXRlPXtldmVudERhdGV9IHJlbmRlcmVyPXtyZW5kZXJlcn0gLz5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8cD5Mb2FkaW5nLi4uPC9wPlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEV2ZW50Q291bnRkb3duO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkNvdW50ZG93biIsIkV2ZW50Q291bnRkb3duIiwiZXZlbnREYXRlIiwiaXNNb3VudGVkIiwic2V0SXNNb3VudGVkIiwicmVuZGVyZXIiLCJkYXlzIiwiaG91cnMiLCJtaW51dGVzIiwic2Vjb25kcyIsImNvbXBsZXRlZCIsInNwYW4iLCJkaXYiLCJoMSIsInAiLCJjbGFzc05hbWUiLCJzdXBwcmVzc0h5ZHJhdGlvbldhcm5pbmciLCJkYXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/techsummit/EventCountdown.tsx\n"));

/***/ })

});