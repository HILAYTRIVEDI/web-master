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

/***/ "(app-pages-browser)/./lib/appwrite.config.ts":
/*!********************************!*\
  !*** ./lib/appwrite.config.ts ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   API_KEY: function() { return /* binding */ API_KEY; },\n/* harmony export */   APPOINTMENT_COLLECTION_ID: function() { return /* binding */ APPOINTMENT_COLLECTION_ID; },\n/* harmony export */   DATABASE_ID: function() { return /* binding */ DATABASE_ID; },\n/* harmony export */   DOCTOR_COLLECTION_ID: function() { return /* binding */ DOCTOR_COLLECTION_ID; },\n/* harmony export */   NEXT_PUBLIC_BUCK: function() { return /* binding */ NEXT_PUBLIC_BUCK; },\n/* harmony export */   NEXT_PUBLIC_ENDPOINT: function() { return /* binding */ NEXT_PUBLIC_ENDPOINT; },\n/* harmony export */   PATIENT_COLLECTION_ID: function() { return /* binding */ PATIENT_COLLECTION_ID; },\n/* harmony export */   PROJECT_ID: function() { return /* binding */ PROJECT_ID; },\n/* harmony export */   database: function() { return /* binding */ database; },\n/* harmony export */   messaging: function() { return /* binding */ messaging; },\n/* harmony export */   storage: function() { return /* binding */ storage; },\n/* harmony export */   users: function() { return /* binding */ users; }\n/* harmony export */ });\n/* harmony import */ var node_appwrite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! node-appwrite */ \"(app-pages-browser)/./node_modules/node-appwrite/dist/index.mjs\");\n/* provided dependency */ var process = __webpack_require__(/*! process */ \"(app-pages-browser)/./node_modules/next/dist/build/polyfills/process.js\");\n\nconst { PROJECT_ID, API_KEY, DATABASE_ID, PATIENT_COLLECTION_ID, DOCTOR_COLLECTION_ID, APPOINTMENT_COLLECTION_ID, NEXT_PUBLIC_ENDPOINT, NEXT_PUBLIC_BUCK } = process.env;\nconst client = new node_appwrite__WEBPACK_IMPORTED_MODULE_0__.Client();\nclient.setEndpoint(NEXT_PUBLIC_ENDPOINT).setProject(PROJECT_ID).setKey(API_KEY);\nconst database = new node_appwrite__WEBPACK_IMPORTED_MODULE_0__.Databases(client);\nconst storage = new node_appwrite__WEBPACK_IMPORTED_MODULE_0__.Storage(client);\nconst users = new node_appwrite__WEBPACK_IMPORTED_MODULE_0__.Users(client);\nconst messaging = new node_appwrite__WEBPACK_IMPORTED_MODULE_0__.Messaging(client);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2xpYi9hcHB3cml0ZS5jb25maWcudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBb0M7QUFFN0IsTUFBTSxFQUNUQyxVQUFVLEVBQUVDLE9BQU8sRUFBRUMsV0FBVyxFQUFFQyxxQkFBcUIsRUFBRUMsb0JBQW9CLEVBQUVDLHlCQUF5QixFQUFFQyxvQkFBb0IsRUFBRUMsZ0JBQWdCLEVBQ25KLEdBQUdDLE9BQU9BLENBQUNDLEdBQUcsQ0FBQztBQUdoQixNQUFNQyxTQUFTLElBQUlYLGlEQUFVO0FBRTdCVyxPQUFPRSxXQUFXLENBQUNOLHNCQUNkTyxVQUFVLENBQUNiLFlBQ1hjLE1BQU0sQ0FBQ2I7QUFFTCxNQUFNYyxXQUFXLElBQUloQixvREFBYSxDQUFDVyxRQUFRO0FBQzNDLE1BQU1PLFVBQVUsSUFBSWxCLGtEQUFXLENBQUNXLFFBQVE7QUFDeEMsTUFBTVMsUUFBUSxJQUFJcEIsZ0RBQVMsQ0FBQ1csUUFBUTtBQUNwQyxNQUFNVyxZQUFZLElBQUl0QixvREFBYSxDQUFDVyxRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2xpYi9hcHB3cml0ZS5jb25maWcudHM/MGRmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBzZGsgZnJvbSAnbm9kZS1hcHB3cml0ZSdcblxuZXhwb3J0IGNvbnN0IHtcbiAgICBQUk9KRUNUX0lELCBBUElfS0VZLCBEQVRBQkFTRV9JRCwgUEFUSUVOVF9DT0xMRUNUSU9OX0lELCBET0NUT1JfQ09MTEVDVElPTl9JRCwgQVBQT0lOVE1FTlRfQ09MTEVDVElPTl9JRCwgTkVYVF9QVUJMSUNfRU5EUE9JTlQsIE5FWFRfUFVCTElDX0JVQ0tcbn0gPSBwcm9jZXNzLmVudjtcblxuXG5jb25zdCBjbGllbnQgPSBuZXcgc2RrLkNsaWVudCgpO1xuXG5jbGllbnQuc2V0RW5kcG9pbnQoTkVYVF9QVUJMSUNfRU5EUE9JTlQhKVxuICAgIC5zZXRQcm9qZWN0KFBST0pFQ1RfSUQhKVxuICAgIC5zZXRLZXkoQVBJX0tFWSEpO1xuXG5leHBvcnQgY29uc3QgZGF0YWJhc2UgPSBuZXcgc2RrLkRhdGFiYXNlcyhjbGllbnQpO1xuZXhwb3J0IGNvbnN0IHN0b3JhZ2UgPSBuZXcgc2RrLlN0b3JhZ2UoY2xpZW50KTtcbmV4cG9ydCBjb25zdCB1c2VycyA9IG5ldyBzZGsuVXNlcnMoY2xpZW50KTtcbmV4cG9ydCBjb25zdCBtZXNzYWdpbmcgPSBuZXcgc2RrLk1lc3NhZ2luZyhjbGllbnQpOyJdLCJuYW1lcyI6WyJzZGsiLCJQUk9KRUNUX0lEIiwiQVBJX0tFWSIsIkRBVEFCQVNFX0lEIiwiUEFUSUVOVF9DT0xMRUNUSU9OX0lEIiwiRE9DVE9SX0NPTExFQ1RJT05fSUQiLCJBUFBPSU5UTUVOVF9DT0xMRUNUSU9OX0lEIiwiTkVYVF9QVUJMSUNfRU5EUE9JTlQiLCJORVhUX1BVQkxJQ19CVUNLIiwicHJvY2VzcyIsImVudiIsImNsaWVudCIsIkNsaWVudCIsInNldEVuZHBvaW50Iiwic2V0UHJvamVjdCIsInNldEtleSIsImRhdGFiYXNlIiwiRGF0YWJhc2VzIiwic3RvcmFnZSIsIlN0b3JhZ2UiLCJ1c2VycyIsIlVzZXJzIiwibWVzc2FnaW5nIiwiTWVzc2FnaW5nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./lib/appwrite.config.ts\n"));

/***/ })

});