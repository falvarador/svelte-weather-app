const $e=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const i of l.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerpolicy&&(l.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?l.credentials="include":s.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function n(s){if(s.ep)return;s.ep=!0;const l=r(s);fetch(s.href,l)}};$e();function y(){}function ye(t,e){for(const r in e)t[r]=e[r];return t}function ve(t){return t&&typeof t=="object"&&typeof t.then=="function"}function ge(t){return t()}function ce(){return Object.create(null)}function X(t){t.forEach(ge)}function ke(t){return typeof t=="function"}function j(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let Y;function ue(t,e){return Y||(Y=document.createElement("a")),Y.href=e,t===Y.href}function we(t){return Object.keys(t).length===0}function qe(t,...e){if(t==null)return y;const r=t.subscribe(...e);return r.unsubscribe?()=>r.unsubscribe():r}function Te(t,e,r){t.$$.on_destroy.push(qe(e,r))}function Ee(t,e,r,n){if(t){const s=be(t,e,r,n);return t[0](s)}}function be(t,e,r,n){return t[1]&&n?ye(r.ctx.slice(),t[1](n(e))):r.ctx}function Le(t,e,r,n){if(t[2]&&n){const s=t[2](n(r));if(e.dirty===void 0)return s;if(typeof s=="object"){const l=[],i=Math.max(e.dirty.length,s.length);for(let o=0;o<i;o+=1)l[o]=e.dirty[o]|s[o];return l}return e.dirty|s}return e.dirty}function Se(t,e,r,n,s,l){if(s){const i=be(e,r,n,l);t.p(i,s)}}function Ce(t){if(t.ctx.length>32){const e=[],r=t.ctx.length/32;for(let n=0;n<r;n++)e[n]=-1;return e}return-1}function u(t,e){t.appendChild(e)}function q(t,e,r){t.insertBefore(e,r||null)}function w(t){t.parentNode.removeChild(t)}function h(t){return document.createElement(t)}function $(t){return document.createTextNode(t)}function b(){return $(" ")}function U(t,e,r,n){return t.addEventListener(e,r,n),()=>t.removeEventListener(e,r,n)}function Ne(t){return function(e){return e.preventDefault(),t.call(this,e)}}function d(t,e,r){r==null?t.removeAttribute(e):t.getAttribute(e)!==r&&t.setAttribute(e,r)}function Ae(t){return Array.from(t.childNodes)}function D(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function ae(t,e){t.value=e==null?"":e}function F(t,e,r){t.classList[r?"add":"remove"](e)}function je(t,e,{bubbles:r=!1,cancelable:n=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,r,n,e),s}let V;function P(t){V=t}function oe(){if(!V)throw new Error("Function called outside component initialization");return V}function Oe(t){oe().$$.on_mount.push(t)}function ze(){const t=oe();return(e,r,{cancelable:n=!1}={})=>{const s=t.$$.callbacks[e];if(s){const l=je(e,r,{cancelable:n});return s.slice().forEach(i=>{i.call(t,l)}),!l.defaultPrevented}return!0}}const Q=[],fe=[],ee=[],de=[],Pe=Promise.resolve();let se=!1;function De(){se||(se=!0,Pe.then(ie))}function le(t){ee.push(t)}const re=new Set;let Z=0;function ie(){const t=V;do{for(;Z<Q.length;){const e=Q[Z];Z++,P(e),Me(e.$$)}for(P(null),Q.length=0,Z=0;fe.length;)fe.pop()();for(let e=0;e<ee.length;e+=1){const r=ee[e];re.has(r)||(re.add(r),r())}ee.length=0}while(Q.length);for(;de.length;)de.pop()();se=!1,re.clear(),P(t)}function Me(t){if(t.fragment!==null){t.update(),X(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(le)}}const te=new Set;let R;function Ie(){R={r:0,c:[],p:R}}function Fe(){R.r||X(R.c),R=R.p}function v(t,e){t&&t.i&&(te.delete(t),t.i(e))}function k(t,e,r,n){if(t&&t.o){if(te.has(t))return;te.add(t),R.c.push(()=>{te.delete(t),n&&(r&&t.d(1),n())}),t.o(e)}else n&&n()}function me(t,e){const r=e.token={};function n(s,l,i,o){if(e.token!==r)return;e.resolved=o;let a=e.ctx;i!==void 0&&(a=a.slice(),a[i]=o);const c=s&&(e.current=s)(a);let m=!1;e.block&&(e.blocks?e.blocks.forEach((f,p)=>{p!==l&&f&&(Ie(),k(f,1,1,()=>{e.blocks[p]===f&&(e.blocks[p]=null)}),Fe())}):e.block.d(1),c.c(),v(c,1),c.m(e.mount(),e.anchor),m=!0),e.block=c,e.blocks&&(e.blocks[l]=c),m&&ie()}if(ve(t)){const s=oe();if(t.then(l=>{P(s),n(e.then,1,e.value,l),P(null)},l=>{if(P(s),n(e.catch,2,e.error,l),P(null),!e.hasCatch)throw l}),e.current!==e.pending)return n(e.pending,0),!0}else{if(e.current!==e.then)return n(e.then,1,e.value,t),!0;e.resolved=t}}function Be(t,e,r){const n=e.slice(),{resolved:s}=t;t.current===t.then&&(n[t.value]=s),t.current===t.catch&&(n[t.error]=s),t.block.p(n,r)}function A(t){t&&t.c()}function L(t,e,r,n){const{fragment:s,on_mount:l,on_destroy:i,after_update:o}=t.$$;s&&s.m(e,r),n||le(()=>{const a=l.map(ge).filter(ke);i?i.push(...a):X(a),t.$$.on_mount=[]}),o.forEach(le)}function S(t,e){const r=t.$$;r.fragment!==null&&(X(r.on_destroy),r.fragment&&r.fragment.d(e),r.on_destroy=r.fragment=null,r.ctx=[])}function He(t,e){t.$$.dirty[0]===-1&&(Q.push(t),De(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function M(t,e,r,n,s,l,i,o=[-1]){const a=V;P(t);const c=t.$$={fragment:null,ctx:null,props:l,update:y,not_equal:s,bound:ce(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(a?a.$$.context:[])),callbacks:ce(),dirty:o,skip_bound:!1,root:e.target||a.$$.root};i&&i(c.root);let m=!1;if(c.ctx=r?r(t,e.props||{},(f,p,..._)=>{const g=_.length?_[0]:p;return c.ctx&&s(c.ctx[f],c.ctx[f]=g)&&(!c.skip_bound&&c.bound[f]&&c.bound[f](g),m&&He(t,f)),p}):[],c.update(),m=!0,X(c.before_update),c.fragment=n?n(c.ctx):!1,e.target){if(e.hydrate){const f=Ae(e.target);c.fragment&&c.fragment.l(f),f.forEach(w)}else c.fragment&&c.fragment.c();e.intro&&v(t.$$.fragment),L(t,e.target,e.anchor,e.customElement),ie()}P(a)}class I{$destroy(){S(this,1),this.$destroy=y}$on(e,r){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(r),()=>{const s=n.indexOf(r);s!==-1&&n.splice(s,1)}}$set(e){this.$$set&&!we(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const We=t=>({matches:t&1}),he=t=>({matches:t[0]});function Ke(t){let e;const r=t[4].default,n=Ee(r,t,t[3],he);return{c(){n&&n.c()},m(s,l){n&&n.m(s,l),e=!0},p(s,[l]){n&&n.p&&(!e||l&9)&&Se(n,r,s,s[3],e?Le(r,s[3],l,We):Ce(s[3]),he)},i(s){e||(v(n,s),e=!0)},o(s){k(n,s),e=!1},d(s){n&&n.d(s)}}}function Re(t,e,r){let{$$slots:n={},$$scope:s}=e,{query:l=""}=e,i,o,a=!1,c=!1;Oe(()=>(r(2,a=!0),()=>{f()}));function m(p){i=window.matchMedia(p),o=_=>r(0,c=_.matches),i.addEventListener("change",o),r(0,c=i.matches)}function f(){i&&o&&i.removeListener(o)}return t.$$set=p=>{"query"in p&&r(1,l=p.query),"$$scope"in p&&r(3,s=p.$$scope)},t.$$.update=()=>{t.$$.dirty&6&&a&&(f(),m(l))},[c,l,a,s,n]}class ne extends I{constructor(e){super(),M(this,e,Re,Ke,j,{query:1})}}function Xe(t){let e,r,n,s,l,i,o,a,c,m,f,p,_,g,B,C,N,O,T,H,W;return{c(){e=h("aside"),r=h("section"),n=h("span"),s=$(t[0]),l=$("%"),i=b(),o=h("span"),o.textContent="Humidity",a=b(),c=h("section"),m=h("span"),f=$(t[1]),p=$(" km/h"),_=b(),g=h("span"),g.textContent="Windspeed",B=b(),C=h("section"),N=h("span"),O=$(t[2]),T=$("\xB0"),H=b(),W=h("span"),W.textContent="Feels like",d(n,"class","svelte-1fgb36u"),d(o,"class","svelte-1fgb36u"),d(r,"class","svelte-1fgb36u"),d(m,"class","svelte-1fgb36u"),d(g,"class","svelte-1fgb36u"),d(c,"class","svelte-1fgb36u"),d(N,"class","svelte-1fgb36u"),d(W,"class","svelte-1fgb36u"),d(C,"class","svelte-1fgb36u"),d(e,"class","svelte-1fgb36u"),F(e,"mobile",t[3])},m(E,z){q(E,e,z),u(e,r),u(r,n),u(n,s),u(n,l),u(r,i),u(r,o),u(e,a),u(e,c),u(c,m),u(m,f),u(m,p),u(c,_),u(c,g),u(e,B),u(e,C),u(C,N),u(N,O),u(N,T),u(C,H),u(C,W)},p(E,z){z&1&&D(s,E[0]),z&2&&D(f,E[1]),z&4&&D(O,E[2]),z&8&&F(e,"mobile",E[3])},d(E){E&&w(e)}}}function Ge(t){let e,r,n,s;return n=new ne({props:{query:"(max-width:576px)",$$slots:{default:[Xe,({matches:l})=>({3:l}),({matches:l})=>l?8:0]},$$scope:{ctx:t}}}),{c(){e=h("hr"),r=b(),A(n.$$.fragment)},m(l,i){q(l,e,i),q(l,r,i),L(n,l,i),s=!0},p(l,[i]){const o={};i&31&&(o.$$scope={dirty:i,ctx:l}),n.$set(o)},i(l){s||(v(n.$$.fragment,l),s=!0)},o(l){k(n.$$.fragment,l),s=!1},d(l){l&&w(e),l&&w(r),S(n,l)}}}function Je(t,e,r){let{humidity:n=0,windspeed:s=0,feelslike:l=0}=e;return t.$$set=i=>{"humidity"in i&&r(0,n=i.humidity),"windspeed"in i&&r(1,s=i.windspeed),"feelslike"in i&&r(2,l=i.feelslike)},[n,s,l]}class Qe extends I{constructor(e){super(),M(this,e,Je,Ge,j,{humidity:0,windspeed:1,feelslike:2})}}const G=[];function Ue(t,e=y){let r;const n=new Set;function s(o){if(j(t,o)&&(t=o,r)){const a=!G.length;for(const c of n)c[1](),G.push(c,t);if(a){for(let c=0;c<G.length;c+=2)G[c][0](G[c+1]);G.length=0}}}function l(o){s(o(t))}function i(o,a=y){const c=[o,a];return n.add(c),n.size===1&&(r=e(s)||y),o(t),()=>{n.delete(c),n.size===0&&(r(),r=null)}}return{set:s,update:l,subscribe:i}}const Ve=()=>{const{subscribe:t,set:e}=Ue(localStorage.getItem("theme")||"auto"),r=n=>{localStorage.setItem("theme",n),n==="auto"&&document.documentElement.removeAttribute("data-theme"),document.documentElement.setAttribute("data-theme",n)};return{subscribe:t,setTheme:n=>{e(n),r(n)}}},x=Ve();function Ye(t){let e,r,n,s,l,i,o,a,c,m,f,p,_,g,B,C,N,O,T,H,W,E,z;return{c(){e=h("details"),r=h("summary"),r.textContent="Theme",n=b(),s=h("ul"),l=h("li"),i=h("label"),o=h("input"),c=$(`
                Auto`),m=b(),f=h("li"),p=h("label"),_=h("input"),B=$(`
                Light`),C=b(),N=h("li"),O=h("label"),T=h("input"),W=$(`
                Dark`),d(r,"aria-haspopup","listbox"),d(o,"type","radio"),d(o,"id","small"),d(o,"name","size"),o.value="small",o.checked=a=t[0]==="auto",d(i,"for","small"),d(_,"type","radio"),d(_,"id","medium"),d(_,"name","size"),_.value="medium",_.checked=g=t[0]==="light",d(p,"for","medium"),d(T,"type","radio"),d(T,"id","large"),d(T,"name","size"),T.value="large",T.checked=H=t[0]==="dark",d(O,"for","large"),d(s,"role","listbox"),d(e,"role","list")},m(K,J){q(K,e,J),u(e,r),u(e,n),u(e,s),u(s,l),u(l,i),u(i,o),u(i,c),u(s,m),u(s,f),u(f,p),u(p,_),u(p,B),u(s,C),u(s,N),u(N,O),u(O,T),u(O,W),E||(z=[U(o,"click",t[1]),U(_,"click",t[3]),U(T,"click",t[2])],E=!0)},p(K,[J]){J&1&&a!==(a=K[0]==="auto")&&(o.checked=a),J&1&&g!==(g=K[0]==="light")&&(_.checked=g),J&1&&H!==(H=K[0]==="dark")&&(T.checked=H)},i:y,o:y,d(K){K&&w(e),E=!1,X(z)}}}function Ze(t,e,r){let n;Te(t,x,o=>r(0,n=o));const s=()=>{x.setTheme("auto")},l=()=>{x.setTheme("dark")},i=()=>{x.setTheme("light")};return t.$$.update=()=>{t.$$.dirty&1&&(n==="auto"?s():n==="dark"?l():i())},[n,s,l,i]}class xe extends I{constructor(e){super(),M(this,e,Ze,Ye,j,{})}}function et(t){let e,r,n,s,l;return s=new xe({}),{c(){e=h("footer"),r=h("small"),r.innerHTML=`Built with <a href="https://svelte.dev/" target="_blank" rel="noopener noreferrer">Svelte</a>
            and love \u2764\uFE0F`,n=b(),A(s.$$.fragment),d(r,"class","svelte-79nbdv"),d(e,"class","svelte-79nbdv"),F(e,"mobile",t[0])},m(i,o){q(i,e,o),u(e,r),u(e,n),L(s,e,null),l=!0},p(i,o){o&1&&F(e,"mobile",i[0])},i(i){l||(v(s.$$.fragment,i),l=!0)},o(i){k(s.$$.fragment,i),l=!1},d(i){i&&w(e),S(s)}}}function tt(t){let e,r;return e=new ne({props:{query:"(max-width:576px)",$$slots:{default:[et,({matches:n})=>({0:n}),({matches:n})=>n?1:0]},$$scope:{ctx:t}}}),{c(){A(e.$$.fragment)},m(n,s){L(e,n,s),r=!0},p(n,[s]){const l={};s&3&&(l.$$scope={dirty:s,ctx:n}),e.$set(l)},i(n){r||(v(e.$$.fragment,n),r=!0)},o(n){k(e.$$.fragment,n),r=!1},d(n){S(e,n)}}}class nt extends I{constructor(e){super(),M(this,e,null,tt,j,{})}}function rt(t){let e;return{c(){e=h("span"),e.textContent="Loading, please wait\u2026",d(e,"aria-busy","true")},m(r,n){q(r,e,n)},p:y,i:y,o:y,d(r){r&&w(e)}}}class st extends I{constructor(e){super(),M(this,e,null,rt,j,{})}}function lt(t){let e,r,n,s;return{c(){e=h("form"),r=h("input"),d(r,"type","search"),d(r,"id","search"),d(r,"name","search"),d(r,"placeholder","Search"),d(r,"autocomplete","off"),d(e,"class","svelte-tofyqk")},m(l,i){q(l,e,i),u(e,r),ae(r,t[0]),n||(s=[U(r,"input",t[2]),U(e,"submit",Ne(t[1]))],n=!0)},p(l,[i]){i&1&&ae(r,l[0])},i:y,o:y,d(l){l&&w(e),n=!1,X(s)}}}function ot(t,e,r){let n="",s=ze();function l(o){const a=Object.fromEntries(new FormData(o.target));s("search",{search:a.search})}function i(){n=this.value,r(0,n)}return[n,l,i]}class it extends I{constructor(e){super(),M(this,e,ot,lt,j,{})}}function ct(t){let e,r,n,s,l,i,o,a,c,m,f,p;return{c(){e=h("section"),r=h("h2"),n=$(t[0]),s=$("\xB0"),l=h("sup"),l.textContent="C",i=b(),o=h("div"),a=h("h3"),c=$(t[1]),m=b(),f=h("h4"),p=$(t[2]),d(l,"class","svelte-6p9a0h"),d(r,"class","svelte-6p9a0h"),d(a,"class","svelte-6p9a0h"),d(f,"class","svelte-6p9a0h"),d(e,"class","svelte-6p9a0h"),F(e,"mobile",t[3])},m(_,g){q(_,e,g),u(e,r),u(r,n),u(r,s),u(r,l),u(e,i),u(e,o),u(o,a),u(a,c),u(o,m),u(o,f),u(f,p)},p(_,g){g&1&&D(n,_[0]),g&2&&D(c,_[1]),g&4&&D(p,_[2]),g&8&&F(e,"mobile",_[3])},d(_){_&&w(e)}}}function ut(t){let e,r;return e=new ne({props:{query:"(max-width:576px)",$$slots:{default:[ct,({matches:n})=>({3:n}),({matches:n})=>n?8:0]},$$scope:{ctx:t}}}),{c(){A(e.$$.fragment)},m(n,s){L(e,n,s),r=!0},p(n,[s]){const l={};s&31&&(l.$$scope={dirty:s,ctx:n}),e.$set(l)},i(n){r||(v(e.$$.fragment,n),r=!0)},o(n){k(e.$$.fragment,n),r=!1},d(n){S(e,n)}}}function at(t,e,r){let{temperature:n=0,conditionText:s="",localtime:l=""}=e;return t.$$set=i=>{"temperature"in i&&r(0,n=i.temperature),"conditionText"in i&&r(1,s=i.conditionText),"localtime"in i&&r(2,l=i.localtime)},[n,s,l]}class ft extends I{constructor(e){super(),M(this,e,at,ut,j,{temperature:0,conditionText:1,localtime:2})}}function dt(t){let e,r,n,s,l,i,o,a,c,m;return{c(){e=h("section"),r=h("div"),n=h("h1"),s=$(t[0]),l=b(),i=h("span"),o=$(t[1]),a=b(),c=h("img"),d(n,"class","svelte-18azqs6"),ue(c.src,m=t[2])||d(c,"src",m),d(c,"alt","weather icon"),d(c,"class","svelte-18azqs6"),d(e,"class","svelte-18azqs6"),F(e,"mobile",t[3])},m(f,p){q(f,e,p),u(e,r),u(r,n),u(n,s),u(r,l),u(r,i),u(i,o),u(e,a),u(e,c)},p(f,p){p&1&&D(s,f[0]),p&2&&D(o,f[1]),p&4&&!ue(c.src,m=f[2])&&d(c,"src",m),p&8&&F(e,"mobile",f[3])},d(f){f&&w(e)}}}function mt(t){let e,r;return e=new ne({props:{query:"(max-width:576px)",$$slots:{default:[dt,({matches:n})=>({3:n}),({matches:n})=>n?8:0]},$$scope:{ctx:t}}}),{c(){A(e.$$.fragment)},m(n,s){L(e,n,s),r=!0},p(n,[s]){const l={};s&31&&(l.$$scope={dirty:s,ctx:n}),e.$set(l)},i(n){r||(v(e.$$.fragment,n),r=!0)},o(n){k(e.$$.fragment,n),r=!1},d(n){S(e,n)}}}function ht(t,e,r){let{locationName:n="",country:s="",icon:l=""}=e;return t.$$set=i=>{"locationName"in i&&r(0,n=i.locationName),"country"in i&&r(1,s=i.country),"icon"in i&&r(2,l=i.icon)},[n,s,l]}class pt extends I{constructor(e){super(),M(this,e,ht,mt,j,{locationName:0,country:1,icon:2})}}const _t={method:"GET",headers:{"X-RapidAPI-Key":"3f9f1fda3emshad21d0f74e6a291p145ddbjsn31b3c933453f","X-RapidAPI-Host":"weatherapi-com.p.rapidapi.com"}},pe=async(t="London")=>{try{const e=await fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=${t}`,_t),r=await e.json();if(!e.ok)throw new Error(`HTTP status code: ${e.status}`);const{location:n,current:s}=r,{country:l,localtime:i,name:o}=n,{condition:a,humidity:c,feelslike_c:m,is_day:f,temp_c:p,wind_kph:_,wind_dir:g}=s,{code:B,icon:C,text:N}=a;return{conditionCode:B,conditionText:N,country:l,feelsLike:m,humidity:c,icon:C,isDay:f,localtime:i,locationName:o,temperature:p,windDir:g,windSpeed:_}}catch(e){return e}};function _e(t){t[2]=t[11].locationName,t[3]=t[11].country,t[4]=t[11].icon,t[5]=t[11].temperature,t[6]=t[11].conditionText,t[7]=t[11].localtime,t[8]=t[11].feelsLike,t[9]=t[11].humidity,t[10]=t[11].windSpeed}function gt(t){let e,r=t[12]+"",n;return{c(){e=h("p"),n=$(r)},m(s,l){q(s,e,l),u(e,n)},p(s,l){l&1&&r!==(r=s[12]+"")&&D(n,r)},i:y,o:y,d(s){s&&w(e)}}}function bt(t){_e(t);let e,r,n,s,l,i;return e=new pt({props:{locationName:t[2],country:t[3],icon:t[4]}}),n=new ft({props:{temperature:t[5],conditionText:t[6],localtime:t[7]}}),l=new Qe({props:{feelslike:t[8],humidity:t[9],windspeed:t[10]}}),{c(){A(e.$$.fragment),r=b(),A(n.$$.fragment),s=b(),A(l.$$.fragment)},m(o,a){L(e,o,a),q(o,r,a),L(n,o,a),q(o,s,a),L(l,o,a),i=!0},p(o,a){_e(o);const c={};a&1&&(c.locationName=o[2]),a&1&&(c.country=o[3]),a&1&&(c.icon=o[4]),e.$set(c);const m={};a&1&&(m.temperature=o[5]),a&1&&(m.conditionText=o[6]),a&1&&(m.localtime=o[7]),n.$set(m);const f={};a&1&&(f.feelslike=o[8]),a&1&&(f.humidity=o[9]),a&1&&(f.windspeed=o[10]),l.$set(f)},i(o){i||(v(e.$$.fragment,o),v(n.$$.fragment,o),v(l.$$.fragment,o),i=!0)},o(o){k(e.$$.fragment,o),k(n.$$.fragment,o),k(l.$$.fragment,o),i=!1},d(o){S(e,o),o&&w(r),S(n,o),o&&w(s),S(l,o)}}}function $t(t){let e,r;return e=new st({}),{c(){A(e.$$.fragment)},m(n,s){L(e,n,s),r=!0},p:y,i(n){r||(v(e.$$.fragment,n),r=!0)},o(n){k(e.$$.fragment,n),r=!1},d(n){S(e,n)}}}function yt(t){let e,r,n,s,l,i,o,a;r=new it({}),r.$on("search",t[1]);let c={ctx:t,current:null,token:null,hasCatch:!0,pending:$t,then:bt,catch:gt,value:11,error:12,blocks:[,,,]};return me(l=t[0],c),o=new nt({}),{c(){e=h("main"),A(r.$$.fragment),n=b(),s=h("article"),c.block.c(),i=b(),A(o.$$.fragment),d(s,"class","svelte-19sv3k4"),d(e,"class","container")},m(m,f){q(m,e,f),L(r,e,null),u(e,n),u(e,s),c.block.m(s,c.anchor=null),c.mount=()=>s,c.anchor=null,u(e,i),L(o,e,null),a=!0},p(m,[f]){t=m,c.ctx=t,f&1&&l!==(l=t[0])&&me(l,c)||Be(c,t,f)},i(m){a||(v(r.$$.fragment,m),v(c.block),v(o.$$.fragment,m),a=!0)},o(m){k(r.$$.fragment,m);for(let f=0;f<3;f+=1){const p=c.blocks[f];k(p)}k(o.$$.fragment,m),a=!1},d(m){m&&w(e),S(r),c.block.d(),c.token=null,c=null,S(o)}}}function vt(t,e,r){let n=pe();return[n,l=>{r(0,n=pe(l.detail.search))}]}class kt extends I{constructor(e){super(),M(this,e,vt,yt,j,{})}}new kt({target:document.getElementById("app")});
