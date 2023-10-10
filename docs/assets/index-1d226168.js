(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const s=async()=>(await(await fetch("https://api.breakingbadquotes.xyz/v1/quotes")).json())[0],a=async o=>{document.querySelector("#app-title").innerHTML="Breaking Bad App",o.innerHTML="Loading...";const n=document.createElement("blockquote"),i=document.createElement("h3"),r=document.createElement("button");r.innerHTML="Next Quote";const e=t=>{n.innerHTML=t.quote,i.innerHTML=t.author,o.replaceChildren(n,i,r)};s().then(e),r.addEventListener("click",()=>{r.disabled=!0,s().then(e).then(()=>{r.disabled=!1})})},l="https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2018/01/breaking_bad_vince_gilligan_amc.jpg";document.querySelector("#app").innerHTML=`
  <div>

    
    <h1 id="app-title">Hello Vite!</h1>
    <img src="${l}" height="370" alt="BAD"> 
    <div class="card">
    </div>
  
  </div>
`;const u=document.querySelector(".card");a(u);
