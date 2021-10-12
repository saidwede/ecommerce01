exports.id = 9427;
exports.ids = [9427];
exports.modules = {

/***/ 9427:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_useGetProducts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2639);
/* harmony import */ var _hooks_useProductGroup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1274);






const LatestProducts = ({
  collectionSlug
}) => {
  const {
    loading,
    productItems,
    getProducts
  } = (0,_hooks_useGetProducts__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)();
  const {
    withCarousel
  } = (0,_hooks_useProductGroup__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)();
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    getProducts({
      _limit: 6
    });
  }, [collectionSlug]);
  const products = withCarousel(productItems, loading);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
    className: "ps-section--standard ps-latest-products",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "container",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: "ps-section__header",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", {
          children: "Latest Products"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: "ps-section__content",
        children: products
      })]
    })
  });
};

/* harmony default export */ __webpack_exports__["Z"] = (LatestProducts);

/***/ })

};
;