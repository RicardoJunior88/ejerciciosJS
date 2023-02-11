let diaSemana = prompt("Introduzca un día de la semana")
switch (diaSemana) {
    case "lunes":
    case "Lunes":
        document.write("El lunes es un día laborable");
        break;
    case "martes":
    case "Martes":
        document.write("El martes es un día laborable");
        break;
    case "miercoles":
    case "Miercoles":
        document.write("El miercoles es un día laborable");
        break;
    case "jueves":
    case "Jueves":
        document.write("El jueves es un día laborable");
        break;
    case "viernes":
    case "Viernes":
        document.write("El viernes es un día laborable");
        break;
    case "sábado":
    case "Sábado":
    case "sabado":
    case "Sabado":
        document.write("El sábado es un día no laborable");
        break;

    case "domingo":
    case "Domingo":
        document.write("El domingo es un día no laborable");
        break;

    default:
        document.write("comando no válido")
}