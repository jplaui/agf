import{S as e,i as a,s as o,k as t,e as s,t as r,L as n,d as i,n as c,c as l,a as p,g as f,b as h,f as d,F as u,H as m}from"../chunks/vendor-ac6a5f58.js";function g(e){let a,o,g,v,k,w,E,I,L,b,x,C,H,P,U,j,y,A,D,W,_,F,S,V,q,z,B,G;return{c(){a=t(),o=s("div"),g=s("h3"),v=r("How to build a container testbed network?"),k=t(),w=s("ul"),E=s("li"),I=r("Create a docker network and connect all containers to this network (this allows containers to discover each other)"),L=t(),b=s("li"),x=r("If persistent storage is in use, make sure to map volumes to folders specified in /persistent/example_app because /persistent has volume mappings to the local computer folder ./persistent"),C=t(),H=s("li"),P=r("(keep in mind)"),U=t(),j=s("h3"),y=r("Containers Page"),A=t(),D=s("ul"),W=s("li"),_=r("When starting a new container, make sure to specify ports as follows: (1) 8199-8299:8200 for ranges e.g. as with attack-generator, (2) 8300:8300,5900:5900,6080:80 for multiple mappings e.g. as with receiver."),F=t(),S=s("h3"),V=r("Configuration Page"),q=t(),z=s("ul"),B=s("li"),G=r("Add new protocols and attacks (option to select source IP of containers for spoofing, random choice of source ip, etc.)."),this.h()},l(e){n('[data-svelte="svelte-1six0cj"]',document.head).forEach(i),a=c(e),o=l(e,"DIV",{class:!0});var t=p(o);g=l(t,"H3",{});var s=p(g);v=f(s,"How to build a container testbed network?"),s.forEach(i),k=c(t),w=l(t,"UL",{});var r=p(w);E=l(r,"LI",{});var h=p(E);I=f(h,"Create a docker network and connect all containers to this network (this allows containers to discover each other)"),h.forEach(i),L=c(r),b=l(r,"LI",{});var d=p(b);x=f(d,"If persistent storage is in use, make sure to map volumes to folders specified in /persistent/example_app because /persistent has volume mappings to the local computer folder ./persistent"),d.forEach(i),C=c(r),H=l(r,"LI",{});var u=p(H);P=f(u,"(keep in mind)"),u.forEach(i),r.forEach(i),U=c(t),j=l(t,"H3",{});var m=p(j);y=f(m,"Containers Page"),m.forEach(i),A=c(t),D=l(t,"UL",{});var J=p(D);W=l(J,"LI",{});var K=p(W);_=f(K,"When starting a new container, make sure to specify ports as follows: (1) 8199-8299:8200 for ranges e.g. as with attack-generator, (2) 8300:8300,5900:5900,6080:80 for multiple mappings e.g. as with receiver."),K.forEach(i),J.forEach(i),F=c(t),S=l(t,"H3",{});var M=p(S);V=f(M,"Configuration Page"),M.forEach(i),q=c(t),z=l(t,"UL",{});var N=p(z);B=l(N,"LI",{});var O=p(B);G=f(O,"Add new protocols and attacks (option to select source IP of containers for spoofing, random choice of source ip, etc.)."),O.forEach(i),N.forEach(i),t.forEach(i),this.h()},h(){document.title="Docs",h(o,"class","content svelte-cf77e8")},m(e,t){d(e,a,t),d(e,o,t),u(o,g),u(g,v),u(o,k),u(o,w),u(w,E),u(E,I),u(w,L),u(w,b),u(b,x),u(w,C),u(w,H),u(H,P),u(o,U),u(o,j),u(j,y),u(o,A),u(o,D),u(D,W),u(W,_),u(o,F),u(o,S),u(S,V),u(o,q),u(o,z),u(z,B),u(B,G)},p:m,i:m,o:m,d(e){e&&i(a),e&&i(o)}}}const v=!1,k=!0,w=!0;export default class extends e{constructor(e){super(),a(this,e,null,g,o,{})}}export{v as hydrate,w as prerender,k as router};