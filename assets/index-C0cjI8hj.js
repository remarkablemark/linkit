const __vite__fileDeps=["assets/ColorUpdater-DBPYnk0Y.js","assets/index-l2lVw0KY.js","assets/index-BhzQ9JEJ.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as e}from"./index-l2lVw0KY.js";async function i(r,o=!0){await r.addParticleUpdater("color",async t=>{const{ColorUpdater:a}=await e(()=>import("./ColorUpdater-DBPYnk0Y.js"),__vite__mapDeps([0,1,2]));return new a(t)},o)}export{i as loadColorUpdater};
