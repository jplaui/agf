import{S as s,i as t,s as a,e,t as l,k as n,c as r,a as c,g as o,d as i,n as h,b as f,N as d,f as u,F as g,h as m,W as v,X as p,Y as w,Z as y,_ as b,$ as E,a0 as I,a1 as k,B as D,P as V,a2 as $,u as j,v as x,r as B,I as C,H as q}from"./vendor-ac6a5f58.js";import{n as F}from"./requests-b511a0f1.js";function H(s,t,a){const e=s.slice();return e[2]=t[a],e}function M(s){let t,a;return{c(){t=e("i"),this.h()},l(s){t=r(s,"I",{class:!0}),c(t).forEach(i),this.h()},h(){f(t,"class",a=v(s[2].icon)+" svelte-rlsdwl")},m(s,a){u(s,t,a)},p(s,e){2&e&&a!==(a=v(s[2].icon)+" svelte-rlsdwl")&&f(t,"class",a)},d(s){s&&i(t)}}}function N(s,t){let a,v,D,V,$,j,x,B,C=t[2].message+"",F=q,H=t[2].icon&&M(t);return{key:s,first:null,c(){a=e("div"),v=e("div"),D=l(C),V=n(),H&&H.c(),$=n(),this.h()},l(s){a=r(s,"DIV",{class:!0,style:!0});var t=c(a);v=r(t,"DIV",{class:!0});var e=c(v);D=o(e,C),e.forEach(i),V=h(t),H&&H.l(t),$=h(t),t.forEach(i),this.h()},h(){f(v,"class","content svelte-rlsdwl"),f(a,"class","toast svelte-rlsdwl"),d(a,"background",t[0][t[2].type]),this.first=a},m(s,t){u(s,a,t),g(a,v),g(v,D),g(a,V),H&&H.m(a,null),g(a,$),B=!0},p(s,e){t=s,(!B||2&e)&&C!==(C=t[2].message+"")&&m(D,C),t[2].icon?H?H.p(t,e):(H=M(t),H.c(),H.m(a,$)):H&&(H.d(1),H=null),(!B||3&e)&&d(a,"background",t[0][t[2].type])},r(){x=a.getBoundingClientRect()},f(){p(a),F(),w(a,x)},a(){F(),F=y(a,x,b,{})},i(s){B||(E((()=>{j||(j=I(a,k,{y:-30},!0)),j.run(1)})),B=!0)},o(s){j||(j=I(a,k,{y:-30},!1)),j.run(0),B=!1},d(s){s&&i(a),H&&H.d(),s&&j&&j.end()}}}function P(s){let t,a,l=[],n=new Map,o=s[1];const h=s=>s[2].id;for(let e=0;e<o.length;e+=1){let t=H(s,o,e),a=h(t);n.set(a,l[e]=N(a,t))}return{c(){t=e("div");for(let s=0;s<l.length;s+=1)l[s].c();this.h()},l(s){t=r(s,"DIV",{class:!0});var a=c(t);for(let t=0;t<l.length;t+=1)l[t].l(a);a.forEach(i),this.h()},h(){f(t,"class","notifications svelte-rlsdwl")},m(s,e){u(s,t,e);for(let a=0;a<l.length;a+=1)l[a].m(t,null);a=!0},p(s,[a]){if(3&a){o=s[1],D();for(let s=0;s<l.length;s+=1)l[s].r();l=V(l,a,h,1,s,o,n,t,$,N,null,H);for(let s=0;s<l.length;s+=1)l[s].a();j()}},i(s){if(!a){for(let s=0;s<o.length;s+=1)x(l[s]);a=!0}},o(s){for(let t=0;t<l.length;t+=1)B(l[t]);a=!1},d(s){s&&i(t);for(let t=0;t<l.length;t+=1)l[t].d()}}}function R(s,t,a){let e;C(s,F,(s=>a(1,e=s)));let{themes:l={danger:"#E26D69",success:"#84C991",warning:"#f0ad4e",info:"#5bc0de",default:"#aaaaaa"}}=t;return s.$$set=s=>{"themes"in s&&a(0,l=s.themes)},[l,e]}class S extends s{constructor(s){super(),t(this,s,R,P,a,{themes:0})}}export{S as T};