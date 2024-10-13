import{S as t,i as e,s as a,e as o,k as s,c as l,a as n,n as d,d as r,b as c,E as i,f as u,F as h,a8 as m,a9 as f,X as p,Y as v,Z as g,$ as x,a0 as b,Q as E,t as j,L as w,g as y,P as T,u as q,v as k,r as M,_ as O,aa as _,B as F,a2 as N,H as U}from"../../chunks/vendor-ac6a5f58.js";function B(t,{pending:e,error:a,result:o}){let s;async function l(l){const n=s={};l.preventDefault();const d=new FormData(t);e&&e(d,t);try{const e=await fetch(t.action,{method:t.method,headers:{accept:"application/json"},body:d});if(n!==s)return;e.ok?o(e,t):a?a(e,null,t):console.error(await e.text())}catch(r){if(!a)throw r;a(null,r,t)}}return t.addEventListener("submit",l),{destroy(){t.removeEventListener("submit",l)}}}function D(t,e,a){const o=t.slice();return o[5]=e[a],o[6]=e,o[7]=a,o}function I(t,e){let a,j,w,y,T,q,k,M,F,N,D,I,R,P,L,$,H,S,V,A,C,Q,X,Y,Z,z,G,J=U;function K(...t){return e[3](e[5],e[6],e[7],...t)}function W(){return e[4](e[5])}return{key:t,first:null,c(){a=o("div"),j=o("form"),w=o("input"),T=s(),q=o("button"),N=s(),D=o("form"),I=o("input"),P=s(),L=o("button"),H=s(),S=o("form"),V=o("button"),Q=s(),this.h()},l(t){a=l(t,"DIV",{class:!0});var e=n(a);j=l(e,"FORM",{action:!0,method:!0});var o=n(j);w=l(o,"INPUT",{type:!0,name:!0,value:!0,class:!0}),T=d(o),q=l(o,"BUTTON",{class:!0,"aria-label":!0}),n(q).forEach(r),o.forEach(r),N=d(e),D=l(e,"FORM",{class:!0,action:!0,method:!0});var s=n(D);I=l(s,"INPUT",{"aria-label":!0,type:!0,name:!0,value:!0,class:!0}),P=d(s),L=l(s,"BUTTON",{class:!0,"aria-label":!0}),n(L).forEach(r),s.forEach(r),H=d(e),S=l(e,"FORM",{action:!0,method:!0});var c=n(S);V=l(c,"BUTTON",{class:!0,"aria-label":!0}),n(V).forEach(r),c.forEach(r),Q=d(e),e.forEach(r),this.h()},h(){c(w,"type","hidden"),c(w,"name","done"),w.value=y=e[5].done?"":"true",c(w,"class","svelte-dmxqmd"),c(q,"class","toggle svelte-dmxqmd"),c(q,"aria-label",k="Mark todo as "+(e[5].done?"not done":"done")),c(j,"action",M="/todos/"+e[5].uid+".json?_method=patch"),c(j,"method","post"),c(I,"aria-label","Edit todo"),c(I,"type","text"),c(I,"name","text"),I.value=R=e[5].text,c(I,"class","svelte-dmxqmd"),c(L,"class","save svelte-dmxqmd"),c(L,"aria-label","Save todo"),c(D,"class","text svelte-dmxqmd"),c(D,"action",$="/todos/"+e[5].uid+".json?_method=patch"),c(D,"method","post"),c(V,"class","delete svelte-dmxqmd"),c(V,"aria-label","Delete todo"),c(S,"action",A="/todos/"+e[5].uid+".json?_method=delete"),c(S,"method","post"),c(a,"class","todo svelte-dmxqmd"),i(a,"done",e[5].done),this.first=a},m(t,o){u(t,a,o),h(a,j),h(j,w),h(j,T),h(j,q),h(a,N),h(a,D),h(D,I),h(D,P),h(D,L),h(a,H),h(a,S),h(S,V),h(a,Q),Z=!0,z||(G=[m(F=B.call(null,j,{pending:K,result:e[1]})),m(B.call(null,D,{result:e[1]})),m(C=B.call(null,S,{result:W}))],z=!0)},p(t,o){e=t,(!Z||1&o&&y!==(y=e[5].done?"":"true"))&&(w.value=y),(!Z||1&o&&k!==(k="Mark todo as "+(e[5].done?"not done":"done")))&&c(q,"aria-label",k),(!Z||1&o&&M!==(M="/todos/"+e[5].uid+".json?_method=patch"))&&c(j,"action",M),F&&f(F.update)&&1&o&&F.update.call(null,{pending:K,result:e[1]}),(!Z||1&o&&R!==(R=e[5].text)&&I.value!==R)&&(I.value=R),(!Z||1&o&&$!==($="/todos/"+e[5].uid+".json?_method=patch"))&&c(D,"action",$),(!Z||1&o&&A!==(A="/todos/"+e[5].uid+".json?_method=delete"))&&c(S,"action",A),C&&f(C.update)&&1&o&&C.update.call(null,{result:W}),1&o&&i(a,"done",e[5].done)},r(){Y=a.getBoundingClientRect()},f(){p(a),J(),v(a,Y)},a(){J(),J=g(a,Y,O,{duration:200})},i(t){Z||(t&&x((()=>{X||(X=b(a,_,{start:.7},!0)),X.run(1)})),Z=!0)},o(t){t&&(X||(X=b(a,_,{start:.7},!1)),X.run(0)),Z=!1},d(t){t&&r(a),t&&X&&X.end(),z=!1,E(G)}}}function R(t){let e,a,i,p,v,g,x,b,E,O,_,U,R=[],P=new Map,L=t[0];const $=t=>t[5].uid;for(let o=0;o<L.length;o+=1){let e=D(t,L,o),a=$(e);P.set(a,R[o]=I(a,e))}return{c(){e=s(),a=o("div"),i=o("h1"),p=j("Todos"),v=s(),g=o("form"),x=o("input"),E=s();for(let t=0;t<R.length;t+=1)R[t].c();this.h()},l(t){w('[data-svelte="svelte-181o7gf"]',document.head).forEach(r),e=d(t),a=l(t,"DIV",{class:!0});var o=n(a);i=l(o,"H1",{});var s=n(i);p=y(s,"Todos"),s.forEach(r),v=d(o),g=l(o,"FORM",{class:!0,action:!0,method:!0});var c=n(g);x=l(c,"INPUT",{name:!0,"aria-label":!0,placeholder:!0,class:!0}),c.forEach(r),E=d(o);for(let e=0;e<R.length;e+=1)R[e].l(o);o.forEach(r),this.h()},h(){document.title="Todos",c(x,"name","text"),c(x,"aria-label","Add todo"),c(x,"placeholder","+ tap to add a todo"),c(x,"class","svelte-dmxqmd"),c(g,"class","new svelte-dmxqmd"),c(g,"action","/todos.json"),c(g,"method","post"),c(a,"class","todos svelte-dmxqmd")},m(o,s){u(o,e,s),u(o,a,s),h(a,i),h(i,p),h(a,v),h(a,g),h(g,x),h(a,E);for(let t=0;t<R.length;t+=1)R[t].m(a,null);O=!0,_||(U=m(b=B.call(null,g,{result:t[2]})),_=!0)},p(t,[e]){if(b&&f(b.update)&&1&e&&b.update.call(null,{result:t[2]}),3&e){L=t[0],F();for(let t=0;t<R.length;t+=1)R[t].r();R=T(R,e,$,1,t,L,P,a,N,I,null,D);for(let t=0;t<R.length;t+=1)R[t].a();q()}},i(t){if(!O){for(let t=0;t<L.length;t+=1)k(R[t]);O=!0}},o(t){for(let e=0;e<R.length;e+=1)M(R[e]);O=!1},d(t){t&&r(e),t&&r(a);for(let e=0;e<R.length;e+=1)R[e].d();_=!1,U()}}}const P=async({fetch:t})=>{const e=await t("/todos.json");if(e.ok){return{props:{todos:await e.json()}}}const{message:a}=await e.json();return{error:new Error(a)}};function L(t,e,a){let{todos:o}=e;return t.$$set=t=>{"todos"in t&&a(0,o=t.todos)},[o,async function(t){const e=await t.json();a(0,o=o.map((t=>t.uid===e.uid?e:t)))},async(t,e)=>{const s=await t.json();a(0,o=[...o,s]),e.reset()},(t,e,s,l)=>{a(0,e[s].done=!!l.get("done"),o)},t=>{a(0,o=o.filter((e=>e.uid!==t.uid)))}]}export default class extends t{constructor(t){super(),e(this,t,L,R,a,{todos:0})}}export{P as load};
