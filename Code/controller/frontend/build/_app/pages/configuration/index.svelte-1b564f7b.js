import{C as e,S as t,i as a,s,e as l,t as r,k as c,c as n,a as o,g as i,d as h,n as f,b as u,f as d,G as p,l as v,M as m,j as g,L as E,m as w,o as b,N as T,v as y,r as S,w as k,O as D,P as N,z as I,Q as A,R as x,T as O,h as B,U,V as H}from"../../chunks/vendor-fda5d988.js";/* empty css                                                       */import{T as C,x as z,m as V,a as P,n as R}from"../../chunks/requests-d6e23f36.js";const L=e([{id:1,name:"Test DoS Attack",activated:!0},{id:2,name:"Sample Scenario",activated:!1}]);const{document:j}=A;function M(e,t,a){const s=e.slice();return s[17]=t[a].short_id,s[18]=t[a].name,s[19]=t[a].ports,s[20]=t[a].configs,s[22]=a,s}function $(e,t,a){const s=e.slice();return s[23]=t[a][0],s[24]=t[a][1],s}function _(e,t,a){const s=e.slice();return s[17]=t[a].short_id,s[18]=t[a].name,s[19]=t[a].ports,s[22]=a,s}function q(e,t,a){const s=e.slice();return s[28]=t[a],s[22]=a,s}function F(e,t,a){const s=e.slice();return s[23]=t[a][0],s[24]=t[a][1],s}function G(e,t,a){const s=e.slice();return s[23]=t[a][0],s[24]=t[a][1],s}function J(e){let t,a,s,v,g,E,w,b,T,y,S,k,D,N,I,A=e[0],x=[];for(let l=0;l<A.length;l+=1)x[l]=Y(q(e,A,l));return{c(){t=l("table"),a=l("thead"),s=l("tr"),v=l("th"),g=r("ID"),E=c(),w=l("th"),b=r("Name"),T=c(),y=l("th"),S=r("Activated"),k=c(),D=l("th"),N=r("Actions"),I=c();for(let e=0;e<x.length;e+=1)x[e].c();this.h()},l(e){t=n(e,"TABLE",{class:!0});var l=o(t);a=n(l,"THEAD",{});var r=o(a);s=n(r,"TR",{class:!0});var c=o(s);v=n(c,"TH",{});var u=o(v);g=i(u,"ID"),u.forEach(h),E=f(c),w=n(c,"TH",{});var d=o(w);b=i(d,"Name"),d.forEach(h),T=f(c),y=n(c,"TH",{});var p=o(y);S=i(p,"Activated"),p.forEach(h),k=f(c),D=n(c,"TH",{});var m=o(D);N=i(m,"Actions"),m.forEach(h),c.forEach(h),r.forEach(h),I=f(l);for(let t=0;t<x.length;t+=1)x[t].l(l);l.forEach(h),this.h()},h(){u(s,"class","w3-dark-grey"),u(t,"class","w3-table-all w3-centered")},m(e,l){d(e,t,l),p(t,a),p(a,s),p(s,v),p(v,g),p(s,E),p(s,w),p(w,b),p(s,T),p(s,y),p(y,S),p(s,k),p(s,D),p(D,N),p(t,I);for(let a=0;a<x.length;a+=1)x[a].m(t,null)},p(e,a){if(4355&a[0]){let s;for(A=e[0],s=0;s<A.length;s+=1){const l=q(e,A,s);x[s]?x[s].p(l,a):(x[s]=Y(l),x[s].c(),x[s].m(t,null))}for(;s<x.length;s+=1)x[s].d(1);x.length=A.length}},d(e){e&&h(t),m(x,e)}}}function Q(e){let t,a,s,v,m,g,E,w,b,y,S,k,N,I,A,x,O=[],B=new Map,C=Object.entries(e[28]);const z=e=>e[23];for(let l=0;l<C.length;l+=1){let t=F(e,C,l),a=z(t);B.set(a,O[l]=W(a,t))}return{c(){t=l("tr");for(let e=0;e<O.length;e+=1)O[e].c();a=c(),s=l("td"),v=l("div"),m=l("div"),g=l("button"),E=r("Activate"),w=c(),b=l("button"),y=r("Copy"),S=c(),k=l("button"),N=r("Delete"),I=c(),this.h()},l(e){t=n(e,"TR",{index:!0});var l=o(t);for(let t=0;t<O.length;t+=1)O[t].l(l);a=f(l),s=n(l,"TD",{class:!0});var r=o(s);v=n(r,"DIV",{class:!0});var c=o(v);m=n(c,"DIV",{class:!0});var u=o(m);g=n(u,"BUTTON",{});var d=o(g);E=i(d,"Activate"),d.forEach(h),w=f(u),b=n(u,"BUTTON",{});var p=o(b);y=i(p,"Copy"),p.forEach(h),S=f(u),k=n(u,"BUTTON",{});var T=o(k);N=i(T,"Delete"),T.forEach(h),u.forEach(h),c.forEach(h),r.forEach(h),I=f(l),l.forEach(h),this.h()},h(){u(m,"class","w3-bar"),u(v,"class","w3-show-inline-block"),u(s,"class","svelte-17uzir7"),u(t,"index",e[22])},m(l,r){d(l,t,r);for(let e=0;e<O.length;e+=1)O[e].m(t,null);p(t,a),p(t,s),p(s,v),p(v,m),p(m,g),p(g,E),p(m,w),p(m,b),p(b,y),p(m,S),p(m,k),p(k,N),p(t,I),A||(x=[T(g,"click",e[8]),T(b,"click",ue),T(k,"click",e[12])],A=!0)},p(e,s){1&s[0]&&(C=Object.entries(e[28]),O=U(O,s,z,1,e,C,B,t,H,W,a,F))},d(e){e&&h(t);for(let t=0;t<O.length;t+=1)O[t].d();A=!1,D(x)}}}function K(e){let t,a,s,v,m,g,E,w,b,y,S,k,N,I,A,O,B=[],C=new Map,z=Object.entries(e[28]);const V=e=>e[23];for(let l=0;l<z.length;l+=1){let t=G(e,z,l),a=V(t);C.set(a,B[l]=X(a,t))}return{c(){t=l("tr");for(let e=0;e<B.length;e+=1)B[e].c();a=c(),s=l("td"),v=l("div"),m=l("div"),g=l("button"),E=r("Activate"),w=c(),b=l("button"),y=r("Copy"),S=c(),k=l("button"),N=r("Delete"),I=c(),this.h()},l(e){t=n(e,"TR",{index:!0,style:!0});var l=o(t);for(let t=0;t<B.length;t+=1)B[t].l(l);a=f(l),s=n(l,"TD",{class:!0});var r=o(s);v=n(r,"DIV",{class:!0});var c=o(v);m=n(c,"DIV",{class:!0});var u=o(m);g=n(u,"BUTTON",{});var d=o(g);E=i(d,"Activate"),d.forEach(h),w=f(u),b=n(u,"BUTTON",{});var p=o(b);y=i(p,"Copy"),p.forEach(h),S=f(u),k=n(u,"BUTTON",{});var T=o(k);N=i(T,"Delete"),T.forEach(h),u.forEach(h),c.forEach(h),r.forEach(h),I=f(l),l.forEach(h),this.h()},h(){u(m,"class","w3-bar"),u(v,"class","w3-show-inline-block"),u(s,"class","svelte-17uzir7"),u(t,"index",e[22]),x(t,"background-color","#acddb4")},m(l,r){d(l,t,r);for(let e=0;e<B.length;e+=1)B[e].m(t,null);p(t,a),p(t,s),p(s,v),p(v,m),p(m,g),p(g,E),p(m,w),p(m,b),p(b,y),p(m,S),p(m,k),p(k,N),p(t,I),A||(O=[T(g,"click",e[8]),T(b,"click",ue),T(k,"click",e[12])],A=!0)},p(e,s){1&s[0]&&(z=Object.entries(e[28]),B=U(B,s,V,1,e,z,C,t,H,X,a,G))},d(e){e&&h(t);for(let t=0;t<B.length;t+=1)B[t].d();A=!1,D(O)}}}function W(e,t){let a,s,c=t[24]+"";return{key:e,first:null,c(){a=l("td"),s=r(c),this.h()},l(e){a=n(e,"TD",{class:!0});var t=o(a);s=i(t,c),t.forEach(h),this.h()},h(){u(a,"class","svelte-17uzir7"),this.first=a},m(e,t){d(e,a,t),p(a,s)},p(e,a){t=e,1&a[0]&&c!==(c=t[24]+"")&&B(s,c)},d(e){e&&h(a)}}}function X(e,t){let a,s,c=t[24]+"";return{key:e,first:null,c(){a=l("td"),s=r(c),this.h()},l(e){a=n(e,"TD",{class:!0});var t=o(a);s=i(t,c),t.forEach(h),this.h()},h(){u(a,"class","svelte-17uzir7"),this.first=a},m(e,t){d(e,a,t),p(a,s)},p(e,a){t=e,1&a[0]&&c!==(c=t[24]+"")&&B(s,c)},d(e){e&&h(a)}}}function Y(e){let t;function a(e,t){return e[1]==e[22]?K:Q}let s=a(e),l=s(e);return{c(){l.c(),t=v()},l(e){l.l(e),t=v()},m(e,a){l.m(e,a),d(e,t,a)},p(e,r){s===(s=a(e))&&l?l.p(e,r):(l.d(1),l=s(e),l&&(l.c(),l.m(t.parentNode,t)))},d(e){l.d(e),e&&h(t)}}}function Z(e){let t,a,s,v,g,E,w,b,T,y,S,k,D,N,I,A=e[2],x=[];for(let l=0;l<A.length;l+=1)x[l]=ae(_(e,A,l));return{c(){t=l("table"),a=l("thead"),s=l("tr"),v=l("th"),g=r("ShortID"),E=c(),w=l("th"),b=r("Name"),T=c(),y=l("th"),S=r("Ports"),k=c(),D=l("th"),N=r("Actions"),I=c();for(let e=0;e<x.length;e+=1)x[e].c();this.h()},l(e){t=n(e,"TABLE",{class:!0});var l=o(t);a=n(l,"THEAD",{});var r=o(a);s=n(r,"TR",{class:!0});var c=o(s);v=n(c,"TH",{});var u=o(v);g=i(u,"ShortID"),u.forEach(h),E=f(c),w=n(c,"TH",{});var d=o(w);b=i(d,"Name"),d.forEach(h),T=f(c),y=n(c,"TH",{});var p=o(y);S=i(p,"Ports"),p.forEach(h),k=f(c),D=n(c,"TH",{});var m=o(D);N=i(m,"Actions"),m.forEach(h),c.forEach(h),r.forEach(h),I=f(l);for(let t=0;t<x.length;t+=1)x[t].l(l);l.forEach(h),this.h()},h(){u(s,"class","w3-dark-grey"),u(t,"class","w3-table-all w3-centered")},m(e,l){d(e,t,l),p(t,a),p(a,s),p(s,v),p(v,g),p(s,E),p(s,w),p(w,b),p(s,T),p(s,y),p(y,S),p(s,k),p(s,D),p(D,N),p(t,I);for(let a=0;a<x.length;a+=1)x[a].m(t,null)},p(e,a){if(1556&a[0]){let s;for(A=e[2],s=0;s<A.length;s+=1){const l=_(e,A,s);x[s]?x[s].p(l,a):(x[s]=ae(l),x[s].c(),x[s].m(t,null))}for(;s<x.length;s+=1)x[s].d(1);x.length=A.length}},d(e){e&&h(t),m(x,e)}}}function ee(e){let t,a,s,v,m,g,E,w,b,y,S,k,N,I,A,x,O,U,H,C,z,V=e[17]+"",P=e[18]+"",R=e[19]+"";return{c(){t=l("tr"),a=l("td"),s=r(V),v=c(),m=l("td"),g=r(P),E=c(),w=l("td"),b=r(R),y=c(),S=l("td"),k=l("div"),N=l("div"),I=l("button"),A=r("Activate"),x=c(),O=l("button"),U=r("Deactivate"),H=c(),this.h()},l(e){t=n(e,"TR",{index:!0});var l=o(t);a=n(l,"TD",{class:!0});var r=o(a);s=i(r,V),r.forEach(h),v=f(l),m=n(l,"TD",{class:!0});var c=o(m);g=i(c,P),c.forEach(h),E=f(l),w=n(l,"TD",{class:!0});var u=o(w);b=i(u,R),u.forEach(h),y=f(l),S=n(l,"TD",{class:!0});var d=o(S);k=n(d,"DIV",{class:!0});var p=o(k);N=n(p,"DIV",{class:!0});var T=o(N);I=n(T,"BUTTON",{});var D=o(I);A=i(D,"Activate"),D.forEach(h),x=f(T),O=n(T,"BUTTON",{});var B=o(O);U=i(B,"Deactivate"),B.forEach(h),T.forEach(h),p.forEach(h),d.forEach(h),H=f(l),l.forEach(h),this.h()},h(){u(a,"class","svelte-17uzir7"),u(m,"class","svelte-17uzir7"),u(w,"class","svelte-17uzir7"),u(N,"class","w3-bar"),u(k,"class","w3-show-inline-block"),u(S,"class","svelte-17uzir7"),u(t,"index",e[22])},m(l,r){d(l,t,r),p(t,a),p(a,s),p(t,v),p(t,m),p(m,g),p(t,E),p(t,w),p(w,b),p(t,y),p(t,S),p(S,k),p(k,N),p(N,I),p(I,A),p(N,x),p(N,O),p(O,U),p(t,H),C||(z=[T(I,"click",e[9]),T(O,"click",e[10])],C=!0)},p(e,t){4&t[0]&&V!==(V=e[17]+"")&&B(s,V),4&t[0]&&P!==(P=e[18]+"")&&B(g,P),4&t[0]&&R!==(R=e[19]+"")&&B(b,R)},d(e){e&&h(t),C=!1,D(z)}}}function te(e){let t,a,s,v,m,g,E,w,b,y,S,k,N,I,A,x,O,U,H,C,z,V,P=e[17]+"",R=e[18]+"",L=e[19]+"";return{c(){t=l("tr"),a=l("td"),s=r(P),v=c(),m=l("td"),g=r(R),E=c(),w=l("td"),b=r(L),y=c(),S=l("td"),k=l("div"),N=l("div"),I=l("button"),A=r("Activate"),x=c(),O=l("button"),U=r("Deactivate"),H=c(),this.h()},l(e){t=n(e,"TR",{index:!0,style:!0});var l=o(t);a=n(l,"TD",{class:!0});var r=o(a);s=i(r,P),r.forEach(h),v=f(l),m=n(l,"TD",{class:!0});var c=o(m);g=i(c,R),c.forEach(h),E=f(l),w=n(l,"TD",{class:!0});var u=o(w);b=i(u,L),u.forEach(h),y=f(l),S=n(l,"TD",{class:!0});var d=o(S);k=n(d,"DIV",{class:!0});var p=o(k);N=n(p,"DIV",{class:!0});var T=o(N);I=n(T,"BUTTON",{});var D=o(I);A=i(D,"Activate"),D.forEach(h),x=f(T),O=n(T,"BUTTON",{});var B=o(O);U=i(B,"Deactivate"),B.forEach(h),T.forEach(h),p.forEach(h),d.forEach(h),H=f(l),l.forEach(h),this.h()},h(){u(a,"class","svelte-17uzir7"),u(m,"class","svelte-17uzir7"),u(w,"class","svelte-17uzir7"),u(N,"class","w3-bar"),u(k,"class","w3-show-inline-block"),u(S,"class","svelte-17uzir7"),u(t,"index",e[22]),u(t,"style",C=e[4][e[22]])},m(l,r){d(l,t,r),p(t,a),p(a,s),p(t,v),p(t,m),p(m,g),p(t,E),p(t,w),p(w,b),p(t,y),p(t,S),p(S,k),p(k,N),p(N,I),p(I,A),p(N,x),p(N,O),p(O,U),p(t,H),z||(V=[T(I,"click",e[9]),T(O,"click",e[10])],z=!0)},p(e,a){4&a[0]&&P!==(P=e[17]+"")&&B(s,P),4&a[0]&&R!==(R=e[18]+"")&&B(g,R),4&a[0]&&L!==(L=e[19]+"")&&B(b,L),16&a[0]&&C!==(C=e[4][e[22]])&&u(t,"style",C)},d(e){e&&h(t),z=!1,D(V)}}}function ae(e){let t;function a(e,t){return e[22]in e[4]?te:ee}let s=a(e),l=s(e);return{c(){l.c(),t=v()},l(e){l.l(e),t=v()},m(e,a){l.m(e,a),d(e,t,a)},p(e,r){s===(s=a(e))&&l?l.p(e,r):(l.d(1),l=s(e),l&&(l.c(),l.m(t.parentNode,t)))},d(e){l.d(e),e&&h(t)}}}function se(e){let t,a="configs"in e[3]&&le(e);return{c(){a&&a.c(),t=v()},l(e){a&&a.l(e),t=v()},m(e,s){a&&a.m(e,s),d(e,t,s)},p(e,s){"configs"in e[3]?a?a.p(e,s):(a=le(e),a.c(),a.m(t.parentNode,t)):a&&(a.d(1),a=null)},d(e){a&&a.d(e),e&&h(t)}}}function le(e){let t,a=e[3],s=[];for(let l=0;l<a.length;l+=1)s[l]=he(M(e,a,l));return{c(){for(let e=0;e<s.length;e+=1)s[e].c();t=v()},l(e){for(let t=0;t<s.length;t+=1)s[t].l(e);t=v()},m(e,a){for(let t=0;t<s.length;t+=1)s[t].m(e,a);d(e,t,a)},p(e,l){if(168&l[0]){let r;for(a=e[3],r=0;r<a.length;r+=1){const c=M(e,a,r);s[r]?s[r].p(c,l):(s[r]=he(c),s[r].c(),s[r].m(t.parentNode,t))}for(;r<s.length;r+=1)s[r].d(1);s.length=a.length}},d(e){m(s,e),e&&h(t)}}}function re(e){let t,a,s,v,m,g,E,w=e[23]+"";return{c(){t=l("label"),a=l("b"),s=r(w),v=c(),m=l("input"),this.h()},l(e){t=n(e,"LABEL",{class:!0});var l=o(t);a=n(l,"B",{});var r=o(a);s=i(r,w),r.forEach(h),l.forEach(h),v=f(e),m=n(e,"INPUT",{class:!0,type:!0,key:!0,value:!0}),this.h()},h(){u(t,"class",""),u(m,"class","w3-input w3-border"),u(m,"type","list"),u(m,"key",g=e[23]),m.value=E=e[24].join()},m(e,l){d(e,t,l),p(t,a),p(a,s),d(e,v,l),d(e,m,l)},p(e,t){8&t[0]&&w!==(w=e[23]+"")&&B(s,w),8&t[0]&&g!==(g=e[23])&&u(m,"key",g),8&t[0]&&E!==(E=e[24].join())&&(m.value=E)},d(e){e&&h(t),e&&h(v),e&&h(m)}}}function ce(e){let t,a,s,v,m,g,E,w=e[23]+"";return{c(){t=l("input"),v=c(),m=l("label"),g=l("b"),E=r(w),this.h()},l(e){t=n(e,"INPUT",{class:!0,type:!0,key:!0,checked:!0}),v=f(e),m=n(e,"LABEL",{class:!0});var a=o(m);g=n(a,"B",{});var s=o(g);E=i(s,w),s.forEach(h),a.forEach(h),this.h()},h(){u(t,"class","w3-check"),u(t,"type","checkbox"),u(t,"key",a=e[23]),t.checked=s=e[24],u(m,"class","")},m(e,a){d(e,t,a),d(e,v,a),d(e,m,a),p(m,g),p(g,E)},p(e,l){8&l[0]&&a!==(a=e[23])&&u(t,"key",a),8&l[0]&&s!==(s=e[24])&&(t.checked=s),8&l[0]&&w!==(w=e[23]+"")&&B(E,w)},d(e){e&&h(t),e&&h(v),e&&h(m)}}}function ne(e){let t,a,s,v,m,g,E,w=e[23]+"";return{c(){t=l("label"),a=l("b"),s=r(w),v=c(),m=l("input"),this.h()},l(e){t=n(e,"LABEL",{class:!0});var l=o(t);a=n(l,"B",{});var r=o(a);s=i(r,w),r.forEach(h),l.forEach(h),v=f(e),m=n(e,"INPUT",{class:!0,type:!0,key:!0,value:!0}),this.h()},h(){u(t,"class",""),u(m,"class","w3-input w3-border"),u(m,"type","string"),u(m,"key",g=e[23]),m.value=E=e[24]},m(e,l){d(e,t,l),p(t,a),p(a,s),d(e,v,l),d(e,m,l)},p(e,t){8&t[0]&&w!==(w=e[23]+"")&&B(s,w),8&t[0]&&g!==(g=e[23])&&u(m,"key",g),8&t[0]&&E!==(E=e[24])&&(m.value=E)},d(e){e&&h(t),e&&h(v),e&&h(m)}}}function oe(e){let t,a,s,v,m,g,E,w=e[23]+"";return{c(){t=l("label"),a=l("b"),s=r(w),v=c(),m=l("input"),this.h()},l(e){t=n(e,"LABEL",{class:!0});var l=o(t);a=n(l,"B",{});var r=o(a);s=i(r,w),r.forEach(h),l.forEach(h),v=f(e),m=n(e,"INPUT",{class:!0,type:!0,convert:!0,key:!0,value:!0}),this.h()},h(){u(t,"class",""),u(m,"class","w3-input w3-border"),u(m,"type","string"),u(m,"convert","required"),u(m,"key",g=e[23]),m.value=E=e[24]},m(e,l){d(e,t,l),p(t,a),p(a,s),d(e,v,l),d(e,m,l)},p(e,t){8&t[0]&&w!==(w=e[23]+"")&&B(s,w),8&t[0]&&g!==(g=e[23])&&u(m,"key",g),8&t[0]&&E!==(E=e[24])&&(m.value=E)},d(e){e&&h(t),e&&h(v),e&&h(m)}}}function ie(e,t){let a;function s(e,t){return"number"==typeof e[24]?oe:"string"==typeof e[24]?ne:"boolean"==typeof e[24]?ce:"object"==typeof e[24]?re:void 0}let r=s(t),c=r&&r(t);return{key:e,first:null,c(){a=l("p"),c&&c.c(),this.h()},l(e){a=n(e,"P",{});var t=o(a);c&&c.l(t),t.forEach(h),this.h()},h(){this.first=a},m(e,t){d(e,a,t),c&&c.m(a,null)},p(e,l){r===(r=s(t=e))&&c?c.p(t,l):(c&&c.d(1),c=r&&r(t),c&&(c.c(),c.m(a,null)))},d(e){e&&h(a),c&&c.d()}}}function he(e){let t,a=e[5].includes(e[22]),s=a&&function(e){let t,a,s,v,m,g,E,w,b,y,S,k,D,N,I,A,C,z,V,P,R,L,j=e[18]+"",M=[],_=new Map,q=Object.entries(e[20]);const F=e=>e[23];for(let l=0;l<q.length;l+=1){let t=$(e,q,l),a=F(t);_.set(a,M[l]=ie(a,t))}return{c(){t=l("div"),a=l("div"),s=l("h2"),v=r(j),m=c(),g=l("p"),E=r("Description here from application configs"),w=c(),b=l("div"),y=l("form"),S=l("h5"),k=r("Update Form"),D=c();for(let e=0;e<M.length;e+=1)M[e].c();N=c(),I=l("p"),A=l("input"),V=c(),P=l("hr"),this.h()},l(e){t=n(e,"DIV",{class:!0});var l=o(t);a=n(l,"DIV",{class:!0});var r=o(a);s=n(r,"H2",{class:!0,style:!0});var c=o(s);v=i(c,j),c.forEach(h),m=f(r),g=n(r,"P",{});var u=o(g);E=i(u,"Description here from application configs"),u.forEach(h),r.forEach(h),w=f(l),b=n(l,"DIV",{class:!0});var d=o(b);y=n(d,"FORM",{name:!0,port:!0,index:!0,class:!0});var p=o(y);S=n(p,"H5",{class:!0,style:!0});var T=o(S);k=i(T,"Update Form"),T.forEach(h),D=f(p);for(let t=0;t<M.length;t+=1)M[t].l(p);N=f(p),I=n(p,"P",{});var x=o(I);A=n(x,"INPUT",{class:!0,type:!0,value:!0}),x.forEach(h),p.forEach(h),d.forEach(h),l.forEach(h),V=f(e),P=n(e,"HR",{class:!0}),this.h()},h(){u(s,"class","w3-text-orange"),x(s,"text-shadow","1px 1px 0 #444"),u(a,"class","w3-third w3-container w3-blue"),u(S,"class","w3-text-orange"),x(S,"text-shadow","1px 1px 0 #444"),u(A,"class","w3-blue"),u(A,"type","submit"),A.value="Update",u(y,"name",C=e[18]),u(y,"port",z=e[19]),u(y,"index",e[22]),u(y,"class","w3-container"),u(b,"class","w3-twothird w3-container w3-gray"),u(t,"class","w3-row w3-border"),u(P,"class","svelte-17uzir7")},m(l,r){d(l,t,r),p(t,a),p(a,s),p(s,v),p(a,m),p(a,g),p(g,E),p(t,w),p(t,b),p(b,y),p(y,S),p(S,k),p(y,D);for(let e=0;e<M.length;e+=1)M[e].m(y,null);p(y,N),p(y,I),p(I,A),d(l,V,r),d(l,P,r),R||(L=T(y,"submit",O(e[7])),R=!0)},p(e,t){8&t[0]&&j!==(j=e[18]+"")&&B(v,j),8&t[0]&&(q=Object.entries(e[20]),M=U(M,t,F,1,e,q,_,y,H,ie,N,$)),8&t[0]&&C!==(C=e[18])&&u(y,"name",C),8&t[0]&&z!==(z=e[19])&&u(y,"port",z)},d(e){e&&h(t);for(let t=0;t<M.length;t+=1)M[t].d();e&&h(V),e&&h(P),R=!1,L()}}}(e);return{c(){s&&s.c(),t=v()},l(e){s&&s.l(e),t=v()},m(e,a){s&&s.m(e,a),d(e,t,a)},p(e,t){a&&s.p(e,t)},d(e){s&&s.d(e),e&&h(t)}}}function fe(e){let t,a,s,v,m,N,I,A,x,O,B,U,H,z,V,P,R,L,M,$,_,q,F,G,Q,K,W,X,Y,ee,te,ae,le,re,ce,ne,oe,ie,he,fe,ue,de,pe,ve,me,ge,Ee,we,be,Te,ye,Se,ke,De,Ne,Ie,Ae,xe,Oe,Be,Ue,He;a=new C({});let Ce=e[0].length>0&&J(e),ze=e[2].length>0&&Z(e),Ve=e[3].length>0&&se(e);return{c(){t=c(),g(a.$$.fragment),s=c(),v=l("hr"),m=c(),N=l("section"),I=l("h2"),A=r("Scenario Management"),x=c(),O=l("hr"),B=c(),U=l("section"),H=l("h3"),z=r("Select scenario"),V=c(),P=l("section"),Ce&&Ce.c(),R=c(),L=l("div"),M=l("div"),$=l("button"),_=r("Create Scenario"),q=c(),F=l("div"),G=l("input"),Q=c(),K=l("div"),W=l("div"),X=l("button"),Y=r("Rename Scenario"),ee=c(),te=l("div"),ae=l("input"),le=c(),re=l("div"),ce=l("input"),ne=c(),oe=l("hr"),ie=c(),he=l("h2"),fe=r("Configure Scenarios"),ue=c(),de=l("hr"),pe=c(),ve=l("section"),me=l("h3"),ge=r("Select containers"),Ee=c(),we=l("section"),ze&&ze.c(),be=c(),Te=l("hr"),ye=c(),Se=l("section"),ke=l("h3"),De=r("Configure containers"),Ne=c(),Ie=l("section"),Ae=l("button"),xe=r("Load Configurations"),Oe=c(),Ve&&Ve.c(),this.h()},l(e){E('[data-svelte="svelte-101i1i0"]',j.head).forEach(h),t=f(e),w(a.$$.fragment,e),s=f(e),v=n(e,"HR",{class:!0}),m=f(e),N=n(e,"SECTION",{class:!0});var l=o(N);I=n(l,"H2",{});var r=o(I);A=i(r,"Scenario Management"),r.forEach(h),l.forEach(h),x=f(e),O=n(e,"HR",{class:!0}),B=f(e),U=n(e,"SECTION",{class:!0});var c=o(U);H=n(c,"H3",{});var u=o(H);z=i(u,"Select scenario"),u.forEach(h),c.forEach(h),V=f(e),P=n(e,"SECTION",{class:!0});var d=o(P);Ce&&Ce.l(d),R=f(d),L=n(d,"DIV",{class:!0});var p=o(L);M=n(p,"DIV",{class:!0});var g=o(M);$=n(g,"BUTTON",{ref:!0,class:!0});var b=o($);_=i(b,"Create Scenario"),b.forEach(h),g.forEach(h),q=f(p),F=n(p,"DIV",{class:!0});var T=o(F);G=n(T,"INPUT",{id:!0,class:!0,name:!0,type:!0,placeholder:!0}),T.forEach(h),p.forEach(h),Q=f(d),K=n(d,"DIV",{class:!0});var y=o(K);W=n(y,"DIV",{class:!0});var S=o(W);X=n(S,"BUTTON",{ref:!0,class:!0});var k=o(X);Y=i(k,"Rename Scenario"),k.forEach(h),S.forEach(h),ee=f(y),te=n(y,"DIV",{class:!0});var D=o(te);ae=n(D,"INPUT",{id:!0,class:!0,name:!0,type:!0,placeholder:!0}),D.forEach(h),le=f(y),re=n(y,"DIV",{class:!0});var C=o(re);ce=n(C,"INPUT",{id:!0,class:!0,name:!0,type:!0,placeholder:!0}),C.forEach(h),y.forEach(h),d.forEach(h),ne=f(e),oe=n(e,"HR",{class:!0}),ie=f(e),he=n(e,"H2",{});var J=o(he);fe=i(J,"Configure Scenarios"),J.forEach(h),ue=f(e),de=n(e,"HR",{class:!0}),pe=f(e),ve=n(e,"SECTION",{class:!0});var Z=o(ve);me=n(Z,"H3",{});var se=o(me);ge=i(se,"Select containers"),se.forEach(h),Z.forEach(h),Ee=f(e),we=n(e,"SECTION",{class:!0});var Be=o(we);ze&&ze.l(Be),Be.forEach(h),be=f(e),Te=n(e,"HR",{class:!0}),ye=f(e),Se=n(e,"SECTION",{class:!0});var Ue=o(Se);ke=n(Ue,"H3",{});var He=o(ke);De=i(He,"Configure containers"),He.forEach(h),Ue.forEach(h),Ne=f(e),Ie=n(e,"SECTION",{class:!0});var Pe=o(Ie);Ae=n(Pe,"BUTTON",{class:!0});var Re=o(Ae);xe=i(Re,"Load Configurations"),Re.forEach(h),Oe=f(Pe),Ve&&Ve.l(Pe),Pe.forEach(h),this.h()},h(){j.title="Configuration and Scheduling",u(v,"class","svelte-17uzir7"),u(N,"class","page-headline"),u(O,"class","svelte-17uzir7"),u(U,"class","page-headline"),u($,"ref","createNewScenario"),u($,"class","w3-col w3-input w3-border"),u(M,"class","w3-third"),u(G,"id","createNewScenario"),u(G,"class","w3-input w3-border"),u(G,"name","name"),u(G,"type","text"),u(G,"placeholder","Scenario Name"),u(F,"class","w3-rest"),u(L,"class","w3-row w3-section"),u(X,"ref","renameScenario"),u(X,"class","w3-col w3-input w3-border"),u(W,"class","w3-third"),u(ae,"id","renameScenarioID"),u(ae,"class","w3-input w3-border"),u(ae,"name","id"),u(ae,"type","text"),u(ae,"placeholder","Scenario Identifier"),u(te,"class","w3-third"),u(ce,"id","renameScenario"),u(ce,"class","w3-input w3-border"),u(ce,"name","name"),u(ce,"type","text"),u(ce,"placeholder","Scenario Name"),u(re,"class","w3-rest"),u(K,"class","w3-row w3-section"),u(P,"class","w3-container"),u(oe,"class","svelte-17uzir7"),u(de,"class","svelte-17uzir7"),u(ve,"class","page-headline"),u(we,"class","w3-container"),u(Te,"class","svelte-17uzir7"),u(Se,"class","page-headline"),u(Ae,"class","w3-col w3-input w3-border"),u(Ie,"class","w3-container")},m(l,r){d(l,t,r),b(a,l,r),d(l,s,r),d(l,v,r),d(l,m,r),d(l,N,r),p(N,I),p(I,A),d(l,x,r),d(l,O,r),d(l,B,r),d(l,U,r),p(U,H),p(H,z),d(l,V,r),d(l,P,r),Ce&&Ce.m(P,null),p(P,R),p(P,L),p(L,M),p(M,$),p($,_),p(L,q),p(L,F),p(F,G),p(P,Q),p(P,K),p(K,W),p(W,X),p(X,Y),p(K,ee),p(K,te),p(te,ae),p(K,le),p(K,re),p(re,ce),d(l,ne,r),d(l,oe,r),d(l,ie,r),d(l,he,r),p(he,fe),d(l,ue,r),d(l,de,r),d(l,pe,r),d(l,ve,r),p(ve,me),p(me,ge),d(l,Ee,r),d(l,we,r),ze&&ze.m(we,null),d(l,be,r),d(l,Te,r),d(l,ye,r),d(l,Se,r),p(Se,ke),p(ke,De),d(l,Ne,r),d(l,Ie,r),p(Ie,Ae),p(Ae,xe),p(Ie,Oe),Ve&&Ve.m(Ie,null),Be=!0,Ue||(He=[T($,"click",e[13]),T(X,"click",e[11]),T(Ae,"click",e[6])],Ue=!0)},p(e,t){e[0].length>0?Ce?Ce.p(e,t):(Ce=J(e),Ce.c(),Ce.m(P,R)):Ce&&(Ce.d(1),Ce=null),e[2].length>0?ze?ze.p(e,t):(ze=Z(e),ze.c(),ze.m(we,null)):ze&&(ze.d(1),ze=null),e[3].length>0?Ve?Ve.p(e,t):(Ve=se(e),Ve.c(),Ve.m(Ie,null)):Ve&&(Ve.d(1),Ve=null)},i(e){Be||(y(a.$$.fragment,e),Be=!0)},o(e){S(a.$$.fragment,e),Be=!1},d(e){e&&h(t),k(a,e),e&&h(s),e&&h(v),e&&h(m),e&&h(N),e&&h(x),e&&h(O),e&&h(B),e&&h(U),e&&h(V),e&&h(P),Ce&&Ce.d(),e&&h(ne),e&&h(oe),e&&h(ie),e&&h(he),e&&h(ue),e&&h(de),e&&h(pe),e&&h(ve),e&&h(Ee),e&&h(we),ze&&ze.d(),e&&h(be),e&&h(Te),e&&h(ye),e&&h(Se),e&&h(Ne),e&&h(Ie),Ve&&Ve.d(),Ue=!1,D(He)}}}function ue(){console.log(this,"copyScenario")}function de(e,t,a){let s=[];const l=L.subscribe((e=>{a(0,s=e)}));let r;N(l);let c=[{short_id:"123",name:"DoS Attack",ports:"8010"},{short_id:"1243",name:"Replay Attack",ports:"8020"},{short_id:"122",name:"MitM",ports:"8030"}],n=[],o={},i=[];return I((async()=>{z("/api/db1/scenarios",(function(e){let t=JSON.parse(e.response);if(t.data){console.log("scenarios array:",t.data);for(let e=0;e<t.data.length;e++)t.data[e].activated=!1;L.set(t.data),console.log("store set with: ",t.data)}})),async function(){z("/containers",(function(e){let t=JSON.parse(e.response);t.data&&a(2,c=t.data),console.log("containers loaded:",c)}))}()})),[s,r,c,n,o,i,async function(){let e=[],t=[];for(let a=0;a<c.length;a++)if(i.includes(a.toString())){console.log(c[a],"data");let s=c[a].name,l=c[a].ports.split(",")[0].split("/")[0];t.push(c[a]),console.log(s,l,"name and port");let r=V("GET","/containers/"+s+"/"+l+"/configs");e.push(r)}Promise.allSettled(e).then((function(e){console.log(e,"after all resolved",t);for(let a=0;a<e.length;a++)"fulfilled"==e[a].status&&(t[a].configs=e[a].value.data.data);a(3,n=t)})),console.log("config_containers:",n)},async function(){let e={},t=parseInt(this.getAttribute("index")),s=this.getAttribute("name"),l=this.getAttribute("port").split(",")[0].split("/")[0];console.log(t,s,l,"printing index");let r=this.querySelectorAll("input");for(let a=0;a<r.length;a++){let t=r[a];console.log(t,"element found with input scan");let s=t.getAttribute("type"),l=t.getAttribute("key"),c=t.value;null==c&&(c=""),console.log(s,l,c,"triple"),"submit"!=s&&("checkbox"==s?e[l]=t.checked:"list"==s?e[l]=c.split(","):t.hasAttribute("convert")?e[l]=Number(c):e[l]=c)}let c="/containers/"+s+"/"+l+"/configs";console.log(e,"nanan",c),P(c,"POST",e,(function(s){console.log(s,e,"response from modal request"),a(3,n[t].configs=e,n),console.log(n,s,"new container structure"),R.success("Configuration update successfull.")}))},function(){console.log("deactivate all except selected scenario");let e=this.parentElement.parentElement.parentElement.parentElement.getAttribute("index");console.log(this,"activateScenario",e);for(let t=0;t<s.length;t++)t==e?(a(1,r=t),a(0,s[t].activated=!0,s)):a(0,s[t].activated=!1,s);L.set(s),console.log("scenarios after activation:",s)},function(){let e=this.parentElement.parentElement.parentElement.parentElement.getAttribute("index");a(4,o[e]="background-color: #acddb4;",o),i.includes(e)||i.push(e)},function(){let e=this.parentElement.parentElement.parentElement.parentElement.getAttribute("index");if(a(4,o[e]="",o),i.includes(e)){const t=i.indexOf(e);t>-1&&i.splice(t,1)}},function(){console.log(this,"renameScenario");let e=this.getAttribute("ref"),t=document.getElementById(e+"ID"),a=document.getElementById(e);if(""!=t.value&&""!=a.value){let e=!1;for(let c=0;c<s.length;c++)s[c].id==t.value&&(e=!0);if(!e)return void R.danger("scenario identifier does not exist.");let a=this.parentElement.parentElement.parentElement.parentElement.getAttribute("index"),l="/api/db1/scenarios/"+s[a].id,r={name:input.value};console.log("rename scenario request with url:",l," and data:",r),P(l,"PUT",{},(function(e){console.log(e,"response from deleteScenario"),R.success("Scenario deleted successfully.")}))}else R.danger("please provide scenario identifier and new name.")},function(){console.log(this,"deleteScenario");let e=parseInt(this.parentElement.parentElement.parentElement.parentElement.getAttribute("index")),t="/api/db1/scenarios/"+s[e].id;console.log("delete scenario request with url:",t),P(t,"DELETE",{},(function(e){console.log(e,"response from deleteScenario"),R.success("Scenario deleted successfully.")}))},function(){let e=this.getAttribute("ref");if(""!=e){let t=document.getElementById(e);if(""!=t.value){let e={name:t.value},a="/api/db1/scenarios";console.log("createNewScenario request with body:",e," and url:",a),P(a,"POST",e,(function(e){console.log(e,"response from createNewScenario"),s.push({_id:e.data,name:t.value,activated:!1}),L.set(s),R.success("New scenario created.")}))}else R.danger("please provide scenario name.")}}]}export default class extends t{constructor(e){super(),a(this,e,de,fe,s,{},[-1,-1])}}
