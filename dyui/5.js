webpackJsonp([5],{

/***/ 505:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_SideBar_vue__ = __webpack_require__(530);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_1_vue_loader_lib_template_compiler_index_id_data_v_21cf3e22_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_template_index_0_SideBar_vue__ = __webpack_require__(584);
function injectStyle (ssrContext) {
  __webpack_require__(583)
}
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_SideBar_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_1_vue_loader_lib_template_compiler_index_id_data_v_21cf3e22_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_template_index_0_SideBar_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 530:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      showSidebar01: false,
      showSidebar02: false
    };
  },

  methods: {
    showHandle01: function showHandle01() {
      this.showSidebar01 = true;
    },
    showHandle02: function showHandle02() {
      this.showSidebar02 = true;
    }
  }
});

/***/ }),

/***/ 583:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 584:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"components-box"},[_c('div',{staticClass:"components-title"},[_vm._v("SideBar 侧边栏")]),_vm._v(" "),_c('div',{staticClass:"components-wrapper"},[_c('ul',[_c('li',[_c('div',{staticClass:"components-content"},[_c('h2',{staticClass:"h2"},[_vm._v("SideBar 侧边栏")]),_vm._v(" "),_c('dy-button',{on:{"click":_vm.showHandle01}},[_vm._v("左侧侧边栏")]),_vm._v(" "),_c('dy-sidebar',{attrs:{"is-show":_vm.showSidebar01,"width":280},on:{"update:isShow":function($event){_vm.showSidebar01=$event}}},[_c('div',{staticClass:"side-box"},[_c('p',[_vm._v("这里是侧边栏弹出层的自定义内容部分")])])]),_vm._v(" "),_c('dy-button',{staticStyle:{"margin-left":"40px"},on:{"click":_vm.showHandle02}},[_vm._v("右侧侧边栏")]),_vm._v(" "),_c('dy-sidebar',{attrs:{"placement":"right","is-show":_vm.showSidebar02,"width":280},on:{"update:isShow":function($event){_vm.showSidebar02=$event}}},[_c('div',{staticClass:"side-box"},[_c('p',[_vm._v("这里是侧边栏弹出层的自定义内容部分")])])])],1),_vm._v(" "),_vm._m(0),_vm._v(" "),_c('pre',{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[_vm._v("\r\n    "),_c('code',{staticClass:"html"},[_vm._v("\r\n    <template>\r\n        \r\n      <dy-button @click=\"showHandle01\">左侧侧边栏</dy-button>\r\n      <dy-sidebar :is-show.sync=\"showSidebar01\" :width=\"280\">\r\n        <div class=\"side-box\">\r\n          <p>这里是侧边栏弹出层的自定义内容部分</p>\r\n        </div>\r\n      </dy-sidebar>\r\n\r\n      <dy-button @click=\"showHandle02\" style=\"margin-left:40px;\">右侧侧边栏</dy-button>\r\n      <dy-sidebar placement=\"right\" :is-show.sync=\"showSidebar02\" :width=\"280\">\r\n        <div class=\"side-box\">\r\n          <p>这里是侧边栏弹出层的自定义内容部分</p>\r\n        </div>\r\n      </dy-sidebar>\r\n\r\n    </template>\r\n    <script>\r\n      export default {\r\n        data () {\r\n          return {\r\n            showSidebar01: false,\r\n            showSidebar02: false\r\n          }\r\n        },\r\n        methods: {\r\n          showHandle01 () {\r\n            this.showSidebar01 = true\r\n          },\r\n          showHandle02 () {\r\n            this.showSidebar02 = true\r\n          },\r\n        }\r\n      }\r\n    </script>\r\n    ")]),_vm._v("\r\n")])])])]),_vm._v(" "),_c('div',{staticStyle:{"height":"500px"}})])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"components-code"},[_c('div',{staticClass:"code-title"},[_vm._v("示例代码")]),_vm._v(" "),_c('div',{staticClass:"code-tip"},[_c('p',[_vm._v("使用 "),_c('code',[_vm._v("dy-sidebar")]),_vm._v(" 组件绑定 "),_c('code',[_vm._v(":is-show.sync")]),_vm._v(" 参数即可")]),_vm._v(" "),_c('p',[_vm._v("侧边栏的状态是根据 "),_c('code',[_vm._v(":is-show.sync")]),_vm._v(" 所绑定的值来改变状态的")]),_vm._v(" "),_c('br'),_vm._v(" "),_c('p',[_vm._v("参数设置如下：")]),_vm._v(" "),_c('p',[_c('code',[_vm._v(":is-show.sync")]),_vm._v(" -- 布尔值，用于显示侧边栏的状态")]),_vm._v(" "),_c('p',[_c('code',[_vm._v(":width")]),_vm._v(" -- 数值或者字符串，用于设置侧边栏的宽度，默认为 "),_c('code',[_vm._v("250")])]),_vm._v(" "),_c('p',[_c('code',[_vm._v("placement")]),_vm._v(" -- 用于指定侧边栏弹出方向")])])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

});