import{s,j as n,a7 as x,aM as g}from"./vendor-0c76c893.js";import{ac as r,ad as d,ae as h}from"./index-1840b39c.js";import{P as f,a as p}from"./page-link-content-a074f185.js";const j=s(f)`
    box-shadow: none;
    color: var(--blue);
    background: transparent;
`,P=()=>n.jsx(x,{to:r,onClick:()=>{d.changeOpen({isOpen:!1,currentPage:r.slice(1,r.length)})},children:n.jsx(j,{padding:"0",width:"125px",height:"135px",isVertical:!0,justifyContent:"center",color:"blue",hasNotifications:!1,children:n.jsxs("div",{className:"outside",children:[n.jsx(h,{color:"blue",children:n.jsx(g,{})}),n.jsx("b",{children:"Все разделы"})]})})}),$=s(x)`
    width: ${({width:e})=>typeof e=="number"?`calc(125px * ${e} + ${(e-1)*10}px)`:e};

    @media (max-width: 500px) {
        max-width: ${({width:e})=>typeof e=="number"?`calc(32vw * ${e} - 16px)`:e};
        min-width: ${({width:e})=>typeof e=="number"?`calc(32vw * ${e} - 16px)`:e};
        width: ${({width:e})=>typeof e=="number"?`calc(32vw * ${e} - 16px)`:e};
    }
`,b=s.div`
    width: ${({width:e})=>typeof e=="number"?`calc(125px * ${e} + ${(e-1)*10}px)`:e};
`,y=e=>{const{title:m,shortTitle:u,path:a,orientation:c="vertical",restricted:i=!1,mode:t="use"}=e,o=i?20:50,l=(u??m).length>23&&!i?2:1;return t==="add"?n.jsx(b,{width:c==="vertical"?l:"100%",children:n.jsx(p,{...e,mode:t,maxWordLength:o})}):n.jsx($,{to:a,onClick:()=>{d.changeOpen({isOpen:!1,currentPage:a.slice(1,a.length)})},width:c==="vertical"?l:"100%",children:n.jsx(p,{...e,maxWordLength:o,mode:t})})};export{P as A,y as P};
