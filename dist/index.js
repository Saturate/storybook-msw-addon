'use strict';

var browser = require('msw/browser');

var p,u=async i=>{p=i;};function y(){throw new Error('[MSW] Failed to retrieve the worker: no active worker found. Did you forget to call "initialize"?');}var m=async i=>{let{parameters:{msw:e},viewMode:s}=i;if(!e||e.originalResponses||window.msw&&s!=="docs")return;let a;if(s==="docs"&&window.msw?a=typeof global.process>"u"&&window.msw:a=typeof global.process>"u"&&browser.setupWorker(),"handlers"in e&&e.handlers){let r=Object.values(e.handlers).filter(Boolean).reduce((n,t)=>n.concat(t),[]);if(s==="docs"){let{handlers:n,context:t}=d(r,i);r=n,i=t;}r.length>0&&a.use(...r),window.msw||await a.start(p||{}),window.msw=a;let o=await w(r);i.parameters.msw={...e,originalResponses:o};}return {}},d=(i,e)=>(i.forEach(s=>{let a=s.info.path.replace(/\/$/,"")+`/${self.crypto.randomUUID()}`;Object.keys(e.args).forEach(r=>{e.args[r]===s.info.path&&(e.args[r]=a);}),Object.keys(e.allArgs).forEach(r=>{e.allArgs[r]===s.info.path&&(e.allArgs[r]=a);}),Object.keys(e.initialArgs).forEach(r=>{e.initialArgs[r]===s.info.path&&(e.initialArgs[r]=a);}),s.info.header=s.info.header.replace(s.info.path,a),s.info.path=a;}),{handlers:i,context:e}),w=async i=>{let e={};for(let s of i){let a=new Request(s.info.path),r=await fetch(a),o;r.ok?o=await r.json():o=null,e[s.info.path]={data:o,status:r.status};}return e};

exports.getWorker = y;
exports.initialize = u;
exports.mswLoader = m;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=index.js.map