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

/***/ "./assets/ethCurrency.png":
/*!********************************!*\
  !*** ./assets/ethCurrency.png ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\"src\":\"/_next/static/media/ethCurrency.41a91770.png\",\"height\":2027,\"width\":1227,\"blurDataURL\":\"/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FethCurrency.41a91770.png&w=8&q=70\"});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hc3NldHMvZXRoQ3VycmVuY3kucG5nLmpzIiwibWFwcGluZ3MiOiI7QUFBQSwrREFBZSxDQUFDLCtLQUErSyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hc3NldHMvZXRoQ3VycmVuY3kucG5nPzU2YWIiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1wic3JjXCI6XCIvX25leHQvc3RhdGljL21lZGlhL2V0aEN1cnJlbmN5LjQxYTkxNzcwLnBuZ1wiLFwiaGVpZ2h0XCI6MjAyNyxcIndpZHRoXCI6MTIyNyxcImJsdXJEYXRhVVJMXCI6XCIvX25leHQvaW1hZ2U/dXJsPSUyRl9uZXh0JTJGc3RhdGljJTJGbWVkaWElMkZldGhDdXJyZW5jeS40MWE5MTc3MC5wbmcmdz04JnE9NzBcIn07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./assets/ethCurrency.png\n");

/***/ }),

/***/ "./components/TransactionHistory.tsx":
/*!*******************************************!*\
  !*** ./components/TransactionHistory.tsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_benac_Documents_uniswap_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_benac_Documents_uniswap_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_benac_Documents_uniswap_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_sanityClient__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/sanityClient */ \"./lib/sanityClient.js\");\n/* harmony import */ var _context_TransactionContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context/TransactionContext */ \"./context/TransactionContext.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _assets_ethCurrency_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/ethCurrency.png */ \"./assets/ethCurrency.png\");\n/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/fi */ \"./node_modules/react-icons/fi/index.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _s = $RefreshSig$();\nvar style = {\n    wrapper: \"h-full text-white select-none h-full w-screen flex-1 pt-14 flex items-end justify-end pb-12 overflow-scroll px-8\",\n    txHistoryItem: \"bg-[#191a1e] rounded-lg px-4 py-2 my-2 flex items-center justify-end\",\n    txDetails: \"flex items-center\",\n    toAddress: \"text-[#f48706]\",\n    txTimestamp: \"mx-2\",\n    etherscanLink: \"flex items-center text-[#2172e5]\"\n};\nfunction TransactionHistory() {\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_context_TransactionContext__WEBPACK_IMPORTED_MODULE_4__.TransactionContext), isLoading = ref.isLoading, currentAccount = ref.currentAccount;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), transactionHistory = ref1[0], setTransactionHistory = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        _asyncToGenerator(C_Users_benac_Documents_uniswap_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var query, clientRes;\n            return C_Users_benac_Documents_uniswap_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        if (!(!isLoading && currentAccount)) {\n                            _ctx.next = 6;\n                            break;\n                        }\n                        query = \"\\n                    *[_type==\\\"users\\\" && _id == \\\"\".concat(currentAccount, \"\\\"] {\\n                        \\\"transactionList\\\": transactions[] -> {amount, toAddress, timestamp, txHash} | order(timestamp desc)[0..4]\\n                    }\\n                \");\n                        _ctx.next = 4;\n                        return _lib_sanityClient__WEBPACK_IMPORTED_MODULE_3__.client.fetch(query);\n                    case 4:\n                        clientRes = _ctx.sent;\n                        setTransactionHistory(clientRes[0].transactionList);\n                    case 6:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }))();\n    }, [\n        isLoading,\n        currentAccount\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: style.wrapper,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            children: transactionHistory && (transactionHistory === null || transactionHistory === void 0 ? void 0 : transactionHistory.map(function(transaction, index) {\n                /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: style.txHistoryItem,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: style.txDetails,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                    src: _assets_ethCurrency_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n                                    height: 20,\n                                    width: 15,\n                                    alt: \"eth\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\TransactionHistory.tsx\",\n                                    lineNumber: 45,\n                                    columnNumber: 25\n                                }, _this),\n                                transaction.amount,\n                                \" Ξ send to\",\n                                ' ',\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                                    className: style.toAddress,\n                                    children: [\n                                        transaction.toAddress.substring(0, 6),\n                                        \" ...\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\TransactionHistory.tsx\",\n                                    lineNumber: 47,\n                                    columnNumber: 25\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\TransactionHistory.tsx\",\n                            lineNumber: 44,\n                            columnNumber: 21\n                        }, _this),\n                        ' ',\n                        \"on\",\n                        ' ',\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: style.txTimestamp,\n                            children: new Date(transaction.timestamp).toLocaleString('en-US', {\n                                timeZone: 'PST',\n                                hour12: true,\n                                timeStyle: 'short',\n                                dateStyle: 'long'\n                            })\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\TransactionHistory.tsx\",\n                            lineNumber: 52,\n                            columnNumber: 17\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: style.etherscanLink,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                                href: \"https://rinkeby.etherscan.io/tx/\".concat(transaction.txHash),\n                                target: \"_blank\",\n                                rel: \"noreferrer\",\n                                className: style.etherscanLink,\n                                children: [\n                                    \"View on Etherscan\",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_icons_fi__WEBPACK_IMPORTED_MODULE_7__.FiArrowUpRight, {}, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\TransactionHistory.tsx\",\n                                        lineNumber: 68,\n                                        columnNumber: 25\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\TransactionHistory.tsx\",\n                                lineNumber: 61,\n                                columnNumber: 21\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\TransactionHistory.tsx\",\n                            lineNumber: 60,\n                            columnNumber: 17\n                        }, _this)\n                    ]\n                }, index, true, {\n                    fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\TransactionHistory.tsx\",\n                    lineNumber: 43,\n                    columnNumber: 17\n                }, _this);\n            }))\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\TransactionHistory.tsx\",\n            lineNumber: 41,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\components\\\\TransactionHistory.tsx\",\n        lineNumber: 40,\n        columnNumber: 5\n    }, this));\n}\n_s(TransactionHistory, \"lZmiObd/nHu+GYLNDAMbZKOBXKA=\");\n_c = TransactionHistory;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TransactionHistory);\nvar _c;\n$RefreshReg$(_c, \"TransactionHistory\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1RyYW5zYWN0aW9uSGlzdG9yeS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUE0RDtBQUNoQjtBQUNzQjtBQUNwQztBQUNpQjtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRS9DLEdBQUssQ0FBQ1MsS0FBSyxHQUFHLENBQUM7SUFDWEMsT0FBTyxFQUFHLENBQWdIO0lBQzFIQyxhQUFhLEVBQUcsQ0FBb0U7SUFDcEZDLFNBQVMsRUFBRyxDQUFpQjtJQUM3QkMsU0FBUyxFQUFHLENBQWM7SUFDMUJDLFdBQVcsRUFBRyxDQUFJO0lBQ2xCQyxhQUFhLEVBQUcsQ0FBZ0M7QUFDcEQsQ0FBQztTQUNRQyxrQkFBa0IsR0FBRyxDQUFDOzs7SUFFM0IsR0FBSyxDQUErQmIsR0FBOEIsR0FBOUJBLGlEQUFVLENBQUNFLDJFQUFrQixHQUExRFksU0FBUyxHQUFvQmQsR0FBOEIsQ0FBM0RjLFNBQVMsRUFBRUMsY0FBYyxHQUFJZixHQUE4QixDQUFoRGUsY0FBYztJQUNoQyxHQUFLLENBQStDaEIsSUFBWSxHQUFaQSwrQ0FBUSxDQUFDLENBQUMsQ0FBQyxHQUF4RGlCLGtCQUFrQixHQUEyQmpCLElBQVksS0FBckNrQixxQkFBcUIsR0FBSWxCLElBQVk7SUFFaEVELGdEQUFTLENBQUMsUUFBUSxHQUFGLENBQUM7NEtBQ1gsUUFBUSxXQUFJLENBQUM7Z0JBRURvQixLQUFLLEVBTUxDLFNBQVM7Ozs7K0JBUGRMLFNBQVMsSUFBSUMsY0FBYzs7Ozt3QkFDdEJHLEtBQUssR0FBSSxDQUNpQix1REFBaUIsTUFHakQsQ0FIa0NILGNBQWMsRUFBQyxDQUdqRDs7K0JBRXdCZCwyREFBWSxDQUFDaUIsS0FBSzs7d0JBQXBDQyxTQUFTO3dCQUVmRixxQkFBcUIsQ0FBQ0UsU0FBUyxDQUFDLENBQUMsRUFBRUUsZUFBZTs7Ozs7O1FBRzFELENBQUM7SUFDTCxDQUFDLEVBQUUsQ0FBQ1A7UUFBQUEsU0FBUztRQUFFQyxjQUFjO0lBQUEsQ0FBQztJQUdoQyxNQUFNLDZFQUNITyxDQUFHO1FBQUNDLFNBQVMsRUFBRWpCLEtBQUssQ0FBQ0MsT0FBTzs4RkFDeEJlLENBQUc7c0JBQ0NOLGtCQUFrQixLQUFJQSxrQkFBa0IsYUFBbEJBLGtCQUFrQixLQUFsQkEsSUFBSSxDQUFKQSxDQUF1QixHQUF2QkEsSUFBSSxDQUFKQSxDQUF1QixHQUF2QkEsa0JBQWtCLENBQUVRLEdBQUcsQ0FBQyxRQUFRLENBQVBDLFdBQVcsRUFBRUMsS0FBSzs4QkFDOUQsTUFBTSwrREFBTEosQ0FBRztvQkFBQ0MsU0FBUyxFQUFFakIsS0FBSyxDQUFDRSxhQUFhOztvR0FDOUJjLENBQUc7NEJBQUNDLFNBQVMsRUFBRWpCLEtBQUssQ0FBQ0csU0FBUzs7NEdBQzFCTixtREFBSztvQ0FBQ3dCLEdBQUcsRUFBRXZCLCtEQUFPO29DQUFFd0IsTUFBTSxFQUFFLEVBQUU7b0NBQUVDLEtBQUssRUFBRSxFQUFFO29DQUFFQyxHQUFHLEVBQUMsQ0FBSzs7Ozs7O2dDQUNwREwsV0FBVyxDQUFDTSxNQUFNO2dDQUFDLENBQVU7Z0NBQUMsQ0FBRzs0R0FDakNDLENBQUk7b0NBQUNULFNBQVMsRUFBRWpCLEtBQUssQ0FBQ0ksU0FBUzs7d0NBQzNCZSxXQUFXLENBQUNmLFNBQVMsQ0FBQ3VCLFNBQVMsQ0FBQyxDQUFDLEVBQUMsQ0FBQzt3Q0FBRSxDQUMxQzs7Ozs7Ozs7Ozs7Ozt3QkFDRCxDQUFHO3dCQUFDLENBQ1Q7d0JBQUMsQ0FBRztvR0FDTFgsQ0FBRzs0QkFBQ0MsU0FBUyxFQUFFakIsS0FBSyxDQUFDSyxXQUFXO3NDQUM1QixHQUFHLENBQUN1QixJQUFJLENBQUNULFdBQVcsQ0FBQ1UsU0FBUyxFQUFFQyxjQUFjLENBQUMsQ0FBTyxRQUFFLENBQUM7Z0NBQ3REQyxRQUFRLEVBQUUsQ0FBSztnQ0FDZkMsTUFBTSxFQUFFLElBQUk7Z0NBQ1pDLFNBQVMsRUFBRSxDQUFPO2dDQUNsQkMsU0FBUyxFQUFFLENBQU07NEJBQ3JCLENBQUM7Ozs7OztvR0FFSmxCLENBQUc7NEJBQUNDLFNBQVMsRUFBRWpCLEtBQUssQ0FBQ00sYUFBYTtrSEFDOUI2QixDQUFDO2dDQUNFQyxJQUFJLEVBQUcsQ0FBZ0Msa0NBQXFCLE9BQW5CakIsV0FBVyxDQUFDa0IsTUFBTTtnQ0FDM0RDLE1BQU0sRUFBQyxDQUFRO2dDQUNmQyxHQUFHLEVBQUMsQ0FBWTtnQ0FDaEJ0QixTQUFTLEVBQUVqQixLQUFLLENBQUNNLGFBQWE7O29DQUNqQyxDQUVHO2dIQUFDUCwwREFBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7bUJBekJtQnFCLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtQy9ELENBQUM7R0E5RFFiLGtCQUFrQjtLQUFsQkEsa0JBQWtCO0FBZ0UzQiwrREFBZUEsa0JBQWtCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvVHJhbnNhY3Rpb25IaXN0b3J5LnRzeD9kNTgwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZUNvbnRleHR9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBjbGllbnQgfSBmcm9tICcuLi9saWIvc2FuaXR5Q2xpZW50J1xyXG5pbXBvcnQgeyBUcmFuc2FjdGlvbkNvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0L1RyYW5zYWN0aW9uQ29udGV4dCdcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXHJcbmltcG9ydCBldGhMb2dvIGZyb20gJy4uL2Fzc2V0cy9ldGhDdXJyZW5jeS5wbmcnXHJcbmltcG9ydCB7IEZpQXJyb3dVcFJpZ2h0IH0gZnJvbSAncmVhY3QtaWNvbnMvZmknXHJcblxyXG5jb25zdCBzdHlsZSA9IHtcclxuICAgIHdyYXBwZXI6IGBoLWZ1bGwgdGV4dC13aGl0ZSBzZWxlY3Qtbm9uZSBoLWZ1bGwgdy1zY3JlZW4gZmxleC0xIHB0LTE0IGZsZXggaXRlbXMtZW5kIGp1c3RpZnktZW5kIHBiLTEyIG92ZXJmbG93LXNjcm9sbCBweC04YCxcclxuICAgIHR4SGlzdG9yeUl0ZW06IGBiZy1bIzE5MWExZV0gcm91bmRlZC1sZyBweC00IHB5LTIgbXktMiBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWVuZGAsXHJcbiAgICB0eERldGFpbHM6IGBmbGV4IGl0ZW1zLWNlbnRlcmAsXHJcbiAgICB0b0FkZHJlc3M6IGB0ZXh0LVsjZjQ4NzA2XWAsXHJcbiAgICB0eFRpbWVzdGFtcDogYG14LTJgLFxyXG4gICAgZXRoZXJzY2FuTGluazogYGZsZXggaXRlbXMtY2VudGVyIHRleHQtWyMyMTcyZTVdYFxyXG59XHJcbmZ1bmN0aW9uIFRyYW5zYWN0aW9uSGlzdG9yeSgpIHtcclxuXHJcbiAgICBjb25zdCB7aXNMb2FkaW5nLCBjdXJyZW50QWNjb3VudH0gPSB1c2VDb250ZXh0KFRyYW5zYWN0aW9uQ29udGV4dClcclxuICAgIGNvbnN0IFt0cmFuc2FjdGlvbkhpc3RvcnksIHNldFRyYW5zYWN0aW9uSGlzdG9yeV0gPSB1c2VTdGF0ZShbXSlcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIDsoYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIWlzTG9hZGluZyAmJiBjdXJyZW50QWNjb3VudCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcXVlcnkgPSBgXHJcbiAgICAgICAgICAgICAgICAgICAgKltfdHlwZT09XCJ1c2Vyc1wiICYmIF9pZCA9PSBcIiR7Y3VycmVudEFjY291bnR9XCJdIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0cmFuc2FjdGlvbkxpc3RcIjogdHJhbnNhY3Rpb25zW10gLT4ge2Ftb3VudCwgdG9BZGRyZXNzLCB0aW1lc3RhbXAsIHR4SGFzaH0gfCBvcmRlcih0aW1lc3RhbXAgZGVzYylbMC4uNF1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNsaWVudFJlcyA9IGF3YWl0IGNsaWVudC5mZXRjaChxdWVyeSlcclxuXHJcbiAgICAgICAgICAgICAgICBzZXRUcmFuc2FjdGlvbkhpc3RvcnkoY2xpZW50UmVzWzBdLnRyYW5zYWN0aW9uTGlzdClcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9KSgpXHJcbiAgICB9LCBbaXNMb2FkaW5nLCBjdXJyZW50QWNjb3VudF0pXHJcblxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLndyYXBwZXJ9PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIHt0cmFuc2FjdGlvbkhpc3RvcnkgJiYgdHJhbnNhY3Rpb25IaXN0b3J5Py5tYXAoKHRyYW5zYWN0aW9uLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLnR4SGlzdG9yeUl0ZW19IGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS50eERldGFpbHN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtldGhMb2dvfSBoZWlnaHQ9ezIwfSB3aWR0aD17MTV9IGFsdD0nZXRoJy8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0cmFuc2FjdGlvbi5hbW91bnR9IM6eIHNlbmQgdG97JyAnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlLnRvQWRkcmVzc30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dHJhbnNhY3Rpb24udG9BZGRyZXNzLnN1YnN0cmluZygwLDYpfSAuLi5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+eycgJ31cclxuICAgICAgICAgICAgICAgIG9ueycgJ31cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS50eFRpbWVzdGFtcH0+XHJcbiAgICAgICAgICAgICAgICAgICAge25ldyBEYXRlKHRyYW5zYWN0aW9uLnRpbWVzdGFtcCkudG9Mb2NhbGVTdHJpbmcoJ2VuLVVTJywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lWm9uZTogJ1BTVCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhvdXIxMjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGltZVN0eWxlOiAnc2hvcnQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRlU3R5bGU6ICdsb25nJyxcclxuICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmV0aGVyc2Nhbkxpbmt9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2BodHRwczovL3JpbmtlYnkuZXRoZXJzY2FuLmlvL3R4LyR7dHJhbnNhY3Rpb24udHhIYXNofWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD0nX2JsYW5rJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWw9J25vcmVmZXJyZXInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGUuZXRoZXJzY2FuTGlua31cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFZpZXcgb24gRXRoZXJzY2FuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGaUFycm93VXBSaWdodCAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICkpfSBcclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRyYW5zYWN0aW9uSGlzdG9yeSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlQ29udGV4dCIsImNsaWVudCIsIlRyYW5zYWN0aW9uQ29udGV4dCIsIkltYWdlIiwiZXRoTG9nbyIsIkZpQXJyb3dVcFJpZ2h0Iiwic3R5bGUiLCJ3cmFwcGVyIiwidHhIaXN0b3J5SXRlbSIsInR4RGV0YWlscyIsInRvQWRkcmVzcyIsInR4VGltZXN0YW1wIiwiZXRoZXJzY2FuTGluayIsIlRyYW5zYWN0aW9uSGlzdG9yeSIsImlzTG9hZGluZyIsImN1cnJlbnRBY2NvdW50IiwidHJhbnNhY3Rpb25IaXN0b3J5Iiwic2V0VHJhbnNhY3Rpb25IaXN0b3J5IiwicXVlcnkiLCJjbGllbnRSZXMiLCJmZXRjaCIsInRyYW5zYWN0aW9uTGlzdCIsImRpdiIsImNsYXNzTmFtZSIsIm1hcCIsInRyYW5zYWN0aW9uIiwiaW5kZXgiLCJzcmMiLCJoZWlnaHQiLCJ3aWR0aCIsImFsdCIsImFtb3VudCIsInNwYW4iLCJzdWJzdHJpbmciLCJEYXRlIiwidGltZXN0YW1wIiwidG9Mb2NhbGVTdHJpbmciLCJ0aW1lWm9uZSIsImhvdXIxMiIsInRpbWVTdHlsZSIsImRhdGVTdHlsZSIsImEiLCJocmVmIiwidHhIYXNoIiwidGFyZ2V0IiwicmVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/TransactionHistory.tsx\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Header */ \"./components/Header.tsx\");\n/* harmony import */ var _components_Main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Main */ \"./components/Main.tsx\");\n/* harmony import */ var _components_TransactionHistory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/TransactionHistory */ \"./components/TransactionHistory.tsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _this = undefined;\nvar style = {\n    wrapper: \"h-screen max-h-screen h-min-screen w-screen bg-[#2D242F] text-white select-none flex flex-col justify-between\"\n};\nvar Home = function() {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: style.wrapper,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\pages\\\\index.tsx\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Main__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\pages\\\\index.tsx\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_TransactionHistory__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\pages\\\\index.tsx\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\pages\\\\index.tsx\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, _this));\n};\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDeUM7QUFDSjtBQUM0Qjs7QUFFakUsR0FBSyxDQUFDRyxLQUFLLEdBQUcsQ0FBQztJQUNiQyxPQUFPLEVBQUcsQ0FBNkc7QUFDekgsQ0FBQztBQUVELEdBQUssQ0FBQ0MsSUFBSSxHQUFhLFFBQ3ZCLEdBRDZCLENBQUM7SUFDNUIsTUFBTSw2RUFDSEMsQ0FBRztRQUFDQyxTQUFTLEVBQUVKLEtBQUssQ0FBQ0MsT0FBTzs7d0ZBQzFCSiwwREFBTTs7Ozs7d0ZBQ05DLHdEQUFJOzs7Ozt3RkFDSkMsc0VBQWtCOzs7Ozs7Ozs7OztBQUd6QixDQUFDO0tBUktHLElBQUk7QUFVViwrREFBZUEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IE5leHRQYWdlIH0gZnJvbSAnbmV4dCdcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkZXInXG5pbXBvcnQgTWFpbiBmcm9tICcuLi9jb21wb25lbnRzL01haW4nXG5pbXBvcnQgVHJhbnNhY3Rpb25IaXN0b3J5IGZyb20gJy4uL2NvbXBvbmVudHMvVHJhbnNhY3Rpb25IaXN0b3J5J1xuXG5jb25zdCBzdHlsZSA9IHtcbiAgd3JhcHBlcjogYGgtc2NyZWVuIG1heC1oLXNjcmVlbiBoLW1pbi1zY3JlZW4gdy1zY3JlZW4gYmctWyMyRDI0MkZdIHRleHQtd2hpdGUgc2VsZWN0LW5vbmUgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWJldHdlZW5gLFxufVxuXG5jb25zdCBIb21lOiBOZXh0UGFnZSA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUud3JhcHBlcn0+XG4gICAgICA8SGVhZGVyIC8+XG4gICAgICA8TWFpbiAvPlxuICAgICAgPFRyYW5zYWN0aW9uSGlzdG9yeS8+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZVxuIl0sIm5hbWVzIjpbIkhlYWRlciIsIk1haW4iLCJUcmFuc2FjdGlvbkhpc3RvcnkiLCJzdHlsZSIsIndyYXBwZXIiLCJIb21lIiwiZGl2IiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

});