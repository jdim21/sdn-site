(this["webpackJsonpserum-dex-ui"]=this["webpackJsonpserum-dex-ui"]||[]).push([[0],{151:function(e,t,n){e.exports=n.p+"static/media/bannergif.e2d68351.gif"},152:function(e,t,n){e.exports=n.p+"static/media/randomgif.89847a96.gif"},183:function(e,t,n){"use strict";(function(e){n.d(t,"b",(function(){return d})),n.d(t,"a",(function(){return f}));var r=n(9),a=n.n(r),o=n(19),i=n(31);function c(e,t,n,r){return l.apply(this,arguments)}function l(){return(l=Object(o.a)(a.a.mark((function e(t,n,r,o){var i,c,l,s,u;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=0,c=0,!(o.length>255)){e.next=15;break}case 3:if(!(o.length-c>255)){e.next=15;break}return l=o.slice(c,c+255),c+=255,console.log("send",(2|i).toString(16),l.length.toString(16),l),e.next=9,t.send(224,n,r,2|i,l);case 9:if(2===e.sent.length){e.next=12;break}throw new Error("Received unexpected reply payload");case 12:i|=1,e.next=3;break;case 15:return s=o.slice(c),console.log("send",i.toString(16),s.length.toString(16),s),e.next=19,t.send(224,n,r,i,s);case 19:return u=e.sent,e.abrupt("return",u.slice(0,u.length-2));case 21:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return(e|1<<31>>>0)>>>0}function u(t,n){var r;r=void 0!==t?void 0!==n?4:3:2;var a=e.alloc(1+4*r),o=0;return o=a.writeUInt8(r,o),o=a.writeUInt32BE(s(44),o),o=a.writeUInt32BE(s(501),o),r>2&&(o=a.writeUInt32BE(s(t),o),4===r&&(o=a.writeUInt32BE(s(n),o))),a}function d(e,t){return h.apply(this,arguments)}function h(){return(h=Object(o.a)(a.a.mark((function e(t,n){var r,o,i=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=i.length>2&&void 0!==i[2]?i[2]:u(),o=n.serializeMessage(),e.abrupt("return",m(t,o,r));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e,t){return p.apply(this,arguments)}function p(){return(p=Object(o.a)(a.a.mark((function t(n,r){var o,i,l,s=arguments;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=s.length>2&&void 0!==s[2]?s[2]:u(),(i=e.alloc(1)).writeUInt8(1,0),l=e.concat([i,o,r]),t.abrupt("return",c(n,6,1,l));case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function f(e){return g.apply(this,arguments)}function g(){return(g=Object(o.a)(a.a.mark((function e(t){var n,r,o=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=o.length>1&&void 0!==o[1]?o[1]:u(),e.next=3,c(t,5,0,n);case 3:return r=e.sent,e.abrupt("return",new i.c(r));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}}).call(this,n(41).Buffer)},243:function(e,t,n){e.exports=n.p+"static/media/raritychart.f61cfc7d.png"},244:function(e,t,n){e.exports=n.p+"static/media/gen2Rarity.2e0b0839.png"},245:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAIAAABMXPacAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAAO7SURBVHhe7dvLS1RRHAdwj4v6A4KIArUWRSBBD8giWgUuwoW20AIpkOhFFPRaFCJSi15QRC9CKITSRbqwIIOQoDdFEUHQojQoIoj2bcbh8L1gvxnvcOecuV8X3w+CX2S4c+/58uPcuapr/vCoTnjq8V1IVACZCiBTAWRuzZvHiMKgCSBTAWQqgEwFkKkAMtfy/AmiMGgCyFQAmQogUwFkbvPEBKIwaALIVACZCiBTAWRuy/hTRGHQBJCpADIVQKYCyFQAmds69gyxNh62bULyav124XI+YU0AmQogUwFkKoDMtY++QIxktH0jkjd5bymS17T9G1Ii+glkYs62KP2Eo5+tJoBMBZCpADIVQOY6h14hRjLc1YLkFSYHkbypl71ICbPLmfMxR6tC+gHNllvUuKEfyXNN3Uhe9OXSBJCpADIVQKYCyFQAmeu+8xYxksGd65C8rHdBRuldSlZZj59+FxR9uTQBZCqATAWQqQAy13PrHWIkA7vXInkVfx8Qvs2GqHg+5gXRl0sTQKYCyFQAmQogc3uvvUeM5Mb+1UjllPnk2fUVyZsaWoZUGxXfLv2Tc/Tl0gSQqQAyFUCmAshUAJk7dOkjYiSXD69C8rhPGsKZm6Loy6UJIFMBZCqATAWQuWPnPiFGcv54M5JXcRM2zwacc0he+B4eeHyzCUdfLk0AmQogUwFkKoDMnTz9GbEqZ06tREoUCgWkcrI+fw/fhLMe32zahtnDiwIXUBNApgLIVACZCiBTAWSur/cLYlX6+pcjJdLvgsKV3ofMlP+7By6gJoBMBZCpADIVQFY/758L+cJh4inucjPhpwFwoAR+Go9ZkKxfmgAyFUCmAshUAJm7cCTt8XcVjl7874l/4EfT0m2zMPIaqRzXsR4pEfcEoi+XJoBMBZCpADIVQKYCyNyVA1OItXHwaiOSF/68Pv1xQvTj13p9NAFkKoBMBZCpADJ3fc93xFzsu9mANIv8f6tu5LwgmgAyFUCmAshUAJkb2PUD0eu5vQQpYV6QlTng+NnFSIkVDfORvPQ/5w8XeDnRaQLIVACZCiBTAWQqgMx+Li/9r0FzWzK44xfSLLrvLkLyzG2PuefJX9bLqTVNAJkKIFMBZCqAzJldt/RJwPC230jldN5fiJSYa7uuYS4w/epyoAkgUwFkKoBMBZBV3oRH2v4geR1jC5C8is/35xpzgebq8qcJIFMBZCqATAWQqQCyyndBRq2fNJgTKL3LMlpP/ETysr7+QetfJBJNAJkKIFMBZCqAqq5uGqxiFP16NkFHAAAAAElFTkSuQmCC"},254:function(e,t,n){e.exports=n(406)},260:function(e,t,n){},261:function(e,t,n){},264:function(e,t){},265:function(e,t){},291:function(e,t){},293:function(e,t){},306:function(e,t){},307:function(e,t){},406:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(24),i=n.n(o),c=(n(260),n(261),n(9)),l=n.n(c),s=n(19),u=n(22),d=(n(94),n(31));n(84);new Intl.NumberFormat(void 0,{style:"percent",minimumFractionDigits:2,maximumFractionDigits:2});var h={};function m(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=localStorage.getItem(e)||t,a=Object(r.useState)(e+"\n"+n),o=Object(u.a)(a,2),i=o[1];Object(r.useEffect)((function(){return h[e]||(h[e]=[]),h[e].push(i),function(){h[e]=h[e].filter((function(e){return e!==i})),0===h[e].length&&delete h[e]}}),[e]);var c=Object(r.useCallback)((function(t){n!==t&&(null===t?localStorage.removeItem(e):localStorage.setItem(e,t),h[e].forEach((function(n){return n(e+"\n"+t)})))}),[n,e]);return[n,c]}function p(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=m(e,JSON.stringify(t)),a=Object(u.a)(n,2),o=a[0],i=a[1];return[Object(r.useMemo)((function(){return o&&JSON.parse(o)}),[o]),function(e){return i(JSON.stringify(e))}]}var f=n(74),g=n(39),v=n(36),b=n(10),y=n.n(b),w=new Date,E=new Map,k=function(){function e(t,n,r){var a=this;Object(v.a)(this,e),this.cacheKey=void 0,this.fn=void 0,this.timeoutId=void 0,this.listeners=void 0,this.errors=void 0,this.cacheNullValues=!0,this.refresh=Object(s.a)(l.a.mark((function e(){var t,n,r,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.timeoutId&&(clearTimeout(a.timeoutId),a.timeoutId=null),!a.stopped){e.next=3;break}return e.abrupt("return");case 3:return t=!1,e.prev=4,e.next=7,a.fn();case 7:if(n=e.sent,a.cacheNullValues||null!==n){e.next=14;break}return console.log("Not caching null value for ".concat(a.cacheKey)),a.errors=0,e.abrupt("return",n);case 14:return E.set(a.cacheKey,n),a.errors=0,a.notifyListeners(),e.abrupt("return",n);case 18:e.next=25;break;case 20:e.prev=20,e.t0=e.catch(4),++a.errors,console.warn(e.t0),t=!0;case 25:return e.prev=25,a.timeoutId||a.stopped||(r=a.refreshInterval,t&&a.refreshIntervalOnError&&a.refreshIntervalOnError>0&&(r=a.refreshIntervalOnError),a.errors>0&&(r=Math.min(1e3*Math.pow(2,a.errors-1),6e4)),(o=+new Date-+w)<5e3&&(r+=5e3-o/2),"hidden"===document.visibilityState?r=6e4:document.hasFocus()||(r*=1.5),r*=.8+.4*Math.random(),a.timeoutId=setTimeout(a.refresh,r)),e.finish(25);case 28:case"end":return e.stop()}}),e,null,[[4,20,25,28]])}))),this.cacheKey=t,this.fn=n,this.timeoutId=null,this.listeners=new Set,this.errors=0,this.cacheNullValues=r}return Object(g.a)(e,[{key:"refreshInterval",get:function(){return Math.min.apply(Math,Object(f.a)(Object(f.a)(this.listeners).map((function(e){return e.refreshInterval}))))}},{key:"refreshIntervalOnError",get:function(){var e=Object(f.a)(this.listeners).map((function(e){return e.refreshIntervalOnError})).filter((function(e){return null!==e}));return 0===e.length?null:Math.min.apply(Math,Object(f.a)(e))}},{key:"stopped",get:function(){return 0===this.listeners.size}},{key:"addListener",value:function(e){var t=this.refreshInterval;this.listeners.add(e),this.refreshInterval<t&&this.refresh()}},{key:"removeListener",value:function(e){y()(this.listeners.delete(e)),this.stopped&&this.timeoutId&&(clearTimeout(this.timeoutId),this.timeoutId=null)}},{key:"notifyListeners",value:function(){this.listeners.forEach((function(e){return e.callback()}))}}]),e}();new(function(){function e(){Object(v.a)(this,e),this.loops=new Map}return Object(g.a)(e,[{key:"addListener",value:function(e){this.loops.has(e.cacheKey)||this.loops.set(e.cacheKey,new k(e.cacheKey,e.fn,e.cacheNullValues)),this.loops.get(e.cacheKey).addListener(e)}},{key:"removeListener",value:function(e){var t=this.loops.get(e.cacheKey);t.removeListener(e),t.stopped&&(this.loops.delete(e.cacheKey),E.delete(e.cacheKey))}},{key:"refresh",value:function(e){this.loops.has(e)&&this.loops.get(e).refresh()}},{key:"refreshAll",value:function(){return Promise.all(Object(f.a)(this.loops.values()).map((function(e){return e.refresh()})))}}]),e}());n(227);var x=[{name:"mainnet-beta",endpoint:"https://solana-api.projectserum.com",custom:!1},{name:"localnet",endpoint:"http://127.0.0.1:8899",custom:!1}],A=(new Map,a.a.createContext(null));function j(e){var t=e.children,n=p("connectionEndpts",x[0].endpoint),o=Object(u.a)(n,2),i=o[0],c=o[1],l=p("customConnectionEndpoints",[]),s=Object(u.a)(l,2),h=s[0],m=s[1],f=x.concat(h),g=Object(r.useMemo)((function(){return new d.b(i,"recent")}),[i]),v=Object(r.useMemo)((function(){return new d.b(i,"recent")}),[i]);return Object(r.useEffect)((function(){var e=g.onAccountChange((new d.a).publicKey,(function(){}));return function(){g.removeAccountChangeListener(e)}}),[g]),Object(r.useEffect)((function(){var e=g.onSlotChange((function(){return null}));return function(){g.removeSlotChangeListener(e)}}),[g]),Object(r.useEffect)((function(){var e=v.onAccountChange((new d.a).publicKey,(function(){}));return function(){v.removeAccountChangeListener(e)}}),[v]),Object(r.useEffect)((function(){var e=v.onSlotChange((function(){return null}));return function(){v.removeSlotChangeListener(e)}}),[v]),a.a.createElement(A.Provider,{value:{endpoint:i,setEndpoint:c,connection:g,sendConnection:v,availableEndpoints:f,setCustomEndpoints:m}},t)}function C(){var e=Object(r.useContext)(A);if(!e)throw new Error("Missing connection context");return e.connection}function O(){var e=Object(r.useContext)(A);if(!e)throw new Error("Missing connection context");return{endpoint:e.endpoint,endpointInfo:e.availableEndpoints.find((function(t){return t.endpoint===e.endpoint})),setEndpoint:e.setEndpoint,availableEndpoints:e.availableEndpoints,setCustomEndpoints:e.setCustomEndpoints}}var S=n(133),I=n(251),T=n(186),B=n(116);function F(e){var t=e.external,n=void 0!==t&&t,r=Object(T.a)(e,["external"]),o=r.to,i=r.children,c=Object(T.a)(r,["to","children"]);return n?a.a.createElement("a",Object.assign({href:o,target:"_blank",rel:"noopener noreferrer"},c),i):a.a.createElement(B.b,Object.assign({to:o},c),i)}function L(e){var t=e.message,n=e.description,r=e.txid,o=e.type,i=void 0===o?"info":o,c=e.placement,l=void 0===c?"bottomLeft":c;r&&(n=a.a.createElement(F,{external:!0,to:"https://explorer.solana.com/tx/"+r,style:{color:"#0000ff"}},"View transaction ",r.slice(0,8),"...",r.slice(r.length-8))),I.a[i]({message:a.a.createElement("span",{style:{color:"black"}},t),description:a.a.createElement("span",{style:{color:"black",opacity:.5}},n),placement:l,style:{backgroundColor:"white"}})}var Q=n(412),D=n(81),N=n(50),U=n(49),M=n(57),R=n.n(M),K=n(231),P=n(183),V=new d.c("11111111111111111111111111111111"),z=(R.a,n(58)),J=(R.a,function(e){Object(N.a)(n,e);var t=Object(U.a)(n);function n(){var e;return Object(v.a)(this,n),(e=t.call(this))._handleConnect=function(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];(t=e).emit.apply(t,["connect"].concat(r))},e._handleDisconnect=function(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];(t=e).emit.apply(t,["disconnect"].concat(r))},e.connect=e.connect.bind(Object(z.a)(e)),e}return Object(g.a)(n,[{key:"_provider",get:function(){var e,t;if(null===(e=window)||void 0===e||null===(t=e.solana)||void 0===t?void 0:t.isPhantom)return window.solana}},{key:"connected",get:function(){var e;return(null===(e=this._provider)||void 0===e?void 0:e.isConnected)||!1}},{key:"autoApprove",get:function(){var e;return(null===(e=this._provider)||void 0===e?void 0:e.autoApprove)||!1}},{key:"signAllTransactions",value:function(){var e=Object(s.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this._provider){e.next=2;break}return e.abrupt("return",t);case 2:return e.abrupt("return",this._provider.signAllTransactions(t));case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"publicKey",get:function(){var e;return(null===(e=this._provider)||void 0===e?void 0:e.publicKey)||V}},{key:"signTransaction",value:function(){var e=Object(s.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this._provider){e.next=2;break}return e.abrupt("return",t);case 2:return e.abrupt("return",this._provider.signTransaction(t));case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"connect",value:function(){var e,t,n;if(!this._provider)return window.open("https://phantom.app/","_blank"),void L({message:"Connection Error",description:"Please install Phantom wallet"});this._provider.listeners("connect").length||(null===(t=this._provider)||void 0===t||t.on("connect",this._handleConnect));this._provider.listeners("disconnect").length||(null===(n=this._provider)||void 0===n||n.on("disconnect",this._handleDisconnect));return null===(e=this._provider)||void 0===e?void 0:e.connect()}},{key:"disconnect",value:function(){this._provider&&this._provider.disconnect()}}]),n}(R.a));R.a;var W=[{name:"Phantom",url:"https://www.phantom.app",icon:"https://www.phantom.app/img/logo.png",adapter:J},{name:"Sollet Extension",url:"https://www.sollet.io/extension",icon:"".concat("https://cdn.jsdelivr.net/gh/solana-labs/oyster@main/assets/wallets","/sollet.svg"),adapter:function(e,t){var n=window.sollet;return n?new S.a(n,t):{on:function(){},connect:function(){L({message:"Sollet Extension Error",description:"Please install the Sollet Extension for Chrome"})}}}}],Y=a.a.createContext(null);function q(e){var t,n,o=e.children,i=O().endpoint,c=Object(r.useState)(!1),l=Object(u.a)(c,2),s=l[0],d=l[1],h=p("walletProvider"),m=Object(u.a)(h,2),f=m[0],g=m[1],v=Object(r.useMemo)((function(){return W.find((function(e){return e.url===f}))}),[f]),b=Object(r.useState)(void 0),y=Object(u.a)(b,2),w=y[0],E=y[1];Object(r.useEffect)((function(){if(v){var e=function(){w=new(v.adapter||S.a)(f,i),E(w)};if("complete"!==document.readyState){var t=function t(){e(),window.removeEventListener("load",t)};return window.addEventListener("load",t),function(){return window.removeEventListener("load",t)}}e()}}),[v,f,i]);var k=Object(r.useState)(!1),x=Object(u.a)(k,2),A=x[0],j=x[1];Object(r.useEffect)((function(){return w&&(w.on("connect",(function(){var e;if(null===(e=w)||void 0===e?void 0:e.publicKey){console.log("connected"),localStorage.removeItem("feeDiscountKey"),j(!0);var t=w.publicKey.toBase58();L({message:"Wallet update",description:"Connected to wallet "+(t.length>20?"".concat(t.substring(0,7),".....").concat(t.substring(t.length-7,t.length)):t)})}})),w.on("disconnect",(function(){j(!1),L({message:"Wallet update",description:"Disconnected from wallet"}),localStorage.removeItem("feeDiscountKey")}))),function(){j(!1),w&&w.connected&&(w.disconnect(),j(!1))}}),[w]),Object(r.useEffect)((function(){return w&&s&&(w.connect(),d(!1)),function(){}}),[w,s]);var C=Object(r.useState)(!1),I=Object(u.a)(C,2),T=I[0],B=I[1],F=Object(r.useCallback)((function(){return B(!0)}),[]),N=Object(r.useCallback)((function(){return B(!1)}),[]);return a.a.createElement(Y.Provider,{value:{wallet:w,connected:A,select:F,providerUrl:f,setProviderUrl:g,providerName:null!==(t=null===(n=W.find((function(e){return e.url===f})))||void 0===n?void 0:n.name)&&void 0!==t?t:f}},o,a.a.createElement(Q.a,{title:"Select Wallet",okText:"Connect",visible:T,okButtonProps:{style:{display:"none"}},onCancel:N,width:400},W.map((function(e){return a.a.createElement(D.a,{size:"large",type:f===e.url?"primary":"ghost",onClick:function(){g(e.url),d(!0),N()},icon:a.a.createElement("img",{alt:"".concat(e.name),width:20,height:20,src:e.icon,style:{marginRight:8}}),style:{display:"block",width:"100%",textAlign:"left",marginBottom:8}},e.name)}))))}function Z(){var e=Object(r.useContext)(Y);if(!e)throw new Error("Missing wallet context");var t=e.wallet;return{connected:e.connected,wallet:t,providerUrl:e.providerUrl,setProvider:e.setProviderUrl,providerName:e.providerName,select:e.select,connect:function(){t?t.connect():e.select()},disconnect:function(){null===t||void 0===t||t.disconnect()}}}var G,X=n(120),H=n(121),_=Object(H.a)(G||(G=Object(X.a)(["\nhtml,body{\n  background: #11161D;\n}\ninput[type=number]::-webkit-inner-spin-button {\n  opacity: 0;\n}\ninput[type=number]:hover::-webkit-inner-spin-button,\ninput[type=number]:focus::-webkit-inner-spin-button {\n  opacity: 0.25;\n}\n/* width */\n::-webkit-scrollbar {\n  width: 15px;\n}\n/* Track */\n::-webkit-scrollbar-track {\n  background: #2d313c;\n}\n/* Handle */\n::-webkit-scrollbar-thumb {\n  background: #5b5f67;\n}\n/* Handle on hover */\n::-webkit-scrollbar-thumb:hover {\n  background: #5b5f67;\n}\n.ant-slider-track, .ant-slider:hover .ant-slider-track {\n  background-color: #bc13fe;\n  opacity: 0.75;\n}\n.ant-slider-track,\n.ant-slider ant-slider-track:hover {\n  background-color: #bc13fe;\n  opacity: 0.75;\n}\n.ant-slider-dot-active,\n.ant-slider-handle,\n.ant-slider-handle-click-focused,\n.ant-slider:hover .ant-slider-handle:not(.ant-tooltip-open)  {\n  border: 2px solid #bc13fe; \n}\n.ant-table-tbody > tr.ant-table-row:hover > td {\n  background: #273043;\n}\n.ant-table-tbody > tr > td {\n  border-bottom: 8px solid #1A2029;\n}\n.ant-table-container table > thead > tr:first-child th {\n  border-bottom: none;\n}\n.ant-divider-horizontal.ant-divider-with-text::before, .ant-divider-horizontal.ant-divider-with-text::after {\n  border-top: 1px solid #434a59 !important;\n}\n.ant-layout {\n    background: #11161D\n  }\n  .ant-table {\n    background: #212734;\n  }\n  .ant-table-thead > tr > th {\n    background: #1A2029;\n  }\n.ant-select-item-option-content {\n  img {\n    margin-right: 4px;\n  }\n}\n.ant-modal-content {\n  background-color: #212734;\n}\n\n@-webkit-keyframes highlight {\n  from { background-color: #bc13fe;}\n  to {background-color: #1A2029;}\n}\n@-moz-keyframes highlight {\n  from { background-color: #bc13fe;}\n  to {background-color: #1A2029;}\n}\n@-keyframes highlight {\n  from { background-color: #bc13fe;}\n  to {background-color: #1A2029;}\n}\n.flash {\n  -moz-animation: highlight 0.5s ease 0s 1 alternate ;\n  -webkit-animation: highlight 0.5s ease 0s 1 alternate;\n  animation: highlight 0.5s ease 0s 1 alternate;\n}"]))),$=n(409),ee=n(410).a.Title,te=function(e){Object(N.a)(n,e);var t=Object(U.a)(n);function n(){var e;Object(v.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={hasError:!1},e}return Object(g.a)(n,[{key:"render",value:function(){return this.state.hasError?a.a.createElement("div",null,a.a.createElement("div",null,a.a.createElement(ee,{level:2},"Something went wrong."),a.a.createElement(ee,{level:4},"Please try again later."))):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0}}}]),n}(r.Component),ne=n(33),re=n(151),ae=n.n(re),oe=n(152),ie=n.n(oe),ce=n(242),le=n.n(ce);function se(){return a.a.createElement(ue,null)}function ue(){var e=C(),t=Z(),n=t.wallet,o=t.connected,i=Object(r.useState)({height:window.innerHeight,width:window.innerWidth}),c=Object(u.a)(i,2),l=c[0],s=c[1],d=Object(r.useState)("xxxxx"),h=Object(u.a)(d,2),m=h[0],p=h[1];Object(r.useEffect)((function(){le.a.get("https://4ebst61dg0.execute-api.us-east-2.amazonaws.com/").then((function(e){var t=JSON.stringify(e.data);p(t)}))}),[]),Object(r.useEffect)((function(){var e=function(){s({height:window.innerHeight,width:window.innerWidth})};return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]);var f=null===l||void 0===l?void 0:l.width,g=f<1e3?a.a.createElement(de,{connection:e,connected:o,wallet:n,remaining:m}):f<1450?a.a.createElement(he,{connection:e,connected:o,wallet:n,remaining:m}):a.a.createElement(me,{connection:e,connected:o,wallet:n,remaining:m});return a.a.createElement(a.a.Fragment,null,g)}var de=function(e){e.connection,e.connected,e.wallet,e.remaining;return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{style:{display:"flex",justifyContent:"center",paddingBottom:"2rem"}},a.a.createElement("img",{src:ae.a,width:"65%",height:"80px"})),a.a.createElement("div",{style:{display:"flex",justifyContent:"center",paddingTop:"0.1rem",width:"100%"}},a.a.createElement("h1",{style:{color:"#3ebfbf",textAlign:"center",width:"50%",fontWeight:"bold"}},"Gen-2 Solana Doges are live! Full instructions in ",a.a.createElement("a",{style:{color:"#9a3cbd"},href:"https://discord.gg/Us8NkrSFfX"},"Discord"),". Summarized instructions:")),a.a.createElement("div",{style:{display:"flex",justifyContent:"center",paddingTop:"1rem",width:"100%"}},a.a.createElement("h2",{style:{color:"#bc13fe",textAlign:"center",paddingTop:"0.5rem",width:"50%"}},'1) Send a Gen-1 Solana Doge to the following address in order to "unleash" (burn) it: burnQyNuwZV6RdCAWY3eNPBom6yhnjRYQr5VgNy36tg')),a.a.createElement("div",{style:{display:"flex",justifyContent:"center",paddingTop:"0.25rem",width:"100%"}},a.a.createElement("h2",{style:{color:"#bc13fe",textAlign:"center",paddingTop:"0.5rem",width:"50%"}},"2) Wait for the voucher token to be sent automatically to your wallet. The mint address for the voucher token is: DogEFgc5QGpuAqRYej8UzPkLoNsDCFfwT5ShsB8LnkDE")),a.a.createElement("div",{style:{display:"flex",justifyContent:"center",paddingTop:"0.25rem",width:"100%"}},a.a.createElement("h2",{style:{color:"#bc13fe",textAlign:"center",paddingTop:"0.5rem",width:"50%"}},"3) Visit the ",a.a.createElement("a",{style:{color:"cyan"},href:"https://gen2.solanadogenfts.io"},"Gen-2 Minting")," site to exchange!")),a.a.createElement("div",{style:{display:"flex",justifyContent:"center",paddingBottom:"2rem"}},a.a.createElement("img",{src:ie.a,width:"651px",height:"475px"})))},he=function(e){e.connection,e.connected,e.wallet,e.remaining;return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{style:{display:"flex",justifyContent:"center",paddingBottom:"2rem"}},a.a.createElement("img",{src:ae.a,width:"65%",height:"80px"})),a.a.createElement("div",{style:{display:"flex",justifyContent:"center",paddingTop:"0.1rem",width:"100%"}},a.a.createElement("h1",{style:{color:"#3ebfbf",textAlign:"center",width:"50%",fontWeight:"bold"}},"Gen-2 Solana Doges are live! Full instructions in ",a.a.createElement("a",{style:{color:"#9a3cbd"},href:"https://discord.gg/Us8NkrSFfX"},"Discord"),". Summarized instructions:")),a.a.createElement("div",{style:{display:"flex",justifyContent:"center",paddingTop:"1rem",width:"100%"}},a.a.createElement("h2",{style:{color:"#bc13fe",textAlign:"center",paddingTop:"0.5rem",width:"50%"}},'1) Send a Gen-1 Solana Doge to the following address in order to "unleash" (burn) it: burnQyNuwZV6RdCAWY3eNPBom6yhnjRYQr5VgNy36tg')),a.a.createElement("div",{style:{display:"flex",justifyContent:"center",paddingTop:"0.25rem",width:"100%"}},a.a.createElement("h2",{style:{color:"#bc13fe",textAlign:"center",paddingTop:"0.5rem",width:"50%"}},"2) Wait for the voucher token to be sent automatically to your wallet. The mint address for the voucher token is: DogEFgc5QGpuAqRYej8UzPkLoNsDCFfwT5ShsB8LnkDE")),a.a.createElement("div",{style:{display:"flex",justifyContent:"center",paddingTop:"0.25rem",width:"100%"}},a.a.createElement("h2",{style:{color:"#bc13fe",textAlign:"center",paddingTop:"0.5rem",width:"50%"}},"3) Visit the ",a.a.createElement("a",{style:{color:"cyan"},href:"https://gen2.solanadogenfts.io"},"Gen-2 Minting")," site to exchange!")),a.a.createElement("div",{style:{display:"flex",justifyContent:"center",paddingBottom:"2rem"}},a.a.createElement("img",{src:ie.a,width:"651px",height:"475px"})))},me=function(e){e.connection,e.connected,e.wallet,e.remaining;return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{style:{display:"flex",justifyContent:"center",paddingBottom:"2rem"}},a.a.createElement("img",{src:ae.a,width:"65%",height:"80px"})),a.a.createElement("div",{style:{display:"flex",justifyContent:"center",paddingTop:"0.1rem",width:"100%"}},a.a.createElement("h1",{style:{color:"#3ebfbf",textAlign:"center",width:"50%",fontWeight:"bold"}},"Gen-2 Solana Doges are live! Full instructions in ",a.a.createElement("a",{style:{color:"#9a3cbd"},href:"https://discord.gg/Us8NkrSFfX"},"Discord"),". Summarized instructions:")),a.a.createElement("div",{style:{display:"flex",justifyContent:"center",paddingTop:"1rem",width:"100%"}},a.a.createElement("h2",{style:{color:"#bc13fe",textAlign:"center",paddingTop:"0.5rem",width:"50%"}},'1) Send a Gen-1 Solana Doge to the following address in order to "unleash" (burn) it: burnQyNuwZV6RdCAWY3eNPBom6yhnjRYQr5VgNy36tg')),a.a.createElement("div",{style:{display:"flex",justifyContent:"center",paddingTop:"0.25rem",width:"100%"}},a.a.createElement("h2",{style:{color:"#bc13fe",textAlign:"center",paddingTop:"0.5rem",width:"50%"}},"2) Wait for the voucher token to be sent automatically to your wallet. The mint address for the voucher token is: DogEFgc5QGpuAqRYej8UzPkLoNsDCFfwT5ShsB8LnkDE")),a.a.createElement("div",{style:{display:"flex",justifyContent:"center",paddingTop:"0.25rem",width:"100%"}},a.a.createElement("h2",{style:{color:"#bc13fe",textAlign:"center",paddingTop:"0.5rem",width:"50%"}},"3) Visit the ",a.a.createElement("a",{style:{color:"cyan"},href:"https://gen2.solanadogenfts.io"},"Gen-2 Minting")," site to exchange!")),a.a.createElement("div",{style:{display:"flex",justifyContent:"center",paddingBottom:"2rem"}},a.a.createElement("img",{src:ie.a,width:"651px",height:"475px"})))},pe=n(243),fe=n.n(pe),ge=n(244),ve=n.n(ge);function be(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{style:{display:"flex",justifyContent:"center",paddingBottom:"2rem"}},a.a.createElement("img",{src:ve.a,width:"60%",height:"60%"})),a.a.createElement("div",{style:{display:"flex",justifyContent:"center",paddingBottom:"2rem"}},a.a.createElement("img",{src:fe.a,width:"60%",height:"60%"})))}var ye,we,Ee=n(408),ke=n(413),xe=n(414),Ae=n(415),je=n(245),Ce=n.n(je),Oe=n(411);function Se(e){var t=e.visible,n=e.testingConnection,o=e.onAddCustomEndpoint,i=e.onClose,c=Object(r.useState)(""),l=Object(u.a)(c,2),s=l[0],d=l[1],h=Object(r.useState)(""),m=Object(u.a)(h,2),p=m[0],f=m[1],g=function(){d(""),f(""),i&&i()},v=""!==s&&""!==p;return a.a.createElement(Q.a,{title:"Add custom endpoint",visible:t,onOk:function(){o({name:p,endpoint:"https://"+s,custom:!0}),g()},okText:"Add",onCancel:g,okButtonProps:{disabled:!v,loading:n}},a.a.createElement(xe.a,{style:{marginBottom:8}},a.a.createElement(Ae.a,{span:24},a.a.createElement(Oe.a,{placeholder:"Cluster Name",value:p,onChange:function(e){return f(e.target.value)}}))),a.a.createElement(xe.a,{style:{marginBottom:8}},a.a.createElement(Ae.a,{span:24},a.a.createElement(Oe.a,{placeholder:"Cluster Endpoint",value:s,addonBefore:"https://",onChange:function(e){return d(e.target.value)}}))))}var Ie=H.b.div(ye||(ye=Object(X.a)(["\n  background-color: #0d1017;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  padding: 0px 30px;\n  flex-wrap: wrap;\n"]))),Te=H.b.div(we||(we=Object(X.a)(["\n  display: flex;\n  align-items: center;\n  color: #bc13fe;\n  font-weight: bold;\n  cursor: pointer;\n  img {\n    height: 30px;\n    margin-right: 8px;\n  }\n"]))),Be={"/learn":"https://serum-academy.com/en/serum-dex/","/add-market":"https://serum-academy.com/en/add-market/","/wallet-support":"https://serum-academy.com/en/wallet-support","/dex-list":"https://serum-academy.com/en/dex-list/","/developer-resources":"https://serum-academy.com/en/developer-resources/","/explorer":"https://explorer.solana.com","/srm-faq":"https://projectserum.com/srm-faq","/swap":"https://swap.projectserum.com"};function Fe(){var e=Z(),t=e.connected,n=(e.wallet,O()),o=(n.endpoint,n.endpointInfo),i=n.setEndpoint,c=n.availableEndpoints,l=n.setCustomEndpoints,s=Object(r.useState)(!1),h=Object(u.a)(s,2),m=h[0],p=h[1],g=Object(r.useState)(!1),v=Object(u.a)(g,2),b=v[0],y=v[1],w=Object(ne.g)(),E=Object(ne.f)(),k=Object(r.useState)(!1),A=Object(u.a)(k,2),j=A[0],C=(A[1],Object(r.useCallback)((function(e){e.key in Be||E.push(e.key)}),[E])),S=o&&o.custom;return Object(r.useEffect)((function(){var e=function(){S&&i(x[0].endpoint)};return window.addEventListener("beforeunload",e),function(){return window.removeEventListener("beforeunload",e)}}),[S,i]),a.a.createElement(a.a.Fragment,null,a.a.createElement(Se,{visible:m,testingConnection:b,onAddCustomEndpoint:function(e){if(c.some((function(t){return t.endpoint===e.endpoint})))L({message:"An endpoint with the given url already exists",type:"error"});else{var t=function(t){console.log("Connection to ".concat(e.endpoint," failed: ").concat(t)),L({message:"Failed to connect to ".concat(e.endpoint),type:"error"})};try{new d.b(e.endpoint,"recent").getEpochInfo().then((function(t){y(!0),console.log("testing connection to ".concat(e.endpoint));var n=[].concat(Object(f.a)(c.filter((function(e){return e.custom}))),[e]);i(e.endpoint),l(n)})).catch(t)}catch(n){t(n)}finally{y(!1)}}},onClose:function(){return p(!1)}}),a.a.createElement(Ie,null,a.a.createElement(Te,null,a.a.createElement("img",{src:Ce.a,alt:""}),"SolanaDogeNFTs"),a.a.createElement(ke.a,{mode:"horizontal",onClick:C,selectedKeys:[w.pathname],style:{borderBottom:"none",backgroundColor:"transparent",display:"flex",alignItems:"flex-end",flex:1}},a.a.createElement(ke.a.Item,{key:"/",style:{margin:"0 10px 0 20px"}},"MINT"),!j&&a.a.createElement(ke.a.Item,{key:"/rarity",style:{margin:"0 10px"}},a.a.createElement("a",{href:Be["/rarity"],target:"_blank",rel:"noopener noreferrer"},"RARITY"))),a.a.createElement("div",null,a.a.createElement(xe.a,{align:"middle",style:{paddingLeft:5,paddingRight:5},gutter:16},a.a.createElement(Ae.a,null),a.a.createElement(Ae.a,null))),t&&a.a.createElement("div",null),a.a.createElement("div",null)))}var Le="mailto:SolanaDogeNFTs@protonmail.com",Qe="https://discord.gg/Us8NkrSFfX",De="https://twitter.com/SolanaDogeNFTs",Ne=Ee.a.Footer,Ue=[{description:"Contact",link:Le},{description:"Discord",link:Qe},{description:"Twitter",link:De}],Me=function(){return a.a.createElement(Ne,{style:{height:"45px",paddingBottom:10,paddingTop:10}},a.a.createElement(xe.a,{align:"middle",gutter:[16,4]},a.a.createElement(a.a.Fragment,null,a.a.createElement(Ae.a,{flex:"auto"}),Ue.map((function(e,t){return a.a.createElement(Ae.a,{key:t+""},a.a.createElement(F,{external:!0,to:e.link},e.description))}))),a.a.createElement(Ae.a,{flex:"auto"})))},Re=Ee.a.Header,Ke=Ee.a.Content;function Pe(e){var t=e.children;return a.a.createElement(a.a.Fragment,null,a.a.createElement(Ee.a,{style:{display:"flex",minHeight:"100vh",flexDirection:"column"}},a.a.createElement(Re,{style:{padding:0,minHeight:64,height:"unset"}},a.a.createElement(Fe,null)),a.a.createElement(Ke,{style:{flex:1}},t),a.a.createElement(Me,null)))}function Ve(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(B.a,{basename:"/"},a.a.createElement(Pe,null,a.a.createElement(ne.c,null,a.a.createElement(ne.a,{exact:!0,path:"/"},a.a.createElement(se,null)),a.a.createElement(ne.a,{exact:!0,path:"/rarity"},a.a.createElement(be,null))))))}function ze(){return a.a.createElement(r.Suspense,{fallback:function(){return a.a.createElement($.a,{size:"large"})}},a.a.createElement(_,null),a.a.createElement(te,null,a.a.createElement(j,null,a.a.createElement(q,null,a.a.createElement(r.Suspense,{fallback:function(){return a.a.createElement($.a,{size:"large"})}},a.a.createElement(Ve,null))))))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(ze,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[254,1,2]]]);
//# sourceMappingURL=main.a3446c9d.chunk.js.map