import{s as l,j as r,F as h}from"./vendor-0c76c893.js";import{T as c,M as j,f as x,bu as u,ar as g,W as b,u as m,ai as d,g as p}from"./index-1840b39c.js";import{B as f}from"./index-012ca6bf.js";import{g as _}from"./get-short-string-60b0c4d4.js";const v=e=>!!new RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$","i").test(e),S=l.div`
    max-width: 400px;
`,z=({data:e})=>{const s=e==null?void 0:e.project_info.split(" ");return r.jsxs(S,{children:[r.jsx(c,{size:4,bottomGap:!0,align:"left",children:"Информация"}),s==null?void 0:s.map(t=>v(t)?r.jsx("a",{href:t,children:_(t,30)}):t+" ")]})},k=l.div`
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
`,o=({score:e,title:s,bold:t,scoreText:n,color:i})=>r.jsxs(k,{bold:t,color:i??(e>=60?"var(--green)":"var(--red)"),children:[r.jsx("div",{children:s}),r.jsxs("div",{children:[r.jsx("span",{children:e}),n&&r.jsxs("span",{children:[" (",n,")"]})]})]}),I=l.div``,y=({data:e})=>{const[s,t,n]=[Number.parseInt((e==null?void 0:e.current_att1)??"0"),Number.parseInt((e==null?void 0:e.current_att2)??"0"),Number.parseInt((e==null?void 0:e.current_att_mid)??"0")],i=Number.parseInt((e==null?void 0:e.last_semestr_balls)??"0");return r.jsxs(I,{children:[r.jsx(c,{size:4,align:"left",bottomGap:!0,children:"Результат аттестации за текущий семестр"}),r.jsxs(j,{type:"failure",visible:(e==null?void 0:e.arrear_result)==="не зачтено",title:"Внимание",icon:null,children:["Перенос баллов с прошлого семестра: ",i,". Для закрытия задолженности необходимо в этом семестре набрать дополнительно ",60-i," баллов."]}),r.jsx(o,{title:"Первая аттестация",score:s,color:"var(--text)"}),r.jsx(o,{title:"Вторая аттестация",score:t,color:"var(--text)"}),r.jsx(o,{title:"Промежуточная аттестация",score:n,color:"var(--text)"})]})},C=l.div``,w=({data:e})=>r.jsxs(C,{children:[r.jsx(c,{size:4,align:"left",bottomGap:!0,children:"Результат аттестации за прошлый семестр"}),r.jsx(o,{title:"Набрано баллов",score:Number.parseInt((e==null?void 0:e.last_semestr_balls)??"0"),scoreText:(e==null?void 0:e.last_semestr_result)??""})]}),M=({data:e})=>{const s=Number.parseInt((e==null?void 0:e.arrear_balls)??"0"),t=Number.parseInt((e==null?void 0:e.current_semestr_balls)??"0");return r.jsxs("div",{children:[r.jsx(c,{size:4,align:"left",bottomGap:!0,children:"Итог"}),r.jsx(o,{title:"За прошлый семестр баллов ",score:s,scoreText:(e==null?void 0:e.arrear_result)??""}),r.jsx(o,{title:"За текущий семестр баллов ",score:t,scoreText:(e==null?void 0:e.current_semestr_result)??""})]})},P=l.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-bottom: 10px;
    height: auto;

    h3 {
        background: ${x.blue.main};
        background: linear-gradient(to right, ${x.blue.main} 0%, ${x.pink.main} 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    @media (max-width: 1000px) {
        padding: 0px;
    }
`,A=l.div`
    width: 100%;
`,G=()=>{const{data:e,loading:s,error:t}=u.selectors.useData(),{open:n}=g(),i=()=>{n(r.jsx(z,{data:e}))};return r.jsx(b,{load:()=>u.effects.getFx("1"),loading:s||!1,error:t||null,data:e,children:r.jsx(P,{children:r.jsxs(f,{maxWidth:"700px",orientation:"vertical",gap:"16px",height:"100%",noAppearanceInMobile:!0,children:[r.jsxs(j,{type:"info",title:"Вниманию студентов 2-4 курсов!",children:["Актуальная информация на 1 сентября 2022 г.:",r.jsx("br",{}),"1. Дата первой встречи по проектам:",r.jsx("br",{})," - 5 сентября для студентов 2-5 курсов; ",r.jsx("br",{}),"- 19 сентября для студентов 1 курса.",r.jsx("br",{}),r.jsx("a",{href:"https://docs.google.com/spreadsheets/d/e/2PACX-1vR1Jm1FlsR4ldXW75Qkval9K2_c_Zs8u96xcFsP9eOCRmao7MbETHUFWY7rr_s4qC-5_Hyr-p1XC4tr/pubhtml?gid=845074321&single=true",children:"2. Расписание занятий по проектам 2-4 курсов"}),"3. Регламент начисления баллов по дисциплинам “Введение в проектную деятельность” и “Проектная деятельность”, порядок и сроки пересдач по дисциплинам “Введение в проектную деятельность”, “Проектная деятельность”, “Управление проектами” и “Основы технологического предпринимательства” доступен по ссылке",r.jsx("a",{href:"https://docs.google.com/document/d/e/2PACX-1vRPlG738Pszk13swt9O1EhABnOdze3M39OoZ8rlkSyNae0fbqm8CFjLx21IPA9gZl6qjVLYdAN1gmEx/pub",children:"https://docs.google.com/document/d/e/2PAC..."}),r.jsx("br",{}),"Всем успешной работы на проектах!"]}),r.jsxs(A,{children:[r.jsx(m,{fontSize:"0.85rem",children:"Вам назначен проект"}),r.jsx(c,{size:3,align:"left",bottomGap:!0,children:(e==null?void 0:e.project)??"-"}),r.jsxs(m,{children:["Тематика проекта: ",(e==null?void 0:e.project_theme)??"-",r.jsx("br",{}),"Подпроект: ",e!=null&&e.subproject.length?e==null?void 0:e.subproject:"-",r.jsx("br",{}),"Куратор: ",(e==null?void 0:e.curator.length)===0?"-":e==null?void 0:e.curator]}),r.jsx(d,{icon:r.jsx(h,{}),onClick:i,text:"Подробнее",background:"transparent",padding:"12px 0 0 0",height:"30px"}),r.jsx(p,{width:"100%",margin:"16px 0"}),r.jsx(y,{data:e}),r.jsx(p,{width:"100%",margin:"16px 0"}),r.jsx(w,{data:e}),r.jsx(p,{width:"100%",margin:"16px 0"}),r.jsx(M,{data:e})]})]})})})};export{G as default};
