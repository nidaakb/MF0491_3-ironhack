/**
 * ¡Buena suerte! ¡Pasa el mensaje!
 */

// 1.  Asociar un manejador click al boton enviar (id= bt-send)
const button = document.querySelector('#btn-send');
console.log("🚀 ~ file: app.js:7 ~ button:", button)

button.addEventListener('click', function(){
    console.log("Has clicado en enviar");
    const messageWritten = document.querySelector('#message').value;
    console.log("Palabra escrita: ", messageWritten);
    const messageSent = document.querySelector('.feedback');
    console.log(messageSent);
    const lastMessage = document.querySelector('#last-message');
    console.log(("Last message: ", lastMessage));

    if (messageWritten === "") {
        messageSent.style.display ="block";
    } else {
        messageSent.style.display = "none";
        lastMessage.textContent = messageWritten;
        document.querySelector('#message').value = "";
    }
})
