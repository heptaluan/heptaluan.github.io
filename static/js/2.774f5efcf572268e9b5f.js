webpackJsonp([2],{

/***/ "l1oe":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("BkJT")(true);
// imports


// module
exports.push([module.i, "\n.dy-close {\n  margin-left: 25px;\n}\n.dy-close:first-child {\n    margin-left: 0;\n}\n", "", {"version":3,"sources":["C:/Users/Administrator/Desktop/app/example/views/components/Close.vue"],"names":[],"mappings":";AACA;EACE,kBAAkB;CACnB;AACD;IACI,eAAe;CAClB","file":"Close.vue","sourcesContent":["\n.dy-close {\n  margin-left: 25px;\n}\n.dy-close:first-child {\n    margin-left: 0;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "tILl":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("l1oe");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("8bSs")("84641724", content, true);

/***/ }),

/***/ "uxfk":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.2@babel-loader/lib!./node_modules/_vue-loader@13.6.0@vue-loader/lib/selector.js?type=script&index=0!./example/views/components/Close.vue
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

/* harmony default export */ var Close = ({
    methods: {
        closeHandle: function closeHandle() {
            this.$notify({
                message: "点击了关闭按钮",
                delay: 2000,
                type: "default"
            });
        }
    }
});
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.6.0@vue-loader/lib/template-compiler?{"id":"data-v-4f014298","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/_vue-loader@13.6.0@vue-loader/lib/selector.js?type=template&index=0!./example/views/components/Close.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"components-box"},[_c('div',{staticClass:"components-title"},[_vm._v("Close 关闭按钮")]),_vm._v(" "),_c('div',{staticClass:"components-wrapper"},[_c('ul',[_c('li',[_c('div',{staticClass:"components-content"},[_c('div',{staticClass:"components-content"},[_c('h2',{staticClass:"h2"},[_vm._v("Close 关闭按钮")]),_vm._v(" "),_c('div',[_c('dy-close',{attrs:{"size":"28"}}),_vm._v(" "),_c('dy-close',{attrs:{"size":"20"}}),_vm._v(" "),_c('dy-close')],1)])]),_vm._v(" "),_c('div',{staticClass:"components-content"},[_c('div',{staticClass:"components-content"},[_c('h2',{staticClass:"h2"},[_vm._v("绑定 Close 点击事件")]),_vm._v(" "),_c('div',[_c('dy-close',{attrs:{"size":"20"},on:{"click":_vm.closeHandle}})],1)])]),_vm._v(" "),_vm._m(0),_vm._v(" "),_c('pre',{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[_vm._v("\r\n    "),_c('code',{staticClass:"html"},[_vm._v("\r\n    <template>\r\n        \r\n        <dy-close size=\"28\"></dy-close>\r\n\r\n        <dy-close size=\"20\"></dy-close>\r\n\r\n        <dy-close></dy-close>\r\n\r\n        <dy-close size=\"20\" @click=\"closeHandle\"></dy-close>\r\n\r\n    </template>\r\n\r\n    <script>\r\n\r\n        export default {\r\n            methods: {\r\n                closeHandle() {\r\n                    this.$notify({\r\n                        message: \"点击了关闭按钮\",\r\n                        delay: 2000,\r\n                        type: \"default\"\r\n                    });\r\n                }\r\n            }\r\n        }\r\n\r\n    </script>\r\n    ")]),_vm._v("\r\n")])])])])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"components-code"},[_c('div',{staticClass:"code-title"},[_vm._v("示例代码")]),_vm._v(" "),_c('div',{staticClass:"code-tip"},[_c('p',[_vm._v("使用的是基于阿里巴巴的矢量图标库")]),_vm._v(" "),_c('p',[_vm._v("默认的图标是没有点击事件的，封装后 "),_c('code',[_vm._v("close")]),_vm._v(" 组件会 "),_c('code',[_vm._v("$emit")]),_vm._v(" 一个 "),_c('code',[_vm._v("click")]),_vm._v(" 事件予以调用")]),_vm._v(" "),_c('p',[_c('code',[_vm._v("size")]),_vm._v(" -- 指定图标大小，默认大小为 "),_c('code',[_vm._v("10")])])])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var components_Close = (esExports);
// CONCATENATED MODULE: ./example/views/components/Close.vue
function injectStyle (ssrContext) {
  __webpack_require__("tILl")
}
var normalizeComponent = __webpack_require__("OF7X")
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
  Close,
  components_Close,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var views_components_Close = __webpack_exports__["default"] = (Component.exports);


/***/ })

});
//# sourceMappingURL=2.774f5efcf572268e9b5f.js.map