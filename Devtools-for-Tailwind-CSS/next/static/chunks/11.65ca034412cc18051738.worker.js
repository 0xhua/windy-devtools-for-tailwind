self.webpackChunk_N_E([11],{J1h4:function(e,l,n){"use strict";(function(e){Object.defineProperty(l,"__esModule",{value:!0}),l.flagEnabled=function(e,l){var n,i,a,t,o,d;return r.future.includes(l)?"all"===e.future||null!==(a=null!==(i=null===e||void 0===e||null===(n=e.future)||void 0===n?void 0:n[l])&&void 0!==i?i:u[l])&&void 0!==a&&a:!!r.experimental.includes(l)&&("all"===e.experimental||null!==(d=null!==(o=null===e||void 0===e||null===(t=e.experimental)||void 0===t?void 0:t[l])&&void 0!==o?o:u[l])&&void 0!==d&&d)},l.issueFlagNotices=function(l){if(void 0!==e.env.JEST_WORKER_ID)return;if(o(l).length>0){let e=o(l).map(e=>i.default.yellow(e)).join(", ");a.default.warn("experimental-flags-enabled",["You have enabled experimental features: "+e,"Experimental features in Tailwind CSS are not covered by semver, may introduce breaking changes, and can change at any time."])}},l.default=void 0;var i=t(n("zANB")),a=t(n("xGz6"));function t(e){return e&&e.__esModule?e:{default:e}}let u={optimizeUniversalDefaults:!1},r={future:[],experimental:["optimizeUniversalDefaults"]};function o(e){return"all"===e.experimental?r.experimental:Object.keys(null!==(l=null===e||void 0===e?void 0:e.experimental)&&void 0!==l?l:{}).filter(l=>r.experimental.includes(l)&&e.experimental[l]);var l}var d=r;l.default=d}).call(this,n("8oxB"))}});