(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))l(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function a(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function l(i){if(i.ep)return;i.ep=!0;const n=a(i);fetch(i.href,n)}})();function K(t){t.addEventListener("input",()=>{const a=t.value.replace(/\D/g,"").slice(0,11);t.value=a.replace(/^(\d{0,3})(\d{0,3})(\d{0,3})(\d{0,2})/,(l,i,n,o,u)=>{let r="";return i&&(r+=i),n&&(r+="."+n),o&&(r+="."+o),u&&(r+="-"+u),r})})}function ee(t){t.addEventListener("input",()=>{let e=t.value.replace(/\D/g,"");e.length>11&&(e=e.slice(0,11));let a="";e.length>0&&(a="("+e.slice(0,2),e.length>2&&(a+=") "+e.slice(2,e.length>10?7:6),e.length>(e.length>10?7:6)&&(a+="-"+e.slice(e.length>10?7:6)))),t.value=a})}const te=t=>{const e=["name","email","cpf","phone","page_title","page_url","utm_source","utm_medium","utm_campaign","utm_content","utm_term","utm_id","gad_source","gclid","website"];return Object.entries(t).filter(l=>!e.includes(l[0])).map(l=>({[l[0]]:l[1]})).reduce((l,i)=>{const n=Object.keys(i)[0];return l[n]=i[n],l},{})};function M(){const t=document.getElementById("form-lcbank-loading");return{startLoading:()=>t.classList.add("active"),endLoading:()=>t.classList.remove("active"),template:`<div class="form-lcbank-loading" id="form-lcbank-loading">
  <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDI0IDI0Ij48Y2lyY2xlIGN4PSIxMiIgY3k9IjMiIHI9IjAiIGZpbGw9ImN1cnJlbnRDb2xvciI+PGFuaW1hdGUgaWQ9InN2Z1NwaW5uZXJzNkRvdHNTY2FsZTAiIGZpbGw9ImZyZWV6ZSIgYXR0cmlidXRlTmFtZT0iciIgYmVnaW49IjA7c3ZnU3Bpbm5lcnM2RG90c1NjYWxlMi5lbmQtMC41cyIgY2FsY01vZGU9InNwbGluZSIgZHVyPSIwLjZzIiBrZXlTcGxpbmVzPSIwLDEsMCwxOy41MywwLC42MSwuNzMiIGtleVRpbWVzPSIwOy4yOzEiIHZhbHVlcz0iMDsyOzAiLz48L2NpcmNsZT48Y2lyY2xlIGN4PSIxNi41IiBjeT0iNC4yMSIgcj0iMCIgZmlsbD0iY3VycmVudENvbG9yIj48YW5pbWF0ZSBpZD0ic3ZnU3Bpbm5lcnM2RG90c1NjYWxlMSIgZmlsbD0iZnJlZXplIiBhdHRyaWJ1dGVOYW1lPSJyIiBiZWdpbj0ic3ZnU3Bpbm5lcnM2RG90c1NjYWxlMC5iZWdpbiswLjFzIiBjYWxjTW9kZT0ic3BsaW5lIiBkdXI9IjAuNnMiIGtleVNwbGluZXM9IjAsMSwwLDE7LjUzLDAsLjYxLC43MyIga2V5VGltZXM9IjA7LjI7MSIgdmFsdWVzPSIwOzI7MCIvPjwvY2lyY2xlPjxjaXJjbGUgY3g9IjcuNSIgY3k9IjQuMjEiIHI9IjAiIGZpbGw9ImN1cnJlbnRDb2xvciI+PGFuaW1hdGUgaWQ9InN2Z1NwaW5uZXJzNkRvdHNTY2FsZTIiIGZpbGw9ImZyZWV6ZSIgYXR0cmlidXRlTmFtZT0iciIgYmVnaW49InN2Z1NwaW5uZXJzNkRvdHNTY2FsZTQuYmVnaW4rMC4xcyIgY2FsY01vZGU9InNwbGluZSIgZHVyPSIwLjZzIiBrZXlTcGxpbmVzPSIwLDEsMCwxOy41MywwLC42MSwuNzMiIGtleVRpbWVzPSIwOy4yOzEiIHZhbHVlcz0iMDsyOzAiLz48L2NpcmNsZT48Y2lyY2xlIGN4PSIxOS43OSIgY3k9IjcuNSIgcj0iMCIgZmlsbD0iY3VycmVudENvbG9yIj48YW5pbWF0ZSBpZD0ic3ZnU3Bpbm5lcnM2RG90c1NjYWxlMyIgZmlsbD0iZnJlZXplIiBhdHRyaWJ1dGVOYW1lPSJyIiBiZWdpbj0ic3ZnU3Bpbm5lcnM2RG90c1NjYWxlMS5iZWdpbiswLjFzIiBjYWxjTW9kZT0ic3BsaW5lIiBkdXI9IjAuNnMiIGtleVNwbGluZXM9IjAsMSwwLDE7LjUzLDAsLjYxLC43MyIga2V5VGltZXM9IjA7LjI7MSIgdmFsdWVzPSIwOzI7MCIvPjwvY2lyY2xlPjxjaXJjbGUgY3g9IjQuMjEiIGN5PSI3LjUiIHI9IjAiIGZpbGw9ImN1cnJlbnRDb2xvciI+PGFuaW1hdGUgaWQ9InN2Z1NwaW5uZXJzNkRvdHNTY2FsZTQiIGZpbGw9ImZyZWV6ZSIgYXR0cmlidXRlTmFtZT0iciIgYmVnaW49InN2Z1NwaW5uZXJzNkRvdHNTY2FsZTYuYmVnaW4rMC4xcyIgY2FsY01vZGU9InNwbGluZSIgZHVyPSIwLjZzIiBrZXlTcGxpbmVzPSIwLDEsMCwxOy41MywwLC42MSwuNzMiIGtleVRpbWVzPSIwOy4yOzEiIHZhbHVlcz0iMDsyOzAiLz48L2NpcmNsZT48Y2lyY2xlIGN4PSIyMSIgY3k9IjEyIiByPSIwIiBmaWxsPSJjdXJyZW50Q29sb3IiPjxhbmltYXRlIGlkPSJzdmdTcGlubmVyczZEb3RzU2NhbGU1IiBmaWxsPSJmcmVlemUiIGF0dHJpYnV0ZU5hbWU9InIiIGJlZ2luPSJzdmdTcGlubmVyczZEb3RzU2NhbGUzLmJlZ2luKzAuMXMiIGNhbGNNb2RlPSJzcGxpbmUiIGR1cj0iMC42cyIga2V5U3BsaW5lcz0iMCwxLDAsMTsuNTMsMCwuNjEsLjczIiBrZXlUaW1lcz0iMDsuMjsxIiB2YWx1ZXM9IjA7MjswIi8+PC9jaXJjbGU+PGNpcmNsZSBjeD0iMyIgY3k9IjEyIiByPSIwIiBmaWxsPSJjdXJyZW50Q29sb3IiPjxhbmltYXRlIGlkPSJzdmdTcGlubmVyczZEb3RzU2NhbGU2IiBmaWxsPSJmcmVlemUiIGF0dHJpYnV0ZU5hbWU9InIiIGJlZ2luPSJzdmdTcGlubmVyczZEb3RzU2NhbGU4LmJlZ2luKzAuMXMiIGNhbGNNb2RlPSJzcGxpbmUiIGR1cj0iMC42cyIga2V5U3BsaW5lcz0iMCwxLDAsMTsuNTMsMCwuNjEsLjczIiBrZXlUaW1lcz0iMDsuMjsxIiB2YWx1ZXM9IjA7MjswIi8+PC9jaXJjbGU+PGNpcmNsZSBjeD0iMTkuNzkiIGN5PSIxNi41IiByPSIwIiBmaWxsPSJjdXJyZW50Q29sb3IiPjxhbmltYXRlIGlkPSJzdmdTcGlubmVyczZEb3RzU2NhbGU3IiBmaWxsPSJmcmVlemUiIGF0dHJpYnV0ZU5hbWU9InIiIGJlZ2luPSJzdmdTcGlubmVyczZEb3RzU2NhbGU1LmJlZ2luKzAuMXMiIGNhbGNNb2RlPSJzcGxpbmUiIGR1cj0iMC42cyIga2V5U3BsaW5lcz0iMCwxLDAsMTsuNTMsMCwuNjEsLjczIiBrZXlUaW1lcz0iMDsuMjsxIiB2YWx1ZXM9IjA7MjswIi8+PC9jaXJjbGU+PGNpcmNsZSBjeD0iNC4yMSIgY3k9IjE2LjUiIHI9IjAiIGZpbGw9ImN1cnJlbnRDb2xvciI+PGFuaW1hdGUgaWQ9InN2Z1NwaW5uZXJzNkRvdHNTY2FsZTgiIGZpbGw9ImZyZWV6ZSIgYXR0cmlidXRlTmFtZT0iciIgYmVnaW49InN2Z1NwaW5uZXJzNkRvdHNTY2FsZWEuYmVnaW4rMC4xcyIgY2FsY01vZGU9InNwbGluZSIgZHVyPSIwLjZzIiBrZXlTcGxpbmVzPSIwLDEsMCwxOy41MywwLC42MSwuNzMiIGtleVRpbWVzPSIwOy4yOzEiIHZhbHVlcz0iMDsyOzAiLz48L2NpcmNsZT48Y2lyY2xlIGN4PSIxNi41IiBjeT0iMTkuNzkiIHI9IjAiIGZpbGw9ImN1cnJlbnRDb2xvciI+PGFuaW1hdGUgaWQ9InN2Z1NwaW5uZXJzNkRvdHNTY2FsZTkiIGZpbGw9ImZyZWV6ZSIgYXR0cmlidXRlTmFtZT0iciIgYmVnaW49InN2Z1NwaW5uZXJzNkRvdHNTY2FsZTcuYmVnaW4rMC4xcyIgY2FsY01vZGU9InNwbGluZSIgZHVyPSIwLjZzIiBrZXlTcGxpbmVzPSIwLDEsMCwxOy41MywwLC42MSwuNzMiIGtleVRpbWVzPSIwOy4yOzEiIHZhbHVlcz0iMDsyOzAiLz48L2NpcmNsZT48Y2lyY2xlIGN4PSI3LjUiIGN5PSIxOS43OSIgcj0iMCIgZmlsbD0iY3VycmVudENvbG9yIj48YW5pbWF0ZSBpZD0ic3ZnU3Bpbm5lcnM2RG90c1NjYWxlYSIgZmlsbD0iZnJlZXplIiBhdHRyaWJ1dGVOYW1lPSJyIiBiZWdpbj0ic3ZnU3Bpbm5lcnM2RG90c1NjYWxlYi5iZWdpbiswLjFzIiBjYWxjTW9kZT0ic3BsaW5lIiBkdXI9IjAuNnMiIGtleVNwbGluZXM9IjAsMSwwLDE7LjUzLDAsLjYxLC43MyIga2V5VGltZXM9IjA7LjI7MSIgdmFsdWVzPSIwOzI7MCIvPjwvY2lyY2xlPjxjaXJjbGUgY3g9IjEyIiBjeT0iMjEiIHI9IjAiIGZpbGw9ImN1cnJlbnRDb2xvciI+PGFuaW1hdGUgaWQ9InN2Z1NwaW5uZXJzNkRvdHNTY2FsZWIiIGZpbGw9ImZyZWV6ZSIgYXR0cmlidXRlTmFtZT0iciIgYmVnaW49InN2Z1NwaW5uZXJzNkRvdHNTY2FsZTkuYmVnaW4rMC4xcyIgY2FsY01vZGU9InNwbGluZSIgZHVyPSIwLjZzIiBrZXlTcGxpbmVzPSIwLDEsMCwxOy41MywwLC42MSwuNzMiIGtleVRpbWVzPSIwOy4yOzEiIHZhbHVlcz0iMDsyOzAiLz48L2NpcmNsZT48L3N2Zz4=" alt="loading" width="48" height="48" loading="lazy" class="form-lcbank-loading-img"></div>`}}function z(){const t=document.getElementById("form-lcbank-result");return{start:()=>t.classList.add("active"),end:()=>t.classList.remove("active"),template:`<div class="form-lcbank-result" id="form-lcbank-result">
    <div class="form-lcbank-result-info">
      <h2 class="form-lcbank-result-title" id="form-lcbank-result-title"></h2>
      <p class="form-lcbank-result-text" id="form-lcbank-result-text"></p>
    </div>
  </div>`,title:()=>t.querySelector("#form-lcbank-result-title"),text:()=>t.querySelector("#form-lcbank-result-text")}}const le=async(t,e)=>{const{start:a,title:l,text:i,end:n}=z();await fetch("https://lcbform.com.br/wp-json/api/contact-form",{method:"POST",body:JSON.stringify(t)}).then(o=>o.json()).then(o=>{M().endLoading(),o.status!==200&&(l().innerHTML=o.title,i().innerHTML=o.text,a()),o.status===200&&(n(),M().endLoading(),window.location.href=e)})},g=t=>{const{input:e,validator:a}=t;if(!e){console.error("Por favor, adicione um input válido");return}if(!a){console.error("Por favor, adicione uma função validadora");return}return a(e.value)?(e.classList.add("success"),e.classList.remove("error"),!0):(e.classList.add("error"),e.classList.remove("success"),!1)},S=t=>t.classList.remove("error","success");function x(t){if(t=t.replace(/[^\d]+/g,""),t.length!==11||/^(\d)\1+$/.test(t))return!1;let e=0;for(let l=0;l<9;l++)e+=parseInt(t.charAt(l))*(10-l);let a=11-e%11;if((a===10||a===11)&&(a=0),a!==parseInt(t.charAt(9)))return!1;e=0;for(let l=0;l<10;l++)e+=parseInt(t.charAt(l))*(11-l);return a=11-e%11,(a===10||a===11)&&(a=0),a===parseInt(t.charAt(10))}const P=t=>/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(t),ae=(t,e)=>{if(!t)return!1;const{hasEmail:a,requiredEmail:l}=e;return!!(a&&l||a&&!l&&t.value.length)};function L(t){return!!t.length}function W(t){return/^\(\d{2}\) \d{4,5}-\d{4}$/.test(t)}const ie=t=>{const{requiredEmail:e,goTo:a,hasEmail:l}=t,i=document.getElementById("form-lcbank");if(i){const n=s=>{const b=s.querySelectorAll("input"),m={};return b.forEach(f=>{m[f.name]=f.value}),m},o=document.getElementById("form-lcbank-name"),u=document.getElementById("form-lcbank-cpf"),r=document.getElementById("form-lcbank-phone"),I=document.getElementById("form-lcbank-email")??null,c=s=>s.classList.remove("error","success");i.addEventListener("submit",function(s){s.preventDefault();let b=0;const m=n(i);return[o,u,r,I].forEach(d=>d&&c(d)),m.extra=JSON.stringify(te(m))??"",[{input:o,validator:L},{input:I,validator:P},{input:u,validator:x},{input:r,validator:W}].map(({input:d,validator:Z},N)=>{d&&N!==1&&(g({input:d,validator:Z})||b++),ae(d,{hasEmail:l,requiredEmail:e})&&(g({input:d,validator:Z})||b++)}),b>0?console.log("tem erros no form"):([o,u,r,I].forEach(d=>{d&&(d.disabled=!0)}),M().startLoading(),(!m.email||m.email.length===0)&&(m.email=`${m.cpf}@gmail.com`),le(m,a))})}},ne=t=>Object.entries(t).filter(([e])=>e.startsWith("input")).map(([e,a])=>({key:e.split("input")[1].toLowerCase(),value:a}));function oe(){const t=document.getElementById("form-lcbank-modal"),e=document.getElementById("form-lcbank-label-name"),a=document.getElementById("form-lcbank-close");document.querySelectorAll("[data-call-to-action]").forEach(i=>{i.addEventListener("click",function(n){n.preventDefault(),t==null||t.classList.add("active"),e.focus()})}),a.addEventListener("click",function(i){i.preventDefault(),t==null||t.classList.remove("active"),document.getElementById("form-lcbank").reset(),document.querySelectorAll('input[type="text"], input[type="email"]').forEach(o=>S(o))})}const re=t=>{const a=(t.startsWith("?")?t.substring(1):t).split("&"),l=[];return a.forEach(i=>{const[n,o]=i.split("=");l.push({key:decodeURIComponent(n),value:decodeURIComponent(o)})}),l},p=()=>({input:l=>{const{label:i,placeholder:n,errorMessage:o,type:u,name:r,required:I,helper:c}=l;return`<div class="form-lcbank-field"><label class="form-lcbank-label" for="form-lcbank-${r}" id="form-lcbank-label-${r}">${i} ${I&&I===!0?'<span class="form-lcbank-required">*</span>':""}</label><input type="${u}" class="form-lcbank-input" name="${r}" id="form-lcbank-${r}" placeholder="${n}"><span class="form-lcbank-error">${o}</span>${c&&c.length?`<span class="form-lcbank-helper">${c}</span>`:""}</div>`},closeModal:()=>'<button type="button" id="form-lcbank-close" class="form-lcbank-close"><img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE0LjU3MTQgMS44NDk4OUwxMy43NjU2IDFMOC4wMDAwMiA3LjA4MDkxTDIuMjM0NDEgMUwxLjQyODU5IDEuODQ5ODlMNy4xOTQxOSA3LjkzMDhMMS40Mjg1OSAxNC4wMTE3TDIuMjM0NDEgMTQuODYxNkw4LjAwMDAyIDguNzgwN0wxMy43NjU2IDE0Ljg2MTZMMTQuNTcxNCAxNC4wMTE3TDguODA1ODQgNy45MzA4TDE0LjU3MTQgMS44NDk4OVoiIGZpbGw9IiMyMjIyMjIiIHN0cm9rZT0iIzIyMjIyMiIvPgo8L3N2Zz4K" alt="close" width="14" height="14" loading="lazy" class="form-lcbank-close-img"></button>',submitButton:l=>`<div class="form-lcbank-field"><button type="submit" id="form-lcbank-label-button" class="form-lcbank-label-button">${l}</button></div>`}),y=t=>{const{input:e,validator:a,hasEmail:l,requiredEmail:i,isEmail:n}=t;if(!e){console.error("Input não está validado");return}const o=()=>{if(!n)return g({input:e,validator:a});if(l&&i)return g({input:e,validator:a});if(l&&e.value.length)return g({input:e,validator:a});if(l&&e.value.length===0)return S(e)};return e.addEventListener("blur",o),()=>{e.removeEventListener("blur",o)}},ce=()=>{var G,w;const t=document.querySelector("#form-lcbank-apply");if(!t){console.error("O Elemento #form-lcbank-apply não existe na página");return}const e=t.dataset,a=(G=e.pageTitle)==null?void 0:G.length,l=(w=e.website)==null?void 0:w.length;if(!a){console.error('É necessário atribuir o título da página com data-page-title="Título da página"');return}if(!l){console.error('É necessário atribuir o website com data-website="Título do website"');return}const i=window.location.href;let n="",o=[...ne(e),{key:"page_title",value:e.pageTitle},{key:"page_url",value:i},{key:"website",value:e.website}];const u=window.location.search;u&&(o=[...o,...re(u)]),o.map(({key:Q,value:_})=>n+=`<input type="hidden" name="${Q}" value="${_}" />`);const r=e.hidePlaceholder==="true",I=e.goTo??"/obrigado",c=e.hasEmail==="true",s=e.requiredEmail!=="false",b=e.company??"LC Bank",m=e.logoCompany??"https://lcbform.com.br/wp-content/uploads/2024/08/logotipo.png",f=e.imageTitle??`Solicite a antecipação
 e receba o dinheiro da
 sua RPV em 24h!`,d=e.titleMobile??"Antecipe agora<br> o dinheiro da sua RPV",Z=e.imageTitle??"*Após a assinatura do contrato. ",N=e.labelName??"Nome Completo",k=e.labelCpf??"CPF",T=e.labelPhone??"WhatsApp",Y=e.labelEmail??"E-mail",E=e.errorName??"Nome é um campo obrigatório",V=e.errorCpf??"CPF é um campo obrigatório",B=e.errorPhone??"Telefone é um campo obrigatório",D=e.errorPhone??"E-mail é um campo obrigatório",C=r?"":e.placeholderName??"Ex: José Maria da Silva",U=r?"":e.placeholderCpf??"000.000.000-00",A=r?"":e.placeholderPhone??"Telefone",R=r?"":e.placeholderPhone??"E-mail",J=e.labelButton??"Bora antecipar",F=e.modalTitle??`Complete os campos para que nossos 
 especialistas consultem o seu processo`,X=e.modalPrivacy??"Ao enviar meus dados, eu concordo com a",O=e.modalPrivacyLink??"https://google.com.br",H=e.modalPrivacyText??"Política de Privacidade",$=`<div class="form-lcbank-modal" id="form-lcbank-modal">
    <div class="form-lcbank-modal-block">
      ${p().closeModal()}
      <div class="form-lcbank-image-box">
        <div class="form-lcbank-image-box-info">
          <img src="${m}" alt="${b}" class="form-lcbank-image-logo">
          <p class="form-lcbank-image-logo-title">${f}</p>
          </div>
          <p class="form-lcbank-image-logo-text">${Z}</p>
      </div>
      <div class="form-lcbank-master">
        <div class="form-lcbank-master-container">
          <h2 class="form-lcbank-master-mobile-title">${d}</h2>
          <p class="form-lcbank-master-title">${F}</p>
          <form action="#" method="post" novalidate id="form-lcbank" class="form-lcbank-form">
            ${p().input({type:"text",required:!0,name:"name",placeholder:C,errorMessage:E,label:N})}
            ${c?p().input({type:"email",required:s,name:"email",placeholder:R,errorMessage:D,label:Y}):""}
            ${p().input({type:"text",required:!0,name:"cpf",placeholder:U,errorMessage:V,label:k,helper:"O seu CPF nos ajuda a localizar e analisar o seu processo."})}
            ${p().input({type:"text",required:!0,name:"phone",placeholder:A,errorMessage:B,label:T,helper:"Insira um numero válido."})}
            ${n}
            ${p().submitButton(J)}
            ${M().template}
            ${z().template}
          </form>
          <p class="form-lcbank-master-privacy">${X} <a href="${O}" target="_blank" rel="noopener noreferrer">${H}</a></p>
        </div>
      </div>
    </div>
  </div>`;t.innerHTML=$,oe();const j=document.querySelector("#form-lcbank-cpf"),h=document.querySelector("#form-lcbank-phone"),q=document.querySelector("#form-lcbank-name"),v=document.querySelector("#form-lcbank-email")??null;K(j),ee(h),y({input:j,validator:x,hasEmail:c,requiredEmail:s,isEmail:!1}),y({input:h,validator:W,hasEmail:c,requiredEmail:s,isEmail:!1}),y({input:q,validator:L,hasEmail:c,requiredEmail:s,isEmail:!1}),v&&y({input:v,validator:P,hasEmail:c,requiredEmail:s,isEmail:!0}),ie({goTo:I,hasEmail:c,requiredEmail:s})};ce();
