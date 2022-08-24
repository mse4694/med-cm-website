import{o as t,c as v,k as i,e,j as d,u as c,L as m,d as o,f as u,n as b,t as n,F as _,m as w,z as k}from"./app.351f6ed1.js";import{_ as f}from"./Paginations.2cb4ddd2.js";const y={class:"flex flex-col p-4 w-full"},L={class:"flex flex-col sm:flex-row sm:justify-between px-2 py-2 space-y-2 mb-2 w-full border rounded-md shadow-md items-baseline"},j=e("div",{class:"text-2xl font-bold"},"\u0E08\u0E31\u0E14\u0E01\u0E32\u0E23\u0E1C\u0E39\u0E49\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19",-1),A={class:""},B=w(" \u0E40\u0E1E\u0E34\u0E48\u0E21\u0E1C\u0E39\u0E49\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19 "),C={class:"grid grid-cols-1 gap-2"},z={class:"grid grid-cols-12"},V={class:"col-span-10 md:col-span-11"},M={class:"flex items-center space-x-2"},N=e("div",{class:"font-bold"},"\u0E2A\u0E16\u0E32\u0E19\u0E30 :",-1),D={class:"flex items-center justify-between"},F={class:"flex items-center space-x-2"},H=e("div",{class:"font-bold"},"\u0E1C\u0E39\u0E49\u0E43\u0E0A\u0E49 :",-1),T={key:0,class:"text-sm"},U={key:1,class:"text-sm"},$={class:"flex items-center space-x-2"},q=e("div",{class:"font-bold"},"\u0E2B\u0E19\u0E49\u0E32\u0E17\u0E35\u0E48 :",-1),E={class:"col-span-2 md:col-span-1"},I={class:"flex flex-col space-y-2 items-end sm:space-y-1 sm:items-center"},O=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"})],-1),S=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"})],-1),G=[S],Q={__name:"Index",props:{users:{type:Object,required:!0,default:{}}},setup(a){const h=r=>r?"Active":"Disabled";return(r,J)=>{const p=k("AdminAppLayout");return t(),v(p,null,{default:i(()=>[e("div",y,[e("div",L,[j,e("div",A,[d(c(m),{href:r.route("admin.user.create"),method:"get",as:"button",type:"button",class:"px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-200 transform bg-green-900 rounded cursor-pointer hover:bg-green-800"},{default:i(()=>[B]),_:1},8,["href"])])]),d(f,{pagination:a.users,class:"mt-4 mb-4"},null,8,["pagination"]),e("div",C,[(t(!0),o(_,null,u(a.users.data,(s,g)=>(t(),o("div",{key:g,class:"p-4 rounded-md shadow bg-gradient-to-l from-sky-100 border-l-4 rounded-l-md border-l-blue-600"},[e("div",z,[e("div",V,[e("div",M,[N,e("div",{class:b(["text-sm italic font-medium tracking-wider rounded-lg bg-opacity-50 p-1",[s.status?"text-green-800 bg-green-200":"text-red-800 bg-red-200"]])},n(h(s.status)),3)]),e("div",D,[e("div",F,[H,s.person?(t(),o("div",T,n(s.person.title_th)+n(s.person.fname_th)+" "+n(s.person.lname_th),1)):(t(),o("div",U,"Unknown-User"))])]),e("div",$,[q,(t(!0),o(_,null,u(s.user_roles,(l,x)=>(t(),o("div",{key:x,class:"text-sm"},n(l),1))),128))])]),e("div",E,[e("div",I,[d(c(m),{href:r.route("admin.user.edit",s.id),class:"flex items-center mx-1 text-orange-500 bg-white hover:bg-orange-100 focus:ring-4 focus:ring-orange-300 rounded-full border border-orange-200 text-sm font-medium px-2 py-2 hover:text-orange-900 focus:z-10"},{default:i(()=>[O]),_:2},1032,["href"]),e("button",{onClick:l=>!0,class:"flex items-center mx-1 text-red-500 bg-white hover:bg-red-200 focus:ring-4 focus:ring-red-300 rounded-full border border-red-200 text-sm font-medium px-2 py-2 hover:text-orange-900 focus:z-10"},G)])])])]))),128))]),d(f,{pagination:a.users,class:"mt-4"},null,8,["pagination"])])]),_:1})}}};export{Q as default};