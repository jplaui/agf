import{S as e,i as t,s as a,e as s,t as l,k as c,c as n,a as r,g as i,d as o,n as h,b as f,f as d,F as u,l as v,M as p,N as g,G as m,O as E,h as w,P as b,j as y,L as k,m as x,o as T,v as I,r as S,w as D,Q as N,R as B,z as A,T as C,U as _}from"../../chunks/vendor-c052606d.js";/* empty css                                                       */import{T as H,x as O,n as z,a as V}from"../../chunks/requests-531e903b.js";import{s as P,a as U,t as R,b as L}from"../../chunks/store-ce76cd4a.js";const{document:j}=C;function M(e,t,a){const s=e.slice();return s[27]=t[a],s[29]=a,s}function $(e,t,a){const s=e.slice();return s[30]=t[a],s[29]=a,s}function J(e,t,a){const s=e.slice();return s[32]=t[a][0],s[33]=t[a][1],s}function q(e,t,a){const s=e.slice();return s[36]=t[a].short_id,s[37]=t[a].name,s[38]=t[a].ports,s[29]=a,s}function F(e,t,a){const s=e.slice();return s[40]=t[a],s[29]=a,s}function G(e,t,a){const s=e.slice();return s[32]=t[a][0],s[33]=t[a][1],s}function Q(e,t,a){const s=e.slice();return s[32]=t[a][0],s[33]=t[a][1],s}function K(e){let t,a,v,g,m,E,w,b,y,k,x,T,I,S,D,N=e[0],B=[];for(let s=0;s<N.length;s+=1)B[s]=ee(F(e,N,s));return{c(){t=s("table"),a=s("thead"),v=s("tr"),g=s("th"),m=l("ID"),E=c(),w=s("th"),b=l("Name"),y=c(),k=s("th"),x=l("Activated"),T=c(),I=s("th"),S=l("Actions"),D=c();for(let e=0;e<B.length;e+=1)B[e].c();this.h()},l(e){t=n(e,"TABLE",{class:!0});var s=r(t);a=n(s,"THEAD",{});var l=r(a);v=n(l,"TR",{class:!0});var c=r(v);g=n(c,"TH",{});var f=r(g);m=i(f,"ID"),f.forEach(o),E=h(c),w=n(c,"TH",{});var d=r(w);b=i(d,"Name"),d.forEach(o),y=h(c),k=n(c,"TH",{});var u=r(k);x=i(u,"Activated"),u.forEach(o),T=h(c),I=n(c,"TH",{});var p=r(I);S=i(p,"Actions"),p.forEach(o),c.forEach(o),l.forEach(o),D=h(s);for(let t=0;t<B.length;t+=1)B[t].l(s);s.forEach(o),this.h()},h(){f(v,"class","w3-dark-grey"),f(t,"class","w3-table-all w3-centered")},m(e,s){d(e,t,s),u(t,a),u(a,v),u(v,g),u(g,m),u(v,E),u(v,w),u(w,b),u(v,y),u(v,k),u(k,x),u(v,T),u(v,I),u(I,S),u(t,D);for(let a=0;a<B.length;a+=1)B[a].m(t,null)},p(e,a){if(17413&a[0]){let s;for(N=e[0],s=0;s<N.length;s+=1){const l=F(e,N,s);B[s]?B[s].p(l,a):(B[s]=ee(l),B[s].c(),B[s].m(t,null))}for(;s<B.length;s+=1)B[s].d(1);B.length=N.length}},d(e){e&&o(t),p(B,e)}}}function W(e){let t,a,v,p,g,E,w,y,k,x,T,I,S,D=[],B=new Map,A=Object.entries(e[40]);const C=e=>e[32];for(let s=0;s<A.length;s+=1){let t=G(e,A,s),a=C(t);B.set(a,D[s]=Y(a,t))}return{c(){t=s("tr");for(let e=0;e<D.length;e+=1)D[e].c();a=c(),v=s("td"),p=s("div"),g=s("div"),E=s("button"),w=l("Activate"),y=c(),k=s("button"),x=l("Delete"),T=c(),this.h()},l(e){t=n(e,"TR",{index:!0});var s=r(t);for(let t=0;t<D.length;t+=1)D[t].l(s);a=h(s),v=n(s,"TD",{class:!0});var l=r(v);p=n(l,"DIV",{class:!0});var c=r(p);g=n(c,"DIV",{class:!0});var f=r(g);E=n(f,"BUTTON",{});var d=r(E);w=i(d,"Activate"),d.forEach(o),y=h(f),k=n(f,"BUTTON",{});var u=r(k);x=i(u,"Delete"),u.forEach(o),f.forEach(o),c.forEach(o),l.forEach(o),T=h(s),s.forEach(o),this.h()},h(){f(g,"class","w3-bar"),f(p,"class","w3-show-inline-block"),f(v,"class","svelte-llwuxz"),f(t,"index",e[29])},m(s,l){d(s,t,l);for(let e=0;e<D.length;e+=1)D[e].m(t,null);u(t,a),u(t,v),u(v,p),u(p,g),u(g,E),u(E,w),u(g,y),u(g,k),u(k,x),u(t,T),I||(S=[m(E,"click",e[10]),m(k,"click",e[14])],I=!0)},p(e,s){1&s[0]&&(A=Object.entries(e[40]),D=b(D,s,C,1,e,A,B,t,_,Y,a,G))},d(e){e&&o(t);for(let t=0;t<D.length;t+=1)D[t].d();I=!1,N(S)}}}function X(e){let t,a,v,p,E,w,y,k,x,T,I,S,D,B=[],A=new Map,C=Object.entries(e[40]);const H=e=>e[32];for(let s=0;s<C.length;s+=1){let t=Q(e,C,s),a=H(t);A.set(a,B[s]=Z(a,t))}return{c(){t=s("tr");for(let e=0;e<B.length;e+=1)B[e].c();a=c(),v=s("td"),p=s("div"),E=s("div"),w=s("button"),y=l("Activate"),k=c(),x=s("button"),T=l("Delete"),I=c(),this.h()},l(e){t=n(e,"TR",{index:!0,style:!0});var s=r(t);for(let t=0;t<B.length;t+=1)B[t].l(s);a=h(s),v=n(s,"TD",{class:!0});var l=r(v);p=n(l,"DIV",{class:!0});var c=r(p);E=n(c,"DIV",{class:!0});var f=r(E);w=n(f,"BUTTON",{});var d=r(w);y=i(d,"Activate"),d.forEach(o),k=h(f),x=n(f,"BUTTON",{});var u=r(x);T=i(u,"Delete"),u.forEach(o),f.forEach(o),c.forEach(o),l.forEach(o),I=h(s),s.forEach(o),this.h()},h(){f(E,"class","w3-bar"),f(p,"class","w3-show-inline-block"),f(v,"class","svelte-llwuxz"),f(t,"index",e[29]),g(t,"background-color","#acddb4")},m(s,l){d(s,t,l);for(let e=0;e<B.length;e+=1)B[e].m(t,null);u(t,a),u(t,v),u(v,p),u(p,E),u(E,w),u(w,y),u(E,k),u(E,x),u(x,T),u(t,I),S||(D=[m(w,"click",e[10]),m(x,"click",e[14])],S=!0)},p(e,s){1&s[0]&&(C=Object.entries(e[40]),B=b(B,s,H,1,e,C,A,t,_,Z,a,Q))},d(e){e&&o(t);for(let t=0;t<B.length;t+=1)B[t].d();S=!1,N(D)}}}function Y(e,t){let a,c,h=t[33]+"";return{key:e,first:null,c(){a=s("td"),c=l(h),this.h()},l(e){a=n(e,"TD",{class:!0});var t=r(a);c=i(t,h),t.forEach(o),this.h()},h(){f(a,"class","svelte-llwuxz"),this.first=a},m(e,t){d(e,a,t),u(a,c)},p(e,a){t=e,1&a[0]&&h!==(h=t[33]+"")&&w(c,h)},d(e){e&&o(a)}}}function Z(e,t){let a,c,h=t[33]+"";return{key:e,first:null,c(){a=s("td"),c=l(h),this.h()},l(e){a=n(e,"TD",{class:!0});var t=r(a);c=i(t,h),t.forEach(o),this.h()},h(){f(a,"class","svelte-llwuxz"),this.first=a},m(e,t){d(e,a,t),u(a,c)},p(e,a){t=e,1&a[0]&&h!==(h=t[33]+"")&&w(c,h)},d(e){e&&o(a)}}}function ee(e){let t;function a(e,t){return e[2]==e[29]||e[0][e[29]].activated?X:W}let s=a(e),l=s(e);return{c(){l.c(),t=v()},l(e){l.l(e),t=v()},m(e,a){l.m(e,a),d(e,t,a)},p(e,c){s===(s=a(e))&&l?l.p(e,c):(l.d(1),l=s(e),l&&(l.c(),l.m(t.parentNode,t)))},d(e){l.d(e),e&&o(t)}}}function te(e){let t,a,v,g,m,E,w,b,y,k,x,T,I,S,D,N=e[4],B=[];for(let s=0;s<N.length;s+=1)B[s]=le(q(e,N,s));return{c(){t=s("table"),a=s("thead"),v=s("tr"),g=s("th"),m=l("ShortID"),E=c(),w=s("th"),b=l("Name"),y=c(),k=s("th"),x=l("Ports"),T=c(),I=s("th"),S=l("Actions"),D=c();for(let e=0;e<B.length;e+=1)B[e].c();this.h()},l(e){t=n(e,"TABLE",{class:!0});var s=r(t);a=n(s,"THEAD",{});var l=r(a);v=n(l,"TR",{class:!0});var c=r(v);g=n(c,"TH",{});var f=r(g);m=i(f,"ShortID"),f.forEach(o),E=h(c),w=n(c,"TH",{});var d=r(w);b=i(d,"Name"),d.forEach(o),y=h(c),k=n(c,"TH",{});var u=r(k);x=i(u,"Ports"),u.forEach(o),T=h(c),I=n(c,"TH",{});var p=r(I);S=i(p,"Actions"),p.forEach(o),c.forEach(o),l.forEach(o),D=h(s);for(let t=0;t<B.length;t+=1)B[t].l(s);s.forEach(o),this.h()},h(){f(v,"class","w3-dark-grey"),f(t,"class","w3-table-all w3-centered")},m(e,s){d(e,t,s),u(t,a),u(a,v),u(v,g),u(g,m),u(v,E),u(v,w),u(w,b),u(v,y),u(v,k),u(k,x),u(v,T),u(v,I),u(I,S),u(t,D);for(let a=0;a<B.length;a+=1)B[a].m(t,null)},p(e,a){if(6192&a[0]){let s;for(N=e[4],s=0;s<N.length;s+=1){const l=q(e,N,s);B[s]?B[s].p(l,a):(B[s]=le(l),B[s].c(),B[s].m(t,null))}for(;s<B.length;s+=1)B[s].d(1);B.length=N.length}},d(e){e&&o(t),p(B,e)}}}function ae(e){let t,a,v,p,g,E,b,y,k,x,T,I,S,D,B,A,C,_,H,O,z,V=e[36]+"",P=e[37]+"",U=e[38]+"";return{c(){t=s("tr"),a=s("td"),v=l(V),p=c(),g=s("td"),E=l(P),b=c(),y=s("td"),k=l(U),x=c(),T=s("td"),I=s("div"),S=s("div"),D=s("button"),B=l("Activate"),A=c(),C=s("button"),_=l("Deactivate"),H=c(),this.h()},l(e){t=n(e,"TR",{index:!0});var s=r(t);a=n(s,"TD",{class:!0});var l=r(a);v=i(l,V),l.forEach(o),p=h(s),g=n(s,"TD",{class:!0});var c=r(g);E=i(c,P),c.forEach(o),b=h(s),y=n(s,"TD",{class:!0});var f=r(y);k=i(f,U),f.forEach(o),x=h(s),T=n(s,"TD",{class:!0});var d=r(T);I=n(d,"DIV",{class:!0});var u=r(I);S=n(u,"DIV",{class:!0});var m=r(S);D=n(m,"BUTTON",{});var w=r(D);B=i(w,"Activate"),w.forEach(o),A=h(m),C=n(m,"BUTTON",{});var N=r(C);_=i(N,"Deactivate"),N.forEach(o),m.forEach(o),u.forEach(o),d.forEach(o),H=h(s),s.forEach(o),this.h()},h(){f(a,"class","svelte-llwuxz"),f(g,"class","svelte-llwuxz"),f(y,"class","svelte-llwuxz"),f(S,"class","w3-bar"),f(I,"class","w3-show-inline-block"),f(T,"class","svelte-llwuxz"),f(t,"index",e[29])},m(s,l){d(s,t,l),u(t,a),u(a,v),u(t,p),u(t,g),u(g,E),u(t,b),u(t,y),u(y,k),u(t,x),u(t,T),u(T,I),u(I,S),u(S,D),u(D,B),u(S,A),u(S,C),u(C,_),u(t,H),O||(z=[m(D,"click",e[11]),m(C,"click",e[12])],O=!0)},p(e,t){16&t[0]&&V!==(V=e[36]+"")&&w(v,V),16&t[0]&&P!==(P=e[37]+"")&&w(E,P),16&t[0]&&U!==(U=e[38]+"")&&w(k,U)},d(e){e&&o(t),O=!1,N(z)}}}function se(e){let t,a,v,p,g,E,b,y,k,x,T,I,S,D,B,A,C,_,H,O,z,V,P=e[36]+"",U=e[37]+"",R=e[38]+"";return{c(){t=s("tr"),a=s("td"),v=l(P),p=c(),g=s("td"),E=l(U),b=c(),y=s("td"),k=l(R),x=c(),T=s("td"),I=s("div"),S=s("div"),D=s("button"),B=l("Activate"),A=c(),C=s("button"),_=l("Deactivate"),H=c(),this.h()},l(e){t=n(e,"TR",{index:!0,style:!0});var s=r(t);a=n(s,"TD",{class:!0});var l=r(a);v=i(l,P),l.forEach(o),p=h(s),g=n(s,"TD",{class:!0});var c=r(g);E=i(c,U),c.forEach(o),b=h(s),y=n(s,"TD",{class:!0});var f=r(y);k=i(f,R),f.forEach(o),x=h(s),T=n(s,"TD",{class:!0});var d=r(T);I=n(d,"DIV",{class:!0});var u=r(I);S=n(u,"DIV",{class:!0});var m=r(S);D=n(m,"BUTTON",{});var w=r(D);B=i(w,"Activate"),w.forEach(o),A=h(m),C=n(m,"BUTTON",{});var N=r(C);_=i(N,"Deactivate"),N.forEach(o),m.forEach(o),u.forEach(o),d.forEach(o),H=h(s),s.forEach(o),this.h()},h(){f(a,"class","svelte-llwuxz"),f(g,"class","svelte-llwuxz"),f(y,"class","svelte-llwuxz"),f(S,"class","w3-bar"),f(I,"class","w3-show-inline-block"),f(T,"class","svelte-llwuxz"),f(t,"index",e[29]),f(t,"style",O=e[5][e[29]])},m(s,l){d(s,t,l),u(t,a),u(a,v),u(t,p),u(t,g),u(g,E),u(t,b),u(t,y),u(y,k),u(t,x),u(t,T),u(T,I),u(I,S),u(S,D),u(D,B),u(S,A),u(S,C),u(C,_),u(t,H),z||(V=[m(D,"click",e[11]),m(C,"click",e[12])],z=!0)},p(e,a){16&a[0]&&P!==(P=e[36]+"")&&w(v,P),16&a[0]&&U!==(U=e[37]+"")&&w(E,U),16&a[0]&&R!==(R=e[38]+"")&&w(k,R),32&a[0]&&O!==(O=e[5][e[29]])&&f(t,"style",O)},d(e){e&&o(t),z=!1,N(V)}}}function le(e){let t;function a(e,t){return e[29]in e[5]?se:ae}let s=a(e),l=s(e);return{c(){l.c(),t=v()},l(e){l.l(e),t=v()},m(e,a){l.m(e,a),d(e,t,a)},p(e,c){s===(s=a(e))&&l?l.p(e,c):(l.d(1),l=s(e),l&&(l.c(),l.m(t.parentNode,t)))},d(e){l.d(e),e&&o(t)}}}function ce(e){let t,a=e[1].configurations.length>0&&ne(e);return{c(){a&&a.c(),t=v()},l(e){a&&a.l(e),t=v()},m(e,s){a&&a.m(e,s),d(e,t,s)},p(e,s){e[1].configurations.length>0?a?a.p(e,s):(a=ne(e),a.c(),a.m(t.parentNode,t)):a&&(a.d(1),a=null)},d(e){a&&a.d(e),e&&o(t)}}}function ne(e){let t,a="Communication"==e[1].type&&re(e);return{c(){a&&a.c(),t=v()},l(e){a&&a.l(e),t=v()},m(e,s){a&&a.m(e,s),d(e,t,s)},p(e,s){"Communication"==e[1].type?a?a.p(e,s):(a=re(e),a.c(),a.m(t.parentNode,t)):a&&(a.d(1),a=null)},d(e){a&&a.d(e),e&&o(t)}}}function re(e){let t,a=e[1].configurations,s=[];for(let l=0;l<a.length;l+=1)s[l]=ue($(e,a,l));return{c(){for(let e=0;e<s.length;e+=1)s[e].c();t=v()},l(e){for(let t=0;t<s.length;t+=1)s[t].l(e);t=v()},m(e,a){for(let t=0;t<s.length;t+=1)s[t].m(e,a);d(e,t,a)},p(e,l){if(514&l[0]){let c;for(a=e[1].configurations,c=0;c<a.length;c+=1){const n=$(e,a,c);s[c]?s[c].p(n,l):(s[c]=ue(n),s[c].c(),s[c].m(t.parentNode,t))}for(;c<s.length;c+=1)s[c].d(1);s.length=a.length}},d(e){p(s,e),e&&o(t)}}}function ie(e){let t,a,v,p,g,m,E,b=e[32]+"";return{c(){t=s("label"),a=s("b"),v=l(b),p=c(),g=s("input"),this.h()},l(e){t=n(e,"LABEL",{class:!0});var s=r(t);a=n(s,"B",{});var l=r(a);v=i(l,b),l.forEach(o),s.forEach(o),p=h(e),g=n(e,"INPUT",{class:!0,type:!0,key:!0,value:!0}),this.h()},h(){f(t,"class",""),f(g,"class","w3-input w3-border"),f(g,"type","list"),f(g,"key",m=e[32]),g.value=E=e[33].join()},m(e,s){d(e,t,s),u(t,a),u(a,v),d(e,p,s),d(e,g,s)},p(e,t){2&t[0]&&b!==(b=e[32]+"")&&w(v,b),2&t[0]&&m!==(m=e[32])&&f(g,"key",m),2&t[0]&&E!==(E=e[33].join())&&(g.value=E)},d(e){e&&o(t),e&&o(p),e&&o(g)}}}function oe(e){let t,a,v,p,g,m,E,b=e[32]+"";return{c(){t=s("input"),p=c(),g=s("label"),m=s("b"),E=l(b),this.h()},l(e){t=n(e,"INPUT",{class:!0,type:!0,key:!0,checked:!0}),p=h(e),g=n(e,"LABEL",{class:!0});var a=r(g);m=n(a,"B",{});var s=r(m);E=i(s,b),s.forEach(o),a.forEach(o),this.h()},h(){f(t,"class","w3-check"),f(t,"type","checkbox"),f(t,"key",a=e[32]),t.checked=v=e[33],f(g,"class","")},m(e,a){d(e,t,a),d(e,p,a),d(e,g,a),u(g,m),u(m,E)},p(e,s){2&s[0]&&a!==(a=e[32])&&f(t,"key",a),2&s[0]&&v!==(v=e[33])&&(t.checked=v),2&s[0]&&b!==(b=e[32]+"")&&w(E,b)},d(e){e&&o(t),e&&o(p),e&&o(g)}}}function he(e){let t,a,v,p,g,m,E,b=e[32]+"";return{c(){t=s("label"),a=s("b"),v=l(b),p=c(),g=s("input"),this.h()},l(e){t=n(e,"LABEL",{class:!0});var s=r(t);a=n(s,"B",{});var l=r(a);v=i(l,b),l.forEach(o),s.forEach(o),p=h(e),g=n(e,"INPUT",{class:!0,type:!0,key:!0,value:!0}),this.h()},h(){f(t,"class",""),f(g,"class","w3-input w3-border"),f(g,"type","string"),f(g,"key",m=e[32]),g.value=E=e[33]},m(e,s){d(e,t,s),u(t,a),u(a,v),d(e,p,s),d(e,g,s)},p(e,t){2&t[0]&&b!==(b=e[32]+"")&&w(v,b),2&t[0]&&m!==(m=e[32])&&f(g,"key",m),2&t[0]&&E!==(E=e[33])&&(g.value=E)},d(e){e&&o(t),e&&o(p),e&&o(g)}}}function fe(e){let t,a,v,p,g,m,E,b=e[32]+"";return{c(){t=s("label"),a=s("b"),v=l(b),p=c(),g=s("input"),this.h()},l(e){t=n(e,"LABEL",{class:!0});var s=r(t);a=n(s,"B",{});var l=r(a);v=i(l,b),l.forEach(o),s.forEach(o),p=h(e),g=n(e,"INPUT",{class:!0,type:!0,convert:!0,key:!0,value:!0}),this.h()},h(){f(t,"class",""),f(g,"class","w3-input w3-border"),f(g,"type","string"),f(g,"convert","required"),f(g,"key",m=e[32]),g.value=E=e[33]},m(e,s){d(e,t,s),u(t,a),u(a,v),d(e,p,s),d(e,g,s)},p(e,t){2&t[0]&&b!==(b=e[32]+"")&&w(v,b),2&t[0]&&m!==(m=e[32])&&f(g,"key",m),2&t[0]&&E!==(E=e[33])&&(g.value=E)},d(e){e&&o(t),e&&o(p),e&&o(g)}}}function de(e,t){let a;function l(e,t){return"number"==typeof e[33]?fe:"string"==typeof e[33]?he:"boolean"==typeof e[33]?oe:"object"==typeof e[33]?ie:void 0}let c=l(t),i=c&&c(t);return{key:e,first:null,c(){a=s("p"),i&&i.c(),this.h()},l(e){a=n(e,"P",{});var t=r(a);i&&i.l(t),t.forEach(o),this.h()},h(){this.first=a},m(e,t){d(e,a,t),i&&i.m(a,null)},p(e,s){c===(c=l(t=e))&&i?i.p(t,s):(i&&i.d(1),i=c&&c(t),i&&(i.c(),i.m(a,null)))},d(e){e&&o(a),i&&i.d()}}}function ue(e){let t,a,v,p,y,k,x,T,I,S,D,N,B,A,C,H,O,z,V,P,U,R,L=e[30].container_info.name+"",j=[],M=new Map,$=Object.entries(e[30].configs);const q=e=>e[32];for(let s=0;s<$.length;s+=1){let t=J(e,$,s),a=q(t);M.set(a,j[s]=de(a,t))}return{c(){t=s("div"),a=s("div"),v=s("h2"),p=l(L),y=c(),k=s("p"),x=l("Description here from application configs"),T=c(),I=s("div"),S=s("form"),D=s("h5"),N=l("Update Form"),B=c();for(let e=0;e<j.length;e+=1)j[e].c();A=c(),C=s("p"),H=s("input"),V=c(),P=s("hr"),this.h()},l(e){t=n(e,"DIV",{class:!0});var s=r(t);a=n(s,"DIV",{class:!0});var l=r(a);v=n(l,"H2",{class:!0,style:!0});var c=r(v);p=i(c,L),c.forEach(o),y=h(l),k=n(l,"P",{});var f=r(k);x=i(f,"Description here from application configs"),f.forEach(o),l.forEach(o),T=h(s),I=n(s,"DIV",{class:!0});var d=r(I);S=n(d,"FORM",{name:!0,port:!0,index:!0,class:!0});var u=r(S);D=n(u,"H5",{class:!0,style:!0});var g=r(D);N=i(g,"Update Form"),g.forEach(o),B=h(u);for(let t=0;t<j.length;t+=1)j[t].l(u);A=h(u),C=n(u,"P",{});var m=r(C);H=n(m,"INPUT",{class:!0,type:!0,value:!0}),m.forEach(o),u.forEach(o),d.forEach(o),s.forEach(o),V=h(e),P=n(e,"HR",{class:!0}),this.h()},h(){f(v,"class","w3-text-orange"),g(v,"text-shadow","1px 1px 0 #444"),f(a,"class","w3-third w3-container w3-blue"),f(D,"class","w3-text-orange"),g(D,"text-shadow","1px 1px 0 #444"),f(H,"class","w3-blue"),f(H,"type","submit"),H.value="Update",f(S,"name",O=e[30].container_info.name),f(S,"port",z=e[30].container_info.ports),f(S,"index",e[29]),f(S,"class","w3-container"),f(I,"class","w3-twothird w3-container w3-gray"),f(t,"class","w3-row w3-border"),f(P,"class","svelte-llwuxz")},m(s,l){d(s,t,l),u(t,a),u(a,v),u(v,p),u(a,y),u(a,k),u(k,x),u(t,T),u(t,I),u(I,S),u(S,D),u(D,N),u(S,B);for(let e=0;e<j.length;e+=1)j[e].m(S,null);u(S,A),u(S,C),u(C,H),d(s,V,l),d(s,P,l),U||(R=m(S,"submit",E(e[9])),U=!0)},p(e,t){2&t[0]&&L!==(L=e[30].container_info.name+"")&&w(p,L),2&t[0]&&($=Object.entries(e[30].configs),j=b(j,t,q,1,e,$,M,S,_,de,A,J)),2&t[0]&&O!==(O=e[30].container_info.name)&&f(S,"name",O),2&t[0]&&z!==(z=e[30].container_info.ports)&&f(S,"port",z)},d(e){e&&o(t);for(let t=0;t<j.length;t+=1)j[t].d();e&&o(V),e&&o(P),U=!1,R()}}}function ve(e){let t,a=e[6],s=[];for(let l=0;l<a.length;l+=1)s[l]=pe(M(e,a,l));return{c(){for(let e=0;e<s.length;e+=1)s[e].c();t=v()},l(e){for(let t=0;t<s.length;t+=1)s[t].l(e);t=v()},m(e,a){for(let t=0;t<s.length;t+=1)s[t].m(e,a);d(e,t,a)},p(e,l){if(64&l[0]){let c;for(a=e[6],c=0;c<a.length;c+=1){const n=M(e,a,c);s[c]?s[c].p(n,l):(s[c]=pe(n),s[c].c(),s[c].m(t.parentNode,t))}for(;c<s.length;c+=1)s[c].d(1);s.length=a.length}},d(e){p(s,e),e&&o(t)}}}function pe(e){let t,a,v,p,g,m,E,b=e[27]+"";return{c(){t=s("label"),a=l(b),v=c(),p=s("input"),g=c(),m=s("span"),E=c(),this.h()},l(e){t=n(e,"LABEL",{class:!0});var s=r(t);a=i(s,b),v=h(s),p=n(s,"INPUT",{type:!0,checked:!0,name:!0,class:!0}),g=h(s),m=n(s,"SPAN",{class:!0}),r(m).forEach(o),E=h(s),s.forEach(o),this.h()},h(){f(p,"type","radio"),p.checked="checked",f(p,"name","radio"),f(p,"class","svelte-llwuxz"),f(m,"class","checkmark svelte-llwuxz"),f(t,"class","container svelte-llwuxz")},m(e,s){d(e,t,s),u(t,a),u(t,v),u(t,p),u(t,g),u(t,m),u(t,E)},p(e,t){64&t[0]&&b!==(b=e[27]+"")&&w(a,b)},d(e){e&&o(t)}}}function ge(e){let t,a,v,p,E,w,b,B,A,C,_,O,z,V,P,U,R,L,M,$,J,q,F,G,Q,W,X,Y,Z,ee,ae,se,le,ne,re,ie,oe,he,fe,de,ue,pe,ge,Ee,we,be,ye,ke,xe,Te,Ie,Se,De,Ne,Be,Ae,Ce,_e,He,Oe,ze,Ve,Pe,Ue,Re,Le,je,Me,$e,Je,qe,Fe,Ge,Qe,Ke,We,Xe,Ye,Ze,et,tt,at,st,lt,ct,nt,rt,it,ot,ht,ft,dt,ut,vt,pt,gt,mt,Et,wt,bt,yt,kt,xt,Tt,It,St,Dt,Nt,Bt,At,Ct,_t,Ht,Ot,zt,Vt,Pt,Ut,Rt,Lt,jt,Mt,$t,Jt,qt,Ft,Gt,Qt,Kt,Wt,Xt,Yt,Zt,ea,ta,aa,sa,la,ca,na,ra,ia,oa,ha,fa,da,ua,va,pa,ga,ma,Ea,wa,ba,ya,ka,xa,Ta,Ia,Sa,Da,Na,Ba,Aa,Ca,_a,Ha,Oa,za,Va,Pa,Ua,Ra,La,ja,Ma,$a,Ja,qa,Fa,Ga;a=new H({});let Qa=e[0].length>0&&K(e),Ka=e[4].length>0&&te(e),Wa="configurations"in e[1]&&ce(e),Xa=e[6].length>0&&ve(e);return{c(){t=c(),y(a.$$.fragment),v=c(),p=s("hr"),E=c(),w=s("div"),b=s("h1"),B=s("b"),A=l("Scenario Management"),C=c(),_=s("hr"),O=c(),z=s("section"),V=s("h3"),P=l("Select scenario"),U=c(),R=s("section"),Qa&&Qa.c(),L=c(),M=s("div"),$=s("div"),J=s("button"),q=l("Create Scenario"),F=c(),G=s("div"),Q=s("input"),W=c(),X=s("div"),Y=s("div"),Z=s("button"),ee=l("Rename Scenario"),ae=c(),se=s("div"),le=s("input"),ne=c(),re=s("div"),ie=s("input"),oe=c(),he=s("hr"),fe=c(),de=s("div"),ue=s("h1"),pe=s("b"),ge=l("Scenario Type"),Ee=c(),we=s("div"),be=s("div"),ye=s("a"),ke=s("div"),xe=l("Communication"),Te=c(),Ie=s("a"),Se=s("div"),De=l("Static"),Ne=c(),Be=s("a"),Ae=s("div"),Ce=l("Driving Simulation"),_e=c(),He=s("div"),Oe=s("hr"),ze=c(),Ve=s("div"),Pe=s("h1"),Ue=s("b"),Re=l("Configuration"),Le=c(),je=s("hr"),Me=c(),$e=s("section"),Je=s("h3"),qe=s("b"),Fe=l("Select containers"),Ge=c(),Qe=s("section"),Ka&&Ka.c(),Ke=c(),We=s("hr"),Xe=c(),Ye=s("section"),Ze=s("h3"),et=s("b"),tt=l("Configure containers"),at=c(),st=s("section"),Wa&&Wa.c(),ct=c(),nt=s("div"),rt=s("hr"),it=c(),ot=s("div"),ht=s("h1"),ft=s("b"),dt=l("Configuration"),ut=c(),vt=s("hr"),pt=c(),gt=s("section"),mt=s("h3"),Et=s("b"),wt=l("Select Static Datasets"),bt=l(" (folder:number_images)"),yt=c(),kt=s("div"),Xa&&Xa.c(),xt=c(),Tt=s("hr"),It=c(),St=s("section"),Dt=s("h3"),Nt=s("b"),Bt=l("Select Attack"),At=c(),Ct=s("div"),_t=s("label"),Ht=l("Image Blurring\n                    "),Ot=s("input"),zt=c(),Vt=s("span"),Pt=c(),Ut=s("label"),Rt=l("Blacking Images\n                    "),Lt=s("input"),jt=c(),Mt=s("span"),$t=c(),Jt=s("input"),qt=c(),Ft=s("hr"),Gt=c(),Qt=s("section"),Kt=s("h3"),Wt=s("b"),Xt=l("Validate Dataset"),Yt=c(),Zt=s("div"),ea=s("input"),ta=c(),aa=s("label"),sa=s("b"),la=l("Algorithm1"),ca=c(),na=s("hr"),ia=c(),oa=s("div"),ha=s("hr"),fa=c(),da=s("div"),ua=s("h1"),va=s("b"),pa=l("Configuration"),ga=c(),ma=s("hr"),Ea=c(),wa=s("section"),ba=s("h3"),ya=s("b"),ka=l("Select Driving Path"),xa=c(),Ta=s("hr"),Ia=c(),Sa=s("section"),Da=s("h3"),Na=s("b"),Ba=l("Select Sensors"),Aa=c(),Ca=s("hr"),_a=c(),Ha=s("section"),Oa=s("h3"),za=s("b"),Va=l("Attack Configuration"),Ua=c(),Ra=s("hr"),La=c(),ja=s("button"),Ma=l("Save Configurations"),$a=c(),Ja=s("hr"),this.h()},l(e){k('[data-svelte="svelte-101i1i0"]',j.head).forEach(o),t=h(e),x(a.$$.fragment,e),v=h(e),p=n(e,"HR",{class:!0}),E=h(e),w=n(e,"DIV",{class:!0});var s=r(w);b=n(s,"H1",{class:!0,style:!0});var l=r(b);B=n(l,"B",{});var c=r(B);A=i(c,"Scenario Management"),c.forEach(o),l.forEach(o),s.forEach(o),C=h(e),_=n(e,"HR",{class:!0}),O=h(e),z=n(e,"SECTION",{class:!0});var f=r(z);V=n(f,"H3",{});var d=r(V);P=i(d,"Select scenario"),d.forEach(o),f.forEach(o),U=h(e),R=n(e,"SECTION",{class:!0});var u=r(R);Qa&&Qa.l(u),L=h(u),M=n(u,"DIV",{class:!0});var g=r(M);$=n(g,"DIV",{class:!0});var m=r($);J=n(m,"BUTTON",{ref:!0,class:!0});var y=r(J);q=i(y,"Create Scenario"),y.forEach(o),m.forEach(o),F=h(g),G=n(g,"DIV",{class:!0});var T=r(G);Q=n(T,"INPUT",{id:!0,class:!0,name:!0,type:!0,placeholder:!0}),T.forEach(o),g.forEach(o),W=h(u),X=n(u,"DIV",{class:!0});var I=r(X);Y=n(I,"DIV",{class:!0});var S=r(Y);Z=n(S,"BUTTON",{ref:!0,class:!0});var D=r(Z);ee=i(D,"Rename Scenario"),D.forEach(o),S.forEach(o),ae=h(I),se=n(I,"DIV",{class:!0});var N=r(se);le=n(N,"INPUT",{id:!0,class:!0,name:!0,type:!0,placeholder:!0}),N.forEach(o),ne=h(I),re=n(I,"DIV",{class:!0});var H=r(re);ie=n(H,"INPUT",{id:!0,class:!0,name:!0,type:!0,placeholder:!0}),H.forEach(o),I.forEach(o),u.forEach(o),oe=h(e),he=n(e,"HR",{class:!0}),fe=h(e),de=n(e,"DIV",{class:!0});var K=r(de);ue=n(K,"H1",{class:!0,style:!0});var te=r(ue);pe=n(te,"B",{});var ce=r(pe);ge=i(ce,"Scenario Type"),ce.forEach(o),te.forEach(o),K.forEach(o),Ee=h(e),we=n(e,"DIV",{class:!0});var ve=r(we);be=n(ve,"DIV",{id:!0,class:!0});var me=r(be);ye=n(me,"A",{href:!0});var lt=r(ye);ke=n(lt,"DIV",{class:!0});var ra=r(ke);xe=i(ra,"Communication"),ra.forEach(o),lt.forEach(o),Te=h(me),Ie=n(me,"A",{href:!0});var Pa=r(Ie);Se=n(Pa,"DIV",{class:!0});var qa=r(Se);De=i(qa,"Static"),qa.forEach(o),Pa.forEach(o),Ne=h(me),Be=n(me,"A",{href:!0});var Fa=r(Be);Ae=n(Fa,"DIV",{class:!0});var Ga=r(Ae);Ce=i(Ga,"Driving Simulation"),Ga.forEach(o),Fa.forEach(o),me.forEach(o),_e=h(ve),He=n(ve,"DIV",{id:!0,class:!0,style:!0});var Ya=r(He);Oe=n(Ya,"HR",{class:!0}),ze=h(Ya),Ve=n(Ya,"DIV",{class:!0});var Za=r(Ve);Pe=n(Za,"H1",{class:!0,style:!0});var es=r(Pe);Ue=n(es,"B",{});var ts=r(Ue);Re=i(ts,"Configuration"),ts.forEach(o),es.forEach(o),Za.forEach(o),Le=h(Ya),je=n(Ya,"HR",{class:!0}),Me=h(Ya),$e=n(Ya,"SECTION",{class:!0});var as=r($e);Je=n(as,"H3",{});var ss=r(Je);qe=n(ss,"B",{});var ls=r(qe);Fe=i(ls,"Select containers"),ls.forEach(o),ss.forEach(o),as.forEach(o),Ge=h(Ya),Qe=n(Ya,"SECTION",{class:!0});var cs=r(Qe);Ka&&Ka.l(cs),cs.forEach(o),Ke=h(Ya),We=n(Ya,"HR",{class:!0}),Xe=h(Ya),Ye=n(Ya,"SECTION",{class:!0});var ns=r(Ye);Ze=n(ns,"H3",{});var rs=r(Ze);et=n(rs,"B",{});var is=r(et);tt=i(is,"Configure containers"),is.forEach(o),rs.forEach(o),ns.forEach(o),at=h(Ya),st=n(Ya,"SECTION",{class:!0});var os=r(st);Wa&&Wa.l(os),os.forEach(o),Ya.forEach(o),ct=h(ve),nt=n(ve,"DIV",{id:!0,class:!0,style:!0});var hs=r(nt);rt=n(hs,"HR",{class:!0}),it=h(hs),ot=n(hs,"DIV",{class:!0});var fs=r(ot);ht=n(fs,"H1",{class:!0,style:!0});var ds=r(ht);ft=n(ds,"B",{});var us=r(ft);dt=i(us,"Configuration"),us.forEach(o),ds.forEach(o),fs.forEach(o),ut=h(hs),vt=n(hs,"HR",{class:!0}),pt=h(hs),gt=n(hs,"SECTION",{class:!0});var vs=r(gt);mt=n(vs,"H3",{});var ps=r(mt);Et=n(ps,"B",{});var gs=r(Et);wt=i(gs,"Select Static Datasets"),gs.forEach(o),bt=i(ps," (folder:number_images)"),ps.forEach(o),yt=h(vs),kt=n(vs,"DIV",{class:!0,id:!0});var ms=r(kt);Xa&&Xa.l(ms),ms.forEach(o),vs.forEach(o),xt=h(hs),Tt=n(hs,"HR",{class:!0}),It=h(hs),St=n(hs,"SECTION",{class:!0});var Es=r(St);Dt=n(Es,"H3",{});var ws=r(Dt);Nt=n(ws,"B",{});var bs=r(Nt);Bt=i(bs,"Select Attack"),bs.forEach(o),ws.forEach(o),At=h(Es),Ct=n(Es,"DIV",{class:!0,id:!0});var ys=r(Ct);_t=n(ys,"LABEL",{class:!0});var ks=r(_t);Ht=i(ks,"Image Blurring\n                    "),Ot=n(ks,"INPUT",{type:!0,checked:!0,name:!0,class:!0}),zt=h(ks),Vt=n(ks,"SPAN",{class:!0}),r(Vt).forEach(o),ks.forEach(o),Pt=h(ys),Ut=n(ys,"LABEL",{class:!0});var xs=r(Ut);Rt=i(xs,"Blacking Images\n                    "),Lt=n(xs,"INPUT",{type:!0,checked:!0,name:!0,class:!0}),jt=h(xs),Mt=n(xs,"SPAN",{class:!0}),r(Mt).forEach(o),xs.forEach(o),$t=h(ys),Jt=n(ys,"INPUT",{id:!0,class:!0,name:!0,type:!0,placeholder:!0}),ys.forEach(o),Es.forEach(o),qt=h(hs),Ft=n(hs,"HR",{class:!0}),Gt=h(hs),Qt=n(hs,"SECTION",{class:!0});var Ts=r(Qt);Kt=n(Ts,"H3",{});var Is=r(Kt);Wt=n(Is,"B",{});var Ss=r(Wt);Xt=i(Ss,"Validate Dataset"),Ss.forEach(o),Is.forEach(o),Yt=h(Ts),Zt=n(Ts,"DIV",{class:!0,id:!0});var Ds=r(Zt);ea=n(Ds,"INPUT",{class:!0,type:!0,checked:!0}),ta=h(Ds),aa=n(Ds,"LABEL",{class:!0});var Ns=r(aa);sa=n(Ns,"B",{});var Bs=r(sa);la=i(Bs,"Algorithm1"),Bs.forEach(o),Ns.forEach(o),Ds.forEach(o),Ts.forEach(o),ca=h(hs),na=n(hs,"HR",{class:!0}),hs.forEach(o),ia=h(ve),oa=n(ve,"DIV",{id:!0,class:!0,style:!0});var As=r(oa);ha=n(As,"HR",{class:!0}),fa=h(As),da=n(As,"DIV",{class:!0});var Cs=r(da);ua=n(Cs,"H1",{class:!0,style:!0});var _s=r(ua);va=n(_s,"B",{});var Hs=r(va);pa=i(Hs,"Configuration"),Hs.forEach(o),_s.forEach(o),Cs.forEach(o),ga=h(As),ma=n(As,"HR",{class:!0}),Ea=h(As),wa=n(As,"SECTION",{class:!0});var Os=r(wa);ba=n(Os,"H3",{});var zs=r(ba);ya=n(zs,"B",{});var Vs=r(ya);ka=i(Vs,"Select Driving Path"),Vs.forEach(o),zs.forEach(o),Os.forEach(o),xa=h(As),Ta=n(As,"HR",{class:!0}),Ia=h(As),Sa=n(As,"SECTION",{class:!0});var Ps=r(Sa);Da=n(Ps,"H3",{});var Us=r(Da);Na=n(Us,"B",{});var Rs=r(Na);Ba=i(Rs,"Select Sensors"),Rs.forEach(o),Us.forEach(o),Ps.forEach(o),Aa=h(As),Ca=n(As,"HR",{class:!0}),_a=h(As),Ha=n(As,"SECTION",{class:!0});var Ls=r(Ha);Oa=n(Ls,"H3",{});var js=r(Oa);za=n(js,"B",{});var Ms=r(za);Va=i(Ms,"Attack Configuration"),Ms.forEach(o),js.forEach(o),Ls.forEach(o),As.forEach(o),ve.forEach(o),Ua=h(e),Ra=n(e,"HR",{class:!0}),La=h(e),ja=n(e,"BUTTON",{class:!0});var $s=r(ja);Ma=i($s,"Save Configurations"),$s.forEach(o),$a=h(e),Ja=n(e,"HR",{class:!0}),this.h()},h(){j.title="Configuration and Scheduling",f(p,"class","svelte-llwuxz"),f(b,"class","w3-text-yellow"),g(b,"text-shadow","1px 1px 0 #444"),f(w,"class","w3-panel w3-blue"),f(_,"class","svelte-llwuxz"),f(z,"class","page-headline"),f(J,"ref","createNewScenario"),f(J,"class","w3-col w3-input w3-border"),f($,"class","w3-third"),f(Q,"id","createNewScenario"),f(Q,"class","w3-input w3-border"),f(Q,"name","name"),f(Q,"type","text"),f(Q,"placeholder","Scenario Name"),f(G,"class","w3-rest"),f(M,"class","w3-row w3-section"),f(Z,"ref","renameScenario"),f(Z,"class","w3-col w3-input w3-border"),f(Y,"class","w3-third"),f(le,"id","renameScenarioID"),f(le,"class","w3-input w3-border"),f(le,"name","id"),f(le,"type","text"),f(le,"placeholder","Scenario Identifier"),f(se,"class","w3-third"),f(ie,"id","renameScenario"),f(ie,"class","w3-input w3-border"),f(ie,"name","name"),f(ie,"type","text"),f(ie,"placeholder","Scenario Name"),f(re,"class","w3-rest"),f(X,"class","w3-row w3-section"),f(R,"class","w3-container"),f(he,"class","svelte-llwuxz"),f(ue,"class","w3-text-yellow"),g(ue,"text-shadow","1px 1px 0 #444"),f(de,"class","w3-panel w3-blue"),f(ke,"class","w3-third tablink w3-bottombar w3-hover-light-grey w3-padding w3-border-red"),f(ye,"href","javascript:void(0)"),f(Se,"class","w3-third tablink w3-bottombar w3-hover-light-grey w3-padding"),f(Ie,"href","javascript:void(0)"),f(Ae,"class","w3-third tablink w3-bottombar w3-hover-light-grey w3-padding"),f(Be,"href","javascript:void(0)"),f(be,"id","selectConfigTabs"),f(be,"class","w3-row"),f(Oe,"class","svelte-llwuxz"),f(Pe,"class","w3-text-yellow"),g(Pe,"text-shadow","1px 1px 0 #444"),f(Ve,"class","w3-panel w3-blue"),f(je,"class","svelte-llwuxz"),f($e,"class","page-headline"),f(Qe,"class","w3-container"),f(We,"class","svelte-llwuxz"),f(Ye,"class","page-headline"),f(st,"class","w3-container"),f(He,"id","Communication"),f(He,"class","w3-container city"),f(He,"style",lt=e[3].Communication),f(rt,"class","svelte-llwuxz"),f(ht,"class","w3-text-yellow"),g(ht,"text-shadow","1px 1px 0 #444"),f(ot,"class","w3-panel w3-blue"),f(vt,"class","svelte-llwuxz"),f(kt,"class","w3-container"),f(kt,"id","static_datasets"),f(gt,"class","page-headline"),f(Tt,"class","svelte-llwuxz"),f(Ot,"type","radio"),Ot.checked="checked",f(Ot,"name","radio2"),f(Ot,"class","svelte-llwuxz"),f(Vt,"class","checkmark svelte-llwuxz"),f(_t,"class","container svelte-llwuxz"),f(Lt,"type","radio"),Lt.checked="checked",f(Lt,"name","radio2"),f(Lt,"class","svelte-llwuxz"),f(Mt,"class","checkmark svelte-llwuxz"),f(Ut,"class","container svelte-llwuxz"),f(Jt,"id","numberImages"),f(Jt,"class","w3-input w3-border"),f(Jt,"name","numberImg"),f(Jt,"type","text"),f(Jt,"placeholder","Number of Images to Attack"),f(Ct,"class","w3-container"),f(Ct,"id","static_attacks"),f(St,"class","page-headline"),f(Ft,"class","svelte-llwuxz"),f(ea,"class","w3-check"),f(ea,"type","checkbox"),ea.checked="",f(aa,"class",""),f(Zt,"class","w3-container"),f(Zt,"id","static_validation"),f(Qt,"class","page-headline"),f(na,"class","svelte-llwuxz"),f(nt,"id","Static"),f(nt,"class","w3-container city"),f(nt,"style",ra=e[3].Static),f(ha,"class","svelte-llwuxz"),f(ua,"class","w3-text-yellow"),g(ua,"text-shadow","1px 1px 0 #444"),f(da,"class","w3-panel w3-blue"),f(ma,"class","svelte-llwuxz"),f(wa,"class","page-headline"),f(Ta,"class","svelte-llwuxz"),f(Sa,"class","page-headline"),f(Ca,"class","svelte-llwuxz"),f(Ha,"class","page-headline"),f(oa,"id","Driving Simulation"),f(oa,"class","w3-container city"),f(oa,"style",Pa=e[3]["Driving Simulation"]),f(we,"class","w3-container"),f(Ra,"class","svelte-llwuxz"),f(ja,"class","w3-col w3-input w3-border w3-margin-top"),f(Ja,"class","svelte-llwuxz")},m(s,l){d(s,t,l),T(a,s,l),d(s,v,l),d(s,p,l),d(s,E,l),d(s,w,l),u(w,b),u(b,B),u(B,A),d(s,C,l),d(s,_,l),d(s,O,l),d(s,z,l),u(z,V),u(V,P),d(s,U,l),d(s,R,l),Qa&&Qa.m(R,null),u(R,L),u(R,M),u(M,$),u($,J),u(J,q),u(M,F),u(M,G),u(G,Q),u(R,W),u(R,X),u(X,Y),u(Y,Z),u(Z,ee),u(X,ae),u(X,se),u(se,le),u(X,ne),u(X,re),u(re,ie),d(s,oe,l),d(s,he,l),d(s,fe,l),d(s,de,l),u(de,ue),u(ue,pe),u(pe,ge),d(s,Ee,l),d(s,we,l),u(we,be),u(be,ye),u(ye,ke),u(ke,xe),u(be,Te),u(be,Ie),u(Ie,Se),u(Se,De),u(be,Ne),u(be,Be),u(Be,Ae),u(Ae,Ce),u(we,_e),u(we,He),u(He,Oe),u(He,ze),u(He,Ve),u(Ve,Pe),u(Pe,Ue),u(Ue,Re),u(He,Le),u(He,je),u(He,Me),u(He,$e),u($e,Je),u(Je,qe),u(qe,Fe),u(He,Ge),u(He,Qe),Ka&&Ka.m(Qe,null),u(He,Ke),u(He,We),u(He,Xe),u(He,Ye),u(Ye,Ze),u(Ze,et),u(et,tt),u(He,at),u(He,st),Wa&&Wa.m(st,null),u(we,ct),u(we,nt),u(nt,rt),u(nt,it),u(nt,ot),u(ot,ht),u(ht,ft),u(ft,dt),u(nt,ut),u(nt,vt),u(nt,pt),u(nt,gt),u(gt,mt),u(mt,Et),u(Et,wt),u(mt,bt),u(gt,yt),u(gt,kt),Xa&&Xa.m(kt,null),u(nt,xt),u(nt,Tt),u(nt,It),u(nt,St),u(St,Dt),u(Dt,Nt),u(Nt,Bt),u(St,At),u(St,Ct),u(Ct,_t),u(_t,Ht),u(_t,Ot),u(_t,zt),u(_t,Vt),u(Ct,Pt),u(Ct,Ut),u(Ut,Rt),u(Ut,Lt),u(Ut,jt),u(Ut,Mt),u(Ct,$t),u(Ct,Jt),u(nt,qt),u(nt,Ft),u(nt,Gt),u(nt,Qt),u(Qt,Kt),u(Kt,Wt),u(Wt,Xt),u(Qt,Yt),u(Qt,Zt),u(Zt,ea),u(Zt,ta),u(Zt,aa),u(aa,sa),u(sa,la),u(nt,ca),u(nt,na),u(we,ia),u(we,oa),u(oa,ha),u(oa,fa),u(oa,da),u(da,ua),u(ua,va),u(va,pa),u(oa,ga),u(oa,ma),u(oa,Ea),u(oa,wa),u(wa,ba),u(ba,ya),u(ya,ka),u(oa,xa),u(oa,Ta),u(oa,Ia),u(oa,Sa),u(Sa,Da),u(Da,Na),u(Na,Ba),u(oa,Aa),u(oa,Ca),u(oa,_a),u(oa,Ha),u(Ha,Oa),u(Oa,za),u(za,Va),d(s,Ua,l),d(s,Ra,l),d(s,La,l),d(s,ja,l),u(ja,Ma),d(s,$a,l),d(s,Ja,l),qa=!0,Fa||(Ga=[m(J,"click",e[15]),m(Z,"click",e[13]),m(ke,"click",e[7]),m(ye,"click",me),m(Se,"click",e[7]),m(Ie,"click",me),m(Ae,"click",e[7]),m(Be,"click",me),m(ja,"click",e[8])],Fa=!0)},p(e,t){e[0].length>0?Qa?Qa.p(e,t):(Qa=K(e),Qa.c(),Qa.m(R,L)):Qa&&(Qa.d(1),Qa=null),e[4].length>0?Ka?Ka.p(e,t):(Ka=te(e),Ka.c(),Ka.m(Qe,null)):Ka&&(Ka.d(1),Ka=null),"configurations"in e[1]?Wa?Wa.p(e,t):(Wa=ce(e),Wa.c(),Wa.m(st,null)):Wa&&(Wa.d(1),Wa=null),(!qa||8&t[0]&&lt!==(lt=e[3].Communication))&&f(He,"style",lt),e[6].length>0?Xa?Xa.p(e,t):(Xa=ve(e),Xa.c(),Xa.m(kt,null)):Xa&&(Xa.d(1),Xa=null),(!qa||8&t[0]&&ra!==(ra=e[3].Static))&&f(nt,"style",ra),(!qa||8&t[0]&&Pa!==(Pa=e[3]["Driving Simulation"]))&&f(oa,"style",Pa)},i(e){qa||(I(a.$$.fragment,e),qa=!0)},o(e){S(a.$$.fragment,e),qa=!1},d(e){e&&o(t),D(a,e),e&&o(v),e&&o(p),e&&o(E),e&&o(w),e&&o(C),e&&o(_),e&&o(O),e&&o(z),e&&o(U),e&&o(R),Qa&&Qa.d(),e&&o(oe),e&&o(he),e&&o(fe),e&&o(de),e&&o(Ee),e&&o(we),Ka&&Ka.d(),Wa&&Wa.d(),Xa&&Xa.d(),e&&o(Ua),e&&o(Ra),e&&o(La),e&&o(ja),e&&o($a),e&&o(Ja),Fa=!1,N(Ga)}}}function me(){let e=this.firstChild.innerText;var t,a,s;for(console.log(this,"this"),a=document.getElementsByClassName("city"),t=0;t<a.length;t++)a[t].style.display="none";for(s=document.getElementsByClassName("tablink"),t=0;t<a.length;t++)s[t].className=s[t].className.replace(" w3-border-red","");document.getElementById(e).style.display="block",this.firstChild.className+=" w3-border-red"}function Ee(e,t,a){let s=[],l={},c=!1,n="";const r=P.subscribe((e=>{a(0,s=e)})),i=U.subscribe((e=>{a(1,l=e)})),o=R.subscribe((e=>{c=e})),h=L.subscribe((e=>{n=e}));let f;B((()=>{r(),i(),o(),h()}));let d={Communication:"display:none",Static:"display:none","Driving Simulation":"display:none"},u=[{short_id:"123",name:"DoS Attack",ports:"8010"},{short_id:"1243",name:"Replay Attack",ports:"8020"},{short_id:"122",name:"MitM",ports:"8030"}],v={},p=[];function g(){let e=!1;for(let t=0;t<s.length;t++)s[t].activated&&(e=!0);return e}return A((async()=>{a(3,d[n]="display:block",d),async function(e){c?O("/localservices",(function(t){let s=JSON.parse(t.response);s.data&&a(4,u=s.data),e()})):O("/containers",(function(t){let s=JSON.parse(t.response);s.data&&a(4,u=s.data),e()}))}((function(){if(s.length<1)O("/api/db1/scenarios",(function(e){let t=JSON.parse(e.response);if(t.data){for(let e=0;e<t.data.length;e++)t.data[e].activated=!1;P.set(t.data)}}));else if(Object.keys(l).length>0){L.set(l.type);for(var e=0;e<l.configurations.length;e++)for(var t=0;t<u.length;t++){let s=t.toString();u[t].short_id==l.configurations[e].container_info.short_id&&a(5,v[s]="background-color: #acddb4;",v)}}})),async function(){O("/staticfiles",(function(e){let t=JSON.parse(e.response);t.data&&(console.log(t.data),a(6,p=t.data))}))}()})),[s,l,f,d,u,v,p,async function(){L.set(this.innerText);for(let e in d)e==this.innerText?a(3,d[e]="display:block",d):a(3,d[e]="display:none",d);console.log(n)},async function(){if(!g())return void z.danger("please create and activate a scenario first.");let e="/api/db1/scenario_configurations",t="POST";if("_id"in l&&(t="PUT",e="/api/db1/scenario_configurations/"+l._id),"Static"==n){let e=function(){let e={},t=document.getElementById("static_datasets").childNodes,a=document.getElementById("static_attacks").getElementsByTagName("label"),s=document.getElementById("static_validation").getElementsByTagName("input");for(var l=0;l<t.length;l++)t[l].hasChildNodes()&&t[l].firstElementChild.checked&&(e.dataset=t[l].innerText);for(l=0;l<a.length;l++)a.item(l).firstElementChild.checked&&(e.attack=a.item(l).innerText);e.attack_samples=parseInt(document.getElementById("numberImages").value);let c=[];for(l=0;l<s.length;l++)s[l].checked&&c.push(s[l].nextElementSibling.firstElementChild.innerText);return e.validations=c,e}();if(isNaN(e.attack_samples)||parseInt(e.dataset.split(":")[1])<e.attack_samples){let t=e.dataset.split(":")[1];return void z.danger("Please enter a number between 0 and "+t)}console.log("static1 configs:",e),console.log("check for scenario: ",s[f],l),l.type==n&&"_id"in l||a(1,l={name:s[f].name,ref:s[f]._id}),a(1,l.configurations=[e],l)}console.log("static2 configs:",l),a(1,l.type=n,l),V(e,t,l,(function(e){console.log("nanana"),a(1,l._id=e.data,l),U.set(l),z.success("Configuration saved successfull.")}))},async function(){if(!g())return void z.danger("please create and activate a scenario first.");let e={},t=parseInt(this.getAttribute("index")),s=this.getAttribute("name"),n=this.getAttribute("port").split(",")[0].split("/")[0];console.log(t,s,n,"printing index");let r=this.querySelectorAll("input");for(let a=0;a<r.length;a++){let t=r[a],s=t.getAttribute("type"),l=t.getAttribute("key"),c=t.value;null==c&&(c=""),"submit"!=s&&("checkbox"==s?e[l]=t.checked:"list"==s?e[l]=c.split(","):t.hasAttribute("convert")?e[l]=Number(c):e[l]=c)}let i="/containers/"+s+"/"+n+"/configs",o="POST";c&&(i="/localservices/"+s+"/"+n+"/configs",o="PUT"),V(i,o,e,(function(s){a(1,l.configurations[t].configs=e,l),U.set(l),z.success("Configuration update successfull.")}))},function(){let e,t=this.parentElement.parentElement.parentElement.parentElement.getAttribute("index");for(let l=0;l<s.length;l++)l==t?(a(2,f=l),a(0,s[l].activated=!0,s),e=s[l]):a(0,s[l].activated=!1,s);P.set(s);for(let s of Object.keys(v))a(5,v[s]="",v);a(1,l={}),a(1,l.ref=e._id,l),a(1,l.name=e.name,l),a(1,l.configurations=[],l),U.set(l);let c="/api/db1/scenario_configurations/ref-"+e._id;O(c,(function(e){let t=JSON.parse(e.response);if(t.data&&t.data.length>0&&(a(1,l=t.data[0]),console.log("scenario_configurations:",l),"type"in l)){if("Communication"==l.type){for(let e=0;e<u.length;e++){let t=e.toString();a(5,v[t]="",v);let s=u[e].short_id;for(let e=0;e<l.configurations.length;e++){s==l.configurations[e].container_info.short_id&&(a(5,v[t]="background-color: #acddb4;",v),e=l.configurations.length)}}U.set(l)}if("Static"==l.type){console.log("getting there...");let e=document.getElementById("selectConfigTabs").getElementsByTagName("div");for(var s=0;s<e.length;s++)e[s].innerText==l.type?e[s].classList.add(""):e[s].classList.remove("");L.set(l.type)}l.type}}))},function(){if(!g())return void z.danger("please create and activate a scenario first.");let e=this.parentElement.parentElement.parentElement.parentElement.getAttribute("index");a(5,v[e]="background-color: #acddb4;",v);let t=u[parseInt(e)],s={},n=t.name,r=t.ports.split(",")[0].split("/")[0];if(c){O("/localservices/"+n+"/"+r+"/configs",(function(e){let a=JSON.parse(e.response);a.data&&"data"in a.data&&(s=a.data.data),l.configurations.push({container_info:t,configs:s}),U.set(l)}))}else{O("/containers/"+n+"/"+r+"/configs",(function(e){let a=JSON.parse(e.response);a.data&&"data"in a.data&&(s=a.data.data),l.configurations.push({container_info:t,configs:s}),U.set(l)}))}},function(){if(!g())return void z.danger("please create and activate a scenario first.");let e=this.parentElement.parentElement.parentElement.parentElement.getAttribute("index");a(5,v[e]="",v);let t=u[parseInt(e)].short_id,s=-1;for(let a=0;a<l.configurations.length;a++)l.configurations[a].container_info.short_id==t&&(s=a,a=l.configurations.length);s>-1&&l.configurations.splice(s,1),U.set(l)},function(){let e=this.getAttribute("ref"),t=document.getElementById(e+"ID"),l=document.getElementById(e);if(""!=t.value&&""!=l.value){let e=!1,c=-1;for(let a=0;a<s.length;a++)s[a]._id==t.value&&(e=!0,c=a,a=s.length);if(!e)return void z.danger("scenario identifier does not exist.");let n="/api/db1/scenarios/"+t.value,r={name:l.value};V(n,"PUT",r,(function(e){a(0,s[c].name=l.value,s),P.set(s),z.success("Scenario renamed successfully.")}))}else z.danger("please provide scenario identifier and new name.")},function(){let e=!1,t=parseInt(this.parentElement.parentElement.parentElement.parentElement.getAttribute("index"));s[t].activated&&(e=!0);let c=s[t]._id;if(V("/api/db1/scenarios/"+c,"DELETE",{},(function(e){s.splice(t,1),P.set(s),z.success("Scenario deleted successfully.")})),V("/api/db1/scenario_configurations/ref-"+c,"DELETE",{},(function(e){z.success("Scenario configuration deleted successfully.")})),e){a(1,l={}),U.set(l);for(let e of Object.keys(v))a(5,v[e]="",v)}},function(){let e=this.getAttribute("ref");if(""!=e){let t=document.getElementById(e);if(""!=t.value){let e={name:t.value},a="/api/db1/scenarios";console.log("createNewScenario request with body:",e," and url:",a),V(a,"POST",e,(function(e){console.log(e,"response from createNewScenario"),s.push({_id:e.data,name:t.value,activated:!1}),P.set(s),z.success("New scenario created.")}))}else z.danger("please provide scenario name.")}}]}export default class extends e{constructor(e){super(),t(this,e,Ee,ge,a,{},[-1,-1])}}
