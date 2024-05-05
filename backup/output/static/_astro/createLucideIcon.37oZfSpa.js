import{r as c,$ as p}from"./index.9AF9g4V4.js";import{c as g,a as i}from"./index.l2sfKAMs.js";const h=p.useId||(()=>{});let v=0;function S(e){const[a,o]=c.useState(h());return g(()=>{e||o(t=>t??String(v++))},[e]),e||(a?`radix-${a}`:"")}function A({prop:e,defaultProp:a,onChange:o=()=>{}}){const[t,r]=C({defaultProp:a,onChange:o}),n=e!==void 0,$=n?e:t,f=i(o),u=c.useCallback(s=>{if(n){const l=typeof s=="function"?s(e):s;l!==e&&f(l)}else r(s)},[n,e,r,f]);return[$,u]}function C({defaultProp:e,onChange:a}){const o=c.useState(e),[t]=o,r=c.useRef(t),n=i(a);return c.useEffect(()=>{r.current!==t&&(n(t),r.current=t)},[t,r,n]),o}/**
 * @license lucide-react v0.358.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var m={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.358.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.358.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P=(e,a)=>{const o=c.forwardRef(({color:t="currentColor",size:r=24,strokeWidth:n=2,absoluteStrokeWidth:$,className:f="",children:u,...s},d)=>c.createElement("svg",{ref:d,...m,width:r,height:r,stroke:t,strokeWidth:$?Number(n)*24/Number(r):n,className:["lucide",`lucide-${w(e)}`,f].join(" "),...s},[...a.map(([l,b])=>c.createElement(l,b)),...Array.isArray(u)?u:[u]]));return o.displayName=`${e}`,o};export{A as $,S as a,P as c};
