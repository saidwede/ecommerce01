exports.id = 5676;
exports.ids = [5676];
exports.modules = {

/***/ 6576:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);





const MegaMenu = ({
  source,
  classes = 'mega-menu',
  onlyItems = false
}) => {
  let megaContentView;

  if (source) {
    megaContentView = source.megaContent.map(item => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "mega-menu__column",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h4", {
        className: "mega-menu__heading",
        children: item.heading
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("ul", {
        className: "mega-menu__list menu--single",
        children: item.megaItems.map(subItem => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(next_link__WEBPACK_IMPORTED_MODULE_2__.default, {
            href: subItem.url,
            as: subItem.url,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", {
              children: subItem.text
            })
          })
        }, subItem.text))
      })]
    }, item.heading));
  }

  if (!onlyItems) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
      className: "menu-item-has-children has-mega-menu",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(next_link__WEBPACK_IMPORTED_MODULE_2__.default, {
        href: source.url !== '' ? source.url : '/',
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
          children: [source.icon && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", {
            className: source.icon
          }), source.text]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: classes,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
          className: "mega-menu__wrapper",
          children: megaContentView
        })
      })]
    });
  } else {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
      className: classes,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: "mega-menu__wrapper",
        children: megaContentView
      })
    });
  }
};

/* harmony default export */ __webpack_exports__["Z"] = (MegaMenu);

/***/ }),

/***/ 4899:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ menu_Menu; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./components/elements/menu/MenuDropdown.jsx





const MenuDropdown = ({
  source
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
    className: "menu-item-has-children dropdown",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsx)(next_link.default, {
      href: source.url,
      children: /*#__PURE__*/(0,jsx_runtime_.jsx)("a", {
        children: source.text
      })
    }), source.subMenu && /*#__PURE__*/(0,jsx_runtime_.jsx)("ul", {
      className: source.subClass,
      children: source.subMenu.map((subMenuItem, index) => /*#__PURE__*/(0,jsx_runtime_.jsx)(MenuDropdown, {
        source: subMenuItem
      }, index))
    })]
  });
};

/* harmony default export */ var menu_MenuDropdown = (MenuDropdown);
// EXTERNAL MODULE: ./components/elements/menu/MegaMenu.jsx
var MegaMenu = __webpack_require__(6576);
// EXTERNAL MODULE: ./public/static/data/menu.json
var menu = __webpack_require__(6916);
;// CONCATENATED MODULE: ./components/elements/menu/modules/ModuleMenuHomepages.jsx






const DemoItem = ({
  source
}) => /*#__PURE__*/(0,jsx_runtime_.jsx)("div", {
  className: "ps-block__item",
  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "ps-block__wrapper",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "ps-block__thumbnail",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsx)("img", {
        src: source.image,
        alt: source.text
      }), /*#__PURE__*/(0,jsx_runtime_.jsx)(next_link.default, {
        href: source.url,
        children: /*#__PURE__*/(0,jsx_runtime_.jsx)("a", {
          className: "ps-block__overlay"
        })
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsx)(next_link.default, {
      href: source.url,
      children: /*#__PURE__*/(0,jsx_runtime_.jsx)("a", {
        className: "ps-block__text",
        children: source.text
      })
    })]
  })
});

const ModuleMenuHomepages = () => {
  const items = menu/* homepage_demos.map */.LL.map(item => {
    return /*#__PURE__*/(0,jsx_runtime_.jsx)(DemoItem, {
      source: item
    }, item.id);
  });
  return /*#__PURE__*/(0,jsx_runtime_.jsx)("div", {
    className: "ps-block--menu-demos",
    children: items
  });
};

/* harmony default export */ var modules_ModuleMenuHomepages = (ModuleMenuHomepages);
;// CONCATENATED MODULE: ./components/elements/menu/Menu.jsx








const Menu = ({
  source,
  className
}) => {
  // Views
  let menuView;

  if (source) {
    menuView = source.map(item => {
      if (item.subMenu) {
        return /*#__PURE__*/(0,jsx_runtime_.jsx)(menu_MenuDropdown, {
          source: item
        }, item.text);
      } else if (item.megaContent) {
        return /*#__PURE__*/(0,jsx_runtime_.jsx)(MegaMenu/* default */.Z, {
          source: item
        }, item.text);
      } else if (item.external) {
        if (item.module === "homepages") {
          return /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
            className: "menu-item-has-children has-mega-menu",
            children: [/*#__PURE__*/(0,jsx_runtime_.jsx)(next_link.default, {
              href: item.url,
              children: /*#__PURE__*/(0,jsx_runtime_.jsx)("a", {
                children: item.text
              })
            }), /*#__PURE__*/(0,jsx_runtime_.jsx)("div", {
              className: "mega-menu",
              children: /*#__PURE__*/(0,jsx_runtime_.jsx)(modules_ModuleMenuHomepages, {})
            })]
          }, item.module);
        }
      } else {
        return /*#__PURE__*/(0,jsx_runtime_.jsx)("li", {
          children: /*#__PURE__*/(0,jsx_runtime_.jsx)(next_link.default, {
            href: item.url,
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
              children: [item.icon && /*#__PURE__*/(0,jsx_runtime_.jsx)("i", {
                className: item.icon
              }), item.text]
            })
          })
        }, item.text);
      }
    });
  } else {
    menuView = /*#__PURE__*/(0,jsx_runtime_.jsx)("li", {
      children: /*#__PURE__*/(0,jsx_runtime_.jsx)("a", {
        href: "#",
        onClick: e => e.preventDefault(),
        children: "No menu item."
      })
    });
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsx)("ul", {
    className: className,
    children: menuView
  });
};

/* harmony default export */ var menu_Menu = (Menu);

/***/ }),

/***/ 7753:
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









const ProductWithAvailable = ({
  product
}) => {
  const {
    price,
    onSale
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
      }), onSale(product)]
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
      }), price(product), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_elements_products_modules_ModuleProductRating__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "ps-product__number-available",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
          children: ["No of pcs ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}), " available"]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("strong", {
          children: "24"
        })]
      })]
    })]
  });
};

/* harmony default export */ __webpack_exports__["Z"] = (ProductWithAvailable);

/***/ }),

/***/ 5676:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ layouts_Container; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./components/shared/headers/HeaderDefault.jsx
var HeaderDefault = __webpack_require__(8569);
// EXTERNAL MODULE: ./components/shared/footers/modules/ModuleFooterTop.jsx
var ModuleFooterTop = __webpack_require__(1919);
// EXTERNAL MODULE: ./components/shared/footers/modules/ModuleFooterAddress.jsx
var ModuleFooterAddress = __webpack_require__(1593);
// EXTERNAL MODULE: ./components/shared/footers/modules/ModuleFooterContact.jsx
var ModuleFooterContact = __webpack_require__(3225);
// EXTERNAL MODULE: ./components/shared/widgets/footer/WidgetFooterLinks.jsx
var WidgetFooterLinks = __webpack_require__(4919);
// EXTERNAL MODULE: ./components/shared/footers/modules/ModuleFooterBottom.jsx + 1 modules
var ModuleFooterBottom = __webpack_require__(5696);
// EXTERNAL MODULE: ./public/static/data/footer.json
var footer = __webpack_require__(8124);
;// CONCATENATED MODULE: ./components/shared/footers/FooterDefault.jsx










const FooterDefault = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("footer", {
    className: "ps-footer ps-footer--1",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsx)(ModuleFooterTop/* default */.Z, {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "container",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsx)("div", {
        className: "ps-footer__middle",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "row",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsx)("div", {
            className: "col-12 col-lg-7",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "row ps-footer__information",
              children: [/*#__PURE__*/(0,jsx_runtime_.jsx)("div", {
                className: "col-12 col-lg-4 col-md-4 col-sm-12",
                children: /*#__PURE__*/(0,jsx_runtime_.jsx)(ModuleFooterAddress/* default */.Z, {})
              }), /*#__PURE__*/(0,jsx_runtime_.jsx)("div", {
                className: "col-12 col-lg-8 col-md-8 col-sm-12",
                children: /*#__PURE__*/(0,jsx_runtime_.jsx)(ModuleFooterContact/* default */.Z, {})
              })]
            })
          }), /*#__PURE__*/(0,jsx_runtime_.jsx)("div", {
            className: "col-12 col-lg-5",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "row",
              children: [/*#__PURE__*/(0,jsx_runtime_.jsx)("div", {
                className: "col-6 col-md-4",
                children: /*#__PURE__*/(0,jsx_runtime_.jsx)(WidgetFooterLinks/* default */.Z, {
                  source: footer/* information */.GD
                })
              }), /*#__PURE__*/(0,jsx_runtime_.jsx)("div", {
                className: "col-6 col-md-4",
                children: /*#__PURE__*/(0,jsx_runtime_.jsx)(WidgetFooterLinks/* default */.Z, {
                  source: footer/* account */.JT
                })
              }), /*#__PURE__*/(0,jsx_runtime_.jsx)("div", {
                className: "col-6 col-md-4",
                children: /*#__PURE__*/(0,jsx_runtime_.jsx)(WidgetFooterLinks/* default */.Z, {
                  source: footer/* store */.h
                })
              })]
            })
          })]
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsx)(ModuleFooterBottom/* default */.Z, {})]
    })]
  });
};

/* harmony default export */ var footers_FooterDefault = (FooterDefault);
// EXTERNAL MODULE: ./components/elements/basic/Logo.js
var Logo = __webpack_require__(6889);
// EXTERNAL MODULE: ./components/shared/headers/modules/ModuleHeaderNotice.jsx
var ModuleHeaderNotice = __webpack_require__(3011);
// EXTERNAL MODULE: ./components/shared/forms/FormSearchHeader.js
var FormSearchHeader = __webpack_require__(2972);
;// CONCATENATED MODULE: ./components/shared/mobiles/HeaderMobile.jsx









const HeaderMobile = () => {
  const {
    0: search,
    1: setSearch
  } = (0,external_react_.useState)(false);

  function handleToggleSearch(e) {
    e.preventDefault();
    setSearch(!search);
  }

  (0,external_react_.useEffect)(() => {
    if (false) {}
  }, []);
  let searchView;

  if (search) {
    searchView = /*#__PURE__*/(0,jsx_runtime_.jsx)("div", {
      className: "header__searchbox",
      children: /*#__PURE__*/(0,jsx_runtime_.jsx)(FormSearchHeader/* default */.Z, {})
    });
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsx)(ModuleHeaderNotice/* default */.Z, {
      classes: "mobile-only"
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("header", {
      className: "header header--mobile",
      "data-sticky": "true",
      id: "header-sticky-mobile",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsx)("div", {
        className: "header__left",
        children: /*#__PURE__*/(0,jsx_runtime_.jsx)(Logo/* default */.Z, {})
      }), /*#__PURE__*/(0,jsx_runtime_.jsx)("div", {
        className: "header__right",
        children: /*#__PURE__*/(0,jsx_runtime_.jsx)("a", {
          className: "header__search",
          href: "#",
          onClick: e => handleToggleSearch(e),
          children: /*#__PURE__*/(0,jsx_runtime_.jsx)("i", {
            className: "icon-magnifier"
          })
        })
      }), searchView]
    })]
  });
};

/* harmony default export */ var mobiles_HeaderMobile = (HeaderMobile);
;// CONCATENATED MODULE: ./components/layouts/Container.js








const Container = ({
  children,
  title = "Just a awesome website",
  header = /*#__PURE__*/(0,jsx_runtime_.jsx)(HeaderDefault/* default */.Z, {}),
  footer = /*#__PURE__*/(0,jsx_runtime_.jsx)(footers_FooterDefault, {})
}) => {
  let titleView;

  if (title !== undefined) {
    titleView = "MyMedi" + " | " + title;
  } else {
    titleView = "MyMedi" + " | " + "React Ecomerce template with RESTFul API";
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "ps-root",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsx)((head_default()), {
      children: /*#__PURE__*/(0,jsx_runtime_.jsx)("title", {
        children: titleView
      })
    }), header, /*#__PURE__*/(0,jsx_runtime_.jsx)(mobiles_HeaderMobile, {}), children, footer]
  });
};

/* harmony default export */ var layouts_Container = (Container);

/***/ }),

/***/ 1593:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_elements_basic_ActiveLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(286);
/* harmony import */ var _components_elements_basic_Logo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6889);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1664);







const ModuleFooterAddress = () => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: "ps-footer--address",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_elements_basic_Logo__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
      className: "ps-footer__title",
      children: "Our store"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
      children: ["1487 Rocky Horse Carrefour", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}), "Arlington, TX 16819"]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(next_link__WEBPACK_IMPORTED_MODULE_4__.default, {
        href: "/",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", {
          target: "_blank",
          children: "Show on map"
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
      className: "ps-social",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
          className: "ps-social__link facebook",
          href: "#",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", {
            className: "fa fa-facebook",
            children: " "
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
            className: "ps-tooltip",
            children: "Facebook"
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
          className: "ps-social__link instagram",
          href: "#",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", {
            className: "fa fa-instagram"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
            className: "ps-tooltip",
            children: "Instagram"
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
          className: "ps-social__link youtube",
          href: "#",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", {
            className: "fa fa-youtube-play"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
            className: "ps-tooltip",
            children: "Youtube"
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
          className: "ps-social__link pinterest",
          href: "#",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", {
            className: "fa fa-pinterest-p"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
            className: "ps-tooltip",
            children: "Pinterest"
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
          className: "ps-social__link linkedin",
          href: "#",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", {
            className: "fa fa-linkedin"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
            className: "ps-tooltip",
            children: "Linkedin"
          })]
        })
      })]
    })]
  });
};

/* harmony default export */ __webpack_exports__["Z"] = (ModuleFooterAddress);

/***/ }),

/***/ 5696:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ modules_ModuleFooterBottom; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
;// CONCATENATED MODULE: ./components/shared/footers/modules/ModuleFooterCopyright.jsx



const ModuleFooterCopyright = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsx)("p", {
    children: "Copyright \xA9 2021 Mymedi. All Rights Reserved"
  });
};

/* harmony default export */ var modules_ModuleFooterCopyright = (ModuleFooterCopyright);
;// CONCATENATED MODULE: ./components/shared/footers/modules/ModuleFooterBottom.jsx





const ModuleFooterBottom = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsx)("div", {
    className: "ps-footer--bottom",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "row",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsx)("div", {
        className: "col-12 col-md-6",
        children: /*#__PURE__*/(0,jsx_runtime_.jsx)(modules_ModuleFooterCopyright, {})
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "col-12 col-md-6 text-right",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsx)("img", {
          src: "/static/img/payment.png",
          alt: ""
        }), /*#__PURE__*/(0,jsx_runtime_.jsx)("img", {
          className: "payment-light",
          src: "/static/img/payment-light.png",
          alt: ""
        })]
      })]
    })
  });
};

/* harmony default export */ var modules_ModuleFooterBottom = (ModuleFooterBottom);

/***/ }),

/***/ 3225:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);




const ModuleFooterContact = () => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: "ps-footer--contact",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h5", {
      className: "ps-footer__title",
      children: "Need help"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "ps-footer__fax",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", {
        className: "icon-telephone"
      }), "0020 500 \u2013 MYMEDI \u2013 000"]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
      className: "ps-footer__work",
      children: ["Monday \u2013 Friday: 9:00-20:00", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}), "Saturday: 11:00 \u2013 15:00"]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("hr", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
        className: "ps-footer__email",
        href: "mailto:contact@example.com",
        children: [" ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", {
          className: "icon-envelope"
        }), "contact@example.com", " "]
      })
    })]
  });
};

/* harmony default export */ __webpack_exports__["Z"] = (ModuleFooterContact);

/***/ }),

/***/ 1919:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);




const ModuleFooterTop = () => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
    className: "ps-footer--top ps-footer__top",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
      className: "container",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "row m-0",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
          className: "col-12 col-sm-4 p-0",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
            className: "text-center",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
              className: "ps-footer__link",
              href: "#",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", {
                className: "icon-wallet"
              }), "100% Money back"]
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
          className: "col-12 col-sm-4 p-0",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
            className: "text-center",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
              className: "ps-footer__link",
              href: "#",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", {
                className: "icon-bag2"
              }), "Non-contact shipping"]
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
          className: "col-12 col-sm-4 p-0",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
            className: "text-center",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
              className: "ps-footer__link",
              href: "#",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", {
                className: "icon-truck"
              }), "Free delivery for order over $200"]
            })
          })
        })]
      })
    })
  });
};

/* harmony default export */ __webpack_exports__["Z"] = (ModuleFooterTop);

/***/ }),

/***/ 8569:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_shared_forms_FormSearchHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2972);
/* harmony import */ var _components_shared_headers_modules_ModuleHeaderActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5857);
/* harmony import */ var _components_shared_headers_modules_ModuleHeaderNotice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3011);
/* harmony import */ var _components_shared_navigations_NavigationPrimary__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3945);
/* harmony import */ var _components_elements_basic_Logo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6889);
/* harmony import */ var _components_shared_headers_modules_ModuleHeaderSwitcher__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3952);










const HeaderDefault = ({
  classes = ""
}) => {
  const {
    0: showNav,
    1: setShowNav
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);

  function handleShownav(e) {
    e.preventDefault();

    if (showNav) {
      setShowNav(false);
    } else {
      setShowNav(true);
    }
  }

  function handleStickyHeader() {
    let number = window.pageXOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    const header = document.getElementById("header-sticky");

    if (header !== null) {
      if (number >= 300) {
        header.classList.add("header--sticky");
        setShowNav(false);
      } else {
        header.classList.remove("header--sticky");
        setShowNav(true);
      }
    }
  }

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (false) {}
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
    className: `header--desktop header--one ${classes}`,
    id: "header-sticky",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_shared_headers_modules_ModuleHeaderNotice__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
      className: "header__top",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "container",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          className: "header__left",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_elements_basic_Logo__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", {
            href: "#",
            className: "header__top-toggle",
            onClick: e => handleShownav(e),
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", {
              className: "fa fa-bars"
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
          className: "header__center",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
            className: "ps-header__search",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_shared_forms_FormSearchHeader__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {})
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          className: "header__right",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_shared_headers_modules_ModuleHeaderSwitcher__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_shared_headers_modules_ModuleHeaderActions__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {})]
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
      className: `header__bottom ${showNav ? "active" : ""}`,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_shared_navigations_NavigationPrimary__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {})
    })]
  });
};

/* harmony default export */ __webpack_exports__["Z"] = (HeaderDefault);

/***/ }),

/***/ 5857:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store_app_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8374);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(79);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1664);
/* harmony import */ var _utilities_ecomerce_helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8807);








const ModuleHeaderActions = ({
  ecomerce,
  search = false
}) => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
  const {
    0: cartTotal,
    1: setCartTotal
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
  const {
    0: wishlistTotal,
    1: setWishlistTotal
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);

  function handleOpenDrawer(e) {
    e.preventDefault();
    dispatch((0,_store_app_action__WEBPACK_IMPORTED_MODULE_2__/* .toggleDrawer */ .wb)(true));
  }

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (ecomerce.cartItems) {
      setCartTotal((0,_utilities_ecomerce_helpers__WEBPACK_IMPORTED_MODULE_5__/* .calculateCartQuantity */ .VK)(ecomerce.cartItems));
    }

    if (ecomerce.wishlistItems) {
      setWishlistTotal((0,_utilities_ecomerce_helpers__WEBPACK_IMPORTED_MODULE_5__/* .caculateArrayQuantity */ .wk)(ecomerce.wishlistItems));
    }
  }, [ecomerce]); // view

  let searchBtnView;

  if (search) {
    searchBtnView = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", {
        className: "header__action",
        href: "#",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", {
          className: "icon-magnifier"
        })
      })
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
    className: "header__actions",
    children: [searchBtnView, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(next_link__WEBPACK_IMPORTED_MODULE_4__.default, {
        href: "/my-account",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", {
          className: "header__action",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", {
            className: "icon-user"
          })
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(next_link__WEBPACK_IMPORTED_MODULE_4__.default, {
        href: "/shop/wishlist",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
          className: "header__action",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", {
            className: "fa fa-heart-o"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
            className: "header__action-badge",
            children: wishlistTotal ? wishlistTotal : 0
          })]
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
        className: "header__action",
        href: "#",
        id: "cart-mini",
        onClick: e => handleOpenDrawer(e),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", {
          className: "icon-cart-empty"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
          className: "header__action-badge",
          children: cartTotal ? cartTotal : 0
        })]
      })
    })]
  });
};

/* harmony default export */ __webpack_exports__["Z"] = ((0,react_redux__WEBPACK_IMPORTED_MODULE_3__.connect)(state => state)(ModuleHeaderActions));

/***/ }),

/***/ 3766:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ modules_ModuleHeaderCategories; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./components/elements/menu/MegaMenu.jsx
var MegaMenu = __webpack_require__(6576);
// EXTERNAL MODULE: ./public/static/data/menu.json
var menu = __webpack_require__(6916);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./components/shared/headers/modules/ModuleHeaderPartners.jsx




const PartnerItem = ({
  image
}) => /*#__PURE__*/(0,jsx_runtime_.jsx)("div", {
  className: "ps-branch__item",
  children: /*#__PURE__*/(0,jsx_runtime_.jsx)(next_link.default, {
    href: "/shop",
    children: /*#__PURE__*/(0,jsx_runtime_.jsx)("img", {
      src: image.image,
      alt: image.image
    })
  })
});

const ModuleHeaderPartners = () => {
  const partnersItems = [{
    image: '/static/img/branch/brand-1.jpg'
  }, {
    image: '/static/img/branch/brand-2.jpg'
  }, {
    image: '/static/img/branch/brand-3.jpg'
  }, {
    image: '/static/img/branch/brand-4.jpg'
  }, {
    image: '/static/img/branch/brand-5.jpg'
  }, {
    image: '/static/img/branch/brand-6.jpg'
  }, {
    image: '/static/img/branch/brand-7.jpg'
  }, {
    image: '/static/img/branch/brand-8.jpg'
  }, {
    image: '/static/img/branch/brand-9.jpg'
  }, {
    image: '/static/img/branch/brand-10.jpg'
  }];
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "ps-branch",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsx)("h3", {
      className: "ps-branch__title",
      children: "Popular Brands"
    }), /*#__PURE__*/(0,jsx_runtime_.jsx)("div", {
      className: "ps-branch__box",
      children: partnersItems.map(item => /*#__PURE__*/(0,jsx_runtime_.jsx)(PartnerItem, {
        image: item
      }, item.image))
    })]
  });
};

/* harmony default export */ var modules_ModuleHeaderPartners = (ModuleHeaderPartners);
;// CONCATENATED MODULE: ./components/shared/headers/modules/ModuleHeaderCategories.jsx







const ModuleHeaderCategories = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "header__categories ps-dropdown--fullscreen",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("button", {
      className: "header__categories-toggle",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsx)("i", {
        className: "fa fa-bars"
      }), /*#__PURE__*/(0,jsx_runtime_.jsx)("span", {
        children: "Products"
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsx)("div", {
      className: "ps-dropdown__content",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "container",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsx)(MegaMenu/* default */.Z, {
          source: menu/* header_categories_menu */.TH,
          onlyItems: true,
          classes: "menu--mega with-6-columns"
        }), /*#__PURE__*/(0,jsx_runtime_.jsx)(modules_ModuleHeaderPartners, {})]
      })
    })]
  });
};

/* harmony default export */ var modules_ModuleHeaderCategories = (ModuleHeaderCategories);

/***/ }),

/***/ 3011:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);




const ModuleHeaderNotice = ({
  classes
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: `ps-noti header__notice ${classes}`,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
      className: "container",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
        className: "m-0",
        children: ["Due to the ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("strong", {
          children: "COVID 19 "
        }), "epidemic, orders may be processed with a slight delay"]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", {
      className: "ps-noti__close",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", {
        className: "icon-cross"
      })
    })]
  });
};

/* harmony default export */ __webpack_exports__["Z"] = (ModuleHeaderNotice);

/***/ }),

/***/ 5451:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ modules_ModuleHeaderSupplies; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./components/shared/headers/modules/ModuleHeaderPromotions.jsx






const ModuleHeaderPromotions = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsx)("div", {
      className: "ps-promo",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "ps-promo__item",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsx)("img", {
          className: "ps-promo__banner",
          src: "/static/img/promotion/bg-banner4.jpg",
          alt: "alt"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "ps-promo__content",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsx)("span", {
            className: "ps-promo__badge",
            children: "New"
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("h4", {
            className: "mb-20 ps-promo__name",
            children: ["Get rid of bacteria ", /*#__PURE__*/(0,jsx_runtime_.jsx)("br", {}), "in your home"]
          }), /*#__PURE__*/(0,jsx_runtime_.jsx)(next_link.default, {
            href: "/shop",
            children: /*#__PURE__*/(0,jsx_runtime_.jsx)("a", {
              className: "ps-promo__btn",
              children: "More"
            })
          })]
        })]
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsx)("div", {
      className: "ps-promo",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "ps-promo__item",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsx)("img", {
          className: "ps-promo__banner",
          src: "/static/img/promotion/bg-banner5.jpg",
          alt: "alt"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "ps-promo__content",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("h4", {
            className: "ps-promo__name",
            children: ["Candid ", /*#__PURE__*/(0,jsx_runtime_.jsx)("br", {}), "Whitening Kit"]
          }), /*#__PURE__*/(0,jsx_runtime_.jsx)("div", {
            className: "ps-promo__sale",
            children: "-10%"
          }), /*#__PURE__*/(0,jsx_runtime_.jsx)(next_link.default, {
            href: "/shop",
            children: /*#__PURE__*/(0,jsx_runtime_.jsx)("a", {
              className: "ps-promo__btn",
              children: "More"
            })
          })]
        })]
      })
    })]
  });
};

/* harmony default export */ var modules_ModuleHeaderPromotions = (ModuleHeaderPromotions);
// EXTERNAL MODULE: ./components/elements/menu/Menu.jsx + 2 modules
var Menu = __webpack_require__(4899);
;// CONCATENATED MODULE: ./public/static/data/header_supplies.json
var header_supplies_namespaceObject = JSON.parse('{"B":[{"text":"Diagnosis","url":"/shop"},{"text":"Accessories Tools","url":"/shop"},{"text":"Bandages","url":"/shop"},{"text":"Biopsy tools","url":"/shop"},{"text":"Blades","url":"/shop"},{"text":"Blood pressure","url":"/shop"},{"text":"Capsules","url":"/shop"},{"text":"Dental","url":"/shop"},{"text":"Devices","url":"/shop"},{"text":"Diagnostic tests","url":"/shop"},{"text":"Disposable products","url":"/shop"},{"text":"Education","url":"/shop"},{"text":"Endoscopes","url":"/shop"},{"text":"Equipment","url":"/shop"},{"text":"Show all","url":"/shop"}]}');
// EXTERNAL MODULE: ./components/elements/CountDown.jsx
var CountDown = __webpack_require__(3984);
// EXTERNAL MODULE: ./hooks/useGetProducts.js + 2 modules
var useGetProducts = __webpack_require__(2639);
// EXTERNAL MODULE: ./components/elements/products/ProductWithAvaiable.jsx
var ProductWithAvaiable = __webpack_require__(7753);
;// CONCATENATED MODULE: ./components/shared/headers/modules/ModuleHeaderSupplies.jsx










const ModuleHeaderSupplies = () => {
  const {
    product,
    getProductById
  } = (0,useGetProducts/* default */.Z)();
  (0,external_react_.useEffect)(() => {
    getProductById(2);
  }, []);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "header__supplies ps-dropdown--fullscreen",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsx)("button", {
      className: "header__categories-toggle",
      children: /*#__PURE__*/(0,jsx_runtime_.jsx)("span", {
        children: "Home medical supplies "
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsx)("div", {
      className: "ps-dropdown__content",
      children: /*#__PURE__*/(0,jsx_runtime_.jsx)("div", {
        className: "container",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "mega-menu__row",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsx)("div", {
            className: "mega-menu__column col-12 col-sm-3",
            children: /*#__PURE__*/(0,jsx_runtime_.jsx)(Menu/* default */.Z, {
              source: header_supplies_namespaceObject.B,
              className: "menu--single bold"
            })
          }), /*#__PURE__*/(0,jsx_runtime_.jsx)("div", {
            className: "mega-menu__column col-12 col-sm-5 col-md-6",
            children: /*#__PURE__*/(0,jsx_runtime_.jsx)(modules_ModuleHeaderPromotions, {})
          }), /*#__PURE__*/(0,jsx_runtime_.jsx)("div", {
            className: "mega-menu__column col-12 col-sm-4 col-md-3",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "mega-menu__product",
              children: [/*#__PURE__*/(0,jsx_runtime_.jsx)(CountDown/* default */.Z, {
                time: "12 31 2021, 6:00 am",
                format: "MM DD YYYY, h:mm a"
              }), product && /*#__PURE__*/(0,jsx_runtime_.jsx)(ProductWithAvaiable/* default */.Z, {
                product: product
              })]
            })
          })]
        })
      })
    })]
  });
};

/* harmony default export */ var modules_ModuleHeaderSupplies = (ModuleHeaderSupplies);

/***/ }),

/***/ 3945:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_shared_headers_modules_ModuleHeaderContactNumber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4286);
/* harmony import */ var _components_shared_headers_modules_ModuleHeaderCategories__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3766);
/* harmony import */ var _components_shared_headers_modules_ModuleHeaderSupplies__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5451);
/* harmony import */ var _components_elements_menu_Menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4899);
/* harmony import */ var _public_static_data_menu_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6916);









const NavigationPrimary = () => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("nav", {
    className: "navigation--primary",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "container",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "navigation__left",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_shared_headers_modules_ModuleHeaderCategories__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_shared_headers_modules_ModuleHeaderSupplies__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
          className: "navigation__menu",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_elements_menu_Menu__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
            source: _public_static_data_menu_json__WEBPACK_IMPORTED_MODULE_6__/* .main_menu */ .PA,
            className: "menu menu--desktop"
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: "navigation__right",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_shared_headers_modules_ModuleHeaderContactNumber__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {})
      })]
    })
  });
};

/* harmony default export */ __webpack_exports__["Z"] = (NavigationPrimary);

/***/ }),

/***/ 4919:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);






const WidgetFooterLinks = ({
  source,
  classes = ""
}) => {
  const linksView = source.items.map((item, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(next_link__WEBPACK_IMPORTED_MODULE_2__.default, {
      href: "/",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", {
        children: item.text
      })
    })
  }, index));
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: `ps-footer--block widget--footer widget--footer-links ${classes}`,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h5", {
        className: "ps-block__title",
        children: source.title
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("ul", {
        className: "ps-block__list",
        children: linksView
      })]
    })
  });
};

/* harmony default export */ __webpack_exports__["Z"] = (WidgetFooterLinks);

/***/ }),

/***/ 2639:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ useGetProducts; }
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./repositories/Repository.js
var Repository = __webpack_require__(3378);
;// CONCATENATED MODULE: ./repositories/CollectionRepository.js


class CollectionRepository_CollectionRepository {
  constructor(callback) {
    this.callback = callback;
  }

  async getProductsByCollectionSlug(slug) {
    const reponse = await Repository/* default.get */.ZP.get(`${Repository/* baseUrlProduct */.EN}/collections?slug_in=${slug}`).then(response => {
      if (response.data && response.data.length > 0) {
        console.log(JSON.stringify(response));
        return {
          items: response.data[0].products
        };
      } else {
        return null;
      }

      return response.data;
    }).catch(error => {
      console.log(JSON.stringify(error));
      return null;
    });
    return reponse;
  }

}

/* harmony default export */ var repositories_CollectionRepository = (new CollectionRepository_CollectionRepository());
// EXTERNAL MODULE: ./repositories/ProductRepository.js
var repositories_ProductRepository = __webpack_require__(1442);
;// CONCATENATED MODULE: ./utilities/strapi-fetch-data-helpers.jsx
/*
 * React template helpers
 * Author: Nouthemes
 * Developed: diaryforlife
 * */



async function getProductsByCollectionHelper(collectionSlug, pageSize = 12) {
  let products;

  if (collectionSlug) {
    products = await repositories_CollectionRepository.getProductsByCollectionSlug(collectionSlug);
  } else {
    const queries = {
      _limit: pageSize
    };
    products = await repositories_ProductRepository/* default.getProducts */.ZP.getProducts(queries);
  }

  if (products) {
    return products;
  } else {
    return null;
  }
}
async function getProducts(queries) {
  let responseData;

  if (queries) {
    responseData = await ProductRepository.getProducts(queries);
  } else {
    const queries = {
      _limit: 12
    };
    responseData = await ProductRepository.getProducts(queries);
  }

  if (responseData) {
    return responseData;
  } else {
    return null;
  }
}
async function getProductsByCategoriesHelper(slug, pageSize = 12) {
  let products;

  if (slug) {
    products = await CollectionRepository.getProductsByCategorySlug(slug);
  } else {
    const queries = {
      _limit: pageSize
    };
    products = await ProductRepository.getProducts(queries);
  }

  if (products) {
    return products;
  } else {
    return null;
  }
}
;// CONCATENATED MODULE: ./hooks/useGetProducts.js



function useGetProducts() {
  const {
    0: loading,
    1: setLoading
  } = (0,external_react_.useState)(false);
  const {
    0: productItems,
    1: setProductItems
  } = (0,external_react_.useState)(null);
  const {
    0: product,
    1: setProduct
  } = (0,external_react_.useState)(null);
  const {
    0: category,
    1: setCategory
  } = (0,external_react_.useState)(null);
  return {
    loading,
    product,
    productItems,
    category,
    setLoading: payload => {
      setLoading(payload);
    },
    getProductsByCollection: async (payload, pageSize = 8) => {
      setLoading(true);
      const responseData = await getProductsByCollectionHelper(payload, pageSize);

      if (responseData) {
        setProductItems(responseData.items);
        setTimeout(function () {
          setLoading(false);
        }.bind(this), 250);
      }
    },
    getProducts: async payload => {
      setLoading(true);
      let responseData;

      if (payload) {
        responseData = await repositories_ProductRepository/* default.getProducts */.ZP.getProducts(payload);
      } else {
        const queries = {
          _limit: 12
        };
        responseData = await repositories_ProductRepository/* default.getProducts */.ZP.getProducts(queries);
      }

      if (responseData) {
        setProductItems(responseData);
        setTimeout(function () {
          setLoading(false);
        }.bind(this), 250);
      }
    },
    getProductById: async payload => {
      setLoading(true);
      const responseData = await repositories_ProductRepository/* default.getProductsById */.ZP.getProductsById(payload);

      if (responseData) {
        setProduct(responseData);
        setTimeout(function () {
          setLoading(false);
        }.bind(this), 250);
      }
    },
    getCategoryBySlug: async payload => {
      setLoading(true);
      const response = await repositories_ProductRepository/* default.getPrductCategoryBySlug */.ZP.getPrductCategoryBySlug(payload);

      if (response) {
        setCategory(response);
        setTimeout(function () {
          setLoading(false);
        }.bind(this), 250);
      }
    }
  };
}

/***/ }),

/***/ 8124:
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"GD":{"title":"Information","items":[{"text":"About us","url":"about-us.html"},{"text":"Delivery information","url":"#"},{"text":"Privacy Policy","url":"#"},{"text":"Sales","url":"#"},{"text":"Terms & Conditions","url":"#"}]},"JT":{"title":"Account","items":[{"text":"My account","url":"#"},{"text":"My orders","url":"#"},{"text":"Returns","url":"#"},{"text":"Shipping","url":"#"},{"text":"Wishlist","url":"wishlist.html"}]},"h":{"title":"Store","items":[{"text":"Affiliate","url":"#"},{"text":"Bestsellers","url":"#"},{"text":"Discount","url":"#"},{"text":"Latest products","url":"#"},{"text":"Sale","url":"#"}]},"EG":{"title":"Wound Care","items":[{"text":"Bandages","url":"category-grid.html"},{"text":"Gypsum foundations","url":"category-grid.html"},{"text":"Patches and tapes","url":"category-grid.html"},{"text":"Stomatology","url":"category-grid.html"},{"text":"Surgical sutures","url":"category-grid.html"},{"text":"Uniforms","url":"category-grid.html"},{"text":"Wound healing","url":"category-grid.html"}]},"dQ":{"title":"Higiene","items":[{"text":"Disposable products","url":"category-grid.html"},{"text":"Face masks","url":"category-grid.html"},{"text":"Gloves","url":"category-grid.html"},{"text":"Protective covers","url":"category-grid.html"},{"text":"Sterilization","url":"category-grid.html"},{"text":"Surgical foils","url":"category-grid.html"},{"text":"Uniforms","url":"category-grid.html"}]},"d4":{"title":"Laboratory","items":[{"text":"Devices","url":"category-grid.html"},{"text":"Diagnostic tests","url":"category-grid.html"},{"text":"Disinfectants","url":"category-grid.html"},{"text":"Dyes","url":"category-grid.html"},{"text":"Pipettes","url":"category-grid.html"},{"text":"Test-tubes","url":"category-grid.html"},{"text":"Tubes","url":"category-grid.html"}]},"rj":{"title":"Tools","items":[{"text":"Accessories Tools","url":"category-grid.html"},{"text":"Blood pressure","url":"category-grid.html"},{"text":"Capsules","url":"category-grid.html"},{"text":"Dental","url":"category-grid.html"},{"text":"Micrscope","url":"category-grid.html"},{"text":"Pressure","url":"category-grid.html"},{"text":"Sugar level","url":"category-grid.html"}]},"xx":{"title":"Diagnosis","items":[{"text":"Biopsy tools","url":"category-grid.html"},{"text":"Endoscopes","url":"category-grid.html"},{"text":"Monitoring","url":"category-grid.html"},{"text":"Otoscopes","url":"category-grid.html"},{"text":"Oxygen concentrators","url":"category-grid.html"},{"text":"Tables and assistants","url":"category-grid.html"},{"text":"Thermometer","url":"category-grid.html"}]},"vp":{"title":"Equipment","items":[{"text":"Blades","url":"category-grid.html"},{"text":"Education","url":"category-grid.html"},{"text":"Germicidal lamps","url":"category-grid.html"},{"text":"Heart Health","url":"category-grid.html"},{"text":"Infusion stands","url":"category-grid.html"},{"text":"Lighting","url":"category-grid.html"},{"text":"Machines","url":"category-grid.html"}]}}');

/***/ })

};
;