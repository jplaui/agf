import{S as t,i as n,s as o,l as a,f as s,v as e,t as r,k as l,g as i,n as c,e as f,j as u,c as g,a as d,d as m,m as h,F as p,o as w,h as v,a5 as S,r as b,w as k,u as $,M as N,L as E,b as O,N as j,G as y,Q as T,R as _,z as x,B as H,a3 as B,a4 as R}from"../../chunks/vendor-5cf7a4b5.js";import{T as C}from"../../chunks/index-a1695e4a.js";import{T as D,n as I,a as L}from"../../chunks/requests-f597ce78.js";import{s as V,a as J}from"../../chunks/store-f8ef346b.js";function U(t,n,o){const a=t.slice();return a[17]=n[o],a[18]=n,a[19]=o,a}function q(t){let n,o,r=t[0].configurations.length>0&&A(t);return{c(){r&&r.c(),n=a()},l(t){r&&r.l(t),n=a()},m(t,a){r&&r.m(t,a),s(t,n,a),o=!0},p(t,o){t[0].configurations.length>0?r?(r.p(t,o),1&o&&e(r,1)):(r=A(t),r.c(),e(r,1),r.m(n.parentNode,n)):r&&(H(),b(r,1,1,(()=>{r=null})),$())},i(t){o||(e(r),o=!0)},o(t){b(r),o=!1},d(t){r&&r.d(t),t&&m(n)}}}function A(t){let n,o,r=t[0].configurations,l=[];for(let a=0;a<r.length;a+=1)l[a]=G(U(t,r,a));const i=t=>b(l[t],1,1,(()=>{l[t]=null}));return{c(){for(let t=0;t<l.length;t+=1)l[t].c();n=a()},l(t){for(let n=0;n<l.length;n+=1)l[n].l(t);n=a()},m(t,a){for(let n=0;n<l.length;n+=1)l[n].m(t,a);s(t,n,a),o=!0},p(t,o){if(9&o){let a;for(r=t[0].configurations,a=0;a<r.length;a+=1){const s=U(t,r,a);l[a]?(l[a].p(s,o),e(l[a],1)):(l[a]=G(s),l[a].c(),e(l[a],1),l[a].m(n.parentNode,n))}for(H(),a=r.length;a<l.length;a+=1)i(a);$()}},i(t){if(!o){for(let t=0;t<r.length;t+=1)e(l[t]);o=!0}},o(t){l=l.filter(Boolean);for(let n=0;n<l.length;n+=1)b(l[n]);o=!1},d(t){N(l,t),t&&m(n)}}}function P(t){let n,o,r=t[19].toString()in t[3],l=r&&z(t);return{c(){l&&l.c(),n=a()},l(t){l&&l.l(t),n=a()},m(t,a){l&&l.m(t,a),s(t,n,a),o=!0},p(t,o){8&o&&(r=t[19].toString()in t[3]),r?l?(l.p(t,o),8&o&&e(l,1)):(l=z(t),l.c(),e(l,1),l.m(n.parentNode,n)):l&&(H(),b(l,1,1,(()=>{l=null})),$())},i(t){o||(e(l),o=!0)},o(t){b(l),o=!1},d(t){l&&l.d(t),t&&m(n)}}}function z(t){let n,o,r=t[3][t[19].toString()].length>0,l=r&&F(t);return{c(){l&&l.c(),n=a()},l(t){l&&l.l(t),n=a()},m(t,a){l&&l.m(t,a),s(t,n,a),o=!0},p(t,o){8&o&&(r=t[3][t[19].toString()].length>0),r?l?(l.p(t,o),8&o&&e(l,1)):(l=F(t),l.c(),e(l,1),l.m(n.parentNode,n)):l&&(H(),b(l,1,1,(()=>{l=null})),$())},i(t){o||(e(l),o=!0)},o(t){b(l),o=!1},d(t){l&&l.d(t),t&&m(n)}}}function F(t){let n,o,a,$,N,E,O,j=t[17].container_info.name+"";function y(n){t[8](n,t[19])}let T={title:t[17].container_info.name,headers:Object.keys(t[3][t[19].toString()][0])};return void 0!==t[3][t[19].toString()]&&(T.data=t[3][t[19].toString()]),$=new C({props:T}),B.push((()=>R($,"data",y))),{c(){n=f("h5"),o=r(j),a=l(),u($.$$.fragment),E=l()},l(t){n=g(t,"H5",{});var s=d(n);o=i(s,j),s.forEach(m),a=c(t),h($.$$.fragment,t),E=c(t)},m(t,e){s(t,n,e),p(n,o),s(t,a,e),w($,t,e),s(t,E,e),O=!0},p(n,a){t=n,(!O||1&a)&&j!==(j=t[17].container_info.name+"")&&v(o,j);const s={};1&a&&(s.title=t[17].container_info.name),8&a&&(s.headers=Object.keys(t[3][t[19].toString()][0])),!N&&8&a&&(N=!0,s.data=t[3][t[19].toString()],S((()=>N=!1))),$.$set(s)},i(t){O||(e($.$$.fragment,t),O=!0)},o(t){b($.$$.fragment,t),O=!1},d(t){t&&m(n),t&&m(a),k($,t),t&&m(E)}}}function G(t){let n,o,f,u,g,d=typeof t[19],h=Object.keys(t[3]).length>0,p=h&&P(t);return{c(){n=r("iteration works "),o=r(d),f=l(),p&&p.c(),u=a()},l(t){n=i(t,"iteration works "),o=i(t,d),f=c(t),p&&p.l(t),u=a()},m(t,a){s(t,n,a),s(t,o,a),s(t,f,a),p&&p.m(t,a),s(t,u,a),g=!0},p(t,n){8&n&&(h=Object.keys(t[3]).length>0),h?p?(p.p(t,n),8&n&&e(p,1)):(p=P(t),p.c(),e(p,1),p.m(u.parentNode,u)):p&&(H(),b(p,1,1,(()=>{p=null})),$())},i(t){g||(e(p),g=!0)},o(t){b(p),g=!1},d(t){t&&m(n),t&&m(o),t&&m(f),p&&p.d(t),t&&m(u)}}}function M(t){let n,o,a,S,N,_,x,B,R,C,I,L,V,J,U,A,P,z,F,G,M,Q,W,K,X,Y,Z,tt,nt,ot,at,st,et,rt,lt,it,ct,ft,ut,gt,dt,mt,ht,pt;o=new D({});let wt="configurations"in t[0]&&q(t);return{c(){n=l(),u(o.$$.fragment),a=l(),S=f("hr"),N=l(),_=f("div"),x=f("h1"),B=f("b"),R=r("Simulation"),C=l(),I=f("hr"),L=l(),V=f("h4"),J=r("Scenario: "),U=r(t[1]),A=r(" Number of Containers: "),P=r(t[2]),z=r("."),F=l(),G=f("div"),M=f("div"),Q=f("button"),W=r("Start Simulation"),K=l(),X=f("div"),Y=f("button"),Z=r("Stop Simulation"),tt=l(),nt=f("hr"),ot=l(),at=f("section"),st=f("h3"),et=r("Application Logs"),rt=l(),lt=f("button"),it=r("Clear Logs"),ct=l(),wt&&wt.c(),ft=l(),ut=f("br"),gt=l(),dt=f("hr"),this.h()},l(s){E('[data-svelte="svelte-1smsifb"]',document.head).forEach(m),n=c(s),h(o.$$.fragment,s),a=c(s),S=g(s,"HR",{class:!0}),N=c(s),_=g(s,"DIV",{class:!0});var e=d(_);x=g(e,"H1",{class:!0,style:!0});var r=d(x);B=g(r,"B",{});var l=d(B);R=i(l,"Simulation"),l.forEach(m),r.forEach(m),e.forEach(m),C=c(s),I=g(s,"HR",{class:!0}),L=c(s),V=g(s,"H4",{});var f=d(V);J=i(f,"Scenario: "),U=i(f,t[1]),A=i(f," Number of Containers: "),P=i(f,t[2]),z=i(f,"."),f.forEach(m),F=c(s),G=g(s,"DIV",{class:!0});var u=d(G);M=g(u,"DIV",{class:!0});var p=d(M);Q=g(p,"BUTTON",{class:!0});var w=d(Q);W=i(w,"Start Simulation"),w.forEach(m),p.forEach(m),K=c(u),X=g(u,"DIV",{class:!0});var v=d(X);Y=g(v,"BUTTON",{class:!0});var b=d(Y);Z=i(b,"Stop Simulation"),b.forEach(m),v.forEach(m),u.forEach(m),tt=c(s),nt=g(s,"HR",{class:!0}),ot=c(s),at=g(s,"SECTION",{class:!0});var k=d(at);st=g(k,"H3",{});var $=d(st);et=i($,"Application Logs"),$.forEach(m),k.forEach(m),rt=c(s),lt=g(s,"BUTTON",{class:!0});var O=d(lt);it=i(O,"Clear Logs"),O.forEach(m),ct=c(s),wt&&wt.l(s),ft=c(s),ut=g(s,"BR",{}),gt=c(s),dt=g(s,"HR",{class:!0}),this.h()},h(){document.title="Simulation",O(S,"class","svelte-drd2kv"),O(x,"class","w3-text-yellow"),j(x,"text-shadow","1px 1px 0 #444"),O(_,"class","w3-panel w3-blue"),O(I,"class","svelte-drd2kv"),O(Q,"class","w3-col w3-input w3-border w3-margin"),O(M,"class","w3-half"),O(Y,"class","w3-col w3-input w3-border w3-margin"),O(X,"class","w3-half"),O(G,"class","w3-row w3-section"),O(nt,"class","svelte-drd2kv"),O(at,"class","page-headline"),O(lt,"class","w3-col w3-input w3-border w3-button"),O(dt,"class","svelte-drd2kv")},m(e,r){s(e,n,r),w(o,e,r),s(e,a,r),s(e,S,r),s(e,N,r),s(e,_,r),p(_,x),p(x,B),p(B,R),s(e,C,r),s(e,I,r),s(e,L,r),s(e,V,r),p(V,J),p(V,U),p(V,A),p(V,P),p(V,z),s(e,F,r),s(e,G,r),p(G,M),p(M,Q),p(Q,W),p(G,K),p(G,X),p(X,Y),p(Y,Z),s(e,tt,r),s(e,nt,r),s(e,ot,r),s(e,at,r),p(at,st),p(st,et),s(e,rt,r),s(e,lt,r),p(lt,it),s(e,ct,r),wt&&wt.m(e,r),s(e,ft,r),s(e,ut,r),s(e,gt,r),s(e,dt,r),mt=!0,ht||(pt=[y(Q,"click",t[6]),y(Y,"click",t[7]),y(lt,"click",t[4])],ht=!0)},p(t,[n]){(!mt||2&n)&&v(U,t[1]),(!mt||4&n)&&v(P,t[2]),"configurations"in t[0]?wt?(wt.p(t,n),1&n&&e(wt,1)):(wt=q(t),wt.c(),e(wt,1),wt.m(ft.parentNode,ft)):wt&&(H(),b(wt,1,1,(()=>{wt=null})),$())},i(t){mt||(e(o.$$.fragment,t),e(wt),mt=!0)},o(t){b(o.$$.fragment,t),b(wt),mt=!1},d(t){t&&m(n),k(o,t),t&&m(a),t&&m(S),t&&m(N),t&&m(_),t&&m(C),t&&m(I),t&&m(L),t&&m(V),t&&m(F),t&&m(G),t&&m(tt),t&&m(nt),t&&m(ot),t&&m(at),t&&m(rt),t&&m(lt),t&&m(ct),wt&&wt.d(t),t&&m(ft),t&&m(ut),t&&m(gt),t&&m(dt),ht=!1,T(pt)}}}function Q(t,n,o){let a=[],s={};const e=V.subscribe((t=>{a=t})),r=J.subscribe((t=>{o(0,s=t)}));let l=[];_((()=>{e(),r();for(let t=0;t<l.length;t++)l[t].close()}));let i="Please create and select a scenario before starting the simulation.",c=!1,f=0,u=[],g={};function d(){for(const[t,n]of Object.entries(g))o(3,g[t]=[],g)}async function m(t){if(!c)return void I.danger("please create and activate a scenario first.");d(),console.log("start or stop simulation"),L("/simulation","POST",{command:t,configs:s},(function(t){t.data&&console.log("response of start simulation",t.data)}))}x((async()=>{for(let n=0;n<a.length;n++)a[n].activated&&(o(1,i=a[n].name),c=!0);"configurations"in s&&o(2,f=s.configurations.length),console.log("scenarios",a),console.log("scenario_configurations",s),l=[];for(var t=0;t<f;t++){o(3,g[t.toString()]=[],g);let n="ws://localhost:8000/simulation/ws/"+s.configurations[t].container_info.name+"/"+s.configurations[t].container_info.ports.split(",")[0].split("/")[0]+"/"+t.toString();console.log("ws url:",n);let a=new WebSocket(n);a.onopen=function(){window.console.log("Successfully connected to the echo websocket server...")},a.onmessage=function(t){window.console.log(t,"received ws message");let n=JSON.parse(t.data);console.log(n,"printing JSON now");let a=n.client_index,s=JSON.parse(n.data);console.log("containerData",s),"status"in s?u[a]=s.status:o(3,g[a]=[...g[a],s],g),console.log(g,"ws_data printing")},l.push(a)}}));return[s,i,f,g,d,m,()=>m("start"),()=>m("stop"),function(n,a){t.$$.not_equal(g[a.toString()],n)&&(g[a.toString()]=n,o(3,g))}]}export default class extends t{constructor(t){super(),n(this,t,Q,M,o,{})}}