
function fitPanel() {
  const panel = document.querySelector('.panel');
  if(!panel) return;
  panel.style.transform = 'scale(1)';
  // espaço seguro: margem para footer/topo
  const safe = 40; 
  const available = window.innerHeight - safe;
  const needed = panel.getBoundingClientRect().height;
  const scale = Math.min(1, available / needed);
  panel.style.transform = `scale(${scale})`;
}
window.addEventListener('load', ()=>{ document.body.classList.add('ready'); fitPanel(); });
window.addEventListener('resize', fitPanel);
