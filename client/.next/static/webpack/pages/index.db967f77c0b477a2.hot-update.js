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

/***/ "./components/Main.js":
/*!****************************!*\
  !*** ./components/Main.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/ri */ \"./node_modules/react-icons/ri/index.esm.js\");\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/ai */ \"./node_modules/react-icons/ai/index.esm.js\");\n/* harmony import */ var _assets_eth_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/eth.png */ \"./assets/eth.png\");\n\n\n\n\n\n\nvar style = {\n    wrapper: \"w-screen flex items-center justify-center mt-14\",\n    content: \"bg-[#191B1F] w-[40rem] rounded-2xl p-4\",\n    formHeader: \"px-2 flex items-center justify-between font-semibold text-xl\",\n    transferPropContainer: \"bg-[#20242A] my-3 rounded-2xl p-6 text-3xl border border-[#41444F] flex justify-between\",\n    transferPropInput: \"bg-transparent placeholder:text-[#B2B9D2] outline-none mb-6 w-full text-2xl\",\n    currencySelector: \"flex w-1/4\",\n    currencySelectorContent: \"w-full h-him flex justify-between items-center bg-[#2D2F36] hover:bg-[#41444F] rounded-2xl text-xl font-medium cursor-polinter p-2 mt-[-0.2rem]\",\n    currencySelectorTicker: \"mx-2\",\n    currencySelectorArrow: \"text-lg\",\n    confirmButton: \"bg-[#2172E5] my-2 rounded-2xl py-6 px-8 text-xl font-semibold flex items-center justify-center cursor-pointer border border-[#2172E5] hover:border-[#234169]\"\n};\nfunction Main() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: style.wrapper,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: style.content,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: style.formHeader,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: \"Swap\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Main.js\",\n                            lineNumber: 25,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ri__WEBPACK_IMPORTED_MODULE_4__.RiSettings3Fill, {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Main.js\",\n                                lineNumber: 27,\n                                columnNumber: 21\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Main.js\",\n                            lineNumber: 26,\n                            columnNumber: 17\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Main.js\",\n                    lineNumber: 24,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: style.transferPropContainer,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            className: style.transferPropInput,\n                            placeholder: \"0.0\",\n                            pattern: \"^[0-9]*[.,]?[0-9]*$\",\n                            onChange: function(e) {\n                                return handleChange(e, \"amount\");\n                            }\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Main.js\",\n                            lineNumber: 31,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: style.currencySelector,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: style.currencySelectorContent,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: style.currencySelectorIcon,\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                            src: _assets_eth_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                                            alt: \"eth logo\",\n                                            height: 20,\n                                            width: 20\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Main.js\",\n                                            lineNumber: 41,\n                                            columnNumber: 29\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Main.js\",\n                                        lineNumber: 40,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: style.currencySelectorTicker,\n                                        children: \"ETH\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Main.js\",\n                                        lineNumber: 43,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__.AiOutlineDown, {\n                                        className: style.currencySelectorArrow\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Main.js\",\n                                        lineNumber: 44,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Main.js\",\n                                lineNumber: 39,\n                                columnNumber: 21\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Main.js\",\n                            lineNumber: 38,\n                            columnNumber: 17\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Main.js\",\n                    lineNumber: 30,\n                    columnNumber: 13\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Main.js\",\n            lineNumber: 23,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Main.js\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, this);\n}\n_c = Main;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Main);\nvar _c;\n$RefreshReg$(_c, \"Main\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01haW4uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQXlCO0FBQ0s7QUFDa0I7QUFDRjtBQUNQO0FBRXZDLElBQU1LLEtBQUssR0FBRztJQUNWQyxPQUFPLEVBQUcsaURBQStDO0lBQ3pEQyxPQUFPLEVBQUcsd0NBQXNDO0lBQ2hEQyxVQUFVLEVBQUcsOERBQTREO0lBQ3pFQyxxQkFBcUIsRUFBRyx5RkFBdUY7SUFDL0dDLGlCQUFpQixFQUFHLDZFQUEyRTtJQUMvRkMsZ0JBQWdCLEVBQUcsWUFBVTtJQUM3QkMsdUJBQXVCLEVBQUcsaUpBQStJO0lBQ3pLQyxzQkFBc0IsRUFBRyxNQUFJO0lBQzdCQyxxQkFBcUIsRUFBRyxTQUFPO0lBQy9CQyxhQUFhLEVBQUcsOEpBQTRKO0NBQy9LO0FBRUQsU0FBU0MsSUFBSSxHQUFHO0lBQ2QscUJBQ0UsOERBQUNDLEtBQUc7UUFBQ0MsU0FBUyxFQUFFYixLQUFLLENBQUNDLE9BQU87a0JBQ3pCLDRFQUFDVyxLQUFHO1lBQUNDLFNBQVMsRUFBRWIsS0FBSyxDQUFDRSxPQUFPOzs4QkFDekIsOERBQUNVLEtBQUc7b0JBQUNDLFNBQVMsRUFBRWIsS0FBSyxDQUFDRyxVQUFVOztzQ0FDNUIsOERBQUNTLEtBQUc7c0NBQUMsTUFBSTs7Ozs7Z0NBQU07c0NBQ2YsOERBQUNBLEtBQUc7c0NBQ0EsNEVBQUNmLDJEQUFlOzs7O29DQUFFOzs7OztnQ0FDaEI7Ozs7Ozt3QkFDSjs4QkFDTiw4REFBQ2UsS0FBRztvQkFBQ0MsU0FBUyxFQUFFYixLQUFLLENBQUNJLHFCQUFxQjs7c0NBQ3ZDLDhEQUFDVSxPQUFLOzRCQUNGQyxJQUFJLEVBQUMsTUFBTTs0QkFDWEYsU0FBUyxFQUFFYixLQUFLLENBQUNLLGlCQUFpQjs0QkFDbENXLFdBQVcsRUFBQyxLQUFLOzRCQUNqQkMsT0FBTyxFQUFDLHFCQUFxQjs0QkFDN0JDLFFBQVEsRUFBRSxTQUFDQyxDQUFDO3VDQUFLQyxZQUFZLENBQUNELENBQUMsRUFBRSxRQUFRLENBQUM7NkJBQUE7Ozs7O2dDQUM1QztzQ0FDRiw4REFBQ1AsS0FBRzs0QkFBQ0MsU0FBUyxFQUFFYixLQUFLLENBQUNNLGdCQUFnQjtzQ0FDbEMsNEVBQUNNLEtBQUc7Z0NBQUNDLFNBQVMsRUFBRWIsS0FBSyxDQUFDTyx1QkFBdUI7O2tEQUN6Qyw4REFBQ0ssS0FBRzt3Q0FBQ0MsU0FBUyxFQUFFYixLQUFLLENBQUNxQixvQkFBb0I7a0RBQ3RDLDRFQUFDekIsbURBQUs7NENBQUMwQixHQUFHLEVBQUV2Qix1REFBTzs0Q0FBRXdCLEdBQUcsRUFBQyxVQUFVOzRDQUFDQyxNQUFNLEVBQUUsRUFBRTs0Q0FBRUMsS0FBSyxFQUFFLEVBQUU7Ozs7O2dEQUFHOzs7Ozs0Q0FDMUQ7a0RBQ04sOERBQUNiLEtBQUc7d0NBQUNDLFNBQVMsRUFBRWIsS0FBSyxDQUFDUSxzQkFBc0I7a0RBQUUsS0FBRzs7Ozs7NENBQU07a0RBQ3ZELDhEQUFDVix5REFBYTt3Q0FBQ2UsU0FBUyxFQUFFYixLQUFLLENBQUNTLHFCQUFxQjs7Ozs7NENBQUc7Ozs7OztvQ0FDdEQ7Ozs7O2dDQUNKOzs7Ozs7d0JBQ0o7Ozs7OztnQkFDSjs7Ozs7WUFDSixDQUNQO0NBQ0Y7QUEvQlFFLEtBQUFBLElBQUk7QUFpQ2IsK0RBQWVBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NYWluLmpzPzY4ZTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcclxuaW1wb3J0IHsgUmlTZXR0aW5nczNGaWxsIH0gZnJvbSAncmVhY3QtaWNvbnMvcmknXHJcbmltcG9ydCB7IEFpT3V0bGluZURvd24gfSBmcm9tICdyZWFjdC1pY29ucy9haSdcclxuaW1wb3J0IGV0aExvZ28gZnJvbSAnLi4vYXNzZXRzL2V0aC5wbmcnXHJcblxyXG5jb25zdCBzdHlsZSA9IHtcclxuICAgIHdyYXBwZXI6IGB3LXNjcmVlbiBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBtdC0xNGAsXHJcbiAgICBjb250ZW50OiBgYmctWyMxOTFCMUZdIHctWzQwcmVtXSByb3VuZGVkLTJ4bCBwLTRgLFxyXG4gICAgZm9ybUhlYWRlcjogYHB4LTIgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGZvbnQtc2VtaWJvbGQgdGV4dC14bGAsXHJcbiAgICB0cmFuc2ZlclByb3BDb250YWluZXI6IGBiZy1bIzIwMjQyQV0gbXktMyByb3VuZGVkLTJ4bCBwLTYgdGV4dC0zeGwgYm9yZGVyIGJvcmRlci1bIzQxNDQ0Rl0gZmxleCBqdXN0aWZ5LWJldHdlZW5gLFxyXG4gICAgdHJhbnNmZXJQcm9wSW5wdXQ6IGBiZy10cmFuc3BhcmVudCBwbGFjZWhvbGRlcjp0ZXh0LVsjQjJCOUQyXSBvdXRsaW5lLW5vbmUgbWItNiB3LWZ1bGwgdGV4dC0yeGxgLFxyXG4gICAgY3VycmVuY3lTZWxlY3RvcjogYGZsZXggdy0xLzRgLFxyXG4gICAgY3VycmVuY3lTZWxlY3RvckNvbnRlbnQ6IGB3LWZ1bGwgaC1oaW0gZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIGJnLVsjMkQyRjM2XSBob3ZlcjpiZy1bIzQxNDQ0Rl0gcm91bmRlZC0yeGwgdGV4dC14bCBmb250LW1lZGl1bSBjdXJzb3ItcG9saW50ZXIgcC0yIG10LVstMC4ycmVtXWAsXHJcbiAgICBjdXJyZW5jeVNlbGVjdG9yVGlja2VyOiBgbXgtMmAsXHJcbiAgICBjdXJyZW5jeVNlbGVjdG9yQXJyb3c6IGB0ZXh0LWxnYCxcclxuICAgIGNvbmZpcm1CdXR0b246IGBiZy1bIzIxNzJFNV0gbXktMiByb3VuZGVkLTJ4bCBweS02IHB4LTggdGV4dC14bCBmb250LXNlbWlib2xkIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGN1cnNvci1wb2ludGVyIGJvcmRlciBib3JkZXItWyMyMTcyRTVdIGhvdmVyOmJvcmRlci1bIzIzNDE2OV1gLFxyXG59XHJcblxyXG5mdW5jdGlvbiBNYWluKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUud3JhcHBlcn0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmNvbnRlbnR9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuZm9ybUhlYWRlcn0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlN3YXA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPFJpU2V0dGluZ3MzRmlsbC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS50cmFuc2ZlclByb3BDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlLnRyYW5zZmVyUHJvcElucHV0fVxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiMC4wXCJcclxuICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuPVwiXlswLTldKlsuLF0/WzAtOV0qJFwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2UoZSwgXCJhbW91bnRcIil9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmN1cnJlbmN5U2VsZWN0b3J9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5jdXJyZW5jeVNlbGVjdG9yQ29udGVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5jdXJyZW5jeVNlbGVjdG9ySWNvbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtldGhMb2dvfSBhbHQ9J2V0aCBsb2dvJyBoZWlnaHQ9ezIwfSB3aWR0aD17MjB9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5jdXJyZW5jeVNlbGVjdG9yVGlja2VyfT5FVEg8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEFpT3V0bGluZURvd24gY2xhc3NOYW1lPXtzdHlsZS5jdXJyZW5jeVNlbGVjdG9yQXJyb3d9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFpbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkltYWdlIiwiUmlTZXR0aW5nczNGaWxsIiwiQWlPdXRsaW5lRG93biIsImV0aExvZ28iLCJzdHlsZSIsIndyYXBwZXIiLCJjb250ZW50IiwiZm9ybUhlYWRlciIsInRyYW5zZmVyUHJvcENvbnRhaW5lciIsInRyYW5zZmVyUHJvcElucHV0IiwiY3VycmVuY3lTZWxlY3RvciIsImN1cnJlbmN5U2VsZWN0b3JDb250ZW50IiwiY3VycmVuY3lTZWxlY3RvclRpY2tlciIsImN1cnJlbmN5U2VsZWN0b3JBcnJvdyIsImNvbmZpcm1CdXR0b24iLCJNYWluIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJwYXR0ZXJuIiwib25DaGFuZ2UiLCJlIiwiaGFuZGxlQ2hhbmdlIiwiY3VycmVuY3lTZWxlY3Rvckljb24iLCJzcmMiLCJhbHQiLCJoZWlnaHQiLCJ3aWR0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Main.js\n");

/***/ })

});