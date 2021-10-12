exports.id = 3617;
exports.ids = [3617];
exports.modules = {

/***/ 8141:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_elements_Rating__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2734);





const TestimonialItem = ({
  source
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: "ps-review",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
      className: "ps-review__text",
      children: source.text
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
      className: "ps-review__name",
      children: source.name
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
      className: "ps-review__review",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_elements_Rating__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {})
    })]
  });
};

/* harmony default export */ __webpack_exports__["Z"] = (TestimonialItem);

/***/ }),

/***/ 3617:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ sections_Testimonials; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./components/elements/carousel/NextArrow.jsx
var NextArrow = __webpack_require__(114);
// EXTERNAL MODULE: ./components/elements/carousel/PrevArrow.jsx
var PrevArrow = __webpack_require__(7754);
// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__(9080);
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_);
// EXTERNAL MODULE: ./components/elements/Rating.jsx
var Rating = __webpack_require__(2734);
;// CONCATENATED MODULE: ./public/static/data/testimonials.json
var testimonials_namespaceObject = JSON.parse('{"A":[{"name":"Esther Howard","images":["img/reviews/testimonial1.jpg","img/reviews/testimonial2.jpg"],"avatar":"img/avatar/1-100x100.png","date":"October 30","rate":4,"text":"There was a small mistake in the order. In return, I got the correct order and I could keep the wrong one for myself."},{"name":"Albert Flores","avatar":"img/avatar/2-100x100.png","date":"October 25","rate":4,"text":"I ordered on Friday evening and on Monday at 12:30 the package was with me. I have never encountered such a fast order processing."},{"name":"Dianne Russell","images":["img/reviews/testimonial6.jpg"],"avatar":"img/avatar/5-100x100.png","date":"September 24","rate":4,"text":"I ordered on Friday evening and on Monday at 12:30 the package was with me. I have never encountered such a fast order processing."},{"name":"Darlene Robertson","avatar":"img/avatar/4-100x100.png","date":"May 20","rate":4,"text":"Everything is perfect. I would recommend!"},{"name":"Brooklyn Simmons","images":["img/reviews/testimonial3.jpg","img/reviews/testimonial4.jpg","img/reviews/testimonial5.png"],"avatar":"img/avatar/3-100x100.png","date":"May 29","rate":4,"text":"There was a small mistake in the order. In return, I got the correct order and I could keep the wrong one for myself."},{"name":"Kristin Watson","avatar":"img/avatar/6-100x100.png","date":"September 9","rate":4,"text":"Everything is perfect. I would recommend!"},{"name":"Mark J.","rate":4,"avatar":"img/avatar/6-100x100.png","text":"I ordered on Friday evening and on Monday at 12:30 the package was with me. I have never encountered such a fast order processing."}]}');
// EXTERNAL MODULE: ./components/elements/TestimonialItem.jsx
var TestimonialItem = __webpack_require__(8141);
;// CONCATENATED MODULE: ./components/shared/sections/Testimonials.jsx



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const carouselSetting = {
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: true,
  dots: true,
  nextArrow: /*#__PURE__*/(0,jsx_runtime_.jsx)(NextArrow/* default */.Z, {}),
  prevArrow: /*#__PURE__*/(0,jsx_runtime_.jsx)(PrevArrow/* default */.Z, {}),
  responsive: [{
    breakpoint: 1366,
    settings: {
      slidesToShow: 4,
      slidesToScroll: 1,
      dots: true,
      arrows: false
    }
  }, {
    breakpoint: 1024,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 1,
      dots: true,
      arrows: false
    }
  }, {
    breakpoint: 768,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1,
      dots: true,
      arrows: false
    }
  }, {
    breakpoint: 480,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      arrows: false
    }
  }]
};
const containerSetting = {
  infinite: false,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  dots: true,
  nextArrow: /*#__PURE__*/(0,jsx_runtime_.jsx)(NextArrow/* default */.Z, {}),
  prevArrow: /*#__PURE__*/(0,jsx_runtime_.jsx)(PrevArrow/* default */.Z, {}),
  responsive: [{
    breakpoint: 1366,
    settings: {
      slidesToShow: 4,
      slidesToScroll: 1,
      dots: true,
      arrows: false
    }
  }, {
    breakpoint: 1024,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 1,
      dots: true,
      arrows: false
    }
  }, {
    breakpoint: 768,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1,
      dots: true,
      arrows: false
    }
  }, {
    breakpoint: 480,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      arrows: false
    }
  }]
};

const Testimonials = ({
  container = false
}) => {
  const items = testimonials_namespaceObject.A.map((item, index) => /*#__PURE__*/(0,jsx_runtime_.jsx)("div", {
    className: "ps-carousel__item",
    children: /*#__PURE__*/(0,jsx_runtime_.jsx)(TestimonialItem/* default */.Z, {
      source: item
    })
  }, index));

  if (!container) {
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)("section", {
      className: "ps-section--reviews ps-testimonials",
      style: {
        backgroundImage: `url('/static/img/roundbg.png')`
      },
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("h3", {
        className: "ps-section__title",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsx)("img", {
          src: "/static/img/quote-icon.png",
          alt: ""
        }), "Latest reviews"]
      }), /*#__PURE__*/(0,jsx_runtime_.jsx)("div", {
        className: "ps-section__content",
        children: /*#__PURE__*/(0,jsx_runtime_.jsx)("div", {
          className: "container",
          children: /*#__PURE__*/(0,jsx_runtime_.jsx)((external_react_slick_default()), _objectSpread(_objectSpread({}, carouselSetting), {}, {
            className: "ps-carousel",
            children: items
          }))
        })
      })]
    });
  } else {
    return /*#__PURE__*/(0,jsx_runtime_.jsx)("section", {
      className: "ps-section--reviews ps-testimonials",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "container",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("h3", {
          className: "ps-section__title",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsx)("img", {
            src: "/static/img/quote-icon.png",
            alt: ""
          }), "Latest reviews"]
        }), /*#__PURE__*/(0,jsx_runtime_.jsx)("div", {
          className: "ps-section__content",
          children: /*#__PURE__*/(0,jsx_runtime_.jsx)((external_react_slick_default()), _objectSpread(_objectSpread({}, containerSetting), {}, {
            className: "ps-carousel",
            children: items
          }))
        })]
      })
    });
  }
};

/* harmony default export */ var sections_Testimonials = (Testimonials);

/***/ })

};
;