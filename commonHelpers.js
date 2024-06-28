import{S as f,i as g}from"./assets/vendor-0fc460d7.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();function u(i){const e="44666739-d0cf1ddb18f9d30146fa54081",o="https://pixabay.com/api/",s=new URLSearchParams({key:e,q:i,image_type:"photo",orientation:"horizontal",safesearch:"true"});return console.log(s.toString()),fetch(`${o}?${s}`).then(t=>{if(!t.ok)throw new Error(t.statusText);return t.json()})}function d(i){return i.map(e=>`<li class="gallery-item">
          <div class="gallery-image-tumb">
            <a class="gallery-link" href="${e.largeImageURL}">
                <img class="gallery-image" src="${e.webformatURL}" alt="${e.tags}" />
            </a>
          </div>
            <ul class="image-info">
              <li class="image-info-item">
                <h4 class="image-info-item-title">Likes</h4>
                <p class="image-info-item-text">${e.likes}</p>
              </li>
              <li class="image-info-item">
                <h4 class="image-info-item-title">Views</h4>
                <p class="image-info-item-text">${e.views}</p>
              </li>
              <li class="image-info-item">
                <h4 class="image-info-item-title">Comments</h4>
                <p class="image-info-item-text">${e.comments}</p>
              </li>
              <li class="image-info-item">
                <h4 class="image-info-item-title">Downloads</h4>
                <p class="image-info-item-text">${e.downloads}</p>
              </li>
            </ul>
        </li>`).join("")}const m=document.querySelector(".form"),l=document.querySelector(".gallery"),n=document.querySelector(".loader"),h=new f(".gallery a",{captionsData:"alt",captionDelay:250});function c(i){g.error({iconUrl:iconError,message:i,maxWidth:"432px",position:"topRight",messageSize:16,backgroundColor:"#ef4040",titleColor:"#FFFFFF",messageColor:"#FFFFFF",theme:"dark"})}function p(i){i&&(m.reset(),l.innerHTML="",n.style.display="grid",u(i).then(e=>{const o=e.hits;o.length?(l.innerHTML=d(o),h.refresh()):c("Sorry, there are no images matching your search query. Please try again!")}).catch(e=>c(e)).finally(()=>n.style.display="none"))}m.addEventListener("submit",i=>{i.preventDefault();const e=i.target.elements.search.value;p(e)});
//# sourceMappingURL=commonHelpers.js.map
