import{y as h,s as u,a6 as g,j as o}from"./vendor-0c76c893.js";import{$ as p,m as d,x,W as m,r as $}from"./index-1840b39c.js";import{c as j,L as v}from"./index-11db7722.js";import{B as P}from"./index-012ca6bf.js";import"./index-5e6bbadd.js";const y=(t,a,n,i)=>p.get(`?getStaff&search=${t}&division=${a}&page=${n}&perpage=${i}&token=${d()}`),f=t=>p.get(`?getDivs=${t}&page=1&token=${d()}`),k=h(async t=>{const{search:a,page:n,limit:i,filter:e}=t,c=(e==null?void 0:e.title)==="Все"?"":(e==null?void 0:e.title)??"",{data:r}=await y(a??"",c,n,i);return{results:r.items}}),l=j({getFx:k,limit:50}),F=u.div`
    width: 100%;
    display: flex;
    justify-content: center;
    height: calc(100vh - 20px);

    @media (max-width: 1000px) {
        height: calc(100vh - 80px);
    }
`,A=()=>{var r;const{data:{user:t}}=x.useUser(),{$isPending:a,$items:n}=l,i=g(a),e=g(n),c=s=>s!=null&&s.title?`Кафедра: ${s==null?void 0:s.title} • Всего: ${(e==null?void 0:e.length)??0}`:null;return o.jsx(m,{load:function(){},loading:i,error:null,data:e,children:o.jsx($,{children:o.jsx(F,{children:o.jsx(P,{maxWidth:"700px",orientation:"vertical",height:"100%",maxHeight:"100%",justifyContent:"none",noAppearanceInMobile:!0,children:o.jsx(v,{searchPlaceholder:"Поиск сотрудников",paginationList:l,filterRequest:f,defaultFilter:((r=t==null?void 0:t.subdivisions)==null?void 0:r[0].subdivision)??"",filterPlaceholder:"Подразделения",underSearchText:c})})})})})};export{A as default};
