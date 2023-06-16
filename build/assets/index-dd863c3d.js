import{s as d,a7 as K,aI as u,j as e,aN as S,r as m,n as I,f as L,af as $,q as W,aO as k,ac as E,v as O,w as _,ay as N,az as F}from"./vendor-0c76c893.js";import{z as v,f as z,am as x,an as J,ao as j,a1 as T,ap as h,l as p,ai as c,a as A,aq as H,T as f,ar as R,as as U,a5 as q,H as C,W as Q,g as G,a0 as V}from"./index-1840b39c.js";import{I as B}from"./index.esm-aaf37469.js";const X=(s,t)=>t.filter(a=>v(a.name).includes(v(s))),Y=d(K)`
    text-decoration: none;

    .chat-item-content {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        color: ${({isChosen:s})=>s?"#fff":"var(--text)"};
        width: 100%;
        padding: 10px;
        border-radius: var(--brLight);
        background: ${({isChosen:s})=>s?z.blue.main:"var(--schedule)"};
        overflow: hidden;
        position: relative;

        &:hover {
            filter: brightness(0.95);
        }

        .name-and-message {
            display: flex;
            flex-direction: column;
            justify-content: center;
            width: 100%;
            max-width: 200px;

            & > b {
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                font-size: 0.8em;
            }

            .last-message {
                width: 100%;
                font-size: 0.8em;
                opacity: 0.7;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
            }
        }

        .sent-time {
            min-height: 30px;
            width: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: flex-end;
            font-size: 0.8em;
            opacity: 0.6;
            font-weight: 500;
        }
    }
`,Z=({avatar:s,name:t,lastMessage:a,chatId:n,loading:i,amountOfUnreadMessages:o,isOpen:r})=>{var g;const l=(g=u(x))==null?void 0:g.params;return i?e.jsx(se,{}):e.jsx(Y,{to:J+`/${n}`,isChosen:(l==null?void 0:l.chatId)===n,isOpen:r,children:e.jsxs("div",{className:"chat-item-content",children:[r?e.jsx(j,{name:t,avatar:s,width:"40px",height:"40px",marginRight:"7px",notifications:o}):e.jsx(j,{name:t,avatar:s,width:"45px",height:"45px",marginRight:"0",notifications:o}),r&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"name-and-message",children:[e.jsx("b",{children:t}),e.jsx("div",{className:"last-message",children:a.message})]}),e.jsx("div",{className:"sent-time",children:a.sentTime})]})]})})},ee=d.div`
    display: flex;
    align-items: center;
    padding: 10px;

    .name-and-message {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
`,se=()=>e.jsxs(ee,{children:[e.jsx(T,{shape:"circle",size:{width:"40px",height:"40px"},margin:"0 7px 0 0"}),e.jsxs("div",{className:"name-and-message",children:[e.jsx(T,{shape:"rect",size:{width:"150px",height:"12px"},margin:"2px 0"}),e.jsx(T,{shape:"rect",size:{width:"70px",height:"10px"},margin:"0"})]})]}),te=d.div`
    display: flex;
    align-items: flex-end;
    padding: ${({isLast:s})=>s?"2px 0 10px 0":"2px 0"};
    position: static;

    .message-avatar {
        width: 32px;
        height: 32px;

        position: sticky;
        bottom: 0px;
        top: 0px;
    }

    .name-and-message {
        display: flex;
        flex-direction: column;
        background: ${({isYourMessage:s})=>s?z.blue.main:"var(--schedule)"};
        color: ${({isYourMessage:s})=>s?"#fff":"var(--text)"};
        padding: 7px;
        border-radius: ${({isLast:s})=>s?"10px 10px 10px 0":"10px"};
        box-shadow: var(--schedule-shadow);
        margin-left: 10px;
        max-width: 40%;

        .name-and-time {
            b {
                color: ${({isYourMessage:s})=>s?"#fff":"var(--text)"};
                font-size: 0.8em;
                margin-bottom: 5px;
                margin-right: 10px;
            }

            span {
                font-size: 0.7em;
                opacity: 0.8;
            }
        }

        .message {
            font-size: 1em;
        }
    }

    @media (max-width: 1000px) {
        .name-and-message {
            max-width: 70%;
        }
    }
`,ae=({name:s,message:t,isLast:a})=>e.jsx(te,{isYourMessage:s==="Kostya Doloz",isLast:a,onContextMenu:n=>{h.open({e:n,content:e.jsx(ne,{message:t}),height:70})},children:e.jsxs("div",{className:"name-and-message",children:[e.jsxs("div",{className:"name-and-time",children:[e.jsx("b",{children:s}),e.jsx("span",{children:p(t.sentTime)})]}),e.jsx("span",{className:"message",children:t.message})]})}),ne=({message:s})=>e.jsx(e.Fragment,{children:e.jsx(c,{text:"Копировать",icon:e.jsx(S,{}),width:"100%",align:"left",background:"transparent",onClick:()=>{navigator.clipboard.writeText(s.message??""),h.close(),A.evokePopUpMessage({message:"Сообщение скопировано",type:"info"})}})}),ie=d.div`
    overflow-y: auto;
    max-height: ${({height:s})=>s-170+"px"};
`,re=({chats:s,isOpen:t})=>{const{height:a}=H();return e.jsxs(ie,{height:a,children:[!s.length&&e.jsx(f,{size:3,children:"Нет чатов"}),s.map(n=>m.createElement(Z,{...n,key:n.name,loading:!1,isOpen:t}))]})},oe=d.div`
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
    background: var(--schedule);
    box-shadow: 5px 0 5px #00000036;
    position: relative;
`,de=({avatar:s,name:t,loading:a})=>{const[,n]=m.useState(!1),i=m.useRef(null),[o,r]=m.useState(!1),{open:l}=R(),g=I();U(i,()=>n(!1));const D=()=>{o?r(y=>!y):g.push(J)};return e.jsxs(oe,{ref:i,children:[e.jsx(c,{icon:e.jsx(L,{}),onClick:D,background:"var(--schedule)"}),o?e.jsx(C,{whereToSearch:[],searchEngine:()=>[],setResult:()=>null,placeholder:"Поиск сообщений"}):e.jsx(q,{type:"staff",avatar:s,name:t,loading:a}),e.jsx(c,{icon:e.jsx($,{}),onClick:y=>h.open({e:y,height:80,content:e.jsxs(e.Fragment,{children:[e.jsx(c,{icon:e.jsx(W,{}),text:"Поиск",onClick:()=>{r(P=>!P),h.close()},width:"100%",align:"left",background:"transparent"}),e.jsx(c,{icon:e.jsx(k,{}),text:"Вложения",onClick:()=>{h.close(),l(e.jsx(ye,{}))},width:"100%",align:"left",background:"transparent"})]})}),background:"var(--schedule)"})]})},w=s=>{s!=null&&s.current&&s.current.scrollTo({top:s.current.scrollHeight,behavior:"auto"})},le=d.div`
    width: 100%;
    height: 100%;
    position: relative;
    overflow-y: auto;

    button {
        position: fixed;
        right: 40px;
        bottom: 70px;
        min-width: 35px;
        height: 35px;
        border-radius: 100%;
        padding: 0px;
        background: var(--settings);
        transition: 0.2s visibility, 0.2s opacity, 0.2s transform;
        visibility: ${({buttonVisible:s})=>s?"visible":"hidden"};
        opacity: ${({buttonVisible:s})=>s?"1":"0"};
        transform: scale(${({buttonVisible:s})=>s?"1":"0.9"});

        svg {
            width: 22px;
            height: 22px;
        }
    }

    @media (max-width: 1000px) {
        button {
            position: fixed;
            right: 20px;
            bottom: 70px;
            border-radius: 100%;
        }
    }
`,me=({loading:s})=>{const t=[{message:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias, non. Laboriosam aliquid animi magni sit perferendis, et minima maxime totam eos corporis saepe est sunt facilis? Quae iste nobis sapiente?",sender:"Kostya Doloz",sentTime:"January 5, 2022 21:12"},{message:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias, non. Laboriosam aliquid animi magni sit perferendis, et minima maxime totam eos corporis saepe est sunt facilis? Quae iste nobis sapiente?",sender:"Kostya Doloz",sentTime:"January 5, 2022 21:12"},{message:"Test",sender:"Peter Parker",sentTime:"January 5, 2022 21:12"},{message:"Test",sender:"Peter Parker",sentTime:"January 5, 2022 21:12"},{message:"TestTestTestTestTestTest",sender:"Kostya Doloz",sentTime:"January 5, 2022 21:12"},{message:"Test",sender:"Kostya Doloz",sentTime:"January 5, 2022 21:12"},{message:"Test",sender:"Peter Parker",sentTime:"January 5, 2022 21:12"},{message:"Test",sender:"Peter Parker",sentTime:"January 5, 2022 21:12"},{message:"Test",sender:"Peter Parker",sentTime:"January 5, 2022 21:12"},{message:"Test",sender:"Peter Parker",sentTime:"January 5, 2022 21:12"},{message:"Test",sender:"Peter Parker",sentTime:"January 5, 2022 21:12"},{message:"Test",sender:"Kostya Doloz",sentTime:"January 5, 2022 21:12"},{message:"Test",sender:"Kostya Doloz",sentTime:"January 5, 2022 21:12"},{message:"Test",sender:"Peter Parker",sentTime:"January 5, 2022 21:12"},{message:"Test",sender:"Peter Parker",sentTime:"January 5, 2022 21:12"},{message:"Test",sender:"Peter Parker",sentTime:"January 5, 2022 21:12"},{message:"Test",sender:"Peter Parker",sentTime:"January 5, 2022 21:12"},{message:"Test",sender:"Peter Parker",sentTime:"January 6, 2022 21:12"},{message:"Test",sender:"Kostya Doloz",sentTime:"January 6, 2022 21:12"},{message:"Test",sender:"Kostya Doloz",sentTime:"January 6, 2022 21:12"},{message:"Test",sender:"Kostya Doloz",sentTime:"January 6, 2022 21:12"},{message:"Test",sender:"Peter Parker",sentTime:"January 6, 2022 21:12"},{message:"Test",sender:"Peter Parker",sentTime:"January 6, 2022 21:12"},{message:"Test",sender:"Kostya Doloz",sentTime:"January 7, 2022 21:12"},{message:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias, non. Laboriosam aliquid animi magni sit perferendis, et minima maxime totam eos corporis saepe est sunt facilis? Quae iste nobis sapiente?",sender:"Kostya Doloz",sentTime:"January 7, 2022 21:12"},{message:"Test",sender:"Kostya Doloz",sentTime:"January 7, 2022 21:12"},{message:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias, non. Laboriosam aliquid animi magni sit perferendis, et minima maxime totam eos corporis saepe est sunt facilis? Quae iste nobis sapiente?",sender:"Kostya Doloz",sentTime:"January 7, 2022 21:12"},{message:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias, non. Laboriosam aliquid animi magni sit perferendis, et minima maxime totam eos corporis saepe est sunt facilis? Quae iste nobis sapiente?",sender:"Kostya Doloz",sentTime:"January 7, 2022 21:12"},{message:"Test",sender:"Kostya Doloz",sentTime:"January 8, 2022 21:12"},{message:"Test",sender:"Kostya Doloz",sentTime:"January 8, 2022 21:12"},{message:"Test",sender:"Kostya Doloz",sentTime:"January 8, 2022 21:12"},{message:"Test",sender:"Kostya Doloz",sentTime:"January 8, 2022 21:12"},{message:"Test",sender:"Kostya Doloz",sentTime:"January 8, 2022 21:12"},{message:"Test",sender:"Kostya Doloz",sentTime:"January 8, 2022 21:12"},{message:"Test",sender:"Kostya Doloz",sentTime:"January 8, 2022 21:12"},{message:"Test",sender:"Kostya Doloz",sentTime:"January 8, 2022 21:12"},{message:"Test",sender:"Kostya Doloz",sentTime:"January 8, 2022 21:12"},{message:"Test",sender:"Kostya Doloz",sentTime:"January 9, 2022 21:12"},{message:"Test",sender:"Kostya Doloz",sentTime:"January 9, 2022 21:12"},{message:"Test",sender:"Kostya Doloz",sentTime:"January 10, 2022 21:12"}],a=m.useRef(null),[n,i]=m.useState(!1);m.useEffect(()=>{w(a)},[t.length]);const o=()=>{var r;if(a.current){const l=a.current.scrollHeight-a.current.offsetHeight-((r=a.current)==null?void 0:r.scrollTop)>350;i(l)}};return e.jsxs(le,{ref:a,buttonVisible:n,onScroll:o,children:[e.jsx(Q,{loading:s,load:()=>null,error:null,data:!s,children:e.jsx(ue,{messages:t})}),e.jsx(c,{icon:e.jsx(E,{}),onClick:()=>w(a)})]})},ce={"Peter Parker":"https://upload.wikimedia.org/wikipedia/en/thumb/d/d9/Andrew_Garfield_Spider-Man.jpg/220px-Andrew_Garfield_Spider-Man.jpg","Kostya Doloz":"https://img.freepik.com/free-photo/waist-up-portrait-of-handsome-serious-unshaven-male-keeps-hands-together-dressed-in-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg?size=626&ext=jpg"},b=s=>{const t={};let a=0,n="";return s.forEach((i,o,r)=>{var l;(((l=r[o-1])==null?void 0:l.sender)!==i.sender||p(r[o-1].sentTime)!==p(i.sentTime)||!r[o-1])&&a++,t[a]?t[a].messages.push(i):(t[a]={messages:[i],avatar:ce[i.sender],date:p(i.sentTime)!==n?p(i.sentTime):null},n=p(i.sentTime))}),t},pe=d.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--text);
    font-weight: 600;
    font-size: 0.8em;

    span {
        padding: 10px 20px;
        border-radius: var(--brSemi);
        background: var(--almostTransparentOpposite);
    }
`,M=({message:s="Выберите чат"})=>e.jsx(pe,{children:e.jsx("span",{children:s})}),he=d.div`
    margin: 5px 0 10px 0;
    color: var(--text);
    position: sticky;
    top: 10px;
    z-index: 10;

    h5 {
        background: var(--search);
        padding: 6px 12px;
        border-radius: var(--brSemi);
        display: inline-block;
    }
`,xe=({date:s})=>s?e.jsx(he,{children:e.jsx(f,{size:5,children:s})}):null,ge=d.div`
    padding: 20px 5px;
    min-height: 100%;

    .messages-section {
        position: relative;
        display: flex;
        align-items: flex-end;
        width: 100%;

        .messages {
            width: 100%;
        }
    }

    .message-avatar {
        width: 32px;
        height: 32px;
        position: sticky;
        bottom: 7px;
        margin-bottom: 10px;
    }

    @media (max-width: 1000px) {
        padding: 10px 0px;
    }
`,ue=({messages:s})=>e.jsxs(ge,{children:[Object.values(b(s)).length===0&&e.jsx(M,{message:"Нет сообщений"}),Object.values(b(s)).map((t,a)=>e.jsxs(e.Fragment,{children:[e.jsx(xe,{date:t.date}),e.jsxs("div",{className:"messages-section",children:[e.jsx("div",{className:"message-avatar",children:e.jsx(j,{name:t.messages[0].sender,avatar:t.avatar,width:"32px",height:"32px",marginRight:"0"})}),e.jsx("div",{className:"messages",children:t.messages.map((n,i)=>e.jsx(ae,{name:n.sender,message:n,isLast:i===t.messages.length-1},i))})]},a)]}))]}),fe=d.div`
    @media (min-width: 1001px) {
        width: 500px;
        height: 500px;
    }
`,ye=()=>e.jsx(fe,{children:e.jsx(f,{size:2,align:"left",children:"Вложения"})}),Te=d.div`
    padding: 14px;
    min-width: ${({isOpen:s})=>s?"350px":"115px"};
    width: ${({isOpen:s})=>s?"350px":"115px"};
    transition: 0.2s width, 0.2s min-width, 0.2s padding, 0.2s opacity;
    height: 100%;
    background: var(--schedule);
    color: var(--text);
    box-shadow: 1px 0 5px #00000036;

    .chat-list-top-section {
        display: flex;
        align-items: center;
        margin-bottom: 10px;

        button {
            min-width: 30px;
            height: 30px;
            padding: 2px;
            background: transparent;

            svg {
                width: 17px;
                height: 17px;
            }
        }
    }

    @media (max-width: 1000px) {
        width: ${({chatId:s})=>s?"0":"100%"};
        min-width: ${({chatId:s})=>s?"0":"100%"};
        padding: ${({chatId:s})=>s?"0":"14px"};
        opacity: ${({chatId:s})=>s?"0":"1"};

        .chat-list-top-section {
            button {
                display: none;
            }
        }
    }
`,je=()=>{var r;const[s,t]=m.useState(null),[a,n]=m.useState(!0),i=(r=u(x))==null?void 0:r.params,o=[{avatar:void 0,name:"Стелла",lastMessage:{message:"Привет. Как дела?",sentTime:"12:23"},chatId:"1",amountOfUnreadMessages:10},{avatar:"https://upload.wikimedia.org/wikipedia/ru/thumb/d/df/Andrew_Garfield_as_Spider-Man.jpg/280px-Andrew_Garfield_as_Spider-Man.jpg",name:"Питер Паркер",lastMessage:{message:"Привет. Как дела?",sentTime:"12:23"},chatId:"2",amountOfUnreadMessages:0},{avatar:void 0,name:"Рафаэль",lastMessage:{message:"Привет. Как дела?",sentTime:"12:23"},chatId:"3",amountOfUnreadMessages:0},{avatar:void 0,name:"Леонардо",lastMessage:{message:"Привет. Как дела?",sentTime:"12:23"},chatId:"4",amountOfUnreadMessages:0},{avatar:void 0,name:"Бред Питт",lastMessage:{message:"Привет. Как дела?",sentTime:"12:23"},chatId:"5",amountOfUnreadMessages:0}];return e.jsxs(Te,{isOpen:a,chatId:i==null?void 0:i.chatId,children:[e.jsxs("div",{className:"chat-list-top-section",children:[e.jsx(f,{size:3,align:"left",children:"Чаты"}),e.jsx(c,{onClick:()=>n(l=>!l),icon:a?e.jsx(O,{}):e.jsx(_,{})})]}),e.jsx(C,{whereToSearch:o,searchEngine:X,setResult:t,placeholder:"Поиск чатов"}),e.jsx(G,{margin:"10px auto"}),e.jsx(re,{chats:s??o,isOpen:a})]})},ve=d.div`
    display: flex;
    align-items: center;
    background: var(--schedule);
    padding: 5px 10px;
    /* box-shadow: 0 0 1px #00000039; */
    box-shadow: 3px -2px 3px #00000029;

    input {
        background: var(--schedule);
    }
`,we=()=>{const[s,t]=m.useState("");return e.jsxs(ve,{children:[e.jsx(c,{icon:e.jsx(k,{}),onClick:()=>null,background:"transparent"}),e.jsx(V,{value:s,setValue:t,placeholder:"Введите сообщение..."}),e.jsx(c,{icon:e.jsx(B,{}),onClick:()=>null,background:"transparent"})]})},be=d.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    position: relative;

    & > img {
        position: absolute;
        width: 200px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        opacity: 0.4;
    }
`,ke=()=>{var n;const s=(n=u(x))==null?void 0:n.params,[t,a]=m.useState(!0);return m.useEffect(()=>{a(!0),setTimeout(()=>{a(!1)},1e3)},[s.chatId]),e.jsxs(be,{children:[e.jsx(de,{name:"Леонаро ДиК априо",loading:t}),e.jsx(me,{loading:t}),e.jsx(we,{})]})},ze=d.div`
    display: flex;
    width: 100%;
    height: 100%;
`,De=()=>{var t;const s=(t=u(x))==null?void 0:t.params;return e.jsxs(ze,{children:[e.jsx(je,{}),!(s!=null&&s.chatId)&&e.jsx(M,{}),e.jsx(N,{children:e.jsx(F,{path:x,children:e.jsx(ke,{})})})]})};export{De as default};
