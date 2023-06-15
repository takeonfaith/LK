import{F as lt,a as at,b as Fe,c as yi,H as _n,y as F,u as k,p as W,d as P,r as c,j as n,e as ct,S as Be,s as x,f as Oe,I as kr,g as Sr,h as Or,i as Pr,A as wi,k as A,l as $r,m as _i,n as dt,B as Ar,o as Cr,q as pt,R as G,t as rt,v as ut,w as kt,x as Lt,z as Rr,C as Ir,D as Nr,E as Lr,G as Dr,J as yt,K as zr,L as Mr,M as Fr,N as Ur,O as Br,P as jn,Q as Hr,T as ji,U as Wr,V as Tn,W as I,X as Ti,Y as Dt,Z as Ce,_ as Vr,$ as Gr,a0 as qr,a1 as Yr,a2 as sn,a3 as Kr,a4 as ot,a5 as Ei,a6 as Jr,a7 as Y,a8 as an,a9 as Xr,aa as rn,ab as ki,ac as Zr,ad as Qr,ae as zt,af as Si,ag as Oi,ah as Pi,ai as eo,aj as to,ak as no,al as io,am as so,an as ao,ao as $i,ap as ro,aq as oo,ar as lo,as as co,at as po,au as uo,av as ho,aw as go,ax as fo,ay as Ai,az as Ci,aA as Ri,aB as xo,aC as mo,aD as En,aE as bo,aF as vo,aG as yo}from"./vendor-0c76c893.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function i(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(a){if(a.ep)return;a.ep=!0;const r=i(a);fetch(a.href,r)}})();const wo="Не удалось загрузить информацию. Проверьте соединение и попробуйте ещё раз",_o=3,St=["home","settings","all"],Ii=["home","settings","download-agreements","all"],Ni="https://lk.eseur.ru/signup",jo="https://old.mospolytech.ru/index.php?id=3428",_={green:{dark3:"#106c3f",dark2:"#188851",dark1:"#27b56e",main:"#3cd288",light1:"#59e5a0",light2:"#84ebb7",light3:"#a8ffd3",transparent1:"#a7ffd38a",transparent2:"#a7ffd324",transparent3:"#a7ffd30f"},lightGreen:{dark3:"#166363",dark2:"#207878",dark1:"#2e9b9b",main:"#40c5c5",light1:"#66dfdf",light2:"#8bf1f1",light3:"#a3fbfb",transparent1:"#a3fbfb99",transparent2:"#a3fbfb59",transparent3:"#a3fbfb29"},blue:{dark3:"#29349c",dark2:"#3742b1",dark1:"#4552c9",main:"#5f6dec",light1:"#7c88f5",light2:"#99a3ff",light3:"#bac0ff",transparent1:"#bac0ffa3",transparent2:"#bac0ff42",transparent3:"#bac0ff17"},lightBlue:{dark3:"#5278cd",dark2:"#668de4",dark1:"#789ff6",main:"#9cbbff",light1:"#b9cfff",light2:"#ceddff",light3:"#e0e9ff",transparent1:"#e0e9ffba",transparent2:"#e0e9ff6b",transparent3:"#e0e9ff29"},purple:{dark3:"#5b248d",dark2:"#7434af",dark1:"#8b4ac7",main:"#a85fec",light1:"#bd7cfa",light2:"#ce99ff",light3:"#dcb7ff",transparent1:"#dcb7ff99",transparent2:"#dcb7ff5c",transparent3:"#dcb7ff2b"},pink:{dark3:"#932066",dark2:"#a62b77",dark1:"#c34191",main:"#ec5fb6",light1:"#fd84cf",light2:"#ffa8de",light3:"#ffbce5",transparent1:"#ffbce59e",transparent2:"#ffbce561",transparent3:"#ffbce530"},red:{dark3:"#a3252f",dark2:"#bf3641",dark1:"#cf4b56",main:"#ec5f6b",light1:"#ff7b86",light2:"#ff98a1",light3:"#ffbbc1",transparent1:"#ffbbc194",transparent2:"#ffbbc159",transparent3:"#ffbbc133"},orange:{dark3:"#985e1d",dark2:"#a76821",dark1:"#ca8231",main:"#ee9e44",light1:"#fcb566",light2:"#ffc686",light3:"#ffd7ab",transparent1:"#ffd7ab99",transparent2:"#ffd7ab54",transparent3:"#ffd7ab1f"},grey:{dark3:"#353535",dark2:"#484848",dark1:"#646464",main:"#797979",light1:"#979797",light2:"#bdbdbd",light3:"#d5d5d5",transparent1:"#d5d5d5a3",transparent2:"#d5d5d559",transparent3:"#d5d5d521"},white:{dark3:"",dark2:"",dark1:"",main:"#fff",light1:"",light2:"",light3:"",transparent1:"",transparent2:"#80808014",transparent3:"#ffffff17"}},Px={monday:{full:"Понедельник",short:"Пн"},tuesday:{full:"Вторник",short:"Вт"},wednesday:{full:"Среда",short:"Ср"},thursday:{full:"Четверг",short:"Чт"},friday:{full:"Пятница",short:"Пт"},saturday:{full:"Суббота",short:"Сб"}},$x={Зачтено:_.green.main,Отлично:_.green.main,Хорошо:_.blue.main,Удовлетворительно:_.orange.main,Неудовлетворительно:_.red.main,"Не явился":_.red.main,default:_.red.main},Ax={Зачтено:100,Отлично:100,Хорошо:80,Удовлетворительно:60,Неудовлетворительно:20,"Не явился":20,default:40},Cx={Зачтено:5,Отлично:5,Хорошо:4,Удовлетворительно:3,"Не явился":2,Неудовлетворительно:2},de="https://e.mospolytech.ru/old",To="2022-12-22T10:00:00",Ee={info:{icon:lt,color:"blue",title:"Информация"},alert:{icon:at,color:"orange",title:"Внимание!"},failure:{icon:Fe,color:"red",title:"Ошибка"},success:{icon:yi,color:"green",title:"Успешно"},tip:{icon:_n,color:"grey",title:"Подсказка"},hint:{icon:_n,color:"white",title:"Подсказка"}},Eo={"-":"red",А:"lightGreen",Б:"purple",В:"green",Г:"pink",Д:"blue",Е:"blue",Ё:"red",Ж:"blue",З:"lightGreen",И:"pink",Й:"lightBlue",К:"lightGreen",Л:"green",М:"red",Н:"green",О:"purple",П:"blue",Р:"lightBlue",С:"orange",Т:"blue",У:"lightGreen",Ф:"blue",Х:"green",Ч:"purple",Ц:"green",Ш:"red",Щ:"red",Ъ:"purple",Ы:"green",Ь:"blue",Э:"red",Ю:"orange",Я:"green",A:"lightGreen",B:"purple",C:"green",D:"pink",E:"purple",F:"blue",G:"red",H:"blue",I:"lightGreen",J:"pink",K:"lightGreen",L:"green",M:"red",N:"green",O:"purple",P:"blue",Q:"lightBlue",R:"orange",S:"blue",T:"lightGreen",U:"blue",V:"green",W:"purple",X:"red",Y:"red",Z:"purple"},ko=["image/jpeg","image/jpg","image/png","application/pdf"],So=10,Oo="376px",kn=!0,Po=()=>Object.keys(xe).reduce((e,t)=>(e[t]={id:t,property:{}},e),{}),Li=(e="")=>({[e]:{...Po(),[xe["settings-appearance"]]:{id:xe["settings-appearance"],property:{theme:"dark",scheduledLightTheme:!1,lightThemeRange:["300","1140"]}},[xe["settings-home-page"]]:{id:xe["settings-home-page"],property:{pages:["settings","profile","chat","schedule","payments","project-activity","all-students"],widgetSchedule:!0,widgetPayment:!0}},[xe["settings-customize-menu"]]:{id:xe["settings-customize-menu"],property:{pages:St}}}});var xe=(e=>(e["settings-home-page"]="settings-home-page",e["settings-personal"]="settings-personal",e["settings-appearance"]="settings-appearance",e["settings-customize-menu"]="settings-customize-menu",e))(xe||{});const Bt={settings:Li(),error:null,completed:!1};let ne;const $o=()=>({settings:P(wt).settings[ne],error:P(wt).error,completed:P(wt).completed}),Di=F(e=>(ne=e,JSON.parse(localStorage.getItem("new-settings")??"{}")[ne]??Li(e)[e])),zi=k(),Mi=k(),Fi=k(),wt=W(Bt).on(Mi,(e,t)=>({...e,completed:t.completed})).on(Di.doneData,(e,t)=>({...e,settings:{[ne]:t}})).on(zi,(e,{nameSettings:t,nameParam:i,value:s})=>({...e,settings:{[ne]:{...e.settings[ne],[t]:{...e.settings[ne][t],property:{...e.settings[ne][t].property,[i]:s}}}}})).on(Fi,()=>({...Bt}));wt.watch(e=>{if(e!==Bt&&ne){const t=JSON.parse(localStorage.getItem("new-settings")??JSON.stringify({}));t[ne]=e.settings[ne],localStorage.setItem("new-settings",JSON.stringify(t))}});const on={useSettings:$o},ht={updateSetting:zi,changeCompleted:Mi,clearStore:Fi},Ao={getLocalSettingsFx:Di},gt=()=>{const{settings:e}=on.useSettings(),[t,i]=c.useState("light");c.useEffect(()=>{if(e){const a=e["settings-appearance"].property.theme;document.documentElement.getAttribute("data-theme"),document.documentElement.setAttribute("data-theme",a),i(a)}else document.documentElement.setAttribute("data-theme","light")},[e]);const s=c.useCallback(a=>{i(()=>{const r=a?"dark":"light";return document.documentElement.setAttribute("data-theme",r),ht.updateSetting({nameSettings:"settings-appearance",nameParam:"theme",value:r}),r})},[]);return{theme:t,switchTheme:s}},ln=c.createContext({isOpen:!1,component:void 0,back:()=>{},close:()=>{},open:()=>{},canBack:!1}),Co=({children:e})=>{const[t,i]=c.useState(!1),[s,a]=c.useState([]),r=s.length>1,o=c.useCallback(()=>{r&&(s.pop(),a([...s]))},[s,a]),l=c.useCallback(m=>{m&&(a(t?()=>[...s,m]:()=>[m]),i(()=>!0))},[a,i,s,t]),d=c.useCallback(()=>{i(()=>!1)},[a,i]),p=c.useMemo(()=>s[s.length-1],[s]),u=c.useCallback(m=>{m&&a([...s,m])},[]);return n.jsx(ln.Provider,{value:{back:o,open:l,close:d,isOpen:t,canBack:r,component:p,setComponent:u},children:e})},J=()=>{const{open:e,isOpen:t,...i}=c.useContext(ln);return{open:e,isOpen:t,...i}},Ot=()=>localStorage.getItem("jwt"),Ro=e=>{const i=e.split(".")[1].replace(/-/g,"+").replace(/_/g,"/"),s=decodeURIComponent(window.atob(i).split("").map(function(a){return"%"+("00"+a.charCodeAt(0).toString(16)).slice(-2)}).join(""));return JSON.parse(s)},Io=`${de}/lk_api.php`,No="https://api.mospolytech.ru/serviceforfrontpersonnelorders/",Lo="https://api.mospolytech.ru/serviceforfrontpersonnelorders/Dismissal.GetAllHistory",Do="https://api.mospolytech.ru/serviceforfrontpersonnelorders/Dismissal.AllHistory",R=ct.create({baseURL:Io,withCredentials:!0}),Ui=ct.create({baseURL:Lo,timeout:3e4}),zo=ct.create({baseURL:Do}),Mo=ct.create({baseURL:No});Ui.interceptors.request.use(e=>(e.headers||(e.headers={}),e.headers.Authorization=`Bearer ${JSON.parse(Ot()||"{}")}`,e));zo.interceptors.request.use(e=>(e.headers||(e.headers={}),e.headers.Authorization=`Bearer ${JSON.parse(Ot()||"{}")}`,e));Mo.interceptors.request.use(e=>(e.headers||(e.headers={}),e.headers.Authorization=`Bearer ${JSON.parse(Ot()||"{}")}`,e));function L(){var e;return(e=JSON.parse(localStorage.getItem("token")??sessionStorage.getItem("token")??"null"))==null?void 0:e.token}const Fo=({login:e,password:t})=>R.post("",`ulogin=${encodeURIComponent(e)}&upassword=${encodeURIComponent(t)}`),Uo=e=>R.get(`?getUser&token=${e}`),Bo=e=>R.get(`?getADName&fio=${e.fio}&pn=${e.pn}`),Rx=async e=>{const t=new FormData;return t.set("avatar",e??""),t.set("token",L()),R.post("?changeAvatar=1",t,{headers:{"Content-Type":"multipart/form-data"}})},Ix=async(e,t)=>{const i=new FormData;return i.set("old_pass",e),i.set("new_pass",t),R.post(`?changeADPass=1&token=${L()}`,i,{headers:{"Content-Type":"multipart/form-data"}})},Nx=async e=>{const t=new FormData;return t.set("email",e),t.set("token",L()),R.post("?changeEmail=1",t,{headers:{"Content-Type":"multipart/form-data"}})},Lx=async e=>{const t=new FormData;return t.set("phone",e),t.set("token",L()),R.post("?changePhone=1",t,{headers:{"Content-Type":"multipart/form-data"}})},Ho=e=>R.get(`?getSchedule&group=${e}&token=${L()}`),Sn=e=>R.get(`?getScheduleTeacher&fio=${e}&token=${L()}`),Wo=()=>R.get(`?getSchedule&session=1&token=${L()}`),On=e=>R.get(`?getScheduleTeacher&fio=${e}&session=1&token=${L()}`),Vo=()=>R.get(`?getPayments&token=${L()}`),Dx=e=>R.get(`?signAgreement=${e}&token=${L()}`),Go=e=>R.get(`?signContract=${e}&token=${L()}`),qo=async({semestr:e})=>{var t,i;return(i=(t=await R.get(`?getAcademicPerformance&semestr=${e}&token=${L()}`))==null?void 0:t.data)==null?void 0:i.academicPerformance},Yo=e=>R.get(`?getMessages&token=${L()}&id=${e}`),Ko=()=>R.get(`?getPEPStatus&token=${L()}`),Jo=()=>R.get(`?setPEPAccept&token=${L()}`),Xo=()=>R.get(`?getContactData&token=${L()}`),Zo=e=>{const t=new FormData;t.set("token",L()),t.set("saveContactData","1");for(const[i,s]of Object.entries(e))t.set(i,s);return R.post("?saveContactData=1",t,{headers:{"Content-Type":"multipart/form-data"}})},Qo=()=>R.get(`?getRequestHighComfort&token=${L()}`),zx=e=>{const t=new FormData;t.set("token",L()),t.set("postRequestHighComfort","1");for(const[i,s]of Object.entries(e))t.set(i,s);return R.post("?postRequestHighComfort=1",t,{headers:{"Content-Type":"multipart/form-data"}})},el=()=>R.get(`?getAppRequests&token=${L()}`),tl=()=>R.get(`?getAppData&token=${L()}`),nl=()=>Ui.get(`?employeeGuid=${Ro(JSON.parse(Ot()||"{}")).IndividualGuid}`),il=async e=>{const{formId:t,args:i}=e,s=new FormData;s.set("token",L()),s.set("saveAppData",t);for(const[r,o]of Object.entries(i))s.set(r,o);const{data:a}=await R.post(`?saveAppData=${t}`,s,{headers:{"Content-Type":"multipart/form-data"}});return a.result},sl=async()=>(await R.get(`?getAdminLinks&token=${L()}`)).data,al=async e=>(await R.get(`?PDinfo&token=${L()}`)).data,Bi=()=>R.get(`?getNotification&token=${L()}`),rl=e=>R.get(`?viewNotification=${e}&token=${L()}`),ol=Object.freeze(Object.defineProperty({__proto__:null,get:Bi,view:rl},Symbol.toStringTag,{value:"Module"})),Hi=()=>R.get(`?getDocList&token=${L()}`).then(e=>({...e,data:e.data.map(t=>({...t,document:!0}))})),ll=e=>R.get(`?viewDoc=${e}&token=${L()}`),cl=Object.freeze(Object.defineProperty({__proto__:null,get:Hi,view:ll},Symbol.toStringTag,{value:"Module"})),dl=()=>R.get(`?getCheckData&token=${L()}`),pl=e=>{const t=new FormData;t.set("token",L()),t.set("saveCheckData","1");for(const[i,s]of Object.entries(e))t.set(i,s);return R.post("?saveCheckData=1",t,{headers:{"Content-Type":"multipart/form-data"}})},Pn={data:null,loading:!1,error:null},cn=({initialStore:e,api:t,prepareData:i,errorMessage:s=()=>wo})=>{const a=e??Pn,r=()=>({data:P(d).data,loading:P(o.pending),error:P(d).error}),o=F(async p=>{try{const u=await t.get(p);return i?i(u):u}catch(u){throw new Error(s(u))}}),l=k(),d=W(a).on(o,p=>({...p,error:null})).on(o.doneData,(p,u)=>({...p,data:u})).on(o.failData,(p,u)=>({...p,error:u.message})).on(l,()=>({...Pn}));return{selectors:{useData:r},effects:{getFx:o},events:{clearStore:l}}},le="exam",Wi="test",ul={"Курсовой проект":le,"Курсовая работа":le,"Дипломный проект":le,"Дипломная работа":le,"ГЭК. Защита ВКР":le,Экзамен:le,Практика:le,"Дифференцированный зачет":le,Зачет:Wi};function hl(e){const t={[le]:[],[Wi]:[]};for(const i of e)t[ul[i.exam_type]].push(i);return t}const gl=cn({api:{get:qo},prepareData:hl}),Ht=cn({api:{get:sl}}),$n={listApplication:null,error:null,dataUserApplication:null,dataWorkerApplication:null},fl=()=>{const{listApplication:e,dataUserApplication:t,dataWorkerApplication:i,error:s}=P(xl);return{data:{listApplication:e,dataUserApplication:t,dataWorkerApplication:i},loading:P(Ze.pending),error:s}},Xe=F(async()=>{const e=await el();try{return e.data.reverse()}catch{throw new Error("Не удалось загрузить заявления")}}),Ze=F(async()=>{const e=await tl();try{return e.data}catch{throw new Error("Не удалось загрузить информацию о пользователе")}}),Vi=F(async e=>{const t=await il(e);if(t==="ok")return"ok";throw new Error(t)}),_t=F(async()=>{const e=await nl();try{return e.data}catch{throw new Error("Не удалось загрузить информацию о пользователе")}}),Gi=k();Be({from:Vi.doneData,to:Xe});const xl=W($n).on(Ze,e=>({...e,error:null})).on(Ze.doneData,(e,t)=>({...e,dataUserApplication:t})).on(Ze.failData,(e,t)=>({...e,error:t.message})).on(Xe,e=>({...e,error:null})).on(Xe.doneData,(e,t)=>({...e,listApplication:t})).on(Xe.failData,(e,t)=>({...e,error:t.message})).on(_t,e=>({...e,error:null})).on(_t.doneData,(e,t)=>({...e,dataWorkerApplication:t})).on(_t.failData,(e,t)=>({...e,error:t.message})).on(Gi,()=>({...$n})),He={useApplications:fl},ke={getApplicationsFx:Xe,getUserDataApplicationsFx:Ze,postApplicationFx:Vi,getWorkerPosts:_t},ml={clearStore:Gi},bl=Object.freeze(Object.defineProperty({__proto__:null,effects:ke,events:ml,selectors:He},Symbol.toStringTag,{value:"Module"})),An={isOpen:!1,message:null,onConfirm:()=>null,onReject:()=>null},vl=()=>P(yl),qi=k(),Yi=k(),Ki=k(),yl=W(An).on(qi,(e,{message:t,onReject:i,onConfirm:s})=>({isOpen:!0,message:t,onConfirm:s,onReject:i})).on(Yi,e=>({...e,isOpen:!1})).on(Ki,()=>({...An})),Ji={useConfirm:vl},pe={evokeConfirm:qi,closeConfirm:Yi,clearStore:Ki},wl=Object.freeze(Object.defineProperty({__proto__:null,events:pe,selectors:Ji},Symbol.toStringTag,{value:"Module"})),_l=({defaultStore:e,api:t})=>{const i=e,s=()=>({data:P(d).data,loading:P(o.pending),error:P(d).error,completed:P(d).completed}),a=k(),r=F(async p=>{try{return(await t.post(p)).data}catch{throw new Error("Не удалось отправить данные. Проверьте интернет соединение и попробуйте снова")}}),o=F(async()=>{if(t.get)try{return{...(await t.get()).data}}catch(p){throw new Error(p)}return i.data}),l=k(),d=W(i).on(o,p=>({...p,error:null})).on(o.doneData,(p,u)=>({...p,data:u})).on(o.failData,(p,u)=>({...p,error:u.message})).on(a,(p,u)=>({...p,completed:u.completed})).on(l,()=>({...i}));return{selectors:{useForm:s},effects:{getFormFx:o,postFormFx:r},events:{changeCompleted:a,clearStore:l}}},{effects:jl,events:Tl,selectors:El}=_l({defaultStore:{completed:!1,error:null,loading:!0,data:null},api:{get:Xo,post:Zo}}),kl=Object.freeze(Object.defineProperty({__proto__:null,effects:jl,events:Tl,selectors:El},Symbol.toStringTag,{value:"Module"})),Cn={electronicInteraction:null,error:null,completed:!1},Sl=()=>({data:P(Mt).electronicInteraction,loading:P(Qe.pending),error:P(Mt).error,completed:P(Mt).completed}),Ol=k(),Xi=k(),Pl=F(async()=>{try{return(await Jo()).data}catch{throw new Error("Не удалось загрузить раздел")}}),Qe=F(async()=>{try{return(await Ko()).data[0]}catch(e){throw new Error(e)}}),Zi=k(),Mt=W(Cn).on(Qe,e=>({...e,error:null})).on(Qe.doneData,(e,t)=>({...e,electronicInteraction:t})).on(Qe.failData,(e,t)=>({...e,error:t.message})).on(Xi,(e,t)=>({...e,completed:t.completed})).on(Zi,()=>({...Cn})),$l={useElectronicInteraction:Sl},Al={getElectronicInteractionFx:Qe,postElectronicInteractionFx:Pl},Cl={postElectronicInteraction:Ol,changeCompleted:Xi,clearStore:Zi},Rl=Object.freeze(Object.defineProperty({__proto__:null,effects:Al,events:Cl,selectors:$l},Symbol.toStringTag,{value:"Module"})),Rn={messages:null,error:null},Il=()=>({data:P(In).messages,loading:P(et.pending),error:P(In).error}),et=F(async()=>{try{return(await Yo("1")).data}catch(e){throw new Error(e)}}),Qi=k(),In=W(Rn).on(et,e=>({...e,error:null})).on(et.doneData,(e,t)=>({...e,messages:t})).on(et.failData,(e,t)=>({...e,error:t.message})).on(Qi,()=>({...Rn})),Nl={useMessages:Il},Ll={getMessagesFx:et},Dl={clearStore:Qi},zl=Object.freeze(Object.defineProperty({__proto__:null,effects:Ll,events:Dl,selectors:Nl},Symbol.toStringTag,{value:"Module"})),Nn={type:null,personalNotifications:null,error:null,completed:!1},Ml=()=>({data:P(Me).personalNotifications,loading:P(ze.pending),error:P(Me).error,completed:P(Me).completed}),Fl=()=>P(Me).type,es=k(),ts=F(e=>e),ze=F(async()=>{const{type:e}=Me.getState();if(e==="notifications")try{return(await Bi()).data}catch(t){throw new Error(t)}try{return{docs:(await Hi()).data}}catch(t){throw new Error(t)}}),Tt=F(async e=>{const{type:t}=Me.getState(),i=t==="notifications"?ol:cl;try{return await i.view(e),"ok"}catch{throw new Error("Ошибка загрузки данных")}}),ns=k(),Me=W(Nn).on(ts,(e,t)=>({...e,type:t})).on(ze,e=>({...e,error:null})).on(ze.doneData,(e,t)=>({...e,personalNotifications:t})).on(ze.failData,(e,t)=>({...e,error:t.message})).on(Tt.doneData,e=>({...e})).on(Tt.failData,(e,t)=>({...e,error:t.message})).on(es,(e,t)=>({...e,completed:t.completed})).on(ns,()=>({...Nn}));Tt.doneData.watch(()=>ze());const Ul={usePersonalNotifications:Ml,useType:Fl},Bl={setNotificationsType:ts,getPersonalNotificationsFx:ze,viewPersonalNotificationsFx:Tt},Hl={changeCompleted:es,clearStore:ns},Wl=Object.freeze(Object.defineProperty({__proto__:null,effects:Bl,events:Hl,selectors:Ul},Symbol.toStringTag,{value:"Module"})),Vl=(e,t,i)=>{if(!e)return null;const s=e.dormitory.map(a=>a.id===t?{...a,can_sign:i}:a);return{...e,dormitory:s}},Ln={payments:null,error:null},Gl=()=>({data:P(Dn).payments,loading:P(tt.pending),error:P(Dn).error}),tt=F(async()=>{const e=await Vo();if(!e.data.contracts.education&&!e.data.contracts.dormitory)throw new Error("У вас нет данных по оплате");try{return e.data.contracts}catch{throw new Error("Не удалось загрузить оплату")}}),Wt=F(async e=>{try{return await Go(e),e}catch(t){throw new Error("Не удалось подписать конкракт. Причина: "+t)}}),is=k(),Dn=W(Ln).on(tt,e=>({...e,error:null})).on(tt.doneData,(e,t)=>({...e,payments:t})).on(tt.failData,(e,t)=>({...e,error:t.message})).on(Wt.doneData,(e,t)=>({...e,payments:Vl(e.payments,t,!1)})).on(Wt.failData,(e,t)=>({...e,error:t.message})).on(is,()=>({...Ln})),ql={usePayments:Gl},Yl={getPaymentsFx:tt,signContractFx:Wt},Kl={clearStore:is},Jl=Object.freeze(Object.defineProperty({__proto__:null,effects:Yl,events:Kl,selectors:ql},Symbol.toStringTag,{value:"Module"})),zn={message:"",type:"success",isOpen:!1,time:2e3},Xl=()=>P(Zl),ss=k(),as=k(),rs=k(),Zl=W(zn).on(ss,(e,{message:t,type:i,time:s=2e3,onClick:a})=>({isOpen:!0,message:t,type:i,time:s,onClick:a})).on(as,(e,{isOpen:t})=>({...e,isOpen:t})).on(rs,()=>({...zn})),os={usePopUpMessage:Xl},z={evokePopUpMessage:ss,openPopUpMessage:as,clearStore:rs},Ql=Object.freeze(Object.defineProperty({__proto__:null,events:z,selectors:os},Symbol.toStringTag,{value:"Module"})),ec=cn({api:{get:al}}),tc=(e,t="minutes")=>{switch(t){case"minutes":const i=new Date,[s]=e.split(" - "),[a,r]=s.split(":");return+a*60+ +r-(i.getHours()*60+i.getMinutes());case"days":const o=new Date(e);return Math.ceil(Math.floor((o.getTime()-new Date().getTime())/1e3/60/60)/24)}},Mn=e=>e&&Object.keys(e).length?Object.keys(e).findIndex(i=>{const s=tc(i,"days");return s>=0&&s<30})+1:0,nc=(e,t)=>e&&e[0]?Object.keys(e[0]).find((i,s)=>s+1===t)||"sunday":e&&e[2]?"":"sunday";function Ue({name:e,surname:t,patronymic:i}){return`${t} ${e} ${i}`}var Vt=(e=>(e[e.Янв=1]="Янв",e[e.Фев=2]="Фев",e[e.Мар=3]="Мар",e[e.Апр=4]="Апр",e[e.Май=5]="Май",e[e.Июн=6]="Июн",e[e.Июл=7]="Июл",e[e.Авг=8]="Авг",e[e.Сен=9]="Сен",e[e.Окт=10]="Окт",e[e.Ноя=11]="Ноя",e[e.Дек=12]="Дек",e))(Vt||{});const ls=e=>new Date(e.setHours(0,0,0,0)),Le=new Date,Fn=1,Un=Le.getDay(),Gt=ls(new Date(Le.valueOf()-(Un<=0?7-Fn:Un-Fn)*864e5)),ic=ls(new Date(Gt.valueOf()+6*864e5)),sc=e=>{const[t,i]=e.dateInterval.split("-").map(m=>m.trim()),[s,a]=t.split(" "),[r,o]=(i==null?void 0:i.split(" "))??[null,null],l=Vt[a],d=Vt[o]||l,p=new Date(`${l}/${s}/${d>=l?Le.getFullYear():Le.getFullYear()-1}`),u=r&&d?new Date(`${d}/${r}/${d>=l?Le.getFullYear():Le.getFullYear()+1}`):null;return!!(p<=ic&&(!u&&Gt<=p||u&&u>=Gt))},ac=e=>e.filter(t=>sc(t)),rc=async(e,t)=>{const i=typeof e=="string",s=!i&&!(e!=null&&e.subdivisions)||!!(t!=null&&t.length),a=s?await Ho(t??e.group??""):i?await Sn(e):await Sn(Ue({name:e.name,surname:e.surname,patronymic:e.patronymic})),r=s?await Wo():i?await On(e):await On(Ue({name:(e==null?void 0:e.name)??"",surname:(e==null?void 0:e.surname)??"",patronymic:(e==null?void 0:e.patronymic)??""})),o={},l={},d={monday:{lessons:[]},tuesday:{lessons:[]},wednesday:{lessons:[]},thursday:{lessons:[]},friday:{lessons:[]},saturday:{lessons:[]}};if(a.data.status!=="error"){for(const p in a.data)if(p!=="Sunday"){const u=p.charAt(0).toLowerCase()+p.slice(1);l[u]=s?a.data[p]:{lessons:a.data[p]}}for(const[p,u]of Object.entries(l))d[p].lessons=ac(u.lessons)}if(r.data.status!=="error")for(const p in r.data)s?o[p]=r.data[p]:r.data[p].length&&(o[p]={lessons:r.data[p]});return{0:Object.keys(a.data).length&&a.data.status!=="error"?d:null,1:Object.keys(a.data).length&&a.data.status!=="error"?l:null,2:Object.keys(r.data).length&&Object.values(o).find(p=>!!p.lessons.length)&&r.data.status!=="error"?o:null,3:null}},Bn={schedule:null,currentModule:"0",currentDay:new Date().getDay(),currentDayString:"",currentChosenDay:new Date().getDay(),view:"full",error:null},oc=()=>({data:P(Hn),loading:P(nt.pending),error:P(Hn).error}),nt=F(async({user:e,group:t})=>{try{return rc(e,t)}catch{throw new Error("Не удалось загрузить расписание")}}),cs=k(),ds=k(),ps=k(),us=k(),Hn=W(Bn).on(nt,e=>({...e,schedule:null,error:null})).on(nt.doneData,(e,t)=>({...e,schedule:t,currentModule:t[0]?"0":t[1]?"1":t[2]?"2":t[3]?"3":"0",currentDayString:nc(t,e.currentDay),currentChosenDay:Mn(t[2]),currentDay:t[0]?new Date().getDay():Mn(t[2])})).on(nt.failData,e=>({...e,error:"Не удалось загрузить расписание"})).on(cs,(e,t)=>({...e,currentModule:t.currentModule.toString()})).on(ds,(e,t)=>({...e,view:t.view})).on(ps,(e,t)=>({...e,currentChosenDay:t.day})).on(us,()=>({...Bn})),lc={useSchedule:oc},cc={changeCurrentModule:cs,changeView:ds,changeCurrentChosenDay:ps,clearStore:us},dc={getScheduleFx:nt},pc=Object.freeze(Object.defineProperty({__proto__:null,effects:dc,events:cc,selectors:lc},Symbol.toStringTag,{value:"Module"})),Wn={superiorRoom:null,error:null},uc=()=>({data:P(Vn).superiorRoom,loading:P(it.pending),error:P(Vn).error}),hs=k(),hc=F(async e=>{});Be({from:hs,to:hc});const it=F(async()=>{try{return(await Qo()).data}catch{throw new Error("Не удалось загрузить раздел")}}),gs=k(),Vn=W(Wn).on(it,e=>({...e,error:null})).on(it.doneData,(e,t)=>({...e,superiorRoom:t})).on(it.failData,(e,t)=>({...e,error:t.message})).on(gs,()=>({...Wn})),gc={useSuperiorRoom:uc},fc={getSuperiorRoomFx:it},xc={postSuperiorRoom:hs,clearStore:gs},mc=Object.freeze(Object.defineProperty({__proto__:null,effects:fc,events:xc,selectors:gc},Symbol.toStringTag,{value:"Module"})),Gn={teacherDataVerification:null,error:null,completed:!1},bc=()=>({data:P(Ft).teacherDataVerification,loading:P(st.pending),error:P(Ft).error,completed:P(Ft).completed}),fs=k(),xs=k(),vc=F(async e=>{try{return(await pl(e)).data}catch{throw new Error("Не удалось загрузить раздел")}});Be({from:fs,to:vc});const st=F(async()=>{try{return(await dl()).data}catch{throw new Error("Не удалось войти")}}),ms=k(),Ft=W(Gn).on(st,e=>({...e,error:null})).on(st.doneData,(e,t)=>({...e,teacherDataVerification:t})).on(st.failData,(e,t)=>({...e,error:t.message})).on(xs,(e,t)=>({...e,completed:t.completed})).on(ms,()=>({...Gn})),yc={useTeacherDataVerification:bc},wc={getTeacherDataVerificationFx:st},_c={postTeacherDataVerification:fs,changeCompleted:xs,clearStore:ms},jc=Object.freeze(Object.defineProperty({__proto__:null,effects:wc,events:_c,selectors:yc},Symbol.toStringTag,{value:"Module"})),Tc=[gl,Ht,bl,wl,Rl,zl,Wl,Jl,Ql,ec,pc,mc,jc,kl],Ec=()=>{Tc.forEach(e=>{e.events.clearStore()})},me=JSON.parse(localStorage.getItem("token")??"null"),be=()=>JSON.parse(localStorage.getItem("savePassword")??"true"),Pt=F(async e=>{try{const t=await Fo(e),i=new FormData;i.set("ulogin",e.login),i.set("upassword",e.password),i.set("auth_action","userlogin");try{await ct.post("/old",i)}catch{}return be()?(localStorage.setItem("token",JSON.stringify(t.data)),localStorage.setItem("jwt",JSON.stringify(t.data.jwt))):(sessionStorage.setItem("token",JSON.stringify(t.data)),sessionStorage.setItem("jwt",JSON.stringify(t.data.jwt))),t.data}catch{throw new Error(navigator.onLine?"Неверный логин или пароль":"Потеряно соединение с интернетом")}}),Te=F(async e=>{try{const i=(await Uo(e.token)).data.user,{name:s,surname:a,patronymic:r}=i;return{currentUser:{...i,fullName:Ue({name:s,surname:a,patronymic:r})},isAuthenticated:!!e,error:null,savePassword:be()}}catch(t){throw console.log(t),new Error("Возникла какая-то ошибка")}}),qt=F(async e=>{try{return(await Bo(e)).data}catch(t){throw console.log(t),new Error("Возникла какая-то ошибка")}}),kc=()=>{const{currentUser:e,error:t,isAuthenticated:i,savePassword:s,loginEuz:a}=P(Oc);return{data:{user:e,isAuthenticated:i,savePassword:s,loginEuz:a},loading:P(Pt.pending),error:t}},bs=F(()=>{be()?localStorage.removeItem("token"):sessionStorage.removeItem("token"),Ec()}),vs=e=>{const t=localStorage.getItem("savePassword"),i=e??JSON.parse(t??"true");return localStorage.setItem("savePassword",i.toString()),i},ys=k(),dn=k(),ws=k(),_s=k(),js=k();Be({from:ys,to:Pt});Be({from:Pt.doneData,to:Te});Be({from:dn,to:bs});me&&be()?Te(me):bs();var vi;const Sc={currentUser:null,error:null,isAuthenticated:!!((vi=me==null?void 0:me.token)!=null&&vi.length),savePassword:be(),loginEuz:""};vs();const Oc=W(Sc).on(Te,e=>({...e,error:null})).on(Te.doneData,(e,t)=>t).on(Te.failData,(e,t)=>{var i;return{error:t.message,currentUser:null,isAuthenticated:!!((i=me==null?void 0:me.token)!=null&&i.length),savePassword:be()}}).on(Pt.failData,(e,t)=>({error:t.message,isAuthenticated:null,currentUser:null,savePassword:be()})).on(dn,()=>({error:"",isAuthenticated:null,currentUser:null,savePassword:be()})).on(js,(e,{savePassword:t})=>({...e,savePassword:vs(t)})).on(qt,e=>({...e,error:null})).on(qt.doneData,(e,t)=>({...e,loginEuz:t})).on(Te.failData,(e,t)=>({...e,error:t.message})).on(_s,(e,{key:t,value:i})=>({...e,currentUser:e.currentUser?{...e.currentUser,[t]:i}:null})).on(ws,e=>({...e,currentUser:null})),Q={useUser:kc},Et={login:ys,logout:dn,changeSavePassword:js,clear:ws,update:_s},Pc={getUserFx:Te,getLoginEuzFx:qt},$t=x.div`
    display: flex;
    align-items: ${({alignItems:e})=>e??"center"};
    justify-content: ${({justifyContent:e})=>e??"space-between"};
    background: ${({background:e})=>e??"var(--schedule)"};
    border-radius: var(--brLight);
    flex-direction: ${({orientation:e})=>e==="vertical"?"column":"row"};
    box-shadow: ${({shadow:e})=>(e??!0)&&"var(--very-mild-shadow)"};
    padding: ${({padding:e})=>e??"20px"};
    height: ${({height:e})=>e??"330px"};
    max-width: ${({maxWidth:e})=>e??"750px"};
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
        width: 100%;
    }

    @media (max-width: 1225px) {
        max-width: ${({maxWidth:e})=>e??"600px"};
    }

    @media (max-width: 550px) {
        /* height: auto; */
        /* max-height: 100%; */
        flex-direction: column;
        gap: 1rem;
        box-shadow: ${({noAppearanceInMobile:e})=>e&&"none"};
        border-radius: ${({noAppearanceInMobile:e})=>e&&"none"};
        padding: ${({noAppearanceInMobile:e})=>e&&"0"};
        background: ${({noAppearanceInMobile:e})=>e&&"transparent"};
    }
`,$c=x.button`
    display: flex;
    align-items: center;
    justify-content: ${({align:e="center"})=>e};
    border: none;
    color: ${({textColor:e})=>e||"var(--text)"};
    background: ${({isChosen:e,background:t})=>e?"var(--blue)":t??"var(--search)"};
    padding: ${({padding:e})=>e??"10px"};
    border-radius: 10px;
    cursor: pointer;
    font-weight: bold;
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
        background: ${({hoverBackground:e,isChosen:t,background:i})=>e??(t?"var(--blue)":i??"var(--search)")};
    }

    .icon {
        margin-right: ${({text:e,direction:t})=>e&&t==="horizontal"?"7px":"0"};
        width: ${({direction:e,text:t})=>e==="vertical"||!t?"20px":"fit-content"};
        min-width: ${({direction:e,text:t})=>e==="vertical"||!t?"20px":"fit-content"};
        height: ${({direction:e,text:t})=>e==="vertical"||!t?"20px":"15px"};
        margin-bottom: ${({direction:e,text:t})=>e==="vertical"&&t&&"4px"};
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

        .icon {
            width: ${({direction:e})=>e==="vertical"?"30px":"fit-content"};
            min-width: ${({direction:e})=>e==="vertical"?"30px":"fit-content"};
            margin-bottom: ${({direction:e,shrinkTextInMobile:t})=>e==="vertical"&&!t?"4px":"0px"};
            margin-right: ${({shrinkTextInMobile:e,text:t,direction:i})=>e||i==="vertical"||!t?"0px":"7px"};
            height: ${({direction:e})=>e==="vertical"?"30px":"fit-content"};
        }

        span {
            display: ${({shrinkTextInMobile:e})=>e?"none":"flex"};
        }
    }
`;function j(e){const{icon:t,text:i,onClick:s,width:a,minWidth:r,background:o,textColor:l,hoverBackground:d,align:p,isChosen:u,padding:m,shrinkTextInMobile:b,fixedInMobile:h,direction:g="horizontal",isActive:f=!0,height:v,...S}=e;return n.jsxs($c,{text:!!i,onClick:w=>f&&(s==null?void 0:s(w)),isChosen:u,width:a,minWidth:r,background:o,padding:m,textColor:l,shrinkTextInMobile:b,hoverBackground:d,align:p,direction:g,isActive:f,fixedInMobile:h,height:v,...S,children:[!!t&&n.jsx("div",{className:"icon",children:t}),n.jsx("span",{children:i})]})}const _e=e=>({display:"flex",alignItems:"center",justifyContent:"center",width:e});function Ac({size:e,children:t,width:i}){switch(e){case 1:return n.jsx("h1",{className:"title",style:_e(i),children:t});case 2:return n.jsx("h2",{className:"title",style:_e(i),children:t});case 3:return n.jsx("h3",{className:"title",style:_e(i),children:t});case 4:return n.jsx("h4",{className:"title",style:_e(i),children:t});case 5:return n.jsx("h5",{className:"title",style:_e(i),children:t});case 6:return n.jsx("h6",{className:"title",style:_e(i),children:t});default:return n.jsx("h1",{className:"title",style:_e(i),children:t})}}const Cc=x.div`
    width: 100%;
    text-align: ${({align:e})=>e};
    margin-bottom: ${({bottomGap:e})=>typeof e=="string"?e:e?"10px":"0"};
    display: inline-flex;
    align-items: center;
    justify-content: ${({align:e})=>e?e==="left"?"flex-start":e==="right"?"flex-end":e:"center"};

    svg {
        min-width: 15px;
        height: 15px;
        margin-right: 4px;
        color: ${({iconColor:e})=>!!e&&e};
    }
`,Rc=x.span`
    color: var(--red);
    margin-right: 5px;
`,Ic=x.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    column-gap: 10px;
    width: ${({width:e})=>e};
`;function U(e){const{icon:t,iconColor:i,children:s,size:a=1,required:r,width:o,align:l="center",bottomGap:d=!1,visible:p=!0}=e;return p?n.jsxs(Cc,{className:"title-wrapper",align:l,bottomGap:d,iconColor:i,children:[t,n.jsxs(Ac,{size:a,width:o,children:[r&&n.jsx(Rc,{children:"*"}),n.jsx(Ic,{width:o,children:s})]})]}):null}const ue=x.div`
    width: ${({direction:e,width:t})=>e!=="horizontal"?t??"90%":"0.5px"};
    height: ${({direction:e})=>e!=="horizontal"?"0.5px":"90%"};
    background: var(--almostTransparentOpposite);
    margin: ${({margin:e})=>e??"5px auto"};
`,Nc="/assets/sad-emoji-0c60bf90.gif",Lc=x.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: var(--text);

    .image {
        margin-bottom: 10px;
        img {
            min-width: ${({size:e})=>e??"100px"};
            height: ${({size:e})=>e??"100px"};
        }
    }

    .error-content {
        margin-top: 20px;
    }
`;function oe({text:e,image:t,size:i,children:s}){return n.jsxs(Lc,{size:i,children:[n.jsx("div",{className:"image",children:typeof t=="string"||!t?n.jsx("img",{src:t||Nc,alt:"груфтим("}):t}),n.jsx(U,{size:3,bottomGap:"20px",children:e}),s&&n.jsx("div",{className:"error-content",children:s})]})}const Dc="/assets/loading-c8041cd3.gif";function Pe(e){return n.jsx("img",{...e,src:Dc,alt:"loading",className:"loading-circle"})}const zc="/assets/logo-4d9aa449.png",Mc="/assets/mospolytech-logo-white-b1e4f630.png",Fc=x.div`
    width: ${({width:e})=>e??"100%"};
    height: fit-content;
    display: flex;
    justify-content: center;

    img {
        filter: invert(var(--invert));
        width: 100%;
    }
`;function At({width:e,className:t,short:i=!1}){return n.jsx(Fc,{width:e,className:t??"logo",children:n.jsx("img",{src:i?Mc:zc,alt:"Logo"})})}const Uc=x.div`
    width: ${({size:e})=>e?e.width:"100px"};
    min-width: ${({size:e})=>e?e.width:"100px"};
    height: ${({size:e,shape:t})=>e?t==="circle"?e.width:e.height:"20px"};
    border-radius: ${({shape:e})=>e==="circle"?"100%":"10px"};
    background: var(--almostTransparent);
    margin: ${({margin:e})=>e};
    animation: skeleton 1s infinite;

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
`;function te({shape:e,size:t,margin:i="10px 0"}){return n.jsx(Uc,{size:t,shape:e,margin:i})}const Yt=e=>{switch(e){case"center":return"center";case"right":return"flex-end";case"evenly":return"space-evenly"}return"flex-start"},qn=e=>{switch(e){case"center":return"center";case"bottom":return"flex-end";case"space-between":return"space-between"}return"flex-start"},Bc=x.div`
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
`,Hc=["wrap","horizontalAlign","verticalAlign","innerPadding","scroll","wrapOnMobile"],ft=x.div.withConfig({shouldForwardProp:e=>!Hc.includes(e)})`
    display: flex;
    flex-direction: ${({direction:e})=>(e??"vertical")==="vertical"&&"column"};
    max-height: 100%;
    align-items: center;
    height: ${({height:e})=>e??"fit-content"};
    justify-content: ${({direction:e,horizontalAlign:t,verticalAlign:i})=>(e??"vertical")==="vertical"?qn(i):Yt(t)};
    align-items: ${({direction:e,horizontalAlign:t,verticalAlign:i})=>(e??"vertical")==="vertical"?Yt(t):qn(i)};
    gap: ${({gap:e})=>(e??5)+"px"};
    width: ${({width:e})=>e??"100%"};
    min-width: ${({minWidth:e,width:t})=>e??t};
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
`,Wc=x(ft)`
    height: 100%;
`,Vc=({direction:e,shapes:t,horizontalAlign:i,verticalAlign:s})=>n.jsx(Wc,{direction:e,horizontalAlign:i,verticalAlign:s,children:t.map((a,r)=>c.createElement(te,{...a,key:r}))}),Gc=(e,t)=>e?_[Ee[t].color].dark2:_[Ee[t].color].light2,qc=x.div`
    width: ${({width:e})=>e??"100%"};
    max-width: ${({maxWidth:e})=>e??"none"};
    color: ${({type:e,isLightTheme:t})=>Gc(t,e)};
    background: ${({type:e,solidBackground:t})=>_[Ee[e].color][t?"transparent1":"transparent2"]};
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
    align-items: ${({align:e})=>e==="left"?"flex-start":e==="center"?"center":"flex-end"};

    .close-button {
        position: absolute;
        top: 0px;
        right: 0px;
    }

    .info-text {
        display: flex;
        flex-direction: column;
        gap: ${({gap:e})=>e??0};
    }

    a {
        text-decoration: underline;
        color: ${({type:e,isLightTheme:t})=>_[Ee[e].color][t?"dark3":"light3"]};
    }
`,Yc=()=>n.jsx(Vc,{shapes:[{shape:"rect",size:{width:"200px",height:"13px"},margin:"0"},{shape:"rect",size:{width:"100px",height:"12px"},margin:"5px 0"},{shape:"rect",size:{width:"120px",height:"12px"},margin:"0"}],direction:"vertical",horizontalAlign:"left"});function K({type:e,children:t,icon:i,width:s,maxWidth:a,title:r,onClose:o,padding:l,fontSize:d,gap:p,solidBackground:u=!1,align:m="left",visible:b=!0,loading:h=!1}){if(!b)return null;const{theme:g}=gt();return n.jsxs(qc,{isLightTheme:g==="light",className:"message",closable:!!o,type:e,align:m,width:s,maxWidth:a,padding:l,fontSize:d,gap:p,solidBackground:u,children:[n.jsx(U,{size:4,align:m,icon:i===null?null:i??Ee[e].icon({}),children:r??Ee[e].title}),o&&n.jsx(j,{onClick:o,icon:n.jsx(Oe,{}),className:"close-button",background:"transparent"}),t&&n.jsx("div",{className:"info-text",children:t}),h&&n.jsx(Yc,{})]})}const Kc=x.img``;function Ts({loading:e,src:t,height:i,width:s,alt:a=""}){return e?n.jsx(te,{shape:"rect",size:{width:s,height:i},margin:"0"}):n.jsx(Kc,{src:t,alt:a,height:i,width:s})}const Mx=x.div`
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
        background: var(--blue);
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
        stroke: var(--blue);
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
`,Jc=x.div`
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
`;function Xc(e){const{value:t,setValue:i,width:s,placeholder:a,required:r,title:o,textAreaAppearance:l=!0,isActive:d=!0}=e;return n.jsxs(Jc,{isActive:d,width:s,textAreaAppearance:l,children:[n.jsx(U,{size:5,required:r,align:"left",bottomGap:"5px",visible:!!o,children:o}),n.jsx("textarea",{onChange:p=>i(p.target.value),placeholder:a,required:r,value:t})]})}const Zc=x.button`
    width: ${({width:e})=>e??"100%"};
    padding: 10px;
    box-sizing: border-box;
    opacity: ${e=>e.isLoading||!e.isActive?.5:1};
    color: #fff;
    font-weight: bold;
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
    background: ${({isDone:e,background:t})=>e?"var(--green)":t??"var(--blue)"};
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
`,Es=({text:e,action:t,width:i,height:s,setCompleted:a,background:r,buttonSuccessText:o="Готово",popUpSuccessMessage:l="Успешно",popUpFailureMessage:d="Nope",pulsing:p,isDone:u=!1,isActive:m=!0,isLoading:b=!1,completed:h=!1,repeatable:g=!0})=>{c.useEffect(()=>{h&&(z.evokePopUpMessage({message:l,type:"success"}),g&&setTimeout(()=>{a(!1)},2e3))},[h,a]);const f=()=>{if(m&&!u&&!b)return t();z.evokePopUpMessage({message:d,type:"failure"})};return n.jsx(Zc,{isLoading:b,background:r,className:"submit-button",completed:h,isActive:m&&!u&&!h,onClick:f,isDone:u,width:i,height:s,repeatable:g,tabIndex:m&&!u?0:-1,pulsing:p&&!u,children:n.jsx("div",{className:"inner-button",children:h?n.jsxs("div",{className:"inner-button-success",children:[n.jsx(kr,{})," ",o]}):b?n.jsx(Pe,{}):n.jsx("div",{className:"inner-button-text",children:e})})})},Qc=(e,t)=>e.length>7?e.substring(0,7):e.length===3&&(t==null?void 0:t.length)===2?e+"-":e.length===3&&(t==null?void 0:t.length)===4?e.substring(0,2):e,ed=e=>{const t=["7","8","9"],i=e.target.selectionStart;let s=e.target.value.replace(/\D/g,""),a="";return s.length?e.target.value.length!==i?/\D/g.test(e.nativeEvent.data??"")?s:e.target.value:(t.indexOf(s[0])>-1?(s[0]==="9"&&(s="7"+s),a=(s[0]==="8"?"8":"+7")+" ",s.length&&(a+="("+s.substring(1,4)),s.length>=5&&(a+=") "+s.substring(4,7)),s.length>=8&&(a+="-"+s.substring(7,9)),s.length>=10&&(a+="-"+s.substring(9,11))):a=`+${s.substring(0,16)}`,a):""},td={groupMask:Qc,phoneMask:ed},nd=(e,t,i,s,a,r,o,l)=>{const[d,p]=c.useState(i),[u,m]=c.useState(s??!1);c.useEffect(()=>{p(i)},[i]);const b=c.useCallback(v=>v.replace(/@\.*/,"@mospolytech.ru").replace(/mospolytech.ru?/,""),[i]);return{inputType:d,danger:u,phoneMaskKeyDown:v=>{v.key==="Backspace"&&(e[1]==="7"&&e.length<=4||e[0]==="8"&&e.length<=3)&&t("")},buttonOnClick:()=>p(v=>v==="password"?"text":"password"),handleOnChange:v=>{if(t(l?o?o(v.target.value,e):i==="tel"?td.phoneMask(v):i==="email"?b(v.target.value):v.target.value:v.target.value),i==="date"&&(a||r)){const S=new Date(v.target.value);let w=!1;if(a){const E=new Date(a);w=S<E}if(r&&!w){const E=new Date(r);w=S>E}m(w)}}}},id=x.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    width: ${({width:e})=>e??"100%"};
    min-width: ${({minWidth:e,width:t})=>e??t};
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
        padding-left: ${({leftIcon:e,inputAppearance:t})=>e?"30px":t?"10px":"0"};
        padding-right: ${({inputAppearance:e})=>e?"35px":"0"};
        max-height: 36px;
        border: ${({danger:e})=>e&&`2px solid ${_.red.main}`};

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
`,he=({value:e,setValue:t,leftIcon:i,title:s,required:a,width:r,minWidth:o,customMask:l,placeholder:d="Введите сюда",type:p="text",danger:u,alertMessage:m,loading:b=!1,isActive:h=!0,inputAppearance:g=!0,mask:f=!1,autocomplete:v=!1,minValue:S=void 0,maxValue:w=void 0})=>{const{inputType:E,buttonOnClick:$,danger:D,handleOnChange:H,phoneMaskKeyDown:B}=nd(e,t,p,u,S,w,l,f);return n.jsxs(id,{leftIcon:!!i,isActive:h,inputAppearance:g,width:r,danger:D,minWidth:o,children:[n.jsx(U,{size:5,align:"left",visible:!!s,bottomGap:"5px",required:a,children:s}),n.jsx(K,{type:"alert",visible:!!m,icon:n.jsx(Sr,{}),title:m??""}),i&&n.jsx("span",{className:"left-icon",children:i}),n.jsx("input",{id:d,min:S,max:w,step:w?.1:void 0,type:E,placeholder:d,value:e??"",autoComplete:v?"on":"off",onKeyDown:ee=>p==="tel"&&B(ee),onChange:H,required:a,readOnly:!h}),p!=="password"?!!(e!=null&&e.length)&&g&&(b?n.jsx(Pe,{}):n.jsx(j,{icon:n.jsx(Oe,{}),onClick:()=>t(""),tabIndex:-1})):n.jsx(j,{icon:E==="password"?n.jsx(Or,{}):n.jsx(Pr,{}),tabIndex:-1,onClick:$})]})},sd=x.div`
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
`,ad="/assets/thinking-emoji-f3c10f79.gif",rd=["loading"],od=x.div.withConfig({shouldForwardProp:e=>!rd.includes(e)})`
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
        padding: 15px;
    }
`,pn=({children:e,load:t,error:i,data:s,deps:a=[],noDataCheck:r=!1,loadEveryVisit:o=!1})=>(c.useEffect(()=>{(!s||o)&&t()},a),n.jsxs(od,{loading:!!i||!s,children:[n.jsx("span",{className:"loading",children:i?n.jsx("div",{className:"reload",children:n.jsx(oe,{text:i,image:r&&ad,children:!r&&n.jsx(j,{onClick:()=>t(),text:"Загрузить снова",icon:n.jsx(wi,{})})})}):n.jsx(Pe,{})}),n.jsx("div",{className:"content",children:e})]})),ld=x.a`
    display: flex;
    align-items: center;
    justify-content: ${({align:e})=>e??"center"};
    border: none;
    color: ${({textColor:e})=>e||"var(--text)"};
    background: ${({isChosen:e,background:t})=>e?"var(--blue)":t??"var(--search)"};
    padding: ${({padding:e})=>e??"10px"};
    border-radius: 10px;
    cursor: pointer;
    font-weight: bold;
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
`,cd=({icon:e,text:t,onClick:i,width:s,background:a,textColor:r,align:o,href:l,height:d,minHeight:p,padding:u,isActive:m=!0,isChosen:b=!1})=>n.jsxs(ld,{text:!!t,onClick:h=>m&&i&&i(h),isChosen:b,width:s,background:a,textColor:r,href:l,align:o,isActive:m,height:d,padding:u,minHeight:p,children:[!!e&&e,n.jsx("span",{children:t})]}),un=c.memo(cd),hn=x.div`
    width: 100%;
    height: fit-content;
    max-width: ${({maxWidth:e})=>e??"600px"};
    padding: 20px;
    border-radius: var(--brSemi);
    background: var(--schedule);
    box-shadow: var(--schedule-shadow);
    display: flex;
    flex-direction: column;
    row-gap: 20px;

    @media (max-width: 1000px) {
        box-shadow: none;
        padding: 10px 0px;
        background: transparent;
    }
`,dd=x.div`
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
`,pd=x.a`
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
`,ud=({title:e,link:t,type:i})=>n.jsxs(pd,{href:t,target:"_blank",children:[n.jsx("div",{className:"icon",children:i==="document"?n.jsx(A,{}):n.jsx($r,{})}),n.jsx("div",{className:"title",children:e})]}),hd=()=>{const{pathname:e}=_i(),[t,i]=c.useState([e]),{action:s}=dt();return c.useEffect(()=>{switch(s){case"POP":i(t.length>1?t.slice(0,t.length-1):t);break;case"PUSH":i([...t,e]);break;case"REPLACE":i([...t.slice(0,t.length-1),e])}},[e,s]),t},Ct=(e,t="long")=>{if(!e)return"";switch(t){case"long":return new Date(Date.parse(e)).toLocaleDateString("ru",{year:"numeric",month:"long",day:"numeric"});case"short":return new Date(Date.parse(e)).toLocaleDateString("ru",{month:"short",day:"numeric"});case"numeric":return new Date(Date.parse(e)).toLocaleDateString("ru",{year:"numeric",month:"2-digit",day:"2-digit"});case"weird":const i=e.getMonth()<10?`0${e.getMonth()+1}`:`${e.getMonth()+1}`;return`${e.getFullYear()}-${i}-${e.getDate()}`;case"extraWeird":const s=e.getMonth()<9?`0${e.getMonth()+1}`:`${e.getMonth()+1}`,a=e.getDate()<10?`0${e.getDate()}`:`${e.getDate()}`;return`${e.getFullYear()}-${s}-${a}`;default:return new Date(Date.parse(e)).toLocaleDateString("ru",{month:"short",day:"numeric"})}},Yn=e=>{const t=new Date;return t.setDate(t.getDate()+e),Ct(t,"extraWeird")},bt=({config:e})=>({title:e.title,data:[{title:"Дата выдачи",type:"date",value:"",editable:!0,fieldName:e.issueDateFieldName,required:!0,minValueInput:Yn(-30*11),maxValueInput:Yn(0)},{title:"Организация, выдавшая справку",type:"textarea",fieldName:e.organizationFieldName,value:"",editable:!0,required:!0}],documents:{files:[],fieldName:e.docsFieldName,required:!0,maxFiles:1,allowedTypes:["application/pdf"]}}),vt={kvdCert:bt({config:{title:"Справка из кожно-венерологического диспансера",issueDateFieldName:"kvd_date_of_issue",organizationFieldName:"kvd_organization",docsFieldName:"kvd_docs"}}),fluorographyCert:bt({config:{title:"Флюорография",issueDateFieldName:"fluorography_date_of_issue",organizationFieldName:"fluorography_organization",docsFieldName:"fluorography_docs"}}),vichRwCert:bt({config:{title:"Результаты лабораторного исследования на ВИЧ, RW",issueDateFieldName:"vichrw_date_of_issue",organizationFieldName:"vichrw_organization",docsFieldName:"vichrw_docs"}}),graftCert:bt({config:{title:"Сертификат о профилактических прививках",issueDateFieldName:"graft_date_of_issue",organizationFieldName:"graft_organization",docsFieldName:"graft_docs"}})},Ie=(e,t)=>{var a;const i=!((a=e.documents)!=null&&a.required)||!!e.documents.files.length,s=!e.addNew||!!e.data.length;return!e.data.find(r=>{var o;if(r.type==="date"&&(r.maxValueInput||r.minValueInput)){const l=new Date(((o=r.value)==null?void 0:o.toString())??0);if(r.minValueInput){const d=new Date(r.minValueInput);if(l<d)return!0}if(r.maxValueInput){const d=new Date(r.maxValueInput);if(l>d)return!0}}return t&&r.specialType&&!t.includes(r.specialType)?!1:r.type!=="checkbox-docs"?!r.value&&r.required:r.required&&!r.items.find(l=>!!l.files.length)})&&i&&s};x.div`
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
        background: ${({reached:e,current:t})=>t?"var(--reallyBlue)":e?_.green.main:_.grey.main};
        outline: 6px solid
            ${({reached:e,current:t})=>t?_.blue.transparent3:e?_.green.transparent3:_.grey.transparent3};
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
`;const gd=x.div`
    min-width: ${({direction:e,distance:t})=>e==="vertical"?"5px":(t??100)+"px"};
    background: var(--almostTransparentOpposite);
    border-radius: 10px;
    height: ${({direction:e,distance:t})=>e==="vertical"?(t??100)+"px":"5px"};
    overflow: hidden;
    width: 100%;

    .inside-line {
        height: ${({direction:e,filled:t})=>e==="vertical"?(t??100)+"%":"5px"};
        border-radius: 10px;
        width: ${({direction:e,filled:t})=>e==="vertical"?"100%":(t??100)+"%"};
        background: ${({reached:e})=>e?_.green.main:"none"};
    }
`,fd=({distance:e,filled:t,reached:i,direction:s})=>n.jsx(gd,{direction:s,distance:e,reached:i,filled:t,children:n.jsx("div",{className:"inside-line"})}),xd=x.div`
    transition: 0.1s;
    opacity: ${({invisibleOnFalse:e,checked:t})=>e?t?1:0:1};
    transform: scale(${({invisibleOnFalse:e,checked:t})=>e?t?1:.8:1});
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
`,ve=({text:e,checked:t,setChecked:i,fontSize:s,visible:a=!0,isActive:r=!0,invisibleOnFalse:o=!1})=>a?n.jsxs(xd,{checked:t,invisibleOnFalse:o,fontSize:s,onClick:()=>{r&&i(!t)},isActive:r,className:"checkbox",children:[n.jsx(j,{width:"25px",height:"25px",onClick:()=>null,icon:t||o?n.jsx(Ar,{style:{maxWidth:"20px",width:"20px",height:"20px",maxHeight:"20px"}}):n.jsx(Cr,{style:{maxWidth:"20px",width:"20px",height:"20px",maxHeight:"20px"}}),background:"transparent"}),e&&n.jsx("div",{className:"checkbox-text",children:e})]}):null,md=300,bd=({defaultValue:e,onDebounce:t,onClear:i,deps:s=[],delay:a=md})=>{const[r,o]=c.useState(e??null),[l,d]=c.useState(!1);return c.useEffect(()=>{if(r!==null)if(r.length){d(!0);const p=setTimeout(()=>{t(r),d(!1)},a);return()=>clearTimeout(p)}else i==null||i(r)},[r]),c.useEffect(()=>{if(s.length){const p=setTimeout(()=>{t(r??"")},a);return()=>clearTimeout(p)}},[...s]),[r,o,l]};function We(e,t){c.useEffect(()=>{const i=s=>{const a=e==null?void 0:e.current;!a||a.contains(s.target)||t(s)};return document.addEventListener("mousedown",i),document.addEventListener("touchstart",i),()=>{document.removeEventListener("mousedown",i),document.removeEventListener("touchstart",i)}},[e,t])}function re(e,t,i=0){return e>t?i:e<i?t:e}const Ve=x.span`
    width: ${({width:e})=>e??"fit-content"};
    min-width: ${({width:e})=>e??"fit-content"};
    max-width: ${({maxWidth:e})=>e??"fit-content"};
    font-size: ${({fontSize:e})=>e??"0.8em"};
    font-weight: 500;
    opacity: 0.7;
    text-align: ${({align:e})=>e??"left"};
    display: ${({visible:e})=>!(e??!0)&&"none"};
`,Se=(e,t)=>{if(!e.length)return"";const i=t??!0,s=e.replace(/\s/g,"").replace(/\$/g,"s").replace(/-/g,"").toLowerCase();return i?s.replace(/[,'._/]/g,""):s},Kn=e=>{const t={a:"ф",b:"и",c:"с",d:"в",e:"у",f:"а",g:"п",h:"р",i:"ш",j:"о",k:"л",l:"д",m:"ь",n:"т",o:"щ",p:"з",q:"й",r:"к",s:"ы",t:"е",u:"г",v:"м",w:"ц",x:"ч",y:"н",z:"я","[":"х","{":"х","]":"ъ","}":"ъ","'":"э",";":"ж",",":"б",".":"ю"};let i="";for(let s=0;s<e.length;s++){const a=Se(e.charAt(s),!1),r=t[a]?s===0?t[a].toUpperCase():t[a]:a;i+=r}return i},vd=e=>/[A-Za-z]/.test(e),yd=x.div`
    display: flex;
    flex-direction: column;
    row-gap: 8px;
    width: ${({width:e})=>e??"100%"};
    position: relative;
`,wd=x($t)`
    position: absolute;
    top: 45px;
    z-index: 10;
    height: auto;
    width: 100%;
    left: 0;
    overflow-y: auto;
`,_d=x.div`
    padding: 8px 12px;
    width: 100%;
    display: flex;
    align-items: center;
    gap: 8px;
    font-weight: ${({selected:e})=>e?"600":"500"};
    color: ${({selected:e})=>e?"#fff":"var(--text)"};
    background: ${({selected:e})=>e?_.blue.main:"transparent"};
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
        background: ${({selected:e})=>e?_.blue.main:"var(--mild-theme)"};
    }
`,jd=({value:e,width:t,setValue:i,placeholder:s,inputAppearance:a,validationCheck:r,loading:o,hints:l,leftIcon:d,customMask:p,onHintClick:u})=>{const m=c.useCallback(()=>{i(Kn(e))},[e,i]),[b,h]=c.useState(0),[g,f]=c.useState(!1),v=c.useRef(null),S=c.useRef(null);We(v,()=>f(!1));const w=D=>{var H,B;(((l==null?void 0:l.length)??0)>0||o)&&f(!0),D.key==="ArrowDown"?((H=S.current)==null||H.scrollIntoView({block:"start",behavior:"smooth"}),typeof b=="number"&&h(re(b+1,((l==null?void 0:l.length)??1)-1,0))):D.key==="ArrowUp"?((B=S.current)==null||B.scrollIntoView({block:"end",behavior:"smooth"}),typeof b=="number"&&h(re(b-1,((l==null?void 0:l.length)??1)-1,0))):D.key==="Enter"?(i((l==null?void 0:l[b??0].title)??""),f(!1),u==null||u(l==null?void 0:l[b??0])):h(0)},E=D=>()=>{h(D),i((l==null?void 0:l[D].title)??""),f(!1),u==null||u(l==null?void 0:l[D])},$=()=>{l!=null&&l.length&&f(!0)};return n.jsxs(yd,{width:t,onKeyDown:w,onMouseDown:$,ref:v,children:[n.jsx(he,{value:e,placeholder:s,leftIcon:d??n.jsx(pt,{}),inputAppearance:a,setValue:i,loading:o,width:t,mask:!0,customMask:p}),e.length>0&&r&&vd(e)&&n.jsxs(Ve,{width:"100%",maxWidth:"100%",onClick:m,children:["Возможно, вы имели в виду"," ",n.jsx("a",{href:"#",onClick:D=>D.preventDefault(),children:Kn(e)})]}),g&&n.jsx(wd,{height:"fit-content",maxWidth:"100%",maxHeight:"250px",width:"100%",onKeyDown:w,padding:"0",orientation:"vertical",children:l==null?void 0:l.map(({title:D,icon:H},B)=>{const ee=b===B;return n.jsxs(_d,{onClick:E(B),ref:ee?S:null,selected:ee,children:[H&&n.jsx("div",{className:"icon",children:H}),n.jsx("span",{children:D})]},D+B)})})]})},ks=({whereToSearch:e,searchEngine:t,setResult:i,inputAppearance:s,setExternalValue:a,hints:r,loadingOnType:o=!1,placeholder:l="Поиск по меню",validationCheck:d=!1})=>{const p=f=>{i(t(f,e))},u=()=>{i(null)},[m,b,h]=bd({onDebounce:p,onClear:u}),g=f=>{b(f),a&&a(f)};return n.jsx(jd,{value:m??"",setValue:g,inputAppearance:s,placeholder:l,validationCheck:d,loading:o?h:!1,hints:r})},Td=({id:e,isToggled:t,setIsToggled:i})=>n.jsxs(sd,{children:[n.jsx("input",{type:"checkbox",name:e,id:e,className:"checkbox",checked:t,onChange:i}),n.jsx("label",{className:"toggle-body",htmlFor:e,children:n.jsx("span",{className:"toggle-circle"})})]}),Ss=x.div`
    width: 8px;
    height: 8px;
    border-radius: 100%;
    margin: 3px;
`,Ed=x(Ss)`
    background: var(--almostTransparentOpposite);
`,kd=x(Ss)`
    transition: 0.2s;
    left: 0;
    position: absolute;
    background: ${_.blue.main};
    transform: ${({current:e})=>`translateX(${e*16}px)`};
`,Os=({amount:e,current:t,direction:i="horizontal"})=>e<=1?null:n.jsxs(se,{direction:i,gap:2,width:"fit-content",minWidth:"fit-content",verticalAlign:"center",horizontalAlign:"center",children:[Array(e).fill(0).map((s,a)=>n.jsx(Ed,{},a)),n.jsx(kd,{current:t})]}),Sd=x.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`,Od=({checkbox:e,loadfile:t,docVisible:i})=>n.jsxs(Sd,{children:[n.jsx(ve,{...e}),i&&n.jsx($s,{...t})]}),Pd=x.div`
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
`,$d=({title:e,required:t,dates:i,setDates:s,valid:a,setValid:r,diff:o,minValue:l})=>{if(c.useEffect(()=>{r(new Date(i[0])<=new Date(i[1])||!i[0].length||!i[1].length)},[i]),o!=null){const d=new Date(i[0]),p=new Date(d);p.setDate(d.getDate()+o),i[1]=Ct(p,"extraWeird")}return n.jsxs(Pd,{children:[n.jsx(U,{size:5,align:"left",visible:!!e,required:t,children:e}),n.jsx(K,{title:"Внимание",type:"alert",icon:n.jsx(at,{}),visible:!a,children:"Дата начала не может быть больше даты конца"}),n.jsxs("div",{className:"date-interval-inputs",children:[n.jsx(he,{value:i[0],danger:!a,setValue:d=>s([d,i[1]]),type:"date",minValue:l}),n.jsx(he,{value:i[1],setValue:d=>s([i[0],d]),type:"date",danger:!a})]})]})},Ad=e=>{var b,h,g;const t=c.useRef(null),[i,s]=c.useState(!1),[a,r]=c.useState(!1),[o,l]=c.useState(0),[d,p]=c.useState(0),u=((b=t.current)==null?void 0:b.clientWidth)??1,m=Math.ceil((((h=t.current)==null?void 0:h.scrollWidth)??0)/(u+(e??0)));return c.useEffect(()=>{t.current&&(t.current.scrollLeft=o,t.current.clientWidth<t.current.scrollWidth&&(s(!0),r(!0)))},[o,(g=t.current)==null?void 0:g.scrollLeft]),{listRef:t,leftArrow:i,rightArrow:a,setScrollLeft:l,pageOffset:u,amountOfPages:m,currentPage:d,setCurrentPage:p}},Cd=e=>{const{title:t,children:i,gap:s,width:a,height:r,padding:o,fontSize:l,wrap:d,onAdd:p,onWatchMore:u,onDelete:m,showPages:b,innerPadding:h,minWidth:g,wrapOnMobile:f,position:v,direction:S="vertical",verticalAlign:w="top",horizontalAlign:E="left",scroll:$=!0,visible:D=!0,...H}=e;if(!D)return null;const{listRef:B,leftArrow:ee,rightArrow:q,setScrollLeft:X,pageOffset:$e,amountOfPages:fe,currentPage:Nt,setCurrentPage:mt}=Ad(s);return n.jsxs(Bc,{padding:o,position:v,width:a,minWidth:g,height:r,children:[n.jsxs(U,{size:4,align:"left",bottomGap:!0,visible:!!t,width:"calc(fit-content + 50px)",children:[t,p&&n.jsx(j,{icon:n.jsx(rt,{}),width:"35px",height:"15px",background:_.grey.transparent3,textColor:"var(--reallyBlue)",onClick:p}),u&&n.jsx(j,{width:"fit-content",height:"15px",background:_.grey.transparent3,textColor:"var(--reallyBlue)",onClick:u,text:"Ещё"}),m&&n.jsx(j,{width:"fit-content",height:"15px",background:_.grey.transparent3,textColor:"var(--reallyBlue)",onClick:m,text:"Удалить"})]}),n.jsx(ft,{verticalAlign:w,horizontalAlign:E,direction:S,ref:B,gap:s,width:a,height:r,fontSize:l,wrap:d,innerPadding:h,scroll:$,wrapOnMobile:f,...H,children:i}),(q||ee)&&n.jsxs("div",{className:"bottom-wrapper",children:[ee&&n.jsx(j,{background:_.grey.transparent3,minWidth:"40px",height:"25px",icon:n.jsx(ut,{}),className:"left-button",textColor:_.grey.main,onClick:()=>{mt(C=>re(C-1,fe-1)),X(C=>{var M;return re(C-$e-(s??0),((M=B.current)==null?void 0:M.scrollWidth)??0)})}}),b&&n.jsx(Os,{direction:"horizontal",current:Nt,amount:fe}),q&&n.jsx(j,{background:_.grey.transparent3,minWidth:"40px",height:"25px",icon:n.jsx(kt,{}),className:"right-button",textColor:_.grey.main,onClick:()=>{mt(C=>re(C+1,fe-1)),X(C=>{var M;return re(C+$e+(s??0),((M=B.current)==null?void 0:M.scrollWidth)??0)})}})]})]})},se=G.memo(Cd),Ps=e=>e.split("/")[1],Rd=e=>e*1024*1024,Id=(e,t)=>(t??ko).indexOf(e.type)!==-1,Jn=(e,t,i,s,a=So)=>{if(i&&t.length+e.length>i)return z.evokePopUpMessage({message:`Нельзя загрузить больше ${i} файлов`,type:"failure"}),t;for(let r=0;r<e.length;r++)return Id(e[r],s)?e[r].size>Rd(a)?(z.evokePopUpMessage({message:`Размер файла слишком большой. Максимальный размер файла: ${a} MB`,type:"failure",time:1e4}),t):[...t,e[r]]:(z.evokePopUpMessage({message:`Неверный формат файла. Доступные форматы: ${s==null?void 0:s.map(o=>Ps(o))}`,type:"failure",time:5e3}),t)},Nd=x.label`
    width: 100%;
    min-height: 150px;
    border-radius: var(--brLight);
    transition: 0.2s border;
    border: ${({showPulse:e})=>e?`2px dashed ${_.blue.main}`:`2px dashed ${_.grey.main}`};
    background: ${({showPulse:e})=>e?_.blue.transparent3:""};
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
`,Ld=({files:e,maxFiles:t,setFiles:i,isActive:s,formats:a,maxFileSizeInMegaBytes:r})=>{const o=c.useRef(null),[l,d]=c.useState(!1),p=g=>{const f=g.target.files;f!=null&&f.length&&i(Jn(f,e,t,a,r))},u=g=>{g.preventDefault()},m=g=>{g.preventDefault(),d(!1);const f=g.dataTransfer.files;f.length&&i(Jn(f,e,t,a,r))},b=g=>{g.preventDefault(),d(!0)},h=g=>{g.preventDefault(),d(!1)};return n.jsxs(Nd,{isActive:s,showPulse:l,onDragOver:g=>s&&u(g),onDragEnter:g=>s&&b(g),onDragLeave:g=>s&&h(g),onDrop:g=>s&&m(g),topPadding:!!t,children:[n.jsx("input",{type:"file",name:"",id:"",ref:o,onChange:p}),n.jsxs("div",{className:"message",children:[n.jsx(Lt,{className:"front-icon"}),n.jsxs("div",{className:"icons-behind",children:[n.jsx(Lt,{className:"icon-1"}),n.jsx(Lt,{className:"icon-2"})]}),n.jsx("b",{children:"Нажмите сюда или перетащите файл"}),n.jsxs(Ve,{align:"center",children:["Форматы: ",a?a.map(g=>Ps(g)).join(", "):"jpg, png, pdf"," • Макс. файлов: ",t]})]})]})},Dd=e=>{if(e===0)return"0 Bytes";const t=1024,i=["Bytes","KB","MB","GB","TB"],s=Math.floor(Math.log(e)/Math.log(t));return parseFloat((e/Math.pow(t,s)).toFixed(2))+" "+i[s]},zd=(e,t,i)=>(e.preventDefault(),e.stopPropagation(),[...i.filter(a=>a.name!==t)]),Md=x.div`
    width: 100%;
    padding: 6px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: ${_.grey.transparent3};
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
`,Fd=({file:e,files:t,setFiles:i})=>{const{open:s}=J(),a=(o,l)=>{o.preventDefault(),o.stopPropagation();const d=new FileReader;d.onloadend=()=>{s(n.jsx(Ts,{src:d.result,loading:!1,width:"500px",height:""}))},l&&d.readAsDataURL(l)},r=o=>pe.evokeConfirm({message:"Вы уверены, что хотите удалить файл?",onConfirm:()=>i(zd(o,e.name,t))});return n.jsxs(Md,{onClick:o=>o.preventDefault(),children:[n.jsxs("div",{className:"file-body",onClick:o=>e.type.includes("image")&&a(o,e),children:[n.jsx("div",{className:"image-container",children:e.type.includes("image")?n.jsx(Rr,{}):n.jsx(Ir,{})}),n.jsxs("div",{className:"name-and-size",children:[n.jsx("b",{className:"file-name",children:e.name}),n.jsx(Ve,{fontSize:"0.7em",children:Dd(e.size)})]})]}),n.jsx(j,{icon:n.jsx(Oe,{}),height:"30px",width:"30px",background:"transparent",onClick:r})]})},Ud=({files:e,setFiles:t})=>n.jsx(se,{title:"Список файлов",visible:!!e.length,onDelete:()=>pe.evokeConfirm({message:"Вы уверены, что хотите удалить все файлы?",onConfirm:()=>t([])}),children:e.map(i=>n.jsx(Fd,{file:i,files:e,setFiles:t},i.name))}),$s=e=>n.jsxs(se,{gap:12,children:[n.jsx(Ld,{...e}),n.jsx(Ud,{files:e.files,setFiles:e.setFiles})]}),Bd=({documents:e,optionalCheckbox:t,data:i,setData:s,optional:a,collapsed:r,confirmed:o})=>{const[l,d]=c.useState(o===void 0),[p,u]=c.useState(!r),[m,b]=c.useState(!1),h=()=>{if(i[0]===void 0&&!(t!=null&&t.value)&&(t!=null&&t.required))return z.evokePopUpMessage({message:"Не все необходимые поля заполнены",type:"failure",time:5e3});Array.isArray(i[0])?e?t!=null&&t.required?e.files.length&&e.required||t.value?(s(w=>(w.confirmed=!0,{...w})),d(!1),u(!1)):z.evokePopUpMessage({message:"Необходимо загрузить файл. Если у вас нет соответствующего документа, отметье это галочкой",type:"failure",time:5e3}):!l&&!i.find(w=>!!w.find(E=>!E.value&&E.required))||t!=null&&t.value&&!e.required||e.files.length||!e.required?(s(w=>(w.confirmed=!0,{...w})),d(!1),u(!1)):z.evokePopUpMessage({message:"Необходимо загрузить файл",type:"failure",time:5e3}):t!=null&&t.value&&t.required||!i.length||!i.find(w=>!!w.find(E=>!E.value&&E.required))&&!i.find(w=>!!w.find(E=>{var $;return E.value.id==="not-chosen"&&!!(($=E.items)!=null&&$.length)}))?(s(w=>(w.confirmed=!0,{...w})),d(!1),u(!1)):z.evokePopUpMessage({message:"Не все необходимые поля заполнены",type:"failure",time:5e3}):e?t!=null&&t.required?e.files.length&&e.required||t.value?(s(w=>(w.confirmed=!0,{...w})),d(!1),u(!1)):z.evokePopUpMessage({message:"Необходимо загрузить файл. Если у вас нет соответствующего документа, отметьте это галочкой",type:"failure",time:5e3}):!l&&!i.find(w=>!w.value&&w.required)||t!=null&&t.value&&!e.required||e.files.length||!e.required?(s(w=>(w.confirmed=!0,{...w})),d(!1),u(!1)):z.evokePopUpMessage({message:"Необходимо загрузить файл",type:"failure",time:5e3}):t!=null&&t.value&&t.required||!i.find(w=>!w.value&&w.required)&&!i.find(w=>{var E;return w.value===null&&!!((E=w.items)!=null&&E.length)})?(s(w=>(w.confirmed=!0,{...w})),d(!1),u(!1)):z.evokePopUpMessage({message:"Не все необходимые поля заполнены",type:"failure",time:5e3})},g=()=>{s(w=>{const E=w.default[0].map($=>({fieldName:$.fieldName??"",title:$.title,value:$.type==="select"&&($!=null&&$.items)?null:"",type:$.type,items:$.items,width:$.width,required:$.required}));return{...w,data:[...w.data,E]}})},f=w=>{s(E=>{const $=E.data.filter((D,H)=>w!==H);return{...E,data:$}})},v=w=>{s(E=>(E.documents&&(E.documents.files=[...w]),{...E}))},S=()=>{t&&(t.value=!t.value),s(w=>({...w,optionalCheckbox:t}))};return c.useEffect(()=>{u(!m&&a?!1:!r)},[m,r]),{openArea:p,changeInputArea:l,included:m,setOpenArea:u,setIncluded:b,setChangeInputArea:d,handleRemove:f,handleAddNew:g,handleLoadFiles:v,handleConfirm:h,handleCheckbox:S}},Hd=x.div`
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
`,Kt=(e,t)=>{const i=e.find(s=>s.id.toString()===t[0]);return t.length&&(i!=null&&i.children)?(t.shift(),Kt(i.children,t)):i?i.children:e},Wd=e=>{const{items:t,setSelected:i,selected:s,appearance:a=!0,multiple:r=!1}=e,[o,l]=c.useState(!1),d=c.useRef(null),p=c.useRef(null),[u,m]=c.useState([]),[b,h]=c.useState(t),[g,f]=c.useState("");c.useEffect(()=>{h(t)});const v=c.useCallback(()=>{l(E=>!E)},[l]),S=c.useCallback(E=>{if(E.children)u.push(E.id.toString()),h(Kt(t,[...u])??[]),m([...u]);else{if(r)if(s)if(s.find($=>$.id===E.id)){const $=s.filter(D=>D.id!==E.id);$.length?i($):i(null)}else i([...s,E]);else i([E]);else i(E);!r&&v(),f(u.join("/"))}},[i,u]),w=c.useCallback(()=>{u.pop(),m([...u]),u.length===0?h(t):h(Kt(t,u)??[])},[u,h]);return We(d,()=>{o&&v()}),{handleOpen:v,refElement:d,isOpen:o,multiple:r,handleSelect:S,selectedRoute:g,currentItems:b,route:u,goBack:w,refItems:p,appearance:a}},Vd=x.div`
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
`,Gd=x.div`
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
`,qd=x.header`
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
        background: ${_.blue.transparent2};
        color: ${_.blue.main};
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
`,Yd=x.ul`
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
`,Xn=x.li`
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
`,Kd=["isOpen"],Jd=x(Nr).withConfig({shouldForwardProp:e=>!Kd.includes(e)})`
    transition: 0.3s;
    min-width: 15px;
    transform: rotateZ(${({isOpen:e})=>e?"0deg":"180deg"});
`,Xd=e=>{const{handleOpen:t,refElement:i,isOpen:s,multiple:a,handleSelect:r,selectedRoute:o,currentItems:l,route:d,goBack:p,refItems:u,appearance:m}=Wd(e),{isActive:b,width:h,title:g,required:f,selected:v,placeholder:S}=e;return n.jsxs(Gd,{onClick:t,appearance:m,ref:i,isOpen:s,isActive:b??!0,width:h,children:[n.jsx(U,{size:5,align:"left",bottomGap:"5px",visible:!!g,required:f,children:g}),n.jsxs(Vd,{multiple:a,appearance:m,children:[n.jsx(qd,{appearance:m,children:a?v?v.map(w=>n.jsxs("div",{className:"header-item",children:[!!w.icon&&n.jsx("span",{className:"icon",children:w.icon}),n.jsx("span",{className:"header-title",children:w.title})]},w.id)):n.jsx("span",{className:"not-chosen multi",children:S??"Не выбрано"}):n.jsx("div",{className:"single-header",children:v?n.jsxs(n.Fragment,{children:[!!v.icon&&n.jsx("span",{className:"icon",children:v.icon}),n.jsx("span",{className:"header-title",children:v.title})]}):n.jsx("span",{className:"not-chosen",children:S??"Не выбрано"})})}),n.jsx(Jd,{isOpen:s})]}),n.jsxs(Yd,{width:h,ref:u,isOpen:s,className:s?"open":"close",itemsAmount:l.length+(d.length?1:0),title:g,children:[!!d.length&&n.jsx(Xn,{isSelected:!1,onClick:w=>{w.stopPropagation(),p()},children:n.jsxs("span",{className:"back-button",children:[n.jsx(ut,{}),"Назад"]})},-1),l.map(({id:w,icon:E,title:$,children:D})=>n.jsxs(Xn,{onClick:H=>{H.stopPropagation(),r({id:w,icon:E,title:$,children:D})},isSelected:!a&&!!v&&v.title.includes($),leadingToSelected:o.includes(w.toString()),children:[!!E&&n.jsx("span",{className:"icon",children:E}),n.jsx("span",{className:"select-item-title",children:$}),!!D&&n.jsx("span",{className:"right-icon",children:n.jsx(kt,{})}),a&&!!v&&!!v.find(H=>H.title.includes($))&&n.jsx("span",{className:"right-icon",children:n.jsx(yi,{})})]},$))]})]})},gn=c.memo(Xd),Zd=x.div`
    padding: 0px 12px;
    height: 45px;
    width: 100%;
    display: flex;
    align-items: center;
    border-radius: var(--brLight);

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
`,Qd=({title:e,state:t,action:i})=>{const s=()=>{i(!t)};return n.jsx(Zd,{children:n.jsxs("label",{children:[n.jsx("b",{children:e}),n.jsx(Td,{id:Math.random().toString(),isToggled:t,setIsToggled:s},e)]})},e)},ep=x.div`
    width: 100%;
    h2 {
        margin-top: 10px;
    }
`,As=({title:e,toggles:t,setToggles:i})=>{const s=c.useCallback((a,r)=>{t[a].state=!t[a].state,i([...t]),r&&(r==null||r(t[a].state))},[t,i]);return n.jsxs(ep,{children:[!!e.length&&n.jsx("h2",{children:e}),t.map(({title:a,state:r,action:o},l)=>n.jsx(Qd,{title:a,state:r,action:()=>s(l,o)},a))]})},tp=x.div``,np=({title:e,items:t,setChecked:i,setFiles:s})=>n.jsxs(tp,{children:[n.jsx(U,{size:5,align:"left",bottomGap:!0,children:e}),t.map(({value:a,title:r,files:o,maxFiles:l,checkboxCondition:d,maxFileSizeInMegaBytes:p},u)=>n.jsx(Od,{checkbox:{checked:a,setChecked:()=>i(a,u),text:r},loadfile:{files:o,maxFiles:l,maxFileSizeInMegaBytes:p,isActive:!0,setFiles:m=>s(m,u)},docVisible:d==="straight"?a:!a},r))]}),ip=({title:e,buttons:t,required:i=!1,current:s,setCurrent:a,isSpecificRadio:r=!1})=>n.jsxs("div",{children:[n.jsx(U,{visible:!!e,size:5,align:"left",bottomGap:!0,required:i,children:e}),n.jsxs(se,{children:[!r&&n.jsx(ve,{text:"Не выбрано",checked:s===null,setChecked:()=>a(null)},-1),t.map(o=>{const{id:l,title:d}=o;return n.jsx(ve,{text:d,checked:l===(s==null?void 0:s.id),setChecked:()=>a({id:l,title:r?l.toString():d})},l)})]})]}),sp=x.div`
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
`,ap=({title:e,value:t,visible:i})=>i?n.jsxs(sp,{children:[n.jsxs("span",{className:"title",children:[e,":"]})," ",n.jsx("span",{className:"value",children:t})]}):null,Zn=e=>{const{value:t,required:i,width:s,indexI:a,indexJ:r,type:o,items:l,title:d,documents:p,changeInputArea:u,setData:m,mask:b,editable:h,placeholder:g,autocomplete:f,isSpecificRadio:v,specialType:S,specialFieldsNameConfig:w,minValueInput:E,maxValueInput:$,diff:D,visible:H}=e,B=h??(u&&!p),[ee,q]=c.useState(!0),X=(C,M,Ae)=>{m(Z=>(Array.isArray(Z.data[0])?Z.data[M][Ae??0].value=C:Z.data[M].type==="checkbox-docs"?Z.data[M].items[Ae??0].value=!!C:Z.data[M].value=C,{...Z}))},$e=(C,M,Ae)=>{m(Z=>(Array.isArray(Z.data[0])?Z.data[M][Ae??0].value=C:Z.data[M].value=C,{...Z}))},fe=(C,M,Ae)=>{m(Z=>(Z.data[M].items[Ae??0].files=C,{...Z}))},Nt=C=>{m(M=>(M.data[a].value=C,{...M}))},mt=C=>{m(M=>(M.data[a].value=C,{...M}))};return w&&S&&!Object.values(w).includes(S)?null:o!=="select"&&o!=="multiselect"||!l?o==="checkbox"?n.jsx(ve,{text:d,isActive:B,checked:t,setChecked:C=>X(C,a,r)}):o==="textarea"?n.jsx(Xc,{value:t,title:d,setValue:C=>X(C,a,r),isActive:B,textAreaAppearance:B,placeholder:g??d,required:i,width:s}):o==="checkbox-docs"?n.jsx(np,{title:d,items:l,setChecked:(C,M)=>X(!C,a,M),setFiles:(C,M)=>fe(C,a,M)}):o==="date-interval"?n.jsx($d,{title:d,required:i,dates:t,setDates:C=>mt(C),valid:ee,setValid:q,minValue:E,diff:D}):o==="simple-text"?n.jsx(ap,{title:d,value:t,visible:H}):o==="radio"?n.jsx(ip,{buttons:l,title:d,required:i,current:t,setCurrent:Nt,isSpecificRadio:v}):n.jsx(he,{value:t,title:d,minValue:E,maxValue:$,setValue:C=>X(C,a,r),type:o,isActive:B,inputAppearance:B,placeholder:g??d,required:i,mask:b,width:s,autocomplete:f}):n.jsx(gn,{items:l,setSelected:C=>$e(C,a,r),selected:t,isActive:B,title:d,width:s,multiple:o==="multiselect",required:i})},rp=x.div`
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
`,op=({title:e,included:t,optional:i,confirmed:s,setOpenArea:a,setIncluded:r,collapsed:o})=>n.jsxs(rp,{onClick:()=>!o&&(t||!i)&&a(l=>!l),children:[n.jsxs("div",{className:"title-and-icon",children:[n.jsx(U,{size:4,align:"left",icon:s!==void 0?s?n.jsx(Lr,{}):n.jsx(Dr,{}):void 0,iconColor:s?"var(--green)":"var(--red)",children:e}),i&&n.jsx(ve,{checked:t,setChecked:r})]}),n.jsx(j,{icon:n.jsx(yt,{}),onClick:()=>null,background:"transparent"})]}),lp=({confirmed:e,changeInputArea:t,setData:i,setChangeInputArea:s,handleConfirm:a})=>e?n.jsx(j,{onClick:()=>i(r=>(r.confirmed=!1,{...r})),text:"Отменить",icon:n.jsx(Fe,{}),textColor:_.red.main,hoverBackground:_.red.transparent3,background:"transparent",width:"130px"}):t?n.jsxs(n.Fragment,{children:[n.jsx(j,{onClick:a,text:"Сохранить",icon:n.jsx(zr,{}),textColor:_.blue.main,hoverBackground:_.blue.transparent3,background:"transparent",width:"130px"}),n.jsx(j,{onClick:()=>s(!1),text:"Отменить",icon:n.jsx(Fe,{}),textColor:_.red.main,hoverBackground:_.red.transparent3,background:"transparent",width:"130px"})]}):n.jsxs(n.Fragment,{children:[n.jsx(j,{onClick:a,text:"Подтвердить",icon:n.jsx(Mr,{}),textColor:_.green.main,hoverBackground:_.green.transparent3,background:"transparent",width:"130px"}),n.jsx(j,{onClick:()=>s(!0),text:"Изменить",icon:n.jsx(Fr,{}),textColor:_.blue.main,hoverBackground:_.blue.transparent3,background:"transparent",width:"130px"})]}),cp=e=>e.confirmed===void 0?null:n.jsx(se,{direction:"horizontal",horizontalAlign:"right",children:n.jsx(lp,{...e,confirmed:e.confirmed})}),dp=({title:e,hint:t,alert:i,data:s,optionalCheckbox:a,documents:r,setData:o,confirmed:l,optional:d=!1,addNew:p=!1,divider:u,collapsed:m,links:b,specialFieldsName:h})=>{const{openArea:g,changeInputArea:f,included:v,setOpenArea:S,setIncluded:w,setChangeInputArea:E,handleRemove:$,handleAddNew:D,handleLoadFiles:H,handleConfirm:B,handleCheckbox:ee}=Bd({documents:r,optionalCheckbox:a,data:s,setData:o,optional:d,collapsed:m,confirmed:l});return n.jsxs(n.Fragment,{children:[n.jsxs(Hd,{openArea:g,children:[n.jsx(op,{title:e,included:v,optional:d,confirmed:l,setOpenArea:S,setIncluded:w,collapsed:m}),n.jsxs("div",{className:"inputs",children:[n.jsx(K,{type:"alert",visible:!!i,icon:n.jsx(at,{}),children:i}),n.jsx(K,{type:"info",visible:!!t&&(f||l===void 0),title:"Как заполнить",icon:n.jsx(lt,{}),children:t}),Array.isArray(s[0])?s.map((q,X)=>n.jsxs("div",{className:"data-line",children:[q.map(($e,fe)=>n.jsx(Zn,{documents:r,changeInputArea:f&&!(a!=null&&a.value),setData:o,indexI:X,indexJ:fe,specialFieldsNameConfig:h,...$e},fe)),f&&p&&n.jsx(j,{icon:n.jsx(Ur,{}),textColor:_.red.main,onClick:()=>$(X),background:"transparent",isActive:!(a!=null&&a.value)})]},X)):s.map((q,X)=>n.jsx(Zn,{documents:r,changeInputArea:f&&!(a!=null&&a.value),setData:o,indexI:X,specialFieldsNameConfig:h,...q},X)),p&&f&&n.jsx(j,{icon:n.jsx(Br,{}),text:"Добавить",onClick:D,background:"transparent",isActive:!(a!=null&&a.value)}),!!r&&f&&n.jsx($s,{files:r.files,setFiles:q=>H(q),maxFileSizeInMegaBytes:r.maxFileSizeInMegaBytes,maxFiles:r.maxFiles,formats:r.allowedTypes,isActive:r.checkboxCondition?r.checkboxCondition==="straight"?!!(a!=null&&a.value):!(a!=null&&a.value):!0}),(b==null?void 0:b.length)&&b.map(q=>c.createElement(ud,{...q,key:q.title})),n.jsx(ve,{visible:!!a&&(a.visible??!0),text:a==null?void 0:a.title,isActive:(a==null?void 0:a.editable)||f,checked:(a==null?void 0:a.value)??!1,setChecked:ee}),n.jsx(cp,{confirmed:l,changeInputArea:f,setData:o,setChangeInputArea:E,handleConfirm:B})]})]}),u&&n.jsx(ue,{})]})},pp=x.div`
    color: #fff;
    cursor: pointer;
    background: ${({reached:e})=>e?_.green.main:_.grey.main};
    outline: 6px solid
        ${({reached:e,current:t})=>t?_.blue.transparent1:e?_.green.transparent3:_.grey.transparent3};
    min-width: 30px;
    min-height: 30px;
    margin: 6px;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.8em;
    font-weight: bold;
`,up=x.div`
    display: flex;
    margin-bottom: -20px;
`,hp=x.div`
    width: ${({lastElement:e})=>e?"42px":"100%"};
    display: flex;
    align-items: center;
`,gp=({stagesConfig:e})=>{const[t,i]=c.useState(0),[s,a]=c.useState({});c.useEffect(()=>{r(0)},[]);const r=o=>{a(l=>({...l,[t]:Ie(e[t][0].dataForm)})),i(o)};return n.jsxs(n.Fragment,{children:[n.jsx(up,{children:e.map((o,l)=>n.jsxs(hp,{lastElement:l===e.length-1,children:[n.jsx(pp,{current:l===t,onClick:()=>r(l),reached:s[l],children:l+1}),l!==e.length-1&&n.jsx(fd,{direction:"horizontal",reached:s[l],filled:100,distance:40})]},l))}),n.jsx(n.Fragment,{children:e[t].map((o,l)=>c.createElement(dp,{...o.dataForm,setData:o.setDataForm,key:l}))})]})},fp=()=>({title:"Дополнительно",data:[{title:"Комментарий",type:"textarea",fieldName:"comment",value:"",editable:!0}]}),xp=()=>({title:"Период предоставления льготы",hint:"Период предоставления льготы по плате за пользование жилым помещением соответствует дате подачи заявки и дате окончания действия документа",data:[{title:"Начало периода соответствия льготной категории",type:"date",value:"",fieldName:"beginning_of_benefit_period",editable:!0,required:!0},{title:"Окончание периода соответствия льготной категории",type:"date",value:"",fieldName:"end_of_benefit_period",editable:!0,required:!0},{title:"Отсутствует срок действия документа (бессрочный)",type:"checkbox",value:"",fieldName:"is_indefinite",editable:!0,required:!1}],documents:{files:[],required:!0,checkboxCondition:"reverse",fieldName:"invalidFiles",maxFiles:1,allowedTypes:["application/pdf"]}}),mp=()=>({title:"Адрес регистрации",data:[],hint:"Необходимо приложить скан-копию 2-3 страниц паспорта, а также страниц с регистрацией. Для иностранных студентов обязательно приложить перевод паспорта.",documents:{files:[],required:!0,fieldName:"registrationFiles",maxFiles:1,allowedTypes:["application/pdf"]}}),bp=e=>e.data.reduce((t,i)=>{var s;if(!i.value)return t;if(i.type==="checkbox-docs"){const a=(s=i.items)==null?void 0:s.reduce((r,o)=>{for(let l=0;l<o.files.length;l++)r[(o==null?void 0:o.fieldName)+`[${l}]`]=o.files[l];return r},{});t=Object.assign({},t,a)}else if(i.type==="select")t[i.fieldName]=i.isSpecificSelect?i.value.id:i.value.title||null;else{const a=!i.value||typeof i.value!="object";t[i.fieldName]=a?i==null?void 0:i.value:i.value.title}return t},{}),vp=async(e,t,i,s,a=!1)=>{i(!0);const r=t.map(p=>{if(a)return bp(p);if(Array.isArray(p.data[0])){const u=p.data.map(b=>Object.assign({},...b==null?void 0:b.map(h=>Qn(h)))),m={};return m[e]=JSON.stringify(u),m}else return p.data.map(u=>Qn(u))}).flat(),o=t.map(p=>{var m,b;const u={};if((m=p.documents)!=null&&m.fieldName)for(let h=0;h<p.documents.files.length;h++)u[((b=p.documents)==null?void 0:b.fieldName)+`[${h}]`]=p.documents.files[h];return u}),l=t.map(p=>{var m,b;const u={};return(m=p.optionalCheckbox)!=null&&m.fieldName&&(u[(b=p.optionalCheckbox)==null?void 0:b.fieldName]=p.optionalCheckbox.value),u}),d=Object.assign({},...r,...o,...l);try{await ke.postApplicationFx({formId:e,args:d}),i(!1),s(!0)}catch(p){i(!1),z.evokePopUpMessage({message:`Не удалось отправить форму. Ошибка: ${p}`,type:"failure",time:3e4})}},Qn=e=>{var i;const t={};return t[(e==null?void 0:e.fieldName)??""]=yp(e),e.type==="multiselect"&&(t[(e==null?void 0:e.fieldName)??""]=JSON.stringify((e==null?void 0:e.value).map(s=>s.title))),e.type==="checkbox-docs"?(i=e.items)==null?void 0:i.reduce((s,a)=>{for(let r=0;r<a.files.length;r++)s[(a==null?void 0:a.fieldName)+`[${r}]`]=a.files[r];return s},{}):t},yp=e=>!e.value||typeof e.value!="object"?e==null?void 0:e.value:e.value.title,wp=x.div`
    display: flex;
    align-items: ${({isDone:e})=>e?"center":"flex-start"};
    justify-content: center;
    width: 100%;
    height: ${({isDone:e})=>e&&"100%"};
    padding: 10px;
    color: var(--text);
`;var Cs=(e=>(e.USG_GETHOSTEL_O="usg_gethostel_o",e.USG_GETHOSTEL_OOZ="usg_gethostel_ooz",e.USG_GETHOSTEL_Z="usg_gethostel_z",e.USG_GETHOSTEL_AO="usg_gethostel_ao",e.USG_GETHOSTEL_BENEFIT="usg_gethostel_benefit",e.USG_GETHOSTEL_FAMILY="usg_gethostel_family",e.USG_CONTR_TERMINATION="usg_contr_termination",e.USG_RELOCATION_INNER="usg_relocation_inner",e.USG_RELOCATION="usg_relocation",e.OBUCH="obuch",e.STATUS_SOBES="status_sobes",e.SPRVIZOV="sprvizov",e.PERS_DATA="pers_data",e.PROPUSK_RESTORE="propusk_restore",e.PASSPORT_DATA="passport_data",e.DIPL_OTL="dipl_otl",e.STATUS_REGULAR="status_regular",e.OKID_LICAKKRED="okid_licakkred",e.MILDOCS="mildocs",e.VOEN_UCH="voen_uch",e.PR_DONATE="pr_donate",e.PR_MATPOM="pr_matpom",e.PR_SOCSTIP="pr_socstip",e.HIGH_SCHOLARSHIP="high_scholarship",e.DOP_SOGL="dop_sogl",e.SEND_PAYMENT_EDU="send_payment_edu",e.FREE_REQUEST="free_request",e.CRS_VACATIONS="crs_vacations",e.CRS_ACADEMVAC="crs_academvac",e.CRS_EXPULSION="crs_expulsion",e.CRS_ATTESTAT="crs_attestat",e.MEDICAL_CERT="postRequestMedicalCertificate",e.WORK_TRANSFER="",e.EXTRA_HOLIDAY_COLL="",e.HOLIDAY_PLANNING="",e.HOLIDAY_WORK="",e.DISMISSAL="",e.HOLIDAY_POSTPONED="",e.PART_TIME_EMPLOYMENT="",e))(Cs||{}),_p=(e=>(e.CONTACT_INFO_ACTUALIZATION="contact-info-actualization",e.DATA_VERIFICATION_ROUTE="data-verification",e.ISSUANCE_OF_LICENSES="issuance-of-licenses",e.GETTING_COMPUTER_EQUIPMENT="getting-computer-equipment",e.CONNECTING_COMPUTER="connecting-computer",e.PRINTER_MAINTENANCE="printer-maintenance",e.QUESTION_SED="question-sed",e.QUESTION_PERSONAL_ACCOUNT="question-personal-account",e.OTHER_IT_SERVICES="other-it-services",e.CERTIFICATE_FROM_PLACE_OF_WORK="certificate-from-the-place-of-work",e.VISA_CERTIFICATE="visa-certificate",e.CERTIFICATE_OF_WORK_EXPERIENCE="certificate-of-work-experience",e.NUMBER_OF_UNUSED_VACATION_DAYS="number-of-unused-vacation-days",e.COPY_OF_EMPLOYMENT_RECORD="copy-of-the-employment-record",e.COPIES_OF_DOCUMENTS_FROM_PERSONAL_FILE="copies-of-documents-from-the-personal-file",e.WORK_ON_TERMS_OF_EXTERNAL_CONCURRENCY="work-on-the-terms-of-external-concurrency",e.CERTIFICATE_TIME_PARENTAL_LEAVE="certificate-time-parental-leave",e.COURIER="courier",e.PERSONA_INCOME_TAX_REFERENCE="persona-income-tax-reference",e.PAYMENT_OF_CHILD_BIRTH_ALLOWANCE="payment-of-child-birth-allowance",e.PAYMENT_FOR_CHILD_CARE="payment-for-child-care",e))(_p||{});const jp=[{id:0,title:"имею постоянную регистрацию за пределами А-107 или не имею постоянную регистрацию"},{id:1,title:"имею постоянную регистрацию в пределах А-107"}],Tp=e=>{const{surname:t,name:i,patronymic:s,group:a,email:r,phone:o}=e;return{title:"Контактная информация",data:[{title:"ФИО",fieldName:"fio",value:t+" "+i+" "+s,editable:!1},{title:"Учебная группа",fieldName:"group",type:"tel",value:a,editable:!1},{title:"Электронная почта",fieldName:"email",type:"email",value:r,editable:!0,required:!0},{title:"Телефон",fieldName:"phone",type:"tel",value:o,editable:!0,required:!0},{title:"Причина предоставления (в связи с)",type:"select",width:"100%",value:null,fieldName:"reason",placeholder:"укажите причину",editable:!0,required:!0,items:jp},{title:"Приоритетное общежитие",fieldName:"priority_hostel",value:"",type:"select",width:"100%",editable:!0,required:!0,items:[{id:0,title:"1 общежитие"},{id:1,title:"2 общежитие"},{id:2,title:"3 общежитие"},{id:3,title:"4 общежитие"},{id:4,title:"5 общежитие"},{id:5,title:"6 общежитие"},{id:6,title:"7 общежитие"},{id:7,title:"8 общежитие"},{id:8,title:"9 общежитие"},{id:9,title:"10 общежитие"}]}]}},Ep=()=>{var q;const[e,t]=c.useState(null),[i,s]=c.useState(vt.kvdCert),[a,r]=c.useState(vt.fluorographyCert),[o,l]=c.useState(vt.vichRwCert),[d,p]=c.useState(vt.graftCert),{data:{dataUserApplication:u}}=He.useApplications(),{data:{user:m}}=Q.useUser(),[b,h]=c.useState(!1),[g,f]=c.useState(!1),[v,S]=c.useState(null),[w,E]=c.useState(null),[$,D]=c.useState(null),H=b??!1;if((m==null?void 0:m.educationForm)!=="Недоступен")return n.jsx(oe,{text:"Сервис временно недоступен в связи с отсутствием свободных мест"});const B=!!e&&!!w&&!!v&&!!$;if(c.useEffect(()=>{u&&(t(Tp(u)),S(xp()),E(mp()),D(fp()))},[u]),!B)return null;const ee=[[{dataForm:e,setDataForm:t}],[{dataForm:w,setDataForm:E}],[{dataForm:i,setDataForm:s}],[{dataForm:a,setDataForm:r}],[{dataForm:o,setDataForm:l}],[{dataForm:d,setDataForm:p}]];return n.jsx(wp,{isDone:H,children:n.jsxs(hn,{children:[n.jsx(U,{size:4,align:"left",children:"Предоставление права проживания (очно-заочная форма)"}),n.jsx(gp,{stagesConfig:ee}),n.jsx(Es,{text:"Отправить",action:()=>vp(Cs.USG_GETHOSTEL_OOZ,[e,w,v,$,i,a,o,d],f,h),isLoading:g,completed:b,setCompleted:h,repeatable:!1,buttonSuccessText:"Отправлено",isDone:H,isActive:(((q=e.optionalCheckbox)==null?void 0:q.value)??!0)&&Ie(e)&&Ie(a)&&Ie(o)&&Ie(d)&&Ie(i),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})},ce=({oldVersionUrl:e,errorText:t="Страница еще находится в разработке. Если вам она нужна, вернитесь к старому дизайну",buttonText:i="Перейти к старому дизайну",forceForward:s=!1})=>(c.useEffect(()=>{s&&(window.location.href=`/old/?p=${e==null?void 0:e.slice(1,e.length)}`)},[]),n.jsx(oe,{text:t,children:n.jsx(un,{text:i,onClick:()=>{localStorage.setItem("useOldVersion","true")},background:"var(--purple)",width:"300px",href:`${de}/?p=${e==null?void 0:e.slice(1,e.length)}`})})),kp="modulepreload",Sp=function(e){return"/"+e},ei={},y=function(t,i,s){if(!i||i.length===0)return t();const a=document.getElementsByTagName("link");return Promise.all(i.map(r=>{if(r=Sp(r),r in ei)return;ei[r]=!0;const o=r.endsWith(".css"),l=o?'[rel="stylesheet"]':"";if(!!s)for(let u=a.length-1;u>=0;u--){const m=a[u];if(m.href===r&&(!o||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${l}`))return;const p=document.createElement("link");if(p.rel=o?"stylesheet":kp,o||(p.as="script",p.crossOrigin=""),p.href=r,document.head.appendChild(p),o)return new Promise((u,m)=>{p.addEventListener("load",u),p.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>t())},Op=c.lazy(()=>y(()=>import("./index-e61de665.js"),["assets/index-e61de665.js","assets/vendor-0c76c893.js"])),Pp=c.lazy(()=>y(()=>import("./index-3d405084.js"),["assets/index-3d405084.js","assets/vendor-0c76c893.js","assets/index-e9148865.js"])),$p=c.lazy(()=>y(()=>import("./index-909f77ab.js"),["assets/index-909f77ab.js","assets/vendor-0c76c893.js","assets/index-80b0a22e.js"])),Ap=c.lazy(()=>y(()=>import("./index-58ac46ae.js"),["assets/index-58ac46ae.js","assets/vendor-0c76c893.js"]));c.lazy(()=>y(()=>import("./index-0daa0653.js"),["assets/index-0daa0653.js","assets/vendor-0c76c893.js"]));const Cp=c.lazy(()=>y(()=>import("./index-1ee53607.js"),["assets/index-1ee53607.js","assets/vendor-0c76c893.js","assets/get-method-obtaining-fields-cc276cf2.js","assets/find-current-in-select-ba4611d5.js","assets/get-student-subdivisions-5a2f2c8d.js","assets/get-divisions-96cfa1b1.js","assets/get-method-obstaing-c0726de9.js"])),Rp=c.lazy(()=>y(()=>import("./index-5990f0c8.js"),["assets/index-5990f0c8.js","assets/vendor-0c76c893.js","assets/get-method-obtaining-fields-cc276cf2.js","assets/get-student-subdivisions-5a2f2c8d.js","assets/get-divisions-96cfa1b1.js","assets/get-method-obstaing-c0726de9.js"])),Ip=c.lazy(()=>y(()=>import("./index-1738daf8.js"),["assets/index-1738daf8.js","assets/vendor-0c76c893.js","assets/get-method-obtaining-fields-cc276cf2.js","assets/get-student-subdivisions-5a2f2c8d.js","assets/get-divisions-96cfa1b1.js","assets/get-method-obstaing-c0726de9.js"])),Np=c.lazy(()=>y(()=>import("./index-37687a10.js"),["assets/index-37687a10.js","assets/vendor-0c76c893.js"])),Lp=c.lazy(()=>y(()=>import("./index-60830d96.js"),["assets/index-60830d96.js","assets/vendor-0c76c893.js"])),Dp=c.lazy(()=>y(()=>import("./index-db66c9bd.js"),["assets/index-db66c9bd.js","assets/vendor-0c76c893.js","assets/index-80b0a22e.js","assets/get-short-string-60b0c4d4.js"])),zp=c.lazy(()=>y(()=>import("./index-4c104f7a.js"),["assets/index-4c104f7a.js","assets/vendor-0c76c893.js"])),Mp=c.lazy(()=>y(()=>import("./index-08c15054.js"),["assets/index-08c15054.js","assets/vendor-0c76c893.js"])),Fp=c.lazy(()=>y(()=>import("./index-972e5f8c.js"),["assets/index-972e5f8c.js","assets/vendor-0c76c893.js"])),Up=c.lazy(()=>y(()=>import("./index-2ab4d465.js"),["assets/index-2ab4d465.js","assets/vendor-0c76c893.js"])),Bp=c.lazy(()=>y(()=>import("./index-ee974d63.js"),["assets/index-ee974d63.js","assets/vendor-0c76c893.js"])),Hp=c.lazy(()=>y(()=>import("./index-0e508942.js"),["assets/index-0e508942.js","assets/vendor-0c76c893.js"])),Wp=c.lazy(()=>y(()=>import("./index-f4dc753a.js"),["assets/index-f4dc753a.js","assets/vendor-0c76c893.js"]));c.lazy(()=>y(()=>import("./index-574e6539.js"),["assets/index-574e6539.js","assets/vendor-0c76c893.js"]));const Vp=c.lazy(()=>y(()=>import("./index-25175f8e.js"),["assets/index-25175f8e.js","assets/vendor-0c76c893.js"]));c.lazy(()=>y(()=>import("./index-035d3d8e.js"),["assets/index-035d3d8e.js","assets/vendor-0c76c893.js"]));c.lazy(()=>y(()=>import("./index-be6c9e03.js"),["assets/index-be6c9e03.js","assets/vendor-0c76c893.js"]));c.lazy(()=>y(()=>import("./index-30e2d6df.js"),["assets/index-30e2d6df.js","assets/vendor-0c76c893.js"]));const Gp=c.lazy(()=>y(()=>import("./index-94712ebf.js"),["assets/index-94712ebf.js","assets/vendor-0c76c893.js"])),qp=c.lazy(()=>y(()=>import("./index-94a3727a.js"),["assets/index-94a3727a.js","assets/vendor-0c76c893.js","assets/get-method-obtaining-fields-cc276cf2.js","assets/get-student-subdivisions-5a2f2c8d.js","assets/get-divisions-96cfa1b1.js","assets/get-method-obstaing-c0726de9.js"])),Yp=c.lazy(()=>y(()=>import("./index-c7081f38.js"),["assets/index-c7081f38.js","assets/vendor-0c76c893.js","assets/get-method-obtaining-fields-cc276cf2.js","assets/get-student-subdivisions-5a2f2c8d.js","assets/get-divisions-96cfa1b1.js","assets/get-method-obstaing-c0726de9.js"])),Kp=c.lazy(()=>y(()=>import("./index-8a9f6348.js"),["assets/index-8a9f6348.js","assets/vendor-0c76c893.js"])),Jp=c.lazy(()=>y(()=>import("./index-00ea663d.js"),["assets/index-00ea663d.js","assets/vendor-0c76c893.js"])),Xp=c.lazy(()=>y(()=>import("./index-df0846c8.js"),["assets/index-df0846c8.js","assets/vendor-0c76c893.js"])),Zp=c.lazy(()=>y(()=>import("./index-a243ecaf.js"),["assets/index-a243ecaf.js","assets/vendor-0c76c893.js"]));c.lazy(()=>y(()=>import("./index-aba17ccf.js"),["assets/index-aba17ccf.js","assets/vendor-0c76c893.js"]));const Qp=c.lazy(()=>y(()=>import("./index-15b3f8d7.js"),["assets/index-15b3f8d7.js","assets/vendor-0c76c893.js"])),eu=c.lazy(()=>y(()=>import("./index-d0fd5e65.js"),["assets/index-d0fd5e65.js","assets/vendor-0c76c893.js"])),tu=c.lazy(()=>y(()=>import("./index-5960acbc.js"),["assets/index-5960acbc.js","assets/vendor-0c76c893.js","assets/get-divisions-96cfa1b1.js"]));c.lazy(()=>y(()=>import("./index-b24ca462.js"),["assets/index-b24ca462.js","assets/vendor-0c76c893.js","assets/get-default-subdivision-676ce871.js","assets/index-ce634f84.js","assets/get-method-obstaing-c0726de9.js"]));c.lazy(()=>y(()=>import("./index-ef6e2b6a.js"),["assets/index-ef6e2b6a.js","assets/vendor-0c76c893.js","assets/index-ce634f84.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-e59bec59.js","assets/get-default-subdivision-676ce871.js","assets/get-method-obtaining-fields-cc276cf2.js","assets/get-teacher-subdivisions-500dfe3f.js"]));const nu=c.lazy(()=>y(()=>import("./index-41b45fd9.js"),["assets/index-41b45fd9.js","assets/vendor-0c76c893.js","assets/index-ce634f84.js","assets/get-method-obstaing-c0726de9.js"])),iu=c.lazy(()=>y(()=>import("./index-dff0b93c.js"),["assets/index-dff0b93c.js","assets/vendor-0c76c893.js","assets/find-current-in-select-ba4611d5.js"])),su=c.lazy(()=>y(()=>import("./index-8d9c109e.js"),["assets/index-8d9c109e.js","assets/vendor-0c76c893.js"])),au=c.lazy(()=>y(()=>import("./index-6edf7f93.js"),["assets/index-6edf7f93.js","assets/vendor-0c76c893.js","assets/index-cb3975f1.js","assets/index-80b0a22e.js"]));c.lazy(()=>y(()=>import("./index-dae0936c.js"),["assets/index-dae0936c.js","assets/vendor-0c76c893.js"]));c.lazy(()=>y(()=>import("./index-c4482a8f.js"),["assets/index-c4482a8f.js","assets/vendor-0c76c893.js","assets/get-default-subdivision-676ce871.js","assets/index-ce634f84.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-e59bec59.js"]));c.lazy(()=>y(()=>import("./index-615a2d00.js"),["assets/index-615a2d00.js","assets/vendor-0c76c893.js","assets/get-default-subdivision-676ce871.js","assets/index-ce634f84.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-e59bec59.js","assets/get-method-obtaining-fields-cc276cf2.js","assets/get-teacher-subdivisions-500dfe3f.js"]));c.lazy(()=>y(()=>import("./index-52f0a1e0.js"),["assets/index-52f0a1e0.js","assets/vendor-0c76c893.js","assets/index-ce634f84.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-e59bec59.js","assets/get-default-subdivision-676ce871.js","assets/get-method-obtaining-fields-cc276cf2.js","assets/get-teacher-subdivisions-500dfe3f.js"]));c.lazy(()=>y(()=>import("./index-299a2d25.js"),["assets/index-299a2d25.js","assets/vendor-0c76c893.js","assets/index-ce634f84.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-e59bec59.js","assets/get-default-subdivision-676ce871.js"]));c.lazy(()=>y(()=>import("./index-7823c0f8.js"),["assets/index-7823c0f8.js","assets/vendor-0c76c893.js","assets/index-ce634f84.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-e59bec59.js","assets/get-default-subdivision-676ce871.js","assets/get-method-obtaining-fields-cc276cf2.js","assets/get-teacher-subdivisions-500dfe3f.js"]));c.lazy(()=>y(()=>import("./index-02f07a3b.js"),["assets/index-02f07a3b.js","assets/vendor-0c76c893.js","assets/index-ce634f84.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-e59bec59.js","assets/get-default-subdivision-676ce871.js"]));c.lazy(()=>y(()=>import("./index-d33ecde7.js"),["assets/index-d33ecde7.js","assets/vendor-0c76c893.js","assets/index-ce634f84.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-e59bec59.js","assets/get-default-subdivision-676ce871.js"]));c.lazy(()=>y(()=>import("./index-adbbd9c3.js"),["assets/index-adbbd9c3.js","assets/vendor-0c76c893.js","assets/index-ce634f84.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-e59bec59.js","assets/get-default-subdivision-676ce871.js","assets/get-method-obtaining-fields-cc276cf2.js","assets/get-teacher-subdivisions-500dfe3f.js"]));c.lazy(()=>y(()=>import("./index-c5f7886f.js"),["assets/index-c5f7886f.js","assets/vendor-0c76c893.js","assets/index-ce634f84.js","assets/get-method-obstaing-c0726de9.js","assets/get-default-subdivision-676ce871.js"]));c.lazy(()=>y(()=>import("./index-ffcb1cf0.js"),["assets/index-ffcb1cf0.js","assets/vendor-0c76c893.js","assets/index-ce634f84.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-e59bec59.js","assets/get-default-subdivision-676ce871.js"]));c.lazy(()=>y(()=>import("./index-41e5fb24.js"),["assets/index-41e5fb24.js","assets/vendor-0c76c893.js","assets/index-ce634f84.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-e59bec59.js","assets/get-default-subdivision-676ce871.js","assets/get-method-obtaining-fields-cc276cf2.js","assets/get-teacher-subdivisions-500dfe3f.js"]));c.lazy(()=>y(()=>import("./index-16c21ec7.js"),["assets/index-16c21ec7.js","assets/vendor-0c76c893.js","assets/index-ce634f84.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-e59bec59.js","assets/get-default-subdivision-676ce871.js","assets/get-method-obtaining-fields-cc276cf2.js","assets/get-teacher-subdivisions-500dfe3f.js"]));c.lazy(()=>y(()=>import("./index-b389745e.js"),["assets/index-b389745e.js","assets/vendor-0c76c893.js","assets/index-ce634f84.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-e59bec59.js","assets/get-default-subdivision-676ce871.js","assets/get-method-obtaining-fields-cc276cf2.js","assets/get-teacher-subdivisions-500dfe3f.js"]));c.lazy(()=>y(()=>import("./index-177de0ed.js"),["assets/index-177de0ed.js","assets/vendor-0c76c893.js","assets/get-default-subdivision-676ce871.js","assets/index-ce634f84.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-e59bec59.js"]));c.lazy(()=>y(()=>import("./index-3f1a547d.js"),["assets/index-3f1a547d.js","assets/vendor-0c76c893.js","assets/index-ce634f84.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-e59bec59.js","assets/get-default-subdivision-676ce871.js"]));c.lazy(()=>y(()=>import("./index-4cdb6091.js"),["assets/index-4cdb6091.js","assets/vendor-0c76c893.js","assets/index-ce634f84.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-e59bec59.js","assets/get-default-subdivision-676ce871.js"]));c.lazy(()=>y(()=>import("./index-dcf7c0a0.js"),["assets/index-dcf7c0a0.js","assets/vendor-0c76c893.js","assets/index-ce634f84.js","assets/get-method-obstaing-c0726de9.js","assets/get-default-subdivision-676ce871.js"]));c.lazy(()=>y(()=>import("./index-26a5ff80.js"),["assets/index-26a5ff80.js","assets/vendor-0c76c893.js","assets/index-ce634f84.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-e59bec59.js","assets/get-default-subdivision-676ce871.js","assets/get-method-obtaining-fields-cc276cf2.js","assets/get-teacher-subdivisions-500dfe3f.js"]));const ru=c.lazy(()=>y(()=>import("./index-77e448cd.js"),["assets/index-77e448cd.js","assets/vendor-0c76c893.js","assets/index-80b0a22e.js","assets/get-short-string-60b0c4d4.js","assets/get-correct-word-form-c0a854e8.js"]));c.lazy(()=>y(()=>import("./index-e5ee48fd.js"),["assets/index-e5ee48fd.js","assets/vendor-0c76c893.js","assets/index-5cc683df.js","assets/index-80d7ddc5.js","assets/index-80b0a22e.js"]));const fn=c.lazy(()=>y(()=>import("./index-64ca8169.js"),["assets/index-64ca8169.js","assets/vendor-0c76c893.js","assets/index-80b0a22e.js","assets/teacher-data-f378893a.js"]));c.lazy(()=>y(()=>import("./index-9b73c207.js"),["assets/index-9b73c207.js","assets/vendor-0c76c893.js"]));c.lazy(()=>y(()=>import("./index-ac6a6525.js"),["assets/index-ac6a6525.js","assets/vendor-0c76c893.js"]));c.lazy(()=>y(()=>import("./index-3cdb4d0e.js"),["assets/index-3cdb4d0e.js","assets/vendor-0c76c893.js"]));c.lazy(()=>y(()=>import("./index-33bb1ce0.js"),["assets/index-33bb1ce0.js","assets/vendor-0c76c893.js","assets/index-89086b92.js"]));c.lazy(()=>y(()=>import("./index-b796cffe.js"),["assets/index-b796cffe.js","assets/vendor-0c76c893.js"]));c.lazy(()=>y(()=>import("./index-c05b6c9b.js"),["assets/index-c05b6c9b.js","assets/vendor-0c76c893.js","assets/index-89086b92.js"]));c.lazy(()=>y(()=>import("./index-bf703142.js"),["assets/index-bf703142.js","assets/vendor-0c76c893.js"]));c.lazy(()=>y(()=>import("./index-2a7b1976.js"),["assets/index-2a7b1976.js","assets/vendor-0c76c893.js"]));c.lazy(()=>y(()=>Promise.resolve().then(()=>zu),void 0));const T="/applications",ou="/application-for-superior-room",lu="/acad-performance",cu="/dormitory",Rs=T+"/clarification-of-passport-data",Is=T+"/arbitrary-request",Ns=T+"/social-scollarship",Ls=T+"/certificate-of-attendance",Ds=T+"/social-agencies",zs=T+"/paper-call",Ms=T+"/regular-accommodation",Fs=T+"/full-time-part-time-form",Us=T+"/accommodation-correspondence-form",Bs=T+"/academic-leave-accommodation",Hs=T+"/preferential-accommodation",Ws=T+"/family-room",Vs=T+"/termination-of-employment-contract",Gs=T+"/relocation-inside-hostel",qs=T+"/relocation-to-another-hostel",Jt=T+"/payment-recipient",Ys=T+"/restoring-the-magnetic-pass",Ks=T+"/retake-for-diploma",Js=T+"/military-registration-documents",Xs=T+"/financial-support",Zs=T+"/financial-assistance",Qs=T+"/increased-state-academic-scholarship",ea=T+"/changing-personal-data",ta=T+"/student-status",na=T+"/state-accreditation",du=T+"/military-registration-card",ia=T+"/holidays-after-training",sa=T+"/provision-academic-leave",aa=T+"/independently-deducted",ra=T+"/extension-attestation",Re=()=>ce({oldVersionUrl:"/sprav"}),Ne=()=>({applications:{id:"applications",title:"Цифровые сервисы",icon:n.jsx(A,{}),path:T,Component:Lp,color:"red",isTemplate:!1,group:"OTHER"},...Tr,dormitory:{id:"dormitory",title:"Общежитие",icon:n.jsx(jn,{}),path:cu,Component:$p,color:"blue",isTemplate:!1,group:"FINANCES_DOCS",show:!0},"acad-performance":{id:"acad-performance",title:"Успеваемость",icon:n.jsx(Hr,{}),path:lu,Component:Pp,color:"green",isTemplate:!1,group:"LEARNING_ACTIVITIES"},"project-activity":{id:"project-activity",title:"Проектная деятельность",icon:n.jsx(ji,{}),path:yn,Component:Dp,color:"orange",isTemplate:!1,group:"LEARNING_ACTIVITIES"},"helpful-information":{id:"helpful-information",title:"Полезная информация",icon:n.jsx(Wr,{}),path:jr,Component:fn,color:"blue",isTemplate:!0,group:"GENERAL"},"application-for-superior-room":{id:"application-for-superior-room",title:"Заявка на комнату повышенной комфортности",icon:n.jsx(jn,{}),path:ou,Component:Op,color:"blue",isTemplate:!1,group:"GENERAL",show:!1}}),Xt=()=>({...Er,"clarification-of-passport-data":{id:"clarification-of-passport-data",title:"Уточнение паспортных данных",icon:n.jsx(Tn,{}),path:Rs,Component:Ap,color:"blue",isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:T},"arbitrary-request":{id:"arbitrary-request",title:"Произвольный запрос",icon:n.jsx(Tn,{}),path:Is,Component:tu,color:"blue",isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:T},"social-scollarship":{id:"social-scollarship",title:"Социальная стипендия",icon:n.jsx(I,{}),path:Ns,Component:Re,color:"blue",isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:T},"certificate-of-attendance":{id:"certificate-of-attendance",title:"Сертификат об обучении",icon:n.jsx(I,{}),path:Ls,Component:Cp,color:"blue",isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:T},"social-agencies":{id:"social-agencies",title:"Справка в социальные учреждения",icon:n.jsx(I,{}),path:Ds,Component:Rp,color:"blue",isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:T},"paper-call":{id:"paper-call",title:"Справка-вызов",icon:n.jsx(I,{}),path:zs,Component:Ip,color:"blue",isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:T},"regular-accommodation":{id:"regular-accommodation",title:"Предоставление права проживания (очная форма)",icon:I,path:Ms,Component:Np,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:T},"full-time-part-time-form":{id:"full-time-part-time-form",title:"Предоставление права проживания (очно-заочная форма)",icon:I,path:Fs,Component:Ep,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:T},"accommodation-correspondence-form":{id:"accommodation-correspondence-form",title:"Предоставление права проживания (заочная форма)",icon:I,path:Us,Component:Qp,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:T},"academic-leave-accommodation":{id:"academic-leave-accommodation",title:"Предоставление права проживания в период академического отпуска",icon:I,path:Bs,Component:zp,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:T},"preferential-accommodation":{id:"preferential-accommodation",title:"Предоставление права проживания льготной категории граждан",icon:I,path:Hs,Component:Mp,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:T},"family-room":{id:"family-room",title:"Предоставление права проживания в семейной комнате",icon:I,path:Ws,Component:eu,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:T},"termination-of-employment-contract":{id:"termination-of-employment-contract",title:"Расторжение договора найма",icon:I,path:Vs,Component:Fp,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:T},"relocation-inside-hostel":{id:"relocation-inside-hostel",title:"Переселение внутри общежития",icon:I,path:Gs,Component:Up,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:T},"relocation-to-another-hostel":{id:"relocation-to-another-hostel",title:"Переселение в другое общежитие (Подача заявок доступна с 08.06.2023 по 15.06.2023)",icon:I,path:qs,Component:Bp,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:T},"payment-recipient":{id:"payment-recipient",title:"Отправка квитанции об оплате",icon:I,path:Jt,Component:Hp,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:T},"restoring-the-magnetic-pass":{id:"restoring-the-magnetic-pass",title:"Запрос на восстановление магнитного пропуска",icon:I,path:Ys,Component:Wp,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:T},"military-registration-documents":{id:"military-registration-documents",title:"Отправить документы воинского учета",icon:I,path:Js,Component:Re,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:T},"retake-for-diploma":{id:"retake-for-diploma",title:"Заявление на пересдачу для получения диплома с отличием",icon:I,path:Ks,Component:Vp,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:T},"increased-state-academic-scholarship":{id:"increased-state-academic-scholarship",title:"Получение повышенной государственной академической стипендии",icon:I,path:Qs,Component:Re,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:T},"financial-support":{id:"financial-support",title:"Оформить материальную поддержку остронуждающимся студентам (Дотацию)",icon:I,path:Xs,Component:Re,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:T},"financial-assistance":{id:"financial-assistance",title:"Финансовая поддержка",icon:I,path:Zs,Component:Re,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:T},"changing-personal-data":{id:"changing-personal-data",title:"Запрос на изменение персональных данных",icon:I,path:ea,Component:Gp,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:T},"student-status":{id:"student-status",title:"Справка о прохождении обучения в университете (о статусе обучающегося) по месту требования",icon:I,path:ta,Component:qp,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:T},"state-accreditation":{id:"state-accreditation",title:"Выдача лицензий и свидетельств о государственной аккредитации",icon:I,path:na,Component:Yp,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:T},"holidays-after-training":{id:"holidays-after-training",title:"Предоставление каникул",icon:n.jsx(I,{}),path:ia,Component:Kp,color:"blue",isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:T},"provision-academic-leave":{id:"provision-academic-leave",title:"Предоставление академического отпуска",icon:n.jsx(I,{}),path:sa,Component:Jp,color:"blue",isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:T},"independently-deducted":{id:"independently-deducted",title:"Отчисление по инициативе обучающегося",icon:n.jsx(I,{}),path:aa,Component:Xp,color:"blue",isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:T},"extension-attestation":{id:"extension-attestation",title:"Продление промежуточной аттестации ",icon:n.jsx(I,{}),path:ra,Component:Zp,color:"blue",isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:T},"military-registration-card":{id:"military-registration-card",title:"Заполнить личную карточку обучающегося по воинскому учету для получения отсрочки от призыва на военную службу",icon:I,path:du,Component:Re,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:T}});let oa;const pu=e=>{oa=e},Fx=()=>oa,uu=(e,t)=>{const[i,s]=c.useState(!1),[a,r]=c.useState(null);return c.useEffect(()=>{i&&setTimeout(()=>{s(!1),t(null)},200)},[i]),c.useEffect(()=>{setTimeout(()=>{a!==null&&(r(null),t(o=>(o&&delete o[a],{...o})))},500)},[a]),{removeAll:i,removeOne:a,setRemoveAll:s,setRemoveOne:r}},Ut=x.div`
    padding: ${({remove:e})=>e?"0px":"5px 10px"};
    background: ${({background:e})=>e??_.blue.transparent3};
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
`,hu=x.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    row-gap: 5px;
    transition: 0.2s;
    padding: ${({padding:e})=>e??"10px"};
    opacity: ${({removeAll:e})=>e?"0":"1"};
    min-height: ${({removeAll:e,height:t})=>e?"0px":t||"46px"};
    visibility: ${({removeAll:e})=>e?"hidden":"visible"};
    transform: scale(${({removeAll:e})=>e?"0.95":"1"})
        translate(${({removeAll:e})=>e?"-30px, 20px":"0, 0"});
`,la=({list:e,onAddElement:t,onRemoveAll:i,onRemoveOne:s,padding:a,height:r,setList:o})=>{const l=Object.keys(e??{}),{removeAll:d,removeOne:p,setRemoveAll:u,setRemoveOne:m}=uu(l,o);return l.length?n.jsxs(hu,{removeAll:d||closed,padding:a,height:r,children:[!!t&&n.jsxs(Ut,{onClick:t,background:"var(--reallyBlue)",color:"#fff",children:[n.jsx(rt,{}),"Добавить"]}),Object.values(e??{}).map(b=>n.jsxs(Ut,{background:b.background,remove:p===b.id,children:[n.jsx("div",{className:"element-text",children:b.title}),n.jsx("div",{className:"remove",onClick:()=>{l.length===1?(u(!0),i==null||i()):(m(b.id),s(b.id))},children:n.jsx(Oe,{})})]},b.id)),l.length&&!!i&&n.jsx(Ut,{background:"var(--reallyBlue)",color:"#fff",onClick:()=>{i(),u(!0)},children:n.jsx("div",{className:"element-text",children:"Убрать все"})})]}):null},ti=(e,t)=>{switch(t){case"date":return Ct(e,"numeric");case"rub":return e+" руб.";default:return e===void 0?"-":e}},gu=(e,t)=>e?Object.keys(e).find(i=>e[i].title===t):null,fu=e=>{const[t,i]=c.useState(null),[s,a]=c.useState(null),[r,o]=c.useState(null),[l,d]=c.useState(null),[p,u]=c.useState(e),m=c.useCallback(h=>{var g,f;a(v=>(v&&v[h]&&delete v[h],{...v})),h===((g=t==null?void 0:t.column)==null?void 0:g.field)&&i(null),h===((f=r==null?void 0:r.column)==null?void 0:f.field)&&o(null)},[t,s,r]),b=c.useCallback(()=>{a(null),i(null),o(null)},[]);return c.useEffect(()=>{if(s)if(!l)d(h=>{const g=Object.values(s)[0].column;return h={[(g==null?void 0:g.field)??""]:{id:(g==null?void 0:g.field)??"",title:"Фильтр: "+(g==null?void 0:g.title)}},{...h}});else{const h=Object.values(s).find(g=>{var f;return!l[((f=g.column)==null?void 0:f.field)??""]});h&&d(g=>{var S,w;const f=((S=h.column)==null?void 0:S.field)??"",v="Фильтр: "+((w=h.column)==null?void 0:w.title);return g&&(g[f]={id:f,title:v}),{...g}})}t&&d(h=>{var v;const g=((v=t.column)==null?void 0:v.field)??"",f="Поиск";return h?h[g]={id:g,title:f}:h={[g]:{id:g,title:f}},{...h}}),r&&d(h=>{var v;const g=((v=r.column)==null?void 0:v.field)??"",f="Сортировка";return h?h[g]={id:g,title:f}:h={[g]:{id:g,title:f}},{...h}})},[t,s,r]),c.useEffect(()=>{var f;const h=t==null?void 0:t.column,g=(f=t==null?void 0:t.column)==null?void 0:f.field;if(t&&g){const v=e==null?void 0:e.filter(S=>Se(ti(S[g],h==null?void 0:h.type)).includes(Se(ti(t.value,h==null?void 0:h.type))));u(v)}else u(e)},[t]),c.useEffect(()=>{if(s){const h=e==null?void 0:e.filter(g=>!Object.values(s).find(f=>{var v;return g[((v=f.column)==null?void 0:v.field)??""]!==f.value.title}));u(h)}else d(h=>({...h})),u(e)},[s]),c.useEffect(()=>{var g;const h=((g=r==null?void 0:r.column)==null?void 0:g.field)??"";r?u(f=>{const v=[...f??[]];return v==null||v.sort((S,w)=>w[h]<S[h]?r.value==="asc"?1:-1:w[h]>S[h]?r.value==="asc"?-1:1:0),v}):(d(f=>{const v=gu(f,"Сортировка");return f&&v&&delete f[v],{...f}}),u(e))},[r==null?void 0:r.value]),c.useEffect(()=>{u(e)},[e]),{sort:r,setSort:o,search:t,setSearch:i,resultData:p,filter:s,setFilter:a,filterList:l,setFilterList:d,onRemoveOne:m,onRemoveAll:b}},ca=e=>{switch(e){case"desc":return z.evokePopUpMessage({message:"Таблица отсортирована по убыванию",type:"info",time:5e3});case"asc":return z.evokePopUpMessage({message:"Таблица отсортирована по возрастанию",type:"info",time:5e3});default:return z.evokePopUpMessage({message:"Сортировка отключена",type:"info",time:5e3})}},xu=x.div`
    display: flex;
    align-items: center;
    width: 100%;
    font-size: 0.9em;
    background: ${({even:e})=>e?`${_.blue.transparent3}`:"transparent"};

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
`,da=x.div`
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
`,mu=x.div`
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
`,bu=x.div`
    display: flex;
    align-items: center;
`,vu=({columns:e,search:t,setSearch:i,filter:s,setFilter:a,sort:r,setSort:o})=>n.jsx(mu,{children:e.map(l=>{var d,p,u,m;return n.jsxs(da,{overflow:l.catalogs?"visible":"hidden",width:l.width,title:l.title,clickable:l.search,align:l.search?"space-between":l.align,showFull:l.showFull,className:((d=l.priority)==null?void 0:d.toString())??"one",onClick:()=>{l.search&&i({value:"",column:l}),l.sort&&o(b=>{const h=b!=null&&b.value?b.value==="desc"?"asc":null:"desc";return ca(h),h?{column:l,value:h}:null})},children:[!l.catalogs&&l.title,!l.catalogs&&!l.sort&&l.search&&n.jsx(pt,{className:"icon",style:{color:l.field===((p=t==null?void 0:t.column)==null?void 0:p.field)?"var(--reallyBlue)":"var(--text)"}}),l.sort&&n.jsx(Ti,{className:"icon",style:{color:l.field===((u=r==null?void 0:r.column)==null?void 0:u.field)?"var(--reallyBlue)":"var(--text)"}}),l.catalogs&&n.jsx(bu,{children:n.jsx(gn,{appearance:!1,items:l.catalogs??[],setSelected:b=>a(h=>(b&&(h={...h,[l.field]:{column:l,value:b}}),h)),selected:(m=s==null?void 0:s[l.field])==null?void 0:m.value,placeholder:l.title})})]},l.title)})}),pa=({pages:e,condition:t,currentPage:i,setCurrentPage:s,align:a="center"})=>{const[r,o]=c.useState(i.toString());c.useEffect(()=>{r.length&&s(+r)},[r]),c.useEffect(()=>{o(i.toString())},[i]);const l=d=>{d.length?+d>=1&&+d<=e+1&&o((+d-1).toString()):o("")};return n.jsxs(se,{horizontalAlign:a,visible:t,direction:"horizontal",width:"100%",padding:"10px",children:[n.jsx(j,{minWidth:"42px",height:"42px",background:"var(--mild-theme)",icon:n.jsx(ut,{}),onClick:()=>o(re(i-1,e).toString())}),n.jsxs("div",{className:"page-indicator",children:[n.jsx(he,{width:"12px",placeholder:"",value:r.length?(+r+1).toString():"",setValue:l,inputAppearance:!1}),"/ ",e+1]}),n.jsx(j,{minWidth:"42px",height:"42px",background:"var(--mild-theme)",icon:n.jsx(kt,{}),onClick:()=>o(re(i+1,e).toString())})]})},ye=(e,t)=>{switch(t){case"date":return Ct(e,"numeric");case"rub":return e+" руб.";default:return e===void 0?"-":e}},yu=x.div`
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
`,De=({keyStr:e,value:t,fontSize:i,visible:s=!0,direction:a="horizontal"})=>s?n.jsxs(yu,{direction:a,fontSize:i,children:[n.jsxs("strong",{children:[e,":"]}),n.jsx("span",{children:t})]}):null,wu=x.div`
    @media (min-width: 1001px) {
        max-width: 500px;
    }
`,_u=({title:e,obj:t,columns:i})=>n.jsxs(wu,{children:[n.jsx(U,{size:3,align:"left",bottomGap:!0,children:e}),i.map(s=>n.jsx(De,{keyStr:s.title,value:s.render?s.render(t[s.field],t):ye(t[s.field],s.type)},s.title))]}),ua=({columns:e,el:t,index:i,onRowClick:s})=>{const{open:a}=J(),r=()=>a(n.jsx(_u,{title:"Информация",obj:t,columns:e}));return n.jsx(xu,{even:i%2===0,onClick:()=>s?s(t):r(),children:e.map(o=>{var l;return n.jsx(da,{showFull:o.showFull,width:o.width,className:((l=o.priority)==null?void 0:l.toString())??"one",align:o.align,children:o.render?o.render(ye(t[o.field],o.type),t):ye(t[o.field],o.type)},o.field)})})},ju=x.div`
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
`,Tu=x.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 0;

    img {
        width: 35px;
        height: 35px;
    }
`,Eu=({data:e,loading:t,columns:i,maxOnPage:s,onRowClick:a,filter:r})=>{const[o,l]=c.useState(0),d=Math.ceil(((e==null?void 0:e.length)??0)/(s??1))-1,p=s?e==null?void 0:e.slice(o*s,(o+1)*s):e;return c.useEffect(()=>{l(0)},[r]),t?n.jsx(Tu,{children:n.jsx(Pe,{})}):n.jsxs(ju,{children:[p==null?void 0:p.map((u,m)=>n.jsx(ua,{onRowClick:a,columns:i,el:u,index:m},m)),!(p!=null&&p.length)&&n.jsx(oe,{text:"Нет данных"}),n.jsx(pa,{pages:d,condition:!!s&&!!(p!=null&&p.length),currentPage:o,setCurrentPage:l})]})},ku=x.div`
    display: flex;
    align-items: center;
    gap: 5px;
    transition: 0.2s;
    padding: ${({closed:e})=>e?"0px":"10px"};
    width: 100%;
    height: ${({closed:e})=>e?"0px":"60px"};
    opacity: ${({closed:e})=>e?"0":"1"};
    visibility: ${({closed:e})=>e?"hidden":"visible"};
`,Su=e=>{switch(e){case"date":return"date";case"rub":return"number";default:return"text"}},Ou=({search:e,setSearch:t})=>{var i,s;return n.jsx(ku,{closed:!(e!=null&&e.column),children:n.jsx(he,{value:(e==null?void 0:e.value)??"",setValue:a=>t(r=>r?(r.value=a,{...r}):null),width:"100%",type:Su((i=e==null?void 0:e.column)==null?void 0:i.type),placeholder:(s=e==null?void 0:e.column)==null?void 0:s.title,leftIcon:n.jsx(pt,{}),minWidth:"auto"})})},Pu=(e,t)=>{if(!e)return{};const i=t.reduce((s,{field:a})=>(s[a]=[],s),{});return e==null||e.forEach(s=>{Object.entries(s).forEach(([a,r])=>{i[a]&&r&&i[a].push(r)})}),i};function $u(e){return Object.keys(e).map(t=>({title:"",field:t}))}const Au=({footer:e,columns:t,data:i})=>{if(!e)return null;const s=e(Pu(i,t));return n.jsxs(n.Fragment,{children:[n.jsx(ue,{}),n.jsx(ua,{onRowClick:()=>null,columns:$u(s),el:s,index:1})]})},Cu=x.div`
    width: 100%;
    box-shadow: var(--schedule-shadow);
    border-radius: var(--brLight);
    color: var(--text);
    background: var(--form);
    overflow: hidden;
`,ni=({columns:e,data:t,maxOnPage:i,onRowClick:s,footer:a,loading:r=!1})=>{const{sort:o,setSort:l,search:d,setSearch:p,resultData:u,filter:m,setFilter:b,filterList:h,setFilterList:g,onRemoveOne:f,onRemoveAll:v}=fu(t);return n.jsxs(Cu,{children:[n.jsx(la,{setList:g,padding:"0 10px",list:h,onRemoveOne:f,onRemoveAll:v}),n.jsx(Ou,{search:d,setSearch:p}),n.jsx(vu,{sort:o,setSort:l,columns:e,search:d,setSearch:p,filter:m,setFilter:b}),n.jsx(Eu,{loading:r,onRowClick:s,filter:m,columns:e,data:u,maxOnPage:i}),n.jsx(Au,{footer:a,data:t,columns:e})]})},jt={ready:"Готово",pending:"В работе",rejected:"Отклонено"},Ru={agreeding:"На согласовании",notAgreed:"Не согласовано",agreed:"Согласовано",empty:"Не создано",rejected:"Отклонено"},Iu={signed:"Подписан",agreeding:"На согласовании",fixing:"На доработке",empty:"Не создан"},Ux=[{id:1,title:"1"},{id:2,title:"2"},{id:3,title:"3"}],Bx=[{id:0,title:"На электронную почту"},{id:1,title:"Лично"},{id:3,title:"На почтовый адрес"}],ii=()=>[{title:"Статус заявления",field:"status",priority:"one",width:"200px",catalogs:[...Object.values(Ru).map((e,t)=>({id:t.toString(),title:e}))??[]],render:e=>n.jsx(K,{type:e==="Готово"?"success":e==="Отклонено"?"failure":"alert",title:e,align:"center",width:"100%",icon:null,maxWidth:"150px"})},{title:"Дата подписи",field:"signDate",type:"date",priority:"one",align:"center"},{title:"Номер приказа",field:"orderNumber",priority:"one",align:"center"},{title:"Дата приказа",field:"orderDate",type:"date",priority:"one",align:"center",render:e=>n.jsx(K,{type:e==="Готово"?"success":e==="Отклонено"?"failure":"alert",title:e,align:"center",width:"100%",icon:null,maxWidth:"150px"})},{title:"Статус приказа",field:"orderStatus",priority:"one",width:"200px",catalogs:[...Object.values(Iu).map((e,t)=>({id:t.toString(),title:e}))??[]],render:e=>n.jsx(K,{type:e==="Готово"?"success":e==="Отклонено"?"failure":"alert",title:e,align:"center",width:"100%",icon:null,maxWidth:"150px"})},{title:"Файл заявления",priority:"one",field:"file",type:"file"},{title:"Примечание",field:"registrationStatus",priority:"one"}],Nu=x.div`
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
`,Lu=()=>{const{data:{dataWorkerApplication:e}}=He.useApplications();if(e){const[t,i]=c.useState(Array(e.length).fill(!1)),[s,a]=c.useState(!1),[r,o]=c.useState(Array(e.length).fill(!1));let l;return n.jsxs("div",{className:"jobBlocks",children:[e.map((d,p)=>{var u,m,b;return d.isDismissal?null:n.jsxs("div",{className:"block",children:[n.jsxs("div",{className:"label",children:[d.jobTitle,n.jsx(j,{icon:t[p]?n.jsx(Dt,{}):n.jsx(yt,{}),onClick:()=>{i(h=>h.map((g,f)=>f===p?!g:g)),a(!1)},background:"transparent"})]}),n.jsxs("div",{className:"text",children:["Структурное подразделение: ",d.subDivision,n.jsx("br",{}),"Ставка: ",d.rate,n.jsx("br",{}),"Вид места работы: добавим",n.jsx("br",{})]}),l=((u=d==null?void 0:d.dismissalApplications[d.dismissalApplications.length-1])==null?void 0:u.status)=="Не согласовано"||((b=(m=d==null?void 0:d.dismissalApplications[d.dismissalApplications.length-1])==null?void 0:m.dismissalOrder)==null?void 0:b.orderStatus)=="Не согласован"||(d==null?void 0:d.dismissalApplications.length)==0,n.jsx(Ce.Collapse,{isOpened:t[p],className:"collapseс",children:n.jsxs("div",{className:"collapsed",children:[n.jsx("div",{className:"buttonBlock",children:n.jsx(Ce.Collapse,{isOpened:l,children:n.jsx("a",{href:"#/hr-applications/dismissal",children:n.jsx(j,{text:"Уволиться с этой должности",background:"rgb(236,95,107)",textColor:"#fff",onClick:()=>{pu(p)},width:"250px",minWidth:"150px",height:"36px",fixedInMobile:!0})})})}),n.jsx(Ce.Collapse,{isOpened:d.dismissalApplications.length!=0,children:n.jsx("div",{children:n.jsx("div",{className:"text",children:n.jsx(ni,{loading:!d.dismissalApplications,columns:ii(),data:d.dismissalApplications.map(({status:h,signDate:g,dismissalOrder:{orderNumber:f,orderDate:v,registrationStatus:S,orderStatus:w}})=>({status:h,signDate:g,orderNumber:f,orderDate:v,orderStatus:w,registrationStatus:S})),maxOnPage:10})})})})]})}),n.jsx("div",{className:"moreButton",children:n.jsx(j,{onClick:()=>{i(h=>h.map((g,f)=>f===p?!g:g)),a(!1)},text:t[p]?"Скрыть":"Подробнее",background:"transparent"})})]})}),n.jsxs("div",{className:"jobBlocks block",children:[n.jsxs("div",{className:"label",children:["История должностей:",n.jsx(j,{icon:s?n.jsx(Dt,{}):n.jsx(yt,{}),onClick:()=>a(!s),background:"transparent"})]}),n.jsx(Ce.Collapse,{isOpened:s,className:"collapseс",children:e.map((d,p)=>d.isDismissal?n.jsxs("div",{children:[n.jsx("div",{className:"config",children:n.jsxs("div",{className:"label",children:[d.jobTitle,n.jsx(j,{icon:r[p]?n.jsx(Dt,{}):n.jsx(yt,{}),onClick:()=>o(u=>u.map((m,b)=>b===p?!m:m)),background:"transparent"})]})}),n.jsx(Ce.Collapse,{isOpened:r[p],className:"collapseс",children:n.jsxs("div",{className:"collapsed",children:[n.jsxs("div",{className:"text",children:["Структурное подразделение: ",d.subDivision,n.jsx("br",{}),"Ставка: ",d.rate,n.jsx("br",{}),"Вид места работы: добавим",n.jsx("br",{})]}),n.jsx(Ce.Collapse,{isOpened:d.dismissalApplications.length!=0,children:n.jsx("div",{className:"text",children:n.jsx(ni,{loading:!e,columns:ii(),data:d.dismissalApplications.map(({status:u,signDate:m,dismissalOrder:{orderNumber:b,orderDate:h,registrationStatus:g}})=>({status:u,signDate:m,orderNumber:b,orderDate:h,registrationStatus:g})),maxOnPage:10})})})]})})]}):null)})]})]})}else return null},Du=()=>{const{data:{listApplication:e},error:t}=He.useApplications();return n.jsx(pn,{load:()=>ke.getApplicationsFx(),loading:!e,error:t,data:e,children:n.jsx(Nu,{children:n.jsxs(dd,{maxWidth:"1500px",children:[n.jsxs("div",{className:"block firstBlock",children:[n.jsx(U,{size:2,align:"left",children:"Заявление на увольнение"}),n.jsx(K,{type:"info",title:"Информация",icon:n.jsx(lt,{}),children:"Данный сервис позволяет заказать необходимую справку, подать заявление, запрос. Статус (информация о степени готовности) заказанных справок меняется согласно действиям оператора. В колонке «Структурное подразделение, адрес» указывается название подразделения и адрес, куда необходимо приехать за готовым документом."})]}),Lu()]})})})},zu=Object.freeze(Object.defineProperty({__proto__:null,default:Du},Symbol.toStringTag,{value:"Module"})),O="/applications",V="/hr-applications",si="/staff_orders",ai="/staff_blanks",Hx="/ad_logins",ha="/doclist",ri="/pps_vote2020",Mu="/pps_contest",Fu="/electronic-statements",Uu="/vacation",Ye="/kpi_pps",Ke="/kpi_admin",oi="/sc_news",li="/oop",ci="/centers",Bu="/helpful-information",Hu="/download-agreements",ga=O+"/contact-info-actualization",fa=O+"/data-verification",xa=O+"/issuance-of-licenses",ma=O+"/getting-computer-equipment",ba=O+"/connecting-computer",va=O+"/printer-maintenance",ya=O+"/question-sed",wa=O+"/question-personal-account",_a=O+"/other-it-services",ja=O+"/certificate-from-the-place-of-work",Ta=O+"/visa-certificate",Ea=O+"/certificate-of-work-experience",ka=O+"/number-of-unused-vacation-days",Sa=O+"/copy-of-the-employment-record",Oa=O+"/copies-of-documents-from-the-personal-file",Pa=O+"/work-on-the-terms-of-external-concurrency",$a=O+"/certificate-time-parental-leave",Aa=O+"/arbitrary-request",Ca=O+"/courier",Ra=O+"/persona-income-tax-reference",Ia=O+"/payment-of-child-birth-allowance",Na=O+"/payment-for-child-care",Wu=V+"/dismissal",La=V+"/buffer-dismissal",Da=V+"/buffer-work-transfer",za=V+"/buffer-extra-holiday-coll",Ma=V+"/buffer-holiday-planning",Fa=V+"/buffer-holiday-work",Ua=V+"/buffer-part-time-deployment",Ba=V+"/buffer-holiday-postponed",N=()=>ce({oldVersionUrl:"/sprav"}),Zt=()=>({applications:{id:"applications",title:"Цифровые сервисы",icon:n.jsx(A,{}),path:O,Component:N,color:"red",isTemplate:!1,group:"OTHER"},...Tr,"hr-applications":{id:"hr-applications",title:"Кадровые заявления",icon:n.jsx(A,{}),path:V,Component:N,color:"green",isTemplate:!1,group:"OTHER"},"download-agreements":{id:"download-agreements",title:"Административная панель",icon:n.jsx(Vr,{}),path:Hu,Component:su,color:"blue",isTemplate:!1,group:"GENERAL",isAdmin:!0},"electronic-statements":{id:"electronic-statements",title:"Электронные ведомости",icon:n.jsx(I,{}),path:Fu,Component:()=>(G.useEffect(()=>{window.location.replace(" https://e.mospolytech.ru/old/stats.php?m=items&act=st_list")},[]),null),color:"blue",isTemplate:!1,group:"LEARNING_ACTIVITIES"},"project-activity":{id:"project-activity",title:"Проектная деятельность",icon:n.jsx(ji,{}),path:yn,Component:()=>(G.useEffect(()=>{window.location.replace(`${de}/?p=proj_main`)},[]),null),color:"orange",isTemplate:!1,group:"LEARNING_ACTIVITIES"},"pps-contest":{id:"pps-contest",title:"Конкурс ППС",icon:n.jsx(I,{}),path:Mu,Component:()=>(G.useEffect(()=>{window.location.replace("https://mospolytech.ru/contest-pps/")},[]),null),color:"blue",isTemplate:!1,group:"LEARNING_ACTIVITIES"},"kpi-pps":{id:"kpi-pps",title:"Рейтинговая система ППС",icon:n.jsx(Gr,{}),path:Ye,Component:()=>(G.useEffect(()=>{window.location.replace(`${de}/?p=${Ye==null?void 0:Ye.slice(1,Ye.length)}`)},[]),null),color:"pink",isTemplate:!1,group:"LEARNING_ACTIVITIES"},"kpi-admin":{id:"kpi-admin",title:"Экспертиза рейтинго...",icon:n.jsx(qr,{}),path:Ke,Component:()=>(G.useEffect(()=>{window.location.replace(`${de}/?p=${Ke==null?void 0:Ke.slice(1,Ke.length)}`)},[]),null),color:"lightBlue",isTemplate:!1,group:"LEARNING_ACTIVITIES"},"sc-news":{id:"sc-news",title:"Анонсы научных мероприятий",icon:n.jsx(Yr,{}),path:oi,Component:()=>ce({oldVersionUrl:oi}),color:"orange",isTemplate:!1,group:"OTHER",show:!1},orders:{id:"orders",title:"Приказы",icon:n.jsx(A,{}),path:si,Component:()=>ce({oldVersionUrl:si}),color:"blue",isTemplate:!1,group:"OTHER",show:!1},"document-blanks":{id:"document-blanks",title:"Бланки документов",icon:n.jsx(sn,{}),path:ai,Component:()=>ce({oldVersionUrl:ai}),color:"blue",isTemplate:!1,show:!1,group:"OTHER"},doclist:{id:"doclist",title:"Ознакомление с документами",shortTitle:"Ознакомление с док...",icon:n.jsx(A,{}),path:ha,Component:au,color:"blue",isTemplate:!1,group:"FINANCES_DOCS"},calendar:{id:"calendar",title:"График отпусков",icon:n.jsx(Kr,{}),path:Uu,Component:ru,color:"purple",isTemplate:!1,group:"FINANCES_DOCS"},oop:{id:"oop",title:"Образовательные программы",icon:n.jsx(ot,{}),path:li,Component:()=>ce({oldVersionUrl:li}),color:"blue",isTemplate:!1,group:"OTHER",show:!1},centers:{id:"centers",title:"Многофункциональный центр",icon:n.jsx(ot,{}),path:ci,Component:()=>ce({oldVersionUrl:ci}),color:"blue",isTemplate:!1,group:"OTHER",show:!1},info:{id:"info",title:"Полезная информация",icon:n.jsx(A,{}),path:Bu,Component:fn,color:"blue",isTemplate:!1,group:"GENERAL"},"pps-vote":{id:"pps-vote",title:"Опрос для проверки уровня цифровой грамотности",icon:n.jsx(Ei,{}),path:ri,Component:()=>ce({oldVersionUrl:ri}),color:"blue",isTemplate:!1,group:"OTHER",show:!1}}),Qt=()=>({...Er,"issuance-of-licenses-page":{id:"issuance-of-licenses-page",title:"Выдача лицензий",path:xa,icon:n.jsx(A,{}),color:"blue",Component:N,isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:O},"part-time-deployment":{id:"part-time-deployment",title:"Заявление на трудоустройство по совместительству",path:Ua,icon:n.jsx(A,{}),color:"blue",Component:N,isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к кадровым заявлениям",subPageHeaderTitle:"",fallbackPrevPage:V},"holiday-postponed":{id:"holiday-postponed",title:"Заявление на перенос отпуска",path:Ba,icon:n.jsx(A,{}),color:"blue",Component:N,isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к кадровым заявлениям",subPageHeaderTitle:"",fallbackPrevPage:V},dismissal:{id:"dismissal2",title:"Заявление на увольнение",path:La,icon:n.jsx(A,{}),color:"blue",Component:N,isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к кадровым заявлениям",subPageHeaderTitle:"",fallbackPrevPage:V},"holiday-work":{id:"part-time-deployment",title:"Заявление о привлечении к работе в выходной день",path:Fa,icon:n.jsx(A,{}),color:"blue",Component:N,isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к кадровым заявлениям",subPageHeaderTitle:"",fallbackPrevPage:V},"holiday-planning":{id:"holiday-postponed",title:"Заявление о предоставлении отпуска",path:Ma,icon:n.jsx(A,{}),color:"blue",Component:N,isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к кадровым заявлениям",subPageHeaderTitle:"",fallbackPrevPage:V},"extra-holiday-coll":{id:"dismissal",title:"Заявление о предоставлении дополнительного отпуска по коллективному договору",path:za,icon:n.jsx(A,{}),color:"blue",Component:N,isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к кадровым заявлениям",subPageHeaderTitle:"",fallbackPrevPage:V},"work-transfer":{id:"dismissal",title:"Заявление на перевод",path:Da,icon:n.jsx(A,{}),color:"blue",Component:N,isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к кадровым заявлениям",subPageHeaderTitle:"",fallbackPrevPage:V},dismissal_form:{id:"dismissal",title:"Заявление на увольнение",path:Wu,icon:n.jsx(A,{}),color:"blue",Component:N,isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к кадровым заявлениям",subPageHeaderTitle:"",fallbackPrevPage:V},"getting-computer-equipment":{id:"getting-computer-equipment",title:"Получение нового компьютерного оборудования",icon:n.jsx(A,{}),color:"blue",path:ma,Component:N,isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:O},"connecting-computer":{id:"connecting-computer",title:"Подключение компьютера, МФУ, телефона, WiFi",icon:n.jsx(A,{}),color:"blue",path:ba,Component:N,isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:O},"printer-maintenance":{id:"printer-maintenance",title:"Обслуживание принтеров, МФУ",icon:n.jsx(A,{}),color:"blue",path:va,Component:N,isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:O},"question-sed":{id:"question-sed",title:"Вопрос по СЭД Directum и 1С",icon:n.jsx(A,{}),color:"blue",path:ya,Component:N,isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:O},"question-personal-account":{id:"question-personal-account",title:"Вопрос по Личному кабинету",icon:n.jsx(A,{}),color:"blue",path:wa,Component:N,isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:O},"other-it-services":{id:"other-it-services",title:"Прочее ИТ-обслуживание",icon:n.jsx(A,{}),color:"blue",path:_a,Component:N,isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:O},"certificate-form-place-of-work":{id:"certificate-form-place-of-work",title:"Справка с места работы",icon:n.jsx(A,{}),color:"blue",path:ja,Component:N,isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:O},"visa-certificate":{id:"visa-certificate",title:"Справка на визу",icon:n.jsx(A,{}),color:"blue",path:Ta,Component:N,isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:O},"certificate-of-work-experience":{id:"certificate-of-work-experience",title:"Справка о стаже работы",icon:n.jsx(A,{}),color:"blue",path:Ea,Component:N,isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:O},"number-of-unused-vacation-days":{id:"number-of-unused-vacation-days",title:"Справка о количестве неиспользованных дней отпуска",icon:n.jsx(A,{}),color:"blue",path:ka,Component:N,isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:O},"copy-of-employment-record":{id:"copy-of-employment-record",title:"Копия трудовой книжки",icon:n.jsx(A,{}),color:"blue",path:Sa,Component:N,isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:O},"copies-of-documents-from-personal-file":{id:"copies-of-documents-from-personal-file",title:"Копии документов из личного дела",icon:n.jsx(A,{}),color:"blue",path:Oa,Component:N,isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:O},"work-on-terms-of-external-concurrency":{id:"work-on-terms-of-external-concurrency",title:"Справка о работе на условиях внешнего совместительства для внесения стажа в трудовую книжку",icon:n.jsx(A,{}),color:"blue",path:Pa,Component:N,isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:O},"certificate-time-parental-leave":{id:"certificate-time-parental-leave",title:"Справка об отпуске по уходу за ребенком до 1,5 и 3 лет",icon:n.jsx(A,{}),color:"blue",path:$a,Component:N,isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:O},"arbitrary-request":{id:"arbitrary-request",title:"Произвольный запрос",icon:n.jsx(A,{}),color:"blue",path:Aa,Component:N,isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:O},courier:{id:"courier",title:"Курьер",icon:n.jsx(A,{}),color:"blue",path:Ca,Component:N,isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:O},"personal-income-tax-reference":{id:"personal-income-tax-reference",title:"Справка по форме 2-НДФЛ",icon:n.jsx(A,{}),color:"blue",path:Ra,Component:N,isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:O},"payment-of-child-birth-allowance":{id:"payment-of-child-birth-allowance",title:"Справка о выплате (не выплате) единовременного пособия на рождение ребенка",icon:n.jsx(A,{}),color:"blue",path:Ia,Component:N,isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:O},"payment-for-child-care":{id:"payment-for-child-care",title:"Справка о ежемесячных выплатах сотрудника, находящегося в отпуске по уходу за ребенком (декрет)",icon:n.jsx(A,{}),color:"blue",path:Na,Component:N,isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:O},"contact-info-actualization":{id:"contact-info-actualization",title:"Актуализация контактных данных",icon:n.jsx(A,{}),color:"blue",path:ga,Component:nu,isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:O},"data-verification":{id:"data-verification",title:"Анкета для сверки данных",icon:n.jsx(A,{}),color:"blue",path:fa,Component:iu,isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:O}}),di=(e,t)=>e.reduce((i,s)=>(i[s]=t[s],i),{}),Vu=["settings","profile","chat","schedule","payments","project-activity","all-students"],Gu=["home","schedule","chat","all","profile"],qu=(e,t)=>{var o;if(!e)return[];const s=((o=JSON.parse(localStorage.getItem("new-settings")||"{}")[e.id]["settings-customize-menu"])==null?void 0:o.property.pages)??St,a=Ii.filter(l=>!s.includes(l));return(e==null?void 0:e.user_status)==="staff"&&s.some(l=>!a.includes(l))?[...s,...a]:s},pi={allRoutes:null,visibleRoutes:null,leftsideBarRoutes:null,homeRoutes:null,currentPage:null,isOpen:!1},Yu=()=>P(Ju),Ha=k(),Wa=k(),Va=k(),Ga=k(),Ku=(e,t,i)=>{const s={...i};return s[e].notifications=t,s},Je=e=>{if(!e)return Zt();const{accepts:t,agreements:i,checkdata:s,studLogins:a}=e,r=!!t.length||!!i.length||!!s.length||!!(a!=null&&a.length),o="download-agreements",l=Object.entries(Zt()).filter(([d])=>d!==o||d===o&&r);return Object.fromEntries(l)},Ju=W(pi).on(Ha,(e,{isOpen:t,currentPage:i})=>{var s;return{...e,currentPage:e.allRoutes&&i?(s=e.allRoutes)==null?void 0:s[i]:e.currentPage,isOpen:t}}).on(Wa,()=>({...pi})).on(Va,(e,{user:t,adminLinks:i,homeRoutes:s})=>({...e,currentPage:(t==null?void 0:t.user_status)==="staff"?Je(i)[window.location.hash.slice(2,window.location.hash.length)]:Ne()[window.location.hash.slice(2,window.location.hash.length)],allRoutes:(t==null?void 0:t.user_status)==="staff"?{...Je(i),...Qt()}:{...Ne(),...Xt()},visibleRoutes:(t==null?void 0:t.user_status)==="staff"?Je(i):Ne(),leftsideBarRoutes:di(qu(t),(t==null?void 0:t.user_status)==="staff"?Je(i):Ne()),homeRoutes:di(s??JSON.parse(localStorage.getItem("home-routes")??JSON.stringify(Vu)),(t==null?void 0:t.user_status)==="staff"?{...Je(i),...Qt()}:{...Ne(),...Xt()})})).on(Ga,(e,{page:t,notifications:i})=>{var s;return{...e,allRoutes:Ku(t,typeof i=="number"?i:i(((s=e.allRoutes)==null?void 0:s[t].notifications)??0),e.allRoutes)}}),we={useMenu:Yu},xt={changeOpen:Ha,clearStore:Wa,defineMenu:Va,changeNotifications:Ga},Ge=()=>{const[e,t]=c.useState({width:0,height:0}),i=()=>{t({width:window.innerWidth,height:window.innerHeight})};return c.useEffect(()=>(i(),window.addEventListener("resize",i),()=>{window.removeEventListener("resize",i)}),[]),e},Xu=x.header`
    width: 100%;
    height: var(--header-height);
    background: var(--theme);
    box-shadow: var(--header-box-shadow);
    z-index: 12;
    align-items: center;
    justify-content: space-between;
    padding: 0 50px;

    display: ${({hidden:e=!1})=>e?"none":"flex"};

    & > .buttons {
        display: flex;
        align-items: center;

        & > * + * {
            margin-left: 10px;
        }
    }

    .header-button-and-title {
        display: flex;
        align-items: center;
        min-width: 200px;

        button {
            margin-right: 8px;
            flex-shrink: 0;
        }

        .title-container {
            min-width: 200px;

            h3 {
                color: var(--text);
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
            }
        }
    }

    @media (max-width: 1000px) {
        padding: 0 10px;
    }
`,Zu=(e,t=265,i=200)=>(e.preventDefault(),{x:e.clientX<window.innerWidth/2?e.clientX:e.clientX-t,y:e.clientY<window.innerHeight/2?e.clientY:e.clientY-i}),Qu={open:!1,content:null,type:"left-click",position:{x:0,y:0}},eh=()=>Jr(th),qa=k(),Ya=k(),Ka=k(),th=W(Qu).on(qa,(e,{content:t,e:i,height:s,type:a="left-click"})=>({position:Zu(i,220,s),open:!0,content:t,type:a})).on(Ya,e=>({...e,open:!1})).on(Ka,(e,{position:t})=>({...e,position:t})),ie={open:qa,close:Ya,changePosition:Ka},nh={useContextMenu:eh},en=x.span`
    color: #fff;
    background: ${({color:e})=>_[e??"red"].main};
    position: absolute;
    top: ${({top:e})=>e??"50%"};
    left: ${({left:e})=>e??"auto"};
    right: ${({right:e})=>e??"50%"};
    outline: ${({outline:e})=>e};
    font-size: 0.65em;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translate(-50%, -50%);
    width: 17px;
    min-width: 17px;
    font-weight: bold;
    height: 17px;
    display: ${({visible:e})=>!e&&"none"};
`,tn=e=>e.split(" ").map(t=>t[0]),ae=(e,t)=>{const i=tn(e),s=_[Eo[i[0]]];return s==null?void 0:s[t??"main"]},ih=x.div`
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({background:e})=>e??"var(--almostTransparent)"};
    color: var(--text);
    border: ${({selected:e,border:t})=>(e||t)&&"5px solid var(--theme)"};
    outline: ${({selected:e})=>e&&"4px solid var(--reallyBlue)"};
    position: relative;

    width: ${({width:e})=>e??"160px"};
    min-width: ${({width:e})=>e??"160px"};
    height: ${({height:e})=>e??"160px"};

    margin-right: ${({marginRight:e})=>e??"32px"};
    box-shadow: ${({boxShadow:e})=>e??"0"};

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
`,sh=x.img`
    width: 100%;
    height: 100%;
    border-radius: ${({round:e})=>e&&"100%"};

    object-fit: cover;
    object-position: center;
`;function qe({selected:e,name:t,avatar:i,width:s,height:a,marginRight:r,notifications:o,checked:l,boxShadow:d,border:p,avatarModal:u}){const[m,b]=c.useState(!0),h=tn(t)[0]+(tn(t)[1]??""),{open:g}=J(),f=()=>{u&&g(n.jsx(qe,{name:t,width:"400px",height:"400px",marginRight:"0",avatar:i}))};return n.jsxs(ih,{selected:e,width:s,height:a,marginRight:r,background:ae(t),boxShadow:d,border:p,onClick:f,children:[i&&m?n.jsx(sh,{round:!0,onLoadedData:()=>b(!0),onError:()=>b(!1),src:i}):n.jsx("div",{className:"name",children:h}),n.jsx(ve,{invisibleOnFalse:!0,checked:l??!1,visible:l!==void 0,setChecked:()=>null}),n.jsx(en,{left:"80%",top:"90%",outline:"4px solid var(--schedule)",visible:!!o,children:o})]})}const ah=()=>n.jsx(Y,{to:ge,children:n.jsx(j,{text:"Настройки",icon:n.jsx(an,{}),onClick:()=>ie.close(),width:"100%",align:"left",background:"var(--schedule)"})}),rh=x.div`
    .user-info-plate {
        display: flex;
        flex-direction: column;
        width: 100%;
        background: var(--theme);
        box-shadow: var(--schedule-shadow);
        border-radius: 5px;
        overflow: hidden;
        color: var(--text);

        .avatar-and-name {
            width: 100%;
            padding: 7px;
            display: flex;
            align-items: center;

            b {
                font-size: 0.8em;
                width: 100%;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
            }
        }

        & > .buttons {
            display: flex;
            align-items: center;

            button {
                background: var(--theme);
                border-radius: 0;
                width: 100%;

                &:hover {
                    background: var(--search);
                }
            }
        }
    }

    @media (max-width: 1000px) {
        .user-info-plate {
            padding: 10px;
            flex-direction: row;
            justify-content: space-between;
        }
    }
`,oh=()=>{const e=Et.logout,{data:{user:t}}=Q.useUser(),{open:i}=J(),{theme:s,switchTheme:a}=gt(),[r,o]=c.useState([{title:"Темная тема",state:s!=="light",action:d=>a(d)}]),l=()=>ie.close();return c.useEffect(()=>{o([{title:"Темная тема",state:s!=="light",action:d=>a(d)}])},[s]),t?n.jsxs(rh,{children:[n.jsxs("div",{className:"user-info-plate",children:[n.jsxs("div",{className:"avatar-and-name",children:[n.jsx(qe,{name:Ue({name:t.name,patronymic:t.patronymic,surname:t.surname}),avatar:t==null?void 0:t.avatar,width:"35px",height:"35px",marginRight:"8px"}),n.jsx("b",{children:Ue({name:t.name,surname:t.surname,patronymic:t.patronymic})})]}),n.jsx("div",{className:"buttons"})]}),n.jsx(As,{title:"",toggles:r,setToggles:o}),n.jsx(ah,{}),n.jsx(j,{text:"Что нового",icon:n.jsx(Xr,{}),onClick:()=>{l(),i(n.jsx(xn,{}))},width:"100%",align:"left",background:"var(--schedule)"}),n.jsx(un,{text:"Cтарый дизайн",onClick:()=>{localStorage.setItem("useOldVersion","true")},background:"var(--schedule)",icon:n.jsx(rn,{}),width:"100%",align:"left",href:`${de}/index.php`}),n.jsx(ue,{}),n.jsx(j,{align:"left",icon:n.jsx(ki,{}),onClick:()=>{l(),pe.evokeConfirm({message:"Вы точно хотите выйти из аккаунта?",onConfirm:e})},text:"Выйти",width:"100%",background:"var(--schedule)"})]}):null},lh=x.div`
    width: 60px;
    display: flex;
    align-items: center;
`,ch=()=>n.jsx(lh,{children:n.jsx(te,{shape:"circle",size:{width:"30px",height:"30px"},margin:"0 5px"})}),dh=x.div`
    position: relative;
    z-index: 10;

    & > .user-info-plate {
        display: flex;
        align-items: center;
        color: var(--text);
        background: transparent;
        /* box-shadow: 0 0 2px #0000004e; */
        padding: 4px;
        border-radius: var(--brLight);
        cursor: pointer;
        position: relative;
        user-select: none;

        &:hover {
            background: var(--almostTransparent);
        }
    }
`,ph=()=>{const{data:{user:e}}=Q.useUser(),t=c.useRef(null),i=s=>{ie.open({e:s,content:n.jsx(oh,{}),height:200})};return e?n.jsx(dh,{ref:t,tabIndex:1,children:n.jsxs("div",{className:"user-info-plate",onClick:i,children:[n.jsx(qe,{name:Ue({name:e.name,patronymic:e.patronymic,surname:e.surname}),avatar:e==null?void 0:e.avatar,width:"32px",height:"32px",marginRight:"5px"}),n.jsx(Zr,{})]})}):n.jsx(ch,{})},uh=({visible:e=!0,text:t="Назад",fullWidth:i=!0})=>{if(!e)return null;const s=dt();return n.jsx(j,{text:t,onClick:()=>s.goBack(),icon:n.jsx(Qr,{}),textColor:"var(--reallyBlue)",background:"transparent",width:i?"100%":void 0,padding:"0",height:"20px",align:"left"})},hh=({currentPagePair:{currentPage:e,exactCurrentPage:t}})=>{var d;const i=dt(),s=hd(),{width:a}=Ge(),r=(p=fr)=>()=>{xt.changeOpen({isOpen:!1,currentPage:p.slice(1,p.length)}),i.push(p)},o=G.useMemo(()=>t?t.isSubPage?t.subPageHeaderTitle:t.title:e==null?void 0:e.title,[e,t]),l=G.useMemo(()=>t!=null&&t.withoutBackButton?null:t!=null&&t.isSubPage?s.length>1?n.jsx(uh,{text:t==null?void 0:t.backButtonText,fullWidth:!1}):t.fallbackPrevPage?n.jsx(j,{icon:n.jsx(zt,{}),onClick:r(t.fallbackPrevPage),background:"transparent"}):n.jsx(j,{icon:n.jsx(zt,{}),onClick:r(),background:"transparent"}):n.jsx(j,{icon:n.jsx(zt,{}),onClick:r(),background:"transparent"}),[t,s,r]);return n.jsxs(Xu,{hidden:(d=t??e)==null?void 0:d.withoutHeader,children:[n.jsxs("div",{className:"header-button-and-title",children:[l,n.jsx("div",{className:"title-container",children:n.jsx("h3",{children:o})})]}),a<=1e3&&n.jsx(ph,{})]})},gh=G.memo(hh),fh=()=>{const{open:e}=J(),t=()=>ie.close(),i=()=>{pe.evokeConfirm({message:"Вы точно хотите выйти из аккаунта?",onConfirm:Et.logout}),t()},s=()=>{ie.close(),e(n.jsx(xn,{}))};return n.jsxs(n.Fragment,{children:[n.jsx(Y,{to:ge,children:n.jsx(j,{text:"Настройки",background:"var(--schedule)",icon:n.jsx(an,{}),width:"100%",align:"left",onClick:t})}),n.jsx("a",{href:`${de}/index.php`,children:n.jsx(j,{text:"Старый дизайн",icon:n.jsx(rn,{}),width:"100%",background:"var(--schedule)",align:"left"})}),n.jsx(ue,{}),n.jsx(j,{align:"left",icon:n.jsx(ki,{}),onClick:i,text:"Выйти",width:"100%",background:"var(--schedule)"}),n.jsx(ue,{}),n.jsx(j,{align:"left",icon:n.jsx(K,{icon:null,type:"info",title:"v2.1.0",width:"fit-content"}),onClick:s,text:"Что нового",width:"100%",background:"var(--schedule)"})]})},xh=x(Y)`
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
`,mh=({name:e,avatar:t,loading:i,size:s,notifications:a,selected:r})=>i?n.jsx(te,{shape:"circle",size:{width:"40px",height:"40px"}}):n.jsxs(xh,{to:xr,onClick:()=>xt.changeOpen({isOpen:!1,currentPage:"profile"}),children:[n.jsx(j,{icon:n.jsx(Si,{}),className:"more-button",background:"transparent",onClick:o=>{o.preventDefault(),o.stopPropagation(),ie.open({e:o,height:143,content:n.jsx(fh,{})})}}),n.jsx(qe,{notifications:a,width:s??"70px",height:s??"70px",avatar:t,name:e,marginRight:"0",selected:r}),n.jsx(U,{size:5,children:e})]}),bh=G.memo(mh),vh=["isCurrent","color"],yh=x(Y).withConfig({shouldForwardProp:e=>!vh.includes(e)})`
    position: relative;
    display: flex;
    align-items: center;
    font-weight: ${({isCurrent:e})=>e?800:600};
    width: 100%;
    justify-content: flex-start;
    padding: 10px 0;
    margin: 5px 0;
    cursor: pointer;
    position: relative;
    user-select: none;
    text-decoration: none;
    border-radius: var(--brLight);
    color: ${({color:e,isCurrent:t})=>e&&t?_[e].main:"var(--text)"};

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
        margin-right: 7px;
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
        background: ${({color:e})=>e?_[e].main:"var(--reallyBlue)"};
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
`,wh=x.div`
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
`,_h=x.div`
    overflow-y: auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 0 15px;
    border-radius: 12px;
`,jh=x.button`
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
`,Th=x.div`
    min-width: ${({size:e})=>e+"px"};
    min-height: ${({size:e})=>e+"px"};
    max-width: ${({size:e})=>e+"px"};
    max-height: ${({size:e})=>e+"px"};
    border-radius: 17px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({color:e})=>_[e].main};
    transition: 0.2s;

    svg {
        color: #fff;
        width: ${({size:e})=>e/2+"px"};
        height: ${({size:e})=>e/2+"px"};
    }
`,Eh=({children:e,color:t,size:i=40})=>n.jsx(Th,{color:t,size:i,className:"icon",children:e}),kh=(e,t)=>{if(t){const i=t["settings-home-page"].property.pages;ht.updateSetting({nameSettings:"settings-home-page",nameParam:"pages",value:i.filter(s=>s!==e)})}},Sh=(e,t)=>{if(t)if(e!=="home"){const i=t["settings-home-page"].property.pages;ht.updateSetting({nameSettings:"settings-home-page",nameParam:"pages",value:[...i,e]})}else z.evokePopUpMessage({message:"Нельзя добавить этот раздел на домашний экран",type:"failure"})},Oh=(e,t,i,s)=>{if(t){const a=s.length+_o;if(i<a){z.evokePopUpMessage({message:"Элемент добавлен в навигационное меню",type:"success"});const r=t["settings-customize-menu"].property.pages??St;ht.updateSetting({nameSettings:"settings-customize-menu",nameParam:"pages",value:[...r,e]})}else z.evokePopUpMessage({message:`Нельзя добавить больше ${a} элементов`,type:"failure"})}},Ph=(e,t,i)=>{if(t)if(i.includes(e))z.evokePopUpMessage({message:"Элемент нельзя убрать из навигационного меню",type:"failure"});else{z.evokePopUpMessage({message:"Элемент убран из навигационного меню",type:"success"});const s=t["settings-customize-menu"].property.pages;ht.updateSetting({nameSettings:"settings-customize-menu",nameParam:"pages",value:s.filter(a=>a!==e)})}},$h=x.div`
    .top {
        display: flex;
        align-items: center;
        gap: 6px;
        padding: 7px;

        span {
            display: block;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            width: 100%;
            font-size: 0.8em;
            font-weight: 500;
        }
    }
`,Ah=e=>{var h,g,f;const{id:t,icon:i,title:s,color:a}=e,{settings:r}=on.useSettings(),{data:o}=Q.useUser(),l=we.useMenu(),d=(h=r["settings-home-page"].property.pages)==null?void 0:h.find(v=>v===t),p=(g=r["settings-customize-menu"].property.pages)==null?void 0:g.find(v=>v===t),u=((f=o.user)==null?void 0:f.user_status)==="staff"?Ii:St,m=()=>{Sh(t,r),ie.close()},b=()=>{Oh(t,r,Object.keys(l.leftsideBarRoutes??{}).length??0,u),ie.close()};return n.jsxs($h,{children:[n.jsxs("div",{className:"top",children:[n.jsx(Eh,{color:a,size:22,children:i}),n.jsx("span",{children:s})]}),n.jsx(ue,{}),d?n.jsx(j,{text:"Убрать с главной",icon:n.jsx(Fe,{}),width:"100%",align:"left",background:"var(--schedule)",onClick:()=>{kh(t,r),ie.close()}}):n.jsx(j,{text:"Добавить на главную",icon:n.jsx(rt,{}),width:"100%",align:"left",background:"var(--schedule)",onClick:m}),p?n.jsx(j,{text:"Убрать из меню",icon:n.jsx(Fe,{}),width:"100%",align:"left",background:"var(--schedule)",onClick:()=>Ph(t,r,u)}):n.jsx(j,{text:"Добавить в меню",icon:n.jsx(rt,{}),width:"100%",align:"left",background:"var(--schedule)",onClick:b})]})},Ch=({route:e})=>{const t=_[e.color.length?e.color:"blue"].main,i=s=>{s.preventDefault(),s.stopPropagation(),ie.open({e:s,height:105,content:n.jsx(Ah,{...e})})};return n.jsx(j,{icon:n.jsx(Si,{}),textColor:t,className:"more-button",background:"transparent",onClick:i})},Rh=e=>{const{path:t,icon:i,title:s,isCurrent:a,isAdmin:r,color:o,notifications:l}=e;return n.jsxs(yh,{to:t,className:"leftside-bar-item",color:o,isCurrent:a,onClick:()=>{xt.changeOpen({isOpen:!1,currentPage:t.slice(1,t.length)})},title:s,children:[n.jsx(en,{className:"notification",top:"50%",visible:r,right:"-20px",color:"pink",children:"A"}),n.jsx(en,{className:"notification",top:"50%",visible:!!l,right:r?"0px":"-20px",color:"red",children:l}),i,n.jsx("span",{className:"title",children:s}),n.jsx(Ch,{route:e})]})},Ja=G.memo(Rh),Ih=()=>{const{isOpen:e}=we.useMenu();return n.jsx(n.Fragment,{children:n.jsx(j,{icon:n.jsx(Oe,{}),onClick:()=>xt.changeOpen({isOpen:!e}),text:"Закрыть меню",width:"100%"})})},Nh=({icon:e,title:t})=>{const i=()=>{const s=e;return n.jsx(s,{})};return n.jsxs(jh,{className:"leftside-bar-item",children:[i(),n.jsx("strong",{children:t})]})};G.memo(Nh);x.section`
    width: 100%;
    max-width: 270px;
    color: #383634;

    border-bottom: 1px solid rgba(56, 54, 52, 0.08);

    transition-property: padding-top, padding-bottom;
    transition: 0.3s ease-in-out;
`;x.div`
    height: 0;
    opacity: 0;

    /* display: flex; */
    overflow: hidden;
    transition: all 0.3s ease-in-out;

    &.show {
        height: 180px; /* Если оставляю проценты, то визуализация перехода идёт по другому */
        opacity: 1;
    }
`;const Lh=()=>{const{leftsideBarRoutes:e,currentPage:t}=we.useMenu(),i=c.useMemo(()=>{const s=window.location.hash.split("/");return s.length>2&&s[1]?s[1]:t==null?void 0:t.id},[t]);return e?n.jsx(_h,{children:Object.values(e).filter(s=>s!==void 0).map(s=>c.createElement(Ja,{...s,key:s==null?void 0:s.id,isCurrent:i===(s==null?void 0:s.id)}))}):n.jsx(te,{shape:"rect",size:{width:"100%",height:"300px"}})},Dh=G.memo(Lh),zh=()=>{const{isOpen:e}=we.useMenu(),{width:t,height:i}=Ge(),{data:{user:s}}=Q.useUser(),{visibleRoutes:a,currentPage:r}=we.useMenu(),{theme:o,switchTheme:l}=gt(),[d,p]=c.useState([{title:"Темная тема",state:o!=="light",action:u=>l(u)}]);return c.useEffect(()=>{p([{title:"Темная тема",state:o!=="light",action:u=>l(u)}])},[o]),n.jsxs(wh,{isOpen:e,height:i,children:[n.jsxs("div",{className:"top-wrapper",children:[n.jsx(Y,{to:bn,children:n.jsx(At,{width:"165px"})}),n.jsx(bh,{notifications:a==null?void 0:a.profile.notifications,avatar:s==null?void 0:s.avatar,name:(s==null?void 0:s.fullName)??"",loading:!s,selected:(r==null?void 0:r.id)==="profile"}),n.jsx(Dh,{})]}),n.jsx(As,{title:"",toggles:d,setToggles:p}),t<1e3&&n.jsx(Ih,{})]})},Mh=x.div`
    width: 300px;
    position: absolute;
    bottom: 20px;
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

    /* a {
        color: #fff;
    } */

    button {
        position: absolute;
        top: 4px;
        right: 4px;
        background: transparent;
        width: 28px;
        height: 28px;
        border-radius: 6px;
        padding: 5px;
        color: #fff;

        &:hover {
            background: #ffffff5c;
        }
    }

    @media (max-width: 1000px) {
        top: 20px;
        bottom: auto;
        left: 50%;
        transform: translate(${({isOpen:e})=>e?"-50%, 0px":"-50%, -20px"});
        font-size: 0.8em;
    }
`,Fh=()=>{const{isOpen:e,message:t,type:i,time:s,onClick:a}=os.usePopUpMessage();c.useEffect(()=>{e&&setTimeout(()=>{z.openPopUpMessage({isOpen:!e})},s)},[e]);const r=c.useCallback(()=>{a&&(a(),z.openPopUpMessage({isOpen:!e}))},[a]);return n.jsx(Mh,{isOpen:e,isClickable:!!a,color:Ee[i].color,onClick:r,children:n.jsx(K,{type:i,fontSize:"1em",onClose:()=>z.openPopUpMessage({isOpen:!1}),children:t})})},Uh=()=>{const{isOpen:e,component:t,canBack:i,back:s,close:a}=c.useContext(ln);return{back:s,close:a,isOpen:e,canBack:i,component:t}},Bh=x.div`
    background: var(--theme);
    color: var(--text);
    padding: 20px;
    min-height: 150px;
    max-height: 90vh;
    border-radius: var(--brSemi);
    transition: 0.2s opacity, 0.2s transform;
    overflow: auto;

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
        padding: 10px;
        padding-top: 15px;

        width: 100%;
        max-height: 80%;
        height: fit-content;
        bottom: 0;
        border-radius: 20px 20px 0 0;
        transform: ${({isOpen:e})=>e?"scale(1) translateY(0px)":"scale(1) translateY(150px)"};
        border-radius: var(--brLight) var(--brLight) 0 0;
    }
`,Rt=x.div`
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
        align-items: flex-end;
    }

    .close-button,
    .back-button {
        position: absolute;
        top: 12px;

        &:hover {
            filter: brightness(0.8);
            background: var(--theme-mild-xxl);
        }
    }

    .close-button {
        right: 20px;
        z-index: 100;
        padding: 8px;
    }
`,Hh=x.div`
    padding-top: 30px;
`,Wh=()=>{const{isOpen:e,component:t,canBack:i,back:s,close:a}=Uh(),r=c.useRef(null),o=c.useMemo(()=>e&&!!t,[e,t]);return We(r,()=>{a()}),n.jsx(Rt,{isOpen:o,children:n.jsxs(Bh,{isOpen:o,ref:r,children:[i&&n.jsx(j,{onClick:s,icon:n.jsx(ut,{}),text:"Назад",background:"transparent",textColor:"var(--theme-opposite)",width:"fit-content",align:"left",padding:"8px",height:"fit-content",className:"back-button"}),n.jsx(j,{onClick:a,icon:n.jsx(Oe,{}),className:"close-button",background:"transparent",height:"32.5px"}),n.jsx(Hh,{children:t})]})})},Vh=G.memo(Wh),Gh=x.div`
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
`,qh=()=>{const{isOpen:e,message:t,onConfirm:i,onReject:s}=Ji.useConfirm(),a=c.useRef(null);We(a,()=>pe.closeConfirm());const r=()=>{i(),pe.closeConfirm()},o=()=>{pe.closeConfirm()};return n.jsx(Rt,{isOpen:e,children:n.jsxs(Gh,{isOpen:e,ref:a,children:[n.jsx(U,{size:3,align:"left",children:t??"Хотите продолжить?"}),n.jsxs(se,{width:"100%",scroll:!1,direction:"horizontal",gap:5,padding:"10px 0 0 0",horizontalAlign:"right",children:[n.jsx(j,{text:"Да",onClick:r,width:"90px",textColor:_.red.main,background:"transparent",hoverBackground:_.red.transparent3}),n.jsx(j,{text:"Нет",onClick:s??o,width:"90px",textColor:_.blue.main,background:"transparent",hoverBackground:_.blue.transparent3})]})]})})},Yh=x.div`
    display: flex;
    align-items: ${({align:e})=>Yt(e)};
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
`,Wx=({pages:e,currentPage:t=0,width:i,className:s,maxWidth:a,sliderWidth:r,onChangePage:o,align:l="center",appearance:d=!0})=>{const[p,u]=c.useState(t),{width:m}=Ge(),b=c.useRef(null),h=()=>{var f;b!=null&&b.current&&m<=1e3&&u(Math.round(((f=b.current)==null?void 0:f.scrollLeft)/m))},g=f=>{var v;u(f),o==null||o((v=e[f])==null?void 0:v.id),b!=null&&b.current&&(b.current.scrollLeft=b.current.clientWidth*f)};return c.useEffect(()=>{g(p)},[t,m]),n.jsxs(Yh,{width:i,align:l,maxWidth:a,children:[n.jsx(ig,{pages:e.map(({title:f,condition:v})=>({title:f,condition:v})),currentPage:p,setCurrentPage:g,sliderWidth:r,appearance:d}),n.jsx("div",{className:s??"slider-content",ref:b,onScroll:h,children:e.map(f=>f.condition!==void 0&&f.condition||f.condition===void 0?n.jsx("div",{className:"slider-page",children:f.content},f.title):n.jsx("div",{className:"slider-page",children:n.jsx(oe,{text:"Нет данных"})},f.title))})]})},Kh=x.div`
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
`,Jh=({id:e,currentPage:t,setCurrentPage:i,pageTitle:s,size:a,condition:r=!0})=>n.jsx(Kh,{className:`SliderItem ${e===t?"active":""}`,onClick:()=>r&&i(e),size:a,condition:r,children:n.jsx("b",{children:s})}),Xh=c.memo(Jh);x.div`
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
`;const Zh=x.span`
    min-width: 80px;
    height: calc(100% - 0px);
    background: ${({appearance:e})=>e?"var(--theme)":"var(--mild-theme)"};
    display: block;
    position: absolute;
    transition: 0.3s left, 0.2s transform;
    z-index: 0;
    border-radius: 14px;
    scroll-snap-align: center;
    left: ${({currentPage:e,moreThanNeeded:t,pages:i,size:s})=>`calc(${e*100/(t?s:i.length)}%)`};
    width: ${({moreThanNeeded:e,pages:t,size:i})=>`calc(100% / ${e?i:t.length} - ${t.length>i?3:0}px)`};

    @media (max-width: 1000px) {
        border-radius: calc(var(--brLight) - 2px);
    }
`,Qh=({currentPage:e,pages:t,size:i,appearance:s})=>{const a=c.useMemo(()=>t.length>i,[t.length,i]);return n.jsx(Zh,{currentPage:e,appearance:s,moreThanNeeded:a,pages:t,size:i})},eg=c.memo(Qh),tg=x.div`
    max-width: ${({sliderWidth:e})=>e??"100%"};
    width: 100%;
    min-height: 50px;
    padding: ${({appearance:e})=>e&&"3px"};
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background: ${({appearance:e})=>e&&"var(--search2)"};
    border-radius: ${({appearance:e})=>e&&"17px"};
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
`,ng=({pages:e,currentPage:t,setCurrentPage:i,sliderWidth:s,appearance:a=!0})=>{const[r,o]=c.useState(5),{width:l}=Ge();return c.useEffect(()=>{l>1200?o(6):l>1e3&&l<=1200?o(5):l>600&&l<=1e3?o(4):l<=600&&o(3)},[l]),n.jsx(tg,{size:r,sliderWidth:s,appearance:a,children:n.jsxs("div",{className:"slider-body",children:[n.jsx(eg,{appearance:a,pages:e,currentPage:t,size:r}),e.map((d,p)=>n.jsx(Xh,{id:p,currentPage:t,setCurrentPage:i,pageTitle:d.title,condition:d.condition,size:r},p))]})})},ig=c.memo(ng),Xa=({words:e})=>{const t=e.filter(i=>i.length!==0);return n.jsx(n.Fragment,{children:t.map((i,s)=>i+(s===t.length-1?"":" • "))})},ui=e=>{switch(e){case"small":return"0.65em";case"middle":return"0.77em";default:return"1em"}},hi=(e,t)=>e==="horizontal"?t==="small"?"15px":t==="middle"?"30px":"45px":t==="small"?"30px":t==="middle"?"35px":"45px",Za=(e,t,i,s)=>{const a=[e?"Я":t==="staff"?"Сотрудник":"Студент"];return e||(i&&a.push(i),s&&a.push(`${s}`)),a},sg=e=>{switch(e){case"small":return"82px";case"middle":return"90px";default:return"100px"}},ag=x.div`
    width: ${({width:e})=>e??"100%"};
    height: ${({height:e})=>e??"100px"};
    position: absolute;
    background: ${({color:e})=>e};
    z-index: -1;
    overflow: hidden;
    top: -16px;
    left: -16px;

    img {
        width: calc(100% + 200px);
        position: absolute;
        top: -100px;
        left: -100px;
        filter: blur(20px) brightness(0.7);
    }

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
`,rg=({fullName:e,avatar:t,width:i,height:s,baseScale:a=1,baseScaleDelta:r=1})=>n.jsxs(ag,{width:i,height:s,color:ae(e,"dark2"),color2:ae(e,"light1"),baseScale:a,baseScaleDelta:r,children:[t&&n.jsx("img",{src:t}),!t&&n.jsxs(n.Fragment,{children:[n.jsx("svg",{width:"620",height:"570",viewBox:"0 0 620 570",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M333.676 1.93177C428.781 13.6788 480.842 107.607 535.05 186.629C582.329 255.551 636.893 330.791 614.509 411.318C592.853 489.225 508.9 525.549 433.05 553.571C368.009 577.6 301.213 573.07 235.35 551.397C151.615 523.841 56.0559 499.684 22.0945 418.336C-17.4711 323.565 -3.03744 209.993 58.4905 127.766C122.067 42.801 228.358 -11.0768 333.676 1.93177Z",fill:ae(e,"dark1")})}),n.jsx("svg",{width:"620",height:"570",viewBox:"0 0 620 570",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M333.676 1.93177C428.781 13.6788 480.842 107.607 535.05 186.629C582.329 255.551 636.893 330.791 614.509 411.318C592.853 489.225 508.9 525.549 433.05 553.571C368.009 577.6 301.213 573.07 235.35 551.397C151.615 523.841 56.0559 499.684 22.0945 418.336C-17.4711 323.565 -3.03744 209.993 58.4905 127.766C122.067 42.801 228.358 -11.0768 333.676 1.93177Z",fill:ae(e,"main")})}),n.jsx("svg",{width:"620",height:"570",viewBox:"0 0 620 570",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M333.676 1.93177C428.781 13.6788 480.842 107.607 535.05 186.629C582.329 255.551 636.893 330.791 614.509 411.318C592.853 489.225 508.9 525.549 433.05 553.571C368.009 577.6 301.213 573.07 235.35 551.397C151.615 523.841 56.0559 499.684 22.0945 418.336C-17.4711 323.565 -3.03744 209.993 58.4905 127.766C122.067 42.801 228.358 -11.0768 333.676 1.93177Z",fill:ae(e,"light1")})})]})]}),og=x.div`
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
`,lg=({avatar:e,name:t,type:i,division:s,group:a,finance:r,educationForm:o,degreeLevel:l,course:d,isMe:p=!1,noInfo:u=!1})=>{const m=u?"140px":"110px",b=Za(p,i,s,a);return n.jsxs(og,{children:[n.jsx(rg,{fullName:t,avatar:e,height:"136px",width:"calc(100% + 16px)",baseScale:1,baseScaleDelta:.5}),n.jsx(qe,{avatarModal:!0,border:!0,name:t,avatar:e,width:m,height:m,marginRight:"0"}),!u&&n.jsxs("div",{className:"info",children:[n.jsx("b",{children:t}),n.jsx(Ve,{fontSize:"0.9rem",children:n.jsx(Xa,{words:b})}),n.jsx(De,{fontSize:"0.9rem",visible:!!r,keyStr:"Уровень финансирование",value:r}),n.jsx(De,{fontSize:"0.9rem",visible:!!l,keyStr:"Уровень образования",value:l}),n.jsx(De,{fontSize:"0.9rem",visible:!!d,keyStr:"Курс",value:d}),n.jsx(De,{fontSize:"0.9rem",visible:!!o,keyStr:"Форма образования",value:o})]})]})},cg=x.div`
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
        gap: 4px;

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
`,Qa=e=>{const{children:t}=e;return n.jsxs(cg,{children:[n.jsx(lg,{...e}),n.jsx("div",{className:"buttons",children:t})]})},dg=x.div`
    display: flex;
    align-items: center;
    .name-and-status {
        display: flex;
        flex-direction: column;
    }
`,pg=()=>n.jsxs(dg,{children:[n.jsx(te,{shape:"circle",size:{width:"30px",height:""},margin:"8px 0px 8px 0 "}),n.jsxs("div",{className:"name-and-status",children:[n.jsx(te,{shape:"rect",size:{width:"130px",height:"10px"},margin:"1px 10px"}),n.jsx(te,{shape:"rect",size:{width:"70px",height:"8px"},margin:"0px 10px"})]})]}),er=e=>{if(e)return()=>{pe.evokeConfirm({message:"Вы уверены, что хотите сменить аккаунт?",onConfirm:()=>{localStorage.setItem("token",JSON.stringify({token:e})),location.reload()}})}},ug=e=>{const{close:t}=J(),{token:i,name:s,group:a}=e,r=`linear-gradient(45deg, ${ae(s,"main")}, ${ae(s,"dark1")})`;return n.jsxs(Qa,{...e,type:"stud",children:[!i&&n.jsxs(n.Fragment,{children:[n.jsx(Y,{to:`${It}/${a}`,children:n.jsx(j,{icon:n.jsx(Oi,{}),text:"Расписание",onClick:()=>t(),width:"100%"})}),n.jsx(j,{icon:n.jsx(Pi,{}),text:"Написать",onClick:()=>t(),width:"100%",isActive:!1})]}),i&&n.jsx(j,{text:"Войти в аккаунт",width:"100%",textColor:"#fff",background:r,onClick:er(i)})]})},tr=e=>{const{close:t}=J(),{token:i,name:s}=e,a=`linear-gradient(45deg, ${ae(s,"dark1")}, ${ae(s,"main")})`;return n.jsxs(Qa,{type:"staff",...e,children:[!i&&n.jsxs(n.Fragment,{children:[n.jsx(Y,{to:`${It}/${s}`,children:n.jsx(j,{icon:n.jsx(Oi,{}),text:"Расписание",onClick:()=>{t()},width:"100%"})}),n.jsx(j,{icon:n.jsx(Pi,{}),text:"Написать",onClick:()=>t(),width:"100%",isActive:!1})]}),i&&n.jsx(j,{text:"Войти в аккаунт",width:"100%",textColor:"#fff",background:a,onClick:er(i)})]})},hg=x.div`
    display: flex;
    align-items: center;
    flex-direction: ${({orientation:e})=>e==="vertical"&&"column"};
    padding: ${({orientation:e})=>e==="vertical"?"10px":"8px"};
    border-radius: var(--brLight);
    color: var(--text);
    font-weight: 600;
    cursor: pointer;
    width: ${({orientation:e,size:t})=>e==="vertical"?sg(t):"100%"};

    .index {
        min-width: 30px;
        display: flex;
        align-items: center;
        font-weight: 500;
        font-size: 0.85rem;
        color: var(--theme-mild-opposite);
    }

    &:hover {
        background: ${_.grey.transparent3};
    }

    .name-and-status {
        display: flex;
        flex-direction: column;
        text-align: ${({orientation:e})=>e==="vertical"?"center":"left"};
        margin-top: ${({orientation:e})=>e==="vertical"?"5px":"0"};
        width: ${({orientation:e})=>e==="vertical"?"100%":"calc(100% - 60px)"};

        .name {
            font-size: ${({size:e})=>ui(e)};
            width: ${({orientation:e})=>e==="vertical"&&"70px"};
            white-space: ${({orientation:e})=>e==="vertical"&&"nowrap"};
            overflow: ${({orientation:e})=>e==="vertical"&&"hidden"};
            text-overflow: ${({orientation:e})=>e==="vertical"&&"ellipsis"};
        }

        .status {
            font-size: ${({size:e})=>`calc(${ui(e)} - 0.1em)`};
            opacity: 0.6;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
            width: 90%;
        }
    }
`,Vx=e=>{const{open:t}=J(),{type:i,avatar:s,name:a,checked:r,onClick:o,indexNumber:l,division:d,group:p,isMe:u=!1,loading:m=!1,orientation:b="horizontal",size:h="middle"}=e,g=Za(u,i,d,p);if(m)return n.jsx(pg,{});const f=v=>{o?o(v):u||t(i==="staff"?n.jsx(tr,{...e}):n.jsx(ug,{...e}))};return n.jsxs(hg,{orientation:b,size:h,onClick:f,children:[l&&n.jsx("div",{className:"index",children:l}),n.jsx(qe,{name:a,avatar:s,width:hi(b,h),height:hi(b,h),marginRight:b==="horizontal"?"7px":"0px",checked:r}),n.jsxs("div",{className:"name-and-status",children:[n.jsx("span",{className:"name",children:a}),n.jsx("span",{className:"status",children:n.jsx(Xa,{words:g})})]})]})},gg=x.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 15px 20px;
    width: calc(50% - 5px);
    gap: 10px;
    text-align: center;
    color: ${({color:e})=>e?_[e].main:"var(--text)"};
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
        color: ${({color:e})=>e?_[e].main:"var(--text)"};
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
`,fg=({icon:e,title:t,color:i,goTo:s,visible:a=!0})=>{const{close:r}=J();return a?n.jsxs(gg,{color:i,children:[n.jsx("div",{className:"icon",children:e}),n.jsx("span",{className:"title",children:t}),!!s&&n.jsx(Y,{to:s,children:n.jsx(j,{text:"Перейти",onClick:r,background:"var(--almostTransparent)",width:"100%"})})]}):null},xg=x.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    img {
        width: 100%;
        object-fit: cover;
        object-position: center;
    }

    @media (max-width: 1000px) {
        img {
            width: 100%;
            object-fit: scale-down;
        }
    }
`,mg=x.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 5px;
`,bg=({image:e,list:t})=>{const{width:i}=Ge();return n.jsxs(xg,{children:[!!e&&n.jsxs(n.Fragment,{children:[n.jsx(U,{size:4,bottomGap:!0,children:e.text}),n.jsx("img",{src:i<1e3&&e.mobile?e.mobile:e.desktop,alt:""})]}),!!t&&n.jsx(mg,{children:t==null?void 0:t.map(s=>c.createElement(fg,{...s,key:s.title}))})]})},vg=x.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;

    @media (min-width: 1001px) {
        width: 500px;
        height: 500px;
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
`,xn=()=>{const[e,t]=c.useState(0),{close:i}=J(),{data:{user:s}}=Q.useUser(),{visibleRoutes:a}=we.useMenu(),r=[n.jsx(bg,{list:[{icon:(a==null?void 0:a["all-students"].icon)??"",title:(a==null?void 0:a["all-students"].title)??"",color:(a==null?void 0:a["all-students"].color)??"blue",visible:!0,goTo:mr},{icon:(a==null?void 0:a["all-teachers"].icon)??"",title:(a==null?void 0:a["all-teachers"].title)??"",color:(a==null?void 0:a["all-teachers"].color)??"blue",visible:!0,goTo:br},{icon:(a==null?void 0:a["project-activity"].icon)??"",title:(a==null?void 0:a["project-activity"].title)??"",color:(a==null?void 0:a["project-activity"].color)??"blue",visible:(s==null?void 0:s.user_status)!=="staff",goTo:yn},{icon:(a==null?void 0:a.alerts.icon)??"",title:(a==null?void 0:a.alerts.title)??"",color:(a==null?void 0:a.alerts.color)??"blue",visible:!0,goTo:wn}]},0)];return n.jsxs(vg,{children:[n.jsx(U,{size:2,children:"Что нового"}),n.jsx("div",{className:"content",children:r[e]}),n.jsx(Os,{amount:r.length,current:e}),n.jsxs("div",{className:"buttons",children:[n.jsx(j,{onClick:()=>t(o=>re(o-1,r.length-1)),text:"Назад",width:"100%",isActive:e!==0}),e===r.length-1?n.jsx(j,{onClick:i,text:"Готово",width:"100%",background:_.blue.light1,textColor:"#fff"}):n.jsx(j,{onClick:()=>t(o=>re(o+1,r.length-1)),text:"Далее",width:"100%"})]})]})},gi=x(ft)`
    position: absolute;
    bottom: 0;
    left: 0;

    width: 100%;
    height: var(--mobile-bottom-menu-height);
    background: var(--schedule);
    box-shadow: 0 0 1px;
    padding: 0 10px;
    display: none;

    @media (max-width: 1000px) {
        display: flex;
    }
`,yg=()=>{const{allRoutes:e,currentPage:t}=we.useMenu();return e?n.jsx(gi,{direction:"horizontal",horizontalAlign:"evenly",children:Gu.map(i=>n.jsx(Ja,{...e[i],isCurrent:(t==null?void 0:t.id)===i},i))}):n.jsxs(gi,{direction:"horizontal",horizontalAlign:"evenly",verticalAlign:"center",children:[n.jsx(te,{shape:"rect",size:{width:"55px",height:"40px"},margin:"0"}),n.jsx(te,{shape:"rect",size:{width:"55px",height:"40px"},margin:"0"}),n.jsx(te,{shape:"rect",size:{width:"55px",height:"40px"},margin:"0"}),n.jsx(te,{shape:"rect",size:{width:"55px",height:"40px"},margin:"0"}),n.jsx(te,{shape:"rect",size:{width:"55px",height:"40px"},margin:"0"})]})},wg=(e,t,i)=>({isOpen:t,message:e,position:i}),fi={hints:[]},_g=()=>P(jg),nr=k(),ir=k(),sr=k(),jg=W(fi).on(nr,(e,{message:t,position:i})=>({hints:[...e.hints,wg(t,e.hints.length===0,i)]})).on(ir,e=>({hints:e.hints.splice(1,e.hints.length)})).on(sr,()=>({...fi})),Tg={useHint:_g},Eg={evoke:nr,close:ir,clearStore:sr},kg=x.div`
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
    box-shadow: 0 0 30px ${_.blue.transparent3};
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
`,Sg=()=>{const{hints:e}=Tg.useHint(),t=e[0];return t?n.jsx(kg,{open:t.isOpen,left:t.position.x,top:t.position.y,children:n.jsx(K,{type:"hint",title:t.message,onClose:()=>Eg.close(),width:"100%",icon:null})}):null},Og=x.div`
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
`,Pg=50;function Gx({items:e,renderItem:t,hasNext:i,isPending:s,handleNext:a,filter:r,showAlphabetLetters:o,noResultContent:l,offset:d=Pg}){const{data:{user:p}}=Q.useUser();let u="";const m=c.useCallback(b=>{const h=b.currentTarget.clientHeight,g=b.currentTarget.scrollHeight,f=b.currentTarget.scrollTop;g-d<f+h&&i&&!s&&(a==null||a(r??null))},[a,i,s,r]);return!s&&(!e||(e==null?void 0:e.length)===0)?n.jsx(oe,{text:"Нет результатов",children:l}):n.jsxs(Og,{onScroll:m,children:[n.jsx("div",{className:"scrolable-content",children:(e||[]).map((b,h)=>{var f,v;const g=o?u!==((f=b.fio)==null?void 0:f.charAt(0)):!1;return g&&(u=((v=b.fio)==null?void 0:v.charAt(0))??"-"),n.jsxs(n.Fragment,{children:[g&&n.jsxs("div",{className:"alpabet-letter",children:[n.jsx(U,{size:4,align:"left",children:u}),n.jsx(ue,{})]}),t(b,(p==null?void 0:p.id.toString())===b.id,h)]})})}),i&&s&&n.jsx(Pe,{width:"40px",height:"40px"}),i&&!s&&n.jsx(j,{onClick:()=>a==null?void 0:a(r??null),text:"Загрузить еще"})]})}x.div`
    display: flex;
    flex-direction: column;
    height: 100%;

    @media (min-width: 1001px) {
        width: 600px;
        height: 600px;
    }
`;const $g=()=>[{title:"Запрос",field:"subject",priority:"one",search:!0,showFull:!0},{title:"Дата",field:"created",priority:"two",sort:!0,type:"date",align:"center",width:"120px"},{title:"Рег. номер",field:"num",priority:"three",align:"center",width:"170px"},{title:"Статус",field:"status",priority:"one",width:"130px",catalogs:[...Object.values(jt).map((e,t)=>({id:t.toString(),title:e}))??[]],render:e=>{const t=Ag(e);return n.jsx(K,{type:t==="Готово"?"success":t==="Отклонено"?"failure":"alert",title:t,align:"center",width:"100%",icon:null,maxWidth:"150px"})}},{title:"Структурное подразделение, адрес",priority:"five",field:"response_div",width:"360px"},{title:"Примечание",field:"comment",priority:"five"},{title:"Файлы",align:"center",field:"files_output",priority:"five",width:"150px",render:e=>!!e.length&&n.jsx(j,{onClick:()=>Cg(e),text:"Скачать",background:"transparent",textColor:_.green.main,width:"100%"})}],Ag=e=>{switch(e){case"На рассмотрении":return jt.pending;case"Принято в работу":return jt.pending;case"Получено":return jt.ready;default:return e}},Cg=e=>{e.map(t=>{const i=document.createElement("a");i.href=t.url,i.download=t.name,i.target="_blank",i.click(),i.remove()})},ar=(e,t)=>t.reduce((i,s)=>{const a=s.links.filter(r=>Se(r.title).includes(Se(e)));return a.length&&i.push({title:s.title,links:a}),i},[]),Rg=()=>{const e=" (Сервис временно недоступен)";return[{title:"Многофункциональный центр",links:[{link:Ls,title:"Справка о прослушанных дисциплинах за период обучения (справка об обучении)"},{link:ta,title:"Справка о прохождении обучения в университете (о статусе обучающегося) по месту требования"},{link:Ds,title:"Справка в социальные учреждения (Пенсионный фонд, УСЗН и пр.)"},{link:zs,title:"Справка-вызов"},{link:Ks,title:"Заявление на пересдачу для получения диплома с отличием"},{link:ea,title:"Запрос на изменение персональных данных"},{link:Ys,title:"Запрос на восстановление магнитного пропуска"},{link:Rs,title:"Уточнение паспортных данных"},{link:na,title:"Выдача лицензий и свидетельств о государственной аккредитации"},{link:ia,title:"Предоставление каникул в связи с окончанием университета"},{link:sa,title:"Предоставление академического отпуска"},{link:aa,title:"Отчисление по инициативе обучающегося"},{link:ra,title:"Продление промежуточной аттестации или ГИА"}]},{title:"Управление студенческим городком",links:[{link:Ms,title:"Предоставление права проживания (очная форма)",exceptionalFormEducationList:["Очно-заочная","Заочная"]},{link:Fs,title:"Предоставление права проживания (очно-заочная форма)",exceptionalFormEducationList:["Очная","Заочная"]},{link:Us,title:"Предоставление права проживания (заочная форма)",exceptionalFormEducationList:["Очная","Очно-заочная"]},{link:Hs,title:"Предоставление права проживания льготной категории граждан"},{link:Bs,title:"Предоставление права проживания в период академического отпуска",exceptionalFormEducationList:["Очно-заочная","Заочная"]},{link:Ws,title:"Предоставление права проживания в семейной комнате",exceptionalFormEducationList:["Очно-заочная","Заочная"]},{link:Gs,title:"Переселение внутри общежития",exceptionalFormEducationList:["Заочная"]},{link:qs,title:"Переселение в другое общежитие",exceptionalFormEducationList:["Заочная"]},{link:Vs,title:"Расторжение договора найма"}]},{title:"Профсоюзная организация",links:[{link:Ni,title:"Вступить в Профсоюз",isExternalLink:!0,isOpenInNewWindow:!0},{link:Xs,title:"Оформить материальную поддержку остронуждающимся студентам (Дотацию)"},{link:Zs,title:"Заявка на материальную помощь"},{link:Ns,title:"Оформить социальную стипендию"},{link:Qs,title:"Отправить характеристику-рекомендацию на получение повышенной государственной академической стипендии"}]},{title:"Мобилизационный отдел"+e,disabled:kn,links:[{link:Js,title:"Отправить документы воинского учета"},{link:"",title:"Заполнить личную карточку обучающегося по воинскому учету для получения отсрочки от призывана военную службу"}]},{title:"Отдел платных образовательных услуг"+e,disabled:kn,links:[{link:Jt,title:"Оформить дополнительное соглашение к договору об обучении"},{link:Jt,title:"Отправить квитанцию об оплате обучения или пени"}]},{title:"Приемная комиссия",links:[{link:jo,isExternalLink:!0,title:"Изменение условий обучения (направление подготовки (специальность), форма), в том числе перевод с платного обучения на бесплатное"}]},{title:"Прочее",links:[{link:Is,title:" Произвольный запрос"}]}]},Ig=()=>[{title:"Цифровые сервисы",links:[{link:ga,title:"Актуализация контактных данных"},{link:fa,title:"Анкета для сверки данных"},{link:xa,title:"Выдача лицензий и свидетельств о государственной аккредитации"},{link:ma,title:"Получение нового компьютерного оборудования"},{link:ba,title:"Подключение компьютера, МФУ, телефона, WiFi"},{link:va,title:"Обслуживание принтеров, МФУ"},{link:ya,title:"Вопрос по СЭД Directum и 1С"},{link:wa,title:"Вопрос по Личному кабинету"},{link:_a,title:"Прочее ИТ-обслуживание"},{link:ja,title:"Справка с места работы"},{link:Ta,title:"Справка на визу"},{link:Ea,title:"Справка о стаже работы"},{link:ka,title:"Справка о количестве неиспользованных дней отпуска"},{link:Sa,title:"Копия трудовой книжки"},{link:Oa,title:"Копии документов из личного дела"},{link:Pa,title:"Справка о работе на условиях внешнего совместительства для внесения стажа в трудовую книжку"},{link:$a,title:"Справка об отпуске по уходу за ребенком до 1,5 и 3 лет"},{link:Ra,title:"Справка по форме 2-НДФЛ"},{link:Ia,title:"Справка о выплате (не выплате) единовременного пособия на рождение ребенка"},{link:Na,title:"Справка о ежемесячных выплатах сотрудника, находящегося в отпуске по уходу за ребенком (декрет)"}]},{title:"Прочее",links:[{link:Aa,title:"Произвольный запрос"},{link:Ni,title:"Вступить в Профсоюз",isExternalLink:!0}]},{title:"Экспедиция отдела контроля и делопроизводства",links:[{link:Ca,title:"Курьер"}]}],Ng=()=>[{title:"",links:[{link:Ua,title:"Заявление на трудоустройство по совместительству"},{link:Ba,title:"Заявление на перенос отпуска"},{link:La,title:"Заявление на увольнение"},{link:Fa,title:"Заявление о привлечении к работе в выходной день"},{link:Ma,title:"Заявление о предоставлении отпуска"},{link:Da,title:"Заявление на перевод"},{link:za,title:"Заявление о предоставлении дополнительного отпуска по коллективному договору"}]}],Lg=(e,t)=>!(t!=null&&t.length)||!e?!0:!(t!=null&&t.includes(e)),Dg=x.div`
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
`,zg=({isTeachers:e=!1,currentFormEducation:t})=>{const{close:i}=J(),s=e?Ig():Rg(),[a,r]=c.useState(""),[o,l]=c.useState(s);return n.jsxs(Dg,{children:[n.jsx(U,{size:3,align:"left",bottomGap:!0,children:"Создать заявку"}),n.jsx(ks,{whereToSearch:s,searchEngine:ar,setResult:l,placeholder:"Поиск заявок",setExternalValue:r}),n.jsx("div",{className:"list",children:n.jsxs("div",{className:"links-wrapper",children:[(o??s).map(d=>n.jsxs("div",{className:"link-list",children:[n.jsx(U,{size:4,align:"left",bottomGap:!0,children:d.title}),!d.disabled&&n.jsx("div",{className:"links",children:d.links.map((p,u)=>{if(!(p.disabled||!Lg(t,p.exceptionalFormEducationList)))return p.isExternalLink?n.jsx("a",{href:p.link,target:p.isOpenInNewWindow?"_blank":"_self",rel:"noreferrer",children:p.title},p.link+u):n.jsx(Y,{to:p.link,onClick:i,children:p.title},p.link+u)})})]},d.title)),!(o!=null&&o.length)&&!!a.length&&n.jsx(oe,{text:`По запросу ${a} ничего не найдено`})]})})]})},Mg=(e,t)=>e?Object.keys(e).find(i=>e[i].title===t):null,Fg=e=>{const[t,i]=c.useState(null),[s,a]=c.useState(null),[r,o]=c.useState(null),[l,d]=c.useState(null),[p,u]=c.useState(e),m=c.useCallback(h=>{var g,f;a(v=>(v&&v[h]&&delete v[h],{...v})),h===((g=t==null?void 0:t.column)==null?void 0:g.field)&&i(null),h===((f=r==null?void 0:r.column)==null?void 0:f.field)&&o(null)},[t,s,r]),b=c.useCallback(()=>{a(null),i(null),o(null)},[]);return c.useEffect(()=>{if(s)if(!l)d(h=>{const g=Object.values(s)[0].column;return h={[(g==null?void 0:g.field)??""]:{id:(g==null?void 0:g.field)??"",title:"Фильтр: "+(g==null?void 0:g.title)}},{...h}});else{const h=Object.values(s).find(g=>{var f;return!l[((f=g.column)==null?void 0:f.field)??""]});h&&d(g=>{var S,w;const f=((S=h.column)==null?void 0:S.field)??"",v="Фильтр: "+((w=h.column)==null?void 0:w.title);return g&&(g[f]={id:f,title:v}),{...g}})}t&&d(h=>{var v;const g=((v=t.column)==null?void 0:v.field)??"",f="Поиск";return h?h[g]={id:g,title:f}:h={[g]:{id:g,title:f}},{...h}}),r&&d(h=>{var v;const g=((v=r.column)==null?void 0:v.field)??"",f="Сортировка";return h?h[g]={id:g,title:f}:h={[g]:{id:g,title:f}},{...h}})},[t,s,r]),c.useEffect(()=>{var f;const h=t==null?void 0:t.column,g=(f=t==null?void 0:t.column)==null?void 0:f.field;if(t&&g){const v=e==null?void 0:e.filter(S=>Se(ye(S[g],h==null?void 0:h.type)).includes(Se(ye(t.value,h==null?void 0:h.type))));u(v)}else u(e)},[t]),c.useEffect(()=>{if(s){const h=e==null?void 0:e.filter(g=>!Object.values(s).find(f=>{var v;return g[((v=f.column)==null?void 0:v.field)??""]!==f.value.title}));u(h)}else d(h=>({...h})),u(e)},[s]),c.useEffect(()=>{var g;const h=((g=r==null?void 0:r.column)==null?void 0:g.field)??"";r?u(f=>{const v=[...f??[]];return v==null||v.sort((S,w)=>w[h]<S[h]?r.value==="asc"?1:-1:w[h]>S[h]?r.value==="asc"?-1:1:0),v}):(d(f=>{const v=Mg(f,"Сортировка");return f&&v&&delete f[v],{...f}}),u(e))},[r==null?void 0:r.value]),c.useEffect(()=>{u(e)},[e]),{sort:r,setSort:o,search:t,setSearch:i,resultData:p,filter:s,setFilter:a,filterList:l,setFilterList:d,onRemoveOne:m,onRemoveAll:b}},Ug=x.div`
    display: flex;
    align-items: center;
    width: 100%;
    font-size: 0.9em;
    background: ${({even:e})=>e?`${_.blue.transparent3}`:"transparent"};

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
`,rr=x.div`
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
`,Bg=x.div`
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
`,Hg=x.div`
    display: flex;
    align-items: center;
`,Wg=({columns:e,search:t,setSearch:i,filter:s,setFilter:a,sort:r,setSort:o})=>n.jsx(Bg,{children:e.map(l=>{var d,p,u,m;return n.jsxs(rr,{overflow:l.catalogs?"visible":"hidden",width:l.width,title:l.title,clickable:l.search,align:l.search?"space-between":l.align,showFull:l.showFull,className:((d=l.priority)==null?void 0:d.toString())??"one",onClick:()=>{l.search&&i({value:"",column:l}),l.sort&&o(b=>{const h=b!=null&&b.value?b.value==="desc"?"asc":null:"desc";return ca(h),h?{column:l,value:h}:null})},children:[!l.catalogs&&l.title,!l.catalogs&&!l.sort&&l.search&&n.jsx(pt,{className:"icon",style:{color:l.field===((p=t==null?void 0:t.column)==null?void 0:p.field)?"var(--reallyBlue)":"var(--text)"}}),l.sort&&n.jsx(Ti,{className:"icon",style:{color:l.field===((u=r==null?void 0:r.column)==null?void 0:u.field)?"var(--reallyBlue)":"var(--text)"}}),l.catalogs&&n.jsx(Hg,{children:n.jsx(gn,{appearance:!1,items:l.catalogs??[],setSelected:b=>a(h=>(b&&(h={...h,[l.field]:{column:l,value:b}}),h)),selected:(m=s==null?void 0:s[l.field])==null?void 0:m.value,placeholder:l.title})})]},l.title)})}),Vg=x.div`
    @media (min-width: 1001px) {
        max-width: 500px;
    }
`,Gg=({title:e,obj:t,columns:i})=>n.jsxs(Vg,{children:[n.jsx(U,{size:3,align:"left",bottomGap:!0,children:e}),i.map(s=>n.jsx(De,{keyStr:s.title,value:s.render?s.render(t[s.field],t):ye(t[s.field],s.type)},s.title))]}),or=({columns:e,el:t,index:i,onRowClick:s})=>{const{open:a}=J(),r=()=>a(n.jsx(Gg,{title:"Информация",obj:t,columns:e}));return n.jsx(Ug,{even:i%2===0,onClick:()=>s?s(t):r(),children:e.map(o=>{var l;return n.jsx(rr,{showFull:o.showFull,width:o.width,className:((l=o.priority)==null?void 0:l.toString())??"one",align:o.align,children:o.render?o.render(ye(t[o.field],o.type),t):ye(t[o.field],o.type)},o.field)})})},qg=x.div`
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
`,Yg=x.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 0;

    img {
        width: 35px;
        height: 35px;
    }
`,Kg=({data:e,loading:t,columns:i,maxOnPage:s,onRowClick:a,filter:r})=>{const[o,l]=c.useState(0),d=Math.ceil(((e==null?void 0:e.length)??0)/(s??1))-1,p=s?e==null?void 0:e.slice(o*s,(o+1)*s):e;return c.useEffect(()=>{l(0)},[r]),t?n.jsx(Yg,{children:n.jsx(Pe,{})}):n.jsxs(qg,{children:[p==null?void 0:p.map((u,m)=>n.jsx(or,{onRowClick:a,columns:i,el:u,index:m},m)),!(p!=null&&p.length)&&n.jsx(oe,{text:"Нет данных"}),n.jsx(pa,{pages:d,condition:!!s&&!!(p!=null&&p.length),currentPage:o,setCurrentPage:l})]})},Jg=x.div`
    display: flex;
    align-items: center;
    gap: 5px;
    transition: 0.2s;
    padding: ${({closed:e})=>e?"0px":"10px"};
    width: 100%;
    height: ${({closed:e})=>e?"0px":"60px"};
    opacity: ${({closed:e})=>e?"0":"1"};
    visibility: ${({closed:e})=>e?"hidden":"visible"};
`,Xg=e=>{switch(e){case"date":return"date";case"rub":return"number";default:return"text"}},Zg=({search:e,setSearch:t})=>{var i,s;return n.jsx(Jg,{closed:!(e!=null&&e.column),children:n.jsx(he,{value:(e==null?void 0:e.value)??"",setValue:a=>t(r=>r?(r.value=a,{...r}):null),width:"100%",type:Xg((i=e==null?void 0:e.column)==null?void 0:i.type),placeholder:(s=e==null?void 0:e.column)==null?void 0:s.title,leftIcon:n.jsx(pt,{}),minWidth:"auto"})})},Qg=(e,t)=>{if(!e)return{};const i=t.reduce((s,{field:a})=>(s[a]=[],s),{});return e==null||e.forEach(s=>{Object.entries(s).forEach(([a,r])=>{i[a]&&r&&i[a].push(r)})}),i};function ef(e){return Object.keys(e).map(t=>({title:"",field:t}))}const tf=({footer:e,columns:t,data:i})=>{if(!e)return null;const s=e(Qg(i,t));return n.jsxs(n.Fragment,{children:[n.jsx(ue,{}),n.jsx(or,{onRowClick:()=>null,columns:ef(s),el:s,index:1})]})},nf=x.div`
    width: 100%;
    box-shadow: var(--schedule-shadow);
    border-radius: var(--brLight);
    color: var(--text);
    background: var(--form);
    overflow: hidden;
`,sf=({columns:e,data:t,maxOnPage:i,onRowClick:s,footer:a,loading:r=!1})=>{const{sort:o,setSort:l,search:d,setSearch:p,resultData:u,filter:m,setFilter:b,filterList:h,setFilterList:g,onRemoveOne:f,onRemoveAll:v}=Fg(t);return n.jsxs(nf,{children:[n.jsx(la,{setList:g,padding:"0 10px",list:h,onRemoveOne:f,onRemoveAll:v}),n.jsx(Zg,{search:d,setSearch:p}),n.jsx(Wg,{sort:o,setSort:l,columns:e,search:d,setSearch:p,filter:m,setFilter:b}),n.jsx(Kg,{loading:r,onRowClick:s,filter:m,columns:e,data:u,maxOnPage:i}),n.jsx(tf,{footer:a,data:t,columns:e})]})},af=x.div`
    display: flex;
    align-items: center;
    color: var(--text);
    justify-content: center;

    @media (max-width: 1000px) {
        align-items: flex-start;
        overflow-y: auto;
        height: 100%;
    }
`,rf=x.div`
    display: flex;
    gap: 10px;
    align-items: center;
`,qx=({isTeachers:e})=>{const{data:{listApplication:t,dataUserApplication:i},error:s}=He.useApplications(),{open:a}=J();return n.jsx(pn,{load:()=>ke.getApplicationsFx(),loading:!t,error:s,data:t,children:n.jsx(af,{children:n.jsxs(hn,{maxWidth:"1500px",children:[n.jsx(K,{type:"info",title:"Информация",icon:n.jsx(lt,{}),children:"Данный сервис позволяет заказать необходимую справку, подать заявление, запрос. Статус (информация о степени готовности) заказанных справок меняется согласно действиям оператора. В колонке «Структурное подразделение, адрес» указывается название подразделения и адрес, куда необходимо приехать за готовым документом."}),n.jsx(rf,{children:n.jsx(j,{onClick:()=>a(n.jsx(zg,{isTeachers:e,currentFormEducation:i==null?void 0:i.educationForm})),text:"Подать заявку",background:"var(--reallyBlue)",textColor:"#fff",icon:n.jsx(rt,{}),width:"150px",minWidth:"150px",height:"36px",fixedInMobile:!1})}),n.jsx(sf,{loading:!t,columns:$g(),data:t,maxOnPage:7})]})})})},of=x.div`
    display: flex;
    align-items: center;
    color: var(--text);
    justify-content: center;

    @media (max-width: 1000px) {
        align-items: flex-start;
        overflow-y: auto;
        height: 100%;
    }
`,lf=x.div`
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
`,Yx=({})=>{const{data:{listApplication:e},error:t}=He.useApplications(),{close:i}=J(),s=Ng(),[a,r]=c.useState(""),[o,l]=c.useState(s);return n.jsx(pn,{load:()=>ke.getApplicationsFx(),loading:!e,error:t,data:e,children:n.jsx(of,{children:n.jsxs(hn,{maxWidth:"750px",children:[n.jsx(K,{type:"info",title:"Информация",icon:n.jsx(lt,{}),children:"Данный сервис создан для упрощения оборота кадровых документов внутри Университета."}),n.jsxs(lf,{children:[n.jsx(U,{size:3,align:"left",bottomGap:!0,children:"Создать заявление"}),n.jsx(ks,{whereToSearch:s,searchEngine:ar,setResult:l,placeholder:"Поиск заявления",setExternalValue:r}),n.jsx("div",{className:"list",children:n.jsxs("div",{className:"links-wrapper",children:[(o??s).map(d=>n.jsx("div",{className:"link-list",children:!d.disabled&&n.jsx("div",{className:"links",children:d.links.map(p=>p.isExternalLink?n.jsx("a",{href:p.link,target:p.isOpenInNewWindow?"_blank":"_self",rel:"noreferrer",children:p.title},p.title):n.jsx(Y,{to:p.link,onClick:i,children:p.title},p.link))})},d.title)),!(o!=null&&o.length)&&!!a.length&&n.jsx(oe,{text:`По запросу ${a} ничего не найдено`})]})})]})]})})})};x.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--theme);
    z-index: 50;
`;x(ft)`
    opacity: 0;
    animation: 0.5s defaultFadeIn forwards;
    animation-delay: 2s;
    height: 100%;
    padding: 20px;
`;const xi={isOpen:!1,pages:[],currentPage:0},cf=()=>P(df),lr=k(),cr=k(),dr=k(),pr=k(),df=W(xi).on(lr,(e,{pages:t})=>({isOpen:!0,pages:t,currentPage:0})).on(cr,e=>({pages:e.pages,currentPage:e.currentPage,isOpen:!1})).on(dr,(e,{value:t})=>({...e,currentPage:t})).on(pr,()=>({...xi})),mn={useStory:cf},je={open:lr,close:cr,clearStore:pr,changeCurrentPage:dr};x($t)`
    overflow: hidden;
    position: relative;
    background: ${({background:e})=>e??"var(--schedule)"};
    cursor: pointer;
    border-radius: var(--brLight);
    width: 110px;
    height: 180px;

    .title {
        position: absolute;
        bottom: 10px;
        left: 10px;
        color: ${({color:e})=>e??"var(--text)"};
    }
`;const pf=x.strong`
    &:hover {
        text-decoration: underline;
        cursor: pointer;
    }
`,Kx=({fio:e})=>{const{open:t}=J();return n.jsx(pf,{onClick:()=>t(n.jsx(tr,{name:e,isMe:!1})),children:e})},Jx=x.div`
    display: flex;
    align-items: ${({alignItems:e})=>e??"center"};
    justify-content: center;
    height: ${({height:e})=>e??"auto"};
    color: var(--text);
    background: ${({background:e})=>e};
    padding: ${({padding:e})=>e};
    width: 100%;
`,uf=()=>n.jsx("div",{className:"left",children:n.jsxs(se,{scroll:!1,height:"100%",verticalAlign:"space-between",position:"static",children:[n.jsx(At,{width:"50px",short:!0,className:"logo first"}),n.jsxs(se,{gap:12,scroll:!1,height:"100%",verticalAlign:"center",children:[n.jsx(Y,{to:vn,tabIndex:-1,children:n.jsx(j,{padding:"0",icon:n.jsx(ot,{}),text:"Обратная связь",height:"25px",background:"transparent",textColor:"var(--theme-mild-opposite)"})}),n.jsx(Y,{to:wr,tabIndex:-1,children:n.jsx(j,{padding:"0",icon:n.jsx(eo,{}),text:"Узнать свой логин ЕУЗ",height:"25px",background:"transparent",textColor:"var(--theme-mild-opposite)"})}),n.jsx(Y,{to:yr,tabIndex:-1,children:n.jsx(j,{padding:"0",icon:n.jsx(at,{}),text:"Вниманию студентов 1 курса!",height:"25px",background:"transparent",textColor:"var(--theme-mild-opposite)"})}),n.jsx(Y,{to:_r,tabIndex:-1,children:n.jsx(j,{padding:"0",icon:n.jsx(at,{}),text:"Вниманию сотрудников!",height:"25px",background:"transparent",textColor:"var(--theme-mild-opposite)"})}),n.jsx(ue,{}),n.jsx(Y,{to:vr,tabIndex:-1,children:n.jsx(j,{padding:"0",icon:n.jsx(to,{}),text:"Не получается войти",height:"25px",align:"left",background:"transparent",textColor:"var(--red)"})})]}),n.jsx(un,{text:"Перейти к старому дизайну",onClick:()=>{localStorage.setItem("useOldVersion","true")},background:"transparent",textColor:"var(--reallyBlue)",icon:n.jsx(rn,{}),align:"left",padding:"0",width:"100%",href:`${de}/index.php`})]})}),hf=()=>{const{search:e}=_i();return G.useMemo(()=>new URLSearchParams(e),[e])},gf=()=>{const e=hf(),t=e.get("login"),i=e.get("password"),[s,a]=c.useState(t??""),[r,o]=c.useState(i??""),[l,d]=c.useState(!1),p=!!r&&!!s,u=Et.login,m=g=>{d(g.getModifierState("CapsLock")),g.key==="Enter"&&u({login:s,password:r})},b=g=>{Et.changeSavePassword({savePassword:g})},h=()=>u({login:s,password:r});return c.useEffect(()=>{t&&i&&u({login:t,password:i})},[t,i]),{isSubmitActive:p,handleSavePassword:b,handleKeyPress:m,handleLogin:h,password:r,setPassword:o,capsLock:l,login:s,setLogin:a}},ff=()=>{const{loading:e,error:t,data:i}=Q.useUser(),{isSubmitActive:s,handleKeyPress:a,handleSavePassword:r,handleLogin:o,password:l,setPassword:d,capsLock:p,login:u,setLogin:m}=gf();return n.jsx("div",{className:"right",onKeyDown:a,children:n.jsxs(se,{gap:16,horizontalAlign:"center",position:"static",verticalAlign:"space-between",height:"100%",scroll:!1,children:[n.jsx(At,{width:"50px",short:!0,className:"logo second"}),n.jsx(U,{size:3,align:"left",children:"Личный кабинет"}),n.jsxs(se,{gap:16,horizontalAlign:"center",scroll:!1,children:[n.jsx(U,{size:4,align:"left",children:"Вход"}),n.jsx(Ve,{children:"Вход в личный кабинет происходит через единую учетную запись (ЕУЗ)"}),n.jsx(K,{type:"failure",visible:!!t,children:t}),n.jsx(K,{type:"success",visible:(i==null?void 0:i.isAuthenticated)??!1,children:"Вы вошли в аккаунт"}),n.jsx(he,{value:u,setValue:m,title:"Логин",placeholder:"Введите логин"}),n.jsx(he,{value:l,setValue:d,title:"Пароль",placeholder:"Введите пароль",type:"password",alertMessage:p?"Включен Capslock":void 0}),n.jsx(ve,{text:"Оставаться в системе",checked:i.savePassword,setChecked:r})]}),n.jsx(Es,{text:"Вход",action:o,isLoading:e,completed:!1,setCompleted:()=>null,isActive:s})]})})},xf=x($t)`
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
`,mf=()=>{const{data:{isAuthenticated:e}}=Q.useUser();return n.jsxs(xf,{isAuthenticated:e??!1,height:"fit-content",orientation:"horizontal",gap:"4px",maxWidth:"fit-content",padding:"0",children:[n.jsx(uf,{}),n.jsx(ff,{})]})},bf=x.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--theme);
    flex-direction: column;

    @media (max-width: ${Oo}) {
        justify-content: flex-start;
        align-items: flex-start;
    }
`,vf=()=>n.jsx(bf,{children:n.jsx(mf,{})}),yf=c.lazy(()=>y(()=>import("./index-0b67fa35.js"),["assets/index-0b67fa35.js","assets/vendor-0c76c893.js","assets/page-link-a3eaaa07.js","assets/page-link-content-72e3200e.js","assets/get-correct-word-form-c0a854e8.js","assets/get-short-string-60b0c4d4.js","assets/found-pages-1cc530a7.js","assets/search-c37a88a7.js","assets/links-list-96fbb04d.js"])),ur=c.lazy(()=>y(()=>import("./index-f39b936b.js"),["assets/index-f39b936b.js","assets/vendor-0c76c893.js","assets/student-api-8e666bb3.js","assets/index-5cc683df.js","assets/index-80d7ddc5.js","assets/index-80b0a22e.js"])),wf=c.lazy(()=>y(()=>import("./index-e5ee48fd.js"),["assets/index-e5ee48fd.js","assets/vendor-0c76c893.js","assets/index-5cc683df.js","assets/index-80d7ddc5.js","assets/index-80b0a22e.js"])),_f=c.lazy(()=>y(()=>import("./index-6e410e65.js"),["assets/index-6e410e65.js","assets/vendor-0c76c893.js","assets/index-80b0a22e.js"]));c.lazy(()=>y(()=>import("./index-fb29a8a6.js"),["assets/index-fb29a8a6.js","assets/vendor-0c76c893.js","assets/index.esm-aaf37469.js"]));const jf=c.lazy(()=>y(()=>import("./index-3afd5152.js"),["assets/index-3afd5152.js","assets/vendor-0c76c893.js","assets/index-d56abb9b.js"])),hr=c.lazy(()=>y(()=>import("./index-cd480a46.js"),["assets/index-cd480a46.js","assets/vendor-0c76c893.js","assets/index-80b0a22e.js","assets/help-links-d2ea4c54.js"])),Tf=c.lazy(()=>y(()=>import("./index-da26b6d2.js"),["assets/index-da26b6d2.js","assets/vendor-0c76c893.js","assets/index-80b0a22e.js"])),Ef=c.lazy(()=>y(()=>import("./index-99d392e6.js"),["assets/index-99d392e6.js","assets/vendor-0c76c893.js","assets/index-80b0a22e.js","assets/get-short-string-60b0c4d4.js"])),kf=c.lazy(()=>y(()=>import("./index-76b6777f.js"),["assets/index-76b6777f.js","assets/vendor-0c76c893.js","assets/links-list-96fbb04d.js","assets/page-link-a3eaaa07.js","assets/page-link-content-72e3200e.js","assets/get-correct-word-form-c0a854e8.js","assets/get-short-string-60b0c4d4.js","assets/week-schedule-ef3d4f66.js","assets/index-b819e842.js","assets/qr-code-562c0cca.js","assets/index-80b0a22e.js"])),Sf=c.lazy(()=>y(()=>import("./index-b02949d4.js"),["assets/index-b02949d4.js","assets/vendor-0c76c893.js","assets/teacher-data-f378893a.js"])),Of=c.lazy(()=>y(()=>import("./index-45143776.js"),["assets/index-45143776.js","assets/vendor-0c76c893.js","assets/qr-code-562c0cca.js","assets/index-d56abb9b.js","assets/index-80b0a22e.js"])),Pf=c.lazy(()=>y(()=>import("./index-02dfe26a.js"),["assets/index-02dfe26a.js","assets/vendor-0c76c893.js","assets/index-80b0a22e.js"])),$f=c.lazy(()=>y(()=>import("./index-a2812c8b.js"),["assets/index-a2812c8b.js","assets/vendor-0c76c893.js","assets/index-ea76b884.js","assets/week-schedule-ef3d4f66.js","assets/get-correct-word-form-c0a854e8.js","assets/get-short-string-60b0c4d4.js","assets/index-b819e842.js","assets/index-80d7ddc5.js","assets/student-api-8e666bb3.js","assets/page-link-content-72e3200e.js","assets/page-link-a3eaaa07.js","assets/found-pages-1cc530a7.js"])),Af=c.lazy(()=>y(()=>import("./index-cb4a2849.js"),["assets/index-cb4a2849.js","assets/vendor-0c76c893.js","assets/page-link-a3eaaa07.js","assets/page-link-content-72e3200e.js","assets/get-correct-word-form-c0a854e8.js","assets/get-short-string-60b0c4d4.js","assets/found-pages-1cc530a7.js","assets/customize-leftside-bar-item-b83ced5a.js","assets/index.esm-aaf37469.js","assets/search-c37a88a7.js","assets/index-b819e842.js","assets/index-e9148865.js"])),Cf=c.lazy(()=>y(()=>import("./index-2974a0e6.js"),["assets/index-2974a0e6.js","assets/vendor-0c76c893.js"])),Rf=c.lazy(()=>y(()=>import("./index-c998e501.js"),["assets/index-c998e501.js","assets/vendor-0c76c893.js"])),If=c.lazy(()=>y(()=>import("./index-0263a77e.js"),["assets/index-0263a77e.js","assets/vendor-0c76c893.js","assets/customize-leftside-bar-item-b83ced5a.js","assets/page-link-content-72e3200e.js","assets/get-correct-word-form-c0a854e8.js","assets/get-short-string-60b0c4d4.js","assets/index.esm-aaf37469.js"])),Nf=c.lazy(()=>y(()=>import("./index-fae476d6.js"),["assets/index-fae476d6.js","assets/vendor-0c76c893.js"])),Lf=c.lazy(()=>y(()=>import("./index-18cfd910.js"),["assets/index-18cfd910.js","assets/vendor-0c76c893.js","assets/index-ea76b884.js","assets/week-schedule-ef3d4f66.js","assets/get-correct-word-form-c0a854e8.js","assets/get-short-string-60b0c4d4.js","assets/index-b819e842.js","assets/index-80d7ddc5.js","assets/student-api-8e666bb3.js","assets/page-link-content-72e3200e.js","assets/page-link-a3eaaa07.js","assets/found-pages-1cc530a7.js"])),Df=c.lazy(()=>y(()=>import("./index-29a9fd99.js"),["assets/index-29a9fd99.js","assets/vendor-0c76c893.js","assets/index-cb3975f1.js","assets/index-80b0a22e.js"])),zf=c.lazy(()=>y(()=>import("./index-9fd1bf0b.js"),["assets/index-9fd1bf0b.js","assets/vendor-0c76c893.js","assets/index-80b0a22e.js"])),Mf=c.lazy(()=>y(()=>import("./index-eb0803bd.js"),["assets/index-eb0803bd.js","assets/vendor-0c76c893.js","assets/index-80b0a22e.js","assets/help-links-d2ea4c54.js"])),Ff=c.lazy(()=>y(()=>import("./index-24c0997f.js"),["assets/index-24c0997f.js","assets/vendor-0c76c893.js","assets/index-80b0a22e.js","assets/help-links-d2ea4c54.js"])),Uf=c.lazy(()=>y(()=>import("./index-6b2738c8.js"),["assets/index-6b2738c8.js","assets/vendor-0c76c893.js"])),gr="/login",Bf="/forgot-password",Hf="/medical-certificate",fr="/all",bn="/home",xr="/profile",nn="/chat",Xx=nn+"/:chatId",Wf="/electronic-interaction-agreement",Vf="/payments",It="/schedule",mr="/all-students",Gf="/all-students/:filter",br="/all-teachers",vn="/feedback",vr="/cant-access",yr="/memo-freshmen",wr="/get-your-login",_r="/memo-teacher",ge="/settings",Zx=ge+"/:id",qf=ge+"/appearance",Yf=ge+"/personal",Kf=ge+"/security",Jf=ge+"/home-page",Xf=ge+"/customize-menu",Zf="/instructions",yn="/project-activity",wn="/alerts",jr="/helpful-information",Qf=It+"/:filter",ex=jr+"/:infoType";var tx=(e=>(e.GENERAL="Основное",e.FINANCES_DOCS="Финансы и документы",e.LEARNING_ACTIVITIES="Учебная деятельность",e.OTHER="Находится в разработке",e.COMMUNICATION="Коммуникация",e))(tx||{});const nx=[{id:0,title:"",icon:"",path:gr,Component:vf},{id:1,title:"",icon:"",path:Bf,Component:Tf},{id:2,title:"Обратная связь",icon:n.jsx(ot,{}),path:vn,Component:hr},{id:3,title:"Не получается войти в Личный кабинет",icon:n.jsx(Fe,{}),path:vr,Component:_f},{id:4,title:"Узнать свой логин ЕУЗ",icon:"",path:wr,Component:zf},{id:5,title:"Вниманию студентов 1 курса!",icon:"",path:yr,Component:Mf},{id:6,title:"Вниманию сотрудников!",icon:"",path:_r,Component:Ff}],Tr={all:{id:"all",title:"Все разделы",icon:n.jsx(no,{}),path:fr,Component:yf,color:"lightGreen",isTemplate:!1,show:!1,group:"GENERAL",withoutBackButton:!0},settings:{id:"settings",title:"Настройки",icon:n.jsx(an,{}),path:ge,Component:Af,color:"grey",isTemplate:!0,show:!0,group:"GENERAL"},"electronic-interaction-agreement":{id:"electronic-interaction-agreement",title:"Соглашение об электронном взаимодействии",shortTitle:"Соглашение об электр...",icon:n.jsx(io,{}),path:Wf,Component:jf,color:"blue",isTemplate:!1,group:"FINANCES_DOCS"},payments:{id:"payments",title:"Договоры и оплаты",icon:n.jsx(so,{}),path:Vf,Component:Of,color:"lightGreen",isTemplate:!1,group:"FINANCES_DOCS"},doclist:{id:"doclist",title:"Ознакомление с документами",shortTitle:"Ознакомление с док...",icon:n.jsx(A,{}),path:ha,Component:()=>n.jsx(Df,{}),color:"blue",isTemplate:!1,group:"FINANCES_DOCS"},alerts:{id:"alerts",title:"Оповещения",icon:n.jsx(ao,{}),path:wn,Component:Ef,color:"blue",isTemplate:!1,group:"COMMUNICATION"},home:{id:"home",title:"Главная",icon:n.jsx($i,{}),path:bn,Component:kf,color:"blue",isTemplate:!1,group:"GENERAL",withoutHeader:!0},profile:{id:"profile",title:"Профиль",icon:n.jsx(ro,{}),path:xr,Component:Pf,color:"purple",isTemplate:!1,group:"GENERAL",withoutHeader:!0},chat:{id:"chat",title:"Сообщения",icon:n.jsx(oo,{}),path:nn,Component:()=>ce({oldVersionUrl:nn}),color:"red",isTemplate:!0,group:"OTHER"},schedule:{id:"schedule",title:"Расписание",icon:n.jsx(lo,{}),path:It,Component:$f,color:"pink",isTemplate:!1,group:"LEARNING_ACTIVITIES"},"all-students":{id:"all-students",title:"Студенты",icon:n.jsx(sn,{}),path:mr,Component:ur,color:"lightBlue",isTemplate:!1,group:"COMMUNICATION"},"all-teachers":{id:"all-teachers",title:"Сотрудники",icon:n.jsx(Ei,{}),path:br,Component:wf,color:"orange",isTemplate:!1,group:"COMMUNICATION"},feedback:{id:"feedback",title:"Обратная связь",icon:n.jsx(ot,{}),path:vn,Component:hr,color:"blue",isTemplate:!1,group:"COMMUNICATION"},instructions:{id:"instructions",title:"Полезная информация",icon:n.jsx(co,{}),path:Zf,Component:Sf,color:"blue",isTemplate:!1,group:"GENERAL",show:!1},"medical-certificate":{id:"medical-certificate",title:"Предоставление медицинских справок",icon:n.jsx(po,{}),path:Hf,Component:Uf,color:"blue",isTemplate:!1,group:"GENERAL"}},Er={"teachers-schedule":{id:"teachers-schedule",title:"Расписание преподавателя",icon:n.jsx(I,{}),path:Qf,Component:Lf,color:"blue",isTemplate:!1,show:!1,group:"OTHER"},"filtered-all-students":{id:"filtered-all-students",title:"Все студенты",icon:n.jsx(sn,{}),path:Gf,Component:ur,color:"blue",isTemplate:!1,show:!1,group:"OTHER"},"settings-appearance":{id:"settings-appearance",title:"Настройки. Внешний вид",icon:n.jsx(uo,{}),path:qf,Component:Rf,color:"purple",isTemplate:!0,show:!0,group:"OTHER"},"settings-personal":{id:"settings-personal",title:"Настройки. Аккаунт",icon:n.jsx(ho,{}),path:Yf,Component:Cf,color:"pink",isTemplate:!0,show:!0,group:"OTHER"},"settings-security":{id:"settings-security",title:"Настройки. Безопасность",icon:n.jsx(go,{}),path:Kf,Component:Nf,color:"green",isTemplate:!0,show:!0,group:"OTHER"},"settings-home-page":{id:"settings-home-page",title:"Настройки. Домашний экран",icon:n.jsx($i,{}),path:Jf,Component:If,color:"blue",isTemplate:!0,show:!0,group:"OTHER"},"settings-customize-menu":{id:"settings-customize-menu",title:"Настройки. Меню",icon:n.jsx(fo,{}),path:Xf,Component:()=>n.jsx(n.Fragment,{}),color:"red",isTemplate:!0,show:!0},"useful-info-template":{id:"useful-info-template",title:"Полезная информация",icon:"",path:ex,Component:fn,color:"grey",isTemplate:!0,show:!0}},ix=()=>{const{allRoutes:e}=we.useMenu();return e?n.jsxs(Ai,{children:[Object.values(e).map(({path:t,Component:i,isTemplate:s})=>n.jsx(Ci,{path:t,component:i,exact:!s},t)),n.jsx(Ri,{exact:!0,to:bn})]}):null},sx=G.memo(ix),ax=()=>{const{data:{user:e}}=Q.useUser(),[t,i]=c.useState(!1),s=a=>{const r=localStorage.getItem("lastLocalAccess")||a,o=new Date(To);new Date(a)<o&&new Date(r)<o&&(localStorage.setItem("lastLocalAccess",new Date().toISOString()),i(!0))};return c.useEffect(()=>{e&&s(e.lastaccess)},[e]),t},rx=()=>{var o,l;const e=dt(),{data:t}=Q.useUser(),i=(o=t.user)!=null&&o.subdivisions?{...Zt(),...Qt()}:{...Ne(),...Xt()},[{exactCurrentPage:s,currentPage:a},r]=c.useState({currentPage:Object.values(i).find(d=>e.location.pathname.includes(d.path))??i[0],exactCurrentPage:Object.values(i).find(d=>e.location.pathname.includes(d.path))??null});return c.useEffect(()=>{r({currentPage:Object.values(i).find(d=>e.location.pathname.includes(d.path))??i[0],exactCurrentPage:Object.values(i).find(d=>d.path.includes(e.location.pathname))??null})},[(l=t.user)==null?void 0:l.subdivisions]),c.useEffect(()=>e.listen(d=>{r({currentPage:Object.values(i).find(p=>d.pathname.includes(p.path))??i[0],exactCurrentPage:Object.values(i).find(p=>p.path.includes(d.pathname))??null})}),[e,i]),{currentPage:a,exactCurrentPage:s}},ox=x.div`
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
`,lx=()=>{const{open:e,content:t,position:i}=nh.useContextMenu(),s=c.useRef(null);return We(s,()=>ie.close()),n.jsx(Rt,{isOpen:e,children:n.jsx(ox,{isVisible:e,ref:s,left:i.x,top:i.y,onClick:a=>{a.stopPropagation()},children:t})})},cx=["loading"],mi=x.div.withConfig({shouldForwardProp:e=>!cx.includes(e)})`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
        45deg,
        var(--theme),
        var(--theme),
        var(--theme),
        ${_.lightBlue.main},
        var(--theme)
    );
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: ${({loading:e})=>!e&&"load_finished 1.8s forwards reverse"};
    animation-delay: 0.8s;
    background-size: 500% 500%;
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
            transform: scale(1);
            opacity: 1;
        }
        100% {
            filter: invert(var(--double-invert));
            opacity: 0;
            transform: scale(0.9);
        }
    }

    @keyframes load_finished {
        0% {
            background-size: 100% 12000%;
            opacity: 0;
            visibility: hidden;
        }
        20% {
            background-size: 100% 12000%;
            opacity: 0;
            visibility: hidden;
        }
        50% {
            background-size: 100% 12000%;
            opacity: 1;
            visibility: visible;
        }
        100% {
            background-size: 500% 500%;
            opacity: 1;
            visibility: visible;
        }
    }

    img {
        animation: ${({loading:e})=>!e&&"logo 0.6s forwards"};
        animation-delay: ${({loading:e})=>e?"0s":"1s"};
        width: 100px;
    }

    @media (max-width: 1000px) {
        background-size: 700% 100%;
        @keyframes load_finished {
            0% {
                background-size: 100% 12000%;
                opacity: 0;
                visibility: hidden;
            }
            100% {
                background-size: 700% 100%;
                opacity: 1;
                visibility: visible;
            }
        }
    }
`,dx=({loading:e})=>{const{error:t}=Q.useUser();return t?n.jsx(mi,{loading:!0,children:n.jsx(oe,{text:"Нет подключения к интернету",children:n.jsx(j,{onClick:()=>Pc.getUserFx(JSON.parse(localStorage.getItem("token")??"")),text:"Попробовать снова",icon:n.jsx(wi,{})})})}):n.jsxs(mi,{loading:e,children:[n.jsx(At,{short:!0,width:"100px"}),e&&n.jsx(Pe,{})]})},px=x.div`
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
`,ux=({filled:e,playing:t,isLast:i,onClose:s})=>{const{currentPage:a}=mn.useStory();return n.jsx(px,{filled:e,playing:t,children:n.jsx("div",{className:"inner-line",onAnimationEnd:()=>i?s():je.changeCurrentPage({value:a+1})})})},hx=x(ft)`
    position: absolute;
    top: 30px;
    left: 0;
    padding: 0px 30px;
    z-index: 2;

    svg {
        min-width: 20px;
        height: 20px;
    }
`,gx=({playing:e,pages:t,onClose:i})=>{const{currentPage:s}=mn.useStory();return n.jsxs(hx,{height:"10px",verticalAlign:"center",direction:"horizontal",width:"100%",children:[Array(t).fill(0).map((a,r)=>n.jsx(ux,{onClose:i,isLast:r+1===t,playing:s===r?e:null,filled:s>r?100:s===r?void 0:0},r)),e?n.jsx(mo,{}):n.jsx(xo,{}),n.jsx(j,{minWidth:"25px",width:"25px",height:"25px",icon:n.jsx(Oe,{}),onClick:i})]})},fx=e=>`translate(${e.horizontal==="center"?"-50%":"0px"}, ${e.vertical==="center"?"-50%":"0px"})})`,xx=x($t)`
    overflow: hidden;
    position: relative;
    background: ${({background:e})=>e};
    display: flex;
    justify-content: ${({imageAlign:e})=>(e==null?void 0:e.horizontal)==="left"?"flex-start":(e==null?void 0:e.horizontal)==="right"?"flex-end":"center"};
    align-items: center;
    user-select: none;

    .text-content {
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
        transform: ${({align:e})=>fx(e)};
        text-align: ${({textAlign:e})=>e??"left"};
    }

    @media (max-width: 700px) {
        border-radius: 0px;
    }
`,mx=({background:e,align:t,image:i,color:s,title:a,text:r,children:o,setPlaying:l,link:d,imageAlign:p,imageSize:u={width:"auto",height:"100%"},textAlign:m="left"})=>{const b=dt();return n.jsxs(xx,{imageAlign:p,onClick:()=>l(h=>!h),background:e,align:t,padding:"0",height:"100%",color:s,children:[i&&n.jsx(Ts,{src:i,loading:!1,width:u.width,height:u.height}),n.jsxs("div",{className:"text-content",children:[n.jsx(U,{size:2,align:m,children:a}),n.jsx(Ve,{fontSize:"1.1em",align:m,children:r}),!!(d!=null&&d.text)&&n.jsx(j,{onClick:()=>{b.push(d.to),je.close()},text:d.text}),o&&n.jsx("div",{className:"content-children",children:o})]})]})},bx=x.div`
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
`,bi=x.div`
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
`,vx=()=>{const{pages:e,isOpen:t,currentPage:i}=mn.useStory(),s=c.useRef(null);We(s,()=>je.close());const[a,r]=c.useState(!0),o=e[i];return n.jsx(Rt,{isOpen:t,children:n.jsx(bx,{isOpen:t,ref:s,children:e.length!==0&&n.jsxs(n.Fragment,{children:[n.jsx(gx,{pages:e.length,onClose:()=>je.close(),playing:a}),n.jsx(bi,{left:"15px",onClick:()=>{i!==0&&je.changeCurrentPage({value:i-1}),r(!0)},children:n.jsx(ut,{})}),n.jsx(mx,{setPlaying:r,currentPage:i,...o}),n.jsx(bi,{right:"15px",onClick:()=>{i!==e.length-1?je.changeCurrentPage({value:i+1}):je.close(),r(!0)},children:n.jsx(kt,{})})]})})})},yx=x.div`
    display: flex;
    background: var(--theme);
    height: 100vh;
`,wx=x.div`
    width: 100%;
    height: 100%;
    z-index: 3;
    background: var(--theme);
    overflow: hidden;

    @media (max-width: 1000px) {
        font-size: 0.9em;
    }
`,_x=x.div`
    position: relative;
    overflow-x: hidden;
    overflow-y: auto;
    width: 100%;
    height: 100%;

    ${({withHeader:e})=>e?En`
                  height: calc(100% - var(--header-height));
              `:En`
                  height: 100%;
              `}
    }

    @media (max-width: 1000px) {
        margin-bottom: var(--mobile-bottom-menu-height);
        height: ${({withHeader:e})=>e?"calc(100% - var(--mobile-bottom-menu-height) - var(--header-height))":"calc(100% - var(--mobile-bottom-menu-height))"};
    }
`,jx=()=>{var o;const{data:{user:e}}=Q.useUser(),{open:t}=J(),i=ax(),{currentPage:s,exactCurrentPage:a}=rx(),{height:r}=Ge();return c.useEffect(()=>{e&&Ao.getLocalSettingsFx(e.id)},[e]),gt(),c.useEffect(()=>{z.evokePopUpMessage({message:n.jsxs(n.Fragment,{children:["Если вы хотите перейти ",n.jsx("br",{})," в старый личный кабинет,"," ",n.jsx("a",{href:`${de}/index.php`,children:"нажмите сюда"})]}),type:"info",time:5e3}),e!=null&&e.hasAlerts&&setTimeout(()=>z.evokePopUpMessage({message:n.jsx(Y,{to:wn,children:"У вас есть новые оповещения"}),type:"tip",time:5e3}),5e3)},[e]),c.useEffect(()=>{i&&i&&t(n.jsx(xn,{}))},[i]),n.jsxs(yx,{style:{height:r},children:[n.jsx(dx,{loading:!e}),n.jsx(vx,{}),n.jsx(zh,{}),n.jsxs(wx,{children:[n.jsx(gh,{currentPagePair:{currentPage:s,exactCurrentPage:a}}),n.jsx(_x,{withHeader:!((o=a??s)!=null&&o.withoutHeader),children:n.jsx(c.Suspense,{fallback:null,children:n.jsx(sx,{})})}),n.jsx(yg,{})]}),n.jsx(Vh,{}),n.jsx(Fh,{}),n.jsx(qh,{}),n.jsx(lx,{}),n.jsx(Sg,{})]})},Tx=()=>{const{data:{isAuthenticated:e,user:t}}=Q.useUser(),{data:i}=Ht.selectors.useData(),{settings:s}=on.useSettings(),[a,r]=c.useState(e);return c.useEffect(()=>(e?(setTimeout(()=>{r(!0)},1e3),Ht.effects.getFx(),ke.getUserDataApplicationsFx(),ke.getWorkerPosts()):r(!1),()=>{r(!1)}),[e]),c.useEffect(()=>{t&&s&&xt.defineMenu({user:t,adminLinks:i,homeRoutes:s["settings-home-page"].property.pages})},[t,i,s]),e&&a?n.jsx(jx,{}):n.jsx(c.Suspense,{fallback:null,children:n.jsxs(Ai,{children:[nx.map(({path:o,Component:l},d)=>n.jsx(Ci,{path:o,component:l,exact:!0},d)),n.jsx(Ri,{exact:!0,to:gr})]})})},Ex=x.div`
    background: var(--theme);
    overflow-y: auto;
    height: 100vh;
`,kx=()=>(gt(),n.jsx(Co,{children:n.jsx(bo,{basename:"/",children:n.jsx(Ex,{children:n.jsx(Tx,{})})})})),Sx=vo`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: "Montserrat", sans-serif;
		-webkit-tap-highlight-color:  rgba(255, 255, 255, 0);
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
			background-color: var(--mild-theme);
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
        --header-height: 45px;
        --mobile-bottom-menu-height: 60px;
	}

	html[data-theme=dark] {
		--blue: #6d86e3;
		--primary-background: rgb(34, 34, 34);
		--mild-theme: #363636;
		--leftside-bar: #3b3b3b;
		--leftside-bar-shadow: 5px 5px 10px rgba(0,0,0,0.377);
		--theme-mild-xxl:#0000001f;
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
		--theme-mild-xxl:#00000005;
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
		--search: #e7e7e7;
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
`;yo.render(n.jsxs(G.StrictMode,{children:[n.jsx(Sx,{}),n.jsx(kx,{})]}),document.getElementById("root"));export{R as $,_p as A,$t as B,ve as C,$d as D,oe as E,hn as F,uh as G,ks as H,dp as I,we as J,De as K,un as L,K as M,ex as N,Yx as O,ce as P,He as Q,wp as R,Es as S,U as T,jr as U,vp as V,pn as W,Yn as X,Bx as Y,Bl as Z,Ul as _,z as a,St as a$,he as a0,te as a1,bd as a2,jd as a3,Gx as a4,Vx as a5,de as a6,Ro as a7,Ot as a8,Fx as a9,wn as aA,dc as aB,Yl as aC,kn as aD,fh as aE,tc as aF,It as aG,Px as aH,Kx as aI,mr as aJ,cc as aK,ad as aL,Mx as aM,Ts as aN,Dx as aO,ye as aP,gt as aQ,rg as aR,Xa as aS,ig as aT,ge as aU,Yf as aV,pe as aW,Et as aX,ft as aY,Zx as aZ,Ii as a_,Mo as aa,tx as ab,fr as ac,xt as ad,Eh as ae,on as af,en as ag,Ch as ah,j as ai,kh as aj,Sh as ak,td as al,Xx as am,nn as an,qe as ao,ie as ap,Ge as aq,J as ar,We as as,$l as at,Al as au,Ko as av,Is as aw,Vf as ax,ql as ay,lc as az,wc as b,Ph as b0,Oh as b1,Lx as b2,Nx as b3,ht as b4,Qd as b5,lg as b6,$s as b7,Rx as b8,la as b9,Ix as ba,As as bb,rc as bc,Pc as bd,bt as be,zx as bf,gc as bg,fc as bh,hl as bi,Cx as bj,gl as bk,$x as bl,Ax as bm,ud as bn,Ux as bo,vt as bp,xp as bq,mp as br,fp as bs,gp as bt,ec as bu,kl as c,Ht as d,_c as e,_ as f,ue as g,Wx as h,Hx as i,qx as j,Cs as k,Ct as l,L as m,_l as n,Pe as o,bp as p,Ie as q,Jx as r,yc as s,cn as t,Ve as u,se as v,sf as w,Q as x,gn as y,Se as z};
