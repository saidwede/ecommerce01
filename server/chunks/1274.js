exports.id = 1274;
exports.ids = [1274];
exports.modules = {

/***/ 1043:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(953);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);





const SkeletonProductHorizontal = () => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
    className: "ps-skeleton--product mb-20",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "row",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: "col-md-4",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(antd__WEBPACK_IMPORTED_MODULE_2__.Skeleton.Input, {
          active: true,
          size: 350,
          style: {
            height: 220
          }
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: "col-md-8",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(antd__WEBPACK_IMPORTED_MODULE_2__.Skeleton, {
          active: true,
          paragraph: {
            rows: 6,
            title: true
          }
        })
      })]
    })
  });
};

/* harmony default export */ __webpack_exports__["Z"] = (SkeletonProductHorizontal);

/***/ }),

/***/ 1274:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ useProductGroup; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./components/elements/products/Product.jsx
var Product = __webpack_require__(1918);
// EXTERNAL MODULE: ./utilities/common-helpers.js
var common_helpers = __webpack_require__(7864);
// EXTERNAL MODULE: ./components/elements/carousel/NextArrow.jsx
var NextArrow = __webpack_require__(114);
// EXTERNAL MODULE: ./components/elements/carousel/PrevArrow.jsx
var PrevArrow = __webpack_require__(7754);
// EXTERNAL MODULE: ./components/elements/skeletons/SkeletonProduct.jsx
var SkeletonProduct = __webpack_require__(8697);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(79);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./components/elements/products/modules/ModuleProductActions.js + 2 modules
var ModuleProductActions = __webpack_require__(872);
// EXTERNAL MODULE: ./hooks/useProduct.js + 1 modules
var useProduct = __webpack_require__(6411);
// EXTERNAL MODULE: ./components/elements/products/modules/ModuleProductRating.jsx
var ModuleProductRating = __webpack_require__(3164);
// EXTERNAL MODULE: ./components/elements/products/modules/ModuleProductImages.jsx
var ModuleProductImages = __webpack_require__(7312);
;// CONCATENATED MODULE: ./components/elements/products/ProductGridWithDetail.jsx










const ProductGridWithDetail = ({
  product
}) => {
  const {
    price,
    badges
  } = (0,useProduct/* default */.Z)();
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "ps-product ps-product--standard ps-product--grid-with-detail",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "ps-product__thumbnail",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsx)(ModuleProductImages/* default */.Z, {
        product: product
      }), badges(product)]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "ps-product__content",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsx)("div", {
        className: "ps-product__categories",
        children: /*#__PURE__*/(0,jsx_runtime_.jsx)(next_link.default, {
          href: "/shop",
          children: /*#__PURE__*/(0,jsx_runtime_.jsx)("a", {
            children: "Thermometer Brand"
          })
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsx)("h4", {
        className: "ps-product__title",
        children: /*#__PURE__*/(0,jsx_runtime_.jsx)(next_link.default, {
          href: "/product/[pid]",
          as: `/product/${product.id}`,
          children: /*#__PURE__*/(0,jsx_runtime_.jsx)("a", {
            children: product.name
          })
        })
      }), price(product), /*#__PURE__*/(0,jsx_runtime_.jsx)(ModuleProductRating/* default */.Z, {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
        className: "ps-product__short-desc",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsx)("li", {
          children: "Study history up to 30 days"
        }), /*#__PURE__*/(0,jsx_runtime_.jsx)("li", {
          children: "Up to 5 users simultaneously"
        }), /*#__PURE__*/(0,jsx_runtime_.jsx)("li", {
          children: "Has HEALTH certificate"
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsx)(ModuleProductActions/* default */.Z, {
        product: product,
        type: "horizontal"
      })]
    })]
  });
};

/* harmony default export */ var products_ProductGridWithDetail = (ProductGridWithDetail);
;// CONCATENATED MODULE: ./components/elements/products/ProductList.jsx








const ProductList = ({
  product
}) => {
  const {
    price,
    badges
  } = (0,useProduct/* default */.Z)();
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "ps-product ps-product--horizontal",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "ps-product__thumbnail",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsx)(ModuleProductImages/* default */.Z, {
        product: product
      }), badges(product)]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "ps-product__wrapper",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "ps-product__content",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsx)("div", {
          className: "ps-product__categories",
          children: /*#__PURE__*/(0,jsx_runtime_.jsx)(next_link.default, {
            href: "/shop",
            children: /*#__PURE__*/(0,jsx_runtime_.jsx)("a", {
              children: "Thermometer Brand"
            })
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsx)("h4", {
          className: "ps-product__title",
          children: /*#__PURE__*/(0,jsx_runtime_.jsx)(next_link.default, {
            href: "/product/[id]",
            as: `/product/${product.id}`,
            children: /*#__PURE__*/(0,jsx_runtime_.jsx)("a", {
              children: product.name
            })
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsx)(ModuleProductRating/* default */.Z, {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
          className: "ps-product__short-desc",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsx)("li", {
            children: "Study history up to 30 days"
          }), /*#__PURE__*/(0,jsx_runtime_.jsx)("li", {
            children: "Up to 5 users simultaneously"
          }), /*#__PURE__*/(0,jsx_runtime_.jsx)("li", {
            children: "Has HEALTH certificate"
          })]
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "ps-product__right",
        children: [price(product), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "ps-product__shopping",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "form-group--number",
            children: [/*#__PURE__*/(0,jsx_runtime_.jsx)("button", {
              className: "up"
            }), /*#__PURE__*/(0,jsx_runtime_.jsx)("button", {
              className: "down"
            }), /*#__PURE__*/(0,jsx_runtime_.jsx)("input", {
              className: "form-control",
              type: "text",
              defaultValue: "1",
              placeholder: "1"
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsx)("a", {
            className: "ps-btn",
            children: "Add to cart"
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "ps-product__quick-actions",
            children: [/*#__PURE__*/(0,jsx_runtime_.jsx)("a", {
              href: "#",
              children: "Add to wishlist"
            }), /*#__PURE__*/(0,jsx_runtime_.jsx)("a", {
              href: "#",
              children: "Add to compare"
            })]
          })]
        })]
      })]
    })]
  });
};

/* harmony default export */ var products_ProductList = (ProductList);
// EXTERNAL MODULE: ./components/elements/skeletons/SkeletonProductHorizontal.jsx
var SkeletonProductHorizontal = __webpack_require__(1043);
// EXTERNAL MODULE: external "swiper/react"
var react_ = __webpack_require__(2156);
// EXTERNAL MODULE: external "swiper/core"
var core_ = __webpack_require__(1596);
var core_default = /*#__PURE__*/__webpack_require__.n(core_);
// EXTERNAL MODULE: ./components/elements/carousel/SwiperCarousel.jsx
var SwiperCarousel = __webpack_require__(9633);
;// CONCATENATED MODULE: ./hooks/useProductGroup.js










 // import Swiper core and required modules


 // install Swiper modules

core_default().use([core_.Navigation]);
function useProductGroup() {
  return {
    withCarousel: (source, loading, setting) => {
      let carousel;

      if (!loading) {
        if (source && source.length > 0) {
          const items = source.map(item => /*#__PURE__*/(0,jsx_runtime_.jsx)(react_.SwiperSlide, {
            children: /*#__PURE__*/(0,jsx_runtime_.jsx)(Product/* default */.Z, {
              product: item
            })
          }, item.id));
          carousel = /*#__PURE__*/(0,jsx_runtime_.jsx)(SwiperCarousel/* default */.Z, {
            setting: setting ? setting : undefined,
            children: items
          });
        } else {
          carousel = /*#__PURE__*/(0,jsx_runtime_.jsx)("p", {
            children: "No product(s) found."
          });
        }
      } else {
        const skeletons = (0,common_helpers/* generateTempArray */.Zn)(2).map(item => /*#__PURE__*/(0,jsx_runtime_.jsx)("div", {
          className: " col-6"
        }, item));
        carousel = /*#__PURE__*/(0,jsx_runtime_.jsx)("div", {
          className: "row",
          children: skeletons
        });
      }

      return carousel;
    },
    withGrid: (source, loading, columns = 5) => {
      let view;

      if (!loading) {
        if (source && source.length > 0) {
          const items = source.map(item => /*#__PURE__*/(0,jsx_runtime_.jsx)("div", {
            className: "ps-layout__item",
            children: /*#__PURE__*/(0,jsx_runtime_.jsx)(Product/* default */.Z, {
              product: item
            })
          }, item.id));
          view = /*#__PURE__*/(0,jsx_runtime_.jsx)("div", {
            className: "ps-layout--grid ps-shop-items",
            "data-columns": columns,
            children: items
          });
        } else {
          view = /*#__PURE__*/(0,jsx_runtime_.jsx)("p", {
            children: "No product found."
          });
        }
      } else {
        const items = (0,common_helpers/* generateTempArray */.Zn)(columns * 2).map(item => /*#__PURE__*/(0,jsx_runtime_.jsx)("div", {
          className: "ps-layout__item",
          children: /*#__PURE__*/(0,jsx_runtime_.jsx)(SkeletonProduct/* default */.Z, {})
        }, item));
        view = /*#__PURE__*/(0,jsx_runtime_.jsx)("div", {
          className: "ps-layout--grid ps-shop-items with-skeleton",
          "data-columns": columns,
          children: items
        });
      }

      return view;
    },
    withGridDetail: (source, loading, columns = 5) => {
      let view;

      if (!loading) {
        if (source && source.length > 0) {
          const items = source.map(item => /*#__PURE__*/(0,jsx_runtime_.jsx)("div", {
            className: "ps-layout__item",
            children: /*#__PURE__*/(0,jsx_runtime_.jsx)(products_ProductGridWithDetail, {
              product: item
            })
          }, item.id));
          view = /*#__PURE__*/(0,jsx_runtime_.jsx)("div", {
            className: "ps-layout--grid ps-shop-items with-skeleton",
            "data-columns": columns,
            children: items
          });
        } else {
          view = /*#__PURE__*/(0,jsx_runtime_.jsx)("p", {
            children: "No product found."
          });
        }
      } else {
        const items = (0,common_helpers/* generateTempArray */.Zn)(columns * 2).map(item => /*#__PURE__*/(0,jsx_runtime_.jsx)("div", {
          className: "ps-layout__item",
          "data-columns": columns,
          children: /*#__PURE__*/(0,jsx_runtime_.jsx)(SkeletonProduct/* default */.Z, {})
        }, item));
        view = /*#__PURE__*/(0,jsx_runtime_.jsx)("div", {
          className: "ps-layout--grid ps-shop-items with-skeleton",
          "data-columns": columns,
          children: items
        });
      }

      return view;
    },
    withList: (source, loading, columns = 4) => {
      let view;

      if (!loading) {
        if (source && source.length > 0) {
          const items = source.map(item => /*#__PURE__*/(0,jsx_runtime_.jsx)("div", {
            className: "ps-layout__item",
            children: /*#__PURE__*/(0,jsx_runtime_.jsx)(products_ProductList, {
              product: item
            })
          }, item.id));
          view = /*#__PURE__*/(0,jsx_runtime_.jsx)("div", {
            className: "ps-layout--list ps-shop-items",
            children: items
          });
        } else {
          view = /*#__PURE__*/(0,jsx_runtime_.jsx)("p", {
            children: "No product found."
          });
        }
      } else {
        const items = (0,common_helpers/* generateTempArray */.Zn)(columns).map(item => /*#__PURE__*/(0,jsx_runtime_.jsx)("div", {
          className: "ps-layout__item",
          "data-columns": columns,
          children: /*#__PURE__*/(0,jsx_runtime_.jsx)(SkeletonProductHorizontal/* default */.Z, {})
        }, item));
        view = /*#__PURE__*/(0,jsx_runtime_.jsx)("div", {
          className: "ps-layout--list ps-shop-items with-skeleton",
          "data-columns": columns,
          children: items
        });
      }

      return view;
    }
  };
}

/***/ })

};
;