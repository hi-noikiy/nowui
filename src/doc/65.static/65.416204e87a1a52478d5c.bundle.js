webpackJsonp([65],{2:function(module,exports){"use strict";function getUa(){return"undefined"!=typeof navigator&&navigator&&navigator.userAgent||""}function Up(str){return str.replace(/^./,function(ch){return ch.toUpperCase()})}function compare(a,b){var i,l,r,len;for(a=String(a).split("."),b=String(b).split("."),i=0,len=Math.max(a.length,b.length);i<len;i++){if(l=isFinite(a[i])&&Number(a[i])||0,r=isFinite(b[i])&&Number(b[i])||0,l<r)return-1;if(l>r)return 1}return 0}var regexp=[["IOS",/\b(iPad|iPhone|iPod)\b.*? OS ([\d_]+)/,2],["android",/\bAndroid\s*([^;]+)/],["QQBrowser",/\bMQQBrowser\/([\d\.]+)/],["nowSDK",/\bNowSDK\/([\d\.]*)/i],["QQ",/\bQQ\/([\d\.]+)/],["weixin",/\bMicroMessenger\/([\d\.]*)/],["now",/\bNow\/(\d+|LocalCompiled)/],["nowDev",/\bNow\/LocalCompiled/],["jiaoyou",/\bODApp\/([\d\.]+|LocalCompiled)/],["jiaoyouDev",/\bODApp\/LocalCompiled/],["huayang",/\bhuayangapp\/([\d\.]*)/],["qzone",/\bQzone\/\w*_([\d\.]+)/],["comicReader",/\bQQAC_Client(_\w+)?\/([\d\.]*)/i],["weibo",/\bweibo/i]],entry={userAgent:getUa,init:function(){var _this=this;regexp.forEach(function(args){_this.addItem.apply(_this,args)}),this.platform=this.isIOS?"ios":this.isAndroid?"android":"pc",regexp.forEach(function(args){var name=args[0];_this["is"+Up(name)]&&(_this.type=name)}),this.netType=getUa().match(/NetType\/(\w+)/i)&&RegExp.$1.toUpperCase(),this.model=getUa().match(/\(.*;\s?(\S*?\s?\S*?)\s?(Build)?\//i)&&RegExp.$1},addItem:function(name,exp){var verPos=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,match=getUa().match(exp),version=(match&&match[verPos]||"").replace(/_/g,".")||null;this["is"+Up(name)]=!!match,this[name+"Version"]=version,this[name+"Upper"]=this._upper.bind(this,name),this[name+"Lower"]=this._lower.bind(this,name),this[name+"Compare"]=this._compare.bind(this,name)},_upper:function(name,ver){var v=this.version(name);return v&&compare(v,ver)>=0||!1},_lower:function(name,ver){var v=this.version(name);return v&&compare(v,ver)<=0||!1},_compare:function(name,ver){var v=this.version(name);return v?compare(v,ver):-2},version:function(name){return this[name+"Version"]||null}};entry.init(),module.exports=entry},9:function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function getUrl(url,param){return param&&(url=url+(url.match(/\?/)?"&":"?")+getParam(param)),url}function getParam(obj){var str=[];for(var k in obj)if(obj.hasOwnProperty(k)){var v="undefined"!=typeof obj[k]?obj[k]:"";str.push(encodeURIComponent(k)+"="+encodeURIComponent(v))}return str.join("&")}function callByLocaiton(url,param){url=getUrl(url,param),window.location=url}function callByIframe(url,param){url=getUrl(url,param);var iframe=document.createElement("iframe"),body=document.getElementsByTagName("body")[0];body.appendChild(iframe);var style={position:"fixed",zIndex:-1,left:0,right:0,width:0,height:0,margin:0,padding:0,border:"none",opacity:0,visibility:"hidden"};for(var k in style)iframe.style[k]=style[k];iframe.src=url,setTimeout(function(){body.removeChild(iframe)},2e3)}function callProto(url,param){navigator.userAgent.match(/\bSafari\/\S+$/)&&navigator.userAgent.match(/\b(iPhone|iPad|iPod)\b/)?callByLocaiton(url,param):callByIframe(url,param)}var _device=__webpack_require__(2),callWithPromise=(_interopRequireDefault(_device),function(){var callBackCount=0;return function(url){var opts=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise(function(resolve,reject){var callbackName="";opts.callback?callbackName=opts.callback:(callbackName="FAKEPRO_CALLBACK_"+callBackCount++,opts.callback=callbackName),window[callbackName]=function(data){resolve(data),delete window[callbackName]},callProto(url,opts)})}}());module.exports={getUrl:getUrl,call:callProto,callByLocaiton:callByLocaiton,callByIframe:callByIframe,callWithPromise:callWithPromise}},738:function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function open(uid){return new Promise(function(resolve,reject){var tnow=getJSBridge(uid);return tnow?(_fakeProtocol2.default.call(tnow),void resolve(tnow)):reject("uid is empty")})}function getJSBridge(uid){return uid?"tnow://openpage/personalcenter?uid="+uid:""}exports.__esModule=!0,exports.default=open,exports.getJSBridge=getJSBridge;var _fakeProtocol=__webpack_require__(9),_fakeProtocol2=_interopRequireDefault(_fakeProtocol)}});
//# sourceMappingURL=65.416204e87a1a52478d5c.bundle.js.map