import{S as t,i as n,s,l as a,f as o,v as e,e as r,t as c,k as l,j as i,c as f,a as u,g as d,d as g,n as h,m,F as p,o as v,h as w,a6 as S,r as b,w as k,u as $,M as E,L as N,b as O,N as T,G as j,Q as y,R as x,z as _,B,a4 as H,a5 as R}from"../../chunks/vendor-88cff2d8.js";import{T as C}from"../../chunks/index-5768bd6a.js";import{T as D,n as I,a as L}from"../../chunks/requests-95bb71be.js";import{s as V,a as U}from"../../chunks/store-2837561a.js";/* empty css                                                       */function J(t,n,s){const a=t.slice();return a[19]=n[s],a[20]=n,a[21]=s,a}function W(t){let n,s,r=t[0].configurations.length>0&&q(t);return{c(){r&&r.c(),n=a()},l(t){r&&r.l(t),n=a()},m(t,a){r&&r.m(t,a),o(t,n,a),s=!0},p(t,s){t[0].configurations.length>0?r?(r.p(t,s),1&s&&e(r,1)):(r=q(t),r.c(),e(r,1),r.m(n.parentNode,n)):r&&(B(),b(r,1,1,(()=>{r=null})),$())},i(t){s||(e(r),s=!0)},o(t){b(r),s=!1},d(t){r&&r.d(t),t&&g(n)}}}function q(t){let n,s,r=t[0].configurations,c=[];for(let a=0;a<r.length;a+=1)c[a]=F(J(t,r,a));const l=t=>b(c[t],1,1,(()=>{c[t]=null}));return{c(){for(let t=0;t<c.length;t+=1)c[t].c();n=a()},l(t){for(let n=0;n<c.length;n+=1)c[n].l(t);n=a()},m(t,a){for(let n=0;n<c.length;n+=1)c[n].m(t,a);o(t,n,a),s=!0},p(t,s){if(9&s){let a;for(r=t[0].configurations,a=0;a<r.length;a+=1){const o=J(t,r,a);c[a]?(c[a].p(o,s),e(c[a],1)):(c[a]=F(o),c[a].c(),e(c[a],1),c[a].m(n.parentNode,n))}for(B(),a=r.length;a<c.length;a+=1)l(a);$()}},i(t){if(!s){for(let t=0;t<r.length;t+=1)e(c[t]);s=!0}},o(t){c=c.filter(Boolean);for(let n=0;n<c.length;n+=1)b(c[n]);s=!1},d(t){E(c,t),t&&g(n)}}}function A(t){let n,s,r=t[21].toString()in t[3],c=r&&P(t);return{c(){c&&c.c(),n=a()},l(t){c&&c.l(t),n=a()},m(t,a){c&&c.m(t,a),o(t,n,a),s=!0},p(t,s){8&s&&(r=t[21].toString()in t[3]),r?c?(c.p(t,s),8&s&&e(c,1)):(c=P(t),c.c(),e(c,1),c.m(n.parentNode,n)):c&&(B(),b(c,1,1,(()=>{c=null})),$())},i(t){s||(e(c),s=!0)},o(t){b(c),s=!1},d(t){c&&c.d(t),t&&g(n)}}}function P(t){let n,s,r=t[3][t[21].toString()].length>0,c=r&&z(t);return{c(){c&&c.c(),n=a()},l(t){c&&c.l(t),n=a()},m(t,a){c&&c.m(t,a),o(t,n,a),s=!0},p(t,s){8&s&&(r=t[3][t[21].toString()].length>0),r?c?(c.p(t,s),8&s&&e(c,1)):(c=z(t),c.c(),e(c,1),c.m(n.parentNode,n)):c&&(B(),b(c,1,1,(()=>{c=null})),$())},i(t){s||(e(c),s=!0)},o(t){b(c),s=!1},d(t){c&&c.d(t),t&&g(n)}}}function z(t){let n,s,a,$,E,N,O,T=t[19].container_info.name+"";function j(n){t[10](n,t[21])}let y={title:t[19].container_info.name,headers:Object.keys(t[3][t[21].toString()][0])};return void 0!==t[3][t[21].toString()]&&(y.data=t[3][t[21].toString()]),$=new C({props:y}),H.push((()=>R($,"data",j))),{c(){n=r("h5"),s=c(T),a=l(),i($.$$.fragment),N=l()},l(t){n=f(t,"H5",{});var o=u(n);s=d(o,T),o.forEach(g),a=h(t),m($.$$.fragment,t),N=h(t)},m(t,e){o(t,n,e),p(n,s),o(t,a,e),v($,t,e),o(t,N,e),O=!0},p(n,a){t=n,(!O||1&a)&&T!==(T=t[19].container_info.name+"")&&w(s,T);const o={};1&a&&(o.title=t[19].container_info.name),8&a&&(o.headers=Object.keys(t[3][t[21].toString()][0])),!E&&8&a&&(E=!0,o.data=t[3][t[21].toString()],S((()=>E=!1))),$.$set(o)},i(t){O||(e($.$$.fragment,t),O=!0)},o(t){b($.$$.fragment,t),O=!1},d(t){t&&g(n),t&&g(a),k($,t),t&&g(N)}}}function F(t){let n,s,r=Object.keys(t[3]).length>0,c=r&&A(t);return{c(){c&&c.c(),n=a()},l(t){c&&c.l(t),n=a()},m(t,a){c&&c.m(t,a),o(t,n,a),s=!0},p(t,s){8&s&&(r=Object.keys(t[3]).length>0),r?c?(c.p(t,s),8&s&&e(c,1)):(c=A(t),c.c(),e(c,1),c.m(n.parentNode,n)):c&&(B(),b(c,1,1,(()=>{c=null})),$())},i(t){s||(e(c),s=!0)},o(t){b(c),s=!1},d(t){c&&c.d(t),t&&g(n)}}}function G(t){let n,s,a,S,E,x,_,H,R,C,I,L,V,U,J,q,A,P,z,F,G,M,Q,K,X,Y,Z,tt,nt,st,at,ot,et,rt,ct,lt,it,ft,ut,dt,gt,ht,mt,pt,vt,wt,St,bt;s=new D({});let kt="configurations"in t[0]&&W(t);return{c(){n=l(),i(s.$$.fragment),a=l(),S=r("hr"),E=l(),x=r("div"),_=r("h1"),H=r("b"),R=c("Simulation"),C=l(),I=r("hr"),L=l(),V=r("h4"),U=c("Scenario: "),J=c(t[1]),q=c(" Number of Containers: "),A=c(t[2]),P=c("."),z=l(),F=r("div"),G=r("div"),M=r("button"),Q=c("Start Simulation"),K=l(),X=r("div"),Y=r("button"),Z=c("Stop Simulation"),tt=l(),nt=r("div"),st=r("button"),at=c("Reset WS Connection"),ot=l(),et=r("hr"),rt=l(),ct=r("section"),lt=r("h3"),it=c("Application Logs"),ft=l(),ut=r("button"),dt=c("Clear Logs"),gt=l(),kt&&kt.c(),ht=l(),mt=r("br"),pt=l(),vt=r("hr"),this.h()},l(o){N('[data-svelte="svelte-1smsifb"]',document.head).forEach(g),n=h(o),m(s.$$.fragment,o),a=h(o),S=f(o,"HR",{class:!0}),E=h(o),x=f(o,"DIV",{class:!0});var e=u(x);_=f(e,"H1",{class:!0,style:!0});var r=u(_);H=f(r,"B",{});var c=u(H);R=d(c,"Simulation"),c.forEach(g),r.forEach(g),e.forEach(g),C=h(o),I=f(o,"HR",{class:!0}),L=h(o),V=f(o,"H4",{});var l=u(V);U=d(l,"Scenario: "),J=d(l,t[1]),q=d(l," Number of Containers: "),A=d(l,t[2]),P=d(l,"."),l.forEach(g),z=h(o),F=f(o,"DIV",{class:!0});var i=u(F);G=f(i,"DIV",{class:!0});var p=u(G);M=f(p,"BUTTON",{class:!0});var v=u(M);Q=d(v,"Start Simulation"),v.forEach(g),p.forEach(g),K=h(i),X=f(i,"DIV",{class:!0});var w=u(X);Y=f(w,"BUTTON",{class:!0});var b=u(Y);Z=d(b,"Stop Simulation"),b.forEach(g),w.forEach(g),tt=h(i),nt=f(i,"DIV",{class:!0});var k=u(nt);st=f(k,"BUTTON",{class:!0});var $=u(st);at=d($,"Reset WS Connection"),$.forEach(g),k.forEach(g),i.forEach(g),ot=h(o),et=f(o,"HR",{class:!0}),rt=h(o),ct=f(o,"SECTION",{class:!0});var O=u(ct);lt=f(O,"H3",{});var T=u(lt);it=d(T,"Application Logs"),T.forEach(g),O.forEach(g),ft=h(o),ut=f(o,"BUTTON",{class:!0});var j=u(ut);dt=d(j,"Clear Logs"),j.forEach(g),gt=h(o),kt&&kt.l(o),ht=h(o),mt=f(o,"BR",{}),pt=h(o),vt=f(o,"HR",{class:!0}),this.h()},h(){document.title="Simulation",O(S,"class","svelte-drd2kv"),O(_,"class","w3-text-yellow"),T(_,"text-shadow","1px 1px 0 #444"),O(x,"class","w3-panel w3-blue"),O(I,"class","svelte-drd2kv"),O(M,"class","w3-col w3-input w3-border"),O(G,"class","w3-third"),O(Y,"class","w3-col w3-input w3-border"),O(X,"class","w3-third"),O(st,"class","w3-col w3-input w3-border"),O(nt,"class","w3-third"),O(F,"class","w3-row w3-section"),O(et,"class","svelte-drd2kv"),O(ct,"class","page-headline"),O(ut,"class","w3-col w3-input w3-border w3-button"),O(vt,"class","svelte-drd2kv")},m(e,r){o(e,n,r),v(s,e,r),o(e,a,r),o(e,S,r),o(e,E,r),o(e,x,r),p(x,_),p(_,H),p(H,R),o(e,C,r),o(e,I,r),o(e,L,r),o(e,V,r),p(V,U),p(V,J),p(V,q),p(V,A),p(V,P),o(e,z,r),o(e,F,r),p(F,G),p(G,M),p(M,Q),p(F,K),p(F,X),p(X,Y),p(Y,Z),p(F,tt),p(F,nt),p(nt,st),p(st,at),o(e,ot,r),o(e,et,r),o(e,rt,r),o(e,ct,r),p(ct,lt),p(lt,it),o(e,ft,r),o(e,ut,r),p(ut,dt),o(e,gt,r),kt&&kt.m(e,r),o(e,ht,r),o(e,mt,r),o(e,pt,r),o(e,vt,r),wt=!0,St||(bt=[j(M,"click",t[7]),j(Y,"click",t[8]),j(st,"click",t[9]),j(ut,"click",t[4])],St=!0)},p(t,[n]){(!wt||2&n)&&w(J,t[1]),(!wt||4&n)&&w(A,t[2]),"configurations"in t[0]?kt?(kt.p(t,n),1&n&&e(kt,1)):(kt=W(t),kt.c(),e(kt,1),kt.m(ht.parentNode,ht)):kt&&(B(),b(kt,1,1,(()=>{kt=null})),$())},i(t){wt||(e(s.$$.fragment,t),e(kt),wt=!0)},o(t){b(s.$$.fragment,t),b(kt),wt=!1},d(t){t&&g(n),k(s,t),t&&g(a),t&&g(S),t&&g(E),t&&g(x),t&&g(C),t&&g(I),t&&g(L),t&&g(V),t&&g(z),t&&g(F),t&&g(ot),t&&g(et),t&&g(rt),t&&g(ct),t&&g(ft),t&&g(ut),t&&g(gt),kt&&kt.d(t),t&&g(ht),t&&g(mt),t&&g(pt),t&&g(vt),St=!1,y(bt)}}}function M(t,n,s){let a=[],o={};const e=V.subscribe((t=>{a=t})),r=U.subscribe((t=>{s(0,o=t)}));let c=[];x((()=>{e(),r();for(let t=0;t<c.length;t++)c[t].close()}));let l="Please create and select a scenario before starting the simulation.",i=!1,f=0,u=[],d={};function g(){for(const[t,n]of Object.entries(d))s(3,d[t]=[],d)}async function h(t){if(!i)return void I.danger("please create and activate a scenario first.");"start"==t&&g(),console.log("start or stop simulation"),L("/simulation","POST",{command:t,configs:o},(function(t){t.data&&console.log("response of simulation",t.data)}))}function m(){for(var t=0;t<c.length;t++)ws=c[t],ws.close()}c=[],_((async()=>{for(let n=0;n<a.length;n++)a[n].activated&&(s(1,l=a[n].name),i=!0);"configurations"in o&&s(2,f=o.configurations.length),console.log("scenarios",a),console.log("scenario_configurations",o);for(var t=0;t<f;t++){s(3,d[t.toString()]=[],d);let n="ws://localhost:8000/simulation/ws/"+t.toString(),a=new WebSocket(n);a.onopen=function(){window.console.log("Successfully connected to the echo websocket server...")},a.onmessage=function(t){let n=JSON.parse(t.data);console.log(n,"printing JSON now");let a=n.client_index,o=JSON.parse(n.data);console.log("containerData",o),"status"in o?u[a]=o.status:s(3,d[a]=[...d[a],o],d)},c.push(a)}console.log(d,"ws_data printing")}));return[o,l,f,d,g,h,m,()=>h("start"),()=>h("stop"),()=>m(),function(n,a){t.$$.not_equal(d[a.toString()],n)&&(d[a.toString()]=n,s(3,d))}]}export default class extends t{constructor(t){super(),n(this,t,M,G,s,{})}}
