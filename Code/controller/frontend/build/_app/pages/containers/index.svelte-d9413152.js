import{S as e,i as a,s as t,l as s,f as l,e as o,k as n,c as r,a as c,n as i,d as m,F as d,M as f,j as h,t as u,m as p,g,b as w,o as $,G as b,O as v,h as E,v as k,r as y,w as I,Q as N,z as T,a3 as x,a4 as D,L as V,N as S,a5 as O,T as C}from"../../chunks/vendor-5cf7a4b5.js";import{T as _}from"../../chunks/index-a7b1fd81.js";import{a as A,n as B,x as P}from"../../chunks/requests-a0662dff.js";import{T as L}from"../../chunks/Toast-852c7afc.js";function U(e,a,t){const s=e.slice();return s[11]=a[t],s[13]=t,s}function R(e,a,t){const s=e.slice();return s[14]=a[t],s[16]=t,s}function H(e){let a,t=e[0],o=[];for(let s=0;s<t.length;s+=1)o[s]=F(U(e,t,s));return{c(){for(let e=0;e<o.length;e+=1)o[e].c();a=s()},l(e){for(let a=0;a<o.length;a+=1)o[a].l(e);a=s()},m(e,t){for(let a=0;a<o.length;a+=1)o[a].m(e,t);l(e,a,t)},p(e,s){if(9&s){let l;for(t=e[0],l=0;l<t.length;l+=1){const n=U(e,t,l);o[l]?o[l].p(n,s):(o[l]=F(n),o[l].c(),o[l].m(a.parentNode,a))}for(;l<o.length;l+=1)o[l].d(1);o.length=t.length}},d(e){f(o,e),e&&m(a)}}}function J(e){let a,t,s,f,h,p,$,b=e[11].label+"";return{c(){a=o("label"),t=o("b"),s=u(b),f=n(),h=o("input"),this.h()},l(e){a=r(e,"LABEL",{class:!0});var l=c(a);t=r(l,"B",{});var o=c(t);s=g(o,b),o.forEach(m),l.forEach(m),f=i(e),h=r(e,"INPUT",{class:!0,name:!0,type:!0}),this.h()},h(){w(a,"class",e[3]),w(h,"class","w3-input w3-border"),w(h,"name",p=e[11].name),w(h,"type",$=e[11].type)},m(e,o){l(e,a,o),d(a,t),d(t,s),l(e,f,o),l(e,h,o)},p(e,t){1&t&&b!==(b=e[11].label+"")&&E(s,b),8&t&&w(a,"class",e[3]),1&t&&p!==(p=e[11].name)&&w(h,"name",p),1&t&&$!==($=e[11].type)&&w(h,"type",$)},d(e){e&&m(a),e&&m(f),e&&m(h)}}}function j(e){let a,t,s,f,h,p,$=e[11].label+"";return{c(){a=o("input"),s=n(),f=o("label"),h=o("b"),p=u($),this.h()},l(e){a=r(e,"INPUT",{class:!0,type:!0,checked:!0,name:!0}),s=i(e),f=r(e,"LABEL",{class:!0});var t=c(f);h=r(t,"B",{});var l=c(h);p=g(l,$),l.forEach(m),t.forEach(m),this.h()},h(){w(a,"class","w3-check"),w(a,"type","checkbox"),a.checked="",w(a,"name",t=e[11].name),w(f,"class",e[3])},m(e,t){l(e,a,t),l(e,s,t),l(e,f,t),d(f,h),d(h,p)},p(e,s){1&s&&t!==(t=e[11].name)&&w(a,"name",t),1&s&&$!==($=e[11].label+"")&&E(p,$),8&s&&w(f,"class",e[3])},d(e){e&&m(a),e&&m(s),e&&m(f)}}}function M(e){let a,t,s,h,p,$,b,v,k,y=e[11].label+"",I=e[11].label+"",N=e[11].options,T=[];for(let l=0;l<N.length;l+=1)T[l]=q(R(e,N,l));return{c(){a=o("label"),t=o("b"),s=u(y),h=n(),p=o("select"),$=o("option"),b=u("Select "),v=u(I);for(let e=0;e<T.length;e+=1)T[e].c();this.h()},l(e){a=r(e,"LABEL",{class:!0});var l=c(a);t=r(l,"B",{});var o=c(t);s=g(o,y),o.forEach(m),l.forEach(m),h=i(e),p=r(e,"SELECT",{class:!0,name:!0});var n=c(p);$=r(n,"OPTION",{value:!0,disabled:!0,selected:!0});var d=c($);b=g(d,"Select "),v=g(d,I),d.forEach(m);for(let a=0;a<T.length;a+=1)T[a].l(n);n.forEach(m),this.h()},h(){w(a,"class",e[3]),$.__value="",$.value=$.__value,$.disabled=!0,$.selected=!0,w(p,"class","w3-select w3-border"),w(p,"name",k=e[11].name)},m(e,o){l(e,a,o),d(a,t),d(t,s),l(e,h,o),l(e,p,o),d(p,$),d($,b),d($,v);for(let a=0;a<T.length;a+=1)T[a].m(p,null)},p(e,t){if(1&t&&y!==(y=e[11].label+"")&&E(s,y),8&t&&w(a,"class",e[3]),1&t&&I!==(I=e[11].label+"")&&E(v,I),1&t){let a;for(N=e[11].options,a=0;a<N.length;a+=1){const s=R(e,N,a);T[a]?T[a].p(s,t):(T[a]=q(s),T[a].c(),T[a].m(p,null))}for(;a<T.length;a+=1)T[a].d(1);T.length=N.length}1&t&&k!==(k=e[11].name)&&w(p,"name",k)},d(e){e&&m(a),e&&m(h),e&&m(p),f(T,e)}}}function q(e){let a,t,s=e[14]+"";return{c(){a=o("option"),t=u(s),this.h()},l(e){a=r(e,"OPTION",{value:!0});var l=c(a);t=g(l,s),l.forEach(m),this.h()},h(){a.__value=e[16],a.value=a.__value},m(e,s){l(e,a,s),d(a,t)},p(e,a){1&a&&s!==(s=e[14]+"")&&E(t,s)},d(e){e&&m(a)}}}function F(e){let a,t;function s(e,a){return"select"==e[11].type?M:"checkbox"==e[11].type?j:J}let f=s(e),h=f(e);return{c(){a=o("p"),h.c(),t=n()},l(e){a=r(e,"P",{});var s=c(a);h.l(s),t=i(s),s.forEach(m)},m(e,s){l(e,a,s),h.m(a,null),d(a,t)},p(e,l){f===(f=s(e))&&h?h.p(e,l):(h.d(1),h=f(e),h&&(h.c(),h.m(a,t)))},d(e){e&&m(a),h.d()}}}function z(e){let a,t,s,f,T,x,D,V,S,O,C,_,A,B,P,U,R,J,j,M,q;a=new L({});let F=e[0]&&H(e);return{c(){h(a.$$.fragment),t=n(),s=o("div"),f=o("div"),T=o("div"),x=o("span"),D=u("×"),V=n(),S=o("form"),O=o("h2"),C=u(e[2]),_=n(),F&&F.c(),A=n(),B=o("p"),P=o("input"),U=n(),R=o("button"),J=u(e[2]),this.h()},l(l){p(a.$$.fragment,l),t=i(l),s=r(l,"DIV",{id:!0,class:!0});var o=c(s);f=r(o,"DIV",{class:!0});var n=c(f);T=r(n,"DIV",{class:!0});var d=c(T);x=r(d,"SPAN",{class:!0});var h=c(x);D=g(h,"×"),h.forEach(m),V=i(d),S=r(d,"FORM",{class:!0});var u=c(S);O=r(u,"H2",{class:!0});var w=c(O);C=g(w,e[2]),w.forEach(m),_=i(u),F&&F.l(u),A=i(u),B=r(u,"P",{});var $=c(B);P=r($,"INPUT",{class:!0,type:!0,value:!0}),$.forEach(m),u.forEach(m),d.forEach(m),n.forEach(m),o.forEach(m),U=i(l),R=r(l,"BUTTON",{class:!0});var b=c(R);J=g(b,e[2]),b.forEach(m),this.h()},h(){w(x,"class","w3-button w3-display-topright"),w(O,"class",e[3]),w(P,"class","w3-blue"),w(P,"type","submit"),P.value="execute",w(S,"class","w3-container"),w(T,"class","w3-container"),w(f,"class","w3-modal-content"),w(s,"id",e[1]),w(s,"class","w3-modal"),w(R,"class","w3-col w3-input w3-border")},m(o,n){$(a,o,n),l(o,t,n),l(o,s,n),d(s,f),d(f,T),d(T,x),d(x,D),d(T,V),d(T,S),d(S,O),d(O,C),d(S,_),F&&F.m(S,null),d(S,A),d(S,B),d(B,P),l(o,U,n),l(o,R,n),d(R,J),j=!0,M||(q=[b(x,"click",e[4]),b(S,"submit",v(e[6])),b(R,"click",e[5])],M=!0)},p(e,[a]){(!j||4&a)&&E(C,e[2]),(!j||8&a)&&w(O,"class",e[3]),e[0]?F?F.p(e,a):(F=H(e),F.c(),F.m(S,A)):F&&(F.d(1),F=null),(!j||2&a)&&w(s,"id",e[1]),(!j||4&a)&&E(J,e[2])},i(e){j||(k(a.$$.fragment,e),j=!0)},o(e){y(a.$$.fragment,e),j=!1},d(e){I(a,e),e&&m(t),e&&m(s),F&&F.d(),e&&m(U),e&&m(R),M=!1,N(q)}}}function G(e,a,t){let{data:s}=a,{id:l}=a,{method:o}=a,{url:n}=a,{button:r}=a,{color:c}=a,{color2:i}=a;function m(){let e=document.getElementById(l);e.style.display="none",function(e){e.querySelectorAll("input, select").forEach((function(e){if("SELECT"==e.tagName)for(let a=0;a<e.childElementCount;a++)e.childNodes[a].selected=0==a;else"checkbox"==e.type?e.checked=!1:"submit"!=e.type&&(e.value="")}))}(e)}return T((async()=>{})),e.$$set=e=>{"data"in e&&t(0,s=e.data),"id"in e&&t(1,l=e.id),"method"in e&&t(7,o=e.method),"url"in e&&t(8,n=e.url),"button"in e&&t(2,r=e.button),"color"in e&&t(9,c=e.color),"color2"in e&&t(3,i=e.color2)},[s,l,r,i,m,function(){document.getElementById(l).style.display="block"},async function(){let e={};this.querySelectorAll("input, select").forEach((function(a){""!=a.name&&("checkbox"==a.type?e[a.name]=a.checked:"SELECT"==a.tagName?""!=a.value?e[a.name]=a.childNodes[parseInt(a.value)+1].innerText:e[a.name]="":e[a.name]=a.value)})),console.log(e,"nanan"),A(n,o,e,(function(e){console.log(e,"response from modal request"),m(),B.success("Submission successfull")}))},o,n,c]}class Q extends e{constructor(e){super(),a(this,e,G,z,t,{data:0,id:1,method:7,url:8,button:2,color:9,color2:3})}}const{document:K}=C;function W(e){let a,t,s,f,v,E,T,C,A,B,P,L,U,R,H,J,j,M,q,F,z,G,W,X,Y,Z,ee,ae,te,se,le,oe,ne,re,ce,ie,me,de,fe,he,ue,pe,ge,we,$e,be,ve,Ee,ke,ye,Ie,Ne,Te,xe,De,Ve,Se,Oe,Ce,_e,Ae,Be,Pe,Le,Ue,Re,He,Je,je,Me,qe,Fe,ze,Ge,Qe,Ke,We,Xe,Ye,Ze,ea,aa,ta,sa,la,oa,na,ra,ca,ia,ma,da,fa,ha;function ua(a){e[21](a)}let pa={title:"Images",headers:e[14]};function ga(a){e[23](a)}void 0!==e[0]&&(pa.data=e[0]),z=new _({props:pa}),x.push((()=>D(z,"data",ua))),Z=new Q({props:{data:e[8],id:"createImage",method:"POST",url:"/images",button:"Create Image",color:"w3-green",color2:"w3-text-black"}}),te=new Q({props:{data:e[1],id:"deleteImage",method:"DELETE",url:"/images",button:"Delete Image",color:"w3-red",color2:"w3-text-black"}});let wa={title:"Containers",headers:e[15]};function $a(a){e[25](a)}void 0!==e[10]&&(wa.data=e[10]),me=new _({props:wa}),x.push((()=>D(me,"data",ga))),pe=new Q({props:{data:e[9],id:"startContainer",method:"POST",url:"/containers",button:"Start Container",color:"w3-green",color2:"w3-text-black"}}),$e=new Q({props:{data:e[2],id:"startstopContainer",method:"PUT",url:"/containers",button:"Start/Stop",color:"w3-amber",color2:"w3-text-black"}}),Ee=new Q({props:{data:e[3],id:"deleteContainer",method:"DELETE",url:"/containers",button:"Delete Container",color:"w3-red",color2:"w3-text-black"}});let ba={title:"Networks",headers:e[16]};function va(a){e[27](a)}void 0!==e[11]&&(ba.data=e[11]),Ve=new _({props:ba}),x.push((()=>D(Ve,"data",$a))),Ae=new Q({props:{data:e[6],id:"createNetwork",method:"POST",url:"/networks",button:"Create Network",color:"w3-green",color2:"w3-text-black"}}),Le=new Q({props:{data:e[7],id:"deleteNetwork",method:"DELETE",url:"/networks",button:"Delete Network",color:"w3-red",color2:"w3-text-black"}});let Ea={title:"Volumes",headers:e[17]};function ka(a){e[29](a)}void 0!==e[12]&&(Ea.data=e[12]),Fe=new _({props:Ea}),x.push((()=>D(Fe,"data",va))),We=new Q({props:{data:e[4],id:"createVolume",method:"POST",url:"/volumes",button:"Create Volume",color:"w3-green",color2:"w3-text-black"}}),Ze=new Q({props:{data:e[5],id:"deleteVolume",method:"DELETE",url:"/volumes",button:"Delete Volume",color:"w3-red",color2:"w3-text-black"}});let ya={title:"Repositories",headers:e[18]};return void 0!==e[13]&&(ya.data=e[13]),ra=new _({props:ya}),x.push((()=>D(ra,"data",ka))),{c(){a=n(),t=o("hr"),s=n(),f=o("div"),v=o("h1"),E=o("b"),T=u("TestNet Container Management"),C=n(),A=o("hr"),B=n(),P=o("section"),L=o("button"),U=u("Update Tables"),R=n(),H=o("hr"),J=n(),j=o("button"),M=u("Images"),q=n(),F=o("div"),h(z.$$.fragment),W=n(),X=o("div"),Y=o("div"),h(Z.$$.fragment),ee=n(),ae=o("div"),h(te.$$.fragment),se=n(),le=o("hr"),oe=n(),ne=o("button"),re=u("Containers"),ce=n(),ie=o("div"),h(me.$$.fragment),fe=n(),he=o("div"),ue=o("div"),h(pe.$$.fragment),ge=n(),we=o("div"),h($e.$$.fragment),be=n(),ve=o("div"),h(Ee.$$.fragment),ke=n(),ye=o("hr"),Ie=n(),Ne=o("button"),Te=u("Networks"),xe=n(),De=o("div"),h(Ve.$$.fragment),Oe=n(),Ce=o("div"),_e=o("div"),h(Ae.$$.fragment),Be=n(),Pe=o("div"),h(Le.$$.fragment),Ue=n(),Re=o("hr"),He=n(),Je=o("button"),je=u("Volumes"),Me=n(),qe=o("div"),h(Fe.$$.fragment),Ge=n(),Qe=o("div"),Ke=o("div"),h(We.$$.fragment),Xe=n(),Ye=o("div"),h(Ze.$$.fragment),ea=n(),aa=o("hr"),ta=n(),sa=o("button"),la=u("Repositories"),oa=n(),na=o("div"),h(ra.$$.fragment),ia=n(),ma=o("div"),this.h()},l(e){V('[data-svelte="svelte-85ike8"]',K.head).forEach(m),a=i(e),t=r(e,"HR",{class:!0}),s=i(e),f=r(e,"DIV",{class:!0});var l=c(f);v=r(l,"H1",{class:!0,style:!0});var o=c(v);E=r(o,"B",{});var n=c(E);T=g(n,"TestNet Container Management"),n.forEach(m),o.forEach(m),l.forEach(m),C=i(e),A=r(e,"HR",{class:!0}),B=i(e),P=r(e,"SECTION",{class:!0});var d=c(P);L=r(d,"BUTTON",{class:!0});var h=c(L);U=g(h,"Update Tables"),h.forEach(m),R=i(d),H=r(d,"HR",{class:!0}),J=i(d),j=r(d,"BUTTON",{class:!0});var u=c(j);M=g(u,"Images"),u.forEach(m),q=i(d),F=r(d,"DIV",{id:!0,class:!0});var w=c(F);p(z.$$.fragment,w),w.forEach(m),W=i(d),X=r(d,"DIV",{class:!0});var $=c(X);Y=r($,"DIV",{class:!0});var b=c(Y);p(Z.$$.fragment,b),b.forEach(m),ee=i($),ae=r($,"DIV",{class:!0});var k=c(ae);p(te.$$.fragment,k),k.forEach(m),$.forEach(m),se=i(d),le=r(d,"HR",{class:!0}),oe=i(d),ne=r(d,"BUTTON",{class:!0});var y=c(ne);re=g(y,"Containers"),y.forEach(m),ce=i(d),ie=r(d,"DIV",{id:!0,class:!0});var I=c(ie);p(me.$$.fragment,I),I.forEach(m),fe=i(d),he=r(d,"DIV",{class:!0});var N=c(he);ue=r(N,"DIV",{class:!0});var x=c(ue);p(pe.$$.fragment,x),x.forEach(m),ge=i(N),we=r(N,"DIV",{class:!0});var D=c(we);p($e.$$.fragment,D),D.forEach(m),be=i(N),ve=r(N,"DIV",{class:!0});var S=c(ve);p(Ee.$$.fragment,S),S.forEach(m),N.forEach(m),ke=i(d),ye=r(d,"HR",{class:!0}),Ie=i(d),Ne=r(d,"BUTTON",{class:!0});var O=c(Ne);Te=g(O,"Networks"),O.forEach(m),xe=i(d),De=r(d,"DIV",{id:!0,class:!0});var _=c(De);p(Ve.$$.fragment,_),_.forEach(m),Oe=i(d),Ce=r(d,"DIV",{class:!0});var G=c(Ce);_e=r(G,"DIV",{class:!0});var Q=c(_e);p(Ae.$$.fragment,Q),Q.forEach(m),Be=i(G),Pe=r(G,"DIV",{class:!0});var de=c(Pe);p(Le.$$.fragment,de),de.forEach(m),G.forEach(m),Ue=i(d),Re=r(d,"HR",{class:!0}),He=i(d),Je=r(d,"BUTTON",{class:!0});var Se=c(Je);je=g(Se,"Volumes"),Se.forEach(m),Me=i(d),qe=r(d,"DIV",{id:!0,class:!0});var ze=c(qe);p(Fe.$$.fragment,ze),ze.forEach(m),Ge=i(d),Qe=r(d,"DIV",{class:!0});var ca=c(Qe);Ke=r(ca,"DIV",{class:!0});var da=c(Ke);p(We.$$.fragment,da),da.forEach(m),Xe=i(ca),Ye=r(ca,"DIV",{class:!0});var fa=c(Ye);p(Ze.$$.fragment,fa),fa.forEach(m),ca.forEach(m),ea=i(d),aa=r(d,"HR",{class:!0}),ta=i(d),sa=r(d,"BUTTON",{class:!0});var ha=c(sa);la=g(ha,"Repositories"),ha.forEach(m),oa=i(d),na=r(d,"DIV",{id:!0,class:!0});var ua=c(na);p(ra.$$.fragment,ua),ua.forEach(m),ia=i(d),ma=r(d,"DIV",{class:!0}),c(ma).forEach(m),d.forEach(m),this.h()},h(){K.title="Containers",w(t,"class","svelte-1bkk48p"),w(v,"class","w3-text-yellow"),S(v,"text-shadow","1px 1px 0 #444"),w(f,"class","w3-panel w3-blue"),w(A,"class","svelte-1bkk48p"),w(L,"class","w3-col w3-input w3-border w3-margin-bottom"),w(H,"class","svelte-1bkk48p"),w(j,"class","w3-button w3-block w3-black w3-left-align w3-margin-bottom"),w(F,"id","imagesAccordion"),w(F,"class","w3-hide w3-margin-bottom"),w(Y,"class","w3-half"),w(ae,"class","w3-half"),w(X,"class","w3-row w3-section"),w(le,"class","svelte-1bkk48p"),w(ne,"class","w3-button w3-block w3-black w3-left-align w3-margin-bottom"),w(ie,"id","containersAccordion"),w(ie,"class","w3-hide w3-margin-bottom"),w(ue,"class","w3-third"),w(we,"class","w3-third"),w(ve,"class","w3-third"),w(he,"class","w3-row w3-section"),w(ye,"class","svelte-1bkk48p"),w(Ne,"class","w3-button w3-block w3-black w3-left-align w3-margin-bottom"),w(De,"id","networksAccordion"),w(De,"class","w3-hide w3-margin-bottom"),w(_e,"class","w3-half"),w(Pe,"class","w3-half"),w(Ce,"class","w3-row w3-section"),w(Re,"class","svelte-1bkk48p"),w(Je,"class","w3-button w3-block w3-black w3-left-align w3-margin-bottom"),w(qe,"id","volumesAccordion"),w(qe,"class","w3-hide w3-margin-bottom"),w(Ke,"class","w3-half"),w(Ye,"class","w3-half"),w(Qe,"class","w3-row w3-section"),w(aa,"class","svelte-1bkk48p"),w(sa,"class","w3-button w3-block w3-black w3-left-align w3-margin-bottom"),w(na,"id","repositoriesAccordion"),w(na,"class","w3-hide w3-margin-bottom"),w(ma,"class","w3-margin w3-padding"),w(P,"class","w3-container")},m(o,n){l(o,a,n),l(o,t,n),l(o,s,n),l(o,f,n),d(f,v),d(v,E),d(E,T),l(o,C,n),l(o,A,n),l(o,B,n),l(o,P,n),d(P,L),d(L,U),d(P,R),d(P,H),d(P,J),d(P,j),d(j,M),d(P,q),d(P,F),$(z,F,null),d(P,W),d(P,X),d(X,Y),$(Z,Y,null),d(X,ee),d(X,ae),$(te,ae,null),d(P,se),d(P,le),d(P,oe),d(P,ne),d(ne,re),d(P,ce),d(P,ie),$(me,ie,null),d(P,fe),d(P,he),d(he,ue),$(pe,ue,null),d(he,ge),d(he,we),$($e,we,null),d(he,be),d(he,ve),$(Ee,ve,null),d(P,ke),d(P,ye),d(P,Ie),d(P,Ne),d(Ne,Te),d(P,xe),d(P,De),$(Ve,De,null),d(P,Oe),d(P,Ce),d(Ce,_e),$(Ae,_e,null),d(Ce,Be),d(Ce,Pe),$(Le,Pe,null),d(P,Ue),d(P,Re),d(P,He),d(P,Je),d(Je,je),d(P,Me),d(P,qe),$(Fe,qe,null),d(P,Ge),d(P,Qe),d(Qe,Ke),$(We,Ke,null),d(Qe,Xe),d(Qe,Ye),$(Ze,Ye,null),d(P,ea),d(P,aa),d(P,ta),d(P,sa),d(sa,la),d(P,oa),d(P,na),$(ra,na,null),d(P,ia),d(P,ma),da=!0,fa||(ha=[b(L,"click",e[19]),b(j,"click",e[20]),b(ne,"click",e[22]),b(Ne,"click",e[24]),b(Je,"click",e[26]),b(sa,"click",e[28])],fa=!0)},p(e,a){const t={};!G&&1&a[0]&&(G=!0,t.data=e[0],O((()=>G=!1))),z.$set(t);const s={};256&a[0]&&(s.data=e[8]),Z.$set(s);const l={};2&a[0]&&(l.data=e[1]),te.$set(l);const o={};!de&&1024&a[0]&&(de=!0,o.data=e[10],O((()=>de=!1))),me.$set(o);const n={};512&a[0]&&(n.data=e[9]),pe.$set(n);const r={};4&a[0]&&(r.data=e[2]),$e.$set(r);const c={};8&a[0]&&(c.data=e[3]),Ee.$set(c);const i={};!Se&&2048&a[0]&&(Se=!0,i.data=e[11],O((()=>Se=!1))),Ve.$set(i);const m={};64&a[0]&&(m.data=e[6]),Ae.$set(m);const d={};128&a[0]&&(d.data=e[7]),Le.$set(d);const f={};!ze&&4096&a[0]&&(ze=!0,f.data=e[12],O((()=>ze=!1))),Fe.$set(f);const h={};16&a[0]&&(h.data=e[4]),We.$set(h);const u={};32&a[0]&&(u.data=e[5]),Ze.$set(u);const p={};!ca&&8192&a[0]&&(ca=!0,p.data=e[13],O((()=>ca=!1))),ra.$set(p)},i(e){da||(k(z.$$.fragment,e),k(Z.$$.fragment,e),k(te.$$.fragment,e),k(me.$$.fragment,e),k(pe.$$.fragment,e),k($e.$$.fragment,e),k(Ee.$$.fragment,e),k(Ve.$$.fragment,e),k(Ae.$$.fragment,e),k(Le.$$.fragment,e),k(Fe.$$.fragment,e),k(We.$$.fragment,e),k(Ze.$$.fragment,e),k(ra.$$.fragment,e),da=!0)},o(e){y(z.$$.fragment,e),y(Z.$$.fragment,e),y(te.$$.fragment,e),y(me.$$.fragment,e),y(pe.$$.fragment,e),y($e.$$.fragment,e),y(Ee.$$.fragment,e),y(Ve.$$.fragment,e),y(Ae.$$.fragment,e),y(Le.$$.fragment,e),y(Fe.$$.fragment,e),y(We.$$.fragment,e),y(Ze.$$.fragment,e),y(ra.$$.fragment,e),da=!1},d(e){e&&m(a),e&&m(t),e&&m(s),e&&m(f),e&&m(C),e&&m(A),e&&m(B),e&&m(P),I(z),I(Z),I(te),I(me),I(pe),I($e),I(Ee),I(Ve),I(Ae),I(Le),I(Fe),I(We),I(Ze),I(ra),fa=!1,N(ha)}}}function X(e){var a=document.getElementById(e);-1==a.className.indexOf("w3-show")?a.className+=" w3-show":a.className=a.className.replace(" w3-show","")}function Y(e,a,t){let s,l,o,n,r,c,i,m=[],d=[{label:"Repository to Build",name:"repo",type:"select",options:[]},{label:"Tag Name",name:"tag",type:"text"},{label:"Version (e.g. latest or 0.2)",name:"version",type:"text"}],f=[{label:"Image Short ID",name:"short_id",type:"text"}],h=[{label:"Join Network",name:"network",type:"select",options:[]},{label:"Select Image",name:"image",type:"select",options:[]},{label:"Attach Volumes (e.g. vol_name:/path/to/container_folder, if using multiple -> use comma separated)",name:"volumes",type:"text"},{label:"Port Mapping (please use format e.g. 80:80 or 443:443 or 8080:8080, if using multiple 80:80,443:443,...)",name:"ports",type:"text"},{label:"Name",name:"name",type:"text"},{label:"Privileged",name:"privileged",type:"checkbox"}],u=[{label:"Container Short ID or Name",name:"short_id",type:"text"}],p=[{label:"Container Short ID",name:"short_id",type:"text"}],g=[{label:"Name",name:"name",type:"text"}],w=[{label:"Volume Short ID",name:"short_id",type:"text"}],$=[{label:"Name",name:"name",type:"text"},{label:"Driver (e.g. bridge or overlay)",name:"driver",type:"text"},{label:"Attachable",name:"attachable",type:"checkbox"}],b=[{label:"Network Short ID",name:"short_id",type:"text"}],v=[],E=[],k=[],y=[];async function I(){P("/images",(function(e){let a=JSON.parse(e.response);if(a.data){t(0,m=a.data);let e=[];for(var s=0;s<m.length;s++)e.push(m[s].tag);t(9,h[1].options=e,h)}})),P("/containers",(function(e){let a=JSON.parse(e.response);a.data&&t(10,v=a.data)})),P("/networks",(function(e){let a=JSON.parse(e.response);if(a.data){t(11,E=a.data);let e=[];for(var s=0;s<E.length;s++)e.push(E[s].name);t(9,h[0].options=e,h)}})),P("/volumes",(function(e){let a=JSON.parse(e.response);a.data&&t(12,k=a.data)})),P("/repositories",(function(e){let a=JSON.parse(e.response);if(a.data){t(13,y=a.data);let e=[];for(var s=0;s<y.length;s++)e.push(y[s].name);t(8,d[0].options=e,d)}}))}T((async()=>{I(),setTimeout((function(){t(1,s=f),t(2,l=u),t(3,o=p),t(4,n=g),t(5,r=w),t(6,c=$),t(7,i=b)}),500)}));return[m,s,l,o,n,r,c,i,d,h,v,E,k,y,["short_id","tag"],["short_id","name","ports"],["short_id","name"],["short_id","name"],["name"],I,()=>X("imagesAccordion"),function(e){m=e,t(0,m)},()=>X("containersAccordion"),function(e){v=e,t(10,v)},()=>X("networksAccordion"),function(e){E=e,t(11,E)},()=>X("volumesAccordion"),function(e){k=e,t(12,k)},()=>X("repositoriesAccordion"),function(e){y=e,t(13,y)}]}export default class extends e{constructor(e){super(),a(this,e,Y,W,t,{},[-1,-1])}}
