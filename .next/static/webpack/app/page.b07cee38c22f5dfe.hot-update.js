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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _buttons_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../buttons/Button */ \"(app-pages-browser)/./app/components/buttons/Button.tsx\");\n/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Navbar */ \"(app-pages-browser)/./app/components/Navbar.tsx\");\n/* harmony import */ var _images_slideshow3_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../images/slideshow3.jpg */ \"(app-pages-browser)/./app/images/slideshow3.jpg\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n// Event data (if you only want one event)\nconst event = {\n    title: \"KCL X UCL TechSummit 2024 - The UK's biggest student led career fair\",\n    description: \"\\uD83D\\uDC64 25+ guest speakers \\uD83D\\uDE80 15+  tech companies \\uD83D\\uDCAC 5+ panel discussions\",\n    image: _images_slideshow3_jpg__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n    link: \"https://www.kcltech.co.uk/hackkings.html\",\n    hex: \"#FF5733\"\n};\nconst Hero = ()=>{\n    _s();\n    const [isDropdownOpen, setDropdownOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const toggleDropdown = ()=>{\n        setDropdownOpen(!isDropdownOpen);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative h-screen min-h-[42rem]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Navbar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/johnpaulsandiego/Desktop/Projects ('23 - '25)/kcl-tech-website_next-js/app/components/landing/HeroNew.tsx\",\n                lineNumber: 32,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: event.image.src,\n                alt: \"Event Background\",\n                className: \"absolute inset-0 w-full h-full object-cover -z-1\",\n                style: {\n                    filter: \"brightness(0.20)\"\n                }\n            }, void 0, false, {\n                fileName: \"/Users/johnpaulsandiego/Desktop/Projects ('23 - '25)/kcl-tech-website_next-js/app/components/landing/HeroNew.tsx\",\n                lineNumber: 35,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative z-10 flex flex-col h-full\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"absolute left-[1.5rem] right-[1.5rem] top-[20%] md:left-[15%] md:pr-[15%] md:top-[25%] text-left\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"inline-block text-4xl md:text-6xl font-share-tech font-bold text-main-color bg-white bg-opacity-80 p-2 mb-2\",\n                                children: \"Welcome to KCL Tech\"\n                            }, void 0, false, {\n                                fileName: \"/Users/johnpaulsandiego/Desktop/Projects ('23 - '25)/kcl-tech-website_next-js/app/components/landing/HeroNew.tsx\",\n                                lineNumber: 44,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"text-md md:text-xl text-neutral-200 mb-2 font-titillium\",\n                                children: \"King's College London's Technology Society\"\n                            }, void 0, false, {\n                                fileName: \"/Users/johnpaulsandiego/Desktop/Projects ('23 - '25)/kcl-tech-website_next-js/app/components/landing/HeroNew.tsx\",\n                                lineNumber: 47,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_buttons_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                id: \"becomeMemberBtn\",\n                                label: \"Become a Member\",\n                                onClick: ()=>window.open(\"https://www.kclsu.org/groups/activities/join/22559/\", \"_blank\"),\n                                type: \"white\"\n                            }, void 0, false, {\n                                fileName: \"/Users/johnpaulsandiego/Desktop/Projects ('23 - '25)/kcl-tech-website_next-js/app/components/landing/HeroNew.tsx\",\n                                lineNumber: 48,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/johnpaulsandiego/Desktop/Projects ('23 - '25)/kcl-tech-website_next-js/app/components/landing/HeroNew.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"absolute left-[1.5rem] right-[1.5rem] bottom-[20%] md:right-[15%] md:pl-[15%] md:bottom-[25%] text-right\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                id: \"eventTitle\",\n                                className: \"event-title text-neutral-50 text-3xl font-bold\",\n                                children: event.title\n                            }, void 0, false, {\n                                fileName: \"/Users/johnpaulsandiego/Desktop/Projects ('23 - '25)/kcl-tech-website_next-js/app/components/landing/HeroNew.tsx\",\n                                lineNumber: 57,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                id: \"eventDescription\",\n                                className: \"event-description text-neutral-300 text-xl mt-2 mb-[0.5rem]\",\n                                children: event.description\n                            }, void 0, false, {\n                                fileName: \"/Users/johnpaulsandiego/Desktop/Projects ('23 - '25)/kcl-tech-website_next-js/app/components/landing/HeroNew.tsx\",\n                                lineNumber: 58,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                href: \"/techsummit\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_buttons_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    type: \"white\",\n                                    label: \"Check out TechSummit Here!\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/johnpaulsandiego/Desktop/Projects ('23 - '25)/kcl-tech-website_next-js/app/components/landing/HeroNew.tsx\",\n                                    lineNumber: 61,\n                                    columnNumber: 25\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/johnpaulsandiego/Desktop/Projects ('23 - '25)/kcl-tech-website_next-js/app/components/landing/HeroNew.tsx\",\n                                lineNumber: 60,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/johnpaulsandiego/Desktop/Projects ('23 - '25)/kcl-tech-website_next-js/app/components/landing/HeroNew.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/johnpaulsandiego/Desktop/Projects ('23 - '25)/kcl-tech-website_next-js/app/components/landing/HeroNew.tsx\",\n                lineNumber: 42,\n                columnNumber: 13\n            }, undefined),\n            isDropdownOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 z-50\",\n                onClick: toggleDropdown,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"absolute top-0 left-1/2 transform -translate-x-1/2 bg-white p-4 rounded-lg mt-16 w-full max-h-full overflow-y-auto\",\n                    onClick: (e)=>e.stopPropagation(),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex justify-between items-center mb-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"index.html\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        src: \"./images/logoicon.png\",\n                                        width: \"45px\",\n                                        alt: \"Inc Logo\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/johnpaulsandiego/Desktop/Projects ('23 - '25)/kcl-tech-website_next-js/app/components/landing/HeroNew.tsx\",\n                                        lineNumber: 80,\n                                        columnNumber: 33\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/johnpaulsandiego/Desktop/Projects ('23 - '25)/kcl-tech-website_next-js/app/components/landing/HeroNew.tsx\",\n                                    lineNumber: 79,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: toggleDropdown,\n                                    className: \"text-main-color\",\n                                    children: \"X\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/johnpaulsandiego/Desktop/Projects ('23 - '25)/kcl-tech-website_next-js/app/components/landing/HeroNew.tsx\",\n                                    lineNumber: 82,\n                                    columnNumber: 29\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/johnpaulsandiego/Desktop/Projects ('23 - '25)/kcl-tech-website_next-js/app/components/landing/HeroNew.tsx\",\n                            lineNumber: 78,\n                            columnNumber: 25\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            className: \"flex flex-col items-center text-md font-share-tech font-bold\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: \"cursor-pointer\",\n                                    children: \"Events Information\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/johnpaulsandiego/Desktop/Projects ('23 - '25)/kcl-tech-website_next-js/app/components/landing/HeroNew.tsx\",\n                                    lineNumber: 87,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: \"Staff Blogs\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/johnpaulsandiego/Desktop/Projects ('23 - '25)/kcl-tech-website_next-js/app/components/landing/HeroNew.tsx\",\n                                    lineNumber: 88,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: \"Sponsors\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/johnpaulsandiego/Desktop/Projects ('23 - '25)/kcl-tech-website_next-js/app/components/landing/HeroNew.tsx\",\n                                    lineNumber: 89,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: \"Student Opportunity Board\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/johnpaulsandiego/Desktop/Projects ('23 - '25)/kcl-tech-website_next-js/app/components/landing/HeroNew.tsx\",\n                                    lineNumber: 90,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: \"Become a Member\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/johnpaulsandiego/Desktop/Projects ('23 - '25)/kcl-tech-website_next-js/app/components/landing/HeroNew.tsx\",\n                                    lineNumber: 91,\n                                    columnNumber: 29\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/johnpaulsandiego/Desktop/Projects ('23 - '25)/kcl-tech-website_next-js/app/components/landing/HeroNew.tsx\",\n                            lineNumber: 86,\n                            columnNumber: 25\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/johnpaulsandiego/Desktop/Projects ('23 - '25)/kcl-tech-website_next-js/app/components/landing/HeroNew.tsx\",\n                    lineNumber: 74,\n                    columnNumber: 21\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/johnpaulsandiego/Desktop/Projects ('23 - '25)/kcl-tech-website_next-js/app/components/landing/HeroNew.tsx\",\n                lineNumber: 70,\n                columnNumber: 17\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/johnpaulsandiego/Desktop/Projects ('23 - '25)/kcl-tech-website_next-js/app/components/landing/HeroNew.tsx\",\n        lineNumber: 31,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Hero, \"hJ6a27XEWrHBkajgfxxxYGFpg2U=\");\n_c = Hero;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Hero);\nvar _c;\n$RefreshReg$(_c, \"Hero\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL2xhbmRpbmcvSGVyb05ldy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUV3QztBQUNEO0FBQ1I7QUFJc0I7QUFHeEI7QUFFN0IsMENBQTBDO0FBQzFDLE1BQU1NLFFBQVE7SUFDVkMsT0FBTztJQUNQQyxhQUFhO0lBQ2JDLE9BQU9MLDhEQUFVQTtJQUNqQk0sTUFBTTtJQUNOQyxLQUFLO0FBQ1Q7QUFFQSxNQUFNQyxPQUFPOztJQUNULE1BQU0sQ0FBQ0MsZ0JBQWdCQyxnQkFBZ0IsR0FBR2IsK0NBQVFBLENBQUM7SUFFbkQsTUFBTWMsaUJBQWlCO1FBQ25CRCxnQkFBZ0IsQ0FBQ0Q7SUFDckI7SUFFQSxxQkFDSSw4REFBQ0c7UUFBSUMsV0FBVTs7MEJBQ1gsOERBQUNkLCtDQUFNQTs7Ozs7MEJBR1AsOERBQUNlO2dCQUNHQyxLQUFLYixNQUFNRyxLQUFLLENBQUNVLEdBQUc7Z0JBQ3BCQyxLQUFJO2dCQUNKSCxXQUFVO2dCQUNWSSxPQUFPO29CQUFFQyxRQUFRO2dCQUFtQjs7Ozs7OzBCQUd4Qyw4REFBQ047Z0JBQUlDLFdBQVU7O2tDQUNYLDhEQUFDRDt3QkFBSUMsV0FBVTs7MENBQ1gsOERBQUNNO2dDQUFHTixXQUFVOzBDQUE4Rzs7Ozs7OzBDQUc1SCw4REFBQ087Z0NBQUdQLFdBQVU7MENBQTBEOzs7Ozs7MENBQ3hFLDhEQUFDZix1REFBTUE7Z0NBQ0h1QixJQUFHO2dDQUNIQyxPQUFNO2dDQUNOQyxTQUFTLElBQU1DLE9BQU9DLElBQUksQ0FBQyx1REFBdUQ7Z0NBQ2xGQyxNQUFLOzs7Ozs7Ozs7Ozs7a0NBSWIsOERBQUNkO3dCQUFJQyxXQUFVOzswQ0FDWCw4REFBQ007Z0NBQUdFLElBQUc7Z0NBQWFSLFdBQVU7MENBQWtEWCxNQUFNQyxLQUFLOzs7Ozs7MENBQzNGLDhEQUFDaUI7Z0NBQUdDLElBQUc7Z0NBQW1CUixXQUFVOzBDQUErRFgsTUFBTUUsV0FBVzs7Ozs7OzBDQUVwSCw4REFBQ0gsaURBQUlBO2dDQUFDMEIsTUFBSzswQ0FDUCw0RUFBQzdCLHVEQUFNQTtvQ0FDSDRCLE1BQUs7b0NBQ0xKLE9BQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBTXJCYixnQ0FDRyw4REFBQ0c7Z0JBQ0dDLFdBQVU7Z0JBQ1ZVLFNBQVNaOzBCQUVULDRFQUFDQztvQkFDR0MsV0FBVTtvQkFDVlUsU0FBUyxDQUFDSyxJQUFNQSxFQUFFQyxlQUFlOztzQ0FFakMsOERBQUNqQjs0QkFBSUMsV0FBVTs7OENBQ1gsOERBQUNpQjtvQ0FBRUgsTUFBSzs4Q0FDSiw0RUFBQ2I7d0NBQUlDLEtBQUk7d0NBQXdCZ0IsT0FBTTt3Q0FBT2YsS0FBSTs7Ozs7Ozs7Ozs7OENBRXRELDhEQUFDZ0I7b0NBQU9ULFNBQVNaO29DQUFnQkUsV0FBVTs4Q0FBa0I7Ozs7Ozs7Ozs7OztzQ0FJakUsOERBQUNvQjs0QkFBR3BCLFdBQVU7OzhDQUNWLDhEQUFDcUI7b0NBQUdyQixXQUFVOzhDQUFpQjs7Ozs7OzhDQUMvQiw4REFBQ3FCOzhDQUFHOzs7Ozs7OENBQ0osOERBQUNBOzhDQUFHOzs7Ozs7OENBQ0osOERBQUNBOzhDQUFHOzs7Ozs7OENBQ0osOERBQUNBOzhDQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9oQztHQTNFTTFCO0tBQUFBO0FBNkVOLCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL2xhbmRpbmcvSGVyb05ldy50c3g/MGM0NyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9idXR0b25zL0J1dHRvbic7XG5pbXBvcnQgTmF2YmFyIGZyb20gJy4uL05hdmJhcic7XG5cbmltcG9ydCBJbWFnZU9uZSBmcm9tIFwiLi4vLi4vaW1hZ2VzL3BpY3R1cmUtb2YtbWFpbi5qcGdcIjtcbmltcG9ydCBJbWFnZVR3byBmcm9tIFwiLi4vLi4vaW1hZ2VzL3NsaWRlc2hvdzIuanBnXCI7XG5pbXBvcnQgSW1hZ2VUaHJlZSBmcm9tIFwiLi4vLi4vaW1hZ2VzL3NsaWRlc2hvdzMuanBnXCI7XG5pbXBvcnQgSW1hZ2VGb3VyIGZyb20gXCIuLi8uLi9pbWFnZXMvc2xpZGVzaG93NC5qcGdcIjtcblxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuLy8gRXZlbnQgZGF0YSAoaWYgeW91IG9ubHkgd2FudCBvbmUgZXZlbnQpXG5jb25zdCBldmVudCA9IHtcbiAgICB0aXRsZTogXCJLQ0wgWCBVQ0wgVGVjaFN1bW1pdCAyMDI0IC0gVGhlIFVLJ3MgYmlnZ2VzdCBzdHVkZW50IGxlZCBjYXJlZXIgZmFpclwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIvCfkaQgMjUrIGd1ZXN0IHNwZWFrZXJzIPCfmoAgMTUrICB0ZWNoIGNvbXBhbmllcyDwn5KsIDUrIHBhbmVsIGRpc2N1c3Npb25zXCIsXG4gICAgaW1hZ2U6IEltYWdlVGhyZWUsXG4gICAgbGluazogXCJodHRwczovL3d3dy5rY2x0ZWNoLmNvLnVrL2hhY2traW5ncy5odG1sXCIsXG4gICAgaGV4OiBcIiNGRjU3MzNcIlxufTtcblxuY29uc3QgSGVybyA9ICgpID0+IHtcbiAgICBjb25zdCBbaXNEcm9wZG93bk9wZW4sIHNldERyb3Bkb3duT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgICBjb25zdCB0b2dnbGVEcm9wZG93biA9ICgpID0+IHtcbiAgICAgICAgc2V0RHJvcGRvd25PcGVuKCFpc0Ryb3Bkb3duT3Blbik7XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgaC1zY3JlZW4gbWluLWgtWzQycmVtXVwiPlxuICAgICAgICAgICAgPE5hdmJhciAvPlxuXG4gICAgICAgICAgICB7LyogQmFja2dyb3VuZCBpbWFnZSAqL31cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICBzcmM9e2V2ZW50LmltYWdlLnNyY31cbiAgICAgICAgICAgICAgICBhbHQ9XCJFdmVudCBCYWNrZ3JvdW5kXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wIHctZnVsbCBoLWZ1bGwgb2JqZWN0LWNvdmVyIC16LTFcIlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IGZpbHRlcjogJ2JyaWdodG5lc3MoMC4yMCknIH19XG4gICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHotMTAgZmxleCBmbGV4LWNvbCBoLWZ1bGxcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGxlZnQtWzEuNXJlbV0gcmlnaHQtWzEuNXJlbV0gdG9wLVsyMCVdIG1kOmxlZnQtWzE1JV0gbWQ6cHItWzE1JV0gbWQ6dG9wLVsyNSVdIHRleHQtbGVmdFwiPlxuICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIHRleHQtNHhsIG1kOnRleHQtNnhsIGZvbnQtc2hhcmUtdGVjaCBmb250LWJvbGQgdGV4dC1tYWluLWNvbG9yIGJnLXdoaXRlIGJnLW9wYWNpdHktODAgcC0yIG1iLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIFdlbGNvbWUgdG8gS0NMIFRlY2hcbiAgICAgICAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtbWQgbWQ6dGV4dC14bCB0ZXh0LW5ldXRyYWwtMjAwIG1iLTIgZm9udC10aXRpbGxpdW1cIj5LaW5nJ3MgQ29sbGVnZSBMb25kb24ncyBUZWNobm9sb2d5IFNvY2lldHk8L2gyPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cImJlY29tZU1lbWJlckJ0blwiXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkJlY29tZSBhIE1lbWJlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB3aW5kb3cub3BlbignaHR0cHM6Ly93d3cua2Nsc3Uub3JnL2dyb3Vwcy9hY3Rpdml0aWVzL2pvaW4vMjI1NTkvJywgJ19ibGFuaycpfVxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIndoaXRlXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgbGVmdC1bMS41cmVtXSByaWdodC1bMS41cmVtXSBib3R0b20tWzIwJV0gbWQ6cmlnaHQtWzE1JV0gbWQ6cGwtWzE1JV0gbWQ6Ym90dG9tLVsyNSVdIHRleHQtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgxIGlkPVwiZXZlbnRUaXRsZVwiIGNsYXNzTmFtZT1cImV2ZW50LXRpdGxlIHRleHQtbmV1dHJhbC01MCB0ZXh0LTN4bCBmb250LWJvbGRcIj57ZXZlbnQudGl0bGV9PC9oMT5cbiAgICAgICAgICAgICAgICAgICAgPGgyIGlkPVwiZXZlbnREZXNjcmlwdGlvblwiIGNsYXNzTmFtZT1cImV2ZW50LWRlc2NyaXB0aW9uIHRleHQtbmV1dHJhbC0zMDAgdGV4dC14bCBtdC0yIG1iLVswLjVyZW1dXCI+e2V2ZW50LmRlc2NyaXB0aW9ufTwvaDI+XG5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi90ZWNoc3VtbWl0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIndoaXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkNoZWNrIG91dCBUZWNoU3VtbWl0IEhlcmUhXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICB7aXNEcm9wZG93bk9wZW4gJiYgKFxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZml4ZWQgdG9wLTAgbGVmdC0wIHctZnVsbCBoLWZ1bGwgYmctYmxhY2sgYmctb3BhY2l0eS03NSB6LTUwXCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dG9nZ2xlRHJvcGRvd259XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMCBsZWZ0LTEvMiB0cmFuc2Zvcm0gLXRyYW5zbGF0ZS14LTEvMiBiZy13aGl0ZSBwLTQgcm91bmRlZC1sZyBtdC0xNiB3LWZ1bGwgbWF4LWgtZnVsbCBvdmVyZmxvdy15LWF1dG9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IGUuc3RvcFByb3BhZ2F0aW9uKCl9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIG1iLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaW5kZXguaHRtbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4vaW1hZ2VzL2xvZ29pY29uLnBuZ1wiIHdpZHRoPVwiNDVweFwiIGFsdD1cIkluYyBMb2dvXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0b2dnbGVEcm9wZG93bn0gY2xhc3NOYW1lPVwidGV4dC1tYWluLWNvbG9yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIHRleHQtbWQgZm9udC1zaGFyZS10ZWNoIGZvbnQtYm9sZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlclwiPkV2ZW50cyBJbmZvcm1hdGlvbjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlN0YWZmIEJsb2dzPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+U3BvbnNvcnM8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5TdHVkZW50IE9wcG9ydHVuaXR5IEJvYXJkPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+QmVjb21lIGEgTWVtYmVyPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlcm87XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkJ1dHRvbiIsIk5hdmJhciIsIkltYWdlVGhyZWUiLCJMaW5rIiwiZXZlbnQiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaW1hZ2UiLCJsaW5rIiwiaGV4IiwiSGVybyIsImlzRHJvcGRvd25PcGVuIiwic2V0RHJvcGRvd25PcGVuIiwidG9nZ2xlRHJvcGRvd24iLCJkaXYiLCJjbGFzc05hbWUiLCJpbWciLCJzcmMiLCJhbHQiLCJzdHlsZSIsImZpbHRlciIsImgxIiwiaDIiLCJpZCIsImxhYmVsIiwib25DbGljayIsIndpbmRvdyIsIm9wZW4iLCJ0eXBlIiwiaHJlZiIsImUiLCJzdG9wUHJvcGFnYXRpb24iLCJhIiwid2lkdGgiLCJidXR0b24iLCJ1bCIsImxpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/landing/HeroNew.tsx\n"));

/***/ })

});