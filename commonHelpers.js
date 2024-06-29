import{S as f,i as g}from"./assets/vendor-0fc460d7.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}})();function u(i){const e="44666739-d0cf1ddb18f9d30146fa54081",s="https://pixabay.com/api/",r=new URLSearchParams({key:e,q:i,image_type:"photo",orientation:"horizontal",safesearch:"true"});return console.log(r.toString()),fetch(`${s}?${r}`).then(t=>{if(!t.ok)throw new Error(t.statusText);return t.json()})}function d(i){return i.map(e=>`<li class="gallery-item">
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
        </li>`).join("")}const m=document.querySelector(".form"),l=document.querySelector(".gallery"),n=document.querySelector(".loader"),h=new f(".gallery a",{captionsData:"alt",captionDelay:250});function c(i){g.error({message:i,maxWidth:"432px",position:"topRight",messageSize:16,backgroundColor:"#ef4040",titleColor:"#FFFFFF",messageColor:"#FFFFFF",theme:"dark"})}function p(i){i&&(m.reset(),l.innerHTML="",n.style.display="block",u(i).then(e=>{const s=e.hits;s.length?(l.innerHTML=d(s),h.refresh()):c("Sorry, there are no images matching your search query. Please try again!")}).catch(e=>c(e)).finally(()=>n.style.display="none"))}m.addEventListener("submit",i=>{i.preventDefault();const e=i.target.elements.search.value;p(e)});
//# sourceMappingURL=commonHelpers.js.map
