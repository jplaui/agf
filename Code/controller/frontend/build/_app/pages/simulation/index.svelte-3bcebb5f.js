import{S as t,i as n,s as o,l as a,f as s,v as e,t as r,k as l,g as i,n as c,j as f,m as u,o as g,a5 as d,r as m,w as h,d as p,u as w,M as v,e as S,L as b,c as k,a as $,b as N,N as E,F as O,G as j,h as y,Q as T,R as x,z as _,B,a3 as H,a4 as R}from"../../chunks/vendor-5cf7a4b5.js";import{T as C}from"../../chunks/index-a1695e4a.js";import{T as D,n as I,a as L}from"../../chunks/requests-f597ce78.js";import{s as V,a as J}from"../../chunks/store-f8ef346b.js";function U(t,n,o){const a=t.slice();return a[17]=n[o],a[18]=n,a[19]=o,a}function q(t){let n,o,r=t[0].configurations.length>0&&A(t);return{c(){r&&r.c(),n=a()},l(t){r&&r.l(t),n=a()},m(t,a){r&&r.m(t,a),s(t,n,a),o=!0},p(t,o){t[0].configurations.length>0?r?(r.p(t,o),1&o&&e(r,1)):(r=A(t),r.c(),e(r,1),r.m(n.parentNode,n)):r&&(B(),m(r,1,1,(()=>{r=null})),w())},i(t){o||(e(r),o=!0)},o(t){m(r),o=!1},d(t){r&&r.d(t),t&&p(n)}}}function A(t){let n,o,r=t[0].configurations,l=[];for(let a=0;a<r.length;a+=1)l[a]=G(U(t,r,a));const i=t=>m(l[t],1,1,(()=>{l[t]=null}));return{c(){for(let t=0;t<l.length;t+=1)l[t].c();n=a()},l(t){for(let n=0;n<l.length;n+=1)l[n].l(t);n=a()},m(t,a){for(let n=0;n<l.length;n+=1)l[n].m(t,a);s(t,n,a),o=!0},p(t,o){if(9&o){let a;for(r=t[0].configurations,a=0;a<r.length;a+=1){const s=U(t,r,a);l[a]?(l[a].p(s,o),e(l[a],1)):(l[a]=G(s),l[a].c(),e(l[a],1),l[a].m(n.parentNode,n))}for(B(),a=r.length;a<l.length;a+=1)i(a);w()}},i(t){if(!o){for(let t=0;t<r.length;t+=1)e(l[t]);o=!0}},o(t){l=l.filter(Boolean);for(let n=0;n<l.length;n+=1)m(l[n]);o=!1},d(t){v(l,t),t&&p(n)}}}function P(t){let n,o,r=t[19].toString()in t[3],l=r&&z(t);return{c(){l&&l.c(),n=a()},l(t){l&&l.l(t),n=a()},m(t,a){l&&l.m(t,a),s(t,n,a),o=!0},p(t,o){8&o&&(r=t[19].toString()in t[3]),r?l?(l.p(t,o),8&o&&e(l,1)):(l=z(t),l.c(),e(l,1),l.m(n.parentNode,n)):l&&(B(),m(l,1,1,(()=>{l=null})),w())},i(t){o||(e(l),o=!0)},o(t){m(l),o=!1},d(t){l&&l.d(t),t&&p(n)}}}function z(t){let n,o,r=t[3][t[19].toString()].length>0,l=r&&F(t);return{c(){l&&l.c(),n=a()},l(t){l&&l.l(t),n=a()},m(t,a){l&&l.m(t,a),s(t,n,a),o=!0},p(t,o){8&o&&(r=t[3][t[19].toString()].length>0),r?l?(l.p(t,o),8&o&&e(l,1)):(l=F(t),l.c(),e(l,1),l.m(n.parentNode,n)):l&&(B(),m(l,1,1,(()=>{l=null})),w())},i(t){o||(e(l),o=!0)},o(t){m(l),o=!1},d(t){l&&l.d(t),t&&p(n)}}}function F(t){let n,o,a,r;function i(n){t[8](n,t[19])}let w={title:t[17].container_info.name,headers:Object.keys(t[3][t[19].toString()][0])};return void 0!==t[3][t[19].toString()]&&(w.data=t[3][t[19].toString()]),n=new C({props:w}),H.push((()=>R(n,"data",i))),{c(){f(n.$$.fragment),a=l()},l(t){u(n.$$.fragment,t),a=c(t)},m(t,o){g(n,t,o),s(t,a,o),r=!0},p(a,s){t=a;const e={};1&s&&(e.title=t[17].container_info.name),8&s&&(e.headers=Object.keys(t[3][t[19].toString()][0])),!o&&8&s&&(o=!0,e.data=t[3][t[19].toString()],d((()=>o=!1))),n.$set(e)},i(t){r||(e(n.$$.fragment,t),r=!0)},o(t){m(n.$$.fragment,t),r=!1},d(t){h(n,t),t&&p(a)}}}function G(t){let n,o,f,u,g,d=typeof t[19],h=Object.keys(t[3]).length>0,v=h&&P(t);return{c(){n=r("iteration works "),o=r(d),f=l(),v&&v.c(),u=a()},l(t){n=i(t,"iteration works "),o=i(t,d),f=c(t),v&&v.l(t),u=a()},m(t,a){s(t,n,a),s(t,o,a),s(t,f,a),v&&v.m(t,a),s(t,u,a),g=!0},p(t,n){8&n&&(h=Object.keys(t[3]).length>0),h?v?(v.p(t,n),8&n&&e(v,1)):(v=P(t),v.c(),e(v,1),v.m(u.parentNode,u)):v&&(B(),m(v,1,1,(()=>{v=null})),w())},i(t){g||(e(v),g=!0)},o(t){m(v),g=!1},d(t){t&&p(n),t&&p(o),t&&p(f),v&&v.d(t),t&&p(u)}}}function M(t){let n,o,a,d,v,x,_,H,R,C,I,L,V,J,U,A,P,z,F,G,M,Q,W,K,X,Y,Z,tt,nt,ot,at,st,et,rt,lt,it,ct,ft,ut,gt,dt,mt,ht,pt;o=new D({});let wt="configurations"in t[0]&&q(t);return{c(){n=l(),f(o.$$.fragment),a=l(),d=S("hr"),v=l(),x=S("div"),_=S("h1"),H=S("b"),R=r("Simulation"),C=l(),I=S("hr"),L=l(),V=S("h4"),J=r("Scenario: "),U=r(t[1]),A=r(" Number of Containers: "),P=r(t[2]),z=r("."),F=l(),G=S("div"),M=S("div"),Q=S("button"),W=r("Start Simulation"),K=l(),X=S("div"),Y=S("button"),Z=r("Stop Simulation"),tt=l(),nt=S("hr"),ot=l(),at=S("section"),st=S("h3"),et=r("Application Logs"),rt=l(),lt=S("button"),it=r("Clear Logs"),ct=l(),wt&&wt.c(),ft=l(),ut=S("br"),gt=l(),dt=S("hr"),this.h()},l(s){b('[data-svelte="svelte-1smsifb"]',document.head).forEach(p),n=c(s),u(o.$$.fragment,s),a=c(s),d=k(s,"HR",{class:!0}),v=c(s),x=k(s,"DIV",{class:!0});var e=$(x);_=k(e,"H1",{class:!0,style:!0});var r=$(_);H=k(r,"B",{});var l=$(H);R=i(l,"Simulation"),l.forEach(p),r.forEach(p),e.forEach(p),C=c(s),I=k(s,"HR",{class:!0}),L=c(s),V=k(s,"H4",{});var f=$(V);J=i(f,"Scenario: "),U=i(f,t[1]),A=i(f," Number of Containers: "),P=i(f,t[2]),z=i(f,"."),f.forEach(p),F=c(s),G=k(s,"DIV",{class:!0});var g=$(G);M=k(g,"DIV",{class:!0});var m=$(M);Q=k(m,"BUTTON",{class:!0});var h=$(Q);W=i(h,"Start Simulation"),h.forEach(p),m.forEach(p),K=c(g),X=k(g,"DIV",{class:!0});var w=$(X);Y=k(w,"BUTTON",{class:!0});var S=$(Y);Z=i(S,"Stop Simulation"),S.forEach(p),w.forEach(p),g.forEach(p),tt=c(s),nt=k(s,"HR",{class:!0}),ot=c(s),at=k(s,"SECTION",{class:!0});var N=$(at);st=k(N,"H3",{});var E=$(st);et=i(E,"Application Logs"),E.forEach(p),N.forEach(p),rt=c(s),lt=k(s,"BUTTON",{class:!0});var O=$(lt);it=i(O,"Clear Logs"),O.forEach(p),ct=c(s),wt&&wt.l(s),ft=c(s),ut=k(s,"BR",{}),gt=c(s),dt=k(s,"HR",{class:!0}),this.h()},h(){document.title="Simulation",N(d,"class","svelte-drd2kv"),N(_,"class","w3-text-yellow"),E(_,"text-shadow","1px 1px 0 #444"),N(x,"class","w3-panel w3-blue"),N(I,"class","svelte-drd2kv"),N(Q,"class","w3-col w3-input w3-border w3-margin"),N(M,"class","w3-half"),N(Y,"class","w3-col w3-input w3-border w3-margin"),N(X,"class","w3-half"),N(G,"class","w3-row w3-section"),N(nt,"class","svelte-drd2kv"),N(at,"class","page-headline"),N(lt,"class","w3-col w3-input w3-border w3-button"),N(dt,"class","svelte-drd2kv")},m(e,r){s(e,n,r),g(o,e,r),s(e,a,r),s(e,d,r),s(e,v,r),s(e,x,r),O(x,_),O(_,H),O(H,R),s(e,C,r),s(e,I,r),s(e,L,r),s(e,V,r),O(V,J),O(V,U),O(V,A),O(V,P),O(V,z),s(e,F,r),s(e,G,r),O(G,M),O(M,Q),O(Q,W),O(G,K),O(G,X),O(X,Y),O(Y,Z),s(e,tt,r),s(e,nt,r),s(e,ot,r),s(e,at,r),O(at,st),O(st,et),s(e,rt,r),s(e,lt,r),O(lt,it),s(e,ct,r),wt&&wt.m(e,r),s(e,ft,r),s(e,ut,r),s(e,gt,r),s(e,dt,r),mt=!0,ht||(pt=[j(Q,"click",t[6]),j(Y,"click",t[7]),j(lt,"click",t[4])],ht=!0)},p(t,[n]){(!mt||2&n)&&y(U,t[1]),(!mt||4&n)&&y(P,t[2]),"configurations"in t[0]?wt?(wt.p(t,n),1&n&&e(wt,1)):(wt=q(t),wt.c(),e(wt,1),wt.m(ft.parentNode,ft)):wt&&(B(),m(wt,1,1,(()=>{wt=null})),w())},i(t){mt||(e(o.$$.fragment,t),e(wt),mt=!0)},o(t){m(o.$$.fragment,t),m(wt),mt=!1},d(t){t&&p(n),h(o,t),t&&p(a),t&&p(d),t&&p(v),t&&p(x),t&&p(C),t&&p(I),t&&p(L),t&&p(V),t&&p(F),t&&p(G),t&&p(tt),t&&p(nt),t&&p(ot),t&&p(at),t&&p(rt),t&&p(lt),t&&p(ct),wt&&wt.d(t),t&&p(ft),t&&p(ut),t&&p(gt),t&&p(dt),ht=!1,T(pt)}}}function Q(t,n,o){let a=[],s={};const e=V.subscribe((t=>{a=t})),r=J.subscribe((t=>{o(0,s=t)}));let l=[];x((()=>{e(),r();for(let t=0;t<l.length;t++)l[t].close()}));let i="Please create and select a scenario before starting the simulation.",c=!1,f=0,u=[],g={};function d(){for(const[t,n]of Object.entries(g))o(3,g[t]=[],g)}async function m(t){if(!c)return void I.danger("please create and activate a scenario first.");d(),console.log("start or stop simulation"),L("/simulation","POST",{command:t,configs:s},(function(t){t.data&&console.log("response of start simulation",t.data)}))}_((async()=>{for(let n=0;n<a.length;n++)a[n].activated&&(o(1,i=a[n].name),c=!0);"configurations"in s&&o(2,f=s.configurations.length),console.log("scenarios",a),console.log("scenario_configurations",s),l=[];for(var t=0;t<f;t++){o(3,g[t.toString()]=[],g);let n="ws://localhost:8000/simulation/ws/"+s.configurations[t].container_info.name+"/"+s.configurations[t].container_info.ports.split(",")[0].split("/")[0]+"/"+t.toString();console.log("ws url:",n);let a=new WebSocket(n);a.onopen=function(){window.console.log("Successfully connected to the echo websocket server...")},a.onmessage=function(t){window.console.log(t,"received ws message");let n=JSON.parse(t.data);console.log(n,"printing JSON now");let a=n.client_index,s=JSON.parse(n.data);o(3,g[a]=[...g[a],s],g),console.log("containerData",s),"status"in s&&(u[a]=s.status),console.log(g,"ws_data printing")},l.push(a)}}));return[s,i,f,g,d,m,()=>m("start"),()=>m("stop"),function(n,a){t.$$.not_equal(g[a.toString()],n)&&(g[a.toString()]=n,o(3,g))}]}export default class extends t{constructor(t){super(),n(this,t,Q,M,o,{})}}
