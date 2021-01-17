let inputResultado = document.getElementById("inputDisplayResultado");

let calculo = {
  valorSalvo: null,
  funcaoParaCalcular: null
};

window.addEventListener("load", function () {
  atribuirEventos();
});

function atribuirEventos() {
  //Atribui eventos aos números
  document.getElementById("btnValor0").addEventListener("click", clicarNumero);
  document.getElementById("btnValor1").addEventListener("click", clicarNumero);
  document.getElementById("btnValor2").addEventListener("click", clicarNumero);
  document.getElementById("btnValor3").addEventListener("click", clicarNumero);
  document.getElementById("btnValor4").addEventListener("click", clicarNumero);
  document.getElementById("btnValor5").addEventListener("click", clicarNumero);
  document.getElementById("btnValor6").addEventListener("click", clicarNumero);
  document.getElementById("btnValor7").addEventListener("click", clicarNumero);
  document.getElementById("btnValor8").addEventListener("click", clicarNumero);
  document.getElementById("btnValor9").addEventListener("click", clicarNumero);
  document.getElementById("btnLimpar").addEventListener("click", limparDados);
  document.getElementById("btnPonto").addEventListener("click",clicarPonto);
  document.getElementById("btnDividir").addEventListener("click",clicarOperador);
  document.getElementById("btnMultiplicar").addEventListener("click",clicarOperador);
  document.getElementById("btnSubtrair").addEventListener("click",clicarOperador);
  document.getElementById("btnSoma").addEventListener("click",clicarOperador);
  document.getElementById("btnResultado").addEventListener("click",clicarResultado);
};

function clicarNumero(){
  if (isNaN(inputResultado.value)) {
    inputResultado.value = event.target.textContent;
  } else {
    if (inputResultado.value !== "0." && inputResultado.value == 0) {
      inputResultado.value = event.target.textContent;
    } else {
      inputResultado.value += event.target.textContent
    }
  }
}

function somarValores(valor1, valor2){
  return valor1 + valor2;
};

function subtrairValores(valor1, valor2){
  return valor1 - valor2;
};

function multiplcarValores(valor1, valor2){
  return valor1 * valor2;
};

function dividirValores(valor1, valor2){
  if(valor2 == 0){
      return "Erro!";
  }else{
      return valor1 / valor2;
  }
};

function limparDados(){
  inputResultado.value = "";
  calculo.valorSalvo = null;
  calculo.funcaoParaCalcular = null;
};

function clicarPonto(){
  if(inputResultado.value === "" || isNaN(inputResultado.value)){
      inputResultado.value = "0.";
  }else if(!inputResultado.value.includes(".")){
      inputResultado.value = inputResultado.value + ".";
  }
};


function limparDados() {
  inputResultado.value = "";
  calculo1.valorSalvo = null;
  calculo1.funcaoParaCalcular = null;
};

function clicarOperador() {
  if(!isNaN(inputResultado.value)){
      if(calculo.valorSalvo == null){
          calculo.valorSalvo = Number(inputResultado.value);
      }else if(calculo.funcaoParaCalcular != null){
          calculo.valorSalvo = calculo.funcaoParaCalcular(calculo.valorSalvo, Number(inputResultado.value));
      }
  };

  let operador = event.target.textContent;
  atribuirOperacao(operador);
  inputResultado.value = operador;
};

function atribuirOperacao(operador){
  if(operador == "+"){
      calculo.funcaoParaCalcular = somarValores;
  } else if(operador == "-"){
      calculo.funcaoParaCalcular = subtrairValores;
  } else if(operador == "*"){
      calculo.funcaoParaCalcular = multiplcarValores;
  } else {
      calculo.funcaoParaCalcular = dividirValores;
  }
};

function clicarResultado() {
  if(!isNaN(inputResultado.value) && calculo.funcaoParaCalcular != null){
      let resultado = calculo.funcaoParaCalcular(calculo.valorSalvo, Number(inputResultado.value));
      inputResultado.value = resultado;
      calculo.valorSalvo = resultado;
      calculo.funcaoParaCalcular = null;
  }
};