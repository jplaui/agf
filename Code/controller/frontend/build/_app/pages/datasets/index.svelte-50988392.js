import{S as a,i as s,s as e,k as t,j as l,e as n,t as o,L as c,d as r,n as i,m as f,c as d,a as p,g as h,b as u,N as w,f as v,o as b,F as x,G as E,H as C,v as m,r as y,w as S,Q as g,z as T}from"../../chunks/vendor-c052606d.js";import{T as k,x as F,n as V}from"../../chunks/requests-213c1aee.js";/* empty css                                                       */function D(a){let s,e,T,F,V,D,N,O,j,G,I,R,U,q,J,L,z,A,Q,_,K,M,P,W,X,Y,Z,aa,sa,ea,ta,la,na,oa,ca,ra,ia;return e=new k({}),{c(){s=t(),l(e.$$.fragment),T=t(),F=n("div"),V=n("h1"),D=n("b"),N=o("Capfiles"),O=o("\n\nTable of capfiles\n\n"),j=n("button"),G=o("Download Capture File"),I=t(),R=n("hr"),U=t(),q=n("div"),J=n("h1"),L=n("b"),z=o("Edit Capfile Content"),A=o("\n\non click on capfiles, show another table of capfile content\n\n\n"),Q=n("button"),_=o("Convert to CSV"),K=t(),M=n("hr"),P=t(),W=n("div"),X=n("h1"),Y=n("b"),Z=o("CSV Files (stored in GridFS)"),aa=t(),sa=n("table"),ea=t(),ta=n("button"),la=o("Download CSV"),na=t(),oa=n("hr"),this.h()},l(a){c('[data-svelte="svelte-qmgm2y"]',document.head).forEach(r),s=i(a),f(e.$$.fragment,a),T=i(a),F=d(a,"DIV",{class:!0});var t=p(F);V=d(t,"H1",{class:!0,style:!0});var l=p(V);D=d(l,"B",{});var n=p(D);N=h(n,"Capfiles"),n.forEach(r),l.forEach(r),t.forEach(r),O=h(a,"\n\nTable of capfiles\n\n"),j=d(a,"BUTTON",{class:!0});var o=p(j);G=h(o,"Download Capture File"),o.forEach(r),I=i(a),R=d(a,"HR",{class:!0}),U=i(a),q=d(a,"DIV",{class:!0});var u=p(q);J=d(u,"H1",{class:!0,style:!0});var w=p(J);L=d(w,"B",{});var v=p(L);z=h(v,"Edit Capfile Content"),v.forEach(r),w.forEach(r),u.forEach(r),A=h(a,"\n\non click on capfiles, show another table of capfile content\n\n\n"),Q=d(a,"BUTTON",{class:!0});var b=p(Q);_=h(b,"Convert to CSV"),b.forEach(r),K=i(a),M=d(a,"HR",{class:!0}),P=i(a),W=d(a,"DIV",{class:!0});var x=p(W);X=d(x,"H1",{class:!0,style:!0});var E=p(X);Y=d(E,"B",{});var C=p(Y);Z=h(C,"CSV Files (stored in GridFS)"),C.forEach(r),E.forEach(r),x.forEach(r),aa=i(a),sa=d(a,"TABLE",{}),p(sa).forEach(r),ea=i(a),ta=d(a,"BUTTON",{class:!0});var m=p(ta);la=h(m,"Download CSV"),m.forEach(r),na=i(a),oa=d(a,"HR",{class:!0}),this.h()},h(){document.title="Database",u(V,"class","w3-text-yellow"),w(V,"text-shadow","1px 1px 0 #444"),u(F,"class","w3-panel w3-blue"),u(j,"class","w3-col w3-input w3-border"),u(R,"class","svelte-lxonyp"),u(J,"class","w3-text-yellow"),w(J,"text-shadow","1px 1px 0 #444"),u(q,"class","w3-panel w3-blue"),u(Q,"class","w3-col w3-input w3-border"),u(M,"class","svelte-lxonyp"),u(X,"class","w3-text-yellow"),w(X,"text-shadow","1px 1px 0 #444"),u(W,"class","w3-panel w3-blue"),u(ta,"class","w3-col w3-input w3-border"),u(oa,"class","svelte-lxonyp")},m(a,t){v(a,s,t),b(e,a,t),v(a,T,t),v(a,F,t),x(F,V),x(V,D),x(D,N),v(a,O,t),v(a,j,t),x(j,G),v(a,I,t),v(a,R,t),v(a,U,t),v(a,q,t),x(q,J),x(J,L),x(L,z),v(a,A,t),v(a,Q,t),x(Q,_),v(a,K,t),v(a,M,t),v(a,P,t),v(a,W,t),x(W,X),x(X,Y),x(Y,Z),v(a,aa,t),v(a,sa,t),v(a,ea,t),v(a,ta,t),x(ta,la),v(a,na,t),v(a,oa,t),ca=!0,ra||(ia=[E(j,"click",$),E(Q,"click",B),E(ta,"click",H)],ra=!0)},p:C,i(a){ca||(m(e.$$.fragment,a),ca=!0)},o(a){y(e.$$.fragment,a),ca=!1},d(a){a&&r(s),S(e,a),a&&r(T),a&&r(F),a&&r(O),a&&r(j),a&&r(I),a&&r(R),a&&r(U),a&&r(q),a&&r(A),a&&r(Q),a&&r(K),a&&r(M),a&&r(P),a&&r(W),a&&r(aa),a&&r(sa),a&&r(ea),a&&r(ta),a&&r(na),a&&r(oa),ra=!1,g(ia)}}}function $(){}function B(){}function H(){}function N(a){let s=[],e=[];return T((async()=>{F("/allgridfs",(function(a){let e=JSON.parse(a.response);e.data&&(V.success("Found data."),s=e.data,console.log(s))})),F("/capfile",(function(a){let s=JSON.parse(a.response);s.data&&(V.success("Found data."),e=s.data,console.log(e))}))})),[]}export default class extends a{constructor(a){super(),s(this,a,N,D,e,{})}}
