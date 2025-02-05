document.addEventListener('DOMContentLoaded', function(event) {
  const cardInner = document.querySelector('.card-inner');
  const backBtn = document.getElementById('flip-card-btn-turn-to-back');
  const frontBtn = document.getElementById('flip-card-btn-turn-to-front');

  backBtn.style.visibility = 'visible';
  frontBtn.style.visibility = 'visible';

  backBtn.onclick = function() {
    cardInner.classList.toggle('do-flip');
  };
  
  frontBtn.onclick = function() {
    cardInner.classList.toggle('do-flip');
  };
});

