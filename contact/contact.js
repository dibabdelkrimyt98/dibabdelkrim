(function(){
    emailjs.init("YOUR_PUBLIC_KEY"); // Remplacer par ta clé EmailJS
  })();
  
  document.getElementById("contactForm").addEventListener("submit", function(e){
    e.preventDefault();
  
    emailjs.sendForm("YOUR_SERVICE_ID","YOUR_TEMPLATE_ID", this)
      .then(() => alert("Message sent successfully!"))
      .catch((err) => alert("Error: " + JSON.stringify(err)));
  });
  