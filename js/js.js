const imageContainers = document.querySelectorAll('.image-container');

imageContainers.forEach(container => {
  container.addEventListener('mouseover', () => {
    container.classList.add('brightness');
  });

  container.addEventListener('mouseleave', () => {
    container.classList.remove('brightness');
  });
});
function goToSignupPage() {

    window.location.href = "NEW_CODE.html";
}
function redirectToLoginPage() {
    window.location.href = "CODE.html";
}


var welcomeButton = document.getElementById("main");

welcomeButton.addEventListener("click", function() {
    window.location.href = "index.html";
});


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("scrollBtn").style.display = "block";
  } else {
    document.getElementById("scrollBtn").style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


document.getElementById("scrollBtn").addEventListener("click", function() {
  topFunction();
});

function displayAlert() {
  alert("확인됐습니다. 방에서 기다리시면 사서가 가져다줄 것입니다.");
  window.location.href = "ssoz_library.html";
}