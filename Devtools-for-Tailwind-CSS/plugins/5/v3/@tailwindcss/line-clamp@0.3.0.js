var require = () => ({ deprecate: _ => _ });var l=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var o=l(u=>{"use strict";Object.defineProperty(u,"__esModule",{value:!0});u.default=void 0;function c(e,t){return{handler:e,config:t}}c.withOptions=function(e,t=()=>({})){let n=function(i){return{__options:i,handler:e(i),config:t(i)}};return n.__isOptionsFunction=!0,n.__pluginFunction=e,n.__configFunction=t,n};var b=c;u.default=b});var s=l(r=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});r.default=void 0;var g=w(o());function w(e){return e&&e.__esModule?e:{default:e}}var P=g.default;r.default=P});var p=l((M,d)=>{var a=s();d.exports=(a.__esModule?a:{default:a}).default});var O=l((y,f)=>{var h=p(),C=h(function({addUtilities:e,theme:t,variants:n,e:i}){let _=t("lineClamp");e([Object.entries(_).map(([v,m])=>({[`.${i(`line-clamp-${v}`)}`]:{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":`${m}`}})),{".line-clamp-none":{"-webkit-line-clamp":"unset"}}],n("lineClamp"))},{theme:{lineClamp:{1:"1",2:"2",3:"3",4:"4",5:"5",6:"6"}},variants:{lineClamp:["responsive"]}});f.exports=C});export default O();