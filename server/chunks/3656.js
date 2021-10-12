exports.id = 3656;
exports.ids = [3656];
exports.modules = {

/***/ 7731:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ detail_DetailDefault; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./components/elements/detail/modules/ModuleDetailTopInformation.jsx
var ModuleDetailTopInformation = __webpack_require__(1500);
// EXTERNAL MODULE: ./components/elements/detail/modules/ModuleProductDetailDescription.js
var ModuleProductDetailDescription = __webpack_require__(790);
// EXTERNAL MODULE: ./components/elements/detail/modules/ModuleDetailShoppingActions.jsx
var ModuleDetailShoppingActions = __webpack_require__(7655);
// EXTERNAL MODULE: ./components/elements/detail/modules/ModuleProductDetailSharing.js
var ModuleProductDetailSharing = __webpack_require__(880);
// EXTERNAL MODULE: ./components/elements/detail/modules/ModuleDetailThumbnail.jsx
var ModuleDetailThumbnail = __webpack_require__(729);
// EXTERNAL MODULE: ./hooks/useProduct.js + 1 modules
var useProduct = __webpack_require__(6411);
// EXTERNAL MODULE: ./components/elements/detail/modules/ModuleDetailMeta.js
var ModuleDetailMeta = __webpack_require__(7852);
// EXTERNAL MODULE: ./components/elements/detail/modules/ModuleDetailColors.js
var ModuleDetailColors = __webpack_require__(1650);
// EXTERNAL MODULE: ./components/elements/detail/modules/ModuleDetailSizes.js
var ModuleDetailSizes = __webpack_require__(7237);
// EXTERNAL MODULE: ./components/elements/detail/modules/ModuleDetailTabs.jsx
var ModuleDetailTabs = __webpack_require__(8131);
;// CONCATENATED MODULE: ./components/partials/products/FrequentlyBoughtTogether.jsx




const FrequentlyBoughtTogether = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("section", {
    className: "ps-bought",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsx)("h3", {
      className: "ps-bought__title",
      children: "Frequently bought together"
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "ps-bought__wapper",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsx)("div", {
        className: "ps-bought__thumbnail",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
          children: [/*#__PURE__*/(0,jsx_runtime_.jsx)("li", {
            children: /*#__PURE__*/(0,jsx_runtime_.jsx)("a", {
              href: "#",
              children: /*#__PURE__*/(0,jsx_runtime_.jsx)("img", {
                src: "/static/img/products/001.jpg",
                alt: ""
              })
            })
          }), /*#__PURE__*/(0,jsx_runtime_.jsx)("li", {
            children: /*#__PURE__*/(0,jsx_runtime_.jsx)("a", {
              href: "#",
              children: /*#__PURE__*/(0,jsx_runtime_.jsx)("img", {
                src: "/static/img/products/033.jpg",
                alt: ""
              })
            })
          }), /*#__PURE__*/(0,jsx_runtime_.jsx)("li", {
            children: /*#__PURE__*/(0,jsx_runtime_.jsx)("a", {
              href: "#",
              children: /*#__PURE__*/(0,jsx_runtime_.jsx)("img", {
                src: "/static/img/products/006.jpg",
                alt: ""
              })
            })
          }), /*#__PURE__*/(0,jsx_runtime_.jsx)("li", {
            children: /*#__PURE__*/(0,jsx_runtime_.jsx)("a", {
              href: "#",
              children: /*#__PURE__*/(0,jsx_runtime_.jsx)("img", {
                src: "/static/img/products/050.jpg",
                alt: ""
              })
            })
          })]
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "ps-bought__content",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
          className: "ps-bought__list",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsx)("li", {
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "form-check",
              children: [/*#__PURE__*/(0,jsx_runtime_.jsx)("input", {
                className: "form-check-input",
                type: "checkbox",
                id: "product0",
                defaultChecked: true
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("label", {
                className: "form-check-label",
                htmlFor: "product0",
                children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
                  className: "ps-bought__name",
                  children: ["This Product: Blood Pressure Monitor", " "]
                }), "\u2013", " ", /*#__PURE__*/(0,jsx_runtime_.jsx)("span", {
                  className: "ps-bought__price",
                  children: "$77.65"
                })]
              })]
            })
          }), /*#__PURE__*/(0,jsx_runtime_.jsx)("li", {
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "form-check",
              children: [/*#__PURE__*/(0,jsx_runtime_.jsx)("input", {
                className: "form-check-input",
                type: "checkbox",
                id: "product1",
                defaultChecked: true
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("label", {
                className: "form-check-label",
                htmlFor: "product1",
                children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
                  className: "ps-bought__name",
                  children: ["3 Layer Disposable Protective Face Masks", " "]
                }), "\u2013", " ", /*#__PURE__*/(0,jsx_runtime_.jsx)("span", {
                  className: "ps-bought__del",
                  children: "$15.52"
                }), /*#__PURE__*/(0,jsx_runtime_.jsx)("span", {
                  className: "ps-bought__price sale",
                  children: "$14.52"
                })]
              })]
            })
          }), /*#__PURE__*/(0,jsx_runtime_.jsx)("li", {
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "form-check",
              children: [/*#__PURE__*/(0,jsx_runtime_.jsx)("input", {
                className: "form-check-input",
                type: "checkbox",
                id: "product2",
                defaultChecked: true
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("label", {
                className: "form-check-label",
                htmlFor: "product2",
                children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
                  className: "ps-bought__name",
                  children: ["GAnti-Dust Filter, Breathable, 3 Layers of Purifying", " "]
                }), "\u2013", " ", /*#__PURE__*/(0,jsx_runtime_.jsx)("span", {
                  className: "ps-bought__price",
                  children: "$17.99"
                })]
              })]
            })
          }), /*#__PURE__*/(0,jsx_runtime_.jsx)("li", {
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "form-check",
              children: [/*#__PURE__*/(0,jsx_runtime_.jsx)("input", {
                className: "form-check-input",
                type: "checkbox",
                id: "product3",
                defaultChecked: true
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("label", {
                className: "form-check-label",
                htmlFor: "product3",
                children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
                  className: "ps-bought__name",
                  children: ["Disposable Face Mask for Unisex", " "]
                }), "\u2013", " ", /*#__PURE__*/(0,jsx_runtime_.jsx)("span", {
                  className: "ps-bought__del",
                  children: "$20.39"
                }), /*#__PURE__*/(0,jsx_runtime_.jsx)("span", {
                  className: "ps-bought__price sale",
                  children: "$8.15"
                })]
              })]
            })
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "ps-bought__submit",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsx)("label", {
            children: "Buy selected for: "
          }), /*#__PURE__*/(0,jsx_runtime_.jsx)("div", {
            className: "ps-bought__total",
            children: "$115.31"
          }), /*#__PURE__*/(0,jsx_runtime_.jsx)("a", {
            className: "ps-btn ps-btn--warning",
            href: "#",
            children: "Add all to cart"
          })]
        })]
      })]
    })]
  });
};

/* harmony default export */ var products_FrequentlyBoughtTogether = (FrequentlyBoughtTogether);
;// CONCATENATED MODULE: ./components/elements/detail/DetailDefault.jsx















const DetailDefault = ({
  product,
  status = "in-stock"
}) => {
  const {
    price
  } = (0,useProduct/* default */.Z)();
  let statusView;

  if (status !== "out-stock") {
    statusView = /*#__PURE__*/(0,jsx_runtime_.jsx)("p", {
      className: "ps-product__log-status",
      children: "Only 3 left in stock"
    });
  } else {
    statusView = /*#__PURE__*/(0,jsx_runtime_.jsx)("p", {
      className: "ps-product__log-status outstock",
      children: "Out of stock"
    });
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "product--detail ps-product--detail",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "ps-product__header",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsx)(ModuleDetailThumbnail/* default */.Z, {
        product: product
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "ps-product__info",
        children: [statusView, /*#__PURE__*/(0,jsx_runtime_.jsx)(ModuleDetailTopInformation/* default */.Z, {
          product: product
        }), /*#__PURE__*/(0,jsx_runtime_.jsx)(ModuleProductDetailDescription/* default */.Z, {
          product: product
        }), price(product), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "ps-product__variants",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsx)(ModuleDetailColors/* default */.Z, {}), /*#__PURE__*/(0,jsx_runtime_.jsx)(ModuleDetailSizes/* default */.Z, {})]
        }), status !== "out-stock" && /*#__PURE__*/(0,jsx_runtime_.jsx)(ModuleDetailShoppingActions/* default */.Z, {
          product: product
        }), /*#__PURE__*/(0,jsx_runtime_.jsx)(ModuleDetailMeta/* default */.Z, {}), /*#__PURE__*/(0,jsx_runtime_.jsx)(ModuleProductDetailSharing/* default */.Z, {})]
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "ps-product__content ",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsx)(products_FrequentlyBoughtTogether, {}), /*#__PURE__*/(0,jsx_runtime_.jsx)(ModuleDetailTabs/* default */.Z, {})]
    })]
  });
};

/* harmony default export */ var detail_DetailDefault = (DetailDefault);

/***/ }),

/***/ 8549:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_useGetProducts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2639);
/* harmony import */ var _hooks_useProductGroup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1274);






const CustomerBought = ({
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
    className: "ps-customer-bought bg--cover",
    style: {
      background: "url(/static/img/related-bg.jpg)"
    },
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "container",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: "ps-section__header",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", {
          children: "Customer also bought"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: "ps-section__content",
        children: products
      })]
    })
  });
};

/* harmony default export */ __webpack_exports__["Z"] = (CustomerBought);

/***/ }),

/***/ 5834:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);




const WidgetProductPromotion = () => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: "ps-product--extension",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "ps-product__delivery",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "ps-delivery__item",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", {
          className: "icon-wallet"
        }), "100% ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}), "Money back"]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "ps-delivery__item",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", {
          className: "icon-bag2"
        }), "Non-contact ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}), "shipping"]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "ps-delivery__item",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", {
          className: "icon-truck"
        }), "Free delivery for ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}), "order over $200"]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
      className: "ps-product__payment",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
        src: "/static/img/payment-product.png",
        alt: ""
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "ps-product__gif",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "ps-gif__text",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", {
          className: "icon-shield-check"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("strong", {
          children: "100% Secure delivery "
        }), "without contacting the courier"]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
        className: "ps-gif__thumbnail",
        src: "/static/img/blue-white-ribbon-on-pink-box.jpg",
        alt: ""
      })]
    })]
  });
};

/* harmony default export */ __webpack_exports__["Z"] = (WidgetProductPromotion);

/***/ }),

/***/ 6837:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



const WidgetShopPromotion = () => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
    className: "widget widget_shop",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", {
      href: "#",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
        src: "/static/img/banner-sidebar1.jpg",
        alt: ""
      })
    })
  });
};

/* harmony default export */ __webpack_exports__["Z"] = (WidgetShopPromotion);

/***/ })

};
;