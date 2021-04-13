document.getElementById("send-button").addEventListener("click", formValidation);

function formValidation () {
  if (document.getElementById("name").value != "" && document.getElementById("email").value.includes("@") && document.getElementById("email").value.includes(".") && document.getElementById("message").value != "") {
  alert("Obrigada pela mensagem!")
  } else {
  alert("Por favor, preencha todos os campos corretamente para concluir.")
  }
}

document.getElementById("send-button").addEventListener("click", function(event){
  event.preventDefault();
  if (document.getElementById("name").value != "" && document.getElementById("email").value.includes("@") && document.getElementById("email").value.includes(".") && document.getElementById("message").value != "") {
    document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("message").value = "";
  }
});