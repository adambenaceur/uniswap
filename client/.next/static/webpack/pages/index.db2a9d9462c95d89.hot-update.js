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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/fi */ \"./node_modules/react-icons/fi/index.esm.js\");\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/ai */ \"./node_modules/react-icons/ai/index.esm.js\");\n/* harmony import */ var react_icons_hi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/hi */ \"./node_modules/react-icons/hi/index.esm.js\");\n/* harmony import */ var _assets_eth_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/eth.png */ \"./assets/eth.png\");\n/* harmony import */ var _assets_uniswap_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/uniswap.png */ \"./assets/uniswap.png\");\n/* harmony import */ var _context_TransactionContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../context/TransactionContext */ \"./context/TransactionContext.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar style = {\n    wrapper: \"p-4 w-screen flex justify-between items-center\",\n    headerLogo: \"flex w-1/4 items-center justify-start\",\n    nav: \"flex-1 flex justify-center items-center\",\n    navItemsContainer: \"flex bg-[#191B1F] rounded-3xl\",\n    navItem: \"px-4 py-2 m-1 flex items-center text-lg font-semibold text-[0.9rem] cursor-pointer rounded-3xl\",\n    activeNavItem: \"bg-[#20242A]\",\n    buttonsContainer: \"flex w-1/4 justify-end items-center\",\n    button: \"flex items-center bg-[#191B1F] rounded-2xl mx-2 text-[0.9rem] font-semibold cursor-pointer \",\n    buttonPadding: \"p-2\",\n    buttonTextContainer: \"h-8 flex items-center \",\n    buttonIconContainer: \"flex items-center justify-center w-8 h-8\",\n    buttonAccent: \"bg-[#172A42] border border-[#163256] hover:border-[#234169] h-full rounded-2xl flex items-center justify-center text-[#4F90EA]\",\n    buttonActive: \"text-ellipsis overflow-hidden ...\"\n};\nvar Header = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('swap'), selectedNav = ref[0], setSelectedNav = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), userName = ref1[0], setUserName = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_context_TransactionContext__WEBPACK_IMPORTED_MODULE_5__.TransactionContext), connectWallet = ref2.connectWallet, currentAccount = ref2.currentAccount;\n    console.log({\n        connectWallet: connectWallet,\n        currentAccount: currentAccount\n    });\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: style.wrapper,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: style.headerLogo,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    src: _assets_uniswap_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                    alt: \"uniswap\",\n                    height: 40,\n                    width: 40\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Header.tsx\",\n                    lineNumber: 37,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Header.tsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: style.nav,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: style.navItemsContainer,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            onClick: function() {\n                                return setSelectedNav('swap');\n                            },\n                            className: \"\".concat(style.navItem, \" \").concat(selectedNav === 'swap' && style.activeNavItem),\n                            children: \"Swap\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Header.tsx\",\n                            lineNumber: 41,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            onClick: function() {\n                                return setSelectedNav('pool');\n                            },\n                            className: \"\".concat(style.navItem, \" \").concat(selectedNav === 'pool' && style.activeNavItem),\n                            children: \"Pool\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Header.tsx\",\n                            lineNumber: 49,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            onClick: function() {\n                                return setSelectedNav('vote');\n                            },\n                            className: \"\".concat(style.navItem, \" \").concat(selectedNav === 'vote' && style.activeNavItem),\n                            children: \"Vote\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Header.tsx\",\n                            lineNumber: 57,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"https://info.uniswap.org/#/\",\n                            target: \"_blank\",\n                            rel: \"noreferrer\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: style.navItem,\n                                children: [\n                                    \"Charts \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fi__WEBPACK_IMPORTED_MODULE_6__.FiArrowUpRight, {}, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Header.tsx\",\n                                        lineNumber: 71,\n                                        columnNumber: 22\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Header.tsx\",\n                                lineNumber: 70,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Header.tsx\",\n                            lineNumber: 65,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Header.tsx\",\n                    lineNumber: 40,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Header.tsx\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: style.buttonsContainer,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"\".concat(style.button, \" \").concat(style.buttonPadding),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: style.buttonIconContainer,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    src: _assets_eth_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                                    alt: \"eth logo\",\n                                    height: 20,\n                                    width: 20\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Header.tsx\",\n                                    lineNumber: 80,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Header.tsx\",\n                                lineNumber: 79,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Ethereum\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Header.tsx\",\n                                lineNumber: 82,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: style.buttonIconContainer,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_7__.AiOutlineDown, {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Header.tsx\",\n                                    lineNumber: 84,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Header.tsx\",\n                                lineNumber: 83,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Header.tsx\",\n                        lineNumber: 78,\n                        columnNumber: 9\n                    }, _this),\n                    currentAccount ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"\".concat(style.button, \" \").concat(style.buttonPadding, \" \").concat(style.buttonActive),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"\".concat(style.buttonTextContainer, \" \").concat(style.buttonActive),\n                            children: [\n                                currentAccount,\n                                \" ...\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Header.tsx\",\n                            lineNumber: 89,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Header.tsx\",\n                        lineNumber: 88,\n                        columnNumber: 11\n                    }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        onClick: function() {\n                            return connectWallet();\n                        },\n                        className: \"\".concat(style.button, \" \").concat(style.buttonPadding),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"\".concat(style.buttonAccent, \" \").concat(style.buttonPadding),\n                            children: \"Connect Wallet\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Header.tsx\",\n                            lineNumber: 99,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Header.tsx\",\n                        lineNumber: 95,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"\".concat(style.button, \" \").concat(style.buttonPadding),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"\".concat(style.buttonIconContainer, \" mx-2\"),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_hi__WEBPACK_IMPORTED_MODULE_8__.HiOutlineDotsVertical, {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Header.tsx\",\n                                lineNumber: 106,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Header.tsx\",\n                            lineNumber: 105,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Header.tsx\",\n                        lineNumber: 104,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Header.tsx\",\n                lineNumber: 77,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Header.tsx\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, _this));\n};\n_s(Header, \"5iCCFv0fg3z+HbME62rJaumqqV8=\");\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFxQixPQUFuQlYsS0FBSyxDQUFDYSxZQUFZOztnQ0FDL0RPLGNBQWM7Z0NBQUMsQ0FDbEI7Ozs7Ozs7Ozs7OzRHQUlERyxDQUFHO3dCQUNGTSxPQUFPLEVBQUUsUUFBUTs0QkFBRlYsTUFBTSxDQUFOQSxhQUFhOzt3QkFDNUJLLFNBQVMsRUFBRyxHQUFrQnhCLE1BQW1CLENBQW5DQSxLQUFLLENBQUNRLE1BQU0sRUFBQyxDQUFDLElBQXNCLE9BQXBCUixLQUFLLENBQUNTLGFBQWE7OEdBRWhEYyxDQUFHOzRCQUFDQyxTQUFTLEVBQUcsR0FBd0J4QixNQUFtQixDQUF6Q0EsS0FBSyxDQUFDWSxZQUFZLEVBQUMsQ0FBQyxJQUFzQixPQUFwQlosS0FBSyxDQUFDUyxhQUFhO3NDQUFJLENBRWhFOzs7Ozs7Ozs7OztnR0FHSGMsQ0FBRzt3QkFBQ0MsU0FBUyxFQUFHLEdBQWtCeEIsTUFBbUIsQ0FBbkNBLEtBQUssQ0FBQ1EsTUFBTSxFQUFDLENBQUMsSUFBc0IsT0FBcEJSLEtBQUssQ0FBQ1MsYUFBYTs4R0FDbkRjLENBQUc7NEJBQUNDLFNBQVMsRUFBRyxHQUE0QixNQUFLLENBQS9CeEIsS0FBSyxDQUFDVyxtQkFBbUIsRUFBQyxDQUFLO2tIQUMvQ2hCLGlFQUFxQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTWxDLENBQUM7R0FyRkttQixNQUFNO0tBQU5BLE1BQU07QUF1RlosK0RBQWVBLE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIudHN4PzAzNjgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBGaUFycm93VXBSaWdodCB9IGZyb20gJ3JlYWN0LWljb25zL2ZpJ1xuaW1wb3J0IHsgQWlPdXRsaW5lRG93biB9IGZyb20gJ3JlYWN0LWljb25zL2FpJ1xuaW1wb3J0IHsgSGlPdXRsaW5lRG90c1ZlcnRpY2FsIH0gZnJvbSAncmVhY3QtaWNvbnMvaGknXG5pbXBvcnQgZXRoTG9nbyBmcm9tICcuLi9hc3NldHMvZXRoLnBuZydcbmltcG9ydCB1bmlzd2FwTG9nbyBmcm9tICcuLi9hc3NldHMvdW5pc3dhcC5wbmcnXG5pbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBUcmFuc2FjdGlvbkNvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0L1RyYW5zYWN0aW9uQ29udGV4dCdcblxuY29uc3Qgc3R5bGUgPSB7XG4gIHdyYXBwZXI6IGBwLTQgdy1zY3JlZW4gZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyYCxcbiAgaGVhZGVyTG9nbzogYGZsZXggdy0xLzQgaXRlbXMtY2VudGVyIGp1c3RpZnktc3RhcnRgLFxuICBuYXY6IGBmbGV4LTEgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJgLFxuICBuYXZJdGVtc0NvbnRhaW5lcjogYGZsZXggYmctWyMxOTFCMUZdIHJvdW5kZWQtM3hsYCxcbiAgbmF2SXRlbTogYHB4LTQgcHktMiBtLTEgZmxleCBpdGVtcy1jZW50ZXIgdGV4dC1sZyBmb250LXNlbWlib2xkIHRleHQtWzAuOXJlbV0gY3Vyc29yLXBvaW50ZXIgcm91bmRlZC0zeGxgLFxuICBhY3RpdmVOYXZJdGVtOiBgYmctWyMyMDI0MkFdYCxcbiAgYnV0dG9uc0NvbnRhaW5lcjogYGZsZXggdy0xLzQganVzdGlmeS1lbmQgaXRlbXMtY2VudGVyYCxcbiAgYnV0dG9uOiBgZmxleCBpdGVtcy1jZW50ZXIgYmctWyMxOTFCMUZdIHJvdW5kZWQtMnhsIG14LTIgdGV4dC1bMC45cmVtXSBmb250LXNlbWlib2xkIGN1cnNvci1wb2ludGVyIGAsXG4gIGJ1dHRvblBhZGRpbmc6IGBwLTJgLFxuICBidXR0b25UZXh0Q29udGFpbmVyOiBgaC04IGZsZXggaXRlbXMtY2VudGVyIGAsXG4gIGJ1dHRvbkljb25Db250YWluZXI6IGBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB3LTggaC04YCxcbiAgYnV0dG9uQWNjZW50OiBgYmctWyMxNzJBNDJdIGJvcmRlciBib3JkZXItWyMxNjMyNTZdIGhvdmVyOmJvcmRlci1bIzIzNDE2OV0gaC1mdWxsIHJvdW5kZWQtMnhsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHRleHQtWyM0RjkwRUFdYCxcbiAgYnV0dG9uQWN0aXZlOiBgdGV4dC1lbGxpcHNpcyBvdmVyZmxvdy1oaWRkZW4gLi4uYFxufVxuXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XG4gIGNvbnN0IFtzZWxlY3RlZE5hdiwgc2V0U2VsZWN0ZWROYXZdID0gdXNlU3RhdGUoJ3N3YXAnKVxuICBjb25zdCBbdXNlck5hbWUsIHNldFVzZXJOYW1lXSA9IHVzZVN0YXRlPHN0cmluZz4oKVxuICBjb25zdCB7IGNvbm5lY3RXYWxsZXQsIGN1cnJlbnRBY2NvdW50IH0gPSB1c2VDb250ZXh0KFRyYW5zYWN0aW9uQ29udGV4dClcblxuICBjb25zb2xlLmxvZyh7Y29ubmVjdFdhbGxldCxjdXJyZW50QWNjb3VudH0pXG4gIFxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS53cmFwcGVyfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5oZWFkZXJMb2dvfT5cbiAgICAgICAgPEltYWdlIHNyYz17dW5pc3dhcExvZ299IGFsdD0ndW5pc3dhcCcgaGVpZ2h0PXs0MH0gd2lkdGg9ezQwfSAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUubmF2fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLm5hdkl0ZW1zQ29udGFpbmVyfT5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTZWxlY3RlZE5hdignc3dhcCcpfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZS5uYXZJdGVtfSAke1xuICAgICAgICAgICAgICBzZWxlY3RlZE5hdiA9PT0gJ3N3YXAnICYmIHN0eWxlLmFjdGl2ZU5hdkl0ZW1cbiAgICAgICAgICAgIH1gfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIFN3YXBcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTZWxlY3RlZE5hdigncG9vbCcpfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZS5uYXZJdGVtfSAke1xuICAgICAgICAgICAgICBzZWxlY3RlZE5hdiA9PT0gJ3Bvb2wnICYmIHN0eWxlLmFjdGl2ZU5hdkl0ZW1cbiAgICAgICAgICAgIH1gfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIFBvb2xcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTZWxlY3RlZE5hdigndm90ZScpfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZS5uYXZJdGVtfSAke1xuICAgICAgICAgICAgICBzZWxlY3RlZE5hdiA9PT0gJ3ZvdGUnICYmIHN0eWxlLmFjdGl2ZU5hdkl0ZW1cbiAgICAgICAgICAgIH1gfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIFZvdGVcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgaHJlZj0naHR0cHM6Ly9pbmZvLnVuaXN3YXAub3JnLyMvJ1xuICAgICAgICAgICAgdGFyZ2V0PSdfYmxhbmsnXG4gICAgICAgICAgICByZWw9J25vcmVmZXJyZXInXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLm5hdkl0ZW19PlxuICAgICAgICAgICAgICBDaGFydHMgPEZpQXJyb3dVcFJpZ2h0IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgIFxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmJ1dHRvbnNDb250YWluZXJ9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGUuYnV0dG9ufSAke3N0eWxlLmJ1dHRvblBhZGRpbmd9YH0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmJ1dHRvbkljb25Db250YWluZXJ9PlxuICAgICAgICAgICAgPEltYWdlIHNyYz17ZXRoTG9nb30gYWx0PSdldGggbG9nbycgaGVpZ2h0PXsyMH0gd2lkdGg9ezIwfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxwPkV0aGVyZXVtPC9wPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5idXR0b25JY29uQ29udGFpbmVyfT5cbiAgICAgICAgICAgIDxBaU91dGxpbmVEb3duIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICAgIHtjdXJyZW50QWNjb3VudCA/IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGUuYnV0dG9ufSAke3N0eWxlLmJ1dHRvblBhZGRpbmd9ICR7c3R5bGUuYnV0dG9uQWN0aXZlfWB9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlLmJ1dHRvblRleHRDb250YWluZXJ9ICR7c3R5bGUuYnV0dG9uQWN0aXZlfWB9PlxuICAgICAgICAgICAgICB7Y3VycmVudEFjY291bnR9IC4uLlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICBcbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBjb25uZWN0V2FsbGV0KCl9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlLmJ1dHRvbn0gJHtzdHlsZS5idXR0b25QYWRkaW5nfWB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlLmJ1dHRvbkFjY2VudH0gJHtzdHlsZS5idXR0b25QYWRkaW5nfWB9PlxuICAgICAgICAgICAgICBDb25uZWN0IFdhbGxldFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+KSB9XG4gICAgICAgICAgXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZS5idXR0b259ICR7c3R5bGUuYnV0dG9uUGFkZGluZ31gfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGUuYnV0dG9uSWNvbkNvbnRhaW5lcn0gbXgtMmB9PlxuICAgICAgICAgICAgPEhpT3V0bGluZURvdHNWZXJ0aWNhbCAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlclxuIl0sIm5hbWVzIjpbIkltYWdlIiwidXNlU3RhdGUiLCJGaUFycm93VXBSaWdodCIsIkFpT3V0bGluZURvd24iLCJIaU91dGxpbmVEb3RzVmVydGljYWwiLCJldGhMb2dvIiwidW5pc3dhcExvZ28iLCJ1c2VDb250ZXh0IiwiVHJhbnNhY3Rpb25Db250ZXh0Iiwic3R5bGUiLCJ3cmFwcGVyIiwiaGVhZGVyTG9nbyIsIm5hdiIsIm5hdkl0ZW1zQ29udGFpbmVyIiwibmF2SXRlbSIsImFjdGl2ZU5hdkl0ZW0iLCJidXR0b25zQ29udGFpbmVyIiwiYnV0dG9uIiwiYnV0dG9uUGFkZGluZyIsImJ1dHRvblRleHRDb250YWluZXIiLCJidXR0b25JY29uQ29udGFpbmVyIiwiYnV0dG9uQWNjZW50IiwiYnV0dG9uQWN0aXZlIiwiSGVhZGVyIiwic2VsZWN0ZWROYXYiLCJzZXRTZWxlY3RlZE5hdiIsInVzZXJOYW1lIiwic2V0VXNlck5hbWUiLCJjb25uZWN0V2FsbGV0IiwiY3VycmVudEFjY291bnQiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwic3JjIiwiYWx0IiwiaGVpZ2h0Iiwid2lkdGgiLCJvbkNsaWNrIiwiYSIsImhyZWYiLCJ0YXJnZXQiLCJyZWwiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Header.tsx\n");

/***/ })

});