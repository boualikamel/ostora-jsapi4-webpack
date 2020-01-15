(function(){(this||window).webpackJsonp.registerAbsMids({"esri/views/2d/layers/MapImageLayerView2D":1615,"esri/views/layers/support/ClipArea":1627,"esri/views/layers/LayerView":1635,"esri/views/2d/layers/LayerView2D":1636,"esri/views/layers/support/ClipRect":1637,"esri/views/layers/support/Geometry":1638,"esri/views/layers/support/Path":1639,"esri/renderers/support/clickToleranceUtils":1687,"esri/views/2d/layers/BitmapLayerView2D":1688,"esri/views/2d/layers/support/ExportStrategy":1689,"esri/views/2d/viewStateUtils":1690,"esri/views/2d/layers/support/popupUtils2D":1731,"esri/views/layers/MapImageLayerView":2567})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{1615:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r(5),r(1),r(0),r(9),r(10),r(3),r(4),r(16),r(2),r(528),r(1688),r(1636),r(1689),r(1731),r(1635),r(2567),r(496)],void 0===(n=function(e,t,n,r,i,o,a,p,s,u,l,d,c,y,h,f,v,m,g){var b,w=p.getLogger("esri.views.2d.layers.MapImageLayerView2D");return b=l.declared(m.MapImageLayerView(g.RefreshableLayerView(c.BitmapLayerView2D(y.LayerView2D(v))))),r(x,b),x.prototype.hitTest=function(){return null},x.prototype.update=function(e){this.strategy.update(e).catch(function(e){s.isAbortError(e)||w.error(e)})},x.prototype.attach=function(){var t=this,e=this.layer,r=e.imageMaxWidth,i=e.imageMaxHeight,n=e.version,o=10.3<=n,a=10<=n;this.strategy=new h({container:this.container,fetchSource:this.fetchImage.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxWidth:r,imageMaxHeight:i,imageRotationSupported:o,imageNormalizationSupported:a,hidpi:!0}),this._exportImageParameters=new d.ExportImageParameters({view:this.view,layer:this.layer}),this.handles.add(u.init(this._exportImageParameters,"version",function(e){t._exportImageVersion!==e&&(t._exportImageVersion=e,t.requestUpdate())}),"mapimagelayerview-update")},x.prototype.detach=function(){this.strategy.destroy(),this.handles.remove("mapimagelayerview-update"),this._exportImageParameters.layer=null,this._exportImageParameters.destroy(),this._exportImageParameters=null,this._exportImageVersion=-1,this.container.removeAllChildren()},x.prototype.moveStart=function(){},x.prototype.viewChange=function(){},x.prototype.moveEnd=function(){this.requestUpdate()},x.prototype.createFetchPopupFeaturesQueryGeometry=function(e,t){return f.createQueryGeometry(e,t,this.view)},x.prototype.doRefresh=function(){return a(this,void 0,void 0,function(){return o(this,function(e){return this.requestUpdate(),[2]})})},x.prototype.isUpdating=function(){return this.attached&&(this.strategy.updating||this.updateRequested)},x.prototype.fetchImage=function(e,t,r,i){return this.layer.fetchImage(e,t,r,n({timeExtent:this._exportImageParameters.timeExtent,timestamp:this.refreshTimestamp},i))},i([l.property()],x.prototype,"strategy",void 0),i([l.property({dependsOn:["strategy.updating"]})],x.prototype,"updating",void 0),i([l.subclass("esri.views.2d.layers.MapImageLayerView2D")],x);function x(){var e=null!==b&&b.apply(this,arguments)||this;return e._exportImageParameters=null,e._exportImageVersion=-1,e}}.apply(null,i))||(e.exports=n)},1627:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r(0),r(1),r(7),r(2)],void 0===(n=function(e,t,r,i,n,o){return p=o.declared(n.JSONSupport),i(a,p),r([o.subclass("esri.views.layers.support.ClipArea")],a);function a(){return null!==p&&p.apply(this,arguments)||this}var p}.apply(null,i))||(e.exports=n)},1635:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r(1),r(0),r(13),r(54),r(206),r(121),r(3),r(119),r(2)],void 0===(n=function(e,t,r,i,n,o,a,p,s,u,l){return c=l.declared(a.HandleOwnerMixin(p.IdentifiableMixin(u.EsriPromiseMixin(o.EventedMixin(n))))),r(d,c),d.prototype.initialize=function(){var i=this;this.addResolvingPromise(this.layer),this.when().catch(function(e){if("layerview:create-error"!==e.name){var t=i.layer&&i.layer.id||"no id",r=i.layer&&i.layer.title||"no title";throw s.getLogger(i.declaredClass).error("#resolve()","Failed to resolve layer view (layer title: '"+r+"', id: '"+t+"')",e),e}})},d.prototype.destroy=function(){this.layer=this.parent=null},Object.defineProperty(d.prototype,"fullOpacity",{get:function(){function e(e){return null==e?1:e}return e(this.get("layer.opacity"))*e(this.get("parent.fullOpacity"))},enumerable:!0,configurable:!0}),Object.defineProperty(d.prototype,"suspended",{get:function(){return!this.canResume()},enumerable:!0,configurable:!0}),Object.defineProperty(d.prototype,"updating",{get:function(){return!!(this.updatingHandles&&this.updatingHandles.updating||this.isUpdating())},enumerable:!0,configurable:!0}),Object.defineProperty(d.prototype,"visible",{get:function(){return!0===this.get("layer.visible")},set:function(e){void 0!==e?this._override("visible",e):this._clearOverride("visible")},enumerable:!0,configurable:!0}),d.prototype.canResume=function(){return!this.get("parent.suspended")&&this.get("view.ready")&&this.get("layer.loaded")&&this.visible||!1},d.prototype.isUpdating=function(){return!1},i([l.property({dependsOn:["layer.opacity","parent.fullOpacity"]})],d.prototype,"fullOpacity",null),i([l.property()],d.prototype,"layer",void 0),i([l.property()],d.prototype,"parent",void 0),i([l.property({readOnly:!0,dependsOn:["visible","layer.loaded","parent.suspended"]})],d.prototype,"suspended",null),i([l.property({type:Boolean,dependsOn:["updatingHandles.updating"],readOnly:!0})],d.prototype,"updating",null),i([l.property({dependsOn:["layer.visible"]})],d.prototype,"visible",null),i([l.subclass("esri.views.layers.LayerView")],d);function d(e){var t=c.call(this,e)||this;return t.layer=null,t.parent=null,t}var c}.apply(null,i))||(e.exports=n)},1636:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r(1),r(0),r(18),r(123),r(16),r(2),r(1627),r(1637),r(1638),r(1639)],void 0===(n=function(e,t,i,n,r,o,a,p,s,u,l,d){Object.defineProperty(t,"__esModule",{value:!0});var c=r.ofType({key:"type",base:s,typeMap:{rect:u,path:d,geometry:l}});t.LayerView2D=function(e){return r=p.declared(e),i(t,r),t.prototype.initialize=function(){var t=this;function e(){return t.notifyChange("rendering")}this.when(function(){t.requestUpdate()},function(){}),this.handles.add([a.init(this,"suspended",function(e){t.container&&(t.container.visible=!e),t.view&&!e&&t.updateRequested&&t.view.requestLayerViewUpdate(t)},!0),a.init(this,["fullOpacity","container"],function(){t.container&&(t.container.opacity=t.fullOpacity)},!0),a.on(this,"container","post-render",e),a.on(this,"container","will-render",e)])},t.prototype.destroy=function(){this.attached&&(this.attached=!1,this.detach()),this.handles.remove("initialize"),this.updateRequested=!1,this.layer=null,this.view=null},Object.defineProperty(t.prototype,"rendering",{get:function(){return this.attached&&!this.suspended&&(this.moving||this.container.renderRequested||this.isRendering())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"updating",{get:function(){return!this.suspended&&(!this.attached||this.updateRequested||this.isUpdating())},enumerable:!0,configurable:!0}),t.prototype.isVisibleAtScale=function(e){var t=!0,r=this.layer,i=r.minScale,n=r.maxScale;if(null!=i&&null!=n){var o=!i,a=!n;!o&&e<=i&&(o=!0),!a&&n<=e&&(a=!0),t=o&&a}return t},t.prototype.requestUpdate=function(){this.updateRequested||(this.updateRequested=!0,this.suspended||this.view.requestLayerViewUpdate(this))},t.prototype.processUpdate=function(e){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",e),this.updateRequested&&!this.suspended&&(this.updateRequested=!1,this.update(e))):this.updateRequested=!1},t.prototype.isUpdating=function(){return!1},t.prototype.isRendering=function(){return!1},t.prototype.canResume=function(){var e=this.inherited(arguments);return e=e&&this.isVisibleAtScale(this.view.scale)},n([p.property({type:c,set:function(e){var t=o.referenceSetter(e,this._get("clips"),c);this._set("clips",t)}})],t.prototype,"clips",void 0),n([p.property()],t.prototype,"moving",void 0),n([p.property({dependsOn:["attached","suspended","moving"]})],t.prototype,"rendering",null),n([p.property()],t.prototype,"attached",void 0),n([p.property()],t.prototype,"container",void 0),n([p.property({dependsOn:["view.scale","layer.minScale","layer.maxScale"]})],t.prototype,"suspended",void 0),n([p.property({readOnly:!0})],t.prototype,"updateParameters",void 0),n([p.property()],t.prototype,"updateRequested",void 0),n([p.property({dependsOn:["updateRequested","attached","suspended"]})],t.prototype,"updating",null),n([p.property()],t.prototype,"view",void 0),n([p.subclass("esri.views.2d.layers.LayerView2D")],t);function t(){var e=null!==r&&r.apply(this,arguments)||this;return e.clips=new c,e.moving=!1,e.attached=!1,e.lastUpdateId=-1,e.updateRequested=!1,e}var r}}.apply(null,i))||(e.exports=n)},1637:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r(0),r(1),r(2),r(1627)],void 0===(n=function(e,t,r,i,n,o){return p=n.declared(o),i(a,p),(s=a).prototype.clone=function(){return new s({left:this.left,right:this.right,top:this.top,bottom:this.bottom})},Object.defineProperty(a.prototype,"version",{get:function(){return(this._get("version")||0)+1},enumerable:!0,configurable:!0}),r([n.property({type:[Number,String],json:{write:!0}})],a.prototype,"left",void 0),r([n.property({type:[Number,String],json:{write:!0}})],a.prototype,"right",void 0),r([n.property({type:[Number,String],json:{write:!0}})],a.prototype,"top",void 0),r([n.property({type:[Number,String],json:{write:!0}})],a.prototype,"bottom",void 0),r([n.property({readOnly:!0,dependsOn:["left","right","top","bottom"]})],a.prototype,"version",null),s=r([n.subclass("esri.views.layers.support.ClipRect")],a);function a(){var e=null!==p&&p.apply(this,arguments)||this;return e.type="rect",e.left=null,e.right=null,e.top=null,e.bottom=null,e}var p,s}.apply(null,i))||(e.exports=n)},1638:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r(0),r(1),r(28),r(2),r(81),r(38),r(1627)],void 0===(n=function(e,t,r,i,n,o,a,p,s){var u,l,d={base:a,key:"type",typeMap:{extent:n.Extent,polygon:n.Polygon}};return u=o.declared(s),i(c,u),l=c,Object.defineProperty(c.prototype,"version",{get:function(){return(this._get("version")||0)+1},enumerable:!0,configurable:!0}),c.prototype.clone=function(){return new l({geometry:this.geometry.clone()})},r([o.property({types:d,json:{read:p.fromJSON,write:!0}})],c.prototype,"geometry",void 0),r([o.property({readOnly:!0,dependsOn:["geometry"]})],c.prototype,"version",null),l=r([o.subclass("esri.views.layers.support.Geometry")],c);function c(){var e=null!==u&&u.apply(this,arguments)||this;return e.type="geometry",e.geometry=null,e}}.apply(null,i))||(e.exports=n)},1639:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r(0),r(1),r(2),r(1627)],void 0===(n=function(e,t,r,i,n,o){return p=n.declared(o),i(a,p),Object.defineProperty(a.prototype,"version",{get:function(){return(this._get("version")||0)+1},enumerable:!0,configurable:!0}),r([n.property({type:[[[Number]]],json:{write:!0}})],a.prototype,"path",void 0),r([n.property({readOnly:!0,dependsOn:["path"]})],a.prototype,"version",null),r([n.subclass("esri.views.layers.support.Path")],a);function a(){var e=null!==p&&p.apply(this,arguments)||this;return e.type="path",e.path=[],e}var p}.apply(null,i))||(e.exports=n)},1687:function(e,t,r){var i,n;i=[r.dj.c(e.i),t],void 0===(n=function(e,t){function n(e,t){return t&&t.xoffset?Math.max(e,Math.abs(t.xoffset)):t&&t.yoffset?Math.max(e,Math.abs(t.yoffset)):e}function p(e,t){return"number"==typeof e?e:e&&e.stops&&e.stops.length?function(e){for(var t=0,r=0,i=0;i<e.length;i++){var n=e[i].size;"number"==typeof n&&(t+=n,r++)}return t/r}(e.stops):t}Object.defineProperty(t,"__esModule",{value:!0}),t.calculateTolerance=function(e){if(!e)return 6;var t="visualVariables"in e?function(i,e){if(!e)return i;var t=e.filter(function(e){return"size"===e.type}).map(function(e){var t=e.maxSize,r=e.minSize;return(p(t,i)+p(r,i))/2}),r=0,n=t.length;if(0===n)return i;for(var o=0;o<n;o++)r+=t[o];var a=Math.floor(r/n);return Math.max(a,i)}(6,e.visualVariables):6;if("simple"===e.type)return n(t,e.symbol);if("unique-value"===e.type){var r=t;return e.uniqueValueInfos.forEach(function(e){r=n(r,e.symbol)}),r}if("class-breaks"!==e.type)return e.type,t;var i=t;return e.classBreakInfos.forEach(function(e){i=n(i,e.symbol)}),i}}.apply(null,i))||(e.exports=n)},1688:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r(0),r(1),r(2),r(508)],void 0===(n=function(e,t,i,n,o,a){Object.defineProperty(t,"__esModule",{value:!0}),t.BitmapLayerView2D=function(e){return r=o.declared(e),n(t,r),t.prototype.initialize=function(){var e=this;this.handles.add(this.clips.on("change",function(){return e.container.setClips(e.clips)}))},i([o.subclass("esri.views.2d.layers.BitmapLayerView2D")],t);function t(){var e=null!==r&&r.apply(this,arguments)||this;return e.container=new a.BitmapContainer(e.clips),e}var r}}.apply(null,i))||(e.exports=n)},1689:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r(5),r(9),r(10),r(1),r(0),r(13),r(4),r(2),r(37),r(80),r(55),r(92),r(90),r(1690),r(495),r(102)],void 0===(n=function(e,t,r,y,i,n,o,a,h,p,f,s,v,m,u,g,b,l){var d,w=s.create(),x=[0,0],M=new l(0,0,0,0),c=2048,_=2048,O=!1,P=!1,S=!1;return d=p.declared(a),n(R,d),R.prototype.destroy=function(){},Object.defineProperty(R.prototype,"updating",{get:function(){return null!==this._imagePromise},enumerable:!0,configurable:!0}),R.prototype.updateExports=function(e){for(var t=0,r=this.container.children;t<r.length;t++){var i=r[t];if(!i.visible||!i.attached)return;e(i)?console.error("ExportStrategy.updateExports doesn't support promise yet"):(i.invalidateTexture(),i.requestRender())}},R.prototype._export=function(r,i,e,n,o,t){var a=this;return h.resolve().then(function(){return a.fetchSource(r,Math.floor(i*o),Math.floor(e*o),{rotation:n,pixelRatio:o,signal:t})}).then(function(e){var t=new u.Bitmap(e);return t.x=r.xmin,t.y=r.ymax,t.resolution=r.width/i,t.rotation=n,t.pixelRatio=o,t})},R.prototype._singleExport=function(e,t,r,i,n){g.getBBox(w,e.center,e.resolution,t);var o=new f(w[0],w[1],w[2],w[3],e.spatialReference);return this._export(o,t[0],t[1],r,i,n).then(function(e){return[e]})},R.prototype._tiledExport=function(o,a,p,s,u){var l=this,e=m.create({size:a,spatialReference:o.spatialReference,scales:[o.scale]}),d=new b(e),t=d.getTileCoverage(o);if(!t)return null;var c=[];return t.forEach(function(e,t,r,i){M.set(e,t,r,i),d.getTileBounds(w,M);var n=new f(w[0],w[1],w[2],w[3],o.spatialReference);c.push(l._export(n,a,a,p,s,u))}),h.all(c)},o([p.property()],R.prototype,"_imagePromise",void 0),o([p.property()],R.prototype,"container",void 0),o([p.property()],R.prototype,"disposeSource",void 0),o([p.property()],R.prototype,"fetchSource",void 0),o([p.property()],R.prototype,"hidpi",void 0),o([p.property()],R.prototype,"imageMaxWidth",void 0),o([p.property()],R.prototype,"imageMaxHeight",void 0),o([p.property()],R.prototype,"imageRotationSupported",void 0),o([p.property()],R.prototype,"imageNormalizationSupported",void 0),o([p.property()],R.prototype,"requestUpdate",void 0),o([p.property({dependsOn:["_imagePromise"]})],R.prototype,"updating",null),o([p.subclass("esri.views.2d.layers.support.ExportStrategy")],R);function R(e){var t=d.call(this,e)||this;return t._imagePromise=null,t.hidpi=S,t.imageMaxWidth=c,t.imageMaxHeight=_,t.imageRotationSupported=O,t.imageNormalizationSupported=P,t.update=h.debounce(function(d,c){return i(t,void 0,void 0,function(){var t,r,i,n,o,a,p,s,u,l=this;return y(this,function(e){return t=d.state,r=v.getInfo(t.spatialReference),i=this.hidpi?d.pixelRatio:1,!d.stationary||this.destroyed?[2]:(this.imageRotationSupported?(x[0]=t.size[0],x[1]=t.size[1]):g.getOuterSize(x,t),n=Math.floor(x[0]*i)>this.imageMaxWidth||Math.floor(x[1]*i)>this.imageMaxHeight,o=r&&(t.extent.xmin<r.valid[0]||t.extent.xmax>r.valid[1]),a=!this.imageNormalizationSupported&&o,p=!n&&!a,s=this.imageRotationSupported?t.rotation:0,p?this._imagePromise=this._singleExport(t,x,s,i,c):(u=Math.min(this.imageMaxWidth,this.imageMaxHeight),a&&(u=Math.min(t.worldScreenWidth,u)),this._imagePromise=this._tiledExport(t,u,s,i,c)),[2,this._imagePromise.then(function(e){l._imagePromise=null;var t=l.container.children.slice();l.container.removeAllChildren(),e.forEach(l.container.addChild,l.container),l.disposeSource&&t.forEach(function(e){l.disposeSource(e.source)},l)}).catch(function(e){throw l._imagePromise=null,e})])})})},5e3),t}}.apply(null,i))||(e.exports=n)},1690:function(e,t,r){var i,n;i=[r.dj.c(e.i),t],void 0===(n=function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var s=Math.PI/180;t.snapToPixel=function(e,t,r){var i=r.resolution,n=r.size;return e[0]=i*(Math.round(t[0]/i)+n[0]%2*.5),e[1]=i*(Math.round(t[1]/i)+n[1]%2*.5),e},t.getOuterSize=function(e,t){var r=t.rotation*s,i=Math.abs(Math.cos(r)),n=Math.abs(Math.sin(r)),o=t.size,a=o[0],p=o[1];return e[0]=Math.round(p*n+a*i),e[1]=Math.round(p*i+a*n),e},t.getBBox=function(e,t,r,i){var n=t[0],o=t[1],a=i[0],p=i[1],s=.5*r;return e[0]=n-s*a,e[1]=o-s*p,e[2]=n+s*a,e[3]=o+s*p,e},t.bboxIntersects=function(e,t){var r=e[0],i=e[1],n=e[2],o=e[3],a=t[0],p=t[1],s=t[2],u=t[3];return!(s<r||n<a||u<i||o<p)}}.apply(null,i))||(e.exports=n)},1731:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r(11),r(0),r(37)],void 0===(n=function(e,t,r,i,s){Object.defineProperty(t,"__esModule",{value:!0}),t.createQueryGeometry=function(e,t,r){var i=r.get("state.resolution"),n=t*("number"==typeof i?i:1),o=e.clone().offset(-n,-n),a=e.clone().offset(n,n),p=r.spatialReference;return new s({xmin:Math.min(o.x,a.x),ymin:Math.min(o.y,a.y),xmax:Math.max(o.x,a.x),ymax:Math.max(o.y,a.y),spatialReference:p})}}.apply(null,i))||(e.exports=n)},2567:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r(1),r(0),r(9),r(10),r(6),r(4),r(2),r(1687)],void 0===(n=function(e,t,i,n,s,u,l,d,o,c){Object.defineProperty(t,"__esModule",{value:!0}),t.MapImageLayerView=function(e){return r=o.declared(e),i(t,r),t.prototype.fetchPopupFeatures=function(p){return u(this,void 0,void 0,function(){var t,i,n,o,r,a=this;return s(this,function(e){switch(e.label){case 0:return t=this.layer,p?(i=this.get("view.scale"),n=[],o=function(e){var t=0===e.minScale||i<=e.minScale,r=0===e.maxScale||i>=e.maxScale;e.visible&&t&&r&&(e.sublayers?e.sublayers.forEach(o):e.popupTemplate&&e.popupEnabled&&n.push(e))},t.sublayers.forEach(o),r=n.map(function(n){return u(a,void 0,void 0,function(){var t,r,i;return s(this,function(e){switch(e.label){case 0:return[4,n.popupTemplate.getRequiredFields()];case 1:return t=e.sent(),r=n.createQuery(),i=c.calculateTolerance(n.renderer),r.geometry=this.createFetchPopupFeaturesQueryGeometry(p,i),r.outFields=t,[4,n.queryFeatures(r)];case 2:return[2,e.sent().features]}})})}),[4,d.eachAlways(r)]):[2,d.reject(new l("mapimagelayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:t}))];case 1:return[2,e.sent().reduce(function(e,t){return e.concat(t.value)},[]).filter(function(e){return null!=e})]}})})},n([o.property()],t.prototype,"layer",void 0),n([o.subclass("esri.views.layers.MapImageLayerView")],t);function t(){return null!==r&&r.apply(this,arguments)||this}var r}}.apply(null,i))||(e.exports=n)}}]);