
(function(){
  const cfg = (window.TRAVESSIA_CONFIG||{});
  const EMAIL_TO = cfg.emailTo || "contato@loescheoraculo.com";
  const EMAIL_SUBJECT = encodeURIComponent(cfg.emailSubject || "Travessia — A Obra");
  const textarea = document.getElementById('obra-texto');
  const btn = document.getElementById('btn-entrego');

  function entregar(){
    if(!btn || btn.disabled) return;
    btn.disabled = true;
    const body = encodeURIComponent(textarea.value || "(entrego em confiança)");
    const mailto = `mailto:${EMAIL_TO}?subject=${EMAIL_SUBJECT}&body=${body}`;

    // tenta abrir o client de e-mail
    const a = document.createElement('a');
    a.href = mailto; a.style.display='none';
    document.body.appendChild(a); a.click(); a.remove();

    // fallback silencioso: copia o texto para a área de transferência (sem UI)
    if (navigator.clipboard && (textarea.value||"").trim().length){
      navigator.clipboard.writeText(textarea.value).catch(()=>{});
    }

    // redireciona para o Silêncio
    setTimeout(()=>{ location.href = "silencio.html"; }, 120);
  }

  if(btn){ btn.addEventListener('click', entregar); }
  if(textarea){
    textarea.addEventListener('keydown', (e)=>{
      if((e.ctrlKey||e.metaKey) && e.key==='Enter'){ e.preventDefault(); entregar(); }
    });
    window.addEventListener('load', ()=> textarea.focus({preventScroll:true}));
  }
})();
