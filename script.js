try {
  const travelLenght = Number(prompt('Quanti km devi percorrere?'));
  if (Math.sign(travelLenght) === -1 || isNaN(travelLenght)) {
    alert(`"${travelLenght}" non è un valore valido. Perfavore inserisci un numero positivo.`);
    throw new Error(`[travelLenght] Input "${travelLenght}" non valido`);
  };
  
  const userAge = Number(prompt('Quanti anni hai?'));
  if (Math.sign(userAge) === -1 || isNaN(userAge) || userAge > 200) {
    alert(`"${travelLenght}" non è un valore valido. Perfavore inserisci un numero positivo, e realistico.`);
    throw new Error(`[userAge] Input "${travelLenght}" non valido`);
  };

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
