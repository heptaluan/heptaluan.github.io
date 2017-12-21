webpackJsonp([13],{

/***/ "46CB":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("ItOx");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("8bSs")("04501387", content, true);

/***/ }),

/***/ "ItOx":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("BkJT")(true);
// imports


// module
exports.push([module.i, "\n.tab-wrapper {\n  padding: 10px 25px 5px;\n  border-top: 1px solid #d7dde4;\n}\n.tab-wrapper .tab-content {\n    margin-top: 15px;\n    margin-bottom: 20px;\n}\n.tab-wrapper .tab-content .h2 {\n      font-size: 16px;\n      font-weight: normal;\n      margin: 20px 0;\n      font-weight: 600;\n}\n.tab-wrapper .components-code {\n    font-size: 14px;\n    margin-bottom: 15px;\n}\n.tab-wrapper .components-code .code-title {\n      font-size: 14px;\n      margin-bottom: 15px;\n}\n.tab-wrapper .code-tip {\n    display: block;\n    padding: .5em;\n    background: #23241f;\n    color: #fff;\n    font-size: 14px;\n    text-indent: 10px;\n    padding: 10px 0;\n}\n.tab-wrapper .code-tip p {\n      margin: 5px;\n}\n", "", {"version":3,"sources":["C:/Users/Administrator/Desktop/app/example/views/components/Tab.vue"],"names":[],"mappings":";AACA;EACE,uBAAuB;EACvB,8BAA8B;CAC/B;AACD;IACI,iBAAiB;IACjB,oBAAoB;CACvB;AACD;MACM,gBAAgB;MAChB,oBAAoB;MACpB,eAAe;MACf,iBAAiB;CACtB;AACD;IACI,gBAAgB;IAChB,oBAAoB;CACvB;AACD;MACM,gBAAgB;MAChB,oBAAoB;CACzB;AACD;IACI,eAAe;IACf,cAAc;IACd,oBAAoB;IACpB,YAAY;IACZ,gBAAgB;IAChB,kBAAkB;IAClB,gBAAgB;CACnB;AACD;MACM,YAAY;CACjB","file":"Tab.vue","sourcesContent":["\n.tab-wrapper {\n  padding: 10px 25px 5px;\n  border-top: 1px solid #d7dde4;\n}\n.tab-wrapper .tab-content {\n    margin-top: 15px;\n    margin-bottom: 20px;\n}\n.tab-wrapper .tab-content .h2 {\n      font-size: 16px;\n      font-weight: normal;\n      margin: 20px 0;\n      font-weight: 600;\n}\n.tab-wrapper .components-code {\n    font-size: 14px;\n    margin-bottom: 15px;\n}\n.tab-wrapper .components-code .code-title {\n      font-size: 14px;\n      margin-bottom: 15px;\n}\n.tab-wrapper .code-tip {\n    display: block;\n    padding: .5em;\n    background: #23241f;\n    color: #fff;\n    font-size: 14px;\n    text-indent: 10px;\n    padding: 10px 0;\n}\n.tab-wrapper .code-tip p {\n      margin: 5px;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "Lf+3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.2@babel-loader/lib!./node_modules/_vue-loader@13.6.0@vue-loader/lib/selector.js?type=script&index=0!./example/views/components/Tab.vue
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

/* harmony default export */ var Tab = ({
	data: function data() {
		return {};
	}
});
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.6.0@vue-loader/lib/template-compiler?{"id":"data-v-079f1601","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/_vue-loader@13.6.0@vue-loader/lib/selector.js?type=template&index=0!./example/views/components/Tab.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"components-box"},[_c('div',{staticClass:"components-title"},[_vm._v("Tab 选项卡")]),_vm._v(" "),_c('div',{staticClass:"tab-wrapper"},[_c('ul',[_c('li',[_c('div',{staticClass:"tab-content"},[_c('h2',{staticClass:"h2"},[_vm._v("Tab 选项卡")]),_vm._v(" "),_c('dy-tab',[_c('dy-tab-list',{attrs:{"label":"渲染函数"}},[_c('p',[_vm._v("Vue 推荐在绝大多数情况下使用 template 来创建你的 HTML。然而在一些场景中，你真的需要 JavaScript 的完全编程的能力，这就是 render 函数，它比 template 更接近编译器。")])]),_vm._v(" "),_c('dy-tab-list',{attrs:{"label":"虚拟 DOM"}},[_c('p',[_vm._v("createElement 到底会返回什么呢？其实不是一个实际的 DOM 元素。它更准确的名字可能是 createNodeDescription，因为它所包含的信息会告诉 Vue 页面上需要渲染什么样的节点，及其子节点。")])]),_vm._v(" "),_c('dy-tab-list',{attrs:{"label":"深入 data 对象"}},[_c('p',[_vm._v("有一件事要注意：正如在模板语法中，v-bind:class 和 v-bind:style ，会被特别对待一样，在 VNode 数据对象中，下列属性名是级别最高的字段。该对象也允许你绑定普通的 HTML 特性，就像 DOM 属性一样，比如 innerHTML (这会取代 v-html 指令)。")])])],1)],1),_vm._v(" "),_vm._m(0),_vm._v(" "),_c('pre',{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[_vm._v("\r\n    "),_c('code',{staticClass:"html"},[_vm._v("\r\n    <template>\r\n        \r\n        <dy-icon size=\"36\" type=\"&#xe6b2;\"></dy-icon>\r\n\r\n    </template>\r\n    ")]),_vm._v("\r\n")])])])]),_vm._v(" "),_c('div',{staticStyle:{"height":"500px"}})])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"components-code"},[_c('div',{staticClass:"code-title"},[_vm._v("示例代码")]),_vm._v(" "),_c('div',{staticClass:"code-tip"},[_c('p',[_vm._v("使用的是基于阿里巴巴的矢量图标库")]),_vm._v(" "),_c('p',[_c('code',[_vm._v("size")]),_vm._v(" -- 指定图标大小")]),_vm._v(" "),_c('p',[_c('code',[_vm._v("type")]),_vm._v(" -- 指定图标类型")])])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var components_Tab = (esExports);
// CONCATENATED MODULE: ./example/views/components/Tab.vue
function injectStyle (ssrContext) {
  __webpack_require__("46CB")
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
  Tab,
  components_Tab,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var views_components_Tab = __webpack_exports__["default"] = (Component.exports);


/***/ })

});
//# sourceMappingURL=13.25e2c17c90064951af2e.js.map