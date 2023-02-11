let pasword= ""
for (i=2;i>=0;i--){
    pasword=prompt("Ingrese la contraseña");
    if(pasword=="koira"){
        alert("contraseña correcta");
        break;
    }
    else if(i==0){
        alert("Número de intentos superado, login bloqueado" );
        break;
    }
    else{
        alert(`contraseña incorrecta le quedan ${i} intentos`);
    }
}