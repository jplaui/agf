import{S as e,i as a,s as t,j as s,m as n,o,a5 as r,v as l,r as c,w as i,e as d,t as p,k as h,c as u,a as f,g as m,d as w,n as v,b as g,N as b,f as E,F as y,h as I,G as T,M as D,a6 as N,O as S,u as k,Q as B,z as O,a3 as x,a4 as $,B as P}from"../../chunks/vendor-5cf7a4b5.js";import{T as R,x as C,n as U,a as V}from"../../chunks/requests-f597ce78.js";import{T as L}from"../../chunks/index-222bcf94.js";function H(e,a,t){const s=e.slice();return s[43]=a[t],s[45]=t,s}function A(e,a,t){const s=e.slice();return s[46]=a[t],s[48]=t,s}function j(e,a,t){const s=e.slice();return s[46]=a[t],s[45]=t,s}function J(e){let a,t,d;function p(a){e[28](a)}let h={title:"Checkpoints",headers:Object.keys(e[2][0])};return void 0!==e[2]&&(h.data=e[2]),a=new L({props:h}),x.push((()=>$(a,"data",p))),{c(){s(a.$$.fragment)},l(e){n(a.$$.fragment,e)},m(e,t){o(a,e,t),d=!0},p(e,s){const n={};4&s[0]&&(n.headers=Object.keys(e[2][0])),!t&&4&s[0]&&(t=!0,n.data=e[2],r((()=>t=!1))),a.$set(n)},i(e){d||(l(a.$$.fragment,e),d=!0)},o(e){c(a.$$.fragment,e),d=!1},d(e){i(a,e)}}}function q(e){let a,t,d;function p(a){e[29](a)}let h={title:"Checkpoint Configurations",headers:Object.keys(e[3][0])};return void 0!==e[3]&&(h.data=e[3]),a=new L({props:h}),x.push((()=>$(a,"data",p))),{c(){s(a.$$.fragment)},l(e){n(a.$$.fragment,e)},m(e,t){o(a,e,t),d=!0},p(e,s){const n={};8&s[0]&&(n.headers=Object.keys(e[3][0])),!t&&8&s[0]&&(t=!0,n.data=e[3],r((()=>t=!1))),a.$set(n)},i(e){d||(l(a.$$.fragment,e),d=!0)},o(e){c(a.$$.fragment,e),d=!1},d(e){i(a,e)}}}function F(e){let a,t,d;function p(a){e[30](a)}let h={title:"Snapshots",headers:Object.keys(e[0][0])};return void 0!==e[0]&&(h.data=e[0]),a=new L({props:h}),x.push((()=>$(a,"data",p))),{c(){s(a.$$.fragment)},l(e){n(a.$$.fragment,e)},m(e,t){o(a,e,t),d=!0},p(e,s){const n={};1&s[0]&&(n.headers=Object.keys(e[0][0])),!t&&1&s[0]&&(t=!0,n.data=e[0],r((()=>t=!1))),a.$set(n)},i(e){d||(l(a.$$.fragment,e),d=!0)},o(e){c(a.$$.fragment,e),d=!1},d(e){i(a,e)}}}function M(e){let a,t,d;function p(a){e[31](a)}let h={title:"Running Containers",headers:Object.keys(e[4][0])};return void 0!==e[4]&&(h.data=e[4]),a=new L({props:h}),x.push((()=>$(a,"data",p))),{c(){s(a.$$.fragment)},l(e){n(a.$$.fragment,e)},m(e,t){o(a,e,t),d=!0},p(e,s){const n={};16&s[0]&&(n.headers=Object.keys(e[4][0])),!t&&16&s[0]&&(t=!0,n.data=e[4],r((()=>t=!1))),a.$set(n)},i(e){d||(l(a.$$.fragment,e),d=!0)},o(e){c(a.$$.fragment,e),d=!1},d(e){i(a,e)}}}function _(e){let a,t,d;function p(a){e[32](a)}let h={title:"Images",headers:Object.keys(e[5][0])};return void 0!==e[5]&&(h.data=e[5]),a=new L({props:h}),x.push((()=>$(a,"data",p))),{c(){s(a.$$.fragment)},l(e){n(a.$$.fragment,e)},m(e,t){o(a,e,t),d=!0},p(e,s){const n={};32&s[0]&&(n.headers=Object.keys(e[5][0])),!t&&32&s[0]&&(t=!0,n.data=e[5],r((()=>t=!1))),a.$set(n)},i(e){d||(l(a.$$.fragment,e),d=!0)},o(e){c(a.$$.fragment,e),d=!1},d(e){i(a,e)}}}function X(e){let a,t,d;function p(a){e[33](a)}let h={title:"Logfiles",headers:Object.keys(e[1][0])};return void 0!==e[1]&&(h.data=e[1]),a=new L({props:h}),x.push((()=>$(a,"data",p))),{c(){s(a.$$.fragment)},l(e){n(a.$$.fragment,e)},m(e,t){o(a,e,t),d=!0},p(e,s){const n={};2&s[0]&&(n.headers=Object.keys(e[1][0])),!t&&2&s[0]&&(t=!0,n.data=e[1],r((()=>t=!1))),a.$set(n)},i(e){d||(l(a.$$.fragment,e),d=!0)},o(e){c(a.$$.fragment,e),d=!1},d(e){i(a,e)}}}function z(e){let a,t,s,n,o,r,l,c,i,I=Object.keys(e[6][0]),T=[];for(let d=0;d<I.length;d+=1)T[d]=G(j(e,I,d));let N=e[6],S=[];for(let d=0;d<N.length;d+=1)S[d]=K(H(e,N,d));return{c(){a=d("div"),t=d("h5"),s=p("Single Data Samples (JSON)"),n=h(),o=d("div"),r=d("table"),l=d("thead"),c=d("tr");for(let e=0;e<T.length;e+=1)T[e].c();i=h();for(let e=0;e<S.length;e+=1)S[e].c();this.h()},l(e){a=u(e,"DIV",{class:!0});var d=f(a);t=u(d,"H5",{});var p=f(t);s=m(p,"Single Data Samples (JSON)"),p.forEach(w),n=v(d),o=u(d,"DIV",{class:!0});var h=f(o);r=u(h,"TABLE",{class:!0,style:!0});var g=f(r);l=u(g,"THEAD",{});var b=f(l);c=u(b,"TR",{class:!0});var E=f(c);for(let a=0;a<T.length;a+=1)T[a].l(E);E.forEach(w),b.forEach(w),i=v(g);for(let a=0;a<S.length;a+=1)S[a].l(g);g.forEach(w),h.forEach(w),d.forEach(w),this.h()},h(){g(c,"class","w3-dark-grey"),g(r,"class","w3-table-all"),b(r,"width","100%"),g(o,"class","w3-responsive"),g(a,"class","w3-container")},m(e,d){E(e,a,d),y(a,t),y(t,s),y(a,n),y(a,o),y(o,r),y(r,l),y(l,c);for(let a=0;a<T.length;a+=1)T[a].m(c,null);y(r,i);for(let a=0;a<S.length;a+=1)S[a].m(r,null)},p(e,a){if(64&a[0]){let t;for(I=Object.keys(e[6][0]),t=0;t<I.length;t+=1){const s=j(e,I,t);T[t]?T[t].p(s,a):(T[t]=G(s),T[t].c(),T[t].m(c,null))}for(;t<T.length;t+=1)T[t].d(1);T.length=I.length}if(67108928&a[0]){let t;for(N=e[6],t=0;t<N.length;t+=1){const s=H(e,N,t);S[t]?S[t].p(s,a):(S[t]=K(s),S[t].c(),S[t].m(r,null))}for(;t<S.length;t+=1)S[t].d(1);S.length=N.length}},d(e){e&&w(a),D(T,e),D(S,e)}}}function G(e){let a,t,s=e[46]+"";return{c(){a=d("th"),t=p(s)},l(e){a=u(e,"TH",{});var n=f(a);t=m(n,s),n.forEach(w)},m(e,s){E(e,a,s),y(a,t)},p(e,a){64&a[0]&&s!==(s=e[46]+"")&&I(t,s)},d(e){e&&w(a)}}}function Q(e){let a,t,s=e[43][e[46]]+"";return{c(){a=d("td"),t=p(s)},l(e){a=u(e,"TD",{});var n=f(a);t=m(n,s),n.forEach(w)},m(e,s){E(e,a,s),y(a,t)},p(e,a){64&a[0]&&s!==(s=e[43][e[46]]+"")&&I(t,s)},d(e){e&&w(a)}}}function K(e){let a,t,s,n,o=Object.keys(e[6][0]),r=[];for(let l=0;l<o.length;l+=1)r[l]=Q(A(e,o,l));return{c(){a=d("tr");for(let e=0;e<r.length;e+=1)r[e].c();t=h(),this.h()},l(e){a=u(e,"TR",{index:!0});var s=f(a);for(let a=0;a<r.length;a+=1)r[a].l(s);t=v(s),s.forEach(w),this.h()},h(){g(a,"index",e[45])},m(o,l){E(o,a,l);for(let e=0;e<r.length;e+=1)r[e].m(a,null);y(a,t),s||(n=T(a,"click",e[26]),s=!0)},p(e,s){if(64&s[0]){let n;for(o=Object.keys(e[6][0]),n=0;n<o.length;n+=1){const l=A(e,o,n);r[n]?r[n].p(l,s):(r[n]=Q(l),r[n].c(),r[n].m(a,t))}for(;n<r.length;n+=1)r[n].d(1);r.length=o.length}},d(e){e&&w(a),D(r,e),s=!1,n()}}}function W(e){let a,t,r,I,D,O,x,$,C,U,V,L,H,A,j,G,Q,K,W,Y,Z,ee,ae,te,se,ne,oe,re,le,ce,ie,de,pe,he,ue,fe,me,we,ve,ge,be,Ee,ye,Ie,Te,De,Ne,Se,ke,Be,Oe,xe,$e,Pe,Re,Ce,Ue,Ve,Le,He,Ae,je,Je,qe,Fe,Me,_e,Xe,ze,Ge,Qe,Ke,We,Ye,Ze,ea,aa,ta,sa,na,oa,ra,la,ca,ia,da,pa,ha,ua,fa,ma,wa,va,ga,ba,Ea,ya,Ia,Ta,Da,Na,Sa,ka,Ba,Oa,xa,$a,Pa,Ra,Ca,Ua,Va,La,Ha,Aa,ja,Ja,qa,Fa,Ma,_a,Xa,za,Ga,Qa,Ka,Wa,Ya,Za,et,at,tt,st,nt,ot,rt,lt,ct,it,dt,pt,ht,ut,ft,mt,wt,vt,gt,bt,Et,yt,It,Tt,Dt,Nt,St,kt,Bt,Ot,xt,$t,Pt,Rt,Ct,Ut,Vt,Lt,Ht,At,jt,Jt,qt,Ft,Mt,_t,Xt,zt,Gt,Qt,Kt,Wt,Yt,Zt,es,as,ts,ss,ns,os,rs,ls,cs,is,ds,ps,hs,us,fs,ms,ws,vs,gs,bs,Es,ys,Is,Ts,Ds,Ns,Ss,ks,Bs,Os,xs,$s,Ps,Rs,Cs,Us,Vs,Ls,Hs,As,js,Js,qs,Fs,Ms,_s,Xs,zs,Gs,Qs,Ks,Ws,Ys,Zs,en,an,tn,sn,nn,on,rn,ln,cn,dn,pn,hn,un,fn,mn,wn,vn,gn,bn,En,yn,In,Tn,Dn,Nn,Sn,kn,Bn,On,xn,$n,Pn,Rn,Cn,Un,Vn,Ln,Hn,An,jn,Jn,qn,Fn,Mn,_n,Xn,zn,Gn,Qn;a=new R({});let Kn=e[2].length>0&&J(e),Wn=e[3].length>0&&q(e),Yn=e[0].length>0&&F(e),Zn=e[4].length>0&&M(e),eo=e[5].length>0&&_(e),ao=e[1].length>0&&X(e),to=e[6].length>0&&z(e);return{c(){s(a.$$.fragment),t=h(),r=d("hr"),I=h(),D=d("div"),O=d("h1"),x=d("b"),$=p("Recovery Handlers"),C=h(),U=d("hr"),V=h(),L=d("h2"),H=p("Upload Checkpoint"),A=h(),j=d("form"),G=d("p"),Q=d("label"),K=d("b"),W=p("Image Repository-Version (e.g. ubuntu:latest, ubuntu:16.04)"),Y=h(),Z=d("input"),ee=h(),ae=d("p"),te=d("label"),se=d("b"),ne=p("Container Name"),oe=h(),re=d("input"),le=h(),ce=d("p"),ie=d("label"),de=d("b"),pe=p("Container Ports (8080:8080,443:443)"),he=h(),ue=d("input"),fe=h(),me=d("p"),we=d("label"),ve=d("b"),ge=p("Container Networks"),be=h(),Ee=d("input"),ye=h(),Ie=d("p"),Te=d("label"),De=d("b"),Ne=p("Container Volumes"),Se=h(),ke=d("input"),Be=h(),Oe=d("p"),xe=d("label"),$e=d("b"),Pe=p("Container Privileged (yes, no)"),Re=h(),Ce=d("input"),Ue=h(),Ve=d("p"),Le=d("label"),He=d("b"),Ae=p("File"),je=h(),Je=d("input"),qe=h(),Fe=d("p"),Me=d("input"),_e=h(),Xe=d("hr"),ze=h(),Ge=d("div"),Qe=d("h1"),Ke=d("b"),We=p("Monitoring"),Ye=h(),Ze=d("hr"),ea=h(),aa=d("br"),ta=h(),sa=d("button"),na=p("Reload all Tables"),oa=h(),ra=d("section"),la=d("h3"),ca=p("Available Checkpoints"),ia=h(),Kn&&Kn.c(),da=h(),pa=d("br"),ha=h(),ua=d("section"),fa=d("h3"),ma=p("Checkpoint Configurations"),wa=h(),Wn&&Wn.c(),va=h(),ga=d("br"),ba=h(),Ea=d("section"),ya=d("h3"),Ia=p("Snapshot Backups"),Ta=h(),Yn&&Yn.c(),Da=h(),Na=d("br"),Sa=h(),ka=d("section"),Ba=d("h3"),Oa=p("Running Containers"),xa=h(),Zn&&Zn.c(),$a=h(),Pa=d("br"),Ra=h(),Ca=d("section"),Ua=d("h3"),Va=p("Images"),La=h(),eo&&eo.c(),Ha=h(),Aa=d("br"),ja=h(),Ja=d("hr"),qa=h(),Fa=d("div"),Ma=d("h1"),_a=d("b"),Xa=p("Recovery Actions"),za=h(),Ga=d("hr"),Qa=h(),Ka=d("div"),Wa=d("div"),Ya=d("button"),Za=p("Snapshot Container ( create image )"),et=h(),at=d("div"),tt=d("input"),st=h(),nt=d("div"),ot=d("input"),rt=h(),lt=d("div"),ct=d("div"),it=d("button"),dt=p("Export Snapshot ( image to .tar )"),pt=h(),ht=d("div"),ut=d("input"),ft=h(),mt=d("div"),wt=d("input"),vt=h(),gt=d("div"),bt=d("div"),Et=d("button"),yt=p("Import Snapshot ( .tar to image )"),It=h(),Tt=d("div"),Dt=d("input"),Nt=h(),St=d("div"),kt=d("input"),Bt=h(),Ot=d("div"),xt=d("div"),$t=d("button"),Pt=p("Backup Snapshot ( .tar to gridfs )"),Rt=h(),Ct=d("div"),Ut=d("input"),Vt=h(),Lt=d("div"),Ht=d("div"),At=d("button"),jt=p("Download Snapshot Backup ( as .tar )"),Jt=h(),qt=d("div"),Ft=d("input"),Mt=h(),_t=d("div"),Xt=d("div"),zt=d("button"),Gt=p("Download Checkpoint/Snapshot ( as .tar )"),Qt=h(),Kt=d("div"),Wt=d("input"),Yt=h(),Zt=d("div"),es=d("div"),as=d("button"),ts=p("Recover Container ( load from .tar )"),ss=h(),ns=d("div"),os=d("input"),rs=h(),ls=d("div"),cs=d("input"),is=h(),ds=d("hr"),ps=h(),hs=d("div"),us=d("h1"),fs=d("b"),ms=p("Log Files"),ws=h(),vs=d("hr"),gs=h(),bs=d("form"),Es=d("p"),ys=d("label"),Is=d("b"),Ts=p(".csv File"),Ds=h(),Ns=d("input"),Ss=h(),ks=d("p"),Bs=d("input"),Os=h(),xs=d("br"),$s=h(),Ps=d("div"),Rs=d("div"),Cs=d("button"),Us=p("Delete Logfile"),Vs=h(),Ls=d("div"),Hs=d("input"),As=h(),js=d("div"),Js=d("div"),qs=d("button"),Fs=p("Download Logfile"),Ms=h(),_s=d("div"),Xs=d("input"),zs=h(),Gs=d("br"),Qs=h(),Ks=d("section"),Ws=d("h3"),Ys=p("Available Logfiles"),Zs=h(),ao&&ao.c(),en=h(),an=d("hr"),tn=h(),sn=d("div"),nn=d("h1"),on=d("b"),rn=p("Data Recovery"),ln=h(),cn=d("hr"),dn=h(),pn=d("br"),hn=h(),un=d("button"),fn=p("Reload Recovery Table"),mn=h(),wn=d("br"),vn=h(),to&&to.c(),gn=h(),bn=d("br"),En=h(),yn=d("textarea"),In=h(),Tn=d("button"),Dn=p("Prettify"),Nn=h(),Sn=d("br"),kn=h(),Bn=d("div"),On=d("button"),xn=p("Create Data"),$n=h(),Pn=d("textarea"),Rn=h(),Cn=d("div"),Un=d("button"),Vn=p("Update Data"),Ln=h(),Hn=d("input"),An=h(),jn=d("textarea"),Jn=h(),qn=d("div"),Fn=d("button"),Mn=p("Delete Data"),_n=h(),Xn=d("input"),this.h()},l(e){n(a.$$.fragment,e),t=v(e),r=u(e,"HR",{class:!0}),I=v(e),D=u(e,"DIV",{class:!0});var s=f(D);O=u(s,"H1",{class:!0,style:!0});var o=f(O);x=u(o,"B",{});var l=f(x);$=m(l,"Recovery Handlers"),l.forEach(w),o.forEach(w),s.forEach(w),C=v(e),U=u(e,"HR",{class:!0}),V=v(e),L=u(e,"H2",{});var c=f(L);H=m(c,"Upload Checkpoint"),c.forEach(w),A=v(e),j=u(e,"FORM",{class:!0,enctype:!0});var i=f(j);G=u(i,"P",{});var d=f(G);Q=u(d,"LABEL",{});var p=f(Q);K=u(p,"B",{});var h=f(K);W=m(h,"Image Repository-Version (e.g. ubuntu:latest, ubuntu:16.04)"),h.forEach(w),p.forEach(w),Y=v(d),Z=u(d,"INPUT",{class:!0,name:!0,type:!0}),d.forEach(w),ee=v(i),ae=u(i,"P",{});var g=f(ae);te=u(g,"LABEL",{});var b=f(te);se=u(b,"B",{});var E=f(se);ne=m(E,"Container Name"),E.forEach(w),b.forEach(w),oe=v(g),re=u(g,"INPUT",{class:!0,name:!0,type:!0}),g.forEach(w),le=v(i),ce=u(i,"P",{});var y=f(ce);ie=u(y,"LABEL",{});var T=f(ie);de=u(T,"B",{});var N=f(de);pe=m(N,"Container Ports (8080:8080,443:443)"),N.forEach(w),T.forEach(w),he=v(y),ue=u(y,"INPUT",{class:!0,name:!0,type:!0}),y.forEach(w),fe=v(i),me=u(i,"P",{});var S=f(me);we=u(S,"LABEL",{});var k=f(we);ve=u(k,"B",{});var B=f(ve);ge=m(B,"Container Networks"),B.forEach(w),k.forEach(w),be=v(S),Ee=u(S,"INPUT",{class:!0,name:!0,type:!0}),S.forEach(w),ye=v(i),Ie=u(i,"P",{});var P=f(Ie);Te=u(P,"LABEL",{});var R=f(Te);De=u(R,"B",{});var J=f(De);Ne=m(J,"Container Volumes"),J.forEach(w),R.forEach(w),Se=v(P),ke=u(P,"INPUT",{class:!0,name:!0,type:!0}),P.forEach(w),Be=v(i),Oe=u(i,"P",{});var q=f(Oe);xe=u(q,"LABEL",{});var F=f(xe);$e=u(F,"B",{});var M=f($e);Pe=m(M,"Container Privileged (yes, no)"),M.forEach(w),F.forEach(w),Re=v(q),Ce=u(q,"INPUT",{class:!0,name:!0,type:!0}),q.forEach(w),Ue=v(i),Ve=u(i,"P",{});var _=f(Ve);Le=u(_,"LABEL",{class:!0});var X=f(Le);He=u(X,"B",{});var z=f(He);Ae=m(z,"File"),z.forEach(w),X.forEach(w),je=v(_),Je=u(_,"INPUT",{class:!0,type:!0,name:!0}),_.forEach(w),qe=v(i),Fe=u(i,"P",{});var zn=f(Fe);Me=u(zn,"INPUT",{class:!0,name:!0,type:!0,value:!0}),zn.forEach(w),i.forEach(w),_e=v(e),Xe=u(e,"HR",{class:!0}),ze=v(e),Ge=u(e,"DIV",{class:!0});var Gn=f(Ge);Qe=u(Gn,"H1",{class:!0,style:!0});var Qn=f(Qe);Ke=u(Qn,"B",{});var so=f(Ke);We=m(so,"Monitoring"),so.forEach(w),Qn.forEach(w),Gn.forEach(w),Ye=v(e),Ze=u(e,"HR",{class:!0}),ea=v(e),aa=u(e,"BR",{}),ta=v(e),sa=u(e,"BUTTON",{class:!0});var no=f(sa);na=m(no,"Reload all Tables"),no.forEach(w),oa=v(e),ra=u(e,"SECTION",{class:!0});var oo=f(ra);la=u(oo,"H3",{});var ro=f(la);ca=m(ro,"Available Checkpoints"),ro.forEach(w),oo.forEach(w),ia=v(e),Kn&&Kn.l(e),da=v(e),pa=u(e,"BR",{}),ha=v(e),ua=u(e,"SECTION",{class:!0});var lo=f(ua);fa=u(lo,"H3",{});var co=f(fa);ma=m(co,"Checkpoint Configurations"),co.forEach(w),lo.forEach(w),wa=v(e),Wn&&Wn.l(e),va=v(e),ga=u(e,"BR",{}),ba=v(e),Ea=u(e,"SECTION",{class:!0});var io=f(Ea);ya=u(io,"H3",{});var po=f(ya);Ia=m(po,"Snapshot Backups"),po.forEach(w),io.forEach(w),Ta=v(e),Yn&&Yn.l(e),Da=v(e),Na=u(e,"BR",{}),Sa=v(e),ka=u(e,"SECTION",{class:!0});var ho=f(ka);Ba=u(ho,"H3",{});var uo=f(Ba);Oa=m(uo,"Running Containers"),uo.forEach(w),ho.forEach(w),xa=v(e),Zn&&Zn.l(e),$a=v(e),Pa=u(e,"BR",{}),Ra=v(e),Ca=u(e,"SECTION",{class:!0});var fo=f(Ca);Ua=u(fo,"H3",{});var mo=f(Ua);Va=m(mo,"Images"),mo.forEach(w),fo.forEach(w),La=v(e),eo&&eo.l(e),Ha=v(e),Aa=u(e,"BR",{}),ja=v(e),Ja=u(e,"HR",{class:!0}),qa=v(e),Fa=u(e,"DIV",{class:!0});var wo=f(Fa);Ma=u(wo,"H1",{class:!0,style:!0});var vo=f(Ma);_a=u(vo,"B",{});var go=f(_a);Xa=m(go,"Recovery Actions"),go.forEach(w),vo.forEach(w),wo.forEach(w),za=v(e),Ga=u(e,"HR",{class:!0}),Qa=v(e),Ka=u(e,"DIV",{class:!0});var bo=f(Ka);Wa=u(bo,"DIV",{class:!0});var Eo=f(Wa);Ya=u(Eo,"BUTTON",{class:!0});var yo=f(Ya);Za=m(yo,"Snapshot Container ( create image )"),yo.forEach(w),Eo.forEach(w),et=v(bo),at=u(bo,"DIV",{class:!0});var Io=f(at);tt=u(Io,"INPUT",{id:!0,class:!0,name:!0,type:!0,placeholder:!0}),Io.forEach(w),st=v(bo),nt=u(bo,"DIV",{class:!0});var To=f(nt);ot=u(To,"INPUT",{id:!0,class:!0,name:!0,type:!0,placeholder:!0}),To.forEach(w),bo.forEach(w),rt=v(e),lt=u(e,"DIV",{class:!0});var Do=f(lt);ct=u(Do,"DIV",{class:!0});var No=f(ct);it=u(No,"BUTTON",{class:!0});var So=f(it);dt=m(So,"Export Snapshot ( image to .tar )"),So.forEach(w),No.forEach(w),pt=v(Do),ht=u(Do,"DIV",{class:!0});var ko=f(ht);ut=u(ko,"INPUT",{id:!0,class:!0,name:!0,type:!0,placeholder:!0}),ko.forEach(w),ft=v(Do),mt=u(Do,"DIV",{class:!0});var Bo=f(mt);wt=u(Bo,"INPUT",{id:!0,class:!0,name:!0,type:!0,placeholder:!0}),Bo.forEach(w),Do.forEach(w),vt=v(e),gt=u(e,"DIV",{class:!0});var Oo=f(gt);bt=u(Oo,"DIV",{class:!0});var xo=f(bt);Et=u(xo,"BUTTON",{class:!0});var $o=f(Et);yt=m($o,"Import Snapshot ( .tar to image )"),$o.forEach(w),xo.forEach(w),It=v(Oo),Tt=u(Oo,"DIV",{class:!0});var Po=f(Tt);Dt=u(Po,"INPUT",{id:!0,class:!0,name:!0,type:!0,placeholder:!0}),Po.forEach(w),Nt=v(Oo),St=u(Oo,"DIV",{class:!0});var Ro=f(St);kt=u(Ro,"INPUT",{id:!0,class:!0,name:!0,type:!0,placeholder:!0}),Ro.forEach(w),Oo.forEach(w),Bt=v(e),Ot=u(e,"DIV",{class:!0});var Co=f(Ot);xt=u(Co,"DIV",{class:!0});var Uo=f(xt);$t=u(Uo,"BUTTON",{class:!0});var Vo=f($t);Pt=m(Vo,"Backup Snapshot ( .tar to gridfs )"),Vo.forEach(w),Uo.forEach(w),Rt=v(Co),Ct=u(Co,"DIV",{class:!0});var Lo=f(Ct);Ut=u(Lo,"INPUT",{id:!0,class:!0,name:!0,type:!0,placeholder:!0}),Lo.forEach(w),Co.forEach(w),Vt=v(e),Lt=u(e,"DIV",{class:!0});var Ho=f(Lt);Ht=u(Ho,"DIV",{class:!0});var Ao=f(Ht);At=u(Ao,"BUTTON",{class:!0});var jo=f(At);jt=m(jo,"Download Snapshot Backup ( as .tar )"),jo.forEach(w),Ao.forEach(w),Jt=v(Ho),qt=u(Ho,"DIV",{class:!0});var Jo=f(qt);Ft=u(Jo,"INPUT",{id:!0,class:!0,name:!0,type:!0,placeholder:!0}),Jo.forEach(w),Ho.forEach(w),Mt=v(e),_t=u(e,"DIV",{class:!0});var qo=f(_t);Xt=u(qo,"DIV",{class:!0});var Fo=f(Xt);zt=u(Fo,"BUTTON",{class:!0});var Mo=f(zt);Gt=m(Mo,"Download Checkpoint/Snapshot ( as .tar )"),Mo.forEach(w),Fo.forEach(w),Qt=v(qo),Kt=u(qo,"DIV",{class:!0});var _o=f(Kt);Wt=u(_o,"INPUT",{id:!0,class:!0,name:!0,type:!0,placeholder:!0}),_o.forEach(w),qo.forEach(w),Yt=v(e),Zt=u(e,"DIV",{class:!0});var Xo=f(Zt);es=u(Xo,"DIV",{class:!0});var zo=f(es);as=u(zo,"BUTTON",{class:!0});var Go=f(as);ts=m(Go,"Recover Container ( load from .tar )"),Go.forEach(w),zo.forEach(w),ss=v(Xo),ns=u(Xo,"DIV",{class:!0});var Qo=f(ns);os=u(Qo,"INPUT",{id:!0,class:!0,name:!0,type:!0,placeholder:!0}),Qo.forEach(w),rs=v(Xo),ls=u(Xo,"DIV",{class:!0});var Ko=f(ls);cs=u(Ko,"INPUT",{id:!0,class:!0,name:!0,type:!0,placeholder:!0}),Ko.forEach(w),Xo.forEach(w),is=v(e),ds=u(e,"HR",{class:!0}),ps=v(e),hs=u(e,"DIV",{class:!0});var Wo=f(hs);us=u(Wo,"H1",{class:!0,style:!0});var Yo=f(us);fs=u(Yo,"B",{});var Zo=f(fs);ms=m(Zo,"Log Files"),Zo.forEach(w),Yo.forEach(w),Wo.forEach(w),ws=v(e),vs=u(e,"HR",{class:!0}),gs=v(e),bs=u(e,"FORM",{class:!0,enctype:!0});var er=f(bs);Es=u(er,"P",{});var ar=f(Es);ys=u(ar,"LABEL",{class:!0});var tr=f(ys);Is=u(tr,"B",{});var sr=f(Is);Ts=m(sr,".csv File"),sr.forEach(w),tr.forEach(w),Ds=v(ar),Ns=u(ar,"INPUT",{class:!0,type:!0,name:!0}),ar.forEach(w),Ss=v(er),ks=u(er,"P",{});var nr=f(ks);Bs=u(nr,"INPUT",{class:!0,type:!0,value:!0}),nr.forEach(w),er.forEach(w),Os=v(e),xs=u(e,"BR",{}),$s=v(e),Ps=u(e,"DIV",{class:!0});var or=f(Ps);Rs=u(or,"DIV",{class:!0});var rr=f(Rs);Cs=u(rr,"BUTTON",{class:!0});var lr=f(Cs);Us=m(lr,"Delete Logfile"),lr.forEach(w),rr.forEach(w),Vs=v(or),Ls=u(or,"DIV",{class:!0});var cr=f(Ls);Hs=u(cr,"INPUT",{id:!0,class:!0,name:!0,type:!0,placeholder:!0}),cr.forEach(w),or.forEach(w),As=v(e),js=u(e,"DIV",{class:!0});var ir=f(js);Js=u(ir,"DIV",{class:!0});var dr=f(Js);qs=u(dr,"BUTTON",{class:!0});var pr=f(qs);Fs=m(pr,"Download Logfile"),pr.forEach(w),dr.forEach(w),Ms=v(ir),_s=u(ir,"DIV",{class:!0});var hr=f(_s);Xs=u(hr,"INPUT",{id:!0,class:!0,name:!0,type:!0,placeholder:!0}),hr.forEach(w),ir.forEach(w),zs=v(e),Gs=u(e,"BR",{}),Qs=v(e),Ks=u(e,"SECTION",{class:!0});var ur=f(Ks);Ws=u(ur,"H3",{});var fr=f(Ws);Ys=m(fr,"Available Logfiles"),fr.forEach(w),ur.forEach(w),Zs=v(e),ao&&ao.l(e),en=v(e),an=u(e,"HR",{class:!0}),tn=v(e),sn=u(e,"DIV",{class:!0});var mr=f(sn);nn=u(mr,"H1",{class:!0,style:!0});var wr=f(nn);on=u(wr,"B",{});var vr=f(on);rn=m(vr,"Data Recovery"),vr.forEach(w),wr.forEach(w),mr.forEach(w),ln=v(e),cn=u(e,"HR",{class:!0}),dn=v(e),pn=u(e,"BR",{}),hn=v(e),un=u(e,"BUTTON",{class:!0});var gr=f(un);fn=m(gr,"Reload Recovery Table"),gr.forEach(w),mn=v(e),wn=u(e,"BR",{}),vn=v(e),to&&to.l(e),gn=v(e),bn=u(e,"BR",{}),En=v(e),yn=u(e,"TEXTAREA",{id:!0,class:!0,placeholder:!0,type:!0}),f(yn).forEach(w),In=v(e),Tn=u(e,"BUTTON",{class:!0});var br=f(Tn);Dn=m(br,"Prettify"),br.forEach(w),Nn=v(e),Sn=u(e,"BR",{}),kn=v(e),Bn=u(e,"DIV",{class:!0});var Er=f(Bn);On=u(Er,"BUTTON",{class:!0});var yr=f(On);xn=m(yr,"Create Data"),yr.forEach(w),$n=v(Er),Pn=u(Er,"TEXTAREA",{id:!0,class:!0,placeholder:!0,type:!0}),f(Pn).forEach(w),Er.forEach(w),Rn=v(e),Cn=u(e,"DIV",{class:!0});var Ir=f(Cn);Un=u(Ir,"BUTTON",{class:!0});var Tr=f(Un);Vn=m(Tr,"Update Data"),Tr.forEach(w),Ln=v(Ir),Hn=u(Ir,"INPUT",{id:!0,class:!0,name:!0,type:!0,placeholder:!0}),An=v(Ir),jn=u(Ir,"TEXTAREA",{id:!0,class:!0,placeholder:!0,type:!0}),f(jn).forEach(w),Ir.forEach(w),Jn=v(e),qn=u(e,"DIV",{class:!0});var Dr=f(qn);Fn=u(Dr,"BUTTON",{class:!0});var Nr=f(Fn);Mn=m(Nr,"Delete Data"),Nr.forEach(w),_n=v(Dr),Xn=u(Dr,"INPUT",{id:!0,class:!0,name:!0,type:!0,placeholder:!0}),Dr.forEach(w),this.h()},h(){g(r,"class","svelte-t4qhpe"),g(O,"class","w3-text-yellow"),b(O,"text-shadow","1px 1px 0 #444"),g(D,"class","w3-panel w3-blue"),g(U,"class","svelte-t4qhpe"),g(Z,"class","w3-input w3-border"),g(Z,"name","repo_version"),g(Z,"type","text"),g(re,"class","w3-input w3-border"),g(re,"name","containername"),g(re,"type","text"),g(ue,"class","w3-input w3-border"),g(ue,"name","containerports"),g(ue,"type","text"),g(Ee,"class","w3-input w3-border"),g(Ee,"name","containernetworks"),g(Ee,"type","text"),g(ke,"class","w3-input w3-border"),g(ke,"name","containervolumes"),g(ke,"type","text"),g(Ce,"class","w3-input w3-border"),g(Ce,"name","containerprivilege"),g(Ce,"type","text"),g(Le,"class","w3-text-blue"),g(Je,"class","w3-input w3-border"),g(Je,"type","file"),g(Je,"name","file"),g(Me,"class","w3-col w3-input w3-border w3-margin-bottom"),g(Me,"name","submitbtn"),g(Me,"type","submit"),Me.value="upload",g(j,"class","w3-container w3-card-4"),g(j,"enctype","multipart/form-data"),g(Xe,"class","svelte-t4qhpe"),g(Qe,"class","w3-text-yellow"),b(Qe,"text-shadow","1px 1px 0 #444"),g(Ge,"class","w3-panel w3-blue"),g(Ze,"class","svelte-t4qhpe"),g(sa,"class","w3-col w3-input w3-border w3-margin-bottom"),g(ra,"class","page-headline"),g(ua,"class","page-headline"),g(Ea,"class","page-headline"),g(ka,"class","page-headline"),g(Ca,"class","page-headline"),g(Ja,"class","svelte-t4qhpe"),g(Ma,"class","w3-text-yellow"),b(Ma,"text-shadow","1px 1px 0 #444"),g(Fa,"class","w3-panel w3-blue"),g(Ga,"class","svelte-t4qhpe"),g(Ya,"class","w3-col w3-input w3-border w3-button"),g(Wa,"class","w3-third"),g(tt,"id","snapshotContainer"),g(tt,"class","w3-input w3-border"),g(tt,"name","containername"),g(tt,"type","text"),g(tt,"placeholder","Container Name"),g(at,"class","w3-third"),g(ot,"id","snapshotImageTag"),g(ot,"class","w3-input w3-border"),g(ot,"name","imagetag"),g(ot,"type","text"),g(ot,"placeholder","Image Tag (e.g. myimage-01)"),g(nt,"class","w3-rest"),g(Ka,"class","w3-row w3-section"),g(it,"class","w3-col w3-input w3-border w3-button"),g(ct,"class","w3-third"),g(ut,"id","exportSnapshot"),g(ut,"class","w3-input w3-border"),g(ut,"name","imagetag"),g(ut,"type","text"),g(ut,"placeholder","Image Tag (e.g. myimage-01)"),g(ht,"class","w3-third"),g(wt,"id","exportSnapshotTar"),g(wt,"class","w3-input w3-border"),g(wt,"name","tarname"),g(wt,"type","text"),g(wt,"placeholder",".tar Filename"),g(mt,"class","w3-rest"),g(lt,"class","w3-row w3-section"),g(Et,"class","w3-col w3-input w3-border w3-button"),g(bt,"class","w3-third"),g(Dt,"id","importSnapshotTar"),g(Dt,"class","w3-input w3-border"),g(Dt,"name","tarname"),g(Dt,"type","text"),g(Dt,"placeholder",".tar Filename"),g(Tt,"class","w3-third"),g(kt,"id","importSnapshot"),g(kt,"class","w3-input w3-border"),g(kt,"name","imagetag"),g(kt,"type","text"),g(kt,"placeholder","Image Tag (e.g. myimage-01)"),g(St,"class","w3-third"),g(gt,"class","w3-row w3-section"),g($t,"class","w3-col w3-input w3-border w3-button"),g(xt,"class","w3-third"),g(Ut,"id","backupSnapshot"),g(Ut,"class","w3-input w3-border"),g(Ut,"name","tarname"),g(Ut,"type","text"),g(Ut,"placeholder",".tar Filename"),g(Ct,"class","w3-rest"),g(Ot,"class","w3-row w3-section"),g(At,"class","w3-col w3-input w3-border w3-button"),g(Ht,"class","w3-third"),g(Ft,"id","downloadSnapshotTar"),g(Ft,"class","w3-input w3-border"),g(Ft,"name","snapshotname"),g(Ft,"type","text"),g(Ft,"placeholder","Snapshot Name"),g(qt,"class","w3-rest"),g(Lt,"class","w3-row w3-section"),g(zt,"class","w3-col w3-input w3-border w3-button"),g(Xt,"class","w3-third"),g(Wt,"id","downloadCheckpointTar"),g(Wt,"class","w3-input w3-border"),g(Wt,"name","checkpointname"),g(Wt,"type","text"),g(Wt,"placeholder","Checkpoint Name"),g(Kt,"class","w3-rest"),g(_t,"class","w3-row w3-section"),g(as,"class","w3-col w3-input w3-border w3-button"),g(es,"class","w3-third"),g(os,"id","recoverContainer"),g(os,"class","w3-input w3-border"),g(os,"name","containername"),g(os,"type","text"),g(os,"placeholder","Container Name"),g(ns,"class","w3-third"),g(cs,"id","recoverContainerTar"),g(cs,"class","w3-input w3-border"),g(cs,"name","checkpointname"),g(cs,"type","text"),g(cs,"placeholder","Checkpoint Name (.tar filename)"),g(ls,"class","w3-rest"),g(Zt,"class","w3-row w3-section"),g(ds,"class","svelte-t4qhpe"),g(us,"class","w3-text-yellow"),b(us,"text-shadow","1px 1px 0 #444"),g(hs,"class","w3-panel w3-blue"),g(vs,"class","svelte-t4qhpe"),g(ys,"class","w3-text-blue"),g(Ns,"class","w3-input w3-border"),g(Ns,"type","file"),g(Ns,"name","file"),g(Bs,"class","w3-col w3-input w3-border w3-margin-bottom"),g(Bs,"type","submit"),Bs.value="upload",g(bs,"class","w3-container w3-card-4"),g(bs,"enctype","multipart/form-data"),g(Cs,"class","w3-col w3-input w3-border w3-button"),g(Rs,"class","w3-third"),g(Hs,"id","deleteLogfileInput"),g(Hs,"class","w3-input w3-border"),g(Hs,"name","logfileid"),g(Hs,"type","text"),g(Hs,"placeholder","Logfile ID"),g(Ls,"class","w3-rest"),g(Ps,"class","w3-row w3-section"),g(qs,"class","w3-col w3-input w3-border w3-button"),g(Js,"class","w3-third"),g(Xs,"id","downloadLogfile"),g(Xs,"class","w3-input w3-border"),g(Xs,"name","logfileid"),g(Xs,"type","text"),g(Xs,"placeholder","Logfile ID"),g(_s,"class","w3-rest"),g(js,"class","w3-row w3-section"),g(Ks,"class","page-headline"),g(an,"class","svelte-t4qhpe"),g(nn,"class","w3-text-yellow"),b(nn,"text-shadow","1px 1px 0 #444"),g(sn,"class","w3-panel w3-blue"),g(cn,"class","svelte-t4qhpe"),g(un,"class","w3-col w3-input w3-border w3-margin-bottom"),g(yn,"id","jsonSampleId"),g(yn,"class","textarea w3-input w3-border svelte-t4qhpe"),g(yn,"placeholder","JSON Data"),g(yn,"type","text"),g(Tn,"class","w3-col w3-input w3-border w3-button"),g(On,"class","w3-col w3-input w3-border w3-button"),g(Pn,"id","createDataArea"),g(Pn,"class","regular textarea w3-input w3-border svelte-t4qhpe"),g(Pn,"placeholder","JSON Data"),g(Pn,"type","text"),g(Bn,"class","w3-row w3-section"),g(Un,"class","w3-col w3-input w3-border w3-button"),g(Hn,"id","updateDataId"),g(Hn,"class","w3-input w3-border"),g(Hn,"name","logfileid"),g(Hn,"type","text"),g(Hn,"placeholder","Object Identifier"),g(jn,"id","updateDataArea"),g(jn,"class","regular textarea w3-input w3-border svelte-t4qhpe"),g(jn,"placeholder","JSON Data"),g(jn,"type","text"),g(Cn,"class","w3-row w3-section"),g(Fn,"class","w3-col w3-input w3-border w3-button"),g(Xn,"id","deleteDataId"),g(Xn,"class","w3-input w3-border"),g(Xn,"name","logfileid"),g(Xn,"type","text"),g(Xn,"placeholder","Object Identifier"),g(qn,"class","w3-row w3-section")},m(s,n){o(a,s,n),E(s,t,n),E(s,r,n),E(s,I,n),E(s,D,n),y(D,O),y(O,x),y(x,$),E(s,C,n),E(s,U,n),E(s,V,n),E(s,L,n),y(L,H),E(s,A,n),E(s,j,n),y(j,G),y(G,Q),y(Q,K),y(K,W),y(G,Y),y(G,Z),y(j,ee),y(j,ae),y(ae,te),y(te,se),y(se,ne),y(ae,oe),y(ae,re),y(j,le),y(j,ce),y(ce,ie),y(ie,de),y(de,pe),y(ce,he),y(ce,ue),y(j,fe),y(j,me),y(me,we),y(we,ve),y(ve,ge),y(me,be),y(me,Ee),y(j,ye),y(j,Ie),y(Ie,Te),y(Te,De),y(De,Ne),y(Ie,Se),y(Ie,ke),y(j,Be),y(j,Oe),y(Oe,xe),y(xe,$e),y($e,Pe),y(Oe,Re),y(Oe,Ce),y(j,Ue),y(j,Ve),y(Ve,Le),y(Le,He),y(He,Ae),y(Ve,je),y(Ve,Je),y(j,qe),y(j,Fe),y(Fe,Me),E(s,_e,n),E(s,Xe,n),E(s,ze,n),E(s,Ge,n),y(Ge,Qe),y(Qe,Ke),y(Ke,We),E(s,Ye,n),E(s,Ze,n),E(s,ea,n),E(s,aa,n),E(s,ta,n),E(s,sa,n),y(sa,na),E(s,oa,n),E(s,ra,n),y(ra,la),y(la,ca),E(s,ia,n),Kn&&Kn.m(s,n),E(s,da,n),E(s,pa,n),E(s,ha,n),E(s,ua,n),y(ua,fa),y(fa,ma),E(s,wa,n),Wn&&Wn.m(s,n),E(s,va,n),E(s,ga,n),E(s,ba,n),E(s,Ea,n),y(Ea,ya),y(ya,Ia),E(s,Ta,n),Yn&&Yn.m(s,n),E(s,Da,n),E(s,Na,n),E(s,Sa,n),E(s,ka,n),y(ka,Ba),y(Ba,Oa),E(s,xa,n),Zn&&Zn.m(s,n),E(s,$a,n),E(s,Pa,n),E(s,Ra,n),E(s,Ca,n),y(Ca,Ua),y(Ua,Va),E(s,La,n),eo&&eo.m(s,n),E(s,Ha,n),E(s,Aa,n),E(s,ja,n),E(s,Ja,n),E(s,qa,n),E(s,Fa,n),y(Fa,Ma),y(Ma,_a),y(_a,Xa),E(s,za,n),E(s,Ga,n),E(s,Qa,n),E(s,Ka,n),y(Ka,Wa),y(Wa,Ya),y(Ya,Za),y(Ka,et),y(Ka,at),y(at,tt),y(Ka,st),y(Ka,nt),y(nt,ot),E(s,rt,n),E(s,lt,n),y(lt,ct),y(ct,it),y(it,dt),y(lt,pt),y(lt,ht),y(ht,ut),y(lt,ft),y(lt,mt),y(mt,wt),E(s,vt,n),E(s,gt,n),y(gt,bt),y(bt,Et),y(Et,yt),y(gt,It),y(gt,Tt),y(Tt,Dt),y(gt,Nt),y(gt,St),y(St,kt),E(s,Bt,n),E(s,Ot,n),y(Ot,xt),y(xt,$t),y($t,Pt),y(Ot,Rt),y(Ot,Ct),y(Ct,Ut),E(s,Vt,n),E(s,Lt,n),y(Lt,Ht),y(Ht,At),y(At,jt),y(Lt,Jt),y(Lt,qt),y(qt,Ft),E(s,Mt,n),E(s,_t,n),y(_t,Xt),y(Xt,zt),y(zt,Gt),y(_t,Qt),y(_t,Kt),y(Kt,Wt),E(s,Yt,n),E(s,Zt,n),y(Zt,es),y(es,as),y(as,ts),y(Zt,ss),y(Zt,ns),y(ns,os),y(Zt,rs),y(Zt,ls),y(ls,cs),E(s,is,n),E(s,ds,n),E(s,ps,n),E(s,hs,n),y(hs,us),y(us,fs),y(fs,ms),E(s,ws,n),E(s,vs,n),E(s,gs,n),E(s,bs,n),y(bs,Es),y(Es,ys),y(ys,Is),y(Is,Ts),y(Es,Ds),y(Es,Ns),y(bs,Ss),y(bs,ks),y(ks,Bs),E(s,Os,n),E(s,xs,n),E(s,$s,n),E(s,Ps,n),y(Ps,Rs),y(Rs,Cs),y(Cs,Us),y(Ps,Vs),y(Ps,Ls),y(Ls,Hs),E(s,As,n),E(s,js,n),y(js,Js),y(Js,qs),y(qs,Fs),y(js,Ms),y(js,_s),y(_s,Xs),E(s,zs,n),E(s,Gs,n),E(s,Qs,n),E(s,Ks,n),y(Ks,Ws),y(Ws,Ys),E(s,Zs,n),ao&&ao.m(s,n),E(s,en,n),E(s,an,n),E(s,tn,n),E(s,sn,n),y(sn,nn),y(nn,on),y(on,rn),E(s,ln,n),E(s,cn,n),E(s,dn,n),E(s,pn,n),E(s,hn,n),E(s,un,n),y(un,fn),E(s,mn,n),E(s,wn,n),E(s,vn,n),to&&to.m(s,n),E(s,gn,n),E(s,bn,n),E(s,En,n),E(s,yn,n),N(yn,e[7]),E(s,In,n),E(s,Tn,n),y(Tn,Dn),E(s,Nn,n),E(s,Sn,n),E(s,kn,n),E(s,Bn,n),y(Bn,On),y(On,xn),y(Bn,$n),y(Bn,Pn),N(Pn,e[8]),E(s,Rn,n),E(s,Cn,n),y(Cn,Un),y(Un,Vn),y(Cn,Ln),y(Cn,Hn),y(Cn,An),y(Cn,jn),N(jn,e[9]),E(s,Jn,n),E(s,qn,n),y(qn,Fn),y(Fn,Mn),y(qn,_n),y(qn,Xn),zn=!0,Gn||(Qn=[T(j,"submit",S(e[19])),T(sa,"click",e[11]),T(Ya,"click",e[12]),T(it,"click",e[13]),T(Et,"click",e[14]),T($t,"click",e[15]),T(At,"click",e[17]),T(zt,"click",e[18]),T(as,"click",e[16]),T(bs,"submit",S(e[21])),T(Cs,"click",e[20]),T(qs,"click",e[22]),T(un,"click",e[10]),T(yn,"input",e[34]),T(Tn,"click",e[27]),T(On,"click",e[23]),T(Pn,"input",e[35]),T(Un,"click",e[24]),T(jn,"input",e[36]),T(Fn,"click",e[25])],Gn=!0)},p(e,a){e[2].length>0?Kn?(Kn.p(e,a),4&a[0]&&l(Kn,1)):(Kn=J(e),Kn.c(),l(Kn,1),Kn.m(da.parentNode,da)):Kn&&(P(),c(Kn,1,1,(()=>{Kn=null})),k()),e[3].length>0?Wn?(Wn.p(e,a),8&a[0]&&l(Wn,1)):(Wn=q(e),Wn.c(),l(Wn,1),Wn.m(va.parentNode,va)):Wn&&(P(),c(Wn,1,1,(()=>{Wn=null})),k()),e[0].length>0?Yn?(Yn.p(e,a),1&a[0]&&l(Yn,1)):(Yn=F(e),Yn.c(),l(Yn,1),Yn.m(Da.parentNode,Da)):Yn&&(P(),c(Yn,1,1,(()=>{Yn=null})),k()),e[4].length>0?Zn?(Zn.p(e,a),16&a[0]&&l(Zn,1)):(Zn=M(e),Zn.c(),l(Zn,1),Zn.m($a.parentNode,$a)):Zn&&(P(),c(Zn,1,1,(()=>{Zn=null})),k()),e[5].length>0?eo?(eo.p(e,a),32&a[0]&&l(eo,1)):(eo=_(e),eo.c(),l(eo,1),eo.m(Ha.parentNode,Ha)):eo&&(P(),c(eo,1,1,(()=>{eo=null})),k()),e[1].length>0?ao?(ao.p(e,a),2&a[0]&&l(ao,1)):(ao=X(e),ao.c(),l(ao,1),ao.m(en.parentNode,en)):ao&&(P(),c(ao,1,1,(()=>{ao=null})),k()),e[6].length>0?to?to.p(e,a):(to=z(e),to.c(),to.m(gn.parentNode,gn)):to&&(to.d(1),to=null),128&a[0]&&N(yn,e[7]),256&a[0]&&N(Pn,e[8]),512&a[0]&&N(jn,e[9])},i(e){zn||(l(a.$$.fragment,e),l(Kn),l(Wn),l(Yn),l(Zn),l(eo),l(ao),zn=!0)},o(e){c(a.$$.fragment,e),c(Kn),c(Wn),c(Yn),c(Zn),c(eo),c(ao),zn=!1},d(e){i(a,e),e&&w(t),e&&w(r),e&&w(I),e&&w(D),e&&w(C),e&&w(U),e&&w(V),e&&w(L),e&&w(A),e&&w(j),e&&w(_e),e&&w(Xe),e&&w(ze),e&&w(Ge),e&&w(Ye),e&&w(Ze),e&&w(ea),e&&w(aa),e&&w(ta),e&&w(sa),e&&w(oa),e&&w(ra),e&&w(ia),Kn&&Kn.d(e),e&&w(da),e&&w(pa),e&&w(ha),e&&w(ua),e&&w(wa),Wn&&Wn.d(e),e&&w(va),e&&w(ga),e&&w(ba),e&&w(Ea),e&&w(Ta),Yn&&Yn.d(e),e&&w(Da),e&&w(Na),e&&w(Sa),e&&w(ka),e&&w(xa),Zn&&Zn.d(e),e&&w($a),e&&w(Pa),e&&w(Ra),e&&w(Ca),e&&w(La),eo&&eo.d(e),e&&w(Ha),e&&w(Aa),e&&w(ja),e&&w(Ja),e&&w(qa),e&&w(Fa),e&&w(za),e&&w(Ga),e&&w(Qa),e&&w(Ka),e&&w(rt),e&&w(lt),e&&w(vt),e&&w(gt),e&&w(Bt),e&&w(Ot),e&&w(Vt),e&&w(Lt),e&&w(Mt),e&&w(_t),e&&w(Yt),e&&w(Zt),e&&w(is),e&&w(ds),e&&w(ps),e&&w(hs),e&&w(ws),e&&w(vs),e&&w(gs),e&&w(bs),e&&w(Os),e&&w(xs),e&&w($s),e&&w(Ps),e&&w(As),e&&w(js),e&&w(zs),e&&w(Gs),e&&w(Qs),e&&w(Ks),e&&w(Zs),ao&&ao.d(e),e&&w(en),e&&w(an),e&&w(tn),e&&w(sn),e&&w(ln),e&&w(cn),e&&w(dn),e&&w(pn),e&&w(hn),e&&w(un),e&&w(mn),e&&w(wn),e&&w(vn),to&&to.d(e),e&&w(gn),e&&w(bn),e&&w(En),e&&w(yn),e&&w(In),e&&w(Tn),e&&w(Nn),e&&w(Sn),e&&w(kn),e&&w(Bn),e&&w(Rn),e&&w(Cn),e&&w(Jn),e&&w(qn),Gn=!1,B(Qn)}}}function Y(e,a){let t=document.createElement("a");document.body.appendChild(t),t.style="display: none";let s=window.URL.createObjectURL(e);t.href=s,t.download=a,t.click(),window.URL.revokeObjectURL(s)}function Z(e,a,t){let s=[],n=[],o=[],r=[],l=[],c=[],i=[],d={},p="{}",h="{}";function u(){C("/data/db2/recoverydata/all",(function(e){console.log("result from fetch",e);let a=JSON.parse(e.response);if(a.data){let e=[];for(let t=0;t<a.data.length;t++)e.push({_id:a.data[t]._id,data:a.data[t]});t(6,i=e),console.log("fetched recoverydata:",i)}}))}async function f(){C("/api/db2/logfiles",(function(e){console.log("result from fetch",e);let a=JSON.parse(e.response);a.data&&(t(1,n=a.data),console.log("fetched logfiles:",n))})),C("/checkpoints",(function(e){console.log("result from fetch checkpoints",e);let a=JSON.parse(e.response);a.data&&(t(2,o=a.data),console.log("fetched checkpoints:",o))})),C("/api/db2/checkpoints",(function(e){console.log("result from fetch",e);let a=JSON.parse(e.response);a.data&&(t(3,r=a.data),console.log("fetched cpConfigs:",r))})),C("/containers",(function(e){let a=JSON.parse(e.response);a.data&&t(4,l=a.data)})),C("/images",(function(e){let a=JSON.parse(e.response);a.data&&t(5,c=a.data)})),C("/snapshots/files",(function(e){console.log("result from fetch",e);let a=JSON.parse(e.response);a.data&&(t(0,s=a.data),console.log("fetched snapshots:",s))})),u()}return O((async()=>{f()})),[s,n,o,r,l,c,i,d,p,h,u,f,function(){let e=document.getElementById("snapshotContainer").value,a=document.getElementById("snapshotImageTag").value;""!=e&&""!=a?a.includes("-")?V("/snapshots/container/"+e+"/"+a,"POST",{},(function(e){f(),U.success("Snapshot creation success.")})):U.danger("Please separate image name and version by dash due to url parameter passing."):U.danger("Please specify a container and image-tag name.")},function(){let e=document.getElementById("exportSnapshot").value,a=document.getElementById("exportSnapshotTar").value;""!=e&&""!=a?e.includes("-")?V("/snapshots/export/"+a+"/"+e,"POST",{},(function(e){f(),U.success("Snapshot export success.")})):U.danger("Please separate image name and version by dash due to url parameter passing."):U.danger("Please specify a imagetag and tarfile name.")},function(){let e=document.getElementById("importSnapshotTar").value,a=document.getElementById("importSnapshot").value;""!=a&&""!=e?a.includes("-")?V("/snapshots/import/"+e+"/"+a,"POST",{},(function(e){f(),U.success("Snapshot import success.")})):U.danger("Please separate image name and version by dash due to url parameter passing."):U.danger("Please specify a imagetag and tarfile name.")},function(){let e=document.getElementById("backupSnapshot").value;""!=e?V("/snapshots/backup/"+e,"POST",{},(function(e){f(),U.success("Snapshot import success.")})):U.danger("Please specify a tarfilename name.")},function(){let e=document.getElementById("recoverContainerTar").value,a=document.getElementById("recoverContainer").value;""!=a&&""!=e?V("/recovery/"+a+"/"+e,"POST",{},(function(e){f(),U.success("Recovery of container successful.")})):U.danger("Please specify a container and .tar name.")},async function(){let e=document.getElementById("downloadSnapshotTar").value;console.log(e),C("/download/snapshots/"+e,(function(e){Y(new Blob([e.response],{type:"octet/stream"}),decodeURIComponent(e.getResponseHeader("Content-Disposition").split("filename=")[1].split(";")[0]))}))},async function(){let e=document.getElementById("downloadCheckpointTar").value;C("/download/tars/"+e,(function(a){Y(new Blob([a.response],{type:"octet/stream"}),e)}))},async function(){var e=new FormData;let a=!1,t={};if(this.querySelectorAll("input").forEach((function(s){"submitbtn"!=s.name&&""!=s.name&&("file"==s.name?(e.append(s.name,s.files[0]),a=!0):t[s.name]=s.value)})),console.log("extra Params:",t),e.append("metadata",new Blob([JSON.stringify(t)],{type:"application/json"})),!a)return void U.danger("please select a file.");var s=new XMLHttpRequest;s.open("POST","/checkpoints"),s.onreadystatechange=function(){if(4!==s.readyState||200!==s.status)return!1;{let e=JSON.parse(s.response);console.log("response from checkpoint:",e),U.success("uploaded tar file to checkpoint")}},s.send(e)},function(){let e,a=document.getElementById("deleteLogfileInput").value,s=!1;for(let t=0;t<n.length;t++)a==n[t]._id&&(s=!0,e=n[t]);if(!s)return void U.danger("Please specify an LogID.");V("/gridfs/db2/logfiles","DELETE",e,(function(e){t(1,n=n.filter((e=>e._id!==a))),U.success("Logfile deleted successfully.")}))},async function(){var e=new FormData;let a=!1,s="";this.querySelectorAll("input").forEach((function(t){""!=t.name&&"file"==t.name&&(console.log(t.files[0]),e.append(t.name,t.files[0]),s=t.files[0].name,a=!0)}));let o="/logfiles/"+s;if(a){var r=new XMLHttpRequest;r.open("POST",o),r.onreadystatechange=function(){if(4!==r.readyState||200!==r.status)return!1;{let e=JSON.parse(r.response);t(1,n=[...n,e.data]),console.log("response from checkpoint:",[r.response])}},r.send(e)}else U.danger("please select a file.")},function(){let e=document.getElementById("downloadLogfile").value,a=!1;console.log("download logfile",n);for(let t=0;t<n.length;t++)parseInt(e)==parseInt(n[t]._id)&&(a=!0);a?C("/download/db2/logfiles/"+e,(function(e){Y(new Blob([e.response],{type:"octet/stream"}),decodeURIComponent(e.getResponseHeader("Content-Disposition").split("filename=")[1].split(";")[0]))})):U.danger("Please specify an LogID.")},function(){V("/data/db2/recoverydata","POST",JSON.parse(p),(function(e){u(),U.success("Create data success.")}))},function(){let e=document.getElementById("updateDataId").value;V("/data/db2/recoverydata/"+e,"PUT",JSON.parse(h),(function(e){u(),U.success("Update data success.")}))},function(){let e="/data/db2/recoverydata/"+document.getElementById("deleteDataId").value;console.log("deleting",e),V(e,"DELETE",{},(function(e){u(),U.success("Delete data success.")}))},function(){let e=this.getAttribute("index");console.log(this);for(var a=0;a<i.length;a++)parseInt(e)==a&&(t(7,d=JSON.stringify(i[a].data,void 0,4)),a=i.length)},function(){let e=JSON.parse(d);t(7,d=JSON.stringify(e,void 0,4))},function(e){o=e,t(2,o)},function(e){r=e,t(3,r)},function(e){s=e,t(0,s)},function(e){l=e,t(4,l)},function(e){c=e,t(5,c)},function(e){n=e,t(1,n)},function(){d=this.value,t(7,d)},function(){p=this.value,t(8,p)},function(){h=this.value,t(9,h)}]}export default class extends e{constructor(e){super(),a(this,e,Z,W,t,{},[-1,-1])}}
