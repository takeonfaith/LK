import{s as a,j as e,P,aa as Q,aZ as R,r as m,aP as W,aj as G,ak as q,a8 as K,c as J,a_ as V,a$ as Z,b0 as X,R as Y}from"./vendor-292fea82.js";import{f as b,a8 as l,aI as ee,v,l as u,T as f,E as B,M as L,az as N,aJ as E,K as te,S as $,ax as F,L as T,aT as U,b3 as ne,g as O,x as ie,aM as se,b4 as re,b5 as ae,b6 as oe,y as le,a as ce,W as de,P as xe,i as pe}from"./index-ddc703de.js";import{P as he}from"./index-4b532a9f.js";import{u as ge}from"./index-1cac61ea.js";import{A as me}from"./index-6ca148c3.js";a.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    background: var(--search2);
    border-radius: var(--brSemi);
    padding: 30px;
    height: 400px;
    color: var(--text);

    @media (max-width: 1225px) {
        height: auto;
        padding: 20px;
    }
`;const ue=a.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    align-items: center;
    flex-direction: column;
    gap: 32px;
`,fe=a.div`
    width: 100%;
    padding: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid ${b.grey.transparent3};

    .payment-item-money {
        display: flex;
        align-items: center;
        color: var(--green);
        font-weight: 500;
    }
`,je=({date:t,value:n})=>e.jsxs(fe,{children:[e.jsxs(l,{gap:"16px",children:[e.jsx(ee,{color:"grey",size:33,children:e.jsx(P,{})}),e.jsxs(l,{d:"column",ai:"flex-start",children:[e.jsx("span",{className:"payment-item-date",children:"Платеж"}),e.jsx(v,{children:u(t)})]})]}),e.jsxs("span",{className:"payment-item-money",children:["+",n," ",e.jsx(P,{})," "]})]});a.span`
    color: var(--red);
    font-weight: bold;
`;a.div`
    display: flex;
    align-items: center;

    .monthly {
        color: var(--blue);
        font-weight: bold;
    }

    .debt-or-overpay {
        color: ${({paymentDifference:t})=>t>=0?"var(--red)":"var(--green)"};
        font-weight: bold;
    }
`;const ye=t=>Number(t.replace(/,/g,".").replace(/\s/g,"")),be=a.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;

    .payment-list {
        margin-bottom: 10px;
        width: 100%;
        overflow-y: auto;
        min-height: 195px;
        height: 195px;
        padding-right: 5px;
        background: var(--form);
        box-shadow: var(--schedule-shadow);
        border-radius: 7px;
        margin-top: 10px;
    }
`,ve=({payments:t})=>{const n=t==null?void 0:t.reduce((i,s)=>i+ye(s.value),0).toFixed(1);return e.jsxs(be,{children:[e.jsxs(l,{jc:"space-between",children:[e.jsx(f,{icon:e.jsx(Q,{}),size:4,align:"left",width:"fit-content",children:"Поступившие платежи"}),e.jsxs(v,{fontSize:"1rem",width:"fit-content",children:[n," ",e.jsx(P,{})]})]}),e.jsxs("div",{className:"payment-list",children:[!t.length&&e.jsx(B,{size:"50px",text:"Нет платежей",image:e.jsx(R,{})}),t.map((i,s)=>m.createElement(je,{...i,key:s}))]})]})},I=()=>e.jsx(L,{type:"tip",lineHeight:"1.7rem",maxWidth:"700px",fontSize:"0.83rem",children:e.jsxs("p",{children:["По возникновении технических проблем при подписании договоров и дополнительных соглашений обращайтесь на почту ",e.jsx("a",{href:"mailto:info@mospolytech.ru",children:"info@mospolytech.ru"})]})}),we=a.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
    height: 300px;
    justify-content: space-between;

    .contract-info {
        display: flex;
        flex-direction: column;
    }

    p {
        margin: 4px 0;
    }
`,Ce=({contract:t})=>{if(!t)return null;const{number:n,startDate:i,endDatePlan:s,contragent:o,sum:c,can_sign:d,file:x,student:r}=t,{open:g}=N(),[p,j]=m.useState(!1),[y,C]=m.useState(!1),[h,w]=m.useState(!1),{error:k}=E.usePayments(),S=[{text:"Номер договора",info:n??""},{text:"Начало действия",info:u(i)},{text:"Действует до",info:u(s)},{text:"Заказчик",info:o||"Московский политех"},{text:"Обучающийся",info:r??""},{text:"Сумма к оплате",info:c??""}],A=()=>{navigator.clipboard.writeText((t==null?void 0:t.number)??""),j(!0)},_=()=>{t&&(C(!0),U.signContractFx(t.id),C(!1),w(!0))},z=()=>{g(e.jsx(I,{}),"Не получается подписать")};return e.jsxs(we,{children:[e.jsx("div",{className:"contract-info",children:S.map(({info:M,text:H})=>e.jsx(te,{keyStr:H,value:M},M))}),d&&e.jsxs(l,{d:"column",gap:"8px",children:[e.jsx($,{text:"Подписать договор",buttonSuccessText:"Подписан",action:_,isLoading:y,completed:h,repeatable:!1,popUpFailureMessage:k??"Не удалось подписать договор",setCompleted:w,popUpSuccessMessage:"Договор подписан",isActive:!0,pulsing:!0}),e.jsx(F,{onClick:z,text:"Не получается подписать?",background:"transparent",textColor:b.grey.main})]}),!d&&e.jsxs(l,{gap:"8px",children:[e.jsx($,{text:"Скопировать номер договора",action:A,isLoading:!1,completed:p,setCompleted:j,popUpSuccessMessage:"Номер договора скопирован в буфер",isActive:!0}),e.jsx(T,{onClick:()=>null,href:x??"",icon:e.jsx(W,{}),width:"45px"})]})]})},Se=a.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    user-select: none;
    cursor: pointer;
    position: sticky;
    top: -2px;
    background: var(--schedule);
    z-index: 3;
    width: 100%;
    /* border-radius: var(--brLight) var(--brLight) 0 0; */

    .title-and-icon {
        display: flex;
        align-items: center;
        width: calc(100% - 30px);

        b {
            overflow: hidden;
            width: 100%;
            text-overflow: ellipsis;
            white-space: nowrap;
            font-weight: 500;
        }

        svg {
            min-width: 19px;
            height: 19px;
            margin-right: 7px;
        }
        /* white-space: nowrap; */
    }
`,De=({title:t,confirmed:n,setOpenArea:i})=>e.jsxs(Se,{onClick:()=>i(s=>!s),children:[e.jsxs("div",{className:"title-and-icon",children:[n?e.jsx(G,{style:{color:"var(--green)"}}):e.jsx(q,{style:{color:"var(--red)"}}),e.jsx("b",{children:t})]}),e.jsx(F,{icon:e.jsx(K,{}),onClick:()=>null,background:"transparent"})]}),Pe=a.div`
    display: flex;
    flex-direction: column;
    transition: 0.2s;
    width: 100%;
    border-radius: var(--brLight);
    overflow: hidden;

    .inputs {
        padding: ${({open:t})=>t?"15px 0":"0"};
        display: flex;
        flex-direction: column;
        row-gap: 15px;
        transition: 0.2s height, 0.2s opacity, 0.2s visibility, 0.2s padding;
        height: ${({height:t,open:n})=>n?t+"px":"0"};
        opacity: ${({open:t})=>t?"1":"0"};
        visibility: ${({open:t})=>t?"visible":"hidden"};
    }

    @media (max-width: 500px) {
        .inputs {
            height: ${({height:t,open:n})=>n?t+63+"px":"0"};
        }
    }
`,ke=t=>{const{children:n,title:i,height:s,confirmed:o=!1,show:c=!1}=t,[d,x]=m.useState(c);return e.jsxs(Pe,{height:s,open:d,children:[e.jsx(De,{title:i,confirmed:o,setOpenArea:x}),e.jsx("div",{className:"inputs",children:n})]})},Ae=a.div`
    display: flex;
    align-items: center;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 16px;
    }
`,_e=({data:t})=>{const{id:n,signed_user:i,name:s,can_sign:o,date:c}=t,{handleSubmit:d,loading:x,done:r,completed:g,setCompleted:p}=ge({isDone:i,submit:()=>ne(n)}),j=i||r?140:100;return e.jsxs(ke,{height:j,title:s,confirmed:i||r,children:[e.jsxs(Ae,{children:[e.jsxs(l,{d:"column",ai:"flex-start",gap:"4px",children:[e.jsx(f,{size:5,align:"left",children:s}),e.jsx(v,{children:u(c)})]}),e.jsxs(l,{gap:"8px",w:"100%",jc:"flex-end",children:[e.jsx(T,{href:t.file,onClick:()=>null,width:"40px",icon:e.jsx(W,{})}),!r&&e.jsx($,{text:r?"Подписано":"Подписать",action:d,isLoading:x,completed:g,isDone:r,width:"160px",setCompleted:p,isActive:!r&&o,popUpFailureMessage:o?"Согласие уже подписано":"Необходимо сначала подписать соглашение об электронном взаимодейтсвии",popUpSuccessMessage:"Согласие успешно подписано"}),e.jsx(L,{type:"success",title:"Подписано",icon:e.jsx(J,{}),align:"center",width:"130px",visible:r})]})]}),(r||i)&&e.jsx(O,{width:"100%"}),(r||i)&&e.jsxs(v,{children:["Дата подписания: ",u(t.signed_user_date||new Date),","," ",t.signed_user_time||`${new Date().getHours()}:${new Date().getMinutes()}`]})]})},ze=({isDormitory:t,electronicAgreements:n=[]})=>e.jsxs(ie,{width:"100%",children:[e.jsx(f,{size:4,align:"left",icon:e.jsx(V,{}),bottomGap:!0,children:"Доп. соглашения"}),e.jsx(I,{}),e.jsx(L,{type:"info",title:"Информация",visible:!t,children:"Подписание дополнительных соглашений к 3-сторонним договорам в Личном кабинете не предусмотрено"}),n.map((i,s)=>e.jsx(_e,{data:i},s))]}),$e=a.div`
    width: 100%;
`,Le=a.div`
    width: 100%;
    padding: 16px;
    background: var(--form);
    border-radius: 6px;
    box-shadow: var(--schedule-shadow);
`,Fe=a.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    margin-top: 20px;
    width: 100%;
    margin-bottom: 30px;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;
        gap: 20px;
    }
`,Te=a.div`
    display: flex;
    align-items: center;
    gap: 30px;
    height: 35px;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 0;
        align-items: flex-start;
        height: fit-content;
    }
`,Me=a.div`
    color: ${({color:t})=>t};
    font-size: 1.5rem;
    font-weight: 600;
    display: flex;
    align-items: center;
`,We=a.div`
    position: relative;
`,Be=t=>{const{data:n,isDormitory:i}=t,{balance_currdate:s,balance:o,endDatePlan:c,can_sign:d,bill:x,qr_current:r,qr_total:g}=n,{isMobile:p}=se(),{open:j}=N(),[y,C]=m.useState(0),h=y===0?+s:+o,w=h>0,k=h>0?b.red.main:b.green.main,S=i?"общежитию":"обучению",A=w?`Долг по ${S}`:h<0?`Переплата по ${S}`:"У вас нет долга",_=y===0?`На ${u(new Date)}`:`До ${u(c)}`,z=()=>{j(e.jsx(Ce,{contract:n}),"Реквизиты договора")};return e.jsxs($e,{children:[e.jsx(f,{icon:e.jsx(Z,{}),size:4,align:"left",bottomGap:!0,children:"Задолженность"}),e.jsxs(Le,{children:[e.jsx(re,{pages:[{title:"Текущая"},{title:"Общая"}],currentPage:y,setCurrentPage:C,appearance:!1}),e.jsxs(Fe,{children:[e.jsxs(l,{d:"column",gap:"12px",ai:"flex-start",children:[e.jsxs(Me,{color:k,children:[h>=0?h:`+${-h}`,e.jsx(P,{})]}),e.jsxs(l,{d:"column",gap:"4px",ai:"flex-start",children:[e.jsx(f,{size:3,align:"left",children:A}),e.jsx(v,{children:_})]})]}),w?e.jsx(he,{currentPage:y,type:p?"horizontal":"vertical",qr_current:r,qr_total:g}):e.jsx(me,{color:"green",size:"40px"})]}),e.jsxs(Te,{children:[x&&e.jsx(T,{text:"Квитанция на оплату",background:"transparent",textColor:b.grey.main,align:"left",width:"fit-content",href:x,padding:"0"}),e.jsxs(We,{children:[e.jsx(F,{onClick:z,text:"Реквизиты договора",background:"transparent",textColor:b.grey.main,width:"fit-content",padding:"0",align:"left"}),e.jsx(ae,{right:"-25px",top:"10px",visible:d,pulsing:!0,children:"1"})]})]})]})]})},Ne=t=>`${t.charAt(0).toUpperCase()}${t.slice(1)}`,Ee=(t,n)=>{const i=Number(n==null?void 0:n.sum)||Number(n==null?void 0:n.sum_price),s=Number(n==null?void 0:n.sum_pay);if(!i&&i!==0||!s&&s!==0)return"-";const o=i-s;return o<=0?"Оплачено":`Ожидает оплаты (${oe(String(o),"rub")})`},Ue=()=>[{title:"Год",field:"year",width:"25%",render:(t,n)=>{const i=n==null?void 0:n.date_start;return i?new Date(i).toLocaleDateString("ru",{year:"numeric"}):"-"}},{title:"Месяц",field:"month",width:"25%",render:(t,n)=>{const i=n==null?void 0:n.date_start;if(!i)return"-";const s=new Date(i).toLocaleDateString("ru",{month:"long"});return Ne(s)}},{title:"Оплатить до",field:"date_plan",type:"date",width:"25%",sort:!0},{title:"Статус",field:"sum_pay",width:"25%",render:Ee}],Oe=({paygraph:t})=>e.jsxs(l,{d:"column",children:[e.jsx(f,{icon:e.jsx(X,{}),size:4,align:"left",bottomGap:!0,children:"График платежей"}),e.jsx(le,{columns:Ue(),data:t??[],maxOnPage:3})]}),D=({contracts:t})=>t?e.jsx(ue,{children:t.map((n,i)=>{const{agreements:s,number:o,type:c,paygraph:d,payments:x}=n,r=c==="Общежитие",g=s.filter(p=>new Date(p==null?void 0:p.date)>new Date("2022-02-1"));return e.jsxs(Y.Fragment,{children:[t.length!==1&&e.jsxs(l,{gap:"8px",children:[e.jsx(l,{w:"fit-content",children:e.jsxs(f,{size:3,align:"left",children:["Договор:"," "]})}),e.jsxs(v,{fontSize:"1rem",children:[c,", ",o]})]}),e.jsx(Be,{data:n,isDormitory:r}),e.jsx(ve,{payments:x??[]}),e.jsx(Oe,{paygraph:d}),e.jsx(ze,{isDormitory:r,electronicAgreements:g}),i!==t.length-1&&e.jsx(O,{margin:"0",width:"100%"})]},o)})}):null,qe=()=>{const{data:t,loading:n,error:i}=E.usePayments(),s=t!=null&&t.dormitory.length&&(t!=null&&t.education.length)?"both":t!=null&&t.dormitory.length?"dormitory":t!=null&&t.education.length?"education":"none";return m.useEffect(()=>{ce.evokePopUpMessage({type:"alert",time:1e4,message:"В связи с техническими работами отображение данных по произведенным оплатам может быть не полным"})},[]),e.jsx(de,{loading:n,load:U.getPaymentsFx,error:i,data:t,noDataCheck:!(t!=null&&t.dormitory.length),children:e.jsxs(xe,{children:[s==="none"&&e.jsx(B,{text:"Нет данных"}),s==="both"&&e.jsx(pe,{pages:[{title:"Общежитие",content:e.jsx(D,{contracts:t==null?void 0:t.dormitory})},{title:"Обучение",content:e.jsx(D,{contracts:t==null?void 0:t.education})}],appearance:!1}),s==="dormitory"&&e.jsx(D,{contracts:t==null?void 0:t.dormitory}),s==="education"&&e.jsx(D,{contracts:t==null?void 0:t.education})]})})};export{qe as default};
