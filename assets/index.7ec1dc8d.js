import{S as e,i as t,s as r,e as a,t as s,a as l,c as n,b as i,d as o,f as c,g as h,h as m,j as f,k as u,l as p,m as d,n as g,r as v,o as $,p as T,q as k,u as w,v as E,w as x,x as y,y as z,z as b,A as C,B,C as F,D as R,E as L,F as M,G as N,H as P}from"./vendor.68bd5aba.js";function O(e){let t,r,$,T,k,w,E,x,y,z,b,C,B,F,R,L,M,N,P,O;return{c(){t=a("div"),r=a("div"),$=a("button"),T=s("reset"),k=l(),w=a("button"),E=s("reverse"),x=l(),y=a("button"),z=s("play"),b=l(),C=a("button"),B=s("pause"),F=l(),R=a("button"),L=s("loop"),M=l(),N=a("input"),this.h()},l(e){t=n(e,"DIV",{class:!0});var a=i(t);r=n(a,"DIV",{class:!0});var s=i(r);$=n(s,"BUTTON",{class:!0});var l=i($);T=o(l,"reset"),l.forEach(c),k=h(s),w=n(s,"BUTTON",{class:!0});var m=i(w);E=o(m,"reverse"),m.forEach(c),x=h(s),y=n(s,"BUTTON",{class:!0});var f=i(y);z=o(f,"play"),f.forEach(c),b=h(s),C=n(s,"BUTTON",{class:!0});var u=i(C);B=o(u,"pause"),u.forEach(c),F=h(s),R=n(s,"BUTTON",{class:!0});var p=i(R);L=o(p,"loop"),p.forEach(c),s.forEach(c),M=h(a),N=n(a,"INPUT",{type:!0,min:!0,max:!0,step:!0}),a.forEach(c),this.h()},h(){m($,"class","svelte-nwundz"),m(w,"class","svelte-nwundz"),m(y,"class","svelte-nwundz"),m(C,"class","svelte-nwundz"),m(R,"class","svelte-nwundz"),m(r,"class","buttons svelte-nwundz"),m(N,"type","range"),N.value=e[2],m(N,"min","0"),m(N,"max",e[0]),m(N,"step","0.01"),m(t,"class","timer svelte-nwundz")},m(a,s){f(a,t,s),u(t,r),u(r,$),u($,T),u(r,k),u(r,w),u(w,E),u(r,x),u(r,y),u(y,z),u(r,b),u(r,C),u(C,B),u(r,F),u(r,R),u(R,L),u(t,M),u(t,N),P||(O=[p($,"click",d(e[4])),p(w,"click",d(e[5])),p(y,"click",d(e[6])),p(C,"click",d(e[7])),p(R,"click",d(e[8])),p(N,"input",e[9])],P=!0)},p(e,[t]){4&t&&(N.value=e[2]),1&t&&m(N,"max",e[0])},i:g,o:g,d(e){e&&c(t),P=!1,v(O)}}}function U(e,t,r){let a,s=g;e.$$.on_destroy.push((()=>s()));let{minFrameTime:l=0}=t,{maxFrameTime:n}=t;const i=T(l,{duration:(e,t)=>30*Math.abs(e-t)});s(),s=$(i,(e=>r(2,a=e)));return e.$$set=e=>{"minFrameTime"in e&&r(3,l=e.minFrameTime),"maxFrameTime"in e&&r(0,n=e.maxFrameTime)},[n,i,a,l,()=>i.set(0,{duration:0}),()=>i.set(0),()=>i.set(n),()=>i.update(((e,t)=>t)),async()=>{for(;;)await i.set(n),await i.set(0,{duration:0})},e=>i.set(e.currentTarget.valueAsNumber,{duration:0})]}class I extends e{constructor(e){super(),t(this,e,U,O,r,{minFrameTime:3,maxFrameTime:0,frameTime:1})}get frameTime(){return this.$$.ctx[1]}}const q=(e,t)=>{const r=(e=>{const t=e.map((e=>e.time));return w(t,e)})(e);return k(t,(e=>r(e)))};function A(e,t,r){const a=e.slice();return a[12]=t[r].deg,a[13]=t[r].h,a[15]=r,a}function D(e){let t,r,a,s,l;return{c(){t=E("polygon"),s=E("use"),l=E("use"),this.h()},l(e){t=n(e,"polygon",{id:!0,points:!0,transform:!0},1),i(t).forEach(c),s=n(e,"use",{"clip-path":!0,href:!0,stroke:!0,fill:!0},1),i(s).forEach(c),l=n(e,"use",{"clip-path":!0,href:!0,stroke:!0,fill:!0},1),i(l).forEach(c),this.h()},h(){m(t,"id","triangle"+e[15]),m(t,"points",r="0,1 "+e[13]+","+e[13]+" 1,0"),m(t,"transform",a="rotate("+e[12]+")"),m(s,"clip-path","url(#clipRectangle)"),m(s,"href","#triangle"+e[15]),m(s,"stroke",e[0]),m(s,"fill",e[0]),m(l,"clip-path","url(#clipRectangle2)"),m(l,"href","#triangle"+e[15]),m(l,"stroke",e[2]),m(l,"fill",e[2])},m(e,r){f(e,t,r),f(e,s,r),f(e,l,r)},p(e,n){128&n&&r!==(r="0,1 "+e[13]+","+e[13]+" 1,0")&&m(t,"points",r),128&n&&a!==(a="rotate("+e[12]+")")&&m(t,"transform",a),1&n&&m(s,"stroke",e[0]),1&n&&m(s,"fill",e[0]),4&n&&m(l,"stroke",e[2]),4&n&&m(l,"fill",e[2])},d(e){e&&c(t),e&&c(s),e&&c(l)}}}function _(e){let t,r,a,s,l,o,h,p,d,v,$=e[7],T=[];for(let n=0;n<$.length;n+=1)T[n]=D(A(e,$,n));return{c(){t=E("svg"),r=E("rect"),a=E("clipPath"),s=E("path"),l=E("clipPath"),o=E("path"),h=E("clipPath"),p=E("path"),d=E("g"),v=E("rect");for(let e=0;e<T.length;e+=1)T[e].c();this.h()},l(e){t=n(e,"svg",{class:!0,viewBox:!0,"stroke-width":!0},1);var m=i(t);r=n(m,"rect",{x:!0,y:!0,width:!0,height:!0,stroke:!0,fill:!0},1),i(r).forEach(c),a=n(m,"clipPath",{id:!0},1);var f=i(a);s=n(f,"path",{"clip-rule":!0,d:!0},1),i(s).forEach(c),f.forEach(c),l=n(m,"clipPath",{id:!0},1);var u=i(l);o=n(u,"path",{"clip-rule":!0,d:!0},1),i(o).forEach(c),u.forEach(c),h=n(m,"clipPath",{id:!0},1);var g=i(h);p=n(g,"path",{"clip-rule":!0,d:!0},1),i(p).forEach(c),g.forEach(c),d=n(m,"g",{transform:!0,stroke:!0,fill:!0},1);var $=i(d);v=n($,"rect",{id:!0,x:!0,y:!0,width:!0,height:!0,stroke:!0,fill:!0},1),i(v).forEach(c);for(let t=0;t<T.length;t+=1)T[t].l($);$.forEach(c),m.forEach(c),this.h()},h(){m(r,"x",-j),m(r,"y",-j),m(r,"width",2*j),m(r,"height",2*j),m(r,"stroke",e[0]),m(r,"fill",e[0]),m(s,"clip-rule","nonzero"),m(s,"d","\n      M-0.5 -0.5 h1 v1 h-1 z\n      M-0.5 0 \n      L 0 0.5 \n      L 0.5 0 \n      L 0 -0.5\n      z\n    "),m(a,"id","clipRectangle"),m(o,"clip-rule","nonzero"),m(o,"d","\n      M-0.5 0 \n      L 0 0.5 \n      L 0.5 0 \n      L 0 -0.5\n      z\n    "),m(l,"id","clipRectangle2"),m(p,"clip-rule","nonzero"),m(p,"d","\n      M-1 -1 h2 v2 h-2 z\n      M-0.5 0 \n      L 0 0.5 \n      L 0.5 0 \n      L 0 -0.5\n      z\n    "),m(h,"id","clipRectangleOuter"),m(v,"id","innerRect"),m(v,"x","-0.5"),m(v,"y","-0.5"),m(v,"width","1"),m(v,"height","1"),m(v,"stroke",e[2]),m(v,"fill",e[2]),m(d,"transform",e[5]),m(d,"stroke",e[1]),m(d,"fill",e[1]),m(t,"class","svg svelte-qg3i8d"),m(t,"viewBox",e[4]),m(t,"stroke-width",j/640)},m(e,n){f(e,t,n),u(t,r),u(t,a),u(a,s),u(t,l),u(l,o),u(t,h),u(h,p),u(t,d),u(d,v);for(let t=0;t<T.length;t+=1)T[t].m(d,null)},p(e,[a]){if(1&a&&m(r,"stroke",e[0]),1&a&&m(r,"fill",e[0]),4&a&&m(v,"stroke",e[2]),4&a&&m(v,"fill",e[2]),133&a){let t;for($=e[7],t=0;t<$.length;t+=1){const r=A(e,$,t);T[t]?T[t].p(r,a):(T[t]=D(r),T[t].c(),T[t].m(d,null))}for(;t<T.length;t+=1)T[t].d(1);T.length=$.length}32&a&&m(d,"transform",e[5]),2&a&&m(d,"stroke",e[1]),2&a&&m(d,"fill",e[1]),16&a&&m(t,"viewBox",e[4])},i:g,o:g,d(e){e&&c(t),x(T,e)}}}let j=3;function V(e,t,r){let a,s,l,n,i,o,c,h=g,m=g;e.$$.on_destroy.push((()=>h())),e.$$.on_destroy.push((()=>m()));let{frameTime:f}=t,{bgColor:u="#da076f"}=t,{fgColor:p="white"}=t,{innerRectColor:d=p}=t;const v=[{values:[1,1,1,1],time:0}];e.$$set=e=>{"frameTime"in e&&r(8,f=e.frameTime),"bgColor"in e&&r(0,u=e.bgColor),"fgColor"in e&&r(1,p=e.fgColor),"innerRectColor"in e&&r(2,d=e.innerRectColor)},e.$$.update=()=>{256&e.$$.dirty&&(r(3,a=q([{time:0,scale:1,rotate:0},{time:100,scale:Math.sqrt(2),rotate:45}],f)),h(),h=$(a,(e=>r(9,o=e)))),512&e.$$.dirty&&r(5,l=`rotate(${o.rotate}) scale(${o.scale})`),256&e.$$.dirty&&(r(6,n=q(v,f)),m(),m=$(n,(e=>r(10,c=e)))),1024&e.$$.dirty&&r(7,i=[0,90,180,270].map(((e,t)=>({deg:e,h:c.values[t]}))))},r(4,s=`${-j/2},${-j/2},${j},${j}`);{const e=25,t=75;v.push({values:[1,1,1,1],time:e});let r=[1,1,1,1];for(let a=0;a<4;a++){r[a]=0;const s=w([0,4],[e,t])(a+1);v.push({values:[...r],time:s})}v.push({values:[0,0,0,0],time:t}),v.push({values:[0,0,0,0],time:100})}return[u,p,d,a,s,l,n,i,f,o,c]}class G extends e{constructor(e){super(),t(this,e,V,_,r,{frameTime:8,bgColor:0,fgColor:1,innerRectColor:2})}}function H(e){let t,r;return t=new G({props:{frameTime:e[0]}}),{c(){b(t.$$.fragment)},l(e){C(t.$$.fragment,e)},m(e,a){B(t,e,a),r=!0},p(e,r){const a={};1&r&&(a.frameTime=e[0]),t.$set(a)},i(e){r||(F(t.$$.fragment,e),r=!0)},o(e){R(t.$$.fragment,e),r=!1},d(e){L(t,e)}}}function S(e){let t,r,s,o,p;function d(t){e[1](t)}let g={maxFrameTime:100};void 0!==e[0]&&(g.frameTime=e[0]),r=new I({props:g}),y.push((()=>z(r,"frameTime",d)));let v=e[0]&&H(e);return{c(){t=a("main"),b(r.$$.fragment),o=l(),v&&v.c(),this.h()},l(e){t=n(e,"MAIN",{class:!0});var a=i(t);C(r.$$.fragment,a),o=h(a),v&&v.l(a),a.forEach(c),this.h()},h(){m(t,"class","svelte-12a1874")},m(e,a){f(e,t,a),B(r,t,null),u(t,o),v&&v.m(t,null),p=!0},p(e,[a]){const l={};!s&&1&a&&(s=!0,l.frameTime=e[0],M((()=>s=!1))),r.$set(l),e[0]?v?(v.p(e,a),1&a&&F(v,1)):(v=H(e),v.c(),F(v,1),v.m(t,null)):v&&(P(),R(v,1,1,(()=>{v=null})),N())},i(e){p||(F(r.$$.fragment,e),F(v),p=!0)},o(e){R(r.$$.fragment,e),R(v),p=!1},d(e){e&&c(t),L(r),v&&v.d()}}}function J(e,t,r){let a;return[a,function(e){a=e,r(0,a)}]}new class extends e{constructor(e){super(),t(this,e,J,S,r,{})}}({target:document.getElementById("app")});
