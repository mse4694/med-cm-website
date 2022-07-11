import{r as f,D as C,o as u,d as g,e,n as m,t as h,F as p,f as b,j as S}from"./app.681be6cb.js";import{T as j}from"./ToggleSwitch.52cb67c7.js";import{t as B}from"./style.d66b1e89.js";const I={class:"m-4"},q={class:"flex flex-col space-y-4"},z={class:"flex items-center space-x-4"},M={class:"mt-1 flex items-center"},$=e("svg",{class:"w-6 h-6",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},[e("path",{d:"M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z"})],-1),A=e("span",{class:"mt-2 text-base leading-normal"},"\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E23\u0E39\u0E1B",-1),N=["disabled"],T={class:"text-xl font-bold underline"},D={class:"flex flex-col border border-dashed border-blue-500 p-4 rounded-md"},E=e("div",{class:"text-lg font-bold"},"\u0E2A\u0E48\u0E27\u0E19\u0E41\u0E2A\u0E14\u0E07\u0E23\u0E39\u0E1B\u0E01\u0E48\u0E2D\u0E19\u0E17\u0E33\u0E01\u0E32\u0E23\u0E2D\u0E31\u0E1E\u0E42\u0E2B\u0E25\u0E14",-1),U=e("div",{class:"text-sm text-gray-600"},"*** \u0E2B\u0E21\u0E32\u0E22\u0E40\u0E2B\u0E15\u0E38 \u0E23\u0E39\u0E1B\u0E15\u0E49\u0E2D\u0E07\u0E40\u0E1B\u0E47\u0E19\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17 .jpg \u0E2B\u0E23\u0E37\u0E2D .jpeg \u0E40\u0E17\u0E48\u0E32\u0E19\u0E31\u0E49\u0E19 \u0E41\u0E25\u0E30\u0E15\u0E49\u0E2D\u0E07\u0E21\u0E35\u0E02\u0E19\u0E32\u0E14\u0E44\u0E21\u0E48\u0E40\u0E01\u0E34\u0E19 2 MB \u0E15\u0E48\u0E2D\u0E23\u0E39\u0E1B",-1),V={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 mt-4"},L=["src"],R=["onClick"],G=e("div",{class:"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"}," \u0E2D\u0E31\u0E1E\u0E42\u0E2B\u0E25\u0E14 ",-1),H=[G],J={class:"flex flex-col border border-dashed border-green-600 p-4 rounded-md mt-4"},K={class:"flex flex-col md:flex-row items-center justify-between"},O={class:"text-lg font-bold"},P={class:"flex flex-row"},Q=e("div",null,"\u0E40\u0E1B\u0E34\u0E14/\u0E1B\u0E34\u0E14 \u0E01\u0E32\u0E23\u0E25\u0E1A\u0E23\u0E39\u0E1B",-1),W={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 mt-4"},X=["src"],Y=["onClick"],se={__name:"ManageGallery",props:{id:{type:Number,required:!0,default:0},desc:{type:String,required:!0,default:""},event_date:{type:String,required:!0,default:""},images:{type:Array,required:!0,default:[]},limit:{type:Number,require:!0}},setup(a){const v=a,d=f(v.limit),c=f(!1),o=f([]),i=C({id:v.id,event_date:v.event_date}),n=(s,t,l)=>{B({title:t,description:l},{showIcon:!0,transition:"zoom",position:"top-right",type:s,timeout:3e3})},x=s=>{var t=s.target.files||s.dataTransfer.files;if(!!t.length){if(t[0].size>1024*1024*2){n("warning","\u0E04\u0E33\u0E40\u0E15\u0E37\u0E2D\u0E19","\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E44\u0E1F\u0E25\u0E4C\u0E23\u0E39\u0E1B\u0E44\u0E21\u0E48\u0E44\u0E14\u0E49 \u0E40\u0E19\u0E37\u0E48\u0E2D\u0E07\u0E08\u0E32\u0E01\u0E44\u0E1F\u0E25\u0E4C\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13\u0E21\u0E35\u0E02\u0E19\u0E32\u0E14\u0E43\u0E2B\u0E0D\u0E48\u0E01\u0E27\u0E48\u0E32 2MB");return}if(!t[0].type.match("image/jp.*")){n("warning","\u0E04\u0E33\u0E40\u0E15\u0E37\u0E2D\u0E19","\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E44\u0E1F\u0E25\u0E4C\u0E23\u0E39\u0E1B\u0E44\u0E21\u0E48\u0E44\u0E14\u0E49 \u0E2D\u0E19\u0E38\u0E0D\u0E32\u0E15\u0E43\u0E2B\u0E49\u0E41\u0E19\u0E1A\u0E44\u0E1F\u0E25\u0E4C\u0E40\u0E09\u0E1E\u0E32\u0E30 .jpg \u0E40\u0E17\u0E48\u0E32\u0E19\u0E31\u0E49\u0E19");return}y(t)}},y=s=>{for(var t=0;t<s.length;t++){var l=new FileReader;l.onload=function(r){const _=r.target.result;o.value.push({file_url:_,File:s[0]})},l.readAsDataURL(s[t])}},w=s=>{o.value.splice(s,1)},k=()=>{i.transform(s=>({...s,imageFiles:o.value.map(t=>t.File)})).post(route("admin.gallery.upload_image_to_gallery",i.event_date),{_method:"patch",preserveState:!0,only:["images"],onSuccess:()=>{n("success","\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08","\u0E2D\u0E31\u0E1E\u0E42\u0E2B\u0E25\u0E14\u0E23\u0E39\u0E1B\u0E40\u0E02\u0E49\u0E32\u0E41\u0E01\u0E25\u0E25\u0E2D\u0E23\u0E35\u0E48 \u0E40\u0E23\u0E35\u0E22\u0E1A\u0E23\u0E49\u0E2D\u0E22"),i.reset()},onError:s=>{let t="";for(let l in s)t=t+`- ${s[l]}<br/>`;n("danger","\u0E1E\u0E1A\u0E02\u0E49\u0E2D\u0E1C\u0E34\u0E14\u0E1E\u0E25\u0E32\u0E14",t)},onFinish:()=>{i.processing=!1}}),o.value.splice(0)},F=s=>{i.transform(t=>({...t,file_path:s})).delete(route("admin.gallery.delete_image"),{preserveState:!0,only:["images"],onSuccess:()=>{n("success","\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08","\u0E17\u0E33\u0E01\u0E32\u0E23\u0E25\u0E1A\u0E23\u0E39\u0E1B\u0E08\u0E32\u0E01\u0E41\u0E01\u0E25\u0E25\u0E2D\u0E23\u0E35\u0E48 \u0E40\u0E23\u0E35\u0E22\u0E1A\u0E23\u0E49\u0E2D\u0E22"),i.reset()},onError:t=>{let l="";for(let r in t)l=l+`- ${t[r]}<br/>`;n("danger","\u0E1E\u0E1A\u0E02\u0E49\u0E2D\u0E1C\u0E34\u0E14\u0E1E\u0E25\u0E32\u0E14",l)},onFinish:()=>{i.processing=!1}})};return(s,t)=>(u(),g("div",I,[e("div",q,[e("div",z,[e("div",M,[e("label",{class:m([{"cursor-not-allowed":o.value.length>=4||a.images.length>=d.value},"flex flex-col w-24 items-center mx-2 px-2 bg-white text-blue-400 rounded-lg shadow-lg tracking-wide uppercase border border-blue-400 cursor-pointer hover:bg-blue-400 hover:text-white"])},[$,A,e("input",{type:"file",accept:"image/jpeg",onChange:x,class:"hidden",disabled:o.value.length>=4||a.images.length>=d.value},null,40,N)],2)]),e("div",T,h(a.desc),1)]),e("div",D,[E,U,e("div",V,[(u(!0),g(p,null,b(o.value,(l,r)=>(u(),g("div",{key:r},[e("img",{class:"rounded-md shadow-md",src:l.file_url},null,8,L),e("button",{class:"p-1 border rounded-md bg-red-700 hover:bg-red-500 text-white hover:text-black",onClick:_=>w(r)},"\u0E25\u0E1A\u0E23\u0E39\u0E1B\u0E17\u0E35\u0E48 "+h(r+1),9,R)]))),128))])]),e("a",{class:m({hidden:!o.value.length||o.value.length>4||o.value.length+a.images.length>d.value}),href:"#",onClick:k},H,2),e("div",{class:m([{hidden:o.value.length&&o.value.length<=4},"text-red-600 font-bold"])},"\u0E01\u0E23\u0E38\u0E13\u0E32\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E23\u0E39\u0E1B\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E19\u0E49\u0E2D\u0E22 1 \u0E23\u0E39\u0E1B \u0E41\u0E25\u0E30\u0E44\u0E21\u0E48\u0E40\u0E01\u0E34\u0E19 4 \u0E23\u0E39\u0E1B\u0E15\u0E48\u0E2D\u0E01\u0E32\u0E23\u0E2D\u0E31\u0E1E\u0E42\u0E2B\u0E25\u0E14 1 \u0E04\u0E23\u0E31\u0E49\u0E07",2),e("div",{class:m([{hidden:o.value.length+a.images.length<=d.value},"text-red-600 text-sm"])},"*** \u0E40\u0E01\u0E34\u0E19\u0E08\u0E33\u0E19\u0E27\u0E19\u0E23\u0E39\u0E1B\u0E2A\u0E39\u0E07\u0E2A\u0E38\u0E14\u0E17\u0E35\u0E48\u0E08\u0E30\u0E40\u0E01\u0E47\u0E1A\u0E25\u0E07\u0E43\u0E19 gallery",2)]),e("div",J,[e("div",K,[e("div",O,"\u0E23\u0E39\u0E1B\u0E17\u0E35\u0E48\u0E16\u0E39\u0E01\u0E2D\u0E31\u0E1E\u0E42\u0E2B\u0E25\u0E14\u0E40\u0E02\u0E49\u0E32\u0E41\u0E01\u0E25\u0E25\u0E2D\u0E23\u0E35\u0E48\u0E41\u0E25\u0E49\u0E27 ( "+h(a.images.length)+"/"+h(d.value)+" )",1),e("div",P,[Q,S(j,{status:c.value,"onUpdate:status":t[0]||(t[0]=l=>c.value=l),onButtonIsToggle:t[1]||(t[1]=l=>c.value=!c.value)},null,8,["status"])])]),e("div",W,[(u(!0),g(p,null,b(a.images,(l,r)=>(u(),g("div",{key:r},[e("img",{class:"rounded-md shadow-md w-full h-40",src:l.image_url,alt:""},null,8,X),e("button",{class:m([{hidden:!c.value},"p-1 border rounded-md bg-red-700 hover:bg-red-500 text-white hover:text-black"]),onClick:_=>F(l.image_path)},"\u0E25\u0E1A\u0E23\u0E39\u0E1B\u0E17\u0E35\u0E48 "+h(r+1),11,Y)]))),128))])])]))}};export{se as default};
