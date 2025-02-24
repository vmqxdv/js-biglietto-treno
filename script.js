try {
  const travelLenght = Number(prompt('Quanti km devi percorrere?'));
  getValidInput(travelLenght, 0.01);

  const userAge = Number(prompt('Quanti anni hai?'));
  getValidInput(userAge, 1, 200);

  const discountCalc = 
  userAge < 18 ? 0.8 :
  userAge > 65 ? 0.6 :
  1;
  
  const travelPriceRaw = travelLenght * 0.21;
  const travelPriceFinal = roundToTwo(travelPriceRaw * discountCalc);
  
  alert(`Il prezzo del tuo biglietto è di €${travelPriceFinal}`);
} catch(err) {
  console.log(err);
};


function roundToTwo(num) {
  return parseFloat(num.toFixed(2)); 
};

function getValidInput(input, min, max) {
  if (isNaN(input) || input < min || (max !== undefined && input > max)) {
    alert(`"${input}" non è un valore valido. Per favore, inserisci un numero positivo${max !== undefined ? ` e realistico (fino a ${max})` : ''}.`);
    throw new Error(`[Input] "${input}" non valido`);
  };
};
