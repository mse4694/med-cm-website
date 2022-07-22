import{_ as q,b as G,r,$ as H,D as K,N as R,o as a,c as v,k as c,e as t,d as g,w as S,a0 as J,u as d,a3 as $,F as j,f as L,t as M,g as D,G as Q,j as k,L as C,T as W,K as X,M as Y,l as p,z as Z}from"./app.e07ef880.js";import{_ as ee}from"./Modal.d7782ba0.js";import{_ as te}from"./PersonInteractiveCardList.b18857b8.js";import{_ as se}from"./Paginations.7a4f98cd.js";import{D as oe}from"./DivisionService.04064e6d.js";import{T as re}from"./TraceLogService.6ebcabb6.js";import{t as ne}from"./style.eaddd0cf.js";import"./ToggleSwitch.434f367a.js";const m=l=>(X("data-v-55c27413"),l=l(),Y(),l),ie={class:"flex flex-col px-2 py-1 w-full"},le=m(()=>t("div",{class:"mb-2 text-2xl font-bold"},"\u0E08\u0E31\u0E14\u0E01\u0E32\u0E23\u0E1A\u0E38\u0E04\u0E25\u0E32\u0E01\u0E23",-1)),ae={key:0,class:"flex flex-col sm:flex-row items-start sm:items-center mb-2"},de=m(()=>t("div",{class:"sm:w-32 text-sm font-medium text-gray-700"},"\u0E2A\u0E32\u0E02\u0E32/\u0E2B\u0E19\u0E48\u0E27\u0E22\u0E07\u0E32\u0E19:",-1)),ue=["value"],ce={class:"flex flex-col sm:flex-row sm:justify-between px-2 py-2 space-y-2 mb-2 w-full border rounded-md shadow-md items-baseline"},me={class:"flex space-x-2 w-full place-self-center"},fe={class:"flex space-x-2"},pe=m(()=>t("div",null,[t("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 6v6m0 0v6m0-6h6m-6 0H6"})])],-1)),ve=m(()=>t("div",null,"\u0E40\u0E1E\u0E34\u0E48\u0E21",-1)),ge=m(()=>t("button",{class:"flex items-center w-28 py-1 px-3 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-black hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"},[t("div",null,[t("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"})])]),t("div",null,"\u0E40\u0E23\u0E35\u0E22\u0E07\u0E25\u0E33\u0E14\u0E31\u0E1A")],-1)),_e={class:"flex flex-col w-full mb-4"},he=m(()=>t("div",{class:"text-gray-900 text-xl font-medium dark:text-white"}," \u0E04\u0E38\u0E13\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E25\u0E1A\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E1A\u0E38\u0E04\u0E25\u0E32\u0E01\u0E23 ",-1)),xe={class:"flex flex-row justify-start items-center"},be=["src"],we={class:"text-gray-900 text-md font-medium dark:text-white"},ye={class:"flex justify-center md:justify-end mt-2 px-4"},ke={__name:"Index",props:{persons:{type:Object,required:!0,default:{}},filters:{type:Object}},setup(l){const _=l;G(()=>{B.value.listAll().then(e=>{h.value=e})});const V="/fallbackimage/default-blank-image.jpg",B=r(new oe);r(new re),r(!1);const P=r(!1),h=r([]);r(),r(),r(!1);const x=r(null),F=r(base_url);let n=_.filters.fdivision_selected?r(_.filters.fdivision_selected):r(H().props.value.auth.division_id),f=r(_.filters.search);const u=K({id:null,fullname:null});R(f,e=>{p.Inertia.get(route("admin.person"),{search:e,fdivision_selected:n.value},{preserveState:!0,replace:!0})});const b=e=>{P.value=e,e||(u.reset(),x.value=null)},I=(e,s,i)=>{ne({title:s,description:i},{showIcon:!0,transition:"zoom",position:"top-right",type:e,timeout:3e3})},O=()=>{p.Inertia.delete(route("admin.person.delete",u.id),{preserveState:!0,onSuccess:()=>{I("success","\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08","\u0E25\u0E1A\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E1A\u0E38\u0E04\u0E25\u0E32\u0E01\u0E23 \u0E40\u0E23\u0E35\u0E22\u0E1A\u0E23\u0E49\u0E2D\u0E22")},onError:e=>{let s="";for(let i in e)s=s+`- ${e[i]}<br/>`;I("danger","\u0E1E\u0E1A\u0E1B\u0E31\u0E0D\u0E2B\u0E32",s)},onFinish:()=>{u.processing=!1}}),b(!1)},A=()=>{p.Inertia.get(route("admin.person"),{fdivision_selected:n.value},{preserveState:!0,replace:!0})},T=e=>{p.Inertia.get(route("admin.person.view",e.id),{},{preserveState:!0,replace:!0})},E=e=>{p.Inertia.get(route("admin.person.edit",e.id),{},{preserveState:!0,replace:!0})},N=e=>{x.value=e.image?e.image_url:`${F.value}${V}`,u.id=e.id,u.fullname=`${e.fname_th} ${e.lname_th}`,b(!0)},z=e=>{personList.value=personList.value.sort((s,i)=>s.display_order-i.display_order)},U=e=>{let s=h.value.filter(i=>i.division_id===e);return s.length>0?s[0].slug:""};return(e,s)=>{const i=Z("AdminAppLayout");return a(),v(i,null,{default:c(()=>[t("div",ie,[le,e.$page.props.auth.abilities.includes("view_all_content")?(a(),g("div",ae,[de,S(t("select",{"onUpdate:modelValue":s[0]||(s[0]=o=>$(n)?n.value=o:n=o),onChange:A,id:"form_division_id",class:"mt-1 w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"},[(a(!0),g(j,null,L(h.value,(o,w)=>(a(),g("option",{key:w,value:o.division_id},M(o.name_th),9,ue))),128))],544),[[J,d(n)]])])):D("",!0),t("div",ce,[t("div",me,[S(t("input",{"onUpdate:modelValue":s[1]||(s[1]=o=>$(f)?f.value=o:f=o),type:"text",id:"search",placeholder:"\u0E04\u0E49\u0E19\u0E2B\u0E32\u0E14\u0E49\u0E27\u0E22 \u0E0A\u0E37\u0E48\u0E2D \u0E2B\u0E23\u0E37\u0E2D \u0E19\u0E32\u0E21\u0E2A\u0E01\u0E38\u0E25",class:"block mx-1 focus:ring-indigo-500 focus:border-indigo-500 w-full shadow-sm sm:text-sm border-gray-300 rounded-md"},null,512),[[Q,d(f)]])]),t("div",fe,[k(d(C),{href:e.route("admin.person.create"),data:{fdivision_selected:d(n)},method:"get",as:"button",type:"button",class:"flex items-center px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-200 transform bg-green-900 rounded cursor-pointer hover:bg-green-800"},{default:c(()=>[pe,ve]),_:1},8,["href","data"]),d(n)!=0&&l.persons.total>1?(a(),v(d(C),{key:0,href:e.route("admin.person_order",U(parseInt(d(n))))},{default:c(()=>[ge]),_:1},8,["href"])):D("",!0)])]),t("div",_e,[(a(!0),g(j,null,L(l.persons.data,(o,w)=>(a(),v(te,{key:w,personDetails:o,"order-input":!1,onEditPerson:y=>E(o),onViewPerson:y=>T(o),onOrderPerson:y=>z(),onDeletePerson:y=>N(o)},null,8,["personDetails","onEditPerson","onViewPerson","onOrderPerson","onDeletePerson"]))),128))]),(a(),v(W,{to:"body"},[k(ee,{isModalOpen:P.value},{header:c(()=>[he]),body:c(()=>[t("div",xe,[t("img",{src:x.value,alt:"",class:"h-20 w-20 rounded-full object-cover mr-4"},null,8,be),t("div",we,M(d(u).fullname),1)])]),footer:c(()=>[t("button",{onClick:s[2]||(s[2]=o=>O()),type:"button",class:"text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-red-800"},"\u0E25\u0E1A"),t("button",{onClick:s[3]||(s[3]=o=>b(!1)),type:"button",class:"text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600"},"\u0E22\u0E01\u0E40\u0E25\u0E34\u0E01")]),_:1},8,["isModalOpen"])])),t("div",ye,[k(se,{pagination:l.persons},null,8,["pagination"])])])]),_:1})}}};var Ce=q(ke,[["__scopeId","data-v-55c27413"]]);export{Ce as default};