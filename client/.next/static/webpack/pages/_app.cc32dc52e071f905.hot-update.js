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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TransactionContext\": function() { return /* binding */ TransactionContext; },\n/* harmony export */   \"TransactionProvider\": function() { return /* binding */ TransactionProvider; }\n/* harmony export */ });\n/* harmony import */ var C_Users_benac_Documents_uniswap_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_benac_Documents_uniswap_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_benac_Documents_uniswap_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar TransactionContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2___default().createContext();\nvar eth;\nif (true) {\n    eth = window.ethereum;\n}\nvar getEthereumContract = function() {\n    var provider = new ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.providers.Web3Provider(eth);\n    var signer = provider.getSigner;\n    var transactionContract = new ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.Contract(contractAddress, contractABI, signer);\n    return transactionContract;\n};\nvar TransactionProvider = function(param) {\n    var children = param.children;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), currentAccount = ref[0], setCurrentAccount = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), isLoading = ref1[0], setIsLoading = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        addressTo: '',\n        amount: ''\n    }), formData = ref2[0], setFormData = ref2[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        checkIfWalletIsConnected();\n    }, []);\n    /*\n * Prompts user to connect their MetaMask wallet\n */ var connectWallet = function() {\n        var _ref = _asyncToGenerator(C_Users_benac_Documents_uniswap_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var metamask, accounts, _args = arguments;\n            return C_Users_benac_Documents_uniswap_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        metamask = _args.length > 0 && _args[0] !== void 0 ? _args[0] : eth;\n                        _ctx.prev = 1;\n                        if (metamask) {\n                            _ctx.next = 4;\n                            break;\n                        }\n                        return _ctx.abrupt(\"return\", alert('Please install metamask '));\n                    case 4:\n                        _ctx.next = 6;\n                        return metamask.request({\n                            method: 'eth_requestAccounts'\n                        });\n                    case 6:\n                        accounts = _ctx.sent;\n                        setCurrentAccount(accounts[0]);\n                        _ctx.next = 14;\n                        break;\n                    case 10:\n                        _ctx.prev = 10;\n                        _ctx.t0 = _ctx[\"catch\"](1);\n                        console.error(_ctx.t0);\n                        throw new Error('No ethereum object.');\n                    case 14:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    1,\n                    10\n                ]\n            ]);\n        }));\n        return function connectWallet() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    //sending Transaction\n    var sendTransaction = function() {\n        var _ref = _asyncToGenerator(C_Users_benac_Documents_uniswap_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var metamask, connectedAccount, addressTo, amount, transactionContract, parsedAmount, transactionHash, _args = arguments;\n            return C_Users_benac_Documents_uniswap_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        metamask = _args.length > 0 && _args[0] !== void 0 ? _args[0] : eth, connectedAccount = _args.length > 1 && _args[1] !== void 0 ? _args[1] : currentAccount;\n                        _ctx.prev = 1;\n                        if (metamask) {\n                            _ctx.next = 4;\n                            break;\n                        }\n                        return _ctx.abrupt(\"return\", alert('Please install metamask'));\n                    case 4:\n                        addressTo = formData.addressTo, amount = formData.amount;\n                        transactionContract = getEthereumContract();\n                        parsedAmount = ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.utils.parseEther(amount);\n                        _ctx.next = 9;\n                        return metamask.request({\n                            method: 'eth_sendTransaction',\n                            params: [\n                                {\n                                    from: connectedAccount,\n                                    to: addressTo,\n                                    gas: '0x7EF40',\n                                    value: parsedAmount._hex\n                                }, \n                            ]\n                        });\n                    case 9:\n                        _ctx.next = 11;\n                        return transactionContract.publishTransaction(addressTo, parsedAmount, \"Transferring ETH \".concat(parsedAmount, \" to \").concat(addressTo), 'TRANSFER');\n                    case 11:\n                        transactionHash = _ctx.sent;\n                        setIsLoading(true);\n                        _ctx.next = 15;\n                        return transactionHash.wait();\n                    case 15:\n                        // database call\n                        // await saveTransaction(\n                        //   transactionHash.hash,\n                        //   amount,\n                        //   connectedAccount,\n                        //   addressTo\n                        // )\n                        setIsLoading(false);\n                        _ctx.next = 21;\n                        break;\n                    case 18:\n                        _ctx.prev = 18;\n                        _ctx.t0 = _ctx[\"catch\"](1);\n                        console.log(_ctx.t0);\n                    case 21:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    1,\n                    18\n                ]\n            ]);\n        }));\n        return function sendTransaction() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var checkIfWalletIsConnected = function() {\n        var _ref = _asyncToGenerator(C_Users_benac_Documents_uniswap_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var metamask, accounts, _args = arguments;\n            return C_Users_benac_Documents_uniswap_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        metamask = _args.length > 0 && _args[0] !== void 0 ? _args[0] : eth;\n                        _ctx.prev = 1;\n                        if (metamask) {\n                            _ctx.next = 4;\n                            break;\n                        }\n                        return _ctx.abrupt(\"return\", alert('Please install metamask'));\n                    case 4:\n                        _ctx.next = 6;\n                        return metamask.request({\n                            method: 'eth_accounts'\n                        });\n                    case 6:\n                        accounts = _ctx.sent;\n                        if (accounts.length) {\n                            setCurrentAccount(accounts[0]);\n                            console.log('wallet is already connected!');\n                        }\n                        _ctx.next = 14;\n                        break;\n                    case 10:\n                        _ctx.prev = 10;\n                        _ctx.t0 = _ctx[\"catch\"](1);\n                        console.error(_ctx.t0);\n                        throw new Error('No ethereum object');\n                    case 14:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    1,\n                    10\n                ]\n            ]);\n        }));\n        return function checkIfWalletIsConnected() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var handleChange = function(e, name) {\n        setFormData(function(prevState) {\n            return _objectSpread({}, prevState, _defineProperty({}, name, e.target.value));\n        });\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(TransactionContext.Provider, {\n        value: {\n            connectWallet: connectWallet,\n            currentAccount: currentAccount,\n            sendTransaction: sendTransaction,\n            handleChange: handleChange,\n            formData: formData\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\context\\\\TransactionContext.js\",\n        lineNumber: 126,\n        columnNumber: 5\n    }, _this));\n};\n_s(TransactionProvider, \"129s9bEgKFVZYhPStSu78hi2r8M=\");\n_c = TransactionProvider;\nvar _c;\n$RefreshReg$(_c, \"TransactionProvider\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUM7NEJBQzVCSSxPQUFPLENBQUNpQixHQUFHLENBQUMsQ0FBOEI7d0JBQzVDLENBQUM7Ozs7Ozt3QkFFRGpCLE9BQU8sQ0FBQ0MsS0FBSzt3QkFDYixLQUFLLENBQUMsR0FBRyxDQUFDQyxLQUFLLENBQUMsQ0FBb0I7Ozs7Ozs7Ozs7O1FBRXhDLENBQUM7d0JBZEtULHdCQUF3Qjs7OztJQWdCOUIsR0FBSyxDQUFDMEIsWUFBWSxHQUFHLFFBQVEsQ0FBUEMsQ0FBQyxFQUFFQyxJQUFJLEVBQUssQ0FBQztRQUNqQzdCLFdBQVcsQ0FBQyxRQUFRLENBQVA4QixTQUFTO1lBQUssTUFBTUEsbUJBQUFBLFNBQVMsc0JBQUdELElBQUksRUFBR0QsQ0FBQyxDQUFDRyxNQUFNLENBQUNWLEtBQUs7O0lBQ3BFLENBQUM7SUFFRCxNQUFNLDZFQUNIN0Msa0JBQWtCLENBQUN3RCxRQUFRO1FBQzFCWCxLQUFLLEVBQUUsQ0FBQztZQUNObkIsYUFBYSxFQUFiQSxhQUFhO1lBQ2JULGNBQWMsRUFBZEEsY0FBYztZQUNka0IsZUFBZSxFQUFmQSxlQUFlO1lBQ2ZnQixZQUFZLEVBQVpBLFlBQVk7WUFDWjVCLFFBQVEsRUFBUkEsUUFBUTtRQUNWLENBQUM7a0JBRUFQLFFBQVE7Ozs7OztBQUdmLENBQUM7R0FqSFlELG1CQUFtQjtLQUFuQkEsbUJBQW1CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbnRleHQvVHJhbnNhY3Rpb25Db250ZXh0LmpzPzY5OTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGV0aGVycyB9IGZyb20gJ2V0aGVycydcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuXG5leHBvcnQgY29uc3QgVHJhbnNhY3Rpb25Db250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCgpXG5cbmxldCBldGhcblxuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gIGV0aCA9IHdpbmRvdy5ldGhlcmV1bVxufVxuXG5jb25zdCBnZXRFdGhlcmV1bUNvbnRyYWN0ID0gKCkgPT4ge1xuICBjb25zdCBwcm92aWRlciA9IG5ldyBldGhlcnMucHJvdmlkZXJzLldlYjNQcm92aWRlcihldGgpXG4gIGNvbnN0IHNpZ25lciA9IHByb3ZpZGVyLmdldFNpZ25lclxuICBjb25zdCB0cmFuc2FjdGlvbkNvbnRyYWN0ID0gbmV3IGV0aGVycy5Db250cmFjdChcbiAgICBjb250cmFjdEFkZHJlc3MsXG4gICAgY29udHJhY3RBQkksXG4gICAgc2lnbmVyXG4gIClcblxuICByZXR1cm4gdHJhbnNhY3Rpb25Db250cmFjdFxufVxuXG5leHBvcnQgY29uc3QgVHJhbnNhY3Rpb25Qcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3QgW2N1cnJlbnRBY2NvdW50LCBzZXRDdXJyZW50QWNjb3VudF0gPSB1c2VTdGF0ZSgpXG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW2Zvcm1EYXRhLCBzZXRGb3JtRGF0YSBdID0gdXNlU3RhdGUoe1xuICAgIGFkZHJlc3NUbzogJycsXG4gICAgYW1vdW50OiAnJyxcbiAgfSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNoZWNrSWZXYWxsZXRJc0Nvbm5lY3RlZCgpXG4gIH0sIFtdKVxuXG5cbi8qXG4gKiBQcm9tcHRzIHVzZXIgdG8gY29ubmVjdCB0aGVpciBNZXRhTWFzayB3YWxsZXRcbiAqL1xuICBjb25zdCBjb25uZWN0V2FsbGV0ID0gYXN5bmMgKG1ldGFtYXNrID0gZXRoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghbWV0YW1hc2spIHJldHVybiBhbGVydCgnUGxlYXNlIGluc3RhbGwgbWV0YW1hc2sgJylcblxuICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCBtZXRhbWFzay5yZXF1ZXN0KHsgbWV0aG9kOiAnZXRoX3JlcXVlc3RBY2NvdW50cycgfSlcblxuICAgICAgc2V0Q3VycmVudEFjY291bnQoYWNjb3VudHNbMF0pXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIGV0aGVyZXVtIG9iamVjdC4nKVxuICAgIH1cbiAgfVxuXG4gIC8vc2VuZGluZyBUcmFuc2FjdGlvblxuICBjb25zdCBzZW5kVHJhbnNhY3Rpb24gPSBhc3luYyAoXG4gICAgbWV0YW1hc2sgPSBldGgsXG4gICAgY29ubmVjdGVkQWNjb3VudCA9IGN1cnJlbnRBY2NvdW50XG4gICkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBpZiAoIW1ldGFtYXNrKSByZXR1cm4gYWxlcnQoJ1BsZWFzZSBpbnN0YWxsIG1ldGFtYXNrJylcbiAgICAgIGNvbnN0IHsgYWRkcmVzc1RvLCBhbW91bnQgfSA9IGZvcm1EYXRhXG4gICAgICBjb25zdCB0cmFuc2FjdGlvbkNvbnRyYWN0ID0gZ2V0RXRoZXJldW1Db250cmFjdCgpXG5cbiAgICAgIGNvbnN0IHBhcnNlZEFtb3VudCA9IGV0aGVycy51dGlscy5wYXJzZUV0aGVyKGFtb3VudClcblxuICAgICAgYXdhaXQgbWV0YW1hc2sucmVxdWVzdCh7XG4gICAgICAgIG1ldGhvZDogJ2V0aF9zZW5kVHJhbnNhY3Rpb24nLFxuICAgICAgICBwYXJhbXM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBmcm9tOiBjb25uZWN0ZWRBY2NvdW50LFxuICAgICAgICAgICAgdG86IGFkZHJlc3NUbyxcbiAgICAgICAgICAgIGdhczogJzB4N0VGNDAnLCAvLyA1MjAsMDAwIEd3ZWlcbiAgICAgICAgICAgIHZhbHVlOiBwYXJzZWRBbW91bnQuX2hleCxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSlcblxuICAgICAgY29uc3QgdHJhbnNhY3Rpb25IYXNoID0gYXdhaXQgdHJhbnNhY3Rpb25Db250cmFjdC5wdWJsaXNoVHJhbnNhY3Rpb24oXG4gICAgICAgIGFkZHJlc3NUbyxcbiAgICAgICAgcGFyc2VkQW1vdW50LFxuICAgICAgICBgVHJhbnNmZXJyaW5nIEVUSCAke3BhcnNlZEFtb3VudH0gdG8gJHthZGRyZXNzVG99YCwgXG4gICAgICAgICdUUkFOU0ZFUidcbiAgICAgIClcbiAgICAgIFxuICAgICAgc2V0SXNMb2FkaW5nKHRydWUpXG5cbiAgICAgIGF3YWl0IHRyYW5zYWN0aW9uSGFzaC53YWl0KClcblxuXG4gICAgICAvLyBkYXRhYmFzZSBjYWxsXG4gICAgICAvLyBhd2FpdCBzYXZlVHJhbnNhY3Rpb24oXG4gICAgICAvLyAgIHRyYW5zYWN0aW9uSGFzaC5oYXNoLFxuICAgICAgLy8gICBhbW91bnQsXG4gICAgICAvLyAgIGNvbm5lY3RlZEFjY291bnQsXG4gICAgICAvLyAgIGFkZHJlc3NUb1xuICAgICAgLy8gKVxuXG4gICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpXG5cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgfVxuICB9XG5cbiAgY29uc3QgY2hlY2tJZldhbGxldElzQ29ubmVjdGVkID0gYXN5bmMgKG1ldGFtYXNrID0gZXRoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghbWV0YW1hc2spIHJldHVybiBhbGVydCgnUGxlYXNlIGluc3RhbGwgbWV0YW1hc2snKVxuXG4gICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IG1ldGFtYXNrLnJlcXVlc3Qoe21ldGhvZDogJ2V0aF9hY2NvdW50cyd9KVxuXG4gICAgICBpZiAoYWNjb3VudHMubGVuZ3RoKSB7XG4gICAgICAgIHNldEN1cnJlbnRBY2NvdW50KGFjY291bnRzWzBdKVxuICAgICAgICBjb25zb2xlLmxvZygnd2FsbGV0IGlzIGFscmVhZHkgY29ubmVjdGVkIScpXG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIGV0aGVyZXVtIG9iamVjdCcpXG4gICAgfVxuICB9XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUsIG5hbWUpID0+IHtcbiAgICBzZXRGb3JtRGF0YSgocHJldlN0YXRlKSA9PiAoeyAuLi5wcmV2U3RhdGUsIFtuYW1lXTogZS50YXJnZXQudmFsdWV9KSlcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPFRyYW5zYWN0aW9uQ29udGV4dC5Qcm92aWRlclxuICAgICAgdmFsdWU9e3tcbiAgICAgICAgY29ubmVjdFdhbGxldCxcbiAgICAgICAgY3VycmVudEFjY291bnQsXG4gICAgICAgIHNlbmRUcmFuc2FjdGlvbixcbiAgICAgICAgaGFuZGxlQ2hhbmdlLFxuICAgICAgICBmb3JtRGF0YSxcbiAgICAgIH19XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvVHJhbnNhY3Rpb25Db250ZXh0LlByb3ZpZGVyPlxuICApXG59XG4gIFxuICBcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiZXRoZXJzIiwidXNlUm91dGVyIiwiVHJhbnNhY3Rpb25Db250ZXh0IiwiY3JlYXRlQ29udGV4dCIsImV0aCIsIndpbmRvdyIsImV0aGVyZXVtIiwiZ2V0RXRoZXJldW1Db250cmFjdCIsInByb3ZpZGVyIiwicHJvdmlkZXJzIiwiV2ViM1Byb3ZpZGVyIiwic2lnbmVyIiwiZ2V0U2lnbmVyIiwidHJhbnNhY3Rpb25Db250cmFjdCIsIkNvbnRyYWN0IiwiY29udHJhY3RBZGRyZXNzIiwiY29udHJhY3RBQkkiLCJUcmFuc2FjdGlvblByb3ZpZGVyIiwiY2hpbGRyZW4iLCJjdXJyZW50QWNjb3VudCIsInNldEN1cnJlbnRBY2NvdW50IiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwiYWRkcmVzc1RvIiwiYW1vdW50IiwiZm9ybURhdGEiLCJzZXRGb3JtRGF0YSIsImNoZWNrSWZXYWxsZXRJc0Nvbm5lY3RlZCIsImNvbm5lY3RXYWxsZXQiLCJtZXRhbWFzayIsImFjY291bnRzIiwiYWxlcnQiLCJyZXF1ZXN0IiwibWV0aG9kIiwiY29uc29sZSIsImVycm9yIiwiRXJyb3IiLCJzZW5kVHJhbnNhY3Rpb24iLCJjb25uZWN0ZWRBY2NvdW50IiwicGFyc2VkQW1vdW50IiwidHJhbnNhY3Rpb25IYXNoIiwidXRpbHMiLCJwYXJzZUV0aGVyIiwicGFyYW1zIiwiZnJvbSIsInRvIiwiZ2FzIiwidmFsdWUiLCJfaGV4IiwicHVibGlzaFRyYW5zYWN0aW9uIiwid2FpdCIsImxvZyIsImxlbmd0aCIsImhhbmRsZUNoYW5nZSIsImUiLCJuYW1lIiwicHJldlN0YXRlIiwidGFyZ2V0IiwiUHJvdmlkZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./context/TransactionContext.js\n");

/***/ })

});