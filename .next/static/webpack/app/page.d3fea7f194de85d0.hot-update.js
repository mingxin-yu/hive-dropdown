"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/singleSelectExample.js":
/*!****************************************!*\
  !*** ./src/app/singleSelectExample.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Dropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Dropdown */ \"(app-pages-browser)/./src/app/Dropdown.js\");\n\nvar _s = $RefreshSig$();\n\n\nfunction SingleSelectExample() {\n    _s();\n    const options = [\n        \"Option 1\",\n        \"Option 2\",\n        \"Option 3\"\n    ];\n    const [selectedOptions, setSelectedOptions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const label = \"Select a Single Option\";\n    const handleOptionChange = (updatedSelectedOptions)=>{\n        setSelectedOptions(updatedSelectedOptions);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"h2\",\n                children: \"Single Select Example\"\n            }, void 0, false, {\n                fileName: \"/Users/mingxinyu/Desktop/hive-dropdown/src/app/singleSelectExample.js\",\n                lineNumber: 15,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Dropdown__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                isDisabled: false,\n                hasWarning: false,\n                isMultiSelect: false,\n                selectedOptions: selectedOptions,\n                options: options,\n                onOptionChange: handleOptionChange,\n                label: label\n            }, void 0, false, {\n                fileName: \"/Users/mingxinyu/Desktop/hive-dropdown/src/app/singleSelectExample.js\",\n                lineNumber: 16,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mingxinyu/Desktop/hive-dropdown/src/app/singleSelectExample.js\",\n        lineNumber: 14,\n        columnNumber: 9\n    }, this);\n}\n_s(SingleSelectExample, \"S24nRharoliKpDmkOrz7zqRL0rI=\");\n_c = SingleSelectExample;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SingleSelectExample);\nvar _c;\n$RefreshReg$(_c, \"SingleSelectExample\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvc2luZ2xlU2VsZWN0RXhhbXBsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQXdDO0FBQ047QUFFbEMsU0FBU0c7O0lBQ0wsTUFBTUMsVUFBVTtRQUFDO1FBQVk7UUFBWTtLQUFXO0lBQ3BELE1BQU0sQ0FBQ0MsaUJBQWlCQyxtQkFBbUIsR0FBR0wsK0NBQVFBLENBQUMsRUFBRTtJQUN6RCxNQUFNTSxRQUFRO0lBRWQsTUFBTUMscUJBQXFCLENBQUNDO1FBQ3hCSCxtQkFBbUJHO0lBQ3ZCO0lBRUEscUJBQ0ksOERBQUNDOzswQkFDRyw4REFBQ0E7Z0JBQUlDLFdBQVU7MEJBQUs7Ozs7OzswQkFDcEIsOERBQUNULGlEQUFRQTtnQkFDTFUsWUFBWTtnQkFDWkMsWUFBWTtnQkFDWkMsZUFBZTtnQkFDZlQsaUJBQWlCQTtnQkFDakJELFNBQVNBO2dCQUNUVyxnQkFBZ0JQO2dCQUNoQkQsT0FBT0E7Ozs7Ozs7Ozs7OztBQUl2QjtHQXZCU0o7S0FBQUE7QUF5QlQsK0RBQWVBLG1CQUFtQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3NpbmdsZVNlbGVjdEV4YW1wbGUuanM/ODY4MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRHJvcGRvd24gZnJvbSAnLi9Ecm9wZG93bic7XG5cbmZ1bmN0aW9uIFNpbmdsZVNlbGVjdEV4YW1wbGUoKSB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IFsnT3B0aW9uIDEnLCAnT3B0aW9uIDInLCAnT3B0aW9uIDMnXTtcbiAgICBjb25zdCBbc2VsZWN0ZWRPcHRpb25zLCBzZXRTZWxlY3RlZE9wdGlvbnNdID0gdXNlU3RhdGUoW10pO1xuICAgIGNvbnN0IGxhYmVsID0gJ1NlbGVjdCBhIFNpbmdsZSBPcHRpb24nO1xuXG4gICAgY29uc3QgaGFuZGxlT3B0aW9uQ2hhbmdlID0gKHVwZGF0ZWRTZWxlY3RlZE9wdGlvbnMpID0+IHtcbiAgICAgICAgc2V0U2VsZWN0ZWRPcHRpb25zKHVwZGF0ZWRTZWxlY3RlZE9wdGlvbnMpO1xuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoMlwiPlNpbmdsZSBTZWxlY3QgRXhhbXBsZTwvZGl2PlxuICAgICAgICAgICAgPERyb3Bkb3duXG4gICAgICAgICAgICAgICAgaXNEaXNhYmxlZD17ZmFsc2V9XG4gICAgICAgICAgICAgICAgaGFzV2FybmluZz17ZmFsc2V9XG4gICAgICAgICAgICAgICAgaXNNdWx0aVNlbGVjdD17ZmFsc2V9XG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRPcHRpb25zPXtzZWxlY3RlZE9wdGlvbnN9XG4gICAgICAgICAgICAgICAgb3B0aW9ucz17b3B0aW9uc31cbiAgICAgICAgICAgICAgICBvbk9wdGlvbkNoYW5nZT17aGFuZGxlT3B0aW9uQ2hhbmdlfVxuICAgICAgICAgICAgICAgIGxhYmVsPXtsYWJlbH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNpbmdsZVNlbGVjdEV4YW1wbGU7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJEcm9wZG93biIsIlNpbmdsZVNlbGVjdEV4YW1wbGUiLCJvcHRpb25zIiwic2VsZWN0ZWRPcHRpb25zIiwic2V0U2VsZWN0ZWRPcHRpb25zIiwibGFiZWwiLCJoYW5kbGVPcHRpb25DaGFuZ2UiLCJ1cGRhdGVkU2VsZWN0ZWRPcHRpb25zIiwiZGl2IiwiY2xhc3NOYW1lIiwiaXNEaXNhYmxlZCIsImhhc1dhcm5pbmciLCJpc011bHRpU2VsZWN0Iiwib25PcHRpb25DaGFuZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/singleSelectExample.js\n"));

/***/ })

});