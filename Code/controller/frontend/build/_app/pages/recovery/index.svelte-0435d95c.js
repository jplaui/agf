import{S as a,i as e,s,j as t,m as r,o as n,a5 as o,v as c,r as l,w as i,k as p,e as h,t as f,l as d,n as u,c as v,a as w,g as m,d as E,b,N as g,f as y,F as k,G as I,O as P,u as $,Q as N,a3 as T,a4 as L,B}from"../../chunks/vendor-5cf7a4b5.js";import{T as x,n as C}from"../../chunks/Toast-8167f713.js";import{T as U}from"../../chunks/index-6469371a.js";function D(a){let e,s,p;function h(e){a[5](e)}let f={title:"Snapshots",headers:Object.keys(a[0][0])};return void 0!==a[0]&&(f.data=a[0]),e=new U({props:f}),T.push((()=>L(e,"data",h))),{c(){t(e.$$.fragment)},l(a){r(e.$$.fragment,a)},m(a,s){n(e,a,s),p=!0},p(a,t){const r={};1&t&&(r.headers=Object.keys(a[0][0])),!s&&1&t&&(s=!0,r.data=a[0],o((()=>s=!1))),e.$set(r)},i(a){p||(c(e.$$.fragment,a),p=!0)},o(a){l(e.$$.fragment,a),p=!1},d(a){i(e,a)}}}function V(a){let e,s,p;function h(e){a[6](e)}let f={title:"Logfiles",headers:Object.keys(a[1][0])};return void 0!==a[1]&&(f.data=a[1]),e=new U({props:f}),T.push((()=>L(e,"data",h))),{c(){t(e.$$.fragment)},l(a){r(e.$$.fragment,a)},m(a,s){n(e,a,s),p=!0},p(a,t){const r={};2&t&&(r.headers=Object.keys(a[1][0])),!s&&2&t&&(s=!0,r.data=a[1],o((()=>s=!1))),e.$set(r)},i(a){p||(c(e.$$.fragment,a),p=!0)},o(a){l(e.$$.fragment,a),p=!1},d(a){i(e,a)}}}function R(a){let e,s,o,T,L,C,U,R,S,A,j,F,q,M,X,G,J,Q,z,K,W,Y,Z,_,aa,ea,sa,ta,ra,na,oa,ca,la,ia,pa,ha,fa,da,ua,va,wa,ma,Ea,ba,ga,ya,ka,Ia,Pa,$a,Na,Ta,La,Ba,xa,Ca,Ua,Da,Va,Ra,Sa,Ha,Oa,Aa,ja,Fa,qa,Ma,Xa,Ga,Ja,Qa,za,Ka,Wa,Ya,Za,_a,ae,ee,se,te,re,ne,oe,ce,le,ie,pe,he,fe,de,ue,ve,we,me,Ee,be,ge,ye,ke,Ie,Pe,$e,Ne,Te,Le,Be,xe,Ce,Ue,De,Ve,Re,Se,He,Oe,Ae,je,Fe,qe,Me,Xe,Ge,Je,Qe,ze,Ke,We,Ye,Ze,_e,as,es,ss,ts,rs,ns,os;e=new x({});let cs=a[0].length>0&&D(a),ls=a[1].length>0&&V(a);return{c(){t(e.$$.fragment),s=p(),o=h("hr"),T=p(),L=h("div"),C=h("h1"),U=h("b"),R=f("Recovery Handlers"),S=p(),A=h("hr"),j=p(),F=h("h2"),q=f("Upload Checkpoint"),M=p(),X=h("form"),G=h("p"),J=h("label"),Q=h("b"),z=f("Image Tag"),K=p(),W=h("input"),Y=p(),Z=h("p"),_=h("label"),aa=h("b"),ea=f("Image Version"),sa=p(),ta=h("input"),ra=p(),na=h("p"),oa=h("label"),ca=h("b"),la=f("Container Name"),ia=p(),pa=h("input"),ha=p(),fa=h("p"),da=h("label"),ua=h("b"),va=f("Container Ports (8080:8080,443:443)"),wa=p(),ma=h("input"),Ea=p(),ba=h("p"),ga=h("label"),ya=h("b"),ka=f("Container Networks"),Ia=p(),Pa=h("input"),$a=p(),Na=h("p"),Ta=h("label"),La=h("b"),Ba=f("Container Volumes"),xa=p(),Ca=h("input"),Ua=p(),Da=h("p"),Va=h("label"),Ra=h("b"),Sa=f("Container Privileged (yes, no)"),Ha=p(),Oa=h("input"),Aa=p(),ja=h("p"),Fa=h("label"),qa=h("b"),Ma=f("File"),Xa=p(),Ga=h("input"),Ja=p(),Qa=h("p"),za=h("input"),Ka=p(),Wa=h("hr"),Ya=p(),Za=h("h2"),_a=f("Recovery Actions"),ae=p(),ee=h("div"),se=h("div"),te=h("button"),re=f("Snapshot Container ( create image as .tar )"),ne=p(),oe=h("div"),ce=h("input"),le=p(),ie=h("div"),pe=h("div"),he=h("button"),fe=f("Recover Container ( load from .tar )"),de=p(),ue=h("div"),ve=h("input"),we=p(),me=h("div"),Ee=h("div"),be=h("button"),ge=f("Download Snapshot ( as .tar )"),ye=p(),ke=h("div"),Ie=h("input"),Pe=p(),$e=h("hr"),Ne=p(),Te=h("h2"),Le=f("Container Snapshots"),Be=p(),cs&&cs.c(),xe=p(),Ce=h("hr"),Ue=p(),De=h("h2"),Ve=f("Log Files"),Re=p(),Se=h("form"),He=h("p"),Oe=h("label"),Ae=h("b"),je=f(".csv File"),Fe=p(),qe=h("input"),Me=p(),Xe=h("p"),Ge=h("input"),Je=p(),Qe=h("div"),ze=h("div"),Ke=h("button"),We=f("Delete Logfile"),Ye=p(),Ze=h("div"),_e=h("input"),as=p(),es=h("br"),ss=p(),ls&&ls.c(),ts=d(),this.h()},l(a){r(e.$$.fragment,a),s=u(a),o=v(a,"HR",{class:!0}),T=u(a),L=v(a,"DIV",{class:!0});var t=w(L);C=v(t,"H1",{class:!0,style:!0});var n=w(C);U=v(n,"B",{});var c=w(U);R=m(c,"Recovery Handlers"),c.forEach(E),n.forEach(E),t.forEach(E),S=u(a),A=v(a,"HR",{class:!0}),j=u(a),F=v(a,"H2",{});var l=w(F);q=m(l,"Upload Checkpoint"),l.forEach(E),M=u(a),X=v(a,"FORM",{class:!0,enctype:!0});var i=w(X);G=v(i,"P",{});var p=w(G);J=v(p,"LABEL",{});var h=w(J);Q=v(h,"B",{});var f=w(Q);z=m(f,"Image Tag"),f.forEach(E),h.forEach(E),K=u(p),W=v(p,"INPUT",{class:!0,name:!0,type:!0}),p.forEach(E),Y=u(i),Z=v(i,"P",{});var b=w(Z);_=v(b,"LABEL",{});var g=w(_);aa=v(g,"B",{});var y=w(aa);ea=m(y,"Image Version"),y.forEach(E),g.forEach(E),sa=u(b),ta=v(b,"INPUT",{class:!0,name:!0,type:!0}),b.forEach(E),ra=u(i),na=v(i,"P",{});var k=w(na);oa=v(k,"LABEL",{});var I=w(oa);ca=v(I,"B",{});var P=w(ca);la=m(P,"Container Name"),P.forEach(E),I.forEach(E),ia=u(k),pa=v(k,"INPUT",{class:!0,name:!0,type:!0}),k.forEach(E),ha=u(i),fa=v(i,"P",{});var $=w(fa);da=v($,"LABEL",{});var N=w(da);ua=v(N,"B",{});var B=w(ua);va=m(B,"Container Ports (8080:8080,443:443)"),B.forEach(E),N.forEach(E),wa=u($),ma=v($,"INPUT",{class:!0,name:!0,type:!0}),$.forEach(E),Ea=u(i),ba=v(i,"P",{});var x=w(ba);ga=v(x,"LABEL",{});var D=w(ga);ya=v(D,"B",{});var V=w(ya);ka=m(V,"Container Networks"),V.forEach(E),D.forEach(E),Ia=u(x),Pa=v(x,"INPUT",{class:!0,name:!0,type:!0}),x.forEach(E),$a=u(i),Na=v(i,"P",{});var H=w(Na);Ta=v(H,"LABEL",{});var O=w(Ta);La=v(O,"B",{});var rs=w(La);Ba=m(rs,"Container Volumes"),rs.forEach(E),O.forEach(E),xa=u(H),Ca=v(H,"INPUT",{class:!0,name:!0,type:!0}),H.forEach(E),Ua=u(i),Da=v(i,"P",{});var ns=w(Da);Va=v(ns,"LABEL",{});var os=w(Va);Ra=v(os,"B",{});var is=w(Ra);Sa=m(is,"Container Privileged (yes, no)"),is.forEach(E),os.forEach(E),Ha=u(ns),Oa=v(ns,"INPUT",{class:!0,name:!0,type:!0}),ns.forEach(E),Aa=u(i),ja=v(i,"P",{});var ps=w(ja);Fa=v(ps,"LABEL",{class:!0});var hs=w(Fa);qa=v(hs,"B",{});var fs=w(qa);Ma=m(fs,"File"),fs.forEach(E),hs.forEach(E),Xa=u(ps),Ga=v(ps,"INPUT",{class:!0,type:!0,name:!0}),ps.forEach(E),Ja=u(i),Qa=v(i,"P",{});var ds=w(Qa);za=v(ds,"INPUT",{class:!0,type:!0,value:!0}),ds.forEach(E),i.forEach(E),Ka=u(a),Wa=v(a,"HR",{class:!0}),Ya=u(a),Za=v(a,"H2",{});var us=w(Za);_a=m(us,"Recovery Actions"),us.forEach(E),ae=u(a),ee=v(a,"DIV",{class:!0});var vs=w(ee);se=v(vs,"DIV",{class:!0});var ws=w(se);te=v(ws,"BUTTON",{class:!0});var ms=w(te);re=m(ms,"Snapshot Container ( create image as .tar )"),ms.forEach(E),ws.forEach(E),ne=u(vs),oe=v(vs,"DIV",{class:!0});var Es=w(oe);ce=v(Es,"INPUT",{class:!0,name:!0,type:!0,placeholder:!0}),Es.forEach(E),vs.forEach(E),le=u(a),ie=v(a,"DIV",{class:!0});var bs=w(ie);pe=v(bs,"DIV",{class:!0});var gs=w(pe);he=v(gs,"BUTTON",{class:!0});var ys=w(he);fe=m(ys,"Recover Container ( load from .tar )"),ys.forEach(E),gs.forEach(E),de=u(bs),ue=v(bs,"DIV",{class:!0});var ks=w(ue);ve=v(ks,"INPUT",{class:!0,name:!0,type:!0,placeholder:!0}),ks.forEach(E),bs.forEach(E),we=u(a),me=v(a,"DIV",{class:!0});var Is=w(me);Ee=v(Is,"DIV",{class:!0});var Ps=w(Ee);be=v(Ps,"BUTTON",{class:!0});var $s=w(be);ge=m($s,"Download Snapshot ( as .tar )"),$s.forEach(E),Ps.forEach(E),ye=u(Is),ke=v(Is,"DIV",{class:!0});var Ns=w(ke);Ie=v(Ns,"INPUT",{class:!0,name:!0,type:!0,placeholder:!0}),Ns.forEach(E),Is.forEach(E),Pe=u(a),$e=v(a,"HR",{class:!0}),Ne=u(a),Te=v(a,"H2",{});var Ts=w(Te);Le=m(Ts,"Container Snapshots"),Ts.forEach(E),Be=u(a),cs&&cs.l(a),xe=u(a),Ce=v(a,"HR",{class:!0}),Ue=u(a),De=v(a,"H2",{});var Ls=w(De);Ve=m(Ls,"Log Files"),Ls.forEach(E),Re=u(a),Se=v(a,"FORM",{class:!0,enctype:!0});var Bs=w(Se);He=v(Bs,"P",{});var xs=w(He);Oe=v(xs,"LABEL",{class:!0});var Cs=w(Oe);Ae=v(Cs,"B",{});var Us=w(Ae);je=m(Us,".csv File"),Us.forEach(E),Cs.forEach(E),Fe=u(xs),qe=v(xs,"INPUT",{class:!0,type:!0,name:!0}),xs.forEach(E),Me=u(Bs),Xe=v(Bs,"P",{});var Ds=w(Xe);Ge=v(Ds,"INPUT",{class:!0,type:!0,value:!0}),Ds.forEach(E),Bs.forEach(E),Je=u(a),Qe=v(a,"DIV",{class:!0});var Vs=w(Qe);ze=v(Vs,"DIV",{class:!0});var Rs=w(ze);Ke=v(Rs,"BUTTON",{class:!0});var Ss=w(Ke);We=m(Ss,"Delete Logfile"),Ss.forEach(E),Rs.forEach(E),Ye=u(Vs),Ze=v(Vs,"DIV",{class:!0});var Hs=w(Ze);_e=v(Hs,"INPUT",{class:!0,name:!0,type:!0,placeholder:!0}),Hs.forEach(E),Vs.forEach(E),as=u(a),es=v(a,"BR",{}),ss=u(a),ls&&ls.l(a),ts=d(),this.h()},h(){b(o,"class","svelte-drd2kv"),b(C,"class","w3-text-yellow"),g(C,"text-shadow","1px 1px 0 #444"),b(L,"class","w3-panel w3-blue"),b(A,"class","svelte-drd2kv"),b(W,"class","w3-input w3-border"),b(W,"name","imagetag"),b(W,"type","text"),b(ta,"class","w3-input w3-border"),b(ta,"name","imageversion"),b(ta,"type","text"),b(pa,"class","w3-input w3-border"),b(pa,"name","containername"),b(pa,"type","text"),b(ma,"class","w3-input w3-border"),b(ma,"name","containerports"),b(ma,"type","text"),b(Pa,"class","w3-input w3-border"),b(Pa,"name","containernetworks"),b(Pa,"type","text"),b(Ca,"class","w3-input w3-border"),b(Ca,"name","containervolumes"),b(Ca,"type","text"),b(Oa,"class","w3-input w3-border"),b(Oa,"name","containerprivilege"),b(Oa,"type","text"),b(Fa,"class","w3-text-blue"),b(Ga,"class","w3-input w3-border"),b(Ga,"type","file"),b(Ga,"name","file"),b(za,"class","w3-col w3-input w3-border w3-margin-bottom"),b(za,"type","submit"),za.value="upload",b(X,"class","w3-container w3-card-4"),b(X,"enctype","multipart/form-data"),b(Wa,"class","svelte-drd2kv"),b(te,"class","w3-col w3-input w3-border w3-button"),b(se,"class","w3-third"),b(ce,"class","w3-input w3-border"),b(ce,"name","containername"),b(ce,"type","text"),b(ce,"placeholder","Container Name"),b(oe,"class","w3-rest"),b(ee,"class","w3-row w3-section"),b(he,"class","w3-col w3-input w3-border w3-button"),b(pe,"class","w3-third"),b(ve,"class","w3-input w3-border"),b(ve,"name","containername"),b(ve,"type","text"),b(ve,"placeholder","Container Name"),b(ue,"class","w3-rest"),b(ie,"class","w3-row w3-section"),b(be,"class","w3-col w3-input w3-border w3-button"),b(Ee,"class","w3-third"),b(Ie,"class","w3-input w3-border"),b(Ie,"name","snapshotname"),b(Ie,"type","text"),b(Ie,"placeholder","Snapshot Name"),b(ke,"class","w3-rest"),b(me,"class","w3-row w3-section"),b($e,"class","svelte-drd2kv"),b(Ce,"class","svelte-drd2kv"),b(Oe,"class","w3-text-blue"),b(qe,"class","w3-input w3-border"),b(qe,"type","file"),b(qe,"name","file"),b(Ge,"class","w3-col w3-input w3-border w3-margin-bottom"),b(Ge,"type","submit"),Ge.value="upload",b(Se,"class","w3-container w3-card-4"),b(Se,"enctype","multipart/form-data"),b(Ke,"class","w3-col w3-input w3-border w3-button"),b(ze,"class","w3-third"),b(_e,"class","w3-input w3-border"),b(_e,"name","logfileid"),b(_e,"type","text"),b(_e,"placeholder","Logfile ID"),b(Ze,"class","w3-rest"),b(Qe,"class","w3-row w3-section")},m(t,r){n(e,t,r),y(t,s,r),y(t,o,r),y(t,T,r),y(t,L,r),k(L,C),k(C,U),k(U,R),y(t,S,r),y(t,A,r),y(t,j,r),y(t,F,r),k(F,q),y(t,M,r),y(t,X,r),k(X,G),k(G,J),k(J,Q),k(Q,z),k(G,K),k(G,W),k(X,Y),k(X,Z),k(Z,_),k(_,aa),k(aa,ea),k(Z,sa),k(Z,ta),k(X,ra),k(X,na),k(na,oa),k(oa,ca),k(ca,la),k(na,ia),k(na,pa),k(X,ha),k(X,fa),k(fa,da),k(da,ua),k(ua,va),k(fa,wa),k(fa,ma),k(X,Ea),k(X,ba),k(ba,ga),k(ga,ya),k(ya,ka),k(ba,Ia),k(ba,Pa),k(X,$a),k(X,Na),k(Na,Ta),k(Ta,La),k(La,Ba),k(Na,xa),k(Na,Ca),k(X,Ua),k(X,Da),k(Da,Va),k(Va,Ra),k(Ra,Sa),k(Da,Ha),k(Da,Oa),k(X,Aa),k(X,ja),k(ja,Fa),k(Fa,qa),k(qa,Ma),k(ja,Xa),k(ja,Ga),k(X,Ja),k(X,Qa),k(Qa,za),y(t,Ka,r),y(t,Wa,r),y(t,Ya,r),y(t,Za,r),k(Za,_a),y(t,ae,r),y(t,ee,r),k(ee,se),k(se,te),k(te,re),k(ee,ne),k(ee,oe),k(oe,ce),y(t,le,r),y(t,ie,r),k(ie,pe),k(pe,he),k(he,fe),k(ie,de),k(ie,ue),k(ue,ve),y(t,we,r),y(t,me,r),k(me,Ee),k(Ee,be),k(be,ge),k(me,ye),k(me,ke),k(ke,Ie),y(t,Pe,r),y(t,$e,r),y(t,Ne,r),y(t,Te,r),k(Te,Le),y(t,Be,r),cs&&cs.m(t,r),y(t,xe,r),y(t,Ce,r),y(t,Ue,r),y(t,De,r),k(De,Ve),y(t,Re,r),y(t,Se,r),k(Se,He),k(He,Oe),k(Oe,Ae),k(Ae,je),k(He,Fe),k(He,qe),k(Se,Me),k(Se,Xe),k(Xe,Ge),y(t,Je,r),y(t,Qe,r),k(Qe,ze),k(ze,Ke),k(Ke,We),k(Qe,Ye),k(Qe,Ze),k(Ze,_e),y(t,as,r),y(t,es,r),y(t,ss,r),ls&&ls.m(t,r),y(t,ts,r),rs=!0,ns||(os=[I(X,"submit",P(a[2])),I(te,"click",H),I(he,"click",O),I(be,"click",O),I(Se,"submit",P(a[3])),I(Ke,"click",deleteLogfile)],ns=!0)},p(a,[e]){a[0].length>0?cs?(cs.p(a,e),1&e&&c(cs,1)):(cs=D(a),cs.c(),c(cs,1),cs.m(xe.parentNode,xe)):cs&&(B(),l(cs,1,1,(()=>{cs=null})),$()),a[1].length>0?ls?(ls.p(a,e),2&e&&c(ls,1)):(ls=V(a),ls.c(),c(ls,1),ls.m(ts.parentNode,ts)):ls&&(B(),l(ls,1,1,(()=>{ls=null})),$())},i(a){rs||(c(e.$$.fragment,a),c(cs),c(ls),rs=!0)},o(a){l(e.$$.fragment,a),l(cs),l(ls),rs=!1},d(a){i(e,a),a&&E(s),a&&E(o),a&&E(T),a&&E(L),a&&E(S),a&&E(A),a&&E(j),a&&E(F),a&&E(M),a&&E(X),a&&E(Ka),a&&E(Wa),a&&E(Ya),a&&E(Za),a&&E(ae),a&&E(ee),a&&E(le),a&&E(ie),a&&E(we),a&&E(me),a&&E(Pe),a&&E($e),a&&E(Ne),a&&E(Te),a&&E(Be),cs&&cs.d(a),a&&E(xe),a&&E(Ce),a&&E(Ue),a&&E(De),a&&E(Re),a&&E(Se),a&&E(Je),a&&E(Qe),a&&E(as),a&&E(es),a&&E(ss),ls&&ls.d(a),a&&E(ts),ns=!1,N(os)}}}async function S({page:a,fetch:e}){const s="/api/db2/snapshots",t="/checkpoints",r="/api/db2/logfiles",n=await e(s),o=await e(t),c=await e(r);return n.ok&&o.ok&&c.ok?{props:{snapshots:await n.json().data,checkpoints:await o.json().data,logfiles:await c.json().data}}:{status:"400",error:new Error(`Could not load ${s},${t},${r}.`)}}function H(){}function O(){}function A(a,e,s){let{snapshots:t=[]}=e,{logfiles:r=[]}=e,{checkpoints:n}=e;return a.$$set=a=>{"snapshots"in a&&s(0,t=a.snapshots),"logfiles"in a&&s(1,r=a.logfiles),"checkpoints"in a&&s(4,n=a.checkpoints)},[t,r,async function(){var a=new FormData;let e=!1;if(this.querySelectorAll("input").forEach((function(s){""!=s.name&&("file"==s.name?(a.append(s.name,s.files[0]),e=!0):a.append(s.name,s.value))})),e){var s=new XMLHttpRequest;s.open("POST","/checkpoints"),s.onreadystatechange=function(){if(4!==xhr.readyState||200!==xhr.status)return!1;console.log("response from checkpoint:",[xhr.response])},s.send(a)}else C.danger("please select a file.")},async function(){var a=new FormData;let e=!1,t="";this.querySelectorAll("input").forEach((function(s){""!=s.name&&"file"==s.name&&(console.log(s.files[0]),a.append(s.name,s.files[0]),t=s.files[0].name,e=!0)}));let n="/logfiles/"+t;if(e){var o=new XMLHttpRequest;o.open("POST",n),o.onreadystatechange=function(){if(4!==o.readyState||200!==o.status)return!1;{let a=JSON.parse(o.response);s(1,r=[...r,a.data]),console.log("response from checkpoint:",[o.response])}},o.send(a)}else C.danger("please select a file.")},n,function(a){t=a,s(0,t)},function(a){r=a,s(1,r)}]}export default class extends a{constructor(a){super(),e(this,a,A,R,s,{snapshots:0,logfiles:1,checkpoints:4})}}export{S as load};
