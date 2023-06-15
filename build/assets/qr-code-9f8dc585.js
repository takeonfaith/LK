import{s as a,r as t,j as e}from"./vendor-0c76c893.js";import{aN as d}from"./index-8010090a.js";const o=a.div`
    width: 100%;
    min-width: 250px;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        border-radius: 4px;
    }

    @media (max-width: 1000px) {
        width: 100%;
        min-width: 100%;
    }
`,p=({qrCode:s})=>{const[i,r]=t.useState(!0);return t.useEffect(()=>{setTimeout(()=>{r(!1)},1200)},[]),e.jsx(o,{children:e.jsx(d,{loading:i,width:"300px",height:"300px",src:s??""})})};export{p as Q};
