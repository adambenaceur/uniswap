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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/fi */ \"./node_modules/react-icons/fi/index.esm.js\");\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/ai */ \"./node_modules/react-icons/ai/index.esm.js\");\n/* harmony import */ var react_icons_hi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/hi */ \"./node_modules/react-icons/hi/index.esm.js\");\n/* harmony import */ var _assets_eth_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/eth.png */ \"./assets/eth.png\");\n/* harmony import */ var _assets_uniswap_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/uniswap.png */ \"./assets/uniswap.png\");\n/* harmony import */ var _context_TransactionContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../context/TransactionContext */ \"./context/TransactionContext.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar style = {\n    wrapper: \"p-4 w-screen flex justify-between items-center\",\n    headerLogo: \"flex w-1/4 items-center justify-start\",\n    nav: \"flex-1 flex justify-center items-center\",\n    navItemsContainer: \"flex bg-[#191B1F] rounded-3xl\",\n    navItem: \"px-4 py-2 m-1 flex items-center text-lg font-semibold text-[0.9rem] cursor-pointer rounded-3xl\",\n    activeNavItem: \"bg-[#20242A]\",\n    buttonsContainer: \"flex w-1/4 justify-end items-center\",\n    button: \"flex items-center bg-[#191B1F] rounded-2xl mx-2 text-[0.9rem] font-semibold cursor-pointer \",\n    buttonPadding: \"p-2\",\n    buttonTextContainer: \"h-8 flex items-center \",\n    buttonIconContainer: \"flex items-center justify-center w-8 h-8\",\n    buttonAccent: \"bg-[#172A42] border border-[#163256] hover:border-[#234169] h-full rounded-2xl flex items-center justify-center text-[#4F90EA]\",\n    buttonActive: \"text-ellipsis overflow-hidden\",\n    buttonUserName: \"\"\n};\nvar Header = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('swap'), selectedNav = ref[0], setSelectedNav = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), userName = ref1[0], setUserName = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_context_TransactionContext__WEBPACK_IMPORTED_MODULE_5__.TransactionContext), connectWallet = ref2.connectWallet, currentAccount = ref2.currentAccount;\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        setUserName.toString();\n        setUserName(\"\".concat(currentAccount === null || currentAccount === void 0 ? void 0 : currentAccount.slice(0, 6), \" ... \").concat(currentAccount === null || currentAccount === void 0 ? void 0 : currentAccount.slice(38)));\n    }, [\n        currentAccount\n    ]);\n    console.log({\n        connectWallet: connectWallet,\n        currentAccount: currentAccount\n    });\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: style.wrapper,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: style.headerLogo,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    src: _assets_uniswap_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                    alt: \"uniswap\",\n                    height: 40,\n                    width: 40\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Header.tsx\",\n                    lineNumber: 44,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Header.tsx\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: style.nav,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: style.navItemsContainer,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            onClick: function() {\n                                return setSelectedNav('swap');\n                            },\n                            className: \"\".concat(style.navItem, \" \").concat(selectedNav === 'swap' && style.activeNavItem),\n                            children: \"Swap\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Header.tsx\",\n                            lineNumber: 48,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            onClick: function() {\n                                return setSelectedNav('pool');\n                            },\n                            className: \"\".concat(style.navItem, \" \").concat(selectedNav === 'pool' && style.activeNavItem),\n                            children: \"Pool\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Header.tsx\",\n                            lineNumber: 56,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            onClick: function() {\n                                return setSelectedNav('vote');\n                            },\n                            className: \"\".concat(style.navItem, \" \").concat(selectedNav === 'vote' && style.activeNavItem),\n                            children: \"Vote\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Header.tsx\",\n                            lineNumber: 64,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"https://info.uniswap.org/#/\",\n                            target: \"_blank\",\n                            rel: \"noreferrer\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: style.navItem,\n                                children: [\n                                    \"Charts \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fi__WEBPACK_IMPORTED_MODULE_6__.FiArrowUpRight, {}, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Header.tsx\",\n                                        lineNumber: 78,\n                                        columnNumber: 22\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Header.tsx\",\n                                lineNumber: 77,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Header.tsx\",\n                            lineNumber: 72,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Header.tsx\",\n                    lineNumber: 47,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Header.tsx\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: style.buttonsContainer,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"\".concat(style.button, \" \").concat(style.buttonPadding),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: style.buttonIconContainer,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    src: _assets_eth_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                                    alt: \"eth logo\",\n                                    height: 20,\n                                    width: 20\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Header.tsx\",\n                                    lineNumber: 87,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Header.tsx\",\n                                lineNumber: 86,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Ethereum\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Header.tsx\",\n                                lineNumber: 89,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: style.buttonIconContainer,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_7__.AiOutlineDown, {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Header.tsx\",\n                                    lineNumber: 91,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Header.tsx\",\n                                lineNumber: 90,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Header.tsx\",\n                        lineNumber: 85,\n                        columnNumber: 9\n                    }, _this),\n                    currentAccount ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"\".concat(style.button, \" \").concat(style.buttonPadding, \" \").concat(style.buttonActive),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"\".concat(style.buttonTextContainer, \" \").concat(style.buttonActive),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"\",\n                                children: [\n                                    userName,\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Header.tsx\",\n                                lineNumber: 97,\n                                columnNumber: 15\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Header.tsx\",\n                            lineNumber: 96,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Header.tsx\",\n                        lineNumber: 95,\n                        columnNumber: 11\n                    }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        onClick: function() {\n                            return connectWallet();\n                        },\n                        className: \"\".concat(style.button, \" \").concat(style.buttonPadding),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"\".concat(style.buttonAccent, \" \").concat(style.buttonPadding),\n                            children: \"Connect Wallet\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Header.tsx\",\n                            lineNumber: 106,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Header.tsx\",\n                        lineNumber: 102,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"\".concat(style.button, \" \").concat(style.buttonPadding),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"\".concat(style.buttonIconContainer, \" mx-2\"),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_hi__WEBPACK_IMPORTED_MODULE_8__.HiOutlineDotsVertical, {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Header.tsx\",\n                                lineNumber: 113,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Header.tsx\",\n                            lineNumber: 112,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Header.tsx\",\n                        lineNumber: 111,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Header.tsx\",\n                lineNumber: 84,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Header.tsx\",\n        lineNumber: 42,\n        columnNumber: 5\n    }, _this));\n};\n_s(Header, \"Xt6dATvQoQGd3gDbn4pJovt9hP8=\");\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE1BQUssQ0FBL0IzQixLQUFLLENBQUNXLG1CQUFtQixFQUFDLENBQUs7a0hBQy9DaEIsaUVBQXFCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNbEMsQ0FBQztHQTFGS29CLE1BQU07S0FBTkEsTUFBTTtBQTRGWiwrREFBZUEsTUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0hlYWRlci50c3g/MDM2OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEZpQXJyb3dVcFJpZ2h0IH0gZnJvbSAncmVhY3QtaWNvbnMvZmknXG5pbXBvcnQgeyBBaU91dGxpbmVEb3duIH0gZnJvbSAncmVhY3QtaWNvbnMvYWknXG5pbXBvcnQgeyBIaU91dGxpbmVEb3RzVmVydGljYWwgfSBmcm9tICdyZWFjdC1pY29ucy9oaSdcbmltcG9ydCBldGhMb2dvIGZyb20gJy4uL2Fzc2V0cy9ldGgucG5nJ1xuaW1wb3J0IHVuaXN3YXBMb2dvIGZyb20gJy4uL2Fzc2V0cy91bmlzd2FwLnBuZydcbmltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFRyYW5zYWN0aW9uQ29udGV4dCB9IGZyb20gJy4uL2NvbnRleHQvVHJhbnNhY3Rpb25Db250ZXh0J1xuaW1wb3J0IHsgc3RyaW5naWZ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5cbmNvbnN0IHN0eWxlID0ge1xuICB3cmFwcGVyOiBgcC00IHctc2NyZWVuIGZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlcmAsXG4gIGhlYWRlckxvZ286IGBmbGV4IHctMS80IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LXN0YXJ0YCxcbiAgbmF2OiBgZmxleC0xIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyYCxcbiAgbmF2SXRlbXNDb250YWluZXI6IGBmbGV4IGJnLVsjMTkxQjFGXSByb3VuZGVkLTN4bGAsXG4gIG5hdkl0ZW06IGBweC00IHB5LTIgbS0xIGZsZXggaXRlbXMtY2VudGVyIHRleHQtbGcgZm9udC1zZW1pYm9sZCB0ZXh0LVswLjlyZW1dIGN1cnNvci1wb2ludGVyIHJvdW5kZWQtM3hsYCxcbiAgYWN0aXZlTmF2SXRlbTogYGJnLVsjMjAyNDJBXWAsXG4gIGJ1dHRvbnNDb250YWluZXI6IGBmbGV4IHctMS80IGp1c3RpZnktZW5kIGl0ZW1zLWNlbnRlcmAsXG4gIGJ1dHRvbjogYGZsZXggaXRlbXMtY2VudGVyIGJnLVsjMTkxQjFGXSByb3VuZGVkLTJ4bCBteC0yIHRleHQtWzAuOXJlbV0gZm9udC1zZW1pYm9sZCBjdXJzb3ItcG9pbnRlciBgLFxuICBidXR0b25QYWRkaW5nOiBgcC0yYCxcbiAgYnV0dG9uVGV4dENvbnRhaW5lcjogYGgtOCBmbGV4IGl0ZW1zLWNlbnRlciBgLFxuICBidXR0b25JY29uQ29udGFpbmVyOiBgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdy04IGgtOGAsXG4gIGJ1dHRvbkFjY2VudDogYGJnLVsjMTcyQTQyXSBib3JkZXIgYm9yZGVyLVsjMTYzMjU2XSBob3Zlcjpib3JkZXItWyMyMzQxNjldIGgtZnVsbCByb3VuZGVkLTJ4bCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB0ZXh0LVsjNEY5MEVBXWAsXG4gIGJ1dHRvbkFjdGl2ZTogYHRleHQtZWxsaXBzaXMgb3ZlcmZsb3ctaGlkZGVuYCxcbiAgYnV0dG9uVXNlck5hbWU6IGBgLFxufVxuXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XG4gIGNvbnN0IFtzZWxlY3RlZE5hdiwgc2V0U2VsZWN0ZWROYXZdID0gdXNlU3RhdGUoJ3N3YXAnKVxuICBjb25zdCBbdXNlck5hbWUsIHNldFVzZXJOYW1lXSA9IHVzZVN0YXRlPHN0cmluZz4oKVxuICBjb25zdCB7IGNvbm5lY3RXYWxsZXQsIGN1cnJlbnRBY2NvdW50IH0gPSB1c2VDb250ZXh0KFRyYW5zYWN0aW9uQ29udGV4dClcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFVzZXJOYW1lLnRvU3RyaW5nKClcbiAgICBzZXRVc2VyTmFtZShgJHtjdXJyZW50QWNjb3VudD8uc2xpY2UoMCw2KX0gLi4uICR7Y3VycmVudEFjY291bnQ/LnNsaWNlKDM4KX1gKVxuICB9LCBbY3VycmVudEFjY291bnRdKVxuXG4gIGNvbnNvbGUubG9nKHtjb25uZWN0V2FsbGV0LGN1cnJlbnRBY2NvdW50fSlcbiAgXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLndyYXBwZXJ9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmhlYWRlckxvZ299PlxuICAgICAgICA8SW1hZ2Ugc3JjPXt1bmlzd2FwTG9nb30gYWx0PSd1bmlzd2FwJyBoZWlnaHQ9ezQwfSB3aWR0aD17NDB9IC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5uYXZ9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUubmF2SXRlbXNDb250YWluZXJ9PlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNlbGVjdGVkTmF2KCdzd2FwJyl9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlLm5hdkl0ZW19ICR7XG4gICAgICAgICAgICAgIHNlbGVjdGVkTmF2ID09PSAnc3dhcCcgJiYgc3R5bGUuYWN0aXZlTmF2SXRlbVxuICAgICAgICAgICAgfWB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgU3dhcFxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNlbGVjdGVkTmF2KCdwb29sJyl9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlLm5hdkl0ZW19ICR7XG4gICAgICAgICAgICAgIHNlbGVjdGVkTmF2ID09PSAncG9vbCcgJiYgc3R5bGUuYWN0aXZlTmF2SXRlbVxuICAgICAgICAgICAgfWB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgUG9vbFxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNlbGVjdGVkTmF2KCd2b3RlJyl9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlLm5hdkl0ZW19ICR7XG4gICAgICAgICAgICAgIHNlbGVjdGVkTmF2ID09PSAndm90ZScgJiYgc3R5bGUuYWN0aXZlTmF2SXRlbVxuICAgICAgICAgICAgfWB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgVm90ZVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBocmVmPSdodHRwczovL2luZm8udW5pc3dhcC5vcmcvIy8nXG4gICAgICAgICAgICB0YXJnZXQ9J19ibGFuaydcbiAgICAgICAgICAgIHJlbD0nbm9yZWZlcnJlcidcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUubmF2SXRlbX0+XG4gICAgICAgICAgICAgIENoYXJ0cyA8RmlBcnJvd1VwUmlnaHQgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuYnV0dG9uc0NvbnRhaW5lcn0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZS5idXR0b259ICR7c3R5bGUuYnV0dG9uUGFkZGluZ31gfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuYnV0dG9uSWNvbkNvbnRhaW5lcn0+XG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPXtldGhMb2dvfSBhbHQ9J2V0aCBsb2dvJyBoZWlnaHQ9ezIwfSB3aWR0aD17MjB9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPHA+RXRoZXJldW08L3A+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmJ1dHRvbkljb25Db250YWluZXJ9PlxuICAgICAgICAgICAgPEFpT3V0bGluZURvd24gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgICAge2N1cnJlbnRBY2NvdW50ID8gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZS5idXR0b259ICR7c3R5bGUuYnV0dG9uUGFkZGluZ30gJHtzdHlsZS5idXR0b25BY3RpdmV9YH0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGUuYnV0dG9uVGV4dENvbnRhaW5lcn0gJHtzdHlsZS5idXR0b25BY3RpdmV9YH0+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nJz57dXNlck5hbWV9IDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgXG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gY29ubmVjdFdhbGxldCgpfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZS5idXR0b259ICR7c3R5bGUuYnV0dG9uUGFkZGluZ31gfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZS5idXR0b25BY2NlbnR9ICR7c3R5bGUuYnV0dG9uUGFkZGluZ31gfT5cbiAgICAgICAgICAgICAgQ29ubmVjdCBXYWxsZXRcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PikgfVxuICAgICAgICAgIFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGUuYnV0dG9ufSAke3N0eWxlLmJ1dHRvblBhZGRpbmd9YH0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlLmJ1dHRvbkljb25Db250YWluZXJ9IG14LTJgfT5cbiAgICAgICAgICAgIDxIaU91dGxpbmVEb3RzVmVydGljYWwgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXJcbiJdLCJuYW1lcyI6WyJJbWFnZSIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiRmlBcnJvd1VwUmlnaHQiLCJBaU91dGxpbmVEb3duIiwiSGlPdXRsaW5lRG90c1ZlcnRpY2FsIiwiZXRoTG9nbyIsInVuaXN3YXBMb2dvIiwidXNlQ29udGV4dCIsIlRyYW5zYWN0aW9uQ29udGV4dCIsInN0eWxlIiwid3JhcHBlciIsImhlYWRlckxvZ28iLCJuYXYiLCJuYXZJdGVtc0NvbnRhaW5lciIsIm5hdkl0ZW0iLCJhY3RpdmVOYXZJdGVtIiwiYnV0dG9uc0NvbnRhaW5lciIsImJ1dHRvbiIsImJ1dHRvblBhZGRpbmciLCJidXR0b25UZXh0Q29udGFpbmVyIiwiYnV0dG9uSWNvbkNvbnRhaW5lciIsImJ1dHRvbkFjY2VudCIsImJ1dHRvbkFjdGl2ZSIsImJ1dHRvblVzZXJOYW1lIiwiSGVhZGVyIiwic2VsZWN0ZWROYXYiLCJzZXRTZWxlY3RlZE5hdiIsInVzZXJOYW1lIiwic2V0VXNlck5hbWUiLCJjb25uZWN0V2FsbGV0IiwiY3VycmVudEFjY291bnQiLCJ0b1N0cmluZyIsInNsaWNlIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsInNyYyIsImFsdCIsImhlaWdodCIsIndpZHRoIiwib25DbGljayIsImEiLCJocmVmIiwidGFyZ2V0IiwicmVsIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Header.tsx\n");

/***/ })

});