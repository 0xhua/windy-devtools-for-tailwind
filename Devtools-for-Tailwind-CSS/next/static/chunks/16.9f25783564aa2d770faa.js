(self.webpackJsonp_N_E=self.webpackJsonp_N_E||[]).push([[16],{"4yiN":function(e,t,r){"use strict";r.r(t),r.d(t,"setupTypeScript",(function(){return c})),r.d(t,"setupJavaScript",(function(){return l})),r.d(t,"getJavaScriptWorker",(function(){return f})),r.d(t,"getTypeScriptWorker",(function(){return g}));var n,i,o=function(e,t,r,n){return new(r||(r=Promise))((function(i,o){function a(e){try{u(n.next(e))}catch(t){o(t)}}function s(e){try{u(n.throw(e))}catch(t){o(t)}}function u(e){var t;e.done?i(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,s)}u((n=n.apply(e,t||[])).next())}))},a=function(e,t){var r,n,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"===typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,n&&(i=2&o[0]?n.return:o[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,o[1])).done)return i;switch(n=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,n=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=t.call(e,a)}catch(s){o=[6,s],n=0}finally{r=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}},s=function(){function e(e,t){var r=this;this._modeId=e,this._defaults=t,this._worker=null,this._client=null,this._configChangeListener=this._defaults.onDidChange((function(){return r._stopWorker()})),this._updateExtraLibsToken=0,this._extraLibsChangeListener=this._defaults.onDidExtraLibsChange((function(){return r._updateExtraLibs()}))}return e.prototype._stopWorker=function(){this._worker&&(this._worker.dispose(),this._worker=null),this._client=null},e.prototype.dispose=function(){this._configChangeListener.dispose(),this._extraLibsChangeListener.dispose(),this._stopWorker()},e.prototype._updateExtraLibs=function(){return o(this,void 0,void 0,(function(){var e,t;return a(this,(function(r){switch(r.label){case 0:return this._worker?(e=++this._updateExtraLibsToken,[4,this._worker.getProxy()]):[2];case 1:return t=r.sent(),this._updateExtraLibsToken!==e?[2]:(t.updateExtraLibs(this._defaults.getExtraLibs()),[2])}}))}))},e.prototype._getClient=function(){var e=this;if(!this._client){this._worker=monaco.editor.createWebWorker({moduleId:"vs/language/typescript/tsWorker",label:this._modeId,keepIdleModels:!0,createData:{compilerOptions:this._defaults.getCompilerOptions(),extraLibs:this._defaults.getExtraLibs()}});var t=this._worker.getProxy();this._defaults.getEagerModelSync()&&(t=t.then((function(t){return e._worker?e._worker.withSyncedResources(monaco.editor.getModels().filter((function(t){return t.getModeId()===e._modeId})).map((function(e){return e.uri}))):t}))),this._client=t}return this._client},e.prototype.getLanguageServiceWorker=function(){for(var e,t=this,r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];return this._getClient().then((function(t){e=t})).then((function(e){if(t._worker)return t._worker.withSyncedResources(r)})).then((function(t){return e}))},e}(),u=r("wh0V");function c(e){i=p(e,"typescript")}function l(e){n=p(e,"javascript")}function f(){return new Promise((function(e,t){if(!n)return t("JavaScript not registered!");e(n)}))}function g(){return new Promise((function(e,t){if(!i)return t("TypeScript not registered!");e(i)}))}function p(e,t){var r=new s(t,e),n=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return r.getLanguageServiceWorker.apply(r,e)};return monaco.languages.registerCompletionItemProvider(t,new u.l(n)),monaco.languages.registerSignatureHelpProvider(t,new u.k(n)),monaco.languages.registerHoverProvider(t,new u.h(n)),monaco.languages.registerDocumentHighlightProvider(t,new u.f(n)),monaco.languages.registerDefinitionProvider(t,new u.b(n)),monaco.languages.registerReferenceProvider(t,new u.i(n)),monaco.languages.registerDocumentSymbolProvider(t,new u.g(n)),monaco.languages.registerDocumentRangeFormattingEditProvider(t,new u.d(n)),monaco.languages.registerOnTypeFormattingEditProvider(t,new u.e(n)),monaco.languages.registerCodeActionProvider(t,new u.a(n)),monaco.languages.registerRenameProvider(t,new u.j(n)),new u.c(e,t,n),n}}}]);