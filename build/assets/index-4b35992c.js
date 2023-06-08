import{d as $,e as f,aJ as w,aK as j,r as b,j as r,s as F,a6 as D}from"./vendor-1714f5a3.js";import{a2 as G,a3 as I,T as O,u as U,a4 as z,a5 as B}from"./index-a5eecfde.js";import{S as H}from"./index-167f2659.js";const J=50;function Q(s){const{getFx:t,limit:o=J,reset:u=[]}=s,i=$(),g=$(),c=f(null),a=f(null);a.on(t.doneData,(e,n)=>[...e||[],...n.results||[]]),a.reset([i,...u]);const l=f(1);l.on(t.doneData,e=>++e),l.reset([i,...u]);const p=t.pending,h=f(!1);h.reset([i,...u]);const m=w(a,h,(e,n)=>!!(e!=null&&e.length)&&!n);return j({clock:i,fn:e=>({...e,limit:e.limit||o,page:e.page??1}),target:[t,c]}),j({clock:g,source:{lastArgs:c,page:l},fn:({lastArgs:e={},page:n})=>({...e,limit:o,page:n}),target:t}),j({clock:t.doneData,source:c,fn:(e,n)=>!!e&&(n.results||[]).length<e.limit,target:h}),{$items:a,$isPending:p,$hasNext:m,next:g,load:i}}const K=({setExternalValue:s,inputAppearance:t,placeholder:o,validationCheck:u,searchApi:i,triggerSearchOn:g,hints:c})=>{const a=e=>{i(e)},[l,p,h]=G({onDebounce:a,onClear:a,delay:500}),m=e=>{p(e),s&&s(e)};return b.useEffect(()=>{a(l??"")},[...g??[]]),r.jsx(I,{value:l??"",setValue:m,inputAppearance:t,placeholder:o,validationCheck:u,loading:h,hints:c})},M=F.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

    .search-and-filter {
        display: flex;
        gap: 0.5rem;
        width: 100%;
        margin-bottom: 0.5rem;
    }
`,T=({title:s,searchPlaceholder:t,paginationList:o,defaultFilter:u,noResultContent:i,filterPlaceholder:g,filterRequest:c,underSearchText:a,customMask:l})=>{const{$items:p,$isPending:h,$hasNext:m,next:e,load:n}=o,N=D(h),P=D(m),[x,k]=b.useState(u),[d,L]=b.useState({id:x,value:x,title:x}),S=a==null?void 0:a(d),y=()=>{e({filter:d})},A=()=>{n({filter:d})},C=v=>{n({filter:d,search:v})},E=v=>{L(v??null)},V=()=>{L(null)};return r.jsxs(M,{children:[s&&r.jsx(O,{size:2,align:"left",bottomGap:!0,children:s}),r.jsxs("div",{className:"search-and-filter",children:[r.jsx(K,{triggerSearchOn:[(d==null?void 0:d.id)??""],placeholder:t??"Поиск",searchApi:C,validationCheck:!0}),c&&r.jsx(H,{value:x,setValue:k,onHintClick:E,onValueEmpty:V,customMask:l,placeholder:g??"Поиск",request:c})]}),r.jsx(U,{visible:!!S,children:S}),r.jsx(z,{items:p.getState(),renderItem:R,handleNext:y,isPending:N,hasNext:P,filter:d,handleReload:A,showAlphabetLetters:!0,noResultContent:i})]})};function R(s,t,o){return r.jsx(B,{name:s.fio,type:s.division?"staff":"stud",avatar:s.avatar,group:s.group,isMe:t,division:s.division,indexNumber:(o??0)+1},o)}export{T as L,Q as c};
