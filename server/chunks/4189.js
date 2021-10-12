exports.id = 4189;
exports.ids = [4189];
exports.modules = {

/***/ 4189:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ modules_ModuleHeaderTopBar; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./public/static/data/menu.json
var menu = __webpack_require__(6916);
// EXTERNAL MODULE: ./components/elements/menu/Menu.jsx + 2 modules
var Menu = __webpack_require__(4899);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./components/shared/headers/modules/ModuleHeaderSocialLinks.jsx




const ModuleHeaderSocialLinks = () => {
  const links = [{
    id: 1,
    classes: 'fa fa-facebook'
  }, {
    id: 2,
    classes: 'fa fa-instagram'
  }, {
    id: 3,
    classes: 'fa fa-youtube-play'
  }, {
    id: 4,
    classes: 'fa fa-pinterest'
  }, {
    id: 5,
    classes: 'fa fa-linkedin'
  }]; // Views

  let linksView = links.map(item => /*#__PURE__*/(0,jsx_runtime_.jsx)("li", {
    children: /*#__PURE__*/(0,jsx_runtime_.jsx)(next_link.default, {
      href: "/",
      children: /*#__PURE__*/(0,jsx_runtime_.jsx)("a", {
        children: /*#__PURE__*/(0,jsx_runtime_.jsx)("i", {
          className: item.classes
        })
      })
    })
  }, item.id));
  return /*#__PURE__*/(0,jsx_runtime_.jsx)("ul", {
    className: "ps-list--social header__social-links",
    children: linksView
  });
};

/* harmony default export */ var modules_ModuleHeaderSocialLinks = (ModuleHeaderSocialLinks);
// EXTERNAL MODULE: ./components/shared/headers/modules/ModuleHeaderSwitcher.js
var ModuleHeaderSwitcher = __webpack_require__(3952);
;// CONCATENATED MODULE: ./components/shared/headers/modules/ModuleHeaderTopBar.jsx








const ModuleHeaderTopBar = ({
  type = "primary"
}) => {
  if (type === "second") {
    return /*#__PURE__*/(0,jsx_runtime_.jsx)("div", {
      className: "header__topbar type--second",
      children: /*#__PURE__*/(0,jsx_runtime_.jsx)("div", {
        className: "container",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "header__topbar-right",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsx)("p", {
            children: "Need help? 0020 500 - MYMEDI - 000"
          }), /*#__PURE__*/(0,jsx_runtime_.jsx)(Menu/* default */.Z, {
            source: menu/* header_topbar_menu */.v_,
            className: "menu--topbar"
          }), /*#__PURE__*/(0,jsx_runtime_.jsx)(modules_ModuleHeaderSocialLinks, {})]
        })
      })
    });
  } else {
    return /*#__PURE__*/(0,jsx_runtime_.jsx)("div", {
      className: "header__topbar",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "container",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsx)("div", {
          className: "header__topbar-left",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
            children: [/*#__PURE__*/(0,jsx_runtime_.jsx)("strong", {
              children: "100% Secure delivery"
            }), " without contacting the courier"]
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "header__topbar-right",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsx)(Menu/* default */.Z, {
            source: menu/* header_topbar_menu */.v_,
            className: "menu--topbar"
          }), /*#__PURE__*/(0,jsx_runtime_.jsx)(modules_ModuleHeaderSocialLinks, {}), /*#__PURE__*/(0,jsx_runtime_.jsx)(ModuleHeaderSwitcher/* default */.Z, {})]
        })]
      })
    });
  }
};

/* harmony default export */ var modules_ModuleHeaderTopBar = (ModuleHeaderTopBar);

/***/ })

};
;