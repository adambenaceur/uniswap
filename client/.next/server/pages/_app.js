/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./context/TransactionContext.js":
/*!***************************************!*\
  !*** ./context/TransactionContext.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TransactionContext\": () => (/* binding */ TransactionContext),\n/* harmony export */   \"TransactionProvider\": () => (/* binding */ TransactionProvider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ethers */ \"ethers\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/constants */ \"./lib/constants.js\");\n/* harmony import */ var _lib_sanityClient__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/sanityClient */ \"./lib/sanityClient.js\");\n\n\n\n\n\nconst TransactionContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createContext();\nlet eth;\nif (false) {}\nconst getEthereumContract = ()=>{\n    const provider = new ethers__WEBPACK_IMPORTED_MODULE_2__.ethers.providers.Web3Provider(eth);\n    const signer = provider.getSigner();\n    const transactionContract = new ethers__WEBPACK_IMPORTED_MODULE_2__.ethers.Contract(_lib_constants__WEBPACK_IMPORTED_MODULE_3__.contractAddress, _lib_constants__WEBPACK_IMPORTED_MODULE_3__.contractABI, signer);\n    return transactionContract;\n};\nconst TransactionProvider = ({ children  })=>{\n    const { 0: currentAccount , 1: setCurrentAccount  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const { 0: isLoading , 1: setIsLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const { 0: formData , 1: setFormData  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        addressTo: '',\n        amount: ''\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        checkIfWalletIsConnected();\n    }, []);\n    /* \n * Create userprofile in Sanity\n */ (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (!currentAccount) return;\n        (async ()=>{\n            const userDoc = {\n                _type: 'users',\n                _id: currentAccount,\n                userName: 'Unnamed',\n                address: currentAccount\n            };\n            await _lib_sanityClient__WEBPACK_IMPORTED_MODULE_4__.client.createIfNotExists(userDoc);\n        })();\n    }, [\n        currentAccount\n    ]);\n    /*\n * Prompts user to connect their MetaMask wallet\n */ const connectWallet = async (metamask = eth)=>{\n        try {\n            if (!metamask) return alert('Please install metamask ');\n            const accounts = await metamask.request({\n                method: 'eth_requestAccounts'\n            });\n            setCurrentAccount(accounts[0]);\n        } catch (error) {\n            console.error(error);\n            throw new Error('No ethereum object.');\n        }\n    };\n    //sending Transaction\n    const sendTransaction = async (metamask = eth, connectedAccount = currentAccount)=>{\n        try {\n            if (!metamask) return alert('Please install metamask');\n            const { addressTo , amount  } = formData;\n            const transactionContract = getEthereumContract();\n            const parsedAmount = ethers__WEBPACK_IMPORTED_MODULE_2__.ethers.utils.parseEther(amount);\n            await metamask.request({\n                method: 'eth_sendTransaction',\n                params: [\n                    {\n                        from: connectedAccount,\n                        to: addressTo,\n                        gas: '0x7EF40',\n                        value: parsedAmount._hex\n                    }, \n                ]\n            });\n            const transactionHash = await transactionContract.publishTransaction(addressTo, parsedAmount, `Transferring ETH ${parsedAmount} to ${addressTo}`, 'TRANSFER');\n            setIsLoading(true);\n            await transactionHash.wait();\n            // database call\n            await saveTransaction(transactionHash.hash, amount, connectedAccount, addressTo);\n            setIsLoading(false);\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    const checkIfWalletIsConnected = async (metamask = eth)=>{\n        try {\n            if (!metamask) return alert('Please install metamask');\n            const accounts = await metamask.request({\n                method: 'eth_accounts'\n            });\n            if (accounts.length) {\n                setCurrentAccount(accounts[0]);\n                console.log('wallet is already connected!');\n            }\n        } catch (error) {\n            console.error(error);\n            throw new Error('No ethereum object');\n        }\n    };\n    const handleChange = (e, name)=>{\n        setFormData((prevState)=>({\n                ...prevState,\n                [name]: e.target.value\n            })\n        );\n    };\n    const saveTransaction = async (txHash, amount, fromAddress = currentAccount, toAddress)=>{\n        const txDoc = {\n            _type: 'transactions',\n            _id: txHash,\n            fromAddress: fromAddress,\n            toAddress: toAddress,\n            timestamp: new Date(Date.now()).toISOString(),\n            txHash: txHash,\n            amount: parseFloat(amount)\n        };\n        await _lib_sanityClient__WEBPACK_IMPORTED_MODULE_4__.client.createIfNotExists(txDoc);\n        await _lib_sanityClient__WEBPACK_IMPORTED_MODULE_4__.client.patch(currentAccount).setIfMissing({\n            transactions: []\n        }).insert('after', 'transactions[-1]', [\n            {\n                _key: txHash,\n                _ref: txHash,\n                _type: 'reference'\n            }\n        ]).commit();\n        return;\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TransactionContext.Provider, {\n        value: {\n            connectWallet,\n            currentAccount,\n            sendTransaction,\n            handleChange,\n            formData,\n            isLoading\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\context\\\\TransactionContext.js\",\n        lineNumber: 178,\n        columnNumber: 5\n    }, undefined));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSxZQUFZLEVBQUUsQ0FBQyxDQUFDO1FBQUMsQ0FBQyxFQUNoQ0MsTUFBTSxDQUFDLENBQU8sUUFBRSxDQUFrQixtQkFBQyxDQUFDO1lBQ25DLENBQUM7Z0JBQ0NDLElBQUksRUFBRWIsTUFBTTtnQkFDWmMsSUFBSSxFQUFFZCxNQUFNO2dCQUNackMsS0FBSyxFQUFFLENBQVc7WUFDcEIsQ0FBQztRQUNILENBQUMsRUFDQW9ELE1BQU07UUFFVCxNQUFNO0lBQ1IsQ0FBQztJQUVELE1BQU0sNkVBQ0g3RSxrQkFBa0IsQ0FBQzhFLFFBQVE7UUFDMUI5QixLQUFLLEVBQUUsQ0FBQztZQUNObEIsYUFBYTtZQUNiZixjQUFjO1lBQ2R3QixlQUFlO1lBQ2ZrQixZQUFZO1lBQ1p0QyxRQUFRO1lBQ1JGLFNBQVM7UUFDWCxDQUFDO2tCQUVBSCxRQUFROzs7Ozs7QUFHZixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vY29udGV4dC9UcmFuc2FjdGlvbkNvbnRleHQuanM/Njk5OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgZXRoZXJzIH0gZnJvbSAnZXRoZXJzJ1xuaW1wb3J0IHsgY29udHJhY3RBQkksIGNvbnRyYWN0QWRkcmVzc30gZnJvbSAnLi4vbGliL2NvbnN0YW50cydcbmltcG9ydCB7IGNsaWVudCB9IGZyb20gJy4uL2xpYi9zYW5pdHlDbGllbnQnXG5cbmV4cG9ydCBjb25zdCBUcmFuc2FjdGlvbkNvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KClcblxubGV0IGV0aFxuXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgZXRoID0gd2luZG93LmV0aGVyZXVtXG59XG5cbmNvbnN0IGdldEV0aGVyZXVtQ29udHJhY3QgPSAoKSA9PiB7XG4gIGNvbnN0IHByb3ZpZGVyID0gbmV3IGV0aGVycy5wcm92aWRlcnMuV2ViM1Byb3ZpZGVyKGV0aClcbiAgY29uc3Qgc2lnbmVyID0gcHJvdmlkZXIuZ2V0U2lnbmVyKClcbiAgY29uc3QgdHJhbnNhY3Rpb25Db250cmFjdCA9IG5ldyBldGhlcnMuQ29udHJhY3QoXG4gICAgY29udHJhY3RBZGRyZXNzLFxuICAgIGNvbnRyYWN0QUJJLFxuICAgIHNpZ25lclxuICApXG5cbiAgcmV0dXJuIHRyYW5zYWN0aW9uQ29udHJhY3Rcbn1cblxuZXhwb3J0IGNvbnN0IFRyYW5zYWN0aW9uUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIGNvbnN0IFtjdXJyZW50QWNjb3VudCwgc2V0Q3VycmVudEFjY291bnRdID0gdXNlU3RhdGUoKVxuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFtmb3JtRGF0YSwgc2V0Rm9ybURhdGEgXSA9IHVzZVN0YXRlKHtcbiAgICBhZGRyZXNzVG86ICcnLFxuICAgIGFtb3VudDogJycsXG4gIH0pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjaGVja0lmV2FsbGV0SXNDb25uZWN0ZWQoKVxuICB9LCBbXSlcblxuLyogXG4gKiBDcmVhdGUgdXNlcnByb2ZpbGUgaW4gU2FuaXR5XG4gKi8gXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWN1cnJlbnRBY2NvdW50KSByZXR1cm5cbiAgICA7KGFzeW5jKCkgPT4ge1xuICAgICAgY29uc3QgdXNlckRvYyA9IHtcbiAgICAgICAgX3R5cGU6ICd1c2VycycsXG4gICAgICAgIF9pZDogY3VycmVudEFjY291bnQsXG4gICAgICAgIHVzZXJOYW1lOiAnVW5uYW1lZCcsXG4gICAgICAgIGFkZHJlc3M6IGN1cnJlbnRBY2NvdW50LFxuICAgICAgfVxuXG4gICAgICBhd2FpdCBjbGllbnQuY3JlYXRlSWZOb3RFeGlzdHModXNlckRvYylcbiAgICB9KSgpXG5cbiAgfSwgW2N1cnJlbnRBY2NvdW50XSlcblxuLypcbiAqIFByb21wdHMgdXNlciB0byBjb25uZWN0IHRoZWlyIE1ldGFNYXNrIHdhbGxldFxuICovXG4gIGNvbnN0IGNvbm5lY3RXYWxsZXQgPSBhc3luYyAobWV0YW1hc2sgPSBldGgpID0+IHtcbiAgICB0cnkge1xuICAgICAgaWYgKCFtZXRhbWFzaykgcmV0dXJuIGFsZXJ0KCdQbGVhc2UgaW5zdGFsbCBtZXRhbWFzayAnKVxuXG4gICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IG1ldGFtYXNrLnJlcXVlc3QoeyBtZXRob2Q6ICdldGhfcmVxdWVzdEFjY291bnRzJyB9KVxuXG4gICAgICBzZXRDdXJyZW50QWNjb3VudChhY2NvdW50c1swXSlcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnJvcilcbiAgICAgIHRocm93IG5ldyBFcnJvcignTm8gZXRoZXJldW0gb2JqZWN0LicpXG4gICAgfVxuICB9XG5cbiAgLy9zZW5kaW5nIFRyYW5zYWN0aW9uXG4gIGNvbnN0IHNlbmRUcmFuc2FjdGlvbiA9IGFzeW5jIChcbiAgICBtZXRhbWFzayA9IGV0aCxcbiAgICBjb25uZWN0ZWRBY2NvdW50ID0gY3VycmVudEFjY291bnRcbiAgKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghbWV0YW1hc2spIHJldHVybiBhbGVydCgnUGxlYXNlIGluc3RhbGwgbWV0YW1hc2snKVxuICAgICAgY29uc3QgeyBhZGRyZXNzVG8sIGFtb3VudCB9ID0gZm9ybURhdGFcbiAgICAgIGNvbnN0IHRyYW5zYWN0aW9uQ29udHJhY3QgPSBnZXRFdGhlcmV1bUNvbnRyYWN0KClcblxuICAgICAgY29uc3QgcGFyc2VkQW1vdW50ID0gZXRoZXJzLnV0aWxzLnBhcnNlRXRoZXIoYW1vdW50KVxuXG4gICAgICBhd2FpdCBtZXRhbWFzay5yZXF1ZXN0KHtcbiAgICAgICAgbWV0aG9kOiAnZXRoX3NlbmRUcmFuc2FjdGlvbicsXG4gICAgICAgIHBhcmFtczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGZyb206IGNvbm5lY3RlZEFjY291bnQsXG4gICAgICAgICAgICB0bzogYWRkcmVzc1RvLFxuICAgICAgICAgICAgZ2FzOiAnMHg3RUY0MCcsIC8vIDUyMCwwMDAgR3dlaVxuICAgICAgICAgICAgdmFsdWU6IHBhcnNlZEFtb3VudC5faGV4LFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9KVxuXG4gICAgICBjb25zdCB0cmFuc2FjdGlvbkhhc2ggPSBhd2FpdCB0cmFuc2FjdGlvbkNvbnRyYWN0LnB1Ymxpc2hUcmFuc2FjdGlvbihcbiAgICAgICAgYWRkcmVzc1RvLFxuICAgICAgICBwYXJzZWRBbW91bnQsXG4gICAgICAgIGBUcmFuc2ZlcnJpbmcgRVRIICR7cGFyc2VkQW1vdW50fSB0byAke2FkZHJlc3NUb31gLCBcbiAgICAgICAgJ1RSQU5TRkVSJ1xuICAgICAgKVxuICAgICAgXG4gICAgICBzZXRJc0xvYWRpbmcodHJ1ZSlcblxuICAgICAgYXdhaXQgdHJhbnNhY3Rpb25IYXNoLndhaXQoKVxuXG5cbiAgICAgIC8vIGRhdGFiYXNlIGNhbGxcbiAgICAgIGF3YWl0IHNhdmVUcmFuc2FjdGlvbihcbiAgICAgICAgdHJhbnNhY3Rpb25IYXNoLmhhc2gsXG4gICAgICAgIGFtb3VudCxcbiAgICAgICAgY29ubmVjdGVkQWNjb3VudCxcbiAgICAgICAgYWRkcmVzc1RvXG4gICAgICApXG5cbiAgICAgIHNldElzTG9hZGluZyhmYWxzZSlcblxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICB9XG4gIH1cblxuICBjb25zdCBjaGVja0lmV2FsbGV0SXNDb25uZWN0ZWQgPSBhc3luYyAobWV0YW1hc2sgPSBldGgpID0+IHtcbiAgICB0cnkge1xuICAgICAgaWYgKCFtZXRhbWFzaykgcmV0dXJuIGFsZXJ0KCdQbGVhc2UgaW5zdGFsbCBtZXRhbWFzaycpXG5cbiAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgbWV0YW1hc2sucmVxdWVzdCh7bWV0aG9kOiAnZXRoX2FjY291bnRzJ30pXG5cbiAgICAgIGlmIChhY2NvdW50cy5sZW5ndGgpIHtcbiAgICAgICAgc2V0Q3VycmVudEFjY291bnQoYWNjb3VudHNbMF0pXG4gICAgICAgIGNvbnNvbGUubG9nKCd3YWxsZXQgaXMgYWxyZWFkeSBjb25uZWN0ZWQhJylcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnJvcilcbiAgICAgIHRocm93IG5ldyBFcnJvcignTm8gZXRoZXJldW0gb2JqZWN0JylcbiAgICB9XG4gIH1cblxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSwgbmFtZSkgPT4ge1xuICAgIHNldEZvcm1EYXRhKChwcmV2U3RhdGUpID0+ICh7IC4uLnByZXZTdGF0ZSwgW25hbWVdOiBlLnRhcmdldC52YWx1ZX0pKVxuICB9XG5cbiAgY29uc3Qgc2F2ZVRyYW5zYWN0aW9uID0gYXN5bmMgKFxuICAgIHR4SGFzaCxcbiAgICBhbW91bnQsXG4gICAgZnJvbUFkZHJlc3MgPSBjdXJyZW50QWNjb3VudCxcbiAgICB0b0FkZHJlc3MsIFxuICApID0+IHtcbiAgICBjb25zdCAgdHhEb2MgPSB7XG4gICAgICBfdHlwZTogJ3RyYW5zYWN0aW9ucycsXG4gICAgICBfaWQ6IHR4SGFzaCxcbiAgICAgIGZyb21BZGRyZXNzOiBmcm9tQWRkcmVzcyxcbiAgICAgIHRvQWRkcmVzczogdG9BZGRyZXNzLFxuICAgICAgdGltZXN0YW1wOiBuZXcgRGF0ZShEYXRlLm5vdygpKS50b0lTT1N0cmluZygpLFxuICAgICAgdHhIYXNoOiB0eEhhc2gsXG4gICAgICBhbW91bnQ6IHBhcnNlRmxvYXQoYW1vdW50KSxcbiAgICB9XG4gICAgXG4gICAgYXdhaXQgY2xpZW50LmNyZWF0ZUlmTm90RXhpc3RzKHR4RG9jKVxuXG4gICAgYXdhaXQgY2xpZW50XG4gICAgICAucGF0Y2goY3VycmVudEFjY291bnQpXG4gICAgICAuc2V0SWZNaXNzaW5nKHt0cmFuc2FjdGlvbnM6IFtdIH0pXG4gICAgICAuaW5zZXJ0KCdhZnRlcicsICd0cmFuc2FjdGlvbnNbLTFdJyxbXG4gICAgICAgIHtcbiAgICAgICAgICBfa2V5OiB0eEhhc2gsXG4gICAgICAgICAgX3JlZjogdHhIYXNoLFxuICAgICAgICAgIF90eXBlOiAncmVmZXJlbmNlJyxcbiAgICAgICAgfVxuICAgICAgXSlcbiAgICAgIC5jb21taXQoKVxuICAgICAgXG4gICAgcmV0dXJuXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxUcmFuc2FjdGlvbkNvbnRleHQuUHJvdmlkZXJcbiAgICAgIHZhbHVlPXt7XG4gICAgICAgIGNvbm5lY3RXYWxsZXQsXG4gICAgICAgIGN1cnJlbnRBY2NvdW50LFxuICAgICAgICBzZW5kVHJhbnNhY3Rpb24sXG4gICAgICAgIGhhbmRsZUNoYW5nZSxcbiAgICAgICAgZm9ybURhdGEsXG4gICAgICAgIGlzTG9hZGluZyxcbiAgICAgIH19XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvVHJhbnNhY3Rpb25Db250ZXh0LlByb3ZpZGVyPlxuICApXG59XG4gIFxuICBcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiZXRoZXJzIiwiY29udHJhY3RBQkkiLCJjb250cmFjdEFkZHJlc3MiLCJjbGllbnQiLCJUcmFuc2FjdGlvbkNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiZXRoIiwid2luZG93IiwiZXRoZXJldW0iLCJnZXRFdGhlcmV1bUNvbnRyYWN0IiwicHJvdmlkZXIiLCJwcm92aWRlcnMiLCJXZWIzUHJvdmlkZXIiLCJzaWduZXIiLCJnZXRTaWduZXIiLCJ0cmFuc2FjdGlvbkNvbnRyYWN0IiwiQ29udHJhY3QiLCJUcmFuc2FjdGlvblByb3ZpZGVyIiwiY2hpbGRyZW4iLCJjdXJyZW50QWNjb3VudCIsInNldEN1cnJlbnRBY2NvdW50IiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwiZm9ybURhdGEiLCJzZXRGb3JtRGF0YSIsImFkZHJlc3NUbyIsImFtb3VudCIsImNoZWNrSWZXYWxsZXRJc0Nvbm5lY3RlZCIsInVzZXJEb2MiLCJfdHlwZSIsIl9pZCIsInVzZXJOYW1lIiwiYWRkcmVzcyIsImNyZWF0ZUlmTm90RXhpc3RzIiwiY29ubmVjdFdhbGxldCIsIm1ldGFtYXNrIiwiYWxlcnQiLCJhY2NvdW50cyIsInJlcXVlc3QiLCJtZXRob2QiLCJlcnJvciIsImNvbnNvbGUiLCJFcnJvciIsInNlbmRUcmFuc2FjdGlvbiIsImNvbm5lY3RlZEFjY291bnQiLCJwYXJzZWRBbW91bnQiLCJ1dGlscyIsInBhcnNlRXRoZXIiLCJwYXJhbXMiLCJmcm9tIiwidG8iLCJnYXMiLCJ2YWx1ZSIsIl9oZXgiLCJ0cmFuc2FjdGlvbkhhc2giLCJwdWJsaXNoVHJhbnNhY3Rpb24iLCJ3YWl0Iiwic2F2ZVRyYW5zYWN0aW9uIiwiaGFzaCIsImxvZyIsImxlbmd0aCIsImhhbmRsZUNoYW5nZSIsImUiLCJuYW1lIiwicHJldlN0YXRlIiwidGFyZ2V0IiwidHhIYXNoIiwiZnJvbUFkZHJlc3MiLCJ0b0FkZHJlc3MiLCJ0eERvYyIsInRpbWVzdGFtcCIsIkRhdGUiLCJub3ciLCJ0b0lTT1N0cmluZyIsInBhcnNlRmxvYXQiLCJwYXRjaCIsInNldElmTWlzc2luZyIsInRyYW5zYWN0aW9ucyIsImluc2VydCIsIl9rZXkiLCJfcmVmIiwiY29tbWl0IiwiUHJvdmlkZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./context/TransactionContext.js\n");

/***/ }),

/***/ "./lib/constants.js":
/*!**************************!*\
  !*** ./lib/constants.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"contractABI\": () => (/* binding */ contractABI),\n/* harmony export */   \"contractAddress\": () => (/* binding */ contractAddress)\n/* harmony export */ });\n/* harmony import */ var _Transactions_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Transactions.json */ \"./lib/Transactions.json\");\n\nconst contractABI = _Transactions_json__WEBPACK_IMPORTED_MODULE_0__.abi;\nconst contractAddress = '0x1888884b9361432De898505d86fe2Da2E053e55a';\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvY29uc3RhbnRzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFxQztBQUU5QixLQUFLLENBQUNDLFdBQVcsR0FBR0QsbURBQU87QUFDM0IsS0FBSyxDQUFDRSxlQUFlLEdBQUcsQ0FBNEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9saWIvY29uc3RhbnRzLmpzPzI5ZjEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGFiaSBmcm9tICcuL1RyYW5zYWN0aW9ucy5qc29uJ1xyXG5cclxuZXhwb3J0IGNvbnN0IGNvbnRyYWN0QUJJID0gYWJpLmFiaVxyXG5leHBvcnQgY29uc3QgY29udHJhY3RBZGRyZXNzID0gJzB4MTg4ODg4NGI5MzYxNDMyRGU4OTg1MDVkODZmZTJEYTJFMDUzZTU1YSciXSwibmFtZXMiOlsiYWJpIiwiY29udHJhY3RBQkkiLCJjb250cmFjdEFkZHJlc3MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/constants.js\n");

/***/ }),

/***/ "./lib/sanityClient.js":
/*!*****************************!*\
  !*** ./lib/sanityClient.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"client\": () => (/* binding */ client)\n/* harmony export */ });\n/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sanity/client */ \"@sanity/client\");\n/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sanity_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst client = _sanity_client__WEBPACK_IMPORTED_MODULE_0___default()({\n    projectId: '8846gt26',\n    dataset: 'production',\n    apiVersion: 'v1',\n    token: 'skpvci1EOucYIIRChBHc9WZh32Yw79ti5uOnVC0FxHTf2CrrjpPuUxblWk8HqOAR7B8V1hUbcXexz12tLdpnrVKBTuOsqYxoZynAAYERGdfal6CKodqUZmemACNnznuDdeXFkgd0lAGCmz8bgkDwpDxkkhAYUr0TWrghZvmWe6drTU7jtGhb',\n    useCdn: false\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvc2FuaXR5Q2xpZW50LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUF5QztBQUVsQyxLQUFLLENBQUNDLE1BQU0sR0FBR0QscURBQVksQ0FBQyxDQUFDO0lBQ2hDRSxTQUFTLEVBQUUsQ0FBVTtJQUNyQkMsT0FBTyxFQUFFLENBQVk7SUFDckJDLFVBQVUsRUFBRSxDQUFJO0lBQ2hCQyxLQUFLLEVBQUUsQ0FBc0w7SUFDN0xDLE1BQU0sRUFBRSxLQUFLO0FBQ2pCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9saWIvc2FuaXR5Q2xpZW50LmpzPzEwNGQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHNhbml0eUNsaWVudCBmcm9tICdAc2FuaXR5L2NsaWVudCdcclxuXHJcbmV4cG9ydCBjb25zdCBjbGllbnQgPSBzYW5pdHlDbGllbnQoe1xyXG4gICAgcHJvamVjdElkOiAnODg0Nmd0MjYnLFxyXG4gICAgZGF0YXNldDogJ3Byb2R1Y3Rpb24nLFxyXG4gICAgYXBpVmVyc2lvbjogJ3YxJyxcclxuICAgIHRva2VuOiAnc2twdmNpMUVPdWNZSUlSQ2hCSGM5V1poMzJZdzc5dGk1dU9uVkMwRnhIVGYyQ3JyanBQdVV4YmxXazhIcU9BUjdCOFYxaFViY1hleHoxMnRMZHBuclZLQlR1T3NxWXhvWnluQUFZRVJHZGZhbDZDS29kcVVabWVtQUNObnpudURkZVhGa2dkMGxBR0NtejhiZ2tEd3BEeGtraEFZVXIwVFdyZ2hadm1XZTZkclRVN2p0R2hiJyxcclxuICAgIHVzZUNkbjogZmFsc2UsXHJcbn0pIl0sIm5hbWVzIjpbInNhbml0eUNsaWVudCIsImNsaWVudCIsInByb2plY3RJZCIsImRhdGFzZXQiLCJhcGlWZXJzaW9uIiwidG9rZW4iLCJ1c2VDZG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/sanityClient.js\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_TransactionContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/TransactionContext */ \"./context/TransactionContext.js\");\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_TransactionContext__WEBPACK_IMPORTED_MODULE_2__.TransactionProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\pages\\\\_app.tsx\",\n            lineNumber: 8,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\benac\\\\Documents\\\\uniswap\\\\client\\\\pages\\\\_app.tsx\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQThCO0FBRXFDO1NBRTFEQyxLQUFLLENBQUMsQ0FBQyxDQUFDQyxTQUFTLEdBQUVDLFNBQVMsRUFBVyxDQUFDLEVBQUUsQ0FBQztJQUNsRCxNQUFNLDZFQUNISCw0RUFBbUI7OEZBQ2pCRSxTQUFTO2VBQUtDLFNBQVM7Ozs7Ozs7Ozs7O0FBRzlCLENBQUM7QUFFRCxpRUFBZUYsS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL3BhZ2VzL19hcHAudHN4PzJmYmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnXG5pbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSAnbmV4dC9hcHAnXG5pbXBvcnQgeyBUcmFuc2FjdGlvblByb3ZpZGVyIH0gZnJvbSAnLi4vY29udGV4dC9UcmFuc2FjdGlvbkNvbnRleHQnXG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8VHJhbnNhY3Rpb25Qcm92aWRlcj5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICA8L1RyYW5zYWN0aW9uUHJvdmlkZXI+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHBcbiJdLCJuYW1lcyI6WyJUcmFuc2FjdGlvblByb3ZpZGVyIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "@sanity/client":
/*!*********************************!*\
  !*** external "@sanity/client" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@sanity/client");

/***/ }),

/***/ "ethers":
/*!*************************!*\
  !*** external "ethers" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("ethers");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "./lib/Transactions.json":
/*!*******************************!*\
  !*** ./lib/Transactions.json ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"_format":"hh-sol-artifact-1","contractName":"Transactions","sourceName":"contracts/Transactions.sol","abi":[{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"address","name":"receiver","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"string","name":"message","type":"string"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"},{"indexed":false,"internalType":"string","name":"keyword","type":"string"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address payable","name":"receiver","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"string","name":"message","type":"string"},{"internalType":"string","name":"keyword","type":"string"}],"name":"publishTransaction","outputs":[],"stateMutability":"nonpayable","type":"function"}],"bytecode":"0x608060405234801561001057600080fd5b5061049a806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c80637d0ee35714610030575b600080fd5b61004a60048036038101906100459190610125565b61004c565b005b7f416cfa4330a4565f45c2fd2dd4826a83a37443aba2ce6f79477c7355afac35fa3385858542866040516100859695949392919061021e565b60405180910390a150505050565b60006100a66100a1846102b2565b61028d565b9050828152602081018484840111156100be57600080fd5b6100c9848285610383565b509392505050565b6000813590506100e081610436565b92915050565b600082601f8301126100f757600080fd5b8135610107848260208601610093565b91505092915050565b60008135905061011f8161044d565b92915050565b6000806000806080858703121561013b57600080fd5b6000610149878288016100d1565b945050602061015a87828801610110565b935050604085013567ffffffffffffffff81111561017757600080fd5b610183878288016100e6565b925050606085013567ffffffffffffffff8111156101a057600080fd5b6101ac878288016100e6565b91505092959194509250565b6101c18161034d565b82525050565b6101d0816102ff565b82525050565b60006101e1826102e3565b6101eb81856102ee565b93506101fb818560208601610392565b61020481610425565b840191505092915050565b61021881610343565b82525050565b600060c08201905061023360008301896101c7565b61024060208301886101b8565b61024d604083018761020f565b818103606083015261025f81866101d6565b905061026e608083018561020f565b81810360a083015261028081846101d6565b9050979650505050505050565b60006102976102a8565b90506102a382826103c5565b919050565b6000604051905090565b600067ffffffffffffffff8211156102cd576102cc6103f6565b5b6102d682610425565b9050602081019050919050565b600081519050919050565b600082825260208201905092915050565b600061030a82610323565b9050919050565b600061031c82610323565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60006103588261035f565b9050919050565b600061036a82610371565b9050919050565b600061037c82610323565b9050919050565b82818337600083830152505050565b60005b838110156103b0578082015181840152602081019050610395565b838111156103bf576000848401525b50505050565b6103ce82610425565b810181811067ffffffffffffffff821117156103ed576103ec6103f6565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b61043f81610311565b811461044a57600080fd5b50565b61045681610343565b811461046157600080fd5b5056fea26469706673582212205285461b83747b3ef5e9f2843fc1ade98866b94dc067da6575c60604884f08b764736f6c63430008040033","deployedBytecode":"0x608060405234801561001057600080fd5b506004361061002b5760003560e01c80637d0ee35714610030575b600080fd5b61004a60048036038101906100459190610125565b61004c565b005b7f416cfa4330a4565f45c2fd2dd4826a83a37443aba2ce6f79477c7355afac35fa3385858542866040516100859695949392919061021e565b60405180910390a150505050565b60006100a66100a1846102b2565b61028d565b9050828152602081018484840111156100be57600080fd5b6100c9848285610383565b509392505050565b6000813590506100e081610436565b92915050565b600082601f8301126100f757600080fd5b8135610107848260208601610093565b91505092915050565b60008135905061011f8161044d565b92915050565b6000806000806080858703121561013b57600080fd5b6000610149878288016100d1565b945050602061015a87828801610110565b935050604085013567ffffffffffffffff81111561017757600080fd5b610183878288016100e6565b925050606085013567ffffffffffffffff8111156101a057600080fd5b6101ac878288016100e6565b91505092959194509250565b6101c18161034d565b82525050565b6101d0816102ff565b82525050565b60006101e1826102e3565b6101eb81856102ee565b93506101fb818560208601610392565b61020481610425565b840191505092915050565b61021881610343565b82525050565b600060c08201905061023360008301896101c7565b61024060208301886101b8565b61024d604083018761020f565b818103606083015261025f81866101d6565b905061026e608083018561020f565b81810360a083015261028081846101d6565b9050979650505050505050565b60006102976102a8565b90506102a382826103c5565b919050565b6000604051905090565b600067ffffffffffffffff8211156102cd576102cc6103f6565b5b6102d682610425565b9050602081019050919050565b600081519050919050565b600082825260208201905092915050565b600061030a82610323565b9050919050565b600061031c82610323565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60006103588261035f565b9050919050565b600061036a82610371565b9050919050565b600061037c82610323565b9050919050565b82818337600083830152505050565b60005b838110156103b0578082015181840152602081019050610395565b838111156103bf576000848401525b50505050565b6103ce82610425565b810181811067ffffffffffffffff821117156103ed576103ec6103f6565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b61043f81610311565b811461044a57600080fd5b50565b61045681610343565b811461046157600080fd5b5056fea26469706673582212205285461b83747b3ef5e9f2843fc1ade98866b94dc067da6575c60604884f08b764736f6c63430008040033","linkReferences":{},"deployedLinkReferences":{}}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();