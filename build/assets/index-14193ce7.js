import{h,s as l,a6 as d,aI as g,j as e}from"./vendor-1714f5a3.js";import{x as m,W as x,r as j,al as P}from"./index-a5eecfde.js";import{g as v,a as y}from"./student-api-f38ccc74.js";import{c as M,L as k}from"./index-4b35992c.js";import{B as F}from"./index-06cfa6e7.js";import"./index-167f2659.js";const L=h(async n=>{const{search:o="",page:i,limit:r,filter:s}=n,{data:a}=await v(o,(s==null?void 0:s.id.toString())??"",i,r);return{results:a.items}}),p=M({getFx:L,limit:50}),S=l.div`
    width: 100%;
    display: flex;
    justify-content: center;
    height: calc(100vh - 20px);

    @media (max-width: 1000px) {
        height: calc(100vh - 80px);
    }
`,B=()=>{const{$isPending:n,$items:o}=p,i=d(n),r=g(),s=d(o),{data:{user:a}}=m.useUser(),c=r.params.filter??(a==null?void 0:a.group)??"",u=t=>(t==null?void 0:t.title)==="Все"||!(t!=null&&t.id)?null:`Группа: ${t==null?void 0:t.id} • Всего: ${(s==null?void 0:s.length)??0}`;return e.jsx(x,{load:function(){},loading:i,error:null,data:s,children:e.jsx(j,{children:e.jsx(S,{children:e.jsx(F,{maxWidth:"700px",orientation:"vertical",height:"100%",maxHeight:"100%",justifyContent:"none",noAppearanceInMobile:!0,children:e.jsx(k,{searchPlaceholder:"Поиск студентов",paginationList:p,filterRequest:y,filterPlaceholder:"Группа",defaultFilter:c,filter:(a==null?void 0:a.user_status)==="stud"?c:void 0,customMask:P.groupMask,underSearchText:u})})})})})};export{B as default};
