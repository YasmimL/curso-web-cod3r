const validarDia = (numero) => {
  switch (numero) {
    case 1:
    case 7:
      console.log("Fim de semana!");
      break;
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      console.log("Dia útil!");
      break;
    default:
      console.log("Dia inválido!");
  }
};

validarDia(1);
validarDia(2);
validarDia(3);
validarDia(4);
validarDia(5);
validarDia(6);
validarDia(7);
validarDia(9);
