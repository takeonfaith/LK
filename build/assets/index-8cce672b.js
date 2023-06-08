import{s as a,j as e}from"./vendor-1714f5a3.js";import{at as i,W as o,au as t,l as s}from"./index-a5eecfde.js";import{E as l}from"./index-82e0eef8.js";const p=a.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100%;
    color: var(--text);
    gap: 10px;
`,j=()=>{const{data:r,error:n}=i.useElectronicInteraction(),c=async()=>{t.postElectronicInteractionFx()};return e.jsx(o,{load:()=>t.getElectronicInteractionFx(),loading:!r,error:n,data:r,children:e.jsx(p,{children:r&&e.jsx(l,{data:r,submit:c,children:e.jsxs("p",{className:"info-text",children:["Я, ",e.jsx("b",{children:r.fio}),",",e.jsxs("p",{children:[e.jsx("b",{children:"Паспорт: "}),r.passSer," ",r.passNum,", выдан ",s(r.passDate)," ",r.passDiv,e.jsx("br",{}),e.jsx("b",{children:"Дата рождения: "}),s(r.bdate),e.jsx("br",{}),e.jsx("b",{children:"Номер мобильного телефона: "}),r.phone,e.jsx("br",{}),e.jsx("b",{children:"Адрес электронной почты: "}),r.email]}),e.jsxs("p",{children:["настоящим безоговорочно без каких-либо изъятий или ограничений на условиях присоединения принимаю условия"," ",e.jsx("a",{target:"_blank",href:"https://e.mospolytech.ru/old/storage/files/EAccept.pdf",rel:"noreferrer",children:"СОГЛАШЕНИЯ"})," ","об электронном взаимодействии, опубликованного на официальном сайте Университета, и выражаю согласие на подписание электронных документов в личном кабинете."]})]})})})})};export{j as default};
