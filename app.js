function removeLoader(){$("#loadingDiv").fadeOut(500,function(){$("#loadingDiv").remove()}),document.querySelector("nav address").innerHTML="&copy; "+(new Date).getFullYear()+" <span>Adam Geppert</span>"}function callbackFunc(t,e){t.forEach(t=>{const e=new TimelineMax;if("landing"==t.target.id&&1==t.isIntersecting&&($('a[href^="#landing"]').css({color:"#ba0001","text-decoration":"line-through"}),$('a[href^="#about"]').css({color:"#fff","text-decoration":"none"})),"about"==t.target.id&&1==t.isIntersecting&&($('a[href^="#about"]').css({color:"#ba0001","text-decoration":"line-through"}),$('a[href^="#landing"]').css({color:"#fff","text-decoration":"none"}),$('a[href^="#skill"]').css({color:"#fff","text-decoration":"none"}),!animated[1])){const t=document.querySelector("#about img"),o=document.querySelector("#about .tagline hr"),r=document.querySelector("#about .tagline h2"),n=document.querySelector("#about h6"),i=document.querySelector("#about #zawod"),a=document.querySelector("#about #opis");animated[1]=!0,e.fromTo(t,.7,{opacity:0,x:"-300"},{opacity:1,x:0},0).fromTo(o,.5,{opacity:0,width:0},{opacity:1,width:"35px"},.4).to(r,.5,{opacity:.6},.4).fromTo(n,.5,{opacity:0,y:"-25"},{opacity:1,y:0},.7).fromTo(i,.5,{opacity:0,x:"-25"},{opacity:1,x:0},1).fromTo(a,.5,{opacity:0,y:"-25"},{opacity:1,y:0},1)}if("skills"==t.target.id&&1==t.isIntersecting&&($('a[href^="#skill"]').css({color:"#ba0001","text-decoration":"line-through"}),$('a[href^="#about"]').css({color:"#fff","text-decoration":"none"}),$('a[href^="#portfolio"]').css({color:"#fff","text-decoration":"none"}),!animated[2])){const t=document.querySelector("#skills .tagline hr"),o=document.querySelector("#skills .tagline h2"),r=document.querySelector("#skills h6"),n=document.querySelector("#skills #skill_info p"),i=document.querySelectorAll("#skills #skill_graph .chart"),a=document.querySelectorAll("#skills #skill_graph .chart footer div"),c=document.querySelectorAll("#skills #skill_graph p");animated[2]=!0,e.fromTo(t,.5,{opacity:0,width:0},{opacity:1,width:"35px"},0).to(o,.5,{opacity:.6},0).fromTo(r,.5,{opacity:0,y:"-25"},{opacity:1,y:0},.3).fromTo(n,.5,{opacity:0,y:"-25"},{opacity:1,y:0},.7).fromTo(n,.5,{opacity:0,y:"-25"},{opacity:1,y:0},.7).fromTo(i,.5,{opacity:0,x:"25"},{opacity:1,x:0},.7).fromTo(a[0],.5,{opacity:0,width:0},{opacity:1,width:"90%"},1).fromTo(a[1],.5,{opacity:0,width:0},{opacity:1,width:"65%"},1.1).fromTo(a[2],.5,{opacity:0,width:0},{opacity:1,width:"80%"},1.2).fromTo(a[3],.5,{opacity:0,width:0},{opacity:1,width:"55%"},1.3).fromTo(c,.5,{opacity:0,y:"-25"},{opacity:.4,y:0},1.6)}if("portfolio"==t.target.id&&1==t.isIntersecting&&($('a[href^="#portfolio"]').css({color:"#ba0001","text-decoration":"line-through"}),$('a[href^="#skills"]').css({color:"#fff","text-decoration":"none"}),$('a[href^="#contact"]').css({color:"#fff","text-decoration":"none"}),!animated[3])){const t=document.querySelectorAll("#portfolio img"),o=document.querySelector("#portfolio #title .tagline hr"),r=document.querySelector("#portfolio #title .tagline h2"),n=document.querySelector("#portfolio #title h6"),i=document.querySelectorAll("#portfolio svg"),a=document.querySelectorAll("#portfolio .container > a"),c=5*window.innerWidth;animated[3]=!0,e.fromTo(o,.5,{opacity:0,width:0},{opacity:1,width:"35px"}).to(r,.5,{opacity:.6},0).fromTo(t,.5,{opacity:0,x:c},{opacity:1,x:0},.01).fromTo(n,.5,{opacity:0,y:"-25"},{opacity:1,y:0},.3).fromTo(i,.5,{opacity:0,x:"5"},{opacity:1,x:0},1).fromTo(a,.5,{opacity:0,y:"-25"},{opacity:1,y:0},1)}if("contact"==t.target.id&&1==t.isIntersecting&&($('a[href^="#contact"]').css({color:"#ba0001","text-decoration":"line-through"}),$('a[href^="#portfolio"]').css({color:"#fff","text-decoration":"none"}),!animated[4])){const t=document.querySelector("#contact iframe"),o=document.querySelector("#contact .container div"),r=document.querySelector("#contact .container div p:nth-of-type(2)"),n=document.querySelector("#contact .container address:nth-of-type(1)"),i=document.querySelector("#contact .container address:nth-of-type(2)");animated[4]=!0,e.fromTo(t,.7,{opacity:0,x:"-300"},{opacity:1,x:0}).fromTo(o,.5,{opacity:0,x:"50"},{opacity:1,x:0},0).fromTo(r,.5,{opacity:0,y:"-25"},{opacity:1,y:0},.3).fromTo(n,.5,{opacity:0,x:"50"},{opacity:1,x:0},.7).fromTo(i,.5,{opacity:0,x:"50"},{opacity:1,x:0},.8)}})}$("body").append('<div style="" id="loadingDiv"><div class="loader">Ładowanie...</div></div>'),$(window).on("load",function(){setTimeout(removeLoader,500)});const hamburger=document.querySelector("header .hamburger"),hr=document.querySelectorAll("header .hamburger hr"),nav=document.querySelector("nav"),links=document.querySelector(".link"),a=document.querySelectorAll(".link a"),hr1=hr[0],hr2=hr[1],tl=(new TimelineMax).to(hr1,.4,{rotation:45,transformOrigin:"center",y:"6.25px"}).to(hr2,.4,{rotation:-45,transformOrigin:"center",y:"-6.25px"},0).reverse();hamburger.addEventListener("click",()=>{tl.reversed(!tl.reversed()),nav.classList.toggle("open"),links.classList.toggle("ani")}),a.forEach(t=>{t.addEventListener("click",()=>{tl.reversed(!tl.reversed());const t=document.querySelector(".link");nav.classList.toggle("open"),t.classList.toggle("ani")})});let $root=$("html, body");$('a[href^="#"]').click(function(){return $root.animate({scrollTop:$($.attr(this,"href")).offset().top},500),!1});let animated=[!0,!1,!1,!1,!1],options={root:null,rootMargin:"0px",threshold:.3},observer=new IntersectionObserver(callbackFunc,options);observer.observe(document.getElementById("landing")),observer.observe(document.getElementById("about")),observer.observe(document.getElementById("skills")),observer.observe(document.getElementById("portfolio")),observer.observe(document.getElementById("contact"));const media=window.matchMedia("(max-width: 1200px)");if(media.matches){const t=document.querySelector("#slides-mobile"),e=document.querySelectorAll("#slides-mobile article"),o=document.querySelector("#prev"),r=document.querySelector("#next"),n=document.querySelector("#s1").clientWidth;let i=1;t.style.transform="translateX("+-n*i+"px)",r.addEventListener("click",()=>{i>=e.length-1||(t.style.transition="transform 0.4s ease-in-out",i++,t.style.transform="translateX("+-n*i+"px)")}),o.addEventListener("click",()=>{i<=0||(t.style.transition="transform 0.4s ease-in-out",i--,t.style.transform="translateX("+-n*i+"px)")}),t.addEventListener("transitionend",()=>{"last"===e[i].id&&(t.style.transition="none",i=e.length-2,t.style.transform="translateX("+-n*i+"px)"),"first"===e[i].id&&(t.style.transition="none",i=e.length-i,t.style.transform="translateX("+-n*i+"px)")})}if(!media.matches){const t=["Minimus","KSM","Golden Style","Gaming Night"],e=["Biuro Rachunkowe Gliwice","Diecezji Gliwickiej","Koszulki ZSTI Gliwice","ZSTI Gliwice 2019"],o=["https://minimus.pl/","http://ksmdg.opw.pl/","golden-style.html","gaming-night.html"],r=["minimus-min.png","ksm-min.png","golden_style-min.png","gaming_night-min.png"],n=document.querySelector("#slides-desktop .container > a"),i=document.querySelector("#slides-desktop .container figure a"),a=document.querySelector("#slides-desktop .container figure a img"),c=document.querySelector("#slides-desktop .bg-text"),l=document.querySelector("#prev"),s=document.querySelector("#next");let d,y=0;s.addEventListener("click",()=>{d=0,y>=3&&(y=-1),n.style.transition="all 0.4s ease-in-out",y++,n.style.transform="translateY(-100px)",n.style.opacity="0",c.style.opacity="0",a.style.transform="translateX("+(a.width-a.width/5)+"px)",n.ontransitionend=(()=>{d++,2==d&&(n.style.transition="none",n.style.transform="translateY(100px)",n.innerHTML="<span>"+t[y]+"</span><br>"+e[y],n.href=o[y],i.href=o[y],c.innerHTML=y+1+"/4",a.src="img/"+r[y],setTimeout(()=>{n.style.transition="all 0.4s ease-in-out",n.style.opacity="1",c.style.opacity="1",n.style.transform="translateY(0px)",a.style.transform="translateX(0px)"}))})}),l.addEventListener("click",()=>{d=0,y<=0&&(y=4),n.style.transition="all 0.4s ease-in-out",y--,n.style.transform="translateY(100px)",n.style.opacity="0",c.style.opacity="0",a.style.transform="translateX("+(a.width-a.width/5)+"px)",n.ontransitionend=(()=>{d++,2==d&&(n.style.transition="none",n.style.transform="translateY(-100px)",n.innerHTML="<span>"+t[y]+"</span><br>"+e[y],n.href=o[y],i.href=o[y],c.innerHTML=y+1+"/4",a.src="img/"+r[y],setTimeout(()=>{n.style.transition="all 0.4s ease-in-out",n.style.opacity="1",c.style.opacity="1",n.style.transform="translateY(0px)",a.style.transform="translateX(0px)"}))})})}