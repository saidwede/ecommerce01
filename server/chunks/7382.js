exports.id = 7382;
exports.ids = [7382];
exports.modules = {

/***/ 7382:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ sidebar_SidebarBlog; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./components/shared/widgets/WidgetShopPromotion.jsx
var WidgetShopPromotion = __webpack_require__(6837);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./components/shared/widgets/WidgetBlogCategories.js





const WidgetBlogCategories = () => {
  const categories = [{
    url: "/blog",
    text: "Wound Care"
  }, {
    url: "/blog",
    text: "Higiene"
  }, {
    url: "/blog",
    text: "Laboratory"
  }, {
    url: "/blog",
    text: "Tools"
  }, {
    url: "/blog",
    text: "Diagnosic"
  }, {
    url: "/blog",
    text: "Equipments"
  }];
  const items = categories.map(item => /*#__PURE__*/(0,jsx_runtime_.jsx)(next_link.default, {
    href: item.url,
    children: /*#__PURE__*/(0,jsx_runtime_.jsx)("a", {
      children: item.text
    })
  }, item.text));
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("aside", {
    className: "widget widget_blog widget_categories",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsx)("h3", {
      className: "widget-title",
      children: "Categories"
    }), /*#__PURE__*/(0,jsx_runtime_.jsx)("ul", {
      children: items
    })]
  });
};

/* harmony default export */ var widgets_WidgetBlogCategories = (WidgetBlogCategories);
// EXTERNAL MODULE: ./components/shared/widgets/WidgetShopRelatedProducts.jsx
var WidgetShopRelatedProducts = __webpack_require__(3878);
;// CONCATENATED MODULE: ./components/shared/sidebar/SidebarBlog.jsx







const SidebarBlog = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "ps-sidebar--shop",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsx)(widgets_WidgetBlogCategories, {}), /*#__PURE__*/(0,jsx_runtime_.jsx)(WidgetShopRelatedProducts/* default */.Z, {}), /*#__PURE__*/(0,jsx_runtime_.jsx)(WidgetShopPromotion/* default */.Z, {})]
  });
};

/* harmony default export */ var sidebar_SidebarBlog = (SidebarBlog);

/***/ })

};
;