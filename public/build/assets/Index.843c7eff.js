import{D as y,o,c as _,k as b,e as s,w as p,a0 as m,u as l,d as n,f as c,t,F as u,z as x}from"./app.681be6cb.js";const h={class:"flex flex-col p-4 w-full"},v=s("div",{class:"flex flex-col sm:flex-row sm:justify-between px-2 py-2 space-y-2 mb-2 w-full border rounded-md shadow-md items-baseline"},[s("div",{class:"text-2xl font-bold"},"\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E01\u0E32\u0E23\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19")],-1),w={class:"grid grid-cols-2 gap-6"},k={class:"col-span-2 sm:col-span-1"},g=s("label",{for:"section",class:"block text-sm font-medium text-gray-700"},"Section :",-1),j=["value"],A={class:"col-span-2 sm:col-span-1"},B=s("label",{for:"type",class:"block text-sm font-medium text-gray-700"},"Type :",-1),F=["value"],U={key:0},q={key:1},O={__name:"Index",props:{logs:{type:Object,required:!0,default:{}},sections:{type:Object,required:!0,default:{}},types:{type:Object,required:!0,default:{}}},setup(r){const i=y({section:"login-page",type:"info"});return(D,a)=>{const f=x("AdminAppLayout");return o(),_(f,null,{default:b(()=>[s("div",h,[v,s("div",w,[s("div",k,[g,p(s("select",{"onUpdate:modelValue":a[0]||(a[0]=e=>l(i).section=e),id:"section",class:"mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"},[(o(!0),n(u,null,c(r.sections,(e,d)=>(o(),n("option",{key:d,value:e.section},t(e.section),9,j))),128))],512),[[m,l(i).section]])]),s("div",A,[B,p(s("select",{"onUpdate:modelValue":a[1]||(a[1]=e=>l(i).type=e),id:"type",class:"mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"},[(o(!0),n(u,null,c(r.types,(e,d)=>(o(),n("option",{key:d,value:e.type},t(e.type),9,F))),128))],512),[[m,l(i).type]])])]),(o(!0),n(u,null,c(r.logs,(e,d)=>(o(),n("div",{key:d},[e.person?(o(),n("div",U,t(e.person.fname_th)+" "+t(e.person.lname_th)+" "+t(e.action)+" "+t(e.details)+" "+t(e.created_at),1)):(o(),n("div",q,"Unknow-User "+t(e.action)+" "+t(e.details)+" "+t(e.created_at),1))]))),128))])]),_:1})}}};export{O as default};
