import{s as l,r as a,j as e,aH as P,l as O,q as W}from"./vendor-0c76c893.js";import{x as D,l as y,L as k,f as L,S as F,Z as h,u as A,a as R,_ as B,v as _,E as z,W as M,r as U,T as J,a0 as V,y as H,h as $}from"./index-a7bcef13.js";import{B as q}from"./index-80b0a22e.js";const G=(t,s,i)=>{const r={};let n=[];const c=o=>{if("document"in o){const{viewed:v,name:p}=o,g=(p==null?void 0:p.includes(t))||!t.length;return s==="all"&&g?!0:!v&&s!=="all"&&g}const{viewed:u,post:d,event:f}=o,x=(f==null?void 0:f.includes(t))||(d==null?void 0:d.includes(t))||!t.length;return s==="all"&&x?!0:!u&&s!=="all"&&x};return Object.entries(i).map(([o,u])=>{n=[],u.map(d=>{c(d)&&n.push(d)}),r[o]=n}),r},w=(t,s,i)=>{switch(t){case"Female":return i;default:return s}},Z=l.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    border-radius: var(--brLight);
    background: var(--form);
    box-shadow: var(--schedule-shadow);
    row-gap: 20px;
    min-height: 70px;
`,K=l.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`,Q=l.div`
    display: flex;
    gap: 10px;
    align-self: end;
`,X=l.div`
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
`,Y=l.div`
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 16px;
`,ee=({data:t})=>{const{data:{user:s}}=D.useUser(),[i,r]=a.useState(!1),[n,c]=a.useState(!1);return e.jsxs(Z,{children:[e.jsxs(K,{children:[e.jsx(X,{children:t.event||t.post}),t.startDate&&e.jsxs(Y,{children:["Период: ",y(t.startDate,"numeric")," - ",y(t.endDate,"numeric")]})]}),e.jsxs(Q,{children:[t.file&&e.jsx(k,{href:t.file,onClick:()=>null,text:"Скачать",width:"150px",icon:e.jsx(P,{}),height:"35px",minHeight:"30px",textColor:"white",background:L.blue.light1}),e.jsx(F,{text:t.viewed?w(s==null?void 0:s.sex,"Ознакомлен","Ознакомлена"):"Ознакомиться",action:()=>{r(!0),h.viewPersonalNotificationsFx(t.id),r(!1),c(!0)},height:"35px",width:"150px",buttonSuccessText:w(s==null?void 0:s.sex,"Ознакомлен","Ознакомлена"),isLoading:i,completed:n,setCompleted:c,isActive:!0,isDone:t.viewed,repeatable:!1,popUpFailureMessage:"Вы уже ознакомились"})]})]})},te=l.div`
    width: 100%;
    padding: 20px;
    border-radius: var(--brLight);
    background: var(--form);
    box-shadow: var(--schedule-shadow);
    row-gap: 20px;
    min-height: 70px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`,ie=l.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
`,se=l.div`
    display: flex;
    gap: 8px;
    margin-top: 5px;
    max-width: 400px;

    @media (max-width: 600px) {
        max-width: 100%;
        width: 100%;
    }
`,ne=l.div`
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
`,oe=({data:t})=>{const{data:{user:s}}=D.useUser(),[i,r]=a.useState(!1),[n,c]=a.useState(!1),o=()=>{try{r(!0),h.viewPersonalNotificationsFx(t.id),r(!1),c(!0)}catch{R.evokePopUpMessage({message:"Не удалось отправить данные",type:"failure"})}};return e.jsxs(te,{children:[e.jsxs(ie,{children:[e.jsx(ne,{children:t.name}),t.date&&e.jsxs(A,{children:["Дата: ",y(t.date,"numeric")]})]}),e.jsxs(se,{children:[t.link&&e.jsx(k,{href:t.link,onClick:()=>null,text:"Подробнее",width:"100%",icon:e.jsx(O,{}),height:"35px",minHeight:"30px",textColor:"white",background:L.blue.light1}),e.jsx(F,{text:t.viewed?w(s==null?void 0:s.sex,"Ознакомлен","Ознакомлена"):"Ознакомиться",action:o,height:"35px",width:"100%",buttonSuccessText:w(s==null?void 0:s.sex,"Ознакомлен","Ознакомлена"),isLoading:i,completed:n,setCompleted:c,isActive:!0,isDone:t.viewed,repeatable:!1,popUpFailureMessage:"Вы уже ознакомились"})]})]})},S=({listNotification:t})=>{const s=B.useType();return e.jsx(_,{direction:"vertical",gap:8,scroll:!1,children:t.length?t.map(i=>s==="notifications"?e.jsx(ee,{data:i},i.id):e.jsx(oe,{data:i},i.id)):e.jsx(z,{text:"По заданным параметрам документ не найден"})})},ae=l.div`
    display: flex;
    justify-content: center;
    gap: 10px;
    width: 100%;
`,le=l.div`
    .slider-list-notification {
        margin-top: 12px;
        width: 100%;
    }
`,re=[{id:"all",title:"Все"},{id:"current",title:"Актуальные"}],ce=[{id:"all",title:"Все"},{id:"vacation",title:"Отпуск"},{id:"fire",title:"Увольнение"},{id:"businesstrip",title:"Командировка"}],he=({title:t,docsType:s})=>{const{data:i,error:r}=B.usePersonalNotifications(),[n,c]=a.useState(),[o,u]=a.useState("docs"),[d,f]=a.useState(""),[x,v]=a.useState({id:"all",title:"Все"}),[p,g]=a.useState({id:"all",title:"Все"});a.useEffect(()=>{c(JSON.parse(JSON.stringify(i)))},[i]),a.useEffect(()=>{i&&c(G(d,(x==null?void 0:x.id)??"",JSON.parse(JSON.stringify(i))))},[x,d]),a.useEffect(()=>{h.setNotificationsType(o),h.getPersonalNotificationsFx()},[o]);const I=m=>{u(m)},b=a.useMemo(()=>{const m=(i==null?void 0:i.vacation)||[],T=(i==null?void 0:i.businesstrip)||[],C=(i==null?void 0:i.fire)||[];switch(p==null?void 0:p.id){case"all":return[...m,...T,...C].sort((j,N)=>{const E=j.notificationType==="docs"?new Date(j.date):new Date(j.startDate||"");return(N.notificationType==="docs"?new Date(N.date):new Date(N.startDate||"")).getTime()<E.getTime()?1:-1});case"vacation":return m;case"fire":return C;case"businesstrip":return T;default:return[]}},[i,p]);return e.jsx(M,{load:()=>{h.setNotificationsType(o),h.getPersonalNotificationsFx()},error:r,data:n,children:e.jsx(le,{children:e.jsx(U,{padding:"0 0 10px 0",children:e.jsxs(q,{maxWidth:"725px",orientation:"vertical",gap:"10px",height:"fit-content",noAppearanceInMobile:!0,children:[e.jsx(J,{size:2,align:"left",children:t}),e.jsxs(ae,{children:[e.jsx(V,{value:d,setValue:f,placeholder:"Поиск",leftIcon:e.jsx(W,{})}),e.jsx(H,{items:o==="notifications"?ce:re,selected:o==="notifications"?p:x,setSelected:o==="notifications"?g:v})]}),s&&(n!=null&&n.docs)?e.jsx(S,{listNotification:n==null?void 0:n.docs}):e.jsx($,{onChangePage:I,pages:[{id:"docs",title:"Приказы",content:(n==null?void 0:n.docs)&&e.jsx(S,{listNotification:n==null?void 0:n.docs})},{id:"notifications",title:"Кадровые уведомления",content:b.length?e.jsx(S,{listNotification:b}):void 0},{title:"Надбавки",condition:void 0,content:void 0}],className:"slider-list-notification"})]})})})})};export{he as N};
