(this["webpackJsonpmath-magicians-calculator"]=this["webpackJsonpmath-magicians-calculator"]||[]).push([[0],[,,function(t,n,e){t.exports={cell:"Button_cell__GJaJ1","cell-hover":"Button_cell-hover__z7opv",button:"Button_button__3vmLB Button_cell__GJaJ1 Button_cell-hover__z7opv",color:"Button_color__2zwMY",wide:"Button_wide__1Qa-v"}},,,,,,function(t,n,e){t.exports={display:"Display_display__1ObfC"}},function(t,n,e){t.exports={group:"ButtonPanel_group__XsVxy"}},function(t,n,e){t.exports={container:"App_container__y0aI6"}},,,,function(t,n,e){t.exports=e(21)},,,,,function(t,n,e){},function(t,n,e){},function(t,n,e){"use strict";e.r(n);var o=e(0),a=e.n(o),r=e(4),i=e.n(r),c=e(5),l=e(6),u=e(12),s=e(7),d=e(1),f=e(13),p=e(8),h=e.n(p),v=function(t){var n=t.result;return a.a.createElement("div",{"data-testid":"display",className:h.a.display},n)};v.defaultProps={result:"0"};var m=v,g=e(2),w=e.n(g),_=function(t){var n=t.name,e=t.color,o=t.wide,r=t.handleClick;return a.a.createElement("button",{type:"button","data-testid":n,onClick:function(){return r(n)},className:"".concat(w.a.button," ").concat(e?w.a.color:""," ").concat(o?w.a.wide:"")},n)};_.defaultProps={color:!1,wide:!1,handleClick:function(t){return t.target}};var k=_,b=e(9),y=e.n(b),C=[["AC","+/-","%","\xf7"],["7","8","9","X"],["4","5","6","-"],["1","2","3","+"],["0",".","="]],x=function(t){var n=t.handleClick;return a.a.createElement("div",{"data-testid":"button-panel"},C.map((function(t,e){return a.a.createElement("div",{key:Math.random(),"data-testid":"group-".concat(e+1),className:y.a.group},t.map((function(t,o){return a.a.createElement(k,{name:t,key:Math.random(),color:(4!==e||2!==o)&&3!==o,wide:"0"===t,handleClick:n})})))})))};x.defaultProps={handleClick:function(){}};var E=x,B=e(10),A=e.n(B),S=e(11),j=e.n(S),O=function(t,n,e){if(!["+","-","X","\xf7"].includes(n))return t.toString();var o=t;return t.toString().match("^\\.")&&(o="0".concat(t)),o=j()(o),{"\xf7":"0"===e||0===e?"0":o.div(e).toString(),"+":o.plus(e),"-":o.minus(e),X:o.times(e)}[n].toString()},W=["+","X","-","\xf7"],X=function(t,n){if(["0","1","2","3","4","5","6","7","8","9","."].includes(n))return function(t,n){var e=t.total,o=t.operation,a=t.next,r=e,i=a;return W.includes(o)?(a||(i=""),i+=n):("0"===e&&(r=""),r+=n),{total:r,operation:o,next:i}}(t,n);if(W.includes(n))return function(t,n){var e=t.total,o=t.operation,a=t.next,r=e,i=o,c=a;return"0"!==e?a&&(r=O(e,i,a),c=null):c=null,{total:r,operation:i=n,next:c}}(t,n);return["AC","+/-","%","="].includes(n)?function(t,n){var e=t.total,o=t.operation,a=t.next,r=e,i=o,c=a;return"AC"===n&&(r="0",i=null,c=null),"+/-"===n&&(a?(W.includes(o)?c=O(a,"X",-1):(r=O(e,"X",-1),c=null),i=n):("0"!==e&&(i=n),r=O(e,"X",-1))),"%"===n&&(a?(r=O(e,o,a),r=O(r,"\xf7",100),c=null,i=n):("0"!==e&&(i=n),r=O(r,"\xf7",100))),"="===n&&(a&&(W.includes(o)&&(r=O(e,o,a)),c=null,i=n),"0"!==e&&(i=n)),{total:r,operation:i,next:c}}(t,n):t},J=function(t){function n(){var t;return Object(c.a)(this,n),(t=Object(u.a)(this,Object(s.a)(n).call(this))).state={total:"0",next:null,operation:null},t.handleClick=t.handleClick.bind(Object(d.a)(t)),t}return Object(f.a)(n,t),Object(l.a)(n,[{key:"handleClick",value:function(t){var n=X(this.state,t);this.setState(n)}},{key:"render",value:function(){var t=this.handleClick,n=this.state,e=n.next,o=n.total;return a.a.createElement("div",{"data-testid":"app",className:A.a.container},a.a.createElement(m,{result:e||o}),a.a.createElement(E,{handleClick:t}))}}]),n}(o.Component),N=(e(19),e(20),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function P(t,n){navigator.serviceWorker.register(t).then((function(t){t.onupdatefound=function(){var e=t.installing;null!=e&&(e.onstatechange=function(){"installed"===e.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(t)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(t)))})}})).catch((function(t){console.error("Error during service worker registration:",t)}))}i.a.render(a.a.createElement(J,null),document.getElementById("root")),function(t){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("","/service-worker.js");N?(!function(t,n){fetch(t,{headers:{"Service-Worker":"script"}}).then((function(e){var o=e.headers.get("content-type");404===e.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(t){t.unregister().then((function(){window.location.reload()}))})):P(t,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,t),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):P(n,t)}))}}()}],[[14,1,2]]]);
//# sourceMappingURL=main.1dfaa8db.chunk.js.map