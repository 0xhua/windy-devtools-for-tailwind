var require = () => ({ deprecate: _ => _ });var u=(n,t)=>()=>(t||n((t={exports:{}}).exports,t),t.exports);var d=u(r=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});r.default=void 0;function l(n,t){return{handler:n,config:t}}l.withOptions=function(n,t=()=>({})){let a=function(s){return{handler:n(s),config:t(s)}};return a.__isOptionsFunction=!0,a.__pluginFunction=n,a.__configFunction=t,a};var j=l;r.default=j});var w=u((y,h)=>{var p=d();h.exports=(p.__esModule?p:{default:p}).default});var R=u((q,v)=>{var m=w(),f={position:"relative",paddingBottom:"calc(var(--tw-aspect-h) / var(--tw-aspect-w) * 100%)"},g={position:"absolute",height:"100%",width:"100%",top:"0",right:"0",bottom:"0",left:"0"},b={".aspect-none":{position:"static",paddingBottom:"0"},".aspect-none > *":{position:"static",height:"auto",width:"auto",top:"auto",right:"auto",bottom:"auto",left:"auto"}},O=m(function({addComponents:n,matchComponents:t,theme:a,variants:s,e:c}){let o=a("aspectRatio");if(t){t({"aspect-w":e=>[{...f,"--tw-aspect-w":e},{"> *":g}],"aspect-h":e=>({"--tw-aspect-h":e})},{values:o}),n(b);return}let _=Object.entries(o).map(([e,i])=>`.${c(`aspect-w-${e}`)}`).join(`,
`),$=Object.entries(o).map(([e,i])=>`.${c(`aspect-w-${e}`)} > *`).join(`,
`);n([{[_]:f,[$]:g},b,Object.entries(o).map(([e,i])=>({[`.${c(`aspect-w-${e}`)}`]:{"--tw-aspect-w":i}})),Object.entries(o).map(([e,i])=>({[`.${c(`aspect-h-${e}`)}`]:{"--tw-aspect-h":i}}))],s("aspectRatio"))},{theme:{aspectRatio:{1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",7:"7",8:"8",9:"9",10:"10",11:"11",12:"12",13:"13",14:"14",15:"15",16:"16"}},variants:{aspectRatio:["responsive"]}});v.exports=O});export default R();
