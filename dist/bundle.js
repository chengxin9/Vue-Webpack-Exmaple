/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!********************************!*\
  !*** ../vueProject/src/app.js ***!
  \********************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by qingcheng on 16/10/14.
	 */
	var gridComponent = __webpack_require__(/*! ./components/grid.vue */ 1),
	    demo;
	
	Vue.config.debug = true;
	console.log(gridComponent);
	//global register gridComponent
	//Vue.component('grid-component', gridComponent);
	
	demo = new Vue({
	    el: '.container',
	    data: {
	        dataArr: [
	            {name: 'ws', age: 25},
	            {name: '小花', age: 16},
	            {name: '柳叶', age: 20}
	        ]
	    },
	    components: {
	        'grid-component': gridComponent
	    }
	});

/***/ },
/* 1 */
/*!*********************************************!*\
  !*** ../vueProject/src/components/grid.vue ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(/*! !vue-style-loader!css-loader?sourceMap!./../../../test/~/.8.5.4@vue-loader/lib/style-rewriter.js!less!./../../../test/~/.8.5.4@vue-loader/lib/selector.js?type=style&index=0!./grid.vue */ 2)
	__vue_script__ = __webpack_require__(/*! !babel-loader!./../../../test/~/.8.5.4@vue-loader/lib/selector.js?type=script&index=0!./grid.vue */ 6)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] ../vueProject/src/components/grid.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(/*! !vue-html-loader!./../../../test/~/.8.5.4@vue-loader/lib/selector.js?type=template&index=0!./grid.vue */ 7)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-64070a0c/grid.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 2 */
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/.1.0.0@vue-style-loader!./~/.0.23.1@css-loader?sourceMap!./~/.8.5.4@vue-loader/lib/style-rewriter.js!./~/.2.2.3@less-loader!./~/.8.5.4@vue-loader/lib/selector.js?type=style&index=0!../vueProject/src/components/grid.vue ***!
  \**************************************************************************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !./../../../test/~/.0.23.1@css-loader?sourceMap!./../../../test/~/.8.5.4@vue-loader/lib/style-rewriter.js!./../../../test/~/.2.2.3@less-loader!./../../../test/~/.8.5.4@vue-loader/lib/selector.js?type=style&index=0!./grid.vue */ 3);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../../test/~/.1.0.0@vue-style-loader/addStyles.js */ 5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../test/node_modules/.0.23.1@css-loader/index.js?sourceMap!./../../../test/node_modules/.8.5.4@vue-loader/lib/style-rewriter.js!./../../../test/node_modules/.2.2.3@less-loader/index.js!./../../../test/node_modules/.8.5.4@vue-loader/lib/selector.js?type=style&index=0!./grid.vue", function() {
				var newContent = require("!!./../../../test/node_modules/.0.23.1@css-loader/index.js?sourceMap!./../../../test/node_modules/.8.5.4@vue-loader/lib/style-rewriter.js!./../../../test/node_modules/.2.2.3@less-loader/index.js!./../../../test/node_modules/.8.5.4@vue-loader/lib/selector.js?type=style&index=0!./grid.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 3 */
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./~/.0.23.1@css-loader?sourceMap!./~/.8.5.4@vue-loader/lib/style-rewriter.js!./~/.2.2.3@less-loader!./~/.8.5.4@vue-loader/lib/selector.js?type=style&index=0!../vueProject/src/components/grid.vue ***!
  \**********************************************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../../test/~/.0.23.1@css-loader/lib/css-base.js */ 4)();
	// imports
	
	
	// module
	exports.push([module.id, ".px-ui-table {\n  width: 600px;\n  margin: 10px 0;\n  border-collapse: collapse;\n  border: 2px solid #33acfe;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n.px-ui-table .px-ui-tr {\n  background-color: #f9f9f9;\n}\n.px-ui-table .px-ui-td {\n  height: 40px;\n  line-height: 40px;\n  border: 1px solid #fff;\n  text-align: center;\n}\n.px-ui-table .px-ui-tr-selected {\n  border: 1px solid green;\n}\n", "", {"version":3,"sources":["/../vueProject/src/components/grid.vue"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,eAAe;EACf,0BAA0B;EAC1B,0BAA0B;EAC1B,0BAA0B;EAC1B,uBAAuB;EACvB,sBAAsB;EACtB,kBAAkB;CACnB;AACD;EACE,0BAA0B;CAC3B;AACD;EACE,aAAa;EACb,kBAAkB;EAClB,uBAAuB;EACvB,mBAAmB;CACpB;AACD;EACE,wBAAwB;CACzB","file":"grid.vue","sourcesContent":[".px-ui-table {\n  width: 600px;\n  margin: 10px 0;\n  border-collapse: collapse;\n  border: 2px solid #33acfe;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n.px-ui-table .px-ui-tr {\n  background-color: #f9f9f9;\n}\n.px-ui-table .px-ui-td {\n  height: 40px;\n  line-height: 40px;\n  border: 1px solid #fff;\n  text-align: center;\n}\n.px-ui-table .px-ui-tr-selected {\n  border: 1px solid green;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 4 */
/*!**********************************************!*\
  !*** ./~/.0.23.1@css-loader/lib/css-base.js ***!
  \**********************************************/
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 5 */
/*!************************************************!*\
  !*** ./~/.1.0.0@vue-style-loader/addStyles.js ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(true) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if (media) {
			styleElement.setAttribute("media", media);
		}
	
		if (sourceMap) {
			// https://developer.chrome.com/devtools/docs/javascript-debugging
			// this makes source maps inside style tags work properly in Chrome
			css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */';
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}


/***/ },
/* 6 */
/*!*******************************************************************************************************************************!*\
  !*** ./~/.6.2.5@babel-loader!./~/.8.5.4@vue-loader/lib/selector.js?type=script&index=0!../vueProject/src/components/grid.vue ***!
  \*******************************************************************************************************************************/
/***/ function(module, exports) {

	'use strict';
	
	// <style lang="less">
	// 	.px-ui-table{
	// 	    width:600px;
	// 	    margin:10px 0;
	// 		border-collapse:collapse;
	// 		border:2px solid #33acfe;
	// 		-webkit-user-select: none;
	//         -moz-user-select: none;
	//         -ms-user-select: none;
	//         user-select: none;
	// 		.px-ui-tr{
	//             background-color:#f9f9f9;
	//         }
	//         .px-ui-td{
	//             height:40px;
	//             line-height:40px;
	//             border:1px solid #fff;
	//             text-align:center;
	//         }
	//         .px-ui-tr-selected{
	//             border:1px solid green;
	//         }
	// 	}
	// </style>
	//
	// <template>
	// 	<table class="px-ui-table">
	//         <caption></caption>
	//         <tbody>
	//             <tr class="px-ui-tr" v-for="d in tableData" @click="toggle">
	//                 <td class="px-ui-td" v-text="d.name"></td><td class="px-ui-td" v-text="d.age"></td>
	//                 <td class="delete-btn" v-on:click="removeItem(d, $event)"></td>
	//             </tr>
	//         </tbody>
	//     </table>
	// </template>
	//
	// <script>
	module.exports = {
	    props: {
	        tableData: Array
	    },
	    created: function created() {
	        console.log(this.tableData);
	    },
	    methods: {
	        removeItem: function removeItem(item) {
	            console.log(this.tableData);
	            console.log('======');
	            console.log(item);
	            this.tableData.$remove(item);
	        },
	        toggle: function toggle() {}
	    }
	};
	// </script>
	/* generated by vue-loader */

/***/ },
/* 7 */
/*!************************************************************************************************************************************!*\
  !*** ./~/.1.2.3@vue-html-loader!./~/.8.5.4@vue-loader/lib/selector.js?type=template&index=0!../vueProject/src/components/grid.vue ***!
  \************************************************************************************************************************************/
/***/ function(module, exports) {

	module.exports = "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\t<table class=\"px-ui-table\">\n        <caption></caption>\n        <tbody>\n            <tr class=\"px-ui-tr\" v-for=\"d in tableData\" @click=\"toggle\">\n                <td class=\"px-ui-td\" v-text=\"d.name\"></td><td class=\"px-ui-td\" v-text=\"d.age\"></td>\n                <td class=\"delete-btn\" v-on:click=\"removeItem(d, $event)\"></td>\n            </tr>\n        </tbody>\n    </table>\n";

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map