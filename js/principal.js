var titulo = document.querySelector("h1")

titulo.textContent = "Aparecida Nutricionista"


var pacientes = document.querySelectorAll(".paciente")

for (var i = 0; i < pacientes.length; i++) {
	
	var paciente = pacientes[i]


	var tdPeso = paciente.querySelector(".info-peso")
	var peso = tdPeso.textContent

	var tdAltura = paciente.querySelector(".info-altura")
	var altura = tdAltura.textContent


	var tdImc = paciente.querySelector(".info-imc")


	pesoValido = true
	alturaValida = true

	if (peso < 0 || peso > 1000) {
	pesoValido = false
	paciente.style.backgroundColor = "lightcoral"
	tdImc.textContent = "Peso Inválido"
	}
	if (altura < 0 || altura > 3.00) {
	alturaValida = false
	paciente.style.backgroundColor = "lightcoral"
	tdImc.textContent = "Altura inválida"
	}

	if (alturaValida && pesoValido) {
	var imc = peso/(altura*altura)
	tdImc.textContent = imc.toFixed(2);
	}
}


var botaoAdicionar = document.querySelector("#adicionar-paciente")

botaoAdicionar.addEventListener("click", function(){
	
	event.preventDefault();

	var form = document.querySelector("#form-adiciona")
	var nome = form.nome.value
	var altura = form.altura.value
	var peso = form.peso.value
	var gordura = form.gordura.value
	var imc = form.peso.value / (form.altura.value * form.altura.value)

	var pacienteTr = document.createElement("tr")
	var nomeTd = document.createElement("td")
	var pesoTd = document.createElement("td")
	var alturaTd = document.createElement("td")
	var gorduraTd = document.createElement("td")
	var imcTd = document.createElement("td")

	nomeTd.textContent = nome
	pesoTd.textContent = peso
	alturaTd.textContent = altura
	gorduraTd.textContent = gordura
	imcTd.textContent = imc

	pacienteTr.appendChild(nomeTd);
	pacienteTr.appendChild(pesoTd)
	pacienteTr.appendChild(alturaTd)
	pacienteTr.appendChild(gorduraTd)
	pacienteTr.appendChild(imcTd)

	var tabela = document.querySelector("#tabela-pacientes")

	tabela.appendChild(pacienteTr)

})

