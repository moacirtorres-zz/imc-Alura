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
	var imc = calculaImc(peso, altura)
	tdImc.textContent = imc
	}
}


function calculaImc(peso, altura) {
	var imc = 0;

	imc = peso / (altura * altura)

	return imc.toFixed(2)
}