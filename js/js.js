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
    // 여기에 회원가입 페이지로 이동하는 코드를 추가합니다.
    window.location.href = "NEW_CODE.html";
}
function redirectToLoginPage() {
    window.location.href = "CODE.html";
}
