import{r as c,s as d,j as e,aH as m,c as f}from"./vendor-0c76c893.js";import{av as g,a as j,x as b,L as h,B as y,ar as w,M as k,S as v,l as M,ai as S}from"./index-1840b39c.js";function C({isDone:s,submit:t,setData:o}){const[l,i]=c.useState(!1),[u,a]=c.useState(!1),[x,n]=c.useState(s??!1),p=async()=>{try{i(!0),await t(),i(!1),a(!0),n(!0)}catch{i(!1),j.evokePopUpMessage({message:"Не удалось подписать",type:"failure"})}};return c.useEffect(()=>{o&&g().then(r=>o(r.data[0]))},[]),{done:x,open,loading:l,completed:u,setCompleted:a,handleSubmit:p}}const D=d.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    row-gap: 10px;
    text-align: center;

    @media (min-width: 1001px) {
        max-width: 300px;
    }
`,E=()=>{const{data:{user:s}}=b.useUser();return e.jsx(D,{children:(s==null?void 0:s.user_status)==="stud"?e.jsxs(e.Fragment,{children:["Для изменения данных Вам необходимо обратиться в отделение центра по работе со студентами (многофункциональный центр)",e.jsx(h,{onClick:()=>null,href:"https://mospolytech.ru/obuchauschimsya/mnogofunkcionalnyy-centr/",text:"Контакты центра по работе со студентами",width:"100%"})]}):e.jsxs(e.Fragment,{children:["Для изменения данных Вам необходимо обратиться в отдел кадров по телефону",e.jsx("br",{}),e.jsx("b",{children:"+7 (495) 223-05-23 доб.1130"}),"или написать письмо на",e.jsx("br",{}),e.jsx("b",{children:"ok@mospolytech.ru"})]})})},B=d(y)`
    .info-text {
        transition: 0.2s;
        opacity: ${({showInfoText:s})=>s?1:0};
        visibility: ${({showInfoText:s})=>s?"visible":"hidden"};
        height: ${({showInfoText:s})=>s?"100%":"0"};
    }

    p {
        a {
            color: var(--blue);
        }

        b {
            opacity: 0.8;
        }
    }

    @media (max-width: 1000px) {
        width: 95%;
        .center-section {
            box-shadow: none;
        }
    }
`,L=({children:s,data:t,setData:o,submit:l,isDone:i=!1})=>{const{open:u}=w(),{handleSubmit:a,loading:x,done:n,completed:p,setCompleted:r}=C({isDone:i,submit:l,setData:o});return t?e.jsxs(B,{showInfoText:!t.status&&!n,maxWidth:"500px",orientation:"vertical",height:"fit-content",gap:"10px",children:[e.jsx(h,{href:t.file,onClick:()=>null,text:"Скачать согласие",width:"100%",icon:e.jsx(m,{})}),e.jsx(k,{type:"success",icon:e.jsx(f,{}),title:"Успешно подписано",visible:t.status||n,align:"center"}),e.jsx("div",{className:"info-text",children:s}),!t.status&&!n&&e.jsx(v,{text:!t.status&&!n?"Подписать":"Подписано",action:a,isLoading:x,completed:p,isDone:n||t.status,setCompleted:r,isActive:!t.status&&!n,popUpFailureMessage:"Согласие уже подписано",popUpSuccessMessage:"Согласие успешно подписано"}),(t.status||n)&&e.jsxs("p",{children:["Дата подписания: ",M(t.date||new Date),","," ",t.time||`${new Date().getHours()}:${new Date().getMinutes()}`,e.jsx("br",{}),t.fio]}),!t.status&&!n&&e.jsx(S,{onClick:()=>u(e.jsx(E,{})),text:"Заметили ошибку в личных данных?",background:"transparent",textColor:"#b1b1b1"})]}):null};export{L as E,C as u};
