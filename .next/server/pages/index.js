"use strict";
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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/table.js":
/*!*****************************!*\
  !*** ./components/table.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Table)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction Table({ data  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n            border: \"1\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                children: \"object_id\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\WebstormProjects\\\\NextJs\\\\Projects\\\\challenges\\\\webhook\\\\components\\\\table.js\",\n                                lineNumber: 7,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                children: \"item_name\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\WebstormProjects\\\\NextJs\\\\Projects\\\\challenges\\\\webhook\\\\components\\\\table.js\",\n                                lineNumber: 8,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                children: \"price\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\WebstormProjects\\\\NextJs\\\\Projects\\\\challenges\\\\webhook\\\\components\\\\table.js\",\n                                lineNumber: 9,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                children: \"purchase_date\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\WebstormProjects\\\\NextJs\\\\Projects\\\\challenges\\\\webhook\\\\components\\\\table.js\",\n                                lineNumber: 10,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\WebstormProjects\\\\NextJs\\\\Projects\\\\challenges\\\\webhook\\\\components\\\\table.js\",\n                        lineNumber: 6,\n                        columnNumber: 17\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\WebstormProjects\\\\NextJs\\\\Projects\\\\challenges\\\\webhook\\\\components\\\\table.js\",\n                    lineNumber: 5,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                    children: data.map((result)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    children: result._id\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\WebstormProjects\\\\NextJs\\\\Projects\\\\challenges\\\\webhook\\\\components\\\\table.js\",\n                                    lineNumber: 16,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    children: result.item_name\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\WebstormProjects\\\\NextJs\\\\Projects\\\\challenges\\\\webhook\\\\components\\\\table.js\",\n                                    lineNumber: 17,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    children: result.price\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\WebstormProjects\\\\NextJs\\\\Projects\\\\challenges\\\\webhook\\\\components\\\\table.js\",\n                                    lineNumber: 18,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    children: result.purchase_date\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\WebstormProjects\\\\NextJs\\\\Projects\\\\challenges\\\\webhook\\\\components\\\\table.js\",\n                                    lineNumber: 19,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, result._id, true, {\n                            fileName: \"C:\\\\WebstormProjects\\\\NextJs\\\\Projects\\\\challenges\\\\webhook\\\\components\\\\table.js\",\n                            lineNumber: 15,\n                            columnNumber: 21\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"C:\\\\WebstormProjects\\\\NextJs\\\\Projects\\\\challenges\\\\webhook\\\\components\\\\table.js\",\n                    lineNumber: 13,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\WebstormProjects\\\\NextJs\\\\Projects\\\\challenges\\\\webhook\\\\components\\\\table.js\",\n            lineNumber: 4,\n            columnNumber: 13\n        }, this)\n    }, void 0, false);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3RhYmxlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQWUsU0FBU0EsS0FBSyxDQUFDLEVBQUNDLElBQUksR0FBQyxFQUFDO0lBQ2pDLHFCQUNJO2tCQUNJLDRFQUFDQyxPQUFLO1lBQUNDLE1BQU0sRUFBQyxHQUFHOzs4QkFDYiw4REFBQ0MsT0FBSzs4QkFDTiw0RUFBQ0MsSUFBRTs7MENBQ0MsOERBQUNDLElBQUU7MENBQUMsV0FBUzs7Ozs7b0NBQUs7MENBQ2xCLDhEQUFDQSxJQUFFOzBDQUFDLFdBQVM7Ozs7O29DQUFLOzBDQUNsQiw4REFBQ0EsSUFBRTswQ0FBQyxPQUFLOzs7OztvQ0FBSzswQ0FDZCw4REFBQ0EsSUFBRTswQ0FBQyxlQUFhOzs7OztvQ0FBSzs7Ozs7OzRCQUNyQjs7Ozs7d0JBQ0c7OEJBQ1IsOERBQUNDLE9BQUs7OEJBQ0xOLElBQUksQ0FBQ08sR0FBRyxDQUFDQyxDQUFBQSxNQUFNLGlCQUNaLDhEQUFDSixJQUFFOzs4Q0FDQyw4REFBQ0ssSUFBRTs4Q0FBRUQsTUFBTSxDQUFDRSxHQUFHOzs7Ozt3Q0FBTTs4Q0FDckIsOERBQUNELElBQUU7OENBQUVELE1BQU0sQ0FBQ0csU0FBUzs7Ozs7d0NBQU07OENBQzNCLDhEQUFDRixJQUFFOzhDQUFFRCxNQUFNLENBQUNJLEtBQUs7Ozs7O3dDQUFNOzhDQUN2Qiw4REFBQ0gsSUFBRTs4Q0FBR0QsTUFBTSxDQUFDSyxhQUFhOzs7Ozt3Q0FBTzs7MkJBSjVCTCxNQUFNLENBQUNFLEdBQUc7Ozs7Z0NBS2QsQ0FDUDs7Ozs7d0JBQ007Ozs7OztnQkFDSjtxQkFDVCxDQUNOO0NBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3RhYmxlLmpzPzkxYTYiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGFibGUoe2RhdGF9KXtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPHRhYmxlIGJvcmRlcj1cIjFcIj5cclxuICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICA8dGg+b2JqZWN0X2lkPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGg+aXRlbV9uYW1lPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGg+cHJpY2U8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aD5wdXJjaGFzZV9kYXRlPC90aD5cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAge2RhdGEubWFwKHJlc3VsdCA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17cmVzdWx0Ll9pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57cmVzdWx0Ll9pZH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3Jlc3VsdC5pdGVtX25hbWV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntyZXN1bHQucHJpY2V9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnsocmVzdWx0LnB1cmNoYXNlX2RhdGUpfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufSJdLCJuYW1lcyI6WyJUYWJsZSIsImRhdGEiLCJ0YWJsZSIsImJvcmRlciIsInRoZWFkIiwidHIiLCJ0aCIsInRib2R5IiwibWFwIiwicmVzdWx0IiwidGQiLCJfaWQiLCJpdGVtX25hbWUiLCJwcmljZSIsInB1cmNoYXNlX2RhdGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/table.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-hook-form */ \"react-hook-form\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/table */ \"./components/table.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_1__]);\nreact_hook_form__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\nconst postData = async (data)=>{\n    switch(data[\"item_name\"]){\n        case \"book\":\n            data[\"price\"] = 150;\n            break;\n        case \"laptop\":\n            data[\"price\"] = 1200;\n            break;\n        case \"ball\":\n            data[\"price\"] = 200;\n            break;\n    }\n    function sendToDB() {\n        return axios__WEBPACK_IMPORTED_MODULE_2___default().post(\"/api/user\", data);\n    }\n    function sendToWebhook() {\n        const payload = JSON.stringify({\n            version: \"1.0.0\",\n            event: \"Purchase\",\n            triggered_at: new Date(),\n            content: `A ${data.item_name} purchase was made`,\n            data: {\n                item_name: data.item_name,\n                item_price: data.price\n            }\n        });\n        return axios__WEBPACK_IMPORTED_MODULE_2___default()({\n            method: \"post\",\n            url: data.url,\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            data: payload\n        });\n    }\n    Promise.all([\n        sendToDB(),\n        sendToWebhook()\n    ]).then((results)=>{\n        // console.log(results)\n        return [\n            results[0],\n            results[1]\n        ];\n    }).catch((error)=>{\n        // console.log(error)\n        return [\n            error[0],\n            error[1]\n        ];\n    });\n};\nfunction Home() {\n    const [results, setResults] = react__WEBPACK_IMPORTED_MODULE_4___default().useState([]);\n    const { register , handleSubmit  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_1__.useForm)({\n        defaultValues: {\n            item_name: \"\",\n            price: \"\",\n            url: \"\"\n        }\n    });\n    react__WEBPACK_IMPORTED_MODULE_4___default().useEffect(()=>{\n        axios__WEBPACK_IMPORTED_MODULE_2___default().get(\"/api/user\").then((res)=>{\n            // console.log(res.data);\n            setResults(res.data.data);\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            onSubmit: handleSubmit((data)=>postData(data).then((res)=>true)),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                    ...register(\"item_name\"),\n                    required: true,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                            value: \"\",\n                            disabled: true,\n                            children: \"Select...\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\WebstormProjects\\\\NextJs\\\\Projects\\\\challenges\\\\webhook\\\\pages\\\\index.js\",\n                            lineNumber: 77,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                            value: \"book\",\n                            children: \"Book: $200\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\WebstormProjects\\\\NextJs\\\\Projects\\\\challenges\\\\webhook\\\\pages\\\\index.js\",\n                            lineNumber: 78,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                            value: \"ball\",\n                            children: \"Ball: $150\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\WebstormProjects\\\\NextJs\\\\Projects\\\\challenges\\\\webhook\\\\pages\\\\index.js\",\n                            lineNumber: 79,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                            value: \"laptop\",\n                            children: \"Laptop: $1200\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\WebstormProjects\\\\NextJs\\\\Projects\\\\challenges\\\\webhook\\\\pages\\\\index.js\",\n                            lineNumber: 80,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\WebstormProjects\\\\NextJs\\\\Projects\\\\challenges\\\\webhook\\\\pages\\\\index.js\",\n                    lineNumber: 76,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    htmlFor: \"url\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"C:\\\\WebstormProjects\\\\NextJs\\\\Projects\\\\challenges\\\\webhook\\\\pages\\\\index.js\",\n                            lineNumber: 83,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"C:\\\\WebstormProjects\\\\NextJs\\\\Projects\\\\challenges\\\\webhook\\\\pages\\\\index.js\",\n                            lineNumber: 84,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            children: \"Webhook payload: \"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\WebstormProjects\\\\NextJs\\\\Projects\\\\challenges\\\\webhook\\\\pages\\\\index.js\",\n                            lineNumber: 85,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"url\",\n                            ...register(\"url\")\n                        }, void 0, false, {\n                            fileName: \"C:\\\\WebstormProjects\\\\NextJs\\\\Projects\\\\challenges\\\\webhook\\\\pages\\\\index.js\",\n                            lineNumber: 86,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\WebstormProjects\\\\NextJs\\\\Projects\\\\challenges\\\\webhook\\\\pages\\\\index.js\",\n                    lineNumber: 82,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                    fileName: \"C:\\\\WebstormProjects\\\\NextJs\\\\Projects\\\\challenges\\\\webhook\\\\pages\\\\index.js\",\n                    lineNumber: 88,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                    fileName: \"C:\\\\WebstormProjects\\\\NextJs\\\\Projects\\\\challenges\\\\webhook\\\\pages\\\\index.js\",\n                    lineNumber: 88,\n                    columnNumber: 22\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"submit\",\n                    value: \"Purchase\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\WebstormProjects\\\\NextJs\\\\Projects\\\\challenges\\\\webhook\\\\pages\\\\index.js\",\n                    lineNumber: 89,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                    fileName: \"C:\\\\WebstormProjects\\\\NextJs\\\\Projects\\\\challenges\\\\webhook\\\\pages\\\\index.js\",\n                    lineNumber: 90,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                    fileName: \"C:\\\\WebstormProjects\\\\NextJs\\\\Projects\\\\challenges\\\\webhook\\\\pages\\\\index.js\",\n                    lineNumber: 91,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_table__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    data: results\n                }, void 0, false, {\n                    fileName: \"C:\\\\WebstormProjects\\\\NextJs\\\\Projects\\\\challenges\\\\webhook\\\\pages\\\\index.js\",\n                    lineNumber: 92,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\WebstormProjects\\\\NextJs\\\\Projects\\\\challenges\\\\webhook\\\\pages\\\\index.js\",\n            lineNumber: 75,\n            columnNumber: 13\n        }, this)\n    }, void 0, false);\n};\nasync function getStaticProps() {\n    return {\n        props: {}\n    };\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBd0M7QUFDZDtBQUNjO0FBQ2Q7QUFFMUIsTUFBTUksUUFBUSxHQUFHLE9BQU9DLElBQUksR0FBSztJQUU3QixPQUFRQSxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQ3JCLEtBQUssTUFBTTtZQUFFQSxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsR0FBRyxDQUFDO1lBQUMsTUFBTTtRQUN4QyxLQUFLLFFBQVE7WUFBRUEsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLElBQUksQ0FBQztZQUFDLE1BQU07UUFDM0MsS0FBSyxNQUFNO1lBQUVBLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxHQUFHLENBQUM7WUFBQyxNQUFNO0tBQzNDO0lBRUQsU0FBU0MsUUFBUSxHQUFFO1FBQ2YsT0FBT0wsaURBQVUsQ0FBQyxXQUFXLEVBQUVJLElBQUksQ0FBQyxDQUFDO0tBQ3hDO0lBRUQsU0FBU0csYUFBYSxHQUFFO1FBRXBCLE1BQU1DLE9BQU8sR0FBR0MsSUFBSSxDQUFDQyxTQUFTLENBQUM7WUFDM0JDLE9BQU8sRUFBRSxPQUFPO1lBQ2hCQyxLQUFLLEVBQUUsVUFBVTtZQUNqQkMsWUFBWSxFQUFFLElBQUlDLElBQUksRUFBRTtZQUN4QkMsT0FBTyxFQUFFLENBQUMsRUFBRSxFQUFFWCxJQUFJLENBQUNZLFNBQVMsQ0FBQyxrQkFBa0IsQ0FBQztZQUNoRFosSUFBSSxFQUFFO2dCQUNGWSxTQUFTLEVBQUVaLElBQUksQ0FBQ1ksU0FBUztnQkFDekJDLFVBQVUsRUFBRWIsSUFBSSxDQUFDYyxLQUFLO2FBQ3pCO1NBQ0osQ0FBQztRQUVGLE9BQU9sQiw0Q0FBSyxDQUFDO1lBQ1RtQixNQUFNLEVBQUUsTUFBTTtZQUNkQyxHQUFHLEVBQUVoQixJQUFJLENBQUNnQixHQUFHO1lBQ2JDLE9BQU8sRUFBRTtnQkFBQyxjQUFjLEVBQUUsa0JBQWtCO2FBQUM7WUFDN0NqQixJQUFJLEVBQUVJLE9BQU87U0FDaEIsQ0FBQztLQUNMO0lBRURjLE9BQU8sQ0FDRkMsR0FBRyxDQUFDO1FBQUNsQixRQUFRLEVBQUU7UUFBRUUsYUFBYSxFQUFFO0tBQUMsQ0FBQyxDQUNsQ2lCLElBQUksQ0FBQ0MsQ0FBQUEsT0FBTyxHQUFJO1FBQ2IsdUJBQXVCO1FBQ3ZCLE9BQU87WUFBQ0EsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUFFQSxPQUFPLENBQUMsQ0FBQyxDQUFDO1NBQUMsQ0FBQztLQUNuQyxDQUFDLENBQ0RDLEtBQUssQ0FBQ0MsQ0FBQUEsS0FBSyxHQUFJO1FBQ1oscUJBQXFCO1FBQ3JCLE9BQU87WUFBQ0EsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUFFQSxLQUFLLENBQUMsQ0FBQyxDQUFDO1NBQUMsQ0FBQztLQUMvQixDQUFDO0NBRVQ7QUFFYyxTQUFTQyxJQUFJLEdBQUU7SUFFMUIsTUFBTSxDQUFDSCxPQUFPLEVBQUVJLFVBQVUsQ0FBQyxHQUFHM0IscURBQWMsQ0FBQyxFQUFFLENBQUM7SUFFaEQsTUFBTSxFQUFDNkIsUUFBUSxHQUFFQyxZQUFZLEdBQUMsR0FBR2pDLHdEQUFPLENBQUM7UUFDckNrQyxhQUFhLEVBQUU7WUFDWGpCLFNBQVMsRUFBRSxFQUFFO1lBQ2JFLEtBQUssRUFBRSxFQUFFO1lBQ1RFLEdBQUcsRUFBRSxFQUFFO1NBQ1Y7S0FDSixDQUFDO0lBRUZsQixzREFBZSxDQUFDLElBQU07UUFDbEJGLGdEQUNRLENBQUMsV0FBVyxDQUFDLENBQ2hCd0IsSUFBSSxDQUFDWSxDQUFBQSxHQUFHLEdBQUk7WUFDVCx5QkFBeUI7WUFDekJQLFVBQVUsQ0FBQ08sR0FBRyxDQUFDaEMsSUFBSSxDQUFDQSxJQUFJLENBQUM7U0FDNUIsQ0FBQztLQUNULEVBQUUsRUFBRSxDQUFDO0lBRU4scUJBQ0k7a0JBQ0ksNEVBQUNpQyxNQUFJO1lBQUNDLFFBQVEsRUFBRU4sWUFBWSxDQUFDNUIsQ0FBQUEsSUFBSSxHQUFJRCxRQUFRLENBQUNDLElBQUksQ0FBQyxDQUFDb0IsSUFBSSxDQUFDWSxDQUFBQSxHQUFHLEdBQUksSUFBSSxDQUFDLENBQUM7OzhCQUNsRSw4REFBQ0csUUFBTTtvQkFBRSxHQUFHUixRQUFRLENBQUMsV0FBVyxDQUFDO29CQUFFUyxRQUFROztzQ0FDdkMsOERBQUNDLFFBQU07NEJBQUNDLEtBQUssRUFBQyxFQUFFOzRCQUFDQyxRQUFRO3NDQUFDLFdBQVM7Ozs7O2dDQUFTO3NDQUM1Qyw4REFBQ0YsUUFBTTs0QkFBQ0MsS0FBSyxFQUFDLE1BQU07c0NBQUMsWUFBVTs7Ozs7Z0NBQVM7c0NBQ3hDLDhEQUFDRCxRQUFNOzRCQUFDQyxLQUFLLEVBQUMsTUFBTTtzQ0FBQyxZQUFVOzs7OztnQ0FBUztzQ0FDeEMsOERBQUNELFFBQU07NEJBQUNDLEtBQUssRUFBQyxRQUFRO3NDQUFDLGVBQWE7Ozs7O2dDQUFTOzs7Ozs7d0JBQ3hDOzhCQUNULDhEQUFDRSxPQUFLO29CQUFDQyxPQUFPLEVBQUMsS0FBSzs7c0NBQ2hCLDhEQUFDQyxJQUFFOzs7O2dDQUFFO3NDQUNMLDhEQUFDQSxJQUFFOzs7O2dDQUFFO3NDQUNMLDhEQUFDQyxNQUFJO3NDQUFDLG1CQUFpQjs7Ozs7Z0NBQU87c0NBQzlCLDhEQUFDQyxPQUFLOzRCQUFDQyxJQUFJLEVBQUMsS0FBSzs0QkFBRSxHQUFHbEIsUUFBUSxDQUFDLEtBQUssQ0FBQzs7Ozs7Z0NBQUc7Ozs7Ozt3QkFDcEM7OEJBQ1IsOERBQUNlLElBQUU7Ozs7d0JBQUU7OEJBQUEsOERBQUNBLElBQUU7Ozs7d0JBQUU7OEJBQ1YsOERBQUNFLE9BQUs7b0JBQUNDLElBQUksRUFBQyxRQUFRO29CQUFDUCxLQUFLLEVBQUMsVUFBVTs7Ozs7d0JBQUU7OEJBQ3ZDLDhEQUFDSSxJQUFFOzs7O3dCQUFFOzhCQUNMLDhEQUFDQSxJQUFFOzs7O3dCQUFFOzhCQUNMLDhEQUFDN0MseURBQUs7b0JBQUNHLElBQUksRUFBRXFCLE9BQU87Ozs7O3dCQUFHOzs7Ozs7Z0JBQ3BCO3FCQUNSLENBQ047Q0FDSjtBQUVNLGVBQWV5QixjQUFjLEdBQUc7SUFDbkMsT0FBTztRQUNIQyxLQUFLLEVBQUUsRUFBRTtLQUNaO0NBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlRm9ybX0gZnJvbSBcInJlYWN0LWhvb2stZm9ybVwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBUYWJsZSBmcm9tIFwiLi4vY29tcG9uZW50cy90YWJsZVwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBwb3N0RGF0YSA9IGFzeW5jIChkYXRhKSA9PiB7XHJcblxyXG4gICAgc3dpdGNoIChkYXRhWydpdGVtX25hbWUnXSl7XHJcbiAgICAgICAgY2FzZSAnYm9vayc6IGRhdGFbXCJwcmljZVwiXSA9IDE1MDsgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnbGFwdG9wJzogZGF0YVtcInByaWNlXCJdID0gMTIwMDsgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnYmFsbCc6IGRhdGFbXCJwcmljZVwiXSA9IDIwMDsgYnJlYWs7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2VuZFRvREIoKXtcclxuICAgICAgICByZXR1cm4gYXhpb3MucG9zdCgnL2FwaS91c2VyJywgZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2VuZFRvV2ViaG9vaygpe1xyXG5cclxuICAgICAgICBjb25zdCBwYXlsb2FkID0gSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICB2ZXJzaW9uOiAnMS4wLjAnLFxyXG4gICAgICAgICAgICBldmVudDogJ1B1cmNoYXNlJyxcclxuICAgICAgICAgICAgdHJpZ2dlcmVkX2F0OiBuZXcgRGF0ZSgpLFxyXG4gICAgICAgICAgICBjb250ZW50OiBgQSAke2RhdGEuaXRlbV9uYW1lfSBwdXJjaGFzZSB3YXMgbWFkZWAsXHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIGl0ZW1fbmFtZTogZGF0YS5pdGVtX25hbWUsXHJcbiAgICAgICAgICAgICAgICBpdGVtX3ByaWNlOiBkYXRhLnByaWNlLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgcmV0dXJuIGF4aW9zKHtcclxuICAgICAgICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgICAgICAgIHVybDogZGF0YS51cmwsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHsnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nfSxcclxuICAgICAgICAgICAgZGF0YTogcGF5bG9hZCxcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIFByb21pc2VcclxuICAgICAgICAuYWxsKFtzZW5kVG9EQigpLCBzZW5kVG9XZWJob29rKCldKVxyXG4gICAgICAgIC50aGVuKHJlc3VsdHMgPT4ge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXN1bHRzKVxyXG4gICAgICAgICAgICByZXR1cm4gW3Jlc3VsdHNbMF0sIHJlc3VsdHNbMV1dO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgICAgIHJldHVybiBbZXJyb3JbMF0sIGVycm9yWzFdXTtcclxuICAgICAgICB9KVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpe1xyXG5cclxuICAgIGNvbnN0IFtyZXN1bHRzLCBzZXRSZXN1bHRzXSA9IFJlYWN0LnVzZVN0YXRlKFtdKTtcclxuXHJcbiAgICBjb25zdCB7cmVnaXN0ZXIsIGhhbmRsZVN1Ym1pdH0gPSB1c2VGb3JtKHtcclxuICAgICAgICBkZWZhdWx0VmFsdWVzOiB7XHJcbiAgICAgICAgICAgIGl0ZW1fbmFtZTogXCJcIixcclxuICAgICAgICAgICAgcHJpY2U6IFwiXCIsXHJcbiAgICAgICAgICAgIHVybDogXCJcIixcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgYXhpb3NcclxuICAgICAgICAgICAgLmdldCgnL2FwaS91c2VyJylcclxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJlcy5kYXRhKTtcclxuICAgICAgICAgICAgICAgIHNldFJlc3VsdHMocmVzLmRhdGEuZGF0YSlcclxuICAgICAgICAgICAgfSlcclxuICAgIH0sIFtdKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChkYXRhID0+IHBvc3REYXRhKGRhdGEpLnRoZW4ocmVzID0+IHRydWUpKX0+XHJcbiAgICAgICAgICAgICAgICA8c2VsZWN0IHsuLi5yZWdpc3RlcihcIml0ZW1fbmFtZVwiKX0gcmVxdWlyZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiIGRpc2FibGVkPlNlbGVjdC4uLjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJib29rXCI+Qm9vazogJDIwMDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJiYWxsXCI+QmFsbDogJDE1MDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJsYXB0b3BcIj5MYXB0b3A6ICQxMjAwPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidXJsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPldlYmhvb2sgcGF5bG9hZDogPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidXJsXCIgey4uLnJlZ2lzdGVyKFwidXJsXCIpfS8+XHJcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGJyLz48YnIvPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlB1cmNoYXNlXCIvPlxyXG4gICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICA8VGFibGUgZGF0YT17cmVzdWx0c30vPlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcHJvcHM6IHt9XHJcbiAgICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZUZvcm0iLCJheGlvcyIsIlRhYmxlIiwiUmVhY3QiLCJwb3N0RGF0YSIsImRhdGEiLCJzZW5kVG9EQiIsInBvc3QiLCJzZW5kVG9XZWJob29rIiwicGF5bG9hZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJ2ZXJzaW9uIiwiZXZlbnQiLCJ0cmlnZ2VyZWRfYXQiLCJEYXRlIiwiY29udGVudCIsIml0ZW1fbmFtZSIsIml0ZW1fcHJpY2UiLCJwcmljZSIsIm1ldGhvZCIsInVybCIsImhlYWRlcnMiLCJQcm9taXNlIiwiYWxsIiwidGhlbiIsInJlc3VsdHMiLCJjYXRjaCIsImVycm9yIiwiSG9tZSIsInNldFJlc3VsdHMiLCJ1c2VTdGF0ZSIsInJlZ2lzdGVyIiwiaGFuZGxlU3VibWl0IiwiZGVmYXVsdFZhbHVlcyIsInVzZUVmZmVjdCIsImdldCIsInJlcyIsImZvcm0iLCJvblN1Ym1pdCIsInNlbGVjdCIsInJlcXVpcmVkIiwib3B0aW9uIiwidmFsdWUiLCJkaXNhYmxlZCIsImxhYmVsIiwiaHRtbEZvciIsImJyIiwic3BhbiIsImlucHV0IiwidHlwZSIsImdldFN0YXRpY1Byb3BzIiwicHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react-hook-form":
/*!**********************************!*\
  !*** external "react-hook-form" ***!
  \**********************************/
/***/ ((module) => {

module.exports = import("react-hook-form");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();