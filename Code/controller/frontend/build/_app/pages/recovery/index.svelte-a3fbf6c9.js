import{S as e,i as a,s as t,j as s,m as n,o,a5 as r,v as l,r as c,w as i,e as d,t as p,k as h,c as u,a as f,g as m,d as g,n as w,b as v,N as b,f as E,F as y,h as I,G as T,M as N,a6 as D,O as S,u as k,Q as O,z as B,a3 as $,a4 as P,B as C}from"../../chunks/vendor-5cf7a4b5.js";import{T as R,x,n as U,a as L}from"../../chunks/requests-f597ce78.js";import{T as V}from"../../chunks/index-222bcf94.js";function A(e,a,t){const s=e.slice();return s[41]=a[t],s[43]=t,s}function H(e,a,t){const s=e.slice();return s[44]=a[t],s[46]=t,s}function j(e,a,t){const s=e.slice();return s[44]=a[t],s[43]=t,s}function J(e){let a,t,d;function p(a){e[27](a)}let h={title:"Checkpoints",headers:Object.keys(e[2][0])};return void 0!==e[2]&&(h.data=e[2]),a=new V({props:h}),$.push((()=>P(a,"data",p))),{c(){s(a.$$.fragment)},l(e){n(a.$$.fragment,e)},m(e,t){o(a,e,t),d=!0},p(e,s){const n={};4&s[0]&&(n.headers=Object.keys(e[2][0])),!t&&4&s[0]&&(t=!0,n.data=e[2],r((()=>t=!1))),a.$set(n)},i(e){d||(l(a.$$.fragment,e),d=!0)},o(e){c(a.$$.fragment,e),d=!1},d(e){i(a,e)}}}function q(e){let a,t,d;function p(a){e[28](a)}let h={title:"Checkpoint Configurations",headers:Object.keys(e[3][0])};return void 0!==e[3]&&(h.data=e[3]),a=new V({props:h}),$.push((()=>P(a,"data",p))),{c(){s(a.$$.fragment)},l(e){n(a.$$.fragment,e)},m(e,t){o(a,e,t),d=!0},p(e,s){const n={};8&s[0]&&(n.headers=Object.keys(e[3][0])),!t&&8&s[0]&&(t=!0,n.data=e[3],r((()=>t=!1))),a.$set(n)},i(e){d||(l(a.$$.fragment,e),d=!0)},o(e){c(a.$$.fragment,e),d=!1},d(e){i(a,e)}}}function F(e){let a,t,d;function p(a){e[29](a)}let h={title:"Running Containers",headers:Object.keys(e[4][0])};return void 0!==e[4]&&(h.data=e[4]),a=new V({props:h}),$.push((()=>P(a,"data",p))),{c(){s(a.$$.fragment)},l(e){n(a.$$.fragment,e)},m(e,t){o(a,e,t),d=!0},p(e,s){const n={};16&s[0]&&(n.headers=Object.keys(e[4][0])),!t&&16&s[0]&&(t=!0,n.data=e[4],r((()=>t=!1))),a.$set(n)},i(e){d||(l(a.$$.fragment,e),d=!0)},o(e){c(a.$$.fragment,e),d=!1},d(e){i(a,e)}}}function _(e){let a,t,d;function p(a){e[30](a)}let h={title:"Images",headers:Object.keys(e[5][0])};return void 0!==e[5]&&(h.data=e[5]),a=new V({props:h}),$.push((()=>P(a,"data",p))),{c(){s(a.$$.fragment)},l(e){n(a.$$.fragment,e)},m(e,t){o(a,e,t),d=!0},p(e,s){const n={};32&s[0]&&(n.headers=Object.keys(e[5][0])),!t&&32&s[0]&&(t=!0,n.data=e[5],r((()=>t=!1))),a.$set(n)},i(e){d||(l(a.$$.fragment,e),d=!0)},o(e){c(a.$$.fragment,e),d=!1},d(e){i(a,e)}}}function M(e){let a,t,d;function p(a){e[31](a)}let h={title:"Snapshots",headers:Object.keys(e[0][0])};return void 0!==e[0]&&(h.data=e[0]),a=new V({props:h}),$.push((()=>P(a,"data",p))),{c(){s(a.$$.fragment)},l(e){n(a.$$.fragment,e)},m(e,t){o(a,e,t),d=!0},p(e,s){const n={};1&s[0]&&(n.headers=Object.keys(e[0][0])),!t&&1&s[0]&&(t=!0,n.data=e[0],r((()=>t=!1))),a.$set(n)},i(e){d||(l(a.$$.fragment,e),d=!0)},o(e){c(a.$$.fragment,e),d=!1},d(e){i(a,e)}}}function X(e){let a,t,d;function p(a){e[32](a)}let h={title:"Logfiles",headers:Object.keys(e[1][0])};return void 0!==e[1]&&(h.data=e[1]),a=new V({props:h}),$.push((()=>P(a,"data",p))),{c(){s(a.$$.fragment)},l(e){n(a.$$.fragment,e)},m(e,t){o(a,e,t),d=!0},p(e,s){const n={};2&s[0]&&(n.headers=Object.keys(e[1][0])),!t&&2&s[0]&&(t=!0,n.data=e[1],r((()=>t=!1))),a.$set(n)},i(e){d||(l(a.$$.fragment,e),d=!0)},o(e){c(a.$$.fragment,e),d=!1},d(e){i(a,e)}}}function z(e){let a,t,s,n,o,r,l,c,i,I=Object.keys(e[6][0]),T=[];for(let d=0;d<I.length;d+=1)T[d]=G(j(e,I,d));let D=e[6],S=[];for(let d=0;d<D.length;d+=1)S[d]=K(A(e,D,d));return{c(){a=d("div"),t=d("h5"),s=p("Single Data Samples (JSON)"),n=h(),o=d("div"),r=d("table"),l=d("thead"),c=d("tr");for(let e=0;e<T.length;e+=1)T[e].c();i=h();for(let e=0;e<S.length;e+=1)S[e].c();this.h()},l(e){a=u(e,"DIV",{class:!0});var d=f(a);t=u(d,"H5",{});var p=f(t);s=m(p,"Single Data Samples (JSON)"),p.forEach(g),n=w(d),o=u(d,"DIV",{class:!0});var h=f(o);r=u(h,"TABLE",{class:!0,style:!0});var v=f(r);l=u(v,"THEAD",{});var b=f(l);c=u(b,"TR",{class:!0});var E=f(c);for(let a=0;a<T.length;a+=1)T[a].l(E);E.forEach(g),b.forEach(g),i=w(v);for(let a=0;a<S.length;a+=1)S[a].l(v);v.forEach(g),h.forEach(g),d.forEach(g),this.h()},h(){v(c,"class","w3-dark-grey"),v(r,"class","w3-table-all"),b(r,"width","100%"),v(o,"class","w3-responsive"),v(a,"class","w3-container")},m(e,d){E(e,a,d),y(a,t),y(t,s),y(a,n),y(a,o),y(o,r),y(r,l),y(l,c);for(let a=0;a<T.length;a+=1)T[a].m(c,null);y(r,i);for(let a=0;a<S.length;a+=1)S[a].m(r,null)},p(e,a){if(64&a[0]){let t;for(I=Object.keys(e[6][0]),t=0;t<I.length;t+=1){const s=j(e,I,t);T[t]?T[t].p(s,a):(T[t]=G(s),T[t].c(),T[t].m(c,null))}for(;t<T.length;t+=1)T[t].d(1);T.length=I.length}if(67108928&a[0]){let t;for(D=e[6],t=0;t<D.length;t+=1){const s=A(e,D,t);S[t]?S[t].p(s,a):(S[t]=K(s),S[t].c(),S[t].m(r,null))}for(;t<S.length;t+=1)S[t].d(1);S.length=D.length}},d(e){e&&g(a),N(T,e),N(S,e)}}}function G(e){let a,t,s=e[44]+"";return{c(){a=d("th"),t=p(s)},l(e){a=u(e,"TH",{});var n=f(a);t=m(n,s),n.forEach(g)},m(e,s){E(e,a,s),y(a,t)},p(e,a){64&a[0]&&s!==(s=e[44]+"")&&I(t,s)},d(e){e&&g(a)}}}function Q(e){let a,t,s=e[41][e[44]]+"";return{c(){a=d("td"),t=p(s)},l(e){a=u(e,"TD",{});var n=f(a);t=m(n,s),n.forEach(g)},m(e,s){E(e,a,s),y(a,t)},p(e,a){64&a[0]&&s!==(s=e[41][e[44]]+"")&&I(t,s)},d(e){e&&g(a)}}}function K(e){let a,t,s,n,o=Object.keys(e[6][0]),r=[];for(let l=0;l<o.length;l+=1)r[l]=Q(H(e,o,l));return{c(){a=d("tr");for(let e=0;e<r.length;e+=1)r[e].c();t=h(),this.h()},l(e){a=u(e,"TR",{index:!0});var s=f(a);for(let a=0;a<r.length;a+=1)r[a].l(s);t=w(s),s.forEach(g),this.h()},h(){v(a,"index",e[43])},m(o,l){E(o,a,l);for(let e=0;e<r.length;e+=1)r[e].m(a,null);y(a,t),s||(n=T(a,"click",e[26]),s=!0)},p(e,s){if(64&s[0]){let n;for(o=Object.keys(e[6][0]),n=0;n<o.length;n+=1){const l=H(e,o,n);r[n]?r[n].p(l,s):(r[n]=Q(l),r[n].c(),r[n].m(a,t))}for(;n<r.length;n+=1)r[n].d(1);r.length=o.length}},d(e){e&&g(a),N(r,e),s=!1,n()}}}function W(e){let a,t,r,I,N,B,$,P,x,U,L,V,A,H,j,G,Q,K,W,Y,Z,ee,ae,te,se,ne,oe,re,le,ce,ie,de,pe,he,ue,fe,me,ge,we,ve,be,Ee,ye,Ie,Te,Ne,De,Se,ke,Oe,Be,$e,Pe,Ce,Re,xe,Ue,Le,Ve,Ae,He,je,Je,qe,Fe,_e,Me,Xe,ze,Ge,Qe,Ke,We,Ye,Ze,ea,aa,ta,sa,na,oa,ra,la,ca,ia,da,pa,ha,ua,fa,ma,ga,wa,va,ba,Ea,ya,Ia,Ta,Na,Da,Sa,ka,Oa,Ba,$a,Pa,Ca,Ra,xa,Ua,La,Va,Aa,Ha,ja,Ja,qa,Fa,_a,Ma,Xa,za,Ga,Qa,Ka,Wa,Ya,Za,et,at,tt,st,nt,ot,rt,lt,ct,it,dt,pt,ht,ut,ft,mt,gt,wt,vt,bt,Et,yt,It,Tt,Nt,Dt,St,kt,Ot,Bt,$t,Pt,Ct,Rt,xt,Ut,Lt,Vt,At,Ht,jt,Jt,qt,Ft,_t,Mt,Xt,zt,Gt,Qt,Kt,Wt,Yt,Zt,es,as,ts,ss,ns,os,rs,ls,cs,is,ds,ps,hs,us,fs,ms,gs,ws,vs,bs,Es,ys,Is,Ts,Ns,Ds,Ss,ks,Os,Bs,$s,Ps,Cs,Rs,xs,Us,Ls,Vs,As,Hs,js,Js,qs,Fs,_s,Ms,Xs,zs,Gs,Qs,Ks,Ws,Ys,Zs,en,an,tn,sn,nn,on,rn,ln,cn,dn,pn,hn,un,fn,mn,gn,wn,vn,bn,En,yn,In,Tn,Nn,Dn,Sn,kn,On,Bn;a=new R({});let $n=e[2].length>0&&J(e),Pn=e[3].length>0&&q(e),Cn=e[4].length>0&&F(e),Rn=e[5].length>0&&_(e),xn=e[0].length>0&&M(e),Un=e[1].length>0&&X(e),Ln=e[6].length>0&&z(e);return{c(){s(a.$$.fragment),t=h(),r=d("hr"),I=h(),N=d("div"),B=d("h1"),$=d("b"),P=p("Recovery Handlers"),x=h(),U=d("hr"),L=h(),V=d("h2"),A=p("Upload Checkpoint"),H=h(),j=d("form"),G=d("p"),Q=d("label"),K=d("b"),W=p("Image Repository-Version (e.g. ubuntu:latest, ubuntu:16.04)"),Y=h(),Z=d("input"),ee=h(),ae=d("p"),te=d("label"),se=d("b"),ne=p("Container Name"),oe=h(),re=d("input"),le=h(),ce=d("p"),ie=d("label"),de=d("b"),pe=p("Container Ports (8080:8080,443:443)"),he=h(),ue=d("input"),fe=h(),me=d("p"),ge=d("label"),we=d("b"),ve=p("Container Networks"),be=h(),Ee=d("input"),ye=h(),Ie=d("p"),Te=d("label"),Ne=d("b"),De=p("Container Volumes"),Se=h(),ke=d("input"),Oe=h(),Be=d("p"),$e=d("label"),Pe=d("b"),Ce=p("Container Privileged (yes, no)"),Re=h(),xe=d("input"),Ue=h(),Le=d("p"),Ve=d("label"),Ae=d("b"),He=p("File"),je=h(),Je=d("input"),qe=h(),Fe=d("p"),_e=d("input"),Me=h(),Xe=d("hr"),ze=h(),Ge=d("h2"),Qe=p("Monitoring"),Ke=h(),We=d("br"),Ye=h(),Ze=d("button"),ea=p("Reload all Tables"),aa=h(),ta=d("section"),sa=d("h3"),na=p("Available Checkpoints"),oa=h(),$n&&$n.c(),ra=h(),la=d("br"),ca=h(),ia=d("section"),da=d("h3"),pa=p("Checkpoint Configurations"),ha=h(),Pn&&Pn.c(),ua=h(),fa=d("br"),ma=h(),ga=d("section"),wa=d("h3"),va=p("Running Containers"),ba=h(),Cn&&Cn.c(),Ea=h(),ya=d("br"),Ia=h(),Ta=d("section"),Na=d("h3"),Da=p("Images"),Sa=h(),Rn&&Rn.c(),ka=h(),Oa=d("br"),Ba=h(),$a=d("section"),Pa=d("h3"),Ca=p("Snapshot Backups"),Ra=h(),xn&&xn.c(),xa=h(),Ua=d("hr"),La=h(),Va=d("h2"),Aa=p("Recovery Actions"),Ha=h(),ja=d("div"),Ja=d("div"),qa=d("button"),Fa=p("Snapshot Container ( create image )"),_a=h(),Ma=d("div"),Xa=d("input"),za=h(),Ga=d("div"),Qa=d("input"),Ka=h(),Wa=d("div"),Ya=d("div"),Za=d("button"),et=p("Export Snapshot ( image to .tar )"),at=h(),tt=d("div"),st=d("input"),nt=h(),ot=d("div"),rt=d("input"),lt=h(),ct=d("div"),it=d("div"),dt=d("button"),pt=p("Import Snapshot ( .tar to image )"),ht=h(),ut=d("div"),ft=d("input"),mt=h(),gt=d("div"),wt=d("input"),vt=h(),bt=d("div"),Et=d("div"),yt=d("button"),It=p("Backup Snapshot ( .tar to gridfs )"),Tt=h(),Nt=d("div"),Dt=d("input"),St=h(),kt=d("div"),Ot=d("div"),Bt=d("button"),$t=p("Download Snapshot Backup ( as .tar )"),Pt=h(),Ct=d("div"),Rt=d("input"),xt=h(),Ut=d("div"),Lt=d("div"),Vt=d("button"),At=p("Download Checkpoint/Snapshot ( as .tar )"),Ht=h(),jt=d("div"),Jt=d("input"),qt=h(),Ft=d("div"),_t=d("div"),Mt=d("button"),Xt=p("Recover Container ( load from .tar )"),zt=h(),Gt=d("div"),Qt=d("input"),Kt=h(),Wt=d("div"),Yt=d("input"),Zt=h(),es=d("hr"),as=h(),ts=d("h2"),ss=p("Log Files"),ns=h(),os=d("form"),rs=d("p"),ls=d("label"),cs=d("b"),is=p(".csv File"),ds=h(),ps=d("input"),hs=h(),us=d("p"),fs=d("input"),ms=h(),gs=d("br"),ws=h(),vs=d("div"),bs=d("div"),Es=d("button"),ys=p("Delete Logfile"),Is=h(),Ts=d("div"),Ns=d("input"),Ds=h(),Ss=d("div"),ks=d("div"),Os=d("button"),Bs=p("Download Logfile"),$s=h(),Ps=d("div"),Cs=d("input"),Rs=h(),xs=d("br"),Us=h(),Ls=d("section"),Vs=d("h3"),As=p("Available Logfiles"),Hs=h(),Un&&Un.c(),js=h(),Js=d("hr"),qs=h(),Fs=d("h2"),_s=p("Data Recovery"),Ms=h(),Xs=d("br"),zs=h(),Gs=d("button"),Qs=p("Reload Recovery Table"),Ks=h(),Ws=d("br"),Ys=h(),Ln&&Ln.c(),Zs=h(),en=d("br"),an=h(),tn=d("textarea"),nn=h(),on=d("br"),rn=h(),ln=d("div"),cn=d("button"),dn=p("Create Data"),pn=h(),hn=d("textarea"),un=h(),fn=d("div"),mn=d("button"),gn=p("Update Data"),wn=h(),vn=d("input"),bn=h(),En=d("textarea"),yn=h(),In=d("div"),Tn=d("button"),Nn=p("Delete Data"),Dn=h(),Sn=d("input"),this.h()},l(e){n(a.$$.fragment,e),t=w(e),r=u(e,"HR",{class:!0}),I=w(e),N=u(e,"DIV",{class:!0});var s=f(N);B=u(s,"H1",{class:!0,style:!0});var o=f(B);$=u(o,"B",{});var l=f($);P=m(l,"Recovery Handlers"),l.forEach(g),o.forEach(g),s.forEach(g),x=w(e),U=u(e,"HR",{class:!0}),L=w(e),V=u(e,"H2",{});var c=f(V);A=m(c,"Upload Checkpoint"),c.forEach(g),H=w(e),j=u(e,"FORM",{class:!0,enctype:!0});var i=f(j);G=u(i,"P",{});var d=f(G);Q=u(d,"LABEL",{});var p=f(Q);K=u(p,"B",{});var h=f(K);W=m(h,"Image Repository-Version (e.g. ubuntu:latest, ubuntu:16.04)"),h.forEach(g),p.forEach(g),Y=w(d),Z=u(d,"INPUT",{class:!0,name:!0,type:!0}),d.forEach(g),ee=w(i),ae=u(i,"P",{});var v=f(ae);te=u(v,"LABEL",{});var b=f(te);se=u(b,"B",{});var E=f(se);ne=m(E,"Container Name"),E.forEach(g),b.forEach(g),oe=w(v),re=u(v,"INPUT",{class:!0,name:!0,type:!0}),v.forEach(g),le=w(i),ce=u(i,"P",{});var y=f(ce);ie=u(y,"LABEL",{});var T=f(ie);de=u(T,"B",{});var D=f(de);pe=m(D,"Container Ports (8080:8080,443:443)"),D.forEach(g),T.forEach(g),he=w(y),ue=u(y,"INPUT",{class:!0,name:!0,type:!0}),y.forEach(g),fe=w(i),me=u(i,"P",{});var S=f(me);ge=u(S,"LABEL",{});var k=f(ge);we=u(k,"B",{});var O=f(we);ve=m(O,"Container Networks"),O.forEach(g),k.forEach(g),be=w(S),Ee=u(S,"INPUT",{class:!0,name:!0,type:!0}),S.forEach(g),ye=w(i),Ie=u(i,"P",{});var C=f(Ie);Te=u(C,"LABEL",{});var R=f(Te);Ne=u(R,"B",{});var J=f(Ne);De=m(J,"Container Volumes"),J.forEach(g),R.forEach(g),Se=w(C),ke=u(C,"INPUT",{class:!0,name:!0,type:!0}),C.forEach(g),Oe=w(i),Be=u(i,"P",{});var q=f(Be);$e=u(q,"LABEL",{});var F=f($e);Pe=u(F,"B",{});var _=f(Pe);Ce=m(_,"Container Privileged (yes, no)"),_.forEach(g),F.forEach(g),Re=w(q),xe=u(q,"INPUT",{class:!0,name:!0,type:!0}),q.forEach(g),Ue=w(i),Le=u(i,"P",{});var M=f(Le);Ve=u(M,"LABEL",{class:!0});var X=f(Ve);Ae=u(X,"B",{});var z=f(Ae);He=m(z,"File"),z.forEach(g),X.forEach(g),je=w(M),Je=u(M,"INPUT",{class:!0,type:!0,name:!0}),M.forEach(g),qe=w(i),Fe=u(i,"P",{});var sn=f(Fe);_e=u(sn,"INPUT",{class:!0,name:!0,type:!0,value:!0}),sn.forEach(g),i.forEach(g),Me=w(e),Xe=u(e,"HR",{class:!0}),ze=w(e),Ge=u(e,"H2",{});var kn=f(Ge);Qe=m(kn,"Monitoring"),kn.forEach(g),Ke=w(e),We=u(e,"BR",{}),Ye=w(e),Ze=u(e,"BUTTON",{class:!0});var On=f(Ze);ea=m(On,"Reload all Tables"),On.forEach(g),aa=w(e),ta=u(e,"SECTION",{class:!0});var Bn=f(ta);sa=u(Bn,"H3",{});var Vn=f(sa);na=m(Vn,"Available Checkpoints"),Vn.forEach(g),Bn.forEach(g),oa=w(e),$n&&$n.l(e),ra=w(e),la=u(e,"BR",{}),ca=w(e),ia=u(e,"SECTION",{class:!0});var An=f(ia);da=u(An,"H3",{});var Hn=f(da);pa=m(Hn,"Checkpoint Configurations"),Hn.forEach(g),An.forEach(g),ha=w(e),Pn&&Pn.l(e),ua=w(e),fa=u(e,"BR",{}),ma=w(e),ga=u(e,"SECTION",{class:!0});var jn=f(ga);wa=u(jn,"H3",{});var Jn=f(wa);va=m(Jn,"Running Containers"),Jn.forEach(g),jn.forEach(g),ba=w(e),Cn&&Cn.l(e),Ea=w(e),ya=u(e,"BR",{}),Ia=w(e),Ta=u(e,"SECTION",{class:!0});var qn=f(Ta);Na=u(qn,"H3",{});var Fn=f(Na);Da=m(Fn,"Images"),Fn.forEach(g),qn.forEach(g),Sa=w(e),Rn&&Rn.l(e),ka=w(e),Oa=u(e,"BR",{}),Ba=w(e),$a=u(e,"SECTION",{class:!0});var _n=f($a);Pa=u(_n,"H3",{});var Mn=f(Pa);Ca=m(Mn,"Snapshot Backups"),Mn.forEach(g),_n.forEach(g),Ra=w(e),xn&&xn.l(e),xa=w(e),Ua=u(e,"HR",{class:!0}),La=w(e),Va=u(e,"H2",{});var Xn=f(Va);Aa=m(Xn,"Recovery Actions"),Xn.forEach(g),Ha=w(e),ja=u(e,"DIV",{class:!0});var zn=f(ja);Ja=u(zn,"DIV",{class:!0});var Gn=f(Ja);qa=u(Gn,"BUTTON",{class:!0});var Qn=f(qa);Fa=m(Qn,"Snapshot Container ( create image )"),Qn.forEach(g),Gn.forEach(g),_a=w(zn),Ma=u(zn,"DIV",{class:!0});var Kn=f(Ma);Xa=u(Kn,"INPUT",{id:!0,class:!0,name:!0,type:!0,placeholder:!0}),Kn.forEach(g),za=w(zn),Ga=u(zn,"DIV",{class:!0});var Wn=f(Ga);Qa=u(Wn,"INPUT",{id:!0,class:!0,name:!0,type:!0,placeholder:!0}),Wn.forEach(g),zn.forEach(g),Ka=w(e),Wa=u(e,"DIV",{class:!0});var Yn=f(Wa);Ya=u(Yn,"DIV",{class:!0});var Zn=f(Ya);Za=u(Zn,"BUTTON",{class:!0});var eo=f(Za);et=m(eo,"Export Snapshot ( image to .tar )"),eo.forEach(g),Zn.forEach(g),at=w(Yn),tt=u(Yn,"DIV",{class:!0});var ao=f(tt);st=u(ao,"INPUT",{id:!0,class:!0,name:!0,type:!0,placeholder:!0}),ao.forEach(g),nt=w(Yn),ot=u(Yn,"DIV",{class:!0});var to=f(ot);rt=u(to,"INPUT",{id:!0,class:!0,name:!0,type:!0,placeholder:!0}),to.forEach(g),Yn.forEach(g),lt=w(e),ct=u(e,"DIV",{class:!0});var so=f(ct);it=u(so,"DIV",{class:!0});var no=f(it);dt=u(no,"BUTTON",{class:!0});var oo=f(dt);pt=m(oo,"Import Snapshot ( .tar to image )"),oo.forEach(g),no.forEach(g),ht=w(so),ut=u(so,"DIV",{class:!0});var ro=f(ut);ft=u(ro,"INPUT",{id:!0,class:!0,name:!0,type:!0,placeholder:!0}),ro.forEach(g),mt=w(so),gt=u(so,"DIV",{class:!0});var lo=f(gt);wt=u(lo,"INPUT",{id:!0,class:!0,name:!0,type:!0,placeholder:!0}),lo.forEach(g),so.forEach(g),vt=w(e),bt=u(e,"DIV",{class:!0});var co=f(bt);Et=u(co,"DIV",{class:!0});var io=f(Et);yt=u(io,"BUTTON",{class:!0});var po=f(yt);It=m(po,"Backup Snapshot ( .tar to gridfs )"),po.forEach(g),io.forEach(g),Tt=w(co),Nt=u(co,"DIV",{class:!0});var ho=f(Nt);Dt=u(ho,"INPUT",{id:!0,class:!0,name:!0,type:!0,placeholder:!0}),ho.forEach(g),co.forEach(g),St=w(e),kt=u(e,"DIV",{class:!0});var uo=f(kt);Ot=u(uo,"DIV",{class:!0});var fo=f(Ot);Bt=u(fo,"BUTTON",{class:!0});var mo=f(Bt);$t=m(mo,"Download Snapshot Backup ( as .tar )"),mo.forEach(g),fo.forEach(g),Pt=w(uo),Ct=u(uo,"DIV",{class:!0});var go=f(Ct);Rt=u(go,"INPUT",{id:!0,class:!0,name:!0,type:!0,placeholder:!0}),go.forEach(g),uo.forEach(g),xt=w(e),Ut=u(e,"DIV",{class:!0});var wo=f(Ut);Lt=u(wo,"DIV",{class:!0});var vo=f(Lt);Vt=u(vo,"BUTTON",{class:!0});var bo=f(Vt);At=m(bo,"Download Checkpoint/Snapshot ( as .tar )"),bo.forEach(g),vo.forEach(g),Ht=w(wo),jt=u(wo,"DIV",{class:!0});var Eo=f(jt);Jt=u(Eo,"INPUT",{id:!0,class:!0,name:!0,type:!0,placeholder:!0}),Eo.forEach(g),wo.forEach(g),qt=w(e),Ft=u(e,"DIV",{class:!0});var yo=f(Ft);_t=u(yo,"DIV",{class:!0});var Io=f(_t);Mt=u(Io,"BUTTON",{class:!0});var To=f(Mt);Xt=m(To,"Recover Container ( load from .tar )"),To.forEach(g),Io.forEach(g),zt=w(yo),Gt=u(yo,"DIV",{class:!0});var No=f(Gt);Qt=u(No,"INPUT",{id:!0,class:!0,name:!0,type:!0,placeholder:!0}),No.forEach(g),Kt=w(yo),Wt=u(yo,"DIV",{class:!0});var Do=f(Wt);Yt=u(Do,"INPUT",{id:!0,class:!0,name:!0,type:!0,placeholder:!0}),Do.forEach(g),yo.forEach(g),Zt=w(e),es=u(e,"HR",{class:!0}),as=w(e),ts=u(e,"H2",{});var So=f(ts);ss=m(So,"Log Files"),So.forEach(g),ns=w(e),os=u(e,"FORM",{class:!0,enctype:!0});var ko=f(os);rs=u(ko,"P",{});var Oo=f(rs);ls=u(Oo,"LABEL",{class:!0});var Bo=f(ls);cs=u(Bo,"B",{});var $o=f(cs);is=m($o,".csv File"),$o.forEach(g),Bo.forEach(g),ds=w(Oo),ps=u(Oo,"INPUT",{class:!0,type:!0,name:!0}),Oo.forEach(g),hs=w(ko),us=u(ko,"P",{});var Po=f(us);fs=u(Po,"INPUT",{class:!0,type:!0,value:!0}),Po.forEach(g),ko.forEach(g),ms=w(e),gs=u(e,"BR",{}),ws=w(e),vs=u(e,"DIV",{class:!0});var Co=f(vs);bs=u(Co,"DIV",{class:!0});var Ro=f(bs);Es=u(Ro,"BUTTON",{class:!0});var xo=f(Es);ys=m(xo,"Delete Logfile"),xo.forEach(g),Ro.forEach(g),Is=w(Co),Ts=u(Co,"DIV",{class:!0});var Uo=f(Ts);Ns=u(Uo,"INPUT",{id:!0,class:!0,name:!0,type:!0,placeholder:!0}),Uo.forEach(g),Co.forEach(g),Ds=w(e),Ss=u(e,"DIV",{class:!0});var Lo=f(Ss);ks=u(Lo,"DIV",{class:!0});var Vo=f(ks);Os=u(Vo,"BUTTON",{class:!0});var Ao=f(Os);Bs=m(Ao,"Download Logfile"),Ao.forEach(g),Vo.forEach(g),$s=w(Lo),Ps=u(Lo,"DIV",{class:!0});var Ho=f(Ps);Cs=u(Ho,"INPUT",{id:!0,class:!0,name:!0,type:!0,placeholder:!0}),Ho.forEach(g),Lo.forEach(g),Rs=w(e),xs=u(e,"BR",{}),Us=w(e),Ls=u(e,"SECTION",{class:!0});var jo=f(Ls);Vs=u(jo,"H3",{});var Jo=f(Vs);As=m(Jo,"Available Logfiles"),Jo.forEach(g),jo.forEach(g),Hs=w(e),Un&&Un.l(e),js=w(e),Js=u(e,"HR",{class:!0}),qs=w(e),Fs=u(e,"H2",{});var qo=f(Fs);_s=m(qo,"Data Recovery"),qo.forEach(g),Ms=w(e),Xs=u(e,"BR",{}),zs=w(e),Gs=u(e,"BUTTON",{class:!0});var Fo=f(Gs);Qs=m(Fo,"Reload Recovery Table"),Fo.forEach(g),Ks=w(e),Ws=u(e,"BR",{}),Ys=w(e),Ln&&Ln.l(e),Zs=w(e),en=u(e,"BR",{}),an=w(e),tn=u(e,"TEXTAREA",{id:!0,class:!0,placeholder:!0,type:!0,value:!0}),f(tn).forEach(g),nn=w(e),on=u(e,"BR",{}),rn=w(e),ln=u(e,"DIV",{class:!0});var _o=f(ln);cn=u(_o,"BUTTON",{class:!0});var Mo=f(cn);dn=m(Mo,"Create Data"),Mo.forEach(g),pn=w(_o),hn=u(_o,"TEXTAREA",{id:!0,class:!0,placeholder:!0,type:!0}),f(hn).forEach(g),_o.forEach(g),un=w(e),fn=u(e,"DIV",{class:!0});var Xo=f(fn);mn=u(Xo,"BUTTON",{class:!0});var zo=f(mn);gn=m(zo,"Update Data"),zo.forEach(g),wn=w(Xo),vn=u(Xo,"INPUT",{id:!0,class:!0,name:!0,type:!0,placeholder:!0}),bn=w(Xo),En=u(Xo,"TEXTAREA",{id:!0,class:!0,placeholder:!0,type:!0}),f(En).forEach(g),Xo.forEach(g),yn=w(e),In=u(e,"DIV",{class:!0});var Go=f(In);Tn=u(Go,"BUTTON",{class:!0});var Qo=f(Tn);Nn=m(Qo,"Delete Data"),Qo.forEach(g),Dn=w(Go),Sn=u(Go,"INPUT",{id:!0,class:!0,name:!0,type:!0,placeholder:!0}),Go.forEach(g),this.h()},h(){v(r,"class","svelte-t4qhpe"),v(B,"class","w3-text-yellow"),b(B,"text-shadow","1px 1px 0 #444"),v(N,"class","w3-panel w3-blue"),v(U,"class","svelte-t4qhpe"),v(Z,"class","w3-input w3-border"),v(Z,"name","repo_version"),v(Z,"type","text"),v(re,"class","w3-input w3-border"),v(re,"name","containername"),v(re,"type","text"),v(ue,"class","w3-input w3-border"),v(ue,"name","containerports"),v(ue,"type","text"),v(Ee,"class","w3-input w3-border"),v(Ee,"name","containernetworks"),v(Ee,"type","text"),v(ke,"class","w3-input w3-border"),v(ke,"name","containervolumes"),v(ke,"type","text"),v(xe,"class","w3-input w3-border"),v(xe,"name","containerprivilege"),v(xe,"type","text"),v(Ve,"class","w3-text-blue"),v(Je,"class","w3-input w3-border"),v(Je,"type","file"),v(Je,"name","file"),v(_e,"class","w3-col w3-input w3-border w3-margin-bottom"),v(_e,"name","submitbtn"),v(_e,"type","submit"),_e.value="upload",v(j,"class","w3-container w3-card-4"),v(j,"enctype","multipart/form-data"),v(Xe,"class","svelte-t4qhpe"),v(Ze,"class","w3-col w3-input w3-border w3-margin-bottom"),v(ta,"class","page-headline"),v(ia,"class","page-headline"),v(ga,"class","page-headline"),v(Ta,"class","page-headline"),v($a,"class","page-headline"),v(Ua,"class","svelte-t4qhpe"),v(qa,"class","w3-col w3-input w3-border w3-button"),v(Ja,"class","w3-third"),v(Xa,"id","snapshotContainer"),v(Xa,"class","w3-input w3-border"),v(Xa,"name","containername"),v(Xa,"type","text"),v(Xa,"placeholder","Container Name"),v(Ma,"class","w3-third"),v(Qa,"id","snapshotImageTag"),v(Qa,"class","w3-input w3-border"),v(Qa,"name","imagetag"),v(Qa,"type","text"),v(Qa,"placeholder","Image Tag (e.g. myimage-01)"),v(Ga,"class","w3-rest"),v(ja,"class","w3-row w3-section"),v(Za,"class","w3-col w3-input w3-border w3-button"),v(Ya,"class","w3-third"),v(st,"id","exportSnapshot"),v(st,"class","w3-input w3-border"),v(st,"name","imagetag"),v(st,"type","text"),v(st,"placeholder","Image Tag (e.g. myimage-01)"),v(tt,"class","w3-third"),v(rt,"id","exportSnapshotTar"),v(rt,"class","w3-input w3-border"),v(rt,"name","tarname"),v(rt,"type","text"),v(rt,"placeholder",".tar Filename"),v(ot,"class","w3-rest"),v(Wa,"class","w3-row w3-section"),v(dt,"class","w3-col w3-input w3-border w3-button"),v(it,"class","w3-third"),v(ft,"id","importSnapshotTar"),v(ft,"class","w3-input w3-border"),v(ft,"name","tarname"),v(ft,"type","text"),v(ft,"placeholder",".tar Filename"),v(ut,"class","w3-third"),v(wt,"id","importSnapshot"),v(wt,"class","w3-input w3-border"),v(wt,"name","imagetag"),v(wt,"type","text"),v(wt,"placeholder","Image Tag (e.g. myimage-01)"),v(gt,"class","w3-third"),v(ct,"class","w3-row w3-section"),v(yt,"class","w3-col w3-input w3-border w3-button"),v(Et,"class","w3-third"),v(Dt,"id","backupSnapshot"),v(Dt,"class","w3-input w3-border"),v(Dt,"name","tarname"),v(Dt,"type","text"),v(Dt,"placeholder",".tar Filename"),v(Nt,"class","w3-rest"),v(bt,"class","w3-row w3-section"),v(Bt,"class","w3-col w3-input w3-border w3-button"),v(Ot,"class","w3-third"),v(Rt,"id","downloadSnapshotTar"),v(Rt,"class","w3-input w3-border"),v(Rt,"name","snapshotname"),v(Rt,"type","text"),v(Rt,"placeholder","Snapshot Name"),v(Ct,"class","w3-rest"),v(kt,"class","w3-row w3-section"),v(Vt,"class","w3-col w3-input w3-border w3-button"),v(Lt,"class","w3-third"),v(Jt,"id","downloadCheckpointTar"),v(Jt,"class","w3-input w3-border"),v(Jt,"name","checkpointname"),v(Jt,"type","text"),v(Jt,"placeholder","Checkpoint Name"),v(jt,"class","w3-rest"),v(Ut,"class","w3-row w3-section"),v(Mt,"class","w3-col w3-input w3-border w3-button"),v(_t,"class","w3-third"),v(Qt,"id","recoverContainer"),v(Qt,"class","w3-input w3-border"),v(Qt,"name","containername"),v(Qt,"type","text"),v(Qt,"placeholder","Container Name"),v(Gt,"class","w3-third"),v(Yt,"id","recoverContainerTar"),v(Yt,"class","w3-input w3-border"),v(Yt,"name","checkpointname"),v(Yt,"type","text"),v(Yt,"placeholder","Checkpoint Name (.tar filename)"),v(Wt,"class","w3-rest"),v(Ft,"class","w3-row w3-section"),v(es,"class","svelte-t4qhpe"),v(ls,"class","w3-text-blue"),v(ps,"class","w3-input w3-border"),v(ps,"type","file"),v(ps,"name","file"),v(fs,"class","w3-col w3-input w3-border w3-margin-bottom"),v(fs,"type","submit"),fs.value="upload",v(os,"class","w3-container w3-card-4"),v(os,"enctype","multipart/form-data"),v(Es,"class","w3-col w3-input w3-border w3-button"),v(bs,"class","w3-third"),v(Ns,"id","deleteLogfileInput"),v(Ns,"class","w3-input w3-border"),v(Ns,"name","logfileid"),v(Ns,"type","text"),v(Ns,"placeholder","Logfile ID"),v(Ts,"class","w3-rest"),v(vs,"class","w3-row w3-section"),v(Os,"class","w3-col w3-input w3-border w3-button"),v(ks,"class","w3-third"),v(Cs,"id","downloadLogfile"),v(Cs,"class","w3-input w3-border"),v(Cs,"name","logfileid"),v(Cs,"type","text"),v(Cs,"placeholder","Logfile ID"),v(Ps,"class","w3-rest"),v(Ss,"class","w3-row w3-section"),v(Ls,"class","page-headline"),v(Js,"class","svelte-t4qhpe"),v(Gs,"class","w3-col w3-input w3-border w3-margin-bottom"),v(tn,"id","jsonSampleId"),v(tn,"class","textarea w3-input w3-border svelte-t4qhpe"),v(tn,"placeholder","JSON Data"),v(tn,"type","text"),tn.value=sn=JSON.stringify(e[7]),v(cn,"class","w3-col w3-input w3-border w3-button"),v(hn,"id","createDataArea"),v(hn,"class","regular textarea w3-input w3-border svelte-t4qhpe"),v(hn,"placeholder","JSON Data"),v(hn,"type","text"),v(ln,"class","w3-row w3-section"),v(mn,"class","w3-col w3-input w3-border w3-button"),v(vn,"id","updateDataId"),v(vn,"class","w3-input w3-border"),v(vn,"name","logfileid"),v(vn,"type","text"),v(vn,"placeholder","Object Identifier"),v(En,"id","updateDataArea"),v(En,"class","regular textarea w3-input w3-border svelte-t4qhpe"),v(En,"placeholder","JSON Data"),v(En,"type","text"),v(fn,"class","w3-row w3-section"),v(Tn,"class","w3-col w3-input w3-border w3-button"),v(Sn,"id","deleteDataId"),v(Sn,"class","w3-input w3-border"),v(Sn,"name","logfileid"),v(Sn,"type","text"),v(Sn,"placeholder","Object Identifier"),v(In,"class","w3-row w3-section")},m(s,n){o(a,s,n),E(s,t,n),E(s,r,n),E(s,I,n),E(s,N,n),y(N,B),y(B,$),y($,P),E(s,x,n),E(s,U,n),E(s,L,n),E(s,V,n),y(V,A),E(s,H,n),E(s,j,n),y(j,G),y(G,Q),y(Q,K),y(K,W),y(G,Y),y(G,Z),y(j,ee),y(j,ae),y(ae,te),y(te,se),y(se,ne),y(ae,oe),y(ae,re),y(j,le),y(j,ce),y(ce,ie),y(ie,de),y(de,pe),y(ce,he),y(ce,ue),y(j,fe),y(j,me),y(me,ge),y(ge,we),y(we,ve),y(me,be),y(me,Ee),y(j,ye),y(j,Ie),y(Ie,Te),y(Te,Ne),y(Ne,De),y(Ie,Se),y(Ie,ke),y(j,Oe),y(j,Be),y(Be,$e),y($e,Pe),y(Pe,Ce),y(Be,Re),y(Be,xe),y(j,Ue),y(j,Le),y(Le,Ve),y(Ve,Ae),y(Ae,He),y(Le,je),y(Le,Je),y(j,qe),y(j,Fe),y(Fe,_e),E(s,Me,n),E(s,Xe,n),E(s,ze,n),E(s,Ge,n),y(Ge,Qe),E(s,Ke,n),E(s,We,n),E(s,Ye,n),E(s,Ze,n),y(Ze,ea),E(s,aa,n),E(s,ta,n),y(ta,sa),y(sa,na),E(s,oa,n),$n&&$n.m(s,n),E(s,ra,n),E(s,la,n),E(s,ca,n),E(s,ia,n),y(ia,da),y(da,pa),E(s,ha,n),Pn&&Pn.m(s,n),E(s,ua,n),E(s,fa,n),E(s,ma,n),E(s,ga,n),y(ga,wa),y(wa,va),E(s,ba,n),Cn&&Cn.m(s,n),E(s,Ea,n),E(s,ya,n),E(s,Ia,n),E(s,Ta,n),y(Ta,Na),y(Na,Da),E(s,Sa,n),Rn&&Rn.m(s,n),E(s,ka,n),E(s,Oa,n),E(s,Ba,n),E(s,$a,n),y($a,Pa),y(Pa,Ca),E(s,Ra,n),xn&&xn.m(s,n),E(s,xa,n),E(s,Ua,n),E(s,La,n),E(s,Va,n),y(Va,Aa),E(s,Ha,n),E(s,ja,n),y(ja,Ja),y(Ja,qa),y(qa,Fa),y(ja,_a),y(ja,Ma),y(Ma,Xa),y(ja,za),y(ja,Ga),y(Ga,Qa),E(s,Ka,n),E(s,Wa,n),y(Wa,Ya),y(Ya,Za),y(Za,et),y(Wa,at),y(Wa,tt),y(tt,st),y(Wa,nt),y(Wa,ot),y(ot,rt),E(s,lt,n),E(s,ct,n),y(ct,it),y(it,dt),y(dt,pt),y(ct,ht),y(ct,ut),y(ut,ft),y(ct,mt),y(ct,gt),y(gt,wt),E(s,vt,n),E(s,bt,n),y(bt,Et),y(Et,yt),y(yt,It),y(bt,Tt),y(bt,Nt),y(Nt,Dt),E(s,St,n),E(s,kt,n),y(kt,Ot),y(Ot,Bt),y(Bt,$t),y(kt,Pt),y(kt,Ct),y(Ct,Rt),E(s,xt,n),E(s,Ut,n),y(Ut,Lt),y(Lt,Vt),y(Vt,At),y(Ut,Ht),y(Ut,jt),y(jt,Jt),E(s,qt,n),E(s,Ft,n),y(Ft,_t),y(_t,Mt),y(Mt,Xt),y(Ft,zt),y(Ft,Gt),y(Gt,Qt),y(Ft,Kt),y(Ft,Wt),y(Wt,Yt),E(s,Zt,n),E(s,es,n),E(s,as,n),E(s,ts,n),y(ts,ss),E(s,ns,n),E(s,os,n),y(os,rs),y(rs,ls),y(ls,cs),y(cs,is),y(rs,ds),y(rs,ps),y(os,hs),y(os,us),y(us,fs),E(s,ms,n),E(s,gs,n),E(s,ws,n),E(s,vs,n),y(vs,bs),y(bs,Es),y(Es,ys),y(vs,Is),y(vs,Ts),y(Ts,Ns),E(s,Ds,n),E(s,Ss,n),y(Ss,ks),y(ks,Os),y(Os,Bs),y(Ss,$s),y(Ss,Ps),y(Ps,Cs),E(s,Rs,n),E(s,xs,n),E(s,Us,n),E(s,Ls,n),y(Ls,Vs),y(Vs,As),E(s,Hs,n),Un&&Un.m(s,n),E(s,js,n),E(s,Js,n),E(s,qs,n),E(s,Fs,n),y(Fs,_s),E(s,Ms,n),E(s,Xs,n),E(s,zs,n),E(s,Gs,n),y(Gs,Qs),E(s,Ks,n),E(s,Ws,n),E(s,Ys,n),Ln&&Ln.m(s,n),E(s,Zs,n),E(s,en,n),E(s,an,n),E(s,tn,n),E(s,nn,n),E(s,on,n),E(s,rn,n),E(s,ln,n),y(ln,cn),y(cn,dn),y(ln,pn),y(ln,hn),D(hn,e[8]),E(s,un,n),E(s,fn,n),y(fn,mn),y(mn,gn),y(fn,wn),y(fn,vn),y(fn,bn),y(fn,En),D(En,e[9]),E(s,yn,n),E(s,In,n),y(In,Tn),y(Tn,Nn),y(In,Dn),y(In,Sn),kn=!0,On||(Bn=[T(j,"submit",S(e[19])),T(Ze,"click",e[11]),T(qa,"click",e[12]),T(Za,"click",e[13]),T(dt,"click",e[14]),T(yt,"click",e[15]),T(Bt,"click",e[17]),T(Vt,"click",e[18]),T(Mt,"click",e[16]),T(os,"submit",S(e[21])),T(Es,"click",e[20]),T(Os,"click",e[22]),T(Gs,"click",e[10]),T(cn,"click",e[23]),T(hn,"input",e[33]),T(mn,"click",e[24]),T(En,"input",e[34]),T(Tn,"click",e[25])],On=!0)},p(e,a){e[2].length>0?$n?($n.p(e,a),4&a[0]&&l($n,1)):($n=J(e),$n.c(),l($n,1),$n.m(ra.parentNode,ra)):$n&&(C(),c($n,1,1,(()=>{$n=null})),k()),e[3].length>0?Pn?(Pn.p(e,a),8&a[0]&&l(Pn,1)):(Pn=q(e),Pn.c(),l(Pn,1),Pn.m(ua.parentNode,ua)):Pn&&(C(),c(Pn,1,1,(()=>{Pn=null})),k()),e[4].length>0?Cn?(Cn.p(e,a),16&a[0]&&l(Cn,1)):(Cn=F(e),Cn.c(),l(Cn,1),Cn.m(Ea.parentNode,Ea)):Cn&&(C(),c(Cn,1,1,(()=>{Cn=null})),k()),e[5].length>0?Rn?(Rn.p(e,a),32&a[0]&&l(Rn,1)):(Rn=_(e),Rn.c(),l(Rn,1),Rn.m(ka.parentNode,ka)):Rn&&(C(),c(Rn,1,1,(()=>{Rn=null})),k()),e[0].length>0?xn?(xn.p(e,a),1&a[0]&&l(xn,1)):(xn=M(e),xn.c(),l(xn,1),xn.m(xa.parentNode,xa)):xn&&(C(),c(xn,1,1,(()=>{xn=null})),k()),e[1].length>0?Un?(Un.p(e,a),2&a[0]&&l(Un,1)):(Un=X(e),Un.c(),l(Un,1),Un.m(js.parentNode,js)):Un&&(C(),c(Un,1,1,(()=>{Un=null})),k()),e[6].length>0?Ln?Ln.p(e,a):(Ln=z(e),Ln.c(),Ln.m(Zs.parentNode,Zs)):Ln&&(Ln.d(1),Ln=null),(!kn||128&a[0]&&sn!==(sn=JSON.stringify(e[7])))&&(tn.value=sn),256&a[0]&&D(hn,e[8]),512&a[0]&&D(En,e[9])},i(e){kn||(l(a.$$.fragment,e),l($n),l(Pn),l(Cn),l(Rn),l(xn),l(Un),kn=!0)},o(e){c(a.$$.fragment,e),c($n),c(Pn),c(Cn),c(Rn),c(xn),c(Un),kn=!1},d(e){i(a,e),e&&g(t),e&&g(r),e&&g(I),e&&g(N),e&&g(x),e&&g(U),e&&g(L),e&&g(V),e&&g(H),e&&g(j),e&&g(Me),e&&g(Xe),e&&g(ze),e&&g(Ge),e&&g(Ke),e&&g(We),e&&g(Ye),e&&g(Ze),e&&g(aa),e&&g(ta),e&&g(oa),$n&&$n.d(e),e&&g(ra),e&&g(la),e&&g(ca),e&&g(ia),e&&g(ha),Pn&&Pn.d(e),e&&g(ua),e&&g(fa),e&&g(ma),e&&g(ga),e&&g(ba),Cn&&Cn.d(e),e&&g(Ea),e&&g(ya),e&&g(Ia),e&&g(Ta),e&&g(Sa),Rn&&Rn.d(e),e&&g(ka),e&&g(Oa),e&&g(Ba),e&&g($a),e&&g(Ra),xn&&xn.d(e),e&&g(xa),e&&g(Ua),e&&g(La),e&&g(Va),e&&g(Ha),e&&g(ja),e&&g(Ka),e&&g(Wa),e&&g(lt),e&&g(ct),e&&g(vt),e&&g(bt),e&&g(St),e&&g(kt),e&&g(xt),e&&g(Ut),e&&g(qt),e&&g(Ft),e&&g(Zt),e&&g(es),e&&g(as),e&&g(ts),e&&g(ns),e&&g(os),e&&g(ms),e&&g(gs),e&&g(ws),e&&g(vs),e&&g(Ds),e&&g(Ss),e&&g(Rs),e&&g(xs),e&&g(Us),e&&g(Ls),e&&g(Hs),Un&&Un.d(e),e&&g(js),e&&g(Js),e&&g(qs),e&&g(Fs),e&&g(Ms),e&&g(Xs),e&&g(zs),e&&g(Gs),e&&g(Ks),e&&g(Ws),e&&g(Ys),Ln&&Ln.d(e),e&&g(Zs),e&&g(en),e&&g(an),e&&g(tn),e&&g(nn),e&&g(on),e&&g(rn),e&&g(ln),e&&g(un),e&&g(fn),e&&g(yn),e&&g(In),On=!1,O(Bn)}}}function Y(e,a){let t=document.createElement("a");document.body.appendChild(t),t.style="display: none";let s=window.URL.createObjectURL(e);t.href=s,t.download=a,t.click(),window.URL.revokeObjectURL(s)}function Z(e,a,t){let s=[],n=[],o=[],r=[],l=[],c=[],i=[],d={},p="{}",h="{}";function u(){x("/data/db2/recoverydata/all",(function(e){console.log("result from fetch",e);let a=JSON.parse(e.response);if(a.data){let e=[];for(let t=0;t<a.data.length;t++)e.push({_id:a.data[t]._id,data:a.data[t]});t(6,i=e),console.log("fetched recoverydata:",i)}}))}async function f(){x("/api/db2/logfiles",(function(e){console.log("result from fetch",e);let a=JSON.parse(e.response);a.data&&(t(1,n=a.data),console.log("fetched logfiles:",n))})),x("/checkpoints",(function(e){console.log("result from fetch checkpoints",e);let a=JSON.parse(e.response);a.data&&(t(2,o=a.data),console.log("fetched checkpoints:",o))})),x("/api/db2/checkpoints",(function(e){console.log("result from fetch",e);let a=JSON.parse(e.response);a.data&&(t(3,r=a.data),console.log("fetched cpConfigs:",r))})),x("/containers",(function(e){let a=JSON.parse(e.response);a.data&&t(4,l=a.data)})),x("/images",(function(e){let a=JSON.parse(e.response);a.data&&t(5,c=a.data)})),x("/snapshots/files",(function(e){console.log("result from fetch",e);let a=JSON.parse(e.response);a.data&&(t(0,s=a.data),console.log("fetched snapshots:",s))})),u()}return B((async()=>{f()})),[s,n,o,r,l,c,i,d,p,h,u,f,function(){let e=document.getElementById("snapshotContainer").value,a=document.getElementById("snapshotImageTag").value;""!=e&&""!=a?a.includes("-")?L("/snapshots/container/"+e+"/"+a,"POST",{},(function(e){f(),U.success("Snapshot creation success.")})):U.danger("Please separate image name and version by dash due to url parameter passing."):U.danger("Please specify a container and image-tag name.")},function(){let e=document.getElementById("exportSnapshot").value,a=document.getElementById("exportSnapshotTar").value;""!=e&&""!=a?e.includes("-")?L("/snapshots/export/"+a+"/"+e,"POST",{},(function(e){f(),U.success("Snapshot export success.")})):U.danger("Please separate image name and version by dash due to url parameter passing."):U.danger("Please specify a imagetag and tarfile name.")},function(){let e=document.getElementById("importSnapshotTar").value,a=document.getElementById("importSnapshot").value;""!=a&&""!=e?a.includes("-")?L("/snapshots/import/"+e+"/"+a,"POST",{},(function(e){f(),U.success("Snapshot import success.")})):U.danger("Please separate image name and version by dash due to url parameter passing."):U.danger("Please specify a imagetag and tarfile name.")},function(){let e=document.getElementById("backupSnapshot").value;""!=e?L("/snapshots/backup/"+e,"POST",{},(function(e){f(),U.success("Snapshot import success.")})):U.danger("Please specify a tarfilename name.")},function(){let e=document.getElementById("recoverContainerTar").value,a=document.getElementById("recoverContainer").value;""!=a&&""!=e?L("/recovery/"+a+"/"+e,"POST",{},(function(e){f(),U.success("Recovery of container successful.")})):U.danger("Please specify a container and .tar name.")},async function(){let e=document.getElementById("downloadSnapshotTar").value;console.log(e),x("/download/snapshots/"+e,(function(e){Y(new Blob([e.response],{type:"octet/stream"}),decodeURIComponent(e.getResponseHeader("Content-Disposition").split("filename=")[1].split(";")[0]))}))},async function(){let e=document.getElementById("downloadCheckpointTar").value;x("/download/tars/"+e,(function(a){Y(new Blob([a.response],{type:"octet/stream"}),e)}))},async function(){var e=new FormData;let a=!1,t={};if(this.querySelectorAll("input").forEach((function(s){"submitbtn"!=s.name&&""!=s.name&&("file"==s.name?(e.append(s.name,s.files[0]),a=!0):t[s.name]=s.value)})),console.log("extra Params:",t),e.append("metadata",new Blob([JSON.stringify(t)],{type:"application/json"})),!a)return void U.danger("please select a file.");var s=new XMLHttpRequest;s.open("POST","/checkpoints"),s.onreadystatechange=function(){if(4!==s.readyState||200!==s.status)return!1;{let e=JSON.parse(s.response);console.log("response from checkpoint:",e),U.success("uploaded tar file to checkpoint")}},s.send(e)},function(){let e,a=document.getElementById("deleteLogfileInput").value,s=!1;for(let t=0;t<n.length;t++)a==n[t]._id&&(s=!0,e=n[t]);if(!s)return void U.danger("Please specify an LogID.");L("/gridfs/db2/logfiles","DELETE",e,(function(e){t(1,n=n.filter((e=>e._id!==a))),U.success("Logfile deleted successfully.")}))},async function(){var e=new FormData;let a=!1,s="";this.querySelectorAll("input").forEach((function(t){""!=t.name&&"file"==t.name&&(console.log(t.files[0]),e.append(t.name,t.files[0]),s=t.files[0].name,a=!0)}));let o="/logfiles/"+s;if(a){var r=new XMLHttpRequest;r.open("POST",o),r.onreadystatechange=function(){if(4!==r.readyState||200!==r.status)return!1;{let e=JSON.parse(r.response);t(1,n=[...n,e.data]),console.log("response from checkpoint:",[r.response])}},r.send(e)}else U.danger("please select a file.")},function(){let e=document.getElementById("downloadLogfile").value,a=!1;console.log("download logfile",n);for(let t=0;t<n.length;t++)parseInt(e)==parseInt(n[t]._id)&&(a=!0);a?x("/download/db2/logfiles/"+e,(function(e){Y(new Blob([e.response],{type:"octet/stream"}),decodeURIComponent(e.getResponseHeader("Content-Disposition").split("filename=")[1].split(";")[0]))})):U.danger("Please specify an LogID.")},function(){let e="/data/db2/recoverydata";console.log("creating",p,JSON.parse(p),e),L(e,"POST",JSON.parse(p),(function(e){u(),U.success("Create data success.")}))},function(){let e="/data/db2/recoverydata/"+document.getElementById("updateDataId").value;console.log("updating",JSON.parse(update_sample),e),L(e,"PUT",JSON.parse(update_sample),(function(e){u(),U.success("Update data success.")}))},function(){let e="/data/db2/recoverydata/"+document.getElementById("deleteDataId").value;console.log("deleting",e),L(e,"DELETE",{},(function(e){u(),U.success("Delete data success.")}))},function(){let e=this.getAttribute("index");console.log(this);for(var a=0;a<i.length;a++)parseInt(e)==a&&(t(7,d=i[a].data),a=i.length)},function(e){o=e,t(2,o)},function(e){r=e,t(3,r)},function(e){l=e,t(4,l)},function(e){c=e,t(5,c)},function(e){s=e,t(0,s)},function(e){n=e,t(1,n)},function(){p=this.value,t(8,p)},function(){h=this.value,t(9,h)}]}export default class extends e{constructor(e){super(),a(this,e,Z,W,t,{},[-1,-1])}}