const __vite__fileDeps=["assets/TiltUpdater-C17ctnz8.js","assets/index-l2lVw0KY.js","assets/index-BhzQ9JEJ.css","assets/ValueWithRandom-CTTgUoCC.js","assets/AnimationOptions-DGrnpGNB.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as i}from"./index-l2lVw0KY.js";async function d(t,a=!0){await t.addParticleUpdater("tilt",async r=>{const{TiltUpdater:e}=await i(()=>import("./TiltUpdater-C17ctnz8.js"),__vite__mapDeps([0,1,2,3,4]));return new e(r)},a)}export{d as loadTiltUpdater};
