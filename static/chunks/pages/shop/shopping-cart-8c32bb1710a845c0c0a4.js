(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4652],{32230:function(s,e,i){"use strict";var n=i(85893),c=(i(67294),i(41664));e.Z=function(s){var e=s.breacrumb;return(0,n.jsx)("ul",{className:"breadcrumb",children:e.map((function(s){return s.url?(0,n.jsx)("li",{children:(0,n.jsx)(c.default,{href:s.url,children:(0,n.jsx)("a",{children:s.text})})},s.text):(0,n.jsx)("li",{children:s.text},s.id)}))})}},95887:function(s,e,i){"use strict";var n=i(85893);i(67294);e.Z=function(){return(0,n.jsx)("div",{className:"ps-pagination",children:(0,n.jsxs)("ul",{className:"pagination",children:[(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"#",children:(0,n.jsx)("i",{className:"fa fa-angle-double-left"})})}),(0,n.jsx)("li",{className:"active",children:(0,n.jsx)("a",{href:"#",children:"1"})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"#",children:"2"})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"#",children:"3"})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"#",children:(0,n.jsx)("i",{className:"fa fa-angle-double-right"})})})]})})}},11624:function(s,e,i){"use strict";var n=i(85893),c=(i(67294),i(33860)),r=i(7864);e.Z=function(s){var e=s.rows,i=void 0===e?1:e,t=(0,r.Zn)(8*i).map((function(s){return(0,n.jsx)("div",{className:"ps-skeleton__item",children:(0,n.jsx)(c.Z.Input,{style:{width:360},active:!0,size:40})},s)}));return(0,n.jsx)("div",{className:"ps-skeleton--table",children:t})}},18514:function(s,e,i){"use strict";i.d(e,{Z:function(){return u}});var n=i(85893),c=i(67294),r=i(54418),t=i(16114),a=i(71577),l=function(){var s=[{id:1,text:"Popularity"},{id:2,text:"Avarage Rating"},{id:3,text:"Latest"},{id:4,text:"Price: Low - High"},{id:5,text:"Price: High - Low"}].map((function(s){return(0,n.jsx)(r.Z.Item,{children:(0,n.jsx)("a",{href:"#",children:s.text})},s.id)})),e=(0,n.jsx)(r.Z,{children:s});return(0,n.jsxs)("div",{className:"ps-shop__sortby",children:[(0,n.jsx)("span",{children:"Sortby"}),(0,n.jsx)(t.Z,{overlay:e,placement:"bottomLeft",className:"ps-dropdown-toggle",children:(0,n.jsxs)(a.Z,{children:["Popularity ",(0,n.jsx)("i",{className:"icon-chevron-down"})]})})]})},o=function(){var s=[10,20,50,100].map((function(s){return(0,n.jsx)(r.Z.Item,{children:(0,n.jsx)("a",{href:"#",children:s})},s)})),e=(0,n.jsx)(r.Z,{children:s});return(0,n.jsxs)("div",{className:"ps-shop__pagination-range",children:[(0,n.jsx)("span",{children:"Show"}),(0,n.jsx)(t.Z,{overlay:e,placement:"bottomLeft",className:"ps-dropdown-toggle",children:(0,n.jsxs)(a.Z,{children:[(0,n.jsx)("strong",{children:"10"})," ",(0,n.jsx)("i",{className:"icon-chevron-down"})]})})]})},d=i(11163),h=[{id:1,url:"/shop?layout=list",image:"/static/img/icon/bars.svg",imageActive:"/static/img/icon/bars.svg"},{id:2,url:"/shop?layout=grid&columns=2",image:"/static/img/icon/gird2.svg",imageActive:"/static/img/icon/gird2.svg"},{id:3,url:"/shop?layout=grid&columns=3",image:"/static/img/icon/gird3.svg",imageActive:"/static/img/icon/gird3.svg"},{id:4,url:"/shop?layout=grid&columns=4",image:"/static/img/icon/gird4.svg",imageActive:"/static/img/icon/gird4.svg"}],p=function(){var s=(0,c.useState)(h[3]),e=s[0],i=s[1],r=(0,d.useRouter)();var t=h.map((function(s){return(0,n.jsx)("a",{className:"ps-shop__layout-switcher ".concat(s.id===e.id?"active":""),onClick:function(e){return function(s,e){s.preventDefault(),i(e),r.push(e.url,void 0,{scroll:!1})}(e,s)},children:(0,n.jsx)("img",{src:s.image,alt:s.image})},s.id)}));return(0,n.jsxs)("div",{className:"ps-shop__actions",children:[(0,n.jsxs)("div",{className:"ps-shop__actions-left",children:[(0,n.jsx)("div",{className:"ps-shop__layout-switchers",children:t}),(0,n.jsxs)("div",{className:"ps-checkbox",children:[(0,n.jsx)("input",{className:"form-control",type:"checkbox",id:"show-onsale",name:"show-onsale"}),(0,n.jsx)("label",{htmlFor:"show-onsale",children:"Show only products on sale"})]})]}),(0,n.jsxs)("div",{className:"ps-shop__actions-right",children:[(0,n.jsx)(l,{}),(0,n.jsx)(o,{})]})]})},x=i(95887),u=function(s){var e,i=s.children,c=s.classes,r=s.fullwidth,t=void 0!==r&&r,a=s.actions;return(void 0===a||a)&&(e=(0,n.jsx)("div",{className:"ps-shop__header",children:(0,n.jsx)("div",{className:"container",children:(0,n.jsx)(p,{})})})),t?(0,n.jsxs)("div",{className:"ps-shop ".concat(void 0!==c?c:""),children:[e,(0,n.jsxs)("div",{className:"ps-shop__content",children:[(0,n.jsx)("div",{className:"container",children:i}),(0,n.jsx)("div",{className:"ps-shop__footer",children:(0,n.jsx)(x.Z,{})})]})]}):(0,n.jsxs)("div",{className:"ps-shop ".concat(c),children:[e,(0,n.jsx)("div",{className:"ps-shop__content",children:i}),(0,n.jsx)("div",{className:"ps-shop__footer",children:(0,n.jsx)(x.Z,{})})]})}},68330:function(s,e,i){"use strict";i.r(e),i.d(e,{default:function(){return v}});var n=i(85893),c=i(67294),r=i(75676),t=i(32230),a=(i(18514),i(41664)),l=i(37703),o=i(61460),d=i(18428),h=i(6129),p=(0,l.$j)((function(s){return s}))((function(s){var e,i=s.ecomerce,c=s.cartItems,r=(0,d.Z)(),t=r.increaseQty,a=r.decreaseQty,l=r.removeItem;if(c.length>0){var p=c.map((function(s){return(0,n.jsxs)("tr",{children:[(0,n.jsxs)("td",{children:[(0,n.jsx)("a",{className:"ps-icon ps-cart-item__remove",href:"#",onClick:function(e){return function(s,e){s.preventDefault(),l({id:e},i.cartItems,"cart")}(e,s.id)},children:(0,n.jsx)("i",{className:"icon-cross mr-2"})}),(0,n.jsx)(o.Z,{product:s})]}),(0,n.jsx)("td",{"data-label":"price",children:(0,n.jsxs)("strong",{children:["$",s.price]})}),(0,n.jsx)("td",{"data-label":"quantity",children:(0,n.jsxs)("span",{className:"form-group--number",children:[(0,n.jsx)("button",{className:"up",onClick:function(e){return function(s,e){s.preventDefault(),t({id:e},i.cartItems)}(e,s.id)}}),(0,n.jsx)("button",{className:"down",onClick:function(e){return function(s,e){s.preventDefault(),a({id:e},i.cartItems)}(e,s.id)}}),(0,n.jsx)("input",{className:"form-control",type:"text",placeholder:s.quantity,disabled:!0})]})}),(0,n.jsx)("td",{"data-label":"total",children:(0,n.jsxs)("strong",{children:["$",(s.price*s.quantity).toFixed(2)]})})]},s.id)}));e=(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("table",{className:"table ps-table ps-table--shopping-cart ps-table--responsive",children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:"Product"}),(0,n.jsx)("th",{children:"Price"}),(0,n.jsx)("th",{children:"Quantity"}),(0,n.jsx)("th",{children:"Total"})]})}),(0,n.jsx)("tbody",{children:p})]})})}else e=(0,n.jsx)(h.ZP,{status:"warning",title:"No product in cart."});return(0,n.jsx)(n.Fragment,{children:e})})),x=i(48807),u=function(s){var e,i=s.cartItems;return i&&(e=i&&i.length>0?(0,x.fu)(i):"0.00"),(0,n.jsxs)("div",{className:"ps-block--cart-summary",children:[(0,n.jsx)("div",{className:"ps-block__header",children:(0,n.jsx)("h4",{children:"Cart Total"})}),(0,n.jsxs)("div",{className:"ps-block__content",children:[(0,n.jsxs)("div",{className:"ps-block__records",children:[(0,n.jsxs)("p",{children:[(0,n.jsx)("span",{children:"Subtotal"}),(0,n.jsxs)("strong",{children:["$",e]})]}),(0,n.jsxs)("p",{children:[(0,n.jsx)("span",{children:"Shipping"}),(0,n.jsxs)("span",{children:[" ","Enter your address to view shipping options."," "]})]}),(0,n.jsxs)("p",{className:"total",children:[(0,n.jsx)("span",{children:"Total"}),(0,n.jsxs)("strong",{children:["$",e]})]})]}),(0,n.jsx)("div",{className:"ps-block__bottom",children:(0,n.jsx)(a.default,{href:"/shop/checkout",children:(0,n.jsx)("a",{className:"ps-btn ps-btn--orange",children:"Proceed to checkout"})})})]})]})},m=i(11624),j=[{text:"Home",url:"/"},{text:"Shop",url:"/shopping"},{text:"Shopping cart"}],v=(0,l.$j)((function(s){return s}))((function(s){var e,i,l=s.ecomerce,o=(0,d.Z)(),v=o.loading,g=o.products,f=o.getProducts;return(0,c.useEffect)((function(){l.cartItems&&f(l.cartItems,"cart")}),[l]),g&&g.length>0?(i=(0,x.VK)(g),e=(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:"ps-cart--primary",children:[(0,n.jsxs)("div",{className:"ps-cart__content",children:[(0,n.jsx)("div",{className:"ps-cart__items",children:(0,n.jsx)(p,{cartItems:g})}),(0,n.jsxs)("div",{className:"ps-cart__actions",children:[(0,n.jsx)("div",{className:"ps-cart__link",children:(0,n.jsx)(a.default,{href:"/shop",children:(0,n.jsx)("a",{className:"ps-btn ps-btn--orange",children:"Back to shop"})})}),(0,n.jsxs)("div",{className:"ps-cart__coupon",children:[(0,n.jsx)("input",{type:"text",className:"form-control",placeholder:"Enter your coupon"}),(0,n.jsx)("button",{className:"ps-btn ps-btn--primary",children:"Apply"})]})]})]}),(0,n.jsx)("div",{className:"ps-cart__order-summary",children:(0,n.jsx)(u,{cartItems:g})})]})})):e=v?(0,n.jsxs)("div",{className:"ps-cart--primary",children:[(0,n.jsx)("div",{className:"ps-cart__content",children:(0,n.jsx)("div",{className:"ps-cart__items",children:(0,n.jsx)(m.Z,{rows:2})})}),(0,n.jsx)("div",{className:"ps-cart__order-summary",children:(0,n.jsx)(u,{})})]}):(0,n.jsx)(h.ZP,{status:"warning",title:"No product in cart."}),(0,n.jsx)(r.Z,{title:"Shopping Cart",children:(0,n.jsx)("div",{className:"ps-page ps-page--shopping",children:(0,n.jsxs)("div",{className:"container",children:[(0,n.jsxs)("div",{className:"ps-page__header",children:[(0,n.jsx)(t.Z,{breacrumb:j}),(0,n.jsxs)("h1",{className:"ps-page__heading",children:["Shopping cart",i?(0,n.jsxs)("sup",{children:["(",i,")"]}):""]})]}),(0,n.jsx)("div",{className:"ps-page__content",children:e})]})})})}))},50422:function(s,e,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/shop/shopping-cart",function(){return i(68330)}])}},function(s){s.O(0,[4885,6205,5676,9774,2888,179],(function(){return e=50422,s(s.s=e);var e}));var e=s.O();_N_E=e}]);