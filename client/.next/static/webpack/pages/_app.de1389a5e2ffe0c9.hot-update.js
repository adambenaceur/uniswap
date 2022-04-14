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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TransactionContext\": function() { return /* binding */ TransactionContext; },\n/* harmony export */   \"TransactionProvider\": function() { return /* binding */ TransactionProvider; }\n/* harmony export */ });\n/* harmony import */ var C_Users_benac_Documents_uniswap_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_benac_Documents_uniswap_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_benac_Documents_uniswap_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _lib_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/constants */ \"./lib/constants.js\");\n/* harmony import */ var _lib_sanityClient__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/sanityClient */ \"./lib/sanityClient.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar TransactionContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2___default().createContext();\nvar eth;\nif (true) {\n    eth = window.ethereum;\n}\nvar getEthereumContract = function() {\n    var provider = new ethers__WEBPACK_IMPORTED_MODULE_5__.ethers.providers.Web3Provider(eth);\n    var signer = provider.getSigner();\n    var transactionContract = new ethers__WEBPACK_IMPORTED_MODULE_5__.ethers.Contract(_lib_constants__WEBPACK_IMPORTED_MODULE_3__.contractAddress, _lib_constants__WEBPACK_IMPORTED_MODULE_3__.contractABI, signer);\n    return transactionContract;\n};\nvar TransactionProvider = function(param) {\n    var children = param.children;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), currentAccount = ref[0], setCurrentAccount = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), isLoading = ref1[0], setIsLoading = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        addressTo: '',\n        amount: ''\n    }), formData = ref2[0], setFormData = ref2[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        checkIfWalletIsConnected();\n    }, []);\n    /* \n * Create userprofile in Sanity\n */ (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (!currentAccount) return;\n        _asyncToGenerator(C_Users_benac_Documents_uniswap_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var userDoc;\n            return C_Users_benac_Documents_uniswap_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        userDoc = {\n                            _type: 'users',\n                            _id: currentAccount,\n                            userName: 'Unnamed',\n                            address: currentAccount\n                        };\n                        _ctx.next = 3;\n                        return _lib_sanityClient__WEBPACK_IMPORTED_MODULE_4__.client.createIfNotExists(userDoc);\n                    case 3:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }))();\n    }, [\n        currentAccount\n    ]);\n    /*\n * Prompts user to connect their MetaMask wallet\n */ var connectWallet = function() {\n        var _ref = _asyncToGenerator(C_Users_benac_Documents_uniswap_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var metamask, accounts, _args = arguments;\n            return C_Users_benac_Documents_uniswap_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        metamask = _args.length > 0 && _args[0] !== void 0 ? _args[0] : eth;\n                        _ctx.prev = 1;\n                        if (metamask) {\n                            _ctx.next = 4;\n                            break;\n                        }\n                        return _ctx.abrupt(\"return\", alert('Please install metamask '));\n                    case 4:\n                        _ctx.next = 6;\n                        return metamask.request({\n                            method: 'eth_requestAccounts'\n                        });\n                    case 6:\n                        accounts = _ctx.sent;\n                        setCurrentAccount(accounts[0]);\n                        _ctx.next = 14;\n                        break;\n                    case 10:\n                        _ctx.prev = 10;\n                        _ctx.t0 = _ctx[\"catch\"](1);\n                        console.error(_ctx.t0);\n                        throw new Error('No ethereum object.');\n                    case 14:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    1,\n                    10\n                ]\n            ]);\n        }));\n        return function connectWallet() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    //sending Transaction\n    var sendTransaction = function() {\n        var _ref = _asyncToGenerator(C_Users_benac_Documents_uniswap_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var metamask, connectedAccount, addressTo, amount, transactionContract, parsedAmount, transactionHash, _args = arguments;\n            return C_Users_benac_Documents_uniswap_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        metamask = _args.length > 0 && _args[0] !== void 0 ? _args[0] : eth, connectedAccount = _args.length > 1 && _args[1] !== void 0 ? _args[1] : currentAccount;\n                        _ctx.prev = 1;\n                        if (metamask) {\n                            _ctx.next = 4;\n                            break;\n                        }\n                        return _ctx.abrupt(\"return\", alert('Please install metamask'));\n                    case 4:\n                        addressTo = formData.addressTo, amount = formData.amount;\n                        transactionContract = getEthereumContract();\n                        parsedAmount = ethers__WEBPACK_IMPORTED_MODULE_5__.ethers.utils.parseEther(amount);\n                        _ctx.next = 9;\n                        return metamask.request({\n                            method: 'eth_sendTransaction',\n                            params: [\n                                {\n                                    from: connectedAccount,\n                                    to: addressTo,\n                                    gas: '0x7EF40',\n                                    value: parsedAmount._hex\n                                }, \n                            ]\n                        });\n                    case 9:\n                        _ctx.next = 11;\n                        return transactionContract.publishTransaction(addressTo, parsedAmount, \"Transferring ETH \".concat(parsedAmount, \" to \").concat(addressTo), 'TRANSFER');\n                    case 11:\n                        transactionHash = _ctx.sent;\n                        setIsLoading(true);\n                        _ctx.next = 15;\n                        return transactionHash.wait();\n                    case 15:\n                        _ctx.next = 17;\n                        return saveTransaction(transactionHash.hash, amount, connectedAccount, addressTo);\n                    case 17:\n                        setIsLoading(false);\n                        _ctx.next = 23;\n                        break;\n                    case 20:\n                        _ctx.prev = 20;\n                        _ctx.t0 = _ctx[\"catch\"](1);\n                        console.log(_ctx.t0);\n                    case 23:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    1,\n                    20\n                ]\n            ]);\n        }));\n        return function sendTransaction() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var checkIfWalletIsConnected = function() {\n        var _ref = _asyncToGenerator(C_Users_benac_Documents_uniswap_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var metamask, accounts, _args = arguments;\n            return C_Users_benac_Documents_uniswap_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        metamask = _args.length > 0 && _args[0] !== void 0 ? _args[0] : eth;\n                        _ctx.prev = 1;\n                        if (metamask) {\n                            _ctx.next = 4;\n                            break;\n                        }\n                        return _ctx.abrupt(\"return\", alert('Please install metamask'));\n                    case 4:\n                        _ctx.next = 6;\n                        return metamask.request({\n                            method: 'eth_accounts'\n                        });\n                    case 6:\n                        accounts = _ctx.sent;\n                        if (accounts.length) {\n                            setCurrentAccount(accounts[0]);\n                            console.log('wallet is already connected!');\n                        }\n                        _ctx.next = 14;\n                        break;\n                    case 10:\n                        _ctx.prev = 10;\n                        _ctx.t0 = _ctx[\"catch\"](1);\n                        console.error(_ctx.t0);\n                        throw new Error('No ethereum object');\n                    case 14:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    1,\n                    10\n                ]\n            ]);\n        }));\n        return function checkIfWalletIsConnected() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var handleChange = function(e, name) {\n        setFormData(function(prevState) {\n            return _objectSpread({}, prevState, _defineProperty({}, name, e.target.value));\n        });\n    };\n    var saveTransaction = function() {\n        var _ref = _asyncToGenerator(C_Users_benac_Documents_uniswap_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(txHash, amount) {\n            var fromAddress, toAddress, txDoc, _args = arguments;\n            return C_Users_benac_Documents_uniswap_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        fromAddress = _args.length > 2 && _args[2] !== void 0 ? _args[2] : currentAccount, toAddress = _args.length > 3 ? _args[3] : void 0;\n                        txDoc = {\n                            _type: 'transactions',\n                            _id: txHash,\n                            fromAddress: fromAddress,\n                            toAddress: toAddress,\n                            timestamp: new Date(Date.now()).toISOString(),\n                            txHash: txHash,\n                            amount: parseFloat(amount)\n                        };\n                        _ctx.next = 4;\n                        return _lib_sanityClient__WEBPACK_IMPORTED_MODULE_4__.client.createIfNotExists(txDoc);\n                    case 4:\n                        _ctx.next = 6;\n                        return _lib_sanityClient__WEBPACK_IMPORTED_MODULE_4__.client.patch(currentAccount).setIfMissing({\n                            transactions: []\n                        }).insert('after', 'transactions[-1]', [\n                            {\n                                _key: txHash,\n                                _ref: txHash,\n                                _type: 'reference'\n                            }\n                        ]).commit();\n                    case 6:\n                        return _ctx.abrupt(\"return\");\n                    case 7:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function saveTransaction(txHash, amount) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(TransactionContext.Provider, {\n        value: {\n            connectWallet: connectWallet,\n            currentAccount: currentAccount,\n            sendTransaction: sendTransaction,\n            handleChange: handleChange,\n            formData: formData\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\context\\\\TransactionContext.js\",\n        lineNumber: 178,\n        columnNumber: 5\n    }, _this));\n};\n_s(TransactionProvider, \"/6hi/iCI11h8NQsaU68iLxdjGl4=\");\n_c = TransactionProvider;\nvar _c;\n$RefreshReg$(_c, \"TransactionProvider\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFdBQVcsRUFBRUEsV0FBVzs0QkFDeEJDLFNBQVMsRUFBRUEsU0FBUzs0QkFDcEJFLFNBQVMsRUFBRSxHQUFHLENBQUNDLElBQUksQ0FBQ0EsSUFBSSxDQUFDQyxHQUFHLElBQUlDLFdBQVc7NEJBQzNDUCxNQUFNLEVBQUVBLE1BQU07NEJBQ2QxQyxNQUFNLEVBQUVrRCxVQUFVLENBQUNsRCxNQUFNO3dCQUMzQixDQUFDOzsrQkFFS3JCLHVFQUF3QixDQUFDa0UsS0FBSzs7OytCQUU5QmxFLDJEQUNFLENBQUNnQixjQUFjLEVBQ3BCeUQsWUFBWSxDQUFDLENBQUNDOzRCQUFBQSxZQUFZLEVBQUUsQ0FBQyxDQUFDO3dCQUFDLENBQUMsRUFDaENDLE1BQU0sQ0FBQyxDQUFPLFFBQUUsQ0FBa0IsbUJBQUMsQ0FBQzs0QkFDbkMsQ0FBQztnQ0FDQ0MsSUFBSSxFQUFFYixNQUFNO2dDQUNaYyxJQUFJLEVBQUVkLE1BQU07Z0NBQ1pyQyxLQUFLLEVBQUUsQ0FBVzs0QkFDcEIsQ0FBQzt3QkFDSCxDQUFDLEVBQ0FvRCxNQUFNOzs7Ozs7OztRQUdYLENBQUM7d0JBL0JLeEIsZUFBZSxDQUNuQlMsTUFBTSxFQUNOMUMsTUFBTTs7OztJQStCUixNQUFNLDZFQUNIcEIsa0JBQWtCLENBQUM4RSxRQUFRO1FBQzFCN0IsS0FBSyxFQUFFLENBQUM7WUFDTm5CLGFBQWEsRUFBYkEsYUFBYTtZQUNiZixjQUFjLEVBQWRBLGNBQWM7WUFDZHdCLGVBQWUsRUFBZkEsZUFBZTtZQUNma0IsWUFBWSxFQUFaQSxZQUFZO1lBQ1pwQyxRQUFRLEVBQVJBLFFBQVE7UUFDVixDQUFDO2tCQUVBUCxRQUFROzs7Ozs7QUFHZixDQUFDO0dBcEtZRCxtQkFBbUI7S0FBbkJBLG1CQUFtQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb250ZXh0L1RyYW5zYWN0aW9uQ29udGV4dC5qcz82OTk5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBldGhlcnMgfSBmcm9tICdldGhlcnMnXG5pbXBvcnQgeyBjb250cmFjdEFCSSwgY29udHJhY3RBZGRyZXNzfSBmcm9tICcuLi9saWIvY29uc3RhbnRzJ1xuaW1wb3J0IHsgY2xpZW50IH0gZnJvbSAnLi4vbGliL3Nhbml0eUNsaWVudCdcblxuZXhwb3J0IGNvbnN0IFRyYW5zYWN0aW9uQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoKVxuXG5sZXQgZXRoXG5cbmlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICBldGggPSB3aW5kb3cuZXRoZXJldW1cbn1cblxuY29uc3QgZ2V0RXRoZXJldW1Db250cmFjdCA9ICgpID0+IHtcbiAgY29uc3QgcHJvdmlkZXIgPSBuZXcgZXRoZXJzLnByb3ZpZGVycy5XZWIzUHJvdmlkZXIoZXRoKVxuICBjb25zdCBzaWduZXIgPSBwcm92aWRlci5nZXRTaWduZXIoKVxuICBjb25zdCB0cmFuc2FjdGlvbkNvbnRyYWN0ID0gbmV3IGV0aGVycy5Db250cmFjdChcbiAgICBjb250cmFjdEFkZHJlc3MsXG4gICAgY29udHJhY3RBQkksXG4gICAgc2lnbmVyXG4gIClcblxuICByZXR1cm4gdHJhbnNhY3Rpb25Db250cmFjdFxufVxuXG5leHBvcnQgY29uc3QgVHJhbnNhY3Rpb25Qcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3QgW2N1cnJlbnRBY2NvdW50LCBzZXRDdXJyZW50QWNjb3VudF0gPSB1c2VTdGF0ZSgpXG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW2Zvcm1EYXRhLCBzZXRGb3JtRGF0YSBdID0gdXNlU3RhdGUoe1xuICAgIGFkZHJlc3NUbzogJycsXG4gICAgYW1vdW50OiAnJyxcbiAgfSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNoZWNrSWZXYWxsZXRJc0Nvbm5lY3RlZCgpXG4gIH0sIFtdKVxuXG4vKiBcbiAqIENyZWF0ZSB1c2VycHJvZmlsZSBpbiBTYW5pdHlcbiAqLyBcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghY3VycmVudEFjY291bnQpIHJldHVyblxuICAgIDsoYXN5bmMoKSA9PiB7XG4gICAgICBjb25zdCB1c2VyRG9jID0ge1xuICAgICAgICBfdHlwZTogJ3VzZXJzJyxcbiAgICAgICAgX2lkOiBjdXJyZW50QWNjb3VudCxcbiAgICAgICAgdXNlck5hbWU6ICdVbm5hbWVkJyxcbiAgICAgICAgYWRkcmVzczogY3VycmVudEFjY291bnQsXG4gICAgICB9XG5cbiAgICAgIGF3YWl0IGNsaWVudC5jcmVhdGVJZk5vdEV4aXN0cyh1c2VyRG9jKVxuICAgIH0pKClcblxuICB9LCBbY3VycmVudEFjY291bnRdKVxuXG4vKlxuICogUHJvbXB0cyB1c2VyIHRvIGNvbm5lY3QgdGhlaXIgTWV0YU1hc2sgd2FsbGV0XG4gKi9cbiAgY29uc3QgY29ubmVjdFdhbGxldCA9IGFzeW5jIChtZXRhbWFzayA9IGV0aCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBpZiAoIW1ldGFtYXNrKSByZXR1cm4gYWxlcnQoJ1BsZWFzZSBpbnN0YWxsIG1ldGFtYXNrICcpXG5cbiAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgbWV0YW1hc2sucmVxdWVzdCh7IG1ldGhvZDogJ2V0aF9yZXF1ZXN0QWNjb3VudHMnIH0pXG5cbiAgICAgIHNldEN1cnJlbnRBY2NvdW50KGFjY291bnRzWzBdKVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKVxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyBldGhlcmV1bSBvYmplY3QuJylcbiAgICB9XG4gIH1cblxuICAvL3NlbmRpbmcgVHJhbnNhY3Rpb25cbiAgY29uc3Qgc2VuZFRyYW5zYWN0aW9uID0gYXN5bmMgKFxuICAgIG1ldGFtYXNrID0gZXRoLFxuICAgIGNvbm5lY3RlZEFjY291bnQgPSBjdXJyZW50QWNjb3VudFxuICApID0+IHtcbiAgICB0cnkge1xuICAgICAgaWYgKCFtZXRhbWFzaykgcmV0dXJuIGFsZXJ0KCdQbGVhc2UgaW5zdGFsbCBtZXRhbWFzaycpXG4gICAgICBjb25zdCB7IGFkZHJlc3NUbywgYW1vdW50IH0gPSBmb3JtRGF0YVxuICAgICAgY29uc3QgdHJhbnNhY3Rpb25Db250cmFjdCA9IGdldEV0aGVyZXVtQ29udHJhY3QoKVxuXG4gICAgICBjb25zdCBwYXJzZWRBbW91bnQgPSBldGhlcnMudXRpbHMucGFyc2VFdGhlcihhbW91bnQpXG5cbiAgICAgIGF3YWl0IG1ldGFtYXNrLnJlcXVlc3Qoe1xuICAgICAgICBtZXRob2Q6ICdldGhfc2VuZFRyYW5zYWN0aW9uJyxcbiAgICAgICAgcGFyYW1zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgZnJvbTogY29ubmVjdGVkQWNjb3VudCxcbiAgICAgICAgICAgIHRvOiBhZGRyZXNzVG8sXG4gICAgICAgICAgICBnYXM6ICcweDdFRjQwJywgLy8gNTIwLDAwMCBHd2VpXG4gICAgICAgICAgICB2YWx1ZTogcGFyc2VkQW1vdW50Ll9oZXgsXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0pXG5cbiAgICAgIGNvbnN0IHRyYW5zYWN0aW9uSGFzaCA9IGF3YWl0IHRyYW5zYWN0aW9uQ29udHJhY3QucHVibGlzaFRyYW5zYWN0aW9uKFxuICAgICAgICBhZGRyZXNzVG8sXG4gICAgICAgIHBhcnNlZEFtb3VudCxcbiAgICAgICAgYFRyYW5zZmVycmluZyBFVEggJHtwYXJzZWRBbW91bnR9IHRvICR7YWRkcmVzc1RvfWAsIFxuICAgICAgICAnVFJBTlNGRVInXG4gICAgICApXG4gICAgICBcbiAgICAgIHNldElzTG9hZGluZyh0cnVlKVxuXG4gICAgICBhd2FpdCB0cmFuc2FjdGlvbkhhc2gud2FpdCgpXG5cblxuICAgICAgLy8gZGF0YWJhc2UgY2FsbFxuICAgICAgYXdhaXQgc2F2ZVRyYW5zYWN0aW9uKFxuICAgICAgICB0cmFuc2FjdGlvbkhhc2guaGFzaCxcbiAgICAgICAgYW1vdW50LFxuICAgICAgICBjb25uZWN0ZWRBY2NvdW50LFxuICAgICAgICBhZGRyZXNzVG9cbiAgICAgIClcblxuICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKVxuXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGNoZWNrSWZXYWxsZXRJc0Nvbm5lY3RlZCA9IGFzeW5jIChtZXRhbWFzayA9IGV0aCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBpZiAoIW1ldGFtYXNrKSByZXR1cm4gYWxlcnQoJ1BsZWFzZSBpbnN0YWxsIG1ldGFtYXNrJylcblxuICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCBtZXRhbWFzay5yZXF1ZXN0KHttZXRob2Q6ICdldGhfYWNjb3VudHMnfSlcblxuICAgICAgaWYgKGFjY291bnRzLmxlbmd0aCkge1xuICAgICAgICBzZXRDdXJyZW50QWNjb3VudChhY2NvdW50c1swXSlcbiAgICAgICAgY29uc29sZS5sb2coJ3dhbGxldCBpcyBhbHJlYWR5IGNvbm5lY3RlZCEnKVxuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKVxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyBldGhlcmV1bSBvYmplY3QnKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlLCBuYW1lKSA9PiB7XG4gICAgc2V0Rm9ybURhdGEoKHByZXZTdGF0ZSkgPT4gKHsgLi4ucHJldlN0YXRlLCBbbmFtZV06IGUudGFyZ2V0LnZhbHVlfSkpXG4gIH1cblxuICBjb25zdCBzYXZlVHJhbnNhY3Rpb24gPSBhc3luYyAoXG4gICAgdHhIYXNoLFxuICAgIGFtb3VudCxcbiAgICBmcm9tQWRkcmVzcyA9IGN1cnJlbnRBY2NvdW50LFxuICAgIHRvQWRkcmVzcywgXG4gICkgPT4ge1xuICAgIGNvbnN0ICB0eERvYyA9IHtcbiAgICAgIF90eXBlOiAndHJhbnNhY3Rpb25zJyxcbiAgICAgIF9pZDogdHhIYXNoLFxuICAgICAgZnJvbUFkZHJlc3M6IGZyb21BZGRyZXNzLFxuICAgICAgdG9BZGRyZXNzOiB0b0FkZHJlc3MsXG4gICAgICB0aW1lc3RhbXA6IG5ldyBEYXRlKERhdGUubm93KCkpLnRvSVNPU3RyaW5nKCksXG4gICAgICB0eEhhc2g6IHR4SGFzaCxcbiAgICAgIGFtb3VudDogcGFyc2VGbG9hdChhbW91bnQpLFxuICAgIH1cbiAgICBcbiAgICBhd2FpdCBjbGllbnQuY3JlYXRlSWZOb3RFeGlzdHModHhEb2MpXG5cbiAgICBhd2FpdCBjbGllbnRcbiAgICAgIC5wYXRjaChjdXJyZW50QWNjb3VudClcbiAgICAgIC5zZXRJZk1pc3Npbmcoe3RyYW5zYWN0aW9uczogW10gfSlcbiAgICAgIC5pbnNlcnQoJ2FmdGVyJywgJ3RyYW5zYWN0aW9uc1stMV0nLFtcbiAgICAgICAge1xuICAgICAgICAgIF9rZXk6IHR4SGFzaCxcbiAgICAgICAgICBfcmVmOiB0eEhhc2gsXG4gICAgICAgICAgX3R5cGU6ICdyZWZlcmVuY2UnLFxuICAgICAgICB9XG4gICAgICBdKVxuICAgICAgLmNvbW1pdCgpXG4gICAgICBcbiAgICByZXR1cm5cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPFRyYW5zYWN0aW9uQ29udGV4dC5Qcm92aWRlclxuICAgICAgdmFsdWU9e3tcbiAgICAgICAgY29ubmVjdFdhbGxldCxcbiAgICAgICAgY3VycmVudEFjY291bnQsXG4gICAgICAgIHNlbmRUcmFuc2FjdGlvbixcbiAgICAgICAgaGFuZGxlQ2hhbmdlLFxuICAgICAgICBmb3JtRGF0YSxcbiAgICAgIH19XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvVHJhbnNhY3Rpb25Db250ZXh0LlByb3ZpZGVyPlxuICApXG59XG4gIFxuICBcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiZXRoZXJzIiwiY29udHJhY3RBQkkiLCJjb250cmFjdEFkZHJlc3MiLCJjbGllbnQiLCJUcmFuc2FjdGlvbkNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiZXRoIiwid2luZG93IiwiZXRoZXJldW0iLCJnZXRFdGhlcmV1bUNvbnRyYWN0IiwicHJvdmlkZXIiLCJwcm92aWRlcnMiLCJXZWIzUHJvdmlkZXIiLCJzaWduZXIiLCJnZXRTaWduZXIiLCJ0cmFuc2FjdGlvbkNvbnRyYWN0IiwiQ29udHJhY3QiLCJUcmFuc2FjdGlvblByb3ZpZGVyIiwiY2hpbGRyZW4iLCJjdXJyZW50QWNjb3VudCIsInNldEN1cnJlbnRBY2NvdW50IiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwiYWRkcmVzc1RvIiwiYW1vdW50IiwiZm9ybURhdGEiLCJzZXRGb3JtRGF0YSIsImNoZWNrSWZXYWxsZXRJc0Nvbm5lY3RlZCIsInVzZXJEb2MiLCJfdHlwZSIsIl9pZCIsInVzZXJOYW1lIiwiYWRkcmVzcyIsImNyZWF0ZUlmTm90RXhpc3RzIiwiY29ubmVjdFdhbGxldCIsIm1ldGFtYXNrIiwiYWNjb3VudHMiLCJhbGVydCIsInJlcXVlc3QiLCJtZXRob2QiLCJjb25zb2xlIiwiZXJyb3IiLCJFcnJvciIsInNlbmRUcmFuc2FjdGlvbiIsImNvbm5lY3RlZEFjY291bnQiLCJwYXJzZWRBbW91bnQiLCJ0cmFuc2FjdGlvbkhhc2giLCJ1dGlscyIsInBhcnNlRXRoZXIiLCJwYXJhbXMiLCJmcm9tIiwidG8iLCJnYXMiLCJ2YWx1ZSIsIl9oZXgiLCJwdWJsaXNoVHJhbnNhY3Rpb24iLCJ3YWl0Iiwic2F2ZVRyYW5zYWN0aW9uIiwiaGFzaCIsImxvZyIsImxlbmd0aCIsImhhbmRsZUNoYW5nZSIsImUiLCJuYW1lIiwicHJldlN0YXRlIiwidGFyZ2V0IiwidHhIYXNoIiwiZnJvbUFkZHJlc3MiLCJ0b0FkZHJlc3MiLCJ0eERvYyIsInRpbWVzdGFtcCIsIkRhdGUiLCJub3ciLCJ0b0lTT1N0cmluZyIsInBhcnNlRmxvYXQiLCJwYXRjaCIsInNldElmTWlzc2luZyIsInRyYW5zYWN0aW9ucyIsImluc2VydCIsIl9rZXkiLCJfcmVmIiwiY29tbWl0IiwiUHJvdmlkZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./context/TransactionContext.js\n");

/***/ })

});