/*! For license information please see 440.bf8a9f2a.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkbiorhythm_calculator=self.webpackChunkbiorhythm_calculator||[]).push([[440],{7440:(e,t,i)=>{i.r(t),i.d(t,{KEYBOARD_DID_CLOSE:()=>s,KEYBOARD_DID_OPEN:()=>o,copyVisualViewport:()=>D,keyboardDidClose:()=>u,keyboardDidOpen:()=>l,keyboardDidResize:()=>g,resetKeyboardAssist:()=>h,setKeyboardClose:()=>b,setKeyboardOpen:()=>c,startKeyboardAssist:()=>n,trackViewportChanges:()=>f});const o="ionKeyboardDidShow",s="ionKeyboardDidHide";let a={},r={},d=!1;const h=()=>{a={},r={},d=!1},n=e=>{p(e),e.visualViewport&&(r=D(e.visualViewport),e.visualViewport.onresize=()=>{f(e),l()||g(e)?c(e):u(e)&&b(e)})},p=e=>{e.addEventListener("keyboardDidShow",(t=>c(e,t))),e.addEventListener("keyboardDidHide",(()=>b(e)))},c=(e,t)=>{w(e,t),d=!0},b=e=>{y(e),d=!1},l=()=>{const e=(a.height-r.height)*r.scale;return!d&&a.width===r.width&&e>150},g=e=>d&&!u(e),u=e=>d&&r.height===e.innerHeight,w=(e,t)=>{const i=t?t.keyboardHeight:e.innerHeight-r.height,s=new CustomEvent(o,{detail:{keyboardHeight:i}});e.dispatchEvent(s)},y=e=>{const t=new CustomEvent(s);e.dispatchEvent(t)},f=e=>{a=Object.assign({},r),r=D(e.visualViewport)},D=e=>({width:Math.round(e.width),height:Math.round(e.height),offsetTop:e.offsetTop,offsetLeft:e.offsetLeft,pageTop:e.pageTop,pageLeft:e.pageLeft,scale:e.scale})}}]);
//# sourceMappingURL=440.bf8a9f2a.chunk.js.map