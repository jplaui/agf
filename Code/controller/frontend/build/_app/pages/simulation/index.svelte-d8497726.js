import{S as t,i as e,s as a,e as n,t as o,c as s,a as r,g as l,d as i,f as c,F as u,h as d,k as f,n as h,b as m,G as p,H as g,a4 as v,a5 as w,j as E,m as b,o as S,a6 as k,v as y,r as $,w as I,Q as D,z as T,a7 as V,l as x,u as O,M as N,N as M,L,R as H,B as j}from"../../chunks/vendor-5d015fce.js";import{T as C}from"../../chunks/index-b7ca9129.js";import{T as B,n as P,x as R,a as F,g as _}from"../../chunks/requests-b02e315d.js";import{s as U,a as q,b as K}from"../../chunks/store-50f97f41.js";/* empty css                                                       */function A(t){let e,a,f,h,m,p,g=t[2].frame+"",v=t[2].timestamp.toFixed(3)+"";return{c(){e=n("h6"),a=o("Frame: "),f=o(g),h=o(" at time t="),m=o(v),p=o(" seconds.")},l(t){e=s(t,"H6",{});var n=r(e);a=l(n,"Frame: "),f=l(n,g),h=l(n," at time t="),m=l(n,v),p=l(n," seconds."),n.forEach(i)},m(t,n){c(t,e,n),u(e,a),u(e,f),u(e,h),u(e,m),u(e,p)},p(t,e){4&e&&g!==(g=t[2].frame+"")&&d(f,g),4&e&&v!==(v=t[2].timestamp.toFixed(3)+"")&&d(m,v)},d(t){t&&i(e)}}}function W(t){let e,a,o,l,d,v,w=t[0]&&A(t);return{c(){e=n("div"),w&&w.c(),a=f(),o=n("img"),this.h()},l(t){e=s(t,"DIV",{ref:!0,class:!0});var n=r(e);w&&w.l(n),a=h(n),o=s(n,"IMG",{src:!0,alt:!0}),n.forEach(i),this.h()},h(){o.src!==(l=t[1])&&m(o,"src",l),m(o,"alt",J),m(e,"ref","display"),m(e,"class","image-display")},m(t,n){c(t,e,n),w&&w.m(e,null),u(e,a),u(e,o),d||(v=p(e,"click",z),d=!0)},p(t,[n]){t[0]?w?w.p(t,n):(w=A(t),w.c(),w.m(e,a)):w&&(w.d(1),w=null),2&n&&o.src!==(l=t[1])&&m(o,"src",l)},i:g,o:g,d(t){t&&i(e),w&&w.d(),d=!1,v()}}}let J="carla viewer";function z(){console.log(frame)}function G(t,e,a){let{sensorName:n=""}=e,{showStats:o=!0}=e,{src:s=""}=e,{meta:r={frame:0,timestamp:0}}=e,{sensorData:l={}}=e;return t.$$set=t=>{"sensorName"in t&&a(3,n=t.sensorName),"showStats"in t&&a(0,o=t.showStats),"src"in t&&a(1,s=t.src),"meta"in t&&a(2,r=t.meta),"sensorData"in t&&a(4,l=t.sensorData)},[o,s,r,n,l]}class Q extends t{constructor(t){super(),e(this,t,G,W,a,{sensorName:3,showStats:0,src:1,meta:2,sensorData:4})}}var X=[{latitude:.0009193044393214223,longitude:.001347095566868799,altitude:8},{latitude:.0008084837556765478,longitude:.0013115403148145012,altitude:8},{latitude:.0007186522272633056,longitude:.001383405537544063,altitude:8},{latitude:.0006288206988642742,longitude:.0013115403148145012,altitude:8},{latitude:.0005389891704510319,longitude:.001383405537544063,altitude:7.5},{latitude:.0004491576420520005,longitude:.0013115403148145012,altitude:6},{latitude:.0003593261136387582,longitude:.001383405537544063,altitude:5},{latitude:.00026949458522551595,longitude:.0013115403148145012,altitude:3},{latitude:.00017966305681227368,longitude:.001383405537544063,altitude:2.5},{latitude:8983152841324227e-20,longitude:.0013115403148145012,altitude:2},{latitude:0,longitude:.001383405537544063,altitude:2},{latitude:-8983152842745312e-20,longitude:.0013115403148145012,altitude:2},{latitude:-.00017966305682648454,longitude:.001383405537544063,altitude:1},{latitude:-.00026949458522551595,longitude:.0013115403148145012,altitude:1}];function Y(t){let e,a,g,T,V,x,O,N,M,L,H,j,C,P,R,F,_,U,q,K,A,W,J,z,G,X,Y,Z,tt,et,at,nt,ot,st,rt,lt,it,ct,ut,dt,ft,ht,mt,pt,gt,vt,wt,Et,bt,St,kt,yt,$t,It,Dt,Tt,Vt,xt,Ot,Nt,Mt,Lt,Ht,jt,Ct,Bt,Pt,Rt,Ft,_t,Ut,qt,Kt,At,Wt,Jt,zt,Gt,Qt,Xt,Yt,Zt,te=t[4].throttle.toFixed(3)+"",ee=t[4].brake.toFixed(3)+"",ae=t[4].steer.toFixed(3)+"";function ne(e){t[12](e)}function oe(e){t[13](e)}e=new B({});let se={sensorName:"autopilot-camera1",showStats:!0};function re(e){t[14](e)}function le(e){t[15](e)}void 0!==t[0]&&(se.src=t[0]),void 0!==t[2]&&(se.meta=t[2]),H=new Q({props:se}),v.push((()=>w(H,"src",ne))),v.push((()=>w(H,"meta",oe)));let ie={sensorName:"autopilot-camera2",showStats:!0};return void 0!==t[1]&&(ie.src=t[1]),void 0!==t[3]&&(ie.meta=t[3]),R=new Q({props:ie}),v.push((()=>w(R,"src",re))),v.push((()=>w(R,"meta",le))),{c(){E(e.$$.fragment),a=f(),g=n("div"),T=n("div"),V=n("div"),x=n("div"),O=n("div"),N=n("h4"),M=o("Dash Cam"),L=f(),E(H.$$.fragment),P=f(),E(R.$$.fragment),U=f(),q=n("div"),K=n("h4"),A=o("Manual Control"),W=f(),J=n("input"),z=f(),G=n("h4"),X=o("Vehicle Inputs"),Y=f(),Z=n("div"),tt=n("div"),et=n("label"),at=o("Throttle:"),nt=f(),ot=n("div"),st=n("div"),rt=o(te),lt=f(),it=n("div"),ct=n("div"),ut=n("label"),dt=o("Brake:"),ft=f(),ht=n("div"),mt=n("div"),pt=o(ee),gt=f(),vt=n("div"),wt=n("div"),Et=n("label"),bt=o("Steer:"),St=f(),kt=n("div"),yt=n("div"),$t=o(ae),It=f(),Dt=n("div"),Tt=n("div"),Vt=n("h4"),xt=o("Position"),Ot=f(),Nt=n("p"),Mt=o(t[6]),Lt=f(),Ht=n("div"),jt=n("h4"),Ct=o("Orientation"),Bt=f(),Pt=n("p"),Rt=o(t[7]),Ft=f(),_t=n("div"),Ut=n("h4"),qt=o("Speed"),Kt=f(),At=n("p"),Wt=o(t[5]),Jt=f(),zt=n("div"),Gt=n("button"),Qt=o("Reset Vehicle"),this.h()},l(n){b(e.$$.fragment,n),a=h(n),g=s(n,"DIV",{class:!0});var o=r(g);T=s(o,"DIV",{class:!0});var c=r(T);V=s(c,"DIV",{class:!0});var u=r(V);x=s(u,"DIV",{class:!0});var d=r(x);O=s(d,"DIV",{class:!0});var f=r(O);N=s(f,"H4",{});var m=r(N);M=l(m,"Dash Cam"),m.forEach(i),L=h(f),b(H.$$.fragment,f),P=h(f),b(R.$$.fragment,f),f.forEach(i),U=h(d),q=s(d,"DIV",{class:!0});var p=r(q);K=s(p,"H4",{});var v=r(K);A=l(v,"Manual Control"),v.forEach(i),W=h(p),J=s(p,"INPUT",{type:!0}),z=h(p),G=s(p,"H4",{});var w=r(G);X=l(w,"Vehicle Inputs"),w.forEach(i),Y=h(p),Z=s(p,"DIV",{});var E=r(Z);tt=s(E,"DIV",{cols:!0,class:!0});var S=r(tt);et=s(S,"LABEL",{for:!0});var k=r(et);at=l(k,"Throttle:"),k.forEach(i),S.forEach(i),nt=h(E),ot=s(E,"DIV",{class:!0});var y=r(ot);st=s(y,"DIV",{class:!0});var $=r(st);rt=l($,te),$.forEach(i),y.forEach(i),E.forEach(i),lt=h(p),it=s(p,"DIV",{});var I=r(it);ct=s(I,"DIV",{class:!0});var D=r(ct);ut=s(D,"LABEL",{for:!0});var j=r(ut);dt=l(j,"Brake:"),j.forEach(i),D.forEach(i),ft=h(I),ht=s(I,"DIV",{class:!0});var C=r(ht);mt=s(C,"DIV",{class:!0});var B=r(mt);pt=l(B,ee),B.forEach(i),C.forEach(i),I.forEach(i),gt=h(p),vt=s(p,"DIV",{});var F=r(vt);wt=s(F,"DIV",{class:!0});var _=r(wt);Et=s(_,"LABEL",{for:!0});var Q=r(Et);bt=l(Q,"Steer:"),Q.forEach(i),_.forEach(i),St=h(F),kt=s(F,"DIV",{cols:!0,class:!0});var Xt=r(kt);yt=s(Xt,"DIV",{class:!0});var Yt=r(yt);$t=l(Yt,ae),Yt.forEach(i),Xt.forEach(i),F.forEach(i),It=h(p),Dt=s(p,"DIV",{class:!0});var Zt=r(Dt);Tt=s(Zt,"DIV",{});var ne=r(Tt);Vt=s(ne,"H4",{});var oe=r(Vt);xt=l(oe,"Position"),oe.forEach(i),Ot=h(ne),Nt=s(ne,"P",{class:!0});var se=r(Nt);Mt=l(se,t[6]),se.forEach(i),ne.forEach(i),Lt=h(Zt),Ht=s(Zt,"DIV",{});var re=r(Ht);jt=s(re,"H4",{});var le=r(jt);Ct=l(le,"Orientation"),le.forEach(i),Bt=h(re),Pt=s(re,"P",{class:!0});var ie=r(Pt);Rt=l(ie,t[7]),ie.forEach(i),re.forEach(i),Ft=h(Zt),_t=s(Zt,"DIV",{});var ce=r(_t);Ut=s(ce,"H4",{});var ue=r(Ut);qt=l(ue,"Speed"),ue.forEach(i),Kt=h(ce),At=s(ce,"P",{class:!0});var de=r(At);Wt=l(de,t[5]),de.forEach(i),ce.forEach(i),Zt.forEach(i),Jt=h(p),zt=s(p,"DIV",{class:!0});var fe=r(zt);Gt=s(fe,"BUTTON",{class:!0});var he=r(Gt);Qt=l(he,"Reset Vehicle"),he.forEach(i),fe.forEach(i),p.forEach(i),d.forEach(i),u.forEach(i),c.forEach(i),o.forEach(i),this.h()},h(){m(O,"class","col-xl-6"),m(J,"type","checkbox"),m(et,"for","range-throttle"),m(tt,"cols","2"),m(tt,"class","align-self-center"),m(st,"class","mt-2"),m(ot,"class","align-self-center"),m(ut,"for","range-brake"),m(ct,"class","align-self-center"),m(mt,"class","mt-2"),m(ht,"class","align-self-center"),m(Et,"for","range-throttle"),m(wt,"class","align-self-center"),m(yt,"class","mt-2"),m(kt,"cols","2"),m(kt,"class","align-self-center"),m(Nt,"class","svelte-au1azq"),m(Pt,"class","svelte-au1azq"),m(At,"class","svelte-au1azq"),m(Dt,"class","mt-3"),m(Gt,"class","my-1 align-self-center"),m(zt,"class","text-center"),m(q,"class","col-xl-6"),m(x,"class","w3-container"),m(V,"class","autopilot"),m(T,"class","w3-responsive"),m(g,"class","w3-container")},m(n,o){S(e,n,o),c(n,a,o),c(n,g,o),u(g,T),u(T,V),u(V,x),u(x,O),u(O,N),u(N,M),u(O,L),S(H,O,null),u(O,P),S(R,O,null),u(x,U),u(x,q),u(q,K),u(K,A),u(q,W),u(q,J),u(q,z),u(q,G),u(G,X),u(q,Y),u(q,Z),u(Z,tt),u(tt,et),u(et,at),u(Z,nt),u(Z,ot),u(ot,st),u(st,rt),u(q,lt),u(q,it),u(it,ct),u(ct,ut),u(ut,dt),u(it,ft),u(it,ht),u(ht,mt),u(mt,pt),u(q,gt),u(q,vt),u(vt,wt),u(wt,Et),u(Et,bt),u(vt,St),u(vt,kt),u(kt,yt),u(yt,$t),u(q,It),u(q,Dt),u(Dt,Tt),u(Tt,Vt),u(Vt,xt),u(Tt,Ot),u(Tt,Nt),u(Nt,Mt),u(Dt,Lt),u(Dt,Ht),u(Ht,jt),u(jt,Ct),u(Ht,Bt),u(Ht,Pt),u(Pt,Rt),u(Dt,Ft),u(Dt,_t),u(_t,Ut),u(Ut,qt),u(_t,Kt),u(_t,At),u(At,Wt),u(q,Jt),u(q,zt),u(zt,Gt),u(Gt,Qt),Xt=!0,Yt||(Zt=[p(J,"change",t[8]),p(Gt,"click",t[9])],Yt=!0)},p(t,e){const a={};!j&&1&e[0]&&(j=!0,a.src=t[0],k((()=>j=!1))),!C&&4&e[0]&&(C=!0,a.meta=t[2],k((()=>C=!1))),H.$set(a);const n={};!F&&2&e[0]&&(F=!0,n.src=t[1],k((()=>F=!1))),!_&&8&e[0]&&(_=!0,n.meta=t[3],k((()=>_=!1))),R.$set(n),(!Xt||16&e[0])&&te!==(te=t[4].throttle.toFixed(3)+"")&&d(rt,te),(!Xt||16&e[0])&&ee!==(ee=t[4].brake.toFixed(3)+"")&&d(pt,ee),(!Xt||16&e[0])&&ae!==(ae=t[4].steer.toFixed(3)+"")&&d($t,ae),(!Xt||64&e[0])&&d(Mt,t[6]),(!Xt||128&e[0])&&d(Rt,t[7]),(!Xt||32&e[0])&&d(Wt,t[5])},i(t){Xt||(y(e.$$.fragment,t),y(H.$$.fragment,t),y(R.$$.fragment,t),Xt=!0)},o(t){$(e.$$.fragment,t),$(H.$$.fragment,t),$(R.$$.fragment,t),Xt=!1},d(t){I(e,t),t&&i(a),t&&i(g),I(H),I(R),Yt=!1,D(Zt)}}}let Z=.1;function tt(t,e){let a=0;for(let n=0;n<3;n++)a+=t[n]*e[n];return a}function et(t){return Math.sqrt(tt(t,t))}function at(t,e,a){let{title:n}=e,{input_data:o}=e,s="",r="",l={timestamp:0,frame:0},i={timestamp:0,frame:0},c=[{name:"autopilot-gnss",type:"gnss"},{name:"autopilot-imu",type:"imu"},{name:"autopilot-tachometer",type:"tachometer"},{name:"autopilot-camera1",type:"camera"},{name:"autopilot-camera2",type:"camera"}],u=!1,d=null,f=!1,h=0,m=X,p=0,g=[0,-1,0],v={throttle:0,brake:0,steer:0},w={Kp:.5,Ki:.001,Kd:.02,tau:1,integrator:0,differentiator:0,lastError:0,lastMeasurement:0},E={Kp:.01,Ki:0,Kd:.01,tau:1,integrator:0,differentiator:0,lastError:0,lastMeasurement:0},b={},S="",k="-",y="",$="Lat: -, Lon: -, Alt: -",I="",D="-";function x(t){let e=b[t];return e||null}function O(t){let e=String.fromCharCode(t.keyCode).toLowerCase();u&&d===e||(u=!0,d=e,"w"===e?a(4,v.throttle=1,v):"a"===e?a(4,v.steer=-1,v):"s"===e?a(4,v.brake=1,v):"d"===e&&a(4,v.steer=1,v),M())}function N(t){u=!1;let e=String.fromCharCode(t.keyCode).toLowerCase();"w"===e?a(4,v.throttle=0,v):"a"===e?a(4,v.steer=0,v):"s"===e?a(4,v.brake=0,v):"d"===e&&a(4,v.steer=0,v),M()}function M(){V({method:"POST",url:"/control",data:v,headers:{"content-type":"application/json"}}).catch((function(t){P.danger("apply control failed")}))}function L(){console.log("entering autopilotControl function",m),console.log("sensorData[autopilot-tachometer]",b["autopilot-tachometer"]);let t=b["autopilot-tachometer"].speed,e=b["autopilot-gnss"],n=b["autopilot-imu"].orientation,o=o,s=m[p],r=function(t,e){let a=e-t,n=t,o=w.Kp*a,s=w.integrator+.5*w.Ki*Z*(w.lastError+a),r=(2*w.Kd*(n-w.lastMeasurement)+(2*w.tau-Z)*w.differentiator)/(2*w.tau+Z),l=Math.min(Math.max(o+s+r,-1),1);return w.integrator=s,w.differentiator=r,w.lastError=a,w.lastMeasurement=n,l}(t,o),l=function(t,e,a){let n=[60*(a.longitude-t.longitude)*1852,60*-(a.latitude-t.latitude)*1852,0],o=Math.acos(Math.min(Math.max(tt(n,g)/(et(n)*et(g)),-1),1));o=o/Math.PI*180,function(t,e){return[t[1]*e[2]-t[2]*e[1],t[2]*e[0]-t[0]*e[2],t[0]*e[1]-t[1]*e[0]]}(g,n)[2]<0&&(o=360-o);let s=o-e;s>180?s-=360:s<-180&&(s+=360);let r=e,l=E.Kp*s,i=E.integrator+.5*E.Ki*Z*(E.lastError+s),c=(2*E.Kd*(r-E.lastMeasurement)+(2*E.tau-Z)*E.differentiator)/(2*E.tau+Z),u=Math.min(Math.max(l+i+c,-1),1);E.integrator=i,E.differentiator=c,E.lastError=s,E.lastMeasurement=r,et(n)<2&&p++;p>=m.length&&(p=0);return u}(e,n,s);r>=0?(a(4,v.throttle=Math.min(r,.75),v),a(4,v.brake=0,v)):(a(4,v.throttle=0,v),a(4,v.brake=Math.min(Math.abs(r),1),v)),l>v.steer+.1?l=v.steer+.1:l<v.steer-.1&&(l=v.steer-.1),a(4,v.steer=l>=0?Math.min(1,l):Math.max(-1,l),v),M()}return T((async()=>{V({method:"POST",url:"/config",headers:{"content-type":"application/json"},data:{newSensors:c}}).then((t=>{console.log("sensor added in backend, now websocket connection"),c.forEach((t=>{!function(t){let e="http://localhost:8000/sensor/"+t.type+"/"+t.name+"/websocket";e=e.replace("http","ws"),console.log("trying websocket connection at URL:",e);let n=new WebSocket(e);n.onopen=function(){console.log("WebSocket connection established with "+e)},n.onmessage=function(e){let n=JSON.parse(e.data);b={},b[t.name]=n,"autopilot-camera1"==t.name&&(a(0,s="data:image/jpeg;base64,"+n.image),a(2,l={timestamp:n.timestamp,frame:n.frame})),"autopilot-camera2"==t.name&&(a(1,r="data:image/jpeg;base64,"+n.image),a(3,i={timestamp:n.timestamp,frame:n.frame})),"autopilot-tachometer"==t.name&&(S=x("autopilot-tachometer"),console.log("speed:",S),S&&a(5,k=S.speed.toFixed(3)+" m/s")),"autopilot-gnss"==t.name&&(y=x("autopilot-gnss"),y&&a(6,$="Lat: "+y.latitude+" °\nLon: "+y.longitude+" °\nAlt: "+y.altitude.toFixed(2)+" m")),"autopilot-imu"==t.name&&(I=x("autopilot-imu"),I&&a(7,D=I.orientation.toFixed(3)+" °"))}}(t),console.log("sensor added!")}));let e={enabled:!0,updateInterval:.1,imageWidth:800,imageHeight:600,fov:90},n="/sensor/camera/autopilot-camera1";console.log("first request to carla backend..."),V({method:"POST",url:n,data:{settings:e},headers:{"content-type":"application/json"}}).catch((function(t){P.danger("axos request 1 to carla failed")})),e.position={x:-6,y:0,z:5},e.rotation={roll:0,pitch:-35,yaw:0},n="/sensor/camera/autopilot-camera2",V({method:"POST",url:n,data:{settings:e},headers:{"content-type":"application/json"}}).catch((function(t){P.danger("axos request 2 to carla failed")}));n="/sensor/imu/autopilot-imu",V({method:"POST",url:n,data:{settings:{enabled:!0,updateInterval:.1}},headers:{"content-type":"application/json"}}).catch((function(t){P.danger("axos request 3 to carla failed")}));n="/sensor/gnss/autopilot-gnss",V({method:"POST",url:n,data:{settings:{enabled:!0,updateInterval:.1}},headers:{"content-type":"application/json"}}).catch((function(t){P.danger("axos request 4 to carla failed")}));n="/sensor/tachometer/autopilot-tachometer",V({method:"POST",url:n,data:{settings:{enabled:!0,updateInterval:.1}},headers:{"content-type":"application/json"}}).then((()=>{P.info("autopilot mode on.")})),P.success("The required sensors for the autopilot have been successfully created.")}),(t=>{P.danger("failed to call /config sensor")}))})),t.$$set=t=>{"title"in t&&a(10,n=t.title),"input_data"in t&&a(11,o=t.input_data)},[s,r,l,i,v,k,$,D,function(){f=!f,console.log("switching manual auto control."),console.log("manual control:",f),f?(window.addEventListener("keydown",O),window.addEventListener("keyup",N),h&&clearInterval(h),a(4,v.throttle=0,v),a(4,v.brake=1,v),a(4,v.steer=0,v)):(window.removeEventListener("keydown",O),window.removeEventListener("keyup",N),h=setInterval(L,20))},function(){p=0,a(4,v.throttle=0,v),a(4,v.brake=1,v),a(4,v.steer=0,v),w.integrator=0,w.differentiator=0,w.lastError=0,w.lastMeasurement=0,E.integrator=0,E.differentiator=0,E.lastError=0,E.lastMeasurement=0,V({method:"POST",url:"/config",headers:{"content-type":"application/json"},data:{simulation:{reset:!0}}}).then((()=>{console.log("Simulation was reset!")}),(t=>{console.log(t)}))},n,o,function(t){s=t,a(0,s)},function(t){l=t,a(2,l)},function(t){r=t,a(1,r)},function(t){i=t,a(3,i)}]}class nt extends t{constructor(t){super(),e(this,t,at,Y,a,{title:10,input_data:11},[-1,-1])}}function ot(t){let e,a,d,v,w,E,b,S,k,y;return{c(){e=n("div"),a=n("span"),d=o("×"),v=f(),w=n("img"),b=f(),S=n("div"),this.h()},l(t){e=s(t,"DIV",{id:!0,class:!0});var n=r(e);a=s(n,"SPAN",{class:!0});var o=r(a);d=l(o,"×"),o.forEach(i),v=h(n),w=s(n,"IMG",{class:!0,id:!0,src:!0}),b=h(n),S=s(n,"DIV",{id:!0,class:!0}),r(S).forEach(i),n.forEach(i),this.h()},h(){m(a,"class","close svelte-rk4oiy"),m(w,"class","modal-content svelte-rk4oiy"),m(w,"id","img01"),w.src!==(E="")&&m(w,"src",""),m(S,"id","caption"),m(S,"class","svelte-rk4oiy"),m(e,"id","myModal"),m(e,"class","modal svelte-rk4oiy")},m(t,n){c(t,e,n),u(e,a),u(a,d),u(e,v),u(e,w),u(e,b),u(e,S),k||(y=p(a,"click",st),k=!0)},p:g,i:g,o:g,d(t){t&&i(e),k=!1,y()}}}function st(){document.getElementById("myModal").style.display="none"}function rt(t,e){var a=document.getElementById("myModal"),n=document.getElementById("img01"),o=document.getElementById("caption");a.style.display="block",n.src=t,o.innerHTML=e}function lt(t,e,a){return[rt]}class it extends t{constructor(t){super(),e(this,t,lt,ot,a,{changeImage:0})}get changeImage(){return rt}}function ct(t,e,a){const n=t.slice();return n[33]=e[a],n[35]=a,n}function ut(t,e,a){const n=t.slice();return n[36]=e[a],n[35]=a,n}function dt(t,e,a){const n=t.slice();return n[36]=e[a],n[35]=a,n}function ft(t,e,a){const n=t.slice();return n[39]=e[a],n[40]=e,n[41]=a,n}function ht(t){let e,a,g,v,w,E,b,S,k,I,T,V,x,N,M,L,H,C,B,P,R,F,_,U,q,K,A,W,J,z,G,Q,X,Y,Z,tt,et="configurations"in t[1]&&mt(t);return{c(){e=n("h4"),a=o("Scenario: "),g=o(t[3]),v=o(" Number of Containers: "),w=o(t[4]),E=o("."),b=f(),S=n("div"),k=n("div"),I=n("button"),T=o("Start Simulation"),V=f(),x=n("div"),N=n("button"),M=o("Stop Simulation"),L=f(),H=n("div"),C=n("button"),B=o("Reset WS Connection"),P=f(),R=n("hr"),F=f(),_=n("section"),U=n("h3"),q=o("Application Logs"),K=f(),A=n("button"),W=o("Clear Logs"),J=f(),et&&et.c(),z=f(),G=n("br"),Q=f(),X=n("hr"),this.h()},l(n){e=s(n,"H4",{});var o=r(e);a=l(o,"Scenario: "),g=l(o,t[3]),v=l(o," Number of Containers: "),w=l(o,t[4]),E=l(o,"."),o.forEach(i),b=h(n),S=s(n,"DIV",{class:!0});var c=r(S);k=s(c,"DIV",{class:!0});var u=r(k);I=s(u,"BUTTON",{class:!0});var d=r(I);T=l(d,"Start Simulation"),d.forEach(i),u.forEach(i),V=h(c),x=s(c,"DIV",{class:!0});var f=r(x);N=s(f,"BUTTON",{class:!0});var m=r(N);M=l(m,"Stop Simulation"),m.forEach(i),f.forEach(i),L=h(c),H=s(c,"DIV",{class:!0});var p=r(H);C=s(p,"BUTTON",{class:!0});var y=r(C);B=l(y,"Reset WS Connection"),y.forEach(i),p.forEach(i),c.forEach(i),P=h(n),R=s(n,"HR",{class:!0}),F=h(n),_=s(n,"SECTION",{class:!0});var $=r(_);U=s($,"H3",{});var D=r(U);q=l(D,"Application Logs"),D.forEach(i),$.forEach(i),K=h(n),A=s(n,"BUTTON",{class:!0});var O=r(A);W=l(O,"Clear Logs"),O.forEach(i),J=h(n),et&&et.l(n),z=h(n),G=s(n,"BR",{}),Q=h(n),X=s(n,"HR",{class:!0}),this.h()},h(){m(I,"class","w3-col w3-input w3-border"),m(k,"class","w3-third"),m(N,"class","w3-col w3-input w3-border"),m(x,"class","w3-third"),m(C,"class","w3-col w3-input w3-border"),m(H,"class","w3-third"),m(S,"class","w3-row w3-section"),m(R,"class","svelte-drd2kv"),m(_,"class","page-headline"),m(A,"class","w3-col w3-input w3-border w3-button"),m(X,"class","svelte-drd2kv")},m(n,o){c(n,e,o),u(e,a),u(e,g),u(e,v),u(e,w),u(e,E),c(n,b,o),c(n,S,o),u(S,k),u(k,I),u(I,T),u(S,V),u(S,x),u(x,N),u(N,M),u(S,L),u(S,H),u(H,C),u(C,B),c(n,P,o),c(n,R,o),c(n,F,o),c(n,_,o),u(_,U),u(U,q),c(n,K,o),c(n,A,o),u(A,W),c(n,J,o),et&&et.m(n,o),c(n,z,o),c(n,G,o),c(n,Q,o),c(n,X,o),Y=!0,Z||(tt=[p(I,"click",t[16]),p(N,"click",t[17]),p(C,"click",t[18]),p(A,"click",t[8])],Z=!0)},p(t,e){(!Y||8&e[0])&&d(g,t[3]),(!Y||16&e[0])&&d(w,t[4]),"configurations"in t[1]?et?(et.p(t,e),2&e[0]&&y(et,1)):(et=mt(t),et.c(),y(et,1),et.m(z.parentNode,z)):et&&(j(),$(et,1,1,(()=>{et=null})),O())},i(t){Y||(y(et),Y=!0)},o(t){$(et),Y=!1},d(t){t&&i(e),t&&i(b),t&&i(S),t&&i(P),t&&i(R),t&&i(F),t&&i(_),t&&i(K),t&&i(A),t&&i(J),et&&et.d(t),t&&i(z),t&&i(G),t&&i(Q),t&&i(X),Z=!1,D(tt)}}}function mt(t){let e,a,n=t[1].configurations.length>0&&pt(t);return{c(){n&&n.c(),e=x()},l(t){n&&n.l(t),e=x()},m(t,o){n&&n.m(t,o),c(t,e,o),a=!0},p(t,a){t[1].configurations.length>0?n?(n.p(t,a),2&a[0]&&y(n,1)):(n=pt(t),n.c(),y(n,1),n.m(e.parentNode,e)):n&&(j(),$(n,1,1,(()=>{n=null})),O())},i(t){a||(y(n),a=!0)},o(t){$(n),a=!1},d(t){n&&n.d(t),t&&i(e)}}}function pt(t){let e,a,n=t[1].configurations,o=[];for(let r=0;r<n.length;r+=1)o[r]=Et(ft(t,n,r));const s=t=>$(o[t],1,1,(()=>{o[t]=null}));return{c(){for(let t=0;t<o.length;t+=1)o[t].c();e=x()},l(t){for(let e=0;e<o.length;e+=1)o[e].l(t);e=x()},m(t,n){for(let e=0;e<o.length;e+=1)o[e].m(t,n);c(t,e,n),a=!0},p(t,a){if(34&a[0]){let r;for(n=t[1].configurations,r=0;r<n.length;r+=1){const s=ft(t,n,r);o[r]?(o[r].p(s,a),y(o[r],1)):(o[r]=Et(s),o[r].c(),y(o[r],1),o[r].m(e.parentNode,e))}for(j(),r=n.length;r<o.length;r+=1)s(r);O()}},i(t){if(!a){for(let t=0;t<n.length;t+=1)y(o[t]);a=!0}},o(t){o=o.filter(Boolean);for(let e=0;e<o.length;e+=1)$(o[e]);a=!1},d(t){N(o,t),t&&i(e)}}}function gt(t){let e,a,n=t[41].toString()in t[5],o=n&&vt(t);return{c(){o&&o.c(),e=x()},l(t){o&&o.l(t),e=x()},m(t,n){o&&o.m(t,n),c(t,e,n),a=!0},p(t,a){32&a[0]&&(n=t[41].toString()in t[5]),n?o?(o.p(t,a),32&a[0]&&y(o,1)):(o=vt(t),o.c(),y(o,1),o.m(e.parentNode,e)):o&&(j(),$(o,1,1,(()=>{o=null})),O())},i(t){a||(y(o),a=!0)},o(t){$(o),a=!1},d(t){o&&o.d(t),t&&i(e)}}}function vt(t){let e,a,n=t[5][t[41].toString()].length>0,o=n&&wt(t);return{c(){o&&o.c(),e=x()},l(t){o&&o.l(t),e=x()},m(t,n){o&&o.m(t,n),c(t,e,n),a=!0},p(t,a){32&a[0]&&(n=t[5][t[41].toString()].length>0),n?o?(o.p(t,a),32&a[0]&&y(o,1)):(o=wt(t),o.c(),y(o,1),o.m(e.parentNode,e)):o&&(j(),$(o,1,1,(()=>{o=null})),O())},i(t){a||(y(o),a=!0)},o(t){$(o),a=!1},d(t){o&&o.d(t),t&&i(e)}}}function wt(t){let e,a,m,p,g,D,T=t[39].container_info.name+"";function V(e){t[19](e,t[41])}let x={title:t[39].container_info.name,headers:Object.keys(t[5][t[41].toString()][0])};return void 0!==t[5][t[41].toString()]&&(x.data=t[5][t[41].toString()]),p=new C({props:x}),v.push((()=>w(p,"data",V))),{c(){e=n("h5"),a=o(T),m=f(),E(p.$$.fragment)},l(t){e=s(t,"H5",{});var n=r(e);a=l(n,T),n.forEach(i),m=h(t),b(p.$$.fragment,t)},m(t,n){c(t,e,n),u(e,a),c(t,m,n),S(p,t,n),D=!0},p(e,n){t=e,(!D||2&n[0])&&T!==(T=t[39].container_info.name+"")&&d(a,T);const o={};2&n[0]&&(o.title=t[39].container_info.name),32&n[0]&&(o.headers=Object.keys(t[5][t[41].toString()][0])),!g&&32&n[0]&&(g=!0,o.data=t[5][t[41].toString()],k((()=>g=!1))),p.$set(o)},i(t){D||(y(p.$$.fragment,t),D=!0)},o(t){$(p.$$.fragment,t),D=!1},d(t){t&&i(e),t&&i(m),I(p,t)}}}function Et(t){let e,a,n=Object.keys(t[5]).length>0,o=n&&gt(t);return{c(){o&&o.c(),e=x()},l(t){o&&o.l(t),e=x()},m(t,n){o&&o.m(t,n),c(t,e,n),a=!0},p(t,a){32&a[0]&&(n=Object.keys(t[5]).length>0),n?o?(o.p(t,a),32&a[0]&&y(o,1)):(o=gt(t),o.c(),y(o,1),o.m(e.parentNode,e)):o&&(j(),$(o,1,1,(()=>{o=null})),O())},i(t){a||(y(o),a=!0)},o(t){$(o),a=!1},d(t){o&&o.d(t),t&&i(e)}}}function bt(t){let e,a,d,g,v,w,E,b,S,k,y,$,I,T,V,x,O,N,L,H,j,C,B,P=t[6].length>0&&St(t);return{c(){e=n("div"),a=n("div"),d=n("button"),g=o("Start Simulation"),v=f(),w=n("hr"),E=f(),b=n("div"),S=n("h1"),k=n("b"),y=o("Edit Files"),$=f(),P&&P.c(),I=f(),T=n("hr"),V=f(),x=n("div"),O=n("div"),N=n("button"),L=o("Delete Files"),H=f(),j=n("hr"),this.h()},l(t){e=s(t,"DIV",{class:!0});var n=r(e);a=s(n,"DIV",{class:!0});var o=r(a);d=s(o,"BUTTON",{class:!0});var c=r(d);g=l(c,"Start Simulation"),c.forEach(i),o.forEach(i),n.forEach(i),v=h(t),w=s(t,"HR",{class:!0}),E=h(t),b=s(t,"DIV",{class:!0});var u=r(b);S=s(u,"H1",{class:!0,style:!0});var f=r(S);k=s(f,"B",{});var m=r(k);y=l(m,"Edit Files"),m.forEach(i),f.forEach(i),u.forEach(i),$=h(t),P&&P.l(t),I=h(t),T=s(t,"HR",{class:!0}),V=h(t),x=s(t,"DIV",{class:!0});var p=r(x);O=s(p,"DIV",{class:!0});var D=r(O);N=s(D,"BUTTON",{class:!0});var M=r(N);L=l(M,"Delete Files"),M.forEach(i),D.forEach(i),p.forEach(i),H=h(t),j=s(t,"HR",{class:!0}),this.h()},h(){m(d,"class","w3-col w3-input w3-border"),m(a,"class","w3-rest"),m(e,"class","w3-row w3-section"),m(w,"class","svelte-drd2kv"),m(S,"class","w3-text-yellow"),M(S,"text-shadow","1px 1px 0 #444"),m(b,"class","w3-panel w3-blue"),m(T,"class","svelte-drd2kv"),m(N,"class","w3-col w3-input w3-border"),m(O,"class","w3-rest"),m(x,"class","w3-row w3-section"),m(j,"class","svelte-drd2kv")},m(n,o){c(n,e,o),u(e,a),u(a,d),u(d,g),c(n,v,o),c(n,w,o),c(n,E,o),c(n,b,o),u(b,S),u(S,k),u(k,y),c(n,$,o),P&&P.m(n,o),c(n,I,o),c(n,T,o),c(n,V,o),c(n,x,o),u(x,O),u(O,N),u(N,L),c(n,H,o),c(n,j,o),C||(B=[p(d,"click",t[11]),p(N,"click",t[13])],C=!0)},p(t,e){t[6].length>0?P?P.p(t,e):(P=St(t),P.c(),P.m(I.parentNode,I)):P&&(P.d(1),P=null)},d(t){t&&i(e),t&&i(v),t&&i(w),t&&i(E),t&&i(b),t&&i($),P&&P.d(t),t&&i(I),t&&i(T),t&&i(V),t&&i(x),t&&i(H),t&&i(j),C=!1,D(B)}}}function St(t){let e,a,o,l,d,p,g=Object.keys(t[6][0]),v=[];for(let n=0;n<g.length;n+=1)v[n]=kt(dt(t,g,n));let w=t[6],E=[];for(let n=0;n<w.length;n+=1)E[n]=Dt(ct(t,w,n));return{c(){e=n("div"),a=n("div"),o=n("table"),l=n("thead"),d=n("tr");for(let t=0;t<v.length;t+=1)v[t].c();p=f();for(let t=0;t<E.length;t+=1)E[t].c();this.h()},l(t){e=s(t,"DIV",{class:!0});var n=r(e);a=s(n,"DIV",{class:!0});var c=r(a);o=s(c,"TABLE",{class:!0,style:!0});var u=r(o);l=s(u,"THEAD",{});var f=r(l);d=s(f,"TR",{class:!0});var m=r(d);for(let e=0;e<v.length;e+=1)v[e].l(m);m.forEach(i),f.forEach(i),p=h(u);for(let e=0;e<E.length;e+=1)E[e].l(u);u.forEach(i),c.forEach(i),n.forEach(i),this.h()},h(){m(d,"class","w3-dark-grey"),m(o,"class","w3-table-all"),M(o,"width","100%"),m(a,"class","w3-responsive"),m(e,"class","w3-container")},m(t,n){c(t,e,n),u(e,a),u(a,o),u(o,l),u(l,d);for(let e=0;e<v.length;e+=1)v[e].m(d,null);u(o,p);for(let e=0;e<E.length;e+=1)E[e].m(o,null)},p(t,e){if(64&e[0]){let a;for(g=Object.keys(t[6][0]),a=0;a<g.length;a+=1){const n=dt(t,g,a);v[a]?v[a].p(n,e):(v[a]=kt(n),v[a].c(),v[a].m(d,null))}for(;a<v.length;a+=1)v[a].d(1);v.length=g.length}if(16448&e[0]){let a;for(w=t[6],a=0;a<w.length;a+=1){const n=ct(t,w,a);E[a]?E[a].p(n,e):(E[a]=Dt(n),E[a].c(),E[a].m(o,null))}for(;a<E.length;a+=1)E[a].d(1);E.length=w.length}},d(t){t&&i(e),N(v,t),N(E,t)}}}function kt(t){let e,a,f=t[36]+"";return{c(){e=n("th"),a=o(f)},l(t){e=s(t,"TH",{});var n=r(e);a=l(n,f),n.forEach(i)},m(t,n){c(t,e,n),u(e,a)},p(t,e){64&e[0]&&f!==(f=t[36]+"")&&d(a,f)},d(t){t&&i(e)}}}function yt(t){let e,a,f=t[33][t[36]]+"";return{c(){e=n("td"),a=o(f)},l(t){e=s(t,"TD",{});var n=r(e);a=l(n,f),n.forEach(i)},m(t,n){c(t,e,n),u(e,a)},p(t,e){64&e[0]&&f!==(f=t[33][t[36]]+"")&&d(a,f)},d(t){t&&i(e)}}}function $t(t){let e,a,f,h,m=t[33][t[36]]+"";return{c(){e=n("td"),a=o(m)},l(t){e=s(t,"TD",{});var n=r(e);a=l(n,m),n.forEach(i)},m(n,o){c(n,e,o),u(e,a),f||(h=p(e,"click",t[14]),f=!0)},p(t,e){64&e[0]&&m!==(m=t[33][t[36]]+"")&&d(a,m)},d(t){t&&i(e),f=!1,h()}}}function It(t){let e;function a(t,e){return"filename"==t[36]?$t:yt}let n=a(t),o=n(t);return{c(){o.c(),e=x()},l(t){o.l(t),e=x()},m(t,a){o.m(t,a),c(t,e,a)},p(t,s){n===(n=a(t))&&o?o.p(t,s):(o.d(1),o=n(t),o&&(o.c(),o.m(e.parentNode,e)))},d(t){o.d(t),t&&i(e)}}}function Dt(t){let e,a,o=Object.keys(t[6][0]),l=[];for(let n=0;n<o.length;n+=1)l[n]=It(ut(t,o,n));return{c(){e=n("tr");for(let t=0;t<l.length;t+=1)l[t].c();a=f()},l(t){e=s(t,"TR",{});var n=r(e);for(let e=0;e<l.length;e+=1)l[e].l(n);a=h(n),n.forEach(i)},m(t,n){c(t,e,n);for(let a=0;a<l.length;a+=1)l[a].m(e,null);u(e,a)},p(t,n){if(16448&n[0]){let s;for(o=Object.keys(t[6][0]),s=0;s<o.length;s+=1){const r=ut(t,o,s);l[s]?l[s].p(r,n):(l[s]=It(r),l[s].c(),l[s].m(e,a))}for(;s<l.length;s+=1)l[s].d(1);l.length=o.length}},d(t){t&&i(e),N(l,t)}}}function Tt(t){let e,a,d,g,D,T,V,x,O,N,M,L,H,j;function C(e){t[20](e)}let B={title:"AutoPilot Component"};return void 0!==t[7]&&(B.input_data=t[7]),x=new nt({props:B}),v.push((()=>w(x,"input_data",C))),{c(){e=n("div"),a=n("div"),d=n("button"),g=o("Start Simulation"),D=f(),T=n("hr"),V=f(),E(x.$$.fragment),N=f(),M=n("hr"),this.h()},l(t){e=s(t,"DIV",{class:!0});var n=r(e);a=s(n,"DIV",{class:!0});var o=r(a);d=s(o,"BUTTON",{class:!0});var c=r(d);g=l(c,"Start Simulation"),c.forEach(i),o.forEach(i),n.forEach(i),D=h(t),T=s(t,"HR",{class:!0}),V=h(t),b(x.$$.fragment,t),N=h(t),M=s(t,"HR",{class:!0}),this.h()},h(){m(d,"class","w3-col w3-input w3-border"),m(a,"class","w3-rest"),m(e,"class","w3-row w3-section"),m(T,"class","svelte-drd2kv"),m(M,"class","svelte-drd2kv")},m(n,o){c(n,e,o),u(e,a),u(a,d),u(d,g),c(n,D,o),c(n,T,o),c(n,V,o),S(x,n,o),c(n,N,o),c(n,M,o),L=!0,H||(j=p(d,"click",t[12]),H=!0)},p(t,e){const a={};!O&&128&e[0]&&(O=!0,a.input_data=t[7],k((()=>O=!1))),x.$set(a)},i(t){L||(y(x.$$.fragment,t),L=!0)},o(t){$(x.$$.fragment,t),L=!1},d(t){t&&i(e),t&&i(D),t&&i(T),t&&i(V),I(x,t),t&&i(N),t&&i(M),H=!1,j()}}}function Vt(t){let e,a,d,p,g,v,w,k,D,T,V,x,N,H,C,P,R,F,_;a=new B({});p=new it({props:{}}),t[15](p);let U="Communication"==t[2]&&ht(t),q="Static"==t[2]&&bt(t),K="Driving Simulation"==t[2]&&Tt(t);return{c(){e=f(),E(a.$$.fragment),d=f(),E(p.$$.fragment),g=f(),v=n("hr"),w=f(),k=n("div"),D=n("h1"),T=n("b"),V=o("Simulation"),x=f(),N=n("hr"),H=f(),U&&U.c(),C=f(),q&&q.c(),P=f(),K&&K.c(),R=f(),F=n("hr"),this.h()},l(t){L('[data-svelte="svelte-1smsifb"]',document.head).forEach(i),e=h(t),b(a.$$.fragment,t),d=h(t),b(p.$$.fragment,t),g=h(t),v=s(t,"HR",{class:!0}),w=h(t),k=s(t,"DIV",{class:!0});var n=r(k);D=s(n,"H1",{class:!0,style:!0});var o=r(D);T=s(o,"B",{});var c=r(T);V=l(c,"Simulation"),c.forEach(i),o.forEach(i),n.forEach(i),x=h(t),N=s(t,"HR",{class:!0}),H=h(t),U&&U.l(t),C=h(t),q&&q.l(t),P=h(t),K&&K.l(t),R=h(t),F=s(t,"HR",{class:!0}),this.h()},h(){document.title="Simulation",m(v,"class","svelte-drd2kv"),m(D,"class","w3-text-yellow"),M(D,"text-shadow","1px 1px 0 #444"),m(k,"class","w3-panel w3-blue"),m(N,"class","svelte-drd2kv"),m(F,"class","svelte-drd2kv")},m(t,n){c(t,e,n),S(a,t,n),c(t,d,n),S(p,t,n),c(t,g,n),c(t,v,n),c(t,w,n),c(t,k,n),u(k,D),u(D,T),u(T,V),c(t,x,n),c(t,N,n),c(t,H,n),U&&U.m(t,n),c(t,C,n),q&&q.m(t,n),c(t,P,n),K&&K.m(t,n),c(t,R,n),c(t,F,n),_=!0},p(t,e){p.$set({}),"Communication"==t[2]?U?(U.p(t,e),4&e[0]&&y(U,1)):(U=ht(t),U.c(),y(U,1),U.m(C.parentNode,C)):U&&(j(),$(U,1,1,(()=>{U=null})),O()),"Static"==t[2]?q?q.p(t,e):(q=bt(t),q.c(),q.m(P.parentNode,P)):q&&(q.d(1),q=null),"Driving Simulation"==t[2]?K?(K.p(t,e),4&e[0]&&y(K,1)):(K=Tt(t),K.c(),y(K,1),K.m(R.parentNode,R)):K&&(j(),$(K,1,1,(()=>{K=null})),O())},i(t){_||(y(a.$$.fragment,t),y(p.$$.fragment,t),y(U),y(K),_=!0)},o(t){$(a.$$.fragment,t),$(p.$$.fragment,t),$(U),$(K),_=!1},d(n){n&&i(e),I(a,n),n&&i(d),t[15](null),I(p,n),n&&i(g),n&&i(v),n&&i(w),n&&i(k),n&&i(x),n&&i(N),n&&i(H),U&&U.d(n),n&&i(C),q&&q.d(n),n&&i(P),K&&K.d(n),n&&i(R),n&&i(F)}}}function xt(t,e,a){let n,o=[],s={},r="";const l=U.subscribe((t=>{o=t})),i=q.subscribe((t=>{a(1,s=t)})),c=K.subscribe((t=>{a(2,r=t)}));let u=[],d=[];H((()=>{l(),i(),c();for(let t=0;t<u.length;t++)u[t].close();for(let t=0;t<d.length;t++)d[t].close()}));let f="Please create and select a scenario before starting the simulation.",h=!1,m=0,p=[],g={},w=[],E=[];function b(){for(const[t,e]of Object.entries(g))a(5,g[t]=[],g)}async function S(t){if(!h)return void P.danger("please create and activate a scenario first.");"start"==t&&b(),F("/simulation/comm","POST",{command:t,configs:s},(function(t){t.data&&(P.success("simulation started."),console.log("response of simulation",t.data))}))}function k(){for(var t=0;t<u.length;t++)ws=u[t],ws.close()}T((async()=>{let t="";for(let e=0;e<o.length;e++)o[e].activated&&(a(3,f=o[e].name),h=!0,t="/api/db1/scenario_configurations/ref-"+o[e]._id);!function(t,e){R(t,(function(t){let a=JSON.parse(t.response);a.data&&a.data.length>0&&(q.set(a.data[0]),e())}))}(t,(function(){if("Communication"==s.type){"configurations"in s&&a(4,m=s.configurations.length);for(var t=0;t<m;t++){a(5,g[t.toString()]=[],g);let e="ws://localhost:8000/simulation/comm/ws/"+t.toString(),n=new WebSocket(e);n.onopen=function(){window.console.log("Successfully connected to the echo websocket server...")},n.onmessage=function(t){let e=JSON.parse(t.data);console.log(e,"printing JSON now");let n=e.client_index,o=JSON.parse(e.data);"status"in o?p[n]=o.status:a(5,g[n]=[...g[n],o],g)},u.push(n)}}if("Static"==s.type){console.log("hello static sample");let t=new WebSocket("ws://localhost:8000/simulation/static/ws");t.onopen=function(){window.console.log("static simulation websocket")},t.onmessage=function(t){let e=JSON.parse(t.data);a(6,w=[...w,e])},d.push(t)}"Communication"==s.type&&console.log("hello driving scenario")}))}));return[n,s,r,f,m,g,w,E,b,S,k,function(){F("/simulation/static","POST",{configs:s},(function(t){t.data&&(P.success("simulation started."),console.log("response of simulation",t.data))}))},function(){F("/simulation/static","POST",{configs:s},(function(t){t.data&&(P.success("simulation started."),console.log("response of simulation",t.data))}))},function(){F("/simulation/static","DELETE",{configs:s},(function(t){t.data&&(P.success("Delete successful."),a(6,w=[]),console.log("response of simulation",t.data))}))},function(){let t=this.innerText;_("/simulation/static","POST",{configs:s,filename:t},(function(e){if(e){let a=new Blob([e.response],{type:"octet/stream"}),o=(window.URL||window.webkitURL).createObjectURL(a);n.changeImage(o,t)}}))},function(t){v[t?"unshift":"push"]((()=>{n=t,a(0,n)}))},()=>S("start"),()=>S("stop"),()=>k(),function(e,n){t.$$.not_equal(g[n.toString()],e)&&(g[n.toString()]=e,a(5,g))},function(t){E=t,a(7,E)}]}export default class extends t{constructor(t){super(),e(this,t,xt,Vt,a,{},[-1,-1])}}
