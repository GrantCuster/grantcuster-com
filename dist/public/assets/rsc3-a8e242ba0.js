var p={exports:{}},i={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var g;function x(){if(g)return i;g=1;var e=Symbol.for("react.transitional.element"),a=Symbol.for("react.fragment");function l(u,r,t){var n=null;if(t!==void 0&&(n=""+t),r.key!==void 0&&(n=""+r.key),"key"in r){t={};for(var o in r)o!=="key"&&(t[o]=r[o])}else t=r;return r=t.ref,{$$typeof:e,type:u,key:n,ref:r!==void 0?r:null,props:t}}return i.Fragment=a,i.jsx=l,i.jsxs=l,i}var m;function d(){return m||(m=1,p.exports=x()),p.exports}var s=d();function c(){const e=[["/images/portraits/collapse.png","collapse"],["/images/portraits/collapse2.png","collapse"],["/images/portraits/grain.jpg","grain"],["/images/portraits/image-paint.jpg","image paint"],["/images/portraits/image-paint2.jpg","image paint"],["/images/portraits/flow.png","flow"],["/images/portraits/mask1.jpg","mask"],["/images/portraits/res.jpg","res"],["/images/portraits/ghost-1.png","ghost"],["/images/portraits/ghost-2.png","ghost"],["/images/portraits/ghost-3.png","ghost"]],a=Math.floor(Math.random()*e.length);return s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"w-1/2 md:w-2/3",children:s.jsx("img",{src:e[a][0]})}),s.jsx("div",{className:"",children:s.jsxs("div",{className:"mt-[0.75lh]",children:["Portrait made with"," ",s.jsx("a",{href:`https://${e[a][1]}.constraint.systems`,className:"underline aqua",target:"_blank",children:e[a][1]})]})})]})}export{c as Portrait};
