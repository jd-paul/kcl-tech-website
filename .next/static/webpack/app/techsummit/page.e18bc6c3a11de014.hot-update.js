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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_countdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-countdown */ \"(app-pages-browser)/./node_modules/react-countdown/dist/index.es.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst EventCountdown = (param)=>{\n    let { eventDate } = param;\n    _s();\n    const [isMounted, setIsMounted] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    // Wait until the component has mounted on the client\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setIsMounted(true);\n    }, []);\n    // Renderer callback function\n    const renderer = (param)=>{\n        let { days, hours, minutes, seconds, completed } = param;\n        if (completed) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                children: \"Event has started!\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Jocely\\\\pc.projectFiles\\\\kcl-tech-website\\\\app\\\\techsummit\\\\EventCountdown.tsx\",\n                lineNumber: 25,\n                columnNumber: 14\n            }, undefined);\n        } else {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Countdown to the Event\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Jocely\\\\pc.projectFiles\\\\kcl-tech-website\\\\app\\\\techsummit\\\\EventCountdown.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            days,\n                            \" days \",\n                            hours,\n                            \" hours \",\n                            minutes,\n                            \" minutes \",\n                            seconds,\n                            \" seconds\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Jocely\\\\pc.projectFiles\\\\kcl-tech-website\\\\app\\\\techsummit\\\\EventCountdown.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Jocely\\\\pc.projectFiles\\\\kcl-tech-website\\\\app\\\\techsummit\\\\EventCountdown.tsx\",\n                lineNumber: 28,\n                columnNumber: 9\n            }, undefined);\n        }\n    };\n    // Only render the countdown after the component has mounted\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"countdown-container\",\n        children: isMounted ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_countdown__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            date: eventDate,\n            renderer: renderer\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Jocely\\\\pc.projectFiles\\\\kcl-tech-website\\\\app\\\\techsummit\\\\EventCountdown.tsx\",\n            lineNumber: 42,\n            columnNumber: 9\n        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Jocely\\\\pc.projectFiles\\\\kcl-tech-website\\\\app\\\\techsummit\\\\EventCountdown.tsx\",\n            lineNumber: 44,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Jocely\\\\pc.projectFiles\\\\kcl-tech-website\\\\app\\\\techsummit\\\\EventCountdown.tsx\",\n        lineNumber: 40,\n        columnNumber: 5\n    }, undefined);\n};\n_s(EventCountdown, \"h7njlszr1nxUzrk46zHyBTBrvgI=\");\n_c = EventCountdown;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EventCountdown);\nvar _c;\n$RefreshReg$(_c, \"EventCountdown\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC90ZWNoc3VtbWl0L0V2ZW50Q291bnRkb3duLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQW1EO0FBQ2M7QUFNakUsTUFBTUksaUJBQWdEO1FBQUMsRUFBRUMsU0FBUyxFQUFFOztJQUNsRSxNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR04sK0NBQVFBLENBQUM7SUFFM0MscURBQXFEO0lBQ3JEQyxnREFBU0EsQ0FBQztRQUNSSyxhQUFhO0lBQ2YsR0FBRyxFQUFFO0lBRUwsNkJBQTZCO0lBQzdCLE1BQU1DLFdBQWdDO1lBQUMsRUFDckNDLElBQUksRUFDSkMsS0FBSyxFQUNMQyxPQUFPLEVBQ1BDLE9BQU8sRUFDUEMsU0FBUyxFQUNWO1FBQ0MsSUFBSUEsV0FBVztZQUNiLHFCQUFPLDhEQUFDQzswQkFBSzs7Ozs7O1FBQ2YsT0FBTztZQUNMLHFCQUNFLDhEQUFDQzs7a0NBQ0MsOERBQUNDO2tDQUFHOzs7Ozs7a0NBQ0osOERBQUNDOzs0QkFDRVI7NEJBQUs7NEJBQU9DOzRCQUFNOzRCQUFRQzs0QkFBUTs0QkFBVUM7NEJBQVE7Ozs7Ozs7Ozs7Ozs7UUFJN0Q7SUFDRjtJQUVBLDREQUE0RDtJQUM1RCxxQkFDRSw4REFBQ0c7UUFBSUcsV0FBVTtrQkFDWlosMEJBQ0MsOERBQUNILHVEQUFTQTtZQUFDZ0IsTUFBTWQ7WUFBV0csVUFBVUE7Ozs7O3NDQUV0Qyw4REFBQ1M7c0JBQUU7Ozs7Ozs7Ozs7O0FBSVg7R0F4Q01iO0tBQUFBO0FBMENOLCtEQUFlQSxjQUFjQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC90ZWNoc3VtbWl0L0V2ZW50Q291bnRkb3duLnRzeD9iNzM0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBDb3VudGRvd24sIHsgQ291bnRkb3duUmVuZGVyZXJGbiB9IGZyb20gXCJyZWFjdC1jb3VudGRvd25cIjtcclxuXHJcbmludGVyZmFjZSBFdmVudENvdW50ZG93blByb3BzIHtcclxuICBldmVudERhdGU6IERhdGU7XHJcbn1cclxuXHJcbmNvbnN0IEV2ZW50Q291bnRkb3duOiBSZWFjdC5GQzxFdmVudENvdW50ZG93blByb3BzPiA9ICh7IGV2ZW50RGF0ZSB9KSA9PiB7XHJcbiAgY29uc3QgW2lzTW91bnRlZCwgc2V0SXNNb3VudGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgLy8gV2FpdCB1bnRpbCB0aGUgY29tcG9uZW50IGhhcyBtb3VudGVkIG9uIHRoZSBjbGllbnRcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0SXNNb3VudGVkKHRydWUpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgLy8gUmVuZGVyZXIgY2FsbGJhY2sgZnVuY3Rpb25cclxuICBjb25zdCByZW5kZXJlcjogQ291bnRkb3duUmVuZGVyZXJGbiA9ICh7XHJcbiAgICBkYXlzLFxyXG4gICAgaG91cnMsXHJcbiAgICBtaW51dGVzLFxyXG4gICAgc2Vjb25kcyxcclxuICAgIGNvbXBsZXRlZCxcclxuICB9KSA9PiB7XHJcbiAgICBpZiAoY29tcGxldGVkKSB7XHJcbiAgICAgIHJldHVybiA8c3Bhbj5FdmVudCBoYXMgc3RhcnRlZCE8L3NwYW4+O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGgxPkNvdW50ZG93biB0byB0aGUgRXZlbnQ8L2gxPlxyXG4gICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgIHtkYXlzfSBkYXlzIHtob3Vyc30gaG91cnMge21pbnV0ZXN9IG1pbnV0ZXMge3NlY29uZHN9IHNlY29uZHNcclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICAvLyBPbmx5IHJlbmRlciB0aGUgY291bnRkb3duIGFmdGVyIHRoZSBjb21wb25lbnQgaGFzIG1vdW50ZWRcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb3VudGRvd24tY29udGFpbmVyXCI+XHJcbiAgICAgIHtpc01vdW50ZWQgPyAoXHJcbiAgICAgICAgPENvdW50ZG93biBkYXRlPXtldmVudERhdGV9IHJlbmRlcmVyPXtyZW5kZXJlcn0gLz5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8cD5Mb2FkaW5nLi4uPC9wPlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEV2ZW50Q291bnRkb3duO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkNvdW50ZG93biIsIkV2ZW50Q291bnRkb3duIiwiZXZlbnREYXRlIiwiaXNNb3VudGVkIiwic2V0SXNNb3VudGVkIiwicmVuZGVyZXIiLCJkYXlzIiwiaG91cnMiLCJtaW51dGVzIiwic2Vjb25kcyIsImNvbXBsZXRlZCIsInNwYW4iLCJkaXYiLCJoMSIsInAiLCJjbGFzc05hbWUiLCJkYXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/techsummit/EventCountdown.tsx\n"));

/***/ })

});