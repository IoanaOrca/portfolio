(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const s=function(){window.addEventListener("hashchange",function(){window.scrollTo(window.scrollX,window.scrollY-50)}),document.querySelectorAll('a[href^="#"]').forEach(i=>{i.addEventListener("click",function(o){o.preventDefault(),document.querySelector(this.getAttribute("href")).scrollIntoView({behavior:"smooth"})})})};function l(){const i=getComputedStyle(document.documentElement).getPropertyValue("--bp-tablet"),o=window.matchMedia(`(max-width: ${i})`),n=document.querySelector(".hamburger"),r=document.querySelector(".navbar__list"),e=document.querySelectorAll(".navbar__link");o.matches&&(n.addEventListener("click",()=>{n.classList.toggle("is-active"),r.classList.toggle("navbar__mobile")}),e.forEach(function(t){t.addEventListener("click",()=>{n.classList.remove("is-active"),r.classList.remove("navbar__mobile")})}))}document.addEventListener("DOMContentLoaded",()=>{s(),l()});