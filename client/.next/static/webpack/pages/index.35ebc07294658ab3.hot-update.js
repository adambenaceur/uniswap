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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/fi */ \"./node_modules/react-icons/fi/index.esm.js\");\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/ai */ \"./node_modules/react-icons/ai/index.esm.js\");\n/* harmony import */ var react_icons_hi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/hi */ \"./node_modules/react-icons/hi/index.esm.js\");\n/* harmony import */ var _assets_eth_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/eth.png */ \"./assets/eth.png\");\n/* harmony import */ var _assets_uniswap_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/uniswap.png */ \"./assets/uniswap.png\");\n/* harmony import */ var _context_TransactionContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../context/TransactionContext */ \"./context/TransactionContext.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar style = {\n    wrapper: \"p-4 w-screen flex justify-between items-center\",\n    headerLogo: \"flex w-1/4 items-center justify-start\",\n    nav: \"flex-1 flex justify-center items-center\",\n    navItemsContainer: \"flex bg-[#191B1F] rounded-3xl\",\n    navItem: \"px-4 py-2 m-1 flex items-center text-lg font-semibold text-[0.9rem] cursor-pointer rounded-3xl\",\n    activeNavItem: \"bg-[#20242A]\",\n    buttonsContainer: \"flex w-1/4 justify-end items-center\",\n    button: \"flex items-center bg-[#191B1F] rounded-2xl mx-2 text-[0.9rem] font-semibold cursor-pointer\",\n    buttonPadding: \"p-2\",\n    buttonTextContainer: \"h-8 flex items-center\",\n    buttonIconContainer: \"flex items-center justify-center w-8 h-8\",\n    buttonAccent: \"bg-[#172A42] border border-[#163256] hover:border-[#234169] h-full rounded-2xl flex items-center justify-center text-[#4F90EA]\"\n};\nvar Header = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('swap'), selectedNav = ref[0], setSelectedNav = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), userName = ref1[0], setUserName = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_context_TransactionContext__WEBPACK_IMPORTED_MODULE_5__.TransactionContext), connectWallet = ref2.connectWallet, currentAccount = ref2.currentAccount;\n    console.log({\n        connectWallet: connectWallet,\n        currentAccount: currentAccount\n    });\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: style.wrapper,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: style.headerLogo,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    src: _assets_uniswap_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                    alt: \"uniswap\",\n                    height: 40,\n                    width: 40\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Header.tsx\",\n                    lineNumber: 36,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Header.tsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: style.nav,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: style.navItemsContainer,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            onClick: function() {\n                                return setSelectedNav('swap');\n                            },\n                            className: \"\".concat(style.navItem, \" \").concat(selectedNav === 'swap' && style.activeNavItem),\n                            children: \"Swap\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Header.tsx\",\n                            lineNumber: 40,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            onClick: function() {\n                                return setSelectedNav('pool');\n                            },\n                            className: \"\".concat(style.navItem, \" \").concat(selectedNav === 'pool' && style.activeNavItem),\n                            children: \"Pool\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Header.tsx\",\n                            lineNumber: 48,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            onClick: function() {\n                                return setSelectedNav('vote');\n                            },\n                            className: \"\".concat(style.navItem, \" \").concat(selectedNav === 'vote' && style.activeNavItem),\n                            children: \"Vote\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Header.tsx\",\n                            lineNumber: 56,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"https://info.uniswap.org/#/\",\n                            target: \"_blank\",\n                            rel: \"noreferrer\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: style.navItem,\n                                children: [\n                                    \"Charts \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fi__WEBPACK_IMPORTED_MODULE_6__.FiArrowUpRight, {}, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Header.tsx\",\n                                        lineNumber: 70,\n                                        columnNumber: 22\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Header.tsx\",\n                                lineNumber: 69,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Header.tsx\",\n                            lineNumber: 64,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Header.tsx\",\n                    lineNumber: 39,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Header.tsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: style.buttonsContainer,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"\".concat(style.button, \" \").concat(style.buttonPadding),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: style.buttonIconContainer,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    src: _assets_eth_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                                    alt: \"eth logo\",\n                                    height: 20,\n                                    width: 20\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Header.tsx\",\n                                    lineNumber: 79,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Header.tsx\",\n                                lineNumber: 78,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Ethereum\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Header.tsx\",\n                                lineNumber: 81,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: style.buttonIconContainer,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_7__.AiOutlineDown, {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Header.tsx\",\n                                    lineNumber: 83,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Header.tsx\",\n                                lineNumber: 82,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Header.tsx\",\n                        lineNumber: 77,\n                        columnNumber: 9\n                    }, _this),\n                    currentAccount ? 'username' : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        onClick: function() {\n                            return connectWallet();\n                        },\n                        className: \"\".concat(style.button, \" \").concat(style.buttonPadding),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"\".concat(style.buttonAccent, \" \").concat(style.buttonPadding),\n                            children: \"Connect Wallet\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Header.tsx\",\n                            lineNumber: 90,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Header.tsx\",\n                        lineNumber: 86,\n                        columnNumber: 43\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"\".concat(style.button, \" \").concat(style.buttonPadding),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"\".concat(style.buttonIconContainer, \" mx-2\"),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_hi__WEBPACK_IMPORTED_MODULE_8__.HiOutlineDotsVertical, {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Header.tsx\",\n                                lineNumber: 97,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Header.tsx\",\n                            lineNumber: 96,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Header.tsx\",\n                        lineNumber: 95,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Header.tsx\",\n                lineNumber: 76,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Header.tsx\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, _this));\n};\n_s(Header, \"5iCCFv0fg3z+HbME62rJaumqqV8=\");\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUssQ0FBQ1MsYUFBYTtzQ0FBSSxDQUVoRTs7Ozs7Ozs7Ozs7Z0dBR0hhLENBQUc7d0JBQUNDLFNBQVMsRUFBRyxHQUFrQnZCLE1BQW1CLENBQW5DQSxLQUFLLENBQUNRLE1BQU0sRUFBQyxDQUFDLElBQXNCLE9BQXBCUixLQUFLLENBQUNTLGFBQWE7OEdBQ25EYSxDQUFHOzRCQUFDQyxTQUFTLEVBQUcsR0FBNEIsTUFBSyxDQUEvQnZCLEtBQUssQ0FBQ1csbUJBQW1CLEVBQUMsQ0FBSztrSEFDL0NoQixpRUFBcUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1sQyxDQUFDO0dBN0VLa0IsTUFBTTtLQUFOQSxNQUFNO0FBK0VaLCtEQUFlQSxNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvSGVhZGVyLnRzeD8wMzY4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgRmlBcnJvd1VwUmlnaHQgfSBmcm9tICdyZWFjdC1pY29ucy9maSdcbmltcG9ydCB7IEFpT3V0bGluZURvd24gfSBmcm9tICdyZWFjdC1pY29ucy9haSdcbmltcG9ydCB7IEhpT3V0bGluZURvdHNWZXJ0aWNhbCB9IGZyb20gJ3JlYWN0LWljb25zL2hpJ1xuaW1wb3J0IGV0aExvZ28gZnJvbSAnLi4vYXNzZXRzL2V0aC5wbmcnXG5pbXBvcnQgdW5pc3dhcExvZ28gZnJvbSAnLi4vYXNzZXRzL3VuaXN3YXAucG5nJ1xuaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVHJhbnNhY3Rpb25Db250ZXh0IH0gZnJvbSAnLi4vY29udGV4dC9UcmFuc2FjdGlvbkNvbnRleHQnXG5cbmNvbnN0IHN0eWxlID0ge1xuICB3cmFwcGVyOiBgcC00IHctc2NyZWVuIGZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlcmAsXG4gIGhlYWRlckxvZ286IGBmbGV4IHctMS80IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LXN0YXJ0YCxcbiAgbmF2OiBgZmxleC0xIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyYCxcbiAgbmF2SXRlbXNDb250YWluZXI6IGBmbGV4IGJnLVsjMTkxQjFGXSByb3VuZGVkLTN4bGAsXG4gIG5hdkl0ZW06IGBweC00IHB5LTIgbS0xIGZsZXggaXRlbXMtY2VudGVyIHRleHQtbGcgZm9udC1zZW1pYm9sZCB0ZXh0LVswLjlyZW1dIGN1cnNvci1wb2ludGVyIHJvdW5kZWQtM3hsYCxcbiAgYWN0aXZlTmF2SXRlbTogYGJnLVsjMjAyNDJBXWAsXG4gIGJ1dHRvbnNDb250YWluZXI6IGBmbGV4IHctMS80IGp1c3RpZnktZW5kIGl0ZW1zLWNlbnRlcmAsXG4gIGJ1dHRvbjogYGZsZXggaXRlbXMtY2VudGVyIGJnLVsjMTkxQjFGXSByb3VuZGVkLTJ4bCBteC0yIHRleHQtWzAuOXJlbV0gZm9udC1zZW1pYm9sZCBjdXJzb3ItcG9pbnRlcmAsXG4gIGJ1dHRvblBhZGRpbmc6IGBwLTJgLFxuICBidXR0b25UZXh0Q29udGFpbmVyOiBgaC04IGZsZXggaXRlbXMtY2VudGVyYCxcbiAgYnV0dG9uSWNvbkNvbnRhaW5lcjogYGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHctOCBoLThgLFxuICBidXR0b25BY2NlbnQ6IGBiZy1bIzE3MkE0Ml0gYm9yZGVyIGJvcmRlci1bIzE2MzI1Nl0gaG92ZXI6Ym9yZGVyLVsjMjM0MTY5XSBoLWZ1bGwgcm91bmRlZC0yeGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdGV4dC1bIzRGOTBFQV1gLFxufVxuXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XG4gIGNvbnN0IFtzZWxlY3RlZE5hdiwgc2V0U2VsZWN0ZWROYXZdID0gdXNlU3RhdGUoJ3N3YXAnKVxuICBjb25zdCBbdXNlck5hbWUsIHNldFVzZXJOYW1lXSA9IHVzZVN0YXRlPHN0cmluZz4oKVxuICBjb25zdCB7IGNvbm5lY3RXYWxsZXQsIGN1cnJlbnRBY2NvdW50IH0gPSB1c2VDb250ZXh0KFRyYW5zYWN0aW9uQ29udGV4dClcblxuICBjb25zb2xlLmxvZyh7Y29ubmVjdFdhbGxldCxjdXJyZW50QWNjb3VudH0pXG4gIFxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS53cmFwcGVyfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5oZWFkZXJMb2dvfT5cbiAgICAgICAgPEltYWdlIHNyYz17dW5pc3dhcExvZ299IGFsdD0ndW5pc3dhcCcgaGVpZ2h0PXs0MH0gd2lkdGg9ezQwfSAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUubmF2fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLm5hdkl0ZW1zQ29udGFpbmVyfT5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTZWxlY3RlZE5hdignc3dhcCcpfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZS5uYXZJdGVtfSAke1xuICAgICAgICAgICAgICBzZWxlY3RlZE5hdiA9PT0gJ3N3YXAnICYmIHN0eWxlLmFjdGl2ZU5hdkl0ZW1cbiAgICAgICAgICAgIH1gfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIFN3YXBcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTZWxlY3RlZE5hdigncG9vbCcpfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZS5uYXZJdGVtfSAke1xuICAgICAgICAgICAgICBzZWxlY3RlZE5hdiA9PT0gJ3Bvb2wnICYmIHN0eWxlLmFjdGl2ZU5hdkl0ZW1cbiAgICAgICAgICAgIH1gfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIFBvb2xcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTZWxlY3RlZE5hdigndm90ZScpfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZS5uYXZJdGVtfSAke1xuICAgICAgICAgICAgICBzZWxlY3RlZE5hdiA9PT0gJ3ZvdGUnICYmIHN0eWxlLmFjdGl2ZU5hdkl0ZW1cbiAgICAgICAgICAgIH1gfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIFZvdGVcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgaHJlZj0naHR0cHM6Ly9pbmZvLnVuaXN3YXAub3JnLyMvJ1xuICAgICAgICAgICAgdGFyZ2V0PSdfYmxhbmsnXG4gICAgICAgICAgICByZWw9J25vcmVmZXJyZXInXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLm5hdkl0ZW19PlxuICAgICAgICAgICAgICBDaGFydHMgPEZpQXJyb3dVcFJpZ2h0IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgIFxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmJ1dHRvbnNDb250YWluZXJ9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGUuYnV0dG9ufSAke3N0eWxlLmJ1dHRvblBhZGRpbmd9YH0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmJ1dHRvbkljb25Db250YWluZXJ9PlxuICAgICAgICAgICAgPEltYWdlIHNyYz17ZXRoTG9nb30gYWx0PSdldGggbG9nbycgaGVpZ2h0PXsyMH0gd2lkdGg9ezIwfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxwPkV0aGVyZXVtPC9wPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5idXR0b25JY29uQ29udGFpbmVyfT5cbiAgICAgICAgICAgIDxBaU91dGxpbmVEb3duIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICAgIHtjdXJyZW50QWNjb3VudCA/ICd1c2VybmFtZScgOiAoPGRpdlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gY29ubmVjdFdhbGxldCgpfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZS5idXR0b259ICR7c3R5bGUuYnV0dG9uUGFkZGluZ31gfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZS5idXR0b25BY2NlbnR9ICR7c3R5bGUuYnV0dG9uUGFkZGluZ31gfT5cbiAgICAgICAgICAgICAgQ29ubmVjdCBXYWxsZXRcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PikgfVxuICAgICAgICAgIFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGUuYnV0dG9ufSAke3N0eWxlLmJ1dHRvblBhZGRpbmd9YH0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlLmJ1dHRvbkljb25Db250YWluZXJ9IG14LTJgfT5cbiAgICAgICAgICAgIDxIaU91dGxpbmVEb3RzVmVydGljYWwgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXJcbiJdLCJuYW1lcyI6WyJJbWFnZSIsInVzZVN0YXRlIiwiRmlBcnJvd1VwUmlnaHQiLCJBaU91dGxpbmVEb3duIiwiSGlPdXRsaW5lRG90c1ZlcnRpY2FsIiwiZXRoTG9nbyIsInVuaXN3YXBMb2dvIiwidXNlQ29udGV4dCIsIlRyYW5zYWN0aW9uQ29udGV4dCIsInN0eWxlIiwid3JhcHBlciIsImhlYWRlckxvZ28iLCJuYXYiLCJuYXZJdGVtc0NvbnRhaW5lciIsIm5hdkl0ZW0iLCJhY3RpdmVOYXZJdGVtIiwiYnV0dG9uc0NvbnRhaW5lciIsImJ1dHRvbiIsImJ1dHRvblBhZGRpbmciLCJidXR0b25UZXh0Q29udGFpbmVyIiwiYnV0dG9uSWNvbkNvbnRhaW5lciIsImJ1dHRvbkFjY2VudCIsIkhlYWRlciIsInNlbGVjdGVkTmF2Iiwic2V0U2VsZWN0ZWROYXYiLCJ1c2VyTmFtZSIsInNldFVzZXJOYW1lIiwiY29ubmVjdFdhbGxldCIsImN1cnJlbnRBY2NvdW50IiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsInNyYyIsImFsdCIsImhlaWdodCIsIndpZHRoIiwib25DbGljayIsImEiLCJocmVmIiwidGFyZ2V0IiwicmVsIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Header.tsx\n");

/***/ })

});