import{S as s,i as t,s as e,e as o,c as a,a as n,d as i,b as l,f as r,D as c,E as h,F as u,G as g,H as d,I as f,k as v,j as m,n as $,m as p,o as b,J as k,v as w,r as E,w as j,N as I}from"../chunks/vendor-d00531f1.js";const{window:T}=d;function y(s){let t,e,d,f;return{c(){t=o("div"),e=o("i"),this.h()},l(s){t=a(s,"DIV",{class:!0,style:!0});var o=n(t);e=a(o,"I",{class:!0}),n(e).forEach(i),o.forEach(i),this.h()},h(){l(e,"class","iconfont icon-back-top"),l(t,"class","back-top svelte-9c9s8u"),l(t,"style",s[0])},m(o,a){r(o,t,a),c(t,e),d||(f=[h(T,"scroll",s[1]),h(t,"click",s[2])],d=!0)},p(s,[e]){1&e&&l(t,"style",s[0])},i:u,o:u,d(s){s&&i(t),d=!1,g(f)}}}function H(s,t,e){let o,{visibleHeight:a=300}=t,{bottom:n="5rem"}=t,{right:i="0.625rem"}=t,{duration:l=500}=t;const r="undefined"!=typeof document?document.documentElement:null;let c=!1;const h=(s,t,e=0)=>{const o=s=>Math.pow(s,3),a=Date.now(),n=s.scrollTop,i=window.requestAnimationFrame||(s=>setTimeout(s,16)),l=()=>{const r=(Date.now()-a)/t;var c;r<1?(s.scrollTop=n*(1-((c=r)<.5?o(2*c)/2:1-o(2*(1-c))/2)),i(l)):s.scrollTop=e};i(l)};return s.$$set=s=>{"visibleHeight"in s&&e(3,a=s.visibleHeight),"bottom"in s&&e(4,n=s.bottom),"right"in s&&e(5,i=s.right),"duration"in s&&e(6,l=s.duration)},s.$$.update=()=>{304&s.$$.dirty&&e(0,o=`bottom: ${n};right: ${i};display: ${c?"flex":"none"}`)},[o,()=>e(8,c=(null==r?void 0:r.scrollTop)>a),()=>h(r,l),a,n,i,l,r,c]}class x extends s{constructor(s){super(),t(this,s,H,y,e,{visibleHeight:3,bottom:4,right:5,duration:6,target:7})}get target(){return this.$$.ctx[7]}}function A(s){let t,e,u,d,I,T,y,H,A,D,G,M,N,S,F;const q=s[1].default,C=f(q,s,s[0],null);return M=new x({}),{c(){t=o("section"),e=o("header"),u=o("a"),d=o("img"),T=v(),y=o("a"),H=o("i"),A=v(),D=o("main"),C&&C.c(),G=v(),m(M.$$.fragment),this.h()},l(s){t=a(s,"SECTION",{class:!0});var o=n(t);e=a(o,"HEADER",{class:!0});var l=n(e);u=a(l,"A",{href:!0});var r=n(u);d=a(r,"IMG",{class:!0,src:!0,alt:!0}),r.forEach(i),T=$(l),y=a(l,"A",{class:!0,href:!0,target:!0});var c=n(y);H=a(c,"I",{class:!0}),n(H).forEach(i),c.forEach(i),l.forEach(i),A=$(o),D=a(o,"MAIN",{});var h=n(D);C&&C.l(h),h.forEach(i),G=$(o),p(M.$$.fragment,o),o.forEach(i),this.h()},h(){l(d,"class","logo svelte-jbk32v"),d.src!==(I="/assets/images/logo.png")&&l(d,"src","/assets/images/logo.png"),l(d,"alt","code book logo"),l(u,"href","/"),l(H,"class","iconfont icon-github svelte-jbk32v"),l(y,"class","github svelte-jbk32v"),l(y,"href","https://github.com/renzp94"),l(y,"target","_blank"),l(e,"class","svelte-jbk32v"),l(t,"class","svelte-jbk32v")},m(o,a){r(o,t,a),c(t,e),c(e,u),c(u,d),c(e,T),c(e,y),c(y,H),c(t,A),c(t,D),C&&C.m(D,null),c(t,G),b(M,t,null),N=!0,S||(F=[h(window,"sveltekit:navigation-start",s[2]),h(window,"sveltekit:navigation-end",s[3])],S=!0)},p(s,[t]){C&&C.p&&(!N||1&t)&&k(C,q,s,s[0],t,null,null)},i(s){N||(w(C,s),w(M.$$.fragment,s),N=!0)},o(s){E(C,s),E(M.$$.fragment,s),N=!1},d(s){s&&i(t),C&&C.d(s),j(M),S=!1,g(F)}}}function D(s,t,e){let{$$slots:o={},$$scope:a}=t;I.configure({showSpinner:!1});return s.$$set=s=>{"$$scope"in s&&e(0,a=s.$$scope)},[a,o,()=>I.start(),()=>I.done()]}export default class extends s{constructor(s){super(),t(this,s,D,A,e,{})}}
