

const num1 = document.getElementById("1");
const num2 = document.getElementById("2");
const num3 = document.getElementById("3");
const num4 = document.getElementById("4");
const num5 = document.getElementById("5");
const num6 = document.getElementById("6");
const num7 = document.getElementById("7");
const num8 = document.getElementById("8");
const num9 = document.getElementById("9");
const num0 = document.getElementById("0");

const punto = document.getElementById("punto");
const porcentaje = document.getElementById("porcentaje");
const restar = document.getElementById("restar");
const sumar = document.getElementById("sumar");
const borrar = document.getElementById("borrar");
const dividir = document.getElementById("dividir");
const multiplicar = document.getElementById("multiplicar");
const limpiar = document.getElementById("clear");

let textBox = document.getElementById("textBox");
textBox.setAttribute("readonly","");
textBox.innerHTML="";

function agreeNum1(e){
    let contenido = num1.innerText;
    textBox.value += contenido;
}

function agreeNum2(e){
    let contenido = num2.innerText;
        textBox.value += contenido;

}
function agreeNum3(e){
    let contenido = num3.innerText;
        textBox.value += contenido;

}
function agreeNum4(e){
    let contenido = num4.innerText;
        textBox.value += contenido;

}
function agreeNum5(e){
    let contenido = num5.innerText;
    textBox.value += contenido;
  
}
function agreeNum6(e){
    let contenido = num6.innerText;
    textBox.value += contenido;

}
function agreeNum7(e){
    let contenido = num7.innerText;
    textBox.value += contenido;
    
}
function agreeNum8(e){
    let contenido = num8.innerText;
    textBox.value += contenido;

}
function agreeNum9(e){
    let contenido = num9.innerText;
    textBox.value += contenido;
   
}
function agreeNum0(e){
    let contenido = num0.innerText;
    textBox.value += contenido;
}
let yaAgreePunto = false;
function agreePunto(e){
    let valueTextBox = textBox.value.trim();
    if(!yaAgreePunto && !isNaN(parseFloat(valueTextBox)) || valueTextBox.endsWith("0")  ){
        textBox.value += `.`;
        yaAgreePunto = true;
    } else if(valueTextBox ===""){
        textBox.value = `0.`
        yaAgreePunto = true;
    }
}
let yaAgregado = false; 

function sumarValue(e){
    let valueTextBox = textBox.value.trim(); 
    let contenido = sumar.innerText;
    if(!isNaN(parseFloat(valueTextBox)) && !yaAgregado){
        textBox.value += ` ${contenido} `;
        yaAgregado = true;
    }
}

function restarValue(e){
    let valueTextBox = textBox.value.trim();
    if(!isNaN(parseFloat(valueTextBox)) && !yaAgregado){
        textBox.value += ` - `;
        yaAgregado = true;
    }

}

function multiplicarValue(e){
    let valueTextBox = textBox.value.trim();
    let contenido = multiplicar.innerText;

    if(!isNaN(parseFloat(valueTextBox)) && !yaAgregado){
        textBox.value += ` ${contenido} `;
        yaAgregado = true;
    }

}

function dividirValue(e){
    let valueTextBox = textBox.value.trim();
    let contenido = dividir.innerText;

    if(!isNaN(parseFloat(valueTextBox)) && !yaAgregado){
        textBox.value += ` ${contenido} `;
        yaAgregado = true;
    }
}


function porcentajeValue(e){
    let valueTextBox = textBox.value.trim();
    let contenido = porcentaje.innerText;
    
    if(!isNaN(parseFloat(valueTextBox)) && !yaAgregado){
        textBox.value +=` ${contenido} `;
        yaAgregado = true;
    }
}

function borrarValue(e){
    let newValue = textBox.value.slice(0, -1);
    textBox.value = newValue;
}

function clearValue(e){
    textBox.value = "";
    yaAgregado=false;
    yaAgreePunto=false;
}
function resultado(e){

   
    if(textBox.value.includes("+")){
        
        let contenido = textBox.value.indexOf("+");
        
        let firstNum = textBox.value.slice(0, contenido);
        let secondNum = textBox.value.slice(contenido + 1,);
        textBox.value = parseFloat(firstNum) + parseFloat(secondNum);
        
    }else if(textBox.value.includes("-")){
        let contenido = textBox.value.indexOf("-");
        let firstNum = textBox.value.slice(0, contenido);
        let secondNum = textBox.value.slice(contenido + 1,);
        textBox.value = parseFloat(firstNum) - parseFloat(secondNum);

    } else if(textBox.value.includes(multiplicar.innerText)){
        let contenido = textBox.value.indexOf(multiplicar.innerText);
        let firstNum = textBox.value.slice(0, contenido);
        let secondNum = textBox.value.slice(contenido + 1,);
        textBox.value = parseFloat(firstNum) * parseFloat(secondNum);

    } else if(textBox.value.includes(dividir.innerText)){
        let contenido = textBox.value.indexOf(dividir.innerText);
        let firstNum = textBox.value.slice(0, contenido);
        let secondNum = textBox.value.slice(contenido + 1,);
        textBox.value = parseFloat(firstNum) / parseFloat(secondNum);

    } else if(textBox.value.includes(porcentaje.innerHTML)){
        let contenido = textBox.value.indexOf(porcentaje.innerHTML);
        let firstNum = textBox.value.slice(0, contenido);
        let secondNum = textBox.value.slice(contenido + 1,);
        textBox.value = (firstNum * secondNum)/100;

    }
    yaAgregado=false;
    yaAgreePunto=false;
}