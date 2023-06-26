import{s as f,r as d,j as e,aU as m}from"./vendor-292fea82.js";import{ar as h,T as j,g as v,v as w,H as b,Q as y,x as A,aG as C,aH as u,a6 as S,W as E,P as N,E as k}from"./index-ddc703de.js";const I=(t,l)=>Object.keys(l).reduce((s,i)=>{const a=l[i].filter(r=>h(r.title).includes(h(t)));return s[i],s[i]=a,s},{}),T=f.div`
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

        /* img {
            max-width: 100%;
            height: unset;
        } */
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
`,D=({title:t,children:l,initiallyCollapsed:s,sideText:i,isCollapsed:a})=>{const[r,n]=d.useState(s??!0),o=l==null,c=()=>n(p=>!p);return d.useEffect(()=>{a!==void 0&&n(o)},[a,l]),e.jsxs(T,{collapsed:r,noChildren:o,children:[e.jsxs("div",{className:"top",onClick:c,children:[e.jsxs("div",{className:"left",children:[e.jsx(j,{size:4,align:"left",children:t}),e.jsx(m,{})]}),e.jsx(v,{margin:"0 20px"}),e.jsx(w,{children:i})]}),e.jsx("div",{className:"children"+(r?" close":" open"),children:l})]})},F=f.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 12px;
`,Y=({alerts:t,listView:l})=>{const{data:{user:s}}=b.useUser(),[i,a]=d.useState(null),r=i??t;return e.jsxs(F,{children:[!l&&e.jsx(y,{placeholder:"Поиск новостей",whereToSearch:t,searchEngine:I,setResult:a,loadingOnType:!0,validationCheck:!0}),Object.keys(r).sort((n,o)=>Number.parseInt(o)-Number.parseInt(n)).map(n=>{const o=new Date().getFullYear().toString(),c=i===null?n!==o:!1,p=`Новостей: ${r[n].length}`;return e.jsx(D,{sideText:p,title:n,isCollapsed:c,initiallyCollapsed:c,children:e.jsx(A,{scroll:!1,gap:12,children:r[n].map((x,g)=>e.jsx(C,{isNew:n===o&&g===0&&(s==null?void 0:s.hasAlerts),news:x,orientation:"horizontal"},x.id))})},n)})]})},P=()=>{const{data:t,error:l,loading:s}=u.selectors.useData();return d.useEffect(()=>{S.clearById({id:"alert",pageId:"alerts"})},[]),e.jsx(E,{load:u.effects.getFx,error:l,loading:s,data:t,children:e.jsx(N,{children:t?e.jsx(Y,{alerts:t}):e.jsx(k,{text:"У вас нет оповещений"})})})};export{P as default};
