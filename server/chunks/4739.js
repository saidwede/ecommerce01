exports.id = 4739;
exports.ids = [4739];
exports.modules = {

/***/ 2230:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);




const BreadCrumb = ({
  breacrumb
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("ul", {
    className: "breadcrumb",
    children: breacrumb.map(item => {
      if (!item.url) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", {
          children: item.text
        }, item.id);
      } else {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(next_link__WEBPACK_IMPORTED_MODULE_2__.default, {
            href: item.url,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", {
              children: item.text
            })
          })
        }, item.text);
      }
    })
  });
};

/* harmony default export */ __webpack_exports__["Z"] = (BreadCrumb);

/***/ }),

/***/ 3878:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_useGetProducts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2639);
/* harmony import */ var _components_elements_products_Product__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1918);
/* harmony import */ var _utilities_common_helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7864);
/* harmony import */ var _components_elements_skeletons_SkeletonProduct__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8697);








const WidgetShopRelatedProducts = () => {
  const {
    loading,
    productItems,
    getProducts
  } = (0,_hooks_useGetProducts__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)();
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    getProducts({
      _limit: 2
    });
  }, []);
  let productsView;

  if (productItems && productItems.length > 0) {
    productsView = productItems.map(item => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_elements_products_Product__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
      product: item
    }, item.id));
  } else {
    if (loading) {
      const items = (0,_utilities_common_helpers__WEBPACK_IMPORTED_MODULE_5__/* .generateTempArray */ .Zn)(4).map(item => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_elements_skeletons_SkeletonProduct__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {}, item));
      productsView = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: "ps-shop-items with-skeleton",
        children: items
      });
    } else {
      productsView = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
        children: "No product found."
      });
    }
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: "widget widget--shop widget--shop-related-products",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h4", {
      className: "widget__heading",
      children: "Related products"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
      className: "widget__content",
      children: productsView
    })]
  });
};

/* harmony default export */ __webpack_exports__["Z"] = (WidgetShopRelatedProducts);

/***/ })

};
;