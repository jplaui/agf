import{V as e,C as s,S as t,i as a,s as n,e as r,t as l,k as i,c as o,a as c,g as u,d,n as f,b as h,N as p,f as g,F as y,h as m,W as w,X as v,Y as b,Z as S,_ as M,$ as R,B as E,P as H,a0 as N,u as O,v as X,r as q,I as D,a1 as L,a2 as k,H as F}from"./vendor-c052606d.js";const T=(()=>{const t=s([]),a=(e,s="default")=>{t.update((t=>[...t,{id:"_"+Math.random().toString(36).substr(2,9),type:s,message:e}]))},n=e(t,((e,s)=>{if(s(e),e.length>0){const e=setTimeout((()=>{t.update((e=>(e.shift(),e)))}),3e3);return()=>{clearTimeout(e)}}})),{subscribe:r}=n;return{subscribe:r,send:a,danger:e=>a(e,"danger"),warning:e=>a(e,"warning"),info:e=>a(e,"info"),success:e=>a(e,"success")}})();function I(e,s,t){const a=e.slice();return a[2]=s[t],a}function J(e){let s,t;return{c(){s=r("i"),this.h()},l(e){s=o(e,"I",{class:!0}),c(s).forEach(d),this.h()},h(){h(s,"class",t=w(e[2].icon)+" svelte-rlsdwl")},m(e,t){g(e,s,t)},p(e,a){2&a&&t!==(t=w(e[2].icon)+" svelte-rlsdwl")&&h(s,"class",t)},d(e){e&&d(s)}}}function x(e,s){let t,a,n,w,E,H,N,O,X=s[2].message+"",q=F,D=s[2].icon&&J(s);return{key:e,first:null,c(){t=r("div"),a=r("div"),n=l(X),w=i(),D&&D.c(),E=i(),this.h()},l(e){t=o(e,"DIV",{class:!0,style:!0});var s=c(t);a=o(s,"DIV",{class:!0});var r=c(a);n=u(r,X),r.forEach(d),w=f(s),D&&D.l(s),E=f(s),s.forEach(d),this.h()},h(){h(a,"class","content svelte-rlsdwl"),h(t,"class","toast svelte-rlsdwl"),p(t,"background",s[0][s[2].type]),this.first=t},m(e,s){g(e,t,s),y(t,a),y(a,n),y(t,w),D&&D.m(t,null),y(t,E),O=!0},p(e,a){s=e,(!O||2&a)&&X!==(X=s[2].message+"")&&m(n,X),s[2].icon?D?D.p(s,a):(D=J(s),D.c(),D.m(t,E)):D&&(D.d(1),D=null),(!O||3&a)&&p(t,"background",s[0][s[2].type])},r(){N=t.getBoundingClientRect()},f(){v(t),q(),b(t,N)},a(){q(),q=S(t,N,L,{})},i(e){O||(M((()=>{H||(H=R(t,k,{y:-30},!0)),H.run(1)})),O=!0)},o(e){H||(H=R(t,k,{y:-30},!1)),H.run(0),O=!1},d(e){e&&d(t),D&&D.d(),e&&H&&H.end()}}}function V(e){let s,t,a=[],n=new Map,l=e[1];const i=e=>e[2].id;for(let r=0;r<l.length;r+=1){let s=I(e,l,r),t=i(s);n.set(t,a[r]=x(t,s))}return{c(){s=r("div");for(let e=0;e<a.length;e+=1)a[e].c();this.h()},l(e){s=o(e,"DIV",{class:!0});var t=c(s);for(let s=0;s<a.length;s+=1)a[s].l(t);t.forEach(d),this.h()},h(){h(s,"class","notifications svelte-rlsdwl")},m(e,n){g(e,s,n);for(let t=0;t<a.length;t+=1)a[t].m(s,null);t=!0},p(e,[t]){if(3&t){l=e[1],E();for(let e=0;e<a.length;e+=1)a[e].r();a=H(a,t,i,1,e,l,n,s,N,x,null,I);for(let e=0;e<a.length;e+=1)a[e].a();O()}},i(e){if(!t){for(let e=0;e<l.length;e+=1)X(a[e]);t=!0}},o(e){for(let s=0;s<a.length;s+=1)q(a[s]);t=!1},d(e){e&&d(s);for(let s=0;s<a.length;s+=1)a[s].d()}}}function B(e,s,t){let a;D(e,T,(e=>t(1,a=e)));let{themes:n={danger:"#E26D69",success:"#84C991",warning:"#f0ad4e",info:"#5bc0de",default:"#aaaaaa"}}=s;return e.$$set=e=>{"themes"in e&&t(0,n=e.themes)},[n,a]}class C extends t{constructor(e){super(),a(this,e,B,V,n,{themes:0})}}async function $(e,s=null){var t=new XMLHttpRequest;t.onreadystatechange=function(){t.readyState===XMLHttpRequest.DONE&&200===t.status&&s(t)},t.open("GET",e,!0),t.send(null)}async function j(e,s,t=null,a=null){var n=new XMLHttpRequest;n.open(s,e,!0),n.onreadystatechange=function(){if(n.readyState===XMLHttpRequest.DONE)switch(n.status){case 404:a({error:404});break;case 500:a({error:500});break;case 200:a(JSON.parse(n.response));break;default:a({error:n.status})}},null!=t&&(t=JSON.stringify(t)),n.send(t)}async function P(e,s){return new Promise((function(t,a){var n=new XMLHttpRequest;n.open(e,s),n.onreadystatechange=function(){if(4===n.readyState)switch(n.status){case 200:t(JSON.parse(n.response));default:a(null)}},n.send()}))}async function _(e,s,t,a){var n=new XMLHttpRequest;n.open(s,e,!0),n.responseType="arraybuffer",n.dataType="blob",n.onreadystatechange=function(){if(4!==n.readyState||200!==n.status)return!1;a(n)},t=JSON.stringify(t),n.send(t)}async function G(e,s,t=null,a=null){var n=new XMLHttpRequest,r=new FormData;r.append("media",t.Files);let l={};for(let o in t)"Files"!=o&&(l[o]=t[o]);let i={};for(let o in t.Files)["name","type"].indexOf(o)>-1&&(i[o]=t.Files[o]);l.Files=[i],r.append("metadata",new Blob([JSON.stringify(l)],{type:"application/json"})),n.open(s,e,!0),n.onreadystatechange=function(){n.readyState===XMLHttpRequest.DONE&&200===n.status&&a(n)},n.send(r)}export{G as R,C as T,j as a,_ as g,P as m,T as n,$ as x};
