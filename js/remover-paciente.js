var pacientes = document.querySelectorAll(".paciente")

// pacientes.forEach(function(paciente){

//	paciente.addEventListener("dblclick", function(){
//		console.log("Fui clicado com duplo clique")
//		this.remove()
	

// })


var tabela = document.querySelector("#tabela-pacientes")

tabela.addEventListener("dblclick", function(event){
	event.target.parentNode.remove()

})