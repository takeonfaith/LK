import{j as e,s as n,r as f,a7 as I,a8 as M,aV as B,aW as P,aX as U,ab as z,R as C}from"./vendor-0c76c893.js";import{x as S,ar as O,v as F,u as $,a5 as _,r as A,B as D,aQ as N,aR as V,ao as X,aS as G,aT as K,aU as H,ai as y,f as x,aV as J,aW as Q,aX as Y,g as q,K as Z,J as ee,E as te,W as ae}from"./index-a7bcef13.js";import{B as R}from"./index-80b0a22e.js";const ie=({padding:t,size:s="middle"})=>{var l,o;const{data:{user:a}}=S.useUser();return O(),e.jsxs(F,{visible:!!(a!=null&&a.accounts),padding:t,title:"Аккаунты",direction:"horizontal",gap:0,showPages:!0,horizontalAlign:"left",onAdd:void 0,children:[!((l=a==null?void 0:a.accounts)!=null&&l.length)&&e.jsx($,{children:"Нет доступных аккаунтов"}),(o=a==null?void 0:a.accounts)==null?void 0:o.map(i=>e.jsx(_,{type:i.user_status,size:s,name:i.fio??a.fullName,token:i.token,division:i.work_place,group:i.group,degreeLevel:i.degreeLevel,orientation:"vertical"},i.fio))]})},se=({pages:t,currentPage:s})=>{const{data:{user:a}}=S.useUser();return a?e.jsx(A,{children:e.jsx(R,{height:"100%",noAppearanceInMobile:!0,maxWidth:"750px",children:t[s]})}):null},ne=n.header`
    width: 100%;
    /* max-width: 750px; */
    padding-top: 100px;
    position: relative;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: var(--text);

    svg {
        min-width: 30px;
    }

    @media (max-width: 1000px) {
        padding: auto;
        display: flex;
        align-items: center;
        justify-content: center;
        & > .info {
            display: none;
        }
    }
`;n.div`
    width: ${({width:t})=>t+"px"};
    height: ${({height:t})=>t+"px"};
    border-radius: ${({borderRadius:t})=>t+"px"};
    position: absolute;
    top: ${({top:t})=>t+"%"};
    left: ${({left:t})=>t+"%"};
    z-index: -1;
    box-shadow: 0 0 10px #00000003;
    background-color: ${({color:t})=>t};
`;const re=n.div`
    width: 100%;
    display: flex;
    gap: 10px;
    flex-wrap: wrap;

    a {
        width: calc(50% - 5px);
    }

    button {
        font-size: 0.7rem;

        span {
            margin-top: 8px;
            margin-bottom: -8px;
        }
    }

    @media (max-width: 1000px) {
        flex-wrap: nowrap;

        button {
            height: 42px;
        }
    }
`,k=n.div`
    min-width: 35px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    color: #fff;
    background: ${({background:t})=>t??"var(--almostTransparent)"};

    @media (max-width: 1000px) {
        background: none;
        color: var(--text);
        /* color: ${({background:t})=>t??"var(--almostTransparent)"}; */
    }
`,oe=n.div`
    margin-bottom: 15px;
    height: fit-content;
    width: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    gap: 4px;

    b {
        font-size: 1.2rem;
    }

    span {
        opacity: 0.5;
    }

    @media (max-width: 1000px) {
        & > .info {
            display: none;
        }
    }
`,le=n.div`
    margin-top: 50px;
    width: 100%;
`,de=n.div`
    display: flex;
    gap: 12px;
    align-items: center;
    width: 100%;
    max-width: 750px;

    @media (max-width: 1000px) {
        flex-direction: column;
    }
`,W=n(D)`
    padding: 12px;
    position: relative;

    @media (max-width: 1000px) {
        max-width: 100%;
    }
`,ce=n.div`
    position: absolute;
    left: 50%;
    top: -30%;
    transform: translateX(-50%);
`,xe=({pages:t,user:s,currentPage:a,setCurrentPage:l})=>{const{fullName:o,avatar:i,user_status:u,degreeLevel:p}=s,g=u==="stud"?"Студент":"Сотрудник",w=()=>{Q.evokeConfirm({message:"Вы точно хотите выйти из аккаунта?",onConfirm:Y.logout})},{theme:m,switchTheme:b}=N(),[j,v]=f.useState(m==="light");f.useEffect(()=>{v(m==="light")},[m]);const T=j?"Светлая":"Темная",d=()=>{b(j),v(c=>!c)};return e.jsxs(ne,{children:[e.jsx(V,{avatar:i,fullName:o,width:"calc(100% + 32px)",height:"210px",baseScale:1.5}),e.jsxs(de,{children:[e.jsxs(W,{maxWidth:"530px",height:"180px",orientation:"vertical",children:[e.jsx(ce,{children:e.jsx(X,{name:o,avatar:i,width:"110px",height:"110px",marginRight:"0",border:!0,avatarModal:!0})}),e.jsxs(le,{children:[e.jsxs(oe,{children:[e.jsx("b",{children:o}),e.jsx($,{maxWidth:"100%",width:"100%",align:"center",fontSize:"0.9rem",children:e.jsx(G,{words:[g,p??""]})})]}),e.jsx(K,{sliderWidth:"100%",pages:t,currentPage:a,setCurrentPage:l,appearance:!1})]})]}),e.jsx(W,{maxWidth:"250px",height:"fit-content",children:e.jsxs(re,{children:[e.jsx(I,{to:H,children:e.jsx(y,{background:x.white.transparent2,icon:e.jsx(k,{background:x.grey.main,children:e.jsx(M,{})}),width:"100%",height:"73px",text:"Настройки",direction:"vertical",shrinkTextInMobile:!0})}),e.jsx(y,{padding:"0",background:x.white.transparent2,icon:e.jsx(k,{background:x.green.main,children:j?e.jsx(B,{}):e.jsx(P,{})}),onClick:d,text:`Тема: ${T}`,width:"calc(50% - 5px)",height:"73px",direction:"vertical",shrinkTextInMobile:!0}),e.jsx(I,{to:J,children:e.jsx(y,{background:x.white.transparent2,icon:e.jsx(k,{background:x.purple.main,children:e.jsx(U,{})}),text:"Изменить",width:"100%",height:"73px",direction:"vertical",shrinkTextInMobile:!0})}),e.jsx(y,{background:x.white.transparent2,icon:e.jsx(k,{background:x.red.main,children:e.jsx(z,{})}),text:"Выйти",height:"73px",onClick:w,width:"calc(50% - 5px)",direction:"vertical",shrinkTextInMobile:!0})]})})]})]})},pe=t=>t==="Male"?"Мужской":"Женский",L=f.memo(he);function he({user:t}){const{status:s,sex:a,birthday:l,code:o,faculty:i,course:u,group:p,specialty:g,specialization:w,degreeLength:m,educationForm:b,finance:j,degreeLevel:v,enterYear:T,subdivisions:d,authorIDs:c}=t,E=[{key:"Статус",value:s},{key:"Пол",value:pe(a)},{key:"Дата рождения",value:l},{key:"Код студента",value:o},{key:"Факультет",value:i},{key:"Курс",value:u},{key:"Группа",value:p},{key:"Направление",value:g},{key:"Специализация",value:w},{key:"Срок обучения",value:m},{key:"Форма обучения",value:b},{key:"Вид финансирования",value:j},{key:"Сведения о трудоустройстве",value:!!(d!=null&&d.length)&&(d==null?void 0:d.map((r,h)=>e.jsxs(C.Fragment,{children:[e.jsxs("div",{style:{marginTop:"5px"},children:[r.subdivision&&e.jsxs("div",{children:["Подразделение: ",r.subdivision]}),r.post&&e.jsxs("div",{children:["Должность: ",r.post]}),r.wage&&r.jobType&&e.jsxs("div",{children:["Ставка: ",r.wage,"; ",r.jobType]})]}),h<d.length-1&&e.jsx(q,{})]},h)))},{key:"Уровень образования",value:v},{key:"Год набора",value:T},{key:"Авторские идентификаторы",value:!!c&&e.jsxs("div",{style:{marginTop:"5px"},children:[c.wosReasearcher&&e.jsxs("div",{children:["Web of Science Researcher ID: ",c.wosReasearcher]}),c.scopus&&e.jsxs("div",{children:["Scopus Author ID: ",c.scopus]}),c.eLibrary&&e.jsxs("div",{children:["eLibrary Author ID: ",c.eLibrary]})]})}];return e.jsx("div",{children:E.map(({key:r,value:h})=>!!h&&e.jsx(Z,{keyStr:r,value:h,direction:typeof h=="object"?"vertical":"horizontal"},r))})}const ue=n.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`,ge=n.div``,me=({orders:t})=>e.jsx(ue,{children:t==null?void 0:t.map(s=>e.jsx(ge,{children:s},s))}),je=f.memo(me),fe=n.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: 100%;
    align-items: center;
`,we=()=>{const{data:{user:t},error:s}=S.useUser(),{allRoutes:a}=ee.useMenu(),[l,o]=f.useState(0);if(!t||!a)return null;if(s)return e.jsx(te,{text:s});const i=[{title:"Учетная карточка",content:e.jsx(L,{user:t})},{title:"Приказы",content:e.jsx(je,{orders:t.orders})}],u=[{title:"Учетная карточка",content:e.jsx(L,{user:t})}],p=t.user_status==="stud"?i:u;return e.jsx(ae,{load:function(){},loading:!1,data:[],error:null,children:e.jsxs(fe,{children:[e.jsx(xe,{user:t,currentPage:l,setCurrentPage:o,pages:p}),e.jsx(A,{children:e.jsx(R,{height:"100%",maxWidth:"750px",children:e.jsx(ie,{})})}),e.jsx(se,{currentPage:l,pages:p.map(g=>g.content)})]})})};export{we as default};
