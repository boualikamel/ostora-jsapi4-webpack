(function(){
(this||window)["webpackJsonp"].registerAbsMids({
	// "./draw.html" = "./src/app/widgets/draw/draw.html"
	// "../../app/widgets/draw/draw" = "./src/app/widgets/draw/draw.js"
	// "./nls/local" = "./src/app/widgets/draw/nls/local.js"
})
})(),(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[80],{

/***/ "./src/app/widgets/draw/draw.html":
/*!****************************************!*\
  !*** ./src/app/widgets/draw/draw.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<div class=container> <div class=form-group> <p> ${i18n.drawTitle} </p> </div> <div class=form-group> <a id=btn_add_point data-dojo-attach-point=btn_add_point class=\\\"btn btn-outline-secondary\\\" href=#> <i class=esri-icon-map-pin></i> </a> <a data-dojo-attach-point=btn_add_polyline class=\\\"btn btn-outline-secondary\\\" href=#> <i class=esri-icon-polyline></i> </a> <a data-dojo-attach-point=btn_add_polygon class=\\\"btn btn-outline-secondary\\\" href=#> <i class=esri-icon-polygon></i> </a> <a data-dojo-attach-point=btn_add_circle class=\\\"btn btn-outline-secondary\\\" href=#> <i class=esri-icon-radio-unchecked></i> </a> <a data-dojo-attach-point=btn_add_rectangle class=\\\"btn btn-outline-secondary\\\" href=#> <i class=esri-icon-checkbox-unchecked></i> </a> <a data-dojo-attach-point=btn_remove_all class=\\\"btn btn-outline-secondary\\\" href=#> <i class=esri-icon-trash></i> </a> </div> </div>\";\n\n//# sourceURL=webpack:///./src/app/widgets/draw/draw.html?");

/***/ }),

/***/ "./src/app/widgets/draw/draw.js":
/*!**************************************!*\
  !*** ./src/app/widgets/draw/draw.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function($) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! dojo/_base/declare */ \"./node_modules/dojo/_base/declare.js\"), __webpack_require__(/*! dijit/_WidgetBase */ \"./node_modules/dijit/_WidgetBase.js\"), __webpack_require__(/*! dijit/_TemplatedMixin */ \"./node_modules/dijit/_TemplatedMixin.js\"), __webpack_require__(/*! ./draw.html */ \"./src/app/widgets/draw/draw.html\"), __webpack_require__(/*! ./nls/local */ \"./src/app/widgets/draw/nls/local.js\"), __webpack_require__(/*! esri/widgets/Sketch/SketchViewModel */ \"./node_modules/arcgis-js-api/widgets/Sketch/SketchViewModel.js\"), __webpack_require__(/*! esri/layers/GraphicsLayer */ \"./node_modules/arcgis-js-api/layers/GraphicsLayer.js\")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (declare, _WidgetBase, _TemplatedMixin, template, i18n, SketchViewModel, GraphicsLayer) {\n  var graphicsLayer = new GraphicsLayer({\n    title: \"Graphics\"\n  }),\n      sketchViewModel;\n  return declare([_WidgetBase, _TemplatedMixin], {\n    templateString: template,\n    i18n: i18n.root,\n    startup: function startup() {\n      var _this = this;\n\n      this.inherited(arguments);\n      this.mapView.map.add(graphicsLayer);\n      sketchViewModel = new SketchViewModel({\n        view: this.mapView,\n        layer: graphicsLayer\n      });\n      $(this.btn_add_point).click(function (e) {\n        e.preventDefault();\n\n        _this.createSketch('point');\n      });\n      $(this.btn_add_polyline).click(function (e) {\n        e.preventDefault();\n\n        _this.createSketch('polyline');\n      });\n      $(this.btn_add_polygon).click(function (e) {\n        e.preventDefault();\n\n        _this.createSketch('polygon');\n      });\n      $(this.btn_add_circle).click(function (e) {\n        e.preventDefault();\n\n        _this.createSketch('circle');\n      });\n      $(this.btn_add_rectangle).click(function (e) {\n        e.preventDefault();\n\n        _this.createSketch('rectangle');\n      });\n      $(this.btn_remove_all).click(function (e) {\n        graphicsLayer.removeAll();\n      });\n    },\n    createSketch: function createSketch(tool) {\n      sketchViewModel.create(tool);\n      sketchViewModel.on(\"create\", function (event) {\n        if (event.state === \"complete\") {\n          graphicsLayer.add(event.graphic);\n        }\n      });\n    }\n  });\n}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n/* WEBPACK VAR INJECTION */}.call(this, require(\"jquery\")))\n\n//# sourceURL=webpack:///./src/app/widgets/draw/draw.js?");

/***/ }),

/***/ "./src/app/widgets/draw/nls/local.js":
/*!*******************************************!*\
  !*** ./src/app/widgets/draw/nls/local.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("!(module.exports = {\n  root: {\n    drawTitle: \"Draw Example\"\n  },\n  \"ar\": true\n});\n\n//# sourceURL=webpack:///./src/app/widgets/draw/nls/local.js?");

/***/ })

}]);