const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../nodes/0.BhR1sXul.js","../chunks/disclose-version.DE3B7_8X.js","../chunks/runtime.CfgX6eQG.js","../chunks/snippet.Dt_8T1af.js","../nodes/1.Bv6tJGPI.js","../chunks/legacy.CNaPTmXt.js","../chunks/render.DWIGZODM.js","../chunks/lifecycle.DaBVxrmX.js","../chunks/entry.fR7qm3Gj.js","../chunks/index.CX0t67y6.js","../chunks/index-client.BCAZJJkF.js","../nodes/2.Ch0LZ_ef.js","../chunks/start_page.svelte_svelte_type_style_lang.D-Z4Yd-d.js","../chunks/props.CQel5Sq1.js","../assets/start_page.sWjccVkG.css","../nodes/3.jTXF3OeI.js","../nodes/4.Cw9r_kRv.js"])))=>i.map(i=>d[i]);
var G=r=>{throw TypeError(r)};var J=(r,e,s)=>e.has(r)||G("Cannot "+s);var i=(r,e,s)=>(J(r,e,"read from private field"),s?s.call(r):e.get(r)),C=(r,e,s)=>e.has(r)?G("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(r):e.set(r,s),I=(r,e,s,o)=>(J(r,e,"write to private field"),o?o.call(r,s):e.set(r,s),s);import{g as v,L as M,z as A,I as N,J as Q,K as X,p as Z,u as $,a as ee,M as te,o as O,q as re,N as T,y as se,w as ne,x as ae,v as oe,f as j}from"../chunks/runtime.CfgX6eQG.js";import{a as ie,m as ce,u as ue,s as le}from"../chunks/render.DWIGZODM.js";import{a as R,t as W,c as D,b as de}from"../chunks/disclose-version.DE3B7_8X.js";import{p as V,a as fe,i as p,c as q,b as B}from"../chunks/props.CQel5Sq1.js";import{o as me}from"../chunks/index-client.BCAZJJkF.js";function he(r){return class extends _e{constructor(e){super({component:r,...e})}}}var g,l;class _e{constructor(e){C(this,g);C(this,l);var h;var s=new Map,o=(n,t)=>{var d=X(t);return s.set(n,d),d};const c=new Proxy({...e.props||{},$$events:{}},{get(n,t){return v(s.get(t)??o(t,Reflect.get(n,t)))},has(n,t){return t===M?!0:(v(s.get(t)??o(t,Reflect.get(n,t))),Reflect.has(n,t))},set(n,t,d){return A(s.get(t)??o(t,d),d),Reflect.set(n,t,d)}});I(this,l,(e.hydrate?ie:ce)(e.component,{target:e.target,anchor:e.anchor,props:c,context:e.context,intro:e.intro??!1,recover:e.recover})),(!((h=e==null?void 0:e.props)!=null&&h.$$host)||e.sync===!1)&&N(),I(this,g,c.$$events);for(const n of Object.keys(i(this,l)))n==="$set"||n==="$destroy"||n==="$on"||Q(this,n,{get(){return i(this,l)[n]},set(t){i(this,l)[n]=t},enumerable:!0});i(this,l).$set=n=>{Object.assign(c,n)},i(this,l).$destroy=()=>{ue(i(this,l))}}$set(e){i(this,l).$set(e)}$on(e,s){i(this,g)[e]=i(this,g)[e]||[];const o=(...c)=>s.call(this,...c);return i(this,g)[e].push(o),()=>{i(this,g)[e]=i(this,g)[e].filter(c=>c!==o)}}$destroy(){i(this,l).$destroy()}}g=new WeakMap,l=new WeakMap;const ve="modulepreload",ge=function(r,e){return new URL(r,e).href},K={},k=function(e,s,o){let c=Promise.resolve();if(s&&s.length>0){const n=document.getElementsByTagName("link"),t=document.querySelector("meta[property=csp-nonce]"),d=(t==null?void 0:t.nonce)||(t==null?void 0:t.getAttribute("nonce"));c=Promise.allSettled(s.map(u=>{if(u=ge(u,o),u in K)return;K[u]=!0;const y=u.endsWith(".css"),S=y?'[rel="stylesheet"]':"";if(!!o)for(let E=n.length-1;E>=0;E--){const a=n[E];if(a.href===u&&(!y||a.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${S}`))return;const m=document.createElement("link");if(m.rel=y?"stylesheet":ve,y||(m.as="script"),m.crossOrigin="",m.href=u,d&&m.setAttribute("nonce",d),document.head.appendChild(m),y)return new Promise((E,a)=>{m.addEventListener("load",E),m.addEventListener("error",()=>a(new Error(`Unable to preload CSS for ${u}`)))})}))}function h(n){const t=new Event("vite:preloadError",{cancelable:!0});if(t.payload=n,window.dispatchEvent(t),!t.defaultPrevented)throw n}return c.then(n=>{for(const t of n||[])t.status==="rejected"&&h(t.reason);return e().catch(h)})},Ce={};var ye=W('<div id="svelte-announcer" aria-live="assertive" aria-atomic="true" style="position: absolute; left: 0; top: 0; clip: rect(0 0 0 0); clip-path: inset(50%); overflow: hidden; white-space: nowrap; width: 1px; height: 1px"><!></div>'),Ee=W("<!> <!>",1);function be(r,e){Z(e,!0);let s=V(e,"components",23,()=>[]),o=V(e,"data_0",3,null),c=V(e,"data_1",3,null);$(()=>e.stores.page.set(e.page)),ee(()=>{e.stores,e.page,e.constructors,s(),e.form,o(),c(),e.stores.page.notify()});let h=T(!1),n=T(!1),t=T(null);me(()=>{const a=e.stores.page.subscribe(()=>{v(h)&&(A(n,!0),te().then(()=>{A(t,fe(document.title||"untitled page"))}))});return A(h,!0),a});const d=j(()=>e.constructors[1]);var u=Ee(),y=O(u);{var S=a=>{var _=D();const w=j(()=>e.constructors[0]);var x=O(_);q(x,()=>v(w),(b,P)=>{B(P(b,{get data(){return o()},get form(){return e.form},children:(f,we)=>{var z=D(),Y=O(z);q(Y,()=>v(d),(F,H)=>{B(H(F,{get data(){return c()},get form(){return e.form}}),L=>s()[1]=L,()=>{var L;return(L=s())==null?void 0:L[1]})}),R(f,z)},$$slots:{default:!0}}),f=>s()[0]=f,()=>{var f;return(f=s())==null?void 0:f[0]})}),R(a,_)},U=a=>{var _=D();const w=j(()=>e.constructors[0]);var x=O(_);q(x,()=>v(w),(b,P)=>{B(P(b,{get data(){return o()},get form(){return e.form}}),f=>s()[0]=f,()=>{var f;return(f=s())==null?void 0:f[0]})}),R(a,_)};p(y,a=>{e.constructors[1]?a(S):a(U,!1)})}var m=se(y,2);{var E=a=>{var _=ye(),w=ne(_);{var x=b=>{var P=de();oe(()=>le(P,v(t))),R(b,P)};p(w,b=>{v(n)&&b(x)})}ae(_),R(a,_)};p(m,a=>{v(h)&&a(E)})}R(r,u),re()}const Ie=he(be),Te=[()=>k(()=>import("../nodes/0.BhR1sXul.js"),__vite__mapDeps([0,1,2,3]),import.meta.url),()=>k(()=>import("../nodes/1.Bv6tJGPI.js"),__vite__mapDeps([4,1,2,5,6,7,8,9,10]),import.meta.url),()=>k(()=>import("../nodes/2.Ch0LZ_ef.js"),__vite__mapDeps([11,1,2,5,12,6,13,10,3,9,14]),import.meta.url),()=>k(()=>import("../nodes/3.jTXF3OeI.js"),__vite__mapDeps([15,1,2,5,6,13,7,10,12,3,9,14]),import.meta.url),()=>k(()=>import("../nodes/4.Cw9r_kRv.js"),__vite__mapDeps([16,1,2,5]),import.meta.url)],je=[],De={"/":[2],"/openfusionapi":[3],"/test":[4]},Pe={handleError:({error:r})=>{console.error(r)},reroute:()=>{},transport:{}},Re=Object.fromEntries(Object.entries(Pe.transport).map(([r,e])=>[r,e.decode])),Ve=!1,pe=(r,e)=>Re[r](e);export{pe as decode,Re as decoders,De as dictionary,Ve as hash,Pe as hooks,Ce as matchers,Te as nodes,Ie as root,je as server_loads};