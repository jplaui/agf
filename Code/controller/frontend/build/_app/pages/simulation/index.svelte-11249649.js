import{S as t,i as s,s as a,e,t as n,k as o,c,a as l,g as i,d as r,n as u,b as d,f,F as h,G as m,h as p,v as g,l as w,j as v,m as S,o as b,a6 as E,r as k,w as N,u as $,M as O,Q as T,N as y,H as x,L as D,R as I,z as H,B as V,a4 as B,a5 as j}from"../../chunks/vendor-c052606d.js";import{T as R}from"../../chunks/index-e04611e2.js";import{T as C,x as U,n as _,a as F}from"../../chunks/requests-531e903b.js";import{s as J,a as L,b as P}from"../../chunks/store-ce76cd4a.js";/* empty css                                                       */function W(t,s,a){const e=t.slice();return e[28]=s[a],e[29]=s,e[30]=a,e}function G(t){let s,a,w,v,S,b,E,N,O,y,x,D,I,H,B,j,R,C,U,_,F,J,L,P,W,G,A,z,M,Q,K,X,Y,Z,tt,st,at="configurations"in t[0]&&q(t);return{c(){s=e("h4"),a=n("Scenario: "),w=n(t[2]),v=n(" Number of Containers: "),S=n(t[3]),b=n("."),E=o(),N=e("div"),O=e("div"),y=e("button"),x=n("Start Simulation"),D=o(),I=e("div"),H=e("button"),B=n("Stop Simulation"),j=o(),R=e("div"),C=e("button"),U=n("Reset WS Connection"),_=o(),F=e("hr"),J=o(),L=e("section"),P=e("h3"),W=n("Application Logs"),G=o(),A=e("button"),z=n("Clear Logs"),M=o(),at&&at.c(),Q=o(),K=e("br"),X=o(),Y=e("hr"),this.h()},l(e){s=c(e,"H4",{});var n=l(s);a=i(n,"Scenario: "),w=i(n,t[2]),v=i(n," Number of Containers: "),S=i(n,t[3]),b=i(n,"."),n.forEach(r),E=u(e),N=c(e,"DIV",{class:!0});var o=l(N);O=c(o,"DIV",{class:!0});var d=l(O);y=c(d,"BUTTON",{class:!0});var f=l(y);x=i(f,"Start Simulation"),f.forEach(r),d.forEach(r),D=u(o),I=c(o,"DIV",{class:!0});var h=l(I);H=c(h,"BUTTON",{class:!0});var m=l(H);B=i(m,"Stop Simulation"),m.forEach(r),h.forEach(r),j=u(o),R=c(o,"DIV",{class:!0});var p=l(R);C=c(p,"BUTTON",{class:!0});var g=l(C);U=i(g,"Reset WS Connection"),g.forEach(r),p.forEach(r),o.forEach(r),_=u(e),F=c(e,"HR",{class:!0}),J=u(e),L=c(e,"SECTION",{class:!0});var k=l(L);P=c(k,"H3",{});var $=l(P);W=i($,"Application Logs"),$.forEach(r),k.forEach(r),G=u(e),A=c(e,"BUTTON",{class:!0});var T=l(A);z=i(T,"Clear Logs"),T.forEach(r),M=u(e),at&&at.l(e),Q=u(e),K=c(e,"BR",{}),X=u(e),Y=c(e,"HR",{class:!0}),this.h()},h(){d(y,"class","w3-col w3-input w3-border"),d(O,"class","w3-third"),d(H,"class","w3-col w3-input w3-border"),d(I,"class","w3-third"),d(C,"class","w3-col w3-input w3-border"),d(R,"class","w3-third"),d(N,"class","w3-row w3-section"),d(F,"class","svelte-drd2kv"),d(L,"class","page-headline"),d(A,"class","w3-col w3-input w3-border w3-button"),d(Y,"class","svelte-drd2kv")},m(e,n){f(e,s,n),h(s,a),h(s,w),h(s,v),h(s,S),h(s,b),f(e,E,n),f(e,N,n),h(N,O),h(O,y),h(y,x),h(N,D),h(N,I),h(I,H),h(H,B),h(N,j),h(N,R),h(R,C),h(C,U),f(e,_,n),f(e,F,n),f(e,J,n),f(e,L,n),h(L,P),h(P,W),f(e,G,n),f(e,A,n),h(A,z),f(e,M,n),at&&at.m(e,n),f(e,Q,n),f(e,K,n),f(e,X,n),f(e,Y,n),Z=!0,tt||(st=[m(y,"click",t[11]),m(H,"click",t[12]),m(C,"click",t[13]),m(A,"click",t[6])],tt=!0)},p(t,s){(!Z||4&s)&&p(w,t[2]),(!Z||8&s)&&p(S,t[3]),"configurations"in t[0]?at?(at.p(t,s),1&s&&g(at,1)):(at=q(t),at.c(),g(at,1),at.m(Q.parentNode,Q)):at&&(V(),k(at,1,1,(()=>{at=null})),$())},i(t){Z||(g(at),Z=!0)},o(t){k(at),Z=!1},d(t){t&&r(s),t&&r(E),t&&r(N),t&&r(_),t&&r(F),t&&r(J),t&&r(L),t&&r(G),t&&r(A),t&&r(M),at&&at.d(t),t&&r(Q),t&&r(K),t&&r(X),t&&r(Y),tt=!1,T(st)}}}function q(t){let s,a,e=t[0].configurations.length>0&&A(t);return{c(){e&&e.c(),s=w()},l(t){e&&e.l(t),s=w()},m(t,n){e&&e.m(t,n),f(t,s,n),a=!0},p(t,a){t[0].configurations.length>0?e?(e.p(t,a),1&a&&g(e,1)):(e=A(t),e.c(),g(e,1),e.m(s.parentNode,s)):e&&(V(),k(e,1,1,(()=>{e=null})),$())},i(t){a||(g(e),a=!0)},o(t){k(e),a=!1},d(t){e&&e.d(t),t&&r(s)}}}function A(t){let s,a,e=t[0].configurations,n=[];for(let c=0;c<e.length;c+=1)n[c]=K(W(t,e,c));const o=t=>k(n[t],1,1,(()=>{n[t]=null}));return{c(){for(let t=0;t<n.length;t+=1)n[t].c();s=w()},l(t){for(let s=0;s<n.length;s+=1)n[s].l(t);s=w()},m(t,e){for(let s=0;s<n.length;s+=1)n[s].m(t,e);f(t,s,e),a=!0},p(t,a){if(17&a){let c;for(e=t[0].configurations,c=0;c<e.length;c+=1){const o=W(t,e,c);n[c]?(n[c].p(o,a),g(n[c],1)):(n[c]=K(o),n[c].c(),g(n[c],1),n[c].m(s.parentNode,s))}for(V(),c=e.length;c<n.length;c+=1)o(c);$()}},i(t){if(!a){for(let t=0;t<e.length;t+=1)g(n[t]);a=!0}},o(t){n=n.filter(Boolean);for(let s=0;s<n.length;s+=1)k(n[s]);a=!1},d(t){O(n,t),t&&r(s)}}}function z(t){let s,a,e=t[30].toString()in t[4],n=e&&M(t);return{c(){n&&n.c(),s=w()},l(t){n&&n.l(t),s=w()},m(t,e){n&&n.m(t,e),f(t,s,e),a=!0},p(t,a){16&a&&(e=t[30].toString()in t[4]),e?n?(n.p(t,a),16&a&&g(n,1)):(n=M(t),n.c(),g(n,1),n.m(s.parentNode,s)):n&&(V(),k(n,1,1,(()=>{n=null})),$())},i(t){a||(g(n),a=!0)},o(t){k(n),a=!1},d(t){n&&n.d(t),t&&r(s)}}}function M(t){let s,a,e=t[4][t[30].toString()].length>0,n=e&&Q(t);return{c(){n&&n.c(),s=w()},l(t){n&&n.l(t),s=w()},m(t,e){n&&n.m(t,e),f(t,s,e),a=!0},p(t,a){16&a&&(e=t[4][t[30].toString()].length>0),e?n?(n.p(t,a),16&a&&g(n,1)):(n=Q(t),n.c(),g(n,1),n.m(s.parentNode,s)):n&&(V(),k(n,1,1,(()=>{n=null})),$())},i(t){a||(g(n),a=!0)},o(t){k(n),a=!1},d(t){n&&n.d(t),t&&r(s)}}}function Q(t){let s,a,d,m,w,$,O=t[28].container_info.name+"";function T(s){t[14](s,t[30])}let y={title:t[28].container_info.name,headers:Object.keys(t[4][t[30].toString()][0])};return void 0!==t[4][t[30].toString()]&&(y.data=t[4][t[30].toString()]),m=new R({props:y}),B.push((()=>j(m,"data",T))),{c(){s=e("h5"),a=n(O),d=o(),v(m.$$.fragment)},l(t){s=c(t,"H5",{});var e=l(s);a=i(e,O),e.forEach(r),d=u(t),S(m.$$.fragment,t)},m(t,e){f(t,s,e),h(s,a),f(t,d,e),b(m,t,e),$=!0},p(s,e){t=s,(!$||1&e)&&O!==(O=t[28].container_info.name+"")&&p(a,O);const n={};1&e&&(n.title=t[28].container_info.name),16&e&&(n.headers=Object.keys(t[4][t[30].toString()][0])),!w&&16&e&&(w=!0,n.data=t[4][t[30].toString()],E((()=>w=!1))),m.$set(n)},i(t){$||(g(m.$$.fragment,t),$=!0)},o(t){k(m.$$.fragment,t),$=!1},d(t){t&&r(s),t&&r(d),N(m,t)}}}function K(t){let s,a,e=Object.keys(t[4]).length>0,n=e&&z(t);return{c(){n&&n.c(),s=w()},l(t){n&&n.l(t),s=w()},m(t,e){n&&n.m(t,e),f(t,s,e),a=!0},p(t,a){16&a&&(e=Object.keys(t[4]).length>0),e?n?(n.p(t,a),16&a&&g(n,1)):(n=z(t),n.c(),g(n,1),n.m(s.parentNode,s)):n&&(V(),k(n,1,1,(()=>{n=null})),$())},i(t){a||(g(n),a=!0)},o(t){k(n),a=!1},d(t){n&&n.d(t),t&&r(s)}}}function X(t){let s,a,p,w,v,S,b,E,N,O,x,D,I,H,B,j,R,C,U,_,F,J,L,P,W,G,q,A,z,M,Q,K,X,Z,tt,et,nt=t[5].length>0&&Y(t);return{c(){s=e("div"),a=e("div"),p=e("button"),w=n("Start Simulation"),v=o(),S=e("hr"),b=o(),E=e("div"),N=e("h1"),O=e("b"),x=n("Edit Files"),D=o(),nt&&nt.c(),I=o(),H=e("hr"),B=o(),j=e("div"),R=e("div"),C=e("input"),U=o(),_=e("div"),F=e("button"),J=n("Store Files"),L=o(),P=e("div"),W=e("button"),G=n("Export Files"),q=o(),A=e("hr"),z=o(),M=e("div"),Q=e("h1"),K=e("b"),X=n("Generated Datasets"),this.h()},l(t){s=c(t,"DIV",{class:!0});var e=l(s);a=c(e,"DIV",{class:!0});var n=l(a);p=c(n,"BUTTON",{class:!0});var o=l(p);w=i(o,"Start Simulation"),o.forEach(r),n.forEach(r),e.forEach(r),v=u(t),S=c(t,"HR",{class:!0}),b=u(t),E=c(t,"DIV",{class:!0});var d=l(E);N=c(d,"H1",{class:!0,style:!0});var f=l(N);O=c(f,"B",{});var h=l(O);x=i(h,"Edit Files"),h.forEach(r),f.forEach(r),d.forEach(r),D=u(t),nt&&nt.l(t),I=u(t),H=c(t,"HR",{class:!0}),B=u(t),j=c(t,"DIV",{class:!0});var m=l(j);R=c(m,"DIV",{class:!0});var g=l(R);C=c(g,"INPUT",{id:!0,class:!0,name:!0,type:!0,placeholder:!0}),g.forEach(r),U=u(m),_=c(m,"DIV",{class:!0});var k=l(_);F=c(k,"BUTTON",{class:!0});var $=l(F);J=i($,"Store Files"),$.forEach(r),k.forEach(r),L=u(m),P=c(m,"DIV",{class:!0});var T=l(P);W=c(T,"BUTTON",{class:!0});var y=l(W);G=i(y,"Export Files"),y.forEach(r),T.forEach(r),m.forEach(r),q=u(t),A=c(t,"HR",{class:!0}),z=u(t),M=c(t,"DIV",{class:!0});var V=l(M);Q=c(V,"H1",{class:!0,style:!0});var Y=l(Q);K=c(Y,"B",{});var Z=l(K);X=i(Z,"Generated Datasets"),Z.forEach(r),Y.forEach(r),V.forEach(r),this.h()},h(){d(p,"class","w3-col w3-input w3-border"),d(a,"class","w3-rest"),d(s,"class","w3-row w3-section"),d(S,"class","svelte-drd2kv"),d(N,"class","w3-text-yellow"),y(N,"text-shadow","1px 1px 0 #444"),d(E,"class","w3-panel w3-blue"),d(H,"class","svelte-drd2kv"),d(C,"id","filename"),d(C,"class","w3-input w3-border"),d(C,"name","filename"),d(C,"type","text"),d(C,"placeholder","Filename"),d(R,"class","w3-rest"),d(F,"class","w3-col w3-input w3-border"),d(_,"class","w3-half"),d(W,"class","w3-col w3-input w3-border"),d(P,"class","w3-half"),d(j,"class","w3-row w3-section"),d(A,"class","svelte-drd2kv"),d(Q,"class","w3-text-yellow"),y(Q,"text-shadow","1px 1px 0 #444"),d(M,"class","w3-panel w3-blue")},m(e,n){f(e,s,n),h(s,a),h(a,p),h(p,w),f(e,v,n),f(e,S,n),f(e,b,n),f(e,E,n),h(E,N),h(N,O),h(O,x),f(e,D,n),nt&&nt.m(e,n),f(e,I,n),f(e,H,n),f(e,B,n),f(e,j,n),h(j,R),h(R,C),h(j,U),h(j,_),h(_,F),h(F,J),h(j,L),h(j,P),h(P,W),h(W,G),f(e,q,n),f(e,A,n),f(e,z,n),f(e,M,n),h(M,Q),h(Q,K),h(K,X),Z=!0,tt||(et=[m(p,"click",t[9]),m(F,"click",st),m(W,"click",at)],tt=!0)},p(t,s){t[5].length>0?nt?(nt.p(t,s),32&s&&g(nt,1)):(nt=Y(t),nt.c(),g(nt,1),nt.m(I.parentNode,I)):nt&&(V(),k(nt,1,1,(()=>{nt=null})),$())},i(t){Z||(g(nt),Z=!0)},o(t){k(nt),Z=!1},d(t){t&&r(s),t&&r(v),t&&r(S),t&&r(b),t&&r(E),t&&r(D),nt&&nt.d(t),t&&r(I),t&&r(H),t&&r(B),t&&r(j),t&&r(q),t&&r(A),t&&r(z),t&&r(M),tt=!1,T(et)}}}function Y(t){let s,a,e;function n(s){t[15](s)}let o={title:"static simulation data",headers:Object.keys(t[5][0])};return void 0!==t[5]&&(o.data=t[5]),s=new R({props:o}),B.push((()=>j(s,"data",n))),{c(){v(s.$$.fragment)},l(t){S(s.$$.fragment,t)},m(t,a){b(s,t,a),e=!0},p(t,e){const n={};32&e&&(n.headers=Object.keys(t[5][0])),!a&&32&e&&(a=!0,n.data=t[5],E((()=>a=!1))),s.$set(n)},i(t){e||(g(s.$$.fragment,t),e=!0)},o(t){k(s.$$.fragment,t),e=!1},d(t){N(s,t)}}}function Z(t){let s,a,o,u,p,g;return{c(){s=e("div"),a=e("div"),o=e("button"),u=n("Start Simulation"),this.h()},l(t){s=c(t,"DIV",{class:!0});var e=l(s);a=c(e,"DIV",{class:!0});var n=l(a);o=c(n,"BUTTON",{class:!0});var d=l(o);u=i(d,"Start Simulation"),d.forEach(r),n.forEach(r),e.forEach(r),this.h()},h(){d(o,"class","w3-col w3-input w3-border"),d(a,"class","w3-rest"),d(s,"class","w3-row w3-section")},m(e,n){f(e,s,n),h(s,a),h(a,o),h(o,u),p||(g=m(o,"click",t[10]),p=!0)},p:x,d(t){t&&r(s),p=!1,g()}}}function tt(t){let s,a,m,p,w,E,O,T,x,I,H,B,j,R,U,_,F;a=new C({});let J="Communication"==t[1]&&G(t),L="Static"==t[1]&&X(t),P="Driving Simulation"==t[1]&&Z(t);return{c(){s=o(),v(a.$$.fragment),m=o(),p=e("hr"),w=o(),E=e("div"),O=e("h1"),T=e("b"),x=n("Simulation"),I=o(),H=e("hr"),B=o(),J&&J.c(),j=o(),L&&L.c(),R=o(),P&&P.c(),U=o(),_=e("hr"),this.h()},l(t){D('[data-svelte="svelte-1smsifb"]',document.head).forEach(r),s=u(t),S(a.$$.fragment,t),m=u(t),p=c(t,"HR",{class:!0}),w=u(t),E=c(t,"DIV",{class:!0});var e=l(E);O=c(e,"H1",{class:!0,style:!0});var n=l(O);T=c(n,"B",{});var o=l(T);x=i(o,"Simulation"),o.forEach(r),n.forEach(r),e.forEach(r),I=u(t),H=c(t,"HR",{class:!0}),B=u(t),J&&J.l(t),j=u(t),L&&L.l(t),R=u(t),P&&P.l(t),U=u(t),_=c(t,"HR",{class:!0}),this.h()},h(){document.title="Simulation",d(p,"class","svelte-drd2kv"),d(O,"class","w3-text-yellow"),y(O,"text-shadow","1px 1px 0 #444"),d(E,"class","w3-panel w3-blue"),d(H,"class","svelte-drd2kv"),d(_,"class","svelte-drd2kv")},m(t,e){f(t,s,e),b(a,t,e),f(t,m,e),f(t,p,e),f(t,w,e),f(t,E,e),h(E,O),h(O,T),h(T,x),f(t,I,e),f(t,H,e),f(t,B,e),J&&J.m(t,e),f(t,j,e),L&&L.m(t,e),f(t,R,e),P&&P.m(t,e),f(t,U,e),f(t,_,e),F=!0},p(t,[s]){"Communication"==t[1]?J?(J.p(t,s),2&s&&g(J,1)):(J=G(t),J.c(),g(J,1),J.m(j.parentNode,j)):J&&(V(),k(J,1,1,(()=>{J=null})),$()),"Static"==t[1]?L?(L.p(t,s),2&s&&g(L,1)):(L=X(t),L.c(),g(L,1),L.m(R.parentNode,R)):L&&(V(),k(L,1,1,(()=>{L=null})),$()),"Driving Simulation"==t[1]?P?P.p(t,s):(P=Z(t),P.c(),P.m(U.parentNode,U)):P&&(P.d(1),P=null)},i(t){F||(g(a.$$.fragment,t),g(J),g(L),F=!0)},o(t){k(a.$$.fragment,t),k(J),k(L),F=!1},d(t){t&&r(s),N(a,t),t&&r(m),t&&r(p),t&&r(w),t&&r(E),t&&r(I),t&&r(H),t&&r(B),J&&J.d(t),t&&r(j),L&&L.d(t),t&&r(R),P&&P.d(t),t&&r(U),t&&r(_)}}}function st(){}function at(){}function et(t,s,a){let e=[],n={},o="";const c=J.subscribe((t=>{e=t})),l=L.subscribe((t=>{a(0,n=t)})),i=P.subscribe((t=>{a(1,o=t)}));let r=[],u=[];I((()=>{c(),l(),i();for(let t=0;t<r.length;t++)r[t].close();for(let t=0;t<u.length;t++)u[t].close()}));let d="Please create and select a scenario before starting the simulation.",f=!1,h=0,m=[],p={},g=[];function w(){for(const[t,s]of Object.entries(p))a(4,p[t]=[],p)}async function v(t){if(!f)return void _.danger("please create and activate a scenario first.");"start"==t&&w(),F("/simulation/comm","POST",{command:t,configs:n},(function(t){t.data&&(_.success("simulation started."),console.log("response of simulation",t.data))}))}function S(){for(var t=0;t<r.length;t++)ws=r[t],ws.close()}H((async()=>{let t="";for(let s=0;s<e.length;s++)e[s].activated&&(a(2,d=e[s].name),f=!0,t="/api/db1/scenario_configurations/ref-"+e[s]._id);!function(t,s){U(t,(function(t){let a=JSON.parse(t.response);a.data&&a.data.length>0&&(L.set(a.data[0]),s())}))}(t,(function(){if("Communication"==n.type){"configurations"in n&&a(3,h=n.configurations.length);for(var t=0;t<h;t++){a(4,p[t.toString()]=[],p);let s="ws://localhost:8000/simulation/comm/ws/"+t.toString(),e=new WebSocket(s);e.onopen=function(){window.console.log("Successfully connected to the echo websocket server...")},e.onmessage=function(t){let s=JSON.parse(t.data);console.log(s,"printing JSON now");let e=s.client_index,n=JSON.parse(s.data);"status"in n?m[e]=n.status:a(4,p[e]=[...p[e],n],p)},r.push(e)}}if("Static"==n.type){console.log("hello static sample");let t=new WebSocket("ws://localhost:8000/simulation/static/ws");t.onopen=function(){window.console.log("static simulation websocket")},t.onmessage=function(t){let s=JSON.parse(t.data);console.log("static simulation websocket:",s),a(5,g=[...g,s])},u.push(t)}"Communication"==n.type&&console.log("hello driving scenario")}))}));return[n,o,d,h,p,g,w,v,S,function(){F("/simulation/static","POST",{configs:n},(function(t){t.data&&(_.success("simulation started."),console.log("response of simulation",t.data))}))},function(){F("/simulation/static","POST",{configs:n},(function(t){t.data&&(_.success("simulation started."),console.log("response of simulation",t.data))}))},()=>v("start"),()=>v("stop"),()=>S(),function(s,e){t.$$.not_equal(p[e.toString()],s)&&(p[e.toString()]=s,a(4,p))},function(t){g=t,a(5,g)}]}export default class extends t{constructor(t){super(),s(this,t,et,tt,a,{})}}
