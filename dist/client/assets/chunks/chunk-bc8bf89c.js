function V(){return typeof window<"u"&&typeof window.scrollY=="number"}function pe(){return!(typeof process>"u"||!process.cwd||!process.versions||typeof process.versions.node>"u"||!process.release||process.release.name!=="node")}function D(e,t){let n;{var i=Error.stackTraceLimit;Error.stackTraceLimit=1/0,n=new Error(e),Error.stackTraceLimit=i}return pe()&&(n.stack=me(n.stack,t)),n}function me(e,t){if(!e)return e;const n=ye(e);let i=0;return n.filter(o=>o.includes(" (internal/")||o.includes(" (node:internal")?!1:i<t&&ve(o)?(i++,!1):!0).join(`
`)}function ve(e){return e.startsWith("    at ")}function ye(e){return e.split(/\r?\n/)}function T(e,t){const n=globalThis.__vite_plugin_ssr=globalThis.__vite_plugin_ssr||{};return n[e]=n[e]||t}function L(e){return Array.from(new Set(e))}const E=T("assertPackageInstances.ts",{instances:[]}),ee="Make sure your client-side code doesn't include(/bundle)",te=`The client runtime of Server Routing and the client runtime of Client Routing are both being loaded. ${ee} both for a given page.`,z=`Two vite-plugin-ssr client runtime instances are being loaded. ${ee} vite-plugin-ssr twice. (In order to reduce the size of your client-side JavaScript bundles.)`;function B(){{const e=L(E.instances);if(e.length>1){const t=`Both \`vite-plugin-ssr@${e[0]}\` and \`vite-plugin-ssr@${e[1]}\` loaded. Only one version should be loaded.`;m(!1,t)}}E.checkSingleInstance&&E.instances.length>1&&w(!1,z,{onlyOnce:!0,showStackTrace:!0})}function Ot(e){w(E.isClientRouting!==!0,te,{onlyOnce:!0,showStackTrace:!0}),w(E.isClientRouting===void 0,z,{onlyOnce:!0,showStackTrace:!0}),E.isClientRouting=!1,e&&(E.checkSingleInstance=!0),B()}function Lt(e){w(E.isClientRouting!==!1,te,{onlyOnce:!0,showStackTrace:!0}),w(E.isClientRouting===void 0,z,{onlyOnce:!0,showStackTrace:!0}),E.isClientRouting=!0,e&&(E.checkSingleInstance=!0),B()}function Ee(e){E.instances.push(e),B()}const be="0.4.117",P={projectName:"vite-plugin-ssr",projectVersion:be,npmPackageName:"vite-plugin-ssr",githubRepository:"https://github.com/brillout/vite-plugin-ssr"};Ee(P.projectVersion);const R=T("assert.ts",{alreadyLogged:new Set}),I=`[${P.npmPackageName}@${P.projectVersion}]`,Re=`${I}[Bug]`,$e=`${I}[Wrong Usage]`,_e=`${I}[Warning]`,we=`${I}[Info]`,G=2;function r(e,t){var n;if(e)return;const i=(()=>{if(!t)return null;const o=typeof t=="string"?t:"`"+JSON.stringify(t)+"`";return`Debug info (this is for the ${P.projectName} maintainers; you can ignore this): ${o}`})(),s=D([`${Re} You stumbled upon a bug in ${P.projectName}'s source code.`,`Go to ${P.githubRepository}/issues/new and copy-paste this error. (The error's stack trace is usually enough to fix the problem).`,"A maintainer will fix the bug (usually under 24 hours).",`Don't hesitate to reach out as it makes ${P.projectName} more robust.`,i].filter(Boolean).join(" "),G);throw(n=R.onBeforeLog)===null||n===void 0||n.call(R),s}function m(e,t){var n;if(e)return;const i=t.startsWith("[")?"":" ",s=`${$e}${i}${t}`,o=D(s,G);throw(n=R.onBeforeLog)===null||n===void 0||n.call(R),o}function Pe(e){const t=e.startsWith("[")?"":" ";return D(`${I}${t}${e}`,G)}function w(e,t,{onlyOnce:n,showStackTrace:i}){var s;if(e)return;const o=`${_e} ${t}`;if(n){const{alreadyLogged:l}=R,a=n===!0?o:n;if(l.has(a))return;l.add(a)}(s=R.onBeforeLog)===null||s===void 0||s.call(R),console.warn(i?new Error(o):o)}function kt(e,t,{onlyOnce:n}){var i;if(e)return;const s=`${we} ${t}`;if(n){const{alreadyLogged:o}=R,l=s;if(o.has(l))return;o.add(l)}(i=R.onBeforeLog)===null||i===void 0||i.call(R),console.log(s)}const F=T("utils/assertRouterType.ts",{});function Ct(){ne(Se()),F.isClientRouting=!0}function Se(){return F.isClientRouting!==!1}function Wt(){ne(F.isClientRouting!==!0),F.isClientRouting=!1}function ne(e){m(V(),"`import { something } from 'vite-plugin-ssr/client/router'` is forbidden on the server-side"),w(e,"You shouldn't `import { something } from 'vite-plugin-ssr/client/router'` when using Server Routing. The 'vite-plugin-ssr/client/router' utilities work only with Client Routing. In particular, don't `import { navigate }` nor `import { prefetch }` when using Server Routing as these will unnecessarily bloat your client-side bundle.",{showStackTrace:!1,onlyOnce:!0})}function M(e){const t=e/1e3;if(t<120){const n=J(t);return`${n} second${Y(n)}`}{const n=t/60,i=J(n);return`${i} minute${Y(i)}`}}function J(e){let t=e.toFixed(1);return t.endsWith(".0")&&(t=t.slice(0,-2)),t}function Y(e){return e==="1"?"":"s"}function Ie(e,t,n){const{timeoutErr:i,timeoutWarn:s}=Te(t);let o,l;const a=new Promise((f,p)=>{o=h=>{c(),f(h)},l=h=>{c(),p(h)}}),c=()=>{clearTimeout(u),clearTimeout(g)},u=setTimeout(()=>{const f=`${I}[Warning] The ${t}() hook defined by ${n} is taking more than ${M(s)}`;console.warn(f)},s),g=setTimeout(()=>{const f=Pe(`Hook timeout: the ${t}() hook defined by ${n} didn't finish after ${M(i)}`);l(f)},i);return(async()=>{try{const f=await e();o(f)}catch(f){l(f)}})(),a}function Te(e){let t=4e4,n=4*1e3;return e==="onBeforeRoute"&&(t=5*1e3,n=1*1e3),e==="onBeforePrerender"&&(t=10*60*1e3,n=30*1e3),{timeoutErr:t,timeoutWarn:n}}function O(e,t,n){return typeof e=="string"?q(e.split(""),t,n).join(""):q(e,t,n)}function q(e,t,n){const i=[];let s=t>=0?t:e.length+t;r(s>=0&&s<=e.length);let o=n>=0?n:e.length+n;for(r(o>=0&&o<=e.length);!(s===o||(s===e.length&&(s=0),s===o));){const l=e[s];r(l!==void 0),i.push(l),s++}return i}function je(e){return e.startsWith("/")||e.startsWith("http")||e.startsWith("tauri://")||e.startsWith(".")||e.startsWith("?")||e.startsWith("#")||e===""}function Fe(e,t){r(je(e),{url:e}),r(t.startsWith("/"),{url:e,baseServer:t});const[n,...i]=e.split("#");r(n!==void 0);const s=["",...i].join("#")||null;r(s===null||s.startsWith("#"));const o=s===null?"":A(s.slice(1)),[l,...a]=n.split("?");r(l!==void 0);const c=["",...a].join("?")||null;r(c===null||c.startsWith("?"),{url:e,searchOriginal:c});const u={},g={};Array.from(new URLSearchParams(c||"")).forEach(([y,H])=>{u[y]=H,g[y]=[...g[y]||[],H]});const{origin:f,pathnameResolved:p}=Le(l,t);r(f===null||f===A(f),{origin:f}),r(p.startsWith("/"),{url:e,pathnameResolved:p}),r(f===null||e.startsWith(f),{url:e,origin:f});const h=l.slice((f||"").length);{const y=`${f||""}${h}${c||""}${s||""}`;r(e===y,{url:e,urlRecreated:y})}let{pathname:v,hasBaseServer:$}=Ce(p,t);return v=Oe(v),r(v.startsWith("/")),{origin:f,pathname:v,pathnameOriginal:h,hasBaseServer:$,search:u,searchAll:g,searchOriginal:c,hash:o,hashOriginal:s}}function A(e){try{return decodeURIComponent(e)}catch{}try{return decodeURI(e)}catch{}return e}function Oe(e){return e.split("/").map(t=>A(t).split("/").join("%2F")).join("/")}function Le(e,t){var n;if(e.startsWith("//"))return{origin:null,pathnameResolved:e};let i=!1;const s="tauri://",o="http://";e.startsWith(s)&&(i=!0,e=o+e.slice(s.length));let l,a;try{const c=new URL(e);l=c.origin,a=c.pathname}catch{l=null;let u=typeof window<"u"&&((n=window==null?void 0:window.document)===null||n===void 0?void 0:n.baseURI);u=u||"http://fake.example.org"+t,a=new URL(e,u).pathname}return a||(a="/"),i&&(r(l),r(l.startsWith(o)),l=s+l.slice(o.length)),r(a.startsWith("/"),{urlWithoutSearch:e,pathnameResolved:a}),r(a===a.split("?")[0].split("#")[0]),{origin:l,pathnameResolved:a}}function ke(e){r(e.startsWith("/")),r(!e.includes("?")),r(!e.includes("#"))}function Ce(e,t){ke(e),r(We(t));let n=e;if(r(n.startsWith("/")),r(t.startsWith("/")),t==="/")return{pathname:e,hasBaseServer:!0};let i=t;return t.endsWith("/")&&n===O(t,0,-1)&&(i=O(t,0,-1),r(n===i)),n.startsWith(i)?(r(n.startsWith("/")||n.startsWith("http")),r(n.startsWith(i)),n=n.slice(i.length),n.startsWith("/")||(n="/"+n),r(n.startsWith("/")),{pathname:n,hasBaseServer:!0}):{pathname:e,hasBaseServer:!1}}function We(e){return e.startsWith("/")}function At(e){const t=window.location.href,{searchOriginal:n,hashOriginal:i,pathname:s}=Fe(t,"/");let o;return e!=null&&e.withoutHash?o=`${s}${n||""}`:o=`${s}${n||""}${i||""}`,r(o.startsWith("/")),o}function k(e){return e instanceof Function||typeof e=="function"}function b(e){return typeof e=="object"&&e!==null}function d(e,t,n="unknown"){if(!b(e))return!1;if(!(t in e))return n==="undefined";if(n==="unknown")return!0;const i=e[t];return n==="array"?Array.isArray(i):n==="object"?b(i):n==="string[]"?Array.isArray(i)&&i.every(s=>typeof s=="string"):n==="function"?k(i):Array.isArray(n)?typeof i=="string"&&n.includes(i):n==="null"?i===null:n==="undefined"?i===void 0:n==="true"?i===!0:n==="false"?i===!1:typeof i===n}function U(e,t){Object.assign(e,t)}r(V());const Ae=["js","ts","cjs","cts","mjs","mts","jsx","tsx","cjsx","ctsx","mjsx","mtsx"],ie=["vue","svelte","marko","md","mdx"],xe=[...Ae,...ie];function se(e){const t=xe.some(n=>e.endsWith("."+n));return r(!Ne(e)||t),t}function Ne(e){return/\.(c|m)?(j|t)sx?$/.test(e)}function Ve(e){return ie.some(t=>e.endsWith("."+t))}function xt(e){return(t,n)=>{const i=e(t),s=e(n);return i===s?0:i>s?-1:1}}function De(e){return(t,n)=>{const i=e(t),s=e(n);if(r([!0,!1,null].includes(i)),r([!0,!1,null].includes(s)),i===s)return 0;if(i===!0||s===!1)return-1;if(s===!0||i===!1)return 1;r(!1)}}function ze(e){return De(t=>{const n=e(t);return n===null?null:!n})}function Be(e,t){return e.toLowerCase()<t.toLowerCase()?-1:e.toLowerCase()>t.toLowerCase()?1:0}const Ge=e=>e!=null,Ue="\\";function re(e){r(e&&!e.includes(Ue),`Wrongly formatted path: ${e}`)}const K=/[^a-zA-Z-_]/;function oe(e){return He(e)!==null}function He(e){if(e===void 0||e.includes("\\")||e.startsWith("/"))return null;let t=null;if(e.startsWith("@")){if(!e.includes("/"))return null;const[a,...c]=e.split("/");t=a,e=c.join("/"),r(t&&t.startsWith("@"))}if(e==="")return null;const[n,...i]=e.split("/"),s=n,o=i.length===0?null:i.join("/");return r(s),r(o===null||!o.startsWith("/")),K.test(s)||t&&K.test(t.slice(1))?null:(r(!s.startsWith("/")),{npmPackageName:t?`${t}/${s}`:s,importPath:o})}const Me=["$$registrations"];function Je(e,t){Ye(e,t,!0)}function Ye(e,t,n){const s=Object.keys(e).filter(a=>!Me.includes(a)),o=s.filter(a=>a!=="default"),l=s.includes("default");if(o.length===0){if(l)return;r(s.length===0),m(!1,`${t} doesn't export any value, but it should have a \`export default\` instead`)}else{const a=o.join(", ");n?m(o.length===0,`${t} should only have a default export: remove \`export { ${a} }\``):m(o.length===0,`${t} replace \`export { ${a} }\` with \`export default { ${a} }\``)}}function qe(e){return Object.entries(e)}const Ke=["clientRouting"];function Ze(e){Ke.forEach(t=>{if(r(e.fileExports),!(t in e.fileExports))return;const n=`The value of \`${t}\` is only allowed to be \`true\`.`;m(e.fileExports[t]!==!1,`${e.filePath} has \`export { ${t} }\` with the value \`false\` which is prohibited: remove \`export { ${t} }\` instead. (${n})`),m(e.fileExports[t]===!0,`${e.filePath} has \`export { ${t} }\` with a forbidden value. ${n}`)})}const le=["render","clientRouting","prerender","doNotPrerender"];function Qe(e,t){m(!le.includes(e),`${t} has \`export default { ${e} }\` which is prohibited, use \`export { ${e} }\` instead.`)}function Xe(e,t){const n={},i={},s={};if(e.forEach(a=>{et(a).forEach(({exportName:u,exportValue:g,isFromDefaultExport:f})=>{var p;r(u!=="default"),s[u]=(p=s[u])!==null&&p!==void 0?p:[],s[u].push({exportValue:g,exportSource:`${a.filePath} > ${f?`\`export default { ${u} }\``:`\`export { ${u} }\``}`,filePath:a.filePath,_filePath:a.filePath,_fileType:a.fileType,_isFromDefaultExport:f})})}),t){const{configValues:a}=t;qe(a).forEach(([c,u])=>{var g,f,p;const h=t.configElements[c];r(h);const{configDefinedByFile:v,configDefinedAt:$}=h;r(v),i[c]=(g=i[c])!==null&&g!==void 0?g:u,n[c]=(f=n[c])!==null&&f!==void 0?f:[],n[c].push({configValue:u,configDefinedAt:$,configDefinedByFile:v});const y=c;s[y]=(p=s[y])!==null&&p!==void 0?p:[],s[y].push({exportValue:u,exportSource:$,filePath:v,_filePath:v,_fileType:null,_isFromDefaultExport:null})})}const o=tt(),l={};return Object.entries(s).forEach(([a,c])=>{c.forEach(({exportValue:u,_fileType:g,_isFromDefaultExport:f})=>{var p;l[a]=(p=l[a])!==null&&p!==void 0?p:u,g===".page"&&!f&&(a in o||(o[a]=u))})}),r(!("default"in l)),r(!("default"in s)),{config:i,configEntries:n,exports:l,exportsAll:s,pageExports:o}}function et(e){const{filePath:t,fileExports:n}=e;r(n),r(se(t));const i=[];return Object.entries(n).sort(ze(([s])=>s==="default")).forEach(([s,o])=>{let l=s==="default";if(l)if(Ve(t))s="Page";else{m(b(o),`The \`export default\` of ${t} should be an object.`),Object.entries(o).forEach(([a,c])=>{Qe(a,t),i.push({exportName:a,exportValue:c,isFromDefaultExport:l})});return}i.push({exportName:s,exportValue:o,isFromDefaultExport:l})}),i.forEach(({exportName:s,isFromDefaultExport:o})=>{r(!(o&&le.includes(s)))}),i}function tt(){return new Proxy({},{get(...e){return V()||w(!1,"`pageContext.pageExports` is outdated. Use `pageContext.exports` instead, see https://vite-plugin-ssr.com/exports",{onlyOnce:!0,showStackTrace:!0}),Reflect.get(...e)}})}function nt(e){const t=".page.",n=O(e.split(t),0,-1).join(t);return r(!n.includes("\\")),n}function S(e){re(e),r(e.startsWith("/")||oe(e),{filePath:e})}function Nt(e,t){if(t.length>0){const i=t.filter(s=>s.isErrorPage);return i.length===0?null:(m(i.length===1,"Only one error page can be defined"),i[0].pageId)}const n=L(e.map(({pageId:i})=>i).filter(i=>C(i)));if(m(n.length<=1,`Only one _error.page.js is allowed, but found several: ${n.join(" ")}`),n.length>0){const i=n[0];return r(i),i}return null}function C(e,t){return r(!e.includes("\\")),e.includes("/_error")}function it(e,t){if(t.length>0){const n=t.find(i=>i.pageId===e);return r(n),n.isErrorPage}else return C(e)}const st=[".page",".page.server",".page.route",".page.client",".css"];function rt(e){if(re(e),e.endsWith(".css"))return r(oe(e),e),".css";r(se(e),e);const n=e.split("/").slice(-1)[0].split("."),i=n.slice(-3)[0],s=n.slice(-2)[0];if(s==="page")return".page";if(r(i==="page",e),s==="server")return".page.server";if(s==="client")return".page.client";if(s==="route")return".page.route";r(!1,e)}function ae(e){const t=o=>s.pageId===o||s.isDefaultPageFile&&(Z(s.filePath)||ot(o,s.filePath)),n=rt(e),s={filePath:e,fileType:n,isEnv:o=>{if(r(n!==".page.route"),o==="CLIENT_ONLY")return n===".page.client"||n===".css";if(o==="SERVER_ONLY")return n===".page.server";if(o==="CLIENT_AND_SERVER")return n===".page";r(!1)},isRelevant:t,isDefaultPageFile:x(e),isRendererPageFile:n!==".css"&&x(e)&&Z(e),isErrorPageFile:C(e),pageId:nt(e)};return s}function x(e){return S(e),C(e)?!1:e.includes("/_default")}function Z(e){return S(e),e.includes("/renderer/")}function ot(e,t){S(e),S(t),r(!e.endsWith("/")),r(!t.endsWith("/")),r(x(t));const n=O(t.split("/"),0,-1).filter(i=>i!=="_default").join("/");return e.startsWith(n)}function lt(e){r(Array.isArray(e)||e===null),r(e!==null),e.forEach(t=>{r(b(t)),r(d(t,"pageId","string")),r(d(t,"pageConfigFilePathAll","string[]")),r(d(t,"routeFilesystem","string")||d(t,"routeFilesystem","null")),r(d(t,"routeFilesystemDefinedBy","string")),r(d(t,"loadConfigValueFiles","function")),r(d(t,"isErrorPage","boolean")),r(d(t,"configElements","object")),ce(t.configElements,!1)})}function at(e){ce(e,!0)}function ce(e,t){r(b(e)),Object.entries(e).forEach(([n,i])=>{if(r(b(i)||i===null),i===null){r(t);return}if(r(d(i,"configDefinedAt","string")),r(d(i,"pageConfigFilePath","string")||d(i,"pageConfigFilePath","null")),r(d(i,"configEnv","string")),r(d(i,"configValueFilePath","string")||d(i,"configValueFilePath","null")),r(d(i,"configValueFileExport","string")||d(i,"configValueFileExport","null")),t&&r(d(i,"configValue")),i.configValueFilePath){const{configValueFilePath:s}=i;if(n==="route"){r(d(i,"configValue"));const{configValue:o}=i,l=typeof o;m(l==="string"||k(o),`${s} has a default export with an invalid type '${l}': the default export should be a string or a function`)}}})}function ct(e){r(d(e,"isGeneratedFile")),r(e.isGeneratedFile!==!1,"vite-plugin-ssr was re-installed(/re-built). Restart your app."),r(e.isGeneratedFile===!0,`\`isGeneratedFile === ${e.isGeneratedFile}\``),r(d(e,"pageFilesLazy","object")),r(d(e,"pageFilesEager","object")),r(d(e,"pageFilesExportNamesLazy","object")),r(d(e,"pageFilesExportNamesEager","object")),r(d(e.pageFilesLazy,".page")),r(d(e.pageFilesLazy,".page.client")||d(e.pageFilesLazy,".page.server")),r(d(e,"pageFilesList","string[]")),r(d(e,"invalidator","object")||d(e,"invalidator","null")),e.invalidator&&Object.keys(e.invalidator).forEach(o=>{const l=o.split("/").slice(-1)[0];r(l.startsWith("+"))}),r(d(e,"pageConfigs")),r(d(e,"pageConfigGlobal"));const{pageConfigs:t,pageConfigGlobal:n}=e;lt(t),at(n);const i={};j(e.pageFilesLazy).forEach(({filePath:o,pageFile:l,globValue:a})=>{var c;l=i[o]=(c=i[o])!==null&&c!==void 0?c:l;const u=a;Q(u),l.loadFile=async()=>{"fileExports"in l||(l.fileExports=await u(),Ze(l))}}),j(e.pageFilesExportNamesLazy).forEach(({filePath:o,pageFile:l,globValue:a})=>{var c;l=i[o]=(c=i[o])!==null&&c!==void 0?c:l;const u=a;Q(u),l.loadExportNames=async()=>{if(!("exportNames"in l)){const g=await u();m("exportNames"in g,"You seem to be using Vite 2 but the latest vite-plugin-ssr versions only work with Vite 3"),r(d(g,"exportNames","string[]"),l.filePath),l.exportNames=g.exportNames}}}),j(e.pageFilesEager).forEach(({filePath:o,pageFile:l,globValue:a})=>{var c;l=i[o]=(c=i[o])!==null&&c!==void 0?c:l;const u=a;r(b(u)),l.fileExports=u}),j(e.pageFilesExportNamesEager).forEach(({filePath:o,pageFile:l,globValue:a})=>{var c;l=i[o]=(c=i[o])!==null&&c!==void 0?c:l;const u=a;r(b(u)),r(d(u,"exportNames","string[]"),l.filePath),l.exportNames=u.exportNames}),e.pageFilesList.forEach(o=>{var l;i[o]=(l=i[o])!==null&&l!==void 0?l:ae(o)});const s=Object.values(i);return s.forEach(({filePath:o})=>{r(!o.includes("\\"))}),{pageFiles:s,pageConfigs:t,pageConfigGlobal:n}}function j(e){const t=[];return Object.entries(e).forEach(([n,i])=>{r(st.includes(n)),r(b(i)),Object.entries(i).forEach(([s,o])=>{const l=ae(s);r(l.fileType===n),t.push({filePath:s,pageFile:l,globValue:o})})}),t}function Q(e){r(k(e))}const _=T("setPageFiles.ts",{});function Vt(e){const{pageFiles:t,pageConfigs:n,pageConfigGlobal:i}=ct(e);_.pageFilesAll=t,_.pageConfigs=n,_.pageConfigGlobal=i}async function Dt(e,t){e?(r(!_.pageFilesGetter),r(t===void 0)):(r(_.pageFilesGetter),r(typeof t=="boolean"),(!_.pageFilesAll||!t)&&await _.pageFilesGetter());const{pageFilesAll:n,pageConfigs:i,pageConfigGlobal:s}=_;r(n&&i&&s);const o=ut(n,i);return{pageFilesAll:n,allPageIds:o,pageConfigs:i,pageConfigGlobal:s}}function ut(e,t){const n=e.filter(({isDefaultPageFile:o})=>!o).map(({pageId:o})=>o),i=L(n),s=t.map(o=>o.pageId);return[...i,...s]}function ft(e,t){return ue(e,t,!0)}function zt(e,t){return ue(e,t,!1)}function ue(e,t,n){const i=n?"CLIENT_ONLY":"SERVER_ONLY",s=e.filter(h=>h.isRelevant(t)&&h.fileType!==".page.route").sort(dt(n,t)),o=h=>{const v=s.filter(y=>y.pageId===t&&y.isEnv(h?"CLIENT_AND_SERVER":i));m(v.length<=1,`Merge the following files into a single file: ${v.map(y=>y.filePath).join(" ")}`);const $=v[0];return r($===void 0||!$.isDefaultPageFile),$},l=o(!1),a=o(!0),c=h=>s.filter(v=>v.isRendererPageFile&&v.isEnv(h?"CLIENT_AND_SERVER":i))[0],u=c(!1),g=c(!0),f=s.filter(h=>h.isDefaultPageFile&&!h.isRendererPageFile&&(h.isEnv(i)||h.isEnv("CLIENT_AND_SERVER")));return[l,a,...f,u,g].filter(Ge)}function dt(e,t){const n=e?"CLIENT_ONLY":"SERVER_ONLY",i=-1,s=1,o=0;return(l,a)=>{if(!l.isDefaultPageFile&&a.isDefaultPageFile)return i;if(!a.isDefaultPageFile&&l.isDefaultPageFile)return s;{const c=l.isRendererPageFile,u=a.isRendererPageFile;if(!c&&u)return i;if(!u&&c)return s;r(c===u)}{const c=X(t,l.filePath),u=X(t,a.filePath);if(c<u)return i;if(u<c)return s;r(c===u)}{if(l.isEnv(n)&&a.isEnv("CLIENT_AND_SERVER"))return i;if(a.isEnv(n)&&l.isEnv("CLIENT_AND_SERVER"))return s}return o}}function X(e,t){S(e),S(t);let n=0;for(;n<e.length&&n<t.length&&e[n]===t[n];n++);const i=e.slice(n),s=t.slice(n),o=i.split("/").length,l=s.split("/").length;return o+l}function gt(e,t){var n;const i=e.filter(o=>o.pageId===t);return r(i.length<=1),(n=i[0])!==null&&n!==void 0?n:null}async function ht(e,t){const n={};return!t&&"configValues"in e||((await e.loadConfigValueFiles()).forEach(s=>{const{configName:o,importFile:l}=s;let a;if(s.isPlusFile){const{importFileExports:c}=s;o!=="client"&&Je(c,l),a=c.default}else a=s.importValue;r(!(o in n)),n[o]=a}),Object.entries(e.configElements).map(([s,o])=>{o.configValueFilePath||(r(!(s in n)),n[s]=o.configValue)}),U(e,{configValues:n})),e}const fe="__whileFetchingAssets";async function Bt(e,t,n){const i=ft(e,n),s=gt(t,n);let o;try{o=(await Promise.all([s&&ht(s,!1),...i.map(h=>{var v;return(v=h.loadFile)===null||v===void 0?void 0:v.call(h)})]))[0]}catch(p){throw pt(p)&&Object.assign(p,{[fe]:!0}),p}const{config:l,configEntries:a,exports:c,exportsAll:u,pageExports:g}=Xe(i,o);return{config:l,configEntries:a,exports:c,exportsAll:u,pageExports:g,_pageFilesLoaded:i}}function Gt(e){return e?e[fe]===!0:!1}function pt(e){return e instanceof Error?["Failed to fetch dynamically imported module","error loading dynamically imported module","Importing a module script failed","error resolving module specifier","failed to resolve module"].some(n=>e.message.toLowerCase().includes(n.toLowerCase())):!1}function Ut(e,t,n){const i=e.configElements[t];if(!i||de(e,t))return null;const{configValue:s,configDefinedAt:o}=i;return m(typeof s===n,`${o} has an invalid type \`${typeof s}\`: is should be a ${n} instead`),s}function Ht(e,t){const n=e.configElements[t];if(!n||de(e,t))return null;if(n.configValueFilePath!==null)return n.configValueFilePath;const{configValue:i,configDefinedAt:s}=n;m(typeof i=="string",`${s} has an invalid type \`${typeof i}\`: it should be a \`string\` instead`),m(!1,`${s} has an invalid value \`${i}\`: it should be a file path instead`)}function de(e,t){const n=e.configElements[t];if(!n)return!0;const{configValueFilePath:i,configValue:s}=n;return i?!1:s==null}function mt(e,t){const n=t.find(i=>i.pageId===e);return r(t.length>0),r(n),n}const vt=[{is:e=>e===void 0,match:e=>e==="!undefined",serialize:()=>"!undefined",deserialize:()=>{}},{is:e=>e===1/0,match:e=>e==="!Infinity",serialize:()=>"!Infinity",deserialize:()=>1/0},{is:e=>e===-1/0,match:e=>e==="!-Infinity",serialize:()=>"!-Infinity",deserialize:()=>-1/0},{is:e=>typeof e=="number"&&isNaN(e),match:e=>e==="!NaN",serialize:()=>"!NaN",deserialize:()=>NaN},{is:e=>e instanceof Date,match:e=>e.startsWith("!Date:"),serialize:e=>"!Date:"+e.toISOString(),deserialize:e=>new Date(e.slice(6))},{is:e=>typeof e=="bigint",match:e=>e.startsWith("!BigInt:"),serialize:e=>"!BigInt:"+e.toString(),deserialize:e=>{if(typeof BigInt>"u")throw new Error("Your JavaScript environement does not support BigInt. Consider adding a polyfill.");return BigInt(e.slice(8))}},{is:e=>e instanceof RegExp,match:e=>e.startsWith("!RegExp:"),serialize:e=>"!RegExp:"+e.toString(),deserialize:e=>{e=e.slice(8);const t=e.match(/\/(.*)\/(.*)?/),n=t[1],i=t[2];return new RegExp(n,i)}},{is:e=>e instanceof Map,match:e=>e.startsWith("!Map:"),serialize:(e,t)=>"!Map:"+t(Array.from(e.entries())),deserialize:(e,t)=>new Map(t(e.slice(5)))},{is:e=>e instanceof Set,match:e=>e.startsWith("!Set:"),serialize:(e,t)=>"!Set:"+t(Array.from(e.values())),deserialize:(e,t)=>new Set(t(e.slice(5)))},{is:e=>typeof e=="string"&&e.startsWith("!"),match:e=>e.startsWith("!"),serialize:e=>"!"+e,deserialize:e=>e.slice(1)}];function ge(e){const t=JSON.parse(e);return he(t)}function he(e){return typeof e=="string"?yt(e):(typeof e=="object"&&e!==null&&Object.entries(e).forEach(([t,n])=>{e[t]=he(n)}),e)}function yt(e){for(const{match:t,deserialize:n}of vt)if(t(e))return n(e,ge);return e}function Mt(){var e;const t=(e=document.getElementById("vite-plugin-ssr_pageContext"))===null||e===void 0?void 0:e.textContent;r(t);const n=ge(t);r(d(n,"pageContext","object"));const{pageContext:i}=n;return r(d(i,"_pageId","string")),U(i,{_pageContextRetrievedFromServer:{...i},_comesDirectlyFromServer:!0}),i}function N(e,t){if(!(t in e.exports))return null;const n=e.exports[t],i=e.exportsAll[t][0];r(i.exportValue===n);const s=i.exportSource;return r(s),r(!t.endsWith(")")),m(k(n),`hook ${t}() defined by ${s} should be a function`),{hook:n,hookSrc:s}}function Jt(e,t){N(e,t)}function Et(e){const t=Object.entries(e);for(const n in e)delete e[n];t.sort(([n],[i])=>Be(n,i)).forEach(([n,i])=>{e[n]=i})}function bt(e){Rt(e),$t(e)}function Rt(e){it(e._pageId,e._pageConfigs)&&r(d(e,"is404","boolean"))}function $t(e){if(e.is404===void 0||e.is404===null)return;const t=e.pageProps||{};if(!b(t)){w(!1,"pageContext.pageProps should be an object",{showStackTrace:!0,onlyOnce:!0});return}t.is404=t.is404||e.is404,e.pageProps=t}const W=T("releasePageContext.ts",{});function _t(e,t){if(t){const s=e;r([!0,!1].includes(s.isHydration)),r([!0,!1,null].includes(s.isBackwardNavigation))}else{const s=e;r(s.isHydration===!0),r(s.isBackwardNavigation===null)}r("config"in e),r("configEntries"in e),r("exports"in e),r("exportsAll"in e),r("pageExports"in e),r(b(e.pageExports));const n=e.exports.Page;U(e,{Page:n}),Tt(e),Et(e),r([!0,!1].includes(e._comesDirectlyFromServer));const i=e._comesDirectlyFromServer?St(e):e;return bt(e),i}const wt=["then","toJSON"],Pt=["_pageId"];function St(e){return new Proxy(e,{get:n});function t(i){return!(i in e||wt.includes(i)||typeof i=="symbol"||typeof i!="string"||i.startsWith("__v_"))}function n(i,s){return W.disableAssertPassToClient!==s&&It(e._pageContextRetrievedFromServer,s,t(s)),W.disableAssertPassToClient=s,window.setTimeout(()=>{W.disableAssertPassToClient=void 0},0),e[s]}}function It(e,t,n){if(!n||e===null)return;const i=Object.keys(e).filter(s=>!Pt.includes(s));m(!1,[`pageContext.${t} isn't available in the browser`,`('${t}' is missing in the passToClient list [${i.map(s=>`'${s}'`).join(", ")}]).`,`Did you forget to add '${t}' to the passToClient list?`,"See https://vite-plugin-ssr.com/passToClient"].join(" "))}function Tt(e){Object.entries(e).forEach(([t,n])=>{delete e[t],e[t]=n})}async function Yt(e,t){const n=_t(e,t);let i=null,s;i=N(e,"render"),s="render";{const a=N(e,"onRenderClient");a&&(i=a,s="onClientRender")}if(!i){const a=jt(e);if(e._pageConfigs.length>0)Ft(e._pageId,e._pageConfigs,a);else{const c=e._pageFilesLoaded.filter(g=>g.fileType===".page.client");let u;c.length===0?u="No file `*.page.client.*` found for URL "+a:u="One of the following files should export a `render()` hook: "+c.map(g=>g.filePath).join(" "),m(!1,u)}}r(i);const o=i.hook;r(s);const l=await Ie(()=>o(n),"render",i.hookSrc);m(l===void 0,`The ${s}() hook defined by ${i.hookSrc} isn't allowed to return a value`)}function jt(e){let t;try{t=e.urlOriginal}catch{}return t=t??window.location.href,t}function Ft(e,t,n){var i,s;const o=mt(e,t);r(!(!((i=o.configElements.onRenderClient)===null||i===void 0)&&i.configValue)),r(((s=o.configElements.clientRouting)===null||s===void 0?void 0:s.configValue)===!0);const l=[];let a=[];t.forEach(g=>{a.push(...g.pageConfigFilePathAll);const f=g.configElements.onRenderClient;f&&f.configValue&&l.push(f.configDefinedAt)}),a=L(a);const c="- ",u=`No onRenderClient() hook found for URL \`${n}\`. (A onRenderClient() hook is required when using Client Routing: the config \`clientRouting\` is \`true\` for the URL \`${n}\`.)`;if(l.length===0)m(!1,[`${u} No onRenderClient() hook is defined by any of your page config files. Your page config files (which none of them defines \`onClientRender()\`):`,...a.map(g=>c+g)].join(`
`));else{const g=l.length>=2;m(!1,[`${u} Note that onRenderClient() is defined at:`,...l.map(f=>`${c}${f}`),`but ${g?"none of them":"it doesn't"} apply to the URL \`${n}\`.`].join(`
`))}}export{kt as A,At as B,Mt as C,Bt as D,Nt as E,N as F,_t as G,Ie as H,mt as I,ge as J,Pe as K,Jt as L,Yt as M,Gt as N,Wt as O,Ot as P,m as a,Ct as b,r as c,Se as d,k as e,O as f,T as g,xt as h,V as i,C as j,d as k,w as l,De as m,b as n,Lt as o,Fe as p,U as q,Dt as r,Vt as s,We as t,ft as u,zt as v,Ut as w,Ht as x,gt as y,je as z};