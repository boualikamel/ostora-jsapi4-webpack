(function(){
(this||window)["webpackJsonp"].registerAbsMids({
	// "./example.html" = "./src/app/widgets/example/example.html"
	// "../../app/widgets/example/example" = "./src/app/widgets/example/example.js"
	// "./nls/local" = "./src/app/widgets/example/nls/local.js"
})
})(),(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[81],{

/***/ "./src/app/widgets/example/example.html":
/*!**********************************************!*\
  !*** ./src/app/widgets/example/example.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<div class=container> <form class=\\\"\\\" id=formID> <div class=form-group> ${i18n.simpleExample} </div> <div class=form-group> <input type=text class=form-control placeholder=\\\" ${i18n.simpleExample}\\\"> </div> <div class=form-group> <select class=form-control> <option value=item1>item 1</option> <option value=item2>item 2</option> <option value=item3>item 3</option> </select> </div> <div class=form-group> <div class=input-group> <div class=input-group-prepend> <span class=input-group-text>$</span> </div> <input type=text class=form-control> </div> </div> <div class=form-group> <div class=input-group> <input type=text class=form-control> <div class=input-group-append> <span class=input-group-text> <i class=\\\"fa fa-globe\\\" aria-hidden=true></i> </span> </div> </div> </div> <hr> <div class=form-group> <a name=\\\"\\\" id=a-submit class=\\\"btn btn-outline-warning\\\" href=# role=button>${i18n.submit}</a> <a name=\\\"\\\" class=\\\"btn btn-outline-secondary\\\" href=# role=button>${i18n.cancel}</a> </div> </form> </div>\";\n\n//# sourceURL=webpack:///./src/app/widgets/example/example.html?");

/***/ }),

/***/ "./src/app/widgets/example/example.js":
/*!********************************************!*\
  !*** ./src/app/widgets/example/example.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! dojo/_base/declare */ \"./node_modules/dojo/_base/declare.js\"), __webpack_require__(/*! dijit/_WidgetBase */ \"./node_modules/dijit/_WidgetBase.js\"), __webpack_require__(/*! dijit/_TemplatedMixin */ \"./node_modules/dijit/_TemplatedMixin.js\"), __webpack_require__(/*! ./example.html */ \"./src/app/widgets/example/example.html\"), __webpack_require__(/*! ./nls/local */ \"./src/app/widgets/example/nls/local.js\")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (declare, _WidgetBase, _TemplatedMixin, template, i18n) {\n  return declare([_WidgetBase, _TemplatedMixin], {\n    templateString: template,\n    i18n: i18n.root,\n    startup: function startup() {\n      this.inherited(arguments);\n    }\n  });\n}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\n//# sourceURL=webpack:///./src/app/widgets/example/example.js?");

/***/ }),

/***/ "./src/app/widgets/example/nls/local.js":
/*!**********************************************!*\
  !*** ./src/app/widgets/example/nls/local.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("!(module.exports = {\n  root: {\n    simpleExample: \"Simple exemple\",\n    submit: \"Valider\",\n    cancel: \"Annuler\",\n    requiredMessage: \"Ce champ est obligatoire\",\n    validNumber: \"Veuillez, entrer un nombre valide\",\n    maxValue: \"Veuillez entrer au plus 2 caractères\"\n  },\n  \"ar\": true\n});\n\n//# sourceURL=webpack:///./src/app/widgets/example/nls/local.js?");

/***/ })

}]);