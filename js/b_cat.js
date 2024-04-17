window.onload = function() {
    const character = document.getElementById('last_b_cat');
    const newImage = document.getElementById('memory');

    // 페이지가 로드되면 2초 후에 캐릭터를 점점 사라지게 만듭니다.
    setTimeout(() => {
      character.style.opacity = '0';
    }, 10000);

    // 3초 후에 새로운 이미지를 점점 투명하게 만들어서 나타나게 합니다.
    setTimeout(() => {
      newImage.style.opacity = '1';
    }, 1000);
  }