const transformarNumero = (numero) => {
  switch (numero) {
    case 0:
      console.log(`${numero} - Zero`);
      break;
    case 1:
      console.log(`${numero} - Um`);
      break;
    case 2:
      console.log(`${numero} - Dois`);
      break;
    case 3:
      console.log(`${numero} - Três`);
      break;
    case 4:
      console.log(`${numero} - Quatro`);
      break;
    case 5:
      console.log(`${numero} - Cinco`);
      break;
    case 6:
      console.log(`${numero} - Seis`);
      break;
    case 7:
      console.log(`${numero} - Sete`);
      break;
    case 8:
      console.log(`${numero} - Oito`);
      break;
    case 9:
      console.log(`${numero} - Nove`);
      break;
    case 10:
      console.log(`${numero} - Dez`);
      break;
    default:
      console.log("Número fora do intervalo.");
      break;
  }
};

transformarNumero(0);
transformarNumero(1);
transformarNumero(2);
transformarNumero(3);
transformarNumero(4);
transformarNumero(5);
transformarNumero(6);
transformarNumero(7);
transformarNumero(8);
transformarNumero(9);
transformarNumero(10);
transformarNumero(11);
