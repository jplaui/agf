import{S as e,i as t,s as a,e as l,t as s,k as n,c,a as r,g as o,d as i,n as d,b as h,f,F as u,G as p,h as m,H as v,l as g,N as w,Q as E,M as T,j as y,L as b,m as D,o as x,v as I,r as B,w as k,R as V,z as C,T as N,a4 as S}from"../../chunks/vendor-c052606d.js";import{T as O,x as R,g as H,a as U,R as F,n as A}from"../../chunks/requests-531e903b.js";/* empty css                                                       */import{a as $,b as P}from"../../chunks/store-ce76cd4a.js";function j(e){let t,a,g,w,E,T,y,b,D;return{c(){t=l("div"),a=l("span"),g=s("×"),w=n(),E=l("div"),T=l("h1"),y=s(e[0]),this.h()},l(l){t=c(l,"DIV",{id:!0,class:!0});var s=r(t);a=c(s,"SPAN",{class:!0});var n=r(a);g=o(n,"×"),n.forEach(i),w=d(s),E=c(s,"DIV",{class:!0});var h=r(E);T=c(h,"H1",{id:!0,class:!0});var f=r(T);y=o(f,e[0]),f.forEach(i),h.forEach(i),s.forEach(i),this.h()},h(){h(a,"class","close svelte-1p4qmwg"),h(T,"id","message"),h(T,"class","pulsate svelte-1p4qmwg"),h(E,"class","w3-container w3-center"),h(t,"id","myModal"),h(t,"class","modal svelte-1p4qmwg")},m(e,l){f(e,t,l),u(t,a),u(a,g),u(t,w),u(t,E),u(E,T),u(T,y),b||(D=p(a,"click",L),b=!0)},p(e,[t]){1&t&&m(y,e[0])},i:v,o:v,d(e){e&&i(t),b=!1,D()}}}function L(){document.getElementById("myModal").style.display="none"}function M(){document.getElementById("myModal").style.display="none"}function q(e,t,a){let{message:l=""}=t;return e.$$set=e=>{"message"in e&&a(0,l=e.message)},[l,function(e){document.getElementById("myModal").style.display="block",a(0,l=e)},M]}class G extends e{constructor(e){super(),t(this,e,q,j,a,{message:0,changeBanner:1,closeBanner:2})}get changeBanner(){return this.$$.ctx[1]}get closeBanner(){return M}}const{document:J}=N;function z(e,t,a){const l=e.slice();return l[21]=t[a],l[23]=a,l}function _(e,t,a){const l=e.slice();return l[24]=t[a],l[23]=a,l}function Z(e,t,a){const l=e.slice();return l[24]=t[a],l[23]=a,l}function Q(e,t,a){const l=e.slice();return l[21]=t[a],l[23]=a,l}function Y(e,t,a){const l=e.slice();return l[24]=t[a],l[23]=a,l}function K(e,t,a){const l=e.slice();return l[24]=t[a],l[23]=a,l}function W(e,t,a){const l=e.slice();return l[30]=t[a],l[23]=a,l}function X(e,t,a){const l=e.slice();return l[32]=t[a],l[23]=a,l}function ee(e,t,a){const l=e.slice();return l[34]=t[a],l[23]=a,l}function te(e){let t,a,m,v,T,y,b,D,x,I,B,k,V,C,N,S,O,R,H,U,F,A,$,P,j,L,M,q,G,J,z,_,Z,Q,Y,K,W,X,ee,te,le,ne,re,oe,ie,de,he,fe,ue,pe,me,ve,ge,we,ye,be,De,xe,Ie,Be=e[3].length>0&&ae(e),ke=e[4].length>0&&se(e),Ve=e[2].length>0&&ce(e);return{c(){t=l("div"),a=l("h1"),m=l("b"),v=s("Capfiles"),T=n(),Be&&Be.c(),y=n(),b=l("hr"),D=n(),x=l("div"),I=l("h1"),B=l("b"),k=s("Edit Capfile Content"),V=s('\n\n  on click on "Edit" in capfiles table, displays table with capfile content\n\n\n  '),C=l("div"),N=l("div"),S=l("button"),O=s("Apply Filter"),R=n(),H=l("div"),U=l("input"),F=n(),A=l("br"),$=n(),P=l("div"),j=l("button"),L=s("Toggle All Labels"),M=n(),q=l("br"),G=n(),ke&&ke.c(),J=n(),z=l("br"),_=n(),Z=l("div"),Q=l("div"),Y=l("input"),K=n(),W=l("div"),X=l("button"),ee=s("Convert to CSV and Store to GridFs"),te=n(),le=l("div"),ne=l("button"),re=s("Download Table as CSV"),oe=n(),ie=l("hr"),de=n(),he=l("div"),fe=l("h1"),ue=l("b"),pe=s("Gridfs Files (CSVs stored in GridFS)"),me=n(),ve=l("button"),ge=s("Reload GrifFS"),we=n(),ye=l("hr"),be=n(),Ve&&Ve.c(),De=g(),this.h()},l(e){t=c(e,"DIV",{class:!0});var l=r(t);a=c(l,"H1",{class:!0,style:!0});var s=r(a);m=c(s,"B",{});var n=r(m);v=o(n,"Capfiles"),n.forEach(i),s.forEach(i),l.forEach(i),T=d(e),Be&&Be.l(e),y=d(e),b=c(e,"HR",{class:!0}),D=d(e),x=c(e,"DIV",{class:!0});var h=r(x);I=c(h,"H1",{class:!0,style:!0});var f=r(I);B=c(f,"B",{});var u=r(B);k=o(u,"Edit Capfile Content"),u.forEach(i),f.forEach(i),h.forEach(i),V=o(e,'\n\n  on click on "Edit" in capfiles table, displays table with capfile content\n\n\n  '),C=c(e,"DIV",{class:!0});var p=r(C);N=c(p,"DIV",{class:!0});var w=r(N);S=c(w,"BUTTON",{ref:!0,class:!0});var E=r(S);O=o(E,"Apply Filter"),E.forEach(i),w.forEach(i),R=d(p),H=c(p,"DIV",{class:!0});var ae=r(H);U=c(ae,"INPUT",{id:!0,class:!0,name:!0,type:!0,placeholder:!0}),ae.forEach(i),p.forEach(i),F=d(e),A=c(e,"BR",{}),$=d(e),P=c(e,"DIV",{class:!0});var se=r(P);j=c(se,"BUTTON",{class:!0});var ce=r(j);L=o(ce,"Toggle All Labels"),ce.forEach(i),se.forEach(i),M=d(e),q=c(e,"BR",{}),G=d(e),ke&&ke.l(e),J=d(e),z=c(e,"BR",{}),_=d(e),Z=c(e,"DIV",{class:!0});var Ee=r(Z);Q=c(Ee,"DIV",{class:!0});var Te=r(Q);Y=c(Te,"INPUT",{id:!0,class:!0,name:!0,type:!0,placeholder:!0}),Te.forEach(i),K=d(Ee),W=c(Ee,"DIV",{class:!0});var xe=r(W);X=c(xe,"BUTTON",{class:!0});var Ie=r(X);ee=o(Ie,"Convert to CSV and Store to GridFs"),Ie.forEach(i),xe.forEach(i),te=d(Ee),le=c(Ee,"DIV",{class:!0});var Ce=r(le);ne=c(Ce,"BUTTON",{class:!0});var Ne=r(ne);re=o(Ne,"Download Table as CSV"),Ne.forEach(i),Ce.forEach(i),Ee.forEach(i),oe=d(e),ie=c(e,"HR",{class:!0}),de=d(e),he=c(e,"DIV",{class:!0});var Se=r(he);fe=c(Se,"H1",{class:!0,style:!0});var Oe=r(fe);ue=c(Oe,"B",{});var Re=r(ue);pe=o(Re,"Gridfs Files (CSVs stored in GridFS)"),Re.forEach(i),Oe.forEach(i),Se.forEach(i),me=d(e),ve=c(e,"BUTTON",{class:!0});var He=r(ve);ge=o(He,"Reload GrifFS"),He.forEach(i),we=d(e),ye=c(e,"HR",{class:!0}),be=d(e),Ve&&Ve.l(e),De=g(),this.h()},h(){h(a,"class","w3-text-yellow"),w(a,"text-shadow","1px 1px 0 #444"),h(t,"class","w3-panel w3-blue"),h(b,"class","svelte-129maq9"),h(I,"class","w3-text-yellow"),w(I,"text-shadow","1px 1px 0 #444"),h(x,"class","w3-panel w3-blue"),h(S,"ref","filterTable"),h(S,"class","w3-col w3-input w3-border"),h(N,"class","w3-third"),h(U,"id","filterTable"),h(U,"class","w3-input w3-border"),h(U,"name","name"),h(U,"type","text"),h(U,"placeholder","Filter String"),h(H,"class","w3-rest"),h(C,"class","w3-row w3-section"),h(j,"class","w3-col w3-input w3-border"),h(P,"class","w3-row w3-section"),h(Y,"id","filenameCSV"),h(Y,"class","w3-input w3-border"),h(Y,"name","filename"),h(Y,"type","text"),h(Y,"placeholder","Filename"),h(Q,"class","w3-third"),h(X,"class","w3-col w3-input w3-border"),h(W,"class","w3-third"),h(ne,"class","w3-col w3-input w3-border"),h(le,"class","w3-rest"),h(Z,"class","w3-row w3-section"),h(ie,"class","svelte-129maq9"),h(fe,"class","w3-text-yellow"),w(fe,"text-shadow","1px 1px 0 #444"),h(he,"class","w3-panel w3-blue"),h(ve,"class","w3-col w3-input w3-border"),h(ye,"class","svelte-129maq9")},m(l,s){f(l,t,s),u(t,a),u(a,m),u(m,v),f(l,T,s),Be&&Be.m(l,s),f(l,y,s),f(l,b,s),f(l,D,s),f(l,x,s),u(x,I),u(I,B),u(B,k),f(l,V,s),f(l,C,s),u(C,N),u(N,S),u(S,O),u(C,R),u(C,H),u(H,U),f(l,F,s),f(l,A,s),f(l,$,s),f(l,P,s),u(P,j),u(j,L),f(l,M,s),f(l,q,s),f(l,G,s),ke&&ke.m(l,s),f(l,J,s),f(l,z,s),f(l,_,s),f(l,Z,s),u(Z,Q),u(Q,Y),u(Z,K),u(Z,W),u(W,X),u(X,ee),u(Z,te),u(Z,le),u(le,ne),u(ne,re),f(l,oe,s),f(l,ie,s),f(l,de,s),f(l,he,s),u(he,fe),u(fe,ue),u(ue,pe),f(l,me,s),f(l,ve,s),u(ve,ge),f(l,we,s),f(l,ye,s),f(l,be,s),Ve&&Ve.m(l,s),f(l,De,s),xe||(Ie=[p(S,"click",Ee),p(j,"click",Te),p(X,"click",e[10]),p(ne,"click",e[11]),p(ve,"click",e[7])],xe=!0)},p(e,t){e[3].length>0?Be?Be.p(e,t):(Be=ae(e),Be.c(),Be.m(y.parentNode,y)):Be&&(Be.d(1),Be=null),e[4].length>0?ke?ke.p(e,t):(ke=se(e),ke.c(),ke.m(J.parentNode,J)):ke&&(ke.d(1),ke=null),e[2].length>0?Ve?Ve.p(e,t):(Ve=ce(e),Ve.c(),Ve.m(De.parentNode,De)):Ve&&(Ve.d(1),Ve=null)},d(e){e&&i(t),e&&i(T),Be&&Be.d(e),e&&i(y),e&&i(b),e&&i(D),e&&i(x),e&&i(V),e&&i(C),e&&i(F),e&&i(A),e&&i($),e&&i(P),e&&i(M),e&&i(q),e&&i(G),ke&&ke.d(e),e&&i(J),e&&i(z),e&&i(_),e&&i(Z),e&&i(oe),e&&i(ie),e&&i(de),e&&i(he),e&&i(me),e&&i(ve),e&&i(we),e&&i(ye),e&&i(be),Ve&&Ve.d(e),e&&i(De),xe=!1,E(Ie)}}}function ae(e){let t,a,p,m,v,g,E,y,b,D,x,I=e[3],B=[];for(let l=0;l<I.length;l+=1)B[l]=le(ee(e,I,l));return{c(){t=l("div"),a=l("div"),p=l("table"),m=l("thead"),v=l("tr"),g=l("th"),E=s("Filename"),y=n(),b=l("th"),D=s("Actions"),x=n();for(let e=0;e<B.length;e+=1)B[e].c();this.h()},l(e){t=c(e,"DIV",{class:!0});var l=r(t);a=c(l,"DIV",{class:!0});var s=r(a);p=c(s,"TABLE",{class:!0,style:!0});var n=r(p);m=c(n,"THEAD",{});var h=r(m);v=c(h,"TR",{class:!0});var f=r(v);g=c(f,"TH",{class:!0});var u=r(g);E=o(u,"Filename"),u.forEach(i),y=d(f),b=c(f,"TH",{class:!0});var w=r(b);D=o(w,"Actions"),w.forEach(i),f.forEach(i),h.forEach(i),x=d(n);for(let t=0;t<B.length;t+=1)B[t].l(n);n.forEach(i),s.forEach(i),l.forEach(i),this.h()},h(){h(g,"class","w3-left-align"),h(b,"class","w3-right-align"),h(v,"class","w3-dark-grey"),h(p,"class","w3-table-all"),w(p,"width","100%"),h(a,"class","w3-responsive"),h(t,"class","w3-container")},m(e,l){f(e,t,l),u(t,a),u(a,p),u(p,m),u(m,v),u(v,g),u(g,E),u(v,y),u(v,b),u(b,D),u(p,x);for(let t=0;t<B.length;t+=1)B[t].m(p,null)},p(e,t){if(776&t[0]){let a;for(I=e[3],a=0;a<I.length;a+=1){const l=ee(e,I,a);B[a]?B[a].p(l,t):(B[a]=le(l),B[a].c(),B[a].m(p,null))}for(;a<B.length;a+=1)B[a].d(1);B.length=I.length}},d(e){e&&i(t),T(B,e)}}}function le(e){let t,a,v,g,w,T,y,b,D,x,I,B,k,V,C=e[34]+"";return{c(){t=l("tr"),a=l("td"),v=s(C),g=n(),w=l("td"),T=l("div"),y=l("button"),b=s("Edit"),D=n(),x=l("button"),I=s("Download"),B=n(),this.h()},l(e){t=c(e,"TR",{});var l=r(t);a=c(l,"TD",{class:!0});var s=r(a);v=o(s,C),s.forEach(i),g=d(l),w=c(l,"TD",{class:!0});var n=r(w);T=c(n,"DIV",{});var h=r(T);y=c(h,"BUTTON",{index:!0});var f=r(y);b=o(f,"Edit"),f.forEach(i),D=d(h),x=c(h,"BUTTON",{index:!0});var u=r(x);I=o(u,"Download"),u.forEach(i),h.forEach(i),n.forEach(i),B=d(l),l.forEach(i),this.h()},h(){h(a,"class","w3-left-align"),h(y,"index",e[23]),h(x,"index",e[23]),h(w,"class","w3-right-align")},m(l,s){f(l,t,s),u(t,a),u(a,v),u(t,g),u(t,w),u(w,T),u(T,y),u(y,b),u(T,D),u(T,x),u(x,I),u(t,B),k||(V=[p(y,"click",e[9]),p(x,"click",e[8])],k=!0)},p(e,t){8&t[0]&&C!==(C=e[34]+"")&&m(v,C)},d(e){e&&i(t),k=!1,E(V)}}}function se(e){let t,a,p,m,v,g,E,y,b,D,x,I,B=e[4],k=[];for(let l=0;l<B.length;l+=1)k[l]=ne(X(e,B,l));return{c(){t=l("div"),a=l("div"),p=l("table"),m=l("thead"),v=l("tr"),g=l("th"),E=s("Content"),y=n(),b=l("th"),D=s("Labels"),x=n(),I=l("tbody");for(let e=0;e<k.length;e+=1)k[e].c();this.h()},l(e){t=c(e,"DIV",{class:!0});var l=r(t);a=c(l,"DIV",{class:!0});var s=r(a);p=c(s,"TABLE",{id:!0,class:!0,style:!0});var n=r(p);m=c(n,"THEAD",{});var h=r(m);v=c(h,"TR",{class:!0});var f=r(v);g=c(f,"TH",{class:!0});var u=r(g);E=o(u,"Content"),u.forEach(i),y=d(f),b=c(f,"TH",{class:!0});var w=r(b);D=o(w,"Labels"),w.forEach(i),f.forEach(i),h.forEach(i),x=d(n),I=c(n,"TBODY",{});var T=r(I);for(let t=0;t<k.length;t+=1)k[t].l(T);T.forEach(i),n.forEach(i),s.forEach(i),l.forEach(i),this.h()},h(){h(g,"class","w3-left-align"),h(b,"class","w3-right-align"),h(v,"class","w3-dark-grey"),h(p,"id","editTable"),h(p,"class","w3-table-all"),w(p,"width","100%"),h(a,"class","w3-responsive"),h(t,"class","w3-container")},m(e,l){f(e,t,l),u(t,a),u(a,p),u(p,m),u(m,v),u(v,g),u(g,E),u(v,y),u(v,b),u(b,D),u(p,x),u(p,I);for(let t=0;t<k.length;t+=1)k[t].m(I,null)},p(e,t){if(16&t[0]){let a;for(B=e[4],a=0;a<B.length;a+=1){const l=X(e,B,a);k[a]?k[a].p(l,t):(k[a]=ne(l),k[a].c(),k[a].m(I,null))}for(;a<k.length;a+=1)k[a].d(1);k.length=B.length}},d(e){e&&i(t),T(k,e)}}}function ne(e){let t,a,p,v,g,w,E,T,y=JSON.stringify(e[32],null,2)+"";return{c(){t=l("tr"),a=l("td"),p=s(y),v=n(),g=l("td"),w=l("div"),E=l("input"),T=n(),this.h()},l(e){t=c(e,"TR",{});var l=r(t);a=c(l,"TD",{class:!0});var s=r(a);p=o(s,y),s.forEach(i),v=d(l),g=c(l,"TD",{class:!0});var n=r(g);w=c(n,"DIV",{});var h=r(w);E=c(h,"INPUT",{class:!0,type:!0,checked:!0,index:!0}),h.forEach(i),n.forEach(i),T=d(l),l.forEach(i),this.h()},h(){h(a,"class","w3-left-align"),h(E,"class","w3-check"),h(E,"type","checkbox"),E.checked="",h(E,"index",e[23]),h(g,"class","w3-right-align")},m(e,l){f(e,t,l),u(t,a),u(a,p),u(t,v),u(t,g),u(g,w),u(w,E),u(t,T)},p(e,t){16&t[0]&&y!==(y=JSON.stringify(e[32],null,2)+"")&&m(p,y)},d(e){e&&i(t)}}}function ce(e){let t,a,p,m,v,g,E,y,b,D,x,I=e[2],B=[];for(let l=0;l<I.length;l+=1)B[l]=re(W(e,I,l));return{c(){t=l("div"),a=l("div"),p=l("table"),m=l("thead"),v=l("tr"),g=l("th"),E=s("Filename"),y=n(),b=l("th"),D=s("Actions"),x=n();for(let e=0;e<B.length;e+=1)B[e].c();this.h()},l(e){t=c(e,"DIV",{class:!0});var l=r(t);a=c(l,"DIV",{class:!0});var s=r(a);p=c(s,"TABLE",{class:!0,style:!0});var n=r(p);m=c(n,"THEAD",{});var h=r(m);v=c(h,"TR",{class:!0});var f=r(v);g=c(f,"TH",{class:!0});var u=r(g);E=o(u,"Filename"),u.forEach(i),y=d(f),b=c(f,"TH",{class:!0});var w=r(b);D=o(w,"Actions"),w.forEach(i),f.forEach(i),h.forEach(i),x=d(n);for(let t=0;t<B.length;t+=1)B[t].l(n);n.forEach(i),s.forEach(i),l.forEach(i),this.h()},h(){h(g,"class","w3-left-align"),h(b,"class","w3-right-align"),h(v,"class","w3-dark-grey"),h(p,"class","w3-table-all"),w(p,"width","100%"),h(a,"class","w3-responsive"),h(t,"class","w3-container")},m(e,l){f(e,t,l),u(t,a),u(a,p),u(p,m),u(m,v),u(v,g),u(g,E),u(v,y),u(v,b),u(b,D),u(p,x);for(let t=0;t<B.length;t+=1)B[t].m(p,null)},p(e,t){if(12292&t[0]){let a;for(I=e[2],a=0;a<I.length;a+=1){const l=W(e,I,a);B[a]?B[a].p(l,t):(B[a]=re(l),B[a].c(),B[a].m(p,null))}for(;a<B.length;a+=1)B[a].d(1);B.length=I.length}},d(e){e&&i(t),T(B,e)}}}function re(e){let t,a,v,g,w,T,y,b,D,x,I,B,k,V,C=e[30]+"";return{c(){t=l("tr"),a=l("td"),v=s(C),g=n(),w=l("td"),T=l("div"),y=l("button"),b=s("Delete"),D=n(),x=l("button"),I=s("Download"),B=n(),this.h()},l(e){t=c(e,"TR",{});var l=r(t);a=c(l,"TD",{class:!0});var s=r(a);v=o(s,C),s.forEach(i),g=d(l),w=c(l,"TD",{class:!0});var n=r(w);T=c(n,"DIV",{});var h=r(T);y=c(h,"BUTTON",{index:!0});var f=r(y);b=o(f,"Delete"),f.forEach(i),D=d(h),x=c(h,"BUTTON",{index:!0});var u=r(x);I=o(u,"Download"),u.forEach(i),h.forEach(i),n.forEach(i),B=d(l),l.forEach(i),this.h()},h(){h(a,"class","w3-left-align"),h(y,"index",e[23]),h(x,"index",e[23]),h(w,"class","w3-right-align")},m(l,s){f(l,t,s),u(t,a),u(a,v),u(t,g),u(t,w),u(w,T),u(T,y),u(y,b),u(T,D),u(T,x),u(x,I),u(t,B),k||(V=[p(y,"click",e[12]),p(x,"click",e[13])],k=!0)},p(e,t){4&t[0]&&C!==(C=e[30]+"")&&m(v,C)},d(e){e&&i(t),k=!1,E(V)}}}function oe(e){let t,a,m,v,g,T,y,b,D,x,I,B,k,V,C,N,S,O,R,H,U,F,A,$,P,j,L,M,q,G,J,z,_,Z,Q,Y,K,W,X,ee,te,ae,le=e[5].length>0&&ie(e),se=e[6].length>0&&ue(e);return{c(){t=l("div"),a=l("h1"),m=l("b"),v=s("Static Attack Datasets"),g=n(),le&&le.c(),T=n(),y=l("div"),b=l("div"),D=l("input"),x=n(),I=l("div"),B=l("button"),k=s("Train Model on Dataset"),V=n(),C=l("div"),N=l("div"),S=l("input"),O=n(),R=l("div"),H=l("button"),U=s("Export Folder (.zip)"),F=n(),A=l("hr"),$=n(),P=l("div"),j=l("h1"),L=l("b"),M=s("Trained Models"),q=n(),se&&se.c(),G=n(),J=l("div"),z=l("div"),_=l("input"),Z=n(),Q=l("div"),Y=l("input"),K=n(),W=l("div"),X=l("button"),ee=s("Run Detection"),this.h()},l(e){t=c(e,"DIV",{class:!0});var l=r(t);a=c(l,"H1",{class:!0,style:!0});var s=r(a);m=c(s,"B",{});var n=r(m);v=o(n,"Static Attack Datasets"),n.forEach(i),s.forEach(i),l.forEach(i),g=d(e),le&&le.l(e),T=d(e),y=c(e,"DIV",{class:!0});var h=r(y);b=c(h,"DIV",{class:!0});var f=r(b);D=c(f,"INPUT",{id:!0,class:!0,name:!0,type:!0,placeholder:!0}),f.forEach(i),x=d(h),I=c(h,"DIV",{class:!0});var u=r(I);B=c(u,"BUTTON",{class:!0});var p=r(B);k=o(p,"Train Model on Dataset"),p.forEach(i),u.forEach(i),h.forEach(i),V=d(e),C=c(e,"DIV",{class:!0});var w=r(C);N=c(w,"DIV",{class:!0});var E=r(N);S=c(E,"INPUT",{id:!0,class:!0,name:!0,type:!0,placeholder:!0}),E.forEach(i),O=d(w),R=c(w,"DIV",{class:!0});var te=r(R);H=c(te,"BUTTON",{class:!0});var ae=r(H);U=o(ae,"Export Folder (.zip)"),ae.forEach(i),te.forEach(i),w.forEach(i),F=d(e),A=c(e,"HR",{class:!0}),$=d(e),P=c(e,"DIV",{class:!0});var ne=r(P);j=c(ne,"H1",{class:!0,style:!0});var ce=r(j);L=c(ce,"B",{});var re=r(L);M=o(re,"Trained Models"),re.forEach(i),ce.forEach(i),ne.forEach(i),q=d(e),se&&se.l(e),G=d(e),J=c(e,"DIV",{class:!0});var oe=r(J);z=c(oe,"DIV",{class:!0});var ie=r(z);_=c(ie,"INPUT",{id:!0,class:!0,name:!0,type:!0,placeholder:!0}),ie.forEach(i),Z=d(oe),Q=c(oe,"DIV",{class:!0});var de=r(Q);Y=c(de,"INPUT",{id:!0,class:!0,name:!0,type:!0,placeholder:!0}),de.forEach(i),K=d(oe),W=c(oe,"DIV",{class:!0});var he=r(W);X=c(he,"BUTTON",{class:!0});var fe=r(X);ee=o(fe,"Run Detection"),fe.forEach(i),he.forEach(i),oe.forEach(i),this.h()},h(){h(a,"class","w3-text-yellow"),w(a,"text-shadow","1px 1px 0 #444"),h(t,"class","w3-panel w3-blue"),h(D,"id","staticDatasetToTrain"),h(D,"class","w3-input w3-border"),h(D,"name","dataset"),h(D,"type","text"),h(D,"placeholder","Dataset"),h(b,"class","w3-half"),h(B,"class","w3-col w3-input w3-border"),h(I,"class","w3-rest"),h(y,"class","w3-row w3-section"),h(S,"id","downloadZipFoldername"),h(S,"class","w3-input w3-border"),h(S,"name","dataset"),h(S,"type","text"),h(S,"placeholder","Foldername"),h(N,"class","w3-half"),h(H,"class","w3-col w3-input w3-border"),h(R,"class","w3-rest"),h(C,"class","w3-row w3-section"),h(A,"class","svelte-129maq9"),h(j,"class","w3-text-yellow"),w(j,"text-shadow","1px 1px 0 #444"),h(P,"class","w3-panel w3-blue"),h(_,"id","staticTrainedDataset"),h(_,"class","w3-input w3-border"),h(_,"name","dataset"),h(_,"type","text"),h(_,"placeholder","Dataset"),h(z,"class","w3-third"),h(Y,"id","staticTrainedModel"),h(Y,"class","w3-input w3-border"),h(Y,"name","model"),h(Y,"type","text"),h(Y,"placeholder","Model"),h(Q,"class","w3-third"),h(X,"class","w3-col w3-input w3-border"),h(W,"class","w3-rest"),h(J,"class","w3-row w3-section")},m(l,s){f(l,t,s),u(t,a),u(a,m),u(m,v),f(l,g,s),le&&le.m(l,s),f(l,T,s),f(l,y,s),u(y,b),u(b,D),u(y,x),u(y,I),u(I,B),u(B,k),f(l,V,s),f(l,C,s),u(C,N),u(N,S),u(C,O),u(C,R),u(R,H),u(H,U),f(l,F,s),f(l,A,s),f(l,$,s),f(l,P,s),u(P,j),u(j,L),u(L,M),f(l,q,s),se&&se.m(l,s),f(l,G,s),f(l,J,s),u(J,z),u(z,_),u(J,Z),u(J,Q),u(Q,Y),u(J,K),u(J,W),u(W,X),u(X,ee),te||(ae=[p(B,"click",e[14]),p(H,"click",De),p(X,"click",e[15])],te=!0)},p(e,t){e[5].length>0?le?le.p(e,t):(le=ie(e),le.c(),le.m(T.parentNode,T)):le&&(le.d(1),le=null),e[6].length>0?se?se.p(e,t):(se=ue(e),se.c(),se.m(G.parentNode,G)):se&&(se.d(1),se=null)},d(e){e&&i(t),e&&i(g),le&&le.d(e),e&&i(T),e&&i(y),e&&i(V),e&&i(C),e&&i(F),e&&i(A),e&&i($),e&&i(P),e&&i(q),se&&se.d(e),e&&i(G),e&&i(J),te=!1,E(ae)}}}function ie(e){let t,a,s,o,p,m,v=Object.keys(e[5][0]),g=[];for(let l=0;l<v.length;l+=1)g[l]=de(K(e,v,l));let E=e[5],y=[];for(let l=0;l<E.length;l+=1)y[l]=fe(Q(e,E,l));return{c(){t=l("div"),a=l("div"),s=l("table"),o=l("thead"),p=l("tr");for(let e=0;e<g.length;e+=1)g[e].c();m=n();for(let e=0;e<y.length;e+=1)y[e].c();this.h()},l(e){t=c(e,"DIV",{class:!0});var l=r(t);a=c(l,"DIV",{class:!0});var n=r(a);s=c(n,"TABLE",{class:!0,style:!0});var h=r(s);o=c(h,"THEAD",{});var f=r(o);p=c(f,"TR",{class:!0});var u=r(p);for(let t=0;t<g.length;t+=1)g[t].l(u);u.forEach(i),f.forEach(i),m=d(h);for(let t=0;t<y.length;t+=1)y[t].l(h);h.forEach(i),n.forEach(i),l.forEach(i),this.h()},h(){h(p,"class","w3-dark-grey"),h(s,"class","w3-table-all"),w(s,"width","100%"),h(a,"class","w3-responsive"),h(t,"class","w3-container")},m(e,l){f(e,t,l),u(t,a),u(a,s),u(s,o),u(o,p);for(let t=0;t<g.length;t+=1)g[t].m(p,null);u(s,m);for(let t=0;t<y.length;t+=1)y[t].m(s,null)},p(e,t){if(32&t[0]){let a;for(v=Object.keys(e[5][0]),a=0;a<v.length;a+=1){const l=K(e,v,a);g[a]?g[a].p(l,t):(g[a]=de(l),g[a].c(),g[a].m(p,null))}for(;a<g.length;a+=1)g[a].d(1);g.length=v.length}if(32&t[0]){let a;for(E=e[5],a=0;a<E.length;a+=1){const l=Q(e,E,a);y[a]?y[a].p(l,t):(y[a]=fe(l),y[a].c(),y[a].m(s,null))}for(;a<y.length;a+=1)y[a].d(1);y.length=E.length}},d(e){e&&i(t),T(g,e),T(y,e)}}}function de(e){let t,a,n=e[24]+"";return{c(){t=l("th"),a=s(n)},l(e){t=c(e,"TH",{});var l=r(t);a=o(l,n),l.forEach(i)},m(e,l){f(e,t,l),u(t,a)},p(e,t){32&t[0]&&n!==(n=e[24]+"")&&m(a,n)},d(e){e&&i(t)}}}function he(e){let t,a,n,d,h=e[21][e[24]]+"";return{c(){t=l("td"),a=s(h)},l(e){t=c(e,"TD",{});var l=r(t);a=o(l,h),l.forEach(i)},m(e,l){f(e,t,l),u(t,a),n||(d=p(t,"click",be),n=!0)},p(e,t){32&t[0]&&h!==(h=e[21][e[24]]+"")&&m(a,h)},d(e){e&&i(t),n=!1,d()}}}function fe(e){let t,a,s=Object.keys(e[5][0]),o=[];for(let l=0;l<s.length;l+=1)o[l]=he(Y(e,s,l));return{c(){t=l("tr");for(let e=0;e<o.length;e+=1)o[e].c();a=n()},l(e){t=c(e,"TR",{});var l=r(t);for(let t=0;t<o.length;t+=1)o[t].l(l);a=d(l),l.forEach(i)},m(e,l){f(e,t,l);for(let a=0;a<o.length;a+=1)o[a].m(t,null);u(t,a)},p(e,l){if(32&l[0]){let n;for(s=Object.keys(e[5][0]),n=0;n<s.length;n+=1){const c=Y(e,s,n);o[n]?o[n].p(c,l):(o[n]=he(c),o[n].c(),o[n].m(t,a))}for(;n<o.length;n+=1)o[n].d(1);o.length=s.length}},d(e){e&&i(t),T(o,e)}}}function ue(e){let t,a,s,o,p,m,v=Object.keys(e[6][0]),g=[];for(let l=0;l<v.length;l+=1)g[l]=pe(Z(e,v,l));let E=e[6],y=[];for(let l=0;l<E.length;l+=1)y[l]=ve(z(e,E,l));return{c(){t=l("div"),a=l("div"),s=l("table"),o=l("thead"),p=l("tr");for(let e=0;e<g.length;e+=1)g[e].c();m=n();for(let e=0;e<y.length;e+=1)y[e].c();this.h()},l(e){t=c(e,"DIV",{class:!0});var l=r(t);a=c(l,"DIV",{class:!0});var n=r(a);s=c(n,"TABLE",{class:!0,style:!0});var h=r(s);o=c(h,"THEAD",{});var f=r(o);p=c(f,"TR",{class:!0});var u=r(p);for(let t=0;t<g.length;t+=1)g[t].l(u);u.forEach(i),f.forEach(i),m=d(h);for(let t=0;t<y.length;t+=1)y[t].l(h);h.forEach(i),n.forEach(i),l.forEach(i),this.h()},h(){h(p,"class","w3-dark-grey"),h(s,"class","w3-table-all"),w(s,"width","100%"),h(a,"class","w3-responsive"),h(t,"class","w3-container")},m(e,l){f(e,t,l),u(t,a),u(a,s),u(s,o),u(o,p);for(let t=0;t<g.length;t+=1)g[t].m(p,null);u(s,m);for(let t=0;t<y.length;t+=1)y[t].m(s,null)},p(e,t){if(64&t[0]){let a;for(v=Object.keys(e[6][0]),a=0;a<v.length;a+=1){const l=Z(e,v,a);g[a]?g[a].p(l,t):(g[a]=pe(l),g[a].c(),g[a].m(p,null))}for(;a<g.length;a+=1)g[a].d(1);g.length=v.length}if(64&t[0]){let a;for(E=e[6],a=0;a<E.length;a+=1){const l=z(e,E,a);y[a]?y[a].p(l,t):(y[a]=ve(l),y[a].c(),y[a].m(s,null))}for(;a<y.length;a+=1)y[a].d(1);y.length=E.length}},d(e){e&&i(t),T(g,e),T(y,e)}}}function pe(e){let t,a,n=e[24]+"";return{c(){t=l("th"),a=s(n)},l(e){t=c(e,"TH",{});var l=r(t);a=o(l,n),l.forEach(i)},m(e,l){f(e,t,l),u(t,a)},p(e,t){64&t[0]&&n!==(n=e[24]+"")&&m(a,n)},d(e){e&&i(t)}}}function me(e){let t,a,n,d,h=e[21][e[24]]+"";return{c(){t=l("td"),a=s(h)},l(e){t=c(e,"TD",{});var l=r(t);a=o(l,h),l.forEach(i)},m(e,l){f(e,t,l),u(t,a),n||(d=p(t,"click",ye),n=!0)},p(e,t){64&t[0]&&h!==(h=e[21][e[24]]+"")&&m(a,h)},d(e){e&&i(t),n=!1,d()}}}function ve(e){let t,a,s=Object.keys(e[6][0]),o=[];for(let l=0;l<s.length;l+=1)o[l]=me(_(e,s,l));return{c(){t=l("tr");for(let e=0;e<o.length;e+=1)o[e].c();a=n()},l(e){t=c(e,"TR",{});var l=r(t);for(let t=0;t<o.length;t+=1)o[t].l(l);a=d(l),l.forEach(i)},m(e,l){f(e,t,l);for(let a=0;a<o.length;a+=1)o[a].m(t,null);u(t,a)},p(e,l){if(64&l[0]){let n;for(s=Object.keys(e[6][0]),n=0;n<s.length;n+=1){const c=_(e,s,n);o[n]?o[n].p(c,l):(o[n]=me(c),o[n].c(),o[n].m(t,a))}for(;n<o.length;n+=1)o[n].d(1);o.length=s.length}},d(e){e&&i(t),T(o,e)}}}function ge(e){let t,a,p,m,v,g,E,T,V,C,N,S,R,H,U,F,A,$,P,j,L,M,q,z;a=new O({});m=new G({props:{}}),e[16](m);let _="Communication"==e[1]&&te(e),Z="Static"==e[1]&&oe(e);return{c(){t=n(),y(a.$$.fragment),p=n(),y(m.$$.fragment),v=n(),_&&_.c(),g=n(),Z&&Z.c(),E=n(),T=l("hr"),V=n(),C=l("div"),N=l("h1"),S=l("b"),R=s("Detection Statistics"),H=n(),U=l("div"),F=l("h2"),A=s("Evaluation Parameters"),$=n(),P=l("div"),j=l("img"),M=n(),q=l("hr"),this.h()},l(e){b('[data-svelte="svelte-qmgm2y"]',J.head).forEach(i),t=d(e),D(a.$$.fragment,e),p=d(e),D(m.$$.fragment,e),v=d(e),_&&_.l(e),g=d(e),Z&&Z.l(e),E=d(e),T=c(e,"HR",{class:!0}),V=d(e),C=c(e,"DIV",{class:!0});var l=r(C);N=c(l,"H1",{class:!0,style:!0});var s=r(N);S=c(s,"B",{});var n=r(S);R=o(n,"Detection Statistics"),n.forEach(i),s.forEach(i),l.forEach(i),H=d(e),U=c(e,"DIV",{class:!0});var h=r(U);F=c(h,"H2",{});var f=r(F);A=o(f,"Evaluation Parameters"),f.forEach(i),$=d(h),P=c(h,"DIV",{class:!0});var u=r(P);j=c(u,"IMG",{id:!0,src:!0,alt:!0,style:!0}),u.forEach(i),h.forEach(i),M=d(e),q=c(e,"HR",{class:!0}),this.h()},h(){J.title="Database",h(T,"class","svelte-129maq9"),h(N,"class","w3-text-yellow"),w(N,"text-shadow","1px 1px 0 #444"),h(C,"class","w3-panel w3-blue"),h(j,"id","statsChartPic"),j.src!==(L="https://via.placeholder.com/468x60?text=Evaluation+Matplotlib+Chart+Results")&&h(j,"src","https://via.placeholder.com/468x60?text=Evaluation+Matplotlib+Chart+Results"),h(j,"alt","stats"),w(j,"width","100%"),h(P,"class","w3-display-container w3-text-white"),h(U,"class","w3-container"),h(q,"class","svelte-129maq9")},m(e,l){f(e,t,l),x(a,e,l),f(e,p,l),x(m,e,l),f(e,v,l),_&&_.m(e,l),f(e,g,l),Z&&Z.m(e,l),f(e,E,l),f(e,T,l),f(e,V,l),f(e,C,l),u(C,N),u(N,S),u(S,R),f(e,H,l),f(e,U,l),u(U,F),u(F,A),u(U,$),u(U,P),u(P,j),f(e,M,l),f(e,q,l),z=!0},p(e,t){m.$set({}),"Communication"==e[1]?_?_.p(e,t):(_=te(e),_.c(),_.m(g.parentNode,g)):_&&(_.d(1),_=null),"Static"==e[1]?Z?Z.p(e,t):(Z=oe(e),Z.c(),Z.m(E.parentNode,E)):Z&&(Z.d(1),Z=null)},i(e){z||(I(a.$$.fragment,e),I(m.$$.fragment,e),z=!0)},o(e){B(a.$$.fragment,e),B(m.$$.fragment,e),z=!1},d(l){l&&i(t),k(a,l),l&&i(p),e[16](null),k(m,l),l&&i(v),_&&_.d(l),l&&i(g),Z&&Z.d(l),l&&i(E),l&&i(T),l&&i(V),l&&i(C),l&&i(H),l&&i(U),l&&i(M),l&&i(q)}}}function we(e,t){let a=document.createElement("a");document.body.appendChild(a),a.style="display: none";let l=window.URL.createObjectURL(e);a.href=l,a.download=t,a.click(),window.URL.revokeObjectURL(l)}function Ee(){let e=document.getElementById("editTable"),t=this.parentElement.nextElementSibling.firstElementChild.value,a=e.children[1].childNodes;for(let l=0;l<a.length;l++){a[l].style.display="none";let e=a[l].getElementsByTagName("td")[0];e&&e.innerText.toUpperCase().indexOf(t)>-1&&(a[l].style.display="")}}function Te(){let e=document.getElementById("editTable").children[1].childNodes;for(let t=0;t<e.length;t++)if("none"!=e[t].style.display){let a=e[t].getElementsByTagName("td")[1].firstElementChild.firstElementChild;a.checked=!a.checked}}function ye(){let e=this.innerText;document.getElementById("staticTrainedModel").value=e}function be(){let e=this.innerText;document.getElementById("staticDatasetToTrain").value=e,document.getElementById("downloadZipFoldername").value=e,document.getElementById("staticTrainedDataset").value=e}function De(){}function xe(e,t,a){let l,s="",n={};const c=$.subscribe((e=>{n=e})),r=P.subscribe((e=>{a(1,s=e)}));let o=[],i=[],d=[],h=[],f=[];function u(){R("/datasets/all",(function(e){let t=JSON.parse(e.response);t.data&&(A.success("Found data."),a(2,o=t.data),console.log("gridfsData",o))}))}function p(){let e=document.getElementById("filenameCSV").value;if(""==e)return void A.danger("Please provide a filename with .csv ending");let t=e.split(".");if("csv"!=t[t.length-1])return void A.danger("File ending must be .csv");let a=document.getElementById("editTable"),l=[],s=[],n=a.querySelectorAll("thead th");for(let r=0;r<n.length;r++)s.push(n[r].innerText);l.push(s.join(";"));let c=a.querySelectorAll("tbody tr");for(let r=0;r<c.length;r++)if(s=[],"none"!=c[r].style.display){let e=c[r].getElementsByTagName("td");s.push(e[0].innerText.replace(";"," ")),e[1].firstElementChild.firstElementChild.checked?s.push("True"):s.push("False"),l.push(s.join(";"))}return[e,new Blob([l.join("\n")],{type:"text/csv"})]}return V((()=>{c(),r()})),C((async()=>{"Communication"==s&&(u(),R("/capfile/all",(function(e){let t=JSON.parse(e.response);t.data&&(A.success("Found data."),a(3,i=t.data),console.log("capfileData",i))}))),"Static"==s&&(R("/staticfolders/models",(function(e){let t=JSON.parse(e.response);t.data&&(a(6,f=t.data),console.log("staticModels",f))})),R("/staticfolders/datasets",(function(e){let t=JSON.parse(e.response);t.data&&(a(5,h=t.data),console.log("staticAttacks",h))})))})),[l,s,o,i,d,h,f,u,function(){let e=this.parentElement.parentElement.parentElement.firstElementChild.innerText;H("/capfile/download","POST",{filepath:e},(function(e){we(new Blob([e.response],{type:"octet/stream"}),decodeURIComponent(e.getResponseHeader("Content-Disposition").split("filename=")[1].split(";")[0]))}))},function(){let e=this.parentElement.parentElement.parentElement.firstElementChild.innerText;U("/capfile/edit","POST",{filepath:e},(function(e){e.data&&(a(4,d=e.data),console.log("editData:",d),A.success("Loading data successfull."))}))},function(){let e=p(),t=e[0],a=e[1];F("/datasets/upload","POST",{filename:t,Files:a},(function(e){JSON.parse(e.response).data&&A.success("Upload worked, repload gridfs.")}))},function(){let e=p(),t=e[0];we(e[1],t)},function(){let e=this.parentElement.parentElement.parentElement.firstElementChild.innerText;U("/datasets/file","DELETE",{filename:e},(function(e){e.data&&A.success("Deletion successfull, reload Gridfs data.")}))},function(){let e=this.parentElement.parentElement.parentElement.firstElementChild.innerText;H("/datasets/download","POST",{filename:e},(function(e){we(new Blob([e.response],{type:"octet/stream"}),decodeURIComponent(e.getResponseHeader("Content-Disposition").split("filename=")[1].split(";")[0]))}))},function(){let e=n.configurations[0],t=document.getElementById("staticDatasetToTrain").value;console.log("scenario_configurations",e),U("/staticanalysis/train","POST",{configs:e,foldername:t},(function(e){e.data&&(console.log("res.data of train parameters",e.data),A.success("Training of Model Parameters successfull."),f.push(e.data))}))},function(){let e=n.configurations[0],t=document.getElementById("staticDatasetToTrain").value,a=document.getElementById("staticTrainedModel").value;l.changeBanner("Apply Detection ..."),console.log("scenario_configurations",e),H("/staticanalysis/detect","POST",{configs:e,foldername:t,model:a},(function(e){if(e){let t=new Blob([e.response],{type:"octet/stream"}),a=(window.URL||window.webkitURL).createObjectURL(t);document.getElementById("statsChartPic").src=a,l.closeBanner()}}))},function(e){S[e?"unshift":"push"]((()=>{l=e,a(0,l)}))}]}export default class extends e{constructor(e){super(),t(this,e,xe,ge,a,{},[-1,-1])}}
