"use strict";const e=Symbol.for("react-44ms/service/crush-kill-destroy"),r=Symbol.for("react-44ms/api/UseServiceSymbol"),t=()=>window[r],o=Symbol.for("react-44ms/api/YieldablePortSymbol"),l=e=>e?._yieldablePort===o,i=Symbol.for("react-44ms/api/RefSymbol"),a=e=>!!e&&e._refSymbol===i,s={element:{name:e=>e},RefPrimitive:{on:e=>({[i]:`${e}`,_refSymbol:i})}},c=Symbol.for("react-44ms/api/YieldableHandlerSymbol"),n=e=>e?._yieldableHandler===c,m=Symbol.for("react-44ms/api/YieldedValueSymbol"),u=Symbol.for("react-44ms/api/YieldedValueNotFoundSymbol"),d=e=>!!e&&e._yieldedValueSymbol===m,y=e=>d(e)?e[m]:u,b=e=>{const{useSubmit:r}=t();return r().submit(e)};b.NO_SUBMIT_FOUND_INVALID_FORM_REASON_KEY=Symbol.for("React44ms/FORM_SUBMIT_INVALID_NO_SUBMIT_KEY");const f=Symbol.for("react-44ms/api/TypedRefSymbol"),S=Symbol.for("react-44ms/api/TypedRefValueSymbol");var R=Object.freeze({__proto__:null,Convenience:s,RefSymbol:i,TypedRefSymbol:f,TypedRefValueSymbol:S,Yield:e=>{const{useReactingPower:r}=t();return r().service.Reactionary.Yield(e)},YieldAValueAtTheEnd:e=>({[m]:e,_yieldedValueSymbol:m}),YieldableHandler:e=>({[c]:e,_yieldableHandler:c}),YieldableHandlerSymbol:c,YieldablePort:e=>({[o]:e,_yieldablePort:o}),YieldablePortSymbol:o,YieldedValueNotFoundSymbol:u,YieldedValueSymbol:m,anyRefishToStringValue:e=>a(e)?e[i]:e||"",anyYieldableHandlerToValue:e=>n(e)?e[c]:"",extractYieldedValue:y,extractYieldingRef:e=>{let r,t,o=[],i=u;if(Array.isArray(e)){const s=(e=(e=(e=e.filter((e=>!n(e)||(t=e,!1)))).filter((e=>!l(e)||(r=e,!1)))).filter((e=>!d(e)||(i=y(e),!1))))[e.length-1];a(s)||(i=s,e=e.slice(0,e.length-1)),o=e}else e&&(o=[e]);return{yieldingCallstackAdditions:o,yieldablePort:r,yieldableHandler:t,yieldedValue:i}},fulfill:{name:e=>e},isThatARef:a,isThatATypedRef:e=>!!e&&e._typedRefSymbol===f,isThatAYieldableHandler:n,isThatAYieldablePort:l,isThatAYieldedValuePrimitive:d,setYourService:e=>{window[r]=e},submit:b,useCallback:(e,r)=>{const{useReactingPower:o}=t();return o().service.Reactionary.useCallback(e,r)},useEffect:(e,r,o)=>{const{useReactingPower:l}=t();return l().service.Reactionary.useEffect(e,r,o)},useFormRefs:e=>{const{useReactingPower:r}=t();return r().service.Reactionary.useFormRefs(e)},useMemo:(e,r)=>{const{useReactingPower:o}=t();return o().service.Reactionary.useMemo(e,r)},useRef:e=>{const{useReactingPower:r}=t();return r().service.Reactionary.useRef(e)},useService:t,useState:e=>{const{useReactingPower:r}=t();return r().service.Reactionary.useState(e)}});const p=Symbol.for("react-44ms/service/reacting-power"),v=Symbol.for("react-44ms/service/use-submit");var _;exports.WorkDescription=void 0,(_=exports.WorkDescription||(exports.WorkDescription={})).state="state",_.after_rendering="after_rendering",exports.PublicFormStateStack_CrushKillDestroy=e,exports.React44msReactingPowerSymbol=p,exports.React44msUseSubmitSymbol=v,exports.createElement=(e,r,t)=>e(r),exports.publicFormAccess=(e,r)=>{const t=r[R.RefSymbol].split(".");let o=e;return t.forEach((e=>{e&&e.length>0&&(o=o?.[e])})),o},exports.reactionaryTemplateMethod=e=>{const r=e.publicFormState(),t=e.refs(r),[o,l]=t,i=e.stateIndexing(),a=e.sourceOfTruth(i),{sourceOfTruth:s,sourceOfTruthEjectButton:c,sourceOfTruthFromEjectedCartridge:n}=a,[m,u,d,y,b]=e.serviceController(r,t),f=e.service(t,a,m),S=e.dom(m,r,f.ViewModel),[R,p]=e.logicalContext();let v={service:f,sourceOfTruth:s,sourceOfTruthEjectButton:c,sourceOfTruthFromEjectedCartridge:n,dom:S.explorer,logicalContext:R};e.reactingPower&&(v=e.reactingPower(v));const[_,g,T]=e.createElement(i,S.virtualDomController,p,v,a,f.ViewModel.iAmReact),[w,h]=e.events(S,v);let P={createElement:_,runElementEffects:g,destroyElement:T,eventHandler:w,submitHandler:h,explore:u,exploreFulfillment:d,employee:y,employMeAsAProducer:b,nowish:r.publicFormStateImmediate,formRefs:o,formRefsIsland:l};return e.serviceClient&&(P=e.serviceClient(P)),P},exports.useReactingPower=()=>window[p],exports.useSubmit=()=>window[v];
//# sourceMappingURL=index.cjs.js.map
