import{a as s}from"./app.1938cfdc.js";class n{storeLog(t,o,a,e){return s.post(route("log.store"),{data:{section:t,action:o,details:a,type:e}}).then(r=>r.data)}}export{n as T};
