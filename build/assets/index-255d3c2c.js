import{s as c,j as t,aP as $,aY as M,aZ as B,a_ as P,a$ as W,b0 as R,b1 as G,b2 as N,b3 as O,b4 as H,b5 as V,T as K,b6 as U,b7 as A,r as x,R as q,b8 as Z}from"./vendor-0c76c893.js";import{T as Y,ae as J,ar as Q,v as X,aF as F,f,az as ee,aq as te,l as b,aK as j,x as _,aB as k,W as se,aT as ie,al as re}from"./index-8d41848f.js";import{p as oe,D as ae,W as w,S as le,F as ne,a as ce}from"./week-schedule-095478be.js";import{S as de}from"./index-697735f0.js";import{a as pe}from"./student-api-82beabef.js";import{g as m}from"./get-correct-word-form-c0a854e8.js";import{P as ue}from"./page-link-content-160a935c.js";import"./page-link-1cf1106b.js";import"./found-pages-33498996.js";const S={feiu:{fullTitle:"Факультет экономики и управления",href:"https://e.mospolytech.ru/old/storage/files/arrears/FEU.zip?5",links:[]},fuigh:{fullTitle:"Факультет урбанистики и городского хозяйства",href:"https://e.mospolytech.ru/old/storage/files/arrears/FUiGH.zip?1",links:[]},fbk:{fullTitle:"Факультет базовых компетенций",href:"https://e.mospolytech.ru/old/storage/files/arrears/FBK.zip?8",links:[]},fhtib:{fullTitle:"Факультет химической технологии и биотехнологии",href:"https://e.mospolytech.ru/old/storage/files/arrears/FHTiB.zip?2",links:[]},tf:{fullTitle:"Транспортный факультет",href:"https://e.mospolytech.ru/old/storage/files/arrears/TF.zip?7",links:[]},fm:{fullTitle:"Факультет машиностроения",href:"https://e.mospolytech.ru/old/storage/files/arrears/FM.zip?6",links:[]},fit:{fullTitle:"Факультет информационных технологий",links:[{title:"ФИТ 2022-2023-зима, кафедра ИБ",href:"https://e.mospolytech.ru/old/storage/files/arrears/FIT_2022-2023-zima__kafedra_IB.pdf"},{title:"ФИТ 2022-2023-зима, кафедра ИКТ",href:"https://e.mospolytech.ru/old/storage/files/arrears/FIT_2022-2023-zima__kafedra_IKT.pdf"},{title:"ФИТ 2022-2023-зима, кафедра ПИ",href:"https://e.mospolytech.ru/old/storage/files/arrears/FIT_2022-2023-zima__kafedra_PI.pdf"},{title:"ФИТ 2022-2023-лето, кафедра ИиИТ",href:"https://e.mospolytech.ru/old/storage/files/arrears/FIT_2022-2023-zima__kafedra_IiIT.pdf"},{title:"ФИТ 2022-2023-лето, кафедра ИиИТ, ВНЕШНИЕ",href:"https://e.mospolytech.ru/old/storage/files/arrears/FIT_2022-2023-zima__kafedra_IiIT_VNEShNIE.pdf"}],href:""},pi:{fullTitle:"Полиграфический институт",href:"https://e.mospolytech.ru/old/storage/files/arrears/PI.zip?4",links:[]},iidizh:{fullTitle:"Институт издательского дела и журналистики",href:"https://e.mospolytech.ru/old/storage/files/arrears/IIDiZh.zip?2",links:[]},igrik:{fullTitle:"Институт графики и искусства книги имени В.А.Фаворского",href:"https://e.mospolytech.ru/old/storage/files/arrears/IGRIK.zip?2",links:[]},pishe:{fullTitle:"Передовая инженерная школа электротранспорта",href:"https://e.mospolytech.ru/old/storage/files/arrears/PIShE.zip",links:[]},cpd:{fullTitle:"Центр проектной деятельности",href:"https://e.mospolytech.ru/old/storage/files/arrears/TsPD.zip?3",links:[]},nid:{fullTitle:"График приема задолженностей по НИД (аспиранты)",href:"https://e.mospolytech.ru/old/storage/files/arrears/Grafik_priema_zadolzhennostej_po_NID_(aspiranty).doc",links:[]}},he=c.div`
    width: 600px;

    @media (max-width: 800px) {
        width: 100%;
        padding: 10px;
    }
`,fe=c.a`
    display: inline-block;
    font-size: 18px;
    line-height: 22px;
    :not(:first-child) {
        margin-top: 20px;
    }
`,xe=({links:e,fullTitle:s})=>t.jsxs(he,{children:[t.jsx(Y,{size:2,align:"left",children:s}),e.map(({href:i,title:r},a)=>t.jsx(fe,{href:i,target:"_blank",children:r},a+r))]});function me(e){return $({tag:"svg",attr:{version:"1.2",baseProfile:"tiny",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M20.177 3.823c-.382-.383-.894-.586-1.415-.586-.25 0-.503.047-.744.144-4.449 1.787-7.792 4.76-10.517 9.357-.102.172-.163.355-.209.542-1.38.215-2.6.903-3.442 1.993-.916 1.185-1.295 2.695-1.066 4.254l.216 1.473 1.473.217c.293.043.589.064.88.064 2.743 0 4.949-1.909 5.367-4.564.188-.047.371-.115.544-.218 4.598-2.728 7.571-6.069 9.355-10.517.298-.743.123-1.593-.442-2.159zm-14.824 15.458c-.192 0-.389-.016-.59-.044-.309-2.104 1.055-3.81 3-4.021l1.021 1.021c-.192 1.76-1.605 3.044-3.431 3.044zm4.89-4.502l-1.021-1.021c.38-.641.774-1.233 1.178-1.804.027.041 1.639 1.653 1.639 1.653-.568.401-1.158.794-1.796 1.172zm2.608-1.773s-1.821-1.801-1.879-1.824c2.147-2.784 4.651-4.685 7.791-5.943-1.255 3.127-3.144 5.623-5.912 7.767z"}}]})(e)}const ge=[{id:"feiu",title:"ФЭИУ",icon:t.jsx(M,{}),color:"lightGreen"},{id:"fuigh",title:"ФУИГХ",icon:t.jsx(B,{}),color:"purple"},{id:"fbk",title:"ФБК",icon:t.jsx(P,{}),color:"red"},{id:"fhtib",title:"ФХТИБ",icon:t.jsx(W,{}),color:"orange"},{id:"tf",title:"ТФ",icon:t.jsx(R,{}),color:"green"},{id:"fm",title:"ФМ",icon:t.jsx(G,{}),color:"green"},{id:"fit",title:"ФИТ",icon:t.jsx(N,{}),color:"blue"},{id:"pi",title:"ПИ",icon:t.jsx(O,{}),color:"pink"},{id:"iidizh",title:"ИИДИЖ",icon:t.jsx(H,{}),color:"purple"},{id:"igrik",title:"ИГРИК",icon:t.jsx(me,{}),color:"orange"},{id:"pishe",title:"ПИШЭ",icon:t.jsx(V,{}),color:"lightGreen"},{id:"cpd",title:"ЦПД",icon:t.jsx(K,{}),color:"purple"},{id:"nid",title:"НИД (Аспиранты)",icon:t.jsx(U,{}),color:"orange"},{id:"nivk",title:"НИВК (Аспиранты)",icon:t.jsx(A,{}),color:"lightBlue"}],ke=ge.reduce((e,{id:s,...i})=>{if(!S[s])return{...e};const{href:r,links:a,fullTitle:o}=S[s],l=r&&!a.length?r:"",d=a.length&&!r?()=>xe({links:a,fullTitle:o}):()=>null;return{...e,[s]:{id:s,path:l,Component:d,isTemplate:!1,...i}}},{}),je=e=>e?Object.values(e).reduce((s,i)=>{var a;let r="";return(a=i.lessons)==null||a.forEach(o=>{r!==o.name&&(o.name.includes("(Экзамен)")?s.exams++:o.name.includes("(Зачет)")?s.tests++:o.name.includes("(КП)")&&s.cp++,r=o.name)}),s},{tests:0,exams:0,cp:0}):{tests:0,exams:0,cp:0},ye=c.div`
    display: flex;
    align-items: center;
    span {
        font-size: 0.8em;
        opacity: 0.6;
        font-weight: 500;
        color: var(--text);
    }

    & > * + span::before {
        content: '';
        width: 5px;
        height: 5px;
        border-radius: 100%;
        background: var(--text);
        position: relative;
        display: block;
        float: left;
        margin: 5px 10px;
    }
`,Te=({exams:e,tests:s,cp:i})=>t.jsxs(ye,{children:[t.jsxs("span",{children:[e," ",m(e,{zero:"Экзаменов",one:"Экзамен",twoToFour:"Экзамена",fiveToNine:"Экзаменов"})]}),t.jsxs("span",{children:[s," ",m(s,{zero:"Зачетов",one:"Зачет",twoToFour:"Зачета",fiveToNine:"Зачетов"})]}),t.jsxs("span",{children:[i," ",m(i,{zero:"Курсовых",one:"Курсовая",twoToFour:"Курсовые",fiveToNine:"Курсовых"})]})]}),v=({title:e,icon:s,color:i})=>t.jsx(ue,{padding:"0",width:"100%",maxWidth:"100%",height:"135px",justifyContent:"center",color:i.length?i:"blue",isVertical:!0,hasNotifications:!1,children:t.jsxs("div",{className:"outside",children:[t.jsx(J,{color:i.length?i:"blue",children:s}),t.jsx("b",{children:e})]})}),z=c.a`
    width: ${({width:e})=>typeof e=="number"?`calc(125px * ${e} + ${(e-1)*10}px)`:e};

    @media (max-width: 500px) {
        max-width: ${({width:e})=>typeof e=="number"?`calc(33vw * ${e} - 14px)`:e};
        min-width: ${({width:e})=>typeof e=="number"?`calc(33vw * ${e} - 14px)`:e};
        width: ${({width:e})=>typeof e=="number"?`calc(33vw * ${e} - 14px)`:e};
    }
`,be=e=>{const{path:s,Component:i}=e,{open:r}=Q(),a=!!i({});return t.jsxs(t.Fragment,{children:[!a&&t.jsx(z,{href:s,width:1,children:t.jsx(v,{...e})}),a&&t.jsx(z,{onClick:()=>r(t.jsx(i,{})),width:1,children:t.jsx(v,{...e})})]})},we=c.div`
    width: 745px;
    padding: var(--desktop-page-padding);
    display: flex;
    justify-content: center;
    color: var(--text);

    @media (max-width: 1220px) {
        width: 610px;
    }

    @media (max-width: 820px) {
        width: 475px;
    }

    @media (max-width: 600px) {
        padding: 10px;
        width: 415px;
    }

    @media (max-width: 500px) {
        width: calc((33vw * 2) + 5px);
    }

    @media (max-width: 350px) {
        width: calc((33vw * 1) + 5px);
    }
`,Se=({links:e})=>t.jsx(we,{children:t.jsx(X,{direction:"horizontal",gap:10,horizontalAlign:"left",scroll:!1,wrap:!0,wrapOnMobile:!0,children:Object.values(e).map(s=>t.jsx(be,{...s},s.id))})}),ve=x.memo(Se),ze=e=>{const s=F(e,"days");return s<0?"Прошло":s===0?"Сегодня":s===1?"Завтра":`${s} ${m(s,{zero:"дней",one:"день",twoToFour:"дня",fiveToNine:"дней"})}`},Fe=e=>{const s=F(e,"days");return s<0?f.blue.main:s<1?f.pink.main:s<2?f.red.main:s<5?f.orange.main:f.green.main},_e=c.div`
    color: ${({day:e})=>Fe(e)};
    font-weight: 600;
    white-space: nowrap;
`,Ie=({day:e})=>t.jsx(_e,{day:e,children:ze(e)}),Ce=c(oe)`
    display: flex;
    column-gap: 10px;
    overflow-x: auto;
    width: 100%;
    transition: 0.2s;
    padding: ${({isFull:e})=>e?"0px":"0px calc(50% - 200px)"};
    scroll-snap-type: y proximity;
    scroll-behavior: smooth;

    &::-webkit-scrollbar {
        height: 0;
    }

    @media (max-width: 1000px) {
        scroll-snap-type: x mandatory;
    }
`,Le=({weekSchedule:e,view:s,wrapperRef:i})=>{const{data:{schedule:r,currentDay:a}}=ee.useSchedule(),o=r&&r[0]?-1:a,{width:l}=te();x.useEffect(()=>{setTimeout(()=>{i!=null&&i.current&&s==="big"&&(i.current.scrollLeft=o*400-360)},200)},[s]);const d=()=>{i!=null&&i.current&&l<=1e3&&j.changeCurrentChosenDay({day:Math.floor(i.current.scrollLeft*1.1/l)+1})};return e&&t.jsx(Ce,{isFull:s==="full",innerRef:i,onScroll:d,children:Object.keys(e).map((n,u)=>t.jsx(ae,{isCurrent:b(new Date,"weird")===n,weekDay:b(n,"short"),lessons:e[n].lessons,view:s,topInfo:t.jsx(Ie,{day:n})},u))})},De=x.memo(Le),Ee=(e,s,i)=>{const{schedule:r,view:a}=e,{data:{user:o}}=_.useUser(),l=x.useRef(null),d=(o==null?void 0:o.user_status)==="stud"&&!s&&!i,n=p=>{k.getScheduleFx({user:o,group:(p==null?void 0:p.value)??""})},u=()=>k.getScheduleFx({user:o,group:(o==null?void 0:o.group)??""}),g=()=>{k.getScheduleFx({user:o,group:""})},h=p=>{j.changeCurrentModule({currentModule:p})};return{pages:r?[{title:"Текущая неделя",condition:!!(r!=null&&r["0"]),content:t.jsx(w,{view:a,wrapperRef:l,weekSchedule:r[0]},0)},{title:"Весь семестр",condition:!!(r!=null&&r["1"]),content:t.jsx(w,{view:a,wrapperRef:l,weekSchedule:r[1]},1)},{title:"Сессия",condition:!!(r!=null&&r["2"]),content:t.jsxs(q.Fragment,{children:[t.jsx(Te,{...je(r[2])}),t.jsx(De,{view:a,wrapperRef:l,weekSchedule:r[2]})]},2)},{title:"Пересдачи",condition:!0,content:t.jsx(ve,{links:ke},3)}]:[],showGroupSearch:d,wrapperRef:l,setCurrentPage:h,onValueEmpty:g,handleLoad:u,onHintClick:n}},$e=c.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 30px;

    .slider-wrapper {
        width: 100%;
        max-width: 650px;
    }

    .buttons-and-search {
        display: flex;
        align-items: center;
        column-gap: 10px;
    }

    @media (max-width: 1000px) {
        row-gap: 15px;
    }
`,Ve=({teacherName:e,group:s,data:i,loading:r,error:a})=>{var T;const{schedule:o,currentModule:l,view:d}=i,{data:{user:n}}=_.useUser(),[u,g]=x.useState((n==null?void 0:n.group)??""),{pages:h,wrapperRef:y,showGroupSearch:p,setCurrentPage:I,onValueEmpty:C,handleLoad:L,onHintClick:D}=Ee(i,e,s);return t.jsx(se,{loading:r,load:L,error:a,data:o,children:t.jsxs($e,{children:[t.jsx("div",{className:"slider-wrapper",children:t.jsx(ie,{appearance:!1,pages:h,currentPage:parseInt(l),setCurrentPage:I})}),l!=="3"&&t.jsxs("div",{className:"buttons-and-search",children:[t.jsx(le,{view:d,setView:E=>j.changeView({view:E})}),p&&t.jsx(de,{value:u,setValue:g,onHintClick:D,placeholder:"Группа",customMask:re.groupMask,request:pe,leftIcon:t.jsx(Z,{}),onValueEmpty:(n==null?void 0:n.user_status)==="staff"?C:void 0})]}),t.jsx(ne,{visible:!!e||!!s,filter:e??s??"",isGroup:!!s}),l!=="3"&&t.jsx(ce,{wrapperRef:y,data:i}),!!h&&((T=h[l])==null?void 0:T.content)]})})};export{Ve as T};
