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

/***/ "./components/Main.tsx":
/*!*****************************!*\
  !*** ./components/Main.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_benac_Documents_uniswap_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_benac_Documents_uniswap_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_benac_Documents_uniswap_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/ri */ \"./node_modules/react-icons/ri/index.esm.js\");\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-icons/ai */ \"./node_modules/react-icons/ai/index.esm.js\");\n/* harmony import */ var _assets_eth_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/eth.png */ \"./assets/eth.png\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _context_TransactionContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../context/TransactionContext */ \"./context/TransactionContext.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-modal */ \"./node_modules/react-modal/lib/index.js\");\n/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_7__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nreact_modal__WEBPACK_IMPORTED_MODULE_7___default().setAppElement('#__next');\nvar style = {\n    wrapper: \"w-screen flex items-center justify-center mt-14\",\n    content: \"bg-[#191B1F] w-[40rem] rounded-2xl p-4\",\n    formHeader: \"px-2 flex items-center justify-between font-semibold text-xl\",\n    transferPropContainer: \"bg-[#20242A] my-3 rounded-2xl p-6 text-3xl  border border-[#20242A] hover:border-[#41444F]  flex justify-between\",\n    transferPropInput: \"bg-transparent placeholder:text-[#B2B9D2] outline-none mb-6 w-full text-2xl\",\n    currencySelector: \"flex w-1/4\",\n    currencySelectorContent: \"w-full h-min flex justify-between items-center bg-[#2D2F36] hover:bg-[#41444F] rounded-2xl text-xl font-medium cursor-pointer p-2 mt-[-0.2rem]\",\n    currencySelectorIcon: \"flex items-center\",\n    currencySelectorTicker: \"mx-2\",\n    currencySelectorArrow: \"text-lg\",\n    confirmButton: \"bg-[#2172E5] my-2 rounded-2xl py-6 px-8 text-xl font-semibold flex items-center justify-center cursor-pointer border border-[#2172E5] hover:border-[#234169]\"\n};\nvar customStyles = {\n    content: {\n        top: '50%',\n        left: '50%',\n        right: 'auto',\n        bottom: 'auto',\n        transform: 'translate(-50%,-50%)',\n        backgroundColor: '#0a0b0d',\n        padding: 0,\n        border: 'none'\n    },\n    overlay: {\n        backgroundColor: 'rgba(10,11,13, 0.75)'\n    }\n};\nvar Main = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_4__.useContext)(_context_TransactionContext__WEBPACK_IMPORTED_MODULE_5__.TransactionContext), formData = ref.formData, handleChange = ref.handleChange, sendTransaction = ref.sendTransaction;\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\n    var handleSubmit = function() {\n        var _ref = _asyncToGenerator(C_Users_benac_Documents_uniswap_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(e) {\n            var addressTo, amount;\n            return C_Users_benac_Documents_uniswap_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        addressTo = formData.addressTo, amount = formData.amount;\n                        e.preventDefault();\n                        if (!(!addressTo || !amount)) {\n                            _ctx.next = 4;\n                            break;\n                        }\n                        return _ctx.abrupt(\"return\");\n                    case 4:\n                        sendTransaction();\n                    case 5:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function handleSubmit(e) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: style.wrapper,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: style.content,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: style.formHeader,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                children: \"Swap\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Main.tsx\",\n                                lineNumber: 59,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_icons_ri__WEBPACK_IMPORTED_MODULE_8__.RiSettings3Fill, {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Main.tsx\",\n                                    lineNumber: 61,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Main.tsx\",\n                                lineNumber: 60,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Main.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: style.transferPropContainer,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                className: style.transferPropInput,\n                                placeholder: \"0.0\",\n                                pattern: \"^[0-9]*[.,]?[0-9]*$\",\n                                onChange: function(e) {\n                                    return handleChange(e, 'amount');\n                                }\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Main.tsx\",\n                                lineNumber: 65,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: style.currencySelector,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                    className: style.currencySelectorContent,\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                            className: style.currencySelectorIcon,\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                                src: _assets_eth_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                                                alt: \"eth logo\",\n                                                height: 20,\n                                                width: 20\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Main.tsx\",\n                                                lineNumber: 75,\n                                                columnNumber: 17\n                                            }, _this)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Main.tsx\",\n                                            lineNumber: 74,\n                                            columnNumber: 15\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                            className: style.currencySelectorTicker,\n                                            children: \"ETH\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Main.tsx\",\n                                            lineNumber: 77,\n                                            columnNumber: 15\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_9__.AiOutlineDown, {\n                                            className: style.currencySelectorArrow\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Main.tsx\",\n                                            lineNumber: 78,\n                                            columnNumber: 15\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Main.tsx\",\n                                    lineNumber: 73,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Main.tsx\",\n                                lineNumber: 72,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Main.tsx\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: style.transferPropContainer,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                className: style.transferPropInput,\n                                placeholder: \"0x...\",\n                                onChange: function(e) {\n                                    return handleChange(e, 'addressTo');\n                                }\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Main.tsx\",\n                                lineNumber: 83,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: style.currencySelector\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Main.tsx\",\n                                lineNumber: 89,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Main.tsx\",\n                        lineNumber: 82,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        onClick: function(e) {\n                            return handleSubmit(e);\n                        },\n                        className: style.confirmButton,\n                        children: \"Confirm\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Main.tsx\",\n                        lineNumber: 91,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Main.tsx\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((react_modal__WEBPACK_IMPORTED_MODULE_7___default()), {\n                isOpen: !!router.query.loading,\n                style: customStyles,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(TransactionLoader, {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Main.tsx\",\n                    lineNumber: 97,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Main.tsx\",\n                lineNumber: 96,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\Main.tsx\",\n        lineNumber: 56,\n        columnNumber: 5\n    }, _this));\n};\n_s(Main, \"vkgaxHGkZqwu+rEEHv22FQnlFsY=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter\n    ];\n});\n_c = Main;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Main);\nvar _c;\n$RefreshReg$(_c, \"Main\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFlBQVk7c0dBQ3ZEbUMsaUJBQWlCOzs7Ozs7Ozs7Ozs7Ozs7O0FBSzFCLENBQUM7R0E1REt6QixJQUFJOztRQUdPekIsa0RBQVM7OztLQUhwQnlCLElBQUk7QUE4RFYsK0RBQWVBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NYWluLnRzeD85ZDhjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IHsgUmlTZXR0aW5nczNGaWxsIH0gZnJvbSAncmVhY3QtaWNvbnMvcmknXG5pbXBvcnQgeyBBaU91dGxpbmVEb3duIH0gZnJvbSAncmVhY3QtaWNvbnMvYWknXG5pbXBvcnQgZXRoTG9nbyBmcm9tICcuLi9hc3NldHMvZXRoLnBuZydcbmltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFRyYW5zYWN0aW9uQ29udGV4dCB9IGZyb20gJy4uL2NvbnRleHQvVHJhbnNhY3Rpb25Db250ZXh0J1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgTW9kYWwgZnJvbSAncmVhY3QtbW9kYWwnXG5cbk1vZGFsLnNldEFwcEVsZW1lbnQoJyNfX25leHQnKVxuXG5jb25zdCBzdHlsZSA9IHtcbiAgd3JhcHBlcjogYHctc2NyZWVuIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG10LTE0YCxcbiAgY29udGVudDogYGJnLVsjMTkxQjFGXSB3LVs0MHJlbV0gcm91bmRlZC0yeGwgcC00YCxcbiAgZm9ybUhlYWRlcjogYHB4LTIgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGZvbnQtc2VtaWJvbGQgdGV4dC14bGAsXG4gIHRyYW5zZmVyUHJvcENvbnRhaW5lcjogYGJnLVsjMjAyNDJBXSBteS0zIHJvdW5kZWQtMnhsIHAtNiB0ZXh0LTN4bCAgYm9yZGVyIGJvcmRlci1bIzIwMjQyQV0gaG92ZXI6Ym9yZGVyLVsjNDE0NDRGXSAgZmxleCBqdXN0aWZ5LWJldHdlZW5gLFxuICB0cmFuc2ZlclByb3BJbnB1dDogYGJnLXRyYW5zcGFyZW50IHBsYWNlaG9sZGVyOnRleHQtWyNCMkI5RDJdIG91dGxpbmUtbm9uZSBtYi02IHctZnVsbCB0ZXh0LTJ4bGAsXG4gIGN1cnJlbmN5U2VsZWN0b3I6IGBmbGV4IHctMS80YCxcbiAgY3VycmVuY3lTZWxlY3RvckNvbnRlbnQ6IGB3LWZ1bGwgaC1taW4gZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIGJnLVsjMkQyRjM2XSBob3ZlcjpiZy1bIzQxNDQ0Rl0gcm91bmRlZC0yeGwgdGV4dC14bCBmb250LW1lZGl1bSBjdXJzb3ItcG9pbnRlciBwLTIgbXQtWy0wLjJyZW1dYCxcbiAgY3VycmVuY3lTZWxlY3Rvckljb246IGBmbGV4IGl0ZW1zLWNlbnRlcmAsXG4gIGN1cnJlbmN5U2VsZWN0b3JUaWNrZXI6IGBteC0yYCxcbiAgY3VycmVuY3lTZWxlY3RvckFycm93OiBgdGV4dC1sZ2AsXG4gIGNvbmZpcm1CdXR0b246IGBiZy1bIzIxNzJFNV0gbXktMiByb3VuZGVkLTJ4bCBweS02IHB4LTggdGV4dC14bCBmb250LXNlbWlib2xkIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGN1cnNvci1wb2ludGVyIGJvcmRlciBib3JkZXItWyMyMTcyRTVdIGhvdmVyOmJvcmRlci1bIzIzNDE2OV1gLFxufVxuXG5jb25zdCBjdXN0b21TdHlsZXMgPSB7XG4gIGNvbnRlbnQ6IHtcbiAgICB0b3A6ICc1MCUnLFxuICAgIGxlZnQ6ICc1MCUnLFxuICAgIHJpZ2h0OiAnYXV0bycsXG4gICAgYm90dG9tOiAnYXV0bycsXG4gICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKC01MCUsLTUwJSknLFxuICAgIGJhY2tncm91bmRDb2xvcjogJyMwYTBiMGQnLFxuICAgIHBhZGRpbmc6IDAsXG4gICAgYm9yZGVyOiAnbm9uZScsXG4gIH0sXG4gIG92ZXJsYXk6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDEwLDExLDEzLCAwLjc1KScsXG4gIH0sXG59XG5cbmNvbnN0IE1haW4gPSAoKSA9PiB7XG5cbiAgY29uc3Qge2Zvcm1EYXRhLCBoYW5kbGVDaGFuZ2UsIHNlbmRUcmFuc2FjdGlvbn0gPSB1c2VDb250ZXh0KFRyYW5zYWN0aW9uQ29udGV4dClcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGU6IGFueSkgPT4ge1xuICAgIGNvbnN0IHsgYWRkcmVzc1RvLCBhbW91bnQgfSA9IGZvcm1EYXRhXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICBpZiAoIWFkZHJlc3NUbyB8fCAhYW1vdW50ICkgcmV0dXJuXG5cbiAgICBzZW5kVHJhbnNhY3Rpb24oKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUud3JhcHBlcn0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuY29udGVudH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5mb3JtSGVhZGVyfT5cbiAgICAgICAgICA8ZGl2PlN3YXA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPFJpU2V0dGluZ3MzRmlsbCAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLnRyYW5zZmVyUHJvcENvbnRhaW5lcn0+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPSd0ZXh0J1xuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZS50cmFuc2ZlclByb3BJbnB1dH1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPScwLjAnXG4gICAgICAgICAgICBwYXR0ZXJuPSdeWzAtOV0qWy4sXT9bMC05XSokJ1xuICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gaGFuZGxlQ2hhbmdlKGUsICdhbW91bnQnKX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5jdXJyZW5jeVNlbGVjdG9yfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5jdXJyZW5jeVNlbGVjdG9yQ29udGVudH0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5jdXJyZW5jeVNlbGVjdG9ySWNvbn0+XG4gICAgICAgICAgICAgICAgPEltYWdlIHNyYz17ZXRoTG9nb30gYWx0PSdldGggbG9nbycgaGVpZ2h0PXsyMH0gd2lkdGg9ezIwfSAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmN1cnJlbmN5U2VsZWN0b3JUaWNrZXJ9PkVUSDwvZGl2PlxuICAgICAgICAgICAgICA8QWlPdXRsaW5lRG93biBjbGFzc05hbWU9e3N0eWxlLmN1cnJlbmN5U2VsZWN0b3JBcnJvd30gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLnRyYW5zZmVyUHJvcENvbnRhaW5lcn0+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPSd0ZXh0J1xuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZS50cmFuc2ZlclByb3BJbnB1dH1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPScweC4uLidcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IGhhbmRsZUNoYW5nZShlLCAnYWRkcmVzc1RvJyl9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuY3VycmVuY3lTZWxlY3Rvcn0+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IG9uQ2xpY2s9e2UgPT4gaGFuZGxlU3VibWl0KGUpfSBjbGFzc05hbWU9e3N0eWxlLmNvbmZpcm1CdXR0b259PlxuICAgICAgICAgIENvbmZpcm1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPE1vZGFsIGlzT3Blbj17ISFyb3V0ZXIucXVlcnkubG9hZGluZ30gc3R5bGU9e2N1c3RvbVN0eWxlc30+XG4gICAgICAgIDxUcmFuc2FjdGlvbkxvYWRlci8+XG4gICAgICA8L01vZGFsPlxuXG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFpblxuIl0sIm5hbWVzIjpbIkltYWdlIiwiUmlTZXR0aW5nczNGaWxsIiwiQWlPdXRsaW5lRG93biIsImV0aExvZ28iLCJ1c2VDb250ZXh0IiwiVHJhbnNhY3Rpb25Db250ZXh0IiwidXNlUm91dGVyIiwiTW9kYWwiLCJzZXRBcHBFbGVtZW50Iiwic3R5bGUiLCJ3cmFwcGVyIiwiY29udGVudCIsImZvcm1IZWFkZXIiLCJ0cmFuc2ZlclByb3BDb250YWluZXIiLCJ0cmFuc2ZlclByb3BJbnB1dCIsImN1cnJlbmN5U2VsZWN0b3IiLCJjdXJyZW5jeVNlbGVjdG9yQ29udGVudCIsImN1cnJlbmN5U2VsZWN0b3JJY29uIiwiY3VycmVuY3lTZWxlY3RvclRpY2tlciIsImN1cnJlbmN5U2VsZWN0b3JBcnJvdyIsImNvbmZpcm1CdXR0b24iLCJjdXN0b21TdHlsZXMiLCJ0b3AiLCJsZWZ0IiwicmlnaHQiLCJib3R0b20iLCJ0cmFuc2Zvcm0iLCJiYWNrZ3JvdW5kQ29sb3IiLCJwYWRkaW5nIiwiYm9yZGVyIiwib3ZlcmxheSIsIk1haW4iLCJmb3JtRGF0YSIsImhhbmRsZUNoYW5nZSIsInNlbmRUcmFuc2FjdGlvbiIsInJvdXRlciIsImhhbmRsZVN1Ym1pdCIsImUiLCJhZGRyZXNzVG8iLCJhbW91bnQiLCJwcmV2ZW50RGVmYXVsdCIsImRpdiIsImNsYXNzTmFtZSIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwicGF0dGVybiIsIm9uQ2hhbmdlIiwic3JjIiwiYWx0IiwiaGVpZ2h0Iiwid2lkdGgiLCJvbkNsaWNrIiwiaXNPcGVuIiwicXVlcnkiLCJsb2FkaW5nIiwiVHJhbnNhY3Rpb25Mb2FkZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Main.tsx\n");

/***/ })

});