import{S as e,i as a,s as t,e as l,t as s,k as n,c,a as r,g as o,d as i,n as h,b as d,N as f,f as p,F as v,G as E,h as w,Q as u,M as g,j as m,L as T,m as b,o as y,v as D,r as x,w as C,z as V,T as k}from"../../chunks/vendor-c052606d.js";import{T as I,x as R,g as S,a as B,n as N}from"../../chunks/requests-ecdf3b79.js";/* empty css                                                       */const{document:F}=k;function H(e,a,t){const l=e.slice();return l[7]=a[t],l[9]=t,l}function O(e,a,t){const l=e.slice();return l[10]=a[t],l[9]=t,l}function U(e,a,t){const l=e.slice();return l[12]=a[t],l[9]=t,l}function A(e){let a,t,E,w,u,m,T,b,y,D,x,C=e[1],V=[];for(let l=0;l<C.length;l+=1)V[l]=L(U(e,C,l));return{c(){a=l("div"),t=l("div"),E=l("table"),w=l("thead"),u=l("tr"),m=l("th"),T=s("Filename"),b=n(),y=l("th"),D=s("Actions"),x=n();for(let e=0;e<V.length;e+=1)V[e].c();this.h()},l(e){a=c(e,"DIV",{class:!0});var l=r(a);t=c(l,"DIV",{class:!0});var s=r(t);E=c(s,"TABLE",{class:!0,style:!0});var n=r(E);w=c(n,"THEAD",{});var d=r(w);u=c(d,"TR",{class:!0});var f=r(u);m=c(f,"TH",{class:!0});var p=r(m);T=o(p,"Filename"),p.forEach(i),b=h(f),y=c(f,"TH",{class:!0});var v=r(y);D=o(v,"Actions"),v.forEach(i),f.forEach(i),d.forEach(i),x=h(n);for(let a=0;a<V.length;a+=1)V[a].l(n);n.forEach(i),s.forEach(i),l.forEach(i),this.h()},h(){d(m,"class","w3-left-align"),d(y,"class","w3-right-align"),d(u,"class","w3-dark-grey"),d(E,"class","w3-table-all"),f(E,"width","100%"),d(t,"class","w3-responsive"),d(a,"class","w3-container")},m(e,l){p(e,a,l),v(a,t),v(t,E),v(E,w),v(w,u),v(u,m),v(m,T),v(u,b),v(u,y),v(y,D),v(E,x);for(let a=0;a<V.length;a+=1)V[a].m(E,null)},p(e,a){if(50&a){let t;for(C=e[1],t=0;t<C.length;t+=1){const l=U(e,C,t);V[t]?V[t].p(l,a):(V[t]=L(l),V[t].c(),V[t].m(E,null))}for(;t<V.length;t+=1)V[t].d(1);V.length=C.length}},d(e){e&&i(a),g(V,e)}}}function L(e){let a,t,f,g,m,T,b,y,D,x,C,V,k,I,R=e[12]+"";return{c(){a=l("tr"),t=l("td"),f=s(R),g=n(),m=l("td"),T=l("div"),b=l("button"),y=s("Edit"),D=n(),x=l("button"),C=s("Download"),V=n(),this.h()},l(e){a=c(e,"TR",{});var l=r(a);t=c(l,"TD",{class:!0});var s=r(t);f=o(s,R),s.forEach(i),g=h(l),m=c(l,"TD",{class:!0});var n=r(m);T=c(n,"DIV",{});var d=r(T);b=c(d,"BUTTON",{index:!0});var p=r(b);y=o(p,"Edit"),p.forEach(i),D=h(d),x=c(d,"BUTTON",{index:!0});var v=r(x);C=o(v,"Download"),v.forEach(i),d.forEach(i),n.forEach(i),V=h(l),l.forEach(i),this.h()},h(){d(t,"class","w3-left-align"),d(b,"index",e[9]),d(x,"index",e[9]),d(m,"class","w3-right-align")},m(l,s){p(l,a,s),v(a,t),v(t,f),v(a,g),v(a,m),v(m,T),v(T,b),v(b,y),v(T,D),v(T,x),v(x,C),v(a,V),k||(I=[E(b,"click",e[5]),E(x,"click",e[4])],k=!0)},p(e,a){2&a&&R!==(R=e[12]+"")&&w(f,R)},d(e){e&&i(a),k=!1,u(I)}}}function G(e){let a,t,E,w,u,m,T,b,y,D,x,C,V=e[2],k=[];for(let l=0;l<V.length;l+=1)k[l]=$(O(e,V,l));return{c(){a=l("div"),t=l("div"),E=l("table"),w=l("thead"),u=l("tr"),m=l("th"),T=s("Content"),b=n(),y=l("th"),D=s("Labels"),x=n(),C=l("tbody");for(let e=0;e<k.length;e+=1)k[e].c();this.h()},l(e){a=c(e,"DIV",{class:!0});var l=r(a);t=c(l,"DIV",{class:!0});var s=r(t);E=c(s,"TABLE",{id:!0,class:!0,style:!0});var n=r(E);w=c(n,"THEAD",{});var d=r(w);u=c(d,"TR",{class:!0});var f=r(u);m=c(f,"TH",{class:!0});var p=r(m);T=o(p,"Content"),p.forEach(i),b=h(f),y=c(f,"TH",{class:!0});var v=r(y);D=o(v,"Labels"),v.forEach(i),f.forEach(i),d.forEach(i),x=h(n),C=c(n,"TBODY",{});var g=r(C);for(let a=0;a<k.length;a+=1)k[a].l(g);g.forEach(i),n.forEach(i),s.forEach(i),l.forEach(i),this.h()},h(){d(m,"class","w3-left-align"),d(y,"class","w3-right-align"),d(u,"class","w3-dark-grey"),d(E,"id","editTable"),d(E,"class","w3-table-all"),f(E,"width","100%"),d(t,"class","w3-responsive"),d(a,"class","w3-container")},m(e,l){p(e,a,l),v(a,t),v(t,E),v(E,w),v(w,u),v(u,m),v(m,T),v(u,b),v(u,y),v(y,D),v(E,x),v(E,C);for(let a=0;a<k.length;a+=1)k[a].m(C,null)},p(e,a){if(4&a){let t;for(V=e[2],t=0;t<V.length;t+=1){const l=O(e,V,t);k[t]?k[t].p(l,a):(k[t]=$(l),k[t].c(),k[t].m(C,null))}for(;t<k.length;t+=1)k[t].d(1);k.length=V.length}},d(e){e&&i(a),g(k,e)}}}function $(e){let a,t,f,E,u,g,m,T,b=JSON.stringify(e[10],null,2)+"";return{c(){a=l("tr"),t=l("td"),f=s(b),E=n(),u=l("td"),g=l("div"),m=l("input"),T=n(),this.h()},l(e){a=c(e,"TR",{});var l=r(a);t=c(l,"TD",{class:!0});var s=r(t);f=o(s,b),s.forEach(i),E=h(l),u=c(l,"TD",{class:!0});var n=r(u);g=c(n,"DIV",{});var d=r(g);m=c(d,"INPUT",{class:!0,type:!0,checked:!0,index:!0}),d.forEach(i),n.forEach(i),T=h(l),l.forEach(i),this.h()},h(){d(t,"class","w3-left-align"),d(m,"class","w3-check"),d(m,"type","checkbox"),m.checked="",d(m,"index",e[9]),d(u,"class","w3-right-align")},m(e,l){p(e,a,l),v(a,t),v(t,f),v(a,E),v(a,u),v(u,g),v(g,m),v(a,T)},p(e,a){4&a&&b!==(b=JSON.stringify(e[10],null,2)+"")&&w(f,b)},d(e){e&&i(a)}}}function j(e){let a,t,E,w,u,m,T,b,y,D,x,C=e[0],V=[];for(let l=0;l<C.length;l+=1)V[l]=P(H(e,C,l));return{c(){a=l("div"),t=l("div"),E=l("table"),w=l("thead"),u=l("tr"),m=l("th"),T=s("Filename"),b=n(),y=l("th"),D=s("Actions"),x=n();for(let e=0;e<V.length;e+=1)V[e].c();this.h()},l(e){a=c(e,"DIV",{class:!0});var l=r(a);t=c(l,"DIV",{class:!0});var s=r(t);E=c(s,"TABLE",{class:!0,style:!0});var n=r(E);w=c(n,"THEAD",{});var d=r(w);u=c(d,"TR",{class:!0});var f=r(u);m=c(f,"TH",{class:!0});var p=r(m);T=o(p,"Filename"),p.forEach(i),b=h(f),y=c(f,"TH",{class:!0});var v=r(y);D=o(v,"Actions"),v.forEach(i),f.forEach(i),d.forEach(i),x=h(n);for(let a=0;a<V.length;a+=1)V[a].l(n);n.forEach(i),s.forEach(i),l.forEach(i),this.h()},h(){d(m,"class","w3-left-align"),d(y,"class","w3-right-align"),d(u,"class","w3-dark-grey"),d(E,"class","w3-table-all"),f(E,"width","100%"),d(t,"class","w3-responsive"),d(a,"class","w3-container")},m(e,l){p(e,a,l),v(a,t),v(t,E),v(E,w),v(w,u),v(u,m),v(m,T),v(u,b),v(u,y),v(y,D),v(E,x);for(let a=0;a<V.length;a+=1)V[a].m(E,null)},p(e,a){if(65&a){let t;for(C=e[0],t=0;t<C.length;t+=1){const l=H(e,C,t);V[t]?V[t].p(l,a):(V[t]=P(l),V[t].c(),V[t].m(E,null))}for(;t<V.length;t+=1)V[t].d(1);V.length=C.length}},d(e){e&&i(a),g(V,e)}}}function P(e){let a,t,f,u,g,m,T,b,y,D,x=e[7]+"";return{c(){a=l("tr"),t=l("td"),f=s(x),u=n(),g=l("td"),m=l("button"),T=s("Download"),b=n(),this.h()},l(e){a=c(e,"TR",{});var l=r(a);t=c(l,"TD",{class:!0});var s=r(t);f=o(s,x),s.forEach(i),u=h(l),g=c(l,"TD",{class:!0});var n=r(g);m=c(n,"BUTTON",{index:!0});var d=r(m);T=o(d,"Download"),d.forEach(i),n.forEach(i),b=h(l),l.forEach(i),this.h()},h(){d(t,"class","w3-left-align"),d(m,"index",e[9]),d(g,"class","w3-right-align")},m(l,s){p(l,a,s),v(a,t),v(t,f),v(a,u),v(a,g),v(g,m),v(m,T),v(a,b),y||(D=E(m,"click",e[6]),y=!0)},p(e,a){1&a&&x!==(x=e[7]+"")&&w(f,x)},d(e){e&&i(a),y=!1,D()}}}function J(e){let a,t,w,g,V,k,R,S,B,N,H,O,U,L,$,P,J,M,Y,_,K,W,X,Z,ee,ae,te,le,se,ne,ce,re,oe,ie,he,de,fe,pe,ve,Ee,we,ue,ge,me,Te,be,ye,De,xe,Ce,Ve,ke,Ie,Re,Se;t=new I({});let Be=e[1].length>0&&A(e),Ne=e[2].length>0&&G(e),Fe=e[0].length>0&&j(e);return{c(){a=n(),m(t.$$.fragment),w=n(),g=l("div"),V=l("h1"),k=l("b"),R=s("Capfiles"),S=n(),Be&&Be.c(),B=n(),N=l("hr"),H=n(),O=l("div"),U=l("h1"),L=l("b"),$=s("Edit Capfile Content"),P=s('\n\non click on "Edit" in capfiles table, displays table with capfile content\n\n\n'),J=l("div"),M=l("div"),Y=l("button"),_=s("Apply Filter"),K=n(),W=l("div"),X=l("input"),Z=n(),ee=l("br"),ae=n(),Ne&&Ne.c(),te=n(),le=l("br"),se=n(),ne=l("div"),ce=l("div"),re=l("button"),oe=s("Convert to CSV and Store to GridFs"),ie=n(),he=l("div"),de=l("button"),fe=s("Download Table as CSV"),pe=n(),ve=l("hr"),Ee=n(),we=l("div"),ue=l("h1"),ge=l("b"),me=s("Gridfs Files (CSVs stored in GridFS)"),Te=n(),be=l("button"),ye=s("Reload GrifFS"),De=n(),xe=l("hr"),Ce=n(),Fe&&Fe.c(),Ve=n(),ke=l("hr"),this.h()},l(e){T('[data-svelte="svelte-qmgm2y"]',F.head).forEach(i),a=h(e),b(t.$$.fragment,e),w=h(e),g=c(e,"DIV",{class:!0});var l=r(g);V=c(l,"H1",{class:!0,style:!0});var s=r(V);k=c(s,"B",{});var n=r(k);R=o(n,"Capfiles"),n.forEach(i),s.forEach(i),l.forEach(i),S=h(e),Be&&Be.l(e),B=h(e),N=c(e,"HR",{class:!0}),H=h(e),O=c(e,"DIV",{class:!0});var d=r(O);U=c(d,"H1",{class:!0,style:!0});var f=r(U);L=c(f,"B",{});var p=r(L);$=o(p,"Edit Capfile Content"),p.forEach(i),f.forEach(i),d.forEach(i),P=o(e,'\n\non click on "Edit" in capfiles table, displays table with capfile content\n\n\n'),J=c(e,"DIV",{class:!0});var v=r(J);M=c(v,"DIV",{class:!0});var E=r(M);Y=c(E,"BUTTON",{ref:!0,class:!0});var u=r(Y);_=o(u,"Apply Filter"),u.forEach(i),E.forEach(i),K=h(v),W=c(v,"DIV",{class:!0});var m=r(W);X=c(m,"INPUT",{id:!0,class:!0,name:!0,type:!0,placeholder:!0}),m.forEach(i),v.forEach(i),Z=h(e),ee=c(e,"BR",{}),ae=h(e),Ne&&Ne.l(e),te=h(e),le=c(e,"BR",{}),se=h(e),ne=c(e,"DIV",{class:!0});var y=r(ne);ce=c(y,"DIV",{class:!0});var D=r(ce);re=c(D,"BUTTON",{class:!0});var x=r(re);oe=o(x,"Convert to CSV and Store to GridFs"),x.forEach(i),D.forEach(i),ie=h(y),he=c(y,"DIV",{class:!0});var C=r(he);de=c(C,"BUTTON",{class:!0});var I=r(de);fe=o(I,"Download Table as CSV"),I.forEach(i),C.forEach(i),y.forEach(i),pe=h(e),ve=c(e,"HR",{class:!0}),Ee=h(e),we=c(e,"DIV",{class:!0});var A=r(we);ue=c(A,"H1",{class:!0,style:!0});var G=r(ue);ge=c(G,"B",{});var j=r(ge);me=o(j,"Gridfs Files (CSVs stored in GridFS)"),j.forEach(i),G.forEach(i),A.forEach(i),Te=h(e),be=c(e,"BUTTON",{class:!0});var q=r(be);ye=o(q,"Reload GrifFS"),q.forEach(i),De=h(e),xe=c(e,"HR",{class:!0}),Ce=h(e),Fe&&Fe.l(e),Ve=h(e),ke=c(e,"HR",{class:!0}),this.h()},h(){F.title="Database",d(V,"class","w3-text-yellow"),f(V,"text-shadow","1px 1px 0 #444"),d(g,"class","w3-panel w3-blue"),d(N,"class","svelte-lxonyp"),d(U,"class","w3-text-yellow"),f(U,"text-shadow","1px 1px 0 #444"),d(O,"class","w3-panel w3-blue"),d(Y,"ref","filterTable"),d(Y,"class","w3-col w3-input w3-border"),d(M,"class","w3-third"),d(X,"id","filterTable"),d(X,"class","w3-input w3-border"),d(X,"name","name"),d(X,"type","text"),d(X,"placeholder","Filter String"),d(W,"class","w3-rest"),d(J,"class","w3-row w3-section"),d(re,"class","w3-col w3-input w3-border"),d(ce,"class","w3-half"),d(de,"class","w3-col w3-input w3-border"),d(he,"class","w3-half"),d(ne,"class","w3-row w3-section"),d(ve,"class","svelte-lxonyp"),d(ue,"class","w3-text-yellow"),f(ue,"text-shadow","1px 1px 0 #444"),d(we,"class","w3-panel w3-blue"),d(be,"class","w3-col w3-input w3-border"),d(xe,"class","svelte-lxonyp"),d(ke,"class","svelte-lxonyp")},m(l,s){p(l,a,s),y(t,l,s),p(l,w,s),p(l,g,s),v(g,V),v(V,k),v(k,R),p(l,S,s),Be&&Be.m(l,s),p(l,B,s),p(l,N,s),p(l,H,s),p(l,O,s),v(O,U),v(U,L),v(L,$),p(l,P,s),p(l,J,s),v(J,M),v(M,Y),v(Y,_),v(J,K),v(J,W),v(W,X),p(l,Z,s),p(l,ee,s),p(l,ae,s),Ne&&Ne.m(l,s),p(l,te,s),p(l,le,s),p(l,se,s),p(l,ne,s),v(ne,ce),v(ce,re),v(re,oe),v(ne,ie),v(ne,he),v(he,de),v(de,fe),p(l,pe,s),p(l,ve,s),p(l,Ee,s),p(l,we,s),v(we,ue),v(ue,ge),v(ge,me),p(l,Te,s),p(l,be,s),v(be,ye),p(l,De,s),p(l,xe,s),p(l,Ce,s),Fe&&Fe.m(l,s),p(l,Ve,s),p(l,ke,s),Ie=!0,Re||(Se=[E(Y,"click",Q),E(re,"click",q),E(de,"click",z),E(be,"click",e[3])],Re=!0)},p(e,[a]){e[1].length>0?Be?Be.p(e,a):(Be=A(e),Be.c(),Be.m(B.parentNode,B)):Be&&(Be.d(1),Be=null),e[2].length>0?Ne?Ne.p(e,a):(Ne=G(e),Ne.c(),Ne.m(te.parentNode,te)):Ne&&(Ne.d(1),Ne=null),e[0].length>0?Fe?Fe.p(e,a):(Fe=j(e),Fe.c(),Fe.m(Ve.parentNode,Ve)):Fe&&(Fe.d(1),Fe=null)},i(e){Ie||(D(t.$$.fragment,e),Ie=!0)},o(e){x(t.$$.fragment,e),Ie=!1},d(e){e&&i(a),C(t,e),e&&i(w),e&&i(g),e&&i(S),Be&&Be.d(e),e&&i(B),e&&i(N),e&&i(H),e&&i(O),e&&i(P),e&&i(J),e&&i(Z),e&&i(ee),e&&i(ae),Ne&&Ne.d(e),e&&i(te),e&&i(le),e&&i(se),e&&i(ne),e&&i(pe),e&&i(ve),e&&i(Ee),e&&i(we),e&&i(Te),e&&i(be),e&&i(De),e&&i(xe),e&&i(Ce),Fe&&Fe.d(e),e&&i(Ve),e&&i(ke),Re=!1,u(Se)}}}function q(){}function z(){}function M(e,a){let t=document.createElement("a");document.body.appendChild(t),t.style="display: none";let l=window.URL.createObjectURL(e);t.href=l,t.download=a,t.click(),window.URL.revokeObjectURL(l)}function Q(){let e=document.getElementById("editTable"),a=this.parentElement.nextElementSibling.firstElementChild.value;console.log(e,this,a);let t=e.children[1].childNodes;console.log("list of trs:",t,t.length);for(let l=0;l<t.length;l++){t[l].style.display="none";let e=t[l].getElementsByTagName("td")[0];console.log(e.innerText),e&&e.innerText.toUpperCase().indexOf(a)>-1&&(t[l].style.display="")}}function Y(e,a,t){let l=[],s=[],n=[];function c(){R("/datasets/all",(function(e){let a=JSON.parse(e.response);a.data&&(N.success("Found data."),t(0,l=a.data),console.log("gridfsData",l))}))}return V((async()=>{c(),R("/capfile/all",(function(e){let a=JSON.parse(e.response);a.data&&(N.success("Found data."),t(1,s=a.data),console.log("capfileData",s))}))})),[l,s,n,c,function(){let e=this.parentElement.parentElement.parentElement.firstElementChild.innerText;S("/capfile/download","POST",{filepath:e},(function(e){M(new Blob([e.response],{type:"octet/stream"}),decodeURIComponent(e.getResponseHeader("Content-Disposition").split("filename=")[1].split(";")[0]))}))},function(){let e=this.parentElement.parentElement.parentElement.firstElementChild.innerText;B("/capfile/edit","POST",{filepath:e},(function(e){e.data&&(t(2,n=e.data),console.log("editData:",n),N.success("Loading data successfull."))}))},function(){console.log(this.parentElement.parentElement.firstElementChild.innerText);let e=this.parentElement.parentElement.firstElementChild.innerText;S("/datasets/download","POST",{filename:e},(function(e){M(new Blob([e.response],{type:"octet/stream"}),decodeURIComponent(e.getResponseHeader("Content-Disposition").split("filename=")[1].split(";")[0]))}))}]}export default class extends e{constructor(e){super(),a(this,e,Y,J,t,{})}}
