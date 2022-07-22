import{P as f}from"./PersonService.33b374cf.js";import{b as p,r as d,o as e,d as s,e as t,g as n,t as i,F as g,f as x,c as v,k as y,z as k}from"./app.e07ef880.js";const w={class:"w-full mt-0"},b={class:"flex justify-start items-center space-x-4 cursor-pointer"},$={class:"flex justify-start space-x-4"},j={key:0,class:"shrink-0",width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},B=t("path",{d:"M4.16602 10H15.8327",stroke:"#1F2937","stroke-width":"1.25","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),M=[B],F={key:1,class:"shrink-0",width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},C=t("path",{id:"path1",class:"",d:"M10 4.1665V15.8332",stroke:"#1F2937","stroke-width":"1.25","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),O=t("path",{d:"M4.16602 10H15.8327",stroke:"#1F2937","stroke-width":"1.25","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),D=[C,O],H={class:"flex font-semibold text-lg leading-5 text-gray-800 text-left"},L={key:0,class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-4 w-full gap-1 md:gap-2"},V={class:"flex items-center p-2"},A=["src"],z={class:"flex items-center"},N={class:"flex flex-col"},S={class:"px-2"},P={key:0,class:"px-2 italic text-sm text-gray-600"},E={key:1,class:"px-2 italic text-sm text-gray-600"},I={key:2,class:"px-2 italic text-sm text-gray-600"},U=t("hr",{class:"my-7 bg-gray-200"},null,-1),q={__name:"OfficerDetail",props:{unit:{type:Object,default:{}}},setup(o){const _=o;p(()=>{r.value.listOfficerByDivisionId(_.unit.division_id).then(c=>{u.value=c})});const r=d(new f);d(base_url);const a=d(!1),u=d([]),h=()=>{a.value=!a.value};return(c,pt)=>(e(),s("div",w,[t("div",null,[t("div",b,[t("button",{"aria-label":"too",class:"flex items-center space-x-4 p-1 rounded-md cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 hover:bg-blue-400",onClick:h},[t("div",$,[a.value?(e(),s("svg",j,M)):n("",!0),a.value?n("",!0):(e(),s("svg",F,D)),t("div",H,i(o.unit.division_type)+i(o.unit.name_th),1)])])]),a.value?(e(),s("div",L,[(e(!0),s(g,null,x(u.value,(l,m)=>(e(),s("div",{key:m,class:"flex flex-row mt-2 sm:mt-0 rounded-lg shadow-lg bg-gradient-to-r from-green-50 to-green-100"},[t("div",V,[t("img",{class:"object-cover w-20 h-28 rounded-lg ring-1 ring-gray-300",src:`${l.image_url}`,alt:""},null,8,A)]),t("div",z,[t("div",N,[t("div",S,i(l.title_th)+i(l.fname_th)+" "+i(l.lname_th),1),l.position_division&&l.position_division!=="NULL"?(e(),s("div",P,i(l.position_division),1)):(e(),s("div",E,"\u0E44\u0E21\u0E48\u0E1E\u0E1A\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E15\u0E33\u0E41\u0E2B\u0E19\u0E48\u0E07\u0E07\u0E32\u0E19")),l.profiles.leader?(e(),s("div",I,"(\u0E2B\u0E31\u0E27\u0E2B\u0E19\u0E49\u0E32\u0E2B\u0E19\u0E48\u0E27\u0E22\u0E07\u0E32\u0E19)")):n("",!0)])])]))),128))])):n("",!0)]),U]))}},G={class:"my-6 lg:my-12 container px-6 mx-auto flex flex-col md:flex-row items-start md:items-center justify-between pb-4 border-b border-gray-300"},J=t("div",null,[t("h4",{class:"text-2xl font-bold leading-tight text-gray-800 dark:text-gray-100"},"\u0E1A\u0E38\u0E04\u0E04\u0E25\u0E32\u0E01\u0E23\u0E2A\u0E33\u0E19\u0E31\u0E01\u0E07\u0E32\u0E19")],-1),K={class:"mt-6 md:mt-0"},Q=["href"],R=t("button",{class:"mr-3 bg-gray-200 dark:bg-gray-700 focus:outline-none transition duration-150 ease-in-out rounded hover:bg-gray-300 text-indigo-700 dark:hover:bg-gray-600 dark:text-indigo-600 px-5 py-2 text-sm"},"\u0E01\u0E25\u0E31\u0E1A\u0E2B\u0E19\u0E49\u0E32\u0E2B\u0E25\u0E31\u0E01",-1),T=[R],W={class:"2xl:container 2xl:mx-auto md:py-6 lg:px-20 md:px-6 py-2 px-4"},X={class:"flex flex-col"},Y={class:"w-full mt-0"},Z={class:"flex justify-start items-center space-x-4 cursor-pointer"},tt={class:"flex justify-start space-x-4"},et={key:0,class:"shrink-0",width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},st=t("path",{d:"M4.16602 10H15.8327",stroke:"#1F2937","stroke-width":"1.25","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),ot=[st],it={key:1,class:"shrink-0",width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},nt=t("path",{id:"path1",class:"",d:"M10 4.1665V15.8332",stroke:"#1F2937","stroke-width":"1.25","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),lt=t("path",{d:"M4.16602 10H15.8327",stroke:"#1F2937","stroke-width":"1.25","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),rt=[nt,lt],at=t("div",{class:"flex font-semibold text-lg leading-5 text-gray-800 text-left"}," \u0E2B\u0E31\u0E27\u0E2B\u0E19\u0E49\u0E32\u0E2A\u0E33\u0E19\u0E31\u0E01\u0E07\u0E32\u0E19\u0E20\u0E32\u0E04\u0E27\u0E34\u0E0A\u0E32\u0E2D\u0E32\u0E22\u0E38\u0E23\u0E28\u0E32\u0E2A\u0E15\u0E23\u0E4C ",-1),ct={key:0,class:"flex flex-col w-full mt-4"},dt={key:0,class:"flex items-center space-x-4"},ut={class:"shrink-0"},_t={key:0,class:"w-20 h-28 rounded-lg ring-1 ring-gray-300",fill:"currentColor",viewBox:"0 0 24 24"},ht=t("path",{d:"M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"},null,-1),gt=[ht],vt=["src"],xt={class:"mb-4 underline"},mt=t("div",null,"\u0E40\u0E25\u0E02\u0E32\u0E19\u0E38\u0E01\u0E32\u0E23\u0E20\u0E32\u0E04\u0E27\u0E34\u0E0A\u0E32\u0E2D\u0E32\u0E22\u0E38\u0E23\u0E28\u0E32\u0E2A\u0E15\u0E23\u0E4C/\u0E2B\u0E31\u0E27\u0E2B\u0E19\u0E49\u0E32\u0E2A\u0E33\u0E19\u0E31\u0E01\u0E07\u0E32\u0E19\u0E20\u0E32\u0E04\u0E27\u0E34\u0E0A\u0E32\u0E2D\u0E32\u0E22\u0E38\u0E23\u0E28\u0E32\u0E2A\u0E15\u0E23\u0E4C",-1),ft=t("hr",{class:"my-7 bg-gray-200"},null,-1),wt={__name:"Officer",props:{units:{type:Array,default:[]},secretary:{type:Object,default:{}}},setup(o){const _=o;d(base_url);const r=d(!1);return(a,u)=>{const h=k("AppLayout");return e(),v(h,null,{default:y(()=>[t("div",G,[J,t("div",K,[t("a",{href:a.route("index")},T,8,Q)])]),t("div",W,[t("div",X,[t("div",Y,[t("div",null,[t("div",Z,[t("button",{"aria-label":"too",class:"flex items-center space-x-4 p-1 rounded-md cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 hover:bg-blue-400",onClick:u[0]||(u[0]=c=>r.value=!r.value)},[t("div",tt,[r.value?(e(),s("svg",et,ot)):n("",!0),r.value?n("",!0):(e(),s("svg",it,rt)),at])])]),r.value?(e(),s("div",ct,[o.secretary?(e(),s("div",dt,[t("div",ut,[o.secretary.image?(e(),s("img",{key:1,class:"object-cover w-20 h-28 rounded-lg ring-1 ring-gray-300",src:`${o.secretary.image_url}`,alt:""},null,8,vt)):(e(),s("svg",_t,gt))]),t("div",null,[t("div",xt,i(o.secretary.title_th)+i(o.secretary.fname_th)+" "+i(o.secretary.lname_th),1),mt])])):n("",!0)])):n("",!0)]),ft]),(e(!0),s(g,null,x(_.units,c=>(e(),s(g,{key:c.id},[c.division_id!==19?(e(),v(q,{key:0,unit:c},null,8,["unit"])):n("",!0)],64))),128))])])]),_:1})}}};export{wt as default};