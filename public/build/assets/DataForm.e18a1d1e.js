import{r as d,C as B,D,o as l,c as L,k as h,e,t as b,j as w,u,L as k,w as V,G as A,d as p,f as N,m as _,F as S,g as F,z as E}from"./app.351f6ed1.js";import{t as M}from"./style.e5e8b7e9.js";const P={class:"flex flex-col p-4 w-full"},T={class:"flex flex-col sm:flex-row sm:justify-between px-2 py-2 space-y-2 mb-4 w-full border rounded-md shadow-md items-baseline"},$={class:"text-2xl font-bold"},q=_(" \u0E01\u0E25\u0E31\u0E1A\u0E2B\u0E19\u0E49\u0E32\u0E2B\u0E25\u0E31\u0E01 "),G=e("div",{class:"text-gray-900 text-lg underline font-medium dark:text-white mb-4"}," \u0E23\u0E32\u0E22\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E42\u0E1B\u0E2A\u0E40\u0E15\u0E2D\u0E23\u0E4C ",-1),I={class:"shadow overflow-hidden sm:rounded-md"},O={class:"px-4 py-5 bg-white sm:p-6"},U={class:"grid grid-cols-6 gap-6 mb-6"},W={class:"col-span-6"},H=e("div",{class:"flex items-center justify-between"},[e("label",{for:"desc",class:"block text-sm font-medium text-gray-700"},"\u0E23\u0E32\u0E22\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14\u0E42\u0E1B\u0E2A\u0E40\u0E15\u0E2D\u0E23\u0E4C")],-1),J={class:"col-span-6"},K={class:"my-1"},Q={class:"flex items-center flex-col sm:flex-row justify-between border border-indigo-500 rounded-md"},R={class:"flex flex-col"},X={class:"p-2"},Y=e("strong",null,"\u0E0A\u0E37\u0E48\u0E2D\u0E44\u0E1F\u0E25\u0E4C : ",-1),Z={class:"flex items-center m-2 sm:m-1"},ee={class:"p-2 mt-2 text-sm cursor-pointer rounded-lg shadow-lg border text-white border-indigo-500 bg-blue-700 hover:bg-blue-800 hover:text-white"},te=["id","accept","onChange"],se={class:"flex flex-row mt-2 space-x-4"},oe=_(" \u0E22\u0E01\u0E40\u0E25\u0E34\u0E01 "),ae={__name:"DataForm",props:{action:{type:String,require:!0,default:"insert"},poster:{type:Object}},setup(m){const r=m,c=d(null),x=d(!1),v=d(!1),y=d(!1),f=B([{name:"",size:0,label:"\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E23\u0E39\u0E1B\u0E2B\u0E19\u0E49\u0E32\u0E1B\u0E01",accept:".jpg,.jpeg"},{name:"",size:0,label:"\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E44\u0E1F\u0E25\u0E4C\u0E40\u0E19\u0E37\u0E49\u0E2D\u0E2B\u0E32",accept:".jpg,.jpeg,.pdf"}]);switch(r.action){case"insert":c.value="\u0E40\u0E1E\u0E34\u0E48\u0E21";break;case"update":c.value="\u0E41\u0E01\u0E49\u0E44\u0E02";break;case"delete":c.value="\u0E25\u0E1A";break}const a=D({id:r.poster?r.poster.id:null,desc:r.poster?r.poster.desc:null,cover:""}),i=(o,t,n)=>{M({title:t,description:n},{showIcon:!0,transition:"zoom",position:"top-right",type:o,timeout:3e3})},j=(o,t,n)=>{let s=n.target.files[0];t.File=s,t.name=s.name,t.size=s.size,t.size>1024*1024*2?(x.value=!1,i("warning","\u0E04\u0E33\u0E40\u0E15\u0E37\u0E2D\u0E19","\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E44\u0E1F\u0E25\u0E4C\u0E44\u0E21\u0E48\u0E44\u0E14\u0E49 \u0E40\u0E19\u0E37\u0E48\u0E2D\u0E07\u0E08\u0E32\u0E01\u0E44\u0E1F\u0E25\u0E4C\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13\u0E21\u0E35\u0E02\u0E19\u0E32\u0E14\u0E43\u0E2B\u0E0D\u0E48\u0E01\u0E27\u0E48\u0E32 2MB")):x.value=!0,o===0?s.type.match("image/jp.*")?v.value=!0:(v.value=!1,i("warning","\u0E04\u0E33\u0E40\u0E15\u0E37\u0E2D\u0E19","\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E44\u0E1F\u0E25\u0E4C\u0E2B\u0E19\u0E49\u0E32\u0E1B\u0E01\u0E44\u0E21\u0E48\u0E44\u0E14\u0E49 \u0E40\u0E19\u0E37\u0E48\u0E2D\u0E07\u0E08\u0E32\u0E01\u0E2D\u0E19\u0E38\u0E0D\u0E32\u0E15\u0E43\u0E2B\u0E49\u0E41\u0E19\u0E1A\u0E44\u0E1F\u0E25\u0E4C\u0E40\u0E09\u0E1E\u0E32\u0E30 .jpg \u0E40\u0E17\u0E48\u0E32\u0E19\u0E31\u0E49\u0E19")):s.type.match("image/jp.*")||s.type.match("application/pdf")?y.value=!0:(y.value=!1,i("warning","\u0E04\u0E33\u0E40\u0E15\u0E37\u0E2D\u0E19","\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E44\u0E1F\u0E25\u0E4C\u0E40\u0E19\u0E37\u0E49\u0E2D\u0E2B\u0E32\u0E44\u0E21\u0E48\u0E44\u0E14\u0E49 \u0E40\u0E19\u0E37\u0E48\u0E2D\u0E07\u0E08\u0E32\u0E01\u0E2D\u0E19\u0E38\u0E0D\u0E32\u0E15\u0E43\u0E2B\u0E49\u0E41\u0E19\u0E1A\u0E44\u0E1F\u0E25\u0E4C\u0E40\u0E09\u0E1E\u0E32\u0E30 .jpg \u0E2B\u0E23\u0E37\u0E2D PDF \u0E40\u0E17\u0E48\u0E32\u0E19\u0E31\u0E49\u0E19"))},C=()=>{let o="";a.id||a.transform(t=>({...t,cover:f[0].File,content:f[1].File})).post(route("admin.poster.store"),{onSuccess:()=>{i("success","\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08","\u0E08\u0E31\u0E14\u0E40\u0E01\u0E47\u0E1A\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E42\u0E1B\u0E2A\u0E40\u0E15\u0E2D\u0E23\u0E4C \u0E40\u0E23\u0E35\u0E22\u0E1A\u0E23\u0E49\u0E2D\u0E22")},onError:t=>{for(let n in t)o=o+`- ${t[n]}<br/>`;i("danger","\u0E1E\u0E1A\u0E02\u0E49\u0E2D\u0E1C\u0E34\u0E14\u0E1E\u0E25\u0E32\u0E14",o)},onFinish:()=>{a.processing=!1}})};return(o,t)=>{const n=E("AdminAppLayout");return l(),L(n,null,{default:h(()=>[e("div",P,[e("div",T,[e("div",$,b(c.value)+"\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E42\u0E1B\u0E2A\u0E40\u0E15\u0E2D\u0E23\u0E4C",1),w(u(k),{href:o.route("admin.poster"),method:"get",as:"button",type:"button",class:"px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-200 transform bg-green-900 rounded cursor-pointer hover:bg-green-800"},{default:h(()=>[q]),_:1},8,["href"])]),G,e("div",I,[e("div",O,[e("fieldset",null,[e("div",U,[e("div",W,[H,V(e("input",{type:"text",id:"desc","onUpdate:modelValue":t[0]||(t[0]=s=>u(a).desc=s),class:"mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"},null,512),[[A,u(a).desc,void 0,{trim:!0}]])]),e("ul",J,[(l(!0),p(S,null,N(f,(s,g)=>(l(),p("li",{key:g},[e("div",K,[e("div",Q,[e("div",R,[e("div",X,[Y,_(b(s.name),1)])]),e("div",Z,[e("label",null,[e("span",ee,b(s.label),1),e("input",{id:"file-"+g,type:"file",accept:s.accept,onChange:z=>j(g,s,z),style:{display:"none"}},null,40,te)])])])])]))),128))])])])])]),e("div",se,[m.action==="insert"?(l(),p("button",{key:0,type:"button",onClick:C,class:"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"},"\u0E08\u0E31\u0E14\u0E40\u0E01\u0E47\u0E1A")):F("",!0),m.action==="update"?(l(),p("button",{key:1,type:"button",onClick:s=>!0,class:"text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"},"\u0E41\u0E01\u0E49\u0E44\u0E02")):F("",!0),w(u(k),{href:o.route("admin.poster"),method:"get",as:"button",type:"button",class:"text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10"},{default:h(()=>[oe]),_:1},8,["href"])])])]),_:1})}}};export{ae as default};