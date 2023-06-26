import{F as ot,a as jt,b as We,c as Kn,H as Ki,y as H,u as P,p as te,d as C,r as l,j as t,e as Et,S as Pe,s as f,f as Oe,I as Mr,g as Fr,h as Br,i as Xn,A as Jn,k as I,l as Ur,m as Qn,n as Ee,o as Ve,q as Zn,L as Z,t as Hr,v as Ht,w as es,x as at,z as ts,B as St,C as W,D as Wr,E as Vr,G as ai,J as Gr,K as Yr,R as ne,M as $t,N as Ci,O as Ni,P as gi,Q as is,T as ns,U as Xi,V as qr,W as Kr,X as fi,Y as Xr,Z as Jr,_ as Ii,$ as Li,a0 as ss,a1 as Qr,a2 as os,a3 as Pt,a4 as zt,a5 as Zr,a6 as as,a7 as ri,a8 as Mt,a9 as Je,aa as el,ab as B,ac as rs,ad as tl,ae as il,af as Wt,ag as nl,ah as kt,ai as ls,aj as sl,ak as ol,al,am as rl,an as ll,ao as cl,ap as dl,aq as Ji,ar as pl,as as ul,at as he,au as hl,av as gl,aw as fl,ax as cs,ay as xl,az as ml,aA as bl,aB as vl,aC as _l,aD as yl,aE as wl,aF as jl,aG as kl,aH as ds,aI as ps,aJ as us,aK as Tl,aL as El,aM as Sl,aN as $l,aO as Pl}from"./vendor-292fea82.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function n(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(o){if(o.ep)return;o.ep=!0;const a=n(o);fetch(o.href,a)}})();const Ol="Не удалось загрузить информацию. Проверьте соединение и попробуйте ещё раз",Al=3,qt=["home","settings","all"],hs=["home","settings","download-agreements","all"],gs="https://lk.eseur.ru/signup",Rl="https://old.mospolytech.ru/index.php?id=3428",w={green:{dark3:"#106c3f",dark2:"#188851",dark1:"#27b56e",main:"#3cd288",light1:"#49e698",light2:"#58f3a6",light3:"#6bfeb5",transparent1:"#a7ffd38a",transparent2:"#a7ffd324",transparent3:"#4ad18e1f"},lightGreen:{dark3:"#166363",dark2:"#207878",dark1:"#2e9b9b",main:"#40c5c5",light1:"#66dfdf",light2:"#8bf1f1",light3:"#a3fbfb",transparent1:"#a3fbfb99",transparent2:"#a3fbfb59",transparent3:"#a3fbfb29"},blue:{dark3:"#29349c",dark2:"#3742b1",dark1:"#4552c9",main:"#5f6dec",light1:"#7c88f5",light2:"#99a3ff",light3:"#bac0ff",transparent1:"#bac0ffa3",transparent2:"#bac0ff42",transparent3:"#bac0ff17"},lightBlue:{dark3:"#5278cd",dark2:"#668de4",dark1:"#789ff6",main:"#9cbbff",light1:"#b9cfff",light2:"#ceddff",light3:"#e0e9ff",transparent1:"#e0e9ffba",transparent2:"#e0e9ff6b",transparent3:"#e0e9ff29"},darkBlue:{dark3:"#211d69",dark2:"#272279",dark1:"#2e2891",main:"#3831a5",light1:"#443cc5",light2:"#5850d4",light3:"#675fe5",transparent1:"#5c54d9e0",transparent2:"#5c54d9b5",transparent3:"#5c54d98c"},purple:{dark3:"#5b248d",dark2:"#7434af",dark1:"#8b4ac7",main:"#a85fec",light1:"#bd7cfa",light2:"#ce99ff",light3:"#dcb7ff",transparent1:"#dcb7ff99",transparent2:"#dcb7ff5c",transparent3:"#dcb7ff2b"},pink:{dark3:"#932066",dark2:"#a62b77",dark1:"#c34191",main:"#ec5fb6",light1:"#fd84cf",light2:"#ffa8de",light3:"#ffbce5",transparent1:"#ffbce59e",transparent2:"#ffbce561",transparent3:"#ffbce530"},red:{dark3:"#a3252f",dark2:"#bf3641",dark1:"#cf4b56",main:"#ec5f6b",light1:"#ff7b86",light2:"#ff98a1",light3:"#ffbbc1",transparent1:"#ffbbc194",transparent2:"#ffbbc159",transparent3:"#ffbbc133"},orange:{dark3:"#985e1d",dark2:"#a76821",dark1:"#ca8231",main:"#ee9e44",light1:"#fcb566",light2:"#ffc686",light3:"#ffd7ab",transparent1:"#ffd7ab99",transparent2:"#ffd7ab54",transparent3:"#ffd7ab1f"},grey:{dark3:"#353535",dark2:"#484848",dark1:"#646464",main:"#797979",light1:"#979797",light2:"#bdbdbd",light3:"#d5d5d5",transparent1:"#d5d5d5a3",transparent2:"#d5d5d559",transparent3:"#d5d5d521"},white:{dark3:"",dark2:"",dark1:"",main:"#fff",light1:"",light2:"",light3:"",transparent1:"",transparent2:"#80808014",transparent3:"#ffffff17"}},wb={monday:{full:"Понедельник",short:"Пн"},tuesday:{full:"Вторник",short:"Вт"},wednesday:{full:"Среда",short:"Ср"},thursday:{full:"Четверг",short:"Чт"},friday:{full:"Пятница",short:"Пт"},saturday:{full:"Суббота",short:"Сб"}},jb={Зачтено:w.green.main,"Не зачтено":w.red.main,Отлично:w.green.main,Хорошо:w.blue.main,Удовлетворительно:w.orange.main,Неудовлетворительно:w.red.main,"Не явился":w.red.main,default:w.red.main},kb={Зачтено:5,"Не зачтено":2,Отлично:5,Хорошо:4,Удовлетворительно:3,"Не явился":2,Неудовлетворительно:2},O="https://e.mospolytech.ru/old",Cl="2023-06-25T00:43:43",Ge={info:{icon:ot,color:"blue",title:"Информация"},alert:{icon:jt,color:"orange",title:"Внимание!"},failure:{icon:We,color:"red",title:"Ошибка"},success:{icon:Kn,color:"green",title:"Успешно"},tip:{icon:Ki,color:"grey",title:"Подсказка"},hint:{icon:Ki,color:"white",title:"Подсказка"}},Nl={"-":"red",А:"lightGreen",Б:"purple",В:"green",Г:"pink",Д:"blue",Е:"blue",Ё:"red",Ж:"blue",З:"lightGreen",И:"pink",Й:"lightBlue",К:"lightGreen",Л:"green",М:"red",Н:"green",О:"purple",П:"blue",Р:"lightBlue",С:"orange",Т:"pink",У:"lightGreen",Ф:"blue",Х:"green",Ч:"purple",Ц:"green",Ш:"red",Щ:"red",Ъ:"purple",Ы:"green",Ь:"blue",Э:"red",Ю:"orange",Я:"green",A:"lightGreen",B:"purple",C:"green",D:"pink",E:"purple",F:"blue",G:"red",H:"blue",I:"lightGreen",J:"pink",K:"lightGreen",L:"green",M:"red",N:"green",O:"purple",P:"blue",Q:"lightBlue",R:"orange",S:"blue",T:"lightGreen",U:"blue",V:"green",W:"purple",X:"red",Y:"red",Z:"purple"},Il=["image/jpeg","image/jpg","image/png","application/pdf"],Ll=10,Dl="376px",Qi=!0,zl={all:!0,messages:!0,newVersion:!0,schedule:!0,news:!0,applications:!0,doclist:!0},Ml=()=>Object.keys(ve).reduce((e,i)=>(e[i]={id:i,property:{}},e),{}),fs=(e="")=>({[e]:{...Ml(),[ve["settings-appearance"]]:{id:ve["settings-appearance"],property:{theme:"dark",scheduledLightTheme:!1,lightThemeRange:["300","1140"]}},[ve["settings-home-page"]]:{id:ve["settings-home-page"],property:{pages:["settings","profile","chat","schedule","payments","project-activity","all-students"],widgetSchedule:!0,widgetPayment:!0}},[ve["settings-customize-menu"]]:{id:ve["settings-customize-menu"],property:{pages:qt}},[ve["settings-notifications"]]:{id:ve["settings-notifications"],property:zl}}});var ve=(e=>(e["settings-home-page"]="settings-home-page",e["settings-personal"]="settings-personal",e["settings-appearance"]="settings-appearance",e["settings-customize-menu"]="settings-customize-menu",e["settings-notifications"]="settings-notifications",e))(ve||{});const xi={settings:fs(),error:null,completed:!1};let fe;const Fl=()=>({settings:C(Ft).settings[fe],error:C(Ft).error,completed:C(Ft).completed}),Bl=(e,i)=>{if(!e)return i;const n={...e};for(const s in i)n[s]===void 0&&(n[s]=i[s]);return n},xs=H(e=>{fe=e;const i=JSON.parse(localStorage.getItem("new-settings")??"{}")[fe];return Bl(i,fs(e)[e])}),ms=P(),bs=P(),vs=P(),Ft=te(xi).on(bs,(e,i)=>({...e,completed:i.completed})).on(xs.doneData,(e,i)=>({...e,settings:{[fe]:i}})).on(ms,(e,{nameSettings:i,nameParam:n,value:s})=>({...e,settings:{[fe]:{...e.settings[fe],[i]:{...e.settings[fe][i],property:{...e.settings[fe][i].property,[n]:s}}}}})).on(vs,()=>({...xi}));Ft.watch(e=>{if(e!==xi&&fe){const i=JSON.parse(localStorage.getItem("new-settings")??JSON.stringify({}));i[fe]=e.settings[fe],localStorage.setItem("new-settings",JSON.stringify(i))}});const rt={useSettings:Fl},Ot={updateSetting:ms,changeCompleted:bs,clearStore:vs},Ul={getLocalSettingsFx:xs},Kt=()=>{const{settings:e}=rt.useSettings(),i=e==null?void 0:e["settings-appearance"],[n,s]=l.useState("light");l.useEffect(()=>{if(e){const a=new Date().getHours()*60+new Date().getMinutes(),r=i.property.lightThemeRange??0,d=a>+r[0]&&a<+r[1],c=i.property.scheduledLightTheme?d?"light":"dark":i.property.theme;document.documentElement.getAttribute("data-theme"),document.documentElement.setAttribute("data-theme",c),s(c)}else document.documentElement.setAttribute("data-theme","light")},[e]);const o=l.useCallback(a=>{s(()=>{const r=a?"dark":"light";return document.documentElement.setAttribute("data-theme",r),Ot.updateSetting({nameSettings:"settings-appearance",nameParam:"theme",value:r}),r})},[]);return{theme:n,switchTheme:o}},Di=l.createContext({isOpen:!1,component:void 0,back:()=>{},close:()=>{},open:()=>{},title:void 0,canBack:!1}),Hl=({children:e})=>{const[i,n]=l.useState(!1),[s,o]=l.useState([]),[a,r]=l.useState([]),d=a.length>1,c=l.useCallback(()=>{d&&(a.pop(),s.pop(),r([...a]),o([...s]))},[a,r]),p=l.useCallback((g,m)=>{g&&(i?(r(()=>[...a,g]),o(()=>[...s,m??""])):(r(()=>[g]),o(m?[m]:[])),n(()=>!0))},[r,n,a,i]),h=l.useCallback(()=>{n(()=>!1)},[r,n]),b=l.useMemo(()=>a[a.length-1],[a]),x=l.useMemo(()=>s[s.length-1],[s]),u=l.useCallback(g=>{g&&r([...a,g])},[]);return t.jsx(Di.Provider,{value:{back:c,open:p,close:h,isOpen:i,canBack:d,component:b,title:x,setComponent:u},children:e})},G=()=>{const{open:e,isOpen:i,...n}=l.useContext(Di);return{open:e,isOpen:i,...n}},Xt=()=>localStorage.getItem("jwt"),Wl=e=>{const n=e.split(".")[1].replace(/-/g,"+").replace(/_/g,"/"),s=decodeURIComponent(window.atob(n).split("").map(function(o){return"%"+("00"+o.charCodeAt(0).toString(16)).slice(-2)}).join(""));return JSON.parse(s)},Vl=`${O}/lk_api.php`,Gl="https://api.mospolytech.ru/serviceforfrontpersonnelorders/",Yl="https://api.mospolytech.ru/serviceforfrontpersonnelorders/Dismissal.GetAllHistory",ql="https://api.mospolytech.ru/serviceforfrontpersonnelorders/Dismissal.AllHistory",L=Et.create({baseURL:Vl,withCredentials:!0}),_s=Et.create({baseURL:Yl,timeout:3e4}),Kl=Et.create({baseURL:ql}),Xl=Et.create({baseURL:Gl});_s.interceptors.request.use(e=>(e.headers||(e.headers={}),e.headers.Authorization=`Bearer ${JSON.parse(Xt()||"{}")}`,e));Kl.interceptors.request.use(e=>(e.headers||(e.headers={}),e.headers.Authorization=`Bearer ${JSON.parse(Xt()||"{}")}`,e));Xl.interceptors.request.use(e=>(e.headers||(e.headers={}),e.headers.Authorization=`Bearer ${JSON.parse(Xt()||"{}")}`,e));function M(){var e;return(e=JSON.parse(localStorage.getItem("token")??sessionStorage.getItem("token")??"null"))==null?void 0:e.token}const Jl=({login:e,password:i})=>L.post("",`ulogin=${encodeURIComponent(e)}&upassword=${encodeURIComponent(i)}`),Ql=e=>L.get(`?getUser&token=${e}`),Zl=e=>L.get(`?getADName&fio=${e.fio}&pn=${e.pn}`),Tb=async e=>{const i=new FormData;return i.set("avatar",e??""),i.set("token",M()),L.post("?changeAvatar=1",i,{headers:{"Content-Type":"multipart/form-data"}})},Eb=async(e,i)=>{const n=new FormData;return n.set("old_pass",e),n.set("new_pass",i),L.post(`?changeADPass=1&token=${M()}`,n,{headers:{"Content-Type":"multipart/form-data"}})},Sb=async e=>{const i=new FormData;return i.set("email",e),i.set("token",M()),L.post("?changeEmail=1",i,{headers:{"Content-Type":"multipart/form-data"}})},$b=async e=>{const i=new FormData;return i.set("phone",e),i.set("token",M()),L.post("?changePhone=1",i,{headers:{"Content-Type":"multipart/form-data"}})},ec=e=>L.get(`?getSchedule&group=${e}&token=${M()}`),Zi=e=>L.get(`?getScheduleTeacher&fio=${e}&token=${M()}`),tc=()=>L.get(`?getSchedule&session=1&token=${M()}`),en=e=>L.get(`?getScheduleTeacher&fio=${e}&session=1&token=${M()}`),ic=()=>L.get(`?getPayments&token=${M()}`),Pb=e=>L.get(`?signAgreement=${e}&token=${M()}`),nc=e=>L.get(`?signContract=${e}&token=${M()}`),sc=async({semestr:e})=>{var i,n;return(n=(i=await L.get(`?getAcademicPerformance&semestr=${e}&token=${M()}`))==null?void 0:i.data)==null?void 0:n.academicPerformance},oc=e=>L.get(`?getMessages&token=${M()}&id=${e}`),ac=()=>L.get(`?getPEPStatus&token=${M()}`),rc=()=>L.get(`?setPEPAccept&token=${M()}`),lc=()=>L.get(`?getContactData&token=${M()}`),cc=e=>{const i=new FormData;i.set("token",M()),i.set("saveContactData","1");for(const[n,s]of Object.entries(e))i.set(n,s);return L.post("?saveContactData=1",i,{headers:{"Content-Type":"multipart/form-data"}})},dc=()=>L.get(`?getRequestHighComfort&token=${M()}`),Ob=e=>{const i=new FormData;i.set("token",M()),i.set("postRequestHighComfort","1");for(const[n,s]of Object.entries(e))i.set(n,s);return L.post("?postRequestHighComfort=1",i,{headers:{"Content-Type":"multipart/form-data"}})},pc=()=>L.get(`?getAppRequests&token=${M()}`),uc=()=>L.get(`?getAppData&token=${M()}`),hc=()=>_s.get(`?employeeGuid=${Wl(JSON.parse(Xt()||"{}")).IndividualGuid}`),gc=async e=>{const{formId:i,args:n}=e,s=new FormData;s.set("token",M()),s.set("saveAppData",i);for(const[a,r]of Object.entries(n))s.set(a,r);const{data:o}=await L.post(`?saveAppData=${i}`,s,{headers:{"Content-Type":"multipart/form-data"}});return o.result},fc=async()=>(await L.get(`?getAdminLinks&token=${M()}`)).data,xc=async e=>(await L.get(`?PDinfo&token=${M()}`)).data,ys=()=>L.get(`?getNotification&token=${M()}`),mc=e=>L.get(`?viewNotification=${e}&token=${M()}`),bc=Object.freeze(Object.defineProperty({__proto__:null,get:ys,view:mc},Symbol.toStringTag,{value:"Module"})),ws=()=>L.get(`?getDocList&token=${M()}`).then(e=>({...e,data:e.data.map(i=>({...i,document:!0}))})),vc=e=>L.get(`?viewDoc=${e}&token=${M()}`),_c=Object.freeze(Object.defineProperty({__proto__:null,get:ws,view:vc},Symbol.toStringTag,{value:"Module"})),yc=(e,i,n,s)=>L.get(`?getStaff&search=${e}&division=${i}&page=${n}&perpage=${s}&token=${M()}`),wc=e=>L.get(`?getDivs=${e}&page=1&token=${M()}`),jc=()=>L.get(`?getCheckData&token=${M()}`),kc=e=>{const i=new FormData;i.set("token",M()),i.set("saveCheckData","1");for(const[n,s]of Object.entries(e))i.set(n,s);return L.post("?saveCheckData=1",i,{headers:{"Content-Type":"multipart/form-data"}})},Tc=(e,i,n,s)=>L.get(`?getStudents&search=${e}&group=${i}&page=${n}&perpage=${s}&token=${M()}`),Ec=async e=>await L.get(`?getGroups=${e}&perpage=30&page=1&token=${M()}`),Sc=async()=>(await L.get(`?getAlerts&token=${M()}`)).data,$c=()=>L.get(`?getNotifications&token=${M()}`),Pc=e=>L.get(`?clearNotificationById=${e}&token=${M()}`),Oc=()=>L.get(`?clearAllNotifications&token=${M()}`),tn={data:null,loading:!1,error:null},Jt=({initialStore:e,api:i,prepareData:n,errorMessage:s=()=>Ol})=>{const o=e??tn,a=()=>({data:C(c).data,loading:C(r.pending),error:C(c).error}),r=H(async p=>{try{const h=await i.get(p);return n?n(h):h}catch(h){throw new Error(s(h))}}),d=P(),c=te(o).on(r,p=>({...p,error:null})).on(r.doneData,(p,h)=>({...p,data:h})).on(r.failData,(p,h)=>({...p,error:h.message})).on(d,()=>({...tn}));return{selectors:{useData:a},effects:{getFx:r},events:{clearStore:d}}},je="exam",js="test",Ac={"Курсовой проект":je,"Курсовая работа":je,"Дипломный проект":je,"Дипломная работа":je,"ГЭК. Защита ВКР":je,Экзамен:je,Практика:je,"Дифференцированный зачет":je,Зачет:js};function Rc(e){const i={[je]:[],[js]:[]};for(const n of e)i[Ac[n.exam_type]].push(n);return i}const Cc=Jt({api:{get:sc},prepareData:Rc}),mi=Jt({api:{get:fc}}),Nc=e=>e.reduce((i,n)=>{const s=new Date(n.date).getFullYear();return i[s]?i[s].push(n):i[s]=[n],i},{}),Ic=Jt({api:{get:Sc},prepareData:Nc}),nn={listApplication:null,error:null,dataUserApplication:null,dataWorkerApplication:null},Lc=()=>{const{listApplication:e,dataUserApplication:i,dataWorkerApplication:n,error:s}=C(Dc);return{data:{listApplication:e,dataUserApplication:i,dataWorkerApplication:n},loading:C(ft.pending),error:s}},gt=H(async()=>{const e=await pc();try{return e.data.reverse()}catch{throw new Error("Не удалось загрузить заявления")}}),ft=H(async()=>{const e=await uc();try{return e.data}catch{throw new Error("Не удалось загрузить информацию о пользователе")}}),ks=H(async e=>{const i=await gc(e);if(i==="ok")return"ok";throw new Error(i)}),Bt=H(async()=>{const e=await hc();try{return e.data}catch{throw new Error("Не удалось загрузить информацию о пользователе")}}),Ts=P();Pe({from:ks.doneData,to:gt});const Dc=te(nn).on(ft,e=>({...e,error:null})).on(ft.doneData,(e,i)=>({...e,dataUserApplication:i})).on(ft.failData,(e,i)=>({...e,error:i.message})).on(gt,e=>({...e,error:null})).on(gt.doneData,(e,i)=>({...e,listApplication:i})).on(gt.failData,(e,i)=>({...e,error:i.message})).on(Bt,e=>({...e,error:null})).on(Bt.doneData,(e,i)=>({...e,dataWorkerApplication:i})).on(Bt.failData,(e,i)=>({...e,error:i.message})).on(Ts,()=>({...nn})),lt={useApplications:Lc},Ye={getApplicationsFx:gt,getUserDataApplicationsFx:ft,postApplicationFx:ks,getWorkerPosts:Bt},zc={clearStore:Ts},Mc=Object.freeze(Object.defineProperty({__proto__:null,effects:Ye,events:zc,selectors:lt},Symbol.toStringTag,{value:"Module"})),sn={isOpen:!1,message:null,onConfirm:()=>null,onReject:()=>null},Fc=()=>C(Bc),Es=P(),Ss=P(),$s=P(),Bc=te(sn).on(Es,(e,{message:i,onReject:n,onConfirm:s})=>({isOpen:!0,message:i,onConfirm:s,onReject:n})).on(Ss,e=>({...e,isOpen:!1})).on($s,()=>({...sn})),Ps={useConfirm:Fc},Te={evokeConfirm:Es,closeConfirm:Ss,clearStore:$s},Uc=Object.freeze(Object.defineProperty({__proto__:null,events:Te,selectors:Ps},Symbol.toStringTag,{value:"Module"})),Hc=({defaultStore:e,api:i})=>{const n=e,s=()=>({data:C(c).data,loading:C(r.pending),error:C(c).error,completed:C(c).completed}),o=P(),a=H(async p=>{try{return(await i.post(p)).data}catch{throw new Error("Не удалось отправить данные. Проверьте интернет соединение и попробуйте снова")}}),r=H(async()=>{if(i.get)try{return{...(await i.get()).data}}catch(p){throw new Error(p)}return n.data}),d=P(),c=te(n).on(r,p=>({...p,error:null})).on(r.doneData,(p,h)=>({...p,data:h})).on(r.failData,(p,h)=>({...p,error:h.message})).on(o,(p,h)=>({...p,completed:h.completed})).on(d,()=>({...n}));return{selectors:{useForm:s},effects:{getFormFx:r,postFormFx:a},events:{changeCompleted:o,clearStore:d}}},{effects:Wc,events:Vc,selectors:Gc}=Hc({defaultStore:{completed:!1,error:null,loading:!0,data:null},api:{get:lc,post:cc}}),Yc=Object.freeze(Object.defineProperty({__proto__:null,effects:Wc,events:Vc,selectors:Gc},Symbol.toStringTag,{value:"Module"})),on={electronicInteraction:null,error:null,completed:!1},qc=()=>({data:C(li).electronicInteraction,loading:C(xt.pending),error:C(li).error,completed:C(li).completed}),Kc=P(),Os=P(),Xc=H(async()=>{try{return(await rc()).data}catch{throw new Error("Не удалось загрузить раздел")}}),xt=H(async()=>{try{return(await ac()).data[0]}catch(e){throw new Error(e)}}),As=P(),li=te(on).on(xt,e=>({...e,error:null})).on(xt.doneData,(e,i)=>({...e,electronicInteraction:i})).on(xt.failData,(e,i)=>({...e,error:i.message})).on(Os,(e,i)=>({...e,completed:i.completed})).on(As,()=>({...on})),Jc={useElectronicInteraction:qc},Qc={getElectronicInteractionFx:xt,postElectronicInteractionFx:Xc},Zc={postElectronicInteraction:Kc,changeCompleted:Os,clearStore:As},ed=Object.freeze(Object.defineProperty({__proto__:null,effects:Qc,events:Zc,selectors:Jc},Symbol.toStringTag,{value:"Module"})),qe=(e,i="long")=>{if(!e)return"";switch(i){case"long":return new Date(Date.parse(e)).toLocaleDateString("ru",{year:"numeric",month:"long",day:"numeric"});case"short":return new Date(Date.parse(e)).toLocaleDateString("ru",{month:"short",day:"numeric"});case"numeric":return new Date(Date.parse(e)).toLocaleDateString("ru",{year:"numeric",month:"2-digit",day:"2-digit"});case"weird":const n=e.getMonth()<10?`0${e.getMonth()+1}`:`${e.getMonth()+1}`;return`${e.getFullYear()}-${n}-${e.getDate()}`;case"extraWeird":const s=e.getMonth()<9?`0${e.getMonth()+1}`:`${e.getMonth()+1}`,o=e.getDate()<10?`0${e.getDate()}`:`${e.getDate()}`;return`${e.getFullYear()}-${s}-${o}`;default:return new Date(Date.parse(e)).toLocaleDateString("ru",{month:"short",day:"numeric"})}},an=e=>{const i=new Date;return i.setDate(i.getDate()+e),qe(i,"extraWeird")},It=({config:e})=>({title:e.title,data:[{title:"Дата выдачи",type:"date",value:"",editable:!0,fieldName:e.issueDateFieldName,required:!0,minValueInput:an(-30*11),maxValueInput:an(0)},{title:"Организация, выдавшая справку",type:"textarea",fieldName:e.organizationFieldName,value:"",editable:!0,required:!0}],documents:{files:[],fieldName:e.docsFieldName,required:!0,maxFiles:1,allowedTypes:["application/pdf"]}}),Lt={kvdCert:It({config:{title:"Справка из кожно-венерологического диспансера",issueDateFieldName:"kvd_date_of_issue",organizationFieldName:"kvd_organization",docsFieldName:"kvd_docs"}}),fluorographyCert:It({config:{title:"Флюорография",issueDateFieldName:"fluorography_date_of_issue",organizationFieldName:"fluorography_organization",docsFieldName:"fluorography_docs"}}),vichRwCert:It({config:{title:"Результаты лабораторного исследования на ВИЧ, RW",issueDateFieldName:"vichrw_date_of_issue",organizationFieldName:"vichrw_organization",docsFieldName:"vichrw_docs"}}),graftCert:It({config:{title:"Сертификат о профилактических прививках",issueDateFieldName:"graft_date_of_issue",organizationFieldName:"graft_organization",docsFieldName:"graft_docs"}})},Ze=(e,i)=>{var o;const n=!((o=e.documents)!=null&&o.required)||!!e.documents.files.length,s=!e.addNew||!!e.data.length;return!e.data.find(a=>{var r;if(a.type==="date"&&(a.maxValueInput||a.minValueInput)){const d=new Date(((r=a.value)==null?void 0:r.toString())??0);if(a.minValueInput){const c=new Date(a.minValueInput);if(d<c)return!0}if(a.maxValueInput){const c=new Date(a.maxValueInput);if(d>c)return!0}}return i&&a.specialType&&!i.includes(a.specialType)?!1:a.type!=="checkbox-docs"?!a.value&&a.required:a.required&&!a.items.find(d=>!!d.files.length)})&&n&&s},td=f.button`
    display: flex;
    align-items: center;
    justify-content: ${({align:e="center"})=>e};
    border: none;
    color: ${({textColor:e})=>e||"var(--text)"};
    background: ${({isChosen:e,background:i})=>e?"var(--blue)":i??"var(--search)"};
    padding: ${({padding:e})=>e??"10px"};
    border-radius: 10px;
    cursor: pointer;
    font-weight: 600;
    transition: 0.2s transform;
    width: ${({width:e})=>e||"fit-content"};
    min-width: ${({minWidth:e})=>e&&e};
    text-decoration: none;
    flex-direction: ${({direction:e})=>e==="vertical"&&"column"};
    opacity: ${({isActive:e})=>e?1:.5};
    height: ${({height:e="40px"})=>e};

    &:focus {
        outline: 4px solid var(--almostTransparentOpposite);
    }

    &:focus:not(:focus-visible) {
        outline: none;
    }

    &:isactive {
        transform: scale(0.95);
    }

    &:hover {
        background: ${({hoverBackground:e,isChosen:i,background:n})=>e??(i?"var(--blue)":n??"var(--search)")};
        filter: brightness(0.97);
    }

    .text {
        margin-top: ${({direction:e,text:i})=>e==="vertical"&&i&&"6px"};
    }

    .icon {
        margin-right: ${({text:e,direction:i})=>e&&i==="horizontal"?"7px":"0"};
        width: ${({direction:e,text:i})=>e==="vertical"||!i?"20px":"fit-content"};
        min-width: ${({direction:e,text:i})=>e==="vertical"||!i?"20px":"fit-content"};
        height: ${({direction:e,text:i})=>e==="vertical"||!i?"20px":"15px"};
        display: flex;
        align-items: center;
        justify-content: center;

        svg {
            width: 100%;
            height: 100%;
            max-width: 18px;
            max-height: 18px;
            margin-right: 0 !important;
        }
    }

    @media (max-width: 1000px) {
        font-size: 12px;
        height: ${({height:e="36px"})=>e};
        position: ${({fixedInMobile:e})=>e&&"absolute"};
        z-index: ${({fixedInMobile:e})=>e&&"5"};
        bottom: 10px;
        right: 10px;
        padding: 0;

        .text {
            margin-top: ${({direction:e,shrinkTextInMobile:i})=>e==="vertical"&&!i?"4px":"0px"};
        }

        .icon {
            width: ${({direction:e})=>e==="vertical"?"30px":"15px"};
            min-width: ${({direction:e})=>e==="vertical"?"30px":"15px"};

            margin-right: ${({shrinkTextInMobile:e,text:i,direction:n})=>e||n==="vertical"||!i?"0px":"7px"};
            height: ${({direction:e})=>e==="vertical"?"30px":"15px"};

            svg {
                max-width: 23px;
                /* max-height: 23px; */
            }
        }

        span {
            display: ${({shrinkTextInMobile:e})=>e?"none":"flex"};
        }
    }
`,rn={message:"",type:"success",isOpen:!1,time:2e3},id=()=>C(nd),Rs=P(),Cs=P(),Ns=P(),nd=te(rn).on(Rs,(e,{message:i,type:n,time:s=2e3,onClick:o})=>({isOpen:!0,message:i,type:n,time:s,onClick:o})).on(Cs,(e,{isOpen:i})=>({...e,isOpen:i})).on(Ns,()=>({...rn})),Is={usePopUpMessage:id},V={evokePopUpMessage:Rs,openPopUpMessage:Cs,clearStore:Ns},sd=Object.freeze(Object.defineProperty({__proto__:null,events:V,selectors:Is},Symbol.toStringTag,{value:"Module"}));function j(e){const{icon:i,text:n,onClick:s,width:o,minWidth:a,background:r,textColor:d,hoverBackground:c,align:p,isChosen:h,padding:b,shrinkTextInMobile:x,fixedInMobile:u,direction:g="horizontal",isActive:m=!0,height:v,notActiveClickMessage:S,..._}=e,E=k=>{m?s==null||s(k):S&&V.evokePopUpMessage({type:"failure",message:S,time:1e4})};return t.jsxs(td,{text:!!n,onClick:E,isChosen:h,width:o,minWidth:a,background:r,padding:b,textColor:d,shrinkTextInMobile:x,hoverBackground:c,align:p,direction:g,isActive:m,fixedInMobile:u,height:v,..._,children:[!!i&&t.jsx("div",{className:"icon",children:i}),t.jsx("span",{className:"text",children:n})]})}const bi=e=>{switch(e){case"center":return"center";case"right":return"flex-end";case"evenly":return"space-evenly"}return"flex-start"},ln=e=>{switch(e){case"center":return"center";case"bottom":return"flex-end";case"space-between":return"space-between"}return"flex-start"},od=f.div`
    padding: ${({padding:e})=>e??"0"};
    position: ${({position:e})=>e??"relative"};
    width: ${({width:e})=>e??"100%"};
    height: ${({height:e})=>e??"fit-content"};
    min-width: ${({minWidth:e})=>e};

    .bottom-wrapper {
        margin-top: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
    }
`,ad=["wrap","horizontalAlign","verticalAlign","innerPadding","scroll","wrapOnMobile"],At=f.div.withConfig({shouldForwardProp:e=>!ad.includes(e)})`
    display: flex;
    flex-direction: ${({direction:e})=>(e??"vertical")==="vertical"&&"column"};
    max-height: 100%;
    align-items: center;
    height: ${({height:e})=>e??"fit-content"};
    justify-content: ${({direction:e,horizontalAlign:i,verticalAlign:n})=>(e??"vertical")==="vertical"?ln(n):bi(i)};
    align-items: ${({direction:e,horizontalAlign:i,verticalAlign:n})=>(e??"vertical")==="vertical"?bi(i):ln(n)};
    gap: ${({gap:e})=>(e??5)+"px"};
    width: ${({width:e})=>e??"100%"};
    min-width: ${({minWidth:e,width:i})=>e??i};
    color: var(--text);
    font-size: ${({fontSize:e})=>e??"1em"};
    overflow-x: ${({scroll:e})=>e&&"auto"};
    flex-wrap: ${({wrap:e})=>e&&"wrap"};
    padding: ${({innerPadding:e})=>e??"0"};
    scroll-behavior: smooth;

    ::-webkit-scrollbar {
        display: ${({direction:e})=>e==="horizontal"&&"none"};
    }

    @media (max-width: 1000px) {
        flex-wrap: ${({wrapOnMobile:e})=>e?"wrap":"nowrap"};
        overflow-x: auto;
    }
`,rd=f.div`
    width: ${({size:e})=>e?e.width:"100px"};
    min-width: ${({size:e})=>e?e.width:"100px"};
    height: ${({size:e,shape:i})=>e?i==="circle"?e.width:e.height:"20px"};
    border-radius: ${({shape:e})=>e==="circle"?"100%":"10px"};
    background: var(--almostTransparent);
    margin: ${({margin:e})=>e};
    animation: ${({pulse:e})=>e&&"skeleton 1s infinite"};

    @keyframes skeleton {
        0% {
            opacity: 1;
        }
        50% {
            opacity: 0.6;
        }
        100% {
            opacity: 1;
        }
    }
`;function D({shape:e,size:i,margin:n="10px 0",pulse:s=!0}){return t.jsx(rd,{pulse:s,size:i,shape:e,margin:n})}const ld=f(At)`
    height: 100%;
`,cd=({direction:e,shapes:i,horizontalAlign:n,verticalAlign:s})=>t.jsx(ld,{direction:e,horizontalAlign:n,verticalAlign:s,children:i.map((o,a)=>l.createElement(D,{...o,key:a}))}),Me=e=>({display:"flex",alignItems:"center",justifyContent:"center",width:e});function dd({size:e,children:i,width:n}){switch(e){case 1:return t.jsx("h1",{className:"title",style:Me(n),children:i});case 2:return t.jsx("h2",{className:"title",style:Me(n),children:i});case 3:return t.jsx("h3",{className:"title",style:Me(n),children:i});case 4:return t.jsx("h4",{className:"title",style:Me(n),children:i});case 5:return t.jsx("h5",{className:"title",style:Me(n),children:i});case 6:return t.jsx("h6",{className:"title",style:Me(n),children:i});default:return t.jsx("h1",{className:"title",style:Me(n),children:i})}}const pd=f.div`
    width: 100%;
    text-align: ${({align:e})=>e};
    margin-bottom: ${({bottomGap:e})=>typeof e=="string"?e:e?"10px":"0"};
    display: inline-flex;
    align-items: center;
    justify-content: ${({align:e})=>e?e==="left"?"flex-start":e==="right"?"flex-end":e:"center"};

    svg {
        min-width: ${({size:e})=>`${58-e*10}px`};
        height: ${({size:e})=>`${58-e*10}px`};
        margin-right: 8px;
        color: ${({iconColor:e})=>e};
    }
`,ud=f.span`
    color: var(--red);
    margin-right: 5px;
`,hd=f.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    column-gap: 10px;
    width: ${({width:e})=>e};
`;function Y(e){const{icon:i,iconColor:n,children:s,size:o=1,required:a,width:r,align:d="center",bottomGap:c=!1,visible:p=!0}=e;return p?t.jsxs(pd,{size:o,className:"title-wrapper",align:d,bottomGap:c,iconColor:n,children:[i,t.jsxs(dd,{size:o,width:r,children:[a&&t.jsx(ud,{children:"*"}),t.jsx(hd,{width:r,children:s})]})]}):null}const gd=(e,i,n)=>n?"#fff":e?w[Ge[i].color].dark3:w[Ge[i].color].light3,fd=f.div`
    width: ${({width:e})=>e??"100%"};
    max-width: ${({maxWidth:e})=>e??"none"};
    color: ${({type:e,isLightTheme:i,solidBackground:n})=>gd(i,e,n)};
    background: ${({type:e,solidBackground:i})=>w[Ge[e].color][i?"main":"transparent3"]};
    width: ${({width:e})=>e??"100%"};
    max-width: ${({maxWidth:e})=>e??"none"};
    font-size: ${({fontSize:e})=>e??"0.8em"};
    padding: ${({padding:e})=>e??"10px"};
    border-radius: var(--brLight);
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-weight: 500;
    justify-content: flex-end;
    line-height: ${({lineHeight:e})=>e};
    align-items: ${({align:e})=>e==="left"?"flex-start":e==="center"?"center":"flex-end"};

    .close-button {
        position: absolute;
        top: 5px;
        right: 5px;
        border-radius: 100%;
        width: 30px;
        height: 30px;
    }

    .info-text {
        display: flex;
        flex-direction: column;
        gap: ${({gap:e})=>e??0};
    }

    a {
        text-decoration: underline;
        color: ${({type:e,isLightTheme:i})=>w[Ge[e].color][i?"main":"light2"]};
    }
`,xd=()=>t.jsx(cd,{shapes:[{shape:"rect",size:{width:"200px",height:"13px"},margin:"0"},{shape:"rect",size:{width:"100px",height:"12px"},margin:"5px 0"},{shape:"rect",size:{width:"120px",height:"12px"},margin:"0"}],direction:"vertical",horizontalAlign:"left"});function se({type:e,children:i,icon:n,width:s,maxWidth:o,title:a,onClose:r,padding:d,fontSize:c,gap:p,lineHeight:h,solidBackground:b=!1,align:x="left",visible:u=!0,loading:g=!1}){if(!u)return null;const{theme:m}=Kt();return t.jsxs(fd,{isLightTheme:m==="light",className:"message",closable:!!r,type:e,align:x,width:s,maxWidth:o,padding:d,fontSize:c,gap:p,lineHeight:h,solidBackground:b,children:[t.jsx(Y,{size:4,align:x,icon:n===null?null:n??Ge[e].icon({}),children:a??Ge[e].title}),r&&t.jsx(j,{onClick:r,icon:t.jsx(Oe,{}),className:"close-button"}),i&&t.jsx("div",{className:"info-text",children:i}),g&&t.jsx(xd,{})]})}f.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    position: relative;

    .message {
        position: absolute;
        right: ${({direction:e})=>e==="vertical"?"calc(100% + 10px)":"auto"};
        left: ${({direction:e})=>"auto"};
        top: ${({direction:e})=>e==="vertical"?"0%":"auto"};
        bottom: ${({direction:e})=>e==="vertical"?"auto":"calc(100% + 10px)"};
    }

    .circle + .message {
        top: ${({direction:e})=>e==="vertical"?"0%":"calc(100% + 10px)"};
        left: ${({direction:e})=>e==="vertical"?"calc(100% + 10px)":"auto"};
        right: ${({direction:e})=>e==="vertical"?"100%":"auto"};
        bottom: auto;
    }

    .circle {
        min-width: ${({type:e})=>e==="big"?"30px":"20px"};
        min-height: ${({type:e})=>e==="big"?"30px":"20px"};
        background: ${({reached:e,current:i})=>i?"var(--reallyBlue)":e?w.green.main:w.grey.main};
        outline: 6px solid
            ${({reached:e,current:i})=>i?w.blue.transparent3:e?w.green.transparent3:w.grey.transparent3};
        margin: 6px;
        border-radius: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        font-size: 0.8em;
        font-weight: bold;
        cursor: pointer;
    }
`;const md=f.div`
    min-width: ${({direction:e,distance:i})=>e==="vertical"?"5px":(i??100)+"px"};
    background: var(--almostTransparentOpposite);
    border-radius: 10px;
    height: ${({direction:e,distance:i})=>e==="vertical"?(i??100)+"px":"5px"};
    overflow: hidden;
    width: 100%;

    .inside-line {
        height: ${({direction:e,filled:i})=>e==="vertical"?(i??100)+"%":"5px"};
        border-radius: 10px;
        width: ${({direction:e,filled:i})=>e==="vertical"?"100%":(i??100)+"%"};
        background: ${({reached:e})=>e?w.green.main:"none"};
    }
`,bd=({distance:e,filled:i,reached:n,direction:s})=>t.jsx(md,{direction:s,distance:e,reached:n,filled:i,children:t.jsx("div",{className:"inside-line"})}),ue=f.div`
    width: ${({direction:e="horizontal",width:i})=>e==="horizontal"?i??"90%":"0.5px"};
    height: ${({direction:e="horizontal",width:i})=>e==="horizontal"?"0.5px":i??"90%"};
    background: var(--almostTransparentOpposite);
    margin: ${({margin:e})=>e??"5px auto"};
`,vd="/assets/sad-emoji-0c60bf90.gif",ee=f.span`
    width: ${({width:e})=>e??"fit-content"};
    min-width: ${({width:e})=>e??"fit-content"};
    max-width: ${({maxWidth:e})=>e??"fit-content"};
    font-size: ${({fontSize:e})=>e??"0.8em"};
    font-weight: 500;
    opacity: 0.7;
    text-align: ${({align:e})=>e??"left"};
    display: ${({visible:e})=>!(e??!0)&&"none"};
    line-height: ${({lineHeight:e})=>e};
`,_d=f.div`
    width: 100%;
    height: 100%;
    min-height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: var(--text);
    line-height: 1.7rem;

    span {
        font-weight: 500;
    }

    .image {
        margin-bottom: 10px;
        img,
        & > svg {
            min-width: ${({size:e})=>e??"100px"};
            height: ${({size:e})=>e??"100px"};
        }

        & > svg {
            margin: 20px 0;
            opacity: 0.6;
        }
    }

    .error-content {
        margin-top: 20px;
    }
`;function ce({text:e,image:i,size:n,children:s}){return t.jsxs(_d,{size:n,children:[t.jsx("div",{className:"image",children:typeof i=="string"||!i?t.jsx("img",{src:i||vd,alt:"груфтим("}):i}),t.jsx(ee,{fontSize:"1rem",align:"center",maxWidth:"500px",width:"auto",children:e}),s&&t.jsx("div",{className:"error-content",children:s})]})}const yd="/assets/loading-c8041cd3.gif",wd=f.img`
    width: 40px;
`;function ze(e){return t.jsx(wd,{...e,src:yd,alt:"loading",className:"loading-circle"})}const jd="/assets/logo-4d9aa449.png",kd="/assets/mospolytech-logo-white-b1e4f630.png",Td=f.div`
    width: ${({width:e})=>e??"100%"};
    height: fit-content;
    display: flex;
    justify-content: center;

    img {
        filter: invert(var(--invert));
        width: 100%;
    }
`;function Qt({width:e,className:i,short:n=!1}){return t.jsx(Td,{width:e,className:i??"logo",children:t.jsx("img",{src:n?kd:jd,alt:"Logo"})})}const Ed=f.img``;function Ls({loading:e,src:i,height:n,width:s,alt:o=""}){return e?t.jsx(D,{shape:"rect",size:{width:s,height:n},margin:"0"}):t.jsx(Ed,{src:i,alt:o,height:n,width:s})}const Ab=f.div`
    .wrapper {
        position: relative;
        width: ${({size:e})=>e};
        height: ${({size:e})=>e};
    }
    .circle-blue {
        position: absolute;
        width: ${({size:e})=>e};
        height: ${({size:e})=>e};
        border-radius: 50%;
        background: ${({color:e})=>e??"var(--blue)"};
        animation: expand 0.4s cubic-bezier(0.77, 0, 0.175, 1) forwards;
    }

    .circle-blue-shadow {
        position: absolute;
        width: ${({size:e})=>e};
        height: ${({size:e})=>e};
        border-radius: 50%;
        opacity: 1;
    }

    .circle-white {
        position: absolute;
        top: 3px;
        left: 3px;
        width: ${({size:e})=>`calc(${e} - 6px)`};
        height: ${({size:e})=>`calc(${e} - 6px)`};
        transform: scale(0);
        border-radius: 50%;
        background: var(--schedule);
        animation: expand 0.4s 0.5s cubic-bezier(0.77, 0, 0.175, 1) forwards;
    }

    @keyframes expand {
        0% {
            transform: scale(0);
        }
        100% {
            transform: scale(1);
        }
    }

    .check-svg {
        position: absolute;
        width: ${({size:e})=>`calc(${e} + 10px)`};
        height: ${({size:e})=>`calc(${e} + 10px)`};
        top: -18px;
        left: -20px;
        width: 50px;
        height: 50px;
        top: -13px;
        left: -14px;
        transform-origin: center;
        animation: 0.4s cubic-bezier(0.77, 0, 0.175, 1) 0.4s 1 both scaleCheck;
    }

    .check-poly {
        fill: transparent;
        stroke-width: 3;
        stroke-dasharray: 36px 36px;
        stroke: ${({color:e})=>e??"var(--blue)"};
        animation: 1s cubic-bezier(0.77, 0, 0.175, 1) 0.4s 1 both drawCheck;
    }

    @keyframes scaleCheck {
        0% {
            opacity: 0;
        }
        1% {
            opacity: 1;
        }
        100% {
            transform: scale(0.8);
        }
    }

    @keyframes drawCheck {
        0% {
            stroke-dashoffset: 36px;
        }
        100% {
            stroke-dashoffset: 0;
        }
    }
`,Sd=f.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    width: ${({width:e})=>e??"100%"};
    min-width: ${({width:e})=>e};
    pointer-events: ${({isActive:e})=>!e&&"none"};
    opacity: ${({isActive:e})=>!e&&.7};

    .icon {
        position: absolute;
        left: 7px;
        top: 55%;
        transform: translateY(-50%);
        color: var(--text);
        opacity: 0.4;
    }

    textarea {
        border: none;
        color: var(--text);
        outline: none;
        background: ${({textAreaAppearance:e})=>e?"var(--search)":"transparent"};
        height: 100%;
        width: 100%;
        padding: 10px;
        font-weight: bold;
        border-radius: 7px;
        padding-left: ${({textAreaAppearance:e})=>e?"10px":"0"};
        padding-right: 35px;
        min-height: 36px;
        height: fit-content;
        max-height: 120px;
        overflow-x: hidden;
        resize: none;

        &::placeholder {
            font-weight: 500;
        }

        &:focus-visible {
            outline: 4px solid var(--almostTransparentOpposite);
        }

        &:focus:not(:focus-visible) {
            outline: none;
        }
    }

    button {
        position: absolute;
        bottom: 5px;
        right: 5px;
        width: 25px;
        height: 25px;
        border-radius: 5px;
        background: var(--search2);
        color: var(--text);
        padding: 0;

        &:active {
            transform: scale(1);
        }

        svg {
            width: 15px;
            height: 15px;
        }
    }
`;function $d(e){const{value:i,setValue:n,width:s,placeholder:o,required:a,title:r,textAreaAppearance:d=!0,isActive:c=!0}=e;return t.jsxs(Sd,{isActive:c,width:s,textAreaAppearance:d,children:[t.jsx(Y,{size:5,required:a,align:"left",bottomGap:"5px",visible:!!r,children:r}),t.jsx("textarea",{onChange:p=>n(p.target.value),placeholder:o,required:a,value:i})]})}const Pd=f.button`
    width: ${({width:e})=>e??"100%"};
    padding: 10px;
    box-sizing: border-box;
    opacity: ${e=>e.isLoading||!e.isActive?.5:1};
    color: #fff;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    height: ${({height:e})=>e??"40px"};
    min-height: ${({height:e})=>e??"40px"};
    border-radius: 10px;
    position: relative;
    overflow: hidden;
    border: none;
    cursor: pointer;
    background: ${({isDone:e,background:i})=>e?"var(--green)":i??"var(--blue)"};
    animation: ${({pulsing:e})=>e&&"1s pulsing infinite"};

    @keyframes pulsing {
        0% {
            outline: 0px solid var(--blue);
        }
        100% {
            outline: 10px solid transparent;
        }
    }

    &:focus {
        outline: 4px solid var(--almostTransparentOpposite);
    }

    &:focus:not(:focus-visible) {
        outline: none;
    }

    @keyframes button-animation-in {
        0% {
            opacity: 0;
            transform: scale(0.95);
        }
        50% {
            opacity: 1;
            transform: scale(1);
        }
        100% {
            opacity: 0;
            transform: scale(0.95);
        }
    }

    @keyframes short-button-animation-in {
        0% {
            opacity: 0;
            transform: scale(0.95);
        }
        100% {
            opacity: 1;
            transform: scale(1);
        }
    }

    @keyframes button-animation-out {
        0% {
            opacity: 0;
            transform: scale(0.95);
        }
        100% {
            opacity: 1;
            transform: scale(1);
        }
    }

    .inner-button {
        z-index: 1;

        .inner-button-success {
            animation: ${({repeatable:e})=>e?"button-animation-in 2s forwards":"short-button-animation-in 2s forwards"};
        }

        .inner-button-text {
            animation: button-animation-out 0.5s forwards;
        }
    }

    &::before {
        content: '';
        position: absolute;
        display: block;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: var(--green);
        width: ${e=>e.completed?"2000px":"0"};
        height: ${e=>e.completed?"2000px":"0"};
        border-radius: 100%;
        transition: 0.6s;
        z-index: 0;
    }

    .loading-circle {
        position: relative;
        transform: none;
        left: auto;
        top: auto;
        width: 30px;
        height: 30px;
    }

    @media (max-width: 1000px) {
        font-size: 0.8em;
        height: 36px;
    }
`,Ds=({text:e,action:i,width:n,height:s,setCompleted:o,background:a,buttonSuccessText:r="Готово",popUpSuccessMessage:d="Успешно",popUpFailureMessage:c="Nope",pulsing:p,isDone:h=!1,isActive:b=!0,isLoading:x=!1,completed:u=!1,repeatable:g=!0})=>{l.useEffect(()=>{u&&(V.evokePopUpMessage({message:d,type:"success"}),g&&setTimeout(()=>{o(!1)},2e3))},[u,o]);const m=()=>{if(b&&!h&&!x)return i();V.evokePopUpMessage({message:c,type:"failure"})};return t.jsx(Pd,{isLoading:x,background:a,className:"submit-button",completed:u,isActive:b&&!h&&!u,onClick:m,isDone:h,width:n,height:s,repeatable:g,tabIndex:b&&!h?0:-1,pulsing:p&&!h,children:t.jsx("div",{className:"inner-button",children:u?t.jsxs("div",{className:"inner-button-success",children:[t.jsx(Mr,{})," ",r]}):x?t.jsx(ze,{}):t.jsx("div",{className:"inner-button-text",children:e})})})},Od=(e,i)=>e.length>8?e.substring(0,8):e.length===3&&(i==null?void 0:i.length)===2?e+"-":e.length===3&&(i==null?void 0:i.length)===4?e.substring(0,2):e,Ad=e=>{const i=["7","8","9"],n=e.target.selectionStart;let s=e.target.value.replace(/\D/g,""),o="";return s.length?e.target.value.length!==n?/\D/g.test(e.nativeEvent.data??"")?s:e.target.value:(i.indexOf(s[0])>-1?(s[0]==="9"&&(s="7"+s),o=(s[0]==="8"?"8":"+7")+" ",s.length&&(o+="("+s.substring(1,4)),s.length>=5&&(o+=") "+s.substring(4,7)),s.length>=8&&(o+="-"+s.substring(7,9)),s.length>=10&&(o+="-"+s.substring(9,11))):o=`+${s.substring(0,16)}`,o):""},Rd={groupMask:Od,phoneMask:Ad},Cd=(e,i,n,s,o,a,r,d)=>{const[c,p]=l.useState(n),[h,b]=l.useState(s??!1);l.useEffect(()=>{p(n)},[n]);const x=l.useCallback(v=>v.replace(/@\.*/,"@mospolytech.ru").replace(/mospolytech.ru?/,""),[n]);return{inputType:c,danger:h,phoneMaskKeyDown:v=>{v.key==="Backspace"&&(e[1]==="7"&&e.length<=4||e[0]==="8"&&e.length<=3)&&i("")},buttonOnClick:()=>p(v=>v==="password"?"text":"password"),handleOnChange:v=>{if(i(d?r?r(v.target.value,e):n==="tel"?Rd.phoneMask(v):n==="email"?x(v.target.value):v.target.value:v.target.value),n==="date"&&(o||a)){const S=new Date(v.target.value);let _=!1;if(o){const E=new Date(o);_=S<E}if(a&&!_){const E=new Date(a);_=S>E}b(_)}}}},Nd=f.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    width: ${({width:e})=>e??"100%"};
    min-width: ${({minWidth:e,width:i})=>e??i};
    pointer-events: ${({isActive:e})=>!e&&"none"};
    opacity: ${({isActive:e})=>!e&&.7};

    .left-icon {
        position: absolute;
        left: 7px;
        top: 55%;
        transform: translateY(-50%);
        color: var(--text);
        opacity: 0.4;
    }

    .message {
        margin-bottom: 5px;
    }

    input {
        border: none;
        color: var(--text);
        outline: none;
        background: ${({inputAppearance:e})=>e?"var(--search)":"transparent"};
        height: 100%;
        width: 100%;
        padding: 10px;
        font-weight: bold;
        border-radius: 7px;
        padding-left: ${({leftIcon:e,inputAppearance:i})=>e?"30px":i?"10px":"0"};
        padding-right: ${({inputAppearance:e})=>e?"35px":"0"};
        max-height: 36px;
        border: ${({danger:e})=>e&&`2px solid ${w.red.main}`};

        &::placeholder {
            font-weight: 500;
        }

        &:focus-visible {
            outline: ${({inputAppearance:e})=>e&&"4px solid var(--almostTransparentOpposite)"};
        }

        &:focus:not(:focus-visible) {
            outline: none;
        }
    }

    .loading-circle {
        position: absolute;
        bottom: 5px;
        right: 5px;
        width: 25px;
        height: 25px;
    }

    button {
        position: absolute;
        bottom: 5px;
        right: 5px;
        width: 25px;
        height: 25px;
        border-radius: 5px;
        background: var(--search2);
        color: var(--text);
        padding: 0;

        &:active {
            transform: scale(1);
        }

        svg {
            width: 15px;
            height: 15px;
        }
    }
`,Se=l.forwardRef(function(i,n){const{value:s,setValue:o,leftIcon:a,title:r,required:d,width:c,minWidth:p,customMask:h,placeholder:b="Введите сюда",type:x="text",danger:u,alertMessage:g,loading:m=!1,isActive:v=!0,inputAppearance:S=!0,mask:_=!1,autocomplete:E=!1,minValue:k=void 0,maxValue:q=void 0}=i,{inputType:$,buttonOnClick:N,danger:Q,handleOnChange:z,phoneMaskKeyDown:J}=Cd(s,o,x,u,k,q,h,_);return t.jsxs(Nd,{leftIcon:!!a,isActive:v,inputAppearance:S,width:c,danger:Q,minWidth:p,children:[t.jsx(Y,{size:5,align:"left",visible:!!r,bottomGap:"5px",required:d,children:r}),t.jsx(se,{type:"alert",visible:!!g,icon:t.jsx(Fr,{}),title:g??""}),a&&t.jsx("span",{className:"left-icon",children:a}),t.jsx("input",{id:b,min:k,max:q,step:q?.1:void 0,type:$,placeholder:b,value:s??"",autoComplete:E?"on":"off",onKeyDown:Re=>x==="tel"&&J(Re),onChange:z,required:d,readOnly:!v,ref:n}),x!=="password"?!!(s!=null&&s.length)&&S&&(m?t.jsx(ze,{}):t.jsx(j,{icon:t.jsx(Oe,{}),onClick:()=>o(""),tabIndex:-1})):t.jsx(j,{icon:$==="password"?t.jsx(Br,{}):t.jsx(Xn,{}),tabIndex:-1,onClick:N})]})}),Id=f.div`
    user-select: none;
    min-width: 56px;
    height: 30px;

    .checkbox {
        display: none;
    }

    .toggle-body {
        width: 100%;
        height: 100%;
        display: block;
        position: relative;
        background: var(--search);
        cursor: pointer;
        border-radius: 50px;
        padding: 4px;
        transition: 0.2s background;
    }

    .toggle-circle {
        height: 100%;
        background: var(--theme);
        width: 22px;
        display: block;
        border-radius: 100%;
        transition: 0.2s;
    }

    .checkbox:checked + .toggle-body .toggle-circle {
        background: #fff;
        margin-left: calc(100% - 22px);
        /* box-shadow: 0 0 30px #6290e4; */
    }

    .checkbox:checked + .toggle-body {
        background: #6290e4;
    }

    .checkbox:active + .toggle-body .toggle-circle {
        transform: scale(0.9);
    }
`,Ld="/assets/thinking-emoji-f3c10f79.gif",Dd=["loading"],zd=f.div.withConfig({shouldForwardProp:e=>!Dd.includes(e)})`
    width: 100%;
    padding: 10px;
    height: 100%;

    .loading {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        transition: 0.2s;
        opacity: ${({loading:e})=>e?1:0};
        visibility: ${({loading:e})=>e?"visible":"hidden"};
        transform: scale(${({loading:e})=>e?"1":"0.98"});
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 5;

        img {
            width: 40px;
        }
    }

    .content {
        transition: 0.2s;
        opacity: ${({loading:e})=>e?0:1};
        visibility: ${({loading:e})=>e?"hidden":"visible"};
        /* transform: scale(${({loading:e})=>e?"0.98":"1"}); */
        height: 100%;
    }

    .reload {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: var(--text);

        & > * + * {
            margin-top: 10px;
        }
    }

    @media (max-width: 550px) {
        padding: 10px;
    }
`,zi=({children:e,load:i,error:n,data:s,deps:o=[],noDataCheck:a=!1,loadEveryVisit:r=!1})=>(l.useEffect(()=>{(!s||r)&&i()},o),t.jsxs(zd,{loading:!!n||!s,children:[t.jsx("span",{className:"loading",children:n?t.jsx("div",{className:"reload",children:t.jsx(ce,{text:n,image:a&&Ld,children:!a&&t.jsx(j,{onClick:()=>i(),text:"Загрузить снова",icon:t.jsx(Jn,{})})})}):t.jsx(ze,{})}),t.jsx("div",{className:"content",children:e})]})),Md=f.a`
    display: flex;
    align-items: center;
    justify-content: ${({align:e})=>e??"center"};
    border: none;
    color: ${({textColor:e})=>e||"var(--text)"};
    background: ${({isChosen:e,background:i})=>e?"var(--blue)":i??"var(--search)"};
    padding: ${({padding:e})=>e??"10px"};
    border-radius: 10px;
    cursor: pointer;
    font-weight: 600;
    transition: 0.2s transform;
    width: ${({width:e})=>e||"fit-content"};
    text-decoration: none;
    font-size: 0.8em;
    height: ${({height:e="40px"})=>e};
    min-height: ${({minHeight:e="40px"})=>e};
    opacity: ${({isActive:e})=>e?1:.5};
    pointer-events: ${({isActive:e})=>!e&&"none"};

    button {
        outline: none;
    }

    &:focus-visible {
        outline: 4px solid var(--almostTransparentOpposite);
    }

    &:focus:not(:focus-visible) {
        outline: none;
    }

    &:active {
        transform: scale(0.95);
    }

    svg {
        margin-right: ${({text:e})=>e?"7px":"0"};
        width: 15px;
        height: 15px;
    }

    @media (max-width: 1000px) {
        font-size: 12px;
        height: 36px;

        svg {
            width: 14px;
            height: 14px;
        }
    }
`,Fd=({icon:e,text:i,onClick:n,width:s,background:o,textColor:a,align:r,href:d,height:c,minHeight:p,padding:h,isActive:b=!0,isChosen:x=!1})=>t.jsxs(Md,{text:!!i,onClick:u=>b&&n&&n(u),isChosen:x,width:s,background:o,textColor:a,href:d,align:r,isActive:b,height:c,padding:h,minHeight:p,children:[!!e&&e,i&&t.jsx("span",{children:i})]}),zs=l.memo(Fd),Mi=f.div`
    width: 100%;
    height: fit-content;
    max-width: ${({maxWidth:e})=>e??"700px"};
    padding: 20px;
    border-radius: var(--brLight);
    background: var(--schedule);
    box-shadow: var(--schedule-shadow);
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    padding-top: 60px;

    @media (max-width: 1000px) {
        box-shadow: none;
        padding: 10px 0px;
        background: transparent;
    }
`,Bd=f.div`
    width: 100%;
    margin-bottom: 20px;
    height: fit-content;
    max-width: ${({maxWidth:e})=>e??"600px"};
    padding: 20px;
    border-radius: var(--brSemi);
    background: transparent;
    box-shadow: var(--schedule-shadow);
    display: flex;
    flex-direction: column;
    row-gap: 20px;

    @media (max-width: 1000px) {
        box-shadow: none;
        padding: 10px 0px;
        background: transparent;
    }
`,Ud=f.a`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    column-gap: 5px;
    text-decoration: none;
    color: var(--text);
    padding: 5px;
    border-radius: var(--brLight);

    .title {
        display: block;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-weight: bold;
        font-size: 0.8em;
    }

    .icon {
        display: flex;
        align-items: center;
        justify-content: center;
        min-width: 28px;
        width: 28px;
        height: 28px;

        svg {
            width: 21px;
            height: 21px;
        }
    }
`,Hd=({title:e,link:i,type:n})=>t.jsxs(Ud,{href:i,target:"_blank",children:[t.jsx("div",{className:"icon",children:n==="document"?t.jsx(I,{}):t.jsx(Ur,{})}),t.jsx("div",{className:"title",children:e})]}),Wd=(e,i=265,n=200)=>(e.preventDefault(),{x:e.clientX<window.innerWidth/2?e.clientX:e.clientX-i,y:e.clientY<window.innerHeight/2?e.clientY:e.clientY-n}),Vd={open:!1,content:null,type:"left-click",position:{x:0,y:0}},Gd=()=>Qn(Yd),Ms=P(),Fs=P(),Bs=P(),Yd=te(Vd).on(Ms,(e,{content:i,e:n,height:s,type:o="left-click"})=>({position:Wd(n,220,s),open:!0,content:i,type:o})).on(Fs,e=>({...e,open:!1})).on(Bs,(e,{position:i})=>({...e,position:i})),me={open:Ms,close:Fs,changePosition:Bs},qd={useContextMenu:Gd},Kd=()=>{const e=navigator.userAgent;return e.search("Mac")!==-1?"MacOS":e.search("X11")!==-1&&e.search("Linux")===-1?"UNIX":e.search("Linux")!==-1&&e.search("X11")!==-1?"Linux":"Windows"},ci=new Set,Xd=(e,i)=>{l.useEffect(()=>{window.addEventListener("keydown",n=>{ci.add(n.key),!e.slice(0,e.length-1).find(o=>!ci.has(o))&&e[e.length-1]===n.key&&i()}),window.addEventListener("keyup",n=>{ci.delete(n.key)})},[])},Ae=f.div`
    display: flex;
    align-items: ${({alignItems:e})=>e??"center"};
    justify-content: ${({justifyContent:e})=>e??"space-between"};
    background: ${({background:e})=>e??"var(--schedule)"};
    line-height: ${({lineHeight:e})=>e};
    border-radius: var(--brLight);
    flex-direction: ${({orientation:e})=>e==="vertical"?"column":"row"};
    box-shadow: ${({shadow:e})=>(e??!0)&&"var(--very-mild-shadow)"};
    padding: ${({padding:e})=>e??"20px"};
    height: ${({height:e})=>e??"330px"};
    max-width: ${({maxWidth:e})=>e??"800px"};
    width: ${({width:e})=>e??"100%"};
    color: var(--text);
    gap: ${({gap:e})=>e??"0"};
    max-height: ${({maxHeight:e})=>e};
    min-height: ${({minHeight:e})=>e};

    .list {
        width: 100%;
        display: flex;
        height: 100%;
        flex-direction: column;
        overflow-y: auto;
        padding-right: 5px;
    }

    @media (max-width: 1400px) {
        max-width: ${({maxWidth:e})=>e??"800px"};
        /* width: 100%; */
    }

    @media (max-width: 1225px) {
        max-width: ${({maxWidth:e})=>e??"600px"};
    }

    @media (max-width: 550px) {
        /* height: auto; */
        /* max-height: 100%; */
        flex-direction: column;
        /* gap: 1rem; */
        box-shadow: ${({noAppearanceInMobile:e})=>e&&"none"};
        border-radius: ${({noAppearanceInMobile:e})=>e&&"none"};
        padding: ${({noAppearanceInMobile:e})=>e&&"6px"};
        background: ${({noAppearanceInMobile:e})=>e&&"transparent"};
    }
`,R=f.div`
    width: ${({w:e})=>e??"100%"};
    max-width: ${({mw:e})=>e};
    height: ${({h:e})=>e??"fit-content"};
    gap: ${({gap:e})=>e??"0"};
    display: flex;
    align-items: ${({ai:e})=>e??"center"};
    justify-content: ${({jc:e})=>e??"flex-start"};
    flex-direction: ${({d:e})=>e??"row"};
    flex-wrap: ${({wrap:e})=>e&&"wrap"};
`,ae=(e,i)=>{if(!e.length)return"";const n=i??!0,s=e.replace(/\s/g,"").replace(/\$/g,"s").replace(/-/g,"").toLowerCase();return n?s.replace(/[,'._/]/g,""):s},Us=e=>{const i={a:"ф",b:"и",c:"с",d:"в",e:"у",f:"а",g:"п",h:"р",i:"ш",j:"о",k:"л",l:"д",m:"ь",n:"т",o:"щ",p:"з",q:"й",r:"к",s:"ы",t:"е",u:"г",v:"м",w:"ц",x:"ч",y:"н",z:"я","[":"х","{":"х","]":"ъ","}":"ъ","'":"э",";":"ж",",":"б",".":"ю"};let n="";for(let s=0;s<e.length;s++){const o=ae(e.charAt(s),!1),a=i[o]?s===0?i[o].toUpperCase():i[o]:o;n+=a}return n},Hs=e=>/[A-Za-z]/.test(e),Jd=f.span`
    color: var(--blue);
    font-weight: 500;
    border-radius: 2px;
    cursor: pointer;

    &:hover {
        background: ${w.blue.transparent2};
    }

    &:focus-visible {
        background: ${w.blue.transparent2};
        outline: none;
    }

    &:focus:not(:focus-visible) {
        outline: none;
    }
`,Ws=({value:e,setValue:i,visible:n=!0})=>{if(e.length===0||!n||!Hs(e))return null;const s=Us(e),o=()=>i(s);return t.jsxs(ee,{width:"100%",maxWidth:"100%",onClick:o,children:["Возможно, вы имели в виду ",t.jsx(Jd,{tabIndex:10,children:s})]})};function ct(e,i){l.useEffect(()=>{const n=s=>{const o=e==null?void 0:e.current;!o||o.contains(s.target)||i(s)};return document.addEventListener("mousedown",n),document.addEventListener("touchstart",n),()=>{document.removeEventListener("mousedown",n),document.removeEventListener("touchstart",n)}},[e,i])}function _e(e,i,n=0){return e>i?n:e<n?i:e}const Qd=f.div`
    display: flex;
    flex-direction: column;
    row-gap: 8px;
    width: ${({width:e})=>e??"100%"};
    position: relative;
`,Zd=f(Ae)`
    position: absolute;
    top: 45px;
    z-index: 10;
    height: auto;
    width: 100%;
    left: 0;
    overflow-y: auto;
`,ep=f.div`
    padding: 8px 12px;
    width: 100%;
    display: flex;
    align-items: center;
    gap: 8px;
    font-weight: ${({selected:e})=>e?"600":"500"};
    color: ${({selected:e})=>e?"#fff":"var(--text)"};
    background: ${({selected:e})=>e?w.blue.main:"transparent"};
    font-size: 0.85rem;

    .icon {
        display: flex;
        align-items: center;
        justify-content: center;

        svg {
            width: 16px;
            height: 16px;
        }
    }

    &:hover {
        background: ${({selected:e})=>e?w.blue.main:"var(--mild-theme)"};
    }
`,Vs=({value:e,width:i,placeholder:n,inputAppearance:s,loading:o,hints:a,leftIcon:r,focusOn:d,setValue:c,customMask:p,onHintClick:h,validationCheck:b=!1})=>{const[x,u]=l.useState(0),[g,m]=l.useState(!1),v=l.useRef(null),S=l.useRef(null),_=l.useRef(null);ct(v,()=>m(!1)),l.useEffect(()=>{d&&setTimeout(()=>{var $;return($=_.current)==null?void 0:$.focus()},50)},[d]);const E=$=>{var N,Q;(((a==null?void 0:a.length)??0)>0||o)&&m(!0),$.key==="ArrowDown"?((N=S.current)==null||N.scrollIntoView({block:"start",behavior:"smooth"}),typeof x=="number"&&u(_e(x+1,((a==null?void 0:a.length)??1)-1,0))):$.key==="ArrowUp"?((Q=S.current)==null||Q.scrollIntoView({block:"end",behavior:"smooth"}),typeof x=="number"&&u(_e(x-1,((a==null?void 0:a.length)??1)-1,0))):$.key==="Enter"?(c((a==null?void 0:a[x??0].title)??""),m(!1),h==null||h(a==null?void 0:a[x??0])):u(0)},k=$=>()=>{u($),c((a==null?void 0:a[$].title)??""),m(!1),h==null||h(a==null?void 0:a[$])},q=()=>{a!=null&&a.length&&m(!0)};return t.jsxs(Qd,{width:i,onKeyDown:E,onMouseDown:q,ref:v,children:[t.jsx(Se,{value:e,placeholder:n,leftIcon:r??t.jsx(Ee,{}),inputAppearance:s,setValue:c,loading:o,width:i,mask:!0,customMask:p,ref:_}),t.jsx(Ws,{setValue:c,value:e,visible:b}),g&&t.jsx(Zd,{height:"fit-content",maxWidth:"100%",maxHeight:"250px",width:"100%",onKeyDown:E,padding:"0",orientation:"vertical",children:a==null?void 0:a.map(({title:$,icon:N},Q)=>{const z=x===Q;return t.jsxs(ep,{onClick:k(Q),ref:z?S:null,selected:z,children:[N&&t.jsx("div",{className:"icon",children:N}),t.jsx("span",{children:$})]},$+Q)})})]})},Zt=()=>{const[e,i]=l.useState({width:0,height:0}),n=()=>{i({width:window.innerWidth,height:window.innerHeight})};return l.useEffect(()=>(n(),window.addEventListener("resize",n),()=>{window.removeEventListener("resize",n)}),[]),e},tp=f.div`
    width: 100%;
    height: 100%;
    min-width: calc(100% / ${({size:e})=>e});
    padding: 10px 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    opacity: ${({condition:e})=>e?.7:.3};
    transition: 0.2s opacity, 0.2s transform;
    z-index: 1;
    cursor: pointer;
    user-select: none;
    color: var(--text);

    & > b {
        word-break: normal;
        text-overflow: ellipsis;
        font-weight: 600;
    }

    &:hover {
        filter: ${({condition:e})=>e&&"brightness(0.8)"};
    }

    &.active {
        opacity: 1;
    }

    &:active {
        transform: scale(0.97);
    }
`,ip=({id:e,currentPage:i,setCurrentPage:n,pageTitle:s,size:o,condition:a=!0})=>t.jsx(tp,{className:`SliderItem ${e===i?"active":""}`,onClick:()=>a&&n(e),size:o,condition:a,children:t.jsx("b",{children:s})}),np=l.memo(ip);f.div`
    max-width: ${({sliderWidth:e})=>e??"100%"};
    width: 100%;
    min-height: 50px;
    padding: 3px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background: var(--search2);
    border-radius: 17px;
    overflow-y: hidden;
    overflow-x: auto;
    scroll-snap-type: x proximity;
    font-size: 0.9em;

    .slider-body {
        position: relative;
        display: flex;
        align-items: center;
        width: 100%;
        height: 44px;
    }

    &::-webkit-scrollbar {
        display: none;
    }

    &:active .currentPage {
        transform: scale(0.9);
    }

    .SliderItem {
        width: 100%;
        height: 100%;
        min-width: calc(100% / ${({size:e})=>e});
        padding: 10px 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0.6;
        transition: 0.2s opacity, 0.2s transform;
        z-index: 1;
        cursor: pointer;
        user-select: none;
        color: var(--text);

        &:hover {
            filter: brightness(0.8);
        }

        &.active {
            opacity: 1;
        }

        &:active {
            transform: scale(0.97);
        }
    }

    .currentPage {
        min-width: 80px;
        height: calc(100% - 0px);
        background: var(--theme);
        display: block;
        position: absolute;
        transition: 0.3s left, 0.2s transform;
        z-index: 0;
        border-radius: 14px;
        scroll-snap-align: center;
    }

    @media (max-width: 1000px) {
        font-size: 11px;
        min-height: 40px;
        border-radius: var(--brLight);

        .currentPage {
            border-radius: calc(var(--brLight) - 2px);
        }

        .slider-body {
            height: 34px;
        }
    }
`;const sp=f.span`
    min-width: 80px;
    height: calc(100% - 0px);
    background: ${({appearance:e})=>e?"var(--theme)":"var(--mild-theme)"};
    display: block;
    position: absolute;
    transition: 0.3s left, 0.2s transform;
    z-index: 0;
    border-radius: calc(var(--brLight) - 2px);
    scroll-snap-align: center;
    left: ${({currentPage:e,moreThanNeeded:i,pages:n,size:s})=>`calc(${e*100/(i?s:n.length)}%)`};
    width: ${({moreThanNeeded:e,pages:i,size:n})=>`calc(100% / ${e?n:i.length} - ${i.length>n?3:0}px)`};

    @media (max-width: 1000px) {
        border-radius: calc(var(--brLight) - 2px);
    }
`,op=({currentPage:e,pages:i,size:n,appearance:s})=>{const o=l.useMemo(()=>i.length>n,[i.length,n]);return t.jsx(sp,{currentPage:e,appearance:s,moreThanNeeded:o,pages:i,size:n})},ap=l.memo(op),rp=f.div`
    max-width: ${({sliderWidth:e})=>e??"100%"};
    width: 100%;
    min-height: 50px;
    padding: ${({appearance:e})=>e&&"3px"};
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background: ${({appearance:e})=>e&&"var(--search2)"};
    border-radius: ${({appearance:e})=>e&&"var(--brLight)"};
    overflow-y: hidden;
    overflow-x: auto;
    scroll-snap-type: x proximity;
    font-size: 0.9em;

    .slider-body {
        position: relative;
        display: flex;
        align-items: center;
        width: 100%;
        height: 44px;
    }

    &::-webkit-scrollbar {
        display: none;
    }

    &:active .currentPage {
        transform: scale(0.9);
    }

    @media (max-width: 1000px) {
        font-size: 11px;
        min-height: 40px;
        border-radius: var(--brLight);

        .slider-body {
            height: 34px;
        }
    }
`,lp=({pages:e,currentPage:i,setCurrentPage:n,sliderWidth:s,appearance:o=!0})=>{const[a,r]=l.useState(5),d=l.useRef(null),{width:c}=Zt();return l.useEffect(()=>{var h;const p=((h=d==null?void 0:d.current)==null?void 0:h.offsetWidth)??c;p>800?r(5):p>600&&p<=800||p>400&&p<=600?r(4):p<=400&&r(3)},[c,d.current]),t.jsx(rp,{ref:d,size:a,sliderWidth:s,appearance:o,children:t.jsxs("div",{className:"slider-body",children:[t.jsx(ap,{appearance:o,pages:e,currentPage:i,size:a}),e.map((p,h)=>t.jsx(np,{id:h,currentPage:i,setCurrentPage:n,pageTitle:p.title,condition:p.condition,size:a},h))]})})},Gs=l.memo(lp),cp=300,Ys=({defaultValue:e,onDebounce:i,onClear:n,triggerOn:s,triggerDelay:o,deps:a=[],delay:r=cp})=>{const[d,c]=l.useState(e??""),[p,h]=l.useState(""),[b,x]=l.useState(!1);return l.useEffect(()=>{if(d!==null)if(d.length){x(!0);const u=setTimeout(async()=>{await i(d),h(d),x(!1)},r);return()=>clearTimeout(u)}else p.length!==0&&(n==null||n(d),c(""),x(!1))},[d]),l.useEffect(()=>{if(a.length&&((s==null?void 0:s(d))??!0)){x(!0);const u=setTimeout(async()=>{await i(d),x(!1)},o??r);return()=>clearTimeout(u)}},[...a]),[d,c,b]},st=f.span`
    color: #fff;
    background: ${({color:e})=>w[e??"red"].light1};
    position: ${({position:e})=>e??"absolute"};
    box-shadow: ${({color:e,shadow:i})=>i&&`0 0 35px ${w[e??"red"].main}`};
    top: ${({top:e})=>e??"50%"};
    left: ${({left:e})=>e??"auto"};
    right: ${({right:e})=>e??"50%"};
    outline: ${({outline:e})=>e};
    font-size: 0.6em;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translate(-50%, -50%);
    width: fit-content;
    padding: 0 5px;
    min-width: 16px;
    font-weight: bold;
    height: 16px;
    display: ${({visible:e})=>!e&&"none"};
    animation: ${({pulsing:e})=>e&&"2s notif-pulsing infinite"};

    @keyframes notif-pulsing {
        0% {
            outline: 0px solid ${({color:e})=>w[e??"red"].main};
        }
        50% {
            outline: 10px solid transparent;
        }
        100% {
            outline: 0px solid transparent;
        }
    }
`,dp=f.div`
    min-width: ${({size:e})=>e+"px"};
    min-height: ${({size:e})=>e+"px"};
    max-width: ${({size:e})=>e+"px"};
    max-height: ${({size:e})=>e+"px"};
    border-radius: ${({borderRadius:e})=>e??"15px"};
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    background: ${({backgroud:e})=>w[e]?w[e].main:e};
    transition: 0.2s;

    svg {
        color: #fff;
        width: ${({size:e})=>e/2+"px"};
        height: ${({size:e})=>e/2+"px"};
    }
`,ye=({children:e,color:i,borderRadius:n,badge:s,size:o=38})=>{const a=s?isNaN(+s)?!0:+s>0:!1;return t.jsxs(dp,{borderRadius:n,backgroud:i,size:o,className:"icon",children:[t.jsx(st,{outline:"4px solid var(--schedule)",color:"red",top:"93%",left:"93%",visible:a,className:"notification-circle",children:s}),e]})},qs=(e,i)=>{if(i)if(e!=="home"){const n=i["settings-home-page"].property.pages;Ot.updateSetting({nameSettings:"settings-home-page",nameParam:"pages",value:[...n,e]})}else V.evokePopUpMessage({message:"Нельзя добавить этот раздел на домашний экран",type:"failure"})},Ks=(e,i)=>{if(i){const n=i["settings-home-page"].property.pages;Ot.updateSetting({nameSettings:"settings-home-page",nameParam:"pages",value:n.filter(s=>s!==e)})}},pp=(e,i,n,s)=>{if(i){const o=s.length+Al;if(n<o){V.evokePopUpMessage({message:"Элемент добавлен в навигационное меню",type:"success"});const a=i["settings-customize-menu"].property.pages??qt;Ot.updateSetting({nameSettings:"settings-customize-menu",nameParam:"pages",value:[...a,e]})}else V.evokePopUpMessage({message:`Нельзя добавить больше ${o} элементов`,type:"failure"})}},up=(e,i,n)=>{if(i)if(n.includes(e))V.evokePopUpMessage({message:"Элемент нельзя убрать из навигационного меню",type:"failure"});else{V.evokePopUpMessage({message:"Элемент убран из навигационного меню",type:"success"});const s=i["settings-customize-menu"].property.pages;Ot.updateSetting({nameSettings:"settings-customize-menu",nameParam:"pages",value:s.filter(o=>o!==e)})}},hp=f.div`
    .top {
        display: flex;
        align-items: center;
        gap: 6px;
        padding: 7px;
    }
`,gp=f.span`
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
    font-size: 0.8em;
    font-weight: 500;
`,fp=e=>{var u,g,m;const{id:i,icon:n,title:s,color:o}=e,{settings:a}=rt.useSettings(),{data:r}=oe.useUser(),d=$e.useMenu(),c=(u=a["settings-home-page"].property.pages)==null?void 0:u.find(v=>v===i),p=(g=a["settings-customize-menu"].property.pages)==null?void 0:g.find(v=>v===i),h=((m=r.user)==null?void 0:m.user_status)==="staff"?hs:qt,b=()=>{qs(i,a),me.close()},x=()=>{pp(i,a,Object.keys(d.leftsideBarRoutes??{}).length??0,h),me.close()};return t.jsxs(hp,{children:[t.jsxs("div",{className:"top",children:[t.jsx(ye,{color:o,size:22,children:n}),t.jsx(gp,{children:s})]}),t.jsx(ue,{}),c?t.jsx(j,{text:"Убрать с главной",icon:t.jsx(We,{}),width:"100%",align:"left",background:"var(--schedule)",onClick:()=>{Ks(i,a),me.close()}}):t.jsx(j,{text:"Добавить на главную",icon:t.jsx(Ve,{}),width:"100%",align:"left",background:"var(--schedule)",onClick:b}),p?t.jsx(j,{text:"Убрать из меню",icon:t.jsx(We,{}),width:"100%",align:"left",background:"var(--schedule)",onClick:()=>up(i,a,h)}):t.jsx(j,{text:"Добавить в меню",icon:t.jsx(Ve,{}),width:"100%",align:"left",background:"var(--schedule)",onClick:x})]})},Xs=({route:e})=>{const i=w[e.color.length?e.color:"blue"].main,n=s=>{s.preventDefault(),s.stopPropagation(),me.open({e:s,height:105,content:t.jsx(fp,{...e})})};return t.jsx(j,{icon:t.jsx(Zn,{}),textColor:i,className:"more-button",background:"transparent",onClick:n})},Js=(e,i)=>{if(e>=10&&e<=19)return i.fiveToNine;const n=e%10;return n===0?i.zero:n===1?i.one:n>=2&&n<=4?i.twoToFour:i.fiveToNine};function Tt(e,i){return e.length>i?`${e.substr(0,i)}...`:e}const Qs=f(Ae)`
    position: relative;
    cursor: pointer;
    text-decoration: none;
    border-radius: var(--brLight);
    background: var(--form);

    .new {
        position: absolute;
        top: ${({isVertical:e})=>e?"5px":"18px"};
        right: ${({isVertical:e})=>e?"-5px":"50px"};
        border-radius: ${({isVertical:e})=>e?"var(--brLight) calc(var(--brLight) - 4px) calc(var(--brLight) - 4px) var(--brLight)":"var(--brLight)"};
        background: ${w.red.light2};
        font-size: 0.7em;
        font-weight: bold;
        color: #fff;
        padding: 5px 10px;
        /* box-shadow: 0 0 60px ${w.red.light2}; */
    }

    .more-button {
        position: absolute;
        top: ${({isVertical:e})=>e?"5px":"50%"};
        left: ${({isVertical:e})=>e?"5px":"auto"};
        right: ${({isVertical:e})=>!e&&"10px"};
        transform: ${({isVertical:e})=>!e&&"translateY(-50%)"};
        opacity: 0;
        visibility: hidden;
        transition: 0.2s;
    }

    &:hover {
        .more-button {
            opacity: 1;
            visibility: visible;
        }
        .notification-circle {
            opacity: 0;
        }
    }

    .outside {
        width: 100%;
        height: 100%;
        overflow: hidden;
        gap: 15px;
        display: flex;
        flex-direction: ${({isVertical:e})=>e?"column":"row"};
        border-radius: var(--brLight);
        align-items: center;
        justify-content: ${({isVertical:e})=>e?"center":"flex-start"};
        padding: 15px;

        .notifications-title {
            opacity: 0;
            transform: translateY(20px);
            font-size: 0.7em;
            position: absolute;
            transition: 0.2s;
            bottom: 25px;
            font-weight: bold;
            color: var(--text);
            right: ${({isVertical:e})=>!e&&"50px"};
        }

        &:hover {
            .icon {
                box-shadow: 0 20px 110px 60px ${({color:e})=>w[e].main};
                transform: ${({isVertical:e})=>e&&"scale(1.1) translateY(20px)"};
            }

            b {
                opacity: ${({hasNotifications:e,isVertical:i})=>i&&e&&0};
                transform: ${({isVertical:e})=>e&&"scale(0.95) translateY(40%)"};
            }

            .notifications-title {
                opacity: 1;
                transform: translateY(0px);
            }
        }

        b {
            display: flex;
            align-items: center;
            font-size: 0.8em;
            text-align: ${({isVertical:e})=>e?"center":"left"};
            color: var(--text);
            transition: 0.2s;
            font-weight: 600;
            height: 30px;
        }
    }
`,cn=e=>{var S;const{color:i,shadow:n,notifications:s,maxWordLength:o,title:a,isNew:r,icon:d,mode:c,id:p,background:h,orientation:b="vertical"}=e,x=b==="vertical",{settings:u}=rt.useSettings(),g=!!((S=u["settings-home-page"].property.pages)!=null&&S.find(_=>_===p)),m=11,v=l.useMemo(()=>(_,E)=>{const k=_.split(" ")[0];return k.length>E&&k.length!==E+1&&x?`${_.substr(0,E)}-${_.substr(E,_.length)}`:_},[]);return t.jsxs(Qs,{padding:"0",width:"100%",maxWidth:"100%",height:x?"135px":"60px",isVertical:x,justifyContent:"center",shadow:n,color:i.length?i:"blue",hasNotifications:!!s,background:h,children:[t.jsxs("div",{className:"outside",children:[t.jsx(ye,{badge:s==null?void 0:s.toString(),color:i.length?i:"blue",children:d??t.jsx(Ve,{})}),t.jsx("b",{children:Tt(v(a,m),o)}),!!s&&t.jsxs("span",{className:"notifications-title",children:[s," ",Js(s,{one:"уведомление",zero:"уведомлений",twoToFour:"уведомления",fiveToNine:"уведомлений"})]})]}),c==="use"&&t.jsx(Xs,{route:e}),c==="add"?g?t.jsx(j,{icon:t.jsx(Oe,{}),width:"80px",align:"center",textColor:"var(--red)",background:"var(--schedule)",onClick:()=>Ks(p,u)}):t.jsx(j,{icon:t.jsx(Ve,{}),width:"80px",textColor:"var(--green)",align:"center",background:"var(--schedule)",onClick:()=>qs(p,u)}):null,r&&t.jsx("span",{className:"new",children:"New"})]})},xp=f(Qs)`
    box-shadow: none;
    color: var(--blue);
    background: transparent;
`,Rb=()=>t.jsx(Z,{to:wt,onClick:()=>{be.changeOpen({isOpen:!1,currentPage:wt.slice(1,wt.length)})},children:t.jsx(xp,{padding:"0",width:"125px",height:"135px",isVertical:!0,justifyContent:"center",color:"blue",hasNotifications:!1,children:t.jsxs("div",{className:"outside",children:[t.jsx(ye,{color:"blue",children:t.jsx(Hr,{})}),t.jsx("b",{children:"Все разделы"})]})})}),mp=f(Z)`
    width: ${({width:e})=>typeof e=="number"?`calc((700px / 5) * ${e} - ${e===2?22:15}px)`:e};
    border-radius: var(--brLight);

    @media (max-width: 500px) {
        width: ${({width:e})=>typeof e=="number"?`calc(33vw * ${e} - ${e===2?22:15}px)`:e};
    }
`,bp=f.div`
    width: ${({width:e})=>typeof e=="number"?`calc(125px * ${e} + ${(e-1)*10}px)`:e};
`,vp=e=>{const{close:i}=G(),{path:n,orientation:s="vertical",restricted:o=!1,mode:a="use"}=e,r=o?14:17,d=1;if(a==="add")return t.jsx(bp,{width:s==="vertical"?d:"100%",children:t.jsx(cn,{...e,mode:a,maxWordLength:r})});const c=()=>{i(),be.changeOpen({isOpen:!1,currentPage:n.slice(1,n.length)})};return t.jsx(mp,{to:n,onClick:c,width:s==="vertical"?d:"100%",children:t.jsx(cn,{...e,maxWordLength:r,mode:a})})},_p=f.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 5px;
`,yp=({pages:e,showNotFound:i=!0})=>!e||!i&&Object.keys(e).length===0?null:!Object.keys(e).length&&i?t.jsx(ce,{text:"Ничего не было найдено"}):t.jsx(_p,{children:Object.values(e).map(n=>(n==null?void 0:n.show)!==!1&&l.createElement(vp,{...n,orientation:"horizontal",shadow:!1,key:n.id}))}),wp=(e,i)=>Object.values(i).reduce((n,s)=>{var o;return(ae(s.title).includes(ae(e))||(o=s==null?void 0:s.keywords)!=null&&o.find(a=>ae(a).includes(ae(e))))&&(n[s.id]=s),n},{}),jp=f.div`
    display: flex;
    flex-direction: column;
    height: 300px;

    @media (min-width: 1001px) {
        min-width: 300px;
        width: 300px;
        height: 300px;
    }
`,kp=f(Z)`
    width: 100%;
`,Tp=({division:e})=>{const{close:i}=G();return t.jsxs(jp,{children:[t.jsxs(R,{d:"column",gap:"12px",jc:"center",h:"100%",children:[t.jsx(ye,{size:120,color:"purple",children:t.jsx(Ht,{})}),t.jsx(ee,{fontSize:"1.2rem",align:"center",children:e})]}),t.jsx(kp,{to:`${Er}/${e}`,onClick:i,children:t.jsx(j,{icon:t.jsx(es,{}),width:"100%",text:"Список"})})]})},Ep=f.div`
    width: 100%;
    color: var(--text);
    padding: 0px 16px;
    background: var(--theme-mild-xxl);
    border-radius: var(--brLight);
    cursor: pointer;

    svg {
        min-width: 30px;
    }

    &:hover {
        background: var(--search);
    }
`,Sp=({division:e})=>{const{open:i}=G(),n=()=>{i(t.jsx(Tp,{division:e}),"Подразделение")};return t.jsx(Ep,{onClick:n,children:t.jsxs(R,{gap:"8px",h:"50px",jc:"space-between",w:"100%",children:[t.jsxs(R,{gap:"8px",children:[t.jsx(Ht,{}),t.jsx(ee,{fontSize:"1rem",children:e})]}),t.jsx(at,{})]})})},$p=({divisions:e})=>!e||e.length===0?null:t.jsx(R,{d:"column",gap:"4px",ai:"flex-start",children:e.map(i=>t.jsx(Sp,{division:i},i))}),Pp=f.div`
    display: flex;
    flex-direction: column;
    height: 300px;

    @media (min-width: 1001px) {
        min-width: 300px;
        width: 300px;
        height: 300px;
    }
`,dn=f(Z)`
    width: 100%;
`,Op=({group:e})=>{const{close:i}=G();return t.jsxs(Pp,{children:[t.jsxs(R,{d:"column",gap:"12px",jc:"center",h:"100%",children:[t.jsx(ye,{size:120,color:"lightBlue",children:t.jsx(ts,{})}),t.jsx(ee,{fontSize:"1.2rem",children:e})]}),t.jsxs(R,{gap:"8px",onClick:i,children:[t.jsx(dn,{to:`${dt}/${e}`,children:t.jsx(j,{icon:t.jsx(St,{}),width:"100%",text:"Расписание"})}),t.jsx(dn,{to:`${Tr}/${e}`,children:t.jsx(j,{icon:t.jsx(es,{}),width:"100%",text:"Список"})})]})]})},Ap=f.div`
    width: 100%;
    color: var(--text);
    padding: 0px 16px;
    background: var(--theme-mild-xxl);
    border-radius: var(--brLight);
    cursor: pointer;

    svg {
        min-width: 30px;
    }

    &:hover {
        background: var(--search);
    }
`,Rp=({group:e})=>{const{open:i}=G(),n=()=>{i(t.jsx(Op,{group:e}),"Группа")};return t.jsx(Ap,{onClick:n,children:t.jsxs(R,{gap:"8px",h:"50px",jc:"space-between",w:"100%",children:[t.jsxs(R,{gap:"8px",h:"50px",children:[t.jsx(ts,{}),t.jsx(ee,{fontSize:"1rem",children:e})]}),t.jsx(at,{})]})})},Cp=({groups:e})=>e?t.jsx(R,{d:"column",gap:"4px",ai:"flex-start",children:e.map(i=>t.jsx(Rp,{group:i},i))}):null,di=[{title:"Инструкции",links:[{link:O+"/storage/files/Instruktsiya_po_podkljucheniju_k_VPN.pdf",title:"Как самостоятельно подключиться к VPN",icon:"https://icon-library.com/images/vpn-icon-png/vpn-icon-png-18.jpg"},{link:O+"/storage/files/Osnaschenie_auditorij_Wi-Fi_i_proektorami.pdf",title:"Сведения об оснащении аудиторий проекторами и WiFi",icon:"https://iconsplace.com/wp-content/uploads/_icons/fa8072/256/png/wifi-icon-15-256.png"},{link:O+"/storage/files/Instruktsiya_po_sozdaniju_videozapisi_ekzamenov__provodimyh_v_onlajn-formate_4.pdf",title:"КАК СДЕЛАТЬ ВИДЕОЗАПИСЬ ЭКЗАМЕНА (WEBEX, TEAMS)",icon:"https://lh3.googleusercontent.com/-fISFqYToaYY/YNMY2EpjZuI/AAAAAAAAAqI/vBY0kGYsLf0EuJPV-jv5TXMtxkAfdm0twCLcBGAsYHQ/s400/128x128%2BCisco%2BWebex.png"},{link:O+"/storage/files/Instruktsiya_po_ispolzovaniju_Servisa_Pechati.pdf",title:"Как использовать сервис печати",icon:"https://freeiconshop.com/wp-content/uploads/edd/print-flat.png"},{link:O+"/storage/files/Instruktsiya_dostupa_k_internetu_v_auditoriyah.pdf",title:"Как подключиться к WiFi в аудитории",icon:"https://iconsplace.com/wp-content/uploads/_icons/fa8072/256/png/wifi-icon-15-256.png"},{link:O+"/storage/files/Instruktsiya_dlya_podkljucheniya_k_proektoru_.pdf",title:"Как подключиться к проектору",icon:"https://freeiconshop.com/wp-content/uploads/edd/print-flat.png"},{link:O+"/storage/files/Instruktsiya_po_zapolneniju_sposoba_distantsionnogo_provedeniya_zanyatij_v3.pdf",title:"Как внести webinar в расписание",icon:"https://webinar.ru/themes/webinar-main/assets2021/img/favicon.ico"},{link:O+"/storage/files/Instruktsiya_po_obnovleniju_kontaktnyh_dannyh_prepodavatelej.pdf",title:"Как изменить контакты ППС в расписании",icon:"https://icons.iconarchive.com/icons/wikipedia/flags/256/RU-Russia-Flag-icon.png"},{link:"https://online.mospolytech.ru/enrol/index.php?id=44",title:"Как пользоваться курсом в LMS",icon:"https://online.mospolytech.ru/theme/opentechnology/pix/favicon.ico"},{link:"https://online.mospolytech.ru/enrol/index.php?id=44",title:"Как дать доступ студентам на курс в LMS",icon:"https://online.mospolytech.ru/theme/opentechnology/pix/favicon.ico"},{link:O+"/storage/files/Dostup_rabotnikov_k_oblachnym_servisam_Microsoft.pdf?1",title:"Доступ к облачным сервисам Microsoft",icon:"https://cdn.icon-icons.com/icons2/195/PNG/256/Microsoft_23401.png"},{link:O+"/storage/files/Rabota_PPS_v_Microsoft_Teams.pdf?1",title:"Как пользоваться Office365 и Teams для онлайн-траснляций и проектной работы",icon:"https://pcprogs.net/uploads/posts/2021-08/1627783088_microsoft-office-2021-icon.png"},{link:O+"/storage/files/Ispolzovanie_rabotnikami_Microsoft_OneDrive_v_Moskovskom_Politehe.pdf?1",title:"Доступ к Microsoft OneDrive для работников и обучающихся Московского Политеха",icon:"https://cdn.iconscout.com/icon/free/png-256/onedrive-9-1174819.png"},{link:"https://webinar.ru/blog/wp-content/uploads/2020/08/Metodichka_Webinar_na_200.pdf",title:"Как проводить вебинары",icon:"https://webinar.ru/themes/webinar-main/assets2021/img/favicon.ico"},{link:"https://www.youtube.com/watch?v=fcCS20ogo6E&feature=youtu.be&ab_channel=%D0%9C%D0%BE%D1%81%D0%BA%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9%D0%9F%D0%BE%D0%BB%D0%B8%D1%82%D0%B5%D1%85",title:"Как использовать вебинар на занятиях (краткая видеоинструкция)",icon:"https://webinar.ru/themes/webinar-main/assets2021/img/favicon.ico"},{link:O+"/storage/files/Instruktsiya_po_nastrojke_chata_vebinara.pdf",title:"Как настроить чат вебинара",icon:"https://webinar.ru/themes/webinar-main/assets2021/img/favicon.ico"},{link:O+"/storage/files/Gde_najti_kovorkingi_-_tam_est_WiFi__stoly__pufy_i_rozetki.pdf",title:"Практикумы Webinar - как проводить вебинары (видеоинструкции)",icon:"https://webinar.ru/themes/webinar-main/assets2021/img/favicon.ico"},{link:O+"/storage/files/Instruktsiya_po_polucheniju_videozapisi_provedennogo_Vebinara.pdf",title:"Как получить запись прошедшего webinar",icon:"https://webinar.ru/themes/webinar-main/assets2021/img/favicon.ico"},{link:O+"/storage/files/Instruktsiya__videozapis_lektsij.pdf",title:"Как записать видеолекцию",icon:"https://cdn.iconscout.com/icon/free/png-256/circle-geometric-red-round-37922.png"},{link:O+"/storage/files/Instruktsiya_po_sozdaniju_videozapisi_ekzamenov__provodimyh_v_onlajn-formate_4.pdf",title:"Как сделать видеозапись экзамена (Webex, Teams)",icon:"https://lh3.googleusercontent.com/-fISFqYToaYY/YNMY2EpjZuI/AAAAAAAAAqI/vBY0kGYsLf0EuJPV-jv5TXMtxkAfdm0twCLcBGAsYHQ/s400/128x128%2BCisco%2BWebex.png"},{link:"https://online.mospolytech.ru/enrol/index.php?id=44",title:"Как пользоваться внешними ЭБС",icon:"https://cdn-icons-png.flaticon.com/128/2232/2232688.png"},{link:O+"/storage/files/Dostup_k_sisteme_Antiplagiat.pdf",title:"Как получить доступ к системе Антиплагиат",icon:"https://www.antiplagiat.ru/favicon-1069bb8b8557d91de9974904a33270de.ico"},{link:"https://online.mospolytech.ru/enrol/index.php?id=44",title:"Инструкция по работе преподавателя с Антиплагиат (видео)",icon:"https://www.antiplagiat.ru/favicon-1069bb8b8557d91de9974904a33270de.ico"}]},{title:"Приказы",links:[{link:O+"/storage/files/orders_staff/Prikaz_o_sozdanii_ekspertnoj_komissii.pdf",title:"Приказ по основной деятельности от 29.04.2021 № 467-ОД «О создании экспертной комиссии»",icon:W},{link:O+"/storage/files/Prikaz_po_osnovnoj_deyatelnosti_No_0793-OD_ot_02_09_2021_O_provedenii_obschih_sobranij_i_konferentsii_(2145965_v3).PDF",title:"Приказ от 02.09.2021 № 793-ОД «О проведении общих собраний и конференции»",icon:W},{link:O+"/storage/files/orders_staff/Prikaz_o_vnesenii_izmenenij_v_sostav_konkursnoj_komissii_ot_31_01_2020.PDF",title:"Приказ по основной деятельности от 31.01.2020 № 159-ОД «О внесении изменений в состав конкурсной комиссии»",icon:W},{link:O+"/storage/files/orders_staff/Prikaz_ob_utverzhdenii_perechnya_dolzhnostej_rabotnikov_s_nenormirovannym_rabochim_dnem_No_0441-OD_ot_18_03_2020.pdf",title:"Приказ по основной деятельности от 18.03.2020 № 441-ОД «Об утверждении перечня должностей работников с ненормированным рабочим днем»",icon:W},{link:O+"/storage/files/orders_staff/Prikaz_po_osnovnoj_deyatelnosti_No_0157-OD_ot_31_01_2020_O_vnesenii_izmenenij_v_sostav_Attestatsionnoj_komissii_(1450119_v1).PDF",title:"Приказ по основной деятельности от 31.01.2020 № 157-ОД «О внесении изменений в состав аттестационной комиссии»",icon:W},{link:O+"/storage/files/orders_staff/Prikaz_po_osnovnoj_deyatelnosti_No_0381-OD_ot_29_05_2019_O_vnesenii_izmenenij_v_sostav_Konkursnoj_komissii_(1216181_v2).PDF",title:"Приказ по основной деятельности от 29.05.2019 № 381-ОД «О внесении изменений в состав конкурсной комиссии»",icon:W},{link:O+"/storage/files/orders_staff/Prikaz_po_osnovnoj_deyatelnosti_Prikaz_po_tabelju_(1411371_v2).pdf",title:"Приказ по основной деятельности от 13.12.2019 № 1443-ОД «О своевременном предоставлении табеля учета использования рабочего времени»",icon:W},{link:O+"/storage/files/orders_staff/Prikaz_po_osnovnoj_deyatelnosti_No_0034-OD_ot_25_01_2018_o_vnesenii_izmenenij_v_sostav_attestatsionnoj_komissii_(710601_v2).pdf",title:"Приказ по основной деятельности от 25.01.2018 № 34-ОД «О внесении изменений в состав аттестационной комиссии»",icon:W},{link:O+"/storage/files/orders_staff/Prikaz_po_osnovnoj_deyatelnosti_No_0381-OD_ot_20_06_2018_O_sozdanii_konkursnoj_komissii_(807541_v2).pdf",title:"Приказ по основной деятельности от 20.06.2018 № 381-ОД  «О внесении изменений в состав конкурсной комиссии»",icon:W},{link:O+"/storage/files/orders_staff/Prikaz_po_osnovnoj_deyatelnosti_No_0507-OD_ot_14_06_2017_o_vnesenii_izmenenij_v_sostav_konkursnoj_komissii_(600355_v2).PDF",title:"Приказ по основной деятельности от 14.06.2017 № 507-ОД «О внесении изменений в состав конкурсной комиссии»",icon:W},{link:O+"/storage/files/orders_staff/Prikaz_po_osnovnoj_deyatelnosti_No_0625-OD_ot_13_08_2018_O_vnesenii_izmenenij_v_sostav_attestatsionnoj_komissii_(840701_v2).pdf",title:"Приказ по основной деятельности от 13.08.2018 № 625-ОД «О внесении изменений в состав аттестационной комиссии»",icon:W},{link:O+"/storage/files/orders_staff/Prikaz_po_osnovnoj_deyatelnosti_No_1129-OD_ot_22_11_2018_O_vnesenii_izmenenij_v_sostav_attestatsionnoj_komissii_(939494_v4).PDF",title:"Приказ по основной деятельности от 22.11.2018 № 1129-ОД «О внесении изменений в состав аттестационной комиссии»",icon:W},{link:O+"/storage/files/orders_staff/Prikaz_po_osnovnoj_deyatelnosti_No_1210-OD_ot_17_12_2018_O_vnesenii_izmenenij_v_sostav_Konkursnoj_komissii_(950151_v2).pdf",title:"Приказ по основной деятельности от 17.12.2018 № 1210-ОД «О внесении изменений в состав конкурсной комиссии»",icon:W}]},{title:"Положения",links:[{link:O+"/storage/files/Polozhenie_o_materialnoj_otvetstvennosti_rabotnikov_Moskovskogo_Politeha.pdf",title:"Положение о материальной ответственности работников Московского Политеха",icon:W},{link:O+"/storage/files/stats/Polozhenie_o_poryadke_zamescheniya_dolzhnostej_PPS_(2005001_v1).pdf",title:"Положение о порядке замещения должностей ППС",icon:W},{link:O+"/storage/files/stats/Polozhenie_o_sisteme_otbora_kandidatov__PPS.pdf",title:"Положение о системе отбора кандидатов ППС",icon:W},{link:O+"/storage/files/stats/Kodeks_etiki_i_sluzhebnogo_povedeniya_(355118_v2).pdf",title:"Кодекс этики и служебного поведения работников",icon:W},{link:O+"/storage/files/stats/polozhenie_o_dk_2017.pdf",title:"Положение о дисциплинарной комиссии по обучающимся",icon:W},{link:O+"/storage/files/stats/Polozhenie_o_komissii_po_upravleniju_RID_(1242395_v2).pdf",title:"Положение о комиссии по управлению правами на результаты интеллектуальной деятельности",icon:W},{link:O+"/storage/files/stats/Polozhenie_o_poryadke_provedeniya_attestatsii_rabotnikov__zanimajuschih_dolzhnosti_professorsko-prepodavatelskogo_sostava.pdf",title:"Положение о порядке проведения аттестации работников, занимающих должности профессорско-преподавательского состава",icon:W},{link:O+"/storage/files/stats/Polozhenie_ob_antikorruptsionnoj_politike_No_0498-OD_ot_06042020.PDF",title:"Положение об антикоррупционной политике",icon:W},{link:O+"/storage/files/stats/Polozhenie_ob_attestatsii_rabotnikov___(674754_v2).pdf",title:"Положение о порядке проведения аттестации работников",icon:W},{link:O+"/storage/files/stats/Polozhenie_ob_otpuskah_(Novyj)_(686482_v1).pdf",title:"Положение о порядке предоставления отпусков работникам",icon:W},{link:O+"/storage/files/stats/Polozhenie_v_otnoshenii_obrabotki_personalnyh_dannyh__(377893_v2_).pdf",title:"Положение об обработке и защите персональных данных",icon:W},{link:O+"/storage/files/stats/Polozheniya_o_protsedure_izbraniya_vyborov_dekanov_fakultetov_i_zavedujuschih_kafedrami_(643622_v1).PDF",title:"Положение о процедуре избрания деканов факультетов и заведующих кафедрами",icon:W},{link:O+"/storage/files/stats/Polozhenie_ob_Uchenom_sovete_Prikaz_No_0682-OD_ot_05_06_2020.PDF",title:"Положение об Ученом совете",icon:W},{link:O+"/storage/files/stats/Prikaz_po_osnovnoj_deyatelnosti_No_2257-OD_ot_08_12_2020_Ob_utverzhdanii_LNA__regulirujuschie_sotsialno-trudovye_otn_(1830969_v4).pdf",title:"Локальные нормативные акты, регулирующие социально-трудовые отношения",icon:W},{link:O+"/storage/files/stats/Poryadok_oformleniya_pochasovoj_oplaty.pdf",title:"Порядок оформления почасовой оплаты",icon:W}]}];var de=(e=>(e.information="information",e.instructions="instructions",e.courses="courses",e.security="security",e.orders="orders",e.regulations="regulations",e))(de||{});const Qe={information:"Общая",instructions:"Инструкции",courses:"Курсы",security:"Безопасность",orders:"Приказы",regulations:"Положения"},Np=[{id:de.information,title:Qe[de.information],visible:"all",content:[{title:"Учёба",links:[{title:"Промежуточная аттестация",visible:"student",href:"https://e.mospolytech.ru/old/storage/files/Vremennoe_polozhenie_o_provedenii_tekuschego_kontrolya_uspevaemosti_i_promezhutochnoj_attestatsii_obuchajuschihsya_v_usloviyah_obespecheniya_rezhima_izolyatsii_v_tselyah_predotvrascheniya_rasprostraneniya_koronavirusnoj_infektsii.pdf"},{title:"Оплата обучения",visible:"student",href:"https://mospolytech.ru/obuchauschimsya/oplata-obucheniya/?sphrase_id=311027"},{title:"Программы дополнительного профессионального образования",visible:"all",href:"https://study.mospolytech.ru/dpo"},{title:"Международные программы",visible:"student",href:"https://mospolytech.ru/mejdunarodnaya-deyatelnost/mezhdunarodnye-stazhirovki/"},{title:"Дополнительное образование",visible:"student",href:"https://mospolytech.ru/dop-obrazovanie/povyshenie-kvalifikacii-i-professionalnaya-perepodgotovka/"},{title:"Электронная библиотека Московского Политеха",visible:"staff",href:"https://online.mospolytech.ru/course/view.php?id=7621"},{title:"Библиотечно-информационный центр",visible:"all",href:"https://new.mospolytech.ru/obuchauschimsya/biblioteka/"},{title:"Электронный каталог библиотеки Электростальского института",visible:"all",href:"http://lib.elpol.ru"},{title:"Образовательные программы",visible:"all",href:"https://mospolytech.ru/sveden/education/educationplan/"}]},{title:"Общежития",links:[{title:"Правила внутреннего распорядка в студенческом городке",visible:"all",href:"https://mospolytech.ru/upload/medialibrary/c01/Pravila-vnutrennego-rasporyadka-v-studencheskom-gorodke-Moskovskogo-Polytecha-(23092022).pdf"}]},{title:"Наука",links:[{title:"Анонсы научных мероприятий",visible:"all",href:"https://mospolytech.ru/nauchnaya-deyatelnost/obyavleniya/"},{title:"Как получить патент",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/Uvedomlenie_o_sozdanii_RID_(standartnoe).docx"},{title:"Рекомендации по использованию Scopus для подготовки отчетности о результатах публикационной активности организации",visible:"all",href:"https://www.elsevier.com"},{title:"Список низкорейтинговых журналов",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/Discontinued-sources-from-Scopus.xlsx"},{title:"SciVal онлайн-платформа для мониторинга и анализа международных научных исследований",visible:"all",href:"https://www.scival.com/landing"},{title:"Студенческое научно-техническое общество",visible:"staff",href:"http://snto.mospolytech.ru"}]},{title:"Внеучебная деятельность",links:[{title:"Спортивная деятельность",visible:"student",href:"https://mospolytech.ru/studencheskaya-zhizn/sportivnaya-deyatelnost/"},{title:"Расписание спортивных секций",visible:"student",href:"https://e.mospolytech.ru/old/storage/files/Sportivnye_Sektsii_Mospoliteha.pdf"},{title:"Студенческая жизнь",visible:"student",href:"https://mospolytech.ru/studencheskaya-zhizn/o-studencheskoy-jizni/?sphrase_id=311039"},{title:"Профорганизация",visible:"all",href:"https://profkommospolytech.ru"},{title:"Студенческое научно-техническое общество",visible:"student",href:"http://snto.mospolytech.ru"},{title:"Формула Студент",visible:"all",href:"http://fdr.mospolytech.ru"},{title:"Медицинское обслуживание",visible:"all",href:"https://mospolytech.ru/studencheskaya-zhizn/medical-help/medicinskaya-slujba/"},{title:"Центр подготовки водителей (автошкола)",visible:"student",href:"https://mospolytech.ru/dop-obrazovanie/avtoshkola/"},{title:"Яхт-клуб",visible:"all",href:"https://mospolytech.ru/studencheskaya-zhizn/sportivnaya-deyatelnost/yaht-klub/"},{title:"Многофункциональный центр",visible:"all",href:"https://mospolytech.ru/obuchauschimsya/mnogofunkcionalnyy-centr/"}]}]},{id:de.security,title:Qe[de.security],visible:"all",content:[{title:"Безопасность",links:[{title:"Если оказались на территории вуза в момент наступившей чрезвычайной ситуации",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/notes/Metodicheskie_ukazaniya_i_pamyatki_2_Esli_okazalis_na_territorii_vuza_v_moment_nastupivshej_chrezvychajnoj_situatsii.pdf"},{title:"Памятка «Подозрительный предмет»",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/notes/Metodicheskie_ukazaniya_i_pamyatki_3_Podozritelnyj_predmet.pdf"},{title:"Памятка студента по действиям в экстремальных ситуациях",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/notes/Metodicheskie_ukazaniya_i_pamyatki_4_Pamyatka_studenta_po_dejstviyam_v_ekstremalnyh_situatsiyah.pdf"},{title:"Алгоритм действий при возникновении паники в толпе или в месте массового пребывания людей",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/notes/Metodicheskie_ukazaniya_i_pamyatki_5_Algoritm_dejstvij_pri_vozniknovenii_paniki_v_tolpe_ili_v_meste_massovogo_prebyvaniya_ljudej.PDF"},{title:"Безопасность в экстремальных и чрезвычайных ситуациях",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/notes/Metodicheskie_ukazaniya_i_pamyatki_6_Bezopasnost_v_ekstremalnyh_i_chrezvychajnyh_situatsiyah.PDF"},{title:"Как понять, что материал экстремистский, и что с этим делать",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/notes/Metodicheskie_ukazaniya_i_pamyatki_7_Kak_ponyat__chto_material_ekstremistskij__i_chto_s_etim_delat.PDF"},{title:"Последствия и ответственность за ложное сообщение об акте терроризма",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/notes/Metodicheskie_ukazaniya_i_pamyatki_8_Posledstviya_i_otvetstvennost_za_lozhnoe_soobschenie_ob_akte_terrorizma.PDF"},{title:"Последствия участия в несогласованных митингах и протестных акциях",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/notes/Metodicheskie_ukazaniya_i_pamyatki_9_Posledstviya_uchastiya_v_nesoglasovannyh_mitingah_i_protestnyh_aktsiyah.PDF"},{title:"Признаки вербовки в экстремистскую организацию и как с этим справиться",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/notes/Metodicheskie_ukazaniya_i_pamyatki_10_Priznaki_verbovki_v_ekstremistskuju_organizatsiju_i_kak_s_etim_spravitsya.PDF"},{title:"Что делать, если вы обнаружили бесхозный предмет",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/notes/Metodicheskie_ukazaniya_i_pamyatki_11_Chto_delat__esli_vy_obnaruzhili_beshoznyj_predmet.PDF"}]}]},{id:de.instructions,title:Qe[de.instructions],visible:"all",content:[{title:"Инструкции",links:[{title:"Инструкция по получению логина и пароля единой учётной записи студентов первого курса",visible:"student",href:"https://e.mospolytech.ru/old/storage/files/stud_login_instruction.pdf?1"},{title:"Инструкции",visible:"student",href:"https://e.mospolytech.ru/old/index.php?p=instructions"},{title:"Где найти коворкинги - там есть WiFi, столы, пуфы и розетки",visible:"student",href:"https://e.mospolytech.ru/old/storage/files/Gde_najti_kovorkingi_-_tam_est_WiFi__stoly__pufy_i_rozetki.pdf"},...di[0].links.map(e=>({...e,href:e.link,visible:"staff"}))]}]},{id:de.regulations,title:Qe[de.regulations],visible:"staff",content:[{title:"Положения",links:[...di[2].links.map(e=>({...e,href:e.link,visible:"staff"}))]}]},{id:de.orders,title:Qe[de.orders],visible:"staff",content:[{title:"Приказы",links:[...di[1].links.map(e=>({...e,href:e.link,visible:"staff"}))]}]},{id:de.courses,title:Qe[de.courses],visible:"student",content:[{title:"Курсы",links:[{title:"Современного курсостроения",visible:"student",href:"https://project.lektorium.tv/howtomooc"}]}]}],Ip=(e,i)=>i.reduce((n,s)=>{const o=s.links.filter(a=>ae(a.title).includes(ae(e)));return o.length&&n.push({title:s.title,links:o}),n},[]),Zs=({whereToSearch:e,searchEngine:i,setResult:n,inputAppearance:s,setExternalValue:o,hints:a,width:r,loadingOnType:d=!1,placeholder:c="Поиск по меню",validationCheck:p=!1})=>{const h=v=>{n(i(v,e))},b=()=>{n(null)},[x,u,g]=Ys({onDebounce:h,onClear:b}),m=v=>{u(v),o&&o(v)};return t.jsx(Vs,{value:x??"",setValue:m,inputAppearance:s,placeholder:c,validationCheck:p,loading:d?g:!1,hints:a,width:r})},Lp=({id:e,isToggled:i,setIsToggled:n})=>t.jsxs(Id,{children:[t.jsx("input",{type:"checkbox",name:e,id:e,className:"checkbox",checked:i,onChange:n}),t.jsx("label",{className:"toggle-body",htmlFor:e,children:t.jsx("span",{className:"toggle-circle"})})]}),eo=f.div`
    width: 8px;
    height: 8px;
    border-radius: 100%;
    margin: 3px;
`,Dp=f(eo)`
    background: var(--almostTransparentOpposite);
`,zp=f(eo)`
    transition: 0.2s;
    left: 0;
    position: absolute;
    background: ${({color:e})=>w[e??"blue"].main};
    transform: ${({current:e})=>`translateX(${e*16}px)`};
`,to=({amount:e,current:i,color:n,direction:s="horizontal"})=>e<=1?null:t.jsxs(pe,{direction:s,gap:2,width:"fit-content",minWidth:"fit-content",verticalAlign:"center",horizontalAlign:"center",children:[Array(e).fill(0).map((o,a)=>t.jsx(Dp,{},a)),t.jsx(zp,{color:n,current:i})]}),Mp=f.div`
    transition: 0.1s;
    opacity: ${({invisibleOnFalse:e,checked:i})=>e?i?1:0:1};
    transform: scale(${({invisibleOnFalse:e,checked:i})=>e?i?1:.8:1});
    display: flex;
    align-items: center;
    opacity: ${({isActive:e})=>!e&&.7};

    .checkbox-text {
        user-select: none;
        white-space: pre-wrap;
        font-size: ${({fontSize:e})=>e??"1rem"};
        margin-left: 6px;
    }

    svg {
        color: ${({color:e})=>e??"var(--reallyBlue)"};
        background: var(--theme);
        border-radius: 100%;
        padding: 2px;
    }
`,Le=({text:e,checked:i,setChecked:n,fontSize:s,visible:o=!0,isActive:a=!0,invisibleOnFalse:r=!1})=>o?t.jsxs(Mp,{checked:i,invisibleOnFalse:r,fontSize:s,onClick:()=>{a&&n(!i)},isActive:a,className:"checkbox",children:[t.jsx(j,{width:"25px",height:"25px",onClick:()=>null,icon:i||r?t.jsx(Wr,{style:{maxWidth:"20px",width:"20px",height:"20px",maxHeight:"20px"}}):t.jsx(Vr,{style:{maxWidth:"20px",width:"20px",height:"20px",maxHeight:"20px"}}),background:"transparent"}),e&&t.jsx("div",{className:"checkbox-text",children:e})]}):null,io=e=>e.split("/")[1],Fp=e=>e*1024*1024,Bp=(e,i)=>(i??Il).indexOf(e.type)!==-1,pn=(e,i,n,s,o=Ll)=>{if(n&&i.length+e.length>n)return V.evokePopUpMessage({message:`Нельзя загрузить больше ${n} файлов`,type:"failure"}),i;for(let a=0;a<e.length;a++)return Bp(e[a],s)?e[a].size>Fp(o)?(V.evokePopUpMessage({message:`Размер файла слишком большой. Максимальный размер файла: ${o} MB`,type:"failure",time:1e4}),i):[...i,e[a]]:(V.evokePopUpMessage({message:`Неверный формат файла. Доступные форматы: ${s==null?void 0:s.map(r=>io(r))}`,type:"failure",time:5e3}),i)},Up=f.label`
    width: 100%;
    min-height: 150px;
    border-radius: var(--brLight);
    transition: 0.2s border;
    border: ${({showPulse:e})=>e?`2px dashed ${w.blue.main}`:`2px dashed ${w.grey.main}`};
    background: ${({showPulse:e})=>e?w.blue.transparent3:""};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    cursor: ${({isActive:e})=>e&&"pointer"};
    pointer-events: ${({isActive:e})=>!e&&"none"};
    opacity: ${({isActive:e})=>!e&&.4};
    position: relative;

    .info {
        display: flex;
        flex-wrap: wrap;
        gap: 5px;
        padding: 4px;
        border-radius: var(--brLight);
        background: red;
        pointer-events: none;
        width: calc(100% + 6px);

        .info-item {
            padding: 5px 10px;
            background: var(--schedule);
            border-radius: 5px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 0.7em;
            font-weight: 600;
            pointer-events: none;
        }
    }

    input[type='file'] {
        display: none;
    }

    .message {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        opacity: 0.7;
        color: var(--text);
        pointer-events: none;

        .front-icon {
            z-index: 2;
        }

        .icons-behind {
            z-index: 1;
            position: absolute;
            filter: grayscale(1);
            opacity: 0.7;
            transform: scale(0.8);

            & .icon-1 {
                opacity: 0;
                animation: ${({showPulse:e})=>e?"behind-1 0.5s forwards":""};
            }
            & .icon-2 {
                opacity: 0;
                animation: ${({showPulse:e})=>e?"behind-2 0.5s forwards":""};
            }

            @keyframes behind-1 {
                0% {
                    opacity: 0;
                    transform: translate(10px, -15px) rotate(0deg);
                }
                100% {
                    opacity: 1;
                    transform: translate(-3px, -15px) rotate(-10deg);
                }
            }
            @keyframes behind-2 {
                0% {
                    opacity: 0;
                    transform: translate(-10px, -15px) rotate(0deg);
                }
                100% {
                    opacity: 1;
                    transform: translate(3px, -15px) rotate(10deg);
                }
            }
        }

        svg {
            width: 40px;
            height: 40px;
            margin-bottom: 10px;
            transition: 0.2s;
            animation: ${({showPulse:e})=>e?"jumping 1s forwards":""};

            @keyframes jumping {
                0% {
                    transform: translateY(0%);
                }
                100% {
                    transform: translateY(-5%) scale(1.1);
                }
            }
        }
    }
`,Hp=({files:e,maxFiles:i,setFiles:n,isActive:s,formats:o,maxFileSizeInMegaBytes:a})=>{const r=l.useRef(null),[d,c]=l.useState(!1),p=g=>{const m=g.target.files;m!=null&&m.length&&n(pn(m,e,i,o,a))},h=g=>{g.preventDefault()},b=g=>{g.preventDefault(),c(!1);const m=g.dataTransfer.files;m.length&&n(pn(m,e,i,o,a))},x=g=>{g.preventDefault(),c(!0)},u=g=>{g.preventDefault(),c(!1)};return t.jsxs(Up,{isActive:s,showPulse:d,onDragOver:g=>s&&h(g),onDragEnter:g=>s&&x(g),onDragLeave:g=>s&&u(g),onDrop:g=>s&&b(g),topPadding:!!i,children:[t.jsx("input",{type:"file",name:"",id:"",ref:r,onChange:p}),t.jsxs("div",{className:"message",children:[t.jsx(ai,{className:"front-icon"}),t.jsxs("div",{className:"icons-behind",children:[t.jsx(ai,{className:"icon-1"}),t.jsx(ai,{className:"icon-2"})]}),t.jsx("b",{children:"Нажмите сюда или перетащите файл"}),t.jsxs(ee,{align:"center",children:["Форматы: ",o?o.map(g=>io(g)).join(", "):"jpg, png, pdf"," • Макс. файлов: ",i]})]})]})},Wp=e=>{if(e===0)return"0 Bytes";const i=1024,n=["Bytes","KB","MB","GB","TB"],s=Math.floor(Math.log(e)/Math.log(i));return parseFloat((e/Math.pow(i,s)).toFixed(2))+" "+n[s]},Vp=(e,i,n)=>(e.preventDefault(),e.stopPropagation(),[...n.filter(o=>o.name!==i)]),Gp=f.div`
    width: 100%;
    padding: 6px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: ${w.grey.transparent3};
    border-radius: var(--brLight);

    .file-body {
        display: flex;
        gap: 8px;
        align-items: center;

        .name-and-size {
            display: flex;
            flex-direction: column;

            .file-name {
                font-size: 0.8em;
            }
        }

        .image-container {
            padding: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: var(--theme);
            border-radius: var(--brLight);

            svg {
                width: 20px;
                height: 20px;
            }
        }
    }
`,Yp=({file:e,files:i,setFiles:n})=>{const{open:s}=G(),o=(r,d)=>{r.preventDefault(),r.stopPropagation();const c=new FileReader;c.onloadend=()=>{s(t.jsx(Ls,{src:c.result,loading:!1,width:"500px",height:""}))},d&&c.readAsDataURL(d)},a=r=>Te.evokeConfirm({message:"Вы уверены, что хотите удалить файл?",onConfirm:()=>n(Vp(r,e.name,i))});return t.jsxs(Gp,{onClick:r=>r.preventDefault(),children:[t.jsxs("div",{className:"file-body",onClick:r=>e.type.includes("image")&&o(r,e),children:[t.jsx("div",{className:"image-container",children:e.type.includes("image")?t.jsx(Gr,{}):t.jsx(Yr,{})}),t.jsxs("div",{className:"name-and-size",children:[t.jsx("b",{className:"file-name",children:e.name}),t.jsx(ee,{fontSize:"0.7em",children:Wp(e.size)})]})]}),t.jsx(j,{icon:t.jsx(Oe,{}),height:"30px",width:"30px",background:"transparent",onClick:a})]})},qp=({files:e,setFiles:i})=>t.jsx(pe,{title:"Список файлов",visible:!!e.length,onDelete:()=>Te.evokeConfirm({message:"Вы уверены, что хотите удалить все файлы?",onConfirm:()=>i([])}),children:e.map(n=>t.jsx(Yp,{file:n,files:e,setFiles:i},n.name))}),no=e=>t.jsxs(pe,{gap:12,children:[t.jsx(Hp,{...e}),t.jsx(qp,{files:e.files,setFiles:e.setFiles})]}),Kp=f.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`,Xp=({checkbox:e,loadfile:i,docVisible:n})=>t.jsxs(Kp,{children:[t.jsx(Le,{...e}),n&&t.jsx(no,{...i})]}),Jp=f.div`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 5px;
    flex-direction: column;

    .date-interval-inputs {
        width: 100%;
        display: flex;
        align-items: center;
        gap: 10px;
    }

    @media (max-width: 400px) {
        .date-interval-inputs {
            flex-direction: column;
        }
    }
`,Qp=({title:e,required:i,dates:n,setDates:s,valid:o,setValid:a,diff:r,minValue:d})=>{if(l.useEffect(()=>{a(new Date(n[0])<=new Date(n[1])||!n[0].length||!n[1].length)},[n]),r!=null){const c=new Date(n[0]),p=new Date(c);p.setDate(c.getDate()+r),n[1]=qe(p,"extraWeird")}return t.jsxs(Jp,{children:[t.jsx(Y,{size:5,align:"left",visible:!!e,required:i,children:e}),t.jsx(se,{title:"Внимание",type:"alert",icon:t.jsx(jt,{}),visible:!o,children:"Дата начала не может быть больше даты конца"}),t.jsxs("div",{className:"date-interval-inputs",children:[t.jsx(Se,{value:n[0],danger:!o,setValue:c=>s([c,n[1]]),type:"date",minValue:d}),t.jsx(Se,{value:n[1],setValue:c=>s([n[0],c]),type:"date",danger:!o})]})]})},Zp=e=>{var u,g,m;const{width:i}=Zt(),n=l.useRef(null),[s,o]=l.useState(!1),[a,r]=l.useState(!1),[d,c]=l.useState(0),[p,h]=l.useState(0),b=((u=n.current)==null?void 0:u.clientWidth)??1,x=Math.ceil((((g=n.current)==null?void 0:g.scrollWidth)??0)/(b+(e??0)));return l.useEffect(()=>{n.current&&(n.current.scrollLeft=d,n.current.clientWidth<n.current.scrollWidth&&(o(!0),r(!0)))},[d,(m=n.current)==null?void 0:m.scrollLeft,i]),{listRef:n,leftArrow:s,rightArrow:a,setScrollLeft:c,pageOffset:b,amountOfPages:x,currentPage:p,setCurrentPage:h}},eu=e=>{const{title:i,children:n,gap:s,width:o,height:a,padding:r,fontSize:d,wrap:c,onAdd:p,onWatchMore:h,onDelete:b,showPages:x,innerPadding:u,minWidth:g,wrapOnMobile:m,position:v,direction:S="vertical",verticalAlign:_="top",horizontalAlign:E="left",scroll:k=!0,visible:q=!0,...$}=e;if(!q)return null;const{listRef:N,leftArrow:Q,rightArrow:z,setScrollLeft:J,pageOffset:Re,amountOfPages:Ce,currentPage:oi,setCurrentPage:Nt}=Zp(s);return t.jsxs(od,{padding:r,position:v,width:o,minWidth:g,height:a,children:[t.jsxs(Y,{size:4,align:"left",bottomGap:!0,visible:!!i,width:"calc(fit-content + 50px)",children:[i,p&&t.jsx(j,{icon:t.jsx(Ve,{}),width:"35px",height:"15px",background:w.grey.transparent3,textColor:"var(--reallyBlue)",onClick:p}),h&&t.jsx(j,{width:"50px",height:"15px",background:w.blue.transparent2,textColor:w.blue.light1,onClick:h,text:"Ещё"}),b&&t.jsx(j,{width:"fit-content",height:"15px",background:w.grey.transparent3,textColor:"var(--reallyBlue)",onClick:b,text:"Удалить"})]}),t.jsx(At,{verticalAlign:_,horizontalAlign:E,direction:S,ref:N,gap:s,width:o,height:a,fontSize:d,wrap:c,innerPadding:u,scroll:k,wrapOnMobile:m,...$,children:n}),(z||Q)&&t.jsxs("div",{className:"bottom-wrapper",children:[Q&&t.jsx(j,{background:"transparent",minWidth:"40px",height:"25px",icon:t.jsx($t,{}),className:"left-button",textColor:w.grey.main,onClick:()=>{Nt(F=>_e(F-1,Ce-1)),J(F=>{var K;return _e(F-Re-(s??0),((K=N.current)==null?void 0:K.scrollWidth)??0)})}}),x&&t.jsx(to,{direction:"horizontal",current:oi,amount:Ce}),z&&t.jsx(j,{background:"transparent",minWidth:"40px",height:"25px",icon:t.jsx(at,{}),className:"right-button",textColor:w.grey.main,onClick:()=>{Nt(F=>_e(F+1,Ce-1)),J(F=>{var K;return _e(F+Re+(s??0),((K=N.current)==null?void 0:K.scrollWidth)??0)})}})]})]})},pe=ne.memo(eu),tu=f.div`
    width: calc(100% - 2px);
    padding: 16px;
    margin: 1px;
    border-radius: var(--brLight);
    background: var(--form);
    box-shadow: var(--schedule-shadow);
    padding: 16px;
    a {
        font-size: 0.95rem;
    }
`,iu=({blocks:e,isStaff:i})=>e?t.jsx(t.Fragment,{children:e.map(({title:n,links:s},o)=>t.jsxs(tu,{children:[t.jsx(Y,{size:4,align:"left",bottomGap:"16px",children:n}),t.jsx(pe,{gap:16,children:s.map(({title:a,href:r,visible:d},c)=>d==="staff"&&!i||d==="student"&&i?null:t.jsx("a",{href:r,target:"_blank",rel:"noreferrer",children:a},a+c))})]},n+o))}):null,nu=f.div`
    display: grid;
    grid-template-rows: ${({isOpen:e})=>e?"1fr":"0fr"};
    opacity: ${({isOpen:e})=>e?"1":"0"};
    overflow: hidden;
    transition: 0.2s grid-template-rows, 0.2s opacity, 0.2s margin-bottom;
    width: 100%;
    margin-bottom: ${({bottomMargin:e,isOpen:i})=>e&&i?"12px":"0"};
`,su=f.div``,ou=f.div`
    min-height: 0;
    transform: scale(${({isOpen:e})=>e?"1":"0.98"});
    transition: 0.2s transform;
`,au=({title:e,children:i,bottomMargin:n,forceState:s=!1})=>{const[o,a]=l.useState(s);return l.useEffect(()=>{a(s)},[s]),t.jsxs(nu,{isOpen:o,bottomMargin:n,children:[e&&t.jsx(su,{children:e}),t.jsx(ou,{isOpen:o,children:i})]})},Rt=({words:e})=>{const i=e.filter(n=>n.length!==0);return t.jsx(t.Fragment,{children:i.map((n,s)=>n+(s===i.length-1?"":" • "))})},ru="2.2.0",so=()=>t.jsx(se,{icon:null,type:"info",title:ru,width:"38px",fontSize:"0.65rem",padding:"7px 0px",align:"center"}),ge=({color:e,children:i})=>t.jsx(ye,{color:e,children:i}),lu=()=>({info:t.jsx(ge,{color:"grey",children:t.jsx(ot,{})}),message:t.jsx(ge,{color:"red",children:t.jsx(Ci,{})}),alert:t.jsx(ge,{color:"purple",children:t.jsx(Ni,{})}),"payment-dorm":t.jsx(ge,{color:"green",children:t.jsx(gi,{})}),"payment-ed":t.jsx(ge,{color:"green",children:t.jsx(gi,{})}),"digital-services":t.jsx(ge,{color:"red",children:t.jsx(I,{})}),"doc-for-review":t.jsx(ge,{color:"blue",children:t.jsx(I,{})}),"hr-applications":t.jsx(ge,{color:"green",children:t.jsx(I,{})}),"kpi-pps":t.jsx(ge,{color:"pink",children:t.jsx(is,{})}),schedule:t.jsx(ge,{color:"pink",children:t.jsx(St,{})}),"version-update":t.jsx(so,{}),"electronic-interaction":t.jsx(ge,{color:"blue",children:t.jsx(ns,{})})}),cu=f(Z)`
    width: 100%;
    display: flex;
    align-items: center;
    padding: 4px;
    border-radius: var(--brLight);
    color: var(--text);
    cursor: pointer;

    .left-icon {
        width: fit-content;
        margin-right: 12px;
    }

    .content {
        display: flex;
        flex-direction: column;
        width: 100%;

        .top-content {
            width: 100%;
            margin-top: 2px;
            display: flex;
            align-items: center;
        }
    }

    &:hover {
        background: var(--theme-mild-xxl);
    }
`,du=f.div`
    font-size: ${({fontSize:e})=>e};
    font-weight: 500;
`,pu={small:"0.8rem",middle:"0.83rem",big:"0.86rem"},uu={small:"0.75rem",middle:"0.78rem",big:"0.80rem"},hu={small:"0px",middle:"1px",big:"3px"},oo=({id:e,title:i,text:n,time:s,date:o,onClick:a,type:r,pageId:d,goTo:c,onClose:p,bottomMargin:h,closeAnimation:b=!0,loadingRemove:x=!1,canClose:u=!0,fullText:g=!0,maxLetters:m=200,size:v="middle"})=>{const S=qe(o,"short"),{close:_}=G(),[E,k]=l.useState(!1),q=N=>{N.stopPropagation(),N.preventDefault(),b?(k(!0),setTimeout(()=>{p==null||p()},300)):p==null||p()},$=()=>{a==null||a(),u&&Ke.clearById({id:e,pageId:d}),_()};return t.jsx(au,{forceState:!E,bottomMargin:h,children:t.jsxs(cu,{to:c??"",onClick:$,closed:E,children:[t.jsx("span",{className:"left-icon",children:lu()[r]}),t.jsxs("div",{className:"content",children:[t.jsx(ee,{fontSize:"0.7rem",children:t.jsx(Rt,{words:[S??"",s??""]})}),t.jsxs(R,{d:"column",gap:hu[v],ai:"flex-start",children:[t.jsx(du,{fontSize:pu[v],children:g?i:Tt(i,m)}),t.jsx(ee,{fontSize:uu[v],children:g?n:Tt(n,m)})]})]}),p&&t.jsx(j,{isActive:!(x&&E),icon:t.jsx(Oe,{}),background:"transparent",onClick:q})]})})},ao=({notifications:e,loadingRemove:i})=>{if(!e||e.length===0)return null;const n=(o,a,r)=>()=>{Ke.clearById({id:o,pageId:a}),r==null||r()},s=o=>o.canClose!==!1?n(o.id,o.pageId,o.onClose):void 0;return t.jsx(R,{d:"column",children:e.map((o,a)=>l.createElement(oo,{size:"big",loadingRemove:i,bottomMargin:a!==e.length-1,...o,key:o.id,onClose:s(o)}))})},Vt=e=>Array.isArray(e)?e==null?void 0:e.length:Object.keys(e??{}).length,un=({people:e,type:i})=>!e||e.length===0?null:t.jsx(R,{d:"column",children:e.map(n=>l.createElement(bo,{name:n.fio,type:i,...n,key:n.id}))}),gu=()=>{const{allRoutes:e}=$e.useMenu(),{notifications:i,removeNotificationLoading:n}=we.useLkNotifications(),{data:{user:s}}=oe.useUser(),o=(s==null?void 0:s.user_status)==="staff",a=l.useMemo(()=>Np.flatMap(({visible:$,content:N})=>$==="staff"&&o||$==="student"&&!o||$==="all"?N:[]),[o]),[r,d]=l.useState(null),[c,p]=l.useState(null),[h,b]=l.useState(null),[x,u]=l.useState(null),[g,m]=l.useState(null),[v,S]=l.useState(null),[_,E]=l.useState(null),k=[{title:"Разделы",content:t.jsx(yp,{pages:g,showNotFound:!1}),clear:()=>{m(null)},search:$=>{if(e){const N=wp($,e);m(N)}},data:g},{title:"Студенты",content:t.jsx(un,{people:x,type:"stud"}),data:x,clear:()=>{u(null)},search:async $=>{const{data:N}=await Tc($,"",1,20);u(N.items)}},{title:"Сотрудники",content:t.jsx(un,{people:h,type:"staff"}),data:h,clear:()=>{b(null)},search:async $=>{const{data:N}=await yc($,"",1,20);b(N.items)}},{title:"Группы",content:t.jsx(Cp,{groups:r}),data:r,clear:()=>{d(null)},search:async $=>{const{data:N}=await Ec($);d(N.items)}},{title:"Подразделения",content:t.jsx($p,{divisions:c}),data:c,clear:()=>{p(null)},search:async $=>{const{data:N}=await wc($);p(N.items)}},{title:"Уведомления",content:t.jsx(ao,{notifications:v,loadingRemove:n}),clear:()=>{S(null)},search:$=>{const N=i.filter(Q=>ae(Q.title).includes($));S(N)},data:v},{title:"Полезная информация",content:t.jsx(iu,{blocks:_,isStaff:o}),clear:()=>{E(null)},search:$=>{const N=Ip($,a);E(N)},data:_}];return[(()=>{const{content:$,clear:N,data:Q}=k.reduce((z,J)=>(Vt(J.data)&&(z.data.push(J.data),z.content.push(t.jsxs(t.Fragment,{children:[t.jsx(Y,{size:4,align:"left",children:J.title}),J.content,t.jsx(ue,{})]}))),z.clear.push(J.clear),z),{content:[],clear:[],data:[]});return{title:"Все",content:$,clear:()=>N.map(z=>z()),search:async z=>{z.length<=8&&/\d|[-]/g.test(z)?await k[3].search(z):(k[0].search(z),k[5].search(z),k[6].search(z),Vt(k[0].data)===0&&(await k[1].search(z),await k[2].search(z),await k[4].search(z)))},data:Q}})(),...k]},fu=()=>JSON.parse(localStorage.getItem("search_history")??"[]"),xu=()=>{const e=gu(),[i,n]=l.useState(0),[s,o]=l.useState(""),a=l.useMemo(()=>fu(),[]),r=async x=>{e[i].clear();const u=Hs(x)?Us(x):x;await e[i].search(u),u.length>0&&!a.includes(u)&&(a.unshift(u),a.length>8&&a.pop(),localStorage.setItem("search_history",JSON.stringify(a)))},[d,c,p]=Ys({onDebounce:r,delay:400,defaultValue:"",deps:[i.toString()],triggerDelay:200,triggerOn:x=>(o(x),x.length>0&&(s!==x||!e[i].data))}),h=!p&&!d.length,b=!!d.length&&!p&&!!Vt(e[i].data);return{showMessage:h,showSearchResult:b,searchValue:d,setSearchValue:c,currentPage:i,setCurrentPage:n,config:e,loading:p,searchHistory:a}},mu=(e,i,n)=>i.length===0?n.map(s=>({id:s,title:s,value:s,icon:t.jsx(Xi,{})})):e?n.filter(s=>ae(s).includes(ae(i))).map(s=>({id:s,title:s,value:s,icon:t.jsx(Xi,{})})):[],bu=()=>t.jsxs(R,{gap:"8px",ai:"flex-start",children:[t.jsx(D,{shape:"circle",size:{width:"40px",height:"40px"},margin:"0"}),t.jsxs(R,{gap:"6px",d:"column",ai:"flex-start",jc:"center",h:"100%",children:[t.jsx(D,{shape:"rect",size:{width:"300px",height:"13px"},margin:"0"}),t.jsx(D,{shape:"rect",size:{width:"220px",height:"10px"},margin:"0"})]})]}),vu=f.div`
    @media (max-width: 1000px) {
        height: 600px;
    }

    @media (min-width: 1001px) {
        width: 600px;
        height: 600px;
    }
`,_u=()=>{const{showMessage:e,showSearchResult:i,searchValue:n,setSearchValue:s,currentPage:o,setCurrentPage:a,loading:r,config:d,searchHistory:c}=xu(),p=mu(r,n,c),{isOpen:h}=G();return t.jsx(vu,{children:t.jsxs(R,{d:"column",gap:"8px",h:"100%",children:[t.jsx(Vs,{value:n,setValue:s,loading:r,focusOn:h,hints:p}),t.jsx(Gs,{pages:d.map(({title:b})=>({title:b})),currentPage:o,setCurrentPage:a}),t.jsx(Ws,{value:n,setValue:s}),e&&t.jsx(R,{h:"100%",children:t.jsx(ce,{size:"60px",text:'Введите что-нибудь. Например, "Цифровые сервисы"',image:t.jsx(Ee,{})})}),!r&&n.length!==0&&!e&&!Vt(d[o].data)&&t.jsx(R,{h:"100%",children:t.jsx(ce,{size:"60px",text:"Ничего не было найдено",image:t.jsx(Xn,{})})}),r&&Array(10).fill(0).map((b,x)=>t.jsx(bu,{},x)),i&&t.jsx(t.Fragment,{children:d[o].content})]})})},yu=f(Ae)`
    cursor: pointer;
    &:hover {
        filter: brightness(0.96);
    }
`,wu=f.div`
    background-color: var(--mild-theme);
    width: 23px;
    height: 23px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.73rem;
    font-weight: 500;
    width: fit-content;
    padding: 4px 6px;
    border-radius: 4px;
    color: var(--theme-mild-opposite);
`,ju=f(R)`
    @media (max-width: 1000px) {
        display: none;
    }
`,ku=()=>{const e=Kd();return{Windows:[{title:"CTRL",key:"Control"},{key:"k"}],Linux:[{title:"CTRL",key:"Control"},{key:"k"}],UNIX:[{title:"CTRL",key:"Control"},{key:"k"}],MacOS:[{title:"CMD",key:"Meta",icon:t.jsx(qr,{})},{key:"k"}]}[e]},ro=({size:e="large"})=>{const i=ku(),{open:n}=G(),s=e==="large"?"16px":"8px",o=e==="large"?"100%":"92%",a=()=>n(t.jsx(_u,{}),"Глобальный поиск");return Xd(i.map(({key:r})=>r),a),e==="icon"?t.jsx(j,{direction:"vertical",icon:t.jsx(Ee,{}),width:"40px",minWidth:"40px",background:"transparent",onClick:a}):t.jsxs(yu,{maxWidth:"750px",width:o,height:"fit-content",padding:s,justifyContent:"space-between",onClick:a,children:[t.jsx(ee,{align:"left",fontSize:"0.9rem",children:t.jsxs(R,{gap:"8px",children:[t.jsx(Ee,{}),"Поиск"]})}),t.jsx(ju,{w:"fit-content",gap:"4px",children:i.map(r=>t.jsx(wu,{children:(r==null?void 0:r.icon)??(r.title??r.key).toUpperCase()},r.key))})]})},vi=e=>e.split(" ").map(i=>i[0]),xe=(e,i)=>{const n=vi(e),s=w[Nl[n[0]]];return s==null?void 0:s[i??"main"]},Tu=f.div`
    border-radius: ${({borderRadius:e})=>e?`${e}px`:"50%"};
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({background:e})=>e??"var(--almostTransparent)"};
    color: var(--text);
    border: ${({selected:e,border:i})=>(e||i)&&"5px solid var(--theme)"};
    outline: ${({selected:e})=>e&&"4px solid var(--reallyBlue)"};
    position: relative;

    width: ${({width:e})=>e??"160px"};
    min-width: ${({width:e})=>e??"160px"};
    height: ${({height:e})=>e??"160px"};

    margin-right: ${({marginRight:e})=>e??"32px"};
    box-shadow: ${({boxShadow:e})=>e??"0"};

    .icon {
        position: absolute;
        bottom: -2px;
        right: -5px;
        background: var(--theme);
        color: var(--text);
        padding: 2px;
        border-radius: 100%;
        width: 18px;
        height: 18px;
        display: flex;
        align-items: center;
        justify-content: center;

        svg {
            width: 12px;
            height: 12px;
        }
    }

    .checkbox {
        position: absolute;
        bottom: -9px;
        right: -9px;
    }

    .name {
        display: flex;
        height: 100%;
        width: 100%;
        color: #fff;
        font-size: ${({width:e})=>e?parseInt(e)/50+"em":"3em"};
        align-items: center;
        justify-content: center;
        font-weight: bold;
    }

    @media (max-width: 1000px) {
        width: ${({width:e})=>e??"75px"};
        min-width: ${({width:e})=>e??"75px"};
        height: ${({height:e})=>e??"75px"};
        margin-right: ${({marginRight:e})=>e??"15px"};

        .name {
            font-size: ${({width:e})=>e?parseInt(e)/50+"em":"1.5em"};
        }
    }
`,Eu=f.img`
    width: 100%;
    height: 100%;
    border-radius: ${({round:e})=>e&&"100%"};

    object-fit: cover;
    object-position: center;
`;function Ct({selected:e,name:i,avatar:n,width:s,height:o,marginRight:a,notifications:r,checked:d,boxShadow:c,border:p,icon:h,avatarModal:b,onClick:x,borderRadius:u,background:g}){const[m,v]=l.useState(!0),S=vi(i)[0]+(vi(i)[1]??""),{open:_}=G(),E=k=>{b?_(t.jsx(Ct,{name:i,width:"400px",height:"400px",marginRight:"0",avatar:n})):x==null||x(k)};return t.jsxs(Tu,{selected:e,width:s,height:o,marginRight:a,background:g??xe(i),boxShadow:c,border:p,onClick:E,borderRadius:u,children:[n&&m?t.jsx(Eu,{loading:"lazy",round:!0,onLoadedData:()=>v(!0),onError:()=>v(!1),src:n}):t.jsx("div",{className:"name",children:S}),h&&t.jsx("span",{className:"icon",children:h}),t.jsx(Le,{invisibleOnFalse:!0,checked:d??!1,visible:d!==void 0,setChecked:()=>null}),t.jsx(st,{left:"80%",top:"90%",outline:"4px solid var(--schedule)",visible:!!r,children:r})]})}const Su=()=>t.jsxs(R,{gap:"8px",ai:"center",children:[t.jsx(D,{shape:"circle",size:{width:"40px",height:"40px"},margin:"0"}),t.jsxs(R,{gap:"6px",d:"column",ai:"flex-start",jc:"center",h:"100%",children:[t.jsx(D,{shape:"rect",size:{width:"300px",height:"13px"},margin:"0"}),t.jsx(D,{shape:"rect",size:{width:"220px",height:"10px"},margin:"0"})]})]}),$u=f.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
    height: 100%;

    @media (min-width: 1001px) {
        width: 100%;
        min-width: 400px;
    }
`,lo=({maxNotificationsVisible:e})=>{const{error:i,loading:n,notifications:s,removeNotificationError:o,removeNotificationLoading:a}=we.useLkNotifications();return l.useEffect(()=>{o&&V.evokePopUpMessage({type:"failure",message:o,time:1e4})},[o]),l.useEffect(()=>{Ke.clearAllVisible()},[]),t.jsxs($u,{children:[s.length===0&&!n&&t.jsx(Vi,{height:"100%",children:t.jsx(ce,{text:i??"Нет новых уведомлений",image:i?t.jsx(We,{}):t.jsx(Kr,{}),size:"70px"})}),t.jsxs(R,{d:"column",gap:"16px",children:[t.jsx(se,{lineHeight:"1.2rem",type:"tip",visible:s.length!==0,children:"Вы можете отключить получение каких-либо уведомлений в настройках"}),t.jsx(ao,{notifications:e?s.slice(0,e):s,loadingRemove:a})]}),n&&t.jsx(R,{d:"column",gap:"12px",children:Array(5).fill(0).map((r,d)=>t.jsx(Su,{},d))})]})},Pu=f.div`
    position: relative;
    min-width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--brLight);

    &:hover {
        background: var(--theme-mild-xxl);
    }

    svg {
        width: 22px;
        height: 22px;
        color: var(--text);
    }
`,co=()=>{const{close:e}=G(),{notifications:i}=we.useLkNotifications(),n=3;return t.jsxs(R,{d:"column",gap:"30px",w:"100%",mw:"400px",children:[t.jsxs(R,{d:"column",gap:"16px",children:[t.jsx(lo,{maxNotificationsVisible:n}),t.jsxs(ee,{width:"100%",visible:i.length>n,children:["Еще ",i.length-n," ",Js(i.length-n,{one:"уведомление",twoToFour:"уведомления",fiveToNine:"уведомлений",zero:"уведомлений"}),"..."]})]}),i.length>0&&t.jsx(Z,{to:Nr,style:{width:"100%"},children:t.jsx(j,{width:"100%",text:"Показать все",onClick:e})})]})},Ou=()=>{const{notifications:e}=we.useLkNotifications(),{open:i}=G(),n=()=>{i(t.jsx(co,{}),"Уведомления")};return t.jsxs(Pu,{onClick:n,children:[t.jsx(st,{outline:"none","box-shadow":"0px 0px 0px 3px var(--schedule)",color:"red",top:"14px",left:"30px",visible:e.length>0,pulsing:!0,className:"notification-circle",shadow:!0,children:e.length}),t.jsx(fi,{})]})},Cb=f.header`
    width: 100%;
    /* max-width: 750px; */
    padding-top: 100px;
    position: relative;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: var(--text);

    svg {
        min-width: 30px;
    }

    @media (max-width: 1000px) {
        padding: auto;
        display: flex;
        align-items: center;
        justify-content: center;
        & > .info {
            display: none;
        }
    }
`;f.div`
    width: ${({width:e})=>e+"px"};
    height: ${({height:e})=>e+"px"};
    border-radius: ${({borderRadius:e})=>e+"px"};
    position: absolute;
    top: ${({top:e})=>e+"%"};
    left: ${({left:e})=>e+"%"};
    z-index: -1;
    box-shadow: 0 0 10px #00000003;
    background-color: ${({color:e})=>e};
`;const Nb=f.div`
    width: 100%;
    display: flex;
    gap: 10px;
    flex-wrap: wrap;

    a {
        width: calc(50% - 5px);
    }

    button {
        font-size: 0.7rem;

        span {
            margin-top: 8px;
            margin-bottom: -8px;
        }
    }

    @media (max-width: 1000px) {
        flex-wrap: nowrap;

        button {
            height: 42px;
        }
    }
`,Au=f.div`
    min-width: ${({width:e})=>e??"35px"};
    height: ${({width:e})=>e??"35px"};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    color: #fff;
    background: ${({background:e})=>e??"var(--almostTransparent)"};

    @media (max-width: 1000px) {
        background: none;
        color: var(--text);
        /* color: ${({background:e})=>e??"var(--almostTransparent)"}; */
    }
`,Ib=f.div`
    margin-bottom: 15px;
    height: fit-content;
    width: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    gap: 4px;

    b {
        font-size: 1.2rem;
    }

    span {
        opacity: 0.5;
    }

    @media (max-width: 1000px) {
        & > .info {
            display: none;
        }
    }
`,Lb=f.div`
    margin-top: 50px;
    width: 100%;
`,Db=f.div`
    display: flex;
    gap: 12px;
    align-items: center;
    width: 100%;
    max-width: 750px;

    @media (max-width: 1000px) {
        flex-direction: column;
    }
`,zb=f(Ae)`
    padding: 12px;
    position: relative;

    @media (max-width: 1000px) {
        max-width: 100%;
    }
`,Mb=f.div`
    position: absolute;
    left: 50%;
    top: -30%;
    transform: translateX(-50%);
`,Ru=f.div`
    padding: 0px 12px;
    height: 45px;
    width: 100%;
    display: flex;
    align-items: center;
    border-radius: var(--brLight);
    opacity: ${({disabled:e})=>e?"0.5":"1"};
    pointer-events: ${({disabled:e})=>e?"none":"all"};

    .icon {
        width: 22px;
        height: 22px;
        margin-right: 10px;
        display: flex;
        justify-content: center;
        align-items: center;

        svg {
            width: 22px;
            height: 22px;
            opacity: 0.4;
        }
    }

    & > label {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        user-select: none;
        cursor: pointer;

        b {
            color: var(--text);
            opacity: 0.7;
            font-weight: 500;
            font-size: 0.85rem;
        }
    }

    &:hover {
        background: var(--mild-theme);
    }
`,Cu=({title:e,state:i,action:n,icon:s,disabled:o})=>{const a=()=>{n(!i)};return t.jsxs(Ru,{disabled:o,children:[s&&t.jsx("div",{className:"icon",children:s}),t.jsxs("label",{children:[t.jsx("b",{children:e}),t.jsx(Lp,{id:Math.random().toString(),isToggled:i,setIsToggled:a},e)]})]},e)},Nu=f.div`
    width: 100%;
    h2 {
        margin-top: 10px;
    }
`,Iu=({title:e,toggles:i,setToggles:n,disabled:s})=>{const o=l.useCallback((a,r)=>{i[a].state=!i[a].state,n([...i]),r&&(r==null||r(i[a].state))},[i,n]);return t.jsxs(Nu,{children:[!!e.length&&t.jsx("h2",{children:e}),i.map(({title:a,state:r,action:d},c)=>t.jsx(Cu,{disabled:s,title:a,state:r,action:()=>o(c,d)},a))]})},po=({type:e,onClick:i})=>{const{theme:n,switchTheme:s}=Kt(),{settings:o}=rt.useSettings(),a=o==null?void 0:o["settings-appearance"].property,[r,d]=l.useState(n==="light"),c=r?t.jsx(Xr,{}):t.jsx(Jr,{}),h=`Тема: ${r?"Светлая":"Темная"}`,[b,x]=l.useState([{title:"Темная тема",state:n!=="light",action:g=>s(g)}]);l.useEffect(()=>{x([{title:"Темная тема",state:n!=="light",action:g=>s(g)}])},[n]),l.useEffect(()=>{d(n==="light")},[n]);const u=()=>{s(r),d(g=>!g),i==null||i()};return e==="toggle"?t.jsx(Iu,{disabled:!!(a!=null&&a.scheduledLightTheme),title:"",toggles:b,setToggles:x}):e==="h-button"?t.jsx(j,{notActiveClickMessage:"У вас включена тема по расписанию. Если хотите управлять темой вручную, перейдите в настройки -> внешний вид",isActive:!a.scheduledLightTheme,text:h,background:"var(--schedule)",icon:c,width:"100%",align:"left",onClick:u}):t.jsx(j,{notActiveClickMessage:"У вас включена тема по расписанию. Если хотите управлять темой вручную, перейдите в настройки -> внешний вид",isActive:!a.scheduledLightTheme,padding:"0",background:w.white.transparent2,icon:t.jsx(Au,{width:"30px",background:w.green.main,children:c}),onClick:u,text:h,width:"calc(50% - 5px)",height:"73px",direction:"vertical",shrinkTextInMobile:!0})},Lu=f.div`
    position: relative;
`,uo=()=>{const{open:e}=G(),{notifications:i}=we.useLkNotifications(),n=()=>me.close(),s=()=>{Te.evokeConfirm({message:"Вы точно хотите выйти из аккаунта?",onConfirm:Ai.logout}),n()},o=()=>{me.close(),e(t.jsx(vo,{}),"Что нового")},a=()=>{e(t.jsx(co,{}),"Уведомления"),me.close()};return t.jsxs(t.Fragment,{children:[t.jsx(dg,{padding:"8px",size:"small"}),t.jsx(ue,{}),t.jsx(po,{type:"h-button"}),t.jsx(ue,{}),t.jsxs(Lu,{children:[t.jsx(j,{onClick:a,icon:t.jsx(Ii,{}),text:"Уведомления",width:"100%",background:"var(--schedule)",align:"left"}),t.jsx(st,{visible:i.length>0,top:"50%",right:"0px",pulsing:!0,shadow:!0,children:i.length})]}),t.jsx(Z,{to:re,children:t.jsx(j,{text:"Настройки",background:"var(--schedule)",icon:t.jsx(Li,{}),width:"100%",align:"left",onClick:n})}),t.jsx("a",{href:`${O}/index.php`,children:t.jsx(j,{text:"Старый дизайн",icon:t.jsx(ss,{}),width:"100%",background:"var(--schedule)",align:"left"})}),t.jsx(ue,{}),t.jsx(j,{align:"left",icon:t.jsx(Qr,{}),onClick:s,text:"Выйти",width:"100%",background:"var(--schedule)"}),t.jsx(ue,{}),t.jsx(j,{align:"left",icon:t.jsx(so,{}),onClick:o,text:"Что нового",width:"100%",background:"var(--schedule)"})]})},Du=f.div`
    padding: 4px;
    border-radius: var(--brLight);
    display: flex;
    align-items: center;
    gap: 12px;

    &:hover {
        background-color: var(--theme-mild-xxl);
    }
`,zu=({showSearch:e=!1})=>{const{data:{user:i}}=oe.useUser();if(!i)return null;const n=s=>{s.preventDefault(),s.stopPropagation(),me.open({e:s,height:143,content:t.jsx(uo,{})})};return t.jsxs(Du,{children:[e&&t.jsx(ro,{size:"icon"}),t.jsx(Ou,{}),t.jsx(Ct,{onClick:n,width:"30px",height:"30px",avatar:i.avatar,name:i.fullName,marginRight:"0"})]})},Mu=[{query:"(max-width: 766px)",title:"isMobile"},{query:"(min-width: 767px) and (max-width: 1199px)",title:"isTablet"},{query:"(min-width: 1200px)",title:"isDesktop"}],pi=e=>e.reduce((i,n)=>(i[n.title]=n.mql.matches,i),{}),Fi=()=>{const e=Mu.map(({query:s,title:o})=>({mql:matchMedia(s),title:o})),[i,n]=l.useState(pi(e));return l.useLayoutEffect(()=>(e.forEach(({mql:s})=>s.addEventListener("change",()=>{n(pi(e))})),()=>e.forEach(({mql:s})=>s.removeEventListener("change",()=>{n(pi(e))}))),[]),i},Fu=f.header`
    width: calc(100% - 15px);
    height: var(--header-height);
    box-shadow: ${({headerVisible:e})=>e?"var(--very-mild-shadow)":"none"};
    background: ${({headerVisible:e})=>e?"var(--theme)":"transparent"};
    z-index: 12;
    align-items: center;
    position: absolute;
    justify-content: center;
    top: 0;
    padding: 0 15px;
    transition: 0.1s background;
    color: var(--text);
    display: ${({hidden:e=!1})=>e?"none":"flex"};

    & button {
        transform: translateX(${({headerVisible:e})=>e?"-35px":"0"});
    }

    @media (max-width: 1000px) {
        padding: 0 15px;
        width: 100%;
        justify-content: flex-start;
        & button {
            transform: none;
        }
    }
`,Bu=f.div`
    max-width: 700px;
    width: 100%;
    font-size: ${({headerVisible:e})=>e?"1.1rem":"1.4rem"};
    font-weight: 600;
    transition: 0.2s transform, 0.2s font-size;
    position: absolute;
    white-space: ${({headerVisible:e})=>e?"nowrap":"normal"};
    overflow: hidden;
    text-overflow: ellipsis;
    pointer-events: none;

    @media (min-width: 1001px) {
        transform: ${({headerVisible:e})=>`translate(${e?"0, 0":"19px, 75px"})`};
    }

    @media (max-width: 1000px) {
        transform: ${({headerVisible:e,noButton:i})=>`translate(${e?i?"0, 0":"25px, 0":"0px, 50px"})`};
        width: ${({headerVisible:e})=>e?"180px":"calc(100% - 30px)"};
    }
`,Uu=()=>{const{pathname:e}=os(),[i,n]=l.useState([e]),{action:s}=Pt();return l.useEffect(()=>{switch(s){case"POP":n(i.length>1?i.slice(0,i.length-1):i);break;case"PUSH":n([...i,e]);break;case"REPLACE":n([...i.slice(0,i.length-1),e])}},[e,s]),i},Hu=({visible:e=!0,text:i="Назад",fullWidth:n=!0})=>{if(!e)return null;const s=Pt();return t.jsx(j,{text:i,onClick:()=>s.goBack(),icon:t.jsx(zt,{}),textColor:"var(--reallyBlue)",background:"transparent",width:n?"100%":void 0,padding:"0",height:"20px",align:"left"})},Wu=({currentPage:e,exactCurrentPage:i,isHeaderVisible:n})=>{const s=Pt(),o=Uu(),a=(c=wt)=>()=>{be.changeOpen({isOpen:!1,currentPage:c.slice(1,c.length)}),s.push(c)},r=ne.useMemo(()=>i?i.isSubPage?i.subPageHeaderTitle:i.title:e==null?void 0:e.title,[e,i]);return{backButton:ne.useMemo(()=>i!=null&&i.withoutBackButton?null:i!=null&&i.isSubPage?o.length>1?t.jsx(Hu,{text:i==null?void 0:i.backButtonText,fullWidth:!1}):i.fallbackPrevPage?t.jsx(j,{direction:"vertical",icon:t.jsx(zt,{}),onClick:a(i.fallbackPrevPage),background:"transparent"}):t.jsx(j,{direction:"vertical",icon:t.jsx(zt,{}),onClick:a(),background:"transparent"}):t.jsx(j,{icon:t.jsx(zt,{}),onClick:a(),background:"transparent",text:n?void 0:"Все разделы",padding:"0",textColor:"var(--reallyBlue)"}),[i,o,a]),headerTitle:r}},Vu=({currentPagePair:{currentPage:e,exactCurrentPage:i},headerVisible:n=!1})=>{var d,c;const{isMobile:s}=Fi(),o=n||!!(i!=null&&i.planeHeader),{headerTitle:a,backButton:r}=Wu({currentPage:e,exactCurrentPage:i,isHeaderVisible:o});return(d=i??e)!=null&&d.withoutHeader?null:t.jsxs(Fu,{headerVisible:o,hidden:(c=i??e)==null?void 0:c.withoutHeader,children:[t.jsx(Bu,{noButton:i==null?void 0:i.withoutBackButton,headerVisible:o,children:a}),t.jsxs(R,{jc:"space-between",mw:"700px",children:[r??t.jsx("div",{}),s&&t.jsx(zu,{showSearch:!0})]})]})},Gu=ne.memo(Vu),Yu=f(Z)`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    height: fit-content;
    border-radius: var(--brSemi);
    padding: 20px;
    transition: 0.2s;
    cursor: pointer;
    color: var(--text);
    position: relative;

    .more-button {
        top: 0;
        right: 0;
        position: absolute;
    }
    &:hover {
        background: var(--mild-theme);
        /* box-shadow: var(--very-mild-shadow); */
    }
`,qu=({name:e,avatar:i,loading:n,size:s,notifications:o,selected:a})=>n?t.jsx(D,{shape:"circle",size:{width:"40px",height:"40px"}}):t.jsxs(Yu,{to:jr,onClick:()=>be.changeOpen({isOpen:!1,currentPage:"profile"}),children:[t.jsx(j,{icon:t.jsx(Zn,{}),className:"more-button",background:"transparent",onClick:r=>{r.preventDefault(),r.stopPropagation(),me.open({e:r,height:143,content:t.jsx(uo,{})})}}),t.jsx(Ct,{notifications:o,width:s??"70px",height:s??"70px",avatar:i,name:e,marginRight:"0",selected:a}),t.jsx(Y,{size:5,children:e})]}),Ku=ne.memo(qu),Xu=["isCurrent","color"],Ju=f(Z).withConfig({shouldForwardProp:e=>!Xu.includes(e)})`
    position: relative;
    display: flex;
    align-items: center;
    font-weight: ${({isCurrent:e})=>e?800:600};
    width: 100%;
    justify-content: flex-start;
    padding: 10px 0;
    margin: 3px 0;
    cursor: pointer;
    position: relative;
    user-select: none;
    text-decoration: none;
    border-radius: var(--brLight);
    color: ${({color:e,isCurrent:i})=>e&&i?w[e].main:"var(--text)"};

    & > button {
        opacity: 0;
        position: absolute;
        top: 50%;
        right: -10px;
        transform: translateY(-50%);
    }

    .title {
        opacity: ${({isCurrent:e})=>e?1:.8};
        width: 130px;
        display: block;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }

    svg {
        opacity: ${({isCurrent:e})=>e?1:.8};
        width: 22px;
        height: 22px;
        margin-right: 12px;
    }

    &:focus {
        outline: 4px solid var(--almostTransparentOpposite);
    }

    &:focus:not(:focus-visible) {
        outline: none;
    }

    &:hover > button {
        opacity: 1;
    }

    &::before {
        content: '';
        width: 8px;
        height: 8px;
        display: block;
        position: absolute;
        top: 50%;
        left: -15px;
        transform: translateY(-50%);
        background: ${({color:e})=>e?w[e].main:"var(--reallyBlue)"};
        border-radius: 10px;
        transition: 0.2s opacity;
        opacity: ${({isCurrent:e})=>e?1:0};
    }

    @media (max-width: 1000px) {
        & > button {
            display: none;
        }
        /* span {
            width: 100%;
            display: block;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
        } */
        justify-content: center;

        svg {
            margin-right: 0px;
        }

        &::before {
            display: none;
            top: -2px;
            left: 50%;
            transform: translateX(-50%);
        }

        .notification {
            top: 10px;
            right: 0px;
        }

        .title {
            position: absolute;
            left: 50%;
            transform: translate(-50%);
            bottom: -5px;
            font-size: 0.65em;
            width: 100%;
            text-align: center;
        }
    }
`,Qu=f.div`
    min-width: 235px;
    width: 235px;
    height: ${({height:e})=>e+"px"};
    box-shadow: var(--very-mild-shadow);
    border-radius: 0 var(--brSemi) var(--brSemi) 0;
    background: var(--schedule);
    z-index: 4;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    row-gap: 20px;
    align-items: center;
    box-sizing: border-box;
    padding: 20px 15px;
    transition: 0.2s transform, width 0.3s, 0.2s left, 0.2 opacity;
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);

    .top-wrapper {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        row-gap: 20px;
        align-items: center;
        max-height: 100%;
    }

    @media (max-width: 1000px) {
        transition: 0.2s left, 0.2s opacity;
        position: absolute;
        left: ${({isOpen:e})=>e?"0":"-100%"};
        opacity: ${({isOpen:e})=>e?"1":"0"};
        width: 100%;
        font-size: 0.9em;

        .top-wrapper {
            max-height: calc(100% - 60px);

            img {
                width: 200px;
            }
        }
    }
`,Zu=f.div`
    overflow-y: auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 0 15px;
    border-radius: 12px;
`,eh=f.button`
    position: relative;
    display: flex;
    align-items: center;
    font-weight: 700;
    width: 100%;
    justify-content: flex-start;
    padding: 10px 0;
    margin: 10px 0;
    cursor: pointer;
    position: relative;
    user-select: none;
    text-decoration: none;
    border: none;
    background: transparent;
    color: var(--text);

    svg {
        width: 22px;
        height: 22px;
        margin-right: 7px;
    }

    &::before {
        content: '';
        height: 20px;
        width: 0;
        display: block;
        position: absolute;
        top: 50%;
        left: -15px;
        transform: translateY(-50%);
        background: var(--blue);
        border-radius: 10px;
        transition: 0.2s width;
    }

    &:hover::before {
        width: 5px;
        background: var(--red);
    }
`,th=e=>{const{path:i,icon:n,title:s,isCurrent:o,isAdmin:a,color:r,notifications:d}=e;return t.jsxs(Ju,{to:i,className:"leftside-bar-item",color:r,isCurrent:o,onClick:()=>{be.changeOpen({isOpen:!1,currentPage:i.slice(1,i.length)})},title:s,children:[t.jsx(st,{className:"notification",top:"50%",visible:a,right:"-20px",color:"pink",children:"A"}),t.jsx(st,{className:"notification",top:"50%",visible:!!d,right:a?"0px":"-20px",color:"red",children:d}),n,t.jsx("span",{className:"title",children:s}),t.jsx(Xs,{route:e})]})},ho=ne.memo(th),ih=()=>{const{isOpen:e}=$e.useMenu();return t.jsx(t.Fragment,{children:t.jsx(j,{icon:t.jsx(Oe,{}),onClick:()=>be.changeOpen({isOpen:!e}),text:"Закрыть меню",width:"100%"})})},nh=({icon:e,title:i})=>{const n=()=>{const s=e;return t.jsx(s,{})};return t.jsxs(eh,{className:"leftside-bar-item",children:[n(),t.jsx("strong",{children:i})]})};ne.memo(nh);f.section`
    width: 100%;
    max-width: 270px;
    color: #383634;

    border-bottom: 1px solid rgba(56, 54, 52, 0.08);

    transition-property: padding-top, padding-bottom;
    transition: 0.3s ease-in-out;
`;f.div`
    height: 0;
    opacity: 0;

    /* display: flex; */
    overflow: hidden;
    transition: all 0.3s ease-in-out;

    &.show {
        height: 180px; /* Если оставляю проценты, то визуализация перехода идёт по другому */
        opacity: 1;
    }
`;const sh=()=>{const{leftsideBarRoutes:e,currentPage:i}=$e.useMenu(),n=l.useMemo(()=>{const s=window.location.hash.split("/");return s.length>2&&s[1]?s[1]:i==null?void 0:i.id},[i]);return e?t.jsx(Zu,{children:Object.values(e).filter(s=>s!==void 0).map(s=>l.createElement(ho,{...s,key:s==null?void 0:s.id,isCurrent:n===(s==null?void 0:s.id)}))}):t.jsxs(R,{d:"column",children:[t.jsxs(R,{gap:"8px",children:[t.jsx(D,{shape:"rect",size:{width:"30px",height:"30px"}}),t.jsx(D,{shape:"rect",size:{width:"160px",height:"18px"}})]}),t.jsxs(R,{gap:"8px",children:[t.jsx(D,{shape:"rect",size:{width:"30px",height:"30px"}}),t.jsx(D,{shape:"rect",size:{width:"160px",height:"18px"}})]}),t.jsxs(R,{gap:"8px",children:[t.jsx(D,{shape:"rect",size:{width:"30px",height:"30px"}}),t.jsx(D,{shape:"rect",size:{width:"160px",height:"18px"}})]}),t.jsxs(R,{gap:"8px",children:[t.jsx(D,{shape:"rect",size:{width:"30px",height:"30px"}}),t.jsx(D,{shape:"rect",size:{width:"160px",height:"18px"}})]})]})},oh=ne.memo(sh),ah=()=>{const{isOpen:e}=$e.useMenu(),{width:i,height:n}=Zt(),{data:{user:s}}=oe.useUser(),{visibleRoutes:o,currentPage:a}=$e.useMenu();return t.jsxs(Qu,{isOpen:e,height:n,children:[t.jsxs("div",{className:"top-wrapper",children:[t.jsx(Z,{to:Yi,children:t.jsx(Qt,{width:"165px"})}),t.jsx(Ku,{notifications:o==null?void 0:o.profile.notifications,avatar:s==null?void 0:s.avatar,name:(s==null?void 0:s.fullName)??"",loading:!s,selected:(a==null?void 0:a.id)==="profile"}),t.jsx(ro,{size:"small"}),t.jsx(oh,{})]}),t.jsx(po,{type:"toggle"}),i<1e3&&t.jsx(ih,{})]})},rh=f.div`
    width: 300px;
    position: absolute;
    top: calc(var(--header-height) + 10px);
    right: 20px;
    background: var(--theme);
    border-radius: var(--brLight);
    z-index: 100;
    transition: 0.2s transform, 0.2s opacity, 0.2s visibility;
    transform: translateY(${({isOpen:e})=>e?"0px":"-20px"});
    opacity: ${({isOpen:e})=>e?"1":"0"};
    visibility: ${({isOpen:e})=>e?"visible":"hidden"};
    font-weight: 600;
    cursor: ${({isClickable:e})=>e?"pointer":"normal"};

    @media (max-width: 1000px) {
        top: 20px;
        bottom: auto;
        left: 50%;
        transform: translate(${({isOpen:e})=>e?"-50%, 0px":"-50%, -20px"});
        font-size: 0.8em;
    }
`,lh=()=>{const{isOpen:e,message:i,type:n,time:s,onClick:o}=Is.usePopUpMessage();l.useEffect(()=>{e&&setTimeout(()=>{V.openPopUpMessage({isOpen:!e})},s)},[e]);const a=l.useCallback(()=>{o&&(o(),V.openPopUpMessage({isOpen:!e}))},[o]);return t.jsx(rh,{isOpen:e,isClickable:!!o,color:Ge[n].color,onClick:a,children:t.jsx(se,{type:n,fontSize:"1em",lineHeight:"1.4rem",onClose:()=>V.openPopUpMessage({isOpen:!1}),children:i})})},ch=()=>{const{isOpen:e,component:i,canBack:n,back:s,close:o,title:a}=l.useContext(Di);return{back:s,close:o,isOpen:e,canBack:n,component:i,title:a}},dh=f.div`
    background: var(--theme);
    color: var(--text);
    padding: 20px;
    min-height: 150px;
    max-height: 90vh;
    border-radius: var(--brLight);
    transition: 0.2s opacity, 0.2s transform;
    overflow: auto;

    & > .title-wrapper {
        margin-left: ${({hasBack:e})=>e?"15px":"0px"};
        padding-right: 50px;
        white-space: break-spaces;
        max-width: 600px;
    }

    .close-button,
    .back-button {
        position: absolute;
        top: 14px;
    }

    .back-button {
        left: ${({hasTitle:e})=>e?"4px":"12px"};
    }

    .close-button {
        right: 20px;
        z-index: 100;
        padding: 8px;
        border-radius: 100%;
    }

    @media (max-width: 1000px) {
        font-size: 0.9em;
        padding-top: 15px;

        /* Swipe bar on top */
        /* 
        &::after {
            content: '';
            display: block;
            position: absolute;
            transform: translateX(-50%);
            left: 50%;
            top: 5px;
            background: var(--almostTransparentOpposite);
            width: 30px;
            height: 4px;
            border-radius: 10px;
        } */
    }

    @media (min-width: 801px) {
        transform: scale(${({isOpen:e})=>e?1:.95});
    }

    @media (max-width: 800px) {
        padding: 15px;
        width: 100%;
        max-height: 80%;
        height: fit-content;
        bottom: 0;
        border-radius: 20px 20px 0 0;
        transform: ${({isOpen:e})=>e?"scale(1) translateY(0px)":"scale(1) translateY(150px)"};
        border-radius: var(--brLight);

        .close-button {
            right: 15px;
        }

        h3 {
            margin-top: 7px;
        }
    }
`,ei=f.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    z-index: 5;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    opacity: ${({isOpen:e})=>e?1:0};
    visibility: ${({isOpen:e})=>e?"visible":"hidden"};
    transition: 0.2s opacity, 0.2s visibility;

    @media (max-width: 800px) {
        padding: 8px;
        align-items: flex-end;
    }
`,ph=f.div`
    padding-top: 30px;
`,uh=()=>{const{isOpen:e,component:i,canBack:n,back:s,close:o,title:a}=ch(),r=l.useRef(null),d=l.useMemo(()=>e&&!!i,[e,i]);return ct(r,()=>{o()}),t.jsx(ei,{isOpen:d,children:t.jsxs(dh,{isOpen:d,ref:r,hasBack:n,hasTitle:!!a,children:[n&&t.jsx(j,{onClick:s,icon:t.jsx($t,{}),text:a?"":"Назад",background:"transparent",textColor:"var(--theme-opposite)",width:"fit-content",align:"left",padding:"8px",height:"fit-content",className:"back-button"}),a&&t.jsx(Y,{size:3,align:"left",children:a}),t.jsx(j,{onClick:o,icon:t.jsx(Oe,{}),className:"close-button",height:"35px",minWidth:"35px",width:"35px",background:"var(--search)"}),t.jsx(ph,{children:i})]})})},hh=ne.memo(uh),gh=f.div`
    position: absolute;
    bottom: 50%;
    left: 50%;
    width: 100%;
    max-width: 390px;
    border-radius: var(--brLight);
    background: var(--schedule);
    box-shadow: 0 0 40px #0000002f;
    color: var(--text);
    z-index: 10000;
    padding: 20px;
    transition: 0.2s;
    opacity: ${({isOpen:e})=>e?"1":"0"};
    visibility: ${({isOpen:e})=>e?"visible":"hidden"};
    transform: translateY(${({isOpen:e})=>e?"50%":"51%"}) translateX(-50%)
        scale(${({isOpen:e})=>e?"1":"0.95"});

    @media (max-width: 1000px) {
        bottom: 10px;
        width: calc(100% - 20px);
        transform: translateY(0) translateX(-50%) scale(${({isOpen:e})=>e?"1":"0.95"});
    }
`,fh=()=>{const{isOpen:e,message:i,onConfirm:n,onReject:s}=Ps.useConfirm(),o=l.useRef(null);ct(o,()=>Te.closeConfirm());const a=()=>{n(),Te.closeConfirm()},r=()=>{Te.closeConfirm()};return t.jsx(ei,{isOpen:e,children:t.jsxs(gh,{isOpen:e,ref:o,children:[t.jsx(Y,{size:3,align:"left",children:i??"Хотите продолжить?"}),t.jsxs(pe,{width:"100%",scroll:!1,direction:"horizontal",gap:5,padding:"10px 0 0 0",horizontalAlign:"right",children:[t.jsx(j,{text:"Да",onClick:a,width:"90px",textColor:w.red.main,background:"transparent",hoverBackground:w.red.transparent3}),t.jsx(j,{text:"Нет",onClick:s??r,width:"90px",textColor:w.blue.main,background:"transparent",hoverBackground:w.blue.transparent3})]})]})})},xh=f.div`
    display: flex;
    align-items: ${({align:e})=>bi(e)};
    flex-direction: column;
    width: ${({width:e})=>e??"100%"};
    max-width: ${({maxWidth:e})=>e??"100%"};
    height: 100%;

    & > .slider-content {
        display: flex;
        width: 100%;
        max-width: ${({maxWidth:e})=>e??"100%"};
        overflow-x: auto;
        margin-top: 10px;
        scroll-snap-type: x mandatory;

        &::-webkit-scrollbar {
            display: none;
        }

        & > * + * {
            margin-left: 10px;
        }

        .slider-page {
            height: 100%;
            min-width: 100%;
            scroll-snap-align: center;
        }
    }

    @media (max-width: 1000px) {
        & > div {
            scroll-behavior: smooth;

            .slider-page {
                min-width: 100%;
                scroll-snap-align: center;
            }
        }
    }
`,Fb=({pages:e,currentPage:i=0,width:n,className:s,maxWidth:o,sliderWidth:a,onChangePage:r,align:d="center",appearance:c=!0})=>{const[p,h]=l.useState(i),{width:b}=Zt(),x=l.useRef(null),u=()=>{var m;x!=null&&x.current&&b<=1e3&&h(Math.round(((m=x.current)==null?void 0:m.scrollLeft)/b))},g=m=>{var v;h(m),r==null||r((v=e[m])==null?void 0:v.id),x!=null&&x.current&&(x.current.scrollLeft=x.current.clientWidth*m)};return l.useEffect(()=>{g(p)},[i,b]),t.jsxs(xh,{width:n,align:d,maxWidth:o,children:[t.jsx(Gs,{pages:e.map(({title:m,condition:v})=>({title:m,condition:v})),currentPage:p,setCurrentPage:g,sliderWidth:a,appearance:c}),t.jsx("div",{className:s??"slider-content",ref:x,onScroll:u,children:e.map(m=>m.condition!==void 0&&m.condition||m.condition===void 0?t.jsx("div",{className:"slider-page",children:m.content},m.title):t.jsx("div",{className:"slider-page",children:t.jsx(ce,{text:"Нет данных"})},m.title))})]})},hn=e=>{switch(e){case"small":return"0.65em";case"middle":return"0.77em";default:return"1em"}},gn=(e,i)=>e==="horizontal"?i==="small"?"15px":i==="middle"?"30px":"45px":i==="small"?"30px":i==="middle"?"35px":"45px",go=(e,i,n,s)=>{const o=[e?"Я":i==="staff"?"Сотрудник":"Студент"];return e||(n&&o.push(n),s&&o.push(`${s}`)),o},mh=e=>{switch(e){case"small":return"82px";case"middle":return"90px";default:return"100px"}},bh=f.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: ${({direction:e})=>e==="vertical"&&"column"};
    justify-content: flex-start;
    align-items: ${({direction:e})=>e==="vertical"?"flex-start":"center"};
    width: 100%;
    column-gap: 5px;
    row-gap: 5px;
    margin-top: 10px;
    font-size: ${({fontSize:e})=>e};
    color: var(--text);

    span {
        width: ${({direction:e})=>e==="vertical"?"100%":"fit-content"};
    }

    strong {
        font-weight: 600;
    }
`,Be=({keyStr:e,value:i,fontSize:n,visible:s=!0,direction:o="horizontal"})=>s?t.jsxs(bh,{direction:o,fontSize:n,children:[t.jsxs("strong",{children:[e,":"]}),t.jsx("span",{children:i})]}):null,vh=f.div`
    width: ${({width:e})=>e??"100%"};
    height: ${({height:e})=>e??"100px"};
    position: absolute;
    background: ${({color:e})=>e};
    z-index: -1;
    overflow: hidden;
    top: -16px;
    left: -16px;

    svg {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translateX(50%);
        filter: drop-shadow(0 0 34px #00000054);
    }

    & svg:nth-child(1) {
        z-index: -3;
        transform: ${({baseScaleDelta:e})=>`scale(${1+e*2})`};
    }

    & svg:nth-child(2) {
        z-index: -2;
        transform: ${({baseScaleDelta:e})=>`scale(${1+e})`};
    }

    & svg:nth-child(3) {
        z-index: -1;
        transform: ${({baseScale:e})=>`scale(${e})`};
    }

    &::before {
        content: '';
        width: 100%;
        height: 100%;
        background: linear-gradient(0deg, #00000024, transparent);
        display: block;
        position: absolute;
        left: 0;
        bottom: 0;
    }
`,_h=({fullName:e,width:i,height:n,baseScale:s=1,baseScaleDelta:o=1})=>t.jsx(vh,{width:i,height:n,color:xe(e,"dark1"),color2:xe(e,"light1"),baseScale:s,baseScaleDelta:o,children:t.jsxs(t.Fragment,{children:[t.jsx("svg",{width:"620",height:"570",viewBox:"0 0 620 570",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M333.676 1.93177C428.781 13.6788 480.842 107.607 535.05 186.629C582.329 255.551 636.893 330.791 614.509 411.318C592.853 489.225 508.9 525.549 433.05 553.571C368.009 577.6 301.213 573.07 235.35 551.397C151.615 523.841 56.0559 499.684 22.0945 418.336C-17.4711 323.565 -3.03744 209.993 58.4905 127.766C122.067 42.801 228.358 -11.0768 333.676 1.93177Z",fill:xe(e,"main")})}),t.jsx("svg",{width:"620",height:"570",viewBox:"0 0 620 570",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M333.676 1.93177C428.781 13.6788 480.842 107.607 535.05 186.629C582.329 255.551 636.893 330.791 614.509 411.318C592.853 489.225 508.9 525.549 433.05 553.571C368.009 577.6 301.213 573.07 235.35 551.397C151.615 523.841 56.0559 499.684 22.0945 418.336C-17.4711 323.565 -3.03744 209.993 58.4905 127.766C122.067 42.801 228.358 -11.0768 333.676 1.93177Z",fill:xe(e,"light1")})}),t.jsx("svg",{width:"620",height:"570",viewBox:"0 0 620 570",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M333.676 1.93177C428.781 13.6788 480.842 107.607 535.05 186.629C582.329 255.551 636.893 330.791 614.509 411.318C592.853 489.225 508.9 525.549 433.05 553.571C368.009 577.6 301.213 573.07 235.35 551.397C151.615 523.841 56.0559 499.684 22.0945 418.336C-17.4711 323.565 -3.03744 209.993 58.4905 127.766C122.067 42.801 228.358 -11.0768 333.676 1.93177Z",fill:xe(e,"light2")})})]})}),yh=f.div`
    display: flex;
    justify-content: center;
    width: 100%;

    .info {
        display: flex;
        flex-direction: column;
        margin-left: 10px;
        margin-top: 20px;
        width: 100%;

        b {
            margin-bottom: 15px;
            color: #fff;
            display: flex;
            align-items: flex-end;
            height: 42px;
        }
    }
`,wh=({avatar:e,name:i,type:n,division:s,group:o,finance:a,educationForm:r,faculty:d,degreeLevel:c,course:p,isMe:h=!1,noInfo:b=!1})=>{const x=b?"140px":"110px",u=go(h,n,s,o);return t.jsxs(yh,{children:[t.jsx(_h,{fullName:i,height:"136px",width:"calc(100% + 16px)",baseScale:1,baseScaleDelta:.5}),t.jsx(Ct,{avatarModal:!0,border:!0,name:i,avatar:e,width:x,height:x,marginRight:"0"}),!b&&t.jsxs("div",{className:"info",children:[t.jsx("b",{children:i}),t.jsx(ee,{fontSize:"0.9rem",children:t.jsx(Rt,{words:u})}),t.jsx(Be,{fontSize:"0.9rem",visible:!!a,keyStr:"Уровень финансирование",value:a}),t.jsx(Be,{fontSize:"0.9rem",visible:!!d,keyStr:"Факультет",value:d}),t.jsx(Be,{fontSize:"0.9rem",visible:!!c,keyStr:"Уровень образования",value:c}),t.jsx(Be,{fontSize:"0.9rem",visible:!!p,keyStr:"Курс",value:p}),t.jsx(Be,{fontSize:"0.9rem",visible:!!r,keyStr:"Форма образования",value:r})]})]})},jh=f.div`
    @media (min-width: 1001px) {
        width: 330px;
        height: fit-content;
        min-height: 120px;
    }

    display: flex;
    align-items: center;
    height: inherit;
    min-height: inherit;
    flex-direction: column;

    .buttons {
        margin-top: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        gap: 8px;

        a {
            width: 100%;
        }
        button {
            width: 100%;
        }
    }

    @media (max-width: 600px) {
        .user {
            .info b {
                width: 90%;
                height: 35px;
            }
            &::before {
                height: 110px;
            }
        }
    }
`,fo=e=>{const{children:i}=e;return t.jsxs(jh,{children:[t.jsx(wh,{...e}),t.jsx("div",{className:"buttons",children:i})]})},kh=f.div`
    display: flex;
    align-items: center;
    .name-and-status {
        display: flex;
        flex-direction: column;
    }
`,Th=()=>t.jsxs(kh,{children:[t.jsx(D,{shape:"circle",size:{width:"30px",height:""},margin:"8px 0px 8px 0 "}),t.jsxs("div",{className:"name-and-status",children:[t.jsx(D,{shape:"rect",size:{width:"130px",height:"10px"},margin:"1px 10px"}),t.jsx(D,{shape:"rect",size:{width:"70px",height:"8px"},margin:"0px 10px"})]})]}),xo=e=>{if(e)return()=>{Te.evokeConfirm({message:"Вы уверены, что хотите сменить аккаунт?",onConfirm:()=>{localStorage.setItem("token",JSON.stringify({token:e})),location.reload()}})}},Eh=e=>{const{close:i}=G(),{token:n,name:s,group:o}=e,a=`linear-gradient(45deg, ${xe(s,"main")}, ${xe(s,"dark1")})`;return t.jsxs(fo,{...e,type:"stud",children:[!n&&t.jsxs(t.Fragment,{children:[t.jsx(Z,{to:`${dt}/${o}`,children:t.jsx(j,{icon:t.jsx(St,{}),text:"Расписание",onClick:()=>i(),width:"100%"})}),t.jsx(j,{icon:t.jsx(Ci,{}),text:"Написать",onClick:()=>i(),width:"100%",isActive:!1})]}),n&&t.jsx(j,{text:"Войти в аккаунт",width:"100%",textColor:"#fff",background:a,onClick:xo(n)})]})},mo=e=>{const{close:i}=G(),{token:n,name:s}=e,o=`linear-gradient(45deg, ${xe(s,"dark1")}, ${xe(s,"main")})`;return t.jsxs(fo,{type:"staff",...e,children:[!n&&t.jsxs(t.Fragment,{children:[t.jsx(Z,{to:`${dt}/${s}`,children:t.jsx(j,{icon:t.jsx(St,{}),text:"Расписание",onClick:()=>{i()},width:"100%"})}),t.jsx(j,{icon:t.jsx(Ci,{}),text:"Написать",onClick:()=>i(),width:"100%",isActive:!1})]}),n&&t.jsx(j,{text:"Войти в аккаунт",width:"100%",textColor:"#fff",background:o,onClick:xo(n)})]})},Sh=f.div`
    display: flex;
    align-items: center;
    flex-direction: ${({orientation:e})=>e==="vertical"&&"column"};
    padding: ${({orientation:e})=>e==="vertical"?"10px":"8px"};
    border-radius: var(--brLight);
    color: var(--text);
    cursor: pointer;
    width: ${({orientation:e,size:i})=>e==="vertical"?mh(i):"100%"};

    .index {
        min-width: 30px;
        display: flex;
        align-items: center;
        font-weight: 500;
        font-size: 0.85rem;
        color: var(--theme-mild-opposite);
    }

    &:hover {
        background: ${w.grey.transparent3};
    }

    .name-and-status {
        display: flex;
        flex-direction: column;
        text-align: ${({orientation:e})=>e==="vertical"?"center":"left"};
        margin-top: ${({orientation:e})=>e==="vertical"?"5px":"0"};
        width: ${({orientation:e})=>e==="vertical"?"100%":"calc(100% - 60px)"};

        .name {
            font-size: ${({size:e})=>hn(e)};
            width: ${({orientation:e})=>e==="vertical"&&"70px"};
            white-space: ${({orientation:e})=>e==="vertical"&&"nowrap"};
            overflow: ${({orientation:e})=>e==="vertical"&&"hidden"};
            text-overflow: ${({orientation:e})=>e==="vertical"&&"ellipsis"};
            font-weight: 500;
        }

        .status {
            font-size: ${({size:e})=>`calc(${hn(e)} - 0.1em)`};
            opacity: 0.6;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
            width: 90%;
            font-weight: 500;
        }
    }
`,bo=e=>{const{open:i}=G(),{type:n,avatar:s,name:o,checked:a,onClick:r,indexNumber:d,division:c,group:p,isMe:h=!1,loading:b=!1,orientation:x="horizontal",size:u="middle"}=e,g=go(h,n,c,p);if(b)return t.jsx(Th,{});const m=v=>{r?r(v):h||(me.close(),i(n==="staff"?t.jsx(mo,{...e}):t.jsx(Eh,{...e})))};return t.jsxs(Sh,{orientation:x,size:u,onClick:m,children:[d&&t.jsx("div",{className:"index",children:d}),t.jsx(Ct,{name:o,avatar:s,width:gn(x,u),height:gn(x,u),marginRight:x==="horizontal"?"7px":"0px",checked:a}),t.jsxs("div",{className:"name-and-status",children:[t.jsx("span",{className:"name",children:o}),t.jsx("span",{className:"status",children:t.jsx(Rt,{words:g})})]})]})},$h=f.div`
    width: 100%;
`,Ph=()=>t.jsxs($h,{children:[t.jsx(D,{shape:"rect",size:{width:"50%",height:"24px"},margin:"0 0 30px 0"}),t.jsx(D,{shape:"rect",size:{width:"100%",height:"17px"},margin:"0.8rem 0"}),t.jsx(D,{shape:"rect",size:{width:"90%",height:"17px"},margin:"0.8rem 0"}),t.jsx(D,{shape:"rect",size:{width:"90%",height:"17px"},margin:"0.8rem 0"}),t.jsx(D,{shape:"rect",size:{width:"80%",height:"17px"},margin:"0.8rem 0"}),t.jsx(D,{shape:"rect",size:{width:"45%",height:"17px"},margin:"2rem 0 0.8rem 0"}),t.jsx(D,{shape:"rect",size:{width:"40%",height:"17px"},margin:"0.8rem 0"}),t.jsx(D,{shape:"rect",size:{width:"60%",height:"17px"},margin:"0.8rem 0"})]}),Oh=e=>{const{children:i,skeleton:n=t.jsx(Ph,{}),loading:s=!1,...o}=e;return t.jsx(Ae,{...o,className:"block",children:s?n:i})},Ah=f.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 15px 20px;
    width: calc(50% - 5px);
    gap: 10px;
    text-align: center;
    color: ${({color:e})=>e?w[e].main:"var(--text)"};
    border-radius: var(--brLight);

    .title {
        height: 40px;
        font-weight: 700;
        color: var(--text);
    }

    a {
        text-decoration: none;
        color: var(--text);
        width: 100%;
    }

    .icon {
        color: ${({color:e})=>e?w[e].main:"var(--text)"};
        width: 45px;
        height: 45px;
        display: flex;
        flex-shrink: 0;
        align-items: center;
        justify-content: center;
        border-radius: 100%;
        background: var(--almostTransparent);

        svg {
            width: 20px;
            height: 20px;
        }
    }
`,Rh=({icon:e,title:i,color:n,goTo:s,visible:o=!0})=>{const{close:a}=G();return o?t.jsxs(Ah,{color:n,children:[t.jsx("div",{className:"icon",children:e}),t.jsx("span",{className:"title",children:i}),!!s&&t.jsx(Z,{to:s,children:t.jsx(j,{text:"Перейти",onClick:a,background:"var(--almostTransparent)",width:"100%"})})]}):null},Ch=f.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    .image {
        height: fit-content;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 20px;

        img {
            width: 100%;
            object-fit: cover;
            object-position: center;
        }
    }

    @media (max-width: 1000px) {
        img {
            width: 100%;
            object-fit: scale-down;
        }
    }
`,Nh=f.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 5px;
`,Ih=f(ee)`
    margin-bottom: 20px;
`,Dt=({image:e,list:i,text:n})=>{const{isMobile:s}=Fi();return t.jsxs(Ch,{children:[!!e&&t.jsxs(t.Fragment,{children:[t.jsx(Y,{size:3,align:"center",bottomGap:!0,children:e.title}),t.jsx("div",{className:"image",children:e.component??t.jsx("img",{src:s&&e.mobile?e.mobile:e.desktop,alt:""})})]}),t.jsx(Ih,{lineHeight:"1.6rem",width:"100%",align:"center",fontSize:"1rem",visible:!!n,children:n}),!!i&&t.jsx(Nh,{children:i==null?void 0:i.map(o=>l.createElement(Rh,{...o,key:o.title}))})]})},Lh=({alert:e})=>{const{content:i,time:n,date:s}=e;return t.jsxs(Dh,{children:[t.jsx(ee,{fontSize:"0.9rem",children:t.jsx(Rt,{words:[qe(s),n]})}),t.jsx(ue,{width:"100%",margin:"12px 0"}),t.jsx("div",{dangerouslySetInnerHTML:{__html:i}})]})},Dh=f.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    max-width: 600px;

    & > div {
        line-height: 1.6rem;
        width: 100%;

        p {
            margin-top: 10px;
            width: 100%;
            opacity: 0.9;
        }

        a {
            text-decoration: underline;
        }

        strong,
        p:nth-child(1) {
            font-weight: 600;
            margin: 0;
            opacity: 1;
            text-align: left !important;
        }

        span {
            font-size: 1rem !important;
        }

        img {
            width: 100% !important;
            height: auto !important;
            object-fit: cover;
            border-radius: var(--brLight);
            margin-bottom: 20px;
        }
    }
`,zh=e=>!!new RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$","i").test(e),Mh=e=>{const i=e.indexOf('src="')+5;let n=0;if(i===-1)return null;for(let o=i;o<e.length;o++)if(e[o]==='"'){n=o;break}const s=e.slice(i,n);return zh(s)?s:null},Fh=f.div`
    display: ${({visible:e})=>e?"flex":"none"};
    padding: 8px;
    border-radius: 6px;
    background: ${w.red.light1};
    color: #fff;
    font-weight: 600;
    align-items: center;
    justify-content: center;
    font-size: 0.7rem;
`,Bh=f.div`
    width: 100%;
    border-radius: calc(var(--brLight) - 3px);
    background: var(--form);
    box-shadow: var(--schedule-shadow);
    position: relative;
    display: flex;
    flex-direction: ${({orientation:e})=>e==="vertical"?"column":"row"};
    height: ${({orientation:e})=>e==="vertical"?"150px":"90px"};
    overflow: hidden;
    cursor: pointer;

    &:hover {
        filter: brightness(0.98);
    }
`,Uh=f.div`
    height: ${({orientation:e})=>e==="vertical"?"50px":"90px"};
    width: ${({orientation:e})=>e==="vertical"?"50px":"90px"};
    min-width: ${({orientation:e})=>e==="vertical"?"50px":"90px"};
    min-height: ${({orientation:e})=>e==="vertical"?"50px":"90px"};
    overflow: hidden;
    background: ${w.purple.transparent1};
    border-radius: ${({orientation:e})=>e==="vertical"?"calc(var(--brLight) - 3px)":"0"};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: ${({orientation:e})=>e==="vertical"?"12px":"0"};
    margin-top: ${({orientation:e})=>e==="vertical"?"12px":"0"};
    box-shadow: ${({orientation:e})=>e==="vertical"?"0 0 30px rgba(0, 0, 0, 0.101)":"none"};

    svg {
        width: 40%;
        height: 40%;
    }

    img {
        height: 100%;
        width: 100%;
        object-fit: cover;
    }
`,Hh=f.div`
    min-height: 90px;
    width: 100%;
    padding: 12px;
    display: flex;
    gap: 4px;
    flex-direction: column;
`,Wh=f.div`
    font-weight: 500;
    width: ${({orientation:e})=>e==="vertical"?"100%":"85%"};
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`,Vh=f.div`
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 0.86rem;
    margin-bottom: 6px;
    height: 20px;
    opacity: 0.8;

    p {
        text-align: left;
    }

    strong {
        font-weight: 400;
    }

    img {
        display: none;
    }
`,Gh=f(Fh)`
    position: absolute;
    top: 6px;
    right: -4px;
`,Yh=({news:e,orientation:i="vertical",isNew:n=!1})=>{const s=Mh(e.content),{open:o}=G(),a=()=>o(t.jsx(Lh,{alert:e}),e.title);return t.jsxs(Bh,{onClick:a,orientation:i,children:[t.jsx(Uh,{orientation:i,children:s?t.jsx("img",{src:s,alt:""}):t.jsx(Ni,{})}),t.jsxs(Hh,{children:[t.jsx(Wh,{orientation:i,children:e.title}),t.jsx(Vh,{children:t.jsx("div",{dangerouslySetInnerHTML:{__html:Tt(e.content,220)}})}),t.jsx(ee,{children:t.jsx(Rt,{words:[qe(e.date),e.time]})})]}),t.jsx(Gh,{visible:n,children:"New"})]})},qh=f.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;

    @media (min-width: 1001px) {
        width: 400px;
        min-height: 350px;
        height: 350px;
    }

    .content {
        height: 100%;
    }

    .buttons {
        display: flex;
        align-items: center;
        width: 100%;
        margin-top: 10px;

        & > * + * {
            margin-left: 10px;
        }
    }
`,_i=f.div`
    padding: 8px;
    background: var(--search);
    border-radius: var(--brLight);

    &.first {
        z-index: 1;
    }

    &.second {
        transform: scale(0.93) translateY(-25px);
        z-index: 0;
        opacity: 0.4;
    }
`,Kh=f.div`
    pointer-events: none;
`,Xh=()=>t.jsxs(R,{d:"column",gap:"0px",children:[t.jsx(_i,{className:"first",children:t.jsxs(R,{gap:"16px",w:"fit-content",children:[t.jsx(ye,{color:"orange",children:t.jsx(fi,{})}),t.jsxs(R,{d:"column",gap:"4px",ai:"flex-start",children:[t.jsx(D,{pulse:!1,size:{width:"250px",height:"10px"},shape:"rect",margin:"0"}),t.jsx(D,{pulse:!1,size:{width:"190px",height:"8px"},shape:"rect",margin:"0"})]})]})}),t.jsx(_i,{className:"second",children:t.jsxs(R,{gap:"16px",w:"fit-content",children:[t.jsx(ye,{color:"orange",children:t.jsx(fi,{})}),t.jsxs(R,{d:"column",gap:"4px",ai:"flex-start",children:[t.jsx(D,{pulse:!1,size:{width:"250px",height:"10px"},shape:"rect",margin:"0"}),t.jsx(D,{pulse:!1,size:{width:"190px",height:"8px"},shape:"rect",margin:"0"})]})]})})]}),Jh=()=>t.jsxs(R,{d:"column",gap:"8px",children:[t.jsx(Oh,{height:"fit-content",padding:"12px",maxWidth:"320px",children:t.jsxs(R,{gap:"8px",children:[t.jsx(Ee,{}),"Распис"]})}),t.jsx(_i,{children:t.jsxs(R,{gap:"16px",w:"fit-content",children:[t.jsx(ye,{color:"pink",children:t.jsx(St,{})}),t.jsxs(R,{d:"column",gap:"4px",ai:"flex-start",children:[t.jsx(D,{pulse:!1,size:{width:"250px",height:"10px"},shape:"rect",margin:"0"}),t.jsx(D,{pulse:!1,size:{width:"190px",height:"8px"},shape:"rect",margin:"0"})]})]})})]}),Qh=()=>t.jsx(Kh,{children:t.jsx(R,{mw:"250px",children:t.jsx(Yh,{news:{title:"Новости",time:"4:20",content:"Как неожиданно и приятно",date:"January 1, 1984",id:0}})})}),Zh=()=>{const{data:{user:e}}=oe.useUser(),{allRoutes:i}=$e.useMenu();if(!i)return null;const n=[i.home,i.payments];return(e==null?void 0:e.user_status)==="stud"&&n.push(i["acad-performance"]),t.jsx(R,{gap:"0px",jc:"center",children:n.map(({color:s,icon:o,id:a,title:r})=>t.jsxs(R,{d:"column",gap:"12px",w:"110px",children:[t.jsx(ye,{badge:"1",color:s,size:50,children:o}),t.jsx(Y,{size:5,children:Tt(r,8)})]},a))})},vo=()=>{const[e,i]=l.useState(0),{isMobile:n}=Fi(),{close:s}=G(),o=[t.jsx(Dt,{image:{component:t.jsx(Xh,{}),title:"Уведомления"},text:"Теперь стало проще отслеживать важную информацию, будь то новое сообщение, новости, оплаты или что-либо еще"},0),t.jsx(Dt,{image:{component:t.jsx(Jh,{}),title:"Глобальный поиск"},text:`Поможет найти то, что нужно. Находится на главной странице или ${n?"в верхней части личного кабинета":"в меню"}`},1),t.jsx(Dt,{image:{component:t.jsx(Qh,{}),title:"Раздел Новости"},text:"Виджет с новостями добавлен на главный экран, дизайн стал аккуратнее"},2),t.jsx(Dt,{image:{component:t.jsx(Zh,{}),title:"Обновлены страницы"},text:"Интерфейс стал понятнее и чище"},3)];return t.jsxs(qh,{children:[t.jsx("div",{className:"content",children:o[e]}),t.jsx(to,{amount:o.length,current:e}),t.jsxs("div",{className:"buttons",children:[t.jsx(j,{onClick:()=>i(a=>_e(a-1,o.length-1)),text:"Назад",width:"100%",isActive:e!==0}),e===o.length-1?t.jsx(j,{onClick:s,text:"Готово",width:"100%",background:w.blue.light1,textColor:"#fff"}):t.jsx(j,{onClick:()=>i(a=>_e(a+1,o.length-1)),text:"Далее",width:"100%"})]})]})},fn=f(At)`
    position: absolute;
    bottom: 0;
    left: 0;

    width: 100%;
    height: var(--mobile-bottom-menu-height);
    background: var(--schedule);
    border-top: 1px solid var(--scheduleBg);
    padding: 0px 10px;
    display: none;

    @media (max-width: 1000px) {
        display: flex;
    }
`,eg=()=>{const{allRoutes:e,currentPage:i}=$e.useMenu();return e?t.jsx(fn,{direction:"horizontal",horizontalAlign:"evenly",children:Vx.map(n=>t.jsx(ho,{...e[n],isCurrent:(i==null?void 0:i.id)===n},n))}):t.jsxs(fn,{direction:"horizontal",horizontalAlign:"evenly",verticalAlign:"center",children:[t.jsx(D,{shape:"rect",size:{width:"55px",height:"40px"},margin:"0"}),t.jsx(D,{shape:"rect",size:{width:"55px",height:"40px"},margin:"0"}),t.jsx(D,{shape:"rect",size:{width:"55px",height:"40px"},margin:"0"}),t.jsx(D,{shape:"rect",size:{width:"55px",height:"40px"},margin:"0"}),t.jsx(D,{shape:"rect",size:{width:"55px",height:"40px"},margin:"0"})]})},tg=(e,i,n)=>({isOpen:i,message:e,position:n}),xn={hints:[]},ig=()=>C(ng),_o=P(),yo=P(),wo=P(),ng=te(xn).on(_o,(e,{message:i,position:n})=>({hints:[...e.hints,tg(i,e.hints.length===0,n)]})).on(yo,e=>({hints:e.hints.splice(1,e.hints.length)})).on(wo,()=>({...xn})),sg={useHint:ig},og={evoke:_o,close:yo,clearStore:wo},ag=f.div`
    left: ${({left:e})=>e+"px"};
    top: ${({top:e})=>e+"px"};
    /* padding: 10px; */
    background: var(--reallyBlue);
    color: #fff;
    border-radius: var(--brLight);
    font-weight: 500;
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    max-width: 300px;
    box-shadow: 0 0 30px ${w.blue.transparent3};
    transition: 0.2s;
    opacity: ${({open:e})=>e?1:0};
    visibility: ${({open:e})=>e?"visible":"hidden"};
    transform: ${({open:e})=>e?"translateY(0)":"translateY(20px)"};
    position: absolute;
    z-index: 5;
    min-width: 150px;

    .message {
        &::before {
            content: '';
            width: 15px;
            height: 15px;
            transform: rotate(45deg);
            background: var(--reallyBlue);
            position: absolute;
            top: 15px;
            left: -5px;
            border-radius: 3px;
            z-index: -1;
        }
    }
`,rg=()=>{const{hints:e}=sg.useHint(),i=e[0];return i?t.jsx(ag,{open:i.isOpen,left:i.position.x,top:i.position.y,children:t.jsx(se,{type:"hint",title:i.message,onClose:()=>og.close(),width:"100%",icon:null})}):null},lg=f.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: auto;
    width: 100%;
    max-height: 100%;
    height: 100%;

    .scrolable-content {
        width: 100%;
    }

    .alpabet-letter {
        margin-top: 10px;
        display: flex;
        align-items: center;

        .title-wrapper {
            width: fit-content;
            color: var(--theme-mild-opposite);
        }
    }
`,cg=50;function Bb({items:e,renderItem:i,hasNext:n,isPending:s,handleNext:o,filter:a,showAlphabetLetters:r,noResultContent:d,offset:c=cg}){const{data:{user:p}}=oe.useUser();let h="";const b=l.useCallback(x=>{const u=x.currentTarget.clientHeight,g=x.currentTarget.scrollHeight,m=x.currentTarget.scrollTop;g-c<m+u&&n&&!s&&(o==null||o(a??null))},[o,n,s,a]);return!s&&(!e||(e==null?void 0:e.length)===0)?t.jsx(ce,{text:"Нет результатов",children:d}):t.jsxs(lg,{onScroll:b,children:[t.jsx("div",{className:"scrolable-content",children:(e||[]).map((x,u)=>{var m,v;const g=r?h!==((m=x.fio)==null?void 0:m.charAt(0)):!1;return g&&(h=((v=x.fio)==null?void 0:v.charAt(0))??"-"),t.jsxs(t.Fragment,{children:[g&&t.jsxs("div",{className:"alpabet-letter",children:[t.jsx(Y,{size:4,align:"left",children:h}),t.jsx(ue,{})]}),i(x,(p==null?void 0:p.id.toString())===x.id,u)]})})}),n&&s&&t.jsx(ze,{width:"40px",height:"40px"}),n&&!s&&t.jsx(j,{onClick:()=>o==null?void 0:o(a??null),text:"Загрузить еще"})]})}f.div`
    display: flex;
    flex-direction: column;
    height: 100%;

    @media (min-width: 1001px) {
        width: 600px;
        height: 600px;
    }
`;const dg=({padding:e,size:i="middle"})=>{var s,o;const{data:{user:n}}=oe.useUser();return G(),t.jsxs(pe,{visible:!!(n!=null&&n.accounts),padding:e,title:"Аккаунты",direction:"horizontal",gap:0,showPages:!0,horizontalAlign:"left",onAdd:void 0,children:[!((s=n==null?void 0:n.accounts)!=null&&s.length)&&t.jsx(ee,{children:"Нет доступных аккаунтов"}),(o=n==null?void 0:n.accounts)==null?void 0:o.map(a=>t.jsx(bo,{type:a.user_status,size:i,name:a.fio??n.fullName,token:a.token,division:a.work_place,group:a.group,degreeLevel:a.degreeLevel,orientation:"vertical"},a.fio))]})},Ut={ready:"Готово",pending:"В работе",rejected:"Отклонено"},pg={agreeding:"На согласовании",notAgreed:"Не согласовано",agreed:"Согласовано",empty:"Не создано",rejected:"Отклонено"},ug={signed:"Подписан",agreeding:"На согласовании",fixing:"На доработке",empty:"Не создан"},Ub=[{id:1,title:"1"},{id:2,title:"2"},{id:3,title:"3"}],Hb=[{id:0,title:"На электронную почту"},{id:1,title:"Лично"},{id:3,title:"На почтовый адрес"}],hg=()=>[{title:"Запрос",field:"subject",priority:"one",search:!0,showFull:!0},{title:"Дата",field:"created",priority:"two",sort:!0,type:"date",align:"center",width:"120px"},{title:"Рег. номер",field:"num",priority:"three",align:"center",width:"170px"},{title:"Статус",field:"status",priority:"one",width:"130px",catalogs:[...Object.values(Ut).map((e,i)=>({id:i.toString(),title:e}))??[]],render:e=>{const i=gg(e);return t.jsx(se,{type:i==="Готово"?"success":i==="Отклонено"?"failure":"alert",title:i,align:"center",width:"100%",icon:null,maxWidth:"150px"})}},{title:"Структурное подразделение, адрес",priority:"five",field:"response_div",width:"360px"},{title:"Примечание",field:"comment",priority:"five"},{title:"Файлы",align:"center",field:"files_output",priority:"five",width:"150px",render:e=>!!e.length&&t.jsx(j,{onClick:()=>fg(e),text:"Скачать",background:"transparent",textColor:w.green.main,width:"100%"})}],gg=e=>{switch(e){case"На рассмотрении":return Ut.pending;case"Принято в работу":return Ut.pending;case"Получено":return Ut.ready;default:return e}},fg=e=>{e.map(i=>{const n=document.createElement("a");n.href=i.url,n.download=i.name,n.target="_blank",n.click(),n.remove()})},jo=(e,i)=>i.reduce((n,s)=>{const o=s.links.filter(a=>ae(a.title).includes(ae(e)));return o.length&&n.push({title:s.title,links:o}),n},[]),xg=()=>{const e=" (Сервис временно недоступен)";return[{title:"Многофункциональный центр",links:[{link:xa,title:"Справка о прослушанных дисциплинах за период обучения (справка об обучении)"},{link:Ia,title:"Справка о прохождении обучения в университете (о статусе обучающегося) по месту требования"},{link:ma,title:"Справка в социальные учреждения (Пенсионный фонд, УСЗН и пр.)"},{link:ba,title:"Справка-вызов"},{link:Pa,title:"Заявление на пересдачу для получения диплома с отличием"},{link:Na,title:"Запрос на изменение персональных данных"},{link:$a,title:"Запрос на восстановление магнитного пропуска"},{link:ha,title:"Уточнение паспортных данных"},{link:La,title:"Выдача лицензий и свидетельств о государственной аккредитации"},{link:Da,title:"Предоставление каникул в связи с окончанием университета"},{link:za,title:"Предоставление академического отпуска"},{link:Ma,title:"Отчисление по инициативе обучающегося"},{link:Fa,title:"Продление промежуточной аттестации или ГИА"}]},{title:"Управление студенческим городком",links:[{link:va,title:"Предоставление права проживания (очная форма)",exceptionalFormEducationList:["Очно-заочная","Заочная"]},{link:_a,title:"Предоставление права проживания (очно-заочная форма)",exceptionalFormEducationList:["Очная","Заочная"]},{link:ya,title:"Предоставление права проживания (заочная форма)",exceptionalFormEducationList:["Очная","Очно-заочная"]},{link:ja,title:"Предоставление права проживания льготной категории граждан"},{link:wa,title:"Предоставление права проживания в период академического отпуска",exceptionalFormEducationList:["Очно-заочная","Заочная"]},{link:ka,title:"Предоставление права проживания в семейной комнате",exceptionalFormEducationList:["Очно-заочная","Заочная"]},{link:Ea,title:"Переселение внутри общежития",exceptionalFormEducationList:["Заочная"]},{link:Sa,title:"Переселение в другое общежитие",exceptionalFormEducationList:["Заочная"]},{link:Ta,title:"Расторжение договора найма"}]},{title:"Профсоюзная организация",links:[{link:gs,title:"Вступить в Профсоюз",isExternalLink:!0,isOpenInNewWindow:!0},{link:Aa,title:"Оформить материальную поддержку остронуждающимся студентам (Дотацию)"},{link:Ra,title:"Заявка на материальную помощь"},{link:fa,title:"Оформить социальную стипендию"},{link:Ca,title:"Отправить характеристику-рекомендацию на получение повышенной государственной академической стипендии"}]},{title:"Мобилизационный отдел"+e,disabled:Qi,links:[{link:Oa,title:"Отправить документы воинского учета"},{link:"",title:"Заполнить личную карточку обучающегося по воинскому учету для получения отсрочки от призывана военную службу"}]},{title:"Отдел платных образовательных услуг"+e,disabled:Qi,links:[{link:ki,title:"Оформить дополнительное соглашение к договору об обучении"},{link:ki,title:"Отправить квитанцию об оплате обучения или пени"}]},{title:"Приемная комиссия",links:[{link:Rl,isExternalLink:!0,title:"Изменение условий обучения (направление подготовки (специальность), форма), в том числе перевод с платного обучения на бесплатное"}]},{title:"Прочее",links:[{link:ga,title:" Произвольный запрос"}]}]},ke=({oldVersionUrl:e,errorText:i="Страница еще находится в разработке. Если вам она нужна, вернитесь к старому дизайну",buttonText:n="Перейти к старому дизайну",forceForward:s=!1})=>(l.useEffect(()=>{s&&(window.location.href=`/old/?p=${e==null?void 0:e.slice(1,e.length)}`)},[]),t.jsx(ce,{text:i,children:t.jsx(zs,{text:n,onClick:()=>{localStorage.setItem("useOldVersion","true")},background:"var(--purple)",width:"300px",href:`${O}/?p=${e==null?void 0:e.slice(1,e.length)}`})})),mg="modulepreload",bg=function(e){return"/"+e},mn={},y=function(i,n,s){if(!n||n.length===0)return i();const o=document.getElementsByTagName("link");return Promise.all(n.map(a=>{if(a=bg(a),a in mn)return;mn[a]=!0;const r=a.endsWith(".css"),d=r?'[rel="stylesheet"]':"";if(!!s)for(let h=o.length-1;h>=0;h--){const b=o[h];if(b.href===a&&(!r||b.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${a}"]${d}`))return;const p=document.createElement("link");if(p.rel=r?"stylesheet":mg,r||(p.as="script",p.crossOrigin=""),p.href=a,document.head.appendChild(p),r)return new Promise((h,b)=>{p.addEventListener("load",h),p.addEventListener("error",()=>b(new Error(`Unable to preload CSS for ${a}`)))})})).then(()=>i())};l.lazy(()=>y(()=>import("./index-8620d711.js"),["assets/index-8620d711.js","assets/vendor-292fea82.js","assets/get-default-subdivision-a5fa8d6e.js","assets/index-6c5d4148.js","assets/get-method-obstaing-c0726de9.js"]));l.lazy(()=>y(()=>import("./index-de04a0b8.js"),["assets/index-de04a0b8.js","assets/vendor-292fea82.js","assets/index-6c5d4148.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-0ca08835.js","assets/get-default-subdivision-a5fa8d6e.js","assets/get-method-obtaining-fields-89788160.js","assets/get-teacher-subdivisions-500dfe3f.js"]));const vg=l.lazy(()=>y(()=>import("./index-415e20ee.js"),["assets/index-415e20ee.js","assets/vendor-292fea82.js","assets/index-6c5d4148.js","assets/get-method-obstaing-c0726de9.js"])),_g=l.lazy(()=>y(()=>import("./index-22e07fa9.js"),["assets/index-22e07fa9.js","assets/vendor-292fea82.js","assets/find-current-in-select-ba4611d5.js"])),yg=l.lazy(()=>y(()=>import("./index-07abf15b.js"),["assets/index-07abf15b.js","assets/vendor-292fea82.js"])),wg=l.lazy(()=>y(()=>import("./index-2ca6e26e.js"),["assets/index-2ca6e26e.js","assets/vendor-292fea82.js","assets/index-98aed3f0.js"]));l.lazy(()=>y(()=>import("./index-d78db46a.js"),["assets/index-d78db46a.js","assets/vendor-292fea82.js"]));l.lazy(()=>y(()=>import("./index-db0c4b57.js"),["assets/index-db0c4b57.js","assets/vendor-292fea82.js","assets/get-default-subdivision-a5fa8d6e.js","assets/index-6c5d4148.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-0ca08835.js"]));l.lazy(()=>y(()=>import("./index-33f7950f.js"),["assets/index-33f7950f.js","assets/vendor-292fea82.js","assets/get-default-subdivision-a5fa8d6e.js","assets/index-6c5d4148.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-0ca08835.js","assets/get-method-obtaining-fields-89788160.js","assets/get-teacher-subdivisions-500dfe3f.js"]));l.lazy(()=>y(()=>import("./index-cffbeaeb.js"),["assets/index-cffbeaeb.js","assets/vendor-292fea82.js","assets/index-6c5d4148.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-0ca08835.js","assets/get-default-subdivision-a5fa8d6e.js","assets/get-method-obtaining-fields-89788160.js","assets/get-teacher-subdivisions-500dfe3f.js"]));l.lazy(()=>y(()=>import("./index-f9d5053b.js"),["assets/index-f9d5053b.js","assets/vendor-292fea82.js","assets/index-6c5d4148.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-0ca08835.js","assets/get-default-subdivision-a5fa8d6e.js"]));l.lazy(()=>y(()=>import("./index-fc145ced.js"),["assets/index-fc145ced.js","assets/vendor-292fea82.js","assets/index-6c5d4148.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-0ca08835.js","assets/get-default-subdivision-a5fa8d6e.js","assets/get-method-obtaining-fields-89788160.js","assets/get-teacher-subdivisions-500dfe3f.js"]));l.lazy(()=>y(()=>import("./index-9927f8aa.js"),["assets/index-9927f8aa.js","assets/vendor-292fea82.js","assets/index-6c5d4148.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-0ca08835.js","assets/get-default-subdivision-a5fa8d6e.js"]));l.lazy(()=>y(()=>import("./index-1bf91a20.js"),["assets/index-1bf91a20.js","assets/vendor-292fea82.js","assets/index-6c5d4148.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-0ca08835.js","assets/get-default-subdivision-a5fa8d6e.js"]));l.lazy(()=>y(()=>import("./index-636d2c62.js"),["assets/index-636d2c62.js","assets/vendor-292fea82.js","assets/index-6c5d4148.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-0ca08835.js","assets/get-default-subdivision-a5fa8d6e.js","assets/get-method-obtaining-fields-89788160.js","assets/get-teacher-subdivisions-500dfe3f.js"]));l.lazy(()=>y(()=>import("./index-5904b7d9.js"),["assets/index-5904b7d9.js","assets/vendor-292fea82.js","assets/index-6c5d4148.js","assets/get-method-obstaing-c0726de9.js","assets/get-default-subdivision-a5fa8d6e.js"]));l.lazy(()=>y(()=>import("./index-463c1196.js"),["assets/index-463c1196.js","assets/vendor-292fea82.js","assets/index-6c5d4148.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-0ca08835.js","assets/get-default-subdivision-a5fa8d6e.js"]));l.lazy(()=>y(()=>import("./index-0f26677e.js"),["assets/index-0f26677e.js","assets/vendor-292fea82.js","assets/index-6c5d4148.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-0ca08835.js","assets/get-default-subdivision-a5fa8d6e.js","assets/get-method-obtaining-fields-89788160.js","assets/get-teacher-subdivisions-500dfe3f.js"]));l.lazy(()=>y(()=>import("./index-4bf715e2.js"),["assets/index-4bf715e2.js","assets/vendor-292fea82.js","assets/index-6c5d4148.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-0ca08835.js","assets/get-default-subdivision-a5fa8d6e.js","assets/get-method-obtaining-fields-89788160.js","assets/get-teacher-subdivisions-500dfe3f.js"]));l.lazy(()=>y(()=>import("./index-61fef090.js"),["assets/index-61fef090.js","assets/vendor-292fea82.js","assets/index-6c5d4148.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-0ca08835.js","assets/get-default-subdivision-a5fa8d6e.js","assets/get-method-obtaining-fields-89788160.js","assets/get-teacher-subdivisions-500dfe3f.js"]));l.lazy(()=>y(()=>import("./index-84854500.js"),["assets/index-84854500.js","assets/vendor-292fea82.js","assets/get-default-subdivision-a5fa8d6e.js","assets/index-6c5d4148.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-0ca08835.js"]));l.lazy(()=>y(()=>import("./index-44dca5c9.js"),["assets/index-44dca5c9.js","assets/vendor-292fea82.js","assets/index-6c5d4148.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-0ca08835.js","assets/get-default-subdivision-a5fa8d6e.js"]));l.lazy(()=>y(()=>import("./index-1b7d32e8.js"),["assets/index-1b7d32e8.js","assets/vendor-292fea82.js","assets/index-6c5d4148.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-0ca08835.js","assets/get-default-subdivision-a5fa8d6e.js"]));l.lazy(()=>y(()=>import("./index-e37d04e0.js"),["assets/index-e37d04e0.js","assets/vendor-292fea82.js","assets/index-6c5d4148.js","assets/get-method-obstaing-c0726de9.js","assets/get-default-subdivision-a5fa8d6e.js"]));l.lazy(()=>y(()=>import("./index-e4f2cbff.js"),["assets/index-e4f2cbff.js","assets/vendor-292fea82.js","assets/index-6c5d4148.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-0ca08835.js","assets/get-default-subdivision-a5fa8d6e.js","assets/get-method-obtaining-fields-89788160.js","assets/get-teacher-subdivisions-500dfe3f.js"]));const jg=l.lazy(()=>y(()=>import("./index-5328ad7b.js"),["assets/index-5328ad7b.js","assets/vendor-292fea82.js"]));l.lazy(()=>y(()=>import("./index-eecff1df.js"),["assets/index-eecff1df.js","assets/vendor-292fea82.js","assets/index-98154ea3.js","assets/index-ec26e79e.js"]));const Bi=l.lazy(()=>y(()=>import("./index-1bb4ab9e.js"),["assets/index-1bb4ab9e.js","assets/vendor-292fea82.js"]));l.lazy(()=>y(()=>import("./index-bb1e887c.js"),["assets/index-bb1e887c.js","assets/vendor-292fea82.js"]));l.lazy(()=>y(()=>import("./index-6086d48a.js"),["assets/index-6086d48a.js","assets/vendor-292fea82.js"]));l.lazy(()=>y(()=>import("./index-0077e6ff.js"),["assets/index-0077e6ff.js","assets/vendor-292fea82.js"]));l.lazy(()=>y(()=>import("./index-5acbcc73.js"),["assets/index-5acbcc73.js","assets/vendor-292fea82.js","assets/index-e0fbce5d.js"]));l.lazy(()=>y(()=>import("./index-4a80f575.js"),["assets/index-4a80f575.js","assets/vendor-292fea82.js"]));l.lazy(()=>y(()=>import("./index-0b6eb1ae.js"),["assets/index-0b6eb1ae.js","assets/vendor-292fea82.js","assets/index-e0fbce5d.js"]));l.lazy(()=>y(()=>import("./index-cfdb7ea0.js"),["assets/index-cfdb7ea0.js","assets/vendor-292fea82.js"]));l.lazy(()=>y(()=>import("./index-3efceeec.js"),["assets/index-3efceeec.js","assets/vendor-292fea82.js"]));l.lazy(()=>y(()=>Promise.resolve().then(()=>nf),void 0));let ko;const kg=e=>{ko=e},Wb=()=>ko,Tg=(e,i)=>{const[n,s]=l.useState(!1),[o,a]=l.useState(null);return l.useEffect(()=>{n&&setTimeout(()=>{s(!1),i(null)},200)},[n]),l.useEffect(()=>{setTimeout(()=>{o!==null&&(a(null),i(r=>(r&&delete r[o],{...r})))},500)},[o]),{removeAll:n,removeOne:o,setRemoveAll:s,setRemoveOne:a}},ui=f.div`
    padding: ${({remove:e})=>e?"0px":"5px 10px"};
    background: ${({background:e})=>e??w.blue.transparent3};
    font-size: 0.7em;
    font-weight: 600;
    color: ${({color:e})=>e??"var(--reallyBlue)"};
    border-radius: var(--brLight);
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 26px;
    user-select: none;
    cursor: pointer;

    animation: ${({remove:e})=>e?"element-removed 0.2s forwards normal":"element-added 0.2s forwards normal"};

    .element-text {
        display: block;
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        text-align: center;
    }

    .remove {
        display: flex;
        align-items: center;
        justify-content: center;
        min-width: 15px;
        height: 15px;
        background: var(--theme);
        color: var(--blue);
        border-radius: 100%;

        svg {
            width: 10px;
            height: 10px;
        }
    }

    @keyframes element-added {
        0% {
            padding: 0;
            width: 0px;
            max-width: 0px;
            opacity: 0;
            visibility: hidden;
            margin-right: 0;
        }
        100% {
            padding: 5px 10px;
            width: 100px;
            max-width: 100px;
            opacity: 1;
            visibility: visible;
            margin-right: 5px;
        }
    }

    @keyframes element-removed {
        0% {
            padding: 5px 10px;
            width: 100px;
            max-width: 100px;
            opacity: 1;
            visibility: visible;
            margin-right: 5px;
        }
        100% {
            padding: 0;
            width: 0px;
            max-width: 0px;
            opacity: 0;
            visibility: hidden;
            margin-right: 0;
        }
    }
`,Eg=f.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    row-gap: 5px;
    transition: 0.2s;
    padding: ${({padding:e})=>e??"10px"};
    opacity: ${({removeAll:e})=>e?"0":"1"};
    min-height: ${({removeAll:e,height:i})=>e?"0px":i||"46px"};
    visibility: ${({removeAll:e})=>e?"hidden":"visible"};
    transform: scale(${({removeAll:e})=>e?"0.95":"1"})
        translate(${({removeAll:e})=>e?"-30px, 20px":"0, 0"});
`,To=({list:e,onAddElement:i,onRemoveAll:n,onRemoveOne:s,padding:o,height:a,setList:r})=>{const d=Object.keys(e??{}),{removeAll:c,removeOne:p,setRemoveAll:h,setRemoveOne:b}=Tg(d,r);return d.length?t.jsxs(Eg,{removeAll:c||closed,padding:o,height:a,children:[!!i&&t.jsxs(ui,{onClick:i,background:"var(--reallyBlue)",color:"#fff",children:[t.jsx(Ve,{}),"Добавить"]}),Object.values(e??{}).map(x=>t.jsxs(ui,{background:x.background,remove:p===x.id,children:[t.jsx("div",{className:"element-text",children:x.title}),t.jsx("div",{className:"remove",onClick:()=>{d.length===1?(h(!0),n==null||n()):(b(x.id),s(x.id))},children:t.jsx(Oe,{})})]},x.id)),d.length&&!!n&&t.jsx(ui,{background:"var(--reallyBlue)",color:"#fff",onClick:()=>{n(),h(!0)},children:t.jsx("div",{className:"element-text",children:"Убрать все"})})]}):null},bn=(e,i)=>{switch(i){case"date":return qe(e,"numeric");case"rub":return e+" руб.";default:return e===void 0?"-":e}},Sg=(e,i)=>e?Object.keys(e).find(n=>e[n].title===i):null,$g=e=>{const[i,n]=l.useState(null),[s,o]=l.useState(null),[a,r]=l.useState(null),[d,c]=l.useState(null),[p,h]=l.useState(e),b=l.useCallback(u=>{var g,m;o(v=>(v&&v[u]&&delete v[u],{...v})),u===((g=i==null?void 0:i.column)==null?void 0:g.field)&&n(null),u===((m=a==null?void 0:a.column)==null?void 0:m.field)&&r(null)},[i,s,a]),x=l.useCallback(()=>{o(null),n(null),r(null)},[]);return l.useEffect(()=>{if(s)if(!d)c(u=>{const g=Object.values(s)[0].column;return u={[(g==null?void 0:g.field)??""]:{id:(g==null?void 0:g.field)??"",title:"Фильтр: "+(g==null?void 0:g.title)}},{...u}});else{const u=Object.values(s).find(g=>{var m;return!d[((m=g.column)==null?void 0:m.field)??""]});u&&c(g=>{var S,_;const m=((S=u.column)==null?void 0:S.field)??"",v="Фильтр: "+((_=u.column)==null?void 0:_.title);return g&&(g[m]={id:m,title:v}),{...g}})}i&&c(u=>{var v;const g=((v=i.column)==null?void 0:v.field)??"",m="Поиск";return u?u[g]={id:g,title:m}:u={[g]:{id:g,title:m}},{...u}}),a&&c(u=>{var v;const g=((v=a.column)==null?void 0:v.field)??"",m="Сортировка";return u?u[g]={id:g,title:m}:u={[g]:{id:g,title:m}},{...u}})},[i,s,a]),l.useEffect(()=>{var m;const u=i==null?void 0:i.column,g=(m=i==null?void 0:i.column)==null?void 0:m.field;if(i&&g){const v=e==null?void 0:e.filter(S=>ae(bn(S[g],u==null?void 0:u.type)).includes(ae(bn(i.value,u==null?void 0:u.type))));h(v)}else h(e)},[i]),l.useEffect(()=>{if(s){const u=e==null?void 0:e.filter(g=>!Object.values(s).find(m=>{var v;return g[((v=m.column)==null?void 0:v.field)??""]!==m.value.title}));h(u)}else c(u=>({...u})),h(e)},[s]),l.useEffect(()=>{var g;const u=((g=a==null?void 0:a.column)==null?void 0:g.field)??"";a?h(m=>{const v=[...m??[]];return v==null||v.sort((S,_)=>_[u]<S[u]?a.value==="asc"?1:-1:_[u]>S[u]?a.value==="asc"?-1:1:0),v}):(c(m=>{const v=Sg(m,"Сортировка");return m&&v&&delete m[v],{...m}}),h(e))},[a==null?void 0:a.value]),l.useEffect(()=>{h(e)},[e]),{sort:a,setSort:r,search:i,setSearch:n,resultData:p,filter:s,setFilter:o,filterList:d,setFilterList:c,onRemoveOne:b,onRemoveAll:x}},yi=(e,i)=>{const n=e.find(s=>s.id.toString()===i[0]);return i.length&&(n!=null&&n.children)?(i.shift(),yi(n.children,i)):n?n.children:e},Pg=e=>{const{items:i,setSelected:n,onClick:s,selected:o,appearance:a=!0,multiple:r=!1}=e,[d,c]=l.useState(!1),p=l.useRef(null),h=l.useRef(null),[b,x]=l.useState([]),[u,g]=l.useState(i),[m,v]=l.useState("");l.useEffect(()=>{g(i)});const S=l.useCallback(()=>{c(k=>!k)},[c]),_=l.useCallback(k=>{if(k.children)b.push(k.id.toString()),g(yi(i,[...b])??[]),x([...b]);else{if(r)if(o)if(o.find(q=>q.id===k.id)){const q=o.filter($=>$.id!==k.id);q.length?n(q):n(null)}else n([...o,k]);else n([k]);else n(k);!r&&S(),v(b.join("/"))}s==null||s(k)},[n,b]),E=l.useCallback(()=>{b.pop(),x([...b]),b.length===0?g(i):g(yi(i,b)??[])},[b,g]);return ct(p,()=>{d&&S()}),{handleOpen:S,refElement:p,isOpen:d,multiple:r,handleSelect:_,selectedRoute:m,currentItems:u,route:b,goBack:E,refItems:h,appearance:a}},Og=f.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 36px;

    padding: ${({multiple:e})=>e?"5px 10px 5px 5px":"5px 10px"};
    box-shadow: ${({appearance:e})=>e&&"var(--schedule-shadow)"};
    position: relative;
    background: var(--schedule);
    border-radius: var(--brLight);
    overflow: hidden;

    &:hover {
        filter: brightness(0.95);
    }
`,Ag=f.div`
    max-width: ${({width:e})=>e??"155px"};
    width: 100%;
    min-width: 50px;
    min-height: 36px;

    position: relative;
    user-select: none;
    font-weight: 599;
    white-space: nowrap;
    font-size: ${({appearance:e})=>e&&"0.9em"};
    z-index: ${({isOpen:e})=>e?5:2};
    opacity: ${({isActive:e})=>!e&&.7};
    pointer-events: ${({isActive:e})=>!e&&"none"};

    color: var(--text);
    cursor: pointer;
    transition: 0.3s;

    &:focus {
        outline: 4px solid var(--almostTransparentOpposite);
    }

    &:focus:not(:focus-visible) {
        outline: none;
    }
    &:active {
        transform: translateY(3px);
    }
`,Rg=f.header`
    display: flex;
    align-items: center;
    width: calc(100% - 15px);
    column-gap: 5px;
    overflow-x: auto;
    &::-webkit-scrollbar {
        display: none;
    }

    .single-header,
    .header-item {
        display: flex;
        align-items: center;
    }

    .header-title {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        width: 100%;
    }

    .not-chosen {
        font-size: ${({appearance:e})=>e&&"0.9em"};
        opacity: ${({appearance:e})=>e&&"0.6"};

        &.multi {
            margin-left: 5px;
        }
    }

    .header-item {
        background: ${w.blue.transparent2};
        color: ${w.blue.main};
        border-radius: 6px;
        padding: 5px 10px;
        font-size: 0.85em;
        min-width: fit-content;
    }

    .icon {
        float: left;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        margin-right: 5px;
    }
`,Cg=f.ul`
    max-width: ${({width:e})=>e??"155px"};
    width: 100%;
    min-width: 50px;
    min-height: 60px;
    /**
    *height: ${({itemsAmount:e})=>e*30+"px"};
    */

    position: absolute;
    top: ${({title:e})=>e?"80px":"46px"};

    box-shadow: var(--light-box-shadow);
    border-radius: var(--brLight);
    background: var(--schedule);
    user-select: none;
    max-height: 250px;
    overflow-y: auto;
    overflow-x: hidden;
    opacity: 0;

    transition: 0.2s opacity, 0.2s visibility, 0.2s top, height 0.3s;

    &.open {
        opacity: 1;
        visibility: visible;
        top: ${({title:e})=>e?"60px":"46px"};
    }

    &.close {
        opacity: 0;
        visibility: hidden;
        top: 36px;
    }
`,vn=f.li`
    list-style-type: none;
    background: var(${({isSelected:e})=>e?"--reallyBlue":""});
    color: ${({isSelected:e})=>e?"#fff":""};
    min-height: 30px;
    padding: 5px 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .icon {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        margin-right: 5px;
    }

    .select-item-title {
        overflow: hidden;
        white-space: pre-line;
        width: 100%;
        text-overflow: ellipsis;
    }

    animation: fadeIn 0.4s forwards;

    &::before {
        content: '';
        display: block;
        position: absolute;
        margin-top: auto;
        margin-bottom: auto;
        margin-left: -7px;
        min-width: ${({leadingToSelected:e})=>e?"5px":"0px"};
        height: 5px;
        border-radius: 10px;
        background: var(--reallyBlue);
    }

    .back-button {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        color: var(--blue);
        transition: 0.2s transform;

        &:active {
            transform: translateX(-20px);
        }
    }

    @keyframes fadeIn {
        0% {
            opacity: 0;
            transform: scale(1.04);
        }
        100% {
            opacity: 1;
            transform: scale(1);
        }
    }
`,Ng=["isOpen"],Ig=f(Zr).withConfig({shouldForwardProp:e=>!Ng.includes(e)})`
    transition: 0.3s;
    min-width: 15px;
    transform: rotateZ(${({isOpen:e})=>e?"0deg":"180deg"});
`,Lg=e=>{const{handleOpen:i,refElement:n,isOpen:s,multiple:o,handleSelect:a,selectedRoute:r,currentItems:d,route:c,goBack:p,refItems:h,appearance:b}=Pg(e),{isActive:x,width:u,title:g,required:m,selected:v,placeholder:S}=e;return t.jsxs(Ag,{onClick:i,appearance:b,ref:n,isOpen:s,isActive:x??!0,width:u,children:[t.jsx(Y,{size:5,align:"left",bottomGap:"5px",visible:!!g,required:m,children:g}),t.jsxs(Og,{multiple:o,appearance:b,children:[t.jsx(Rg,{appearance:b,children:o?v?v.map(_=>t.jsxs("div",{className:"header-item",children:[!!_.icon&&t.jsx("span",{className:"icon",children:_.icon}),t.jsx("span",{className:"header-title",children:_.title})]},_.id)):t.jsx("span",{className:"not-chosen multi",children:S??"Не выбрано"}):t.jsx("div",{className:"single-header",children:v?t.jsxs(t.Fragment,{children:[!!v.icon&&t.jsx("span",{className:"icon",children:v.icon}),t.jsx("span",{className:"header-title",children:v.title})]}):t.jsx("span",{className:"not-chosen",children:S??"Не выбрано"})})}),t.jsx(Ig,{isOpen:s})]}),t.jsxs(Cg,{width:u,ref:h,isOpen:s,className:s?"open":"close",itemsAmount:d.length+(c.length?1:0),title:g,children:[!!c.length&&t.jsx(vn,{isSelected:!1,onClick:_=>{_.stopPropagation(),p()},children:t.jsxs("span",{className:"back-button",children:[t.jsx($t,{}),"Назад"]})},-1),d.map(({id:_,icon:E,title:k,children:q})=>t.jsxs(vn,{onClick:$=>{$.stopPropagation(),a({id:_,icon:E,title:k,children:q})},isSelected:!o&&!!v&&v.title.includes(k),leadingToSelected:r.includes(_.toString()),children:[!!E&&t.jsx("span",{className:"icon",children:E}),t.jsx("span",{className:"select-item-title",children:k}),!!q&&t.jsx("span",{className:"right-icon",children:t.jsx(at,{})}),o&&!!v&&!!v.find($=>$.title.includes(k))&&t.jsx("span",{className:"right-icon",children:t.jsx(Kn,{})})]},k))]})]})},Ui=l.memo(Lg),Eo=e=>{switch(e){case"desc":return V.evokePopUpMessage({message:"Таблица отсортирована по убыванию",type:"info",time:5e3});case"asc":return V.evokePopUpMessage({message:"Таблица отсортирована по возрастанию",type:"info",time:5e3});default:return V.evokePopUpMessage({message:"Сортировка отключена",type:"info",time:5e3})}},Dg=f.div`
    display: flex;
    align-items: center;
    width: 100%;
    font-size: 0.9em;
    background: ${({even:e})=>e?`${w.blue.transparent3}`:"transparent"};

    @media (max-width: 1200px) {
        .five {
            display: none;
        }
    }

    @media (max-width: 1000px) {
        .four {
            display: flex;
        }
    }

    @media (max-width: 700px) {
        font-size: 0.8em;
        .three {
            display: none;
        }
    }

    @media (max-width: 450px) {
        .two {
            display: none;
        }
    }
`,So=f.div`
    width: ${({width:e})=>e??"100%"};
    min-width: ${({width:e})=>e??"auto"};
    padding: ${({padding:e})=>e??"20px"};
    text-align: ${({align:e})=>e&&e};
    cursor: ${({clickable:e})=>e&&"pointer"};
    overflow: ${({overflow:e})=>e??"hidden"};
    display: block;
    white-space: ${({showFull:e})=>e?"wrap":"nowrap"};
    text-overflow: ${({showFull:e})=>e?"clip":"ellipsis"};
    position: relative;

    @media (max-width: 700px) {
        padding: ${({clickable:e})=>!e&&"10px"};
    }
`,zg=f.div`
    display: flex;
    align-items: center;
    width: 100%;
    font-weight: 700;
    font-size: 0.9em;
    z-index: 10;

    .icon {
        position: absolute;
        top: 50%;
        right: 8px;
        transform: translateY(-50%);
    }

    & > * + * {
        border-left: 1px solid var(--mild-theme);
    }

    @media (max-width: 1200px) {
        .five {
            display: none;
        }
    }

    @media (max-width: 1000px) {
        .four {
            display: flex;
        }
    }

    @media (max-width: 700px) {
        font-size: 0.8em;
        .three {
            display: none;
        }
    }

    @media (max-width: 450px) {
        .two {
            display: none;
        }
    }
`,Mg=f.div`
    display: flex;
    align-items: center;
`,Fg=({columns:e,search:i,setSearch:n,filter:s,setFilter:o,sort:a,setSort:r})=>t.jsx(zg,{children:e.map(d=>{var c,p,h,b;return t.jsxs(So,{overflow:d.catalogs?"visible":"hidden",width:d.width,title:d.title,clickable:d.search,align:d.search?"space-between":d.align,showFull:d.showFull,className:((c=d.priority)==null?void 0:c.toString())??"one",onClick:()=>{d.search&&n({value:"",column:d}),d.sort&&r(x=>{const u=x!=null&&x.value?x.value==="desc"?"asc":null:"desc";return Eo(u),u?{column:d,value:u}:null})},children:[!d.catalogs&&d.title,!d.catalogs&&!d.sort&&d.search&&t.jsx(Ee,{className:"icon",style:{color:d.field===((p=i==null?void 0:i.column)==null?void 0:p.field)?"var(--reallyBlue)":"var(--text)"}}),d.sort&&t.jsx(as,{className:"icon",style:{color:d.field===((h=a==null?void 0:a.column)==null?void 0:h.field)?"var(--reallyBlue)":"var(--text)"}}),d.catalogs&&t.jsx(Mg,{children:t.jsx(Ui,{appearance:!1,items:d.catalogs??[],setSelected:x=>o(u=>(x&&(u={...u,[d.field]:{column:d,value:x}}),u)),selected:(b=s==null?void 0:s[d.field])==null?void 0:b.value,placeholder:d.title})})]},d.title)})}),$o=({pages:e,condition:i,currentPage:n,setCurrentPage:s,align:o="center"})=>{const[a,r]=l.useState(n.toString());l.useEffect(()=>{a.length&&s(+a)},[a]),l.useEffect(()=>{r(n.toString())},[n]);const d=c=>{c.length?+c>=1&&+c<=e+1&&r((+c-1).toString()):r("")};return t.jsxs(pe,{horizontalAlign:o,visible:i,direction:"horizontal",width:"100%",padding:"10px",children:[t.jsx(j,{minWidth:"42px",height:"42px",background:"var(--mild-theme)",icon:t.jsx($t,{}),onClick:()=>r(_e(n-1,e).toString())}),t.jsxs("div",{className:"page-indicator",children:[t.jsx(Se,{width:"12px",placeholder:"",value:a.length?(+a+1).toString():"",setValue:d,inputAppearance:!1}),"/ ",e+1]}),t.jsx(j,{minWidth:"42px",height:"42px",background:"var(--mild-theme)",icon:t.jsx(at,{}),onClick:()=>r(_e(n+1,e).toString())})]})},De=(e,i)=>{switch(i){case"date":return qe(e,"numeric");case"rub":return e+" руб.";default:return e===void 0?"-":e}},Bg=f.div`
    @media (min-width: 1001px) {
        max-width: 500px;
    }
`,Ug=({title:e,obj:i,columns:n})=>t.jsxs(Bg,{children:[t.jsx(Y,{size:3,align:"left",bottomGap:!0,children:e}),n.map(s=>t.jsx(Be,{keyStr:s.title,value:s.render?s.render(i[s.field],i):De(i[s.field],s.type)},s.title))]}),Po=({columns:e,el:i,index:n,onRowClick:s})=>{const{open:o}=G(),a=()=>o(t.jsx(Ug,{title:"Информация",obj:i,columns:e}));return t.jsx(Dg,{even:n%2===0,onClick:()=>s?s(i):a(),children:e.map(r=>{var d;return t.jsx(So,{showFull:r.showFull,width:r.width,className:((d=r.priority)==null?void 0:d.toString())??"one",align:r.align,children:r.render?r.render(De(i[r.field],r.type),i):De(i[r.field],r.type)},r.field)})})},Hg=f.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;

    .page-indicator {
        width: 100px;
        background: var(--mild-theme);
        padding: 3px;
        border-radius: var(--brLight);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.9em;
        font-weight: 600;
    }
`,Wg=f.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 0;

    img {
        width: 35px;
        height: 35px;
    }
`,Vg=({data:e,loading:i,columns:n,maxOnPage:s,onRowClick:o,filter:a})=>{const[r,d]=l.useState(0),c=Math.ceil(((e==null?void 0:e.length)??0)/(s??1))-1,p=s?e==null?void 0:e.slice(r*s,(r+1)*s):e;return l.useEffect(()=>{d(0)},[a]),i?t.jsx(Wg,{children:t.jsx(ze,{})}):t.jsxs(Hg,{children:[p==null?void 0:p.map((h,b)=>t.jsx(Po,{onRowClick:o,columns:n,el:h,index:b},b)),!(p!=null&&p.length)&&t.jsx(ce,{text:"Нет данных"}),t.jsx($o,{pages:c,condition:!!s&&!!(p!=null&&p.length),currentPage:r,setCurrentPage:d})]})},Gg=f.div`
    display: flex;
    align-items: center;
    gap: 5px;
    transition: 0.2s;
    padding: ${({closed:e})=>e?"0px":"10px"};
    width: 100%;
    height: ${({closed:e})=>e?"0px":"60px"};
    opacity: ${({closed:e})=>e?"0":"1"};
    visibility: ${({closed:e})=>e?"hidden":"visible"};
`,Yg=e=>{switch(e){case"date":return"date";case"rub":return"number";default:return"text"}},qg=({search:e,setSearch:i})=>{var n,s;return t.jsx(Gg,{closed:!(e!=null&&e.column),children:t.jsx(Se,{value:(e==null?void 0:e.value)??"",setValue:o=>i(a=>a?(a.value=o,{...a}):null),width:"100%",type:Yg((n=e==null?void 0:e.column)==null?void 0:n.type),placeholder:(s=e==null?void 0:e.column)==null?void 0:s.title,leftIcon:t.jsx(Ee,{}),minWidth:"auto"})})},Kg=(e,i)=>{if(!e)return{};const n=i.reduce((s,{field:o})=>(s[o]=[],s),{});return e==null||e.forEach(s=>{Object.entries(s).forEach(([o,a])=>{n[o]&&a&&n[o].push(a)})}),n};function Xg(e){return Object.keys(e).map(i=>({title:"",field:i}))}const Jg=({footer:e,columns:i,data:n})=>{if(!e)return null;const s=e(Kg(n,i));return t.jsxs(t.Fragment,{children:[t.jsx(ue,{}),t.jsx(Po,{onRowClick:()=>null,columns:Xg(s),el:s,index:1})]})},Qg=f.div`
    width: 100%;
    box-shadow: var(--schedule-shadow);
    border-radius: var(--brLight);
    color: var(--text);
    background: var(--form);
    overflow: hidden;
`,_n=({columns:e,data:i,maxOnPage:n,onRowClick:s,footer:o,loading:a=!1})=>{const{sort:r,setSort:d,search:c,setSearch:p,resultData:h,filter:b,setFilter:x,filterList:u,setFilterList:g,onRemoveOne:m,onRemoveAll:v}=$g(i);return t.jsxs(Qg,{children:[t.jsx(To,{setList:g,padding:"0 10px",list:u,onRemoveOne:m,onRemoveAll:v}),t.jsx(qg,{search:c,setSearch:p}),t.jsx(Fg,{sort:r,setSort:d,columns:e,search:c,setSearch:p,filter:b,setFilter:x}),t.jsx(Vg,{loading:a,onRowClick:s,filter:b,columns:e,data:h,maxOnPage:n}),t.jsx(Jg,{footer:o,data:i,columns:e})]})},yn=()=>[{title:"Статус заявления",field:"status",priority:"one",width:"200px",catalogs:[...Object.values(pg).map((e,i)=>({id:i.toString(),title:e}))??[]],render:e=>t.jsx(se,{type:e==="Готово"?"success":e==="Отклонено"?"failure":"alert",title:e,align:"center",width:"100%",icon:null,maxWidth:"150px"})},{title:"Дата подписи",field:"signDate",type:"date",priority:"one",align:"center"},{title:"Номер приказа",field:"orderNumber",priority:"one",align:"center"},{title:"Дата приказа",field:"orderDate",type:"date",priority:"one",align:"center",render:e=>t.jsx(se,{type:e==="Готово"?"success":e==="Отклонено"?"failure":"alert",title:e,align:"center",width:"100%",icon:null,maxWidth:"150px"})},{title:"Статус приказа",field:"orderStatus",priority:"one",width:"200px",catalogs:[...Object.values(ug).map((e,i)=>({id:i.toString(),title:e}))??[]],render:e=>t.jsx(se,{type:e==="Готово"?"success":e==="Отклонено"?"failure":"alert",title:e,align:"center",width:"100%",icon:null,maxWidth:"150px"})},{title:"Файл заявления",priority:"one",field:"file",type:"file"},{title:"Примечание",field:"registrationStatus",priority:"one"}],Zg=f.div`
    display: flex;
    align-items: center;
    color: var(--text);
    justify-content: center;
    .text {
        line-height: 1.5em;
        margin-top: 0px;
        font-weight: normal;
        font-size: 0.9em;
        margin-top: 15px;
    }
    .message {
        margin-bottom: -15px;
    }
    .config {
        margin-top: 15px;
        padding-left: 10px;
        font-weight: bold;
    }
    .collapsed {
        padding-left: 10px;
    }
    .label {
        display: flex;
        align-items: center;
        font-size: 20px;
        font-weight: bold;
    }
    .buttonBlock {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .block {
        border-radius: var(--brSemi);
        background: var(--schedule);
        box-shadow: var(--schedule-shadow);
        height: fit-content;
        padding: 20px;
        display: flex;
        flex-direction: column;
        row-gap: 20px;
        margin-bottom: 30px;
    }
    .firstBlock {
        padding-bottom: 40px;
        margin-bottom: 10px;
    }

    @media (max-width: 1000px) {
        align-items: flex-start;
        overflow-y: auto;
        height: 100%;
    }
    .order {
        margin-left: 10px;
        margin-top: 10px;
        margin-bottom: 15px;
    }
    .moreButton {
        margin: -10px;
        margin-top: -30px;
    }
    .historyTable {
        width: 100%;
        font-size: 16px;
    }
    .historyTable tr {
        min-height: 30px;
    }
`,ef=()=>{const{data:{dataWorkerApplication:e}}=lt.useApplications();if(e){const[i,n]=l.useState(Array(e.length).fill(!1)),[s,o]=l.useState(!1),[a,r]=l.useState(Array(e.length).fill(!1));let d;return t.jsxs("div",{className:"jobBlocks",children:[e.map((c,p)=>{var h,b,x;return c.isDismissal?null:t.jsxs("div",{className:"block",children:[t.jsxs("div",{className:"label",children:[c.jobTitle,t.jsx(j,{icon:i[p]?t.jsx(ri,{}):t.jsx(Mt,{}),onClick:()=>{n(u=>u.map((g,m)=>m===p?!g:g)),o(!1)},background:"transparent"})]}),t.jsxs("div",{className:"text",children:["Структурное подразделение: ",c.subDivision,t.jsx("br",{}),"Ставка: ",c.rate,t.jsx("br",{}),"Вид места работы: добавим",t.jsx("br",{})]}),d=((h=c==null?void 0:c.dismissalApplications[c.dismissalApplications.length-1])==null?void 0:h.status)=="Не согласовано"||((x=(b=c==null?void 0:c.dismissalApplications[c.dismissalApplications.length-1])==null?void 0:b.dismissalOrder)==null?void 0:x.orderStatus)=="Не согласован"||(c==null?void 0:c.dismissalApplications.length)==0,t.jsx(Je.Collapse,{isOpened:i[p],className:"collapseс",children:t.jsxs("div",{className:"collapsed",children:[t.jsx("div",{className:"buttonBlock",children:t.jsx(Je.Collapse,{isOpened:d,children:t.jsx("a",{href:"#/hr-applications/dismissal",children:t.jsx(j,{text:"Уволиться с этой должности",background:"rgb(236,95,107)",textColor:"#fff",onClick:()=>{kg(p)},width:"250px",minWidth:"150px",height:"36px",fixedInMobile:!0})})})}),t.jsx(Je.Collapse,{isOpened:c.dismissalApplications.length!=0,children:t.jsx("div",{children:t.jsx("div",{className:"text",children:t.jsx(_n,{loading:!c.dismissalApplications,columns:yn(),data:c.dismissalApplications.map(({status:u,signDate:g,dismissalOrder:{orderNumber:m,orderDate:v,registrationStatus:S,orderStatus:_}})=>({status:u,signDate:g,orderNumber:m,orderDate:v,orderStatus:_,registrationStatus:S})),maxOnPage:10})})})})]})}),t.jsx("div",{className:"moreButton",children:t.jsx(j,{onClick:()=>{n(u=>u.map((g,m)=>m===p?!g:g)),o(!1)},text:i[p]?"Скрыть":"Подробнее",background:"transparent"})})]})}),t.jsxs("div",{className:"jobBlocks block",children:[t.jsxs("div",{className:"label",children:["История должностей:",t.jsx(j,{icon:s?t.jsx(ri,{}):t.jsx(Mt,{}),onClick:()=>o(!s),background:"transparent"})]}),t.jsx(Je.Collapse,{isOpened:s,className:"collapseс",children:e.map((c,p)=>c.isDismissal?t.jsxs("div",{children:[t.jsx("div",{className:"config",children:t.jsxs("div",{className:"label",children:[c.jobTitle,t.jsx(j,{icon:a[p]?t.jsx(ri,{}):t.jsx(Mt,{}),onClick:()=>r(h=>h.map((b,x)=>x===p?!b:b)),background:"transparent"})]})}),t.jsx(Je.Collapse,{isOpened:a[p],className:"collapseс",children:t.jsxs("div",{className:"collapsed",children:[t.jsxs("div",{className:"text",children:["Структурное подразделение: ",c.subDivision,t.jsx("br",{}),"Ставка: ",c.rate,t.jsx("br",{}),"Вид места работы: добавим",t.jsx("br",{})]}),t.jsx(Je.Collapse,{isOpened:c.dismissalApplications.length!=0,children:t.jsx("div",{className:"text",children:t.jsx(_n,{loading:!e,columns:yn(),data:c.dismissalApplications.map(({status:h,signDate:b,dismissalOrder:{orderNumber:x,orderDate:u,registrationStatus:g}})=>({status:h,signDate:b,orderNumber:x,orderDate:u,registrationStatus:g})),maxOnPage:10})})})]})})]}):null)})]})]})}else return null},tf=()=>{const{data:{listApplication:e},error:i}=lt.useApplications();return t.jsx(zi,{load:()=>Ye.getApplicationsFx(),loading:!e,error:i,data:e,children:t.jsx(Zg,{children:t.jsxs(Bd,{maxWidth:"1500px",children:[t.jsxs("div",{className:"block firstBlock",children:[t.jsx(Y,{size:2,align:"left",children:"Заявление на увольнение"}),t.jsx(se,{type:"info",title:"Информация",icon:t.jsx(ot,{}),children:"Данный сервис позволяет заказать необходимую справку, подать заявление, запрос. Статус (информация о степени готовности) заказанных справок меняется согласно действиям оператора. В колонке «Структурное подразделение, адрес» указывается название подразделения и адрес, куда необходимо приехать за готовым документом."})]}),ef()]})})})},nf=Object.freeze(Object.defineProperty({__proto__:null,default:tf},Symbol.toStringTag,{value:"Module"})),A="/applications",ie="/hr-applications",wn="/staff_orders",jn="/staff_blanks",Vb="/ad_logins",Hi="/doclist",kn="/pps_vote2020",Oo="/pps_contest",sf="/electronic-statements",of="/vacation",pt="/kpi_pps",ut="/kpi_admin",Tn="/sc_news",En="/oop",Sn="/centers",af="/helpful-information",rf="/download-agreements",Ao=A+"/contact-info-actualization",Ro=A+"/data-verification",Co=A+"/issuance-of-licenses",No=A+"/getting-computer-equipment",Io=A+"/connecting-computer",Lo=A+"/printer-maintenance",Do=A+"/question-sed",zo=A+"/question-personal-account",Mo=A+"/other-it-services",Fo=A+"/certificate-from-the-place-of-work",Bo=A+"/visa-certificate",Uo=A+"/certificate-of-work-experience",Ho=A+"/number-of-unused-vacation-days",Wo=A+"/copy-of-the-employment-record",Vo=A+"/copies-of-documents-from-the-personal-file",Go=A+"/work-on-the-terms-of-external-concurrency",Yo=A+"/certificate-time-parental-leave",qo=A+"/arbitrary-request",Ko=A+"/courier",Xo=A+"/persona-income-tax-reference",Jo=A+"/payment-of-child-birth-allowance",Qo=A+"/payment-for-child-care",lf=ie+"/dismissal",Zo=ie+"/buffer-dismissal",ea=ie+"/buffer-work-transfer",ta=ie+"/buffer-extra-holiday-coll",ia=ie+"/buffer-holiday-planning",na=ie+"/buffer-holiday-work",sa=ie+"/buffer-part-time-deployment",oa=ie+"/buffer-holiday-postponed",U=()=>ke({oldVersionUrl:"/sprav"}),wi=()=>({applications:{id:"applications",title:"Цифровые сервисы",icon:t.jsx(I,{}),path:A,Component:U,color:"red",isTemplate:!1,group:"OTHER",keywords:["заявления","справки","заявление","справка"],planeHeader:!0},...Lr,"hr-applications":{id:"hr-applications",title:"Кадровые заявления",icon:t.jsx(I,{}),path:ie,Component:U,color:"green",isTemplate:!1,group:"OTHER"},"download-agreements":{id:"download-agreements",title:"Административная панель",icon:t.jsx(el,{}),path:rf,Component:yg,color:"blue",isTemplate:!1,group:"GENERAL",isAdmin:!0},"electronic-statements":{id:"electronic-statements",title:"Электронные ведомости",icon:t.jsx(B,{}),path:sf,Component:()=>(ne.useEffect(()=>{window.location.replace(" https://e.mospolytech.ru/old/stats.php?m=items&act=st_list")},[]),null),color:"blue",isTemplate:!1,group:"LEARNING_ACTIVITIES"},"project-activity":{id:"project-activity",title:"Проектная деятельность",icon:t.jsx(rs,{}),path:Rr,Component:()=>(ne.useEffect(()=>{window.location.replace(`${O}/?p=proj_main`)},[]),null),color:"orange",isTemplate:!1,group:"LEARNING_ACTIVITIES"},"pps-contest":{id:"pps-contest",title:"Конкурс ППС",icon:t.jsx(B,{}),path:Oo,Component:()=>(ne.useEffect(()=>{window.location.replace("https://mospolytech.ru/contest-pps/")},[]),null),color:"blue",isTemplate:!1,group:"LEARNING_ACTIVITIES"},"kpi-pps":{id:"kpi-pps",title:"Рейтинговая система ППС",icon:t.jsx(is,{}),path:pt,Component:()=>(ne.useEffect(()=>{window.location.replace(`${O}/?p=${pt==null?void 0:pt.slice(1,pt.length)}`)},[]),null),color:"pink",isTemplate:!1,group:"LEARNING_ACTIVITIES"},"kpi-admin":{id:"kpi-admin",title:"Экспертиза рейтинго...",icon:t.jsx(tl,{}),path:ut,Component:()=>(ne.useEffect(()=>{window.location.replace(`${O}/?p=${ut==null?void 0:ut.slice(1,ut.length)}`)},[]),null),color:"lightBlue",isTemplate:!1,group:"LEARNING_ACTIVITIES"},"sc-news":{id:"sc-news",title:"Анонсы научных мероприятий",icon:t.jsx(il,{}),path:Tn,Component:()=>ke({oldVersionUrl:Tn}),color:"orange",isTemplate:!1,group:"OTHER",show:!1},orders:{id:"orders",title:"Приказы",icon:t.jsx(I,{}),path:wn,Component:()=>ke({oldVersionUrl:wn}),color:"blue",isTemplate:!1,group:"OTHER",show:!1},"document-blanks":{id:"document-blanks",title:"Бланки документов",icon:t.jsx(Wt,{}),path:jn,Component:()=>ke({oldVersionUrl:jn}),color:"blue",isTemplate:!1,show:!1,group:"OTHER"},doclist:{id:"doclist",title:"Ознакомление с документами",shortTitle:"Ознакомление с док...",icon:t.jsx(I,{}),path:Hi,Component:wg,color:"blue",isTemplate:!1,group:"FINANCES_DOCS"},calendar:{id:"calendar",title:"График отпусков",icon:t.jsx(nl,{}),path:of,Component:jg,color:"purple",isTemplate:!1,group:"FINANCES_DOCS"},oop:{id:"oop",title:"Образовательные программы",icon:t.jsx(kt,{}),path:En,Component:()=>ke({oldVersionUrl:En}),color:"blue",isTemplate:!1,group:"OTHER",show:!1},centers:{id:"centers",title:"Многофункциональный центр",icon:t.jsx(kt,{}),path:Sn,Component:()=>ke({oldVersionUrl:Sn}),color:"blue",isTemplate:!1,group:"OTHER",show:!1},info:{id:"info",title:"Полезная информация",icon:t.jsx(I,{}),path:af,Component:Bi,color:"blue",isTemplate:!1,group:"GENERAL"},"pps-vote":{id:"pps-vote",title:"Опрос для проверки уровня цифровой грамотности",icon:t.jsx(ls,{}),path:kn,Component:()=>ke({oldVersionUrl:kn}),color:"blue",isTemplate:!1,group:"OTHER",show:!1}}),ji=()=>({...Dr,"issuance-of-licenses-page":{id:"issuance-of-licenses-page",title:"Выдача лицензий",path:Co,icon:t.jsx(I,{}),color:"blue",Component:U,isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:A},"part-time-deployment":{id:"part-time-deployment",title:"Заявление на трудоустройство по совместительству",path:sa,icon:t.jsx(I,{}),color:"blue",Component:U,isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к кадровым заявлениям",subPageHeaderTitle:"",fallbackPrevPage:ie},"holiday-postponed":{id:"holiday-postponed",title:"Заявление на перенос отпуска",path:oa,icon:t.jsx(I,{}),color:"blue",Component:U,isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к кадровым заявлениям",subPageHeaderTitle:"",fallbackPrevPage:ie},dismissal:{id:"dismissal2",title:"Заявление на увольнение",path:Zo,icon:t.jsx(I,{}),color:"blue",Component:U,isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к кадровым заявлениям",subPageHeaderTitle:"",fallbackPrevPage:ie},"holiday-work":{id:"part-time-deployment",title:"Заявление о привлечении к работе в выходной день",path:na,icon:t.jsx(I,{}),color:"blue",Component:U,isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к кадровым заявлениям",subPageHeaderTitle:"",fallbackPrevPage:ie},"holiday-planning":{id:"holiday-postponed",title:"Заявление о предоставлении отпуска",path:ia,icon:t.jsx(I,{}),color:"blue",Component:U,isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к кадровым заявлениям",subPageHeaderTitle:"",fallbackPrevPage:ie},"extra-holiday-coll":{id:"dismissal",title:"Заявление о предоставлении дополнительного отпуска по коллективному договору",path:ta,icon:t.jsx(I,{}),color:"blue",Component:U,isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к кадровым заявлениям",subPageHeaderTitle:"",fallbackPrevPage:ie},"work-transfer":{id:"dismissal",title:"Заявление на перевод",path:ea,icon:t.jsx(I,{}),color:"blue",Component:U,isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к кадровым заявлениям",subPageHeaderTitle:"",fallbackPrevPage:ie},dismissal_form:{id:"dismissal",title:"Заявление на увольнение",path:lf,icon:t.jsx(I,{}),color:"blue",Component:U,isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к кадровым заявлениям",subPageHeaderTitle:"",fallbackPrevPage:ie},"getting-computer-equipment":{id:"getting-computer-equipment",title:"Получение нового компьютерного оборудования",icon:t.jsx(I,{}),color:"blue",path:No,Component:U,isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:A},"connecting-computer":{id:"connecting-computer",title:"Подключение компьютера, МФУ, телефона, WiFi",icon:t.jsx(I,{}),color:"blue",path:Io,Component:U,isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:A},"printer-maintenance":{id:"printer-maintenance",title:"Обслуживание принтеров, МФУ",icon:t.jsx(I,{}),color:"blue",path:Lo,Component:U,isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:A},"question-sed":{id:"question-sed",title:"Вопрос по СЭД Directum и 1С",icon:t.jsx(I,{}),color:"blue",path:Do,Component:U,isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:A},"question-personal-account":{id:"question-personal-account",title:"Вопрос по Личному кабинету",icon:t.jsx(I,{}),color:"blue",path:zo,Component:U,isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:A},"other-it-services":{id:"other-it-services",title:"Прочее ИТ-обслуживание",icon:t.jsx(I,{}),color:"blue",path:Mo,Component:U,isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:A},"certificate-form-place-of-work":{id:"certificate-form-place-of-work",title:"Справка с места работы",icon:t.jsx(I,{}),color:"blue",path:Fo,Component:U,isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:A},"visa-certificate":{id:"visa-certificate",title:"Справка на визу",icon:t.jsx(I,{}),color:"blue",path:Bo,Component:U,isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:A},"certificate-of-work-experience":{id:"certificate-of-work-experience",title:"Справка о стаже работы",icon:t.jsx(I,{}),color:"blue",path:Uo,Component:U,isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:A},"number-of-unused-vacation-days":{id:"number-of-unused-vacation-days",title:"Справка о количестве неиспользованных дней отпуска",icon:t.jsx(I,{}),color:"blue",path:Ho,Component:U,isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:A},"copy-of-employment-record":{id:"copy-of-employment-record",title:"Копия трудовой книжки",icon:t.jsx(I,{}),color:"blue",path:Wo,Component:U,isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:A},"copies-of-documents-from-personal-file":{id:"copies-of-documents-from-personal-file",title:"Копии документов из личного дела",icon:t.jsx(I,{}),color:"blue",path:Vo,Component:U,isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:A},"work-on-terms-of-external-concurrency":{id:"work-on-terms-of-external-concurrency",title:"Справка о работе на условиях внешнего совместительства для внесения стажа в трудовую книжку",icon:t.jsx(I,{}),color:"blue",path:Go,Component:U,isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:A},"certificate-time-parental-leave":{id:"certificate-time-parental-leave",title:"Справка об отпуске по уходу за ребенком до 1,5 и 3 лет",icon:t.jsx(I,{}),color:"blue",path:Yo,Component:U,isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:A},"arbitrary-request":{id:"arbitrary-request",title:"Произвольный запрос",icon:t.jsx(I,{}),color:"blue",path:qo,Component:U,isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:A},courier:{id:"courier",title:"Курьер",icon:t.jsx(I,{}),color:"blue",path:Ko,Component:U,isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:A},"personal-income-tax-reference":{id:"personal-income-tax-reference",title:"Справка по форме 2-НДФЛ",icon:t.jsx(I,{}),color:"blue",path:Xo,Component:U,isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:A},"payment-of-child-birth-allowance":{id:"payment-of-child-birth-allowance",title:"Справка о выплате (не выплате) единовременного пособия на рождение ребенка",icon:t.jsx(I,{}),color:"blue",path:Jo,Component:U,isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:A},"payment-for-child-care":{id:"payment-for-child-care",title:"Справка о ежемесячных выплатах сотрудника, находящегося в отпуске по уходу за ребенком (декрет)",icon:t.jsx(I,{}),color:"blue",path:Qo,Component:U,isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:A},"contact-info-actualization":{id:"contact-info-actualization",title:"Актуализация контактных данных",icon:t.jsx(I,{}),color:"blue",path:Ao,Component:vg,isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:A},"data-verification":{id:"data-verification",title:"Анкета для сверки данных",icon:t.jsx(I,{}),color:"blue",path:Ro,Component:_g,isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:A}}),cf=()=>[{title:"Цифровые сервисы",links:[{link:Ao,title:"Актуализация контактных данных"},{link:Ro,title:"Анкета для сверки данных"},{link:Co,title:"Выдача лицензий и свидетельств о государственной аккредитации"},{link:No,title:"Получение нового компьютерного оборудования"},{link:Io,title:"Подключение компьютера, МФУ, телефона, WiFi"},{link:Lo,title:"Обслуживание принтеров, МФУ"},{link:Do,title:"Вопрос по СЭД Directum и 1С"},{link:zo,title:"Вопрос по Личному кабинету"},{link:Mo,title:"Прочее ИТ-обслуживание"},{link:Fo,title:"Справка с места работы"},{link:Bo,title:"Справка на визу"},{link:Uo,title:"Справка о стаже работы"},{link:Ho,title:"Справка о количестве неиспользованных дней отпуска"},{link:Wo,title:"Копия трудовой книжки"},{link:Vo,title:"Копии документов из личного дела"},{link:Go,title:"Справка о работе на условиях внешнего совместительства для внесения стажа в трудовую книжку"},{link:Yo,title:"Справка об отпуске по уходу за ребенком до 1,5 и 3 лет"},{link:Xo,title:"Справка по форме 2-НДФЛ"},{link:Jo,title:"Справка о выплате (не выплате) единовременного пособия на рождение ребенка"},{link:Qo,title:"Справка о ежемесячных выплатах сотрудника, находящегося в отпуске по уходу за ребенком (декрет)"}]},{title:"Прочее",links:[{link:qo,title:"Произвольный запрос"},{link:gs,title:"Вступить в Профсоюз",isExternalLink:!0}]},{title:"Экспедиция отдела контроля и делопроизводства",links:[{link:Ko,title:"Курьер"}]}],df=()=>[{title:"",links:[{link:sa,title:"Заявление на трудоустройство по совместительству"},{link:oa,title:"Заявление на перенос отпуска"},{link:Zo,title:"Заявление на увольнение"},{link:na,title:"Заявление о привлечении к работе в выходной день"},{link:ia,title:"Заявление о предоставлении отпуска"},{link:ea,title:"Заявление на перевод"},{link:ta,title:"Заявление о предоставлении дополнительного отпуска по коллективному договору"}]}],pf=(e,i)=>!(i!=null&&i.length)||!e?!0:!(i!=null&&i.includes(e)),uf=f.div`
    @media (min-width: 1001px) {
        width: 100%;
        max-width: 900px;
        min-width: 900px;
        max-height: 600px;
    }

    display: flex;
    flex-direction: column;
    height: 70vh;

    .list {
        padding: 5px;
        margin-top: 10px;
        overflow-y: auto;
        height: 100%;

        .links-wrapper {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;

            .link-list {
                display: flex;
                flex-direction: column;
                width: calc(50% - 5px);
                background: var(--schedule);
                box-shadow: var(--schedule-shadow);
                padding: 10px;
                border-radius: var(--brLight);

                .links {
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                    font-size: 0.9em;

                    & a {
                        text-decoration: none;
                        color: var(--blue);
                    }
                    .disabled-link {
                        cursor: not-allowed;
                        opacity: 0.5;
                        text-decoration: none;
                        pointer-events: none;
                    }
                }
            }
        }
    }

    @media (max-width: 800px) {
        .list {
            .links-wrapper {
                .link-list {
                    width: 100%;
                }
            }
        }
    }
`,hf=({isTeachers:e=!1,currentFormEducation:i})=>{const{close:n}=G(),s=e?cf():xg(),[o,a]=l.useState(""),[r,d]=l.useState(s);return t.jsxs(uf,{children:[t.jsx(Y,{size:3,align:"left",bottomGap:!0,children:"Создать заявку"}),t.jsx(Zs,{whereToSearch:s,searchEngine:jo,setResult:d,placeholder:"Поиск заявок",setExternalValue:a}),t.jsx("div",{className:"list",children:t.jsxs("div",{className:"links-wrapper",children:[(r??s).map(c=>t.jsxs("div",{className:"link-list",children:[t.jsx(Y,{size:4,align:"left",bottomGap:!0,children:c.title}),!c.disabled&&t.jsx("div",{className:"links",children:c.links.map((p,h)=>{if(!(p.disabled||!pf(i,p.exceptionalFormEducationList)))return p.isExternalLink?t.jsx("a",{href:p.link,target:p.isOpenInNewWindow?"_blank":"_self",rel:"noreferrer",children:p.title},p.link+h):t.jsx(Z,{to:p.link,onClick:n,children:p.title},p.link+h)})})]},c.title)),!(r!=null&&r.length)&&!!o.length&&t.jsx(ce,{text:`По запросу ${o} ничего не найдено`})]})})]})},gf=(e,i)=>e?Object.keys(e).find(n=>e[n].title===i):null,ff=e=>{const[i,n]=l.useState(null),[s,o]=l.useState(null),[a,r]=l.useState(null),[d,c]=l.useState(null),[p,h]=l.useState(e),b=l.useCallback(u=>{var g,m;o(v=>(v&&v[u]&&delete v[u],{...v})),u===((g=i==null?void 0:i.column)==null?void 0:g.field)&&n(null),u===((m=a==null?void 0:a.column)==null?void 0:m.field)&&r(null)},[i,s,a]),x=l.useCallback(()=>{o(null),n(null),r(null)},[]);return l.useEffect(()=>{if(s)if(!d)c(u=>{const g=Object.values(s)[0].column;return u={[(g==null?void 0:g.field)??""]:{id:(g==null?void 0:g.field)??"",title:"Фильтр: "+(g==null?void 0:g.title)}},{...u}});else{const u=Object.values(s).find(g=>{var m;return!d[((m=g.column)==null?void 0:m.field)??""]});u&&c(g=>{var S,_;const m=((S=u.column)==null?void 0:S.field)??"",v="Фильтр: "+((_=u.column)==null?void 0:_.title);return g&&(g[m]={id:m,title:v}),{...g}})}i&&c(u=>{var v;const g=((v=i.column)==null?void 0:v.field)??"",m="Поиск";return u?u[g]={id:g,title:m}:u={[g]:{id:g,title:m}},{...u}}),a&&c(u=>{var v;const g=((v=a.column)==null?void 0:v.field)??"",m="Сортировка";return u?u[g]={id:g,title:m}:u={[g]:{id:g,title:m}},{...u}})},[i,s,a]),l.useEffect(()=>{var m;const u=i==null?void 0:i.column,g=(m=i==null?void 0:i.column)==null?void 0:m.field;if(i&&g){const v=e==null?void 0:e.filter(S=>ae(De(S[g],u==null?void 0:u.type)).includes(ae(De(i.value,u==null?void 0:u.type))));h(v)}else h(e)},[i]),l.useEffect(()=>{if(s){const u=e==null?void 0:e.filter(g=>!Object.values(s).find(m=>{var v;return g[((v=m.column)==null?void 0:v.field)??""]!==m.value.title}));h(u)}else c(u=>({...u})),h(e)},[s]),l.useEffect(()=>{var g;const u=((g=a==null?void 0:a.column)==null?void 0:g.field)??"";a?h(m=>{const v=[...m??[]];return v==null||v.sort((S,_)=>_[u]<S[u]?a.value==="asc"?1:-1:_[u]>S[u]?a.value==="asc"?-1:1:0),v}):(c(m=>{const v=gf(m,"Сортировка");return m&&v&&delete m[v],{...m}}),h(e))},[a==null?void 0:a.value]),l.useEffect(()=>{h(e)},[e]),{sort:a,setSort:r,search:i,setSearch:n,resultData:p,filter:s,setFilter:o,filterList:d,setFilterList:c,onRemoveOne:b,onRemoveAll:x}},xf=f.div`
    display: flex;
    align-items: center;
    width: 100%;
    font-size: 0.9em;
    background: ${({even:e})=>e?`${w.blue.transparent3}`:"transparent"};

    @media (max-width: 1200px) {
        .five {
            display: none;
        }
    }

    @media (max-width: 1000px) {
        .four {
            display: flex;
        }
    }

    @media (max-width: 700px) {
        font-size: 0.8em;
        .three {
            display: none;
        }
    }

    @media (max-width: 450px) {
        .two {
            display: none;
        }
    }
`,aa=f.div`
    width: ${({width:e})=>e??"100%"};
    min-width: ${({width:e})=>e??"auto"};
    padding: ${({padding:e})=>e??"20px"};
    text-align: ${({align:e})=>e&&e};
    cursor: ${({clickable:e})=>e&&"pointer"};
    overflow: ${({overflow:e})=>e??"hidden"};
    display: block;
    white-space: ${({showFull:e})=>e?"wrap":"nowrap"};
    text-overflow: ${({showFull:e})=>e?"clip":"ellipsis"};
    position: relative;

    @media (max-width: 700px) {
        padding: ${({clickable:e})=>!e&&"10px"};
    }
`,mf=f.div`
    display: flex;
    align-items: center;
    width: 100%;
    font-weight: 600;
    font-size: 0.9em;
    z-index: 10;

    .icon {
        position: absolute;
        top: 50%;
        right: 8px;
        transform: translateY(-50%);
    }

    & > * + * {
        border-left: 1px solid var(--mild-theme);
    }

    @media (max-width: 1200px) {
        .five {
            display: none;
        }
    }

    @media (max-width: 1000px) {
        .four {
            display: flex;
        }
    }

    @media (max-width: 700px) {
        font-size: 0.8em;
        .three {
            display: none;
        }
    }

    @media (max-width: 450px) {
        .two {
            display: none;
        }
    }
`,bf=f.div`
    display: flex;
    align-items: center;
`,vf=({columns:e,search:i,setSearch:n,filter:s,setFilter:o,sort:a,setSort:r})=>{const d=c=>()=>{c.search&&n({value:"",column:c}),c.sort&&r(p=>{const h=p!=null&&p.value?p.value==="desc"?"asc":null:"desc";return Eo(h),h?{column:c,value:h}:null})};return t.jsx(mf,{children:e.map(c=>{var p,h,b,x;return t.jsxs(aa,{overflow:c.catalogs?"visible":"hidden",width:c.width,title:c.title,clickable:c.search,align:c.search?"space-between":c.align,showFull:c.showFull,className:((p=c.priority)==null?void 0:p.toString())??"one",onClick:d(c),children:[!c.catalogs&&c.title,!c.catalogs&&!c.sort&&c.search&&t.jsx(Ee,{className:"icon",style:{color:c.field===((h=i==null?void 0:i.column)==null?void 0:h.field)?"var(--reallyBlue)":"var(--text)"}}),c.sort&&t.jsx(as,{className:"icon",style:{color:c.field===((b=a==null?void 0:a.column)==null?void 0:b.field)?"var(--reallyBlue)":"var(--text)"}}),c.catalogs&&t.jsx(bf,{children:t.jsx(Ui,{appearance:!1,items:c.catalogs??[],setSelected:u=>o(g=>(u&&(g={...g,[c.field]:{column:c,value:u}}),g)),selected:(x=s==null?void 0:s[c.field])==null?void 0:x.value,placeholder:c.title})})]},c.title)})})},_f=f.div`
    @media (min-width: 1001px) {
        max-width: 500px;
    }
`,yf=({obj:e,columns:i})=>t.jsx(_f,{children:i.map(n=>t.jsx(Be,{keyStr:n.title,value:n.render?n.render(e[n.field],e):De(e[n.field],n.type)},n.title))}),ra=({columns:e,el:i,index:n,onRowClick:s})=>{const{open:o}=G(),a=()=>o(t.jsx(yf,{obj:i,columns:e}),"Информация");return t.jsx(xf,{even:n%2===0,onClick:()=>s?s(i):a(),children:e.map(r=>{var d;return t.jsx(aa,{showFull:r.showFull,width:r.width,className:((d=r.priority)==null?void 0:d.toString())??"one",align:r.align,children:r.render?r.render(De(i[r.field],r.type),i):De(i[r.field],r.type)},r.field)})})},wf=f.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;

    .page-indicator {
        width: 100px;
        background: var(--mild-theme);
        padding: 3px;
        border-radius: var(--brLight);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.9em;
        font-weight: 600;
    }
`,jf=f.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 0;

    img {
        width: 35px;
        height: 35px;
    }
`,kf=({data:e,loading:i,columns:n,maxOnPage:s,onRowClick:o,filter:a})=>{const[r,d]=l.useState(0),c=Math.ceil(((e==null?void 0:e.length)??0)/(s??1))-1,p=s?e==null?void 0:e.slice(r*s,(r+1)*s):e;return l.useEffect(()=>{d(0)},[a]),i?t.jsx(jf,{children:t.jsx(ze,{})}):t.jsxs(wf,{children:[p==null?void 0:p.map((h,b)=>t.jsx(ra,{onRowClick:o,columns:n,el:h,index:b},b)),!(p!=null&&p.length)&&t.jsx(ce,{text:"Нет данных"}),t.jsx($o,{pages:c,condition:!!s&&!!(p!=null&&p.length),currentPage:r,setCurrentPage:d})]})},Tf=f.div`
    display: flex;
    align-items: center;
    gap: 5px;
    transition: 0.2s;
    padding: ${({closed:e})=>e?"0px":"10px"};
    width: 100%;
    height: ${({closed:e})=>e?"0px":"60px"};
    opacity: ${({closed:e})=>e?"0":"1"};
    visibility: ${({closed:e})=>e?"hidden":"visible"};
`,Ef=e=>{switch(e){case"date":return"date";case"rub":return"number";default:return"text"}},Sf=({search:e,setSearch:i})=>{var n,s;return t.jsx(Tf,{closed:!(e!=null&&e.column),children:t.jsx(Se,{value:(e==null?void 0:e.value)??"",setValue:o=>i(a=>a?(a.value=o,{...a}):null),width:"100%",type:Ef((n=e==null?void 0:e.column)==null?void 0:n.type),placeholder:(s=e==null?void 0:e.column)==null?void 0:s.title,leftIcon:t.jsx(Ee,{}),minWidth:"auto"})})},$f=(e,i)=>{if(!e)return{};const n=i.reduce((s,{field:o})=>(s[o]=[],s),{});return e==null||e.forEach(s=>{Object.entries(s).forEach(([o,a])=>{n[o]&&a&&n[o].push(a)})}),n};function Pf(e){return Object.keys(e).map(i=>({title:"",field:i}))}const Of=({footer:e,columns:i,data:n})=>{if(!e)return null;const s=e($f(n,i));return t.jsxs(t.Fragment,{children:[t.jsx(ue,{}),t.jsx(ra,{onRowClick:()=>null,columns:Pf(s),el:s,index:1})]})},Af=f.div`
    width: 100%;
    box-shadow: var(--schedule-shadow);
    border-radius: var(--brLight);
    color: var(--text);
    background: var(--form);
    overflow: hidden;
`,Rf=({columns:e,data:i,maxOnPage:n,onRowClick:s,footer:o,loading:a=!1})=>{const{sort:r,setSort:d,search:c,setSearch:p,resultData:h,filter:b,setFilter:x,filterList:u,setFilterList:g,onRemoveOne:m,onRemoveAll:v}=ff(i);return t.jsxs(Af,{children:[t.jsx(To,{setList:g,padding:"0 10px",list:u,onRemoveOne:m,onRemoveAll:v}),t.jsx(Sf,{search:c,setSearch:p}),t.jsx(vf,{sort:r,setSort:d,columns:e,search:c,setSearch:p,filter:b,setFilter:x}),t.jsx(kf,{loading:a,onRowClick:s,filter:b,columns:e,data:h,maxOnPage:n}),t.jsx(Of,{footer:o,data:i,columns:e})]})},Cf=f.div`
    display: flex;
    align-items: center;
    color: var(--text);
    justify-content: center;

    @media (max-width: 1000px) {
        align-items: flex-start;
        overflow-y: auto;
        height: 100%;
    }
`,Nf=f.div`
    display: flex;
    gap: 10px;
    align-items: center;
`,Gb=({isTeachers:e})=>{const{data:{listApplication:i,dataUserApplication:n},error:s}=lt.useApplications(),{open:o}=G();return t.jsx(zi,{load:()=>Ye.getApplicationsFx(),loading:!i,error:s,data:i,children:t.jsx(Cf,{children:t.jsxs(Mi,{maxWidth:"1450px",children:[t.jsx(se,{type:"info",title:"Информация",icon:t.jsx(ot,{}),children:"Данный сервис позволяет заказать необходимую справку, подать заявление, запрос. Статус (информация о степени готовности) заказанных справок меняется согласно действиям оператора. В колонке «Структурное подразделение, адрес» указывается название подразделения и адрес, куда необходимо приехать за готовым документом."}),t.jsx(Nf,{children:t.jsx(j,{onClick:()=>o(t.jsx(hf,{isTeachers:e,currentFormEducation:n==null?void 0:n.educationForm})),text:"Подать заявку",background:"var(--reallyBlue)",textColor:"#fff",icon:t.jsx(Ve,{}),width:"150px",minWidth:"150px",height:"36px",fixedInMobile:!1})}),t.jsx(Rf,{loading:!i,columns:hg(),data:i,maxOnPage:7})]})})})},If=f.div`
    display: flex;
    align-items: center;
    color: var(--text);
    justify-content: center;

    @media (max-width: 1000px) {
        align-items: flex-start;
        overflow-y: auto;
        height: 100%;
    }
`,Lf=f.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;

    .list {
        padding: 5px 5px 5px 0px;
        margin-top: 10px;
        overflow-y: auto;
        height: 100%;

        .links-wrapper {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;

            .link-list {
                display: flex;
                flex-direction: column;
                width: 100%;
                background: var(--schedule);
                box-shadow: var(--schedule-shadow);
                padding: 10px;
                border-radius: var(--brLight);

                .links {
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                    font-size: 0.9em;

                    & a {
                        text-decoration: none;
                        color: var(--blue);
                    }
                    .disabled-link {
                        cursor: not-allowed;
                        opacity: 0.5;
                        text-decoration: none;
                        pointer-events: none;
                    }
                }
            }
        }
    }

    @media (min-width: 1001px) {
        .list {
            .links-wrapper {
                .link-list {
                    padding: 5px;
                }
            }
        }
    }

    @media (max-width: 800px) {
        .list {
            .links-wrapper {
                .link-list {
                    width: 100%;
                }
            }
        }
    }
`,Yb=({})=>{const{data:{listApplication:e},error:i}=lt.useApplications(),{close:n}=G(),s=df(),[o,a]=l.useState(""),[r,d]=l.useState(s);return t.jsx(zi,{load:()=>Ye.getApplicationsFx(),loading:!e,error:i,data:e,children:t.jsx(If,{children:t.jsxs(Mi,{maxWidth:"750px",children:[t.jsx(se,{type:"info",title:"Информация",icon:t.jsx(ot,{}),children:"Данный сервис создан для упрощения оборота кадровых документов внутри Университета."}),t.jsxs(Lf,{children:[t.jsx(Y,{size:3,align:"left",bottomGap:!0,children:"Создать заявление"}),t.jsx(Zs,{whereToSearch:s,searchEngine:jo,setResult:d,placeholder:"Поиск заявления",setExternalValue:a}),t.jsx("div",{className:"list",children:t.jsxs("div",{className:"links-wrapper",children:[(r??s).map(c=>t.jsx("div",{className:"link-list",children:!c.disabled&&t.jsx("div",{className:"links",children:c.links.map(p=>p.isExternalLink?t.jsx("a",{href:p.link,target:p.isOpenInNewWindow?"_blank":"_self",rel:"noreferrer",children:p.title},p.title):t.jsx(Z,{to:p.link,onClick:n,children:p.title},p.link))})},c.title)),!(r!=null&&r.length)&&!!o.length&&t.jsx(ce,{text:`По запросу ${o} ничего не найдено`})]})})]})]})})})},Df=e=>e.data.reduce((i,n)=>{var s;if(!n.value)return i;if(n.type==="checkbox-docs"){const o=(s=n.items)==null?void 0:s.reduce((a,r)=>{for(let d=0;d<r.files.length;d++)a[(r==null?void 0:r.fieldName)+`[${d}]`]=r.files[d];return a},{});i=Object.assign({},i,o)}else if(n.type==="select")i[n.fieldName]=n.isSpecificSelect?n.value.id:n.value.title||null;else{const o=!n.value||typeof n.value!="object";i[n.fieldName]=o?n==null?void 0:n.value:n.value.title}return i},{});f.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--theme);
    z-index: 50;
`;f(At)`
    opacity: 0;
    animation: 0.5s defaultFadeIn forwards;
    animation-delay: 2s;
    height: 100%;
    padding: 20px;
`;const $n={isOpen:!1,pages:[],currentPage:0},zf=()=>C(Mf),la=P(),ca=P(),da=P(),pa=P(),Mf=te($n).on(la,(e,{pages:i})=>({isOpen:!0,pages:i,currentPage:0})).on(ca,e=>({pages:e.pages,currentPage:e.currentPage,isOpen:!1})).on(da,(e,{value:i})=>({...e,currentPage:i})).on(pa,()=>({...$n})),Wi={useStory:zf},Ue={open:la,close:ca,clearStore:pa,changeCurrentPage:da};f(Ae)`
    overflow: hidden;
    position: relative;
    background: ${({background:e})=>e??"var(--schedule)"};
    cursor: pointer;
    border-radius: var(--brLight);
    width: ${({width:e})=>e};
    height: ${({height:e})=>e};

    .title {
        position: absolute;
        bottom: 10px;
        left: 50%;
        transform: translateX(-50%);
        font-size: 0.8rem;
        font-weight: 500;
        color: ${({color:e})=>e??"var(--text)"};
    }
`;const Ff=f.strong`
    &:hover {
        text-decoration: underline;
        cursor: pointer;
    }
`,qb=({fio:e})=>{const{open:i}=G();return t.jsx(Ff,{onClick:()=>i(t.jsx(mo,{name:e,isMe:!1})),children:e})},Vi=f.div`
    display: flex;
    align-items: ${({alignItems:e})=>e??"center"};
    justify-content: center;
    height: ${({height:e})=>e??"auto"};
    min-height: ${({minHeight:e})=>e};
    color: var(--text);
    background: ${({background:e})=>e};
    padding: ${({padding:e})=>e};
    width: 100%;
`,Bf=({documents:e,optionalCheckbox:i,data:n,setData:s,optional:o,collapsed:a,confirmed:r})=>{const[d,c]=l.useState(r===void 0),[p,h]=l.useState(!a),[b,x]=l.useState(!1),u=()=>{if(n[0]===void 0&&!(i!=null&&i.value)&&(i!=null&&i.required))return V.evokePopUpMessage({message:"Не все необходимые поля заполнены",type:"failure",time:5e3});Array.isArray(n[0])?e?i!=null&&i.required?e.files.length&&e.required||i.value?(s(_=>(_.confirmed=!0,{..._})),c(!1),h(!1)):V.evokePopUpMessage({message:"Необходимо загрузить файл. Если у вас нет соответствующего документа, отметье это галочкой",type:"failure",time:5e3}):!d&&!n.find(_=>!!_.find(E=>!E.value&&E.required))||i!=null&&i.value&&!e.required||e.files.length||!e.required?(s(_=>(_.confirmed=!0,{..._})),c(!1),h(!1)):V.evokePopUpMessage({message:"Необходимо загрузить файл",type:"failure",time:5e3}):i!=null&&i.value&&i.required||!n.length||!n.find(_=>!!_.find(E=>!E.value&&E.required))&&!n.find(_=>!!_.find(E=>{var k;return E.value.id==="not-chosen"&&!!((k=E.items)!=null&&k.length)}))?(s(_=>(_.confirmed=!0,{..._})),c(!1),h(!1)):V.evokePopUpMessage({message:"Не все необходимые поля заполнены",type:"failure",time:5e3}):e?i!=null&&i.required?e.files.length&&e.required||i.value?(s(_=>(_.confirmed=!0,{..._})),c(!1),h(!1)):V.evokePopUpMessage({message:"Необходимо загрузить файл. Если у вас нет соответствующего документа, отметьте это галочкой",type:"failure",time:5e3}):!d&&!n.find(_=>!_.value&&_.required)||i!=null&&i.value&&!e.required||e.files.length||!e.required?(s(_=>(_.confirmed=!0,{..._})),c(!1),h(!1)):V.evokePopUpMessage({message:"Необходимо загрузить файл",type:"failure",time:5e3}):i!=null&&i.value&&i.required||!n.find(_=>!_.value&&_.required)&&!n.find(_=>{var E;return _.value===null&&!!((E=_.items)!=null&&E.length)})?(s(_=>(_.confirmed=!0,{..._})),c(!1),h(!1)):V.evokePopUpMessage({message:"Не все необходимые поля заполнены",type:"failure",time:5e3})},g=()=>{s(_=>{const E=_.default[0].map(k=>({fieldName:k.fieldName??"",title:k.title,value:k.type==="select"&&(k!=null&&k.items)?null:"",type:k.type,items:k.items,width:k.width,required:k.required}));return{..._,data:[..._.data,E]}})},m=_=>{s(E=>{const k=E.data.filter((q,$)=>_!==$);return{...E,data:k}})},v=_=>{s(E=>(E.documents&&(E.documents.files=[..._]),{...E}))},S=()=>{i&&(i.value=!i.value),s(_=>({..._,optionalCheckbox:i}))};return l.useEffect(()=>{h(!b&&o?!1:!a)},[b,a]),{openArea:p,changeInputArea:d,included:b,setOpenArea:h,setIncluded:x,setChangeInputArea:c,handleRemove:m,handleAddNew:g,handleLoadFiles:v,handleConfirm:u,handleCheckbox:S}},Uf=f.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    transition: 0.2s row-gap;
    row-gap: ${({openArea:e})=>e?"15px":"0"};

    .inputs {
        display: flex;
        flex-direction: column;
        row-gap: 15px;
        transition: 0.2s height, 0.2s opacity, 0.2s visibility;
        height: ${({openArea:e})=>e?"auto":"0"};
        opacity: ${({openArea:e})=>e?"1":"0"};
        visibility: ${({openArea:e})=>e?"visible":"hidden"};

        .data-line {
            display: flex;
            align-items: flex-end;
            column-gap: 5px;
        }
    }

    /* @media (max-width: 600px) {
		 .inputs {
			  .data-line {
					display: flex;
					row-gap: 5px;
					column-gap: 5px;
					flex-direction: column;
			  }
		 }
	} */
`,Hf=f.div``,Wf=({title:e,items:i,setChecked:n,setFiles:s})=>t.jsxs(Hf,{children:[t.jsx(Y,{size:5,align:"left",bottomGap:!0,children:e}),i.map(({value:o,title:a,files:r,maxFiles:d,checkboxCondition:c,maxFileSizeInMegaBytes:p},h)=>t.jsx(Xp,{checkbox:{checked:o,setChecked:()=>n(o,h),text:a},loadfile:{files:r,maxFiles:d,maxFileSizeInMegaBytes:p,isActive:!0,setFiles:b=>s(b,h)},docVisible:c==="straight"?o:!o},a))]}),Vf=({title:e,buttons:i,required:n=!1,current:s,setCurrent:o,isSpecificRadio:a=!1})=>t.jsxs("div",{children:[t.jsx(Y,{visible:!!e,size:5,align:"left",bottomGap:!0,required:n,children:e}),t.jsxs(pe,{children:[!a&&t.jsx(Le,{text:"Не выбрано",checked:s===null,setChecked:()=>o(null)},-1),i.map(r=>{const{id:d,title:c}=r;return t.jsx(Le,{text:c,checked:d===(s==null?void 0:s.id),setChecked:()=>o({id:d,title:a?d.toString():c})},d)})]})]}),Gf=f.div`
    width: 100%;
    text-align: start;
    margin-top: -10px;
    margin-bottom: 10px;
    .title {
        font-size: 0.83em;
        font-weight: bold;
    }
    .value {
        font-size: 0.83em;
        padding-left: 10px;
    }

    @media (max-width: 400px) {
        .date-interval-inputs {
            flex-direction: column;
        }
    }
`,Yf=({title:e,value:i,visible:n})=>n?t.jsxs(Gf,{children:[t.jsxs("span",{className:"title",children:[e,":"]})," ",t.jsx("span",{className:"value",children:i})]}):null,Pn=e=>{const{value:i,required:n,width:s,indexI:o,indexJ:a,type:r,items:d,title:c,documents:p,changeInputArea:h,setData:b,mask:x,editable:u,placeholder:g,autocomplete:m,isSpecificRadio:v,specialType:S,specialFieldsNameConfig:_,minValueInput:E,maxValueInput:k,diff:q,visible:$}=e,N=u??(h&&!p),[Q,z]=l.useState(!0),J=(F,K,Xe)=>{b(le=>(Array.isArray(le.data[0])?le.data[K][Xe??0].value=F:le.data[K].type==="checkbox-docs"?le.data[K].items[Xe??0].value=!!F:le.data[K].value=F,{...le}))},Re=(F,K,Xe)=>{b(le=>(Array.isArray(le.data[0])?le.data[K][Xe??0].value=F:le.data[K].value=F,{...le}))},Ce=(F,K,Xe)=>{b(le=>(le.data[K].items[Xe??0].files=F,{...le}))},oi=F=>{b(K=>(K.data[o].value=F,{...K}))},Nt=F=>{b(K=>(K.data[o].value=F,{...K}))};return _&&S&&!Object.values(_).includes(S)?null:r!=="select"&&r!=="multiselect"||!d?r==="checkbox"?t.jsx(Le,{text:c,isActive:N,checked:i,setChecked:F=>J(F,o,a)}):r==="textarea"?t.jsx($d,{value:i,title:c,setValue:F=>J(F,o,a),isActive:N,textAreaAppearance:N,placeholder:g??c,required:n,width:s}):r==="checkbox-docs"?t.jsx(Wf,{title:c,items:d,setChecked:(F,K)=>J(!F,o,K),setFiles:(F,K)=>Ce(F,o,K)}):r==="date-interval"?t.jsx(Qp,{title:c,required:n,dates:i,setDates:F=>Nt(F),valid:Q,setValid:z,minValue:E,diff:q}):r==="simple-text"?t.jsx(Yf,{title:c,value:i,visible:$}):r==="radio"?t.jsx(Vf,{buttons:d,title:c,required:n,current:i,setCurrent:oi,isSpecificRadio:v}):t.jsx(Se,{value:i,title:c,minValue:E,maxValue:k,setValue:F=>J(F,o,a),type:r,isActive:N,inputAppearance:N,placeholder:g??c,required:n,mask:x,width:s,autocomplete:m}):t.jsx(Ui,{items:d,setSelected:F=>Re(F,o,a),selected:i,isActive:N,title:c,width:s,multiple:r==="multiselect",required:n})},qf=f.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    user-select: none;
    cursor: pointer;
    position: sticky;
    top: -2px;
    background: var(--schedule);
    z-index: 3;
    width: 100%;

    .title-and-icon {
        display: flex;
        align-items: center;
    }

    @media (max-width: 1000px) {
        background: transparent;
    }
`,Kf=({title:e,included:i,optional:n,confirmed:s,setOpenArea:o,setIncluded:a,collapsed:r})=>t.jsxs(qf,{onClick:()=>!r&&(i||!n)&&o(d=>!d),children:[t.jsxs("div",{className:"title-and-icon",children:[t.jsx(Y,{size:4,align:"left",icon:s!==void 0?s?t.jsx(sl,{}):t.jsx(ol,{}):void 0,iconColor:s?"var(--green)":"var(--red)",children:e}),n&&t.jsx(Le,{checked:i,setChecked:a})]}),t.jsx(j,{icon:t.jsx(Mt,{}),onClick:()=>null,background:"transparent"})]}),Xf=({confirmed:e,changeInputArea:i,setData:n,setChangeInputArea:s,handleConfirm:o})=>e?t.jsx(j,{onClick:()=>n(a=>(a.confirmed=!1,{...a})),text:"Отменить",icon:t.jsx(We,{}),textColor:w.red.main,hoverBackground:w.red.transparent3,background:"transparent",width:"130px"}):i?t.jsxs(t.Fragment,{children:[t.jsx(j,{onClick:o,text:"Сохранить",icon:t.jsx(al,{}),textColor:w.blue.main,hoverBackground:w.blue.transparent3,background:"transparent",width:"130px"}),t.jsx(j,{onClick:()=>s(!1),text:"Отменить",icon:t.jsx(We,{}),textColor:w.red.main,hoverBackground:w.red.transparent3,background:"transparent",width:"130px"})]}):t.jsxs(t.Fragment,{children:[t.jsx(j,{onClick:o,text:"Подтвердить",icon:t.jsx(rl,{}),textColor:w.green.main,hoverBackground:w.green.transparent3,background:"transparent",width:"130px"}),t.jsx(j,{onClick:()=>s(!0),text:"Изменить",icon:t.jsx(ll,{}),textColor:w.blue.main,hoverBackground:w.blue.transparent3,background:"transparent",width:"130px"})]}),Jf=e=>e.confirmed===void 0?null:t.jsx(pe,{direction:"horizontal",horizontalAlign:"right",children:t.jsx(Xf,{...e,confirmed:e.confirmed})}),Qf=({title:e,hint:i,alert:n,data:s,optionalCheckbox:o,documents:a,setData:r,confirmed:d,optional:c=!1,addNew:p=!1,divider:h,collapsed:b,links:x,specialFieldsName:u})=>{const{openArea:g,changeInputArea:m,included:v,setOpenArea:S,setIncluded:_,setChangeInputArea:E,handleRemove:k,handleAddNew:q,handleLoadFiles:$,handleConfirm:N,handleCheckbox:Q}=Bf({documents:a,optionalCheckbox:o,data:s,setData:r,optional:c,collapsed:b,confirmed:d});return t.jsxs(t.Fragment,{children:[t.jsxs(Uf,{openArea:g,children:[t.jsx(Kf,{title:e,included:v,optional:c,confirmed:d,setOpenArea:S,setIncluded:_,collapsed:b}),t.jsxs("div",{className:"inputs",children:[t.jsx(se,{type:"alert",visible:!!n,icon:t.jsx(jt,{}),children:n}),t.jsx(se,{type:"info",visible:!!i&&(m||d===void 0),title:"Как заполнить",icon:t.jsx(ot,{}),children:i}),Array.isArray(s[0])?s.map((z,J)=>t.jsxs("div",{className:"data-line",children:[z.map((Re,Ce)=>t.jsx(Pn,{documents:a,changeInputArea:m&&!(o!=null&&o.value),setData:r,indexI:J,indexJ:Ce,specialFieldsNameConfig:u,...Re},Ce)),m&&p&&t.jsx(j,{icon:t.jsx(cl,{}),textColor:w.red.main,onClick:()=>k(J),background:"transparent",isActive:!(o!=null&&o.value)})]},J)):s.map((z,J)=>t.jsx(Pn,{documents:a,changeInputArea:m&&!(o!=null&&o.value),setData:r,indexI:J,specialFieldsNameConfig:u,...z},J)),p&&m&&t.jsx(j,{icon:t.jsx(dl,{}),text:"Добавить",onClick:q,background:"transparent",isActive:!(o!=null&&o.value)}),!!a&&m&&t.jsx(no,{files:a.files,setFiles:z=>$(z),maxFileSizeInMegaBytes:a.maxFileSizeInMegaBytes,maxFiles:a.maxFiles,formats:a.allowedTypes,isActive:a.checkboxCondition?a.checkboxCondition==="straight"?!!(o!=null&&o.value):!(o!=null&&o.value):!0}),(x==null?void 0:x.length)&&x.map(z=>l.createElement(Hd,{...z,key:z.title})),t.jsx(Le,{visible:!!o&&(o.visible??!0),text:o==null?void 0:o.title,isActive:(o==null?void 0:o.editable)||m,checked:(o==null?void 0:o.value)??!1,setChecked:Q}),t.jsx(Jf,{confirmed:d,changeInputArea:m,setData:r,setChangeInputArea:E,handleConfirm:N})]})]}),h&&t.jsx(ue,{})]})},Zf=f.div`
    color: #fff;
    cursor: pointer;
    background: ${({reached:e})=>e?w.green.main:w.grey.main};
    outline: 6px solid
        ${({reached:e,current:i})=>i?w.blue.transparent1:e?w.green.transparent3:w.grey.transparent3};
    min-width: 30px;
    min-height: 30px;
    margin: 6px;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.8em;
    font-weight: bold;
`,ex=f.div`
    display: flex;
    margin-bottom: -20px;
`,tx=f.div`
    width: ${({lastElement:e})=>e?"42px":"100%"};
    display: flex;
    align-items: center;
`,ix=({stagesConfig:e})=>{const[i,n]=l.useState(0),[s,o]=l.useState({});l.useEffect(()=>{a(0)},[]);const a=r=>{o(d=>({...d,[i]:Ze(e[i][0].dataForm)})),n(r)};return t.jsxs(t.Fragment,{children:[t.jsx(ex,{children:e.map((r,d)=>t.jsxs(tx,{lastElement:d===e.length-1,children:[t.jsx(Zf,{current:d===i,onClick:()=>a(d),reached:s[d],children:d+1}),d!==e.length-1&&t.jsx(bd,{direction:"horizontal",reached:s[d],filled:100,distance:40})]},d))}),t.jsx(t.Fragment,{children:e[i].map((r,d)=>l.createElement(Qf,{...r.dataForm,setData:r.setDataForm,key:d}))})]})},nx=()=>({title:"Дополнительно",data:[{title:"Комментарий",type:"textarea",fieldName:"comment",value:"",editable:!0}]}),sx=()=>({title:"Период предоставления льготы",hint:"Период предоставления льготы по плате за пользование жилым помещением соответствует дате подачи заявки и дате окончания действия документа",data:[{title:"Начало периода соответствия льготной категории",type:"date",value:"",fieldName:"beginning_of_benefit_period",editable:!0,required:!0},{title:"Окончание периода соответствия льготной категории",type:"date",value:"",fieldName:"end_of_benefit_period",editable:!0,required:!0},{title:"Отсутствует срок действия документа (бессрочный)",type:"checkbox",value:"",fieldName:"is_indefinite",editable:!0,required:!1}],documents:{files:[],required:!0,checkboxCondition:"reverse",fieldName:"invalidFiles",maxFiles:1,allowedTypes:["application/pdf"]}}),ox=()=>({title:"Адрес регистрации",data:[],hint:"Необходимо приложить скан-копию 2-3 страниц паспорта, а также страниц с регистрацией. Для иностранных студентов обязательно приложить перевод паспорта.",documents:{files:[],required:!0,fieldName:"registrationFiles",maxFiles:1,allowedTypes:["application/pdf"]}}),ax=async(e,i,n,s,o=!1)=>{n(!0);const a=i.map(p=>{if(o)return Df(p);if(Array.isArray(p.data[0])){const h=p.data.map(x=>Object.assign({},...x==null?void 0:x.map(u=>On(u)))),b={};return b[e]=JSON.stringify(h),b}else return p.data.map(h=>On(h))}).flat(),r=i.map(p=>{var b,x;const h={};if((b=p.documents)!=null&&b.fieldName)for(let u=0;u<p.documents.files.length;u++)h[((x=p.documents)==null?void 0:x.fieldName)+`[${u}]`]=p.documents.files[u];return h}),d=i.map(p=>{var b,x;const h={};return(b=p.optionalCheckbox)!=null&&b.fieldName&&(h[(x=p.optionalCheckbox)==null?void 0:x.fieldName]=p.optionalCheckbox.value),h}),c=Object.assign({},...a,...r,...d);try{await Ye.postApplicationFx({formId:e,args:c}),n(!1),s(!0)}catch(p){n(!1),V.evokePopUpMessage({message:`Не удалось отправить форму. Ошибка: ${p}`,type:"failure",time:3e4})}},On=e=>{var n;const i={};return i[(e==null?void 0:e.fieldName)??""]=rx(e),e.type==="multiselect"&&(i[(e==null?void 0:e.fieldName)??""]=JSON.stringify((e==null?void 0:e.value).map(s=>s.title))),e.type==="checkbox-docs"?(n=e.items)==null?void 0:n.reduce((s,o)=>{for(let a=0;a<o.files.length;a++)s[(o==null?void 0:o.fieldName)+`[${a}]`]=o.files[a];return s},{}):i},rx=e=>!e.value||typeof e.value!="object"?e==null?void 0:e.value:e.value.title,lx=f.div`
    display: flex;
    align-items: ${({isDone:e})=>e?"center":"flex-start"};
    justify-content: center;
    width: 100%;
    height: ${({isDone:e})=>e&&"100%"};
    padding: 10px;
    color: var(--text);
`;var ua=(e=>(e.USG_GETHOSTEL_O="usg_gethostel_o",e.USG_GETHOSTEL_OOZ="usg_gethostel_ooz",e.USG_GETHOSTEL_Z="usg_gethostel_z",e.USG_GETHOSTEL_AO="usg_gethostel_ao",e.USG_GETHOSTEL_BENEFIT="usg_gethostel_benefit",e.USG_GETHOSTEL_FAMILY="usg_gethostel_family",e.USG_CONTR_TERMINATION="usg_contr_termination",e.USG_RELOCATION_INNER="usg_relocation_inner",e.USG_RELOCATION="usg_relocation",e.OBUCH="obuch",e.STATUS_SOBES="status_sobes",e.SPRVIZOV="sprvizov",e.PERS_DATA="pers_data",e.PROPUSK_RESTORE="propusk_restore",e.PASSPORT_DATA="passport_data",e.DIPL_OTL="dipl_otl",e.STATUS_REGULAR="status_regular",e.OKID_LICAKKRED="okid_licakkred",e.MILDOCS="mildocs",e.VOEN_UCH="voen_uch",e.PR_DONATE="pr_donate",e.PR_MATPOM="pr_matpom",e.PR_SOCSTIP="pr_socstip",e.HIGH_SCHOLARSHIP="high_scholarship",e.DOP_SOGL="dop_sogl",e.SEND_PAYMENT_EDU="send_payment_edu",e.FREE_REQUEST="free_request",e.CRS_VACATIONS="crs_vacations",e.CRS_ACADEMVAC="crs_academvac",e.CRS_EXPULSION="crs_expulsion",e.CRS_ATTESTAT="crs_attestat",e.MEDICAL_CERT="postRequestMedicalCertificate",e.WORK_TRANSFER="",e.EXTRA_HOLIDAY_COLL="",e.HOLIDAY_PLANNING="",e.HOLIDAY_WORK="",e.DISMISSAL="",e.HOLIDAY_POSTPONED="",e.PART_TIME_EMPLOYMENT="",e))(ua||{}),cx=(e=>(e.CONTACT_INFO_ACTUALIZATION="contact-info-actualization",e.DATA_VERIFICATION_ROUTE="data-verification",e.ISSUANCE_OF_LICENSES="issuance-of-licenses",e.GETTING_COMPUTER_EQUIPMENT="getting-computer-equipment",e.CONNECTING_COMPUTER="connecting-computer",e.PRINTER_MAINTENANCE="printer-maintenance",e.QUESTION_SED="question-sed",e.QUESTION_PERSONAL_ACCOUNT="question-personal-account",e.OTHER_IT_SERVICES="other-it-services",e.CERTIFICATE_FROM_PLACE_OF_WORK="certificate-from-the-place-of-work",e.VISA_CERTIFICATE="visa-certificate",e.CERTIFICATE_OF_WORK_EXPERIENCE="certificate-of-work-experience",e.NUMBER_OF_UNUSED_VACATION_DAYS="number-of-unused-vacation-days",e.COPY_OF_EMPLOYMENT_RECORD="copy-of-the-employment-record",e.COPIES_OF_DOCUMENTS_FROM_PERSONAL_FILE="copies-of-documents-from-the-personal-file",e.WORK_ON_TERMS_OF_EXTERNAL_CONCURRENCY="work-on-the-terms-of-external-concurrency",e.CERTIFICATE_TIME_PARENTAL_LEAVE="certificate-time-parental-leave",e.COURIER="courier",e.PERSONA_INCOME_TAX_REFERENCE="persona-income-tax-reference",e.PAYMENT_OF_CHILD_BIRTH_ALLOWANCE="payment-of-child-birth-allowance",e.PAYMENT_FOR_CHILD_CARE="payment-for-child-care",e))(cx||{});const dx=[{id:0,title:"имею постоянную регистрацию за пределами А-107 или не имею постоянную регистрацию"},{id:1,title:"имею постоянную регистрацию в пределах А-107"}],px=e=>{const{surname:i,name:n,patronymic:s,group:o,email:a,phone:r}=e;return{title:"Контактная информация",data:[{title:"ФИО",fieldName:"fio",value:i+" "+n+" "+s,editable:!1},{title:"Учебная группа",fieldName:"group",type:"tel",value:o,editable:!1},{title:"Электронная почта",fieldName:"email",type:"email",value:a,editable:!0,required:!0},{title:"Телефон",fieldName:"phone",type:"tel",value:r,editable:!0,required:!0},{title:"Причина предоставления (в связи с)",type:"select",width:"100%",value:null,fieldName:"reason",placeholder:"укажите причину",editable:!0,required:!0,items:dx},{title:"Приоритетное общежитие",fieldName:"priority_hostel",value:"",type:"select",width:"100%",editable:!0,required:!0,items:[{id:0,title:"1 общежитие"},{id:1,title:"2 общежитие"},{id:2,title:"3 общежитие"},{id:3,title:"4 общежитие"},{id:4,title:"5 общежитие"},{id:5,title:"6 общежитие"},{id:6,title:"7 общежитие"},{id:7,title:"8 общежитие"},{id:8,title:"9 общежитие"},{id:9,title:"10 общежитие"}]}]}},ux=()=>{var z;const[e,i]=l.useState(null),[n,s]=l.useState(Lt.kvdCert),[o,a]=l.useState(Lt.fluorographyCert),[r,d]=l.useState(Lt.vichRwCert),[c,p]=l.useState(Lt.graftCert),{data:{dataUserApplication:h}}=lt.useApplications(),{data:{user:b}}=oe.useUser(),[x,u]=l.useState(!1),[g,m]=l.useState(!1),[v,S]=l.useState(null),[_,E]=l.useState(null),[k,q]=l.useState(null),$=x??!1;if((b==null?void 0:b.educationForm)!=="Недоступен")return t.jsx(ce,{text:"Сервис временно недоступен в связи с отсутствием свободных мест"});const N=!!e&&!!_&&!!v&&!!k;if(l.useEffect(()=>{h&&(i(px(h)),S(sx()),E(ox()),q(nx()))},[h]),!N)return null;const Q=[[{dataForm:e,setDataForm:i}],[{dataForm:_,setDataForm:E}],[{dataForm:n,setDataForm:s}],[{dataForm:o,setDataForm:a}],[{dataForm:r,setDataForm:d}],[{dataForm:c,setDataForm:p}]];return t.jsx(lx,{isDone:$,children:t.jsxs(Mi,{children:[t.jsx(Y,{size:4,align:"left",children:"Предоставление права проживания (очно-заочная форма)"}),t.jsx(ix,{stagesConfig:Q}),t.jsx(Ds,{text:"Отправить",action:()=>ax(ua.USG_GETHOSTEL_OOZ,[e,_,v,k,n,o,r,c],m,u),isLoading:g,completed:x,setCompleted:u,repeatable:!1,buttonSuccessText:"Отправлено",isDone:$,isActive:(((z=e.optionalCheckbox)==null?void 0:z.value)??!0)&&Ze(e)&&Ze(o)&&Ze(r)&&Ze(c)&&Ze(n),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})},hx=l.lazy(()=>y(()=>import("./index-debd676f.js"),["assets/index-debd676f.js","assets/vendor-292fea82.js"])),gx=l.lazy(()=>y(()=>import("./index-75646db4.js"),["assets/index-75646db4.js","assets/vendor-292fea82.js"])),fx=l.lazy(()=>y(()=>import("./index-16bfdfbe.js"),["assets/index-16bfdfbe.js","assets/vendor-292fea82.js"])),xx=l.lazy(()=>y(()=>import("./index-eda49f3e.js"),["assets/index-eda49f3e.js","assets/vendor-292fea82.js"]));l.lazy(()=>y(()=>import("./index-4f4b3261.js"),["assets/index-4f4b3261.js","assets/vendor-292fea82.js"]));const mx=l.lazy(()=>y(()=>import("./index-f7cd5933.js"),["assets/index-f7cd5933.js","assets/vendor-292fea82.js","assets/get-method-obtaining-fields-89788160.js","assets/find-current-in-select-ba4611d5.js","assets/get-student-subdivisions-5a2f2c8d.js","assets/get-divisions-96cfa1b1.js","assets/get-method-obstaing-c0726de9.js"])),bx=l.lazy(()=>y(()=>import("./index-dea6783d.js"),["assets/index-dea6783d.js","assets/vendor-292fea82.js","assets/get-method-obtaining-fields-89788160.js","assets/get-student-subdivisions-5a2f2c8d.js","assets/get-divisions-96cfa1b1.js","assets/get-method-obstaing-c0726de9.js"])),vx=l.lazy(()=>y(()=>import("./index-564b4b43.js"),["assets/index-564b4b43.js","assets/vendor-292fea82.js","assets/get-method-obtaining-fields-89788160.js","assets/get-student-subdivisions-5a2f2c8d.js","assets/get-divisions-96cfa1b1.js","assets/get-method-obstaing-c0726de9.js"])),_x=l.lazy(()=>y(()=>import("./index-0a22a67a.js"),["assets/index-0a22a67a.js","assets/vendor-292fea82.js"])),yx=l.lazy(()=>y(()=>import("./index-5f5b21a7.js"),["assets/index-5f5b21a7.js","assets/vendor-292fea82.js"])),wx=l.lazy(()=>y(()=>import("./index-4484ce16.js"),["assets/index-4484ce16.js","assets/vendor-292fea82.js"])),jx=l.lazy(()=>y(()=>import("./index-86af3834.js"),["assets/index-86af3834.js","assets/vendor-292fea82.js"])),kx=l.lazy(()=>y(()=>import("./index-81617bef.js"),["assets/index-81617bef.js","assets/vendor-292fea82.js"])),Tx=l.lazy(()=>y(()=>import("./index-3a227c60.js"),["assets/index-3a227c60.js","assets/vendor-292fea82.js"])),Ex=l.lazy(()=>y(()=>import("./index-4a95c1a4.js"),["assets/index-4a95c1a4.js","assets/vendor-292fea82.js"]));l.lazy(()=>y(()=>import("./index-8d7edf68.js"),["assets/index-8d7edf68.js","assets/vendor-292fea82.js"]));const Sx=l.lazy(()=>y(()=>import("./index-eb603df2.js"),["assets/index-eb603df2.js","assets/vendor-292fea82.js"])),$x=l.lazy(()=>y(()=>import("./index-609cecda.js"),["assets/index-609cecda.js","assets/vendor-292fea82.js"]));l.lazy(()=>y(()=>import("./index-d2c07d53.js"),["assets/index-d2c07d53.js","assets/vendor-292fea82.js"]));const Px=l.lazy(()=>y(()=>import("./index-fa7f7937.js"),["assets/index-fa7f7937.js","assets/vendor-292fea82.js"]));l.lazy(()=>y(()=>import("./index-e05f4e1f.js"),["assets/index-e05f4e1f.js","assets/vendor-292fea82.js"]));l.lazy(()=>y(()=>import("./index-caee363e.js"),["assets/index-caee363e.js","assets/vendor-292fea82.js"]));l.lazy(()=>y(()=>import("./index-0784e4da.js"),["assets/index-0784e4da.js","assets/vendor-292fea82.js"]));const Ox=l.lazy(()=>y(()=>import("./index-4e6a4960.js"),["assets/index-4e6a4960.js","assets/vendor-292fea82.js"])),Ax=l.lazy(()=>y(()=>import("./index-e6183a7c.js"),["assets/index-e6183a7c.js","assets/vendor-292fea82.js","assets/get-method-obtaining-fields-89788160.js","assets/get-student-subdivisions-5a2f2c8d.js","assets/get-divisions-96cfa1b1.js","assets/get-method-obstaing-c0726de9.js"])),Rx=l.lazy(()=>y(()=>import("./index-dabce345.js"),["assets/index-dabce345.js","assets/vendor-292fea82.js","assets/get-method-obtaining-fields-89788160.js","assets/get-student-subdivisions-5a2f2c8d.js","assets/get-divisions-96cfa1b1.js","assets/get-method-obstaing-c0726de9.js"])),Cx=l.lazy(()=>y(()=>import("./index-802cea06.js"),["assets/index-802cea06.js","assets/vendor-292fea82.js"])),Nx=l.lazy(()=>y(()=>import("./index-37aaf3ae.js"),["assets/index-37aaf3ae.js","assets/vendor-292fea82.js"])),Ix=l.lazy(()=>y(()=>import("./index-600679bd.js"),["assets/index-600679bd.js","assets/vendor-292fea82.js"])),Lx=l.lazy(()=>y(()=>import("./index-4f2f0ef1.js"),["assets/index-4f2f0ef1.js","assets/vendor-292fea82.js"]));l.lazy(()=>y(()=>import("./index-b6b3ac5b.js"),["assets/index-b6b3ac5b.js","assets/vendor-292fea82.js"]));const Dx=l.lazy(()=>y(()=>import("./index-a219cba5.js"),["assets/index-a219cba5.js","assets/vendor-292fea82.js"])),zx=l.lazy(()=>y(()=>import("./index-5d7549c4.js"),["assets/index-5d7549c4.js","assets/vendor-292fea82.js"])),Mx=l.lazy(()=>y(()=>import("./index-c0c83bf4.js"),["assets/index-c0c83bf4.js","assets/vendor-292fea82.js","assets/get-divisions-96cfa1b1.js"])),T="/applications",Fx="/application-for-superior-room",Bx="/acad-performance",Ux="/dormitory",ha=T+"/clarification-of-passport-data",ga=T+"/arbitrary-request",fa=T+"/social-scollarship",xa=T+"/certificate-of-attendance",ma=T+"/social-agencies",ba=T+"/paper-call",va=T+"/regular-accommodation",_a=T+"/full-time-part-time-form",ya=T+"/accommodation-correspondence-form",wa=T+"/academic-leave-accommodation",ja=T+"/preferential-accommodation",ka=T+"/family-room",Ta=T+"/termination-of-employment-contract",Ea=T+"/relocation-inside-hostel",Sa=T+"/relocation-to-another-hostel",ki=T+"/payment-recipient",$a=T+"/restoring-the-magnetic-pass",Pa=T+"/retake-for-diploma",Oa=T+"/military-registration-documents",Aa=T+"/financial-support",Ra=T+"/financial-assistance",Ca=T+"/increased-state-academic-scholarship",Na=T+"/changing-personal-data",Ia=T+"/student-status",La=T+"/state-accreditation",Hx=T+"/military-registration-card",Da=T+"/holidays-after-training",za=T+"/provision-academic-leave",Ma=T+"/independently-deducted",Fa=T+"/extension-attestation",Fe=()=>ke({oldVersionUrl:"/sprav"}),et=()=>({applications:{id:"applications",title:"Цифровые сервисы",icon:t.jsx(I,{}),path:T,Component:yx,color:"red",isTemplate:!1,group:"OTHER",keywords:["справки","справка","заявления","заявление"],planeHeader:!0},...Lr,dormitory:{id:"dormitory",title:"Список ожидания на заселение в общежитие",icon:t.jsx(Ji,{}),path:Ux,Component:fx,color:"blue",isTemplate:!1,group:"FINANCES_DOCS",show:!0},"acad-performance":{id:"acad-performance",title:"Успеваемость",icon:t.jsx(pl,{}),path:Bx,Component:gx,color:"green",isTemplate:!1,group:"LEARNING_ACTIVITIES",keywords:["оценки","экзамены","зачеты"]},"project-activity":{id:"project-activity",title:"Проектная деятельность",icon:t.jsx(rs,{}),path:Rr,Component:wx,color:"orange",isTemplate:!1,group:"LEARNING_ACTIVITIES",keywords:["пд"]},"helpful-information":{id:"helpful-information",title:"Полезная информация",icon:t.jsx(ul,{}),path:Ir,Component:Bi,color:"blue",isTemplate:!0,group:"GENERAL"},"application-for-superior-room":{id:"application-for-superior-room",title:"Заявка на комнату повышенной комфортности",icon:t.jsx(Ji,{}),path:Fx,Component:hx,color:"blue",isTemplate:!1,group:"GENERAL",show:!1}}),Ti=()=>({...Dr,"clarification-of-passport-data":{id:"clarification-of-passport-data",title:"Уточнение паспортных данных",icon:t.jsx(Ht,{}),path:ha,Component:xx,color:"blue",isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:T},"arbitrary-request":{id:"arbitrary-request",title:"Произвольный запрос",icon:t.jsx(Ht,{}),path:ga,Component:Mx,color:"blue",isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:T},"social-scollarship":{id:"social-scollarship",title:"Социальная стипендия",icon:t.jsx(B,{}),path:fa,Component:Fe,color:"blue",isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:T},"certificate-of-attendance":{id:"certificate-of-attendance",title:"Сертификат об обучении",icon:t.jsx(B,{}),path:xa,Component:mx,color:"blue",isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:T},"social-agencies":{id:"social-agencies",title:"Справка в социальные учреждения",icon:t.jsx(B,{}),path:ma,Component:bx,color:"blue",isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:T},"paper-call":{id:"paper-call",title:"Справка-вызов",icon:t.jsx(B,{}),path:ba,Component:vx,color:"blue",isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:T},"regular-accommodation":{id:"regular-accommodation",title:"Предоставление права проживания (очная форма)",icon:B,path:va,Component:_x,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:T},"full-time-part-time-form":{id:"full-time-part-time-form",title:"Предоставление права проживания (очно-заочная форма)",icon:B,path:_a,Component:ux,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:T},"accommodation-correspondence-form":{id:"accommodation-correspondence-form",title:"Предоставление права проживания (заочная форма)",icon:B,path:ya,Component:Dx,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:T},"academic-leave-accommodation":{id:"academic-leave-accommodation",title:"Предоставление права проживания в период академического отпуска",icon:B,path:wa,Component:jx,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:T},"preferential-accommodation":{id:"preferential-accommodation",title:"Предоставление права проживания льготной категории граждан",icon:B,path:ja,Component:kx,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:T},"family-room":{id:"family-room",title:"Предоставление права проживания в семейной комнате",icon:B,path:ka,Component:zx,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:T},"termination-of-employment-contract":{id:"termination-of-employment-contract",title:"Расторжение договора найма",icon:B,path:Ta,Component:Tx,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:T},"relocation-inside-hostel":{id:"relocation-inside-hostel",title:"Переселение внутри общежития",icon:B,path:Ea,Component:Ex,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:T},"relocation-to-another-hostel":{id:"relocation-to-another-hostel",title:"Переселение в другое общежитие (Подача заявок доступна с 08.06.2023 по 15.06.2023)",icon:B,path:Sa,Component:Fe,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:T},"payment-recipient":{id:"payment-recipient",title:"Отправка квитанции об оплате",icon:B,path:ki,Component:Sx,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:T},"restoring-the-magnetic-pass":{id:"restoring-the-magnetic-pass",title:"Запрос на восстановление магнитного пропуска",icon:B,path:$a,Component:$x,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:T},"military-registration-documents":{id:"military-registration-documents",title:"Отправить документы воинского учета",icon:B,path:Oa,Component:Fe,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:T},"retake-for-diploma":{id:"retake-for-diploma",title:"Заявление на пересдачу для получения диплома с отличием",icon:B,path:Pa,Component:Px,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:T},"increased-state-academic-scholarship":{id:"increased-state-academic-scholarship",title:"Получение повышенной государственной академической стипендии",icon:B,path:Ca,Component:Fe,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:T},"financial-support":{id:"financial-support",title:"Оформить материальную поддержку остронуждающимся студентам (Дотацию)",icon:B,path:Aa,Component:Fe,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:T},"financial-assistance":{id:"financial-assistance",title:"Финансовая поддержка",icon:B,path:Ra,Component:Fe,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:T},"changing-personal-data":{id:"changing-personal-data",title:"Запрос на изменение персональных данных",icon:B,path:Na,Component:Ox,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:T},"student-status":{id:"student-status",title:"Справка о прохождении обучения в университете (о статусе обучающегося) по месту требования",icon:B,path:Ia,Component:Ax,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:T},"state-accreditation":{id:"state-accreditation",title:"Выдача лицензий и свидетельств о государственной аккредитации",icon:B,path:La,Component:Rx,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:T},"holidays-after-training":{id:"holidays-after-training",title:"Предоставление каникул",icon:t.jsx(B,{}),path:Da,Component:Cx,color:"blue",isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:T},"provision-academic-leave":{id:"provision-academic-leave",title:"Предоставление академического отпуска",icon:t.jsx(B,{}),path:za,Component:Nx,color:"blue",isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:T},"independently-deducted":{id:"independently-deducted",title:"Отчисление по инициативе обучающегося",icon:t.jsx(B,{}),path:Ma,Component:Ix,color:"blue",isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:T},"extension-attestation":{id:"extension-attestation",title:"Продление промежуточной аттестации ",icon:t.jsx(B,{}),path:Fa,Component:Lx,color:"blue",isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:T},"military-registration-card":{id:"military-registration-card",title:"Заполнить личную карточку обучающегося по воинскому учету для получения отсрочки от призыва на военную службу",icon:B,path:Hx,Component:Fe,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:T}}),An=(e,i)=>e.reduce((n,s)=>(n[s]=i[s],n),{}),Wx=["settings","profile","chat","schedule","payments","project-activity","all-students"],Vx=["home","schedule","chat","all","profile"],Gx=(e,i)=>{var r;if(!e)return[];const s=((r=JSON.parse(localStorage.getItem("new-settings")||"{}")[e.id]["settings-customize-menu"])==null?void 0:r.property.pages)??qt,o=hs.filter(d=>!s.includes(d));return(e==null?void 0:e.user_status)==="staff"&&s.some(d=>!o.includes(d))?[...s,...o]:s},Rn={allRoutes:null,visibleRoutes:null,leftsideBarRoutes:null,homeRoutes:null,currentPage:null,isOpen:!1},Yx=()=>C(Kx),Ba=P(),Ua=P(),Ha=P(),Wa=P(),qx=(e,i,n)=>{const s={...n};if(s[e])s[e].notifications=i;else return null;return s},ht=e=>{if(!e)return wi();const{accepts:i,agreements:n,checkdata:s,studLogins:o}=e,a=!!i.length||!!n.length||!!s.length||!!(o!=null&&o.length),r="download-agreements",d=Object.entries(wi()).filter(([c])=>c!==r||c===r&&a);return Object.fromEntries(d)},Kx=te(Rn).on(Ba,(e,{isOpen:i,currentPage:n})=>{var s;return{...e,currentPage:e.allRoutes&&n?(s=e.allRoutes)==null?void 0:s[n]:e.currentPage,isOpen:i}}).on(Ua,()=>({...Rn})).on(Ha,(e,{user:i,adminLinks:n,homeRoutes:s})=>({...e,currentPage:(i==null?void 0:i.user_status)==="staff"?ht(n)[window.location.hash.slice(2,window.location.hash.length)]:et()[window.location.hash.slice(2,window.location.hash.length)],allRoutes:(i==null?void 0:i.user_status)==="staff"?{...ht(n),...ji()}:{...et(),...Ti()},visibleRoutes:(i==null?void 0:i.user_status)==="staff"?ht(n):et(),leftsideBarRoutes:An(Gx(i),(i==null?void 0:i.user_status)==="staff"?ht(n):et()),homeRoutes:An(s??JSON.parse(localStorage.getItem("home-routes")??JSON.stringify(Wx)),(i==null?void 0:i.user_status)==="staff"?{...ht(n),...ji()}:{...et(),...Ti()})})).on(Wa,(e,{page:i,notifications:n})=>{var s;return{...e,visibleRoutes:qx(i,typeof n=="number"?n:n(((s=e.visibleRoutes)==null?void 0:s[i].notifications)??0),e.visibleRoutes)}}),$e={useMenu:Yx},be={changeOpen:Ba,clearStore:Ua,defineMenu:Ha,changeNotifications:Wa},Xx=(e,i,n,s)=>{const o={alert:{id:i,title:n??"Новости",text:"Вам пришло оповещение!",type:"alert",goTo:Cr,duration:1e4,pageId:"alerts"},schedule:{id:i,type:"schedule",title:n??"Скоро начнется пара",text:s??"",goTo:dt,pageId:"schedule"},info:{id:i,title:n??"Важная информация!",text:s??"",type:"info"},"payment-dorm":{id:i,title:n??"Долг по общежитию",text:s??"Вам необходимо внести платеж ",type:"payment-dorm",goTo:Ri,canClose:!1,pageId:"payments"},"payment-ed":{id:i,title:n??"Долг по образованию",text:s??"Вам необходимо внести платеж",type:"payment-ed",goTo:Ri,canClose:!1,pageId:"payments"},message:{id:i,title:n??"Сообщения",text:s??"Посмотрите сообщения",type:"message",goTo:Yt,pageId:"chat",canClose:!1},"hr-applications":{id:i,title:n??"",text:s??"У вашей заявки изменился статус",type:"hr-applications",goTo:ie,pageId:"hr-applications"},"kpi-pps":{id:i,title:n??"",text:s??"У вашей заявки изменился статус",type:"kpi-pps",goTo:Oo,pageId:"kpi-pps"},"doc-for-review":{id:i,title:n??"Документ для ознакомления",text:s??"",type:"doc-for-review",goTo:Hi,pageId:"doclist"},"digital-services":{id:i,title:n??"Статус заявки изменен",text:s??"",type:"digital-services",goTo:T,pageId:"applications"},"version-update":{id:i,title:n??"Вышла новая версия",text:"Посмотрите изменения",type:"version-update"},"electronic-interaction":{id:i,title:n??"Документ для подписания",text:"Об электронном взаимодействии",type:"electronic-interaction",goTo:kr,pageId:"electronic-interaction-agreement"}};return o[e]??o.info},Jx={notifications:[],visibleNotifications:[],loading:!1,error:null,removeNotificationError:null,removeNotificationLoading:!1,clearAllLoading:!1,clearAllError:null,loaded:!1},ti=H(async({settings:e})=>{try{const{data:i}=await $c(),n={message:"messages","doc-for-review":"doclist","version-update":"newVersion","digital-services":"applications",alert:"news",schedule:"schedule"};return i.filter(({type:s})=>e[n[s]]).map(({id:s,type:o,title:a,text:r})=>Xx(o,s,a,r))}catch(i){throw new Error(`Не удалось загрузить уведомления. Ошибка: ${i}`)}}),Qx=H(({notifications:e})=>{e.forEach(({pageId:i})=>{i&&be.changeNotifications({page:i,notifications:1})})}),Zx=H(({notifications:e})=>{const{pageId:i}=e[0];i&&be.changeNotifications({page:i,notifications:1})}),ii=H(async({id:e,pageId:i})=>{try{return await Pc(e),{id:e,pageId:i}}catch{throw new Error("Не удалось скрыть уведомление")}}),ni=H(async()=>{try{await Oc()}catch{throw new Error("Не удалось скрыть все уведомления")}}),em=e=>{e&&be.changeNotifications({page:e,notifications:0})},Va=P(),Ga=P(),Ya=P(),qa=P(),Ka=P(),Xa=P(),Ja=P(),X=te(Jx).reset(Ja);Pe({from:Ga,to:ti});he({clock:ti.pending,source:X,fn:(e,i)=>({...e,loading:i}),target:X});he({clock:ti.failData,source:X,fn:(e,i)=>({...e,error:i.message}),target:X});he({clock:ti.doneData,source:X,fn:(e,i)=>({...e,notifications:[...i,...e.notifications],visibleNotifications:[...e.visibleNotifications,...i].slice(0,2),error:null,loaded:!0}),target:[X,Qx]});he({clock:Va,source:X,fn:(e,i)=>({notifications:[...e.notifications,i],visibleNotifications:[...e.visibleNotifications,i]}),target:[X,Zx]});Pe({from:qa,to:ii});he({clock:ii.doneData,source:X,fn:({notifications:e,visibleNotifications:i,...n},{id:s,pageId:o})=>(em(o),{...n,notifications:e.filter(a=>a.id!==s),visibleNotifications:i.filter(a=>a.id!==s)}),target:X});he({clock:ii.failData,source:X,fn:(e,i)=>({...e,removeNotificationError:i.message}),target:X});he({clock:ii.pending,source:X,fn:(e,i)=>({...e,removeNotificationLoading:i}),target:X});Pe({from:Ka,to:ni});he({clock:ni.pending,source:X,fn:(e,i)=>({...e,clearAllLoading:i,clearAllError:null}),target:X});he({clock:ni.failData,source:X,fn:(e,i)=>({...e,clearAllError:i.message}),target:X});he({clock:ni.doneData,source:X,fn:e=>({...e,notifications:[],visibleNotifications:[]}),target:X});he({clock:Ya,source:X,fn:({notifications:e,visibleNotifications:i,...n},s)=>({...n,notifications:e,visibleNotifications:i.filter(o=>o.id!==s)}),target:X});he({clock:Xa,source:X,fn:({notifications:e,...i})=>({...i,notifications:e,visibleNotifications:[]}),target:X});const tm=()=>Qn(X),Ke={initialize:Ga,add:Va,clearById:qa,clearVisibleById:Ya,clearAll:Ka,clearAllVisible:Xa,clearStore:Ja},we={useLkNotifications:tm},im=Object.freeze(Object.defineProperty({__proto__:null,events:Ke,selectors:we},Symbol.toStringTag,{value:"Module"})),Cn={messages:null,error:null},nm=()=>({data:C(Nn).messages,loading:C(mt.pending),error:C(Nn).error}),mt=H(async()=>{try{return(await oc("1")).data}catch(e){throw new Error(e)}}),Qa=P(),Nn=te(Cn).on(mt,e=>({...e,error:null})).on(mt.doneData,(e,i)=>({...e,messages:i})).on(mt.failData,(e,i)=>({...e,error:i.message})).on(Qa,()=>({...Cn})),sm={useMessages:nm},om={getMessagesFx:mt},am={clearStore:Qa},rm=Object.freeze(Object.defineProperty({__proto__:null,effects:om,events:am,selectors:sm},Symbol.toStringTag,{value:"Module"})),In={type:null,personalNotifications:null,error:null,completed:!1},lm=()=>({data:C(nt).personalNotifications,loading:C(it.pending),error:C(nt).error,completed:C(nt).completed}),cm=()=>C(nt).type,Za=P(),er=H(e=>e),it=H(async()=>{const{type:e}=nt.getState();if(e==="notifications")try{return(await ys()).data}catch(i){throw new Error(i)}try{return{docs:(await ws()).data}}catch(i){throw new Error(i)}}),Gt=H(async e=>{const{type:i}=nt.getState(),n=i==="notifications"?bc:_c;try{return await n.view(e),"ok"}catch{throw new Error("Ошибка загрузки данных")}}),tr=P(),nt=te(In).on(er,(e,i)=>({...e,type:i})).on(it,e=>({...e,error:null})).on(it.doneData,(e,i)=>({...e,personalNotifications:i})).on(it.failData,(e,i)=>({...e,error:i.message})).on(Gt.doneData,e=>({...e})).on(Gt.failData,(e,i)=>({...e,error:i.message})).on(Za,(e,i)=>({...e,completed:i.completed})).on(tr,()=>({...In}));Gt.doneData.watch(()=>it());const dm={usePersonalNotifications:lm,useType:cm},pm={setNotificationsType:er,getPersonalNotificationsFx:it,viewPersonalNotificationsFx:Gt},um={changeCompleted:Za,clearStore:tr},hm=Object.freeze(Object.defineProperty({__proto__:null,effects:pm,events:um,selectors:dm},Symbol.toStringTag,{value:"Module"})),gm=(e,i,n)=>{if(!e)return null;const s=e.dormitory.map(o=>o.id===i?{...o,can_sign:n}:o);return{...e,dormitory:s}},Ln={payments:null,error:null},fm=()=>({data:C(Dn).payments,loading:C(bt.pending),error:C(Dn).error}),bt=H(async()=>{const e=await ic();if(!e.data.contracts.education&&!e.data.contracts.dormitory)throw new Error("У вас нет данных по оплате");try{return e.data.contracts}catch{throw new Error("Не удалось загрузить оплату")}}),Ei=H(async e=>{try{return await nc(e),e}catch(i){throw new Error("Не удалось подписать конкракт. Причина: "+i)}}),ir=P(),Dn=te(Ln).on(bt,e=>({...e,error:null})).on(bt.doneData,(e,i)=>({...e,payments:i})).on(bt.failData,(e,i)=>({...e,error:i.message})).on(Ei.doneData,(e,i)=>({...e,payments:gm(e.payments,i,!1)})).on(Ei.failData,(e,i)=>({...e,error:i.message})).on(ir,()=>({...Ln})),xm={usePayments:fm},mm={getPaymentsFx:bt,signContractFx:Ei},bm={clearStore:ir},vm=Object.freeze(Object.defineProperty({__proto__:null,effects:mm,events:bm,selectors:xm},Symbol.toStringTag,{value:"Module"})),_m=Jt({api:{get:xc}}),ym=(e,i="minutes")=>{switch(i){case"minutes":const n=new Date,[s]=e.split(" - "),[o,a]=s.split(":");return+o*60+ +a-(n.getHours()*60+n.getMinutes());case"days":const r=new Date(e);return Math.ceil(Math.floor((r.getTime()-new Date().getTime())/1e3/60/60)/24)}},zn=e=>e&&Object.keys(e).length?Object.keys(e).findIndex(n=>{const s=ym(n,"days");return s>=0&&s<30})+1:0,wm=(e,i)=>e&&e[0]?Object.keys(e[0]).find((n,s)=>s+1===i)||"sunday":e&&e[2]?"":"sunday";function Si({name:e,surname:i,patronymic:n}){return`${i} ${e} ${n}`}var $i=(e=>(e[e.Янв=1]="Янв",e[e.Фев=2]="Фев",e[e.Мар=3]="Мар",e[e.Апр=4]="Апр",e[e.Май=5]="Май",e[e.Июн=6]="Июн",e[e.Июл=7]="Июл",e[e.Авг=8]="Авг",e[e.Сен=9]="Сен",e[e.Окт=10]="Окт",e[e.Ноя=11]="Ноя",e[e.Дек=12]="Дек",e))($i||{});const nr=e=>new Date(e.setHours(0,0,0,0)),tt=new Date,Mn=1,Fn=tt.getDay(),Pi=nr(new Date(tt.valueOf()-(Fn<=0?7-Mn:Fn-Mn)*864e5)),jm=nr(new Date(Pi.valueOf()+6*864e5)),km=e=>{const[i,n]=e.dateInterval.split("-").map(b=>b.trim()),[s,o]=i.split(" "),[a,r]=(n==null?void 0:n.split(" "))??[null,null],d=$i[o],c=$i[r]||d,p=new Date(`${d}/${s}/${c>=d?tt.getFullYear():tt.getFullYear()-1}`),h=a&&c?new Date(`${c}/${a}/${c>=d?tt.getFullYear():tt.getFullYear()+1}`):null;return!!(p<=jm&&(!h&&Pi<=p||h&&h>=Pi))},Tm=e=>e.filter(i=>km(i)),Em=async(e,i)=>{const n=typeof e=="string",s=!n&&!(e!=null&&e.subdivisions)||!!(i!=null&&i.length),o=s?await ec(i??e.group??""):n?await Zi(e):await Zi(Si({name:e.name,surname:e.surname,patronymic:e.patronymic})),a=s?await tc():n?await en(e):await en(Si({name:(e==null?void 0:e.name)??"",surname:(e==null?void 0:e.surname)??"",patronymic:(e==null?void 0:e.patronymic)??""})),r={},d={},c={monday:{lessons:[]},tuesday:{lessons:[]},wednesday:{lessons:[]},thursday:{lessons:[]},friday:{lessons:[]},saturday:{lessons:[]}};if(o.data.status!=="error"){for(const p in o.data)if(p!=="Sunday"){const h=p.charAt(0).toLowerCase()+p.slice(1);d[h]=s?o.data[p]:{lessons:o.data[p]}}for(const[p,h]of Object.entries(d))c[p].lessons=Tm(h.lessons)}if(a.data.status!=="error")for(const p in a.data)s?r[p]=a.data[p]:a.data[p].length&&(r[p]={lessons:a.data[p]});return{0:Object.keys(o.data).length&&o.data.status!=="error"?c:null,1:Object.keys(o.data).length&&o.data.status!=="error"?d:null,2:Object.keys(a.data).length&&Object.values(r).find(p=>!!p.lessons.length)&&a.data.status!=="error"?r:null,3:null}},Bn={schedule:null,currentModule:"0",currentDay:new Date().getDay(),currentDayString:"",currentChosenDay:new Date().getDay(),view:"full",error:null},Sm=()=>({data:C(Un),loading:C(vt.pending),error:C(Un).error}),vt=H(async({user:e,group:i})=>{try{return Em(e,i)}catch{throw new Error("Не удалось загрузить расписание")}}),sr=P(),or=P(),ar=P(),rr=P(),Un=te(Bn).on(vt,e=>({...e,schedule:null,error:null})).on(vt.doneData,(e,i)=>({...e,schedule:i,currentModule:i[0]?"0":i[1]?"1":i[2]?"2":i[3]?"3":"0",currentDayString:wm(i,e.currentDay),currentChosenDay:zn(i[2]),currentDay:i[0]?new Date().getDay():zn(i[2])})).on(vt.failData,e=>({...e,error:"Не удалось загрузить расписание"})).on(sr,(e,i)=>({...e,currentModule:i.currentModule.toString()})).on(or,(e,i)=>({...e,view:i.view})).on(ar,(e,i)=>({...e,currentChosenDay:i.day})).on(rr,()=>({...Bn})),$m={useSchedule:Sm},Pm={changeCurrentModule:sr,changeView:or,changeCurrentChosenDay:ar,clearStore:rr},Om={getScheduleFx:vt},Am=Object.freeze(Object.defineProperty({__proto__:null,effects:Om,events:Pm,selectors:$m},Symbol.toStringTag,{value:"Module"})),Hn={superiorRoom:null,error:null},Rm=()=>({data:C(Wn).superiorRoom,loading:C(_t.pending),error:C(Wn).error}),lr=P(),Cm=H(async e=>{});Pe({from:lr,to:Cm});const _t=H(async()=>{try{return(await dc()).data}catch{throw new Error("Не удалось загрузить раздел")}}),cr=P(),Wn=te(Hn).on(_t,e=>({...e,error:null})).on(_t.doneData,(e,i)=>({...e,superiorRoom:i})).on(_t.failData,(e,i)=>({...e,error:i.message})).on(cr,()=>({...Hn})),Nm={useSuperiorRoom:Rm},Im={getSuperiorRoomFx:_t},Lm={postSuperiorRoom:lr,clearStore:cr},Dm=Object.freeze(Object.defineProperty({__proto__:null,effects:Im,events:Lm,selectors:Nm},Symbol.toStringTag,{value:"Module"})),Vn={teacherDataVerification:null,error:null,completed:!1},zm=()=>({data:C(hi).teacherDataVerification,loading:C(yt.pending),error:C(hi).error,completed:C(hi).completed}),dr=P(),pr=P(),Mm=H(async e=>{try{return(await kc(e)).data}catch{throw new Error("Не удалось загрузить раздел")}});Pe({from:dr,to:Mm});const yt=H(async()=>{try{return(await jc()).data}catch{throw new Error("Не удалось войти")}}),ur=P(),hi=te(Vn).on(yt,e=>({...e,error:null})).on(yt.doneData,(e,i)=>({...e,teacherDataVerification:i})).on(yt.failData,(e,i)=>({...e,error:i.message})).on(pr,(e,i)=>({...e,completed:i.completed})).on(ur,()=>({...Vn})),Fm={useTeacherDataVerification:zm},Bm={getTeacherDataVerificationFx:yt},Um={postTeacherDataVerification:dr,changeCompleted:pr,clearStore:ur},Hm=Object.freeze(Object.defineProperty({__proto__:null,effects:Bm,events:Um,selectors:Fm},Symbol.toStringTag,{value:"Module"})),Wm=[Cc,mi,Mc,Uc,ed,rm,hm,vm,sd,_m,Am,Dm,Hm,Yc,Ic,im],Vm=()=>{Wm.forEach(e=>{e.events.clearStore()})},Ne=JSON.parse(localStorage.getItem("token")??"null"),Ie=()=>JSON.parse(localStorage.getItem("savePassword")??"true"),si=H(async e=>{try{const i=await Jl(e),n=new FormData;n.set("ulogin",e.login),n.set("upassword",e.password),n.set("auth_action","userlogin");try{await Et.post("/old",n)}catch{}return Ie()?(localStorage.setItem("token",JSON.stringify(i.data)),localStorage.setItem("jwt",JSON.stringify(i.data.jwt))):(sessionStorage.setItem("token",JSON.stringify(i.data)),sessionStorage.setItem("jwt",JSON.stringify(i.data.jwt))),i.data}catch{throw new Error(navigator.onLine?"Неверный логин или пароль":"Потеряно соединение с интернетом")}}),He=H(async e=>{try{const n=(await Ql(e.token)).data.user,{name:s,surname:o,patronymic:a}=n;return{currentUser:{...n,fullName:Si({name:s,surname:o,patronymic:a})},isAuthenticated:!!e,error:null,savePassword:Ie()}}catch(i){throw console.log(i),new Error("Возникла какая-то ошибка")}}),Oi=H(async e=>{try{return(await Zl(e)).data}catch(i){throw console.log(i),new Error("Возникла какая-то ошибка")}}),Gm=()=>{const{currentUser:e,error:i,isAuthenticated:n,savePassword:s,loginEuz:o}=C(qm);return{data:{user:e,isAuthenticated:n,savePassword:s,loginEuz:o},loading:C(si.pending),error:i}},hr=H(()=>{Ie()?localStorage.removeItem("token"):sessionStorage.removeItem("token"),Vm()}),gr=e=>{const i=localStorage.getItem("savePassword"),n=e??JSON.parse(i??"true");return localStorage.setItem("savePassword",n.toString()),n},fr=P(),Gi=P(),xr=P(),mr=P(),br=P();Pe({from:fr,to:si});Pe({from:si.doneData,to:He});Pe({from:Gi,to:hr});Ne&&Ie()?He(Ne):hr();var qn;const Ym={currentUser:null,error:null,isAuthenticated:!!((qn=Ne==null?void 0:Ne.token)!=null&&qn.length),savePassword:Ie(),loginEuz:""};gr();const qm=te(Ym).on(He,e=>({...e,error:null})).on(He.doneData,(e,i)=>i).on(He.failData,(e,i)=>{var n;return{error:i.message,currentUser:null,isAuthenticated:!!((n=Ne==null?void 0:Ne.token)!=null&&n.length),savePassword:Ie()}}).on(si.failData,(e,i)=>({error:i.message,isAuthenticated:null,currentUser:null,savePassword:Ie()})).on(Gi,()=>({error:"",isAuthenticated:null,currentUser:null,savePassword:Ie()})).on(br,(e,{savePassword:i})=>({...e,savePassword:gr(i)})).on(Oi,e=>({...e,error:null})).on(Oi.doneData,(e,i)=>({...e,loginEuz:i})).on(He.failData,(e,i)=>({...e,error:i.message})).on(mr,(e,{key:i,value:n})=>({...e,currentUser:e.currentUser?{...e.currentUser,[i]:n}:null})).on(xr,e=>({...e,currentUser:null})),oe={useUser:Gm},Ai={login:fr,logout:Gi,changeSavePassword:br,clear:xr,update:mr},Km={getUserFx:He,getLoginEuzFx:Oi},Xm=()=>t.jsx("div",{className:"left",children:t.jsxs(pe,{scroll:!1,height:"100%",verticalAlign:"space-between",position:"static",children:[t.jsx(Qt,{width:"50px",short:!0,className:"logo first"}),t.jsxs(pe,{gap:12,scroll:!1,height:"100%",verticalAlign:"center",children:[t.jsx(Z,{to:qi,tabIndex:-1,children:t.jsx(j,{padding:"0",icon:t.jsx(kt,{}),text:"Обратная связь",height:"25px",background:"transparent",textColor:"var(--theme-mild-opposite)"})}),t.jsx(Z,{to:Pr,tabIndex:-1,children:t.jsx(j,{padding:"0",icon:t.jsx(hl,{}),text:"Узнать свой логин ЕУЗ",height:"25px",background:"transparent",textColor:"var(--theme-mild-opposite)"})}),t.jsx(Z,{to:$r,tabIndex:-1,children:t.jsx(j,{padding:"0",icon:t.jsx(jt,{}),text:"Вниманию студентов 1 курса!",height:"25px",background:"transparent",textColor:"var(--theme-mild-opposite)"})}),t.jsx(Z,{to:Or,tabIndex:-1,children:t.jsx(j,{padding:"0",icon:t.jsx(jt,{}),text:"Вниманию сотрудников!",height:"25px",background:"transparent",textColor:"var(--theme-mild-opposite)"})}),t.jsx(ue,{}),t.jsx(Z,{to:Sr,tabIndex:-1,children:t.jsx(j,{padding:"0",icon:t.jsx(gl,{}),text:"Не получается войти",height:"25px",align:"left",background:"transparent",textColor:"var(--red)"})})]}),t.jsx(zs,{text:"Перейти к старому дизайну",onClick:()=>{localStorage.setItem("useOldVersion","true")},background:"transparent",textColor:"var(--reallyBlue)",icon:t.jsx(ss,{}),align:"left",padding:"0",width:"100%",href:`${O}/index.php`})]})}),Jm=()=>{const{search:e}=os();return ne.useMemo(()=>new URLSearchParams(e),[e])},Qm=()=>{const e=Jm(),i=e.get("login"),n=e.get("password"),[s,o]=l.useState(i??""),[a,r]=l.useState(n??""),[d,c]=l.useState(!1),p=!!a&&!!s,h=Ai.login,b=g=>{c(g.getModifierState("CapsLock")),g.key==="Enter"&&h({login:s,password:a})},x=g=>{Ai.changeSavePassword({savePassword:g})},u=()=>h({login:s,password:a});return l.useEffect(()=>{i&&n&&h({login:i,password:n})},[i,n]),{isSubmitActive:p,handleSavePassword:x,handleKeyPress:b,handleLogin:u,password:a,setPassword:r,capsLock:d,login:s,setLogin:o}},Zm=()=>{const{loading:e,error:i,data:n}=oe.useUser(),{isSubmitActive:s,handleKeyPress:o,handleSavePassword:a,handleLogin:r,password:d,setPassword:c,capsLock:p,login:h,setLogin:b}=Qm();return t.jsx("div",{className:"right",onKeyDown:o,children:t.jsxs(pe,{gap:16,horizontalAlign:"center",position:"static",verticalAlign:"space-between",height:"100%",scroll:!1,children:[t.jsx(Qt,{width:"50px",short:!0,className:"logo second"}),t.jsx(R,{jc:"space-between",children:t.jsx(Y,{size:3,align:"left",children:"Личный кабинет"})}),t.jsxs(pe,{gap:16,scroll:!1,children:[t.jsx(Y,{size:4,align:"left",children:"Вход"}),t.jsx(ee,{children:"Вход в личный кабинет происходит через единую учетную запись (ЕУЗ)"}),t.jsx(se,{type:"failure",visible:!!i,children:i}),t.jsx(se,{type:"success",visible:(n==null?void 0:n.isAuthenticated)??!1,children:"Вы вошли в аккаунт"}),t.jsx(Se,{value:h,setValue:b,title:"Логин",placeholder:"Введите логин"}),t.jsx(Se,{value:d,setValue:c,title:"Пароль",placeholder:"Введите пароль",type:"password",alertMessage:p?"Включен Capslock":void 0}),t.jsx(Le,{text:"Оставаться в системе",checked:n.savePassword,setChecked:a})]}),t.jsx(Ds,{text:"Вход",action:r,isLoading:e,completed:!1,setCompleted:()=>null,isActive:s})]})})},e0=f(Ae)`
    overflow: hidden;
    box-shadow: ${({isAuthenticated:e})=>e?"none":"0 0 1px var(--theme-mild-opposite)"};
    min-height: 480px;
    transition: 0.2s box-shadow;
    position: relative;
    background: ${({isAuthenticated:e})=>e?"var(--theme)":"var(--schedule)"};

    .left,
    .right {
        height: 100%;
        padding: 22px;
    }

    .right {
        min-width: 350px;
        width: 350px;
        opacity: ${({isAuthenticated:e})=>+!e};
    }

    .left {
        min-width: 320px;
        width: 320px;
        transition: 0.2s background, 0.2s opacity;
        background: ${({isAuthenticated:e})=>e?"var(--theme)":"var(--theme-mild-xxl)"};
        padding-top: ${({isAuthenticated:e})=>e?"60px":"22px"};

        & > * > * > *:not(.logo) {
            opacity: ${({isAuthenticated:e})=>+!e};
        }
    }

    .logo {
        transform-origin: left;
    }

    .logo.first {
        z-index: 100;
        animation: ${({isAuthenticated:e})=>e&&"logoMove 0.8s forwards ease-in-out"};

        @keyframes logoMove {
            0% {
                position: absolute;
                top: 22px;
                left: 22px;
                transform: scale(1) translateY(0%) translateX(0%);
            }
            100% {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: scale(2) translateY(-25%) translateX(-50%);
            }
        }
    }

    .logo.second {
        display: none;
    }

    @media (max-width: 675px) {
        max-width: 400px;
        max-height: 90%;
        flex-direction: column-reverse;
        overflow-y: auto;
        justify-content: flex-start;

        .right {
            opacity: 1;

            & > * > * > *:not(.logo):not(button) {
                opacity: ${({isAuthenticated:e})=>+!e};
            }

            button {
                opacity: ${({isAuthenticated:e})=>e&&"0"};
            }
        }

        .left {
            padding-top: 22px;
        }

        .logo.first {
            display: none;
        }

        .logo.second {
            display: block;
            z-index: 100;
            animation: ${({isAuthenticated:e})=>e&&"logoMoveMobile 0.8s forwards ease-in-out"};

            @keyframes logoMoveMobile {
                0% {
                    position: absolute;
                    top: 22px;
                    left: 50%;
                    transform: scale(1) translateY(0%) translateX(-50%);
                }
                100% {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: scale(2) translateY(-25%) translateX(-50%);
                }
            }
        }

        .left,
        .right {
            width: 100%;
        }
    }

    @media (max-width: 400px) {
        box-shadow: none;
        border-radius: 0px;
        height: 100%;
        max-height: 100%;
    }
`,t0=()=>{const{data:{isAuthenticated:e}}=oe.useUser();return t.jsxs(e0,{isAuthenticated:e??!1,height:"fit-content",orientation:"horizontal",gap:"4px",maxWidth:"fit-content",padding:"0",children:[t.jsx(Xm,{}),t.jsx(Zm,{})]})},i0=f.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--theme);
    flex-direction: column;

    @media (max-width: ${Dl}) {
        justify-content: flex-start;
        align-items: flex-start;
    }
`,n0=()=>t.jsx(i0,{children:t.jsx(t0,{})}),s0=l.lazy(()=>y(()=>import("./index-c8391c55.js"),["assets/index-c8391c55.js","assets/vendor-292fea82.js"])),vr=l.lazy(()=>y(()=>import("./index-639b29d9.js"),["assets/index-639b29d9.js","assets/vendor-292fea82.js","assets/index-98154ea3.js","assets/index-ec26e79e.js"])),_r=l.lazy(()=>y(()=>import("./index-eecff1df.js"),["assets/index-eecff1df.js","assets/vendor-292fea82.js","assets/index-98154ea3.js","assets/index-ec26e79e.js"])),o0=l.lazy(()=>y(()=>import("./index-64aa1fc9.js"),["assets/index-64aa1fc9.js","assets/vendor-292fea82.js"]));l.lazy(()=>y(()=>import("./index-9663f362.js"),["assets/index-9663f362.js","assets/vendor-292fea82.js","assets/index.esm-5250088b.js"]));const a0=l.lazy(()=>y(()=>import("./index-717e0986.js"),["assets/index-717e0986.js","assets/vendor-292fea82.js","assets/index-1cac61ea.js"])),yr=l.lazy(()=>y(()=>import("./index-a533456a.js"),["assets/index-a533456a.js","assets/vendor-292fea82.js","assets/help-links-2e16940f.js"])),r0=l.lazy(()=>y(()=>import("./index-20795d27.js"),["assets/index-20795d27.js","assets/vendor-292fea82.js"])),l0=l.lazy(()=>y(()=>import("./index-a659f5be.js"),["assets/index-a659f5be.js","assets/vendor-292fea82.js"])),c0=l.lazy(()=>y(()=>import("./index-5e258a84.js"),["assets/index-5e258a84.js","assets/vendor-292fea82.js","assets/week-schedule-b14d0b0b.js","assets/index-6ca148c3.js","assets/index-4b532a9f.js"])),d0=l.lazy(()=>y(()=>import("./index-f417c076.js"),["assets/index-f417c076.js","assets/vendor-292fea82.js"])),p0=l.lazy(()=>y(()=>import("./index-b24f718f.js"),["assets/index-b24f718f.js","assets/vendor-292fea82.js","assets/index-4b532a9f.js","assets/index-1cac61ea.js","assets/index-6ca148c3.js"])),u0=l.lazy(()=>y(()=>import("./index-8a7986ec.js"),["assets/index-8a7986ec.js","assets/vendor-292fea82.js"])),h0=l.lazy(()=>y(()=>import("./index-a0bce9a2.js"),["assets/index-a0bce9a2.js","assets/vendor-292fea82.js","assets/index-9bab5887.js","assets/week-schedule-b14d0b0b.js","assets/index-6ca148c3.js","assets/index-ec26e79e.js"])),g0=l.lazy(()=>y(()=>import("./index-7b960406.js"),["assets/index-7b960406.js","assets/vendor-292fea82.js","assets/customize-leftside-bar-item-22ffd699.js","assets/index.esm-5250088b.js","assets/index-6ca148c3.js"])),f0=l.lazy(()=>y(()=>import("./index-5c48db2e.js"),["assets/index-5c48db2e.js","assets/vendor-292fea82.js"])),x0=l.lazy(()=>y(()=>import("./index-8b05d327.js"),["assets/index-8b05d327.js","assets/vendor-292fea82.js"])),m0=l.lazy(()=>y(()=>import("./index-b0e63c8c.js"),["assets/index-b0e63c8c.js","assets/vendor-292fea82.js","assets/customize-leftside-bar-item-22ffd699.js","assets/index.esm-5250088b.js"])),b0=l.lazy(()=>y(()=>import("./index-947fdf73.js"),["assets/index-947fdf73.js","assets/vendor-292fea82.js"])),v0=l.lazy(()=>y(()=>import("./index-207948ea.js"),["assets/index-207948ea.js","assets/vendor-292fea82.js","assets/index-9bab5887.js","assets/week-schedule-b14d0b0b.js","assets/index-6ca148c3.js","assets/index-ec26e79e.js"])),_0=l.lazy(()=>y(()=>import("./index-ac4631c7.js"),["assets/index-ac4631c7.js","assets/vendor-292fea82.js","assets/index-98aed3f0.js"])),y0=l.lazy(()=>y(()=>import("./index-d91f3209.js"),["assets/index-d91f3209.js","assets/vendor-292fea82.js"])),w0=l.lazy(()=>y(()=>import("./index-c0599de3.js"),["assets/index-c0599de3.js","assets/vendor-292fea82.js","assets/help-links-2e16940f.js"])),j0=l.lazy(()=>y(()=>import("./index-cd88d2a9.js"),["assets/index-cd88d2a9.js","assets/vendor-292fea82.js","assets/help-links-2e16940f.js"])),k0=l.lazy(()=>y(()=>import("./index-f36cd151.js"),["assets/index-f36cd151.js","assets/vendor-292fea82.js"])),T0=f(Ae)`
    position: relative;

    @media (min-width: 1001px) {
        padding-top: 70px;
    }

    @media (max-width: 1000px) {
        padding-top: 50px;
    }
`,E0=f.div`
    position: absolute;
    top: 20px;
    right: 20px;
    width: 100%;
    display: flex;
    justify-content: flex-end;

    @media (max-width: 1000px) {
        top: -7px;
        right: 7px;
    }
`,S0=({children:e,topRightCornerElement:i,padding:n})=>t.jsx(Vi,{padding:"0 0 10px 0",children:t.jsxs(T0,{justifyContent:"flex-start",height:"100%",orientation:"vertical",maxWidth:"700px",gap:"24px",alignItems:"flex-start",noAppearanceInMobile:!0,padding:n,children:[i&&t.jsx(E0,{children:i}),e]})}),$0=()=>{const{notifications:e,clearAllError:i,clearAllLoading:n}=we.useLkNotifications(),s=()=>{Te.evokeConfirm({message:"Вы уверены, что хотите очистить все уведомления?",onConfirm:()=>Ke.clearAll()})};return l.useEffect(()=>{i&&V.evokePopUpMessage({type:"failure",message:i})},[i]),t.jsx(Vi,{padding:"10px",children:t.jsxs(S0,{topRightCornerElement:t.jsx(Z,{to:Ar,children:t.jsx(j,{icon:t.jsx(Li,{}),height:"35px",width:"35px"})}),children:[t.jsx(lo,{}),e.length>0?n?t.jsx(R,{jc:"center",children:t.jsx(ze,{width:"40px",height:"40px"})}):t.jsx(j,{text:"Очистить все",onClick:s,width:"100%"}):null]})})},wr="/login",P0="/forgot-password",O0="/medical-certificate",wt="/all",Yi="/home",jr="/profile",Yt="/chat",Kb=Yt+"/:chatId",kr="/electronic-interaction-agreement",Ri="/payments",dt="/schedule",Tr="/all-students",A0="/all-students/:filter",R0="/all-teachers/:filter",Er="/all-teachers",qi="/feedback",Sr="/cant-access",$r="/memo-freshmen",Pr="/get-your-login",Or="/memo-teacher",re="/settings",Xb=re+"/:id",C0=re+"/appearance",N0=re+"/personal",I0=re+"/security",L0=re+"/home-page",D0=re+"/customize-menu",Ar=re+"/notifications",z0="/instructions",Rr="/project-activity",Cr="/alerts",Nr="/lk-notifications",Ir="/helpful-information",M0=dt+"/:filter",F0=Ir+"/:infoType";var B0=(e=>(e.GENERAL="Основное",e.FINANCES_DOCS="Финансы и документы",e.LEARNING_ACTIVITIES="Учебная деятельность",e.OTHER="Находится в разработке",e.COMMUNICATION="Коммуникация",e))(B0||{});const U0=[{id:0,title:"",icon:"",path:wr,Component:n0},{id:1,title:"",icon:"",path:P0,Component:r0},{id:2,title:"Обратная связь",icon:t.jsx(kt,{}),path:qi,Component:yr},{id:3,title:"Не получается войти в Личный кабинет",icon:t.jsx(We,{}),path:Sr,Component:o0},{id:4,title:"Узнать свой логин ЕУЗ",icon:"",path:Pr,Component:y0},{id:5,title:"Вниманию студентов 1 курса!",icon:"",path:$r,Component:w0},{id:6,title:"Вниманию сотрудников!",icon:"",path:Or,Component:j0}],Lr={all:{id:"all",title:"Все разделы",icon:t.jsx(fl,{}),path:wt,Component:s0,color:"lightGreen",isTemplate:!1,show:!1,group:"GENERAL",withoutBackButton:!0},settings:{id:"settings",title:"Настройки",icon:t.jsx(Li,{}),path:re,Component:g0,color:"grey",isTemplate:!0,show:!0,group:"GENERAL"},"electronic-interaction-agreement":{id:"electronic-interaction-agreement",title:"Соглашение об электронном взаимодействии",shortTitle:"Соглашение об электр...",icon:t.jsx(ns,{}),path:kr,Component:a0,color:"blue",isTemplate:!1,group:"FINANCES_DOCS",planeHeader:!0},payments:{id:"payments",title:"Договоры и оплаты",icon:t.jsx(gi,{}),path:Ri,Component:p0,color:"green",isTemplate:!1,group:"FINANCES_DOCS",keywords:["оплата"]},doclist:{id:"doclist",title:"Ознакомление с документами",shortTitle:"Ознакомление с док...",icon:t.jsx(I,{}),path:Hi,Component:()=>t.jsx(_0,{}),color:"blue",isTemplate:!1,group:"FINANCES_DOCS"},alerts:{id:"alerts",title:"Новости",icon:t.jsx(Ni,{}),path:Cr,Component:l0,color:"purple",isTemplate:!1,group:"COMMUNICATION",keywords:["Оповещения"]},home:{id:"home",title:"Главная",icon:t.jsx(cs,{}),path:Yi,Component:c0,color:"blue",isTemplate:!1,group:"GENERAL",keywords:["домой"],withoutHeader:!0},profile:{id:"profile",title:"Профиль",icon:t.jsx(xl,{}),path:jr,Component:u0,color:"purple",isTemplate:!1,group:"GENERAL",withoutHeader:!0},"lk-notifications":{id:"lk-notifications",title:"Уведомления",icon:t.jsx(Ii,{}),path:Nr,Component:$0,color:"orange",isTemplate:!1,group:"GENERAL",keywords:["Оповещения"],isNew:!0},chat:{id:"chat",title:"Сообщения",icon:t.jsx(ml,{}),path:Yt,Component:()=>ke({oldVersionUrl:Yt}),color:"red",isTemplate:!0,group:"OTHER",keywords:["чат"],planeHeader:!0},schedule:{id:"schedule",title:"Расписание",icon:t.jsx(bl,{}),path:dt,Component:h0,color:"pink",isTemplate:!1,group:"LEARNING_ACTIVITIES",keywords:["экзамены","зачеты","сессия","пересдача"],planeHeader:!0},"all-students":{id:"all-students",title:"Студенты",icon:t.jsx(Wt,{}),path:Tr,Component:vr,color:"lightBlue",isTemplate:!1,group:"COMMUNICATION",keywords:["одногруппники","ученики"]},"all-teachers":{id:"all-teachers",title:"Сотрудники",icon:t.jsx(ls,{}),path:Er,Component:_r,color:"orange",isTemplate:!1,group:"COMMUNICATION",keywords:["преподаватели","преподы"]},feedback:{id:"feedback",title:"Обратная связь",icon:t.jsx(kt,{}),path:qi,Component:yr,color:"blue",isTemplate:!1,group:"COMMUNICATION"},instructions:{id:"instructions",title:"Полезная информация",icon:t.jsx(vl,{}),path:z0,Component:d0,color:"blue",isTemplate:!1,group:"GENERAL",show:!1},"medical-certificate":{id:"medical-certificate",title:"Предоставление медицинских справок",icon:t.jsx(_l,{}),path:O0,Component:k0,color:"blue",isTemplate:!1,group:"GENERAL"}},Dr={"teachers-schedule":{id:"teachers-schedule",title:"Расписание преподавателя",icon:t.jsx(B,{}),path:M0,Component:v0,color:"blue",isTemplate:!1,show:!1,group:"OTHER",planeHeader:!0},"filtered-all-students":{id:"filtered-all-students",title:"Все студенты",icon:t.jsx(Wt,{}),path:A0,Component:vr,color:"blue",isTemplate:!1,show:!1,group:"OTHER"},"filtered-all-teachers":{id:"filtered-all-teachers",title:"Все сотрудники",icon:t.jsx(Wt,{}),path:R0,Component:_r,color:"blue",isTemplate:!1,show:!1,group:"OTHER"},"settings-appearance":{id:"settings-appearance",title:"Настройки. Внешний вид",icon:t.jsx(yl,{}),path:C0,Component:x0,color:"purple",isTemplate:!0,show:!0,group:"OTHER",isSubPage:!0,subPageHeaderTitle:"Внешний вид",fallbackPrevPage:re,backButtonText:"Настройки"},"settings-personal":{id:"settings-personal",title:"Настройки. Аккаунт",icon:t.jsx(wl,{}),path:N0,Component:f0,color:"pink",isTemplate:!0,show:!0,group:"OTHER",isSubPage:!0,subPageHeaderTitle:"Внешний вид",fallbackPrevPage:re,backButtonText:"Настройки"},"settings-security":{id:"settings-security",title:"Настройки. Безопасность",icon:t.jsx(jl,{}),path:I0,Component:b0,color:"green",isTemplate:!0,show:!0,group:"OTHER",isSubPage:!0,subPageHeaderTitle:"Безопасность",fallbackPrevPage:re,backButtonText:"Настройки"},"settings-home-page":{id:"settings-home-page",title:"Настройки. Главная",icon:t.jsx(cs,{}),path:L0,Component:m0,color:"blue",isTemplate:!0,show:!0,group:"OTHER",isSubPage:!0,subPageHeaderTitle:"Главная",fallbackPrevPage:re,backButtonText:"Настройки"},"settings-customize-menu":{id:"settings-customize-menu",title:"Настройки. Меню",icon:t.jsx(kl,{}),path:D0,Component:()=>t.jsx(t.Fragment,{}),color:"red",isTemplate:!0,show:!0,isSubPage:!0,subPageHeaderTitle:"Меню",fallbackPrevPage:re,backButtonText:"Настройки"},"settings-notifications":{id:"settings-notifications",title:"Настройки. Уведомления",icon:t.jsx(Ii,{}),path:Ar,Component:()=>t.jsx(t.Fragment,{}),color:"orange",isTemplate:!0,show:!0,isSubPage:!0,subPageHeaderTitle:"Уведомления",fallbackPrevPage:re,backButtonText:"Настройки"},"useful-info-template":{id:"useful-info-template",title:"Полезная информация",icon:"",path:F0,Component:Bi,color:"grey",isTemplate:!0,show:!0}},H0=()=>{const{allRoutes:e}=$e.useMenu();return e?t.jsxs(ds,{children:[Object.values(e).map(({path:i,Component:n,isTemplate:s})=>t.jsx(ps,{path:i,component:n,exact:!s},i)),t.jsx(us,{exact:!0,to:Yi})]}):null},W0=ne.memo(H0),V0=f.div`
    height: fit-content;
    opacity: ${({isVisible:e})=>e?1:0};
    visibility: ${({isVisible:e})=>e?"visible":"hidden"};
    transform: ${({isVisible:e})=>e?"translateY(0)":"translateY(20px)"};
    position: absolute;
    width: 220px;
    left: ${({left:e})=>e+"px"};
    top: ${({top:e})=>e+"px"};
    background: var(--schedule);
    border-radius: var(--brLight);
    box-shadow: var(--very-mild-shadow);
    transition: 0.2s transform, 0.2s opacity, 0.2s visibility;
    z-index: 4;
    padding: 8px;
    color: var(--text);

    @media (max-width: 500px) {
        width: calc(100vw - 20px);
        left: 50%;
        transform: ${({isVisible:e})=>e?"translateY(0) translateX(-50%)":"translateY(20px) translateX(-50%)"};
        bottom: 10px;
        top: auto;
        padding: 16px;
    }
`,G0=()=>{const{open:e,content:i,position:n}=qd.useContextMenu(),s=l.useRef(null);return ct(s,()=>me.close()),t.jsx(ei,{isOpen:e,children:t.jsx(V0,{isVisible:e,ref:s,left:n.x,top:n.y,onClick:o=>{o.stopPropagation()},children:i})})},zr=200,Y0=5e3,q0=()=>{const{visibleNotifications:e}=we.useLkNotifications(),[i,n]=l.useState(null),s=l.useRef(),o=a=>(s.current=void 0,()=>{n(a),setTimeout(()=>{Ke.clearVisibleById(a)},zr)});return l.useEffect(()=>{var a,r;e.length&&s.current===void 0&&(s.current=setTimeout(o((a=e[0])==null?void 0:a.id),((r=e[0])==null?void 0:r.duration)??Y0))},[e]),{handleClose:o,closing:i}},K0=f.div`
    position: absolute;
    width: 320px;
    max-width: 500px;
    bottom: 10px;
    right: 10px;
    z-index: 100;
    display: flex;
    flex-direction: column-reverse;
    padding: 10px;
    padding-top: 0;

    @media (max-width: 1000px) {
        width: 90%;
        flex-direction: column;
        left: 50%;
        transform: translateX(-50%);
        top: 10px;
        bottom: auto;
    }
`,X0=f.div`
    border-radius: var(--brLight);
    background: var(--schedule);
    color: var(--text);
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-shadow: 0 0 50px #00000521;
    transition: 0.2s;

    animation: ${({open:e})=>e?"open":"close"} ${zr/1e3}s forwards;

    @keyframes open {
        0% {
            padding: 0px;
            height: 0px;
            margin-top: 0px;
            opacity: 0;
            transform: scale(0.9);
        }
        100% {
            padding: 8px;
            height: 65px;
            margin-top: 8px;
            opacity: 1;
            transform: scale(1);
        }
    }

    @keyframes close {
        0% {
            height: 65px;
            padding: 8px;
            opacity: 1;
            margin-top: 8px;
            transform: scale(1);
        }
        100% {
            height: 0px;
            opacity: 0;
            padding: 0px;
            margin-top: 0px;
            transform: scale(0.9);
        }
    }
`;f.div`
    height: 4px;
    border-radius: 3px;
    background: ${w.blue.main};
    animation: ${({started:e,duration:i})=>e&&`decrease ${i/1e3}s linear forwards`};

    @keyframes decrease {
        0% {
            width: 100%;
        }
        100% {
            width: 0%;
        }
    }
`;const J0=()=>{const{visibleNotifications:e}=we.useLkNotifications(),{closing:i,handleClose:n}=q0();return t.jsx(K0,{children:e.map(s=>t.jsx(X0,{onClick:n(s.id),open:i!==s.id,children:t.jsx(oo,{...s,fullText:!1,maxLetters:19,closeAnimation:!1,onClose:n(s.id)})},s.id))})},Gn=f.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${({color:e})=>`linear-gradient(360deg, ${e} 50%, var(--theme))`};
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: ${({loading:e})=>!e&&"load_finished 1.2s forwards ease-in-out reverse"};
    animation-delay: 0.8s;
    background-size: 100% 10000%;
    flex-direction: column;

    .loading-circle {
        width: 40px;
        height: 40px;
        bottom: 40px;
        position: absolute;
        opacity: 0.7;
    }

    @keyframes logo {
        0% {
            filter: invert(var(--invert));
            transform: translateY(0px);
            opacity: 1;
        }
        30% {
            filter: invert(var(--invert));
            transform: translateY(5px);
            opacity: 1;
        }
        100% {
            filter: invert(var(--double-invert));
            opacity: 0;
            transform: translateY(-10px);
        }
    }

    @keyframes load_finished {
        0% {
            background-size: 10% 100%;
            opacity: 0;
            visibility: hidden;
        }
        50% {
            background-size: 10% 1000%;
            opacity: 1;
            visibility: visible;
        }
        100% {
            background-size: 100% 10000%;
            opacity: 1;
            visibility: visible;
        }
    }

    img {
        animation: ${({loading:e})=>!e&&"logo 0.7s forwards ease-in-out"};
        animation-delay: ${({loading:e})=>e?"0s":"1s"};
        width: 100px;
    }
`,Q0=({loading:e})=>{const{data:{user:i},error:n}=oe.useUser(),s=i?xe(i==null?void 0:i.fullName):w.blue.main,o=()=>Km.getUserFx(JSON.parse(localStorage.getItem("token")??""));return n?t.jsx(Gn,{loading:!0,color:s,children:t.jsx(ce,{text:"Нет подключения к интернету",children:t.jsx(j,{onClick:o,text:"Попробовать снова",icon:t.jsx(Jn,{})})})}):t.jsxs(Gn,{color:s,loading:e,children:[t.jsx(Qt,{short:!0,width:"100px"}),e&&t.jsx(ze,{})]})},Z0=f.div`
    width: 100%;
    height: 5px;
    background: var(--almostTransparentOpposite);
    border-radius: 10px;
    overflow: hidden;

    .inner-line {
        height: 5px;
        transition: 0.2s;
        width: ${({filled:e})=>e??"0%"};
        background: var(--reallyBlue);
        animation: ${({playing:e})=>e!==null&&"10s filling linear forwards"};
        animation-play-state: ${({playing:e})=>e?"running":"paused"};

        @keyframes filling {
            0% {
                width: 0%;
            }
            100% {
                width: 100%;
            }
        }
    }
`,eb=({filled:e,playing:i,isLast:n,onClose:s})=>{const{currentPage:o}=Wi.useStory();return t.jsx(Z0,{filled:e,playing:i,children:t.jsx("div",{className:"inner-line",onAnimationEnd:()=>n?s():Ue.changeCurrentPage({value:o+1})})})},tb=f(At)`
    position: absolute;
    top: 30px;
    left: 0;
    padding: 0px 30px;
    z-index: 2;

    svg {
        min-width: 20px;
        height: 20px;
    }
`,ib=({playing:e,pages:i,onClose:n})=>{const{currentPage:s}=Wi.useStory();return t.jsxs(tb,{height:"10px",verticalAlign:"center",direction:"horizontal",width:"100%",children:[Array(i).fill(0).map((o,a)=>t.jsx(eb,{onClose:n,isLast:a+1===i,playing:s===a?e:null,filled:s>a?100:s===a?void 0:0},a)),e?t.jsx(El,{}):t.jsx(Tl,{}),t.jsx(j,{minWidth:"25px",width:"25px",height:"25px",icon:t.jsx(Oe,{}),onClick:n})]})},nb=e=>`translate(${e.horizontal==="center"?"-50%":"0px"}, ${e.vertical==="center"?"-50%":"0px"})})`,sb=f(Ae)`
    overflow: hidden;
    position: relative;
    background: ${({background:e})=>e};
    display: flex;
    justify-content: ${({imageAlign:e})=>(e==null?void 0:e.horizontal)==="left"?"flex-start":(e==null?void 0:e.horizontal)==="right"?"flex-end":"center"};
    align-items: center;
    user-select: none;

    @media (max-width: 700px) {
        border-radius: 0px;
    }
`,ob=f.div`
    width: 80%;
    height: fit-content;
    position: absolute;
    left: ${({align:e})=>e.horizontal==="left"?"30px":e.horizontal==="center"?"50%":"auto"};
    right: ${({align:e})=>e.horizontal==="right"?"30px":e.horizontal==="center"?"50%":"auto"};
    bottom: ${({align:e})=>e.vertical==="bottom"?"30px":e.vertical==="center"?"50%":"auto"};
    top: ${({align:e})=>e.vertical==="top"?"30px":e.vertical==="center"?"50%":"auto"};
    display: flex;
    flex-direction: column;
    gap: 7px;
    color: ${({color:e})=>e??"var(--text)"};
    transform: ${({align:e})=>nb(e)};
    text-align: ${({textAlign:e})=>e??"left"};
`,ab=({background:e,align:i,image:n,color:s,title:o,text:a,children:r,setPlaying:d,link:c,imageAlign:p,imageSize:h={width:"auto",height:"100%"},textAlign:b="left"})=>{const x=Pt();return t.jsxs(sb,{imageAlign:p,onClick:()=>d(u=>!u),background:e,align:i,padding:"0",height:"100%",color:s,children:[n&&t.jsx(Ls,{src:n,loading:!1,width:h.width,height:h.height}),t.jsxs(ob,{imageAlign:p,onClick:()=>d(u=>!u),background:e,align:i,color:s,children:[t.jsx(Y,{size:2,align:b,children:o}),t.jsx(ee,{fontSize:"1.1em",align:b,children:a}),!!(c!=null&&c.text)&&t.jsx(j,{onClick:()=>{x.push(c.to),Ue.close()},text:c.text}),r&&t.jsx("div",{className:"content-children",children:r})]})]})},rb=f.div`
    padding: 15px;
    width: 100%;
    max-width: 400px;
    height: 100%;
    max-height: 750px;
    transition: 0.2s;
    transform: scale(${({isOpen:e})=>e?1:.95});
    opacity: ${({isOpen:e})=>e?"1":"0"};
    visibility: ${({isOpen:e})=>e?"visible":"hidden"};
    position: relative;
    display: flex;

    @media (max-width: 700px) {
        padding: 0;
    }
`,Yn=f.div`
    position: absolute;
    top: 50px;
    left: ${({left:e})=>e??"auto"};
    right: ${({right:e})=>e??"auto"};
    height: calc(100% - 65px);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 25%;
    /* background: red; */
    z-index: 3;
    opacity: 0;

    svg {
        width: 30px;
        height: 30px;
        color: var(--text);
        background: var(--almostTransparentOpposite);
        border-radius: var(--brLight);
    }

    @media (min-width: 1001px) {
        &:hover {
            opacity: 1;
            background: ${({left:e})=>e?"linear-gradient(90deg, var(--almostTransparentOpposite), transparent)":"linear-gradient(90deg, transparent, var(--almostTransparentOpposite))"};
        }
    }

    @media (max-width: 1000px) {
        left: ${({left:e})=>`calc(${e} - 15px)`??"auto"};
        right: ${({right:e})=>`calc(${e} - 15px)`??"auto"};
        &:active {
            opacity: 1;
            background: ${({left:e})=>e?"linear-gradient(90deg, var(--almostTransparentOpposite), transparent)":"linear-gradient(90deg, transparent, var(--almostTransparentOpposite))"};
        }
    }
`,lb=()=>{const{pages:e,isOpen:i,currentPage:n}=Wi.useStory(),s=l.useRef(null);ct(s,()=>Ue.close());const[o,a]=l.useState(!0),r=e[n];return t.jsx(ei,{isOpen:i,children:t.jsx(rb,{isOpen:i,ref:s,children:e.length!==0&&t.jsxs(t.Fragment,{children:[t.jsx(ib,{pages:e.length,onClose:()=>Ue.close(),playing:o}),t.jsx(Yn,{left:"15px",onClick:()=>{n!==0&&Ue.changeCurrentPage({value:n-1}),a(!0)},children:t.jsx($t,{})}),t.jsx(ab,{setPlaying:a,currentPage:n,...r}),t.jsx(Yn,{right:"15px",onClick:()=>{n!==e.length-1?Ue.changeCurrentPage({value:n+1}):Ue.close(),a(!0)},children:t.jsx(at,{})})]})})})},cb=()=>{const{data:{user:e}}=oe.useUser(),{notifications:i,loading:n,loaded:s}=we.useLkNotifications(),{settings:o}=rt.useSettings(),a=l.useMemo(()=>o==null?void 0:o["settings-notifications"].property,[o==null?void 0:o["settings-notifications"]]);l.useEffect(()=>{e&&a&&a.all!==!1&&!s&&!n&&Ke.initialize({settings:a})},[e,a,n,s]),l.useEffect(()=>{be.changeNotifications({page:"lk-notifications",notifications:i.length})},[i])},db=()=>{var r,d;const e=Pt(),{data:i}=oe.useUser(),n=(r=i.user)!=null&&r.subdivisions?{...wi(),...ji()}:{...et(),...Ti()},[{exactCurrentPage:s,currentPage:o},a]=l.useState({currentPage:Object.values(n).find(c=>e.location.pathname.includes(c.path))??n[0],exactCurrentPage:Object.values(n).find(c=>e.location.pathname.includes(c.path))??null});return l.useEffect(()=>{a({currentPage:Object.values(n).find(c=>e.location.pathname.includes(c.path))??n[0],exactCurrentPage:Object.values(n).find(c=>c.path.includes(e.location.pathname))??null})},[(d=i.user)==null?void 0:d.subdivisions]),l.useEffect(()=>e.listen(c=>{a({currentPage:Object.values(n).find(p=>c.pathname.includes(p.path))??n[0],exactCurrentPage:Object.values(n).find(p=>p.path.includes(c.pathname))??null})}),[e,n]),{currentPage:o,exactCurrentPage:s}},pb=()=>{const{data:{user:e}}=oe.useUser(),[i,n]=l.useState(!1),s=o=>{const a=localStorage.getItem("lastLocalAccess")||o,r=new Date(Cl);new Date(o)<r&&new Date(a)<r&&(localStorage.setItem("lastLocalAccess",new Date().toISOString()),n(!0))};return l.useEffect(()=>{e&&s(e.lastaccess)},[e]),i},ub=()=>{const{data:{user:e}}=oe.useUser(),{currentPage:i,exactCurrentPage:n}=db(),{open:s}=G(),o=pb();return l.useEffect(()=>{e&&Ul.getLocalSettingsFx(e.id)},[e]),cb(),Kt(),l.useEffect(()=>{o&&o&&s(t.jsx(vo,{}),"Что нового")},[o]),{currentPage:i,exactCurrentPage:n}},hb=f.div`
    display: flex;
    background: var(--theme);
    height: 100dvh;
`,gb=f.div`
    width: 100%;
    height: 100%;
    z-index: 3;
    background: var(--theme);
    overflow: hidden;
    position: relative;

    @media (max-width: 1000px) {
        font-size: 0.9em;
    }
`,fb=f.div`
    position: relative;
    overflow-x: hidden;
    overflow-y: scroll;
    padding-top: ${({withHeader:e})=>e?"var(--header-height)":"0"};
    width: 100%;
    height: 100%;

    @media (max-width: 1000px) {
        margin-bottom: var(--mobile-bottom-menu-height);
        height: calc(100% - var(--mobile-bottom-menu-height));
    }
`,xb=()=>{var d;const{data:{user:e}}=oe.useUser(),{currentPage:i,exactCurrentPage:n}=ub(),[s,o]=l.useState(!1),a=l.useRef(null),r=c=>{o(c.currentTarget.scrollTop>0)};return t.jsxs(hb,{children:[t.jsx(Q0,{loading:!e}),t.jsx(lb,{}),t.jsx(ah,{}),t.jsxs(gb,{children:[t.jsx(Gu,{headerVisible:s,currentPagePair:{currentPage:i,exactCurrentPage:n}}),t.jsx(fb,{ref:a,onScroll:r,withHeader:!((d=n??i)!=null&&d.withoutHeader),children:t.jsx(l.Suspense,{fallback:null,children:t.jsx(W0,{})})}),t.jsx(eg,{})]}),t.jsx(hh,{}),t.jsx(lh,{}),t.jsx(fh,{}),t.jsx(G0,{}),t.jsx(rg,{}),t.jsx(J0,{})]})},mb=()=>{const{data:{isAuthenticated:e,user:i}}=oe.useUser(),{data:n}=mi.selectors.useData(),{settings:s}=rt.useSettings(),[o,a]=l.useState(e);return l.useEffect(()=>(e?(setTimeout(()=>{a(!0)},1e3),mi.effects.getFx(),Ye.getUserDataApplicationsFx(),Ye.getWorkerPosts()):a(!1),()=>{a(!1)}),[e]),l.useEffect(()=>{i&&s&&be.defineMenu({user:i,adminLinks:n,homeRoutes:s["settings-home-page"].property.pages})},[i,n,s]),e&&o?t.jsx(xb,{}):t.jsx(l.Suspense,{fallback:null,children:t.jsxs(ds,{children:[U0.map(({path:r,Component:d},c)=>t.jsx(ps,{path:r,component:d,exact:!0},c)),t.jsx(us,{exact:!0,to:wr})]})})},bb=f.div`
    background: var(--theme);
    overflow-y: auto;
    height: 100vh;
`,vb=()=>(Kt(),t.jsx(Hl,{children:t.jsx(Sl,{basename:"/",children:t.jsx(bb,{children:t.jsx(mb,{})})})})),_b=$l`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: "Montserrat", sans-serif;
		-webkit-tap-highlight-color:  rgba(255, 255, 255, 0);
	}

	h1, h2, h3, h4, h5, h6 {
		font-weight: 600;
	}

	#root {
		height: 100vh;
	}

	body {
		overflow: hidden;
	}

	@media (min-width: 1001px) {
		::-webkit-scrollbar {
			width: 14px;
		}
	
		::-webkit-scrollbar-track {
			background-color: transparent;
		}
	
		::-webkit-scrollbar-thumb {
			border-radius: 100px;
			border: 4px solid transparent;
			background-clip: content-box;
			background-color: var(--theme-mild-opposite);
		}

		::-webkit-scrollbar-thumb:hover {
			border: 3px solid transparent;
		}
	}



	h1 {
		color: var(--text-color);
	}

	:root {
		--light-box-shadow: 0 0 3px rgba(0, 0, 0, 0.342);
		--header-box-shadow: 3px 0 3px rgba(0, 0, 0, 0.342);
		--grey: #808080;
		--brLight: 9px;
		--brSemi: 19px;
		--brBold: 30px;
		--strong-shadow: 0 0 50px #000;
		--very-mild-shadow: 0 0 32px rgb(0 0 0 / 8%);
		--desktop-page-padding: 40px;
		--mobile-page-padding: 5px;
        --header-height: 55px;
        --mobile-bottom-menu-height: 60px;
	}

	html[data-theme=dark] {
		--blue: #6d86e3;
		--primary-background: rgb(34, 34, 34);
		--mild-theme: #363636;
		--leftside-bar: #3b3b3b;
		--leftside-bar-shadow: 5px 5px 10px rgba(0,0,0,0.377);
		--theme-mild-xxl: #0000001f;
		--theme-mild-xl: #0000005e;
		--header: #373737;
		--search2: #313131;
		--search: #313131;
		--text: #f0f0f0;
		--invert-text: #272727;
		--select: #292929;
		--content: #474747;
		--invert: 0;
		--double-invert: 1;
		--closeToContent: #3a3a3a;
		--theme: #3a3a3a;
		--theme-mild-opposite: #d2d2d2;
		--settings: #292929;
		--blue: #90b3e7;
		--green: #94f0b9;
		--red: #e27992;
		--purple: #6f72d4;
		--mildPurple: #8d91f8;
		--orange: #f0b357;
		--reallyBlue: #567dff;
		--lightBlue: #dbdbff;
		--darker: #272727;	
		--purpleGradient: linear-gradient(45deg,#99a2f4,#b199f4);
		--orangeGradient: linear-gradient(45deg,#e27992,#f4af99);
		--almostTransparent: rgba(0,0,0,0.281);
		--almostTransparentOpposite: hsla(0,0%,100%,0.103);
		--schedule: #2e2e2e;
		--scheduleBg: #232323;
		--schedule-shadow: 0;
		--info-blue: #83a2ff;
		--form: #252525;
	}

	html[data-theme=light] {
		--blue: #6d86e3;
		--leftside-bar: #f1f1f1;
		--mild-theme: #f5f5f5;
		--primary-background: rgb(243, 243, 243);
		--leftside-bar-shadow: 5px 5px 10px hsla(0,0%,40.8%,0.24);
		--theme-mild-xxl: #00000005;
		--theme-mild-xl: #ffffff8f;
		--header: #e9e9e9;
		--text: #272727;
		--invert-text: #f0f0f0;
		--select: #f3f3f3;
		--content: #f1f1f1;
		--invert: 1;
		--double-invert: 0;
		--closeToContent: #f3f3f3;
		--theme: #fff;
		--theme-mild-opposite: #565656;
		--search2: #eee;
		--search: #f5f5f5;
		--settings: #dadada;
		--green: #62c087;
		--red: #e27992;
		--orange: rgb(203 104 46);
		--purple: #9094fe;
		--mildPurple: #9a99ff;
		--reallyBlue: #567dff;
		--lightBlue: #dbdbff;
		--darker: #c4c4c4;
		--purpleGradient: linear-gradient(90deg,#6e72eb,rgb(91 129 237));
		--orangeGradient: linear-gradient(45deg,#ffbdf1,#ff94ad);
		--almostTransparent: hsla(0,0%,87.8%,0.486);
		--almostTransparentOpposite: rgba(53,53,53,0.151);
		--schedule: #fff;
		--scheduleBg: #eee;
		--schedule-shadow: 0 0 2px rgb(0 0 0 / 24%);
		--info-blue: #133db8;
		--form: #fff;
	}

	a {
		text-decoration: none;
		color: var(--blue);
		
		&:focus {
        outline: 4px solid var(--almostTransparentOpposite);
    	}

		&:focus:not(:focus-visible) {
			outline: none;
		}
	}

	@keyframes defaultFadeIn {
		0%{
			transform: translateY(20px);
			opacity: 0;
		}
		100%{
			transform: translateY(0px);
			opacity: 1;
		}
	}
`;Pl.render(t.jsxs(ne.StrictMode,{children:[t.jsx(_b,{}),t.jsx(vb,{})]}),document.getElementById("root"));export{L as $,cx as A,Ae as B,Le as C,Qp as D,ce as E,Mi as F,Hu as G,oe as H,Qf as I,Ui as J,Be as K,zs as L,se as M,yc as N,wc as O,S0 as P,Zs as Q,Ip as R,Ds as S,Y as T,iu as U,$e as V,zi as W,Np as X,Ir as Y,F0 as Z,Yb as _,V as a,Ab as a$,lt as a0,lx as a1,ax as a2,an as a3,Hb as a4,pm as a5,Ke as a6,dm as a7,R as a8,Se as a9,ct as aA,Jc as aB,Qc as aC,ac as aD,ga as aE,Ri as aF,Yh as aG,Ic as aH,ye as aI,xm as aJ,$m as aK,rt as aL,Fi as aM,Cr as aN,Su as aO,xe as aP,ro as aQ,zu as aR,Om as aS,mm as aT,ym as aU,dt as aV,wb as aW,qb as aX,Tr as aY,Pm as aZ,Ld as a_,Ys as aa,Vs as ab,Bb as ac,bo as ad,Wl as ae,Xt as af,Wb as ag,Xl as ah,B0 as ai,vp as aj,Rb as ak,wp as al,yp as am,Tc as an,Ec as ao,Rd as ap,Oh as aq,ae as ar,Kb as as,Yt as at,Ct as au,D as av,me as aw,j as ax,Zt as ay,G as az,Bm as b,Ls as b0,O as b1,di as b2,Pb as b3,Gs as b4,st as b5,De as b6,Cb as b7,_h as b8,Db as b9,no as bA,Tb as bB,To as bC,Eb as bD,Xb as bE,At as bF,cn as bG,Iu as bH,Em as bI,Km as bJ,It as bK,Ob as bL,Nm as bM,Im as bN,Rc as bO,jb as bP,kb as bQ,Cc as bR,Hd as bS,Ub as bT,Lt as bU,sx as bV,ox as bW,nx as bX,ix as bY,zh as bZ,_m as b_,zb as ba,Mb as bb,Lb as bc,Ib as bd,Rt as be,Nb as bf,re as bg,Au as bh,po as bi,N0 as bj,Te as bk,Ai as bl,dg as bm,Qs as bn,Kt as bo,hs as bp,qt as bq,up as br,pp as bs,$b as bt,Sb as bu,Ks as bv,qs as bw,Ot as bx,Cu as by,wh as bz,Yc as c,mi as d,Um as e,w as f,ue as g,Vi as h,Fb as i,ke as j,Vb as k,qe as l,Gb as m,ua as n,M as o,Hc as p,Df as q,ze as r,Fm as s,Ze as t,Jt as u,ee as v,Tt as w,pe as x,Rf as y,Js as z};
