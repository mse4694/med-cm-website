import{r as p,D as M,o as i,c,k as d,e,j as y,u as m,L as O,w as x,a0 as S,d as f,f as b,t as A,F as w,v as L,T as V,m as k,l as $,z as F}from"./app.78c44e08.js";import{_ as T}from"./PersonInteractiveCardList.e4972ca5.js";import{_ as j}from"./Modal.c9b2ea71.js";import{P as z}from"./PersonService.5a8c31a5.js";import{t as N}from"./style.c332bd67.js";import"./ToggleSwitch.6741b035.js";import"./TraceLogService.03bc433c.js";const q={class:"flex flex-col p-4 w-full"},E={class:"flex flex-col sm:flex-row sm:justify-between px-2 py-2 space-y-2 mb-2 w-full border rounded-md shadow-md items-baseline"},H=e("div",{class:"text-2xl font-bold"},"\u0E40\u0E23\u0E35\u0E22\u0E07\u0E01\u0E32\u0E23\u0E41\u0E2A\u0E14\u0E07\u0E1C\u0E25\u0E1A\u0E38\u0E04\u0E04\u0E25\u0E32\u0E01\u0E23",-1),I=e("button",{class:"flex items-center px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-200 transform bg-green-900 rounded cursor-pointer hover:bg-green-800"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 6v6m0 0v6m0-6h6m-6 0H6"})]),k(" \u0E01\u0E25\u0E31\u0E1A\u0E44\u0E1B\u0E2B\u0E19\u0E49\u0E32\u0E08\u0E31\u0E14\u0E01\u0E32\u0E23\u0E1A\u0E38\u0E04\u0E04\u0E25\u0E32\u0E01\u0E23 ")],-1),U={class:"mt-0 mb-2 md:col-span-2"},G={class:"shadow overflow-hidden sm:rounded-md"},J={class:"px-4 py-5 bg-white sm:p-6"},K={class:"grid grid-cols-6 gap-3"},Q={class:"col-span-6 sm:col-span-6"},R=e("label",{for:"person_types",class:"block text-sm font-medium text-gray-700"},"\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E1A\u0E38\u0E04\u0E04\u0E25\u0E32\u0E01\u0E23:",-1),W=["value"],X={class:"flex flex-col sm:flex-row"},Y=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"})],-1),Z=k(" \u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01 "),ee=[Y,Z],oe={class:"flex flex-col w-full"},te=e("div",{class:"text-gray-900 text-xl font-medium dark:text-white"}," \u0E04\u0E38\u0E13\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E08\u0E31\u0E14\u0E40\u0E01\u0E47\u0E1A\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E07\u0E25\u0E33\u0E14\u0E31\u0E1A\u0E01\u0E32\u0E23\u0E41\u0E2A\u0E14\u0E07\u0E1C\u0E25\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E1A\u0E38\u0E04\u0E25\u0E32\u0E01\u0E23 \u0E43\u0E0A\u0E48 \u0E2B\u0E23\u0E37\u0E2D \u0E44\u0E21\u0E48 ",-1),pe={__name:"PersonOrder",props:{person_types:{type:Array,required:!0},division_id:{type:Number,required:!0},division_slug:{type:String,required:!0}},setup(g){const _=g,P=p(new z),n=p([]),v=p(!1),l=M({type:null}),h=(t,o,s)=>{N({title:o,description:s},{showIcon:!0,transition:"zoom",position:"top-right",type:t,timeout:3e3})},a=t=>{v.value=t},B=()=>{P.value.listPersonByDivisionAndType(_.division_id,l.type).then(t=>{n.value=t})},C=t=>{n.value=n.value.sort((o,s)=>s.profiles.leader-o.profiles.leader||o.display_order-s.display_order)},D=()=>{$.Inertia.post(route("admin.person.update_display_order"),{person_list:n.value,division_slug:_.division_slug},{onSuccess:()=>{h("success","\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08","\u0E08\u0E31\u0E14\u0E40\u0E01\u0E47\u0E1A\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E07\u0E25\u0E33\u0E14\u0E31\u0E1A\u0E40\u0E23\u0E35\u0E22\u0E1A\u0E23\u0E49\u0E2D\u0E22")},onError:t=>{let o="";for(let s in t)o=o+`- ${t[s]}<br/>`;h("danger","\u0E1E\u0E1A\u0E1B\u0E31\u0E0D\u0E2B\u0E32",o)},onFinish:()=>{}}),a(!1)};return(t,o)=>{const s=F("AdminAppLayout");return i(),c(s,null,{default:d(()=>[e("div",q,[e("div",E,[H,y(m(O),{href:t.route("admin.person"),method:"get",as:"button",type:"button"},{default:d(()=>[I]),_:1},8,["href"])]),e("div",U,[e("div",G,[e("div",J,[e("div",K,[e("div",Q,[R,x(e("select",{"onUpdate:modelValue":o[0]||(o[0]=r=>m(l).type=r),onChange:B,id:"person_types",class:"mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"},[(i(!0),f(w,null,b(g.person_types,(r,u)=>(i(),f("option",{key:u,value:r.type},A(r.person_type),9,W))),128))],544),[[S,m(l).type]])])])])])]),e("div",X,[x(e("button",{onClick:o[1]||(o[1]=r=>a(!0)),class:"flex items-center mx-1 text-emerald-500 bg-white hover:bg-emerald-100 focus:ring-4 focus:ring-emerald-300 rounded-lg border border-emerald-200 text-sm font-medium px-5 py-2 hover:text-emerald-900 focus:z-10"},ee,512),[[L,n.value.length>1]])]),e("div",oe,[(i(!0),f(w,null,b(n.value,(r,u)=>(i(),c(T,{key:u,personDetails:r,"order-input":!0,onOrderPerson:se=>C()},null,8,["personDetails","onOrderPerson"]))),128))]),(i(),c(V,{to:"body"},[y(j,{isModalOpen:v.value},{header:d(()=>[te]),footer:d(()=>[e("button",{onClick:D,type:"button",class:"text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-red-800"},"\u0E15\u0E01\u0E25\u0E07"),e("button",{onClick:o[2]||(o[2]=r=>a(!1)),type:"button",class:"text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600"},"\u0E22\u0E01\u0E40\u0E25\u0E34\u0E01")]),_:1},8,["isModalOpen"])]))])]),_:1})}}};export{pe as default};
