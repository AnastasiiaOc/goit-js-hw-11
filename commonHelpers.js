import{S as f,i as g}from"./assets/vendor-0fc460d7.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();function u(i){const t="44666739-d0cf1ddb18f9d30146fa54081",o="https://pixabay.com/api/",s=new URLSearchParams({key:t,q:i,image_type:"photo",orientation:"horizontal",safesearch:"true"});return console.log(s.toString()),fetch(`${o}?${s}`).then(e=>{if(!e.ok)throw new Error(e.statusText);return e.json()}).catch(e=>{alert("Incorrect request!")})}function d(i){return i.map(t=>`<li class="gallery-item">
          <div class="gallery-image-tumb">
            <a class="gallery-link" href="${t.largeImageURL}">
                <img class="gallery-image" src="${t.webformatURL}" alt="${t.tags}" />
            </a>
          </div>
            <ul class="image-info">
              <li class="image-info-item">
                <h4 class="image-info-item-title">Likes</h4>
                <p class="image-info-item-text">${t.likes}</p>
              </li>
              <li class="image-info-item">
                <h4 class="image-info-item-title">Views</h4>
                <p class="image-info-item-text">${t.views}</p>
              </li>
              <li class="image-info-item">
                <h4 class="image-info-item-title">Comments</h4>
                <p class="image-info-item-text">${t.comments}</p>
              </li>
              <li class="image-info-item">
                <h4 class="image-info-item-title">Downloads</h4>
                <p class="image-info-item-text">${t.downloads}</p>
              </li>
            </ul>
        </li>`).join("")}const m=document.querySelector(".form"),l=document.querySelector(".gallery"),n=document.querySelector(".loader"),h=new f(".gallery a",{captionsData:"alt",captionDelay:250});function c(i){g.error({message:i,maxWidth:"432px",position:"topRight",messageSize:16,backgroundColor:"#ef4040",titleColor:"#FFFFFF",messageColor:"#FFFFFF",theme:"dark"})}function p(i){i&&(m.reset(),l.innerHTML="",n.style.display="block",u(i).then(t=>{const o=t.hits;o.length?(l.innerHTML=d(o),h.refresh()):c("Sorry, there are no images matching your search query. Please try again!")}).catch(t=>c(t)).finally(()=>n.style.display="none"))}m.addEventListener("submit",i=>{i.preventDefault();const t=i.target.elements.search.value;p(t)});
//# sourceMappingURL=commonHelpers.js.map
