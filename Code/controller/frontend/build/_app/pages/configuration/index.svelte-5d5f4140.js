import{S as e,i as t,s as a,e as s,t as c,k as n,c as r,a as l,g as i,d as o,n as h,b as f,f as u,F as d,l as v,M as g,N as p,G as m,O as E,h as b,P as w,j as y,L as T,m as S,o as k,v as D,r as I,w as N,Q as x,R as C,z as O,T as A,U as H}from"../../chunks/vendor-c052606d.js";/* empty css                                                       */import{T as B,x as _,n as V,a as z,m as U}from"../../chunks/requests-2b3ce117.js";import{s as R,a as P,t as j,b as L}from"../../chunks/store-ce76cd4a.js";const{document:M}=A;function $(e,t,a){const s=e.slice();return s[27]=t[a],s[29]=a,s}function J(e,t,a){const s=e.slice();return s[30]=t[a],s[29]=a,s}function q(e,t,a){const s=e.slice();return s[32]=t[a][0],s[33]=t[a][1],s}function F(e,t,a){const s=e.slice();return s[36]=t[a].short_id,s[37]=t[a].name,s[38]=t[a].ports,s[29]=a,s}function G(e,t,a){const s=e.slice();return s[40]=t[a],s[29]=a,s}function Q(e,t,a){const s=e.slice();return s[32]=t[a][0],s[33]=t[a][1],s}function K(e,t,a){const s=e.slice();return s[32]=t[a][0],s[33]=t[a][1],s}function W(e){let t,a,v,p,m,E,b,w,y,T,S,k,D,I,N,x=e[0],C=[];for(let s=0;s<x.length;s+=1)C[s]=te(G(e,x,s));return{c(){t=s("table"),a=s("thead"),v=s("tr"),p=s("th"),m=c("ID"),E=n(),b=s("th"),w=c("Name"),y=n(),T=s("th"),S=c("Activated"),k=n(),D=s("th"),I=c("Actions"),N=n();for(let e=0;e<C.length;e+=1)C[e].c();this.h()},l(e){t=r(e,"TABLE",{class:!0});var s=l(t);a=r(s,"THEAD",{});var c=l(a);v=r(c,"TR",{class:!0});var n=l(v);p=r(n,"TH",{});var f=l(p);m=i(f,"ID"),f.forEach(o),E=h(n),b=r(n,"TH",{});var u=l(b);w=i(u,"Name"),u.forEach(o),y=h(n),T=r(n,"TH",{});var d=l(T);S=i(d,"Activated"),d.forEach(o),k=h(n),D=r(n,"TH",{});var g=l(D);I=i(g,"Actions"),g.forEach(o),n.forEach(o),c.forEach(o),N=h(s);for(let t=0;t<C.length;t+=1)C[t].l(s);s.forEach(o),this.h()},h(){f(v,"class","w3-dark-grey"),f(t,"class","w3-table-all w3-centered")},m(e,s){u(e,t,s),d(t,a),d(a,v),d(v,p),d(p,m),d(v,E),d(v,b),d(b,w),d(v,y),d(v,T),d(T,S),d(v,k),d(v,D),d(D,I),d(t,N);for(let a=0;a<C.length;a+=1)C[a].m(t,null)},p(e,a){if(34821&a[0]){let s;for(x=e[0],s=0;s<x.length;s+=1){const c=G(e,x,s);C[s]?C[s].p(c,a):(C[s]=te(c),C[s].c(),C[s].m(t,null))}for(;s<C.length;s+=1)C[s].d(1);C.length=x.length}},d(e){e&&o(t),g(C,e)}}}function X(e){let t,a,v,g,p,E,b,y,T,S,k,D,I,N,C,O,A=[],B=new Map,_=Object.entries(e[40]);const V=e=>e[32];for(let s=0;s<_.length;s+=1){let t=Q(e,_,s),a=V(t);B.set(a,A[s]=Z(a,t))}return{c(){t=s("tr");for(let e=0;e<A.length;e+=1)A[e].c();a=n(),v=s("td"),g=s("div"),p=s("div"),E=s("button"),b=c("Activate"),y=n(),T=s("button"),S=c("Copy"),k=n(),D=s("button"),I=c("Delete"),N=n(),this.h()},l(e){t=r(e,"TR",{index:!0});var s=l(t);for(let t=0;t<A.length;t+=1)A[t].l(s);a=h(s),v=r(s,"TD",{class:!0});var c=l(v);g=r(c,"DIV",{class:!0});var n=l(g);p=r(n,"DIV",{class:!0});var f=l(p);E=r(f,"BUTTON",{});var u=l(E);b=i(u,"Activate"),u.forEach(o),y=h(f),T=r(f,"BUTTON",{});var d=l(T);S=i(d,"Copy"),d.forEach(o),k=h(f),D=r(f,"BUTTON",{});var m=l(D);I=i(m,"Delete"),m.forEach(o),f.forEach(o),n.forEach(o),c.forEach(o),N=h(s),s.forEach(o),this.h()},h(){f(p,"class","w3-bar"),f(g,"class","w3-show-inline-block"),f(v,"class","svelte-guhzs8"),f(t,"index",e[29])},m(s,c){u(s,t,c);for(let e=0;e<A.length;e+=1)A[e].m(t,null);d(t,a),d(t,v),d(v,g),d(g,p),d(p,E),d(E,b),d(p,y),d(p,T),d(T,S),d(p,k),d(p,D),d(D,I),d(t,N),C||(O=[m(E,"click",e[11]),m(T,"click",me),m(D,"click",e[15])],C=!0)},p(e,s){1&s[0]&&(_=Object.entries(e[40]),A=w(A,s,V,1,e,_,B,t,H,Z,a,Q))},d(e){e&&o(t);for(let t=0;t<A.length;t+=1)A[t].d();C=!1,x(O)}}}function Y(e){let t,a,v,g,E,b,y,T,S,k,D,I,N,C,O,A,B=[],_=new Map,V=Object.entries(e[40]);const z=e=>e[32];for(let s=0;s<V.length;s+=1){let t=K(e,V,s),a=z(t);_.set(a,B[s]=ee(a,t))}return{c(){t=s("tr");for(let e=0;e<B.length;e+=1)B[e].c();a=n(),v=s("td"),g=s("div"),E=s("div"),b=s("button"),y=c("Activate"),T=n(),S=s("button"),k=c("Copy"),D=n(),I=s("button"),N=c("Delete"),C=n(),this.h()},l(e){t=r(e,"TR",{index:!0,style:!0});var s=l(t);for(let t=0;t<B.length;t+=1)B[t].l(s);a=h(s),v=r(s,"TD",{class:!0});var c=l(v);g=r(c,"DIV",{class:!0});var n=l(g);E=r(n,"DIV",{class:!0});var f=l(E);b=r(f,"BUTTON",{});var u=l(b);y=i(u,"Activate"),u.forEach(o),T=h(f),S=r(f,"BUTTON",{});var d=l(S);k=i(d,"Copy"),d.forEach(o),D=h(f),I=r(f,"BUTTON",{});var p=l(I);N=i(p,"Delete"),p.forEach(o),f.forEach(o),n.forEach(o),c.forEach(o),C=h(s),s.forEach(o),this.h()},h(){f(E,"class","w3-bar"),f(g,"class","w3-show-inline-block"),f(v,"class","svelte-guhzs8"),f(t,"index",e[29]),p(t,"background-color","#acddb4")},m(s,c){u(s,t,c);for(let e=0;e<B.length;e+=1)B[e].m(t,null);d(t,a),d(t,v),d(v,g),d(g,E),d(E,b),d(b,y),d(E,T),d(E,S),d(S,k),d(E,D),d(E,I),d(I,N),d(t,C),O||(A=[m(b,"click",e[11]),m(S,"click",me),m(I,"click",e[15])],O=!0)},p(e,s){1&s[0]&&(V=Object.entries(e[40]),B=w(B,s,z,1,e,V,_,t,H,ee,a,K))},d(e){e&&o(t);for(let t=0;t<B.length;t+=1)B[t].d();O=!1,x(A)}}}function Z(e,t){let a,n,h=t[33]+"";return{key:e,first:null,c(){a=s("td"),n=c(h),this.h()},l(e){a=r(e,"TD",{class:!0});var t=l(a);n=i(t,h),t.forEach(o),this.h()},h(){f(a,"class","svelte-guhzs8"),this.first=a},m(e,t){u(e,a,t),d(a,n)},p(e,a){t=e,1&a[0]&&h!==(h=t[33]+"")&&b(n,h)},d(e){e&&o(a)}}}function ee(e,t){let a,n,h=t[33]+"";return{key:e,first:null,c(){a=s("td"),n=c(h),this.h()},l(e){a=r(e,"TD",{class:!0});var t=l(a);n=i(t,h),t.forEach(o),this.h()},h(){f(a,"class","svelte-guhzs8"),this.first=a},m(e,t){u(e,a,t),d(a,n)},p(e,a){t=e,1&a[0]&&h!==(h=t[33]+"")&&b(n,h)},d(e){e&&o(a)}}}function te(e){let t;function a(e,t){return e[2]==e[29]||e[0][e[29]].activated?Y:X}let s=a(e),c=s(e);return{c(){c.c(),t=v()},l(e){c.l(e),t=v()},m(e,a){c.m(e,a),u(e,t,a)},p(e,n){s===(s=a(e))&&c?c.p(e,n):(c.d(1),c=s(e),c&&(c.c(),c.m(t.parentNode,t)))},d(e){c.d(e),e&&o(t)}}}function ae(e){let t,a,v,p,m,E,b,w,y,T,S,k,D,I,N,x=e[4],C=[];for(let s=0;s<x.length;s+=1)C[s]=ne(F(e,x,s));return{c(){t=s("table"),a=s("thead"),v=s("tr"),p=s("th"),m=c("ShortID"),E=n(),b=s("th"),w=c("Name"),y=n(),T=s("th"),S=c("Ports"),k=n(),D=s("th"),I=c("Actions"),N=n();for(let e=0;e<C.length;e+=1)C[e].c();this.h()},l(e){t=r(e,"TABLE",{class:!0});var s=l(t);a=r(s,"THEAD",{});var c=l(a);v=r(c,"TR",{class:!0});var n=l(v);p=r(n,"TH",{});var f=l(p);m=i(f,"ShortID"),f.forEach(o),E=h(n),b=r(n,"TH",{});var u=l(b);w=i(u,"Name"),u.forEach(o),y=h(n),T=r(n,"TH",{});var d=l(T);S=i(d,"Ports"),d.forEach(o),k=h(n),D=r(n,"TH",{});var g=l(D);I=i(g,"Actions"),g.forEach(o),n.forEach(o),c.forEach(o),N=h(s);for(let t=0;t<C.length;t+=1)C[t].l(s);s.forEach(o),this.h()},h(){f(v,"class","w3-dark-grey"),f(t,"class","w3-table-all w3-centered")},m(e,s){u(e,t,s),d(t,a),d(a,v),d(v,p),d(p,m),d(v,E),d(v,b),d(b,w),d(v,y),d(v,T),d(T,S),d(v,k),d(v,D),d(D,I),d(t,N);for(let a=0;a<C.length;a+=1)C[a].m(t,null)},p(e,a){if(12336&a[0]){let s;for(x=e[4],s=0;s<x.length;s+=1){const c=F(e,x,s);C[s]?C[s].p(c,a):(C[s]=ne(c),C[s].c(),C[s].m(t,null))}for(;s<C.length;s+=1)C[s].d(1);C.length=x.length}},d(e){e&&o(t),g(C,e)}}}function se(e){let t,a,v,g,p,E,w,y,T,S,k,D,I,N,C,O,A,H,B,_,V,z=e[36]+"",U=e[37]+"",R=e[38]+"";return{c(){t=s("tr"),a=s("td"),v=c(z),g=n(),p=s("td"),E=c(U),w=n(),y=s("td"),T=c(R),S=n(),k=s("td"),D=s("div"),I=s("div"),N=s("button"),C=c("Activate"),O=n(),A=s("button"),H=c("Deactivate"),B=n(),this.h()},l(e){t=r(e,"TR",{index:!0});var s=l(t);a=r(s,"TD",{class:!0});var c=l(a);v=i(c,z),c.forEach(o),g=h(s),p=r(s,"TD",{class:!0});var n=l(p);E=i(n,U),n.forEach(o),w=h(s),y=r(s,"TD",{class:!0});var f=l(y);T=i(f,R),f.forEach(o),S=h(s),k=r(s,"TD",{class:!0});var u=l(k);D=r(u,"DIV",{class:!0});var d=l(D);I=r(d,"DIV",{class:!0});var m=l(I);N=r(m,"BUTTON",{});var b=l(N);C=i(b,"Activate"),b.forEach(o),O=h(m),A=r(m,"BUTTON",{});var x=l(A);H=i(x,"Deactivate"),x.forEach(o),m.forEach(o),d.forEach(o),u.forEach(o),B=h(s),s.forEach(o),this.h()},h(){f(a,"class","svelte-guhzs8"),f(p,"class","svelte-guhzs8"),f(y,"class","svelte-guhzs8"),f(I,"class","w3-bar"),f(D,"class","w3-show-inline-block"),f(k,"class","svelte-guhzs8"),f(t,"index",e[29])},m(s,c){u(s,t,c),d(t,a),d(a,v),d(t,g),d(t,p),d(p,E),d(t,w),d(t,y),d(y,T),d(t,S),d(t,k),d(k,D),d(D,I),d(I,N),d(N,C),d(I,O),d(I,A),d(A,H),d(t,B),_||(V=[m(N,"click",e[12]),m(A,"click",e[13])],_=!0)},p(e,t){16&t[0]&&z!==(z=e[36]+"")&&b(v,z),16&t[0]&&U!==(U=e[37]+"")&&b(E,U),16&t[0]&&R!==(R=e[38]+"")&&b(T,R)},d(e){e&&o(t),_=!1,x(V)}}}function ce(e){let t,a,v,g,p,E,w,y,T,S,k,D,I,N,C,O,A,H,B,_,V,z,U=e[36]+"",R=e[37]+"",P=e[38]+"";return{c(){t=s("tr"),a=s("td"),v=c(U),g=n(),p=s("td"),E=c(R),w=n(),y=s("td"),T=c(P),S=n(),k=s("td"),D=s("div"),I=s("div"),N=s("button"),C=c("Activate"),O=n(),A=s("button"),H=c("Deactivate"),B=n(),this.h()},l(e){t=r(e,"TR",{index:!0,style:!0});var s=l(t);a=r(s,"TD",{class:!0});var c=l(a);v=i(c,U),c.forEach(o),g=h(s),p=r(s,"TD",{class:!0});var n=l(p);E=i(n,R),n.forEach(o),w=h(s),y=r(s,"TD",{class:!0});var f=l(y);T=i(f,P),f.forEach(o),S=h(s),k=r(s,"TD",{class:!0});var u=l(k);D=r(u,"DIV",{class:!0});var d=l(D);I=r(d,"DIV",{class:!0});var m=l(I);N=r(m,"BUTTON",{});var b=l(N);C=i(b,"Activate"),b.forEach(o),O=h(m),A=r(m,"BUTTON",{});var x=l(A);H=i(x,"Deactivate"),x.forEach(o),m.forEach(o),d.forEach(o),u.forEach(o),B=h(s),s.forEach(o),this.h()},h(){f(a,"class","svelte-guhzs8"),f(p,"class","svelte-guhzs8"),f(y,"class","svelte-guhzs8"),f(I,"class","w3-bar"),f(D,"class","w3-show-inline-block"),f(k,"class","svelte-guhzs8"),f(t,"index",e[29]),f(t,"style",_=e[5][e[29]])},m(s,c){u(s,t,c),d(t,a),d(a,v),d(t,g),d(t,p),d(p,E),d(t,w),d(t,y),d(y,T),d(t,S),d(t,k),d(k,D),d(D,I),d(I,N),d(N,C),d(I,O),d(I,A),d(A,H),d(t,B),V||(z=[m(N,"click",e[12]),m(A,"click",e[13])],V=!0)},p(e,a){16&a[0]&&U!==(U=e[36]+"")&&b(v,U),16&a[0]&&R!==(R=e[37]+"")&&b(E,R),16&a[0]&&P!==(P=e[38]+"")&&b(T,P),32&a[0]&&_!==(_=e[5][e[29]])&&f(t,"style",_)},d(e){e&&o(t),V=!1,x(z)}}}function ne(e){let t;function a(e,t){return e[29]in e[5]?ce:se}let s=a(e),c=s(e);return{c(){c.c(),t=v()},l(e){c.l(e),t=v()},m(e,a){c.m(e,a),u(e,t,a)},p(e,n){s===(s=a(e))&&c?c.p(e,n):(c.d(1),c=s(e),c&&(c.c(),c.m(t.parentNode,t)))},d(e){c.d(e),e&&o(t)}}}function re(e){let t,a=e[1].configurations.length>0&&le(e);return{c(){a&&a.c(),t=v()},l(e){a&&a.l(e),t=v()},m(e,s){a&&a.m(e,s),u(e,t,s)},p(e,s){e[1].configurations.length>0?a?a.p(e,s):(a=le(e),a.c(),a.m(t.parentNode,t)):a&&(a.d(1),a=null)},d(e){a&&a.d(e),e&&o(t)}}}function le(e){let t,a=e[1].configurations,s=[];for(let c=0;c<a.length;c+=1)s[c]=de(J(e,a,c));return{c(){for(let e=0;e<s.length;e+=1)s[e].c();t=v()},l(e){for(let t=0;t<s.length;t+=1)s[t].l(e);t=v()},m(e,a){for(let t=0;t<s.length;t+=1)s[t].m(e,a);u(e,t,a)},p(e,c){if(1026&c[0]){let n;for(a=e[1].configurations,n=0;n<a.length;n+=1){const r=J(e,a,n);s[n]?s[n].p(r,c):(s[n]=de(r),s[n].c(),s[n].m(t.parentNode,t))}for(;n<s.length;n+=1)s[n].d(1);s.length=a.length}},d(e){g(s,e),e&&o(t)}}}function ie(e){let t,a,v,g,p,m,E,w=e[32]+"";return{c(){t=s("label"),a=s("b"),v=c(w),g=n(),p=s("input"),this.h()},l(e){t=r(e,"LABEL",{class:!0});var s=l(t);a=r(s,"B",{});var c=l(a);v=i(c,w),c.forEach(o),s.forEach(o),g=h(e),p=r(e,"INPUT",{class:!0,type:!0,key:!0,value:!0}),this.h()},h(){f(t,"class",""),f(p,"class","w3-input w3-border"),f(p,"type","list"),f(p,"key",m=e[32]),p.value=E=e[33].join()},m(e,s){u(e,t,s),d(t,a),d(a,v),u(e,g,s),u(e,p,s)},p(e,t){2&t[0]&&w!==(w=e[32]+"")&&b(v,w),2&t[0]&&m!==(m=e[32])&&f(p,"key",m),2&t[0]&&E!==(E=e[33].join())&&(p.value=E)},d(e){e&&o(t),e&&o(g),e&&o(p)}}}function oe(e){let t,a,v,g,p,m,E,w=e[32]+"";return{c(){t=s("input"),g=n(),p=s("label"),m=s("b"),E=c(w),this.h()},l(e){t=r(e,"INPUT",{class:!0,type:!0,key:!0,checked:!0}),g=h(e),p=r(e,"LABEL",{class:!0});var a=l(p);m=r(a,"B",{});var s=l(m);E=i(s,w),s.forEach(o),a.forEach(o),this.h()},h(){f(t,"class","w3-check"),f(t,"type","checkbox"),f(t,"key",a=e[32]),t.checked=v=e[33],f(p,"class","")},m(e,a){u(e,t,a),u(e,g,a),u(e,p,a),d(p,m),d(m,E)},p(e,s){2&s[0]&&a!==(a=e[32])&&f(t,"key",a),2&s[0]&&v!==(v=e[33])&&(t.checked=v),2&s[0]&&w!==(w=e[32]+"")&&b(E,w)},d(e){e&&o(t),e&&o(g),e&&o(p)}}}function he(e){let t,a,v,g,p,m,E,w=e[32]+"";return{c(){t=s("label"),a=s("b"),v=c(w),g=n(),p=s("input"),this.h()},l(e){t=r(e,"LABEL",{class:!0});var s=l(t);a=r(s,"B",{});var c=l(a);v=i(c,w),c.forEach(o),s.forEach(o),g=h(e),p=r(e,"INPUT",{class:!0,type:!0,key:!0,value:!0}),this.h()},h(){f(t,"class",""),f(p,"class","w3-input w3-border"),f(p,"type","string"),f(p,"key",m=e[32]),p.value=E=e[33]},m(e,s){u(e,t,s),d(t,a),d(a,v),u(e,g,s),u(e,p,s)},p(e,t){2&t[0]&&w!==(w=e[32]+"")&&b(v,w),2&t[0]&&m!==(m=e[32])&&f(p,"key",m),2&t[0]&&E!==(E=e[33])&&(p.value=E)},d(e){e&&o(t),e&&o(g),e&&o(p)}}}function fe(e){let t,a,v,g,p,m,E,w=e[32]+"";return{c(){t=s("label"),a=s("b"),v=c(w),g=n(),p=s("input"),this.h()},l(e){t=r(e,"LABEL",{class:!0});var s=l(t);a=r(s,"B",{});var c=l(a);v=i(c,w),c.forEach(o),s.forEach(o),g=h(e),p=r(e,"INPUT",{class:!0,type:!0,convert:!0,key:!0,value:!0}),this.h()},h(){f(t,"class",""),f(p,"class","w3-input w3-border"),f(p,"type","string"),f(p,"convert","required"),f(p,"key",m=e[32]),p.value=E=e[33]},m(e,s){u(e,t,s),d(t,a),d(a,v),u(e,g,s),u(e,p,s)},p(e,t){2&t[0]&&w!==(w=e[32]+"")&&b(v,w),2&t[0]&&m!==(m=e[32])&&f(p,"key",m),2&t[0]&&E!==(E=e[33])&&(p.value=E)},d(e){e&&o(t),e&&o(g),e&&o(p)}}}function ue(e,t){let a;function c(e,t){return"number"==typeof e[33]?fe:"string"==typeof e[33]?he:"boolean"==typeof e[33]?oe:"object"==typeof e[33]?ie:void 0}let n=c(t),i=n&&n(t);return{key:e,first:null,c(){a=s("p"),i&&i.c(),this.h()},l(e){a=r(e,"P",{});var t=l(a);i&&i.l(t),t.forEach(o),this.h()},h(){this.first=a},m(e,t){u(e,a,t),i&&i.m(a,null)},p(e,s){n===(n=c(t=e))&&i?i.p(t,s):(i&&i.d(1),i=n&&n(t),i&&(i.c(),i.m(a,null)))},d(e){e&&o(a),i&&i.d()}}}function de(e){let t,a,v,g,y,T,S,k,D,I,N,x,C,O,A,B,_,V,z,U,R,P,j=e[30].container_info.name+"",L=[],M=new Map,$=Object.entries(e[30].configs);const J=e=>e[32];for(let s=0;s<$.length;s+=1){let t=q(e,$,s),a=J(t);M.set(a,L[s]=ue(a,t))}return{c(){t=s("div"),a=s("div"),v=s("h2"),g=c(j),y=n(),T=s("p"),S=c("Description here from application configs"),k=n(),D=s("div"),I=s("form"),N=s("h5"),x=c("Update Form"),C=n();for(let e=0;e<L.length;e+=1)L[e].c();O=n(),A=s("p"),B=s("input"),z=n(),U=s("hr"),this.h()},l(e){t=r(e,"DIV",{class:!0});var s=l(t);a=r(s,"DIV",{class:!0});var c=l(a);v=r(c,"H2",{class:!0,style:!0});var n=l(v);g=i(n,j),n.forEach(o),y=h(c),T=r(c,"P",{});var f=l(T);S=i(f,"Description here from application configs"),f.forEach(o),c.forEach(o),k=h(s),D=r(s,"DIV",{class:!0});var u=l(D);I=r(u,"FORM",{name:!0,port:!0,index:!0,class:!0});var d=l(I);N=r(d,"H5",{class:!0,style:!0});var p=l(N);x=i(p,"Update Form"),p.forEach(o),C=h(d);for(let t=0;t<L.length;t+=1)L[t].l(d);O=h(d),A=r(d,"P",{});var m=l(A);B=r(m,"INPUT",{class:!0,type:!0,value:!0}),m.forEach(o),d.forEach(o),u.forEach(o),s.forEach(o),z=h(e),U=r(e,"HR",{class:!0}),this.h()},h(){f(v,"class","w3-text-orange"),p(v,"text-shadow","1px 1px 0 #444"),f(a,"class","w3-third w3-container w3-blue"),f(N,"class","w3-text-orange"),p(N,"text-shadow","1px 1px 0 #444"),f(B,"class","w3-blue"),f(B,"type","submit"),B.value="Update",f(I,"name",_=e[30].container_info.name),f(I,"port",V=e[30].container_info.ports),f(I,"index",e[29]),f(I,"class","w3-container"),f(D,"class","w3-twothird w3-container w3-gray"),f(t,"class","w3-row w3-border"),f(U,"class","svelte-guhzs8")},m(s,c){u(s,t,c),d(t,a),d(a,v),d(v,g),d(a,y),d(a,T),d(T,S),d(t,k),d(t,D),d(D,I),d(I,N),d(N,x),d(I,C);for(let e=0;e<L.length;e+=1)L[e].m(I,null);d(I,O),d(I,A),d(A,B),u(s,z,c),u(s,U,c),R||(P=m(I,"submit",E(e[10])),R=!0)},p(e,t){2&t[0]&&j!==(j=e[30].container_info.name+"")&&b(g,j),2&t[0]&&($=Object.entries(e[30].configs),L=w(L,t,J,1,e,$,M,I,H,ue,O,q)),2&t[0]&&_!==(_=e[30].container_info.name)&&f(I,"name",_),2&t[0]&&V!==(V=e[30].container_info.ports)&&f(I,"port",V)},d(e){e&&o(t);for(let t=0;t<L.length;t+=1)L[t].d();e&&o(z),e&&o(U),R=!1,P()}}}function ve(e){let t,a=e[6],s=[];for(let c=0;c<a.length;c+=1)s[c]=ge($(e,a,c));return{c(){for(let e=0;e<s.length;e+=1)s[e].c();t=v()},l(e){for(let t=0;t<s.length;t+=1)s[t].l(e);t=v()},m(e,a){for(let t=0;t<s.length;t+=1)s[t].m(e,a);u(e,t,a)},p(e,c){if(64&c[0]){let n;for(a=e[6],n=0;n<a.length;n+=1){const r=$(e,a,n);s[n]?s[n].p(r,c):(s[n]=ge(r),s[n].c(),s[n].m(t.parentNode,t))}for(;n<s.length;n+=1)s[n].d(1);s.length=a.length}},d(e){g(s,e),e&&o(t)}}}function ge(e){let t,a,v,g,p,m,E,w=e[27]+"";return{c(){t=s("label"),a=c(w),v=n(),g=s("input"),p=n(),m=s("span"),E=n(),this.h()},l(e){t=r(e,"LABEL",{class:!0});var s=l(t);a=i(s,w),v=h(s),g=r(s,"INPUT",{type:!0,checked:!0,name:!0,class:!0}),p=h(s),m=r(s,"SPAN",{class:!0}),l(m).forEach(o),E=h(s),s.forEach(o),this.h()},h(){f(g,"type","radio"),g.checked="checked",f(g,"name","radio"),f(g,"class","svelte-guhzs8"),f(m,"class","checkmark svelte-guhzs8"),f(t,"class","container svelte-guhzs8")},m(e,s){u(e,t,s),d(t,a),d(t,v),d(t,g),d(t,p),d(t,m),d(t,E)},p(e,t){64&t[0]&&w!==(w=e[27]+"")&&b(a,w)},d(e){e&&o(t)}}}function pe(e){let t,a,v,g,E,b,w,C,O,A,H,_,V,z,U,R,P,j,L,$,J,q,F,G,Q,K,X,Y,Z,ee,te,se,ce,ne,le,ie,oe,he,fe,ue,de,ge,pe,me,be,we,ye,Te,Se,ke,De,Ie,Ne,xe,Ce,Oe,Ae,He,Be,_e,Ve,ze,Ue,Re,Pe,je,Le,Me,$e,Je,qe,Fe,Ge,Qe,Ke,We,Xe,Ye,Ze,et,tt,at,st,ct,nt,rt,lt,it,ot,ht,ft,ut,dt,vt,gt,pt,mt,Et,bt,wt,yt,Tt,St,kt,Dt,It,Nt,xt,Ct,Ot,At,Ht,Bt,_t,Vt,zt,Ut,Rt,Pt,jt,Lt,Mt,$t,Jt,qt,Ft,Gt,Qt,Kt,Wt,Xt,Yt,Zt,ea,ta,aa,sa,ca,na,ra,la,ia,oa,ha,fa,ua,da,va;a=new B({});let ga=e[0].length>0&&W(e),pa=e[4].length>0&&ae(e),ma="configurations"in e[1]&&re(e),Ea=e[6].length>0&&ve(e);return{c(){t=n(),y(a.$$.fragment),v=n(),g=s("hr"),E=n(),b=s("div"),w=s("h1"),C=s("b"),O=c("Scenario Management"),A=n(),H=s("hr"),_=n(),V=s("section"),z=s("h3"),U=c("Select scenario"),R=n(),P=s("section"),ga&&ga.c(),j=n(),L=s("div"),$=s("div"),J=s("button"),q=c("Create Scenario"),F=n(),G=s("div"),Q=s("input"),K=n(),X=s("div"),Y=s("div"),Z=s("button"),ee=c("Rename Scenario"),te=n(),se=s("div"),ce=s("input"),ne=n(),le=s("div"),ie=s("input"),oe=n(),he=s("hr"),fe=n(),ue=s("div"),de=s("h1"),ge=s("b"),pe=c("Scenario Type"),me=n(),be=s("div"),we=s("div"),ye=s("a"),Te=s("div"),Se=c("Communication"),ke=n(),De=s("a"),Ie=s("div"),Ne=c("Static"),xe=n(),Ce=s("a"),Oe=s("div"),Ae=c("Driving Simulation"),He=n(),Be=s("div"),_e=s("hr"),Ve=n(),ze=s("div"),Ue=s("h1"),Re=s("b"),Pe=c("Configuration"),je=n(),Le=s("hr"),Me=n(),$e=s("section"),Je=s("h3"),qe=c("Select containers"),Fe=n(),Ge=s("section"),pa&&pa.c(),Qe=n(),Ke=s("hr"),We=n(),Xe=s("section"),Ye=s("h3"),Ze=c("Configure containers"),et=n(),tt=s("section"),ma&&ma.c(),st=n(),ct=s("div"),nt=s("hr"),rt=n(),lt=s("div"),it=s("h1"),ot=s("b"),ht=c("Configuration"),ft=n(),ut=s("hr"),dt=n(),vt=s("section"),gt=s("h3"),pt=c("Select Static Datasets"),mt=n(),Ea&&Ea.c(),Et=n(),bt=s("hr"),wt=n(),yt=s("section"),Tt=s("h3"),St=c("Generate Attack"),kt=n(),Dt=s("hr"),It=n(),Nt=s("section"),xt=s("h3"),Ct=c("Validate Dataset"),At=n(),Ht=s("div"),Bt=s("hr"),_t=n(),Vt=s("div"),zt=s("h1"),Ut=s("b"),Rt=c("Configuration"),Pt=n(),jt=s("hr"),Lt=n(),Mt=s("section"),$t=s("h3"),Jt=c("Select Driving Path"),qt=n(),Ft=s("hr"),Gt=n(),Qt=s("section"),Kt=s("h3"),Wt=c("Select Sensors"),Xt=n(),Yt=s("hr"),Zt=n(),ea=s("section"),ta=s("h3"),aa=c("Attack Configuration"),ca=n(),na=s("button"),ra=c("Reset Configurations"),la=n(),ia=s("button"),oa=c("Save Configurations"),ha=n(),fa=s("hr"),this.h()},l(e){T('[data-svelte="svelte-101i1i0"]',M.head).forEach(o),t=h(e),S(a.$$.fragment,e),v=h(e),g=r(e,"HR",{class:!0}),E=h(e),b=r(e,"DIV",{class:!0});var s=l(b);w=r(s,"H1",{class:!0,style:!0});var c=l(w);C=r(c,"B",{});var n=l(C);O=i(n,"Scenario Management"),n.forEach(o),c.forEach(o),s.forEach(o),A=h(e),H=r(e,"HR",{class:!0}),_=h(e),V=r(e,"SECTION",{class:!0});var f=l(V);z=r(f,"H3",{});var u=l(z);U=i(u,"Select scenario"),u.forEach(o),f.forEach(o),R=h(e),P=r(e,"SECTION",{class:!0});var d=l(P);ga&&ga.l(d),j=h(d),L=r(d,"DIV",{class:!0});var p=l(L);$=r(p,"DIV",{class:!0});var m=l($);J=r(m,"BUTTON",{ref:!0,class:!0});var y=l(J);q=i(y,"Create Scenario"),y.forEach(o),m.forEach(o),F=h(p),G=r(p,"DIV",{class:!0});var k=l(G);Q=r(k,"INPUT",{id:!0,class:!0,name:!0,type:!0,placeholder:!0}),k.forEach(o),p.forEach(o),K=h(d),X=r(d,"DIV",{class:!0});var D=l(X);Y=r(D,"DIV",{class:!0});var I=l(Y);Z=r(I,"BUTTON",{ref:!0,class:!0});var N=l(Z);ee=i(N,"Rename Scenario"),N.forEach(o),I.forEach(o),te=h(D),se=r(D,"DIV",{class:!0});var x=l(se);ce=r(x,"INPUT",{id:!0,class:!0,name:!0,type:!0,placeholder:!0}),x.forEach(o),ne=h(D),le=r(D,"DIV",{class:!0});var B=l(le);ie=r(B,"INPUT",{id:!0,class:!0,name:!0,type:!0,placeholder:!0}),B.forEach(o),D.forEach(o),d.forEach(o),oe=h(e),he=r(e,"HR",{class:!0}),fe=h(e),ue=r(e,"DIV",{class:!0});var W=l(ue);de=r(W,"H1",{class:!0,style:!0});var ae=l(de);ge=r(ae,"B",{});var re=l(ge);pe=i(re,"Scenario Type"),re.forEach(o),ae.forEach(o),W.forEach(o),me=h(e),be=r(e,"DIV",{class:!0});var ve=l(be);we=r(ve,"DIV",{class:!0});var Ee=l(we);ye=r(Ee,"A",{href:!0});var at=l(ye);Te=r(at,"DIV",{class:!0});var Ot=l(Te);Se=i(Ot,"Communication"),Ot.forEach(o),at.forEach(o),ke=h(Ee),De=r(Ee,"A",{href:!0});var sa=l(De);Ie=r(sa,"DIV",{class:!0});var ua=l(Ie);Ne=i(ua,"Static"),ua.forEach(o),sa.forEach(o),xe=h(Ee),Ce=r(Ee,"A",{href:!0});var da=l(Ce);Oe=r(da,"DIV",{class:!0});var va=l(Oe);Ae=i(va,"Driving Simulation"),va.forEach(o),da.forEach(o),Ee.forEach(o),He=h(ve),Be=r(ve,"DIV",{id:!0,class:!0,style:!0});var ba=l(Be);_e=r(ba,"HR",{class:!0}),Ve=h(ba),ze=r(ba,"DIV",{class:!0});var wa=l(ze);Ue=r(wa,"H1",{class:!0,style:!0});var ya=l(Ue);Re=r(ya,"B",{});var Ta=l(Re);Pe=i(Ta,"Configuration"),Ta.forEach(o),ya.forEach(o),wa.forEach(o),je=h(ba),Le=r(ba,"HR",{class:!0}),Me=h(ba),$e=r(ba,"SECTION",{class:!0});var Sa=l($e);Je=r(Sa,"H3",{});var ka=l(Je);qe=i(ka,"Select containers"),ka.forEach(o),Sa.forEach(o),Fe=h(ba),Ge=r(ba,"SECTION",{class:!0});var Da=l(Ge);pa&&pa.l(Da),Da.forEach(o),Qe=h(ba),Ke=r(ba,"HR",{class:!0}),We=h(ba),Xe=r(ba,"SECTION",{class:!0});var Ia=l(Xe);Ye=r(Ia,"H3",{});var Na=l(Ye);Ze=i(Na,"Configure containers"),Na.forEach(o),Ia.forEach(o),et=h(ba),tt=r(ba,"SECTION",{class:!0});var xa=l(tt);ma&&ma.l(xa),xa.forEach(o),ba.forEach(o),st=h(ve),ct=r(ve,"DIV",{id:!0,class:!0,style:!0});var Ca=l(ct);nt=r(Ca,"HR",{class:!0}),rt=h(Ca),lt=r(Ca,"DIV",{class:!0});var Oa=l(lt);it=r(Oa,"H1",{class:!0,style:!0});var Aa=l(it);ot=r(Aa,"B",{});var Ha=l(ot);ht=i(Ha,"Configuration"),Ha.forEach(o),Aa.forEach(o),Oa.forEach(o),ft=h(Ca),ut=r(Ca,"HR",{class:!0}),dt=h(Ca),vt=r(Ca,"SECTION",{class:!0});var Ba=l(vt);gt=r(Ba,"H3",{});var _a=l(gt);pt=i(_a,"Select Static Datasets"),_a.forEach(o),mt=h(Ba),Ea&&Ea.l(Ba),Ba.forEach(o),Et=h(Ca),bt=r(Ca,"HR",{class:!0}),wt=h(Ca),yt=r(Ca,"SECTION",{class:!0});var Va=l(yt);Tt=r(Va,"H3",{});var za=l(Tt);St=i(za,"Generate Attack"),za.forEach(o),Va.forEach(o),kt=h(Ca),Dt=r(Ca,"HR",{class:!0}),It=h(Ca),Nt=r(Ca,"SECTION",{class:!0});var Ua=l(Nt);xt=r(Ua,"H3",{});var Ra=l(xt);Ct=i(Ra,"Validate Dataset"),Ra.forEach(o),Ua.forEach(o),Ca.forEach(o),At=h(ve),Ht=r(ve,"DIV",{id:!0,class:!0,style:!0});var Pa=l(Ht);Bt=r(Pa,"HR",{class:!0}),_t=h(Pa),Vt=r(Pa,"DIV",{class:!0});var ja=l(Vt);zt=r(ja,"H1",{class:!0,style:!0});var La=l(zt);Ut=r(La,"B",{});var Ma=l(Ut);Rt=i(Ma,"Configuration"),Ma.forEach(o),La.forEach(o),ja.forEach(o),Pt=h(Pa),jt=r(Pa,"HR",{class:!0}),Lt=h(Pa),Mt=r(Pa,"SECTION",{class:!0});var $a=l(Mt);$t=r($a,"H3",{});var Ja=l($t);Jt=i(Ja,"Select Driving Path"),Ja.forEach(o),$a.forEach(o),qt=h(Pa),Ft=r(Pa,"HR",{class:!0}),Gt=h(Pa),Qt=r(Pa,"SECTION",{class:!0});var qa=l(Qt);Kt=r(qa,"H3",{});var Fa=l(Kt);Wt=i(Fa,"Select Sensors"),Fa.forEach(o),qa.forEach(o),Xt=h(Pa),Yt=r(Pa,"HR",{class:!0}),Zt=h(Pa),ea=r(Pa,"SECTION",{class:!0});var Ga=l(ea);ta=r(Ga,"H3",{});var Qa=l(ta);aa=i(Qa,"Attack Configuration"),Qa.forEach(o),Ga.forEach(o),Pa.forEach(o),ve.forEach(o),ca=h(e),na=r(e,"BUTTON",{class:!0});var Ka=l(na);ra=i(Ka,"Reset Configurations"),Ka.forEach(o),la=h(e),ia=r(e,"BUTTON",{class:!0});var Wa=l(ia);oa=i(Wa,"Save Configurations"),Wa.forEach(o),ha=h(e),fa=r(e,"HR",{class:!0}),this.h()},h(){M.title="Configuration and Scheduling",f(g,"class","svelte-guhzs8"),f(w,"class","w3-text-yellow"),p(w,"text-shadow","1px 1px 0 #444"),f(b,"class","w3-panel w3-blue"),f(H,"class","svelte-guhzs8"),f(V,"class","page-headline"),f(J,"ref","createNewScenario"),f(J,"class","w3-col w3-input w3-border"),f($,"class","w3-third"),f(Q,"id","createNewScenario"),f(Q,"class","w3-input w3-border"),f(Q,"name","name"),f(Q,"type","text"),f(Q,"placeholder","Scenario Name"),f(G,"class","w3-rest"),f(L,"class","w3-row w3-section"),f(Z,"ref","renameScenario"),f(Z,"class","w3-col w3-input w3-border"),f(Y,"class","w3-third"),f(ce,"id","renameScenarioID"),f(ce,"class","w3-input w3-border"),f(ce,"name","id"),f(ce,"type","text"),f(ce,"placeholder","Scenario Identifier"),f(se,"class","w3-third"),f(ie,"id","renameScenario"),f(ie,"class","w3-input w3-border"),f(ie,"name","name"),f(ie,"type","text"),f(ie,"placeholder","Scenario Name"),f(le,"class","w3-rest"),f(X,"class","w3-row w3-section"),f(P,"class","w3-container"),f(he,"class","svelte-guhzs8"),f(de,"class","w3-text-yellow"),p(de,"text-shadow","1px 1px 0 #444"),f(ue,"class","w3-panel w3-blue"),f(Te,"class","w3-third tablink w3-bottombar w3-hover-light-grey w3-padding"),f(ye,"href","javascript:void(0)"),f(Ie,"class","w3-third tablink w3-bottombar w3-hover-light-grey w3-padding"),f(De,"href","javascript:void(0)"),f(Oe,"class","w3-third tablink w3-bottombar w3-hover-light-grey w3-padding"),f(Ce,"href","javascript:void(0)"),f(we,"class","w3-row"),f(_e,"class","svelte-guhzs8"),f(Ue,"class","w3-text-yellow"),p(Ue,"text-shadow","1px 1px 0 #444"),f(ze,"class","w3-panel w3-blue"),f(Le,"class","svelte-guhzs8"),f($e,"class","page-headline"),f(Ge,"class","w3-container"),f(Ke,"class","svelte-guhzs8"),f(Xe,"class","page-headline"),f(tt,"class","w3-container"),f(Be,"id","Communication"),f(Be,"class","w3-container city"),f(Be,"style",at=e[3].Communication),f(nt,"class","svelte-guhzs8"),f(it,"class","w3-text-yellow"),p(it,"text-shadow","1px 1px 0 #444"),f(lt,"class","w3-panel w3-blue"),f(ut,"class","svelte-guhzs8"),f(vt,"class","page-headline"),f(bt,"class","svelte-guhzs8"),f(yt,"class","page-headline"),f(Dt,"class","svelte-guhzs8"),f(Nt,"class","page-headline"),f(ct,"id","Static"),f(ct,"class","w3-container city"),f(ct,"style",Ot=e[3].Static),f(Bt,"class","svelte-guhzs8"),f(zt,"class","w3-text-yellow"),p(zt,"text-shadow","1px 1px 0 #444"),f(Vt,"class","w3-panel w3-blue"),f(jt,"class","svelte-guhzs8"),f(Mt,"class","page-headline"),f(Ft,"class","svelte-guhzs8"),f(Qt,"class","page-headline"),f(Yt,"class","svelte-guhzs8"),f(ea,"class","page-headline"),f(Ht,"id","Driving Simulation"),f(Ht,"class","w3-container city"),f(Ht,"style",sa=e[3]["Driving Simulation"]),f(be,"class","w3-container"),f(na,"class","w3-col w3-input w3-border w3-margin-bottom"),f(ia,"class","w3-col w3-input w3-border w3-margin-top"),f(fa,"class","svelte-guhzs8")},m(s,c){u(s,t,c),k(a,s,c),u(s,v,c),u(s,g,c),u(s,E,c),u(s,b,c),d(b,w),d(w,C),d(C,O),u(s,A,c),u(s,H,c),u(s,_,c),u(s,V,c),d(V,z),d(z,U),u(s,R,c),u(s,P,c),ga&&ga.m(P,null),d(P,j),d(P,L),d(L,$),d($,J),d(J,q),d(L,F),d(L,G),d(G,Q),d(P,K),d(P,X),d(X,Y),d(Y,Z),d(Z,ee),d(X,te),d(X,se),d(se,ce),d(X,ne),d(X,le),d(le,ie),u(s,oe,c),u(s,he,c),u(s,fe,c),u(s,ue,c),d(ue,de),d(de,ge),d(ge,pe),u(s,me,c),u(s,be,c),d(be,we),d(we,ye),d(ye,Te),d(Te,Se),d(we,ke),d(we,De),d(De,Ie),d(Ie,Ne),d(we,xe),d(we,Ce),d(Ce,Oe),d(Oe,Ae),d(be,He),d(be,Be),d(Be,_e),d(Be,Ve),d(Be,ze),d(ze,Ue),d(Ue,Re),d(Re,Pe),d(Be,je),d(Be,Le),d(Be,Me),d(Be,$e),d($e,Je),d(Je,qe),d(Be,Fe),d(Be,Ge),pa&&pa.m(Ge,null),d(Be,Qe),d(Be,Ke),d(Be,We),d(Be,Xe),d(Xe,Ye),d(Ye,Ze),d(Be,et),d(Be,tt),ma&&ma.m(tt,null),d(be,st),d(be,ct),d(ct,nt),d(ct,rt),d(ct,lt),d(lt,it),d(it,ot),d(ot,ht),d(ct,ft),d(ct,ut),d(ct,dt),d(ct,vt),d(vt,gt),d(gt,pt),d(vt,mt),Ea&&Ea.m(vt,null),d(ct,Et),d(ct,bt),d(ct,wt),d(ct,yt),d(yt,Tt),d(Tt,St),d(ct,kt),d(ct,Dt),d(ct,It),d(ct,Nt),d(Nt,xt),d(xt,Ct),d(be,At),d(be,Ht),d(Ht,Bt),d(Ht,_t),d(Ht,Vt),d(Vt,zt),d(zt,Ut),d(Ut,Rt),d(Ht,Pt),d(Ht,jt),d(Ht,Lt),d(Ht,Mt),d(Mt,$t),d($t,Jt),d(Ht,qt),d(Ht,Ft),d(Ht,Gt),d(Ht,Qt),d(Qt,Kt),d(Kt,Wt),d(Ht,Xt),d(Ht,Yt),d(Ht,Zt),d(Ht,ea),d(ea,ta),d(ta,aa),u(s,ca,c),u(s,na,c),d(na,ra),u(s,la,c),u(s,ia,c),d(ia,oa),u(s,ha,c),u(s,fa,c),ua=!0,da||(va=[m(J,"click",e[16]),m(Z,"click",e[14]),m(Te,"click",e[7]),m(ye,"click",Ee),m(Ie,"click",e[7]),m(De,"click",Ee),m(Oe,"click",e[7]),m(Ce,"click",Ee),m(na,"click",e[8]),m(ia,"click",e[9])],da=!0)},p(e,t){e[0].length>0?ga?ga.p(e,t):(ga=W(e),ga.c(),ga.m(P,j)):ga&&(ga.d(1),ga=null),e[4].length>0?pa?pa.p(e,t):(pa=ae(e),pa.c(),pa.m(Ge,null)):pa&&(pa.d(1),pa=null),"configurations"in e[1]?ma?ma.p(e,t):(ma=re(e),ma.c(),ma.m(tt,null)):ma&&(ma.d(1),ma=null),(!ua||8&t[0]&&at!==(at=e[3].Communication))&&f(Be,"style",at),e[6].length>0?Ea?Ea.p(e,t):(Ea=ve(e),Ea.c(),Ea.m(vt,null)):Ea&&(Ea.d(1),Ea=null),(!ua||8&t[0]&&Ot!==(Ot=e[3].Static))&&f(ct,"style",Ot),(!ua||8&t[0]&&sa!==(sa=e[3]["Driving Simulation"]))&&f(Ht,"style",sa)},i(e){ua||(D(a.$$.fragment,e),ua=!0)},o(e){I(a.$$.fragment,e),ua=!1},d(e){e&&o(t),N(a,e),e&&o(v),e&&o(g),e&&o(E),e&&o(b),e&&o(A),e&&o(H),e&&o(_),e&&o(V),e&&o(R),e&&o(P),ga&&ga.d(),e&&o(oe),e&&o(he),e&&o(fe),e&&o(ue),e&&o(me),e&&o(be),pa&&pa.d(),ma&&ma.d(),Ea&&Ea.d(),e&&o(ca),e&&o(na),e&&o(la),e&&o(ia),e&&o(ha),e&&o(fa),da=!1,x(va)}}}function me(){console.log(this,"copyScenario")}function Ee(){let e=this.firstChild.innerText;var t,a,s;for(console.log(this,"this"),a=document.getElementsByClassName("city"),t=0;t<a.length;t++)a[t].style.display="none";for(s=document.getElementsByClassName("tablink"),t=0;t<a.length;t++)s[t].className=s[t].className.replace(" w3-border-red","");document.getElementById(e).style.display="block",this.firstChild.className+=" w3-border-red"}function be(e,t,a){let s=[],c={},n=!1,r="";const l=R.subscribe((e=>{a(0,s=e)})),i=P.subscribe((e=>{a(1,c=e)})),o=j.subscribe((e=>{n=e})),h=L.subscribe((e=>{r=e}));let f;C((()=>{l(),i(),o(),h()}));let u={Communication:"display:none",Static:"display:none","Driving Simulation":"display:none"},d=[{short_id:"123",name:"DoS Attack",ports:"8010"},{short_id:"1243",name:"Replay Attack",ports:"8020"},{short_id:"122",name:"MitM",ports:"8030"}],v={},g=[];function p(){let e=!1;for(let t=0;t<s.length;t++)s[t].activated&&(e=!0);return e}return O((async()=>{a(3,u[r]="display:block",u),async function(e){n?_("/localservices",(function(t){let s=JSON.parse(t.response);s.data&&a(4,d=s.data),e()})):_("/containers",(function(t){let s=JSON.parse(t.response);s.data&&a(4,d=s.data),e()}))}((function(){if(s.length<1)_("/api/db1/scenarios",(function(e){let t=JSON.parse(e.response);if(t.data){for(let e=0;e<t.data.length;e++)t.data[e].activated=!1;R.set(t.data)}}));else if(Object.keys(c).length>0){L.set(c.type);for(var e=0;e<c.configurations.length;e++)for(var t=0;t<d.length;t++){let s=t.toString();d[t].short_id==c.configurations[e].container_info.short_id&&a(5,v[s]="background-color: #acddb4;",v)}}})),async function(){_("/staticfiles",(function(e){let t=JSON.parse(e.response);t.data&&(console.log(t.data),a(6,g=t.data))}))}()})),[s,c,f,u,d,v,g,async function(){L.set(this.innerText);for(let e in u)e==this.innerText?a(3,u[e]="display:block",u):a(3,u[e]="display:none",u)},async function(){if(!p())return void V.danger("please create and activate a scenario first.");let e=[];for(let t=0;t<c.configurations.length;t++){let a=c.configurations[t].container_info.name,s=c.configurations[t].container_info.ports.split(",")[0].split("/")[0],n=U("GET","/containers/"+a+"/"+s+"/configs");e.push(n)}Promise.allSettled(e).then((function(e){for(let t=0;t<e.length;t++)"fulfilled"==e[t].status&&a(1,c.configurations[t].configs=e[t].value.data.data,c);P.set(c)}))},async function(){if(console.log("saving scenario configurations"),!p())return void V.danger("please create and activate a scenario first.");let e="/api/db1/scenario_configurations",t="POST";"_id"in c&&(t="PUT",e="/api/db1/scenario_configurations/"+c._id),a(1,c.type=r,c),z(e,t,c,(function(e){console.log(e,"response from saveContainersConfig"),a(1,c._id=e.data,c),P.set(c),V.success("Configuration saved successfull.")}))},async function(){if(!p())return void V.danger("please create and activate a scenario first.");let e={},t=parseInt(this.getAttribute("index")),s=this.getAttribute("name"),r=this.getAttribute("port").split(",")[0].split("/")[0];console.log(t,s,r,"printing index");let l=this.querySelectorAll("input");for(let a=0;a<l.length;a++){let t=l[a],s=t.getAttribute("type"),c=t.getAttribute("key"),n=t.value;null==n&&(n=""),"submit"!=s&&("checkbox"==s?e[c]=t.checked:"list"==s?e[c]=n.split(","):t.hasAttribute("convert")?e[c]=Number(n):e[c]=n)}if(n){z("/localservices/"+s+"/"+r+"/configs","PUT",e,(function(s){a(1,c.configurations[t].configs=e,c),P.set(c),V.success("Configuration update successfull.")}))}else{z("/containers/"+s+"/"+r+"/configs","POST",e,(function(s){a(1,c.configurations[t].configs=e,c),P.set(c),V.success("Configuration update successfull.")}))}},function(){let e,t=this.parentElement.parentElement.parentElement.parentElement.getAttribute("index");for(let c=0;c<s.length;c++)c==t?(a(2,f=c),a(0,s[c].activated=!0,s),e=s[c]):a(0,s[c].activated=!1,s);R.set(s);for(let s of Object.keys(v))a(5,v[s]="",v);a(1,c={}),a(1,c.ref=e._id,c),a(1,c.name=e.name,c),a(1,c.configurations=[],c),P.set(c);let n="/api/db1/scenario_configurations/ref-"+e._id;_(n,(function(e){let t=JSON.parse(e.response);if(t.data&&t.data.length>0){a(1,c=t.data[0]);for(let e=0;e<d.length;e++){let t=e.toString();a(5,v[t]="",v);let s=d[e].short_id;for(let e=0;e<c.configurations.length;e++){s==c.configurations[e].container_info.short_id&&(a(5,v[t]="background-color: #acddb4;",v),e=c.configurations.length)}}P.set(c)}}))},function(){if(!p())return void V.danger("please create and activate a scenario first.");let e=this.parentElement.parentElement.parentElement.parentElement.getAttribute("index");a(5,v[e]="background-color: #acddb4;",v);let t=d[parseInt(e)],s={},r=t.name,l=t.ports.split(",")[0].split("/")[0];if(n){_("/localservices/"+r+"/"+l+"/configs",(function(e){let a=JSON.parse(e.response);a.data&&"data"in a.data&&(s=a.data.data),c.configurations.push({container_info:t,configs:s}),P.set(c)}))}else{_("/containers/"+r+"/"+l+"/configs",(function(e){let a=JSON.parse(e.response);a.data&&"data"in a.data&&(s=a.data.data),c.configurations.push({container_info:t,configs:s}),P.set(c)}))}},function(){if(!p())return void V.danger("please create and activate a scenario first.");let e=this.parentElement.parentElement.parentElement.parentElement.getAttribute("index");a(5,v[e]="",v);let t=d[parseInt(e)].short_id,s=-1;for(let a=0;a<c.configurations.length;a++)c.configurations[a].container_info.short_id==t&&(s=a,a=c.configurations.length);s>-1&&c.configurations.splice(s,1),P.set(c)},function(){let e=this.getAttribute("ref"),t=document.getElementById(e+"ID"),c=document.getElementById(e);if(""!=t.value&&""!=c.value){let e=!1,n=-1;for(let a=0;a<s.length;a++)s[a]._id==t.value&&(e=!0,n=a,a=s.length);if(!e)return void V.danger("scenario identifier does not exist.");let r="/api/db1/scenarios/"+t.value,l={name:c.value};z(r,"PUT",l,(function(e){a(0,s[n].name=c.value,s),R.set(s),V.success("Scenario renamed successfully.")}))}else V.danger("please provide scenario identifier and new name.")},function(){let e=!1,t=parseInt(this.parentElement.parentElement.parentElement.parentElement.getAttribute("index"));s[t].activated&&(e=!0);let n=s[t]._id;if(z("/api/db1/scenarios/"+n,"DELETE",{},(function(e){s.splice(t,1),R.set(s),V.success("Scenario deleted successfully.")})),z("/api/db1/scenario_configurations/ref-"+n,"DELETE",{},(function(e){V.success("Scenario configuration deleted successfully.")})),e){a(1,c={}),P.set(c);for(let e of Object.keys(v))a(5,v[e]="",v)}},function(){let e=this.getAttribute("ref");if(""!=e){let t=document.getElementById(e);if(""!=t.value){let e={name:t.value},a="/api/db1/scenarios";console.log("createNewScenario request with body:",e," and url:",a),z(a,"POST",e,(function(e){console.log(e,"response from createNewScenario"),s.push({_id:e.data,name:t.value,activated:!1}),R.set(s),V.success("New scenario created.")}))}else V.danger("please provide scenario name.")}}]}export default class extends e{constructor(e){super(),t(this,e,be,pe,a,{},[-1,-1])}}