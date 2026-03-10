// Mensaje cuando se envía el formulario

const form = document.querySelector("form");

form.addEventListener("submit", function(e){
    e.preventDefault();

    alert("Gracias por contactarnos. Te responderemos pronto.");

    form.reset();
});