import{s as o,j as e,r as s}from"./vendor-1714f5a3.js";import{E as n}from"./index-a5eecfde.js";import{P as i}from"./page-link-1120fecf.js";const l=o.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 5px;
`,u=({pages:t})=>t?Object.keys(t).length?e.jsx(l,{children:Object.values(t).map(r=>(r==null?void 0:r.show)!==!1&&s.createElement(i,{...r,orientation:"horizontal",shadow:!1,key:r.id}))}):e.jsx(n,{text:"Ничего не было найдено"}):null;export{u as F};
