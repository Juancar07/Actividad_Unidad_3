//Programa que le diga al usuario cual es su signo zodiacal
//declaramos las variables y las presentamos en un prompt
//noprotect
var mes;
var dia;
var signo = " ";

mes = prompt("ingrese su mes");
dia = prompt("ingrese su dia");
mes = parseInt(mes);
dia = parseInt(dia);

if ((mes == 3 && dia >= 21) || (mes == 4 && dia <= 20)){
  signo = "Aries";
}
else if((mes == 4 && dia >= 21) || (mes == 5 && dia <= 20)){
  signo = "Tauro";
}

else if((mes == 5 && dia >= 21) || (mes == 6 && dia <= 20)){
  signo = "Geminis";
}

else if((mes == 6 && dia >= 21) || (mes == 7 && dia <= 22)){
  signo = "Cancer";
}

else if((mes == 7 && dia >= 23) || (mes == 8 && dia <= 23)){
  signo = "Leo";
}

else if((mes == 8 && dia >= 24) || (mes == 9 && dia <= 22)){
  signo = "Virgo";
}

else if((mes == 9 && dia >= 23) || (mes == 10 && dia <= 23)){
  signo = "Libra";
}

else if((mes == 10 && dia >= 24) || (mes == 11 && dia <= 22)){
  signo = "Escorpion";
}

else if((mes == 11 && dia >= 23) || (mes == 12 && dia <= 21)){
  signo = "Sagitario";
}

else if((mes == 12 && dia >= 22) || (mes == 1 && dia <= 20)){
  signo = "Capricornio";
}

else if((mes == 1 && dia >= 21) || (mes == 2 && dia <= 19)){
  signo = "Acuario";
}

else if((mes == 2 && dia >= 20) || (mes == 3 && dia <= 20)){
  signo = "Piscis";
}

else{
  signo("La fecha no es una fecha valida")
}

alert("Tu signo zodiacal es: " + signo)