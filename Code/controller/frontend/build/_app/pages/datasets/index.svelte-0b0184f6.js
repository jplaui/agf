import{S as e,i as t,s as l,e as a,t as s,k as n,c,a as r,g as o,d as i,n as h,b as d,N as f,f as p,F as E,G as v,h as w,Q as u,M as g,j as m,L as T,m as b,o as y,v as D,r as x,w as C,z as k,T as B}from"../../chunks/vendor-c052606d.js";import{T as I,x as R,g as V,a as N,n as S}from"../../chunks/requests-ecdf3b79.js";/* empty css                                                       */const{document:O}=B;function F(e,t,l){const a=e.slice();return a[7]=t[l],a[9]=l,a}function H(e,t,l){const a=e.slice();return a[10]=t[l],a[9]=l,a}function U(e,t,l){const a=e.slice();return a[12]=t[l],a[9]=l,a}function A(e){let t,l,v,w,u,m,T,b,y,D,x,C=e[1],k=[];for(let a=0;a<C.length;a+=1)k[a]=L(U(e,C,a));return{c(){t=a("div"),l=a("div"),v=a("table"),w=a("thead"),u=a("tr"),m=a("th"),T=s("Filename"),b=n(),y=a("th"),D=s("Actions"),x=n();for(let e=0;e<k.length;e+=1)k[e].c();this.h()},l(e){t=c(e,"DIV",{class:!0});var a=r(t);l=c(a,"DIV",{class:!0});var s=r(l);v=c(s,"TABLE",{class:!0,style:!0});var n=r(v);w=c(n,"THEAD",{});var d=r(w);u=c(d,"TR",{class:!0});var f=r(u);m=c(f,"TH",{class:!0});var p=r(m);T=o(p,"Filename"),p.forEach(i),b=h(f),y=c(f,"TH",{class:!0});var E=r(y);D=o(E,"Actions"),E.forEach(i),f.forEach(i),d.forEach(i),x=h(n);for(let t=0;t<k.length;t+=1)k[t].l(n);n.forEach(i),s.forEach(i),a.forEach(i),this.h()},h(){d(m,"class","w3-left-align"),d(y,"class","w3-right-align"),d(u,"class","w3-dark-grey"),d(v,"class","w3-table-all"),f(v,"width","100%"),d(l,"class","w3-responsive"),d(t,"class","w3-container")},m(e,a){p(e,t,a),E(t,l),E(l,v),E(v,w),E(w,u),E(u,m),E(m,T),E(u,b),E(u,y),E(y,D),E(v,x);for(let t=0;t<k.length;t+=1)k[t].m(v,null)},p(e,t){if(50&t){let l;for(C=e[1],l=0;l<C.length;l+=1){const a=U(e,C,l);k[l]?k[l].p(a,t):(k[l]=L(a),k[l].c(),k[l].m(v,null))}for(;l<k.length;l+=1)k[l].d(1);k.length=C.length}},d(e){e&&i(t),g(k,e)}}}function L(e){let t,l,f,g,m,T,b,y,D,x,C,k,B,I,R=e[12]+"";return{c(){t=a("tr"),l=a("td"),f=s(R),g=n(),m=a("td"),T=a("div"),b=a("button"),y=s("Edit"),D=n(),x=a("button"),C=s("Download"),k=n(),this.h()},l(e){t=c(e,"TR",{});var a=r(t);l=c(a,"TD",{class:!0});var s=r(l);f=o(s,R),s.forEach(i),g=h(a),m=c(a,"TD",{class:!0});var n=r(m);T=c(n,"DIV",{});var d=r(T);b=c(d,"BUTTON",{index:!0});var p=r(b);y=o(p,"Edit"),p.forEach(i),D=h(d),x=c(d,"BUTTON",{index:!0});var E=r(x);C=o(E,"Download"),E.forEach(i),d.forEach(i),n.forEach(i),k=h(a),a.forEach(i),this.h()},h(){d(l,"class","w3-left-align"),d(b,"index",e[9]),d(x,"index",e[9]),d(m,"class","w3-right-align")},m(a,s){p(a,t,s),E(t,l),E(l,f),E(t,g),E(t,m),E(m,T),E(T,b),E(b,y),E(T,D),E(T,x),E(x,C),E(t,k),B||(I=[v(b,"click",e[5]),v(x,"click",e[4])],B=!0)},p(e,t){2&t&&R!==(R=e[12]+"")&&w(f,R)},d(e){e&&i(t),B=!1,u(I)}}}function G(e){let t,l,v,w,u,m,T,b,y,D,x,C,k=e[2],B=[];for(let a=0;a<k.length;a+=1)B[a]=$(H(e,k,a));return{c(){t=a("div"),l=a("div"),v=a("table"),w=a("thead"),u=a("tr"),m=a("th"),T=s("Content"),b=n(),y=a("th"),D=s("Labels"),x=n(),C=a("tbody");for(let e=0;e<B.length;e+=1)B[e].c();this.h()},l(e){t=c(e,"DIV",{class:!0});var a=r(t);l=c(a,"DIV",{class:!0});var s=r(l);v=c(s,"TABLE",{id:!0,class:!0,style:!0});var n=r(v);w=c(n,"THEAD",{});var d=r(w);u=c(d,"TR",{class:!0});var f=r(u);m=c(f,"TH",{class:!0});var p=r(m);T=o(p,"Content"),p.forEach(i),b=h(f),y=c(f,"TH",{class:!0});var E=r(y);D=o(E,"Labels"),E.forEach(i),f.forEach(i),d.forEach(i),x=h(n),C=c(n,"TBODY",{});var g=r(C);for(let t=0;t<B.length;t+=1)B[t].l(g);g.forEach(i),n.forEach(i),s.forEach(i),a.forEach(i),this.h()},h(){d(m,"class","w3-left-align"),d(y,"class","w3-right-align"),d(u,"class","w3-dark-grey"),d(v,"id","editTable"),d(v,"class","w3-table-all"),f(v,"width","100%"),d(l,"class","w3-responsive"),d(t,"class","w3-container")},m(e,a){p(e,t,a),E(t,l),E(l,v),E(v,w),E(w,u),E(u,m),E(m,T),E(u,b),E(u,y),E(y,D),E(v,x),E(v,C);for(let t=0;t<B.length;t+=1)B[t].m(C,null)},p(e,t){if(4&t){let l;for(k=e[2],l=0;l<k.length;l+=1){const a=H(e,k,l);B[l]?B[l].p(a,t):(B[l]=$(a),B[l].c(),B[l].m(C,null))}for(;l<B.length;l+=1)B[l].d(1);B.length=k.length}},d(e){e&&i(t),g(B,e)}}}function $(e){let t,l,f,v,u,g,m,T,b=JSON.stringify(e[10],null,2)+"";return{c(){t=a("tr"),l=a("td"),f=s(b),v=n(),u=a("td"),g=a("div"),m=a("input"),T=n(),this.h()},l(e){t=c(e,"TR",{});var a=r(t);l=c(a,"TD",{class:!0});var s=r(l);f=o(s,b),s.forEach(i),v=h(a),u=c(a,"TD",{class:!0});var n=r(u);g=c(n,"DIV",{});var d=r(g);m=c(d,"INPUT",{class:!0,type:!0,checked:!0,index:!0}),d.forEach(i),n.forEach(i),T=h(a),a.forEach(i),this.h()},h(){d(l,"class","w3-left-align"),d(m,"class","w3-check"),d(m,"type","checkbox"),m.checked="",d(m,"index",e[9]),d(u,"class","w3-right-align")},m(e,a){p(e,t,a),E(t,l),E(l,f),E(t,v),E(t,u),E(u,g),E(g,m),E(t,T)},p(e,t){4&t&&b!==(b=JSON.stringify(e[10],null,2)+"")&&w(f,b)},d(e){e&&i(t)}}}function j(e){let t,l,v,w,u,m,T,b,y,D,x,C=e[0],k=[];for(let a=0;a<C.length;a+=1)k[a]=P(F(e,C,a));return{c(){t=a("div"),l=a("div"),v=a("table"),w=a("thead"),u=a("tr"),m=a("th"),T=s("Filename"),b=n(),y=a("th"),D=s("Actions"),x=n();for(let e=0;e<k.length;e+=1)k[e].c();this.h()},l(e){t=c(e,"DIV",{class:!0});var a=r(t);l=c(a,"DIV",{class:!0});var s=r(l);v=c(s,"TABLE",{class:!0,style:!0});var n=r(v);w=c(n,"THEAD",{});var d=r(w);u=c(d,"TR",{class:!0});var f=r(u);m=c(f,"TH",{class:!0});var p=r(m);T=o(p,"Filename"),p.forEach(i),b=h(f),y=c(f,"TH",{class:!0});var E=r(y);D=o(E,"Actions"),E.forEach(i),f.forEach(i),d.forEach(i),x=h(n);for(let t=0;t<k.length;t+=1)k[t].l(n);n.forEach(i),s.forEach(i),a.forEach(i),this.h()},h(){d(m,"class","w3-left-align"),d(y,"class","w3-right-align"),d(u,"class","w3-dark-grey"),d(v,"class","w3-table-all"),f(v,"width","100%"),d(l,"class","w3-responsive"),d(t,"class","w3-container")},m(e,a){p(e,t,a),E(t,l),E(l,v),E(v,w),E(w,u),E(u,m),E(m,T),E(u,b),E(u,y),E(y,D),E(v,x);for(let t=0;t<k.length;t+=1)k[t].m(v,null)},p(e,t){if(65&t){let l;for(C=e[0],l=0;l<C.length;l+=1){const a=F(e,C,l);k[l]?k[l].p(a,t):(k[l]=P(a),k[l].c(),k[l].m(v,null))}for(;l<k.length;l+=1)k[l].d(1);k.length=C.length}},d(e){e&&i(t),g(k,e)}}}function P(e){let t,l,f,u,g,m,T,b,y,D,x=e[7]+"";return{c(){t=a("tr"),l=a("td"),f=s(x),u=n(),g=a("td"),m=a("button"),T=s("Download"),b=n(),this.h()},l(e){t=c(e,"TR",{});var a=r(t);l=c(a,"TD",{class:!0});var s=r(l);f=o(s,x),s.forEach(i),u=h(a),g=c(a,"TD",{class:!0});var n=r(g);m=c(n,"BUTTON",{index:!0});var d=r(m);T=o(d,"Download"),d.forEach(i),n.forEach(i),b=h(a),a.forEach(i),this.h()},h(){d(l,"class","w3-left-align"),d(m,"index",e[9]),d(g,"class","w3-right-align")},m(a,s){p(a,t,s),E(t,l),E(l,f),E(t,u),E(t,g),E(g,m),E(m,T),E(t,b),y||(D=v(m,"click",e[6]),y=!0)},p(e,t){1&t&&x!==(x=e[7]+"")&&w(f,x)},d(e){e&&i(t),y=!1,D()}}}function J(e){let t,l,w,g,k,B,R,V,N,S,F,H,U,L,$,P,J,M,_,K,W,X,Z,ee,te,le,ae,se,ne,ce,re,oe,ie,he,de,fe,pe,Ee,ve,we,ue,ge,me,Te,be,ye,De,xe,Ce,ke,Be,Ie,Re,Ve,Ne,Se,Oe,Fe,He,Ue;l=new I({});let Ae=e[1].length>0&&A(e),Le=e[2].length>0&&G(e),Ge=e[0].length>0&&j(e);return{c(){t=n(),m(l.$$.fragment),w=n(),g=a("div"),k=a("h1"),B=a("b"),R=s("Capfiles"),V=n(),Ae&&Ae.c(),N=n(),S=a("hr"),F=n(),H=a("div"),U=a("h1"),L=a("b"),$=s("Edit Capfile Content"),P=s('\n\non click on "Edit" in capfiles table, displays table with capfile content\n\n\n'),J=a("div"),M=a("div"),_=a("button"),K=s("Apply Filter"),W=n(),X=a("div"),Z=a("input"),ee=n(),te=a("br"),le=n(),ae=a("button"),se=s("Toggle All Labels"),ne=n(),ce=a("br"),re=n(),Le&&Le.c(),oe=n(),ie=a("br"),he=n(),de=a("div"),fe=a("div"),pe=a("button"),Ee=s("Convert to CSV and Store to GridFs"),ve=n(),we=a("div"),ue=a("button"),ge=s("Download Table as CSV"),me=n(),Te=a("hr"),be=n(),ye=a("div"),De=a("h1"),xe=a("b"),Ce=s("Gridfs Files (CSVs stored in GridFS)"),ke=n(),Be=a("button"),Ie=s("Reload GrifFS"),Re=n(),Ve=a("hr"),Ne=n(),Ge&&Ge.c(),Se=n(),Oe=a("hr"),this.h()},l(e){T('[data-svelte="svelte-qmgm2y"]',O.head).forEach(i),t=h(e),b(l.$$.fragment,e),w=h(e),g=c(e,"DIV",{class:!0});var a=r(g);k=c(a,"H1",{class:!0,style:!0});var s=r(k);B=c(s,"B",{});var n=r(B);R=o(n,"Capfiles"),n.forEach(i),s.forEach(i),a.forEach(i),V=h(e),Ae&&Ae.l(e),N=h(e),S=c(e,"HR",{class:!0}),F=h(e),H=c(e,"DIV",{class:!0});var d=r(H);U=c(d,"H1",{class:!0,style:!0});var f=r(U);L=c(f,"B",{});var p=r(L);$=o(p,"Edit Capfile Content"),p.forEach(i),f.forEach(i),d.forEach(i),P=o(e,'\n\non click on "Edit" in capfiles table, displays table with capfile content\n\n\n'),J=c(e,"DIV",{class:!0});var E=r(J);M=c(E,"DIV",{class:!0});var v=r(M);_=c(v,"BUTTON",{ref:!0,class:!0});var u=r(_);K=o(u,"Apply Filter"),u.forEach(i),v.forEach(i),W=h(E),X=c(E,"DIV",{class:!0});var m=r(X);Z=c(m,"INPUT",{id:!0,class:!0,name:!0,type:!0,placeholder:!0}),m.forEach(i),E.forEach(i),ee=h(e),te=c(e,"BR",{}),le=h(e),ae=c(e,"BUTTON",{class:!0});var y=r(ae);se=o(y,"Toggle All Labels"),y.forEach(i),ne=h(e),ce=c(e,"BR",{}),re=h(e),Le&&Le.l(e),oe=h(e),ie=c(e,"BR",{}),he=h(e),de=c(e,"DIV",{class:!0});var D=r(de);fe=c(D,"DIV",{class:!0});var x=r(fe);pe=c(x,"BUTTON",{class:!0});var C=r(pe);Ee=o(C,"Convert to CSV and Store to GridFs"),C.forEach(i),x.forEach(i),ve=h(D),we=c(D,"DIV",{class:!0});var I=r(we);ue=c(I,"BUTTON",{class:!0});var A=r(ue);ge=o(A,"Download Table as CSV"),A.forEach(i),I.forEach(i),D.forEach(i),me=h(e),Te=c(e,"HR",{class:!0}),be=h(e),ye=c(e,"DIV",{class:!0});var G=r(ye);De=c(G,"H1",{class:!0,style:!0});var j=r(De);xe=c(j,"B",{});var q=r(xe);Ce=o(q,"Gridfs Files (CSVs stored in GridFS)"),q.forEach(i),j.forEach(i),G.forEach(i),ke=h(e),Be=c(e,"BUTTON",{class:!0});var z=r(Be);Ie=o(z,"Reload GrifFS"),z.forEach(i),Re=h(e),Ve=c(e,"HR",{class:!0}),Ne=h(e),Ge&&Ge.l(e),Se=h(e),Oe=c(e,"HR",{class:!0}),this.h()},h(){O.title="Database",d(k,"class","w3-text-yellow"),f(k,"text-shadow","1px 1px 0 #444"),d(g,"class","w3-panel w3-blue"),d(S,"class","svelte-lxonyp"),d(U,"class","w3-text-yellow"),f(U,"text-shadow","1px 1px 0 #444"),d(H,"class","w3-panel w3-blue"),d(_,"ref","filterTable"),d(_,"class","w3-col w3-input w3-border"),d(M,"class","w3-third"),d(Z,"id","filterTable"),d(Z,"class","w3-input w3-border"),d(Z,"name","name"),d(Z,"type","text"),d(Z,"placeholder","Filter String"),d(X,"class","w3-rest"),d(J,"class","w3-row w3-section"),d(ae,"class","w3-col w3-input w3-border"),d(pe,"class","w3-col w3-input w3-border"),d(fe,"class","w3-half"),d(ue,"class","w3-col w3-input w3-border"),d(we,"class","w3-half"),d(de,"class","w3-row w3-section"),d(Te,"class","svelte-lxonyp"),d(De,"class","w3-text-yellow"),f(De,"text-shadow","1px 1px 0 #444"),d(ye,"class","w3-panel w3-blue"),d(Be,"class","w3-col w3-input w3-border"),d(Ve,"class","svelte-lxonyp"),d(Oe,"class","svelte-lxonyp")},m(a,s){p(a,t,s),y(l,a,s),p(a,w,s),p(a,g,s),E(g,k),E(k,B),E(B,R),p(a,V,s),Ae&&Ae.m(a,s),p(a,N,s),p(a,S,s),p(a,F,s),p(a,H,s),E(H,U),E(U,L),E(L,$),p(a,P,s),p(a,J,s),E(J,M),E(M,_),E(_,K),E(J,W),E(J,X),E(X,Z),p(a,ee,s),p(a,te,s),p(a,le,s),p(a,ae,s),E(ae,se),p(a,ne,s),p(a,ce,s),p(a,re,s),Le&&Le.m(a,s),p(a,oe,s),p(a,ie,s),p(a,he,s),p(a,de,s),E(de,fe),E(fe,pe),E(pe,Ee),E(de,ve),E(de,we),E(we,ue),E(ue,ge),p(a,me,s),p(a,Te,s),p(a,be,s),p(a,ye,s),E(ye,De),E(De,xe),E(xe,Ce),p(a,ke,s),p(a,Be,s),E(Be,Ie),p(a,Re,s),p(a,Ve,s),p(a,Ne,s),Ge&&Ge.m(a,s),p(a,Se,s),p(a,Oe,s),Fe=!0,He||(Ue=[v(_,"click",Q),v(ae,"click",Y),v(pe,"click",q),v(ue,"click",z),v(Be,"click",e[3])],He=!0)},p(e,[t]){e[1].length>0?Ae?Ae.p(e,t):(Ae=A(e),Ae.c(),Ae.m(N.parentNode,N)):Ae&&(Ae.d(1),Ae=null),e[2].length>0?Le?Le.p(e,t):(Le=G(e),Le.c(),Le.m(oe.parentNode,oe)):Le&&(Le.d(1),Le=null),e[0].length>0?Ge?Ge.p(e,t):(Ge=j(e),Ge.c(),Ge.m(Se.parentNode,Se)):Ge&&(Ge.d(1),Ge=null)},i(e){Fe||(D(l.$$.fragment,e),Fe=!0)},o(e){x(l.$$.fragment,e),Fe=!1},d(e){e&&i(t),C(l,e),e&&i(w),e&&i(g),e&&i(V),Ae&&Ae.d(e),e&&i(N),e&&i(S),e&&i(F),e&&i(H),e&&i(P),e&&i(J),e&&i(ee),e&&i(te),e&&i(le),e&&i(ae),e&&i(ne),e&&i(ce),e&&i(re),Le&&Le.d(e),e&&i(oe),e&&i(ie),e&&i(he),e&&i(de),e&&i(me),e&&i(Te),e&&i(be),e&&i(ye),e&&i(ke),e&&i(Be),e&&i(Re),e&&i(Ve),e&&i(Ne),Ge&&Ge.d(e),e&&i(Se),e&&i(Oe),He=!1,u(Ue)}}}function q(){}function z(){}function M(e,t){let l=document.createElement("a");document.body.appendChild(l),l.style="display: none";let a=window.URL.createObjectURL(e);l.href=a,l.download=t,l.click(),window.URL.revokeObjectURL(a)}function Q(){let e=document.getElementById("editTable"),t=this.parentElement.nextElementSibling.firstElementChild.value,l=e.children[1].childNodes;for(let a=0;a<l.length;a++){l[a].style.display="none";let e=l[a].getElementsByTagName("td")[0];e&&e.innerText.toUpperCase().indexOf(t)>-1&&(l[a].style.display="")}}function Y(){let e=document.getElementById("editTable").children[1].childNodes;for(let t=0;t<e.length;t++)if("none"!=e[t].style.display){let l=e[t].getElementsByTagName("td")[1].firstElementChild.firstElementChild;l.checked=!l.checked}}function _(e,t,l){let a=[],s=[],n=[];function c(){R("/datasets/all",(function(e){let t=JSON.parse(e.response);t.data&&(S.success("Found data."),l(0,a=t.data),console.log("gridfsData",a))}))}return k((async()=>{c(),R("/capfile/all",(function(e){let t=JSON.parse(e.response);t.data&&(S.success("Found data."),l(1,s=t.data),console.log("capfileData",s))}))})),[a,s,n,c,function(){let e=this.parentElement.parentElement.parentElement.firstElementChild.innerText;V("/capfile/download","POST",{filepath:e},(function(e){M(new Blob([e.response],{type:"octet/stream"}),decodeURIComponent(e.getResponseHeader("Content-Disposition").split("filename=")[1].split(";")[0]))}))},function(){let e=this.parentElement.parentElement.parentElement.firstElementChild.innerText;N("/capfile/edit","POST",{filepath:e},(function(e){e.data&&(l(2,n=e.data),console.log("editData:",n),S.success("Loading data successfull."))}))},function(){console.log(this.parentElement.parentElement.firstElementChild.innerText);let e=this.parentElement.parentElement.firstElementChild.innerText;V("/datasets/download","POST",{filename:e},(function(e){M(new Blob([e.response],{type:"octet/stream"}),decodeURIComponent(e.getResponseHeader("Content-Disposition").split("filename=")[1].split(";")[0]))}))}]}export default class extends e{constructor(e){super(),t(this,e,_,J,l,{})}}