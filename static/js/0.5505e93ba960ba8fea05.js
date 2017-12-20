webpackJsonp([0],{

/***/ "8ZUT":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("BkJT")(true);
// imports


// module
exports.push([module.i, "\n.dy-select-subBox {\n  margin-top: 20px;\n}\n", "", {"version":3,"sources":["C:/Users/Administrator/Desktop/app/example/views/components/Select.vue"],"names":[],"mappings":";AACA;EACE,iBAAiB;CAClB","file":"Select.vue","sourcesContent":["\n.dy-select-subBox {\n  margin-top: 20px;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "QLH5":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("8ZUT");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("8bSs")("1a98c252", content, true);

/***/ }),

/***/ "f42M":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.2@babel-loader/lib!./node_modules/_vue-loader@13.6.0@vue-loader/lib/selector.js?type=script&index=0!./example/views/components/Select.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Select = ({
    data: function data() {
        return {
            options01: [{
                label: "东瓜"
            }, {
                label: "南瓜"
            }, {
                label: "西瓜"
            }],
            options02: [{
                label: "东瓜"
            }, {
                label: "南瓜"
            }, {
                label: "西瓜"
            }, {
                label: "北瓜"
            }, {
                label: "中瓜"
            }, {
                label: "葡萄"
            }, {
                label: "梨子"
            }, {
                label: "香蕉"
            }, {
                label: "苹果"
            }, {
                label: "地瓜"
            }, {
                label: "皮瓜"
            }],
            selectVal01: [],
            selectVal02: []
        };
    }
    // methods: {
    //     selectHandle() {
    //         this.selectVal = val;
    //     }
    // }

});
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.6.0@vue-loader/lib/template-compiler?{"id":"data-v-ae881a84","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/_vue-loader@13.6.0@vue-loader/lib/selector.js?type=template&index=0!./example/views/components/Select.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"components-box"},[_c('div',{staticClass:"components-title"},[_vm._v("Select 下拉菜单")]),_vm._v(" "),_c('div',{staticClass:"components-wrapper"},[_c('ul',[_c('li',[_c('div',{staticClass:"components-content"},[_c('h2',{staticClass:"h2"},[_vm._v("Select 下拉菜单（默认）")]),_vm._v(" "),_c('dy-select',{attrs:{"options":_vm.options01}})],1),_vm._v(" "),_vm._m(0),_vm._v(" "),_c('pre',{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[_vm._v("\r\n    "),_c('code',{staticClass:"html"},[_vm._v("\r\n    <template>\r\n\r\n        <dy-select :options=\"options01\"></dy-select>\r\n\r\n    </template>\r\n\r\n    <script>\r\n        export default {\r\n            data() {\r\n                return {\r\n                    options01: [{\r\n                        label: \"东瓜\"\r\n                    }, {\r\n                        label: \"南瓜\"\r\n                    }, {\r\n                        label: \"西瓜\",\r\n                    }]\r\n                }\r\n            }\r\n        }\r\n    </script>\r\n    ")]),_vm._v("\r\n")])]),_vm._v(" "),_c('li',[_c('div',{staticClass:"components-content"},[_c('h2',{staticClass:"h2"},[_vm._v("Select 下拉菜单（获取选中值）")]),_vm._v(" "),_c('dy-select',{attrs:{"options":_vm.options01},model:{value:(_vm.selectVal01),callback:function ($$v) {_vm.selectVal01=$$v},expression:"selectVal01"}}),_vm._v(" "),_c('div',{staticClass:"subBox dy-select-subBox"},[_vm._v("\r\n        当前选择的是："+_vm._s(_vm.selectVal01)+"\r\n    ")])],1),_vm._v(" "),_vm._m(1),_vm._v(" "),_c('pre',{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[_vm._v("\r\n    "),_c('code',{staticClass:"html"},[_vm._v("\r\n    <template>\r\n\r\n        <dy-select :options=\"options01\" v-model=\"selectVal01\"></dy-select>\r\n\r\n    </template>\r\n\r\n    <script>\r\n        export default {\r\n            data() {\r\n                return {\r\n                    options01: [{\r\n                        label: \"东瓜\"\r\n                    }, {\r\n                        label: \"南瓜\"\r\n                    }, {\r\n                        label: \"西瓜\",\r\n                    }],\r\n                    selectVal01: []\r\n                }\r\n            }\r\n        }\r\n    </script>\r\n    ")]),_vm._v("\r\n")])]),_vm._v(" "),_c('li',[_c('div',{staticClass:"components-content"},[_c('h2',{staticClass:"h2"},[_vm._v("Select 下拉菜单（多选）")]),_vm._v(" "),_c('dy-select',{attrs:{"options":_vm.options01,"multiple":true}})],1),_vm._v(" "),_vm._m(2),_vm._v(" "),_c('pre',{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[_vm._v("\r\n    "),_c('code',{staticClass:"html"},[_vm._v("\r\n    <template>\r\n\r\n        <dy-select :options=\"options01\" :multiple=\"true\"></dy-select>\r\n\r\n    </template>\r\n\r\n    <script>\r\n        export default {\r\n            data() {\r\n                return {\r\n                    options01: [{\r\n                        label: \"东瓜\"\r\n                    }, {\r\n                        label: \"南瓜\"\r\n                    }, {\r\n                        label: \"西瓜\",\r\n                    }]\r\n                }\r\n            }\r\n        }\r\n    </script>\r\n    ")]),_vm._v("\r\n")])]),_vm._v(" "),_c('li',[_c('div',{staticClass:"components-content"},[_c('h2',{staticClass:"h2"},[_vm._v("Select 下拉菜单（设定宽高）")]),_vm._v(" "),_c('dy-select',{attrs:{"options":_vm.options02,"maxHeight":300,"width":400,"multiple":true},model:{value:(_vm.selectVal02),callback:function ($$v) {_vm.selectVal02=$$v},expression:"selectVal02"}}),_vm._v(" "),_c('div',{staticClass:"subBox dy-select-subBox"},[_vm._v("\r\n        当前选择的是："+_vm._s(_vm.selectVal02)+"\r\n    ")])],1),_vm._v(" "),_vm._m(3),_vm._v(" "),_c('pre',{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[_vm._v("\r\n    "),_c('code',{staticClass:"html"},[_vm._v("\r\n    <template>\r\n\r\n        <dy-select \r\n            :options=\"options02\" \r\n            :maxHeight=\"300\" \r\n            :width=\"400\" \r\n            :multiple=\"true\" \r\n            v-model=\"selectVal02\"\r\n        ></dy-select>\r\n\r\n    </template>\r\n\r\n    <script>\r\n        export default {\r\n            data() {\r\n                return {\r\n                    options02: [{\r\n                        label: \"东瓜\"\r\n                    }, {\r\n                        label: \"南瓜\"\r\n                    }, {\r\n                        label: \"西瓜\",\r\n                    }, {\r\n                        label: \"北瓜\",\r\n                    }, {\r\n                        label: \"中瓜\",\r\n                    }, {\r\n                        label: \"葡萄\",\r\n                    }, {\r\n                        label: \"梨子\",\r\n                    }, {\r\n                        label: \"香蕉\",\r\n                    }, {\r\n                        label: \"苹果\",\r\n                    }, {\r\n                        label: \"地瓜\",\r\n                    }, {\r\n                        label: \"皮瓜\",\r\n                    }],\r\n                    selectVal02: []\r\n                }\r\n            }\r\n        }\r\n    </script>\r\n    ")]),_vm._v("\r\n")])])])])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"components-code"},[_c('div',{staticClass:"code-title"},[_vm._v("示例代码")]),_vm._v(" "),_c('div',{staticClass:"code-tip"},[_c('p',[_vm._v("直接调用 "),_c('code',[_vm._v("dy-select")]),_vm._v(" 组件，然后使用 "),_c('code',[_vm._v(":options")]),_vm._v(" 绑定需要渲染的数据即可")]),_vm._v(" "),_c('br'),_vm._v(" "),_c('p',[_c('code',[_vm._v("v-model")]),_vm._v(" -- 如果需要使用双向绑定，指定绑定的值即可")]),_vm._v(" "),_c('p',[_c('code',[_vm._v(":multiple")]),_vm._v(" -- 是否开启多选模式，默认为单选模式")]),_vm._v(" "),_c('p',[_c('code',[_vm._v(":width")]),_vm._v(" -- 设定下拉按钮和下拉框的长度，默认为 "),_c('code',[_vm._v("200")])]),_vm._v(" "),_c('p',[_c('code',[_vm._v(":maxHeight")]),_vm._v(" -- 设定下拉框的最大高度，默认为 "),_c('code',[_vm._v("300")]),_vm._v("，超出最大高度后出现滚动条 ")]),_vm._v(" "),_c('p',[_c('code',[_vm._v(":width")]),_vm._v(" -- 设定下拉按钮和下拉框的长度，默认为 "),_c('code',[_vm._v("200")])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"components-code"},[_c('div',{staticClass:"code-title"},[_vm._v("示例代码")]),_vm._v(" "),_c('div',{staticClass:"code-tip"},[_c('p',[_vm._v("使用 "),_c('code',[_vm._v("v-model")]),_vm._v(" 双向绑定即可")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"components-code"},[_c('div',{staticClass:"code-title"},[_vm._v("示例代码")]),_vm._v(" "),_c('div',{staticClass:"code-tip"},[_c('p',[_vm._v("指定参数 "),_c('code',[_vm._v(":multiple")]),_vm._v(" 为 "),_c('code',[_vm._v("true")]),_vm._v(" 即可")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"components-code"},[_c('div',{staticClass:"code-title"},[_vm._v("示例代码")]),_vm._v(" "),_c('div',{staticClass:"code-tip"},[_c('p',[_vm._v("可以手动指定下拉组件的宽度和高度，只需要使用 "),_c('code',[_vm._v(":maxHeight")]),_vm._v(" 和 "),_c('code',[_vm._v(":width")]),_vm._v(" 参数即可")]),_vm._v(" "),_c('p',[_vm._v("需要注意，最大高度中包含 "),_c('code',[_vm._v("30")]),_vm._v(" 像素的 "),_c('code',[_vm._v("padding")]),_vm._v(" 距离（长度没有）")]),_vm._v(" "),_c('p',[_vm._v("即设置 "),_c('code',[_vm._v("300")]),_vm._v(" 最大高度，实则为 "),_c('code',[_vm._v("270")]),_vm._v("，目的是为了抵消与外层容器之间的间距，否则会溢出容器")]),_vm._v(" "),_c('br'),_vm._v(" "),_c('p',[_c('code',[_vm._v(":maxHeight")]),_vm._v(" -- 设定下拉框的最大高度，默认为 "),_c('code',[_vm._v("300")]),_vm._v("，超出最大高度后出现滚动条 ")]),_vm._v(" "),_c('p',[_c('code',[_vm._v(":width")]),_vm._v(" -- 设定下拉按钮和下拉框的长度，默认为 "),_c('code',[_vm._v("200")])])])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var components_Select = (esExports);
// CONCATENATED MODULE: ./example/views/components/Select.vue
function injectStyle (ssrContext) {
  __webpack_require__("QLH5")
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
  Select,
  components_Select,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var views_components_Select = __webpack_exports__["default"] = (Component.exports);


/***/ })

});
//# sourceMappingURL=0.5505e93ba960ba8fea05.js.map