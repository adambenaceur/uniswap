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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/ri */ \"./node_modules/react-icons/ri/index.esm.js\");\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/ai */ \"./node_modules/react-icons/ai/index.esm.js\");\n/* harmony import */ var _assets_eth_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/eth.png */ \"./assets/eth.png\");\n\n\n\n\n\n\nvar style = {\n    wrapper: \"w-screen flex items-center justify-center mt-14\",\n    content: \"bg-[#191B1F] w-[40rem] rounded-2xl p-4\",\n    formHeader: \"px-2 flex items-center justify-between font-semibold text-xl\",\n    transferPropContainer: \"bg-[#20242A] my-3 rounded-2xl p-6 text-3xl border border-[#41444F] flex justify-between\",\n    transferPropInput: \"bg-transparent placeholder:text-[#B2B9D2] outline-none mb-6 w-full text-2xl\",\n    currencySelector: \"flex w-1/4\",\n    currencySelectorContent: \"w-full h-him flex justify-between items-center bg-[#2D2F36] hover:bg-[#41444F] rounded-2xl text-xl font-medium cursor-polinter p-2 mt-[-0.2rem]\",\n    currencySelectorIcon: \"flex items-center\",\n    currencySelectorTicker: \"mx-2\",\n    currencySelectorArrow: \"text-lg\",\n    confirmButton: \"bg-[#2172E5] my-2 rounded-2xl py-6 px-8 text-xl font-semibold flex items-center justify-center cursor-pointer border border-[#2172E5] hover:border-[#234169]\"\n};\nfunction Main() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: style.wrapper,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: style.content,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: style.formHeader,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: \"Swap\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Main.js\",\n                            lineNumber: 26,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ri__WEBPACK_IMPORTED_MODULE_4__.RiSettings3Fill, {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Main.js\",\n                                lineNumber: 28,\n                                columnNumber: 21\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Main.js\",\n                            lineNumber: 27,\n                            columnNumber: 17\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Main.js\",\n                    lineNumber: 25,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: style.transferPropContainer,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            className: style.transferPropInput,\n                            placeholder: \"0.0\",\n                            pattern: \"^[0-9]*[.,]?[0-9]*$\",\n                            onChange: function(e) {\n                                return handleChange(e, \"amount\");\n                            }\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Main.js\",\n                            lineNumber: 32,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: style.currencySelector,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: style.currencySelectorContent,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: style.currencySelectorIcon,\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                            src: _assets_eth_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                                            alt: \"eth logo\",\n                                            height: 20,\n                                            width: 20\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Main.js\",\n                                            lineNumber: 42,\n                                            columnNumber: 29\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Main.js\",\n                                        lineNumber: 41,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: style.currencySelectorTicker,\n                                        children: \"ETH\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Main.js\",\n                                        lineNumber: 44,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__.AiOutlineDown, {\n                                        className: style.currencySelectorArrow\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Main.js\",\n                                        lineNumber: 45,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Main.js\",\n                                lineNumber: 40,\n                                columnNumber: 21\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Main.js\",\n                            lineNumber: 39,\n                            columnNumber: 17\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Main.js\",\n                    lineNumber: 31,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: style.transferPropContainer,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            className: style.transferPropInput,\n                            placeholder: \"0x ...\",\n                            onChange: function(e) {\n                                return handleChange(e, \"addressTo\");\n                            }\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Main.js\",\n                            lineNumber: 50,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: style.currencySelector\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Main.js\",\n                            lineNumber: 56,\n                            columnNumber: 17\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Main.js\",\n                    lineNumber: 49,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    onClick: function(e) {\n                        return handleSubmit(e);\n                    },\n                    className: style.confirmButton\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Main.js\",\n                    lineNumber: 58,\n                    columnNumber: 13\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Main.js\",\n            lineNumber: 24,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Main.js\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, this);\n}\n_c = Main;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Main);\nvar _c;\n$RefreshReg$(_c, \"Main\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFZLENBQUNQLENBQUMsQ0FBQztxQkFBQTtvQkFBRU4sU0FBUyxFQUFFZCxLQUFLLENBQUNXLGFBQWE7Ozs7O3dCQUU5RDs7Ozs7O2dCQUVKOzs7OztZQUNKLENBQ1A7Q0FDRjtBQTVDUUMsS0FBQUEsSUFBSTtBQThDYiwrREFBZUEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL01haW4uanM/NjhlMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xyXG5pbXBvcnQgeyBSaVNldHRpbmdzM0ZpbGwgfSBmcm9tICdyZWFjdC1pY29ucy9yaSdcclxuaW1wb3J0IHsgQWlPdXRsaW5lRG93biB9IGZyb20gJ3JlYWN0LWljb25zL2FpJ1xyXG5pbXBvcnQgZXRoTG9nbyBmcm9tICcuLi9hc3NldHMvZXRoLnBuZydcclxuXHJcbmNvbnN0IHN0eWxlID0ge1xyXG4gICAgd3JhcHBlcjogYHctc2NyZWVuIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG10LTE0YCxcclxuICAgIGNvbnRlbnQ6IGBiZy1bIzE5MUIxRl0gdy1bNDByZW1dIHJvdW5kZWQtMnhsIHAtNGAsXHJcbiAgICBmb3JtSGVhZGVyOiBgcHgtMiBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gZm9udC1zZW1pYm9sZCB0ZXh0LXhsYCxcclxuICAgIHRyYW5zZmVyUHJvcENvbnRhaW5lcjogYGJnLVsjMjAyNDJBXSBteS0zIHJvdW5kZWQtMnhsIHAtNiB0ZXh0LTN4bCBib3JkZXIgYm9yZGVyLVsjNDE0NDRGXSBmbGV4IGp1c3RpZnktYmV0d2VlbmAsXHJcbiAgICB0cmFuc2ZlclByb3BJbnB1dDogYGJnLXRyYW5zcGFyZW50IHBsYWNlaG9sZGVyOnRleHQtWyNCMkI5RDJdIG91dGxpbmUtbm9uZSBtYi02IHctZnVsbCB0ZXh0LTJ4bGAsXHJcbiAgICBjdXJyZW5jeVNlbGVjdG9yOiBgZmxleCB3LTEvNGAsXHJcbiAgICBjdXJyZW5jeVNlbGVjdG9yQ29udGVudDogYHctZnVsbCBoLWhpbSBmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgYmctWyMyRDJGMzZdIGhvdmVyOmJnLVsjNDE0NDRGXSByb3VuZGVkLTJ4bCB0ZXh0LXhsIGZvbnQtbWVkaXVtIGN1cnNvci1wb2xpbnRlciBwLTIgbXQtWy0wLjJyZW1dYCxcclxuICAgIGN1cnJlbmN5U2VsZWN0b3JJY29uOiBgZmxleCBpdGVtcy1jZW50ZXJgLFxyXG4gICAgY3VycmVuY3lTZWxlY3RvclRpY2tlcjogYG14LTJgLFxyXG4gICAgY3VycmVuY3lTZWxlY3RvckFycm93OiBgdGV4dC1sZ2AsXHJcbiAgICBjb25maXJtQnV0dG9uOiBgYmctWyMyMTcyRTVdIG15LTIgcm91bmRlZC0yeGwgcHktNiBweC04IHRleHQteGwgZm9udC1zZW1pYm9sZCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBjdXJzb3ItcG9pbnRlciBib3JkZXIgYm9yZGVyLVsjMjE3MkU1XSBob3Zlcjpib3JkZXItWyMyMzQxNjldYCxcclxufVxyXG5cclxuZnVuY3Rpb24gTWFpbigpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLndyYXBwZXJ9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5jb250ZW50fT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmZvcm1IZWFkZXJ9PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5Td2FwPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxSaVNldHRpbmdzM0ZpbGwvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUudHJhbnNmZXJQcm9wQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZS50cmFuc2ZlclByb3BJbnB1dH1cclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIjAuMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgcGF0dGVybj1cIl5bMC05XSpbLixdP1swLTldKiRcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ2hhbmdlKGUsIFwiYW1vdW50XCIpfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5jdXJyZW5jeVNlbGVjdG9yfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuY3VycmVuY3lTZWxlY3RvckNvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuY3VycmVuY3lTZWxlY3Rvckljb259PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz17ZXRoTG9nb30gYWx0PSdldGggbG9nbycgaGVpZ2h0PXsyMH0gd2lkdGg9ezIwfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuY3VycmVuY3lTZWxlY3RvclRpY2tlcn0+RVRIPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBaU91dGxpbmVEb3duIGNsYXNzTmFtZT17c3R5bGUuY3VycmVuY3lTZWxlY3RvckFycm93fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS50cmFuc2ZlclByb3BDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT0ndGV4dCdcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlLnRyYW5zZmVyUHJvcElucHV0fVxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPScweCAuLi4nXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2UoZSwgJ2FkZHJlc3NUbycpfVxyXG4gICAgICAgICAgICAgICAgLz4gIFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmN1cnJlbmN5U2VsZWN0b3J9PjwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoZSkgPT4gaGFuZGxlU3VibWl0KGUpfSBjbGFzc05hbWU9e3N0eWxlLmNvbmZpcm1CdXR0b259PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFpbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkltYWdlIiwiUmlTZXR0aW5nczNGaWxsIiwiQWlPdXRsaW5lRG93biIsImV0aExvZ28iLCJzdHlsZSIsIndyYXBwZXIiLCJjb250ZW50IiwiZm9ybUhlYWRlciIsInRyYW5zZmVyUHJvcENvbnRhaW5lciIsInRyYW5zZmVyUHJvcElucHV0IiwiY3VycmVuY3lTZWxlY3RvciIsImN1cnJlbmN5U2VsZWN0b3JDb250ZW50IiwiY3VycmVuY3lTZWxlY3Rvckljb24iLCJjdXJyZW5jeVNlbGVjdG9yVGlja2VyIiwiY3VycmVuY3lTZWxlY3RvckFycm93IiwiY29uZmlybUJ1dHRvbiIsIk1haW4iLCJkaXYiLCJjbGFzc05hbWUiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInBhdHRlcm4iLCJvbkNoYW5nZSIsImUiLCJoYW5kbGVDaGFuZ2UiLCJzcmMiLCJhbHQiLCJoZWlnaHQiLCJ3aWR0aCIsIm9uQ2xpY2siLCJoYW5kbGVTdWJtaXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Main.js\n");

/***/ })

});