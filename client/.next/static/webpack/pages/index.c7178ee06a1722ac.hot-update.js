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

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/fi */ \"./node_modules/react-icons/fi/index.esm.js\");\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/ai */ \"./node_modules/react-icons/ai/index.esm.js\");\n/* harmony import */ var react_icons_hi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/hi */ \"./node_modules/react-icons/hi/index.esm.js\");\n/* harmony import */ var _assets_eth_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/eth.png */ \"./assets/eth.png\");\n/* harmony import */ var _assets_uniswap_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/uniswap.png */ \"./assets/uniswap.png\");\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar style = {\n    wrapper: \"p-4 w-screen flex justify-between items-center\",\n    headerLogo: \"flex w-1/4 items-center justify-start\",\n    nav: \"flex-1 flex justify-center items-center\",\n    navItemsContainer: \"flex bg-[#191B1F] rounded-3xl\",\n    navItem: \"px-4 py-2 m-1 flex items-center text-lg font-semibold text-[0.9rem] cursor-pointer rounded-3xl\",\n    activeNavItem: \"bg-[#20242A]\",\n    buttonsContainer: \"flex w-1/4 justify-end items-center\",\n    button: \"flex items-center bg-[#191B1F] rounded-2xl mx-2 text-[0.9rem] font-semibold cursor-pointer\",\n    buttonPadding: \"p-2\",\n    buttonTextContainer: \"h-8 flex items-center\",\n    buttonIconContainer: \"flex items-center justify-center w-8 h-8\",\n    buttonAccent: \"bg-[#172A42] border border-[#163256] hover:border-[#234169] h-full rounded-2xl flex items-center justify-center text-[#4F90EA]\"\n};\nfunction Header() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"swap\"), selectedNav = ref[0], setSelectedNav = ref[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: style.wrapper,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: style.headerLogo,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    src: _assets_uniswap_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                    alt: \"uniswap\",\n                    height: 40,\n                    width: 40\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Header.js\",\n                    lineNumber: 31,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Header.js\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: style.nav,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: style.navItemsContainer,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            onClick: function() {\n                                return setSelectedNav(\"swap\");\n                            },\n                            className: \"\".concat(style.navItem, \" \").concat(selectedNav === \"swap\" && style.activeNavItem),\n                            children: \"swap\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Header.js\",\n                            lineNumber: 35,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            onClick: function() {\n                                return setSelectedNav(\"pool\");\n                            },\n                            className: \"\".concat(style.navItem, \" \").concat(selectedNav === \"pool\" && style.activeNavItem),\n                            children: \"pool\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Header.js\",\n                            lineNumber: 43,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            onClick: function() {\n                                return setSelectedNav(\"vote\");\n                            },\n                            className: \"\".concat(style.navItem, \" \").concat(selectedNav === \"vote\" && style.activeNavItem),\n                            children: \"vote\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Header.js\",\n                            lineNumber: 51,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"https://info.uniswap.org/#/\",\n                            target: \"_blank\",\n                            rel: \"noreferrer\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: style.navItem,\n                                children: [\n                                    \"Charts \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fi__WEBPACK_IMPORTED_MODULE_5__.FiArrowUpRight, {}, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Header.js\",\n                                        lineNumber: 65,\n                                        columnNumber: 22\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Header.js\",\n                                lineNumber: 64,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Header.js\",\n                            lineNumber: 59,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Header.js\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Header.js\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: style.buttonsContainer,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"\".concat(style.button, \" \").concat(style.buttonPadding),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: style.buttonIconContainer,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                src: _assets_eth_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                                alt: \"eth logo\",\n                                height: 20,\n                                width: 20\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Header.js\",\n                                lineNumber: 73,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Header.js\",\n                            lineNumber: 72,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"Ethereum\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Header.js\",\n                            lineNumber: 76,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: style.buttonIconContainer,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_6__.AiOutlineDown, {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Header.js\",\n                                lineNumber: 78,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Header.js\",\n                            lineNumber: 77,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            onClick: function() {\n                                return connectWallet();\n                            },\n                            className: \"\".concat(style.button, \" \").concat(style.buttonPadding),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"\".concat(style.buttonAccent, \" \").concat(style.buttonAccent),\n                                children: \"Connect Wallet\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Header.js\",\n                                lineNumber: 85,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Header.js\",\n                            lineNumber: 81,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"\".concat(style.button, \" \").concat(style.buttonPadding),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"\".concat(style.buttonIconContainer, \" mx-2\"),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_hi__WEBPACK_IMPORTED_MODULE_7__.HiOutlineDotsVertical, {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Header.js\",\n                                    lineNumber: 92,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Header.js\",\n                                lineNumber: 91,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Header.js\",\n                            lineNumber: 90,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Header.js\",\n                    lineNumber: 71,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Header.js\",\n                lineNumber: 70,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Header.js\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, this);\n}\n_s(Header, \"vOjPi0FgeVpaRKYrkvQ/LN7138Q=\");\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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USxNQUFNLEVBQUMsR0FBQyxDQUFzQixRQUFwQlIsS0FBSyxDQUFDUyxhQUFhLENBQUU7c0NBQ3RELDRFQUFDTyxLQUFHO2dDQUFDQyxTQUFTLEVBQUUsRUFBQyxDQUE0QixNQUFLLENBQS9CakIsS0FBSyxDQUFDVyxtQkFBbUIsRUFBQyxPQUFLLENBQUM7MENBQ2pELDRFQUFDZCxpRUFBcUI7Ozs7d0NBQUU7Ozs7O29DQUNwQjs7Ozs7Z0NBQ0Y7Ozs7Ozt3QkFDRjs7Ozs7b0JBQ0Y7Ozs7OztZQUVGLENBQ1A7Q0FDRjtHQTNFUWdCLE1BQU07QUFBTkEsS0FBQUEsTUFBTTtBQTZFZiwrREFBZUEsTUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0hlYWRlci5qcz80ZGJiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcclxuaW1wb3J0IHsgRmlBcnJvd1VwUmlnaHQgfSBmcm9tICdyZWFjdC1pY29ucy9maSdcclxuaW1wb3J0IHsgQWlPdXRsaW5lRG93biB9IGZyb20gJ3JlYWN0LWljb25zL2FpJ1xyXG5pbXBvcnQgeyBIaU91dGxpbmVEb3RzVmVydGljYWwgfSBmcm9tICdyZWFjdC1pY29ucy9oaSdcclxuaW1wb3J0IGV0aExvZ28gZnJvbSAnLi4vYXNzZXRzL2V0aC5wbmcnXHJcbmltcG9ydCB1bmlzd2FwTG9nbyBmcm9tICcuLi9hc3NldHMvdW5pc3dhcC5wbmcnXHJcblxyXG5cclxuY29uc3Qgc3R5bGUgPSB7XHJcbiAgd3JhcHBlcjogYHAtNCB3LXNjcmVlbiBmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXJgLFxyXG4gIGhlYWRlckxvZ286IGBmbGV4IHctMS80IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LXN0YXJ0YCxcclxuICBuYXY6IGBmbGV4LTEgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJgLFxyXG4gIG5hdkl0ZW1zQ29udGFpbmVyOiBgZmxleCBiZy1bIzE5MUIxRl0gcm91bmRlZC0zeGxgLFxyXG4gIG5hdkl0ZW06IGBweC00IHB5LTIgbS0xIGZsZXggaXRlbXMtY2VudGVyIHRleHQtbGcgZm9udC1zZW1pYm9sZCB0ZXh0LVswLjlyZW1dIGN1cnNvci1wb2ludGVyIHJvdW5kZWQtM3hsYCxcclxuICBhY3RpdmVOYXZJdGVtOmBiZy1bIzIwMjQyQV1gLFxyXG4gIGJ1dHRvbnNDb250YWluZXI6IGBmbGV4IHctMS80IGp1c3RpZnktZW5kIGl0ZW1zLWNlbnRlcmAsXHJcbiAgYnV0dG9uOiBgZmxleCBpdGVtcy1jZW50ZXIgYmctWyMxOTFCMUZdIHJvdW5kZWQtMnhsIG14LTIgdGV4dC1bMC45cmVtXSBmb250LXNlbWlib2xkIGN1cnNvci1wb2ludGVyYCxcclxuICBidXR0b25QYWRkaW5nOiBgcC0yYCxcclxuICBidXR0b25UZXh0Q29udGFpbmVyOiBgaC04IGZsZXggaXRlbXMtY2VudGVyYCxcclxuICBidXR0b25JY29uQ29udGFpbmVyOiBgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdy04IGgtOGAsXHJcbiAgYnV0dG9uQWNjZW50OiBgYmctWyMxNzJBNDJdIGJvcmRlciBib3JkZXItWyMxNjMyNTZdIGhvdmVyOmJvcmRlci1bIzIzNDE2OV0gaC1mdWxsIHJvdW5kZWQtMnhsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHRleHQtWyM0RjkwRUFdYCxcclxufVxyXG5cclxuZnVuY3Rpb24gSGVhZGVyKCkge1xyXG4gIGNvbnN0IFtzZWxlY3RlZE5hdiwgc2V0U2VsZWN0ZWROYXYgXSA9IHVzZVN0YXRlKCdzd2FwJylcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS53cmFwcGVyfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmhlYWRlckxvZ299PlxyXG4gICAgICAgIDxJbWFnZSBzcmM9e3VuaXN3YXBMb2dvfSBhbHQ9J3VuaXN3YXAnIGhlaWdodD17NDB9IHdpZHRoPXs0MH0vPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLm5hdn0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLm5hdkl0ZW1zQ29udGFpbmVyfT5cclxuICAgICAgICAgIDxkaXYgXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNlbGVjdGVkTmF2KCdzd2FwJyl9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGUubmF2SXRlbX0gJHtcclxuICAgICAgICAgICAgICBzZWxlY3RlZE5hdiA9PT0gJ3N3YXAnICYmIHN0eWxlLmFjdGl2ZU5hdkl0ZW1cclxuICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHN3YXBcclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBcclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2VsZWN0ZWROYXYoJ3Bvb2wnKX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZS5uYXZJdGVtfSAke1xyXG4gICAgICAgICAgICAgIHNlbGVjdGVkTmF2ID09PSAncG9vbCcgJiYgc3R5bGUuYWN0aXZlTmF2SXRlbVxyXG4gICAgICAgICAgICB9YH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgcG9vbFxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IFxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTZWxlY3RlZE5hdigndm90ZScpfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlLm5hdkl0ZW19ICR7XHJcbiAgICAgICAgICAgICAgc2VsZWN0ZWROYXYgPT09ICd2b3RlJyAmJiBzdHlsZS5hY3RpdmVOYXZJdGVtXHJcbiAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB2b3RlXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxhIFxyXG4gICAgICAgICAgICBocmVmPSdodHRwczovL2luZm8udW5pc3dhcC5vcmcvIy8nXHJcbiAgICAgICAgICAgIHRhcmdldD0nX2JsYW5rJ1xyXG4gICAgICAgICAgICByZWw9J25vcmVmZXJyZXInXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5uYXZJdGVtfT5cclxuICAgICAgICAgICAgICBDaGFydHMgPEZpQXJyb3dVcFJpZ2h0Lz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuYnV0dG9uc0NvbnRhaW5lcn0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlLmJ1dHRvbn0gJHtzdHlsZS5idXR0b25QYWRkaW5nfWB9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmJ1dHRvbkljb25Db250YWluZXJ9PlxyXG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPXtldGhMb2dvfSBhbHQ9J2V0aCBsb2dvJyBoZWlnaHQ9ezIwfSB3aWR0aD17MjB9Lz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICA8cD5FdGhlcmV1bTwvcD5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5idXR0b25JY29uQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgPEFpT3V0bGluZURvd24vPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gY29ubmVjdFdhbGxldCgpfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlLmJ1dHRvbn0gJHtzdHlsZS5idXR0b25QYWRkaW5nfWB9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZS5idXR0b25BY2NlbnR9ICR7c3R5bGUuYnV0dG9uQWNjZW50fWB9PlxyXG4gICAgICAgICAgICAgIENvbm5lY3QgV2FsbGV0XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlLmJ1dHRvbn0gJHtzdHlsZS5idXR0b25QYWRkaW5nfWB9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGUuYnV0dG9uSWNvbkNvbnRhaW5lcn0gbXgtMmB9PlxyXG4gICAgICAgICAgICAgIDxIaU91dGxpbmVEb3RzVmVydGljYWwvPlxyXG4gICAgICAgICAgICA8L2Rpdj4gIFxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJJbWFnZSIsIkZpQXJyb3dVcFJpZ2h0IiwiQWlPdXRsaW5lRG93biIsIkhpT3V0bGluZURvdHNWZXJ0aWNhbCIsImV0aExvZ28iLCJ1bmlzd2FwTG9nbyIsInN0eWxlIiwid3JhcHBlciIsImhlYWRlckxvZ28iLCJuYXYiLCJuYXZJdGVtc0NvbnRhaW5lciIsIm5hdkl0ZW0iLCJhY3RpdmVOYXZJdGVtIiwiYnV0dG9uc0NvbnRhaW5lciIsImJ1dHRvbiIsImJ1dHRvblBhZGRpbmciLCJidXR0b25UZXh0Q29udGFpbmVyIiwiYnV0dG9uSWNvbkNvbnRhaW5lciIsImJ1dHRvbkFjY2VudCIsIkhlYWRlciIsInNlbGVjdGVkTmF2Iiwic2V0U2VsZWN0ZWROYXYiLCJkaXYiLCJjbGFzc05hbWUiLCJzcmMiLCJhbHQiLCJoZWlnaHQiLCJ3aWR0aCIsIm9uQ2xpY2siLCJhIiwiaHJlZiIsInRhcmdldCIsInJlbCIsInAiLCJjb25uZWN0V2FsbGV0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Header.js\n");

/***/ })

});