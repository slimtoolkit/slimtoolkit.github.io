import{k as m,r as f,ag as P,ah as L,b as I,N as D,A as s,m as O,ai as R,d as e,_ as r,a8 as V,L as S,D as y,a4 as b,a9 as c,z as B,aj as x,x as N}from"./entry.f5c528a8.js";import"./ContentSlot.f1af4fb6.js";/* empty css                                                                                    *//* empty css                                                                                                *//* empty css                                                                                   */import"./EditOnLink.vue_vue_type_script_lang.a0860601.js";/* empty css                                                                                        */import"./ProseCodeInline.2168c6cd.js";/* empty css                                                                               *//* empty css                                                                                      *//* empty css                                                                                      *//* empty css                                                                                 *//* empty css                                                                                         *//* empty css                                                                                *//* empty css                                                                                         *//* empty css                                                                                   *//* empty css                                                                                 *//* empty css                                                                                 *//* empty css                                                                                 *//* empty css                                                                                 *//* empty css                                                                                 *//* empty css                                                                                 *//* empty css                                                                                 *//* empty css                                                                                 *//* empty css                                                                                  *//* empty css                                                                                 *//* empty css                                                                                 *//* empty css                                                                                *//* empty css                                                                                     */import"./ProseTable.34cd58c2.js";import"./ProseTd.c4325945.js";import"./ProseTh.292515b9.js";import"./ProseThead.5eab09ec.js";import"./ProseTr.de08f539.js";/* empty css                                                                                 *//* empty css                                                                               *//* empty css                                                                                 *//* empty css                                                                  */import"./CodeGroup.vue_vue_type_style_index_0_scoped_bbdf2824_transformed_true_lang.ce7ede92.js";/* empty css                                                                                  */import"./List.vue_vue_type_style_index_0_scoped_f077aa3d_transformed_true_lang.8bfd3d42.js";import"./NuxtImg.vue_vue_type_script_lang.575fab6e.js";import"./Props.ec50328e.js";import"./TabsHeader.b4d55f92.js";/* empty css                                                                                 *//* empty css                                                                                  *//* empty css                                                                                     *//* empty css                                                                                        *//* empty css                                                                                   *//* empty css                                                                              *//* empty css                                                                                  *//* empty css                                                                    *//* empty css                                                                           */import"./ContentDoc.38384d0f.js";import"./ContentList.21d887c3.js";import"./ContentQuery.a9e1c286.js";import"./ContentRenderer.a17ddeb4.js";import"./ContentRendererMarkdown.842599b2.js";import"./DocumentDrivenEmpty.059f869a.js";import"./Markdown.49b9e4bb.js";import"./layout.c3d12ea9.js";import"./ProseTbody.3fb53832.js";import"./_commonjsHelpers.726de751.js";const j=m({emits:{error(t){return!0}},setup(t,{slots:i,emit:o}){const _=f(null),n=P();return L(u=>{if(!n.isHydrating)return o("error",u),_.value=u,!1}),()=>{var u,a;return _.value?(u=i.error)==null?void 0:u.call(i,{error:_}):(a=i.default)==null?void 0:a.call(i)}}}),z=Object.freeze(Object.defineProperty({__proto__:null,default:j},Symbol.toStringTag,{value:"Module"})),M=m({name:"DevOnly",setup(t,i){return()=>null}}),k=Object.freeze(Object.defineProperty({__proto__:null,default:M},Symbol.toStringTag,{value:"Module"})),q=m({name:"ServerPlaceholder",render(){return I("div")}}),C=Object.freeze(Object.defineProperty({__proto__:null,default:q},Symbol.toStringTag,{value:"Module"})),H=m({name:"NuxtLoadingIndicator",props:{throttle:{type:Number,default:200},duration:{type:Number,default:2e3},height:{type:Number,default:3},color:{type:String,default:"repeating-linear-gradient(to right,#00dc82 0%,#34cdfe 50%,#0047e1 100%)"}},setup(t,{slots:i}){const o=$({duration:t.duration,throttle:t.throttle}),_=P();return _.hook("page:start",o.start),_.hook("page:finish",o.finish),D(()=>o.clear),()=>s("div",{class:"nuxt-loading-indicator",style:{position:"fixed",top:0,right:0,left:0,pointerEvents:"none",width:`${o.progress.value}%`,height:`${t.height}px`,opacity:o.isLoading.value?1:0,background:t.color,backgroundSize:`${100/o.progress.value*100}% auto`,transition:"width 0.1s, height 0.4s, opacity 0.4s",zIndex:999999}},i)}});function $(t){const i=f(0),o=f(!1),_=O(()=>1e4/t.duration);let n=null,u=null;function a(){p(),i.value=0,o.value=!0,t.throttle?u=setTimeout(v,t.throttle):v()}function h(){i.value=100,T()}function p(){clearInterval(n),clearTimeout(u),n=null,u=null}function A(g){i.value=Math.min(100,i.value+g)}function T(){p(),setTimeout(()=>{o.value=!1,setTimeout(()=>{i.value=0},400)},500)}function v(){n=setInterval(()=>{A(_.value)},100)}return{progress:i,isLoading:o,start:a,finish:h,clear:p}}const w=Object.freeze(Object.defineProperty({__proto__:null,default:H},Symbol.toStringTag,{value:"Module"})),U=t=>Object.fromEntries(Object.entries(t).filter(([,i])=>i!==void 0)),d=(t,i)=>(o,_)=>(R(()=>t({...U(o),..._.attrs},_)),()=>{var n,u;return i?(u=(n=_.slots).default)==null?void 0:u.call(n):null}),E={accesskey:String,autocapitalize:String,autofocus:{type:Boolean,default:void 0},class:String,contenteditable:{type:Boolean,default:void 0},contextmenu:String,dir:String,draggable:{type:Boolean,default:void 0},enterkeyhint:String,exportparts:String,hidden:{type:Boolean,default:void 0},id:String,inputmode:String,is:String,itemid:String,itemprop:String,itemref:String,itemscope:String,itemtype:String,lang:String,nonce:String,part:String,slot:String,spellcheck:{type:Boolean,default:void 0},style:String,tabindex:String,title:String,translate:String},F=m({name:"NoScript",inheritAttrs:!1,props:{...E,title:String,body:Boolean,renderPriority:[String,Number]},setup:d((t,{slots:i})=>{var n;const o={...t},_=(((n=i.default)==null?void 0:n.call(i))||[]).filter(({children:u})=>u).map(({children:u})=>u).join("");return _&&(o.children=_),{noscript:[o]}})}),G=m({name:"Link",inheritAttrs:!1,props:{...E,as:String,crossorigin:String,disabled:Boolean,fetchpriority:String,href:String,hreflang:String,imagesizes:String,imagesrcset:String,integrity:String,media:String,prefetch:{type:Boolean,default:void 0},referrerpolicy:String,rel:String,sizes:String,title:String,type:String,methods:String,target:String,body:Boolean,renderPriority:[String,Number]},setup:d(t=>({link:[t]}))}),J=m({name:"Base",inheritAttrs:!1,props:{...E,href:String,target:String},setup:d(t=>({base:t}))}),K=m({name:"Title",inheritAttrs:!1,setup:d((t,{slots:i})=>{var _,n,u;return{title:((u=(n=(_=i.default)==null?void 0:_.call(i))==null?void 0:n[0])==null?void 0:u.children)||null}})}),Q=m({name:"Meta",inheritAttrs:!1,props:{...E,charset:String,content:String,httpEquiv:String,name:String,body:Boolean,renderPriority:[String,Number]},setup:d(t=>{const i={...t};return i.httpEquiv&&(i["http-equiv"]=i.httpEquiv,delete i.httpEquiv),{meta:[i]}})}),W=m({name:"Style",inheritAttrs:!1,props:{...E,type:String,media:String,nonce:String,title:String,scoped:{type:Boolean,default:void 0},body:Boolean,renderPriority:[String,Number]},setup:d((t,{slots:i})=>{var n,u,a;const o={...t},_=(a=(u=(n=i.default)==null?void 0:n.call(i))==null?void 0:u[0])==null?void 0:a.children;return _&&(o.children=_),{style:[o]}})}),X=m({name:"Head",inheritAttrs:!1,setup:(t,i)=>()=>{var o,_;return(_=(o=i.slots).default)==null?void 0:_.call(o)}}),Y=m({name:"Html",inheritAttrs:!1,props:{...E,manifest:String,version:String,xmlns:String,renderPriority:[String,Number]},setup:d(t=>({htmlAttrs:t}),!0)}),Z=m({name:"Body",inheritAttrs:!1,props:{...E,renderPriority:[String,Number]},setup:d(t=>({bodyAttrs:t}),!0)}),l=Object.freeze(Object.defineProperty({__proto__:null,NoScript:F,Link:G,Base:J,Title:K,Meta:Q,Style:W,Head:X,Html:Y,Body:Z},Symbol.toStringTag,{value:"Module"}));e(()=>r(()=>import("./IconSAI.5a39a2e4.js"),["./IconSAI.5a39a2e4.js","./entry.f5c528a8.js","./entry.28262f33.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./entry.f5c528a8.js").then(t=>t.aQ),["./entry.f5c528a8.js","./entry.28262f33.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./entry.f5c528a8.js").then(t=>t.aW),["./entry.f5c528a8.js","./entry.28262f33.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./entry.f5c528a8.js").then(t=>t.aV),["./entry.f5c528a8.js","./entry.28262f33.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./entry.f5c528a8.js").then(t=>t.aP),["./entry.f5c528a8.js","./entry.28262f33.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./entry.f5c528a8.js").then(t=>t.aR),["./entry.f5c528a8.js","./entry.28262f33.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./entry.f5c528a8.js").then(t=>t.aS),["./entry.f5c528a8.js","./entry.28262f33.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./AppLayout.bfe3e453.js"),["./AppLayout.bfe3e453.js","./entry.f5c528a8.js","./entry.28262f33.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./entry.f5c528a8.js").then(t=>t.aI),["./entry.f5c528a8.js","./entry.28262f33.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./entry.f5c528a8.js").then(t=>t.aT),["./entry.f5c528a8.js","./entry.28262f33.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./entry.f5c528a8.js").then(t=>t.aK),["./entry.f5c528a8.js","./entry.28262f33.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./DocumentDrivenNotFound.e33cd186.js"),["./DocumentDrivenNotFound.e33cd186.js","./ButtonLink.51863b75.js","./entry.f5c528a8.js","./entry.28262f33.css","./ContentSlot.f1af4fb6.js","./ButtonLink.eec5f319.css","./DocumentDrivenNotFound.434430ce.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./entry.f5c528a8.js").then(t=>t.aO),["./entry.f5c528a8.js","./entry.28262f33.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./DocsAside.c84cc90b.js"),["./DocsAside.c84cc90b.js","./entry.f5c528a8.js","./entry.28262f33.css","./DocsAside.307f4bb4.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./entry.f5c528a8.js").then(t=>t.aL),["./entry.f5c528a8.js","./entry.28262f33.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./DocsPageBottom.b429a74f.js"),["./DocsPageBottom.b429a74f.js","./EditOnLink.vue_vue_type_script_lang.a0860601.js","./entry.f5c528a8.js","./entry.28262f33.css","./DocsPageBottom.7dd428f5.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./DocsPageContent.828d5e51.js"),["./DocsPageContent.828d5e51.js","./DocsAside.c84cc90b.js","./entry.f5c528a8.js","./entry.28262f33.css","./DocsAside.307f4bb4.css","./ProseCodeInline.2168c6cd.js","./ProseCodeInline.5c292c0c.css","./Alert.7858c9e7.js","./ContentSlot.f1af4fb6.js","./Alert.4cfc48d7.css","./DocsPageBottom.b429a74f.js","./EditOnLink.vue_vue_type_script_lang.a0860601.js","./DocsPageBottom.7dd428f5.css","./DocsPrevNext.dacfe5ac.js","./DocsPrevNext.e7bc9196.css","./DocsToc.980f1b05.js","./DocsTocLinks.0f294fb7.js","./DocsTocLinks.2846f127.css","./DocsToc.6b8d2996.css","./DocsPageContent.b5ea4704.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./DocsPrevNext.dacfe5ac.js"),["./DocsPrevNext.dacfe5ac.js","./entry.f5c528a8.js","./entry.28262f33.css","./DocsPrevNext.e7bc9196.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./DocsToc.980f1b05.js"),["./DocsToc.980f1b05.js","./DocsTocLinks.0f294fb7.js","./entry.f5c528a8.js","./entry.28262f33.css","./DocsTocLinks.2846f127.css","./DocsToc.6b8d2996.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./DocsTocLinks.0f294fb7.js"),["./DocsTocLinks.0f294fb7.js","./entry.f5c528a8.js","./entry.28262f33.css","./DocsTocLinks.2846f127.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./EditOnLink.97532b5d.js"),["./EditOnLink.97532b5d.js","./EditOnLink.vue_vue_type_script_lang.a0860601.js","./entry.f5c528a8.js","./entry.28262f33.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseA.94ff4598.js"),["./ProseA.94ff4598.js","./entry.f5c528a8.js","./entry.28262f33.css","./ProseA.c0b3282e.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseBlockquote.4ad17253.js"),["./ProseBlockquote.4ad17253.js","./entry.f5c528a8.js","./entry.28262f33.css","./ProseBlockquote.8cd3c64f.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseCode.40078cf4.js"),["./ProseCode.40078cf4.js","./ProseCodeCopyButton.c9dc3e3c.js","./entry.f5c528a8.js","./entry.28262f33.css","./index.d9b9aaf2.js","./ProseCode.bb401702.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseCodeInline.2168c6cd.js"),["./ProseCodeInline.2168c6cd.js","./entry.f5c528a8.js","./entry.28262f33.css","./ProseCodeInline.5c292c0c.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseEm.209c78ef.js"),["./ProseEm.209c78ef.js","./entry.f5c528a8.js","./entry.28262f33.css","./ProseEm.08155f3c.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseH1.27c3dc50.js"),["./ProseH1.27c3dc50.js","./entry.f5c528a8.js","./entry.28262f33.css","./ProseH1.713a018b.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseH2.8ec1fc06.js"),["./ProseH2.8ec1fc06.js","./entry.f5c528a8.js","./entry.28262f33.css","./ProseH2.c3733cfa.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseH3.8b2554d8.js"),["./ProseH3.8b2554d8.js","./entry.f5c528a8.js","./entry.28262f33.css","./ProseH3.c20b07eb.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseH4.9b716d6b.js"),["./ProseH4.9b716d6b.js","./entry.f5c528a8.js","./entry.28262f33.css","./ProseH4.99474624.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseH5.5f95a45b.js"),["./ProseH5.5f95a45b.js","./entry.f5c528a8.js","./entry.28262f33.css","./ProseH5.fa6d9ad5.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseH6.655dfe7f.js"),["./ProseH6.655dfe7f.js","./entry.f5c528a8.js","./entry.28262f33.css","./ProseH6.4a50fcaf.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseHr.7c76d442.js"),["./ProseHr.7c76d442.js","./entry.f5c528a8.js","./entry.28262f33.css","./ProseHr.7f3ea8bf.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseImg.55d692e3.js"),["./ProseImg.55d692e3.js","./entry.f5c528a8.js","./entry.28262f33.css","./ProseImg.1b12ee83.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseLi.594b321a.js"),["./ProseLi.594b321a.js","./entry.f5c528a8.js","./entry.28262f33.css","./ProseLi.7005f7b9.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseOl.ba708d98.js"),["./ProseOl.ba708d98.js","./entry.f5c528a8.js","./entry.28262f33.css","./ProseOl.f18f1ab6.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseP.280917e8.js"),["./ProseP.280917e8.js","./entry.f5c528a8.js","./entry.28262f33.css","./ProseP.8117fd4f.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseStrong.8eaaf87d.js"),["./ProseStrong.8eaaf87d.js","./entry.f5c528a8.js","./entry.28262f33.css","./ProseStrong.22b57f6c.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseTable.34cd58c2.js"),["./ProseTable.34cd58c2.js","./entry.f5c528a8.js","./entry.28262f33.css","./ProseTable.cb863e95.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseTbody.3fb53832.js"),["./ProseTbody.3fb53832.js","./entry.f5c528a8.js","./entry.28262f33.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseTd.c4325945.js"),["./ProseTd.c4325945.js","./entry.f5c528a8.js","./entry.28262f33.css","./ProseTd.8bba0d9d.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseTh.292515b9.js"),["./ProseTh.292515b9.js","./entry.f5c528a8.js","./entry.28262f33.css","./ProseTh.82079a3d.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseThead.5eab09ec.js"),["./ProseThead.5eab09ec.js","./entry.f5c528a8.js","./entry.28262f33.css","./ProseThead.8eca405b.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseTr.de08f539.js"),["./ProseTr.de08f539.js","./entry.f5c528a8.js","./entry.28262f33.css","./ProseTr.09362402.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseUl.891ed152.js"),["./ProseUl.891ed152.js","./entry.f5c528a8.js","./entry.28262f33.css","./ProseUl.c24d887f.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseCodeCopyButton.c9dc3e3c.js"),["./ProseCodeCopyButton.c9dc3e3c.js","./entry.f5c528a8.js","./entry.28262f33.css","./index.d9b9aaf2.js","./ProseCode.bb401702.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./Alert.7858c9e7.js"),["./Alert.7858c9e7.js","./ContentSlot.f1af4fb6.js","./entry.f5c528a8.js","./entry.28262f33.css","./Alert.4cfc48d7.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./Badge.c570233b.js"),["./Badge.c570233b.js","./ContentSlot.f1af4fb6.js","./entry.f5c528a8.js","./entry.28262f33.css","./Badge.90c95584.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ButtonLink.51863b75.js"),["./ButtonLink.51863b75.js","./entry.f5c528a8.js","./entry.28262f33.css","./ContentSlot.f1af4fb6.js","./ButtonLink.eec5f319.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./Callout.91734358.js"),["./Callout.91734358.js","./ContentSlot.f1af4fb6.js","./entry.f5c528a8.js","./entry.28262f33.css","./Callout.d651174d.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./CodeBlock.d340c2ad.js"),["./CodeBlock.d340c2ad.js","./entry.f5c528a8.js","./entry.28262f33.css","./CodeBlock.e4cadaca.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./CodeGroup.3c7331a1.js"),["./CodeGroup.3c7331a1.js","./CodeGroup.vue_vue_type_style_index_0_scoped_bbdf2824_transformed_true_lang.ce7ede92.js","./TabsHeader.b4d55f92.js","./entry.f5c528a8.js","./entry.28262f33.css","./TabsHeader.fed4d9b4.css","./CodeGroup.99b98558.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./entry.f5c528a8.js").then(t=>t.aU),["./entry.f5c528a8.js","./entry.28262f33.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./CopyButton.d29fcaad.js"),["./CopyButton.d29fcaad.js","./entry.f5c528a8.js","./entry.28262f33.css","./index.d9b9aaf2.js"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./Ellipsis.93bcbb16.js"),["./Ellipsis.93bcbb16.js","./entry.f5c528a8.js","./entry.28262f33.css","./Ellipsis.cb474bc0.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./List.83744930.js"),["./List.83744930.js","./List.vue_vue_type_style_index_0_scoped_f077aa3d_transformed_true_lang.8bfd3d42.js","./entry.f5c528a8.js","./entry.28262f33.css","./ContentSlot.f1af4fb6.js","./List.7ec09818.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./NuxtImg.8ae0d6b0.js"),["./NuxtImg.8ae0d6b0.js","./NuxtImg.vue_vue_type_script_lang.575fab6e.js","./entry.f5c528a8.js","./entry.28262f33.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./Props.ec50328e.js"),["./Props.ec50328e.js","./ProseTh.292515b9.js","./entry.f5c528a8.js","./entry.28262f33.css","./ProseTh.82079a3d.css","./ProseTr.de08f539.js","./ProseTr.09362402.css","./ProseThead.5eab09ec.js","./ProseThead.8eca405b.css","./ProseCodeInline.2168c6cd.js","./ProseCodeInline.5c292c0c.css","./ProseTd.c4325945.js","./ProseTd.8bba0d9d.css","./ProseTbody.3fb53832.js","./ProseTable.34cd58c2.js","./ProseTable.cb863e95.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./Sandbox.00a07c85.js"),["./Sandbox.00a07c85.js","./TabsHeader.b4d55f92.js","./entry.f5c528a8.js","./entry.28262f33.css","./TabsHeader.fed4d9b4.css","./Sandbox.0b179128.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./SourceLink.69bc2ada.js"),["./SourceLink.69bc2ada.js","./ProseP.280917e8.js","./entry.f5c528a8.js","./entry.28262f33.css","./ProseP.8117fd4f.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./TabsHeader.b4d55f92.js"),["./TabsHeader.b4d55f92.js","./entry.f5c528a8.js","./entry.28262f33.css","./TabsHeader.fed4d9b4.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./Terminal.95a6cc18.js"),["./Terminal.95a6cc18.js","./index.d9b9aaf2.js","./entry.f5c528a8.js","./entry.28262f33.css","./Terminal.6df76f99.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./VideoPlayer.3ff513d4.js"),["./VideoPlayer.3ff513d4.js","./NuxtImg.vue_vue_type_script_lang.575fab6e.js","./entry.f5c528a8.js","./entry.28262f33.css","./VideoPlayer.e2296f21.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./IconCodeSandBox.1bb27647.js"),["./IconCodeSandBox.1bb27647.js","./entry.f5c528a8.js","./entry.28262f33.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./IconDocus.331c974f.js"),["./IconDocus.331c974f.js","./entry.f5c528a8.js","./entry.28262f33.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./IconNuxt.86faea66.js"),["./IconNuxt.86faea66.js","./entry.f5c528a8.js","./entry.28262f33.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./IconNuxtContent.98b82fbf.js"),["./IconNuxtContent.98b82fbf.js","./entry.f5c528a8.js","./entry.28262f33.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./IconNuxtLabs.4e89e709.js"),["./IconNuxtLabs.4e89e709.js","./entry.f5c528a8.js","./entry.28262f33.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./IconNuxtStudio.b6341d50.js"),["./IconNuxtStudio.b6341d50.js","./entry.f5c528a8.js","./entry.28262f33.css","./IconNuxtStudio.34390cd8.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./IconStackBlitz.c578f9d6.js"),["./IconStackBlitz.c578f9d6.js","./entry.f5c528a8.js","./entry.28262f33.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./IconVueTelescope.9ccce9b9.js"),["./IconVueTelescope.9ccce9b9.js","./entry.f5c528a8.js","./entry.28262f33.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./BlockHero.fe907204.js"),["./BlockHero.fe907204.js","./ContentSlot.f1af4fb6.js","./entry.f5c528a8.js","./entry.28262f33.css","./ButtonLink.51863b75.js","./ButtonLink.eec5f319.css","./Terminal.95a6cc18.js","./index.d9b9aaf2.js","./Terminal.6df76f99.css","./BlockHero.2aab5037.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./Card.9e093349.js"),["./Card.9e093349.js","./entry.f5c528a8.js","./entry.28262f33.css","./ContentSlot.f1af4fb6.js","./Card.b3390975.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./CardGrid.88243b74.js"),["./CardGrid.88243b74.js","./ContentSlot.f1af4fb6.js","./entry.f5c528a8.js","./entry.28262f33.css","./CardGrid.a47f398b.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./VoltaBoard.afffb40b.js"),["./VoltaBoard.afffb40b.js","./entry.f5c528a8.js","./entry.28262f33.css","./VoltaBoard.6a541d8d.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ContentPreviewMode.50bb1e8d.js"),["./ContentPreviewMode.50bb1e8d.js","./entry.f5c528a8.js","./entry.28262f33.css","./ContentPreviewMode.7e5d251b.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ContentDoc.38384d0f.js"),["./ContentDoc.38384d0f.js","./entry.f5c528a8.js","./entry.28262f33.css","./ContentRenderer.a17ddeb4.js","./ContentRendererMarkdown.842599b2.js","./_commonjsHelpers.726de751.js","./ContentQuery.a9e1c286.js"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ContentList.21d887c3.js"),["./ContentList.21d887c3.js","./ContentQuery.a9e1c286.js","./entry.f5c528a8.js","./entry.28262f33.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>Promise.resolve().then(()=>et),void 0,import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ContentQuery.a9e1c286.js"),["./ContentQuery.a9e1c286.js","./entry.f5c528a8.js","./entry.28262f33.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ContentRenderer.a17ddeb4.js"),["./ContentRenderer.a17ddeb4.js","./ContentRendererMarkdown.842599b2.js","./entry.f5c528a8.js","./entry.28262f33.css","./_commonjsHelpers.726de751.js"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ContentRendererMarkdown.842599b2.js"),["./ContentRendererMarkdown.842599b2.js","./entry.f5c528a8.js","./entry.28262f33.css","./_commonjsHelpers.726de751.js"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ContentSlot.f1af4fb6.js"),["./ContentSlot.f1af4fb6.js","./entry.f5c528a8.js","./entry.28262f33.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./DocumentDrivenEmpty.059f869a.js"),["./DocumentDrivenEmpty.059f869a.js","./entry.f5c528a8.js","./entry.28262f33.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./Markdown.49b9e4bb.js"),["./Markdown.49b9e4bb.js","./ContentSlot.f1af4fb6.js","./entry.f5c528a8.js","./entry.28262f33.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./welcome.e5112138.js"),["./welcome.e5112138.js","./entry.f5c528a8.js","./entry.28262f33.css","./ContentSlot.f1af4fb6.js","./EditOnLink.vue_vue_type_script_lang.a0860601.js","./ProseCodeInline.2168c6cd.js","./ProseCodeInline.5c292c0c.css","./ProseTable.34cd58c2.js","./ProseTable.cb863e95.css","./ProseTd.c4325945.js","./ProseTd.8bba0d9d.css","./ProseTh.292515b9.js","./ProseTh.82079a3d.css","./ProseThead.5eab09ec.js","./ProseThead.8eca405b.css","./ProseTr.de08f539.js","./ProseTr.09362402.css","./CodeGroup.vue_vue_type_style_index_0_scoped_bbdf2824_transformed_true_lang.ce7ede92.js","./TabsHeader.b4d55f92.js","./TabsHeader.fed4d9b4.css","./CodeGroup.99b98558.css","./List.vue_vue_type_style_index_0_scoped_f077aa3d_transformed_true_lang.8bfd3d42.js","./List.7ec09818.css","./NuxtImg.vue_vue_type_script_lang.575fab6e.js","./Props.ec50328e.js","./ProseTbody.3fb53832.js","./ContentDoc.38384d0f.js","./ContentRenderer.a17ddeb4.js","./ContentRendererMarkdown.842599b2.js","./_commonjsHelpers.726de751.js","./ContentQuery.a9e1c286.js","./ContentList.21d887c3.js","./DocumentDrivenEmpty.059f869a.js","./Markdown.49b9e4bb.js","./layout.c3d12ea9.js","./ButtonLink.eec5f319.css","./DocumentDrivenNotFound.434430ce.css","./DocsAside.307f4bb4.css","./DocsPageBottom.7dd428f5.css","./Alert.4cfc48d7.css","./DocsPrevNext.e7bc9196.css","./DocsTocLinks.2846f127.css","./DocsToc.6b8d2996.css","./DocsPageContent.b5ea4704.css","./ProseA.c0b3282e.css","./ProseBlockquote.8cd3c64f.css","./ProseCode.bb401702.css","./ProseEm.08155f3c.css","./ProseH1.713a018b.css","./ProseH2.c3733cfa.css","./ProseH3.c20b07eb.css","./ProseH4.99474624.css","./ProseH5.fa6d9ad5.css","./ProseH6.4a50fcaf.css","./ProseHr.7f3ea8bf.css","./ProseImg.1b12ee83.css","./ProseLi.7005f7b9.css","./ProseOl.f18f1ab6.css","./ProseP.8117fd4f.css","./ProseStrong.22b57f6c.css","./ProseUl.c24d887f.css","./Badge.90c95584.css","./Callout.d651174d.css","./CodeBlock.e4cadaca.css","./Ellipsis.cb474bc0.css","./Sandbox.0b179128.css","./Terminal.6df76f99.css","./VideoPlayer.e2296f21.css","./IconNuxtStudio.34390cd8.css","./BlockHero.2aab5037.css","./Card.b3390975.css","./CardGrid.a47f398b.css","./VoltaBoard.6a541d8d.css","./ContentPreviewMode.7e5d251b.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./layout.c3d12ea9.js"),["./layout.c3d12ea9.js","./entry.f5c528a8.js","./entry.28262f33.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>Promise.resolve().then(()=>z),void 0,import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./entry.f5c528a8.js").then(t=>t.aM),["./entry.f5c528a8.js","./entry.28262f33.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>Promise.resolve().then(()=>k),void 0,import.meta.url).then(t=>t.default||t));e(()=>r(()=>Promise.resolve().then(()=>C),void 0,import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./entry.f5c528a8.js").then(t=>t.aG),["./entry.f5c528a8.js","./entry.28262f33.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>Promise.resolve().then(()=>w),void 0,import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./entry.f5c528a8.js").then(t=>t.aN),["./entry.f5c528a8.js","./entry.28262f33.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./entry.f5c528a8.js").then(t=>t.aJ),["./entry.f5c528a8.js","./entry.28262f33.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./entry.f5c528a8.js").then(t=>t.aH),["./entry.f5c528a8.js","./entry.28262f33.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>Promise.resolve().then(()=>l),void 0,import.meta.url).then(t=>t.NoScript));e(()=>r(()=>Promise.resolve().then(()=>l),void 0,import.meta.url).then(t=>t.Link));e(()=>r(()=>Promise.resolve().then(()=>l),void 0,import.meta.url).then(t=>t.Base));e(()=>r(()=>Promise.resolve().then(()=>l),void 0,import.meta.url).then(t=>t.Title));e(()=>r(()=>Promise.resolve().then(()=>l),void 0,import.meta.url).then(t=>t.Meta));e(()=>r(()=>Promise.resolve().then(()=>l),void 0,import.meta.url).then(t=>t.Style));e(()=>r(()=>Promise.resolve().then(()=>l),void 0,import.meta.url).then(t=>t.Head));e(()=>r(()=>Promise.resolve().then(()=>l),void 0,import.meta.url).then(t=>t.Html));e(()=>r(()=>Promise.resolve().then(()=>l),void 0,import.meta.url).then(t=>t.Body));const tt=m({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(t){const{query:i}=V(t),o=O(()=>{var n;return typeof((n=i.value)==null?void 0:n.params)=="function"?i.value.params():i.value});if(!o.value&&S("dd-navigation").value){const{navigation:n}=y();return{navigation:n}}const{data:_}=await b(`content-navigation-${c(o.value)}`,()=>x(o.value));return{navigation:_}},render(t){const i=B(),{navigation:o}=t,_=a=>s(N,{to:a._path},()=>a.title),n=(a,h)=>s("ul",h?{"data-level":h}:null,a.map(p=>p.children?s("li",null,[_(p),n(p.children,h+1)]):s("li",null,_(p)))),u=a=>n(a,0);return i!=null&&i.default?i.default({navigation:o,...this.$attrs}):u(o)}}),et=Object.freeze(Object.defineProperty({__proto__:null,default:tt},Symbol.toStringTag,{value:"Module"}));export{tt as default};
