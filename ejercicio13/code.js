const sumar=(num1,num2)=>{
    return parseInt(num1)+parseInt(num2)
}
const restar=(num1,num2)=>{
    return parseInt(num1)-parseInt(num2)
}
const multiplicar=(num1,num2)=>{
    return parseInt(num1)*parseInt(num2)
}
const dividir=(num1,num2)=>{
    return parseInt(num1)/parseInt(num2)
}
const exponenciar=(num1,num2)=>{
    return Math.pow(parseInt(num1),parseInt(num2))
}
const modular=(num1,num2)=>{
    return parseInt(num1)%parseInt(num2)
}
let num1;
let num2;
let resultado;
alert("introduzca la operación que desea realizar")
let CalculadoraInversa=prompt("sumar, dividir, restar, multiplicar, exponenciar o modular")
switch(CalculadoraInversa){
    case "Sumar":
    case "sumar":
        num1= prompt("introduzca el primer número para sumar");
        num2= prompt("introduzca el segundo número para sumar");
        resultado=sumar(num1,num2);
        alert("el resultado de la suma es " + resultado);
        break;    

    case "Restar":
    case "restar":
         num1= prompt("introduzca el primer número para sumar");
         num2= prompt("introduzca el segundo número para sumar");
          resultado=restar(num1,num2);
        alert("el resultado de la suma es " + resultado);
        break;     
    case "Multiplicar":
    case "multiplicar":
         num1= prompt("introduzca el primer número para sumar");
         num2= prompt("introduzca el segundo número para sumar");
         resultado=multiplicar(num1,num2);
        alert("el resultado de la multiplicación es " + resultado);   
        break;  
    case "Dividir":
    case "dividir":
         num1= prompt("introduzca el primer número para sumar");
         num2= prompt("introduzca el segundo número para sumar");
         resultado=dividir(num1,num2);
        alert("el resultado de la división es " + resultado);  
        break;   
    case "Modular":
    case "modular":
         num1= prompt("introduzca el primer número para sumar");
         num2= prompt("introduzca el segundo número para sumar");
         resultado=modular(num1,num2);
        alert(`el resto de la división entre ${num1} y ${num2} es igual a ${resultado}`);  
        break;   
    case "exponenciar":
    case "Exponenciar":
         num1= prompt("introduzca el primer número para sumar");
         num2= prompt("introduzca el segundo número para sumar");
         resultado=exponenciar(num1,num2);
        alert(`el resultado de ${num1} elevado a ${num2} es igual a ${resultado}`);    
        break; 
        default:
            alert("Comando incorrecto")
}
    