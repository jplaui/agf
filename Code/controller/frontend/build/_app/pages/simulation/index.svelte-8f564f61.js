import{S as t,i as n,s as a,l as o,f as s,v as e,e as r,t as l,k as c,j as i,c as f,a as u,g,d as h,n as m,m as d,F as p,o as v,h as S,a5 as w,r as b,w as k,u as $,M as N,L as E,b as O,N as j,G as T,Q as y,R as x,z as H,B as _,a3 as B,a4 as R}from"../../chunks/vendor-5cf7a4b5.js";import{T as C}from"../../chunks/index-6469371a.js";import{T as D,n as I}from"../../chunks/Toast-8167f713.js";import{a as L}from"../../chunks/requests-ba32cc6e.js";import{s as V,a as J}from"../../chunks/store-f8ef346b.js";function U(t,n,a){const o=t.slice();return o[17]=n[a],o[18]=n,o[19]=a,o}function q(t){let n,a,r=t[0].configurations.length>0&&A(t);return{c(){r&&r.c(),n=o()},l(t){r&&r.l(t),n=o()},m(t,o){r&&r.m(t,o),s(t,n,o),a=!0},p(t,a){t[0].configurations.length>0?r?(r.p(t,a),1&a&&e(r,1)):(r=A(t),r.c(),e(r,1),r.m(n.parentNode,n)):r&&(_(),b(r,1,1,(()=>{r=null})),$())},i(t){a||(e(r),a=!0)},o(t){b(r),a=!1},d(t){r&&r.d(t),t&&h(n)}}}function A(t){let n,a,r=t[0].configurations,l=[];for(let o=0;o<r.length;o+=1)l[o]=G(U(t,r,o));const c=t=>b(l[t],1,1,(()=>{l[t]=null}));return{c(){for(let t=0;t<l.length;t+=1)l[t].c();n=o()},l(t){for(let n=0;n<l.length;n+=1)l[n].l(t);n=o()},m(t,o){for(let n=0;n<l.length;n+=1)l[n].m(t,o);s(t,n,o),a=!0},p(t,a){if(9&a){let o;for(r=t[0].configurations,o=0;o<r.length;o+=1){const s=U(t,r,o);l[o]?(l[o].p(s,a),e(l[o],1)):(l[o]=G(s),l[o].c(),e(l[o],1),l[o].m(n.parentNode,n))}for(_(),o=r.length;o<l.length;o+=1)c(o);$()}},i(t){if(!a){for(let t=0;t<r.length;t+=1)e(l[t]);a=!0}},o(t){l=l.filter(Boolean);for(let n=0;n<l.length;n+=1)b(l[n]);a=!1},d(t){N(l,t),t&&h(n)}}}function P(t){let n,a,r=t[19].toString()in t[3],l=r&&z(t);return{c(){l&&l.c(),n=o()},l(t){l&&l.l(t),n=o()},m(t,o){l&&l.m(t,o),s(t,n,o),a=!0},p(t,a){8&a&&(r=t[19].toString()in t[3]),r?l?(l.p(t,a),8&a&&e(l,1)):(l=z(t),l.c(),e(l,1),l.m(n.parentNode,n)):l&&(_(),b(l,1,1,(()=>{l=null})),$())},i(t){a||(e(l),a=!0)},o(t){b(l),a=!1},d(t){l&&l.d(t),t&&h(n)}}}function z(t){let n,a,r=t[3][t[19].toString()].length>0,l=r&&F(t);return{c(){l&&l.c(),n=o()},l(t){l&&l.l(t),n=o()},m(t,o){l&&l.m(t,o),s(t,n,o),a=!0},p(t,a){8&a&&(r=t[3][t[19].toString()].length>0),r?l?(l.p(t,a),8&a&&e(l,1)):(l=F(t),l.c(),e(l,1),l.m(n.parentNode,n)):l&&(_(),b(l,1,1,(()=>{l=null})),$())},i(t){a||(e(l),a=!0)},o(t){b(l),a=!1},d(t){l&&l.d(t),t&&h(n)}}}function F(t){let n,a,o,$,N,E,O,j=t[17].container_info.name+"";function T(n){t[8](n,t[19])}let y={title:t[17].container_info.name,headers:Object.keys(t[3][t[19].toString()][0])};return void 0!==t[3][t[19].toString()]&&(y.data=t[3][t[19].toString()]),$=new C({props:y}),B.push((()=>R($,"data",T))),{c(){n=r("h5"),a=l(j),o=c(),i($.$$.fragment),E=c()},l(t){n=f(t,"H5",{});var s=u(n);a=g(s,j),s.forEach(h),o=m(t),d($.$$.fragment,t),E=m(t)},m(t,e){s(t,n,e),p(n,a),s(t,o,e),v($,t,e),s(t,E,e),O=!0},p(n,o){t=n,(!O||1&o)&&j!==(j=t[17].container_info.name+"")&&S(a,j);const s={};1&o&&(s.title=t[17].container_info.name),8&o&&(s.headers=Object.keys(t[3][t[19].toString()][0])),!N&&8&o&&(N=!0,s.data=t[3][t[19].toString()],w((()=>N=!1))),$.$set(s)},i(t){O||(e($.$$.fragment,t),O=!0)},o(t){b($.$$.fragment,t),O=!1},d(t){t&&h(n),t&&h(o),k($,t),t&&h(E)}}}function G(t){let n,a,r=Object.keys(t[3]).length>0,l=r&&P(t);return{c(){l&&l.c(),n=o()},l(t){l&&l.l(t),n=o()},m(t,o){l&&l.m(t,o),s(t,n,o),a=!0},p(t,a){8&a&&(r=Object.keys(t[3]).length>0),r?l?(l.p(t,a),8&a&&e(l,1)):(l=P(t),l.c(),e(l,1),l.m(n.parentNode,n)):l&&(_(),b(l,1,1,(()=>{l=null})),$())},i(t){a||(e(l),a=!0)},o(t){b(l),a=!1},d(t){l&&l.d(t),t&&h(n)}}}function M(t){let n,a,o,w,N,x,H,B,R,C,I,L,V,J,U,A,P,z,F,G,M,Q,W,K,X,Y,Z,tt,nt,at,ot,st,et,rt,lt,ct,it,ft,ut,gt,ht,mt,dt,pt;a=new D({});let vt="configurations"in t[0]&&q(t);return{c(){n=c(),i(a.$$.fragment),o=c(),w=r("hr"),N=c(),x=r("div"),H=r("h1"),B=r("b"),R=l("Simulation"),C=c(),I=r("hr"),L=c(),V=r("h4"),J=l("Scenario: "),U=l(t[1]),A=l(" Number of Containers: "),P=l(t[2]),z=l("."),F=c(),G=r("div"),M=r("div"),Q=r("button"),W=l("Start Simulation"),K=c(),X=r("div"),Y=r("button"),Z=l("Stop Simulation"),tt=c(),nt=r("hr"),at=c(),ot=r("section"),st=r("h3"),et=l("Application Logs"),rt=c(),lt=r("button"),ct=l("Clear Logs"),it=c(),vt&&vt.c(),ft=c(),ut=r("br"),gt=c(),ht=r("hr"),this.h()},l(s){E('[data-svelte="svelte-1smsifb"]',document.head).forEach(h),n=m(s),d(a.$$.fragment,s),o=m(s),w=f(s,"HR",{class:!0}),N=m(s),x=f(s,"DIV",{class:!0});var e=u(x);H=f(e,"H1",{class:!0,style:!0});var r=u(H);B=f(r,"B",{});var l=u(B);R=g(l,"Simulation"),l.forEach(h),r.forEach(h),e.forEach(h),C=m(s),I=f(s,"HR",{class:!0}),L=m(s),V=f(s,"H4",{});var c=u(V);J=g(c,"Scenario: "),U=g(c,t[1]),A=g(c," Number of Containers: "),P=g(c,t[2]),z=g(c,"."),c.forEach(h),F=m(s),G=f(s,"DIV",{class:!0});var i=u(G);M=f(i,"DIV",{class:!0});var p=u(M);Q=f(p,"BUTTON",{class:!0});var v=u(Q);W=g(v,"Start Simulation"),v.forEach(h),p.forEach(h),K=m(i),X=f(i,"DIV",{class:!0});var S=u(X);Y=f(S,"BUTTON",{class:!0});var b=u(Y);Z=g(b,"Stop Simulation"),b.forEach(h),S.forEach(h),i.forEach(h),tt=m(s),nt=f(s,"HR",{class:!0}),at=m(s),ot=f(s,"SECTION",{class:!0});var k=u(ot);st=f(k,"H3",{});var $=u(st);et=g($,"Application Logs"),$.forEach(h),k.forEach(h),rt=m(s),lt=f(s,"BUTTON",{class:!0});var O=u(lt);ct=g(O,"Clear Logs"),O.forEach(h),it=m(s),vt&&vt.l(s),ft=m(s),ut=f(s,"BR",{}),gt=m(s),ht=f(s,"HR",{class:!0}),this.h()},h(){document.title="Simulation",O(w,"class","svelte-drd2kv"),O(H,"class","w3-text-yellow"),j(H,"text-shadow","1px 1px 0 #444"),O(x,"class","w3-panel w3-blue"),O(I,"class","svelte-drd2kv"),O(Q,"class","w3-col w3-input w3-border w3-margin"),O(M,"class","w3-half"),O(Y,"class","w3-col w3-input w3-border w3-margin"),O(X,"class","w3-half"),O(G,"class","w3-row w3-section"),O(nt,"class","svelte-drd2kv"),O(ot,"class","page-headline"),O(lt,"class","w3-col w3-input w3-border w3-button"),O(ht,"class","svelte-drd2kv")},m(e,r){s(e,n,r),v(a,e,r),s(e,o,r),s(e,w,r),s(e,N,r),s(e,x,r),p(x,H),p(H,B),p(B,R),s(e,C,r),s(e,I,r),s(e,L,r),s(e,V,r),p(V,J),p(V,U),p(V,A),p(V,P),p(V,z),s(e,F,r),s(e,G,r),p(G,M),p(M,Q),p(Q,W),p(G,K),p(G,X),p(X,Y),p(Y,Z),s(e,tt,r),s(e,nt,r),s(e,at,r),s(e,ot,r),p(ot,st),p(st,et),s(e,rt,r),s(e,lt,r),p(lt,ct),s(e,it,r),vt&&vt.m(e,r),s(e,ft,r),s(e,ut,r),s(e,gt,r),s(e,ht,r),mt=!0,dt||(pt=[T(Q,"click",t[6]),T(Y,"click",t[7]),T(lt,"click",t[4])],dt=!0)},p(t,[n]){(!mt||2&n)&&S(U,t[1]),(!mt||4&n)&&S(P,t[2]),"configurations"in t[0]?vt?(vt.p(t,n),1&n&&e(vt,1)):(vt=q(t),vt.c(),e(vt,1),vt.m(ft.parentNode,ft)):vt&&(_(),b(vt,1,1,(()=>{vt=null})),$())},i(t){mt||(e(a.$$.fragment,t),e(vt),mt=!0)},o(t){b(a.$$.fragment,t),b(vt),mt=!1},d(t){t&&h(n),k(a,t),t&&h(o),t&&h(w),t&&h(N),t&&h(x),t&&h(C),t&&h(I),t&&h(L),t&&h(V),t&&h(F),t&&h(G),t&&h(tt),t&&h(nt),t&&h(at),t&&h(ot),t&&h(rt),t&&h(lt),t&&h(it),vt&&vt.d(t),t&&h(ft),t&&h(ut),t&&h(gt),t&&h(ht),dt=!1,y(pt)}}}function Q(t,n,a){let o=[],s={};const e=V.subscribe((t=>{o=t})),r=J.subscribe((t=>{a(0,s=t)}));let l=[];x((()=>{e(),r();for(let t=0;t<l.length;t++)l[t].close()}));let c="Please create and select a scenario before starting the simulation.",i=!1,f=0,u=[],g={};function h(){for(const[t,n]of Object.entries(g))a(3,g[t]=[],g)}async function m(t){if(!i)return void I.danger("please create and activate a scenario first.");"start"==t&&h(),console.log("start or stop simulation"),L("/simulation","POST",{command:t,configs:s},(function(t){t.data&&console.log("response of simulation",t.data)}))}H((async()=>{for(let n=0;n<o.length;n++)o[n].activated&&(a(1,c=o[n].name),i=!0);"configurations"in s&&a(2,f=s.configurations.length),console.log("scenarios",o),console.log("scenario_configurations",s),l=[];for(var t=0;t<f;t++){a(3,g[t.toString()]=[],g);let n="ws://localhost:8000/simulation/ws/"+t.toString(),o=new WebSocket(n);o.onopen=function(){window.console.log("Successfully connected to the echo websocket server...")},o.onmessage=function(t){let n=JSON.parse(t.data);console.log(n,"printing JSON now");let o=n.client_index,s=JSON.parse(n.data);console.log("containerData",s),"status"in s?u[o]=s.status:a(3,g[o]=[...g[o],s],g)},l.push(o)}console.log(g,"ws_data printing")}));return[s,c,f,g,h,m,()=>m("start"),()=>m("stop"),function(n,o){t.$$.not_equal(g[o.toString()],n)&&(g[o.toString()]=n,a(3,g))}]}export default class extends t{constructor(t){super(),n(this,t,Q,M,a,{})}}