import{r as d,D as _,o as i,c as w,k as x,e,w as c,G as v,u as r,X as f,Y as y,d as u,E as k,z as b}from"./app.6527d1f4.js";import{t as B}from"./style.c8c6ef8c.js";var M="/build/assets/login_logo.488b7533.jpg";const j={class:"relative flex flex-wrap lg:h-96 lg:items-center"},C={class:"w-full px-4 py-12 lg:w-1/2 sm:px-6 lg:px-8 sm:py-16 lg:py-20 lg:mb-0"},L=e("div",{class:"max-w-lg mx-auto text-center"},[e("div",{class:"text-2xl font-bold sm:text-3xl"},"We're Medicine Team!"),e("div",{class:"font-medium text-gray-500 rounded-lg shadow-xl shadow-green-200"},[e("div",null,"Login \u0E14\u0E49\u0E27\u0E22 Siriraj AD"),e("div",null,"\u0E43\u0E0A\u0E49 Username \u0E41\u0E25\u0E30 Password \u0E40\u0E14\u0E35\u0E22\u0E27\u0E01\u0E31\u0E1A\u0E23\u0E30\u0E1A\u0E1A e-Document")])],-1),z={class:"max-w-md mx-auto mt-8 mb-0 space-y-4"},A=e("label",{for:"username",class:"sr-only"},"Username",-1),D={class:"relative"},E=e("span",{class:"absolute inset-y-0 inline-flex items-center right-4"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5 text-gray-400",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"})])],-1),U=e("label",{for:"password",class:"sr-only"},"Password",-1),F={class:"relative"},K=["type","onKeyup"],P={key:0,xmlns:"http://www.w3.org/2000/svg",class:"w-5 h-5 text-gray-400 cursor-pointer",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},S=e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"},null,-1),T=e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"},null,-1),V=[S,T],I={key:1,xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5 text-gray-400 cursor-pointer",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},G=e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"},null,-1),N=[G],W={class:"flex items-center justify-between"},X={class:"text-sm border p-2 rounded-md text-green-600 hover:bg-gray-200"},Y=["href"],$=e("div",{class:"relative w-full h-64 sm:h-96 lg:w-1/2 lg:h-full"},[e("img",{class:"absolute inset-0 lg:-inset-y-4 object-cover lg:object-contain w-full h-full",src:M,alt:""})],-1),J={__name:"LoginForm",props:{sso_url:{type:String}},setup(p){const o=d(!1);d(base_url);const t=_({username:"",password:""}),m=(n,s,a)=>{B({title:s,description:a},{showIcon:!0,transition:"zoom",position:"top-right",type:n,timeout:3e3})},h=()=>{k(()=>{document.getElementById("loginBtn").focus()})},g=()=>{t.post(route("login_authen"),{onSuccess:()=>{t.reset()},onError:n=>{m("danger","\u0E1E\u0E1A\u0E02\u0E49\u0E2D\u0E1C\u0E34\u0E14\u0E1E\u0E25\u0E32\u0E14",n.msg)},onFinish:()=>{t.processing=!1}})};return(n,s)=>{const a=b("AppLayout");return i(),w(a,null,{default:x(()=>[e("section",j,[e("div",C,[L,e("div",z,[e("div",null,[A,e("div",D,[c(e("input",{"onUpdate:modelValue":s[0]||(s[0]=l=>r(t).username=l),class:"w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm",placeholder:"\u0E23\u0E30\u0E1A\u0E38 username",type:"text"},null,512),[[v,r(t).username]]),E])]),e("div",null,[U,e("div",F,[c(e("input",{"onUpdate:modelValue":s[1]||(s[1]=l=>r(t).password=l),type:[o.value?"text":"password"],onKeyup:y(h,["enter"]),class:"w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm",placeholder:"\u0E23\u0E30\u0E1A\u0E38 password"},null,40,K),[[f,r(t).password]]),e("span",{class:"absolute inset-y-0 inline-flex items-center right-4",onClick:s[2]||(s[2]=l=>o.value=!o.value)},[o.value?(i(),u("svg",P,V)):(i(),u("svg",I,N))])])]),e("div",W,[e("button",{id:"loginBtn",onClick:g,class:"inline-block px-5 py-3 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600"}," \u0E40\u0E02\u0E49\u0E32\u0E2A\u0E39\u0E48\u0E23\u0E30\u0E1A\u0E1A "),e("p",X,[e("a",{href:p.sso_url,target:"_blank"},"\u0E25\u0E37\u0E21\u0E23\u0E2B\u0E31\u0E2A\u0E1C\u0E48\u0E32\u0E19 ?",8,Y)])])])]),$])]),_:1})}}};export{J as default};