var require = () => ({ deprecate: _ => _ });var r=(n,e)=>()=>(e||n((e={exports:{}}).exports,e),e.exports);var o=r(l=>{"use strict";Object.defineProperty(l,"__esModule",{value:!0});l.default=void 0;function a(n,e){return{handler:n,config:e}}a.withOptions=function(n,e=()=>({})){let t=function(i){return{handler:n(i),config:e(i)}};return t.__isOptionsFunction=!0,t.__pluginFunction=n,t.__configFunction=e,t};var _=a;l.default=_});var s=r((C,c)=>{var u=o();c.exports=(u.__esModule?u:{default:u}).default});var w=r((k,p)=>{var b=s(),v=b(function({addUtilities:n,theme:e,variants:t,e:i}){let d=e("lineClamp");n([Object.entries(d).map(([f,m])=>({[`.${i(`line-clamp-${f}`)}`]:{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":`${m}`}})),{".line-clamp-none":{"-webkit-line-clamp":"unset"}}],t("lineClamp"))},{theme:{lineClamp:{1:"1",2:"2",3:"3",4:"4",5:"5",6:"6"}},variants:{lineClamp:["responsive"]}});p.exports=v});export default w();