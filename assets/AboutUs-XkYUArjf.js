import{r as s,j as e}from"./index-t1Ch5JYo.js";import{u as j}from"./keen-slider.min-vhGx28jr.js";function b(){const[t,o]=s.useState(0),[n,d]=s.useState(!1),[l,c]=s.useState(window.innerWidth<768),[u,i]=j({initial:0,slideChanged(a){o(a.track.details.rel)},created(){d(!0)},loop:!0,breakpoints:{"(min-width: 768px)":{disabled:!0}}});return s.useEffect(()=>{const a=()=>c(window.innerWidth<768);return window.addEventListener("resize",a),()=>window.removeEventListener("resize",a)},[]),e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"about-navigation-wrapper",children:e.jsxs("div",{ref:u,className:"keen-slider grid",children:[e.jsxs("div",{className:"keen-slider__slide about-number-slide1 about-number-slide1",children:[e.jsxs("p",{className:"about-card-title",children:["Kreatywne podejście i ",e.jsx("br",{}),"dbałość o szczegóły"]}),e.jsx("p",{className:"about-card-text",children:"Specjaliści zapewniają doradztwo i kreatywność przy wyborze dekoracji balonowych, z dbałością o szczegóły"})]}),e.jsxs("div",{className:"keen-slider__slide about-number-slide1 about-number-slide2",children:[e.jsxs("p",{className:"about-card-title",children:["Materiały przyjazne ",e.jsx("br",{}),"dla środowiska"]}),e.jsx("p",{className:"about-card-text",children:"Wykorzystywane są materiały najwyższej jakości, w tym biodegradowalne materiały balonowe, aby pozostawić jak najmniejszy ślad na środowisku."})]}),e.jsxs("div",{className:"keen-slider__slide about-number-slide1 about-number-slide3",children:[e.jsxs("p",{className:"about-card-title",children:["Szeroka gama kolorów ",e.jsx("br",{}),"do personalizacji"]}),e.jsx("p",{className:"about-card-text",children:"Balony i dekoracje są wybierane z szerokiej gamy kolorów, co pozwala spersonalizować wystrój na każdą okazję."})]}),e.jsxs("div",{className:"keen-slider__slide about-number-slide1 about-number-slide4",children:[e.jsxs("p",{className:"about-card-title",children:["Gwarancja dostawy ",e.jsx("br",{})," i montażu"]}),e.jsx("p",{className:"about-card-text",children:"Firma gwarantuje nie tylko wysokiej jakości dostawę zamówień, ale także ich montaż, zapewniając klientom kompleksową obsługę."})]})]})}),n&&i.current&&l&&e.jsx("div",{className:"about-dots",children:[...Array(i.current.track.details.slides.length).keys()].map(a=>e.jsx("button",{onClick:()=>{var r;(r=i.current)==null||r.moveToIdx(a)},className:"about-dot"+(t===a?" active":"")},a))})]})}function z(){return e.jsxs("section",{className:"about-section",id:"about-section",children:[e.jsxs("h2",{className:"section-title",children:["Kreatywny zespół ",e.jsx("br",{}),"dekoratorów"]}),e.jsx("p",{className:"about-text",children:"Młodzi i energiczni, rozwijający działalność w zakresie tworzenia dekoracji na imprezy i wydarzenia"}),e.jsx(b,{})]})}export{z as default};