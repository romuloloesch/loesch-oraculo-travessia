// =============================
//  LOESCH & ORÁCULO | TRANSITIONS CORE
//  Núcleo de Transição Oracular entre Portais
// =============================

(function(){
  function createFadeOverlay(){
    let overlay = document.getElementById("fadeOverlay");
    if(overlay) return overlay;
    overlay = document.createElement("div");
    overlay.id = "fadeOverlay";
    Object.assign(overlay.style, {
      position: "fixed",
      inset: "0",
      backgroundColor: "#000",
      opacity: "0",
      pointerEvents: "none",
      transition: "opacity 0.6s ease-in-out",
      zIndex: "9999"
    });
    document.body.appendChild(overlay);
    return overlay;
  }

  function fadeIn(){
    const overlay = createFadeOverlay();
    // Start fully covered, then reveal
    overlay.style.pointerEvents = "none";
    overlay.style.opacity = "0";
  }

  function fadeOutAndNavigate(url, portal){
    const overlay = createFadeOverlay();
    overlay.style.pointerEvents = "auto";
    overlay.style.opacity = "1";
    setTimeout(function(){
      window.location.href = url;
    }, 600);
    if (portal){
      try{ console.log(`🜂 Travessia iniciada: ${portal.toUpperCase()} → ${url}`); }catch(e){}
    }
  }

  document.addEventListener("DOMContentLoaded", function(){
    fadeIn();
    const links = document.querySelectorAll('a[data-portal]');
    links.forEach(function(link){
      link.addEventListener('click', function(ev){
        // Ignore modified clicks (new tab etc.)
        if (ev.metaKey || ev.ctrlKey || ev.shiftKey || ev.button !== 0) return;
        ev.preventDefault();
        const destino = link.getAttribute('href');
        const portal = link.getAttribute('data-portal');
        fadeOutAndNavigate(destino, portal);
      });
    });
  });
})();
