import{S as e,i as a,s as t,e as s,t as c,k as l,c as n,a as r,g as o,d as i,n as h,b as f,f as u,F as d,l as v,M as p,N as g,G as E,O as m,h as w,P as b,j as y,L as T,m as k,o as x,v as S,r as D,w as I,Q as N,R as A,z as B,T as C,U as O}from"../../chunks/vendor-c052606d.js";/* empty css                                                       */import{T as H,x as z,n as _,a as U,m as V}from"../../chunks/requests-2b3ce117.js";import{s as P,a as R,t as L,b as j}from"../../chunks/store-ce76cd4a.js";const{document:M}=C;function $(e,a,t){const s=e.slice();return s[27]=a[t],s[29]=t,s}function J(e,a,t){const s=e.slice();return s[30]=a[t],s[29]=t,s}function q(e,a,t){const s=e.slice();return s[32]=a[t][0],s[33]=a[t][1],s}function F(e,a,t){const s=e.slice();return s[36]=a[t].short_id,s[37]=a[t].name,s[38]=a[t].ports,s[29]=t,s}function G(e,a,t){const s=e.slice();return s[40]=a[t],s[29]=t,s}function Q(e,a,t){const s=e.slice();return s[32]=a[t][0],s[33]=a[t][1],s}function K(e,a,t){const s=e.slice();return s[32]=a[t][0],s[33]=a[t][1],s}function W(e){let a,t,v,g,E,m,w,b,y,T,k,x,S,D,I,N=e[0],A=[];for(let s=0;s<N.length;s+=1)A[s]=ae(G(e,N,s));return{c(){a=s("table"),t=s("thead"),v=s("tr"),g=s("th"),E=c("ID"),m=l(),w=s("th"),b=c("Name"),y=l(),T=s("th"),k=c("Activated"),x=l(),S=s("th"),D=c("Actions"),I=l();for(let e=0;e<A.length;e+=1)A[e].c();this.h()},l(e){a=n(e,"TABLE",{class:!0});var s=r(a);t=n(s,"THEAD",{});var c=r(t);v=n(c,"TR",{class:!0});var l=r(v);g=n(l,"TH",{});var f=r(g);E=o(f,"ID"),f.forEach(i),m=h(l),w=n(l,"TH",{});var u=r(w);b=o(u,"Name"),u.forEach(i),y=h(l),T=n(l,"TH",{});var d=r(T);k=o(d,"Activated"),d.forEach(i),x=h(l),S=n(l,"TH",{});var p=r(S);D=o(p,"Actions"),p.forEach(i),l.forEach(i),c.forEach(i),I=h(s);for(let a=0;a<A.length;a+=1)A[a].l(s);s.forEach(i),this.h()},h(){f(v,"class","w3-dark-grey"),f(a,"class","w3-table-all w3-centered")},m(e,s){u(e,a,s),d(a,t),d(t,v),d(v,g),d(g,E),d(v,m),d(v,w),d(w,b),d(v,y),d(v,T),d(T,k),d(v,x),d(v,S),d(S,D),d(a,I);for(let t=0;t<A.length;t+=1)A[t].m(a,null)},p(e,t){if(34821&t[0]){let s;for(N=e[0],s=0;s<N.length;s+=1){const c=G(e,N,s);A[s]?A[s].p(c,t):(A[s]=ae(c),A[s].c(),A[s].m(a,null))}for(;s<A.length;s+=1)A[s].d(1);A.length=N.length}},d(e){e&&i(a),p(A,e)}}}function X(e){let a,t,v,p,g,m,w,y,T,k,x,S,D,I,A,B,C=[],H=new Map,z=Object.entries(e[40]);const _=e=>e[32];for(let s=0;s<z.length;s+=1){let a=Q(e,z,s),t=_(a);H.set(t,C[s]=Z(t,a))}return{c(){a=s("tr");for(let e=0;e<C.length;e+=1)C[e].c();t=l(),v=s("td"),p=s("div"),g=s("div"),m=s("button"),w=c("Activate"),y=l(),T=s("button"),k=c("Copy"),x=l(),S=s("button"),D=c("Delete"),I=l(),this.h()},l(e){a=n(e,"TR",{index:!0});var s=r(a);for(let a=0;a<C.length;a+=1)C[a].l(s);t=h(s),v=n(s,"TD",{class:!0});var c=r(v);p=n(c,"DIV",{class:!0});var l=r(p);g=n(l,"DIV",{class:!0});var f=r(g);m=n(f,"BUTTON",{});var u=r(m);w=o(u,"Activate"),u.forEach(i),y=h(f),T=n(f,"BUTTON",{});var d=r(T);k=o(d,"Copy"),d.forEach(i),x=h(f),S=n(f,"BUTTON",{});var E=r(S);D=o(E,"Delete"),E.forEach(i),f.forEach(i),l.forEach(i),c.forEach(i),I=h(s),s.forEach(i),this.h()},h(){f(g,"class","w3-bar"),f(p,"class","w3-show-inline-block"),f(v,"class","svelte-llwuxz"),f(a,"index",e[29])},m(s,c){u(s,a,c);for(let e=0;e<C.length;e+=1)C[e].m(a,null);d(a,t),d(a,v),d(v,p),d(p,g),d(g,m),d(m,w),d(g,y),d(g,T),d(T,k),d(g,x),d(g,S),d(S,D),d(a,I),A||(B=[E(m,"click",e[11]),E(T,"click",Ee),E(S,"click",e[15])],A=!0)},p(e,s){1&s[0]&&(z=Object.entries(e[40]),C=b(C,s,_,1,e,z,H,a,O,Z,t,Q))},d(e){e&&i(a);for(let a=0;a<C.length;a+=1)C[a].d();A=!1,N(B)}}}function Y(e){let a,t,v,p,m,w,y,T,k,x,S,D,I,A,B,C,H=[],z=new Map,_=Object.entries(e[40]);const U=e=>e[32];for(let s=0;s<_.length;s+=1){let a=K(e,_,s),t=U(a);z.set(t,H[s]=ee(t,a))}return{c(){a=s("tr");for(let e=0;e<H.length;e+=1)H[e].c();t=l(),v=s("td"),p=s("div"),m=s("div"),w=s("button"),y=c("Activate"),T=l(),k=s("button"),x=c("Copy"),S=l(),D=s("button"),I=c("Delete"),A=l(),this.h()},l(e){a=n(e,"TR",{index:!0,style:!0});var s=r(a);for(let a=0;a<H.length;a+=1)H[a].l(s);t=h(s),v=n(s,"TD",{class:!0});var c=r(v);p=n(c,"DIV",{class:!0});var l=r(p);m=n(l,"DIV",{class:!0});var f=r(m);w=n(f,"BUTTON",{});var u=r(w);y=o(u,"Activate"),u.forEach(i),T=h(f),k=n(f,"BUTTON",{});var d=r(k);x=o(d,"Copy"),d.forEach(i),S=h(f),D=n(f,"BUTTON",{});var g=r(D);I=o(g,"Delete"),g.forEach(i),f.forEach(i),l.forEach(i),c.forEach(i),A=h(s),s.forEach(i),this.h()},h(){f(m,"class","w3-bar"),f(p,"class","w3-show-inline-block"),f(v,"class","svelte-llwuxz"),f(a,"index",e[29]),g(a,"background-color","#acddb4")},m(s,c){u(s,a,c);for(let e=0;e<H.length;e+=1)H[e].m(a,null);d(a,t),d(a,v),d(v,p),d(p,m),d(m,w),d(w,y),d(m,T),d(m,k),d(k,x),d(m,S),d(m,D),d(D,I),d(a,A),B||(C=[E(w,"click",e[11]),E(k,"click",Ee),E(D,"click",e[15])],B=!0)},p(e,s){1&s[0]&&(_=Object.entries(e[40]),H=b(H,s,U,1,e,_,z,a,O,ee,t,K))},d(e){e&&i(a);for(let a=0;a<H.length;a+=1)H[a].d();B=!1,N(C)}}}function Z(e,a){let t,l,h=a[33]+"";return{key:e,first:null,c(){t=s("td"),l=c(h),this.h()},l(e){t=n(e,"TD",{class:!0});var a=r(t);l=o(a,h),a.forEach(i),this.h()},h(){f(t,"class","svelte-llwuxz"),this.first=t},m(e,a){u(e,t,a),d(t,l)},p(e,t){a=e,1&t[0]&&h!==(h=a[33]+"")&&w(l,h)},d(e){e&&i(t)}}}function ee(e,a){let t,l,h=a[33]+"";return{key:e,first:null,c(){t=s("td"),l=c(h),this.h()},l(e){t=n(e,"TD",{class:!0});var a=r(t);l=o(a,h),a.forEach(i),this.h()},h(){f(t,"class","svelte-llwuxz"),this.first=t},m(e,a){u(e,t,a),d(t,l)},p(e,t){a=e,1&t[0]&&h!==(h=a[33]+"")&&w(l,h)},d(e){e&&i(t)}}}function ae(e){let a;function t(e,a){return e[2]==e[29]||e[0][e[29]].activated?Y:X}let s=t(e),c=s(e);return{c(){c.c(),a=v()},l(e){c.l(e),a=v()},m(e,t){c.m(e,t),u(e,a,t)},p(e,l){s===(s=t(e))&&c?c.p(e,l):(c.d(1),c=s(e),c&&(c.c(),c.m(a.parentNode,a)))},d(e){c.d(e),e&&i(a)}}}function te(e){let a,t,v,g,E,m,w,b,y,T,k,x,S,D,I,N=e[4],A=[];for(let s=0;s<N.length;s+=1)A[s]=le(F(e,N,s));return{c(){a=s("table"),t=s("thead"),v=s("tr"),g=s("th"),E=c("ShortID"),m=l(),w=s("th"),b=c("Name"),y=l(),T=s("th"),k=c("Ports"),x=l(),S=s("th"),D=c("Actions"),I=l();for(let e=0;e<A.length;e+=1)A[e].c();this.h()},l(e){a=n(e,"TABLE",{class:!0});var s=r(a);t=n(s,"THEAD",{});var c=r(t);v=n(c,"TR",{class:!0});var l=r(v);g=n(l,"TH",{});var f=r(g);E=o(f,"ShortID"),f.forEach(i),m=h(l),w=n(l,"TH",{});var u=r(w);b=o(u,"Name"),u.forEach(i),y=h(l),T=n(l,"TH",{});var d=r(T);k=o(d,"Ports"),d.forEach(i),x=h(l),S=n(l,"TH",{});var p=r(S);D=o(p,"Actions"),p.forEach(i),l.forEach(i),c.forEach(i),I=h(s);for(let a=0;a<A.length;a+=1)A[a].l(s);s.forEach(i),this.h()},h(){f(v,"class","w3-dark-grey"),f(a,"class","w3-table-all w3-centered")},m(e,s){u(e,a,s),d(a,t),d(t,v),d(v,g),d(g,E),d(v,m),d(v,w),d(w,b),d(v,y),d(v,T),d(T,k),d(v,x),d(v,S),d(S,D),d(a,I);for(let t=0;t<A.length;t+=1)A[t].m(a,null)},p(e,t){if(12336&t[0]){let s;for(N=e[4],s=0;s<N.length;s+=1){const c=F(e,N,s);A[s]?A[s].p(c,t):(A[s]=le(c),A[s].c(),A[s].m(a,null))}for(;s<A.length;s+=1)A[s].d(1);A.length=N.length}},d(e){e&&i(a),p(A,e)}}}function se(e){let a,t,v,p,g,m,b,y,T,k,x,S,D,I,A,B,C,O,H,z,_,U=e[36]+"",V=e[37]+"",P=e[38]+"";return{c(){a=s("tr"),t=s("td"),v=c(U),p=l(),g=s("td"),m=c(V),b=l(),y=s("td"),T=c(P),k=l(),x=s("td"),S=s("div"),D=s("div"),I=s("button"),A=c("Activate"),B=l(),C=s("button"),O=c("Deactivate"),H=l(),this.h()},l(e){a=n(e,"TR",{index:!0});var s=r(a);t=n(s,"TD",{class:!0});var c=r(t);v=o(c,U),c.forEach(i),p=h(s),g=n(s,"TD",{class:!0});var l=r(g);m=o(l,V),l.forEach(i),b=h(s),y=n(s,"TD",{class:!0});var f=r(y);T=o(f,P),f.forEach(i),k=h(s),x=n(s,"TD",{class:!0});var u=r(x);S=n(u,"DIV",{class:!0});var d=r(S);D=n(d,"DIV",{class:!0});var E=r(D);I=n(E,"BUTTON",{});var w=r(I);A=o(w,"Activate"),w.forEach(i),B=h(E),C=n(E,"BUTTON",{});var N=r(C);O=o(N,"Deactivate"),N.forEach(i),E.forEach(i),d.forEach(i),u.forEach(i),H=h(s),s.forEach(i),this.h()},h(){f(t,"class","svelte-llwuxz"),f(g,"class","svelte-llwuxz"),f(y,"class","svelte-llwuxz"),f(D,"class","w3-bar"),f(S,"class","w3-show-inline-block"),f(x,"class","svelte-llwuxz"),f(a,"index",e[29])},m(s,c){u(s,a,c),d(a,t),d(t,v),d(a,p),d(a,g),d(g,m),d(a,b),d(a,y),d(y,T),d(a,k),d(a,x),d(x,S),d(S,D),d(D,I),d(I,A),d(D,B),d(D,C),d(C,O),d(a,H),z||(_=[E(I,"click",e[12]),E(C,"click",e[13])],z=!0)},p(e,a){16&a[0]&&U!==(U=e[36]+"")&&w(v,U),16&a[0]&&V!==(V=e[37]+"")&&w(m,V),16&a[0]&&P!==(P=e[38]+"")&&w(T,P)},d(e){e&&i(a),z=!1,N(_)}}}function ce(e){let a,t,v,p,g,m,b,y,T,k,x,S,D,I,A,B,C,O,H,z,_,U,V=e[36]+"",P=e[37]+"",R=e[38]+"";return{c(){a=s("tr"),t=s("td"),v=c(V),p=l(),g=s("td"),m=c(P),b=l(),y=s("td"),T=c(R),k=l(),x=s("td"),S=s("div"),D=s("div"),I=s("button"),A=c("Activate"),B=l(),C=s("button"),O=c("Deactivate"),H=l(),this.h()},l(e){a=n(e,"TR",{index:!0,style:!0});var s=r(a);t=n(s,"TD",{class:!0});var c=r(t);v=o(c,V),c.forEach(i),p=h(s),g=n(s,"TD",{class:!0});var l=r(g);m=o(l,P),l.forEach(i),b=h(s),y=n(s,"TD",{class:!0});var f=r(y);T=o(f,R),f.forEach(i),k=h(s),x=n(s,"TD",{class:!0});var u=r(x);S=n(u,"DIV",{class:!0});var d=r(S);D=n(d,"DIV",{class:!0});var E=r(D);I=n(E,"BUTTON",{});var w=r(I);A=o(w,"Activate"),w.forEach(i),B=h(E),C=n(E,"BUTTON",{});var N=r(C);O=o(N,"Deactivate"),N.forEach(i),E.forEach(i),d.forEach(i),u.forEach(i),H=h(s),s.forEach(i),this.h()},h(){f(t,"class","svelte-llwuxz"),f(g,"class","svelte-llwuxz"),f(y,"class","svelte-llwuxz"),f(D,"class","w3-bar"),f(S,"class","w3-show-inline-block"),f(x,"class","svelte-llwuxz"),f(a,"index",e[29]),f(a,"style",z=e[5][e[29]])},m(s,c){u(s,a,c),d(a,t),d(t,v),d(a,p),d(a,g),d(g,m),d(a,b),d(a,y),d(y,T),d(a,k),d(a,x),d(x,S),d(S,D),d(D,I),d(I,A),d(D,B),d(D,C),d(C,O),d(a,H),_||(U=[E(I,"click",e[12]),E(C,"click",e[13])],_=!0)},p(e,t){16&t[0]&&V!==(V=e[36]+"")&&w(v,V),16&t[0]&&P!==(P=e[37]+"")&&w(m,P),16&t[0]&&R!==(R=e[38]+"")&&w(T,R),32&t[0]&&z!==(z=e[5][e[29]])&&f(a,"style",z)},d(e){e&&i(a),_=!1,N(U)}}}function le(e){let a;function t(e,a){return e[29]in e[5]?ce:se}let s=t(e),c=s(e);return{c(){c.c(),a=v()},l(e){c.l(e),a=v()},m(e,t){c.m(e,t),u(e,a,t)},p(e,l){s===(s=t(e))&&c?c.p(e,l):(c.d(1),c=s(e),c&&(c.c(),c.m(a.parentNode,a)))},d(e){c.d(e),e&&i(a)}}}function ne(e){let a,t=e[1].configurations.length>0&&re(e);return{c(){t&&t.c(),a=v()},l(e){t&&t.l(e),a=v()},m(e,s){t&&t.m(e,s),u(e,a,s)},p(e,s){e[1].configurations.length>0?t?t.p(e,s):(t=re(e),t.c(),t.m(a.parentNode,a)):t&&(t.d(1),t=null)},d(e){t&&t.d(e),e&&i(a)}}}function re(e){let a,t=e[1].configurations,s=[];for(let c=0;c<t.length;c+=1)s[c]=de(J(e,t,c));return{c(){for(let e=0;e<s.length;e+=1)s[e].c();a=v()},l(e){for(let a=0;a<s.length;a+=1)s[a].l(e);a=v()},m(e,t){for(let a=0;a<s.length;a+=1)s[a].m(e,t);u(e,a,t)},p(e,c){if(1026&c[0]){let l;for(t=e[1].configurations,l=0;l<t.length;l+=1){const n=J(e,t,l);s[l]?s[l].p(n,c):(s[l]=de(n),s[l].c(),s[l].m(a.parentNode,a))}for(;l<s.length;l+=1)s[l].d(1);s.length=t.length}},d(e){p(s,e),e&&i(a)}}}function oe(e){let a,t,v,p,g,E,m,b=e[32]+"";return{c(){a=s("label"),t=s("b"),v=c(b),p=l(),g=s("input"),this.h()},l(e){a=n(e,"LABEL",{class:!0});var s=r(a);t=n(s,"B",{});var c=r(t);v=o(c,b),c.forEach(i),s.forEach(i),p=h(e),g=n(e,"INPUT",{class:!0,type:!0,key:!0,value:!0}),this.h()},h(){f(a,"class",""),f(g,"class","w3-input w3-border"),f(g,"type","list"),f(g,"key",E=e[32]),g.value=m=e[33].join()},m(e,s){u(e,a,s),d(a,t),d(t,v),u(e,p,s),u(e,g,s)},p(e,a){2&a[0]&&b!==(b=e[32]+"")&&w(v,b),2&a[0]&&E!==(E=e[32])&&f(g,"key",E),2&a[0]&&m!==(m=e[33].join())&&(g.value=m)},d(e){e&&i(a),e&&i(p),e&&i(g)}}}function ie(e){let a,t,v,p,g,E,m,b=e[32]+"";return{c(){a=s("input"),p=l(),g=s("label"),E=s("b"),m=c(b),this.h()},l(e){a=n(e,"INPUT",{class:!0,type:!0,key:!0,checked:!0}),p=h(e),g=n(e,"LABEL",{class:!0});var t=r(g);E=n(t,"B",{});var s=r(E);m=o(s,b),s.forEach(i),t.forEach(i),this.h()},h(){f(a,"class","w3-check"),f(a,"type","checkbox"),f(a,"key",t=e[32]),a.checked=v=e[33],f(g,"class","")},m(e,t){u(e,a,t),u(e,p,t),u(e,g,t),d(g,E),d(E,m)},p(e,s){2&s[0]&&t!==(t=e[32])&&f(a,"key",t),2&s[0]&&v!==(v=e[33])&&(a.checked=v),2&s[0]&&b!==(b=e[32]+"")&&w(m,b)},d(e){e&&i(a),e&&i(p),e&&i(g)}}}function he(e){let a,t,v,p,g,E,m,b=e[32]+"";return{c(){a=s("label"),t=s("b"),v=c(b),p=l(),g=s("input"),this.h()},l(e){a=n(e,"LABEL",{class:!0});var s=r(a);t=n(s,"B",{});var c=r(t);v=o(c,b),c.forEach(i),s.forEach(i),p=h(e),g=n(e,"INPUT",{class:!0,type:!0,key:!0,value:!0}),this.h()},h(){f(a,"class",""),f(g,"class","w3-input w3-border"),f(g,"type","string"),f(g,"key",E=e[32]),g.value=m=e[33]},m(e,s){u(e,a,s),d(a,t),d(t,v),u(e,p,s),u(e,g,s)},p(e,a){2&a[0]&&b!==(b=e[32]+"")&&w(v,b),2&a[0]&&E!==(E=e[32])&&f(g,"key",E),2&a[0]&&m!==(m=e[33])&&(g.value=m)},d(e){e&&i(a),e&&i(p),e&&i(g)}}}function fe(e){let a,t,v,p,g,E,m,b=e[32]+"";return{c(){a=s("label"),t=s("b"),v=c(b),p=l(),g=s("input"),this.h()},l(e){a=n(e,"LABEL",{class:!0});var s=r(a);t=n(s,"B",{});var c=r(t);v=o(c,b),c.forEach(i),s.forEach(i),p=h(e),g=n(e,"INPUT",{class:!0,type:!0,convert:!0,key:!0,value:!0}),this.h()},h(){f(a,"class",""),f(g,"class","w3-input w3-border"),f(g,"type","string"),f(g,"convert","required"),f(g,"key",E=e[32]),g.value=m=e[33]},m(e,s){u(e,a,s),d(a,t),d(t,v),u(e,p,s),u(e,g,s)},p(e,a){2&a[0]&&b!==(b=e[32]+"")&&w(v,b),2&a[0]&&E!==(E=e[32])&&f(g,"key",E),2&a[0]&&m!==(m=e[33])&&(g.value=m)},d(e){e&&i(a),e&&i(p),e&&i(g)}}}function ue(e,a){let t;function c(e,a){return"number"==typeof e[33]?fe:"string"==typeof e[33]?he:"boolean"==typeof e[33]?ie:"object"==typeof e[33]?oe:void 0}let l=c(a),o=l&&l(a);return{key:e,first:null,c(){t=s("p"),o&&o.c(),this.h()},l(e){t=n(e,"P",{});var a=r(t);o&&o.l(a),a.forEach(i),this.h()},h(){this.first=t},m(e,a){u(e,t,a),o&&o.m(t,null)},p(e,s){l===(l=c(a=e))&&o?o.p(a,s):(o&&o.d(1),o=l&&l(a),o&&(o.c(),o.m(t,null)))},d(e){e&&i(t),o&&o.d()}}}function de(e){let a,t,v,p,y,T,k,x,S,D,I,N,A,B,C,H,z,_,U,V,P,R,L=e[30].container_info.name+"",j=[],M=new Map,$=Object.entries(e[30].configs);const J=e=>e[32];for(let s=0;s<$.length;s+=1){let a=q(e,$,s),t=J(a);M.set(t,j[s]=ue(t,a))}return{c(){a=s("div"),t=s("div"),v=s("h2"),p=c(L),y=l(),T=s("p"),k=c("Description here from application configs"),x=l(),S=s("div"),D=s("form"),I=s("h5"),N=c("Update Form"),A=l();for(let e=0;e<j.length;e+=1)j[e].c();B=l(),C=s("p"),H=s("input"),U=l(),V=s("hr"),this.h()},l(e){a=n(e,"DIV",{class:!0});var s=r(a);t=n(s,"DIV",{class:!0});var c=r(t);v=n(c,"H2",{class:!0,style:!0});var l=r(v);p=o(l,L),l.forEach(i),y=h(c),T=n(c,"P",{});var f=r(T);k=o(f,"Description here from application configs"),f.forEach(i),c.forEach(i),x=h(s),S=n(s,"DIV",{class:!0});var u=r(S);D=n(u,"FORM",{name:!0,port:!0,index:!0,class:!0});var d=r(D);I=n(d,"H5",{class:!0,style:!0});var g=r(I);N=o(g,"Update Form"),g.forEach(i),A=h(d);for(let a=0;a<j.length;a+=1)j[a].l(d);B=h(d),C=n(d,"P",{});var E=r(C);H=n(E,"INPUT",{class:!0,type:!0,value:!0}),E.forEach(i),d.forEach(i),u.forEach(i),s.forEach(i),U=h(e),V=n(e,"HR",{class:!0}),this.h()},h(){f(v,"class","w3-text-orange"),g(v,"text-shadow","1px 1px 0 #444"),f(t,"class","w3-third w3-container w3-blue"),f(I,"class","w3-text-orange"),g(I,"text-shadow","1px 1px 0 #444"),f(H,"class","w3-blue"),f(H,"type","submit"),H.value="Update",f(D,"name",z=e[30].container_info.name),f(D,"port",_=e[30].container_info.ports),f(D,"index",e[29]),f(D,"class","w3-container"),f(S,"class","w3-twothird w3-container w3-gray"),f(a,"class","w3-row w3-border"),f(V,"class","svelte-llwuxz")},m(s,c){u(s,a,c),d(a,t),d(t,v),d(v,p),d(t,y),d(t,T),d(T,k),d(a,x),d(a,S),d(S,D),d(D,I),d(I,N),d(D,A);for(let e=0;e<j.length;e+=1)j[e].m(D,null);d(D,B),d(D,C),d(C,H),u(s,U,c),u(s,V,c),P||(R=E(D,"submit",m(e[10])),P=!0)},p(e,a){2&a[0]&&L!==(L=e[30].container_info.name+"")&&w(p,L),2&a[0]&&($=Object.entries(e[30].configs),j=b(j,a,J,1,e,$,M,D,O,ue,B,q)),2&a[0]&&z!==(z=e[30].container_info.name)&&f(D,"name",z),2&a[0]&&_!==(_=e[30].container_info.ports)&&f(D,"port",_)},d(e){e&&i(a);for(let a=0;a<j.length;a+=1)j[a].d();e&&i(U),e&&i(V),P=!1,R()}}}function ve(e){let a,t=e[6],s=[];for(let c=0;c<t.length;c+=1)s[c]=pe($(e,t,c));return{c(){for(let e=0;e<s.length;e+=1)s[e].c();a=v()},l(e){for(let a=0;a<s.length;a+=1)s[a].l(e);a=v()},m(e,t){for(let a=0;a<s.length;a+=1)s[a].m(e,t);u(e,a,t)},p(e,c){if(64&c[0]){let l;for(t=e[6],l=0;l<t.length;l+=1){const n=$(e,t,l);s[l]?s[l].p(n,c):(s[l]=pe(n),s[l].c(),s[l].m(a.parentNode,a))}for(;l<s.length;l+=1)s[l].d(1);s.length=t.length}},d(e){p(s,e),e&&i(a)}}}function pe(e){let a,t,v,p,g,E,m,b=e[27]+"";return{c(){a=s("label"),t=c(b),v=l(),p=s("input"),g=l(),E=s("span"),m=l(),this.h()},l(e){a=n(e,"LABEL",{class:!0});var s=r(a);t=o(s,b),v=h(s),p=n(s,"INPUT",{type:!0,checked:!0,name:!0,class:!0}),g=h(s),E=n(s,"SPAN",{class:!0}),r(E).forEach(i),m=h(s),s.forEach(i),this.h()},h(){f(p,"type","radio"),p.checked="checked",f(p,"name","radio"),f(p,"class","svelte-llwuxz"),f(E,"class","checkmark svelte-llwuxz"),f(a,"class","container svelte-llwuxz")},m(e,s){u(e,a,s),d(a,t),d(a,v),d(a,p),d(a,g),d(a,E),d(a,m)},p(e,a){64&a[0]&&b!==(b=e[27]+"")&&w(t,b)},d(e){e&&i(a)}}}function ge(e){let a,t,v,p,m,w,b,A,B,C,O,z,_,U,V,P,R,L,j,$,J,q,F,G,Q,K,X,Y,Z,ee,ae,se,ce,le,re,oe,ie,he,fe,ue,de,pe,ge,Ee,we,be,ye,Te,ke,xe,Se,De,Ie,Ne,Ae,Be,Ce,Oe,He,ze,_e,Ue,Ve,Pe,Re,Le,je,Me,$e,Je,qe,Fe,Ge,Qe,Ke,We,Xe,Ye,Ze,ea,aa,ta,sa,ca,la,na,ra,oa,ia,ha,fa,ua,da,va,pa,ga,Ea,ma,wa,ba,ya,Ta,ka,xa,Sa,Da,Ia,Na,Aa,Ba,Ca,Oa,Ha,za,_a,Ua,Va,Pa,Ra,La,ja,Ma,$a,Ja,qa,Fa,Ga,Qa,Ka,Wa,Xa,Ya,Za,et,at,tt,st,ct,lt,nt,rt,ot,it,ht,ft,ut,dt,vt,pt,gt,Et,mt,wt,bt,yt,Tt,kt,xt,St,Dt,It,Nt,At,Bt,Ct,Ot,Ht,zt,_t,Ut,Vt,Pt,Rt,Lt;t=new H({});let jt=e[0].length>0&&W(e),Mt=e[4].length>0&&te(e),$t="configurations"in e[1]&&ne(e),Jt=e[6].length>0&&ve(e);return{c(){a=l(),y(t.$$.fragment),v=l(),p=s("hr"),m=l(),w=s("div"),b=s("h1"),A=s("b"),B=c("Scenario Management"),C=l(),O=s("hr"),z=l(),_=s("section"),U=s("h3"),V=c("Select scenario"),P=l(),R=s("section"),jt&&jt.c(),L=l(),j=s("div"),$=s("div"),J=s("button"),q=c("Create Scenario"),F=l(),G=s("div"),Q=s("input"),K=l(),X=s("div"),Y=s("div"),Z=s("button"),ee=c("Rename Scenario"),ae=l(),se=s("div"),ce=s("input"),le=l(),re=s("div"),oe=s("input"),ie=l(),he=s("hr"),fe=l(),ue=s("div"),de=s("h1"),pe=s("b"),ge=c("Scenario Type"),Ee=l(),we=s("div"),be=s("div"),ye=s("a"),Te=s("div"),ke=c("Communication"),xe=l(),Se=s("a"),De=s("div"),Ie=c("Static"),Ne=l(),Ae=s("a"),Be=s("div"),Ce=c("Driving Simulation"),Oe=l(),He=s("div"),ze=s("hr"),_e=l(),Ue=s("div"),Ve=s("h1"),Pe=s("b"),Re=c("Configuration"),Le=l(),je=s("hr"),Me=l(),$e=s("section"),Je=s("h3"),qe=s("b"),Fe=c("Select containers"),Ge=l(),Qe=s("section"),Mt&&Mt.c(),Ke=l(),We=s("hr"),Xe=l(),Ye=s("section"),Ze=s("h3"),ea=s("b"),aa=c("Configure containers"),ta=l(),sa=s("section"),$t&&$t.c(),la=l(),na=s("div"),ra=s("hr"),oa=l(),ia=s("div"),ha=s("h1"),fa=s("b"),ua=c("Configuration"),da=l(),va=s("hr"),pa=l(),ga=s("section"),Ea=s("h3"),ma=s("b"),wa=c("Select Static Datasets"),ba=l(),Jt&&Jt.c(),ya=l(),Ta=s("hr"),ka=l(),xa=s("section"),Sa=s("h3"),Da=s("b"),Ia=c("Generate Attack"),Na=l(),Aa=s("label"),Ba=c("Image Blurring\n            "),Ca=s("input"),Oa=l(),Ha=s("span"),za=l(),_a=s("label"),Ua=c("Blacking Images\n            "),Va=s("input"),Pa=l(),Ra=s("span"),La=l(),ja=s("hr"),Ma=l(),$a=s("section"),Ja=s("h3"),qa=s("b"),Fa=c("Validate Dataset"),Ga=l(),Qa=s("input"),Ka=l(),Wa=s("label"),Xa=s("b"),Ya=c("Algorithm1"),et=l(),at=s("div"),tt=s("hr"),st=l(),ct=s("div"),lt=s("h1"),nt=s("b"),rt=c("Configuration"),ot=l(),it=s("hr"),ht=l(),ft=s("section"),ut=s("h3"),dt=s("b"),vt=c("Select Driving Path"),pt=l(),gt=s("hr"),Et=l(),mt=s("section"),wt=s("h3"),bt=s("b"),yt=c("Select Sensors"),Tt=l(),kt=s("hr"),xt=l(),St=s("section"),Dt=s("h3"),It=s("b"),Nt=c("Attack Configuration"),Bt=l(),Ct=s("button"),Ot=c("Reset Configurations"),Ht=l(),zt=s("button"),_t=c("Save Configurations"),Ut=l(),Vt=s("hr"),this.h()},l(e){T('[data-svelte="svelte-101i1i0"]',M.head).forEach(i),a=h(e),k(t.$$.fragment,e),v=h(e),p=n(e,"HR",{class:!0}),m=h(e),w=n(e,"DIV",{class:!0});var s=r(w);b=n(s,"H1",{class:!0,style:!0});var c=r(b);A=n(c,"B",{});var l=r(A);B=o(l,"Scenario Management"),l.forEach(i),c.forEach(i),s.forEach(i),C=h(e),O=n(e,"HR",{class:!0}),z=h(e),_=n(e,"SECTION",{class:!0});var f=r(_);U=n(f,"H3",{});var u=r(U);V=o(u,"Select scenario"),u.forEach(i),f.forEach(i),P=h(e),R=n(e,"SECTION",{class:!0});var d=r(R);jt&&jt.l(d),L=h(d),j=n(d,"DIV",{class:!0});var g=r(j);$=n(g,"DIV",{class:!0});var E=r($);J=n(E,"BUTTON",{ref:!0,class:!0});var y=r(J);q=o(y,"Create Scenario"),y.forEach(i),E.forEach(i),F=h(g),G=n(g,"DIV",{class:!0});var x=r(G);Q=n(x,"INPUT",{id:!0,class:!0,name:!0,type:!0,placeholder:!0}),x.forEach(i),g.forEach(i),K=h(d),X=n(d,"DIV",{class:!0});var S=r(X);Y=n(S,"DIV",{class:!0});var D=r(Y);Z=n(D,"BUTTON",{ref:!0,class:!0});var I=r(Z);ee=o(I,"Rename Scenario"),I.forEach(i),D.forEach(i),ae=h(S),se=n(S,"DIV",{class:!0});var N=r(se);ce=n(N,"INPUT",{id:!0,class:!0,name:!0,type:!0,placeholder:!0}),N.forEach(i),le=h(S),re=n(S,"DIV",{class:!0});var H=r(re);oe=n(H,"INPUT",{id:!0,class:!0,name:!0,type:!0,placeholder:!0}),H.forEach(i),S.forEach(i),d.forEach(i),ie=h(e),he=n(e,"HR",{class:!0}),fe=h(e),ue=n(e,"DIV",{class:!0});var W=r(ue);de=n(W,"H1",{class:!0,style:!0});var te=r(de);pe=n(te,"B",{});var ne=r(pe);ge=o(ne,"Scenario Type"),ne.forEach(i),te.forEach(i),W.forEach(i),Ee=h(e),we=n(e,"DIV",{class:!0});var ve=r(we);be=n(ve,"DIV",{class:!0});var me=r(be);ye=n(me,"A",{href:!0});var ca=r(ye);Te=n(ca,"DIV",{class:!0});var Za=r(Te);ke=o(Za,"Communication"),Za.forEach(i),ca.forEach(i),xe=h(me),Se=n(me,"A",{href:!0});var At=r(Se);De=n(At,"DIV",{class:!0});var Pt=r(De);Ie=o(Pt,"Static"),Pt.forEach(i),At.forEach(i),Ne=h(me),Ae=n(me,"A",{href:!0});var Rt=r(Ae);Be=n(Rt,"DIV",{class:!0});var Lt=r(Be);Ce=o(Lt,"Driving Simulation"),Lt.forEach(i),Rt.forEach(i),me.forEach(i),Oe=h(ve),He=n(ve,"DIV",{id:!0,class:!0,style:!0});var qt=r(He);ze=n(qt,"HR",{class:!0}),_e=h(qt),Ue=n(qt,"DIV",{class:!0});var Ft=r(Ue);Ve=n(Ft,"H1",{class:!0,style:!0});var Gt=r(Ve);Pe=n(Gt,"B",{});var Qt=r(Pe);Re=o(Qt,"Configuration"),Qt.forEach(i),Gt.forEach(i),Ft.forEach(i),Le=h(qt),je=n(qt,"HR",{class:!0}),Me=h(qt),$e=n(qt,"SECTION",{class:!0});var Kt=r($e);Je=n(Kt,"H3",{});var Wt=r(Je);qe=n(Wt,"B",{});var Xt=r(qe);Fe=o(Xt,"Select containers"),Xt.forEach(i),Wt.forEach(i),Kt.forEach(i),Ge=h(qt),Qe=n(qt,"SECTION",{class:!0});var Yt=r(Qe);Mt&&Mt.l(Yt),Yt.forEach(i),Ke=h(qt),We=n(qt,"HR",{class:!0}),Xe=h(qt),Ye=n(qt,"SECTION",{class:!0});var Zt=r(Ye);Ze=n(Zt,"H3",{});var es=r(Ze);ea=n(es,"B",{});var as=r(ea);aa=o(as,"Configure containers"),as.forEach(i),es.forEach(i),Zt.forEach(i),ta=h(qt),sa=n(qt,"SECTION",{class:!0});var ts=r(sa);$t&&$t.l(ts),ts.forEach(i),qt.forEach(i),la=h(ve),na=n(ve,"DIV",{id:!0,class:!0,style:!0});var ss=r(na);ra=n(ss,"HR",{class:!0}),oa=h(ss),ia=n(ss,"DIV",{class:!0});var cs=r(ia);ha=n(cs,"H1",{class:!0,style:!0});var ls=r(ha);fa=n(ls,"B",{});var ns=r(fa);ua=o(ns,"Configuration"),ns.forEach(i),ls.forEach(i),cs.forEach(i),da=h(ss),va=n(ss,"HR",{class:!0}),pa=h(ss),ga=n(ss,"SECTION",{class:!0});var rs=r(ga);Ea=n(rs,"H3",{});var os=r(Ea);ma=n(os,"B",{});var is=r(ma);wa=o(is,"Select Static Datasets"),is.forEach(i),os.forEach(i),ba=h(rs),Jt&&Jt.l(rs),rs.forEach(i),ya=h(ss),Ta=n(ss,"HR",{class:!0}),ka=h(ss),xa=n(ss,"SECTION",{class:!0});var hs=r(xa);Sa=n(hs,"H3",{});var fs=r(Sa);Da=n(fs,"B",{});var us=r(Da);Ia=o(us,"Generate Attack"),us.forEach(i),fs.forEach(i),Na=h(hs),Aa=n(hs,"LABEL",{class:!0});var ds=r(Aa);Ba=o(ds,"Image Blurring\n            "),Ca=n(ds,"INPUT",{type:!0,checked:!0,name:!0,class:!0}),Oa=h(ds),Ha=n(ds,"SPAN",{class:!0}),r(Ha).forEach(i),ds.forEach(i),za=h(hs),_a=n(hs,"LABEL",{class:!0});var vs=r(_a);Ua=o(vs,"Blacking Images\n            "),Va=n(vs,"INPUT",{type:!0,checked:!0,name:!0,class:!0}),Pa=h(vs),Ra=n(vs,"SPAN",{class:!0}),r(Ra).forEach(i),vs.forEach(i),hs.forEach(i),La=h(ss),ja=n(ss,"HR",{class:!0}),Ma=h(ss),$a=n(ss,"SECTION",{class:!0});var ps=r($a);Ja=n(ps,"H3",{});var gs=r(Ja);qa=n(gs,"B",{});var Es=r(qa);Fa=o(Es,"Validate Dataset"),Es.forEach(i),gs.forEach(i),Ga=h(ps),Qa=n(ps,"INPUT",{class:!0,type:!0,checked:!0}),Ka=h(ps),Wa=n(ps,"LABEL",{class:!0});var ms=r(Wa);Xa=n(ms,"B",{});var ws=r(Xa);Ya=o(ws,"Algorithm1"),ws.forEach(i),ms.forEach(i),ps.forEach(i),ss.forEach(i),et=h(ve),at=n(ve,"DIV",{id:!0,class:!0,style:!0});var bs=r(at);tt=n(bs,"HR",{class:!0}),st=h(bs),ct=n(bs,"DIV",{class:!0});var ys=r(ct);lt=n(ys,"H1",{class:!0,style:!0});var Ts=r(lt);nt=n(Ts,"B",{});var ks=r(nt);rt=o(ks,"Configuration"),ks.forEach(i),Ts.forEach(i),ys.forEach(i),ot=h(bs),it=n(bs,"HR",{class:!0}),ht=h(bs),ft=n(bs,"SECTION",{class:!0});var xs=r(ft);ut=n(xs,"H3",{});var Ss=r(ut);dt=n(Ss,"B",{});var Ds=r(dt);vt=o(Ds,"Select Driving Path"),Ds.forEach(i),Ss.forEach(i),xs.forEach(i),pt=h(bs),gt=n(bs,"HR",{class:!0}),Et=h(bs),mt=n(bs,"SECTION",{class:!0});var Is=r(mt);wt=n(Is,"H3",{});var Ns=r(wt);bt=n(Ns,"B",{});var As=r(bt);yt=o(As,"Select Sensors"),As.forEach(i),Ns.forEach(i),Is.forEach(i),Tt=h(bs),kt=n(bs,"HR",{class:!0}),xt=h(bs),St=n(bs,"SECTION",{class:!0});var Bs=r(St);Dt=n(Bs,"H3",{});var Cs=r(Dt);It=n(Cs,"B",{});var Os=r(It);Nt=o(Os,"Attack Configuration"),Os.forEach(i),Cs.forEach(i),Bs.forEach(i),bs.forEach(i),ve.forEach(i),Bt=h(e),Ct=n(e,"BUTTON",{class:!0});var Hs=r(Ct);Ot=o(Hs,"Reset Configurations"),Hs.forEach(i),Ht=h(e),zt=n(e,"BUTTON",{class:!0});var zs=r(zt);_t=o(zs,"Save Configurations"),zs.forEach(i),Ut=h(e),Vt=n(e,"HR",{class:!0}),this.h()},h(){M.title="Configuration and Scheduling",f(p,"class","svelte-llwuxz"),f(b,"class","w3-text-yellow"),g(b,"text-shadow","1px 1px 0 #444"),f(w,"class","w3-panel w3-blue"),f(O,"class","svelte-llwuxz"),f(_,"class","page-headline"),f(J,"ref","createNewScenario"),f(J,"class","w3-col w3-input w3-border"),f($,"class","w3-third"),f(Q,"id","createNewScenario"),f(Q,"class","w3-input w3-border"),f(Q,"name","name"),f(Q,"type","text"),f(Q,"placeholder","Scenario Name"),f(G,"class","w3-rest"),f(j,"class","w3-row w3-section"),f(Z,"ref","renameScenario"),f(Z,"class","w3-col w3-input w3-border"),f(Y,"class","w3-third"),f(ce,"id","renameScenarioID"),f(ce,"class","w3-input w3-border"),f(ce,"name","id"),f(ce,"type","text"),f(ce,"placeholder","Scenario Identifier"),f(se,"class","w3-third"),f(oe,"id","renameScenario"),f(oe,"class","w3-input w3-border"),f(oe,"name","name"),f(oe,"type","text"),f(oe,"placeholder","Scenario Name"),f(re,"class","w3-rest"),f(X,"class","w3-row w3-section"),f(R,"class","w3-container"),f(he,"class","svelte-llwuxz"),f(de,"class","w3-text-yellow"),g(de,"text-shadow","1px 1px 0 #444"),f(ue,"class","w3-panel w3-blue"),f(Te,"class","w3-third tablink w3-bottombar w3-hover-light-grey w3-padding"),f(ye,"href","javascript:void(0)"),f(De,"class","w3-third tablink w3-bottombar w3-hover-light-grey w3-padding"),f(Se,"href","javascript:void(0)"),f(Be,"class","w3-third tablink w3-bottombar w3-hover-light-grey w3-padding"),f(Ae,"href","javascript:void(0)"),f(be,"class","w3-row"),f(ze,"class","svelte-llwuxz"),f(Ve,"class","w3-text-yellow"),g(Ve,"text-shadow","1px 1px 0 #444"),f(Ue,"class","w3-panel w3-blue"),f(je,"class","svelte-llwuxz"),f($e,"class","page-headline"),f(Qe,"class","w3-container"),f(We,"class","svelte-llwuxz"),f(Ye,"class","page-headline"),f(sa,"class","w3-container"),f(He,"id","Communication"),f(He,"class","w3-container city"),f(He,"style",ca=e[3].Communication),f(ra,"class","svelte-llwuxz"),f(ha,"class","w3-text-yellow"),g(ha,"text-shadow","1px 1px 0 #444"),f(ia,"class","w3-panel w3-blue"),f(va,"class","svelte-llwuxz"),f(ga,"class","page-headline"),f(Ta,"class","svelte-llwuxz"),f(Ca,"type","radio"),Ca.checked="checked",f(Ca,"name","radio2"),f(Ca,"class","svelte-llwuxz"),f(Ha,"class","checkmark svelte-llwuxz"),f(Aa,"class","container svelte-llwuxz"),f(Va,"type","radio"),Va.checked="checked",f(Va,"name","radio2"),f(Va,"class","svelte-llwuxz"),f(Ra,"class","checkmark svelte-llwuxz"),f(_a,"class","container svelte-llwuxz"),f(xa,"class","page-headline"),f(ja,"class","svelte-llwuxz"),f(Qa,"class","w3-check"),f(Qa,"type","checkbox"),Qa.checked="",f(Wa,"class",""),f($a,"class","page-headline"),f(na,"id","Static"),f(na,"class","w3-container city"),f(na,"style",Za=e[3].Static),f(tt,"class","svelte-llwuxz"),f(lt,"class","w3-text-yellow"),g(lt,"text-shadow","1px 1px 0 #444"),f(ct,"class","w3-panel w3-blue"),f(it,"class","svelte-llwuxz"),f(ft,"class","page-headline"),f(gt,"class","svelte-llwuxz"),f(mt,"class","page-headline"),f(kt,"class","svelte-llwuxz"),f(St,"class","page-headline"),f(at,"id","Driving Simulation"),f(at,"class","w3-container city"),f(at,"style",At=e[3]["Driving Simulation"]),f(we,"class","w3-container"),f(Ct,"class","w3-col w3-input w3-border w3-margin-bottom"),f(zt,"class","w3-col w3-input w3-border w3-margin-top"),f(Vt,"class","svelte-llwuxz")},m(s,c){u(s,a,c),x(t,s,c),u(s,v,c),u(s,p,c),u(s,m,c),u(s,w,c),d(w,b),d(b,A),d(A,B),u(s,C,c),u(s,O,c),u(s,z,c),u(s,_,c),d(_,U),d(U,V),u(s,P,c),u(s,R,c),jt&&jt.m(R,null),d(R,L),d(R,j),d(j,$),d($,J),d(J,q),d(j,F),d(j,G),d(G,Q),d(R,K),d(R,X),d(X,Y),d(Y,Z),d(Z,ee),d(X,ae),d(X,se),d(se,ce),d(X,le),d(X,re),d(re,oe),u(s,ie,c),u(s,he,c),u(s,fe,c),u(s,ue,c),d(ue,de),d(de,pe),d(pe,ge),u(s,Ee,c),u(s,we,c),d(we,be),d(be,ye),d(ye,Te),d(Te,ke),d(be,xe),d(be,Se),d(Se,De),d(De,Ie),d(be,Ne),d(be,Ae),d(Ae,Be),d(Be,Ce),d(we,Oe),d(we,He),d(He,ze),d(He,_e),d(He,Ue),d(Ue,Ve),d(Ve,Pe),d(Pe,Re),d(He,Le),d(He,je),d(He,Me),d(He,$e),d($e,Je),d(Je,qe),d(qe,Fe),d(He,Ge),d(He,Qe),Mt&&Mt.m(Qe,null),d(He,Ke),d(He,We),d(He,Xe),d(He,Ye),d(Ye,Ze),d(Ze,ea),d(ea,aa),d(He,ta),d(He,sa),$t&&$t.m(sa,null),d(we,la),d(we,na),d(na,ra),d(na,oa),d(na,ia),d(ia,ha),d(ha,fa),d(fa,ua),d(na,da),d(na,va),d(na,pa),d(na,ga),d(ga,Ea),d(Ea,ma),d(ma,wa),d(ga,ba),Jt&&Jt.m(ga,null),d(na,ya),d(na,Ta),d(na,ka),d(na,xa),d(xa,Sa),d(Sa,Da),d(Da,Ia),d(xa,Na),d(xa,Aa),d(Aa,Ba),d(Aa,Ca),d(Aa,Oa),d(Aa,Ha),d(xa,za),d(xa,_a),d(_a,Ua),d(_a,Va),d(_a,Pa),d(_a,Ra),d(na,La),d(na,ja),d(na,Ma),d(na,$a),d($a,Ja),d(Ja,qa),d(qa,Fa),d($a,Ga),d($a,Qa),d($a,Ka),d($a,Wa),d(Wa,Xa),d(Xa,Ya),d(we,et),d(we,at),d(at,tt),d(at,st),d(at,ct),d(ct,lt),d(lt,nt),d(nt,rt),d(at,ot),d(at,it),d(at,ht),d(at,ft),d(ft,ut),d(ut,dt),d(dt,vt),d(at,pt),d(at,gt),d(at,Et),d(at,mt),d(mt,wt),d(wt,bt),d(bt,yt),d(at,Tt),d(at,kt),d(at,xt),d(at,St),d(St,Dt),d(Dt,It),d(It,Nt),u(s,Bt,c),u(s,Ct,c),d(Ct,Ot),u(s,Ht,c),u(s,zt,c),d(zt,_t),u(s,Ut,c),u(s,Vt,c),Pt=!0,Rt||(Lt=[E(J,"click",e[16]),E(Z,"click",e[14]),E(Te,"click",e[7]),E(ye,"click",me),E(De,"click",e[7]),E(Se,"click",me),E(Be,"click",e[7]),E(Ae,"click",me),E(Ct,"click",e[8]),E(zt,"click",e[9])],Rt=!0)},p(e,a){e[0].length>0?jt?jt.p(e,a):(jt=W(e),jt.c(),jt.m(R,L)):jt&&(jt.d(1),jt=null),e[4].length>0?Mt?Mt.p(e,a):(Mt=te(e),Mt.c(),Mt.m(Qe,null)):Mt&&(Mt.d(1),Mt=null),"configurations"in e[1]?$t?$t.p(e,a):($t=ne(e),$t.c(),$t.m(sa,null)):$t&&($t.d(1),$t=null),(!Pt||8&a[0]&&ca!==(ca=e[3].Communication))&&f(He,"style",ca),e[6].length>0?Jt?Jt.p(e,a):(Jt=ve(e),Jt.c(),Jt.m(ga,null)):Jt&&(Jt.d(1),Jt=null),(!Pt||8&a[0]&&Za!==(Za=e[3].Static))&&f(na,"style",Za),(!Pt||8&a[0]&&At!==(At=e[3]["Driving Simulation"]))&&f(at,"style",At)},i(e){Pt||(S(t.$$.fragment,e),Pt=!0)},o(e){D(t.$$.fragment,e),Pt=!1},d(e){e&&i(a),I(t,e),e&&i(v),e&&i(p),e&&i(m),e&&i(w),e&&i(C),e&&i(O),e&&i(z),e&&i(_),e&&i(P),e&&i(R),jt&&jt.d(),e&&i(ie),e&&i(he),e&&i(fe),e&&i(ue),e&&i(Ee),e&&i(we),Mt&&Mt.d(),$t&&$t.d(),Jt&&Jt.d(),e&&i(Bt),e&&i(Ct),e&&i(Ht),e&&i(zt),e&&i(Ut),e&&i(Vt),Rt=!1,N(Lt)}}}function Ee(){console.log(this,"copyScenario")}function me(){let e=this.firstChild.innerText;var a,t,s;for(console.log(this,"this"),t=document.getElementsByClassName("city"),a=0;a<t.length;a++)t[a].style.display="none";for(s=document.getElementsByClassName("tablink"),a=0;a<t.length;a++)s[a].className=s[a].className.replace(" w3-border-red","");document.getElementById(e).style.display="block",this.firstChild.className+=" w3-border-red"}function we(e,a,t){let s=[],c={},l=!1,n="";const r=P.subscribe((e=>{t(0,s=e)})),o=R.subscribe((e=>{t(1,c=e)})),i=L.subscribe((e=>{l=e})),h=j.subscribe((e=>{n=e}));let f;A((()=>{r(),o(),i(),h()}));let u={Communication:"display:none",Static:"display:none","Driving Simulation":"display:none"},d=[{short_id:"123",name:"DoS Attack",ports:"8010"},{short_id:"1243",name:"Replay Attack",ports:"8020"},{short_id:"122",name:"MitM",ports:"8030"}],v={},p=[];function g(){let e=!1;for(let a=0;a<s.length;a++)s[a].activated&&(e=!0);return e}return B((async()=>{t(3,u[n]="display:block",u),async function(e){l?z("/localservices",(function(a){let s=JSON.parse(a.response);s.data&&t(4,d=s.data),e()})):z("/containers",(function(a){let s=JSON.parse(a.response);s.data&&t(4,d=s.data),e()}))}((function(){if(s.length<1)z("/api/db1/scenarios",(function(e){let a=JSON.parse(e.response);if(a.data){for(let e=0;e<a.data.length;e++)a.data[e].activated=!1;P.set(a.data)}}));else if(Object.keys(c).length>0){j.set(c.type);for(var e=0;e<c.configurations.length;e++)for(var a=0;a<d.length;a++){let s=a.toString();d[a].short_id==c.configurations[e].container_info.short_id&&t(5,v[s]="background-color: #acddb4;",v)}}})),async function(){z("/staticfiles",(function(e){let a=JSON.parse(e.response);a.data&&(console.log(a.data),t(6,p=a.data))}))}()})),[s,c,f,u,d,v,p,async function(){j.set(this.innerText);for(let e in u)e==this.innerText?t(3,u[e]="display:block",u):t(3,u[e]="display:none",u)},async function(){if(!g())return void _.danger("please create and activate a scenario first.");let e=[];for(let a=0;a<c.configurations.length;a++){let t=c.configurations[a].container_info.name,s=c.configurations[a].container_info.ports.split(",")[0].split("/")[0],l=V("GET","/containers/"+t+"/"+s+"/configs");e.push(l)}Promise.allSettled(e).then((function(e){for(let a=0;a<e.length;a++)"fulfilled"==e[a].status&&t(1,c.configurations[a].configs=e[a].value.data.data,c);R.set(c)}))},async function(){if(console.log("saving scenario configurations"),!g())return void _.danger("please create and activate a scenario first.");let e="/api/db1/scenario_configurations",a="POST";"_id"in c&&(a="PUT",e="/api/db1/scenario_configurations/"+c._id),t(1,c.type=n,c),U(e,a,c,(function(e){console.log(e,"response from saveContainersConfig"),t(1,c._id=e.data,c),R.set(c),_.success("Configuration saved successfull.")}))},async function(){if(!g())return void _.danger("please create and activate a scenario first.");let e={},a=parseInt(this.getAttribute("index")),s=this.getAttribute("name"),n=this.getAttribute("port").split(",")[0].split("/")[0];console.log(a,s,n,"printing index");let r=this.querySelectorAll("input");for(let t=0;t<r.length;t++){let a=r[t],s=a.getAttribute("type"),c=a.getAttribute("key"),l=a.value;null==l&&(l=""),"submit"!=s&&("checkbox"==s?e[c]=a.checked:"list"==s?e[c]=l.split(","):a.hasAttribute("convert")?e[c]=Number(l):e[c]=l)}if(l){U("/localservices/"+s+"/"+n+"/configs","PUT",e,(function(s){t(1,c.configurations[a].configs=e,c),R.set(c),_.success("Configuration update successfull.")}))}else{U("/containers/"+s+"/"+n+"/configs","POST",e,(function(s){t(1,c.configurations[a].configs=e,c),R.set(c),_.success("Configuration update successfull.")}))}},function(){let e,a=this.parentElement.parentElement.parentElement.parentElement.getAttribute("index");for(let c=0;c<s.length;c++)c==a?(t(2,f=c),t(0,s[c].activated=!0,s),e=s[c]):t(0,s[c].activated=!1,s);P.set(s);for(let s of Object.keys(v))t(5,v[s]="",v);t(1,c={}),t(1,c.ref=e._id,c),t(1,c.name=e.name,c),t(1,c.configurations=[],c),R.set(c);let l="/api/db1/scenario_configurations/ref-"+e._id;z(l,(function(e){let a=JSON.parse(e.response);if(a.data&&a.data.length>0){t(1,c=a.data[0]);for(let e=0;e<d.length;e++){let a=e.toString();t(5,v[a]="",v);let s=d[e].short_id;for(let e=0;e<c.configurations.length;e++){s==c.configurations[e].container_info.short_id&&(t(5,v[a]="background-color: #acddb4;",v),e=c.configurations.length)}}R.set(c)}}))},function(){if(!g())return void _.danger("please create and activate a scenario first.");let e=this.parentElement.parentElement.parentElement.parentElement.getAttribute("index");t(5,v[e]="background-color: #acddb4;",v);let a=d[parseInt(e)],s={},n=a.name,r=a.ports.split(",")[0].split("/")[0];if(l){z("/localservices/"+n+"/"+r+"/configs",(function(e){let t=JSON.parse(e.response);t.data&&"data"in t.data&&(s=t.data.data),c.configurations.push({container_info:a,configs:s}),R.set(c)}))}else{z("/containers/"+n+"/"+r+"/configs",(function(e){let t=JSON.parse(e.response);t.data&&"data"in t.data&&(s=t.data.data),c.configurations.push({container_info:a,configs:s}),R.set(c)}))}},function(){if(!g())return void _.danger("please create and activate a scenario first.");let e=this.parentElement.parentElement.parentElement.parentElement.getAttribute("index");t(5,v[e]="",v);let a=d[parseInt(e)].short_id,s=-1;for(let t=0;t<c.configurations.length;t++)c.configurations[t].container_info.short_id==a&&(s=t,t=c.configurations.length);s>-1&&c.configurations.splice(s,1),R.set(c)},function(){let e=this.getAttribute("ref"),a=document.getElementById(e+"ID"),c=document.getElementById(e);if(""!=a.value&&""!=c.value){let e=!1,l=-1;for(let t=0;t<s.length;t++)s[t]._id==a.value&&(e=!0,l=t,t=s.length);if(!e)return void _.danger("scenario identifier does not exist.");let n="/api/db1/scenarios/"+a.value,r={name:c.value};U(n,"PUT",r,(function(e){t(0,s[l].name=c.value,s),P.set(s),_.success("Scenario renamed successfully.")}))}else _.danger("please provide scenario identifier and new name.")},function(){let e=!1,a=parseInt(this.parentElement.parentElement.parentElement.parentElement.getAttribute("index"));s[a].activated&&(e=!0);let l=s[a]._id;if(U("/api/db1/scenarios/"+l,"DELETE",{},(function(e){s.splice(a,1),P.set(s),_.success("Scenario deleted successfully.")})),U("/api/db1/scenario_configurations/ref-"+l,"DELETE",{},(function(e){_.success("Scenario configuration deleted successfully.")})),e){t(1,c={}),R.set(c);for(let e of Object.keys(v))t(5,v[e]="",v)}},function(){let e=this.getAttribute("ref");if(""!=e){let a=document.getElementById(e);if(""!=a.value){let e={name:a.value},t="/api/db1/scenarios";console.log("createNewScenario request with body:",e," and url:",t),U(t,"POST",e,(function(e){console.log(e,"response from createNewScenario"),s.push({_id:e.data,name:a.value,activated:!1}),P.set(s),_.success("New scenario created.")}))}else _.danger("please provide scenario name.")}}]}export default class extends e{constructor(e){super(),a(this,e,we,ge,t,{},[-1,-1])}}