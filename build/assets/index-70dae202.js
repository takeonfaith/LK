import{s as g,aI as X,j as e,r as d,b9 as ue,ba as xe,bb as pe,ab as ge,aX as me,w as fe,ag as ve,n as je,v as Se,ay as we,az as O,a8 as ye}from"./vendor-0c76c893.js";import{z as $,aY as be,J as C,aZ as Y,H as J,aW as K,aX as z,af as ee,T as E,aQ as ke,x as te,ar as k,a_ as Ce,a$ as Ee,b0 as D,b1 as Fe,b2 as Ae,b3 as Re,ao as ze,aj as B,ak as Le,b4 as N,v as F,E as se,u as _,M as I,a0 as T,g as Me,ai as L,S as M,b5 as Te,b6 as Ie,b7 as Pe,f as ne,b8 as U,b9 as _e,C as V,ba as Oe,r as ie,ae as $e,aU as De,B as Be}from"./index-1840b39c.js";import{P as Ne}from"./page-link-2d3b3c59.js";import"./found-pages-76fae3b7.js";import{C as Ue}from"./customize-leftside-bar-item-369223ba.js";import{s as Ve}from"./search-f0f20efc.js";import{A as We}from"./index-8642c4bc.js";import{P as He}from"./index-5c0d4f40.js";import"./page-link-content-a074f185.js";import"./get-correct-word-form-c0a854e8.js";import"./get-short-string-60b0c4d4.js";import"./index.esm-aaf37469.js";const Ge=(t,n,s)=>{const i=[];if(!s)return i;let a=0,l=!1;for(const c in n){l=!1,i.push([]);const o=s[c].title.split(". ")[1];i[a].push(o);const x=n[c];for(const h of x)for(const u of h.fields)$(u.title).includes($(t))&&(l?(i.push([...i[a].slice(0,i[a].length-1),u.title]),a++):(i[a].push(h.title),i[a].push(u.title)),l=!0);l?a++:i.pop()}return i},Ze=g(be)`
    height: 100%;
    padding: 16px;
    box-shadow: 2px 0 3px -3px var(--grey);
    z-index: 1;

    @media (max-width: 600px) {
        transition: 0.2s;
        box-shadow: none;
        width: ${({open:t})=>t?"100%":"0"};
        max-width: ${({open:t})=>t?"100%":"0"};
        min-width: 0;
        display: ${({open:t})=>t?"flex":"none"};
    }
`,qe=({setSearchValue:t,setSearchResult:n,settingsConfig:s})=>{var c;const{allRoutes:i}=C.useMenu(),a=(c=X(Y))==null?void 0:c.params,l=(o,x)=>Ge(o,x,i);return i?e.jsxs(Ze,{width:"290px",open:!(a!=null&&a.id),children:[e.jsx(J,{whereToSearch:s,placeholder:"Поиск настроек",searchEngine:l,setExternalValue:t,setResult:n,validationCheck:!0,loadingOnType:!0}),Object.keys(s).map(o=>d.createElement(Ne,{...i[o],title:i[o].title.slice(11,i[o].title.length),key:o,orientation:"horizontal",shadow:!1}))]}):null},Qe=({theme:t,email:n,avatar:s,homepage:i,phone:a,menu:l})=>({"settings-appearance":[{title:"Тема",fields:[{title:"Темная тема",type:"toggle",value:t.value,action:t.action}]}],"settings-customize-menu":[{title:"Настройка меню",fields:[{title:"",type:"choices",value:l.value,additionalActions:l.additionalActions}]}],"settings-home-page":[{title:"Разделы быстрого доступа",fields:[{title:"",type:"choices",value:i.sections.value,additionalActions:i.sections.additionalActions,action:()=>null}]},{title:"Виджеты",fields:[{title:"Расписание",type:"toggle",value:i.widgets.schedule.value,action:i.widgets.schedule.action},{title:"Оплаты",type:"toggle",value:i.widgets.payments.value,action:i.widgets.payments.action}]}],"settings-personal":[{title:"Данные",fields:[{title:"Фото профиля",type:"photo",value:s.value,icon:s.icon,description:s.description,action:()=>null},{title:"Email",type:"text",value:n.value,icon:e.jsx(ue,{}),description:n.description,action:n.action,additionalActions:n.additionalActions},{title:"Телефон",type:"tel",value:a.value,icon:e.jsx(xe,{}),description:a.description,action:a.action,additionalActions:a.additionalActions},{title:"Пароль",type:"password",value:"",icon:e.jsx(pe,{}),description:"Смена пароля",action:()=>null}]},{title:"Действия",fields:[{title:"Выйти из аккаунта",type:"display",icon:e.jsx(ge,{}),action:()=>K.evokeConfirm({message:"Вы точно хотите выйти из аккаунта?",onConfirm:z.logout})}]}]}),Xe=g.div`
    display: flex;
    flex-direction: column;
    gap: 8px;

    @media (min-width: 1001px) {
        width: 600px;
        height: 600px;
    }
`,W=({title:t,enabledList:n,requiredList:s,add:i,remove:a})=>{const{settings:l}=ee.useSettings(),c=C.useMenu(),{visibleRoutes:o}=C.useMenu(),[x,h]=d.useState(null),u=c[n];if(!u||!o)return null;const m=r=>{u[r]?a(r,l,s):i(r,l,Object.keys(u).length,s)};return e.jsxs(Xe,{children:[e.jsx(E,{size:2,align:"left",bottomGap:!0,children:t}),e.jsx(J,{placeholder:"Поиск",whereToSearch:o,searchEngine:Ve,setResult:h}),Object.values(x??o).map((r,f)=>d.createElement(Ue,{...r,key:f,chosen:!!u[r.id],switchMenuItem:m}))]})},Ye=t=>!t||t.length===0?"Не указан":t,Je=()=>{const{theme:t,switchTheme:n}=ke(),{data:{user:s}}=te.useUser(),{open:i}=k(),{leftsideBarRoutes:a,homeRoutes:l}=C.useMenu(),{settings:c}=ee.useSettings(),[o,x]=d.useState(null),{widgetPayment:h,widgetSchedule:u}=c["settings-home-page"].property,m=(s==null?void 0:s.user_status)==="staff"?Ce:Ee;return d.useEffect(()=>{x({...Qe({menu:{value:a,additionalActions:{onAdd:()=>i(e.jsx(W,{title:"Настройка меню",enabledList:"leftsideBarRoutes",requiredList:m,remove:D,add:Fe})),onRemoveOne:r=>D(r,c,m)}},theme:{value:t==="dark",action:r=>n(!r)},phone:{value:(s==null?void 0:s.phone)??"",description:s==null?void 0:s.phone,action:r=>Ae(r??""),additionalActions:{onSuccess:r=>{z.update({key:"phone",value:r})}}},email:{value:(s==null?void 0:s.email)??"",description:Ye(s==null?void 0:s.email),action:r=>Re(r??""),additionalActions:{onSuccess:r=>{z.update({key:"email",value:r})}}},avatar:{value:s==null?void 0:s.avatar,description:"Смена аватара",icon:e.jsx(ze,{avatar:s==null?void 0:s.avatar,name:(s==null?void 0:s.fullName)??"",width:"22px",height:"22px",marginRight:"0"})},homepage:{sections:{value:l,additionalActions:{onRemoveOne:r=>B(r,c),onAdd:()=>i(e.jsx(W,{title:"Добавить страницы",enabledList:"homeRoutes",requiredList:[],remove:B,add:Le}))}},widgets:{schedule:{value:u,action:r=>N.updateSetting({nameSettings:"settings-home-page",nameParam:"widgetSchedule",value:!r})},payments:{value:h,action:r=>N.updateSetting({nameSettings:"settings-home-page",nameParam:"widgetPayment",value:!r})}}}})})},[t,l,u,h,Object.keys(a??{}).length,Object.keys(l??{}).length]),o},ae=g.section`
    width: 100%;
    background: var(--schedule);
    border-radius: var(--brLight);
    padding: 0px;
    overflow: hidden;

    h4 {
        opacity: 0.9;
    }
`,Ke=g.div`
    padding: 12px;
    width: 100%;
`,et=({list:t})=>{const{allRoutes:n}=C.useMenu();return n?e.jsx(ae,{children:e.jsxs(F,{children:[(t==null?void 0:t.length)===0&&e.jsx(se,{text:"Не удалось ничего найти"}),t==null?void 0:t.map((s,i)=>e.jsx(Ke,{children:e.jsx(_,{fontSize:"0.85rem",children:s.map((a,l)=>e.jsxs(e.Fragment,{children:[a,l!==s.length-1&&" > "]}))})},i))]})}):null},tt=g.div`
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
`,st=g.div`
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
`,R=({title:t,description:n,onClick:s,icon:i,rightIcon:a,editable:l=!0})=>e.jsxs(tt,{onClick:s,children:[i&&e.jsx("div",{className:"icon",children:i}),e.jsxs(st,{children:[e.jsx("b",{children:t}),e.jsx("span",{children:n})]}),a??(l?e.jsx(me,{}):null)]}),le=(t,n)=>{const s=t.find(({test:l})=>!l(...n)),i=!s,a=!n.find(l=>l.length===0)&&i;return{allChecked:i,isActive:a,validationError:s}},nt=g.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    @media (min-width: 1001px) {
        width: 350px;
    }
`,it=g.div`
    display: flex;
    align-items: center;
    gap: 8px;
`,at=[{text:"Необходимо изменить строку",test:(t,n)=>t!==n}],lt=t=>{const{value:n,message:s,action:i,type:a,title:l,additionalActions:c}=t,[o,x]=d.useState(n),[h,u]=d.useState(!1),[m,r]=d.useState(""),[f,v]=d.useState(!1),{close:b}=k(),{isActive:y,validationError:p}=le(at,[o,n]),S=async()=>{var w;try{u(!0),await(i==null?void 0:i(o)),(w=c==null?void 0:c.onSuccess)==null||w.call(c,o),u(!1),v(!0)}catch(P){r("Возникла ошибка: "+P.message),u(!1)}};return d.useEffect(()=>{x(n),r(null)},[l]),e.jsxs(nt,{children:[e.jsx(E,{size:3,align:"left",children:l}),s&&e.jsx(I,{type:s.type??"",title:s.title,children:s.body}),e.jsx(I,{type:"failure",visible:!!m,children:m}),e.jsx(T,{value:o,setValue:x,type:a,mask:!0}),e.jsx(Me,{}),e.jsxs(it,{children:[e.jsx(L,{text:"Отменить",width:"100%",onClick:b}),e.jsx(M,{isLoading:h,completed:f,isActive:y,text:"Обновить",action:S,setCompleted:v,popUpFailureMessage:p==null?void 0:p.text,height:"38px"})]})]},l)},H=t=>{const{open:n}=k(),s=()=>{n(e.jsx(lt,{...t}))};return e.jsx(R,{...t,onClick:s})},ot=({title:t,action:n,value:s,subfields:i})=>{const[a,l]=d.useState(s),c=o=>{n==null||n(a),l(o)};return d.useEffect(()=>{l(s)},[s]),e.jsxs(e.Fragment,{children:[e.jsx(Te,{title:t,state:a,action:c}),i&&a&&e.jsx(ce,{fields:i,asChild:!0})]})},rt=t=>e.jsx(R,{...t,rightIcon:e.jsx(fe,{})}),ct=t=>{const n=()=>{var s;return(s=t==null?void 0:t.action)==null?void 0:s.call(t)};return e.jsx(R,{...t,editable:!1,onClick:n})},G=t=>{const n=d.useState(!1),s=d.useState(!1),i=d.useState(null);return{loading:n,error:i,completed:s,isActive:t}},dt=g.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    @media (min-width: 1001px) {
        width: 400px;
    }
`,ht=t=>{const{data:{user:n}}=te.useUser();if(!n)return null;const[s,i]=d.useState([]),[a,l]=d.useState(null),{completed:[c,o],loading:[x,h],error:[u,m],isActive:r}=G(!!(n!=null&&n.avatar)),{completed:[f,v],loading:[b,y],error:[p,S],isActive:w}=G(s.length===1);d.useEffect(()=>{const j=new FileReader;j.onloadend=()=>{l(j.result)},s[0]?j.readAsDataURL(s[0]):l(null)},[s]);const P=async()=>{try{y(!0),v(!1);const j=await U(s[0]);if(j.data.result!=="ok")throw new Error(j.data.errors);v(!0),y(!1),i([]),z.update({key:"avatar",value:a})}catch(j){S("Ошибка: "+j.message)}},de=async()=>{try{h(!0),o(!1);const j=await U();if(j.data.result!=="ok")throw new Error(j.data.errors);o(!0),h(!1),z.update({key:"avatar",value:""})}catch(j){m("Ошибка: "+j.message)}},he=()=>K.evokeConfirm({message:"Вы уверены, что хотите удалить фото профиля?",onConfirm:de});return e.jsxs(dt,{children:[e.jsx(Ie,{avatar:a??(n==null?void 0:n.avatar),name:(n==null?void 0:n.fullName)??"",isMe:!1,type:n==null?void 0:n.user_status,noInfo:!0}),e.jsx(I,{type:"failure",visible:!!p||!!u,children:p||u}),e.jsx(Pe,{files:s,maxFiles:1,formats:["image/jpeg"],setFiles:i,isActive:!0}),e.jsxs(F,{direction:"horizontal",children:[(n==null?void 0:n.avatar)&&e.jsx(M,{isLoading:x,background:ne.red.main,completed:c,isActive:r,text:"Удалить фото профиля",action:he,setCompleted:o}),e.jsx(M,{isLoading:b,completed:f,isActive:w,text:"Обновить",popUpSuccessMessage:"Фото профиля успешно обновлено!",popUpFailureMessage:"Фото не загружено",action:P,setCompleted:v})]})]})},ut=t=>{const{open:n}=k(),s=()=>{n(e.jsx(ht,{...t}))};return e.jsx(R,{...t,onClick:s})},xt=t=>{const{value:n,additionalActions:s}=t,[i,a]=d.useState(n),l=o=>{var x;return(x=s==null?void 0:s.onRemoveOne)==null?void 0:x.call(s,o)},c=()=>{var o;return(o=s==null?void 0:s.onAdd)==null?void 0:o.call(s)};return e.jsx(_e,{list:i,onRemoveOne:l,onAddElement:c,setList:a})},Z=t=>t<=9?"0"+t:t,q=(t,n)=>t/n*100,pt=g.div`
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
        width: calc(${({width:t})=>t+"%"} - 5px);
        background-color: var(--blue);
        left: ${({left:t})=>t+"%"};
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
`,gt=({range:t,step:n,initialValues:s,onSave:i,valueTransform:a})=>{const[l,c]=s,[o,x]=t,[h,u]=d.useState(l),[m,r]=d.useState(c),f=a?a(h):h,v=a?a(m):m,b=()=>{i([h,m])},y=p=>p===1?S=>{const w=Math.min(+S.target.value,m-n);u(w),S.target.value=w.toString()}:S=>{const w=Math.max(+S.target.value,h+n);r(w),S.target.value=w.toString()};return e.jsxs(pt,{left:q(h,x-o),width:q(m-h,x-o),children:[e.jsxs("div",{className:"inputs",children:[e.jsx("input",{type:"range",className:"thumb thumb--zindex-3",min:o,max:x,step:n,value:h,onChange:y(1),onMouseUp:b}),e.jsx("input",{type:"range",className:"thumb thumb--zindex-4",min:o,max:x,step:n,value:m,onChange:y(2),onMouseUp:b})]}),e.jsxs("div",{className:"slider",children:[e.jsx("div",{className:"slider__track"}),e.jsx("div",{className:"slider__range"})]}),e.jsxs("div",{className:"values",children:[e.jsx("span",{children:f}),e.jsx("span",{children:v})]})]})},mt=g.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`,ft=t=>{const{value:n,action:s}=t,{close:i}=k(),[a,l]=n,[c,o]=d.useState(!1),x=()=>{s==null||s()},h=u=>Z(Math.floor(u/60))+":"+Z(u%60);return e.jsxs(mt,{children:[e.jsx(gt,{range:[0,1440],step:60,valueTransform:h,initialValues:[a,l],onSave:()=>null}),e.jsxs(F,{gap:8,direction:"horizontal",horizontalAlign:"right",children:[e.jsx(L,{text:"Отменить",width:"120px",onClick:i}),e.jsx(M,{width:"120px",isLoading:!1,completed:c,text:"Сохранить",action:x,setCompleted:o})]})]})},vt=t=>{const{open:n}=k(),s=()=>{n(e.jsx(ft,{...t}))};return e.jsx(R,{...t,editable:!1,onClick:s,icon:e.jsx(ve,{})})},A=7,oe=new RegExp(`(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{${A+3},})`),re=new RegExp(`((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{${A},}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{${A+3},}))`),Q=[{text:`Минимальная длина ${A} знаков`,test:t=>t.length>=A},{text:"Не повторяет старый пароль",test:(t,n,s)=>s.length>0&&t.length>0&&t!==s},{text:"Состоит из латинских заглавных, строчных букв, цифр",test:t=>re.test(t)},{text:"Пароли совпадают",visible:!1,test:(t,n)=>t.length>0&&n.length>0&&t===n}],jt=[{text:"Содержит спец. знаки (например, !, $, #, %)",test:t=>oe.test(t)}],St=t=>{const n="0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";let s="";for(let i=0;i<t;i++)s+=n.charAt(Math.floor(Math.random()*n.length));return s},wt=t=>oe.test(t)?{title:"надежный",value:100}:re.test(t)?{title:"средний",value:60}:t.length===0?{title:"нет",value:0}:t.length<A?{title:"очень слабый",value:10}:{title:"слабый",value:20},yt=g.div`
    display: flex;
    gap: 20px;
    align-items: center;
    flex-direction: column;

    @media (min-width: 1001px) {
        flex-direction: row;
        width: 620px;
        height: 400px;
    }
`,bt=g.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 10px;
    min-height: 100%;
    max-width: 280px;
    width: 100%;
`,kt=g.div`
    height: 100%;
    background: var(--theme-mild-xxl);
    border-radius: var(--brLight);
    padding: 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`,Ct=g.div`
    height: 100%;
    gap: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
`,Et=g.div`
    display: flex;
    align-items: center;
    gap: 8px;
`,Ft=g.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    transform: scale(0.9);
`,At=g.div`
    height: 350px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    justify-content: center;
    align-items: center;

    @media (max-width: 1001px) {
        height: fit-content;
    }
`,Rt=()=>{const[t,n]=d.useState(""),[s,i]=d.useState(""),[a,l]=d.useState(""),[c,o]=d.useState(null),[x,h]=d.useState(!1),[u,m]=d.useState(!1),{isActive:r,validationError:f}=le(Q,[s,a,t]),v=wt(s),b=()=>{const p=St(12);i(p),l(p)},y=async()=>{try{h(!0);const p=await Oe(t,s);if(p.data.result!=="ok")throw new Error(p.data.errors);m(!0),h(!1),i(""),l(""),n("")}catch(p){const S=p.message??p;o("Возникла ошибка: "+S),h(!1)}};return e.jsxs(yt,{children:[e.jsxs(kt,{children:[e.jsxs(Ct,{children:[e.jsx(E,{size:3,align:"left",children:"Смена пароля"}),e.jsx(_,{width:"100%",align:"left",fontSize:"0.9rem",children:"Обязательные требования"}),e.jsx(F,{gap:8,direction:"vertical",children:Q.map(p=>e.jsx(V,{fontSize:"0.85rem",setChecked:()=>null,text:p.text,checked:p.test(s,a,t)},p.text))}),e.jsx(_,{width:"100%",align:"left",fontSize:"0.9rem",children:"Необязательные требования"}),e.jsx(F,{gap:8,direction:"vertical",children:jt.map(p=>e.jsx(V,{fontSize:"0.85rem",setChecked:()=>null,text:p.text,checked:p.test(s,a,t)},p.text))})]}),!r&&e.jsx(L,{width:"100%",text:"Сгенерировать пароль",onClick:b,background:"var(--scheduleBg)"}),r&&e.jsxs(Ft,{children:[e.jsx(We,{size:"40px"}),e.jsx(E,{size:5,children:"Отличный пароль!"})]})]}),e.jsxs(bt,{children:[e.jsxs(At,{children:[e.jsx(I,{title:"Ошибка",type:"failure",visible:!!c,children:c}),e.jsx(T,{type:"password",title:"Введите старый пароль",placeholder:"Введите пароль",value:t,setValue:n,required:!0}),e.jsx(T,{type:"password",title:"Придумайте пароль",placeholder:"Введите пароль",value:s,setValue:i,required:!0}),e.jsx(T,{type:"password",title:"Повторите пароль",placeholder:"Введите тот же пароль",value:a,setValue:l,required:!0}),e.jsx(He,{value:v.value,size:"small",title:`Сложность пароля: ${v.title}`})]}),e.jsxs(Et,{children:[e.jsx(L,{text:"Отменить",width:"100%"}),e.jsx(M,{isLoading:x,completed:u,text:"Обновить",popUpFailureMessage:`Требование к паролю: ${f==null?void 0:f.text}`,action:y,setCompleted:m,height:"38px",isActive:r})]})]})]})},zt=t=>{const{open:n}=k(),s=()=>n(e.jsx(Rt,{}));return e.jsx(R,{...t,onClick:s})},Lt=g.div`
    display: flex;
    flex-direction: column;
    position: relative;
    margin-left: ${({asChild:t})=>t?"12px":"0"};

    &::before {
        content: '';
        position: absolute;
        height: calc(100% - 12px);
        width: 2px;
        background-color: var(--almostTransparentOpposite);
        display: ${({asChild:t})=>t?"block":"none"};
        left: -1px;
        top: 6px;
    }
`,Mt=t=>({toggle:e.jsx(ot,{...t}),photo:e.jsx(ut,{...t}),choices:e.jsx(xt,{...t}),text:e.jsx(H,{...t}),display:e.jsx(ct,{...t}),interval:e.jsx(vt,{...t}),tel:e.jsx(H,{...t}),password:e.jsx(zt,{...t}),link:e.jsx(rt,{...t})}),ce=({fields:t,asChild:n=!1})=>e.jsx(Lt,{asChild:n,children:t.map(s=>{const{type:i,visible:a=!0}=s;if(a)return Mt(s)[i]})}),Tt=g.div`
    width: 100%;
    height: 100%;
    border-radius: 0 var(--brLight) var(--brLight) 0;
    background: var(--scheduleBg);
    overflow: hidden;
    flex-direction: column;
    display: flex;

    @media (max-width: 768px) {
        display: ${({open:t})=>t?"flex":"none"};
    }
`,It=g.div`
    width: 100%;
    height: 100%;
    height: calc(100% - 60px);
    padding: 20px;
`,Pt=g.header`
    width: 100%;
    min-height: 60px;
    padding: 0 20px;
    box-shadow: 0px 2px 3px -3px var(--grey);
    background: var(--schedule);
    display: flex;
    border-radius: 0 var(--brLight) 0 0;
    align-items: center;
`,_t=g.div`
    padding: 12px;
`,Ot=({searchValue:t,searchResult:n,settingsConfig:s})=>{var x,h;const{allRoutes:i}=C.useMenu(),a=(x=X(Y))==null?void 0:x.params,l=je();if(!i||s===void 0)return null;const c=()=>l.push(De),o=((h=i[`settings-${a==null?void 0:a.id}`])==null?void 0:h.title.split(". ")[1])??"";return e.jsxs(Tt,{open:!!(a!=null&&a.id),children:[e.jsx(Pt,{children:e.jsxs(E,{size:3,align:"left",children:[!!o&&e.jsx(L,{icon:e.jsx(Se,{}),minWidth:"30px",padding:"0",height:"30px",onClick:c,background:"transparent",hoverBackground:ne.grey.transparent3}),t?`Результаты поиска по запросу "${t}"`:o]})}),e.jsx(It,{children:e.jsxs(we,{children:[t&&e.jsx(et,{list:n}),Object.keys(s).map(u=>{const m=s[u],{path:r}=i[u];return e.jsx(O,{path:r,children:e.jsx(F,{direction:"vertical",gap:12,children:!t&&m.map(({title:f,fields:v})=>e.jsxs(ae,{children:[e.jsx(_t,{children:e.jsx(E,{size:4,align:"left",children:f})}),e.jsx(ce,{fields:v})]},f))})},r)}),e.jsx(O,{path:"/",children:e.jsx(ie,{height:"100%",children:e.jsx(se,{text:"Ничего не выбрано",image:e.jsx($e,{color:"grey",size:50,children:e.jsx(ye,{})})})})})]})})]})},$t=g.div`
    padding: 10px;
    height: 100vh;
    width: 100%;

    @media (max-width: 800px) {
        width: 100%;
        padding: 0;
        height: calc(100vh - 60px);
        gap: 0 !important;
        .settings-page {
            font-size: 0.8em;
        }
    }
`,Dt=g(Be)`
    @media (max-width: 768px) {
        flex-direction: row;
    }
`,Jt=()=>{const[t,n]=d.useState(""),[s,i]=d.useState(null),a=Je();return a===null?null:e.jsx($t,{children:e.jsx(ie,{height:"100%",children:e.jsxs(Dt,{width:"100%",maxWidth:"1000px",noAppearanceInMobile:!0,height:"700px",maxHeight:"100vh",gap:"0",padding:"0",alignItems:"flex-start",children:[e.jsx(qe,{setSearchValue:n,setSearchResult:i,settingsConfig:a}),e.jsx(Ot,{searchValue:t,searchResult:s,settingsConfig:a})]})})})};export{Jt as default};
