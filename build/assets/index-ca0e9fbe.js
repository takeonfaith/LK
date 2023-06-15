import{s as p,j as s,r as o}from"./vendor-0c76c893.js";import{J as d,E as j,af as u,T as h,aj as x,ak as v,ar as b,b4 as c,b9 as S,g as w,bb as y}from"./index-8010090a.js";import{C as E}from"./customize-leftside-bar-item-56f5698a.js";import"./page-link-content-0727dc97.js";import"./get-correct-word-form-c0a854e8.js";import"./get-short-string-60b0c4d4.js";import"./index.esm-aaf37469.js";const P=p.div`
    display: flex;
    flex-direction: column;
    @media (min-width: 768px) {
        width: 500px;
        height: 500px;
    }

    .links-wrapper {
        overflow-y: auto;
        padding-right: 8px;
        height: 100%;
    }
`,R=()=>{const{visibleRoutes:a}=d.useMenu(),t=d.useMenu();if(!a)return s.jsx(j,{text:"Не удалось загрузить пункты меню("});if(!t.visibleRoutes)return null;const{settings:r}=u.useSettings(),l=e=>{var i;(i=t==null?void 0:t.homeRoutes)!=null&&i[e]?x(e,r):v(e,r)};return s.jsxs(P,{children:[s.jsx(h,{size:3,align:"left",bottomGap:!0,children:"Добавить страницы"}),s.jsx("div",{className:"links-wrapper",children:Object.values(t.visibleRoutes).map((e,i)=>{var n;return o.createElement(E,{...e,key:i,chosen:!!((n=t==null?void 0:t.homeRoutes)!=null&&n[e.id]),switchMenuItem:l})})})]})},k=p.div``,C=()=>{const{homeRoutes:a}=d.useMenu(),{open:t}=b(),[r,l]=o.useState([]),{settings:e}=u.useSettings(),[i,n]=o.useState(a);return o.useEffect(()=>{a&&i&&Object.keys(a).length>Object.keys(i).length&&n(a)},[a]),o.useEffect(()=>{if(e){const{widgetPayment:g,widgetSchedule:f}=e["settings-home-page"].property;l([{title:"Расписание",state:!!f,action:m=>c.updateSetting({nameSettings:"settings-home-page",nameParam:"widgetSchedule",value:m})},{title:"Оплата",state:!!g,action:m=>c.updateSetting({nameSettings:"settings-home-page",nameParam:"widgetPayment",value:m})}])}},[e]),s.jsxs(k,{children:[s.jsx(h,{size:2,align:"left",bottomGap:!0,children:"Разделы"}),s.jsx(S,{list:i,onRemoveOne:g=>x(g,e),onAddElement:()=>t(s.jsx(R,{})),setList:n,padding:"10px 0",height:"fit-content"}),s.jsx(w,{margin:"30px 0"}),s.jsx(y,{title:"Виджеты",toggles:r,setToggles:l})]})};export{C as default};
