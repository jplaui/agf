import{S as e,i as t,s as a,e as s,t as l,k as n,c,a as o,g as r,d as i,n as h,b as f,N as d,f as p,F as u,G as E,h as v,Q as w,M as m,j as g,L as T,m as x,o as b,v as y,r as C,w as D,z as R,T as k}from"../../chunks/vendor-c052606d.js";import{T as H,x as F,g as S,a as B,n as U}from"../../chunks/requests-ecdf3b79.js";/* empty css                                                       */const{document:V}=k;function O(e,t,a){const s=e.slice();return s[7]=t[a],s[9]=a,s}function I(e,t,a){const s=e.slice();return s[10]=t[a],s[9]=a,s}function N(e){let t,a,E,v,w,g,T,x,b,y,C,D=e[1],R=[];for(let s=0;s<D.length;s+=1)R[s]=A(I(e,D,s));return{c(){t=s("div"),a=s("div"),E=s("table"),v=s("thead"),w=s("tr"),g=s("th"),T=l("Filename"),x=n(),b=s("th"),y=l("Actions"),C=n();for(let e=0;e<R.length;e+=1)R[e].c();this.h()},l(e){t=c(e,"DIV",{class:!0});var s=o(t);a=c(s,"DIV",{class:!0});var l=o(a);E=c(l,"TABLE",{class:!0,style:!0});var n=o(E);v=c(n,"THEAD",{});var f=o(v);w=c(f,"TR",{class:!0});var d=o(w);g=c(d,"TH",{class:!0});var p=o(g);T=r(p,"Filename"),p.forEach(i),x=h(d),b=c(d,"TH",{class:!0});var u=o(b);y=r(u,"Actions"),u.forEach(i),d.forEach(i),f.forEach(i),C=h(n);for(let t=0;t<R.length;t+=1)R[t].l(n);n.forEach(i),l.forEach(i),s.forEach(i),this.h()},h(){f(g,"class","w3-left-align"),f(b,"class","w3-right-align"),f(w,"class","w3-dark-grey"),f(E,"class","w3-table-all"),d(E,"width","100%"),f(a,"class","w3-responsive"),f(t,"class","w3-container")},m(e,s){p(e,t,s),u(t,a),u(a,E),u(E,v),u(v,w),u(w,g),u(g,T),u(w,x),u(w,b),u(b,y),u(E,C);for(let t=0;t<R.length;t+=1)R[t].m(E,null)},p(e,t){if(26&t){let a;for(D=e[1],a=0;a<D.length;a+=1){const s=I(e,D,a);R[a]?R[a].p(s,t):(R[a]=A(s),R[a].c(),R[a].m(E,null))}for(;a<R.length;a+=1)R[a].d(1);R.length=D.length}},d(e){e&&i(t),m(R,e)}}}function A(e){let t,a,d,m,g,T,x,b,y,C,D,R,k,H,F=e[10]+"";return{c(){t=s("tr"),a=s("td"),d=l(F),m=n(),g=s("td"),T=s("div"),x=s("button"),b=l("Edit"),y=n(),C=s("button"),D=l("Download"),R=n(),this.h()},l(e){t=c(e,"TR",{});var s=o(t);a=c(s,"TD",{class:!0});var l=o(a);d=r(l,F),l.forEach(i),m=h(s),g=c(s,"TD",{class:!0});var n=o(g);T=c(n,"DIV",{});var f=o(T);x=c(f,"BUTTON",{index:!0});var p=o(x);b=r(p,"Edit"),p.forEach(i),y=h(f),C=c(f,"BUTTON",{index:!0});var u=o(C);D=r(u,"Download"),u.forEach(i),f.forEach(i),n.forEach(i),R=h(s),s.forEach(i),this.h()},h(){f(a,"class","w3-left-align"),f(x,"index",e[9]),f(C,"index",e[9]),f(g,"class","w3-right-align")},m(s,l){p(s,t,l),u(t,a),u(a,d),u(t,m),u(t,g),u(g,T),u(T,x),u(x,b),u(T,y),u(T,C),u(C,D),u(t,R),k||(H=[E(x,"click",e[4]),E(C,"click",e[3])],k=!0)},p(e,t){2&t&&F!==(F=e[10]+"")&&v(d,F)},d(e){e&&i(t),k=!1,w(H)}}}function $(e){let t,a,E,v,w,g,T,x,b,y,C,D=e[0],R=[];for(let s=0;s<D.length;s+=1)R[s]=G(O(e,D,s));return{c(){t=s("div"),a=s("div"),E=s("table"),v=s("thead"),w=s("tr"),g=s("th"),T=l("Filename"),x=n(),b=s("th"),y=l("Actions"),C=n();for(let e=0;e<R.length;e+=1)R[e].c();this.h()},l(e){t=c(e,"DIV",{class:!0});var s=o(t);a=c(s,"DIV",{class:!0});var l=o(a);E=c(l,"TABLE",{class:!0,style:!0});var n=o(E);v=c(n,"THEAD",{});var f=o(v);w=c(f,"TR",{class:!0});var d=o(w);g=c(d,"TH",{class:!0});var p=o(g);T=r(p,"Filename"),p.forEach(i),x=h(d),b=c(d,"TH",{class:!0});var u=o(b);y=r(u,"Actions"),u.forEach(i),d.forEach(i),f.forEach(i),C=h(n);for(let t=0;t<R.length;t+=1)R[t].l(n);n.forEach(i),l.forEach(i),s.forEach(i),this.h()},h(){f(g,"class","w3-left-align"),f(b,"class","w3-right-align"),f(w,"class","w3-dark-grey"),f(E,"class","w3-table-all"),d(E,"width","100%"),f(a,"class","w3-responsive"),f(t,"class","w3-container")},m(e,s){p(e,t,s),u(t,a),u(a,E),u(E,v),u(v,w),u(w,g),u(g,T),u(w,x),u(w,b),u(b,y),u(E,C);for(let t=0;t<R.length;t+=1)R[t].m(E,null)},p(e,t){if(33&t){let a;for(D=e[0],a=0;a<D.length;a+=1){const s=O(e,D,a);R[a]?R[a].p(s,t):(R[a]=G(s),R[a].c(),R[a].m(E,null))}for(;a<R.length;a+=1)R[a].d(1);R.length=D.length}},d(e){e&&i(t),m(R,e)}}}function G(e){let t,a,d,w,m,g,T,x,b,y,C=e[7]+"";return{c(){t=s("tr"),a=s("td"),d=l(C),w=n(),m=s("td"),g=s("button"),T=l("Download"),x=n(),this.h()},l(e){t=c(e,"TR",{});var s=o(t);a=c(s,"TD",{class:!0});var l=o(a);d=r(l,C),l.forEach(i),w=h(s),m=c(s,"TD",{class:!0});var n=o(m);g=c(n,"BUTTON",{index:!0});var f=o(g);T=r(f,"Download"),f.forEach(i),n.forEach(i),x=h(s),s.forEach(i),this.h()},h(){f(a,"class","w3-left-align"),f(g,"index",e[9]),f(m,"class","w3-right-align")},m(s,l){p(s,t,l),u(t,a),u(a,d),u(t,w),u(t,m),u(m,g),u(g,T),u(t,x),b||(y=E(g,"click",e[5]),b=!0)},p(e,t){1&t&&C!==(C=e[7]+"")&&v(d,C)},d(e){e&&i(t),b=!1,y()}}}function L(e){let t,a,v,m,R,k,F,S,B,U,O,I,A,G,L,P,q,J,z,M,Q,_,K,W,X,Y,Z,ee,te,ae,se,le,ne,ce,oe,re;a=new H({});let ie=e[1].length>0&&N(e),he=e[0].length>0&&$(e);return{c(){t=n(),g(a.$$.fragment),v=n(),m=s("div"),R=s("h1"),k=s("b"),F=l("Capfiles"),S=n(),ie&&ie.c(),B=n(),U=s("hr"),O=n(),I=s("div"),A=s("h1"),G=s("b"),L=l("Edit Capfile Content"),P=l("\n\non click on capfiles, show another table of capfile content\n\n\n"),q=s("button"),J=l("Convert to CSV"),z=n(),M=s("hr"),Q=n(),_=s("div"),K=s("h1"),W=s("b"),X=l("Gridfs Files (CSVs stored in GridFS)"),Y=n(),Z=s("button"),ee=l("Reload GrifFS"),te=n(),ae=s("hr"),se=n(),he&&he.c(),le=n(),ne=s("hr"),this.h()},l(e){T('[data-svelte="svelte-qmgm2y"]',V.head).forEach(i),t=h(e),x(a.$$.fragment,e),v=h(e),m=c(e,"DIV",{class:!0});var s=o(m);R=c(s,"H1",{class:!0,style:!0});var l=o(R);k=c(l,"B",{});var n=o(k);F=r(n,"Capfiles"),n.forEach(i),l.forEach(i),s.forEach(i),S=h(e),ie&&ie.l(e),B=h(e),U=c(e,"HR",{class:!0}),O=h(e),I=c(e,"DIV",{class:!0});var f=o(I);A=c(f,"H1",{class:!0,style:!0});var d=o(A);G=c(d,"B",{});var p=o(G);L=r(p,"Edit Capfile Content"),p.forEach(i),d.forEach(i),f.forEach(i),P=r(e,"\n\non click on capfiles, show another table of capfile content\n\n\n"),q=c(e,"BUTTON",{class:!0});var u=o(q);J=r(u,"Convert to CSV"),u.forEach(i),z=h(e),M=c(e,"HR",{class:!0}),Q=h(e),_=c(e,"DIV",{class:!0});var E=o(_);K=c(E,"H1",{class:!0,style:!0});var w=o(K);W=c(w,"B",{});var g=o(W);X=r(g,"Gridfs Files (CSVs stored in GridFS)"),g.forEach(i),w.forEach(i),E.forEach(i),Y=h(e),Z=c(e,"BUTTON",{class:!0});var b=o(Z);ee=r(b,"Reload GrifFS"),b.forEach(i),te=h(e),ae=c(e,"HR",{class:!0}),se=h(e),he&&he.l(e),le=h(e),ne=c(e,"HR",{class:!0}),this.h()},h(){V.title="Database",f(R,"class","w3-text-yellow"),d(R,"text-shadow","1px 1px 0 #444"),f(m,"class","w3-panel w3-blue"),f(U,"class","svelte-lxonyp"),f(A,"class","w3-text-yellow"),d(A,"text-shadow","1px 1px 0 #444"),f(I,"class","w3-panel w3-blue"),f(q,"class","w3-col w3-input w3-border"),f(M,"class","svelte-lxonyp"),f(K,"class","w3-text-yellow"),d(K,"text-shadow","1px 1px 0 #444"),f(_,"class","w3-panel w3-blue"),f(Z,"class","w3-col w3-input w3-border"),f(ae,"class","svelte-lxonyp"),f(ne,"class","svelte-lxonyp")},m(s,l){p(s,t,l),b(a,s,l),p(s,v,l),p(s,m,l),u(m,R),u(R,k),u(k,F),p(s,S,l),ie&&ie.m(s,l),p(s,B,l),p(s,U,l),p(s,O,l),p(s,I,l),u(I,A),u(A,G),u(G,L),p(s,P,l),p(s,q,l),u(q,J),p(s,z,l),p(s,M,l),p(s,Q,l),p(s,_,l),u(_,K),u(K,W),u(W,X),p(s,Y,l),p(s,Z,l),u(Z,ee),p(s,te,l),p(s,ae,l),p(s,se,l),he&&he.m(s,l),p(s,le,l),p(s,ne,l),ce=!0,oe||(re=[E(q,"click",j),E(Z,"click",e[2])],oe=!0)},p(e,[t]){e[1].length>0?ie?ie.p(e,t):(ie=N(e),ie.c(),ie.m(B.parentNode,B)):ie&&(ie.d(1),ie=null),e[0].length>0?he?he.p(e,t):(he=$(e),he.c(),he.m(le.parentNode,le)):he&&(he.d(1),he=null)},i(e){ce||(y(a.$$.fragment,e),ce=!0)},o(e){C(a.$$.fragment,e),ce=!1},d(e){e&&i(t),D(a,e),e&&i(v),e&&i(m),e&&i(S),ie&&ie.d(e),e&&i(B),e&&i(U),e&&i(O),e&&i(I),e&&i(P),e&&i(q),e&&i(z),e&&i(M),e&&i(Q),e&&i(_),e&&i(Y),e&&i(Z),e&&i(te),e&&i(ae),e&&i(se),he&&he.d(e),e&&i(le),e&&i(ne),oe=!1,w(re)}}}function j(){}function P(e,t){let a=document.createElement("a");document.body.appendChild(a),a.style="display: none";let s=window.URL.createObjectURL(e);a.href=s,a.download=t,a.click(),window.URL.revokeObjectURL(s)}function q(e,t,a){let s=[],l=[],n=[];function c(){F("/allgridfs/all",(function(e){let t=JSON.parse(e.response);t.data&&(U.success("Found data."),a(0,s=t.data))}))}return R((async()=>{c(),F("/capfile",(function(e){let t=JSON.parse(e.response);t.data&&(U.success("Found data."),a(1,l=t.data),console.log(l))}))})),[s,l,c,function(){let e=this.parentElement.parentElement.parentElement.firstElementChild.innerText;S("/capfile","POST",{filepath:e},(function(e){P(new Blob([e.response],{type:"octet/stream"}),decodeURIComponent(e.getResponseHeader("Content-Disposition").split("filename=")[1].split(";")[0]))}))},function(){let e=this.parentElement.parentElement.parentElement.firstElementChild.innerText;B("/capfile","PUT",{filepath:e},(function(e){e.data&&(n=e.data,console.log("editData:",n),U.success("Configuration update successfull."))}))},function(){console.log(this.parentElement.parentElement.firstElementChild.innerText);let e=this.parentElement.parentElement.firstElementChild.innerText;S("/allgridfs/download","POST",{filename:e},(function(e){P(new Blob([e.response],{type:"octet/stream"}),decodeURIComponent(e.getResponseHeader("Content-Disposition").split("filename=")[1].split(";")[0]))}))}]}export default class extends e{constructor(e){super(),t(this,e,q,L,a,{})}}