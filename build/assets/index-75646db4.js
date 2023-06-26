import{s as c,j as e,bl as N,bm as B,bn as $,bo as E,bp as I,bq as P,br as _,bs as R,bt as T,bu as G,bv as L,bw as M,V as K,P as W,bx as J,by as U,bz as V,bA as q,bB as Q,E as X,bC as Y,bD as Z,bE as ee,H as ie,bF as ne,b3 as se,bG as te,bH as ae,bI as re,bJ as oe,r as p,R as ce,bK as le}from"./vendor-292fea82.js";import{bO as de,ar as l,l as y,bP as w,bQ as F,az as xe,a8 as m,aI as me,v as u,be as pe,K as d,ad as ue,av as he,g as ge,T as f,b0 as S,bR as v,H as fe,W as je,P as ye,J as be,E as O,Q as ke}from"./index-ddc703de.js";const h=(i,s)=>{const t=new Date(i).getMonth();return t>1&&t<7?s*2:s*2-1},we=i=>{const s=h(new Date().toISOString(),i),t=[];for(let n=1;n<=s;n++)t.push({id:n,title:`${n} семестр`});return t.push({id:-1,title:"Все семестры"}),t},Se=(i,s)=>de(s.filter(t=>l(t.name).includes(l(i))||l(t.teacher).includes(l(i))||l(y(t.exam_date)).includes(l(i))||l(t.bill_num).includes(l(i)))),ve=2.7;c.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;

    & .center {
        position: absolute;
        left: 50%;
        transform: translate(-50%, -50%);
        font-weight: 500;
        opacity: 0.8;
        display: block;
    }

    & svg {
        width: ${({width:i})=>i}px;
        height: ${({width:i})=>i}px;

        & g {
            & circle {
                fill: none;
                stroke-width: ${({width:i})=>i/10};
                stroke: var(--almostTransparentOpposite);
                transform: translate(10px, 10px);
                transition: 0.3s;
            }

            & :nth-child(2) circle {
                transition: 0.3s;
                stroke-dasharray: ${({width:i})=>i*ve}px;
            }
        }
    }

    @media (max-width: 1000px) {
        width: 200px;
    }
`;c.div`
    display: flex;
    gap: 16px;

    @media (max-width: 330px) {
        flex-direction: column;
        align-items: center;
    }
`;c.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (max-width: 1000px) {
        width: 200px;
    }
`;c.div`
    position: absolute;
    left: 50%;
    top: 120%;
    transform: translate(-50%, 0%);
    display: flex;
    align-items: center;
`;const j=i=>i?w[i]||w.default:"var(--grey)",Oe=i=>i.split(" ").reduce((s,t,n)=>(n===0?s.push(t):s.push(`${t[0]}.`),s),[]).join(" "),He=c.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;

    color: ${({grade:i})=>j(i)};

    width: 22px;
    height: 22px;

    min-width: 22px;
    min-height: 22px;
    border-radius: 50%;

    svg {
        width: 100%;
        height: 100%;
    }
`,Fe=({grade:i})=>e.jsx(He,{grade:i,children:F[i]>2?e.jsx(N,{}):e.jsx(B,{})}),ze=c.div`
    width: 100%;
    display: flex;
    min-height: 60px;
    align-items: center;
    justify-content: space-between;
    padding: 15px 0;
    box-sizing: border-box;
    cursor: pointer;
    opacity: ${({isGraded:i})=>i?1:.4};
`,Ae=c.div`
    display: flex;
    margin-right: 10px;
    font-weight: 500;

    @media (max-width: 1000px) {
        min-width: 0px;
    }
`,Ce=c.strong`
    color: ${({color:i})=>i};
    font-weight: 600;
    width: 100px;
    display: flex;
    justify-content: flex-end;
`,De=i=>{const s=l(i),n=[{keys:["распознаван"],icon:e.jsx(E,{})},{keys:["принт"],icon:e.jsx(I,{})},{keys:["жизнед"],icon:e.jsx(P,{})},{keys:["истор"],icon:e.jsx(_,{})},{keys:["информат"],icon:e.jsx(R,{})},{keys:["мобильн"],icon:e.jsx(T,{})},{keys:["безопасн"],icon:e.jsx(G,{})},{keys:["автоматиз"],icon:e.jsx(L,{})},{keys:["обработ"],icon:e.jsx(M,{})},{keys:["операционн"],icon:e.jsx(K,{})},{keys:["эконом"],icon:e.jsx(W,{})},{keys:["информацион","программир"],icon:e.jsx(J,{})},{keys:["анализ"],icon:e.jsx(U,{})},{keys:["компьют","алгоритм"],icon:e.jsx(V,{})},{keys:["сети","сетей"],icon:e.jsx(q,{})},{keys:["матем"],icon:e.jsx(Q,{})},{keys:["философ"],icon:e.jsx(X,{})},{keys:["данны"],icon:e.jsx(Y,{})},{keys:["язык"],icon:e.jsx(Z,{})},{keys:["спорт"],icon:e.jsx(ee,{})},{keys:["проектная"],icon:e.jsx(ie,{})},{keys:["интеллект"],icon:e.jsx(ne,{})},{keys:["практика"],icon:e.jsx(se,{})},{keys:["предприним"],icon:e.jsx(te,{})},{keys:["коммуникац"],icon:e.jsx(ae,{})},{keys:["управлени"],icon:e.jsx(re,{})},{keys:["научн"],icon:e.jsx(oe,{})}].find(a=>a.keys.find(r=>s.includes(r)));return n?n.icon:e.jsx($,{})},Ne=({item:i,number:s,type:t})=>{const{open:n}=xe(),{name:a,grade:r}=i,g=()=>i.grade&&n(e.jsx($e,{item:i}),i.name);return e.jsxs(ze,{onClick:g,isGraded:!!i.grade,children:[e.jsxs(m,{gap:"16px",children:[e.jsx(me,{color:j(r),borderRadius:"9px",children:De(a)}),e.jsxs(m,{d:"column",ai:"flex-start",gap:"4px",children:[e.jsx(Ae,{children:a}),e.jsx(u,{children:e.jsx(pe,{words:[Oe(i.teacher),y(i.exam_date)]})})]})]}),e.jsx(Ce,{color:j(r),children:t==="exam"?F[r]:e.jsx(Fe,{grade:r})})]})},Be=c.div`
    width: 400px;

    @media (max-width: 800px) {
        width: 100%;
    }
`,$e=({item:i})=>e.jsxs(Be,{children:[e.jsx(d,{keyStr:"Курс",value:i.course}),e.jsx(d,{keyStr:"Форма аттестации",value:i.exam_type}),e.jsx(d,{keyStr:"Дата проведения",value:y(i.exam_date)}),e.jsx(d,{keyStr:"Оценка",value:i.grade}),e.jsx(d,{keyStr:"Номер ведомости",value:i.bill_num}),e.jsx(d,{keyStr:"Семестр",value:h(i.exam_date,+i.course)}),e.jsx(d,{keyStr:"Кафедра",value:i.chair}),e.jsx(d,{keyStr:"Преподаватель",value:e.jsx(ue,{type:"staff",name:i.teacher}),direction:"vertical"})]}),Ee=({items:i,type:s,loading:t})=>t?e.jsx(e.Fragment,{children:Array(5).fill(0).map((n,a)=>e.jsx(he,{shape:"rect",size:{width:"100%",height:"30px"},margin:"10px 0"},a))}):e.jsx(e.Fragment,{children:i.map((n,a)=>e.jsxs(ce.Fragment,{children:[e.jsx(Ne,{item:n,number:a+1,type:s}),a!==i.length-1&&e.jsx(ge,{margin:"0",width:"100%"})]},n.id))}),Ie=p.memo(Ee),Pe=({header:i,items:s,loading:t,type:n="exam"})=>e.jsxs(m,{d:"column",children:[!!(s!=null&&s.length)&&e.jsxs(f,{size:3,align:"left",width:"fit-content",children:[i,e.jsx(u,{children:s.length})]}),e.jsx(Ie,{items:s||[],type:n,loading:t})]}),H=p.memo(Pe),_e=c.div`
    border-radius: 6px;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 16px;
    background: linear-gradient(270deg, #5d2466, #28549d, #1e7096);
    background-size: 600% 600%;
    -webkit-animation: AnimationName 4s ease infinite;
    -moz-animation: AnimationName 4s ease infinite;
    animation: AnimationName 4s ease infinite;

    @-webkit-keyframes AnimationName {
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
    }
    @-moz-keyframes AnimationName {
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
    }
    @keyframes AnimationName {
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
    }
`,Re=c.div`
    border-radius: 6px;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 16px;
    background: linear-gradient(270deg, #580808, #5f0458, #2b0749);
    background-size: 600% 600%;

    -webkit-animation: AnimationName 6s ease infinite;
    -moz-animation: AnimationName 6s ease infinite;
    animation: AnimationName 6s ease infinite;

    @-webkit-keyframes AnimationName {
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
    }
    @-moz-keyframes AnimationName {
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
    }
    @keyframes AnimationName {
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
    }
`,Te=i=>{if(!i)return"empty";const s=[...i.exam,...i.test];let t=0;for(let n=0;n<s.length;n++){const{grade:a}=s[n];if(!a)return"empty";a!=="Зачтено"&&a!=="Отлично"&&t++}return t===1?"almost":t>1?"empty":"a-student"},Ge=({data:i})=>{const s=Te(i);return s==="empty"?null:s==="almost"?e.jsxs(Re,{children:[e.jsxs(m,{d:"column",ai:"flex-start",gap:"4px",children:[e.jsx(f,{size:3,align:"left",children:"Почти отличник"}),e.jsx(u,{fontSize:"1rem",children:"В следующий раз повезет"})]}),e.jsx(S,{src:"https://media2.giphy.com/media/Iblv3w6yvj9DTMwCsJ/giphy.gif?cid=6c09b952zc1sjle3291d5t30ls5aqkl8kw1xrr1klyc7h5gk&ep=v1_stickers_related&rid=giphy.gif&ct=g",width:"70px",height:"70px",loading:!1})]}):e.jsxs(_e,{children:[e.jsxs(m,{d:"column",ai:"flex-start",gap:"4px",children:[e.jsx(f,{size:3,align:"left",children:"В этом семестре ты отличник!"}),e.jsx(u,{fontSize:"1rem",children:"Наши поздравления!"})]}),e.jsx(S,{src:"https://i.pinimg.com/originals/d3/c6/8a/d3c68aeb6f9ead3e57f80f12d12304b8.gif",width:"70px",height:"70px",loading:!1})]})},Ke=()=>{var k;const{data:i,loading:s,error:t}=v.selectors.useData(),{data:{user:n}}=fe.useUser(),a=p.useMemo(()=>we((n==null?void 0:n.course)??0),[n]),[r,g]=p.useState({id:h(new Date().toString(),(n==null?void 0:n.course)??1),title:h(new Date().toString(),(n==null?void 0:n.course)??1).toString()+" семестр"}),[o,z]=p.useState(null),A=((k=i==null?void 0:i.exam)==null?void 0:k.length)===0&&(i==null?void 0:i.test.length)===0&&!s,C=(o==null?void 0:o.exam.length)===0&&(o==null?void 0:o.test.length)===0&&!s,D=`${(r==null?void 0:r.id)!==-1?r==null?void 0:r.id:""}`,b=x=>{v.effects.getFx({semestr:x?`${(x==null?void 0:x.id)!==-1?x==null?void 0:x.id:""}`:D})};return e.jsx(je,{loading:s,load:b,error:t,data:i,children:e.jsx(ye,{topRightCornerElement:!!(n!=null&&n.id)&&e.jsx(m,{w:"150px",gap:"8px",children:e.jsx(be,{onClick:b,width:"150px",items:a,selected:r,setSelected:g})}),children:A?e.jsx(O,{text:"Данных за этот семестр нет, попробуйте другой!"}):e.jsxs(e.Fragment,{children:[!o&&!s&&e.jsx(Ge,{data:i}),e.jsx(ke,{whereToSearch:[...(i==null?void 0:i.exam)??[],...(i==null?void 0:i.test)??[]],searchEngine:Se,setResult:z,placeholder:"Поиск предметов",loadingOnType:!0}),C&&e.jsx(O,{text:"По данному запросу ничего не найдено",image:e.jsx(le,{})}),e.jsx(H,{header:"Экзамены",items:(o==null?void 0:o.exam)??(i==null?void 0:i.exam),loading:s}),e.jsx(H,{header:"Зачеты",items:(o==null?void 0:o.test)??(i==null?void 0:i.test),type:"test",loading:s})]})})})};export{Ke as default};
