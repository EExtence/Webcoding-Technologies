import{_ as t,n as e,e as n,s as i,i as s,x as o,c as r,W as a,E as l,F as d,m as p,b as c,o as h,t as u,a as g,T as v,d as w,f as m,g as b,h as f,j as x,k as y,l as k,p as A,q as C,r as $,u as M,v as S}from"./shell-c338c5d1.js";import"./faceplate-switch-input-ed18fd1e.js";import"./icon-admin-c1d13d40.js";import"./icon-comments-7a3cde60.js";import"./icon-external-b54d9f33.js";import"./icon-rising-389b9c91.js";import{f as Z,c as B}from"./profile-382a5b89.js";import"./icon-new-9d4892c9.js";import"./shreddit-join-link-08b6f09d.js";import"./shreddit-signup-drawer-19c9718b.js";import"./shreddit-overlay-display-15c8ad9a.js";import{m as N,a as E,B as L}from"./xpromo-bd1fe83b.js";import{A as H}from"./app-link-eda06f5f.js";import"./checked-input-element-3bac8aae.js";import"./constants-e9a56379.js";import"./onboarding-8d190987.js";import"./shreddit-overlay-29859f34.js";import"./contextualSignupPrompt-8292f7a7.js";let V=class extends i{constructor(){super(...arguments),this.size=1/0,this.target="",this.isBatching=!1}static get styles(){return s`:host{display:block}`}render(){return o` <slot></slot> `}getCurrentTarget(t=this){return this.target&&t.querySelector(this.target)||t}async batchInsert(t){if(this.isBatching)throw new Error("Cannot call batchInsert while batching is already in progress");const e=this.getCurrentTarget();if(!(e instanceof HTMLElement))throw new TypeError("Target element must be instance of HTMLElement");const n=r("faceplate-batch-begin",{size:this.size,count:t.length});if(e.dispatchEvent(n),n.defaultPrevented)return;this.isBatching=!0;const i=()=>{if(t.length){const n=t.slice(0,this.size),i=document.createDocumentFragment();for(let e=0;e<n.length;e++)i.appendChild(t[e]);e.appendChild(i)}t.length>this.size?(t=t.slice(this.size),window.setTimeout(i)):(e.style.willChange="unset",this.isBatching=!1)};e.style.willChange="contents",await i()}};t([e({type:Number})],V.prototype,"size",void 0),t([e({type:String})],V.prototype,"target",void 0),V=t([n("faceplate-batch")],V);let I=class extends(a(i)){constructor(){super(...arguments),this.pages=0,this.for=void 0,this.step=1,this.role="button",this._events=new l(this),this._handleClick=this._events.define("click",(t=>{this.pageIndex=Math.min(this.pages,Math.max(1,this.pageIndex+this.step)),t.preventDefault(),t.stopPropagation()}))}get pageIndex(){return super.pageIndex}set pageIndex(t){super.pageIndex=t}static get styles(){return s`:host{display:inline-block;cursor:pointer;line-height:1em;padding:.5em;background:var(--color-tone-6);box-shadow:var(--boxshadow-navigation);border-radius:999px;font-size:var(--font-small)}:host([aria-disabled]){cursor:not-allowed;opacity:.5}`}render(){return o` <slot></slot> `}pageIndexChangedCallback(t){super.pageIndexChangedCallback(t),this.updateDisabledState()}firstUpdated(){this.updateDisabledState()}updateDisabledState(){1===this.pageIndex&&this.step<0||this.pageIndex===this.pages&&this.step>0?(this.setAttribute("aria-disabled",""),this.removeAttribute("tabindex")):(this.removeAttribute("aria-disabled"),this.setAttribute("tabindex","0"))}};t([e({type:Number})],I.prototype,"pages",void 0),t([e({type:Number,attribute:"pageindex"})],I.prototype,"pageIndex",null),t([e({type:String})],I.prototype,"for",void 0),t([e({type:Number})],I.prototype,"step",void 0),t([e({type:String,reflect:!0})],I.prototype,"role",void 0),I=t([n("faceplate-pagination-button")],I);let j=class extends(a(d)){constructor(){super(...arguments),this.pages=0,this.for=void 0}get pageIndex(){return super.pageIndex}set pageIndex(t){super.pageIndex=t}static get styles(){return s`:host{display:inline-block;text-align:center;border-radius:999px;padding:0 .5rem;font-size:var(--font-small);background:var(--color-opacity-50);color:var(--color-global-white)}`}render(){return o` ${this.pageIndex}/${this.pages} `}pageIndexChangedCallback(t){super.pageIndexChangedCallback(t),this.requestUpdate("pageIndex",t)}};t([e({type:Number})],j.prototype,"pages",void 0),t([e({type:Number,attribute:"pageindex"})],j.prototype,"pageIndex",null),t([e({type:String})],j.prototype,"for",void 0),j=t([n("faceplate-pagination-numbers")],j);p("icon-all",c`${h('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M10 0a10 10 0 1 0 10 10A10.01 10.01 0 0 0 10 0Zm5 17.171V6h-1.25v11.894a8.66 8.66 0 0 1-2.75.794V10H9.75v8.737A8.684 8.684 0 0 1 6.47 18H7v-4H5.75v3.642a8.753 8.753 0 1 1 9.25-.471Z"/></svg>')}`,c`${h('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M10 0a10 10 0 1 0 10 10A10.01 10.01 0 0 0 10 0ZM7 18.209a8.664 8.664 0 0 1-1.5-.719V14H7v4.209Zm4 .479c-.332.04-.666.06-1 .062-.169 0-.334-.016-.5-.025V10H11v8.688Zm4-1.517c-.471.33-.973.612-1.5.843V6H15v11.171Z"/></svg>')}`);p("icon-comment",c`${h('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M7.725 19.872a.718.718 0 0 1-.607-.328.725.725 0 0 1-.118-.397V16H3.625A2.63 2.63 0 0 1 1 13.375v-9.75A2.629 2.629 0 0 1 3.625 1h12.75A2.63 2.63 0 0 1 19 3.625v9.75A2.63 2.63 0 0 1 16.375 16h-4.161l-4 3.681a.725.725 0 0 1-.489.191ZM3.625 2.25A1.377 1.377 0 0 0 2.25 3.625v9.75a1.377 1.377 0 0 0 1.375 1.375h4a.625.625 0 0 1 .625.625v2.575l3.3-3.035a.628.628 0 0 1 .424-.165h4.4a1.377 1.377 0 0 0 1.375-1.375v-9.75a1.377 1.377 0 0 0-1.374-1.375H3.625Z"/></svg>')}`,c`${h('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M16.375 1H3.625A2.629 2.629 0 0 0 1 3.625v9.75A2.63 2.63 0 0 0 3.625 16H7v3.147a.725.725 0 0 0 1.216.534l4-3.681h4.161A2.629 2.629 0 0 0 19 13.375v-9.75A2.63 2.63 0 0 0 16.375 1Z"/></svg>')}`);p("icon-feed-video",c`${h('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M8.625 16.1A.625.625 0 0 1 8 15.479V7.521A.626.626 0 0 1 8.964 7l6.168 3.98a.626.626 0 0 1 0 1.05l-6.168 3.98a.628.628 0 0 1-.339.09Zm.625-7.432v5.664l4.391-2.832L9.25 8.668ZM17.375 19H5.625A1.627 1.627 0 0 1 4 17.375V5.625A1.627 1.627 0 0 1 5.625 4h11.75A1.627 1.627 0 0 1 19 5.625v11.75A1.627 1.627 0 0 1 17.375 19ZM5.625 5.25a.375.375 0 0 0-.375.375v11.75a.375.375 0 0 0 .375.375h11.75a.375.375 0 0 0 .375-.375V5.625a.375.375 0 0 0-.375-.375H5.625Zm-3 9.5a.375.375 0 0 1-.375-.375V2.624a.375.375 0 0 1 .375-.374h11.75a.375.375 0 0 1 .375.374H16A1.627 1.627 0 0 0 14.375 1H2.625A1.627 1.627 0 0 0 1 2.624v11.751A1.627 1.627 0 0 0 2.625 16v-1.25Z"/></svg>')}`,c`${h('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M2.625 15.375V16A1.627 1.627 0 0 1 1 14.375V2.624A1.627 1.627 0 0 1 2.625 1h11.75A1.627 1.627 0 0 1 16 2.624H5.629a3.008 3.008 0 0 0-3 3l-.004 9.751ZM19 5.625v11.75A1.627 1.627 0 0 1 17.375 19H5.625A1.627 1.627 0 0 1 4 17.375V5.625A1.627 1.627 0 0 1 5.625 4h11.75A1.627 1.627 0 0 1 19 5.625ZM15.418 11.5a.622.622 0 0 0-.286-.525L8.964 7A.626.626 0 0 0 8 7.521v7.958a.626.626 0 0 0 .964.526l6.168-3.98a.623.623 0 0 0 .286-.525Z"/></svg>')}`);p("icon-home",c`${h('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="m17.71 8.549 1.244.832v8.523a1.05 1.05 0 0 1-1.052 1.046H12.73a.707.707 0 0 1-.708-.707v-4.507c0-.76-1.142-1.474-2.026-1.474-.884 0-2.026.714-2.026 1.474v4.507a.71.71 0 0 1-.703.707H2.098a1.046 1.046 0 0 1-1.052-1.043V9.381l1.244-.835v9.158h4.44v-3.968c0-1.533 1.758-2.72 3.27-2.72s3.27 1.187 3.27 2.72v3.968h4.44V8.549Zm2.04-1.784L10.646.655a1.12 1.12 0 0 0-1.28-.008L.25 6.765l.696 1.036L10 1.721l9.054 6.08.696-1.036Z"/></svg>')}`,c`${h('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="m19.724 6.765-9.08-6.11A1.115 1.115 0 0 0 9.368.647L.276 6.765a.623.623 0 0 0 .35 1.141h.444v10.001c.001.278.113.544.31.74.196.195.462.304.739.303h5.16a.704.704 0 0 0 .706-.707v-4.507c0-.76 1.138-1.475 2.02-1.475.882 0 2.02.715 2.02 1.475v4.507a.71.71 0 0 0 .707.707h5.16c.274-.001.538-.112.732-.307.195-.195.305-.46.306-.736v-10h.445a.618.618 0 0 0 .598-.44.625.625 0 0 0-.25-.702Z"/></svg>')}`);p("icon-hot",c`${h('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M10.328.454 9.956.311l-.283.143C8.785.9 1 5.056 1 12.225c0 4.243 3.957 7.7 8.849 7.768A.979.979 0 0 0 9.99 20H10c4.962 0 9-3.488 9-7.775C19 5.056 11.215.9 10.328.454ZM12.5 17.789a3.699 3.699 0 0 1-2.854.945 3.48 3.48 0 0 1-2.457-1.37 3.945 3.945 0 0 1-.764-3.052c.441-2.639 2.75-4.38 3.576-4.926.928.611 3.65 2.674 3.65 5.818a3.469 3.469 0 0 1-1.151 2.585Zm1.64-.057c.49-.754.753-1.633.76-2.532 0-4.268-4.069-6.79-4.537-7.066l-.415-.184-.315.187c-.638.377-3.852 2.436-4.442 5.964A5.18 5.18 0 0 0 6 17.8a6.4 6.4 0 0 1-3.75-5.575c0-5.969 6.4-9.788 7.75-10.53 1.352.741 7.75 4.56 7.75 10.53a6.366 6.366 0 0 1-3.611 5.507h.001Z"/></svg>')}`,c`${h('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M11.471 19.887a5.05 5.05 0 0 0 1.955-1.082 4.895 4.895 0 0 0 1.6-3.6c0-4.339-4.125-6.894-4.6-7.174l-.478-.22-.378.223c-.647.382-3.9 2.469-4.5 6.052A5.328 5.328 0 0 0 6.1 18.2a4.874 4.874 0 0 0 2.358 1.673C4.229 19.242 1 16.057 1 12.225 1 5.056 8.785.9 9.673.454l.283-.143.372.143C11.215.9 19 5.056 19 12.225c0 3.853-3.266 7.052-7.529 7.662ZM10 9.536a7.882 7.882 0 0 0-3.453 4.8 3.82 3.82 0 0 0 .74 2.954 3.352 3.352 0 0 0 2.369 1.322 3.566 3.566 0 0 0 2.759-.913 3.344 3.344 0 0 0 1.11-2.492c0-3.014-2.554-5.019-3.525-5.671Z"/></svg>')}`);p("icon-left",c`${h('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="m13.058 19.442-9-9a.624.624 0 0 1 0-.884l9-9 .884.884L5.384 10l8.558 8.558-.884.884Z"/></svg>')}`,c`${h('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="m12.793 19.707-9-9a1 1 0 0 1 0-1.414l9-9 1.414 1.414L5.914 10l8.293 8.293-1.414 1.414Z"/></svg>')}`);p("icon-mic",c`${h('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M10.625 16.97v1.78h1.8V20H7.58v-1.25h1.8v-1.78A6.787 6.787 0 0 1 3 10.375h1.25A5.578 5.578 0 0 0 10 15.75a5.578 5.578 0 0 0 5.75-5.375H17a6.787 6.787 0 0 1-6.375 6.595ZM6 9.948v-4.9a4 4 0 0 1 8 0v4.9a4 4 0 1 1-8 0Zm1.25 0a2.75 2.75 0 0 0 5.5 0v-4.9a2.75 2.75 0 1 0-5.5 0v4.9Z"/></svg>')}`,c`${h('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M17 10v.4a6.745 6.745 0 0 1-6 6.525V18h1.42v2H7.58v-2H9v-1.075A6.745 6.745 0 0 1 3 10.4V10h2v.4a4.818 4.818 0 0 0 5 4.6 4.817 4.817 0 0 0 5-4.6V10h2Zm-7 4a4.031 4.031 0 0 0 4-4.052v-4.9a4 4 0 1 0-8 0v4.9A4.03 4.03 0 0 0 10 14Z"/></svg>')}`);p("icon-mod",c`${h('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M10 20c-.101 0-.202-.014-.3-.04C8.249 19.554 1 17.277 1 12V3.187A1.122 1.122 0 0 1 1.846 2.1L9.73.108c.177-.044.363-.044.54 0L18.154 2.1A1.122 1.122 0 0 1 19 3.187V12c0 5.277-7.249 7.554-8.7 7.957A1.162 1.162 0 0 1 10 20ZM2.25 3.283V12c0 4.465 6.989 6.531 7.786 6.751.725-.22 7.714-2.286 7.714-6.751V3.283L10 1.33 2.25 3.283Z"/></svg>')}`,c`${h('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M18.154 2.1 10.27.108a1.121 1.121 0 0 0-.54 0L1.846 2.1A1.122 1.122 0 0 0 1 3.187V12c0 5.277 7.249 7.554 8.7 7.957.098.027.199.042.3.043.101 0 .202-.014.3-.04 1.453-.4 8.7-2.68 8.7-7.957V3.187a1.122 1.122 0 0 0-.846-1.087Z"/></svg>')}`);p("icon-original",c`${h('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M10 20a10 10 0 1 1 10-10 10.011 10.011 0 0 1-10 10Zm0-18.75A8.75 8.75 0 1 0 18.75 10 8.76 8.76 0 0 0 10 1.25ZM5.538 12.668a3.075 3.075 0 0 1 0-5.336 3.094 3.094 0 0 1 1.558-.4 3.019 3.019 0 0 1 1.555.412 3.106 3.106 0 0 1 1.114 4.211 3.012 3.012 0 0 1-1.117 1.113 3.18 3.18 0 0 1-3.11 0Zm2.447-1.051c.268-.163.488-.394.637-.67a2.008 2.008 0 0 0 0-1.889c-.15-.277-.37-.51-.638-.675a1.652 1.652 0 0 0-.884-.246 1.681 1.681 0 0 0-.883.246c-.27.162-.494.393-.646.67a2.018 2.018 0 0 0 0 1.894 1.738 1.738 0 0 0 2.422.67h-.008Zm4.585 1.059a3.08 3.08 0 0 1-1.184-1.1 3.03 3.03 0 0 1 0-3.152 3.055 3.055 0 0 1 1.184-1.1 3.359 3.359 0 0 1 1.592-.392c.315 0 .63.043.934.125.31.084.608.21.884.375l-.5 1.176a1.33 1.33 0 0 0-.58-.354 2.316 2.316 0 0 0-.7-.113 2.029 2.029 0 0 0-.959.233c-.288.152-.53.378-.7.655a1.768 1.768 0 0 0-.262.955c-.004.335.082.664.25.954.164.284.404.518.692.675.301.166.64.251.984.246.25 0 .5-.04.738-.116.215-.062.409-.18.562-.342L16 12.58a3.31 3.31 0 0 1-.854.363 3.6 3.6 0 0 1-.955.129 3.377 3.377 0 0 1-1.621-.396Z"/></svg>')}`,c`${h('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M7.98 8.383a1.652 1.652 0 0 0-.88-.246 1.68 1.68 0 0 0-.883.246c-.27.162-.494.393-.646.67a2.018 2.018 0 0 0 0 1.894 1.738 1.738 0 0 0 3.059 0 2.008 2.008 0 0 0 0-1.889 1.787 1.787 0 0 0-.65-.675Z"/><path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm-.235 11.551a3.012 3.012 0 0 1-1.117 1.113 3.18 3.18 0 0 1-3.11 0 3.075 3.075 0 0 1 0-5.336 3.094 3.094 0 0 1 1.558-.4 3.019 3.019 0 0 1 1.555.412 3.106 3.106 0 0 1 1.114 4.211Zm5.377 1.392a3.6 3.6 0 0 1-.955.129 3.388 3.388 0 0 1-1.617-.395 3.09 3.09 0 0 1-1.184-1.1 3.03 3.03 0 0 1 0-3.152 3.055 3.055 0 0 1 1.184-1.1 3.359 3.359 0 0 1 1.592-.392c.315 0 .63.043.934.125.31.084.608.21.884.375l-.5 1.176a1.33 1.33 0 0 0-.58-.354 2.315 2.315 0 0 0-.7-.113 2.029 2.029 0 0 0-.959.233c-.288.152-.53.378-.7.655a1.768 1.768 0 0 0-.262.955c-.004.335.082.664.25.954.164.284.403.518.692.675.301.166.64.251.984.246.25 0 .5-.04.738-.116.215-.062.409-.18.562-.342L16 12.58a3.31 3.31 0 0 1-.858.363Z"/></svg>')}`);p("icon-pin",c`${h('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M19.6 6.876 13.125.4a1.132 1.132 0 0 0-1.606 0l-.665.665a2.084 2.084 0 0 0-.378 2.435L6.68 7.292a2.086 2.086 0 0 0-2.432.374l-.665.665a1.14 1.14 0 0 0 0 1.612l2.8 2.8-5.82 5.82.884.884 5.82-5.82 2.8 2.8a1.132 1.132 0 0 0 1.607 0l.665-.665a2.084 2.084 0 0 0 .374-2.432L16.5 9.528a2.129 2.129 0 0 0 2.433-.375l.666-.666a1.142 1.142 0 0 0 .002-1.611Zm-1.55 1.393a.849.849 0 0 1-1.174 0l-.442-.442-5.426 5.426.443.442a.832.832 0 0 1 0 1.174l-.588.587-6.319-6.319.587-.587a.833.833 0 0 1 1.175 0l.442.442 5.426-5.426-.442-.441a.832.832 0 0 1 0-1.175l.565-.609 6.34 6.341-.587.587Z"/></svg>')}`,c`${h('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M19.6 6.876 13.124.4a1.132 1.132 0 0 0-1.606 0l-.665.665a2.083 2.083 0 0 0-.379 2.435L6.68 7.292a2.085 2.085 0 0 0-2.432.374l-.665.665a1.14 1.14 0 0 0 0 1.612l2.53 2.53-5.82 5.82 1.414 1.414 5.82-5.82 2.53 2.53a1.132 1.132 0 0 0 1.606 0l.665-.665a2.084 2.084 0 0 0 .375-2.432L16.5 9.528a2.126 2.126 0 0 0 2.433-.375l.666-.666a1.142 1.142 0 0 0 .001-1.611Z"/></svg>')}`);p("icon-right",c`${h('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="m6.942 19.442-.884-.884L14.616 10 6.058 1.442l.884-.884 9 9a.624.624 0 0 1 0 .884l-9 9Z"/></svg>')}`,c`${h('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="m7.207 19.707-1.414-1.414L14.086 10 5.793 1.707 7.207.293l9 9a1 1 0 0 1 0 1.414l-9 9Z"/></svg>')}`);p("icon-self",c`${h('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M17.883 19H2.119A1.114 1.114 0 0 1 1 17.893v-.482A6.482 6.482 0 0 1 7.538 11h4.926A6.482 6.482 0 0 1 19 17.411v.482A1.114 1.114 0 0 1 17.883 19ZM2.251 17.75h15.5v-.339a5.231 5.231 0 0 0-5.287-5.161H7.538a5.23 5.23 0 0 0-5.287 5.161v.339ZM10 10a5 5 0 1 1 0-10 5 5 0 0 1 0 10Zm0-8.75a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5Z"/></svg>')}`,c`${h('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M19 17.411v.482A1.114 1.114 0 0 1 17.883 19H2.119A1.114 1.114 0 0 1 1 17.893v-.482A6.482 6.482 0 0 1 7.538 11h4.926A6.482 6.482 0 0 1 19 17.411ZM10 10a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z"/></svg>')}`);var P,z;p("icon-share-ios",c`${h('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M19 11v5.378A2.625 2.625 0 0 1 16.378 19H3.622A2.625 2.625 0 0 1 1 16.378V11h1.25v5.378a1.373 1.373 0 0 0 1.372 1.372h12.756a1.373 1.373 0 0 0 1.372-1.372V11H19ZM9.375 3.009V14h1.25V3.009l2.933 2.933.884-.884-4-4a.624.624 0 0 0-.884 0l-4 4 .884.884 2.933-2.933Z"/></svg>')}`,c`${h('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M19 11v5a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3v-5h2v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5h2ZM9 4.414V14h2V4.414l2.293 2.293 1.414-1.414-4-4a1 1 0 0 0-1.414 0l-4 4 1.414 1.414L9 4.414Z"/></svg>')}`),function(t){t.Slot="slot",t.Wrap="wrap"}(P||(P={})),function(t){t.NSFW="nsfw",t.Spoiler="spoiler",t.NsfwAndSpoiler="nsfwAndSpoiler"}(z||(z={}));const T=t=>{switch(t){case z.Spoiler:return"View spoiler";case z.NsfwAndSpoiler:return"View NSFW content & spoilers";default:return"View NSFW content"}};let _=class extends i{constructor(){super(),this.blurred=!0,this.isNsfwAllowed=!0,this.blurRadius=40,this.reason=z.NSFW,this.mode=P.Slot,this.isShredtopPDP=!1,this.isCrosspost=!1,this.isRichtextContent=!1,this.hasMetadata=!1,this._windowEvents=new l(this,(()=>window)),this.handleNsfwEvent=t=>{const e=t.detail.details||t.detail;if("xpromo/view/nsfw_blur"===g(e)){this.isNsfwAllowed=!1;const t=this.querySelector('div[slot="revealed"]');t&&this.removeChild(t)}},this._windowEvents.define(v,this.handleNsfwEvent)}static get styles(){return[w,s`.outer{width:100%;overflow:hidden;z-index:0;position:relative}.overlay{cursor:pointer;position:absolute;width:100%;height:100%;top:0;left:0;z-index:1;display:flex;justify-content:center;align-items:center}.inner.blurred{display:block;pointer-events:none;background:rgba(0,0,0,.8)}.legacy-button{background:rgba(0,0,0,.07);border:1px solid #fff;color:#fff;padding:10px 20px;position:absolute;text-transform:uppercase;cursor:pointer}`]}renderOverlay(t){const e=m({appearance:"media",size:b.Small,shape:"pill",children:T(this.reason)});return this.reason===z.Spoiler&&this.blurred?o`${D({content:this.isShredtopPDP?o`${e}`:o`<button class="legacy-button">\n Click to see spoiler\n </button>`})}`:this.isNsfwAllowed&&this.isShredtopPDP&&this.blurred&&t?D({content:e}):""}render(){const t=this.isShredtopPDP&&this.isRichtextContent&&this.blurred,e=this.reason===z.NSFW||this.reason===z.NsfwAndSpoiler;return o`\n <div \n class="${f({outer:!0,"xs:rounded-t-[16px]":this.isShredtopPDP&&!this.isCrosspost&&this.blurred,"xs:rounded-b-[16px]":this.isShredtopPDP&&!this.isCrosspost&&(t||!this.hasMetadata)&&this.blurred,"h-[88px]":t,"h-full":!t})}" \n @click="${this.handleClick}" \n>\n ${this.renderOverlay(e)}\n <span \n class="${f({inner:!0,blurred:this.blurRadius>0&&this.blurred})}" \n style="${x({filter:this.blurred&&this.blurRadius>0&&`blur(${this.blurRadius}px)`||"none"})}" \n>\n ${this.mode===P.Slot&&this.blurred?o` <slot name="blurred"></slot> `:o` <slot name="revealed"></slot> `}\n </span>\n\n ${(this.reason===z.Spoiler||e)&&this.isShredtopPDP&&this.blurred?o`<div class="absolute top-0 left-0 w-full h-full bg-scrim"></div>`:""}\n </div>\n `}handleClick(){const t=this.reason===z.NSFW||this.reason===z.NsfwAndSpoiler;(this.reason===z.Spoiler&&this.blurred||this.isShredtopPDP&&this.blurred&&t)&&(this.isNsfwAllowed||this.reason===z.Spoiler)&&(this.blurred=!1)}};t([u()],_.prototype,"blurred",void 0),t([u()],_.prototype,"isNsfwAllowed",void 0),t([e({type:Number,attribute:"blur-radius"})],_.prototype,"blurRadius",void 0),t([e({type:String})],_.prototype,"reason",void 0),t([e({type:String})],_.prototype,"mode",void 0),t([e({type:Boolean,attribute:"is-shredtop-pdp"})],_.prototype,"isShredtopPDP",void 0),t([e({type:Boolean,attribute:"is-crosspost"})],_.prototype,"isCrosspost",void 0),t([e({type:Boolean,attribute:"is-richtext-content"})],_.prototype,"isRichtextContent",void 0),t([e({type:Boolean,attribute:"has-metadata"})],_.prototype,"hasMetadata",void 0),_=t([n("shreddit-blurred-container")],_);const D=({content:t})=>o`<div data-ignore-click-interception class="overlay">${t}</div>`;var U;!function(t){t.left="left",t.right="right"}(U||(U={}));let F=class extends i{constructor(){super(...arguments),this.selected="",this.disabled=!1,this.dialogHeader="",this.dialogAlignment=U.right,this._data=[]}static get styles(){return[w,k(':host {\n  display: inline-block;\n}\ndetails {\n  /* Make the <details> look more "clickable" */\n  padding: 0.5rem 1rem;\n  background: var(--color-tone-6);\n  border: var(--misc-accordion-border);\n  border-radius: var(--radius-accordion-size);\n  background: transparent;\n  border: none;\n  padding-left: 3px;\n}\ndetails summary {\n  /* Makes the <summary> look more like a "clickable" link with the pointer cursor */\n  cursor: pointer;\n  font-weight: bold;\n  list-style-type: var(--misc-accordion-closed-list-style-type);\n}\ndetails[open] summary {\n  /* Adjust the <details> padding while open */\n  margin-bottom: 0.375rem;\n  list-style-type: var(--misc-accordion-open-list-style-type);\n}\ndetails[open] summary icon-caret-down {\n  transform: rotate(180deg);\n  transition: transform 0.22s ease-in-out;\n}\ndetails summary icon-caret-down {\n  transform: rotate(0);\n  transition: transform 0.22s ease-in-out;\n}\ndetails[open] > *:last-child {\n  /* Resets the bottom margin of the last element in the <details> while <details> is opened. This prevents double margins/paddings. */\n  margin-bottom: 0;\n}\nul {\n  margin: 0;\n  list-style-type: none;\n  padding-left: 0;\n  border-radius: 4px;\n  width: fit-content;\n  border: 1px solid var(--color-tone-5);\n}\nul li {\n  padding: 0.5rem 0.75rem;\n  border-block-end: 1px solid var(--color-tone-5);\n}\nul li:last-child {\n  border-block-end: none;\n}\ndetails {\n  width: fit-content;\n  position: relative;\n}\ndetails[open] summary:before {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1;\n  display: block;\n  cursor: default;\n  content: \' \';\n  background: transparent;\n}\ndetails[open] summary {\n  margin-bottom: 0;\n}\nfaceplate-dialog {\n  padding: 0;\n  margin-top: 1rem;\n  margin-left: -1px;\n  width: max-content;\n  z-index: 2;\n  box-shadow: var(--boxshadow-modal);\n}\nmenu {\n  margin: 0;\n}\nfaceplate-dialog {\n  max-width: 175px;\n  margin-left: 1rem;\n}\nfaceplate-dialog li {\n  padding: 0;\n}\n.dialog-header {\n  padding: 0.5rem 0.75rem;\n  font-weight: bolder;\n}\na {\n  padding: 0.5rem 0.75rem;\n  display: block;\n  color: inherit;\n  text-decoration: none;\n}\ndetails[open] > summary,\ndetails > summary {\n  list-style: none;\n}\ndetails[open] > summary::-webkit-details-marker,\ndetails > summary::-webkit-details-marker {\n  display: none;\n}\n.align-left {\n  right: 2rem;\n  left: auto;\n}\n')]}onSort(t,e){this.disabled||this.sortEvent&&this.dispatchEvent(r(this.sortEvent,{selected:t,event:e}))}render(){return o`\n <details \n class="pr-0 ${this.disabled?"pointer-events-none":""}" \n aria-disabled="${this.disabled?"true":"false"}" \n>\n <summary class="flex items-center gap-2xs">\n ${this._selectedClone}\n ${this.disabled?"":o`<icon-caret-down class="flex icon right"></icon-caret-down>`}\n </summary>\n <faceplate-dialog \n open\n class="${this.dialogAlignment===U.left?"align-left":""}" \n>\n ${this.dialogHeader?o`<div class="dialog-header">${this.dialogHeader}</div>`:""}\n <ul>\n ${this._data.map(((t,e)=>o`\n <li tabindex="0" data-i="${e}">\n <a href="${this.makePath(t)}" @click="${this.onSort.bind(this,t.value)}">\n <slot name="${t.value}"></slot>\n </a>\n </li>\n `))}\n </ul>\n <slot name="menu"></slot>\n </faceplate-dialog>\n </details>\n <slot hidden @slotchange="${this.handleSlotChange}"></slot>\n `}handleSlotChange(t){if(!(t.target instanceof HTMLSlotElement))return;let e=!1;for(const n of t.target.assignedNodes())n instanceof HTMLDataElement&&(n.slot=n.value,this._data.push(n),n.value===this.selected&&(this.selectedElementQuery?this._selectedClone=n.querySelector(this.selectedElementQuery)?.cloneNode(!0):this._selectedClone=n.cloneNode(!0)),e=!0);e&&this.requestUpdate()}makePath(t){return t.dataset.href}};t([e({type:String})],F.prototype,"selected",void 0),t([e({type:Boolean,attribute:"disabled"})],F.prototype,"disabled",void 0),t([e({type:String,attribute:"selected-element-query"})],F.prototype,"selectedElementQuery",void 0),t([e({type:String,attribute:"dialog-header"})],F.prototype,"dialogHeader",void 0),t([e({type:String,attribute:"dialog-alignment"})],F.prototype,"dialogAlignment",void 0),t([e({type:String,attribute:"sort-event"})],F.prototype,"sortEvent",void 0),t([y("details",!0)],F.prototype,"details",void 0),F=t([n("shreddit-sort-select")],F);const q=A(i);let R=class extends q{constructor(){super(...arguments),this.isNsfw=!1,this.isNsfwActive=!1,this.activate=({shouldMarkNsfwSeoBlockAsSeen:t})=>{t&&C(),this.isNsfwActive=this.isNsfw,this.requestUpdate()}}static get styles(){return k(".avatar {\n  overflow: hidden;\n  border: 2px solid var(--color-tone-7);\n  border-radius: 50%;\n  display: inline-block;\n  font-size: 75px;\n  height: 64px;\n  margin-top: -32px;\n  width: 64px;\n  background-color: var(--color-tone-2);\n}\n.profile-nsfw-avatar {\n  font-size: 64px;\n  color: var(--color-category-nsfw);\n  background-color: var(--color-tone-1);\n}\n")}connectedCallback(){super.connectedCallback(),this.subscribe($.TriggerNsfwBlockingExperience,this.activate)}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe($.TriggerNsfwBlockingExperience,this.activate)}render(){return this.isNsfwActive?o`<icon-nsfw fill class="avatar profile-nsfw-avatar"></icon-nsfw>`:o`<slot name="image"></slot>`}};t([e({type:Boolean})],R.prototype,"isNsfw",void 0),R=t([n("shreddit-profile-avatar")],R);const O=A(i);let W=class extends O{constructor(){super(...arguments),this.isNsfw=!1,this.isNsfwActive=!1,this.activate=()=>{this.isNsfwActive=this.isNsfw,this.requestUpdate()}}connectedCallback(){super.connectedCallback(),this.subscribe($.TriggerNsfwBlockingExperience,this.activate)}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe($.TriggerNsfwBlockingExperience,this.activate)}static get styles(){return[w,s`:host{display:block;width:100%;height:100%}`]}render(){return o`\n <div class="w-full h-full ${this.isNsfwActive?"hidden":""}">\n <slot></slot>\n </div>\n `}};t([e({type:Boolean})],W.prototype,"isNsfw",void 0),W=t([n("shreddit-profile-banner")],W);let Q=class extends i{constructor(){super(...arguments),this.caption="",this.outboundUrl=""}static get styles(){return s`.wrapper{align-items:center;background-color:var(--color-tone-5);box-sizing:border-box;display:flex;flex-flow:row wrap;overflow:hidden;width:100%}.image-caption{box-sizing:border-box;flex:1;margin:0 8px;max-height:40px;overflow:auto;padding:0 8px 0 8px;pointer-events:auto;text-align:left;text-overflow:auto;white-space:nowrap}.outbound-url{align-items:center;display:flex;max-width:50%;padding-right:16px;text-decoration:none}.url-text{overflow:hidden;text-align:right;text-overflow:ellipsis;white-space:nowrap}.outbound-icon{margin-left:4px;font-size:.8em}`}render(){return o`\n <div \n class="wrapper" \n style="${x({height:this.height?this.height+"px":"auto",justifyContent:this.caption?"space-between":"flex-end"})}" \n>\n ${this.caption&&o` <span class="image-caption" title="${this.caption}"> ${this.caption} </span> `}\n ${this.outboundUrl&&o`\n <a \n class="outbound-url" \n href="${this.outboundUrl}" \n rel="noopener nofollow ugc" \n target="_blank" \n>\n <span class="url-text"> ${this.linkDisplayText||this.outboundUrl} </span>\n <icon-external class="outbound-icon"></icon-external>\n </a>\n `}\n </div>\n `}};t([e({type:String})],Q.prototype,"caption",void 0),t([e({type:String,attribute:"outbound-href"})],Q.prototype,"outboundUrl",void 0),t([e({type:String,attribute:"link-display-text"})],Q.prototype,"linkDisplayText",void 0),t([e({type:Number})],Q.prototype,"height",void 0),Q=t([n("gallery-img-metadata")],Q);const G=M(i);let J=class extends G{constructor(){super(...arguments),this.poster=""}static get styles(){return k(":host {\n  background-color: black;\n  display: block;\n  height: 100%;\n  overflow: hidden;\n  position: relative;\n}\n.poster,\n.prompt {\n  bottom: 0;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n.poster {\n  filter: blur(6px);\n  opacity: 0.55;\n  z-index: 0;\n}\n.prompt {\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  z-index: 1;\n}\n.text {\n  color: hsla(0, 0%, 100%, 0.8);\n  font: var(--font-title-h4);\n  margin: 0;\n  max-width: 300px;\n  text-align: center;\n}\n@media (max-width: 320px) {\n  .text {\n    margin: 12px 0 20px;\n  }\n}\n")}firstUpdated(){this.trackEvent(N())}render(){return o`\n <shreddit-img \n alt="Media error" \n class="poster" \n loading="eager" \n objectfit="contain" \n .src="${this.poster}" \n></shreddit-img>\n <div class="prompt">\n <p class="text">\n Sorry, something went wrong when loading this video.\n </p>\n <slot name="button"></slot>\n </div>\n `}};t([e({type:String})],J.prototype,"poster",void 0),J=t([n("xpromo-media-error")],J);const K=A(M(i));let X=class extends K{constructor(){super(...arguments),this.appLinkParams={},this._appLinkController=new H(this)}static get styles(){return[w,k(".MediaErrorButton {\n  overflow: hidden;text-overflow: ellipsis;white-space: nowrap;\n}\n.MediaErrorButton {\n  --button-color-text: var(--color-global-white);\n  --button-border-color: var(--color-global-white);\n  border-radius: 3px;\n  text-transform: uppercase;\n  margin-top: 24px;\n}\n.MediaErrorButton,\n.MediaErrorButton:link,\n.MediaErrorButton:visited,\n.MediaErrorButton:active {\n  text-decoration: none;\n}\n")]}onViewInAppClick(){this.trackEvent(E(L.GetApp)),this._appLinkController.handleOpenInAppClick()}render(){return o`\n <shreddit-interactable-element @interactionEvent="${this.onViewInAppClick}">\n ${m({attributes:{className:"MediaErrorButton",rel:"nofollow",href:this._appLinkController.getAppLink(this.appLinkParams)},size:b.Medium,appearance:"bordered",children:"View in app"})}\n </shreddit-interactable-element>\n `}};t([e({type:Object,attribute:"app-link-params"})],X.prototype,"appLinkParams",void 0),X=t([n("xpromo-media-error-button")],X);const Y=A(i);let tt=class extends Y{constructor(){super(...arguments),this.appLinkParams={},this._appLinkController=new H(this),this.active=!1,this.blurredContainer=null,this.activate=()=>{this.blurredContainer&&this.blurredContainer.setAttribute("blurred",""),this.active=!0,this.requestUpdate()},this.handleSlotchange=t=>{if(!(t.target instanceof HTMLSlotElement))return;const e=t.target.assignedNodes({flatten:!0});for(const t of e)if(t instanceof _){this.blurredContainer=t,this.active||this.blurredContainer.removeAttribute("blurred");break}}}connectedCallback(){super.connectedCallback(),this.subscribe($.TriggerNsfwBlockingExperience,this.activate)}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe($.TriggerNsfwBlockingExperience,this.activate)}static get styles(){return[w,k(".viewInApp {\n  overflow: hidden;text-overflow: ellipsis;white-space: nowrap;\n}\n:host {\n  display: block;\n  position: relative;\n  height: 100%;\n}\n.prompt.hidden {\n  display: none;\n}\n.prompt {\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.45);\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  left: 0;\n  justify-content: center;\n  position: absolute;\n  top: 0;\n  width: 100%;\n}\n.icon {\n  color: hsla(0, 0%, 100%, 0.6);\n  font-size: 36px;\n  text-align: center;\n}\n.title,\n.text {\n  color: hsla(0, 0%, 100%, 0.8);\n  max-width: 300px;\n  text-align: center;\n}\n.title {\n  font: var(--font-title-h3);\n  margin: 18px 0 0;\n}\n.text {\n  font: var(--font-title-h4);\n  font-weight: normal;\n  margin: 10px 0 24px;\n}\n@media (max-width: 320px) {\n  .text {\n    margin: 12px 0 20px;\n  }\n}\n.viewInApp {\n  flex-shrink: 0;\n  --button-color-text: var(--color-global-white);\n  --button-border-color: var(--color-global-white);\n  border-radius: 3px;\n  text-transform: uppercase;\n}\n.viewInApp,\n.viewInApp:link,\n.viewInApp:visited,\n.viewInApp:active {\n  text-decoration: none;\n}\n")]}render(){return o`\n <slot @slotchange="${this.handleSlotchange}"></slot>\n <div class="prompt ${this.active?"":"hidden"}">\n <div class="icon">\n <icon-nsfw fill></icon-nsfw>\n </div>\n <h3 class="title">\n Mature Content\n </h3>\n <p class="text">\n This is mature content and may not be appropriate for certain viewers. To continue, use the app to verify you\u2019re over 18 and browse anonymously.\n </p>\n ${m({attributes:{className:"viewInApp",rel:"nofollow",href:this._appLinkController.getAppLink(this.appLinkParams)},size:b.Medium,appearance:"secondary",children:"View in app"})}\n </div>\n `}};t([e({type:Object,attribute:"app-link-params"})],tt.prototype,"appLinkParams",void 0),tt=t([n("xpromo-nsfw-blocking-container")],tt);const et=S(M(i));let nt=class extends et{static get styles(){return[w,k(":host {\n  display: flex;\n  justify-content: center;\n  margin: 16px;\n  margin-bottom: 0;\n  width: 100%;\n}\n")]}handleFollow(t){t.stopPropagation(),this.trackEvent(Z()),this.dispatchEvent(r("follow",this.userMeta))}handleChatOpen(){this.trackEvent(B()),this.dispatchEvent(r("open-continue-chat-in-app-modal"))}render(){return o`\n <button \n class="button button-small button-primary w-full mr-sm follow-button" \n @click="${this.handleFollow}" \n>\n Follow\n </button>\n <button \n class="button button-small button-primary w-full chat-button" \n @click="${this.handleChatOpen}" \n>\n Chat\n </button>\n `}};t([e({type:Object,attribute:"user-meta"})],nt.prototype,"userMeta",void 0),nt=t([n("shreddit-profile-actions")],nt);
//# sourceMappingURL=deprecated-content-client-js-32129462.js.map
