import{S as a,i as e,s as l,e as s,t,k as n,c as o,a as c,g as r,d as i,n as h,b as f,N as d,f as p,F as w,G as u,h as v,M as g,j as E,L as m,m as b,o as T,v as x,r as y,w as D,Q as C,z as k,T as V}from"../../chunks/vendor-c052606d.js";import{T as F,x as R,n as H}from"../../chunks/requests-213c1aee.js";/* empty css                                                       */const{document:I}=V;function S(a,e,l){const s=a.slice();return s[3]=e[l],s[5]=l,s}function B(a,e,l){const s=a.slice();return s[6]=e[l],s[5]=l,s}function L(a){let e,l,u,v,E,m,b,T,x=a[1],y=[];for(let s=0;s<x.length;s+=1)y[s]=N(B(a,x,s));return{c(){e=s("div"),l=s("div"),u=s("table"),v=s("thead"),E=s("tr"),m=s("th"),b=t("File Path"),T=n();for(let a=0;a<y.length;a+=1)y[a].c();this.h()},l(a){e=o(a,"DIV",{class:!0});var s=c(e);l=o(s,"DIV",{class:!0});var t=c(l);u=o(t,"TABLE",{class:!0,style:!0});var n=c(u);v=o(n,"THEAD",{});var f=c(v);E=o(f,"TR",{class:!0});var d=c(E);m=o(d,"TH",{});var p=c(m);b=r(p,"File Path"),p.forEach(i),d.forEach(i),f.forEach(i),T=h(n);for(let e=0;e<y.length;e+=1)y[e].l(n);n.forEach(i),t.forEach(i),s.forEach(i),this.h()},h(){f(E,"class","w3-dark-grey"),f(u,"class","w3-table-all"),d(u,"width","100%"),f(l,"class","w3-responsive"),f(e,"class","w3-container")},m(a,s){p(a,e,s),w(e,l),w(l,u),w(u,v),w(v,E),w(E,m),w(m,b),w(u,T);for(let e=0;e<y.length;e+=1)y[e].m(u,null)},p(a,e){if(6&e){let l;for(x=a[1],l=0;l<x.length;l+=1){const s=B(a,x,l);y[l]?y[l].p(s,e):(y[l]=N(s),y[l].c(),y[l].m(u,null))}for(;l<y.length;l+=1)y[l].d(1);y.length=x.length}},d(a){a&&i(e),g(y,a)}}}function N(a){let e,l,d,g,E,m,b=a[6]+"";return{c(){e=s("tr"),l=s("td"),d=t(b),g=n(),this.h()},l(a){e=o(a,"TR",{index:!0});var s=c(e);l=o(s,"TD",{});var t=c(l);d=r(t,b),t.forEach(i),g=h(s),s.forEach(i),this.h()},h(){f(e,"index",a[5])},m(s,t){p(s,e,t),w(e,l),w(l,d),w(e,g),E||(m=u(e,"click",a[2]),E=!0)},p(a,e){2&e&&b!==(b=a[6]+"")&&v(d,b)},d(a){a&&i(e),E=!1,m()}}}function U(a){let e,l,u,v,E,m,b,T,x,y,D,C=a[0],k=[];for(let s=0;s<C.length;s+=1)k[s]=O(S(a,C,s));return{c(){e=s("div"),l=s("div"),u=s("table"),v=s("thead"),E=s("tr"),m=s("th"),b=t("Filename"),T=n(),x=s("th"),y=t("Action"),D=n();for(let a=0;a<k.length;a+=1)k[a].c();this.h()},l(a){e=o(a,"DIV",{class:!0});var s=c(e);l=o(s,"DIV",{class:!0});var t=c(l);u=o(t,"TABLE",{class:!0,style:!0});var n=c(u);v=o(n,"THEAD",{});var f=c(v);E=o(f,"TR",{class:!0});var d=c(E);m=o(d,"TH",{class:!0});var p=c(m);b=r(p,"Filename"),p.forEach(i),T=h(d),x=o(d,"TH",{class:!0});var w=c(x);y=r(w,"Action"),w.forEach(i),d.forEach(i),f.forEach(i),D=h(n);for(let e=0;e<k.length;e+=1)k[e].l(n);n.forEach(i),t.forEach(i),s.forEach(i),this.h()},h(){f(m,"class","w3-left-align"),f(x,"class","w3-right-align"),f(E,"class","w3-dark-grey"),f(u,"class","w3-table-all"),d(u,"width","100%"),f(l,"class","w3-responsive"),f(e,"class","w3-container")},m(a,s){p(a,e,s),w(e,l),w(l,u),w(u,v),w(v,E),w(E,m),w(m,b),w(E,T),w(E,x),w(x,y),w(u,D);for(let e=0;e<k.length;e+=1)k[e].m(u,null)},p(a,e){if(1&e){let l;for(C=a[0],l=0;l<C.length;l+=1){const s=S(a,C,l);k[l]?k[l].p(s,e):(k[l]=O(s),k[l].c(),k[l].m(u,null))}for(;l<k.length;l+=1)k[l].d(1);k.length=C.length}},d(a){a&&i(e),g(k,a)}}}function O(a){let e,l,d,g,E,m,b,T,x,y,D=a[3]+"";return{c(){e=s("tr"),l=s("td"),d=t(D),g=n(),E=s("td"),m=s("button"),b=t("Download"),T=n(),this.h()},l(a){e=o(a,"TR",{});var s=c(e);l=o(s,"TD",{class:!0});var t=c(l);d=r(t,D),t.forEach(i),g=h(s),E=o(s,"TD",{class:!0});var n=c(E);m=o(n,"BUTTON",{index:!0});var f=c(m);b=r(f,"Download"),f.forEach(i),n.forEach(i),T=h(s),s.forEach(i),this.h()},h(){f(l,"class","w3-left-align"),f(m,"index",a[5]),f(E,"class","w3-right-align")},m(a,s){p(a,e,s),w(e,l),w(l,d),w(e,g),w(e,E),w(E,m),w(m,b),w(e,T),x||(y=u(m,"click",G),x=!0)},p(a,e){1&e&&D!==(D=a[3]+"")&&v(d,D)},d(a){a&&i(e),x=!1,y()}}}function $(a){let e,l,v,g,k,V,R,H,S,B,N,O,$,P,q,J,_,z,M,Q,K,W,X,Y,Z,aa,ea,la,sa,ta,na,oa,ca,ra,ia,ha,fa;l=new F({});let da=a[1].length>0&&L(a),pa=a[0].length>0&&U(a);return{c(){e=n(),E(l.$$.fragment),v=n(),g=s("div"),k=s("h1"),V=s("b"),R=t("Capfiles"),H=n(),da&&da.c(),S=n(),B=s("button"),N=t("Download Capture File"),O=n(),$=s("hr"),P=n(),q=s("div"),J=s("h1"),_=s("b"),z=t("Edit Capfile Content"),M=t("\n\non click on capfiles, show another table of capfile content\n\n\n"),Q=s("button"),K=t("Convert to CSV"),W=n(),X=s("hr"),Y=n(),Z=s("div"),aa=s("h1"),ea=s("b"),la=t("CSV Files (stored in GridFS)"),sa=n(),pa&&pa.c(),ta=n(),na=s("button"),oa=t("Download CSV"),ca=n(),ra=s("hr"),this.h()},l(a){m('[data-svelte="svelte-qmgm2y"]',I.head).forEach(i),e=h(a),b(l.$$.fragment,a),v=h(a),g=o(a,"DIV",{class:!0});var s=c(g);k=o(s,"H1",{class:!0,style:!0});var t=c(k);V=o(t,"B",{});var n=c(V);R=r(n,"Capfiles"),n.forEach(i),t.forEach(i),s.forEach(i),H=h(a),da&&da.l(a),S=h(a),B=o(a,"BUTTON",{class:!0});var f=c(B);N=r(f,"Download Capture File"),f.forEach(i),O=h(a),$=o(a,"HR",{class:!0}),P=h(a),q=o(a,"DIV",{class:!0});var d=c(q);J=o(d,"H1",{class:!0,style:!0});var p=c(J);_=o(p,"B",{});var w=c(_);z=r(w,"Edit Capfile Content"),w.forEach(i),p.forEach(i),d.forEach(i),M=r(a,"\n\non click on capfiles, show another table of capfile content\n\n\n"),Q=o(a,"BUTTON",{class:!0});var u=c(Q);K=r(u,"Convert to CSV"),u.forEach(i),W=h(a),X=o(a,"HR",{class:!0}),Y=h(a),Z=o(a,"DIV",{class:!0});var E=c(Z);aa=o(E,"H1",{class:!0,style:!0});var T=c(aa);ea=o(T,"B",{});var x=c(ea);la=r(x,"CSV Files (stored in GridFS)"),x.forEach(i),T.forEach(i),E.forEach(i),sa=h(a),pa&&pa.l(a),ta=h(a),na=o(a,"BUTTON",{class:!0});var y=c(na);oa=r(y,"Download CSV"),y.forEach(i),ca=h(a),ra=o(a,"HR",{class:!0}),this.h()},h(){I.title="Database",f(k,"class","w3-text-yellow"),d(k,"text-shadow","1px 1px 0 #444"),f(g,"class","w3-panel w3-blue"),f(B,"class","w3-col w3-input w3-border"),f($,"class","svelte-lxonyp"),f(J,"class","w3-text-yellow"),d(J,"text-shadow","1px 1px 0 #444"),f(q,"class","w3-panel w3-blue"),f(Q,"class","w3-col w3-input w3-border"),f(X,"class","svelte-lxonyp"),f(aa,"class","w3-text-yellow"),d(aa,"text-shadow","1px 1px 0 #444"),f(Z,"class","w3-panel w3-blue"),f(na,"class","w3-col w3-input w3-border"),f(ra,"class","svelte-lxonyp")},m(a,s){p(a,e,s),T(l,a,s),p(a,v,s),p(a,g,s),w(g,k),w(k,V),w(V,R),p(a,H,s),da&&da.m(a,s),p(a,S,s),p(a,B,s),w(B,N),p(a,O,s),p(a,$,s),p(a,P,s),p(a,q,s),w(q,J),w(J,_),w(_,z),p(a,M,s),p(a,Q,s),w(Q,K),p(a,W,s),p(a,X,s),p(a,Y,s),p(a,Z,s),w(Z,aa),w(aa,ea),w(ea,la),p(a,sa,s),pa&&pa.m(a,s),p(a,ta,s),p(a,na,s),w(na,oa),p(a,ca,s),p(a,ra,s),ia=!0,ha||(fa=[u(B,"click",j),u(Q,"click",A),u(na,"click",G)],ha=!0)},p(a,[e]){a[1].length>0?da?da.p(a,e):(da=L(a),da.c(),da.m(S.parentNode,S)):da&&(da.d(1),da=null),a[0].length>0?pa?pa.p(a,e):(pa=U(a),pa.c(),pa.m(ta.parentNode,ta)):pa&&(pa.d(1),pa=null)},i(a){ia||(x(l.$$.fragment,a),ia=!0)},o(a){y(l.$$.fragment,a),ia=!1},d(a){a&&i(e),D(l,a),a&&i(v),a&&i(g),a&&i(H),da&&da.d(a),a&&i(S),a&&i(B),a&&i(O),a&&i($),a&&i(P),a&&i(q),a&&i(M),a&&i(Q),a&&i(W),a&&i(X),a&&i(Y),a&&i(Z),a&&i(sa),pa&&pa.d(a),a&&i(ta),a&&i(na),a&&i(ca),a&&i(ra),ha=!1,C(fa)}}}function j(){}function A(){}function G(){}function P(a,e,l){let s=[],t=[];return k((async()=>{R("/allgridfs",(function(a){let e=JSON.parse(a.response);e.data&&(H.success("Found data."),l(0,s=e.data),console.log(s))})),R("/capfile/all",(function(a){let e=JSON.parse(a.response);e.data&&(H.success("Found data."),l(1,t=e.data),console.log(t))}))})),[s,t,function(){let a=document.getElementById("downloadLogfile").value,e=!1;console.log("download logfile",logfiles);for(let t=0;t<logfiles.length;t++)parseInt(a)==parseInt(logfiles[t]._id)&&(e=!0);if(!e)return void H.danger("Please specify an LogID.");let l="/download/db2/logfiles/"+a;var s=performance.now();R(l,(function(a){!function(a,e){let l=document.createElement("a");document.body.appendChild(l),l.style="display: none";let s=window.URL.createObjectURL(a);l.href=s,l.download=e,l.click(),window.URL.revokeObjectURL(s)}(new Blob([a.response],{type:"octet/stream"}),decodeURIComponent(a.getResponseHeader("Content-Disposition").split("filename=")[1].split(";")[0]));var e=performance.now();console.log("CSV Logfile download took "+(e-s)+" milliseconds.")}))}]}export default class extends a{constructor(a){super(),e(this,a,P,$,l,{})}}