(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[420],{91:function(e,t,a){Promise.resolve().then(a.bind(a,3892)),Promise.resolve().then(a.bind(a,7654)),Promise.resolve().then(a.bind(a,2854)),Promise.resolve().then(a.bind(a,955))},3892:function(e,t,a){"use strict";a.d(t,{default:function(){return s}});var r=a(7437),n=a(3691);function s(){return(0,r.jsx)(n.EA.div,{className:"relative flex items-center justify-center lg:max-w-[80%] m-auto my-56",initial:{scale:0,y:100},animate:{scale:1,y:0},children:(0,r.jsxs)("div",{className:"flex flex-col items-center",children:[(0,r.jsxs)("h1",{className:"mb-5 text-3xl tracking-tight text-center scroll-m-20 xl:text-8xl lg:text-7xl md:text-6xl",children:["Report dei"," ",(0,r.jsx)("span",{className:"font-bold tracking-wide text-primary mr-4",children:"dati"}),"meteorologici"]}),(0,r.jsx)("p",{className:"font-light text-center text-md lg:text-3xl md:text-xl text-muted-foreground",children:"Seleziona anno/mese per visualizzare i dati meteologici"})]})})}},7654:function(e,t,a){"use strict";a.d(t,{columns:function(){return i}});var r=a(7437),n=a(4175),s=a(4361);(0,n.Cl)();let i=[{id:"type",accessorKey:"id",header:"",cell:e=>e.getValue()},{accessorKey:"temp",header:()=>(0,r.jsx)(s.Z,{text:"Max / Med / Min",children:(0,r.jsx)("span",{className:"cursor-pointer",children:"Temperatura (\xb0C)"})}),cell:e=>{let{min:t,max:a,avg:r}=e.getValue();return"".concat(t," / ").concat(a," / ").concat(r)}},{accessorKey:"hum",header:()=>(0,r.jsx)(s.Z,{text:"Max / Med / Min",children:(0,r.jsx)("span",{className:"cursor-pointer",children:"Umidit\xe0 (%)"})}),cell:e=>{let{min:t,max:a,avg:r}=e.getValue();return"".concat(t," / ").concat(a," / ").concat(r)}},{accessorKey:"rain",header:()=>(0,r.jsx)(s.Z,{text:"Media",children:(0,r.jsx)("span",{className:"cursor-pointer",children:"Pioggia (mm)"})}),cell:e=>e.getValue()}]},2854:function(e,t,a){"use strict";a.d(t,{ReportTable:function(){return g}});var r=a(7437),n=a(2265),s=a(3514),i=a(4175),l=a(7440);let o=n.forwardRef((e,t)=>{let{className:a,...n}=e;return(0,r.jsx)("div",{className:"relative w-full overflow-auto lg:overflow-hidden",children:(0,r.jsx)("table",{ref:t,className:(0,l.cn)("w-full caption-bottom text-sm",a),...n})})});o.displayName="Table";let d=n.forwardRef((e,t)=>{let{className:a,...n}=e;return(0,r.jsx)("thead",{ref:t,className:(0,l.cn)("[&_tr]:border-b",a),...n})});d.displayName="TableHeader";let c=n.forwardRef((e,t)=>{let{className:a,...n}=e;return(0,r.jsx)("tbody",{ref:t,className:(0,l.cn)("[&_tr:last-child]:border-0",a),...n})});c.displayName="TableBody",n.forwardRef((e,t)=>{let{className:a,...n}=e;return(0,r.jsx)("tfoot",{ref:t,className:(0,l.cn)("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",a),...n})}).displayName="TableFooter";let m=n.forwardRef((e,t)=>{let{className:a,...n}=e;return(0,r.jsx)("tr",{ref:t,className:(0,l.cn)("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",a),...n})});m.displayName="TableRow";let u=n.forwardRef((e,t)=>{let{className:a,...n}=e;return(0,r.jsx)("th",{ref:t,className:(0,l.cn)("h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",a),...n})});u.displayName="TableHead";let x=n.forwardRef((e,t)=>{let{className:a,...n}=e;return(0,r.jsx)("td",{ref:t,className:(0,l.cn)("p-4 align-middle [&:has([role=checkbox])]:pr-0",a),...n})});x.displayName="TableCell",n.forwardRef((e,t)=>{let{className:a,...n}=e;return(0,r.jsx)("caption",{ref:t,className:(0,l.cn)("mt-4 text-sm text-muted-foreground",a),...n})}).displayName="TableCaption";var f=a(6460),p=a(1520),h=a(495);function g(e){var t;let{columns:a,data:l,type:g}=e,[b,N]=n.useState({}),[j,w]=n.useState({}),y=(0,s.b7)({data:l,columns:a,getCoreRowModel:(0,i.sC)(),onRowSelectionChange:N,getSortedRowModel:(0,i.tj)(),onColumnVisibilityChange:w,getPaginationRowModel:(0,i.G_)(),state:{rowSelection:b,columnVisibility:j}});return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:"px-4 md:px-10",children:[(0,r.jsxs)(o,{className:"md:w-full lg:w-[1200px]  md:overflow-x-hidden m-auto w-[562px] overflow-x-scroll ",children:[(0,r.jsx)(d,{children:y.getHeaderGroups().map(e=>(0,r.jsx)(m,{className:"hover:bg-transparent",children:e.headers.map(t=>"type"===t.id?(0,r.jsx)(u,{className:"font-bold",children:"month"===g?"Mese":"day"===g?"Giorno":"Anno"},e.id):"hide"!==t.column.columnDef.header&&(0,r.jsx)(u,{children:t.isPlaceholder?null:(0,s.ie)(t.column.columnDef.header,t.getContext())},t.id))},e.id))}),(0,r.jsx)(c,{children:(null===(t=y.getRowModel().rows)||void 0===t?void 0:t.length)?y.getRowModel().rows.map(e=>(0,r.jsx)(m,{"data-state":e.getIsSelected()&&"selected",className:"border-0 border-b bg-background hover:bg-neutral-200/50 dark:hover:bg-neutral-900",children:e.getVisibleCells().map(e=>"hide"!==e.column.columnDef.header&&(0,r.jsx)(x,{children:"type"===e.column.id?(0,r.jsxs)("span",{className:"font-bold",children:[" ",(0,f.WU)("month"===g?new Date().setMonth(e.getValue()-1):"year"===g?new Date().setFullYear(e.getValue()):new Date().setDate(e.getValue()),"month"==g?"MMMM":"day"===g?"dd":"yyyy",{locale:p.it})," "]}):(0,s.ie)(e.column.columnDef.cell,e.getContext())},e.id))},e.id)):(0,r.jsx)(m,{children:(0,r.jsx)(x,{colSpan:a.length,className:"h-24 text-center",children:"No results."})})})]}),(0,r.jsxs)("div",{className:"flex 2xl:w-[1200px] items-center justify-end py-4 m-auto space-x-2 lg:w-full",children:[(0,r.jsx)(h.z,{variant:"outline",size:"sm",onClick:()=>y.previousPage(),disabled:!y.getCanPreviousPage(),children:"Precedente"}),(0,r.jsx)(h.z,{variant:"default",size:"sm",onClick:()=>y.nextPage(),disabled:!y.getCanNextPage(),children:"Prossima"})]})]})})}},955:function(e,t,a){"use strict";a.d(t,{default:function(){return g}});var r=a(7437),n=a(6094),s=a(3191),i=a(7654),l=a(6460),o=a(2854),d=a(6294),c=a(1520),m=a(5524),u=a(2265),x=a(2738);function f(){let e=new Date().getFullYear(),t=(0,m.D)({mutationFn:async e=>{let t=await fetch("php/datiReport.php?anno=".concat(e),{method:"GET",headers:{"Content-Type":"application/json"}});if(!t.ok)throw Error("Nessuna rilevazione trovata per l'anno selezionato, riprova pi\xf9 tardi");return(await t.json()).rilevazioniAnnualiPerMese.map(e=>({id:Number(e.mese),temp:{max:Number(e.maxTemperatura),min:Number(e.minTemperatura),avg:Number(e.temperaturaMedia)},hum:{max:Number(e.maxUmidita),min:Number(e.minUmidita),avg:Number(e.umiditaMedia)},pressure:{max:Number(e.maxPressione),min:Number(e.minPressione),avg:Number(e.pressioneMedia)},rain:Number(e.pioggiaGiornaliera),wind:{max:Number(e.maxVelocitaVento),min:Number(e.minVelocitaVento),avg:Number(e.mediaVelocitaVento)}}))}});return(0,u.useEffect)(()=>{t.mutate((0,l.WU)(new Date,"yyyy",{locale:c.it}))},[]),(0,r.jsxs)("div",{className:"mt-40",children:[(0,r.jsxs)("div",{className:"lg:w-[1200px] m-auto grid md:grid-cols-2 *:m-auto  gap-2 items-center mb-4",children:[(0,r.jsx)("p",{className:"text-lg text-center lg:text-3xl md:text-xl text-foreground",children:"Rilevamenti mensili"}),(0,r.jsxs)(d.Ph,{defaultValue:(0,l.WU)(new Date,"yyyy",{locale:c.it}),onValueChange:e=>t.mutate(e),children:[(0,r.jsxs)(d.i4,{className:"w-[280px] rounded-xl shadow-md shadow-input border-primary/20 dark:shadow-none",children:[(0,r.jsx)(d.ki,{placeholder:"Anno",className:"text-white","aria-label":"Seleziona un anno"}),(0,r.jsx)("p",{className:"sr-only",children:"Anno da cercare"})]}),(0,r.jsx)(d.Bw,{className:"w-[280px] rounded-xl  shadow-input dark:shadow-none pb-3",children:(0,r.jsxs)(d.DI,{className:"px-2",children:[(0,r.jsx)(d.n5,{className:"-px-1",children:"Anno"}),[,,,,].fill(0).map((t,a)=>(0,r.jsx)(d.Ql,{className:"text-md",value:(e-3+a).toString(),children:(0,l.WU)(new Date().setFullYear(e-3+a),"yyyy",{locale:c.it})},a+e-3))]})})]})]})," ","success"===t.status&&(0,r.jsx)("div",{className:" h-[".concat(t.data.length>7?55*t.data.length:385,"px]"),children:(0,r.jsx)(o.ReportTable,{data:t.data,columns:i.columns,type:"month"})}),t.isPending&&(0,r.jsx)("div",{className:"h-[660px]",children:(0,r.jsx)(x.O,{className:" md:px-10 w-[90%] m-auto h-full"})}),t.isError&&(0,r.jsx)("p",{className:"mt-8 text-lg text-center md:text-xl text-destructive",children:t.error.message})]})}function p(){let e=new Date().getMonth(),t=(0,m.D)({mutationFn:async e=>{let t=await fetch("php/datiReport.php?anno=".concat(new Date().getFullYear(),"&mese=").concat(e),{method:"GET",headers:{"Content-Type":"application/json"}});if(!t.ok)throw Error("Nessuna rilevazione trovata per l'anno selezionato, riprova pi\xf9 tardi");return(await t.json()).rilevazioniMese.map(e=>({id:Number((0,l.WU)(e.data,"dd")),temp:{max:Number(e.maxTemperatura),min:Number(e.minTemperatura),avg:Number(e.temperaturaMedia)},hum:{max:Number(e.maxUmidita),min:Number(e.minUmidita),avg:Number(e.umiditaMedia)},pressure:{max:Number(e.maxPressione),min:Number(e.minPressione),avg:Number(e.pressioneMedia)},rain:Number(e.pioggiaGiornaliera),wind:{max:Number(e.maxVelocitaVento),min:Number(e.minVelocitaVento),avg:Number(e.mediaVelocitaVento)}}))}});return(0,u.useEffect)(()=>{t.mutate((e+1).toString())},[]),(0,r.jsxs)("div",{className:"mt-40",children:[(0,r.jsxs)("div",{className:"lg:w-[1200px] m-auto grid md:grid-cols-2 *:m-auto  gap-2 items-center mb-4",children:[(0,r.jsx)("p",{className:"text-lg text-center lg:text-3xl md:text-xl text-foreground",children:"Rilevamenti mensili"}),(0,r.jsxs)(d.Ph,{defaultValue:e.toString(),onValueChange:e=>t.mutate((Number(e)+1).toString()),children:[(0,r.jsxs)(d.i4,{className:"w-[280px] rounded-xl shadow-md shadow-input border-primary/20 dark:shadow-none",children:[(0,r.jsx)(d.ki,{placeholder:"Mese",className:"text-white","aria-label":"Seleziona un mese"}),(0,r.jsx)("p",{className:"sr-only",children:"Anno da cercare"})]}),(0,r.jsx)(d.Bw,{className:"w-[280px] rounded-xl  shadow-input dark:shadow-none pb-3",children:(0,r.jsxs)(d.DI,{className:"px-2",children:[(0,r.jsx)(d.n5,{className:"-px-1",children:"Mese"}),Array(12).fill(0).map((t,a)=>a<=e&&(0,r.jsx)(d.Ql,{className:"text-md",value:a.toString(),children:(0,l.WU)(new Date().setMonth(a),"MMMM",{locale:c.it})},a+1))]})})]})]}),(0,r.jsxs)("div",{className:"h-[650px]",children:[" ","success"===t.status&&(0,r.jsx)(o.ReportTable,{data:t.data,columns:i.columns,type:"day"}),t.isPending&&(0,r.jsx)(x.O,{className:" md:px-10 w-[90%] m-auto h-full"}),t.isError&&(0,r.jsx)("p",{className:"mt-8 text-lg text-center md:text-xl text-destructive",children:t.error.message})]})]})}let h=new n.S;function g(){return(0,r.jsxs)(s.aH,{client:h,children:[(0,r.jsx)(f,{}),(0,r.jsx)(p,{})]})}},4361:function(e,t,a){"use strict";a.d(t,{Z:function(){return m}});var r=a(7437),n=a(2265),s=a(7071),i=a(7440);let l=s.zt,o=s.fC,d=s.xz,c=n.forwardRef((e,t)=>{let{className:a,sideOffset:n=4,...l}=e;return(0,r.jsx)(s.VY,{ref:t,sideOffset:n,className:(0,i.cn)("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",a),...l})});function m(e){let{children:t,text:a}=e;return(0,r.jsx)(l,{delayDuration:200,children:(0,r.jsxs)(o,{children:[(0,r.jsx)(d,{asChild:!0,children:t}),(0,r.jsx)(c,{className:"rotate-0   ",children:a})]})})}c.displayName=s.VY.displayName},495:function(e,t,a){"use strict";a.d(t,{d:function(){return o},z:function(){return d}});var r=a(7437),n=a(2265),s=a(1538),i=a(2218),l=a(7440);let o=(0,i.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),d=n.forwardRef((e,t)=>{let{className:a,variant:n,size:i,asChild:d=!1,...c}=e,m=d?s.g7:"button";return(0,r.jsx)(m,{className:(0,l.cn)(o({variant:n,size:i,className:a})),ref:t,...c})});d.displayName="Button"},6294:function(e,t,a){"use strict";a.d(t,{Bw:function(){return f},DI:function(){return d},Ph:function(){return o},Ql:function(){return h},i4:function(){return m},ki:function(){return c},n5:function(){return p}});var r=a(7437),n=a(2265),s=a(4867),i=a(7539),l=a(7440);let o=i.fC,d=i.ZA,c=i.B4,m=n.forwardRef((e,t)=>{let{className:a,children:n,...o}=e;return(0,r.jsxs)(i.xz,{ref:t,className:(0,l.cn)("flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",a),...o,children:[n,(0,r.jsx)(i.JO,{asChild:!0,children:(0,r.jsx)(s.jnn,{className:"w-4 h-4 opacity-50"})})]})});m.displayName=i.xz.displayName;let u=n.forwardRef((e,t)=>{let{className:a,...n}=e;return(0,r.jsx)(i.u_,{ref:t,className:(0,l.cn)("flex cursor-default items-center justify-center py-1",a),...n,children:(0,r.jsx)(s.g8U,{})})});u.displayName=i.u_.displayName;let x=n.forwardRef((e,t)=>{let{className:a,...n}=e;return(0,r.jsx)(i.$G,{ref:t,className:(0,l.cn)("flex cursor-default items-center justify-center py-1",a),...n,children:(0,r.jsx)(s.v4q,{})})});x.displayName=i.$G.displayName;let f=n.forwardRef((e,t)=>{let{className:a,children:n,position:s="popper",...o}=e;return(0,r.jsx)(i.h_,{children:(0,r.jsxs)(i.VY,{ref:t,className:(0,l.cn)("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2","popper"===s&&"data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",a),position:s,...o,children:[(0,r.jsx)(u,{}),(0,r.jsx)(i.l_,{className:(0,l.cn)("p-1","popper"===s&&"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),children:n}),(0,r.jsx)(x,{})]})})});f.displayName=i.VY.displayName;let p=n.forwardRef((e,t)=>{let{className:a,...n}=e;return(0,r.jsx)(i.__,{ref:t,className:(0,l.cn)("px-2 py-1.5 text-sm font-semibold",a),...n})});p.displayName=i.__.displayName;let h=n.forwardRef((e,t)=>{let{className:a,children:n,...o}=e;return(0,r.jsxs)(i.ck,{ref:t,className:(0,l.cn)("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",a),...o,children:[(0,r.jsx)("span",{className:"absolute right-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,r.jsx)(i.wU,{children:(0,r.jsx)(s.nQG,{className:"w-4 h-4"})})}),(0,r.jsx)(i.eT,{children:n})]})});h.displayName=i.ck.displayName,n.forwardRef((e,t)=>{let{className:a,...n}=e;return(0,r.jsx)(i.Z0,{ref:t,className:(0,l.cn)("-mx-1 my-1 h-px bg-muted",a),...n})}).displayName=i.Z0.displayName},2738:function(e,t,a){"use strict";a.d(t,{O:function(){return s}});var r=a(7437),n=a(7440);function s(e){let{className:t,...a}=e;return(0,r.jsx)("div",{className:(0,n.cn)("animate-pulse rounded-md bg-muted",t),...a})}},7440:function(e,t,a){"use strict";a.d(t,{cn:function(){return s}});var r=a(4839),n=a(6164);function s(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,n.m6)((0,r.W)(t))}}},function(e){e.O(0,[310,967,287,741,59,71,514,971,23,744],function(){return e(e.s=91)}),_N_E=e.O()}]);
