import"./wouter-preact-1b87a2ff.js";import{c as f,o as e,M as y}from"./index-3d0f80f4.js";import{p as s,_ as x,F as m,h as v}from"./@preact/signals-4e3ecbd2.js";import{a as k}from"./preact-bfe5487e.js";import"./pocketbase-05c1a5be.js";import"./preact-markdown-b1dbf714.js";/* empty css                      */const C=()=>{const[l,r]=s(null),[t,c]=s(null),[a,d]=s(""),n=x(),g=m(()=>({subscription:{event:"*"}}),[]),{todos:i,deleteTodo:T,updateTodo:u}=f(g);console.log(i),v(()=>{var o;d((t==null?void 0:t.text)||""),t!=null&&t.text&&((o=n==null?void 0:n.current)==null||o.focus())},[t==null?void 0:t.text]);const b=m(()=>{const o=i.filter(p=>p.done);return[...i.filter(p=>!p.done),...o]},[i]);return e("section",{id:"preview",children:[b.map(o=>e("article",{onClick:()=>r(h=>h?null:o.id),style:{backgroundColor:"#182530",margin:"calc(var(--block-spacing-vertical)/2) 0",padding:"calc(var(--block-spacing-horizontal)/1.5) calc(var(--block-spacing-horizontal)/1.5)"},children:[o.done&&e("span",{style:{color:"red"},children:"Done!"}),e("p",{children:o.text}),l===o.id&&e("footer",{style:{display:"flex",flexDirection:"row-reverse"},children:[e("button",{onClick:()=>T(o.id),style:{maxWidth:"165px"},children:"Delete"}),e("button",{className:"contrast",onClick:()=>c(o),style:{marginRight:"8px",maxWidth:"165px"},children:"Edit"}),e("button",{onClick:async()=>{await u(o.id,{...o,done:!o.done})},className:"secondary",style:{marginRight:"8px",maxWidth:"165px"},children:o.done?"Undone":"Done"})]})]},o.id)),t&&e(w,{close:()=>c(null),children:[e("p",{children:"Edit your todo"}),e("input",{value:a,onInput:o=>d(o.target.value),ref:n}),e("footer",{children:[e("a",{href:"#cancel",role:"button",className:"secondary","data-target":"modal-example",onClick:o=>{o.preventDefault(),c(null)},children:"Cancel"}),e("a",{href:"#confirm",role:"button","data-target":"modal-example",onClick:async o=>{o.preventDefault(),await u(t.id,{...t,text:a}),c(null)},children:"Update"})]})]})]})},D=()=>{const[l,r]=s(""),t=x(),{createTodo:c}=f(),a=n=>r(n.target.value);return e("section",{id:"form",children:e("form",{onSubmit:async n=>{n.preventDefault(),await c({text:l,done:!1}),console.log(l),r(""),t.current.focus()},autocomplete:"off",children:[e("h3",{children:"Add todos"}),e("label",{for:"text",children:"Todo"}),e("input",{type:"text",id:"text",name:"text",placeholder:"Todo",value:l,onInput:a,ref:t}),e("small",{children:"Press enter to submit your todo"})]})})},w=({children:l,close:r})=>e("dialog",{open:!0,children:e("article",{children:[e("a",{href:"#close","aria-label":"Close",className:"close","data-target":"modal-example",onClick:r}),l]})}),I=()=>e(k,{children:e(y,{children:[e(D,{}),e(C,{})]})});export{I as TodoPage};
