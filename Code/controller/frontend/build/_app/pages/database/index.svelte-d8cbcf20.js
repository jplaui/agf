import{S as t,i as e,s as a,e as l,t as s,k as n,c as o,a as c,g as r,d as i,n as h,b as f,f as d,F as u,h as p,M as v,N as g,a7 as w,G as b,H as m,Q as E,a8 as D,a4 as x}from"../../chunks/vendor-88cff2d8.js";import{x as O}from"../../chunks/requests-ba32cc6e.js";function y(t,e,a){const l=t.slice();return l[11]=e[a],l[12]=e,l[13]=a,l}function N(t,e,a){const l=t.slice();return l[14]=e[a][0],l[15]=e[a][1],l}function C(t,e,a){const l=t.slice();return l[11]=e[a],l[18]=e,l[13]=a,l}function I(t){let e,a,n=t[11]+"",h=t[13];const v=()=>t[8](e,h),g=()=>t[8](null,h);return{c(){e=l("li"),a=s(n),this.h()},l(t){e=o(t,"LI",{class:!0});var l=c(e);a=r(l,n),l.forEach(i),this.h()},h(){f(e,"class","db-collection svelte-1ve4g5t")},m(t,l){d(t,e,l),u(e,a),v()},p(e,l){t=e,4&l&&n!==(n=t[11]+"")&&p(a,n),h!==t[13]&&(g(),h=t[13],v())},d(t){t&&i(e),g()}}}function B(t){let e,a,g,w,b,m,E=t[14]+"",D=t[15],x=[];for(let l=0;l<D.length;l+=1)x[l]=I(C(t,D,l));return{c(){e=l("div"),a=s(E),g=n(),w=l("ul");for(let t=0;t<x.length;t+=1)x[t].c();b=n(),m=l("br"),this.h()},l(t){e=o(t,"DIV",{class:!0});var l=c(e);a=r(l,E),l.forEach(i),g=h(t),w=o(t,"UL",{});var s=c(w);for(let e=0;e<x.length;e+=1)x[e].l(s);b=h(s),m=o(s,"BR",{}),s.forEach(i),this.h()},h(){f(e,"class","db-name svelte-1ve4g5t")},m(t,l){d(t,e,l),u(e,a),d(t,g,l),d(t,w,l);for(let e=0;e<x.length;e+=1)x[e].m(w,null);u(w,b),u(w,m)},p(t,e){if(4&e&&E!==(E=t[14]+"")&&p(a,E),5&e){let a;for(D=t[15],a=0;a<D.length;a+=1){const l=C(t,D,a);x[a]?x[a].p(l,e):(x[a]=I(l),x[a].c(),x[a].m(w,b))}for(;a<x.length;a+=1)x[a].d(1);x.length=D.length}},d(t){t&&i(e),t&&i(g),t&&i(w),v(x,t)}}}function T(t){let e,a,f,v=JSON.stringify(t[11],void 0,2)+"",g=t[13];const w=()=>t[10](e,g),b=()=>t[10](null,g);return{c(){e=l("li"),a=s(v),f=n()},l(t){e=o(t,"LI",{});var l=c(e);a=r(l,v),f=h(l),l.forEach(i)},m(t,l){d(t,e,l),u(e,a),u(e,f),w()},p(e,l){t=e,16&l&&v!==(v=JSON.stringify(t[11],void 0,2)+"")&&p(a,v),g!==t[13]&&(b(),g=t[13],w())},d(t){t&&i(e),b()}}}function j(t){let e,a,p,D,x,O,C,I,j,k,V,S,U,H,J,R,_,L,G,M,q,F,P,Q,z,A,K,W,X,Y,Z,$,tt,et,at,lt=Object.entries(t[2]),st=[];for(let l=0;l<lt.length;l+=1)st[l]=B(N(t,lt,l));let nt=t[4],ot=[];for(let l=0;l<nt.length;l+=1)ot[l]=T(y(t,nt,l));return{c(){e=l("hr"),a=n(),p=l("div"),D=l("h1"),x=l("b"),O=s("Databases and Collections"),C=n(),I=l("button"),j=s("DBs and Collections"),k=n(),V=l("br"),S=n();for(let t=0;t<st.length;t+=1)st[t].c();U=n(),H=l("hr"),J=n(),R=l("div"),_=l("h1"),L=l("b"),G=s("Collection Data"),M=n(),q=l("div"),F=l("div"),P=l("input"),Q=n(),z=l("div"),A=l("button"),K=s("Get Data"),W=n(),X=l("div"),Y=l("button"),Z=s("Clear Data"),$=n(),tt=l("ul");for(let t=0;t<ot.length;t+=1)ot[t].c();this.h()},l(t){e=o(t,"HR",{class:!0}),a=h(t),p=o(t,"DIV",{class:!0});var l=c(p);D=o(l,"H1",{class:!0,style:!0});var s=c(D);x=o(s,"B",{});var n=c(x);O=r(n,"Databases and Collections"),n.forEach(i),s.forEach(i),l.forEach(i),C=h(t),I=o(t,"BUTTON",{class:!0});var f=c(I);j=r(f,"DBs and Collections"),f.forEach(i),k=h(t),V=o(t,"BR",{}),S=h(t);for(let e=0;e<st.length;e+=1)st[e].l(t);U=h(t),H=o(t,"HR",{class:!0}),J=h(t),R=o(t,"DIV",{class:!0});var d=c(R);_=o(d,"H1",{class:!0,style:!0});var u=c(_);L=o(u,"B",{});var v=c(L);G=r(v,"Collection Data"),v.forEach(i),u.forEach(i),d.forEach(i),M=h(t),q=o(t,"DIV",{class:!0});var g=c(q);F=o(g,"DIV",{class:!0});var w=c(F);P=o(w,"INPUT",{class:!0,type:!0,placeholder:!0}),w.forEach(i),Q=h(g),z=o(g,"DIV",{class:!0});var b=c(z);A=o(b,"BUTTON",{class:!0});var m=c(A);K=r(m,"Get Data"),m.forEach(i),b.forEach(i),W=h(g),X=o(g,"DIV",{class:!0});var E=c(X);Y=o(E,"BUTTON",{class:!0});var y=c(Y);Z=r(y,"Clear Data"),y.forEach(i),E.forEach(i),g.forEach(i),$=h(t),tt=o(t,"UL",{});var N=c(tt);for(let e=0;e<ot.length;e+=1)ot[e].l(N);N.forEach(i),this.h()},h(){f(e,"class","svelte-1ve4g5t"),f(D,"class","w3-text-yellow"),g(D,"text-shadow","1px 1px 0 #444"),f(p,"class","w3-panel w3-blue"),f(I,"class","w3-col w3-input w3-border"),f(H,"class","svelte-1ve4g5t"),f(_,"class","w3-text-yellow"),g(_,"text-shadow","1px 1px 0 #444"),f(R,"class","w3-panel w3-blue"),f(P,"class","w3-input w3-border"),f(P,"type","text"),f(P,"placeholder","collection_name"),f(F,"class","w3-third"),f(A,"class","w3-col w3-input w3-border"),f(z,"class","w3-third"),f(Y,"class","w3-col w3-input w3-border"),f(X,"class","w3-rest"),f(q,"class","w3-row w3-section")},m(l,s){d(l,e,s),d(l,a,s),d(l,p,s),u(p,D),u(D,x),u(x,O),d(l,C,s),d(l,I,s),u(I,j),d(l,k,s),d(l,V,s),d(l,S,s);for(let t=0;t<st.length;t+=1)st[t].m(l,s);d(l,U,s),d(l,H,s),d(l,J,s),d(l,R,s),u(R,_),u(_,L),u(L,G),d(l,M,s),d(l,q,s),u(q,F),u(F,P),w(P,t[3]),u(q,Q),u(q,z),u(z,A),u(A,K),u(q,W),u(q,X),u(X,Y),u(Y,Z),d(l,$,s),d(l,tt,s);for(let t=0;t<ot.length;t+=1)ot[t].m(tt,null);et||(at=[b(I,"click",t[5]),b(P,"input",t[9]),b(A,"click",t[6]),b(Y,"click",t[7])],et=!0)},p(t,[e]){if(5&e){let a;for(lt=Object.entries(t[2]),a=0;a<lt.length;a+=1){const l=N(t,lt,a);st[a]?st[a].p(l,e):(st[a]=B(l),st[a].c(),st[a].m(U.parentNode,U))}for(;a<st.length;a+=1)st[a].d(1);st.length=lt.length}if(8&e&&P.value!==t[3]&&w(P,t[3]),18&e){let a;for(nt=t[4],a=0;a<nt.length;a+=1){const l=y(t,nt,a);ot[a]?ot[a].p(l,e):(ot[a]=T(l),ot[a].c(),ot[a].m(tt,null))}for(;a<ot.length;a+=1)ot[a].d(1);ot.length=nt.length}},i:m,o:m,d(t){t&&i(e),t&&i(a),t&&i(p),t&&i(C),t&&i(I),t&&i(k),t&&i(V),t&&i(S),v(st,t),t&&i(U),t&&i(H),t&&i(J),t&&i(R),t&&i(M),t&&i(q),t&&i($),t&&i(tt),v(ot,t),et=!1,E(at)}}}function k(t,e,a){let l=[],s=[],n={},o="",c=[];return O("/containers",(function(t){let e=JSON.parse(t.response);e.data&&(containers=e.data)})),[l,s,n,o,c,function(){O("/allapi",(function(t){let e=JSON.parse(t.response);console.log(e,"data..."),e.data&&a(2,n=JSON.parse(e.data))}))},function(){let t="";if(Object.keys(n).forEach((function(e){n[e].indexOf(o)>-1&&(t=e)})),""==t)return;let e={collection_name:o,db_name:t},l="/api/"+t+"/"+o;D.post(l,e,{headers:{"Content-Type":"application/json"}}).then((t=>{a(4,c=t.data.data),console.log("Mongo Data: ",t.data)}),(t=>{console.log(t)}))},function(){let t="";if(Object.keys(n).forEach((function(e){n[e].indexOf(o)>-1&&(t=e)})),""==t)return void window.console.log("cannot find database for collection");let e={collection_name:o,db_name:t};D.post("/deletedata",e,{headers:{"Content-Type":"application/json"}}).then((t=>{a(4,c=[]),window.console.log("Response: ",t.data)}),(t=>{window.console.log(t)}))},function(t,e){x[t?"unshift":"push"]((()=>{l[e]=t,a(0,l)}))},function(){o=this.value,a(3,o)},function(t,e){x[t?"unshift":"push"]((()=>{s[e]=t,a(1,s)}))}]}export default class extends t{constructor(t){super(),e(this,t,k,j,a,{})}}
