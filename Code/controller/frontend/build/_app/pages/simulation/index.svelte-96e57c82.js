import{S as t,i as s,s as n,l as o,f as a,v as e,t as r,g as l,j as c,k as i,m as f,n as u,o as g,a5 as d,r as h,w as m,d as p,u as w,M as v,e as S,L as b,c as k,a as $,b as E,N,F as O,G as j,h as T,Q as x,R as y,z as _,B,a3 as H,a4 as R}from"../../chunks/vendor-5cf7a4b5.js";import{T as C}from"../../chunks/index-a1695e4a.js";import{T as D,n as I,a as L}from"../../chunks/requests-f597ce78.js";import{s as V,a as J}from"../../chunks/store-f8ef346b.js";function U(t,s,n){const o=t.slice();return o[17]=s[n],o[18]=s,o[19]=n,o}function q(t){let s,n,r=t[0].configurations.length>0&&A(t);return{c(){r&&r.c(),s=o()},l(t){r&&r.l(t),s=o()},m(t,o){r&&r.m(t,o),a(t,s,o),n=!0},p(t,n){t[0].configurations.length>0?r?(r.p(t,n),1&n&&e(r,1)):(r=A(t),r.c(),e(r,1),r.m(s.parentNode,s)):r&&(B(),h(r,1,1,(()=>{r=null})),w())},i(t){n||(e(r),n=!0)},o(t){h(r),n=!1},d(t){r&&r.d(t),t&&p(s)}}}function A(t){let s,n,r=t[0].configurations,l=[];for(let o=0;o<r.length;o+=1)l[o]=z(U(t,r,o));const c=t=>h(l[t],1,1,(()=>{l[t]=null}));return{c(){for(let t=0;t<l.length;t+=1)l[t].c();s=o()},l(t){for(let s=0;s<l.length;s+=1)l[s].l(t);s=o()},m(t,o){for(let s=0;s<l.length;s+=1)l[s].m(t,o);a(t,s,o),n=!0},p(t,n){if(9&n){let o;for(r=t[0].configurations,o=0;o<r.length;o+=1){const a=U(t,r,o);l[o]?(l[o].p(a,n),e(l[o],1)):(l[o]=z(a),l[o].c(),e(l[o],1),l[o].m(s.parentNode,s))}for(B(),o=r.length;o<l.length;o+=1)c(o);w()}},i(t){if(!n){for(let t=0;t<r.length;t+=1)e(l[t]);n=!0}},o(t){l=l.filter(Boolean);for(let s=0;s<l.length;s+=1)h(l[s]);n=!1},d(t){v(l,t),t&&p(s)}}}function P(t){let s,n,o,r;function l(s){t[8](s,t[19])}let w={title:t[17].container_info.name,headers:Object.keys(t[3][t[19].toString()])};return void 0!==t[3][t[19].toString()]&&(w.data=t[3][t[19].toString()]),s=new C({props:w}),H.push((()=>R(s,"data",l))),{c(){c(s.$$.fragment),o=i()},l(t){f(s.$$.fragment,t),o=u(t)},m(t,n){g(s,t,n),a(t,o,n),r=!0},p(o,a){t=o;const e={};1&a&&(e.title=t[17].container_info.name),8&a&&(e.headers=Object.keys(t[3][t[19].toString()])),!n&&8&a&&(n=!0,e.data=t[3][t[19].toString()],d((()=>n=!1))),s.$set(e)},i(t){r||(e(s.$$.fragment,t),r=!0)},o(t){h(s.$$.fragment,t),r=!1},d(t){m(s,t),t&&p(o)}}}function z(t){let s,n,c,i=Object.keys(t[3]).length>0,f=i&&P(t);return{c(){s=r("iteration works\n\n\t\t\t"),f&&f.c(),n=o()},l(t){s=l(t,"iteration works\n\n\t\t\t"),f&&f.l(t),n=o()},m(t,o){a(t,s,o),f&&f.m(t,o),a(t,n,o),c=!0},p(t,s){8&s&&(i=Object.keys(t[3]).length>0),i?f?(f.p(t,s),8&s&&e(f,1)):(f=P(t),f.c(),e(f,1),f.m(n.parentNode,n)):f&&(B(),h(f,1,1,(()=>{f=null})),w())},i(t){c||(e(f),c=!0)},o(t){h(f),c=!1},d(t){t&&p(s),f&&f.d(t),t&&p(n)}}}function F(t){let s,n,o,d,v,y,_,H,R,C,I,L,V,J,U,A,P,z,F,G,M,Q,W,K,X,Y,Z,tt,st,nt,ot,at,et,rt,lt,ct,it,ft,ut,gt,dt,ht,mt,pt;n=new D({});let wt="configurations"in t[0]&&q(t);return{c(){s=i(),c(n.$$.fragment),o=i(),d=S("hr"),v=i(),y=S("div"),_=S("h1"),H=S("b"),R=r("Simulation"),C=i(),I=S("hr"),L=i(),V=S("h4"),J=r("Scenario: "),U=r(t[1]),A=r(" Number of Containers: "),P=r(t[2]),z=r("."),F=i(),G=S("div"),M=S("div"),Q=S("button"),W=r("Start Simulation"),K=i(),X=S("div"),Y=S("button"),Z=r("Stop Simulation"),tt=i(),st=S("hr"),nt=i(),ot=S("section"),at=S("h3"),et=r("Application Logs"),rt=i(),lt=S("button"),ct=r("Clear Logs"),it=i(),wt&&wt.c(),ft=i(),ut=S("br"),gt=i(),dt=S("hr"),this.h()},l(a){b('[data-svelte="svelte-1smsifb"]',document.head).forEach(p),s=u(a),f(n.$$.fragment,a),o=u(a),d=k(a,"HR",{class:!0}),v=u(a),y=k(a,"DIV",{class:!0});var e=$(y);_=k(e,"H1",{class:!0,style:!0});var r=$(_);H=k(r,"B",{});var c=$(H);R=l(c,"Simulation"),c.forEach(p),r.forEach(p),e.forEach(p),C=u(a),I=k(a,"HR",{class:!0}),L=u(a),V=k(a,"H4",{});var i=$(V);J=l(i,"Scenario: "),U=l(i,t[1]),A=l(i," Number of Containers: "),P=l(i,t[2]),z=l(i,"."),i.forEach(p),F=u(a),G=k(a,"DIV",{class:!0});var g=$(G);M=k(g,"DIV",{class:!0});var h=$(M);Q=k(h,"BUTTON",{class:!0});var m=$(Q);W=l(m,"Start Simulation"),m.forEach(p),h.forEach(p),K=u(g),X=k(g,"DIV",{class:!0});var w=$(X);Y=k(w,"BUTTON",{class:!0});var S=$(Y);Z=l(S,"Stop Simulation"),S.forEach(p),w.forEach(p),g.forEach(p),tt=u(a),st=k(a,"HR",{class:!0}),nt=u(a),ot=k(a,"SECTION",{class:!0});var E=$(ot);at=k(E,"H3",{});var N=$(at);et=l(N,"Application Logs"),N.forEach(p),E.forEach(p),rt=u(a),lt=k(a,"BUTTON",{class:!0});var O=$(lt);ct=l(O,"Clear Logs"),O.forEach(p),it=u(a),wt&&wt.l(a),ft=u(a),ut=k(a,"BR",{}),gt=u(a),dt=k(a,"HR",{class:!0}),this.h()},h(){document.title="Simulation",E(d,"class","svelte-drd2kv"),E(_,"class","w3-text-yellow"),N(_,"text-shadow","1px 1px 0 #444"),E(y,"class","w3-panel w3-blue"),E(I,"class","svelte-drd2kv"),E(Q,"class","w3-col w3-input w3-border w3-margin"),E(M,"class","w3-half"),E(Y,"class","w3-col w3-input w3-border w3-margin"),E(X,"class","w3-half"),E(G,"class","w3-row w3-section"),E(st,"class","svelte-drd2kv"),E(ot,"class","page-headline"),E(lt,"class","w3-col w3-input w3-border w3-button"),E(dt,"class","svelte-drd2kv")},m(e,r){a(e,s,r),g(n,e,r),a(e,o,r),a(e,d,r),a(e,v,r),a(e,y,r),O(y,_),O(_,H),O(H,R),a(e,C,r),a(e,I,r),a(e,L,r),a(e,V,r),O(V,J),O(V,U),O(V,A),O(V,P),O(V,z),a(e,F,r),a(e,G,r),O(G,M),O(M,Q),O(Q,W),O(G,K),O(G,X),O(X,Y),O(Y,Z),a(e,tt,r),a(e,st,r),a(e,nt,r),a(e,ot,r),O(ot,at),O(at,et),a(e,rt,r),a(e,lt,r),O(lt,ct),a(e,it,r),wt&&wt.m(e,r),a(e,ft,r),a(e,ut,r),a(e,gt,r),a(e,dt,r),ht=!0,mt||(pt=[j(Q,"click",t[6]),j(Y,"click",t[7]),j(lt,"click",t[4])],mt=!0)},p(t,[s]){(!ht||2&s)&&T(U,t[1]),(!ht||4&s)&&T(P,t[2]),"configurations"in t[0]?wt?(wt.p(t,s),1&s&&e(wt,1)):(wt=q(t),wt.c(),e(wt,1),wt.m(ft.parentNode,ft)):wt&&(B(),h(wt,1,1,(()=>{wt=null})),w())},i(t){ht||(e(n.$$.fragment,t),e(wt),ht=!0)},o(t){h(n.$$.fragment,t),h(wt),ht=!1},d(t){t&&p(s),m(n,t),t&&p(o),t&&p(d),t&&p(v),t&&p(y),t&&p(C),t&&p(I),t&&p(L),t&&p(V),t&&p(F),t&&p(G),t&&p(tt),t&&p(st),t&&p(nt),t&&p(ot),t&&p(rt),t&&p(lt),t&&p(it),wt&&wt.d(t),t&&p(ft),t&&p(ut),t&&p(gt),t&&p(dt),mt=!1,x(pt)}}}function G(t,s,n){let o=[],a={};const e=V.subscribe((t=>{o=t})),r=J.subscribe((t=>{n(0,a=t)}));let l=[];y((()=>{e(),r();for(let t=0;t<l.length;t++)l[t].close()}));let c="Please create and select a scenario before starting the simulation.",i=!1,f=0,u=[],g={};function d(){for(const[t,s]of Object.entries(g))n(3,g[t]=[],g)}async function h(t){if(!i)return void I.danger("please create and activate a scenario first.");d(),console.log("start or stop simulation"),L("/simulation","POST",{command:t,configs:a},(function(t){t.data&&console.log("response of start simulation",t.data)}))}_((async()=>{for(let s=0;s<o.length;s++)o[s].activated&&(n(1,c=o[s].name),i=!0);"configurations"in a&&n(2,f=a.configurations.length),console.log("scenarios",o),console.log("scenario_configurations",a),l=[];for(var t=0;t<f;t++){n(3,g[t.toString()]=[],g);let s=a.configurations[t].container_info.name,o=a.configurations[t].container_info.ports.split(",")[0].split("/")[0];console.log("sending to controller websocket: index",t,"name",s,"port",o);let e="ws://localhost:8000/simulation/ws/"+s+"/"+o+"/"+t.toString();console.log("ws url:",e);let r=new WebSocket(e);r.onopen=function(){window.console.log("Successfully connected to the echo websocket server...")},r.onmessage=function(t){window.console.log(t,"received ws message");let s=JSON.parse(t.data);console.log(s,"printing JSON now");let n=s.client_index,o=JSON.parse(s.data);g[n].push(o),console.log("containerData",o),"status"in o&&(u[n]=o.status),console.log(g,"ws_data printing")},l.push(r)}}));return[a,c,f,g,d,h,()=>h("start"),()=>h("stop"),function(s,o){t.$$.not_equal(g[o.toString()],s)&&(g[o.toString()]=s,n(3,g))}]}export default class extends t{constructor(t){super(),s(this,t,G,F,n,{})}}