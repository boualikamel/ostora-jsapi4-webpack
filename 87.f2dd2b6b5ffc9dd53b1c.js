(function(){(this||window).webpackJsonp.registerAbsMids({"esri/layers/UnknownLayer":1785})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{1785:function(e,n,r){var o,t;o=[r.dj.c(e.i),n,r(1),r(0),r(6),r(120),r(4),r(50),r(2),r(100),r(122)],void 0===(t=function(e,n,r,o,t,i,p,s,a,y,u){return c=a.declared(u.PortalLayer(i.MultiOriginJSONMixin(y))),r(l,c),l.prototype.initialize=function(){var o=this;this.addResolvingPromise(p.create(function(e,r){s.schedule(function(){var e=o.resourceInfo&&(o.resourceInfo.layerType||o.resourceInfo.type),n="Unknown layer type";e&&(n+=" "+e),r(new t("layer:unknown-layer-type",n,{layerType:e}))})}))},l.prototype.read=function(e,n){this.inherited(arguments,[{resourceInfo:e},n])},l.prototype.write=function(){return null},o([a.property({readOnly:!0})],l.prototype,"resourceInfo",void 0),o([a.property({type:["show","hide"]})],l.prototype,"listMode",void 0),o([a.property({json:{read:!1},readOnly:!0,value:"unknown"})],l.prototype,"type",void 0),o([a.subclass("esri.layers.UnknownLayer")],l);function l(e){var n=c.call(this,e)||this;return n.resourceInfo=null,n.type="unknown",n}var c}.apply(null,o))||(e.exports=t)}}]);