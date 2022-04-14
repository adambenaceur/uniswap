"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./context/TransactionContext.js":
/*!***************************************!*\
  !*** ./context/TransactionContext.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TransactionContext\": function() { return /* binding */ TransactionContext; },\n/* harmony export */   \"TransactionProvider\": function() { return /* binding */ TransactionProvider; }\n/* harmony export */ });\n/* harmony import */ var C_Users_benac_Documents_uniswap_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_benac_Documents_uniswap_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_benac_Documents_uniswap_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar TransactionContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2___default().createContext();\nvar eth;\nif (true) {\n    eth = window.ethereum;\n}\nvar TransactionProvider = function(param) {\n    var children = param.children;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), currentAccount = ref[0], setCurrentAccount = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), isLoading = ref1[0], setIsLoading = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        addressTo: '',\n        amount: ''\n    }), formData = ref2[0], setFormData = ref2[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        checkIfWalletIsConnected();\n    }, []);\n    /*\n * Prompts user to connect their MetaMask wallet\n */ var connectWallet = function() {\n        var _ref = _asyncToGenerator(C_Users_benac_Documents_uniswap_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var metamask, accounts, _args = arguments;\n            return C_Users_benac_Documents_uniswap_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        metamask = _args.length > 0 && _args[0] !== void 0 ? _args[0] : eth;\n                        _ctx.prev = 1;\n                        if (metamask) {\n                            _ctx.next = 4;\n                            break;\n                        }\n                        return _ctx.abrupt(\"return\", alert('Please install metamask '));\n                    case 4:\n                        _ctx.next = 6;\n                        return metamask.request({\n                            method: 'eth_requestAccounts'\n                        });\n                    case 6:\n                        accounts = _ctx.sent;\n                        setCurrentAccount(accounts[0]);\n                        _ctx.next = 14;\n                        break;\n                    case 10:\n                        _ctx.prev = 10;\n                        _ctx.t0 = _ctx[\"catch\"](1);\n                        console.error(_ctx.t0);\n                        throw new Error('No ethereum object.');\n                    case 14:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    1,\n                    10\n                ]\n            ]);\n        }));\n        return function connectWallet() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    //sending Transaction\n    var sendTransaction = function() {\n        var _ref = _asyncToGenerator(C_Users_benac_Documents_uniswap_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var metamask, connectedAccount, addressTo, amount, transactionContract, parsedAmount, transactionHash, _args = arguments;\n            return C_Users_benac_Documents_uniswap_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        metamask = _args.length > 0 && _args[0] !== void 0 ? _args[0] : eth, connectedAccount = _args.length > 1 && _args[1] !== void 0 ? _args[1] : currentAccount;\n                        _ctx.prev = 1;\n                        if (metamask) {\n                            _ctx.next = 4;\n                            break;\n                        }\n                        return _ctx.abrupt(\"return\", alert('Please install metamask'));\n                    case 4:\n                        addressTo = formData.addressTo, amount = formData.amount;\n                        transactionContract = getEthereumContract();\n                        parsedAmount = ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.utils.parseEther(amount);\n                        _ctx.next = 9;\n                        return metamask.request({\n                            method: 'eth_sendTransaction',\n                            params: [\n                                {\n                                    from: connectedAccount,\n                                    to: addressTo,\n                                    gas: '0x7EF40',\n                                    value: parsedAmount._hex\n                                }, \n                            ]\n                        });\n                    case 9:\n                        _ctx.next = 11;\n                        return transactionContract.publishTransaction(addressTo, parsedAmount, \"Transferring ETH \".concat(parsedAmount, \" to \").concat(addressTo), 'TRANSFER');\n                    case 11:\n                        transactionHash = _ctx.sent;\n                        setIsLoading(true);\n                        _ctx.next = 15;\n                        return transactionHash.wait();\n                    case 15:\n                        // database call\n                        // await saveTransaction(\n                        //   transactionHash.hash,\n                        //   amount,\n                        //   connectedAccount,\n                        //   addressTo\n                        // )\n                        setIsLoading(false);\n                        _ctx.next = 21;\n                        break;\n                    case 18:\n                        _ctx.prev = 18;\n                        _ctx.t0 = _ctx[\"catch\"](1);\n                        console.log(_ctx.t0);\n                    case 21:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    1,\n                    18\n                ]\n            ]);\n        }));\n        return function sendTransaction() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var checkIfWalletIsConnected = function() {\n        var _ref = _asyncToGenerator(C_Users_benac_Documents_uniswap_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var metamask, accounts, _args = arguments;\n            return C_Users_benac_Documents_uniswap_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        metamask = _args.length > 0 && _args[0] !== void 0 ? _args[0] : eth;\n                        _ctx.prev = 1;\n                        if (metamask) {\n                            _ctx.next = 4;\n                            break;\n                        }\n                        return _ctx.abrupt(\"return\", alert('Please install metamask'));\n                    case 4:\n                        _ctx.next = 6;\n                        return metamask.request({\n                            method: 'eth_accounts'\n                        });\n                    case 6:\n                        accounts = _ctx.sent;\n                        if (accounts.length) {\n                            setCurrentAccount(accounts[0]);\n                            console.log('wallet is already connected!');\n                        }\n                        _ctx.next = 14;\n                        break;\n                    case 10:\n                        _ctx.prev = 10;\n                        _ctx.t0 = _ctx[\"catch\"](1);\n                        console.error(_ctx.t0);\n                        throw new Error('No ethereum object');\n                    case 14:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    1,\n                    10\n                ]\n            ]);\n        }));\n        return function checkIfWalletIsConnected() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var handleChange = function(e, name) {\n        setFormData(function(prevState) {\n            return _objectSpread({}, prevState, _defineProperty({}, name, e.target.value));\n        });\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(TransactionContext.Provider, {\n        value: {\n            connectWallet: connectWallet,\n            currentAccount: currentAccount,\n            sendTransaction: sendTransaction,\n            handleChange: handleChange,\n            formData: formData\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\context\\\\TransactionContext.js\",\n        lineNumber: 114,\n        columnNumber: 5\n    }, _this));\n};\n_s(TransactionProvider, \"129s9bEgKFVZYhPStSu78hi2r8M=\");\n_c = TransactionProvider;\nvar _c;\n$RefreshReg$(_c, \"TransactionProvider\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSxTQUFTLHNCQUFHRCxJQUFJLEVBQUdELENBQUMsQ0FBQ0csTUFBTSxDQUFDVixLQUFLOztJQUNwRSxDQUFDO0lBRUQsTUFBTSw2RUFDSHJDLGtCQUFrQixDQUFDZ0QsUUFBUTtRQUMxQlgsS0FBSyxFQUFFLENBQUM7WUFDTnJCLGFBQWEsRUFBYkEsYUFBYTtZQUNiVCxjQUFjLEVBQWRBLGNBQWM7WUFDZGtCLGVBQWUsRUFBZkEsZUFBZTtZQUNma0IsWUFBWSxFQUFaQSxZQUFZO1lBQ1o5QixRQUFRLEVBQVJBLFFBQVE7UUFDVixDQUFDO2tCQUVBUCxRQUFROzs7Ozs7QUFHZixDQUFDO0dBakhZRCxtQkFBbUI7S0FBbkJBLG1CQUFtQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb250ZXh0L1RyYW5zYWN0aW9uQ29udGV4dC5qcz82OTk5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBldGhlcnMgfSBmcm9tICdldGhlcnMnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcblxuZXhwb3J0IGNvbnN0IFRyYW5zYWN0aW9uQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoKVxuXG5sZXQgZXRoXG5cbmlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICBldGggPSB3aW5kb3cuZXRoZXJldW1cbn1cblxuZXhwb3J0IGNvbnN0IFRyYW5zYWN0aW9uUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIGNvbnN0IFtjdXJyZW50QWNjb3VudCwgc2V0Q3VycmVudEFjY291bnRdID0gdXNlU3RhdGUoKVxuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFtmb3JtRGF0YSwgc2V0Rm9ybURhdGEgXSA9IHVzZVN0YXRlKHtcbiAgICBhZGRyZXNzVG86ICcnLFxuICAgIGFtb3VudDogJycsXG4gIH0pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjaGVja0lmV2FsbGV0SXNDb25uZWN0ZWQoKVxuICB9LCBbXSlcblxuXG4vKlxuICogUHJvbXB0cyB1c2VyIHRvIGNvbm5lY3QgdGhlaXIgTWV0YU1hc2sgd2FsbGV0XG4gKi9cbiAgY29uc3QgY29ubmVjdFdhbGxldCA9IGFzeW5jIChtZXRhbWFzayA9IGV0aCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBpZiAoIW1ldGFtYXNrKSByZXR1cm4gYWxlcnQoJ1BsZWFzZSBpbnN0YWxsIG1ldGFtYXNrICcpXG5cbiAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgbWV0YW1hc2sucmVxdWVzdCh7IG1ldGhvZDogJ2V0aF9yZXF1ZXN0QWNjb3VudHMnIH0pXG5cbiAgICAgIHNldEN1cnJlbnRBY2NvdW50KGFjY291bnRzWzBdKVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKVxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyBldGhlcmV1bSBvYmplY3QuJylcbiAgICB9XG4gIH1cblxuICAvL3NlbmRpbmcgVHJhbnNhY3Rpb25cbiAgY29uc3Qgc2VuZFRyYW5zYWN0aW9uID0gYXN5bmMgKFxuICAgIG1ldGFtYXNrID0gZXRoLFxuICAgIGNvbm5lY3RlZEFjY291bnQgPSBjdXJyZW50QWNjb3VudFxuICApID0+IHtcbiAgICB0cnkge1xuICAgICAgaWYgKCFtZXRhbWFzaykgcmV0dXJuIGFsZXJ0KCdQbGVhc2UgaW5zdGFsbCBtZXRhbWFzaycpXG4gICAgICBjb25zdCB7IGFkZHJlc3NUbywgYW1vdW50IH0gPSBmb3JtRGF0YVxuICAgICAgY29uc3QgdHJhbnNhY3Rpb25Db250cmFjdCA9IGdldEV0aGVyZXVtQ29udHJhY3QoKVxuXG4gICAgICBjb25zdCBwYXJzZWRBbW91bnQgPSBldGhlcnMudXRpbHMucGFyc2VFdGhlcihhbW91bnQpXG5cbiAgICAgIGF3YWl0IG1ldGFtYXNrLnJlcXVlc3Qoe1xuICAgICAgICBtZXRob2Q6ICdldGhfc2VuZFRyYW5zYWN0aW9uJyxcbiAgICAgICAgcGFyYW1zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgZnJvbTogY29ubmVjdGVkQWNjb3VudCxcbiAgICAgICAgICAgIHRvOiBhZGRyZXNzVG8sXG4gICAgICAgICAgICBnYXM6ICcweDdFRjQwJywgLy8gNTIwLDAwMCBHd2VpXG4gICAgICAgICAgICB2YWx1ZTogcGFyc2VkQW1vdW50Ll9oZXgsXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0pXG5cbiAgICAgIGNvbnN0IHRyYW5zYWN0aW9uSGFzaCA9IGF3YWl0IHRyYW5zYWN0aW9uQ29udHJhY3QucHVibGlzaFRyYW5zYWN0aW9uKFxuICAgICAgICBhZGRyZXNzVG8sXG4gICAgICAgIHBhcnNlZEFtb3VudCxcbiAgICAgICAgYFRyYW5zZmVycmluZyBFVEggJHtwYXJzZWRBbW91bnR9IHRvICR7YWRkcmVzc1RvfWAsIFxuICAgICAgICAnVFJBTlNGRVInXG4gICAgICApXG4gICAgICBcbiAgICAgIHNldElzTG9hZGluZyh0cnVlKVxuXG4gICAgICBhd2FpdCB0cmFuc2FjdGlvbkhhc2gud2FpdCgpXG5cblxuICAgICAgLy8gZGF0YWJhc2UgY2FsbFxuICAgICAgLy8gYXdhaXQgc2F2ZVRyYW5zYWN0aW9uKFxuICAgICAgLy8gICB0cmFuc2FjdGlvbkhhc2guaGFzaCxcbiAgICAgIC8vICAgYW1vdW50LFxuICAgICAgLy8gICBjb25uZWN0ZWRBY2NvdW50LFxuICAgICAgLy8gICBhZGRyZXNzVG9cbiAgICAgIC8vIClcblxuICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKVxuXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGNoZWNrSWZXYWxsZXRJc0Nvbm5lY3RlZCA9IGFzeW5jIChtZXRhbWFzayA9IGV0aCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBpZiAoIW1ldGFtYXNrKSByZXR1cm4gYWxlcnQoJ1BsZWFzZSBpbnN0YWxsIG1ldGFtYXNrJylcblxuICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCBtZXRhbWFzay5yZXF1ZXN0KHttZXRob2Q6ICdldGhfYWNjb3VudHMnfSlcblxuICAgICAgaWYgKGFjY291bnRzLmxlbmd0aCkge1xuICAgICAgICBzZXRDdXJyZW50QWNjb3VudChhY2NvdW50c1swXSlcbiAgICAgICAgY29uc29sZS5sb2coJ3dhbGxldCBpcyBhbHJlYWR5IGNvbm5lY3RlZCEnKVxuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKVxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyBldGhlcmV1bSBvYmplY3QnKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlLCBuYW1lKSA9PiB7XG4gICAgc2V0Rm9ybURhdGEoKHByZXZTdGF0ZSkgPT4gKHsgLi4ucHJldlN0YXRlLCBbbmFtZV06IGUudGFyZ2V0LnZhbHVlfSkpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxUcmFuc2FjdGlvbkNvbnRleHQuUHJvdmlkZXJcbiAgICAgIHZhbHVlPXt7XG4gICAgICAgIGNvbm5lY3RXYWxsZXQsXG4gICAgICAgIGN1cnJlbnRBY2NvdW50LFxuICAgICAgICBzZW5kVHJhbnNhY3Rpb24sXG4gICAgICAgIGhhbmRsZUNoYW5nZSxcbiAgICAgICAgZm9ybURhdGFcbiAgICAgIH19XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvVHJhbnNhY3Rpb25Db250ZXh0LlByb3ZpZGVyPlxuICApXG59XG4gIFxuICBcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiZXRoZXJzIiwidXNlUm91dGVyIiwiVHJhbnNhY3Rpb25Db250ZXh0IiwiY3JlYXRlQ29udGV4dCIsImV0aCIsIndpbmRvdyIsImV0aGVyZXVtIiwiVHJhbnNhY3Rpb25Qcm92aWRlciIsImNoaWxkcmVuIiwiY3VycmVudEFjY291bnQiLCJzZXRDdXJyZW50QWNjb3VudCIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsImFkZHJlc3NUbyIsImFtb3VudCIsImZvcm1EYXRhIiwic2V0Rm9ybURhdGEiLCJjaGVja0lmV2FsbGV0SXNDb25uZWN0ZWQiLCJjb25uZWN0V2FsbGV0IiwibWV0YW1hc2siLCJhY2NvdW50cyIsImFsZXJ0IiwicmVxdWVzdCIsIm1ldGhvZCIsImNvbnNvbGUiLCJlcnJvciIsIkVycm9yIiwic2VuZFRyYW5zYWN0aW9uIiwiY29ubmVjdGVkQWNjb3VudCIsInRyYW5zYWN0aW9uQ29udHJhY3QiLCJwYXJzZWRBbW91bnQiLCJ0cmFuc2FjdGlvbkhhc2giLCJnZXRFdGhlcmV1bUNvbnRyYWN0IiwidXRpbHMiLCJwYXJzZUV0aGVyIiwicGFyYW1zIiwiZnJvbSIsInRvIiwiZ2FzIiwidmFsdWUiLCJfaGV4IiwicHVibGlzaFRyYW5zYWN0aW9uIiwid2FpdCIsImxvZyIsImxlbmd0aCIsImhhbmRsZUNoYW5nZSIsImUiLCJuYW1lIiwicHJldlN0YXRlIiwidGFyZ2V0IiwiUHJvdmlkZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./context/TransactionContext.js\n");

/***/ })

});