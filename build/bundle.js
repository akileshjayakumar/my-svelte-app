var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function r(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function u(t,n){t.appendChild(n)}function l(t,n,e){t.insertBefore(n,e||null)}function i(t){t.parentNode&&t.parentNode.removeChild(t)}function f(t){return document.createElement(t)}function s(t){return document.createTextNode(t)}function a(){return s(" ")}function d(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function h(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function p(t,n){n=""+n,t.data!==n&&(t.data=n)}function m(t,n){t.value=null==n?"":n}let $;function g(t){$=t}const y=[],b=[];let _=[];const x=[],v=Promise.resolve();let w=!1;function E(t){_.push(t)}const k=new Set;let N=0;function A(){if(0!==N)return;const t=$;do{try{for(;N<y.length;){const t=y[N];N++,g(t),O(t.$$)}}catch(t){throw y.length=0,N=0,t}for(g(null),y.length=0,N=0;b.length;)b.pop()();for(let t=0;t<_.length;t+=1){const n=_[t];k.has(n)||(k.add(n),n())}_.length=0}while(y.length);for(;x.length;)x.pop()();w=!1,k.clear(),g(t)}function O(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(E)}}const S=new Set;function j(t,n){const e=t.$$;null!==e.fragment&&(!function(t){const n=[],e=[];_.forEach((o=>-1===t.indexOf(o)?n.push(o):e.push(o))),e.forEach((t=>t())),_=n}(e.after_update),o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function C(t,n){-1===t.$$.dirty[0]&&(y.push(t),w||(w=!0,v.then(A)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function H(c,u,l,f,s,a,d,h=[-1]){const p=$;g(c);const m=c.$$={fragment:null,ctx:[],props:a,update:t,not_equal:s,bound:e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(u.context||(p?p.$$.context:[])),callbacks:e(),dirty:h,skip_bound:!1,root:u.target||p.$$.root};d&&d(m.root);let y=!1;if(m.ctx=l?l(c,u.props||{},((t,n,...e)=>{const o=e.length?e[0]:n;return m.ctx&&s(m.ctx[t],m.ctx[t]=o)&&(!m.skip_bound&&m.bound[t]&&m.bound[t](o),y&&C(c,t)),n})):[],m.update(),y=!0,o(m.before_update),m.fragment=!!f&&f(m.ctx),u.target){if(u.hydrate){const t=function(t){return Array.from(t.childNodes)}(u.target);m.fragment&&m.fragment.l(t),t.forEach(i)}else m.fragment&&m.fragment.c();u.intro&&((b=c.$$.fragment)&&b.i&&(S.delete(b),b.i(_))),function(t,e,c,u){const{fragment:l,after_update:i}=t.$$;l&&l.m(e,c),u||E((()=>{const e=t.$$.on_mount.map(n).filter(r);t.$$.on_destroy?t.$$.on_destroy.push(...e):o(e),t.$$.on_mount=[]})),i.forEach(E)}(c,u.target,u.anchor,u.customElement),A()}var b,_;g(p)}class I{$destroy(){j(this,1),this.$destroy=t}$on(n,e){if(!r(e))return t;const o=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return o.push(e),()=>{const t=o.indexOf(e);-1!==t&&o.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function L(t,n,e){const o=t.slice();return o[5]=n[e],o}function M(n){let e,o,r=n[5]+"";return{c(){e=f("li"),o=s(r)},m(t,n){l(t,e,n),u(e,o)},p:t,d(t){t&&i(e)}}}function T(t){let n;return{c(){n=f("p"),n.textContent="This is a conditional message."},m(t,e){l(t,n,e)},d(t){t&&i(n)}}}function q(n){let e,r,c,$,g,y,b,_,x,v,w,E,k,N,A,O,S=n[1]?"Hide":"Show",j=(n[0]||"world")+"",C=n[2],H=[];for(let t=0;t<C.length;t+=1)H[t]=M(L(n,C,t));let I=n[1]&&T();return{c(){e=f("ul");for(let t=0;t<H.length;t+=1)H[t].c();r=a(),c=f("button"),$=s(S),g=s(" Message"),y=a(),I&&I.c(),b=a(),_=f("main"),x=f("h1"),v=s("Hello "),w=s(j),E=s("!"),k=a(),N=f("input"),h(x,"class","svelte-1ucbz36"),h(N,"type","text"),h(N,"placeholder","Enter your name")},m(t,o){l(t,e,o);for(let t=0;t<H.length;t+=1)H[t]&&H[t].m(e,null);l(t,r,o),l(t,c,o),u(c,$),u(c,g),l(t,y,o),I&&I.m(t,o),l(t,b,o),l(t,_,o),u(_,x),u(x,v),u(x,w),u(x,E),u(_,k),u(_,N),m(N,n[0]),A||(O=[d(c,"click",n[3]),d(N,"input",n[4])],A=!0)},p(t,[n]){if(4&n){let o;for(C=t[2],o=0;o<C.length;o+=1){const r=L(t,C,o);H[o]?H[o].p(r,n):(H[o]=M(r),H[o].c(),H[o].m(e,null))}for(;o<H.length;o+=1)H[o].d(1);H.length=C.length}2&n&&S!==(S=t[1]?"Hide":"Show")&&p($,S),t[1]?I||(I=T(),I.c(),I.m(b.parentNode,b)):I&&(I.d(1),I=null),1&n&&j!==(j=(t[0]||"world")+"")&&p(w,j),1&n&&N.value!==t[0]&&m(N,t[0])},i:t,o:t,d(t){t&&i(e),function(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}(H,t),t&&i(r),t&&i(c),t&&i(y),I&&I.d(t),t&&i(b),t&&i(_),A=!1,o(O)}}}function z(t,n,e){let o="",r=!0;return[o,r,["Item 1","Item 2","Item 3"],()=>e(1,r=!r),function(){o=this.value,e(0,o)}]}return new class extends I{constructor(t){super(),H(this,t,z,q,c,{})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
