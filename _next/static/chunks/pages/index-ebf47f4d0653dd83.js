(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(445)}])},4796:function(n,e,t){"use strict";t.d(e,{Z:function(){return f}});var r=t(5893),i=t(9547),o=t.n(i),u=t(1664),c=t.n(u),a=t(2839);function s(n){var e=n.hiddenByDefault;return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("nav",{className:o().dynamic([["43282511363b611a",["/gigs"]]])+" "+"".concat(e?"hidden":"flex"," flex-wrap items-center bg-black p-5"),children:[(0,r.jsx)(o(),{id:"43282511363b611a",dynamic:["/gigs"],children:'@font-face{font-family:"Newake";src:url("'.concat("/gigs",'/fonts/newake-demo-400.otf");font-style:normal;font-weight:400;font-display:swap}')}),(0,r.jsx)(c(),{href:"/",children:(0,r.jsx)("a",{className:o().dynamic([["43282511363b611a",["/gigs"]]])+" inline-flex items-center p-2 mr-4",children:(0,r.jsx)("span",{className:o().dynamic([["43282511363b611a",["/gigs"]]])+" mr-2 w-8 h-8 text-white fill-current",children:(0,r.jsx)(a.Z,{textSize:"text-3xl",invertColors:!0})})})})]})})}var l=function(){return(0,r.jsx)("footer",{className:"flex justify-center items-center w-full h-24 border-t ",children:(0,r.jsx)("a",{className:"flex gap-2 mx-4 text-center md:mx-0",href:"https://github.com/undershows/gigs",target:"_blank",rel:"noopener noreferrer",children:(0,r.jsxs)("p",{children:["O ",(0,r.jsx)(a.Z,{textSize:"text-l"})," \xe9 um projeto colaborativo."," ",(0,r.jsx)("span",{className:"sm:hidden",children:(0,r.jsx)("br",{})}),"Colabore voc\xea tamb\xe9m."]})})})};function f(n){var e=n.children,t=n.navbarProps;return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("main",{className:"flex flex-col w-screen h-screen min-h-screen",children:[(0,r.jsx)(s,{hiddenByDefault:null===t||void 0===t?void 0:t.hiddenByDefault}),(0,r.jsx)("div",{className:"flex-1 justify-center items-center w-full h-full align-middle",children:(0,r.jsx)("div",{className:"w-full h-full",children:e})}),(0,r.jsx)(l,{})]})})}},2839:function(n,e,t){"use strict";t.d(e,{Z:function(){return i}});var r=t(5893);function i(n){var e=n.textSize,t=n.className,i=n.invertColors;return(0,r.jsxs)("span",{className:"font-newake font-bold tracking-wider ".concat(e||"text-6xl"," ").concat(t||""),children:[(0,r.jsx)("span",{className:"underline underline-offset-4 text-black ".concat(i?"invert":""),children:"UNDER"}),(0,r.jsx)("span",{className:"px-1 pt-2 text-white bg-clip-padding bg-black ".concat(i?"invert":""),children:"SHOWS"})]})}},445:function(n,e,t){"use strict";t.r(e),t.d(e,{__N_SSG:function(){return q},default:function(){return J}});var r=t(5893),i=t(9008),o=t.n(i),u=t(5675),c=t.n(u),a=t(4002),s=t(1664),l=t.n(s),f=t(3559),d=t(484),m=function(n){var e=(0,a.Z)(n.date,"dd/MM/yyyy",new Date);return(0,r.jsx)("div",{className:"content-center w-full h-full",children:(0,r.jsx)(l(),{href:"/show/".concat((0,f.Z)(n)),children:(0,r.jsx)("a",{children:(0,r.jsx)(c(),{src:"".concat("/gigs","/assets/").concat(e.getFullYear(),"/").concat(e.getMonth()+1,"/").concat(n.img),alt:n.name?n.name:"",layout:"fill",objectFit:"contain",loader:d.Z})})})})},p=t(4796),v=t(2839),g=t(7294);function h(n,e){return Object.keys(n).length===Object.keys(e).length&&Object.keys(n).every((function(t){return!!Object.prototype.hasOwnProperty.call(e,t)&&n[t]===e[t]}))}function x(n){return n.concat().sort((function(n,e){return n.name>e.name?1:-1})).map((function(n){return n.options}))}function y(n,e){var t={start:function(){return 0},center:function(n){return r(n)/2},end:r};function r(n){return e-n}return{measure:function(r){return"number"===typeof n?e*Number(n):t[n](r)}}}function b(n){return Math.abs(n)}function w(n){return n?n/b(n):0}function j(n,e){return b(n-e)}function S(n,e){for(var t=[],r=0;r<n.length;r+=e)t.push(n.slice(r,r+e));return t}function N(n){return Object.keys(n).map(Number)}function E(n){return n[O(n)]}function O(n){return Math.max(0,n.length-1)}function A(n,e){var t=b(n-e);function r(e){return e<n}function i(n){return n>e}function o(n){return r(n)||i(n)}return{length:t,max:e,min:n,constrain:function(t){return o(t)?r(t)?n:e:t},reachedAny:o,reachedMax:i,reachedMin:r,removeOffset:function(n){return t?n-t*Math.ceil((n-e)/t):n}}}function k(n,e,t){var r=A(0,n),i=r.min,o=r.constrain,u=n+1,c=a(e);function a(n){return t?b((u+n)%u):o(n)}function s(){return c}function l(n){return c=a(n),f}var f={add:function(n){return l(s()+n)},clone:function(){return k(n,s(),t)},get:s,set:l,min:i,max:n};return f}function M(){var n=[];var e={add:function(t,r,i,o){return void 0===o&&(o=!1),t.addEventListener(r,i,o),n.push((function(){return t.removeEventListener(r,i,o)})),e},removeAll:function(){return n=n.filter((function(n){return n()})),e}};return e}function P(n){var e=n;function t(n){return e/=n,i}function r(n){return"number"===typeof n?n:n.get()}var i={add:function(n){return e+=r(n),i},divide:t,get:function(){return e},multiply:function(n){return e*=n,i},normalize:function(){return 0!==e&&t(e),i},set:function(n){return e=r(n),i},subtract:function(n){return e-=r(n),i}};return i}function T(n,e,t,r,i,o,u,c,a,s,l,f,d,m,p){var v=n.cross,g=["INPUT","SELECT","TEXTAREA"],h=P(0),x=M(),y=M(),S={mouse:300,touch:400},N={mouse:500,touch:600},E=i?5:16,O=0,A=0,k=!1,T=!1,B=!1,I=!1;function _(n){if(!(I="mousedown"===n.type)||0===n.button){var e=j(r.get(),u.get())>=2,i=I||!e,c=!function(n){var e=n.nodeName||"";return g.indexOf(e)>-1}(n.target),a=e||I&&c;k=!0,o.pointerDown(n),h.set(r),r.set(u),s.useBaseMass().useSpeed(80),function(){var n=I?document:t;y.add(n,"touchmove",D).add(n,"touchend",z).add(n,"mousemove",D).add(n,"mouseup",z)}(),O=o.readPoint(n),A=o.readPoint(n,v),d.emit("pointerDown"),i&&(B=!1),a&&n.preventDefault()}}function D(n){if(!T&&!I){if(!n.cancelable)return z(n);var t=o.readPoint(n),i=o.readPoint(n,v),u=j(t,O),a=j(i,A);if(!(T=u>a)&&!B)return z(n)}var s=o.pointerMove(n);!B&&s&&(B=!0),c.start(),r.add(e.apply(s)),n.preventDefault()}function z(n){var t=l.byDistance(0,!1).index!==f.get(),u=o.pointerUp(n)*(i?N:S)[I?"mouse":"touch"],c=function(n,e){var t=f.clone().add(-1*w(n)),r=t.get()===f.min||t.get()===f.max,o=l.byDistance(n,!i).distance;return i||b(n)<20?o:!m&&r?.4*o:p&&e?.5*o:l.byIndex(t.get(),0).distance}(e.apply(u),t),v=function(n,e){if(0===n||0===e)return 0;if(b(n)<=b(e))return 0;var t=j(b(n),b(e));return b(t/n)}(u,c),g=j(r.get(),h.get())>=.5,x=t&&v>.75,O=b(u)<20,A=x?10:E,M=x?1+2.5*v:1;g&&!I&&(B=!0),T=!1,k=!1,y.removeAll(),s.useSpeed(O?9:A).useMass(M),a.distance(c,!i),I=!1,d.emit("pointerUp")}function C(n){B&&n.preventDefault()}return{addActivationEvents:function(){var n=t;x.add(n,"touchmove",(function(){})).add(n,"touchend",(function(){})).add(n,"touchstart",_).add(n,"mousedown",_).add(n,"touchcancel",z).add(n,"contextmenu",z).add(n,"click",C)},clickAllowed:function(){return!B},pointerDown:function(){return k},removeAllEvents:function(){x.removeAll(),y.removeAll()}}}function B(n,e,t){var r=function(n){var e=Math.pow(10,n);return function(n){return Math.round(n*e)/e}}(2),i=P(0),o=P(0),u=P(0),c=0,a=e,s=t;function l(n){return a=n,d}function f(n){return s=n,d}var d={direction:function(){return c},seek:function(e){u.set(e).subtract(n);var t,r,l,f,m=(t=u.get(),(l=0)+(t-(r=0))/(100-r)*(a-l));return c=w(u.get()),u.normalize().multiply(m).subtract(i),(f=u).divide(s),o.add(f),d},settle:function(e){var t=e.get()-n.get(),i=!r(t);return i&&n.set(e),i},update:function(){i.add(o),n.add(i),o.multiply(0)},useBaseMass:function(){return f(t)},useBaseSpeed:function(){return l(e)},useMass:f,useSpeed:l};return d}function I(n,e,t,r){var i=!1;return{constrain:function(o){if(!i&&n.reachedAny(t.get())&&n.reachedAny(e.get())){var u=n.reachedMin(e.get())?"min":"max",c=b(n[u]-e.get()),a=t.get()-e.get(),s=Math.min(c/50,.85);t.subtract(a*s),!o&&b(a)<10&&(t.set(n.constrain(t.get())),r.useSpeed(10).useMass(3))}},toggleActive:function(n){i=!n}}}function _(n,e,t,r,i){var o=A(-e+n,t[0]),u=r.map(o.constrain);return{snapsContained:function(){if(e<=n)return[o.max];if("keepSnaps"===i)return u;var t=function(){var n=u[0],e=E(u),t=u.lastIndexOf(n),r=u.indexOf(e)+1;return A(t,r)}(),r=t.min,c=t.max;return u.slice(r,c)}()}}function D(n,e,t,r,i){var o=A(t.min+e.measure(.1),t.max+e.measure(.1)),u=o.reachedMin,c=o.reachedMax;return{loop:function(e){if(function(n){return 1===n?c(r.get()):-1===n&&u(r.get())}(e)){var t=n*(-1*e);i.forEach((function(n){return n.add(t)}))}}}}function z(n){var e=n.max,t=n.length;return{get:function(n){return(n-e)/-t}}}function C(n,e,t,r,i,o){var u=n.startEdge,c=n.endEdge,a=i.map((function(n){return r[u]-n[u]})).map(t.measure).map((function(n){return-b(n)})),s=function(){var n=S(a,o).map((function(n){return n[0]})),r=S(i,o).map((function(n){return E(n)[c]-n[0][u]})).map(t.measure).map(b).map(e.measure);return n.map((function(n,e){return n+r[e]}))}();return{snaps:a,snapsAligned:s}}function L(n,e,t,r,i){var o=r.reachedAny,u=r.removeOffset,c=r.constrain;function a(n,e){return b(n)<b(e)?n:e}function s(e,r){var i=e,o=e+t,u=e-t;return n?r?b(a(i,1===r?o:u))*r:a(a(i,o),u):i}return{byDistance:function(t,r){var a=i.get()+t,l=function(t){var r=n?u(t):c(t);return{index:e.map((function(n){return n-r})).map((function(n){return s(n,0)})).map((function(n,e){return{diff:n,index:e}})).sort((function(n,e){return b(n.diff)-b(e.diff)}))[0].index,distance:r}}(a),f=l.index,d=l.distance,m=!n&&o(a);return!r||m?{index:f,distance:t}:{index:f,distance:t+s(e[f]-d,0)}},byIndex:function(n,t){return{index:n,distance:s(e[n]-i.get(),t)}},shortcut:s}}function Z(n,e,t,r,i,o,u,c){var a=N(r),s=N(r).reverse(),l=function(){var n=i[0]-1;return m(d(s,n),"end")}().concat(function(){var n=e-i[0]-1;return m(d(a,n),"start")}());function f(n,e){return n.reduce((function(n,e){return n-r[e]}),e)}function d(n,e){return n.reduce((function(n,t){return f(n,e)>0?n.concat([t]):n}),[])}function m(n,e){var r="start"===e,i=r?-t:t,c=o.findSlideBounds([i]);return n.map((function(n){var e=r?0:-t,i=r?t:0,o=c.filter((function(e){return e.index===n}))[0][r?"end":"start"];return{point:o,getTarget:function(){return u.get()>o?e:i},index:n,location:-1}}))}return{canLoop:function(){return l.every((function(n){var t=n.index;return f(a.filter((function(n){return n!==t})),e)<=0}))},clear:function(){l.forEach((function(e){var t=e.index;c[t].style[n.startEdge]=""}))},loop:function(){l.forEach((function(e){var t=e.getTarget,r=e.location,i=e.index,o=t();o!==r&&(c[i].style[n.startEdge]=o+"%",e.location=o)}))},loopPoints:l}}function F(n,e,t){var r="x"===n.scroll?function(n){return"translate3d("+n+"%,0px,0px)"}:function(n){return"translate3d(0px,"+n+"%,0px)"},i=t.style,o=!1;return{clear:function(){i.transform=""},to:function(n){o||(i.transform=r(e.apply(n.get())))},toggleActive:function(n){o=!n}}}function R(n,e,t,r,i){var o,u=r.align,c=r.axis,a=r.direction,s=r.startIndex,l=r.inViewThreshold,f=r.loop,d=r.speed,m=r.dragFree,p=r.slidesToScroll,v=r.skipSnaps,g=r.containScroll,h=e.getBoundingClientRect(),x=t.map((function(n){return n.getBoundingClientRect()})),w=function(n){var e="rtl"===n?-1:1;return{apply:function(n){return n*e}}}(a),j=function(n,e){var t="y"===n?"y":"x";return{scroll:t,cross:"y"===n?"x":"y",startEdge:"y"===t?"top":"rtl"===e?"right":"left",endEdge:"y"===t?"bottom":"rtl"===e?"left":"right",measureSize:function(n){var e=n.width,r=n.height;return"x"===t?e:r}}}(c,a),S=(o=j.measureSize(h),{measure:function(n){return 0===o?0:n/o*100},totalPercent:100}),R=S.totalPercent,H=y(u,R),V=function(n,e,t,r,i){var o=n.measureSize,u=n.startEdge,c=n.endEdge,a=r.map(o);return{slideSizes:a.map(e.measure),slideSizesWithGaps:r.map((function(n,e,r){var o=e===O(r),s=window.getComputedStyle(E(t)),l=parseFloat(s.getPropertyValue("margin-"+c));return o?a[e]+(i?l:0):r[e+1][u]-n[u]})).map(e.measure).map(b)}}(j,S,t,x,f),U=V.slideSizes,X=V.slideSizesWithGaps,G=C(j,H,S,h,x,p),W=G.snaps,Y=G.snapsAligned,q=-E(W)+E(X),J=_(R,q,W,Y,g).snapsContained,$=!f&&""!==g?J:Y,K=function(n,e,t){return{limit:function(){var r=e[0],i=E(e);return A(t?r-n:i,r)}()}}(q,$,f).limit,Q=k(O($),s,f),nn=Q.clone(),en=N(t),tn=function(n){var e=0;function t(n,t){return function(){n===!!e&&t()}}function r(){e=window.requestAnimationFrame(n)}return{proceed:t(!0,r),start:t(!1,r),stop:t(!0,(function(){window.cancelAnimationFrame(e),e=0}))}}((function(){f||dn.scrollBounds.constrain(dn.dragHandler.pointerDown()),dn.scrollBody.seek(un).update();var n=dn.scrollBody.settle(un);n&&!dn.dragHandler.pointerDown()&&(dn.animation.stop(),i.emit("settle")),n||i.emit("scroll"),f&&(dn.scrollLooper.loop(dn.scrollBody.direction()),dn.slideLooper.loop()),dn.translate.to(on),dn.animation.proceed()})),rn=$[Q.get()],on=P(rn),un=P(rn),cn=B(on,d,1),an=L(f,$,q,K,un),sn=function(n,e,t,r,i,o){function u(r){var u=r.distance,c=r.index!==e.get();u&&(n.start(),i.add(u)),c&&(t.set(e.get()),e.set(r.index),o.emit("select"))}return{distance:function(n,e){u(r.byDistance(n,e))},index:function(n,t){var i=e.clone().set(n);u(r.byIndex(i.get(),t))}}}(tn,Q,nn,an,un,i),ln=function(n,e,t,r,i,o,u){var c=i.removeOffset,a=i.constrain,s=Math.min(Math.max(u,.01),.99),l=o?[0,e,-e]:[0],f=d(l,s);function d(e,i){var o=e||l,u=i||0,c=t.map((function(n){return n*u}));return o.reduce((function(e,i){var o=r.map((function(e,r){return{start:e-t[r]+c[r]+i,end:e+n-c[r]+i,index:r}}));return e.concat(o)}),[])}return{check:function(n,e){var t=o?c(n):a(n);return(e||f).reduce((function(n,e){var r=e.index,i=e.start,o=e.end;return-1===n.indexOf(r)&&i<t&&o>t?n.concat([r]):n}),[])},findSlideBounds:d}}(R,q,U,W,K,f,l),fn=T(j,w,n,un,m,function(n,e){var t,r;function i(n){return"undefined"!==typeof TouchEvent&&n instanceof TouchEvent}function o(n){return n.timeStamp}function u(e,t){var r="client"+("x"===(t||n.scroll)?"X":"Y");return(i(e)?e.touches[0]:e)[r]}return{isTouchEvent:i,pointerDown:function(n){return t=n,r=n,e.measure(u(n))},pointerMove:function(n){var i=u(n)-u(r),c=o(n)-o(t)>170;return r=n,c&&(t=n),e.measure(i)},pointerUp:function(n){if(!t||!r)return 0;var i=u(r)-u(t),c=o(n)-o(t),a=o(n)-o(r)>170,s=i/c;return c&&!a&&b(s)>.1?e.measure(s):0},readPoint:u}}(j,S),on,tn,sn,cn,an,Q,i,f,v),dn={containerRect:h,slideRects:x,animation:tn,axis:j,direction:w,dragHandler:fn,eventStore:M(),pxToPercent:S,index:Q,indexPrevious:nn,limit:K,location:on,options:r,scrollBody:cn,scrollBounds:I(K,on,un,cn),scrollLooper:D(q,S,K,on,[on,un]),scrollProgress:z(K),scrollSnaps:$,scrollTarget:an,scrollTo:sn,slideLooper:Z(j,R,q,X,$,ln,on,t),slidesInView:ln,slideIndexes:en,target:un,translate:F(j,w,e)};return dn}var H={align:"center",axis:"x",containScroll:"",direction:"ltr",dragFree:!1,draggable:!0,inViewThreshold:0,loop:!1,skipSnaps:!1,slidesToScroll:1,speed:10,startIndex:0};function V(n,e,t){var r,i,o,u,c,a,s=function(){var n={};function e(e){return n[e]||[]}var t={emit:function(n){return e(n).forEach((function(e){return e(n)})),t},off:function(r,i){return n[r]=e(r).filter((function(n){return n!==i})),t},on:function(r,i){return n[r]=e(r).concat([i]),t}};return t}(),l=function(n,e){var t=0;return function(){window.clearTimeout(t),t=window.setTimeout(n,e)||0}}((function(){if(!p)return;var n=r.axis.measureSize(u.getBoundingClientRect());h!==n&&b();s.emit("resize")}),500),f=b,d=s.on,m=s.off,p=!1,v=Object.assign({},H,V.globalOptions),g=Object.assign({},v),h=0;function x(){var e="container"in n&&n.container,t="slides"in n&&n.slides;u="root"in n?n.root:n,c=e||u.children[0],a=t||[].slice.call(c.children),i=function(n){var e=getComputedStyle(n,":before").content;return{get:function(){try{return JSON.parse(e.slice(1,-1).replace(/\\/g,""))}catch(n){}return{}}}}(u)}function y(n,e){if(x(),v=Object.assign({},v,n),g=Object.assign({},v,i.get()),o=Object.assign([],e),(r=R(u,c,a,g,s)).eventStore.add(window,"resize",l),r.translate.to(r.location),h=r.axis.measureSize(u.getBoundingClientRect()),o.forEach((function(n){return n.init(E)})),g.loop){if(!r.slideLooper.canLoop())return w(),y({loop:!1},e);r.slideLooper.loop()}g.draggable&&c.offsetParent&&a.length&&r.dragHandler.addActivationEvents(),p||(setTimeout((function(){return s.emit("init")}),0),p=!0)}function b(n,e){if(p){var t=N(),r=Object.assign({startIndex:t},n);w(),y(r,e||o),s.emit("reInit")}}function w(){r.dragHandler.removeAllEvents(),r.animation.stop(),r.eventStore.removeAll(),r.translate.clear(),r.slideLooper.clear(),o.forEach((function(n){return n.destroy()}))}function j(n){var e=r[n?"target":"location"].get(),t=g.loop?"removeOffset":"constrain";return r.slidesInView.check(r.limit[t](e))}function S(n,e,t){r.scrollBody.useBaseMass().useSpeed(e?100:g.speed),p&&r.scrollTo.index(n,t||0)}function N(){return r.index.get()}var E={canScrollNext:function(){return r.index.clone().add(1).get()!==N()},canScrollPrev:function(){return r.index.clone().add(-1).get()!==N()},clickAllowed:function(){return r.dragHandler.clickAllowed()},containerNode:function(){return c},internalEngine:function(){return r},destroy:function(){p&&(w(),p=!1,s.emit("destroy"))},off:m,on:d,previousScrollSnap:function(){return r.indexPrevious.get()},reInit:f,rootNode:function(){return u},scrollNext:function(n){S(r.index.clone().add(1).get(),!0===n,-1)},scrollPrev:function(n){S(r.index.clone().add(-1).get(),!0===n,1)},scrollProgress:function(){return r.scrollProgress.get(r.location.get())},scrollSnapList:function(){return r.scrollSnaps.map(r.scrollProgress.get)},scrollTo:S,selectedScrollSnap:N,slideNodes:function(){return a},slidesInView:j,slidesNotInView:function(n){var e=j(n);return r.slideIndexes.filter((function(n){return-1===e.indexOf(n)}))}};return y(e,t),E}function U(n,e){void 0===n&&(n={}),void 0===e&&(e=[]);var t=(0,g.useState)(),r=t[0],i=t[1],o=(0,g.useState)(),u=o[0],c=o[1],a=(0,g.useRef)(n),s=(0,g.useRef)(e),l=(0,g.useMemo)((function(){return h(a.current,n)||(a.current=n),a.current}),[a,n]),f=(0,g.useMemo)((function(){return function(n,e){if(n.length!==e.length)return!1;var t=x(n),r=x(e);return t.every((function(n,e){return h(n,r[e])}))}(s.current,e)||(s.current=e),s.current}),[s,e]);return(0,g.useEffect)((function(){if("undefined"!==typeof window&&window.document&&window.document.createElement&&u){V.globalOptions=U.globalOptions;var n=V(u,l,f);return i(n),function(){return n.destroy()}}i(void 0)}),[u,l,f,i]),[c,r]}V.globalOptions=void 0,U.globalOptions=void 0;var X=U;function G(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function W(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!==typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var r,i,o=[],u=!0,c=!1;try{for(t=t.call(n);!(u=(r=t.next()).done)&&(o.push(r.value),!e||o.length!==e);u=!0);}catch(a){c=!0,i=a}finally{try{u||null==t.return||t.return()}finally{if(c)throw i}}return o}}(n,e)||function(n,e){if(!n)return;if("string"===typeof n)return G(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return G(n,e)}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Y(n){var e=W(X(),2),t=e[0],i=e[1];return(0,g.useEffect)((function(){i&&i.reInit()}),[i,n.slides]),(0,r.jsx)("div",{className:"w-full h-full embla",ref:t,children:(0,r.jsx)("div",{className:"w-full h-full embla__container",children:n.slides.map((function(n,e){return(0,r.jsx)("div",{className:"w-full h-full embla__slide",children:n},e)}))})})}var q=!0;function J(n){var e=n.shows;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(o(),{children:[(0,r.jsx)("title",{children:"undershows"}),(0,r.jsx)("link",{rel:"icon",href:"".concat("/gigs","/favicon.ico")})]}),(0,r.jsxs)("div",{className:"flex flex-col justify-center content-center items-center px-20 w-full h-full",children:[(0,r.jsx)("h1",{className:"mt-8",children:(0,r.jsx)(v.Z,{})}),(0,r.jsx)("p",{className:"mt-3 text-2xl",children:"O underground respira."}),(0,r.jsx)("div",{className:"flex my-6 w-full h-full",children:(0,r.jsx)(Y,{slides:e.map((function(n){return(0,r.jsx)(m,{name:n.name,date:n.date,bands:n.bands,schedule:n.schedule,img:n.img},(0,f.Z)(n))}))})})]})]})}J.getLayout=function(n){return(0,r.jsx)(p.Z,{navbarProps:{hiddenByDefault:!0},children:n})}},3559:function(n,e,t){"use strict";t.d(e,{Z:function(){return o}});var r=t(6688),i=t.n(r);function o(n){return n.name?n.name:i()(n.bands.join("-").replaceAll(" ","-").toLowerCase())}},484:function(n,e,t){"use strict";function r(n){return n.src}t.d(e,{Z:function(){return r}})}},function(n){n.O(0,[411,774,888,179],(function(){return e=8312,n(n.s=e);var e}));var e=n.O();_N_E=e}]);