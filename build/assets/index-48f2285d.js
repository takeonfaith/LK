import{s as a,r as l,j as t,v as $,w as z,c as P,f as T}from"./vendor-0c76c893.js";import{bi as _,z as c,l as u,bj as h,bk as m,a1 as j,T as f,bl as y,ar as G,bm as I,K as d,a5 as L,x as N,W,y as B,E as M,H as O}from"./index-8d41848f.js";import{P as A}from"./index-614cc516.js";const g=(e,i)=>{const s=new Date(e).getMonth();return s>1&&s<7?i*2:i*2-1},R=e=>{const i=g(new Date().toISOString(),e),s=[];for(let r=1;r<=i;r++)s.push({id:r,title:`${r} семестр`});return s.push({id:-1,title:"Все семестры"}),s},H=(e,i)=>_(i.filter(s=>c(s.name).includes(c(e))||c(s.teacher).includes(c(e))||c(u(s.exam_date)).includes(c(e))||c(s.bill_num).includes(c(e)))),p=e=>e>=.8?"#69CD91":e>=.6?"#697bcd":e>=.5?"#ee9e44":"#cd6c69";function v(e,i=0){let s=0;const r=e.filter(n=>!!n.grade).length;if(i)switch(i){case 0:e.forEach(({grade:n})=>h[n]>2&&s++);break;case 1:e.forEach(({grade:n})=>h[n]===5&&s++);break;case 2:e.forEach(({grade:n})=>h[n]===4&&s++);break}else e.forEach(({grade:n})=>h[n]>2&&s++);const o=(+(s/r)).toPrecision(2);return isNaN(+o)?0:+o}const K=a.div`
    display: flex;

    @media (max-width: 330px) {
        flex-direction: column;
        align-items: center;
    }
`,b=a.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & h4 {
        width: 100%;
        height: fit-content;
        display: inline-block;
        margin-top: 10px;
    }

    & svg {
        width: 160px;
        height: 160px;

        & g {
            & circle {
                width: 70px;
                height: 70px;
                fill: none;
                stroke-width: 15;
                stroke: var(--almostTransparentOpposite);
                transform: translate(10px, 10px);
                transition: 0.3s;
            }

            & :nth-child(2) circle {
                transition: 0.3s;
                stroke-dasharray: 440px;
            }
        }
    }

    @media (max-width: 1000px) {
        width: 200px;
    }
`,k=a.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 160px;
    margin: 0 20px;
    position: relative;
    user-select: none;
    & h3 {
        position: absolute;
    }
`,S=a.div`
    position: absolute;
    top: 100px;
    font-size: 0.8em;
    font-weight: bold;
`,U=a.div`
    position: absolute;
    width: 40px;
    height: 10px;
    top: 120px;
    display: flex;
    justify-content: space-around;

    & span {
        width: 7px;
        height: 7px;
        border-radius: 50%;
        background: var(--almostTransparentOpposite);
        transform: scale(0.8);
    }
`,V=a.div`
    position: absolute;
    display: flex;
    justify-content: space-between;
    width: 80%;
    cursor: pointer;

    &:hover {
        filter: brightness(0.8);
    }

    & .arrow {
        width: 30px;
    }
`,X=()=>{const{data:e,loading:i}=m.selectors.useData(),[s,r]=l.useState(0),o=e!=null&&e.exam.length?v(e.exam,s):0,n=e!=null&&e.test.length?v(e.test):0;return t.jsxs(K,{children:[t.jsxs(b,{children:[t.jsx(k,{children:i?t.jsx(j,{shape:"circle",margin:"0",size:{width:"160px",height:"160px"}}):t.jsxs(t.Fragment,{children:[t.jsxs("svg",{children:[t.jsx("g",{children:t.jsx("circle",{cx:"70",cy:"70",r:"70"})}),t.jsx("g",{children:t.jsx("circle",{cx:"70",cy:"70",r:"70",style:{strokeDashoffset:(1-o)*440+"px",stroke:p(o)},strokeDasharray:440,strokeLinecap:"round"})})]}),t.jsxs("h3",{children:[(o*100).toFixed(0),"% "]}),t.jsxs(V,{children:[t.jsx($,{className:"arrow",style:s===0?{opacity:".3"}:{},onClick:()=>{s-1>-1&&r(s-1)}}),t.jsx(z,{className:"arrow",style:s===2?{opacity:".3"}:{},onClick:()=>{s+1<3&&r(s+1)}})]}),t.jsx(S,{children:s===0?"Сдано":s===1?"На 5":"На 4"}),t.jsxs(U,{children:[t.jsx("span",{style:s===0?{background:p(o),transform:"scale(1)"}:{}}),t.jsx("span",{style:s===1?{background:p(o),transform:"scale(1)"}:{}}),t.jsx("span",{style:s===2?{background:p(o),transform:"scale(1)"}:{}})]})]})}),t.jsx(f,{size:4,children:"Экзамены"})]}),t.jsxs(b,{children:[t.jsx(k,{children:i?t.jsx(j,{shape:"circle",margin:"0",size:{width:"160px",height:"160px"}}):t.jsxs(t.Fragment,{children:[t.jsxs("svg",{children:[t.jsx("g",{children:t.jsx("circle",{cx:"70",cy:"70",r:"70"})}),t.jsx("g",{children:t.jsx("circle",{cx:"70",cy:"70",r:"70",style:{strokeDashoffset:(1-n)*440+"px",stroke:p(n)},strokeDasharray:440,strokeLinecap:"round"})})]}),t.jsxs("h3",{children:[(n*100).toFixed(0),"%"]}),t.jsx(S,{children:"Сдано"})]})}),t.jsx(f,{size:4,children:"Зачеты"})]})]})},q=e=>e.split(" ").reduce((i,s,r)=>(r===0?i.push(s):i.push(`${s[0]}.`),i),[]).join(" "),D=e=>e?y[e]||y.default:"var(--grey)",J=a.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;

    background-color: ${({grade:e})=>D(e)};

    width: 20px;
    height: 20px;

    min-width: 20px;
    min-height: 20px;
    border-radius: 50%;
`,Q=({grade:e})=>t.jsx(J,{grade:e,children:h[e]>2?t.jsx(P,{}):t.jsx(T,{})}),Y=a.div`
    width: 100%;
    display: flex;
    min-height: 60px;
    align-items: center;
    justify-content: space-between;
    background: var(--theme);
    padding: 15px 0;
    box-sizing: border-box;
    cursor: pointer;
    opacity: ${({isGraded:e})=>e?1:.4};

    &:not(:last-child) {
        border-bottom: 1px solid var(--almostTransparentOpposite);
    }

    &:hover {
        filter: brightness(0.95);
    }
`,Z=a.div`
    width: 340px;
    min-width: 240px;
    height: 100%;
    display: flex;
    margin-right: 10px;

    div {
        font-weight: 600;
        width: 100%;
        height: 100%;

        display: flex;
        align-items: center;

        margin-left: 5px;
    }

    @media (max-width: 1000px) {
        min-width: 0px;
    }
`,ee=a.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 5px;
    min-width: 330px;

    @media (max-width: 1400px) {
        min-width: 200px;
    }

    @media (max-width: 1200px) {
        display: none;
    }

    @media (max-width: 1000px) {
        min-width: 0px;
        display: flex;
        justify-content: flex-end;
        margin-right: 5px;
    }
`,te=a.div`
    min-width: 166px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: center;

    @media (max-width: 1000px) {
        display: none;
    }
`,se=a.div`
    min-width: 150px;
    width: 150px;

    @media (max-width: 1000px) {
        display: none;
    }
`,re=a.div`
    min-width: 150px;
    width: 150px;

    @media (max-width: 1200px) {
        display: none;
    }

    @media (max-width: 1000px) {
        display: none;
    }
`,ie=a.div`
    display: none;

    @media (max-width: 1000px) {
        display: block;
        font-weight: 600;
        color: ${({grade:e})=>D(e)};
    }
`,ne=({item:e,number:i,type:s})=>{const{open:r}=G();return t.jsxs(Y,{onClick:()=>e.grade&&r(t.jsx(oe,{item:e})),isGraded:!!e.grade,children:[t.jsxs(Z,{children:[t.jsx("span",{children:i}),t.jsx("div",{children:e.name})]}),t.jsx(ee,{children:s==="exam"?t.jsxs(t.Fragment,{children:[t.jsx(A,{value:I[e.grade],coloring:!0}),t.jsx(ie,{grade:e.grade,children:h[e.grade]})]}):t.jsx(Q,{grade:e.grade})}),t.jsx(te,{children:e.grade}),t.jsx(se,{children:u(e.exam_date)}),t.jsx(re,{children:q(e.teacher)})]})},ae=a.div`
    width: 600px;

    @media (max-width: 800px) {
        width: 100%;
        padding: 10px;
    }
`,oe=({item:e})=>t.jsxs(ae,{children:[t.jsx(f,{size:2,align:"left",children:e.name}),t.jsx(d,{keyStr:"Курс",value:e.course}),t.jsx(d,{keyStr:"Форма аттестации",value:e.exam_type}),t.jsx(d,{keyStr:"Дата проведения",value:u(e.exam_date)}),t.jsx(d,{keyStr:"Оценка",value:e.grade}),t.jsx(d,{keyStr:"Номер ведомости",value:e.bill_num}),t.jsx(d,{keyStr:"Семестр",value:g(e.exam_date,+e.course)}),t.jsx(d,{keyStr:"Кафедра",value:e.chair}),t.jsx(d,{keyStr:"Преподаватель",value:t.jsx(L,{type:"staff",name:e.teacher}),direction:"vertical"})]}),ce=({items:e,type:i,loading:s})=>t.jsx(t.Fragment,{children:s?Array(4).fill(0).map((r,o)=>t.jsx(j,{shape:"rect",size:{width:"100%",height:"40px"},margin:"20px 0"},o)):e.map((r,o)=>t.jsx(ne,{item:r,number:o+1,type:i},o))}),de=l.memo(ce),le=a.div`
    width: 100%;

    @media (max-width: 1000px) {
        border-radius: var(--brSemi);
        border: 1px solid var(--almostTransparentOpposite);
        padding: 10px 20px;
    }
`,xe=a.h2`
    margin-bottom: 10px;
    @media (max-width: 1000px) {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`,he=({header:e,items:i,loading:s,type:r="exam"})=>t.jsxs(le,{children:[!!(i!=null&&i.length)&&t.jsx(xe,{children:e}),t.jsx(de,{items:i||[],type:r,loading:s})]}),C=l.memo(he),pe=a.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px;
    height: 100%;
    width: 100%;
    color: var(--text);

    .search-and-filter {
        display: flex;
        align-items: center;
        column-gap: 10px;
        width: 100%;
    }

    & > * + * {
        margin-top: 20px;
    }
    @media (max-width: 1000px) {
        padding: 0px;
    }
`,fe=()=>{var w;const{data:e,loading:i,error:s}=m.selectors.useData(),{data:{user:r}}=N.useUser(),o=l.useMemo(()=>R((r==null?void 0:r.course)??0),[r]),[n,F]=l.useState({id:g(new Date().toString(),(r==null?void 0:r.course)??1),title:g(new Date().toString(),(r==null?void 0:r.course)??1).toString()+" семестр"}),[x,E]=l.useState(null);return l.useEffect(()=>{m.effects.getFx({semestr:`${(n==null?void 0:n.id)!==-1?n==null?void 0:n.id:""}`})},[n]),t.jsx(W,{loading:i,load:()=>m.effects.getFx({semestr:`${(n==null?void 0:n.id)!==-1?n==null?void 0:n.id:""}`}),error:s,data:e,children:t.jsxs(pe,{children:[!!(r!=null&&r.id)&&t.jsx(B,{items:o,selected:n,setSelected:F}),((w=e==null?void 0:e.exam)==null?void 0:w.length)===0&&(e==null?void 0:e.test.length)===0&&!i?t.jsx(M,{text:"Данных за этот семестр нет, попробуйте другой!"}):t.jsxs(t.Fragment,{children:[t.jsx(X,{}),t.jsx("div",{className:"search-and-filter",children:t.jsx(O,{whereToSearch:[...(e==null?void 0:e.exam)??[],...(e==null?void 0:e.test)??[]],searchEngine:H,setResult:E,placeholder:"Поиск предметов"})}),t.jsx(C,{header:"Экзамены",items:(x==null?void 0:x.exam)??(e==null?void 0:e.exam),loading:i}),t.jsx(C,{header:"Зачеты",items:(x==null?void 0:x.test)??(e==null?void 0:e.test),type:"test",loading:i})]})]})})};export{fe as default};
