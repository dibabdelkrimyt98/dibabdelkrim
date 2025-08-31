// Initialisation
(function () {
  emailjs.init("h9x0PpZ0hmANt51ja"); // ⚠️ Public Key
})();

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // 🔥 Empêche le refresh

    emailjs
      .sendForm("service_ztlo5zf", "template_rktp6qa", form)
      .then(function () {
        alert("✅ Message envoyé avec succès !");
        form.reset();
      })
      .catch(function (error) {
        console.error("Erreur :", error);
        alert("❌ Erreur : " + JSON.stringify(error));
      });
  });
});