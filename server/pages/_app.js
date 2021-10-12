(function() {
var exports = {};
exports.id = 2888;
exports.ids = [2888];
exports.modules = {

/***/ 7847:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ _app; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
;// CONCATENATED MODULE: external "redux"
var external_redux_namespaceObject = require("redux");;
;// CONCATENATED MODULE: external "redux-saga"
var external_redux_saga_namespaceObject = require("redux-saga");;
var external_redux_saga_default = /*#__PURE__*/__webpack_require__.n(external_redux_saga_namespaceObject);
// EXTERNAL MODULE: ./store/app/action.js
var app_action = __webpack_require__(8374);
;// CONCATENATED MODULE: ./store/app/reducer.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  isSearchBoxShow: false,
  isDrawerShow: false
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case app_action/* actionTypes.TOGGLE_SEARCHBOX_SUCCESS */.Hp.TOGGLE_SEARCHBOX_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        isSearchBoxShow: action.payload
      });

    case app_action/* actionTypes.TOGGLE_DRAWER_SUCCESS */.Hp.TOGGLE_DRAWER_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        isDrawerShow: action.payload
      });

    default:
      return state;
  }
}

/* harmony default export */ var app_reducer = (reducer);
;// CONCATENATED MODULE: ./store/shop/action.js
const actionTypes = {
  CHANGE_SHOP_GRID_VIEW: 'CHANGE_SHOP_GRID_VIEW',
  CHANGE_SHOP_GRID_VIEW_SUCCESS: 'CHANGE_SHOP_GRID_VIEW_SUCCESS',
  TOGGLE_SHOP_FILTER: 'TOGGLE_SHOP_FILTER',
  TOGGLE_SHOP_FILTER_SUCCESS: 'TOGGLE_SHOP_FILTER_SUCCESS'
};
function changeShopGridView(payload) {
  return {
    type: actionTypes.CHANGE_SHOP_GRID_VIEW,
    payload
  };
}
function changeShopGridViewSuccess(payload) {
  return {
    type: actionTypes.CHANGE_SHOP_GRID_VIEW_SUCCESS,
    payload
  };
}
function toggleShopFilter(payload) {
  return {
    type: actionTypes.TOGGLE_SHOP_FILTER,
    payload
  };
}
function toggleShopFilterSuccess(payload) {
  return {
    type: actionTypes.TOGGLE_SHOP_FILTER_SUCCESS,
    payload
  };
}
;// CONCATENATED MODULE: ./store/shop/reducer.js
function reducer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function reducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { reducer_ownKeys(Object(source), true).forEach(function (key) { reducer_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { reducer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function reducer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const reducer_initialState = {
  isGridView: true,
  isFilter: false
};

function reducer_reducer(state = reducer_initialState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_SHOP_GRID_VIEW_SUCCESS:
      return reducer_objectSpread(reducer_objectSpread({}, state), {}, {
        isGridView: action.payload
      });

    case actionTypes.TOGGLE_SHOP_FILTER_SUCCESS:
      return reducer_objectSpread(reducer_objectSpread({}, state), {}, {
        isFilter: action.payload
      });

    default:
      return state;
  }
}

/* harmony default export */ var shop_reducer = (reducer_reducer);
// EXTERNAL MODULE: ./store/ecomerce/action.js
var ecomerce_action = __webpack_require__(1888);
;// CONCATENATED MODULE: ./store/ecomerce/reducer.js
function ecomerce_reducer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function ecomerce_reducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ecomerce_reducer_ownKeys(Object(source), true).forEach(function (key) { ecomerce_reducer_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ecomerce_reducer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function ecomerce_reducer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initState = {
  wishlistItems: [],
  compareItems: [],
  cartItems: []
};

function ecomerce_reducer_reducer(state = initState, action) {
  switch (action.type) {
    case ecomerce_action/* actionTypes.SET_WISHLIST_ITEMS_SUCCESS */.Hp.SET_WISHLIST_ITEMS_SUCCESS:
      return ecomerce_reducer_objectSpread(ecomerce_reducer_objectSpread({}, state), {}, {
        wishlistItems: action.payload
      });

    case ecomerce_action/* actionTypes.SET_CART_ITEMS_SUCCESS */.Hp.SET_CART_ITEMS_SUCCESS:
      return ecomerce_reducer_objectSpread(ecomerce_reducer_objectSpread({}, state), {}, {
        cartItems: action.payload
      });

    case ecomerce_action/* actionTypes.SET_COMPARE_ITEMS_SUCCESS */.Hp.SET_COMPARE_ITEMS_SUCCESS:
      return ecomerce_reducer_objectSpread(ecomerce_reducer_objectSpread({}, state), {}, {
        compareItems: action.payload
      });

    default:
      return state;
  }
}

/* harmony default export */ var ecomerce_reducer = (ecomerce_reducer_reducer);
;// CONCATENATED MODULE: ./store/rootReducer.js




/* harmony default export */ var rootReducer = ((0,external_redux_namespaceObject.combineReducers)({
  app: app_reducer,
  shop: shop_reducer,
  ecomerce: ecomerce_reducer
}));
;// CONCATENATED MODULE: external "redux-saga/effects"
var effects_namespaceObject = require("redux-saga/effects");;
;// CONCATENATED MODULE: external "es6-promise"
var external_es6_promise_namespaceObject = require("es6-promise");;
;// CONCATENATED MODULE: ./store/app/saga.js



(0,external_es6_promise_namespaceObject.polyfill)();

function* toggleSearchBoxSaga({
  payload
}) {
  try {
    yield (0,effects_namespaceObject.put)((0,app_action/* toggleSearchBoxSuccess */.fu)(payload));
  } catch (err) {
    console.log(err);
  }
}

function* toggleDrawerSaga({
  payload
}) {
  try {
    yield (0,effects_namespaceObject.put)((0,app_action/* toggleDrawerSuccess */.s1)(payload));
  } catch (err) {
    console.log(err);
  }
}

function* rootSaga() {
  yield (0,effects_namespaceObject.all)([(0,effects_namespaceObject.takeEvery)(app_action/* actionTypes.TOGGLE_SEARCHBOX */.Hp.TOGGLE_SEARCHBOX, toggleSearchBoxSaga)]);
  yield (0,effects_namespaceObject.all)([(0,effects_namespaceObject.takeEvery)(app_action/* actionTypes.TOGGLE_DRAWER */.Hp.TOGGLE_DRAWER, toggleDrawerSaga)]);
}
;// CONCATENATED MODULE: ./store/shop/saga.js




(0,external_es6_promise_namespaceObject.polyfill)();

function* handleToggleViewModeSaga({
  payload
}) {
  try {
    yield (0,effects_namespaceObject.put)(changeShopGridViewSuccess(payload));
  } catch (err) {
    console.log(err);
  }
}

function* handleToggleShopFilterSaga({
  payload
}) {
  try {
    yield (0,effects_namespaceObject.put)(toggleShopFilterSuccess(payload));
  } catch (err) {
    console.log(err);
  }
}

function* saga_rootSaga() {
  yield (0,effects_namespaceObject.all)([(0,effects_namespaceObject.takeEvery)(actionTypes.CHANGE_SHOP_GRID_VIEW, handleToggleViewModeSaga), (0,effects_namespaceObject.takeEvery)(actionTypes.TOGGLE_SHOP_FILTER, handleToggleShopFilterSaga)]);
}
;// CONCATENATED MODULE: ./store/ecomerce/saga.js



function* getWishlistItems({
  payload
}) {
  try {
    yield (0,effects_namespaceObject.put)((0,ecomerce_action/* setWishlistTtemsSuccess */.sC)(payload));
  } catch (err) {
    console.log(err);
  }
}

function* getCartItems({
  payload
}) {
  try {
    yield (0,effects_namespaceObject.put)((0,ecomerce_action/* setCartItemsSuccess */._r)(payload));
  } catch (err) {
    console.log(err);
  }
}

function* getCompareItems({
  payload
}) {
  try {
    yield (0,effects_namespaceObject.put)((0,ecomerce_action/* setCompareItemsSuccess */.bD)(payload));
  } catch (err) {
    console.log(err);
  }
}

function* ecomerce_saga_rootSaga() {
  yield (0,effects_namespaceObject.all)([(0,effects_namespaceObject.takeEvery)(ecomerce_action/* actionTypes.SET_WISHLIST_ITEMS */.Hp.SET_WISHLIST_ITEMS, getWishlistItems)]);
  yield (0,effects_namespaceObject.all)([(0,effects_namespaceObject.takeEvery)(ecomerce_action/* actionTypes.SET_CART_ITEMS */.Hp.SET_CART_ITEMS, getCartItems)]);
  yield (0,effects_namespaceObject.all)([(0,effects_namespaceObject.takeEvery)(ecomerce_action/* actionTypes.SET_COMPARE_ITEMS */.Hp.SET_COMPARE_ITEMS, getCompareItems)]);
}
;// CONCATENATED MODULE: ./store/rootSaga.js




function* rootSaga_rootSaga() {
  yield (0,effects_namespaceObject.all)([rootSaga(), saga_rootSaga(), ecomerce_saga_rootSaga()]);
}
;// CONCATENATED MODULE: external "next-redux-wrapper"
var external_next_redux_wrapper_namespaceObject = require("next-redux-wrapper");;
;// CONCATENATED MODULE: ./store/store.js






const bindMiddleware = middleware => {
  if (false) {}

  return (0,external_redux_namespaceObject.applyMiddleware)(...middleware);
};

const makeStore = context => {
  const sagaMiddleware = external_redux_saga_default()();
  const store = (0,external_redux_namespaceObject.createStore)(rootReducer, bindMiddleware([sagaMiddleware]));
  store.sagaTask = sagaMiddleware.run(rootSaga_rootSaga);
  return store;
};
const wrapper = (0,external_next_redux_wrapper_namespaceObject.createWrapper)(makeStore, {
  debug: false
});
// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__(953);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(79);
;// CONCATENATED MODULE: ./components/shared/drawers/modules/ModuleDrawerOverlay.jsx




const ModuleDrawerOverlay = ({
  isDrawerShow
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsx)("div", {
    className: `ps-site-overlay ${isDrawerShow ? 'active' : ''}`
  });
};

/* harmony default export */ var modules_ModuleDrawerOverlay = ((0,external_react_redux_.connect)(state => state.app)(ModuleDrawerOverlay));
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: ./utilities/ecomerce-helpers.js
var ecomerce_helpers = __webpack_require__(8807);
// EXTERNAL MODULE: ./components/elements/products/ProductOnCart.jsx
var ProductOnCart = __webpack_require__(1460);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./hooks/useEcomerce.js
var useEcomerce = __webpack_require__(8428);
;// CONCATENATED MODULE: ./components/ecomerce/EcomerceMiniCart.jsx












const EcomerceMiniCart = ({
  ecomerce
}) => {
  const dispatch = (0,external_react_redux_.useDispatch)();
  const {
    products,
    removeItem,
    removeItems,
    getProducts
  } = (0,useEcomerce/* default */.Z)();

  function handleRemoveItem(e, productId) {
    e.preventDefault();
    removeItem({
      id: productId
    }, ecomerce.cartItems, "cart");
  }

  function handleCloseDrawer(e) {
    e.preventDefault();
    dispatch((0,app_action/* toggleDrawer */.wb)(false));
  }

  function handleRemoveCart(e) {
    e.preventDefault();
    removeItems("cart");
  }

  (0,external_react_.useEffect)(() => {
    // Get products in your shopping cart
    getProducts(ecomerce.cartItems, "cart");
  }, [ecomerce]); // View

  let cartItemsView, cartActionsView, cartQuantityView, cartAmountView;

  if (products) {
    if (products.length > 0) {
      cartAmountView = (0,ecomerce_helpers/* calculateAmount */.fu)(products);
      cartQuantityView = (0,ecomerce_helpers/* calculateCartQuantity */.VK)(products);
      const items = products.map(item => /*#__PURE__*/(0,jsx_runtime_.jsx)("div", {
        className: "ps-cart__item",
        children: /*#__PURE__*/(0,jsx_runtime_.jsx)(ProductOnCart/* default */.Z, {
          product: item,
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
            className: "ps-product__meta",
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
              children: [item.quantity, " x item"]
            }), /*#__PURE__*/(0,jsx_runtime_.jsx)("a", {
              href: "#",
              className: "ps-product__remove-item",
              onClick: e => handleRemoveItem(e, item.id),
              children: /*#__PURE__*/(0,jsx_runtime_.jsx)("strong", {
                children: "Remove"
              })
            })]
          })
        })
      }, item.id));
      cartItemsView = /*#__PURE__*/(0,jsx_runtime_.jsx)("div", {
        className: "ps-cart__items",
        children: items
      });
      cartActionsView = /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "ps-cart__summary",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsx)("div", {
            className: "ps-cart__total",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("h4", {
              children: ["Total: ", /*#__PURE__*/(0,jsx_runtime_.jsxs)("strong", {
                children: ["$", cartAmountView]
              })]
            })
          }), /*#__PURE__*/(0,jsx_runtime_.jsx)("div", {
            className: "ps-cart__clear-cart",
            children: /*#__PURE__*/(0,jsx_runtime_.jsx)("a", {
              href: "#",
              className: "ps-btn ps-btn--sm ps-btn--outline",
              onClick: e => handleRemoveCart(e),
              children: "Clear all items"
            })
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "ps-cart__actions",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsx)(next_link.default, {
            href: "/shop/shopping-cart",
            children: /*#__PURE__*/(0,jsx_runtime_.jsx)("a", {
              className: "ps-btn ps-btn--primary",
              children: "View Cart"
            })
          }), /*#__PURE__*/(0,jsx_runtime_.jsx)(next_link.default, {
            href: "/shop/checkout",
            children: /*#__PURE__*/(0,jsx_runtime_.jsx)("a", {
              className: "ps-btn ps-btn--orange",
              children: "Checkout"
            })
          })]
        })]
      });
    } else {
      cartItemsView = /*#__PURE__*/(0,jsx_runtime_.jsx)("div", {
        className: "ps-cart__items",
        children: /*#__PURE__*/(0,jsx_runtime_.jsx)(external_antd_.Alert, {
          message: "Cart empty!",
          type: "warning"
        })
      });
      cartActionsView = /*#__PURE__*/(0,jsx_runtime_.jsx)(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/(0,jsx_runtime_.jsx)("a", {
          href: "/shop",
          className: "ps-btn ps-btn--primary",
          onClick: e => handleCloseDrawer(e),
          children: "Back to shop"
        })
      });
    }
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "ps-cart--simple",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsx)("div", {
      className: "ps-cart__header",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("h3", {
        children: ["Shopping Cart ", /*#__PURE__*/(0,jsx_runtime_.jsxs)("sup", {
          children: ["(", cartQuantityView, ")"]
        })]
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "ps-cart__content",
      children: [cartItemsView, cartActionsView]
    })]
  });
};

/* harmony default export */ var ecomerce_EcomerceMiniCart = ((0,external_react_redux_.connect)(state => state)(EcomerceMiniCart));
;// CONCATENATED MODULE: ./components/shared/drawers/DrawerPrimary.jsx








const DrawerPrimary = ({
  children,
  placement = "right",
  title = "Drawer",
  isDrawerShow
}) => {
  const dispatch = (0,external_react_redux_.useDispatch)();

  function handleCloseDrawer(e) {
    e.preventDefault();
    dispatch((0,app_action/* toggleDrawer */.wb)(false));
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsx)(external_antd_.Drawer, {
    className: "ps-panel--mobile",
    placement: "right",
    closable: false,
    placement: placement,
    width: 400,
    onClose: e => handleCloseDrawer(e),
    visible: isDrawerShow,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "ps-drawer",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsx)("div", {
        className: "ps-drawer__header",
        children: /*#__PURE__*/(0,jsx_runtime_.jsx)("a", {
          href: "#",
          className: "ps-drawer__close",
          onClick: e => handleCloseDrawer(e),
          children: /*#__PURE__*/(0,jsx_runtime_.jsx)("i", {
            className: "icon-cross"
          })
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsx)("div", {
        className: "ps-drawer__wrapper",
        children: /*#__PURE__*/(0,jsx_runtime_.jsx)(ecomerce_EcomerceMiniCart, {})
      })]
    })
  });
};

/* harmony default export */ var drawers_DrawerPrimary = ((0,external_react_redux_.connect)(state => state.app)(DrawerPrimary));
// EXTERNAL MODULE: external "react-cookie"
var external_react_cookie_ = __webpack_require__(311);
// EXTERNAL MODULE: ./components/elements/basic/ActiveLink.jsx
var ActiveLink = __webpack_require__(286);
;// CONCATENATED MODULE: ./components/elements/basic/Collapse.jsx


function Collapse_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Collapse_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Collapse_ownKeys(Object(source), true).forEach(function (key) { Collapse_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Collapse_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Collapse_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/* eslint-env browser */

/**
 * All debug logs are removed on build
 */
 // using let instead of const,
// experimenting with ES2015 bundle which gets a bit smaller when using let over const.

let COLLAPSED = "collapsed";
let COLLAPSING = "collapsing";
let EXPANDING = "expanding";
let EXPANDED = "expanded";
let defaultClassName = "collapse-css-transition";
let defaultElementType = "div";
let defaultCollapseHeight = "0px";
/**
 *
 * @param {function} callback
 */

function nextFrame(callback) {
  requestAnimationFrame(function () {
    //setTimeout(callback, 0); // NOT used because can be jumpy if click-spamming.
    requestAnimationFrame(callback); // This is used.
  });
}

function Collapse(_ref) {
  let {
    children,
    transition,
    style,
    render,
    elementType = defaultElementType,
    isOpen,
    collapseHeight = defaultCollapseHeight,
    onInit,
    onChange,
    className = defaultClassName,
    addState,
    noAnim,
    overflowOnExpanded
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["children", "transition", "style", "render", "elementType", "isOpen", "collapseHeight", "onInit", "onChange", "className", "addState", "noAnim", "overflowOnExpanded"]);

  let getCollapsedVisibility = () => collapseHeight === "0px" ? "hidden" : "";

  let {
    0: __,
    1: forceUpdate
  } = (0,external_react_.useReducer)(_ => _ + 1, 0);
  let elementRef = (0,external_react_.useRef)();
  let {
    0: callbackTick,
    1: setCallbackTick
  } = (0,external_react_.useState)(0); // Avoiding setState to control when stuff are updated.
  // Might not be needed.

  let state = (0,external_react_.useRef)({
    collapse: isOpen ? EXPANDED : COLLAPSED,
    style: {
      height: isOpen ? "" : collapseHeight,
      visibility: isOpen ? "" : getCollapsedVisibility()
    }
  }).current;
  (0,external_react_.useEffect)(() => {
    // Invoke callback when data are updated, use Effect to sync state.
    callbackTick && onCallback(onChange);
  }, [callbackTick]);
  /**
   *
   * @param {function} callback
   */

  let onCallback = (callback, params = {}) => {
    if (callback) {
      callback(Collapse_objectSpread({
        state: state.collapse,
        style: state.style
      }, params));
    }
  };

  function setCollapsed() {
    if (!elementRef.current) return; // might be redundant
    // Update state

    state.collapse = COLLAPSED;
    state.style = {
      height: collapseHeight,
      visibility: getCollapsedVisibility()
    };
    forceUpdate();
    setTimeout(() => setCallbackTick(Date.now), 0); // callback and re-render
  }

  function setCollapsing() {
    if (!elementRef.current) return; // might be redundant

    if (noAnim) {
      return setCollapsed();
    } // Update state


    state.collapse = COLLAPSING;
    state.style = {
      height: getElementHeight(),
      visibility: ""
    };
    forceUpdate();
    nextFrame(() => {
      if (!elementRef.current) return;
      if (state.collapse !== COLLAPSING) return;
      state.style = {
        height: collapseHeight,
        visibility: ""
      }; //forceUpdate();

      setCallbackTick(Date.now); // callback and re-render
    });
  }

  function setExpanding() {
    if (!elementRef.current) return; // might be redundant

    if (noAnim) {
      return setExpanded();
    } // Updatetate


    state.collapse = EXPANDING;
    nextFrame(() => {
      if (!elementRef.current) return; // might be redundant

      if (state.collapse !== EXPANDING) return;
      state.style = {
        height: getElementHeight(),
        visibility: ""
      }; // forceUpdate();

      setCallbackTick(Date.now); // callback and re-render
    });
  }

  function setExpanded() {
    if (!elementRef.current) return; // might be redundant
    // Update state

    state.collapse = EXPANDED;
    state.style = {
      height: "",
      visibility: ""
    };
    forceUpdate();
    setTimeout(() => setCallbackTick(Date.now), 0); // callback and re-render
  }

  function getElementHeight() {
    // @ts-ignore
    return `${elementRef.current.scrollHeight}px`;
  }

  function onTransitionEnd({
    target,
    propertyName
  }) {
    if (target === elementRef.current && propertyName === "height") {
      let styleHeight = target.style.height;

      switch (state.collapse) {
        case EXPANDING:
          if (styleHeight === "" || styleHeight === collapseHeight) // This is stale, a newer event has happened before this could execute
            console.warn(`onTransitionEnd height unexpected ${styleHeight}`, "ignore setExpanded");else setExpanded();
          break;

        case COLLAPSING:
          if (styleHeight === "" || styleHeight !== collapseHeight) // This is stale, a newer event has happened before this could execute
            console.warn(`onTransitionEnd height unexpected ${styleHeight}`, "ignore setCollapsed");else setCollapsed();
          break;

        default:
          console.warn("Ignored in onTransitionEnd", state.collapse);
      }
    }
  } // getDerivedStateFromProps


  let didOpen = state.collapse === EXPANDED || state.collapse === EXPANDING;
  if (!didOpen && isOpen) setExpanding();
  if (didOpen && !isOpen) setCollapsing(); // END getDerivedStateFromProps

  let overflow = state.collapse === EXPANDED && overflowOnExpanded ? "" : "hidden";

  let computedStyle = Collapse_objectSpread(Collapse_objectSpread({
    overflow,
    transition
  }, style), state.style);

  let ElementType = elementType;
  let callbackRef = (0,external_react_.useCallback)(node => {
    if (node) {
      elementRef.current = node;
      onCallback(onInit, {
        node
      });
    }
  }, [elementType]);
  let collapseClassName = addState ? `${className} --c-${state.collapse}` : className;
  return /*#__PURE__*/(0,jsx_runtime_.jsx)(ElementType, Collapse_objectSpread(Collapse_objectSpread({
    ref: callbackRef,
    style: computedStyle,
    onTransitionEnd: onTransitionEnd,
    className: collapseClassName
  }, rest), {}, {
    children: typeof children === "function" ? children(state.collapse) : typeof render === "function" ? render(state.collapse) : children
  }));
}

/* harmony default export */ var basic_Collapse = (Collapse);
;// CONCATENATED MODULE: ./components/shared/menus/MenuAccordion.jsx






const MenuAccordion = ({
  data,
  classes = "menu"
}) => {
  const {
    0: isOpen,
    1: setIsOpen
  } = (0,external_react_.useState)(null);

  const handleToggleAccordion = index => {
    if (index !== isOpen) {
      setIsOpen(index);
    } else {
      setIsOpen(null);
    }
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsx)("ul", {
    className: classes,
    children: data.map(item => {
      if (item.subMenu) {
        return /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
          className: `menu__item menu__item--has-children ${isOpen === item.id || item.active === true ? "active" : ""}`,
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
            href: "#",
            className: "menu__toggle",
            onClick: e => handleToggleAccordion(item.id),
            children: [/*#__PURE__*/(0,jsx_runtime_.jsx)("span", {
              className: "menu__text",
              children: item.text
            }), /*#__PURE__*/(0,jsx_runtime_.jsx)("i", {
              className: "icon-chevron-down menu__icon--down"
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsx)(basic_Collapse, {
            elementType: "div",
            isOpen: item.id === isOpen || item.active === true ? true : false,
            "aria-hidden": "true",
            className: "sub-menu-wrapper",
            children: /*#__PURE__*/(0,jsx_runtime_.jsx)(MenuAccordion, {
              data: item.subMenu,
              classes: "sub-menu"
            })
          })]
        }, item.id);
      } else if (item.megaContent) {
        return /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
          className: `menu__item menu__item--has-children has-mega-menu ${isOpen === item.id || item.active === true ? "active" : ""}`,
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
            href: "#",
            className: "menu__toggle",
            onClick: e => handleToggleAccordion(item.id),
            children: [/*#__PURE__*/(0,jsx_runtime_.jsx)("span", {
              className: "menu__text",
              children: item.text
            }), /*#__PURE__*/(0,jsx_runtime_.jsx)("i", {
              className: "icon-chevron-down menu__icon--down"
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsx)(basic_Collapse, {
            elementType: "div",
            isOpen: item.id === isOpen || item.active === true ? true : false,
            "aria-hidden": isOpen ? "false" : "true",
            className: "sub-menu-wrapper",
            children: /*#__PURE__*/(0,jsx_runtime_.jsx)(MenuAccordion, {
              data: item.megaContent,
              classes: "sub-menu"
            })
          })]
        }, item.id);
      } else if (item.megaItems) {
        return /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
          className: `menu__item menu__item--has-children ${isOpen === item.id || item.active === true ? "active" : ""}`,
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
            href: "#",
            className: "menu__toggle",
            onClick: e => handleToggleAccordion(item.id),
            children: [/*#__PURE__*/(0,jsx_runtime_.jsx)("span", {
              className: "menu__text",
              children: item.heading
            }), /*#__PURE__*/(0,jsx_runtime_.jsx)("i", {
              className: "icon-chevron-down menu__icon--down"
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsx)(basic_Collapse, {
            elementType: "div",
            isOpen: item.id === isOpen || item.active === true ? true : false,
            "aria-hidden": isOpen ? "false" : "true",
            className: "sub-menu-wrapper",
            children: /*#__PURE__*/(0,jsx_runtime_.jsx)(MenuAccordion, {
              data: item.megaItems,
              classes: "sub-menu"
            })
          })]
        }, item.id);
      } else {
        if (item.title) {
          return /*#__PURE__*/(0,jsx_runtime_.jsx)("li", {
            className: "menu__title",
            children: /*#__PURE__*/(0,jsx_runtime_.jsx)("span", {
              children: item.text
            })
          }, item.id);
        } else {
          return /*#__PURE__*/(0,jsx_runtime_.jsx)("li", {
            className: "menu__item",
            children: /*#__PURE__*/(0,jsx_runtime_.jsx)(next_link.default, {
              href: item.url,
              children: /*#__PURE__*/(0,jsx_runtime_.jsx)("a", {
                children: /*#__PURE__*/(0,jsx_runtime_.jsx)("span", {
                  className: "menu__text",
                  children: item.text
                })
              })
            })
          }, item.text);
        }
      }
    })
  });
};

/* harmony default export */ var menus_MenuAccordion = (MenuAccordion);
// EXTERNAL MODULE: ./public/static/data/menu.json
var menu = __webpack_require__(6916);
// EXTERNAL MODULE: ./components/shared/headers/modules/ModuleHeaderSwitcher.js
var ModuleHeaderSwitcher = __webpack_require__(3952);
// EXTERNAL MODULE: ./components/shared/headers/modules/ModuleHeaderContactNumber.jsx
var ModuleHeaderContactNumber = __webpack_require__(4286);
// EXTERNAL MODULE: ./components/shared/forms/FormSearchHeader.js
var FormSearchHeader = __webpack_require__(2972);
;// CONCATENATED MODULE: ./components/shared/navigations/NavigationBottom.jsx














const NavigationBottom = ({
  ecomerce,
  classes,
  isActive = true
}) => {
  const {
    0: isMenu,
    1: setIsMenu
  } = (0,external_react_.useState)(false);
  const Router = (0,router_.useRouter)();
  const {
    pathname
  } = Router;

  function handleOpenMenu(e) {
    e.preventDefault();
    setIsMenu(true);
  }

  function handleCloseMenu(e) {
    e.preventDefault();
    setIsMenu(false);
  }

  (0,external_react_.useEffect)(() => {
    setIsMenu(false);
  }, [pathname]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsx)("nav", {
      className: `navigation--bottom ${classes} ${isActive && "active"}`,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "navigation__content",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsx)("a", {
          className: "navigation__item",
          onClick: e => handleOpenMenu(e),
          children: /*#__PURE__*/(0,jsx_runtime_.jsx)("i", {
            className: "icon-menu"
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsx)(ActiveLink/* default */.Z, {
          activeClassName: "active",
          href: "/",
          children: /*#__PURE__*/(0,jsx_runtime_.jsx)("a", {
            className: "navigation__item",
            children: /*#__PURE__*/(0,jsx_runtime_.jsx)("i", {
              className: "icon-home2"
            })
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsx)(ActiveLink/* default */.Z, {
          activeClassName: "active",
          href: "/my-account",
          children: /*#__PURE__*/(0,jsx_runtime_.jsx)("a", {
            className: "navigation__item",
            children: /*#__PURE__*/(0,jsx_runtime_.jsx)("i", {
              className: "icon-user"
            })
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsx)(ActiveLink/* default */.Z, {
          activeClassName: "active",
          href: "/shop/wishlist",
          children: /*#__PURE__*/(0,jsx_runtime_.jsx)("a", {
            className: "navigation__item",
            children: /*#__PURE__*/(0,jsx_runtime_.jsx)("i", {
              className: "icon-heart"
            })
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsx)(ActiveLink/* default */.Z, {
          activeClassName: "active",
          href: "/shop/shopping-cart",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
            className: "navigation__item cart",
            children: [/*#__PURE__*/(0,jsx_runtime_.jsx)("i", {
              className: "icon-bag2"
            }), /*#__PURE__*/(0,jsx_runtime_.jsx)("span", {
              children: ecomerce.cartItems && ecomerce.cartItems.length > 0 ? ecomerce.cartItems.length : "0"
            })]
          })
        })]
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsx)(external_antd_.Drawer, {
      className: "ps-panel--mobile",
      placement: "right",
      closable: false,
      placement: "left",
      width: 400,
      onClose: e => handleCloseMenu(e),
      visible: isMenu,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "ps-drawer ps-drawer--with-menu",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsx)("div", {
          className: "ps-drawer__header",
          children: /*#__PURE__*/(0,jsx_runtime_.jsx)("a", {
            href: "#",
            className: "ps-drawer__close",
            onClick: e => handleCloseMenu(e),
            children: /*#__PURE__*/(0,jsx_runtime_.jsx)("i", {
              className: "icon-cross"
            })
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "ps-drawer__wrapper",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsx)("div", {
            className: "ps-drawer__menu",
            children: /*#__PURE__*/(0,jsx_runtime_.jsx)(menus_MenuAccordion, {
              data: menu/* main_menu_mobile */.dG,
              classes: "menu--accordion"
            })
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "ps-drawer__footer",
            children: [/*#__PURE__*/(0,jsx_runtime_.jsx)("figure", {
              children: /*#__PURE__*/(0,jsx_runtime_.jsx)(FormSearchHeader/* default */.Z, {})
            }), /*#__PURE__*/(0,jsx_runtime_.jsx)("figure", {
              children: /*#__PURE__*/(0,jsx_runtime_.jsx)(ModuleHeaderSwitcher/* default */.Z, {})
            }), /*#__PURE__*/(0,jsx_runtime_.jsx)("figure", {
              children: /*#__PURE__*/(0,jsx_runtime_.jsx)(ModuleHeaderContactNumber/* default */.Z, {})
            })]
          })]
        })]
      })
    })]
  });
};

/* harmony default export */ var navigations_NavigationBottom = ((0,external_react_redux_.connect)(state => state)(NavigationBottom));
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./components/layouts/modules/ModuleCustomHead.jsx





const ModuleCustomHead = () => /*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
  children: [/*#__PURE__*/(0,jsx_runtime_.jsx)("title", {
    children: "MyMedi - React Ecomerce Template with RESTFul API"
  }), /*#__PURE__*/(0,jsx_runtime_.jsx)("link", {
    rel: "shortcut icon",
    href: "/static/img/favicon.png"
  }), /*#__PURE__*/(0,jsx_runtime_.jsx)("meta", {
    charSet: "utf-8"
  }), /*#__PURE__*/(0,jsx_runtime_.jsx)("meta", {
    httpEquiv: "X-UA-Compatible",
    content: "IE=edge"
  }), /*#__PURE__*/(0,jsx_runtime_.jsx)("meta", {
    name: "viewport",
    content: "width=device-width"
  }), /*#__PURE__*/(0,jsx_runtime_.jsx)("meta", {
    name: "description",
    content: "Mymedi - Ecomerce React Template"
  }), /*#__PURE__*/(0,jsx_runtime_.jsx)("meta", {
    name: "keywords",
    content: "react template"
  }), /*#__PURE__*/(0,jsx_runtime_.jsx)("link", {
    rel: "preconnect",
    href: "https://fonts.googleapis.com"
  }), /*#__PURE__*/(0,jsx_runtime_.jsx)("link", {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous"
  }), /*#__PURE__*/(0,jsx_runtime_.jsx)("link", {
    href: "https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,300;0,500;0,600;0,700;0,800;1,400&display=swap",
    rel: "stylesheet"
  })]
});

/* harmony default export */ var modules_ModuleCustomHead = (ModuleCustomHead);
;// CONCATENATED MODULE: ./components/layouts/MasterLayout.jsx
















const MasterLayout = ({
  children
}) => {
  const dispatch = (0,external_react_redux_.useDispatch)();
  const router = (0,router_.useRouter)();
  const [cookies] = (0,external_react_cookie_.useCookies)(["cart", "compare", "wishlist"]);

  function handleSetEcomercerParameters() {
    if (cookies) {
      if (cookies.cart) {
        dispatch((0,ecomerce_action/* setCartItems */.w0)(cookies.cart));
      }

      if (cookies.wishlist) {
        dispatch((0,ecomerce_action/* setWishlistTtems */.hT)(cookies.wishlist));
      }

      if (cookies.compare) {
        dispatch((0,ecomerce_action/* setCompareItems */.Sk)(cookies.compare));
      }
    }
  }

  (0,external_react_.useEffect)(() => {
    handleSetEcomercerParameters();

    const handleComplete = () => {
      dispatch((0,app_action/* toggleDrawer */.wb)(false));
    };

    setTimeout(function () {
      document.getElementById("__next").classList.add("loaded");
    }, 100);
    router.events.on("routeChangeStart", handleComplete);
    setTimeout(function () {
      document.getElementById("__next").classList.add("ps-loaded");
    }, 100);
    return () => {
      router.events.off("routeChangeStart", handleComplete);
    };
  }, []);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsx)(modules_ModuleCustomHead, {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "ps-page",
      children: [children, /*#__PURE__*/(0,jsx_runtime_.jsx)(navigations_NavigationBottom, {}), /*#__PURE__*/(0,jsx_runtime_.jsx)(modules_ModuleDrawerOverlay, {}), /*#__PURE__*/(0,jsx_runtime_.jsx)(drawers_DrawerPrimary, {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        id: "loader-wrapper",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsx)("div", {
          className: "loader-section section-left"
        }), /*#__PURE__*/(0,jsx_runtime_.jsx)("div", {
          className: "loader-section section-right"
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsx)(external_antd_.BackTop, {
        children: /*#__PURE__*/(0,jsx_runtime_.jsx)("button", {
          className: "ps-btn--backtop",
          children: /*#__PURE__*/(0,jsx_runtime_.jsx)("i", {
            className: "icon-arrow-up"
          })
        })
      })]
    })]
  });
};

/* harmony default export */ var layouts_MasterLayout = ((0,external_react_redux_.connect)()(MasterLayout));
// EXTERNAL MODULE: ./node_modules/swiper/swiper-bundle.min.css
var swiper_bundle_min = __webpack_require__(1631);
// EXTERNAL MODULE: ./node_modules/antd/dist/antd.compact.min.css
var antd_compact_min = __webpack_require__(8588);
;// CONCATENATED MODULE: ./pages/_app.jsx


function _app_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _app_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { _app_ownKeys(Object(source), true).forEach(function (key) { _app_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { _app_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _app_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


















function App({
  Component,
  pageProps
}) {
  (0,external_react_.useEffect)(() => {
    setTimeout(function () {
      document.getElementById("__next").classList.add("ps-loaded");
    }, 100);
  });
  return /*#__PURE__*/(0,jsx_runtime_.jsx)(external_react_cookie_.CookiesProvider, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsx)(layouts_MasterLayout, {
      children: /*#__PURE__*/(0,jsx_runtime_.jsx)(Component, _app_objectSpread({}, pageProps))
    })
  });
}

/* harmony default export */ var _app = (wrapper.withRedux(App));

/***/ }),

/***/ 8588:
/***/ (function() {



/***/ }),

/***/ 1631:
/***/ (function() {



/***/ }),

/***/ 953:
/***/ (function(module) {

"use strict";
module.exports = require("antd");;

/***/ }),

/***/ 2376:
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ 8417:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ 2238:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ 701:
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ 6731:
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 311:
/***/ (function(module) {

"use strict";
module.exports = require("react-cookie");;

/***/ }),

/***/ 6302:
/***/ (function(module) {

"use strict";
module.exports = require("react-image-lightbox");;

/***/ }),

/***/ 6873:
/***/ (function(module) {

"use strict";
module.exports = require("react-lazyload");;

/***/ }),

/***/ 79:
/***/ (function(module) {

"use strict";
module.exports = require("react-redux");;

/***/ }),

/***/ 9080:
/***/ (function(module) {

"use strict";
module.exports = require("react-slick");;

/***/ }),

/***/ 5282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ }),

/***/ 1596:
/***/ (function(module) {

"use strict";
module.exports = require("swiper/core");;

/***/ }),

/***/ 2156:
/***/ (function(module) {

"use strict";
module.exports = require("swiper/react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [1664,7667,1460], function() { return __webpack_exec__(7847); });
module.exports = __webpack_exports__;

})();