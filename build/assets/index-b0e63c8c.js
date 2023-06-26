import{s as u,j as s,r as o}from"./vendor-292fea82.js";import{V as c,E as j,aL as p,T as h,bv as x,bw as v,az as b,bx as m,bC as w,g as S,bH as y}from"./index-ddc703de.js";import{C as E}from"./customize-leftside-bar-item-22ffd699.js";import"./index.esm-5250088b.js";const P=u.div`
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
`,R=()=>{const{visibleRoutes:n}=c.useMenu(),t=c.useMenu();if(!n)return s.jsx(j,{text:"Не удалось загрузить пункты меню("});if(!t.visibleRoutes)return null;const{settings:r}=p.useSettings(),l=e=>{var i;(i=t==null?void 0:t.homeRoutes)!=null&&i[e]?x(e,r):v(e,r)};return s.jsxs(P,{children:[s.jsx(h,{size:3,align:"left",bottomGap:!0,children:"Добавить страницы"}),s.jsx("div",{className:"links-wrapper",children:Object.values(t.visibleRoutes).map((e,i)=>{var a;return o.createElement(E,{...e,key:i,chosen:!!((a=t==null?void 0:t.homeRoutes)!=null&&a[e.id]),switchMenuItem:l})})})]})},L=u.div``,T=()=>{const{homeRoutes:n}=c.useMenu(),{open:t}=b(),[r,l]=o.useState([]),{settings:e}=p.useSettings(),[i,a]=o.useState(n);return o.useEffect(()=>{n&&i&&Object.keys(n).length>Object.keys(i).length&&a(n)},[n]),o.useEffect(()=>{if(e){const{widgetPayment:g,widgetSchedule:f}=e["settings-home-page"].property;l([{title:"Расписание",state:!!f,action:d=>m.updateSetting({nameSettings:"settings-home-page",nameParam:"widgetSchedule",value:d})},{title:"Оплата",state:!!g,action:d=>m.updateSetting({nameSettings:"settings-home-page",nameParam:"widgetPayment",value:d})}])}},[e]),s.jsxs(L,{children:[s.jsx(h,{size:2,align:"left",bottomGap:!0,children:"Разделы"}),s.jsx(w,{list:i,onRemoveOne:g=>x(g,e),onAddElement:()=>t(s.jsx(R,{})),setList:a,padding:"10px 0",height:"fit-content"}),s.jsx(S,{margin:"30px 0"}),s.jsx(y,{title:"Виджеты",toggles:r,setToggles:l})]})};export{T as default};
