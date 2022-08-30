import{r as u,E as C,G as V,o as l,d as c,e,t as g,j as v,k as y,u as p,L as w,w as B,I as D,F as N,f as S,m as h,g as k,a4 as E}from"./app.bc9381ff.js";import{t as L}from"./style.be0e08a7.js";const $={class:"flex flex-col p-4 w-full"},I={class:"flex flex-col sm:flex-row sm:justify-between px-2 py-2 space-y-2 mb-4 w-full border rounded-md shadow-md items-baseline"},M={class:"text-2xl font-bold"},O=h(" \u0E01\u0E25\u0E31\u0E1A\u0E2B\u0E19\u0E49\u0E32\u0E2B\u0E25\u0E31\u0E01 "),P=e("div",{class:"text-gray-900 text-lg underline font-medium dark:text-white mb-4"}," \u0E23\u0E32\u0E22\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E42\u0E1B\u0E2A\u0E40\u0E15\u0E2D\u0E23\u0E4C ",-1),T={class:"shadow overflow-hidden sm:rounded-md"},q={class:"px-4 py-5 bg-white sm:p-6"},G={class:"grid grid-cols-6 gap-6 mb-6"},U={class:"col-span-6"},W=e("div",{class:"flex items-center justify-between"},[e("label",{for:"desc",class:"block text-sm font-medium text-gray-700"},"\u0E23\u0E32\u0E22\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14\u0E42\u0E1B\u0E2A\u0E40\u0E15\u0E2D\u0E23\u0E4C")],-1),A={class:"col-span-6"},H={class:"my-1"},J={class:"flex items-center flex-col sm:flex-row justify-between border border-indigo-500 rounded-md"},K={class:"flex flex-col"},Q={class:"p-2"},R=e("strong",null,"\u0E0A\u0E37\u0E48\u0E2D\u0E44\u0E1F\u0E25\u0E4C : ",-1),X={class:"flex items-center m-2 sm:m-1"},Y={class:"p-2 mt-2 text-sm cursor-pointer rounded-lg shadow-lg border text-white border-indigo-500 bg-blue-700 hover:bg-blue-800 hover:text-white"},Z=["id","accept","onChange"],ee={class:"flex flex-row mt-2 space-x-4"},te=h(" \u0E22\u0E01\u0E40\u0E25\u0E34\u0E01 "),se={layout:E},re=Object.assign(se,{__name:"DataForm",props:{action:{type:String,require:!0,default:"insert"},poster:{type:Object}},setup(m){const r=m,d=u(null),b=u(!1),_=u(!1),x=u(!1),f=C([{name:"",size:0,label:"\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E23\u0E39\u0E1B\u0E2B\u0E19\u0E49\u0E32\u0E1B\u0E01",accept:".jpg,.jpeg"},{name:"",size:0,label:"\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E44\u0E1F\u0E25\u0E4C\u0E40\u0E19\u0E37\u0E49\u0E2D\u0E2B\u0E32",accept:".jpg,.jpeg,.pdf"}]);switch(r.action){case"insert":d.value="\u0E40\u0E1E\u0E34\u0E48\u0E21";break;case"update":d.value="\u0E41\u0E01\u0E49\u0E44\u0E02";break;case"delete":d.value="\u0E25\u0E1A";break}const a=V({id:r.poster?r.poster.id:null,desc:r.poster?r.poster.desc:null,cover:""}),i=(o,t,s)=>{L({title:t,description:s},{showIcon:!0,transition:"zoom",position:"top-right",type:o,timeout:3e3})},j=(o,t,s)=>{let n=s.target.files[0];t.File=n,t.name=n.name,t.size=n.size,t.size>1024*1024*2?(b.value=!1,i("warning","\u0E04\u0E33\u0E40\u0E15\u0E37\u0E2D\u0E19","\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E44\u0E1F\u0E25\u0E4C\u0E44\u0E21\u0E48\u0E44\u0E14\u0E49 \u0E40\u0E19\u0E37\u0E48\u0E2D\u0E07\u0E08\u0E32\u0E01\u0E44\u0E1F\u0E25\u0E4C\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13\u0E21\u0E35\u0E02\u0E19\u0E32\u0E14\u0E43\u0E2B\u0E0D\u0E48\u0E01\u0E27\u0E48\u0E32 2MB")):b.value=!0,o===0?n.type.match("image/jp.*")?_.value=!0:(_.value=!1,i("warning","\u0E04\u0E33\u0E40\u0E15\u0E37\u0E2D\u0E19","\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E44\u0E1F\u0E25\u0E4C\u0E2B\u0E19\u0E49\u0E32\u0E1B\u0E01\u0E44\u0E21\u0E48\u0E44\u0E14\u0E49 \u0E40\u0E19\u0E37\u0E48\u0E2D\u0E07\u0E08\u0E32\u0E01\u0E2D\u0E19\u0E38\u0E0D\u0E32\u0E15\u0E43\u0E2B\u0E49\u0E41\u0E19\u0E1A\u0E44\u0E1F\u0E25\u0E4C\u0E40\u0E09\u0E1E\u0E32\u0E30 .jpg \u0E40\u0E17\u0E48\u0E32\u0E19\u0E31\u0E49\u0E19")):n.type.match("image/jp.*")||n.type.match("application/pdf")?x.value=!0:(x.value=!1,i("warning","\u0E04\u0E33\u0E40\u0E15\u0E37\u0E2D\u0E19","\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E44\u0E1F\u0E25\u0E4C\u0E40\u0E19\u0E37\u0E49\u0E2D\u0E2B\u0E32\u0E44\u0E21\u0E48\u0E44\u0E14\u0E49 \u0E40\u0E19\u0E37\u0E48\u0E2D\u0E07\u0E08\u0E32\u0E01\u0E2D\u0E19\u0E38\u0E0D\u0E32\u0E15\u0E43\u0E2B\u0E49\u0E41\u0E19\u0E1A\u0E44\u0E1F\u0E25\u0E4C\u0E40\u0E09\u0E1E\u0E32\u0E30 .jpg \u0E2B\u0E23\u0E37\u0E2D PDF \u0E40\u0E17\u0E48\u0E32\u0E19\u0E31\u0E49\u0E19"))},F=()=>{let o="";a.id||a.transform(t=>({...t,cover:f[0].File,content:f[1].File})).post(route("admin.poster.store"),{onSuccess:()=>{i("success","\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08","\u0E08\u0E31\u0E14\u0E40\u0E01\u0E47\u0E1A\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E42\u0E1B\u0E2A\u0E40\u0E15\u0E2D\u0E23\u0E4C \u0E40\u0E23\u0E35\u0E22\u0E1A\u0E23\u0E49\u0E2D\u0E22")},onError:t=>{for(let s in t)o=o+`- ${t[s]}<br/>`;i("danger","\u0E1E\u0E1A\u0E02\u0E49\u0E2D\u0E1C\u0E34\u0E14\u0E1E\u0E25\u0E32\u0E14",o)},onFinish:()=>{a.processing=!1}})};return(o,t)=>(l(),c("div",$,[e("div",I,[e("div",M,g(d.value)+"\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E42\u0E1B\u0E2A\u0E40\u0E15\u0E2D\u0E23\u0E4C",1),v(p(w),{href:o.route("admin.poster"),method:"get",as:"button",type:"button",class:"px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-200 transform bg-green-900 rounded cursor-pointer hover:bg-green-800"},{default:y(()=>[O]),_:1},8,["href"])]),P,e("div",T,[e("div",q,[e("fieldset",null,[e("div",G,[e("div",U,[W,B(e("input",{type:"text",id:"desc","onUpdate:modelValue":t[0]||(t[0]=s=>p(a).desc=s),class:"mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"},null,512),[[D,p(a).desc,void 0,{trim:!0}]])]),e("ul",A,[(l(!0),c(N,null,S(f,(s,n)=>(l(),c("li",{key:n},[e("div",H,[e("div",J,[e("div",K,[e("div",Q,[R,h(g(s.name),1)])]),e("div",X,[e("label",null,[e("span",Y,g(s.label),1),e("input",{id:"file-"+n,type:"file",accept:s.accept,onChange:z=>j(n,s,z),style:{display:"none"}},null,40,Z)])])])])]))),128))])])])])]),e("div",ee,[m.action==="insert"?(l(),c("button",{key:0,type:"button",onClick:F,class:"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"},"\u0E08\u0E31\u0E14\u0E40\u0E01\u0E47\u0E1A")):k("",!0),m.action==="update"?(l(),c("button",{key:1,type:"button",onClick:s=>!0,class:"text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"},"\u0E41\u0E01\u0E49\u0E44\u0E02")):k("",!0),v(p(w),{href:o.route("admin.poster"),method:"get",as:"button",type:"button",class:"text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10"},{default:y(()=>[te]),_:1},8,["href"])])]))}});export{re as default};
