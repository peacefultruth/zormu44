"use strict";const e=Symbol.for("react-44ms/api/UseServiceSymbol");let r;(r=>{const{useSubmit:t}=window[e];return t().submit(r)}).NO_SUBMIT_FOUND_INVALID_FORM_REASON_KEY=Symbol.for("React44ms/FORM_SUBMIT_INVALID_NO_SUBMIT_KEY"),function(e){e.state="state",e.after_rendering="after_rendering"}(r||(r={}));const t=Symbol.for("react-44ms/api/UseServiceSymbol"),o=()=>window[t],l=Symbol.for("react-44ms/api/YieldablePortSymbol"),s=e=>e?._yieldablePort===l,a=Symbol.for("react-44ms/api/RefSymbol"),i=e=>!!e&&e._refSymbol===a,n={element:{name:e=>e},RefPrimitive:{on:e=>({[a]:`${e}`,_refSymbol:a})}},c=Symbol.for("react-44ms/api/YieldableHandlerSymbol"),u=e=>e?._yieldableHandler===c,m=Symbol.for("react-44ms/api/YieldedValueSymbol"),d=Symbol.for("react-44ms/api/YieldedValueNotFoundSymbol"),f=e=>!!e&&e._yieldedValueSymbol===m,y=e=>f(e)?e[m]:d,b=e=>{const{useSubmit:r}=o();return r().submit(e)};b.NO_SUBMIT_FOUND_INVALID_FORM_REASON_KEY=Symbol.for("React44ms/FORM_SUBMIT_INVALID_NO_SUBMIT_KEY");const S=Symbol.for("react-44ms/api/TypedRefSymbol"),R=Symbol.for("react-44ms/api/TypedRefValueSymbol");var _=Object.freeze({__proto__:null,Convenience:n,RefSymbol:a,TypedRefSymbol:S,TypedRefValueSymbol:R,Yield:e=>{const{useReactingPower:r}=o();return r().service.Reactionary.Yield(e)},YieldAValueAtTheEnd:e=>({[m]:e,_yieldedValueSymbol:m}),YieldableHandler:e=>({[c]:e,_yieldableHandler:c}),YieldableHandlerSymbol:c,YieldablePort:e=>({[l]:e,_yieldablePort:l}),YieldablePortSymbol:l,YieldedValueNotFoundSymbol:d,YieldedValueSymbol:m,anyRefishToStringValue:e=>i(e)?e[a]:e||"",anyYieldableHandlerToValue:e=>u(e)?e[c]:"",extractYieldedValue:y,extractYieldingRef:e=>{let r,t,o=[],l=d;if(Array.isArray(e)){const a=(e=(e=(e=e.filter((e=>!u(e)||(t=e,!1)))).filter((e=>!s(e)||(r=e,!1)))).filter((e=>!f(e)||(l=y(e),!1))))[e.length-1];i(a)||(l=a,e=e.slice(0,e.length-1)),o=e}else e&&(o=[e]);return{yieldingCallstackAdditions:o,yieldablePort:r,yieldableHandler:t,yieldedValue:l}},fulfill:{name:e=>e},isThatARef:i,isThatATypedRef:e=>!!e&&e._typedRefSymbol===S,isThatAYieldableHandler:u,isThatAYieldablePort:s,isThatAYieldedValuePrimitive:f,setYourService:e=>{window[t]=e},submit:b,useCallback:(e,r)=>{const{useReactingPower:t}=o();return t().service.Reactionary.useCallback(e,r)},useEffect:(e,r,t)=>{const{useReactingPower:l}=o();return l().service.Reactionary.useEffect(e,r,t)},useFormRefs:e=>{const{useReactingPower:r}=o();return r().service.Reactionary.useFormRefs(e)},useMemo:(e,r)=>{const{useReactingPower:t}=o();return t().service.Reactionary.useMemo(e,r)},useRef:e=>{const{useReactingPower:r}=o();return r().service.Reactionary.useRef(e)},useService:o,useState:e=>{const{useReactingPower:r}=o();return r().service.Reactionary.useState(e)}});const h=!0,T=!1;var p=Object.freeze({__proto__:null,NoTheDependenciesAreNotTheSame:T,YesTheDependenciesAreTheSame:h,dependenciesVsDependencies:(e,r)=>{if(!e&&!r)return h;if(!e&&r)return T;if(e&&!r)return T;if(e&&r){if(e.length!=r.length)return T;if(e.some(((e,t)=>!Object.is(e,r[t]))))return T}return h}});const v=Symbol.for("react-44ms/service/reacting-power"),E=()=>window[v];let O;!function(e){e.state="state",e.after_rendering="after_rendering"}(O||(O={}));const g=Symbol.for("react-44ms/service/ootb-t44ms.Api.Reactionary/useState_sourceOfTruth_symbol"),Y=Symbol.for("react-44ms/service/ootb-t44ms.Api.Reactionary/useMemo_sourceOfTruth_symbol"),w=Symbol.for("react-44ms/service/ootb-reactionary/useEffect_sourceOfTruth_symbol"),A=Symbol.for("react-44ms/service/ootb-t44ms.Api.Reactionary/useCallback_sourceOfTruth_symbol"),V=Symbol.for("react-44ms/service/ootb-t44ms.Api.Reactionary/useRef_sourceOfTruth_symbol");exports.ootbService=(e,t,{work_required_here:o})=>{const[l,s]=e;let a={},i=!1;let n=[],c=[];const u={add_work:(e,t,l=r.state)=>{switch(l){case r.state:n=[...n,t],o(e);break;case r.after_rendering:c=[...c,t]}},"what!?":()=>a,"HEY!LİSTEN!":()=>{i=!0},formRefs:l,formRefsIsland:s,sourceOfTruthOnCrushKillDestroy:t.sourceOfTruthOnCrushKillDestroy},m=(e=>r=>e.formRefsIsland(r))(u),d=(e=>r=>{const t=E(),o=t.sourceOfTruthEjectButton(e,g),l=t.sourceOfTruthFromEjectedCartridge(e,o),s=r=>{l.value=r;const t={[_.RefSymbol]:`${o.callstack.join(".")}`,_refSymbol:_.RefSymbol};e["HEY!LİSTEN!"](t)};l.fresh&&s(r);const a={[_.RefSymbol]:`${o.callstack.join(".")}`,_refSymbol:_.RefSymbol};return[l.value,r=>{e.add_work(a,(()=>{s(r)}))}]})(u),f=(e=>r=>{const t=E(),o=t.sourceOfTruthEjectButton(e,V),l=t.sourceOfTruthFromEjectedCartridge(e,o);return l.fresh&&(l.value=r),new Proxy({},{get:(e,r)=>{if("current"===r)return l.value},set:(e,r,t)=>("current"===r&&(l.value=t),!0)})})(u),y=(e=>(r,t)=>{const o=E(),l=o.sourceOfTruthEjectButton(e,Y),s=o.sourceOfTruthFromEjectedCartridge(e,l),a=p.dependenciesVsDependencies(s.value?.memoizedDependencies,t);if(s.fresh||a===p.NoTheDependenciesAreNotTheSame){const o={memoizedValue:r(),memoizedDependencies:t};s.value=o;const a={[_.RefSymbol]:`${l.callstack.join(".")}`,_refSymbol:_.RefSymbol};e["HEY!LİSTEN!"](a)}return s.value.memoizedValue})(u),b=(e=>(r,t)=>{const o=E(),l=o.sourceOfTruthEjectButton(e,A),s=o.sourceOfTruthFromEjectedCartridge(e,l),a=p.dependenciesVsDependencies(s.value?.memoizedDependencies,t);if(s.fresh||a===p.NoTheDependenciesAreNotTheSame){const a={memoizedValue:r,memoizedProxy:new Proxy(r,{apply:function(r,t,s){const a=o.sourceOfTruthFromEjectedCartridge(e,l).value?.memoizedValue;return a?.apply(null,s)}}),memoizedDependencies:t};s.value=a;const i={[_.RefSymbol]:`${l.callstack.join(".")}`,_refSymbol:_.RefSymbol};e["HEY!LİSTEN!"](i)}return s.value?.memoizedProxy})(u),S=(e=>(e.sourceOfTruthOnCrushKillDestroy(w,(e=>{e.forEach((e=>{e.afterlife?.()}))})),(r,t,o)=>{const l=E(),s=l.sourceOfTruthEjectButton(e,w),a=l.sourceOfTruthFromEjectedCartridge(e,s),i=p.dependenciesVsDependencies(a.value?.memoizedDependencies,t);if(a.fresh||i===p.NoTheDependenciesAreNotTheSame){const i=a.value?.afterlife,n=()=>{if(i?.(),o?.debounce){const i=setTimeout((()=>{const t=r();if(t){const r=l.sourceOfTruthFromEjectedCartridge(e,s).value;r&&(r.afterlife=t)}else{const r=l.sourceOfTruthFromEjectedCartridge(e,s).value;r&&delete r.afterlife}}),o.debounce),n={memoizedDependencies:t,afterlife:()=>{clearTimeout(i)}};a.value=n}else{const e=r(),o={memoizedDependencies:t};e&&(o.afterlife=e),a.value=o}},c={[_.RefSymbol]:`${s.callstack.join(".")}`,_refSymbol:_.RefSymbol};e.add_work(c,n,O.after_rendering)}}))(u),R=(e=>r=>{const t=E(),o=_.extractYieldingRef(r),l={[_.RefSymbol]:`${o.yieldingCallstackAdditions.map((e=>e[_.RefSymbol])).join(".")}`,_refSymbol:_.RefSymbol};e.add_work(l,(()=>{t.dom(e,o.yieldingCallstackAdditions)?.handleEvent(o)}),O.state)})(u);return{Reactionary:{useFormRefs:m,useState:d,useRef:f,useMemo:y,useCallback:b,useEffect:S,Yield:R},ViewModel:{work_reconcile_state:()=>{const e=n;n=[],e.forEach((e=>{e()}))},work_after_rendering:()=>{const e=c;c=[],e.forEach((e=>{e()}))},nowish:()=>(i&&(a={...a}),a),"NEVEERRRRRRRRRRRRRRR!":a,iAmReact:u}}};
//# sourceMappingURL=index.cjs.js.map