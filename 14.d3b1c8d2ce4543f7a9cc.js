(function(){(this||window).webpackJsonp.registerAbsMids({"esri/layers/PointCloudLayer":1583,"esri/renderers/PointCloudRenderer":1666,"esri/renderers/support/pointCloud/PointSizeAlgorithm":1685,"esri/layers/mixins/SceneService":1691,"esri/renderers/support/pointCloud/PointSizeFixedSizeAlgorithm":1718,"esri/renderers/support/pointCloud/PointSizeSplatAlgorithm":1719,"esri/renderers/PointCloudClassBreaksRenderer":1754,"esri/renderers/PointCloudStretchRenderer":1755,"esri/renderers/PointCloudUniqueValueRenderer":1756,"esri/layers/pointCloudFilters/PointCloudFilter":1772,"esri/renderers/support/pointCloud/ColorModulation":1804,"esri/renderers/support/pointCloud/pointSizeAlgorithmJSONUtils":1805,"esri/renderers/support/pointCloud/pointSizeAlgorithmTypeUtils":1806,"esri/renderers/support/pointCloud/ColorClassBreakInfo":1807,"esri/renderers/support/pointCloud/StopInfo":1808,"esri/renderers/support/pointCloud/ColorUniqueValueInfo":1809,"esri/layers/pointCloudFilters/PointCloudBitfieldFilter":1925,"esri/layers/pointCloudFilters/PointCloudReturnFilter":1926,"esri/layers/pointCloudFilters/PointCloudValueFilter":1927,"esri/renderers/PointCloudRGBRenderer":1928,"esri/layers/pointCloudFilters/jsonUtils":2607,"esri/layers/pointCloudFilters/typeUtils":2608,"esri/renderers/support/pointCloud/jsonUtils":2609,"esri/renderers/support/pointCloud/typeUtils":2610})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{1583:function(e,t,r){var o,n;o=[r.dj.c(e.i),t,r(5),r(1),r(0),r(9),r(10),r(105),r(29),r(49),r(6),r(8),r(3),r(12),r(120),r(60),r(22),r(2),r(100),r(159),r(124),r(122),r(155),r(1691),r(2607),r(2608),r(101),r(205),r(518),r(488),r(537),r(2609),r(2610),r(509)],void 0===(n=function(e,t,r,o,n,s,i,l,a,p,u,d,c,y,f,v,h,m,b,g,S,w,j,x,C,I,T,P,R,N,O,F,V,_){function z(e,t,r){return e&&((e=F.read(e,t,r)||void 0)||A.error("Failed to create renderer",{rendererDefinition:e,layer:this,context:r})),e}var M,A=c.getLogger("esri.layers.PointCloudLayer"),q=R.defineFieldProperties();return M=m.declared(j.ScaleRangeLayer(x.SceneService(g.ArcGISService(S.OperationalLayer(w.PortalLayer(f.MultiOriginJSONMixin(b))))))),o(B,M),B.prototype.normalizeCtorArgs=function(e,t){return"string"==typeof e?r({url:e},t):e},Object.defineProperty(B.prototype,"defaultPopupTemplate",{get:function(){return this.attributeStorageInfo?this.createPopupTemplate():null},enumerable:!0,configurable:!0}),Object.defineProperty(B.prototype,"fieldsIndex",{get:function(){return new N(this.fields)},enumerable:!0,configurable:!0}),B.prototype.getFieldDomain=function(e){var t=this.fieldsIndex.get(e);return t&&t.domain?t.domain:null},B.prototype.readServiceFields=function(e,t,r){return Array.isArray(e)?e.map(function(e){var t=new P;return"FieldTypeInteger"===e.type&&((e=d.clone(e)).type="esriFieldTypeInteger"),t.read(e,r),t}):Array.isArray(t.attributeStorageInfo)?t.attributeStorageInfo.map(function(e){return new P({name:e.name,type:"ELEVATION"===e.name?"double":"integer"})}):null},Object.defineProperty(B.prototype,"elevationInfo",{set:function(e){this._set("elevationInfo",e),this._validateElevationInfo()},enumerable:!0,configurable:!0}),B.prototype.writeRenderer=function(e,t,r,o){v.setDeepValue("layerDefinition.drawingInfo.renderer",e.write(null,o),t)},B.prototype.load=function(e){var t=this,r=y.isSome(e)?e.signal:null,o=this.loadFromPortal({supportedTypes:["Scene Service"]},e).then(function(){return t._fetchService(r)},function(){return t._fetchService(r)});return this.addResolvingPromise(o),this.when()},B.prototype.createPopupTemplate=function(e){var t=_.createPopupTemplate(this,e);return this.formatPopupTemplateReturnsField(t),this.formatPopupTemplateRGBField(t),t},B.prototype.formatPopupTemplateReturnsField=function(e){var t=this.fieldsIndex.get("RETURNS");if(t){var r=p.find(e.fieldInfos,function(e){return e.fieldName===t.name});if(r){var o=new O({name:"pcl-returns-decoded",title:t.alias||t.name,expression:"\n        var returnValue = $feature."+t.name+';\n        return (returnValue % 16) + " / " + Floor(returnValue / 16);\n      '});e.expressionInfos=(e.expressionInfos||[]).concat([o]),r.fieldName="expression/pcl-returns-decoded"}}},B.prototype.formatPopupTemplateRGBField=function(e){var t=this.fieldsIndex.get("RGB");if(t){var r=p.find(e.fieldInfos,function(e){return e.fieldName===t.name});if(r){var o=new O({name:"pcl-rgb-decoded",title:t.alias||t.name,expression:"\n        var rgb = $feature."+t.name+';\n        var red = Floor(rgb / 65536, 0);\n        var green = Floor((rgb - (red * 65536)) / 256,0);\n        var blue = rgb - (red * 65536) - (green * 256);\n\n        return "rgb(" + red + "," + green + "," + blue + ")";\n      '});e.expressionInfos=(e.expressionInfos||[]).concat([o]),r.fieldName="expression/pcl-rgb-decoded"}}},B.prototype.queryCachedStatistics=function(l,p){return i(this,void 0,void 0,function(){var t,r,o,n,i;return s(this,function(e){switch(e.label){case 0:return[4,this.load(p)];case 1:if(e.sent(),!this.attributeStorageInfo)throw new u("scenelayer:no-cached-statistics","Cached statistics are not available for this layer");if(!(t=this.fieldsIndex.get(l)))throw new u("pointcloudlayer:field-unexisting","Field '"+l+"' does not exist on the layer");for(r=0,o=this.attributeStorageInfo;r<o.length;r++)if((n=o[r]).name===t.name)return i=h.join(this.parsedUrl.path,"./statistics/"+n.key),[2,a(i,{query:{f:"json"},responseType:"json",signal:p?p.signal:null}).then(function(e){return e.data})];throw new u("pointcloudlayer:no-cached-statistics","Cached statistics for this attribute are not available")}})})},B.prototype.validateLayer=function(e){if(e.layerType&&"PointCloud"!==e.layerType)throw new u("pointcloudlayer:layer-type-not-supported","PointCloudLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new u("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x-2.x"});if(2<this.version.major)throw new u("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x-2.x"})},B.prototype.hasCachedStatistics=function(t){return null!=this.attributeStorageInfo&&this.attributeStorageInfo.some(function(e){return e.name===t})},B.prototype._validateElevationInfo=function(){var e=this.elevationInfo;e&&("absolute-height"!==e.mode&&A.warn(".elevationInfo=","Point cloud layers only support absolute-height elevation mode"),e.featureExpressionInfo&&"0"!==e.featureExpressionInfo.expression&&A.warn(".elevationInfo=","Point cloud layers do not support featureExpressionInfo"))},n([m.property({type:["PointCloudLayer"]})],B.prototype,"operationalLayerType",void 0),n([m.property(T.popupEnabled)],B.prototype,"popupEnabled",void 0),n([m.property({type:l,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],B.prototype,"popupTemplate",void 0),n([m.property({readOnly:!0,json:{read:!1},dependsOn:["fields","title","attributeStorageInfo"]})],B.prototype,"defaultPopupTemplate",null),n([m.property({readOnly:!0,json:{write:!1,read:!1,origins:{"web-document":{write:!1,read:!1}}}})],B.prototype,"opacity",void 0),n([m.property({type:["show","hide"]})],B.prototype,"listMode",void 0),n([m.property({types:[I.types],json:{origins:{service:{read:{source:"filters",reader:C.read}}},read:{source:"layerDefinition.filters",reader:C.read},write:{target:"layerDefinition.filters",writer:C.write}}})],B.prototype,"filters",void 0),n([m.property({type:[P]})],B.prototype,"fields",void 0),n([m.property({readOnly:!0,dependsOn:["fields"]})],B.prototype,"fieldsIndex",null),n([m.reader("service","fields",["fields","attributeStorageInfo"])],B.prototype,"readServiceFields",null),n([m.property(q.outFields)],B.prototype,"outFields",void 0),n([m.property({readOnly:!0})],B.prototype,"attributeStorageInfo",void 0),n([m.property(T.elevationInfo)],B.prototype,"elevationInfo",null),n([m.property({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],B.prototype,"path",void 0),n([m.property(T.legendEnabled)],B.prototype,"legendEnabled",void 0),n([m.property({types:V.types,json:{origins:{service:{read:{source:"drawingInfo.renderer",reader:z}}},read:{source:"layerDefinition.drawingInfo.renderer",reader:z},write:{target:{"layerDefinition.drawingInfo.renderer":{types:V.types},"layerDefinition.drawingInfo.transparency":{type:Number}}}}})],B.prototype,"renderer",void 0),n([m.writer("renderer")],B.prototype,"writeRenderer",null),n([m.property({json:{read:!1},readOnly:!0})],B.prototype,"type",void 0),n([m.subclass("esri.layers.PointCloudLayer")],B);function B(e,t){var r=M.call(this,e)||this;return r.operationalLayerType="PointCloudLayer",r.popupEnabled=!0,r.popupTemplate=null,r.opacity=1,r.filters=[],r.fields=null,r.outFields=null,r.path=null,r.legendEnabled=!0,r.renderer=null,r.type="point-cloud",r}}.apply(null,o))||(e.exports=n)},1666:function(e,t,r){var o,n;o=[r.dj.c(e.i),t,r(1),r(0),r(17),r(7),r(8),r(2),r(1804),r(1805),r(1806)],void 0===(n=function(e,t,r,o,n,i,l,p,s,a,u){var d,c=n.strict()({pointCloudClassBreaksRenderer:"point-cloud-class-breaks",pointCloudRGBRenderer:"point-cloud-rgb",pointCloudStretchRenderer:"point-cloud-stretch",pointCloudUniqueValueRenderer:"point-cloud-unique-value"}),y=(d=p.declared(i.JSONSupport),r(f,d),f.prototype.clone=function(){return console.warn(".clone() is not implemented for "+this.declaredClass),null},f.prototype.cloneProperties=function(){return{pointSizeAlgorithm:l.clone(this.pointSizeAlgorithm),colorModulation:l.clone(this.colorModulation),pointsPerInch:l.clone(this.pointsPerInch)}},o([p.property({type:c.apiValues,readOnly:!0,nonNullable:!0,json:{type:c.jsonValues,read:!1,write:c.write}})],f.prototype,"type",void 0),o([p.property({types:u.pointSizeAlgorithmTypes,json:{read:a.read,write:!0}})],f.prototype,"pointSizeAlgorithm",void 0),o([p.property({type:s.default,json:{write:!0}})],f.prototype,"colorModulation",void 0),o([p.property({json:{write:!0},nonNullable:!0,type:Number})],f.prototype,"pointsPerInch",void 0),o([p.subclass("esri.renderers.PointCloudRenderer")],f));function f(e){var t=d.call(this,e)||this;return t.type=void 0,t.pointSizeAlgorithm=null,t.colorModulation=null,t.pointsPerInch=10,t}return(y||(y={})).fieldTransformTypeKebabDict=new n.JSONMap({none:"none",lowFourBit:"low-four-bit",highFourBit:"high-four-bit",absoluteValue:"absolute-value",moduloTen:"modulo-ten"}),y}.apply(null,o))||(e.exports=n)},1685:function(e,t,r){var o,n;o=[r.dj.c(e.i),t,r(1),r(0),r(17),r(7),r(2)],void 0===(n=function(e,t,r,o,n,i,l){Object.defineProperty(t,"__esModule",{value:!0}),t.typeKebabDictionary=new n.default({pointCloudFixedSizeAlgorithm:"fixed-size",pointCloudSplatAlgorithm:"splat"});var p,s=(p=l.declared(i.JSONSupport),r(a,p),o([l.property({type:t.typeKebabDictionary.apiValues,readOnly:!0,nonNullable:!0,json:{type:t.typeKebabDictionary.jsonValues,read:!1,write:t.typeKebabDictionary.write}})],a.prototype,"type",void 0),o([l.subclass("esri.renderers.support.pointCloud.PointSizeAlgorithm")],a));function a(){return null!==p&&p.apply(this,arguments)||this}t.PointSizeAlgorithm=s,t.default=s}.apply(null,o))||(e.exports=n)},1691:function(e,t,r){var o,n;o=[r.dj.c(e.i),t,r(1),r(0),r(9),r(10),r(29),r(6),r(3),r(4),r(22),r(2),r(37),r(164),r(31),r(126),r(101)],void 0===(n=function(e,t,o,n,l,p,i,s,r,a,u,d,c,y,f,v,h){Object.defineProperty(t,"__esModule",{value:!0});var m=r.getLogger("esri.layers.mixins.SceneService");t.SceneService=function(e){return r=d.declared(e),o(t,r),t.prototype.readSpatialReference=function(e,t){return this._readSpatialReference(t)},t.prototype._readSpatialReference=function(e){if(null!=e.spatialReference)return f.fromJSON(e.spatialReference);var t=e.store,r=t.indexCRS||t.geographicCRS,o=r&&parseInt(r.substring(r.lastIndexOf("/")+1,r.length),10);return null!=o?new f(o):null},t.prototype.readFullExtent=function(e,t){var r=t.store,o=this._readSpatialReference(t);return null==o||null==r||null==r.extent||!Array.isArray(r.extent)||r.extent.some(function(e){return e<b})?null:new c({xmin:r.extent[0],ymin:r.extent[1],xmax:r.extent[2],ymax:r.extent[3],spatialReference:o})},t.prototype.readVersion=function(e,t){var r=t.store,o=null!=r.version?r.version.toString():"",n={major:Number.NaN,minor:Number.NaN,versionString:o},i=o.split(".");return 2<=i.length&&(n.major=parseInt(i[0],10),n.minor=parseInt(i[1],10)),n},t.prototype.readTitlePortalItem=function(e){return"item-title"!==this.sublayerTitleMode?void 0:e},t.prototype.readTitleService=function(e,t){var r=this.portalItem&&this.portalItem.title;if("item-title"===this.sublayerTitleMode)return v.titleFromUrlAndName(this.url,t.name);var o=t.name||v.parse(this.url).title;return"item-title-and-service-name"===this.sublayerTitleMode&&r&&(o=r+" - "+o),v.cleanTitle(o)},t.prototype.readLayerId=function(e,t){return t.id},Object.defineProperty(t.prototype,"url",{set:function(e){var t=v.sanitizeUrlWithLayerId(this,e,m);this._set("url",t.url),null!=t.layerId&&this._set("layerId",t.layerId)},enumerable:!0,configurable:!0}),t.prototype.writeUrl=function(e,t,r,o){v.writeUrlWithLayerId(this,e,"layers",t,o)},Object.defineProperty(t.prototype,"parsedUrl",{get:function(){var e=this._get("url");if(!e)return null;var t=u.urlToObject(e);return null!=this.layerId&&v.isArcGISUrl(t.path)&&(t.path=t.path+"/layers/"+this.layerId),t},enumerable:!0,configurable:!0}),t.prototype._verifyRootNodeAndUpdateExtent=function(n,i){return p(this,void 0,void 0,function(){var t,r,o;return l(this,function(e){switch(e.label){case 0:if(!n)return[3,4];e.label=1;case 1:return e.trys.push([1,3,,4]),t=this._updateExtentFromRootPage,r=[n],[4,this._fetchRootPage(n,i)];case 2:return[2,t.apply(this,r.concat([e.sent()]))];case 3:return e.sent(),[3,4];case 4:return o=this._updateExtentFromRootNode,[4,this._fetchRootNode(i)];case 5:return[2,o.apply(this,[e.sent()])]}})})},t.prototype._fetchRootPage=function(o,n){return p(this,void 0,void 0,function(){var t,r;return l(this,function(e){switch(e.label){case 0:return o?(t=Math.floor(o.rootIndex/o.nodesPerPage),r=this.parsedUrl.path+"/nodepages/"+t,[4,i(r,{responseType:"json",signal:n})]):[2,a.reject()];case 1:return[2,e.sent().data]}})})},t.prototype._updateExtentFromRootPage=function(e,t){if(null==t||null==t.nodes)throw new s("sceneservice:invalid-node-page","Inavlid node page.");var r=t.nodes[e.rootIndex%e.nodesPerPage];if(null==r||null==r.obb||null==r.obb.center||null==r.obb.halfSize)throw new s("sceneservice:invalid-node-page","Inavlid node page.");var o=r.obb.halfSize,n=r.obb.center[2],i=Math.sqrt(o[0]*o[0]+o[1]*o[1]+o[2]*o[2]);this.fullExtent.zmin=n-i,this.fullExtent.zmax=n+i},t.prototype._updateExtentFromRootNode=function(e){if(null!=this.fullExtent&&!this.fullExtent.hasZ&&null!=e&&Array.isArray(e.mbs)&&4===e.mbs.length){var t=e.mbs[2],r=e.mbs[3];this.fullExtent.zmin=t-r,this.fullExtent.zmax=t+r}},t.prototype._fetchRootNode=function(o){return p(this,void 0,void 0,function(){var t,r;return l(this,function(e){switch(e.label){case 0:if(!this.rootNode)return[2];t=u.join(this.parsedUrl.path,this.rootNode),e.label=1;case 1:return e.trys.push([1,3,,4]),[4,i(t,{query:{f:"json"},responseType:"json",signal:o})];case 2:return[2,e.sent().data];case 3:throw r=e.sent(),new s("sceneservice:root-node-missing","Root node missing.",{error:r,url:t});case 4:return[2]}})})},t.prototype._fetchService=function(r){return p(this,void 0,void 0,function(){var t;return l(this,function(e){switch(e.label){case 0:return null==this.layerId&&/SceneServer\/*$/i.test(this.url)?[4,this._fetchFirstLayerId(r)]:[3,2];case 1:null!=(t=e.sent())&&(this.layerId=t),e.label=2;case 2:return[2,this._fetchServiceLayer(r)]}})})},t.prototype._fetchFirstLayerId=function(r){return p(this,void 0,void 0,function(){var t;return l(this,function(e){switch(e.label){case 0:return[4,i(this.url,{query:{f:"json"},responseType:"json",signal:r})];case 1:return(t=e.sent()).data&&Array.isArray(t.data.layers)&&0<t.data.layers.length?[2,t.data.layers[0].id]:[2,void 0]}})})},t.prototype._fetchServiceLayer=function(o){return p(this,void 0,void 0,function(){var t,r;return l(this,function(e){switch(e.label){case 0:return[4,i(this.parsedUrl.path,{query:{f:"json"},responseType:"json",signal:o})];case 1:return(t=e.sent()).ssl&&(this.url=this.url.replace(/^http:/i,"https:")),r=t.data,this.read(r,{origin:"service",url:this.parsedUrl}),this.validateLayer(r),[2]}})})},t.prototype.validateLayer=function(e){},n([d.shared({id:{json:{origins:{service:{read:!1},"portal-item":{read:!1}}}}})],t.prototype,"properties",void 0),n([d.property({type:f})],t.prototype,"spatialReference",void 0),n([d.reader("spatialReference",["spatialReference","store.indexCRS","store.geographicCRS"])],t.prototype,"readSpatialReference",null),n([d.property({type:c})],t.prototype,"fullExtent",void 0),n([d.reader("fullExtent",["store.extent","spatialReference","store.indexCRS","store.geographicCRS"])],t.prototype,"readFullExtent",null),n([d.property({readOnly:!0,type:y})],t.prototype,"heightModelInfo",void 0),n([d.property({type:Number,json:{read:{source:"layerDefinition.minScale"},write:{target:"layerDefinition.minScale"},origins:{service:{read:{source:"minScale"},write:!1}}}})],t.prototype,"minScale",void 0),n([d.property({type:Number,json:{read:{source:"layerDefinition.maxScale"},write:{target:"layerDefinition.maxScale"},origins:{service:{read:{source:"maxScale"},write:!1}}}})],t.prototype,"maxScale",void 0),n([d.property({readOnly:!0})],t.prototype,"version",void 0),n([d.reader("version",["store.version"])],t.prototype,"readVersion",null),n([d.property({type:String,json:{read:{source:"copyrightText"}}})],t.prototype,"copyright",void 0),n([d.property({type:String,json:{read:!1}})],t.prototype,"sublayerTitleMode",void 0),n([d.property({type:String})],t.prototype,"title",void 0),n([d.reader("portal-item","title")],t.prototype,"readTitlePortalItem",null),n([d.reader("service","title",["name"])],t.prototype,"readTitleService",null),n([d.property({type:Number})],t.prototype,"layerId",void 0),n([d.reader("service","layerId",["id"])],t.prototype,"readLayerId",null),n([d.property(h.url)],t.prototype,"url",null),n([d.writer("url")],t.prototype,"writeUrl",null),n([d.property({dependsOn:["layerId"]})],t.prototype,"parsedUrl",null),n([d.property({readOnly:!0})],t.prototype,"store",void 0),n([d.property({type:String,readOnly:!0,json:{read:{source:"store.rootNode"}}})],t.prototype,"rootNode",void 0),n([d.subclass("esri.layers.mixins.SceneService")],t);function t(){var e=null!==r&&r.apply(this,arguments)||this;return e.blendMode=null,e.spatialReference=null,e.fullExtent=null,e.heightModelInfo=null,e.minScale=0,e.maxScale=0,e.version={major:Number.NaN,minor:Number.NaN,versionString:""},e.copyright=null,e.sublayerTitleMode="item-title",e.title=null,e.layerId=null,e}var r};var b=-1e38}.apply(null,o))||(e.exports=n)},1718:function(e,t,r){var o,n;o=[r.dj.c(e.i),t,r(1),r(0),r(2),r(1685)],void 0===(n=function(e,t,r,o,n,i){Object.defineProperty(t,"__esModule",{value:!0});var l,p,s=(l=n.declared(i.default),r(a,l),(p=a).prototype.clone=function(){return new p({size:this.size,useRealWorldSymbolSizes:this.useRealWorldSymbolSizes})},o([n.enumeration.serializable()({pointCloudFixedSizeAlgorithm:"fixed-size"})],a.prototype,"type",void 0),o([n.property({type:Number,nonNullable:!0,json:{write:!0}})],a.prototype,"size",void 0),o([n.property({type:Boolean,json:{write:!0}})],a.prototype,"useRealWorldSymbolSizes",void 0),p=o([n.subclass("esri.renderers.support.pointCloud.PointSizeFixedSizeAlgorithm")],a));function a(){var e=null!==l&&l.apply(this,arguments)||this;return e.type="fixed-size",e.size=0,e.useRealWorldSymbolSizes=null,e}t.PointSizeFixedSizeAlgorithm=s,t.default=s}.apply(null,o))||(e.exports=n)},1719:function(e,t,r){var o,n;o=[r.dj.c(e.i),t,r(1),r(0),r(2),r(1685)],void 0===(n=function(e,t,r,o,n,i){Object.defineProperty(t,"__esModule",{value:!0});var l,p,s=(l=n.declared(i.default),r(a,l),(p=a).prototype.clone=function(){return new p({scaleFactor:this.scaleFactor})},o([n.enumeration.serializable()({pointCloudSplatAlgorithm:"splat"})],a.prototype,"type",void 0),o([n.property({type:Number,value:1,nonNullable:!0,json:{write:!0}})],a.prototype,"scaleFactor",void 0),p=o([n.subclass("esri.renderers.support.pointCloud.PointSizeSplatAlgorithm")],a));function a(){var e=null!==l&&l.apply(this,arguments)||this;return e.type="splat",e.scaleFactor=1,e}t.PointSizeSplatAlgorithm=s,t.default=s}.apply(null,o))||(e.exports=n)},1754:function(e,t,r){var o,n;o=[r.dj.c(e.i),t,r(5),r(1),r(0),r(8),r(2),r(1666),r(215),r(1807)],void 0===(n=function(e,t,r,o,n,i,l,p,s,a){return d=l.declared(p),o(u,d),(c=u).prototype.clone=function(){return new c(r({},this.cloneProperties(),{field:this.field,fieldTransformType:this.fieldTransformType,colorClassBreakInfos:i.clone(this.colorClassBreakInfos),legendOptions:i.clone(this.legendOptions)}))},n([l.enumeration.serializable()({pointCloudClassBreaksRenderer:"point-cloud-class-breaks"})],u.prototype,"type",void 0),n([l.property({json:{write:!0},type:String})],u.prototype,"field",void 0),n([l.property({type:s.default,json:{write:!0}})],u.prototype,"legendOptions",void 0),n([l.property({type:p.fieldTransformTypeKebabDict.apiValues,json:{type:p.fieldTransformTypeKebabDict.jsonValues,read:p.fieldTransformTypeKebabDict.read,write:p.fieldTransformTypeKebabDict.write}})],u.prototype,"fieldTransformType",void 0),n([l.property({type:[a.default],json:{write:!0}})],u.prototype,"colorClassBreakInfos",void 0),c=n([l.subclass("esri.renderers.PointCloudClassBreaksRenderer")],u);function u(e){var t=d.call(this,e)||this;return t.type="point-cloud-class-breaks",t.field=null,t.legendOptions=null,t.fieldTransformType=null,t.colorClassBreakInfos=null,t}var d,c}.apply(null,o))||(e.exports=n)},1755:function(e,t,r){var o,n;o=[r.dj.c(e.i),t,r(5),r(1),r(0),r(8),r(2),r(1666),r(215),r(1808)],void 0===(n=function(e,t,r,o,n,i,l,p,s,a){return d=l.declared(p),o(u,d),(c=u).prototype.clone=function(){return new c(r({},this.cloneProperties(),{field:i.clone(this.field),fieldTransformType:i.clone(this.fieldTransformType),stops:i.clone(this.stops),legendOptions:i.clone(this.legendOptions)}))},n([l.enumeration.serializable()({pointCloudStretchRenderer:"point-cloud-stretch"})],u.prototype,"type",void 0),n([l.property({json:{write:!0},type:String})],u.prototype,"field",void 0),n([l.property({type:s.default,json:{write:!0}})],u.prototype,"legendOptions",void 0),n([l.property({type:p.fieldTransformTypeKebabDict.apiValues,json:{type:p.fieldTransformTypeKebabDict.jsonValues,read:p.fieldTransformTypeKebabDict.read,write:p.fieldTransformTypeKebabDict.write}})],u.prototype,"fieldTransformType",void 0),n([l.property({type:[a.default],json:{write:!0}})],u.prototype,"stops",void 0),c=n([l.subclass("esri.renderers.PointCloudStretchRenderer")],u);function u(e){var t=d.call(this,e)||this;return t.type="point-cloud-stretch",t.field=null,t.legendOptions=null,t.fieldTransformType=null,t.stops=null,t}var d,c}.apply(null,o))||(e.exports=n)},1756:function(e,t,r){var o,n;o=[r.dj.c(e.i),t,r(5),r(1),r(0),r(8),r(2),r(1666),r(215),r(1809)],void 0===(n=function(e,t,r,o,n,i,l,p,s,a){return d=l.declared(p),o(u,d),(c=u).prototype.clone=function(){return new c(r({},this.cloneProperties(),{field:i.clone(this.field),fieldTransformType:i.clone(this.fieldTransformType),colorUniqueValueInfos:i.clone(this.colorUniqueValueInfos),legendOptions:i.clone(this.legendOptions)}))},n([l.enumeration.serializable()({pointCloudUniqueValueRenderer:"point-cloud-unique-value"})],u.prototype,"type",void 0),n([l.property({json:{write:!0},type:String})],u.prototype,"field",void 0),n([l.property({type:p.fieldTransformTypeKebabDict.apiValues,json:{type:p.fieldTransformTypeKebabDict.jsonValues,read:p.fieldTransformTypeKebabDict.read,write:p.fieldTransformTypeKebabDict.write}})],u.prototype,"fieldTransformType",void 0),n([l.property({type:[a.default],json:{write:!0}})],u.prototype,"colorUniqueValueInfos",void 0),n([l.property({type:s.default,json:{write:!0}})],u.prototype,"legendOptions",void 0),c=n([l.subclass("esri.renderers.PointCloudUniqueValueRenderer")],u);function u(e){var t=d.call(this,e)||this;return t.type="point-cloud-unique-value",t.field=null,t.fieldTransformType=null,t.colorUniqueValueInfos=null,t.legendOptions=null,t}var d,c}.apply(null,o))||(e.exports=n)},1772:function(e,t,r){var o,n;o=[r.dj.c(e.i),t,r(1),r(0),r(17),r(7),r(2)],void 0===(n=function(e,t,r,o,n,i,l){var p,s=n.strict()({pointCloudValueFilter:"value",pointCloudBitfieldFilter:"bitfield",pointCloudReturnFilter:"return"});return p=l.declared(i.JSONSupport),r(a,p),a.prototype.clone=function(){return console.warn(".clone() is not implemented for "+this.declaredClass),null},o([l.property({type:String,json:{write:{enabled:!0,isRequired:!0}}})],a.prototype,"field",void 0),o([l.property({readOnly:!0,type:s.apiValues,nonNullable:!0,json:{read:!1,write:s.write}})],a.prototype,"type",void 0),o([l.subclass("esri.layers.pointCloudFilters.PointCloudFilter")],a);function a(e){var t=p.call(this,e)||this;return t.field=null,t.type=null,t}}.apply(null,o))||(e.exports=n)},1804:function(e,t,r){var o,n;o=[r.dj.c(e.i),t,r(1),r(0),r(7),r(2)],void 0===(n=function(e,t,r,o,n,i){Object.defineProperty(t,"__esModule",{value:!0});var l,p,s=(l=i.declared(n.JSONSupport),r(a,l),(p=a).prototype.clone=function(){return new p({field:this.field,minValue:this.minValue,maxValue:this.maxValue})},o([i.property({type:String,json:{write:!0}})],a.prototype,"field",void 0),o([i.property({type:Number,nonNullable:!0,json:{write:!0}})],a.prototype,"minValue",void 0),o([i.property({type:Number,nonNullable:!0,json:{write:!0}})],a.prototype,"maxValue",void 0),p=o([i.subclass("esri.renderers.support.pointCloud.ColorModulation")],a));function a(){var e=null!==l&&l.apply(this,arguments)||this;return e.field=null,e.minValue=0,e.maxValue=255,e}t.ColorModulation=s,t.default=s}.apply(null,o))||(e.exports=n)},1805:function(e,t,r){var o,n;o=[r.dj.c(e.i),t,r(94),r(1718),r(1719)],void 0===(n=function(e,t,i,r,o){function l(e){return e&&n[e.type]||null}Object.defineProperty(t,"__esModule",{value:!0});var n={pointCloudFixedSizeAlgorithm:r.default,pointCloudSplatAlgorithm:o.default};t.read=function(e,t,r){var o=l(e);if(o){var n=new o;return n.read(e,r),n}return r&&r.messages&&e&&r.messages.push(new i("pointsizealgorithm:unsupported","Point size algorithms of type '"+(e.type||"unknown")+"' are not supported",{definition:e,context:r})),null},t.fromJSON=function(e){var t=l(e);return t?t.fromJSON(e):null}}.apply(null,o))||(e.exports=n)},1806:function(e,t,r){var o,n;o=[r.dj.c(e.i),t,r(1685),r(1718),r(1719)],void 0===(n=function(e,t,r,o,n){Object.defineProperty(t,"__esModule",{value:!0}),t.pointSizeAlgorithmTypes={key:"type",base:r.default,typeMap:{"fixed-size":o.default,splat:n.default}}}.apply(null,o))||(e.exports=n)},1807:function(e,t,r){var o,n;o=[r.dj.c(e.i),t,r(1),r(0),r(24),r(7),r(8),r(2),r(19)],void 0===(n=function(e,t,r,o,n,i,l,p,s){Object.defineProperty(t,"__esModule",{value:!0});var a,u,d=(a=p.declared(i.JSONSupport),r(c,a),(u=c).prototype.clone=function(){return new u({description:this.description,label:this.label,minValue:this.minValue,maxValue:this.maxValue,color:l.clone(this.color)})},o([p.property({type:String,json:{write:!0}})],c.prototype,"description",void 0),o([p.property({type:String,json:{write:!0}})],c.prototype,"label",void 0),o([p.property({type:Number,json:{read:{source:"classMinValue"},write:{target:"classMinValue"}}})],c.prototype,"minValue",void 0),o([p.property({type:Number,json:{read:{source:"classMaxValue"},write:{target:"classMaxValue"}}})],c.prototype,"maxValue",void 0),o([p.property({type:n,json:{type:[s.Integer],write:!0}})],c.prototype,"color",void 0),u=o([p.subclass("esri.renderers.support.pointCloud.ColorClassBreakInfo")],c));function c(){var e=null!==a&&a.apply(this,arguments)||this;return e.description=null,e.label=null,e.minValue=0,e.maxValue=0,e.color=null,e}t.ColorClassBreakInfo=d,t.default=d}.apply(null,o))||(e.exports=n)},1808:function(e,t,r){var o,n;o=[r.dj.c(e.i),t,r(1),r(0),r(24),r(7),r(8),r(2),r(19)],void 0===(n=function(e,t,r,o,n,i,l,p,s){Object.defineProperty(t,"__esModule",{value:!0});var a,u,d=(a=p.declared(i.JSONSupport),r(c,a),(u=c).prototype.clone=function(){return new u({label:this.label,value:this.value,color:l.clone(this.color)})},o([p.property({type:String,json:{write:!0}})],c.prototype,"label",void 0),o([p.property({type:Number,nonNullable:!0,json:{write:!0}})],c.prototype,"value",void 0),o([p.property({type:n,json:{type:[s.Integer],write:!0}})],c.prototype,"color",void 0),u=o([p.subclass("esri.renderers.support.pointCloud.StopInfo")],c));function c(){var e=null!==a&&a.apply(this,arguments)||this;return e.label=null,e.value=0,e.color=null,e}t.StopInfo=d,t.default=d}.apply(null,o))||(e.exports=n)},1809:function(e,t,r){var o,n;o=[r.dj.c(e.i),t,r(1),r(0),r(24),r(7),r(8),r(2),r(19)],void 0===(n=function(e,t,r,o,n,i,l,p,s){Object.defineProperty(t,"__esModule",{value:!0});var a,u,d=(a=p.declared(i.JSONSupport),r(c,a),(u=c).prototype.clone=function(){return new u({description:this.description,label:this.label,values:l.clone(this.values),color:l.clone(this.color)})},o([p.property({type:String,json:{write:!0}})],c.prototype,"description",void 0),o([p.property({type:String,json:{write:!0}})],c.prototype,"label",void 0),o([p.property({type:[String],json:{write:!0}})],c.prototype,"values",void 0),o([p.property({type:n,json:{type:[s.Integer],write:!0}})],c.prototype,"color",void 0),u=o([p.subclass("esri.renderers.support.pointCloud.ColorUniqueValueInfo")],c));function c(){var e=null!==a&&a.apply(this,arguments)||this;return e.description=null,e.label=null,e.values=null,e.color=null,e}t.ColorUniqueValueInfo=d,t.default=d}.apply(null,o))||(e.exports=n)},1925:function(e,t,r){var o,n;o=[r.dj.c(e.i),t,r(1),r(0),r(8),r(2),r(1772)],void 0===(n=function(e,t,r,o,n,i,l){return s=i.declared(l),r(p,s),(a=p).prototype.clone=function(){return new a({field:this.field,requiredClearBits:n.clone(this.requiredClearBits),requiredSetBits:n.clone(this.requiredSetBits)})},o([i.property({type:[Number],json:{write:{enabled:!0,overridePolicy:function(){return{enabled:!0,isRequired:!this.requiredSetBits}}}}})],p.prototype,"requiredClearBits",void 0),o([i.property({type:[Number],json:{write:{enabled:!0,overridePolicy:function(){return{enabled:!0,isRequired:!this.requiredClearBits}}}}})],p.prototype,"requiredSetBits",void 0),o([i.property({type:["bitfield"],json:{type:["pointCloudBitfieldFilter"]}})],p.prototype,"type",void 0),a=o([i.subclass("esri.layers.pointCloudFilters.PointCloudBitfieldFilter")],p);function p(e){var t=s.call(this,e)||this;return t.requiredClearBits=null,t.requiredSetBits=null,t.type="bitfield",t}var s,a}.apply(null,o))||(e.exports=n)},1926:function(e,t,r){var o,n;o=[r.dj.c(e.i),t,r(1),r(0),r(8),r(2),r(1772)],void 0===(n=function(e,t,r,o,n,i,l){return s=i.declared(l),r(p,s),(a=p).prototype.clone=function(){return new a({field:this.field,includedReturns:n.clone(this.includedReturns)})},o([i.property({type:[["firstOfMany","last","lastOfMany","single"]],json:{write:{enabled:!0,isRequired:!0}}})],p.prototype,"includedReturns",void 0),o([i.property({type:["return"],json:{type:["pointCloudReturnFilter"]}})],p.prototype,"type",void 0),a=o([i.subclass("esri.layers.pointCloudFilters.PointCloudReturnFilter")],p);function p(e){var t=s.call(this,e)||this;return t.includedReturns=[],t.type="return",t}var s,a}.apply(null,o))||(e.exports=n)},1927:function(e,t,r){var o,n;o=[r.dj.c(e.i),t,r(1),r(0),r(8),r(2),r(1772)],void 0===(n=function(e,t,r,o,n,i,l){return s=i.declared(l),r(p,s),(a=p).prototype.clone=function(){return new a({field:this.field,mode:this.mode,values:n.clone(this.values)})},o([i.property({type:["exclude","include"],json:{write:{enabled:!0,isRequired:!0}}})],p.prototype,"mode",void 0),o([i.property({type:["value"],json:{type:["pointCloudValueFilter"]}})],p.prototype,"type",void 0),o([i.property({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],p.prototype,"values",void 0),a=o([i.subclass("esri.layers.pointCloudFilters.PointCloudValueFilter")],p);function p(e){var t=s.call(this,e)||this;return t.mode="exclude",t.type="value",t.values=[],t}var s,a}.apply(null,o))||(e.exports=n)},1928:function(e,t,r){var o,n;o=[r.dj.c(e.i),t,r(5),r(1),r(0),r(8),r(2),r(1666)],void 0===(n=function(e,t,r,o,n,i,l,p){return a=l.declared(p),o(s,a),(u=s).prototype.clone=function(){return new u(r({},this.cloneProperties(),{field:i.clone(this.field)}))},n([l.enumeration.serializable()({pointCloudRGBRenderer:"point-cloud-rgb"})],s.prototype,"type",void 0),n([l.property({type:String,json:{write:!0}})],s.prototype,"field",void 0),u=n([l.subclass("esri.renderers.PointCloudRGBRenderer")],s);function s(e){var t=a.call(this,e)||this;return t.type="point-cloud-rgb",t.field=null,t}var a,u}.apply(null,o))||(e.exports=n)},2607:function(e,t,r){var o,n;o=[r.dj.c(e.i),t,r(60),r(94),r(1925),r(1926),r(1927)],void 0===(n=function(e,t,i,n,r,o,l){function p(e){return e&&s[e.type]||null}Object.defineProperty(t,"__esModule",{value:!0});var s={pointCloudValueFilter:l,pointCloudBitfieldFilter:r,pointCloudReturnFilter:o};t.read=function(e,t,o){if(e&&Array.isArray(e))return e.map(function(e){var t=p(e);if(t){var r=new t;return r.read(e,o),r}o&&o.messages&&e&&o.messages.push(new n("point-cloud-filter:unsupported","Point cloud filters of type '"+(e.type||"unknown")+"' are not supported",{definition:e,context:o}))})},t.write=function(e,t,r,o){var n=e.map(function(e){return e.write({},o)});i.setDeepValue(r,n,t)},t.fromJSON=function(e){var t=p(e);return t?t.fromJSON(e):null}}.apply(null,o))||(e.exports=n)},2608:function(e,t,r){var o,n;o=[r.dj.c(e.i),t,r(1925),r(1772),r(1926),r(1927)],void 0===(n=function(e,t,r,o,n,i){Object.defineProperty(t,"__esModule",{value:!0}),t.types={key:"type",base:o,typeMap:{value:i,bitfield:r,return:n}}}.apply(null,o))||(e.exports=n)},2609:function(e,t,r){var o,n;o=[r.dj.c(e.i),t,r(94),r(1754),r(1928),r(1755),r(1756)],void 0===(n=function(e,t,i,r,o,n,l){function p(e){return e&&s[e.type]||null}Object.defineProperty(t,"__esModule",{value:!0});var s={pointCloudClassBreaksRenderer:r,pointCloudRGBRenderer:o,pointCloudStretchRenderer:n,pointCloudUniqueValueRenderer:l};t.read=function(e,t,r){var o=p(e);if(o){var n=new o;return n.read(e,r),n}return r&&r.messages&&e&&r.messages.push(new i("renderer:unsupported","Renderers of type '"+(e.type||"unknown")+"' are not supported",{definition:e,context:r})),null},t.fromJSON=function(e){var t=p(e);return t?t.fromJSON(e):null}}.apply(null,o))||(e.exports=n)},2610:function(e,t,r){var o,n;o=[r.dj.c(e.i),t,r(1754),r(1666),r(1928),r(1755),r(1756)],void 0===(n=function(e,t,r,o,n,i,l){Object.defineProperty(t,"__esModule",{value:!0}),t.types={key:"type",base:o,typeMap:{"point-cloud-class-breaks":r,"point-cloud-rgb":n,"point-cloud-stretch":i,"point-cloud-unique-value":l}}}.apply(null,o))||(e.exports=n)}}]);