(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"+Cau":function(e,t,r){"use strict"
var n=r("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.createMessageBucket=void 0
var a=n(r("lSNA")),l=n(r("zkrS")),c=r("upRB")
function i(t,e){var r=Object.keys(t)
if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t)
e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)}return r}var o={"preview-ready":!(t.createMessageBucket=function(){function l(e){var t=e.type,r=e.payload
try{return s[t]&&s[t]({type:t,payload:r})}catch(e){console.warn("[request] error message data",e,t,r)}}function c(e,t,r){var n=1<arguments.length&&void 0!==t?t:{},a=2<arguments.length&&void 0!==r?r:"*"
return e&&window.parent.postMessage(JSON.stringify({event:e,payload:n}),a)}function e(t){if(t.source!==window&&!t.origin.includes("qiyukf")&&t.data&&"string"==typeof t.data)try{var e=JSON.parse(t.data),r=e.event,n=e.type,a=void 0===n?r:n,i=e.payload,o=l({type:a,payload:void 0===i?{}:i})
o&&c(o.type,o.payload)}catch(e){console.warn("[receive] error message data",e,t)}}return window.addEventListener("message",e),{request:l,send:c,clear:function(){return window.removeEventListener("message",e)}}})},s={"message:get:record":function(){return{type:"message:data:record",payload:o}},"message:set:record":function(e){var t=e.payload,r=t.key,n=t.value
o[r]=n},"message:get:preview-state":function(){var e=u(),t=e.state,r=e.isHighlight
return{type:"message:data:preview-state",payload:function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{}
e%2?i(r,!0).forEach(function(e){(0,a.default)(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(r).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}({},t.model.current,{isHighlight:r})}},"message:set:preview-state":function(e){var t=e.payload,r=t.isHighlight,n=t.screenCid,a=u(),i=a.state.model,o=i.current,l=i.screens,c=a.dispatch
if(void 0!==r&&c({type:"reducer:preview-toolbar:update:highlight",payload:{isHighlight:r}}),o.screenCid&&void 0!==n&&n!==o.screenCid){if(!l.find(function(e){return e.cid===n}))return console.warn("[message:set:preview-state] invalid screenCid")
c({type:"entry:sync-runner:set-screen",payload:{cid:n}})}},"message:get:screen-list":function(){var e=l.default.MB.webpackInterface.store.getState().model,t=e.current
return{type:"message:data:screen-list",payload:e.screens.filter(function(e){return e.project_cid===t.projectCid}).map(function(e){return{cid:e.cid,name:e.name,position:e.position,parent_cid:e.parent_cid,project_cid:e.project_cid}})}},"message:get:notification-state":function(){var e=(l.default.MB.notification&&l.default.MB.notification.store&&l.default.MB.notification.store.getState()||{}).notifications
return{type:"message:data:notification-state",payload:{unreadCount:e?e.notifications.unreadNum:0}}},"message:get:notification-list":function(){var e=(l.default.MB.notification&&l.default.MB.notification.store&&l.default.MB.notification.store.getState()||{}).notifications
return{type:"message:data:notification-list",payload:e?e.notifications.notifications:[]}}},u=function(){var e=l.default.MB.webpackInterface.store,t=e.getState,r=e.dispatch,n=t(),a=(0,c.getIsHighlight)(n),i=n.model.current.projectCid,o=i&&n.model.projects.find(function(e){return e.cid===i})
return{getState:t,dispatch:r,state:n,project:o,isHighlight:a}}},"/5+U":function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.immutableTransformCache=function(e){var t,r
return function(){return function(e,t){if(!e||e.length!==t.length)return!1
for(var r=0,n=e.length;r<n;r++)if(e[r]!==t[r])return!1
return!0}(r,arguments)||(t=e.apply(null,arguments),r=arguments),t}},t.canBackToWorkspace=t.delRecentColor=t.saveRecentColor=t.getHistoryColor=t.isChinese=t.isEnglish=t.downloadFail=t.setTimeoutAsync=t.getMinBoundingRect=t.save2Digital=t.downloadWithATag=t.adjustImageRect=t.adapterScreen=t.unescapeHTML=void 0
function n(e){return a[e]||e}var a={"&amp;":"&","&lt;":"<","&gt;":">"},i=/(&amp;|&lt;|&gt;)/g
t.unescapeHTML=function(e){return e&&e.replace(i,n)}
t.adapterScreen=function(e,t,r){var n=2<arguments.length&&void 0!==r?r:0
return Number(parseFloat((1/(1<arguments.length&&void 0!==t?t:1)*(0<arguments.length&&void 0!==e?e:0)).toFixed(2)))+n}
t.adjustImageRect=function(e){var t=e.image,r=e.adjust,n=t.naturalWidth
t.naturalHeight<=n?t.style.maxWidth=r+"px":t.style.maxHeight=r+"px"}
var l=/\s|<|>|《|》|:|：|？|\?|\\|\/|"|”|\||\./g
t.downloadWithATag=function(e){var t=e.url,r=e.name,n=e.type,a=document.createElement("a"),i=function(e){return e&&e.replace(l,"_")}(r)||"未命名",o="".concat(encodeURIComponent(i))
n?a.href="".concat(t,"?attname=").concat(o,".").concat(n):(a.setAttribute("download",o),a.href="".concat(t)),a.click()}
t.save2Digital=function(e){return Number(e.toFixed(2))}
t.getMinBoundingRect=function(e){var t=e.width,r=e.height,n=e.left,a=e.top,i=e.rotate,o=void 0===i?0:i
if(0===o)return[a,n,t,r]
var l=MB.atan2(t,r),c=l-o,s=c-2*l,u=180+c,d=180+s,f=n+t/2,p=a+r/2,h=MB.hypotenuse(t/2,r/2),m=1/0,v=1/0,g=-1/0,y=-1/0
return[c,s,u,d].forEach(function(e){var t=Math.round(f+h*MB.cos(e)),r=Math.round(p+h*MB.sin(e))
t<m&&(m=t),r<v&&(v=r),g<t&&(g=t),y<r&&(y=r)}),[v,m,g-m,y-v]}
t.setTimeoutAsync=function(t){return new Promise(function(e){return setTimeout(e,t)})}
t.downloadFail=function(){return console.error("下载失败")}
t.isChinese=function(e){var t="".concat(e).charCodeAt(0)
return 19968<=t&&t<=40869}
t.isEnglish=function(e){return/\w/.test(e)}
function o(){try{var e=MB.localStorageDelegate.getItem("user_pick_color")
return JSON.parse(e||"[]")}catch(e){return[]}}t.getHistoryColor=o
t.saveRecentColor=function(e){var t=o()
return t.includes(e)?{history:t,focusColor:e}:(t.unshift(e),40<t.length&&t.pop(),MB.localStorageDelegate.setItem("user_pick_color",JSON.stringify(t)),{history:t,focusColor:null})}
t.delRecentColor=function(e){var t=o(),r=t.indexOf(e)
return t.splice(r,1),MB.localStorageDelegate.setItem("user_pick_color",JSON.stringify(t)),t}
t.canBackToWorkspace=function(){var t
try{t=(window.parent===window||/^\/app\/(design|preview)/.test(window.parent.location.pathname))&&(MB.isDashboard||!MB.f.inSharing&&"file:"!==window.location.protocol)}catch(e){console.warn(e),t=!1}return t}},"/Mon":function(e,t,r){"use strict"
var n=r("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.StyledRightPane=void 0
var a=n(r("vOnD")).default.div.withConfig({displayName:"styles__StyledRightPane",componentId:"hqgthc-0"})(["position:relative;height:100%;transition:all 0.3s ease-in-out;z-index:100;.preview-panel-wrapper{position:absolute;top:0;left:0;height:100%;}"])
t.StyledRightPane=a},"/cyv":function(e,t,r){"use strict"
var n=r("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:l,t=1<arguments.length?arguments[1]:void 0,r=t.type,n=t.payload
switch(r){case"container:modal:open":return o({},n,{isOpen:!0})
case"container:modal:close":return o({},e,{isOpen:!1})}return e}
var a=n(r("lSNA"))
function i(t,e){var r=Object.keys(t)
if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t)
e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{}
e%2?i(r,!0).forEach(function(e){(0,a.default)(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(r).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}var l={isOpen:!1,type:"alert",alertType:"alert",title:"",desc:"",onClose:function(){return null},onCancel:null,onConfirm:null,cancelText:void 0,confirmText:void 0,canCancel:!0,canConfirm:!0,canClose:!0}},"/rSK":function(e,t,r){"use strict"
var n=r("284h"),a=r("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.CommentMarker=void 0
var s=a(r("pVnL")),l=a(r("lwsE")),i=a(r("W8MJ")),c=a(r("a1gu")),u=a(r("Nsbk")),o=a(r("7W2i")),d=a(r("lSNA")),f=n(r("q1tI")),p=a(r("17x9")),h=a(r("vOnD")),m=r("fiFu")
function v(t,e){var r=Object.keys(t)
if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t)
e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)}return r}function g(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{}
e%2?v(r,!0).forEach(function(e){(0,d.default)(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):v(r).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}var y=function(e){function n(e){var a;(0,l.default)(this,n),a=(0,c.default)(this,(0,u.default)(n).call(this,e))
var i={isDragging:!1,position:{left:0,top:0}},t=g({},S,{mousemove:(0,m.muteEvent)(function(e){var t=a.props,r=t.commentThread,n=t.markerOperations.getMarkerPosition(e);(a.state.isDragging||function(e,t){var r=e.left-t.left,n=e.top-t.top
return w<=r*r+n*n}(r,n))&&a.setState({isDragging:!0,position:n})}),mouseup:(0,m.muteEvent)(function(e){if(o(),a.state.isDragging){var t=a.props,r=t.commentThread,n=t.markerOperations
n.doUpdateCommentThread(g({cid:r.cid},n.getMarkerPosition(e)))}else setTimeout(function(){var e=a.props,t=e.isFocus,r=e.commentThread
e.markerOperations.setFocusCommentThreadCid(t?null:r.cid)},0)
a.setState(i)}),mouseleave:function(){o(),a.props.markerOperations.setHoverFocusCommentThreadCid(null),a.setState(i)}}),r=g({},S,{mouseup:t.mouseup}),o=function(){return a.props.markerOperations.removeContainerEventListener(a.props.isEditable?t:r)}
return a.markerListenerMap={onMouseDown:(0,m.muteEvent)(function(){return a.props.markerOperations.addContainerEventListener(a.props.isEditable?t:r)}),onMouseEnter:(0,m.muteEvent)(function(){return!a.props.isFocus&&a.props.markerOperations.setHoverFocusCommentThreadCid(a.props.commentThread.cid)}),onMouseLeave:(0,m.muteEvent)(function(){return a.props.isFocus&&a.props.markerOperations.setHoverFocusCommentThreadCid(null)}),onMouseUp:m.MUTE_EVENT,onDoubleClick:m.MUTE_EVENT,onClick:m.MUTE_EVENT},a.state=i,a}
return(0,o.default)(n,e),(0,i.default)(n,[{key:"render",value:function(){var e=this.props,t=e.commentThread,r=e.scale,n=e.isFocus,a=e.isFade,i=e.commentMarkerIndex,o=this.state,l=o.isDragging,c=o.position
return f.default.createElement(b,{className:n?"focus":!n&&a?"fade":"",style:{left:"".concat((l?c.left:t.left)*r,"px"),top:"".concat((l?c.top:t.top)*r,"px")}},f.default.createElement("span",(0,s.default)({tabIndex:i},this.markerListenerMap),i))}}]),n}(f.PureComponent)
t.CommentMarker=y,(0,d.default)(y,"propTypes",{commentMarkerIndex:p.default.number.isRequired,commentThread:p.default.object.isRequired,scale:p.default.number.isRequired,isEditable:p.default.bool,isFocus:p.default.bool,isFade:p.default.bool,markerOperations:p.default.object.isRequired})
var b=h.default.div.withConfig({displayName:"CommentMarkerPanelMarker__CommentMarkerDiv",componentId:"kuapf2-0"})(["position:absolute;width:","px;height:","px;overflow:visible;& > span{display:flex;justify-content:center;align-items:center;cursor:pointer;outline:none;margin-left:","px;margin-top:","px;width:","px;height:","px;font-size:14px;line-height:",
"px;box-shadow:0 2px 10px rgba(108,0,0,0.22);border:2px solid #fff;border-radius:100%;background:#ff7100;color:#fbfbfc;transition:all 0.1s ease-in;transform:scale(1);}&.focus > span{transform:scale(1.21);}&.fade > span{opacity:0.5;}"],0,0,-14,-14,28,28,28),S={mouseup:m.MUTE_EVENT,mousedown:m.MUTE_EVENT,mousemove:m.MUTE_EVENT,mouseleave:m.MUTE_EVENT,mouseout:m.MUTE_EVENT,click:m.MUTE_EVENT,dblclick:m.MUTE_EVENT},w=225},"0uCA":function(e,t,r){"use strict"
var n=r("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var o=n(r("lwsE")),a=n(r("W8MJ")),l=n(r("a1gu")),c=n(r("Nsbk")),s=n(r("PJYZ")),u=n(r("7W2i")),d=n(r("lSNA")),f=n(r("q1tI")),i=n(r("17x9")),p=r("1qiG"),h=function(e){function i(){var e,a;(0,o.default)(this,i)
for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n]
return a=(0,l.default)(this,(e=(0,c.default)(i)).call.apply(e,[this].concat(r))),(0,d.default)((0,s.default)(a),"genLines",function(e,t){var r=a.props.style,n=[]
return 0<e.top&&n.push(f.default.createElement("div",{key:"top",className:"line top",style:{borderTopStyle:"".concat(r.dashed?"dashed":"solid"),borderTopColor:r.colorForLines,top:(0,p.toPercentage)(e.top/t.height)}})),e.left+e.width<t.width&&n.push(f.default.createElement("div",{key:"right",className:"line right",style:{borderLeftStyle:"".concat(r.dashed?"dashed":"solid"),borderLeftColor:r.colorForLines,left:(0,p.toPercentage)((e.left+e.width)/t.width)}})),e.top+e.height<t.height&&n.push(
f.default.createElement("div",{key:"bottom",className:"line bottom",style:{borderTopStyle:"".concat(r.dashed?"dashed":"solid"),borderTopColor:r.colorForLines,top:(0,p.toPercentage)((e.top+e.height)/t.height)}})),0<e.left&&n.push(f.default.createElement("div",{key:"left",className:"line left",style:{borderLeftStyle:"".concat(r.dashed?"dashed":"solid"),borderLeftColor:r.colorForLines,left:(0,p.toPercentage)(e.left/t.width)}})),n}),a}return(0,u.default)(i,e),(0,a.default)(i,[{key:"render",value:function(){
var e=this.props,t=e.refRect,r=e.screen
return f.default.createElement("div",{className:"verbose-auxiliary-lines"},this.genLines(t,r))}}]),i}(f.default.Component);(t.default=h).propTypes={refRect:i.default.object,screen:i.default.object,style:i.default.object}},"18l9":function(e,t,r){"use strict"
var n=r("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var a=r("/MKj"),i=r("G4qV"),o=r("upRB"),l=r("1iCU"),c=r("pVAx"),s=n(r("tRkt")),u=(0,i.createSelector)([o.getPreference,o.getCurrentMode,o.getIsMultiScreenProject],function(e,t,r){return{toolbarActiveItem:t,isScreenPanelShow:e.layout===c.CLASSIC&&r,isLayerPanelShow:e.layout!==c.CLASSIC&&t===l.INSPECT,isCommentPanelShow:e.layout!==c.CLASSIC&&t==l.COMMENT}}),d=(0,a.connect)(function(e){return u(e)})(s.default)
t.default=d},"1Uxz":function(e,t,r){"use strict"
var n=r("284h"),a=r("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.ImageInfo=void 0
var o=a(r("lwsE")),l=a(r("W8MJ")),c=a(r("a1gu")),s=a(r("Nsbk")),u=a(r("PJYZ")),d=a(r("7W2i")),f=a(r("lSNA")),p=n(r("q1tI")),i=a(r("17x9")),h=a(r("sEfC")),m=r("rbsZ"),v=r("/5+U"),g=r("RUem"),y=function(e){function i(){var e,n;(0,o.default)(this,i)
for(var t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a]
return n=(0,c.default)(this,(e=(0,s.default)(i)).call.apply(e,[this].concat(r))),(0,f.default)((0,u.default)(n),"imageRef",function(e){return n.$image=e}),(0,f.default)((0,u.default)(n),"handleClick",function(){var e=n.props,t=e.imageSetZip,r=e.name
MB&&MB.currentProject&&!MB.currentProject.limitation.inspectable?(0,m.openRenewModal)("inspectable"):(0,v.downloadWithATag)({url:t,name:r,type:"zip"})}),(0,f.default)((0,u.default)(n),"handleOnload",function(){(0,v.adjustImageRect)({image:n.$image,adjust:38}),n.setState({imageLoad:!0})}),(0,f.default)((0,u.default)(n),"handleError",function(){console.error("image info error")}),(0,f.default)((0,u.default)(n),"debounceClick",(0,h.default)(n.handleClick,500,{leading:!0})),n}return(0,d.default)(i,e),(0,
l.default)(i,[{key:"render",value:function(){var e=this.props,t=e.imageSet,r=e.name,n=t[0].src,a={background:"url(".concat(b,") left top"),backgroundSize:"cover"}
return p.default.createElement(g.WrapComponent,null,p.default.createElement("div",{className:"slice-title"},I18N.preview_panel.export,p.default.createElement("span",{onClick:this.debounceClick},I18N.preview_panel.download_single)),p.default.createElement("div",{className:"slice-panel"},p.default.createElement("div",{className:"slice-item-wrap",style:a},p.default.createElement("img",{src:n,alt:r,ref:this.imageRef,onLoad:this.handleOnload,onError:this.handleError})),p.default.createElement("p",{
className:"slice-item-name"},r)))}}]),i}(p.PureComponent)
t.ImageInfo=y,(0,f.default)(y,"propTypes",{imageSetZip:i.default.string,imageSet:i.default.array,name:i.default.string})
var b="/images/preview/slice-bg.png"},"1gVK":function(e,t,r){"use strict"
var i,n,a,o=r("TqRt")(r("cDf5"))
function l(e){if(this.hasDeviceMotion="ondevicemotion"in i,this.options={threshold:15,timeout:1e3},"object"===(0,o.default)(e))for(var t in e)e.hasOwnProperty(t)&&(this.options[t]=e[t])
if(this.lastTime=new Date,this.lastX=null,this.lastY=null,this.lastZ=null,"function"==typeof n.CustomEvent)this.event=new n.CustomEvent("shake",{bubbles:!0,cancelable:!0})
else{if("function"!=typeof n.createEvent)return!1
this.event=n.createEvent("Event"),this.event.initEvent("shake",!0,!0)}}(a="undefined"!=typeof window?window:void 0).Shake=(n=(i=a).document,l.prototype.reset=function(){this.lastTime=new Date,this.lastX=null,this.lastY=null,this.lastZ=null},l.prototype.start=function(){this.reset(),this.hasDeviceMotion&&i.addEventListener("devicemotion",this,!1)},l.prototype.stop=function(){this.hasDeviceMotion&&i.removeEventListener("devicemotion",this,!1),this.reset()},l.prototype.devicemotion=function(e){
var t=e.accelerationIncludingGravity
if(t){var r,n,a
if(null===this.lastX&&null===this.lastY&&null===this.lastZ)return this.lastX=t.x,this.lastY=t.y,void(this.lastZ=t.z)
r=Math.abs(this.lastX-t.x),n=Math.abs(this.lastY-t.y),a=Math.abs(this.lastZ-t.z),(r>this.options.threshold&&n>this.options.threshold||r>this.options.threshold&&a>this.options.threshold||n>this.options.threshold&&a>this.options.threshold)&&(new Date).getTime()-this.lastTime.getTime()>this.options.timeout&&(i.dispatchEvent(this.event),this.lastTime=new Date),this.lastX=t.x,this.lastY=t.y,this.lastZ=t.z}},l.prototype.handleEvent=function(e){if("function"==typeof this[e.type])return this[e.type](e)},l)},
"1qiG":function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.toPercentage=t.getDistancesForDirections=void 0
var c=r("ZXhj")
t.getDistancesForDirections=function(e,t){if((0,c.checkIfTwoRectsOverlap)(e,t))return{top:e.top-t.top,right:t.left+t.width-(e.left+e.width),bottom:t.top+t.height-(e.top+e.height),left:e.left-t.left}
var r={},n=function(e,t){var r=[],n=(0,c.getMinContainingRect)(e,t)
if(n.width<e.width+t.width)r[0]=null
else{var a=n.width-(e.width+t.width),i=t.left>e.left
r[0]=i?a:-a}if(n.height<e.height+t.height)r[1]=null
else{var o=n.height-(e.height+t.height),l=t.top>e.top
r[1]=l?o:-o}return r}(e,t)
return 0<n[0]?r.right=n[0]:n[0]<0&&(r.left=Math.abs(n[0])),0<n[1]?r.bottom=n[1]:n[1]<0&&(r.top=Math.abs(n[1])),r}
t.toPercentage=function(e){return"".concat(100*e,"%")}},"20hc":function(e,t,r){"use strict"
var n=r("TqRt"),m=n(r("o0o1")),a=n(r("yXPU")),v=n(r("q1tI")),g=n(r("i8i4")),o=r("XkTy"),i=r("tajm"),l=r("tQ2B"),c=r("t3Un"),y=n(r("NkXT")),s=n(r("dYO+")),u=n(r("udLg")),d=window,b=d.$,S=d.MB,f=d.md5
S.f.inSharing=!0
function w(){return window.MBData}S.load=function(){var t=(0,a.default)(m.default.mark(function e(r){var n,a,i,o,l,c,s,u,d,f,p,h
return m.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=r.projectAccessToken,a=r.projectEncryptedPassword,i=r.projectName,o=r.projectIconUrl,l=r.projectUpdatedAt,c=r.isPasswordRequired,s=r.isProjectExportable,u=r.urlClientIOS,d=r.urlClientAndroid,S.webpackInterface.renderPreviewAlert(),S.supportedBrowser()){e.next=6
break}return b("#splash").hide(),b("#loading").hide(),e.abrupt("return")
case 6:return f=S.isMac()?"mac":S.isWindows()?"windows":"other-os",b("html").addClass(f),(S.isStandAlone()||S.isIOSClient())&&b("html").addClass("is-full-screen"),p=void 0,a=a||new URLSearchParams(location.search).get("password")||(t=n,S.localStorageDelegate.getItem("".concat(t,"_pwd"))),e.next=13,E(c,n,a)
case 13:if(e.t0=e.sent,e.t0){e.next=16
break}e.t0=[]
case 16:if(h=e.t0,p=h[0],a=h[1],p){e.next=21
break}return e.abrupt("return")
case 21:if(!S.isMobile()||S.isInApp||S.isStandAlone()||w()||S.isEmbedded()){e.next=24
break}return e.next=24,new Promise(function(e){b("#loading").hide(),g.default.render(v.default.createElement(y.default,{projectAccessToken:n,projectEncryptedPassword:a,projectName:i,projectIconUrl:o,projectUpdatedAt:l,isProjectExportable:s,urlClientIOS:u,urlClientAndroid:d,loadProject:e}),document.getElementById("workspace"))})
case 24:b(".indicator").css("height","100%"),setTimeout(function(){return C(p)},300)
case 26:case"end":return e.stop()}var t},e)}))
return function(e){return t.apply(this,arguments)}}()
var E=function(){var n=(0,a.default)(m.default.mark(function e(t,r,n){var a,i
return m.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p(r,n)
case 2:if((a=e.sent)||t){e.next=6
break}return(0,o.alertAsync)({desc:I18N.no_permission_to_app}),e.abrupt("return")
case 6:i=1/0
case 7:if(!a&&i)return i--,e.t0=f,e.next=12,(0,o.promptGetPasswordAsync)()
e.next=19
break
case 12:return e.t1=e.sent,n=(0,e.t0)(e.t1),e.next=16,p(r,n)
case 16:a=e.sent,e.next=7
break
case 19:if(a){e.next=23
break}return console.log("Failed prompt password, again"),setTimeout(function(){return(0,o.alertAsync)({desc:t?I18N.invalid_credential:"Failed to load this app."})},320),e.abrupt("return")
case 23:return e.abrupt("return",[a,n])
case 24:case"end":return e.stop()}},e)}))
return function(e,t,r){return n.apply(this,arguments)}}()
S.renderEmbedShell=function(e){var t=e.project,r=e.shellType,n=e.isLandscape
g.default.render(v.default.createElement(s.default,{project:t,shellType:r,isLandscape:n}),document.getElementById("project-shell"))}
var p=function(){var r=(0,a.default)(m.default.mark(function e(a,i){var o
return m.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!w()){e.next=5
break}e.t0=h(i),e.next=8
break
case 5:return e.next=7,(0,c.requestJSON)("/app/".concat(a,".json").concat(i?"?password=".concat(i):""))
case 7:e.t0=e.sent
case 8:return o=e.t0,r=a,n=i,S.localStorageDelegate.setItem("".concat(r,"_pwd"),n),e.abrupt("return",o)
case 13:e.prev=13,e.t1=e.catch(0),console.log("[getProjectFullData] failed: ".concat(e.t1)),t=a,S.localStorageDelegate.removeItem("".concat(t,"_pwd"))
case 17:case"end":return e.stop()}var t,r,n},e,null,[[0,13]])}))
return function(e,t){return r.apply(this,arguments)}}(),h=function(e){var t=w(),r=t.project.password
if(r&&r!==e)throw new Error("[offline] password mismatch")
return t},C=function(e){var t=e.org,r=e.team,n=(0,l.refreshProjectFullData)(e)
S.isEmbedded()||(0,l.refreshMessagePreferenceData)(S.preferenceData),S.currentOrg=t,S.currentTeam=r,S.currentProject=n,S.isMobile()||S.isEmbedded()||(0,i.patchGlobalAutoSaverPusher)(),b("title").html(n.name),b("#loading").hide(),S.checkFA(function(){S.webpackInterface.init(),S.Pusher&&S.user.id&&"guest"!==S.webpackInterface.store.getState().model.current.userRole&&S.Pusher.enableSocketChannel(n.cid)
var e=location.hash||"",t=e&&e.startsWith("#screen=")&&e.substr("#screen=".length),r=Screen.find(t)||n.homeScreen()
b("body").data("scale",100),(S.isMobile()||S.isEmbedded())&&(n.scale=100,n.lsave(!1)),S.currentProject=n,S.currentScreen=r,S.runner=new u.default,S.webpackInterface.renderPreview(document.querySelector("#workspace")),setTimeout(function(){b("#workspace").show(),S.runner.init(n,r)},100)})}},"2AqR":function(e,t,r){"use strict"
var n=r("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var a=r("/MKj"),i=n(r("H27A")),l=r("upRB"),o=(0,a.connect)(function(e){var t=e.container,r=t.common.scale,n=t.previewSetting,a=n.toolbarActiveItem,i=n.loadSliceUrl,o=(0,l.getPreference)(e).show_toolbar_text
return{scale:r,project:(0,l.getCurrentProject)(e),toolbarActiveItem:a,loadSliceUrl:i,isScrollable:(0,l.getIsScrollable)(e),isHighlight:(0,l.getIsHighlight)(e),isStickyShow:(0,l.getIsStickyShow)(e),shellType:(0,l.getShellType)(e),showToolBarText:o}})(i.default)
t.default=o},"2M3O":function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.requestSnapshotZip=t.requestSnapshot=t.requestThumbnail=void 0
var n=r("SVae"),a=r("3ceZ")
t.requestThumbnail=function(e){return((0,a.isPublicScreenAvailable)(e)?a.requestThumbnailPublic:n.requestThumbnailLocalhost)(e)}
t.requestSnapshot=function(e){return((0,a.isPublicScreenAvailable)(e)?a.requestSnapshotPublic:n.requestSnapshotLocalhost)(e)}
t.requestSnapshotZip=function(e){return((0,a.isPublicProjectAvailable)(e)?a.requestSnapshotZipPublic:n.requestSnapshotZipLocalhost)(e)}},"2b0G":function(e,t,r){"use strict"
var n=r("284h"),a=r("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var i=a(r("lwsE")),o=a(r("W8MJ")),l=a(r("a1gu")),c=a(r("Nsbk")),s=a(r("7W2i")),u=a(r("lSNA")),d=a(r("17x9")),f=n(r("q1tI")),p=r("6XO9")
r("mxnB")
var h=function(e){function t(){return(0,i.default)(this,t),(0,l.default)(this,(0,c.default)(t).apply(this,arguments))}return(0,s.default)(t,e),(0,o.default)(t,[{key:"render",value:function(){return f.default.createElement(f.default.Fragment,null,f.default.createElement("span",{className:"last-screen","data-action":"last",onClick:this.props.onClick},f.default.createElement(p.SVG,{className:"left-arrow",name:"angle_bracket_left"})),f.default.createElement("span",{className:"next-screen","data-action":"next",
onClick:this.props.onClick},f.default.createElement(p.SVG,{className:"right-arrow",name:"angle_bracket_right"})))}}]),t}(f.PureComponent)
t.default=h,(0,u.default)(h,"propTypes",{onClick:d.default.func})},"2eJi":function(e,t,r){"use strict"
var n=r("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.entryMap=void 0
var y=n(r("J4zp")),a=n(r("lSNA")),o=n(r("zkrS")),b=r("upRB"),i=r("6UMJ"),l=r("CWx7"),c=r("4daP"),S=r("Gbs1"),s=r("rbsZ"),u=r("1iCU"),d=r("oose")
function f(t,e){var r=Object.keys(t)
if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t)
e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)}return r}var p=function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{}
e%2?f(r,!0).forEach(function(e){(0,a.default)(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):f(r).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}({},i.keyEntry,{},l.runnerEntry,{},c.playSettingEntry,{"entry:init:preview:related:data":function(e){var t=e.dispatch
t({type:"preview:update:state",payload:{preference:MB.preference()}}),t({type:"entry:refresh:project-related"})},"entry:preview:select":function(e,t){var r=e.dispatch,n=e.getState,a=t.payload.toolbarActiveItem
if(a!=n().container.previewSetting.toolbarActiveItem){if(a===u.INSPECT)r({type:"SET_VISIBILITY_SCREEN",payload:{screenID:o.default.MB.currentScreen?o.default.MB.currentScreen.cid:-1}})
else if(a===u.COMMENT){var i=(0,d.getProjectAllowCommentStatus)(o.default.MB.currentProject)
"deny_limitation"===i&&(0,s.openRenewModal)("comment_".concat(i),{action:"comment_".concat(i),renewRedirectParams:o.default.MB.currentProject.team_cid||o.default.MB.currentProject.owner_id===o.default.MB.user.id?{access_token:o.default.MB.currentProject.access_token}:null})}r({type:"reducer:preview-toolbar:update",payload:{toolbarActiveItem:a}}),setTimeout(function(){(0,b.getRunnerActiveScreenCid)(n())&&o.default.MB.runner.reload()})}},"entry:init:preview:scale":function(e){var t=e.getState,r=e.dispatch,
n=t(),a=(0,b.getCurrentProject)(n)
if(MB.isUIChina()&&"car_play"===a.model)r({type:"preview:set:scale",payload:{scale:40}})
else{var i=function(e){return Number(MB.localStorageDelegate.getItem("preview_scale_".concat(e)))}(a.cid)
i&&!MB.isForum()?r({type:"preview:set:scale",payload:{scale:i}}):r({type:"entry:auto-fit:preview:scale"})}},"entry:auto-fit:preview:scale":function(e){var t=e.getState,r=e.dispatch,n=t(),a=n.container.previewSetting.isFullScreenMode,i=(0,b.getCurrentProject)(n),o=(0,b.getCurrentScreen)(n),l=(0,b.getShellType)(n),c=(0,S.getProjectShell)(i,l),s="landscape"===o.orientation?[c.height,c.width]:[c.width,c.height],u=(0,y.default)(s,2),d=u[0],f=u[1],p=i.template?.8:1,h=a||MB.isForum()?0:500,m=window.innerWidth*p-h,
v=window.innerHeight*p-56,g=100*Math.min((v-40)/f,(m-40)/d)
r({type:"preview:set:scale",payload:{scale:Math.min(Math.max(g,20),100)}})},"entry:preview:set:scale":function(e,t){var r=e.dispatch,n=e.getState,a=t.payload.scale,i=n(),o=i.model.current.projectCid
i.container.previewSetting.isFullScreenMode||function(e,t){MB.localStorageDelegate.setItem("preview_scale_".concat(e),t)}(o,a),r({type:"preview:set:scale",payload:{scale:a}})},"entry:preview:set:canvas:offset":function(e,t){var r=e.getState,n=e.dispatch,a=t.payload.offset,i=r(),o=(0,b.getCurrentScreen)(i),l=(0,b.getCurrentScale)(i),c=document.querySelector("#preview_scrollBar_viewport").getBoundingClientRect(),s=c.width,u=c.height,d=Math.max(3.5*s,o.width*l/100*2),f=Math.max(3.5*u,o.height*l/100*2),p=a.x,
h=a.y
n({type:"preview:set:canvas:offset",payload:{offset:{x:p=-Math.max(Math.min(-p,d/2),-d/2),y:h=-Math.max(Math.min(-h,f/2),-f/2)}}})},"entry:enter:full-screen-mode":function(e){var t=e.dispatch
MB.event("preview","工具栏: 全屏模式开启"),t({type:"entry:preview:select",payload:{toolbarActiveItem:"preview"}}),t({type:"reducer:preview-toolbar:fullscreen",payload:{isFullScreenMode:!0}}),t({type:"entry:auto-fit:preview:scale"}),t({type:"preview:set:canvas:offset",payload:{offset:{x:0,y:-28}}})},"entry:exit:fill-screen-mode":function(e){var t=e.dispatch
MB.event("preview","工具栏: 全屏模式关闭"),t({type:"reducer:preview-toolbar:fullscreen",payload:{isFullScreenMode:!1}}),t({type:"entry:init:preview:scale"}),t({type:"preview:set:canvas:offset",payload:{offset:{x:0,y:0}}})}})
t.entryMap=p},"2s0x":function(e,t,r){e.exports={"slice-container":"yWKU8qVPbqrRIRSJ_TjGi","slice-load-wrap":"_3WsSTJxbz12iOHZ8ntxQf8","slice-item":"_2vvvzR2E0SoIZOD3DAqHza",active:"_2WpARMx4pqMBHK1KM0kjLj",download:"_1hNQ5s7ZGKL2NIxtApkdLY","icon-download":"_2Bxe5XoVHVItE0i88jpN6d","no-slice":"_2d9jp1Mvca7Pr9eZSIevfN",spinner:"_1u-FVwfgZb3ahxMGw1-PnC","rotate-infinite":"_3nSb5BvCbI3mKp-n2u4hun","download-slice-load":"_3tq61brpxkFdCxReM8KHY-"}},"3caq":function(e,t,r){"use strict"
var n=r("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.createWorkspacePusher=void 0
var S=n(r("o0o1")),g=n(r("yXPU")),y=n(r("lSNA")),w=r("Edok"),E=r("Clcl"),C=r("RrAf"),f=r("qYFl")
function k(t,e){var r=Object.keys(t)
if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t)
e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)}return r}var _=window.MB
t.createWorkspacePusher=function(e){function b(e){var t=0<arguments.length&&void 0!==e?e:[],o=h(),r=t.reduce(function(e,t){var r=t.object,n=r.cid,a=r.mtime,i=void 0===a?o:a
return e[n]=i,e},{})
return n(r)}var t,r,n=e.filterStaleData,a=function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{}
e%2?k(r,!0).forEach(function(e){(0,y.default)(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):k(r).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}({},C.initialSocketState,{userId:_.user.id,projectCidList:[]}),i={"broadcast:user:data":function(e){e.type
var t=e.payload,r=b(t).remoteStaleCidSet,n=!0,a=!1,i=void 0
try{for(var o,l=t[Symbol.iterator]();!(n=(o=l.next()).done);n=!0){var c=o.value,s=c.action,u=c.className,d=c.object
x(r,u,s,d)}}catch(e){a=!0,i=e}finally{try{n||null==l.return||l.return()}finally{if(a)throw i}}},"broadcast:upgrade-notice:new":function(e){e.type
var t=e.payload.target_users,r=["pro","mockingbot.com","mockingbot.in"].some(function(e){return location.hostname.includes(e)})?"pro":"free"
"free"===t&&"pro"==r||"pro"===t&&"free"==r||_.action("entry:update:upgrade-notice-indicator-status",{status:"TWINKLE"})}},o={"broadcast:project:data":(r=(0,g.default)(S.default.mark(function e(t){var r,n,a,i,o,l,c,s,u,d,f,p,h
return S.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.type,r=t.payload,n=b(r),a=n.remoteStaleCidSet,o=!(i=!0),l=void 0,e.prev=6,c=r[Symbol.iterator]()
case 8:if(i=(s=c.next()).done){e.next=15
break}return u=s.value,d=u.action,f=u.className,p=u.object,h=u.extraInfo,e.next=12,T(a,f,d,p,h)
case 12:i=!0,e.next=8
break
case 15:e.next=21
break
case 17:e.prev=17,e.t0=e.catch(6),o=!0,l=e.t0
case 21:e.prev=21,e.prev=22,i||null==c.return||c.return()
case 24:if(e.prev=24,o)throw l
e.next=27
break
case 27:return e.finish(24)
case 28:return e.finish(21)
case 29:case"end":return e.stop()}},e,null,[[6,17,21,29],[22,,24,28]])})),function(e){return r.apply(this,arguments)}),"broadcast:project:batch-save":(t=(0,g.default)(S.default.mark(function e(t){var r,n,a,i,o,l,c,s,u,d,f,p,h,m,v,g,y
return S.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.type,r=t.payload,n=r.fromUser,a=r.rootProjectCid,i=r.batchSaveQueue,o=(void 0===i?[]:i).map(function(e){var t=e.method,r=e.body,n=e.extraInfo
return{className:n.className,action:"PUT"===t?"update":"DELETE"===t?"destroy":"POST"===t?"create":"",object:r?JSON.parse(r):{cid:n.cid},extraInfo:n}}),l=b(o),c=l.remoteStaleCidSet,u=!(s=!0),d=void 0,e.prev=7,f=o[Symbol.iterator]()
case 9:if(s=(p=f.next()).done){e.next=16
break}return h=p.value,m=h.className,v=h.action,g=h.object,y=h.extraInfo,e.next=13,T(c,m,v,g,y,a,n)
case 13:s=!0,e.next=9
break
case 16:e.next=22
break
case 18:e.prev=18,e.t0=e.catch(7),u=!0,d=e.t0
case 22:e.prev=22,e.prev=23,s||null==f.return||f.return()
case 25:if(e.prev=25,u)throw d
e.next=28
break
case 28:return e.finish(25)
case 29:return e.finish(22)
case 30:case"end":return e.stop()}},e,null,[[7,18,22,30],[23,,25,29]])})),function(e){return t.apply(this,arguments)})},l=(0,C.createSocketStore)({initialState:a,socketPayloadListenerMap:i,socketPayloadQueueAsyncListenerMap:o}),c=l.getState,s=l.setState,u=l.addEventListener,d=l.removeEventListener,f=l.destroy,p=l.getIsSocketConnected,h=l.getSocketTimestamp,m=l.sendSocketPayloadAsync
u("socket:open",function(){var e=c().projectCidList
e.length&&m("join:projects",{projectCidList:e}).catch(E.REPORT_ERROR)})
var v=function(){var t=(0,g.default)(S.default.mark(function e(t){var r,n
return S.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=c(),n=r.projectCidList,e.abrupt("return",!n.includes(t)&&m("join:projects",{projectCidList:[t]}).then(function(e){s({projectCidList:(0,w.arrayMatchPush)(n,t)})},E.REPORT_ERROR))
case 2:case"end":return e.stop()}},e)}))
return function(e){return t.apply(this,arguments)}}()
return{addEventListener:u,removeEventListener:d,destroy:f,getIsSocketConnected:p,getSocketTimestamp:h,joinProject:v,leaveProject:function(t){var r=c().projectCidList
return r.includes(t)&&m("leave:projects",{projectCidList:[t]}).then(function(e){s({projectCidList:(0,w.arrayMatchDelete)(r,t)})},E.REPORT_ERROR)},requestBatchSave:function(e){var t=e.batchSaveQueue,r=void 0===t?[]:t,n=e.rootProjectCid,a=void 0===n?"":n,i=e.fromUser
return m("request:project:batch-save",{batchSaveQueue:r,rootProjectCid:a,fromUser:void 0===i?{}:i})},enableSocketChannel:v,resetSocketChannel:function(){var e=c().projectCidList
return m("leave:projects",{projectCidList:e}).then(function(e){s({projectCidList:[]})},E.REPORT_ERROR)}}}
var x=function(e,t,r,n){e.has(n.cid)||(0,f.isRemoteMtimeStale)(t,n.cid,n.mtime)||("Team"===t?(0,f.updateTeam)(r,n):"Project"===t?(0,f.updateProject)(r,n):"Collaborator"===t&&(0,f.updateCollaborator)(r,n))},T=function(){var o=(0,g.default)(S.default.mark(function e(t,r,n,a,i,o){var l,c,s,u,d=arguments
return S.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(l=6<d.length&&void 0!==d[6]?d[6]:{},t.has(a.cid)||(0,f.isRemoteMtimeStale)(r,a.cid,a.mtime))return e.abrupt("return")
e.next=3
break
case 3:if("Asset"===r)return e.abrupt("return",(0,f.updateAsset)(n,a))
e.next=5
break
case 5:if("PointComments::Comment"===r||"Comment"===r)return e.abrupt("return",_.webpackInterface&&_.webpackInterface.pushData("comments",n,a))
e.next=7
break
case 7:if("PointComments::Thread"===r||"CommentThread"===r)return e.abrupt("return",_.webpackInterface&&_.webpackInterface.pushData("comment-threads",n,a))
e.next=9
break
case 9:if(_.f.inSharing||!_.currentProject)return e.abrupt("return")
e.next=11
break
case 11:if(e.t0=f.updateWorkspaceMap[r],e.t0)return e.next=15,f.updateWorkspaceMap[r](n,a,i)
e.next=15
break
case 15:l.id&&(!(c="Screen"===r?a.cid:a.screen_cid)&&a.screenstate_cid&&(s=Screenstate.find(a.screenstate_cid))&&(c=s.screen_cid),(u=CoWorker.find(l.id)||new CoWorker({cid:l.id,name:l.name,avatar:l.avatar})).screen_cid=c,u.last_seen=new Date,u.save(),_.renderCoWorkers&&_.renderCoWorkers())
case 16:case"end":return e.stop()}},e)}))
return function(e,t,r,n,a,i){return o.apply(this,arguments)}}()},"3ceZ":function(e,t,r){"use strict"
var n=r("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.requestSnapshotZipPublic=t.requestSnapshotPublic=t.requestThumbnailPublic=t.isPublicScreenAvailable=t.isPublicProjectAvailable=void 0
var a=n(r("lSNA")),f=n(r("J4zp")),m=n(r("o0o1")),i=n(r("yXPU")),v=n(r("zkrS")),o=r("hQIM"),g=r("/N2d"),p=r("CpT9")
function l(t,e){var r=Object.keys(t)
if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t)
e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)}return r}function h(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{}
e%2?l(r,!0).forEach(function(e){(0,a.default)(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(r).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}function y(){return window.MB_DESKTOP_SNAPSHOT||window.parent.MB_DESKTOP_SNAPSHOT}function c(e){return"function"==typeof y()&&e.projectAccessToken&&v.default.SpineModel.Project.findAllByAttribute("access_token",e.projectAccessToken)}var s=window.location,
b="".concat(s.origin,"/api/v2/snapshots/public")
t.isPublicProjectAvailable=c
t.isPublicScreenAvailable=function(e){return c(e)&&e.screenCid&&v.default.SpineModel.Screen.find(e.screenCid)}
var S=(0,o.createCacheMap)({valueSizeSumMax:8388608,valueSizeSingleMax:1048576}),u=function(){var t=(0,i.default)(m.default.mark(function e(t){var r,n,a,i,o,l,c,s,u,d,f,p,h
return m.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.imageElement,t.projectAccessToken,n=t.screenCid,a=t.screenStateCid,i=void 0===a?"default":a,o=t.mode,void 0===o?"thumbnail":o,l=t.version,c=void 0===l?"":l,e.prev=1,u=v.default.SpineModel.Screen.find(n),d=128/Math.max(u.width,u.height),f="".concat(n,"|").concat(i,"|").concat(d),void 0===(s=S.get("".concat(f,"|").concat(c))))return e.next=9,y()({snapshotMode:"png-base64",snapshotUrl:b,taskList:[(0,g.doRenderScreenToHTMLString)({
screenCid:n,screenStateCid:i,canvasZoom:d})]})
e.next=13
break
case 9:p=e.sent,h=p.imageBase64PNGMap,s=h[f],S.set("".concat(f,"|").concat(c),s,s.length,Date.now()+6e4)
case 13:e.next=18
break
case 15:e.prev=15,e.t0=e.catch(1)
case 18:return r.src=s||"/images/preview/image-load.png",e.abrupt("return",r)
case 20:case"end":return e.stop()}},e,null,[[1,15]])}))
return function(e){return t.apply(this,arguments)}}()
t.requestThumbnailPublic=u
var d=function(){var t=(0,i.default)(m.default.mark(function e(t){var r,n,a,i,o,l
return m.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.projectAccessToken,r=t.screenCid,n=t.canvasZoom,a=void 0===n?1:n,i=v.default.SpineModel.Screen.find(r),e.next=5,y()({snapshotMode:"png-file",snapshotUrl:b,snapshotOutputFile:"".concat((0,p.getScreenFileName)(i),".png"),taskList:[(0,g.doRenderScreenToHTMLString)({screenCid:r,screenStateCid:"default",canvasZoom:a})]})
case 5:return o=e.sent,l=o.fileOutput,e.abrupt("return",{fileOutput:l,path:"#"})
case 8:case"end":return e.stop()}},e)}))
return function(e){return t.apply(this,arguments)}}()
t.requestSnapshotPublic=d
var w=function(){var t=(0,i.default)(m.default.mark(function e(t){var r,n,a,i,o,l,c,s,u,d
return m.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.projectAccessToken,n=t.canvasZoom,a=void 0===n?1:n,i=t.onProgress,o=v.default.SpineModel.Project.findAllByAttribute("access_token",r),l=(0,f.default)(o,1),c=l[0],s=v.default.SpineModel.Screen.findAllByAttribute("project_cid",c.cid),e.next=5,y()({snapshotMode:"png-zip-file",snapshotUrl:b,snapshotOutputFile:"".concat(c.name,".zip"),taskList:s.map(function(e){return h({},(0,g.doRenderScreenToHTMLString)({screenCid:e.cid,
screenStateCid:"default",canvasZoom:a}),{zipPath:"".concat(c.name,"_").concat(c.timestamp,"/").concat((0,p.getScreenFileName)(e),".png")})}),onProgress:i})
case 5:return u=e.sent,d=u.fileOutput,e.abrupt("return",{fileOutput:d,path:"#"})
case 8:case"end":return e.stop()}},e)}))
return function(e){return t.apply(this,arguments)}}()
t.requestSnapshotZipPublic=w},"3xeE":function(e,t,r){"use strict"
var n=r("284h"),a=r("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.CommentLayer=void 0
var i=a(r("lwsE")),o=a(r("W8MJ")),l=a(r("a1gu")),c=a(r("Nsbk")),s=a(r("PJYZ")),u=a(r("7W2i")),d=a(r("lSNA")),f=n(r("q1tI")),p=a(r("17x9")),h=a(r("vOnD")),m=r("6XO9"),v=a(r("zkrS")),g=r("FC/4"),y=r("3xoc"),b=r("U9kS"),S=r("fiFu"),w=v.default.MB,E=v.default.I18N,C=function(e){function t(e){var a;(0,i.default)(this,t),a=(0,l.default)(this,(0,c.default)(t).call(this,e)),(0,d.default)((0,s.default)(a),"renderContentReply",function(){var e=a.props.permissionPack.userAuthStatus,t=a.state.isValidReply
return f.default.createElement("div",{className:"reply-footer"},e===S.USER_AUTH_STATUS_MEMBER&&f.default.createElement(g.TextEditComponent,{textEditStore:a.replyStore,placeholder:E.preview.comment.comment_placeholder,minHeight:20,autoHeight:!0,multiline:!0}),e===S.USER_AUTH_STATUS_MEMBER&&(0,y.getDarkerButton)(E.preview.comment.thread_create,function(){w.event("zhuge","Comment_Add_Comment"),a.replyStore.endEdit()},!t),e===S.USER_AUTH_STATUS_NOT_SIGN_IN&&f.default.createElement(m.CoreButton,{onClick:_},
E.preview.comment.tip_signin),e===S.USER_AUTH_STATUS_NOT_MEMBER&&f.default.createElement("span",null,E.preview.comment.tip_not_collaborator))})
return a.commentOperations={getPermission:function(e){return a.props.permissionPack.getPermission(e)},getUserProfile:function(e){return a.props.getUserProfile(e)},setHoverFocusCommentThreadCid:function(e){var t=0<arguments.length&&void 0!==e?e:null
return!a.props.tempCommentThreadMarker&&function(e){var t=0<arguments.length&&void 0!==e?e:null
return a.props.focusCommentThreadCid!==t&&a.props.dispatch({type:"container:comment:focus",payload:{focusCommentThreadCid:t,focusSource:"panel"}})}(t)},doDeleteCommentThread:function(e){return a.props.dispatch({type:"entry:comment-threads:delete",payload:{cid:e}})},doDeleteComment:function(e){return a.props.dispatch({type:"comments:delete",payload:e})},doUpdateComment:function(e){return a.props.dispatch({type:"entry:comments:update",payload:e})},doCreateComment:function(e,t){return e&&a.props.dispatch({
type:"entry:comments:add",payload:{thread_cid:t,message:e}})}},a.doCreateCommentThread=function(e){var t=a.props.tempCommentThreadMarker||{top:0,left:0},r=t.left,n=t.top
e&&a.props.dispatch({type:"entry:comment-threads:add",payload:{top:n,left:r,message:e}}),setTimeout(function(){a.scrollRef&&(a.scrollRef.scrollTop=a.scrollRef.scrollHeight-a.scrollRef.offsetHeight)},0)},a.replyStore=(0,g.createTextEditStore)({isEditing:!0},{onChange:function(e){var t=e.value
return a.setState({isValidReply:Boolean(t)})},onEnd:function(e){var t=e.value,r=void 0===t?"":t
a.doCreateCommentThread(r.trim()),a.resetReply()}}),a.resetReply=function(){a.replyStore.startEdit(),a.replyStore.setValue(""),a.setState({isValidReply:!1})},a.focusReply=function(){a.replyStore.endEdit(),a.replyStore.startEdit()},a.setScrollRef=function(e){a.scrollRef=e},a.scrollRef=null,a.state={isValidReply:!1},a}return(0,u.default)(t,e),(0,o.default)(t,[{key:"componentDidMount",value:function(){this.props.isLoaded||this.props.dispatch({type:"entry:comment:init-project-data"}),w.AutoSaver&&(
this.prevAutoSaverDelay=w.AutoSaver.getDelay(),w.AutoSaver.setDelay(500))}},{key:"componentDidUpdate",value:function(e){this.props.tempCommentThreadMarker&&!e.tempCommentThreadMarker&&this.focusReply()}},{key:"componentWillUnmount",value:function(){w.AutoSaver&&w.AutoSaver.setDelay(this.prevAutoSaverDelay)}},{key:"render",value:function(){var o=this,e=this.props,t=e.screenName,r=e.commentThreadList,l=e.commentListMap,n=e.permissionPack,a=e.isLoaded,i=e.focusCommentThreadCid,c=e.focusSource,
s=e.tempCommentThreadMarker
if(!a)return f.default.createElement(k,null)
var u=i||s&&s.cid,d=0!==r.length
return f.default.createElement(k,null,d&&f.default.createElement("div",{className:"comment-title"},"".concat(t," (").concat(r.length,")")),d&&f.default.createElement("div",{ref:this.setScrollRef,className:"comment-thread"},r.map(function(e,t){var r=l[e.cid]||[],n=t+1,a="marker"===c&&u===e.cid,i="marker"===c&&null!==u&&!a
return f.default.createElement(b.CommentThread,{key:e.cid,commentThreadCid:e.cid,commentMarkerIndex:n,isScrollFocus:a,isBlur:i,commentList:r,permission:o.commentOperations.getPermission(e.user_id),commentOperations:o.commentOperations})})),!d&&f.default.createElement("div",{className:"comment-thread-empty"},f.default.createElement("img",{src:x}),f.default.createElement("h3",null,E.preview.comment.add_comment),f.default.createElement("span",null,n.permissionDenyMessage||(
n.userAuthStatus===S.USER_AUTH_STATUS_NOT_SIGN_IN?E.preview.comment.thread_none_tip_signin:E.preview.comment.thread_none_tip))),n.isProjectAllowComment?this.renderContentReply():d?f.default.createElement("div",{className:"reply-footer"},f.default.createElement("span",null,E.renew_prompt.comment_deny_permission)):null,f.default.createElement(b.CommentHeaderGlobalStyle,null))}}]),t}(f.PureComponent)
t.CommentLayer=C,(0,d.default)(C,"propTypes",{isLoaded:p.default.bool,permissionPack:p.default.object,getUserProfile:p.default.func,screenName:p.default.string,commentThreadList:p.default.array,commentListMap:p.default.object,focusCommentThreadCid:p.default.string,focusSource:p.default.string,tempCommentThreadMarker:p.default.object,dispatch:p.default.func})
var k=h.default.div.withConfig({displayName:"CommentLayer__CommentPanelDiv",componentId:"wnjiq4-0"})([
"position:relative;display:flex;flex-flow:column;width:260px;height:100%;font-size:12px;background-color:#fff;box-shadow:0 -2px 30px rgba(39,54,78,0.11);z-index:1;& > .comment-title{display:flex;align-items:center;height:50px;margin:0 20px;border-bottom:1px solid #d9d9d9;}& > .comment-thread{flex:1;overflow-y:auto;padding:0 20px;}& > .comment-thread-empty{flex:1;display:flex;flex-flow:column;align-items:center;justify-content:center;& > img{width:90px;margin:0 10px;}& > h3{padding:10px;}& > span{padding:0 10px;text-align:center;}}& > .reply-footer{display:flex;align-items:flex-end;background:#fff;border-top:1px solid #eaebed;padding:10px 14px;box-shadow:0 -2px 10px rgba(26,58,109,0.12);& > div{margin:0 8px -4px 0;width:174px;max-height:120px;> label{&::placeholder{color:#a9afb8;}& > textarea{padding:3px 8px;min-height:28px;}}}& > button{flex:1;height:28px;font-size:12px;}}"
]),_=function(){window.location.href="/signin?next=".concat(window.location.pathname)},x="/images/preview/no-comment@2x.png"},"3xoc":function(e,t,r){"use strict"
var n=r("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.getDarkerButton=void 0
var a=n(r("q1tI")),i=r("6XO9"),o={backgroundColor:"#5b6b73"},l={opacity:.6}
t.getDarkerButton=function(e,t,r){return a.default.createElement(i.Button,{type:"primary",style:r?l:o,onClick:t,disabled:r},e)}},"43RC":function(e,t,r){"use strict"
var n=r("284h"),a=r("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var o=a(r("lwsE")),l=a(r("W8MJ")),c=a(r("a1gu")),s=a(r("Nsbk")),u=a(r("PJYZ")),d=a(r("7W2i")),f=a(r("lSNA")),i=a(r("17x9")),p=n(r("q1tI")),h=a(r("TSYQ")),m=a(r("i6OX")),v=r("5hhZ"),g=function(e){function i(){var e,r;(0,o.default)(this,i)
for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a]
return r=(0,c.default)(this,(e=(0,s.default)(i)).call.apply(e,[this].concat(n))),(0,f.default)((0,u.default)(r),"handleClick",function(){var e=r.props,t=e.isMinimized;(0,e.onClick)(!t)}),r}return(0,d.default)(i,e),(0,l.default)(i,[{key:"render",value:function(){var e=this.props,t=e.placement,r=e.isMinimized,n="left"===t?"angle-right":"angle-left"
return p.default.createElement(v.StyledToggleButton,{className:(0,h.default)(t,{"is-minimized":r}),onClick:this.handleClick},p.default.createElement(m.default,{type:"fa",name:n,className:"toggle-icon"}))}}]),i}(p.PureComponent)
t.default=g,(0,f.default)(g,"propTypes",{placement:i.default.oneOf(["left","right"]),isMinimized:i.default.bool,onClick:i.default.func})},"4QcC":function(e,t,r){"use strict"
var n=r("284h"),a=r("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var o=a(r("lwsE")),i=a(r("W8MJ")),l=a(r("a1gu")),c=a(r("Nsbk")),s=a(r("PJYZ")),u=a(r("7W2i")),d=a(r("lSNA")),f=n(r("q1tI")),p=a(r("DKAG")),h=a(r("17x9")),m=r("i6OX"),v=a(r("Lyer")),g=a(r("EDI8")),y=a(r("UbMB")).default.bind(g.default),b=MB.config.SCALES,S=function(e){function t(){var i
return(0,o.default)(this,t),i=(0,l.default)(this,(0,c.default)(t).call(this)),(0,d.default)((0,s.default)(i),"handleZoomIn",function(){var e=i.props,t=e.scale,r=e.dispatch,n=e.fromFullScreen
MB.event("preview","工具栏 :点击缩放"),n&&MB.event("preview","工具栏 :全屏模式缩放")
var a=b.findIndex(function(e){return t<e})
r({type:"entry:preview:set:scale",payload:{scale:b[a]||b[b.length-1]}})}),(0,d.default)((0,s.default)(i),"handleZoomOut",function(){var e=i.props,t=e.scale,r=e.dispatch,n=e.fromFullScreen
MB.event("preview","工具栏 :点击缩放"),n&&MB.event("preview","工具栏 :全屏模式缩放")
var a=b.findIndex(function(e){return t<=e})
r({type:"entry:preview:set:scale",payload:{scale:b[a-1]||b[0]}})}),(0,d.default)((0,s.default)(i),"handleResetScale",function(){(0,i.props.dispatch)({type:"entry:preview:set:scale",payload:{scale:100}})}),(0,d.default)((0,s.default)(i),"handleKeyDown",function(e){w(e,i.handleZoomIn,i.handleZoomOut,i.handleResetScale)}),i.state={isGuideShow:!1},i}return(0,u.default)(t,e),(0,i.default)(t,[{key:"componentDidMount",value:function(){var e=this
this.props.fromFullScreen||(this.openGuideTimer=setTimeout(function(){e.setState({isGuideShow:!0})},600))}},{key:"componentWillUnmout",value:function(){clearTimeout(this.openGuideTimer)}},{key:"render",value:function(){var e=this.props.scale,t=this.state.isGuideShow,r=e<400,n=20<e
return f.default.createElement(v.default,{id:"preview-zoom",localeKey:"zoom",X:"left",isOpen:t,gotItBtn:!0,noCloseBtn:!0},f.default.createElement("div",{className:y("zoom-count","preview-zoom-btn")},f.default.createElement("a",{id:"zoomout",disabled:!n,title:I18N.zoomout,onClick:this.handleZoomOut,className:"scale-icon"},f.default.createElement(m.SVGIcon,{name:"design/scale_reduce"})),f.default.createElement("span",null,"".concat(Math.round(e),"%")),f.default.createElement("a",{id:"zoomin",disabled:!r,
title:I18N.zoomin,onClick:this.handleZoomIn,className:"scale-icon"},f.default.createElement(m.SVGIcon,{name:"design/scale_enlarge"})),f.default.createElement(p.default,{target:document,onKeyDown:this.handleKeyDown})))}}]),t}(f.PureComponent)
t.default=S,(0,d.default)(S,"propTypes",{scale:h.default.number,fromFullScreen:h.default.bool,dispatch:h.default.func}),(0,d.default)(S,"defaultProps",{fromFullScreen:!1})
var w=function(e,t,r,n){(e.ctrlKey||e.metaKey)&&(187==e.keyCode&&(e.preventDefault(),t()),189==e.keyCode&&(e.preventDefault(),r()),48==e.keyCode&&(e.preventDefault(),n()))}},"4WDG":function(e,t,r){"use strict"
var n=r("284h"),a=r("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var I=a(r("J4zp")),i=a(r("lwsE")),o=a(r("W8MJ")),l=a(r("a1gu")),c=a(r("Nsbk")),s=a(r("PJYZ")),u=a(r("7W2i")),d=a(r("lSNA")),f=a(r("17x9")),N=n(r("q1tI")),R=a(r("DKAG")),D=a(r("foKU")),L=a(r("tBsX")),A=r("oose"),B=a(r("dYO+")),F=a(r("DdUa")),q=a(r("kJQk")),U=a(r("9ZUU")),W=a(r("TSYQ"))
r("fSKh")
var p=function(e){function t(){var n
return(0,i.default)(this,t),n=(0,l.default)(this,(0,c.default)(t).call(this)),(0,d.default)((0,s.default)(n),"handleKeyDown",function(e){var t=n.props.dispatch,r=e.target.matches("input")||e.target.matches("textarea")
32!==e.keyCode||r||(e.preventDefault(),t({type:"preview:set:key:flags",payload:{isSpaceDown:!0}}))}),(0,d.default)((0,s.default)(n),"handleKeyUp",function(e){n.props.dispatch({type:"preview:reset:key:flags"})}),(0,d.default)((0,s.default)(n),"handleMouseDown",function(e){var t=n.props.isSpaceDown
1!==e.button&&!t||n.initDraggingCanvas(e)}),(0,d.default)((0,s.default)(n),"handleScaleChange",function(e){n.props.dispatch({type:"entry:preview:set:scale",payload:{scale:e}})}),(0,d.default)((0,s.default)(n),"handleOffsetChange",function(e,t){n.props.dispatch({type:"entry:preview:set:canvas:offset",payload:{offset:{x:e,y:t}}})}),n.state={isDraggingCanvas:!1},n}return(0,u.default)(t,e),(0,o.default)(t,[{key:"initDraggingCanvas",value:function(e){var r=this,n=e.clientX,a=e.clientY,t=this.props.canvasOffset,
i=t.x,o=t.y
this.setState({isDraggingCanvas:!0})
function l(e){var t={x:i+(e.clientX-n),y:o+(e.clientY-a)}
r.props.dispatch({type:"entry:preview:set:canvas:offset",payload:{offset:t}})}document.addEventListener("mousemove",l),document.addEventListener("mouseup",function e(t){r.setState({isDraggingCanvas:!1}),document.removeEventListener("mousemove",l),document.removeEventListener("mouseup",e)})}},{key:"render",value:function(){var e=this.props,t=e.scale,r=e.canvasOffset,n=e.project,a=e.screen,i=e.isSpaceDown,o=e.isStickyShow,l=e.isScrollable,c=e.shellType,s=e.isLayerActive,u=e.isCommentActive,
d=e.isColorPickerActive,f=e.isFullScreenMode,p=e.isLayerPreview,h=this.state.isDraggingCanvas,m=r.x,v=r.y,g="landscape"===a.orientation,y=s||u,b=y||!l?"none":c,S=n.width,w=n.height,E=g?[w,S]:[S,w],C=(0,I.default)(E,2),k=C[0],_=C[1],x={width:k,height:_,minWidth:k,minHeight:_,transform:"matrix(1, 0, 0, 1, ".concat(m,", ").concat(v,")")},T={transform:"scale(".concat(t/100,")")},P={width:"".concat(t,"%"),height:"".concat(t,"%")},M={width:a.width*t/100,height:a.height*t/100},O=(0,W.default)({"wait-drag":i||h,
"is-immersive":y,"is-layer-active":s,"is-screen-expanded":y||!l}),j=(0,W.default)("ui-layers",{"is-shadow":!("default"===b&&p),"is-active":s})
return N.default.createElement(D.default,{x:m,y:v,scale:t,id:"simulator-container",className:O,isDisabled:h,onMouseDown:this.handleMouseDown,onScaleChange:this.handleScaleChange,onOffsetChange:this.handleOffsetChange},function(e,t,r){return N.default.createElement("div",{key:"1",className:(0,W.default)("screen-viewport",{"is-fullscreen":f,"is-geely":"car_play"===n.model}),style:x},N.default.createElement("div",{className:"zoom-area",style:T},N.default.createElement(F.default,null),
!y&&N.default.createElement(B.default,{project:n,shellType:b,isLandscape:g}),o&&N.default.createElement(U.default,null)),N.default.createElement("div",{className:"no-zoom-area-wrapper",style:P},N.default.createElement("div",{className:"no-zoom-area",style:p&&l?{}:M},N.default.createElement("div",{id:"ui-layers",className:j},d&&N.default.createElement(q.default,null),s&&!d&&N.default.createElement(L.default,null)),N.default.createElement("div",{id:"ui-comment-marker-panel"},N.default.createElement(
A.CommentMarkerPanelContainer,{isActive:u,scale:r/100})))))},N.default.createElement(R.default,{target:document,onKeyDown:this.handleKeyDown,onKeyUp:this.handleKeyUp}))}}]),t}(N.PureComponent);(t.default=p).propTypes={scale:f.default.number,canvasOffset:f.default.object,screen:f.default.object,project:f.default.object,shellType:f.default.string,isStickyShow:f.default.bool,isScrollable:f.default.bool,isLayerPreview:f.default.bool,isSpaceDown:f.default.bool,isLayerActive:f.default.bool,
isCommentActive:f.default.bool,isColorPickerActive:f.default.bool,dispatch:f.default.func,isFullScreenMode:f.default.bool}},"4YeV":function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
function n(i,o){return s(function(e,t,r){var n=t.dispatch,a=r&&r.payload
n({type:"reducer:projects:update",payload:i(e,a,o)})})}var a=r("WVP6"),i=r("Ehhz").MODEL_OPERATION_MAP.ProjectAlike,o=(0,a.createStateStore)([]),l=o.getState,c=o.setState,s=o.wrapEntry,u={entryMap:{"projects:refresh":n(i.refreshStateList,!1),"projects:add":n(i.addState,!1),"projects:add-local":n(i.addState,!0),"projects:update":n(i.updateState,!1),"projects:update-local":n(i.updateState,!0),"projects:delete":n(i.deleteState,!1),"projects:delete-local":n(i.deleteState,!0)},getState:l,setState:c}
t.default=u},"4daP":function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.playSettingEntry=void 0
var o=r("upRB"),l=r("7Qib"),c="preview-is-scrollable",s="preview-is-stickyshow",u="preview-is-highlight",d="preview-shell-type",n={"entry:init:preview-setting":function(e){var t=e.getState,r=e.dispatch,n=t(),a=(0,o.getCurrentProject)(n),i=(0,l.localStorageGetItem)(d)?(0,l.localStorageGetItem)(d):a.shell_type
r({type:"reducer:preview-toolbar:update",payload:{isScrollable:"false"!==(0,l.localStorageGetItem)(c),isStickyShow:"false"!==(0,l.localStorageGetItem)(s),isHighlight:(0,l.localStorageGetItem)(u)?"false"!==(0,l.localStorageGetItem)(u):a.highlight,shellType:i}})},"entry:preview-setting:update:is-highlight":function(e,t){var r=e.dispatch,n=t.payload.isHighlight;(0,l.localStorageSetItem)(u,n),r({type:"reducer:preview-toolbar:update",payload:{isHighlight:n}})},"entry:preview-setting:update:shell-type":function(e
,t){var r=e.dispatch,n=t.payload.shellType;(0,l.localStorageSetItem)("".concat(d,"-").concat(MB.currentProject.cid),n),r({type:"reducer:preview-toolbar:update",payload:{shellType:n}}),setTimeout(function(){MB.runner.reload()})},"entry:preview-setting:update:is-scrollable":function(e,t){var r=e.dispatch,n=t.payload.isScrollable;(0,l.localStorageSetItem)(c,n),r({type:"reducer:preview-toolbar:update",payload:{isScrollable:n}}),setTimeout(function(){MB.runner.reload()})},
"entry:preview-setting:update:is-sticky-show":function(e,t){var r=e.dispatch,n=t.payload.isStickyShow;(0,l.localStorageSetItem)(s,n),r({type:"reducer:preview-toolbar:update",payload:{isStickyShow:n}})}}
t.playSettingEntry=n},"4dyd":function(e,t,r){"use strict"
var n=r("284h"),a=r("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var o=a(r("lwsE")),l=a(r("W8MJ")),c=a(r("a1gu")),s=a(r("Nsbk")),u=a(r("PJYZ")),d=a(r("7W2i")),f=a(r("lSNA")),i=a(r("17x9")),p=n(r("q1tI")),h=a(r("UJpD")),m=function(e){function i(){var e,t;(0,o.default)(this,i)
for(var r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a]
return t=(0,c.default)(this,(e=(0,s.default)(i)).call.apply(e,[this].concat(n))),(0,f.default)((0,u.default)(t),"handleResize",function(){var e=t.elem.getBoundingClientRect()
t.props.onResize(e)}),t}return(0,d.default)(i,e),(0,l.default)(i,[{key:"componentDidMount",value:function(){this.elem.contentWindow.addEventListener("resize",this.handleResize)}},{key:"componentWillUnmount",value:function(){var e=this.elem.contentWindow
e&&e.removeEventListener("resize",this.handleResize)}},{key:"render",value:function(){var t=this
return p.default.createElement("iframe",{ref:function(e){return t.elem=e},className:h.default.detector})}}]),i}(p.PureComponent);(t.default=m).propTypes={onResize:i.default.func.isRequired}},"4sCl":function(e,t,r){"use strict"
var n=r("284h"),a=r("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var o=a(r("lwsE")),l=a(r("W8MJ")),c=a(r("a1gu")),s=a(r("Nsbk")),u=a(r("PJYZ")),d=a(r("7W2i")),f=a(r("lSNA")),i=a(r("17x9")),m=n(r("q1tI")),v=a(r("TSYQ")),g=a(r("SFPg")),p=r("/5+U"),y=r("veUc")
r("oKLx")
var h=function(e){function i(){var e,t;(0,o.default)(this,i)
for(var r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a]
return t=(0,c.default)(this,(e=(0,s.default)(i)).call.apply(e,[this].concat(n))),(0,f.default)((0,u.default)(t),"state",{ifHideLayer:!1}),(0,f.default)((0,u.default)(t),"onMouseLeave",function(){"number"==typeof t.props.activeLayerID?t.props.enterLayer("artboard-base"):t.props.enterLayer(t.props.currentScreen.cid)}),t}return(0,d.default)(i,e),(0,l.default)(i,[{key:"componentWillReceiveProps",value:function(e){var t=e.currentScreen,r=e.activeLayerID,n=this.props,a=n.currentScreen,i=n.enterLayer
t!=a&&i(-1),-1!==r&&r?this.setState({ifHideLayer:!1}):this.setState({ifHideLayer:!0})}},{key:"render",value:function(){var e=this.props,t=e.isShowLayerList,r=e.layers,n=e.currentScreen,a=e.unit,i=e.ratio,o=e.activeLayerID,l=e.enteredLayerID,c=e.enterLayer,s=e.requestSelectLayer,u=e.handleShowlayerInfo,d=this.state.ifHideLayer,f=(0,y.transformLayersFormat)(r),p=b(a,i,c,o,l,s,u),h={top:0,left:0,width:n.width,height:n.height}
return m.default.createElement("div",{className:(0,v.default)("LayerList",{hiddenLayer:d&&t}),onMouseLeave:this.onMouseLeave},f.map(function(e){return m.default.createElement(g.default,{key:e.id,layer:e,parentRect:h,treeProps:p})}))}}]),i}(m.Component)
t.default=h,(0,f.default)(h,"propTypes",{isSpaceDown:i.default.bool,layers:i.default.array,requestSelectLayer:i.default.func,resetLayer:i.default.func,artboard:i.default.object,enterLayer:i.default.func,handleShowlayerInfo:i.default.func,currentScreen:i.default.object,activeLayerID:i.default.oneOfType([i.default.number,i.default.string]),enteredLayerID:i.default.oneOfType([i.default.number,i.default.string]),isShowLayerList:i.default.bool,unit:i.default.string,ratio:i.default.number,dispatch:i.default.func}
)
var b=(0,p.immutableTransformCache)(function(e,t,r,n,a,i,o){return{unit:e,ratio:t,enterLayer:r,activeLayerID:n,enteredLayerID:a,requestSelectLayer:i,handleShowlayerInfo:o}})},"4vJh":function(e,t,r){"use strict"
var n=r("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:o,t=1<arguments.length?arguments[1]:void 0,r=t.type,n=t.payload
switch(r){case"reducer:preview-panel:search":return function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{}
e%2?i(r,!0).forEach(function(e){(0,a.default)(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(r).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}({},e,{},n)
case"reducer:preview-panel:reset":return o
default:return e}}
var a=n(r("lSNA"))
function i(t,e){var r=Object.keys(t)
if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t)
e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)}return r}var o={screenSearch:""}},"4x8W":function(e,t,r){"use strict"
var n=r("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:o,t=1<arguments.length?arguments[1]:void 0
switch(t.type){case"event-sign-up:close:modal":return function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{}
e%2?i(r,!0).forEach(function(e){(0,a.default)(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(r).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}({open:!1},e)
case"event-sign-up:set:event":return t.payload
default:return e}}
var a=n(r("lSNA"))
function i(t,e){var r=Object.keys(t)
if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t)
e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)}return r}var o={open:!1,event:{}}},"5Mi5":function(e,t,r){"use strict"
var n=r("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var a=n(r("lwsE")),i=n(r("W8MJ")),o=n(r("a1gu")),l=n(r("Nsbk")),c=n(r("7W2i")),s=n(r("lSNA")),u=n(r("17x9")),d=r("q1tI"),f=r("2EV6"),p=window.key,h="preview",m=function(e){function t(){return(0,a.default)(this,t),(0,o.default)(this,(0,l.default)(t).apply(this,arguments))}return(0,c.default)(t,e),(0,i.default)(t,[{key:"componentDidMount",value:function(){var e=this.props.dispatch
p.setScope(h),p("command+enter, ctrl+enter",h,function(){e({type:"entry:enter:full-screen-mode"})}),p("command+p, ctrl+p",h,function(){return!1}),p("esc",h,function(){if("project"===(0,f.getProjectType)(MB.currentProject))return e({type:"entry:preview:escape:key"}),!1})}},{key:"componentWillUnmount",value:function(){p.deleteScope(h),p.setScope("design")}},{key:"render",value:function(){return null}}]),t}(d.PureComponent)
t.default=m,(0,s.default)(m,"propTypes",{dispatch:u.default.func})},"5hhZ":function(e,t,r){"use strict"
var n=r("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.StyledToggleButton=void 0
var a=n(r("vOnD")).default.div.withConfig({displayName:"styles__StyledToggleButton",componentId:"sc-1g67xqq-0"})([
"position:absolute;z-index:1;cursor:pointer;display:flex;align-items:center;justify-content:center;top:50%;margin-top:-46px;width:14px;height:93px;background:#fff;&.left{right:100%;border-top-left-radius:35px;border-bottom-left-radius:35px;}&.right{left:100%;border-top-right-radius:35px;border-bottom-right-radius:35px;}.toggle-icon{width:10px;font-size:18px;color:#8d9ea7;text-align:center;transform:rotate(0);transition:transform 0.5s ease;}&.is-minimized{.toggle-icon{transform:rotate(180deg);}}"])
t.StyledToggleButton=a},"6PGs":function(e,t,r){e.exports={"screen-info":"_2v9yoyzXbIx0ZN2HixE5HA"}},"6UMJ":function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.keyEntry=void 0
var o=r("upRB"),n={"entry:preview:escape:key":function(e){var t=e.getState,r=e.dispatch,n=t(),a=(0,o.getIsFullScreenMode)(n),i=(0,o.getisShowColorPicker)(n)
a?(r({type:"reducer:preview-toolbar:fullscreen",payload:{isFullScreenMode:!1}}),r({type:"entry:init:preview:scale"}),r({type:"preview:set:canvas:offset",payload:{offset:{x:0,y:0}}})):MB.designer&&!i&&MB.designer.backDesign()}}
t.keyEntry=n},"6Y1W":function(e,t,r){"use strict"
var n=r("284h"),a=r("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var i=a(r("lwsE")),o=a(r("W8MJ")),l=a(r("a1gu")),c=a(r("Nsbk")),s=a(r("PJYZ")),u=a(r("7W2i")),d=a(r("lSNA")),f=a(r("17x9")),p=n(r("q1tI")),h=a(r("x3zb")),m=a(r("ibfc")),v=function(e){function t(e){var a
return(0,i.default)(this,t),a=(0,l.default)(this,(0,c.default)(t).call(this,e)),(0,d.default)((0,s.default)(a),"handleHomeScreenLoad",function(e){console.log("HomeScreenLoad",e),MB.runner.doneTransition(e)}),(0,d.default)((0,s.default)(a),"handleTransitionEnd",function(e){var t=a.props.transition,r=t.name,n=t.callback;/(menu|drawer)-reverse/.test(r)&&(console.log("menu - closed"),MB.runner.currentMenu=MB.runner.currentScreen=null),console.log("transition - end"),MB.runner.doneTransition(e),n&&n()}),
a.state={prevScreenCid:"",currentScreenCid:e.activeCid},a}return(0,u.default)(t,e),(0,o.default)(t,[{key:"componentDidMount",value:function(){console.log("mb runner did mount",{props:this.props.activeCid,state:this.state.currentScreenCid})}},{key:"componentWillUnmount",value:function(){console.log("mb runner will unmount")}},{key:"render",value:function(){var e=this.props,t=e.screenInfoMap,r=e.transition,o=e.widgetQueryMap,n=this.state,l=n.prevScreenCid,c=n.currentScreenCid
return c?p.default.createElement(h.default,{activeCid:c,transition:r,onHomeScreenLoad:this.handleHomeScreenLoad,onTransitionEnd:this.handleTransitionEnd},function(a,i){return Object.values(t).map(function(e){var t=e.cid===l,r=e.cid===c,n=t?a:r?i:null
return p.default.createElement(m.default,{key:e.cid,isShow:t||r,screen:e,style:n,isActive:c===e.cid,widgetQueryMap:o})})}):null}}]),t}(p.PureComponent)
t.default=v,(0,d.default)(v,"propTypes",{widgetQueryMap:f.default.object,screenInfoMap:f.default.object,activeCid:f.default.string,transition:f.default.object}),(0,d.default)(v,"getDerivedStateFromProps",function(e,t){return e.activeCid!==t.currentScreenCid?{prevScreenCid:t.currentScreenCid,currentScreenCid:e.activeCid}:null})},"6ZRU":function(e,t,r){"use strict"
var n=r("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var a=n(r("lSNA")),i=r("/MKj"),o=n(r("/cyv")),l=n(r("HfeQ"))
function c(t,e){var r=Object.keys(t)
if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t)
e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)}return r}var s={Alert:(0,i.connect)(function(e){return function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{}
e%2?c(r,!0).forEach(function(e){(0,a.default)(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(r).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}({},e.container.alert)})(l.default)},u={reducers:o.default,containers:s}
t.default=u},"6gQ3":function(e,t,r){"use strict"
var n=r("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var a=r("/MKj"),i=n(r("rESR")),o=r("/5+U"),l=(0,a.connect)(function(e){var t=e.model,r=t.user,n=t.current.projectCid,a=t.projects,i=t.screens,o=e.container,l=o.common.offset,c=o.previewSetting.toolbarActiveItem,s=!!r.id,u=Boolean(l.x||l.y),d=h(a,n),f=p.has(d.access_token)
return{isLoggedIn:s,isDisplaced:u,screensCount:i.reduce(function(e,t){return t.project_cid===n?e+1:e},0),project:d,isDemo:f,toolbarActiveItem:c}})(i.default)
t.default=l
var p=new Set(["demo","cS1AXKF5jtrJePbEKiYcdcHosQPdzrk","workout","sI3GY2tDz76RrZ4MGFiIcZTZpAHyluC","UMQzYmknxWeHNvvVyeyJDuSkgyvi6Xw","9Py1L5RdC8ZPRSmnWEt4uuUUSDUAxkM"]),h=(0,o.immutableTransformCache)(function(e,t){return e.find(function(e){return e.cid===t})})},"6iHT":function(e,t,r){"use strict"
var n=r("284h"),a=r("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.CommentHeaderGlobalStyle=t.ContentHeader=t.ContentMessage=t.commonContentFooter=void 0
var i=a(r("VkAN")),l=a(r("q1tI")),o=a(r("17x9")),c=n(r("vOnD")),s=r("6XO9"),u=a(r("zkrS")),d=a(r("i6OX")),f=r("wYtL"),p=r("FC/4"),h=r("3xoc")
function m(){var e=(0,i.default)(["\n  .comment-header-edit li:hover { color: #1e98ea; }\n  .comment-header-delete li:hover { color: #eb5648; }\n"])
return m=function(){return e},e}var v=u.default.I18N,g=u.default.L10N
t.commonContentFooter=function(e,t,r,n,a){return[l.default.createElement(b,{key:"footer"},g.parseTimeAgo(1e3*e.updated_at),n&&l.default.createElement(S,{onClick:t?a:n},l.default.createElement(d.default,{type:"dora",name:"reply"}),t?v.preview.comment.cancel_reply:v.preview.comment.comment_create)),t&&l.default.createElement(w,{key:"reply"},l.default.createElement(p.TextEditComponent,{textEditStore:t,placeholder:v.preview.comment.comment_placeholder,minHeight:60,autoHeight:!0,multiline:!0}),(0,
h.getDarkerButton)(v.preview.comment.comment_create,t.endEdit,!r))]}
function y(e){var t=e.sub,r=e.comment,n=e.textEditStore,a=e.cancelEdit
return l.default.createElement(C,{className:t?"sub":""},n?l.default.createElement(_,null,l.default.createElement(p.TextEditComponent,{textEditStore:n,placeholder:v.preview.comment.comment_placeholder,minHeight:60,autoHeight:!0,multiline:!0}),l.default.createElement(x,null,l.default.createElement(s.Button,{onClick:a},v.preview.comment.cancelEdit),l.default.createElement(s.Button,{type:"primary",onClick:n.endEdit},v.preview.comment.updateEdit))):l.default.createElement(k,null,r.message))}
var b=c.default.div.withConfig({displayName:"CommentLayerThreadContent__ContentFooterDiv",componentId:"sc-1lkzl71-0"})(["display:flex;align-items:center;justify-content:space-between;padding:0 10px 10px;line-height:20px;color:#8d9ea7;opacity:0.75;"]),S=c.default.div.withConfig({displayName:"CommentLayerThreadContent__ReplyToggleDiv",componentId:"sc-1lkzl71-1"})(["cursor:pointer;&:hover,&:active{color:#525e71;}> span{margin-right:6px;opacity:0.5;}"]),w=c.default.div.withConfig({
displayName:"CommentLayerThreadContent__ReplyDropdownDiv",componentId:"sc-1lkzl71-2"})(["padding:10px 0;background:#fff;> button{width:100%;height:24px;font-size:12px;}"]);(t.ContentMessage=y).propTypes={sub:o.default.bool,comment:o.default.object,textEditStore:o.default.object,cancelEdit:o.default.func}
function E(e){var t=e.sub,r=e.avatar,n=e.name,a=e.markIndex,i=e.startEdit,o=e.doDelete
return l.default.createElement(T,{className:t?"sub":""},l.default.createElement(O,null,l.default.createElement("img",{src:r,width:24,height:24}),l.default.createElement("div",null,a&&l.default.createElement("span",{className:"index"},"#".concat(a)),l.default.createElement("span",{className:"name"},n))),l.default.createElement(P,null,i&&l.default.createElement(j,{onSelect:i,menuClassName:"comment-header-edit",iconName:"cog",text:v.preview.comment.modify_edit}),o&&l.default.createElement(j,{onSelect:o,
menuClassName:"comment-header-delete",iconName:"trash",text:v.preview.comment.modify_delete})))}var C=c.default.div.withConfig({displayName:"CommentLayerThreadContent__ContentMessageDiv",componentId:"sc-1lkzl71-3"})(["display:flex;flex-flow:column;width:100%;height:auto;color:#5b6b73;white-space:nowrap;text-overflow:ellipsis;span{padding:10px;}&.sub span{padding:0 10px 10px;}"]),k=c.default.span.withConfig({displayName:"CommentLayerThreadContent__EditableSpanSpan",componentId:"sc-1lkzl71-4"})([
"user-select:text;word-break:break-all;white-space:pre-line;text-overflow:ellipsis;"]),_=c.default.div.withConfig({displayName:"CommentLayerThreadContent__EditableSpanDiv",componentId:"sc-1lkzl71-5"})(["background:#fff;> textarea{margin-bottom:5px;padding:10px;border:1px solid #d3dce6;}"]),x=c.default.div.withConfig({displayName:"CommentLayerThreadContent__ButtonPanelDiv",componentId:"sc-1lkzl71-6"})([
"display:flex;justify-content:flex-end;width:100%;> button{width:60px;height:24px;font-size:12px;margin-left:10px;}"]);(t.ContentHeader=E).propTypes={avatar:o.default.string,name:o.default.string,markIndex:o.default.number,startEdit:o.default.func,doDelete:o.default.func,sub:o.default.bool}
var T=c.default.div.withConfig({displayName:"CommentLayerThreadContent__ContentHeaderDiv",componentId:"sc-1lkzl71-7"})(["display:flex;justify-content:space-between;padding-bottom:10px;width:100%;&.sub{padding:10px;}"]),P=c.default.div.withConfig({displayName:"CommentLayerThreadContent__ContentHeaderEditDiv",componentId:"sc-1lkzl71-8"})(["display:flex;align-items:center;.icon{color:#c8cdd0;margin-left:5px;&:hover,&:active{color:#8d9ea7;}}"]),M=(0,c.createGlobalStyle)(m())
t.CommentHeaderGlobalStyle=M
var O=c.default.div.withConfig({displayName:"CommentLayerThreadContent__UserInfoDiv",componentId:"sc-1lkzl71-9"})(["display:flex;height:24px;> img{margin-right:10px;border-radius:100%;}> div{display:flex;flex-flow:column;justify-content:center;max-height:24px;font-weight:bold;line-height:12px;.index{vertical-align:middle;color:#f55d54;}.name{max-width:140px;color:#5b6b73;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;}}"]),j=function(e){var t=e.onSelect,r=e.text,n=e.iconName,a=e.menuClassName
return l.default.createElement(f.Tooltip,{content:{hover:r},duration:1e3,position:"left"},l.default.createElement(s.Dropdown,{opener:l.default.createElement(d.default,{type:"dora",name:n}),onSelect:t,menuClassName:a,menuList:[r],menuX:"right",arrowed:!0}))}
j.propTypes={onSelect:o.default.func.isRequired,text:o.default.string.isRequired,iconName:o.default.string.isRequired,menuClassName:o.default.string.isRequired}},7:function(e,t,r){r("LSZE"),r("ls82"),e.exports=r("Z3xQ")},"7Rdd":function(e,t,r){"use strict"
var n=r("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
function a(e){var t=e.refRect,r=e.screen,n=e.style,a=n.dashed,i=n.colorForLines
return o.default.createElement("div",{style:{position:"absolute",pointerEvents:"none",width:(0,l.toPercentage)(t.width/r.width),height:(0,l.toPercentage)(t.height/r.height),left:(0,l.toPercentage)(t.left/r.width),top:(0,l.toPercentage)(t.top/r.height),border:"1px ".concat(a?"dashed":"solid"," ").concat(i)}})}var o=n(r("q1tI")),i=n(r("17x9")),l=r("1qiG")
a.propTypes={refRect:i.default.object,screen:i.default.object,style:i.default.object}
var c=a
t.default=c},"7bO/":function(e,t,r){"use strict"
r.r(t)
var n={}
r.r(n),r.d(n,"TASK",function(){return Y.e}),r.d(n,"SAGA_ACTION",function(){return Y.c}),r.d(n,"noop",function(){return Y.u}),r.d(n,"is",function(){return Y.q}),r.d(n,"deferred",function(){return Y.l}),r.d(n,"arrayOfDeffered",function(){return Y.g}),r.d(n,"createMockTask",function(){return Y.j}),r.d(n,"cloneableGenerator",function(){return Y.i}),r.d(n,"asEffect",function(){return V.d}),r.d(n,"CHANNEL_END",function(){return Z})
var Y=r("Ev6p"),z=r("92lH"),X=r("udQi"),V=r("tw9P"),J=r("mbVZ"),G=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]
for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e}
var K="proc first argument (Saga function result) must be an iterator",Z={toString:function(){return"@@redux-saga/CHANNEL_END"}},Q={toString:function(){return"@@redux-saga/TASK_CANCEL"}},i={wildcard:function(){return Y.r},default:function(t){return"symbol"===(void 0===t?"undefined":a(t))?function(e){return e.type===t}:function(e){return e.type===String(t)}},array:function(e){return function(t){return e.some(function(e){return $(e)(t)})}},predicate:function(t){return function(e){return t(e)}}}
function $(e){return("*"===e?i.wildcard:Y.q.array(e)?i.array:Y.q.stringableFunc(e)?i.default:Y.q.func(e)?i.predicate:i.default)(e)}var ee=function(e){return{fn:e}}
function te(n,e,t,r,a,i,o,l,c){var u=1<arguments.length&&void 0!==e?e:function(){return Y.u},d=2<arguments.length&&void 0!==t?t:Y.u,f=3<arguments.length&&void 0!==r?r:Y.u,s=4<arguments.length&&void 0!==a?a:{},p=5<arguments.length&&void 0!==i?i:{},h=6<arguments.length&&void 0!==o?o:0,m=7<arguments.length&&void 0!==l?l:"anonymous",v=c
Object(Y.h)(n,Y.q.iterator,K)
var g="[...effects]",y=Object(Y.n)(H,Object(Y.z)(g,"all("+g+")")),b=p.sagaMonitor,S=p.logger,w=p.onError,E=S||Y.s,C=function(e){var t=e.sagaStack
!t&&e.stack&&(t=-1!==e.stack.split("\n")[0].indexOf(e.message)?e.stack:"Error: "+e.message+"\n"+e.stack),E("error","uncaught at "+m,t||e.message||e)},k=Object(z.f)(u),_=Object.create(s)
A.cancel=Y.u
var x,T,P,M,O,j,I,N=(x=h,T=m,M=v,(P=n)._deferredEnd=null,(j={})[Y.e]=!0,j.id=x,j.name=T,(I={})[O="done"]=I[O]||{},I[O].get=function(){if(P._deferredEnd)return P._deferredEnd.promise
var e=Object(Y.l)()
return P._deferredEnd=e,P._isRunning||(P._error?e.reject(P._error):e.resolve(P._result)),e.promise},j.cont=M,j.joiners=[],j.cancel=L,j.isRunning=function(){return P._isRunning},j.isCancelled=function(){return P._isCancelled},j.isAborted=function(){return P._isAborted},j.result=function(){return P._result},j.error=function(){return P._error},j.setContext=function(e){Object(Y.h)(e,Y.q.object,Object(Y.k)("task",e)),Y.v.assign(_,e)},function(e,t){for(var r in t){var n=t[r]
n.configurable=n.enumerable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,r,n)}}(j,I),j),R={name:m,cancel:function(){R.isRunning&&!R.isCancelled&&(R.isCancelled=!0,A(Q))},isRunning:!0},D=function(e,n,a){var i=[],o=void 0,l=!1
function c(e){r(),a(e,!0)}function t(r){i.push(r),r.cont=function(e,t){l||(Object(Y.w)(i,r),r.cont=Y.u,t?c(e):(r===n&&(o=e),i.length||(l=!0,a(o))))}}function r(){l||(l=!0,i.forEach(function(e){e.cont=Y.u,e.cancel()}),i=[])}return t(n),{addTask:t,cancelAll:r,abort:c,getTasks:function(){return i},taskNames:function(){return i.map(function(e){return e.name})}}}(0,R,B)
function L(){n._isRunning&&!n._isCancelled&&(n._isCancelled=!0,D.cancelAll(),B(Q))}return v&&(v.cancel=L),n._isRunning=!0,A(),N
function A(e,t){if(!R.isRunning)throw new Error("Trying to resume an already finished generator")
try{var r=void 0;(r=t?n.throw(e):e===Q?(R.isCancelled=!0,A.cancel(),Y.q.func(n.return)?n.return(Q):{done:!0,value:Q}):e===Z?Y.q.func(n.return)?n.return():{done:!0}:n.next(e)).done?(R.isMainRunning=!1,R.cont&&R.cont(r.value)):F(r.value,h,"",A)}catch(e){R.isCancelled&&C(e),R.isMainRunning=!1,R.cont(e,!0)}}function B(t,r){n._isRunning=!1,k.close(),r?(t instanceof Error&&Object.defineProperty(t,"sagaStack",{value:"at "+m+" \n "+(t.sagaStack||t.stack),configurable:!0}),N.cont||(t instanceof Error&&w?w(t):C(t)),
n._error=t,n._isAborted=!0,n._deferredEnd&&n._deferredEnd.reject(t)):(n._result=t,n._deferredEnd&&n._deferredEnd.resolve(t)),N.cont&&N.cont(t,r),N.joiners.forEach(function(e){return e.cb(t,r)}),N.joiners=null}function F(e,t,r,n){var a=2<arguments.length&&void 0!==r?r:"",i=n,o=Object(Y.y)()
b&&b.effectTriggered({effectId:o,parentEffectId:t,label:a,effect:e})
var l=void 0
function c(e,t){l||(l=!0,i.cancel=Y.u,b&&(t?b.effectRejected(o,e):b.effectResolved(o,e)),i(e,t))}c.cancel=Y.u,i.cancel=function(){if(!l){l=!0
try{c.cancel()}catch(e){C(e)}c.cancel=Y.u,b&&b.effectCancelled(o)}}
var s=void 0
return Y.q.promise(e)?q(e,c):Y.q.helper(e)?W(ee(e),o,c):Y.q.iterator(e)?U(e,o,m,c):Y.q.array(e)?y(e,o,c):(s=V.d.take(e))?function(e,t){var r=e.channel,n=e.pattern,a=e.maybe
r=r||k
function i(e){return e instanceof Error?t(e,!0):Object(z.e)(e)&&!a?t(Z):t(e)}try{r.take(i,$(n))}catch(e){return t(e,!0)}t.cancel=i.cancel}(s,c):(s=V.d.put(e))?function(e,t){var r=e.channel,n=e.action,a=e.resolve
Object(X.a)(function(){var e=void 0
try{e=(r?r.put:d)(n)}catch(e){if(r||a)return t(e,!0)
C(e)}if(!a||!Y.q.promise(e))return t(e)
q(e,t)})}(s,c):(s=V.d.all(e))?H(s,o,c):(s=V.d.race(e))?function(i,t,o){var l=void 0,c=Object.keys(i),r={}
c.forEach(function(a){function e(e,t){if(!l)if(t)o.cancel(),o(e,!0)
else if(!Object(z.e)(e)&&e!==Z&&e!==Q){var r
o.cancel(),l=!0
var n=((r={})[a]=e,r)
o(Y.q.array(i)?[].slice.call(G({},n,{length:c.length})):n)}}e.cancel=Y.u,r[a]=e}),o.cancel=function(){l||(l=!0,c.forEach(function(e){return r[e].cancel()}))},c.forEach(function(e){l||F(i[e],t,e,r[e])})}(s,o,c):(s=V.d.call(e))?function(e,t,r){var n=e.context,a=e.fn,i=e.args,o=void 0
try{o=a.apply(n,i)}catch(e){return r(e,!0)}return Y.q.promise(o)?q(o,r):Y.q.iterator(o)?U(o,t,a.name,r):r(o)}(s,o,c):(s=V.d.cps(e))?function(e,r){var t=e.context,n=e.fn,a=e.args
try{var i=function(e,t){return Y.q.undef(e)?r(t):r(e,!0)}
n.apply(t,a.concat(i)),i.cancel&&(r.cancel=function(){return i.cancel()})}catch(e){return r(e,!0)}}(s,c):(s=V.d.fork(e))?W(s,o,c):(s=V.d.join(e))?function(e,t){if(e.isRunning()){var r={task:N,cb:t}
t.cancel=function(){return Object(Y.w)(e.joiners,r)},e.joiners.push(r)}else e.isAborted()?t(e.error(),!0):t(e.result())}(s,c):(s=V.d.cancel(e))?function(e,t){e===Y.d&&(e=N)
e.isRunning()&&e.cancel()
t()}(s,c):(s=V.d.select(e))?function(e,t){var r=e.selector,n=e.args
try{var a=r.apply(void 0,[f()].concat(n))
t(a)}catch(e){t(e,!0)}}(s,c):(s=V.d.actionChannel(e))?function(e,t){var r=e.pattern,n=e.buffer,a=$(r)
a.pattern=r,t(Object(z.d)(u,n||J.a.fixed(),a))}(s,c):(s=V.d.flush(e))?function(e,t){e.flush(t)}(s,c):(s=V.d.cancelled(e))?function(e,t){t(!!R.isCancelled)}(0,c):(s=V.d.getContext(e))?function(e,t){t(_[e])}(s,c):(s=V.d.setContext(e))?function(e,t){Y.v.assign(_,e),t()}(s,c):c(e)}function q(e,t){var r=e[Y.a]
Y.q.func(r)?t.cancel=r:Y.q.func(e.abort)&&(t.cancel=function(){return e.abort()}),e.then(t,function(e){return t(e,!0)})}function U(e,t,r,n){te(e,u,d,f,_,p,t,r,n)}function W(e,t,r){var n=e.context,a=e.fn,i=e.args,o=e.detached,l=function(e){var t=e.context,r=e.fn,n=e.args
if(Y.q.iterator(r))return r
var a,i,o=void 0,l=void 0
try{o=r.apply(t,n)}catch(e){l=e}return Y.q.iterator(o)?o:l?Object(Y.t)(function(){throw l}):Object(Y.t)((a=void 0,i={done:!1,value:o},function(e){return a?function(e){return{done:!0,value:e}}(e):(a=!0,i)}))}({context:n,fn:a,args:i})
try{Object(X.c)()
var c=te(l,u,d,f,_,p,t,a.name,o?null:Y.u)
o?r(c):l._isRunning?(D.addTask(c),r(c)):l._error?D.abort(l._error):r(c)}finally{Object(X.b)()}}function H(n,t,a){var i=Object.keys(n)
if(!i.length)return a(Y.q.array(n)?[]:{})
var o=0,l=void 0,c={},s={}
i.forEach(function(r){function e(e,t){l||(t||Object(z.e)(e)||e===Z||e===Q?(a.cancel(),a(e,t)):(c[r]=e,++o===i.length&&(l=!0,a(Y.q.array(n)?Y.f.from(G({},c,{length:i.length})):c))))}e.cancel=Y.u,s[r]=e}),a.cancel=function(){l||(l=!0,i.forEach(function(e){return s[e].cancel()}))},i.forEach(function(e){return F(n[e],t,e,s[e])})}}var v="runSaga(storeInterface, saga, ...args): saga argument must be a Generator function!"
function u(e,t){for(var r=arguments.length,n=Array(2<r?r-2:0),a=2;a<r;a++)n[a-2]=arguments[a]
var i=void 0
Y.q.iterator(e)?(i=e,e=t):(Object(Y.h)(t,Y.q.func,v),i=t.apply(void 0,n),Object(Y.h)(i,Y.q.iterator,v))
var o=e,l=o.subscribe,c=o.dispatch,s=o.getState,u=o.context,d=o.sagaMonitor,f=o.logger,p=o.onError,h=Object(Y.y)()
d&&(d.effectTriggered=d.effectTriggered||Y.u,d.effectResolved=d.effectResolved||Y.u,d.effectRejected=d.effectRejected||Y.u,d.effectCancelled=d.effectCancelled||Y.u,d.actionDispatched=d.actionDispatched||Y.u,d.effectTriggered({effectId:h,root:!0,parentEffectId:0,effect:{root:!0,saga:t,args:n}}))
var m=te(i,l,Object(Y.A)(c),s,u,{sagaMonitor:d,logger:f,onError:p},h,t.name)
return d&&d.effectResolved(h,m),m}var o=r("q09E"),l=r("oZtI")
r.d(t,"runSaga",function(){return u}),r.d(t,"END",function(){return z.a}),r.d(t,"eventChannel",function(){return z.d}),r.d(t,"channel",function(){return z.b}),r.d(t,"buffers",function(){return J.a}),r.d(t,"takeEvery",function(){return o.a}),r.d(t,"takeLatest",function(){return o.c}),r.d(t,"throttle",function(){return o.e}),r.d(t,"delay",function(){return Y.m}),r.d(t,"CANCEL",function(){return Y.a}),r.d(t,"detach",function(){return V.i}),r.d(t,"effects",function(){return l}),r.d(t,"utils",function(){return n
})
t.default=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=e.context,a=void 0===t?{}:t,i=function(e,t){var r={}
for(var n in e)0<=t.indexOf(n)||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n])
return r}(e,["context"]),o=i.sagaMonitor,l=i.logger,c=i.onError
if(Y.q.func(i))throw new Error("Saga middleware no longer accept Generator functions. Use sagaMiddleware.run instead")
if(l&&!Y.q.func(l))throw new Error("`options.logger` passed to the Saga middleware is not a function!")
if(c&&!Y.q.func(c))throw new Error("`options.onError` passed to the Saga middleware is not a function!")
if(i.emitter&&!Y.q.func(i.emitter))throw new Error("`options.emitter` passed to the Saga middleware is not a function!")
function s(e){var t=e.getState,r=e.dispatch,n=Object(z.c)()
return n.emit=(i.emitter||Y.o)(n.emit),s.run=u.bind(null,{context:a,subscribe:n.subscribe,dispatch:r,getState:t,sagaMonitor:o,logger:l,onError:c}),function(r){return function(e){o&&o.actionDispatched&&o.actionDispatched(e)
var t=r(e)
return n.emit(e),t}}}return s.run=function(){throw new Error("Before running a Saga, you must mount the Saga middleware on the Store using applyMiddleware")},s.setContext=function(e){Object(Y.h)(e,Y.q.object,Object(Y.k)("sagaMiddleware",e)),Y.v.assign(a,e)},s}},"7bR1":function(e,t,r){"use strict"
var n=r("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.setVisibilityScreen=w,t.default=x
var s=n(r("o0o1")),a=n(r("lSNA")),i=n(r("J2m7")),u=r("oZtI"),d=r("upRB"),f=r("JfQ8"),c=r("Kkl0"),y=r("jvRN"),p=r("7q5O"),h=s.default.mark(w),o=s.default.mark(E),m=s.default.mark(C),l=s.default.mark(k),v=s.default.mark(x)
function g(t,e){var r=Object.keys(t)
if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t)
e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)}return r}function b(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{}
e%2?g(r,!0).forEach(function(e){(0,a.default)(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):g(r).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}var S=[]
function w(e){var t,r,n,a,i,v,g,o,l,c
return s.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,u.select)()
case 2:if(t=e.sent,r=t.container.layers,n=r.resourceByScreen,a=r.visibilityScreenID,i=t.model.widgets,v=(0,d.getCurrentScreen)(t),n[a]&&!n[a].error){e.next=26
break}if(S.includes(a)){e.next=26
break}return S.push(a),e.prev=8,e.next=11,(0,u.call)(p.getLayerData,v,i)
case 11:return g=e.sent,o=(0,y.getMockingBotWidgets)(t),l=[{type:"screen",id:v.cid,name:v.name,top:0,left:0,width:v.width,height:v.height,src_left:0,src_top:0,src_width:g.artboard.width,src_height:g.artboard.height,bg_colors:[{value:(0,y.checkColor)(v.bgcolor)}]}].concat(g.layers).concat(o).reduce(function(e,t){var r=t.id,n=t.top,a=t.left,i=t.width,o=t.height
if("group"===t.name)return e.push(t),e
var l=(0,y.isSketchLayer)(r)?g.artboard.widgetWidth/g.artboard.width:1,c=n*l,s=a*l,u=i*l,d=o*l,f=Math.min(Math.max(s,0),v.width),p=Math.min(Math.max(s+u,0),v.width),h=Math.min(Math.max(c,0),v.height),m=Math.min(Math.max(c+d,0),v.height)
return p-f!=0&&m-h!=0&&e.push(b({},t,{left:f,top:h,width:p-f,height:m-h,src_top:Number(parseFloat(Math.max(n,0)).toFixed(2)),src_left:Number(parseFloat(Math.max(a,0)).toFixed(2)),src_width:Number(parseFloat(Math.min(a+i,g.artboard.width)-Math.max(a,0)).toFixed(2)),src_height:Number(parseFloat(Math.min(n+o,g.artboard.height)-Math.max(n,0)).toFixed(2))})),e},[]),c=b({},g,{layers:l}),S.splice(S.indexOf(a),1),e.next=18,(0,u.put)((0,f.receiveResourceSuccess)(a,c))
case 18:e.next=26
break
case 20:return e.prev=20,e.t0=e.catch(8),console.log(e.t0.stack),S.splice(S.indexOf(a),1),e.next=26,(0,u.put)((0,f.receiveResourceError)(a,e.t0.message))
case 26:case"end":return e.stop()}},h,null,[[8,20]])}function E(){return s.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,u.takeEvery)(f.SET_VISIBILITY_SCREEN,w)
case 2:case"end":return e.stop()}},o)}function C(t){var r,n,a,i,o,l
return s.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.payload.layerID,e.next=3,(0,u.select)()
case 3:return n=e.sent,a=n.container.layers,i=a.resourceByScreen,o=a.visibilityScreenID,l=_(i[o].layers,r),e.next=9,(0,u.put)((0,c.selectLayer)(l))
case 9:return e.next=11,(0,u.put)((0,c.activateLayer)(l))
case 11:case"end":return e.stop()}},m)}function k(){return s.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,u.takeEvery)(c.REQUEST_SELECT_LAYER,C)
case 2:case"end":return e.stop()}},l)}var _=function(e,t){var r=(0,i.default)(e,{id:t})
if(!r||!r.parent||r.image_set_zip)return t
for(;r;){var n=(0,i.default)(e,{id:r.parent})
if(!n||!n.image_set_zip||!n.parent)return t
if(n.image_set_zip)return r.parent
r=n.parent}}
function x(){return s.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,[E(),k()]
case 2:case"end":return e.stop()}},v)}},"7eYF":function(e,t,r){"use strict"
var n=r("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var c=n(r("RIqP")),s=n(r("lSNA")),d=n(r("o0o1")),f=r("ANjH"),p=r("WVP6"),h=n(r("sINF")),m=n(r("7bO/")),a=r("/TnQ"),u=r("IV71"),v=r("mreW"),g=r("nU12")
function y(t,e){var r=Object.keys(t)
if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t)
e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)}return r}var b=(0,a.composeWithDevTools)({})
t.default=function(e){var t=e.viewMap,r=e.containerReducerMap,n=e.sagaMap,a=e.extendCallback,i=new u.WebpackInterface
if(t)for(var o in t)i.setView(o,t[o])
var l=function(e){var r,t=e.entryMap,n=e.reducerMap,a=e.sagaMap,i=(0,p.createReduxEntry)(),o=i.middleware;(0,i.setEntryMap)(t)
var l=[o]
a&&(r=(0,m.default)(),l.push(r))
var c=(0,f.createStore)((0,f.combineReducers)(n),b(f.applyMiddleware.apply(void 0,l.concat([h.default]))))
if(a){var s=function(t){r.run(d.default.mark(function e(){return d.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,a[t]()
case 3:e.next=0
break
case 5:case"end":return e.stop()}},e)}))}
for(var u in a)s(u)}return{store:c}}({initialState:{model:{},container:{}},entryMap:function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{}
e%2?y(r,!0).forEach(function(e){(0,s.default)(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):y(r).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}({},g.entryMap,{},v.entryMap,{"entry:webpack-interface:view:call":function(e,t){var r=t.payload
setTimeout(function(){return i.callViewMethod.apply(i,[r.name,r.method].concat((0,c.default)(r.args||{})))},0)}}),reducerMap:{model:(0,f.combineReducers)(g.reducerMap),container:(0,f.combineReducers)(r)},sagaMap:n}).store
return i.setStore(l),a&&a(i),i}},"7q5O":function(e,t,r){"use strict"
var n=r("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.getLayerData=void 0
var l=n(r("o0o1")),a=n(r("yXPU")),c=r("t3Un"),i=function(){var r=(0,a.default)(l.default.mark(function e(n,a){var i,o
return l.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(i=n.artboard_id&&a.find(function(e){return e.screen_cid===n.cid&&"image_view"===e.name&&e.image&&-1!==e.image.indexOf(String("/artboard_"))}))){e.next=13
break}if(!window.MBArtboards){e.next=6
break}r=n.cid,o=window.MBArtboards[r],e.next=9
break
case 6:return e.next=8,t=n.artboard_id,(0,c.requestJSON)("".concat("/api/web/v3/project_data","/artboards/layers.json?artboard_id=").concat(t))
case 8:o=e.sent
case 9:u(o,i),s(o),e.next=14
break
case 13:o={artboard:{top:0,left:0,width:n.width,height:n.height},layers:[],document:{document_colors:[],text_styles:[],global_colors:[]}}
case 14:return e.abrupt("return",o)
case 15:case"end":return e.stop()}var t,r},e)}))
return function(e,t){return r.apply(this,arguments)}}()
t.getLayerData=i
var s=function(e){e.layers.some(function(e){return e.z})?e.layers.sort(function(e,t){return e.z-t.z}):e.layers.sort(function(e,t){return parseInt(t.width)*parseInt(t.height)-parseInt(e.width)*parseInt(e.height)})},u=function(e,t){Object.assign(e.artboard,{widgetZ:t.z,widgetTop:t.top,widgetLeft:t.left,widgetWidth:t.width,widgetHeight:t.height}),e.layers.push({id:"artboard-base",name:e.artboard.name,type:"screen",top:0,left:0,z:t.z,width:e.artboard.width,height:e.artboard.height,bg_colors:[{value:t.bg}],
timestamp:t.timestamp+1})}},"80la":function(e,t,r){"use strict"
var n=r("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.reducer=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:l,t=1<arguments.length?arguments[1]:void 0,r=t.type,n=t.payload
switch(r){case"reducer:slice:success":return o({},e,{},n,{loading:!1})
case"reducer:slice:fail":return o({},e,{},n,{error:!0})
default:return e}}
var a=n(r("lSNA"))
function i(t,e){var r=Object.keys(t)
if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t)
e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{}
e%2?i(r,!0).forEach(function(e){(0,a.default)(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(r).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}var l={slices:[],loading:!0,error:!1}},"81q6":function(e,t,r){"use strict"
var n=r("284h"),a=r("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var o=a(r("lwsE")),l=a(r("W8MJ")),c=a(r("a1gu")),s=a(r("Nsbk")),u=a(r("PJYZ")),d=a(r("7W2i")),f=a(r("lSNA")),i=a(r("17x9")),p=n(r("q1tI")),h=a(r("i6OX")),m=r("iLpg"),v=function(e){function i(){var e,t;(0,o.default)(this,i)
for(var r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a]
return t=(0,c.default)(this,(e=(0,s.default)(i)).call.apply(e,[this].concat(n))),(0,f.default)((0,u.default)(t),"setInputRef",function(e){return t.$input=e}),(0,f.default)((0,u.default)(t),"focus",function(){return t.$input.focus()}),(0,f.default)((0,u.default)(t),"handleChange",function(e){t.props.onChange(e.target.value)}),(0,f.default)((0,u.default)(t),"handleClear",function(){t.props.onChange("")}),(0,f.default)((0,u.default)(t),"handleMouseDown",function(e){e.preventDefault()}),(0,f.default)((0,
u.default)(t),"handleKeyDown",function(e){"Escape"===e.key&&t.props.onExit&&t.props.onExit()}),t}return(0,d.default)(i,e),(0,l.default)(i,[{key:"render",value:function(){var e=this.props,t=e.value,r=e.placeholder,n=e.className,a=e.inputStyle
return p.default.createElement(m.StyledSearchBar,{type:"search",className:n},p.default.createElement(h.default,{type:"dora",name:"scale",className:"search-icon"}),p.default.createElement("input",{ref:this.setInputRef,style:a,type:"text",value:t,placeholder:r,onChange:this.handleChange,onKeyDown:this.handleKeyDown}),0<t.length&&p.default.createElement(h.default,{type:"dora",name:"times_fc",className:"clear-icon",onMouseDown:this.handleMouseDown,onClick:this.handleClear}))}}]),i}(p.PureComponent)
t.default=v,(0,f.default)(v,"propTypes",{value:i.default.string,inputStyle:i.default.object,placeholder:i.default.string,className:i.default.string,onChange:i.default.func,onExit:i.default.func})},"8CMD":function(e,t,r){"use strict"
var n=r("284h"),a=r("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var o=a(r("o0o1")),l=a(r("yXPU")),i=a(r("lwsE")),c=a(r("W8MJ")),s=a(r("a1gu")),u=a(r("Nsbk")),d=a(r("PJYZ")),f=a(r("7W2i")),p=a(r("lSNA")),h=a(r("17x9")),m=n(r("q1tI")),v=r("ouuI"),g=r("2M3O"),y=(0,v.createAsyncTaskQueue)().pushTask,b=function(e){function r(e){var t
return(0,i.default)(this,r),t=(0,s.default)(this,(0,u.default)(r).call(this,e)),(0,p.default)((0,d.default)(t),"setElementRef",function(e){return t.$elem=e}),t.isUnmounted=!1,t.retryTimer=null,t}return(0,f.default)(r,e),(0,c.default)(r,[{key:"componentDidMount",value:function(){this.props.isVisible&&this.generateSnapshotTask()}},{key:"componentDidUpdate",value:function(e,t){this.props.isVisible&&(clearTimeout(this.retryTimer),this.generateSnapshotTask())}},{key:"componentWillUnmount",value:function(){
this.isUnmounted=!0,clearTimeout(this.retryTimer)}},{key:"generateSnapshotTask",value:function(e){var i=this,t=0<arguments.length&&void 0!==e?e:5
y((0,l.default)(o.default.mark(function e(){var t,r,n,a
return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=i.props,r=t.projectToken,n=t.screenCid,a=t.version,t.isVisible){e.next=3
break}return e.abrupt("return")
case 3:if(i.isUnmounted)return e.abrupt("return")
e.next=5
break
case 5:return e.next=7,(0,g.requestThumbnail)({imageElement:i.$elem,projectAccessToken:r,screenCid:n,version:a})
case 7:case"end":return e.stop()}},e)}))).catch(function(e){i.retryTimer=setTimeout(function(){i.generateSnapshotTask(2*t)},1e3*t)})}},{key:"render",value:function(){return m.default.createElement("img",{ref:this.setElementRef,src:"/images/preview/image-load.png"})}}]),r}(m.PureComponent)
t.default=b,(0,p.default)(b,"propTypes",{projectToken:h.default.string.isRequired,screenCid:h.default.string.isRequired,version:h.default.string,isVisible:h.default.bool.isRequired})},"8Fba":function(e,t,r){"use strict"
var n=r("284h"),a=r("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var c=a(r("J4zp")),i=a(r("lwsE")),o=a(r("W8MJ")),l=a(r("a1gu")),s=a(r("Nsbk")),d=a(r("PJYZ")),u=a(r("7W2i")),f=a(r("lSNA")),h=n(r("q1tI")),m=a(r("DKAG")),p=a(r("17x9")),v=r("/5+U")
r("v8PR")
var g="hidden",y=function(e){function r(e){var u;(0,i.default)(this,r),u=(0,l.default)(this,(0,s.default)(r).call(this,e)),(0,f.default)((0,d.default)(u),"cancelColorPicker",function(e){u.imageCanvas.contains(e.target)||u.cancelPickerMode()}),(0,f.default)((0,d.default)(u),"cancelPickerMode",function(){return u.props.dispatch({type:"reducer:preview-toolbar:update",payload:{isShowColorPicker:!1}})}),(0,f.default)((0,d.default)(u),"renderImageCanvas",function(){var e=u.imageCanvas.getBoundingClientRect(),
t=e.width,r=e.height
u.lastCanvasRect={width:t,height:r},u.imageCanvas.width=t,u.imageCanvas.height=r,u.imageCtx.drawImage(u.image,0,0,t,r)}),(0,f.default)((0,d.default)(u),"calculateCenterPoint",function(e){var t=u.image.getBoundingClientRect(),r=t.left,n=t.top
u.centerPoint={centerX:Math.floor(e.clientX-r),centerY:Math.floor(e.clientY-n)}}),(0,f.default)((0,d.default)(u),"handleMove",function(e){u.image.complete&&u.state.visibility===g&&u.setState({visibility:"visible"}),u.calculateCenterPoint(e)
var t=u.props,r=t.glassHeight,n=t.glassWidth,a=t.scale,i=u.centerPoint,o=i.centerX,l=i.centerY,c=Math.floor(o-n/2),s=Math.floor(l-r/2)
u.setState({glassLeft:c,glassTop:s}),l<0&&u.clearGlassRect(),u.glassCtx.clearRect(0,0,n,r),a<1&&console.warn("Can't make the galss scale less than 1, It will make bed invision"),k(u.glassCtx,!1),u.glassCtx.drawImage(u.imageCanvas,Math.floor(o-n/2/u.finallyScale),Math.floor(l-r/2/u.finallyScale),Math.floor(n/u.finallyScale),Math.floor(r/u.finallyScale),-5,-5,n,r),C(u.glassCtx,"lightgray",10,10),_(u.glassCtx),x(u.glassCtx,"black",Math.floor((n-10)/2),Math.floor((r-10)/2),10,10),u.getColor()}),(0,f.default)((0
,d.default)(u),"getColor",function(){var e=u.centerPoint,t=e.centerX,r=e.centerY,n=u.imageCtx.getImageData(t,r,1,1).data,a=b(n),i=a.rgba,o=a.R,l=a.G,c=a.B
u.setState({color:i,R:o,G:l,B:c}),u.color=i}),(0,f.default)((0,d.default)(u),"handleClick",function(){u.getColor()
var e=u.color,t=(0,v.saveRecentColor)(e),r=t.history,n=t.focusColor
clearTimeout(u.timeoutToken),u.props.dispatch({type:"reducer:preview-toolbar:update",payload:{userPickColor:r,focusColor:n}}),u.timeoutToken=setTimeout(function(){u.props.dispatch({type:"reducer:preview-toolbar:update",payload:{userPickColor:r,focusColor:null}})},1e3)}),(0,f.default)((0,d.default)(u),"clearGlassRect",function(){var e=u.props,t=e.glassHeight,r=e.glassWidth
u.glassCtx.clearRect(0,0,r,t),u.setState({visibility:g})}),(0,f.default)((0,d.default)(u),"handleMouseLeave",function(){u.clearGlassRect()}),(0,f.default)((0,d.default)(u),"handleKeyDown",function(e){"escape"===e.key.toLowerCase()&&(u.clearGlassRect(),u.cancelPickerMode())}),(0,f.default)((0,d.default)(u),"handleLoad",function(){u.renderImageCanvas()}),(0,f.default)((0,d.default)(u),"handleError",function(){u.cancelPickerMode()})
var t=u.props.scale
return u.iamgeContainerRef=function(e){return u.image=e},u.getImageCanvasRef=function(e){return u.imageCanvas=e},u.glassCanvasRef=function(e){return u.glassCanvas=e},u.finallyScale=10*(t<1?1:t),u.state={visibility:g,glassLeft:0,glassTop:0,color:"#fff",R:0,G:0,B:0},u}return(0,u.default)(r,e),(0,o.default)(r,[{key:"componentDidMount",value:function(){this.imageCtx=this.imageCanvas.getContext("2d"),this.glassCtx=this.glassCanvas.getContext("2d")}},{key:"componentDidCatch",value:function(e){console.log(e),
this.cancelPickerMode()}},{key:"componentDidUpdate",value:function(){if(this.imageCanvas){var e=this.imageCanvas.getBoundingClientRect(),t=e.width,r=e.height,n=this.lastCanvasRect||{width:0,height:0},a=n.width,i=n.height
a==t&&i==r||(this.clearGlassRect(),this.renderImageCanvas())}else this.handleError()}},{key:"render",value:function(){var e=this.props,t=e.width,r=e.height,n=e.glassWidth,a=e.glassHeight,i=e.src,o=this.state,l=o.visibility,c=o.glassLeft,s=o.glassTop,u=o.color,d=o.R,f=o.G,p=o.B
return h.default.createElement("div",{className:"mb-picker-container"},h.default.createElement("img",{ref:this.iamgeContainerRef,className:"mb-picker-image",width:t,height:r,src:i,onLoad:this.handleLoad,onError:this.handleError}),h.default.createElement("canvas",{ref:this.getImageCanvasRef,onMouseMove:this.handleMove,onMouseLeave:this.handleMouseLeave,onClick:this.handleClick,style:{width:t,height:r,opacity:0}}),h.default.createElement("div",{className:"mb-glass",style:{width:n,height:a,visibility:l,left:c,
top:s}},h.default.createElement("div",{className:"shadow"}),h.default.createElement("canvas",{ref:this.glassCanvasRef,width:n,height:a,style:{width:n,height:a}}),h.default.createElement("div",{style:{top:a/2+15},className:"mb-glass-text"},h.default.createElement("div",{className:"mb-rgba-color"},"R:".concat(d," G:").concat(f," B:").concat(p," ").concat(String(w(u).hex).toUpperCase())))),h.default.createElement(m.default,{target:document,onKeyDown:this.handleKeyDown,onClick:this.cancelColorPicker}))}}]),r}(
h.PureComponent)
t.default=y,(0,f.default)(y,"propTypes",{src:p.default.string,width:p.default.oneOfType([p.default.string,p.default.number]),height:p.default.oneOfType([p.default.string,p.default.number]),glassHeight:p.default.number,glassWidth:p.default.number,scale:p.default.number,dispatch:p.default.func}),(0,f.default)(y,"defaultProps",{src:"/sec3.png",width:1300,height:769,glassWidth:200,glassHeight:200,scale:1,pickColor:function(e){return console.log(e)}})
var b=function(e){return e[3]=parseFloat(e[3]/255),{rgba:"rgba(".concat(e.join(", "),")"),R:e[0],G:e[1],B:e[2]}},S=/rgba?\((\d+),(\d+),(\d+),?(\d+)?/,w=function(e){var t=S.exec(e.replace(/ /g,"").toLowerCase())
if(!t||!t[3])return e
var r=(0,c.default)(t,5),n=r[1],a=r[2],i=r[3],o=r[4],l=void 0===o?"1":o
return{hex:"#".concat(E(n)).concat(E(a)).concat(E(i)),o:Number(l)}},E=function(e){var t=parseInt(e,10).toString(16)
return 1===t.length?"0".concat(t):t},C=function(e,t,r,n){e.strokeStyle=t,e.lineWidth=.5
for(var a=r+5.5;a<e.canvas.width-r;a+=r)e.beginPath(),e.moveTo(a,0),e.lineTo(a,e.canvas.height),e.stroke()
for(var i=n+5.5;i<e.canvas.height-r;i+=n)e.beginPath(),e.moveTo(0,i),e.lineTo(e.canvas.width,i),e.stroke()},k=function(e,t){e.mozImageSmoothingEnabled=t,e.webkitImageSmoothingEnabled=t,e.msImageSmoothingEnabled=t,e.imageSmoothingEnabled=t},_=function(e){e.beginPath(),e.strokeStyle="#8D9EA7",e.lineWidth=8,e.arc(100,100,96,0,2*Math.PI),e.stroke(),e.strokeStyle="#D4D7DC",e.lineWidth=5,e.arc(100,100,96,0,2*Math.PI),e.stroke()},x=function(e,t,r,n,a,i){e.beginPath(),r+=.5,n+=.5,e.strokeStyle=t,e.lineWidth=1,
e.moveTo(r,n),e.lineTo(r+a,n),e.lineTo(r+a,n+i),e.lineTo(r,n+i),e.lineTo(r,n),e.stroke(),e.beginPath(),e.lineWidth=1,e.strokeStyle="white",e.moveTo(r-1,n-1),e.lineTo(r+a+1,n-1),e.lineTo(r+a+1,n+1+i),e.lineTo(r-1,n+i+1),e.lineTo(r-1,n-1),e.stroke()}},"8jgF":function(e,t,r){"use strict"
var n=r("284h"),a=r("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var o=a(r("lwsE")),i=a(r("W8MJ")),l=a(r("a1gu")),c=a(r("Nsbk")),s=a(r("PJYZ")),u=a(r("7W2i")),d=a(r("lSNA")),f=n(r("q1tI")),p=a(r("17x9")),h=r("6XO9"),m=a(r("i6OX")),v=r("zAG7"),g=r("7Qib")
function y(t,e){var r=Object.keys(t)
if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t)
e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)}return r}function b(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{}
e%2?y(r,!0).forEach(function(e){(0,d.default)(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):y(r).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}r("oSKl")
var S=function(e){function a(){var e,i;(0,o.default)(this,a)
for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n]
return i=(0,l.default)(this,(e=(0,c.default)(a)).call.apply(e,[this].concat(r))),(0,d.default)((0,s.default)(i),"state",{formData:{name:"",email:"",pwd:""},submitErrMsg:"",submitted:!1}),(0,d.default)((0,s.default)(i),"handleFormDataChange",function(t){return function(e){return i.setState({formData:b({},i.state.formData,(0,d.default)({},t,e))})}}),(0,d.default)((0,s.default)(i),"handleEmailChange",function(e){return i.setState({formData:b({},i.state.formData,{email:e})})}),(0,d.default)((0,s.default)(i),
"resetSubmitErrMsg",function(){return i.setState({submitErrMsg:""})}),(0,d.default)((0,s.default)(i),"verifyEmail",function(e){return v.EMAIL_REG.test(e)}),(0,d.default)((0,s.default)(i),"handleSignUp",function(){var e=i.props.event,t=i.state.formData,r=t.name,n=t.email,a=t.pwd
if(i.resetSubmitErrMsg(),!i.verifyEmail(n))return i.setState({submitErrMsg:I18N.design.verify_email_address});(0,g.post)("/events/sign_up.json",{username:r,email:n,password:a,locale:"zh-CN",event:e.name}).then(function(){return(0,g.post)("/sessions.json",{email:n,password:a}).then(function(){return i.setState({submitted:!0})})},function(e){return i.setState({submitErrMsg:e.detail})})}),i}return(0,u.default)(a,e),(0,i.default)(a,[{key:"render",value:function(){var e=this.props,t=e.inMobile,r=e.isOpen,
n=e.event,a=this.state,i=a.formData,o=i.name,l=i.email,c=i.pwd,s=a.submitErrMsg,u=a.submitted,d=!!o&&!!l&&!!c
return f.default.createElement(h.Modal,{className:"sign-up-modal ".concat(t?"modal-in-mobile":""),maskClassName:"modal-mask",title:I18N.design.register_account,isOpen:r},u?f.default.createElement("div",{className:"award-view"},f.default.createElement("img",{className:"award",src:"/images/event/award.png"}),f.default.createElement("p",{className:"success-tip"},n.successTip)):f.default.createElement("div",{className:"sign-up-view"},f.default.createElement("p",{className:"event-desc"},n.desc),
f.default.createElement("div",{className:"input-entry"},f.default.createElement(m.default,{className:"icon",type:"mb",name:"user"}),f.default.createElement(h.Input,{className:"input",placeholder:I18N.design.user_name,defaultValue:o,onChange:this.handleFormDataChange("name")})),f.default.createElement("div",{className:"input-entry"},f.default.createElement(m.default,{className:"icon",type:"mb",name:"mail"}),f.default.createElement(h.InputEmail,{className:"input",placeholder:I18N.design.user_email,
defaultValue:l,onChange:this.handleEmailChange})),f.default.createElement("div",{className:"input-entry"},f.default.createElement(m.default,{className:"icon",type:"mb",name:"lock"}),f.default.createElement(h.Input,{className:"input",placeholder:I18N.design.user_password,type:"password",defaultValue:c,onChange:this.handleFormDataChange("pwd")})),!!s&&f.default.createElement("p",{className:"error-msg"},"* ".concat(s)),f.default.createElement(h.Button,{className:"primary-button",type:"primary",isDisabled:!d,
onClick:this.handleSignUp},I18N.design.sign_up),f.default.createElement("p",{className:"agree-terms"},I18N.design.click_register_meant_agree,f.default.createElement("a",{href:"/tos",target:"_blank"},I18N.design.terms_of_service))))}}]),a}(f.PureComponent);(t.default=S).propTypes={event:p.default.object,isOpen:p.default.bool,inMobile:p.default.bool}},"94Et":function(e,t,r){"use strict"
var n=r("284h"),a=r("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.CommentMarkerPanel=void 0
var s=a(r("pVnL")),i=a(r("J4zp")),l=a(r("lwsE")),o=a(r("W8MJ")),c=a(r("a1gu")),u=a(r("Nsbk")),d=a(r("7W2i")),f=a(r("lSNA")),p=n(r("q1tI")),h=a(r("17x9")),m=r("LkRk"),v=r("/rSK"),g=r("fiFu")
function y(t,e){var r=Object.keys(t)
if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t)
e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)}return r}var b="TEMP_MARKER_CID",S=function(e){function t(e){var o;(0,l.default)(this,t),(o=(0,c.default)(this,(0,u.default)(t).call(this,e))).addTempCommentThreadListener=(0,g.muteEvent)(function(e){var t=o.props,r=t.isActive,n=t.permissionPack,a=t.markerDomPack,i=t.dispatch
r&&n.getPermission().create&&w(e,a.getSimulatorContainerElement().getBoundingClientRect())&&i({type:"container:comment:focus-temp-marker",payload:function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{}
e%2?y(r,!0).forEach(function(e){(0,f.default)(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):y(r).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}({},o.markerOperations.getMarkerPosition(e),{cid:b})})})
function r(e){var t=0<arguments.length&&void 0!==e?e:null
return o.props.dispatch({type:"container:comment:focus",payload:{focusCommentThreadCid:t,focusSource:"marker"}})}return o.markerOperations={addContainerEventListener:function(e){var a=o.props.markerDomPack.getSimulatorContainerElement()
a&&Object.entries(e).forEach(function(e){var t=(0,i.default)(e,2),r=t[0],n=t[1]
return a.addEventListener(r,n)})},removeContainerEventListener:function(e){var a=o.props.markerDomPack.getSimulatorContainerElement()
a&&Object.entries(e).forEach(function(e){var t=(0,i.default)(e,2),r=t[0],n=t[1]
return a.removeEventListener(r,n)})},setFocusCommentThreadCid:r,setHoverFocusCommentThreadCid:function(e){var t=0<arguments.length&&void 0!==e?e:null
return!o.props.tempCommentThreadMarker&&r(t)},doUpdateCommentThread:function(e){var t=e.cid,r=e.top,n=e.left
return o.props.dispatch({type:t!==b?"entry:comment-threads:update":"container:comment:focus-temp-marker",payload:{cid:t,top:r,left:n}})},getMarkerPosition:function(e){var t=o.props,r=t.scale,n=t.markerDomPack,a=n.getScreenContainerElement().getBoundingClientRect(),i=n.getSimulatorContainerElement().getBoundingClientRect()
return{left:((0,m.clamp)(e.clientX,i.left+20,i.right-20)-a.left)/r,top:((0,m.clamp)(e.clientY,i.top+20,i.bottom-20)-a.top)/r}}},o}return(0,d.default)(t,e),(0,o.default)(t,[{key:"componentDidMount",value:function(){this.props.isActive&&this.toggleEventListener(!0)}},{key:"componentDidUpdate",value:function(e){var t=this.props.isActive
t!==e.isActive&&this.toggleEventListener(t)}},{key:"componentWillUnmount",value:function(){var e=this.props.dispatch
this.toggleEventListener(!1),e({type:"container:comment:focus-temp-marker",payload:null})}},{key:"toggleEventListener",value:function(e){var t=this.props.markerDomPack.getSimulatorContainerElement()
t&&(e?t.addEventListener("dblclick",this.addTempCommentThreadListener):t.removeEventListener("dblclick",this.addTempCommentThreadListener))}},{key:"render",value:function(){var a=this,e=this.props,t=e.isActive,i=e.scale,o=e.permissionPack,r=e.commentThreadList,n=e.isLoaded,l=e.focusCommentThreadCid,c=e.tempCommentThreadMarker
return t&&n?p.default.createElement("div",null,r.map(function(e,t){var r=Boolean(!c&&l===e.cid),n=Boolean(c||l&&!r)
return p.default.createElement(v.CommentMarker,(0,s.default)({key:e.cid},{commentMarkerIndex:t+1,commentThread:e,scale:i,isEditable:o.getPermission(e.user_id).update,isFocus:r,isFade:n,markerOperations:a.markerOperations}))}),c&&p.default.createElement(v.CommentMarker,{commentMarkerIndex:r.length+1,commentThread:c,scale:i,isEditable:!0,isFocus:!0,isFade:!1,markerOperations:this.markerOperations})):null}}]),t}(p.PureComponent)
t.CommentMarkerPanel=S,(0,f.default)(S,"propTypes",{scale:h.default.number,isActive:h.default.bool,isLoaded:h.default.bool,permissionPack:h.default.object,markerDomPack:h.default.object,commentThreadList:h.default.array,focusCommentThreadCid:h.default.string,tempCommentThreadMarker:h.default.object,dispatch:h.default.func})
var w=function(e,t){var r=t.left,n=t.top,a=t.width,i=t.height
return r<=e.clientX&&n<=e.clientY&&r+a>=e.clientX&&n+i>=e.clientY}},"9ZUU":function(e,t,r){"use strict"
var n=r("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var a=r("/MKj"),i=n(r("Hrzm")),o=r("upRB"),l=(0,a.connect)(function(e){var t=(0,o.getRunnerState)(e),r=t.activeCid,n=t.screenInfoMap
return{screenCid:r,stateCid:n[r]&&n[r].stateCid}})(i.default)
t.default=l},Aa0X:function(e,t,r){"use strict"
var n=r("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var a=r("/MKj"),i=r("G4qV"),o=r("upRB"),l=r("1iCU"),c=r("pVAx"),s=n(r("dhJN")),u=(0,i.createSelector)([o.getPreference,o.getCurrentMode,o.getIsMultiScreenProject],function(e,t,r){return{toolbarActiveItem:t,isScreenPanelShow:e.layout!==c.CLASSIC&&r,isLayerPanelShow:e.layout===c.CLASSIC&&t===l.INSPECT,isCommentPanelShow:e.layout===c.CLASSIC&&t==l.COMMENT}}),d=(0,a.connect)(function(e){return u(e)})(s.default)
t.default=d},An9T:function(e,t,r){e.exports={shell:"xQWL5y1StSdX9vRfMCP2i"}},Aq2W:function(e,t,r){"use strict"
var n=r("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
function a(){return(new Date).getTime()}var i=n(r("lwsE")),o=n(r("W8MJ")),l=function(){function e(){(0,i.default)(this,e),this.coolDownTime=a(),this.coolDownInterval=200}return(0,o.default)(e,[{key:"isCoolDown",value:function(){var e=a()-this.coolDownTime
return this.coolDownTime+=e,e>this.coolDownInterval}},{key:"resetCoolDown",value:function(){this.coolDownTime-=this.coolDownInterval}}]),e}()
t.default=l},BVfv:function(e,t,r){"use strict"
var n=r("284h"),a=r("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var i=a(r("lwsE")),o=a(r("W8MJ")),l=a(r("a1gu")),c=a(r("Nsbk")),s=a(r("PJYZ")),u=a(r("7W2i")),d=a(r("lSNA")),p=n(r("q1tI")),f=a(r("17x9")),h=r("6XO9"),m=r("wYtL"),v=a(r("m48X")),g=a(r("i6OX")),y=a(r("UbMB")),b=a(r("rj4U"))
function S(t,e){var r=Object.keys(t)
if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t)
e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)}return r}var w=y.default.bind(b.default),E=function(e){function t(e){var n
return(0,i.default)(this,t),n=(0,l.default)(this,(0,c.default)(t).call(this,e)),(0,d.default)((0,s.default)(n),"updateSubToolbar",function(e){n.props.dispatch({type:"reducer:preview-toolbar:update",payload:function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{}
e%2?S(r,!0).forEach(function(e){(0,d.default)(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):S(r).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}({},e)})}),(0,d.default)((0,s.default)(n),"pickColor",function(e){e.nativeEvent.stopImmediatePropagation(),MB.event("preview","在标注模式中使用了自定义取色"),n.updateSubToolbar({isShowColorPicker:!0,showLayerList:!1,isSelectLayer:!1})}),(0,d.default)((0,s.default)(n),
"updateDeviceUnit",function(e){var t=n.props.emPixel,r=j(e,t)
n.updateSubToolbar(r?{unit:e,ratio:r}:{unit:e}),MB.event("preview","在".concat(e,"下切换倍率为").concat(r))}),(0,d.default)((0,s.default)(n),"updateLanguage",function(e){MB.event("preview","代码切换".concat(e)),n.updateSubToolbar({language:e})}),(0,d.default)((0,s.default)(n),"updateColorUnit",function(e){n.updateSubToolbar({colorUnit:e})}),(0,d.default)((0,s.default)(n),"updateEmPixel",function(e){var t=Number(e)
n.updateSubToolbar({emPixel:t,ratio:t}),n.setState({customEmPixel:""})
var r=n.props.unit
MB.event("preview","在".concat(r,"下切换倍率为").concat(t))}),(0,d.default)((0,s.default)(n),"onTypingEmPixel",function(e){if(e){n.setState({customEmPixel:e}),n.updateSubToolbar({emPixel:e,ratio:e})
var t=n.props.unit
MB.event("preview","在".concat(t,"在设置自定义倍率").concat(e))}}),(0,d.default)((0,s.default)(n),"handleMobileChange",function(e){var t=n.props.unit
n.updateSubToolbar({ratio:Number(e)}),MB.event("preview","在".concat(t,"下切换倍率为").concat(e))}),n.state={showLogin:!1,customEmPixel:""},n}return(0,u.default)(t,e),(0,o.default)(t,[{key:"UNSAFE_componentWillReceiveProps",value:function(e){var t=e.unit
this.props.unit!==t&&t===C&&this.updateSubToolbar({ratio:1})}},{key:"render",value:function(){var e=this.props,t=e.unit,r=e.emPixel,n=e.ratio,a=e.language,i=e.isShowColorPicker,o=e.colorUnit,l=e.isLogin,c=this.state.customEmPixel,s=t===_||t===k,u=t===C,d=t===_?O:M,f=[{value:10,label:"10px"},{value:12,label:"12px"},{value:14,label:"14px"},{value:16,label:"16px"},{value:r,label:"".concat(r,"px")},p.default.createElement("div",{onClick:function(e){return e.stopPropagation()}},p.default.createElement(
h.InputNumber,{size:"small",min:1,max:99,precision:0,value:c,placeholder:I18N.custom,onChange:this.onTypingEmPixel}))]
return p.default.createElement("div",{className:w("sub-toolbar","preview-sub-toolbar")},p.default.createElement("div",{className:"mode"},p.default.createElement(g.default,{name:"cursor",type:"dora",className:(0,h.trimList)(["cursor",!i&&"is-active"])}),p.default.createElement(m.Tooltip,{arrowed:!0,position:"bottom",duration:1500,className:(0,h.trimList)(["picker",i&&"is-active"]),tipClassName:"marign-top-20",content:{click:l?null:I18N.preview.guide_login,hover:I18N.preview.color_picker}},
p.default.createElement(g.default,{name:"tube",type:"dora",onClick:this.pickColor}))),p.default.createElement("div",{className:"param"},p.default.createElement(v.default,{className:"color-unit",menuClassName:"PreviewSubToolbarSelectMenu",value:o,optionList:P,onChange:this.updateColorUnit}),p.default.createElement(v.default,{menuClassName:"PreviewSubToolbarSelectMenu",placeholder:" ",optionList:T,value:a,onChange:this.updateLanguage}),p.default.createElement(v.default,{className:"device-unit",
menuClassName:"PreviewSubToolbarSelectMenu",optionList:x,value:t,onChange:this.updateDeviceUnit}),s?p.default.createElement(v.default,{menuClassName:"PreviewSubToolbarSelectMenu",optionList:d,value:n,onChange:this.handleMobileChange}):u?p.default.createElement("span",{className:"px-ratio"},"@1x"):p.default.createElement(v.default,{className:"em-pixel",menuClassName:"PreviewSubToolbarSelectMenu scale-select-menu",optionList:f,value:r,onChange:this.updateEmPixel})))}}]),t}(p.PureComponent)
t.default=E,(0,d.default)(E,"propTypes",{unit:f.default.string,language:f.default.string,ratio:f.default.number,colorUnit:f.default.string,isShowColorPicker:f.default.bool,emPixel:f.default.number,isLogin:f.default.bool,dispatch:f.default.func})
var C="px",k="pt",_="dp",x=[C,"em","rem",_,k],T=[{value:"swift",label:"Swift"},{value:"android",label:"Android"},{value:"css",label:"CSS"},{value:"less",label:"Less"},{value:"sass",label:"Sass"},{value:"stylus",label:"Stylus"}],P=[{value:"hex",label:"Hex"},{value:"rgb",label:"RGB"},{value:"rgba",label:"RGBA"},{value:"argb",label:"ARGB"}],M=[1,2,3].map(function(e){return{value:e,label:"@".concat(e,"x")}}),O=[.75,1,1.5,2,3,4].map(function(e){return{value:e,label:"@".concat(e,"x")}}),j=function(e,t){
return"em"===e||"rem"===e?t:1}},CWx7:function(e,t,r){"use strict"
var n=r("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.runnerEntry=void 0
var d=n(r("QILm")),g=n(r("RIqP")),y=n(r("lSNA")),b=r("upRB"),S=r("RKRO")
function a(t,e){var r=Object.keys(t)
if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t)
e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)}return r}function w(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{}
e%2?a(r,!0).forEach(function(e){(0,y.default)(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(r).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}function E(t){var r={},n={}
return Panel.all().forEach(function(e){e.screen_cid===t&&(e.multi_states?n[e.cid]=k(e):r[e.cid]=C(e))}),Screen.find(t).setState("default",!0),{cid:t,stateCid:"default",panelInfoMap:r,chameleonInfoMap:n}}var C=function(e){var t=e.mainState().cid
return{cid:e.cid,activeScreenCid:t,panelScreens:[t]}},k=function(e,t){var r=e.ct().homeScreen(),n=e.mainState().cid
return r.setState(n,!0),{cid:e.cid,stateCid:e.mainState().cid,transition:t}},i={"entry:runner:init:home-screen":function(e,t){var r=e.dispatch,n=t.payload.activeCid
r({type:"runner:update:state",payload:{transition:{name:"none",delay:0,duration:0,offset:100},screenInfoMap:(0,y.default)({},n,E(n)),history:[]}})},"entry:runner:reload:screen":function(e,t){var r=e.dispatch,n=t.payload.activeCid
r({type:"entry:runner:init:home-screen",payload:{activeCid:n}}),r({type:"entry:runner:activate:screen",payload:{screenCid:n}})},"entry:runner:activate:screen":function(e,t){var r=e.getState,n=e.dispatch,a=t.payload,i=a.screenCid,o=a.transition,l=a.resetTargetScreen,c=void 0===l||l,s=r(),u=(0,b.getRunnerState)(s),d=u.activeCid,f=u.screenInfoMap,p=u.history;/drawer|menu/.test((o=o||{name:"none",delay:0,duration:0,offset:100}).name)?(MB.runner.currentScreen=d,MB.runner.currentMenu=i
):MB.runner.currentScreen=MB.runner.currentMenu=null
var h=[i].concat((0,g.default)(p.filter(function(e){return e!==i}))),m=f[i],v=m&&!c?m:E(i)
c&&MB.runner.runnerUtil.resetScreenScrollState(i),n({type:"runner:update:state",payload:{transition:o,screenInfoMap:w({},f,(0,y.default)({},i,v)),activeCid:i,history:h}})},"entry:runner:activate:screen-state":function(e,t){var r=e.getState,n=e.dispatch,a=t.payload,i=a.screenCid,o=a.stateCid,l=a.transition,c=r(),s=(0,b.getRunnerState)(c),u=s.activeCid,d=s.screenInfoMap
if(u===i&&d[u].stateCid!==o){var f=Screen.find(u),p=f.height-(f.headerHeight()+f.footerHeight())
f.setState(o,!0)
var h=f.height-(f.headerHeight()+f.footerHeight()),m=w({},l,{callback:function(){console.log("状态切换完成"),p!=h&&MB.runner.runnerUtil.renderScrollbar(u),MB.runner.timerHandler.setupPageTimers(f,o)}}),v={},g={}
f.cpanels().forEach(function(e){var t=Panelstate.find(o+e.cid)||e
t.cid=e.cid,t.screen_cid=f.cid,t.multi_states=e.multi_states,t.template_cid=e.template_cid,t.multi_states?g[e.cid]=k(t,l):v[e.cid]=C(t)}),n({type:"entry:runner:update:screen",payload:{screenCid:i,stateCid:o,panelInfoMap:v,chameleonInfoMap:g,transition:m}})}},"entry:runner:back-to-prev-page":function(e,t){var r=e.getState,n=e.dispatch,a=t.payload,i=void 0===a?{}:a,o=r(),l=(0,b.getRunnerState)(o),c=l.history,s=l.transition,u=s.name,d=s.duration,f=s.offset
if(1!==c.length){var p,h=Screen.find(c[0]),m=Screen.find(c[1])
p=h.orient()!==m.orient()?{name:"none",delay:0,duration:0,offset:100}:i.transition?i.transition:{name:(0,S.getReverseTransitionName)(u),delay:0,duration:d,offset:f,callback:i.callback}
var v=c.slice(1)
n({type:"runner:update:state",payload:{activeCid:v[0],transition:p,history:v}})}},"entry:runner:update:screen":function(e,t){var r=e.getState,n=e.dispatch,a=t.payload,i=a.screenCid,o=(0,d.default)(a,["screenCid"])
console.log("entry:runner:update:screen",i,o)
var l=r(),c=(0,b.getRunnerState)(l).screenInfoMap,s=c[i]
if(!s)throw new Error("更新了尚未加载的页面!!")
var u=w({},s,{},o)
n({type:"runner:update:state",payload:{screenInfoMap:w({},c,(0,y.default)({},i,u))}})},"entry:runner:activate:panel-screen":function(e,t){var r=e.getState,n=e.dispatch,a=t.payload,i=a.panelCid,o=a.panelScreenCid,l=a.transition,c=r(),s=(0,b.getRunnerState)(c).screenInfoMap,u=Panel.find(i).screen_cid,d=s[u],f=d.panelInfoMap[i],p=new Set(f.panelScreens)
p.add(o)
var h=w({},f,{transition:l,activeScreenCid:o,panelScreens:Array.from(p)}),m=w({},d,{panelInfoMap:w({},d.panelInfoMap,(0,y.default)({},i,h))})
n({type:"runner:update:state",payload:{screenInfoMap:w({},s,(0,y.default)({},u,m))}})},"entry:runner:preload:screens":function(e){var t=e.getState,r=e.dispatch,n=t(),a=(0,b.getCurrentProject)(n),i=(0,b.getRunnerState)(n),o=i.activeCid,l=i.screenInfoMap,c=i.history.slice(0,2)
Link.all().forEach(function(e){if(e.target_cid&&e.screen_cid===o&&"none"!==e.transition&&"prev"!==e.target_cid){var t=Screen.find(e.target_cid)
t&&t.project_cid===a.cid&&c.push(e.target_cid)}})
var s={}
c.forEach(function(e){s[e]=l[e]||E(e)}),r({type:"runner:update:state",payload:{screenInfoMap:s}})},"entry:runner:update:chameleon":function(e,t){var r=e.getState,n=e.dispatch,a=t.payload,i=a.chameleonCid,o=a.stateCid,l=a.transition,c=r(),s=(0,b.getRunnerState)(c).screenInfoMap,u=Panel.find(i),d=u.screen_cid,f=s[d],p=w({},f.chameleonInfoMap[i],{stateCid:o,transition:w({},l,{callback:function(){MB.runner.timerHandler.setupPanelTimers(u,o)}})}),h=w({},f,{chameleonInfoMap:w({},f.chameleonInfoMap,(0,y.default)(
{},i,p))})
n({type:"runner:update:state",payload:{screenInfoMap:w({},s,(0,y.default)({},d,h))}})}}
t.runnerEntry=i},DJvY:function(e,t,r){"use strict"
var n=r("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var a=r("/MKj"),i=n(r("4WDG")),s=r("upRB"),o=(0,a.connect)(function(e){var t=e.container,r=t.common,n=r.offset,a=r.keyFlags.isSpaceDown,i=t.previewSetting,o=i.toolbarActiveItem,l=i.isShowColorPicker,c=i.isFullScreenMode
return{scale:(0,s.getCurrentScale)(e),canvasOffset:n,screen:(0,s.getCurrentScreen)(e),project:(0,s.getCurrentProject)(e),shellType:(0,s.getShellType)(e),isSpaceDown:a,isStickyShow:(0,s.getIsStickyShow)(e),isScrollable:(0,s.getIsScrollable)(e),isLayerPreview:"preview"==o,isLayerActive:"inspect"==o,isCommentActive:"comment"==o,isFullScreenMode:c,isColorPickerActive:l}})(i.default)
t.default=o},DdUa:function(e,t,r){"use strict"
var n=r("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var f=n(r("J4zp")),a=r("/MKj"),p=r("upRB"),i=n(r("m/Xg")),o=(0,a.connect)(function(e){var t=(0,p.getCurrentScreen)(e),r=(0,p.getCurrentProject)(e),n=(0,p.getIsImmersive)(e),a=(0,p.getIsScrollable)(e),i=n||!a,o=MB.isMobile(),l=MB.isEmbedded(),c=o||l,s=l&&"landscape"===Project.find(r.cid).homeScreen().orientation?[r.height,r.width]:[r.width,r.height],u=l?s:[window.innerWidth,window.innerHeight],d=(0,f.default)(u,2)
return{screen:t,project:r,isLite:c,isImmersive:n,isScreenExpanded:i,viewportWidth:d[0],viewportHeight:d[1]}})(i.default)
t.default=o},DqDi:function(e,t,r){"use strict"
var n=r("284h"),a=r("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.NavigationBar=t.NavItem=t.default=void 0
var o=a(r("PJYZ")),l=a(r("lwsE")),c=a(r("W8MJ")),s=a(r("a1gu")),u=a(r("Nsbk")),d=a(r("7W2i")),f=a(r("lSNA")),i=a(r("17x9")),p=n(r("q1tI")),h=a(r("i6OX")),m=a(r("UbMB")),v=a(r("G916")),g=m.default.bind(v.default)
var y=function(e){function t(){return(0,l.default)(this,t),(0,s.default)(this,(0,u.default)(t).apply(this,arguments))}return(0,d.default)(t,e),(0,c.default)(t,[{key:"render",value:function(){var e=this.props,n=e.activeIndex,t=e.hideBorder,r=e.className,a=e.children,i=e.onTabChange,o=function(e,t,r){var n=0===e,a=e===t-1
return{transform:"translateX(".concat(100*e,"%)"),borderLeftColor:r&&n?"transparent":"",borderRightColor:r&&a?"transparent":""}}(n,p.Children.count(a),t)
return p.default.createElement("ol",{type:"slide-nav",className:g("nav",r)},p.Children.map(a,function(e,t){var r={index:t,active:t===n,BgStyle:0===t?o:null,onClick:i}
return p.default.cloneElement(e,r)}))}}]),t}(p.PureComponent)
t.default=y,(0,f.default)(y,"propTypes",{className:i.default.string,activeIndex:i.default.number,hideBorder:i.default.bool,children:i.default.array,onTabChange:i.default.func}),(0,f.default)(y,"defaultProps",{hideBorder:!1,activeIndex:0})
var b=function(e){function i(){var e,n;(0,l.default)(this,i)
for(var t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a]
return n=(0,s.default)(this,(e=(0,u.default)(i)).call.apply(e,[this].concat(r))),(0,f.default)((0,o.default)(n),"handleClick",function(e){var t=n.props,r=t.index;(0,t.onClick)(r)}),n}return(0,d.default)(i,e),(0,c.default)(i,[{key:"render",value:function(){var e=this.props,t=e.index,r=e.active,n=e.icon,a=e.label,i=e.title,o=e.BgStyle,l=e.dataHtml
return p.default.createElement("li",{className:g("nav-item",{active:r}),"data-html":l,title:i,onClick:this.handleClick},0===t&&p.default.createElement("div",{className:"background-cube",style:o}),n&&p.default.createElement("div",{className:"nav-icon"},"string"==typeof n?p.default.createElement(h.default,{type:"dora",name:n}):n),a&&p.default.createElement("span",{className:"nav-label"},a))}}]),i}(p.PureComponent)
t.NavItem=b,(0,f.default)(b,"propTypes",{index:i.default.number,icon:i.default.oneOfType([i.default.string,i.default.object]),title:i.default.string,label:i.default.string,dataHtml:i.default.string,active:i.default.bool,BgStyle:i.default.object,onClick:i.default.func})
function S(e){var t=e.tabs,r=e.activeIndex,n=e.onChange,a=e.className,i=e.hideBorder,o=e.BgStyle
return p.default.createElement(y,{activeIndex:r,hideBorder:i,onTabChange:n,className:a},t.map(function(e){var t=e.label,r=e.icon
return p.default.createElement(b,{key:t,icon:r,label:t,BgStyle:o})}))}(t.NavigationBar=S).propTypes={tabs:i.default.array,activeIndex:i.default.number,onChange:i.default.func,className:i.default.string,hideBorder:i.default.bool,BgStyle:i.default.object}},EDI8:function(e,t,r){e.exports={"zoom-count":"_2nN0xGcLm4nwqxIkoQCnMF"}},ER7e:function(e,t,r){"use strict"
var n=r("284h"),a=r("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var i=a(r("lwsE")),o=a(r("W8MJ")),l=a(r("a1gu")),c=a(r("Nsbk")),s=a(r("7W2i")),u=a(r("lSNA")),d=a(r("17x9")),f=n(r("q1tI")),p=r("i6OX")
r("peLG")
var h=function(e){function t(){return(0,i.default)(this,t),(0,l.default)(this,(0,c.default)(t).apply(this,arguments))}return(0,s.default)(t,e),(0,o.default)(t,[{key:"render",value:function(){return f.default.createElement("div",{className:"top-right-action"},f.default.createElement("div",{className:"mode"},f.default.createElement(p.SVGIcon,{name:"design/preview/daynight"}),f.default.createElement("span",{className:"light","data-mode":"light",onClick:this.props.onClickMode}),f.default.createElement("span",{
className:"dark","data-mode":"dark",onClick:this.props.onClickMode})),f.default.createElement("div",{className:"exit-full-screen",onClick:this.props.onClickExit},f.default.createElement(p.SVGIcon,{name:"design/preview/exit"})))}}]),t}(f.PureComponent)
t.default=h,(0,u.default)(h,"propTypes",{onClickMode:d.default.func,onClickExit:d.default.func})},EWR0:function(e,t,r){"use strict"
var n=r("284h"),a=r("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var i=a(r("lwsE")),o=a(r("W8MJ")),l=a(r("a1gu")),c=a(r("Nsbk")),s=a(r("PJYZ")),u=a(r("7W2i")),d=a(r("lSNA")),f=a(r("17x9")),p=n(r("q1tI")),h=a(r("NcbO")),m=a(r("GWLA")),v=a(r("YCqe")),g=a(r("UbMB")).default.bind(v.default),y=function(e){function t(){var r
return(0,i.default)(this,t),r=(0,l.default)(this,(0,c.default)(t).call(this)),(0,d.default)((0,s.default)(r),"handleTabClick",function(e){var t=Number(e.target.dataset.index)
r.setState({tabIndex:t})}),r.state={isShow:!1,tabIndex:1},MB.debugRunner=function(){return r.setState({isShow:!r.state.isShow})},r}return(0,u.default)(t,e),(0,o.default)(t,[{key:"render",value:function(){var e=this.props,t=e.runnerState,r=e.dispatch,n=this.state,a=n.isShow,i=n.tabIndex
return a?p.default.createElement("div",{className:g("debug-panel")},p.default.createElement("ul",{className:"tab"},p.default.createElement("li",{"data-index":"0",className:g({active:0===i}),onClick:this.handleTabClick},"状态"),p.default.createElement("li",{"data-index":"1",className:g({active:1===i}),onClick:this.handleTabClick},"控制")),p.default.createElement("div",{className:"content"},0===i&&p.default.createElement(h.default,{runnerState:t,dispatch:r}),1===i&&p.default.createElement(m.default,{dispatch:r}))
):null}}]),t}(p.PureComponent)
t.default=y,(0,d.default)(y,"propTypes",{runnerState:f.default.object,dispatch:f.default.func})},Ehhz:function(e,t,r){"use strict"
var n=r("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.MODEL_OPERATION_MAP=void 0
var a=n(r("lSNA")),i=n(r("RIqP")),c=r("Edok"),s=n(r("zkrS"))
function o(t,e){var r=Object.keys(t)
if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t)
e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)}return r}function u(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{}
e%2?o(r,!0).forEach(function(e){(0,a.default)(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(r).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}var d=s.default.SpineModel,f={Team:"t",Project:"p",Combo:"c",Template:"t",UserTemplate:"ut",Screen:"s",Collaborator:"co",Comment:"cm",CommentThread:"cmth",Widget:"w"},l=Object.keys(f),p=l.reduce(function(e,t){return e[t]=d[t].attributes,e},{})
p.Widget=[].concat((0,i.default)(p.Widget),["id"])
function h(i){return function(e,t,r){var n=t.cid,a=d.Project.findByAttribute("cid",n)?"Project":d.Template.findByAttribute("cid",n)?"Template":d.Combo.findByAttribute("cid",n)?"Combo":null
return m[a][i](e,t,r)}}var m=l.reduce(function(e,t){function l(e,t){return{dataState:e.find(function(e){return e.cid===t}),dataModel:i.findByAttribute("cid",t)}}var i=d[t],n=p[t],o=f[t]
return e[t]={refreshStateList:function(e){return i.all().map(function(e){return function(t,e){var r=1<arguments.length&&void 0!==e?e:{}
return n.forEach(function(e){return r[e]=t[e]}),r}(e,{})})},saveState:function(e,t,r){var n=t.cid,a=l(e,n),i=a.dataState,o=a.dataModel
return i&&o&&(o.lsave(!r),r||s.default.SpineModel.queueSave()),e},addState:function(e,t,r){var n=t.cid||s.default.SpineModel.requestCid(o)
!function(e,t){var r=e.find(function(e){return e.cid===t}),n=i.findByAttribute("cid",t)
return Boolean(r||n)}(e,n)||(n=s.default.SpineModel.requestCid(o))
var a=u({},t,{cid:n})
return new i(a).lsave(!r),r||s.default.SpineModel.queueSave(),(0,c.arrayPush)(e,a)},updateState:function(e,t,r){var n=t.cid,a=l(e,n),i=a.dataState,o=a.dataModel
return i&&o?(i=u({},i,{},t),Object.assign(o,i),o.lsave(!r),r||s.default.SpineModel.queueSave(),(0,c.arrayFindSet)(e,function(e){return e.cid===n},i)):e},deleteState:function(e,t,r){var n=t.cid,a=l(e,n),i=a.dataState,o=a.dataModel
return i&&o?(o.ldestroy(!r),r||s.default.SpineModel.queueSave(),(0,c.arrayFindDelete)(e,function(e){return e.cid===n})):e}},e},{});(t.MODEL_OPERATION_MAP=m).ProjectAlike={refreshStateList:function(e){return[].concat((0,i.default)(m.Combo.refreshStateList()),(0,i.default)(m.Project.refreshStateList()),(0,i.default)(m.Template.refreshStateList()),(0,i.default)(m.UserTemplate.refreshStateList()))},saveState:h("saveState"),addState:h("addState"),updateState:h("updateState"),deleteState:h("deleteState")}},
Emwt:function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
function n(i,o){return s(function(e,t,r){var n=t.dispatch,a=r&&r.payload
n({type:"reducer:screens:update",payload:i(e,a,o)})})}var a=r("WVP6"),i=r("Ehhz").MODEL_OPERATION_MAP.Screen,o=(0,a.createStateStore)([]),l=o.getState,c=o.setState,s=o.wrapEntry,u={entryMap:{"screens:refresh":n(i.refreshStateList,!1),"screens:add":n(i.addState,!1),"screens:add-local":n(i.addState,!0),"screens:update":n(i.updateState,!1),"screens:update-local":n(i.updateState,!0),"screens:delete":n(i.deleteState,!1),"screens:delete-local":n(i.deleteState,!0)},getState:l,setState:c}
t.default=u},"FC/4":function(e,t,r){"use strict"
var n=r("284h"),a=r("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.TextEditComponent=t.createTextEditStore=t.INITIAL_STATE=void 0
var i=a(r("lwsE")),o=a(r("W8MJ")),l=a(r("a1gu")),c=a(r("Nsbk")),s=a(r("7W2i")),u=a(r("lSNA")),d=n(r("q1tI")),f=a(r("17x9")),p=a(r("vOnD")),h=r("6XO9"),m=r("5Qm6")
function v(t,e){var r=Object.keys(t)
if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t)
e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)}return r}var g={value:"",startValue:"",isEditing:!1}
t.INITIAL_STATE=g
t.createTextEditStore=function(e,t){var r=t.onStart,n=t.onChange,a=t.onEnd;(e=function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{}
e%2?v(r,!0).forEach(function(e){(0,u.default)(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):v(r).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}({},g,{},e)).startValue=e.value
var i=(0,m.createStateStore)(e),o=i.subscribe,l=i.unsubscribe,c=i.getState,s=i.setState
return{subscribe:o,unsubscribe:l,getState:c,startEdit:function(){s({isEditing:!0}),r&&r(c()),s({startValue:c().value})},endEdit:function(){s({isEditing:!1}),a&&a(c())},setValue:function(e){c().isEditing&&(s({value:e}),n&&n(c()))}}}
var y=function(e){function a(e){var r;(0,i.default)(this,a),r=(0,l.default)(this,(0,c.default)(a).call(this,e))
function t(e,t){r.setState(e),!t.isEditing&&e.isEditing&&setTimeout(r.focusTextarea,0)}r.bindEditStore=function(e){r.setState(e.getState()),e.subscribe(t)},r.unbindEditStore=function(e){e.unsubscribe(t)},r.onChange=function(e){return r.props.textEditStore.setValue(e)},r.onKeyDown=function(e){"Enter"!==e.key&&13!==e.which||r.props.multiline&&e.shiftKey||(e.preventDefault(),e.stopPropagation(),r.props.textEditStore.endEdit())}
var n=null
return r.setRef=function(e){n=e&&e.querySelector("textarea")},r.focusTextarea=function(){if(n){n.focus&&n.focus()
var e=n.value.length
n.setSelectionRange(e,e)}},r.autoHeightTextarea=function(){r.props.autoHeight&&n&&(n.style.height="auto",n.style.height="".concat(Math.max(n.scrollHeight+2,n.offsetHeight,r.props.minHeight),"px"))},r}return(0,s.default)(a,e),(0,o.default)(a,[{key:"componentDidMount",value:function(){this.bindEditStore(this.props.textEditStore),this.focusTextarea()}},{key:"componentDidUpdate",value:function(e){this.props.textEditStore!==e.textEditStore&&(this.unbindEditStore(e.textEditStore),this.bindEditStore(
this.props.textEditStore)),this.autoHeightTextarea()}},{key:"render",value:function(){var e=this.props,t=e.placeholder,r=void 0===t?"":t,n=e.textEditStore.getState().value
return d.default.createElement(b,{ref:this.setRef},d.default.createElement(h.Textarea,{value:n,placeholder:r,rows:1,onChange:this.onChange,onKeyDown:this.onKeyDown}))}}]),a}(d.PureComponent)
t.TextEditComponent=y,(0,u.default)(y,"propTypes",{textEditStore:f.default.object.isRequired,placeholder:f.default.string,multiline:f.default.bool,autoHeight:f.default.bool,minHeight:f.default.number})
var b=p.default.div.withConfig({displayName:"TextEditComponent__HackStyleDiv",componentId:"sc-1wltfay-0"})(["&&& label{width:100%;}&&& textarea{font-size:12px;resize:none;}"])},FJlG:function(e,t,r){"use strict"
var n=r("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:u,t=1<arguments.length?arguments[1]:void 0,r=t.type,n=t.payload
switch(r){case"reducer:preview-toolbar:update":return s({},e,{},n)
case"reducer:preview-toolbar:active-item:init":return s({},e,{toolbarActiveItem:i.PREVIEW,shellType:(0,l.localStorageGetItem)("preview-shell-type-".concat(MB.currentProject.cid))||MB.currentProject.shell_type})
case"reducer:preview-toolbar:fullscreen":return s({},e,{isFullScreenMode:n.isFullScreenMode})
case"reducer:preview-toolbar:update:highlight":return s({},e,{isHighlight:n.isHighlight})
default:return e}}
var a=n(r("lSNA")),i=r("1iCU"),o=r("/5+U"),l=r("7Qib")
function c(t,e){var r=Object.keys(t)
if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t)
e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)}return r}function s(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{}
e%2?c(r,!0).forEach(function(e){(0,a.default)(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(r).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}var u={ratio:1,emPixel:16,unit:"px",colorUnit:"hex",language:"css",toolbarActiveItem:i.PREVIEW,isShowColorPicker:!1,isSelectLayer:!1,userPickColor:(0,o.getHistoryColor)(),focusColor:null,loadSliceUrl:"",isFullScreenMode:!1,isScrollable:!0,isStickyShow:!0,
isHighlight:!0,shellType:"device"}},FTTL:function(e,t,r){"use strict"
var i,o,f,h,m,l=r("TqRt")(r("cDf5"))
function n(e,t){for(var r in this.wrapper="string"==typeof e?o.querySelector(e):e,this.scroller=this.wrapper.children[0],this.scrollerStyle=this.scroller.style,this.options={resizeScrollbars:!0,mouseWheelSpeed:20,snapThreshold:.334,disablePointer:!m.hasPointer,disableTouch:m.hasPointer||!m.hasTouch,disableMouse:m.hasPointer||m.hasTouch,startX:0,startY:0,scrollY:!0,directionLockThreshold:5,momentum:!0,bounce:!0,bounceTime:600,bounceEasing:"",preventDefault:!0,preventDefaultException:{
tagName:/^(INPUT|TEXTAREA|BUTTON|SELECT)$/},HWCompositing:!0,useTransition:!0,useTransform:!0,bindToWrapper:void 0===i.onmousedown},t)this.options[r]=t[r]
this.translateZ=this.options.HWCompositing&&m.hasPerspective?" translateZ(0)":"",this.options.useTransition=m.hasTransition&&this.options.useTransition,this.options.useTransform=m.hasTransform&&this.options.useTransform,this.options.eventPassthrough=!0===this.options.eventPassthrough?"vertical":this.options.eventPassthrough,this.options.preventDefault=!this.options.eventPassthrough&&this.options.preventDefault,this.options.scrollY="vertical"!=this.options.eventPassthrough&&this.options.scrollY,
this.options.scrollX="horizontal"!=this.options.eventPassthrough&&this.options.scrollX,this.options.freeScroll=this.options.freeScroll&&!this.options.eventPassthrough,this.options.directionLockThreshold=this.options.eventPassthrough?0:this.options.directionLockThreshold,this.options.bounceEasing="string"==typeof this.options.bounceEasing?m.ease[this.options.bounceEasing]||m.ease.circular:this.options.bounceEasing,this.options.resizePolling=void 0===this.options.resizePolling?60:this.options.resizePolling,
!0===this.options.tap&&(this.options.tap="tap"),this.options.useTransition||this.options.useTransform||/relative|absolute/i.test(this.scrollerStyle.position)||(this.scrollerStyle.position="relative"),"scale"==this.options.shrinkScrollbars&&(this.options.useTransition=!1),this.options.invertWheelDirection=this.options.invertWheelDirection?-1:1,3==this.options.probeType&&(this.options.useTransition=!1),this.x=0,this.y=0,this.directionX=0,this.directionY=0,this._events={},this._init(),this.refresh(),
this.scrollTo(this.options.startX,this.options.startY),this.enable()}function c(e,t,r){var n=o.createElement("div"),a=o.createElement("div")
return!0===r&&(n.style.cssText="position:absolute;z-index:9999",a.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px"),a.className="iScrollIndicator","h"==e?(!0===r&&(n.style.cssText+=";height:7px;left:2px;right:2px;bottom:0",a.style.height="100%"),n.className="iScrollHorizontalScrollbar"):(!0===r&&(n.style.cssText+=";width:7px;bottom:2px;top:2px;right:1px",
a.style.width="100%"),n.className="iScrollVerticalScrollbar"),n.style.cssText+=";overflow:hidden",t||(n.style.pointerEvents="none"),n.appendChild(a),n}function s(e,t){for(var r in this.wrapper="string"==typeof t.el?o.querySelector(t.el):t.el,this.wrapperStyle=this.wrapper.style,this.indicator=this.wrapper.children[0],this.indicatorStyle=this.indicator.style,this.scroller=e,this.options={listenX:!0,listenY:!0,interactive:!1,resize:!0,defaultScrollbars:!1,shrink:!1,fade:!1,speedRatioX:0,speedRatioY:0},t
)this.options[r]=t[r]
if(this.sizeRatioX=1,this.sizeRatioY=1,this.maxPosX=0,this.maxPosY=0,this.options.interactive&&(this.options.disableTouch||(m.addEvent(this.indicator,"touchstart",this),m.addEvent(i,"touchend",this)),this.options.disablePointer||(m.addEvent(this.indicator,m.prefixPointerEvent("pointerdown"),this),m.addEvent(i,m.prefixPointerEvent("pointerup"),this)),this.options.disableMouse||(m.addEvent(this.indicator,"mousedown",this),m.addEvent(i,"mouseup",this))),this.options.fade){
this.wrapperStyle[m.style.transform]=this.scroller.translateZ
var n=m.style.transitionDuration
if(!n)return
this.wrapperStyle[n]=m.isBadAndroid?"0.0001ms":"0ms"
var a=this
m.isBadAndroid&&h(function(){"0.0001ms"===a.wrapperStyle[n]&&(a.wrapperStyle[n]="0s")}),this.wrapperStyle.opacity="0"}}i=window,o=document,f=Math,h=i.requestAnimationFrame||i.webkitRequestAnimationFrame||i.mozRequestAnimationFrame||i.oRequestAnimationFrame||i.msRequestAnimationFrame||function(e){i.setTimeout(e,1e3/60)},m=function(){var n={},a=o.createElement("div").style,t=function(){for(var e=["t","webkitT","MozT","msT","OT"],t=0,r=e.length;t<r;t++)if(e[t]+"ransform"in a)return e[t].substr(0,e[t].length-1)
return!1}()
function e(e){return!1!==t&&(""===t?e:t+e.charAt(0).toUpperCase()+e.substr(1))}n.getTime=Date.now||function(){return(new Date).getTime()},n.extend=function(e,t){for(var r in t)e[r]=t[r]},n.addEvent=function(e,t,r,n){e.addEventListener(t,r,!!n)},n.removeEvent=function(e,t,r,n){e.removeEventListener(t,r,!!n)},n.prefixPointerEvent=function(e){return i.MSPointerEvent?"MSPointer"+e.charAt(7).toUpperCase()+e.substr(8):e},n.momentum=function(e,t,r,n,a,i){var o,l,c=e-t,s=f.abs(c)/r
return l=s/(i=void 0===i?6e-4:i),(o=e+s*s/(2*i)*(c<0?-1:1))<n?(o=a?n-a/2.5*(s/8):n,l=(c=f.abs(o-e))/s):0<o&&(o=a?a/2.5*(s/8):0,l=(c=f.abs(e)+o)/s),{destination:f.round(o),duration:l}}
var r=e("transform")
return n.extend(n,{hasTransform:!1!==r,hasPerspective:e("perspective")in a,hasTouch:"ontouchstart"in i,hasPointer:!(!i.PointerEvent&&!i.MSPointerEvent),hasTransition:e("transition")in a}),n.isBadAndroid=function(){var e=i.navigator.appVersion
if(!/Android/.test(e)||/Chrome\/\d/.test(e))return!1
var t=e.match(/Safari\/(\d+.\d)/)
return!(t&&"object"===(0,l.default)(t)&&2<=t.length)||parseFloat(t[1])<535.19}(),n.extend(n.style={},{transform:r,transitionTimingFunction:e("transitionTimingFunction"),transitionDuration:e("transitionDuration"),transitionDelay:e("transitionDelay"),transformOrigin:e("transformOrigin"),touchAction:e("touchAction")}),n.hasClass=function(e,t){return new RegExp("(^|\\s)"+t+"(\\s|$)").test(e.className)},n.addClass=function(e,t){if(!n.hasClass(e,t)){var r=e.className.split(" ")
r.push(t),e.className=r.join(" ")}},n.removeClass=function(e,t){if(n.hasClass(e,t)){var r=new RegExp("(^|\\s)"+t+"(\\s|$)","g")
e.className=e.className.replace(r," ")}},n.offset=function(e){for(var t=-e.offsetLeft,r=-e.offsetTop;e=e.offsetParent;)t-=e.offsetLeft,r-=e.offsetTop
return{left:t,top:r}},n.preventDefaultException=function(e,t){for(var r in t)if(t[r].test(e[r]))return!0
return!1},n.extend(n.eventType={},{touchstart:1,touchmove:1,touchend:1,mousedown:2,mousemove:2,mouseup:2,pointerdown:3,pointermove:3,pointerup:3,MSPointerDown:3,MSPointerMove:3,MSPointerUp:3}),n.extend(n.ease={},{quadratic:{style:"cubic-bezier(0.25, 0.46, 0.45, 0.94)",fn:function(e){return e*(2-e)}},circular:{style:"cubic-bezier(0.1, 0.57, 0.1, 1)",fn:function(e){return f.sqrt(1- --e*e)}},back:{style:"cubic-bezier(0.175, 0.885, 0.32, 1.275)",fn:function(e){return(e-=1)*e*(5*e+4)+1}},bounce:{style:"",
fn:function(e){return(e/=1)<1/2.75?7.5625*e*e:e<2/2.75?7.5625*(e-=1.5/2.75)*e+.75:e<2.5/2.75?7.5625*(e-=2.25/2.75)*e+.9375:7.5625*(e-=2.625/2.75)*e+.984375}},elastic:{style:"",fn:function(e){return 0===e?0:1==e?1:.4*f.pow(2,-10*e)*f.sin((e-.055)*(2*f.PI)/.22)+1}}}),n.tap=function(e,t){var r=o.createEvent("Event")
r.initEvent(t,!0,!0),r.pageX=e.pageX,r.pageY=e.pageY,e.target.dispatchEvent(r)},n.click=function(e){var t,r=e.target;/(SELECT|INPUT|TEXTAREA)/i.test(r.tagName)||((t=o.createEvent(i.MouseEvent?"MouseEvents":"Event")).initEvent("click",!0,!0),t.view=e.view||i,t.detail=1,t.screenX=r.screenX||0,t.screenY=r.screenY||0,t.clientX=r.clientX||0,t.clientY=r.clientY||0,t.ctrlKey=!!e.ctrlKey,t.altKey=!!e.altKey,t.shiftKey=!!e.shiftKey,t.metaKey=!!e.metaKey,t.button=0,t.relatedTarget=null,t._constructed=!0,
r.dispatchEvent(t))},n.getTouchAction=function(e,t){var r="none"
return"vertical"===e?r="pan-y":"horizontal"===e&&(r="pan-x"),t&&"none"!=r&&(r+=" pinch-zoom"),r},n.getRect=function(e){if(e instanceof SVGElement){var t=e.getBoundingClientRect()
return{top:t.top,left:t.left,width:t.width,height:t.height}}return{top:e.offsetTop,left:e.offsetLeft,width:e.offsetWidth,height:e.offsetHeight}},n}(),n.prototype={version:"5.2.0-snapshot",_init:function(){this._initEvents(),(this.options.scrollbars||this.options.indicators)&&this._initIndicators(),this.options.mouseWheel&&this._initWheel(),this.options.snap&&this._initSnap(),this.options.keyBindings&&this._initKeys()},destroy:function(){this._initEvents(!0),clearTimeout(this.resizeTimeout),
this.resizeTimeout=null,this._execEvent("destroy")},_transitionEnd:function(e){e.target==this.scroller&&this.isInTransition&&(this._transitionTime(),this.resetPosition(this.options.bounceTime)||(this.isInTransition=!1,this._execEvent("scrollEnd")))},_start:function(e){if((1==m.eventType[e.type]||0===(e.which?e.button:e.button<2?0:4==e.button?1:2))&&this.enabled&&(!this.initiated||m.eventType[e.type]===this.initiated)&&(!this.options.ignoreEventException||!this.options.ignoreEventException(e))){
!this.options.preventDefault||m.isBadAndroid||m.preventDefaultException(e.target,this.options.preventDefaultException)||e.preventDefault()
var t,r=e.touches?e.touches[0]:e
this.initiated=m.eventType[e.type],this.moved=!1,this.distX=0,this.distY=0,this.directionX=0,this.directionY=0,this.directionLocked=0,this.startTime=m.getTime(),this.options.useTransition&&this.isInTransition?(this._transitionTime(),this.isInTransition=!1,t=this.getComputedPosition(),this._translate(f.round(t.x),f.round(t.y)),this._execEvent("scrollEnd")):!this.options.useTransition&&this.isAnimating&&(this.isAnimating=!1,this._execEvent("scrollEnd")),this.startX=this.x,this.startY=this.y,
this.absStartX=this.x,this.absStartY=this.y,this.pointX=r.pageX,this.pointY=r.pageY,this._execEvent("beforeScrollStart")}},_move:function(e){if(this.enabled&&m.eventType[e.type]===this.initiated&&(!this.options.ignoreEventException||!this.options.ignoreEventException(e))){this.options.preventDefault&&e.preventDefault()
var t,r,n,a,i=e.touches?e.touches[0]:e,o=i.pageX-this.pointX,l=i.pageY-this.pointY,c=m.getTime()
if(this.pointX=i.pageX,this.pointY=i.pageY,this.distX+=o,this.distY+=l,n=f.abs(this.distX),a=f.abs(this.distY),!(300<c-this.endTime&&n<10&&a<10)){if(this.directionLocked||this.options.freeScroll||(n>a+this.options.directionLockThreshold?this.directionLocked="h":a>=n+this.options.directionLockThreshold?this.directionLocked="v":this.directionLocked="n"),"h"==this.directionLocked){if("vertical"==this.options.eventPassthrough)e.preventDefault()
else if("horizontal"==this.options.eventPassthrough)return void(this.initiated=!1)
l=0}else if("v"==this.directionLocked){if("horizontal"==this.options.eventPassthrough)e.preventDefault()
else if("vertical"==this.options.eventPassthrough)return void(this.initiated=!1)
o=0}o=this.hasHorizontalScroll?o:0,l=this.hasVerticalScroll?l:0,t=this.x+o,r=this.y+l,(0<t||t<this.maxScrollX)&&(t=this.options.bounce?this.x+o/3:0<t?0:this.maxScrollX),(0<r||r<this.maxScrollY)&&(r=this.options.bounce?this.y+l/3:0<r?0:this.maxScrollY),this.directionX=0<o?-1:o<0?1:0,this.directionY=0<l?-1:l<0?1:0,this.moved||this._execEvent("scrollStart"),this.moved=!0,this._translate(t,r),300<c-this.startTime&&(this.startTime=c,this.startX=this.x,this.startY=this.y,
1==this.options.probeType&&this._execEvent("scroll")),1<this.options.probeType&&this._execEvent("scroll")}}},_end:function(e){if(this.enabled&&m.eventType[e.type]===this.initiated){this.options.preventDefault&&!m.preventDefaultException(e.target,this.options.preventDefaultException)&&e.preventDefault(),e.changedTouches&&e.changedTouches[0]
var t,r,n=m.getTime()-this.startTime,a=f.round(this.x),i=f.round(this.y),o=f.abs(a-this.startX),l=f.abs(i-this.startY),c=0,s=""
if(this.isInTransition=0,this.initiated=0,this.endTime=m.getTime(),!this.resetPosition(this.options.bounceTime)){if(this.scrollTo(a,i),!this.moved)return this.options.tap&&m.tap(e,this.options.tap),this.options.click&&m.click(e),void this._execEvent("scrollCancel")
if(this._events.flick&&n<200&&o<100&&l<100)this._execEvent("flick")
else{if(this.options.momentum&&n<300&&(t=this.hasHorizontalScroll?m.momentum(this.x,this.startX,n,this.maxScrollX,this.options.bounce?this.wrapperWidth:0,this.options.deceleration):{destination:a,duration:0},r=this.hasVerticalScroll?m.momentum(this.y,this.startY,n,this.maxScrollY,this.options.bounce?this.wrapperHeight:0,this.options.deceleration):{destination:i,duration:0},a=t.destination,i=r.destination,c=f.max(t.duration,r.duration),this.isInTransition=1),this.options.snap){var u=this._nearestSnap(a,i)
this.currentPage=u,c=this.options.snapSpeed||f.max(f.max(f.min(f.abs(a-u.x),1e3),f.min(f.abs(i-u.y),1e3)),300),a=u.x,i=u.y,this.directionX=0,this.directionY=0,s=this.options.bounceEasing}if(a!=this.x||i!=this.y)return(0<a||a<this.maxScrollX||0<i||i<this.maxScrollY)&&(s=m.ease.quadratic),void this.scrollTo(a,i,c,s)
this._execEvent("scrollEnd")}}}},_resize:function(){var e=this
clearTimeout(this.resizeTimeout),this.resizeTimeout=setTimeout(function(){e.refresh()},this.options.resizePolling)},resetPosition:function(e){var t=this.x,r=this.y
return e=e||0,!this.hasHorizontalScroll||0<this.x?t=0:this.x<this.maxScrollX&&(t=this.maxScrollX),!this.hasVerticalScroll||0<this.y?r=0:this.y<this.maxScrollY&&(r=this.maxScrollY),(t!=this.x||r!=this.y)&&(this.scrollTo(t,r,e,this.options.bounceEasing),!0)},disable:function(){this.enabled=!1},enable:function(){this.enabled=!0},refresh:function(){m.getRect(this.wrapper),this.wrapperWidth=this.wrapper.clientWidth,this.wrapperHeight=this.wrapper.clientHeight
var e=m.getRect(this.scroller)
this.scrollerWidth=e.width,this.scrollerHeight=e.height,this.maxScrollX=this.wrapperWidth-this.scrollerWidth,this.maxScrollY=this.wrapperHeight-this.scrollerHeight,this.hasHorizontalScroll=this.options.scrollX&&this.maxScrollX<0,this.hasVerticalScroll=this.options.scrollY&&this.maxScrollY<0,this.hasHorizontalScroll||(this.maxScrollX=0,this.scrollerWidth=this.wrapperWidth),this.hasVerticalScroll||(this.maxScrollY=0,this.scrollerHeight=this.wrapperHeight),this.endTime=0,this.directionX=0,this.directionY=0,
m.hasPointer&&!this.options.disablePointer&&(this.wrapper.style[m.style.touchAction]=m.getTouchAction(this.options.eventPassthrough,!0),this.wrapper.style[m.style.touchAction]||(this.wrapper.style[m.style.touchAction]=m.getTouchAction(this.options.eventPassthrough,!1))),this.wrapperOffset=m.offset(this.wrapper),this._execEvent("refresh"),this.resetPosition()},on:function(e,t){this._events[e]||(this._events[e]=[]),this._events[e].push(t)},off:function(e,t){if(this._events[e]){var r=this._events[e].indexOf(t)
;-1<r&&this._events[e].splice(r,1)}},_execEvent:function(e){if(this._events[e]){var t=0,r=this._events[e].length
if(r)for(;t<r;t++)this._events[e][t].apply(this,[].slice.call(arguments,1))}},scrollBy:function(e,t,r,n){e=this.x+e,t=this.y+t,r=r||0,this.scrollTo(e,t,r,n)},scrollTo:function(e,t,r,n){n=n||m.ease.circular,this.isInTransition=this.options.useTransition&&0<r
var a=this.options.useTransition&&n.style
!r||a?(a&&(this._transitionTimingFunction(n.style),this._transitionTime(r)),this._translate(e,t)):this._animate(e,t,r,n.fn)},scrollToElement:function(e,t,r,n,a){if(e=e.nodeType?e:this.scroller.querySelector(e)){var i=m.offset(e)
i.left-=this.wrapperOffset.left,i.top-=this.wrapperOffset.top
var o=m.getRect(e),l=m.getRect(this.wrapper)
!0===r&&(r=f.round(o.width/2-l.width/2)),!0===n&&(n=f.round(o.height/2-l.height/2)),i.left-=r||0,i.top-=n||0,i.left=0<i.left?0:i.left<this.maxScrollX?this.maxScrollX:i.left,i.top=0<i.top?0:i.top<this.maxScrollY?this.maxScrollY:i.top,t=null==t||"auto"===t?f.max(f.abs(this.x-i.left),f.abs(this.y-i.top)):t,this.scrollTo(i.left,i.top,t,a)}},_transitionTime:function(e){if(this.options.useTransition){e=e||0
var t=m.style.transitionDuration
if(t){if(this.scrollerStyle[t]=e+"ms",!e&&m.isBadAndroid){this.scrollerStyle[t]="0.0001ms"
var r=this
h(function(){"0.0001ms"===r.scrollerStyle[t]&&(r.scrollerStyle[t]="0s")})}if(this.indicators)for(var n=this.indicators.length;n--;)this.indicators[n].transitionTime(e)}}},_transitionTimingFunction:function(e){if(this.scrollerStyle[m.style.transitionTimingFunction]=e,this.indicators)for(var t=this.indicators.length;t--;)this.indicators[t].transitionTimingFunction(e)},_translate:function(e,t){if(this.options.useTransform?this.scrollerStyle[m.style.transform]="translate("+e+"px,"+t+"px)"+this.translateZ:(
e=f.round(e),t=f.round(t),this.scrollerStyle.left=e+"px",this.scrollerStyle.top=t+"px"),this.x=e,this.y=t,this.indicators)for(var r=this.indicators.length;r--;)this.indicators[r].updatePosition()},_initEvents:function(e){var t=e?m.removeEvent:m.addEvent,r=this.options.bindToWrapper?this.wrapper:i
t(i,"orientationchange",this),t(i,"resize",this),this.options.click&&t(this.wrapper,"click",this,!0),this.options.disableMouse||(t(this.wrapper,"mousedown",this),t(r,"mousemove",this),t(r,"mousecancel",this),t(r,"mouseup",this)),m.hasPointer&&!this.options.disablePointer&&(t(this.wrapper,m.prefixPointerEvent("pointerdown"),this),t(r,m.prefixPointerEvent("pointermove"),this),t(r,m.prefixPointerEvent("pointercancel"),this),t(r,m.prefixPointerEvent("pointerup"),this)),m.hasTouch&&!this.options.disableTouch&&(
t(this.wrapper,"touchstart",this),t(r,"touchmove",this),t(r,"touchcancel",this),t(r,"touchend",this)),t(this.scroller,"transitionend",this),t(this.scroller,"webkitTransitionEnd",this),t(this.scroller,"oTransitionEnd",this),t(this.scroller,"MSTransitionEnd",this)},getComputedPosition:function(){var e,t,r=i.getComputedStyle(this.scroller,null)
return t=this.options.useTransform?(e=+((r=r[m.style.transform].split(")")[0].split(", "))[12]||r[4]),+(r[13]||r[5])):(e=+r.left.replace(/[^-\d.]/g,""),+r.top.replace(/[^-\d.]/g,"")),{x:e,y:t}},_initIndicators:function(){var e,t=this.options.interactiveScrollbars,r="string"!=typeof this.options.scrollbars,n=[],a=this
this.indicators=[],this.options.scrollbars&&(this.options.scrollY&&(e={el:c("v",t,this.options.scrollbars),interactive:t,defaultScrollbars:!0,customStyle:r,resize:this.options.resizeScrollbars,shrink:this.options.shrinkScrollbars,fade:this.options.fadeScrollbars,listenX:!1},this.wrapper.appendChild(e.el),n.push(e)),this.options.scrollX&&(e={el:c("h",t,this.options.scrollbars),interactive:t,defaultScrollbars:!0,customStyle:r,resize:this.options.resizeScrollbars,shrink:this.options.shrinkScrollbars,
fade:this.options.fadeScrollbars,listenY:!1},this.wrapper.appendChild(e.el),n.push(e))),this.options.indicators&&(n=n.concat(this.options.indicators))
for(var i=n.length;i--;)this.indicators.push(new s(this,n[i]))
function o(e){if(a.indicators)for(var t=a.indicators.length;t--;)e.call(a.indicators[t])}this.options.fadeScrollbars&&(this.on("scrollEnd",function(){o(function(){this.fade()})}),this.on("scrollCancel",function(){o(function(){this.fade()})}),this.on("scrollStart",function(){o(function(){this.fade(1)})}),this.on("beforeScrollStart",function(){o(function(){this.fade(1,!0)})})),this.on("refresh",function(){o(function(){this.refresh()})}),this.on("destroy",function(){o(function(){this.destroy()}),
delete this.indicators})},_initWheel:function(){m.addEvent(this.wrapper,"wheel",this),m.addEvent(this.wrapper,"mousewheel",this),m.addEvent(this.wrapper,"DOMMouseScroll",this),this.on("destroy",function(){clearTimeout(this.wheelTimeout),this.wheelTimeout=null,m.removeEvent(this.wrapper,"wheel",this),m.removeEvent(this.wrapper,"mousewheel",this),m.removeEvent(this.wrapper,"DOMMouseScroll",this)})},_wheel:function(e){if(this.enabled){e.preventDefault()
var t,r,n,a,i=this
if(void 0===this.wheelTimeout&&i._execEvent("scrollStart"),clearTimeout(this.wheelTimeout),this.wheelTimeout=setTimeout(function(){i.options.snap||i._execEvent("scrollEnd"),i.wheelTimeout=void 0},400),"deltaX"in e)r=1===e.deltaMode?(t=-e.deltaX*this.options.mouseWheelSpeed,-e.deltaY*this.options.mouseWheelSpeed):(t=-e.deltaX,-e.deltaY)
else if("wheelDeltaX"in e)t=e.wheelDeltaX/120*this.options.mouseWheelSpeed,r=e.wheelDeltaY/120*this.options.mouseWheelSpeed
else if("wheelDelta"in e)t=r=e.wheelDelta/120*this.options.mouseWheelSpeed
else{if(!("detail"in e))return
t=r=-e.detail/3*this.options.mouseWheelSpeed}if(t*=this.options.invertWheelDirection,r*=this.options.invertWheelDirection,this.hasVerticalScroll||(t=r,r=0),this.options.snap)return n=this.currentPage.pageX,a=this.currentPage.pageY,0<t?n--:t<0&&n++,0<r?a--:r<0&&a++,void this.goToPage(n,a)
n=this.x+f.round(this.hasHorizontalScroll?t:0),a=this.y+f.round(this.hasVerticalScroll?r:0),this.directionX=0<t?-1:t<0?1:0,this.directionY=0<r?-1:r<0?1:0,0<n?n=0:n<this.maxScrollX&&(n=this.maxScrollX),0<a?a=0:a<this.maxScrollY&&(a=this.maxScrollY),this.scrollTo(n,a,0),1<this.options.probeType&&this._execEvent("scroll")}},_initSnap:function(){this.currentPage={},"string"==typeof this.options.snap&&(this.options.snap=this.scroller.querySelectorAll(this.options.snap)),this.on("refresh",function(){var e,t,r,n,a
,i,o,l=0,c=0,s=0,u=this.options.snapStepX||this.wrapperWidth,d=this.options.snapStepY||this.wrapperHeight
if(this.pages=[],this.wrapperWidth&&this.wrapperHeight&&this.scrollerWidth&&this.scrollerHeight){if(!0===this.options.snap)for(r=f.round(u/2),n=f.round(d/2);s>-this.scrollerWidth;){for(this.pages[l]=[],a=e=0;a>-this.scrollerHeight;)this.pages[l][e]={x:f.max(s,this.maxScrollX),y:f.max(a,this.maxScrollY),width:u,height:d,cx:s-r,cy:a-n},a-=d,e++
s-=u,l++}else for(e=(i=this.options.snap).length,t=-1;l<e;l++)o=m.getRect(i[l]),(0===l||o.left<=m.getRect(i[l-1]).left)&&(c=0,t++),this.pages[c]||(this.pages[c]=[]),s=f.max(-o.left,this.maxScrollX),a=f.max(-o.top,this.maxScrollY),r=s-f.round(o.width/2),n=a-f.round(o.height/2),this.pages[c][t]={x:s,y:a,width:o.width,height:o.height,cx:r,cy:n},s>this.maxScrollX&&c++
this.goToPage(this.currentPage.pageX||0,this.currentPage.pageY||0,0),this.options.snapThreshold%1==0?(this.snapThresholdX=this.options.snapThreshold,this.snapThresholdY=this.options.snapThreshold):(this.snapThresholdX=f.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].width*this.options.snapThreshold),this.snapThresholdY=f.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].height*this.options.snapThreshold))}}),this.on("flick",function(){var e=this.options.snapSpeed||f.max(
f.max(f.min(f.abs(this.x-this.startX),1e3),f.min(f.abs(this.y-this.startY),1e3)),300)
this.goToPage(this.currentPage.pageX+this.directionX,this.currentPage.pageY+this.directionY,e)})},_nearestSnap:function(e,t){if(!this.pages.length)return{x:0,y:0,pageX:0,pageY:0}
var r=0,n=this.pages.length,a=0
if(f.abs(e-this.absStartX)<this.snapThresholdX&&f.abs(t-this.absStartY)<this.snapThresholdY)return this.currentPage
for(0<e?e=0:e<this.maxScrollX&&(e=this.maxScrollX),0<t?t=0:t<this.maxScrollY&&(t=this.maxScrollY);r<n;r++)if(e>=this.pages[r][0].cx){e=this.pages[r][0].x
break}for(n=this.pages[r].length;a<n;a++)if(t>=this.pages[0][a].cy){t=this.pages[0][a].y
break}return r==this.currentPage.pageX&&((r+=this.directionX)<0?r=0:r>=this.pages.length&&(r=this.pages.length-1),e=this.pages[r][0].x),a==this.currentPage.pageY&&((a+=this.directionY)<0?a=0:a>=this.pages[0].length&&(a=this.pages[0].length-1),t=this.pages[0][a].y),{x:e,y:t,pageX:r,pageY:a}},goToPage:function(e,t,r,n){n=n||this.options.bounceEasing,e>=this.pages.length?e=this.pages.length-1:e<0&&(e=0),t>=this.pages[e].length?t=this.pages[e].length-1:t<0&&(t=0)
var a=this.pages[e][t].x,i=this.pages[e][t].y
r=void 0===r?this.options.snapSpeed||f.max(f.max(f.min(f.abs(a-this.x),1e3),f.min(f.abs(i-this.y),1e3)),300):r,this.currentPage={x:a,y:i,pageX:e,pageY:t},this.scrollTo(a,i,r,n)},next:function(e,t){var r=this.currentPage.pageX,n=this.currentPage.pageY;++r>=this.pages.length&&this.hasVerticalScroll&&(r=0,n++),this.goToPage(r,n,e,t)},prev:function(e,t){var r=this.currentPage.pageX,n=this.currentPage.pageY;--r<0&&this.hasVerticalScroll&&(r=0,n--),this.goToPage(r,n,e,t)},_initKeys:function(e){var t,r={pageUp:33,
pageDown:34,end:35,home:36,left:37,up:38,right:39,down:40}
if("object"==(0,l.default)(this.options.keyBindings))for(t in this.options.keyBindings)"string"==typeof this.options.keyBindings[t]&&(this.options.keyBindings[t]=this.options.keyBindings[t].toUpperCase().charCodeAt(0))
else this.options.keyBindings={}
for(t in r)this.options.keyBindings[t]=this.options.keyBindings[t]||r[t]
m.addEvent(i,"keydown",this),this.on("destroy",function(){m.removeEvent(i,"keydown",this)})},_key:function(e){if(this.enabled){var t,r=this.options.snap,n=r?this.currentPage.pageX:this.x,a=r?this.currentPage.pageY:this.y,i=m.getTime(),o=this.keyTime||0
switch(this.options.useTransition&&this.isInTransition&&(t=this.getComputedPosition(),this._translate(f.round(t.x),f.round(t.y)),this.isInTransition=!1),this.keyAcceleration=i-o<200?f.min(this.keyAcceleration+.25,50):0,e.keyCode){case this.options.keyBindings.pageUp:this.hasHorizontalScroll&&!this.hasVerticalScroll?n+=r?1:this.wrapperWidth:a+=r?1:this.wrapperHeight
break
case this.options.keyBindings.pageDown:this.hasHorizontalScroll&&!this.hasVerticalScroll?n-=r?1:this.wrapperWidth:a-=r?1:this.wrapperHeight
break
case this.options.keyBindings.end:n=r?this.pages.length-1:this.maxScrollX,a=r?this.pages[0].length-1:this.maxScrollY
break
case this.options.keyBindings.home:a=n=0
break
case this.options.keyBindings.left:n+=r?-1:5+this.keyAcceleration>>0
break
case this.options.keyBindings.up:a+=r?1:5+this.keyAcceleration>>0
break
case this.options.keyBindings.right:n-=r?-1:5+this.keyAcceleration>>0
break
case this.options.keyBindings.down:a-=r?1:5+this.keyAcceleration>>0
break
default:return}r?this.goToPage(n,a):(0<n?(n=0,this.keyAcceleration=0):n<this.maxScrollX&&(n=this.maxScrollX,this.keyAcceleration=0),0<a?(a=0,this.keyAcceleration=0):a<this.maxScrollY&&(a=this.maxScrollY,this.keyAcceleration=0),this.scrollTo(n,a,0),this.keyTime=i)}},_animate:function(i,o,l,c){var s=this,u=this.x,d=this.y,f=m.getTime(),p=f+l
this.isAnimating=!0,function e(){var t,r,n,a=m.getTime()
if(p<=a)return s.isAnimating=!1,s._translate(i,o),void(s.resetPosition(s.options.bounceTime)||s._execEvent("scrollEnd"))
n=c(a=(a-f)/l),t=(i-u)*n+u,r=(o-d)*n+d,s._translate(t,r),s.isAnimating&&h(e),3==s.options.probeType&&s._execEvent("scroll")}()},handleEvent:function(e){switch(e.type){case"touchstart":case"pointerdown":case"MSPointerDown":case"mousedown":this._start(e)
break
case"touchmove":case"pointermove":case"MSPointerMove":case"mousemove":this._move(e)
break
case"touchend":case"pointerup":case"MSPointerUp":case"mouseup":case"touchcancel":case"pointercancel":case"MSPointerCancel":case"mousecancel":this._end(e)
break
case"orientationchange":case"resize":this._resize()
break
case"transitionend":case"webkitTransitionEnd":case"oTransitionEnd":case"MSTransitionEnd":this._transitionEnd(e)
break
case"wheel":case"DOMMouseScroll":case"mousewheel":this._wheel(e)
break
case"keydown":this._key(e)
break
case"click":this.enabled&&!e._constructed&&(e.preventDefault(),e.stopPropagation())}}},s.prototype={handleEvent:function(e){switch(e.type){case"touchstart":case"pointerdown":case"MSPointerDown":case"mousedown":this._start(e)
break
case"touchmove":case"pointermove":case"MSPointerMove":case"mousemove":this._move(e)
break
case"touchend":case"pointerup":case"MSPointerUp":case"mouseup":case"touchcancel":case"pointercancel":case"MSPointerCancel":case"mousecancel":this._end(e)}},destroy:function(){this.options.fadeScrollbars&&(clearTimeout(this.fadeTimeout),this.fadeTimeout=null),this.options.interactive&&(m.removeEvent(this.indicator,"touchstart",this),m.removeEvent(this.indicator,m.prefixPointerEvent("pointerdown"),this),m.removeEvent(this.indicator,"mousedown",this),m.removeEvent(i,"touchmove",this),m.removeEvent(i,
m.prefixPointerEvent("pointermove"),this),m.removeEvent(i,"mousemove",this),m.removeEvent(i,"touchend",this),m.removeEvent(i,m.prefixPointerEvent("pointerup"),this),m.removeEvent(i,"mouseup",this)),this.options.defaultScrollbars&&this.wrapper.parentNode&&this.wrapper.parentNode.removeChild(this.wrapper)},_start:function(e){var t=e.touches?e.touches[0]:e
e.preventDefault(),e.stopPropagation(),this.transitionTime(),this.initiated=!0,this.moved=!1,this.lastPointX=t.pageX,this.lastPointY=t.pageY,this.startTime=m.getTime(),this.options.disableTouch||m.addEvent(i,"touchmove",this),this.options.disablePointer||m.addEvent(i,m.prefixPointerEvent("pointermove"),this),this.options.disableMouse||m.addEvent(i,"mousemove",this),this.scroller._execEvent("beforeScrollStart")},_move:function(e){var t,r,n,a,i=e.touches?e.touches[0]:e,o=m.getTime()
this.moved||this.scroller._execEvent("scrollStart"),this.moved=!0,t=i.pageX-this.lastPointX,this.lastPointX=i.pageX,r=i.pageY-this.lastPointY,this.lastPointY=i.pageY,n=this.x+t,a=this.y+r,this._pos(n,a),1==this.scroller.options.probeType&&300<o-this.startTime?(this.startTime=o,this.scroller._execEvent("scroll")):1<this.scroller.options.probeType&&this.scroller._execEvent("scroll"),e.preventDefault(),e.stopPropagation()},_end:function(e){if(this.initiated){if(this.initiated=!1,e.preventDefault(),
e.stopPropagation(),m.removeEvent(i,"touchmove",this),m.removeEvent(i,m.prefixPointerEvent("pointermove"),this),m.removeEvent(i,"mousemove",this),this.scroller.options.snap){var t=this.scroller._nearestSnap(this.scroller.x,this.scroller.y),r=this.options.snapSpeed||f.max(f.max(f.min(f.abs(this.scroller.x-t.x),1e3),f.min(f.abs(this.scroller.y-t.y),1e3)),300)
this.scroller.x==t.x&&this.scroller.y==t.y||(this.scroller.directionX=0,this.scroller.directionY=0,this.scroller.currentPage=t,this.scroller.scrollTo(t.x,t.y,r,this.scroller.options.bounceEasing))}this.moved&&this.scroller._execEvent("scrollEnd")}},transitionTime:function(e){e=e||0
var t=m.style.transitionDuration
if(t&&(this.indicatorStyle[t]=e+"ms",!e&&m.isBadAndroid)){this.indicatorStyle[t]="0.0001ms"
var r=this
h(function(){"0.0001ms"===r.indicatorStyle[t]&&(r.indicatorStyle[t]="0s")})}},transitionTimingFunction:function(e){this.indicatorStyle[m.style.transitionTimingFunction]=e},refresh:function(){this.transitionTime(),
this.options.listenX&&!this.options.listenY?this.indicatorStyle.display=this.scroller.hasHorizontalScroll?"block":"none":this.options.listenY&&!this.options.listenX?this.indicatorStyle.display=this.scroller.hasVerticalScroll?"block":"none":this.indicatorStyle.display=this.scroller.hasHorizontalScroll||this.scroller.hasVerticalScroll?"block":"none",this.scroller.hasHorizontalScroll&&this.scroller.hasVerticalScroll?(m.addClass(this.wrapper,"iScrollBothScrollbars"),m.removeClass(this.wrapper,
"iScrollLoneScrollbar"),this.options.defaultScrollbars&&this.options.customStyle&&(this.options.listenX?this.wrapper.style.right="8px":this.wrapper.style.bottom="8px")):(m.removeClass(this.wrapper,"iScrollBothScrollbars"),m.addClass(this.wrapper,"iScrollLoneScrollbar"),this.options.defaultScrollbars&&this.options.customStyle&&(this.options.listenX?this.wrapper.style.right="2px":this.wrapper.style.bottom="2px")),m.getRect(this.wrapper),this.options.listenX&&(this.wrapperWidth=this.wrapper.clientWidth,
this.options.resize?(this.indicatorWidth=f.max(f.round(this.wrapperWidth*this.wrapperWidth/(this.scroller.scrollerWidth||this.wrapperWidth||1)),8),this.indicatorStyle.width=this.indicatorWidth+"px"):this.indicatorWidth=this.indicator.clientWidth,this.maxPosX=this.wrapperWidth-this.indicatorWidth,"clip"==this.options.shrink?(this.minBoundaryX=8-this.indicatorWidth,this.maxBoundaryX=this.wrapperWidth-8):(this.minBoundaryX=0,this.maxBoundaryX=this.maxPosX),
this.sizeRatioX=this.options.speedRatioX||this.scroller.maxScrollX&&this.maxPosX/this.scroller.maxScrollX),this.options.listenY&&(this.wrapperHeight=this.wrapper.clientHeight,this.options.resize?(this.indicatorHeight=f.max(f.round(this.wrapperHeight*this.wrapperHeight/(this.scroller.scrollerHeight||this.wrapperHeight||1)),8),this.indicatorStyle.height=this.indicatorHeight+"px"):this.indicatorHeight=this.indicator.clientHeight,this.maxPosY=this.wrapperHeight-this.indicatorHeight,"clip"==this.options.shrink?(
this.minBoundaryY=8-this.indicatorHeight,this.maxBoundaryY=this.wrapperHeight-8):(this.minBoundaryY=0,this.maxBoundaryY=this.maxPosY),this.maxPosY=this.wrapperHeight-this.indicatorHeight,this.sizeRatioY=this.options.speedRatioY||this.scroller.maxScrollY&&this.maxPosY/this.scroller.maxScrollY),this.updatePosition()},updatePosition:function(){var e=this.options.listenX&&f.round(this.sizeRatioX*this.scroller.x)||0,t=this.options.listenY&&f.round(this.sizeRatioY*this.scroller.y)||0
this.options.ignoreBoundaries||(e<this.minBoundaryX?("scale"==this.options.shrink&&(this.width=f.max(this.indicatorWidth+e,8),this.indicatorStyle.width=this.width+"px"),e=this.minBoundaryX):e>this.maxBoundaryX?e="scale"==this.options.shrink?(this.width=f.max(this.indicatorWidth-(e-this.maxPosX),8),this.indicatorStyle.width=this.width+"px",this.maxPosX+this.indicatorWidth-this.width):this.maxBoundaryX:"scale"==this.options.shrink&&this.width!=this.indicatorWidth&&(this.width=this.indicatorWidth,
this.indicatorStyle.width=this.width+"px"),t<this.minBoundaryY?("scale"==this.options.shrink&&(this.height=f.max(this.indicatorHeight+3*t,8),this.indicatorStyle.height=this.height+"px"),t=this.minBoundaryY):t>this.maxBoundaryY?t="scale"==this.options.shrink?(this.height=f.max(this.indicatorHeight-3*(t-this.maxPosY),8),this.indicatorStyle.height=this.height+"px",this.maxPosY+this.indicatorHeight-this.height):this.maxBoundaryY:"scale"==this.options.shrink&&this.height!=this.indicatorHeight&&(
this.height=this.indicatorHeight,this.indicatorStyle.height=this.height+"px")),this.x=e,this.y=t,this.scroller.options.useTransform?this.indicatorStyle[m.style.transform]="translate("+e+"px,"+t+"px)"+this.scroller.translateZ:(this.indicatorStyle.left=e+"px",this.indicatorStyle.top=t+"px")},_pos:function(e,t){e<0?e=0:e>this.maxPosX&&(e=this.maxPosX),t<0?t=0:t>this.maxPosY&&(t=this.maxPosY),e=this.options.listenX?f.round(e/this.sizeRatioX):this.scroller.x,t=this.options.listenY?f.round(t/this.sizeRatioY
):this.scroller.y,this.scroller.scrollTo(e,t)},fade:function(e,t){if(!t||this.visible){clearTimeout(this.fadeTimeout),this.fadeTimeout=null
var r=e?250:500,n=e?0:300
e=e?"1":"0",this.wrapperStyle[m.style.transitionDuration]=r+"ms",this.fadeTimeout=setTimeout(function(e){this.wrapperStyle.opacity=e,this.visible=+e}.bind(this,e),n)}}},n.utils=m,i.IScroll=n},FYsW:function(e,t,r){"use strict"
var n=r("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:c,t=1<arguments.length?arguments[1]:void 0,r=t.type,n=t.payload
switch(r){case"runner:generate:widgets-query-map":return l({},e,{widgetQueryMap:(0,i.getScreenWidgetsMap)(Widget.irecords)})
case"runner:update:state":return l({},e,{},n)
case"runner:reset:state":return c
default:return e}}
var a=n(r("lSNA")),i=r("IB8Z")
function o(t,e){var r=Object.keys(t)
if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t)
e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{}
e%2?o(r,!0).forEach(function(e){(0,a.default)(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(r).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}var c={widgetQueryMap:{},activeCid:"",transition:{name:"slideleft",delay:0,duration:2e3,offset:100,callback:function(){}},history:[],screenInfoMap:{}}},FkXu:function(e,t,r){"use strict"
var n=r("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.getFontWeightStrDepandOnBoldType=t.getFontWeightNumDepandOnBoldType=t.getFontWeightStr=t.getFontFamilyAndWeightText=t.getTypeWeightList=t.WESTERN_COMMON_FONT_FAMILY_LIST=t.HOSTED_COMMON_FONT_FAMILY_LIST=t.HOSTED_COMMERCIAL_FANGZHENG_FONT_FAMILY_LIST=void 0
function a(e){return{label:e.label,value:e.family,limitedDevices:e.limitedDevices}}var i=n(r("RIqP")),o=n(r("yl0K")),l=o.default.HOSTED_COMMERCIAL_FANGZHENG_LIST,c=o.default.HOSTED_COMMON_LIST,s=o.default.WESTERN_COMMON_LIST,u=[].concat((0,i.default)(l),(0,i.default)(c),(0,i.default)(s)),d=l.map(a)
t.HOSTED_COMMERCIAL_FANGZHENG_FONT_FAMILY_LIST=d
var f=c.map(a)
t.HOSTED_COMMON_FONT_FAMILY_LIST=f
var p=s.map(a)
t.WESTERN_COMMON_FONT_FAMILY_LIST=p
var h={regular:400,light:300,bold:700},m={regular:I18N.rich_text_settings.weight.regular,light:I18N.rich_text_settings.weight.light,bold:I18N.rich_text_settings.weight.bold}
t.getTypeWeightList=function(t){var e=u.find(function(e){return e.family===t})
return e?e.typeList.map(function(e){return{label:m[e],value:e}}):[]}
t.getFontFamilyAndWeightText=function(t,e){var r=l.find(function(e){return e.family===t})
return r?"".concat(r.label,"-").concat(m[e]):"".concat(t,"-").concat(e)}
function v(t){return h[t]?t:Object.keys(h).find(function(e){return String(h[e])===String(t)})||"regular"}t.getFontWeightStr=v
t.getFontWeightNumDepandOnBoldType=function(e,t){var r=h[e]
return Number(t)?700:r}
t.getFontWeightStrDepandOnBoldType=function(e,t,r){var n=v(e)
return Number(r)?t:n}},G916:function(e,t,r){e.exports={nav:"xnJdrPjsJoJrp1VupFyUM","nav-item":"_3UspVqDrjxaWG9BSMdj9jf"}},GWLA:function(e,t,r){"use strict"
var n=r("284h"),a=r("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var i=a(r("lwsE")),o=a(r("W8MJ")),l=a(r("a1gu")),c=a(r("Nsbk")),s=a(r("PJYZ")),u=a(r("7W2i")),d=a(r("lSNA")),f=a(r("17x9")),p=n(r("q1tI")),h=r("6XO9"),m=r("wYtL"),v=(a(r("JSCU")),r("h0FN")),g=a(r("zy85"))
function y(t,e){var r=Object.keys(t)
if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t)
e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)}return r}var b=a(r("UbMB")).default.bind(g.default),S={type:0,name:"自定义链接",target_cid:"screen-cid-1",transition:{name:"slide-left",duration:2e3}},w=[{value:1,label:"screen-link"},{value:2,label:"state-link"},{value:3,label:"panel-link"},{value:4,label:"widget-link"}],E=Link.TYPE,C=E.screen_link,k=E.state_link,_=E.panel_link,x=E.widget_link,T=function(e){function r(){var t
return(0,i.default)(this,r),t=(0,l.default)(this,(0,c.default)(r).call(this)),(0,d.default)((0,s.default)(t),"handleLinkType",function(e){t.updateLinkAttr({type:Number(e)})}),(0,d.default)((0,s.default)(t),"handleLinkTarget",function(e){return t.updateLinkAttr({targetCid:e})}),(0,d.default)((0,s.default)(t),"updateLinkAttr",function(e){t.setState({currentLink:function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{}
e%2?y(r,!0).forEach(function(e){(0,d.default)(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):y(r).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}({},t.state.currentLink,{},e)})}),(0,d.default)((0,s.default)(t),"handleSubmit",function(){var e=t.state.currentLink
t.props.dispatch,console.log(e)}),t.state={currentLink:S},t}return(0,u.default)(r,e),(0,o.default)(r,[{key:"render",value:function(){var e=this.state.currentLink
return p.default.createElement("div",{className:b("runner-control-panel")},p.default.createElement("div",{className:"line"},p.default.createElement("span",null,"链接类型"),p.default.createElement(m.Select,{value:e.type,optionList:w,onChange:this.handleLinkType})),P(e),p.default.createElement("button",{className:"submit",onClick:this.handleSubmit},"执行"))}}]),r}(p.PureComponent)
t.default=T,(0,d.default)(T,"propTypes",{dispatch:f.default.func})
var P=function(e){switch(e.type){case C:return p.default.createElement(M,{link:e})
case k:return p.default.createElement(O,{link:e})
case _:return p.default.createElement(j,{link:e})
case x:return p.default.createElement(I,{link:e})
default:return null}},M=function(e){function t(){return(0,i.default)(this,t),(0,l.default)(this,(0,c.default)(t).apply(this,arguments))}return(0,u.default)(t,e),(0,o.default)(t,[{key:"render",value:function(){var e=this.props.link,t=[]
return MB.currentProject.cscreens().forEach(function(e){e.cid!==MB.currentScreen.cid&&t.push({value:e.cid,label:e.name})}),p.default.createElement(p.default.Fragment,null,p.default.createElement("div",{className:"line"},p.default.createElement("span",null,"目标页面"),p.default.createElement(m.Select,{value:e.targetCid,optionList:t,onChange:this.handleLinkTarget})),p.default.createElement("div",{className:"line"},p.default.createElement("span",null,"动画名称"),p.default.createElement(m.Select,{value:e.transition,
optionList:v.TRANSITIONS,onChange:this.handleLinkTarget})))}}]),t}(p.PureComponent),O=function(e){function t(){return(0,i.default)(this,t),(0,l.default)(this,(0,c.default)(t).apply(this,arguments))}return(0,u.default)(t,e),(0,o.default)(t,[{key:"render",value:function(){var e=this.props.link,t=[{cid:"default",name:"默认状态"}]
return MB.currentScreen.cscreenstates().forEach(function(e){e.cid!==MB.currentScreen.state_cid&&t.push({value:e.cid,label:e.name})}),p.default.createElement(p.default.Fragment,null,p.default.createElement("div",{className:"line"},p.default.createElement("span",null,"目标状态"),p.default.createElement(m.Select,{value:e.targetCid,optionList:t,onChange:this.handleLinkTarget})),p.default.createElement("div",{className:"detail"},p.default.createElement("div",{className:"desc"},"神奇移动"),p.default.createElement(
h.Switch,{size:"small",isChecked:"none"===e.transition,onChange:this.handleLinkChange})))}}]),t}(p.PureComponent),j=function(e){function t(){return(0,i.default)(this,t),(0,l.default)(this,(0,c.default)(t).apply(this,arguments))}return(0,u.default)(t,e),(0,o.default)(t,[{key:"render",value:function(){var e=this.props.link,t=MB.currentScreen.cpanels().map(function(e){return{value:e.cid,label:e.display_name}})
return p.default.createElement(p.default.Fragment,null,p.default.createElement("div",{className:"line"},p.default.createElement("span",null,"目标状态"),p.default.createElement(m.Select,{value:e.targetCid,optionList:t,onChange:this.handleLinkTarget})),p.default.createElement("div",{className:"detail"},p.default.createElement("div",{className:"desc"},"神奇移动"),p.default.createElement(h.Switch,{size:"small",isChecked:"none"===e.transition,onChange:this.handleLinkChange})))}}]),t}(p.PureComponent),I=function(e){
function t(){return(0,i.default)(this,t),(0,l.default)(this,(0,c.default)(t).apply(this,arguments))}return(0,u.default)(t,e),(0,o.default)(t,[{key:"render",value:function(){var e=this.props.link,t=MB.currentScreen.cwidgets().map(function(e){return{value:e.cid,label:e.display_name}})
return p.default.createElement(p.default.Fragment,null,p.default.createElement("div",{className:"line"},p.default.createElement("span",null,"目标状态"),p.default.createElement(m.Select,{value:e.targetCid,optionList:t,onChange:this.handleLinkTarget})),p.default.createElement("div",{className:"detail"},p.default.createElement("div",{className:"desc"},"神奇移动"),p.default.createElement(h.Switch,{size:"small",isChecked:"none"===e.transition,onChange:this.handleLinkChange})))}}]),t}(p.PureComponent)},H27A:function(e,t,
r){"use strict"
var n=r("284h"),a=r("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var c=a(r("o0o1")),i=a(r("yXPU")),o=a(r("lwsE")),l=a(r("W8MJ")),s=a(r("a1gu")),u=a(r("Nsbk")),d=a(r("PJYZ")),f=a(r("7W2i")),p=a(r("lSNA")),m=n(r("q1tI")),h=a(r("17x9")),v=r("DqDi"),g=r("i6OX"),y=a(r("4QcC")),b=a(r("Ur7v")),S=a(r("lCKy")),w=a(r("iX79")),E=r("/5+U"),C=r("1iCU"),k=r("t3Un"),_=r("2EV6"),x=r("Gbs1"),T=r("6x+O"),P=a(r("rtgd")),M=a(r("UbMB")).default.bind(P.default),O=[{label:I18N.preview.preview,icon:m.default.createElement(g.SVGIcon,{name:"design/preview"})},{
label:I18N.preview_panel.developer_mode,icon:m.default.createElement(g.SVGIcon,{name:"design/inspect"})},{label:I18N.preview_panel.comment,icon:m.default.createElement(g.SVGIcon,{name:"design/comment"})}],j=O.slice(0,2),I=function(e){function i(){var e,n;(0,o.default)(this,i)
for(var t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a]
return n=(0,s.default)(this,(e=(0,u.default)(i)).call.apply(e,[this].concat(r))),(0,p.default)((0,d.default)(n),"setElementRef",function(e){return n.$elem=e}),(0,p.default)((0,d.default)(n),"handleTabChange",function(e){var t=n.props.dispatch,r=C.PREVIEW_CONFIG[e]
t({type:"entry:preview:select",payload:{toolbarActiveItem:C.PREVIEW_CONFIG[e]}}),MB.event("preview","".concat(C.TOOLBAR_TRAKING_CONFIG[r]))}),(0,p.default)((0,d.default)(n),"handTooltip",function(){$(n.$elem).tooltip({container:"body",selector:".project-name",placement:"right",trigger:"hover",title:function(e,t,r){var n=this.offsetWidth,a=this.scrollWidth,i=this.textContent
return n<a&&[i]}})}),n}return(0,f.default)(i,e),(0,l.default)(i,[{key:"componentDidMount",value:function(){this.handTooltip()}},{key:"UNSAFE_componentWillReceiveProps",value:function(e){var t=e.toolbarActiveItem,r=e.loadSliceUrl
t!=this.props.toolbarActiveItem&&this.props.dispatch({type:"reducer:preview-toolbar:update",payload:{isShowColorPicker:!1,isSelectLayer:!1}}),r!=this.props.loadSliceUrl&&R(r)}},{key:"render",value:function(){var e=this.props,t=e.scale,r=e.project,n=e.dispatch,a=e.toolbarActiveItem,i=e.isScrollable,o=e.isHighlight,l=e.isStickyShow,c=e.shellType,s=e.showToolBarText,u=C.PREVIEW_CONFIG.indexOf(a)||0,d=a!=C.PREVIEW,f=r.name||"",p=MB.isHTMLZip()?j:O,h=m.default.createElement(y.default,{scale:t,dispatch:n})
return"project"!==(0,_.getProjectType)(r)?h:m.default.createElement("header",{className:M("preview-toolbar",{"hide-text":!s})},m.default.createElement("div",{className:"toolbar-left",ref:this.setElementRef},(0,E.canBackToWorkspace)()&&m.default.createElement("a",{title:I18N.back,onClick:N,className:"back-icon"},m.default.createElement(g.SVGIcon,{name:"angle_bracket_left"})),m.default.createElement("span",{className:"project-name"},(0,T.getTextOfHTML)(f))),m.default.createElement("div",{
className:"toolbar-main"},h,m.default.createElement("div",{className:"toolbar-main-wrapper"},m.default.createElement(v.NavigationBar,{tabs:p,activeIndex:u,onChange:this.handleTabChange,className:"preview-toolbar-nav",hideBorder:!0}))),m.default.createElement("div",{className:"toolbar-right"},m.default.createElement(S.default,{canSetDeviceShell:(0,x.canSetDeviceShell)(r),disabled:d,isScrollable:i,isHighlight:o,isStickyShow:l,shellType:c,dispatch:n}),m.default.createElement("span",{className:"line"}),
m.default.createElement(b.default,{dispatch:n}),m.default.createElement("span",{className:"line"}),m.default.createElement(w.default,{dispatch:n})))}}]),i}(m.PureComponent)
t.default=I,(0,p.default)(I,"propTypes",{scale:h.default.number,project:h.default.object,toolbarActiveItem:h.default.string,loadSliceUrl:h.default.string,showToolBarText:h.default.bool,isScrollable:h.default.bool,isHighlight:h.default.bool,isStickyShow:h.default.bool,shellType:h.default.string,dispatch:h.default.func})
var N=function(){(0,E.canBackToWorkspace)()&&MB.designer.backDesign()},R=function(){var t=(0,i.default)(c.default.mark(function e(r){var n,a,i,o,l
return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n=!0,i=1
case 2:if(n)return e.next=5,(0,E.setTimeoutAsync)(Math.min(2e3*i++,1e4))
e.next=16
break
case 5:return e.next=7,t=r,(0,k.requestJSON)(t,null,{method:"POST"})
case 7:if(o=e.sent,l=o.url,"ok"===o.status&&(n=!1,a=l),20<i)return(0,E.downloadFail)(),e.abrupt("return",!1)
e.next=14
break
case 14:e.next=2
break
case 16:return(0,E.downloadWithATag)({url:"/".concat(a),type:"zip"}),e.abrupt("return",!0)
case 18:case"end":return e.stop()}var t},e)}))
return function(e){return t.apply(this,arguments)}}()},HFhh:function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var h=r("9LU6"),n=r("WVP6"),a={id:null,name:"",email:"",avatar:"",plan:{state:"",type:"free",rawType:"free",daysLeft:""}},i=(0,n.createStateStore)(a),o=i.getState,l=i.setState,c=i.wrapEntry
var s={entryMap:{"user:set":c(function(e,t,r){var n=t.dispatch,a=r.payload,i=void 0===a?{}:a,o=i.id,l=void 0===o?null:o,c=i.name,s=void 0===c?"":c,u=i.email,d=void 0===u?"":u,f=i.avatar,p=void 0===f?"":f
n({type:"reducer:user:update",payload:(0,h.objectMerge)(e,{id:l,name:s,email:d,avatar:p,plan:function(e){var t=e.plan,r=e.state,n=(e.limitation,e.days_left)
return{state:r||"",type:"active"===r&&t||"free",rawType:t||"free",daysLeft:n||""}}(i)})})}),"user:clear":c(function(e,t,r){(0,t.dispatch)({type:"reducer:user:update",payload:a})})},getState:o,setState:l}
t.default=s},HNPj:function(e,t,r){"use strict"
var n=r("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var a=n(r("lwsE")),i=n(r("W8MJ")),o=n(r("a1gu")),l=n(r("Nsbk")),c=n(r("7W2i")),s=n(r("q1tI")),u=n(r("17x9")),d=n(r("Y69h")),f=n(r("7Rdd")),p=n(r("0uCA")),h=n(r("mCdf")),m=r("ZXhj"),v=r("IdPL"),g=n(r("TjoA")),y=function(e){function t(){return(0,a.default)(this,t),(0,o.default)(this,(0,l.default)(t).apply(this,arguments))}return(0,c.default)(t,e),(0,i.default)(t,[{key:"shouldComponentUpdate",value:function(e){return!((0,m.checkSameRect)(e.baseRect,this.props.baseRect)&&(0,m.checkSameRect)(e.refRect,
this.props.refRect)&&(0,m.checkSameRect)(e.screen,this.props.screen)&&e.theme===this.props.theme)}},{key:"render",value:function(){var e=this.props,t=e.baseRect,r=e.refRect,n=e.screen,a=e.theme,i=e.renderValue,o=v.STYLE_MAP[a].verboseAuxiliaryLines
return s.default.createElement("div",{className:g.default["distance-measurement-container"]},s.default.createElement(d.default,{baseRect:t,refRect:r,screen:n,style:v.STYLE_MAP[a].distanceMarks,renderValue:i}),o?s.default.createElement(p.default,{refRect:r,screen:n,style:v.STYLE_MAP[a].auxiliaryLines}):s.default.createElement(h.default,{baseRect:t,refRect:r,screen:n,style:v.STYLE_MAP[a].auxiliaryLines}),s.default.createElement(f.default,{refRect:r,screen:n,style:v.STYLE_MAP[a].refRectBorder}))}}]),t}(
s.default.Component);(t.default=y).propTypes={baseRect:u.default.object,refRect:u.default.object,screen:u.default.object,theme:u.default.string,renderValue:u.default.func}},HfeQ:function(e,t,r){"use strict"
var n=r("284h"),a=r("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var i=a(r("lwsE")),o=a(r("W8MJ")),l=a(r("a1gu")),c=a(r("Nsbk")),s=a(r("7W2i")),u=a(r("lSNA")),d=a(r("17x9")),w=n(r("q1tI")),E=r("6XO9")
r("wfO3")
var f=function(e){function t(){return(0,i.default)(this,t),(0,l.default)(this,(0,c.default)(t).apply(this,arguments))}return(0,s.default)(t,e),(0,o.default)(t,[{key:"render",value:function(){var e=this.props,t=e.dispatch,r=e.isOpen,n=e.type,a=e.alertType,i=e.title,o=e.desc,l=void 0===o?i:o,c=e.isHTML,s=e.onClose,u=void 0===s?function(){return t({type:"container:modal:close"})}:s,d=e.onCancel,f=void 0===d?function(){return null}:d,p=e.onConfirm,h=e.canClose,m=e.canCancel,v=e.canConfirm,g=e.cancelText,
y=e.confirmText,b=m?function(){f&&f(),u&&u()}:void 0,S=v?function(){p&&p(),u&&u()}:void 0
return w.default.createElement(E.Modal,{isOpen:r,type:n,portalClassName:"global-alert-portal",title:i!==l&&i?i:I18N.reminder,onClose:function(){"function"==typeof f&&f(),u()},canClose:h,onCancel:b,onConfirm:S,cancelText:g,confirmText:y},c?w.default.createElement("p",{className:"desc",dangerouslySetInnerHTML:{__html:l}}):w.default.createElement("div",{className:"desc"},l),"prompt"===a&&w.default.createElement(E.FormLabel,{name:I18N.password},w.default.createElement(E.Input,{type:"password",
className:"prompt-pwd"})))}}]),t}(w.PureComponent)
t.default=f,(0,u.default)(f,"propTypes",{dispatch:d.default.func,isOpen:d.default.bool,type:d.default.string,alertType:d.default.oneOf(["confirm","alert","prompt"]),onClose:d.default.func,onCancel:d.default.func,onConfirm:d.default.func,canClose:d.default.bool,canCancel:d.default.bool,canConfirm:d.default.bool,confirmText:d.default.string,cancelText:d.default.string,title:d.default.string,desc:d.default.any,isHTML:d.default.bool}),(0,u.default)(f,"defaultProps",{type:"alert"})},Hlt7:function(e,t,r){
"use strict"
var n=r("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.scrollParent=t.checkInvision=t.checkOverflowVisbile=t.filterSearch=void 0
var a=n(r("lSNA")),u=n(r("J4zp")),p=n(r("i8i4"))
function i(t,e){var r=Object.keys(t)
if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t)
e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)}return r}function d(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{}
e%2?i(r,!0).forEach(function(e){(0,a.default)(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(r).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}t.filterSearch=function(e,t,r){for(var n=[],a=0,i=0,o=Object.entries(e);i<o.length;i++){var l=(0,u.default)(o[i],2),c=l[0],s=l[1]
t&&0<t.length&&s.toLowerCase().includes(t)&&n.push(d({},r[c],{index:a++}))}return n}
function o(e){if(!e)return document.documentElement
for(var t="absolute"===e.style.position,r=/(scroll|auto)/,n=e;n;){if(!n.parentNode)return e.ownerDocument||document.documentElement
var a=window.getComputedStyle(n),i=a.position,o=a.overflow,l=a["overflow-x"],c=a["overflow-y"]
if("static"===i&&t&&(n=n.parentNode),r.test(o)&&r.test(l)&&r.test(c))return n
n=n.parentNode}return e.ownerDocument||e.documentElement||document.documentElement}t.scrollParent=o
function l(e,t){var r,n,a=p.default.findDOMNode(e)
try{var i=t.getBoundingClientRect()
r=i.top,n=i.height}catch(e){r=h,n=m}var o,l,c=window.innerHeight||document.documentElement.clientHeight,s=Math.max(r,0),u=Math.min(c,r+n)-s
try{var d=a.getBoundingClientRect()
o=d.top,l=d.height}catch(e){o=h,l=m}var f=o-s
return f<=u&&0<=f+l}var h=0,m=0
t.checkOverflowVisbile=l
t.checkInvision=function(e){var t=p.default.findDOMNode(e),r=o(t)
return!!l(e,r)}},Hrzm:function(e,t,r){"use strict"
var n=r("284h"),a=r("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var o=a(r("lwsE")),l=a(r("W8MJ")),c=a(r("a1gu")),s=a(r("Nsbk")),u=a(r("PJYZ")),d=a(r("7W2i")),f=a(r("lSNA")),i=a(r("17x9")),p=n(r("q1tI")),h=r("uavl"),m=r("zQyp")
r("dAiO")
var v=function(e){function i(){var e,a;(0,o.default)(this,i)
for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n]
return a=(0,c.default)(this,(e=(0,s.default)(i)).call.apply(e,[this].concat(r))),(0,f.default)((0,u.default)(a),"renderStickies",function(){var e=a.props,t=e.screenCid,r=e.stateCid
if(!t||!r)return null
var n=[]
return Widget.all().forEach(function(e){"sticky"===e.name&&e.screen_cid===t&&n.push(Widgetstate.find(r+e.cid)||e)}),n.map(function(e){return p.default.createElement(g,{key:e.cid,sticky:e})})}),a}return(0,d.default)(i,e),(0,l.default)(i,[{key:"render",value:function(){return p.default.createElement("div",{id:"sticky-container",onClick:this.handleClick},p.default.createElement("div",{id:"stickies"},this.renderStickies()))}}]),i}(p.PureComponent)
t.default=v,(0,f.default)(v,"propTypes",{screenCid:i.default.string,stateCid:i.default.string})
var g=function(e){function i(){var e,r;(0,o.default)(this,i)
for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a]
return r=(0,c.default)(this,(e=(0,s.default)(i)).call.apply(e,[this].concat(n))),(0,f.default)((0,u.default)(r),"handleClick",function(e){var t=r.props.sticky
Link.find(t.link_cids)&&MB.runner.eventHandler.prepareJump(e,["tap","click"])}),r}return(0,d.default)(i,e),(0,l.default)(i,[{key:"render",value:function(){var e=this.props.sticky,t=(0,m.getWidgetClassName)(e,"p"),r=(0,m.getWidgetStyle)(e,"p"),n=Link.find(e.link_cids)?e.link_cids:""
return p.default.createElement("div",{key:e.cid,"data-cid":e.cid,"data-link_cid":n,id:"widget".concat(e.cid,"p"),className:t,style:r,onClick:this.handleClick},(0,h.getWidgetContent)(e))}}]),i}(p.PureComponent);(0,f.default)(g,"propTypes",{sticky:i.default.object})},IV71:function(e,t,r){"use strict"
var n=r("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"WebpackInterface",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"mixConfig",{enumerable:!0,get:function(){return i.default}}),t.default=void 0
var a=n(r("jeLk")),i=n(r("JPxj")),o=a.default
t.default=o},Ibie:function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.patchWidgetSize=void 0
t.patchWidgetSize=function(e,t,r){var n,a=2<arguments.length&&void 0!==r?r:20
switch(e.name){case"status_bar":n=0
break
case"keyboard":case"tab_bar":n=t.height-e.height
break
case"navigation_bar":n=a
break
default:n=e.top}return e.top=n,i(e.name)&&(e.width=t.width),e}
var i=function(e){return["status_bar","keyboard","tab_bar"].includes(e)}},IdPL:function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
t.STYLE_MAP=void 0
t.STYLE_MAP={design:{distanceMarks:{showStartAndEndBoundary:!1,dashed:!1,colorForLines:"#eb5648",colorForText:"#eb5648"},refRectBorder:{dashed:!1,colorForLines:"#eb5648"},verboseAuxiliaryLines:!1,auxiliaryLines:{dashed:!(t.STYLE_MAP=void 0),colorForLines:"#eb5648"}},preview:{distanceMarks:{showStartAndEndBoundary:!0,dashed:!0,colorForLines:"#ff7100"},refRectBorder:{dashed:!0,colorForLines:"#1e98ea"},verboseAuxiliaryLines:!0,auxiliaryLines:{dashed:!0,colorForLines:"#1e98ea"}}}},Ij3M:function(e,t,r){
"use strict"
var n=r("284h"),a=r("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.ColorInfo=void 0
var i=a(r("lwsE")),o=a(r("W8MJ")),l=a(r("a1gu")),c=a(r("Nsbk")),s=a(r("PJYZ")),u=a(r("7W2i")),d=a(r("lSNA")),f=n(r("q1tI")),p=a(r("17x9")),h=r("wYtL"),m=r("XrEr"),v=a(r("UbMB")),g=a(r("mfFm")),y=v.default.bind(g.default),b=function(e){function r(e){var t
return(0,i.default)(this,r),t=(0,l.default)(this,(0,c.default)(r).call(this,e)),(0,d.default)((0,s.default)(t),"handleClick",function(){t.setState(function(e){return{activeColor:e.colorList[e.index%4],index:e.index+1}})}),t.state={index:0,activeColor:e.stateColor,colorList:"transparent"===e.rgbaColor?Array(4).fill("transparent"):S(e.rgbaColor)||[]},t}return(0,u.default)(r,e),(0,o.default)(r,[{key:"UNSAFE_componentWillReceiveProps",value:function(e){var t=e.stateColor
this.setState(function(e){return{activeColor:t}})}},{key:"render",value:function(){var e=this.state.activeColor,t=this.props,r=t.title,n=t.rgbaColor,a=y("panel","panel-bottom-8"),i=n.split(","),o=i.length,l=3<o&&1!=+i[o-1].replace(")","")
return f.default.createElement("div",{className:a,"data-value":r},f.default.createElement("div",{className:"panel-item panel-item-color item-flex-1"},f.default.createElement(h.Tooltip,{className:"panel-item-value textEllipsis",content:{click:I18N.preview_panel.copied},"data-type":"copy",arrowed:!1,"data-clipboard-text":e},e),f.default.createElement("div",{className:"panel-item-color-block-wrap ".concat(l?"panel-item-color-block-imageback-wrap":"")},f.default.createElement("div",{
className:"panel-item-color-block",style:{backgroundColor:n},onClick:this.handleClick}))))}}]),r}(f.PureComponent)
t.ColorInfo=b
var S=function(e){if(e)return[(0,m.getColorFromUnit)(e,"rgba"),(0,m.getColorFromUnit)(e,"rgb"),(0,m.getColorFromUnit)(e,"argb"),(0,m.getColorFromUnit)(e,"hex")]}
b.propTypes={rgbaColor:p.default.string.isRequired,stateColor:p.default.string,title:p.default.string}},Iusu:function(e,t,r){"use strict"
var n=r("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.Base=void 0
function a(e){var t=e.title,r=e.dataValue,n=void 0===r?[]:r,a=e.data,i=void 0===a?[]:a,o=e.text,l=e.color,c=e.className,s=e.colorUnit,u=e.first,d=(0,b.getColorFromUnit)(l,"rgba"),f=(0,b.getColorFromUnit)(l,s),p=0<n.length,h=4===n.length,m=S("panel","".concat(c),{"panel-bottom-8":!p,"panel-item-text":!!o,"shadow-panel":h})
return l?v.default.createElement(y.ColorInfo,{title:t,rgbaColor:d,stateColor:f}):v.default.createElement("div",{className:m,"data-value":t},o?v.default.createElement(g.Tooltip,{arrowed:!1,className:"panel-item item-flex-1",content:{click:I18N.preview_panel.copied},duration:1e3},v.default.createElement("pre",{"data-type":"copy","data-placement":"top","data-clipboard-text":o,className:"panel-item-value text-content",dangerouslySetInnerHTML:{__html:o}})):v.default.createElement("div",{className:"".concat(
i.length<2?"single-panel-box":"mult-panel-box")},(u?i.slice(0,1):i).map(function(e,t){return v.default.createElement(g.Tooltip,{key:t,arrowed:!1,content:{click:I18N.preview_panel.copied},duration:1e3,className:"panel-item","data-value":n[t]},v.default.createElement("div",{"data-type":"copy","data-clipboard-text":e,className:"panel-item-value"},e))})))}var v=n(r("q1tI")),i=n(r("17x9")),g=r("wYtL"),y=r("RUem"),b=r("XrEr"),o=n(r("UbMB")),l=n(r("mfFm")),S=o.default.bind(l.default);(t.Base=a).propTypes={
title:i.default.string,data:i.default.array,dataValue:i.default.array,text:i.default.string,color:i.default.string,colorUnit:i.default.string,first:i.default.bool,className:i.default.string}},J2m7:function(e,t,r){var n=r("XKAG")(r("UfWW"))
e.exports=n},JPxj:function(e,t,r){"use strict"
function n(e,t,r){return r?t?e(t,r):r:t}function a(e,t){var r={}
function n(e,t){r[e]=t}for(var a in e)n(a,e[a])
for(var i in t)n(i,t[i])
return r}function i(e,t){return function(){return e.apply(void 0,arguments),t.apply(void 0,arguments)}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t={containerReducerMap:{},viewMap:{},sagaMap:{},extendCallback:null}
return e.forEach(function(e){t.containerReducerMap=n(a,t.containerReducerMap,e.containerReducerMap),t.viewMap=n(a,t.viewMap,e.viewMap),t.extendCallback=n(i,t.extendCallback,e.extendCallback),t.sagaMap=n(a,t.sagaMap,e.sagaMap)}),t}},JSCU:function(e,t,r){"use strict"
var n=r("284h"),a=r("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var i=a(r("lwsE")),o=a(r("W8MJ")),l=a(r("a1gu")),c=a(r("Nsbk")),s=a(r("PJYZ")),u=a(r("7W2i")),d=a(r("lSNA")),f=a(r("17x9")),p=n(r("q1tI")),h=a(r("TSYQ")),m=a(r("ctY3")),v=function(e){function r(e){var t
return(0,i.default)(this,r),t=(0,l.default)(this,(0,c.default)(r).call(this,e)),(0,d.default)((0,s.default)(t),"handleChange",function(e){return t.setState({value:e})}),(0,d.default)((0,s.default)(t),"handleBlur",function(){""===t.state.value&&t.setState({value:t.initialValue}),t.props.onConfirm(t.state.value)}),t.state={value:e.value},t.initialValue=e.value,t}return(0,u.default)(r,e),(0,o.default)(r,[{key:"render",value:function(){var e=this.props,t=e.isEditing,r=e.className,n=this.state.value
return p.default.createElement(m.default,{value:n,className:(0,h.default)("editable-span",r),editing:t,onBlur:this.handleBlur,onChange:this.handleChange})}}]),r}(p.PureComponent)
t.default=v,(0,d.default)(v,"propTypes",{value:f.default.string,className:f.default.string,isEditing:f.default.bool,onConfirm:f.default.func})},JXIg:function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var n=(0,r("WVP6").createStateStore)({teamCid:null,projectCid:null,screenCid:null,userRole:"guest"}),a=n.getState,i=n.setState,o={"current:set":(0,n.wrapEntry)(function(e,t,r){var n=t.dispatch,a=r.payload,i=a.project,o=a.screen,l=a.userCollaborator
n({type:"reducer:current:update",payload:{teamCid:i&&i.team_cid||null,projectCid:i&&i.cid||null,screenCid:o&&o.cid||null,userRole:function(e){return c.has(e)?e:"guest"}(l&&l.role)}})})},c=new Set(["owner","admin","editor","viewer"])
var l={entryMap:o,getState:a,setState:i}
t.default=l},JfQ8:function(e,t,r){"use strict"
var n=r("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.receiveResourceError=t.RECEIVE_RESOURCE_ERROR=t.receiveResourceSuccess=t.RECEIVE_RESOURCE_SUCCESS=t.SET_VISIBILITY_SCREEN=void 0
var i=n(r("lSNA"))
function o(t,e){var r=Object.keys(t)
if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t)
e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)}return r}t.SET_VISIBILITY_SCREEN="SET_VISIBILITY_SCREEN"
var l="RECEIVE_RESOURCE_SUCCESS"
t.RECEIVE_RESOURCE_SUCCESS=l
t.receiveResourceSuccess=function(e,t){var r=t.document,n=t.layers,a=t.artboard
return{type:l,payload:function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{}
e%2?o(r,!0).forEach(function(e){(0,i.default)(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(r).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}({screenID:e},r,{layers:n,artboard:a})}}
var a="RECEIVE_RESOURCE_ERROR"
t.RECEIVE_RESOURCE_ERROR=a
t.receiveResourceError=function(e,t){return{type:a,payload:{screenID:e,error:t}}}},K7IS:function(e,t,r){"use strict"
var n=r("284h"),a=r("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var o=a(r("lwsE")),l=a(r("W8MJ")),c=a(r("a1gu")),s=a(r("Nsbk")),u=a(r("PJYZ")),d=a(r("7W2i")),f=a(r("lSNA")),i=a(r("17x9")),p=n(r("q1tI")),h=a(r("TSYQ")),m=a(r("4dyd")),v=a(r("mesP")),g=a(r("mMVB")),y=r("mC/1"),b=function(e){function i(){var e,n;(0,o.default)(this,i)
for(var t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a]
return n=(0,c.default)(this,(e=(0,s.default)(i)).call.apply(e,[this].concat(r))),(0,f.default)((0,u.default)(n),"handleResize",function(){var e=document.querySelector("#preview_scrollBar_viewport").getBoundingClientRect(),t=e.width,r=e.height
n.props.dispatch({type:"preview:scrollbar:viewport",payload:{width:t,height:r}})}),(0,f.default)((0,u.default)(n),"handleBackToOrigin",function(){n.props.dispatch({type:"preview:set:canvas:offset",payload:{offset:{x:0,y:0}}})}),n}return(0,d.default)(i,e),(0,l.default)(i,[{key:"componentDidMount",value:function(){this.handleResize()}},{key:"render",value:function(){var e=this.props,t=e.isLayerActive,r=e.isDisplaced
return p.default.createElement(y.StyledMainContent,{id:"preview_scrollBar_viewport"},t&&p.default.createElement(v.default,null),p.default.createElement(y.StyledResetButton,{className:(0,h.default)({"is-show":r}),onClick:this.handleBackToOrigin},I18N.click_to_origin),p.default.createElement(g.default,null),p.default.createElement(m.default,{onResize:this.handleResize}))}}]),i}(p.PureComponent)
t.default=b,(0,f.default)(b,"propTypes",{isLayerActive:i.default.bool,isDisplaced:i.default.bool,dispatch:i.default.func})},KHYK:function(e,t,r){"use strict"
var n=r("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var o=n(r("pVnL")),l=n(r("lwsE")),i=n(r("W8MJ")),c=n(r("a1gu")),s=n(r("Nsbk")),u=n(r("PJYZ")),d=n(r("7W2i")),f=n(r("lSNA")),a=n(r("J4zp")),p=n(r("17x9")),h=n(r("q1tI")),m=n(r("HNPj")),v=r("/5+U"),g=n(r("dZ9F"))
function y(t,e){var r=Object.keys(t)
if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t)
e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)}return r}function b(e){var t=e.kind?0:e.rotation,r=(0,v.getMinBoundingRect)(function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{}
e%2?y(r,!0).forEach(function(e){(0,f.default)(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):y(r).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}({},e,{rotate:t})),n=(0,a.default)(r,4)
return{top:n[0],left:n[1],width:n[2],height:n[3]}}var S=function(e){function a(){var e,i;(0,l.default)(this,a)
for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n]
return i=(0,c.default)(this,(e=(0,s.default)(a)).call.apply(e,[this].concat(r))),(0,f.default)((0,u.default)(i),"renderValue",function(e){var t=i.props,r=t.ratio,n=t.distanceUnit,a=i.getValueRatio()
return h.default.createElement(g.default,(0,o.default)({ratio:r,unit:n,valueRatio:a},e))}),(0,f.default)((0,u.default)(i),"getValueRatio",function(){var e=i.props.selectedLayer,t=e.src_width,r=e.width
return t?t/r:1}),i}return(0,d.default)(a,e),(0,i.default)(a,[{key:"render",value:function(){var e=this.props,t=e.show,r=e.selectedLayer,n=e.hoveringLayer,a=e.screen
if(!t)return null
var i=b(r),o=n?b(n):{top:0,left:0,width:a.width,height:a.height}
return h.default.createElement(m.default,{baseRect:i,refRect:o,screen:a,renderValue:this.renderValue,theme:"preview"})}}]),a}(h.default.Component)
S.propTypes={show:p.default.bool,selectedLayer:p.default.object,hoveringLayer:p.default.object,screen:p.default.object}
var w=S
t.default=w},KKmY:function(e,t,r){},KUpD:function(e,t,r){e.exports={"install-page-wrapper":"_2145f6w_gvAx5jbCLSvNm1","install-page":"_1ucR52TRm2uhcZJhUjsxqG"}},Kgn6:function(e,t,r){"use strict"
var o=void 0
!function(t){var l,c={},s={16:!1,18:!1,17:!1,91:!1},r="all",u={"⇧":16,shift:16,"⌥":18,alt:18,option:18,"⌃":17,ctrl:17,control:17,"⌘":91,command:91},n={backspace:8,tab:9,clear:12,enter:13,return:13,esc:27,escape:27,space:32,left:37,up:38,right:39,down:40,del:46,delete:46,home:36,end:35,pageup:33,pagedown:34,",":188,".":190,"/":191,"`":192,"-":189,"=":187,";":186,"'":222,"[":219,"]":221,"\\":220},d=function(e){return n[e]||e.toUpperCase().charCodeAt(0)},f=[]
for(l=1;l<20;l++)n["f"+l]=111+l
function p(e,t){for(var r=e.length;r--;)if(e[r]===t)return r
return-1}function h(e,t){if(e.length!=t.length)return!1
for(var r=0;r<e.length;r++)if(e[r]!==t[r])return!1
return!0}var m={16:"shiftKey",18:"altKey",17:"ctrlKey",91:"metaKey"}
function a(e){var t,r,n,a,i,o
if(t=e.keyCode,-1==p(f,t)&&f.push(t),93!=t&&224!=t||(t=91),t in s)for(n in s[t]=!0,u)u[n]==t&&(v[n]=!0)
else if(function(e){for(l in s)s[l]=e[m[l]]}(e),v.filter.call(this,e)&&t in c)for(o=g(),a=0;a<c[t].length;a++)if((r=c[t][a]).scope==o||"all"==r.scope){for(n in i=0<r.mods.length,s)(!s[n]&&-1<p(r.mods,+n)||s[n]&&-1==p(r.mods,+n))&&(i=!1);(0!=r.mods.length||s[16]||s[18]||s[17]||s[91])&&!i||!1===r.method(e,r)&&(e.preventDefault?e.preventDefault():e.returnValue=!1,e.stopPropagation&&e.stopPropagation(),e.cancelBubble&&(e.cancelBubble=!0))}}function v(e,t,r){var n,a
n=y(e),void 0===r&&(r=t,t="all")
for(var i=0;i<n.length;i++)a=[],1<(e=n[i].split("+")).length&&(a=b(e),e=[e[e.length-1]]),e=e[0],(e=d(e))in c||(c[e]=[]),c[e].push({shortcut:n[i],scope:t,method:r,key:n[i],mods:a})}for(l in u)v[l]=!1
function g(){return r||"all"}function y(e){var t
return""==(t=(e=e.replace(/\s/g,"")).split(","))[t.length-1]&&(t[t.length-2]+=","),t}function b(e){for(var t=e.slice(0,e.length-1),r=0;r<t.length;r++)t[r]=u[t[r]]
return t}function e(e,t,r){e.addEventListener?e.addEventListener(t,r,!1):e.attachEvent&&e.attachEvent("on"+t,function(){r(window.event)})}e(document,"keydown",function(e){a(e)}),e(document,"keyup",function(e){var t,r=e.keyCode,n=p(f,r)
if(0<=n&&f.splice(n,1),93!=r&&224!=r||(r=91),r in s)for(t in s[r]=!1,u)u[t]==r&&(v[t]=!1)}),e(window,"focus",function(){for(l in s)s[l]=!1
for(l in u)v[l]=!1})
var i=t.key
t.key=v,t.key.setScope=function(e){r=e||"all"},t.key.getScope=g,t.key.deleteScope=function(e){var t,r,n
for(t in c)for(r=c[t],n=0;n<r.length;)r[n].scope===e?r.splice(n,1):n++},t.key.filter=function(e){var t=(e.target||e.srcElement).tagName
return!("INPUT"==t||"SELECT"==t||"TEXTAREA"==t)},t.key.isPressed=function(e){return"string"==typeof e&&(e=d(e)),-1!=p(f,e)},t.key.getPressedKeyCodes=function(){return f.slice(0)},t.key.noConflict=function(){var e=t.key
return t.key=i,e},t.key.unbind=function(e,t){var r,n,a,i,o,l=[]
for(r=y(e),i=0;i<r.length;i++){if(1<(n=r[i].split("+")).length&&(l=b(n)),e=n[n.length-1],e=d(e),void 0===t&&(t=g()),!c[e])return
for(a=0;a<c[e].length;a++)(o=c[e][a]).scope===t&&h(o.mods,l)&&(c[e][a]={})}},void 0!==o&&(o.exports=v)}(window)},Kkl0:function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.enterLayer=t.ENTER_LAYER=t.activateLayer=t.ACTIVATE_LAYER=t.selectLayer=t.SELECT_LAYER=t.requestSelectLayer=t.REQUEST_SELECT_LAYER=void 0
var n="REQUEST_SELECT_LAYER"
t.REQUEST_SELECT_LAYER=n
t.requestSelectLayer=function(e,t){return{type:n,payload:{layerID:e}}}
var a="SELECT_LAYER"
t.SELECT_LAYER=a
t.selectLayer=function(e){return{type:a,payload:{layerID:e}}}
var i="ACTIVATE_LAYER"
t.ACTIVATE_LAYER=i
t.activateLayer=function(e){return MB.event("preview","点击了 Layer 元素"),{type:i,payload:{layerID:e}}}
var o="ENTER_LAYER"
t.ENTER_LAYER=o
t.enterLayer=function(e){return{type:o,payload:{layerID:e}}}},Kurm:function(e,t,r){e.exports={"full-screen-actions":"kbJl1VYgaCmw8Z46GFG6z"}},KwMD:function(e,t){e.exports=function(e,t,r,n){for(var a=e.length,i=r+(n?1:-1);n?i--:++i<a;)if(t(e[i],i,e))return i
return-1}},L0cU:function(e,t,r){"use strict"
var n=r("284h"),a=r("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var i=a(r("lwsE")),o=a(r("W8MJ")),l=a(r("a1gu")),c=a(r("Nsbk")),s=a(r("PJYZ")),u=a(r("7W2i")),d=a(r("lSNA")),f=a(r("17x9")),p=n(r("q1tI")),h=a(r("4dyd")),m=a(r("xtk/")),v=r("/N2d"),g=r("MURh"),y=function(e){function t(e){var r
return(0,i.default)(this,t),r=(0,l.default)(this,(0,c.default)(t).call(this,e)),(0,d.default)((0,s.default)(r),"setContainerRef",function(e){return r.$container=e}),(0,d.default)((0,s.default)(r),"updateContainerRect",function(){return r.setState({containerRect:r.$container.getBoundingClientRect()})}),(0,d.default)((0,s.default)(r),"handleScroll",function(){return r.updateContainerRect()}),(0,d.default)((0,s.default)(r),"handleResize",function(){return r.updateContainerRect()}),(0,d.default)((0,s.default)(r
),"handleScrollIntoView",function(e){var t=r.state.containerRect
r.$container.scrollTop+=e.top-t.top}),r.state={containerRect:null},r}return(0,u.default)(t,e),(0,o.default)(t,[{key:"componentDidMount",value:function(){this.updateContainerRect()}},{key:"render",value:function(){var r=this,e=this.props,t=e.screenList,n=e.projectToken,a=e.activeScreenCid,i=e.className,o=e.screenTimestampMap,l=e.onClickScreenItem,c=e.treeProps,s=e.editingCid,u=e.hoverCid,d=this.state.containerRect
return p.default.createElement(g.StyledThumbnailList,{ref:this.setContainerRef,className:i,onScroll:this.handleScroll},p.default.createElement("ol",{className:"thumbnail-list"},0===t.length&&p.default.createElement("div",{className:"not-match"},I18N.preview_panel.not_match),t.map(function(e,t){return p.default.createElement(m.default,{key:e.cid,screen:e,isEditing:e.cid===s,isHover:e.cid===u,projectToken:n,version:o[e.cid],canvasZoom:(0,v.getScreenThumbnailZoom)(e.width,e.height),isActive:e.cid===a,
containerRect:d,onActivate:l,scrollIntoView:r.handleScrollIntoView,treeProps:c})})),p.default.createElement(h.default,{onResize:this.handleResize}))}}]),t}(p.PureComponent);(t.default=y).propTypes={className:f.default.string,screenList:f.default.array,projectToken:f.default.string,editingCid:f.default.string,hoverCid:f.default.string,activeScreenCid:f.default.string,screenTimestampMap:f.default.object,onClickScreenItem:f.default.func,treeProps:f.default.object},y.defaultProps={screenTimestampMap:{}}},
LVRM:function(e,t,r){"use strict"
var n=r("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.BasicAttributes=void 0
function a(e){var t=e.adapterLeft,r=e.adapterTop,n=e.adapterWidth,a=e.adapterHeight,i=e.opacity,o=e.radius,l=e.rotate
return c.default.createElement(s.WrapComponent,null,I18N.preview_panel.basic_attribute,t&&c.default.createElement(s.Base,{title:I18N.preview_panel.position,dataValue:[I18N.preview_panel._x,I18N.preview_panel._y],data:[t,r]}),n&&c.default.createElement(s.Base,{title:I18N.preview_panel.size,dataValue:[I18N.preview_panel.width,I18N.preview_panel.height],data:[n,a]}),l&&c.default.createElement(s.Base,{title:I18N.preview_panel.rotation,data:[l]}),o&&c.default.createElement(s.Base,{
title:I18N.preview_panel.border_radius,data:[o]}),i&&c.default.createElement(s.Base,{title:I18N.preview_panel.opacity,data:[i]}))}var c=n(r("q1tI")),i=n(r("17x9")),s=r("RUem");(t.BasicAttributes=a).propTypes={adapterLeft:i.default.string,adapterHeight:i.default.string,adapterTop:i.default.string,adapterWidth:i.default.string,opacity:i.default.oneOfType([i.default.string,i.default.bool]),rotate:i.default.oneOfType([i.default.string,i.default.bool]),radius:i.default.oneOfType([i.default.string,
i.default.number])}},LbTH:function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.checkIfItemTextIsNewVersion=void 0
t.checkIfItemTextIsNewVersion=function(e){return"rich_text"===e.name}},Lyer:function(e,t,r){"use strict"
var n=r("284h"),a=r("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
function o(e){return MB.localStorageDelegate.setItem("guide_closed_".concat(e),!0)}var d=a(r("pVnL")),f=a(r("QILm")),l=a(r("lwsE")),c=a(r("W8MJ")),s=a(r("a1gu")),u=a(r("Nsbk")),p=a(r("PJYZ")),h=a(r("7W2i")),m=a(r("lSNA")),i=a(r("17x9")),v=n(r("q1tI")),g=r("6XO9"),y=a(r("rwIS")),b=function(e){function i(){var e,a;(0,l.default)(this,i)
for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n]
return a=(0,s.default)(this,(e=(0,u.default)(i)).call.apply(e,[this].concat(r))),(0,m.default)((0,p.default)(a),"setGuideRef",function(e){return a.guide=e}),(0,m.default)((0,p.default)(a),"handleCloseGuideManually",function(){o(a.props.id)}),(0,m.default)((0,p.default)(a),"autoClose",function(){var e=a.props,t=e.duration,r=e.autoClose,n=e.id
e.isOpen&&t&&(a.timer=setTimeout(function(){r(),o(n)},t))}),a}return(0,h.default)(i,e),(0,c.default)(i,[{key:"componentDidUpdate",value:function(e){e.isOpen!==this.props.isOpen&&this.autoClose()}},{key:"componentWillUnmout",value:function(){clearTimeout(this.timer)}},{key:"render",value:function(){var e=this.props,t=e.id,r=e.isOpen,n=e.children,a=e.localeKey,i=e.position,o=e.className,l=(0,f.default)(e,["id","isOpen","children","localeKey","position","className"])
if(function(e){return"true"===MB.localStorageDelegate.getItem("guide_closed_".concat(e))}(t))return n
var c=I18N.guide_base[a||t],s=c.header,u=c.content
return v.default.createElement(g.Guide,(0,d.default)({ref:this.setGuideRef,isOpen:r,position:i,onClose:this.handleCloseGuideManually,className:"".concat(y.default["guide-button"]," ").concat(o),header:s,guide:v.default.createElement("div",{dangerouslySetInnerHTML:{__html:u}}),X:"right"},l),n)}}]),i}(v.PureComponent);(t.default=b).propTypes={id:i.default.string.isRequired,isOpen:i.default.bool,duration:i.default.number,localeKey:i.default.string,children:i.default.element,autoClose:i.default.func,
className:i.default.string,position:i.default.string},b.defaultProps={gotItText:I18N.guide_base.got_it}},MGhH:function(e,t,r){"use strict"
var n=r("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.footerFilter=t.headerFilter=void 0
var a=n(r("lSNA")),i=r("0k54")
function o(t,e){var r=Object.keys(t)
if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t)
e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{}
e%2?o(r,!0).forEach(function(e){(0,a.default)(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(r).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}t.headerFilter=function(e,t){var r=e.children.filter(function(e){return 0===e.widget.primary_fixed&&("group"!==e.type?e.widget.t()<t:(0,i.getTreeBoundingRect)(e).minY<t)})
return l({},e,{children:r})}
t.footerFilter=function(e,r,n){var t=e.children.filter(function(e){if(0!==e.widget.primary_fixed)return!1
var t=r-e.widget.b()
return"group"!==e.type?t<n:r-(0,i.getTreeBoundingRect)(e).maxY<n})
return l({},e,{children:t})}},MURh:function(e,t,r){"use strict"
var n=r("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.StyledThumbnailList=void 0
var a=n(r("vOnD")),i=r("mggN"),o=a.default.div.withConfig({displayName:"styles__StyledThumbnailList",componentId:"sc-8dwe2g-0"})([
"width:100%;height:100%;overflow-x:hidden;overflow-y:auto;.thumbnail-list{display:flex;flex-wrap:wrap;width:calc(100% + 15px);color:#415058;.thumbnail-item{display:flex;flex-direction:column;justify-content:space-between;align-items:center;width:85px;position:relative;margin-right:10px;margin-bottom:10px;cursor:pointer;.Tooltip{width:100%;}.image-wrapper{width:100%;height:93px;padding:2px;background-color:",";border:1px solid ",
";border-radius:2px;display:flex;justify-content:center;align-items:center;transition:all 0.2s ease-out;img{max-width:100%;max-height:100%;pointer-events:none;}.toggle-comment{position:absolute;right:0;top:0;line-height:10px;transform:none;}.actions{display:none;position:absolute;z-index:1;top:4px;right:4px;height:24px;justify-content:space-around;align-items:center;&.is-hover{display:flex;}}&:hover,&.hover{border-width:2px;border-color:#79baff;padding:1px;.actions{display:flex;}}}.screen-name{height:26px;max-width:100%;line-height:26px;"
,";}&.active .image-wrapper{border-width:1px;border-color:#1e98ea;padding:2px;box-shadow:0 0 1px 0 rgba(34,162,237,0.66);}}}.not-match{width:100%;text-align:center;}"],function(e){return e.theme.thumbnail.bg},function(e){return e.theme.thumbnail.border_color},i.textEllipsis)
t.StyledThumbnailList=o},Mn07:function(e,t,r){"use strict"
var n=r("284h"),a=r("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var i=a(r("lwsE")),o=a(r("W8MJ")),l=a(r("a1gu")),c=a(r("Nsbk")),s=a(r("PJYZ")),u=a(r("7W2i")),d=a(r("lSNA")),f=a(r("RIqP")),p=a(r("17x9")),h=n(r("q1tI")),m=a(r("L0cU")),v=function(e){function t(e){var a
return(0,i.default)(this,t),a=(0,l.default)(this,(0,c.default)(t).call(this,e)),(0,d.default)((0,s.default)(a),"handleActivateScreen",function(e){var t=a.props,r=t.activeCid,n=t.dispatch
e!==r&&n({type:"entry:sync-runner:set-screen",payload:{cid:e}})}),a.treeProps={renderItem:e.renderCommentIcon},a}return(0,u.default)(t,e),(0,o.default)(t,[{key:"render",value:function(){var e=this.props,t=e.activeCid,r=function n(e,a,i){var o=i[e]?[i[e]]:[]
return a[e]&&a[e].forEach(function(e){var t=e.cid,r=n(t,a,i)
o.push.apply(o,(0,f.default)(r))}),o}("root",e.screenTreeMap,e.screenDataMap)
return h.default.createElement(m.default,{screenList:r,projectToken:MB.currentProject.access_token,activeScreenCid:t,onClickScreenItem:this.handleActivateScreen,treeProps:this.treeProps})}}]),t}(h.PureComponent)
t.default=v,(0,d.default)(v,"propTypes",{activeCid:p.default.string,screenTreeMap:p.default.object,screenDataMap:p.default.object,renderCommentIcon:p.default.func,dispatch:p.default.func})},NcbO:function(e,t,r){"use strict"
var n=r("284h"),a=r("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var o=a(r("lwsE")),l=a(r("W8MJ")),c=a(r("a1gu")),s=a(r("Nsbk")),u=a(r("PJYZ")),d=a(r("7W2i")),f=a(r("lSNA")),i=a(r("17x9")),p=n(r("q1tI")),h=a(r("ibhU")),m=a(r("UbMB")).default.bind(h.default),v=function(e){function i(){var e,t;(0,o.default)(this,i)
for(var r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a]
return t=(0,c.default)(this,(e=(0,s.default)(i)).call.apply(e,[this].concat(n))),(0,f.default)((0,u.default)(t),"handleBack",function(){return t.props.dispatch({type:"entry:runner:back-to-prev-page"})}),t}return(0,d.default)(i,e),(0,l.default)(i,[{key:"render",value:function(){var e=this.props.runnerState,o=e.activeCid,t=e.transition,r=e.history,n=e.screenInfoMap
if(!o)return null
var a=Screen.find(o)
return p.default.createElement("div",{className:m("runner-state-panel")},p.default.createElement("div",{className:"debug-title"},p.default.createElement("button",{onClick:this.handleBack},"上一页"),p.default.createElement("span",null,"当前页面: ".concat(a.name))),p.default.createElement("div",{className:"debug-info"},p.default.createElement("div",null,"访问历史:"),r.map(function(e){return p.default.createElement("span",{key:e},Screen.find(e).name)})),p.default.createElement("div",{className:"debug-info"},
p.default.createElement("div",null,"页面切换动画:"),p.default.createElement("span",null,"name: ".concat(t.name)),p.default.createElement("span",null,"duration: ".concat(t.duration)),p.default.createElement("span",null,"delay: ".concat(t.delay))),p.default.createElement("ul",null,Object.values(n).map(function(e){var t=e.cid,r=e.stateCid,n=e.transition,a=e.panelInfoMap,i=e.chameleonInfoMap
return p.default.createElement("li",{key:t,className:m({highlight:t===o})},p.default.createElement("span",null,Screen.find(t).name),p.default.createElement("span",null,"当前状态: ".concat(r)),p.default.createElement("span",null,"动画: ".concat(JSON.stringify(n))),p.default.createElement(g,{panelInfoMap:a}),p.default.createElement(y,{chameleonInfoMap:i}))})))}}]),i}(p.PureComponent)
t.default=v,(0,f.default)(v,"propTypes",{runnerState:i.default.object,dispatch:i.default.func})
var g=function(e){var t=e.panelInfoMap
return 0<Object.keys(t).length&&p.default.createElement("div",{style:{paddingLeft:10}},p.default.createElement("span",{style:{color:"green",marginTop:10}},"页面母版:"),p.default.createElement("ul",null,Object.values(t).map(function(e){var t=e.cid,r=e.activeScreenCid,n=e.transition,a=e.panelScreens
return console.log({cid:t}),p.default.createElement("li",{key:t},p.default.createElement("span",null,Panel.find(t).display_name),p.default.createElement("span",null,"当前母版页面: ".concat(r)),p.default.createElement("span",null,"动画: ".concat(JSON.stringify(n))),p.default.createElement("span",null,"已加载页面"),p.default.createElement("ul",null,a.map(function(e){return p.default.createElement("li",{key:e,className:m({active:e===r})},e)})))})))},y=function(e){var t=e.chameleonInfoMap
return 0<Object.keys(t).length&&p.default.createElement("div",{style:{paddingLeft:10}},p.default.createElement("span",{style:{color:"blue",marginTop:10}},"状态母版:"),p.default.createElement("ul",null,Object.values(t).map(function(e){var t=e.cid,r=e.stateCid,n=e.transition
return console.log({cid:t}),p.default.createElement("li",{key:t},p.default.createElement("span",null,Panel.find(t).display_name),p.default.createElement("span",null,"当前母版状态: ".concat(r)),p.default.createElement("span",null,"动画: ".concat(JSON.stringify(n))))})))}},NkXT:function(e,t,r){"use strict"
var n=r("284h"),a=r("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var s=a(r("pVnL")),i=a(r("lwsE")),o=a(r("W8MJ")),l=a(r("a1gu")),u=a(r("Nsbk")),d=a(r("PJYZ")),c=a(r("7W2i")),f=a(r("lSNA")),p=a(r("o0o1")),h=a(r("yXPU")),m=r("17x9"),v=n(r("q1tI")),g=r("i6OX"),y=r("t3Un"),b=r("rbsZ"),S=a(r("PeD6")),w=a(r("KUpD")),E=a(r("UbMB")).default.bind(w.default),C=function(){var t=(0,h.default)(p.default.mark(function e(t){var r,n,a
return p.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return MB.event("preview","移动端: 点击下载 APK"),e.next=3,(0,y.requestJSON)("/app/".concat(t,"/build/apk.json"),null,{method:"PUT"})
case 3:return e.next=6,k(5e3)
case 6:return e.next=8,(0,y.requestJSON)("/app/".concat(t,"/status/apk.json"))
case 8:if(r=e.sent,n=r.progress,a=r.link,100!==n)return e.abrupt("continue",3)
e.next=13
break
case 13:return window.location=a,e.abrupt("return")
case 17:case"end":return e.stop()}},e)}))
return function(e){return t.apply(this,arguments)}}(),k=function(t){return new Promise(function(e){return setTimeout(e,t)})},_=function(e){function t(){var c
return(0,i.default)(this,t),c=(0,l.default)(this,(0,u.default)(t).call(this)),(0,f.default)((0,d.default)(c),"handleView",function(e){e.preventDefault(),c.props.loadProject()}),(0,f.default)((0,d.default)(c),"handleInstall",function(e){e.preventDefault()
var t=c.props,r=t.projectAccessToken,n=t.isProjectExportable
MB.isWechat()?c.setState({isCoverShow:!0}):MB.isiPad()||MB.isIOS()?c.setState({isCoverShow:!0}):n?(c.setState({isCoverShow:!0}),C(r).then(function(){return c.setState({isCoverShow:!1})},function(e){})):(0,b.openRenewModal)("apk_exportable_on_mobile",{action:null})}),(0,f.default)((0,d.default)(c),"handleOpenCover",function(){c.setState({isCoverShow:!0})}),(0,f.default)((0,d.default)(c),"handleCloseCover",function(){c.setState({isCoverShow:!1})}),(0,f.default)((0,d.default)(c),"handleClickViewInClient",
function(e,t){MB.event("preview","移动端: 点击下载".concat(t,"客户端")),setTimeout(function(){window.location=e},200)}),(0,f.default)((0,d.default)(c),"handleHideNotice",function(){c.setState({isNoticeShow:!0})}),(0,f.default)((0,d.default)(c),"renderViewInClient",function(){var e={}
if(MB.isWechat())e={onClick:c.handleOpenCover}
else{var t=window.location,r=t.hostname,n=t.pathname,a=c.props,i=a.projectEncryptedPassword,o=a.urlClientIOS,l=a.urlClientAndroid
MB.isIOS()&&(e={href:"modao://".concat(r).concat(n,"?password=").concat(i),onClick:function(){c.handleClickViewInClient(o,"iOS")}}),MB.isAndroid()&&(e={href:"intent://".concat(r).concat(n,"?password=").concat(i,"#Intent;package=com.mockingbot;scheme=mockingbot;S.browser_fallback_url=").concat(encodeURIComponent(l),";end"),onClick:function(){c.handleClickViewInClient(l,"Android")}})}return v.default.createElement("a",(0,s.default)({className:"install-btn primary"},e),I18N.open_in_client)}),c.state={
isCoverShow:!1,isNoticeShow:!1},c}return(0,c.default)(t,e),(0,o.default)(t,[{key:"componentDidMount",value:function(){window.$("#splash").hide(),window.$("#workspace").show(),window.$.timeago.settings.lang=window.MBLocale,window.$(".timeago").timeago()}},{key:"render",value:function(){var e=this.props,t=e.projectName,r=e.projectIconUrl,n=e.projectUpdatedAt,a=this.state,i=a.isCoverShow,o=a.isNoticeShow
return v.default.createElement("div",{className:E("install-page-wrapper")},v.default.createElement("div",{className:E("install-page",{"is-wechat":MB.isWechat()})},v.default.createElement("div",{className:E("app-notice",{"hide-notice":o})},v.default.createElement(g.SVGIcon,{className:"app-warning",name:"design/warning"}),v.default.createElement("p",{className:"notice-content"},"iOS/安卓移动客户端已更新，请及时更新版本以查看企业项目。"),v.default.createElement("a",{className:"app-times",onClick:this.handleHideNotice},
v.default.createElement(g.SVGIcon,{name:"times"}))),v.default.createElement("div",{className:"app-inner"},v.default.createElement("img",{className:"app-icon",src:r}),v.default.createElement("h1",{className:"app-name"},t),v.default.createElement("div",{className:"app-update-time"},v.default.createElement("time",{className:"timeago",dateTime:n}),I18N.update),v.default.createElement("div",{className:"install-btns"},this.renderViewInClient(),v.default.createElement("a",{className:"install-btn",
onClick:this.handleView},I18N.view_app)),v.default.createElement("a",{className:"download-btn",onClick:this.handleInstall},v.default.createElement("span",null,MB.isAndroid()?I18N.download_android_apk:I18N.add_to_home_screen),v.default.createElement("i",{className:"fa fa-angle-right"}))),v.default.createElement(S.default,{show:i,onClose:this.handleCloseCover})))}}]),t}(v.PureComponent)
t.default=_,(0,f.default)(_,"propTypes",{projectAccessToken:m.PropTypes.string,projectEncryptedPassword:m.PropTypes.string,projectName:m.PropTypes.string,projectIconUrl:m.PropTypes.string,projectUpdatedAt:m.PropTypes.string,isProjectExportable:m.PropTypes.bool,urlClientIOS:m.PropTypes.string,urlClientAndroid:m.PropTypes.string,loadProject:m.PropTypes.func})},Nu6V:function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.fetchSliceZip=t.default=void 0
var n=r("t3Un"),a="/api/web/v3/project_data"
t.default=function(e){return(0,n.requestJSON)("".concat(a,"/artboards/slices_json.json?artboard_id=").concat(e))}
t.fetchSliceZip=function(e){return(0,n.requestJSON)("".concat(a,"/artboards/slices_zip.json?artboard_id=").concat(e))}},NyBV:function(e,t,r){"use strict"
var n=r("284h"),a=r("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return MB.localStorageDelegate.getItem(m)?null:p.default.createElement(i,e)}
var o=a(r("lwsE")),l=a(r("W8MJ")),c=a(r("a1gu")),s=a(r("Nsbk")),u=a(r("PJYZ")),d=a(r("7W2i")),f=a(r("lSNA")),p=n(r("q1tI")),h=r("6XO9")
r("bTYh")
var i=function(e){function i(){var e,t;(0,o.default)(this,i)
for(var r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a]
return t=(0,c.default)(this,(e=(0,s.default)(i)).call.apply(e,[this].concat(n))),(0,f.default)((0,u.default)(t),"state",{isOpen:!0}),t}return(0,d.default)(i,e),(0,l.default)(i,[{key:"componentDidMount",value:function(){var e=this
setTimeout(function(){e.setState({isOpen:!1}),MB.localStorageDelegate.setItem(m,!0)},4e3)}},{key:"render",value:function(){var e=this.state.isOpen
return p.default.createElement(h.Guide,{className:"commercial-font-tip",isOpen:e,noCloseBtn:!0,guide:I18N.commercial_font_tip_preview,X:"center",Y:"top"})}}]),i}(p.Component)
var m="commercialFontTipShownInPreview"},OVdA:function(e,t,r){e.exports={"text-wrapper":"uauh7BEsBr6RNi8rM4QkK","text-no-editing":"_3T6BxPiFZaywEaKQKLyVc9"}},P3rE:function(e,t,r){},PeD6:function(e,t,r){"use strict"
var n=r("284h"),a=r("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var o=a(r("lwsE")),l=a(r("W8MJ")),c=a(r("a1gu")),s=a(r("Nsbk")),u=a(r("PJYZ")),d=a(r("7W2i")),f=a(r("lSNA")),i=r("17x9"),p=n(r("q1tI")),h=a(r("ldhK")),m="/images/sharing/wechat_".concat(window.MBLocale,".png"),v="/images/sharing/ios_".concat(window.MBLocale,".png"),g=function(e){function i(){var e,t;(0,o.default)(this,i)
for(var r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a]
return t=(0,c.default)(this,(e=(0,s.default)(i)).call.apply(e,[this].concat(n))),(0,f.default)((0,u.default)(t),"handleClick",function(){t.props.onClose()}),t}return(0,d.default)(i,e),(0,l.default)(i,[{key:"render",value:function(){var e=this.props.show,t=MB.isWechat(),r=!t&&MB.isIOS(),n=MB.isiPad(),a=!(t||r),i={display:e?"":"none"}
return p.default.createElement("div",{className:h.default.covers,style:i,onClick:this.handleClick},t&&p.default.createElement("div",{className:"cover wechat"},p.default.createElement("img",{className:"robot",src:"/images/sharing/robot.png"}),p.default.createElement("img",{className:"tips",src:m}),"s",p.default.createElement("div",{className:"arrow"})),r&&!n&&p.default.createElement("div",{className:"cover ios"},p.default.createElement("img",{className:"robot",src:"/images/sharing/robot.png"}),
p.default.createElement("img",{className:"tips",src:v}),p.default.createElement("div",{className:"arrow"})),n&&p.default.createElement("div",{className:"cover ipad"},p.default.createElement("img",{className:"robot",src:"/images/sharing/robot.png"}),p.default.createElement("img",{className:"tips",src:v}),p.default.createElement("div",{className:"arrow"})),a&&p.default.createElement("div",{className:"cover building"},p.default.createElement("div",{className:"tip-wrapper"},p.default.createElement("p",{
className:"tip"},I18N.building_apk),p.default.createElement("div",{className:"spinner"}))))}}]),i}(p.PureComponent);(t.default=g).propTypes={show:i.PropTypes.bool,onClose:i.PropTypes.func}},PqLM:function(e,t,r){"use strict"
var n=r("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.lineIsParallelWithAxis=t.getLineAttrsAfterRotate=t.getLineAttrsAsWidget=t.getLineAttrsAfterUngroup=t.getVectorInOtherSystem=t.degreeToRadians=t.getLength=t.getAngle=t.getLineAngle=t.getLineGeneralInfo=void 0
function _(e,t){e.top,e.left
var r=e.width,n=e.height,a=e.bs,i=e.points,o=1<arguments.length&&void 0!==t&&t,l=Math.sqrt(r*r+n*n),c=a,s=JSON.parse(i).map(function(e){return e.point}),u=d(r,n,s)
return{length:o?Math.round(l):l,angle:o?Math.round(u)%360:u,thickness:c}}var M=n(r("J4zp"))
t.getLineGeneralInfo=_
var d=function(e,t,r){var n=(0,M.default)(r,2),a=n[0],i=n[1],o=(i[0]-a[0])*e,l=(i[1]-a[1])*t
return c(o,l)}
t.getLineAngle=d
var c=function(e,t){var r=a(e,t)
return 0===r?0:0<=e?(360+i(Math.asin(t/r)))%360:180-i(Math.asin(t/r))}
t.getAngle=c
var a=function(e,t){return Math.sqrt(e*e+t*t)}
t.getLength=a
function x(e){return e/180*Math.PI}var i=function(e){return 180*e/Math.PI}
t.degreeToRadians=x
function O(e,t){var r=(0,M.default)(e,2),n=r[0],a=r[1],i=x(t)
return[Math.cos(i)*n+Math.sin(i)*a,-Math.sin(i)*n+Math.cos(i)*a]}t.getVectorInOtherSystem=O
t.getLineAttrsAfterUngroup=function(e,t,r,n){var a=(0,M.default)(e,2),i=a[0],o=a[1],l=(0,M.default)(t,2),c=l[0],s=l[1],u=n.top,d=n.left,f=n.width,p=n.height,h=n.points,m=JSON.parse(h).map(function(e){return e.point}),v=(0,M.default)(m,2),g=(0,M.default)(v[0],2),y=g[0],b=g[1],S=(0,M.default)(v[1],2),w=S[0],E=S[1],C=[d-c,u-s],k=[C[0]+w*f,C[1]+E*p],_=O([C[0]+y*f,C[1]+b*p],-r),x=O(k,-r),T=[i+_[0],o+_[1]],P=[i+x[0],o+x[1]]
return j(T,P)}
var j=function(e,t){var r=(0,M.default)(e,2),n=r[0],a=r[1],i=(0,M.default)(t,2),o=i[0],l=i[1],c=Math.min(a,l),s=Math.min(n,o),u=Math.abs(o-n),d=Math.abs(l-a),f=[[0===u?.5:(n-s)/u,0===d?.5:(a-c)/d],[0===u?.5:(o-s)/u,0===d?.5:(l-c)/d]].map(function(e){return{point:e}})
return{top:Math.round(c),left:Math.round(s),width:Math.max(Math.round(u),1),height:Math.max(Math.round(d),1),points:JSON.stringify(f)}}
t.getLineAttrsAsWidget=j
t.getLineAttrsAfterRotate=function(e,t,r){var n=2<arguments.length&&void 0!==r?r:0,a=x(t),i=e.top,o=e.left,l=e.width,c=e.height,s=e.points,u=JSON.parse(s).map(function(e){return e.point}),d=(0,M.default)(u,2),f=(0,M.default)(d[0],2),p=f[0],h=f[1],m=(0,M.default)(d[1],2),v=m[0],g=m[1],y=_(e).length,b=[o+l*p,i+c*h],S=[o+l*v,i+c*g],w=[b[0]+(S[0]-b[0])*n,b[1]+(S[1]-b[1])*n],E=[b[0]+y*Math.cos(a),b[1]+y*Math.sin(a)],C=[b[0]+(E[0]-b[0])*n,b[1]+(E[1]-b[1])*n],k=[w[0]-C[0],w[1]-C[1]]
return j([b[0]+k[0],b[1]+k[1]],[E[0]+k[0],E[1]+k[1]])}
t.lineIsParallelWithAxis=function(e){var t=(0,M.default)(e,2),r=(0,M.default)(t[0],2),n=r[0],a=r[1],i=(0,M.default)(t[1],2),o=i[0],l=i[1]
return.5===n&&.5===o||.5===a&&.5===l}},QIyF:function(e,t,r){var n=r("Kz5y")
e.exports=function(){return n.Date.now()}},QdB0:function(e,t,r){"use strict"
var n=r("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=o.find(function(e){return(0,e.checker)()})
return e?e.info:null}
var a=n(r("ThAd")),i={info:{name:"lisankebook",desc:"李三科送给你的专属福利，现在注册墨刀即可享受一个月个人版会员",successTip:"注册成功，恭喜你获得墨刀一个月个人版会员"},checker:function(){return(0,a.default)().utm_source===i.info.name}},o=[i]},QlAn:function(e,t,r){"use strict"
var n=r("284h"),a=r("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.GlobalAttributes=void 0
function o(){return h.default.createElement("div",null,"Error in GlobalAttributes")}var l=a(r("lwsE")),c=a(r("W8MJ")),s=a(r("a1gu")),u=a(r("Nsbk")),d=a(r("PJYZ")),f=a(r("7W2i")),p=a(r("lSNA")),h=n(r("q1tI")),i=r("/MKj"),m=a(r("17x9")),v=r("6XO9"),g=r("wYtL"),y=a(r("i6OX")),b=r("RUem"),S=r("XrEr"),w=r("/5+U"),E=a(r("mfFm")),C=a(r("UbMB")).default.bind(E.default),k=function(e){function i(){var e,r;(0,l.default)(this,i)
for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a]
return r=(0,s.default)(this,(e=(0,u.default)(i)).call.apply(e,[this].concat(n))),(0,p.default)((0,d.default)(r),"handleDelColor",function(e){var t=(0,w.delRecentColor)((0,S.getColorFromUnit)(e,"rgba"))
r.props.dispatch({type:"reducer:preview-toolbar:update",payload:{userPickColor:t}}),MB.event("preview","删除了自选颜色")}),(0,p.default)((0,d.default)(r),"handleClick",function(e){var t=e.target.dataset.trackId
t&&MB.event("preview","标注模式: 复制".concat(t))}),r}return(0,f.default)(i,e),(0,c.default)(i,[{key:"componentDidCatch",value:function(e,t){return console.log(e,t),h.default.createElement(o,null)}},{key:"render",value:function(){var e=this.props,t=e.adapterWidth,r=e.adapterHeight,n=e.screenColor,a=void 0===n?[]:n,i=e.documentColor,o=void 0===i?[]:i,l=e.globalText,c=void 0===l?[]:l,s=e.globalColor,u=void 0===s?[]:s,d=e.userPickColor,f=void 0===d?[]:d,p=e.colorUnit
o.concat(u)
return h.default.createElement("div",{className:C("global-attributes"),onClick:this.handleClick},h.default.createElement("div",{className:C("container","global-layer","layer-size")},h.default.createElement(b.Base,{trackId:"宽高",title:I18N.preview_panel.size,dataValue:[I18N.preview_panel.width,I18N.preview_panel.height],data:[t,r]})),h.default.createElement(b.WrapComponent,null,I18N.preview_panel.color_title,h.default.createElement(T,{trackId:"自选颜色",title:I18N.preview_panel.pick_color,
handleDelColor:this.handleDelColor,colorBlockMap:f,colorUnit:p,canDel:!0}),h.default.createElement(x,{trackId:"页面颜色",title:I18N.preview_panel.screen_color,handleDelColor:this.handleDelColor,colorBlockMap:a,colorUnit:p})),0<c.length&&h.default.createElement(b.WrapComponent,null,I18N.preview_panel.font_title,h.default.createElement(_,{globalText:c})))}}]),i}(h.PureComponent);(t.GlobalAttributes=k).propTypes={adapterWidth:m.default.string.isRequired,adapterHeight:m.default.string.isRequired,
colorUnit:m.default.string.isRequired,screenColor:m.default.array,userPickColor:m.default.array,documentColor:m.default.array,globalText:m.default.array,globalColor:m.default.array,dispatch:m.default.func}
var _=function(e){return e.globalText.map(function(e){return h.default.createElement(b.Base,{key:e,className:"global-font",data:[e]})})}
_.propTypes={globalText:m.default.array}
var x=function(e){var a=e.trackId,t=e.title,r=e.colorBlockMap,i=e.fromSketch,o=e.handleDelColor,l=e.canDel,c=e.colorUnit,s=e.focusColor
return h.default.createElement("div",null,h.default.createElement("span",{className:"second-title"},t),h.default.createElement("div",{className:"panel-row"},r.length?r.map(function(e,t){var r=P(i,e,"rgba"),n=(0,S.getColorFromUnit)(r,c)
return h.default.createElement(M,{key:"".concat(t).concat(e),canDel:l,trackId:a,handleDelColor:o,color:n,rgbaColor:r,colorUnit:c,focusColor:s})}):h.default.createElement(O,null)))}
x.propTypes={trackId:m.default.string,title:m.default.string.isRequired,colorBlockMap:m.default.array.isRequired,handleDelColor:m.default.func.isRequired,fromSketch:m.default.bool,canDel:m.default.bool,colorUnit:m.default.string,focusColor:m.default.string}
var T=(0,i.connect)(function(e){var t=e.container.previewSetting
return{userPickColor:t.userPickColor,focusColor:t.focusColor}})(x),P=function(e,t,r){return(0,S.getColorFromUnit)(e?(0,S.parseSketchColor2rgba)(t):t,r)},M=function(e){var t=e.color,r=e.rgbaColor,n=e.colorUnit,a=e.handleDelColor,i=e.canDel,o=e.trackId,l=e.focusColor,c=t===(0,S.getColorFromUnit)(l,n)
return h.default.createElement(v.Dropdown,{shouldOpenOnHover:!0,className:C("color-dropdown",{"is-focus":c}),opener:h.default.createElement(g.Tooltip,{arrowed:!1,"data-type":"copy","data-track-id":o,"data-clipboard-text":t,className:"row-item color-block",style:{background:r},duration:1e3,content:{click:I18N.preview_panel.copied}}),inflexible:!0,arrowed:!0,menuX:"left",menuY:"top",menu:h.default.createElement(j,{color:t,rgbaColor:r,canDel:i,handleDelColor:a}),menuClassName:(0,v.trimList)([
"palette-dropdown-menu",n])})}
M.propTypes={color:m.default.string.isRequired,trackId:m.default.string,handleDelColor:m.default.func,colorUnit:m.default.string,rgbaColor:m.default.string,canDel:m.default.bool,focusColor:m.default.string}
var O=function(){return h.default.createElement("div",{className:"forbid-color"},h.default.createElement("div",{className:"transparent"}))},j=function(e){function i(){var e,n;(0,l.default)(this,i)
for(var t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a]
return n=(0,s.default)(this,(e=(0,u.default)(i)).call.apply(e,[this].concat(r))),(0,p.default)((0,d.default)(n),"handleClick",function(e){var t=n.props,r=t.rgbaColor;(0,t.handleDelColor)(r)}),n}return(0,f.default)(i,e),(0,c.default)(i,[{key:"render",value:function(){var e=this.props,t=e.color,r=e.canDel
return h.default.createElement("div",null,h.default.createElement("span",null,t),r&&h.default.createElement(y.default,{type:"dora",name:"trash",className:"trash",onClick:this.handleClick}))}}]),i}(h.PureComponent)
j.propTypes={color:m.default.string.isRequired,rgbaColor:m.default.string,handleDelColor:m.default.func.isRequired,canDel:m.default.bool}},RUem:function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Base",{enumerable:!0,get:function(){return n.Base}}),Object.defineProperty(t,"ColorInfo",{enumerable:!0,get:function(){return a.ColorInfo}}),Object.defineProperty(t,"TextLayerInfo",{enumerable:!0,get:function(){return i.TextLayerInfo}}),Object.defineProperty(t,"BasicAttributes",{enumerable:!0,get:function(){return o.BasicAttributes}}),Object.defineProperty(t,"GlobalAttributes",{enumerable:!0,get:function(){return l.GlobalAttributes}})
,Object.defineProperty(t,"CodeBox",{enumerable:!0,get:function(){return c.CodeBox}}),Object.defineProperty(t,"ImageInfo",{enumerable:!0,get:function(){return s.ImageInfo}}),Object.defineProperty(t,"CopyBtn",{enumerable:!0,get:function(){return u.CopyBtn}}),Object.defineProperty(t,"Shadows",{enumerable:!0,get:function(){return d.Shadows}}),Object.defineProperty(t,"Fills",{enumerable:!0,get:function(){return d.Fills}}),Object.defineProperty(t,"LayerName",{enumerable:!0,get:function(){return d.LayerName}}),
Object.defineProperty(t,"BorderInfo",{enumerable:!0,get:function(){return d.BorderInfo}}),Object.defineProperty(t,"Loading",{enumerable:!0,get:function(){return d.Loading}}),Object.defineProperty(t,"WrapComponent",{enumerable:!0,get:function(){return d.WrapComponent}})
var n=r("Iusu"),a=r("Ij3M"),i=r("wQP3"),o=r("LVRM"),l=r("QlAn"),c=r("bekf"),s=r("1Uxz"),u=r("h9XN"),d=r("WyLE")},Ro3d:function(e,t,r){"use strict"
var n=r("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.transfromProptype=void 0
var A=n(r("lSNA")),i=r("XrEr"),B=r("qOCw")
t.transfromProptype=function(e){var t=e.attr,r=e.language,n=e.unit,a=(0,B.selectWithlanguageUnit)(r),i=t.width,o=t.height,l=t.lineHeight,c=t.opacity,s=t.borderRadius,u=t.borderWidth,d=t.borderColor,f=t.backgroundColor,p=t.color,h=t.fontSize,m=t.fontFamily,v=t.fontStyle,g=t.boxShadow,y=t.textAlign,b=t.x,S=t.y,w=b&&(0,A.default)({},q[a].x,F(b,n,a)),E=S&&(0,A.default)({},q[a].y,F(S,n,a)),C=i&&(0,A.default)({},q[a].width,F(i,n,a)),k=o&&(0,A.default)({},q[a].height,F(o,n,a)),_=l&&(0,A.default)({},q[a].lineHeight
,F(l,n,a)),x=c&&(0,A.default)({},q[a].opacity,F(c,n,a)),T=s&&(0,A.default)({},q[a].borderRadius,F(s,n,a)),P=f&&(0,A.default)({},q[a].backgroundColor,F(f,n,a,!0)),M=p&&(0,A.default)({},q[a].color,F(p,n,a,!0)),O=h&&(0,A.default)({},q[a].fontSize,F(h,n,a)),j=m&&(0,A.default)({},q[a].fontFamily,F(m,n,a)),I=v&&(0,A.default)({},q[a].fontStyle,F(v,n,a)),N=g&&(0,A.default)({},q[a].shadows,g),R=u&&(0,A.default)({},q[a].borderWidth,F(u,n,a)),D=d&&(0,A.default)({},q[a].borderColor,F(d,n,a,!0)),L=y&&(0,A.default)({},
q[a].textAlign,y)
return Object.assign({},w,E,C,k,_,x,T,R,D,P,M,O,I,L,N,j)}
var F=function(e,t,r,n){var a=3<arguments.length&&void 0!==n&&n
return e=e.toString(),"pt"!==r?e.replace(t,r):a?(0,i.getUIColor)(e):e.replace(t,"")},q={px:{x:"left",y:"top",width:"width",height:"height",lineHeight:"line-height",opacity:"opacity",border:"border",borderRadius:"border-radius",borderColor:"border-color",borderWidth:"border-width",backgroundColor:"background-color",color:"color",fontSize:"font-size",fontFamily:"font-family",fontStyle:"font-style",textAlign:"text-align",shadows:"box-shadow",innerShadows:"inner-shadow"},dp:{x:"left",y:"top",
width:"layout_width",height:"layout_height",border:"border",opacity:"opacity",color:"textColor",fontSize:"textSize",fontFamily:"font-family",fontStyle:"font-style",textAlign:"gravity",backgroundColor:"background",borderRadius:"radius",borderColor:"border-color",lineHeight:"line-height",borderWidth:"border-width",shadows:"box-shadow",innerShadows:"inner-shadow"},pt:{x:"x",y:"y",width:"width",height:"height",opacity:"opacity",border:"border",backgroundColor:"backgroundColor",color:"text-color",
textAlign:"alignment",fontSize:"fontSize",fontFamily:"fontFamily",fontStyle:"font-style",borderRadius:"cornerRadius",borderColor:"borderColor",borderWidth:"border-width",lineHeight:"lineSpacing"}}},RtVw:function(e,t,r){e.exports={fullscreen:"_3YRMjyxR7LqBuoCfeQbKFK"}},S7Zs:function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.fetchArtboardsByProjectCid=void 0
var n=r("t3Un")
t.fetchArtboardsByProjectCid=function(e){return window.MBArtboards?{artboards:Object.values(window.MBArtboards).map(function(e){return e.artboard})}:(0,n.requestJSON)("".concat("/api/web/v3/project_data","/artboards.json?project_cid=").concat(e))}},S9rr:function(e,t,r){"use strict"
var n=r("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.StyledScrollBar=void 0
var a=n(r("vOnD")).default.div.withConfig({displayName:"styles__StyledScrollBar",componentId:"sc-1i763xb-0"})(["position:absolute;top:",";left:",";right:0;bottom:0;z-index:4;pointer-events:none;.track{position:absolute;background:",
";pointer-events:auto;.handler{position:absolute;cursor:pointer;.thumb{position:absolute;pointer-events:none;border-radius:4px;transition:background 0.2s ease-in-out;}}}.x-track{left:0;right:11px;bottom:0;height:12px;.handler{bottom:2px;height:10px;.thumb{bottom:0;width:100%;height:6px;background:",";}}}.y-track{top:0;bottom:11px;right:0;width:12px;.handler{right:2px;width:10px;.thumb{right:0;height:100%;width:6px;background:",";}}}.x-track .handler:hover .thumb{background:",
";}.y-track .handler:hover .thumb{background:",";}"],"17px","17px",function(e){return e.theme.scrollbar.track.bg},function(e){return e.theme.scrollbar.thumb.x_bg},function(e){return e.theme.scrollbar.thumb.y_bg},function(e){return e.theme.scrollbar.thumb.x_hover_bg},function(e){return e.theme.scrollbar.thumb.y_hover_bg})
t.StyledScrollBar=a},SFPg:function(e,t,r){"use strict"
var n=r("284h"),a=r("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var C=a(r("pVnL")),k=a(r("J4zp")),i=a(r("lwsE")),o=a(r("W8MJ")),l=a(r("a1gu")),c=a(r("Nsbk")),s=a(r("7W2i")),u=a(r("lSNA")),d=a(r("17x9")),_=n(r("q1tI")),x=a(r("vmbo")),T=r("/5+U"),f=function(e){function E(){return(0,i.default)(this,E),(0,l.default)(this,(0,c.default)(E).apply(this,arguments))}return(0,s.default)(E,e),(0,o.default)(E,[{key:"render",value:function(){var e=this.props,t=e.layer,r=e.parentRect,n=e.treeProps,a=t.width,i=t.height,o=t.top,l=t.left,c=t.z,s=t.childrenLayers
if(!1===t.v)return null
var u="layer"===t.kind?0:t.rotation||0,d=(0,T.getMinBoundingRect)({width:a,height:i,rotate:u,top:o,left:l}),f=(0,k.default)(d,4),p=f[0],h=f[1],m=f[2],v=f[3],g={top:o,left:l,width:a,height:i},y=h,b=m,S=v,w={top:(p-r.top)/r.height*100+"%",left:(y-r.left)/r.width*100+"%",width:b/r.width*100+"%",height:S/r.height*100+"%",zIndex:c||0}
return _.default.createElement("div",{"data-id":t.id,className:"layer-tree-node",style:w},_.default.createElement(x.default,(0,C.default)({layer:t},n)),s&&0<s.length&&s.map(function(e){return _.default.createElement(E,{key:e.id,layer:e,parentRect:g,treeProps:n})}))}}]),E}(_.Component)
t.default=f,(0,u.default)(f,"propTypes",{layer:d.default.object,parentRect:d.default.object,treeProps:d.default.object})},SVae:function(e,t,r){"use strict"
var n=r("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.requestSnapshotZipLocalhost=t.requestSnapshotLocalhost=t.requestThumbnailLocalhost=void 0
var d=n(r("QILm")),f=n(r("o0o1")),p=n(r("yXPU")),h=r("wrnf"),c=r("ZMzb"),m=window.URLSearchParams,v=function(){var t=(0,p.default)(f.default.mark(function e(t){var r,n,a,i,o,l=arguments
return f.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:2<l.length&&void 0!==l[2]?l[2]:5e3,n=3<l.length&&void 0!==l[3]?l[3]:1/0,a=r=1<l.length&&void 0!==l[1]?l[1]:250,i=0
case 5:if(i<n)return e.next=8,(0,c.setTimeoutAsync)(a)
e.next=17
break
case 8:return e.next=10,t()
case 10:if(o=e.sent)return e.abrupt("return",o)
e.next=13
break
case 13:i+=a,a+=r,e.next=5
break
case 17:throw new Error("reach retry limit: ".concat(n))
case 18:case"end":return e.stop()}},e)}))
return function(e){return t.apply(this,arguments)}}()
t.requestThumbnailLocalhost=function(e){var r=e.imageElement,n=e.projectAccessToken,a=e.screenCid,t=e.screenStateCid,i=void 0===t?"default":t,o=e.mode,l=void 0===o?"thumbnail":o
return new Promise(function(e,t){r.onerror=function(){r.src="/images/preview/image-load.png",t()},r.onload=function(){return e(r)},r.src="".concat("/snapshot.png","?").concat(new m({"access-token":n,"screen-cid":a,"screen-state-cid":i,mode:l}))})}
var a=function(){var t=(0,p.default)(f.default.mark(function e(t){var r,n,a,i,o,l,c,s,u
return f.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.projectAccessToken,n=t.screenCid,a=t.canvasZoom,i=void 0===a?1:a,o="/app/".concat(r,"/build/png.json?").concat(new m({cid:n,scale:100*i})),e.next=4,(0,h.fetchLikeRequest)(o,{method:"PUT"})
case 4:return e.next=6,e.sent.json()
case 6:if(l=e.sent,c=l.taskId,100!==(s=(0,d.default)(l,["taskId"])).progress)return u="/app/".concat(r,"/status/png.json?").concat(new m({task_id:c,cid:n,scale:100*i})),e.next=13,v((0,p.default)(f.default.mark(function e(){return f.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,h.fetchLikeRequest)(u)
case 2:return e.next=4,e.sent.json()
case 4:return s=e.sent,e.abrupt("return",100===s.progress&&s)
case 6:case"end":return e.stop()}},e)})),250,1e3,3e4)
e.next=14
break
case 13:s=e.sent
case 14:return e.abrupt("return",s)
case 15:case"end":return e.stop()}},e)}))
return function(e){return t.apply(this,arguments)}}()
t.requestSnapshotLocalhost=a
var i=function(){var t=(0,p.default)(f.default.mark(function e(t){var r,n,a,i,o,l,c,s,u
return f.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.projectAccessToken,n=t.canvasZoom,a=void 0===n?1:n,i=t.onProgress,o="/app/".concat(r,"/build/pngs.json?").concat(new m({scale:100*a})),e.next=4,(0,h.fetchLikeRequest)(o,{method:"PUT"})
case 4:return e.next=6,e.sent.json()
case 6:if(l=e.sent,c=l.taskId,100!==(s=(0,d.default)(l,["taskId"])).progress)return u="/app/".concat(r,"/status/pngs.json?").concat(new m({task_id:c,scale:100*a})),e.next=13,v((0,p.default)(f.default.mark(function e(){return f.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,h.fetchLikeRequest)(u)
case 2:return e.next=4,e.sent.json()
case 4:return s=e.sent,i&&i(s.progress),e.abrupt("return",100===s.progress&&s)
case 7:case"end":return e.stop()}},e)})),250,5e3,6e5)
e.next=14
break
case 13:s=e.sent
case 14:return e.abrupt("return",s)
case 15:case"end":return e.stop()}},e)}))
return function(e){return t.apply(this,arguments)}}()
t.requestSnapshotZipLocalhost=i},Sxd8:function(e,t){e.exports=function(e){return e}},TZdj:function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
function n(i,o){return s(function(e,t,r){var n=t.dispatch,a=r&&r.payload
n({type:"reducer:comments:update",payload:i(e,a,o)})})}var a=r("WVP6"),i=r("Ehhz").MODEL_OPERATION_MAP.Comment,o=(0,a.createStateStore)([]),l=o.getState,c=o.setState,s=o.wrapEntry,u={entryMap:{"comments:refresh":n(i.refreshStateList,!1),"comments:add":n(i.addState,!1),"comments:add-local":n(i.addState,!0),"comments:update":n(i.updateState,!1),"comments:update-local":n(i.updateState,!0),"comments:delete":n(i.deleteState,!1),"comments:delete-local":n(i.deleteState,!0)},getState:l,setState:c}
t.default=u},ThAd:function(e,t,r){"use strict"
var n=r("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=location.search
0===e.indexOf("?")&&(e=e.substr(1))
var i={}
return e.split("&").forEach(function(e){var t=e.split("="),r=(0,o.default)(t,2),n=r[0],a=r[1]
n&&(i[n]=!a||decodeURIComponent(a))}),i}
var o=n(r("J4zp"))},TjoA:function(e,t,r){e.exports={"distance-measurement-container":"_2TbNwe0FAvWhPAGx9pJhSc"}},U9kS:function(e,t,r){"use strict"
var n=r("284h"),a=r("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"CommentHeaderGlobalStyle",{enumerable:!0,get:function(){return g.CommentHeaderGlobalStyle}}),t.CommentThread=void 0
var i=a(r("lwsE")),o=a(r("W8MJ")),l=a(r("a1gu")),c=a(r("Nsbk")),s=a(r("7W2i")),u=a(r("lSNA")),v=n(r("q1tI")),d=a(r("17x9")),f=a(r("vOnD")),p=a(r("zkrS")),h=r("l0oT"),m=r("FC/4"),g=r("6iHT"),y=p.default.MB,b=p.default.I18N,S=function(e){function r(e){var t
return(0,i.default)(this,r),(t=(0,l.default)(this,(0,c.default)(r).call(this,e))).focusThread=function(){return!t.props.isScrollFocus&&t.props.commentOperations.setHoverFocusCommentThreadCid(t.props.commentThreadCid)},t.blurThread=function(){return t.props.isBlur&&t.props.commentOperations.setHoverFocusCommentThreadCid(null)},t.setRef=function(e){t.mainRef=e},t.mainRef=null,t.toggleUnfoldComment=function(){t.setState({isUnfold:!t.state.isUnfold}),y.event("preview","展开评论")},t.state={isUnfold:!1},t}return(0,
s.default)(r,e),(0,o.default)(r,[{key:"componentDidUpdate",value:function(e){if(this.props.commentList.length>e.commentList.length&&this.setState({isUnfold:!0}),this.props.isScrollFocus&&this.props.isScrollFocus!==e.isScrollFocus&&this.mainRef){var t=this.mainRef.parentElement,r=t.getBoundingClientRect().top,n=t.scrollTop+this.mainRef.getBoundingClientRect().top-r;(0,h.scrollTo)(t,n,20)}}},{key:"render",value:function(){var e=this.props,t=e.commentList,r=e.permission,n=e.commentMarkerIndex,
a=e.commentOperations,i=e.isBlur
if(!t.length)return null
var o=this.state.isUnfold,l=t[0],c=3<t.length,s=o||!c?t.slice(1):t.slice(1,3)
return v.default.createElement(w,{ref:this.setRef,className:i?"comment-blur":"",onMouseEnter:this.focusThread,onMouseLeave:this.blurThread},v.default.createElement(C,{markIndex:n,comment:l,permission:r,commentOperations:a}),s.map(function(e){return v.default.createElement(C,{sub:!0,key:e.cid,comment:e,permission:a.getPermission(e.user_id),commentOperations:a})}),c&&v.default.createElement("div",{className:"unfold",onClick:this.toggleUnfoldComment},o?b.preview.comment.fold:b.preview.comment.unfold))}}]),r}(
v.PureComponent)
t.CommentThread=S,(0,u.default)(S,"propTypes",{permission:d.default.object,isScrollFocus:d.default.bool,isBlur:d.default.bool,commentList:d.default.array,commentMarkerIndex:d.default.number,commentThreadCid:d.default.string,commentOperations:d.default.object})
var w=f.default.div.withConfig({displayName:"CommentLayerThread__CommentThreadDiv",componentId:"sc-18dqjl1-0"})(["width:220px;padding:20px 0;&.comment-blur{opacity:0.4;}& > .unfold{cursor:pointer;display:flex;justify-content:flex-end;}"]),E=f.default.div.withConfig({displayName:"CommentLayerThread__EntryMainBgDiv",componentId:"sc-18dqjl1-1"})(["width:100%;margin-bottom:10px;border-radius:4px;background:#f7f7fa;"]),C=function(e){function t(e){var r
return(0,i.default)(this,t),(r=(0,l.default)(this,(0,c.default)(t).call(this,e))).operationPack={getCommentValue:function(){return r.props.comment.message},doCreateComment:function(e){return e&&r.props.commentOperations.doCreateComment(e,r.props.comment.thread_cid)},doUpdateComment:function(e){return r.props.commentOperations.doUpdateComment({cid:r.props.comment.cid,message:e})},doDeleteCard:function(){return r.props.sub?r.props.commentOperations.doDeleteComment(r.props.comment
):r.props.commentOperations.doDeleteCommentThread(r.props.comment.thread_cid)}},r.startEdit=function(){r.setState({editStore:(0,m.createTextEditStore)({value:r.operationPack.getCommentValue(),isEditing:!0},{onEnd:function(e){var t=e.value
t=(t||"").trim(),r.operationPack.doUpdateComment(t),r.closeEdit()}})}),y.event("preview","二次编辑")},r.closeEdit=function(){return r.setState({editStore:null})},r.startReply=function(){return r.setState({replyStore:(0,m.createTextEditStore)({isEditing:!0},{onChange:function(e){var t=e.value
return r.setState({isValidReply:Boolean(t)})},onEnd:function(e){var t=e.value;(t=(t||"").trim())&&r.operationPack.doCreateComment(t),r.closeReply()}})})},r.closeReply=function(){return r.setState({replyStore:null,isValidReply:!1})},r.state={editStore:null,replyStore:null,isValidReply:!1},r}return(0,s.default)(t,e),(0,o.default)(t,[{key:"render",value:function(){var e=this.props,t=e.sub,r=e.markIndex,n=e.comment,a=e.permission,i=e.commentOperations,o=this.state,l=o.editStore,c=o.replyStore,s=o.isValidReply,
u=i.getUserProfile(n.user_id),d=u.avatar,f=u.name,p=v.default.createElement(g.ContentMessage,{sub:t,comment:n,textEditStore:l,cancelEdit:this.closeEdit}),h=!l&&(0,g.commonContentFooter)(n,c,s,a.create&&this.startReply,this.closeReply),m=t?l?"sub remove-background":"sub":""
return v.default.createElement(k,{className:m},v.default.createElement(g.ContentHeader,{sub:t,avatar:d,name:f,markIndex:r,startEdit:!l&&a.update?this.startEdit:null,doDelete:!l&&a.delete?this.operationPack.doDeleteCard:null}),!t&&v.default.createElement(E,null,p,h),t&&p,t&&h)}}]),t}(v.PureComponent);(0,u.default)(C,"propTypes",{sub:d.default.bool,markIndex:d.default.number,comment:d.default.object.isRequired,permission:d.default.object.isRequired,commentOperations:d.default.object.isRequired})
var k=f.default.div.withConfig({displayName:"CommentLayerThread__CommentCardDiv",componentId:"sc-18dqjl1-2"})(["display:flex;flex-flow:column;border-radius:4px;&.sub{margin:0 0 10px 20px;width:200px;background:#f7f7fa;}&.remove-background{background:#fff;}"])},UJpD:function(e,t,r){e.exports={detector:"p677pQqCIRS-SsEhJWgV4"}},ULaQ:function(e,t,r){"use strict"
var n=r("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var a=r("/MKj"),i=r("G4qV"),o=r("upRB"),l=n(r("EWR0")),c=(0,i.createSelector)([o.getRunnerState],function(e){return{runnerState:e}}),s=(0,a.connect)(function(e){return c(e)})(l.default)
t.default=s},UUBB:function(e,t,r){"use strict"
var n=r("284h"),a=r("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var o=a(r("lwsE")),l=a(r("W8MJ")),c=a(r("a1gu")),s=a(r("Nsbk")),u=a(r("PJYZ")),d=a(r("7W2i")),f=a(r("lSNA")),p=n(r("q1tI")),i=a(r("17x9")),h=r("vbsp"),m=a(r("TSYQ")),v=function(e){function i(){var e,r;(0,o.default)(this,i)
for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a]
return r=(0,c.default)(this,(e=(0,s.default)(i)).call.apply(e,[this].concat(n))),(0,f.default)((0,u.default)(r),"handleChange",function(e){if(!r.props.disabled&&!e.currentTarget.classList.contains("disabled")){var t=e.currentTarget.dataset.value
r.props.handleChange(t)}}),(0,f.default)((0,u.default)(r),"getBgStyle",function(e,t){var r=0===e,n=e===t-1
if(0<=e)return{transform:"translateX(".concat(100*e,"%)"),borderLeftColor:r?"transparent":"",borderRightColor:n?"transparent":""}}),r}return(0,d.default)(i,e),(0,l.default)(i,[{key:"render",value:function(){var l=this,e=this.props,t=e.options,c=e.value,r=e.disabled,n=e.className,s=t.findIndex(function(e){return e.value===c}),u=this.getBgStyle(s,t.length)
return p.default.createElement(h.StyledRadioLine,{className:(0,m.default)("radio-line",n,{disabled:r})},t.map(function(e,t){var r=e.label,n=e.value,a=e.compatibleValues,i=e.disabled,o=!i&&(a?a.includes(c):c===n)
return p.default.createElement("li",{className:(0,m.default)("radio-option",{active:o},{disabled:i}),key:n,"data-value":n,onClick:l.handleChange},0===t&&p.default.createElement("div",{className:(0,m.default)("move-cube",{active:0<=s}),style:u}),p.default.createElement("div",{className:"radio-content"},r))}))}}]),i}(p.PureComponent);(t.default=v).propTypes={options:i.default.arrayOf(i.default.shape({label:i.default.node,value:i.default.any})),className:i.default.string,value:i.default.any,
disabled:i.default.bool,handleChange:i.default.func}},UfWW:function(e,t,r){var i=r("KwMD"),o=r("ut/Y"),l=r("Sxd8"),c=Math.max
e.exports=function(e,t,r){var n=null==e?0:e.length
if(!n)return-1
var a=null==r?0:l(r)
return a<0&&(a=c(n+a,0)),i(e,o(t,3),a)}},Ur7v:function(e,t,r){"use strict"
var n=r("284h"),a=r("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var i=a(r("pVnL")),o=a(r("o0o1")),l=a(r("yXPU")),c=a(r("lwsE")),s=a(r("W8MJ")),u=a(r("a1gu")),d=a(r("Nsbk")),f=a(r("PJYZ")),p=a(r("7W2i")),h=a(r("lSNA")),m=a(r("Znm+")),v=a(r("mwIZ")),g=n(r("q1tI")),y=a(r("17x9")),b=r("/MKj"),S=r("7Qib"),w=r("wYtL"),E=a(r("i6OX")),C=r("5vJs"),k=r("xoLq"),_=r("/5+U"),x=a(r("ztWx"))
function T(t,e){var r=Object.keys(t)
if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t)
e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)}return r}function P(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{}
e%2?T(r,!0).forEach(function(e){(0,h.default)(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):T(r).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}var M=function(e){function t(){var r
return(0,c.default)(this,t),r=(0,u.default)(this,(0,d.default)(t).call(this)),(0,h.default)((0,f.default)(r),"handleShare",(0,l.default)(o.default.mark(function e(){return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:MB.isDashboard?MB.askDashboardToShare():r.setState({isSharingOverlayOpen:!0}),MB.event("preview","工具栏: 点击分享按钮"),MB.event("zhuge",(0,_.canBackToWorkspace)()?"Preview_click_share":"LinkPreview_click_share"),MB.event("zhuge","SharePopup_enter",{From:(0,_.canBackToWorkspace)(
)?"Preview":"Linkpreview"})
case 4:case"end":return e.stop()}},e)}))),(0,h.default)((0,f.default)(r),"onToggleSharingOverlay",function(e){var t=(0,m.default)(e)?e:!r.state.isOpen
t||MB.event("zhuge","运行页-预览-分享弹窗",{"边框类型":MB.project().shell_type,"链接高亮":MB.project().highlight?"开启":"关闭"}),r.setState({isSharingOverlayOpen:t})}),(0,h.default)((0,f.default)(r),"updateTeam",function(e){MB.currentTeam=(0,S.snakizeKeys)(P({},MB.currentTeam,{},e)),r.forceUpdate()}),(0,h.default)((0,f.default)(r),"updateApp",function(e){MB.currentProject=(0,S.snakizeKeys)(P({},MB.currentProject,{},e)),r.forceUpdate()}),r.state={isSharingOverlayOpen:!1},r}return(0,p.default)(t,e),(0,s.default)(t,[{key:"render",
value:function(){var e=this.sharingOverlay
return g.default.createElement(g.Fragment,null,g.default.createElement(w.Tooltip,{position:"bottom",duration:1e3,content:{hover:I18N.preview.share},tipClassName:"marign-top-20"},g.default.createElement(E.default,{type:"dora",name:"share",className:"share-icon",onClick:this.handleShare})),e)}},{key:"data",get:function(){var e=(0,S.camelizeKeys)(MB.currentOrg),t=(0,S.camelizeKeys)(MB.currentTeam),r=(0,S.camelizeKeys)(MB.currentProject),n=MB.user,a=n.id,i=(0,v.default)(e,"cid","me"),o=r.expired
return e&&Object.assign(e,{policyPermissionMap:C.POLICY_PERMISSION_MAP}),{workspace:i,isExpired:o,org:e,team:t,app:r,me:n,meId:a}}},{key:"sharingOverlay",get:function(){var e=this.state.isSharingOverlayOpen,t=this.data
return!MB.isDashboard&&g.default.createElement(x.default,(0,i.default)({isOpen:e,onToggle:this.onToggleSharingOverlay,updateTeamFromProps:this.updateTeam,updateAppFromProps:this.updateApp},t,{withStore:!1}))}}]),t}(g.PureComponent);(0,h.default)(M,"propTypes",{checkPermissionStorelessly:y.default.func})
var O=(0,b.connect)(void 0,{checkPermissionStorelessly:k.checkPermissionStorelessly})(M)
t.default=O},"Uu/L":function(e,t,r){"use strict"
var n=r("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.StyledScreenItem=t.StyledScreenList=void 0
var a=n(r("vOnD")),i=r("mggN"),o=a.default.ul.withConfig({displayName:"styles__StyledScreenList",componentId:"sc-1v51q5m-0"})(["&,ol,li{list-style:none;}.not-match{width:100%;text-align:center;}"])
t.StyledScreenList=o
var l=a.default.div.withConfig({displayName:"styles__StyledScreenItem",componentId:"sc-1v51q5m-1"})([""," .expander{width:15px;height:100%;display:flex;justify-content:center;align-items:center;}.screen-name{display:flex;align-items:center;width:100%;padding-right:5px;.icon{flex-shrink:0;margin-right:4px;}span{",
";}}.actions{padding:0 10px;.actions-ellipsis{font-size:14px;pointer-events:none;}&:hover{.actions-ellipsis{color:#298df8;}}}.child-screens{position:relative;}&.wait-hover *{pointer-events:none;}&.linking{color:",";background:#bbd8fe;.actions{display:none;}}"],i.listItem,i.textEllipsis,function(e){return e.theme.listItem.tc})
t.StyledScreenItem=l},VQzC:function(e,t,r){"use strict"
var n=r("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.fetchProjectComment=void 0
var c=n(r("o0o1")),a=n(r("yXPU")),s=r("wrnf"),u=n(r("zkrS")).default.MB,i=function(){var t=(0,a.default)(c.default.mark(function e(t){var r,n,a,i,o,l
return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.projectCid,n=t.projectAccessToken,e.next=3,(0,s.fetchLikeRequest)("/api/v2/sharing/".concat(r,"/comments?password=").concat(u.localStorageDelegate.getItem("".concat(n,"_pwd"))||""))
case 3:if(a=e.sent,i=a.ok,o=a.status,l=a.json,i){e.next=9
break}throw new Error("[fetchProjectComment] invalid status: ".concat(o))
case 9:return e.next=11,l()
case 11:return e.abrupt("return",e.sent)
case 12:case"end":return e.stop()}},e)}))
return function(e){return t.apply(this,arguments)}}()
t.fetchProjectComment=i},Vk5q:function(e,t,r){"use strict"
var n=r("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.onFallbackError=t.doFallbackSaveItem=t.onSocketError=t.doSocketBatchSave=t.getSaveItemInfo=t.processSaveQueue=void 0
var u=n(r("o0o1")),a=n(r("yXPU")),d=r("wrnf"),c=r("ZMzb"),s=r("t77w"),f=r("ycqN"),p=window.MB
t.processSaveQueue=function(e){var n={},a=[];(0<arguments.length&&void 0!==e?e:[]).forEach(function(e){var t=e.record,r="".concat(t.constructor.className,"-").concat(t.cid)
void 0===n[r]&&(n[r]=a.length),a[n[r]]=e})
var r=new Set
return a.forEach(function(e){var t=e.record
return e.isDelete&&["Widget","Panel"].includes(t.constructor.className)&&r.add(t.cid)}),a.filter(function(e){var t=e.record
return!("Widgetstate"===t.constructor.className&&r.has(t.widget_cid)||"Panelstate"===t.constructor.className&&r.has(t.panel_cid))}).map(function(e){var t=e.record,r=e.isDelete,n=t.constructor.className,a=r?"DELETE":"Asset"===n?"POST":"PUT",i="POST"==a?"/".concat(n.toLowerCase(),"s"):"/".concat(n.toLowerCase(),"s/").concat(encodeURIComponent(t.id)),o=JSON.stringify("DELETE"==a?{cid:t.cid,mtime:t.mtime}:(0,s.compressRichText)(t.toJSON())),l={className:n,cid:t.cid}
if("Panel"===n)Template.find(t.template_cid)
return{url:i,method:a,body:o,extraInfo:l}})}
t.getSaveItemInfo=function(e){var t=e.url,r=e.method,n=e.body
return JSON.stringify({url:t,method:r,bodyLength:n?n.length:0})}
var i=function(){var t=(0,a.default)(u.default.mark(function e(t){var r,n,a
return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.saveChunk,t.attempt,t.timeout,n=p.project()?p.project().template?p.project().project_cid:p.project().cid:"",a={id:p.user.id,name:p.user.name,avatar:p.user.avatar},e.next=5,p.Pusher.requestBatchSave({batchSaveQueue:r,rootProjectCid:n,fromUser:a})
case 5:case"end":return e.stop()}},e)}))
return function(e){return t.apply(this,arguments)}}()
t.doSocketBatchSave=i
var o=function(){var r=(0,a.default)(u.default.mark(function e(t,r){var n,a
return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=r.saveChunk,r.attempt,a=r.timeout,t.message&&t.message.toLowerCase().includes("timeout"))return p.event("ga-0","send","event","batch-saving","batch saving timeout","(".concat(n.length,")(").concat(a,"ms)(").concat(p.user.email,")")),p.alertAsync({title:I18N.error_happened,desc:I18N.network_error,isHTML:!0}),e.next=7,(0,c.setTimeoutAsync)(5e3)
e.next=9
break
case 7:e.next=12
break
case 9:return p.event("ga-0","send","event","batch-saving","batch saving error: ".concat(t.status),"[".concat(t.status,"] ").concat(t.message||t,": (").concat(n.length,"item|").concat(a,"ms)(").concat(p.user.email,")")),e.next=12,(0,f.SAVE_NUKE_SEQUENCE)(t,t.status)
case 12:case"end":return e.stop()}},e)}))
return function(e,t){return r.apply(this,arguments)}}()
t.onSocketError=o
var l=function(){var t=(0,a.default)(u.default.mark(function e(t){var r,n,a,i,o,l,c,s
return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.saveItem,n=r.url,a=r.method,i=r.body,o=t.attempt,l=t.timeout,e.next=3,(0,d.fetchLikeRequest)(n,{headers:{"Content-Type":"application/json"},method:a,body:i,timeout:l})
case 3:if(c=e.sent,200!==(s=c.status))return p.event("ga-0","send","event","saving","saving error: ".concat(s),"".concat(s,": ").concat(n,"(").concat(a,"|x").concat(o,"|").concat(l,"ms)(").concat(p.user.email,")")),e.next=9,(0,f.SAVE_NUKE_SEQUENCE)(new Error("fallback saving error: ".concat(s)),s)
e.next=9
break
case 9:case"end":return e.stop()}},e)}))
return function(e){return t.apply(this,arguments)}}()
t.doFallbackSaveItem=l
var h=function(){var r=(0,a.default)(u.default.mark(function e(t,r){var n,a,i,o,l
return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.saveItem,a=n.url,i=n.method,o=r.attempt,l=r.timeout,p.event("ga-0","send","event","saving","fallback saving error: ".concat(t.message||t),"".concat(t.message||t,": ").concat(a,"(").concat(i,"|x").concat(o,"|").concat(l,"ms)(").concat(p.user.email,")")),p.alertAsync({title:I18N.error_happened,desc:I18N.network_error,isHTML:!0}),e.next=6,(0,c.setTimeoutAsync)(5e3)
case 6:case"end":return e.stop()}},e)}))
return function(e,t){return r.apply(this,arguments)}}()
t.onFallbackError=h},WcC0:function(e,t,r){},WyLE:function(e,t,r){"use strict"
var n=r("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.WrapComponent=t.Loading=t.BorderInfo=t.Shadows=t.GradientColor=t.Fills=t.LayerName=void 0
function a(e){var t=e.value,r=e.title
return y.default.createElement("div",{className:"".concat(c("container")," ").concat(c("layer-name"))},y.default.createElement(b.Base,{title:r||I18N.preview_panel.layer_name,data:[t]}))}var y=n(r("q1tI")),i=n(r("17x9")),b=r("RUem"),o=n(r("mfFm")),l=n(r("UbMB")),S=r("/5+U"),w=r("XrEr"),c=l.default.bind(o.default);(t.LayerName=a).propTypes={title:i.default.string,value:i.default.string}
function s(e){var s=e.colorUnit,t=e.backgroundColorSort
return y.default.createElement(h,null,I18N.preview_panel.fills,t.map(function(e,t){var r=e.value,n=e.type,a=void 0===n?"color":n,i=e.opacity,o=e.gradient,l=(0,w.getNormalRgbaColor)(r),c=l&&(0,w.getColorFromUnit)(l,s)
return"color"===a?y.default.createElement(b.ColorInfo,{stateColor:c,rgbaColor:l,title:I18N.preview_panel.color,key:t}):y.default.createElement(f,{gradient:o,colorUnit:s,opacity:i,key:t})}))}(t.Fills=s).propTypes={backgroundColorSort:i.default.array,colorUnit:i.default.string}
var f=function(e){var t=e.gradient,r=t.color_stops,n=void 0===r?[]:r,a=(t.from,t.to,t.type),i=e.opacity,o=e.colorUnit
return y.default.createElement("div",null,0<n.length&&n.map(function(e,t){var r=e.color
e.position
return y.default.createElement("div",{key:"".concat(r).concat(t)},y.default.createElement(b.Base,{colorUnit:o,color:(0,w.getNormalRgbaColor)(r),title:0==t?I18N.preview_panel.gradient:""}))}),i&&y.default.createElement(b.Base,{title:I18N.preview_panel.opacity,data:["".concat(100*i,"%")]}),a&&y.default.createElement(b.Base,{data:[a],title:I18N.preview_panel.type}))};(t.GradientColor=f).propTypes={gradient:i.default.object.isRequired,opacity:i.default.number,colorUnit:i.default.string.isRequired}
function u(e){var t=e.shadows,r=void 0===t?[]:t,n=e.isInnerShaow,a=void 0!==n&&n,i=e.unit,o=e.ratio,l=e.colorUnit,c=e.textShadows,s=void 0===c?[]:c
return y.default.createElement(h,null,a?I18N.preview_panel.inner_shadow:I18N.preview_panel.shadow,0<r.length&&y.default.createElement(d,{shadows:r,unit:i,ratio:o,colorUnit:l}),0<s.length&&y.default.createElement(d,{shadows:s,unit:i,ratio:o,colorUnit:l}))}(t.Shadows=u).propTypes={shadows:i.default.array,textShadows:i.default.array,isInnerShaow:i.default.bool,unit:i.default.string.isRequired,ratio:i.default.number.isRequired,colorUnit:i.default.string.isRequired}
var d=function(e){var t=e.shadows,m=e.unit,v=e.ratio,g=e.colorUnit
return t.map(function(e,t){var r=e.color,n=e.offset_x,a=void 0===n?0:n,i=e.offset_y,o=void 0===i?0:i,l=e.blur_radius,c=void 0===l?0:l,s=e.spread,u=void 0===s?0:s,d=(0,S.adapterScreen)(a,v,m),f=(0,S.adapterScreen)(o,v,m),p=(0,S.adapterScreen)(c,v,m),h=(0,S.adapterScreen)(u,v,m)
return y.default.createElement("div",{className:"shadow-item-gap",key:t},r&&y.default.createElement(b.Base,{title:I18N.preview_panel.color,color:(0,w.getNormalRgbaColor)(r),colorUnit:g}),y.default.createElement(b.Base,{data:[d,f,p,h],dataValue:[I18N.preview_panel._x,I18N.preview_panel._y,I18N.preview_panel.blur,I18N.preview_panel.spread]}))})}
d.propTypes={shadows:i.default.array,unit:i.default.string,ratio:i.default.number,colorUnit:i.default.string}
function p(e){var s=e.colorUnit,t=e.borderSort,u=e.unit,d=e.ratio,r=e.isStroke
return y.default.createElement(h,null,r?I18N.preview_panel.stroke:I18N.preview_panel.borders,t.reverse().map(function(e,t){var r=e.position,n=void 0===r?"inside":r,a=e.color,i=e.thickness,o=e.gradient,l=a&&(0,w.getNormalRgbaColor)(a),c=i&&(0,S.adapterScreen)(i,d,u)
return[a?y.default.createElement(b.Base,{key:"".concat(t).concat(l),color:l,title:I18N.preview_panel.color,colorUnit:s}):y.default.createElement(f,{gradient:o,colorUnit:s}),n&&y.default.createElement(b.Base,{key:"".concat(t).concat(n),title:I18N.preview_panel.position,data:[n]}),c&&y.default.createElement(b.Base,{key:"".concat(t).concat(c),title:I18N.preview_panel.thickness,data:[c]})]}))}(t.BorderInfo=p).propTypes={isStroke:i.default.bool,borderSort:i.default.array.isRequired,
colorUnit:i.default.string.isRequired,unit:i.default.string.isRequired,ratio:i.default.number.isRequired}
t.Loading=function(){return y.default.createElement("div",{className:c("layer-load")},y.default.createElement("span",{className:c("spinner")}))}
var h=function(e){var t=e.children
return y.default.createElement("section",null,y.default.createElement("div",{className:c("header")},t[0]),y.default.createElement("div",{className:c("container")},t.slice(1)))};(t.WrapComponent=h).propTypes={children:i.default.array}},XKAG:function(e,t,r){var l=r("ut/Y"),c=r("MMmD"),s=r("7GkX")
e.exports=function(o){return function(e,t,r){var n=Object(e)
if(!c(e)){var a=l(t,3)
e=s(e),t=function(e){return a(n[e],e,n)}}var i=o(e,t,r)
return-1<i?n[a?e[i]:i]:void 0}}},XpKX:function(e,t,r){e.exports={"mb-preview-page":"_2YuJcr1wPA2XDaMiaXqdFf","is-offline-mode":"_2Rn4b7GJxlQ8HllhNCcowW","is-uichina":"VXUfuoQkv54ubWe5VFlrv"}},XrEr:function(module,exports,__webpack_require__){"use strict"
var _interopRequireDefault=__webpack_require__("TqRt")
Object.defineProperty(exports,"__esModule",{value:!0}),exports.DEFAULT_COLOR=exports.getUIColor=exports.getColorFromUnit=exports.checkColorUnit=exports.parseSketchColor2rgba=exports.getNormalRgbaColor=exports.rgba2hexWithA=void 0
var _slicedToArray2=_interopRequireDefault(__webpack_require__("J4zp")),_round=_interopRequireDefault(__webpack_require__("tpxX")),_utils__=__webpack_require__("/5+U"),rgba2hexWithA=function(e){if(checkColorUnit(e)!==RGBA)return console.warn("Not rgbacolor but use rgba2hexWithA"),e
var t=e.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+(\.\d+)?)[\s+]?/i)
return t&&4<=t.length?{hex:("#"+("0"+parseInt(t[1],10).toString(16)).slice(-2)+("0"+parseInt(t[2],10).toString(16)).slice(-2)+("0"+parseInt(t[3],10).toString(16)).slice(-2)).toUpperCase(),o:Number((+t[4]).toFixed(2))}:e}
exports.rgba2hexWithA=rgba2hexWithA
var getNormalRgbaColor=function(e){if(!e)return DEFAULT_COLOR
var t=parseSketchColor2rgba(e)
return t?getColorFromUnit(t,RGBA):e}
exports.getNormalRgbaColor=getNormalRgbaColor
var parseSketchColor2rgba=function parseSketchColor2rgba(rgbaFuncStr){var colorType=checkColorUnit(rgbaFuncStr)
if(colorType!==RGBA)return getColorFromUnit(rgbaFuncStr,RGBA)
function rgba(){var e=arguments[0],t=arguments[1],r=arguments[2],n=arguments[3]
return e<=1&&t<=1&&r<=1?{r:parseInt((0,_round.default)(255*e),10),g:parseInt((0,_round.default)(255*t),10),b:parseInt((0,_round.default)(255*r),10),a:Number(Number(n).toFixed(2))}:{r:e,g:t,b:r,a:void 0===n?1:n}}var _eval=eval(rgbaFuncStr),r=_eval.r,g=_eval.g,b=_eval.b,a=_eval.a
return"rgba(".concat(r,", ").concat(g,", ").concat(b,", ").concat(a,")")}
exports.parseSketchColor2rgba=parseSketchColor2rgba
var checkColorUnit=function(e){var t=0<arguments.length&&void 0!==e?e:DEFAULT_COLOR
return t.includes(RGBA)?RGBA:t.includes(RGB)?RGB:t.includes("#")&&9===t.length?ARGB:t.includes("#")?HEX:!!t.includes(TRANSPARENT)&&TRANSPARENT}
exports.checkColorUnit=checkColorUnit
var getColorFromUnit=function(e,t){var r=1<arguments.length&&void 0!==t?t:RGBA
if(!e)return DEFAULT_COLOR
var n=checkColorUnit(e)
if(!n)return DEFAULT_COLOR
switch(n){case RGBA:if(r===n)return e
if(r===RGB)return rgba2rgb(e)
if(r===HEX)return rgba2hex(e)
if(r===ARGB)return rgba2argb(e)
break
case RGB:if(r===n)return e
if(r===RGBA)return rgb2rgba(e)
if(r===HEX)return rgb2hex(e)
if(r===ARGB)return rgb2argb(e)
break
case HEX:if(r===n)return e
if(r===RGBA)return hex2rgba(e)
if(r===RGB)return hex2rgb(e)
if(r===ARGB)return hex2argb(e)
break
case ARGB:if(r===n)return e
if(r===RGBA)return argb2rgba(e)
if(r===RGB)return argb2rgbWithA(e)
if(r===HEX)return argb2hexWithA(e)
break
case TRANSPARENT:if(r===RGBA)return RGBA_FOR_TRANSPARENT
if(r===RGB)return rgba2rgb(RGBA_FOR_TRANSPARENT)
if(r===HEX)return rgba2hex(RGBA_FOR_TRANSPARENT)
if(r===ARGB)return rgba2argb(RGBA_FOR_TRANSPARENT)
break
default:return e}}
exports.getColorFromUnit=getColorFromUnit
var rgba2rgbWithA=function(e){if(checkColorUnit(e)!==RGBA)return console.warn("Not rgbacolor but use rgba2rgbWithA"),e
var t=rgba2hexWithA(e),r=t.hex,n=t.o
return r?{rgb:hex2rgb(r),o:n}:DEFAULT_COLOR},hex2rgb=function(e){if(checkColorUnit(e)!==HEX)return console.warn("Not hexcolor but use hex2rgb"),e
if(3===(e=e.replace("#","")).length){var t=e.split(""),r=(0,_slicedToArray2.default)(t,3),n=r[0],a=r[1],i=r[2]
e="".concat(n).concat(n).concat(a).concat(a).concat(i).concat(i)}var o=parseInt(e.substring(0,2),16),l=parseInt(e.substring(2,4),16),c=parseInt(e.substring(4,6),16)
return"rgb(".concat(o,", ").concat(l,", ").concat(c,")")},rgba2rgb=function(e){var t=rgba2rgbWithA(e),r=t.rgb,n=t.o
return r?"".concat(r," ").concat(Math.round(100*n),"%"):e},rgba2hex=function(e){var t=rgba2hexWithA(e),r=t.hex,n=t.o
return r?"".concat(r.toUpperCase()," ").concat(Math.round(100*n),"%"):e},rgba2argb=function(e){if(checkColorUnit(e)!==RGBA)return console.warn("Not rgbacolor but use rgba2argb"),e
var t=rgba2hexWithA(e),r=t.hex,n=t.o
if(!r)return e
var a=("0"+parseInt(255*n,10).toString(16)).slice(-2).toUpperCase()
return"#".concat(a).concat(r.slice(1))},rgb2rgba=function(e){return checkColorUnit(e)!==RGB?(console.warn("Not rgbcolor but use rgb2rgba"),e):"rgba(".concat(e.slice(4,-1),", 1)")},rgb2hex=function(e){if(checkColorUnit(e)!==RGB)return console.warn("Not rgbcolor but use rgb2hex"),e
var t=e.match(/^rgb?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i)
if(t&&4===t.length){var r=("0"+parseInt(t[1],10).toString(16)).slice(-2),n=("0"+parseInt(t[2],10).toString(16)).slice(-2),a=("0"+parseInt(t[3],10).toString(16)).slice(-2)
return"#".concat(r).concat(n).concat(a).toUpperCase()}},rgb2argb=function(e){return checkColorUnit(e)!==RGB?(console.warn("Not rgbcolor but use rgb2argb"),e):hex2argb(rgb2hex(e))},hex2argb=function(e){return checkColorUnit(e)!==HEX?(console.warn("Not hexcolor but use hex2argb"),e):"#FF".concat(e.slice(1))},hex2rgba=function(e){return checkColorUnit(e)!==HEX?(console.warn("Not hexcolor but use hex2rgba"),e):rgb2rgba(hex2rgb(e))},argb2rgba=function(e){if(checkColorUnit(e)!==ARGB)return console.warn(
"Not argbcolor but use argb2rgba"),e
for(var t=[],r=1;r<e.length;r+=2)t.push(e.slice(r,r+2))
var n=t[0],a=t[1],i=t[2],o=t[3]
return a=parseInt(a,16),i=parseInt(i,16),o=parseInt(o,16),n=Number((parseInt(n,16)/255).toString().slice(0,4)),"rgba(".concat(a,", ").concat(i,", ").concat(o,", ").concat(n,")")},argb2rgbWithA=function(e){if(checkColorUnit(e)!==ARGB)return console.warn("Not argbcolor but use argb2rgbWithA"),e
var t=argb2rgba(e),r=rgba2rgbWithA(t),n=r.rgb,a=r.o
return n?"".concat(n," ").concat(Math.round(100*a),"%"):e},argb2hexWithA=function(e){if(checkColorUnit(e)!==ARGB)return console.warn("Not argbcolor but use argb2hexWithA"),e
var t=argb2rgba(e),r=rgba2hexWithA(t),n=r.hex,a=r.o
return n?"".concat(n.toUpperCase()," ").concat(Math.round(100*a),"%"):e},getUIColor=function getUIColor(color){if(!color)return DEFAULT_COLOR
var rgbaColor=getColorFromUnit(color,"rgba")
function rgba(){return{r:arguments[0],g:arguments[1],b:arguments[2],a:arguments[3]}}var _eval2=eval(rgbaColor),r=_eval2.r,g=_eval2.g,b=_eval2.b,a=_eval2.a
return r=(0,_utils__.save2Digital)(r/255),g=(0,_utils__.save2Digital)(g/255),b=(0,_utils__.save2Digital)(b/255),"UIColor(red:".concat(r,", green:").concat(g,", blue:").concat(b,", alpha:").concat(a,")")}
exports.getUIColor=getUIColor
var RGBA="rgba",ARGB="argb",RGB="rgb",HEX="hex",TRANSPARENT="transparent",RGBA_FOR_TRANSPARENT="rgba(255, 255, 255, 0)",DEFAULT_COLOR="#FFFFFF"
exports.DEFAULT_COLOR=DEFAULT_COLOR},Y69h:function(e,t,r){"use strict"
var n=r("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var g=n(r("J4zp")),i=n(r("lwsE")),o=n(r("W8MJ")),l=n(r("a1gu")),c=n(r("Nsbk")),s=n(r("PJYZ")),u=n(r("7W2i")),y=n(r("lSNA")),b=n(r("q1tI")),a=n(r("17x9")),d=r("1qiG")
function f(t,e){var r=Object.keys(t)
if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t)
e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)}return r}function S(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{}
e%2?f(r,!0).forEach(function(e){(0,y.default)(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):f(r).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}var p=function(e){function a(){var e,v;(0,i.default)(this,a)
for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n]
return v=(0,l.default)(this,(e=(0,c.default)(a)).call.apply(e,[this].concat(r))),(0,y.default)((0,s.default)(v),"getDistanceMarksStyle",function(e,t){return{top:(0,d.toPercentage)(e.top/t.height),left:(0,d.toPercentage)(e.left/t.width),width:(0,d.toPercentage)(e.width/t.width),height:(0,d.toPercentage)(e.height/t.height)}}),(0,y.default)((0,s.default)(v),"mapDistanceMarks",function(e,t){var r,n=(0,g.default)(e,2),a=n[0],i=n[1],o=v.props,l=o.style,c=o.renderValue,s=l.showStartAndEndBoundary,u=l.colorForLines
,d=l.colorForText,f=l.backgroundColorForText,p=l.dashed,h=v.getMarkStyle(a,i),m=Math.abs(i)
return b.default.createElement("div",{key:"".concat(t,"-").concat(i)},b.default.createElement("div",{className:"distance-line ".concat(a),style:S({},h.line,(r={},(0,y.default)(r,["top","bottom"].includes(a)?"borderLeftStyle":"borderTopStyle",p?"dashed":"solid"),(0,y.default)(r,"borderColor",u),r))}),c?c({value:m,style:h.value,customClassName:"distance-value ".concat(a)}):b.default.createElement("span",{className:"distance-value ".concat(a),style:S({},h.value,{color:d,backgroundColor:f})},m),
s&&b.default.createElement(b.default.Fragment,null,b.default.createElement("div",{className:"distance-mark-start-boundary ".concat(a),style:{borderColor:u}}),b.default.createElement("div",{className:"distance-mark-end-boundary ".concat(a),style:S({},h.endBoundary,{borderColor:u})})))}),(0,y.default)((0,s.default)(v),"getMarkStyle",function(e,t){var r,n=v.props.baseRect,a={line:{},value:{},endBoundary:{}},i=["right","left"],o=i.includes(e)?t/n.width:t/n.height
return a.line=(r={},(0,y.default)(r,e,t<0?0:(0,d.toPercentage)(-o)),(0,y.default)(r,i.includes(e)?"width":"height",(0,d.toPercentage)(Math.abs(o))),r),a.endBoundary=(0,y.default)({},e,(0,d.toPercentage)(-o)),a.value=(0,y.default)({},i.includes(e)?"left":"top",["right","bottom"].includes(e)?(0,d.toPercentage)(1+o/2):(0,d.toPercentage)(-o/2)),a}),v}return(0,u.default)(a,e),(0,o.default)(a,[{key:"render",value:function(){var e=this.props,t=e.baseRect,r=e.refRect,n=e.screen,a=(0,d.getDistancesForDirections)(t,r
),i=this.getDistanceMarksStyle(t,n)
return b.default.createElement("div",{className:"distance-marks",style:i},Object.entries(a).map(this.mapDistanceMarks))}}]),a}(b.default.Component);(t.default=p).propTypes={baseRect:a.default.object,refRect:a.default.object,screen:a.default.object,style:a.default.object,renderValue:a.default.func}},YCqe:function(e,t,r){e.exports={"debug-panel":"_3J4s9dFTh0T5pdjgXXkXVf"}},YwNm:function(e,t,r){"use strict"
var n=r("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var a=n(r("lwsE")),i=n(r("W8MJ")),o=n(r("lSNA")),l=r("upRB")
function c(t,e){var r=Object.keys(t)
if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t)
e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)}return r}var s={useTransform:!1,disableTouch:!1,disablePointer:!0,preventDefault:!0,ignoreEventException:function(e){var t=$(e.target).closest(".widget")
if(t.length){if(t.hasClass("webpage"))return!0
if(t.hasClass("map_view"))return!0
if(t.find("input").length)return!0}var r=$(e.target).closest(".ppanel")
if(r.length){var n=Panel.find(r.data("cid")),a=n.getState(MB.currentScreen.state_cid),i=n.ct()
if(i.height>a.height||i.width>a.width)return!0}return!1}},u=function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{}
e%2?c(r,!0).forEach(function(e){(0,o.default)(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(r).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}({},s,{probeType:3,scrollbars:!0,mouseWheel:!0,disableMouse:!1,interactiveScrollbars:!0,shrinkScrollbars:"scale",fadeScrollbars:!0,HWCompositing:!1}),d=function(){function e(){(0,a.default)(this,e),this.iScrollMap={}}return(0,i.default)(e,[{key:"clear",
value:function(){this.destroyScrollBar()}},{key:"setObjectUrl",value:function(e,t){e&&(e.contentWindow?e.contentWindow.location.replace(t):e.setAttribute("src",t))}},{key:"deviceOrient",value:function(){return $(window).width()>$(window).height()?"landscape":"portrait"}},{key:"toggleScrollBar",value:function(t){Object.values(this.iScrollMap).forEach(function(e){t?e.enable():e.disable()})}},{key:"renderScrollbar",value:function(e){this.iScrollMap[e]?this._refreshScrollBar(e):this._initScrollBar(e)}},{
key:"_initScrollBar",value:function(e){if(!this.iScrollMap[e]){var r=document.querySelector("#pscreen".concat(e," .screen-content"))
if(!r)throw new Error("初始化滚动条失败, 找不到对应的DOM元素"+e)
var t=MB.isMobile()?s:u,n=new window.IScroll(r,t),a=document.querySelector("#sticky-container")
a&&n.on("scroll",function(e){var t=r.querySelector(".widgets")
a.querySelector("#stickies").style.marginTop=t.style.top}),MB.isMobile()||$(r).on("wheel",function(e){r.offsetHeight!==r.scrollHeight&&e.stopPropagation()}),this.iScrollMap[e]=n}}},{key:"_refreshScrollBar",value:function(e){this.iScrollMap[e]&&this.iScrollMap[e].refresh()}},{key:"resetScreenScrollState",value:function(e){var t=this.iScrollMap[e]
t&&t.scrollTo(0,0)
var r=document.querySelector("#stickies")
r&&(r.style.marginTop=0)}},{key:"destroyScrollBar",value:function(){Object.values(this.iScrollMap).forEach(function(e){$(e.wrapper).off("wheel"),e.destroy()}),this.iScrollMap={}}},{key:"destroyScrollBarByCid",value:function(e){var t=this.iScrollMap[e]
t&&($(t.wrapper).off("wheel"),t.destroy(),delete this.iScrollMap[e])}},{key:"resetScrollState",value:function(){Object.values(this.iScrollMap).forEach(function(e){return e.scrollTo(0,0)})
var e=document.querySelector("#stickies")
e&&(e.style.marginTop=0)}},{key:"setupStatusBar",value:function(e){var t=$(".pcanvas.active .status_bar").removeClass("standalone light")
if(window.innerHeight>window.innerWidth){t.addClass("standalone")
var r=e.sb()
!r||r.th&&"light"!=r.th||t.addClass("light")}if(MB.isIOS9()&&this.deviceOrient()===e.orient()){var n=MB.COMPONENTS.status_bar.height
$("#app").css({top:0-n,height:window.innerHeight+n})}}},{key:"hideScreen",value:function(e){$(e).hide(),$(e).find(".iframe").each(function(e,t){MB.runner.runnerUtil.setObjectUrl(t,"about:blank")})}},{key:"getIsImmersive",value:function(){return(0,l.getIsImmersive)(MB.webpackInterface.store.getState())}},{key:"getIsHighlight",value:function(){return(0,l.getIsHighlight)(MB.webpackInterface.store.getState())}},{key:"getIsScreenExpanded",value:function(){return(0,l.getIsScreenExpanded)(
MB.webpackInterface.store.getState())}},{key:"getCurrentScreen",value:function(){var e=(0,l.getRunnerActiveScreenCid)(MB.webpackInterface.store.getState())
return Screen.find(e)}}]),e}()
t.default=d},Z3xQ:function(e,t,r){"use strict"
var n=r("TqRt")
r("oQ6s"),r("p/ml"),r("83sM"),r("tTzg"),r("Kgn6"),r("3y7X"),r("hQvp"),r("1gVK"),r("FTTL"),r("Tbyd"),r("r2ef"),r("ypWq"),r("DhCz"),r("ZjFo"),r("NlNL"),r("7xwf")
var a=n(r("zkrS"))
r("KKmY"),r("P3rE"),r("dppN"),r("T7iu")
var i=n(r("7eYF")),o=n(r("aqSL")),l=r("+Cau"),c=r("abHt")
r("RJdT"),r("20hc"),MB.COMPONENTS=c.componentMap
try{a.default.MB.webpackInterface=(0,i.default)(o.default),a.default.MB.messageBucket=(0,l.createMessageBucket)()}catch(e){console.warn("[UI:Preview] Failed to init:",e.stack||e)}},ZS4k:function(e,t,r){"use strict"
var n=r("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var a=r("/MKj"),i=n(r("4sCl")),o=r("Kkl0"),l=(0,a.connect)(function(e){var t=e.container,r=t.common.keyFlags.isSpaceDown,n=t.layers,a=n.resourceByScreen,i=n.visibilityScreenID,o=n.activeLayerID,l=n.enteredLayerID,c=t.previewSetting,s=c.unit,u=c.ratio,d=c.isShowColorPicker,f=e.model,p=f.current.screenCid,h=f.screens.find(function(e){return e.cid===p})
return{isSpaceDown:r,layers:a[i]&&a[i].layers||[],artboard:a[i]&&a[i].artboard,currentScreen:h,activeLayerID:o,enteredLayerID:l,isShowLayerList:!d,unit:s,ratio:u}},function(t){return{requestSelectLayer:function(e){t((0,o.requestSelectLayer)(e))},enterLayer:function(e){t((0,o.enterLayer)(e))},handleShowlayerInfo:function(e){t({type:"reducer:preview-toolbar:update",payload:{isSelectLayer:e}})}}})(i.default)
t.default=l},ZY2Q:function(e,t,r){"use strict"
var n=r("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.reducer=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:l,t=1<arguments.length?arguments[1]:void 0,r=t.type,n=t.payload
switch(r){case"container:comment:loaded-project":return o({},e,{loadedProjectCid:n.projectCid||null,loadedProjectCommentData:n.projectCommentData||null})
case"container:comment:focus":return o({},e,{focusCommentThreadCid:n.focusCommentThreadCid,focusSource:n.focusSource||null,tempCommentThreadMarker:e.tempCommentThreadMarker&&e.tempCommentThreadMarker.cid===n.focusCommentThreadCid?e.tempCommentThreadMarker:null})
case"container:comment:focus-temp-marker":return o({},e,{focusCommentThreadCid:null,focusSource:null,tempCommentThreadMarker:n})}return e}
var a=n(r("lSNA"))
function i(t,e){var r=Object.keys(t)
if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t)
e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{}
e%2?i(r,!0).forEach(function(e){(0,a.default)(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(r).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}var l={loadedProjectCid:null,loadedProjectCommentData:null,focusCommentThreadCid:null,focusSource:null,tempCommentThreadMarker:null}},"Zu+4":function(e,t,r){"use strict"
var n=r("284h"),a=r("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var i=a(r("PJYZ")),o=a(r("lSNA")),l=a(r("lwsE")),c=a(r("W8MJ")),s=a(r("a1gu")),u=a(r("Nsbk")),d=a(r("7W2i")),y=n(r("q1tI")),f=a(r("17x9")),p=r("vOnD"),h=a(r("i6OX")),b=r("wYtL"),m=a(r("QdB0")),S=a(r("5Mi5")),w=a(r("ULaQ")),E=a(r("Aa0X")),C=a(r("18l9")),k=a(r("jZq5")),_=a(r("DJvY")),x=a(r("DdUa")),T=a(r("2AqR")),P=a(r("nQhf")),M=a(r("xUDz")),O=a(r("NyBV")),j=a(r("ewu5")),I=a(r("mdx/")),v=a(r("gY5R")),N=r("1iCU"),g=a(r("XpKX")),R=a(r("UbMB")),D=r("/5+U");(0,r("aYxX").initI18n)(window.MBLocale)
var L=R.default.bind(g.default),A=window,B=A.MB,F=A.I18N,q=new Set(["ai@mockingbot.com","ethantw@me.com"]),U=function(e){function t(){return(0,l.default)(this,t),(0,s.default)(this,(0,u.default)(t).apply(this,arguments))}return(0,d.default)(t,e),(0,c.default)(t,[{key:"render",value:function(){return y.default.createElement(p.ThemeProvider,{theme:v.default.light},y.default.createElement(W,this.props))}}]),t}(y.PureComponent)
t.default=U
var W=function(e){function a(e){var t;(0,l.default)(this,a),t=(0,s.default)(this,(0,u.default)(a).call(this,e)),(0,o.default)((0,i.default)(t),"handleClick",function(){X(),t.setState({showLoadtip:!1})})
var r=e.dispatch
r({type:"entry:init:preview:scale"}),r({type:"reducer:artboards:init"}),r({type:"preview:set:canvas:offset",payload:{offset:{x:0,y:0}}}),r({type:"entry:init:preview-setting"}),t.state={showLoadtip:!0}
var n=new URLSearchParams(location.search)
return n.has("inspect")?e.dispatch({type:"entry:preview:select",payload:{toolbarActiveItem:N.INSPECT}}):n.has("comment")?e.dispatch({type:"entry:preview:select",payload:{toolbarActiveItem:N.COMMENT}}):e.dispatch({type:"reducer:preview-toolbar:active-item:init"}),t}return(0,d.default)(a,e),(0,c.default)(a,[{key:"componentWillUnmount",value:function(){this.props.dispatch({type:"entry:preview:clear"})}},{key:"componentDidMount",value:function(){var e=(0,m.default)()
if(e){var t={open:!0,event:e}
this.props.dispatch({type:"event-sign-up:set:event",payload:t})}(0,D.canBackToWorkspace)()||B.event("zhuge","PreviewOrLinkPreview_enter",{User_id:"",ProjectCreator_id:B.currentProject.owner_id,via:"click",IF_User_ProjectCreator:!1,From:"Link"})}},{key:"render",value:function(){var e=this.props,t=e.isLite,r=e.project,n=e.previewSetting,a=e.isProjectFromOtherFreeUser,i=e.toastList,o=e.popupList,l=e.dispatch,c=this.state.showLoadtip
if(t)return y.default.createElement(y.default.Fragment,null,y.default.createElement(x.default,null),y.default.createElement(P.default,null))
var s=r.owner_email,u=r.master,d=n.toolbarActiveItem,f=n.isFullScreenMode,p=d==N.PREVIEW,h=d==N.INSPECT,m=!B.isElectron()&&!B.isHTMLZip()&&h&&c&&z(),v=!u&&p&&(q.has(s)||a),g=L("mb-preview-page",{"is-offline-mode":B.isHTMLZip(),"is-uichina":B.isUIChina()||B.isForum(),"full-screen":f})
return y.default.createElement("div",{className:g},y.default.createElement(T.default,null),f&&y.default.createElement(M.default,null),y.default.createElement("div",{id:"preview-content-container",className:"preview-content-container"},y.default.createElement(E.default,null),y.default.createElement(_.default,null),y.default.createElement(k.default,null),y.default.createElement(C.default,null)),v||B.isUIChina()&&y.default.createElement("a",{className:"powered-by",href:"/",target:"_blank"},
y.default.createElement("img",{className:"zh",src:"/images/preview/watermark_zh.svg",alt:F.preview.powered_by_modao}),y.default.createElement("img",{className:"en",src:"/images/preview/watermark_en.svg",alt:F.preview.powered_by_modao})),y.default.createElement(H,{isActive:m,onClick:this.handleClick}),p&&y.default.createElement(O.default,null),y.default.createElement(P.default,null),y.default.createElement(w.default,null),y.default.createElement(S.default,{dispatch:l}),y.default.createElement(
b.TooltipGlobalStyle,null),y.default.createElement(j.default,{toastList:i}),y.default.createElement(I.default,{popupList:o}))}}]),a}(y.Component);(0,o.default)(W,"propTypes",{isLite:f.default.bool,project:f.default.object,previewSetting:f.default.object,isProjectFromOtherFreeUser:f.default.bool,toastList:f.default.array,popupList:f.default.array,dispatch:f.default.func})
var H=function(e){var t=e.isActive,r=e.onClick
return t?y.default.createElement("div",{className:"download-client-tip"},y.default.createElement(h.default,{type:"fa",name:"info-circle",className:"download-client-tip-icon"}),y.default.createElement("span",{className:"download-text"},y.default.createElement("a",{href:"/downloads",rel:"noopener noreferrer",target:"_blank"},F.preview.client_load_a)," ",F.preview.client_load_tip),y.default.createElement(h.default,{type:"dora",name:"times_fc",className:"download-client-close-icon",onClick:r})):null}
H.propTypes={isActive:f.default.bool.isRequired,onClick:f.default.func.isRequired}
var Y="close_client_load_tip",z=function(){return!B.localStorageDelegate.getItem(Y)},X=function(){return B.localStorageDelegate.setItem(Y,"true")}},aYzi:function(e,t,r){"use strict"
var n=r("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var a=r("/MKj"),d=r("1iCU"),i=r("/5+U"),o=n(r("Zu+4")),f=(0,i.immutableTransformCache)(function(e,t){return e.find(function(e){return e.cid===t})}),l=(0,a.connect)(function(e){var t=e.model,r=t.current,n=t.projects,a=e.container,i=a.previewSetting,o=a.toastList,l=a.popupList,c=i.toolbarActiveItem,s=f(n,r.projectCid),u=MB.isMobile()||MB.isEmbedded()
return{isLayerActive:c===d.INSPECT,isCommentActive:c===d.COMMENT,previewSetting:i,isProjectFromOtherFreeUser:r.userId!==s.owner_id&&s.expired,isLite:u,project:s,toastList:o,popupList:l}})(o.default)
t.default=l},aqSL:function(e,t,r){"use strict"
var n=r("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var a=n(r("q1tI")),i=n(r("i8i4")),l=r("/MKj"),c=r("q3nj"),s=r("6x+O"),u=n(r("6ZRU")),o={containerReducerMap:c.reducerMap,sagaMap:c.sagaMap,extendCallback:function(o){o.renderPreview=function(e){var t=o.store
t.dispatch({type:"entry:init:preview:related:data"}),i.default.render(a.default.createElement(l.Provider,{store:t},a.default.createElement(c.PreviewContainer,null)),e)},o.renderPreviewAlert=function(){i.default.render(a.default.createElement(u.default.containers.Alert,{store:o.store}),(0,s.getModalElement)())},o.pushData=function(e,t,r){o.store.dispatch({type:"entry:state:push-data",payload:{pushType:e,action:t,data:r}})},o.checkLocationHash=function(){var e=window.location.hash||"",t=o.store,r=t.getState,
n=t.dispatch
if(e.startsWith("#thread=")){var a=e.substr("#thread=".length),i=r().model.commentThreads.find(function(e){return e.cid===a})
if(!i)return console.warn("[checkLocationHash] missing commentThread: ".concat(a))
n({type:"entry:sync-runner:set-screen",payload:{cid:i.screen_cid}}),n({type:"entry:comment:set:active",payload:{isActive:!0}}),n({type:"container:comment:focus",payload:{focusCommentThreadCid:i.cid}})}},o.updateCurrentScreenRunner=function(e){if(!e)return console.warn("[updateCurrentScreenRunner] missing currentScreen")
o.store.dispatch({type:"entry:current:set-screen",payload:e}),window.location.hash="#screen=".concat(e.cid)}}}
t.default=o},aw2M:function(e,t,r){},bNtH:function(e,t,r){"use strict"
var n=r("284h"),a=r("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var i=a(r("lwsE")),o=a(r("W8MJ")),l=a(r("a1gu")),c=a(r("Nsbk")),s=a(r("PJYZ")),u=a(r("7W2i")),d=a(r("lSNA")),f=a(r("17x9")),v=n(r("q1tI")),g=r("S9rr"),p=function(e){function t(){var y
return(0,i.default)(this,t),y=(0,l.default)(this,(0,c.default)(t).call(this)),(0,d.default)((0,s.default)(y),"handleScroll",function(e){e.stopPropagation()
function r(e){var t=e.clientY,r=e.clientX,n="x"===a?r-i:t-o
n=n/(p-p/d[a]*p)*d[a],f("x"===a?{x:l-n,y:c}:{x:l,y:c-n})}var a=e.target.dataset.axis,i=e.clientX,o=e.clientY,t=y.props,n=t.canvasOffset,l=n.x,c=n.y,s=t.viewportHeight,u=t.viewportWidth,d=t.canvasRange,f=t.onScroll,p="x"===a?u:s
document.addEventListener("mousemove",r),document.addEventListener("mouseup",function e(t){document.removeEventListener("mousemove",r),document.removeEventListener("mouseup",e)})}),(0,d.default)((0,s.default)(y),"handleClickTrack",function(e){function t(){var e=v.getBoundingClientRect(),t=e.top,r=e.bottom,n=e.left,a=e.right,i=y.props.canvasOffset,o=i.x,l=i.y,c="x"===d?a<f:r<p,s="x"===d?f<n:p<t,u=(s?-1:c?1:0)*Math.min(m[d]/10,g);(c||s)&&h("x"===d?{x:o-u,y:l}:{x:o,y:l-u})}var d=e.target.dataset.axis,
f=e.clientX,p=e.clientY,r=y.props,h=r.onScroll,m=r.canvasRange,n=r.viewportHeight,a=r.viewportWidth,i=y.scrollbarX.getBoundingClientRect(),o=i.top,l=i.bottom,c=i.left,s=i.right,v="x"===d?y.scrollbarX:y.scrollbarY,g="x"===d?a:n;(("x"===d?s<f:l<p)||("x"===d?f<c:p<o))&&(v.style.transition="all 0.1s linear",t(),y.timer=setTimeout(function(){return y.timeInterval=setInterval(t,100)},500))
document.addEventListener("mouseup",function e(t){v.style.transition="",clearTimeout(y.timer),clearInterval(y.timeInterval),document.removeEventListener("mouseup",e)})}),y.setRefY=function(e){return y.scrollbarY=e},y.setRefX=function(e){return y.scrollbarX=e},y}return(0,u.default)(t,e),(0,o.default)(t,[{key:"render",value:function(){var e=this.props,t=e.canvasOffset,r=t.x,n=t.y,a=e.canvasRange,i=e.viewportWidth,o=e.viewportHeight,l=e.showRuler,c=i/a.x,s=(a.x/2-r)*(a.x-i)/(a.x*a.x)
s=Math.min(Math.max(s,0),(a.x-i)/a.x)
var u=o/a.y,d=(a.y/2-n)*(a.y-o)/(a.y*a.y)
d=Math.min(Math.max(d,0),(a.y-o)/a.y)
var f={width:"".concat(100*c,"%"),left:"".concat(100*s,"%")},p={height:"".concat(100*u,"%"),top:"".concat(100*d,"%")},h=l?null:{left:0},m=l?null:{top:0}
return v.default.createElement(g.StyledScrollBar,null,v.default.createElement("div",{"data-axis":"x",className:"track x-track",style:h,onMouseDown:this.handleClickTrack},v.default.createElement("div",{ref:this.setRefX,className:"handler","data-axis":"x",onMouseDown:this.handleScroll,style:f},v.default.createElement("div",{className:"thumb"}))),v.default.createElement("div",{"data-axis":"y",className:"track y-track",style:m,onMouseDown:this.handleClickTrack},v.default.createElement("div",{ref:this.setRefY,
className:"handler y-handler","data-axis":"y",onMouseDown:this.handleScroll,style:p},v.default.createElement("div",{className:"thumb"}))))}}]),t}(v.PureComponent)
t.default=p,(0,d.default)(p,"propTypes",{canvasOffset:f.default.object,canvasRange:f.default.object,viewportWidth:f.default.number,viewportHeight:f.default.number,showRuler:f.default.bool,onScroll:f.default.func}),(0,d.default)(p,"defaultProps",{showRuler:!1})},bTYh:function(e,t,r){},bekf:function(e,t,r){"use strict"
var n=r("284h"),a=r("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.CodeBox=void 0
var o=a(r("J4zp")),l=a(r("lwsE")),c=a(r("W8MJ")),s=a(r("a1gu")),u=a(r("Nsbk")),d=a(r("PJYZ")),f=a(r("7W2i")),p=a(r("lSNA")),h=n(r("q1tI")),i=a(r("17x9")),m=r("RUem"),v=r("qOCw"),g=function(e){function i(){var e,a;(0,l.default)(this,i)
for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n]
return a=(0,s.default)(this,(e=(0,u.default)(i)).call.apply(e,[this].concat(r))),(0,p.default)((0,d.default)(a),"renderCode",function(e){return{px:a.renderCss,dp:a.renderAndroidCode,pt:a.renderIos}[(0,v.selectWithlanguageUnit)(e)]()}),(0,p.default)((0,d.default)(a),"renderIos",function(){var e=a.props,t=e.code,r=e.language,n=e.text
return h.default.createElement(b,{code:t,language:r,text:n})}),(0,p.default)((0,d.default)(a),"renderCss",function(){var e=a.props,t=e.code,r=e.language
return h.default.createElement(y,{language:r,code:t})}),(0,p.default)((0,d.default)(a),"renderAndroidCode",function(){var e=a.props,t=e.whichAndView,r=e.code,n=e.text
return h.default.createElement(S,{code:r,text:n,whichAndView:t})}),a}return(0,f.default)(i,e),(0,c.default)(i,[{key:"render",value:function(){var e=this.props.language
return h.default.createElement(m.WrapComponent,null,h.default.createElement("div",null,e.toUpperCase(),h.default.createElement(m.CopyBtn,{text:"#code-content"})),h.default.createElement("div",{className:"code-content",id:"code-content"},this.renderCode(e)))}}]),i}(h.PureComponent)
t.CodeBox=g,(0,p.default)(g,"propTypes",{code:i.default.object,whichAndView:i.default.string,language:i.default.string,text:i.default.string})
var y=function(e){var t=e.language,r=e.code,a=w(t),i=E(t),n=k(r)
return Object.entries(n).map(function(e){var t=(0,o.default)(e,2),r=t[0],n=t[1]
return h.default.createElement("div",{key:r},"".concat(r).concat(i).concat(n).concat(a))})}
y.propTypes={code:i.default.object.isRequired,language:i.default.string}
var b=function(e){var t=e.code,r=e.text
return C({code:t,text:r}).map(function(e){return h.default.createElement("div",{key:e},e)})}
b.propTypes={code:i.default.object.isRequired,text:i.default.string}
var S=function(e){var t=e.code,r=e.text,n=e.whichAndView
return h.default.createElement("div",null,h.default.createElement("div",{className:"highlight-row"},"<".concat(n)),Object.entries(t).map(function(e){var t=(0,o.default)(e,2),r=t[0],n=t[1]
return h.default.createElement("div",{key:r},"android:".concat(r,'="').concat(n,'"'))}),0<r.length&&h.default.createElement("div",null,'android:text="'.concat(r,'"')),h.default.createElement("div",{className:"highlight-row"},"/>"))}
S.propTypes={code:i.default.object.isRequired,text:i.default.string,whichAndView:i.default.string}
var w=function(e){switch(e){case"stylus":case"sass":return""
default:return";"}},E=function(e){switch(e){case"stylus":return" "
default:return": "}},C=function(e){var t=e.code,r=e.text,n=t.width,a=t.height,i=t.x,o=t.y,l=t.fontFamily,c=t.cornerRadius,s=t.fontSize,u=t.opacity,d=t.borderWidth,f=t.borderColor,p=t.alignment,h=t.backgroundColor,m=r?"textLayer":"layer",v=r?"UILabel":"UIView",g=[]
return g.push("let ".concat(m," = ").concat(v,"(frame: CGRect(x: ").concat(i,", y:").concat(o,", width: ").concat(n,", height: ").concat(a,"))")),h&&g.push("".concat(m,".backgroundColor = ").concat(h)),u&&g.push("".concat(m,".alpha = ").concat(u)),c&&g.push("layer.layer.cornerRadius = ".concat(c)),d&&g.push("layer.layer.borderWidth = ".concat(d)),f&&g.push("layer.layer.borderColor = ".concat(f,".cgColor")),r&&(g.push('let textContent = "'.concat(r,'"')),g.push(
'let textString = NSMutableAttributedString(string: textContent, attributes: [\n      NSAttributedStringKey.font: UIFont(name: "'.concat(l,'", size: ').concat(s,")!\n      ])")),g.push("let textRange = NSRange(location:0, length: textString.length)"),g.push("let paragraphStyle = NSMutableParagraphStyle()"),g.push("paragraphStyle.alignment = .".concat(p)),g.push("textString.addAttribute(NSAttributedStringKey.paragraphStyle, value: paragraphStyle, range: textRange)"),g.push(
"textLayer.attributedText = textString")),g},k=function(e){if(e["border-color"]&&e["border-width"]){var t={border:"".concat(e["border-width"]," solid ").concat(e["border-color"])}
return delete e["border-color"],delete e["border-width"],Object.assign(e,t)}return e}},cQH5:function(e,t,r){"use strict"
var n=r("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var a=n(r("lSNA")),i=n(r("4vJh")),o=n(r("FJlG")),l=n(r("vRqJ")),c=n(r("FYsW")),s=r("80la"),u=r("oose"),d=r("tBsX"),f=n(r("4x8W")),p=n(r("qTnY")),h=n(r("G1Xk")),m=n(r("6ZRU"))
function v(t,e){var r=Object.keys(t)
if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t)
e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)}return r}function g(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{}
e%2?v(r,!0).forEach(function(e){(0,a.default)(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):v(r).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}var y={isSpaceDown:!1},b={offset:{x:0,y:0},scale:100,keyFlags:y,viewport:{width:0,height:0},preference:{}}
var S={toastList:p.default,popupList:h.default,alert:m.default.reducers,common:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:b,t=1<arguments.length?arguments[1]:void 0,r=t.type,n=t.payload
switch(r){case"preview:update:state":return g({},e,{},n)
case"preview:set:canvas:offset":return g({},e,{offset:n.offset})
case"preview:set:scale":return g({},e,{scale:n.scale})
case"preview:set:key:flags":return g({},e,{keyFlags:g({},y,{},n)})
case"preview:reset:key:flags":return g({},e,{keyFlags:y})
case"preview:scrollbar:viewport":return g({},e,{viewport:n})
default:return e}},comment:u.reducer,layers:d.reducers,slices:s.reducer,screens:i.default,artboards:l.default,previewSetting:o.default,eventSignUpModal:f.default,runner:c.default}
t.default=S},ctY3:function(e,t,r){"use strict"
var n=r("284h"),a=r("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var o=a(r("lwsE")),l=a(r("W8MJ")),c=a(r("a1gu")),s=a(r("Nsbk")),u=a(r("PJYZ")),d=a(r("7W2i")),f=a(r("lSNA")),i=a(r("17x9")),p=n(r("q1tI")),h=a(r("OVdA")),m=a(r("UbMB")).default.bind(h.default),v=function(e){function i(){var e,t;(0,o.default)(this,i)
for(var r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a]
return t=(0,c.default)(this,(e=(0,s.default)(i)).call.apply(e,[this].concat(n))),(0,f.default)((0,u.default)(t),"setElementRef",function(e){return t.textarea=e}),(0,f.default)((0,u.default)(t),"handleFocus",function(){t.props.onFocus()}),(0,f.default)((0,u.default)(t),"handleChange",function(e){(0,t.props.onChange)(e.target.value)}),(0,f.default)((0,u.default)(t),"handleBlur",function(){t.props.onBlur()}),(0,f.default)((0,u.default)(t),"handleKeyDown",function(e){"Enter"===e.key?(e.preventDefault(),
t.handleBlur()):"Escape"===e.key&&(t.props.onChange(t.cacheValue),t.cacheValue=null,t.handleBlur())}),t}return(0,d.default)(i,e),(0,l.default)(i,[{key:"componentDidMount",value:function(){this.props.editing&&(this.cacheValue=this.props.value,this.textarea.select())}},{key:"componentDidUpdate",value:function(e,t){!e.editing&&this.props.editing&&(this.cacheValue=this.props.value,this.textarea.select())}},{key:"handleStopPropagation",value:function(e){e.stopPropagation()}},{key:"render",value:function(){
var e=this.props,t=e.editing,r=e.value,n=e.className
return t?p.default.createElement("div",{className:m("text-wrapper",n),onClick:this.handleStopPropagation},p.default.createElement("textarea",{ref:this.setElementRef,value:r,onFocus:this.handleFocus,onChange:this.handleChange,onBlur:this.handleBlur,onKeyDown:this.handleKeyDown})):p.default.createElement("span",{className:m("text-no-editing",n)},r)}}]),i}(p.PureComponent);(t.default=v).propTypes={editing:i.default.bool,value:i.default.string,className:i.default.string,onFocus:i.default.func,
onBlur:i.default.func,onChange:i.default.func},v.defaultProps={onFocus:function(){},onChange:function(){}}},d89S:function(e,t,r){"use strict"
var n=r("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var a=n(r("lSNA")),i=r("/MKj"),b=n(r("J2m7")),o=n(r("KHYK"))
function l(t,e){var r=Object.keys(t)
if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t)
e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)}return r}var c=(0,i.connect)(function(e){return function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{}
e%2?l(r,!0).forEach(function(e){(0,a.default)(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(r).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}({},function(e){var t,r,n,a=e.container,i=a.layers,o=i.resourceByScreen,l=i.visibilityScreenID,c=i.activeLayerID,s=i.enteredLayerID,u=a.previewSetting,d=u.ratio,f=u.unit,p=e.model,h=p.current.screenCid,m=p.screens,v=o[l],g=!1,y=f
return v&&(t=(0,b.default)(v.layers,function(e){return e.id===c}),r=(0,b.default)(v.layers,function(e){return e.id===s}),t&&r&&r.id!==t.id&&(g=!0,n=m.find(function(e){return e.cid===h}))),{show:g,ratio:d,distanceUnit:y,selectedLayer:t,hoveringLayer:r,screen:n}}(e))})(o.default)
t.default=c},dAiO:function(e,t,r){},"dYO+":function(e,t,r){"use strict"
var n=r("284h"),a=r("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var d=a(r("J4zp")),i=a(r("lwsE")),o=a(r("W8MJ")),l=a(r("a1gu")),c=a(r("Nsbk")),s=a(r("7W2i")),u=a(r("17x9")),f=n(r("q1tI")),p=r("Gbs1"),h=a(r("An9T")),m=function(e){function t(){return(0,i.default)(this,t),(0,l.default)(this,(0,c.default)(t).apply(this,arguments))}return(0,s.default)(t,e),(0,o.default)(t,[{key:"render",value:function(){var e=this.props,t=e.project,r=e.shellType,n=function(e,t,r){switch(e){case"device":var n=(0,p.getProjectShell)(t,e)
if(!n.bg)return null
var a=r?"".concat(n.bg,"_land"):n.bg,i=r?[-n.left,-n.top,n.height,n.width]:[-n.top,-n.left,n.width,n.height],o=(0,d.default)(i,4),l=o[0],c=o[1],s=o[2],u=o[3]
return{top:l,left:c,width:s,height:u,backgroundImage:"url(".concat(MB.isHTMLZip()?".":"","/images/devices/").concat(a,".png)")}
case"default":case"none":return null}}(r,t,e.isLandscape),a="device"===r&&null===n?"none":r
return f.default.createElement("div",{className:"".concat(h.default.shell," ").concat(a),style:n})}}]),t}(f.PureComponent);(t.default=m).propTypes={project:u.default.object,shellType:u.default.string,isLandscape:u.default.bool}},dZ9F:function(e,t,r){"use strict"
var n=r("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
function a(e){var t=e.value,r=e.ratio,n=e.valueRatio,a=e.unit,i=e.style,o=e.className,l=e.customClassName,c=(0,u.adapterScreen)(t,r)
return s.default.createElement("div",{style:i,className:"".concat(o," ").concat(l)},"".concat(Math.round(c*n)).concat(a))}var s=n(r("q1tI")),i=n(r("17x9")),o=n(r("vOnD")),u=r("/5+U"),l=(0,o.default)(a).withConfig({displayName:"MarkLabel__StyledMarkValue",componentId:"sc-1b6nimd-0"})(["padding:0 5px;color:#fff;background-color:#ff7100;border-radius:2px;"])
a.propTypes={value:i.default.oneOfType([i.default.string,i.default.number]),ratio:i.default.number,valueRatio:i.default.number,unit:i.default.string,style:i.default.object,className:i.default.string,customClassName:i.default.string}
var c=l
t.default=c},dhJN:function(e,t,r){"use strict"
var n=r("284h"),a=r("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var i=a(r("lwsE")),o=a(r("W8MJ")),l=a(r("a1gu")),c=a(r("Nsbk")),s=a(r("PJYZ")),u=a(r("7W2i")),d=a(r("lSNA")),f=a(r("17x9")),p=n(r("q1tI")),h=a(r("43RC")),m=a(r("6gQ3")),v=a(r("zgSj")),g=r("oose"),y=r("1iCU"),b=r("fcSx"),S=function(e){function t(e){var r
return(0,i.default)(this,t),r=(0,l.default)(this,(0,c.default)(t).call(this,e)),(0,d.default)((0,s.default)(r),"toggleMinimized",function(e){var t=r.props.toolbarActiveItem
r.setState({isMinimized:e}),MB.event("preview","".concat(y.TOOLBAR_TRAKING_CONFIG[t],",点击了").concat(e?"收起":"展开","列表"))}),r.state={isMinimized:MB.isUIChina()||MB.isForum()},r}return(0,u.default)(t,e),(0,o.default)(t,[{key:"render",value:function(){var e=this.props,t=e.isLayerPanelShow,r=e.isCommentPanelShow,n=e.isScreenPanelShow,a=this.state.isMinimized
if(!(t||r||n))return null
var i=n?240:260
return p.default.createElement(b.StyledLeftPane,{id:"mb-preview-leftpane",style:{width:a?0:i}},n&&p.default.createElement(p.default.Fragment,null,p.default.createElement("div",{className:"preview-panel-wrapper"},p.default.createElement(m.default,null)),p.default.createElement(h.default,{placement:"right",isMinimized:a,onClick:this.toggleMinimized})),t&&p.default.createElement(v.default,null),r&&p.default.createElement(g.CommentContainer,null))}}]),t}(p.PureComponent)
t.default=S,(0,d.default)(S,"propTypes",{toolbarActiveItem:f.default.string,isScreenPanelShow:f.default.bool,isLayerPanelShow:f.default.bool,isCommentPanelShow:f.default.bool})},dppN:function(e,t,r){},eNKG:function(e,t,r){"use strict"
var n=r("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.visibilityScreenID=o,t.resourceByScreen=c,t.default=void 0
var a=n(r("lSNA")),i=r("JfQ8")
function o(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"-1",t=1<arguments.length?arguments[1]:void 0
switch(t.type){case i.SET_VISIBILITY_SCREEN:return t.payload.screenID
default:return e}}var l={"-1":{isFetching:!1,layers:[],error:""}}
function c(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:l,t=1<arguments.length?arguments[1]:void 0
switch(t.type){case i.RECEIVE_RESOURCE_SUCCESS:case i.RECEIVE_RESOURCE_ERROR:return Object.assign({},e,(0,a.default)({},t.payload.screenID,function(e,t){var r=0<arguments.length&&void 0!==e?e:{isFetching:!1,layers:[],error:""},n=1<arguments.length?t:void 0
switch(n.type){case i.RECEIVE_RESOURCE_SUCCESS:return Object.assign({},r,{isFetching:!1,layers:n.payload.layers,error:void 0,artboard:n.payload.artboard,documentColor:n.payload.document_colors,globalColor:n.payload.global_colors,globalText:n.payload.text_styles})
case i.RECEIVE_RESOURCE_ERROR:return Object.assign({},r,{isFetching:!1,layers:[],error:n.payload.error})
default:return r}}(e[t.payload],t)))
case"container:layers:clear":return l
default:return e}}var s={visibilityScreenID:o,resourceByScreen:c}
t.default=s},ee4a:function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var n=r("Kkl0"),a=r("JfQ8")
var i={selectedLayerID:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:-1,t=1<arguments.length?arguments[1]:void 0
switch(t.type){case n.SELECT_LAYER:return t.payload.layerID===e?-1:t.payload.layerID
case a.SET_VISIBILITY_SCREEN:return-1
default:return e}},activeLayerID:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:-1,t=1<arguments.length?arguments[1]:void 0
switch(t.type){case n.ACTIVATE_LAYER:return t.payload.layerID
case a.SET_VISIBILITY_SCREEN:return-1
default:return e}},enteredLayerID:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:-1,t=1<arguments.length?arguments[1]:void 0
switch(t.type){case n.ENTER_LAYER:return t.payload.layerID
default:return e}}}
t.default=i},f7BV:function(e,t,r){"use strict"
var n=r("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var i=n(r("lwsE")),o=n(r("W8MJ")),a=function(){function e(){(0,i.default)(this,e),this.timeoutMap=new Map}function t(e,t){return r.apply(this,arguments)}var r,n
function a(e,t,r){return n.apply(this,arguments)}return(0,o.default)(e,[{key:"setTimeout",value:(n=function(e,t,r){var n=this,a=setTimeout(function(){t(),n.clearTimeout(e,t)},r)
return this.setToken(e,t,a),a},a.toString=function(){return n.toString()},a)},{key:"clearTimeout",value:(r=function(e,t){var r=this.getToken(e,t)
void 0!==r&&(clearTimeout(r),this.clearToken(e,t))},t.toString=function(){return r.toString()},t)},{key:"clearTimeoutByKey",value:function(r){var n=this,e=this.timeoutMap.get(r)
void 0!==e&&(e.forEach(function(e,t){return n.clearTimeout(r,t)}),this.timeoutMap.delete(r))}},{key:"clear",value:function(){var r=this
this.timeoutMap.forEach(function(e,t){return r.clearTimeoutByKey(t)})}},{key:"setToken",value:function(e,t,r){var n=this.timeoutMap.get(e)
void 0===n&&(n=new Map,this.timeoutMap.set(e,n)),n.set(t,r)}},{key:"getToken",value:function(e,t){var r=this.timeoutMap.get(e)
if(r)return r.get(t)}},{key:"clearToken",value:function(e,t){var r=this.timeoutMap.get(e)
r&&r.delete(t)}}]),e}()
t.default=a},fSKh:function(e,t,r){},fcSx:function(e,t,r){"use strict"
var n=r("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.StyledLeftPane=void 0
var a=n(r("vOnD")).default.div.withConfig({displayName:"styles__StyledLeftPane",componentId:"uzp97l-0"})(["position:relative;height:100%;transition:all 0.3s ease-in-out;z-index:100;.preview-panel-wrapper{position:absolute;top:0;right:0;height:100%;}"])
t.StyledLeftPane=a},fiFu:function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.getUserAuthStatus=t.USER_AUTH_STATUS_MEMBER=t.USER_AUTH_STATUS_NOT_MEMBER=t.USER_AUTH_STATUS_NOT_SIGN_IN=t.getCommentPermission=t.muteEvent=t.MUTE_EVENT=void 0
function n(e){e&&e.preventDefault(),e&&e.stopPropagation()}t.MUTE_EVENT=n
t.muteEvent=function(t){return function(e){return n(e),t&&t(e)}}
var i=[0,1,2,3,4,5,6,7].map(function(e){return{create:!!(1&e),update:!!(2&e),delete:!!(4&e)}})
t.getCommentPermission=function(e,t,r,n){var a=e&&(3<arguments.length&&void 0!==n?n:"INVALID_ID_1")===(2<arguments.length&&void 0!==r?r:"INVALID_ID_0")
return i[(e?1:0)+(a?2:0)+(a||t?4:0)]}
var a="NOT_SIGN_IN"
t.USER_AUTH_STATUS_NOT_SIGN_IN=a
var o="NOT_MEMBER"
t.USER_AUTH_STATUS_NOT_MEMBER=o
t.USER_AUTH_STATUS_MEMBER="MEMBER"
t.getUserAuthStatus=function(t,e){var r=1<arguments.length&&void 0!==e?e:[]
return(t=t&&String(t))?r.some(function(e){return e.user_id===t})?"MEMBER":o:a}},flWF:function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
function n(i,o){return s(function(e,t,r){var n=t.dispatch,a=r&&r.payload
n({type:"reducer:widgets:update",payload:i(e,a,o)})})}var a=r("WVP6"),i=r("Ehhz").MODEL_OPERATION_MAP.Widget,o=(0,a.createStateStore)([]),l=o.getState,c=o.setState,s=o.wrapEntry,u={entryMap:{"widgets:refresh":n(i.refreshStateList,!1),"widgets:add":n(i.addState,!1),"widgets:add-local":n(i.addState,!0),"widgets:update":n(i.updateState,!1),"widgets:update-local":n(i.updateState,!0),"widgets:delete":n(i.deleteState,!1),"widgets:delete-local":n(i.deleteState,!0)},getState:l,setState:c}
t.default=u},foKU:function(e,t,r){"use strict"
var n=r("284h"),a=r("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var l=a(r("pVnL")),c=a(r("QILm")),i=a(r("lwsE")),o=a(r("W8MJ")),s=a(r("a1gu")),u=a(r("Nsbk")),d=a(r("PJYZ")),f=a(r("7W2i")),p=a(r("lSNA")),h=a(r("17x9")),m=n(r("q1tI")),v=MB.config.SCALES[0],g=MB.config.SCALES[MB.config.SCALES.length-1],y=function(e){function a(){var e,m;(0,i.default)(this,a)
for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n]
return m=(0,s.default)(this,(e=(0,u.default)(a)).call.apply(e,[this].concat(r))),(0,p.default)((0,d.default)(m),"setElementRef",function(e){return m.$elem=e}),(0,p.default)((0,d.default)(m),"handleWheel",function(e){e.preventDefault()
var t=m.props,r=t.x,n=t.y,a=t.scale,i=t.isDisabled,o=t.onOffsetChange
if(!i){var l=Math.max(-1,Math.min(e.deltaY,1))
if(e.ctrlKey||e.metaKey){var c=m.$elem.getBoundingClientRect(),s=c.top,u=(c.left+c.right)/2,d=(s+c.bottom)/2,f=a<=100?a-5*l:a-a*l*.05,p=e.pageX-u,h=e.pageY-d
m.handleZoom(f,p,h)}else o(r-e.deltaX,n-e.deltaY)}}),m}return(0,f.default)(a,e),(0,o.default)(a,[{key:"componentDidMount",value:function(){this.$elem.addEventListener("wheel",this.handleWheel,{passive:!1})}},{key:"componentWillUnmount",value:function(){this.$elem.removeEventListener("wheel",this.handleWheel,{passive:!1})}},{key:"handleZoom",value:function(e,t,r){var n=this.props,a=n.x,i=n.y,o=n.scale,l=n.onOffsetChange,c=n.onScaleChange,s=(e=Math.min(Math.max(e,v),g))/o
1!=s&&(l(t+s*(a-t),r+s*(i-r)),c(e))}},{key:"render",value:function(){var e=this.props,t=e.x,r=e.y,n=e.scale,a=e.children,i=(e.onOffsetChange,e.onScaleChange,e.isDisabled),o=(0,c.default)(e,["x","y","scale","children","onOffsetChange","onScaleChange","isDisabled"])
return m.default.createElement("div",(0,l.default)({},o,{ref:this.setElementRef}),a.map(function(e){return"function"==typeof e?e(t,r,n,i):e}))}}]),a}(m.PureComponent)
t.default=y,(0,p.default)(y,"propTypes",{x:h.default.number,y:h.default.number,isDisabled:h.default.bool,scale:h.default.number,children:h.default.array,onScaleChange:h.default.func,onOffsetChange:h.default.func})},gSgL:function(e,t,r){"use strict"
var n=r("284h"),a=r("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.SliceContainer=void 0
var c=a(r("o0o1")),o=a(r("yXPU")),l=a(r("lwsE")),i=a(r("W8MJ")),s=a(r("a1gu")),u=a(r("Nsbk")),d=a(r("PJYZ")),f=a(r("7W2i")),p=a(r("lSNA")),h=a(r("17x9")),m=n(r("q1tI")),v=r("/MKj"),g=a(r("sEfC")),y=r("wYtL"),b=a(r("i6OX")),S=r("rbsZ"),w=a(r("prTy")),E=a(r("UbMB")),C=a(r("2s0x")),k=r("/5+U"),_=r("Nu6V"),x=r("upRB"),T=E.default.bind(C.default),P=function(e){function t(e){var i
return(0,l.default)(this,t),i=(0,s.default)(this,(0,u.default)(t).call(this,e)),(0,p.default)((0,d.default)(i),"handleActiveLayer",function(e){i.setState({activeLayerId:e})}),(0,p.default)((0,d.default)(i),"downloadSlice",(0,o.default)(c.default.mark(function e(){var t,r,n,a
return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=i.props,r=t.currentArtboardId,n=t.projectName,a=t.isLogin,MB&&MB.currentProject&&!MB.currentProject.limitation.inspectable)return(0,S.openRenewModal)("inspectable"),e.abrupt("return")
e.next=4
break
case 4:if(a){e.next=6
break}return e.abrupt("return")
case 6:return i.setState({isDownloading:!0}),e.next=9,D(r,n)
case 9:i.setState({isDownloading:!1})
case 10:case"end":return e.stop()}},e)}))),(0,p.default)((0,d.default)(i),"requestLayer",function(e){var t=i.props.dispatch
t({type:"REQUEST_SELECT_LAYER",payload:{layerID:e}}),t({type:"reducer:preview-toolbar:update",payload:{isSelectLayer:!0}})}),i.state={isDownloading:!1,activeLayerId:null},i}return(0,f.default)(t,e),(0,i.default)(t,[{key:"componentDidMount",value:function(){this.props.dispatch({type:"reducer:slice:init"})}},{key:"componentDidUpdate",value:function(e,t,r){var n=this.props,a=n.currentArtboardId,i=n.dispatch
a!==e.currentArtboardId&&i({type:"reducer:slice:init"})}},{key:"render",value:function(){var o=this,e=this.state,t=e.isDownloading,l=e.activeLayerId,r=this.props,n=r.slicesMap,a=r.loading,i=r.error,c=r.currentArtboardId,s=r.isLogin
return i||a?m.default.createElement(N,null):0===n.length?m.default.createElement(R,null):m.default.createElement("div",{className:T("slice-container")},n.map(function(e){var t=e.name,r=e.id,n=e.artboard_id,a=e.image,i=e.image_set
return m.default.createElement(M,{key:r,src:a,name:t,currentArtboardId:c,id:r,imageSet:i,artboardId:n,requestLayer:o.requestLayer,activeLayer:o.handleActiveLayer,activeLayerId:l})}),m.default.createElement(O,{onClick:this.downloadSlice,isLoading:t,isLogin:s}))}}]),t}(m.PureComponent)
P.propTypes={slicesMap:h.default.array.isRequired,loading:h.default.bool,error:h.default.bool,currentArtboardId:h.default.string,isLogin:h.default.bool,projectCid:h.default.string,projectName:h.default.string,dispatch:h.default.func}
var M=function(e){function t(){var n
return(0,l.default)(this,t),n=(0,s.default)(this,(0,u.default)(t).call(this)),(0,p.default)((0,d.default)(n),"isIncurrentScreen",function(){return n.props.artboardId===n.props.currentArtboardId}),(0,p.default)((0,d.default)(n),"handleClick",function(){var e=n.props,t=e.id,r=e.requestLayer;(0,e.activeLayer)(t),n.isIncurrentScreen()?r(t):console.warn("Not in current Screen")}),(0,p.default)((0,d.default)(n),"handleOnload",function(){n.setState({imageLoad:!0})}),(0,p.default)((0,d.default)(n),"handleError",
function(){throw new Error("image load fail")}),(0,p.default)((0,d.default)(n),"handleMouseEnter",function(){n.setState({loadSingleSlice:!0})}),(0,p.default)((0,d.default)(n),"handleMouseLeave",function(){n.setState({loadSingleSlice:!1})}),(0,p.default)((0,d.default)(n),"handleSingleDownload",function(e){e.persist(),e.stopPropagation(),MB&&MB.currentProject&&!MB.currentProject.limitation.inspectable?(0,S.openRenewModal)("inspectable"):n.delaySingleDownload()}),n.state={imageLoad:!1,loadSingleSlice:!1},
n.imageRef=function(e){return n.$image=e},n.delaySingleDownload=(0,g.default)(function(){var e=n.props,t=e.imageSet,r=e.name;(0,k.downloadWithATag)({url:t,name:r,type:"zip"}),MB.event("preview","在切图列表中下载单张切图")},500,{leading:!0}),n}return(0,f.default)(t,e),(0,i.default)(t,[{key:"render",value:function(){var e=this.props,t=e.name,r=e.src,n=e.activeLayerId,a=e.id,i=this.state,o=i.imageLoad,l=i.loadSingleSlice,c=o?"opacity-1":"opacity-0",s={display:o?"block":"none"},u=T("slice-item",{active:n===a})
return m.default.createElement(y.Tooltip,{type:"block",content:{click:this.isIncurrentScreen()?null:I18N.preview_panel.not_incurrent_screen}},m.default.createElement("div",{className:u,onClick:this.handleClick,onMouseEnter:this.handleMouseEnter,onMouseLeave:this.handleMouseLeave},m.default.createElement("div",{className:"slice-item-wrap",style:{background:"url(/images/preview/slice-bg.png) left top",backgroundSize:"cover"}},!o&&m.default.createElement("img",{src:"/images/preview/image-load-gif.gif",
alt:"Loading..."}),m.default.createElement(w.default,{style:s,src:r,alt:t,adjustImage:38,className:"".concat(c),onLoad:this.handleOnload,onError:this.handleError})),m.default.createElement("div",{className:"slice-item-content"},m.default.createElement("span",{className:"slice-item-name textEllipsis"},t),l&&m.default.createElement(b.default,{name:"export",type:"dora",onClick:this.handleSingleDownload}))))}}]),t}(m.PureComponent)
M.propTypes={name:h.default.string,src:h.default.string.isRequired,id:h.default.number.isRequired,imageSet:h.default.string.isRequired,currentArtboardId:h.default.string.isRequired,requestLayer:h.default.func.isRequired,activeLayer:h.default.func,activeLayerId:h.default.number,artboardId:h.default.string.isRequired}
var O=function(e){var t=e.onClick,r=e.isLoading,n=e.isLogin?null:I18N.preview.guide_login
return m.default.createElement(y.Tooltip,{content:{click:n},type:"block",position:"top",arrowed:!1,className:T("download"),onClick:t},I18N.preview_panel.download,r?m.default.createElement(I,null):m.default.createElement(b.default,{type:"dora",name:"export",className:T("icon-download")}))}
O.propTypes={onClick:h.default.func,isLoading:h.default.bool,isLogin:h.default.bool}
function j(){return m.default.createElement("div",{className:T("layer-load")},m.default.createElement("span",{className:T("spinner")}))}var I=function(){return m.default.createElement("div",{className:T("download-slice-load")},m.default.createElement(j,null))},N=function(){return m.default.createElement("div",{className:T("slice-load-wrap")},m.default.createElement(j,null))},R=function(){return m.default.createElement("div",{className:T("no-slice")},m.default.createElement("img",{
src:"/images/preview/no-slice@2x.png"}),m.default.createElement("span",null,I18N.preview_panel.no_slice),m.default.createElement("span",null,I18N.preview_panel.slice_in_sketch),m.default.createElement("a",{href:window.MBSketchPluginDownloadURL},m.default.createElement("img",{src:"/images/preview/ic_sketch@2x.png",alt:"sketch"}),I18N.preview_panel.download_sketch))},D=function(){var r=(0,o.default)(c.default.mark(function e(t,r){var n,a,i,o,l
return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n=!0,i=1
case 2:if(n)return e.next=5,(0,_.fetchSliceZip)(t)
e.next=20
break
case 5:if(o=e.sent,l=o.url,"ok"!==o.status){e.next=13
break}n=!1,a=l,e.next=15
break
case 13:return e.next=15,(0,k.setTimeoutAsync)(Math.min(2e3*i++,1e4))
case 15:if(20<i)return(0,k.downloadFail)(),e.abrupt("return",!1)
e.next=18
break
case 18:e.next=2
break
case 20:return(0,k.downloadWithATag)({url:"/".concat(a),name:r,type:"zip"}),e.abrupt("return",!0)
case 22:case"end":return e.stop()}},e)}))
return function(e,t){return r.apply(this,arguments)}}(),L=(0,v.connect)(function(e){var t=e.model,r=t.current.projectCid,n=t.user,a=e.container.slices,i=a.slices,o=a.loading,l=a.error,c=(0,x.getCurrentScreen)(e)
return{slicesMap:i,loading:o,error:l,isLogin:!!n.id,projectCid:r,currentArtboardId:c.artboard_id}})(P)
t.SliceContainer=L},gX9a:function(e,t,r){e.exports={"play-setting-menu":"_1FA8P7EgiQtr3ukFbj9cuo"}},gXld:function(e,t,r){"use strict"
var n=r("284h"),a=r("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var i=a(r("lwsE")),o=a(r("W8MJ")),l=a(r("a1gu")),c=a(r("Nsbk")),s=a(r("PJYZ")),u=a(r("7W2i")),d=a(r("lSNA")),f=a(r("17x9")),h=n(r("q1tI")),m=a(r("TSYQ")),v=r("i6OX"),g=a(r("ctY3")),p=r("6x+O"),y=r("Uu/L"),b=function(e){function t(){var a
return(0,i.default)(this,t),a=(0,l.default)(this,(0,c.default)(t).call(this)),(0,d.default)((0,s.default)(a),"setElementRef",function(e){return a.$elem=e}),(0,d.default)((0,s.default)(a),"handleExpand",function(e){a.props.handleScreenItemActions.handleExpand(e,a.props.screen)}),(0,d.default)((0,s.default)(a),"handleActivate",function(e){a.props.handleScreenItemActions.handleActivate(e,a.props.screen)}),(0,d.default)((0,s.default)(a),"handleDown",function(e){if(0===e.button){var t=a.props,r=t.screen,
n=t.handleScreenItemActions.handleDown
n&&n(e,r,a.$elem)}}),(0,d.default)((0,s.default)(a),"handleNameChange",function(e){var t=a.props,r=t.screen,n=t.handleScreenItemActions.handleNameChange
n&&n(e,r)}),(0,d.default)((0,s.default)(a),"handleEdit",function(){var e=a.props,t=e.screen,r=e.handleScreenItemActions.handleEdit
r&&r(t)}),(0,d.default)((0,s.default)(a),"handleBlur",function(){a.props.handleScreenItemActions.handleBlur(a.props.screen,a.isNewScreen),a.isNewScreen=!1}),a.isNewScreen=!1,a}return(0,u.default)(t,e),(0,o.default)(t,[{key:"componentDidMount",value:function(){if(this.props.isActive&&!(0,p.isVisible)(this.$elem)){var e=document.querySelector(".rn-content-body")
if(!e)return
var t=e.getBoundingClientRect(),r=this.$elem.getBoundingClientRect().bottom
e.scrollTop+=r-t.bottom+20}this.props.isEditing&&(this.isNewScreen=!0)}},{key:"stopPropagation",value:function(e){e.stopPropagation()}},{key:"render",value:function(){var e=this.props,t=e.screen,r=e.depth,n=e.isActive,a=e.isEditing,i=e.showExpander,o=e.renderItem,l=e.collapseKeySet,c=e.isLinked,s=e.hoverCid,u=14*(r+1),d=!l.has(t.cid),f=t.cid===s,p=d?"caret-down":"caret-right"
return h.default.createElement(y.StyledScreenItem,{type:"linkable",ref:this.setElementRef,"data-cid":t.cid,"data-link-target-cid":t.cid,onClick:this.handleActivate,onMouseDown:this.handleDown,onDoubleClick:this.handleEdit,style:{paddingLeft:u},className:(0,m.default)("rn-list-item",{active:n,linked:c,hover:f})},i&&h.default.createElement("a",{className:"expander",onClick:this.handleExpand,onDoubleClick:this.stopPropagation},h.default.createElement("i",{className:"fa fa-"+p})),h.default.createElement("div",{
className:"screen-name"},n?h.default.createElement(v.SVGIcon,{name:"design/screen_file"}):h.default.createElement(v.SVGIcon,{name:"design/file_o"}),h.default.createElement(g.default,{editing:a,className:"editable-span",value:MB.unescape(t.name),onChange:this.handleNameChange,onBlur:this.handleBlur})),!a&&o&&o(t))}}]),t}(h.PureComponent);(t.default=b).propTypes={depth:f.default.number,screen:f.default.object,isActive:f.default.bool,isEditing:f.default.bool,isLinked:f.default.bool,showExpander:f.default.bool,
hoverCid:f.default.string,renderItem:f.default.func,handleScreenItemActions:f.default.shape({handleEdit:f.default.func,handleExpand:f.default.func,handleActivate:f.default.func,handleBlur:f.default.func,handleDown:f.default.func,handleNameChange:f.default.func,setAttr:f.default.func}),collapseKeySet:f.default.object}},gY5R:function(e,t,r){"use strict"
var n=r("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
function o(e,a){var i={}
return Object.entries(e).forEach(function(e){var t=(0,c.default)(e,2),r=t[0],n=t[1]
Array.isArray(n)?i[r]=n[a]:"object"===(0,l.default)(n)?i[r]=o(n,a):i[r]=n}),i}var l=n(r("cDf5")),c=n(r("J4zp")),a=["#FF6161","#FF6161"],i=["#FFF","#F2F2F2","#000"],s=["#DEDEE4","#D9D9D9"],u=["#F2F2F2","#fff"],d=["#E8E8E8","#DBDBDB"],f={radioLine:{border:["2px solid #F2F2F2","1px solid #C8CDD0"],bg:["#F2F2F2","#F2F2F2"],border_color:["#F2F2F2","#C8CDD0"],active_bg:["#FFFFFF","#FCFCFC"]},workspaceTutorialPane:{bg:i,hover:["#f2f2f2","#e8e8e8"],shortcut:{kbd_bg:["#ededed","#fff"]}},fixedSlider:{bg:["#d9d9d9",
"#dbdbdb"]},slider:{bg:["#e7e9ea","#C8CDD0"]},linkback:{color:["#101010","#5B6B73"],border:["1px solid transparent","1px solid #d9d9d9"]},palette:{active_color:a,high_light_color:["#298DF8","#298DF8"],hr_color:s,panel_bg:i},toolbar:{height:56,shadow:["1px 0 6px 0 rgba(39, 54, 78, 0.12)","0 0 10px 0 rgba(0, 0, 0, 0.25)"],bg:["#FFF","#EDEDED","#000"],icon_disable_color:["#C8CDD0","#C8CDD0"],project_title_color:["#5B6B73","#5B6B73"],icon_color:["#7d8694","#5B6B73"],hover_icon_color:["#415058","#1F292E"],
active_icon_color:["#FF6161","#FF6161"],active_icon_bg:["#F2F2F2","#E8E8E8"],active_icon_border:["#E8E8E8","#DBDBDB"]},popups:{bg:i,bc:["#DBDBDB","#DEDEE4","#FFF"],header:{bg:["#F2F3F4","#DBDBDB"],tc:["#415058","#415058","#FFF"],icon_color:["#8D9EA7","#8D9EA7"],line_color:["#EDEDED","#E8E8E8"]},line:{label_color:["#1F292E","#1F292E","#1F292E"]},nav:{bg:i,border_color:s,active_border_color:a,label_color:["#415058","#415058"],label_active_color:["#525E71","#525E71"]},footer:{background:["#fff","#fff"],
icon_active_color:a}},panel:{bg:i,export_bar:{bg:["#F5F5F5","#EDEDED"],laber_color_bg:["#fff","#f2f2f2"],disabled_bg:["#fff","#f7f7f7"],disabled_border_color:["#f7f7f7","#f2f2f2"]},header:{bg:["#F2F3F4","#DBDBDB"]},nav:{active_bg:i,icon_color:["#5B6B73","#5B6B73"],icon_active_color:a}},draggablePanel:{bg:i,header:{bg:["#F2F3F4","#DBDBDB"]},layerItem:{bg:["#DBDBDB","#F2F2F2"]},input:{bg:u,border_color:d,border:["1px solid transparent","1px solid #DBDBDB"]},BorderRadius:{border_color:["#f2f2f3","#c8cdd1"]},
CheckBorder:{border_color:["#8d9ea6","#bacdd6"]},NumberInput:{bg:u,border_color:d,disabled_bg:["#F7F7F7","#fff"],disabled_border_color:["#F2F2F2","#e8e8e8"]},Select:{bg:u,border_color:d}},viewMode:{bg:["#E1E1E1","#E8E8E8"]},leftpane:{shadow:["0 2px 30px 0 rgba(213, 213, 213, 0.5)"],border_right:["","1px solid #C8CDD0"]},rightpane:{shadow:["0 -2px 30px 0 rgba(39,54,78,0.11)"]},subpanel:{border_top_color:["#dbdbdb","#D9D9D9"]},textarea:{bg:u,border_color:d},sidebar:{bg:i,divider_color:["#C8CDD0","#C8CDD0"],
icon_color:["#5B6B73","#5B6B73"],icon_hover_color:["#415058","#415058"],icon_active_color:a,icon_active_bg:["#F4F5F6","#F4F5F6"],icon_hover_bgcolor:["#f2f2f2","#E8E8E8"],icon_hover_border_color:["#E8E8E8","#DBDBDB"],border_right:["1px solid #DEDEE4","1px solid #C8CDD0"],border_left:["","1px solid #C8CDD0"]},leftnav:{bg:i,nav_icon_hover:["#FCFCFC","#EBEBEB"]},basicWidgets:{bg:i,border_color:["#DEDEE4","#c8cdd0"],icon_color:["#6C6D6E","#6C6D6E"],icon_hover_color:["#f2f2f2","#E8E8E8"],icon_hover_border_color:[
"#E8E8E8","#DBDBDB"]},ruler:{bgColor:["transparent","transparent"],longfgColor:["#BABBBC","#BABBBC"],shortfgColor:["#C8CDD0","#C8CDD0"],fontColor:["#8D9EA7","#8D9EA7"],shadowColor:["#E8E8E8","#E8E8E8"],lineColor:["#EB5648","#EB5648"],borderColor:["#DADADC","#DEDEE4"],cornerActiveColor:["rgb(235, 86, 72, 0.6)","rgb(235, 86, 72, 0.6)"]},screenContainer:{bg:["#F5F5F5","#f9f9f9","#000"]},scrollbar:{track:{bg:["transparent","transparent"]},thumb:{x_bg:["#D2D2D8","#BCBCBC"],y_bg:["#DEDEE4","#BCBCBC"],x_hover_bg:[
"#BEC3C5"],y_hover_bg:["#C8CDD0"]}},listItem:{tc:["#5B6B73","#415058"],hover:{tc:["#298DF8","#298DF8"],bc:["#E8E8E8","#D9D9D9"],bg:["#F7F7F7","#E8E8E8"]},expander_color:["#C8CDD0","#8D9EA7"],action_color:["#8D9EA7","#8D9EA7"],action_hover_color:["#5B6B73","#1F292E"],active:{bg:["#F2F2F2","#FFF"],tc:["#298DF8","#298DF8"],bc:["#EBEBEB","#EBEBEB"]}},thumbnail:{bg:["#F2F2F2","#EBEBEB"],border_color:["#EDEDED","#DBDBDB"]},preferenceBar:{bg:["#F5F5F5","#F9F9F9"],bc:["#E7E9EA","#DBDBDB"]},colorButton:{bg:[
"#F6F7F8","#FCFCFC"],border_color:["#F2F2F3","#DBDBDB"]},searchBar:{bg:u,border_color:d},interation:{hover:{border_color:["#1E98EA","#1E98EA"]},active:{border_color:["#1E98EA","#1E98EA"],box_shadow:["0 0 4px 0 rgba(34, 162, 237, 0.66)","0 0 4px 0 rgba(34, 162, 237, 0.66)"]}},noComponentImage:["url('/images/workspace/design/no_component_list_light.png')","url('/images/workspace/design/no_component_list_grey.png')"],carouselSettings:{assetBoxBg:["#f7f7f7","#ebebeb"],addAssetIconFill:["#c8cdd0","#8d9ea7"]},
linkSettings:{linkView:{detail_bg:["#f7f7f7","#fff"]},gesture:{bg:["#EBEBEB","#FFF"],border_color:["#EBEBEB","#FFF"],hover:{border_color:["#298DF8","#298DF8"]},active:{border_color:["#298DF8","#298DF8"]}},linkPanel:{bg:["#f7f7f7","#FFF"],divider:["#FFF","#f7f7f7"]}}},p={light:o(f,0),grey:o(f,1),dark:o(f,2)}
t.default=p},h0FN:function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.TIMER_DURATION_LIST=t.ANI_DURATION_LIST=t.TEMPLATE_TRANSITIONS=t.TRANSITIONS=void 0
var n=["leftmenu","rightmenu","leftdrawer","rightdrawer","slideright","slideleft","slidetop","slidebottom","slideleft2","slideright2","topin","popin","leftout","rightout","topout","popout"].map(function(e){return{value:e,label:I18N.tr[e]}}),a=(t.TRANSITIONS=n).filter(function(e){var t=e.value
return!/drawer|menu/.test(t)})
t.TEMPLATE_TRANSITIONS=a
t.ANI_DURATION_LIST=[{label:"0ms",value:"0ms"},"100ms","200ms","300ms","400ms","500ms","750ms","1000ms","2000ms","3000ms","4000ms","5000ms","6000ms","7000ms","8000ms","9000ms","10000ms"]
t.TIMER_DURATION_LIST=["100ms","200ms","300ms","400ms","500ms","750ms","1000ms","2000ms","3000ms","4000ms","5000ms","6000ms","7000ms","8000ms","9000ms","10000ms"]},h2Vm:function(e,t,r){"use strict"
var n=r("284h"),a=r("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var l=a(r("lwsE")),i=a(r("W8MJ")),c=a(r("a1gu")),s=a(r("Nsbk")),u=a(r("PJYZ")),d=a(r("7W2i")),f=a(r("lSNA")),p=n(r("q1tI")),o=a(r("17x9")),h=a(r("TSYQ")),m=n(r("i6OX")),v=a(r("81q6")),g=a(r("UUBB")),y=a(r("tfo6")),b=a(r("Mn07")),S=a(r("sEfC")),w=r("Hlt7"),E=r("1iCU"),C=r("pVAx"),k=a(r("naIL")),_=[{label:p.default.createElement(m.SVGIcon,{name:"design/list"}),value:"literal"},{label:p.default.createElement(m.SVGIcon,{name:"design/thumbnail"}),value:"thumbnail"}],x=function(e){function o(e){var i;(0,l.default
)(this,o),i=(0,c.default)(this,(0,s.default)(o).call(this,e)),(0,f.default)((0,u.default)(i),"setElementRef",function(e){return i.$elem=e}),(0,f.default)((0,u.default)(i),"handTooltip",function(){$(i.$elem).tooltip({container:"body",selector:".rn-list-item, .thumbnail-item",placement:function(e,t){var r=i.state.viewMode,n=i.props.layout
if(n!==C.RECOMMEND&&n!==C.BETA||"literal"!==r){if("thumbnail"!==r)return"left"
var a=t.getBoundingClientRect()
return a.y+a.height+44>window.innerHeight?"right":"bottom"}return"right"},trigger:"hover",title:function(){var e=this.querySelector(".editable-span"),t=e.offsetWidth,r=e.scrollWidth,n=e.textContent
return t<r&&[n]}})}),(0,f.default)((0,u.default)(i),"handleSearch",function(e){i.debounceSearch(e.toLowerCase()),i.setState({keyword:e})}),(0,f.default)((0,u.default)(i),"debounceSearch",(0,S.default)(function(e){MB.event("preview","使用了页面搜索"),i.props.dispatch({type:"reducer:preview-panel:search",payload:{screenSearch:e}})},300)),(0,f.default)((0,u.default)(i),"handleViewChange",function(e){"literal"===e?i.handleListView():i.handleThumbnail()}),(0,f.default)((0,u.default)(i),"handleListView",function(){
var e=i.props.toolbarActiveItem
MB.event("preview","在".concat(E.TOOLBAR_TRAKING_CONFIG[e],",点击了列表")),i.setState({viewMode:"literal"})}),(0,f.default)((0,u.default)(i),"handleThumbnail",function(){var e=i.props.toolbarActiveItem
MB.event("preview","在".concat(E.TOOLBAR_TRAKING_CONFIG[e],",点击了缩略图")),i.setState({viewMode:"thumbnail"})}),(0,f.default)((0,u.default)(i),"renderCommentIcon",function(e){var t=i.props.screenCommentThreadCountMap
if(1<=(t&&t[e.cid]||0)&&!MB.isHTMLZip())return p.default.createElement("span",{className:"toggle-comment"},p.default.createElement(m.default,{type:"dora",name:"comment"}))})
var t=e.screenTreeData,r=t.nodeMap,n=t.screenNameCidMap,a=e.screenSearch
return i.state={keyword:"",viewMode:e.isDemo?"thumbnail":"literal",searchScreenKeyMap:(0,w.filterSearch)(n,a,r)||[]},i}return(0,d.default)(o,e),(0,i.default)(o,[{key:"UNSAFE_componentWillReceiveProps",value:function(e){var t=e.screenSearch,r=this.props,n=r.screenTreeData,a=n.nodeMap,i=n.screenNameCidMap
if(t!=r.screenSearch){var o=(0,w.filterSearch)(i,t,a)||[]
this.setState({searchScreenKeyMap:o})}}},{key:"componentDidMount",value:function(){this.handTooltip()}},{key:"render",value:function(){var e=this.props,t=e.screenTreeData,r=e.currentScreenCid,n=e.screenSearch,a=e.dispatch,i=this.state,o=i.viewMode,l=i.keyword,c=i.searchScreenKeyMap,s=0<n.length,u=s?{root:c}:t.childListMap
return p.default.createElement("div",{className:k.default["screen-panel"]},p.default.createElement("div",{className:"screen-actions"},p.default.createElement(v.default,{value:l,placeholder:I18N.preview.search,onChange:this.handleSearch}),p.default.createElement(g.default,{className:"viewmode",options:_,value:o,handleChange:this.handleViewChange})),p.default.createElement("div",{className:(0,h.default)("screen-list-container",o),ref:this.setElementRef},"literal"===o?p.default.createElement(y.default,{
activeCid:r,isSearching:s,screenTreeData:t,screenTreeMap:u,screenDataMap:t.nodeMap,renderCommentIcon:this.renderCommentIcon,dispatch:a}):p.default.createElement(b.default,{activeCid:r,screenTreeMap:u,screenDataMap:t.nodeMap,renderCommentIcon:this.renderCommentIcon,dispatch:a})))}}]),o}(p.PureComponent)
t.default=x,(0,f.default)(x,"propTypes",{screenTreeData:o.default.object,screenCommentThreadCountMap:o.default.object,currentScreenCid:o.default.string,screenSearch:o.default.string,toolbarActiveItem:o.default.string,layout:o.default.string,isDemo:o.default.bool,dispatch:o.default.func})},h9XN:function(e,t,r){"use strict"
var n=r("284h"),a=r("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.CopyBtn=void 0
var i=a(r("lwsE")),o=a(r("W8MJ")),l=a(r("a1gu")),c=a(r("Nsbk")),s=a(r("PJYZ")),u=a(r("7W2i")),d=a(r("lSNA")),f=n(r("q1tI")),p=a(r("17x9")),h=a(r("sxGJ")),m=r("wYtL"),v=r("/5+U"),g=a(r("mfFm")),y=function(e){function t(){var e
return(0,i.default)(this,t),(e=(0,l.default)(this,(0,c.default)(t).call(this))).onClipboardEvent=e.onClipboardEvent.bind((0,s.default)(e)),e}return(0,u.default)(t,e),(0,o.default)(t,[{key:"componentDidMount",value:function(){var t=this,e=this.props,r=e.target,n=e.text
this.clipboard=n?new h.default(this.$copyBtn,{text:function(){return(0,v.unescapeHTML)(document.querySelector(n).innerText)}}):new h.default(this.$copyBtn,{target:function(){return document.querySelector(r)}}),this.clipboard.on("success",function(e){t.error=!1,window.getSelection().removeAllRanges(),t.onClipboardEvent()}),this.clipboard.on("error",function(e){t.error=!0,t.onClipboardEvent()})}},{key:"componentWillUnmount",value:function(){this.clipboard.destroy()}},{key:"onClipboardEvent",value:function(){
MB.event("preview","使用了代码复制")}},{key:"render",value:function(){var t=this
return f.default.createElement(m.Tooltip,{arrowed:!1,content:{click:I18N.preview_panel.copied},duration:1e3,className:g.default.copyBtn},f.default.createElement("span",{ref:function(e){return t.$copyBtn=e}},I18N.copy))}}]),t}(f.Component)
t.CopyBtn=y,(0,d.default)(y,"propTypes",{target:p.default.string,text:p.default.string})},hQIM:function(e,t,r){t.__esModule=!0
var g=r("/Nf0"),y=r("jBRi")
function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]
for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function b(e,t,r,n){return a({},(0,y.createNode)(t),{key:e,size:r,expireAt:n})}t.createCache=b,t.createCacheMap=function(e){function l(e){h.set(e.key,e),m.unshift(e),v+=e.size,a&&p({type:"add",key:e.key,payload:e.value})}function c(e){h.delete(e.key),m.remove(e),v-=e.size,a&&p({type:"delete",key:e.key,payload:e.value})}var i=e.valueSizeSumMax,t=e.valueSizeSingleMax,o=void 0===t?Math.max(.05*i,1):t,
r=e.eventHub,n=void 0===r?(0,g.createHub)():r,a=Boolean(n),s=a?n:{},u=s.clear,d=s.subscribe,f=s.unsubscribe,p=s.send,h=new Map,m=(0,y.createDoublyLinkedList)(),v=0
return{hasEventHub:a,clearHub:u,subscribe:d,unsubscribe:f,clear:function(){return h.forEach(c)},getSize:function(){return h.size},getValueSize:function(){return v},set:function(e,t,r,n){void 0===r&&(r=1),void 0===n&&(n=Date.now()+6e4)
var a=h.get(e)
if(a&&c(a),!(o<r)){for(;i<r+v;)c(m.getTail().prev)
l(b(e,t,r,n))}},get:function(e,t){void 0===t&&(t=Date.now())
var r=h.get(e)
if(r)return r.expireAt<=t?c(r):(m.setFirst(r),r.value)},touch:function(e,t){void 0===t&&(t=Date.now()+6e4)
var r=h.get(e)
if(r)return r.expireAt=t,m.setFirst(r),r.value},delete:function(e){var t=h.get(e)
return t&&c(t),t&&t.value},packList:function(){var i=[]
return m.forEachReverse(function(e){var t=e.key,r=e.value,n=e.size,a=e.expireAt
return i.push({key:t,value:r,size:n,expireAt:a})}),i},parseList:function(e,o){return void 0===o&&(o=Date.now()),e.forEach(function(e){var t=e.key,r=e.value,n=e.size,a=e.expireAt,i=b(t,r,n,a)
i.expireAt<=o?c(i):l(i)})}}}},iKZC:function(e,t,r){"use strict"
var n=r("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.doSaveWithSocketAndFallback=t.createAutoSaveQueue=void 0
var b=n(r("o0o1")),a=n(r("lSNA")),S=n(r("yXPU")),E=r("ZMzb"),C=r("/Nf0"),k=r("os03"),w=r("Clcl")
function i(t,e){var r=Object.keys(t)
if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t)
e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)}return r}function _(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{}
e%2?i(r,!0).forEach(function(e){(0,a.default)(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(r).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}t.createAutoSaveQueue=function(e){var t=e.doSave,r=e.onError,n=e.delay,a=(0,C.createEventTarget)(),i=a.clear,o=a.addEventListener,l=a.removeEventListener,c=a.dispatchEvent,s=(0,k.createSaveQueue)({beforeSave:function(){return c({type:"beforesave"})},
afterSave:function(){return c({type:"aftersave"})},doSave:t,onError:r}),u=s.clear,d=s.add,f=s.save,p=s.filter,h=s.getLength,m=s.getIsSaving,v=s.getSavingState,g=(0,E.createTimer)({func:f,delay:n}),y=g.start,b=g.stop,S=g.getDelay,w=g.setDelay
return{reset:function(){b(),i(),u()},add:function(e){d(e),y()},getState:function(){return{pendingLength:h(),isSaving:m(),delay:S(),savingState:v()}},getIsEmpty:function(){return!m()&&!h()},getIsSaving:m,getDelay:S,setDelay:w,filterSaveQueue:p,triggerSave:f,afterCurrentSave:function(t){if(!m())return t()
o("aftersave",function e(){l("aftersave",e),t()})},addEventListener:o,removeEventListener:l}}
var o=function(){var t=(0,S.default)(b.default.mark(function e(t){var s,u,r,d,f,p,h,m,v,g,y,n,a,i
return b.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:s=t.setSavingState,u=t.getAutoSaveQueueState,r=t.saveChunkList,d=t.saveQueueLength,f=t.getSaveItemInfo,p=t.isSocketAvailable,h=t.doSocketBatchSave,m=t.onSocketError,v=t.doFallbackSaveItem,g=t.onFallbackError,y=0,n=b.default.mark(function e(a,i){var c,o,t
return b.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:c=r[a],o=0,t=b.default.mark(function e(){var l,t,r,n
return b.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(l={chunkIndex:a,chunkIndexMax:i,saveChunkFirstInfo:f(c[0]),saveChunkLength:c.length,chunkAttempt:o,saveQueueIndex:y,saveQueueLength:d},e.prev=1,p())return e.next=5,(0,k.withTimeoutRetry)({retry:2,timeout:6e4,task:function(){var t=(0,S.default)(b.default.mark(function e(t){var r,n
return b.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.attempt,n=t.timeout,s(_({type:"socket-batch-save",attempt:r,timeout:n},l)),e.next=4,h({saveChunk:c,attempt:r,timeout:n})
case 4:case"end":return e.stop()}},e)}))
return function(e){return t.apply(this,arguments)}}(),onError:function(){var r=(0,S.default)(b.default.mark(function e(t,r){var n,a
return b.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.attempt,a=r.timeout,s(_({type:"socket-batch-save-retry",error:t.toString(),attempt:n,timeout:a},l)),e.next=4,m(t,{saveChunk:c,attempt:n,timeout:a})
case 4:case"end":return e.stop()}},e)}))
return function(e,t){return r.apply(this,arguments)}}()})
e.next=6
break
case 5:return e.abrupt("return","break")
case 6:e.next=11
break
case 8:e.prev=8,e.t0=e.catch(1),(0,w.REPORT_ERROR)(e.t0,"[AutoSaveQueue][doSave] failed to save with socket",u())
case 11:e.prev=11,t=b.default.mark(function e(t,r){var i,o
return b.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return i=c[t],o=_({index:t,indexMax:r,saveItem:f(i)},l,{saveQueueIndex:y+t}),e.next=4,(0,k.withTimeoutRetry)({retry:4,timeout:1e5,task:function(){var t=(0,S.default)(b.default.mark(function e(t){var r,n
return b.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.attempt,n=t.timeout,s(_({type:"fallback-save-item",attempt:r,timeout:n},o)),e.next=4,v({saveItem:i,attempt:r,timeout:n})
case 4:case"end":return e.stop()}},e)}))
return function(e){return t.apply(this,arguments)}}(),onError:function(){var r=(0,S.default)(b.default.mark(function e(t,r){var n,a
return b.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.attempt,a=r.timeout,s(_({type:"fallback-save-item-retry",error:t.toString(),attempt:n,timeout:a},o)),e.next=4,g(t,{saveItem:i,attempt:n,timeout:a})
case 4:case"end":return e.stop()}},e)}))
return function(e,t){return r.apply(this,arguments)}}()})
case 4:case"end":return e.stop()}},e)}),r=0,n=c.length
case 14:if(r<n)return e.delegateYield(t(r,n),"t1",16)
e.next=19
break
case 16:r++,e.next=14
break
case 19:return e.abrupt("return","break")
case 22:e.prev=22,e.t2=e.catch(11),(0,w.REPORT_ERROR)(e.t2,"[AutoSaveQueue][doSave] failed to save with fetch fallback",u())
case 25:o++
case 26:case"end":return e.stop()}},e,null,[[1,8],[11,22]])})
case 3:return e.delegateYield(t(),"t0",5)
case 5:if("break"===e.t0)return e.abrupt("break",10)
e.next=8
break
case 8:e.next=3
break
case 10:y+=c.length
case 11:case"end":return e.stop()}},e)}),a=0,i=r.length
case 4:if(a<i)return e.delegateYield(n(a,i),"t0",6)
e.next=9
break
case 6:a++,e.next=4
break
case 9:case"end":return e.stop()}},e)}))
return function(e){return t.apply(this,arguments)}}()
t.doSaveWithSocketAndFallback=o},iLpg:function(e,t,r){"use strict"
var n=r("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.StyledSearchBar=void 0
var a=n(r("vOnD")).default.div.withConfig({displayName:"styles__StyledSearchBar",componentId:"jsl19y-0"})(["position:relative;height:24px;display:flex;justify-content:space-between;align-items:center;.search-icon{position:absolute;left:0;width:24px;height:24px;text-align:center;line-height:24px;font-size:12px;color:#8d9ea7;pointer-events:none;}input{width:100%;height:100%;padding-right:22px;background:",";border:1px solid ",
";border-radius:2px;transition:all 0.2s ease-out;text-indent:24px;&::placeholder{color:#8d9ea7;}&:hover{border-color:",";}&:focus{background:#fff;border-color:",";box-shadow:",";}}.clear-icon{position:absolute;right:0;width:24px;line-height:24px;text-align:center;color:#bec2c9;transition:all 0.15s ease-in-out;cursor:pointer;&:hover{color:#7d8695;}}"],function(e){return e.theme.searchBar.bg},function(e){return e.theme.searchBar.border_color},function(e){return e.theme.interation.hover.border_color},function(
e){return e.theme.interation.active.border_color},function(e){return e.theme.interation.active.box_shadow})
t.StyledSearchBar=a},iScx:function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
function n(i,o){return s(function(e,t,r){var n=t.dispatch,a=r&&r.payload
n({type:"reducer:collaborators:update",payload:i(e,a,o)})})}var a=r("WVP6"),i=r("Ehhz").MODEL_OPERATION_MAP.Collaborator,o=(0,a.createStateStore)([]),l=o.getState,c=o.setState,s=o.wrapEntry,u={entryMap:{"collaborators:refresh":s(function(e,t,r){var n=t.dispatch,a=r&&r.payload;(e=i.refreshStateList(e,a,!1)).forEach(function(e){e.avatar||(e.avatar="/images/avatar.png")}),n({type:"reducer:collaborators:update",payload:e})}),"collaborators:add":n(i.addState,!1),"collaborators:add-local":n(i.addState,!0),
"collaborators:update":n(i.updateState,!1),"collaborators:update-local":n(i.updateState,!0),"collaborators:delete":n(i.deleteState,!1),"collaborators:delete-local":n(i.deleteState,!0)},getState:l,setState:c}
t.default=u},iX79:function(e,t,r){"use strict"
var n=r("284h"),a=r("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var o=a(r("lwsE")),l=a(r("W8MJ")),c=a(r("a1gu")),s=a(r("Nsbk")),u=a(r("PJYZ")),d=a(r("7W2i")),f=a(r("lSNA")),i=a(r("17x9")),p=n(r("q1tI")),h=r("i6OX"),m=r("wYtL"),v=a(r("RtVw")),g=r("/5+U"),y=function(e){function i(){var e,t;(0,o.default)(this,i)
for(var r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a]
return t=(0,c.default)(this,(e=(0,s.default)(i)).call.apply(e,[this].concat(n))),(0,f.default)((0,u.default)(t),"handleFullScreen",function(){MB.event("zhuge",(0,g.canBackToWorkspace)()?"Preview_enter_FullScreen":"LinkPreview_enter_FullScreen"),t.props.dispatch({type:"entry:enter:full-screen-mode"})}),t}return(0,d.default)(i,e),(0,l.default)(i,[{key:"render",value:function(){return p.default.createElement(m.Tooltip,{position:"bottom",tipClassName:"margin-top-20",duration:1e3,content:I18N.preview.fullscreen,
style:{lineHeight:0,cursor:"pointer"}},p.default.createElement("div",{className:v.default.fullscreen,onClick:this.handleFullScreen},p.default.createElement(h.SVGIcon,{name:"design/fullscreen"})))}}]),i}(p.PureComponent)
t.default=y,(0,f.default)(y,"propTypes",{dispatch:i.default.func})},ibfc:function(e,t,r){"use strict"
var n=r("284h"),a=r("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var o=a(r("lwsE")),l=a(r("W8MJ")),c=a(r("a1gu")),s=a(r("Nsbk")),u=a(r("PJYZ")),d=a(r("7W2i")),f=a(r("lSNA")),i=a(r("17x9")),p=n(r("q1tI")),h=a(r("9DAG")),m=r("MGhH"),v=a(r("WtCM")),g=a(r("TSYQ"))
function y(t,e){var r=Object.keys(t)
if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t)
e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)}return r}r("aw2M")
var b=function(e){function i(){var e,t;(0,o.default)(this,i)
for(var r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a]
return t=(0,c.default)(this,(e=(0,s.default)(i)).call.apply(e,[this].concat(n))),(0,f.default)((0,u.default)(t),"setScreenRef",function(e){return t.$screen=e}),(0,f.default)((0,u.default)(t),"getScreenElement",function(){return t.$screen}),t}return(0,d.default)(i,e),(0,l.default)(i,[{key:"componentWillUnmount",value:function(){var e=this.props.screen
MB.runner.runnerUtil.destroyScrollBarByCid(e.cid)}},{key:"render",value:function(){var e=this.props,t=e.isShow,r=e.screen,n=e.isActive,a=e.style,i=e.widgetQueryMap,o=r.cid,l=r.stateCid,c=r.transition,s=Screen.find(r.cid),u=function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{}
e%2?y(r,!0).forEach(function(e){(0,f.default)(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):y(r).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}({display:t?"":"none",backgroundColor:s.bg(),backgroundImage:s.bgimage?"url(".concat(s.bgimage,")"):""},a),d=(0,g.default)("pcanvas",s.orient(),{active:n})
return p.default.createElement("div",{ref:this.setScreenRef,id:"pscreen".concat(s.cid),"data-cid":s.cid,"data-orientation":s.orient(),className:d,style:u},p.default.createElement(S,{screenCid:o,stateCid:l,transition:c,widgetQueryMap:i,getScreenElement:this.getScreenElement}))}}]),i}(p.PureComponent)
t.default=b,(0,f.default)(b,"propTypes",{isShow:i.default.bool,screen:i.default.object,isActive:i.default.bool,style:i.default.object,widgetQueryMap:i.default.object})
var S=function(e){function t(){return(0,o.default)(this,t),(0,c.default)(this,(0,s.default)(t).apply(this,arguments))}return(0,d.default)(t,e),(0,l.default)(t,[{key:"render",value:function(){var e=this.props,t=e.screenCid,r=e.stateCid,n=e.transition,a=e.widgetQueryMap,i=e.getScreenElement,o=Screen.find(t),l=o.headerHeight(),c=o.footerHeight(),s={height:o.height-(l+c)},u={height:o.height,marginTop:-l}
return p.default.createElement(v.default,{screenCid:t,stateCid:r,transition:n,widgetQueryMap:a,getScreenElement:i},function(e){return p.default.createElement(p.default.Fragment,null,p.default.createElement("div",{className:"screen-header",style:{height:l}},0<l&&p.default.createElement(w,{treeData:e,headerHeight:l})),p.default.createElement("div",{className:"screen-content"},p.default.createElement("div",{className:"widgets",style:s},p.default.createElement("div",{className:"scontainer",style:u},
p.default.createElement(h.default,{widgetTreeData:e})))),p.default.createElement("div",{className:"screen-footer",style:{height:c}},0<c&&p.default.createElement(E,{treeData:e,footerHeight:c,screenHeight:o.height})))})}}]),t}(p.PureComponent);(0,f.default)(S,"propTypes",{screenCid:i.default.string,stateCid:i.default.string,transition:i.default.object,widgetQueryMap:i.default.object,getScreenElement:i.default.func})
var w=function(e){var t=e.treeData,r=e.headerHeight,n=(0,m.headerFilter)(t,r)
return p.default.createElement(h.default,{widgetTreeData:n})}
w.propTypes={treeData:i.default.object,headerHeight:i.default.number}
var E=function(e){var t=e.treeData,r=e.footerHeight,n=e.screenHeight,a=(0,m.footerFilter)(t,n,r)
return p.default.createElement("div",{className:"footer-widgets",style:{marginTop:r-n}},p.default.createElement(h.default,{widgetTreeData:a}))}
E.propTypes={treeData:i.default.object,footerHeight:i.default.number,screenHeight:i.default.number}},ibhU:function(e,t,r){e.exports={"runner-state-panel":"fc4Iy51VC7mx7ilrKwhJK"}},inTe:function(e,t,r){"use strict"
var n=r("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var Ie=n(r("lSNA")),a=n(r("17x9")),Ne=n(r("q1tI")),Re=r("qOCw"),De=r("Ro3d"),Le=r("PqLM"),Ae=r("RUem")
function Be(t,e){var r=Object.keys(t)
if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t)
e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)}return r}function i(e){var t=e.layer,r=e.unit,n=e.ratio,a=e.showGlobal,i=e.userPickColor,o=void 0===i?[]:i,l=e.globalColor,c=void 0===l?[]:l,s=e.globalText,u=void 0===s?[]:s,d=e.documentColor,f=void 0===d?[]:d,p=e.screenColor,h=void 0===p?[]:p,m=e.language,v=e.colorUnit,g=e.dispatch,y=t.src_left,b=t.src_top,S=t.src_width,w=t.src_height,E=t.origin_width,C=t.origin_height,k=t.bd_radius,_=t.line_height,
x=t.bg_colors,T=void 0===x?[]:x,P=t.borders,M=void 0===P?[]:P,O=t.i,j=t.display_name,I=t.padding,N=void 0===I?0:I,R=t.hiddSpacing,D=void 0!==R&&R,L=t.text_styles,A=void 0===L?[]:L,B=t.alignment,F=t.vertical_alignment,q=t.image,U=t.text,W=t.letter_spacing,H=t.image_set_zip,Y=t.shadows,z=void 0===Y?[]:Y,X=t.inner_shadows,V=void 0===X?[]:X,J=t.rotation,G=t.textShadows,K=void 0===G?[]:G,Z=t.image_set,Q=void 0===Z?[]:Z,$=t.name,ee=0<M.length,te=0<T.length,re=!!q,ne=0<A.length&&U&&(0,Re.getTextContent)(t).length,
ae=0<z.length||0<K.length,ie=0<V.length,oe=H,le={left:y,top:b,width:E||S,height:C||w,borderRadius:k,opacity:t.o,rotation:J,ratio:n,unit:r}
if("line"===$){var ce=(0,Le.getLineGeneralInfo)(t,!0),se=ce.length,ue=ce.thickness,de=ce.angle
le.width=se,le.height=ue,le.rotation=de}var fe=(0,Re.getBaseAttributes)(le),pe=fe.adapterTop,he=fe.adapterLeft,me=fe.adapterWidth,ve=fe.adapterHeight,ge=fe.radius,ye=fe.opacity,be=fe.rotate,Se={lineHeight:_,letterSpacing:W,unit:r,ratio:n},we=(0,Re.getTextAttributes)(Se),Ee=we.lineHeight,Ce=we.letterSpacing,ke="number"==typeof O?O?"italic":"normal":void 0,_e={textStyles:A,background:T,borders:M,shadows:z,innerShadows:V,colorUnit:v,ratio:n,unit:r},xe=(0,Re.getCodeAttributes)(_e),Te=t.o&&100!=t.o?t.o/100:null,
Pe=(0,De.transfromProptype)({attr:function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{}
e%2?Be(r,!0).forEach(function(e){(0,Ie.default)(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):Be(r).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}({x:he,y:pe,width:me,height:ve,lineHeight:Ee,textAlign:B,opacity:Te,borderRadius:ge},xe),language:m,unit:r}),Me=re?"ImageView":ne?"TextView":"View",Oe="screen"===t.type||t.kind?t.name:j,je="line"===t.name
return a?Ne.default.createElement(Ne.default.Fragment,null,Ne.default.createElement(Ae.LayerName,{title:I18N.preview_panel.screen_name,value:Oe}),Ne.default.createElement(Ae.GlobalAttributes,{adapterWidth:me,adapterHeight:ve,documentColor:f,globalText:u,globalColor:c,screenColor:h,userPickColor:o,colorUnit:v,dispatch:g})):Ne.default.createElement("div",null,Ne.default.createElement(Ae.LayerName,{value:Oe}),Ne.default.createElement(Ae.BasicAttributes,{adapterTop:pe,adapterLeft:he,adapterWidth:me,
adapterHeight:ve,rotate:be,radius:ge,opacity:ye,unit:r,colorUnit:v}),ne&&Ne.default.createElement(Ae.TextLayerInfo,{textStyles:A,alignment:B,vertical_alignment:F,lineHeight:Ee,letterSpacing:Ce,ratio:n,unit:r,o:t.o,padding:N,fontStyle:ke,colorUnit:v,hiddSpacing:D,text:(0,Re.getTextContent)(t)}),te&&Ne.default.createElement(Ae.Fills,{backgroundColorSort:T,colorUnit:v}),ee&&Ne.default.createElement(Ae.BorderInfo,{isStroke:je,borderSort:M,ratio:n,unit:r,colorUnit:v}),ae&&Ne.default.createElement(Ae.Shadows,{
shadows:z,textShadows:K,colorUnit:v,unit:r,ratio:n}),ie&&Ne.default.createElement(Ae.Shadows,{shadows:V,colorUnit:v,unit:r,ratio:n,isInnerShaow:!0}),oe&&Ne.default.createElement(Ae.ImageInfo,{imageSetZip:H,name:t.display_name,imageSet:Q}),Ne.default.createElement(Ae.CodeBox,{code:Pe,whichAndView:Me,language:m,text:(0,Re.getTextContent)(t)||""}))}i.propTypes={userPickColor:a.default.array,screenColor:a.default.array,documentColor:a.default.array,globalText:a.default.array,globalColor:a.default.array,
colorUnit:a.default.string,layer:a.default.object,getLayerRef:a.default.func,showGlobal:a.default.bool,unit:a.default.string,ratio:a.default.number,language:a.default.string,dispatch:a.default.func}
var o=i
t.default=o},j1JO:function(e,t,r){"use strict"
var n=r("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=h,t.watchFetchSlices=m,t.fetchSliceData=v
var a=n(r("lSNA")),o=n(r("o0o1")),l=r("oZtI"),c=n(r("Nu6V")),s=r("upRB")
function i(t,e){var r=Object.keys(t)
if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t)
e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)}return r}function u(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{}
e%2?i(r,!0).forEach(function(e){(0,a.default)(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(r).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}var d=o.default.mark(h),f=o.default.mark(m),p=o.default.mark(v)
function h(){return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,l.all)([m()])
case 2:case"end":return e.stop()}},d)}function m(){return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,l.takeEvery)("reducer:slice:init",v)
case 2:case"end":return e.stop()}},f)}function v(e){var t,r,n,a,i
return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,l.select)()
case 2:if(t=e.sent,r=(0,s.getCurrentScreen)(t),e.prev=4,r)return e.next=8,(0,l.call)(c.default,r.artboard_id)
e.next=14
break
case 8:n=e.sent,a=n.slices,i=a.filter(g),n.slices=i,e.next=15
break
case 14:n={slices:[{id:1,name:"test",screen_cid:"sssss1232",image:"/uploads/images/14/149316/artboard_1506665060.png",src:"ssss",image_set:[{size:1,src:"src"}],image_set_zip:"src"},{id:2,name:"test",screen_cid:"sssss1232",image:"/uploads/images/14/149316/artboard_1506665060.png",image_set:[{size:1,src:"src"}],image_set_zip:"src"},{id:3,name:"test",screen_cid:"sssss1232",image:"/uploads/images/14/149316/artboard_1506665060.png",image_set:[{size:1,src:"src"}],image_set_zip:"src"}]}
case 15:return e.next=17,(0,l.put)({type:"reducer:slice:success",payload:u({},n)})
case 17:e.next=24
break
case 19:return e.prev=19,e.t0=e.catch(4),console.log(e.t0.stack),e.next=24,(0,l.put)({type:"reducer:slice:fail"})
case 24:case"end":return e.stop()}},p,null,[[4,19]])}var g=function(e){var t=e.width,r=void 0===t?1:t,n=e.height
return 0<r&&0<(void 0===n?1:n)}},jBRi:function(e,t){t.__esModule=!0
function a(e,t,r){return void 0===t&&(t=null),void 0===r&&(r=null),{value:e,prev:t,next:r}}t.createNode=a,t.createDoublyLinkedList=function(){function e(){i=new Set,o=a(null),l=a(null),(o.next=l).prev=o}var i,o,l
e()
function t(e,t){var r=t.next
t.next=r.prev=e,e.prev=t,e.next=r,i.add(e)}function r(e,t){var r=t.prev
t.prev=r.next=e,e.prev=r,e.next=t,i.add(e)}function n(e){var t=e.prev,r=e.next;(t.next=r).prev=t,e.prev=e.next=null,i.delete(e)}return{clear:e,getHead:function(){return o},getTail:function(){return l},getLength:function(){return i.size},insertAfter:t,insertBefore:r,remove:n,removeBetween:function(e,t){var r=e.prev,n=t.next;(r.next=n).prev=r,e.prev=t.next=null
for(var a=e;a;)i.delete(a),a=a.next},forEach:function(e){for(var t=o.next,r=0;t!==l;)e(t,r),t=t.next,r++},forEachReverse:function(e){for(var t=l.prev,r=i.size-1;t!==o;)e(t,r),t=t.prev,r--},reverse:function(){for(var e=o.next;e!==l;){var t=e,r=t.prev,n=t.next
e.prev=n,e.next=r,e=n}var a=o.next,i=l.prev
o.next=i,l.prev=a,i.prev=o,a.next=l},setFirst:function(e){if(e!==o.next){var t=e.prev,r=e.next;(t.next=r).prev=t,e.prev=o,e.next=o.next,o.next=e}},setLast:function(e){if(e!==l.prev){var t=e.prev,r=e.next;(t.next=r).prev=t,e.prev=l.prev,(e.next=l).prev=e}},push:function(e){return r(e,l)},pop:function(){return n(l.prev)},unshift:function(e){return t(e,o)},shift:function(){return n(o.next)}}}},jZq5:function(e,t,r){"use strict"
var n=r("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var a=r("/MKj"),i=r("G4qV"),o=r("upRB"),l=r("1iCU"),c=n(r("K7IS")),s=(0,i.createSelector)([o.getCurrentMode,function(e){return e.container.common.offset}],function(e,t){var r=Boolean(t.x||t.y)
return{isLayerActive:e===l.INSPECT,isDisplaced:r}}),u=(0,a.connect)(function(e){return s(e)})(c.default)
t.default=u},jeLk:function(e,t,r){"use strict"
var n=r("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var a=n(r("lwsE")),i=n(r("W8MJ")),o=function(){function e(){(0,a.default)(this,e),this.store=null,this.viewMap={},this.observerMap={}}return(0,i.default)(e,[{key:"setStore",value:function(e){this.store=e}},{key:"callObserver",value:function(e){for(var t,r=arguments.length,n=new Array(1<r?r-1:0),a=1;a<r;a++)n[a-1]=arguments[a]
return this.observerMap[e]&&(t=this.observerMap)[e].apply(t,[e].concat(n))}},{key:"setObserver",value:function(e,t){this.observerMap[e]=t}},{key:"setView",value:function(e,t){this.viewMap[e]=t}},{key:"callViewMethod",value:function(e,t){for(var r,n=this.viewMap[e],a=arguments.length,i=new Array(2<a?a-2:0),o=2;o<a;o++)i[o-2]=arguments[o]
return n&&n[t]?(this.callObserver("view:".concat(e,":").concat(t)),n[t].apply(n,[this.store].concat(i))):(r=console).warn.apply(r,["[WebpackInterface][callViewMethod] missed",e,t].concat(i))}},{key:"init",value:function(){this.callObserver("init"),this.store&&this.store.dispatch({type:"entry:state:init"})}},{key:"clear",value:function(){this.store&&this.store.dispatch({type:"entry:state:clear"}),this.callObserver("clear")}}]),e}()
t.default=o},jl5L:function(e,t,r){var n=r("Kz5y"),i=r("Sxd8"),o=r("tLB3"),l=r("dt0z"),c=n.isFinite,s=Math.min
e.exports=function(e){var a=Math[e]
return function(e,t){if(e=o(e),(t=null==t?0:s(i(t),292))&&c(e)){var r=(l(e)+"e").split("e"),n=a(r[0]+"e"+(+r[1]+t))
return+((r=(l(n)+"e").split("e"))[0]+"e"+(+r[1]-t))}return a(e)}}},jvRN:function(e,t,r){"use strict"
var n=r("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.getMockingBotWidgets=t.isSketchLayer=t.checkColor=void 0
var m=n(r("lSNA")),u=r("G3NE"),o=n(r("cl8F")),l=r("Ibie"),d=r("FkXu"),y=r("LbTH"),i=r("2EV6"),c=r("/5+U"),s=r("upRB")
function v(t,e){var r=Object.keys(t)
if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t)
e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)}return r}function b(e){return e?e.replace(S,"").trim():o.default}var S=/\\\w+/gi
t.checkColor=b
t.isSketchLayer=function(e){return Number.isInteger(e)||"artboard-base"===e}
t.getMockingBotWidgets=function(e){var t=e.model.widgets,r=(0,s.getCurrentProject)(e).device,n=(0,s.getCurrentScreen)(e),a=f(n.cid),i=t.concat(a),o=0
return i.filter(function(e){return o||e.screen_cid!==n.cid||"status_bar"!==e.name||(o=e.height),!(e.screen_cid!==n.cid||["pg","lr","sticky"].includes(e.name)||"image_view"===e.name&&e.width===n.width&&e.height===n.height)}).map(function(e){return(0,l.patchWidgetSize)(e,n,o)}).map(function(e){return p(e,r)}).sort(function(e,t){return e.z-t.z||e.timestamp-t.timestamp})}
var f=function(p){var e=window.Screen
if(!e)return[]
var t=e.find(p).cpanels(),h=[]
return t.forEach(function(s){h.push(s.__proto__)
var u=s.cid,d=s.top,f=s.left;(s.multi_states?s.ct().homeScreen().cwidgets().map(function(e){return Widgetstate.find(s.main_state_cid+e.cid)||Widgetstate.find("default"+e.cid)||e}):s.mainState().cwidgets()).forEach(function(e){var t=e.top,r=e.left,n=e.width,a=e.height,i=f+Math.min(Math.max(r,0),s.width),o=f+Math.min(Math.max(r+n,0),s.width),l=d+Math.min(Math.max(t,0),s.height),c=d+Math.min(Math.max(t+a,0),s.height)
h.push(function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{}
e%2?v(r,!0).forEach(function(e){(0,m.default)(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):v(r).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}({},e.__proto__,{id:"".concat(s.cid,"-").concat(e.id),panel_cid:u,screen_cid:p,top:l,left:i,width:o-i,height:c-l}))})}),h},p=function(e,t){var r,n={},a=e.name,i=e.ro,o=e.border_radius,l=e.bs,c=e.ha,s=e.va,u=e.lh,d=e.box_shadow,f=e.text_shadow,p=e.sc,h=e.ds,
m=e.text
if(m&&(r=w(m.replace(/<p>/g,"").replace(/<\/p>/g,"\n")),n.text_styles=(0,y.checkIfItemTextIsNewVersion)(e)?[C(JSON.parse(e.text))]:[{font_size:e.fs,color:b(e.tc||E(a,"tc",t)),length:r.length,font_face:k(m,t)}],n.text=r),c&&(n.alignment=c),s&&(n.vertical_alignment=s),u&&(n.line_height=u),o&&(n.bd_radius=o),i&&(n.rotation=i),n.bc=b(e.bc||E(a,"bc",t)),l&&(n.borders=[{thickness:l,color:b(n.bc)}]),e.bg&&(n.bg_colors=[{value:b(e.bg)}]),"triangleb"!==a&&"triangletl"!==a&&"icon_button"!==a&&"svg_icon_button"!==a||(
n.bg_colors=[{value:b(e.tc||E(a,"tc"))}]),d){var v=JSON.parse(d)[0]
n.shadows=[{offset_x:v[1],offset_y:v[2],blur_radius:v[3],spread:v[4],color:b(v[5].replace(S,""))}]}else p&&h&&(n.shadows=[{color:b(p.replace(S,"")),blur_radius:h}])
if(f){var g=JSON.parse(f)[0]
n.textShadows=[{offset_x:g[0],offset_y:g[1],blur_radius:g[2],color:b(g[3].replace(S,""))}]}else e.ts&&(n.textShadows=[{color:b(e.tsc.replace(S,"")),blur_radius:e.ts}])
return"label"!==a&&"text_view"!==a||(n.hiddSpacing=!0),Object.assign({},e,n)},a=/<[^>]+>/gi,w=function(e){return!!e&&e.replace(a,"")},E=function(e,t,r){var n="".concat(e,"_").concat(r),a=e,i=o.default[n]||o.default[a]
return i&&i[t]?i[t]:o.default[t]},C=function(e){var t=(0,u.getRichTextAttr)(e),r=t.fontFamily,n=t.fontWeight,a=t.fontSize,i=t.color,o=t.fontStyle,l=t.letterSpacing,c=t.lineHeight,s=t.paraSpacing
return{font_face:"".concat((0,d.getFontFamilyAndWeightText)(r,n)),font_size:a,color:i,fontStyle:o,letterSpacing:l,lineHeight:c,paraSpacing:s}},k=function(e,t){var r=(0,c.isChinese)(e)?"chinese":"english",n=h()?"mac":"windows",a=(0,i.getProjectPlatformByDevice)(t)
return g[n][a][r]},h=function(){return/Mac|iPod|iPhone|iPad/.test(navigator.platform)},g={mac:{ios:{chinese:"PingFang SC",english:"-apple-system"},android:{chinese:"PingFang SC",english:"Roboto"},others:{chinese:"PingFang SC",english:"Roboto"}},windows:{ios:{chinese:"Microsoft Yahei",english:"Arial"},android:{chinese:"Microsoft Yahei",english:"Roboto"},others:{chinese:"Microsoft Yahei",english:"Roboto"}}}},kJQk:function(e,t,r){"use strict"
var n=r("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var a=r("/MKj"),i=n(r("8Fba")),o=(0,r("/5+U").immutableTransformCache)(function(e,t){return e.find(function(e){return e.cid===t})}),l=(0,a.connect)(function(e){var t=e.model,r=t.current,n=t.projects,a=o(n,r.projectCid),i=c(a.access_token,r.screenCid)
return{scale:1,width:"100%",height:"100%",src:"".concat(i,"&").concat(Date.now())}})(i.default)
t.default=l
var c=function(e,t){return"".concat("/snapshot.png","?access-token=").concat(e,"&screen-cid=").concat(t,"&mode=zoom-1.00")}},lCKy:function(e,t,r){"use strict"
var n=r("284h"),a=r("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var o=a(r("lwsE")),l=a(r("W8MJ")),c=a(r("a1gu")),s=a(r("Nsbk")),u=a(r("PJYZ")),d=a(r("7W2i")),f=a(r("lSNA")),p=n(r("q1tI")),i=a(r("17x9")),h=r("6XO9"),m=r("wYtL"),v=a(r("i6OX")),g=r("1iCU"),y=a(r("UbMB")),b=a(r("gX9a")),S=y.default.bind(b.default),w=function(e){function a(){var e,i;(0,o.default)(this,a)
for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n]
return i=(0,c.default)(this,(e=(0,s.default)(a)).call.apply(e,[this].concat(r))),(0,f.default)((0,u.default)(i),"handleClose",function(){var e=i.props,t=e.isScrollable,r=e.isHighlight,n=e.isStickyShow,a=e.shellType
MB.event("zhuge","运行页-预览-收起设置面板",{"内容区滚动":t?"开":"关","链接高亮":r?"开":"关","批注显示":n?"开":"关","边框类型":a})}),i}return(0,d.default)(a,e),(0,l.default)(a,[{key:"render",value:function(){var e=this.props,t=e.canSetDeviceShell,r=e.isScrollable,n=e.isHighlight,a=e.isStickyShow,i=e.shellType,o=e.disabled,l=e.dispatch,c=p.default.createElement(m.Tooltip,{position:"bottom",tipClassName:"marign-top-20",duration:1e3,content:{hover:o?null:I18N.preview.setting}},p.default.createElement(v.default,{name:"cog",type:"dora"}))
return p.default.createElement(h.Dropdown,{disabled:o,menuClassName:S("play-setting-menu"),opener:c,menuX:"right",onClose:this.handleClose,menu:p.default.createElement(E,{canSetDeviceShell:t,isScrollable:r,isHighlight:n,isStickyShow:a,shellType:i,dispatch:l})})}}]),a}(p.PureComponent)
t.default=w,(0,f.default)(w,"propTypes",{canSetDeviceShell:i.default.bool,isScrollable:i.default.bool,isHighlight:i.default.bool,isStickyShow:i.default.bool,shellType:i.default.string,disabled:i.default.bool,dispatch:i.default.func})
var E=function(e){function i(){var e,r;(0,o.default)(this,i)
for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a]
return r=(0,c.default)(this,(e=(0,s.default)(i)).call.apply(e,[this].concat(n))),(0,f.default)((0,u.default)(r),"handleToggleScrollable",function(e){r.props.dispatch({type:"entry:preview-setting:update:is-scrollable",payload:{isScrollable:e}})}),(0,f.default)((0,u.default)(r),"handleToggleHighlight",function(e){r.props.dispatch({type:"entry:preview-setting:update:is-highlight",payload:{isHighlight:e}})}),(0,f.default)((0,u.default)(r),"handleToggleSticky",function(e){r.props.dispatch({
type:"entry:preview-setting:update:is-sticky-show",payload:{isStickyShow:e}})}),(0,f.default)((0,u.default)(r),"handleUpdateShellType",function(e){var t=e.value
r.props.dispatch({type:"entry:preview-setting:update:shell-type",payload:{shellType:t}})}),r}return(0,d.default)(i,e),(0,l.default)(i,[{key:"render",value:function(){var e=this.props,t=e.canSetDeviceShell,r=e.isScrollable,n=e.isHighlight,a=e.isStickyShow,i=e.shellType,o=t?g.SHELL_TYPE_LIST:g.SHELL_TYPE_LIST_WITHOUT_DEVICE,l=r?i:"none"
return p.default.createElement(p.default.Fragment,null,p.default.createElement("div",{className:"line"},p.default.createElement("label",null,I18N.content_scrollable),p.default.createElement(h.Switch,{isChecked:r,onChange:this.handleToggleScrollable})),p.default.createElement("div",{className:"line"},p.default.createElement("label",null,I18N.highlight_clickable),p.default.createElement(h.Switch,{isChecked:n,onChange:this.handleToggleHighlight})),p.default.createElement("div",{className:"line"},
p.default.createElement("label",null,I18N.sticky_visible),p.default.createElement(h.Switch,{isChecked:a,onChange:this.handleToggleSticky})),p.default.createElement("div",{className:"line"},p.default.createElement("label",null,I18N.shell_type),p.default.createElement(h.RadioGroup,{size:"small",isDisabled:!r,value:l,optionList:o,onChange:this.handleUpdateShellType})))}}]),i}(p.PureComponent);(0,f.default)(E,"propTypes",{canSetDeviceShell:i.default.bool,isScrollable:i.default.bool,isHighlight:i.default.bool,
isStickyShow:i.default.bool,shellType:i.default.oneOf(["device","default","none"]),dispatch:i.default.func})},ldhK:function(e,t,r){e.exports={covers:"_2fva7dqNrMTA3qQj2Sag2u"}},lwmc:function(e,t,r){"use strict"
var n=r("284h"),a=r("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var i=a(r("lwsE")),o=a(r("W8MJ")),l=a(r("a1gu")),c=a(r("Nsbk")),s=a(r("7W2i")),u=a(r("lSNA")),d=a(r("17x9")),E=n(r("q1tI")),C=a(r("gXld")),f=r("Uu/L"),p=function(e){function t(){return(0,i.default)(this,t),(0,l.default)(this,(0,c.default)(t).apply(this,arguments))}return(0,s.default)(t,e),(0,o.default)(t,[{key:"render",value:function(){var e=this.props,r=e.treeProps,n=e.isSearching,a=e.editingCid,i=e.activeCid,o=e.screenTreeMap,l=e.screenDataMap,c=e.collapseKeySet,s=e.targetlinkCid,u=e.hoverCid
return E.default.createElement(f.StyledScreenList,null,0===o.root.length?E.default.createElement("div",{className:"not-match"},I18N.preview_panel.not_match):o.root.map(function(e){var t=e.cid
return E.default.createElement(h,{key:t,cid:t,depth:0,collapseKeySet:c,isSearching:n,editingCid:a,hoverCid:u,targetlinkCid:s,activeCid:i,screenDataMap:l,screenTreeMap:o,treeProps:r})}))}}]),t}(E.PureComponent)
t.default=p,(0,u.default)(p,"propTypes",{treeProps:d.default.object,isSearching:d.default.bool,editingCid:d.default.string,hoverCid:d.default.string,activeCid:d.default.string,targetlinkCid:d.default.string,screenTreeMap:d.default.object,screenDataMap:d.default.object,collapseKeySet:d.default.object})
var h=function(e){function w(){return(0,i.default)(this,w),(0,l.default)(this,(0,c.default)(w).apply(this,arguments))}return(0,s.default)(w,e),(0,o.default)(w,[{key:"render",value:function(){var e=this.props,t=e.cid,r=e.treeProps,n=e.depth,a=e.activeCid,i=e.editingCid,o=e.isSearching,l=e.screenTreeMap,c=e.screenDataMap,s=e.collapseKeySet,u=e.targetlinkCid,d=e.hoverCid,f=r.renderItem,p=r.handleScreenItemActions,h=c[t],m=!s.has(t),v=l[t],g=h.cid===a,y=t===u,b=h.cid===i,S=Boolean(!o&&v)
return E.default.createElement("li",{"data-cid":t,className:"rn-content-item"},E.default.createElement(C.default,{depth:n,screen:h,isLinked:y,isActive:g,isEditing:b,hoverCid:d,showExpander:S,renderItem:f,collapseKeySet:s,handleScreenItemActions:p}),v&&m&&E.default.createElement("ol",{type:"screen-list",className:"child-screens"},v.map(function(e){var t=e.cid
return E.default.createElement(w,{key:t,cid:t,targetlinkCid:u,depth:n+1,collapseKeySet:s,isSearching:o,editingCid:i,hoverCid:d,activeCid:a,screenDataMap:c,screenTreeMap:l,treeProps:r})})))}}]),w}(E.PureComponent);(0,u.default)(h,"propTypes",{cid:d.default.string,treeProps:d.default.object,depth:d.default.number,isSearching:d.default.bool,editingCid:d.default.string,hoverCid:d.default.string,targetlinkCid:d.default.string,activeCid:d.default.string,screenTreeMap:d.default.object,
screenDataMap:d.default.object,collapseKeySet:d.default.object})},"m/Xg":function(e,t,r){"use strict"
var n=r("284h"),a=r("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var i=a(r("lwsE")),o=a(r("W8MJ")),l=a(r("a1gu")),c=a(r("Nsbk")),s=a(r("PJYZ")),u=a(r("7W2i")),d=a(r("lSNA")),f=a(r("17x9")),p=n(r("q1tI")),h=r("xQM3"),m=r("CpT9"),v=a(r("p6mf")),g=function(e){function t(e){var u
return(0,i.default)(this,t),u=(0,l.default)(this,(0,c.default)(t).call(this,e)),(0,d.default)((0,s.default)(u),"handleMouseDown",function(e){if(!MB.isMobile()&&!u.props.isImmersive){var t=$(e.target).closest(".map_view .image"),r=$(e.target).closest(".ppanel"),n=t[0]||r[0]
if(n&&(n.clientWidth!==n.scrollWidth||n.clientHeight!==n.scrollHeight)){var a=e.clientX,i=e.clientY,o=n.scrollTop,l=n.scrollLeft,c=0,s=function(e){e.preventDefault(),c++,n.scrollTop=o-(e.clientY-i),n.scrollLeft=l-(e.clientX-a)}
document.addEventListener("mousemove",s),document.addEventListener("mouseup",function e(t){5<c&&MB.runner.eventBucket.isCoolDown(),document.removeEventListener("mousemove",s),document.removeEventListener("mouseup",e)})}}}),u.state={homeScreen:Screen.find(e.screen.cid)},u}return(0,u.default)(t,e),(0,o.default)(t,[{key:"render",value:function(){var e=this.props,t=e.project,r=e.screen,n=e.isLite,a=e.isScreenExpanded,i=e.viewportWidth,o=e.viewportHeight,l=t.splash,c=void 0===l?"":l,s=this.state.homeScreen,u={
width:i,height:o},d=(0,h.getScreenContainerStyle)(r,t,u,n,a),f=(0,m.getScreenClassName)(r,t)
return p.default.createElement("div",{id:"simulator",className:f,style:d,onMouseDown:this.handleMouseDown},p.default.createElement("div",{id:"app"},p.default.createElement(v.default,null)),p.default.createElement(y,{homeScreen:s,url:c}))}}]),t}(p.PureComponent)
t.default=g,(0,d.default)(g,"propTypes",{screen:f.default.object.isRequired,project:f.default.object.isRequired,isLite:f.default.bool,isImmersive:f.default.bool,isScreenExpanded:f.default.bool,viewportWidth:f.default.number,viewportHeight:f.default.number})
var y=function(e){function t(){return(0,i.default)(this,t),(0,l.default)(this,(0,c.default)(t).apply(this,arguments))}return(0,u.default)(t,e),(0,o.default)(t,[{key:"render",value:function(){var e,t=this.props,r=t.homeScreen,n=t.url
return e=r.w()>r.dH()?{top:0-r.dW(),width:r.dH(),height:r.dW()}:{top:0,width:r.dW(),height:"101%"},p.default.createElement("div",{className:"splash",style:{backgroundColor:r.bg()}},n&&p.default.createElement("img",{src:n,style:e}),p.default.createElement("div",{className:"loading"},p.default.createElement("div",{className:"spinner"})))}}]),t}(p.PureComponent);(0,d.default)(y,"propTypes",{homeScreen:f.default.object,url:f.default.string})},m48X:function(e,t,r){"use strict"
var n=r("284h"),a=r("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var i=a(r("pVnL")),o=a(r("QILm")),l=a(r("lwsE")),c=a(r("W8MJ")),s=a(r("a1gu")),u=a(r("Nsbk")),d=a(r("7W2i")),f=a(r("lSNA")),p=n(r("q1tI")),h=a(r("17x9")),m=r("6XO9")
r("WcC0")
var v=function(e){function t(){return(0,l.default)(this,t),(0,s.default)(this,(0,u.default)(t).apply(this,arguments))}return(0,d.default)(t,e),(0,c.default)(t,[{key:"render",value:function(){var e=this.props,t=e.className,r=e.menuClassName,n=(0,o.default)(e,["className","menuClassName"])
return p.default.createElement(m.Select,(0,i.default)({className:(0,m.trimList)(["ToolbarSelect",t]),menuClassName:(0,m.trimList)(["ToolbarSelectMenu",r])},n,{placeholder:" ",unstyled:!0,size:"small",menuX:"center"}))}}]),t}(p.PureComponent)
t.default=v,(0,f.default)(v,"propTypes",{className:h.default.string,menuClassName:h.default.string})},"mC/1":function(e,t,r){"use strict"
var n=r("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.StyledResetButton=t.StyledMainContent=void 0
var a=n(r("vOnD")),i=a.default.div.withConfig({displayName:"styles__StyledMainContent",componentId:"t5mjug-0"})(["flex:1;position:relative;width:100%;height:100%;pointer-events:none;"])
t.StyledMainContent=i
var o=a.default.div.withConfig({displayName:"styles__StyledResetButton",componentId:"t5mjug-1"})([
"position:absolute;top:38px;right:0;min-width:92px;padding:0 8px;height:28px;margin-right:27px;font-size:12px;white-space:nowrap;background:white;border-radius:2px;cursor:pointer;box-shadow:0 2px 5px 0 rgba(39,54,78,0.08);display:flex;justify-content:center;align-items:center;opacity:0;pointer-events:none;transition:opacity 0.2s ease-in-out;&:hover{background:#f5f5f5;color:#5b6b73;}&.is-show{pointer-events:auto;opacity:1;}"])
t.StyledResetButton=o},mCdf:function(e,t,r){"use strict"
var n=r("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var i=n(r("lwsE")),o=n(r("W8MJ")),l=n(r("a1gu")),c=n(r("Nsbk")),s=n(r("PJYZ")),u=n(r("7W2i")),p=n(r("lSNA")),d=n(r("q1tI")),a=n(r("17x9")),h=r("ZXhj"),m=r("1qiG")
function f(t,e){var r=Object.keys(t)
if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t)
e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)}return r}function v(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{}
e%2?f(r,!0).forEach(function(e){(0,p.default)(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):f(r).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}var g=function(e){function a(){var e,f;(0,i.default)(this,a)
for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n]
return f=(0,l.default)(this,(e=(0,c.default)(a)).call.apply(e,[this].concat(r))),(0,p.default)((0,s.default)(f),"getAuxiliaryLinesStyle",function(e,t){return{top:(0,m.toPercentage)(e.top/t.height),left:(0,m.toPercentage)(e.left/t.width),width:(0,m.toPercentage)(e.width/t.width),height:(0,m.toPercentage)(e.height/t.height)}}),(0,p.default)((0,s.default)(f),"getAuxiliaryLinesLength",function(){var e={},t=f.props,r=t.baseRect,n=t.refRect,a=(0,h.getMinContainingRect)(r,n),i=a.width-n.width
0<a.height-(r.height+n.height)&&i>r.width/2&&(e.horizontal=i)
var o=a.height-n.height
return 0<a.width-(r.width+n.width)&&o>r.height/2&&(e.vertical=o),e}),(0,p.default)((0,s.default)(f),"getLineStyle",function(e,t){var r=f.props,n=r.baseRect,a=r.refRect,i=n.left>a.left,o=n.top>a.top,l={}
if(e){var c,s=e/a.width
l.horizontal=(c={},(0,p.default)(c,o?"bottom":"top",0),(0,p.default)(c,i?"right":"left",(0,m.toPercentage)(-s)),(0,p.default)(c,"width",(0,m.toPercentage)(s)),c)}if(t){var u,d=t/a.height
l.vertical=(u={},(0,p.default)(u,i?"right":"left",0),(0,p.default)(u,o?"bottom":"top",(0,m.toPercentage)(-d)),(0,p.default)(u,"height",(0,m.toPercentage)(d)),u)}return l}),f}return(0,u.default)(a,e),(0,o.default)(a,[{key:"render",value:function(){var e=this.props,t=e.refRect,r=e.screen,n=e.style,a=this.getAuxiliaryLinesLength(),i=a.horizontal,o=a.vertical
if(!i&&!o)return null
var l=this.getAuxiliaryLinesStyle(t,r),c=this.getLineStyle(i,o)
return d.default.createElement("div",{className:"smart-auxiliary-lines",style:l},i&&d.default.createElement("div",{className:"line horizontal",style:v({},c.horizontal,{borderTopStyle:"".concat(n.dashed?"dashed":"solid"),borderTopColor:n.colorForLines})}),o&&d.default.createElement("div",{className:"line vertical",style:v({},c.vertical,{borderLeftStyle:"".concat(n.dashed?"dashed":"solid"),borderLeftColor:n.colorForLines})}))}}]),a}(d.default.Component);(t.default=g).propTypes={baseRect:a.default.object,
refRect:a.default.object,screen:a.default.object,style:a.default.object}},mMVB:function(e,t,r){"use strict"
var n=r("284h"),a=r("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var o=a(r("lwsE")),l=a(r("W8MJ")),c=a(r("a1gu")),s=a(r("Nsbk")),u=a(r("PJYZ")),d=a(r("7W2i")),f=a(r("lSNA")),i=a(r("17x9")),p=n(r("q1tI")),h=r("/MKj"),m=a(r("bNtH")),v=function(e){function i(){var e,t;(0,o.default)(this,i)
for(var r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a]
return t=(0,c.default)(this,(e=(0,s.default)(i)).call.apply(e,[this].concat(n))),(0,f.default)((0,u.default)(t),"handleScroll",function(e){return t.props.dispatch({type:"entry:preview:set:canvas:offset",payload:{offset:e}})}),t}return(0,d.default)(i,e),(0,l.default)(i,[{key:"render",value:function(){var e=this.props,t=e.canvasOffset,r=e.screen,n=e.scale,a=e.viewport,i=a.width,o=a.height,l={x:Math.max(3.5*i,r.width*n/100*2),y:Math.max(3.5*o,r.height*n/100*2)}
return p.default.createElement(m.default,{canvasOffset:t,viewportWidth:i,viewportHeight:o,canvasRange:l,onScroll:this.handleScroll})}}]),i}(p.PureComponent);(0,f.default)(v,"propTypes",{canvasOffset:i.default.object,dispatch:i.default.func,scale:i.default.number,screen:i.default.object,viewport:i.default.object})
var g=(0,h.connect)(function(e){var t=e.container.common,r=t.offset,n=t.scale,a=t.viewport,i=e.model,o=i.current.screenCid
return{canvasOffset:r,scale:n,screen:i.screens.find(function(e){return e.cid===o}),viewport:a}})(v)
t.default=g},mesP:function(e,t,r){"use strict"
var n=r("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var a=r("/MKj"),i=n(r("BVfv")),o=(0,a.connect)(function(e){var t=e.model.user,r=e.container.previewSetting
return{isLogin:Boolean(t.id),unit:r.unit,emPixel:r.emPixel,ratio:r.ratio,language:r.language,isShowColorPicker:r.isShowColorPicker,colorUnit:r.colorUnit}})(i.default)
t.default=o},mfFm:function(e,t,r){e.exports={"global-attributes":"_2WW4d3N_h0ptLMSIJiNVZb","layer-name":"lHQ2gR47fywCXPyoNOQt-",header:"_3jioi4K2B2yOsbmLPodNyM",panel:"YjFkC1l7Pq0gsLgl2dq1C",container:"_3_XaUvUOzD1MeTPSGbtmJY",copyBtn:"M4cHnCN2XUVYXQ2Ez48Vk","layer-load":"_3f1x0LwZiq_7c8_TaXvySo",spinner:"xKsPnP6rU53wBVIz85ai_","rotate-infinite":"_2ch38-nvB58TUdWQkKGJJo"}},mggN:function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.listItem=t.disabled=t.textEllipsis=void 0
var n=r("vOnD"),a=(0,n.css)(["white-space:nowrap;overflow:hidden;text-overflow:ellipsis;"])
t.textEllipsis=a
var i=(0,n.css)(["position:relative;pointer-events:none;&::after{content:'';position:absolute;top:0;left:0;width:100%;height:100%;cursor:not-allowed;pointer-events:auto;}"])
t.disabled=i
var o=(0,n.css)(["position:relative;height:32px;padding-left:14px;display:flex;align-items:center;border:1px solid transparent;color:",";cursor:pointer;.expander{width:12px;margin-top:1px;margin-left:-12px;text-align:center;color:",
";}.editable-span{margin-right:14px;width:100%;height:24px;line-height:22px;overflow:hidden;}.actions{display:none;position:absolute;top:0;right:0;height:100%;padding-left:6px;background:inherit;.Dropdown > button{display:flex;padding:8px 10px;padding-left:0;}.action{margin-right:6px;font-size:12px;color:",";&:hover{color:",";}}&.is-active{display:flex;align-items:center;color:#298df8;}}&:hover{.actions{display:flex;align-items:center;color:#8d9ea7;}}&:hover,&.hover{color:",";background:",
";}&.active{color:",";background:",";}"],function(e){return e.theme.listItem.tc},function(e){return e.theme.listItem.expander_color},function(e){return e.theme.listItem.action_color},function(e){return e.theme.listItem.action_hover_color},function(e){return e.theme.listItem.hover.tc},function(e){return e.theme.listItem.hover.bg},function(e){return e.theme.listItem.active.tc},function(e){return e.theme.listItem.active.bg})
t.listItem=o},mreW:function(e,t,r){"use strict"
var n=r("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.entryMap=void 0
var a=n(r("lSNA")),o=n(r("zkrS")),i=r("2eJi"),l=r("upRB")
function c(t,e){var r=Object.keys(t)
if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t)
e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)}return r}var s=function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{}
e%2?c(r,!0).forEach(function(e){(0,a.default)(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(r).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}({},i.entryMap,{"entry:state:init":function(e){var t=e.dispatch
t({type:"user:set",payload:o.default.MB.user||void 0}),t({type:"teams:refresh"}),t({type:"widgets:refresh"}),t({type:"projects:refresh"}),t({type:"screens:refresh"}),t({type:"collaborators:refresh"}),t({type:"entry:add-mock-collaborator"}),t({type:"entry:current:set",payload:{project:o.default.MB.currentProject,screen:o.default.MB.currentScreen}})},"entry:state:clear":function(e){e.dispatch},"entry:sync-runner:set-screen":function(e,t){var r=e.dispatch,n=e.getState,a=t.payload.cid
r({type:"entry:current:set-screen",payload:{cid:a}})
var i=n()
a!==(0,l.getRunnerState)(i).activeCid&&("inspect"===(0,l.getCurrentMode)(i)&&r({type:"SET_VISIBILITY_SCREEN",payload:{screenID:a}}),o.default.MB.runner.timerHandler.clear(),r({type:"entry:runner:activate:screen",payload:{screenCid:a,transition:void 0}}))},"entry:refresh:team-related":function(e){var t=e.dispatch
t({type:"teams:refresh"}),t({type:"collaborators:refresh"}),t({type:"entry:add-mock-collaborator"}),t({type:"entry:current:set",payload:{project:o.default.MB.currentProject,screen:o.default.MB.currentScreen}})},"entry:refresh:project-related":function(e){var t=e.dispatch
t({type:"projects:refresh"}),t({type:"screens:refresh"}),t({type:"widgets:refresh"}),t({type:"collaborators:refresh"}),t({type:"entry:add-mock-collaborator"}),t({type:"entry:current:set",payload:{project:o.default.MB.currentProject,screen:o.default.MB.currentScreen}})},"entry:preview:clear":function(e,t){var r=e.dispatch
r({type:"reducer:preview-panel:reset"}),r({type:"container:layers:clear"})}})
t.entryMap=s},mxnB:function(e,t,r){},nQhf:function(e,t,r){"use strict"
var n=r("284h"),a=r("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var i=a(r("lSNA")),o=a(r("lwsE")),l=a(r("W8MJ")),c=a(r("a1gu")),s=a(r("Nsbk")),u=a(r("7W2i")),d=n(r("q1tI")),f=a(r("17x9")),p=r("/MKj"),h=a(r("8jgF"))
function m(t,e){var r=Object.keys(t)
if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t)
e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)}return r}var v=function(e){function t(){return(0,o.default)(this,t),(0,c.default)(this,(0,s.default)(t).apply(this,arguments))}return(0,u.default)(t,e),(0,l.default)(t,[{key:"render",value:function(){var e=this.props,t=e.open,r=e.event,n=e.loggedIn,a=e.inMobile,i=e.dispatch
return d.default.createElement("div",null,t&&!n&&d.default.createElement(h.default,{inMobile:a,event:r,isOpen:t,onClose:function(){return i("event-sign-up:close:modal")}}))}}]),t}(d.PureComponent)
v.propTypes={open:f.default.bool,inMobile:f.default.bool,event:f.default.object,loggedIn:f.default.bool,dispatch:f.default.func}
var g=(0,p.connect)(function(e){return function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{}
e%2?m(r,!0).forEach(function(e){(0,i.default)(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):m(r).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}({},e.container.eventSignUpModal,{loggedIn:!!e.model.user.id,inMobile:MB.isMobile()})})(v)
t.default=g},nU12:function(e,t,r){"use strict"
var n=r("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.reducerMap=t.entryMap=void 0
var u=n(r("lSNA")),a=r("WVP6"),s=n(r("iScx")),d=n(r("TZdj")),f=n(r("uW4e")),p=n(r("4YeV")),h=n(r("Emwt")),l=n(r("ni9f")),i=n(r("flWF")),m=n(r("HFhh")),v=n(r("JXIg")),g=n(r("zkrS")),y=r("oose"),b=r("tQ2B")
function o(t,e){var r=Object.keys(t)
if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t)
e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)}return r}var c=function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{}
e%2?o(r,!0).forEach(function(e){(0,u.default)(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(r).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}({},s.default.entryMap,{},d.default.entryMap,{},f.default.entryMap,{},p.default.entryMap,{},h.default.entryMap,{},l.default.entryMap,{},i.default.entryMap,{},m.default.entryMap,{},v.default.entryMap,{"entry:add-mock-collaborator":function(e){function t(e,t){
var r="co_MOCK_".concat(e.cid)
o.has(r)||n({type:"collaborators:add-local",payload:{cid:r,role:"owner",user_id:e.owner_id,name:e.owner_name,email:e.owner_email||"email_MOCK_".concat(e.owner_id),avatar:e.owner_avatar,team_cid:t?e.cid:null,project_cid:t?null:e.cid}})}var n=e.dispatch,r=l.default.getState(),a=p.default.getState(),i=s.default.getState(),o=new Set(i.map(function(e){return e.cid}))
r.forEach(function(e){return t(e,!0)}),a.forEach(function(e){return t(e,!1)})},"entry:current:set":function(e,t){var r=e.dispatch,n=t.payload,a=n.project,i=n.screen,o=v.default.getState(),l=a&&a.cid||o.projectCid,c=i&&i.cid||o.screenCid
r({type:"current:set",payload:{project:a=p.default.getState().find(function(e){return e.cid===l}),screen:i=h.default.getState().find(function(e){return e.cid===c}),userCollaborator:a&&function(t,r){var n=m.default.getState()
return n&&s.default.getState().find(function(e){return e.user_id===n.id&&(e.project_cid===t||e.team_cid===r)})}(a.cid,a.team_cid)}})},"entry:current:set-screen":function(e,t){var r=e.dispatch,n=t.payload.cid,a=h.default.getState().find(function(e){return e.cid===n})
if(!a)return console.warn("[entry:current:set-screen] non exist screen with cid: ".concat(n))
r({type:"entry:current:set",payload:{screen:a}})},"entry:comment:init-project-data":function(e){var l=e.dispatch,c=v.default.getState().projectCid,s=p.default.getState().find(function(e){return e.cid===c});(0,y.fetchProjectComment)({projectCid:c,projectAccessToken:s.access_token}).then(function(e){var t=e.org,r=e.team,n=e.members,a=e.threads,i=e.comments;(0,b.refreshCommentData)({comments:i,threads:a}),l({type:"comment-threads:refresh"}),l({type:"comments:refresh"}),l({type:"screens:refresh"})
var o={isProjectAllowComment:"allow"===(0,y.getProjectAllowCommentStatus)(s),projectAccessMap:(0,u.default)({},s.owner_id,"project_owner"),teamAccessMap:t&&t.accesses||{},orgAccessMap:r&&r.accesses||{},memberList:n||[]}
l({type:"container:comment:loaded-project",payload:{projectCid:c,projectCommentData:o}})})},"entry:comment-threads:add":function(e,t){e.getState
var r=e.dispatch,n=t.payload,a=n.top,i=n.left,o=n.message,l=m.default.getState(),c=v.default.getState().screenCid,s=.001*Date.now(),u=g.default.SpineModel.requestCid("cmth")
r({type:o?"comment-threads:add":"comment-threads:add-local",payload:{cid:u,top:a,left:i,screen_cid:c,user_id:l.id,created_at:s,updated_at:s}}),o&&r({type:"comments:add",payload:{thread_cid:u,message:o,user_id:l.id,created_at:s,updated_at:s}}),r({type:"container:comment:focus",payload:{focusCommentThreadCid:u}})},"entry:comment-threads:update":function(e,t){var r=e.dispatch,n=(e.getState,t.payload),a=n.cid,i=n.top,o=n.left,l=void 0===d.default.getState().find(function(e){return e.thread_cid===a}),
c=.001*Date.now()
r({type:l?"comment-threads:update-local":"comment-threads:update",payload:{cid:a,top:i,left:o,updated_at:c}})},"entry:comment-threads:delete":function(e,t){var r=e.dispatch,n=t.payload.cid
r({type:"comment-threads:delete",payload:{cid:n}}),d.default.getState().forEach(function(e){return e.thread_cid===n&&r({type:"comments:delete-local",payload:e})})},"entry:comments:add":function(e,t){var r=e.dispatch,n=t.payload,a=n.thread_cid,i=n.message,o=m.default.getState(),l=.001*Date.now()
r({type:"comment-threads:save",payload:{cid:a}}),r({type:"comments:add",payload:{thread_cid:a,message:i,user_id:o.id,created_at:l,updated_at:l}}),r({type:"container:comment:focus",payload:{focusCommentThreadCid:null}})},"entry:comments:update":function(e,t){var r=e.dispatch,n=t.payload
r({type:"comments:update",payload:{cid:n.cid,message:n.message,updated_at:.001*Date.now()}})},"entry:state:push-data":function(e,t){var r=e.dispatch,n=t.payload,a=n.pushType,i=n.action,o=n.data
switch(a){case"comment-threads":var l=f.default.getState().find(function(e){return e.cid===o.cid})
"update"!==i||l?"update"===i&&l?r({type:"comment-threads:update-local",payload:o}):"destroy"===i&&l&&(r({type:"comment-threads:delete-local",payload:o}),d.default.getState().forEach(function(e){return e.thread_cid===o.cid&&r({type:"comments:delete-local",payload:e})})):r({type:"comment-threads:add-local",payload:o})
break
case"comments":var c=d.default.getState().find(function(e){return e.cid===o.cid})
"update"!==i||c?"update"===i&&c?r({type:"comments:update-local",payload:o}):"destroy"===i&&c&&r({type:"comments:delete-local",payload:o}):r({type:"comments:add-local",payload:o})}}})
function S(r,e){var n=e.getState,a=e.setState,i=n()
return function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:i,t=1<arguments.length?arguments[1]:void 0
return t.type!==r?e:(a(t.payload||e),n())}}t.entryMap=c
var w={collaborators:S("reducer:collaborators:update",s.default),comments:S("reducer:comments:update",d.default),commentThreads:S("reducer:comment-threads:update",f.default),projects:S("reducer:projects:update",p.default),screens:S("reducer:screens:update",h.default),teams:S("reducer:teams:update",l.default),widgets:S("reducer:widgets:update",i.default),user:(0,a.createStateStoreReducer)("reducer:user:update",m.default),current:(0,a.createStateStoreReducer)("reducer:current:update",v.default)}
t.reducerMap=w},naIL:function(e,t,r){e.exports={"screen-panel":"_2acqq9r0j1_EMjnbcJAZI7"}},ni9f:function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
function n(i,o){return s(function(e,t,r){var n=t.dispatch,a=r&&r.payload
n({type:"reducer:teams:update",payload:i(e,a,o)})})}var a=r("WVP6"),i=r("Ehhz").MODEL_OPERATION_MAP.Team,o=(0,a.createStateStore)([]),l=o.getState,c=o.setState,s=o.wrapEntry,u={entryMap:{"teams:refresh":n(i.refreshStateList,!1),"teams:add":n(i.addState,!1),"teams:add-local":n(i.addState,!0),"teams:update":n(i.updateState,!1),"teams:update-local":n(i.updateState,!0),"teams:delete":n(i.deleteState,!1),"teams:delete-local":n(i.deleteState,!0)},getState:l,setState:c}
t.default=u},"o/90":function(e,t,r){"use strict"
var n=r("284h"),a=r("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
function i(e){var t=document.querySelector(".full-screen header"),r=document.querySelector(".full-screen #mb-preview-leftpane"),n=document.querySelector(".full-screen #mb-preview-rightpane"),a=document.querySelector("#preview_scrollBar_viewport"),i=Array.from(a.querySelectorAll(".track, .handler")),o=document.querySelector("#simulator-container"),l=[t,r,n].concat((0,p.default)(i)).filter(function(e){return e})
"hide"===e?(o.style.overflow="visible",l.forEach(function(e){return e.style.opacity=0}),setTimeout(function(){return l.forEach(function(e){return e.style.pointerEvents="none"})},300)):"show"===e&&(o.style.overflow="hidden ",l.forEach(function(e){return e.style.pointerEvents="auto"}),setTimeout(function(){return l.forEach(function(e){return e.style.opacity=1})},300))}var o=a(r("lwsE")),l=a(r("W8MJ")),c=a(r("a1gu")),s=a(r("Nsbk")),u=a(r("PJYZ")),d=a(r("7W2i")),f=a(r("lSNA")),p=a(r("RIqP")),h=a(r("17x9")),m=n(
r("q1tI")),v=a(r("DKAG")),g=a(r("p2ZH")),y=a(r("2b0G")),b=a(r("4QcC")),S=a(r("ER7e")),w=a(r("Kurm")),E=a(r("TSYQ")),C=function(e){function t(e){var l
return(0,o.default)(this,t),l=(0,c.default)(this,(0,s.default)(t).call(this,e)),(0,f.default)((0,u.default)(l),"setMode",function(e){var t=l.state.isDarkMode,r=e.target.dataset.mode
"light"===r&&t&&l.setState({isDarkMode:!1}),"dark"!==r||t||(MB.event("preview","工具栏: 全屏模式暗色背景"),l.setState({isDarkMode:!0}))}),(0,f.default)((0,u.default)(l),"handleKeyDown",function(e){37===e.keyCode&&l.goToScreenByStep(-1),39===e.keyCode&&l.goToScreenByStep(1)}),(0,f.default)((0,u.default)(l),"handleNavigate",function(e){var t=e.currentTarget.dataset.action
"last"===t?(MB.event("*","运行页-预览-全屏模式-点击上一页"),l.goToScreenByStep(-1)):"next"===t&&(MB.event("*","运行页-预览-全屏模式-点击下一页"),l.goToScreenByStep(1))}),(0,f.default)((0,u.default)(l),"handleExitFullScreen",function(){l.props.dispatch({type:"entry:exit:fill-screen-mode"})}),(0,f.default)((0,u.default)(l),"goToScreenByStep",function(e){var t=l.props,r=t.screen,n=t.screenInOrder,a=t.dispatch,i=r.cid,o=n.findIndex(function(e){return e===i})+e
if(o<0)l.setState({shouldTextShow:!0,reachFirstScreen:!0})
else if(o>n.length-1)l.setState({shouldTextShow:!0,reachLastScreen:!0})
else{a({type:"entry:sync-runner:set-screen",payload:{cid:n[o]}}),a({type:"preview:set:canvas:offset",payload:{offset:{x:0,y:0}}}),l.setState({shouldTextShow:!0,reachFirstScreen:!1,reachLastScreen:!1})}}),l.state={isDarkMode:!1,shouldTextShow:!1,reachFirstScreen:!1,reachLastScreen:!1},l}return(0,d.default)(t,e),(0,l.default)(t,[{key:"componentDidMount",value:function(){i("hide")}},{key:"componentWillUnmount",value:function(){i("show")}},{key:"componentDidUpdate",value:function(e){var t=this
if(this.state.shouldTextShow&&(clearTimeout(this.timer),this.timer=setTimeout(function(){return t.setState({shouldTextShow:!1})},1500)),this.props.screen!==e.screen){var r=this.props,n=r.screen,a=r.screenInOrder,i=n.cid,o=a.findIndex(function(e){return e===i})
0!==o&&this.setState({reachFirstScreen:!1}),o!==a.length-1&&this.setState({reachLastScreen:!1})}}},{key:"render",value:function(){var e=this.state,t=e.isDarkMode,r=e.shouldTextShow,n=e.reachFirstScreen,a=e.reachLastScreen,i=this.props,o=i.screen,l=i.screenInOrder,c=i.dispatch,s=i.scale
return m.default.createElement("div",{className:(0,E.default)(w.default["full-screen-actions"],{"dark-mode":t})},m.default.createElement("div",{className:(0,E.default)("zoom-wrapper",{"is-Iniframe":MB.isUIChina()||MB.isForum()})},m.default.createElement(b.default,{fromFullScreen:!0,scale:s,dispatch:c})),m.default.createElement(S.default,{onClickMode:this.setMode,onClickExit:this.handleExitFullScreen}),m.default.createElement(g.default,{screen:o,screenInOrder:l,shouldTextShow:r,reachFirstScreen:n,
reachLastScreen:a}),m.default.createElement(y.default,{onClick:this.handleNavigate}),m.default.createElement(v.default,{target:document,onKeyDown:this.handleKeyDown}))}}]),t}(m.PureComponent)
t.default=C,(0,f.default)(C,"propTypes",{dispatch:h.default.func,screen:h.default.object,screenInOrder:h.default.array,scale:h.default.number})},oKLx:function(e,t,r){},oQ6s:function(e,t,r){},oSKl:function(e,t,r){},oose:function(e,t,r){"use strict"
var n=r("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"reducer",{enumerable:!0,get:function(){return s.reducer}}),Object.defineProperty(t,"fetchProjectComment",{enumerable:!0,get:function(){return u.fetchProjectComment}}),t.getProjectAllowCommentStatus=t.CommentContainer=t.CommentMarkerPanelContainer=void 0
var a=r("/MKj"),i=n(r("zkrS")),o=r("/5+U"),l=r("3xeE"),c=r("94Et"),m=r("rbsZ"),s=r("ZY2Q"),v=r("fiFu"),u=r("VQzC"),d=i.default.I18N,f=(0,a.connect)(function(e){var t=e.model,r=t.user.id,n=t.current,a=(n.userRole,n.screenCid),i=n.projectCid,o=(n.teamCid,t.projects),l=t.screens,c=(t.collaborators,t.commentThreads),s=t.comments,u=e.container.comment,d=u.loadedProjectCid,f=u.loadedProjectCommentData,p=u.focusCommentThreadCid,h=u.focusSource,m=u.tempCommentThreadMarker
return{isLoaded:d===i,permissionPack:S(o,i,r,f),getUserProfile:w(f),screenName:b(l,a),commentThreadList:g(c,a),commentListMap:y(s),focusCommentThreadCid:p,focusSource:h,tempCommentThreadMarker:m}})(l.CommentLayer)
t.CommentContainer=f
var p=(0,a.connect)(function(e){var t=e.model,r=t.user.id,n=t.current,a=(n.userRole,n.screenCid),i=n.projectCid,o=(n.teamCid,t.projects),l=(t.collaborators,t.commentThreads),c=e.container.comment,s=c.loadedProjectCid,u=c.loadedProjectCommentData,d=c.focusCommentThreadCid,f=(c.focusSource,c.tempCommentThreadMarker)
return{isLoaded:s===i,permissionPack:S(o,i,r,u),markerDomPack:E(a),commentThreadList:g(l,a),focusCommentThreadCid:d,tempCommentThreadMarker:f}})(c.CommentMarkerPanel)
t.CommentMarkerPanelContainer=p
var g=(0,o.immutableTransformCache)(function(e,t){return e.filter(function(e){return e.screen_cid===t})}),y=(0,o.immutableTransformCache)(function(e){return e.reduce(function(e,t){return void 0===e[t.thread_cid]?e[t.thread_cid]=[t]:e[t.thread_cid].push(t),e},{})}),b=(0,o.immutableTransformCache)(function(e,t){return e.find(function(e){return e.cid===t}).name}),S=(0,o.immutableTransformCache)(function(e,t,r,n){if(!n)return{isProjectAllowComment:!1,getPermission:function(){return!1},permissionDenyMessage:"",
userAuthStatus:(0,v.getUserAuthStatus)(r,[])}
var a=n.isProjectAllowComment,i=n.projectAccessMap,o=n.teamAccessMap,l=n.orgAccessMap,c=n.memberList,s=[i[r],o[r],l[r]].filter(Boolean).join("|")
console.log("userTitleString")
var u,d,f=Boolean(s),p=s.includes("admin")||s.includes("owner"),h=(0,v.getCommentPermission)()
return{isProjectAllowComment:a,getPermission:a?function(e){return(0,v.getCommentPermission)(f,p,r,e)}:function(){return h},permissionDenyMessage:a?"":(u=e.find(function(e){return e.cid===t}),d=C(u),(0,m.getRenewMessage)("comment_".concat(d),{action:"comment_".concat(d)})),userAuthStatus:(0,v.getUserAuthStatus)(r,c)}}),w=(0,o.immutableTransformCache)(function(e){var t=e&&e.memberList.reduce(function(e,t){var r=t.user_id,n=t.avatar,a=t.name
return e[r]={avatar:n,name:a},e},{})||{}
return function(e){return t[e]||h}}),h={name:d.preview.comment.user_name_ghost,avatar:"/images/avatar.png"},E=(0,o.immutableTransformCache)(function(e){return{getScreenContainerElement:function(){return document.querySelector("#pscreen".concat(e," .scontainer"))},getSimulatorContainerElement:function(){return document.querySelector("#simulator-container")}}}),C=function(e){
return!e||e.combo||e.template?"deny":e.limitation.commentable?"org_member"!==e.comment_permission?"deny_permission":"allow":"deny_limitation"}
t.getProjectAllowCommentStatus=C},os03:function(e,t,r){"use strict"
var n=r("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.withTimeoutRetry=t.createSaveQueue=void 0
function f(){}var p=n(r("o0o1")),h=n(r("yXPU")),m=r("Gw/l")
t.createSaveQueue=function(e){function a(e){u=e}var t=e.onError,i=e.doSave,r=e.beforeSave,o=void 0===r?f:r,n=e.afterSave,l=void 0===n?f:n,c=[],s=!1,u={},d=function(){var e=(0,h.default)(p.default.mark(function e(){var t,r,n
return p.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return o(),t=c,c=[],s=!0,e.next=6,(0,m.catchAsync)(i,t,a)
case 6:if(r=e.sent,n=r.error,s=!1,u={},n&&console.error("[Error][saveAsync] savingDataQueue: ".concat(t.length,", dataQueue: ").concat(c.length),n),n)throw n
e.next=13
break
case 13:l()
case 14:case"end":return e.stop()}},e)}))
return function(){return e.apply(this,arguments)}}()
return{clear:function(){c=[]},add:function(e){return c.push(e)},save:function(){!s&&c.length&&d().catch(t)},filter:function(e){c=c.filter(e)},getLength:function(){return c.length},getIsSaving:function(){return s},getSavingState:function(){return u}}}
var a=function(){var t=(0,h.default)(p.default.mark(function e(t){var r,n,a,i,o,l
return p.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:r=t.task,n=t.onError,a=t.timeout,i=t.retry,o=void 0===i?8:i,l=0
case 2:return e.prev=3,e.next=6,Promise.race([r({attempt:l,timeout:a}),new Promise(function(e,t){return setTimeout(function(){return t(new Error("[TIMEOUT] timeout after ".concat(a)))},a)})])
case 6:return e.abrupt("return",e.sent)
case 9:if(e.prev=9,e.t0=e.catch(3),o<=l)throw e.t0
e.next=13
break
case 13:return e.next=15,n(e.t0,{attempt:l,timeout:a})
case 15:l++
case 16:e.next=2
break
case 18:case"end":return e.stop()}},e,null,[[3,9]])}))
return function(e){return t.apply(this,arguments)}}()
t.withTimeoutRetry=a},p2ZH:function(e,t,r){"use strict"
var n=r("284h"),a=r("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var i=a(r("lwsE")),o=a(r("W8MJ")),l=a(r("a1gu")),c=a(r("Nsbk")),s=a(r("7W2i")),u=a(r("lSNA")),d=a(r("17x9")),f=n(r("q1tI")),p=a(r("6PGs")),h=a(r("TSYQ")),m=function(e){function t(){return(0,i.default)(this,t),(0,l.default)(this,(0,c.default)(t).apply(this,arguments))}return(0,s.default)(t,e),(0,o.default)(t,[{key:"render",value:function(){var e,t=this.props,r=t.screen,n=t.screenInOrder,a=t.shouldTextShow,i=t.reachFirstScreen,o=t.reachLastScreen,l=n.findIndex(function(e){return e===r.cid})
return e=i?I18N.preview.firstScreen:o?I18N.preview.lastScreen:"".concat(l+1," / ").concat(n.length),f.default.createElement("div",{className:(0,h.default)(p.default["screen-info"],{show:a})},f.default.createElement("div",null,e),f.default.createElement("span",{className:"dot"}),f.default.createElement("div",{className:"screen-name"},r.name))}}]),t}(f.PureComponent)
t.default=m,(0,u.default)(m,"propTypes",{screen:d.default.object,screenInOrder:d.default.array,shouldTextShow:d.default.bool,reachFirstScreen:d.default.bool,reachLastScreen:d.default.bool})},p6mf:function(e,t,r){"use strict"
var n=r("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var a=r("/MKj"),i=r("upRB"),o=n(r("6Y1W")),l=(0,a.connect)(function(e){return(0,i.getRunnerState)(e)})(o.default)
t.default=l},pVAx:function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.RECOMMEND_LIBRARY_BASIC_WIDGETS=t.LIBRARY_BASIC_WIDGETS=t.LAYOUT_BG_COLOR=t.LAYOUT=t.LAYOUT_PADDING=t.BASIC_WIDGET_NAMES=t.RECOMMEND=t.CLASSIC=t.BETA=t.SERVER_COUNTRY=void 0
var n=r("abHt"),a=MB.serverCountry
t.SERVER_COUNTRY=a
t.BETA="beta"
t.CLASSIC="classic"
t.RECOMMEND="recommend"
var i=["rich_text","rounded_rect","circle_rect","line","image_view","lr"]
t.BASIC_WIDGET_NAMES=i
t.LAYOUT_PADDING={h:20,v:10}
t.LAYOUT={row:{count:0,gutter:20,size:144},col:{count:4,gutter:20,size:0}}
t.LAYOUT_BG_COLOR="rgba(41, 141, 248, 0.24)"
var o=n.visibleComponentList.filter(function(e){return!i.includes(e.name)})
t.LIBRARY_BASIC_WIDGETS=o
var l=i.map(function(e){return n.componentMap[e]}).concat(o)
t.RECOMMEND_LIBRARY_BASIC_WIDGETS=l},peLG:function(e,t,r){},prTy:function(e,t,r){"use strict"
var n=r("284h"),a=r("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
function o(t,r){return new Promise(function(e){t.src=r,t.onload=function(){return e(t)},t.onerror=function(){return e()}})}var l=a(r("pVnL")),c=a(r("QILm")),s=a(r("o0o1")),u=a(r("yXPU")),d=a(r("lwsE")),f=a(r("W8MJ")),p=a(r("a1gu")),h=a(r("Nsbk")),m=a(r("PJYZ")),v=a(r("7W2i")),g=a(r("lSNA")),y=n(r("q1tI")),i=a(r("17x9")),b=r("ouuI"),S=r("/5+U"),w=(0,b.createAsyncTaskQueue)().pushTask,E=function(e){function i(){var e,t;(0,d.default)(this,i)
for(var r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a]
return t=(0,p.default)(this,(e=(0,h.default)(i)).call.apply(e,[this].concat(n))),(0,g.default)((0,m.default)(t),"getElementRef",function(e){return t.imageRef=e}),t}return(0,v.default)(i,e),(0,f.default)(i,[{key:"componentDidMount",value:function(){var i=this
w((0,u.default)(s.default.mark(function e(){var t,r,n,a
return s.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=i.props,r=t.src,n=t.adjustImage,e.next=3,o(i.imageRef,r)
case 3:a=e.sent,n&&a&&(0,S.adjustImageRect)({image:a,adjust:n})
case 5:case"end":return e.stop()}},e)}))).catch(function(e){return console.error(e)})}},{key:"render",value:function(){var e=this.props,t=(e.src,e.adjustImage,(0,c.default)(e,["src","adjustImage"]))
return y.default.createElement("img",(0,l.default)({alt:"",ref:this.getElementRef},t))}}]),i}(y.PureComponent);(t.default=E).propTypes={src:i.default.string,adjustImage:i.default.number}},q3nj:function(e,t,r){"use strict"
var n=r("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"reducerMap",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"PreviewContainer",{enumerable:!0,get:function(){return c.default}}),t.sagaMap=void 0
var a=n(r("j1JO")),i=n(r("yOnP")),o=r("tBsX"),l=n(r("cQH5")),c=n(r("aYzi")),s={layerSaga:o.saga,sliceSaga:a.default,artboardsSaga:i.default}
t.sagaMap=s},qOCw:function(e,t,r){"use strict"
var n=r("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.selectWithlanguageUnit=t.reduceTextLayer=t.getCodeAttributes=t.sortScreenLayers=t.getTextAttributes=t.getBaseAttributes=t.getTextContent=void 0
var m=n(r("RIqP")),a=n(r("wig9")),i=n(r("7tbW")),x=r("/5+U"),o=r("LbTH"),T=r("XrEr")
t.getTextContent=function(e){return(0,o.checkIfItemTextIsNewVersion)(e)?function(e){return JSON.parse(e).reduce(function(e,t,r,n){return e+(0===r?"":"\n")+t.children.reduce(function(e,t,r){return e+t.text},"")},"")}(e.text):function(e){return!!e&&e.replace(/<[^>]+>/gi,"")}(e.text)}
t.getBaseAttributes=function(e){var t=e.width,r=e.height,n=e.left,a=e.top,i=e.opacity,o=e.borderRadius,l=e.rotation,c=e.ratio,s=e.unit,u=(0,x.adapterScreen)(n,c,s),d=(0,x.adapterScreen)(a,c,s),f=(0,x.adapterScreen)(t,c,s),p=(0,x.adapterScreen)(r,c,s),h=o?String(o).split(",").map(function(e){return(0,x.adapterScreen)(parseInt(e)||0,c,s)}).join(" "):null,m=v(l)?null:"".concat(l,"°")
return{adapterLeft:u,adapterTop:d,adapterWidth:f,adapterHeight:p,radius:h,opacity:v(i)?null:"".concat(i,"%"),rotate:m}}
var v=function(e){return null===e||isNaN(e)||0===e}
t.getTextAttributes=function(e){var t=e.lineHeight,r=e.letterSpacing,n=e.unit,a=e.ratio
return{lineHeight:t=v(t)?null:(0,x.adapterScreen)(t,a,n),letterSpacing:r=v(r)?null:(0,x.adapterScreen)(r,a,n)}}
t.sortScreenLayers=function(e){var p=[],h=[]
return e.forEach(function(e){var t=e.bg_colors,r=void 0===t?[]:t,n=e.borders,a=void 0===n?[]:n,i=e.text_styles,o=void 0===i?[]:i,l=0<o.length?o[0]:{},c=l.color,s=l.font_face,u=[]
r.length&&(u=r.map(function(e){var t=e.value,r=e.type,n=void 0===r?"color":r,a=e.gradient,i=(0,T.getNormalRgbaColor)(t)
return"color"===n?i:y(a)})),u=g(u)
var d=[]
a.length&&(d=a.map(function(e){var t=e.color
return(0,T.getNormalRgbaColor)(t)})),d=g(d)
var f=c&&(0,T.getColorFromUnit)((0,T.parseSketchColor2rgba)(c),"rgba")
p.includes(f)||p.push(f),h.includes(s)||h.push(s),p=!(p=!p.includes(u)&&[].concat((0,m.default)(p),(0,m.default)(u))).includes(d)&&[].concat((0,m.default)(p),(0,m.default)(d))}),{screenColor:(0,i.default)((0,a.default)(p)).slice(0,14)||[],globalText:(0,a.default)(h)}}
var g=function(e){var t
return(t=[]).concat.apply(t,(0,m.default)(e))}
t.getCodeAttributes=function(e){var t,r,n,a,i,o,l,c,s,u=e.textStyles,d=e.borders,f=e.background,p=e.shadows,h=e.innerShadows,m=(e.colorUnit,e.unit),v=e.ratio
if(u.length){var g=u[0],y=g.color,b=g.font_size,S=g.font_face
t=y&&(0,T.getNormalRgbaColor)(y),r=(0,x.adapterScreen)(b,v,m),n=S}if(d.length){var w=d[0],E=w.position,C=void 0===E?"inside":E,k=w.color,_=w.thickness
a=(0,x.adapterScreen)(_,v,m),o=C,k&&(i=(0,T.getNormalRgbaColor)(k))}return f.length&&(l=(0,T.getNormalRgbaColor)(f[0].value)),p.length&&(c=P(p,m,v)),h.length&&(s=P(h,m,v,!0),c="".concat(c,", ").concat(s)),{fontFamily:n,fontSize:r,color:t,borderWidth:a,borderColor:i,borderPosition:o,backgroundColor:l,boxShadow:c}}
t.reduceTextLayer=function(e){if(0===e.length)return[]
var t=e.reduce(function(e,t){var r=t.font
return e.concat(r)},[])
return(0,m.default)(new Set(t))}
var P=function(e,g,y,t){var b=3<arguments.length&&void 0!==t&&t,S=e.length
return e.reduce(function(e,t,r){var n=t.color,a=t.offset_x,i=void 0===a?0:a,o=t.offset_y,l=void 0===o?0:o,c=t.blur_radius,s=void 0===c?0:c,u=t.spread,d=void 0===u?0:u,f=(0,x.adapterScreen)(i,y,g),p=(0,x.adapterScreen)(l,y,g),h=(0,x.adapterScreen)(s,y,g)
d=(0,x.adapterScreen)(d,y,g),n=(0,T.getNormalRgbaColor)(n)
var m=r<S-1?", ":"",v=b?"inset ":""
return e.concat("".concat(v).concat(f," ").concat(p," ").concat(h," ").concat(d," ").concat(n).concat(m))},"")},y=function(e){return e&&e.color_stops?e.color_stops.map(function(e){var t=e.color
return(0,T.getNormalRgbaColor)(t)}):T.DEFAULT_COLOR}
t.selectWithlanguageUnit=function(e){switch(e){case"swift":return"pt"
case"android":return"dp"
default:return"px"}}},qYFl:function(e,t,r){"use strict"
var n=r("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.isRemoteMtimeStale=t.updateWorkspaceMap=t.updateProject=t.updateTeam=t.updateCollaborator=t.updateAsset=void 0
var s=n(r("o0o1")),a=n(r("yXPU")),u=r("t3Un"),i=r("t77w"),d=r("tQ2B"),o=window,l=o.$,f=o.MB,c=o.Screen,p=o.Screenstate,h=o.Panel,m=o.Panelstate,v=o.Widget,g=o.Widgetstate,y=o.Link
t.updateAsset=function(e,t){if(!f.f.inSharing&&"create"===e){var r=new Asset
r.load(t),r.lsave(!1)}}
t.updateCollaborator=function(e,t){if(f.f.inSharing){if("update"===e){var r=Collaborator.find(t.cid)
r?r.refresh(t):((r=new Collaborator).load(t),r.lsave(!1)),f.webpackInterface.store.dispatch({type:"entry:state:init"})}if("destroy"===e){var n=Collaborator.find(t.cid)
if(!n)return
if(n.ldestroy(!1),n.user_id===f.user.id)return window.location.reload()}}else{if("update"===e){var a=Collaborator.find(t.cid)
a?a.refresh(t):((a=new Collaborator).load(t),a.lsave(!1)),f.webpackInterface.refreshAll()}if("destroy"===e){var i=Collaborator.find(t.cid)
if(!i)return
if(i.ldestroy(!1),i.user_id===f.user.id){var o=i.project_cid&&Project.find(i.project_cid),l=i.team_cid&&Team.find(i.team_cid)
o&&f.webpackInterface.deleteProjectByCid(o.cid),l&&f.webpackInterface.deleteTeamByCid(l.cid)}}}}
t.updateTeam=function(e,t){if(!f.f.inSharing){if("update"===e){var r=Team.find(t.cid)
r?r.refresh(t):((r=new Team).load(t),r.lsave(!1)),f.webpackInterface.refreshAll()}if("destroy"===e){var n=Team.find(t.cid)
n&&f.webpackInterface.deleteTeamByCid(n.cid)}}}
t.updateProject=function(e,t){if(!f.f.inSharing){if("update"===e){var r=Project.find(t.cid)
if(r){if(r.duplicating){var n=r.screens_count
r.refresh(t),r.screens_count=n}}else(r=new Project).load(t),r.screens_count||(r.screens_count=2),r.lsave(!1)
f.webpackInterface.refreshAll(),r.duplicating||l("#notification").removeClass("active"),f.f.isDuplicatingDemo&&!r.duplicating&&(f.f.isDuplicatingDemo=!1,f.webpackInterface.navigateTo("/workspace/apps/".concat(r.cid)))}if("destroy"===e){var a=Project.find(t.cid)
if(a)f.webpackInterface.deleteProjectByCid(a.cid)
else{var i=Template.find(t.cid)
i&&(i.ldestroy(!1),f.renderTemplateList())}}l(".timeago").timeago()}}
var b={Screen:function(e,t){if("update"===e){var r=c.find(t.cid)
r?(r.refresh(t),f.currentScreen.cid===r.cid&&f.updateCurrentScreen()):((r=new c).load(t),r.lsave(!1)),f.currentProject&&f.currentProject.cid===r.project_cid&&f.action("update:screens:all",{screens:f.currentProject.cscreens()})}else if("destroy"===e){var n=c.find(t.cid)
if(!n)return
n.ldestroy(!1),f.currentProject&&f.currentProject.cid===n.project_cid&&f.action("entry:remove:from:screen-history",{cids:[n.cid]})}},Screenstate:function(e,t){var r=c.find(f.currentScreen.cid)
if("update"===e){var n=p.find(t.cid)
n?n.refresh(t):((n=new p).load(t),n.lsave(!1)),r&&r.cid===n.screen_cid&&f.updateCurrentScreen()}else if("destroy"===e){var a=p.find(t.cid)
if(!a)return
a.ldestroy(!1),r&&r.cid===a.screen_cid&&(r.state_cid===a.cid&&(r.setState("default",!0),f.action("set:current:screen",{screen:r}),ScreenManager.updateWidgetList()),f.updateCurrentScreen())}},Panel:function(){var n=(0,a.default)(s.default.mark(function e(t,r,n){var a,i,o,l,c
return s.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a=f.getCurrentScreen(),"update"!==t){e.next=30
break}if(i=h.find(r.cid)){e.next=25
break}if(e.prev=4,Template.find(r.template_cid)){e.next=12
break}return e.next=9,(0,u.requestJSON)("/templates/".concat(r.template_cid,".json"))
case 9:o=e.sent,(0,d.refreshTemplateData)(o),f.Pusher.enableSocketChannel(o.template.cid)
case 12:if((l=new h).load(r),l.lsave(!1),f.renderTemplateList(),a===l.screen_cid)return e.abrupt("return",ScreenManager.updateWidgetList())
e.next=18
break
case 18:e.next=23
break
case 20:e.prev=20,e.t0=e.catch(4),console.warn(e.t0)
case 23:e.next=28
break
case 25:if(i.refresh(r),a===i.screen_cid)return e.abrupt("return",ScreenManager.updateWidgetList())
e.next=28
break
case 28:e.next=41
break
case 30:if("destroy"!==t){e.next=41
break}if(c=h.find(r.cid)){e.next=34
break}return e.abrupt("return")
case 34:if(a===c.screen_cid)return c.ldestroy(!1),f.action("selection:unselect:items",{cids:[c.cid]}),e.abrupt("return",ScreenManager.updateWidgetList())
e.next=40
break
case 40:return e.abrupt("return",c.ldestroy(!1))
case 41:case"end":return e.stop()}},e,null,[[4,20]])}))
return function(e,t,r){return n.apply(this,arguments)}}(),Panelstate:function(e,t){var r=c.find(f.currentScreen.cid)
if("update"===e){var n=m.find(t.cid)
if(n?n.refresh(t):((n=new m).load(t),n.lsave(!1)),r&&r.state_cid===n.screenstate_cid){var a=h.find(n.panel_cid)
a.screenstate_cid===n.screenstate_cid&&(a.restore(n),a.lsave(!1),ScreenManager.updateWidgetList())}}},Widget:function(e,t){return function(e,t){var r=f.getCurrentScreen()
if("update"===e){var n=v.find(t.cid)
n?n.refresh(t):((n=new v).load(t),n.lsave(!1)),r===n.screen_cid&&ScreenManager.updateWidgetList()}else if("destroy"===e){var a=v.find(t.cid)
if(!a)return
a.ldestroy(!1),r===a.screen_cid&&(f.action("selection:unselect:items",{cids:[a.cid]}),ScreenManager.updateWidgetList())}}(e,(0,i.decompressRichText)(t))},Widgetstate:function(e,t){return function(e,t){var r=c.find(f.currentScreen.cid)
if("update"===e){var n=g.find(t.cid)
if(n?n.refresh(t):((n=new g).load(t),n.lsave(!1)),r&&r.state_cid===n.screenstate_cid){var a=v.find(n.widget_cid)
a.screenstate_cid===n.screenstate_cid&&(a.restore(n),a.lsave(!1),ScreenManager.updateWidgetList())}}}(e,(0,i.decompressRichText)(t))},Link:function(e,t){var r,n=f.getCurrentScreen()
if("update"===e)(r=y.find(t.cid))?r.refresh(t):((r=new y).load(t),r.lsave(!1))
else if("destroy"===e){if(!(r=y.find(t.cid)))return
r.ldestroy(!1)}r&&n===r.screen_cid&&f.renderLinks()}}
t.updateWorkspaceMap=b
var S={Asset:Asset,Collaborator:Collaborator,Team:Team,Project:Project,Screen:c,Screenstate:p,Panel:h,Panelstate:m,Widget:v,Widgetstate:g,Link:y}
t.isRemoteMtimeStale=function(e,t,r){var n=S[e]&&S[e].findByAttribute("cid",t)
return n&&n.mtime>r}},qc8Y:function(e,t,r){"use strict"
var n=r("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.StyledPreviewPanel=void 0
var a=n(r("vOnD")).default.div.withConfig({displayName:"styles__StyledPreviewPanel",componentId:"snkhg3-0"})([
"position:relative;width:240px;height:100%;font-size:12px;color:#525e71;background-color:#fff;box-shadow:0 -2px 30px rgba(39,54,78,0.11);header{height:32px;padding-left:10px;padding-right:12px;display:flex;justify-content:flex-end;background:#f2f3f4;overflow:hidden;.preview-panel-nav{height:26px;align-self:flex-end;background:transparent;& > li{width:60px;border-radius:4px 4px 0 0;transition:all 0.2s ease-out;.nav-icon{color:#5b6b73;.icon{font-size:14px;width:14px;height:14px;}.screen-icon{position:relative;margin-left:-17px;&::after{content:"
,";position:absolute;bottom:-5px;left:6px;font-size:20px;padding:0 5px 0 7px;min-width:36px;height:24px;border-radius:12px;background-color:#ededed;color:#415058;text-align:center;line-height:24px;transform:scale(0.5);}}}&.active .nav-icon{color:#ff6161;}:not(.active):hover{background:#fcfcfc;.nav-icon{.svg-icon{color:#5b6b73;.fore{fill:#8d9ea7;}}}}}.background-cube{background:#fff;box-shadow:0 -2px 7px 0 rgba(0,0,0,0.06);border-radius:4px 4px 0 0;}}}&.is-uichina{box-shadow:none;}"],function(e){
return"'".concat(e.screensCount,"'")})
t.StyledPreviewPanel=a},rESR:function(e,t,r){"use strict"
var n=r("284h"),a=r("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var l=a(r("pVnL")),c=a(r("QILm")),i=a(r("lwsE")),o=a(r("W8MJ")),s=a(r("a1gu")),u=a(r("Nsbk")),d=a(r("PJYZ")),f=a(r("7W2i")),p=a(r("lSNA")),h=n(r("q1tI")),m=a(r("17x9")),v=n(r("DqDi")),g=n(r("i6OX")),y=a(r("xo+i")),b=r("gSgL"),S=r("qc8Y"),w=a(r("TSYQ")),E=[{key:"screen",icon:h.default.createElement(g.default,{type:"dora",className:"screen-icon",name:"file_text"}),title:I18N.preview.pages},{key:"images",icon:h.default.createElement(g.SVGIcon,{name:"design/slice_image"}),title:I18N.preview.images}],C=function(
e){function r(e){var t
return(0,i.default)(this,r),t=(0,s.default)(this,(0,u.default)(r).call(this,e)),(0,p.default)((0,d.default)(t),"setElementRef",function(e){return t.$elem=e}),(0,p.default)((0,d.default)(t),"handTooltip",function(){$(t.$elem).tooltip({selector:".preview-panel-nav li",container:"body",placement:"bottom",trigger:"hover"})}),(0,p.default)((0,d.default)(t),"handleTabChange",function(e){t.setState({activeIndex:e})}),t.state={activeIndex:0},t}return(0,f.default)(r,e),(0,o.default)(r,[{
key:"UNSAFE_componentWillReceiveProps",value:function(e){"inspect"!==e.toolbarActiveItem&&this.setState({activeIndex:0})}},{key:"componentDidMount",value:function(){this.handTooltip()}},{key:"render",value:function(){var e=this.props,t=e.isDemo,r=e.project,n=e.screensCount,a=e.toolbarActiveItem,i=this.state.activeIndex,o="inspect"==a&&!MB.isHTMLZip()?E:E.slice(0,1)
return h.default.createElement(S.StyledPreviewPanel,{className:(0,w.default)("preview-panel",{"is-uichina":MB.isUIChina()||MB.isForum()}),ref:this.setElementRef,screensCount:n},h.default.createElement("header",null,h.default.createElement(v.default,{className:"preview-panel-nav",activeIndex:i,onTabChange:this.handleTabChange},o.map(function(e){var t=e.key,r=(0,c.default)(e,["key"])
return h.default.createElement(v.NavItem,(0,l.default)({key:t},r))}))),0==i?h.default.createElement(y.default,{toolbarActiveItem:a,isDemo:t}):h.default.createElement(b.SliceContainer,{projectName:r.name}))}}]),r}(h.PureComponent)
t.default=C,(0,p.default)(C,"propTypes",{project:m.default.object.isRequired,screensCount:m.default.number.isRequired,toolbarActiveItem:m.default.string.isRequired,isDemo:m.default.bool})},rj4U:function(e,t,r){e.exports={"sub-toolbar":"_36M0EnWmupoUQr_9gigZKX","select-input":"_3MtH7pd8WrUFM8CcUqRDzh"}},rtgd:function(e,t,r){e.exports={"preview-toolbar":"_3kKqNauE-PaVHPIZg_7k-D"}},rwIS:function(e,t,r){e.exports={"guide-button":"_31FtTxh_wpy1_6DRt1eNdq"}},sEfC:function(e,t,r){var y=r("GoyQ"),b=r("QIyF"),S=r(
"tLB3"),w=Math.max,E=Math.min
e.exports=function(n,r,e){var a,i,o,l,c,s,u=0,d=!1,f=!1,t=!0
if("function"!=typeof n)throw new TypeError("Expected a function")
function p(e){var t=a,r=i
return a=i=void 0,u=e,l=n.apply(r,t)}function h(e){var t=e-s
return void 0===s||r<=t||t<0||f&&o<=e-u}function m(){var e=b()
if(h(e))return v(e)
c=setTimeout(m,function(e){var t=r-(e-s)
return f?E(t,o-(e-u)):t}(e))}function v(e){return c=void 0,t&&a?p(e):(a=i=void 0,l)}function g(){var e=b(),t=h(e)
if(a=arguments,i=this,s=e,t){if(void 0===c)return function(e){return u=e,c=setTimeout(m,r),d?p(e):l}(s)
if(f)return clearTimeout(c),c=setTimeout(m,r),p(s)}return void 0===c&&(c=setTimeout(m,r)),l}return r=S(r)||0,y(e)&&(d=!!e.leading,o=(f="maxWait"in e)?w(S(e.maxWait)||0,r):o,t="trailing"in e?!!e.trailing:t),g.cancel=function(){void 0!==c&&clearTimeout(c),a=s=i=c=void(u=0)},g.flush=function(){return void 0===c?l:v(b())},g}},tBsX:function(e,t,r){"use strict"
var n=r("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"saga",{enumerable:!0,get:function(){return c.default}}),t.reducers=t.default=void 0
var a=n(r("lSNA")),i=r("ANjH"),o=r("/MKj"),l=n(r("xx4x")),c=n(r("7bR1")),s=n(r("eNKG")),u=n(r("ee4a")),d=r("Kkl0")
function f(t,e){var r=Object.keys(t)
if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t)
e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)}return r}var p=(0,i.combineReducers)(function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{}
e%2?f(r,!0).forEach(function(e){(0,a.default)(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):f(r).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}({},s.default,{},u.default))
t.reducers=p
var h=(0,o.connect)(function(e){var t=e.container,r=t.layers,n=t.common.keyFlags.isSpaceDown,a=t.previewSetting,i=a.toolbarActiveItem,o=a.isSelectLayer,l=a.isShowColorPicker,c=r.activeLayerID,s=r.resourceByScreen[r.visibilityScreenID]||{},u=s.isFetching,d=void 0===u||u,f=s.error
return{isActive:"inspect"==i,isSpaceDown:n,isSelectLayer:o,isShowColorPicker:l,isFetching:d,activeLayerID:c,error:void 0===f?"":f}},function(t){return{requestSelectLayer:function(e){t((0,d.requestSelectLayer)(e))},handleShowlayerInfo:function(e){t({type:"reducer:preview-toolbar:update",payload:{isSelectLayer:e}})}}})(l.default)
t.default=h},tLB3:function(e,t){e.exports=function(e){return e}},tRkt:function(e,t,r){"use strict"
var n=r("284h"),a=r("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var i=a(r("lwsE")),o=a(r("W8MJ")),l=a(r("a1gu")),c=a(r("Nsbk")),s=a(r("PJYZ")),u=a(r("7W2i")),d=a(r("lSNA")),f=a(r("17x9")),p=n(r("q1tI")),h=a(r("43RC")),m=a(r("6gQ3")),v=r("oose"),g=a(r("zgSj")),y=r("1iCU"),b=r("/Mon"),S=function(e){function t(e){var r
return(0,i.default)(this,t),r=(0,l.default)(this,(0,c.default)(t).call(this,e)),(0,d.default)((0,s.default)(r),"toggleMinimized",function(e){var t=r.props.toolbarActiveItem
r.setState({isMinimized:e}),MB.event("preview","".concat(y.TOOLBAR_TRAKING_CONFIG[t],",点击了").concat(e?"收起":"展开","列表"))}),r.state={isMinimized:MB.isUIChina()||MB.isForum()},r}return(0,u.default)(t,e),(0,o.default)(t,[{key:"render",value:function(){var e=this.props,t=e.isLayerPanelShow,r=e.isCommentPanelShow,n=e.isScreenPanelShow,a=this.state.isMinimized
if(!(t||r||n))return null
var i=n?240:260
return p.default.createElement(b.StyledRightPane,{id:"mb-preview-rightpane",style:{width:a?0:i}},n&&p.default.createElement(p.default.Fragment,null,p.default.createElement("div",{className:"preview-panel-wrapper"},p.default.createElement(m.default,null)),p.default.createElement(h.default,{placement:"left",isMinimized:a,onClick:this.toggleMinimized})),t&&p.default.createElement(g.default,null),r&&p.default.createElement(v.CommentContainer,null))}}]),t}(p.PureComponent)
t.default=S,(0,d.default)(S,"propTypes",{toolbarActiveItem:f.default.string,isScreenPanelShow:f.default.bool,isLayerPanelShow:f.default.bool,isCommentPanelShow:f.default.bool})},tajm:function(e,t,r){"use strict"
var n=r("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.patchGlobalAutoSaverPusher=void 0
var p=n(r("o0o1")),h=n(r("yXPU")),m=r("Edok"),v=r("Vk5q"),g=r("iKZC"),y=r("ycqN"),b=r("3caq"),S=r("Clcl"),w=window.MB
t.patchGlobalAutoSaverPusher=function(){var r,t,e=(0,g.createAutoSaveQueue)({delay:2e4,onError:(t=(0,h.default)(p.default.mark(function e(t){return p.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return(0,S.REPORT_ERROR)(t,"[AutoSaveQueue] unhandled error",a()),e.next=3,(0,y.SAVE_NUKE_SEQUENCE)(t,t.status)
case 3:case"end":return e.stop()}},e)})),function(e){return t.apply(this,arguments)}),doSave:(r=(0,h.default)(p.default.mark(function e(t,r){var n
return p.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=(0,v.processSaveQueue)(t),e.next=3,(0,g.doSaveWithSocketAndFallback)({setSavingState:r,getAutoSaveQueueState:a,saveChunkList:(0,m.arraySplitChunk)(n,64),saveQueueLength:n.length,getSaveItemInfo:v.getSaveItemInfo,isSocketAvailable:function(){return w.Pusher.getIsSocketConnected()},doSocketBatchSave:v.doSocketBatchSave,onSocketError:v.onSocketError,doFallbackSaveItem:v.doFallbackSaveItem,onFallbackError:v.onFallbackError})
case 3:case"end":return e.stop()}},e)})),function(e,t){return r.apply(this,arguments)})}),a=e.getState,n=e.getIsEmpty,i=e.getIsSaving,o=e.getDelay,l=e.setDelay,c=e.add,s=e.addEventListener,u=e.filterSaveQueue,d=e.triggerSave,f=e.afterCurrentSave
s("beforesave",function(){w.setSaving&&w.setSaving(!0)}),s("aftersave",function(){w.currentProject&&(w.currentProject.timestamp=String(.001*Date.now()),w.currentProject.updated_at=(new Date).toISOString(),w.currentProject.lsave(!1)),w.setSaving&&w.setSaving(!1),w.renderCoWorkers&&w.renderCoWorkers()}),w.Pusher=(0,b.createWorkspacePusher)({filterStaleData:function(o){var l=new Set,c=[]
return u(function(e){var t=e.record,r=t.cid,n=t.mtime,a=o[r],i=!a||a<n
return i?l.add(r):c.push(e),i}),{remoteStaleCidSet:l,localStaleDataList:c}}}),w.AutoSaver={getState:a,getIsEmpty:n,getIsSaving:i,getDelay:o,setDelay:l,triggerSave:d,afterCurrentSave:f,add:function(e){var t=e.record,r=e.isDelete,n=void 0!==r&&r
t.mtime=w.Pusher.getSocketTimestamp(),c({record:t,isDelete:n})}},(0,y.PATCH_AUTO_SAVE_RELATED)()}},tfo6:function(e,t,r){"use strict"
var n=r("284h"),a=r("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var o=a(r("J4zp")),l=a(r("lwsE")),i=a(r("W8MJ")),c=a(r("a1gu")),s=a(r("Nsbk")),u=a(r("PJYZ")),d=a(r("7W2i")),f=a(r("lSNA")),p=a(r("17x9")),h=n(r("q1tI")),m=a(r("DKAG")),v=a(r("lwmc")),g=function(e){function t(e){var i
return(0,l.default)(this,t),i=(0,c.default)(this,(0,s.default)(t).call(this,e)),(0,f.default)((0,u.default)(i),"handleExpand",function(e,t){e.stopPropagation()
var r=i.state.collapseKeySet,n=t.cid,a=new Set(r)
r.has(n)?a.delete(n):a.add(n),i.setState({collapseKeySet:a})}),(0,f.default)((0,u.default)(i),"handleActivate",function(e,t){var r=i.props,n=r.activeCid,a=r.dispatch
e.stopPropagation(),n===t.cid?i.handleExpand(e,t):(a({type:"entry:sync-runner:set-screen",payload:{cid:t.cid}}),a({type:"preview:set:canvas:offset",payload:{offset:{x:0,y:0}}}))}),(0,f.default)((0,u.default)(i),"handleKeyDown",function(e){(e.ctrlKey||e.metaKey)&&(186==e.keyCode&&(e.preventDefault(),i.resetExpandAll()),222==e.keyCode&&(e.preventDefault(),i.closeExpanedAll()))}),(0,f.default)((0,u.default)(i),"resetExpandAll",function(){i.setState({collapseKeySet:new Set})}),(0,f.default)((0,u.default)(i),
"closeExpanedAll",function(){var e=(i.props.screenTreeData||{}).childListMap,a=new Set
Object.entries(e).map(function(e){var t=(0,o.default)(e,2),r=t[0],n=t[1]
Array.isArray(n)&&n.length&&a.add(r)}),i.setState({collapseKeySet:a})}),i.state={collapseKeySet:new Set},i.treeProps={renderItem:e.renderCommentIcon,handleScreenItemActions:{handleExpand:i.handleExpand,handleActivate:i.handleActivate}},i}return(0,d.default)(t,e),(0,i.default)(t,[{key:"componentDidUpdate",value:function(e){if(e.activeCid!==this.props.activeCid){var t=Screen.find(this.props.activeCid)
if(t.parent_cid){var r=this.state.collapseKeySet,n=new Set(r)
r.has(t.parent_cid)&&n.delete(t.parent_cid),this.setState({collapseKeySet:n})}}}},{key:"render",value:function(){var e=this.props,t=e.activeCid,r=e.isSearching,n=e.screenTreeMap,a=e.screenDataMap
return h.default.createElement(h.default.Fragment,null,h.default.createElement(v.default,{collapseKeySet:this.state.collapseKeySet,activeCid:t,isSearching:r,screenTreeMap:n,screenDataMap:a,treeProps:this.treeProps}),h.default.createElement(m.default,{target:document,onKeyDown:this.handleKeyDown}))}}]),t}(h.PureComponent)
t.default=g,(0,f.default)(g,"propTypes",{activeCid:p.default.string,isSearching:p.default.bool,screenTreeData:p.default.object,screenTreeMap:p.default.object,screenDataMap:p.default.object,renderCommentIcon:p.default.func,dispatch:p.default.func})},tjcH:function(e,t,r){"use strict"
var n=r("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var a=n(r("lwsE")),i=n(r("W8MJ")),o=n(r("yLV6")),l=window.Shake,c=function(){function e(){(0,a.default)(this,e),this.hightTimer=null}return(0,i.default)(e,[{key:"init",value:function(e){var t=this,r=new o.default(e,{touchAction:"auto",inputClass:MB.isMobile()?o.default.TouchInput:null})
r.get("swipe").set({direction:o.default.DIRECTION_ALL,velocity:.05,threshold:50}),r.on("swipeleft",function(e){t.prepareJump(e,"left")}),r.on("swiperight",function(e){t.prepareJump(e,"right")}),r.on("swipeup",function(e){t.prepareJump(e,"up")}),r.on("swipedown",function(e){t.prepareJump(e,"down")}),r.on("press",function(e){t.prepareJump(e,["hold","longpress"])}),r.on("tap",function(e){1===e.tapCount&&t.prepareJump(e,["tap","click"]),2===e.tapCount&&(MB.runner.eventBucket.resetCoolDown(),t.prepareJump(e,[
"dtap","dbclick"]))}),new l({threshold:15}).start(),window.addEventListener("shake",function(e){t.prepareJump(e,"shake")},!1),this.hammertime=r}},{key:"prepareJump",value:function(e,t){var r=MB.runner,n=r.eventBucket,a=r.runnerUtil,i=r.timerHandler,o=r.currentMenu
if(!a.getIsImmersive()){var l=i.getIsPageTimerFired()
if(n.isCoolDown()&&!l){var c,s=$(e.target).closest(".clickable"),u=$(e.target).closest(".ppanel")
if(c=t.includes("shake")?o?$("#pscreen".concat(o)):$(".pcanvas.active"):$(e.target).closest(".pcanvas"),o&&c.data("cid")!==o)return MB.runner.closeMenu()
if(u.length){if(this.panelEventHandler(e,t))return}else if(s.length){var d=Link.find(s.attr("data-link_cid"))
if(d&&t.includes(d.gesture))return MB.runner.j(d)}var f=c.data("cid"),p=Screen.find(f)
if(p){var h=[]
Link.records.forEach(function(e){e.widget_cids===p.cid&&e.sourcestate_cid===p.state_cid&&t.includes(e.gesture)&&h.push(e)})
var m=p.globalLinks(p.state_cid).filter(function(e){return t.includes(e.gesture)})
m.length?MB.runner.j(m[0]):t.includes("hold")&&MB.messageBucket&&!window.parent.webkit?MB.messageBucket.send("settings"):MB.runner.runnerUtil.getIsHighlight()&&this.highlightClickables()}}}}},{key:"panelEventHandler",value:function(e,n){var t=$(e.target).closest(".clickable"),r=$(e.target).closest(".ppanel"),a=r.find(".pstate.active"),i=r.data("cid"),o=Panel.find(i)
if(t.length){var l=Link.find(t.attr("data-link_cid"))
if(!l)return!1
if("prev"===l.target_cid)return MB.runner.j(l),!0
if(n.includes(l.gesture)){if(r[0]===t[0])MB.runner.j(l)
else{var c=Screen.find(l.target_cid)
if(c&&c.project_cid!==o.template_cid)MB.runner.j(l)
else{if(MB.runner.timerHandler.getIsPanelTimerFired(o.cid))return!1
l.targetstate_cid?MB.runner.chameleonTransition(i,l):MB.runner.panelScreenTransition(o.cid,l)}}return!0}}if(MB.runner.timerHandler.getIsPanelTimerFired(o.cid))return!1
var s=Screen.find(a.data("cid"))
if(!s)return!1
var u=null
return s.cwidgets().forEach(function(e){if(!u&&"pg"===e.name){var t=Widgetstate.find(s.state_cid+e.cid)||e,r=Link.find(t.link_cids)
r&&n.includes(r.gesture)&&(r.targetstate_cid?MB.runner.chameleonTransition(i,r):MB.runner.panelScreenTransition(o.cid,r),u=!0)}}),!!u}},{key:"highlightClickables",value:function(){var e=$(".pcanvas.active .region")
e.show(),$(".pcanvas.active .pg").css({display:"flex",opacity:.8}),this.hightTimer=setTimeout(function(){e.hide(),$(".pcanvas.active .pg").css("opacity","0").hide()},400)}},{key:"setupPageGesture",value:function(e){var t=[]
e.clinks().forEach(function(e){"left"!==e.gesture&&"right"!==e.gesture||-1===t.indexOf("pan-y")&&t.push("pan-y"),"up"!==e.gesture&&"down"!==e.gesture||-1===t.indexOf("pan-x")&&t.push("pan-x")})
var r=t.length?t.join(" "):"auto"
this.hammertime.touchAction.actions=r,$(".pcanvas.active .widgets").css("touch-action",r)}}]),e}()
t.default=c},tpxX:function(e,t,r){var n=r("jl5L")("round")
e.exports=n},uW4e:function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
function n(i,o){return s(function(e,t,r){var n=t.dispatch,a=r&&r.payload
n({type:"reducer:comment-threads:update",payload:i(e,a,o)})})}var a=r("WVP6"),i=r("Ehhz").MODEL_OPERATION_MAP.CommentThread,o=(0,a.createStateStore)([]),l=o.getState,c=o.setState,s=o.wrapEntry,u={entryMap:{"comment-threads:refresh":n(i.refreshStateList,!1),"comment-threads:save":n(i.saveState,!1),"comment-threads:add":n(i.addState,!1),"comment-threads:add-local":n(i.addState,!0),"comment-threads:update":n(i.updateState,!1),"comment-threads:update-local":n(i.updateState,!0),"comment-threads:delete":n(
i.deleteState,!1),"comment-threads:delete-local":n(i.deleteState,!0)},getState:l,setState:c}
t.default=u},udLg:function(e,t,r){"use strict"
var n=r("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var a=n(r("lwsE")),i=n(r("W8MJ")),o=n(r("Aq2W")),l=n(r("YwNm")),c=n(r("tjcH")),s=n(r("wmEP")),u=function(){function e(){(0,a.default)(this,e),this.eventBucket=new o.default,this.runnerUtil=new l.default,this.eventHandler=new c.default,this.timerHandler=new s.default,this.clearCallbackBucket={},this._bindWindowEvent()}return(0,i.default)(e,[{key:"_bindWindowEvent",value:function(){var e=this
MB.isMobile()&&window.addEventListener("message",function(e){try{if("back"===JSON.parse(e.data).event)1===MB.webpackInterface.store.getState().container.runner.history.length&&MB.messageBucket?MB.messageBucket.send("exit"):MB.webpackInterface.store.dispatch({type:"entry:runner:back-to-prev-page",payload:{transition:{name:"none",delay:0,duration:0}}})}catch(e){}},!1),MB.isMobile()&&(window.onorientationchange&&window.addEventListener("orientationchange",function(){e.reload()}),window.addEventListener(
"resize",function(){"INPUT"!==document.activeElement.tagName&&e.reload()}))}},{key:"init",value:function(e,t){var r=this
MB.event("ga-0","send","pageview",{page:"/workspace/app/preview"}),console.log("runner - init: ",e,t),$("#app").show(),e.setup(),this.eventHandler.init(document.querySelector("#app")),this.currentScreen=this.currentMenu=null,MB.webpackInterface.store.dispatch({type:"runner:generate:widgets-query-map"}),MB.webpackInterface.store.dispatch({type:"entry:runner:init:home-screen",payload:{activeCid:t.cid}})
var n=setTimeout(function(){if(MB.webpackInterface.store.dispatch({type:"entry:runner:activate:screen",payload:{screenCid:t.cid}}),$("#simulator .splash").hide(),$("#splash").hide(),MB.webpackInterface.checkLocationHash(),MB.messageBucket){MB.messageBucket.request({type:"message:set:record",payload:{key:"preview-ready",value:!0}}),MB.messageBucket.send("ready")
var e=setTimeout(function(){MB.messageBucket.send("ready")},5e3)
r.clearCallbackBucket.redundantReady=function(){return clearTimeout(e)}}},1e3)
this.clearCallbackBucket.init=function(){return clearTimeout(n)}}},{key:"clear",value:function(){Object.values(this.clearCallbackBucket).forEach(function(e){return e()}),this.runnerUtil.clear(),this.timerHandler.clear(),MB.webpackInterface.store.dispatch({type:"runner:reset:state"})}},{key:"closeMenu",value:function(e){MB.webpackInterface.store.dispatch({type:"entry:runner:back-to-prev-page",payload:{callback:e}})}},{key:"j",value:function(e){if(e&&e.target_cid!==this.runnerUtil.getCurrentScreen().cid){
this.timerHandler.clear()
var t,r=e.target_cid
if(this.currentMenu)r===this.currentScreen?this.closeMenu():e.targetstate_cid?this.stateTransition(e):this.closeMenu((t=this,function(){return t.j(e)}))
else switch(e.link_type){case Link.TYPE.screen_link:this.screenTransition(e)
break
case Link.TYPE.state_link:this.stateTransition(e)
break
case Link.TYPE.panel_link:var n=Panel.find(e.target_cid)
n.multi_states?this.chameleonTransition(n.cid,e):this.panelScreenTransition(n.cid,e)
break
default:console.error("Unknown Link Type",e)}}}},{key:"screenTransition",value:function(e){var t={name:e.transition,delay:1e3*parseFloat(e.ani_delay),duration:1e3*parseFloat(e.ani_duration),offset:/drawer|menu/.test(e.transition)?e.menu_offset:100},r=e.target_cid
"prev"===r?(console.log("runner - screenTransition: 跳转到上一页"),MB.webpackInterface.store.dispatch({type:"entry:runner:back-to-prev-page",payload:{transition:t}})):(console.log("runner - screenTransition: 跳转到页面: ",Screen.find(r).name),Screen.find(r).orient()!==this.runnerUtil.getCurrentScreen().orient()?MB.webpackInterface.store.dispatch({type:"entry:runner:activate:screen",payload:{screenCid:r,resetTargetScreen:e.reset,transition:void 0}}):MB.webpackInterface.store.dispatch({
type:"entry:runner:activate:screen",payload:{screenCid:r,resetTargetScreen:e.reset,transition:t}}))}},{key:"stateTransition",value:function(e){console.log("runner - stateTransition",e)
var t={delay:1e3*parseFloat(e.ani_delay),duration:1e3*parseFloat(e.ani_duration)}
MB.webpackInterface.store.dispatch({type:"entry:runner:activate:screen-state",payload:{screenCid:e.screen_cid,stateCid:e.targetstate_cid,transition:t}})}},{key:"panelScreenTransition",value:function(e,t){console.log("runner - panelScreenTransition: ",e,t)
var r={name:["leftmenu","rightmenu","leftdrawer","rightdrawer"].includes(t.transition)?"none":t.transition,delay:1e3*parseFloat(t.ani_delay),duration:1e3*parseFloat(t.ani_duration),offset:/drawer|menu/.test(t.transition)?t.menu_offset:100}
MB.webpackInterface.store.dispatch({type:"entry:runner:activate:panel-screen",payload:{panelCid:e,panelScreenCid:t.target_cid,transition:r}})}},{key:"chameleonTransition",value:function(e,t){var r=t.targetstate_cid,n=Panel.find(e).ct().homeScreen()
if(n.state_cid!==r){console.log("runner - chameleonTransition: ",r),this.timerHandler.resetPanelTimerFlag(e),n.setState(r,!0)
var a={delay:1e3*parseFloat(t.ani_delay),duration:1e3*parseFloat(t.ani_duration)}
MB.webpackInterface.store.dispatch({type:"entry:runner:update:chameleon",payload:{chameleonCid:e,stateCid:r,transition:a}})}}},{key:"donePanelScreenTransition",value:function(e,t){console.log("runner - donePanelScreenTransition: ",e,t)
var r=document.querySelector("#state"+e+t+"p"),n=Panel.find(e)
this.timerHandler.resetPanelTimerFlag(n.cid),r.offsetParent&&(this.setupPanelWebPage($(r)),this.timerHandler.setupPanelTimers(n,t))}},{key:"doneTransition",value:function(e){console.log("runner - doneTransition: ",e)
var t=Screen.find(e)
this.timerHandler.setupPageTimers(t),this.setupWebpage(t),MB.isStandAlone()&&this.runnerUtil.setupStatusBar(t),MB.isAndroid()&&this.eventHandler.setupPageGesture(t),this.timerHandler.resetPageTimerFlag(),MB.currentScreen=t,MB.webpackInterface.updateCurrentScreenRunner(t),this.runnerUtil.renderScrollbar(t.cid)
var r=MB.isMobile()||MB.isEmbedded()||!this.runnerUtil.getIsScreenExpanded()
this.runnerUtil.toggleScrollBar(r),setTimeout(function(){MB.webpackInterface.store.dispatch({type:"entry:runner:preload:screens"})},10)}},{key:"reload",value:function(){console.log("runner - reload")
var e=this.runnerUtil.getCurrentScreen()
MB.webpackInterface.store.dispatch({type:"entry:runner:reload:screen",payload:{activeCid:e.cid}}),this.runnerUtil.renderScrollbar(e.cid),this.runnerUtil.resetScrollState()}},{key:"setupWebpage",value:function(e){var i=this
e.cpanels().forEach(function(e){$(".pcanvas [data-cid="+e.cid+"]").each(function(e,t){var r=$(t).find(".state.active")
i.setupPanelWebPage(r)})}),e.cwidgets().forEach(function(a){"webpage"===a.name&&$(".pcanvas [data-cid="+a.cid+"]").each(function(e,t){var r=$(t).find(".iframe")[0],n=a.text?a.text.replace(/&amp;/g,"&"):"about:blank"
i.runnerUtil.setObjectUrl(r,n)})})}},{key:"setupPanelWebPage",value:function(r){var n=this
Screen.find(r.data("cid")).cwidgets().forEach(function(e){if("webpage"===e.name&&e.text){var t=r.find("[data-cid="+e.cid+"]")
n.runnerUtil.setObjectUrl(t.find(".iframe")[0],e.text.replace(/&amp;/g,"&"))}})}}]),e}()
t.default=u},v8PR:function(e,t,r){},vRqJ:function(e,t,r){"use strict"
var n=r("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:l,t=1<arguments.length?arguments[1]:void 0,r=t.type,n=t.payload
switch(r){case"reducer:artboards:success":return o({},e,{},n)
case"reducer:artboards:fail":return o({},e,{},n,{error:!0})
default:return e}}
var a=n(r("lSNA"))
function i(t,e){var r=Object.keys(t)
if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t)
e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{}
e%2?i(r,!0).forEach(function(e){(0,a.default)(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(r).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}var l={artboards:[],error:!1}},vbsp:function(e,t,r){"use strict"
var n=r("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.StyledRadioLine=void 0
var a=n(r("vOnD")).default.ol.withConfig({displayName:"style__StyledRadioLine",componentId:"sc-15893ui-0"})(["display:flex;justify-content:center;height:100%;align-items:center;background:",";color:#7d8694;border-radius:2px;overflow:hidden;text-align:center;border:",";&.radio-line{height:22px;margin-bottom:14px;}.check-line{&.active{background:",";}}&.quick-radius{margin-bottom:0;li:first-child{border-right:",
";}}.radio-option{flex:1;display:flex;width:100%;height:100%;justify-content:center;align-items:center;position:relative;cursor:pointer;.radio-content{display:flex;justify-content:center;align-items:center;position:relative;}.move-cube{&.active{position:absolute;left:0;top:0;width:100%;height:100%;border-left:1px solid ",";border-right:1px solid ",";background:",
";transition:transform 0.2s ease-in-out;}}.main{fill:#7d8694;}.secondary{fill:#c8cdd0;}&.active{color:#298df8;cursor:default;.main{fill:#298df8;}.svg-icon{.secondary{fill:rgba(41,141,248,0.4);}}}&.disabled{color:#c8cdd0;background-color:#f7f7f7;cursor:not-allowed;}&:hover:not(.disabled){color:#298df8;.main{fill:#298df8;}.svg-icon{.secondary{fill:rgba(41,141,248,0.4);}}}}&.disabled{.radio-option{color:#c8cdd0;cursor:not-allowed;svg:only-child,.main{fill:#c8cdd0;}&:hover{color:#c8cdd0;}}.move-cube{&.active{background:"
,";border-left:transparent;border-right:transparent;}}}"],function(e){return e.theme.radioLine.bg},function(e){return e.theme.radioLine.border},function(e){return e.theme.radioLine.active_bg},function(e){return e.theme.radioLine.border},function(e){return e.theme.radioLine.border_color},function(e){return e.theme.radioLine.border_color},function(e){return e.theme.radioLine.active_bg},function(e){return e.theme.radioLine.bg})
t.StyledRadioLine=a},veUc:function(e,t,r){"use strict"
var n=r("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.transformLayersFormat=void 0
var s=n(r("lSNA")),u=n(r("RIqP")),d=n(r("SA+Z")),f=r("0k54"),a=r("QDPf")
function p(t,e){var r=Object.keys(t)
if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t)
e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)}return r}t.transformLayersFormat=function(e){var t=(0,d.default)(e),r=t[0],n=t.slice(1),a={childrenLayers:[]},i={},o=[],l=[]
n.forEach(function(e){var t=e.id,r=e.panel_cid
"artboard-base"===t?Object.assign(a,e):"number"==typeof t?a.childrenLayers.push(e):r?i[r]?i[r].push(e):i[r]=[e]:"panel"===e.name?o.push(e):l.push(e)}),o.forEach(function(e){return e.childrenLayers=i[e.cid]})
var c=a.childrenLayers.length?[a]:[],s=[].concat(c,o,(0,u.default)(h(l))).sort(function(e,t){return e.z-t.z||e.timestamp-t.timestamp})
return[r].concat((0,u.default)(s))}
var h=function(e){if(0===e.length)return[]
var t=e[0].screen_cid
return(0,a.generateTreeData)(e.map(function(e){return new Widget(e)}),t).widgetTreeData.children.map(function(e){return i(e)})},i=function t(e){var r=e.cid,n=e.type,a=e.widget,i=e.children
if("widget"===n)return a
if("group"===n){var o=(0,f.getTreeBoundingRect)(e),l=o.minX,c=o.minY
return function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{}
e%2?p(r,!0).forEach(function(e){(0,s.default)(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):p(r).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}({},a,{id:r,width:o.maxX-l,height:o.maxY-c,top:c,left:l,childrenLayers:i.map(function(e){return t(e)})})}}},vmbo:function(e,t,r){"use strict"
var n=r("284h"),a=r("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var o=a(r("lwsE")),l=a(r("W8MJ")),c=a(r("a1gu")),s=a(r("Nsbk")),u=a(r("PJYZ")),d=a(r("7W2i")),f=a(r("lSNA")),i=a(r("17x9")),b=n(r("q1tI")),S=a(r("TSYQ")),w=r("/5+U"),E=r("l0oT")
r("zZYZ")
var p=function(e){function i(){var e,a;(0,o.default)(this,i)
for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n]
return a=(0,c.default)(this,(e=(0,s.default)(i)).call.apply(e,[this].concat(r))),(0,f.default)((0,u.default)(a),"onMouseEnter",function(e){-1!==a.props.activeLayerID&&a.props.enterLayer(a.props.layer.id)}),(0,f.default)((0,u.default)(a),"onMouseLeave",function(e){-1!==a.props.activeLayerID&&a.props.enterLayer(-1)}),(0,f.default)((0,u.default)(a),"handleClick",function(){var e=a.props,t=e.requestSelectLayer,r=e.layer.id,n=e.handleShowlayerInfo
t(r),n(!0)}),a}return(0,d.default)(i,e),(0,l.default)(i,[{key:"render",value:function(){var e=this.props,t=e.layer,r=e.activeLayerID,n=e.enteredLayerID,a=e.unit,i=e.ratio,o=t.id,l=t.src_width,c=t.src_height,s=t.rotation||0,u=o===r,d=o===n||-1===n,f=(0,S.default)("Layer",{"is-active":u,"is-focus":d}),p=t.kind?l:l*(0,E.cos)(s)+c*(0,E.sin)(s),h=t.kind?c:l*(0,E.sin)(s)+c*(0,E.cos)(s),m=(0,w.adapterScreen)(p,i),v=(0,w.adapterScreen)(h,i),g=t.kind?(0,w.adapterScreen)(t.origin_width||l,i):(0,w.adapterScreen)(l,i),
y=t.kind?(0,w.adapterScreen)(t.origin_height||c,i):(0,w.adapterScreen)(c,i)
return b.default.createElement("div",{className:f,"data-width":"".concat(m).concat(a),"data-height":"".concat(v).concat(a),"data-lid":o,onClick:this.handleClick,onMouseEnter:this.onMouseEnter,onMouseLeave:this.onMouseLeave},u&&b.default.createElement("span",{className:"LayerCorner left top"}),u&&b.default.createElement("span",{className:"LayerCorner left bottom"}),u&&b.default.createElement("span",{className:"LayerCorner right top"}),u&&b.default.createElement("span",{className:"LayerCorner right bottom"}),
u&&0!==s&&b.default.createElement("span",{className:"rect_info"},"".concat(g," x ").concat(y),"  ","".concat(s,"°")))}}]),i}(b.Component)
t.default=p,(0,f.default)(p,"propTypes",{layer:i.default.object,requestSelectLayer:i.default.func,enterLayer:i.default.func,handleShowlayerInfo:i.default.func,activeLayerID:i.default.oneOfType([i.default.number,i.default.string]),enteredLayerID:i.default.oneOfType([i.default.number,i.default.string]),unit:i.default.string,ratio:i.default.number})},wQP3:function(e,t,r){"use strict"
var n=r("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.TextLayerInfo=void 0
function a(e){var t=e.textStyles,r=void 0===t?[]:t,n=e.hiddSpacing,d=e.ratio,a=e.alignment,i=e.vertical_alignment,o=e.lineHeight,l=e.letterSpacing,f=e.unit,c=e.text,p=(e.o,e.colorUnit),h=e.fontStyle
return e.padding,m.default.createElement(v.WrapComponent,null,I18N.preview_panel.font,(0<r.length&&r.slice(0,1)).map(function(e,t){var r=e.color,n=e.font_size,a=e.location,i=e.font_face,o=e.fontStyle,l=(0,y.parseSketchColor2rgba)(r),c=(0,y.getColorFromUnit)(l,"rgba"),s=(0,g.adapterScreen)(n,d,f),u=(0,y.getColorFromUnit)(l,p)
return m.default.createElement("div",{key:"".concat(n).concat(a).concat(t)},i&&m.default.createElement(v.Base,{title:I18N.preview_panel.type_face,data:[i]}),(o||h)&&m.default.createElement(v.Base,{title:I18N.preview_panel.font_style,data:[o||h]}),c&&m.default.createElement(v.ColorInfo,{stateColor:u,title:I18N.preview_panel.color,rgbaColor:c}),s&&m.default.createElement(v.Base,{title:I18N.preview_panel.font_size,data:[s]}))}),a&&m.default.createElement(v.Base,{title:I18N.preview_panel.align,data:[a,i||"auto"
],dataValue:[I18N.preview_panel.horizontal_align,I18N.preview_panel.vertical_align]}),void 0!==r[0].paraSpacing?m.default.createElement(v.Base,{title:I18N.preview_panel.graph,data:[r[0].letterSpacing,r[0].lineHeight,r[0].paraSpacing],dataValue:[I18N.letter_spacing,I18N.text_line_height,I18N.para_spacing]}):o&&m.default.createElement(v.Base,{title:I18N.preview_panel.graph,data:[o,l||"auto"],dataValue:[I18N.preview_panel.line_height,I18N.preview_panel.letter_spacing],first:n}),c&&m.default.createElement(
v.Base,{text:c,title:I18N.preview_panel.content}))}var m=n(r("q1tI")),i=n(r("17x9")),v=r("RUem"),g=r("/5+U"),y=r("XrEr");(t.TextLayerInfo=a).propTypes={textStyles:i.default.array,fontStyle:i.default.string,alignment:i.default.string,vertical_alignment:i.default.string,hiddSpacing:i.default.bool,letterSpacing:i.default.oneOfType([i.default.string,i.default.bool]),lineHeight:i.default.oneOfType([i.default.string,i.default.bool]),paraSpacing:i.default.number,ratio:i.default.number,unit:i.default.string,
text:i.default.string,o:i.default.number,padding:i.default.number,colorUnit:i.default.string}},wfO3:function(e,t,r){},wmEP:function(e,t,r){"use strict"
var n=r("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var a=n(r("lwsE")),i=n(r("W8MJ")),o=n(r("f7BV")),l=function(){function e(){(0,a.default)(this,e),this.timerFired=!1,this.panelTimerMap={},this.timeoutBucket=new o.default}return(0,i.default)(e,[{key:"resetPageTimerFlag",value:function(){this.timerFired=!1}},{key:"getIsPageTimerFired",value:function(){return this.timerFired}},{key:"getIsPanelTimerFired",value:function(e){return this.panelTimerMap[e]}},{key:"resetPanelTimerFlag",value:function(e){this.panelTimerMap[e]=!1}},{key:"clear",value:function(){
this.timerFired=!1,this.panelTimerMap={},this.timeoutBucket.clear()}},{key:"setupPageTimers",value:function(e,t){var r=this,n=1<arguments.length&&void 0!==t?t:"default"
if(!MB.runner.runnerUtil.getIsImmersive()){this.timeoutBucket.clear()
var a=e.globalLinks(n)
e.citems().forEach(function(e){if("pg"!==e.name){var t="panel"===e.name?Panelstate.find(n+e.cid)||e:Widgetstate.find(n+e.cid)||e,r=Link.find(t.link_cids)
r&&a.push(r)}}),a.forEach(function(e){0<parseFloat(e.timer)&&(!e.targetstate_cid||e.sourcestate_cid===n)&&r.pageTimer(e)}),e.cpanels().forEach(function(e){r.setupPanelTimers(e,e.mainState().cid)})}}},{key:"setupPanelTimers",value:function(t,n){var r=this
if(this.timeoutBucket.clearTimeoutByKey(t.cid),this.panelTimerMap[t.cid]=!1,t.multi_states){var e=t.ct().homeScreen(),a=e.globalLinks(n)
e.cwidgets().forEach(function(e){if("pg"!==e.name){var t=Widgetstate.find(n+e.cid)||e,r=Link.find(t.link_cids)
r&&a.push(r)}}),a.forEach(function(e){0<parseFloat(e.timer)&&(!e.targetstate_cid||e.sourcestate_cid===n)&&(e.state_cid?r.pageTimer(e):r.panelTimer(e,t))})}else{var i=Screen.find(n)
i.clinks().forEach(function(e){0<parseFloat(e.timer)&&r.panelTimer(e,t)}),Link.findAllByAttribute("state_cid",i.cid).forEach(function(e){0<parseFloat(e.timer)&&r.pageTimer(e)})}}},{key:"pageTimer",value:function(e){var t=this
this.timeoutBucket.setTimeout(e.cid,function(){t.timerFired||(t.timerFired=!0,MB.runner.runnerUtil.getIsImmersive()||MB.runner.j(e))},1e3*parseFloat(e.timer))}},{key:"panelTimer",value:function(e,t){var r=this
this.timeoutBucket.setTimeout(t.cid,function(){r.timerFired||r.panelTimerMap[t.cid]||(r.panelTimerMap[t.cid]=!0,MB.runner.runnerUtil.getIsImmersive()||(e.targetstate_cid?MB.runner.chameleonTransition(t.cid,e):MB.runner.panelScreenTransition(t.cid,e)))},1e3*parseFloat(e.timer))}}]),e}()
t.default=l},xQM3:function(e,t,r){"use strict"
var n=r("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.getScreenContainerStyle=function(e,t,r,n,a){var i
if(n){var o,l=Math.min(r.width,r.height),c=Math.max(r.width,r.height),s=Math.min(t.width,t.height),u=Math.max(t.width,t.height),d=e.width!==s,f=r.width>r.height,p=d!=f
i=d?(o=c/u,{width:u,height:Math.min(s,l/o),transform:"".concat(p?"translate(-100%) rotate(-90deg)":""," scale(").concat(o,")"),transformOrigin:p?"top right":"top left"}):(o=l/s,{width:s,height:Math.min(u,c/o),transform:"".concat(p?"translate(-100%) rotate(-90deg)":""," scale(").concat(o,")"),transformOrigin:p?"top right":"top left"})}else if(a)i={width:e.width,height:e.height}
else{var h="landscape"===e.orientation,m=t.width,v=t.height,g=h?[v,m]:[m,v],y=(0,w.default)(g,2),b=y[0],S=y[1]
i={width:b,height:S}}return i}
var w=n(r("J4zp"))},xUDz:function(e,t,r){"use strict"
var n=r("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var o=n(r("RIqP")),l=n(r("lSNA")),a=r("/MKj"),i=r("/5+U"),c=n(r("o/90")),s=(0,a.connect)(function(e){var t=e.model,r=t.current,n=t.screens,a=e.container,i=a.previewSetting.isFullScreenMode,o=a.common.scale,l=r.screenCid,c=u(n,l),s=d(n,r.projectCid).childListMap
return{screen:c,isFullScreenMode:i,screenInOrder:f(s,"root"),scale:o}})(c.default)
t.default=s
var u=(0,i.immutableTransformCache)(function(e,t){return e.find(function(e){return e.cid===t})}),d=(0,i.immutableTransformCache)(function(e,a){var i={},o=(0,l.default)({},"root",[])
return e.forEach(function(e){if(e.project_cid===a){var t=e.cid,r=e.position,n=e.parent_cid||"root"
i[t]=e,void 0===o[n]&&(o[n]=[]),o[n].push({cid:t,position:r})}}),Object.values(o).forEach(function(e){return e.sort(function(e,t){return i[e.cid].position-i[t.cid].position})}),{rootCid:"root",nodeMap:i,childListMap:o}}),f=function n(a,e){var i=[]
return a[e].forEach(function(e){var t=e.cid
if(i.push(t),a[t]){var r=n(a,t)
i.push.apply(i,(0,o.default)(r))}}),i}},xn7q:function(e,t,r){e.exports={previewPanelLayer:"_1440VIJ3r2SoiW8WAZ21xI",layerInfo:"_1auiNpZenxIHtuOt85xZWs"}},"xo+i":function(e,t,r){"use strict"
var n=r("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var c=n(r("lSNA")),a=r("/MKj"),i=n(r("h2Vm")),o=r("/5+U"),l=(0,a.connect)(function(e){return{screenTreeData:u(e.model.screens,e.model.current.projectCid),screenCommentThreadCountMap:s(e.model.commentThreads),currentScreenCid:e.model.current.screenCid,screenSearch:e.container.screens.screenSearch,layout:e.container.common.preference.layout}})(i.default)
t.default=l
var s=(0,o.immutableTransformCache)(function(e){return e.reduce(function(e,t){return e[t.screen_cid]=(e[t.screen_cid]||0)+1,e},{})}),u=(0,o.immutableTransformCache)(function(e,a){var i={},o={},l=(0,c.default)({},"root",[])
return e.forEach(function(e){if(e.project_cid===a){var t=e.cid,r=e.position,n=e.parent_cid||"root"
i[t]=e,o[t]=String(e.name).toLowerCase(),void 0===l[n]&&(l[n]=[]),l[n].push({cid:t,position:r})}}),Object.values(l).forEach(function(e){return e.sort(function(e,t){return i[e.cid].position-i[t.cid].position})}),{rootCid:"root",nodeMap:i,childListMap:l,screenNameCidMap:o}})},"xtk/":function(e,t,r){"use strict"
var n=r("284h"),a=r("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var i=a(r("lwsE")),o=a(r("W8MJ")),l=a(r("a1gu")),c=a(r("Nsbk")),s=a(r("PJYZ")),u=a(r("7W2i")),d=a(r("lSNA")),f=a(r("17x9")),p=n(r("q1tI")),h=a(r("TSYQ")),m=a(r("8CMD")),v=function(e){function t(e){var n
return(0,i.default)(this,t),n=(0,l.default)(this,(0,c.default)(t).call(this,e)),(0,d.default)((0,s.default)(n),"setElementRef",function(e){return n.$elem=e}),(0,d.default)((0,s.default)(n),"updateIsVisible",function(){n.setState({isVisible:n.isInBoundingClientRect()})}),(0,d.default)((0,s.default)(n),"handleClick",function(e){e.stopPropagation()
var t=n.props,r=t.screen;(0,t.onActivate)(r.cid)}),n.state={isVisible:!1},n}return(0,u.default)(t,e),(0,o.default)(t,[{key:"componentDidMount",value:function(){this.props.containerRect&&this.updateIsVisible()}},{key:"componentDidUpdate",value:function(e,t){var r=this.isInBoundingClientRect()
if(!e.containerRect&&this.props.isActive&&!r){var n=this.$elem.getBoundingClientRect()
this.props.scrollIntoView(n)}this.updateIsVisible()}},{key:"isInBoundingClientRect",value:function(){var e=this.props.containerRect
if(!e||!this.$elem)return!1
var t=this.$elem.getBoundingClientRect()
return t.bottom>e.top&&t.top<e.bottom}},{key:"render",value:function(){var e=this.props,t=e.projectToken,r=e.screen,n=e.isEditing,a=e.isHover,i=e.version,o=e.isActive,l=e.treeProps,c=l.renderItem,s=l.renderSpan,u=void 0===s?g:s,d=r.cid,f=this.state.isVisible
return p.default.createElement("li",{className:(0,h.default)("thumbnail-item",{active:o}),onClick:this.handleClick},p.default.createElement("div",{ref:this.setElementRef,className:(0,h.default)("image-wrapper",{hover:a})},c&&c(r),p.default.createElement(m.default,{projectToken:t,screenCid:d,version:i,isVisible:f})),u(r,n))}}]),t}(p.PureComponent);(t.default=v).propTypes={screen:f.default.object,version:f.default.string,isEditing:f.default.bool,isHover:f.default.bool,projectToken:f.default.string,
containerRect:f.default.object,isActive:f.default.bool,onActivate:f.default.func,scrollIntoView:f.default.func,treeProps:f.default.object},v.defaultProps={treeProps:{}}
var g=function(e){return p.default.createElement("span",{className:"screen-name editable-span"},e.name)}},xx4x:function(e,t,r){"use strict"
var n=r("284h"),a=r("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var o=a(r("lwsE")),i=a(r("W8MJ")),l=a(r("a1gu")),c=a(r("Nsbk")),s=a(r("PJYZ")),u=a(r("7W2i")),d=a(r("lSNA")),f=a(r("17x9")),p=n(r("q1tI")),h=a(r("DKAG")),m=a(r("ZS4k")),v=a(r("d89S")),g=function(e){function a(){var e,i;(0,o.default)(this,a)
for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n]
return i=(0,l.default)(this,(e=(0,c.default)(a)).call.apply(e,[this].concat(r))),(0,d.default)((0,s.default)(i),"checkIfNeedHideLayer",function(e){var t=i.props,r=t.isSpaceDown,n=t.requestSelectLayer,a=t.handleShowlayerInfo
!r&&e.target.contains(document.getElementById("simulator-container"))&&(n(-1),a(!1))}),i}return(0,u.default)(a,e),(0,i.default)(a,[{key:"render",value:function(){var e=this.props,t=e.isFetching,r=e.error,n=e.isActive,a=e.isSelectLayer,i=e.isShowColorPicker,o=e.activeLayerID
if(!n)return null
if(t)return null
if(r)return null
var l=-1!==o&&!i
return p.default.createElement("div",null,p.default.createElement(m.default,null),l&&p.default.createElement(v.default,null),a&&p.default.createElement(h.default,{target:document,onClick:this.checkIfNeedHideLayer}))}}]),a}(p.PureComponent);(t.default=g).propTypes={isActive:f.default.bool,isFetching:f.default.bool,isSpaceDown:f.default.bool,isSelectLayer:f.default.bool,isShowColorPicker:f.default.bool,activeLayerID:f.default.oneOfType([f.default.number,f.default.string]),requestSelectLayer:f.default.func,
handleShowlayerInfo:f.default.func,error:f.default.string}},yOnP:function(e,t,r){"use strict"
var n=r("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=p
var a=n(r("lSNA")),c=n(r("o0o1")),s=r("oZtI"),u=r("S7Zs")
function i(t,e){var r=Object.keys(t)
if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t)
e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)}return r}function d(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{}
e%2?i(r,!0).forEach(function(e){(0,a.default)(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(r).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}var o=c.default.mark(p),l=c.default.mark(h),f=c.default.mark(m)
function p(){return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.all)([h()])
case 2:case"end":return e.stop()}},o)}function h(){return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.takeEvery)("reducer:artboards:init",m)
case 2:case"end":return e.stop()}},l)}function m(e){var t,r,n,a,i,o,l
return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.select)()
case 2:if(t=e.sent,r=t.model,n=r.current.projectCid,a=r.screens,e.prev=4,i={},a.forEach(function(e){var t=e.width,r=e.height,n=e.cid
i[n]={width:t,height:r}}),n)return e.next=10,(0,s.call)(u.fetchArtboardsByProjectCid,n)
e.next=13
break
case 10:o=e.sent,0<(l=o.artboards).length&&l.forEach(function(e){var t=e.width,r=e.height,n=e.screen_cid
i[n]={width:t,height:r}})
case 13:return i={artboards:i},e.next=16,(0,s.put)({type:"reducer:artboards:success",payload:d({},i)})
case 16:e.next=23
break
case 18:return e.prev=18,e.t0=e.catch(4),console.log(e.t0.stack),e.next=23,(0,s.put)({type:"reducer:artboards:fail"})
case 23:case"end":return e.stop()}},f,null,[[4,18]])}},ycqN:function(e,t,r){"use strict"
var n=r("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.PATCH_AUTO_SAVE_RELATED=t.SAVE_NUKE_SEQUENCE=void 0
function a(e){var r=0<arguments.length&&void 0!==e?e:{}
return new Promise(function(e,t){(0,c.alertAsyncBlocked)(r).then(e),setTimeout(t,6e4)}).catch(function(){return setTimeout(function(){return(0,s.POST_REPORT)({type:"Error:alertAsyncBlocked:timeout",option:r})},0)})}var i=n(r("o0o1")),o=n(r("yXPU")),l=r("ZMzb"),c=r("XkTy"),s=r("Clcl"),u=window,d=u.$,f=u.MB,p=function(){var t=(0,o.default)(i.default.mark(function e(t){var r,n=arguments
return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=1<n.length&&void 0!==n[1]?n[1]:-255,e.next=3,a({desc:I18N.unknown_error.replace(/%s/i,r),isHTML:!0})
case 3:return window.parent.location.reload(),f.event("zhuge","Workspace_ErrorMsg",{ErrorCode:"Save_Error"}),(0,s.NUKE)(t),e.next=8,(0,l.setTimeoutAsync)(36e5)
case 8:case"end":return e.stop()}},e)}))
return function(e){return t.apply(this,arguments)}}()
t.SAVE_NUKE_SEQUENCE=p
t.PATCH_AUTO_SAVE_RELATED=function(){(0,s.SETUP_REPORT_INTERVAL)({type:"AutoSaver:Socket",getReportObject:function(){return f.AutoSaver.getState()}}),window.onbeforeunload=function(){return f.AutoSaver.getIsEmpty()?void 0:f.isLegacyElectron()?!f.confirmAsync({title:I18N.warning,desc:I18N.data_lost_warning})||void 0:I18N.data_lost_warning},f.myXhr=d.ajaxSettings.xhr(),d.ajaxSettings.xhr=function(){return f.myXhr},d.ajaxSetup({timeout:6e4})}},yl0K:function(e){e.exports=JSON.parse(
'{"// HOSTED_COMMERCIAL_FANGZHENG_LIST":"NOTE: this file is script generated, change should be made at \'fe/scripts/generateFontResource.js\'","HOSTED_COMMERCIAL_FANGZHENG_LIST":[{"family":"FZLanTingHei","label":"方正兰亭黑","typeList":["regular","light","bold"]},{"family":"FZYuan","label":"方正圆体","typeList":["regular","light","bold"]},{"family":"FZXinSong","label":"方正新书宋","typeList":["regular"]},{"family":"FZKai","label":"方正楷体","typeList":["regular"]},{"family":"FZGongYeHei","label":"方正工业黑","typeList":["regular"]},{"family":"FZHanZhenGuangBiao","label":"方正汉真广标","typeList":["regular"]},{"family":"FZZongYi","label":"方正综艺体","typeList":["regular"]}],"// HOSTED_COMMON_LIST":"NOTE: this file is script generated, change should be made at \'fe/scripts/generateFontResource.js\'","HOSTED_COMMON_LIST":[{"family":"PingFangSC","label":"PingFang SC","limitedDevices":["iphone","ipad","apple_watch"],"typeList":["regular","bold"]},{"family":"SourceHanSansSC","label":"思源黑体","typeList":["regular","bold"]},{"family":"SFUIText","label":"SF UI Text","limitedDevices":["iphone","ipad","apple_watch"],"typeList":["regular","bold"]},{"family":"Roboto","label":"Roboto","typeList":["regular","bold"]}],"// WESTERN_COMMON_LIST":"NOTE: this file is script generated, change should be made at \'fe/scripts/generateFontResource.js\'","WESTERN_COMMON_LIST":[{"family":"Arial","label":"Arial","typeList":["regular","bold"]},{"family":"Courier New","label":"Courier New","typeList":["regular","bold"]},{"family":"Helvetica","label":"Helvetica","typeList":["regular","light","bold"]},{"family":"Times New Roman","label":"Times New Roman","typeList":["regular","bold"]}]}'
)},zZYZ:function(e,t,r){},zgSj:function(e,t,r){"use strict"
var n=r("284h"),a=r("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var i=a(r("pVnL")),o=a(r("lwsE")),l=a(r("W8MJ")),c=a(r("a1gu")),s=a(r("Nsbk")),u=a(r("7W2i")),d=a(r("lSNA")),f=a(r("17x9")),p=n(r("q1tI")),h=r("/MKj"),m=a(r("J2m7")),v=a(r("sxGJ")),g=r("RUem"),y=r("qOCw"),b=r("/5+U"),S=a(r("inTe")),w=a(r("xn7q"))
function E(t,e){var r=Object.keys(t)
if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t)
e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)}return r}function C(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{}
e%2?E(r,!0).forEach(function(e){(0,d.default)(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):E(r).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}var k=function(e){function a(){var t
return(0,o.default)(this,a),(t=(0,c.default)(this,(0,s.default)(a).call(this))).getScrollLayerRef=function(e){return t.layerRef=e},t.state={error:!1},t}return(0,u.default)(a,e),(0,l.default)(a,[{key:"componentDidMount",value:function(){this.clipBoard=new v.default('[data-type="copy"]')}},{key:"componentWillUnmount",value:function(){this.clipBoard.destroy()}},{key:"componentWillReceiveProps",value:function(e){e.screenCid!=this.props.screenCid&&this.props.dispatch({type:"reducer:preview-toolbar:update",
payload:{isSelectLayer:!1}})}},{key:"componentDidUpdate",value:function(e){e.layer&&this.props.layer&&e.layer.id!=this.props.layer.id&&this.layerRef&&(this.layerRef.scrollTop=0)}},{key:"componentDidCatch",value:function(e){this.setState({error:!0}),console.error(e)}},{key:"render",value:function(){var e=this.props,t=e.isSelectLayer,r=e.layer,n=this.state.error
return p.default.createElement("div",{className:w.default.previewPanelLayer},r?p.default.createElement("div",{className:w.default.layerInfo,ref:this.getScrollLayerRef},n?p.default.createElement(a.Error,null):p.default.createElement(S.default,(0,i.default)({},this.props,{showGlobal:!t}))):p.default.createElement(g.Loading,null))}}]),a}(p.PureComponent);(0,d.default)(k,"Error",function(){return p.default.createElement("div",null,"Sorry!Error happend, Please refresh it")}),(0,d.default)(k,"propTypes",{
colorUnit:f.default.string.isRequired,isSelectLayer:f.default.bool.isRequired,unit:f.default.string.isRequired,ratio:f.default.number.isRequired,layer:f.default.object,screenCid:f.default.string,dispatch:f.default.func.isRequired})
var _=(0,h.connect)(function(e){var t=e.container,r=t.layers,n=r.activeLayerID,a=r.visibilityScreenID,i=r.resourceByScreen,o=t.previewSetting,l=e.model,c=l.current,s=c.screenCid,u=c.projectCid,d=l.projects,f=o.isSelectLayer,p=T(d,u).device
return C({},o,{layer:P(f,i,a,n)},x(i,a,p),{screenCid:s})})(k)
t.default=_
var x=(0,b.immutableTransformCache)(function(e,t,r){var n=[],a=[],i=[],o=[],l=e[t]
if(l){var c=l.layers,s=(0,y.sortScreenLayers)(c)
n=s.screenColor,o=s.globalText,a=l.documentColor,i=l.globalColor}return{screenColor:n,documentColor:a,globalColor:i,globalText:o}}),T=(0,b.immutableTransformCache)(function(e,t){return e.find(function(e){return e.cid===t})}),P=(0,b.immutableTransformCache)(function(e,t,r,n){var a=t[r]
if(!a||a.layers&&0==a.layers.length)return null
var i=a.layers
return e?(0,m.default)(i,function(e){return e.id===n}):C({},i[0])})},zy85:function(e,t,r){e.exports={"runner-control-panel":"_1WWZX-XsmLEpK_NTDJ6--O"}}},[[7,0,1]]])
