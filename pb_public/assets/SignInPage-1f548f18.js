import{a as s}from"./wouter-preact-7e50a448.js";import{o as e,i as c,l as m,M as d}from"./index-a026868f.js";import{p as a}from"./@preact/signals-4e3ecbd2.js";import"./preact-markdown-b1dbf714.js";import{a as p}from"./preact-bfe5487e.js";import"./pocketbase-05c1a5be.js";/* empty css                      */const u=()=>{const[t,n]=a(""),[i,o]=a(""),l=async()=>{await m(t,i)};return e("article",{className:"grid",children:[c.value&&e(s,{to:"/todos"}),e("div",{children:[e("hgroup",{children:[e("h1",{children:"Sign in"}),e("h2",{children:"Lets not get too crazy..."})]}),e("form",{children:[e("input",{type:"text",name:"login",placeholder:"Login","aria-label":"Login",autocomplete:"email",onInput:r=>n(r.target.value),value:t}),e("input",{type:"password",name:"password",placeholder:"Password","aria-label":"Password",autocomplete:"current-password",onInput:r=>o(r.target.value),value:i}),e("fieldset",{children:e("label",{for:"remember",children:[e("input",{type:"checkbox",role:"switch",id:"remember",name:"remember"}),"Remember me"]})}),e("button",{type:"submit",className:"contrast",onClick:r=>{r.preventDefault(),l()},children:"Login"})]})]}),e("div",{})]})},I=()=>e(p,{children:e(d,{id:"signin",children:e(u,{})})});export{I as SignInPage};
