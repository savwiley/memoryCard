(this.webpackJsonpmemorycard=this.webpackJsonpmemorycard||[]).push([[0],{23:function(e,t,a){},24:function(e,t,a){"use strict";a.r(t);var n=a(2),c=a.n(n),i=a(9),r=a.n(i),s=a(12),o=a(5),d=a.p+"static/media/ageofultron.985b135f.jpg",l=a.p+"static/media/antmanwasp.fad249f5.jpg",m=a.p+"static/media/avengers.bdd33ae9.jpg",j=a.p+"static/media/blackpanther.23114ab5.jpg",p=a.p+"static/media/captmarvel.cd300b9d.jpg",b=a.p+"static/media/endgame.6d2e4f83.jpg",g=a.p+"static/media/gotg.5abaf135.jpg",h=a.p+"static/media/gotg2.f3781202.jpg",u=a.p+"static/media/infinitywar.bba5096b.jpg",f=a.p+"static/media/ironman.1500b5ab.jpg",O=a.p+"static/media/ironman3.e3bdf70e.jpg",y=a.p+"static/media/spidermanhomecoming.240ea069.jpg",x=a.p+"static/media/thor.da3017bf.jpg",v=a.p+"static/media/thorragnarok.9bd6f846.jpg",S=a.p+"static/media/wintersoldier.8e450056.jpg",k=a(0),w=function(e){var t=[{name:"ageofultron",src:d,title:"Age of Ultron"},{name:"antmanwasp",src:l,title:"Ant-Man & the Wasp"},{name:"avengers",src:m,title:"The Avengers"},{name:"blackpanther",src:j,title:"Black Panther"},{name:"captmarvel",src:p,title:"Captain Marvel"},{name:"endgame",src:b,title:"Endgame"},{name:"gotg",src:g,title:"Guardians of the Galaxy"},{name:"gotg2",src:h,title:"Guardians of the Galaxy 2"},{name:"infinitywar",src:u,title:"Infinity War"},{name:"ironman",src:f,title:"Iron Man"},{name:"ironman3",src:O,title:"Iron Man 3"},{name:"spidermanhomecoming",src:y,title:"Spider-Man: Homecoming"},{name:"thor",src:x,title:"Thor"},{name:"thorragnarok",src:v,title:"Thor: Ragnarok"},{name:"wintersoldier",src:S,title:"The Winter Soldier"}],a=Object(n.useState)(t),c=Object(o.a)(a,2),i=c[0],r=c[1],w=Object(n.useState)(0),M=Object(o.a)(w,2),N=M[0],E=M[1],G=Object(n.useState)(0),A=Object(o.a)(G,2),C=A[0],I=A[1],q=Object(n.useState)([]),P=Object(o.a)(q,2),T=P[0],H=P[1],W=document.querySelector(".winOverlay"),B=document.querySelector(".loseOverlay"),J=document.querySelectorAll("#again");return Object(n.useEffect)((function(){document.querySelectorAll("#card").forEach((function(e){return e.addEventListener("click",(function(){!function(e){r([]);for(var t,a,n=e.length;0!==n;)a=Math.floor(Math.random()*n),t=e[n-=1],e[n]=e[a],e[a]=t;r(e)}(i),function(e){T.includes(e)?(N>C||N===C?(I(N),W&&(W.style.display="flex")):N<C&&B&&(B.style.display="flex"),E(0),H([])):(E(N+1),H([].concat(Object(s.a)(T),[e])))}(e.className)}))}))})),J.forEach((function(e){e.addEventListener("click",(function(){W.style.display="none",B.style.display="none"}))})),Object(k.jsxs)(k.Fragment,{children:[Object(k.jsxs)("div",{className:"scoreboard",children:[Object(k.jsxs)("span",{id:"currentScore",children:["Current Score: ",N]}),Object(k.jsxs)("span",{id:"bestScore",children:["High Score: ",C]})]}),Object(k.jsx)("div",{className:"cardContainer",children:i.map((function(e){return Object(k.jsx)("div",{className:e.name,id:"card",style:{backgroundImage:"url(".concat(e.src,")"),backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat"},children:Object(k.jsx)("span",{id:"title",children:e.title})},e.name)}))}),Object(k.jsxs)("div",{className:"winOverlay",children:[Object(k.jsxs)("span",{children:["New High Score! ",Object(k.jsx)("br",{})," ",C]}),Object(k.jsx)("button",{id:"again",children:"Play again?"})]}),Object(k.jsxs)("div",{className:"loseOverlay",children:[Object(k.jsx)("span",{children:"You lost!"}),Object(k.jsx)("button",{id:"again",children:"Play again?"})]})]})},M=a(10),N=a(11),E=function(){return Object(k.jsxs)("div",{className:"main",children:[Object(k.jsxs)("div",{className:"header",children:[Object(k.jsx)("a",{href:"https://github.com/savwiley/memoryCard",id:"credit",children:Object(k.jsx)(M.a,{icon:N.a,id:"credit"})}),Object(k.jsx)("span",{children:"Marvel-ous Memory"})]}),Object(k.jsx)("span",{id:"info",children:"Get points by clicking on the posters! Click on the same one twice and you lose. Get all 15 and you win!"}),Object(k.jsx)(w,{})]})};a(23);r.a.render(Object(k.jsx)(c.a.StrictMode,{children:Object(k.jsx)(E,{})}),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.eb61f842.chunk.js.map