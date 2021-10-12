exports.id = 1350;
exports.ids = [1350];
exports.modules = {

/***/ 1350:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ sidebar_SidebarShop; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./repositories/ProductRepository.js
var ProductRepository = __webpack_require__(1442);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
;// CONCATENATED MODULE: ./components/shared/widgets/WidgetShopCategories.js







const WidgetShopCategories = () => {
  const router = (0,router_.useRouter)();
  const {
    0: categories,
    1: setCategories
  } = (0,external_react_.useState)(null);
  const {
    0: loading,
    1: setLoading
  } = (0,external_react_.useState)(true);
  const {
    slug
  } = router.query;

  async function getCatgories() {
    const SPCategories = await ProductRepository/* default.getProductCategories */.ZP.getProductCategories();

    if (SPCategories) {
      setCategories(SPCategories);
      setTimeout(function () {
        setLoading(false);
      }, 200);
    } else {
      return null;
    }
  }

  (0,external_react_.useEffect)(() => {
    getCatgories();
  }, []); // Views

  let categoriesView;

  if (!loading) {
    if (categories && categories.length > 0) {
      categoriesView = categories.map(item => /*#__PURE__*/(0,jsx_runtime_.jsx)("li", {
        children: /*#__PURE__*/(0,jsx_runtime_.jsx)(next_link.default, {
          href: `/category/${item.slug}`,
          children: /*#__PURE__*/(0,jsx_runtime_.jsx)("a", {
            className: `ps-link--line ${slug && slug === item.slug ? "active" : ""}`,
            children: item.name
          })
        })
      }, item.id));
    } else {
      categoriesView = /*#__PURE__*/(0,jsx_runtime_.jsx)("p", {
        children: "No category found."
      });
    }
  } else {
    categoriesView = /*#__PURE__*/(0,jsx_runtime_.jsx)("span", {
      children: "Loading..."
    });
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("aside", {
    className: "widget widget_shop widget_categories",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsx)("h3", {
      className: "widget-title",
      children: "Categories"
    }), /*#__PURE__*/(0,jsx_runtime_.jsx)("ul", {
      className: "ps-list--under",
      children: categoriesView
    })]
  });
};

/* harmony default export */ var widgets_WidgetShopCategories = (WidgetShopCategories);
// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__(953);
;// CONCATENATED MODULE: ./components/shared/widgets/WidgetShopFilterByPriceRange.js






const WidgetShopFilterByPriceRange = () => {
  const Router = (0,router_.useRouter)();
  const {
    0: min,
    1: setMin
  } = (0,external_react_.useState)(0);
  const {
    0: max,
    1: setMax
  } = (0,external_react_.useState)(2000);

  function handleChangeRange(value) {
    setMin(value[0]);

    price_lt: value[1], setMax(value[1]);

    Router.push(`/shop?price_gt=${value[0]}&price_lt=${value[1]}`);
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsx)("aside", {
    className: "widget widget_shop",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("figure", {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsx)("h4", {
        className: "widget-title",
        children: "By Price"
      }), /*#__PURE__*/(0,jsx_runtime_.jsx)(external_antd_.Slider, {
        range: true,
        defaultValue: [0, 2000],
        max: 2000,
        onAfterChange: e => handleChangeRange(e)
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
        children: ["Price: $", min, " - $ ", max]
      })]
    })
  });
};

/* harmony default export */ var widgets_WidgetShopFilterByPriceRange = (WidgetShopFilterByPriceRange);
;// CONCATENATED MODULE: ./components/shared/widgets/WidgetShopFilterByColor.jsx




const WidgetShopFilterByColor = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("aside", {
    className: "widget widget_shop widget_shop-colors",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsx)("h3", {
      className: "widget-title",
      children: "Color"
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "widget__content",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "ps-checkbox color",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsx)("input", {
          className: "form-control",
          type: "checkbox",
          id: "#103178",
          name: "#103178"
        }), /*#__PURE__*/(0,jsx_runtime_.jsx)("label", {
          htmlFor: "#103178",
          style: {
            "--bgColor": "#103178"
          }
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "ps-checkbox color",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsx)("input", {
          className: "form-control",
          type: "checkbox",
          id: "gray",
          name: "gray"
        }), /*#__PURE__*/(0,jsx_runtime_.jsx)("label", {
          htmlFor: "gray",
          style: {
            "--bgColor": "#5b6c8f"
          }
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "ps-checkbox color",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsx)("input", {
          className: "form-control",
          type: "checkbox",
          id: "#ff9923",
          name: "#ff9923"
        }), /*#__PURE__*/(0,jsx_runtime_.jsx)("label", {
          htmlFor: "#ff9923",
          style: {
            "--bgColor": "#FF9923"
          }
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "ps-checkbox color",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsx)("input", {
          className: "form-control",
          type: "checkbox",
          id: "#12A05C",
          name: "#12A05C"
        }), /*#__PURE__*/(0,jsx_runtime_.jsx)("label", {
          htmlFor: "#12A05C",
          style: {
            "--bgColor": "#12A05C"
          }
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "ps-checkbox color",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsx)("input", {
          className: "form-control",
          type: "checkbox",
          id: "#F00000",
          name: "#F00000"
        }), /*#__PURE__*/(0,jsx_runtime_.jsx)("label", {
          htmlFor: "#F00000",
          style: {
            "--bgColor": "#F00000"
          }
        })]
      })]
    })]
  });
};

/* harmony default export */ var widgets_WidgetShopFilterByColor = (WidgetShopFilterByColor);
;// CONCATENATED MODULE: ./components/shared/widgets/WidgetShopByRating.jsx




const WidgetShopByRating = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("aside", {
    className: "widget widget_shop widget_rating",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsx)("h3", {
      className: "widget-title",
      children: "By Rating"
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "widget__content",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsx)("div", {
        className: "form-group",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "ps-checkbox",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsx)("input", {
            className: "form-control",
            type: "checkbox",
            id: "five-star",
            name: "five-star"
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("label", {
            htmlFor: "five-star",
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
              className: "ps-rating",
              children: [/*#__PURE__*/(0,jsx_runtime_.jsx)("i", {
                className: "fa fa-star"
              }), /*#__PURE__*/(0,jsx_runtime_.jsx)("i", {
                className: "fa fa-star"
              }), /*#__PURE__*/(0,jsx_runtime_.jsx)("i", {
                className: "fa fa-star"
              }), /*#__PURE__*/(0,jsx_runtime_.jsx)("i", {
                className: "fa fa-star"
              }), /*#__PURE__*/(0,jsx_runtime_.jsx)("i", {
                className: "fa fa-star"
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsx)("span", {
              className: "total",
              children: "(90)"
            })]
          })]
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsx)("div", {
        className: "form-group",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "ps-checkbox",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsx)("input", {
            className: "form-control",
            type: "checkbox",
            id: "four-star",
            name: "four-star"
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("label", {
            htmlFor: "four-star",
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
              className: "ps-rating",
              children: [/*#__PURE__*/(0,jsx_runtime_.jsx)("i", {
                className: "fa fa-star"
              }), /*#__PURE__*/(0,jsx_runtime_.jsx)("i", {
                className: "fa fa-star"
              }), /*#__PURE__*/(0,jsx_runtime_.jsx)("i", {
                className: "fa fa-star"
              }), /*#__PURE__*/(0,jsx_runtime_.jsx)("i", {
                className: "fa fa-star"
              }), /*#__PURE__*/(0,jsx_runtime_.jsx)("i", {
                className: "fa fa-star empty"
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsx)("span", {
              className: "total",
              children: "(33)"
            })]
          })]
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsx)("div", {
        className: "form-group",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "ps-checkbox",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsx)("input", {
            className: "form-control",
            type: "checkbox",
            id: "three-star",
            name: "three-star"
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("label", {
            htmlFor: "three-star",
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
              className: "ps-rating",
              children: [/*#__PURE__*/(0,jsx_runtime_.jsx)("i", {
                className: "fa fa-star"
              }), /*#__PURE__*/(0,jsx_runtime_.jsx)("i", {
                className: "fa fa-star"
              }), /*#__PURE__*/(0,jsx_runtime_.jsx)("i", {
                className: "fa fa-star"
              }), /*#__PURE__*/(0,jsx_runtime_.jsx)("i", {
                className: "fa fa-star empty"
              }), /*#__PURE__*/(0,jsx_runtime_.jsx)("i", {
                className: "fa fa-star empty"
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsx)("span", {
              className: "total",
              children: "(15)"
            })]
          })]
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsx)("div", {
        className: "form-group",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "ps-checkbox",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsx)("input", {
            className: "form-control",
            type: "checkbox",
            id: "two-star",
            name: "two-star"
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("label", {
            htmlFor: "two-star",
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
              className: "ps-rating",
              children: [/*#__PURE__*/(0,jsx_runtime_.jsx)("i", {
                className: "fa fa-star"
              }), /*#__PURE__*/(0,jsx_runtime_.jsx)("i", {
                className: "fa fa-star"
              }), /*#__PURE__*/(0,jsx_runtime_.jsx)("i", {
                className: "fa fa-star empty"
              }), /*#__PURE__*/(0,jsx_runtime_.jsx)("i", {
                className: "fa fa-star empty"
              }), /*#__PURE__*/(0,jsx_runtime_.jsx)("i", {
                className: "fa fa-star empty"
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsx)("span", {
              className: "total",
              children: "(11)"
            })]
          })]
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsx)("div", {
        className: "form-group",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "ps-checkbox",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsx)("input", {
            className: "form-control",
            type: "checkbox",
            id: "one-star",
            name: "one-star"
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("label", {
            htmlFor: "one-star",
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
              className: "ps-rating",
              children: [/*#__PURE__*/(0,jsx_runtime_.jsx)("i", {
                className: "fa fa-star"
              }), /*#__PURE__*/(0,jsx_runtime_.jsx)("i", {
                className: "fa fa-star empty"
              }), /*#__PURE__*/(0,jsx_runtime_.jsx)("i", {
                className: "fa fa-star empty"
              }), /*#__PURE__*/(0,jsx_runtime_.jsx)("i", {
                className: "fa fa-star empty"
              }), /*#__PURE__*/(0,jsx_runtime_.jsx)("i", {
                className: "fa fa-star empty"
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsx)("span", {
              className: "total",
              children: "(2)"
            })]
          })]
        })
      })]
    })]
  });
};

/* harmony default export */ var widgets_WidgetShopByRating = (WidgetShopByRating);
;// CONCATENATED MODULE: ./public/static/data/brands.json
var brands_namespaceObject = JSON.parse('{"Y":[{"image":"/static/img/branch/brand-1.jpg","text":"BestPharm"},{"image":"/static/img/branch/brand-2.jpg","text":"HeartRate"},{"image":"/static/img/branch/brand-3.jpg","text":"HeartShield"},{"image":"/static/img/branch/brand-4.jpg","text":"iHeart"},{"image":"/static/img/branch/brand-5.jpg","text":"iLovehealth"},{"image":"/static/img/branch/brand-6.jpg","text":"Medialarm"},{"image":"/static/img/branch/brand-7.jpg","text":"Medicstore"},{"image":"/static/img/branch/brand-8.jpg","text":"MyMedi"},{"image":"/static/img/branch/brand-9.jpg","text":"Pharmy"},{"image":"/static/img/branch/brand-10.jpg","text":"WeTakeCare"}]}');
;// CONCATENATED MODULE: ./components/shared/widgets/WidgetShopFilterByBrands.jsx





const WidgetShopFilterByBrands = () => {
  //Views
  const brandsView = brands_namespaceObject.Y.map((item, index) => /*#__PURE__*/(0,jsx_runtime_.jsx)("div", {
    className: "form-group",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "ps-checkbox",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsx)("input", {
        className: "form-control",
        type: "checkbox",
        id: index,
        name: index
      }), /*#__PURE__*/(0,jsx_runtime_.jsx)("label", {
        htmlFor: index,
        children: item.text
      })]
    })
  }, index));
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("aside", {
    className: "widget widget_shop widget_filter-by-brands",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsx)("h3", {
      className: "widget-title",
      children: "Brands"
    }), /*#__PURE__*/(0,jsx_runtime_.jsx)("div", {
      className: "widget__content",
      children: brandsView
    })]
  });
};

/* harmony default export */ var widgets_WidgetShopFilterByBrands = (WidgetShopFilterByBrands);
// EXTERNAL MODULE: ./components/shared/widgets/WidgetShopPromotion.jsx
var WidgetShopPromotion = __webpack_require__(6837);
;// CONCATENATED MODULE: ./components/shared/sidebar/SidebarShop.jsx










const SidebarShop = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "ps-sidebar--shop",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsx)(widgets_WidgetShopCategories, {}), /*#__PURE__*/(0,jsx_runtime_.jsx)(widgets_WidgetShopFilterByPriceRange, {}), /*#__PURE__*/(0,jsx_runtime_.jsx)(widgets_WidgetShopFilterByColor, {}), /*#__PURE__*/(0,jsx_runtime_.jsx)(widgets_WidgetShopFilterByBrands, {}), /*#__PURE__*/(0,jsx_runtime_.jsx)(widgets_WidgetShopByRating, {}), /*#__PURE__*/(0,jsx_runtime_.jsx)(WidgetShopPromotion/* default */.Z, {})]
  });
};

/* harmony default export */ var sidebar_SidebarShop = (SidebarShop);

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