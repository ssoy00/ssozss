window.onload = function() {
  const character = document.getElementById('last_b_cat');

  if (window.innerWidth <= 1000) {
      setTimeout(() => {
          character.style.opacity = 0;
      }, 3000);
  }
}
