function t(){}const n=t=>t;function e(t,n){for(const e in n)t[e]=n[e];return t}function r(t){return t()}function i(){return Object.create(null)}function o(t){t.forEach(r)}function a(t){return"function"==typeof t}function u(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function s(n,...e){if(null==n)return t;const r=n.subscribe(...e);return r.unsubscribe?()=>r.unsubscribe():r}const c="undefined"!=typeof window;let l=c?()=>window.performance.now():()=>Date.now(),f=c?t=>requestAnimationFrame(t):t;const h=new Set;function d(t){h.forEach((n=>{n.c(t)||(h.delete(n),n.f())})),0!==h.size&&f(d)}let g,p=!1;function m(t,n,e,r){for(;t<n;){const i=t+(n-t>>1);e(i)<=r?t=i+1:n=i}return t}function b(t,n){p?(!function(t){if(t.hydrate_init)return;t.hydrate_init=!0;const n=t.childNodes,e=new Int32Array(n.length+1),r=new Int32Array(n.length);e[0]=-1;let i=0;for(let s=0;s<n.length;s++){const t=m(1,i+1,(t=>n[e[t]].claim_order),n[s].claim_order)-1;r[s]=e[t]+1;const o=t+1;e[o]=s,i=Math.max(o,i)}const o=[],a=[];let u=n.length-1;for(let s=e[i]+1;0!=s;s=r[s-1]){for(o.push(n[s-1]);u>=s;u--)a.push(n[u]);u--}for(;u>=0;u--)a.push(n[u]);o.reverse(),a.sort(((t,n)=>t.claim_order-n.claim_order));for(let s=0,c=0;s<a.length;s++){for(;c<o.length&&a[s].claim_order>=o[c].claim_order;)c++;const n=c<o.length?o[c]:null;t.insertBefore(a[s],n)}}(t),(void 0===t.actual_end_child||null!==t.actual_end_child&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild),n!==t.actual_end_child?t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling):n.parentNode!==t&&t.appendChild(n)}function y(t,n,e){p&&!e?b(t,n):(n.parentNode!==t||e&&n.nextSibling!==e)&&t.insertBefore(n,e||null)}function w(t){t.parentNode.removeChild(t)}function v(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function M(t){return document.createElement(t)}function x(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function N(t){return document.createTextNode(t)}function k(){return N(" ")}function _(t,n,e,r){return t.addEventListener(n,e,r),()=>t.removeEventListener(n,e,r)}function $(t){return function(n){n.target===this&&t.call(this,n)}}function A(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function E(t){return Array.from(t.childNodes)}function j(t,n,e,r,i=!1){void 0===t.claim_info&&(t.claim_info={last_index:0,total_claimed:0});const o=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const o=t[r];if(n(o))return e(o),t.splice(r,1),i||(t.claim_info.last_index=r),o}for(let r=t.claim_info.last_index-1;r>=0;r--){const o=t[r];if(n(o))return e(o),t.splice(r,1),i?t.claim_info.last_index--:t.claim_info.last_index=r,o}return r()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function S(t,n,e,r){return j(t,(t=>t.nodeName===n),(t=>{const n=[];for(let r=0;r<t.attributes.length;r++){const i=t.attributes[r];e[i.name]||n.push(i.name)}n.forEach((n=>t.removeAttribute(n)))}),(()=>r?x(n):M(n)))}function q(t,n){return j(t,(t=>3===t.nodeType),(t=>{t.data=""+n}),(()=>N(n)),!0)}function O(t){return q(t," ")}function z(t){g=t}const R=[],C=[],P=[],D=[],H=Promise.resolve();let L=!1;function F(t){P.push(t)}function I(t){D.push(t)}let T=!1;const B=new Set;function G(){if(!T){T=!0;do{for(let t=0;t<R.length;t+=1){const n=R[t];z(n),V(n.$$)}for(z(null),R.length=0;C.length;)C.pop()();for(let t=0;t<P.length;t+=1){const n=P[t];B.has(n)||(B.add(n),n())}P.length=0}while(R.length);for(;D.length;)D.pop()();L=!1,T=!1,B.clear()}}function V(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(F)}}const X=new Set;let U;function Y(){U={r:0,c:[],p:U}}function Z(){U.r||o(U.c),U=U.p}function J(t,n){t&&t.i&&(X.delete(t),t.i(n))}function K(t,n,e,r){if(t&&t.o){if(X.has(t))return;X.add(t),U.c.push((()=>{X.delete(t),r&&(e&&t.d(1),r())})),t.o(n)}}function Q(t,n,e){const r=t.$$.props[n];void 0!==r&&(t.$$.bound[r]=e,e(t.$$.ctx[r]))}function W(t){t&&t.c()}function tt(t,n){t&&t.l(n)}function nt(t,n,e,i){const{fragment:u,on_mount:s,on_destroy:c,after_update:l}=t.$$;u&&u.m(n,e),i||F((()=>{const n=s.map(r).filter(a);c?c.push(...n):o(n),t.$$.on_mount=[]})),l.forEach(F)}function et(t,n){const e=t.$$;null!==e.fragment&&(o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function rt(t,n){-1===t.$$.dirty[0]&&(R.push(t),L||(L=!0,H.then(G)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function it(n,e,r,a,u,s,c=[-1]){const l=g;z(n);const f=n.$$={fragment:null,ctx:null,props:s,update:t,not_equal:u,bound:i(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(l?l.$$.context:e.context||[]),callbacks:i(),dirty:c,skip_bound:!1};let h=!1;if(f.ctx=r?r(n,e.props||{},((t,e,...r)=>{const i=r.length?r[0]:e;return f.ctx&&u(f.ctx[t],f.ctx[t]=i)&&(!f.skip_bound&&f.bound[t]&&f.bound[t](i),h&&rt(n,t)),e})):[],f.update(),h=!0,o(f.before_update),f.fragment=!!a&&a(f.ctx),e.target){if(e.hydrate){p=!0;const t=E(e.target);f.fragment&&f.fragment.l(t),t.forEach(w)}else f.fragment&&f.fragment.c();e.intro&&J(n.$$.fragment),nt(n,e.target,e.anchor,e.customElement),p=!1,G()}z(l)}class ot{$destroy(){et(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const at=[];function ut(n,e=t){let r;const i=[];function o(t){if(u(n,t)&&(n=t,r)){const t=!at.length;for(let e=0;e<i.length;e+=1){const t=i[e];t[1](),at.push(t,n)}if(t){for(let t=0;t<at.length;t+=2)at[t][0](at[t+1]);at.length=0}}}return{set:o,update:function(t){o(t(n))},subscribe:function(a,u=t){const s=[a,u];return i.push(s),1===i.length&&(r=e(o)||t),a(n),()=>{const t=i.indexOf(s);-1!==t&&i.splice(t,1),0===i.length&&(r(),r=null)}}}}function st(n,e,r){const i=!Array.isArray(n),u=i?[n]:n,c=e.length<2;return{subscribe:ut(r,(n=>{let r=!1;const l=[];let f=0,h=t;const d=()=>{if(f)return;h();const r=e(i?l[0]:l,n);c?n(r):h=a(r)?r:t},g=u.map(((t,n)=>s(t,(t=>{l[n]=t,f&=~(1<<n),r&&d()}),(()=>{f|=1<<n}))));return r=!0,d(),function(){o(g),h()}})).subscribe}}function ct(t){return"[object Date]"===Object.prototype.toString.call(t)}function lt(t,n){if(t===n||t!=t)return()=>t;const e=typeof t;if(e!==typeof n||Array.isArray(t)!==Array.isArray(n))throw new Error("Cannot interpolate values of different type");if(Array.isArray(t)){const e=n.map(((n,e)=>lt(t[e],n)));return t=>e.map((n=>n(t)))}if("object"===e){if(!t||!n)throw new Error("Object cannot be null");if(ct(t)&&ct(n)){t=t.getTime();const e=(n=n.getTime())-t;return n=>new Date(t+n*e)}const e=Object.keys(n),r={};return e.forEach((e=>{r[e]=lt(t[e],n[e])})),t=>{const n={};return e.forEach((e=>{n[e]=r[e](t)})),n}}if("number"===e){const e=n-t;return n=>t+n*e}throw new Error(`Cannot interpolate ${e} values`)}function ft(t,r={}){const i=ut(t);let o,a=t;function u(u,s){if(null==t)return i.set(t=u),Promise.resolve();a=u;let c=o,g=!1,{delay:p=0,duration:m=400,easing:b=n,interpolate:y=lt}=e(e({},r),s);if(0===m)return c&&(c.abort(),c=null),i.set(t=a),Promise.resolve();const w=l()+p;let v;return o=function(t){let n;return 0===h.size&&f(d),{promise:new Promise((e=>{h.add(n={c:t,f:e})})),abort(){h.delete(n)}}}((n=>{if(n<w)return!0;g||(v=y(t,u),"function"==typeof m&&(m=m(t,u)),g=!0),c&&(c.abort(),c=null);const e=n-w;return e>m?(i.set(t=u),!1):(i.set(t=v(b(e/m))),!0)})),o.promise}return{set:u,update:(n,e)=>u(n(a,t),e),subscribe:i.subscribe}}function ht(t,n){return null==t||null==n?NaN:t<n?-1:t>n?1:t>=n?0:NaN}function dt(t){let n=t,e=t;function r(t,n,r,i){for(null==r&&(r=0),null==i&&(i=t.length);r<i;){const o=r+i>>>1;e(t[o],n)<0?r=o+1:i=o}return r}return 1===t.length&&(n=(n,e)=>t(n)-e,e=function(t){return(n,e)=>ht(t(n),e)}(t)),{left:r,center:function(t,e,i,o){null==i&&(i=0),null==o&&(o=t.length);const a=r(t,e,i,o-1);return a>i&&n(t[a-1],e)>-n(t[a],e)?a-1:a},right:function(t,n,r,i){for(null==r&&(r=0),null==i&&(i=t.length);r<i;){const o=r+i>>>1;e(t[o],n)>0?i=o:r=o+1}return r}}}const gt=dt(ht).right;dt((function(t){return null===t?NaN:+t})).center;var pt=Math.sqrt(50),mt=Math.sqrt(10),bt=Math.sqrt(2);function yt(t,n,e){var r=(n-t)/Math.max(0,e),i=Math.floor(Math.log(r)/Math.LN10),o=r/Math.pow(10,i);return i>=0?(o>=pt?10:o>=mt?5:o>=bt?2:1)*Math.pow(10,i):-Math.pow(10,-i)/(o>=pt?10:o>=mt?5:o>=bt?2:1)}function wt(t,n){switch(arguments.length){case 0:break;case 1:this.range(t);break;default:this.range(n).domain(t)}return this}function vt(t,n,e){t.prototype=n.prototype=e,e.constructor=t}function Mt(t,n){var e=Object.create(t.prototype);for(var r in n)e[r]=n[r];return e}function xt(){}var Nt=1/.7,kt="\\s*([+-]?\\d+)\\s*",_t="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",$t="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",At=/^#([0-9a-f]{3,8})$/,Et=new RegExp("^rgb\\("+[kt,kt,kt]+"\\)$"),jt=new RegExp("^rgb\\("+[$t,$t,$t]+"\\)$"),St=new RegExp("^rgba\\("+[kt,kt,kt,_t]+"\\)$"),qt=new RegExp("^rgba\\("+[$t,$t,$t,_t]+"\\)$"),Ot=new RegExp("^hsl\\("+[_t,$t,$t]+"\\)$"),zt=new RegExp("^hsla\\("+[_t,$t,$t,_t]+"\\)$"),Rt={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};function Ct(){return this.rgb().formatHex()}function Pt(){return this.rgb().formatRgb()}function Dt(t){var n,e;return t=(t+"").trim().toLowerCase(),(n=At.exec(t))?(e=n[1].length,n=parseInt(n[1],16),6===e?Ht(n):3===e?new Tt(n>>8&15|n>>4&240,n>>4&15|240&n,(15&n)<<4|15&n,1):8===e?Lt(n>>24&255,n>>16&255,n>>8&255,(255&n)/255):4===e?Lt(n>>12&15|n>>8&240,n>>8&15|n>>4&240,n>>4&15|240&n,((15&n)<<4|15&n)/255):null):(n=Et.exec(t))?new Tt(n[1],n[2],n[3],1):(n=jt.exec(t))?new Tt(255*n[1]/100,255*n[2]/100,255*n[3]/100,1):(n=St.exec(t))?Lt(n[1],n[2],n[3],n[4]):(n=qt.exec(t))?Lt(255*n[1]/100,255*n[2]/100,255*n[3]/100,n[4]):(n=Ot.exec(t))?Xt(n[1],n[2]/100,n[3]/100,1):(n=zt.exec(t))?Xt(n[1],n[2]/100,n[3]/100,n[4]):Rt.hasOwnProperty(t)?Ht(Rt[t]):"transparent"===t?new Tt(NaN,NaN,NaN,0):null}function Ht(t){return new Tt(t>>16&255,t>>8&255,255&t,1)}function Lt(t,n,e,r){return r<=0&&(t=n=e=NaN),new Tt(t,n,e,r)}function Ft(t){return t instanceof xt||(t=Dt(t)),t?new Tt((t=t.rgb()).r,t.g,t.b,t.opacity):new Tt}function It(t,n,e,r){return 1===arguments.length?Ft(t):new Tt(t,n,e,null==r?1:r)}function Tt(t,n,e,r){this.r=+t,this.g=+n,this.b=+e,this.opacity=+r}function Bt(){return"#"+Vt(this.r)+Vt(this.g)+Vt(this.b)}function Gt(){var t=this.opacity;return(1===(t=isNaN(t)?1:Math.max(0,Math.min(1,t)))?"rgb(":"rgba(")+Math.max(0,Math.min(255,Math.round(this.r)||0))+", "+Math.max(0,Math.min(255,Math.round(this.g)||0))+", "+Math.max(0,Math.min(255,Math.round(this.b)||0))+(1===t?")":", "+t+")")}function Vt(t){return((t=Math.max(0,Math.min(255,Math.round(t)||0)))<16?"0":"")+t.toString(16)}function Xt(t,n,e,r){return r<=0?t=n=e=NaN:e<=0||e>=1?t=n=NaN:n<=0&&(t=NaN),new Yt(t,n,e,r)}function Ut(t){if(t instanceof Yt)return new Yt(t.h,t.s,t.l,t.opacity);if(t instanceof xt||(t=Dt(t)),!t)return new Yt;if(t instanceof Yt)return t;var n=(t=t.rgb()).r/255,e=t.g/255,r=t.b/255,i=Math.min(n,e,r),o=Math.max(n,e,r),a=NaN,u=o-i,s=(o+i)/2;return u?(a=n===o?(e-r)/u+6*(e<r):e===o?(r-n)/u+2:(n-e)/u+4,u/=s<.5?o+i:2-o-i,a*=60):u=s>0&&s<1?0:a,new Yt(a,u,s,t.opacity)}function Yt(t,n,e,r){this.h=+t,this.s=+n,this.l=+e,this.opacity=+r}function Zt(t,n,e){return 255*(t<60?n+(e-n)*t/60:t<180?e:t<240?n+(e-n)*(240-t)/60:n)}vt(xt,Dt,{copy:function(t){return Object.assign(new this.constructor,this,t)},displayable:function(){return this.rgb().displayable()},hex:Ct,formatHex:Ct,formatHsl:function(){return Ut(this).formatHsl()},formatRgb:Pt,toString:Pt}),vt(Tt,It,Mt(xt,{brighter:function(t){return t=null==t?Nt:Math.pow(Nt,t),new Tt(this.r*t,this.g*t,this.b*t,this.opacity)},darker:function(t){return t=null==t?.7:Math.pow(.7,t),new Tt(this.r*t,this.g*t,this.b*t,this.opacity)},rgb:function(){return this},displayable:function(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:Bt,formatHex:Bt,formatRgb:Gt,toString:Gt})),vt(Yt,(function(t,n,e,r){return 1===arguments.length?Ut(t):new Yt(t,n,e,null==r?1:r)}),Mt(xt,{brighter:function(t){return t=null==t?Nt:Math.pow(Nt,t),new Yt(this.h,this.s,this.l*t,this.opacity)},darker:function(t){return t=null==t?.7:Math.pow(.7,t),new Yt(this.h,this.s,this.l*t,this.opacity)},rgb:function(){var t=this.h%360+360*(this.h<0),n=isNaN(t)||isNaN(this.s)?0:this.s,e=this.l,r=e+(e<.5?e:1-e)*n,i=2*e-r;return new Tt(Zt(t>=240?t-240:t+120,i,r),Zt(t,i,r),Zt(t<120?t+240:t-120,i,r),this.opacity)},displayable:function(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl:function(){var t=this.opacity;return(1===(t=isNaN(t)?1:Math.max(0,Math.min(1,t)))?"hsl(":"hsla(")+(this.h||0)+", "+100*(this.s||0)+"%, "+100*(this.l||0)+"%"+(1===t?")":", "+t+")")}}));var Jt=t=>()=>t;function Kt(t){return 1==(t=+t)?Qt:function(n,e){return e-n?function(t,n,e){return t=Math.pow(t,e),n=Math.pow(n,e)-t,e=1/e,function(r){return Math.pow(t+r*n,e)}}(n,e,t):Jt(isNaN(n)?e:n)}}function Qt(t,n){var e=n-t;return e?function(t,n){return function(e){return t+e*n}}(t,e):Jt(isNaN(t)?n:t)}var Wt=function t(n){var e=Kt(n);function r(t,n){var r=e((t=It(t)).r,(n=It(n)).r),i=e(t.g,n.g),o=e(t.b,n.b),a=Qt(t.opacity,n.opacity);return function(n){return t.r=r(n),t.g=i(n),t.b=o(n),t.opacity=a(n),t+""}}return r.gamma=t,r}(1);function tn(t,n){n||(n=[]);var e,r=t?Math.min(n.length,t.length):0,i=n.slice();return function(o){for(e=0;e<r;++e)i[e]=t[e]*(1-o)+n[e]*o;return i}}function nn(t,n){var e,r=n?n.length:0,i=t?Math.min(r,t.length):0,o=new Array(i),a=new Array(r);for(e=0;e<i;++e)o[e]=cn(t[e],n[e]);for(;e<r;++e)a[e]=n[e];return function(t){for(e=0;e<i;++e)a[e]=o[e](t);return a}}function en(t,n){var e=new Date;return t=+t,n=+n,function(r){return e.setTime(t*(1-r)+n*r),e}}function rn(t,n){return t=+t,n=+n,function(e){return t*(1-e)+n*e}}function on(t,n){var e,r={},i={};for(e in null!==t&&"object"==typeof t||(t={}),null!==n&&"object"==typeof n||(n={}),n)e in t?r[e]=cn(t[e],n[e]):i[e]=n[e];return function(t){for(e in r)i[e]=r[e](t);return i}}var an=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,un=new RegExp(an.source,"g");function sn(t,n){var e,r,i,o=an.lastIndex=un.lastIndex=0,a=-1,u=[],s=[];for(t+="",n+="";(e=an.exec(t))&&(r=un.exec(n));)(i=r.index)>o&&(i=n.slice(o,i),u[a]?u[a]+=i:u[++a]=i),(e=e[0])===(r=r[0])?u[a]?u[a]+=r:u[++a]=r:(u[++a]=null,s.push({i:a,x:rn(e,r)})),o=un.lastIndex;return o<n.length&&(i=n.slice(o),u[a]?u[a]+=i:u[++a]=i),u.length<2?s[0]?function(t){return function(n){return t(n)+""}}(s[0].x):function(t){return function(){return t}}(n):(n=s.length,function(t){for(var e,r=0;r<n;++r)u[(e=s[r]).i]=e.x(t);return u.join("")})}function cn(t,n){var e,r,i=typeof n;return null==n||"boolean"===i?Jt(n):("number"===i?rn:"string"===i?(e=Dt(n))?(n=e,Wt):sn:n instanceof Dt?Wt:n instanceof Date?en:(r=n,!ArrayBuffer.isView(r)||r instanceof DataView?Array.isArray(n)?nn:"function"!=typeof n.valueOf&&"function"!=typeof n.toString||isNaN(n)?on:rn:tn))(t,n)}function ln(t,n){return t=+t,n=+n,function(e){return Math.round(t*(1-e)+n*e)}}function fn(t){return+t}var hn=[0,1];function dn(t){return t}function gn(t,n){return(n-=t=+t)?function(e){return(e-t)/n}:(e=isNaN(n)?NaN:.5,function(){return e});var e}function pn(t,n,e){var r=t[0],i=t[1],o=n[0],a=n[1];return i<r?(r=gn(i,r),o=e(a,o)):(r=gn(r,i),o=e(o,a)),function(t){return o(r(t))}}function mn(t,n,e){var r=Math.min(t.length,n.length)-1,i=new Array(r),o=new Array(r),a=-1;for(t[r]<t[0]&&(t=t.slice().reverse(),n=n.slice().reverse());++a<r;)i[a]=gn(t[a],t[a+1]),o[a]=e(n[a],n[a+1]);return function(n){var e=gt(t,n,1,r)-1;return o[e](i[e](n))}}function bn(t,n){return n.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown())}function yn(){var t,n,e,r,i,o,a=hn,u=hn,s=cn,c=dn;function l(){var t,n,e,s=Math.min(a.length,u.length);return c!==dn&&(t=a[0],n=a[s-1],t>n&&(e=t,t=n,n=e),c=function(e){return Math.max(t,Math.min(n,e))}),r=s>2?mn:pn,i=o=null,f}function f(n){return null==n||isNaN(n=+n)?e:(i||(i=r(a.map(t),u,s)))(t(c(n)))}return f.invert=function(e){return c(n((o||(o=r(u,a.map(t),rn)))(e)))},f.domain=function(t){return arguments.length?(a=Array.from(t,fn),l()):a.slice()},f.range=function(t){return arguments.length?(u=Array.from(t),l()):u.slice()},f.rangeRound=function(t){return u=Array.from(t),s=ln,l()},f.clamp=function(t){return arguments.length?(c=!!t||dn,l()):c!==dn},f.interpolate=function(t){return arguments.length?(s=t,l()):s},f.unknown=function(t){return arguments.length?(e=t,f):e},function(e,r){return t=e,n=r,l()}}function wn(){return yn()(dn,dn)}function vn(t,n){if((e=(t=n?t.toExponential(n-1):t.toExponential()).indexOf("e"))<0)return null;var e,r=t.slice(0,e);return[r.length>1?r[0]+r.slice(2):r,+t.slice(e+1)]}function Mn(t){return(t=vn(Math.abs(t)))?t[1]:NaN}var xn,Nn=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function kn(t){if(!(n=Nn.exec(t)))throw new Error("invalid format: "+t);var n;return new _n({fill:n[1],align:n[2],sign:n[3],symbol:n[4],zero:n[5],width:n[6],comma:n[7],precision:n[8]&&n[8].slice(1),trim:n[9],type:n[10]})}function _n(t){this.fill=void 0===t.fill?" ":t.fill+"",this.align=void 0===t.align?">":t.align+"",this.sign=void 0===t.sign?"-":t.sign+"",this.symbol=void 0===t.symbol?"":t.symbol+"",this.zero=!!t.zero,this.width=void 0===t.width?void 0:+t.width,this.comma=!!t.comma,this.precision=void 0===t.precision?void 0:+t.precision,this.trim=!!t.trim,this.type=void 0===t.type?"":t.type+""}function $n(t,n){var e=vn(t,n);if(!e)return t+"";var r=e[0],i=e[1];return i<0?"0."+new Array(-i).join("0")+r:r.length>i+1?r.slice(0,i+1)+"."+r.slice(i+1):r+new Array(i-r.length+2).join("0")}kn.prototype=_n.prototype,_n.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(void 0===this.width?"":Math.max(1,0|this.width))+(this.comma?",":"")+(void 0===this.precision?"":"."+Math.max(0,0|this.precision))+(this.trim?"~":"")+this.type};var An={"%":(t,n)=>(100*t).toFixed(n),b:t=>Math.round(t).toString(2),c:t=>t+"",d:function(t){return Math.abs(t=Math.round(t))>=1e21?t.toLocaleString("en").replace(/,/g,""):t.toString(10)},e:(t,n)=>t.toExponential(n),f:(t,n)=>t.toFixed(n),g:(t,n)=>t.toPrecision(n),o:t=>Math.round(t).toString(8),p:(t,n)=>$n(100*t,n),r:$n,s:function(t,n){var e=vn(t,n);if(!e)return t+"";var r=e[0],i=e[1],o=i-(xn=3*Math.max(-8,Math.min(8,Math.floor(i/3))))+1,a=r.length;return o===a?r:o>a?r+new Array(o-a+1).join("0"):o>0?r.slice(0,o)+"."+r.slice(o):"0."+new Array(1-o).join("0")+vn(t,Math.max(0,n+o-1))[0]},X:t=>Math.round(t).toString(16).toUpperCase(),x:t=>Math.round(t).toString(16)};function En(t){return t}var jn,Sn,qn,On=Array.prototype.map,zn=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];function Rn(t){var n,e,r=void 0===t.grouping||void 0===t.thousands?En:(n=On.call(t.grouping,Number),e=t.thousands+"",function(t,r){for(var i=t.length,o=[],a=0,u=n[0],s=0;i>0&&u>0&&(s+u+1>r&&(u=Math.max(1,r-s)),o.push(t.substring(i-=u,i+u)),!((s+=u+1)>r));)u=n[a=(a+1)%n.length];return o.reverse().join(e)}),i=void 0===t.currency?"":t.currency[0]+"",o=void 0===t.currency?"":t.currency[1]+"",a=void 0===t.decimal?".":t.decimal+"",u=void 0===t.numerals?En:function(t){return function(n){return n.replace(/[0-9]/g,(function(n){return t[+n]}))}}(On.call(t.numerals,String)),s=void 0===t.percent?"%":t.percent+"",c=void 0===t.minus?"−":t.minus+"",l=void 0===t.nan?"NaN":t.nan+"";function f(t){var n=(t=kn(t)).fill,e=t.align,f=t.sign,h=t.symbol,d=t.zero,g=t.width,p=t.comma,m=t.precision,b=t.trim,y=t.type;"n"===y?(p=!0,y="g"):An[y]||(void 0===m&&(m=12),b=!0,y="g"),(d||"0"===n&&"="===e)&&(d=!0,n="0",e="=");var w="$"===h?i:"#"===h&&/[boxX]/.test(y)?"0"+y.toLowerCase():"",v="$"===h?o:/[%p]/.test(y)?s:"",M=An[y],x=/[defgprs%]/.test(y);function N(t){var i,o,s,h=w,N=v;if("c"===y)N=M(t)+N,t="";else{var k=(t=+t)<0||1/t<0;if(t=isNaN(t)?l:M(Math.abs(t),m),b&&(t=function(t){t:for(var n,e=t.length,r=1,i=-1;r<e;++r)switch(t[r]){case".":i=n=r;break;case"0":0===i&&(i=r),n=r;break;default:if(!+t[r])break t;i>0&&(i=0)}return i>0?t.slice(0,i)+t.slice(n+1):t}(t)),k&&0==+t&&"+"!==f&&(k=!1),h=(k?"("===f?f:c:"-"===f||"("===f?"":f)+h,N=("s"===y?zn[8+xn/3]:"")+N+(k&&"("===f?")":""),x)for(i=-1,o=t.length;++i<o;)if(48>(s=t.charCodeAt(i))||s>57){N=(46===s?a+t.slice(i+1):t.slice(i))+N,t=t.slice(0,i);break}}p&&!d&&(t=r(t,1/0));var _=h.length+t.length+N.length,$=_<g?new Array(g-_+1).join(n):"";switch(p&&d&&(t=r($+t,$.length?g-N.length:1/0),$=""),e){case"<":t=h+t+N+$;break;case"=":t=h+$+t+N;break;case"^":t=$.slice(0,_=$.length>>1)+h+t+N+$.slice(_);break;default:t=$+h+t+N}return u(t)}return m=void 0===m?6:/[gprs]/.test(y)?Math.max(1,Math.min(21,m)):Math.max(0,Math.min(20,m)),N.toString=function(){return t+""},N}return{format:f,formatPrefix:function(t,n){var e=f(((t=kn(t)).type="f",t)),r=3*Math.max(-8,Math.min(8,Math.floor(Mn(n)/3))),i=Math.pow(10,-r),o=zn[8+r/3];return function(t){return e(i*t)+o}}}}function Cn(t,n,e,r){var i,o=function(t,n,e){var r=Math.abs(n-t)/Math.max(0,e),i=Math.pow(10,Math.floor(Math.log(r)/Math.LN10)),o=r/i;return o>=pt?i*=10:o>=mt?i*=5:o>=bt&&(i*=2),n<t?-i:i}(t,n,e);switch((r=kn(null==r?",f":r)).type){case"s":var a=Math.max(Math.abs(t),Math.abs(n));return null!=r.precision||isNaN(i=function(t,n){return Math.max(0,3*Math.max(-8,Math.min(8,Math.floor(Mn(n)/3)))-Mn(Math.abs(t)))}(o,a))||(r.precision=i),qn(r,a);case"":case"e":case"g":case"p":case"r":null!=r.precision||isNaN(i=function(t,n){return t=Math.abs(t),n=Math.abs(n)-t,Math.max(0,Mn(n)-Mn(t))+1}(o,Math.max(Math.abs(t),Math.abs(n))))||(r.precision=i-("e"===r.type));break;case"f":case"%":null!=r.precision||isNaN(i=function(t){return Math.max(0,-Mn(Math.abs(t)))}(o))||(r.precision=i-2*("%"===r.type))}return Sn(r)}function Pn(t){var n=t.domain;return t.ticks=function(t){var e=n();return function(t,n,e){var r,i,o,a,u=-1;if(e=+e,(t=+t)==(n=+n)&&e>0)return[t];if((r=n<t)&&(i=t,t=n,n=i),0===(a=yt(t,n,e))||!isFinite(a))return[];if(a>0){let e=Math.round(t/a),r=Math.round(n/a);for(e*a<t&&++e,r*a>n&&--r,o=new Array(i=r-e+1);++u<i;)o[u]=(e+u)*a}else{a=-a;let e=Math.round(t*a),r=Math.round(n*a);for(e/a<t&&++e,r/a>n&&--r,o=new Array(i=r-e+1);++u<i;)o[u]=(e+u)/a}return r&&o.reverse(),o}(e[0],e[e.length-1],null==t?10:t)},t.tickFormat=function(t,e){var r=n();return Cn(r[0],r[r.length-1],null==t?10:t,e)},t.nice=function(e){null==e&&(e=10);var r,i,o=n(),a=0,u=o.length-1,s=o[a],c=o[u],l=10;for(c<s&&(i=s,s=c,c=i,i=a,a=u,u=i);l-- >0;){if((i=yt(s,c,e))===r)return o[a]=s,o[u]=c,n(o);if(i>0)s=Math.floor(s/i)*i,c=Math.ceil(c/i)*i;else{if(!(i<0))break;s=Math.ceil(s*i)/i,c=Math.floor(c*i)/i}r=i}return t},t}function Dn(){var t=wn();return t.copy=function(){return bn(t,Dn())},wt.apply(t,arguments),Pn(t)}jn=Rn({thousands:",",grouping:[3],currency:["$",""]}),Sn=jn.format,qn=jn.formatPrefix;export{tt as A,nt as B,J as C,K as D,et as E,I as F,Z as G,Y as H,ot as S,k as a,E as b,S as c,q as d,M as e,w as f,O as g,A as h,it as i,y as j,b as k,_ as l,$ as m,t as n,s as o,ft as p,st as q,o as r,u as s,N as t,Dn as u,x as v,v as w,C as x,Q as y,W as z};