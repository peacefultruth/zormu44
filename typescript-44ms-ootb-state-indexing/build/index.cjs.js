"use strict";exports.ootbStateIndexingStack=()=>{let e=[];return{beginStateIndexesContext:()=>{e=[{},...e]},endStateIndexesContext:()=>{e=e.slice(1)},stateCounter:t=>{const n=e[0];return void 0!==n[t.valueOf()]&&null!==n[t.valueOf()]||(n[t.valueOf()]=-1),n[t.valueOf()]=n[t.valueOf()]+1,n[t.valueOf()]}}};
//# sourceMappingURL=index.cjs.js.map
