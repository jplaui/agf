import{C as e,S as t,i as a,s as n,e as s,t as r,k as c,c as o,a as l,g as i,d as f,n as h,b as u,f as d,G as v,l as p,M as g,N as m,O as E,P as b,h as w,Q as T,j as y,L as k,m as S,o as D,v as N,r as I,w as A,R as _,T as O,z as x,U,V as B}from"../../chunks/vendor-dc4ce95f.js";/* empty css                                                       */import{T as C,x as H,n as P,a as z,m as R}from"../../chunks/requests-7a5f6942.js";const V=e([{_id:223,name:"Test DoS Attack",activated:!0},{_id:324,name:"Sample Scenario",activated:!1}]),j=e({});const{document:L}=U;function M(e,t,a){const n=e.slice();return n[19]=t[a],n[21]=a,n}function $(e,t,a){const n=e.slice();return n[22]=t[a][0],n[23]=t[a][1],n}function q(e,t,a){const n=e.slice();return n[26]=t[a].short_id,n[27]=t[a].name,n[28]=t[a].ports,n[21]=a,n}function J(e,t,a){const n=e.slice();return n[30]=t[a],n[21]=a,n}function F(e,t,a){const n=e.slice();return n[22]=t[a][0],n[23]=t[a][1],n}function G(e,t,a){const n=e.slice();return n[22]=t[a][0],n[23]=t[a][1],n}function Q(e){let t,a,n,p,m,E,b,w,T,y,k,S,D,N,I,A=e[0],_=[];for(let s=0;s<A.length;s+=1)_[s]=Z(J(e,A,s));return{c(){t=s("table"),a=s("thead"),n=s("tr"),p=s("th"),m=r("ID"),E=c(),b=s("th"),w=r("Name"),T=c(),y=s("th"),k=r("Activated"),S=c(),D=s("th"),N=r("Actions"),I=c();for(let e=0;e<_.length;e+=1)_[e].c();this.h()},l(e){t=o(e,"TABLE",{class:!0});var s=l(t);a=o(s,"THEAD",{});var r=l(a);n=o(r,"TR",{class:!0});var c=l(n);p=o(c,"TH",{});var u=l(p);m=i(u,"ID"),u.forEach(f),E=h(c),b=o(c,"TH",{});var d=l(b);w=i(d,"Name"),d.forEach(f),T=h(c),y=o(c,"TH",{});var v=l(y);k=i(v,"Activated"),v.forEach(f),S=h(c),D=o(c,"TH",{});var g=l(D);N=i(g,"Actions"),g.forEach(f),c.forEach(f),r.forEach(f),I=h(s);for(let t=0;t<_.length;t+=1)_[t].l(s);s.forEach(f),this.h()},h(){u(n,"class","w3-dark-grey"),u(t,"class","w3-table-all w3-centered")},m(e,s){d(e,t,s),v(t,a),v(a,n),v(n,p),v(p,m),v(n,E),v(n,b),v(b,w),v(n,T),v(n,y),v(y,k),v(n,S),v(n,D),v(D,N),v(t,I);for(let a=0;a<_.length;a+=1)_[a].m(t,null)},p(e,a){if(4357&a[0]){let n;for(A=e[0],n=0;n<A.length;n+=1){const s=J(e,A,n);_[n]?_[n].p(s,a):(_[n]=Z(s),_[n].c(),_[n].m(t,null))}for(;n<_.length;n+=1)_[n].d(1);_.length=A.length}},d(e){e&&f(t),g(_,e)}}}function K(e){let t,a,n,p,g,m,b,w,y,k,S,D,N,I,A,O,x=[],U=new Map,C=Object.entries(e[30]);const H=e=>e[22];for(let s=0;s<C.length;s+=1){let t=F(e,C,s),a=H(t);U.set(a,x[s]=X(a,t))}return{c(){t=s("tr");for(let e=0;e<x.length;e+=1)x[e].c();a=c(),n=s("td"),p=s("div"),g=s("div"),m=s("button"),b=r("Activate"),w=c(),y=s("button"),k=r("Copy"),S=c(),D=s("button"),N=r("Delete"),I=c(),this.h()},l(e){t=o(e,"TR",{index:!0});var s=l(t);for(let t=0;t<x.length;t+=1)x[t].l(s);a=h(s),n=o(s,"TD",{class:!0});var r=l(n);p=o(r,"DIV",{class:!0});var c=l(p);g=o(c,"DIV",{class:!0});var u=l(g);m=o(u,"BUTTON",{});var d=l(m);b=i(d,"Activate"),d.forEach(f),w=h(u),y=o(u,"BUTTON",{});var v=l(y);k=i(v,"Copy"),v.forEach(f),S=h(u),D=o(u,"BUTTON",{});var E=l(D);N=i(E,"Delete"),E.forEach(f),u.forEach(f),c.forEach(f),r.forEach(f),I=h(s),s.forEach(f),this.h()},h(){u(g,"class","w3-bar"),u(p,"class","w3-show-inline-block"),u(n,"class","svelte-17uzir7"),u(t,"index",e[21])},m(s,r){d(s,t,r);for(let e=0;e<x.length;e+=1)x[e].m(t,null);v(t,a),v(t,n),v(n,p),v(p,g),v(g,m),v(m,b),v(g,w),v(g,y),v(y,k),v(g,S),v(g,D),v(D,N),v(t,I),A||(O=[E(m,"click",e[8]),E(y,"click",de),E(D,"click",e[12])],A=!0)},p(e,n){1&n[0]&&(C=Object.entries(e[30]),x=T(x,n,H,1,e,C,U,t,B,X,a,F))},d(e){e&&f(t);for(let t=0;t<x.length;t+=1)x[t].d();A=!1,_(O)}}}function W(e){let t,a,n,p,g,b,w,y,k,S,D,N,I,A,O,x,U=[],C=new Map,H=Object.entries(e[30]);const P=e=>e[22];for(let s=0;s<H.length;s+=1){let t=G(e,H,s),a=P(t);C.set(a,U[s]=Y(a,t))}return{c(){t=s("tr");for(let e=0;e<U.length;e+=1)U[e].c();a=c(),n=s("td"),p=s("div"),g=s("div"),b=s("button"),w=r("Activate"),y=c(),k=s("button"),S=r("Copy"),D=c(),N=s("button"),I=r("Delete"),A=c(),this.h()},l(e){t=o(e,"TR",{index:!0,style:!0});var s=l(t);for(let t=0;t<U.length;t+=1)U[t].l(s);a=h(s),n=o(s,"TD",{class:!0});var r=l(n);p=o(r,"DIV",{class:!0});var c=l(p);g=o(c,"DIV",{class:!0});var u=l(g);b=o(u,"BUTTON",{});var d=l(b);w=i(d,"Activate"),d.forEach(f),y=h(u),k=o(u,"BUTTON",{});var v=l(k);S=i(v,"Copy"),v.forEach(f),D=h(u),N=o(u,"BUTTON",{});var m=l(N);I=i(m,"Delete"),m.forEach(f),u.forEach(f),c.forEach(f),r.forEach(f),A=h(s),s.forEach(f),this.h()},h(){u(g,"class","w3-bar"),u(p,"class","w3-show-inline-block"),u(n,"class","svelte-17uzir7"),u(t,"index",e[21]),m(t,"background-color","#acddb4")},m(s,r){d(s,t,r);for(let e=0;e<U.length;e+=1)U[e].m(t,null);v(t,a),v(t,n),v(n,p),v(p,g),v(g,b),v(b,w),v(g,y),v(g,k),v(k,S),v(g,D),v(g,N),v(N,I),v(t,A),O||(x=[E(b,"click",e[8]),E(k,"click",de),E(N,"click",e[12])],O=!0)},p(e,n){1&n[0]&&(H=Object.entries(e[30]),U=T(U,n,P,1,e,H,C,t,B,Y,a,G))},d(e){e&&f(t);for(let t=0;t<U.length;t+=1)U[t].d();O=!1,_(x)}}}function X(e,t){let a,n,c=t[23]+"";return{key:e,first:null,c(){a=s("td"),n=r(c),this.h()},l(e){a=o(e,"TD",{class:!0});var t=l(a);n=i(t,c),t.forEach(f),this.h()},h(){u(a,"class","svelte-17uzir7"),this.first=a},m(e,t){d(e,a,t),v(a,n)},p(e,a){t=e,1&a[0]&&c!==(c=t[23]+"")&&w(n,c)},d(e){e&&f(a)}}}function Y(e,t){let a,n,c=t[23]+"";return{key:e,first:null,c(){a=s("td"),n=r(c),this.h()},l(e){a=o(e,"TD",{class:!0});var t=l(a);n=i(t,c),t.forEach(f),this.h()},h(){u(a,"class","svelte-17uzir7"),this.first=a},m(e,t){d(e,a,t),v(a,n)},p(e,a){t=e,1&a[0]&&c!==(c=t[23]+"")&&w(n,c)},d(e){e&&f(a)}}}function Z(e){let t;function a(e,t){return e[2]==e[21]?W:K}let n=a(e),s=n(e);return{c(){s.c(),t=p()},l(e){s.l(e),t=p()},m(e,a){s.m(e,a),d(e,t,a)},p(e,r){n===(n=a(e))&&s?s.p(e,r):(s.d(1),s=n(e),s&&(s.c(),s.m(t.parentNode,t)))},d(e){s.d(e),e&&f(t)}}}function ee(e){let t,a,n,p,m,E,b,w,T,y,k,S,D,N,I,A=e[3],_=[];for(let s=0;s<A.length;s+=1)_[s]=ne(q(e,A,s));return{c(){t=s("table"),a=s("thead"),n=s("tr"),p=s("th"),m=r("ShortID"),E=c(),b=s("th"),w=r("Name"),T=c(),y=s("th"),k=r("Ports"),S=c(),D=s("th"),N=r("Actions"),I=c();for(let e=0;e<_.length;e+=1)_[e].c();this.h()},l(e){t=o(e,"TABLE",{class:!0});var s=l(t);a=o(s,"THEAD",{});var r=l(a);n=o(r,"TR",{class:!0});var c=l(n);p=o(c,"TH",{});var u=l(p);m=i(u,"ShortID"),u.forEach(f),E=h(c),b=o(c,"TH",{});var d=l(b);w=i(d,"Name"),d.forEach(f),T=h(c),y=o(c,"TH",{});var v=l(y);k=i(v,"Ports"),v.forEach(f),S=h(c),D=o(c,"TH",{});var g=l(D);N=i(g,"Actions"),g.forEach(f),c.forEach(f),r.forEach(f),I=h(s);for(let t=0;t<_.length;t+=1)_[t].l(s);s.forEach(f),this.h()},h(){u(n,"class","w3-dark-grey"),u(t,"class","w3-table-all w3-centered")},m(e,s){d(e,t,s),v(t,a),v(a,n),v(n,p),v(p,m),v(n,E),v(n,b),v(b,w),v(n,T),v(n,y),v(y,k),v(n,S),v(n,D),v(D,N),v(t,I);for(let a=0;a<_.length;a+=1)_[a].m(t,null)},p(e,a){if(1560&a[0]){let n;for(A=e[3],n=0;n<A.length;n+=1){const s=q(e,A,n);_[n]?_[n].p(s,a):(_[n]=ne(s),_[n].c(),_[n].m(t,null))}for(;n<_.length;n+=1)_[n].d(1);_.length=A.length}},d(e){e&&f(t),g(_,e)}}}function te(e){let t,a,n,p,g,m,b,T,y,k,S,D,N,I,A,O,x,U,B,C,H,P=e[26]+"",z=e[27]+"",R=e[28]+"";return{c(){t=s("tr"),a=s("td"),n=r(P),p=c(),g=s("td"),m=r(z),b=c(),T=s("td"),y=r(R),k=c(),S=s("td"),D=s("div"),N=s("div"),I=s("button"),A=r("Activate"),O=c(),x=s("button"),U=r("Deactivate"),B=c(),this.h()},l(e){t=o(e,"TR",{index:!0});var s=l(t);a=o(s,"TD",{class:!0});var r=l(a);n=i(r,P),r.forEach(f),p=h(s),g=o(s,"TD",{class:!0});var c=l(g);m=i(c,z),c.forEach(f),b=h(s),T=o(s,"TD",{class:!0});var u=l(T);y=i(u,R),u.forEach(f),k=h(s),S=o(s,"TD",{class:!0});var d=l(S);D=o(d,"DIV",{class:!0});var v=l(D);N=o(v,"DIV",{class:!0});var E=l(N);I=o(E,"BUTTON",{});var w=l(I);A=i(w,"Activate"),w.forEach(f),O=h(E),x=o(E,"BUTTON",{});var _=l(x);U=i(_,"Deactivate"),_.forEach(f),E.forEach(f),v.forEach(f),d.forEach(f),B=h(s),s.forEach(f),this.h()},h(){u(a,"class","svelte-17uzir7"),u(g,"class","svelte-17uzir7"),u(T,"class","svelte-17uzir7"),u(N,"class","w3-bar"),u(D,"class","w3-show-inline-block"),u(S,"class","svelte-17uzir7"),u(t,"index",e[21])},m(s,r){d(s,t,r),v(t,a),v(a,n),v(t,p),v(t,g),v(g,m),v(t,b),v(t,T),v(T,y),v(t,k),v(t,S),v(S,D),v(D,N),v(N,I),v(I,A),v(N,O),v(N,x),v(x,U),v(t,B),C||(H=[E(I,"click",e[9]),E(x,"click",e[10])],C=!0)},p(e,t){8&t[0]&&P!==(P=e[26]+"")&&w(n,P),8&t[0]&&z!==(z=e[27]+"")&&w(m,z),8&t[0]&&R!==(R=e[28]+"")&&w(y,R)},d(e){e&&f(t),C=!1,_(H)}}}function ae(e){let t,a,n,p,g,m,b,T,y,k,S,D,N,I,A,O,x,U,B,C,H,P,z=e[26]+"",R=e[27]+"",V=e[28]+"";return{c(){t=s("tr"),a=s("td"),n=r(z),p=c(),g=s("td"),m=r(R),b=c(),T=s("td"),y=r(V),k=c(),S=s("td"),D=s("div"),N=s("div"),I=s("button"),A=r("Activate"),O=c(),x=s("button"),U=r("Deactivate"),B=c(),this.h()},l(e){t=o(e,"TR",{index:!0,style:!0});var s=l(t);a=o(s,"TD",{class:!0});var r=l(a);n=i(r,z),r.forEach(f),p=h(s),g=o(s,"TD",{class:!0});var c=l(g);m=i(c,R),c.forEach(f),b=h(s),T=o(s,"TD",{class:!0});var u=l(T);y=i(u,V),u.forEach(f),k=h(s),S=o(s,"TD",{class:!0});var d=l(S);D=o(d,"DIV",{class:!0});var v=l(D);N=o(v,"DIV",{class:!0});var E=l(N);I=o(E,"BUTTON",{});var w=l(I);A=i(w,"Activate"),w.forEach(f),O=h(E),x=o(E,"BUTTON",{});var _=l(x);U=i(_,"Deactivate"),_.forEach(f),E.forEach(f),v.forEach(f),d.forEach(f),B=h(s),s.forEach(f),this.h()},h(){u(a,"class","svelte-17uzir7"),u(g,"class","svelte-17uzir7"),u(T,"class","svelte-17uzir7"),u(N,"class","w3-bar"),u(D,"class","w3-show-inline-block"),u(S,"class","svelte-17uzir7"),u(t,"index",e[21]),u(t,"style",C=e[4][e[21]])},m(s,r){d(s,t,r),v(t,a),v(a,n),v(t,p),v(t,g),v(g,m),v(t,b),v(t,T),v(T,y),v(t,k),v(t,S),v(S,D),v(D,N),v(N,I),v(I,A),v(N,O),v(N,x),v(x,U),v(t,B),H||(P=[E(I,"click",e[9]),E(x,"click",e[10])],H=!0)},p(e,a){8&a[0]&&z!==(z=e[26]+"")&&w(n,z),8&a[0]&&R!==(R=e[27]+"")&&w(m,R),8&a[0]&&V!==(V=e[28]+"")&&w(y,V),16&a[0]&&C!==(C=e[4][e[21]])&&u(t,"style",C)},d(e){e&&f(t),H=!1,_(P)}}}function ne(e){let t;function a(e,t){return e[21]in e[4]?ae:te}let n=a(e),s=n(e);return{c(){s.c(),t=p()},l(e){s.l(e),t=p()},m(e,a){s.m(e,a),d(e,t,a)},p(e,r){n===(n=a(e))&&s?s.p(e,r):(s.d(1),s=n(e),s&&(s.c(),s.m(t.parentNode,t)))},d(e){s.d(e),e&&f(t)}}}function se(e){let t,a=e[1].configurations.length>0&&re(e);return{c(){a&&a.c(),t=p()},l(e){a&&a.l(e),t=p()},m(e,n){a&&a.m(e,n),d(e,t,n)},p(e,n){e[1].configurations.length>0?a?a.p(e,n):(a=re(e),a.c(),a.m(t.parentNode,t)):a&&(a.d(1),a=null)},d(e){a&&a.d(e),e&&f(t)}}}function re(e){let t,a=e[1].configurations,n=[];for(let s=0;s<a.length;s+=1)n[s]=he(M(e,a,s));return{c(){for(let e=0;e<n.length;e+=1)n[e].c();t=p()},l(e){for(let t=0;t<n.length;t+=1)n[t].l(e);t=p()},m(e,a){for(let t=0;t<n.length;t+=1)n[t].m(e,a);d(e,t,a)},p(e,s){if(130&s[0]){let r;for(a=e[1].configurations,r=0;r<a.length;r+=1){const c=M(e,a,r);n[r]?n[r].p(c,s):(n[r]=he(c),n[r].c(),n[r].m(t.parentNode,t))}for(;r<n.length;r+=1)n[r].d(1);n.length=a.length}},d(e){g(n,e),e&&f(t)}}}function ce(e){let t,a,n,p,g,m,E,b=e[22]+"";return{c(){t=s("label"),a=s("b"),n=r(b),p=c(),g=s("input"),this.h()},l(e){t=o(e,"LABEL",{class:!0});var s=l(t);a=o(s,"B",{});var r=l(a);n=i(r,b),r.forEach(f),s.forEach(f),p=h(e),g=o(e,"INPUT",{class:!0,type:!0,key:!0,value:!0}),this.h()},h(){u(t,"class",""),u(g,"class","w3-input w3-border"),u(g,"type","list"),u(g,"key",m=e[22]),g.value=E=e[23].join()},m(e,s){d(e,t,s),v(t,a),v(a,n),d(e,p,s),d(e,g,s)},p(e,t){2&t[0]&&b!==(b=e[22]+"")&&w(n,b),2&t[0]&&m!==(m=e[22])&&u(g,"key",m),2&t[0]&&E!==(E=e[23].join())&&(g.value=E)},d(e){e&&f(t),e&&f(p),e&&f(g)}}}function oe(e){let t,a,n,p,g,m,E,b=e[22]+"";return{c(){t=s("input"),p=c(),g=s("label"),m=s("b"),E=r(b),this.h()},l(e){t=o(e,"INPUT",{class:!0,type:!0,key:!0,checked:!0}),p=h(e),g=o(e,"LABEL",{class:!0});var a=l(g);m=o(a,"B",{});var n=l(m);E=i(n,b),n.forEach(f),a.forEach(f),this.h()},h(){u(t,"class","w3-check"),u(t,"type","checkbox"),u(t,"key",a=e[22]),t.checked=n=e[23],u(g,"class","")},m(e,a){d(e,t,a),d(e,p,a),d(e,g,a),v(g,m),v(m,E)},p(e,s){2&s[0]&&a!==(a=e[22])&&u(t,"key",a),2&s[0]&&n!==(n=e[23])&&(t.checked=n),2&s[0]&&b!==(b=e[22]+"")&&w(E,b)},d(e){e&&f(t),e&&f(p),e&&f(g)}}}function le(e){let t,a,n,p,g,m,E,b=e[22]+"";return{c(){t=s("label"),a=s("b"),n=r(b),p=c(),g=s("input"),this.h()},l(e){t=o(e,"LABEL",{class:!0});var s=l(t);a=o(s,"B",{});var r=l(a);n=i(r,b),r.forEach(f),s.forEach(f),p=h(e),g=o(e,"INPUT",{class:!0,type:!0,key:!0,value:!0}),this.h()},h(){u(t,"class",""),u(g,"class","w3-input w3-border"),u(g,"type","string"),u(g,"key",m=e[22]),g.value=E=e[23]},m(e,s){d(e,t,s),v(t,a),v(a,n),d(e,p,s),d(e,g,s)},p(e,t){2&t[0]&&b!==(b=e[22]+"")&&w(n,b),2&t[0]&&m!==(m=e[22])&&u(g,"key",m),2&t[0]&&E!==(E=e[23])&&(g.value=E)},d(e){e&&f(t),e&&f(p),e&&f(g)}}}function ie(e){let t,a,n,p,g,m,E,b=e[22]+"";return{c(){t=s("label"),a=s("b"),n=r(b),p=c(),g=s("input"),this.h()},l(e){t=o(e,"LABEL",{class:!0});var s=l(t);a=o(s,"B",{});var r=l(a);n=i(r,b),r.forEach(f),s.forEach(f),p=h(e),g=o(e,"INPUT",{class:!0,type:!0,convert:!0,key:!0,value:!0}),this.h()},h(){u(t,"class",""),u(g,"class","w3-input w3-border"),u(g,"type","string"),u(g,"convert","required"),u(g,"key",m=e[22]),g.value=E=e[23]},m(e,s){d(e,t,s),v(t,a),v(a,n),d(e,p,s),d(e,g,s)},p(e,t){2&t[0]&&b!==(b=e[22]+"")&&w(n,b),2&t[0]&&m!==(m=e[22])&&u(g,"key",m),2&t[0]&&E!==(E=e[23])&&(g.value=E)},d(e){e&&f(t),e&&f(p),e&&f(g)}}}function fe(e,t){let a;function n(e,t){return"number"==typeof e[23]?ie:"string"==typeof e[23]?le:"boolean"==typeof e[23]?oe:"object"==typeof e[23]?ce:void 0}let r=n(t),c=r&&r(t);return{key:e,first:null,c(){a=s("p"),c&&c.c(),this.h()},l(e){a=o(e,"P",{});var t=l(a);c&&c.l(t),t.forEach(f),this.h()},h(){this.first=a},m(e,t){d(e,a,t),c&&c.m(a,null)},p(e,s){r===(r=n(t=e))&&c?c.p(t,s):(c&&c.d(1),c=r&&r(t),c&&(c.c(),c.m(a,null)))},d(e){e&&f(a),c&&c.d()}}}function he(e){let t,a,n,p,g,y,k,S,D,N,I,A,_,O,x,U,C,H,P,z,R,V,j,L=e[19].container_info.name+"",M=[],q=new Map,J=Object.entries(e[19].configs);const F=e=>e[22];for(let s=0;s<J.length;s+=1){let t=$(e,J,s),a=F(t);q.set(a,M[s]=fe(a,t))}return{c(){t=s("div"),a=s("div"),n=s("h2"),p=r(L),g=c(),y=s("p"),k=r("Description here from application configs"),S=c(),D=s("div"),N=s("form"),I=s("h5"),A=r("Update Form"),_=c();for(let e=0;e<M.length;e+=1)M[e].c();O=c(),x=s("p"),U=s("input"),P=c(),z=s("hr"),R=c(),this.h()},l(e){t=o(e,"DIV",{class:!0});var s=l(t);a=o(s,"DIV",{class:!0});var r=l(a);n=o(r,"H2",{class:!0,style:!0});var c=l(n);p=i(c,L),c.forEach(f),g=h(r),y=o(r,"P",{});var u=l(y);k=i(u,"Description here from application configs"),u.forEach(f),r.forEach(f),S=h(s),D=o(s,"DIV",{class:!0});var d=l(D);N=o(d,"FORM",{name:!0,port:!0,index:!0,class:!0});var v=l(N);I=o(v,"H5",{class:!0,style:!0});var m=l(I);A=i(m,"Update Form"),m.forEach(f),_=h(v);for(let t=0;t<M.length;t+=1)M[t].l(v);O=h(v),x=o(v,"P",{});var E=l(x);U=o(E,"INPUT",{class:!0,type:!0,value:!0}),E.forEach(f),v.forEach(f),d.forEach(f),s.forEach(f),P=h(e),z=o(e,"HR",{class:!0}),R=h(e),this.h()},h(){u(n,"class","w3-text-orange"),m(n,"text-shadow","1px 1px 0 #444"),u(a,"class","w3-third w3-container w3-blue"),u(I,"class","w3-text-orange"),m(I,"text-shadow","1px 1px 0 #444"),u(U,"class","w3-blue"),u(U,"type","submit"),U.value="Update",u(N,"name",C=e[19].container_info.name),u(N,"port",H=e[19].container_info.ports),u(N,"index",e[21]),u(N,"class","w3-container"),u(D,"class","w3-twothird w3-container w3-gray"),u(t,"class","w3-row w3-border"),u(z,"class","svelte-17uzir7")},m(s,r){d(s,t,r),v(t,a),v(a,n),v(n,p),v(a,g),v(a,y),v(y,k),v(t,S),v(t,D),v(D,N),v(N,I),v(I,A),v(N,_);for(let e=0;e<M.length;e+=1)M[e].m(N,null);v(N,O),v(N,x),v(x,U),d(s,P,r),d(s,z,r),d(s,R,r),V||(j=E(N,"submit",b(e[7])),V=!0)},p(e,t){2&t[0]&&L!==(L=e[19].container_info.name+"")&&w(p,L),2&t[0]&&(J=Object.entries(e[19].configs),M=T(M,t,F,1,e,J,q,N,B,fe,O,$)),2&t[0]&&C!==(C=e[19].container_info.name)&&u(N,"name",C),2&t[0]&&H!==(H=e[19].container_info.ports)&&u(N,"port",H)},d(e){e&&f(t);for(let t=0;t<M.length;t+=1)M[t].d();e&&f(P),e&&f(z),e&&f(R),V=!1,j()}}}function ue(e){let t,a,n,p,g,m,b,w,T,O,x,U,B,H,P,z,R,V,j,M,$,q,J,F,G,K,W,X,Y,Z,te,ae,ne,re,ce,oe,le,ie,fe,he,ue,de,ve,pe,ge,me,Ee,be,we,Te,ye,ke,Se,De,Ne,Ie,Ae,_e,Oe,xe,Ue,Be,Ce,He,Pe;a=new C({});let ze=e[0].length>0&&Q(e),Re=e[3].length>0&&ee(e),Ve="configurations"in e[1]&&se(e);return{c(){t=c(),y(a.$$.fragment),n=c(),p=s("hr"),g=c(),m=s("section"),b=s("h2"),w=r("Scenario Management"),T=c(),O=s("hr"),x=c(),U=s("section"),B=s("h3"),H=r("Select scenario"),P=c(),z=s("section"),ze&&ze.c(),R=c(),V=s("div"),j=s("div"),M=s("button"),$=r("Create Scenario"),q=c(),J=s("div"),F=s("input"),G=c(),K=s("div"),W=s("div"),X=s("button"),Y=r("Rename Scenario"),Z=c(),te=s("div"),ae=s("input"),ne=c(),re=s("div"),ce=s("input"),oe=c(),le=s("hr"),ie=c(),fe=s("h2"),he=r("Configure Scenarios"),ue=c(),de=s("hr"),ve=c(),pe=s("section"),ge=s("h3"),me=r("Select containers"),Ee=c(),be=s("section"),Re&&Re.c(),we=c(),Te=s("hr"),ye=c(),ke=s("section"),Se=s("h3"),De=r("Configure containers"),Ne=c(),Ie=s("section"),Ae=s("button"),_e=r("Reset Configurations"),Oe=c(),Ve&&Ve.c(),xe=c(),Ue=s("button"),Be=r("Save Configurations"),this.h()},l(e){k('[data-svelte="svelte-101i1i0"]',L.head).forEach(f),t=h(e),S(a.$$.fragment,e),n=h(e),p=o(e,"HR",{class:!0}),g=h(e),m=o(e,"SECTION",{class:!0});var s=l(m);b=o(s,"H2",{});var r=l(b);w=i(r,"Scenario Management"),r.forEach(f),s.forEach(f),T=h(e),O=o(e,"HR",{class:!0}),x=h(e),U=o(e,"SECTION",{class:!0});var c=l(U);B=o(c,"H3",{});var u=l(B);H=i(u,"Select scenario"),u.forEach(f),c.forEach(f),P=h(e),z=o(e,"SECTION",{class:!0});var d=l(z);ze&&ze.l(d),R=h(d),V=o(d,"DIV",{class:!0});var v=l(V);j=o(v,"DIV",{class:!0});var E=l(j);M=o(E,"BUTTON",{ref:!0,class:!0});var y=l(M);$=i(y,"Create Scenario"),y.forEach(f),E.forEach(f),q=h(v),J=o(v,"DIV",{class:!0});var D=l(J);F=o(D,"INPUT",{id:!0,class:!0,name:!0,type:!0,placeholder:!0}),D.forEach(f),v.forEach(f),G=h(d),K=o(d,"DIV",{class:!0});var N=l(K);W=o(N,"DIV",{class:!0});var I=l(W);X=o(I,"BUTTON",{ref:!0,class:!0});var A=l(X);Y=i(A,"Rename Scenario"),A.forEach(f),I.forEach(f),Z=h(N),te=o(N,"DIV",{class:!0});var _=l(te);ae=o(_,"INPUT",{id:!0,class:!0,name:!0,type:!0,placeholder:!0}),_.forEach(f),ne=h(N),re=o(N,"DIV",{class:!0});var C=l(re);ce=o(C,"INPUT",{id:!0,class:!0,name:!0,type:!0,placeholder:!0}),C.forEach(f),N.forEach(f),d.forEach(f),oe=h(e),le=o(e,"HR",{class:!0}),ie=h(e),fe=o(e,"H2",{});var Q=l(fe);he=i(Q,"Configure Scenarios"),Q.forEach(f),ue=h(e),de=o(e,"HR",{class:!0}),ve=h(e),pe=o(e,"SECTION",{class:!0});var ee=l(pe);ge=o(ee,"H3",{});var se=l(ge);me=i(se,"Select containers"),se.forEach(f),ee.forEach(f),Ee=h(e),be=o(e,"SECTION",{class:!0});var Ce=l(be);Re&&Re.l(Ce),Ce.forEach(f),we=h(e),Te=o(e,"HR",{class:!0}),ye=h(e),ke=o(e,"SECTION",{class:!0});var He=l(ke);Se=o(He,"H3",{});var Pe=l(Se);De=i(Pe,"Configure containers"),Pe.forEach(f),He.forEach(f),Ne=h(e),Ie=o(e,"SECTION",{class:!0});var je=l(Ie);Ae=o(je,"BUTTON",{class:!0});var Le=l(Ae);_e=i(Le,"Reset Configurations"),Le.forEach(f),Oe=h(je),Ve&&Ve.l(je),xe=h(je),Ue=o(je,"BUTTON",{class:!0});var Me=l(Ue);Be=i(Me,"Save Configurations"),Me.forEach(f),je.forEach(f),this.h()},h(){L.title="Configuration and Scheduling",u(p,"class","svelte-17uzir7"),u(m,"class","page-headline"),u(O,"class","svelte-17uzir7"),u(U,"class","page-headline"),u(M,"ref","createNewScenario"),u(M,"class","w3-col w3-input w3-border"),u(j,"class","w3-third"),u(F,"id","createNewScenario"),u(F,"class","w3-input w3-border"),u(F,"name","name"),u(F,"type","text"),u(F,"placeholder","Scenario Name"),u(J,"class","w3-rest"),u(V,"class","w3-row w3-section"),u(X,"ref","renameScenario"),u(X,"class","w3-col w3-input w3-border"),u(W,"class","w3-third"),u(ae,"id","renameScenarioID"),u(ae,"class","w3-input w3-border"),u(ae,"name","id"),u(ae,"type","text"),u(ae,"placeholder","Scenario Identifier"),u(te,"class","w3-third"),u(ce,"id","renameScenario"),u(ce,"class","w3-input w3-border"),u(ce,"name","name"),u(ce,"type","text"),u(ce,"placeholder","Scenario Name"),u(re,"class","w3-rest"),u(K,"class","w3-row w3-section"),u(z,"class","w3-container"),u(le,"class","svelte-17uzir7"),u(de,"class","svelte-17uzir7"),u(pe,"class","page-headline"),u(be,"class","w3-container"),u(Te,"class","svelte-17uzir7"),u(ke,"class","page-headline"),u(Ae,"class","w3-col w3-input w3-border w3-margin-bottom"),u(Ue,"class","w3-col w3-input w3-border w3-margin-top"),u(Ie,"class","w3-container")},m(s,r){d(s,t,r),D(a,s,r),d(s,n,r),d(s,p,r),d(s,g,r),d(s,m,r),v(m,b),v(b,w),d(s,T,r),d(s,O,r),d(s,x,r),d(s,U,r),v(U,B),v(B,H),d(s,P,r),d(s,z,r),ze&&ze.m(z,null),v(z,R),v(z,V),v(V,j),v(j,M),v(M,$),v(V,q),v(V,J),v(J,F),v(z,G),v(z,K),v(K,W),v(W,X),v(X,Y),v(K,Z),v(K,te),v(te,ae),v(K,ne),v(K,re),v(re,ce),d(s,oe,r),d(s,le,r),d(s,ie,r),d(s,fe,r),v(fe,he),d(s,ue,r),d(s,de,r),d(s,ve,r),d(s,pe,r),v(pe,ge),v(ge,me),d(s,Ee,r),d(s,be,r),Re&&Re.m(be,null),d(s,we,r),d(s,Te,r),d(s,ye,r),d(s,ke,r),v(ke,Se),v(Se,De),d(s,Ne,r),d(s,Ie,r),v(Ie,Ae),v(Ae,_e),v(Ie,Oe),Ve&&Ve.m(Ie,null),v(Ie,xe),v(Ie,Ue),v(Ue,Be),Ce=!0,He||(Pe=[E(M,"click",e[13]),E(X,"click",e[11]),E(Ae,"click",e[5]),E(Ue,"click",e[6])],He=!0)},p(e,t){e[0].length>0?ze?ze.p(e,t):(ze=Q(e),ze.c(),ze.m(z,R)):ze&&(ze.d(1),ze=null),e[3].length>0?Re?Re.p(e,t):(Re=ee(e),Re.c(),Re.m(be,null)):Re&&(Re.d(1),Re=null),"configurations"in e[1]?Ve?Ve.p(e,t):(Ve=se(e),Ve.c(),Ve.m(Ie,xe)):Ve&&(Ve.d(1),Ve=null)},i(e){Ce||(N(a.$$.fragment,e),Ce=!0)},o(e){I(a.$$.fragment,e),Ce=!1},d(e){e&&f(t),A(a,e),e&&f(n),e&&f(p),e&&f(g),e&&f(m),e&&f(T),e&&f(O),e&&f(x),e&&f(U),e&&f(P),e&&f(z),ze&&ze.d(),e&&f(oe),e&&f(le),e&&f(ie),e&&f(fe),e&&f(ue),e&&f(de),e&&f(ve),e&&f(pe),e&&f(Ee),e&&f(be),Re&&Re.d(),e&&f(we),e&&f(Te),e&&f(ye),e&&f(ke),e&&f(Ne),e&&f(Ie),Ve&&Ve.d(),He=!1,_(Pe)}}}function de(){console.log(this,"copyScenario")}function ve(e,t,a){let n=[],s={};const r=V.subscribe((e=>{a(0,n=e)})),c=j.subscribe((e=>{a(1,s=e)}));let o;O((()=>{r(),c()}));let l=[{short_id:"123",name:"DoS Attack",ports:"8010"},{short_id:"1243",name:"Replay Attack",ports:"8020"},{short_id:"122",name:"MitM",ports:"8030"}],i={};function f(){let e=!1;for(let t=0;t<n.length;t++)n[t].activated&&(e=!0);return e}return x((async()=>{H("/api/db1/scenarios",(function(e){let t=JSON.parse(e.response);if(t.data){console.log("scenarios array:",t.data);for(let e=0;e<t.data.length;e++)t.data[e].activated=!1;V.set(t.data),console.log("store set with: ",t.data)}})),async function(){H("/containers",(function(e){let t=JSON.parse(e.response);t.data&&a(3,l=t.data),console.log("containers loaded:",l)}))}()})),[n,s,o,l,i,async function(){if(!f())return void P.danger("please create and activate a scenario first.");let e=[];for(let t=0;t<s.configurations.length;t++){console.log(s.configurations[t],"data");let a=s.configurations[t].container_info.name,n=s.configurations[t].container_info.ports.split(",")[0].split("/")[0];console.log(a,n,"name and port");let r=R("GET","/containers/"+a+"/"+n+"/configs");e.push(r)}Promise.allSettled(e).then((function(e){for(let t=0;t<e.length;t++)"fulfilled"==e[t].status&&a(1,s.configurations[t].configs=e[t].value.data.data,s);j.set(s)})),console.log("config_containers:",s)},async function(){if(console.log("saving scenario configurations"),!f())return void P.danger("please create and activate a scenario first.");let e="/api/db1/scenario_configurations",t="POST";"_id"in s&&(t="PUT",e="/api/db1/scenario_configurations/"+s._id),console.log("writing data:",s," to url:",e," and method:",t),z(e,t,s,(function(e){console.log(e,"response from saveContainersConfig"),a(1,s._id=e.data,s),j.set(s),P.success("Configuration saved successfull.")}))},async function(){if(!f())return void P.danger("please create and activate a scenario first.");let e={},t=parseInt(this.getAttribute("index")),n=this.getAttribute("name"),r=this.getAttribute("port").split(",")[0].split("/")[0];console.log(t,n,r,"printing index");let c=this.querySelectorAll("input");for(let a=0;a<c.length;a++){let t=c[a];console.log(t,"element found with input scan");let n=t.getAttribute("type"),s=t.getAttribute("key"),r=t.value;null==r&&(r=""),console.log(n,s,r,"triple"),"submit"!=n&&("checkbox"==n?e[s]=t.checked:"list"==n?e[s]=r.split(","):t.hasAttribute("convert")?e[s]=Number(r):e[s]=r)}let o="/containers/"+n+"/"+r+"/configs";console.log(e,"nanan",o),z(o,"POST",e,(function(n){console.log(n,e,"response from modal request"),a(1,s.configurations[t].configs=e,s),j.set(s),console.log(s,n,"new container structure"),P.success("Configuration update successfull.")}))},function(){let e,t=this.parentElement.parentElement.parentElement.parentElement.getAttribute("index");for(let s=0;s<n.length;s++)s==t?(a(2,o=s),a(0,n[s].activated=!0,n),e=n[s]):a(0,n[s].activated=!1,n);V.set(n),a(1,s.ref=e._id,s),a(1,s.name=e.name,s),a(1,s.configurations=[],s);let r="/api/db1/scenario_configurations/ref-"+e._id;H(r,(function(e){let t=JSON.parse(e.response);if(t.data){if(console.log("scenarios_configurations data:",t.data),t.data.length>0){a(1,s=t.data[0]),console.log("test1");for(let e=0;e<l.length;e++){console.log("test2");let t=e.toString();console.log("test3",s),a(4,i[t]="",i);let n=l[e].short_id;console.log("test3.5");for(let e=0;e<s.configurations.length;e++){let r=s.configurations[e];console.log("test4",r),n==r.container_info.short_id&&(a(4,i[t]="background-color: #acddb4;",i),e=s.configurations.length)}}j.set(s),console.log("test5",s)}}else{j.set(s);for(let e in i)a(4,i[e]="",i)}}))},function(){if(!f())return void P.danger("please create and activate a scenario first.");let e=this.parentElement.parentElement.parentElement.parentElement.getAttribute("index");a(4,i[e]="background-color: #acddb4;",i);let t=l[parseInt(e)],n={};console.log("container info:",t);let r=t.name,c=t.ports.split(",")[0].split("/")[0];H("/containers/"+r+"/"+c+"/configs",(function(e){let a=JSON.parse(e.response);console.log("return data containers configs",a),a.data&&"data"in a.data&&(n=a.data.data),console.log("containers loaded:",l),s.configurations.push({container_info:t,configs:n}),j.set(s),console.log("scenario_configurations",s)}))},function(){if(!f())return void P.danger("please create and activate a scenario first.");let e=this.parentElement.parentElement.parentElement.parentElement.getAttribute("index");a(4,i[e]="",i);let t=l[parseInt(e)].short_id,n=-1;for(let a=0;a<s.configurations.length;a++)s.configurations[a].container_info.short_id==t&&(n=a,a=s.length);n>-1&&s.configurations.splice(n,1),j.set(s)},function(){let e=this.getAttribute("ref"),t=document.getElementById(e+"ID"),s=document.getElementById(e);if(""!=t.value&&""!=s.value){let e=!1,r=-1;for(let a=0;a<n.length;a++)console.log("comparing scenario id with input1 value:",n[a]._id,t.value),n[a]._id==t.value&&(e=!0,r=a,a=n.length);if(!e)return void P.danger("scenario identifier does not exist.");let c="/api/db1/scenarios/"+t.value,o={name:s.value};z(c,"PUT",o,(function(e){a(0,n[r].name=s.value,n),V.set(n),P.success("Scenario renamed successfully.")}))}else P.danger("please provide scenario identifier and new name.")},function(){let e=!1,t=parseInt(this.parentElement.parentElement.parentElement.parentElement.getAttribute("index"));n[t].activated&&(e=!0);let r=n[t]._id;if(z("/api/db1/scenarios/"+r,"DELETE",{},(function(e){n.splice(t,1),V.set(n),P.success("Scenario deleted successfully.")})),z("/api/db1/scenario_configurations/ref-"+r,"DELETE",{},(function(e){P.success("Scenario configuration deleted successfully.")})),e){a(1,s={}),j.set(s);for(let e in i)a(4,i[e]="",i)}},function(){let e=this.getAttribute("ref");if(""!=e){let t=document.getElementById(e);if(""!=t.value){let e={name:t.value},a="/api/db1/scenarios";console.log("createNewScenario request with body:",e," and url:",a),z(a,"POST",e,(function(e){console.log(e,"response from createNewScenario"),n.push({_id:e.data,name:t.value,activated:!1}),V.set(n),P.success("New scenario created.")}))}else P.danger("please provide scenario name.")}}]}export default class extends t{constructor(e){super(),a(this,e,ve,ue,n,{},[-1,-1])}}
