import{s as r,j as t,a7 as m,aQ as w,c as y,r as g,aR as v}from"./vendor-0c76c893.js";import{l as b,f as u,ay as k,a1 as l,E as S,ar as C,T as f,ax as M,ai as d,h as N,M as P,az as z,af as E,v as T,x as j,aA as L,ag as D,J as R,aB as A,aC as U,W as _,ao as $,aD as W,ap as q,aE as F}from"./index-8d41848f.js";import{L as O}from"./links-list-16df85de.js";import{D as B}from"./week-schedule-095478be.js";import{Q as x}from"./qr-code-12fe4b6a.js";import"./index-dc78f9a9.js";import"./page-link-1cf1106b.js";import"./page-link-content-160a935c.js";import"./get-correct-word-form-c0a854e8.js";import"./get-short-string-60b0c4d4.js";import"./index-857122df.js";const H=(e,i)=>{var a,s,o,c;const n=e?e[0]?"0":e[1]?"1":e[2]?"2":"0":"0";return n!=="2"?e?((s=(a=e==null?void 0:e[n])==null?void 0:a[i])==null?void 0:s.lessons)||[]:null:((c=(o=e==null?void 0:e[n])==null?void 0:o[b(new Date,"weird")])==null?void 0:c.lessons)||[]},p=r.div`
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
                color: ${({background:e})=>e?u[e].main:""};
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
`,Q=()=>t.jsx(p,{children:t.jsxs("div",{className:"payment-info education",children:[t.jsxs("div",{children:[t.jsx(l,{shape:"rect",size:{width:"100px",height:"10px"},margin:"0 0 6px 0"}),t.jsx(l,{shape:"rect",size:{width:"150px",height:"25px"},margin:"0"})]}),t.jsx(l,{shape:"rect",size:{width:"100%",height:"35px"},margin:"0"})]})}),G=()=>t.jsx(p,{children:t.jsx(S,{text:"Ошибка ",size:"70px"})}),h=({data:e,balance:i,section:n})=>{const{open:a}=C();if(!e.length)return null;const s=e[0];return t.jsxs("div",{className:"payment-info",children:[t.jsxs("div",{className:"top-info",children:[t.jsx("span",{className:"section-name",children:n}),t.jsxs(f,{size:3,align:"left",bottomGap:"4px",children:[Math.abs(i)," руб."]}),t.jsx(m,{to:M,children:t.jsx(d,{icon:t.jsx(w,{}),background:"transparent"})})]}),i>0&&t.jsx(d,{text:"Оплатить",onClick:()=>a(t.jsx(N,{pages:[{title:"Текущая залолженность",content:t.jsx(x,{qrCode:s.qr_current})},{title:"Общая залолженность",content:t.jsx(x,{qrCode:s.qr_total})}]})),width:"100%",textColor:"#fff",background:u.green.main}),i<=0&&t.jsx(P,{type:"success",title:"Оплачено",width:"100%",align:"center",icon:t.jsx(y,{})})]})},I=()=>{var o,c;const{data:e,error:i}=k.usePayments();if(i)return t.jsx(G,{});if(!e)return t.jsx(Q,{});if(e&&!e.dormitory.length&&!e.education.length)return null;const n=+((o=e==null?void 0:e.dormitory[0])==null?void 0:o.balance_currdate),a=+((c=e==null?void 0:e.education[0])==null?void 0:c.balance_currdate),s=n>0||a>0;return t.jsxs(p,{background:s?"red":"green",children:[t.jsx(h,{data:e.dormitory,balance:n,section:"Общежитие"}),t.jsx(h,{data:e.education,balance:a,section:"Обучение"})]})},J=()=>{const{data:{schedule:e,currentDayString:i,error:n}}=z.useSchedule(),{widgetSchedule:a,widgetPayment:s}=E.useSettings().settings["settings-home-page"].property,o=g.useMemo(()=>H(e,i),[e,i]);return t.jsxs(T,{direction:"horizontal",title:"Виджеты",showPages:!0,gap:10,visible:!!a||!!s,children:[a&&t.jsx(B,{lessons:!e&&i==="sunday"?[]:o,width:400,height:156,isCurrent:!0,topInfo:"",error:n}),s&&t.jsx(I,{})]})},Y=r.div`
    /* display: flex;
	justify-content: center; */
    display: flex;
    flex-direction: column;
    gap: 20px;
    color: var(--text);
    padding: var(--desktop-page-padding);

    .top {
        width: 100%;
        display: flex;
        align-items: center;
        column-gap: 10px;

        .title-wrapper {
            width: fit-content;
        }

        .user {
            display: flex;
            align-items: center;
        }
    }

    .home-page-content-inner {
        display: flex;
        flex-direction: column;
        row-gap: 30px;
    }

    @media (max-width: 1000px) {
        margin: 0;
        .top {
            justify-content: space-between;
        }
    }

    @media (max-width: 600px) {
        padding-top: 30px;
        padding: var(--mobile-page-padding);
    }
`;r.a`
    display: block;
    font-size: 18px;
    line-height: 22px;
`;r.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;r.img`
    width: 140px;
`;r.img`
    width: 130px;
`;const K=r.div`
    .notification {
        position: relative;
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: var(--brLight);

        &:hover {
            background: var(--almostTransparent);
        }

        .notification-circle {
            min-width: 10px;
            width: 10px;
            height: 10px;
        }

        svg {
            width: 22px;
            height: 22px;
            color: var(--text);
        }
    }
`,V=()=>{const{data:{user:e}}=j.useUser();return t.jsx(K,{children:t.jsxs(m,{className:"notification",to:L,children:[t.jsx(D,{outline:"none","box-shadow":"0px 0px 0px 3px var(--schedule)",color:"red",top:"13px",right:"4px",visible:e==null?void 0:e.hasAlerts,className:"notification-circle"}),t.jsx(v,{})]})})},le=()=>{const{data:{user:e},error:i}=j.useUser(),{homeRoutes:n}=R.useMenu();if(!e||!n)return null;g.useEffect(()=>{A.getScheduleFx({user:e}),U.getPaymentsFx()},[]);const a=s=>{s.preventDefault(),s.stopPropagation(),q.open({e:s,height:143,content:t.jsx(F,{})})};return t.jsx(_,{loading:!e,load:()=>null,error:i,data:e,children:t.jsxs(Y,{children:[t.jsxs("div",{className:"top",children:[t.jsxs("div",{className:"user",onClick:a,children:[t.jsx($,{marginRight:"5px",name:e.fullName??"",avatar:e.avatar,width:"40px",height:"40px",border:!0}),t.jsx(f,{size:3,align:"left",children:e.name})]}),t.jsx(V,{})]}),t.jsx(O,{wrapOnMobile:!1,align:"left",restricted:!0,title:"Разделы",links:n}),t.jsx(J,{}),!W]})})};export{le as default};
