(function(){(this||window).webpackJsonp.registerAbsMids({"esri/portal/support/layersLoader":1621,"esri/layers/support/lazyLayerLoader":1671})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{1621:function(e,n,t){var r,a;r=[t.dj.c(e.i),n,t(9),t(10),t(29),t(6),t(4),t(1671),t(53),t(545),t(519)],void 0===(a=function(e,n,l,a,p,s,y,f,u,h,d){function v(r,a,e){var i=e.showLegend,n=e.layers.slice();n.reverse(),n.forEach(function(e){var n=new a({portalItem:r.portalItem,layerId:e.id,sublayerTitleMode:"service-name"});if("Feature Collection"===r.portalItem.type){var t={origin:"portal-item",portal:r.portalItem.portal||u.getDefault()};n.read(e,t),null!=i&&n.read({showLegend:i},t)}r.add(n)})}function L(e,n){if(!1===e.supportsData)return y.resolve();var u=e.instance;return u.portalItem.fetchData("json",n).catch(function(){return null}).then(function(e){var n,t,r=e;if("stream"!==(t=u).type&&"layerId"in t){var a=!0;if(e&&Array.isArray(r.layers)){null==u.layerId&&(u.layerId=r.layers[0].id);for(var i=0;i<r.layers.length;i++)if(r.layers[i].id===u.layerId){n=r.layers[i];break}n&&(1===r.layers.length&&(a=!1),null!=e.showLegend&&(n.showLegend=e.showLegend))}return a&&"service-name"!==u.sublayerTitleMode&&(u.sublayerTitleMode="item-title-and-service-name"),n}return e})}Object.defineProperty(n,"__esModule",{value:!0}),n.load=function(t,r){return a(this,void 0,void 0,function(){var n;return l(this,function(e){switch(e.label){case 0:return(n=t.instance.portalItem)&&n.id?[4,n.load(r)]:[2,y.resolve()];case 1:return e.sent(),function(e){var n=e.instance.portalItem;if(-1===e.supportedTypes.indexOf(n.type))throw new s("portal:invalid-layer-item-type","Invalid layer item type '${type}', expected '${expectedType}'",{type:n.type,expectedType:e.supportedTypes.join(", ")})}(t),[2,function(o,c){return a(this,void 0,void 0,function(){var n,t,r,a,i,u;return l(this,function(e){switch(e.label){case 0:return n=o.instance,t=n.portalItem,r=t.url,a=t.title,i=h.createForItem(t),"group"===n.type?(n.read({title:a},i),[2,function(n,t){var e,r,a=n.portalItem.type;switch(a){case"Feature Service":e=f.layerLookupMap.FeatureLayer;break;case"Stream Service":e=f.layerLookupMap.StreamLayer;break;case"Scene Service":e=f.layerLookupMap.SceneLayer;break;case"Feature Collection":e=f.layerLookupMap.FeatureLayer;break;default:throw new s("portal:unsupported-item-type-as-group","The item type '"+a+"' is not supported as a 'GroupLayer'")}return e().then(function(e){return r=e,L(t)}).then(function(e){return e&&Array.isArray(e.layers)?v(n,r,e):function(r,a){if(!r.portalItem.url)return y.resolve();return p(r.portalItem.url,{responseType:"json",query:{f:"json"}}).then(function(e){var n=e.data;if(n&&Array.isArray(n.layers)){var t=n.layers.map(function(e){return{id:e.id,name:e.name}});return v(r,a,{layers:t})}})}(n,r)})}(n,o)]):(r&&n.read({url:r},i),[4,L(o,c)]);case 1:return(u=e.sent())&&n.read(u,i),n.read({title:a},i),[2,d.loadStyleRenderer(n,i)]}})})}(t,r)]}})})}}.apply(null,r))||(e.exports=a)},1671:function(e,n,r){var t,a;t=[r.dj.c(e.i),n,r(4)],void 0===(a=function(e,n,t){Object.defineProperty(n,"__esModule",{value:!0}),n.layerLookupMap={CSVLayer:function(){return t.create(function(n){return r.e(23).then(function(){var e=[r(1578)];n.apply(null,e)}.bind(this)).catch(r.oe)})},ElevationLayer:function(){return t.create(function(n){return Promise.resolve().then(function(){var e=[r(219)];n.apply(null,e)}.bind(this)).catch(r.oe)})},FeatureLayer:function(){return t.create(function(n){return Promise.resolve().then(function(){var e=[r(154)];n.apply(null,e)}.bind(this)).catch(r.oe)})},GroupLayer:function(){return t.create(function(n){return r.e(10).then(function(){var e=[r(1573)];n.apply(null,e)}.bind(this)).catch(r.oe)})},GeoRSSLayer:function(){return t.create(function(n){return r.e(29).then(function(){var e=[r(1579)];n.apply(null,e)}.bind(this)).catch(r.oe)})},ImageryLayer:function(){return t.create(function(n){return r.e(12).then(function(){var e=[r(1574)];n.apply(null,e)}.bind(this)).catch(r.oe)})},KMLLayer:function(){return t.create(function(n){return r.e(25).then(function(){var e=[r(1581)];n.apply(null,e)}.bind(this)).catch(r.oe)})},MapImageLayer:function(){return t.create(function(n){return r.e(11).then(function(){var e=[r(1572)];n.apply(null,e)}.bind(this)).catch(r.oe)})},MapNotesLayer:function(){return t.create(function(n){return r.e(86).then(function(){var e=[r(1784)];n.apply(null,e)}.bind(this)).catch(r.oe)})},OpenStreetMapLayer:function(){return t.create(function(n){return r.e(30).then(function(){var e=[r(1582)];n.apply(null,e)}.bind(this)).catch(r.oe)})},PointCloudLayer:function(){return t.create(function(n){return r.e(14).then(function(){var e=[r(1583)];n.apply(null,e)}.bind(this)).catch(r.oe)})},SceneLayer:function(){return t.create(function(n){return r.e(19).then(function(){var e=[r(1575)];n.apply(null,e)}.bind(this)).catch(r.oe)})},BuildingSceneLayer:function(){return t.create(function(n){return r.e(16).then(function(){var e=[r(1577)];n.apply(null,e)}.bind(this)).catch(r.oe)})},IntegratedMeshLayer:function(){return t.create(function(n){return r.e(24).then(function(){var e=[r(1580)];n.apply(null,e)}.bind(this)).catch(r.oe)})},StreamLayer:function(){return t.create(function(n){return r.e(27).then(function(){var e=[r(1576)];n.apply(null,e)}.bind(this)).catch(r.oe)})},TileLayer:function(){return t.create(function(n){return Promise.resolve().then(function(){var e=[r(220)];n.apply(null,e)}.bind(this)).catch(r.oe)})},UnknownLayer:function(){return t.create(function(n){return r.e(87).then(function(){var e=[r(1785)];n.apply(null,e)}.bind(this)).catch(r.oe)})},UnsupportedLayer:function(){return t.create(function(n){return r.e(88).then(function(){var e=[r(1786)];n.apply(null,e)}.bind(this)).catch(r.oe)})},VectorTileLayer:function(){return t.create(function(n){return Promise.resolve().then(function(){var e=[r(319)];n.apply(null,e)}.bind(this)).catch(r.oe)})},WebTileLayer:function(){return t.create(function(n){return Promise.resolve().then(function(){var e=[r(311)];n.apply(null,e)}.bind(this)).catch(r.oe)})},WMSLayer:function(){return t.create(function(n){return r.e(20).then(function(){var e=[r(1584)];n.apply(null,e)}.bind(this)).catch(r.oe)})},WMTSLayer:function(){return t.create(function(n){return r.e(67).then(function(){var e=[r(1787)];n.apply(null,e)}.bind(this)).catch(r.oe)})},BingMapsLayer:function(){return t.create(function(n){return r.e(8).then(function(){var e=[r(317)];n.apply(null,e)}.bind(this)).catch(r.oe)})}}}.apply(null,t))||(e.exports=a)}}]);