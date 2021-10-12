exports.id = 8514;
exports.ids = [8514];
exports.modules = {

/***/ 8514:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ shop_Shop; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__(953);
;// CONCATENATED MODULE: ./components/partials/shop/modules/ModuleShopSortBy.jsx





const ModuleShopSortBy = () => {
  const sortByItems = [{
    id: 1,
    text: 'Popularity'
  }, {
    id: 2,
    text: 'Avarage Rating'
  }, {
    id: 3,
    text: 'Latest'
  }, {
    id: 4,
    text: 'Price: Low - High'
  }, {
    id: 5,
    text: 'Price: High - Low'
  }];
  const viewItems = sortByItems.map(item => /*#__PURE__*/(0,jsx_runtime_.jsx)(external_antd_.Menu.Item, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsx)("a", {
      href: "#",
      children: item.text
    })
  }, item.id));

  const view = /*#__PURE__*/(0,jsx_runtime_.jsx)(external_antd_.Menu, {
    children: viewItems
  });

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "ps-shop__sortby",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsx)("span", {
      children: "Sortby"
    }), /*#__PURE__*/(0,jsx_runtime_.jsx)(external_antd_.Dropdown, {
      overlay: view,
      placement: "bottomLeft",
      className: "ps-dropdown-toggle",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Button, {
        children: ["Popularity ", /*#__PURE__*/(0,jsx_runtime_.jsx)("i", {
          className: "icon-chevron-down"
        })]
      })
    })]
  });
};

/* harmony default export */ var modules_ModuleShopSortBy = (ModuleShopSortBy);
;// CONCATENATED MODULE: ./components/partials/shop/modules/ModuleShopPaginationRange.jsx





const ModuleShopPaginationRange = () => {
  let ranges = [10, 20, 50, 100];
  const paginationRangeItems = ranges.map(item => /*#__PURE__*/(0,jsx_runtime_.jsx)(external_antd_.Menu.Item, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsx)("a", {
      href: "#",
      children: item
    })
  }, item));

  const view = /*#__PURE__*/(0,jsx_runtime_.jsx)(external_antd_.Menu, {
    children: paginationRangeItems
  });

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "ps-shop__pagination-range",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsx)("span", {
      children: "Show"
    }), /*#__PURE__*/(0,jsx_runtime_.jsx)(external_antd_.Dropdown, {
      overlay: view,
      placement: "bottomLeft",
      className: "ps-dropdown-toggle",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Button, {
        children: [/*#__PURE__*/(0,jsx_runtime_.jsx)("strong", {
          children: "10"
        }), " ", /*#__PURE__*/(0,jsx_runtime_.jsx)("i", {
          className: "icon-chevron-down"
        })]
      })
    })]
  });
};

/* harmony default export */ var modules_ModuleShopPaginationRange = (ModuleShopPaginationRange);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
;// CONCATENATED MODULE: ./components/partials/shop/modules/ModuleShopActions.js






const layoutItems = [{
  id: 1,
  url: "/shop?layout=list",
  image: "/static/img/icon/bars.svg",
  imageActive: "/static/img/icon/bars.svg"
}, {
  id: 2,
  url: "/shop?layout=grid&columns=2",
  image: "/static/img/icon/gird2.svg",
  imageActive: "/static/img/icon/gird2.svg"
}, {
  id: 3,
  url: "/shop?layout=grid&columns=3",
  image: "/static/img/icon/gird3.svg",
  imageActive: "/static/img/icon/gird3.svg"
}, {
  id: 4,
  url: "/shop?layout=grid&columns=4",
  image: "/static/img/icon/gird4.svg",
  imageActive: "/static/img/icon/gird4.svg"
}];

const ModuleShopActions = () => {
  const {
    0: selectedLayout,
    1: setSelectedLayout
  } = (0,external_react_.useState)(layoutItems[3]);
  const Router = (0,router_.useRouter)();

  function handleSelecteLayout(e, layout) {
    e.preventDefault();
    setSelectedLayout(layout);
    Router.push(layout.url, undefined, {
      scroll: false
    });
  } // Views


  const swichersItemsView = layoutItems.map(item => /*#__PURE__*/(0,jsx_runtime_.jsx)("a", {
    className: `ps-shop__layout-switcher ${item.id === selectedLayout.id ? "active" : ""}`,
    onClick: e => handleSelecteLayout(e, item),
    children: /*#__PURE__*/(0,jsx_runtime_.jsx)("img", {
      src: item.image,
      alt: item.image
    })
  }, item.id));
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "ps-shop__actions",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "ps-shop__actions-left",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsx)("div", {
        className: "ps-shop__layout-switchers",
        children: swichersItemsView
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "ps-checkbox",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsx)("input", {
          className: "form-control",
          type: "checkbox",
          id: "show-onsale",
          name: "show-onsale"
        }), /*#__PURE__*/(0,jsx_runtime_.jsx)("label", {
          htmlFor: "show-onsale",
          children: "Show only products on sale"
        })]
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "ps-shop__actions-right",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsx)(modules_ModuleShopSortBy, {}), /*#__PURE__*/(0,jsx_runtime_.jsx)(modules_ModuleShopPaginationRange, {})]
    })]
  });
};

/* harmony default export */ var modules_ModuleShopActions = (ModuleShopActions);
// EXTERNAL MODULE: ./components/elements/basic/CustomPagination.jsx
var CustomPagination = __webpack_require__(5887);
;// CONCATENATED MODULE: ./components/partials/shop/Shop.jsx






const Shop = ({
  children,
  classes,
  fullwidth = false,
  actions = true
}) => {
  let actionsView;

  if (actions) {
    actionsView = /*#__PURE__*/(0,jsx_runtime_.jsx)("div", {
      className: "ps-shop__header",
      children: /*#__PURE__*/(0,jsx_runtime_.jsx)("div", {
        className: "container",
        children: /*#__PURE__*/(0,jsx_runtime_.jsx)(modules_ModuleShopActions, {})
      })
    });
  }

  if (!fullwidth) {
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: `ps-shop ${classes}`,
      children: [actionsView, /*#__PURE__*/(0,jsx_runtime_.jsx)("div", {
        className: "ps-shop__content",
        children: children
      }), /*#__PURE__*/(0,jsx_runtime_.jsx)("div", {
        className: "ps-shop__footer",
        children: /*#__PURE__*/(0,jsx_runtime_.jsx)(CustomPagination/* default */.Z, {})
      })]
    });
  } else {
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: `ps-shop ${classes !== undefined ? classes : ""}`,
      children: [actionsView, /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "ps-shop__content",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsx)("div", {
          className: "container",
          children: children
        }), /*#__PURE__*/(0,jsx_runtime_.jsx)("div", {
          className: "ps-shop__footer",
          children: /*#__PURE__*/(0,jsx_runtime_.jsx)(CustomPagination/* default */.Z, {})
        })]
      })]
    });
  }
};

/* harmony default export */ var shop_Shop = (Shop);

/***/ })

};
;