document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let email = document.getElementById("email").value.trim();
  let topic = document.getElementById("topic").value;
  let msg = document.getElementById("message").value.trim();
  let formMsg = document.getElementById("formMsg");

  if (!email) {
    formMsg.innerText = "Podaj E-Mail.";
    formMsg.style.color = "red";
    return;
  }

  if (!email.includes("@") || !email.includes(".")) {
    formMsg.innerText = "E-Mail niepoprawny.";
    formMsg.style.color = "red";
    return;
  }

  if (topic === "") {
    formMsg.innerText = "Wybierz temat wiadomości.";
    formMsg.style.color = "red";
    return;
  }

  if (!msg) {
    formMsg.innerText = "Wiadomość nie może być pusta.";
    formMsg.style.color = "red";
    return;
  }

  formMsg.innerText = "Dziękuję! Wiadomość została poprawnie zweryfikowana.";
  formMsg.style.color = "green";
});
