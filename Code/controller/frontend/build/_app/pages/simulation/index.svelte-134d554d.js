import{S as t,i as e,s as n,e as s,t as a,k as o,c as l,a as c,g as r,d as i,n as u,b as f,f as d,F as h,G as m,H as g,h as p,v,l as w,j as S,m as E,o as b,a6 as k,r as y,w as T,u as N,M as $,Q as O,N as D,L as I,R as B,z as x,B as H,a4 as j,a5 as V}from"../../chunks/vendor-c052606d.js";import{T as R}from"../../chunks/index-991a9a56.js";import{T as C,x as L,n as _,a as U}from"../../chunks/requests-531e903b.js";import{s as F,a as M,b as A}from"../../chunks/store-ce76cd4a.js";/* empty css                                                       */function J(t){let e,n,p,v,w,S,E,b,k,y;return{c(){e=s("div"),n=s("span"),p=a("×"),v=o(),w=s("img"),E=o(),b=s("div"),this.h()},l(t){e=l(t,"DIV",{id:!0,class:!0});var s=c(e);n=l(s,"SPAN",{class:!0});var a=c(n);p=r(a,"×"),a.forEach(i),v=u(s),w=l(s,"IMG",{class:!0,id:!0,src:!0}),E=u(s),b=l(s,"DIV",{id:!0,class:!0}),c(b).forEach(i),s.forEach(i),this.h()},h(){f(n,"class","close svelte-rk4oiy"),f(w,"class","modal-content svelte-rk4oiy"),f(w,"id","img01"),w.src!==(S="")&&f(w,"src",""),f(b,"id","caption"),f(b,"class","svelte-rk4oiy"),f(e,"id","myModal"),f(e,"class","modal svelte-rk4oiy")},m(t,s){d(t,e,s),h(e,n),h(n,p),h(e,v),h(e,w),h(e,E),h(e,b),k||(y=m(n,"click",P),k=!0)},p:g,i:g,o:g,d(t){t&&i(e),k=!1,y()}}}function P(){document.getElementById("myModal").style.display="none"}function G(t,e){var n=document.getElementById("myModal"),s=document.getElementById("img01"),a=document.getElementById("caption");n.style.display="block",s.src=t,a.innerHTML=e}function W(t,e,n){return[G]}class q extends t{constructor(t){super(),e(this,t,W,J,n,{changeImage:0})}get changeImage(){return G}}function z(t,e,n){const s=t.slice();return s[32]=e[n],s[34]=n,s}function Q(t,e,n){const s=t.slice();return s[35]=e[n],s[34]=n,s}function K(t,e,n){const s=t.slice();return s[35]=e[n],s[34]=n,s}function X(t,e,n){const s=t.slice();return s[38]=e[n],s[39]=e,s[40]=n,s}function Y(t){let e,n,g,w,S,E,b,k,T,$,D,I,B,x,j,V,R,C,L,_,U,F,M,A,J,P,G,W,q,z,Q,K,X,Y,tt,et,nt="configurations"in t[1]&&Z(t);return{c(){e=s("h4"),n=a("Scenario: "),g=a(t[3]),w=a(" Number of Containers: "),S=a(t[4]),E=a("."),b=o(),k=s("div"),T=s("div"),$=s("button"),D=a("Start Simulation"),I=o(),B=s("div"),x=s("button"),j=a("Stop Simulation"),V=o(),R=s("div"),C=s("button"),L=a("Reset WS Connection"),_=o(),U=s("hr"),F=o(),M=s("section"),A=s("h3"),J=a("Application Logs"),P=o(),G=s("button"),W=a("Clear Logs"),q=o(),nt&&nt.c(),z=o(),Q=s("br"),K=o(),X=s("hr"),this.h()},l(s){e=l(s,"H4",{});var a=c(e);n=r(a,"Scenario: "),g=r(a,t[3]),w=r(a," Number of Containers: "),S=r(a,t[4]),E=r(a,"."),a.forEach(i),b=u(s),k=l(s,"DIV",{class:!0});var o=c(k);T=l(o,"DIV",{class:!0});var f=c(T);$=l(f,"BUTTON",{class:!0});var d=c($);D=r(d,"Start Simulation"),d.forEach(i),f.forEach(i),I=u(o),B=l(o,"DIV",{class:!0});var h=c(B);x=l(h,"BUTTON",{class:!0});var m=c(x);j=r(m,"Stop Simulation"),m.forEach(i),h.forEach(i),V=u(o),R=l(o,"DIV",{class:!0});var p=c(R);C=l(p,"BUTTON",{class:!0});var v=c(C);L=r(v,"Reset WS Connection"),v.forEach(i),p.forEach(i),o.forEach(i),_=u(s),U=l(s,"HR",{class:!0}),F=u(s),M=l(s,"SECTION",{class:!0});var y=c(M);A=l(y,"H3",{});var N=c(A);J=r(N,"Application Logs"),N.forEach(i),y.forEach(i),P=u(s),G=l(s,"BUTTON",{class:!0});var O=c(G);W=r(O,"Clear Logs"),O.forEach(i),q=u(s),nt&&nt.l(s),z=u(s),Q=l(s,"BR",{}),K=u(s),X=l(s,"HR",{class:!0}),this.h()},h(){f($,"class","w3-col w3-input w3-border"),f(T,"class","w3-third"),f(x,"class","w3-col w3-input w3-border"),f(B,"class","w3-third"),f(C,"class","w3-col w3-input w3-border"),f(R,"class","w3-third"),f(k,"class","w3-row w3-section"),f(U,"class","svelte-drd2kv"),f(M,"class","page-headline"),f(G,"class","w3-col w3-input w3-border w3-button"),f(X,"class","svelte-drd2kv")},m(s,a){d(s,e,a),h(e,n),h(e,g),h(e,w),h(e,S),h(e,E),d(s,b,a),d(s,k,a),h(k,T),h(T,$),h($,D),h(k,I),h(k,B),h(B,x),h(x,j),h(k,V),h(k,R),h(R,C),h(C,L),d(s,_,a),d(s,U,a),d(s,F,a),d(s,M,a),h(M,A),h(A,J),d(s,P,a),d(s,G,a),h(G,W),d(s,q,a),nt&&nt.m(s,a),d(s,z,a),d(s,Q,a),d(s,K,a),d(s,X,a),Y=!0,tt||(et=[m($,"click",t[15]),m(x,"click",t[16]),m(C,"click",t[17]),m(G,"click",t[7])],tt=!0)},p(t,e){(!Y||8&e[0])&&p(g,t[3]),(!Y||16&e[0])&&p(S,t[4]),"configurations"in t[1]?nt?(nt.p(t,e),2&e[0]&&v(nt,1)):(nt=Z(t),nt.c(),v(nt,1),nt.m(z.parentNode,z)):nt&&(H(),y(nt,1,1,(()=>{nt=null})),N())},i(t){Y||(v(nt),Y=!0)},o(t){y(nt),Y=!1},d(t){t&&i(e),t&&i(b),t&&i(k),t&&i(_),t&&i(U),t&&i(F),t&&i(M),t&&i(P),t&&i(G),t&&i(q),nt&&nt.d(t),t&&i(z),t&&i(Q),t&&i(K),t&&i(X),tt=!1,O(et)}}}function Z(t){let e,n,s=t[1].configurations.length>0&&tt(t);return{c(){s&&s.c(),e=w()},l(t){s&&s.l(t),e=w()},m(t,a){s&&s.m(t,a),d(t,e,a),n=!0},p(t,n){t[1].configurations.length>0?s?(s.p(t,n),2&n[0]&&v(s,1)):(s=tt(t),s.c(),v(s,1),s.m(e.parentNode,e)):s&&(H(),y(s,1,1,(()=>{s=null})),N())},i(t){n||(v(s),n=!0)},o(t){y(s),n=!1},d(t){s&&s.d(t),t&&i(e)}}}function tt(t){let e,n,s=t[1].configurations,a=[];for(let l=0;l<s.length;l+=1)a[l]=at(X(t,s,l));const o=t=>y(a[t],1,1,(()=>{a[t]=null}));return{c(){for(let t=0;t<a.length;t+=1)a[t].c();e=w()},l(t){for(let e=0;e<a.length;e+=1)a[e].l(t);e=w()},m(t,s){for(let e=0;e<a.length;e+=1)a[e].m(t,s);d(t,e,s),n=!0},p(t,n){if(34&n[0]){let l;for(s=t[1].configurations,l=0;l<s.length;l+=1){const o=X(t,s,l);a[l]?(a[l].p(o,n),v(a[l],1)):(a[l]=at(o),a[l].c(),v(a[l],1),a[l].m(e.parentNode,e))}for(H(),l=s.length;l<a.length;l+=1)o(l);N()}},i(t){if(!n){for(let t=0;t<s.length;t+=1)v(a[t]);n=!0}},o(t){a=a.filter(Boolean);for(let e=0;e<a.length;e+=1)y(a[e]);n=!1},d(t){$(a,t),t&&i(e)}}}function et(t){let e,n,s=t[40].toString()in t[5],a=s&&nt(t);return{c(){a&&a.c(),e=w()},l(t){a&&a.l(t),e=w()},m(t,s){a&&a.m(t,s),d(t,e,s),n=!0},p(t,n){32&n[0]&&(s=t[40].toString()in t[5]),s?a?(a.p(t,n),32&n[0]&&v(a,1)):(a=nt(t),a.c(),v(a,1),a.m(e.parentNode,e)):a&&(H(),y(a,1,1,(()=>{a=null})),N())},i(t){n||(v(a),n=!0)},o(t){y(a),n=!1},d(t){a&&a.d(t),t&&i(e)}}}function nt(t){let e,n,s=t[5][t[40].toString()].length>0,a=s&&st(t);return{c(){a&&a.c(),e=w()},l(t){a&&a.l(t),e=w()},m(t,s){a&&a.m(t,s),d(t,e,s),n=!0},p(t,n){32&n[0]&&(s=t[5][t[40].toString()].length>0),s?a?(a.p(t,n),32&n[0]&&v(a,1)):(a=st(t),a.c(),v(a,1),a.m(e.parentNode,e)):a&&(H(),y(a,1,1,(()=>{a=null})),N())},i(t){n||(v(a),n=!0)},o(t){y(a),n=!1},d(t){a&&a.d(t),t&&i(e)}}}function st(t){let e,n,f,m,g,w,N=t[38].container_info.name+"";function $(e){t[18](e,t[40])}let O={title:t[38].container_info.name,headers:Object.keys(t[5][t[40].toString()][0])};return void 0!==t[5][t[40].toString()]&&(O.data=t[5][t[40].toString()]),m=new R({props:O}),j.push((()=>V(m,"data",$))),{c(){e=s("h5"),n=a(N),f=o(),S(m.$$.fragment)},l(t){e=l(t,"H5",{});var s=c(e);n=r(s,N),s.forEach(i),f=u(t),E(m.$$.fragment,t)},m(t,s){d(t,e,s),h(e,n),d(t,f,s),b(m,t,s),w=!0},p(e,s){t=e,(!w||2&s[0])&&N!==(N=t[38].container_info.name+"")&&p(n,N);const a={};2&s[0]&&(a.title=t[38].container_info.name),32&s[0]&&(a.headers=Object.keys(t[5][t[40].toString()][0])),!g&&32&s[0]&&(g=!0,a.data=t[5][t[40].toString()],k((()=>g=!1))),m.$set(a)},i(t){w||(v(m.$$.fragment,t),w=!0)},o(t){y(m.$$.fragment,t),w=!1},d(t){t&&i(e),t&&i(f),T(m,t)}}}function at(t){let e,n,s=Object.keys(t[5]).length>0,a=s&&et(t);return{c(){a&&a.c(),e=w()},l(t){a&&a.l(t),e=w()},m(t,s){a&&a.m(t,s),d(t,e,s),n=!0},p(t,n){32&n[0]&&(s=Object.keys(t[5]).length>0),s?a?(a.p(t,n),32&n[0]&&v(a,1)):(a=et(t),a.c(),v(a,1),a.m(e.parentNode,e)):a&&(H(),y(a,1,1,(()=>{a=null})),N())},i(t){n||(v(a),n=!0)},o(t){y(a),n=!1},d(t){a&&a.d(t),t&&i(e)}}}function ot(t){let e,n,g,p,v,w,S,E,b,k,y,T,N,$,I,B,x,H,j,V,R,C,L,_=t[6].length>0&&lt(t);return{c(){e=s("div"),n=s("div"),g=s("button"),p=a("Start Simulation"),v=o(),w=s("hr"),S=o(),E=s("div"),b=s("h1"),k=s("b"),y=a("Edit Files"),T=o(),_&&_.c(),N=o(),$=s("hr"),I=o(),B=s("div"),x=s("div"),H=s("button"),j=a("Delete Files"),V=o(),R=s("hr"),this.h()},l(t){e=l(t,"DIV",{class:!0});var s=c(e);n=l(s,"DIV",{class:!0});var a=c(n);g=l(a,"BUTTON",{class:!0});var o=c(g);p=r(o,"Start Simulation"),o.forEach(i),a.forEach(i),s.forEach(i),v=u(t),w=l(t,"HR",{class:!0}),S=u(t),E=l(t,"DIV",{class:!0});var f=c(E);b=l(f,"H1",{class:!0,style:!0});var d=c(b);k=l(d,"B",{});var h=c(k);y=r(h,"Edit Files"),h.forEach(i),d.forEach(i),f.forEach(i),T=u(t),_&&_.l(t),N=u(t),$=l(t,"HR",{class:!0}),I=u(t),B=l(t,"DIV",{class:!0});var m=c(B);x=l(m,"DIV",{class:!0});var O=c(x);H=l(O,"BUTTON",{class:!0});var D=c(H);j=r(D,"Delete Files"),D.forEach(i),O.forEach(i),m.forEach(i),V=u(t),R=l(t,"HR",{class:!0}),this.h()},h(){f(g,"class","w3-col w3-input w3-border"),f(n,"class","w3-rest"),f(e,"class","w3-row w3-section"),f(w,"class","svelte-drd2kv"),f(b,"class","w3-text-yellow"),D(b,"text-shadow","1px 1px 0 #444"),f(E,"class","w3-panel w3-blue"),f($,"class","svelte-drd2kv"),f(H,"class","w3-col w3-input w3-border"),f(x,"class","w3-rest"),f(B,"class","w3-row w3-section"),f(R,"class","svelte-drd2kv")},m(s,a){d(s,e,a),h(e,n),h(n,g),h(g,p),d(s,v,a),d(s,w,a),d(s,S,a),d(s,E,a),h(E,b),h(b,k),h(k,y),d(s,T,a),_&&_.m(s,a),d(s,N,a),d(s,$,a),d(s,I,a),d(s,B,a),h(B,x),h(x,H),h(H,j),d(s,V,a),d(s,R,a),C||(L=[m(g,"click",t[10]),m(H,"click",t[12])],C=!0)},p(t,e){t[6].length>0?_?_.p(t,e):(_=lt(t),_.c(),_.m(N.parentNode,N)):_&&(_.d(1),_=null)},d(t){t&&i(e),t&&i(v),t&&i(w),t&&i(S),t&&i(E),t&&i(T),_&&_.d(t),t&&i(N),t&&i($),t&&i(I),t&&i(B),t&&i(V),t&&i(R),C=!1,O(L)}}}function lt(t){let e,n,a,r,m,g,p=Object.keys(t[6][0]),v=[];for(let s=0;s<p.length;s+=1)v[s]=ct(K(t,p,s));let w=t[6],S=[];for(let s=0;s<w.length;s+=1)S[s]=ft(z(t,w,s));return{c(){e=s("div"),n=s("div"),a=s("table"),r=s("thead"),m=s("tr");for(let t=0;t<v.length;t+=1)v[t].c();g=o();for(let t=0;t<S.length;t+=1)S[t].c();this.h()},l(t){e=l(t,"DIV",{class:!0});var s=c(e);n=l(s,"DIV",{class:!0});var o=c(n);a=l(o,"TABLE",{class:!0,style:!0});var f=c(a);r=l(f,"THEAD",{});var d=c(r);m=l(d,"TR",{class:!0});var h=c(m);for(let e=0;e<v.length;e+=1)v[e].l(h);h.forEach(i),d.forEach(i),g=u(f);for(let e=0;e<S.length;e+=1)S[e].l(f);f.forEach(i),o.forEach(i),s.forEach(i),this.h()},h(){f(m,"class","w3-dark-grey"),f(a,"class","w3-table-all"),D(a,"width","100%"),f(n,"class","w3-responsive"),f(e,"class","w3-container")},m(t,s){d(t,e,s),h(e,n),h(n,a),h(a,r),h(r,m);for(let e=0;e<v.length;e+=1)v[e].m(m,null);h(a,g);for(let e=0;e<S.length;e+=1)S[e].m(a,null)},p(t,e){if(64&e[0]){let n;for(p=Object.keys(t[6][0]),n=0;n<p.length;n+=1){const s=K(t,p,n);v[n]?v[n].p(s,e):(v[n]=ct(s),v[n].c(),v[n].m(m,null))}for(;n<v.length;n+=1)v[n].d(1);v.length=p.length}if(8256&e[0]){let n;for(w=t[6],n=0;n<w.length;n+=1){const s=z(t,w,n);S[n]?S[n].p(s,e):(S[n]=ft(s),S[n].c(),S[n].m(a,null))}for(;n<S.length;n+=1)S[n].d(1);S.length=w.length}},d(t){t&&i(e),$(v,t),$(S,t)}}}function ct(t){let e,n,o=t[35]+"";return{c(){e=s("th"),n=a(o)},l(t){e=l(t,"TH",{});var s=c(e);n=r(s,o),s.forEach(i)},m(t,s){d(t,e,s),h(e,n)},p(t,e){64&e[0]&&o!==(o=t[35]+"")&&p(n,o)},d(t){t&&i(e)}}}function rt(t){let e,n,o=t[32][t[35]]+"";return{c(){e=s("td"),n=a(o)},l(t){e=l(t,"TD",{});var s=c(e);n=r(s,o),s.forEach(i)},m(t,s){d(t,e,s),h(e,n)},p(t,e){64&e[0]&&o!==(o=t[32][t[35]]+"")&&p(n,o)},d(t){t&&i(e)}}}function it(t){let e,n,o,u,f=t[32][t[35]]+"";return{c(){e=s("td"),n=a(f)},l(t){e=l(t,"TD",{});var s=c(e);n=r(s,f),s.forEach(i)},m(s,a){d(s,e,a),h(e,n),o||(u=m(e,"click",t[13]),o=!0)},p(t,e){64&e[0]&&f!==(f=t[32][t[35]]+"")&&p(n,f)},d(t){t&&i(e),o=!1,u()}}}function ut(t){let e;function n(t,e){return"filename"==t[35]?it:rt}let s=n(t),a=s(t);return{c(){a.c(),e=w()},l(t){a.l(t),e=w()},m(t,n){a.m(t,n),d(t,e,n)},p(t,o){s===(s=n(t))&&a?a.p(t,o):(a.d(1),a=s(t),a&&(a.c(),a.m(e.parentNode,e)))},d(t){a.d(t),t&&i(e)}}}function ft(t){let e,n,a=Object.keys(t[6][0]),r=[];for(let s=0;s<a.length;s+=1)r[s]=ut(Q(t,a,s));return{c(){e=s("tr");for(let t=0;t<r.length;t+=1)r[t].c();n=o()},l(t){e=l(t,"TR",{});var s=c(e);for(let e=0;e<r.length;e+=1)r[e].l(s);n=u(s),s.forEach(i)},m(t,s){d(t,e,s);for(let n=0;n<r.length;n+=1)r[n].m(e,null);h(e,n)},p(t,s){if(8256&s[0]){let o;for(a=Object.keys(t[6][0]),o=0;o<a.length;o+=1){const l=Q(t,a,o);r[o]?r[o].p(l,s):(r[o]=ut(l),r[o].c(),r[o].m(e,n))}for(;o<r.length;o+=1)r[o].d(1);r.length=a.length}},d(t){t&&i(e),$(r,t)}}}function dt(t){let e,n,o,u,p,v;return{c(){e=s("div"),n=s("div"),o=s("button"),u=a("Start Simulation"),this.h()},l(t){e=l(t,"DIV",{class:!0});var s=c(e);n=l(s,"DIV",{class:!0});var a=c(n);o=l(a,"BUTTON",{class:!0});var f=c(o);u=r(f,"Start Simulation"),f.forEach(i),a.forEach(i),s.forEach(i),this.h()},h(){f(o,"class","w3-col w3-input w3-border"),f(n,"class","w3-rest"),f(e,"class","w3-row w3-section")},m(s,a){d(s,e,a),h(e,n),h(n,o),h(o,u),p||(v=m(o,"click",t[11]),p=!0)},p:g,d(t){t&&i(e),p=!1,v()}}}function ht(t){let e,n,m,g,p,w,k,$,O,B,x,j,V,R,L,_,U,F,M;n=new C({});g=new q({props:{}}),t[14](g);let A="Communication"==t[2]&&Y(t),J="Static"==t[2]&&ot(t),P="Driving Simulation"==t[2]&&dt(t);return{c(){e=o(),S(n.$$.fragment),m=o(),S(g.$$.fragment),p=o(),w=s("hr"),k=o(),$=s("div"),O=s("h1"),B=s("b"),x=a("Simulation"),j=o(),V=s("hr"),R=o(),A&&A.c(),L=o(),J&&J.c(),_=o(),P&&P.c(),U=o(),F=s("hr"),this.h()},l(t){I('[data-svelte="svelte-1smsifb"]',document.head).forEach(i),e=u(t),E(n.$$.fragment,t),m=u(t),E(g.$$.fragment,t),p=u(t),w=l(t,"HR",{class:!0}),k=u(t),$=l(t,"DIV",{class:!0});var s=c($);O=l(s,"H1",{class:!0,style:!0});var a=c(O);B=l(a,"B",{});var o=c(B);x=r(o,"Simulation"),o.forEach(i),a.forEach(i),s.forEach(i),j=u(t),V=l(t,"HR",{class:!0}),R=u(t),A&&A.l(t),L=u(t),J&&J.l(t),_=u(t),P&&P.l(t),U=u(t),F=l(t,"HR",{class:!0}),this.h()},h(){document.title="Simulation",f(w,"class","svelte-drd2kv"),f(O,"class","w3-text-yellow"),D(O,"text-shadow","1px 1px 0 #444"),f($,"class","w3-panel w3-blue"),f(V,"class","svelte-drd2kv"),f(F,"class","svelte-drd2kv")},m(t,s){d(t,e,s),b(n,t,s),d(t,m,s),b(g,t,s),d(t,p,s),d(t,w,s),d(t,k,s),d(t,$,s),h($,O),h(O,B),h(B,x),d(t,j,s),d(t,V,s),d(t,R,s),A&&A.m(t,s),d(t,L,s),J&&J.m(t,s),d(t,_,s),P&&P.m(t,s),d(t,U,s),d(t,F,s),M=!0},p(t,e){g.$set({}),"Communication"==t[2]?A?(A.p(t,e),4&e[0]&&v(A,1)):(A=Y(t),A.c(),v(A,1),A.m(L.parentNode,L)):A&&(H(),y(A,1,1,(()=>{A=null})),N()),"Static"==t[2]?J?J.p(t,e):(J=ot(t),J.c(),J.m(_.parentNode,_)):J&&(J.d(1),J=null),"Driving Simulation"==t[2]?P?P.p(t,e):(P=dt(t),P.c(),P.m(U.parentNode,U)):P&&(P.d(1),P=null)},i(t){M||(v(n.$$.fragment,t),v(g.$$.fragment,t),v(A),M=!0)},o(t){y(n.$$.fragment,t),y(g.$$.fragment,t),y(A),M=!1},d(s){s&&i(e),T(n,s),s&&i(m),t[14](null),T(g,s),s&&i(p),s&&i(w),s&&i(k),s&&i($),s&&i(j),s&&i(V),s&&i(R),A&&A.d(s),s&&i(L),J&&J.d(s),s&&i(_),P&&P.d(s),s&&i(U),s&&i(F)}}}function mt(t,e,n){let s,a=[],o={},l="";const c=F.subscribe((t=>{a=t})),r=M.subscribe((t=>{n(1,o=t)})),i=A.subscribe((t=>{n(2,l=t)}));let u=[],f=[];B((()=>{c(),r(),i();for(let t=0;t<u.length;t++)u[t].close();for(let t=0;t<f.length;t++)f[t].close()}));let d="Please create and select a scenario before starting the simulation.",h=!1,m=0,g=[],p={},v=[];function w(){for(const[t,e]of Object.entries(p))n(5,p[t]=[],p)}async function S(t){if(!h)return void _.danger("please create and activate a scenario first.");"start"==t&&w(),U("/simulation/comm","POST",{command:t,configs:o},(function(t){t.data&&(_.success("simulation started."),console.log("response of simulation",t.data))}))}function E(){for(var t=0;t<u.length;t++)ws=u[t],ws.close()}x((async()=>{let t="";for(let e=0;e<a.length;e++)a[e].activated&&(n(3,d=a[e].name),h=!0,t="/api/db1/scenario_configurations/ref-"+a[e]._id);!function(t,e){L(t,(function(t){let n=JSON.parse(t.response);n.data&&n.data.length>0&&(M.set(n.data[0]),e())}))}(t,(function(){if("Communication"==o.type){"configurations"in o&&n(4,m=o.configurations.length);for(var t=0;t<m;t++){n(5,p[t.toString()]=[],p);let e="ws://localhost:8000/simulation/comm/ws/"+t.toString(),s=new WebSocket(e);s.onopen=function(){window.console.log("Successfully connected to the echo websocket server...")},s.onmessage=function(t){let e=JSON.parse(t.data);console.log(e,"printing JSON now");let s=e.client_index,a=JSON.parse(e.data);"status"in a?g[s]=a.status:n(5,p[s]=[...p[s],a],p)},u.push(s)}}if("Static"==o.type){console.log("hello static sample");let t=new WebSocket("ws://localhost:8000/simulation/static/ws");t.onopen=function(){window.console.log("static simulation websocket")},t.onmessage=function(t){let e=JSON.parse(t.data);n(6,v=[...v,e])},f.push(t)}"Communication"==o.type&&console.log("hello driving scenario")}))}));return[s,o,l,d,m,p,v,w,S,E,function(){U("/simulation/static","POST",{configs:o},(function(t){t.data&&(_.success("simulation started."),console.log("response of simulation",t.data))}))},function(){U("/simulation/static","POST",{configs:o},(function(t){t.data&&(_.success("simulation started."),console.log("response of simulation",t.data))}))},function(){U("/simulation/static","DELETE",{configs:o},(function(t){t.data&&(_.success("Delete successful."),n(6,v=[]),console.log("response of simulation",t.data))}))},function(){console.log(this.innerText);let t=this.innerText,e=o.configurations[0];getFile2(),getFile2("/capfile/download","GET",{configurations:e,filename:t},(function(e){if(e){let n=new Blob([e.response],{type:"octet/stream"}),a=urlCreator.createObjectURL(n);s.changeImage(a,t)}})),U("/staticanalysis","GET",{configurations:e,filename:t},(function(t){t.data&&console.log("image data: res.data:",t.data)}))},function(t){j[t?"unshift":"push"]((()=>{s=t,n(0,s)}))},()=>S("start"),()=>S("stop"),()=>E(),function(e,s){t.$$.not_equal(p[s.toString()],e)&&(p[s.toString()]=e,n(5,p))}]}export default class extends t{constructor(t){super(),e(this,t,mt,ht,n,{},[-1,-1])}}