System.register("chunks:///_virtual/main",["./NewComponent.ts"],(function(){"use strict";return{setters:[null],execute:function(){}}}));

System.register("chunks:///_virtual/NewComponent.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(o){"use strict";var n,e,t,r;return{setters:[function(o){n=o.inheritsLoose},function(o){e=o.cclegacy,t=o._decorator,r=o.Component}],execute:function(){var c;e._RF.push({},"e45e9Ee4UpOdYuxGQIn8lLM","NewComponent",void 0);var u=t.ccclass;t.property,o("NewComponent",u("NewComponent")(c=function(o){function e(){return o.apply(this,arguments)||this}n(e,o);var t=e.prototype;return t.onLoad=function(){console.debug("onload")},t.start=function(){console.debug("onStart")},t.update=function(o){},t.onDestroy=function(){console.debug("onDestory")},e}(r))||c);e._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});