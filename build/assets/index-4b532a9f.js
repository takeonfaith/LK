import{s as l,r as d,j as t,aY as p}from"./vendor-292fea82.js";import{b0 as f,i as h,az as m,ax as x,f as c}from"./index-ddc703de.js";const j=l.div`
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
`,o=({qrCode:i})=>{const[s,e]=d.useState(!0);return d.useEffect(()=>{setTimeout(()=>{e(!1)},500)},[]),t.jsx(j,{children:t.jsx(f,{loading:s,width:"300px",height:"300px",src:i??""})})},u=l.div`
    @media (min-width: 1001px) {
        width: 300px;
    }
`,g=({qr_current:i,qr_total:s,currentPage:e})=>e===0?t.jsx(o,{qrCode:i}):e===1?t.jsx(o,{qrCode:s}):t.jsx(u,{children:t.jsx(h,{pages:[{title:"Текущая залолженность",content:t.jsx(o,{qrCode:i})},{title:"Общая залолженность",content:t.jsx(o,{qrCode:s})}],appearance:!1,currentPage:e})}),y=({type:i="horizontal",...s})=>{const{open:e}=m(),n="Оплатить через QR-code",r=`linear-gradient(45deg, ${c.green.main}, ${c.green.dark1})`,a=()=>{e(t.jsx(g,{...s}),n)};return i==="vertical"?t.jsx(x,{onClick:a,width:"68px",height:"60px",direction:"vertical",text:"QR",icon:t.jsx(p,{}),textColor:"#fff",background:r}):t.jsx(x,{text:n,onClick:a,width:"100%",textColor:"#fff",background:r})};export{y as P};
