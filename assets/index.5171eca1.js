var g=Object.getOwnPropertySymbols;var b=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable;var h=(r,t)=>{var o={};for(var a in r)b.call(r,a)&&t.indexOf(a)<0&&(o[a]=r[a]);if(r!=null&&g)for(var a of g(r))t.indexOf(a)<0&&F.call(r,a)&&(o[a]=r[a]);return o};import{c as S,R as m,j as e,r as l,F as P,M as w,L as A,N as y,a as s,b as C,d as L,e as B,A as H,s as i,B as f,f as M,g as D,C as R,T,I as k,h as I,i as d,D as O,H as E,k as j,l as z,m as p,n as W}from"./vendor.8544db15.js";const _=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const c of n)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function o(n){const c={};return n.integrity&&(c.integrity=n.integrity),n.referrerpolicy&&(c.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?c.credentials="include":n.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(n){if(n.ep)return;n.ep=!0;const c=o(n);fetch(n.href,c)}};_();const x=S({typography:{},palette:{primary:{main:"#00AECC"},secondary:{main:"#edf2ff"},text:{}}}),v={display:!1,content:""},G=m.createContext(v);function q(r){return e(G.Provider,{value:v,children:r.children})}const N=m.createContext(void 0);function K(r){const[t,o]=l.exports.useState();return e(N.Provider,{value:{sideBar:t,setSideBar:o},children:r.children})}const J=[q,K];function Q(r){return e(P,{children:J.reduceRight((t,o)=>e(o,{children:t}),r.children)})}function U(){const[r,t]=l.exports.useState(x.palette.primary.main);return e("div",{className:"wrapper",children:e(w,{children:e("meta",{name:"theme-color",content:r})})})}const V=[{name:"Home",url:"/"},{name:"About",url:"/about"}];function X(){return e(A,{children:V.map((r,t)=>e(y,{to:r.url,children:s(C,{button:!0,children:[e(L,{primary:r.name}),e(B,{children:e(H,{})})]},r.name)},r.name))})}const Y=i(X)`
  
`;function Z({className:r}){return e(f,{className:r,sx:{flexGrow:1,display:{xs:"none",md:"flex"}},children:[{name:"Home",url:"/"},{name:"About",url:"/about"}].map(o=>e(y,{to:o.url,children:e(M,{sx:{my:2,color:"black"},children:o.name})},o.name))})}const $=i(Z)`
  
`,ee=o=>{var a=o,{className:r}=a,t=h(a,["className"]);return e(D,{position:"static",className:r,children:e(R,{maxWidth:"xl",children:s(T,{disableGutters:!0,children:[e(f,{sx:{display:{xs:"flex",md:"none"}},children:e(k,{size:"large","aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:()=>{t.toggleDrawer("left",!0,Y)},color:"inherit",children:e(I,{})})}),e(d,{variant:"h6",noWrap:!0,component:"div",sx:{mr:2,display:"flex"},children:"React Starter Template"}),e($,{className:"nav-bar"})]})})})},re=i(ee)`
  background-color: #2D4260;
  color: #F4F5F7;

  button{
    color: #F4F5F7;
  }

  .MuiBox-root{
    justify-content: flex-end;
  }
`;function te(r){return e("div",{className:"pageLayout",children:r.children})}const ne=i(te)`
  height: 100%;
`;function ae(o){var a=o,{className:r}=a,t=h(a,["className"]);const[n,c]=l.exports.useState<n>{permanent:"temporary",open:!0,anchor:"left"};return e(O,{className:r,anchor:n.anchor,open:n.open,variant:n.permanent,onClose:()=>{t.toggleDrawer(n.anchor,!1)},children:e(f,{className:"drawer-layout",sx:{width:n.anchor==="top"||n.anchor==="bottom"?"auto":250},role:"presentation",onClick:()=>{t.toggleDrawer(n.anchor,!1)},children:t.children})})}const oe=i(ae)`
  color: #F4F5F7;
  
  .MuiDrawer-paper {
    background: #0092AB; 
    color: #F4F5F7;
  }

  svg{
    color: #F4F5F7;
  }

  a{
    color: #F4F5F7;
    text-decoration: none;
  }
`;function ce({className:r}){return e("div",{className:r,children:e(d,{variant:"h2",className:"page-h2",children:"Home Page"})})}const ie=i(ce)`

`;function se({className:r}){return e("div",{className:r,children:e(d,{variant:"h2",className:"page-h2",children:"About Page"})})}const le=i(se)`

`;function de({className:r}){return s("div",{id:"NO_MATCH_WRAPPER",className:r,children:[e(d,{variant:"h2",className:"page-h2",children:"404"}),e(d,{variant:"h3",className:"page-h3",children:"Nothing Here"})]})}const ue=i(de)`

`;function he({className:r}){const t=l.exports.useContext(N);l.exports.useEffect(()=>{},[]);const o=(a,n,c)=>{t.setSideBar()};return e("div",{className:r,children:e(Q,{children:s(E,{children:[e(U,{}),s(j,{theme:x,children:[e(re,{className:"header",toggleDrawer:o}),(t==null?void 0:t.display)&&(t==null?void 0:t.sideBarChildren)&&e(oe,{className:"side-bar",toggleDrawer:o,anchor:t==null?void 0:t.anchor,children:t==null?void 0:t.sideBarChildren}),e(ne,{children:s(z,{children:[e(p,{path:"/",element:e(ie,{className:"page"})}),e(p,{path:"/about",element:e(le,{className:"page"})}),e(p,{path:"*",element:e(ue,{className:"page"})})]})})]})]})})})}const pe=i(he)`
  height: 100vh;
  background-color: #00AECC;
  color: #F4F5F7;

  .page-h2{
    margin: 80px 0px 0px 35px;
    font-size: 40px;
    font-weight: 300;
  }

  .page-h3{
    margin: 15px 0px 0px 35px;
    font-size: 35px;
    font-weight: 300;
  }


  a {
    text-decoration: none;
  }
`;W.render(e(m.StrictMode,{children:e(pe,{className:"app"})}),document.getElementById("root"));
