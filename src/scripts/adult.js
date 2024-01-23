let edadInput = document.getElementById("edad");
let textoH1 = document.getElementById("text");
let customAlert = document.getElementById("customAlert")

document.getElementById("submitBtn").addEventListener("click", function () {
    let entrada = edadInput.value;

    customAlert.classList.add("hidden");
    
    if(contieneTextoYNumero(entrada)){
        customAlert.classList.remove("hidden");
        return;
    }

    let edad = parseInt(edadInput.value);


    if (!isNaN(edad)) {
        if (edad >= 18) {
            textoH1.textContent = "Eres mayor de edad";
        } else if (edad < 18) {
            textoH1.textContent = "No eres mayor de edad";
        } 
    
    } else if(edadInput.value === "") {
        textoH1.textContent = "¿Cuántos años tienes?";
    } else {
        customAlert.classList.remove("hidden");
    }
});


function contieneTextoYNumero(entrada){
    let contieneNumero = /\d/.test(entrada);
    let contieneTexto = /[a-aZ-Z]/.test(entrada);

    return contieneNumero && contieneTexto;
}

