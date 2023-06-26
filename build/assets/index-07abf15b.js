import{s as j,r,j as t,F as f,R as m,aP as D}from"./vendor-292fea82.js";import{l,d as n,T as x,D as v,M as A,L,f as P,g as T,h as S,P as w,i as y,j as C,k as F}from"./index-ddc703de.js";const R=e=>{if(!e[0].length&&e[1].length)return`За весь период до ${l(e[1])} включительно`;if(e[0].length&&!e[1].length)return`За весь период начиная с ${l(e[0])} включительно`;if(!e[0].length&&!e[1].length)return"За все время";if(e[0].length&&e[1].length)return`За период с ${l(e[0])} по ${l(e[1])}`},E=j.div`
    .content {
        display: flex;
        flex-direction: column;
        gap: 20px;

        section {
            display: flex;
            gap: 10px;
        }
    }
`,a=({title:e,links:s})=>{const[o,g]=r.useState(["",""]),[c,d]=r.useState(!0),{data:u}=n.selectors.useData();return u?t.jsxs(E,{children:[t.jsx(x,{size:3,align:"left",bottomGap:!0,children:e}),t.jsxs("div",{className:"content",children:[t.jsx(v,{dates:o,setDates:g,valid:c,setValid:d}),t.jsx(A,{type:"info",title:R(o)??"",icon:t.jsx(f,{})}),s==null?void 0:s.map((i,h)=>{const p=i.url+"&date_from="+o[0]+"&date_to="+o[1];return t.jsxs(m.Fragment,{children:[t.jsxs("section",{children:[t.jsx(x,{size:4,align:"left",children:i.title}),t.jsx(L,{onClick:()=>null,href:p,text:"Загрузить",icon:t.jsx(D,{}),width:"170px",background:P.blue.main,textColor:"#fff",isActive:c})]}),h!==(s==null?void 0:s.length)-1&&t.jsx(T,{})]},i.title)})]})]}):null},I=()=>{const{data:e}=n.selectors.useData();return t.jsx(a,{title:"Скачать отчеты по акцептам",links:e==null?void 0:e.accepts})},M=()=>{const{data:e}=n.selectors.useData();return t.jsx(a,{title:"Скачать отчеты по доп.соглашениям",links:e==null?void 0:e.agreements})},N=()=>{const{data:e}=n.selectors.useData();return t.jsx(a,{title:"Скачать отчеты по анкете",links:e==null?void 0:e.checkdata})},b=()=>{var s;const{data:e}=n.selectors.useData();return t.jsx(S,{padding:"10px",children:t.jsx(w,{children:t.jsx(y,{appearance:!1,pages:[{title:"Анкета",content:t.jsx(N,{}),condition:!!(e!=null&&e.checkdata.length)},{title:"Акцепт",content:t.jsx(I,{}),condition:!!(e!=null&&e.accepts.length)},{title:"Доп. соглашения",content:t.jsx(M,{}),condition:!!(e!=null&&e.agreements.length)},{title:"Логины студентов",content:t.jsx(C,{oldVersionUrl:F}),condition:!!((s=e==null?void 0:e.studLogins)!=null&&s.length)}]})})})};export{b as default};
