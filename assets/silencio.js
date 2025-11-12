
(function(){
  const veil = document.getElementById('veil');
  // aciona o 'apagar aos poucos' após presença breve
  setTimeout(()=> veil && veil.classList.add('on'), 4200);
})();
