"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/components/landing/HeroNew.tsx":
/*!********************************************!*\
  !*** ./app/components/landing/HeroNew.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _buttons_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../buttons/Button */ \"(app-pages-browser)/./app/components/buttons/Button.tsx\");\n/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Navbar */ \"(app-pages-browser)/./app/components/Navbar.tsx\");\n/* harmony import */ var _images_slideshow3_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../images/slideshow3.jpg */ \"(app-pages-browser)/./app/images/slideshow3.jpg\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n// Event data (if you only want one event)\nconst event = {\n    title: \"KCL X UCL TechSummit 2024 - The UK's biggest student led career fair\",\n    description: \"\\uD83D\\uDC64 25+ guest speakers \\uD83D\\uDE80 15+  tech companies \\uD83D\\uDCAC 5+ panel discussions\",\n    image: _images_slideshow3_jpg__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n    link: \"https://www.kcltech.co.uk/hackkings.html\",\n    hex: \"#FF5733\"\n};\nconst Hero = ()=>{\n    _s();\n    const [isDropdownOpen, setDropdownOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const toggleDropdown = ()=>{\n        setDropdownOpen(!isDropdownOpen);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative h-screen min-h-[42rem]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Navbar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/johnpaulsandiego/Desktop/Projects ('23 - '25)/kcl-tech-website_next-js/app/components/landing/HeroNew.tsx\",\n                lineNumber: 32,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: event.image.src,\n                alt: \"Event Background\",\n                className: \"absolute inset-0 w-full h-full object-cover -z-1\",\n                style: {\n                    filter: \"brightness(0.20)\"\n                }\n            }, void 0, false, {\n                fileName: \"/Users/johnpaulsandiego/Desktop/Projects ('23 - '25)/kcl-tech-website_next-js/app/components/landing/HeroNew.tsx\",\n                lineNumber: 35,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative z-10 flex flex-col h-full\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"absolute left-[1.5rem] right-[1.5rem] top-[20%] md:left-[15%] md:pr-[15%] md:top-[25%] text-left\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"inline-block text-4xl md:text-6xl font-share-tech font-bold text-main-color bg-white bg-opacity-80 p-2 mb-2\",\n                                style: {\n                                    letterSpacing: \"-0.1em\"\n                                },\n                                children: \"Welcome to KCL Tech\"\n                            }, void 0, false, {\n                                fileName: \"/Users/johnpaulsandiego/Desktop/Projects ('23 - '25)/kcl-tech-website_next-js/app/components/landing/HeroNew.tsx\",\n                                lineNumber: 44,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"text-xl text-neutral-200 mb-[0.75rem] font-titillium\",\n                                children: \"King's College London's Technology Society\"\n                            }, void 0, false, {\n                                fileName: \"/Users/johnpaulsandiego/Desktop/Projects ('23 - '25)/kcl-tech-website_next-js/app/components/landing/HeroNew.tsx\",\n                                lineNumber: 47,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_buttons_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                id: \"becomeMemberBtn\",\n                                label: \"Become a Member\",\n                                onClick: ()=>window.open(\"https://www.kclsu.org/groups/activities/join/22559/\", \"_blank\"),\n                                type: \"white\"\n                            }, void 0, false, {\n                                fileName: \"/Users/johnpaulsandiego/Desktop/Projects ('23 - '25)/kcl-tech-website_next-js/app/components/landing/HeroNew.tsx\",\n                                lineNumber: 48,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/johnpaulsandiego/Desktop/Projects ('23 - '25)/kcl-tech-website_next-js/app/components/landing/HeroNew.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"absolute left-[1.5rem] right-[1.5rem] bottom-[20%] md:right-[15%] md:pl-[15%] md:bottom-[25%] text-right\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                id: \"eventTitle\",\n                                className: \"event-title text-neutral-50 text-2xl md:text-3xl font-bold\",\n                                children: event.title\n                            }, void 0, false, {\n                                fileName: \"/Users/johnpaulsandiego/Desktop/Projects ('23 - '25)/kcl-tech-website_next-js/app/components/landing/HeroNew.tsx\",\n                                lineNumber: 57,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                id: \"eventDescription\",\n                                className: \"event-description text-neutral-300 text-xl mt-2 mb-[0.75rem]\",\n                                children: event.description\n                            }, void 0, false, {\n                                fileName: \"/Users/johnpaulsandiego/Desktop/Projects ('23 - '25)/kcl-tech-website_next-js/app/components/landing/HeroNew.tsx\",\n                                lineNumber: 58,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                href: \"/techsummit\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_buttons_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    type: \"white\",\n                                    label: \"Check out TechSummit Here!\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/johnpaulsandiego/Desktop/Projects ('23 - '25)/kcl-tech-website_next-js/app/components/landing/HeroNew.tsx\",\n                                    lineNumber: 61,\n                                    columnNumber: 25\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/johnpaulsandiego/Desktop/Projects ('23 - '25)/kcl-tech-website_next-js/app/components/landing/HeroNew.tsx\",\n                                lineNumber: 60,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/johnpaulsandiego/Desktop/Projects ('23 - '25)/kcl-tech-website_next-js/app/components/landing/HeroNew.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/johnpaulsandiego/Desktop/Projects ('23 - '25)/kcl-tech-website_next-js/app/components/landing/HeroNew.tsx\",\n                lineNumber: 42,\n                columnNumber: 13\n            }, undefined),\n            isDropdownOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 z-50\",\n                onClick: toggleDropdown,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"absolute top-0 left-1/2 transform -translate-x-1/2 bg-white p-4 rounded-lg mt-16 w-full max-h-full overflow-y-auto\",\n                    onClick: (e)=>e.stopPropagation(),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex justify-between items-center mb-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"index.html\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        src: \"./images/logoicon.png\",\n                                        width: \"45px\",\n                                        alt: \"Inc Logo\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/johnpaulsandiego/Desktop/Projects ('23 - '25)/kcl-tech-website_next-js/app/components/landing/HeroNew.tsx\",\n                                        lineNumber: 80,\n                                        columnNumber: 33\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/johnpaulsandiego/Desktop/Projects ('23 - '25)/kcl-tech-website_next-js/app/components/landing/HeroNew.tsx\",\n                                    lineNumber: 79,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: toggleDropdown,\n                                    className: \"text-main-color\",\n                                    children: \"X\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/johnpaulsandiego/Desktop/Projects ('23 - '25)/kcl-tech-website_next-js/app/components/landing/HeroNew.tsx\",\n                                    lineNumber: 82,\n                                    columnNumber: 29\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/johnpaulsandiego/Desktop/Projects ('23 - '25)/kcl-tech-website_next-js/app/components/landing/HeroNew.tsx\",\n                            lineNumber: 78,\n                            columnNumber: 25\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            className: \"flex flex-col items-center text-md font-share-tech font-bold\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: \"cursor-pointer\",\n                                    children: \"Events Information\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/johnpaulsandiego/Desktop/Projects ('23 - '25)/kcl-tech-website_next-js/app/components/landing/HeroNew.tsx\",\n                                    lineNumber: 87,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: \"Staff Blogs\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/johnpaulsandiego/Desktop/Projects ('23 - '25)/kcl-tech-website_next-js/app/components/landing/HeroNew.tsx\",\n                                    lineNumber: 88,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: \"Sponsors\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/johnpaulsandiego/Desktop/Projects ('23 - '25)/kcl-tech-website_next-js/app/components/landing/HeroNew.tsx\",\n                                    lineNumber: 89,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: \"Student Opportunity Board\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/johnpaulsandiego/Desktop/Projects ('23 - '25)/kcl-tech-website_next-js/app/components/landing/HeroNew.tsx\",\n                                    lineNumber: 90,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: \"Become a Member\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/johnpaulsandiego/Desktop/Projects ('23 - '25)/kcl-tech-website_next-js/app/components/landing/HeroNew.tsx\",\n                                    lineNumber: 91,\n                                    columnNumber: 29\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/johnpaulsandiego/Desktop/Projects ('23 - '25)/kcl-tech-website_next-js/app/components/landing/HeroNew.tsx\",\n                            lineNumber: 86,\n                            columnNumber: 25\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/johnpaulsandiego/Desktop/Projects ('23 - '25)/kcl-tech-website_next-js/app/components/landing/HeroNew.tsx\",\n                    lineNumber: 74,\n                    columnNumber: 21\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/johnpaulsandiego/Desktop/Projects ('23 - '25)/kcl-tech-website_next-js/app/components/landing/HeroNew.tsx\",\n                lineNumber: 70,\n                columnNumber: 17\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/johnpaulsandiego/Desktop/Projects ('23 - '25)/kcl-tech-website_next-js/app/components/landing/HeroNew.tsx\",\n        lineNumber: 31,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Hero, \"hJ6a27XEWrHBkajgfxxxYGFpg2U=\");\n_c = Hero;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Hero);\nvar _c;\n$RefreshReg$(_c, \"Hero\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL2xhbmRpbmcvSGVyb05ldy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUV3QztBQUNEO0FBQ1I7QUFJc0I7QUFHeEI7QUFFN0IsMENBQTBDO0FBQzFDLE1BQU1NLFFBQVE7SUFDVkMsT0FBTztJQUNQQyxhQUFhO0lBQ2JDLE9BQU9MLDhEQUFVQTtJQUNqQk0sTUFBTTtJQUNOQyxLQUFLO0FBQ1Q7QUFFQSxNQUFNQyxPQUFPOztJQUNULE1BQU0sQ0FBQ0MsZ0JBQWdCQyxnQkFBZ0IsR0FBR2IsK0NBQVFBLENBQUM7SUFFbkQsTUFBTWMsaUJBQWlCO1FBQ25CRCxnQkFBZ0IsQ0FBQ0Q7SUFDckI7SUFFQSxxQkFDSSw4REFBQ0c7UUFBSUMsV0FBVTs7MEJBQ1gsOERBQUNkLCtDQUFNQTs7Ozs7MEJBR1AsOERBQUNlO2dCQUNHQyxLQUFLYixNQUFNRyxLQUFLLENBQUNVLEdBQUc7Z0JBQ3BCQyxLQUFJO2dCQUNKSCxXQUFVO2dCQUNWSSxPQUFPO29CQUFFQyxRQUFRO2dCQUFtQjs7Ozs7OzBCQUd4Qyw4REFBQ047Z0JBQUlDLFdBQVU7O2tDQUNYLDhEQUFDRDt3QkFBSUMsV0FBVTs7MENBQ1gsOERBQUNNO2dDQUFHTixXQUFVO2dDQUE4R0ksT0FBTztvQ0FBRUcsZUFBZTtnQ0FBUzswQ0FBRzs7Ozs7OzBDQUdoSyw4REFBQ0M7Z0NBQUdSLFdBQVU7MENBQXVEOzs7Ozs7MENBQ3JFLDhEQUFDZix1REFBTUE7Z0NBQ0h3QixJQUFHO2dDQUNIQyxPQUFNO2dDQUNOQyxTQUFTLElBQU1DLE9BQU9DLElBQUksQ0FBQyx1REFBdUQ7Z0NBQ2xGQyxNQUFLOzs7Ozs7Ozs7Ozs7a0NBSWIsOERBQUNmO3dCQUFJQyxXQUFVOzswQ0FDWCw4REFBQ007Z0NBQUdHLElBQUc7Z0NBQWFULFdBQVU7MENBQThEWCxNQUFNQyxLQUFLOzs7Ozs7MENBQ3ZHLDhEQUFDa0I7Z0NBQUdDLElBQUc7Z0NBQW1CVCxXQUFVOzBDQUFnRVgsTUFBTUUsV0FBVzs7Ozs7OzBDQUVySCw4REFBQ0gsaURBQUlBO2dDQUFDMkIsTUFBSzswQ0FDUCw0RUFBQzlCLHVEQUFNQTtvQ0FDSDZCLE1BQUs7b0NBQ0xKLE9BQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBTXJCZCxnQ0FDRyw4REFBQ0c7Z0JBQ0dDLFdBQVU7Z0JBQ1ZXLFNBQVNiOzBCQUVULDRFQUFDQztvQkFDR0MsV0FBVTtvQkFDVlcsU0FBUyxDQUFDSyxJQUFNQSxFQUFFQyxlQUFlOztzQ0FFakMsOERBQUNsQjs0QkFBSUMsV0FBVTs7OENBQ1gsOERBQUNrQjtvQ0FBRUgsTUFBSzs4Q0FDSiw0RUFBQ2Q7d0NBQUlDLEtBQUk7d0NBQXdCaUIsT0FBTTt3Q0FBT2hCLEtBQUk7Ozs7Ozs7Ozs7OzhDQUV0RCw4REFBQ2lCO29DQUFPVCxTQUFTYjtvQ0FBZ0JFLFdBQVU7OENBQWtCOzs7Ozs7Ozs7Ozs7c0NBSWpFLDhEQUFDcUI7NEJBQUdyQixXQUFVOzs4Q0FDViw4REFBQ3NCO29DQUFHdEIsV0FBVTs4Q0FBaUI7Ozs7Ozs4Q0FDL0IsOERBQUNzQjs4Q0FBRzs7Ozs7OzhDQUNKLDhEQUFDQTs4Q0FBRzs7Ozs7OzhDQUNKLDhEQUFDQTs4Q0FBRzs7Ozs7OzhDQUNKLDhEQUFDQTs4Q0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPaEM7R0EzRU0zQjtLQUFBQTtBQTZFTiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9sYW5kaW5nL0hlcm9OZXcudHN4PzBjNDciXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vYnV0dG9ucy9CdXR0b24nO1xuaW1wb3J0IE5hdmJhciBmcm9tICcuLi9OYXZiYXInO1xuXG5pbXBvcnQgSW1hZ2VPbmUgZnJvbSBcIi4uLy4uL2ltYWdlcy9waWN0dXJlLW9mLW1haW4uanBnXCI7XG5pbXBvcnQgSW1hZ2VUd28gZnJvbSBcIi4uLy4uL2ltYWdlcy9zbGlkZXNob3cyLmpwZ1wiO1xuaW1wb3J0IEltYWdlVGhyZWUgZnJvbSBcIi4uLy4uL2ltYWdlcy9zbGlkZXNob3czLmpwZ1wiO1xuaW1wb3J0IEltYWdlRm91ciBmcm9tIFwiLi4vLi4vaW1hZ2VzL3NsaWRlc2hvdzQuanBnXCI7XG5cbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbi8vIEV2ZW50IGRhdGEgKGlmIHlvdSBvbmx5IHdhbnQgb25lIGV2ZW50KVxuY29uc3QgZXZlbnQgPSB7XG4gICAgdGl0bGU6IFwiS0NMIFggVUNMIFRlY2hTdW1taXQgMjAyNCAtIFRoZSBVSydzIGJpZ2dlc3Qgc3R1ZGVudCBsZWQgY2FyZWVyIGZhaXJcIixcbiAgICBkZXNjcmlwdGlvbjogXCLwn5GkIDI1KyBndWVzdCBzcGVha2VycyDwn5qAIDE1KyAgdGVjaCBjb21wYW5pZXMg8J+SrCA1KyBwYW5lbCBkaXNjdXNzaW9uc1wiLFxuICAgIGltYWdlOiBJbWFnZVRocmVlLFxuICAgIGxpbms6IFwiaHR0cHM6Ly93d3cua2NsdGVjaC5jby51ay9oYWNra2luZ3MuaHRtbFwiLFxuICAgIGhleDogXCIjRkY1NzMzXCJcbn07XG5cbmNvbnN0IEhlcm8gPSAoKSA9PiB7XG4gICAgY29uc3QgW2lzRHJvcGRvd25PcGVuLCBzZXREcm9wZG93bk9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgY29uc3QgdG9nZ2xlRHJvcGRvd24gPSAoKSA9PiB7XG4gICAgICAgIHNldERyb3Bkb3duT3BlbighaXNEcm9wZG93bk9wZW4pO1xuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGgtc2NyZWVuIG1pbi1oLVs0MnJlbV1cIj5cbiAgICAgICAgICAgIDxOYXZiYXIgLz5cblxuICAgICAgICAgICAgey8qIEJhY2tncm91bmQgaW1hZ2UgKi99XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgc3JjPXtldmVudC5pbWFnZS5zcmN9XG4gICAgICAgICAgICAgICAgYWx0PVwiRXZlbnQgQmFja2dyb3VuZFwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtMCB3LWZ1bGwgaC1mdWxsIG9iamVjdC1jb3ZlciAtei0xXCJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBmaWx0ZXI6ICdicmlnaHRuZXNzKDAuMjApJyB9fVxuICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB6LTEwIGZsZXggZmxleC1jb2wgaC1mdWxsXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBsZWZ0LVsxLjVyZW1dIHJpZ2h0LVsxLjVyZW1dIHRvcC1bMjAlXSBtZDpsZWZ0LVsxNSVdIG1kOnByLVsxNSVdIG1kOnRvcC1bMjUlXSB0ZXh0LWxlZnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImlubGluZS1ibG9jayB0ZXh0LTR4bCBtZDp0ZXh0LTZ4bCBmb250LXNoYXJlLXRlY2ggZm9udC1ib2xkIHRleHQtbWFpbi1jb2xvciBiZy13aGl0ZSBiZy1vcGFjaXR5LTgwIHAtMiBtYi0yXCIgc3R5bGU9e3sgbGV0dGVyU3BhY2luZzogJy0wLjFlbScgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICBXZWxjb21lIHRvIEtDTCBUZWNoXG4gICAgICAgICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXhsIHRleHQtbmV1dHJhbC0yMDAgbWItWzAuNzVyZW1dIGZvbnQtdGl0aWxsaXVtXCI+S2luZydzIENvbGxlZ2UgTG9uZG9uJ3MgVGVjaG5vbG9neSBTb2NpZXR5PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJiZWNvbWVNZW1iZXJCdG5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJCZWNvbWUgYSBNZW1iZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gd2luZG93Lm9wZW4oJ2h0dHBzOi8vd3d3LmtjbHN1Lm9yZy9ncm91cHMvYWN0aXZpdGllcy9qb2luLzIyNTU5LycsICdfYmxhbmsnKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ3aGl0ZVwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGxlZnQtWzEuNXJlbV0gcmlnaHQtWzEuNXJlbV0gYm90dG9tLVsyMCVdIG1kOnJpZ2h0LVsxNSVdIG1kOnBsLVsxNSVdIG1kOmJvdHRvbS1bMjUlXSB0ZXh0LXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMSBpZD1cImV2ZW50VGl0bGVcIiBjbGFzc05hbWU9XCJldmVudC10aXRsZSB0ZXh0LW5ldXRyYWwtNTAgdGV4dC0yeGwgbWQ6dGV4dC0zeGwgZm9udC1ib2xkXCI+e2V2ZW50LnRpdGxlfTwvaDE+XG4gICAgICAgICAgICAgICAgICAgIDxoMiBpZD1cImV2ZW50RGVzY3JpcHRpb25cIiBjbGFzc05hbWU9XCJldmVudC1kZXNjcmlwdGlvbiB0ZXh0LW5ldXRyYWwtMzAwIHRleHQteGwgbXQtMiBtYi1bMC43NXJlbV1cIj57ZXZlbnQuZGVzY3JpcHRpb259PC9oMj5cblxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3RlY2hzdW1taXRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwid2hpdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQ2hlY2sgb3V0IFRlY2hTdW1taXQgSGVyZSFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIHtpc0Ryb3Bkb3duT3BlbiAmJiAoXG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmaXhlZCB0b3AtMCBsZWZ0LTAgdy1mdWxsIGgtZnVsbCBiZy1ibGFjayBiZy1vcGFjaXR5LTc1IHotNTBcIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVEcm9wZG93bn1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0wIGxlZnQtMS8yIHRyYW5zZm9ybSAtdHJhbnNsYXRlLXgtMS8yIGJnLXdoaXRlIHAtNCByb3VuZGVkLWxnIG10LTE2IHctZnVsbCBtYXgtaC1mdWxsIG92ZXJmbG93LXktYXV0b1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gZS5zdG9wUHJvcGFnYXRpb24oKX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgbWItNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJpbmRleC5odG1sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi9pbWFnZXMvbG9nb2ljb24ucG5nXCIgd2lkdGg9XCI0NXB4XCIgYWx0PVwiSW5jIExvZ29cIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RvZ2dsZURyb3Bkb3dufSBjbGFzc05hbWU9XCJ0ZXh0LW1haW4tY29sb3JcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgdGV4dC1tZCBmb250LXNoYXJlLXRlY2ggZm9udC1ib2xkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyXCI+RXZlbnRzIEluZm9ybWF0aW9uPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+U3RhZmYgQmxvZ3M8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5TcG9uc29yczwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlN0dWRlbnQgT3Bwb3J0dW5pdHkgQm9hcmQ8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5CZWNvbWUgYSBNZW1iZXI8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVybztcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiQnV0dG9uIiwiTmF2YmFyIiwiSW1hZ2VUaHJlZSIsIkxpbmsiLCJldmVudCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJpbWFnZSIsImxpbmsiLCJoZXgiLCJIZXJvIiwiaXNEcm9wZG93bk9wZW4iLCJzZXREcm9wZG93bk9wZW4iLCJ0b2dnbGVEcm9wZG93biIsImRpdiIsImNsYXNzTmFtZSIsImltZyIsInNyYyIsImFsdCIsInN0eWxlIiwiZmlsdGVyIiwiaDEiLCJsZXR0ZXJTcGFjaW5nIiwiaDIiLCJpZCIsImxhYmVsIiwib25DbGljayIsIndpbmRvdyIsIm9wZW4iLCJ0eXBlIiwiaHJlZiIsImUiLCJzdG9wUHJvcGFnYXRpb24iLCJhIiwid2lkdGgiLCJidXR0b24iLCJ1bCIsImxpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/landing/HeroNew.tsx\n"));

/***/ })

});