import{s as g,r as p,j as o}from"./vendor-0c76c893.js";import{ab as d,J as m,H as x}from"./index-1840b39c.js";import"./page-link-2d3b3c59.js";import{F as f}from"./found-pages-76fae3b7.js";import{s as h}from"./search-f0f20efc.js";import{L as j}from"./links-list-965fd388.js";import"./page-link-content-a074f185.js";import"./get-correct-word-form-c0a854e8.js";import"./get-short-string-60b0c4d4.js";const c={Основное:0,"Учебная деятельность":1,"Финансы и документы":2,Коммуникация:3,"Находится в разработке":4},v=s=>s?Object.values(s).reduce((t,e)=>{const a=e!=null&&e.group?d[e.group]:d.OTHER;return t[a]||(t[a]={}),t[a][e.id]=e,t},{}):{},P=g.div`
    padding: calc(var(--desktop-page-padding) + 10px);
    padding-top: calc(var(--desktop-page-padding) - 10px);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    flex-wrap: wrap;
    color: var(--text);
    @media (max-width: 600px) {
        padding: 10px;
    }
`,F=()=>{const{visibleRoutes:s,allRoutes:l}=m.useMenu(),[t,e]=p.useState(null),[a,u]=p.useState(""),i=p.useMemo(()=>v(s),[s]);return s?o.jsxs(P,{children:[o.jsx(x,{placeholder:"Поиск разделов",whereToSearch:l??{},searchEngine:h,setResult:e,setExternalValue:u,validationCheck:!0}),a.length===0&&Object.keys(i).sort((r,n)=>c[r]-c[n]).map(r=>{const n=i[r];return o.jsx(j,{title:r,doNotShow:"all",align:"left",links:n},r)}),o.jsx(f,{pages:t})]}):null};export{F as default};
