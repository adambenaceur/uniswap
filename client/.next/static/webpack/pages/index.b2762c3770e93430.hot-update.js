"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Header.tsx":
/*!*******************************!*\
  !*** ./components/Header.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/fi */ \"./node_modules/react-icons/fi/index.esm.js\");\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/ai */ \"./node_modules/react-icons/ai/index.esm.js\");\n/* harmony import */ var react_icons_hi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/hi */ \"./node_modules/react-icons/hi/index.esm.js\");\n/* harmony import */ var _assets_eth_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/eth.png */ \"./assets/eth.png\");\n/* harmony import */ var _assets_uniswap_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/uniswap.png */ \"./assets/uniswap.png\");\n/* harmony import */ var _context_TransactionContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../context/TransactionContext */ \"./context/TransactionContext.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar style = {\n    wrapper: \"p-4 w-screen flex justify-between items-center\",\n    headerLogo: \"flex w-1/4 items-center justify-start\",\n    nav: \"flex-1 flex justify-center items-center\",\n    navItemsContainer: \"flex bg-[#191B1F] rounded-3xl\",\n    navItem: \"px-4 py-2 m-1 flex items-center text-lg font-semibold text-[0.9rem] cursor-pointer rounded-3xl\",\n    activeNavItem: \"bg-[#20242A]\",\n    buttonsContainer: \"flex w-1/4 justify-end items-center\",\n    button: \"flex items-center bg-[#191B1F] rounded-2xl mx-2 text-[0.9rem] font-semibold cursor-pointer \",\n    buttonPadding: \"p-2\",\n    buttonTextContainer: \"h-8 flex items-center \",\n    buttonIconContainer: \"flex items-center justify-center w-8 h-8\",\n    buttonAccent: \"bg-[#172A42] border border-[#163256] hover:border-[#234169] h-full rounded-2xl flex items-center justify-center text-[#4F90EA]\",\n    buttonActive: \"text-ellipsis overflow-hidden\"\n};\nvar Header = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('swap'), selectedNav = ref[0], setSelectedNav = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), userName = ref1[0], setUserName = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_context_TransactionContext__WEBPACK_IMPORTED_MODULE_5__.TransactionContext), connectWallet = ref2.connectWallet, currentAccount = ref2.currentAccount;\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        setUserName.toString();\n        setUserName(\"\".concat(currentAccount === null || currentAccount === void 0 ? void 0 : currentAccount.slice(0, 6), \" ... \").concat(currentAccount === null || currentAccount === void 0 ? void 0 : currentAccount.slice(38)));\n    }, [\n        currentAccount\n    ]);\n    console.log({\n        connectWallet: connectWallet,\n        currentAccount: currentAccount\n    });\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: style.wrapper,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: style.headerLogo,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    src: _assets_uniswap_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                    alt: \"uniswap\",\n                    height: 40,\n                    width: 40\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Header.tsx\",\n                    lineNumber: 44,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Header.tsx\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: style.nav,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: style.navItemsContainer,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            onClick: function() {\n                                return setSelectedNav('swap');\n                            },\n                            className: \"\".concat(style.navItem, \" \").concat(selectedNav === 'swap' && style.activeNavItem),\n                            children: \"Swap\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Header.tsx\",\n                            lineNumber: 48,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            onClick: function() {\n                                return setSelectedNav('pool');\n                            },\n                            className: \"\".concat(style.navItem, \" \").concat(selectedNav === 'pool' && style.activeNavItem),\n                            children: \"Pool\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Header.tsx\",\n                            lineNumber: 56,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            onClick: function() {\n                                return setSelectedNav('vote');\n                            },\n                            className: \"\".concat(style.navItem, \" \").concat(selectedNav === 'vote' && style.activeNavItem),\n                            children: \"Vote\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Header.tsx\",\n                            lineNumber: 64,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"https://info.uniswap.org/#/\",\n                            target: \"_blank\",\n                            rel: \"noreferrer\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: style.navItem,\n                                children: [\n                                    \"Charts \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fi__WEBPACK_IMPORTED_MODULE_6__.FiArrowUpRight, {}, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Header.tsx\",\n                                        lineNumber: 78,\n                                        columnNumber: 22\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Header.tsx\",\n                                lineNumber: 77,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Header.tsx\",\n                            lineNumber: 72,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Header.tsx\",\n                    lineNumber: 47,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Header.tsx\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: style.buttonsContainer,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"\".concat(style.button, \" \").concat(style.buttonPadding),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: style.buttonIconContainer,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    src: _assets_eth_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                                    alt: \"eth logo\",\n                                    height: 20,\n                                    width: 20\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Header.tsx\",\n                                    lineNumber: 87,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Header.tsx\",\n                                lineNumber: 86,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Ethereum\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Header.tsx\",\n                                lineNumber: 89,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: style.buttonIconContainer,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_7__.AiOutlineDown, {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Header.tsx\",\n                                    lineNumber: 91,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Header.tsx\",\n                                lineNumber: 90,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Header.tsx\",\n                        lineNumber: 85,\n                        columnNumber: 9\n                    }, _this),\n                    currentAccount ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"\".concat(style.button, \" \").concat(style.buttonPadding, \" \").concat(style.buttonActive),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"\".concat(style.buttonTextContainer, \" \").concat(style.buttonActive),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-ellipsis overflow-hidden text-lg font-normal uppercase\",\n                                children: [\n                                    userName,\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Header.tsx\",\n                                lineNumber: 97,\n                                columnNumber: 15\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Header.tsx\",\n                            lineNumber: 96,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Header.tsx\",\n                        lineNumber: 95,\n                        columnNumber: 11\n                    }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        onClick: function() {\n                            return connectWallet();\n                        },\n                        className: \"\".concat(style.button, \" \").concat(style.buttonPadding),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"\".concat(style.buttonAccent, \" \").concat(style.buttonPadding),\n                            children: \"Connect Wallet\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Header.tsx\",\n                            lineNumber: 106,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Header.tsx\",\n                        lineNumber: 102,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"\".concat(style.button, \" \").concat(style.buttonPadding),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"\".concat(style.buttonIconContainer, \" mx-2\"),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_hi__WEBPACK_IMPORTED_MODULE_8__.HiOutlineDotsVertical, {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Header.tsx\",\n                                lineNumber: 113,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Header.tsx\",\n                            lineNumber: 112,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Header.tsx\",\n                        lineNumber: 111,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Header.tsx\",\n                lineNumber: 84,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Header.tsx\",\n        lineNumber: 42,\n        columnNumber: 5\n    }, _this));\n};\n_s(Header, \"Xt6dATvQoQGd3gDbn4pJovt9hP8=\");\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q1csbUJBQW1CLEVBQUMsQ0FBSztrSEFDL0NoQixpRUFBcUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1sQyxDQUFDO0dBMUZLbUIsTUFBTTtLQUFOQSxNQUFNO0FBNEZaLCtEQUFlQSxNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvSGVhZGVyLnRzeD8wMzY4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgRmlBcnJvd1VwUmlnaHQgfSBmcm9tICdyZWFjdC1pY29ucy9maSdcbmltcG9ydCB7IEFpT3V0bGluZURvd24gfSBmcm9tICdyZWFjdC1pY29ucy9haSdcbmltcG9ydCB7IEhpT3V0bGluZURvdHNWZXJ0aWNhbCB9IGZyb20gJ3JlYWN0LWljb25zL2hpJ1xuaW1wb3J0IGV0aExvZ28gZnJvbSAnLi4vYXNzZXRzL2V0aC5wbmcnXG5pbXBvcnQgdW5pc3dhcExvZ28gZnJvbSAnLi4vYXNzZXRzL3VuaXN3YXAucG5nJ1xuaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVHJhbnNhY3Rpb25Db250ZXh0IH0gZnJvbSAnLi4vY29udGV4dC9UcmFuc2FjdGlvbkNvbnRleHQnXG5pbXBvcnQgeyBzdHJpbmdpZnkgfSBmcm9tICdxdWVyeXN0cmluZydcblxuY29uc3Qgc3R5bGUgPSB7XG4gIHdyYXBwZXI6IGBwLTQgdy1zY3JlZW4gZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyYCxcbiAgaGVhZGVyTG9nbzogYGZsZXggdy0xLzQgaXRlbXMtY2VudGVyIGp1c3RpZnktc3RhcnRgLFxuICBuYXY6IGBmbGV4LTEgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJgLFxuICBuYXZJdGVtc0NvbnRhaW5lcjogYGZsZXggYmctWyMxOTFCMUZdIHJvdW5kZWQtM3hsYCxcbiAgbmF2SXRlbTogYHB4LTQgcHktMiBtLTEgZmxleCBpdGVtcy1jZW50ZXIgdGV4dC1sZyBmb250LXNlbWlib2xkIHRleHQtWzAuOXJlbV0gY3Vyc29yLXBvaW50ZXIgcm91bmRlZC0zeGxgLFxuICBhY3RpdmVOYXZJdGVtOiBgYmctWyMyMDI0MkFdYCxcbiAgYnV0dG9uc0NvbnRhaW5lcjogYGZsZXggdy0xLzQganVzdGlmeS1lbmQgaXRlbXMtY2VudGVyYCxcbiAgYnV0dG9uOiBgZmxleCBpdGVtcy1jZW50ZXIgYmctWyMxOTFCMUZdIHJvdW5kZWQtMnhsIG14LTIgdGV4dC1bMC45cmVtXSBmb250LXNlbWlib2xkIGN1cnNvci1wb2ludGVyIGAsXG4gIGJ1dHRvblBhZGRpbmc6IGBwLTJgLFxuICBidXR0b25UZXh0Q29udGFpbmVyOiBgaC04IGZsZXggaXRlbXMtY2VudGVyIGAsXG4gIGJ1dHRvbkljb25Db250YWluZXI6IGBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB3LTggaC04YCxcbiAgYnV0dG9uQWNjZW50OiBgYmctWyMxNzJBNDJdIGJvcmRlciBib3JkZXItWyMxNjMyNTZdIGhvdmVyOmJvcmRlci1bIzIzNDE2OV0gaC1mdWxsIHJvdW5kZWQtMnhsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHRleHQtWyM0RjkwRUFdYCxcbiAgYnV0dG9uQWN0aXZlOiBgdGV4dC1lbGxpcHNpcyBvdmVyZmxvdy1oaWRkZW5gXG4gIFxufVxuXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XG4gIGNvbnN0IFtzZWxlY3RlZE5hdiwgc2V0U2VsZWN0ZWROYXZdID0gdXNlU3RhdGUoJ3N3YXAnKVxuICBjb25zdCBbdXNlck5hbWUsIHNldFVzZXJOYW1lXSA9IHVzZVN0YXRlPHN0cmluZz4oKVxuICBjb25zdCB7IGNvbm5lY3RXYWxsZXQsIGN1cnJlbnRBY2NvdW50IH0gPSB1c2VDb250ZXh0KFRyYW5zYWN0aW9uQ29udGV4dClcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFVzZXJOYW1lLnRvU3RyaW5nKClcbiAgICBzZXRVc2VyTmFtZShgJHtjdXJyZW50QWNjb3VudD8uc2xpY2UoMCw2KX0gLi4uICR7Y3VycmVudEFjY291bnQ/LnNsaWNlKDM4KX1gKVxuICB9LCBbY3VycmVudEFjY291bnRdKVxuXG4gIGNvbnNvbGUubG9nKHtjb25uZWN0V2FsbGV0LGN1cnJlbnRBY2NvdW50fSlcbiAgXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLndyYXBwZXJ9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmhlYWRlckxvZ299PlxuICAgICAgICA8SW1hZ2Ugc3JjPXt1bmlzd2FwTG9nb30gYWx0PSd1bmlzd2FwJyBoZWlnaHQ9ezQwfSB3aWR0aD17NDB9IC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5uYXZ9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUubmF2SXRlbXNDb250YWluZXJ9PlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNlbGVjdGVkTmF2KCdzd2FwJyl9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlLm5hdkl0ZW19ICR7XG4gICAgICAgICAgICAgIHNlbGVjdGVkTmF2ID09PSAnc3dhcCcgJiYgc3R5bGUuYWN0aXZlTmF2SXRlbVxuICAgICAgICAgICAgfWB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgU3dhcFxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNlbGVjdGVkTmF2KCdwb29sJyl9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlLm5hdkl0ZW19ICR7XG4gICAgICAgICAgICAgIHNlbGVjdGVkTmF2ID09PSAncG9vbCcgJiYgc3R5bGUuYWN0aXZlTmF2SXRlbVxuICAgICAgICAgICAgfWB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgUG9vbFxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNlbGVjdGVkTmF2KCd2b3RlJyl9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlLm5hdkl0ZW19ICR7XG4gICAgICAgICAgICAgIHNlbGVjdGVkTmF2ID09PSAndm90ZScgJiYgc3R5bGUuYWN0aXZlTmF2SXRlbVxuICAgICAgICAgICAgfWB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgVm90ZVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBocmVmPSdodHRwczovL2luZm8udW5pc3dhcC5vcmcvIy8nXG4gICAgICAgICAgICB0YXJnZXQ9J19ibGFuaydcbiAgICAgICAgICAgIHJlbD0nbm9yZWZlcnJlcidcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUubmF2SXRlbX0+XG4gICAgICAgICAgICAgIENoYXJ0cyA8RmlBcnJvd1VwUmlnaHQgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuYnV0dG9uc0NvbnRhaW5lcn0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZS5idXR0b259ICR7c3R5bGUuYnV0dG9uUGFkZGluZ31gfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuYnV0dG9uSWNvbkNvbnRhaW5lcn0+XG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPXtldGhMb2dvfSBhbHQ9J2V0aCBsb2dvJyBoZWlnaHQ9ezIwfSB3aWR0aD17MjB9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPHA+RXRoZXJldW08L3A+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmJ1dHRvbkljb25Db250YWluZXJ9PlxuICAgICAgICAgICAgPEFpT3V0bGluZURvd24gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgICAge2N1cnJlbnRBY2NvdW50ID8gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZS5idXR0b259ICR7c3R5bGUuYnV0dG9uUGFkZGluZ30gJHtzdHlsZS5idXR0b25BY3RpdmV9YH0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGUuYnV0dG9uVGV4dENvbnRhaW5lcn0gJHtzdHlsZS5idXR0b25BY3RpdmV9YH0+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0ndGV4dC1lbGxpcHNpcyBvdmVyZmxvdy1oaWRkZW4gdGV4dC1sZyBmb250LW5vcm1hbCB1cHBlcmNhc2UnPnt1c2VyTmFtZX0gPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICBcbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBjb25uZWN0V2FsbGV0KCl9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlLmJ1dHRvbn0gJHtzdHlsZS5idXR0b25QYWRkaW5nfWB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlLmJ1dHRvbkFjY2VudH0gJHtzdHlsZS5idXR0b25QYWRkaW5nfWB9PlxuICAgICAgICAgICAgICBDb25uZWN0IFdhbGxldFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+KSB9XG4gICAgICAgICAgXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZS5idXR0b259ICR7c3R5bGUuYnV0dG9uUGFkZGluZ31gfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGUuYnV0dG9uSWNvbkNvbnRhaW5lcn0gbXgtMmB9PlxuICAgICAgICAgICAgPEhpT3V0bGluZURvdHNWZXJ0aWNhbCAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlclxuIl0sIm5hbWVzIjpbIkltYWdlIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJGaUFycm93VXBSaWdodCIsIkFpT3V0bGluZURvd24iLCJIaU91dGxpbmVEb3RzVmVydGljYWwiLCJldGhMb2dvIiwidW5pc3dhcExvZ28iLCJ1c2VDb250ZXh0IiwiVHJhbnNhY3Rpb25Db250ZXh0Iiwic3R5bGUiLCJ3cmFwcGVyIiwiaGVhZGVyTG9nbyIsIm5hdiIsIm5hdkl0ZW1zQ29udGFpbmVyIiwibmF2SXRlbSIsImFjdGl2ZU5hdkl0ZW0iLCJidXR0b25zQ29udGFpbmVyIiwiYnV0dG9uIiwiYnV0dG9uUGFkZGluZyIsImJ1dHRvblRleHRDb250YWluZXIiLCJidXR0b25JY29uQ29udGFpbmVyIiwiYnV0dG9uQWNjZW50IiwiYnV0dG9uQWN0aXZlIiwiSGVhZGVyIiwic2VsZWN0ZWROYXYiLCJzZXRTZWxlY3RlZE5hdiIsInVzZXJOYW1lIiwic2V0VXNlck5hbWUiLCJjb25uZWN0V2FsbGV0IiwiY3VycmVudEFjY291bnQiLCJ0b1N0cmluZyIsInNsaWNlIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsInNyYyIsImFsdCIsImhlaWdodCIsIndpZHRoIiwib25DbGljayIsImEiLCJocmVmIiwidGFyZ2V0IiwicmVsIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Header.tsx\n");

/***/ })

});