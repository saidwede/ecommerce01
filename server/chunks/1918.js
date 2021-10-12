exports.id = 1918;
exports.ids = [1918];
exports.modules = {

/***/ 1918:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var _components_elements_products_modules_ModuleProductActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(872);
/* harmony import */ var _hooks_useProduct__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6411);
/* harmony import */ var _components_elements_products_modules_ModuleProductRating__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3164);
/* harmony import */ var _components_elements_products_modules_ModuleProductImages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7312);









const Product = ({
  product
}) => {
  const {
    price,
    badges
  } = (0,_hooks_useProduct__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: "ps-product ps-product--grid",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "ps-product__thumbnail",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(next_link__WEBPACK_IMPORTED_MODULE_2__.default, {
        href: "/product/[id]",
        as: `/product/${product.id}`,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", {
          className: "ps-product__overlay"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_elements_products_modules_ModuleProductImages__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
        product: product
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_elements_products_modules_ModuleProductActions__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
        product: product
      }), badges(product)]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "ps-product__content",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h4", {
        className: "ps-product__title",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(next_link__WEBPACK_IMPORTED_MODULE_2__.default, {
          href: "/product/[id]",
          as: `/product/${product.id}`,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", {
            children: product.name
          })
        })
      }), price(product), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_elements_products_modules_ModuleProductRating__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {})]
    })]
  });
};

/* harmony default export */ __webpack_exports__["Z"] = (Product);

/***/ })

};
;