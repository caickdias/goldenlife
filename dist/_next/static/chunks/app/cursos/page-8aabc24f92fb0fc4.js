(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[322],{9853:function(e,t,s){Promise.resolve().then(s.bind(s,4812))},4812:function(e,t,s){"use strict";s.r(t),s.d(t,{GetCourses:function(){return u}});var a=s(9268),i=s(2375),r=s(730),c=s(6008),n=s(6394),l=s.n(n),o=s(2141),d=s(5846),x=s.n(d);function h(e){let{content:t,type:s,url:i,color:r}=e;return"page"===s?(0,a.jsx)(x(),{className:"whitespace-nowrap bg-red p-4 font-alexandria text-base uppercase tracking-widest text-white transition-colors duration-300 ".concat("white"===r?"hover:bg-black hover:text-white":"hover:bg-white hover:text-black"),href:i,children:t}):(0,a.jsx)("a",{className:"whitespace-nowrap bg-red p-4 font-alexandria text-base uppercase tracking-widest text-white transition-colors duration-300 ".concat("white"===r?"hover:bg-black hover:text-white":"hover:bg-white hover:text-black"),href:i,rel:"nofollow",children:t})}var m=s(8878),g={src:"/_next/static/media/icon-calendar.bfd82b57.svg",height:20,width:20,blurWidth:0,blurHeight:0};function u(){let{data:e,isLoading:t,error:s}=(0,r.ZP)('*[_type == "courses"]{_id, imagecourse, titlecourse, descriptioncourse, workloadcourse, price, teachercourse, datacourse, urlcourse}[0...10]',e=>i.L.fetch(e));return t?(0,a.jsx)("section",{className:"pb-section pt-section",children:(0,a.jsx)("div",{className:"page_margin tablet:page_margin_tablet flex h-60 items-center justify-center",children:(0,a.jsx)(l(),{className:"animate-spin",src:o.Z,alt:"Carregando"})})}):s?(0,a.jsx)("section",{className:"pb-section pt-section",children:(0,a.jsx)("div",{className:"page_margin tablet:page_margin_tablet flex h-60 items-center justify-center",children:(0,a.jsx)("h2",{className:"text-center font-alexandria text-xl text-black",children:"Erro ao obter dados. Recarregue novamente a p\xe1gina ou tente novamente mais tarde"})})}):(e||(0,c.notFound)(),(0,a.jsx)("section",{className:"pb-section pt-section",children:(0,a.jsx)("div",{className:"page_margin tablet:page_margin_tablet relative animate-[opacityAndMoving_1200ms_ease-out_forwards]",children:0===e.length?(0,a.jsx)("div",{className:"flex h-60 items-center justify-center",children:(0,a.jsx)("h2",{className:"text-center font-alexandria text-xl text-black",children:"Sem cursos dispon\xedveis"})}):e.map((t,s)=>(0,a.jsxs)("div",{className:"".concat(0===s?"":"mt-16"," ").concat(s+1===e.length?"":"mb-16"," grid grid-cols-[438px_1fr] bg-[#E3E3E3] mobile:grid-cols-1 tablet:grid-cols-1"),children:[(0,a.jsx)("div",{className:"mobile:flex mobile:justify-center tablet:flex tablet:justify-center",children:(0,a.jsx)(l(),{src:(0,i.g)().image(t.imagecourse).format("webp").quality(90).width(438).height(510).url(),alt:t.imagecourse.description,width:438,height:510,quality:100})}),(0,a.jsxs)("div",{className:"flex flex-col justify-between gap-8 p-9 mobile:p-5",children:[(0,a.jsxs)("div",{className:"flex flex-col gap-1 mobile:items-center",children:[(0,a.jsx)(l(),{src:m.default,alt:""}),(0,a.jsx)("h2",{className:"text-3xl text-black mobile:text-center",children:t.titlecourse})]}),(0,a.jsxs)("div",{className:"flex flex-col gap-3 mobile:gap-7",children:[(0,a.jsxs)("div",{className:"grid grid-cols-[117px_1fr] items-start gap-8 mobile:grid-cols-1 mobile:gap-1",children:[(0,a.jsx)("h3",{className:"font-alexandria text-base uppercase tracking-widest",children:"Descri\xe7\xe3o:"}),(0,a.jsx)("p",{className:"text-gray_content_white",children:t.descriptioncourse})]}),(0,a.jsxs)("div",{className:"grid grid-cols-[117px_1fr] items-end gap-8 mobile:grid-cols-1 mobile:gap-1",children:[(0,a.jsx)("h3",{className:"font-alexandria text-base uppercase tracking-widest",children:"Carga Hor\xe1ria:"}),(0,a.jsxs)("p",{className:"text-gray_content_white",children:[t.workloadcourse," Horas"]})]}),(0,a.jsxs)("div",{className:"grid grid-cols-[117px_1fr] items-start gap-8 mobile:grid-cols-1 mobile:gap-1",children:[(0,a.jsx)("h3",{className:"font-alexandria text-base uppercase tracking-widest",children:"Professor:"}),(0,a.jsx)("p",{className:"text-gray_content_white",children:t.teachercourse})]}),(0,a.jsxs)("div",{className:"grid grid-cols-[117px_1fr] items-start gap-8 mobile:grid-cols-1 mobile:gap-1",children:[(0,a.jsx)("h3",{className:"font-alexandria text-base uppercase tracking-widest",children:"Pre\xe7o:"}),(0,a.jsxs)("p",{className:"text-red text-lg",children:["R$ ",void 0!=t.price?t.price.toFixed(2):"00,00"]})]})]}),(0,a.jsxs)("div",{className:"flex items-center justify-between mobile:flex-col mobile:gap-7",children:[(0,a.jsxs)("div",{className:"flex items-center gap-2",children:[(0,a.jsx)(l(),{src:g,alt:"Data de in\xedcio"}),(0,a.jsx)("h2",{className:"font-alexandria text-base text-black",children:function(e){let t=e.split("-"),s="".concat(t[2],"/").concat(t[1],"/").concat(t[0]);return s}(t.datacourse)})]}),(0,a.jsx)(h,{type:"link",color:"white",url:t.urlcourse,content:"Inscreva-se"})]})]})]},t._id))})}))}},2375:function(e,t,s){"use strict";s.d(t,{L:function(){return c},g:function(){return n}});var a=s(8120),i=s(9453),r=s.n(i);let c=(0,a.eI)({projectId:"bvrqolp8",dataset:"production",useCdn:!0,apiVersion:"2023-09-05"});function n(){let e=r()(c);return e}},8878:function(e,t,s){"use strict";s.r(t),t.default={src:"/_next/static/media/icon-decoration-3.158ee79f.svg",height:4,width:70,blurWidth:0,blurHeight:0}},2141:function(e,t){"use strict";t.Z={src:"/_next/static/media/icon-spinner.512ca439.svg",height:55,width:55,blurWidth:0,blurHeight:0}},5846:function(e,t,s){e.exports=s(414)}},function(e){e.O(0,[414,11,345,667,139,744],function(){return e(e.s=9853)}),_N_E=e.O()}]);