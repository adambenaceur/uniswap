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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/fi */ \"./node_modules/react-icons/fi/index.esm.js\");\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/ai */ \"./node_modules/react-icons/ai/index.esm.js\");\n/* harmony import */ var react_icons_hi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/hi */ \"./node_modules/react-icons/hi/index.esm.js\");\n/* harmony import */ var _assets_eth_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/eth.png */ \"./assets/eth.png\");\n/* harmony import */ var _assets_uniswap_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/uniswap.png */ \"./assets/uniswap.png\");\n/* harmony import */ var _context_TransactionContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../context/TransactionContext */ \"./context/TransactionContext.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar style = {\n    wrapper: \"p-4 w-screen flex justify-between items-center\",\n    headerLogo: \"flex w-1/4 items-center justify-start\",\n    nav: \"flex-1 flex justify-center items-center\",\n    navItemsContainer: \"flex bg-[#191B1F] rounded-3xl\",\n    navItem: \"px-4 py-2 m-1 flex items-center text-lg font-semibold text-[0.9rem] cursor-pointer rounded-3xl\",\n    activeNavItem: \"bg-[#20242A]\",\n    buttonsContainer: \"flex w-1/4 justify-end items-center\",\n    button: \"flex items-center bg-[#191B1F] rounded-2xl mx-2 text-[0.9rem] font-semibold cursor-pointer \",\n    buttonPadding: \"p-2\",\n    buttonTextContainer: \"h-8 flex items-center\",\n    buttonIconContainer: \"flex items-center justify-center w-8 h-8\",\n    buttonAccent: \"bg-[#172A42] border border-[#163256] hover:border-[#234169] h-full rounded-2xl flex items-center justify-center text-[#4F90EA]\",\n    buttonActive: \"overflow-hidden\"\n};\nvar Header = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('swap'), selectedNav = ref[0], setSelectedNav = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), userName = ref1[0], setUserName = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_context_TransactionContext__WEBPACK_IMPORTED_MODULE_5__.TransactionContext), connectWallet = ref2.connectWallet, currentAccount = ref2.currentAccount;\n    console.log({\n        connectWallet: connectWallet,\n        currentAccount: currentAccount\n    });\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: style.wrapper,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: style.headerLogo,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    src: _assets_uniswap_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                    alt: \"uniswap\",\n                    height: 40,\n                    width: 40\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Header.tsx\",\n                    lineNumber: 37,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Header.tsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: style.nav,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: style.navItemsContainer,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            onClick: function() {\n                                return setSelectedNav('swap');\n                            },\n                            className: \"\".concat(style.navItem, \" \").concat(selectedNav === 'swap' && style.activeNavItem),\n                            children: \"Swap\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Header.tsx\",\n                            lineNumber: 41,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            onClick: function() {\n                                return setSelectedNav('pool');\n                            },\n                            className: \"\".concat(style.navItem, \" \").concat(selectedNav === 'pool' && style.activeNavItem),\n                            children: \"Pool\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Header.tsx\",\n                            lineNumber: 49,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            onClick: function() {\n                                return setSelectedNav('vote');\n                            },\n                            className: \"\".concat(style.navItem, \" \").concat(selectedNav === 'vote' && style.activeNavItem),\n                            children: \"Vote\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Header.tsx\",\n                            lineNumber: 57,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"https://info.uniswap.org/#/\",\n                            target: \"_blank\",\n                            rel: \"noreferrer\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: style.navItem,\n                                children: [\n                                    \"Charts \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fi__WEBPACK_IMPORTED_MODULE_6__.FiArrowUpRight, {}, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Header.tsx\",\n                                        lineNumber: 71,\n                                        columnNumber: 22\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Header.tsx\",\n                                lineNumber: 70,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Header.tsx\",\n                            lineNumber: 65,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Header.tsx\",\n                    lineNumber: 40,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Header.tsx\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"\".concat(style.buttonsContainer, \" \").concat(style.buttonActive, \" \"),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"\".concat(style.button, \" \").concat(style.buttonPadding),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: style.buttonIconContainer,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    src: _assets_eth_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                                    alt: \"eth logo\",\n                                    height: 20,\n                                    width: 20\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Header.tsx\",\n                                    lineNumber: 80,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Header.tsx\",\n                                lineNumber: 79,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Ethereum\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Header.tsx\",\n                                lineNumber: 82,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: style.buttonIconContainer,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_7__.AiOutlineDown, {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Header.tsx\",\n                                    lineNumber: 84,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Header.tsx\",\n                                lineNumber: 83,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Header.tsx\",\n                        lineNumber: 78,\n                        columnNumber: 9\n                    }, _this),\n                    currentAccount ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"\".concat(style.button, \" \").concat(style.buttonPadding),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: style.buttonTextContainer,\n                            children: currentAccount\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Header.tsx\",\n                            lineNumber: 89,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Header.tsx\",\n                        lineNumber: 88,\n                        columnNumber: 11\n                    }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        onClick: function() {\n                            return connectWallet();\n                        },\n                        className: \"\".concat(style.button, \" \").concat(style.buttonPadding),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"\".concat(style.buttonAccent, \" \").concat(style.buttonPadding),\n                            children: \"Connect Wallet\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Header.tsx\",\n                            lineNumber: 99,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Header.tsx\",\n                        lineNumber: 95,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"\".concat(style.button, \" \").concat(style.buttonPadding),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"\".concat(style.buttonIconContainer, \" mx-2\"),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_hi__WEBPACK_IMPORTED_MODULE_8__.HiOutlineDotsVertical, {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Header.tsx\",\n                                lineNumber: 106,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Header.tsx\",\n                            lineNumber: 105,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Header.tsx\",\n                        lineNumber: 104,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Header.tsx\",\n                lineNumber: 77,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Header.tsx\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, _this));\n};\n_s(Header, \"5iCCFv0fg3z+HbME62rJaumqqV8=\");\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q1UsY0FBYzs7Ozs7Ozs7Ozs0R0FLbEJHLENBQUc7d0JBQ0ZNLE9BQU8sRUFBRSxRQUFROzRCQUFGVixNQUFNLENBQU5BLGFBQWE7O3dCQUM1QkssU0FBUyxFQUFHLEdBQWtCeEIsTUFBbUIsQ0FBbkNBLEtBQUssQ0FBQ1EsTUFBTSxFQUFDLENBQUMsSUFBc0IsT0FBcEJSLEtBQUssQ0FBQ1MsYUFBYTs4R0FFaERjLENBQUc7NEJBQUNDLFNBQVMsRUFBRyxHQUF3QnhCLE1BQW1CLENBQXpDQSxLQUFLLENBQUNZLFlBQVksRUFBQyxDQUFDLElBQXNCLE9BQXBCWixLQUFLLENBQUNTLGFBQWE7c0NBQUksQ0FFaEU7Ozs7Ozs7Ozs7O2dHQUdIYyxDQUFHO3dCQUFDQyxTQUFTLEVBQUcsR0FBa0J4QixNQUFtQixDQUFuQ0EsS0FBSyxDQUFDUSxNQUFNLEVBQUMsQ0FBQyxJQUFzQixPQUFwQlIsS0FBSyxDQUFDUyxhQUFhOzhHQUNuRGMsQ0FBRzs0QkFBQ0MsU0FBUyxFQUFHLEdBQTRCLE1BQUssQ0FBL0J4QixLQUFLLENBQUNXLG1CQUFtQixFQUFDLENBQUs7a0hBQy9DaEIsaUVBQXFCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNbEMsQ0FBQztHQXJGS21CLE1BQU07S0FBTkEsTUFBTTtBQXVGWiwrREFBZUEsTUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0hlYWRlci50c3g/MDM2OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEZpQXJyb3dVcFJpZ2h0IH0gZnJvbSAncmVhY3QtaWNvbnMvZmknXG5pbXBvcnQgeyBBaU91dGxpbmVEb3duIH0gZnJvbSAncmVhY3QtaWNvbnMvYWknXG5pbXBvcnQgeyBIaU91dGxpbmVEb3RzVmVydGljYWwgfSBmcm9tICdyZWFjdC1pY29ucy9oaSdcbmltcG9ydCBldGhMb2dvIGZyb20gJy4uL2Fzc2V0cy9ldGgucG5nJ1xuaW1wb3J0IHVuaXN3YXBMb2dvIGZyb20gJy4uL2Fzc2V0cy91bmlzd2FwLnBuZydcbmltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFRyYW5zYWN0aW9uQ29udGV4dCB9IGZyb20gJy4uL2NvbnRleHQvVHJhbnNhY3Rpb25Db250ZXh0J1xuXG5jb25zdCBzdHlsZSA9IHtcbiAgd3JhcHBlcjogYHAtNCB3LXNjcmVlbiBmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXJgLFxuICBoZWFkZXJMb2dvOiBgZmxleCB3LTEvNCBpdGVtcy1jZW50ZXIganVzdGlmeS1zdGFydGAsXG4gIG5hdjogYGZsZXgtMSBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlcmAsXG4gIG5hdkl0ZW1zQ29udGFpbmVyOiBgZmxleCBiZy1bIzE5MUIxRl0gcm91bmRlZC0zeGxgLFxuICBuYXZJdGVtOiBgcHgtNCBweS0yIG0tMSBmbGV4IGl0ZW1zLWNlbnRlciB0ZXh0LWxnIGZvbnQtc2VtaWJvbGQgdGV4dC1bMC45cmVtXSBjdXJzb3ItcG9pbnRlciByb3VuZGVkLTN4bGAsXG4gIGFjdGl2ZU5hdkl0ZW06IGBiZy1bIzIwMjQyQV1gLFxuICBidXR0b25zQ29udGFpbmVyOiBgZmxleCB3LTEvNCBqdXN0aWZ5LWVuZCBpdGVtcy1jZW50ZXJgLFxuICBidXR0b246IGBmbGV4IGl0ZW1zLWNlbnRlciBiZy1bIzE5MUIxRl0gcm91bmRlZC0yeGwgbXgtMiB0ZXh0LVswLjlyZW1dIGZvbnQtc2VtaWJvbGQgY3Vyc29yLXBvaW50ZXIgYCxcbiAgYnV0dG9uUGFkZGluZzogYHAtMmAsXG4gIGJ1dHRvblRleHRDb250YWluZXI6IGBoLTggZmxleCBpdGVtcy1jZW50ZXJgLFxuICBidXR0b25JY29uQ29udGFpbmVyOiBgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdy04IGgtOGAsXG4gIGJ1dHRvbkFjY2VudDogYGJnLVsjMTcyQTQyXSBib3JkZXIgYm9yZGVyLVsjMTYzMjU2XSBob3Zlcjpib3JkZXItWyMyMzQxNjldIGgtZnVsbCByb3VuZGVkLTJ4bCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB0ZXh0LVsjNEY5MEVBXWAsXG4gIGJ1dHRvbkFjdGl2ZTogYG92ZXJmbG93LWhpZGRlbmBcbn1cblxuY29uc3QgSGVhZGVyID0gKCkgPT4ge1xuICBjb25zdCBbc2VsZWN0ZWROYXYsIHNldFNlbGVjdGVkTmF2XSA9IHVzZVN0YXRlKCdzd2FwJylcbiAgY29uc3QgW3VzZXJOYW1lLCBzZXRVc2VyTmFtZV0gPSB1c2VTdGF0ZTxzdHJpbmc+KClcbiAgY29uc3QgeyBjb25uZWN0V2FsbGV0LCBjdXJyZW50QWNjb3VudCB9ID0gdXNlQ29udGV4dChUcmFuc2FjdGlvbkNvbnRleHQpXG5cbiAgY29uc29sZS5sb2coe2Nvbm5lY3RXYWxsZXQsY3VycmVudEFjY291bnR9KVxuICBcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUud3JhcHBlcn0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuaGVhZGVyTG9nb30+XG4gICAgICAgIDxJbWFnZSBzcmM9e3VuaXN3YXBMb2dvfSBhbHQ9J3VuaXN3YXAnIGhlaWdodD17NDB9IHdpZHRoPXs0MH0gLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLm5hdn0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5uYXZJdGVtc0NvbnRhaW5lcn0+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2VsZWN0ZWROYXYoJ3N3YXAnKX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGUubmF2SXRlbX0gJHtcbiAgICAgICAgICAgICAgc2VsZWN0ZWROYXYgPT09ICdzd2FwJyAmJiBzdHlsZS5hY3RpdmVOYXZJdGVtXG4gICAgICAgICAgICB9YH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBTd2FwXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2VsZWN0ZWROYXYoJ3Bvb2wnKX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGUubmF2SXRlbX0gJHtcbiAgICAgICAgICAgICAgc2VsZWN0ZWROYXYgPT09ICdwb29sJyAmJiBzdHlsZS5hY3RpdmVOYXZJdGVtXG4gICAgICAgICAgICB9YH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBQb29sXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2VsZWN0ZWROYXYoJ3ZvdGUnKX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGUubmF2SXRlbX0gJHtcbiAgICAgICAgICAgICAgc2VsZWN0ZWROYXYgPT09ICd2b3RlJyAmJiBzdHlsZS5hY3RpdmVOYXZJdGVtXG4gICAgICAgICAgICB9YH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBWb3RlXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGhyZWY9J2h0dHBzOi8vaW5mby51bmlzd2FwLm9yZy8jLydcbiAgICAgICAgICAgIHRhcmdldD0nX2JsYW5rJ1xuICAgICAgICAgICAgcmVsPSdub3JlZmVycmVyJ1xuICAgICAgICAgID5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5uYXZJdGVtfT5cbiAgICAgICAgICAgICAgQ2hhcnRzIDxGaUFycm93VXBSaWdodCAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICBcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZS5idXR0b25zQ29udGFpbmVyfSAke3N0eWxlLmJ1dHRvbkFjdGl2ZX0gYH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZS5idXR0b259ICR7c3R5bGUuYnV0dG9uUGFkZGluZ31gfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuYnV0dG9uSWNvbkNvbnRhaW5lcn0+XG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPXtldGhMb2dvfSBhbHQ9J2V0aCBsb2dvJyBoZWlnaHQ9ezIwfSB3aWR0aD17MjB9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPHA+RXRoZXJldW08L3A+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmJ1dHRvbkljb25Db250YWluZXJ9PlxuICAgICAgICAgICAgPEFpT3V0bGluZURvd24gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgICAge2N1cnJlbnRBY2NvdW50ID8gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZS5idXR0b259ICR7c3R5bGUuYnV0dG9uUGFkZGluZ31gfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5idXR0b25UZXh0Q29udGFpbmVyfT5cbiAgICAgICAgICAgICAge2N1cnJlbnRBY2NvdW50fVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICBcbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBjb25uZWN0V2FsbGV0KCl9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlLmJ1dHRvbn0gJHtzdHlsZS5idXR0b25QYWRkaW5nfWB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlLmJ1dHRvbkFjY2VudH0gJHtzdHlsZS5idXR0b25QYWRkaW5nfWB9PlxuICAgICAgICAgICAgICBDb25uZWN0IFdhbGxldFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+KSB9XG4gICAgICAgICAgXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZS5idXR0b259ICR7c3R5bGUuYnV0dG9uUGFkZGluZ31gfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGUuYnV0dG9uSWNvbkNvbnRhaW5lcn0gbXgtMmB9PlxuICAgICAgICAgICAgPEhpT3V0bGluZURvdHNWZXJ0aWNhbCAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlclxuIl0sIm5hbWVzIjpbIkltYWdlIiwidXNlU3RhdGUiLCJGaUFycm93VXBSaWdodCIsIkFpT3V0bGluZURvd24iLCJIaU91dGxpbmVEb3RzVmVydGljYWwiLCJldGhMb2dvIiwidW5pc3dhcExvZ28iLCJ1c2VDb250ZXh0IiwiVHJhbnNhY3Rpb25Db250ZXh0Iiwic3R5bGUiLCJ3cmFwcGVyIiwiaGVhZGVyTG9nbyIsIm5hdiIsIm5hdkl0ZW1zQ29udGFpbmVyIiwibmF2SXRlbSIsImFjdGl2ZU5hdkl0ZW0iLCJidXR0b25zQ29udGFpbmVyIiwiYnV0dG9uIiwiYnV0dG9uUGFkZGluZyIsImJ1dHRvblRleHRDb250YWluZXIiLCJidXR0b25JY29uQ29udGFpbmVyIiwiYnV0dG9uQWNjZW50IiwiYnV0dG9uQWN0aXZlIiwiSGVhZGVyIiwic2VsZWN0ZWROYXYiLCJzZXRTZWxlY3RlZE5hdiIsInVzZXJOYW1lIiwic2V0VXNlck5hbWUiLCJjb25uZWN0V2FsbGV0IiwiY3VycmVudEFjY291bnQiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwic3JjIiwiYWx0IiwiaGVpZ2h0Iiwid2lkdGgiLCJvbkNsaWNrIiwiYSIsImhyZWYiLCJ0YXJnZXQiLCJyZWwiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Header.tsx\n");

/***/ })

});