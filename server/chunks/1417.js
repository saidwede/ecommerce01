exports.id = 1417;
exports.ids = [1417];
exports.modules = {

/***/ 1417:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_useGetProducts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2639);
/* harmony import */ var _hooks_useProductGroup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1274);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1664);







const HomeOneFeaturedProducts = ({
  collectionSlug,
  title = "Featured Products",
  showAll = false
}) => {
  const {
    loading,
    productItems,
    getProducts,
    getProductsByCollection
  } = (0,_hooks_useGetProducts__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)();
  const {
    withGrid
  } = (0,_hooks_useProductGroup__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)();
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    getProductsByCollection("featured-products");
    /*getProducts({ _limit: 10 });*/
  }, [collectionSlug]);
  const products = withGrid(productItems, loading);
  let showAllView;

  if (showAll) {
    showAllView = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
      className: "ps-section__bottom",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(next_link__WEBPACK_IMPORTED_MODULE_4__.default, {
        href: "/shop",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", {
          className: "ps-btn ps-btn--outline ps-btn--",
          children: "Show all"
        })
      })
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("section", {
    className: "ps-section--standard ps-featured-products",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "container",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: "ps-section__header",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", {
          children: title
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: "ps-section__content",
        children: products
      }), showAllView]
    })
  });
};

/* harmony default export */ __webpack_exports__["Z"] = (HomeOneFeaturedProducts);

/***/ })

};
;