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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TransactionContext\": function() { return /* binding */ TransactionContext; },\n/* harmony export */   \"TransactionProvider\": function() { return /* binding */ TransactionProvider; }\n/* harmony export */ });\n/* harmony import */ var C_Users_benac_Documents_uniswap_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_benac_Documents_uniswap_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_benac_Documents_uniswap_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _lib_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/constants */ \"./lib/constants.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar TransactionContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2___default().createContext();\nvar eth;\nif (true) {\n    eth = window.ethereum;\n}\nvar getEthereumContract = function() {\n    var provider = new ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.providers.Web3Provider(eth);\n    var signer = provider.getSigner();\n    var transactionContract = new ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.Contract(_lib_constants__WEBPACK_IMPORTED_MODULE_3__.contractAddress, _lib_constants__WEBPACK_IMPORTED_MODULE_3__.contractABI, signer);\n    return transactionContract;\n};\nvar TransactionProvider = function(param) {\n    var children = param.children;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), currentAccount = ref[0], setCurrentAccount = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), isLoading = ref1[0], setIsLoading = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        addressTo: '',\n        amount: ''\n    }), formData = ref2[0], setFormData = ref2[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        checkIfWalletIsConnected();\n    }, []);\n    /*\n * Prompts user to connect their MetaMask wallet\n */ var connectWallet = function() {\n        var _ref = _asyncToGenerator(C_Users_benac_Documents_uniswap_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var metamask, accounts, _args = arguments;\n            return C_Users_benac_Documents_uniswap_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        metamask = _args.length > 0 && _args[0] !== void 0 ? _args[0] : eth;\n                        _ctx.prev = 1;\n                        if (metamask) {\n                            _ctx.next = 4;\n                            break;\n                        }\n                        return _ctx.abrupt(\"return\", alert('Please install metamask '));\n                    case 4:\n                        _ctx.next = 6;\n                        return metamask.request({\n                            method: 'eth_requestAccounts'\n                        });\n                    case 6:\n                        accounts = _ctx.sent;\n                        setCurrentAccount(accounts[0]);\n                        _ctx.next = 14;\n                        break;\n                    case 10:\n                        _ctx.prev = 10;\n                        _ctx.t0 = _ctx[\"catch\"](1);\n                        console.error(_ctx.t0);\n                        throw new Error('No ethereum object.');\n                    case 14:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    1,\n                    10\n                ]\n            ]);\n        }));\n        return function connectWallet() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    //sending Transaction\n    var sendTransaction = function() {\n        var _ref = _asyncToGenerator(C_Users_benac_Documents_uniswap_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var metamask, connectedAccount, addressTo, amount, transactionContract, parsedAmount, transactionHash, _args = arguments;\n            return C_Users_benac_Documents_uniswap_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        metamask = _args.length > 0 && _args[0] !== void 0 ? _args[0] : eth, connectedAccount = _args.length > 1 && _args[1] !== void 0 ? _args[1] : currentAccount;\n                        _ctx.prev = 1;\n                        if (metamask) {\n                            _ctx.next = 4;\n                            break;\n                        }\n                        return _ctx.abrupt(\"return\", alert('Please install metamask'));\n                    case 4:\n                        addressTo = formData.addressTo, amount = formData.amount;\n                        transactionContract = getEthereumContract();\n                        parsedAmount = ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.utils.parseEther(amount);\n                        _ctx.next = 9;\n                        return metamask.request({\n                            method: 'eth_sendTransaction',\n                            params: [\n                                {\n                                    from: connectedAccount,\n                                    to: addressTo,\n                                    gas: '0x7EF40',\n                                    value: parsedAmount._hex\n                                }, \n                            ]\n                        });\n                    case 9:\n                        _ctx.next = 11;\n                        return transactionContract.publishTransaction(addressTo, parsedAmount, \"Transferring ETH \".concat(parsedAmount, \" to \").concat(addressTo), 'TRANSFER');\n                    case 11:\n                        transactionHash = _ctx.sent;\n                        setIsLoading(true);\n                        _ctx.next = 15;\n                        return transactionHash.wait();\n                    case 15:\n                        // database call\n                        // await saveTransaction(\n                        //   transactionHash.hash,\n                        //   amount,\n                        //   connectedAccount,\n                        //   addressTo\n                        // )\n                        setIsLoading(false);\n                        _ctx.next = 21;\n                        break;\n                    case 18:\n                        _ctx.prev = 18;\n                        _ctx.t0 = _ctx[\"catch\"](1);\n                        console.log(_ctx.t0);\n                    case 21:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    1,\n                    18\n                ]\n            ]);\n        }));\n        return function sendTransaction() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var checkIfWalletIsConnected = function() {\n        var _ref = _asyncToGenerator(C_Users_benac_Documents_uniswap_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var metamask, accounts, _args = arguments;\n            return C_Users_benac_Documents_uniswap_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        metamask = _args.length > 0 && _args[0] !== void 0 ? _args[0] : eth;\n                        _ctx.prev = 1;\n                        if (metamask) {\n                            _ctx.next = 4;\n                            break;\n                        }\n                        return _ctx.abrupt(\"return\", alert('Please install metamask'));\n                    case 4:\n                        _ctx.next = 6;\n                        return metamask.request({\n                            method: 'eth_accounts'\n                        });\n                    case 6:\n                        accounts = _ctx.sent;\n                        if (accounts.length) {\n                            setCurrentAccount(accounts[0]);\n                            console.log('wallet is already connected!');\n                        }\n                        _ctx.next = 14;\n                        break;\n                    case 10:\n                        _ctx.prev = 10;\n                        _ctx.t0 = _ctx[\"catch\"](1);\n                        console.error(_ctx.t0);\n                        throw new Error('No ethereum object');\n                    case 14:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    1,\n                    10\n                ]\n            ]);\n        }));\n        return function checkIfWalletIsConnected() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var handleChange = function(e, name) {\n        setFormData(function(prevState) {\n            return _objectSpread({}, prevState, _defineProperty({}, name, e.target.value));\n        });\n    };\n    var saveTransaction = function() {\n        var _ref = _asyncToGenerator(C_Users_benac_Documents_uniswap_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(txHash, amount) {\n            var fromAddress, toAddress, txDoc, _args = arguments;\n            return C_Users_benac_Documents_uniswap_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        fromAddress = _args.length > 2 && _args[2] !== void 0 ? _args[2] : currentAccount, toAddress = _args.length > 3 ? _args[3] : void 0;\n                        txDoc = {\n                            _type: 'transaction',\n                            _id: txHash,\n                            fromAddress: toAddress,\n                            timestamp: new Date(Date.now()).toISOString(),\n                            txHash: txHash,\n                            amount: parseFloat(amount)\n                        };\n                    case 2:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function saveTransaction(txHash, amount) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(TransactionContext.Provider, {\n        value: {\n            connectWallet: connectWallet,\n            currentAccount: currentAccount,\n            sendTransaction: sendTransaction,\n            handleChange: handleChange,\n            formData: formData\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\context\\\\TransactionContext.js\",\n        lineNumber: 142,\n        columnNumber: 5\n    }, _this));\n};\n_s(TransactionProvider, \"129s9bEgKFVZYhPStSu78hi2r8M=\");\n_c = TransactionProvider;\nvar _c;\n$RefreshReg$(_c, \"TransactionProvider\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L1RyYW5zYWN0aW9uQ29udGV4dC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQWtEO0FBQ25CO0FBQytCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdkQsR0FBSyxDQUFDTSxrQkFBa0IsaUJBQUdOLDBEQUFtQjtBQUVyRCxHQUFHLENBQUNRLEdBQUc7QUFFUCxFQUFFLEVBQUUsSUFBNkIsRUFBRSxDQUFDO0lBQ2xDQSxHQUFHLEdBQUdDLE1BQU0sQ0FBQ0MsUUFBUTtBQUN2QixDQUFDO0FBRUQsR0FBSyxDQUFDQyxtQkFBbUIsR0FBRyxRQUM1QixHQURrQyxDQUFDO0lBQ2pDLEdBQUssQ0FBQ0MsUUFBUSxHQUFHLEdBQUcsQ0FBQ1QsaUVBQTZCLENBQUNLLEdBQUc7SUFDdEQsR0FBSyxDQUFDTyxNQUFNLEdBQUdILFFBQVEsQ0FBQ0ksU0FBUztJQUNqQyxHQUFLLENBQUNDLG1CQUFtQixHQUFHLEdBQUcsQ0FBQ2QsbURBQWUsQ0FDN0NFLDJEQUFlLEVBQ2ZELHVEQUFXLEVBQ1hXLE1BQU07SUFHUixNQUFNLENBQUNFLG1CQUFtQjtBQUM1QixDQUFDO0FBRU0sR0FBSyxDQUFDRSxtQkFBbUIsR0FBRyxRQUFRLFFBQVUsQ0FBQztRQUFoQkMsUUFBUSxTQUFSQSxRQUFROztJQUM1QyxHQUFLLENBQXVDbEIsR0FBVSxHQUFWQSwrQ0FBUSxJQUE3Q21CLGNBQWMsR0FBdUJuQixHQUFVLEtBQS9Cb0IsaUJBQWlCLEdBQUlwQixHQUFVO0lBQ3RELEdBQUssQ0FBNkJBLElBQWUsR0FBZkEsK0NBQVEsQ0FBQyxLQUFLLEdBQXpDcUIsU0FBUyxHQUFrQnJCLElBQWUsS0FBL0JzQixZQUFZLEdBQUl0QixJQUFlO0lBQ2pELEdBQUssQ0FBNEJBLElBRy9CLEdBSCtCQSwrQ0FBUSxDQUFDLENBQUM7UUFDekN1QixTQUFTLEVBQUUsQ0FBRTtRQUNiQyxNQUFNLEVBQUUsQ0FB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WUFDZmdCLFlBQVksRUFBWkEsWUFBWTtZQUNaNUIsUUFBUSxFQUFSQSxRQUFRO1FBQ1YsQ0FBQztrQkFFQVAsUUFBUTs7Ozs7O0FBR2YsQ0FBQztHQWpJWUQsbUJBQW1CO0tBQW5CQSxtQkFBbUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGV4dC9UcmFuc2FjdGlvbkNvbnRleHQuanM/Njk5OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgZXRoZXJzIH0gZnJvbSAnZXRoZXJzJ1xuaW1wb3J0IHsgY29udHJhY3RBQkksIGNvbnRyYWN0QWRkcmVzc30gZnJvbSAnLi4vbGliL2NvbnN0YW50cydcblxuZXhwb3J0IGNvbnN0IFRyYW5zYWN0aW9uQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoKVxuXG5sZXQgZXRoXG5cbmlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICBldGggPSB3aW5kb3cuZXRoZXJldW1cbn1cblxuY29uc3QgZ2V0RXRoZXJldW1Db250cmFjdCA9ICgpID0+IHtcbiAgY29uc3QgcHJvdmlkZXIgPSBuZXcgZXRoZXJzLnByb3ZpZGVycy5XZWIzUHJvdmlkZXIoZXRoKVxuICBjb25zdCBzaWduZXIgPSBwcm92aWRlci5nZXRTaWduZXIoKVxuICBjb25zdCB0cmFuc2FjdGlvbkNvbnRyYWN0ID0gbmV3IGV0aGVycy5Db250cmFjdChcbiAgICBjb250cmFjdEFkZHJlc3MsXG4gICAgY29udHJhY3RBQkksXG4gICAgc2lnbmVyXG4gIClcblxuICByZXR1cm4gdHJhbnNhY3Rpb25Db250cmFjdFxufVxuXG5leHBvcnQgY29uc3QgVHJhbnNhY3Rpb25Qcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3QgW2N1cnJlbnRBY2NvdW50LCBzZXRDdXJyZW50QWNjb3VudF0gPSB1c2VTdGF0ZSgpXG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW2Zvcm1EYXRhLCBzZXRGb3JtRGF0YSBdID0gdXNlU3RhdGUoe1xuICAgIGFkZHJlc3NUbzogJycsXG4gICAgYW1vdW50OiAnJyxcbiAgfSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNoZWNrSWZXYWxsZXRJc0Nvbm5lY3RlZCgpXG4gIH0sIFtdKVxuXG5cbi8qXG4gKiBQcm9tcHRzIHVzZXIgdG8gY29ubmVjdCB0aGVpciBNZXRhTWFzayB3YWxsZXRcbiAqL1xuICBjb25zdCBjb25uZWN0V2FsbGV0ID0gYXN5bmMgKG1ldGFtYXNrID0gZXRoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghbWV0YW1hc2spIHJldHVybiBhbGVydCgnUGxlYXNlIGluc3RhbGwgbWV0YW1hc2sgJylcblxuICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCBtZXRhbWFzay5yZXF1ZXN0KHsgbWV0aG9kOiAnZXRoX3JlcXVlc3RBY2NvdW50cycgfSlcblxuICAgICAgc2V0Q3VycmVudEFjY291bnQoYWNjb3VudHNbMF0pXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIGV0aGVyZXVtIG9iamVjdC4nKVxuICAgIH1cbiAgfVxuXG4gIC8vc2VuZGluZyBUcmFuc2FjdGlvblxuICBjb25zdCBzZW5kVHJhbnNhY3Rpb24gPSBhc3luYyAoXG4gICAgbWV0YW1hc2sgPSBldGgsXG4gICAgY29ubmVjdGVkQWNjb3VudCA9IGN1cnJlbnRBY2NvdW50XG4gICkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBpZiAoIW1ldGFtYXNrKSByZXR1cm4gYWxlcnQoJ1BsZWFzZSBpbnN0YWxsIG1ldGFtYXNrJylcbiAgICAgIGNvbnN0IHsgYWRkcmVzc1RvLCBhbW91bnQgfSA9IGZvcm1EYXRhXG4gICAgICBjb25zdCB0cmFuc2FjdGlvbkNvbnRyYWN0ID0gZ2V0RXRoZXJldW1Db250cmFjdCgpXG5cbiAgICAgIGNvbnN0IHBhcnNlZEFtb3VudCA9IGV0aGVycy51dGlscy5wYXJzZUV0aGVyKGFtb3VudClcblxuICAgICAgYXdhaXQgbWV0YW1hc2sucmVxdWVzdCh7XG4gICAgICAgIG1ldGhvZDogJ2V0aF9zZW5kVHJhbnNhY3Rpb24nLFxuICAgICAgICBwYXJhbXM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBmcm9tOiBjb25uZWN0ZWRBY2NvdW50LFxuICAgICAgICAgICAgdG86IGFkZHJlc3NUbyxcbiAgICAgICAgICAgIGdhczogJzB4N0VGNDAnLCAvLyA1MjAsMDAwIEd3ZWlcbiAgICAgICAgICAgIHZhbHVlOiBwYXJzZWRBbW91bnQuX2hleCxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSlcblxuICAgICAgY29uc3QgdHJhbnNhY3Rpb25IYXNoID0gYXdhaXQgdHJhbnNhY3Rpb25Db250cmFjdC5wdWJsaXNoVHJhbnNhY3Rpb24oXG4gICAgICAgIGFkZHJlc3NUbyxcbiAgICAgICAgcGFyc2VkQW1vdW50LFxuICAgICAgICBgVHJhbnNmZXJyaW5nIEVUSCAke3BhcnNlZEFtb3VudH0gdG8gJHthZGRyZXNzVG99YCwgXG4gICAgICAgICdUUkFOU0ZFUidcbiAgICAgIClcbiAgICAgIFxuICAgICAgc2V0SXNMb2FkaW5nKHRydWUpXG5cbiAgICAgIGF3YWl0IHRyYW5zYWN0aW9uSGFzaC53YWl0KClcblxuXG4gICAgICAvLyBkYXRhYmFzZSBjYWxsXG4gICAgICAvLyBhd2FpdCBzYXZlVHJhbnNhY3Rpb24oXG4gICAgICAvLyAgIHRyYW5zYWN0aW9uSGFzaC5oYXNoLFxuICAgICAgLy8gICBhbW91bnQsXG4gICAgICAvLyAgIGNvbm5lY3RlZEFjY291bnQsXG4gICAgICAvLyAgIGFkZHJlc3NUb1xuICAgICAgLy8gKVxuXG4gICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpXG5cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgfVxuICB9XG5cbiAgY29uc3QgY2hlY2tJZldhbGxldElzQ29ubmVjdGVkID0gYXN5bmMgKG1ldGFtYXNrID0gZXRoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghbWV0YW1hc2spIHJldHVybiBhbGVydCgnUGxlYXNlIGluc3RhbGwgbWV0YW1hc2snKVxuXG4gICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IG1ldGFtYXNrLnJlcXVlc3Qoe21ldGhvZDogJ2V0aF9hY2NvdW50cyd9KVxuXG4gICAgICBpZiAoYWNjb3VudHMubGVuZ3RoKSB7XG4gICAgICAgIHNldEN1cnJlbnRBY2NvdW50KGFjY291bnRzWzBdKVxuICAgICAgICBjb25zb2xlLmxvZygnd2FsbGV0IGlzIGFscmVhZHkgY29ubmVjdGVkIScpXG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIGV0aGVyZXVtIG9iamVjdCcpXG4gICAgfVxuICB9XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUsIG5hbWUpID0+IHtcbiAgICBzZXRGb3JtRGF0YSgocHJldlN0YXRlKSA9PiAoeyAuLi5wcmV2U3RhdGUsIFtuYW1lXTogZS50YXJnZXQudmFsdWV9KSlcbiAgfVxuXG4gIGNvbnN0IHNhdmVUcmFuc2FjdGlvbiA9IGFzeW5jIChcbiAgICB0eEhhc2gsXG4gICAgYW1vdW50LFxuICAgIGZyb21BZGRyZXNzID0gY3VycmVudEFjY291bnQsXG4gICAgdG9BZGRyZXNzIFxuICApID0+IHtcbiAgICBjb25zdCAgdHhEb2MgPSB7XG4gICAgICBfdHlwZTogJ3RyYW5zYWN0aW9uJyxcbiAgICAgIF9pZDogdHhIYXNoLFxuICAgICAgZnJvbUFkZHJlc3M6IHRvQWRkcmVzcyxcbiAgICAgIHRpbWVzdGFtcDogbmV3IERhdGUoRGF0ZS5ub3coKSkudG9JU09TdHJpbmcoKSxcbiAgICAgIHR4SGFzaDogdHhIYXNoLFxuICAgICAgYW1vdW50OiBwYXJzZUZsb2F0KGFtb3VudClcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxUcmFuc2FjdGlvbkNvbnRleHQuUHJvdmlkZXJcbiAgICAgIHZhbHVlPXt7XG4gICAgICAgIGNvbm5lY3RXYWxsZXQsXG4gICAgICAgIGN1cnJlbnRBY2NvdW50LFxuICAgICAgICBzZW5kVHJhbnNhY3Rpb24sXG4gICAgICAgIGhhbmRsZUNoYW5nZSxcbiAgICAgICAgZm9ybURhdGEsXG4gICAgICB9fVxuICAgID5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L1RyYW5zYWN0aW9uQ29udGV4dC5Qcm92aWRlcj5cbiAgKVxufVxuICBcbiAgXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImV0aGVycyIsImNvbnRyYWN0QUJJIiwiY29udHJhY3RBZGRyZXNzIiwiVHJhbnNhY3Rpb25Db250ZXh0IiwiY3JlYXRlQ29udGV4dCIsImV0aCIsIndpbmRvdyIsImV0aGVyZXVtIiwiZ2V0RXRoZXJldW1Db250cmFjdCIsInByb3ZpZGVyIiwicHJvdmlkZXJzIiwiV2ViM1Byb3ZpZGVyIiwic2lnbmVyIiwiZ2V0U2lnbmVyIiwidHJhbnNhY3Rpb25Db250cmFjdCIsIkNvbnRyYWN0IiwiVHJhbnNhY3Rpb25Qcm92aWRlciIsImNoaWxkcmVuIiwiY3VycmVudEFjY291bnQiLCJzZXRDdXJyZW50QWNjb3VudCIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsImFkZHJlc3NUbyIsImFtb3VudCIsImZvcm1EYXRhIiwic2V0Rm9ybURhdGEiLCJjaGVja0lmV2FsbGV0SXNDb25uZWN0ZWQiLCJjb25uZWN0V2FsbGV0IiwibWV0YW1hc2siLCJhY2NvdW50cyIsImFsZXJ0IiwicmVxdWVzdCIsIm1ldGhvZCIsImNvbnNvbGUiLCJlcnJvciIsIkVycm9yIiwic2VuZFRyYW5zYWN0aW9uIiwiY29ubmVjdGVkQWNjb3VudCIsInBhcnNlZEFtb3VudCIsInRyYW5zYWN0aW9uSGFzaCIsInV0aWxzIiwicGFyc2VFdGhlciIsInBhcmFtcyIsImZyb20iLCJ0byIsImdhcyIsInZhbHVlIiwiX2hleCIsInB1Ymxpc2hUcmFuc2FjdGlvbiIsIndhaXQiLCJsb2ciLCJsZW5ndGgiLCJoYW5kbGVDaGFuZ2UiLCJlIiwibmFtZSIsInByZXZTdGF0ZSIsInRhcmdldCIsInNhdmVUcmFuc2FjdGlvbiIsInR4SGFzaCIsImZyb21BZGRyZXNzIiwidG9BZGRyZXNzIiwidHhEb2MiLCJfdHlwZSIsIl9pZCIsInRpbWVzdGFtcCIsIkRhdGUiLCJub3ciLCJ0b0lTT1N0cmluZyIsInBhcnNlRmxvYXQiLCJQcm92aWRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./context/TransactionContext.js\n");

/***/ })

});