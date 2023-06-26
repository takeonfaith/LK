import{j as t,be as ge,bf as me,bg as fe,a1 as ve,_ as je,N as Se,bh as be,B as J,O as ye,k as we,bi as ke,s as m,r as h,b1 as Ce,x as Fe,aQ as K,aH as Ae,aI as D,$ as Ee}from"./vendor-292fea82.js";import{bk as X,bl as z,aL as ee,V as F,T as A,Q as te,al as Re,bo as Le,H as se,az as C,bp as ze,bq as Te,br as B,bs as Me,bt as Pe,bu as Ie,au as _e,bv as V,bw as Oe,bx as _,x as E,E as ie,v as O,M as P,a9 as M,g as $e,ax as I,S as T,by as De,bz as Be,bA as Ve,f as $,bB as N,bC as Ne,C as U,bD as Ue,bE as ne,h as ae,aI as Ge,ar as G,bF as He,aM as We,aj as qe,P as Ze,a8 as Qe}from"./index-ddc703de.js";import{C as Ye}from"./customize-leftside-bar-item-22ffd699.js";import{A as Je}from"./index-6ca148c3.js";import"./index.esm-5250088b.js";const Ke=({theme:e,scheduledLightTheme:i,lightThemeRange:s,email:n,avatar:a,homepage:l,phone:r,menu:o,settings:d})=>({"settings-appearance":[{title:"Тема",fields:[{title:"Темная тема",type:"toggle",value:e.value,disabled:i,action:e.action}]}],"settings-customize-menu":[{title:"Настройка меню",fields:[{title:"",type:"choices",value:o.value,additionalActions:o.additionalActions}]}],"settings-home-page":[{title:"Разделы быстрого доступа",fields:[{title:"",type:"choices",value:l.sections.value,additionalActions:l.sections.additionalActions,action:()=>null}]},{title:"Виджеты",fields:[{title:"Расписание",type:"toggle",value:l.widgets.schedule.value,action:l.widgets.schedule.action},{title:"Оплаты",type:"toggle",value:l.widgets.payments.value,action:l.widgets.payments.action}]}],"settings-personal":[{title:"Данные",fields:[{title:"Фото профиля",type:"photo",value:a.value,icon:a.icon,description:a.description,action:()=>null},{title:"Email",type:"text",value:n.value,icon:t.jsx(ge,{}),description:n.description,action:n.action,additionalActions:n.additionalActions},{title:"Телефон",type:"tel",value:r.value,icon:t.jsx(me,{}),description:r.description,action:r.action,additionalActions:r.additionalActions},{title:"Пароль",type:"password",value:"",icon:t.jsx(fe,{}),description:"Смена пароля",action:()=>null}]},{title:"Действия",fields:[{title:"Выйти из аккаунта",type:"display",icon:t.jsx(ve,{}),action:()=>X.evokeConfirm({message:"Вы точно хотите выйти из аккаунта?",onConfirm:z.logout})}]}],"settings-notifications":[{title:"Получать уведомления",fields:[{id:"all",type:"toggle",title:"Все",icon:t.jsx(je,{}),value:d.all,subfields:[{id:"messages",title:"Сообщения",type:"toggle",value:d.messages,icon:t.jsx(Se,{})},{id:"newVersion",title:"Новая версия",type:"toggle",value:d.newVersion,icon:t.jsx(be,{})},{id:"schedule",title:"Расписание",type:"toggle",value:d.schedule,icon:t.jsx(J,{})},{id:"news",title:"Новости",type:"toggle",value:d.news,icon:t.jsx(ye,{})},{id:"applications",title:"Цифровые сервисы",type:"toggle",value:d.applications,icon:t.jsx(we,{})},{id:"doclist",title:"Документы для ознакомления",type:"toggle",value:d.doclist,icon:t.jsx(ke,{})}]}]}]}),Xe=m.div`
    display: flex;
    flex-direction: column;
    gap: 8px;

    @media (min-width: 1001px) {
        width: 600px;
        height: 600px;
    }
`,H=({title:e,enabledList:i,requiredList:s,add:n,remove:a})=>{const{settings:l}=ee.useSettings(),r=F.useMenu(),{visibleRoutes:o}=F.useMenu(),[d,u]=h.useState(null),c=r[i];if(!c||!o)return null;const f=p=>{c[p]?a(p,l,s):n(p,l,Object.keys(c).length,s)};return t.jsxs(Xe,{children:[t.jsx(A,{size:2,align:"left",bottomGap:!0,children:e}),t.jsx(te,{placeholder:"Поиск",whereToSearch:o,searchEngine:Re,setResult:u}),Object.values(d??o).map((p,v)=>h.createElement(Ye,{...p,key:v,chosen:!!c[p.id],switchMenuItem:f}))]})},et=e=>!e||e.length===0?"Не указан":e,tt=()=>{const{theme:e,switchTheme:i}=Le(),{data:{user:s}}=se.useUser(),{open:n}=C(),{leftsideBarRoutes:a,homeRoutes:l}=F.useMenu(),{settings:r}=ee.useSettings(),[o,d]=h.useState(null),{property:u}=r["settings-notifications"],{property:c}=r["settings-appearance"],{widgetPayment:f,widgetSchedule:p}=r["settings-home-page"].property,v=(s==null?void 0:s.user_status)==="staff"?ze:Te;return h.useEffect(()=>{d({...Ke({scheduledLightTheme:c.scheduledLightTheme,lightThemeRange:c.lightThemeRange,settings:u,isStudent:(s==null?void 0:s.user_status)==="stud",menu:{value:a,additionalActions:{onAdd:()=>n(t.jsx(H,{title:"Настройка меню",enabledList:"leftsideBarRoutes",requiredList:v,remove:B,add:Me})),onRemoveOne:x=>B(x,r,v)}},theme:{value:e==="dark",action:x=>i(x)},phone:{value:(s==null?void 0:s.phone)??"",description:s==null?void 0:s.phone,action:x=>Pe(x??""),additionalActions:{onSuccess:x=>{z.update({key:"phone",value:x})}}},email:{value:(s==null?void 0:s.email)??"",description:et(s==null?void 0:s.email),action:x=>Ie(x??""),additionalActions:{onSuccess:x=>{z.update({key:"email",value:x})}}},avatar:{value:s==null?void 0:s.avatar,description:"Смена аватара",icon:t.jsx(_e,{avatar:s==null?void 0:s.avatar,name:(s==null?void 0:s.fullName)??"",width:"22px",height:"22px",marginRight:"0"})},homepage:{sections:{value:l,additionalActions:{onRemoveOne:x=>V(x,r),onAdd:()=>n(t.jsx(H,{title:"Добавить страницы",enabledList:"homeRoutes",requiredList:[],remove:V,add:Oe}))}},widgets:{schedule:{value:p,action:x=>_.updateSetting({nameSettings:"settings-home-page",nameParam:"widgetSchedule",value:!x})},payments:{value:f,action:x=>_.updateSetting({nameSettings:"settings-home-page",nameParam:"widgetPayment",value:!x})}}}})})},[e,l,p,f,Object.keys(a??{}).length,Object.keys(l??{}).length]),o},le=m.section`
    width: 100%;
    background: var(--schedule);
    border-radius: var(--brLight);
    padding: 0px;
    overflow: hidden;
    margin-bottom: 16px;

    h4 {
        opacity: 0.9;
    }
`,st=m.div`
    padding: 12px;
    width: 100%;
`,it=({list:e})=>{const{allRoutes:i}=F.useMenu();return i?t.jsx(le,{children:t.jsxs(E,{children:[(e==null?void 0:e.length)===0&&t.jsx(ie,{text:"Не удалось ничего найти"}),e==null?void 0:e.map((s,n)=>t.jsx(st,{children:t.jsx(O,{fontSize:"0.85rem",children:s.map((a,l)=>t.jsxs(t.Fragment,{children:[a,l!==s.length-1&&" > "]}))})},n))]})}):null},nt=m.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    padding: 0px 12px;
    min-height: 45px;
    border-radius: var(--brLight);

    &:hover {
        background: var(--mild-theme);
    }

    .icon {
        width: 22px;
        height: 22px;
        margin-right: 10px;
        display: flex;
        justify-content: center;
        align-items: center;

        svg {
            width: 22px;
            height: 22px;
            opacity: 0.4;
        }
    }

    span {
        opacity: 0.8;
    }
`,at=m.div`
    width: 100%;
    display: flex;
    flex-direction: column;

    b {
        opacity: 0.8;
        font-weight: 500;
        font-size: 0.85rem;
    }

    span {
        opacity: 0.6;
        font-size: 0.8rem;
        margin-top: 2px;
    }
`,L=({title:e,description:i,onClick:s,icon:n,rightIcon:a,editable:l=!0})=>t.jsxs(nt,{onClick:s,children:[n&&t.jsx("div",{className:"icon",children:n}),t.jsxs(at,{children:[t.jsx("b",{children:e}),t.jsx("span",{children:i})]}),a??(l?t.jsx(Ce,{}):null)]}),oe=(e,i)=>{const s=e.find(({test:l})=>!l(...i)),n=!s,a=!i.find(l=>l.length===0)&&n;return{allChecked:n,isActive:a,validationError:s}},lt=m.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    @media (min-width: 1001px) {
        width: 350px;
    }
`,ot=m.div`
    display: flex;
    align-items: center;
    gap: 8px;
`,rt=[{text:"Необходимо изменить строку",test:(e,i)=>e!==i}],ct=e=>{const{value:i,message:s,action:n,type:a,title:l,additionalActions:r}=e,[o,d]=h.useState(i),[u,c]=h.useState(!1),[f,p]=h.useState(""),[v,x]=h.useState(!1),{close:j}=C(),{isActive:y,validationError:g}=oe(rt,[o,i]),k=async()=>{var b;try{c(!0),await(n==null?void 0:n(o)),(b=r==null?void 0:r.onSuccess)==null||b.call(r,o),c(!1),x(!0)}catch(w){p("Возникла ошибка: "+w.message),c(!1)}};return h.useEffect(()=>{d(i),p(null)},[l]),t.jsxs(lt,{children:[t.jsx(A,{size:3,align:"left",children:l}),s&&t.jsx(P,{type:s.type??"",title:s.title,children:s.body}),t.jsx(P,{type:"failure",visible:!!f,children:f}),t.jsx(M,{value:o,setValue:d,type:a,mask:!0}),t.jsx($e,{}),t.jsxs(ot,{children:[t.jsx(I,{text:"Отменить",width:"100%",onClick:j}),t.jsx(T,{isLoading:u,completed:v,isActive:y,text:"Обновить",action:k,setCompleted:x,popUpFailureMessage:g==null?void 0:g.text,height:"38px"})]})]},l)},W=e=>{const{open:i}=C(),s=()=>{i(t.jsx(ct,{...e}))};return t.jsx(L,{...e,onClick:s})},dt=({title:e,action:i,value:s,subfields:n,icon:a,settingsName:l,disabled:r})=>{const[o,d]=h.useState(s),u=c=>{i==null||i(c),d(c)};return h.useEffect(()=>{d(s)},[s]),t.jsxs(t.Fragment,{children:[t.jsx(De,{disabled:r,title:e,state:o,action:u,icon:a}),n&&o&&t.jsx(he,{settingsName:l,fields:n,asChild:!0})]})},ut=e=>t.jsx(L,{...e,rightIcon:t.jsx(Fe,{})}),ht=e=>{const i=()=>{var s;return(s=e==null?void 0:e.action)==null?void 0:s.call(e)};return t.jsx(L,{...e,editable:!1,onClick:i})},q=e=>{const i=h.useState(!1),s=h.useState(!1),n=h.useState(null);return{loading:i,error:n,completed:s,isActive:e}},xt=m.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    @media (min-width: 1001px) {
        width: 400px;
    }
`,pt=e=>{const{data:{user:i}}=se.useUser();if(!i)return null;const[s,n]=h.useState([]),[a,l]=h.useState(null),{completed:[r,o],loading:[d,u],error:[c,f],isActive:p}=q(!!(i!=null&&i.avatar)),{completed:[v,x],loading:[j,y],error:[g,k],isActive:b}=q(s.length===1);h.useEffect(()=>{const S=new FileReader;S.onloadend=()=>{l(S.result)},s[0]?S.readAsDataURL(s[0]):l(null)},[s]);const w=async()=>{try{y(!0),x(!1);const S=await N(s[0]);if(S.data.result!=="ok")throw new Error(S.data.errors);x(!0),y(!1),n([]),z.update({key:"avatar",value:a})}catch(S){k("Ошибка: "+S.message)}},xe=async()=>{try{u(!0),o(!1);const S=await N();if(S.data.result!=="ok")throw new Error(S.data.errors);o(!0),u(!1),z.update({key:"avatar",value:""})}catch(S){f("Ошибка: "+S.message)}},pe=()=>X.evokeConfirm({message:"Вы уверены, что хотите удалить фото профиля?",onConfirm:xe});return t.jsxs(xt,{children:[t.jsx(Be,{avatar:a??(i==null?void 0:i.avatar),name:(i==null?void 0:i.fullName)??"",isMe:!1,type:i==null?void 0:i.user_status,noInfo:!0}),t.jsx(P,{type:"failure",visible:!!g||!!c,children:g||c}),t.jsx(Ve,{files:s,maxFiles:1,formats:["image/jpeg"],setFiles:n,isActive:!0}),t.jsxs(E,{direction:"horizontal",children:[(i==null?void 0:i.avatar)&&t.jsx(T,{isLoading:d,background:$.red.main,completed:r,isActive:p,text:"Удалить фото профиля",action:pe,setCompleted:o}),t.jsx(T,{isLoading:j,completed:v,isActive:b,text:"Обновить",popUpSuccessMessage:"Фото профиля успешно обновлено!",popUpFailureMessage:"Фото не загружено",action:w,setCompleted:x})]})]})},gt=e=>{const{open:i}=C(),s=()=>{i(t.jsx(pt,{...e}))};return t.jsx(L,{...e,onClick:s})},mt=e=>{const{value:i,additionalActions:s}=e,[n,a]=h.useState(i),l=o=>{var d;return(d=s==null?void 0:s.onRemoveOne)==null?void 0:d.call(s,o)},r=()=>{var o;return(o=s==null?void 0:s.onAdd)==null?void 0:o.call(s)};return t.jsx(Ne,{list:n,onRemoveOne:l,onAddElement:r,setList:a})},Z=e=>e<=9?"0"+e:e,Q=(e,i)=>e/i*100,ft=m.div`
    display: flex;
    flex-direction: column;
    position: relative;

    .values {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    input[type='range'] {
        width: 100%;
    }

    .slider {
        position: relative;
        width: 100%;
        height: 20px;
    }

    .slider__track,
    .slider__range {
        border-radius: 3px;
        height: 5px;
        position: absolute;
    }

    .slider__track {
        background-color: var(--almostTransparent);
        width: 100%;
        z-index: 1;
    }

    .slider__range {
        width: calc(${({width:e})=>e+"%"} - 5px);
        background-color: var(--blue);
        left: ${({left:e})=>e+"%"};
        z-index: 2;
    }

    .thumb,
    .thumb::-webkit-slider-thumb {
        -webkit-appearance: none;
        -webkit-tap-highlight-color: transparent;
    }

    .thumb {
        pointer-events: none;
        position: absolute;
        height: 0;
        width: 200px;
        outline: none;
    }

    .thumb--zindex-3 {
        z-index: 3;
    }

    .thumb--zindex-4 {
        z-index: 4;
    }

    .thumb::-webkit-slider-thumb {
        background-color: var(--blue);
        filter: brightness(1.1);
        border: none;
        border-radius: 50%;
        cursor: pointer;
        height: 18px;
        width: 18px;
        margin-top: 4px;
        pointer-events: all;
        position: relative;
    }
`,vt=({range:e,step:i,initialValues:s,onSave:n,onChange:a,valueTransform:l})=>{const[r,o]=s,[d,u]=e,[c,f]=h.useState(r),[p,v]=h.useState(o),x=l?l(c):c,j=l?l(p):p,y=()=>{n([c,p])},g=k=>k===1?b=>{const w=Math.min(+b.target.value,p-i);f(w),b.target.value=w.toString()}:b=>{const w=Math.max(+b.target.value,c+i);v(w),b.target.value=w.toString()};return h.useEffect(()=>{a==null||a([c,p])},[c,p]),t.jsxs(ft,{left:Q(c,u-d),width:Q(p-c,u-d),children:[t.jsxs("div",{className:"inputs",children:[t.jsx("input",{type:"range",className:"thumb thumb--zindex-3",min:d,max:u,step:i,value:c,onChange:g(1),onMouseUp:y}),t.jsx("input",{type:"range",className:"thumb thumb--zindex-4",min:d,max:u,step:i,value:p,onChange:g(2),onMouseUp:y})]}),t.jsxs("div",{className:"slider",children:[t.jsx("div",{className:"slider__track"}),t.jsx("div",{className:"slider__range"})]}),t.jsxs("div",{className:"values",children:[t.jsx("span",{children:x}),t.jsx("span",{children:j})]})]})},jt=m.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`,St=e=>{const{value:i,action:s}=e,{close:n}=C(),[a,l]=i,[r,o]=h.useState(a),[d,u]=h.useState(l),[c,f]=h.useState(!1),p=()=>{s==null||s([r,d]),n()},v=j=>Z(Math.floor(j/60))+":"+Z(j%60),x=j=>{o(j[0]),u(j[1])};return t.jsxs(jt,{children:[t.jsx(vt,{range:[0,1440],step:60,valueTransform:v,initialValues:[a,l],onSave:()=>null,onChange:x}),t.jsxs(E,{gap:8,direction:"horizontal",horizontalAlign:"right",children:[t.jsx(I,{text:"Отменить",width:"120px",onClick:n}),t.jsx(T,{width:"120px",isLoading:!1,completed:c,text:"Сохранить",action:p,setCompleted:f})]})]})},bt=e=>{const{open:i}=C(),s=()=>{i(t.jsx(St,{...e}))};return t.jsx(L,{...e,editable:!1,onClick:s,icon:t.jsx(J,{})})},re=e=>e===0?"grey":e<=40?"red":e<=60?"orange":e<=80?"blue":"green",ce={small:4,middle:9,big:14},yt=m.div`
    width: 100%;
    h5 {
        color: ${({coloring:e,value:i})=>e?$[re(i)].main:"var(--text)"};
    }
`,wt=m.div`
    width: ${({value:e})=>e+"%"};
    border-radius: var(--brLight);
    height: ${({size:e})=>ce[e]}px;
    transition: 0.2s;
    background: ${({coloring:e,value:i})=>e?$[re(i)].main:"var(--schedule)"};
`,kt=m.div`
    width: 100%;
    border-radius: var(--brLight);
    background-color: var(--scheduleBg);
    height: ${({size:e})=>ce[e]}px;
    overflow: hidden;
`,Ct=({title:e,value:i,size:s="middle",coloring:n=!0})=>t.jsxs(yt,{value:i,coloring:n,children:[t.jsx(A,{size:5,align:"left",visible:!!e,bottomGap:!0,children:e}),t.jsx(kt,{size:s,children:t.jsx(wt,{size:s,coloring:n,value:i})})]}),R=7,de=new RegExp(`(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{${R+3},})`),ue=new RegExp(`((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{${R},}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{${R+3},}))`),Y=[{text:`Минимальная длина ${R} знаков`,test:e=>e.length>=R},{text:"Не повторяет старый пароль",test:(e,i,s)=>s.length>0&&e.length>0&&e!==s},{text:"Состоит из латинских заглавных, строчных букв, цифр",test:e=>ue.test(e)},{text:"Пароли совпадают",visible:!1,test:(e,i)=>e.length>0&&i.length>0&&e===i}],Ft=[{text:"Содержит спец. знаки (например, !, $, #, %)",test:e=>de.test(e)}],At=e=>{const i="0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";let s="";for(let n=0;n<e;n++)s+=i.charAt(Math.floor(Math.random()*i.length));return s},Et=e=>de.test(e)?{title:"надежный",value:100}:ue.test(e)?{title:"средний",value:60}:e.length===0?{title:"нет",value:0}:e.length<R?{title:"очень слабый",value:10}:{title:"слабый",value:20},Rt=m.div`
    display: flex;
    gap: 20px;
    align-items: center;
    flex-direction: column;

    @media (min-width: 1001px) {
        flex-direction: row;
        width: 620px;
        height: 400px;
    }
`,Lt=m.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 10px;
    min-height: 100%;
    max-width: 280px;
    width: 100%;
`,zt=m.div`
    height: 100%;
    background: var(--theme-mild-xxl);
    border-radius: var(--brLight);
    padding: 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`,Tt=m.div`
    height: 100%;
    gap: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
`,Mt=m.div`
    display: flex;
    align-items: center;
    gap: 8px;
`,Pt=m.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    transform: scale(0.9);
`,It=m.div`
    height: 350px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    justify-content: center;
    align-items: center;

    @media (max-width: 1001px) {
        height: fit-content;
    }
`,_t=()=>{const[e,i]=h.useState(""),[s,n]=h.useState(""),[a,l]=h.useState(""),[r,o]=h.useState(null),[d,u]=h.useState(!1),[c,f]=h.useState(!1),{isActive:p,validationError:v}=oe(Y,[s,a,e]),x=Et(s),j=()=>{const g=At(12);n(g),l(g)},y=async()=>{try{u(!0);const g=await Ue(e,s);if(g.data.result!=="ok")throw new Error(g.data.errors);f(!0),u(!1),n(""),l(""),i("")}catch(g){const k=g.message??g;o("Возникла ошибка: "+k),u(!1)}};return t.jsxs(Rt,{children:[t.jsxs(zt,{children:[t.jsxs(Tt,{children:[t.jsx(A,{size:3,align:"left",children:"Смена пароля"}),t.jsx(O,{width:"100%",align:"left",fontSize:"0.9rem",children:"Обязательные требования"}),t.jsx(E,{gap:8,direction:"vertical",children:Y.map(g=>t.jsx(U,{fontSize:"0.85rem",setChecked:()=>null,text:g.text,checked:g.test(s,a,e)},g.text))}),t.jsx(O,{width:"100%",align:"left",fontSize:"0.9rem",children:"Необязательные требования"}),t.jsx(E,{gap:8,direction:"vertical",children:Ft.map(g=>t.jsx(U,{fontSize:"0.85rem",setChecked:()=>null,text:g.text,checked:g.test(s,a,e)},g.text))})]}),!p&&t.jsx(I,{width:"100%",text:"Сгенерировать пароль",onClick:j,background:"var(--scheduleBg)"}),p&&t.jsxs(Pt,{children:[t.jsx(Je,{size:"40px"}),t.jsx(A,{size:5,children:"Отличный пароль!"})]})]}),t.jsxs(Lt,{children:[t.jsxs(It,{children:[t.jsx(P,{title:"Ошибка",type:"failure",visible:!!r,children:r}),t.jsx(M,{type:"password",title:"Введите старый пароль",placeholder:"Введите пароль",value:e,setValue:i,required:!0}),t.jsx(M,{type:"password",title:"Придумайте пароль",placeholder:"Введите пароль",value:s,setValue:n,required:!0}),t.jsx(M,{type:"password",title:"Повторите пароль",placeholder:"Введите тот же пароль",value:a,setValue:l,required:!0}),t.jsx(Ct,{value:x.value,size:"small",title:`Сложность пароля: ${x.title}`})]}),t.jsxs(Mt,{children:[t.jsx(I,{text:"Отменить",width:"100%"}),t.jsx(T,{isLoading:d,completed:c,text:"Обновить",popUpFailureMessage:`Требование к паролю: ${v==null?void 0:v.text}`,action:y,setCompleted:f,height:"38px",isActive:p})]})]})]})},Ot=e=>{const{open:i}=C(),s=()=>i(t.jsx(_t,{}));return t.jsx(L,{...e,onClick:s})},$t=m.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
    position: relative;
    margin-left: ${({asChild:e})=>e?"16px":"0"};

    &::before {
        content: '';
        position: absolute;
        height: calc(100% - 12px);
        width: 2px;
        background-color: var(--almostTransparentOpposite);
        display: ${({asChild:e})=>e?"block":"none"};
        left: -2px;
        opacity: 0.4;
        top: 6px;
    }
`,Dt=e=>({toggle:t.jsx(dt,{...e}),photo:t.jsx(gt,{...e}),choices:t.jsx(mt,{...e}),text:t.jsx(W,{...e}),display:t.jsx(ht,{...e}),interval:t.jsx(bt,{...e}),tel:t.jsx(W,{...e}),password:t.jsx(Ot,{...e}),link:t.jsx(ut,{...e})}),he=({fields:e,settingsName:i,asChild:s=!1})=>{const n=a=>!a||!i?()=>null:l=>{console.log(l),_.updateSetting({nameSettings:i,nameParam:a,value:l})};return t.jsx($t,{asChild:s,children:e.map(a=>{const l=a.action??n(a.id),{type:r,visible:o=!0}=a;if(o)return Dt({...a,action:l,settingsName:i})[r]})})},Bt=m.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
    flex-direction: column;
    display: flex;

    @media (max-width: 768px) {
        display: ${({open:e})=>e?"flex":"none"};
    }
`,Vt=m.div`
    width: 100%;
    height: 100%;
    overflow-y: auto;
`,Nt=m.div`
    padding: 12px;

    @media (max-width: 768px) {
        padding: 0;
    }
`,Ut=({searchValue:e,searchResult:i,settingsConfig:s})=>{var l,r;const{allRoutes:n}=F.useMenu(),a=(l=K(ne))==null?void 0:l.params;return!n||s===void 0?null:t.jsx(Bt,{open:!!(a!=null&&a.id),children:t.jsx(Vt,{children:t.jsxs(Ae,{children:[e&&t.jsx(it,{list:i}),(r=Object.keys(s??{}))==null?void 0:r.map(o=>{const d=s[o],{path:u}=n[o];return t.jsx(D,{path:u,children:t.jsx(E,{direction:"vertical",gap:12,children:!e&&d.map(({title:c,fields:f})=>t.jsxs(le,{children:[t.jsx(Nt,{children:t.jsx(A,{size:4,align:"left",children:c})}),t.jsx(he,{fields:f,settingsName:o})]},c))})},u)}),t.jsx(D,{path:"/",children:t.jsx(ae,{height:"100%",children:t.jsx(ie,{text:"Ничего не выбрано",image:t.jsx(Ge,{color:"grey",size:50,children:t.jsx(Ee,{})})})})})]})})})},Gt=(e,i,s)=>{const n=[];if(!s)return n;let a=0,l=!1;for(const r in i){l=!1,n.push([]);const o=s[r].title.split(". ")[1];n[a].push(o);const d=i[r];for(const u of d)for(const c of u.fields)G(c.title).includes(G(e))&&(l?(n.push([...n[a].slice(0,n[a].length-1),c.title]),a++):(n[a].push(u.title),n[a].push(c.title)),l=!0);l?a++:n.pop()}return n},Ht=m(He)`
    height: 100%;
    z-index: 1;
    padding-top: 0;
    padding: 8px;
    border-radius: var(--brLight);
    box-shadow: var(--schedule-shadow);
    margin-right: 20px;
    background: var(--form);

    @media (max-width: 600px) {
        padding: 0;
        transition: 0.2s;
        margin-right: 0;
        box-shadow: none;
        width: ${({open:e})=>e?"100%":"0"};
        max-width: ${({open:e})=>e?"100%":"0"};
        min-width: 0;
        display: ${({open:e})=>e?"flex":"none"};
    }
`,Wt=({settingsConfig:e,setSearchResult:i,setSearchValue:s})=>{var o,d;const{allRoutes:n}=F.useMenu(),{isMobile:a}=We(),l=(o=K(ne))==null?void 0:o.params,r=(u,c)=>Gt(u,c,n);return n?t.jsxs(Ht,{width:"250px",open:!(l!=null&&l.id),children:[t.jsx(te,{whereToSearch:e,searchEngine:r,placeholder:"Поиск",setExternalValue:s,setResult:i,validationCheck:!0,loadingOnType:!0}),(d=Object.keys(e??{}))==null?void 0:d.map(u=>{if(a&&u!=="settings-customize-menu"||!a)return h.createElement(qe,{...n[u],title:n[u].title.slice(11,n[u].title.length),key:u,orientation:"horizontal",shadow:!1})})]}):null},Kt=()=>{const[e,i]=h.useState(""),[s,n]=h.useState(null),a=tt();return a===null?null:t.jsx(ae,{padding:"10px",children:t.jsx(Ze,{children:t.jsxs(Qe,{ai:"flex-start",children:[t.jsx(Wt,{settingsConfig:a,setSearchResult:n,setSearchValue:i}),t.jsx(Ut,{searchValue:e,searchResult:s,settingsConfig:a})]})})})};export{Kt as default};
