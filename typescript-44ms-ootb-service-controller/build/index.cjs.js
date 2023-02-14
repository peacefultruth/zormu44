"use strict";const e=Symbol.for("react-44ms/api/UseServiceSymbol"),r=()=>window[e],t=Symbol.for("react-44ms/api/YieldablePortSymbol"),l=e=>e?._yieldablePort===t,i=Symbol.for("react-44ms/api/RefSymbol"),o=e=>!!e&&e._refSymbol===i,a={element:{name:e=>e},RefPrimitive:{on:e=>({[i]:`${e}`,_refSymbol:i})}},s=Symbol.for("react-44ms/api/YieldableHandlerSymbol"),c=e=>e?._yieldableHandler===s,n=Symbol.for("react-44ms/api/YieldedValueSymbol"),u=Symbol.for("react-44ms/api/YieldedValueNotFoundSymbol"),f=e=>!!e&&e._yieldedValueSymbol===n,b=e=>f(e)?e[n]:u,d=e=>{const{useSubmit:t}=r();return t().submit(e)};d.NO_SUBMIT_FOUND_INVALID_FORM_REASON_KEY=Symbol.for("React44ms/FORM_SUBMIT_INVALID_NO_SUBMIT_KEY");const m=Symbol.for("react-44ms/api/TypedRefSymbol"),y=Symbol.for("react-44ms/api/TypedRefValueSymbol");var h=Object.freeze({__proto__:null,Convenience:a,RefSymbol:i,TypedRefSymbol:m,TypedRefValueSymbol:y,Yield:e=>{const{useReactingPower:t}=r();return t().service.Reactionary.Yield(e)},YieldAValueAtTheEnd:e=>({[n]:e,_yieldedValueSymbol:n}),YieldableHandler:e=>({[s]:e,_yieldableHandler:s}),YieldableHandlerSymbol:s,YieldablePort:e=>({[t]:e,_yieldablePort:t}),YieldablePortSymbol:t,YieldedValueNotFoundSymbol:u,YieldedValueSymbol:n,anyRefishToStringValue:e=>o(e)?e[i]:e||"",anyYieldableHandlerToValue:e=>c(e)?e[s]:"",extractYieldedValue:b,extractYieldingRef:e=>{let r,t,i=[],a=u;if(Array.isArray(e)){const s=(e=(e=(e=e.filter((e=>!c(e)||(t=e,!1)))).filter((e=>!l(e)||(r=e,!1)))).filter((e=>!f(e)||(a=b(e),!1))))[e.length-1];o(s)||(a=s,e=e.slice(0,e.length-1)),i=e}else e&&(i=[e]);return{yieldingCallstackAdditions:i,yieldablePort:r,yieldableHandler:t,yieldedValue:a}},fulfill:{name:e=>e},isThatARef:o,isThatATypedRef:e=>!!e&&e._typedRefSymbol===m,isThatAYieldableHandler:c,isThatAYieldablePort:l,isThatAYieldedValuePrimitive:f,setYourService:r=>{window[e]=r},submit:d,useCallback:(e,t)=>{const{useReactingPower:l}=r();return l().service.Reactionary.useCallback(e,t)},useEffect:(e,t,l)=>{const{useReactingPower:i}=r();return i().service.Reactionary.useEffect(e,t,l)},useFormRefs:e=>{const{useReactingPower:t}=r();return t().service.Reactionary.useFormRefs(e)},useMemo:(e,t)=>{const{useReactingPower:l}=r();return l().service.Reactionary.useMemo(e,t)},useRef:e=>{const{useReactingPower:t}=r();return t().service.Reactionary.useRef(e)},useService:r,useState:e=>{const{useReactingPower:t}=r();return t().service.Reactionary.useState(e)}});const S=Symbol.for("react-44ms/api/UseServiceSymbol"),R=()=>window[S],_=Symbol.for("react-44ms/api/YieldablePortSymbol"),A=e=>e?._yieldablePort===_,M=Symbol.for("react-44ms/api/RefSymbol"),w=e=>!!e&&e._refSymbol===M,p={element:{name:e=>e},RefPrimitive:{on:e=>({[M]:`${e}`,_refSymbol:M})}},Y=Symbol.for("react-44ms/api/YieldableHandlerSymbol"),v=e=>e?._yieldableHandler===Y,g=Symbol.for("react-44ms/api/YieldedValueSymbol"),O=Symbol.for("react-44ms/api/YieldedValueNotFoundSymbol"),P=e=>!!e&&e._yieldedValueSymbol===g,T=e=>P(e)?e[g]:O,V=e=>{const{useSubmit:r}=R();return r().submit(e)};V.NO_SUBMIT_FOUND_INVALID_FORM_REASON_KEY=Symbol.for("React44ms/FORM_SUBMIT_INVALID_NO_SUBMIT_KEY");const E=Symbol.for("react-44ms/api/TypedRefSymbol"),I=Symbol.for("react-44ms/api/TypedRefValueSymbol");var F=Object.freeze({__proto__:null,Convenience:p,RefSymbol:M,TypedRefSymbol:E,TypedRefValueSymbol:I,Yield:e=>{const{useReactingPower:r}=R();return r().service.Reactionary.Yield(e)},YieldAValueAtTheEnd:e=>({[g]:e,_yieldedValueSymbol:g}),YieldableHandler:e=>({[Y]:e,_yieldableHandler:Y}),YieldableHandlerSymbol:Y,YieldablePort:e=>({[_]:e,_yieldablePort:_}),YieldablePortSymbol:_,YieldedValueNotFoundSymbol:O,YieldedValueSymbol:g,anyRefishToStringValue:e=>w(e)?e[M]:e||"",anyYieldableHandlerToValue:e=>v(e)?e[Y]:"",extractYieldedValue:T,extractYieldingRef:e=>{let r,t,l=[],i=O;if(Array.isArray(e)){const o=(e=(e=(e=e.filter((e=>!v(e)||(t=e,!1)))).filter((e=>!A(e)||(r=e,!1)))).filter((e=>!P(e)||(i=T(e),!1))))[e.length-1];w(o)||(i=o,e=e.slice(0,e.length-1)),l=e}else e&&(l=[e]);return{yieldingCallstackAdditions:l,yieldablePort:r,yieldableHandler:t,yieldedValue:i}},fulfill:{name:e=>e},isThatARef:w,isThatATypedRef:e=>!!e&&e._typedRefSymbol===E,isThatAYieldableHandler:v,isThatAYieldablePort:A,isThatAYieldedValuePrimitive:P,setYourService:e=>{window[S]=e},submit:V,useCallback:(e,r)=>{const{useReactingPower:t}=R();return t().service.Reactionary.useCallback(e,r)},useEffect:(e,r,t)=>{const{useReactingPower:l}=R();return l().service.Reactionary.useEffect(e,r,t)},useFormRefs:e=>{const{useReactingPower:r}=R();return r().service.Reactionary.useFormRefs(e)},useMemo:(e,r)=>{const{useReactingPower:t}=R();return t().service.Reactionary.useMemo(e,r)},useRef:e=>{const{useReactingPower:r}=R();return r().service.Reactionary.useRef(e)},useService:R,useState:e=>{const{useReactingPower:r}=R();return r().service.Reactionary.useState(e)}});let H;!function(e){e.state="state",e.after_rendering="after_rendering"}(H||(H={}));exports.ootbServiceController=(e,r)=>{const[t]=r;let l=[];let i=[];let o=[];let a=[];const s=r=>{let l=[];const i=r[h.RefSymbol].split(".");o.forEach((e=>{const{whereAmI:r}=e,o=(r||t)[h.RefSymbol].split(".");let a=0,s=!1;if(i.forEach((e=>{if(s)return;const r=o.shift(),t=e.length<1,l=(r?.length||0)<1;if(t||l){if(!(t&&l))return void(s=!0)}else if(e!==r)return void(s=!0);a+=1})),a>0){const r={subscriber:e,howMuchOfAMatch:a};l=[...l,r]}}));const a=l.sort(((e,r)=>r.howMuchOfAMatch-e.howMuchOfAMatch)),s=a[0];if(!s)return;a.filter((e=>e.howMuchOfAMatch===s.howMuchOfAMatch)).forEach((r=>{const l=((e,r)=>{const t=r[F.RefSymbol].split(".");let l=e;return t.forEach((e=>{e&&e.length>0&&(l=l?.[e])})),l})(e.publicFormStateImmediate(),r.subscriber.whereAmI||t);r.subscriber.subscriber(l)}))},c=r=>{let l=[];const i=r[h.RefSymbol].split(".");a.forEach((e=>{const{whereAmI:r}=e,o=(r||t)[h.RefSymbol].split(".");let a=0,s=!1;if(i.forEach((e=>{if(s)return;const r=o.shift(),t=e.length<1,l=(r?.length||0)<1;if(t||l){if(!(t&&l))return void(s=!0)}else if(e!==r)return void(s=!0);a+=1})),a>0){const r={subscriber:e,howMuchOfAMatch:a};l=[...l,r]}}));const o=l.sort(((e,r)=>r.howMuchOfAMatch-e.howMuchOfAMatch)),s=o[0];if(!s)return;o.filter((e=>e.howMuchOfAMatch===s.howMuchOfAMatch)).forEach((r=>{const l=(r=>{const t=r[h.RefSymbol].split(".");let l=e.publicFulfillmentImmediate();return t.forEach((e=>{e&&e.length>0&&(l=l?.[e])})),l})(r.subscriber.whereAmI||t);r.subscriber.subscriber(l)}))},n={work_required_here:e=>{(e=>{let r=[];const i=e[h.RefSymbol].split(".");l.forEach((e=>{const{whereAmI:l}=e,o=(l||t)[h.RefSymbol].split(".");let a=0,s=!1;if(i.forEach((e=>{if(s)return;const r=o.shift();if(""===e||""===r){if(""!==e||""!==r)return void(s=!0)}else if(e!==r)return void(s=!0);a+=1})),a>0){const t={subscriber:e,howMuchOfAMatch:a};r=[...r,t]}}));const o=r.sort(((e,r)=>r.howMuchOfAMatch-e.howMuchOfAMatch)),a=o[0];if(!a)return;o.filter((e=>e.howMuchOfAMatch===a.howMuchOfAMatch)).forEach((e=>{e.subscriber.subscriber()}))})(e),(e=>{let r=[];const l=e[h.RefSymbol].split(".");i.forEach((e=>{const{whereAmI:i}=e,o=(i||t)[h.RefSymbol].split(".");let a=0,s=!1;if(l.forEach((e=>{if(s)return;const r=o.shift();if(""===e||""===r){if(""!==e||""!==r)return void(s=!0)}else if(e!==r)return void(s=!0);a+=1})),a>0){const t={subscriber:e,howMuchOfAMatch:a};r=[...r,t]}}));const o=r.sort(((e,r)=>r.howMuchOfAMatch-e.howMuchOfAMatch)),a=o[0];if(!a)return;o.filter((e=>e.howMuchOfAMatch===a.howMuchOfAMatch)).forEach((e=>{e.subscriber.subscriber()}))})(e)},public_form_state_ready:s,public_form_fulfillment_ready:c};return[n,(e,r)=>{const l={subscriber:e,whereAmI:r};o=[...o,l],s(r||t);const i={unsubscribing:()=>{o=o.filter((e=>e!==l))}};return i},(e,r)=>{const l={subscriber:e,whereAmI:r};a=[...a,l],c(r||t);const i={unsubscribing:()=>{a=a.filter((e=>e!==l))}};return i},(e,r)=>{const t={subscriber:e,whereAmI:r};l=[...l,t];const i={unsubscribing:()=>{l=l.filter((e=>e!==t))}};return i},(e,r)=>{const t={subscriber:e,whereAmI:r};i=[...i,t];const l={unsubscribing:()=>{i=i.filter((e=>e!==t))}};return l}]};
//# sourceMappingURL=index.cjs.js.map
