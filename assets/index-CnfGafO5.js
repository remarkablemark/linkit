const __vite__fileDeps=["assets/ColorUpdater-BO3vWFHm.js","assets/index-DSL_APK4.js","assets/index-BhzQ9JEJ.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as e}from"./index-DSL_APK4.js";async function i(r,o=!0){await r.addParticleUpdater("color",async t=>{const{ColorUpdater:a}=await e(()=>import("./ColorUpdater-BO3vWFHm.js"),__vite__mapDeps([0,1,2]));return new a(t)},o)}export{i as loadColorUpdater};
