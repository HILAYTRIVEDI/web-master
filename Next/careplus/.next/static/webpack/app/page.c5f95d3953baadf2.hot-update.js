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

/***/ "(app-pages-browser)/./components/forms/PatientForm.tsx":
/*!******************************************!*\
  !*** ./components/forms/PatientForm.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   FormFieldType: function() { return /* binding */ FormFieldType; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _hookform_resolvers_zod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @hookform/resolvers/zod */ \"(app-pages-browser)/./node_modules/@hookform/resolvers/zod/dist/zod.mjs\");\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-hook-form */ \"(app-pages-browser)/./node_modules/react-hook-form/dist/index.esm.mjs\");\n/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! zod */ \"(app-pages-browser)/./node_modules/zod/lib/index.mjs\");\n/* harmony import */ var _components_ui_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/form */ \"(app-pages-browser)/./components/ui/form.tsx\");\n/* harmony import */ var _CustomFormField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../CustomFormField */ \"(app-pages-browser)/./components/CustomFormField.tsx\");\n/* harmony import */ var _SubmitButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../SubmitButton */ \"(app-pages-browser)/./components/SubmitButton.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _lib_actions_patient_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/lib/actions/patient.actions */ \"(app-pages-browser)/./lib/actions/patient.actions.ts\");\n/* __next_internal_client_entry_do_not_use__ FormFieldType,default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nconst formSchema = zod__WEBPACK_IMPORTED_MODULE_8__.z.object({\n    name: zod__WEBPACK_IMPORTED_MODULE_8__.z.string().min(2, {\n        message: \"Full name must be at least 2 characters.\"\n    }),\n    email: zod__WEBPACK_IMPORTED_MODULE_8__.z.string().email({\n        message: \"Please enter a valid email address.\"\n    }),\n    phone: zod__WEBPACK_IMPORTED_MODULE_8__.z.string().regex(/^\\+[0-9]{2}\\s[0-9]{3}\\s[0-9]{3}\\s[0-9]{4}$/)\n});\nvar FormFieldType;\n(function(FormFieldType) {\n    FormFieldType[\"INPUT\"] = \"input\";\n    FormFieldType[\"CHECKBOX\"] = \"checkbox\";\n    FormFieldType[\"EMAIL\"] = \"email\";\n    FormFieldType[\"PHONE_INPUT\"] = \"phoneInput\";\n    FormFieldType[\"TEXTAREA\"] = \"textarea\";\n    FormFieldType[\"DATE_PICKER\"] = \"datePicker\";\n    FormFieldType[\"SELECT\"] = \"select\";\n    FormFieldType[\"SKELETON\"] = \"skeleton\";\n})(FormFieldType || (FormFieldType = {}));\nconst PatientForm = ()=>{\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\n    const form = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_9__.useForm)({\n        resolver: (0,_hookform_resolvers_zod__WEBPACK_IMPORTED_MODULE_1__.zodResolver)(formSchema),\n        defaultValues: {\n            name: \"\",\n            email: \"\",\n            phone: \"\"\n        }\n    });\n    async function onSubmit(values) {\n        setIsLoading(true);\n        try {\n            const userData = {\n                name: values.name,\n                email: values.email\n            };\n            const user = await (0,_lib_actions_patient_actions__WEBPACK_IMPORTED_MODULE_7__.createUser)(userData);\n            console.log(user);\n        // if(user){\n        //     router.push(`/patients/${user.id}/register`)\n        // }\n        } catch (error) {\n            console.log(error);\n        } finally{\n            setIsLoading(false);\n        }\n    }\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_form__WEBPACK_IMPORTED_MODULE_2__.Form, {\n        ...form,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            onSubmit: form.handleSubmit(onSubmit),\n            className: \"space-y-6\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                    className: \"flex flex-col my-8\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-4xl font-bold\",\n                            children: \"Hi there, ....\"\n                        }, void 0, false, {\n                            fileName: \"/Users/hilaytrivedi/Desktop/PR/Web Master/Next/careplus/components/forms/PatientForm.tsx\",\n                            lineNumber: 85,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"mt-5 text-lg -tracking-tighter\",\n                            children: \"Get Started with Appointments.\"\n                        }, void 0, false, {\n                            fileName: \"/Users/hilaytrivedi/Desktop/PR/Web Master/Next/careplus/components/forms/PatientForm.tsx\",\n                            lineNumber: 86,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/hilaytrivedi/Desktop/PR/Web Master/Next/careplus/components/forms/PatientForm.tsx\",\n                    lineNumber: 84,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CustomFormField__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    formFieldType: \"input\",\n                    control: form.control,\n                    name: \"name\",\n                    label: \"Full name\",\n                    placeholder: \"John Doe\",\n                    iconSrc: \"/assets/icons/user.svg\",\n                    iconAlt: \"user\"\n                }, void 0, false, {\n                    fileName: \"/Users/hilaytrivedi/Desktop/PR/Web Master/Next/careplus/components/forms/PatientForm.tsx\",\n                    lineNumber: 88,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CustomFormField__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    formFieldType: \"input\",\n                    control: form.control,\n                    name: \"email\",\n                    label: \"Email\",\n                    placeholder: \"johndoe@gmail.com\",\n                    iconSrc: \"/assets/icons/email.svg\",\n                    iconAlt: \"email\"\n                }, void 0, false, {\n                    fileName: \"/Users/hilaytrivedi/Desktop/PR/Web Master/Next/careplus/components/forms/PatientForm.tsx\",\n                    lineNumber: 98,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SubmitButton__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    isLoading: isLoading,\n                    children: \"Get Started\"\n                }, void 0, false, {\n                    fileName: \"/Users/hilaytrivedi/Desktop/PR/Web Master/Next/careplus/components/forms/PatientForm.tsx\",\n                    lineNumber: 107,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/hilaytrivedi/Desktop/PR/Web Master/Next/careplus/components/forms/PatientForm.tsx\",\n            lineNumber: 83,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/hilaytrivedi/Desktop/PR/Web Master/Next/careplus/components/forms/PatientForm.tsx\",\n        lineNumber: 82,\n        columnNumber: 9\n    }, undefined);\n};\n_s(PatientForm, \"nAM8ATctYaRU2ff/VD1rcPrmE7s=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_6__.useRouter,\n        react_hook_form__WEBPACK_IMPORTED_MODULE_9__.useForm\n    ];\n});\n_c = PatientForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PatientForm);\nvar _c;\n$RefreshReg$(_c, \"PatientForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvZm9ybXMvUGF0aWVudEZvcm0udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR3FEO0FBQ1o7QUFDbEI7QUFLTTtBQUNtQjtBQUNOO0FBQ1Y7QUFDVztBQUNlO0FBRzFELE1BQU1TLGFBQWFQLGtDQUFDQSxDQUFDUSxNQUFNLENBQUM7SUFDeEJDLE1BQU1ULGtDQUFDQSxDQUFDVSxNQUFNLEdBQUdDLEdBQUcsQ0FBQyxHQUFHO1FBQ3BCQyxTQUFTO0lBQ2I7SUFDQUMsT0FBT2Isa0NBQUNBLENBQUNVLE1BQU0sR0FBR0csS0FBSyxDQUFDO1FBQ3BCRCxTQUFTO0lBQ2I7SUFDQUUsT0FBT2Qsa0NBQUNBLENBQUNVLE1BQU0sR0FBR0ssS0FBSyxDQUFDO0FBQzVCOztVQUVZQzs7Ozs7Ozs7O0dBQUFBLGtCQUFBQTtBQVdaLE1BQU1DLGNBQWM7O0lBR2hCLE1BQU1DLFNBQVNiLDBEQUFTQTtJQUV4QixNQUFNYyxPQUFPcEIsd0RBQU9BLENBQTZCO1FBQzdDcUIsVUFBVXRCLG9FQUFXQSxDQUFDUztRQUN0QmMsZUFBZTtZQUNYWixNQUFNO1lBQ05JLE9BQU87WUFDUEMsT0FBTztRQUNYO0lBRUo7SUFFQSxlQUFlUSxTQUFTQyxNQUFrQztRQUV0REMsYUFBYTtRQUViLElBQUc7WUFDQyxNQUFNQyxXQUFXO2dCQUFFaEIsTUFBTWMsT0FBT2QsSUFBSTtnQkFBRUksT0FBT1UsT0FBT1YsS0FBSztZQUFDO1lBRTFELE1BQU1hLE9BQU8sTUFBTXBCLHdFQUFVQSxDQUFDbUI7WUFFOUJFLFFBQVFDLEdBQUcsQ0FBQ0Y7UUFHWixZQUFZO1FBQ1osbURBQW1EO1FBQ25ELElBQUk7UUFDUixFQUNBLE9BQU1HLE9BQU07WUFDUkYsUUFBUUMsR0FBRyxDQUFDQztRQUNoQixTQUNPO1lBQ0hMLGFBQWE7UUFDakI7SUFDSjtJQUVBLE1BQU0sQ0FBQ00sV0FBV04sYUFBYSxHQUFHcEIsK0NBQVFBLENBQUM7SUFFM0MscUJBQ0ksOERBQUNILHFEQUFJQTtRQUFFLEdBQUdrQixJQUFJO2tCQUNWLDRFQUFDQTtZQUFLRyxVQUFVSCxLQUFLWSxZQUFZLENBQUNUO1lBQVdVLFdBQVU7OzhCQUNuRCw4REFBQ0M7b0JBQVFELFdBQVU7O3NDQUNmLDhEQUFDRTs0QkFBR0YsV0FBVTtzQ0FBcUI7Ozs7OztzQ0FDbkMsOERBQUNHOzRCQUFFSCxXQUFVO3NDQUFpQzs7Ozs7Ozs7Ozs7OzhCQUVsRCw4REFBQzlCLHdEQUFlQTtvQkFDWmtDLGFBQWE7b0JBQ2JDLFNBQVNsQixLQUFLa0IsT0FBTztvQkFDckI1QixNQUFLO29CQUNMNkIsT0FBTTtvQkFDTkMsYUFBWTtvQkFDWkMsU0FBUTtvQkFDUkMsU0FBUTs7Ozs7OzhCQUdaLDhEQUFDdkMsd0RBQWVBO29CQUNaa0MsYUFBYTtvQkFDYkMsU0FBU2xCLEtBQUtrQixPQUFPO29CQUNyQjVCLE1BQUs7b0JBQ0w2QixPQUFNO29CQUNOQyxhQUFZO29CQUNaQyxTQUFRO29CQUNSQyxTQUFROzs7Ozs7OEJBRVosOERBQUN0QyxxREFBWUE7b0JBQUMyQixXQUFXQTs4QkFBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNcEQ7R0F6RU1iOztRQUdhWixzREFBU0E7UUFFWE4sb0RBQU9BOzs7S0FMbEJrQjtBQTJFTiwrREFBZUEsV0FBV0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2Zvcm1zL1BhdGllbnRGb3JtLnRzeD81OWVjIl0sInNvdXJjZXNDb250ZW50IjpbIlxuXCJ1c2UgY2xpZW50XCJcblxuaW1wb3J0IHsgem9kUmVzb2x2ZXIgfSBmcm9tIFwiQGhvb2tmb3JtL3Jlc29sdmVycy96b2RcIlxuaW1wb3J0IHsgdXNlRm9ybSB9IGZyb20gXCJyZWFjdC1ob29rLWZvcm1cIlxuaW1wb3J0IHsgeiB9IGZyb20gXCJ6b2RcIlxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9idXR0b25cIlxuaW1wb3J0XG57XG4gICAgRm9ybVxufSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2Zvcm1cIlxuaW1wb3J0IEN1c3RvbUZvcm1GaWVsZCBmcm9tIFwiLi4vQ3VzdG9tRm9ybUZpZWxkXCJcbmltcG9ydCBTdWJtaXRCdXR0b24gZnJvbSBcIi4uL1N1Ym1pdEJ1dHRvblwiXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCJcbmltcG9ydCB7IGNyZWF0ZVVzZXIgfSBmcm9tIFwiQC9saWIvYWN0aW9ucy9wYXRpZW50LmFjdGlvbnNcIlxuaW1wb3J0IHsgbG9nIH0gZnJvbSBcImNvbnNvbGVcIlxuXG5jb25zdCBmb3JtU2NoZW1hID0gei5vYmplY3Qoe1xuICAgIG5hbWU6IHouc3RyaW5nKCkubWluKDIsIHtcbiAgICAgICAgbWVzc2FnZTogXCJGdWxsIG5hbWUgbXVzdCBiZSBhdCBsZWFzdCAyIGNoYXJhY3RlcnMuXCIsXG4gICAgfSksXG4gICAgZW1haWw6IHouc3RyaW5nKCkuZW1haWwoe1xuICAgICAgICBtZXNzYWdlOiBcIlBsZWFzZSBlbnRlciBhIHZhbGlkIGVtYWlsIGFkZHJlc3MuXCIsXG4gICAgfSksXG4gICAgcGhvbmU6IHouc3RyaW5nKCkucmVnZXgoL15cXCtbMC05XXsyfVxcc1swLTldezN9XFxzWzAtOV17M31cXHNbMC05XXs0fSQvKSxcbn0pXG5cbmV4cG9ydCBlbnVtIEZvcm1GaWVsZFR5cGV7XG4gICAgSU5QVVQgPSBcImlucHV0XCIsXG4gICAgQ0hFQ0tCT1ggPSBcImNoZWNrYm94XCIsXG4gICAgRU1BSUwgPSBcImVtYWlsXCIsXG4gICAgUEhPTkVfSU5QVVQgPSBcInBob25lSW5wdXRcIixcbiAgICBURVhUQVJFQSA9IFwidGV4dGFyZWFcIixcbiAgICBEQVRFX1BJQ0tFUiA9IFwiZGF0ZVBpY2tlclwiLFxuICAgIFNFTEVDVCA9IFwic2VsZWN0XCIsXG4gICAgU0tFTEVUT04gPSBcInNrZWxldG9uXCIsXG59XG5cbmNvbnN0IFBhdGllbnRGb3JtID0gKCkgPT5cbntcblxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gICAgY29uc3QgZm9ybSA9IHVzZUZvcm08ei5pbmZlcjx0eXBlb2YgZm9ybVNjaGVtYT4+KHtcbiAgICAgICAgcmVzb2x2ZXI6IHpvZFJlc29sdmVyKGZvcm1TY2hlbWEpLFxuICAgICAgICBkZWZhdWx0VmFsdWVzOiB7XG4gICAgICAgICAgICBuYW1lOiBcIlwiLFxuICAgICAgICAgICAgZW1haWw6IFwiXCIsXG4gICAgICAgICAgICBwaG9uZTogXCJcIixcbiAgICAgICAgfSxcblxuICAgIH0pXG5cbiAgICBhc3luYyBmdW5jdGlvbiBvblN1Ym1pdCh2YWx1ZXM6IHouaW5mZXI8dHlwZW9mIGZvcm1TY2hlbWE+KVxuICAgIHtcbiAgICAgICAgc2V0SXNMb2FkaW5nKHRydWUpO1xuXG4gICAgICAgIHRyeXtcbiAgICAgICAgICAgIGNvbnN0IHVzZXJEYXRhID0geyBuYW1lOiB2YWx1ZXMubmFtZSwgZW1haWw6IHZhbHVlcy5lbWFpbCB9XG5cbiAgICAgICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBjcmVhdGVVc2VyKHVzZXJEYXRhKTtcblxuICAgICAgICAgICAgY29uc29sZS5sb2codXNlcik7XG4gICAgICAgICAgICBcblxuICAgICAgICAgICAgLy8gaWYodXNlcil7XG4gICAgICAgICAgICAvLyAgICAgcm91dGVyLnB1c2goYC9wYXRpZW50cy8ke3VzZXIuaWR9L3JlZ2lzdGVyYClcbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaChlcnJvcil7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgICAgfVxuICAgICAgICBmaW5hbGx5e1xuICAgICAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPEZvcm0gey4uLmZvcm19PlxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2Zvcm0uaGFuZGxlU3VibWl0KG9uU3VibWl0KX0gY2xhc3NOYW1lPVwic3BhY2UteS02XCI+XG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBteS04XCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBmb250LWJvbGRcIj5IaSB0aGVyZSwgLi4uLjwvaDE+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm10LTUgdGV4dC1sZyAtdHJhY2tpbmctdGlnaHRlclwiPkdldCBTdGFydGVkIHdpdGggQXBwb2ludG1lbnRzLjwvcD5cbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICAgICAgPEN1c3RvbUZvcm1GaWVsZFxuICAgICAgICAgICAgICAgICAgICBmb3JtRmllbGRUeXBlPXtGb3JtRmllbGRUeXBlLklOUFVUfVxuICAgICAgICAgICAgICAgICAgICBjb250cm9sPXtmb3JtLmNvbnRyb2x9XG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJGdWxsIG5hbWVcIlxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkpvaG4gRG9lXCJcbiAgICAgICAgICAgICAgICAgICAgaWNvblNyYz1cIi9hc3NldHMvaWNvbnMvdXNlci5zdmdcIlxuICAgICAgICAgICAgICAgICAgICBpY29uQWx0PVwidXNlclwiXG4gICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgIDxDdXN0b21Gb3JtRmllbGRcbiAgICAgICAgICAgICAgICAgICAgZm9ybUZpZWxkVHlwZT17Rm9ybUZpZWxkVHlwZS5JTlBVVH1cbiAgICAgICAgICAgICAgICAgICAgY29udHJvbD17Zm9ybS5jb250cm9sfVxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJqb2huZG9lQGdtYWlsLmNvbVwiXG4gICAgICAgICAgICAgICAgICAgIGljb25TcmM9XCIvYXNzZXRzL2ljb25zL2VtYWlsLnN2Z1wiXG4gICAgICAgICAgICAgICAgICAgIGljb25BbHQ9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8U3VibWl0QnV0dG9uIGlzTG9hZGluZz17aXNMb2FkaW5nfT5cbiAgICAgICAgICAgICAgICAgICAgR2V0IFN0YXJ0ZWRcbiAgICAgICAgICAgICAgICA8L1N1Ym1pdEJ1dHRvbj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9Gb3JtPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUGF0aWVudEZvcm0iXSwibmFtZXMiOlsiem9kUmVzb2x2ZXIiLCJ1c2VGb3JtIiwieiIsIkZvcm0iLCJDdXN0b21Gb3JtRmllbGQiLCJTdWJtaXRCdXR0b24iLCJ1c2VTdGF0ZSIsInVzZVJvdXRlciIsImNyZWF0ZVVzZXIiLCJmb3JtU2NoZW1hIiwib2JqZWN0IiwibmFtZSIsInN0cmluZyIsIm1pbiIsIm1lc3NhZ2UiLCJlbWFpbCIsInBob25lIiwicmVnZXgiLCJGb3JtRmllbGRUeXBlIiwiUGF0aWVudEZvcm0iLCJyb3V0ZXIiLCJmb3JtIiwicmVzb2x2ZXIiLCJkZWZhdWx0VmFsdWVzIiwib25TdWJtaXQiLCJ2YWx1ZXMiLCJzZXRJc0xvYWRpbmciLCJ1c2VyRGF0YSIsInVzZXIiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJpc0xvYWRpbmciLCJoYW5kbGVTdWJtaXQiLCJjbGFzc05hbWUiLCJzZWN0aW9uIiwiaDEiLCJwIiwiZm9ybUZpZWxkVHlwZSIsImNvbnRyb2wiLCJsYWJlbCIsInBsYWNlaG9sZGVyIiwiaWNvblNyYyIsImljb25BbHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/forms/PatientForm.tsx\n"));

/***/ })

});