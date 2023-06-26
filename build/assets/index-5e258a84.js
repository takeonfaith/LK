import{s as c,L as g,j as e,R as v,F as P,c as z,r as y}from"./vendor-292fea82.js";import{f as l,aI as M,v as R,w as N,g as $,l as L,aJ as b,av as x,E as T,T as m,aF as E,ax as C,M as F,aK as k,aL as I,x as D,aH as j,H as u,aM as A,a8 as d,aN as B,aO as p,aG as H,aP as h,V as W,W as U,aQ as Y,h as _,aq as O,aR as G,aS as Z,aT as q,aC as X}from"./index-ddc703de.js";import{D as K}from"./week-schedule-b14d0b0b.js";import{P as J}from"./index-4b532a9f.js";import"./index-6ca148c3.js";const Q=c(g)`
    width: 100%;
    height: 100%;
    /* background: var(--schedule); */
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    .subtext {
        white-space: nowrap;
        opacity: 0;
        transform: translateY(10px) translateX(-50%);
        position: absolute;
        left: 50%;
        bottom: 12px;
        font-size: 0.8rem;
        transition: 0.2s;
        color: var(--text);
    }

    @media (min-width: 1001px) {
        &:hover {
            background-color: ${({color:t})=>t};
        }

        &:hover .subtext {
            opacity: 1;
            transform: translateY(0px) translateX(-50%);
        }

        &:hover .icon {
            transform: scale(0.8) translateY(-10px);
        }
    }

    &:active .icon {
        transform: scale(0.7);
    }

    &:active .subtext {
        transform: scale(0.9) translateY(0px) translateX(-50%);
        transform-origin: left top;
    }

    &:hover .notification-circle {
        opacity: 0;
    }

    @media (max-width: 1000px) {
        min-width: calc(25% - 10px);
        max-width: calc(25% - 10px);
        height: 50px;
    }
`,V=({item:t,amount:s})=>{const{icon:n,color:a,path:i,title:r,notifications:o}=t;return e.jsxs(Q,{amount:s,to:i,color:l[a].transparent3,children:[e.jsx(M,{badge:o==null?void 0:o.toString(),color:a,children:n}),e.jsx(R,{className:"subtext",align:"center",children:N(r,10)})]})},ee=c.div`
    width: 100%;
    display: flex;
    align-items: center;
    max-width: 750px;
    border-radius: var(--brLight);
    background: var(--schedule);
    box-shadow: var(--very-mild-shadow);
    overflow-y: hidden;
    height: 90px;

    @media (max-width: 1000px) {
        height: 75px;
    }
`,te=({links:t})=>{const s=Object.keys(t),n=s.length<8?8:Object.keys(t).length;return e.jsx(ee,{children:s.map((a,i)=>e.jsxs(v.Fragment,{children:[e.jsx(V,{item:t[a],amount:n}),i!==s.length-1&&e.jsx($,{direction:"vertical",margin:"10px 0",width:"70%"})]},a))})},se=(t,s)=>{var a,i,r,o;const n=t?t[0]?"0":t[1]?"1":t[2]?"2":"0":"0";return n!=="2"?t?((i=(a=t==null?void 0:t[n])==null?void 0:a[s])==null?void 0:i.lessons)||[]:null:((o=(r=t==null?void 0:t[n])==null?void 0:r[L(new Date,"weird")])==null?void 0:o.lessons)||[]},f=c.div`
    max-width: 400px;
    width: 100%;
    height: 156px;
    background: var(--scheduleBg);
    border-radius: 15px;
    padding: 6px;
    display: flex;
    align-items: center;
    gap: 6px;

    .payment-info {
        width: 100%;
        height: 100%;
        background: var(--schedule);
        border-radius: 11px;
        padding: 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        position: relative;

        .top-info {
            h3 {
                color: ${({background:t})=>t?l[t].main:""};
            }

            .section-name {
                font-size: 0.8em;
                opacity: 0.6;
            }

            p {
                font-size: 0.9em;
            }

            a {
                position: absolute;
                top: 6px;
                right: 6px;
            }
        }
    }

    @media (max-width: 600px) {
        width: 100%;
        min-width: 100%;
        max-width: 100%;
    }
`,ae=()=>e.jsx(f,{children:e.jsxs("div",{className:"payment-info education",children:[e.jsxs("div",{children:[e.jsx(x,{shape:"rect",size:{width:"100px",height:"10px"},margin:"0 0 6px 0"}),e.jsx(x,{shape:"rect",size:{width:"150px",height:"25px"},margin:"0"})]}),e.jsx(x,{shape:"rect",size:{width:"100%",height:"35px"},margin:"0"})]})}),ne=()=>e.jsx(f,{children:e.jsx(T,{text:"Ошибка ",size:"70px"})}),w=({data:t,balance:s,section:n})=>{if(!t.length)return null;const{qr_current:a,qr_total:i}=t[0];return e.jsxs("div",{className:"payment-info",children:[e.jsxs("div",{className:"top-info",children:[e.jsx("span",{className:"section-name",children:n}),e.jsxs(m,{size:3,align:"left",bottomGap:"4px",children:[Math.abs(s)," руб."]}),e.jsx(g,{to:E,children:e.jsx(C,{icon:e.jsx(P,{}),background:"transparent"})})]}),s>0&&e.jsx(J,{qr_current:a,qr_total:i}),s<=0&&e.jsx(F,{type:"success",title:"Оплачено",width:"100%",align:"center",icon:e.jsx(z,{})})]})},ie=()=>{var r,o;const{data:t,error:s}=b.usePayments();if(s)return e.jsx(ne,{});if(!t)return e.jsx(ae,{});if(t&&!t.dormitory.length&&!t.education.length)return null;const n=+((r=t==null?void 0:t.dormitory[0])==null?void 0:r.balance_currdate),a=+((o=t==null?void 0:t.education[0])==null?void 0:o.balance_currdate),i=n>0||a>0;return e.jsxs(f,{background:i?"red":"green",children:[e.jsx(w,{data:t.dormitory,balance:n,section:"Общежитие"}),e.jsx(w,{data:t.education,balance:a,section:"Обучение"})]})},re=()=>{const{data:{schedule:t,currentDayString:s,error:n}}=k.useSchedule(),{widgetSchedule:a,widgetPayment:i}=I.useSettings().settings["settings-home-page"].property,r=y.useMemo(()=>se(t,s),[t,s]);return e.jsxs(D,{direction:"horizontal",title:"Виджеты",showPages:!0,gap:10,visible:!!a||!!i,children:[a&&e.jsx(K,{lessons:!t&&s==="sunday"?[]:r,width:350,height:156,isCurrent:!0,topInfo:"",error:n}),i&&e.jsx(ie,{})]})},oe=()=>{var r;const{data:t,loading:s}=j.selectors.useData(),{data:{user:n}}=u.useUser(),a=(r=t==null?void 0:t[new Date().getFullYear()])==null?void 0:r.slice(0,3),{isMobile:i}=A();return y.useEffect(()=>{t||j.effects.getFx()},[]),e.jsxs(d,{d:"column",children:[e.jsxs(m,{size:4,bottomGap:!0,align:"left",children:["Последние новости",e.jsx(g,{to:B,children:e.jsx(C,{width:"50px",height:"15px",background:l.blue.transparent2,textColor:l.blue.light1,text:"Ещё"})})]}),e.jsxs(d,{gap:"12px",d:i?"column":"row",children:[s&&e.jsxs(d,{d:"column",gap:"8px",children:[e.jsx(p,{}),e.jsx(p,{}),e.jsx(p,{})]}),a==null?void 0:a.map((o,S)=>e.jsx(H,{isNew:S===0&&(n==null?void 0:n.hasAlerts),news:o,orientation:i?"horizontal":"vertical"},o.id))]})]})},le=c.div`
    width: 100%;
    height: 200px;
    position: absolute;
    top: 0;
    left: 0;
    background: ${({main:t,dark:s})=>`linear-gradient(119deg, ${t}, ${s})`};

    @keyframes fadeIn {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

    z-index: -1;
    overflow: hidden;

    svg {
        position: absolute;
        opacity: 0.05;
        z-index: 0;
    }

    svg:nth-child(1) {
        transform: scale(4) rotate(287deg) translate(390px, 190px);
    }

    svg:nth-child(2) {
        transform: scale(2) rotate(15deg) translate(522px, -410px);
    }

    svg:nth-child(3) {
        transform: scale(3) rotate(30deg) translate(75.9px, 179px);
    }

    svg:nth-child(4) {
        transform: scale(2) rotate(60deg) translate(75.9px, 159px);
    }

    .circle {
        width: 100px;
        height: 100px;
        position: absolute;
        border-radius: 100%;
        z-index: 1;
        background: ${({light:t,dark:s})=>`linear-gradient(283deg, ${t}, ${s})`};
    }

    .circle.c2 {
        transform: translate(814px, 110px) scale(1.4);
    }

    .circle.c3 {
        transform: translate(203px, -70px) scale(3);
    }

    .circle.c4 {
        transform: translate(353px, 3px) scale(01);
        /* filter: blur(3px); */
        z-index: -1;
    }

    .circle.c5 {
        transform: translate(1236px, 10px) scale(0.8);
    }
`,ce=()=>{const{data:{user:t}}=u.useUser(),s=h((t==null?void 0:t.fullName)??"","dark1")??l.blue.dark2,n=h((t==null?void 0:t.fullName)??"","main")??l.blue.main,a=h((t==null?void 0:t.fullName)??"","light1")??l.blue.light2;return e.jsxs(le,{light:a,main:n,dark:s,children:[e.jsx("svg",{width:"620",height:"570",viewBox:"0 0 620 570",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M333.676 1.93177C428.781 13.6788 480.842 107.607 535.05 186.629C582.329 255.551 636.893 330.791 614.509 411.318C592.853 489.225 508.9 525.549 433.05 553.571C368.009 577.6 301.213 573.07 235.35 551.397C151.615 523.841 56.0559 499.684 22.0945 418.336C-17.4711 323.565 -3.03744 209.993 58.4905 127.766C122.067 42.801 228.358 -11.0768 333.676 1.93177Z",fill:"#fff"})}),e.jsx("svg",{width:"620",height:"570",viewBox:"0 0 620 570",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M333.676 1.93177C428.781 13.6788 480.842 107.607 535.05 186.629C582.329 255.551 636.893 330.791 614.509 411.318C592.853 489.225 508.9 525.549 433.05 553.571C368.009 577.6 301.213 573.07 235.35 551.397C151.615 523.841 56.0559 499.684 22.0945 418.336C-17.4711 323.565 -3.03744 209.993 58.4905 127.766C122.067 42.801 228.358 -11.0768 333.676 1.93177Z",fill:"#fff"})}),e.jsx("svg",{width:"620",height:"570",viewBox:"0 0 620 570",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M333.676 1.93177C428.781 13.6788 480.842 107.607 535.05 186.629C582.329 255.551 636.893 330.791 614.509 411.318C592.853 489.225 508.9 525.549 433.05 553.571C368.009 577.6 301.213 573.07 235.35 551.397C151.615 523.841 56.0559 499.684 22.0945 418.336C-17.4711 323.565 -3.03744 209.993 58.4905 127.766C122.067 42.801 228.358 -11.0768 333.676 1.93177Z",fill:a})}),e.jsx("svg",{width:"620",height:"570",viewBox:"0 0 620 570",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M333.676 1.93177C428.781 13.6788 480.842 107.607 535.05 186.629C582.329 255.551 636.893 330.791 614.509 411.318C592.853 489.225 508.9 525.549 433.05 553.571C368.009 577.6 301.213 573.07 235.35 551.397C151.615 523.841 56.0559 499.684 22.0945 418.336C-17.4711 323.565 -3.03744 209.993 58.4905 127.766C122.067 42.801 228.358 -11.0768 333.676 1.93177Z",fill:"#fff"})}),e.jsx("div",{className:"circle c2"}),e.jsx("div",{className:"circle c3"}),e.jsx("div",{className:"circle c4"}),e.jsx("div",{className:"circle c5"})]})},de=v.memo(ce),xe=c.div`
    width: 100%;
    padding-top: 160px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 12px;

    @media (max-width: 1000px) {
        padding-top: 153px;
    }
`,fe=()=>{const{data:{user:t},error:s}=u.useUser(),{data:n}=b.usePayments(),{data:a}=k.useSchedule(),{homeRoutes:i}=W.useMenu();if(!t||!i)return null;const r=()=>{Z.getScheduleFx({user:t}),q.getPaymentsFx(),X.getElectronicInteractionFx()};return e.jsxs(U,{loading:!t,load:r,error:s,data:n&&a,children:[e.jsx(de,{}),e.jsxs(xe,{children:[e.jsx(Y,{}),e.jsx(te,{links:i}),e.jsx(_,{children:e.jsxs(O,{maxWidth:"750px",minHeight:"100%",height:"100%",orientation:"vertical",gap:"20px",children:[e.jsxs(d,{children:[e.jsx(m,{size:2,align:"left",width:"100%",children:"Главная"}),e.jsx(G,{})]}),e.jsx(re,{}),e.jsx(oe,{})]})})]})]})};export{fe as default};
