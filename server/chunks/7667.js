exports.id = 7667;
exports.ids = [7667];
exports.modules = {

/***/ 2734:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);




const Rating = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
  className: "ps-rating",
  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", {
    className: "fa fa-star"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", {
    className: "fa fa-star"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", {
    className: "fa fa-star"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", {
    className: "fa fa-star"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", {
    className: "fa fa-star-o"
  })]
});

/* harmony default export */ __webpack_exports__["Z"] = (Rating);

/***/ }),

/***/ 286:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const ActiveLink = (_ref) => {
  let {
    children,
    activeClassName = "active"
  } = _ref,
      props = _objectWithoutProperties(_ref, ["children", "activeClassName"]);

  const {
    asPath
  } = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
  const child = react__WEBPACK_IMPORTED_MODULE_3__.Children.only(children);
  const childClassName = child.props.className || "";
  const className = asPath === props.href || asPath === props.as ? `${childClassName} ${activeClassName}`.trim() : childClassName;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(next_link__WEBPACK_IMPORTED_MODULE_2__.default, _objectSpread(_objectSpread({}, props), {}, {
    children: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().cloneElement(child, {
      className: className || null
    })
  }));
};

/* harmony default export */ __webpack_exports__["Z"] = (ActiveLink);

/***/ }),

/***/ 114:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



const NextArrow = props => {
  const {
    className,
    onClick,
    icon
  } = props;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
    className: `slick-arrow slick-next ${className}`,
    onClick: onClick,
    children: icon ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", {
      className: icon
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", {
      className: "icon-chevron-right"
    })
  });
};

/* harmony default export */ __webpack_exports__["Z"] = (NextArrow);

/***/ }),

/***/ 7754:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



const PrevArrow = props => {
  const {
    className,
    onClick,
    icon
  } = props;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
    className: `slick-arrow slick-prev ${className}`,
    onClick: onClick,
    children: icon ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", {
      className: icon
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", {
      className: "icon-chevron-left"
    })
  });
};

/* harmony default export */ __webpack_exports__["Z"] = (PrevArrow);

/***/ }),

/***/ 9633:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2156);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(swiper_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var swiper_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1596);
/* harmony import */ var swiper_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(swiper_core__WEBPACK_IMPORTED_MODULE_3__);




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


 // import Swiper core and required modules

 // install Swiper modules

swiper_core__WEBPACK_IMPORTED_MODULE_3___default().use([swiper_core__WEBPACK_IMPORTED_MODULE_3__.Autoplay, swiper_core__WEBPACK_IMPORTED_MODULE_3__.Navigation, swiper_core__WEBPACK_IMPORTED_MODULE_3__.Pagination]);
const swiperParams = {
  loop: true,
  slidesPerView: 5,
  pagination: true,
  breakpoints: {
    320: {
      slidesPerView: 2
    },
    768: {
      slidesPerView: 3
    },
    992: {
      slidesPerView: 4
    },
    1200: {
      slidesPerView: 5
    }
  }
};

const SwiperCarousel = ({
  children,
  setting = swiperParams,
  classses = ""
}) => {
  const swiperRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);

  function handlePrev() {
    swiperRef.current.swiper.slidePrev(300);
  }

  function handleNext() {
    swiperRef.current.swiper.slideNext(300);
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: `ps-carousel--swiper ${classses}`,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "ps-carousel__navigation",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
          className: "swiper-arrow swiper-arrow--prev",
          onClick: e => handlePrev(e),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", {
            className: "icon-chevron-left"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
          className: "swiper-arrow swiper-arrow--next",
          onClick: e => handleNext(e),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", {
            className: "icon-chevron-right"
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(swiper_react__WEBPACK_IMPORTED_MODULE_2__.Swiper, _objectSpread(_objectSpread({
        ref: swiperRef
      }, setting), {}, {
        children: children
      }))]
    })
  });
};

/* harmony default export */ __webpack_exports__["Z"] = (SwiperCarousel);

/***/ }),

/***/ 1650:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);





const ModuleDetailColors = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("figure", {
  className: "ps-product__colors",
  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("figcaption", {
    className: "ps-product__label",
    children: "Color:"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: "items",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "ps-checkbox color",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", {
        className: "form-control",
        type: "checkbox",
        id: "#103178",
        name: "#103178"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", {
        htmlFor: "#103178",
        style: {
          "--bgColor": "#103178"
        }
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "ps-checkbox color",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", {
        className: "form-control",
        type: "checkbox",
        id: "gray",
        name: "gray"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", {
        htmlFor: "gray",
        style: {
          "--bgColor": "#5b6c8f"
        }
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "ps-checkbox color",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", {
        className: "form-control",
        type: "checkbox",
        id: "#ff9923",
        name: "#ff9923"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", {
        htmlFor: "#ff9923",
        style: {
          "--bgColor": "#FF9923"
        }
      })]
    })]
  })]
});

/* harmony default export */ __webpack_exports__["Z"] = (ModuleDetailColors);

/***/ }),

/***/ 7852:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);





const ModuleDetailMeta = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
  className: "ps-product__specification",
  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("strong", {
      children: "Tags: "
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(next_link__WEBPACK_IMPORTED_MODULE_2__.default, {
      href: "/shop",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", {
        children: "Thermometer"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(next_link__WEBPACK_IMPORTED_MODULE_2__.default, {
      href: "/shop",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", {
        children: "Health"
      })
    })]
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("strong", {
      children: "SKU: "
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
      children: "AU110876"
    })]
  })]
});

/* harmony default export */ __webpack_exports__["Z"] = (ModuleDetailMeta);

/***/ }),

/***/ 7655:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(79);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_app_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8374);
/* harmony import */ var _hooks_useEcomerce__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8428);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(953);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_5__);








const ModuleDetailShoppingActions = ({
  product,
  cart,
  ecomerce
}) => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
  const {
    0: quantity,
    1: setQuantity
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);
  const {
    loading,
    addItem
  } = (0,_hooks_useEcomerce__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)();

  const handleAddItemToCart = e => {
    e.preventDefault();
    addItem({
      id: product.id,
      quantity: 1
    }, ecomerce.cartItems, "cart");
    dispatch((0,_store_app_action__WEBPACK_IMPORTED_MODULE_3__/* .toggleDrawer */ .wb)(true));
  };

  const handleAddItemToCompare = e => {
    e.preventDefault();
    addItem({
      id: product.id
    }, ecomerce.compareItems, "compare");
    const modal = antd__WEBPACK_IMPORTED_MODULE_5__.Modal.success({
      centered: true,
      title: "Success!",
      content: `This product has been added to your compare listing!`
    });
    modal.update;
  };

  const handleAddItemToWishlist = e => {
    e.preventDefault();
    const {
      product
    } = undefined.props;
    addItem({
      id: product.id
    }, ecomerce.wishlistItems, "wishlist");
    const modal = antd__WEBPACK_IMPORTED_MODULE_5__.Modal.success({
      centered: true,
      title: "Success!",
      content: `This item has been added to your wishlist`
    });
    modal.update;
  };

  const handleIncreaseItemQty = e => {
    e.preventDefault();
    setQuantity(quantity + 1);
  };

  const handleDecreaseItemQty = e => {
    e.preventDefault();

    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
    className: "ps-product__shopping",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "ps-product__add-cart",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", {
        className: "ps-product__label",
        children: "Quantity"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("figure", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "form-group--number",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
              className: "up",
              onClick: e => handleIncreaseItemQty(e)
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
              className: "down",
              onClick: e => handleDecreaseItemQty(e)
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", {
              className: "form-control",
              type: "text",
              placeholder: quantity,
              disabled: true
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", {
            className: "ps-btn",
            href: "#",
            onClick: e => handleAddItemToCart(e),
            children: !loading ? "Add to cart" : "loading"
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "ps-product__ecomerce-actions",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", {
          href: "#",
          onClick: e => handleAddItemToWishlist(e),
          children: "Add to wishlist"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", {
          href: "#",
          onClick: e => handleAddItemToCompare(e),
          children: "Add to compare"
        })]
      })]
    })
  });
};

/* harmony default export */ __webpack_exports__["Z"] = ((0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(state => state)(ModuleDetailShoppingActions));

/***/ }),

/***/ 7237:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);




const sizes = [{
  id: 1,
  text: "Small",
  simple: "S"
}, {
  id: 2,
  text: "Medium",
  simple: "M"
}, {
  id: 3,
  text: "Large",
  simple: "L"
}];

const ModuleDetailColors = ({
  simple = false
}) => {
  const {
    0: active,
    1: setActive
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(sizes[0]);

  function handleSetActiveSize(e, payload) {
    e.preventDefault();
    setActive(payload);
  }

  const sizesView = sizes.map(item => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", {
    className: item.id === active.id ? "active" : "",
    onClick: e => handleSetActiveSize(e, item),
    children: !simple ? item.text : item.simple
  }, item.id));
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("figure", {
    className: "ps-product__sizes",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("figcaption", {
      className: "ps-product__label",
      children: "Sizes:"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
      className: "items",
      children: sizesView
    })]
  });
};

/* harmony default export */ __webpack_exports__["Z"] = (ModuleDetailColors);

/***/ }),

/***/ 729:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9080);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_image_lightbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6302);
/* harmony import */ var react_image_lightbox__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_image_lightbox__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _repositories_Repository__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3378);
/* harmony import */ var _components_elements_carousel_NextArrow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(114);
/* harmony import */ var _components_elements_carousel_PrevArrow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7754);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const variantSetting = {
  slidesToShow: 6,
  responsive: [{
    breakpoint: 768,
    settings: {
      slidesToShow: 6,
      dots: false,
      arrows: false,
      vertical: false,
      infinite: false
    }
  }, {
    breakpoint: 480,
    settings: {
      slidesToShow: 4,
      dots: false,
      arrows: false,
      vertical: false,
      infinite: false
    }
  }]
};
const gallerySetting = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_elements_carousel_NextArrow__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {}),
  prevArrow: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_elements_carousel_PrevArrow__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {})
};

const ModuleDetailThumbnail = ({
  product,
  vertical = true
}) => {
  const galleryCarousel = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const variantCarousel = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const {
    0: gallery,
    1: setGallery
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const {
    0: variant,
    1: setVariant
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const {
    0: isOpen,
    1: setIsOpen
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: photoIndex,
    1: setPhotoIndex
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
  const {
    0: productImages,
    1: setProductImages
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);

  const handleOpenLightbox = (e, imageIndex) => {
    e.preventDefault();
    setPhotoIndex(imageIndex);
    setIsOpen(true);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    let images = [];

    if (product && product.images.length > 0) {
      product.images.map(item => {
        images.push(`${_repositories_Repository__WEBPACK_IMPORTED_MODULE_4__/* .baseUrl */ .FH}${item.url}`);
      });
      setProductImages(images);
    }

    setGallery(galleryCarousel.current);
    setVariant(variantCarousel.current);
  }, [product]); //Views

  let lightboxView, variantCarouselView, imagesView, galleryImagesView;

  if (productImages.length > 0) {
    imagesView = productImages.map(item => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
      className: "item",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
        src: item,
        alt: item
      })
    }, item));
    galleryImagesView = productImages.map((item, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
      className: "item",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", {
        href: "#",
        onClick: e => handleOpenLightbox(e, index),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
          src: item,
          alt: item
        })
      })
    }, item));
  }

  if (vertical) {
    variantCarouselView = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((react_slick__WEBPACK_IMPORTED_MODULE_2___default()), _objectSpread(_objectSpread({
      asNavFor: gallery,
      ref: slider => variantCarousel.current = slider,
      swipeToSlide: true,
      centered: false,
      arrows: false,
      slidesToShow: 3,
      vertical: false,
      infinite: false,
      focusOnSelect: true
    }, variantSetting), {}, {
      className: "ps-product__variants",
      children: imagesView
    }));
  } else {
    variantCarouselView = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((react_slick__WEBPACK_IMPORTED_MODULE_2___default()), {
      asNavFor: gallery,
      ref: slider => variantCarousel.current = slider,
      swipeToSlide: true,
      arrows: false,
      slidesToShow: 6,
      vertical: false,
      centered: true,
      infinite: false,
      focusOnSelect: true,
      className: "ps-product__variants",
      children: imagesView
    });
  }

  if (isOpen) {
    lightboxView = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((react_image_lightbox__WEBPACK_IMPORTED_MODULE_3___default()), {
      mainSrc: productImages[photoIndex],
      nextSrc: productImages[(photoIndex + 1) % productImages.length],
      prevSrc: productImages[(photoIndex + productImages.length - 1) % productImages.length],
      onCloseRequest: () => {
        setIsOpen(false);
      },
      onMovePrevRequest: () => {
        setPhotoIndex((photoIndex + productImages.length - 1) % productImages.length);
      },
      onMoveNextRequest: () => {
        setPhotoIndex((photoIndex + 1) % productImages.length);
      }
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: "ps-product__thumbnail",
    "data-vertical": vertical ? "true" : "false",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("figure", {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: "ps-wrapper",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((react_slick__WEBPACK_IMPORTED_MODULE_2___default()), _objectSpread(_objectSpread({}, gallerySetting), {}, {
          ref: slider => galleryCarousel.current = slider,
          asNavFor: variant,
          className: "ps-product__gallery ps-carousel inside",
          children: galleryImagesView
        }))
      })
    }), variantCarouselView, lightboxView]
  });
};

/* harmony default export */ __webpack_exports__["Z"] = (ModuleDetailThumbnail);

/***/ }),

/***/ 1500:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var _components_elements_Rating__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2734);
/* harmony import */ var _hooks_useProduct__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6411);







const ModuleDetailTopInformation = ({
  product
}) => {
  // Views
  const {
    brand
  } = (0,_hooks_useProduct__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
    className: "ps-product__top-info",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
      className: "ps-product__categories",
      children: brand(product)
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h1", {
      className: "ps-product__title",
      children: product.name
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "ps-product__rating",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_elements_Rating__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
        className: "ml-20",
        children: "(1 review)"
      })]
    })]
  });
};

/* harmony default export */ __webpack_exports__["Z"] = (ModuleDetailTopInformation);

/***/ }),

/***/ 790:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);





const ModuleProductDetailDescription = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
  className: "ps-product__short-desc",
  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", {
    children: "Study history up to 30 days"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", {
    children: "Up to 5 users simultaneously"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", {
    children: "Has HEALTH certificate"
  })]
});

/* harmony default export */ __webpack_exports__["Z"] = (ModuleProductDetailDescription);

/***/ }),

/***/ 880:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);




const ModuleProductDetailSharing = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
  className: "ps-product__sharing",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
    className: "ps-social ps-social--color",
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
        className: "ps-social__link twitter",
        href: "#",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", {
          className: "fa fa-twitter"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
          className: "ps-tooltip",
          children: "Twitter"
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
      className: "ps-social__linkedin",
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
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", {
      className: "ps-social__reddit",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
        className: "ps-social__link reddit-alien",
        href: "#",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", {
          className: "fa fa-reddit-alien"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
          className: "ps-tooltip",
          children: "Reddit Alien"
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", {
      className: "ps-social__email",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
        className: "ps-social__link envelope",
        href: "#",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", {
          className: "fa fa-envelope-o"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
          className: "ps-tooltip",
          children: "Email"
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", {
      className: "ps-social__whatsapp",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
        className: "ps-social__link whatsapp",
        href: "#",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", {
          className: "fa fa-whatsapp"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
          className: "ps-tooltip",
          children: "WhatsApp"
        })]
      })
    })]
  })
});

/* harmony default export */ __webpack_exports__["Z"] = (ModuleProductDetailSharing);

/***/ }),

/***/ 872:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ modules_ModuleProductActions; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__(953);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(79);
// EXTERNAL MODULE: ./hooks/useEcomerce.js
var useEcomerce = __webpack_require__(8428);
// EXTERNAL MODULE: ./store/app/action.js
var action = __webpack_require__(8374);
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
// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__(9080);
// EXTERNAL MODULE: external "react-image-lightbox"
var external_react_image_lightbox_ = __webpack_require__(6302);
// EXTERNAL MODULE: ./repositories/Repository.js
var Repository = __webpack_require__(3378);
// EXTERNAL MODULE: ./components/elements/carousel/NextArrow.jsx
var NextArrow = __webpack_require__(114);
// EXTERNAL MODULE: ./components/elements/carousel/PrevArrow.jsx
var PrevArrow = __webpack_require__(7754);
// EXTERNAL MODULE: external "swiper/react"
var react_ = __webpack_require__(2156);
// EXTERNAL MODULE: ./components/elements/carousel/SwiperCarousel.jsx
var SwiperCarousel = __webpack_require__(9633);
;// CONCATENATED MODULE: ./components/elements/detail/modules/ModuleDetailThumbnailSingle.jsx









const variantSetting = {
  slidesToShow: 6,
  responsive: [{
    breakpoint: 768,
    settings: {
      slidesToShow: 6,
      dots: false,
      arrows: false,
      vertical: false,
      infinite: false
    }
  }, {
    breakpoint: 480,
    settings: {
      slidesToShow: 4,
      dots: false,
      arrows: false,
      vertical: false,
      infinite: false
    }
  }]
};
const gallerySetting = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: /*#__PURE__*/(0,jsx_runtime_.jsx)(NextArrow/* default */.Z, {}),
  prevArrow: /*#__PURE__*/(0,jsx_runtime_.jsx)(PrevArrow/* default */.Z, {})
};

const ModuleDetailThumbnailSingle = ({
  product,
  vertical = true
}) => {
  const galleryCarousel = (0,external_react_.useRef)(null);
  const variantCarousel = (0,external_react_.useRef)(null);
  const {
    0: gallery,
    1: setGallery
  } = (0,external_react_.useState)(null);
  const {
    0: variant,
    1: setVariant
  } = (0,external_react_.useState)(null);
  const {
    0: isOpen,
    1: setIsOpen
  } = (0,external_react_.useState)(false);
  const {
    0: photoIndex,
    1: setPhotoIndex
  } = (0,external_react_.useState)(0);
  const {
    0: productImages,
    1: setProductImages
  } = (0,external_react_.useState)([]);

  const handleOpenLightbox = (e, imageIndex) => {
    e.preventDefault();
    setPhotoIndex(imageIndex);
    setIsOpen(true);
  };

  (0,external_react_.useEffect)(() => {
    let images = [];

    if (product && product.images.length > 0) {
      product.images.map(item => {
        images.push(`${Repository/* baseUrl */.FH}${item.url}`);
      });
      setProductImages(images);
    }

    setGallery(galleryCarousel.current);
    setVariant(variantCarousel.current);
  }, [product]); //Views

  let carousel;
  const swiperParams = {
    slidesPerView: 1,
    navigation: true
  };

  if (productImages.length > 0) {
    const items = productImages.map(item => /*#__PURE__*/(0,jsx_runtime_.jsx)(react_.SwiperSlide, {
      children: /*#__PURE__*/(0,jsx_runtime_.jsx)("img", {
        src: item,
        alt: item
      })
    }, item));
    carousel = /*#__PURE__*/(0,jsx_runtime_.jsx)(SwiperCarousel/* default */.Z, {
      setting: swiperParams,
      children: items
    });
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsx)("div", {
    className: "ps-product__thumbnail",
    "data-vertical": vertical ? "true" : "false",
    children: /*#__PURE__*/(0,jsx_runtime_.jsx)("figure", {
      children: /*#__PURE__*/(0,jsx_runtime_.jsx)("div", {
        className: "ps-wrapper",
        children: carousel
      })
    })
  });
};

/* harmony default export */ var modules_ModuleDetailThumbnailSingle = (ModuleDetailThumbnailSingle);
;// CONCATENATED MODULE: ./components/elements/detail/DetailQuickView.jsx















const DetailQuickView = ({
  product
}) => {
  const {
    price
  } = (0,useProduct/* default */.Z)();
  return /*#__PURE__*/(0,jsx_runtime_.jsx)(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsx)("div", {
      className: "product--detail ps-product--detail ps-product--quickview",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "ps-product__header",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsx)(modules_ModuleDetailThumbnailSingle, {
          product: product
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "ps-product__info",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsx)("p", {
            className: "ps-product__log-status",
            children: "Only 3 left in stock"
          }), /*#__PURE__*/(0,jsx_runtime_.jsx)(ModuleDetailTopInformation/* default */.Z, {
            product: product
          }), /*#__PURE__*/(0,jsx_runtime_.jsx)(ModuleProductDetailDescription/* default */.Z, {
            product: product
          }), price(product), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "ps-product__variants",
            children: [/*#__PURE__*/(0,jsx_runtime_.jsx)(ModuleDetailColors/* default */.Z, {}), /*#__PURE__*/(0,jsx_runtime_.jsx)(ModuleDetailSizes/* default */.Z, {})]
          }), /*#__PURE__*/(0,jsx_runtime_.jsx)(ModuleDetailShoppingActions/* default */.Z, {
            product: product
          }), /*#__PURE__*/(0,jsx_runtime_.jsx)(ModuleDetailMeta/* default */.Z, {}), /*#__PURE__*/(0,jsx_runtime_.jsx)(ModuleProductDetailSharing/* default */.Z, {})]
        })]
      })
    })
  });
};

/* harmony default export */ var detail_DetailQuickView = (DetailQuickView);
;// CONCATENATED MODULE: ./components/elements/products/modules/ModuleProductActions.js










const ModuleProductActions = ({
  product,
  type = "vertical",
  cart,
  ecomerce
}) => {
  const dispatch = (0,external_react_redux_.useDispatch)();
  const {
    0: isQuickView,
    1: setIsQuickView
  } = (0,external_react_.useState)(false);
  const {
    addItem
  } = (0,useEcomerce/* default */.Z)();

  function handleAddItemToCart(e) {
    e.preventDefault();
    addItem({
      id: product.id,
      quantity: 1
    }, ecomerce.cartItems, "cart");
    dispatch((0,action/* toggleDrawer */.wb)(true));
  }

  function handleAddItemToWishlist(e) {
    e.preventDefault();
    addItem({
      id: product.id
    }, ecomerce.wishlistItems, "wishlist");
    const modal = external_antd_.Modal.success({
      centered: true,
      title: "Success!",
      content: `This item has been added to your wishlist`
    });
    modal.update;
  }

  function handleAddItemToCompare(e) {
    e.preventDefault();
    addItem({
      id: product.id
    }, ecomerce.compareItems, "compare");
    const modal = external_antd_.Modal.success({
      centered: true,
      title: "Success!",
      content: `This product has been added to your compare listing!`
    });
    modal.update;
  }

  function handleShowQuickView(e) {
    e.preventDefault();
    setIsQuickView(true);
  }

  function handleHideQuickView(e) {
    e.preventDefault();
    setIsQuickView(false);
  }

  if (type === "vertical") {
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "ps-product__actions",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsx)("a", {
          href: "#",
          className: "ps-product__action",
          title: "Wishlist",
          onClick: e => handleAddItemToWishlist(e),
          children: /*#__PURE__*/(0,jsx_runtime_.jsx)("i", {
            className: "fa fa-heart-o"
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsx)("a", {
          href: "#",
          className: "ps-product__action",
          title: "Add to compare",
          onClick: e => handleAddItemToCompare(e),
          children: /*#__PURE__*/(0,jsx_runtime_.jsx)("i", {
            className: "fa fa-align-left"
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsx)("a", {
          href: "#",
          className: "ps-product__action",
          title: "Quick view",
          onClick: e => handleShowQuickView(e),
          children: /*#__PURE__*/(0,jsx_runtime_.jsx)("i", {
            className: "fa fa-search"
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsx)("a", {
          href: "#",
          className: "ps-product__action",
          title: "Add to cart",
          onClick: e => handleAddItemToCart(e),
          children: /*#__PURE__*/(0,jsx_runtime_.jsx)("i", {
            className: "fa fa-shopping-basket"
          })
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsx)(external_antd_.Modal, {
        centered: true,
        footer: null,
        width: 1024,
        onCancel: e => handleHideQuickView(e),
        visible: isQuickView,
        zIndex: 9999,
        closeIcon: /*#__PURE__*/(0,jsx_runtime_.jsx)("i", {
          className: "icon icon-cross2"
        }),
        children: /*#__PURE__*/(0,jsx_runtime_.jsx)(detail_DetailQuickView, {
          product: product
        })
      })]
    });
  } else {
    return /*#__PURE__*/(0,jsx_runtime_.jsx)(jsx_runtime_.Fragment, {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "ps-product__actions-horizontal",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsx)("div", {
          className: "ps-product__btn-add-cart",
          children: /*#__PURE__*/(0,jsx_runtime_.jsx)("a", {
            href: "#",
            className: "ps-btn",
            onClick: e => handleAddItemToCart(e),
            children: "Add to cart"
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "ps-product__other-actions",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsx)("a", {
            onClick: e => handleAddItemToWishlist(e),
            children: /*#__PURE__*/(0,jsx_runtime_.jsx)("i", {
              className: "icon-heart"
            })
          }), /*#__PURE__*/(0,jsx_runtime_.jsx)("a", {
            onClick: e => handleAddItemToWishlist(e),
            children: /*#__PURE__*/(0,jsx_runtime_.jsx)("i", {
              className: "icon-signal"
            })
          })]
        })]
      })
    });
  }
};

/* harmony default export */ var modules_ModuleProductActions = ((0,external_react_redux_.connect)(state => state)(ModuleProductActions));

/***/ }),

/***/ 7312:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_useProduct__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6411);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);






const ModuleProductImages = ({
  product
}) => {
  const {
    thumbnailImages,
    price
  } = (0,_hooks_useProduct__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: "ps-product__images",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(next_link__WEBPACK_IMPORTED_MODULE_3__.default, {
      href: "/product/[id]",
      as: `/product/${product.id}`,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", {
        className: "ps-product__overlay"
      })
    }), thumbnailImages(product)]
  });
};

/* harmony default export */ __webpack_exports__["Z"] = (ModuleProductImages);

/***/ }),

/***/ 3164:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);




const ModuleProductRating = () => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: "ps-product__rating",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", {
      className: "fa fa-star"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", {
      className: "fa fa-star"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", {
      className: "fa fa-star"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", {
      className: "fa fa-star"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", {
      className: "fa fa-star"
    })]
  });
};

/* harmony default export */ __webpack_exports__["Z"] = (ModuleProductRating);

/***/ }),

/***/ 2972:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);






const FormSearchHeader = () => {
  const {
    0: keyword,
    1: setKeyword
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);

  function handleSetKeyword(e) {
    e.preventDefault();

    if (e.target.value !== "") {
      setKeyword(e.target.value);
    } else {
      setKeyword(e.target.value);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (keyword !== "") {
      next_router__WEBPACK_IMPORTED_MODULE_2___default().push(`/search?keyword=${keyword}`);
    }
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("form", {
      onSubmit: e => handleSubmit(e),
      className: "header__search-form",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: "ps-search-table",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          className: "input-group",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", {
            className: "form-control ps-input",
            type: "text",
            placeholder: "Search for products",
            onChange: e => handleSetKeyword(e)
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
            className: "input-group-append",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", {
              href: "#",
              onClick: e => handleSubmit(e),
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", {
                className: "fa fa-search"
              })
            })
          })]
        })
      })
    })
  });
};

/* harmony default export */ __webpack_exports__["Z"] = (FormSearchHeader);

/***/ }),

/***/ 4286:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);




const ModuleHeaderContactNumber = () => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
    className: "ps-text--contact-number",
    children: ["Need help? ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("strong", {
      children: "0020 500 - MYMEDI - 000"
    })]
  });
};

/* harmony default export */ __webpack_exports__["Z"] = (ModuleHeaderContactNumber);

/***/ }),

/***/ 3952:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(953);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);




const {
  Option
} = antd__WEBPACK_IMPORTED_MODULE_2__.Select;

const ModuleHeaderSwichers = () => {
  const languageItems = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_2__.Menu, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(antd__WEBPACK_IMPORTED_MODULE_2__.Menu.Item, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", {
        href: "#",
        children: "English"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(antd__WEBPACK_IMPORTED_MODULE_2__.Menu.Item, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", {
        href: "#",
        children: "French"
      })
    })]
  });

  const currencyItems = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_2__.Menu, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(antd__WEBPACK_IMPORTED_MODULE_2__.Menu.Item, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", {
        href: "#",
        children: "USD"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(antd__WEBPACK_IMPORTED_MODULE_2__.Menu.Item, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", {
        href: "#",
        children: "EURO"
      })
    })]
  });

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: "header__switchers",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
      className: "header__switcher",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(antd__WEBPACK_IMPORTED_MODULE_2__.Dropdown, {
        overlay: languageItems,
        placement: "bottomLeft",
        className: "ps-dropdown-toggle",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_2__.Button, {
          children: ["English ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", {
            className: "icon-chevron-down"
          })]
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
      className: "header__switcher",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(antd__WEBPACK_IMPORTED_MODULE_2__.Dropdown, {
        overlay: currencyItems,
        placement: "bottomLeft",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_2__.Button, {
          children: ["USD ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", {
            className: "icon-chevron-down"
          })]
        })
      })
    })]
  });
};

/* harmony default export */ __webpack_exports__["Z"] = (ModuleHeaderSwichers);

/***/ }),

/***/ 8428:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ useEcomerce; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _repositories_ProductRepository__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1442);
/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(311);
/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_cookie__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(79);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store_ecomerce_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1888);





function useEcomerce() {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
  const {
    0: loading,
    1: setLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: cartItemsOnCookie
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [cookies, setCookie] = (0,react_cookie__WEBPACK_IMPORTED_MODULE_2__.useCookies)(["cart"]);
  const {
    0: products,
    1: setProducts
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  return {
    loading,
    cartItemsOnCookie,
    products,
    getProducts: async (payload, group = "") => {
      setLoading(true);

      if (payload && payload.length > 0) {
        let queries = "";
        payload.forEach(item => {
          if (queries === "") {
            queries = `id_in=${item.id}`;
          } else {
            queries = queries + `&id_in=${item.id}`;
          }
        });
        const responseData = await _repositories_ProductRepository__WEBPACK_IMPORTED_MODULE_1__/* .default.getProductsByIds */ .ZP.getProductsByIds(queries);

        if (responseData && responseData.length > 0) {
          if (group === "cart") {
            let cartItems = responseData;
            payload.forEach((item, index) => {
              if (item.id === cartItems[index].id) {
                console.log(true);
                cartItems[index].quantity = item.quantity;
              }
            });
            setProducts(cartItems);
          } else {
            setProducts(responseData);
          }

          setTimeout(function () {
            setLoading(false);
          }.bind(this), 250);
        }
      } else {
        setLoading(false);
        setProducts([]);
      }
    },
    increaseQty: (payload, currentCart) => {
      let cart = [];

      if (currentCart) {
        cart = currentCart;
        const existItem = cart.find(item => item.id === payload.id);

        if (existItem) {
          existItem.quantity = existItem.quantity + 1;
        }

        setCookie("cart", cart, {
          path: "/"
        });
        dispatch((0,_store_ecomerce_action__WEBPACK_IMPORTED_MODULE_4__/* .setCartItems */ .w0)(cart));
      }

      return cart;
    },
    decreaseQty: (payload, currentCart) => {
      let cart = [];

      if (currentCart) {
        cart = currentCart;
        const existItem = cart.find(item => item.id === payload.id);

        if (existItem) {
          if (existItem.quantity > 1) {
            existItem.quantity = existItem.quantity - 1;
          }
        }

        setCookie("cart", cart, {
          path: "/"
        });
        dispatch((0,_store_ecomerce_action__WEBPACK_IMPORTED_MODULE_4__/* .setCartItems */ .w0)(cart));
      }

      return cart;
    },
    addItem: (newItem, items, group) => {
      let newItems = [];

      if (items) {
        newItems = items;
        const existItem = items.find(item => item.id === newItem.id);

        if (existItem) {
          if (group === "cart") {
            existItem.quantity += newItem.quantity;
          }
        } else {
          newItems.push(newItem);
        }
      } else {
        newItems.push(newItem);
      }

      if (group === "cart") {
        setCookie("cart", newItems, {
          path: "/"
        });
        dispatch((0,_store_ecomerce_action__WEBPACK_IMPORTED_MODULE_4__/* .setCartItems */ .w0)(newItems));
      }

      if (group === "wishlist") {
        setCookie("wishlist", newItems, {
          path: "/"
        });
        dispatch((0,_store_ecomerce_action__WEBPACK_IMPORTED_MODULE_4__/* .setWishlistTtems */ .hT)(newItems));
      }

      if (group === "compare") {
        setCookie("compare", newItems, {
          path: "/"
        });
        dispatch((0,_store_ecomerce_action__WEBPACK_IMPORTED_MODULE_4__/* .setCompareItems */ .Sk)(newItems));
      }

      return newItems;
    },
    removeItem: (selectedItem, items, group) => {
      let currentItems = items;

      if (currentItems.length > 0) {
        const index = currentItems.findIndex(item => item.id === selectedItem.id);
        currentItems.splice(index, 1);
      }

      if (group === "cart") {
        setCookie("cart", currentItems, {
          path: "/"
        });
        dispatch((0,_store_ecomerce_action__WEBPACK_IMPORTED_MODULE_4__/* .setCartItems */ .w0)(currentItems));
      }

      if (group === "wishlist") {
        setCookie("wishlist", currentItems, {
          path: "/"
        });
        dispatch((0,_store_ecomerce_action__WEBPACK_IMPORTED_MODULE_4__/* .setWishlistTtems */ .hT)(currentItems));
      }

      if (group === "compare") {
        setCookie("compare", currentItems, {
          path: "/"
        });
      }
    },
    removeItems: group => {
      if (group === "wishlist") {
        setCookie("wishlist", [], {
          path: "/"
        });
        dispatch((0,_store_ecomerce_action__WEBPACK_IMPORTED_MODULE_4__/* .setWishlistTtems */ .hT)([]));
      }

      if (group === "compare") {
        setCookie("compare", [], {
          path: "/"
        });
        dispatch((0,_store_ecomerce_action__WEBPACK_IMPORTED_MODULE_4__/* .setCompareItems */ .Sk)([]));
      }

      if (group === "cart") {
        setCookie("cart", [], {
          path: "/"
        });
        dispatch((0,_store_ecomerce_action__WEBPACK_IMPORTED_MODULE_4__/* .setCartItems */ .w0)([]));
      }
    }
  };
}

/***/ }),

/***/ 6411:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ useProduct; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "react-lazyload"
var external_react_lazyload_ = __webpack_require__(6873);
var external_react_lazyload_default = /*#__PURE__*/__webpack_require__.n(external_react_lazyload_);
// EXTERNAL MODULE: ./repositories/Repository.js
var Repository = __webpack_require__(3378);
;// CONCATENATED MODULE: ./utilities/product-helper.js



/*
 * React template helpers
 * Author: Nouthemes
 * Developed: diaryforlife
 * */



function formatCurrency(num) {
  if (num !== undefined) {
    return parseFloat(num).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  } else {}
}
function SPGetProductThumbailImage(product, size) {
  let image;
  const {
    thumbnail
  } = product;

  if (thumbnail) {
    if (size && size === 'large') {
      if (thumbnail.formats.large) {
        image = thumbnail.formats.large.url;
      } else {
        image = product.thumbnail.url;
      }
    } else if (size && size === 'medium') {
      if (thumbnail.formats.medium) {
        image = thumbnail.formats.medium.url;
      } else {
        image = product.thumbnail.url;
      }
    } else if (size && size === 'thumbnail') {
      if (thumbnail.formats.thumbnail) {
        image = thumbnail.formats.thumbnail.url;
      } else {
        image = product.thumbnail.url;
      }
    } else if (size && size === 'small') {
      if (thumbnail.formats.small !== undefined) {
        image = thumbnail.formats.small.url;
      } else {
        image = product.thumbnail.url;
      }
    } else {
      image = product.thumbnail.url;
    }

    return /*#__PURE__*/_jsx(LazyLoad, {
      children: /*#__PURE__*/_jsx("img", {
        className: "ps-product__image",
        src: `${baseUrlProduct}${image}`,
        alt: ""
      })
    });
  } else {
    return /*#__PURE__*/_jsx("img", {
      src: "/static/img/undefined-product-thumbnail.jpg",
      alt: product.name
    });
  }
}
function SPGetProductThumbailImages(product, size) {
  let imageFront,
      imageBack = null,
      view;
  const {
    thumbnail,
    thumbnail_back
  } = product;

  if (thumbnail_back) {
    if (size && size === 'large') {
      if (thumbnail_back.formats.large) {
        imageBack = thumbnail_back.formats.large.url;
      } else {
        imageBack = thumbnail_back.url;
      }
    } else if (size && size === 'medium') {
      if (thumbnail_back.formats.medium) {
        imageBack = thumbnail_back.formats.medium.url;
      } else {
        imageBack = thumbnail_back.url;
      }
    } else if (size && size === 'thumbnail') {
      if (thumbnail_back.formats.thumbnail) {
        imageBack = thumbnail_back.formats.thumbnail.url;
      } else {
        imageBack = thumbnail_back.url;
      }
    } else if (size && size === 'small') {
      if (thumbnail_back.formats.small) {
        imageBack = thumbnail_back.formats.small.url;
      } else {
        imageBack = thumbnail_back.url;
      }
    } else {
      imageBack = thumbnail_back.url;
    }
  }

  if (thumbnail) {
    if (size && size === 'large') {
      if (thumbnail.formats.large) {
        imageFront = thumbnail.formats.large.url;
      } else {
        imageFront = product.thumbnail.url;
      }
    } else if (size && size === 'medium') {
      if (thumbnail.formats.medium) {
        imageFront = thumbnail.formats.medium.url;
      } else {
        imageFront = product.thumbnail.url;
      }
    } else if (size && size === 'thumbnail') {
      if (thumbnail.formats.thumbnail) {
        imageFront = thumbnail.formats.thumbnail.url;
      } else {
        imageFront = product.thumbnail.url;
      }
    } else if (size && size === 'small') {
      if (thumbnail.formats.small !== undefined) {
        imageFront = thumbnail.formats.small.url;
      } else {
        imageFront = product.thumbnail.url;
      }
    } else {
      imageFront = product.thumbnail.url;
    }

    return /*#__PURE__*/_jsxs("div", {
      className: "ps-product__thumbnail-images",
      children: [/*#__PURE__*/_jsx(LazyLoad, {
        children: /*#__PURE__*/_jsx("img", {
          className: "ps-product__image",
          src: `${baseUrlProduct}${imageFront}`,
          alt: ""
        })
      }), /*#__PURE__*/_jsx(LazyLoad, {
        children: /*#__PURE__*/_jsx("img", {
          className: "ps-product__image-alt",
          src: `${baseUrlProduct}${imageBack}`,
          alt: ""
        })
      })]
    });
  } else {
    return /*#__PURE__*/_jsx("img", {
      src: "/static/img/undefined-product-thumbnail.jpg",
      alt: product.name
    });
  }
}
function SPGetProductPrice(product) {
  let view;

  if (product.sale_price) {
    view = /*#__PURE__*/_jsxs("p", {
      className: "ps-product__price sale",
      children: [/*#__PURE__*/_jsx("span", {
        children: "\xA3"
      }), formatCurrency(product.price), /*#__PURE__*/_jsxs("del", {
        className: "ml-1",
        children: [/*#__PURE__*/_jsx("span", {
          children: "\xA3"
        }), formatCurrency(product.sale_price)]
      })]
    });
  } else {
    view = /*#__PURE__*/_jsxs("p", {
      className: "ps-product__price",
      children: [/*#__PURE__*/_jsx("span", {
        children: "\xA3"
      }), formatCurrency(product.price)]
    });
  }

  return view;
}
function SPGetProductBadges(product) {
  let view,
      items = [];

  if (product.badge) {
    items.push(product.badge);
  }

  if (product.sale_price) {
    items.push('sale');
  }

  if (items.length > 0) {
    const badgeItems = items.map(item => {
      if (item === 'sale') {
        return /*#__PURE__*/_jsx("span", {
          className: "ps-badge ps-badge--sale",
          children: "Sale"
        }, item);
      }

      if (item === 'hot') {
        return /*#__PURE__*/_jsx("span", {
          className: "ps-badge ps-badge--hot",
          children: "Hot"
        }, item);
      }
    });
    view = /*#__PURE__*/_jsx("div", {
      className: "ps-product__badges",
      children: badgeItems
    });
  }

  return view;
}
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./hooks/useProduct.js









function getImageURL(source, size) {
  let image, imageURL;

  if (source) {
    if (size && size === "large") {
      if (source.formats.large) {
        image = source.formats.large.url;
      } else {
        image = source.url;
      }
    } else if (size && size === "medium") {
      if (source.formats.medium) {
        image = source.formats.medium.url;
      } else {
        image = source.url;
      }
    } else if (size && size === "thumbnail") {
      if (source.formats.thumbnail) {
        image = source.formats.source.url;
      } else {
        image = source.url;
      }
    } else if (size && size === "small") {
      if (source.formats.small !== undefined) {
        image = source.formats.small.url;
      } else {
        image = source.url;
      }
    } else {
      image = source.url;
    }

    imageURL = `${Repository/* baseUrlProduct */.EN}${image}`;
  } else {
    imageURL = `/static/img/undefined-product-thumbnail.jpg`;
  }

  return imageURL;
}

function useProduct() {
  return {
    thumbnailImages: payload => {
      if (payload) {
        if (payload.thumbnail) {
          return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [/*#__PURE__*/(0,jsx_runtime_.jsx)((external_react_lazyload_default()), {
              children: /*#__PURE__*/(0,jsx_runtime_.jsx)("img", {
                src: getImageURL(payload.thumbnail),
                alt: ""
              })
            }), /*#__PURE__*/(0,jsx_runtime_.jsx)((external_react_lazyload_default()), {
              children: /*#__PURE__*/(0,jsx_runtime_.jsx)("img", {
                src: getImageURL(payload.thumbnail),
                className: "second",
                alt: ""
              })
            })]
          });
        }
      }
    },
    price: payload => {
      let view;

      if (payload.sale_price) {
        view = /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
          className: "ps-product__price sale",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsx)("span", {
            children: "$"
          }), formatCurrency(payload.sale_price), /*#__PURE__*/(0,jsx_runtime_.jsxs)("del", {
            className: "ml-2",
            children: [/*#__PURE__*/(0,jsx_runtime_.jsx)("span", {
              children: "$"
            }), formatCurrency(payload.price)]
          })]
        });
      } else {
        view = /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
          className: "ps-product__price",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsx)("span", {
            children: "$"
          }), formatCurrency(payload.price)]
        });
      }

      return view;
    },
    badges: payload => {
      let view = null;

      if (payload.badges && payload.badges.length > 0) {
        const items = payload.badges.map(item => {
          if (item.value === "hot") {
            return /*#__PURE__*/(0,jsx_runtime_.jsx)("span", {
              className: "ps-product__badge hot",
              children: "Hot"
            }, item.id);
          }

          if (item.value === "new") {
            return /*#__PURE__*/(0,jsx_runtime_.jsx)("span", {
              className: "ps-product__badge new",
              children: "New"
            }, item.id);
          }

          if (item.value === "sale") {
            return /*#__PURE__*/(0,jsx_runtime_.jsx)("span", {
              className: "ps-product__badge sale",
              children: "Sale"
            }, item.id);
          }
        });
        view = /*#__PURE__*/(0,jsx_runtime_.jsx)("div", {
          className: "ps-product__badges",
          children: items
        });
      }

      return view;
    },
    onSale: payload => {
      let view = null;

      if (payload.sale_price && payload.on_sale) {
        const discountPercent = ((payload.sale_price - payload.price) / payload.price * 100).toFixed(0);
        view = /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
          className: "ps-product__on-sale",
          children: ["-", discountPercent, "%"]
        });
      }

      return view;
    },
    brand: payload => {
      let view;

      if (payload.product_brands && payload.product_brands.length > 0) {
        view = /*#__PURE__*/(0,jsx_runtime_.jsx)(next_link.default, {
          href: "/shop",
          children: /*#__PURE__*/(0,jsx_runtime_.jsx)("a", {
            className: "text-capitalize",
            children: payload.product_brands[0].name
          })
        });
      } else {
        view = /*#__PURE__*/(0,jsx_runtime_.jsx)(next_link.default, {
          href: "/shop",
          children: /*#__PURE__*/(0,jsx_runtime_.jsx)("a", {
            className: "text-capitalize",
            children: "No Brand"
          })
        });
      }

      return view;
    }
  };
}

/***/ }),

/***/ 1442:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony exports getTotalRecords, getProductsByIds */
/* harmony import */ var _Repository__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3378);

async function getTotalRecords() {
  const reponse = await Repository.get(`${baseDomain}/products/count`).then(response => {
    return response.data;
  }).catch(error => ({
    error: JSON.stringify(error)
  }));
  return reponse;
}
async function getProductsByIds(payload) {
  const endPoint = `${baseDomain}/products?${payload}`;
  const reponse = await Repository.get(endPoint).then(response => {
    return {
      items: response.data
    };
  }).catch(error => ({
    error: JSON.stringify(error)
  }));
  return reponse;
}

class ProductRepository {
  async getProducts(params) {
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__/* .default.get */ .ZP.get(`${_Repository__WEBPACK_IMPORTED_MODULE_0__/* .baseDomain */ .wy}/products?${(0,_Repository__WEBPACK_IMPORTED_MODULE_0__/* .serializeQuery */ .Y$)(params)}`).then(response => {
      if (response.data && response.data.length > 0) {
        return response.data;
      } else {
        return null;
      }
    }).catch(error => {
      console.log(JSON.stringify(error));
      return null;
    });
    return reponse;
  }

  async getProductsById(payload) {
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__/* .default.get */ .ZP.get(`${_Repository__WEBPACK_IMPORTED_MODULE_0__/* .baseDomain */ .wy}/products/${payload}`).then(response => {
      return response.data;
    }).catch(error => ({
      error: JSON.stringify(error)
    }));
    return reponse;
  }

  async getProductsByIds(payload) {
    const endPoint = `${_Repository__WEBPACK_IMPORTED_MODULE_0__/* .baseDomain */ .wy}/products?${payload}`;
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__/* .default.get */ .ZP.get(endPoint).then(response => {
      if (response.data && response.data.length > 0) {
        return response.data;
      } else {
        return null;
      }
    }).catch(error => {
      console.log(JSON.stringify(error));
      return null;
    });
    return reponse;
  }

  async getProductCategories() {
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__/* .default.get */ .ZP.get(`${_Repository__WEBPACK_IMPORTED_MODULE_0__/* .baseDomain */ .wy}/product-categories`).then(response => {
      return response.data;
    }).catch(error => ({
      error: JSON.stringify(error)
    }));
    return reponse;
  }

  async getPrductCategoryBySlug(payload) {
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__/* .default.get */ .ZP.get(`${_Repository__WEBPACK_IMPORTED_MODULE_0__/* .baseDomain */ .wy}/product-categories?slug=${payload}`).then(response => {
      if (response.data && response.data.length > 0) {
        return response.data[0];
      } else {
        return null;
      }
    }).catch(error => {
      console.log(JSON.stringify(error.message));
      return null;
    });
    return reponse;
  }

  async getProductsByPriceRange(payload) {
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__/* .default.get */ .ZP.get(`${_Repository__WEBPACK_IMPORTED_MODULE_0__/* .baseDomain */ .wy}/products?${(0,_Repository__WEBPACK_IMPORTED_MODULE_0__/* .serializeQuery */ .Y$)(payload)}`).then(response => {
      return response.data;
    }).catch(error => ({
      error: JSON.stringify(error)
    }));
    return reponse;
  }

}

/* harmony default export */ __webpack_exports__["ZP"] = (new ProductRepository());

/***/ }),

/***/ 3378:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "wy": function() { return /* binding */ baseDomain; },
/* harmony export */   "EN": function() { return /* binding */ baseUrlProduct; },
/* harmony export */   "FH": function() { return /* binding */ baseUrl; },
/* harmony export */   "Y$": function() { return /* binding */ serializeQuery; }
/* harmony export */ });
/* unused harmony export customHeaders */
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2376);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const baseDomain = "https://mymedi.noudeveloper.com";
const baseUrlProduct = "https://mymedi.noudeveloper.com";
const customHeaders = {
  Accept: "application/json"
};
const baseUrl = `${baseDomain}`;
/* harmony default export */ __webpack_exports__["ZP"] = (axios__WEBPACK_IMPORTED_MODULE_0___default().create({
  baseUrl,
  headers: customHeaders
}));
const serializeQuery = query => {
  return Object.keys(query).map(key => `${encodeURIComponent(key)}=${encodeURIComponent(query[key])}`).join("&");
};

/***/ }),

/***/ 8374:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Hp": function() { return /* binding */ actionTypes; },
/* harmony export */   "fu": function() { return /* binding */ toggleSearchBoxSuccess; },
/* harmony export */   "wb": function() { return /* binding */ toggleDrawer; },
/* harmony export */   "s1": function() { return /* binding */ toggleDrawerSuccess; }
/* harmony export */ });
/* unused harmony export toggleSearchBox */
const actionTypes = {
  TOGGLE_SEARCHBOX: 'TOGGLE_SEARCHBOX',
  TOGGLE_SEARCHBOX_SUCCESS: 'TOGGLE_SEARCHBOX_SUCCESS',
  TOGGLE_DRAWER: 'TOGGLE_DRAWER',
  TOGGLE_DRAWER_SUCCESS: 'TOGGLE_DRAWER_SUCCESS'
};
function toggleSearchBox(payload) {
  return {
    type: actionTypes.TOGGLE_SEARCHBOX,
    payload
  };
}
function toggleSearchBoxSuccess(payload) {
  return {
    type: actionTypes.TOGGLE_SEARCHBOX_SUCCESS,
    payload
  };
}
function toggleDrawer(payload) {
  return {
    type: actionTypes.TOGGLE_DRAWER,
    payload
  };
}
function toggleDrawerSuccess(payload) {
  return {
    type: actionTypes.TOGGLE_DRAWER_SUCCESS,
    payload
  };
}

/***/ }),

/***/ 1888:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Hp": function() { return /* binding */ actionTypes; },
/* harmony export */   "hT": function() { return /* binding */ setWishlistTtems; },
/* harmony export */   "sC": function() { return /* binding */ setWishlistTtemsSuccess; },
/* harmony export */   "w0": function() { return /* binding */ setCartItems; },
/* harmony export */   "_r": function() { return /* binding */ setCartItemsSuccess; },
/* harmony export */   "Sk": function() { return /* binding */ setCompareItems; },
/* harmony export */   "bD": function() { return /* binding */ setCompareItemsSuccess; }
/* harmony export */ });
const actionTypes = {
  SET_WISHLIST_ITEMS: "SET_WISHLIST_ITEMS",
  SET_WISHLIST_ITEMS_SUCCESS: "SET_WISHLIST_ITEMS_SUCCESS",
  SET_CART_ITEMS: "SET_CART_ITEMS",
  SET_CART_ITEMS_SUCCESS: "SET_CART_ITEMS_SUCCESS",
  SET_COMPARE_ITEMS: "SET_COMPARE_ITEMS",
  SET_COMPARE_ITEMS_SUCCESS: "SET_COMPARE_ITEMS_SUCCESS"
};
function setWishlistTtems(payload) {
  return {
    type: actionTypes.SET_WISHLIST_ITEMS,
    payload
  };
}
function setWishlistTtemsSuccess(payload) {
  return {
    type: actionTypes.SET_WISHLIST_ITEMS_SUCCESS,
    payload
  };
}
function setCartItems(payload) {
  return {
    type: actionTypes.SET_CART_ITEMS,
    payload
  };
}
function setCartItemsSuccess(payload) {
  return {
    type: actionTypes.SET_CART_ITEMS_SUCCESS,
    payload
  };
}
function setCompareItems(payload) {
  return {
    type: actionTypes.SET_COMPARE_ITEMS,
    payload
  };
}
function setCompareItemsSuccess(payload) {
  return {
    type: actionTypes.SET_COMPARE_ITEMS_SUCCESS,
    payload
  };
}

/***/ }),

/***/ 8807:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fu": function() { return /* binding */ calculateAmount; },
/* harmony export */   "VK": function() { return /* binding */ calculateCartQuantity; },
/* harmony export */   "wk": function() { return /* binding */ caculateArrayQuantity; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/*
 * React template helpers
 * Author: Nouthemes
 * Developed: diaryforlife

 * */

function calculateAmount(obj) {
  return Object.values(obj).reduce((acc, {
    quantity,
    price
  }) => acc + quantity * price, 0).toFixed(2);
}
function calculateCartQuantity(obj) {
  return Object.values(obj).reduce((acc, {
    quantity
  }) => acc + quantity, 0);
}
function caculateArrayQuantity(obj) {
  return Object.values(obj).reduce(acc => acc + 1, 0);
}

/***/ }),

/***/ 6916:
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"PA":[{"id":"1","text":"Homepages","external":"true","module":"homepages","url":"/"},{"id":"2","text":"Shop","url":"/shop","extraClass":"menu-item-has-children has-mega-menu","subClass":"sub-menu"},{"id":"3","text":"Pages","url":"/about-us","extraClass":"menu-item-has-children mega-menu","subClass":"sub-menu","megaContent":[{"heading":"Category","megaItems":[{"text":"Promo Category","url":"/shop/promotions"},{"text":"Grid","url":"/shop"},{"text":"Grid with details","url":"/shop/with-grid-detail"},{"text":"Grid separate","url":"/shop/with-grid-seperate"},{"text":"List","url":"/shop/list"}]},{"heading":"Pages","megaItems":[{"text":"404","url":"/404"},{"text":"About us","url":"/about-us"},{"text":"Contact us","url":"/contact-us"},{"text":"My Account","url":"/my-account"},{"text":"Forget password","url":"/forget-password"},{"text":"Shopping Cart","url":"/shop/shopping-cart"},{"text":"Coming soon","url":"/comming-soon"},{"text":"Product Result","url":"/search?keyword=a"}]},{"heading":"Product","megaItems":[{"text":"Layout 01","url":"/product/10"},{"text":"Layout 02","url":"/product/layout-2/10"},{"text":"Layout 03","url":"/product/layout-3/10"},{"text":"Product sold out","url":"/product/sold-out/10"}]},{"heading":"Blog","megaItems":[{"text":"Blog sidebar 1","url":"/blog"},{"text":"Blog sidebar 2","url":"/blog/blog-grid"},{"text":"Blog post 1","url":"/post/the-latest-tests-of-popular-masks-in-accordance-with-cv2s-standards"},{"text":"Blog post 2","url":"/post/fullwidth/the-latest-tests-of-popular-masks-in-accordance-with-cv2s-standards"}]},{"heading":"Home","megaItems":[{"text":"Home 01","url":"/"},{"text":"Home 02","url":"/homes/home-2"},{"text":"Home 03","url":"/homes/home-3"},{"text":"Home 04","url":"/homes/home-4"},{"text":"Home 05","url":"/homes/home-5"},{"text":"Home 06","url":"/homes/home-6"},{"text":"Home 07","url":"/homes/home-7"}]}]},{"id":"5","text":"Blog","url":"/blog"},{"id":"6","text":"Contact","url":"/contact-us"}],"m6":[{"id":"1","text":"Homepages","external":"true","module":"homepages","url":"/"},{"id":"2","text":"Shop","url":"/shop","extraClass":"menu-item-has-children has-mega-menu","subClass":"sub-menu"},{"id":"3","text":"Pages","url":"/pages/about-us","extraClass":"menu-item-has-children mega-menu","subClass":"sub-menu","megaContent":[{"heading":"Category","megaItems":[{"text":"Promo Category","url":"/shop/promotions"},{"text":"Grid","url":"/shop"},{"text":"Grid with details","url":"/shop/with-grid-detail"},{"text":"Grid separate","url":"/shop/with-grid-seperate"},{"text":"List","url":"/shop/list"}]},{"heading":"Pages","megaItems":[{"text":"404","url":"/404"},{"text":"About us","url":"/about-us"},{"text":"Contact us","url":"/contact-us"},{"text":"My Account","url":"/my-account"},{"text":"Forget password","url":"/forget-password"},{"text":"Shopping Cart","url":"/shop/shopping-cart"},{"text":"Compare","url":"/shop/compare"},{"text":"Coming soon","url":"/comming-soon"},{"text":"Product Result","url":"/search?keyword=a"}]},{"heading":"Product","megaItems":[{"text":"Layout 01","url":"/product/10"},{"text":"Layout 02","url":"/product/layout-2/10"},{"text":"Layout 03","url":"/product/layout-3/10"},{"text":"Product sold out","url":"/product/sold-out/10"}]},{"heading":"Blog","megaItems":[{"text":"Blog sidebar 1","url":"/blog"},{"text":"Blog sidebar 2","url":"/blog/blog-grid"},{"text":"Blog post 1","url":"/post/the-latest-tests-of-popular-masks-in-accordance-with-cv2s-standards"},{"text":"Blog post 2","url":"/post/fullwidth/the-latest-tests-of-popular-masks-in-accordance-with-cv2s-standards"}]},{"heading":"Home","megaItems":[{"text":"Home 01","url":"/"},{"text":"Home 02","url":"/homes/home-2"},{"text":"Home 03","url":"/homes/home-3"},{"text":"Home 04","url":"/homes/home-4"},{"text":"Home 05","url":"/homes/home-5"},{"text":"Home 06","url":"/homes/home-6"},{"text":"Home 07","url":"/homes/home-7"}]}]},{"id":"4","text":"Collection","url":"/shop"},{"id":"4_1","text":"Sale","url":"/shop"},{"id":"4_2","text":"Best Deals","url":"/shop"},{"id":"4_3","text":"Dental tools","url":"/shop"}],"nn":[{"id":"1","text":"Homepage","url":"/"},{"id":"2","text":"Shop","url":"/shop","extraClass":"menu-item-has-children has-mega-menu","subClass":"sub-menu"},{"id":"3","text":"Pages","url":"/pages/about-us","extraClass":"menu-item-has-children mega-menu","subClass":"sub-menu","megaContent":[{"heading":"Category","megaItems":[{"text":"Promo Category","url":"/shop/promotions"},{"text":"Grid","url":"/shop"},{"text":"Grid with details","url":"/shop/with-grid-detail"},{"text":"Grid separate","url":"/shop/with-grid-seperate"},{"text":"List","url":"/shop/list"}]},{"heading":"Pages","megaItems":[{"text":"404","url":"/404"},{"text":"About us","url":"/about-us"},{"text":"Contact us","url":"/contact-us"},{"text":"My Account","url":"/my-account"},{"text":"Forget password","url":"/forget-password"},{"text":"Shopping Cart","url":"/shop/shopping-cart"},{"text":"Coming soon","url":"/comming-soon"},{"text":"Product Result","url":"/search?keyword=a"}]},{"heading":"Product","megaItems":[{"text":"Layout 01","url":"/product/10"},{"text":"Layout 02","url":"/product/layout-2/10"},{"text":"Layout 03","url":"/product/layout-3/10"},{"text":"Product sold out","url":"/product/sold-out/10"}]},{"heading":"Blog","megaItems":[{"text":"Blog sidebar 1","url":"/blog"},{"text":"Blog sidebar 2","url":"/blog/blog-grid"},{"text":"Blog post 1","url":"/post/the-latest-tests-of-popular-masks-in-accordance-with-cv2s-standards"},{"text":"Blog post 2","url":"/post/fullwidth/the-latest-tests-of-popular-masks-in-accordance-with-cv2s-standards"}]},{"heading":"Home","megaItems":[{"text":"Home 01","url":"/"},{"text":"Home 02","url":"/homes/home-2"},{"text":"Home 03","url":"/homes/home-3"},{"text":"Home 04","url":"/homes/home-4"},{"text":"Home 05","url":"/homes/home-5"},{"text":"Home 06","url":"/homes/home-6"},{"text":"Home 07","url":"/homes/home-7"}]}]}],"TH":{"id":"1","text":"Pages","url":"/pages/about-us","extraClass":"menu-item-has-children mega-menu","subClass":"sub-menu","megaContent":[{"heading":"Wound Care","megaItems":[{"text":"Bandages","url":"/shop"},{"text":"Gypsum foundations","url":"/shop"},{"text":"Patches and tapes","url":"/shop"},{"text":"Stomatology","url":"/shop"},{"text":"Surgical sutures","url":"/shop"},{"text":"Uniforms","url":"/shop"},{"text":"Wound healing","url":"/shop"}]},{"heading":"Higiene","megaItems":[{"text":"Disposable products","url":"/shop"},{"text":"Face masks","url":"/shop"},{"text":"Gloves","url":"/shop"},{"text":"Protective covers","url":"/shop"},{"text":"Sterilization","url":"/shop"},{"text":"Surgical foils","url":"/shop"},{"text":"Uniforms","url":"/shop"}]},{"heading":"Laboratory","megaItems":[{"text":"Devices","url":"/shop"},{"text":"Diagnostic tests","url":"/shop"},{"text":"Disinfectants","url":"/shop"},{"text":"Dyes","url":"/shop"},{"text":"Pipettes","url":"/shop"},{"text":"Test-tubes","url":"/shop"},{"text":"Tubes","url":"/shop"}]},{"heading":"Tools","megaItems":[{"text":"Accessories Tools","url":"/shop"},{"text":"Blood pressure","url":"/shop"},{"text":"Capsules","url":"/shop"},{"text":"Dental","url":"/shop"},{"text":"Micrscope","url":"/shop"},{"text":"Pressure","url":"/shop"},{"text":"Sugar level","url":"/shop"}]},{"heading":"Diagnosis","megaItems":[{"text":"Biopsy tools","url":"/shop"},{"text":"Endoscopes","url":"/shop"},{"text":"Monitoring","url":"/shop"},{"text":"Otoscopes","url":"/shop"},{"text":"Oxygen concentrators","url":"/shop"},{"text":"Tables and assistants","url":"/shop"},{"text":"Thermometer","url":"/shop"}]},{"heading":"Equipment","megaItems":[{"text":"Blades","url":"/shop"},{"text":"Education","url":"/shop"},{"text":"Germicidal lamps","url":"/shop"},{"text":"Heart Health","url":"/shop"},{"text":"Infusion stands","url":"/shop"},{"text":"Lighting","url":"/shop"},{"text":"Machines","url":"/shop"}]}]},"v_":[{"id":"1","text":"About","url":"/about"},{"id":"2","text":"Order Tracking","url":"/shop/order-tracking"},{"id":"3","text":"Blog","url":"/shop/order-tracking"},{"id":"4","text":"contact","url":"/contact"}],"dG":[{"id":"1","text":"Homepages","url":"/shop","extraClass":"menu-item-has-children dropdown","subClass":"sub-menu","subMenu":[{"text":"Home 01","url":"/"},{"text":"Home 02","url":"/homes/home-2"},{"text":"Home 03","url":"/homes/home-3"},{"text":"Home 04","url":"/homes/home-4"},{"text":"Home 05","url":"/homes/home-5"},{"text":"Home 06","url":"/homes/home-6"},{"text":"Home 07","url":"/homes/home-7"}]},{"id":"2","text":"Shop","url":"/shop","extraClass":"menu-item-has-children has-mega-menu","subClass":"sub-menu","mega":"true","megaContent":[{"id":"1","heading":"Category","megaItems":[{"text":"Promo Category","url":"/shop/promotions"},{"text":"Grid","url":"/shop"},{"text":"Grid with details","url":"/shop/with-grid-detail"},{"text":"Grid separate","url":"/shop/with-grid-seperate"},{"text":"List","url":"/shop/list"}]},{"id":"2","heading":"Pages","megaItems":[{"text":"404","url":"/404"},{"text":"About us","url":"/about-us"},{"text":"Contact us","url":"/contact-us"},{"text":"My Account","url":"/my-account"},{"text":"Forget password","url":"/forget-password"},{"text":"Shopping Cart","url":"/shop/shopping-cart"},{"text":"Coming soon","url":"/comming-soon"},{"text":"Product Result","url":"/search?keyword=a"}]},{"id":"3","heading":"Product","megaItems":[{"text":"Layout 01","url":"/product/10"},{"text":"Layout 02","url":"/product/layout-2/10"},{"text":"Layout 03","url":"/product/layout-3/10"},{"text":"Product sold out","url":"/product/sold-out/10"}]},{"id":"4","heading":"Blog","megaItems":[{"text":"Blog sidebar 1","url":"/blog"},{"text":"Blog sidebar 2","url":"/blog/blog-grid"},{"text":"Blog post 1","url":"/post/the-latest-tests-of-popular-masks-in-accordance-with-cv2s-standards"},{"text":"Blog post 2","url":"/post/fullwidth/the-latest-tests-of-popular-masks-in-accordance-with-cv2s-standards"}]},{"id":"5","heading":"Home","megaItems":[{"text":"Home 01","url":"/"},{"text":"Home 02","url":"/homes/home-2"},{"text":"Home 03","url":"/homes/home-3"},{"text":"Home 04","url":"/homes/home-4"},{"text":"Home 05","url":"/homes/home-5"},{"text":"Home 06","url":"/homes/home-6"},{"text":"Home 07","url":"/homes/home-7"}]}]},{"id":"4","text":"Blogs","url":"/blog","current":"shop","extraClass":"menu-item-has-children dropdown","subClass":"sub-menu","subMenu":[{"text":"Grid","url":"/blog"},{"text":"Listing","url":"/blog/blog-list"},{"text":"With Sidebar","url":"/blog/blog-sidebar"},{"text":"Post Detail","url":"/post/these-glittery-sneakers-will-make-you-want-to-ditch-your-holiday-heels"}]},{"id":"5","text":"Pages","url":"/about-us","current":"shop","extraClass":"menu-item-has-children dropdown","subClass":"sub-menu","subMenu":[{"text":"Blog sidebar 1","url":"/blog"},{"text":"Blog sidebar 2","url":"/blog/blog-grid"},{"text":"Blog post 1","url":"/post/the-latest-tests-of-popular-masks-in-accordance-with-cv2s-standards"},{"text":"Blog post 2","url":"/post/fullwidth/the-latest-tests-of-popular-masks-in-accordance-with-cv2s-standards"}]},{"id":"6","text":"Contact us","url":"contact-us"}],"LL":[{"id":"1","text":"Home 1","image":"/static/img/promotion/1.jpg","url":"/"},{"id":"2","text":"Home 2","image":"/static/img/promotion/2.jpg","url":"/homes/home-2"},{"id":"3","text":"Home 3","image":"/static/img/promotion/3.jpg","url":"/homes/home-3"},{"id":"4","text":"Home 4","image":"/static/img/promotion/4.jpg","url":"/homes/home-4"},{"id":"5","text":"Home 5","image":"/static/img/promotion/5.jpg","url":"/homes/home-5"},{"id":"6","text":"Home 6 Masks","image":"/static/img/promotion/6.jpg","url":"/homes/home-6"},{"id":"7","text":"Home 7 One product","image":"/static/img/promotion/7.jpg","url":"/homes/home-7"}]}');

/***/ }),

/***/ 4453:
/***/ (function() {

/* (ignored) */

/***/ })

};
;