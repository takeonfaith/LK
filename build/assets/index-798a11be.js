import{s as p,j as e,r as h,ac as f}from"./vendor-0c76c893.js";import{$ as j,m as v,t as w,l as b,u as m,T as x,ai as S,g as C,z as u,ar as y,H as A,v as k,W as z,r as D,E as T}from"./index-8d41848f.js";import{B as I}from"./index-dc78f9a9.js";import{g as $}from"./get-short-string-60b0c4d4.js";const E=async()=>(await j.get(`?getAlerts&token=${v()}`)).data,M=t=>t.reduce((s,n)=>{const r=new Date(n.date).getFullYear();return s[r]?s[r].push(n):s[r]=[n],s},{}),g=w({api:{get:E},prepareData:M}),N=p.div`
    width: 100%;
    padding: 16px;
    border-radius: var(--brLight);
    background: var(--form);
    box-shadow: var(--schedule-shadow);
    cursor: pointer;

    .content {
        font-size: 0.95rem;
        margin-bottom: 10px;
    }
`,F=({alert:t,onClick:s})=>{const{id:n,title:r,content:o,date:l,time:i}=t,a=b(l),d=()=>s(t);return e.jsxs(N,{onClick:d,children:[e.jsxs(m,{fontSize:"0.9rem",children:[a," • ",i]}),e.jsx(x,{size:4,align:"left",bottomGap:!0,children:r}),e.jsx("div",{className:"content",children:e.jsx("div",{dangerouslySetInnerHTML:{__html:$(o,200)}})}),e.jsx(S,{text:"Подробнее",minWidth:"120px"})]})},L=({alert:t})=>e.jsxs(W,{children:[e.jsx(x,{size:3,align:"left",children:t.title}),e.jsx(C,{margin:"8px 0",width:"100%"}),e.jsx("div",{dangerouslySetInnerHTML:{__html:t.content}})]}),W=p.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    max-width: 600px;
`,Y=p.div`
    width: 100%;
    opacity: ${({noChildren:t})=>t?"0.5":"1"};
    .top {
        cursor: pointer;
        display: flex;
        align-items: center;
        margin: 10px 0;
        width: 100%;
        justify-content: space-between;

        .title-wrapper {
            width: 50px;
        }

        .left {
            display: flex;
            align-items: center;
            svg {
                transform: rotate(${({collapsed:t})=>t?"0deg":"180deg"});
            }
        }
    }

    .children {
        transition: 0.2s;

        img {
            max-width: 100%;
            height: unset;
        }
    }

    .children.close {
        opacity: 0;
        visibility: hidden;
        height: 0;
        pointer-events: none;
        transform: translateY(-30px);
    }

    .children.open {
        opacity: 1;
        visibility: visible;
        height: fit-content;
        pointer-events: all;
        transform: translateY(0px);
    }
`,_=({title:t,children:s,initiallyCollapsed:n,sideText:r,isCollapsed:o})=>{const[l,i]=h.useState(n??!0),a=s==null,d=()=>i(c=>!c);return h.useEffect(()=>{o!==void 0&&i(a)},[o,s]),e.jsxs(Y,{collapsed:l,noChildren:a,children:[e.jsxs("div",{className:"top",onClick:d,children:[e.jsxs("div",{className:"left",children:[e.jsx(x,{size:4,align:"left",children:t}),e.jsx(f,{})]}),e.jsx(m,{children:r})]}),e.jsx("div",{className:"children"+(l?" close":" open"),children:s})]})},B=(t,s)=>Object.keys(s).reduce((n,r)=>{const o=s[r].filter(l=>u(l.title).includes(u(t)));return n[r],n[r]=o,n},{}),H=p.div`
    width: 100%;
`,O=({alerts:t})=>{const{open:s}=y(),[n,r]=h.useState(null),o=i=>{s(e.jsx(L,{alert:i}))},l=n??t;return e.jsxs(H,{children:[e.jsx(A,{placeholder:"Поиск оповещений",whereToSearch:t,searchEngine:B,setResult:r,loadingOnType:!0,validationCheck:!0}),Object.keys(l).sort((i,a)=>Number.parseInt(a)-Number.parseInt(i)).map(i=>{const a=n===null?i!==new Date().getFullYear().toString():!1,d=`Оповещений: ${l[i].length}`;return e.jsx(_,{sideText:d,title:i,isCollapsed:a,initiallyCollapsed:a,children:l[i].length?e.jsx(k,{scroll:!1,children:l[i].map(c=>e.jsx(F,{alert:c,onClick:o},c.id))}):null},i)})]})},J=()=>{const{data:t,error:s,loading:n}=g.selectors.useData();return e.jsx(z,{load:g.effects.getFx,error:s,loading:n,data:t,children:e.jsx(D,{children:e.jsx(I,{height:"100%",maxWidth:"700px",orientation:"vertical",gap:"8px",noAppearanceInMobile:!0,children:t?e.jsx(O,{alerts:t}):e.jsx(T,{text:"У вас нет оповещений"})})})})};export{J as default};
