var d=Object.defineProperty;var h=(t,e,n)=>e in t?d(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var i=(t,e,n)=>(h(t,typeof e!="symbol"?e+"":e,n),n);import"./main.70e287a0.js";import"./fonts.ec082ce4.js";function l(t,e=4){return 1-Math.pow(1-t,e)}class u{constructor(e){i(this,"_el");i(this,"_toggle");i(this,"_content");i(this,"isOpen",!1);this._el=e,this._toggle=this.getElement('[data-attribute="toggle"]'),this._content=this.getElement('[data-attribute="content"]')}getElement(e){return this._el.querySelector(e)}clickHandler(e){e.target&&Array.from(this.links).includes(e.target)&&this.collapsePanel()}animateClosed(){var a;const e=new Array(100).fill(1).map((r,s)=>`scale(1, ${1+-1*l(s/100)})`),n=new Array(100).fill(1).map((r,s)=>`scale(1, ${1/(1+-1*l(s/100))})`);this._content.animate({transform:e},{duration:1e3}),(a=this._content.querySelector("nav"))==null||a.animate({transform:n},{duration:1e3})}animateOpen(){var a;const e=new Array(100).fill(1).map((r,s)=>`scale(1, ${l(s/100)})`),n=new Array(100).fill(1).map((r,s)=>`scale(1, ${1/l(s/100)})`);this._content.animate({transform:e},{duration:1e3}),(a=this._content.querySelector("nav"))==null||a.animate({transform:n},{duration:1e3})}collapsePanel(){this.animateClosed(),this._toggle.classList.remove("is-open"),this._content.classList.remove("is-open"),this._toggle.setAttribute("aria-expanded","false"),this.isOpen=!1,this._content.removeEventListener("click",this.clickHandler)}expandPanel(){this.animateOpen(),this._toggle.classList.add("is-open"),this._content.classList.add("is-open"),this._toggle.setAttribute("aria-expanded","true"),this.isOpen=!0,this._content.addEventListener("click",this.clickHandler)}togglePanel(e){e.preventDefault(),this.isOpen?this.collapsePanel():this.expandPanel()}get links(){return Array.from(this._content.querySelectorAll("a"))}init(){this._toggle.setAttribute("aria-haspopup","menu"),this._toggle.setAttribute("aria-expanded","false"),this._toggle.addEventListener("click",e=>{this.togglePanel(e)},!1)}}const c=document.querySelectorAll('[data-attribute="dropdown"]');c!==null&&c.forEach(t=>{new u(t).init()});