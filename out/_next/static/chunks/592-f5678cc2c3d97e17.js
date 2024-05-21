"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[592],{5226:function(e,r,n){n.d(r,{Z:function(){return a}});var i=n(7437);n(2265);var t=n(6013);function a(e){let{title:r,icon:n,value:a,unit:s,subtitle:l}=e;return(0,i.jsxs)(t.Zb,{className:"flex flex-col justify-between bg-accent border-zinc-700/50",children:[(0,i.jsx)(t.Ol,{children:(0,i.jsx)(t.ll,{children:(0,i.jsxs)("div",{className:"flex items-center justify-between",children:[(0,i.jsx)("h3",{className:"text-2xl font-semibold tracking-tight scroll-m-20",children:r}),n||" "]})})}),(0,i.jsx)(t.aY,{className:"pb-3",children:(0,i.jsxs)("h4",{className:"text-3xl font-semibold tracking-tight scroll-m-20",children:[a,(0,i.jsx)("sup",{className:"font-normal ms-2",children:s})]})}),(0,i.jsx)(t.eW,{children:(0,i.jsx)("p",{className:"text-sm text-muted-foreground",children:l})})]})}},5444:function(e,r,n){n.d(r,{F:function(){return a},W:function(){return s}});var i=n(7437),t=n(7440);function a(e){let{children:r,className:n}=e;return(0,i.jsx)("div",{className:(0,t.cn)(n,"px-5 m-auto grid max-w-screen-md gap-4 lg:max-w-screen-lg md:grid-cols-2 md:px-0"),children:r})}function s(e){let{children:r,className:n}=e;return(0,i.jsx)("div",{className:(0,t.cn)(n,"max-w-screen-md p-4 bg-accent m-auto mt-10 border rounded-lg border-zinc-700/50 lg:max-w-screen-lg"),children:r})}n(2265)},2387:function(e,r,n){n.d(r,{Z:function(){return o}});var i=n(7437),t=n(5444),a=n(5273),s=n(2265),l=n(3691),u=n(7818);let m=(0,u.default)(()=>Promise.all([n.e(562),n.e(109)]).then(n.bind(n,1407)),{loadableGenerated:{webpack:()=>[1407]},ssr:!1}),d=(0,u.default)(()=>Promise.all([n.e(562),n.e(382)]).then(n.bind(n,9382)),{loadableGenerated:{webpack:()=>[9382]},ssr:!1});function o(e){let{graphs:r,days:n,title:u,inViewLoad:o=!0,lessX:c}=e,f=(0,s.useRef)(null),x=(0,l.JC)(f,{once:!0});return(0,i.jsx)(t.W,{className:"order-1 w-full col-span-3 lg:h-full lg:mt-0",children:(0,i.jsxs)(a.mQ,{defaultValue:"temperature",className:"min-h-[430px]",children:[(0,i.jsx)("div",{className:"flex items-center justify-between mb-4",children:(0,i.jsxs)("h4",{className:"text-2xl font-semibold",ref:f,children:["Grafici della ",u]})}),(0,i.jsxs)(a.dr,{className:"grid md:grid-cols-4 grid-cols-2 mb-8 h-20 md:h-10 w-[100%] *:text-xs md:text-sm dark:bg-background/20 bg-foreground/5",children:[(0,i.jsx)(a.SP,{value:"temperature",children:"Temperatura"}),(0,i.jsx)(a.SP,{value:"humidity",children:"Umidit\xe0"}),(0,i.jsx)(a.SP,{value:"pressure",children:"Pressione"}),(0,i.jsx)(a.SP,{value:"rain",children:"Precipitazioni"})]}),(0,i.jsxs)(a.nU,{value:"temperature",children:[" ",(0,i.jsx)(m,{IsInView:!o||x,name:"temperatura",series:r.temp,lessX:c,days:n,unit:"\xb0C"})]}),(0,i.jsxs)(a.nU,{value:"humidity",children:[" ",(0,i.jsx)(m,{IsInView:!o||x,name:"umidit\xe0",series:r.humidity,lessX:c,days:n,unit:"%"})]}),(0,i.jsxs)(a.nU,{value:"pressure",children:[" ",(0,i.jsx)(m,{IsInView:!o||x,name:"pressione",series:r.pressure,lessX:c,days:n,unit:"hPa"})]}),(0,i.jsxs)(a.nU,{value:"rain",children:[" ",(0,i.jsx)(d,{IsInView:!0,name:"precipitazioni",data:r.rain,days:n,unit:"mm",lessX:c})]})]})})}},9702:function(e,r,n){n.d(r,{Z:function(){return m}});var i=n(7437),t=n(5444),a=n(5273),s=n(2265),l=n(3691);let u=(0,n(7818).default)(()=>Promise.all([n.e(562),n.e(382)]).then(n.bind(n,9382)),{loadableGenerated:{webpack:()=>[9382]},ssr:!1});function m(e){let{graphs:r,days:n,title:m,inViewLoad:d=!0,lessX:o}=e,c=(0,s.useRef)(null),f=(0,l.JC)(c,{once:!0});return(0,i.jsx)(t.W,{className:"order-1 w-full col-span-3 lg:h-full lg:mt-0",children:(0,i.jsxs)(a.mQ,{defaultValue:"temperature",children:[(0,i.jsx)("div",{className:"flex items-center justify-between mb-4",children:(0,i.jsxs)("h4",{className:"text-2xl font-semibold",ref:c,children:["Grafici della ",m]})}),(0,i.jsxs)(a.dr,{className:"grid md:grid-cols-4 grid-cols-2 mb-8 h-20 md:h-10 w-[100%] *:text-xs md:text-sm dark:bg-background/20 bg-foreground/5",children:[(0,i.jsx)(a.SP,{value:"temperature",children:"Temperatura"}),(0,i.jsx)(a.SP,{value:"humidity",children:"Umidit\xe0"}),(0,i.jsx)(a.SP,{value:"pressure",children:"Pressione"}),(0,i.jsx)(a.SP,{value:"rain",children:"Precipitazioni"})]}),(0,i.jsxs)(a.nU,{value:"temperature",children:[" ",(0,i.jsx)(u,{IsInView:!d||f,name:"temperatura",data:r.temp,lessX:o,days:n,unit:"\xb0C"})]}),(0,i.jsxs)(a.nU,{value:"humidity",children:[" ",(0,i.jsx)(u,{IsInView:!d||f,name:"umidit\xe0",data:r.humidity,days:n,unit:"%",lessX:o})]}),(0,i.jsxs)(a.nU,{value:"pressure",children:[" ",(0,i.jsx)(u,{IsInView:!d||f,name:"pressione",data:r.pressure,days:n,unit:"hPa",lessX:o})]}),(0,i.jsxs)(a.nU,{value:"rain",children:[" ",(0,i.jsx)(u,{IsInView:!d||f,name:"precipitazioni",data:r.rain,days:n,unit:"mm",lessX:o})]})]})})}},7171:function(e,r,n){var i=n(7437),t=n(2265),a=n(2738),s=n(5444);let l=(0,t.forwardRef)((e,r)=>{let{}=e;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{className:"px-5 m-auto mb-8 grid max-w-screen-md gap-4 lg:max-w-screen-lg md:px-0",ref:r,children:(0,i.jsx)(a.O,{className:"w-full m-auto h-[50px]"})}),(0,i.jsxs)(s.F,{children:[(0,i.jsx)(a.O,{className:"w-full h-[230px]"}),(0,i.jsx)(a.O,{className:"w-full h-[230px]"}),(0,i.jsx)(a.O,{className:"w-full h-[230px]"}),(0,i.jsx)(a.O,{className:"w-full h-[230px]"})]})]})});r.Z=l,l.displayName="HeroSkeleton"},5176:function(e,r,n){n.d(r,{yO:function(){return p},dP:function(){return h}});var i=n(7437);function t(e,r,n){return r.displayName=e,Object.values(n).forEach(r=>r.displayName="".concat(e,".").concat(r.displayName)),Object.assign(r,n)}var a=n(8872),s=n(8296),l=n(2461),u=n(7019),m=n(2699),d=n(4859),o=n(1577),c=n(1489),f=n(3724);let x=e=>(0,i.jsx)(x,{...e}),p=t("Weather",()=>(0,i.jsx)(i.Fragment,{}),{Cloudy:x,Clear:e=>(0,i.jsx)(a.Z,{...e}),Sunny:e=>(0,i.jsx)(s.Z,{...e}),Rainy:e=>(0,i.jsx)(l.Z,{...e}),PartialyCloudy:e=>(0,i.jsx)(u.Z,{...e}),NightClear:e=>(0,i.jsx)(m.Z,{...e})}),h=t("WeatherDetails",()=>(0,i.jsx)(i.Fragment,{}),{Temp:e=>(0,i.jsx)(d.Z,{...e}),Humidity:e=>(0,i.jsx)(o.Z,{...e}),Pressure:e=>(0,i.jsx)(c.Z,{...e}),Rain:e=>(0,i.jsx)(l.Z,{...e}),Wind:e=>(0,i.jsx)(f.Z,{...e})})},2585:function(e,r,n){n.d(r,{Z:function(){return m}});var i=n(7437),t=n(2265),a=n(6013),s=n(5273),l=n(495),u=n(3691);function m(e){let{tabs:r,title:n,icon:m,unit:d,sub:o}=e,[c,f]=(0,t.useState)(r[0].key),x={variants:{initial:{y:20,opacity:0},animate:{y:0,opacity:1}},initial:"initial",animate:"animate",transition:{type:"tween",duration:.5}};return(0,i.jsx)(s.mQ,{value:c,onValueChange:f,children:(0,i.jsxs)(a.Zb,{className:"bg-accent border-zinc-700/50",children:[(0,i.jsx)(a.Ol,{children:(0,i.jsxs)(a.ll,{children:[(0,i.jsxs)("div",{className:"flex items-center justify-between",children:[(0,i.jsx)("h3",{className:"text-2xl font-semibold tracking-tight scroll-m-20",children:n}),(0,i.jsx)(s.dr,{className:"flex items-center bg-transparent",children:r.map((e,r)=>(0,i.jsx)(s.SP,{value:e.key,className:"!bg-transparent !shadow-none",children:(0,i.jsx)(l.z,{variant:"outline",size:"icon",className:"w-4 h-4 rounded-full ".concat(e.key===c&&"bg-primary hover:bg-primary"),"aria-label":e.key})},r))}),m||" "]}),(0,i.jsx)(u.EA.p,{...x,className:"text-sm font-normal text-muted-foreground ms-0.5",children:c})]})}),r.map((e,r)=>(0,i.jsxs)(s.nU,{value:e.key,className:"overflow-hidden",children:[(0,i.jsx)(u.EA.div,{...x,children:(0,i.jsx)(a.aY,{className:"pb-3",children:(0,i.jsxs)("h4",{className:"text-3xl font-semibold tracking-tight scroll-m-20",children:[e.value,(0,i.jsx)("sup",{className:"font-normal ms-2",children:d})]})})}),(0,i.jsx)(a.eW,{children:(0,i.jsx)("p",{className:"text-sm text-muted-foreground",children:e.sub||o})})]},r))]})})}},495:function(e,r,n){n.d(r,{d:function(){return u},z:function(){return m}});var i=n(7437),t=n(2265),a=n(1538),s=n(2218),l=n(7440);let u=(0,s.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),m=t.forwardRef((e,r)=>{let{className:n,variant:t,size:s,asChild:m=!1,...d}=e,o=m?a.g7:"button";return(0,i.jsx)(o,{className:(0,l.cn)(u({variant:t,size:s,className:n})),ref:r,...d})});m.displayName="Button"},6013:function(e,r,n){n.d(r,{Ol:function(){return l},SZ:function(){return m},Zb:function(){return s},aY:function(){return d},eW:function(){return o},ll:function(){return u}});var i=n(7437),t=n(2265),a=n(7440);let s=t.forwardRef((e,r)=>{let{className:n,...t}=e;return(0,i.jsx)("div",{ref:r,className:(0,a.cn)("rounded-lg border bg-card text-card-foreground shadow-sm",n),...t})});s.displayName="Card";let l=t.forwardRef((e,r)=>{let{className:n,...t}=e;return(0,i.jsx)("div",{ref:r,className:(0,a.cn)("flex flex-col space-y-1.5 p-6",n),...t})});l.displayName="CardHeader";let u=t.forwardRef((e,r)=>{let{className:n,...t}=e;return(0,i.jsx)("h3",{ref:r,className:(0,a.cn)("text-2xl font-semibold leading-none tracking-tight",n),...t})});u.displayName="CardTitle";let m=t.forwardRef((e,r)=>{let{className:n,...t}=e;return(0,i.jsx)("p",{ref:r,className:(0,a.cn)("text-sm text-muted-foreground",n),...t})});m.displayName="CardDescription";let d=t.forwardRef((e,r)=>{let{className:n,...t}=e;return(0,i.jsx)("div",{ref:r,className:(0,a.cn)("p-6 pt-0",n),...t})});d.displayName="CardContent";let o=t.forwardRef((e,r)=>{let{className:n,...t}=e;return(0,i.jsx)("div",{ref:r,className:(0,a.cn)("flex items-center p-6 pt-0",n),...t})});o.displayName="CardFooter"},4344:function(e,r,n){n.d(r,{Z:function(){return l}});var i=n(7437),t=n(2265),a=n(8484),s=n(7440);let l=t.forwardRef((e,r)=>{let{className:n,orientation:t="horizontal",decorative:l=!0,...u}=e;return(0,i.jsx)(a.f,{ref:r,decorative:l,orientation:t,className:(0,s.cn)("shrink-0 bg-border","horizontal"===t?"h-[1px] w-full":"h-full w-[1px]",n),...u})});l.displayName=a.f.displayName},2738:function(e,r,n){n.d(r,{O:function(){return a}});var i=n(7437),t=n(7440);function a(e){let{className:r,...n}=e;return(0,i.jsx)("div",{className:(0,t.cn)("animate-pulse rounded-md bg-muted",r),...n})}},5273:function(e,r,n){n.d(r,{SP:function(){return m},dr:function(){return u},mQ:function(){return l},nU:function(){return d}});var i=n(7437),t=n(2265),a=n(9385),s=n(7440);let l=a.fC,u=t.forwardRef((e,r)=>{let{className:n,...t}=e;return(0,i.jsx)(a.aV,{ref:r,className:(0,s.cn)("inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",n),...t})});u.displayName=a.aV.displayName;let m=t.forwardRef((e,r)=>{let{className:n,...t}=e;return(0,i.jsx)(a.xz,{ref:r,className:(0,s.cn)("inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",n),...t})});m.displayName=a.xz.displayName;let d=t.forwardRef((e,r)=>{let{className:n,...t}=e;return(0,i.jsx)(a.VY,{ref:r,className:(0,s.cn)("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",n),...t})});d.displayName=a.VY.displayName},7570:function(e,r,n){n.d(r,{C8:function(){return s},IF:function(){return d},Nx:function(){return l},QD:function(){return o},aP:function(){return m},dv:function(){return a},fz:function(){return u}});var i=n(6460),t=n(7296);function a(e){let r=e.ultimaRilevazione,n=e.rilevazioneGiornoPrimaUltima,i={};return Object.keys(r).forEach(e=>{if(!(e in t.ai))return;let a=t.ai[e];if(null===n[e]||null===r[e]){i[a]="";return}if("rain"===a){i[a]="Pioggia odierna";return}if("windDir"===a||"windSpeed"===a){i[a]="Informazioni vento odierne";return}r[e]=Number(r[e]),n[e]=Number(n[e]),i[a]=((r[e]-n[e])/n[e]*100).toFixed(2)+" % da ieri",i[a].startsWith("-")||(i[a]="+"+i[a])}),i}function s(e,r){let n=r[0].toUpperCase()+r.substring(1);return[{key:"Attuale",value:Number(e.ultimaRilevazione[r+"UltimaRilevazione"])},{key:"Massima",value:Number(e["max"+n+"Settimanale"].at(-1))},{key:"Minima",value:Number(e["min"+n+"Settimanale"].at(-1))}]}function l(e,r){let n=r+"Settimanale";return"pressione"===r?e[n].map(e=>null!==e?Number(e.replaceAll(",","")):0):e[n].map(e=>Number(e)||0)}function u(e){return{temp:e.map(e=>Number(e.tempOut)),humidity:e.map(e=>Number(e.outHum)),rain:e.map(e=>Number(e.rain)),pressure:e.map(e=>Number(e.bar)),maxTemp:e.map(e=>Number(e.hiTemp)),minTemp:e.map(e=>Number(e.lowTemp)),maxHumidity:[0],minHumidity:[0],maxPressure:[0],minPressure:[0],times:e.map(e=>(0,i.WU)(e.data,"HH:mm"))}}function m(e,r){let n=new Map,i={temp:{max:0,min:1/0,avg:0},humidity:{max:0,min:1/0,avg:0},pressure:{max:0,min:1/0,avg:0},rain:0,windSpeed:0};e.forEach(e=>{let r=e.windDir;n.set(r,(n.get(r)||0)+1),i.temp.max=Math.max(i.temp.max,Number(e.tempOut)),i.temp.min=Math.min(i.temp.min,Number(e.tempOut)),i.temp.avg+=Number(e.tempOut),i.humidity.max=Math.max(i.humidity.max,Number(e.outHum)),i.humidity.min=Math.min(i.humidity.min,Number(e.outHum)),i.humidity.avg+=Number(e.outHum),i.pressure.max=Math.max(i.pressure.max,Number(e.bar)),i.pressure.min=Math.min(i.pressure.min,Number(e.bar)),i.pressure.avg+=Number(e.bar),i.rain+=Number(e.rain),i.windSpeed+=Number(e.windSpeed)});let t=[...n.entries()].reduce((e,r)=>e[1]>r[1]?e:r);return{temp:[{key:"Attuale",value:Number((i.temp.avg/e.length).toFixed(1))},{key:"Massima",value:i.temp.max},{key:"Minima",value:i.temp.min}],humidity:[{key:"Attuale",value:Number((i.humidity.avg/e.length).toFixed(1))},{key:"Massima",value:i.humidity.max},{key:"Minima",value:i.humidity.min}],pressure:[{key:"Attuale",value:Number((i.pressure.avg/e.length).toFixed(1))},{key:"Massima",value:i.pressure.max},{key:"Minima",value:i.pressure.min}],rain:Number(i.rain.toFixed(1)),windDir:t[0],windSpeed:Number((i.windSpeed/e.length).toFixed(1)),daily:r,delta:{temp:((i.temp.max-i.temp.min)/i.temp.min*100).toFixed(1)+"% tra massimo e minimo",humidity:((i.humidity.max-i.humidity.min)/i.humidity.min*100).toFixed(1)+"% tra massimo e minimo",rain:((i.rain-i.rain)/i.rain*100).toFixed(1),pressure:((i.pressure.max-i.pressure.min)/i.pressure.min*100).toFixed(1)+"% tra massimo e minimo",windSpeed:"Informazioni vento del giorno",windDir:"Informazioni vento del giorno"}}}function d(e,r){let n="min"+r,i="max"+r,t=r.toLowerCase()+"Media";return[{key:"Attuale",value:Number((e.map(e=>Number(e[t])).reduce((e,r)=>e+r,0)/e.length).toFixed(1))},{key:"Massima",value:Math.max(...e.map(e=>Number(e[i])))},{key:"Minima",value:Math.min(...e.map(e=>Number(e[n])||1/0))}]}function o(e){let r={temp:"",humidity:"",pressure:"",rain:"Pioggia totale mese"};for(let n of Object.keys(e)){if(!(n in r)||"rain"===n)continue;if("function"!=typeof e[n][Symbol.iterator])throw Error("Tab ".concat(n," not iterable"));let[i,t,a]=e[n];r[n]="+".concat(((t.value-a.value)/a.value*100).toFixed(1),"% tra massimo e minimo")}return r}},7296:function(e,r,n){n.d(r,{ai:function(){return i},dp:function(){return a},ll:function(){return t}});let i={temperaturaUltimaRilevazione:"temp",umiditaUltimaRilevazione:"humidity",pressioneUltimaRilevazione:"pressure",direzioneVentoUltimaRilevazione:"windDir"},t={temp:"Temperatura",humidity:"Umidita'",rain:"Precipitazioni",pressure:"Pressione",windSpeed:"Velocit\xe0 del vento",windDir:"Direzione del vento"},a={temp:"\xb0C",humidity:"%",rain:"mm",pressure:"hPa",windSpeed:"km/h",windDir:""}},721:function(e,r,n){n.d(r,{GE:function(){return u}});var i=n(7437),t=n(8872),a=n(2461),s=n(993),l=n(8296);function u(e){let{temperature:r,pressure:n,humidity:t}=e,a="Limpido";return t>80&&r>0&&r<30&&(a="Pioggia"),t>50&&t<80&&n>=1e3&&n<=1020&&(a="Nuvoloso"),t<50&&n>=1010&&n<=1020&&(a="Soleggiato"),n>1020&&(a="Limpido"),{icon:(0,i.jsx)(m,{status:a}),status:a}}let m=e=>{let{status:r}=e;switch(r){case"Limpido":default:return(0,i.jsx)(t.Z,{stroke:"#17A34A"});case"Pioggia":return(0,i.jsx)(a.Z,{stroke:"#17A34A"});case"Nuvoloso":return(0,i.jsx)(s.Z,{stroke:"#17A34A"});case"Soleggiato":return(0,i.jsx)(l.Z,{stroke:"#17A34A"})}}},7440:function(e,r,n){n.d(r,{cn:function(){return a}});var i=n(4839),t=n(6164);function a(){for(var e=arguments.length,r=Array(e),n=0;n<e;n++)r[n]=arguments[n];return(0,t.m6)((0,i.W)(r))}}}]);
