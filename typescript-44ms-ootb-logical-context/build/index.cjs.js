"use strict";const e=Symbol.for("react-44ms/api/UseServiceSymbol"),l=()=>window[e],t=Symbol.for("react-44ms/api/YieldablePortSymbol"),a=e=>e?._yieldablePort===t,o=Symbol.for("react-44ms/api/RefSymbol"),r=e=>!!e&&e._refSymbol===o,i={element:{name:e=>e},RefPrimitive:{on:e=>({[o]:`${e}`,_refSymbol:o})}},n=Symbol.for("react-44ms/api/YieldableHandlerSymbol"),c=e=>e?._yieldableHandler===n,s=Symbol.for("react-44ms/api/YieldedValueSymbol"),d=Symbol.for("react-44ms/api/YieldedValueNotFoundSymbol"),m=e=>!!e&&e._yieldedValueSymbol===s,u=e=>m(e)?e[s]:d,y=e=>{const{useSubmit:t}=l();return t().submit(e)};y.NO_SUBMIT_FOUND_INVALID_FORM_REASON_KEY=Symbol.for("React44ms/FORM_SUBMIT_INVALID_NO_SUBMIT_KEY");const b=Symbol.for("react-44ms/api/TypedRefSymbol"),S=Symbol.for("react-44ms/api/TypedRefValueSymbol");var f=Object.freeze({__proto__:null,Convenience:i,RefSymbol:o,TypedRefSymbol:b,TypedRefValueSymbol:S,Yield:e=>{const{useReactingPower:t}=l();return t().service.Reactionary.Yield(e)},YieldAValueAtTheEnd:e=>({[s]:e,_yieldedValueSymbol:s}),YieldableHandler:e=>({[n]:e,_yieldableHandler:n}),YieldableHandlerSymbol:n,YieldablePort:e=>({[t]:e,_yieldablePort:t}),YieldablePortSymbol:t,YieldedValueNotFoundSymbol:d,YieldedValueSymbol:s,anyRefishToStringValue:e=>r(e)?e[o]:e||"",anyYieldableHandlerToValue:e=>c(e)?e[n]:"",extractYieldedValue:u,extractYieldingRef:e=>{let l,t,o=[],i=d;if(Array.isArray(e)){const n=(e=(e=(e=e.filter((e=>!c(e)||(t=e,!1)))).filter((e=>!a(e)||(l=e,!1)))).filter((e=>!m(e)||(i=u(e),!1))))[e.length-1];r(n)||(i=n,e=e.slice(0,e.length-1)),o=e}else e&&(o=[e]);return{yieldingCallstackAdditions:o,yieldablePort:l,yieldableHandler:t,yieldedValue:i}},fulfill:{name:e=>e},isThatARef:r,isThatATypedRef:e=>!!e&&e._typedRefSymbol===b,isThatAYieldableHandler:c,isThatAYieldablePort:a,isThatAYieldedValuePrimitive:m,setYourService:l=>{window[e]=l},submit:y,useCallback:(e,t)=>{const{useReactingPower:a}=l();return a().service.Reactionary.useCallback(e,t)},useEffect:(e,t,a)=>{const{useReactingPower:o}=l();return o().service.Reactionary.useEffect(e,t,a)},useFormRefs:e=>{const{useReactingPower:t}=l();return t().service.Reactionary.useFormRefs(e)},useMemo:(e,t)=>{const{useReactingPower:a}=l();return a().service.Reactionary.useMemo(e,t)},useRef:e=>{const{useReactingPower:t}=l();return t().service.Reactionary.useRef(e)},useService:l,useState:e=>{const{useReactingPower:t}=l();return t().service.Reactionary.useState(e)}});exports.ootbLogicalContext=()=>{let e=[];const l=()=>{const l=e.length>0?e[0]:void 0;return l?(l.value=l.value+1,l.value):-1},t={begin_context:(t,a)=>{const o=l();e=[{value:-1},...e],t.callStack=[...a?[a]:[],...t.callStack];const r={[f.RefSymbol]:`__ImplicitReferenceToElement_${o}`,_refSymbol:f.RefSymbol};t.elementStack=[...a?[a]:[r],...t.elementStack]},end_context:e=>{e.elementStack=e.elementStack.slice(1),e.callStack=e.callStack.slice(1)}};return[{callStack:[],elementStack:[]},t]};
//# sourceMappingURL=index.cjs.js.map