window.onload = function() {
  const character = document.getElementById('last_b_cat');

  if (window.innerWidth <= 1000) {
      setTimeout(() => {
          character.style.display = 'None';
      }, 3000);
  }
}
