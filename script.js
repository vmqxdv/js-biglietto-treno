const travelLenght = Number(prompt('Quanti km devi percorrere?'));
const userAge = Number(prompt('Quanti anni hai?'));

let travelPriceRaw;
const discountCalc = 
userAge < 18 ? 0.2 :
userAge > 65 ? 0.4 :
1