import{S as e,i as a,s as t,e as s,t as r,k as c,c as n,a as l,g as o,d as i,n as h,b as f,f as d,F as u,l as v,M as p,N as g,G as E,O as m,h as w,P as b,j as y,L as T,m as D,o as S,v as k,r as I,w as N,Q as x,R as C,z as A,T as O,U as H}from"../../chunks/vendor-5cf7a4b5.js";import{T as B,x as V,n as _,a as z,m as R}from"../../chunks/requests-f597ce78.js";import{s as U,a as P}from"../../chunks/store-f8ef346b.js";const{document:j}=O;function L(e,a,t){const s=e.slice();return s[19]=a[t],s[21]=t,s}function M(e,a,t){const s=e.slice();return s[22]=a[t][0],s[23]=a[t][1],s}function $(e,a,t){const s=e.slice();return s[26]=a[t].short_id,s[27]=a[t].name,s[28]=a[t].ports,s[21]=t,s}function F(e,a,t){const s=e.slice();return s[30]=a[t],s[21]=t,s}function G(e,a,t){const s=e.slice();return s[22]=a[t][0],s[23]=a[t][1],s}function q(e,a,t){const s=e.slice();return s[22]=a[t][0],s[23]=a[t][1],s}function J(e){let a,t,v,g,E,m,w,b,y,T,D,S,k,I,N,x=e[0],C=[];for(let s=0;s<x.length;s+=1)C[s]=Y(F(e,x,s));return{c(){a=s("table"),t=s("thead"),v=s("tr"),g=s("th"),E=r("ID"),m=c(),w=s("th"),b=r("Name"),y=c(),T=s("th"),D=r("Activated"),S=c(),k=s("th"),I=r("Actions"),N=c();for(let e=0;e<C.length;e+=1)C[e].c();this.h()},l(e){a=n(e,"TABLE",{class:!0});var s=l(a);t=n(s,"THEAD",{});var r=l(t);v=n(r,"TR",{class:!0});var c=l(v);g=n(c,"TH",{});var f=l(g);E=o(f,"ID"),f.forEach(i),m=h(c),w=n(c,"TH",{});var d=l(w);b=o(d,"Name"),d.forEach(i),y=h(c),T=n(c,"TH",{});var u=l(T);D=o(u,"Activated"),u.forEach(i),S=h(c),k=n(c,"TH",{});var p=l(k);I=o(p,"Actions"),p.forEach(i),c.forEach(i),r.forEach(i),N=h(s);for(let a=0;a<C.length;a+=1)C[a].l(s);s.forEach(i),this.h()},h(){f(v,"class","w3-dark-grey"),f(a,"class","w3-table-all w3-centered")},m(e,s){d(e,a,s),u(a,t),u(t,v),u(v,g),u(g,E),u(v,m),u(v,w),u(w,b),u(v,y),u(v,T),u(T,D),u(v,S),u(v,k),u(k,I),u(a,N);for(let t=0;t<C.length;t+=1)C[t].m(a,null)},p(e,t){if(4357&t[0]){let s;for(x=e[0],s=0;s<x.length;s+=1){const r=F(e,x,s);C[s]?C[s].p(r,t):(C[s]=Y(r),C[s].c(),C[s].m(a,null))}for(;s<C.length;s+=1)C[s].d(1);C.length=x.length}},d(e){e&&i(a),p(C,e)}}}function Q(e){let a,t,v,p,g,m,w,y,T,D,S,k,I,N,C,A,O=[],B=new Map,V=Object.entries(e[30]);const _=e=>e[22];for(let s=0;s<V.length;s+=1){let a=G(e,V,s),t=_(a);B.set(t,O[s]=W(t,a))}return{c(){a=s("tr");for(let e=0;e<O.length;e+=1)O[e].c();t=c(),v=s("td"),p=s("div"),g=s("div"),m=s("button"),w=r("Activate"),y=c(),T=s("button"),D=r("Copy"),S=c(),k=s("button"),I=r("Delete"),N=c(),this.h()},l(e){a=n(e,"TR",{index:!0});var s=l(a);for(let a=0;a<O.length;a+=1)O[a].l(s);t=h(s),v=n(s,"TD",{class:!0});var r=l(v);p=n(r,"DIV",{class:!0});var c=l(p);g=n(c,"DIV",{class:!0});var f=l(g);m=n(f,"BUTTON",{});var d=l(m);w=o(d,"Activate"),d.forEach(i),y=h(f),T=n(f,"BUTTON",{});var u=l(T);D=o(u,"Copy"),u.forEach(i),S=h(f),k=n(f,"BUTTON",{});var E=l(k);I=o(E,"Delete"),E.forEach(i),f.forEach(i),c.forEach(i),r.forEach(i),N=h(s),s.forEach(i),this.h()},h(){f(g,"class","w3-bar"),f(p,"class","w3-show-inline-block"),f(v,"class","svelte-17uzir7"),f(a,"index",e[21])},m(s,r){d(s,a,r);for(let e=0;e<O.length;e+=1)O[e].m(a,null);u(a,t),u(a,v),u(v,p),u(p,g),u(g,m),u(m,w),u(g,y),u(g,T),u(T,D),u(g,S),u(g,k),u(k,I),u(a,N),C||(A=[E(m,"click",e[8]),E(T,"click",de),E(k,"click",e[12])],C=!0)},p(e,s){1&s[0]&&(V=Object.entries(e[30]),O=b(O,s,_,1,e,V,B,a,H,W,t,G))},d(e){e&&i(a);for(let a=0;a<O.length;a+=1)O[a].d();C=!1,x(A)}}}function K(e){let a,t,v,p,m,w,y,T,D,S,k,I,N,C,A,O,B=[],V=new Map,_=Object.entries(e[30]);const z=e=>e[22];for(let s=0;s<_.length;s+=1){let a=q(e,_,s),t=z(a);V.set(t,B[s]=X(t,a))}return{c(){a=s("tr");for(let e=0;e<B.length;e+=1)B[e].c();t=c(),v=s("td"),p=s("div"),m=s("div"),w=s("button"),y=r("Activate"),T=c(),D=s("button"),S=r("Copy"),k=c(),I=s("button"),N=r("Delete"),C=c(),this.h()},l(e){a=n(e,"TR",{index:!0,style:!0});var s=l(a);for(let a=0;a<B.length;a+=1)B[a].l(s);t=h(s),v=n(s,"TD",{class:!0});var r=l(v);p=n(r,"DIV",{class:!0});var c=l(p);m=n(c,"DIV",{class:!0});var f=l(m);w=n(f,"BUTTON",{});var d=l(w);y=o(d,"Activate"),d.forEach(i),T=h(f),D=n(f,"BUTTON",{});var u=l(D);S=o(u,"Copy"),u.forEach(i),k=h(f),I=n(f,"BUTTON",{});var g=l(I);N=o(g,"Delete"),g.forEach(i),f.forEach(i),c.forEach(i),r.forEach(i),C=h(s),s.forEach(i),this.h()},h(){f(m,"class","w3-bar"),f(p,"class","w3-show-inline-block"),f(v,"class","svelte-17uzir7"),f(a,"index",e[21]),g(a,"background-color","#acddb4")},m(s,r){d(s,a,r);for(let e=0;e<B.length;e+=1)B[e].m(a,null);u(a,t),u(a,v),u(v,p),u(p,m),u(m,w),u(w,y),u(m,T),u(m,D),u(D,S),u(m,k),u(m,I),u(I,N),u(a,C),A||(O=[E(w,"click",e[8]),E(D,"click",de),E(I,"click",e[12])],A=!0)},p(e,s){1&s[0]&&(_=Object.entries(e[30]),B=b(B,s,z,1,e,_,V,a,H,X,t,q))},d(e){e&&i(a);for(let a=0;a<B.length;a+=1)B[a].d();A=!1,x(O)}}}function W(e,a){let t,c,h=a[23]+"";return{key:e,first:null,c(){t=s("td"),c=r(h),this.h()},l(e){t=n(e,"TD",{class:!0});var a=l(t);c=o(a,h),a.forEach(i),this.h()},h(){f(t,"class","svelte-17uzir7"),this.first=t},m(e,a){d(e,t,a),u(t,c)},p(e,t){a=e,1&t[0]&&h!==(h=a[23]+"")&&w(c,h)},d(e){e&&i(t)}}}function X(e,a){let t,c,h=a[23]+"";return{key:e,first:null,c(){t=s("td"),c=r(h),this.h()},l(e){t=n(e,"TD",{class:!0});var a=l(t);c=o(a,h),a.forEach(i),this.h()},h(){f(t,"class","svelte-17uzir7"),this.first=t},m(e,a){d(e,t,a),u(t,c)},p(e,t){a=e,1&t[0]&&h!==(h=a[23]+"")&&w(c,h)},d(e){e&&i(t)}}}function Y(e){let a;function t(e,a){return e[2]==e[21]?K:Q}let s=t(e),r=s(e);return{c(){r.c(),a=v()},l(e){r.l(e),a=v()},m(e,t){r.m(e,t),d(e,a,t)},p(e,c){s===(s=t(e))&&r?r.p(e,c):(r.d(1),r=s(e),r&&(r.c(),r.m(a.parentNode,a)))},d(e){r.d(e),e&&i(a)}}}function Z(e){let a,t,v,g,E,m,w,b,y,T,D,S,k,I,N,x=e[3],C=[];for(let s=0;s<x.length;s+=1)C[s]=te($(e,x,s));return{c(){a=s("table"),t=s("thead"),v=s("tr"),g=s("th"),E=r("ShortID"),m=c(),w=s("th"),b=r("Name"),y=c(),T=s("th"),D=r("Ports"),S=c(),k=s("th"),I=r("Actions"),N=c();for(let e=0;e<C.length;e+=1)C[e].c();this.h()},l(e){a=n(e,"TABLE",{class:!0});var s=l(a);t=n(s,"THEAD",{});var r=l(t);v=n(r,"TR",{class:!0});var c=l(v);g=n(c,"TH",{});var f=l(g);E=o(f,"ShortID"),f.forEach(i),m=h(c),w=n(c,"TH",{});var d=l(w);b=o(d,"Name"),d.forEach(i),y=h(c),T=n(c,"TH",{});var u=l(T);D=o(u,"Ports"),u.forEach(i),S=h(c),k=n(c,"TH",{});var p=l(k);I=o(p,"Actions"),p.forEach(i),c.forEach(i),r.forEach(i),N=h(s);for(let a=0;a<C.length;a+=1)C[a].l(s);s.forEach(i),this.h()},h(){f(v,"class","w3-dark-grey"),f(a,"class","w3-table-all w3-centered")},m(e,s){d(e,a,s),u(a,t),u(t,v),u(v,g),u(g,E),u(v,m),u(v,w),u(w,b),u(v,y),u(v,T),u(T,D),u(v,S),u(v,k),u(k,I),u(a,N);for(let t=0;t<C.length;t+=1)C[t].m(a,null)},p(e,t){if(1560&t[0]){let s;for(x=e[3],s=0;s<x.length;s+=1){const r=$(e,x,s);C[s]?C[s].p(r,t):(C[s]=te(r),C[s].c(),C[s].m(a,null))}for(;s<C.length;s+=1)C[s].d(1);C.length=x.length}},d(e){e&&i(a),p(C,e)}}}function ee(e){let a,t,v,p,g,m,b,y,T,D,S,k,I,N,C,A,O,H,B,V,_,z=e[26]+"",R=e[27]+"",U=e[28]+"";return{c(){a=s("tr"),t=s("td"),v=r(z),p=c(),g=s("td"),m=r(R),b=c(),y=s("td"),T=r(U),D=c(),S=s("td"),k=s("div"),I=s("div"),N=s("button"),C=r("Activate"),A=c(),O=s("button"),H=r("Deactivate"),B=c(),this.h()},l(e){a=n(e,"TR",{index:!0});var s=l(a);t=n(s,"TD",{class:!0});var r=l(t);v=o(r,z),r.forEach(i),p=h(s),g=n(s,"TD",{class:!0});var c=l(g);m=o(c,R),c.forEach(i),b=h(s),y=n(s,"TD",{class:!0});var f=l(y);T=o(f,U),f.forEach(i),D=h(s),S=n(s,"TD",{class:!0});var d=l(S);k=n(d,"DIV",{class:!0});var u=l(k);I=n(u,"DIV",{class:!0});var E=l(I);N=n(E,"BUTTON",{});var w=l(N);C=o(w,"Activate"),w.forEach(i),A=h(E),O=n(E,"BUTTON",{});var x=l(O);H=o(x,"Deactivate"),x.forEach(i),E.forEach(i),u.forEach(i),d.forEach(i),B=h(s),s.forEach(i),this.h()},h(){f(t,"class","svelte-17uzir7"),f(g,"class","svelte-17uzir7"),f(y,"class","svelte-17uzir7"),f(I,"class","w3-bar"),f(k,"class","w3-show-inline-block"),f(S,"class","svelte-17uzir7"),f(a,"index",e[21])},m(s,r){d(s,a,r),u(a,t),u(t,v),u(a,p),u(a,g),u(g,m),u(a,b),u(a,y),u(y,T),u(a,D),u(a,S),u(S,k),u(k,I),u(I,N),u(N,C),u(I,A),u(I,O),u(O,H),u(a,B),V||(_=[E(N,"click",e[9]),E(O,"click",e[10])],V=!0)},p(e,a){8&a[0]&&z!==(z=e[26]+"")&&w(v,z),8&a[0]&&R!==(R=e[27]+"")&&w(m,R),8&a[0]&&U!==(U=e[28]+"")&&w(T,U)},d(e){e&&i(a),V=!1,x(_)}}}function ae(e){let a,t,v,p,g,m,b,y,T,D,S,k,I,N,C,A,O,H,B,V,_,z,R=e[26]+"",U=e[27]+"",P=e[28]+"";return{c(){a=s("tr"),t=s("td"),v=r(R),p=c(),g=s("td"),m=r(U),b=c(),y=s("td"),T=r(P),D=c(),S=s("td"),k=s("div"),I=s("div"),N=s("button"),C=r("Activate"),A=c(),O=s("button"),H=r("Deactivate"),B=c(),this.h()},l(e){a=n(e,"TR",{index:!0,style:!0});var s=l(a);t=n(s,"TD",{class:!0});var r=l(t);v=o(r,R),r.forEach(i),p=h(s),g=n(s,"TD",{class:!0});var c=l(g);m=o(c,U),c.forEach(i),b=h(s),y=n(s,"TD",{class:!0});var f=l(y);T=o(f,P),f.forEach(i),D=h(s),S=n(s,"TD",{class:!0});var d=l(S);k=n(d,"DIV",{class:!0});var u=l(k);I=n(u,"DIV",{class:!0});var E=l(I);N=n(E,"BUTTON",{});var w=l(N);C=o(w,"Activate"),w.forEach(i),A=h(E),O=n(E,"BUTTON",{});var x=l(O);H=o(x,"Deactivate"),x.forEach(i),E.forEach(i),u.forEach(i),d.forEach(i),B=h(s),s.forEach(i),this.h()},h(){f(t,"class","svelte-17uzir7"),f(g,"class","svelte-17uzir7"),f(y,"class","svelte-17uzir7"),f(I,"class","w3-bar"),f(k,"class","w3-show-inline-block"),f(S,"class","svelte-17uzir7"),f(a,"index",e[21]),f(a,"style",V=e[4][e[21]])},m(s,r){d(s,a,r),u(a,t),u(t,v),u(a,p),u(a,g),u(g,m),u(a,b),u(a,y),u(y,T),u(a,D),u(a,S),u(S,k),u(k,I),u(I,N),u(N,C),u(I,A),u(I,O),u(O,H),u(a,B),_||(z=[E(N,"click",e[9]),E(O,"click",e[10])],_=!0)},p(e,t){8&t[0]&&R!==(R=e[26]+"")&&w(v,R),8&t[0]&&U!==(U=e[27]+"")&&w(m,U),8&t[0]&&P!==(P=e[28]+"")&&w(T,P),16&t[0]&&V!==(V=e[4][e[21]])&&f(a,"style",V)},d(e){e&&i(a),_=!1,x(z)}}}function te(e){let a;function t(e,a){return e[21]in e[4]?ae:ee}let s=t(e),r=s(e);return{c(){r.c(),a=v()},l(e){r.l(e),a=v()},m(e,t){r.m(e,t),d(e,a,t)},p(e,c){s===(s=t(e))&&r?r.p(e,c):(r.d(1),r=s(e),r&&(r.c(),r.m(a.parentNode,a)))},d(e){r.d(e),e&&i(a)}}}function se(e){let a,t=e[1].configurations.length>0&&re(e);return{c(){t&&t.c(),a=v()},l(e){t&&t.l(e),a=v()},m(e,s){t&&t.m(e,s),d(e,a,s)},p(e,s){e[1].configurations.length>0?t?t.p(e,s):(t=re(e),t.c(),t.m(a.parentNode,a)):t&&(t.d(1),t=null)},d(e){t&&t.d(e),e&&i(a)}}}function re(e){let a,t=e[1].configurations,s=[];for(let r=0;r<t.length;r+=1)s[r]=he(L(e,t,r));return{c(){for(let e=0;e<s.length;e+=1)s[e].c();a=v()},l(e){for(let a=0;a<s.length;a+=1)s[a].l(e);a=v()},m(e,t){for(let a=0;a<s.length;a+=1)s[a].m(e,t);d(e,a,t)},p(e,r){if(130&r[0]){let c;for(t=e[1].configurations,c=0;c<t.length;c+=1){const n=L(e,t,c);s[c]?s[c].p(n,r):(s[c]=he(n),s[c].c(),s[c].m(a.parentNode,a))}for(;c<s.length;c+=1)s[c].d(1);s.length=t.length}},d(e){p(s,e),e&&i(a)}}}function ce(e){let a,t,v,p,g,E,m,b=e[22]+"";return{c(){a=s("label"),t=s("b"),v=r(b),p=c(),g=s("input"),this.h()},l(e){a=n(e,"LABEL",{class:!0});var s=l(a);t=n(s,"B",{});var r=l(t);v=o(r,b),r.forEach(i),s.forEach(i),p=h(e),g=n(e,"INPUT",{class:!0,type:!0,key:!0,value:!0}),this.h()},h(){f(a,"class",""),f(g,"class","w3-input w3-border"),f(g,"type","list"),f(g,"key",E=e[22]),g.value=m=e[23].join()},m(e,s){d(e,a,s),u(a,t),u(t,v),d(e,p,s),d(e,g,s)},p(e,a){2&a[0]&&b!==(b=e[22]+"")&&w(v,b),2&a[0]&&E!==(E=e[22])&&f(g,"key",E),2&a[0]&&m!==(m=e[23].join())&&(g.value=m)},d(e){e&&i(a),e&&i(p),e&&i(g)}}}function ne(e){let a,t,v,p,g,E,m,b=e[22]+"";return{c(){a=s("input"),p=c(),g=s("label"),E=s("b"),m=r(b),this.h()},l(e){a=n(e,"INPUT",{class:!0,type:!0,key:!0,checked:!0}),p=h(e),g=n(e,"LABEL",{class:!0});var t=l(g);E=n(t,"B",{});var s=l(E);m=o(s,b),s.forEach(i),t.forEach(i),this.h()},h(){f(a,"class","w3-check"),f(a,"type","checkbox"),f(a,"key",t=e[22]),a.checked=v=e[23],f(g,"class","")},m(e,t){d(e,a,t),d(e,p,t),d(e,g,t),u(g,E),u(E,m)},p(e,s){2&s[0]&&t!==(t=e[22])&&f(a,"key",t),2&s[0]&&v!==(v=e[23])&&(a.checked=v),2&s[0]&&b!==(b=e[22]+"")&&w(m,b)},d(e){e&&i(a),e&&i(p),e&&i(g)}}}function le(e){let a,t,v,p,g,E,m,b=e[22]+"";return{c(){a=s("label"),t=s("b"),v=r(b),p=c(),g=s("input"),this.h()},l(e){a=n(e,"LABEL",{class:!0});var s=l(a);t=n(s,"B",{});var r=l(t);v=o(r,b),r.forEach(i),s.forEach(i),p=h(e),g=n(e,"INPUT",{class:!0,type:!0,key:!0,value:!0}),this.h()},h(){f(a,"class",""),f(g,"class","w3-input w3-border"),f(g,"type","string"),f(g,"key",E=e[22]),g.value=m=e[23]},m(e,s){d(e,a,s),u(a,t),u(t,v),d(e,p,s),d(e,g,s)},p(e,a){2&a[0]&&b!==(b=e[22]+"")&&w(v,b),2&a[0]&&E!==(E=e[22])&&f(g,"key",E),2&a[0]&&m!==(m=e[23])&&(g.value=m)},d(e){e&&i(a),e&&i(p),e&&i(g)}}}function oe(e){let a,t,v,p,g,E,m,b=e[22]+"";return{c(){a=s("label"),t=s("b"),v=r(b),p=c(),g=s("input"),this.h()},l(e){a=n(e,"LABEL",{class:!0});var s=l(a);t=n(s,"B",{});var r=l(t);v=o(r,b),r.forEach(i),s.forEach(i),p=h(e),g=n(e,"INPUT",{class:!0,type:!0,convert:!0,key:!0,value:!0}),this.h()},h(){f(a,"class",""),f(g,"class","w3-input w3-border"),f(g,"type","string"),f(g,"convert","required"),f(g,"key",E=e[22]),g.value=m=e[23]},m(e,s){d(e,a,s),u(a,t),u(t,v),d(e,p,s),d(e,g,s)},p(e,a){2&a[0]&&b!==(b=e[22]+"")&&w(v,b),2&a[0]&&E!==(E=e[22])&&f(g,"key",E),2&a[0]&&m!==(m=e[23])&&(g.value=m)},d(e){e&&i(a),e&&i(p),e&&i(g)}}}function ie(e,a){let t;function r(e,a){return"number"==typeof e[23]?oe:"string"==typeof e[23]?le:"boolean"==typeof e[23]?ne:"object"==typeof e[23]?ce:void 0}let c=r(a),o=c&&c(a);return{key:e,first:null,c(){t=s("p"),o&&o.c(),this.h()},l(e){t=n(e,"P",{});var a=l(t);o&&o.l(a),a.forEach(i),this.h()},h(){this.first=t},m(e,a){d(e,t,a),o&&o.m(t,null)},p(e,s){c===(c=r(a=e))&&o?o.p(a,s):(o&&o.d(1),o=c&&c(a),o&&(o.c(),o.m(t,null)))},d(e){e&&i(t),o&&o.d()}}}function he(e){let a,t,v,p,y,T,D,S,k,I,N,x,C,A,O,B,V,_,z,R,U,P,j=e[19].container_info.name+"",L=[],$=new Map,F=Object.entries(e[19].configs);const G=e=>e[22];for(let s=0;s<F.length;s+=1){let a=M(e,F,s),t=G(a);$.set(t,L[s]=ie(t,a))}return{c(){a=s("div"),t=s("div"),v=s("h2"),p=r(j),y=c(),T=s("p"),D=r("Description here from application configs"),S=c(),k=s("div"),I=s("form"),N=s("h5"),x=r("Update Form"),C=c();for(let e=0;e<L.length;e+=1)L[e].c();A=c(),O=s("p"),B=s("input"),z=c(),R=s("hr"),this.h()},l(e){a=n(e,"DIV",{class:!0});var s=l(a);t=n(s,"DIV",{class:!0});var r=l(t);v=n(r,"H2",{class:!0,style:!0});var c=l(v);p=o(c,j),c.forEach(i),y=h(r),T=n(r,"P",{});var f=l(T);D=o(f,"Description here from application configs"),f.forEach(i),r.forEach(i),S=h(s),k=n(s,"DIV",{class:!0});var d=l(k);I=n(d,"FORM",{name:!0,port:!0,index:!0,class:!0});var u=l(I);N=n(u,"H5",{class:!0,style:!0});var g=l(N);x=o(g,"Update Form"),g.forEach(i),C=h(u);for(let a=0;a<L.length;a+=1)L[a].l(u);A=h(u),O=n(u,"P",{});var E=l(O);B=n(E,"INPUT",{class:!0,type:!0,value:!0}),E.forEach(i),u.forEach(i),d.forEach(i),s.forEach(i),z=h(e),R=n(e,"HR",{class:!0}),this.h()},h(){f(v,"class","w3-text-orange"),g(v,"text-shadow","1px 1px 0 #444"),f(t,"class","w3-third w3-container w3-blue"),f(N,"class","w3-text-orange"),g(N,"text-shadow","1px 1px 0 #444"),f(B,"class","w3-blue"),f(B,"type","submit"),B.value="Update",f(I,"name",V=e[19].container_info.name),f(I,"port",_=e[19].container_info.ports),f(I,"index",e[21]),f(I,"class","w3-container"),f(k,"class","w3-twothird w3-container w3-gray"),f(a,"class","w3-row w3-border"),f(R,"class","svelte-17uzir7")},m(s,r){d(s,a,r),u(a,t),u(t,v),u(v,p),u(t,y),u(t,T),u(T,D),u(a,S),u(a,k),u(k,I),u(I,N),u(N,x),u(I,C);for(let e=0;e<L.length;e+=1)L[e].m(I,null);u(I,A),u(I,O),u(O,B),d(s,z,r),d(s,R,r),U||(P=E(I,"submit",m(e[7])),U=!0)},p(e,a){2&a[0]&&j!==(j=e[19].container_info.name+"")&&w(p,j),2&a[0]&&(F=Object.entries(e[19].configs),L=b(L,a,G,1,e,F,$,I,H,ie,A,M)),2&a[0]&&V!==(V=e[19].container_info.name)&&f(I,"name",V),2&a[0]&&_!==(_=e[19].container_info.ports)&&f(I,"port",_)},d(e){e&&i(a);for(let a=0;a<L.length;a+=1)L[a].d();e&&i(z),e&&i(R),U=!1,P()}}}function fe(e){let a,t,v,p,m,w,b,C,A,O,H,V,_,z,R,U,P,L,M,$,F,G,q,Q,K,W,X,Y,ee,ae,te,re,ce,ne,le,oe,ie,he,fe,de,ve,pe,ge,Ee,me,we,be,ye,Te,De,Se,ke,Ie,Ne,xe,Ce,Ae,Oe,He,Be,Ve,_e,ze,Re,Ue,Pe,je,Le,Me,$e,Fe,Ge,qe,Je,Qe,Ke,We,Xe,Ye,Ze,ea,aa,ta,sa,ra,ca,na,la,oa,ia,ha,fa,da,ua,va,pa,ga,Ea,ma,wa,ba,ya,Ta,Da,Sa,ka,Ia,Na,xa,Ca,Aa,Oa,Ha,Ba,Va,_a,za,Ra,Ua,Pa,ja,La,Ma,$a,Fa,Ga,qa,Ja,Qa,Ka,Wa,Xa,Ya,Za,et,at,tt,st,rt,ct,nt,lt,ot,it,ht,ft,dt;t=new B({});let ut=e[0].length>0&&J(e),vt=e[3].length>0&&Z(e),pt="configurations"in e[1]&&se(e);return{c(){a=c(),y(t.$$.fragment),v=c(),p=s("hr"),m=c(),w=s("div"),b=s("h1"),C=s("b"),A=r("Scenario Management"),O=c(),H=s("hr"),V=c(),_=s("section"),z=s("h3"),R=r("Select scenario"),U=c(),P=s("section"),ut&&ut.c(),L=c(),M=s("div"),$=s("div"),F=s("button"),G=r("Create Scenario"),q=c(),Q=s("div"),K=s("input"),W=c(),X=s("div"),Y=s("div"),ee=s("button"),ae=r("Rename Scenario"),te=c(),re=s("div"),ce=s("input"),ne=c(),le=s("div"),oe=s("input"),ie=c(),he=s("hr"),fe=c(),de=s("div"),ve=s("h1"),pe=s("b"),ge=r("Configuration"),Ee=c(),me=s("hr"),we=c(),be=s("section"),ye=s("h3"),Te=r("Select containers"),De=c(),Se=s("section"),vt&&vt.c(),ke=c(),Ie=s("hr"),Ne=c(),xe=s("section"),Ce=s("h3"),Ae=r("Configure containers"),Oe=c(),He=s("section"),Be=s("button"),Ve=r("Reset Configurations"),_e=c(),pt&&pt.c(),ze=c(),Re=s("button"),Ue=r("Save Configurations"),Pe=c(),je=s("hr"),Le=c(),Me=s("div"),$e=s("h1"),Fe=s("b"),Ge=r("Scenario Type"),qe=c(),Je=s("div"),Qe=s("div"),Ke=s("a"),We=s("div"),Xe=r("Communication"),Ye=c(),Ze=s("a"),ea=s("div"),aa=r("Static"),ta=c(),sa=s("a"),ra=s("div"),ca=r("Driving Simulation"),na=c(),la=s("div"),oa=s("p"),ia=r("Communication is the capital city of England."),ha=c(),fa=s("div"),da=s("hr"),ua=c(),va=s("div"),pa=s("h1"),ga=s("b"),Ea=r("Configuration"),ma=c(),wa=s("hr"),ba=c(),ya=s("section"),Ta=s("h3"),Da=r("Generate Frames from Video"),Sa=c(),ka=s("hr"),Ia=c(),Na=s("section"),xa=s("h3"),Ca=r("Generate Attack"),Aa=c(),Oa=s("hr"),Ha=c(),Ba=s("section"),Va=s("h3"),_a=r("Validate Dataset"),za=c(),Ra=s("div"),Ua=s("hr"),Pa=c(),ja=s("div"),La=s("h1"),Ma=s("b"),$a=r("Configuration"),Fa=c(),Ga=s("hr"),qa=c(),Ja=s("section"),Qa=s("h3"),Ka=r("Select Driving Path"),Wa=c(),Xa=s("hr"),Ya=c(),Za=s("section"),et=s("h3"),at=r("Select Sensors"),tt=c(),st=s("hr"),rt=c(),ct=s("section"),nt=s("h3"),lt=r("Attack Configuration"),ot=c(),it=s("hr"),this.h()},l(e){T('[data-svelte="svelte-101i1i0"]',j.head).forEach(i),a=h(e),D(t.$$.fragment,e),v=h(e),p=n(e,"HR",{class:!0}),m=h(e),w=n(e,"DIV",{class:!0});var s=l(w);b=n(s,"H1",{class:!0,style:!0});var r=l(b);C=n(r,"B",{});var c=l(C);A=o(c,"Scenario Management"),c.forEach(i),r.forEach(i),s.forEach(i),O=h(e),H=n(e,"HR",{class:!0}),V=h(e),_=n(e,"SECTION",{class:!0});var f=l(_);z=n(f,"H3",{});var d=l(z);R=o(d,"Select scenario"),d.forEach(i),f.forEach(i),U=h(e),P=n(e,"SECTION",{class:!0});var u=l(P);ut&&ut.l(u),L=h(u),M=n(u,"DIV",{class:!0});var g=l(M);$=n(g,"DIV",{class:!0});var E=l($);F=n(E,"BUTTON",{ref:!0,class:!0});var y=l(F);G=o(y,"Create Scenario"),y.forEach(i),E.forEach(i),q=h(g),Q=n(g,"DIV",{class:!0});var S=l(Q);K=n(S,"INPUT",{id:!0,class:!0,name:!0,type:!0,placeholder:!0}),S.forEach(i),g.forEach(i),W=h(u),X=n(u,"DIV",{class:!0});var k=l(X);Y=n(k,"DIV",{class:!0});var I=l(Y);ee=n(I,"BUTTON",{ref:!0,class:!0});var N=l(ee);ae=o(N,"Rename Scenario"),N.forEach(i),I.forEach(i),te=h(k),re=n(k,"DIV",{class:!0});var x=l(re);ce=n(x,"INPUT",{id:!0,class:!0,name:!0,type:!0,placeholder:!0}),x.forEach(i),ne=h(k),le=n(k,"DIV",{class:!0});var B=l(le);oe=n(B,"INPUT",{id:!0,class:!0,name:!0,type:!0,placeholder:!0}),B.forEach(i),k.forEach(i),u.forEach(i),ie=h(e),he=n(e,"HR",{class:!0}),fe=h(e),de=n(e,"DIV",{class:!0});var J=l(de);ve=n(J,"H1",{class:!0,style:!0});var Z=l(ve);pe=n(Z,"B",{});var se=l(pe);ge=o(se,"Configuration"),se.forEach(i),Z.forEach(i),J.forEach(i),Ee=h(e),me=n(e,"HR",{class:!0}),we=h(e),be=n(e,"SECTION",{class:!0});var ue=l(be);ye=n(ue,"H3",{});var ht=l(ye);Te=o(ht,"Select containers"),ht.forEach(i),ue.forEach(i),De=h(e),Se=n(e,"SECTION",{class:!0});var ft=l(Se);vt&&vt.l(ft),ft.forEach(i),ke=h(e),Ie=n(e,"HR",{class:!0}),Ne=h(e),xe=n(e,"SECTION",{class:!0});var dt=l(xe);Ce=n(dt,"H3",{});var gt=l(Ce);Ae=o(gt,"Configure containers"),gt.forEach(i),dt.forEach(i),Oe=h(e),He=n(e,"SECTION",{class:!0});var Et=l(He);Be=n(Et,"BUTTON",{class:!0});var mt=l(Be);Ve=o(mt,"Reset Configurations"),mt.forEach(i),_e=h(Et),pt&&pt.l(Et),ze=h(Et),Re=n(Et,"BUTTON",{class:!0});var wt=l(Re);Ue=o(wt,"Save Configurations"),wt.forEach(i),Et.forEach(i),Pe=h(e),je=n(e,"HR",{class:!0}),Le=h(e),Me=n(e,"DIV",{class:!0});var bt=l(Me);$e=n(bt,"H1",{class:!0,style:!0});var yt=l($e);Fe=n(yt,"B",{});var Tt=l(Fe);Ge=o(Tt,"Scenario Type"),Tt.forEach(i),yt.forEach(i),bt.forEach(i),qe=h(e),Je=n(e,"DIV",{class:!0});var Dt=l(Je);Qe=n(Dt,"DIV",{class:!0});var St=l(Qe);Ke=n(St,"A",{href:!0});var kt=l(Ke);We=n(kt,"DIV",{class:!0});var It=l(We);Xe=o(It,"Communication"),It.forEach(i),kt.forEach(i),Ye=h(St),Ze=n(St,"A",{href:!0});var Nt=l(Ze);ea=n(Nt,"DIV",{class:!0});var xt=l(ea);aa=o(xt,"Static"),xt.forEach(i),Nt.forEach(i),ta=h(St),sa=n(St,"A",{href:!0});var Ct=l(sa);ra=n(Ct,"DIV",{class:!0});var At=l(ra);ca=o(At,"Driving Simulation"),At.forEach(i),Ct.forEach(i),St.forEach(i),na=h(Dt),la=n(Dt,"DIV",{id:!0,class:!0,style:!0});var Ot=l(la);oa=n(Ot,"P",{});var Ht=l(oa);ia=o(Ht,"Communication is the capital city of England."),Ht.forEach(i),Ot.forEach(i),ha=h(Dt),fa=n(Dt,"DIV",{id:!0,class:!0,style:!0});var Bt=l(fa);da=n(Bt,"HR",{class:!0}),ua=h(Bt),va=n(Bt,"DIV",{class:!0});var Vt=l(va);pa=n(Vt,"H1",{class:!0,style:!0});var _t=l(pa);ga=n(_t,"B",{});var zt=l(ga);Ea=o(zt,"Configuration"),zt.forEach(i),_t.forEach(i),Vt.forEach(i),ma=h(Bt),wa=n(Bt,"HR",{class:!0}),ba=h(Bt),ya=n(Bt,"SECTION",{class:!0});var Rt=l(ya);Ta=n(Rt,"H3",{});var Ut=l(Ta);Da=o(Ut,"Generate Frames from Video"),Ut.forEach(i),Rt.forEach(i),Sa=h(Bt),ka=n(Bt,"HR",{class:!0}),Ia=h(Bt),Na=n(Bt,"SECTION",{class:!0});var Pt=l(Na);xa=n(Pt,"H3",{});var jt=l(xa);Ca=o(jt,"Generate Attack"),jt.forEach(i),Pt.forEach(i),Aa=h(Bt),Oa=n(Bt,"HR",{class:!0}),Ha=h(Bt),Ba=n(Bt,"SECTION",{class:!0});var Lt=l(Ba);Va=n(Lt,"H3",{});var Mt=l(Va);_a=o(Mt,"Validate Dataset"),Mt.forEach(i),Lt.forEach(i),Bt.forEach(i),za=h(Dt),Ra=n(Dt,"DIV",{id:!0,class:!0,style:!0});var $t=l(Ra);Ua=n($t,"HR",{class:!0}),Pa=h($t),ja=n($t,"DIV",{class:!0});var Ft=l(ja);La=n(Ft,"H1",{class:!0,style:!0});var Gt=l(La);Ma=n(Gt,"B",{});var qt=l(Ma);$a=o(qt,"Configuration"),qt.forEach(i),Gt.forEach(i),Ft.forEach(i),Fa=h($t),Ga=n($t,"HR",{class:!0}),qa=h($t),Ja=n($t,"SECTION",{class:!0});var Jt=l(Ja);Qa=n(Jt,"H3",{});var Qt=l(Qa);Ka=o(Qt,"Select Driving Path"),Qt.forEach(i),Jt.forEach(i),Wa=h($t),Xa=n($t,"HR",{class:!0}),Ya=h($t),Za=n($t,"SECTION",{class:!0});var Kt=l(Za);et=n(Kt,"H3",{});var Wt=l(et);at=o(Wt,"Select Sensors"),Wt.forEach(i),Kt.forEach(i),tt=h($t),st=n($t,"HR",{class:!0}),rt=h($t),ct=n($t,"SECTION",{class:!0});var Xt=l(ct);nt=n(Xt,"H3",{});var Yt=l(nt);lt=o(Yt,"Attack Configuration"),Yt.forEach(i),Xt.forEach(i),$t.forEach(i),Dt.forEach(i),ot=h(e),it=n(e,"HR",{class:!0}),this.h()},h(){j.title="Configuration and Scheduling",f(p,"class","svelte-17uzir7"),f(b,"class","w3-text-yellow"),g(b,"text-shadow","1px 1px 0 #444"),f(w,"class","w3-panel w3-blue"),f(H,"class","svelte-17uzir7"),f(_,"class","page-headline"),f(F,"ref","createNewScenario"),f(F,"class","w3-col w3-input w3-border"),f($,"class","w3-third"),f(K,"id","createNewScenario"),f(K,"class","w3-input w3-border"),f(K,"name","name"),f(K,"type","text"),f(K,"placeholder","Scenario Name"),f(Q,"class","w3-rest"),f(M,"class","w3-row w3-section"),f(ee,"ref","renameScenario"),f(ee,"class","w3-col w3-input w3-border"),f(Y,"class","w3-third"),f(ce,"id","renameScenarioID"),f(ce,"class","w3-input w3-border"),f(ce,"name","id"),f(ce,"type","text"),f(ce,"placeholder","Scenario Identifier"),f(re,"class","w3-third"),f(oe,"id","renameScenario"),f(oe,"class","w3-input w3-border"),f(oe,"name","name"),f(oe,"type","text"),f(oe,"placeholder","Scenario Name"),f(le,"class","w3-rest"),f(X,"class","w3-row w3-section"),f(P,"class","w3-container"),f(he,"class","svelte-17uzir7"),f(ve,"class","w3-text-yellow"),g(ve,"text-shadow","1px 1px 0 #444"),f(de,"class","w3-panel w3-blue"),f(me,"class","svelte-17uzir7"),f(be,"class","page-headline"),f(Se,"class","w3-container"),f(Ie,"class","svelte-17uzir7"),f(xe,"class","page-headline"),f(Be,"class","w3-col w3-input w3-border w3-margin-bottom"),f(Re,"class","w3-col w3-input w3-border w3-margin-top"),f(He,"class","w3-container"),f(je,"class","svelte-17uzir7"),f($e,"class","w3-text-yellow"),g($e,"text-shadow","1px 1px 0 #444"),f(Me,"class","w3-panel w3-blue"),f(We,"class","w3-third tablink w3-bottombar w3-hover-light-grey w3-padding"),f(Ke,"href","javascript:void(0)"),f(ea,"class","w3-third tablink w3-bottombar w3-hover-light-grey w3-padding"),f(Ze,"href","javascript:void(0)"),f(ra,"class","w3-third tablink w3-bottombar w3-hover-light-grey w3-padding"),f(sa,"href","javascript:void(0)"),f(Qe,"class","w3-row"),f(la,"id","Communication"),f(la,"class","w3-container city"),g(la,"display","none"),f(da,"class","svelte-17uzir7"),f(pa,"class","w3-text-yellow"),g(pa,"text-shadow","1px 1px 0 #444"),f(va,"class","w3-panel w3-blue"),f(wa,"class","svelte-17uzir7"),f(ya,"class","page-headline"),f(ka,"class","svelte-17uzir7"),f(Na,"class","page-headline"),f(Oa,"class","svelte-17uzir7"),f(Ba,"class","page-headline"),f(fa,"id","Static"),f(fa,"class","w3-container city"),g(fa,"display","none"),f(Ua,"class","svelte-17uzir7"),f(La,"class","w3-text-yellow"),g(La,"text-shadow","1px 1px 0 #444"),f(ja,"class","w3-panel w3-blue"),f(Ga,"class","svelte-17uzir7"),f(Ja,"class","page-headline"),f(Xa,"class","svelte-17uzir7"),f(Za,"class","page-headline"),f(st,"class","svelte-17uzir7"),f(ct,"class","page-headline"),f(Ra,"id","Driving Simulation"),f(Ra,"class","w3-container city"),g(Ra,"display","none"),f(Je,"class","w3-container"),f(it,"class","svelte-17uzir7")},m(s,r){d(s,a,r),S(t,s,r),d(s,v,r),d(s,p,r),d(s,m,r),d(s,w,r),u(w,b),u(b,C),u(C,A),d(s,O,r),d(s,H,r),d(s,V,r),d(s,_,r),u(_,z),u(z,R),d(s,U,r),d(s,P,r),ut&&ut.m(P,null),u(P,L),u(P,M),u(M,$),u($,F),u(F,G),u(M,q),u(M,Q),u(Q,K),u(P,W),u(P,X),u(X,Y),u(Y,ee),u(ee,ae),u(X,te),u(X,re),u(re,ce),u(X,ne),u(X,le),u(le,oe),d(s,ie,r),d(s,he,r),d(s,fe,r),d(s,de,r),u(de,ve),u(ve,pe),u(pe,ge),d(s,Ee,r),d(s,me,r),d(s,we,r),d(s,be,r),u(be,ye),u(ye,Te),d(s,De,r),d(s,Se,r),vt&&vt.m(Se,null),d(s,ke,r),d(s,Ie,r),d(s,Ne,r),d(s,xe,r),u(xe,Ce),u(Ce,Ae),d(s,Oe,r),d(s,He,r),u(He,Be),u(Be,Ve),u(He,_e),pt&&pt.m(He,null),u(He,ze),u(He,Re),u(Re,Ue),d(s,Pe,r),d(s,je,r),d(s,Le,r),d(s,Me,r),u(Me,$e),u($e,Fe),u(Fe,Ge),d(s,qe,r),d(s,Je,r),u(Je,Qe),u(Qe,Ke),u(Ke,We),u(We,Xe),u(Qe,Ye),u(Qe,Ze),u(Ze,ea),u(ea,aa),u(Qe,ta),u(Qe,sa),u(sa,ra),u(ra,ca),u(Je,na),u(Je,la),u(la,oa),u(oa,ia),u(Je,ha),u(Je,fa),u(fa,da),u(fa,ua),u(fa,va),u(va,pa),u(pa,ga),u(ga,Ea),u(fa,ma),u(fa,wa),u(fa,ba),u(fa,ya),u(ya,Ta),u(Ta,Da),u(fa,Sa),u(fa,ka),u(fa,Ia),u(fa,Na),u(Na,xa),u(xa,Ca),u(fa,Aa),u(fa,Oa),u(fa,Ha),u(fa,Ba),u(Ba,Va),u(Va,_a),u(Je,za),u(Je,Ra),u(Ra,Ua),u(Ra,Pa),u(Ra,ja),u(ja,La),u(La,Ma),u(Ma,$a),u(Ra,Fa),u(Ra,Ga),u(Ra,qa),u(Ra,Ja),u(Ja,Qa),u(Qa,Ka),u(Ra,Wa),u(Ra,Xa),u(Ra,Ya),u(Ra,Za),u(Za,et),u(et,at),u(Ra,tt),u(Ra,st),u(Ra,rt),u(Ra,ct),u(ct,nt),u(nt,lt),d(s,ot,r),d(s,it,r),ht=!0,ft||(dt=[E(F,"click",e[13]),E(ee,"click",e[11]),E(Be,"click",e[5]),E(Re,"click",e[6]),E(Ke,"click",ue),E(Ze,"click",ue),E(sa,"click",ue)],ft=!0)},p(e,a){e[0].length>0?ut?ut.p(e,a):(ut=J(e),ut.c(),ut.m(P,L)):ut&&(ut.d(1),ut=null),e[3].length>0?vt?vt.p(e,a):(vt=Z(e),vt.c(),vt.m(Se,null)):vt&&(vt.d(1),vt=null),"configurations"in e[1]?pt?pt.p(e,a):(pt=se(e),pt.c(),pt.m(He,ze)):pt&&(pt.d(1),pt=null)},i(e){ht||(k(t.$$.fragment,e),ht=!0)},o(e){I(t.$$.fragment,e),ht=!1},d(e){e&&i(a),N(t,e),e&&i(v),e&&i(p),e&&i(m),e&&i(w),e&&i(O),e&&i(H),e&&i(V),e&&i(_),e&&i(U),e&&i(P),ut&&ut.d(),e&&i(ie),e&&i(he),e&&i(fe),e&&i(de),e&&i(Ee),e&&i(me),e&&i(we),e&&i(be),e&&i(De),e&&i(Se),vt&&vt.d(),e&&i(ke),e&&i(Ie),e&&i(Ne),e&&i(xe),e&&i(Oe),e&&i(He),pt&&pt.d(),e&&i(Pe),e&&i(je),e&&i(Le),e&&i(Me),e&&i(qe),e&&i(Je),e&&i(ot),e&&i(it),ft=!1,x(dt)}}}function de(){console.log(this,"copyScenario")}function ue(){let e=this.firstChild.innerText;var a,t,s;for(console.log(this,"this"),t=document.getElementsByClassName("city"),a=0;a<t.length;a++)t[a].style.display="none";for(s=document.getElementsByClassName("tablink"),a=0;a<t.length;a++)s[a].className=s[a].className.replace(" w3-border-red","");document.getElementById(e).style.display="block",this.firstChild.className+=" w3-border-red"}function ve(e,a,t){let s=[],r={};const c=U.subscribe((e=>{t(0,s=e)})),n=P.subscribe((e=>{t(1,r=e)}));let l;C((()=>{c(),n()}));let o=[{short_id:"123",name:"DoS Attack",ports:"8010"},{short_id:"1243",name:"Replay Attack",ports:"8020"},{short_id:"122",name:"MitM",ports:"8030"}],i={};function h(){let e=!1;for(let a=0;a<s.length;a++)s[a].activated&&(e=!0);return e}return A((async()=>{!async function(){V("/containers",(function(e){let a=JSON.parse(e.response);a.data&&t(3,o=a.data),console.log("containers loaded:",o)}))}(),s.length<1&&V("/api/db1/scenarios",(function(e){let a=JSON.parse(e.response);if(a.data){for(let e=0;e<a.data.length;e++)a.data[e].activated=!1;U.set(a.data)}}))})),[s,r,l,o,i,async function(){if(!h())return void _.danger("please create and activate a scenario first.");let e=[];for(let a=0;a<r.configurations.length;a++){console.log(r.configurations[a],"data");let t=r.configurations[a].container_info.name,s=r.configurations[a].container_info.ports.split(",")[0].split("/")[0];console.log(t,s,"name and port");let c=R("GET","/containers/"+t+"/"+s+"/configs");e.push(c)}Promise.allSettled(e).then((function(e){for(let a=0;a<e.length;a++)"fulfilled"==e[a].status&&t(1,r.configurations[a].configs=e[a].value.data.data,r);P.set(r)})),console.log("config_containers:",r)},async function(){if(console.log("saving scenario configurations"),!h())return void _.danger("please create and activate a scenario first.");let e="/api/db1/scenario_configurations",a="POST";"_id"in r&&(a="PUT",e="/api/db1/scenario_configurations/"+r._id),console.log("writing data:",r," to url:",e," and method:",a),z(e,a,r,(function(e){console.log(e,"response from saveContainersConfig"),t(1,r._id=e.data,r),P.set(r),_.success("Configuration saved successfull.")}))},async function(){if(!h())return void _.danger("please create and activate a scenario first.");let e={},a=parseInt(this.getAttribute("index")),s=this.getAttribute("name"),c=this.getAttribute("port").split(",")[0].split("/")[0];console.log(a,s,c,"printing index");let n=this.querySelectorAll("input");for(let t=0;t<n.length;t++){let a=n[t];console.log(a,"element found with input scan");let s=a.getAttribute("type"),r=a.getAttribute("key"),c=a.value;null==c&&(c=""),console.log(s,r,c,"triple"),"submit"!=s&&("checkbox"==s?e[r]=a.checked:"list"==s?e[r]=c.split(","):a.hasAttribute("convert")?e[r]=Number(c):e[r]=c)}let l="/containers/"+s+"/"+c+"/configs";console.log(e,"nanan",l),z(l,"POST",e,(function(s){t(1,r.configurations[a].configs=e,r),P.set(r),_.success("Configuration update successfull.")}))},function(){let e,a=this.parentElement.parentElement.parentElement.parentElement.getAttribute("index");for(let r=0;r<s.length;r++)r==a?(t(2,l=r),t(0,s[r].activated=!0,s),e=s[r]):t(0,s[r].activated=!1,s);U.set(s);for(let s of Object.keys(i))t(4,i[s]="",i);t(1,r={}),t(1,r.ref=e._id,r),t(1,r.name=e.name,r),t(1,r.configurations=[],r),P.set(r);let c="/api/db1/scenario_configurations/ref-"+e._id;V(c,(function(e){let a=JSON.parse(e.response);if(a.data&&a.data.length>0){t(1,r=a.data[0]);for(let e=0;e<o.length;e++){let a=e.toString();t(4,i[a]="",i);let s=o[e].short_id;for(let e=0;e<r.configurations.length;e++){s==r.configurations[e].container_info.short_id&&(t(4,i[a]="background-color: #acddb4;",i),e=r.configurations.length)}}P.set(r)}}))},function(){if(!h())return void _.danger("please create and activate a scenario first.");let e=this.parentElement.parentElement.parentElement.parentElement.getAttribute("index");t(4,i[e]="background-color: #acddb4;",i);let a=o[parseInt(e)],s={},c=a.name,n=a.ports.split(",")[0].split("/")[0];V("/containers/"+c+"/"+n+"/configs",(function(e){let t=JSON.parse(e.response);t.data&&"data"in t.data&&(s=t.data.data),r.configurations.push({container_info:a,configs:s}),P.set(r)}))},function(){if(!h())return void _.danger("please create and activate a scenario first.");let e=this.parentElement.parentElement.parentElement.parentElement.getAttribute("index");t(4,i[e]="",i);let a=o[parseInt(e)].short_id,s=-1;for(let t=0;t<r.configurations.length;t++)r.configurations[t].container_info.short_id==a&&(s=t,t=r.configurations.length);s>-1&&r.configurations.splice(s,1),P.set(r)},function(){let e=this.getAttribute("ref"),a=document.getElementById(e+"ID"),r=document.getElementById(e);if(""!=a.value&&""!=r.value){let e=!1,c=-1;for(let t=0;t<s.length;t++)s[t]._id==a.value&&(e=!0,c=t,t=s.length);if(!e)return void _.danger("scenario identifier does not exist.");let n="/api/db1/scenarios/"+a.value,l={name:r.value};z(n,"PUT",l,(function(e){t(0,s[c].name=r.value,s),U.set(s),_.success("Scenario renamed successfully.")}))}else _.danger("please provide scenario identifier and new name.")},function(){let e=!1,a=parseInt(this.parentElement.parentElement.parentElement.parentElement.getAttribute("index"));s[a].activated&&(e=!0);let c=s[a]._id;if(z("/api/db1/scenarios/"+c,"DELETE",{},(function(e){s.splice(a,1),U.set(s),_.success("Scenario deleted successfully.")})),z("/api/db1/scenario_configurations/ref-"+c,"DELETE",{},(function(e){_.success("Scenario configuration deleted successfully.")})),e){t(1,r={}),P.set(r);for(let e of Object.keys(i))t(4,i[e]="",i)}},function(){let e=this.getAttribute("ref");if(""!=e){let a=document.getElementById(e);if(""!=a.value){let e={name:a.value},t="/api/db1/scenarios";console.log("createNewScenario request with body:",e," and url:",t),z(t,"POST",e,(function(e){console.log(e,"response from createNewScenario"),s.push({_id:e.data,name:a.value,activated:!1}),U.set(s),_.success("New scenario created.")}))}else _.danger("please provide scenario name.")}}]}export default class extends e{constructor(e){super(),a(this,e,ve,fe,t,{},[-1,-1])}}
