exports.id = 4143;
exports.ids = [4143];
exports.modules = {

/***/ 7425:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ usePost; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2470);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var _repositories_Repository__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3378);
/* harmony import */ var react_lazyload__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6873);
/* harmony import */ var react_lazyload__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_lazyload__WEBPACK_IMPORTED_MODULE_5__);


/*
 * This hook return data of post (STRAPI CMS version)
 */





function usePost() {
  const {
    0: createdBy,
    1: setCreatedBy
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("Jan 1, 2021");
  const {
    0: categories,
    1: setCategories
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(next_link__WEBPACK_IMPORTED_MODULE_3__.default, {
    href: "/blog",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", {
      children: "uncategoried"
    })
  }));
  const {
    0: author,
    1: setAuthor
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("Unknown");
  const {
    0: thumbnail,
    1: setThumbnail
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const {
    0: thumbImageUrl,
    1: setThumbImageUrl
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("null");
  const {
    0: wideThumbnail,
    1: setWideThumbnail
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const {
    0: wideThumbImageUrl,
    1: setWideThumbImageUrl
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("null");
  const {
    0: title,
    1: setTitle
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("Post title here");
  return {
    createdBy,
    author,
    categories,
    title,
    thumbnail,
    thumbImageUrl,
    wideThumbnail,
    wideThumbImageUrl,
    initPost: post => {
      let titleView;

      if (post.name) {
        titleView = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(next_link__WEBPACK_IMPORTED_MODULE_3__.default, {
          href: "/post/[slug]",
          as: `/post/${post.slug}`,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", {
            className: "ps-post__title",
            children: post.name
          })
        });
      } else {
        titleView = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(next_link__WEBPACK_IMPORTED_MODULE_3__.default, {
          href: "/post/[slug]",
          as: `/post/${post.slug}`,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", {
            className: "ps-post__title",
            children: "No title here."
          })
        });
      }

      setTitle(titleView);

      if (post.created_at) {
        setCreatedBy(moment__WEBPACK_IMPORTED_MODULE_2___default()(post.created_at).format("MMM DD, YYYY"));
      }

      if (post.categories && post.categories.length > 0) {
        const categoryItems = post.categories.map(item => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(next_link__WEBPACK_IMPORTED_MODULE_3__.default, {
          href: "/category/[slug]",
          as: `/categories/${item.slug}`,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", {
            children: item.name
          })
        }, item.id));
        setCategories(categoryItems);
      }

      if (post.thumbnail) {
        const thumbnailImage = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((react_lazyload__WEBPACK_IMPORTED_MODULE_5___default()), {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
            src: `${_repositories_Repository__WEBPACK_IMPORTED_MODULE_4__/* .baseUrl */ .FH}${post.thumbnail.url}`,
            alt: "img"
          })
        });

        setThumbnail(thumbnailImage);
      }

      if (post.wide_thumbnail) {
        const wideThumbImage = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((react_lazyload__WEBPACK_IMPORTED_MODULE_5___default()), {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
            src: `${_repositories_Repository__WEBPACK_IMPORTED_MODULE_4__/* .baseUrl */ .FH}${post.wide_thumbnail.url}`,
            alt: "img"
          })
        });

        setWideThumbnail(wideThumbImage);
        setWideThumbImageUrl(`${_repositories_Repository__WEBPACK_IMPORTED_MODULE_4__/* .baseUrl */ .FH}${post.wide_thumbnail.url}`);
      }
    }
  };
}

/***/ }),

/***/ 8645:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Repository__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3378);


class PostRepository {
  constructor(callback) {
    this.callback = callback;
  }

  async getPosts(payload) {
    const endPoint = `posts?${(0,_Repository__WEBPACK_IMPORTED_MODULE_0__/* .serializeQuery */ .Y$)(payload)}`;
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__/* .default.get */ .ZP.get(`${_Repository__WEBPACK_IMPORTED_MODULE_0__/* .baseUrl */ .FH}/${endPoint}`).then(response => {
      if (response.data.length > 0) {
        return response.data;
      } else {
        return null;
      }
    }).catch(error => ({
      error: JSON.stringify(error)
    }));
    return reponse;
  }

  async getPostBySlug(payload) {
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__/* .default.get */ .ZP.get(`${_Repository__WEBPACK_IMPORTED_MODULE_0__/* .baseUrl */ .FH}/posts?slug=${payload}`).then(response => {
      if (response.data.length > 0) {
        return response.data[0];
      } else {
        return null;
      }
    }).catch(error => ({
      error: JSON.stringify(error)
    }));
    return reponse;
  }

  async SPGetPostItemOfCollectionBySlug(payload) {
    const endPoint = `collections?${(0,_Repository__WEBPACK_IMPORTED_MODULE_0__/* .serializeQuery */ .Y$)(payload)}`;
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__/* .default.get */ .ZP.get(`${_Repository__WEBPACK_IMPORTED_MODULE_0__/* .baseUrl */ .FH}/${endPoint}`).then(response => {
      if (response.data && response.data[0].posts.length > 0) {
        return response.data[0].posts;
      } else {
        return null;
      }
    }).catch(error => {
      console.log(JSON.stringify(error));
      return null;
    });
    return reponse;
  }

  async getPostItemsByKeyword(payload) {
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__/* .default.get */ .ZP.get(`${_Repository__WEBPACK_IMPORTED_MODULE_0__/* .baseUrl */ .FH}/posts?title_contains=${payload}`).then(response => {
      return response.data;
    }).catch(error => ({
      error: JSON.stringify(error)
    }));
    return reponse;
  }

  async getPostItemsByCategory(payload) {
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__/* .default.get */ .ZP.get(`${_Repository__WEBPACK_IMPORTED_MODULE_0__/* .baseUrl */ .FH}/posts?title_contains=${payload}`).then(response => {
      return response.data;
    }).catch(error => ({
      error: JSON.stringify(error)
    }));
    return reponse;
  }

}

/* harmony default export */ __webpack_exports__["Z"] = (new PostRepository());

/***/ })

};
;