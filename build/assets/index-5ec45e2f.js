import{s as g,r as a,j as t,F as m,R as f,aH as D}from"./vendor-0c76c893.js";import{l as i,d as n,T as x,D as v,M as A,L as F,f as y,g as L,F as T,h as w,P as S,i as P}from"./index-1840b39c.js";const R=e=>{if(!e[0].length&&e[1].length)return`За весь период до ${i(e[1])} включительно`;if(e[0].length&&!e[1].length)return`За весь период начиная с ${i(e[0])} включительно`;if(!e[0].length&&!e[1].length)return"За все время";if(e[0].length&&e[1].length)return`За период с ${i(e[0])} по ${i(e[1])}`},C=g.div`
    .content {
        display: flex;
        flex-direction: column;
        gap: 20px;

        section {
            display: flex;
            gap: 10px;
        }
    }
`,r=({title:e,links:s})=>{const[o,d]=a.useState(["",""]),[c,p]=a.useState(!0),{data:u}=n.selectors.useData();return u?t.jsxs(C,{children:[t.jsx(x,{size:3,align:"left",bottomGap:!0,children:e}),t.jsxs("div",{className:"content",children:[t.jsx(v,{dates:o,setDates:d,valid:c,setValid:p}),t.jsx(A,{type:"info",title:R(o)??"",icon:t.jsx(m,{})}),s==null?void 0:s.map((l,h)=>{const j=l.url+"&date_from="+o[0]+"&date_to="+o[1];return t.jsxs(f.Fragment,{children:[t.jsxs("section",{children:[t.jsx(x,{size:4,align:"left",children:l.title}),t.jsx(F,{onClick:()=>null,href:j,text:"Загрузить",icon:t.jsx(D,{}),width:"170px",background:y.blue.main,textColor:"#fff",isActive:c})]}),h!==(s==null?void 0:s.length)-1&&t.jsx(L,{})]},l.title)})]})]}):null},E=()=>{const{data:e}=n.selectors.useData();return t.jsx(r,{title:"Скачать отчеты по акцептам",links:e==null?void 0:e.accepts})},I=()=>{const{data:e}=n.selectors.useData();return t.jsx(r,{title:"Скачать отчеты по доп.соглашениям",links:e==null?void 0:e.agreements})},M=()=>{const{data:e}=n.selectors.useData();return t.jsx(r,{title:"Скачать отчеты по анкете",links:e==null?void 0:e.checkdata})},N=g.div`
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    color: var(--text);
`,b=()=>{var s;const{data:e}=n.selectors.useData();return t.jsx(N,{children:t.jsx(T,{children:t.jsx(w,{pages:[{title:"Анкета",content:t.jsx(M,{}),condition:!!(e!=null&&e.checkdata.length)},{title:"Акцепт",content:t.jsx(E,{}),condition:!!(e!=null&&e.accepts.length)},{title:"Доп. соглашения",content:t.jsx(I,{}),condition:!!(e!=null&&e.agreements.length)},{title:"Логины студентов",content:t.jsx(S,{oldVersionUrl:P}),condition:!!((s=e==null?void 0:e.studLogins)!=null&&s.length)}]})})})};export{b as default};
