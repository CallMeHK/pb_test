import"./wouter-preact-7e50a448.js";import{u as s,o as t,a as o,p as d,b as m,M as g}from"./index-bde7474d.js";import{p as u,_ as p,F as f,h as v}from"./@preact/signals-4e3ecbd2.js";import{a as h}from"./preact-bfe5487e.js";import"./preact-markdown-b1dbf714.js";import"./pocketbase-05c1a5be.js";/* empty css                      */const x=i=>{const e=i.id===o.value.id;return t("div",{style:e?{display:"flex",flexDirection:"row-reverse",marginLeft:"16px"}:{display:"flex",flexDirection:"row",marginRight:"24px"},children:t("article",{style:{...e?{backgroundColor:"rgb(34 66 31)"}:{backgroundColor:"#182530"},margin:"calc(var(--block-spacing-vertical)/2) 0",padding:"calc(var(--block-spacing-horizontal)/1.5) calc(var(--block-spacing-horizontal)/1.5)"},children:t("p",{children:i.text})})})},y=()=>{const{data:i}=s({skipMountFetch:!0});return t("div",{children:i.map(e=>t(x,{id:e.author,text:e.text},e.id))})},b=({userId:i})=>{const[e,a]=u(""),{create:r}=s({skipMountFetch:!0}),n=p();return t("section",{id:"form",children:t("form",{onSubmit:async l=>{l.preventDefault(),await r({text:e,author:o.value.id,recipient:i}),a(""),n.current.focus()},autocomplete:"off",children:t("input",{type:"text",id:"text",name:"text",placeholder:"",value:e,onInput:l=>a(l.target.value),ref:n})})})},k=()=>{const i=p();return v(()=>i.current.scrollIntoView()),t("div",{ref:i})},C=({user:i})=>{const e=f(()=>({filter:`(author.id="${i.id}" && recipient.id="${o.value.id}") || (author.id="${o.value.id}" && recipient.id="${i.id}")`,sort:"+created",subscription:{event:"*",callback:n=>{n.action==="create"&&(d.value=[...d.value,n.record])}}}),[i.id]),{data:a,loading:r}=s(e);return r?null:t(h,{children:[t("div",{style:{overflowY:"auto",maxHeight:"60vh"},children:[t(y,{}),t(k,{})]}),t(b,{userId:i.id})]})},M=()=>{const{data:i}=m(),[e,a]=u(null);return t("section",{children:i.map(r=>t("details",{open:(e==null?void 0:e.id)===r.id,children:[t("summary",{onClick:n=>{n.preventDefault(),n.stopPropagation(),a(c=>(c==null?void 0:c.id)===r.id?null:r)},children:o.value.id===r.id?`Me (${r.username})`:r.username}),(e==null?void 0:e.id)===r.id&&t(C,{user:r})]},r.id))})},_=()=>t(h,{children:t(g,{children:t(M,{})})});export{_ as ChatPage};
