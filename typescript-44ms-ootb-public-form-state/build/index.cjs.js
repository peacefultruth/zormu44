"use strict";const e=Symbol.for("react-44ms/api/UseServiceSymbol"),l=()=>window[e],t=Symbol.for("react-44ms/api/YieldablePortSymbol"),i=e=>e?._yieldablePort===t,a=Symbol.for("react-44ms/api/RefSymbol"),o=e=>!!e&&e._refSymbol===a,r={element:{name:e=>e},RefPrimitive:{on:e=>({[a]:`${e}`,_refSymbol:a})}},n=Symbol.for("react-44ms/api/YieldableHandlerSymbol"),s=e=>e?._yieldableHandler===n,c=Symbol.for("react-44ms/api/YieldedValueSymbol"),u=Symbol.for("react-44ms/api/YieldedValueNotFoundSymbol"),d=e=>!!e&&e._yieldedValueSymbol===c,m=e=>d(e)?e[c]:u,y=e=>{const{useSubmit:t}=l();return t().submit(e)};y.NO_SUBMIT_FOUND_INVALID_FORM_REASON_KEY=Symbol.for("React44ms/FORM_SUBMIT_INVALID_NO_SUBMIT_KEY");const b=Symbol.for("react-44ms/api/TypedRefSymbol"),f=Symbol.for("react-44ms/api/TypedRefValueSymbol");var S=Object.freeze({__proto__:null,Convenience:r,RefSymbol:a,TypedRefSymbol:b,TypedRefValueSymbol:f,Yield:e=>{const{useReactingPower:t}=l();return t().service.Reactionary.Yield(e)},YieldAValueAtTheEnd:e=>({[c]:e,_yieldedValueSymbol:c}),YieldableHandler:e=>({[n]:e,_yieldableHandler:n}),YieldableHandlerSymbol:n,YieldablePort:e=>({[t]:e,_yieldablePort:t}),YieldablePortSymbol:t,YieldedValueNotFoundSymbol:u,YieldedValueSymbol:c,anyRefishToStringValue:e=>o(e)?e[a]:e||"",anyYieldableHandlerToValue:e=>s(e)?e[n]:"",extractYieldedValue:m,extractYieldingRef:e=>{let l,t,a=[],r=u;if(Array.isArray(e)){const n=(e=(e=(e=e.filter((e=>!s(e)||(t=e,!1)))).filter((e=>!i(e)||(l=e,!1)))).filter((e=>!d(e)||(r=m(e),!1))))[e.length-1];o(n)||(r=n,e=e.slice(0,e.length-1)),a=e}else e&&(a=[e]);return{yieldingCallstackAdditions:a,yieldablePort:l,yieldableHandler:t,yieldedValue:r}},fulfill:{name:e=>e},isThatARef:o,isThatATypedRef:e=>!!e&&e._typedRefSymbol===b,isThatAYieldableHandler:s,isThatAYieldablePort:i,isThatAYieldedValuePrimitive:d,setYourService:l=>{window[e]=l},submit:y,useCallback:(e,t)=>{const{useReactingPower:i}=l();return i().service.Reactionary.useCallback(e,t)},useEffect:(e,t,i)=>{const{useReactingPower:a}=l();return a().service.Reactionary.useEffect(e,t,i)},useFormRefs:e=>{const{useReactingPower:t}=l();return t().service.Reactionary.useFormRefs(e)},useMemo:(e,t)=>{const{useReactingPower:i}=l();return i().service.Reactionary.useMemo(e,t)},useRef:e=>{const{useReactingPower:t}=l();return t().service.Reactionary.useRef(e)},useService:l,useState:e=>{const{useReactingPower:t}=l();return t().service.Reactionary.useState(e)}});const R=Symbol.for("react-44ms/service/crush-kill-destroy"),_=Symbol.for("react-44ms/api/UseServiceSymbol");let p;(e=>{const{useSubmit:l}=window[_];return l().submit(e)}).NO_SUBMIT_FOUND_INVALID_FORM_REASON_KEY=Symbol.for("React44ms/FORM_SUBMIT_INVALID_NO_SUBMIT_KEY"),function(e){e.state="state",e.after_rendering="after_rendering"}(p||(p={}));exports.ootbPublicFormState=()=>{let e=null,l=null;return{publicFormStateImmediate:()=>e,siphonPublicFinal:(l,t,i)=>{e||(e={});const a=l.map((e=>S.anyRefishToStringValue(e).split("."))).flat();let o=e,r=null,n=null;const s=a.length-1;a.forEach(((l,a)=>{if(a===s)i===R||(i?l.length>0?(o[l]||(o[l]={}),o[l][i]=t):r?r[n][i]=t:e[i]=t:l.length>0?"object"==typeof o[l]?o[l]={...o[l],...t}:o[l]=t:r?r[n]={...o,...t}:e={...e,...t});else if(l.length>0){if(!o[l]){const e={};o[l]=e}}else r&&(r[n]={});l.length>0?(r=o,n=l,o=o[l]):o=e})),i&&t===R&&(r?delete r[n][i]:e=null),i===R&&(r?delete r[n]:e=null)},siphonPublicFulfillmentFinal:(t,i,a)=>{l||(l={});const o=t.map((e=>S.anyRefishToStringValue(e).split("."))).flat();let r=l,n=null,s=null;const c=o.length-1;o.forEach(((t,o)=>{if(o===c)a===R||(a?t.length>0?(r[t]||(r[t]={}),r[t][a]=i):n?n[s][a]=i:e[a]=i:t.length>0?"object"==typeof r[t]?r[t]={...r[t],...i}:r[t]=i:n?n[s]={...r,...i}:e={...e,...i});else if(t.length>0){if(!r[t]){const e={};r[t]=e}}else n&&(n[s]={});t.length>0?(n=r,s=t,r=r[t]):r=l})),a&&i===R&&(n?delete n[s][a]:l=null),a===R&&(n?delete n[s]:l=null)},publicFulfillmentImmediate:()=>l}};
//# sourceMappingURL=index.cjs.js.map