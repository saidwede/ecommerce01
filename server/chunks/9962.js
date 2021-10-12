exports.id = 9962;
exports.ids = [9962];
exports.modules = {

/***/ 2922:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ useGetPost; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _repositories_PostRepository__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8645);


function useGetPost() {
  const {
    0: loading,
    1: setLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: postItems,
    1: setPostItems
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const {
    0: post,
    1: setPost
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  return {
    loading,
    postItems,
    setLoading: payload => {
      setLoading(payload);
    },
    getPosts: async payload => {
      setLoading(true);
      const responseData = await _repositories_PostRepository__WEBPACK_IMPORTED_MODULE_1__/* .default.getPosts */ .Z.getPosts(payload);

      if (responseData) {
        setPostItems(responseData);
        setTimeout(function () {
          setLoading(false);
        }.bind(this), 250);
        return responseData.items;
      } else {
        setLoading(false);
        return [];
      }
    },
    getPostByCollection: async (payload, pageSize) => {
      setLoading(true);
      const responseData = await _repositories_PostRepository__WEBPACK_IMPORTED_MODULE_1__/* .default.getPosts */ .Z.getPosts(payload, pageSize);

      if (responseData) {
        setPostItems(responseData.items);
        setTimeout(function () {
          setLoading(false);
        }.bind(this), 250);
        return responseData.items;
      } else {
        setLoading(false);
        return [];
      }
    },
    getPostBySlug: async payload => {
      setLoading(true);
      const responseData = await _repositories_PostRepository__WEBPACK_IMPORTED_MODULE_1__/* .default.getPostBySlug */ .Z.getPostBySlug(payload);

      if (responseData) {
        setPostItems(responseData);
        setTimeout(function () {
          setLoading(false);
        }.bind(this), 250);
        return responseData;
      } else {
        setLoading(false);
        return [];
      }
    }
  };
}

/***/ }),

/***/ 7158:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ usePostGroup; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./utilities/common-helpers.js
var common_helpers = __webpack_require__(7864);
// EXTERNAL MODULE: ./components/elements/skeletons/SkeletonProduct.jsx
var SkeletonProduct = __webpack_require__(8697);
// EXTERNAL MODULE: ./components/elements/skeletons/SkeletonProductHorizontal.jsx
var SkeletonProductHorizontal = __webpack_require__(1043);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./hooks/usePost.js
var usePost = __webpack_require__(7425);
;// CONCATENATED MODULE: ./components/elements/articles/ArticleList.js






const ArticleList = ({
  post
}) => {
  const {
    thumbnail,
    title,
    categories,
    initPost
  } = (0,usePost/* default */.Z)();
  (0,external_react_.useEffect)(() => {
    initPost(post);
  }, [post]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("article", {
    className: "ps-post ps-post--list",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "ps-post__thumbnail",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsx)(next_link.default, {
        href: "/post/[slug]",
        as: `/post/${post.slug}`,
        children: /*#__PURE__*/(0,jsx_runtime_.jsx)("a", {
          className: "ps-post__overlay"
        })
      }), thumbnail]
    }), /*#__PURE__*/(0,jsx_runtime_.jsx)("div", {
      className: "ps-post__wrapper",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "ps-post__content",
        children: [categories, /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "ps-post__meta",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsx)("span", {
            className: "ps-post__created",
            children: "May 15, 2021"
          }), /*#__PURE__*/(0,jsx_runtime_.jsx)("a", {
            className: "ps-post__author",
            children: "Thomas Charlson"
          })]
        }), title, /*#__PURE__*/(0,jsx_runtime_.jsx)("p", {
          className: "ps-post__desc",
          children: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        })]
      })
    })]
  });
};

/* harmony default export */ var articles_ArticleList = (ArticleList);
;// CONCATENATED MODULE: ./components/elements/articles/ArticleStandard.jsx






const ArticleStandard = ({
  post
}) => {
  const {
    thumbnail,
    title,
    categories,
    createdBy,
    initPost
  } = (0,usePost/* default */.Z)();
  (0,external_react_.useEffect)(() => {
    initPost(post);
  }, [post]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("article", {
    className: "ps-post ps-post--grid ps-post--standard",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "ps-post__thumbnail",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsx)(next_link.default, {
        href: "/post/[slug]",
        as: `/post/${post.slug}`,
        children: /*#__PURE__*/(0,jsx_runtime_.jsx)("a", {
          className: "ps-post__overlay"
        })
      }), thumbnail]
    }), /*#__PURE__*/(0,jsx_runtime_.jsx)("div", {
      className: "ps-post__wrapper",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "ps-post__content",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsx)("div", {
          className: "ps-post__categories",
          children: categories
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "ps-post__meta",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsx)("span", {
            className: "ps-post__created-at",
            children: createdBy
          }), /*#__PURE__*/(0,jsx_runtime_.jsx)(next_link.default, {
            href: "/blog",
            children: /*#__PURE__*/(0,jsx_runtime_.jsx)("a", {
              className: "ps-post__author",
              children: "Alfredo Austin"
            })
          })]
        }), title, /*#__PURE__*/(0,jsx_runtime_.jsx)("p", {
          className: "ps-post__desc",
          children: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        })]
      })
    })]
  });
};

/* harmony default export */ var articles_ArticleStandard = (ArticleStandard);
;// CONCATENATED MODULE: ./components/elements/articles/ArticleGrid.js






const ArticleGrid = ({
  post
}) => {
  const {
    thumbnail,
    title,
    categories,
    createdBy,
    initPost
  } = (0,usePost/* default */.Z)();
  (0,external_react_.useEffect)(() => {
    initPost(post);
  }, [post]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("article", {
    className: "ps-post ps-post--grid",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "ps-post__thumbnail",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsx)(next_link.default, {
        href: "/post/[slug]",
        as: `/post/${post.slug}`,
        children: /*#__PURE__*/(0,jsx_runtime_.jsx)("a", {
          className: "ps-post__overlay"
        })
      }), thumbnail, /*#__PURE__*/(0,jsx_runtime_.jsx)("div", {
        className: "ps-post__categories",
        children: categories
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsx)("div", {
      className: "ps-post__wrapper",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "ps-post__content",
        children: [title, /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "ps-post__meta",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsx)("span", {
            className: "ps-post__created-at",
            children: createdBy
          }), /*#__PURE__*/(0,jsx_runtime_.jsx)(next_link.default, {
            href: "/blog",
            children: /*#__PURE__*/(0,jsx_runtime_.jsx)("a", {
              className: "ps-post__author",
              children: "Alfredo Austin"
            })
          })]
        })]
      })
    })]
  });
};

/* harmony default export */ var articles_ArticleGrid = (ArticleGrid);
;// CONCATENATED MODULE: ./hooks/usePostGroup.js








function usePostGroup() {
  function handleGetColumn(columns) {
    switch (columns) {
      case 2:
        return "col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6";
        break;

      case 4:
        return "col-xl-3 col-lg-4 col-md-6 col-sm-6 col-6";
        break;

      case 6:
        return "col-xl-2 col-lg-4 col-md-6 col-sm-6 col-6";
        break;

      default:
        return "col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12";
    }
  }

  return {
    withGrid: (source, loading, columns = 4) => {
      let view;

      if (!loading) {
        if (source && source.length > 0) {
          const items = source.map(item => /*#__PURE__*/(0,jsx_runtime_.jsx)("div", {
            className: handleGetColumn(columns),
            children: /*#__PURE__*/(0,jsx_runtime_.jsx)(articles_ArticleGrid, {
              post: item
            })
          }, item.id));
          view = /*#__PURE__*/(0,jsx_runtime_.jsx)("div", {
            className: "ps-blog-items row",
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
          className: handleGetColumn(columns),
          children: /*#__PURE__*/(0,jsx_runtime_.jsx)(SkeletonProduct/* default */.Z, {})
        }, item));
        view = /*#__PURE__*/(0,jsx_runtime_.jsx)("div", {
          className: "ps-blog-items with-grid row",
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
            children: /*#__PURE__*/(0,jsx_runtime_.jsx)(articles_ArticleList, {
              post: item
            })
          }, item.id));
          view = /*#__PURE__*/(0,jsx_runtime_.jsx)("div", {
            className: "ps-layout--list",
            children: items
          });
        } else {
          view = /*#__PURE__*/(0,jsx_runtime_.jsx)("p", {
            children: "No post found."
          });
        }
      } else {
        const items = (0,common_helpers/* generateTempArray */.Zn)(columns).map(item => /*#__PURE__*/(0,jsx_runtime_.jsx)("div", {
          className: "ps-layout__item",
          "data-columns": columns,
          children: /*#__PURE__*/(0,jsx_runtime_.jsx)(SkeletonProductHorizontal/* default */.Z, {})
        }, item));
        view = /*#__PURE__*/(0,jsx_runtime_.jsx)("div", {
          className: "ps-layout--list with-skeleton",
          "data-columns": columns,
          children: items
        });
      }

      return view;
    },
    withStandard: (source, loading, columns = 4) => {
      let view;

      if (!loading) {
        if (source && source.length > 0) {
          const items = source.map(item => /*#__PURE__*/(0,jsx_runtime_.jsx)("div", {
            className: "ps-layout__item",
            children: /*#__PURE__*/(0,jsx_runtime_.jsx)(articles_ArticleStandard, {
              post: item
            })
          }, item.id));
          view = /*#__PURE__*/(0,jsx_runtime_.jsx)("div", {
            className: "ps-layout--list ",
            children: items
          });
        } else {
          view = /*#__PURE__*/(0,jsx_runtime_.jsx)("p", {
            children: "No post found."
          });
        }
      } else {
        const items = (0,common_helpers/* generateTempArray */.Zn)(columns).map(item => /*#__PURE__*/(0,jsx_runtime_.jsx)("div", {
          className: "ps-layout__item",
          "data-columns": columns,
          children: /*#__PURE__*/(0,jsx_runtime_.jsx)(SkeletonProductHorizontal/* default */.Z, {})
        }, item));
        view = /*#__PURE__*/(0,jsx_runtime_.jsx)("div", {
          className: "ps-layout--list  with-skeleton",
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