import{s as l,j as r,F as h}from"./vendor-292fea82.js";import{T as c,M as u,bZ as b,w as g,f as x,b_ as m,az as f,W as _,P as v,v as p,ax as d,g as j}from"./index-ddc703de.js";const S=l.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 8px 0;
    box-sizing: border-box;
    border-radius: var(--brLight);
    font-size: 0.9rem;
    font-weight: ${({bold:e})=>e?600:400};

    span {
        font-weight: bold;
        color: ${({color:e})=>e};
    }
`,o=({score:e,title:t,bold:s,scoreText:n,color:i})=>r.jsxs(S,{bold:s,color:i??(e>=60?"var(--green)":"var(--red)"),children:[r.jsx("div",{children:t}),r.jsxs("div",{children:[r.jsx("span",{children:e}),n&&r.jsxs("span",{children:[" (",n,")"]})]})]}),k=l.div``,C=({data:e})=>{const[t,s,n]=[Number.parseInt((e==null?void 0:e.current_att1)??"0"),Number.parseInt((e==null?void 0:e.current_att2)??"0"),Number.parseInt((e==null?void 0:e.current_att_mid)??"0")],i=Number.parseInt((e==null?void 0:e.last_semestr_balls)??"0");return r.jsxs(k,{children:[r.jsx(c,{size:4,align:"left",bottomGap:!0,children:"Результат аттестации за текущий семестр"}),r.jsxs(u,{type:"failure",visible:(e==null?void 0:e.arrear_result)==="не зачтено",title:"Внимание",icon:null,children:["Перенос баллов с прошлого семестра: ",i,". Для закрытия задолженности необходимо в этом семестре набрать дополнительно ",60-i," баллов."]}),r.jsx(o,{title:"Первая аттестация",score:t,color:"var(--text)"}),r.jsx(o,{title:"Вторая аттестация",score:s,color:"var(--text)"}),r.jsx(o,{title:"Промежуточная аттестация",score:n,color:"var(--text)"})]})},I=l.div``,P=({data:e})=>r.jsxs(I,{children:[r.jsx(c,{size:4,align:"left",bottomGap:!0,children:"Результат аттестации за прошлый семестр"}),r.jsx(o,{title:"Набрано баллов",score:Number.parseInt((e==null?void 0:e.last_semestr_balls)??"0"),scoreText:(e==null?void 0:e.last_semestr_result)??""})]}),w=l.div`
    max-width: 400px;
    line-height: 1.6rem;
`,y=({data:e})=>{const t=e==null?void 0:e.project_info.split(" ");return r.jsx(w,{children:t==null?void 0:t.map(s=>b(s)?r.jsx("a",{href:s,children:g(s,30)}):s+" ")})},z=({data:e})=>{const t=Number.parseInt((e==null?void 0:e.arrear_balls)??"0"),s=Number.parseInt((e==null?void 0:e.current_semestr_balls)??"0");return r.jsxs("div",{children:[r.jsx(c,{size:4,align:"left",bottomGap:!0,children:"Итог"}),r.jsx(o,{title:"За прошлый семестр баллов ",score:t,scoreText:(e==null?void 0:e.arrear_result)??""}),r.jsx(o,{title:"За текущий семестр баллов ",score:s,scoreText:(e==null?void 0:e.current_semestr_result)??""})]})},M=l.div`
    h3 {
        background: ${x.blue.main};
        background: linear-gradient(to right, ${x.blue.main} 0%, ${x.pink.main} 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    @media (max-width: 1000px) {
        padding: 0px;
    }
`,N=l.div`
    width: 100%;
`,F=()=>{const{data:e,loading:t,error:s}=m.selectors.useData(),{open:n}=f(),i=()=>{n(r.jsx(y,{data:e}),"Информация")};return r.jsx(_,{load:()=>m.effects.getFx("1"),loading:t||!1,error:s||null,data:e,children:r.jsx(M,{children:r.jsxs(v,{children:[r.jsxs(u,{lineHeight:"1.5rem",fontSize:"0.86rem",type:"info",title:"Вниманию студентов 2-4 курсов!",children:["Актуальная информация на 1 сентября 2022 г.:",r.jsx("br",{}),"1. Дата первой встречи по проектам:",r.jsx("br",{})," - 5 сентября для студентов 2-5 курсов; ",r.jsx("br",{}),"- 19 сентября для студентов 1 курса.",r.jsx("br",{}),r.jsx("a",{href:"https://docs.google.com/spreadsheets/d/e/2PACX-1vR1Jm1FlsR4ldXW75Qkval9K2_c_Zs8u96xcFsP9eOCRmao7MbETHUFWY7rr_s4qC-5_Hyr-p1XC4tr/pubhtml?gid=845074321&single=true",children:"2. Расписание занятий по проектам 2-4 курсов"}),"3. Регламент начисления баллов по дисциплинам “Введение в проектную деятельность” и “Проектная деятельность”, порядок и сроки пересдач по дисциплинам “Введение в проектную деятельность”, “Проектная деятельность”, “Управление проектами” и “Основы технологического предпринимательства” доступен по ссылке",r.jsx("a",{href:"https://docs.google.com/document/d/e/2PACX-1vRPlG738Pszk13swt9O1EhABnOdze3M39OoZ8rlkSyNae0fbqm8CFjLx21IPA9gZl6qjVLYdAN1gmEx/pub",children:"https://docs.google.com/document/d/e/2PAC..."}),r.jsx("br",{}),"Всем успешной работы на проектах!"]}),r.jsxs(N,{children:[r.jsx(p,{fontSize:"0.85rem",children:"Вам назначен проект"}),r.jsx(c,{size:3,align:"left",bottomGap:!0,children:(e==null?void 0:e.project)??"-"}),r.jsxs(p,{children:["Тематика проекта: ",(e==null?void 0:e.project_theme)??"-",r.jsx("br",{}),"Подпроект: ",e!=null&&e.subproject.length?e==null?void 0:e.subproject:"-",r.jsx("br",{}),"Куратор: ",(e==null?void 0:e.curator.length)===0?"-":e==null?void 0:e.curator]}),r.jsx(d,{icon:r.jsx(h,{}),onClick:i,text:"Подробнее",background:"transparent",padding:"12px 0 0 0",height:"30px"}),r.jsx(j,{width:"100%",margin:"16px 0"}),r.jsx(C,{data:e}),r.jsx(j,{width:"100%",margin:"16px 0"}),r.jsx(P,{data:e}),r.jsx(j,{width:"100%",margin:"16px 0"}),r.jsx(z,{data:e})]})]})})})};export{F as default};
