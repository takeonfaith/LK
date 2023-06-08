import{s as i,j as t}from"./vendor-1714f5a3.js";import{f as d,T as l}from"./index-a5eecfde.js";const n=r=>r===0?"grey":r<=40?"red":r<=60?"orange":r<=80?"blue":"green",a={small:4,middle:9,big:14},h=i.div`
    width: 100%;
    h5 {
        color: ${({coloring:r,value:e})=>r?d[n(e)].main:"var(--text)"};
    }
`,c=i.div`
    width: ${({value:r})=>r+"%"};
    border-radius: var(--brLight);
    height: ${({size:r})=>a[r]}px;
    transition: 0.2s;
    background: ${({coloring:r,value:e})=>r?d[n(e)].main:"var(--schedule)"};
`,g=i.div`
    width: 100%;
    border-radius: var(--brLight);
    background-color: var(--scheduleBg);
    height: ${({size:r})=>a[r]}px;
    overflow: hidden;
`,b=({title:r,value:e,size:s="middle",coloring:o=!0})=>t.jsxs(h,{value:e,coloring:o,children:[t.jsx(l,{size:5,align:"left",visible:!!r,bottomGap:!0,children:r}),t.jsx(g,{size:s,children:t.jsx(c,{size:s,coloring:o,value:e})})]});export{b as P};
