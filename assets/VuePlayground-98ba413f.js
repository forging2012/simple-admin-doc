import{f as p,k as v,i as c,_ as f}from"./app-6339bfd6.js";import{c as m,r as g,B as n,h as y,o as w,j as a}from"./framework-3afc3da2.js";const R=e=>JSON.parse(decodeURIComponent(e));var V=m({name:"VuePlayground",props:{title:{type:String,default:""},files:{type:String,required:!0},settings:{type:String,default:"{}"}},setup(e){const i=c(),s=g(!0),t=n(),o=n(),l=y(()=>p({},i,R(e.settings))),r=async()=>{const{ReplStore:u,Repl:d}=await f(()=>import("./vue-repl-b6c6a615.js"),["assets/vue-repl-b6c6a615.js","assets/app-6339bfd6.js","assets/framework-3afc3da2.js"]);t.value=d,o.value=new u({serializedState:decodeURIComponent(e.files)}),l.value.vueVersion&&await o.value.setVueVersion(l.value.vueVersion)};return w(async()=>{await r(),s.value=!1}),()=>[a("div",{class:"vue-playground-wrapper"},[e.title?a("div",{class:"header"},decodeURIComponent(e.title)):null,a("div",{class:"repl-container"},[s.value?a(v,{class:"preview-loading",height:192}):null,t.value?a(t.value,{store:o.value,autoResize:!0,...l.value,layout:"horizontal"}):null])])]}});export{V as default};
