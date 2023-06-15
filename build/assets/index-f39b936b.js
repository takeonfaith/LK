import{y as l,s as h,a6 as d,aI as g,j as e}from"./vendor-0c76c893.js";import{x as m,W as x,r as j,al as P}from"./index-a7bcef13.js";import{g as y,a as v}from"./student-api-8e666bb3.js";import{c as M,L as k}from"./index-5cc683df.js";import{B as F}from"./index-80b0a22e.js";import"./index-80d7ddc5.js";const L=l(async n=>{const{search:o="",page:i,limit:r,filter:a}=n,{data:s}=await y(o,(a==null?void 0:a.id.toString())??"",i,r);return{results:s.items}}),p=M({getFx:L,limit:50}),S=h.div`
    width: 100%;
    display: flex;
    justify-content: center;
    height: calc(100vh - 20px);

    @media (max-width: 1000px) {
        height: calc(100vh - 80px);
    }
`,B=()=>{const{$isPending:n,$items:o}=p,i=d(n),r=g(),a=d(o),{data:{user:s}}=m.useUser(),c=r.params.filter??(s==null?void 0:s.group)??"",u=t=>(t==null?void 0:t.title)==="Все"||!(t!=null&&t.id)?null:`Группа: ${t==null?void 0:t.id} • Всего: ${(a==null?void 0:a.length)??0}`;return e.jsx(x,{load:function(){},loading:i,error:null,data:a,children:e.jsx(j,{children:e.jsx(S,{children:e.jsx(F,{maxWidth:"700px",orientation:"vertical",height:"100%",maxHeight:"100%",justifyContent:"none",noAppearanceInMobile:!0,children:e.jsx(k,{searchPlaceholder:"Поиск студентов",paginationList:p,filterRequest:v,filterPlaceholder:"Группа",defaultFilter:c,filter:(s==null?void 0:s.user_status)==="stud"?c:void 0,customMask:P.groupMask,underSearchText:u})})})})})};export{B as default};
