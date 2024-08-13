(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))l(a);new MutationObserver(a=>{for(const n of a)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function i(a){const n={};return a.integrity&&(n.integrity=a.integrity),a.referrerPolicy&&(n.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?n.credentials="include":a.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function l(a){if(a.ep)return;a.ep=!0;const n=i(a);fetch(a.href,n)}})();function A(t){t.addEventListener("input",()=>{const i=t.value.replace(/\D/g,"").slice(0,11);t.value=i.replace(/^(\d{0,3})(\d{0,3})(\d{0,3})(\d{0,2})/,(l,a,n,c,s)=>{let o="";return a&&(o+=a),n&&(o+="."+n),c&&(o+="."+c),s&&(o+="-"+s),o})})}function R(t){t.addEventListener("input",()=>{let e=t.value.replace(/\D/g,"");e.length>11&&(e=e.slice(0,11));let i="";e.length>0&&(i="("+e.slice(0,2),e.length>2&&(i+=") "+e.slice(2,e.length>10?7:6),e.length>(e.length>10?7:6)&&(i+="-"+e.slice(e.length>10?7:6)))),t.value=i})}const J=t=>{const e=["name","email","cpf","phone","page_title","page_url","utm_source","utm_medium","utm_campaign","utm_content","utm_term","utm_id","gad_source","gclid"];return Object.entries(t).filter(l=>!e.includes(l[0])).map(l=>({[l[0]]:l[1]})).reduce((l,a)=>{const n=Object.keys(a)[0];return l[n]=a[n],l},{})};function Z(){const t=document.getElementById("form-lcbank-loading");return{startLoading:()=>t.classList.add("active"),endLoading:()=>t.classList.remove("active"),template:`<div class="form-lcbank-loading" id="form-lcbank-loading">
  <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDI0IDI0Ij48Y2lyY2xlIGN4PSIxMiIgY3k9IjMiIHI9IjAiIGZpbGw9ImN1cnJlbnRDb2xvciI+PGFuaW1hdGUgaWQ9InN2Z1NwaW5uZXJzNkRvdHNTY2FsZTAiIGZpbGw9ImZyZWV6ZSIgYXR0cmlidXRlTmFtZT0iciIgYmVnaW49IjA7c3ZnU3Bpbm5lcnM2RG90c1NjYWxlMi5lbmQtMC41cyIgY2FsY01vZGU9InNwbGluZSIgZHVyPSIwLjZzIiBrZXlTcGxpbmVzPSIwLDEsMCwxOy41MywwLC42MSwuNzMiIGtleVRpbWVzPSIwOy4yOzEiIHZhbHVlcz0iMDsyOzAiLz48L2NpcmNsZT48Y2lyY2xlIGN4PSIxNi41IiBjeT0iNC4yMSIgcj0iMCIgZmlsbD0iY3VycmVudENvbG9yIj48YW5pbWF0ZSBpZD0ic3ZnU3Bpbm5lcnM2RG90c1NjYWxlMSIgZmlsbD0iZnJlZXplIiBhdHRyaWJ1dGVOYW1lPSJyIiBiZWdpbj0ic3ZnU3Bpbm5lcnM2RG90c1NjYWxlMC5iZWdpbiswLjFzIiBjYWxjTW9kZT0ic3BsaW5lIiBkdXI9IjAuNnMiIGtleVNwbGluZXM9IjAsMSwwLDE7LjUzLDAsLjYxLC43MyIga2V5VGltZXM9IjA7LjI7MSIgdmFsdWVzPSIwOzI7MCIvPjwvY2lyY2xlPjxjaXJjbGUgY3g9IjcuNSIgY3k9IjQuMjEiIHI9IjAiIGZpbGw9ImN1cnJlbnRDb2xvciI+PGFuaW1hdGUgaWQ9InN2Z1NwaW5uZXJzNkRvdHNTY2FsZTIiIGZpbGw9ImZyZWV6ZSIgYXR0cmlidXRlTmFtZT0iciIgYmVnaW49InN2Z1NwaW5uZXJzNkRvdHNTY2FsZTQuYmVnaW4rMC4xcyIgY2FsY01vZGU9InNwbGluZSIgZHVyPSIwLjZzIiBrZXlTcGxpbmVzPSIwLDEsMCwxOy41MywwLC42MSwuNzMiIGtleVRpbWVzPSIwOy4yOzEiIHZhbHVlcz0iMDsyOzAiLz48L2NpcmNsZT48Y2lyY2xlIGN4PSIxOS43OSIgY3k9IjcuNSIgcj0iMCIgZmlsbD0iY3VycmVudENvbG9yIj48YW5pbWF0ZSBpZD0ic3ZnU3Bpbm5lcnM2RG90c1NjYWxlMyIgZmlsbD0iZnJlZXplIiBhdHRyaWJ1dGVOYW1lPSJyIiBiZWdpbj0ic3ZnU3Bpbm5lcnM2RG90c1NjYWxlMS5iZWdpbiswLjFzIiBjYWxjTW9kZT0ic3BsaW5lIiBkdXI9IjAuNnMiIGtleVNwbGluZXM9IjAsMSwwLDE7LjUzLDAsLjYxLC43MyIga2V5VGltZXM9IjA7LjI7MSIgdmFsdWVzPSIwOzI7MCIvPjwvY2lyY2xlPjxjaXJjbGUgY3g9IjQuMjEiIGN5PSI3LjUiIHI9IjAiIGZpbGw9ImN1cnJlbnRDb2xvciI+PGFuaW1hdGUgaWQ9InN2Z1NwaW5uZXJzNkRvdHNTY2FsZTQiIGZpbGw9ImZyZWV6ZSIgYXR0cmlidXRlTmFtZT0iciIgYmVnaW49InN2Z1NwaW5uZXJzNkRvdHNTY2FsZTYuYmVnaW4rMC4xcyIgY2FsY01vZGU9InNwbGluZSIgZHVyPSIwLjZzIiBrZXlTcGxpbmVzPSIwLDEsMCwxOy41MywwLC42MSwuNzMiIGtleVRpbWVzPSIwOy4yOzEiIHZhbHVlcz0iMDsyOzAiLz48L2NpcmNsZT48Y2lyY2xlIGN4PSIyMSIgY3k9IjEyIiByPSIwIiBmaWxsPSJjdXJyZW50Q29sb3IiPjxhbmltYXRlIGlkPSJzdmdTcGlubmVyczZEb3RzU2NhbGU1IiBmaWxsPSJmcmVlemUiIGF0dHJpYnV0ZU5hbWU9InIiIGJlZ2luPSJzdmdTcGlubmVyczZEb3RzU2NhbGUzLmJlZ2luKzAuMXMiIGNhbGNNb2RlPSJzcGxpbmUiIGR1cj0iMC42cyIga2V5U3BsaW5lcz0iMCwxLDAsMTsuNTMsMCwuNjEsLjczIiBrZXlUaW1lcz0iMDsuMjsxIiB2YWx1ZXM9IjA7MjswIi8+PC9jaXJjbGU+PGNpcmNsZSBjeD0iMyIgY3k9IjEyIiByPSIwIiBmaWxsPSJjdXJyZW50Q29sb3IiPjxhbmltYXRlIGlkPSJzdmdTcGlubmVyczZEb3RzU2NhbGU2IiBmaWxsPSJmcmVlemUiIGF0dHJpYnV0ZU5hbWU9InIiIGJlZ2luPSJzdmdTcGlubmVyczZEb3RzU2NhbGU4LmJlZ2luKzAuMXMiIGNhbGNNb2RlPSJzcGxpbmUiIGR1cj0iMC42cyIga2V5U3BsaW5lcz0iMCwxLDAsMTsuNTMsMCwuNjEsLjczIiBrZXlUaW1lcz0iMDsuMjsxIiB2YWx1ZXM9IjA7MjswIi8+PC9jaXJjbGU+PGNpcmNsZSBjeD0iMTkuNzkiIGN5PSIxNi41IiByPSIwIiBmaWxsPSJjdXJyZW50Q29sb3IiPjxhbmltYXRlIGlkPSJzdmdTcGlubmVyczZEb3RzU2NhbGU3IiBmaWxsPSJmcmVlemUiIGF0dHJpYnV0ZU5hbWU9InIiIGJlZ2luPSJzdmdTcGlubmVyczZEb3RzU2NhbGU1LmJlZ2luKzAuMXMiIGNhbGNNb2RlPSJzcGxpbmUiIGR1cj0iMC42cyIga2V5U3BsaW5lcz0iMCwxLDAsMTsuNTMsMCwuNjEsLjczIiBrZXlUaW1lcz0iMDsuMjsxIiB2YWx1ZXM9IjA7MjswIi8+PC9jaXJjbGU+PGNpcmNsZSBjeD0iNC4yMSIgY3k9IjE2LjUiIHI9IjAiIGZpbGw9ImN1cnJlbnRDb2xvciI+PGFuaW1hdGUgaWQ9InN2Z1NwaW5uZXJzNkRvdHNTY2FsZTgiIGZpbGw9ImZyZWV6ZSIgYXR0cmlidXRlTmFtZT0iciIgYmVnaW49InN2Z1NwaW5uZXJzNkRvdHNTY2FsZWEuYmVnaW4rMC4xcyIgY2FsY01vZGU9InNwbGluZSIgZHVyPSIwLjZzIiBrZXlTcGxpbmVzPSIwLDEsMCwxOy41MywwLC42MSwuNzMiIGtleVRpbWVzPSIwOy4yOzEiIHZhbHVlcz0iMDsyOzAiLz48L2NpcmNsZT48Y2lyY2xlIGN4PSIxNi41IiBjeT0iMTkuNzkiIHI9IjAiIGZpbGw9ImN1cnJlbnRDb2xvciI+PGFuaW1hdGUgaWQ9InN2Z1NwaW5uZXJzNkRvdHNTY2FsZTkiIGZpbGw9ImZyZWV6ZSIgYXR0cmlidXRlTmFtZT0iciIgYmVnaW49InN2Z1NwaW5uZXJzNkRvdHNTY2FsZTcuYmVnaW4rMC4xcyIgY2FsY01vZGU9InNwbGluZSIgZHVyPSIwLjZzIiBrZXlTcGxpbmVzPSIwLDEsMCwxOy41MywwLC42MSwuNzMiIGtleVRpbWVzPSIwOy4yOzEiIHZhbHVlcz0iMDsyOzAiLz48L2NpcmNsZT48Y2lyY2xlIGN4PSI3LjUiIGN5PSIxOS43OSIgcj0iMCIgZmlsbD0iY3VycmVudENvbG9yIj48YW5pbWF0ZSBpZD0ic3ZnU3Bpbm5lcnM2RG90c1NjYWxlYSIgZmlsbD0iZnJlZXplIiBhdHRyaWJ1dGVOYW1lPSJyIiBiZWdpbj0ic3ZnU3Bpbm5lcnM2RG90c1NjYWxlYi5iZWdpbiswLjFzIiBjYWxjTW9kZT0ic3BsaW5lIiBkdXI9IjAuNnMiIGtleVNwbGluZXM9IjAsMSwwLDE7LjUzLDAsLjYxLC43MyIga2V5VGltZXM9IjA7LjI7MSIgdmFsdWVzPSIwOzI7MCIvPjwvY2lyY2xlPjxjaXJjbGUgY3g9IjEyIiBjeT0iMjEiIHI9IjAiIGZpbGw9ImN1cnJlbnRDb2xvciI+PGFuaW1hdGUgaWQ9InN2Z1NwaW5uZXJzNkRvdHNTY2FsZWIiIGZpbGw9ImZyZWV6ZSIgYXR0cmlidXRlTmFtZT0iciIgYmVnaW49InN2Z1NwaW5uZXJzNkRvdHNTY2FsZTkuYmVnaW4rMC4xcyIgY2FsY01vZGU9InNwbGluZSIgZHVyPSIwLjZzIiBrZXlTcGxpbmVzPSIwLDEsMCwxOy41MywwLC42MSwuNzMiIGtleVRpbWVzPSIwOy4yOzEiIHZhbHVlcz0iMDsyOzAiLz48L2NpcmNsZT48L3N2Zz4=" alt="loading" width="48" height="48" loading="lazy" class="form-lcbank-loading-img">
</div>`}}function N(){const t=document.getElementById("form-lcbank-result"),e=()=>t.classList.add("active"),i=()=>t.classList.remove("active");return{start:e,end:i,template:`<div class="form-lcbank-result" id="form-lcbank-result">
    <div class="form-lcbank-result-info">
      <h2 class="form-lcbank-result-title" id="form-lcbank-result-title"></h2>
      <p class="form-lcbank-result-text" id="form-lcbank-result-text"></p>
    </div>
  </div>`,title:()=>t.querySelector("#form-lcbank-result-title"),text:()=>t.querySelector("#form-lcbank-result-text"),button:()=>{var s;return(s=document.querySelector("#form-lcbank-result-button"))==null?void 0:s.addEventListener("click",function(o){o.preventDefault(),i()})}}}const X=async(t,e)=>{const{start:i,title:l,text:a,end:n}=N();await fetch("https://lcbform.com.br/wp-json/api/contact-form",{method:"POST",body:JSON.stringify(t)}).then(c=>c.json()).then(c=>{Z().endLoading(),c.status!==200&&(l().innerHTML=c.title,a().innerHTML=c.text,i()),c.status===200&&(n(),Z().endLoading(),window.location.href=e)})};function O(t){if(t=t.replace(/[^\d]+/g,""),t.length!==11||/^(\d)\1+$/.test(t))return!1;let e=0;for(let l=0;l<9;l++)e+=parseInt(t.charAt(l))*(10-l);let i=11-e%11;if((i===10||i===11)&&(i=0),i!==parseInt(t.charAt(9)))return!1;e=0;for(let l=0;l<10;l++)e+=parseInt(t.charAt(l))*(11-l);return i=11-e%11,(i===10||i===11)&&(i=0),i===parseInt(t.charAt(10))}function F(t){return/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(t)}function H(t){return/^\(\d{2}\) \d{4,5}-\d{4}$/.test(t)}const $=t=>{const{requiredEmail:e,goTo:i,hasEmail:l}=t,a=document.getElementById("form-lcbank");if(a){const n=u=>{const b=u.querySelectorAll("input"),r={};return b.forEach(d=>{r[d.name]=d.value}),r},c=u=>u.length,s=document.getElementById("form-lcbank-name"),o=document.getElementById("form-lcbank-cpf"),I=document.getElementById("form-lcbank-phone"),m=document.getElementById("form-lcbank-email")??null,g=u=>u.classList.remove("error","success");a.addEventListener("submit",function(u){u.preventDefault();let b=0;const r=n(a);return[s,o,I,m].forEach(d=>d&&g(d)),r.extra=JSON.stringify(J(r))??"",c(r.name)?s==null||s.classList.add("success"):(s==null||s.classList.add("error"),b++),O(r.cpf)?o==null||o.classList.add("success"):(o==null||o.classList.add("error"),b++),H(r.phone)?I==null||I.classList.add("success"):(I==null||I.classList.add("error"),b++),l&&e&&!F(r.email)?(m==null||m.classList.add("error"),b++):m==null||m.classList.add("success"),b>0?console.log("tem erros no form"):([s,o,I,m].forEach(d=>{d&&(d.disabled=!0)}),Z().startLoading(),X(r,i))})}},Q=t=>Object.entries(t).filter(([e])=>e.startsWith("input")).map(([e,i])=>({key:e.split("input")[1].toLowerCase(),value:i}));function q(){const t=document.getElementById("form-lcbank-modal"),e=document.getElementById("form-lcbank-label-name"),i=document.getElementById("form-lcbank-close");document.querySelectorAll("[data-call-to-action]").forEach(a=>{a.addEventListener("click",function(n){n.preventDefault(),t==null||t.classList.add("active"),e.focus()})}),i.addEventListener("click",function(a){a.preventDefault(),t==null||t.classList.remove("active")})}const _=t=>{const i=(t.startsWith("?")?t.substring(1):t).split("&"),l=[];return i.forEach(a=>{const[n,c]=a.split("=");l.push({key:decodeURIComponent(n),value:decodeURIComponent(c)})}),l},p=()=>({input:l=>{const{label:a,placeholder:n,errorMessage:c,type:s,name:o}=l;return`<div class="form-lcbank-field"><label class="form-lcbank-label" for="form-lcbank-${o}" id="form-lcbank-label-${o}">${a} <span class="form-lcbank-required">*</span></label><input type="${s}" class="form-lcbank-input" name="${o}" id="form-lcbank-${o}" placeholder="${n}"><span class="form-lcbank-error">${c}</span></div>`},closeModal:()=>'<button type="button" id="form-lcbank-close" class="form-lcbank-close"><img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE0LjU3MTQgMS44NDk4OUwxMy43NjU2IDFMOC4wMDAwMiA3LjA4MDkxTDIuMjM0NDEgMUwxLjQyODU5IDEuODQ5ODlMNy4xOTQxOSA3LjkzMDhMMS40Mjg1OSAxNC4wMTE3TDIuMjM0NDEgMTQuODYxNkw4LjAwMDAyIDguNzgwN0wxMy43NjU2IDE0Ljg2MTZMMTQuNTcxNCAxNC4wMTE3TDguODA1ODQgNy45MzA4TDE0LjU3MTQgMS44NDk4OVoiIGZpbGw9IiMyMjIyMjIiIHN0cm9rZT0iIzIyMjIyMiIvPgo8L3N2Zz4K" alt="close" width="14" height="14" loading="lazy" class="form-lcbank-close-img"></button>',submitButton:l=>`<div class="form-lcbank-field"><button type="submit" id="form-lcbank-label-button" class="form-lcbank-label-button">${l}</button></div>`}),K=()=>{var y,M;const t=document.querySelector("#form-lcbank-apply");if(!t){console.error("O Elemento #form-lcbank-apply não existe na página");return}const e=t.dataset,i=(y=e.pageTitle)==null?void 0:y.length,l=(M=e.website)==null?void 0:M.length;if(!i){console.error('É necessário atribuir o título da página com data-page-title="Título da página"');return}if(!l){console.error('É necessário atribuir o website com data-website="Título do website"');return}const a=window.location.href;let n="",c=[...Q(e),{key:"page_title",value:e.pageTitle},{key:"page_url",value:a},{key:"website",value:e.website}];const s=window.location.search;s&&(c=[...c,..._(s)]),c.map(({key:U,value:C})=>n+=`<input type="hidden" name="${U}" value="${C}" />`);const o=e.hidePlaceholder==="true",I=e.goTo??"/obrigado",m=e.hasEmail==="true",g=e.requiredEmail!=="false",u=e.company??"LC Bank",b=e.logoCompany??"https://precatorioestadual.com.br/wp-content/uploads/2024/08/logotipo.png",r=e.imageMoney??"https://precatorioestadual.com.br/wp-content/uploads/2024/08/money-desktop.png",d=e.labelName??"Nome Completo",f=e.labelCpf??"CPF",j=e.labelPhone??"Telefone",G=e.labelEmail??"E-mail",w=e.errorName??"Nome é um campo obrigatório",h=e.errorCpf??"CPF é um campo obrigatório",z=e.errorPhone??"Telefone é um campo obrigatório",x=e.errorPhone??"E-mail é um campo obrigatório",S=o?"":e.placeholderName??"Ex: José Maria da Silva",L=o?"":e.placeholderCpf??"CPF",P=o?"":e.placeholderPhone??"Telefone",v=o?"":e.placeholderPhone??"E-mail",T=e.labelButton??"Bora antecipar",W=e.modalTitle??"Solicite a antecipação <br> e receba o dinheiro da sua RPV em 24h!",k=e.modalText??"Preencha o formulário para que nossos especialistas consultem seu processo:",Y=e.modalPrivacy??"Ao enviar meus dados, eu concordo com a",V=e.modalPrivacyLink??"https://google.com.br",B=e.modalPrivacyText??"Política de Privacidade",D=e.modalFooterText??"*Após a assinatura do contrato.",E=`<div class="form-lcbank-modal" id="form-lcbank-modal">
    ${p().closeModal()}
    <div class="form-lcbank-image-box">
      <img src="${b}" alt="${u}" class="form-lcbank-image-logo">
      <img src="${r}" alt="image-money" class="form-lcbank-image-money">
    </div>
    <div class="form-lcbank-master">
      <div class="form-lcbank-master-container">
        <h2 class="form-lcbank-master-title">${W}</h2>
        <p class="form-lcbank-master-subtitle">${k}</p>
        <form action="#" method="post" novalidate id="form-lcbank" class="form-lcbank-form">
          ${p().input({type:"text",name:"name",placeholder:S,errorMessage:w,label:d})}
          ${m&&p().input({type:"email",name:"email",placeholder:v,errorMessage:x,label:G})}
          ${p().input({type:"text",name:"cpf",placeholder:L,errorMessage:h,label:f})}
          ${p().input({type:"text",name:"phone",placeholder:P,errorMessage:z,label:j})}
          ${n}
          ${p().submitButton(T)}
          ${Z().template}
          ${N().template}
        </form>
        <p class="form-lcbank-master-privacy">${Y} <a href="${V}" target="_blank" rel="noopener noreferrer">${B}</a></p>
        <p class="form-lcbank-master-privacy">${D}</p>
      </div>
    </div>
  </div>`;t.innerHTML=E,q(),A(document.querySelector("#form-lcbank-cpf")),R(document.querySelector("#form-lcbank-phone")),$({goTo:I,hasEmail:m,requiredEmail:g})};K();
