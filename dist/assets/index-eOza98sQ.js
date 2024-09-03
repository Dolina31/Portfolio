(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))t(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&t(a)}).observe(document,{childList:!0,subtree:!0});function c(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(r){if(r.ep)return;r.ep=!0;const o=c(r);fetch(r.href,o)}})();const _=document.querySelectorAll(".card"),f=document.querySelector(".parallax_img"),p=document.querySelector(".parallax-skills_img"),v=document.querySelector(".return-home-icon"),y=document.querySelector(".navbar"),q=document.querySelector(".navbar-icon"),m=document.querySelector(".navbar_menu"),x=document.querySelectorAll(".navbar_menu_link"),w=document.querySelector(".title"),l=document.querySelector(".about_image"),i=document.querySelector(".about_text p"),b=document.querySelectorAll(".skills_images_wrapper"),d=document.querySelector(".skills_content"),g=document.querySelector(".contact"),h=document.querySelectorAll(".contact_link");window.addEventListener("load",()=>{y.style.opacity="1",y.style.padding="20px 0px",x.forEach((e,s)=>{setTimeout(()=>{e.style.opacity="1",e.style.transform="translateY(0)"},s*100+100)}),w.style.opacity="1"});_.forEach(e=>{const s=e.querySelector(".card_infos-section"),c=e.querySelector(".card_preview-section"),t=e.querySelector(".card_infos-section_content .card_infos-section_buttons"),r=window.matchMedia("(max-width:530px)"),o=e.querySelector(".card_title");e.addEventListener("click",a=>{t.contains(a.target)||(c.style.opacity==="0"?(c.style.opacity="1",s.style.opacity="0",o.style.opacity="1"):(r.matches&&(o.style.opacity="0"),c.style.opacity="0",s.style.opacity="1"),s.style.opacity==="1"?t.style.display="flex":t.style.display="none")})});let u=!1;q.addEventListener("click",()=>{u?m.style.display="none":m.style.display="flex",u=!u});window.addEventListener("scroll",()=>{f.style.transform=`translateY(${scrollY*.4}px)`,p.style.transform=`translateY(-${scrollY*.4}px)`,v.style.visibility="visible"});const E={root:null,rootMargin:"0px",threshold:.35},n=new IntersectionObserver(e=>{e.forEach(s=>{if(s.isIntersecting)switch(s.target){case l:l.style.transform="translateX(0)",l.style.opacity="1";break;case i:i.style.transform="translateY(0)",i.style.opacity="1";break;case d:d.style.width="93%",d.style.padding="15px",setTimeout(()=>{b.forEach((c,t)=>{setTimeout(()=>{c.style.transform="translateY(0)",c.style.opacity="1"},t*100+100)})},100);break;case g:h.forEach((c,t)=>{setTimeout(()=>{c.style.opacity="1",c.style.transform="translateY(0)"},t*300+300)});break}})},E);n.observe(f);n.observe(p);n.observe(v);n.observe(l);n.observe(i);n.observe(g);b.forEach(e=>{n.observe(e)});n.observe(d);h.forEach(e=>{n.observe(e)});fetch("/projects.json").then(e=>e.json()).then(e=>{const s=document.querySelector(".card-flex");console.log(s);let c="";e.forEach(t=>{const r=t.resume.replace(/\n/g,"<br>"),o=Object.entries(t.tags).map(([S,L])=>`<div class="card_tag">${S}</div>`).join(" "),a=t.url?`<a href="${t.url}" target="_blank">voir le site</a>`:"";c+=`
        <div class="card">
          <div class="card_content">
            <div class="card_cover-img"> 
              <img src="${t.cover}" alt="${t.coverAlt}">
            </div> 
            <div class="card_tags">${o}</div>
            <h3>${t.title}</h3>
            <p>${r}</p>
            <div class="card_buttons">
              ${a}
              <a href="${t.codeUrl}" target="_blank">voir le code</a>
            </div>
          </div>
        </div>
      `}),s.innerHTML=c}).catch(e=>{console.error("Erreur lors du chargement des projets:",e)});
