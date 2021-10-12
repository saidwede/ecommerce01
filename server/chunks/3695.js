exports.id = 3695;
exports.ids = [3695];
exports.modules = {

/***/ 3695:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_useGetProducts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2639);
/* harmony import */ var _hooks_useProductGroup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1274);





const categories = [{
  id: 1,
  text: "Blood pressure",
  collectionSlug: "top-5-best-sellers"
}, {
  id: 2,
  text: "Face masks",
  collectionSlug: "featured-products"
}, {
  id: 3,
  text: "Stomatology",
  collectionSlug: "best-deal-of-week"
}];

const TopSellers = ({
  collectionSlug
}) => {
  const {
    loading,
    productItems,
    getProductsByCollection
  } = (0,_hooks_useGetProducts__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)();
  const {
    withCarousel
  } = (0,_hooks_useProductGroup__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)();
  const {
    0: selectedCategory,
    1: setSelectedCategory
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(categories[0]);

  function handleSelectedCategory(e, category) {
    e.preventDefault();
    getProductsByCollection(category.collectionSlug);
    setSelectedCategory(category);
  }

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    getProductsByCollection("top-5-best-sellers");
  }, [collectionSlug]);
  const products = withCarousel(productItems, loading); // Views

  const categoriesView = categories.map(item => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", {
    className: item.id === selectedCategory.id ? "active" : "",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", {
      href: "#",
      onClick: e => handleSelectedCategory(e, item),
      children: item.text
    })
  }, item.id));
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
    className: "ps-section--standard ps-best-sellers",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "container",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "ps-section__header",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", {
          children: "Top 5 Bestsellers in:"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("ul", {
          className: "ps-list--categories",
          children: categoriesView
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: "ps-section__content",
        children: products
      })]
    })
  });
};

/* harmony default export */ __webpack_exports__["Z"] = (TopSellers);

/***/ })

};
;