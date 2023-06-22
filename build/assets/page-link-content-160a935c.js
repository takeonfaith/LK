import{s as N,r as C,j as o,t as g,f as W}from"./vendor-0c76c893.js";import{f as c,B as F,af as P,ag as T,ae as Y,ah as z,ai as f,aj as B,ak as H}from"./index-8d41848f.js";import{g as S}from"./get-correct-word-form-c0a854e8.js";import{g as E}from"./get-short-string-60b0c4d4.js";const M=N(F)`
    position: relative;
    cursor: pointer;
    text-decoration: none;
    border-radius: var(--brLight);

    .new {
        position: absolute;
        top: ${({isVertical:t})=>t?"5px":"18px"};
        right: ${({isVertical:t})=>t?"-5px":"50px"};
        border-radius: ${({isVertical:t})=>t?"var(--brLight) calc(var(--brLight) - 4px) calc(var(--brLight) - 4px) var(--brLight)":"var(--brLight)"};
        background: ${c.red.light2};
        font-size: 0.7em;
        font-weight: bold;
        color: #fff;
        padding: 5px 10px;
        /* box-shadow: 0 0 60px ${c.red.light2}; */
    }

    .more-button {
        position: absolute;
        top: ${({isVertical:t})=>t?"5px":"50%"};
        left: ${({isVertical:t})=>t?"5px":"auto"};
        right: ${({isVertical:t})=>!t&&"10px"};
        transform: ${({isVertical:t})=>!t&&"translateY(-50%)"};
        opacity: 0;
        visibility: hidden;
        transition: 0.2s;
    }

    &:hover {
        .more-button {
            opacity: 1;
            visibility: visible;
        }
        .notification-circle {
            opacity: 0;
        }
    }

    .outside {
        width: 100%;
        height: 100%;
        overflow: hidden;
        gap: 15px;
        display: flex;
        flex-direction: ${({isVertical:t})=>t?"column":"row"};
        border-radius: var(--brLight);
        align-items: center;
        justify-content: ${({isVertical:t})=>t?"center":"flex-start"};
        padding: 15px;

        .notifications-title {
            opacity: 0;
            transform: translateY(20px);
            font-size: 0.7em;
            position: absolute;
            transition: 0.2s;
            bottom: 25px;
            font-weight: bold;
            color: #fff;
        }

        &:hover {
            .icon {
                box-shadow: 0 20px 110px 60px ${({color:t})=>c[t].main};
                transform: ${({isVertical:t})=>t&&"scale(1.1) translateY(20px)"};
            }

            b {
                opacity: ${({hasNotifications:t})=>t&&0};
                transform: ${({isVertical:t})=>t&&"scale(0.95) translateY(40%)"};
            }

            .notifications-title {
                opacity: 1;
                transform: translateY(0px);
            }
        }

        b {
            display: flex;
            align-items: center;
            font-size: 0.8em;
            text-align: ${({isVertical:t})=>t?"center":"left"};
            color: var(--text);
            transition: 0.2s;
            height: 30px;
        }
    }
`,X=t=>{var x;const{color:s,shadow:u,notifications:i,maxWordLength:b,title:m,shortTitle:v,isNew:j,icon:$,mode:d,id:n,background:w,orientation:p="vertical"}=t,r=p==="vertical",{settings:l}=P.useSettings(),y=!!((x=l["settings-home-page"].property.pages)!=null&&x.find(e=>e===n)),k=13,L=C.useMemo(()=>(e,a)=>{const h=e.split(" ")[0];return h.length>a&&h.length!==a+1&&r?`${e.substr(0,a)}-${e.substr(a,e.length)}`:e},[]);return o.jsxs(M,{padding:"0",width:"100%",maxWidth:"100%",height:r?"135px":"60px",isVertical:r,justifyContent:"center",shadow:u,color:s.length?s:"blue",hasNotifications:!!i,background:w,children:[o.jsx(T,{outline:"4px solid var(--schedule)",color:"red",top:r?"60px":"75%",left:p!=="vertical"?"50px":"auto",right:r?"32px":"auto",visible:!!i,className:"notification-circle",children:i}),o.jsxs("div",{className:"outside",children:[o.jsx(Y,{color:s.length?s:"blue",children:$??o.jsx(g,{})}),o.jsx("b",{children:E(L(v??m,k),b)}),i&&o.jsxs("span",{className:"notifications-title",children:[i," ",S(i,{one:"уведомление",zero:"уведомлений",twoToFour:"уведомления",fiveToNine:"уведомлений"})]})]}),d==="use"&&o.jsx(z,{route:t}),d==="add"?y?o.jsx(f,{icon:o.jsx(W,{}),width:"80px",align:"center",textColor:"var(--red)",background:"var(--schedule)",onClick:()=>B(n,l)}):o.jsx(f,{icon:o.jsx(g,{}),width:"80px",textColor:"var(--green)",align:"center",background:"var(--schedule)",onClick:()=>H(n,l)}):null,j&&o.jsx("span",{className:"new",children:"New"})]})};export{M as P,X as a};
