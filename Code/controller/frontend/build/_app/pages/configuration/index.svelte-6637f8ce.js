import{S as e,i as t,s as a,e as s,t as c,k as n,c as r,a as l,g as o,d as i,n as h,b as f,f as u,F as d,l as v,M as g,N as p,G as E,O as m,h as b,P as w,j as y,L as T,m as S,o as k,v as D,r as I,w as N,Q as x,R as C,z as O,T as A,U as B}from"../../chunks/vendor-c052606d.js";/* empty css                                                       */import{T as H,x as _,n as V,a as z,m as U}from"../../chunks/requests-2b3ce117.js";import{s as R,a as P,t as j,b as L}from"../../chunks/store-ce76cd4a.js";const{document:M}=A;function $(e,t,a){const s=e.slice();return s[27]=t[a],s[29]=a,s}function J(e,t,a){const s=e.slice();return s[30]=t[a],s[29]=a,s}function q(e,t,a){const s=e.slice();return s[32]=t[a][0],s[33]=t[a][1],s}function F(e,t,a){const s=e.slice();return s[36]=t[a].short_id,s[37]=t[a].name,s[38]=t[a].ports,s[29]=a,s}function G(e,t,a){const s=e.slice();return s[40]=t[a],s[29]=a,s}function Q(e,t,a){const s=e.slice();return s[32]=t[a][0],s[33]=t[a][1],s}function K(e,t,a){const s=e.slice();return s[32]=t[a][0],s[33]=t[a][1],s}function W(e){let t,a,v,p,E,m,b,w,y,T,S,k,D,I,N,x=e[0],C=[];for(let s=0;s<x.length;s+=1)C[s]=te(G(e,x,s));return{c(){t=s("table"),a=s("thead"),v=s("tr"),p=s("th"),E=c("ID"),m=n(),b=s("th"),w=c("Name"),y=n(),T=s("th"),S=c("Activated"),k=n(),D=s("th"),I=c("Actions"),N=n();for(let e=0;e<C.length;e+=1)C[e].c();this.h()},l(e){t=r(e,"TABLE",{class:!0});var s=l(t);a=r(s,"THEAD",{});var c=l(a);v=r(c,"TR",{class:!0});var n=l(v);p=r(n,"TH",{});var f=l(p);E=o(f,"ID"),f.forEach(i),m=h(n),b=r(n,"TH",{});var u=l(b);w=o(u,"Name"),u.forEach(i),y=h(n),T=r(n,"TH",{});var d=l(T);S=o(d,"Activated"),d.forEach(i),k=h(n),D=r(n,"TH",{});var g=l(D);I=o(g,"Actions"),g.forEach(i),n.forEach(i),c.forEach(i),N=h(s);for(let t=0;t<C.length;t+=1)C[t].l(s);s.forEach(i),this.h()},h(){f(v,"class","w3-dark-grey"),f(t,"class","w3-table-all w3-centered")},m(e,s){u(e,t,s),d(t,a),d(a,v),d(v,p),d(p,E),d(v,m),d(v,b),d(b,w),d(v,y),d(v,T),d(T,S),d(v,k),d(v,D),d(D,I),d(t,N);for(let a=0;a<C.length;a+=1)C[a].m(t,null)},p(e,a){if(34821&a[0]){let s;for(x=e[0],s=0;s<x.length;s+=1){const c=G(e,x,s);C[s]?C[s].p(c,a):(C[s]=te(c),C[s].c(),C[s].m(t,null))}for(;s<C.length;s+=1)C[s].d(1);C.length=x.length}},d(e){e&&i(t),g(C,e)}}}function X(e){let t,a,v,g,p,m,b,y,T,S,k,D,I,N,C,O,A=[],H=new Map,_=Object.entries(e[40]);const V=e=>e[32];for(let s=0;s<_.length;s+=1){let t=Q(e,_,s),a=V(t);H.set(a,A[s]=Z(a,t))}return{c(){t=s("tr");for(let e=0;e<A.length;e+=1)A[e].c();a=n(),v=s("td"),g=s("div"),p=s("div"),m=s("button"),b=c("Activate"),y=n(),T=s("button"),S=c("Copy"),k=n(),D=s("button"),I=c("Delete"),N=n(),this.h()},l(e){t=r(e,"TR",{index:!0});var s=l(t);for(let t=0;t<A.length;t+=1)A[t].l(s);a=h(s),v=r(s,"TD",{class:!0});var c=l(v);g=r(c,"DIV",{class:!0});var n=l(g);p=r(n,"DIV",{class:!0});var f=l(p);m=r(f,"BUTTON",{});var u=l(m);b=o(u,"Activate"),u.forEach(i),y=h(f),T=r(f,"BUTTON",{});var d=l(T);S=o(d,"Copy"),d.forEach(i),k=h(f),D=r(f,"BUTTON",{});var E=l(D);I=o(E,"Delete"),E.forEach(i),f.forEach(i),n.forEach(i),c.forEach(i),N=h(s),s.forEach(i),this.h()},h(){f(p,"class","w3-bar"),f(g,"class","w3-show-inline-block"),f(v,"class","svelte-guhzs8"),f(t,"index",e[29])},m(s,c){u(s,t,c);for(let e=0;e<A.length;e+=1)A[e].m(t,null);d(t,a),d(t,v),d(v,g),d(g,p),d(p,m),d(m,b),d(p,y),d(p,T),d(T,S),d(p,k),d(p,D),d(D,I),d(t,N),C||(O=[E(m,"click",e[11]),E(T,"click",Ee),E(D,"click",e[15])],C=!0)},p(e,s){1&s[0]&&(_=Object.entries(e[40]),A=w(A,s,V,1,e,_,H,t,B,Z,a,Q))},d(e){e&&i(t);for(let t=0;t<A.length;t+=1)A[t].d();C=!1,x(O)}}}function Y(e){let t,a,v,g,m,b,y,T,S,k,D,I,N,C,O,A,H=[],_=new Map,V=Object.entries(e[40]);const z=e=>e[32];for(let s=0;s<V.length;s+=1){let t=K(e,V,s),a=z(t);_.set(a,H[s]=ee(a,t))}return{c(){t=s("tr");for(let e=0;e<H.length;e+=1)H[e].c();a=n(),v=s("td"),g=s("div"),m=s("div"),b=s("button"),y=c("Activate"),T=n(),S=s("button"),k=c("Copy"),D=n(),I=s("button"),N=c("Delete"),C=n(),this.h()},l(e){t=r(e,"TR",{index:!0,style:!0});var s=l(t);for(let t=0;t<H.length;t+=1)H[t].l(s);a=h(s),v=r(s,"TD",{class:!0});var c=l(v);g=r(c,"DIV",{class:!0});var n=l(g);m=r(n,"DIV",{class:!0});var f=l(m);b=r(f,"BUTTON",{});var u=l(b);y=o(u,"Activate"),u.forEach(i),T=h(f),S=r(f,"BUTTON",{});var d=l(S);k=o(d,"Copy"),d.forEach(i),D=h(f),I=r(f,"BUTTON",{});var p=l(I);N=o(p,"Delete"),p.forEach(i),f.forEach(i),n.forEach(i),c.forEach(i),C=h(s),s.forEach(i),this.h()},h(){f(m,"class","w3-bar"),f(g,"class","w3-show-inline-block"),f(v,"class","svelte-guhzs8"),f(t,"index",e[29]),p(t,"background-color","#acddb4")},m(s,c){u(s,t,c);for(let e=0;e<H.length;e+=1)H[e].m(t,null);d(t,a),d(t,v),d(v,g),d(g,m),d(m,b),d(b,y),d(m,T),d(m,S),d(S,k),d(m,D),d(m,I),d(I,N),d(t,C),O||(A=[E(b,"click",e[11]),E(S,"click",Ee),E(I,"click",e[15])],O=!0)},p(e,s){1&s[0]&&(V=Object.entries(e[40]),H=w(H,s,z,1,e,V,_,t,B,ee,a,K))},d(e){e&&i(t);for(let t=0;t<H.length;t+=1)H[t].d();O=!1,x(A)}}}function Z(e,t){let a,n,h=t[33]+"";return{key:e,first:null,c(){a=s("td"),n=c(h),this.h()},l(e){a=r(e,"TD",{class:!0});var t=l(a);n=o(t,h),t.forEach(i),this.h()},h(){f(a,"class","svelte-guhzs8"),this.first=a},m(e,t){u(e,a,t),d(a,n)},p(e,a){t=e,1&a[0]&&h!==(h=t[33]+"")&&b(n,h)},d(e){e&&i(a)}}}function ee(e,t){let a,n,h=t[33]+"";return{key:e,first:null,c(){a=s("td"),n=c(h),this.h()},l(e){a=r(e,"TD",{class:!0});var t=l(a);n=o(t,h),t.forEach(i),this.h()},h(){f(a,"class","svelte-guhzs8"),this.first=a},m(e,t){u(e,a,t),d(a,n)},p(e,a){t=e,1&a[0]&&h!==(h=t[33]+"")&&b(n,h)},d(e){e&&i(a)}}}function te(e){let t;function a(e,t){return e[2]==e[29]||e[0][e[29]].activated?Y:X}let s=a(e),c=s(e);return{c(){c.c(),t=v()},l(e){c.l(e),t=v()},m(e,a){c.m(e,a),u(e,t,a)},p(e,n){s===(s=a(e))&&c?c.p(e,n):(c.d(1),c=s(e),c&&(c.c(),c.m(t.parentNode,t)))},d(e){c.d(e),e&&i(t)}}}function ae(e){let t,a,v,p,E,m,b,w,y,T,S,k,D,I,N,x=e[4],C=[];for(let s=0;s<x.length;s+=1)C[s]=ne(F(e,x,s));return{c(){t=s("table"),a=s("thead"),v=s("tr"),p=s("th"),E=c("ShortID"),m=n(),b=s("th"),w=c("Name"),y=n(),T=s("th"),S=c("Ports"),k=n(),D=s("th"),I=c("Actions"),N=n();for(let e=0;e<C.length;e+=1)C[e].c();this.h()},l(e){t=r(e,"TABLE",{class:!0});var s=l(t);a=r(s,"THEAD",{});var c=l(a);v=r(c,"TR",{class:!0});var n=l(v);p=r(n,"TH",{});var f=l(p);E=o(f,"ShortID"),f.forEach(i),m=h(n),b=r(n,"TH",{});var u=l(b);w=o(u,"Name"),u.forEach(i),y=h(n),T=r(n,"TH",{});var d=l(T);S=o(d,"Ports"),d.forEach(i),k=h(n),D=r(n,"TH",{});var g=l(D);I=o(g,"Actions"),g.forEach(i),n.forEach(i),c.forEach(i),N=h(s);for(let t=0;t<C.length;t+=1)C[t].l(s);s.forEach(i),this.h()},h(){f(v,"class","w3-dark-grey"),f(t,"class","w3-table-all w3-centered")},m(e,s){u(e,t,s),d(t,a),d(a,v),d(v,p),d(p,E),d(v,m),d(v,b),d(b,w),d(v,y),d(v,T),d(T,S),d(v,k),d(v,D),d(D,I),d(t,N);for(let a=0;a<C.length;a+=1)C[a].m(t,null)},p(e,a){if(12336&a[0]){let s;for(x=e[4],s=0;s<x.length;s+=1){const c=F(e,x,s);C[s]?C[s].p(c,a):(C[s]=ne(c),C[s].c(),C[s].m(t,null))}for(;s<C.length;s+=1)C[s].d(1);C.length=x.length}},d(e){e&&i(t),g(C,e)}}}function se(e){let t,a,v,g,p,m,w,y,T,S,k,D,I,N,C,O,A,B,H,_,V,z=e[36]+"",U=e[37]+"",R=e[38]+"";return{c(){t=s("tr"),a=s("td"),v=c(z),g=n(),p=s("td"),m=c(U),w=n(),y=s("td"),T=c(R),S=n(),k=s("td"),D=s("div"),I=s("div"),N=s("button"),C=c("Activate"),O=n(),A=s("button"),B=c("Deactivate"),H=n(),this.h()},l(e){t=r(e,"TR",{index:!0});var s=l(t);a=r(s,"TD",{class:!0});var c=l(a);v=o(c,z),c.forEach(i),g=h(s),p=r(s,"TD",{class:!0});var n=l(p);m=o(n,U),n.forEach(i),w=h(s),y=r(s,"TD",{class:!0});var f=l(y);T=o(f,R),f.forEach(i),S=h(s),k=r(s,"TD",{class:!0});var u=l(k);D=r(u,"DIV",{class:!0});var d=l(D);I=r(d,"DIV",{class:!0});var E=l(I);N=r(E,"BUTTON",{});var b=l(N);C=o(b,"Activate"),b.forEach(i),O=h(E),A=r(E,"BUTTON",{});var x=l(A);B=o(x,"Deactivate"),x.forEach(i),E.forEach(i),d.forEach(i),u.forEach(i),H=h(s),s.forEach(i),this.h()},h(){f(a,"class","svelte-guhzs8"),f(p,"class","svelte-guhzs8"),f(y,"class","svelte-guhzs8"),f(I,"class","w3-bar"),f(D,"class","w3-show-inline-block"),f(k,"class","svelte-guhzs8"),f(t,"index",e[29])},m(s,c){u(s,t,c),d(t,a),d(a,v),d(t,g),d(t,p),d(p,m),d(t,w),d(t,y),d(y,T),d(t,S),d(t,k),d(k,D),d(D,I),d(I,N),d(N,C),d(I,O),d(I,A),d(A,B),d(t,H),_||(V=[E(N,"click",e[12]),E(A,"click",e[13])],_=!0)},p(e,t){16&t[0]&&z!==(z=e[36]+"")&&b(v,z),16&t[0]&&U!==(U=e[37]+"")&&b(m,U),16&t[0]&&R!==(R=e[38]+"")&&b(T,R)},d(e){e&&i(t),_=!1,x(V)}}}function ce(e){let t,a,v,g,p,m,w,y,T,S,k,D,I,N,C,O,A,B,H,_,V,z,U=e[36]+"",R=e[37]+"",P=e[38]+"";return{c(){t=s("tr"),a=s("td"),v=c(U),g=n(),p=s("td"),m=c(R),w=n(),y=s("td"),T=c(P),S=n(),k=s("td"),D=s("div"),I=s("div"),N=s("button"),C=c("Activate"),O=n(),A=s("button"),B=c("Deactivate"),H=n(),this.h()},l(e){t=r(e,"TR",{index:!0,style:!0});var s=l(t);a=r(s,"TD",{class:!0});var c=l(a);v=o(c,U),c.forEach(i),g=h(s),p=r(s,"TD",{class:!0});var n=l(p);m=o(n,R),n.forEach(i),w=h(s),y=r(s,"TD",{class:!0});var f=l(y);T=o(f,P),f.forEach(i),S=h(s),k=r(s,"TD",{class:!0});var u=l(k);D=r(u,"DIV",{class:!0});var d=l(D);I=r(d,"DIV",{class:!0});var E=l(I);N=r(E,"BUTTON",{});var b=l(N);C=o(b,"Activate"),b.forEach(i),O=h(E),A=r(E,"BUTTON",{});var x=l(A);B=o(x,"Deactivate"),x.forEach(i),E.forEach(i),d.forEach(i),u.forEach(i),H=h(s),s.forEach(i),this.h()},h(){f(a,"class","svelte-guhzs8"),f(p,"class","svelte-guhzs8"),f(y,"class","svelte-guhzs8"),f(I,"class","w3-bar"),f(D,"class","w3-show-inline-block"),f(k,"class","svelte-guhzs8"),f(t,"index",e[29]),f(t,"style",_=e[5][e[29]])},m(s,c){u(s,t,c),d(t,a),d(a,v),d(t,g),d(t,p),d(p,m),d(t,w),d(t,y),d(y,T),d(t,S),d(t,k),d(k,D),d(D,I),d(I,N),d(N,C),d(I,O),d(I,A),d(A,B),d(t,H),V||(z=[E(N,"click",e[12]),E(A,"click",e[13])],V=!0)},p(e,a){16&a[0]&&U!==(U=e[36]+"")&&b(v,U),16&a[0]&&R!==(R=e[37]+"")&&b(m,R),16&a[0]&&P!==(P=e[38]+"")&&b(T,P),32&a[0]&&_!==(_=e[5][e[29]])&&f(t,"style",_)},d(e){e&&i(t),V=!1,x(z)}}}function ne(e){let t;function a(e,t){return e[29]in e[5]?ce:se}let s=a(e),c=s(e);return{c(){c.c(),t=v()},l(e){c.l(e),t=v()},m(e,a){c.m(e,a),u(e,t,a)},p(e,n){s===(s=a(e))&&c?c.p(e,n):(c.d(1),c=s(e),c&&(c.c(),c.m(t.parentNode,t)))},d(e){c.d(e),e&&i(t)}}}function re(e){let t,a=e[1].configurations.length>0&&le(e);return{c(){a&&a.c(),t=v()},l(e){a&&a.l(e),t=v()},m(e,s){a&&a.m(e,s),u(e,t,s)},p(e,s){e[1].configurations.length>0?a?a.p(e,s):(a=le(e),a.c(),a.m(t.parentNode,t)):a&&(a.d(1),a=null)},d(e){a&&a.d(e),e&&i(t)}}}function le(e){let t,a=e[1].configurations,s=[];for(let c=0;c<a.length;c+=1)s[c]=de(J(e,a,c));return{c(){for(let e=0;e<s.length;e+=1)s[e].c();t=v()},l(e){for(let t=0;t<s.length;t+=1)s[t].l(e);t=v()},m(e,a){for(let t=0;t<s.length;t+=1)s[t].m(e,a);u(e,t,a)},p(e,c){if(1026&c[0]){let n;for(a=e[1].configurations,n=0;n<a.length;n+=1){const r=J(e,a,n);s[n]?s[n].p(r,c):(s[n]=de(r),s[n].c(),s[n].m(t.parentNode,t))}for(;n<s.length;n+=1)s[n].d(1);s.length=a.length}},d(e){g(s,e),e&&i(t)}}}function oe(e){let t,a,v,g,p,E,m,w=e[32]+"";return{c(){t=s("label"),a=s("b"),v=c(w),g=n(),p=s("input"),this.h()},l(e){t=r(e,"LABEL",{class:!0});var s=l(t);a=r(s,"B",{});var c=l(a);v=o(c,w),c.forEach(i),s.forEach(i),g=h(e),p=r(e,"INPUT",{class:!0,type:!0,key:!0,value:!0}),this.h()},h(){f(t,"class",""),f(p,"class","w3-input w3-border"),f(p,"type","list"),f(p,"key",E=e[32]),p.value=m=e[33].join()},m(e,s){u(e,t,s),d(t,a),d(a,v),u(e,g,s),u(e,p,s)},p(e,t){2&t[0]&&w!==(w=e[32]+"")&&b(v,w),2&t[0]&&E!==(E=e[32])&&f(p,"key",E),2&t[0]&&m!==(m=e[33].join())&&(p.value=m)},d(e){e&&i(t),e&&i(g),e&&i(p)}}}function ie(e){let t,a,v,g,p,E,m,w=e[32]+"";return{c(){t=s("input"),g=n(),p=s("label"),E=s("b"),m=c(w),this.h()},l(e){t=r(e,"INPUT",{class:!0,type:!0,key:!0,checked:!0}),g=h(e),p=r(e,"LABEL",{class:!0});var a=l(p);E=r(a,"B",{});var s=l(E);m=o(s,w),s.forEach(i),a.forEach(i),this.h()},h(){f(t,"class","w3-check"),f(t,"type","checkbox"),f(t,"key",a=e[32]),t.checked=v=e[33],f(p,"class","")},m(e,a){u(e,t,a),u(e,g,a),u(e,p,a),d(p,E),d(E,m)},p(e,s){2&s[0]&&a!==(a=e[32])&&f(t,"key",a),2&s[0]&&v!==(v=e[33])&&(t.checked=v),2&s[0]&&w!==(w=e[32]+"")&&b(m,w)},d(e){e&&i(t),e&&i(g),e&&i(p)}}}function he(e){let t,a,v,g,p,E,m,w=e[32]+"";return{c(){t=s("label"),a=s("b"),v=c(w),g=n(),p=s("input"),this.h()},l(e){t=r(e,"LABEL",{class:!0});var s=l(t);a=r(s,"B",{});var c=l(a);v=o(c,w),c.forEach(i),s.forEach(i),g=h(e),p=r(e,"INPUT",{class:!0,type:!0,key:!0,value:!0}),this.h()},h(){f(t,"class",""),f(p,"class","w3-input w3-border"),f(p,"type","string"),f(p,"key",E=e[32]),p.value=m=e[33]},m(e,s){u(e,t,s),d(t,a),d(a,v),u(e,g,s),u(e,p,s)},p(e,t){2&t[0]&&w!==(w=e[32]+"")&&b(v,w),2&t[0]&&E!==(E=e[32])&&f(p,"key",E),2&t[0]&&m!==(m=e[33])&&(p.value=m)},d(e){e&&i(t),e&&i(g),e&&i(p)}}}function fe(e){let t,a,v,g,p,E,m,w=e[32]+"";return{c(){t=s("label"),a=s("b"),v=c(w),g=n(),p=s("input"),this.h()},l(e){t=r(e,"LABEL",{class:!0});var s=l(t);a=r(s,"B",{});var c=l(a);v=o(c,w),c.forEach(i),s.forEach(i),g=h(e),p=r(e,"INPUT",{class:!0,type:!0,convert:!0,key:!0,value:!0}),this.h()},h(){f(t,"class",""),f(p,"class","w3-input w3-border"),f(p,"type","string"),f(p,"convert","required"),f(p,"key",E=e[32]),p.value=m=e[33]},m(e,s){u(e,t,s),d(t,a),d(a,v),u(e,g,s),u(e,p,s)},p(e,t){2&t[0]&&w!==(w=e[32]+"")&&b(v,w),2&t[0]&&E!==(E=e[32])&&f(p,"key",E),2&t[0]&&m!==(m=e[33])&&(p.value=m)},d(e){e&&i(t),e&&i(g),e&&i(p)}}}function ue(e,t){let a;function c(e,t){return"number"==typeof e[33]?fe:"string"==typeof e[33]?he:"boolean"==typeof e[33]?ie:"object"==typeof e[33]?oe:void 0}let n=c(t),o=n&&n(t);return{key:e,first:null,c(){a=s("p"),o&&o.c(),this.h()},l(e){a=r(e,"P",{});var t=l(a);o&&o.l(t),t.forEach(i),this.h()},h(){this.first=a},m(e,t){u(e,a,t),o&&o.m(a,null)},p(e,s){n===(n=c(t=e))&&o?o.p(t,s):(o&&o.d(1),o=n&&n(t),o&&(o.c(),o.m(a,null)))},d(e){e&&i(a),o&&o.d()}}}function de(e){let t,a,v,g,y,T,S,k,D,I,N,x,C,O,A,H,_,V,z,U,R,P,j=e[30].container_info.name+"",L=[],M=new Map,$=Object.entries(e[30].configs);const J=e=>e[32];for(let s=0;s<$.length;s+=1){let t=q(e,$,s),a=J(t);M.set(a,L[s]=ue(a,t))}return{c(){t=s("div"),a=s("div"),v=s("h2"),g=c(j),y=n(),T=s("p"),S=c("Description here from application configs"),k=n(),D=s("div"),I=s("form"),N=s("h5"),x=c("Update Form"),C=n();for(let e=0;e<L.length;e+=1)L[e].c();O=n(),A=s("p"),H=s("input"),z=n(),U=s("hr"),this.h()},l(e){t=r(e,"DIV",{class:!0});var s=l(t);a=r(s,"DIV",{class:!0});var c=l(a);v=r(c,"H2",{class:!0,style:!0});var n=l(v);g=o(n,j),n.forEach(i),y=h(c),T=r(c,"P",{});var f=l(T);S=o(f,"Description here from application configs"),f.forEach(i),c.forEach(i),k=h(s),D=r(s,"DIV",{class:!0});var u=l(D);I=r(u,"FORM",{name:!0,port:!0,index:!0,class:!0});var d=l(I);N=r(d,"H5",{class:!0,style:!0});var p=l(N);x=o(p,"Update Form"),p.forEach(i),C=h(d);for(let t=0;t<L.length;t+=1)L[t].l(d);O=h(d),A=r(d,"P",{});var E=l(A);H=r(E,"INPUT",{class:!0,type:!0,value:!0}),E.forEach(i),d.forEach(i),u.forEach(i),s.forEach(i),z=h(e),U=r(e,"HR",{class:!0}),this.h()},h(){f(v,"class","w3-text-orange"),p(v,"text-shadow","1px 1px 0 #444"),f(a,"class","w3-third w3-container w3-blue"),f(N,"class","w3-text-orange"),p(N,"text-shadow","1px 1px 0 #444"),f(H,"class","w3-blue"),f(H,"type","submit"),H.value="Update",f(I,"name",_=e[30].container_info.name),f(I,"port",V=e[30].container_info.ports),f(I,"index",e[29]),f(I,"class","w3-container"),f(D,"class","w3-twothird w3-container w3-gray"),f(t,"class","w3-row w3-border"),f(U,"class","svelte-guhzs8")},m(s,c){u(s,t,c),d(t,a),d(a,v),d(v,g),d(a,y),d(a,T),d(T,S),d(t,k),d(t,D),d(D,I),d(I,N),d(N,x),d(I,C);for(let e=0;e<L.length;e+=1)L[e].m(I,null);d(I,O),d(I,A),d(A,H),u(s,z,c),u(s,U,c),R||(P=E(I,"submit",m(e[10])),R=!0)},p(e,t){2&t[0]&&j!==(j=e[30].container_info.name+"")&&b(g,j),2&t[0]&&($=Object.entries(e[30].configs),L=w(L,t,J,1,e,$,M,I,B,ue,O,q)),2&t[0]&&_!==(_=e[30].container_info.name)&&f(I,"name",_),2&t[0]&&V!==(V=e[30].container_info.ports)&&f(I,"port",V)},d(e){e&&i(t);for(let t=0;t<L.length;t+=1)L[t].d();e&&i(z),e&&i(U),R=!1,P()}}}function ve(e){let t,a=e[6],s=[];for(let c=0;c<a.length;c+=1)s[c]=ge($(e,a,c));return{c(){for(let e=0;e<s.length;e+=1)s[e].c();t=v()},l(e){for(let t=0;t<s.length;t+=1)s[t].l(e);t=v()},m(e,a){for(let t=0;t<s.length;t+=1)s[t].m(e,a);u(e,t,a)},p(e,c){if(64&c[0]){let n;for(a=e[6],n=0;n<a.length;n+=1){const r=$(e,a,n);s[n]?s[n].p(r,c):(s[n]=ge(r),s[n].c(),s[n].m(t.parentNode,t))}for(;n<s.length;n+=1)s[n].d(1);s.length=a.length}},d(e){g(s,e),e&&i(t)}}}function ge(e){let t,a,v,g,p,E,m,w=e[27]+"";return{c(){t=s("label"),a=c(w),v=n(),g=s("input"),p=n(),E=s("span"),m=n(),this.h()},l(e){t=r(e,"LABEL",{class:!0});var s=l(t);a=o(s,w),v=h(s),g=r(s,"INPUT",{type:!0,checked:!0,name:!0,class:!0}),p=h(s),E=r(s,"SPAN",{class:!0}),l(E).forEach(i),m=h(s),s.forEach(i),this.h()},h(){f(g,"type","radio"),g.checked="checked",f(g,"name","radio"),f(g,"class","svelte-guhzs8"),f(E,"class","checkmark svelte-guhzs8"),f(t,"class","container svelte-guhzs8")},m(e,s){u(e,t,s),d(t,a),d(t,v),d(t,g),d(t,p),d(t,E),d(t,m)},p(e,t){64&t[0]&&w!==(w=e[27]+"")&&b(a,w)},d(e){e&&i(t)}}}function pe(e){let t,a,v,g,m,b,w,C,O,A,B,_,V,z,U,R,P,j,L,$,J,q,F,G,Q,K,X,Y,Z,ee,te,se,ce,ne,le,oe,ie,he,fe,ue,de,ge,pe,Ee,be,we,ye,Te,Se,ke,De,Ie,Ne,xe,Ce,Oe,Ae,Be,He,_e,Ve,ze,Ue,Re,Pe,je,Le,Me,$e,Je,qe,Fe,Ge,Qe,Ke,We,Xe,Ye,Ze,et,tt,at,st,ct,nt,rt,lt,ot,it,ht,ft,ut,dt,vt,gt,pt,Et,mt,bt,wt,yt,Tt,St,kt,Dt,It,Nt,xt,Ct,Ot,At,Bt,Ht,_t,Vt,zt,Ut,Rt,Pt,jt,Lt,Mt,$t,Jt,qt,Ft,Gt,Qt,Kt,Wt,Xt,Yt,Zt,ea,ta,aa,sa,ca,na,ra,la,oa,ia,ha,fa,ua,da,va,ga,pa,Ea,ma,ba,wa,ya,Ta;a=new H({});let Sa=e[0].length>0&&W(e),ka=e[4].length>0&&ae(e),Da="configurations"in e[1]&&re(e),Ia=e[6].length>0&&ve(e);return{c(){t=n(),y(a.$$.fragment),v=n(),g=s("hr"),m=n(),b=s("div"),w=s("h1"),C=s("b"),O=c("Scenario Management"),A=n(),B=s("hr"),_=n(),V=s("section"),z=s("h3"),U=c("Select scenario"),R=n(),P=s("section"),Sa&&Sa.c(),j=n(),L=s("div"),$=s("div"),J=s("button"),q=c("Create Scenario"),F=n(),G=s("div"),Q=s("input"),K=n(),X=s("div"),Y=s("div"),Z=s("button"),ee=c("Rename Scenario"),te=n(),se=s("div"),ce=s("input"),ne=n(),le=s("div"),oe=s("input"),ie=n(),he=s("hr"),fe=n(),ue=s("div"),de=s("h1"),ge=s("b"),pe=c("Scenario Type"),Ee=n(),be=s("div"),we=s("div"),ye=s("a"),Te=s("div"),Se=c("Communication"),ke=n(),De=s("a"),Ie=s("div"),Ne=c("Static"),xe=n(),Ce=s("a"),Oe=s("div"),Ae=c("Driving Simulation"),Be=n(),He=s("div"),_e=s("hr"),Ve=n(),ze=s("div"),Ue=s("h1"),Re=s("b"),Pe=c("Configuration"),je=n(),Le=s("hr"),Me=n(),$e=s("section"),Je=s("h3"),qe=s("b"),Fe=c("Select containers"),Ge=n(),Qe=s("section"),ka&&ka.c(),Ke=n(),We=s("hr"),Xe=n(),Ye=s("section"),Ze=s("h3"),et=s("b"),tt=c("Configure containers"),at=n(),st=s("section"),Da&&Da.c(),nt=n(),rt=s("div"),lt=s("hr"),ot=n(),it=s("div"),ht=s("h1"),ft=s("b"),ut=c("Configuration"),dt=n(),vt=s("hr"),gt=n(),pt=s("section"),Et=s("h3"),mt=s("b"),bt=c("Select Static Datasets"),wt=n(),Ia&&Ia.c(),yt=n(),Tt=s("hr"),St=n(),kt=s("section"),Dt=s("h3"),It=s("b"),Nt=c("Generate Attack"),xt=n(),Ct=s("hr"),Ot=n(),At=s("section"),Bt=s("h3"),Ht=s("b"),_t=c("Validate Dataset"),zt=n(),Ut=s("div"),Rt=s("hr"),Pt=n(),jt=s("div"),Lt=s("h1"),Mt=s("b"),$t=c("Configuration"),Jt=n(),qt=s("hr"),Ft=n(),Gt=s("section"),Qt=s("h3"),Kt=s("b"),Wt=c("Select Driving Path"),Xt=n(),Yt=s("hr"),Zt=n(),ea=s("section"),ta=s("h3"),aa=s("b"),sa=c("Select Sensors"),ca=n(),na=s("hr"),ra=n(),la=s("section"),oa=s("h3"),ia=s("b"),ha=c("Attack Configuration"),ua=n(),da=s("button"),va=c("Reset Configurations"),ga=n(),pa=s("button"),Ea=c("Save Configurations"),ma=n(),ba=s("hr"),this.h()},l(e){T('[data-svelte="svelte-101i1i0"]',M.head).forEach(i),t=h(e),S(a.$$.fragment,e),v=h(e),g=r(e,"HR",{class:!0}),m=h(e),b=r(e,"DIV",{class:!0});var s=l(b);w=r(s,"H1",{class:!0,style:!0});var c=l(w);C=r(c,"B",{});var n=l(C);O=o(n,"Scenario Management"),n.forEach(i),c.forEach(i),s.forEach(i),A=h(e),B=r(e,"HR",{class:!0}),_=h(e),V=r(e,"SECTION",{class:!0});var f=l(V);z=r(f,"H3",{});var u=l(z);U=o(u,"Select scenario"),u.forEach(i),f.forEach(i),R=h(e),P=r(e,"SECTION",{class:!0});var d=l(P);Sa&&Sa.l(d),j=h(d),L=r(d,"DIV",{class:!0});var p=l(L);$=r(p,"DIV",{class:!0});var E=l($);J=r(E,"BUTTON",{ref:!0,class:!0});var y=l(J);q=o(y,"Create Scenario"),y.forEach(i),E.forEach(i),F=h(p),G=r(p,"DIV",{class:!0});var k=l(G);Q=r(k,"INPUT",{id:!0,class:!0,name:!0,type:!0,placeholder:!0}),k.forEach(i),p.forEach(i),K=h(d),X=r(d,"DIV",{class:!0});var D=l(X);Y=r(D,"DIV",{class:!0});var I=l(Y);Z=r(I,"BUTTON",{ref:!0,class:!0});var N=l(Z);ee=o(N,"Rename Scenario"),N.forEach(i),I.forEach(i),te=h(D),se=r(D,"DIV",{class:!0});var x=l(se);ce=r(x,"INPUT",{id:!0,class:!0,name:!0,type:!0,placeholder:!0}),x.forEach(i),ne=h(D),le=r(D,"DIV",{class:!0});var H=l(le);oe=r(H,"INPUT",{id:!0,class:!0,name:!0,type:!0,placeholder:!0}),H.forEach(i),D.forEach(i),d.forEach(i),ie=h(e),he=r(e,"HR",{class:!0}),fe=h(e),ue=r(e,"DIV",{class:!0});var W=l(ue);de=r(W,"H1",{class:!0,style:!0});var ae=l(de);ge=r(ae,"B",{});var re=l(ge);pe=o(re,"Scenario Type"),re.forEach(i),ae.forEach(i),W.forEach(i),Ee=h(e),be=r(e,"DIV",{class:!0});var ve=l(be);we=r(ve,"DIV",{class:!0});var me=l(we);ye=r(me,"A",{href:!0});var ct=l(ye);Te=r(ct,"DIV",{class:!0});var Vt=l(Te);Se=o(Vt,"Communication"),Vt.forEach(i),ct.forEach(i),ke=h(me),De=r(me,"A",{href:!0});var fa=l(De);Ie=r(fa,"DIV",{class:!0});var wa=l(Ie);Ne=o(wa,"Static"),wa.forEach(i),fa.forEach(i),xe=h(me),Ce=r(me,"A",{href:!0});var ya=l(Ce);Oe=r(ya,"DIV",{class:!0});var Ta=l(Oe);Ae=o(Ta,"Driving Simulation"),Ta.forEach(i),ya.forEach(i),me.forEach(i),Be=h(ve),He=r(ve,"DIV",{id:!0,class:!0,style:!0});var Na=l(He);_e=r(Na,"HR",{class:!0}),Ve=h(Na),ze=r(Na,"DIV",{class:!0});var xa=l(ze);Ue=r(xa,"H1",{class:!0,style:!0});var Ca=l(Ue);Re=r(Ca,"B",{});var Oa=l(Re);Pe=o(Oa,"Configuration"),Oa.forEach(i),Ca.forEach(i),xa.forEach(i),je=h(Na),Le=r(Na,"HR",{class:!0}),Me=h(Na),$e=r(Na,"SECTION",{class:!0});var Aa=l($e);Je=r(Aa,"H3",{});var Ba=l(Je);qe=r(Ba,"B",{});var Ha=l(qe);Fe=o(Ha,"Select containers"),Ha.forEach(i),Ba.forEach(i),Aa.forEach(i),Ge=h(Na),Qe=r(Na,"SECTION",{class:!0});var _a=l(Qe);ka&&ka.l(_a),_a.forEach(i),Ke=h(Na),We=r(Na,"HR",{class:!0}),Xe=h(Na),Ye=r(Na,"SECTION",{class:!0});var Va=l(Ye);Ze=r(Va,"H3",{});var za=l(Ze);et=r(za,"B",{});var Ua=l(et);tt=o(Ua,"Configure containers"),Ua.forEach(i),za.forEach(i),Va.forEach(i),at=h(Na),st=r(Na,"SECTION",{class:!0});var Ra=l(st);Da&&Da.l(Ra),Ra.forEach(i),Na.forEach(i),nt=h(ve),rt=r(ve,"DIV",{id:!0,class:!0,style:!0});var Pa=l(rt);lt=r(Pa,"HR",{class:!0}),ot=h(Pa),it=r(Pa,"DIV",{class:!0});var ja=l(it);ht=r(ja,"H1",{class:!0,style:!0});var La=l(ht);ft=r(La,"B",{});var Ma=l(ft);ut=o(Ma,"Configuration"),Ma.forEach(i),La.forEach(i),ja.forEach(i),dt=h(Pa),vt=r(Pa,"HR",{class:!0}),gt=h(Pa),pt=r(Pa,"SECTION",{class:!0});var $a=l(pt);Et=r($a,"H3",{});var Ja=l(Et);mt=r(Ja,"B",{});var qa=l(mt);bt=o(qa,"Select Static Datasets"),qa.forEach(i),Ja.forEach(i),wt=h($a),Ia&&Ia.l($a),$a.forEach(i),yt=h(Pa),Tt=r(Pa,"HR",{class:!0}),St=h(Pa),kt=r(Pa,"SECTION",{class:!0});var Fa=l(kt);Dt=r(Fa,"H3",{});var Ga=l(Dt);It=r(Ga,"B",{});var Qa=l(It);Nt=o(Qa,"Generate Attack"),Qa.forEach(i),Ga.forEach(i),Fa.forEach(i),xt=h(Pa),Ct=r(Pa,"HR",{class:!0}),Ot=h(Pa),At=r(Pa,"SECTION",{class:!0});var Ka=l(At);Bt=r(Ka,"H3",{});var Wa=l(Bt);Ht=r(Wa,"B",{});var Xa=l(Ht);_t=o(Xa,"Validate Dataset"),Xa.forEach(i),Wa.forEach(i),Ka.forEach(i),Pa.forEach(i),zt=h(ve),Ut=r(ve,"DIV",{id:!0,class:!0,style:!0});var Ya=l(Ut);Rt=r(Ya,"HR",{class:!0}),Pt=h(Ya),jt=r(Ya,"DIV",{class:!0});var Za=l(jt);Lt=r(Za,"H1",{class:!0,style:!0});var es=l(Lt);Mt=r(es,"B",{});var ts=l(Mt);$t=o(ts,"Configuration"),ts.forEach(i),es.forEach(i),Za.forEach(i),Jt=h(Ya),qt=r(Ya,"HR",{class:!0}),Ft=h(Ya),Gt=r(Ya,"SECTION",{class:!0});var as=l(Gt);Qt=r(as,"H3",{});var ss=l(Qt);Kt=r(ss,"B",{});var cs=l(Kt);Wt=o(cs,"Select Driving Path"),cs.forEach(i),ss.forEach(i),as.forEach(i),Xt=h(Ya),Yt=r(Ya,"HR",{class:!0}),Zt=h(Ya),ea=r(Ya,"SECTION",{class:!0});var ns=l(ea);ta=r(ns,"H3",{});var rs=l(ta);aa=r(rs,"B",{});var ls=l(aa);sa=o(ls,"Select Sensors"),ls.forEach(i),rs.forEach(i),ns.forEach(i),ca=h(Ya),na=r(Ya,"HR",{class:!0}),ra=h(Ya),la=r(Ya,"SECTION",{class:!0});var os=l(la);oa=r(os,"H3",{});var is=l(oa);ia=r(is,"B",{});var hs=l(ia);ha=o(hs,"Attack Configuration"),hs.forEach(i),is.forEach(i),os.forEach(i),Ya.forEach(i),ve.forEach(i),ua=h(e),da=r(e,"BUTTON",{class:!0});var fs=l(da);va=o(fs,"Reset Configurations"),fs.forEach(i),ga=h(e),pa=r(e,"BUTTON",{class:!0});var us=l(pa);Ea=o(us,"Save Configurations"),us.forEach(i),ma=h(e),ba=r(e,"HR",{class:!0}),this.h()},h(){M.title="Configuration and Scheduling",f(g,"class","svelte-guhzs8"),f(w,"class","w3-text-yellow"),p(w,"text-shadow","1px 1px 0 #444"),f(b,"class","w3-panel w3-blue"),f(B,"class","svelte-guhzs8"),f(V,"class","page-headline"),f(J,"ref","createNewScenario"),f(J,"class","w3-col w3-input w3-border"),f($,"class","w3-third"),f(Q,"id","createNewScenario"),f(Q,"class","w3-input w3-border"),f(Q,"name","name"),f(Q,"type","text"),f(Q,"placeholder","Scenario Name"),f(G,"class","w3-rest"),f(L,"class","w3-row w3-section"),f(Z,"ref","renameScenario"),f(Z,"class","w3-col w3-input w3-border"),f(Y,"class","w3-third"),f(ce,"id","renameScenarioID"),f(ce,"class","w3-input w3-border"),f(ce,"name","id"),f(ce,"type","text"),f(ce,"placeholder","Scenario Identifier"),f(se,"class","w3-third"),f(oe,"id","renameScenario"),f(oe,"class","w3-input w3-border"),f(oe,"name","name"),f(oe,"type","text"),f(oe,"placeholder","Scenario Name"),f(le,"class","w3-rest"),f(X,"class","w3-row w3-section"),f(P,"class","w3-container"),f(he,"class","svelte-guhzs8"),f(de,"class","w3-text-yellow"),p(de,"text-shadow","1px 1px 0 #444"),f(ue,"class","w3-panel w3-blue"),f(Te,"class","w3-third tablink w3-bottombar w3-hover-light-grey w3-padding"),f(ye,"href","javascript:void(0)"),f(Ie,"class","w3-third tablink w3-bottombar w3-hover-light-grey w3-padding"),f(De,"href","javascript:void(0)"),f(Oe,"class","w3-third tablink w3-bottombar w3-hover-light-grey w3-padding"),f(Ce,"href","javascript:void(0)"),f(we,"class","w3-row"),f(_e,"class","svelte-guhzs8"),f(Ue,"class","w3-text-yellow"),p(Ue,"text-shadow","1px 1px 0 #444"),f(ze,"class","w3-panel w3-blue"),f(Le,"class","svelte-guhzs8"),f($e,"class","page-headline"),f(Qe,"class","w3-container"),f(We,"class","svelte-guhzs8"),f(Ye,"class","page-headline"),f(st,"class","w3-container"),f(He,"id","Communication"),f(He,"class","w3-container city"),f(He,"style",ct=e[3].Communication),f(lt,"class","svelte-guhzs8"),f(ht,"class","w3-text-yellow"),p(ht,"text-shadow","1px 1px 0 #444"),f(it,"class","w3-panel w3-blue"),f(vt,"class","svelte-guhzs8"),f(pt,"class","page-headline"),f(Tt,"class","svelte-guhzs8"),f(kt,"class","page-headline"),f(Ct,"class","svelte-guhzs8"),f(At,"class","page-headline"),f(rt,"id","Static"),f(rt,"class","w3-container city"),f(rt,"style",Vt=e[3].Static),f(Rt,"class","svelte-guhzs8"),f(Lt,"class","w3-text-yellow"),p(Lt,"text-shadow","1px 1px 0 #444"),f(jt,"class","w3-panel w3-blue"),f(qt,"class","svelte-guhzs8"),f(Gt,"class","page-headline"),f(Yt,"class","svelte-guhzs8"),f(ea,"class","page-headline"),f(na,"class","svelte-guhzs8"),f(la,"class","page-headline"),f(Ut,"id","Driving Simulation"),f(Ut,"class","w3-container city"),f(Ut,"style",fa=e[3]["Driving Simulation"]),f(be,"class","w3-container"),f(da,"class","w3-col w3-input w3-border w3-margin-bottom"),f(pa,"class","w3-col w3-input w3-border w3-margin-top"),f(ba,"class","svelte-guhzs8")},m(s,c){u(s,t,c),k(a,s,c),u(s,v,c),u(s,g,c),u(s,m,c),u(s,b,c),d(b,w),d(w,C),d(C,O),u(s,A,c),u(s,B,c),u(s,_,c),u(s,V,c),d(V,z),d(z,U),u(s,R,c),u(s,P,c),Sa&&Sa.m(P,null),d(P,j),d(P,L),d(L,$),d($,J),d(J,q),d(L,F),d(L,G),d(G,Q),d(P,K),d(P,X),d(X,Y),d(Y,Z),d(Z,ee),d(X,te),d(X,se),d(se,ce),d(X,ne),d(X,le),d(le,oe),u(s,ie,c),u(s,he,c),u(s,fe,c),u(s,ue,c),d(ue,de),d(de,ge),d(ge,pe),u(s,Ee,c),u(s,be,c),d(be,we),d(we,ye),d(ye,Te),d(Te,Se),d(we,ke),d(we,De),d(De,Ie),d(Ie,Ne),d(we,xe),d(we,Ce),d(Ce,Oe),d(Oe,Ae),d(be,Be),d(be,He),d(He,_e),d(He,Ve),d(He,ze),d(ze,Ue),d(Ue,Re),d(Re,Pe),d(He,je),d(He,Le),d(He,Me),d(He,$e),d($e,Je),d(Je,qe),d(qe,Fe),d(He,Ge),d(He,Qe),ka&&ka.m(Qe,null),d(He,Ke),d(He,We),d(He,Xe),d(He,Ye),d(Ye,Ze),d(Ze,et),d(et,tt),d(He,at),d(He,st),Da&&Da.m(st,null),d(be,nt),d(be,rt),d(rt,lt),d(rt,ot),d(rt,it),d(it,ht),d(ht,ft),d(ft,ut),d(rt,dt),d(rt,vt),d(rt,gt),d(rt,pt),d(pt,Et),d(Et,mt),d(mt,bt),d(pt,wt),Ia&&Ia.m(pt,null),d(rt,yt),d(rt,Tt),d(rt,St),d(rt,kt),d(kt,Dt),d(Dt,It),d(It,Nt),d(rt,xt),d(rt,Ct),d(rt,Ot),d(rt,At),d(At,Bt),d(Bt,Ht),d(Ht,_t),d(be,zt),d(be,Ut),d(Ut,Rt),d(Ut,Pt),d(Ut,jt),d(jt,Lt),d(Lt,Mt),d(Mt,$t),d(Ut,Jt),d(Ut,qt),d(Ut,Ft),d(Ut,Gt),d(Gt,Qt),d(Qt,Kt),d(Kt,Wt),d(Ut,Xt),d(Ut,Yt),d(Ut,Zt),d(Ut,ea),d(ea,ta),d(ta,aa),d(aa,sa),d(Ut,ca),d(Ut,na),d(Ut,ra),d(Ut,la),d(la,oa),d(oa,ia),d(ia,ha),u(s,ua,c),u(s,da,c),d(da,va),u(s,ga,c),u(s,pa,c),d(pa,Ea),u(s,ma,c),u(s,ba,c),wa=!0,ya||(Ta=[E(J,"click",e[16]),E(Z,"click",e[14]),E(Te,"click",e[7]),E(ye,"click",me),E(Ie,"click",e[7]),E(De,"click",me),E(Oe,"click",e[7]),E(Ce,"click",me),E(da,"click",e[8]),E(pa,"click",e[9])],ya=!0)},p(e,t){e[0].length>0?Sa?Sa.p(e,t):(Sa=W(e),Sa.c(),Sa.m(P,j)):Sa&&(Sa.d(1),Sa=null),e[4].length>0?ka?ka.p(e,t):(ka=ae(e),ka.c(),ka.m(Qe,null)):ka&&(ka.d(1),ka=null),"configurations"in e[1]?Da?Da.p(e,t):(Da=re(e),Da.c(),Da.m(st,null)):Da&&(Da.d(1),Da=null),(!wa||8&t[0]&&ct!==(ct=e[3].Communication))&&f(He,"style",ct),e[6].length>0?Ia?Ia.p(e,t):(Ia=ve(e),Ia.c(),Ia.m(pt,null)):Ia&&(Ia.d(1),Ia=null),(!wa||8&t[0]&&Vt!==(Vt=e[3].Static))&&f(rt,"style",Vt),(!wa||8&t[0]&&fa!==(fa=e[3]["Driving Simulation"]))&&f(Ut,"style",fa)},i(e){wa||(D(a.$$.fragment,e),wa=!0)},o(e){I(a.$$.fragment,e),wa=!1},d(e){e&&i(t),N(a,e),e&&i(v),e&&i(g),e&&i(m),e&&i(b),e&&i(A),e&&i(B),e&&i(_),e&&i(V),e&&i(R),e&&i(P),Sa&&Sa.d(),e&&i(ie),e&&i(he),e&&i(fe),e&&i(ue),e&&i(Ee),e&&i(be),ka&&ka.d(),Da&&Da.d(),Ia&&Ia.d(),e&&i(ua),e&&i(da),e&&i(ga),e&&i(pa),e&&i(ma),e&&i(ba),ya=!1,x(Ta)}}}function Ee(){console.log(this,"copyScenario")}function me(){let e=this.firstChild.innerText;var t,a,s;for(console.log(this,"this"),a=document.getElementsByClassName("city"),t=0;t<a.length;t++)a[t].style.display="none";for(s=document.getElementsByClassName("tablink"),t=0;t<a.length;t++)s[t].className=s[t].className.replace(" w3-border-red","");document.getElementById(e).style.display="block",this.firstChild.className+=" w3-border-red"}function be(e,t,a){let s=[],c={},n=!1,r="";const l=R.subscribe((e=>{a(0,s=e)})),o=P.subscribe((e=>{a(1,c=e)})),i=j.subscribe((e=>{n=e})),h=L.subscribe((e=>{r=e}));let f;C((()=>{l(),o(),i(),h()}));let u={Communication:"display:none",Static:"display:none","Driving Simulation":"display:none"},d=[{short_id:"123",name:"DoS Attack",ports:"8010"},{short_id:"1243",name:"Replay Attack",ports:"8020"},{short_id:"122",name:"MitM",ports:"8030"}],v={},g=[];function p(){let e=!1;for(let t=0;t<s.length;t++)s[t].activated&&(e=!0);return e}return O((async()=>{a(3,u[r]="display:block",u),async function(e){n?_("/localservices",(function(t){let s=JSON.parse(t.response);s.data&&a(4,d=s.data),e()})):_("/containers",(function(t){let s=JSON.parse(t.response);s.data&&a(4,d=s.data),e()}))}((function(){if(s.length<1)_("/api/db1/scenarios",(function(e){let t=JSON.parse(e.response);if(t.data){for(let e=0;e<t.data.length;e++)t.data[e].activated=!1;R.set(t.data)}}));else if(Object.keys(c).length>0){L.set(c.type);for(var e=0;e<c.configurations.length;e++)for(var t=0;t<d.length;t++){let s=t.toString();d[t].short_id==c.configurations[e].container_info.short_id&&a(5,v[s]="background-color: #acddb4;",v)}}})),async function(){_("/staticfiles",(function(e){let t=JSON.parse(e.response);t.data&&(console.log(t.data),a(6,g=t.data))}))}()})),[s,c,f,u,d,v,g,async function(){L.set(this.innerText);for(let e in u)e==this.innerText?a(3,u[e]="display:block",u):a(3,u[e]="display:none",u)},async function(){if(!p())return void V.danger("please create and activate a scenario first.");let e=[];for(let t=0;t<c.configurations.length;t++){let a=c.configurations[t].container_info.name,s=c.configurations[t].container_info.ports.split(",")[0].split("/")[0],n=U("GET","/containers/"+a+"/"+s+"/configs");e.push(n)}Promise.allSettled(e).then((function(e){for(let t=0;t<e.length;t++)"fulfilled"==e[t].status&&a(1,c.configurations[t].configs=e[t].value.data.data,c);P.set(c)}))},async function(){if(console.log("saving scenario configurations"),!p())return void V.danger("please create and activate a scenario first.");let e="/api/db1/scenario_configurations",t="POST";"_id"in c&&(t="PUT",e="/api/db1/scenario_configurations/"+c._id),a(1,c.type=r,c),z(e,t,c,(function(e){console.log(e,"response from saveContainersConfig"),a(1,c._id=e.data,c),P.set(c),V.success("Configuration saved successfull.")}))},async function(){if(!p())return void V.danger("please create and activate a scenario first.");let e={},t=parseInt(this.getAttribute("index")),s=this.getAttribute("name"),r=this.getAttribute("port").split(",")[0].split("/")[0];console.log(t,s,r,"printing index");let l=this.querySelectorAll("input");for(let a=0;a<l.length;a++){let t=l[a],s=t.getAttribute("type"),c=t.getAttribute("key"),n=t.value;null==n&&(n=""),"submit"!=s&&("checkbox"==s?e[c]=t.checked:"list"==s?e[c]=n.split(","):t.hasAttribute("convert")?e[c]=Number(n):e[c]=n)}if(n){z("/localservices/"+s+"/"+r+"/configs","PUT",e,(function(s){a(1,c.configurations[t].configs=e,c),P.set(c),V.success("Configuration update successfull.")}))}else{z("/containers/"+s+"/"+r+"/configs","POST",e,(function(s){a(1,c.configurations[t].configs=e,c),P.set(c),V.success("Configuration update successfull.")}))}},function(){let e,t=this.parentElement.parentElement.parentElement.parentElement.getAttribute("index");for(let c=0;c<s.length;c++)c==t?(a(2,f=c),a(0,s[c].activated=!0,s),e=s[c]):a(0,s[c].activated=!1,s);R.set(s);for(let s of Object.keys(v))a(5,v[s]="",v);a(1,c={}),a(1,c.ref=e._id,c),a(1,c.name=e.name,c),a(1,c.configurations=[],c),P.set(c);let n="/api/db1/scenario_configurations/ref-"+e._id;_(n,(function(e){let t=JSON.parse(e.response);if(t.data&&t.data.length>0){a(1,c=t.data[0]);for(let e=0;e<d.length;e++){let t=e.toString();a(5,v[t]="",v);let s=d[e].short_id;for(let e=0;e<c.configurations.length;e++){s==c.configurations[e].container_info.short_id&&(a(5,v[t]="background-color: #acddb4;",v),e=c.configurations.length)}}P.set(c)}}))},function(){if(!p())return void V.danger("please create and activate a scenario first.");let e=this.parentElement.parentElement.parentElement.parentElement.getAttribute("index");a(5,v[e]="background-color: #acddb4;",v);let t=d[parseInt(e)],s={},r=t.name,l=t.ports.split(",")[0].split("/")[0];if(n){_("/localservices/"+r+"/"+l+"/configs",(function(e){let a=JSON.parse(e.response);a.data&&"data"in a.data&&(s=a.data.data),c.configurations.push({container_info:t,configs:s}),P.set(c)}))}else{_("/containers/"+r+"/"+l+"/configs",(function(e){let a=JSON.parse(e.response);a.data&&"data"in a.data&&(s=a.data.data),c.configurations.push({container_info:t,configs:s}),P.set(c)}))}},function(){if(!p())return void V.danger("please create and activate a scenario first.");let e=this.parentElement.parentElement.parentElement.parentElement.getAttribute("index");a(5,v[e]="",v);let t=d[parseInt(e)].short_id,s=-1;for(let a=0;a<c.configurations.length;a++)c.configurations[a].container_info.short_id==t&&(s=a,a=c.configurations.length);s>-1&&c.configurations.splice(s,1),P.set(c)},function(){let e=this.getAttribute("ref"),t=document.getElementById(e+"ID"),c=document.getElementById(e);if(""!=t.value&&""!=c.value){let e=!1,n=-1;for(let a=0;a<s.length;a++)s[a]._id==t.value&&(e=!0,n=a,a=s.length);if(!e)return void V.danger("scenario identifier does not exist.");let r="/api/db1/scenarios/"+t.value,l={name:c.value};z(r,"PUT",l,(function(e){a(0,s[n].name=c.value,s),R.set(s),V.success("Scenario renamed successfully.")}))}else V.danger("please provide scenario identifier and new name.")},function(){let e=!1,t=parseInt(this.parentElement.parentElement.parentElement.parentElement.getAttribute("index"));s[t].activated&&(e=!0);let n=s[t]._id;if(z("/api/db1/scenarios/"+n,"DELETE",{},(function(e){s.splice(t,1),R.set(s),V.success("Scenario deleted successfully.")})),z("/api/db1/scenario_configurations/ref-"+n,"DELETE",{},(function(e){V.success("Scenario configuration deleted successfully.")})),e){a(1,c={}),P.set(c);for(let e of Object.keys(v))a(5,v[e]="",v)}},function(){let e=this.getAttribute("ref");if(""!=e){let t=document.getElementById(e);if(""!=t.value){let e={name:t.value},a="/api/db1/scenarios";console.log("createNewScenario request with body:",e," and url:",a),z(a,"POST",e,(function(e){console.log(e,"response from createNewScenario"),s.push({_id:e.data,name:t.value,activated:!1}),R.set(s),V.success("New scenario created.")}))}else V.danger("please provide scenario name.")}}]}export default class extends e{constructor(e){super(),t(this,e,be,pe,a,{},[-1,-1])}}