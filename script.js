try {
  const travelLenght = Number(prompt('Quanti km devi percorrere?'));
  getValidInput(travelLenght, 0.01);

  const userAge = Number(prompt('Quanti anni hai?'));
  getValidInput(userAge, 1, 200);

  const discountCalc = // ternari
  userAge < 18 ? 0.8 :
  userAge > 65 ? 0.6 :
  1;
  
  const travelPriceRaw = travelLenght * 0.21;
  const travelPriceFinal = travelPriceRaw * discountCalc;
  
  const formattedTravelPriceFinal = new Intl.NumberFormat('it-IT', {
    style: 'currency',
    currency: 'EUR'
  }).format(travelPriceFinal);

  alert(`Il prezzo del tuo biglietto è di ${formattedTravelPriceFinal}`);
} catch(err) {
  console.log(err);
};

function getValidInput(input, min, max) {
  if (isNaN(input) || input < min || (max !== undefined && input > max)) {
    alert(`"${input}" non è un valore valido. Per favore, inserisci un numero positivo${max !== undefined ? ` e realistico (fino a ${max})` : ''}.`);
    throw new Error(`[Input] "${input}" non valido`);
  };
};
