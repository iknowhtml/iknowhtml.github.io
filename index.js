(()=>{var t={};t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var r=t.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var n=r.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})();t.p;window.addEventListener("mousemove",(({x:t,y:e})=>{const r=(t,e)=>5*(t/e-.5);document.body.style.transform=`perspective(${document.body.clientHeight}px) rotateX(${r(t,window.innerWidth)}deg) rotateY(${r(e,window.innerHeight)}deg)`}))})();