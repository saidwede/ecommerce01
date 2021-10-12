exports.id = 6021;
exports.ids = [6021];
exports.modules = {

/***/ 6021:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_useGetProducts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2639);
/* harmony import */ var _hooks_useProductGroup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1274);
/* harmony import */ var _components_elements_CountDown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3984);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2156);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(swiper_react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_elements_products_Product__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1918);
/* harmony import */ var _utilities_common_helpers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7864);
/* harmony import */ var _components_elements_carousel_SwiperCarousel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9633);
/* harmony import */ var _components_elements_products_ProductWithAvaiable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7753);












const BestDealOfWeek = ({
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
      _limit: 6,
      on_sale: true
    });
  }, [collectionSlug]);
  let products;

  if (!loading) {
    if (productItems && productItems.length > 0) {
      const items = productItems.map(item => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(swiper_react__WEBPACK_IMPORTED_MODULE_5__.SwiperSlide, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_elements_products_ProductWithAvaiable__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z, {
          product: item
        })
      }, item.id));
      products = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_elements_carousel_SwiperCarousel__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, {
        children: items
      });
    } else {
      products = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
        children: "No product(s) found."
      });
    }
  } else {
    const skeletons = (0,_utilities_common_helpers__WEBPACK_IMPORTED_MODULE_9__/* .generateTempArray */ .Zn)(2).map(item => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
      className: " col-6"
    }, item));
    products = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
      className: "row",
      children: skeletons
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
    className: "ps-section--standard ps-best-deal-of-week",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "container",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "ps-section__header",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", {
          children: "Best Deals of week!"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_elements_CountDown__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
          time: "12 31 2021, 6:00 am",
          format: "MM DD YYYY, h:mm a"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: "ps-section__content",
        children: products
      })]
    })
  });
};

/* harmony default export */ __webpack_exports__["Z"] = (BestDealOfWeek);

/***/ })

};
;