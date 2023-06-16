import{s,j as t,R as a}from"./vendor-0c76c893.js";import{a as r}from"./page-link-content-a074f185.js";import{a as c,b as d}from"./index.esm-aaf37469.js";import{ai as l}from"./index-1840b39c.js";const p=s.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    position: relative;
    display: flex;
    align-items: center;
    font-weight: 700;
    width: 100%;
    padding: 10px 0;
    cursor: pointer;
    position: relative;
    user-select: none;
    text-decoration: none;

    .icon-and-title {
        display: flex;
        align-items: center;
        gap: 15px;
    }

    svg {
        width: 22px;
        height: 22px;
    }

    .buttons {
        display: flex;
        align-items: center;
        column-gap: 5px;

        svg {
            margin: 0;
        }
    }

    &:hover::before {
        width: 5px;
        background: var(--red);
    }
`,m=({chosen:e,onClick:o})=>t.jsx(l,{minWidth:"35px",background:"transparent",icon:e?t.jsx(c,{style:{color:"var(--blue)"}}):t.jsx(d,{}),onClick:o}),x=e=>{const{id:o,chosen:n,switchMenuItem:i}=e;return t.jsxs(p,{chosen:n,onClick:()=>i(o),children:[t.jsx(r,{background:"transparent",maxWordLength:100,orientation:"horizontal",shadow:!1,...e}),t.jsx("div",{className:"buttons",children:t.jsx(m,{chosen:n,onClick:()=>{i(o)}})})]})},j=a.memo(x);export{j as C};
