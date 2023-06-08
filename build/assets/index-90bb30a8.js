import{s as p,j as e,r as m,G as U,J as O,K as B,aH as C,c as H,R as N,aU as R,F as y}from"./vendor-1714f5a3.js";import{l as h,ar as Q,h as S,v as W,ai as A,f as J,L as j,T as x,ay as b,S as k,aC as L,w as K,aO as V,M as g,aP as X,g as F,W as Y}from"./index-a5eecfde.js";import{Q as D}from"./qr-code-15664bc4.js";import{u as Z}from"./index-82e0eef8.js";import{B as d}from"./index-06cfa6e7.js";p.div`
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
`;const M=p.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    align-items: center;
    flex-direction: column;
    gap: 10px;

    .blocks-wrapper {
        display: flex;
        width: 100%;
        justify-content: center;

        & > * + * {
            margin-left: 10px;
        }
    }

    .payment-block-content {
        display: flex;
        align-content: center;
        justify-content: center;
        height: 100%;

        & > * + * {
            margin-left: 20px;
        }
    }

    @media (max-width: 1400px) {
        align-items: center;
        justify-content: center;
        .blocks-wrapper {
            width: 100%;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            border-top: 1px solid var(--almostTransparent);
            margin-top: 20px;
            padding-top: 20px;

            & > * + * {
                margin-left: 0px;
                margin-top: 10px;
            }
        }
    }

    @media (max-width: 1225px) {
        .blocks-wrapper {
            max-width: 600px;
        }
        .payment-block-content {
            flex-direction: column;
            & > * + * {
                margin-left: 0px;
                margin-top: 10px;
            }
        }
    }
`,ee=p.div`
    width: 100%;
    padding: 15px;
    /* border-radius: var(--brLight); */
    background: var(--theme);
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid var(--almostTransparent);

    .payment-item-date {
        font-weight: 500;
    }

    .payment-item-money {
        color: var(--green);
        font-weight: 600;
    }
`,te=({date:t,value:s})=>e.jsxs(ee,{children:[e.jsx("span",{className:"payment-item-date",children:h(t)}),e.jsx("span",{className:"payment-item-money",children:s})]}),P=p.span`
    color: var(--red);
    font-weight: bold;
`,se=({sum:t,allPayments:s,endDate:n,short:i=!1})=>i?e.jsxs("p",{children:["К выплате до конца действия договора",e.jsxs(P,{children:[" ",(t-s).toFixed(2)," руб."]})]}):e.jsxs("p",{children:["К выплате до конца действия договора (до ",h(n)," г.):",e.jsxs(P,{children:[" ",(t-s).toFixed(2)," руб."]})," (без учета индексации)"]}),ne=p.div`
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
`,$=({endDate:t,sum:s,allPayments:n,bill:i,balanceCurrDate:l,qr_current:a,qr_total:c})=>{const{open:o}=Q(),r=m.useCallback(()=>{o(e.jsx(S,{pages:[{title:"Текущая задолженность",content:e.jsx(D,{qrCode:a})},{title:"Общая задолженность",content:e.jsx(D,{qrCode:c})}]}))},[o]);return e.jsx(ne,{paymentDifference:l,children:e.jsxs("div",{children:[e.jsxs("p",{children:[l<0?"Переплата":"Долг"," на ",h(new Date().toString())," ",e.jsxs("span",{className:"debt-or-overpay",children:[Math.abs(l)," руб."]})]}),e.jsx("br",{}),e.jsx(se,{sum:s,allPayments:n,endDate:t}),e.jsx("br",{}),e.jsxs(W,{gap:8,scroll:!1,children:[e.jsx(A,{onClick:r,text:"Оплатить через QR-код Сбербанк онлайн",width:"100%",background:J.green.main,textColor:"#fff"}),i&&e.jsx(j,{text:"Сформировать квитанцию на оплату",background:"transparent",textColor:"var(--grey)",align:"center",width:"100%",href:i,onClick:()=>null})]})]})})},u=t=>Number(t.replace(/,/g,".").replace(/\s/g,"")),_=p.div`
    width: 100%;
    min-width: 380px;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;

    .all-payments {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-weight: bold;
        color: var(--blue);
        margin-bottom: 10px;
    }

    .payment-list {
        margin-bottom: 10px;
        width: 100%;
        overflow-y: auto;
        height: 200px;
        padding-right: 5px;
        box-shadow: var(--schedule-shadow);
        border-radius: calc(var(--brSemi) - 7px);

        & > * + * {
            margin-top: 5px;
        }
    }

    @media (max-width: 1400px) {
        min-width: 330px;
    }

    @media (max-width: 1225px) {
        max-width: 100%;
    }

    @media (max-width: 1000px) {
        min-width: auto;
        max-width: auto;

        .payment-list {
            & > * + * {
                margin-left: 0;
                margin-top: 5px;
            }
        }
    }
`,z=({payments:t})=>t.length?e.jsxs(_,{children:[e.jsxs("div",{className:"all-payments",children:[e.jsx("span",{children:"Поступившие платежи"}),e.jsxs("span",{children:[t==null?void 0:t.reduce((s,n)=>s+u(n.value),0).toFixed(1)," ","руб."]})]}),e.jsx("div",{className:"payment-list",children:t.map((s,n)=>m.createElement(te,{...s,key:n}))})]}):e.jsx(_,{children:e.jsx(x,{size:4,children:"Нет платежей"})}),ie=p.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
    height: 100%;
    justify-content: space-between;

    .contract-info {
        display: flex;
        flex-direction: column;
    }

    p {
        margin: 4px 0;
    }
`,I=({contract:t})=>{const[s,n]=m.useState(!1),[i,l]=m.useState(!1),[a,c]=m.useState(!1),{error:o}=b.usePayments(),r=[{text:"Номер договора: ",info:(t==null?void 0:t.number)??""},{text:"Начало действия: ",info:h(t==null?void 0:t.startDate)},{text:"Действует до: ",info:h(t==null?void 0:t.endDatePlan)},{text:"Заказчик: ",info:(t==null?void 0:t.contragent)||"Московский политех"},{text:"Обучающийся: ",info:(t==null?void 0:t.student)??""},{text:"Сумма к оплате: ",info:(t==null?void 0:t.sum)??""}],v=()=>{navigator.clipboard.writeText((t==null?void 0:t.number)??""),n(!0)},w=()=>{t&&(l(!0),L.signContractFx(t.id),l(!1),c(!0))};return e.jsxs(ie,{children:[e.jsx("div",{className:"contract-info",children:r.map((f,E)=>e.jsxs("p",{children:[e.jsx("b",{children:f.text}),e.jsxs("span",{children:[" ",f.info]})]},E))}),(t==null?void 0:t.can_sign)&&e.jsx(k,{text:"Подписать",buttonSuccessText:"Подписан",action:w,isLoading:i,completed:a,repeatable:!1,popUpFailureMessage:o??"Не удалось подписать договор",setCompleted:c,popUpSuccessMessage:"Договор подписан",isActive:!0,pulsing:!0}),!(t!=null&&t.can_sign)&&e.jsx(k,{text:"Скопировать номер договора",action:v,isLoading:!1,completed:s,setCompleted:n,popUpSuccessMessage:"Номер договора скопирован в буфер",isActive:!0})]})},T=({columns:t,paygraph:s})=>e.jsx(K,{columns:t,data:s,maxOnPage:8}),le=p.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    user-select: none;
    cursor: pointer;
    position: sticky;
    top: -2px;
    background: var(--form);
    z-index: 3;
    width: 100%;
    padding: 0 10px;
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
        }

        svg {
            min-width: 16px;
            margin-right: 7px;
        }
        /* white-space: nowrap; */
    }
`,ae=({title:t,confirmed:s,setOpenArea:n})=>e.jsxs(le,{onClick:()=>n(i=>!i),children:[e.jsxs("div",{className:"title-and-icon",children:[s?e.jsx(U,{style:{color:"var(--green)"}}):e.jsx(O,{style:{color:"var(--red)"}}),e.jsx("b",{children:t})]}),e.jsx(A,{icon:e.jsx(B,{}),onClick:()=>null,background:"transparent"})]}),re=p.div`
    display: flex;
    flex-direction: column;
    transition: 0.2s;
    width: 100%;
    border-radius: var(--brLight);
    overflow: hidden;
    background: var(--form);
    .inputs {
        padding: ${({open:t})=>t?"15px":"0"};
        display: flex;
        flex-direction: column;
        row-gap: 15px;
        transition: 0.2s height, 0.2s opacity, 0.2s visibility, 0.2s padding;
        height: ${({height:t,open:s})=>s?t+"px":"0"};
        opacity: ${({open:t})=>t?"1":"0"};
        visibility: ${({open:t})=>t?"visible":"hidden"};
    }

    @media (max-width: 500px) {
        .inputs {
            height: ${({height:t,open:s})=>s?t+63+"px":"0"};
        }
    }
`,pe=t=>{const{children:s,title:n,height:i,confirmed:l=!1,show:a=!1}=t,[c,o]=m.useState(a);return e.jsxs(re,{height:i,open:c,children:[e.jsx(ae,{title:n,confirmed:l,setOpenArea:o}),e.jsx("div",{className:"inputs",children:s})]})},xe=p.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    row-gap: 10px;

    .block {
        width: 49%;
        min-width: 320px;
        display: flex;
        flex-direction: column;
        gap: 0.625rem;

        .text {
            text-align: center;
        }
    }
`,ce=({data:t})=>{const{id:s,signed_user:n,name:i,can_sign:l,date:a}=t,{handleSubmit:c,loading:o,done:r,completed:v,setCompleted:w}=Z({isDone:n,submit:()=>V(s)}),f=n||r?200:100;return e.jsxs(pe,{height:f,title:i,confirmed:n,children:[`${i} - ${h(a)}`,e.jsxs(xe,{children:[e.jsxs("div",{className:"block",children:[r&&e.jsxs("p",{className:"text",children:["Дата подписания: ",h(t.signed_user_date||new Date),","," ",t.signed_user_time||`${new Date().getHours()}:${new Date().getMinutes()}`]}),e.jsx(j,{href:t.file,onClick:()=>null,text:"Скачать документ",width:"100%",icon:e.jsx(C,{})}),e.jsx(g,{type:"success",title:"Успешно отправлено",icon:e.jsx(H,{}),align:"center",visible:r})]}),!r&&e.jsx("div",{className:"block",children:e.jsx(k,{text:r?"Подписано":"Подписать",action:c,isLoading:o,completed:v,isDone:r,setCompleted:w,isActive:!r&&l,popUpFailureMessage:l?"Согласие уже подписано":"Необходимо сначала подписать соглашение об электронном взаимодейтсвии",popUpSuccessMessage:"Согласие успешно подписано"})})]})]})},q=({electronicAgreements:t=[]})=>e.jsx(W,{width:"100%",children:t.map((s,n)=>e.jsx(ce,{data:s},n))}),oe=t=>`${t.charAt(0).toUpperCase()}${t.slice(1)}`,G=(t,s)=>{const n=Number(s==null?void 0:s.sum)||Number(s==null?void 0:s.sum_price),i=Number(s==null?void 0:s.sum_pay);if(!n&&n!==0||!i&&i!==0)return"-";const l=n-i;return l<=0?"Оплачено":`Ожидает оплаты (${X(String(l),"rub")})`},de=()=>[{title:"Год",field:"year",width:"15%",render:(t,s)=>{const n=s==null?void 0:s.date_start;return n?new Date(n).toLocaleDateString("ru",{year:"numeric"}):"-"}},{title:"Месяц",field:"month",width:"20%",render:(t,s)=>{const n=s==null?void 0:s.date_start;if(!n)return"-";const i=new Date(n).toLocaleDateString("ru",{month:"long"});return oe(i)}},{title:"Оплатить до",field:"date_plan",type:"date",width:"25%",sort:!0},{title:"Статус",field:"sum_pay",render:G}],he=()=>{const{data:t}=b.usePayments();return t!=null&&t.dormitory?e.jsx(M,{children:t.dormitory.map((s,n)=>{var i;return e.jsxs(N.Fragment,{children:[e.jsx(g,{type:"alert",title:"Внимание",icon:e.jsx(R,{}),maxWidth:"1190px",children:"В связи с техническими работами отображение данных по произведенным оплатам может быть не полным"}),e.jsxs(g,{type:"info",title:"Информация",icon:e.jsx(y,{}),gap:"12px",maxWidth:"1190px",children:[e.jsxs("p",{children:["По возникновении технических проблем при подписании договоров и дополнительных соглашений в Личном кабинете просим обращаться на почту"," ",e.jsx("a",{href:"mailto:info@mospolytech.ru",children:"info@mospolytech.ru"})]}),e.jsx("p",{children:"Обращаем Ваше внимание на то, что произведенная оплата отображается в этом разделе не сразу, а обычно в течение 3-4 дней со дня платежа."})]}),e.jsxs("div",{className:"blocks-wrapper",children:[e.jsxs(d,{orientation:"vertical",maxWidth:"800px",noAppearanceInMobile:!0,children:[e.jsx(x,{size:2,align:"left",bottomGap:!0,children:"Оплата за общежитие"}),e.jsxs("div",{className:"payment-block-content",children:[e.jsx(z,{payments:(s==null?void 0:s.payments)??[]}),e.jsx($,{balanceCurrDate:u((s==null?void 0:s.balance_currdate)??"0"),bill:s==null?void 0:s.bill,startDate:s==null?void 0:s.startDate,endDate:s==null?void 0:s.endDatePlan,sum:Number(s==null?void 0:s.sum)??0,allPayments:((i=s==null?void 0:s.payments)==null?void 0:i.reduce((l,a)=>l+u(a.value),0))??0,qr_current:s.qr_current,qr_total:s.qr_total})]})]}),e.jsxs(d,{orientation:"vertical",maxWidth:"380px",noAppearanceInMobile:!0,children:[e.jsxs(x,{size:2,align:"left",bottomGap:!0,width:"100%",children:["Реквизиты договора",e.jsx(j,{onClick:()=>null,href:s.file??"",icon:e.jsx(C,{}),width:"40px"})]}),e.jsx(I,{contract:s})]})]},n),e.jsx("div",{className:"blocks-wrapper",children:e.jsxs(d,{orientation:"vertical",maxWidth:"1190px",height:"fit-content",noAppearanceInMobile:!0,children:[e.jsx(x,{size:2,align:"left",bottomGap:!0,children:"График платежей"}),e.jsx(T,{columns:de(),paygraph:(s==null?void 0:s.paygraph)??[]})]})}),!!s.agreements&&!!s.agreements.length&&e.jsx("div",{className:"blocks-wrapper",children:e.jsxs(d,{orientation:"vertical",maxWidth:"1190px",height:"fit-content",noAppearanceInMobile:!0,children:[e.jsx(x,{size:2,align:"left",bottomGap:!0,children:"Доп. соглашение"}),e.jsx(q,{electronicAgreements:s.agreements.filter(l=>new Date(l==null?void 0:l.date)>new Date("2022-02-1"))})]})}),n!==t.dormitory.length-1&&e.jsx(F,{margin:"20px 0"})]},s.number)})}):null},me=()=>[{title:"Год",field:"year",search:!0},{title:"Семестр",field:"semestr",width:"110px",sort:!0},{title:"Оплатить до",field:"date_plan",type:"date"},{title:"Статус",field:"sum_pay",render:G}],ge=()=>{const{data:t}=b.usePayments();return t!=null&&t.education?e.jsx(M,{children:t==null?void 0:t.education.map((s,n)=>{var i;return e.jsxs(N.Fragment,{children:[e.jsxs(g,{type:"info",title:"Информация",icon:e.jsx(y,{}),gap:"12px",maxWidth:"1190px",children:[e.jsxs("p",{children:["По возникновении технических проблем при подписании договоров и дополнительных соглашений в Личном кабинете просим обращаться на почту"," ",e.jsx("a",{href:"mailto:info@mospolytech.ru",children:"info@mospolytech.ru"})]}),e.jsx("p",{children:"Обращаем Ваше внимание на то, что произведенная оплата отображается в этом разделе не сразу, а обычно в течение 3-4 дней со дня платежа."})]}),e.jsxs("div",{className:"blocks-wrapper",children:[e.jsxs(d,{orientation:"vertical",maxWidth:"800px",children:[e.jsx(x,{size:2,align:"left",bottomGap:!0,children:"Оплата за образование"}),e.jsxs("div",{className:"payment-block-content",children:[e.jsx(z,{payments:(s==null?void 0:s.payments)??[]}),e.jsx($,{balanceCurrDate:u((s==null?void 0:s.balance_currdate)??"0"),startDate:(s==null?void 0:s.startDate)??"",endDate:(s==null?void 0:s.endDatePlan)??"",sum:Number(s==null?void 0:s.sum)??0,allPayments:((i=s==null?void 0:s.payments)==null?void 0:i.reduce((l,a)=>l+u(a.value),0))??0,qr_current:s.qr_current,qr_total:s.qr_total,bill:s.bill})]})]}),e.jsxs(d,{orientation:"vertical",maxWidth:"380px",children:[e.jsxs(x,{size:2,align:"left",bottomGap:!0,width:"100%",children:["Реквизиты договора",e.jsx(j,{onClick:()=>null,href:s.file??"",icon:e.jsx(C,{}),width:"40px"})]}),e.jsx(I,{contract:s})]})]},n),e.jsx("div",{className:"blocks-wrapper",children:e.jsxs(d,{orientation:"vertical",maxWidth:"1190px",height:"fit-content",children:[e.jsx(x,{size:2,align:"left",bottomGap:!0,children:"График платежей"}),e.jsx(T,{columns:me(),paygraph:(s==null?void 0:s.paygraph)??[]})]})}),s.agreements&&!!s.agreements.length&&e.jsx("div",{className:"blocks-wrapper",children:e.jsxs(d,{orientation:"vertical",maxWidth:"1190px",height:"fit-content",children:[e.jsx(x,{size:2,align:"left",bottomGap:!0,children:"Доп. соглашение"}),e.jsx(g,{type:"info",title:"Информация",icon:e.jsx(y,{}),children:"Подписание дополнительных соглашений к 3-сторонним договорам в Личном кабинете не предусмотрено"}),e.jsx(q,{electronicAgreements:s.agreements.filter(l=>new Date(l==null?void 0:l.date)>new Date("2022-02-01"))})]})}),n!==t.education.length-1&&e.jsx(F,{margin:"20px 0"})]},s.number)})}):null},we=()=>{var i;const{data:t,loading:s,error:n}=b.usePayments();return e.jsx(Y,{loading:s,load:L.getPaymentsFx,error:n,data:t&&(!!(t!=null&&t.dormitory.length)||!!(t!=null&&t.education.length)),noDataCheck:!(t!=null&&t.dormitory.length),children:t!=null&&t.dormitory.length||t!=null&&t.education.length?e.jsx(S,{pages:[{title:"Общежитие",condition:!!((i=t==null?void 0:t.dormitory)!=null&&i.length),content:e.jsx(he,{})},{title:"Обучение",condition:!!(t!=null&&t.education.length),content:e.jsx(ge,{})}],sliderWidth:"600px",appearance:!1,currentPage:t!=null&&t.dormitory.length?0:t!=null&&t.education.length?1:0}):e.jsx(e.Fragment,{})})};export{we as default};
