webpackJsonp([0],{

/***/ "XS5k":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("BkJT")(true);
// imports


// module
exports.push([module.i, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"Loading.vue","sourceRoot":""}]);

// exports


/***/ }),

/***/ "lBJV":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("XS5k");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("8bSs")("25099880", content, true);

/***/ }),

/***/ "xCdw":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.2@babel-loader/lib!./node_modules/_vue-loader@13.6.0@vue-loader/lib/selector.js?type=script&index=0!./example/views/components/Loading.vue
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

/* harmony default export */ var Loading = ({
    methods: {
        loadingHandle01: function loadingHandle01() {
            this.$loading.open();
        },
        loadingHandle02: function loadingHandle02() {
            this.$loading.open({
                timeout: 500,
                loadingText: "拼命加载中"
            });
        },
        loadingHandle03: function loadingHandle03() {
            var _this = this;

            this.$loading.open({
                timeout: 9999999
            });
            setTimeout(function () {
                _this.$loading.close();
            }, 2000);
        }
    }
});
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.6.0@vue-loader/lib/template-compiler?{"id":"data-v-b837bf62","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/_vue-loader@13.6.0@vue-loader/lib/selector.js?type=template&index=0!./example/views/components/Loading.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"components-box"},[_c('div',{staticClass:"components-title"},[_vm._v("Loading 加载中")]),_vm._v(" "),_c('div',{staticClass:"components-wrapper"},[_c('ul',[_c('li',[_c('div',{staticClass:"components-content"},[_c('h2',{staticClass:"h2"},[_vm._v("Loading 加载中（默认）")]),_vm._v(" "),_c('dy-button',{on:{"click":_vm.loadingHandle01}},[_vm._v("点击加载")])],1),_vm._v(" "),_vm._m(0),_vm._v(" "),_c('pre',{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[_vm._v("\r\n    "),_c('code',{staticClass:"html"},[_vm._v("\r\n    <template>\r\n        \r\n        <dy-button @click=\"loadingHandle01\">点击加载</dy-button>\r\n\r\n    </template>\r\n\r\n    <script>\r\n        export default {\r\n            methods: {\r\n                loadingHandle01() {\r\n                    this.$loading.open()\r\n                }\r\n            }\r\n        };\r\n    </template>\r\n    ")]),_vm._v("\r\n")])]),_vm._v(" "),_c('li',[_c('div',{staticClass:"components-content"},[_c('h2',{staticClass:"h2"},[_vm._v("Loading 加载中（参数设置）")]),_vm._v(" "),_c('dy-button',{on:{"click":_vm.loadingHandle02}},[_vm._v("点击加载")])],1),_vm._v(" "),_vm._m(1),_vm._v(" "),_c('pre',{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[_vm._v("\r\n    "),_c('code',{staticClass:"html"},[_vm._v("\r\n    <template>\r\n        \r\n        <dy-button @click=\"loadingHandle02\">点击加载</dy-button>\r\n\r\n    </template>\r\n\r\n    <script>\r\n        export default {\r\n            methods: {\r\n                loadingHandle02() {\r\n                    this.$loading.open({\r\n                        timeout: 500,\r\n                        loadingText: \"拼命加载中\"\r\n                    })\r\n                }\r\n            }\r\n        };\r\n    </template>\r\n    ")]),_vm._v("\r\n")])]),_vm._v(" "),_c('li',[_c('div',{staticClass:"components-content"},[_c('h2',{staticClass:"h2"},[_vm._v("Loading 加载中（手动关闭）")]),_vm._v(" "),_c('dy-button',{on:{"click":_vm.loadingHandle03}},[_vm._v("点击加载")])],1),_vm._v(" "),_vm._m(2),_vm._v(" "),_c('pre',{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[_vm._v("\r\n    "),_c('code',{staticClass:"html"},[_vm._v("\r\n    <template>\r\n        \r\n        <dy-button @click=\"loadingHandle03\">点击加载</dy-button>\r\n\r\n    </template>\r\n\r\n    <script>\r\n        export default {\r\n            methods: {\r\n                loadingHandle03() {\r\n                    // 长时间开启\r\n                    this.$loading.open({\r\n                        timeout: 9999999\r\n                    })\r\n\r\n                    // 手动关闭\r\n                    setTimeout( () => {\r\n                        this.$loading.close()\r\n                    }, 2000)\r\n                }\r\n            }\r\n        };\r\n    </template>\r\n    ")]),_vm._v("\r\n")])])])])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"components-code"},[_c('div',{staticClass:"code-title"},[_vm._v("示例代码")]),_vm._v(" "),_c('div',{staticClass:"code-tip"},[_c('p',[_vm._v("直接绑定点击事件，然后调用 "),_c('code',[_vm._v("this.$loading.open()")]),_vm._v(" 方法即可")]),_vm._v(" "),_c('br'),_vm._v(" "),_c('p',[_c('code',[_vm._v("this.$loading")]),_vm._v(" 指令提供了两个方法，"),_c('code',[_vm._v("open()")]),_vm._v(" 和 "),_c('code',[_vm._v("close()")])]),_vm._v(" "),_c('p',[_c('code',[_vm._v("open()")]),_vm._v(" 方法可以接收参数，参数为一个对象")]),_vm._v(" "),_c('p',[_c('code',[_vm._v("tiemout")]),_vm._v(" -- 关闭时间，默认为 "),_c('code',[_vm._v("3000")]),_vm._v(" 毫秒")]),_vm._v(" "),_c('p',[_c('code',[_vm._v("loadingText")]),_vm._v(" -- 加载的提示文字，不填写的情况下默认为 "),_c('code',[_vm._v("Loading")])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"components-code"},[_c('div',{staticClass:"code-title"},[_vm._v("示例代码")]),_vm._v(" "),_c('div',{staticClass:"code-tip"},[_c('p',[_vm._v("可以为 "),_c('code',[_vm._v("open()")]),_vm._v(" 方法指定参数")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"components-code"},[_c('div',{staticClass:"code-title"},[_vm._v("示例代码")]),_vm._v(" "),_c('div',{staticClass:"code-tip"},[_c('p',[_vm._v("也可以手动的调用 "),_c('code',[_vm._v("close()")]),_vm._v(" 方法来进行关闭")])])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var components_Loading = (esExports);
// CONCATENATED MODULE: ./example/views/components/Loading.vue
function injectStyle (ssrContext) {
  __webpack_require__("lBJV")
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
  Loading,
  components_Loading,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var views_components_Loading = __webpack_exports__["default"] = (Component.exports);


/***/ })

});
//# sourceMappingURL=0.8703bcb0594bde647d4c.js.map