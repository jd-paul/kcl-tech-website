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

/***/ "(app-pages-browser)/./app/techsummit/CountdownTimer.tsx":
/*!*******************************************!*\
  !*** ./app/techsummit/CountdownTimer.tsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst CountdownTimer = (param)=>{\n    let { targetDate } = param;\n    _s();\n    const calculateTimeLeft = ()=>{\n        const eventDate = new Date(targetDate).getTime();\n        const now = new Date().getTime();\n        const difference = eventDate - now;\n        return {\n            days: Math.floor(difference / (1000 * 60 * 60 * 24)),\n            hours: Math.floor(difference % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)),\n            minutes: Math.floor(difference % (1000 * 60 * 60) / (1000 * 60)),\n            seconds: Math.floor(difference % (1000 * 60) / 1000)\n        };\n    };\n    const [timeLeft, setTimeLeft] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        days: 0,\n        hours: 0,\n        minutes: 0,\n        seconds: 0\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setTimeLeft(calculateTimeLeft()); // Set the initial value once client renders\n        const timer = setInterval(()=>{\n            setTimeLeft(calculateTimeLeft());\n        }, 1000);\n        return ()=>clearInterval(timer);\n    }, [\n        targetDate\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Countdown Timer\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Jocely\\\\pc.projectFiles\\\\kcl-tech-website\\\\app\\\\techsummit\\\\CountdownTimer.tsx\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    timeLeft.days,\n                    \"d \",\n                    timeLeft.hours,\n                    \"h \",\n                    timeLeft.minutes,\n                    \"m\",\n                    \" \",\n                    timeLeft.seconds,\n                    \"s\"\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Jocely\\\\pc.projectFiles\\\\kcl-tech-website\\\\app\\\\techsummit\\\\CountdownTimer.tsx\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Jocely\\\\pc.projectFiles\\\\kcl-tech-website\\\\app\\\\techsummit\\\\CountdownTimer.tsx\",\n        lineNumber: 42,\n        columnNumber: 5\n    }, undefined);\n};\n_s(CountdownTimer, \"vwewljmB3jrOpG1la7jDMqsJLWg=\");\n_c = CountdownTimer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CountdownTimer);\nvar _c;\n$RefreshReg$(_c, \"CountdownTimer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC90ZWNoc3VtbWl0L0NvdW50ZG93blRpbWVyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBbUQ7QUFFbkQsTUFBTUcsaUJBQW1EO1FBQUMsRUFBRUMsVUFBVSxFQUFFOztJQUN0RSxNQUFNQyxvQkFBb0I7UUFDeEIsTUFBTUMsWUFBWSxJQUFJQyxLQUFLSCxZQUFZSSxPQUFPO1FBQzlDLE1BQU1DLE1BQU0sSUFBSUYsT0FBT0MsT0FBTztRQUM5QixNQUFNRSxhQUFhSixZQUFZRztRQUUvQixPQUFPO1lBQ0xFLE1BQU1DLEtBQUtDLEtBQUssQ0FBQ0gsYUFBYyxRQUFPLEtBQUssS0FBSyxFQUFDO1lBQ2pESSxPQUFPRixLQUFLQyxLQUFLLENBQ2YsYUFBZSxRQUFPLEtBQUssS0FBSyxFQUFDLElBQU8sUUFBTyxLQUFLLEVBQUM7WUFFdkRFLFNBQVNILEtBQUtDLEtBQUssQ0FBQyxhQUFlLFFBQU8sS0FBSyxFQUFDLElBQU8sUUFBTyxFQUFDO1lBQy9ERyxTQUFTSixLQUFLQyxLQUFLLENBQUMsYUFBZSxRQUFPLEVBQUMsSUFBTTtRQUNuRDtJQUNGO0lBRUEsTUFBTSxDQUFDSSxVQUFVQyxZQUFZLEdBQUdqQiwrQ0FBUUEsQ0FLckM7UUFDRFUsTUFBTTtRQUNORyxPQUFPO1FBQ1BDLFNBQVM7UUFDVEMsU0FBUztJQUNYO0lBRUFkLGdEQUFTQSxDQUFDO1FBQ1JnQixZQUFZYixzQkFBc0IsNENBQTRDO1FBRTlFLE1BQU1jLFFBQVFDLFlBQVk7WUFDeEJGLFlBQVliO1FBQ2QsR0FBRztRQUVILE9BQU8sSUFBTWdCLGNBQWNGO0lBQzdCLEdBQUc7UUFBQ2Y7S0FBVztJQUVmLHFCQUNFLDhEQUFDa0I7OzBCQUNDLDhEQUFDQzswQkFBRzs7Ozs7OzBCQUNKLDhEQUFDRDs7b0JBQ0VMLFNBQVNOLElBQUk7b0JBQUM7b0JBQUdNLFNBQVNILEtBQUs7b0JBQUM7b0JBQUdHLFNBQVNGLE9BQU87b0JBQUM7b0JBQUU7b0JBQ3RERSxTQUFTRCxPQUFPO29CQUFDOzs7Ozs7Ozs7Ozs7O0FBSTFCO0dBL0NNYjtLQUFBQTtBQWlETiwrREFBZUEsY0FBY0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvdGVjaHN1bW1pdC9Db3VudGRvd25UaW1lci50c3g/YzFkOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgQ291bnRkb3duVGltZXI6IFJlYWN0LkZDPHsgdGFyZ2V0RGF0ZTogc3RyaW5nIH0+ID0gKHsgdGFyZ2V0RGF0ZSB9KSA9PiB7XHJcbiAgY29uc3QgY2FsY3VsYXRlVGltZUxlZnQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBldmVudERhdGUgPSBuZXcgRGF0ZSh0YXJnZXREYXRlKS5nZXRUaW1lKCk7XHJcbiAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgIGNvbnN0IGRpZmZlcmVuY2UgPSBldmVudERhdGUgLSBub3c7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgZGF5czogTWF0aC5mbG9vcihkaWZmZXJlbmNlIC8gKDEwMDAgKiA2MCAqIDYwICogMjQpKSxcclxuICAgICAgaG91cnM6IE1hdGguZmxvb3IoXHJcbiAgICAgICAgKGRpZmZlcmVuY2UgJSAoMTAwMCAqIDYwICogNjAgKiAyNCkpIC8gKDEwMDAgKiA2MCAqIDYwKVxyXG4gICAgICApLFxyXG4gICAgICBtaW51dGVzOiBNYXRoLmZsb29yKChkaWZmZXJlbmNlICUgKDEwMDAgKiA2MCAqIDYwKSkgLyAoMTAwMCAqIDYwKSksXHJcbiAgICAgIHNlY29uZHM6IE1hdGguZmxvb3IoKGRpZmZlcmVuY2UgJSAoMTAwMCAqIDYwKSkgLyAxMDAwKSxcclxuICAgIH07XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgW3RpbWVMZWZ0LCBzZXRUaW1lTGVmdF0gPSB1c2VTdGF0ZTx7XHJcbiAgICBkYXlzOiBudW1iZXI7XHJcbiAgICBob3VyczogbnVtYmVyO1xyXG4gICAgbWludXRlczogbnVtYmVyO1xyXG4gICAgc2Vjb25kczogbnVtYmVyO1xyXG4gIH0+KHtcclxuICAgIGRheXM6IDAsXHJcbiAgICBob3VyczogMCxcclxuICAgIG1pbnV0ZXM6IDAsXHJcbiAgICBzZWNvbmRzOiAwLFxyXG4gIH0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0VGltZUxlZnQoY2FsY3VsYXRlVGltZUxlZnQoKSk7IC8vIFNldCB0aGUgaW5pdGlhbCB2YWx1ZSBvbmNlIGNsaWVudCByZW5kZXJzXHJcblxyXG4gICAgY29uc3QgdGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgIHNldFRpbWVMZWZ0KGNhbGN1bGF0ZVRpbWVMZWZ0KCkpO1xyXG4gICAgfSwgMTAwMCk7XHJcblxyXG4gICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwodGltZXIpO1xyXG4gIH0sIFt0YXJnZXREYXRlXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8aDI+Q291bnRkb3duIFRpbWVyPC9oMj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICB7dGltZUxlZnQuZGF5c31kIHt0aW1lTGVmdC5ob3Vyc31oIHt0aW1lTGVmdC5taW51dGVzfW17XCIgXCJ9XHJcbiAgICAgICAge3RpbWVMZWZ0LnNlY29uZHN9c1xyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb3VudGRvd25UaW1lcjtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJDb3VudGRvd25UaW1lciIsInRhcmdldERhdGUiLCJjYWxjdWxhdGVUaW1lTGVmdCIsImV2ZW50RGF0ZSIsIkRhdGUiLCJnZXRUaW1lIiwibm93IiwiZGlmZmVyZW5jZSIsImRheXMiLCJNYXRoIiwiZmxvb3IiLCJob3VycyIsIm1pbnV0ZXMiLCJzZWNvbmRzIiwidGltZUxlZnQiLCJzZXRUaW1lTGVmdCIsInRpbWVyIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwiZGl2IiwiaDIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/techsummit/CountdownTimer.tsx\n"));

/***/ }),

/***/ "(app-pages-browser)/./app/techsummit/page.tsx":
/*!*********************************!*\
  !*** ./app/techsummit/page.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _images_picture_tech_summit_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/picture-tech-summit.jpg */ \"(app-pages-browser)/./app/images/picture-tech-summit.jpg\");\n/* harmony import */ var _components_buttons_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/buttons/Button */ \"(app-pages-browser)/./app/components/buttons/Button.tsx\");\n/* harmony import */ var _components_NavbarWhite__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/NavbarWhite */ \"(app-pages-browser)/./app/components/NavbarWhite.tsx\");\n/* harmony import */ var _CountdownTimer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CountdownTimer */ \"(app-pages-browser)/./app/techsummit/CountdownTimer.tsx\");\n/* harmony import */ var _components_landing_AboutNew__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/landing/AboutNew */ \"(app-pages-browser)/./app/components/landing/AboutNew.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\n\n\n\nconst Page = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NavbarWhite__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Jocely\\\\pc.projectFiles\\\\kcl-tech-website\\\\app\\\\techsummit\\\\page.tsx\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"slides-generic bg-[#202020]\",\n                style: {\n                    width: \"100%\",\n                    height: \"100%\",\n                    display: \"flex\",\n                    alignItems: \"center\",\n                    justifyContent: \"center\",\n                    paddingTop: \"6rem\",\n                    margin: 0\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: _images_picture_tech_summit_jpg__WEBPACK_IMPORTED_MODULE_2__[\"default\"].src,\n                        alt: \"Event Background\",\n                        className: \"absolute inset-0 w-full h-full object-cover\",\n                        style: {\n                            filter: \"brightness(0.20)\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Jocely\\\\pc.projectFiles\\\\kcl-tech-website\\\\app\\\\techsummit\\\\page.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative h-screen min-h-[42rem]\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"content-generic\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"responsive-grid py-[4rem] text-left\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                                className: \"font-playfair text-8xl font-black text-neutral-100\",\n                                                children: \"TechSummit\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Jocely\\\\pc.projectFiles\\\\kcl-tech-website\\\\app\\\\techsummit\\\\page.tsx\",\n                                                lineNumber: 42,\n                                                columnNumber: 17\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"font-playfair text-5xl font-normal italic text-accent-color-a\",\n                                                children: \"UCL x KCL Tech\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Jocely\\\\pc.projectFiles\\\\kcl-tech-website\\\\app\\\\techsummit\\\\page.tsx\",\n                                                lineNumber: 45,\n                                                columnNumber: 17\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\Jocely\\\\pc.projectFiles\\\\kcl-tech-website\\\\app\\\\techsummit\\\\page.tsx\",\n                                        lineNumber: 41,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"w-full max-w-[800px] text-left\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"h-[22rem] w-[100%] bg-neutral-900 p-[3rem]\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                                        className: \"font-exo font-black text-neutral-50 text-5xl\",\n                                                        children: \"COMING SOON\"\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\Jocely\\\\pc.projectFiles\\\\kcl-tech-website\\\\app\\\\techsummit\\\\page.tsx\",\n                                                        lineNumber: 53,\n                                                        columnNumber: 21\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_buttons_Button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                                        type: \"ticket\",\n                                                        label: \"GRAB YOUR TICKET\",\n                                                        urlLink: \"https://www.huzzle.app/events/techsummit-2024-518616\"\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\Jocely\\\\pc.projectFiles\\\\kcl-tech-website\\\\app\\\\techsummit\\\\page.tsx\",\n                                                        lineNumber: 57,\n                                                        columnNumber: 21\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CountdownTimer__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                                        targetDate: \"2024-10-19T10:00:00\"\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\Jocely\\\\pc.projectFiles\\\\kcl-tech-website\\\\app\\\\techsummit\\\\page.tsx\",\n                                                        lineNumber: 63,\n                                                        columnNumber: 21\n                                                    }, undefined)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"C:\\\\Users\\\\Jocely\\\\pc.projectFiles\\\\kcl-tech-website\\\\app\\\\techsummit\\\\page.tsx\",\n                                                lineNumber: 52,\n                                                columnNumber: 19\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Jocely\\\\pc.projectFiles\\\\kcl-tech-website\\\\app\\\\techsummit\\\\page.tsx\",\n                                            lineNumber: 51,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Jocely\\\\pc.projectFiles\\\\kcl-tech-website\\\\app\\\\techsummit\\\\page.tsx\",\n                                        lineNumber: 50,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Jocely\\\\pc.projectFiles\\\\kcl-tech-website\\\\app\\\\techsummit\\\\page.tsx\",\n                                lineNumber: 40,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Jocely\\\\pc.projectFiles\\\\kcl-tech-website\\\\app\\\\techsummit\\\\page.tsx\",\n                            lineNumber: 39,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Jocely\\\\pc.projectFiles\\\\kcl-tech-website\\\\app\\\\techsummit\\\\page.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Jocely\\\\pc.projectFiles\\\\kcl-tech-website\\\\app\\\\techsummit\\\\page.tsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative h-screen min-h-[42rem]\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    style: {\n                        width: \"100%\",\n                        maxWidth: \"1600px\",\n                        margin: \"0 auto\"\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative z-10 flex items-center justify-center h-full text-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"content-generic\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Jocely\\\\pc.projectFiles\\\\kcl-tech-website\\\\app\\\\techsummit\\\\page.tsx\",\n                            lineNumber: 76,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Jocely\\\\pc.projectFiles\\\\kcl-tech-website\\\\app\\\\techsummit\\\\page.tsx\",\n                        lineNumber: 75,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Jocely\\\\pc.projectFiles\\\\kcl-tech-website\\\\app\\\\techsummit\\\\page.tsx\",\n                    lineNumber: 73,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Jocely\\\\pc.projectFiles\\\\kcl-tech-website\\\\app\\\\techsummit\\\\page.tsx\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_landing_AboutNew__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Jocely\\\\pc.projectFiles\\\\kcl-tech-website\\\\app\\\\techsummit\\\\page.tsx\",\n                lineNumber: 81,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Jocely\\\\pc.projectFiles\\\\kcl-tech-website\\\\app\\\\techsummit\\\\page.tsx\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Page;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Page);\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC90ZWNoc3VtbWl0L3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFFMEI7QUFFNEI7QUFFSjtBQUNIO0FBQ0Q7QUFJUTtBQUV0RCxNQUFNTSxPQUFpQjtJQUNyQixxQkFDRSw4REFBQ0M7OzBCQUNDLDhEQUFDSiwrREFBTUE7Ozs7OzBCQUVQLDhEQUFDSTtnQkFDQ0MsV0FBVTtnQkFDVkMsT0FBTztvQkFDTEMsT0FBTztvQkFDUEMsUUFBUTtvQkFDUkMsU0FBUztvQkFDVEMsWUFBWTtvQkFDWkMsZ0JBQWdCO29CQUNoQkMsWUFBWTtvQkFDWkMsUUFBUTtnQkFDVjs7a0NBRUEsOERBQUNDO3dCQUNDQyxLQUFLakIsdUVBQUtBLENBQUNpQixHQUFHO3dCQUNkQyxLQUFJO3dCQUNKWCxXQUFVO3dCQUNWQyxPQUFPOzRCQUFFVyxRQUFRO3dCQUFtQjs7Ozs7O2tDQUV0Qyw4REFBQ2I7d0JBQUlDLFdBQVU7a0NBQ2IsNEVBQUNEOzRCQUFJQyxXQUFVO3NDQUNiLDRFQUFDRDtnQ0FBSUMsV0FBVTs7a0RBQ2IsOERBQUNEOzswREFDQyw4REFBQ2M7Z0RBQUdiLFdBQVU7MERBQXFEOzs7Ozs7MERBR25FLDhEQUFDYztnREFBRWQsV0FBVTswREFBZ0U7Ozs7Ozs7Ozs7OztrREFLL0UsOERBQUNEO2tEQUNDLDRFQUFDQTs0Q0FBSUMsV0FBVTtzREFDYiw0RUFBQ0Q7Z0RBQUlDLFdBQVU7O2tFQUNiLDhEQUFDYTt3REFBR2IsV0FBVTtrRUFBK0M7Ozs7OztrRUFJN0QsOERBQUNOLGtFQUFNQTt3REFDTHFCLE1BQUs7d0RBQ0xDLE9BQU87d0RBQ1BDLFNBQVE7Ozs7OztrRUFHViw4REFBQ3JCLHVEQUFjQTt3REFBQ3NCLFlBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQVN6Qyw4REFBQ25CO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDRDtvQkFBSUUsT0FBTzt3QkFBRUMsT0FBTzt3QkFBUWlCLFVBQVU7d0JBQVVYLFFBQVE7b0JBQVM7OEJBRWhFLDRFQUFDVDt3QkFBSUMsV0FBVTtrQ0FDYiw0RUFBQ0Q7NEJBQUlDLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFLckIsOERBQUNILG9FQUFRQTs7Ozs7Ozs7Ozs7QUFLZjtLQXZFTUM7QUF5RU4sK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3RlY2hzdW1taXQvcGFnZS50c3g/Njg1NCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuXHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCBSb2JvdCBmcm9tIFwiLi4vaW1hZ2VzL3BpY3R1cmUtdGVjaC1zdW1taXQuanBnXCI7XHJcblxyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi9jb21wb25lbnRzL2J1dHRvbnMvQnV0dG9uXCI7XHJcbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvTmF2YmFyV2hpdGVcIjtcclxuaW1wb3J0IENvdW50ZG93blRpbWVyIGZyb20gXCIuL0NvdW50ZG93blRpbWVyXCI7XHJcbmltcG9ydCBGb290ZXJDb250YWN0IGZyb20gXCIuLi9jb21wb25lbnRzL0Zvb3RlckNvbnRhY3RcIjtcclxuaW1wb3J0IFNsaWRpbmdGb290ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvTWFycXVlZVwiO1xyXG5cclxuaW1wb3J0IEFib3V0TmV3IGZyb20gXCIuLi9jb21wb25lbnRzL2xhbmRpbmcvQWJvdXROZXdcIjtcclxuXHJcbmNvbnN0IFBhZ2U6IFJlYWN0LkZDID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8TmF2YmFyIC8+XHJcblxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPVwic2xpZGVzLWdlbmVyaWMgYmctWyMyMDIwMjBdXCJcclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcclxuICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgcGFkZGluZ1RvcDogXCI2cmVtXCIsXHJcbiAgICAgICAgICBtYXJnaW46IDAsXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxpbWdcclxuICAgICAgICAgIHNyYz17Um9ib3Quc3JjfVxyXG4gICAgICAgICAgYWx0PVwiRXZlbnQgQmFja2dyb3VuZFwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wIHctZnVsbCBoLWZ1bGwgb2JqZWN0LWNvdmVyXCJcclxuICAgICAgICAgIHN0eWxlPXt7IGZpbHRlcjogXCJicmlnaHRuZXNzKDAuMjApXCIgfX0gLy8gRGltbWluZyB0aGUgaW1hZ2UgZm9yIHRleHQgY2xhcml0eVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBoLXNjcmVlbiBtaW4taC1bNDJyZW1dXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtZ2VuZXJpY1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlc3BvbnNpdmUtZ3JpZCBweS1bNHJlbV0gdGV4dC1sZWZ0XCI+XHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJmb250LXBsYXlmYWlyIHRleHQtOHhsIGZvbnQtYmxhY2sgdGV4dC1uZXV0cmFsLTEwMFwiPlxyXG4gICAgICAgICAgICAgICAgICBUZWNoU3VtbWl0XHJcbiAgICAgICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1wbGF5ZmFpciB0ZXh0LTV4bCBmb250LW5vcm1hbCBpdGFsaWMgdGV4dC1hY2NlbnQtY29sb3ItYVwiPlxyXG4gICAgICAgICAgICAgICAgICBVQ0wgeCBLQ0wgVGVjaFxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbWF4LXctWzgwMHB4XSB0ZXh0LWxlZnRcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLVsyMnJlbV0gdy1bMTAwJV0gYmctbmV1dHJhbC05MDAgcC1bM3JlbV1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZm9udC1leG8gZm9udC1ibGFjayB0ZXh0LW5ldXRyYWwtNTAgdGV4dC01eGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIENPTUlORyBTT09OXHJcbiAgICAgICAgICAgICAgICAgICAgPC9oMT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRpY2tldFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17XCJHUkFCIFlPVVIgVElDS0VUXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICB1cmxMaW5rPVwiaHR0cHM6Ly93d3cuaHV6emxlLmFwcC9ldmVudHMvdGVjaHN1bW1pdC0yMDI0LTUxODYxNlwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPENvdW50ZG93blRpbWVyIHRhcmdldERhdGU9XCIyMDI0LTEwLTE5VDEwOjAwOjAwXCIgLz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGgtc2NyZWVuIG1pbi1oLVs0MnJlbV1cIj5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgbWF4V2lkdGg6IFwiMTYwMHB4XCIsIG1hcmdpbjogXCIwIGF1dG9cIiB9fT5cclxuICAgICAgICAgIHsvKiBDb250ZW50IHNlY3Rpb24gKi99XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHotMTAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgaC1mdWxsIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1nZW5lcmljXCI+PC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8QWJvdXROZXcgLz5cclxuICAgICAgey8qIE9wdGlvbmFsIGZvb3RlciAqL31cclxuICAgICAgey8qIDxGb290ZXJDb250YWN0IC8+ICovfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBhZ2U7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlJvYm90IiwiQnV0dG9uIiwiTmF2YmFyIiwiQ291bnRkb3duVGltZXIiLCJBYm91dE5ldyIsIlBhZ2UiLCJkaXYiLCJjbGFzc05hbWUiLCJzdHlsZSIsIndpZHRoIiwiaGVpZ2h0IiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsInBhZGRpbmdUb3AiLCJtYXJnaW4iLCJpbWciLCJzcmMiLCJhbHQiLCJmaWx0ZXIiLCJoMSIsInAiLCJ0eXBlIiwibGFiZWwiLCJ1cmxMaW5rIiwidGFyZ2V0RGF0ZSIsIm1heFdpZHRoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/techsummit/page.tsx\n"));

/***/ })

});