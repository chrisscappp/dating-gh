"use strict";
(self["webpackChunkdating_app_voenmeh"] = self["webpackChunkdating_app_voenmeh"] || []).push([["src_pages_AnketsPage_ui_AnketsPageDetail_AnketsPageDetail_tsx"],{

/***/ "./src/pages/AnketsPage/ui/AnketsPageDetail/AnketsPageDetail.tsx":
/*!***********************************************************************!*\
  !*** ./src/pages/AnketsPage/ui/AnketsPageDetail/AnketsPageDetail.tsx ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var entity_Anket__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! entity/Anket */ "./src/entity/Anket/index.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var widgets_Page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! widgets/Page */ "./src/widgets/Page/index.ts");
/* harmony import */ var shared_lib_components_DynamicModuleLoader_DynamicModuleLoader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! shared/lib/components/DynamicModuleLoader/DynamicModuleLoader */ "./src/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader.tsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/dist/react-redux.mjs");







var reducers = {
    ankets: entity_Anket__WEBPACK_IMPORTED_MODULE_1__.anketsPageReducer
};
var AnketsPage = function () {
    var section = (0,react_router__WEBPACK_IMPORTED_MODULE_5__.useParams)().sectionType;
    var _a = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), anketsInited = _a[0], setAnketsInited = _a[1];
    var store = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useStore)();
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
        var state = store.getState();
        if (state.ankets) {
            setAnketsInited(true);
        }
    }, [store]);
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_lib_components_DynamicModuleLoader_DynamicModuleLoader__WEBPACK_IMPORTED_MODULE_4__.DynamicModuleLoader, { reducers: reducers, removeAfterUnmount: true, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(widgets_Page__WEBPACK_IMPORTED_MODULE_3__.Page, { children: anketsInited &&
                (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(entity_Anket__WEBPACK_IMPORTED_MODULE_1__.AnketCardList, { sectionId: section }) }) }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react__WEBPACK_IMPORTED_MODULE_2__.memo)(AnketsPage));


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3BhZ2VzX0Fua2V0c1BhZ2VfdWlfQW5rZXRzUGFnZURldGFpbF9BbmtldHNQYWdlRGV0YWlsX3RzeC5jYTM1MzY2ZjYwNzlmNmU2MGUzYy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBZ0Q7QUFDZ0I7QUFDZDtBQUNUO0FBQ0w7QUFDZ0U7QUFDN0Q7QUFDdkM7QUFDQSxZQUFZLDJEQUFpQjtBQUM3QjtBQUNBO0FBQ0Esa0JBQWtCLHVEQUFTO0FBQzNCLGFBQWEsK0NBQVE7QUFDckIsZ0JBQWdCLHFEQUFRO0FBQ3hCLElBQUksZ0RBQVM7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxZQUFZLHNEQUFJLENBQUMsOEdBQW1CLElBQUksd0RBQXdELHNEQUFJLENBQUMsOENBQUksSUFBSTtBQUM3RyxnQkFBZ0Isc0RBQUksQ0FBQyx1REFBYSxJQUFJLG9CQUFvQixHQUFHLEdBQUc7QUFDaEU7QUFDQSxpRUFBZSwyQ0FBSSxZQUFZLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYXRpbmctYXBwLXZvZW5tZWgvLi9zcmMvcGFnZXMvQW5rZXRzUGFnZS91aS9BbmtldHNQYWdlRGV0YWlsL0Fua2V0c1BhZ2VEZXRhaWwudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGpzeCBhcyBfanN4IH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgeyBBbmtldENhcmRMaXN0LCBhbmtldHNQYWdlUmVkdWNlciB9IGZyb20gXCJlbnRpdHkvQW5rZXRcIjtcbmltcG9ydCB7IG1lbW8sIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVBhcmFtcyB9IGZyb20gXCJyZWFjdC1yb3V0ZXJcIjtcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwid2lkZ2V0cy9QYWdlXCI7XG5pbXBvcnQgeyBEeW5hbWljTW9kdWxlTG9hZGVyIH0gZnJvbSBcInNoYXJlZC9saWIvY29tcG9uZW50cy9EeW5hbWljTW9kdWxlTG9hZGVyL0R5bmFtaWNNb2R1bGVMb2FkZXJcIjtcbmltcG9ydCB7IHVzZVN0b3JlIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG52YXIgcmVkdWNlcnMgPSB7XG4gICAgYW5rZXRzOiBhbmtldHNQYWdlUmVkdWNlclxufTtcbnZhciBBbmtldHNQYWdlID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZWN0aW9uID0gdXNlUGFyYW1zKCkuc2VjdGlvblR5cGU7XG4gICAgdmFyIF9hID0gdXNlU3RhdGUoZmFsc2UpLCBhbmtldHNJbml0ZWQgPSBfYVswXSwgc2V0QW5rZXRzSW5pdGVkID0gX2FbMV07XG4gICAgdmFyIHN0b3JlID0gdXNlU3RvcmUoKTtcbiAgICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgc3RhdGUgPSBzdG9yZS5nZXRTdGF0ZSgpO1xuICAgICAgICBpZiAoc3RhdGUuYW5rZXRzKSB7XG4gICAgICAgICAgICBzZXRBbmtldHNJbml0ZWQodHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9LCBbc3RvcmVdKTtcbiAgICByZXR1cm4gKF9qc3goRHluYW1pY01vZHVsZUxvYWRlciwgeyByZWR1Y2VyczogcmVkdWNlcnMsIHJlbW92ZUFmdGVyVW5tb3VudDogdHJ1ZSwgY2hpbGRyZW46IF9qc3goUGFnZSwgeyBjaGlsZHJlbjogYW5rZXRzSW5pdGVkICYmXG4gICAgICAgICAgICAgICAgX2pzeChBbmtldENhcmRMaXN0LCB7IHNlY3Rpb25JZDogc2VjdGlvbiB9KSB9KSB9KSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgbWVtbyhBbmtldHNQYWdlKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==