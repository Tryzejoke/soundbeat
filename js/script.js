const btn = document.getElementById("formButton");
const popup = document.getElementById("popup");
const closePopup = document.getElementById("closePopup");

btn.addEventListener("click", checkForm);
closePopup.addEventListener("click", () => popup.style.display = "none");

function checkForm(event) {
  event.preventDefault();

  const login = document.getElementById("formLogin").value.trim();
  const email = document.getElementById("formEmail").value.trim();
  const agreement = document.getElementById("formAgreement").checked;

  let valid = true;

  // Очистка предыдущих сообщений
  document.getElementById("loginMessage").innerText = "";
  document.getElementById("emailMessage").innerText = "";
  document.getElementById("agreementMessage").innerText = "";

  // Проверка логина
  if (login.length < 3) {
    document.getElementById("loginMessage").innerText = "Введите логин (мин. 3 символа)";
    valid = false;
  }

  // Проверка email
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    document.getElementById("emailMessage").innerText = "Введите корректный email";
    valid = false;
  }

  // Проверка чекбокса
  if (!agreement) {
    document.getElementById("agreementMessage").innerText = "Необходимо согласие";
    valid = false;
  }

  // Если всё верно — показываем popup
  if (valid) {
    popup.style.display = "flex";
    document.getElementById("feedbackForm").reset();
  }
}