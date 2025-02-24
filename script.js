const travelLenght = Number(prompt('Quanti km devi percorrere?'));
const userAge = Number(prompt('Quanti anni hai?'));

const discountCalc = 
userAge < 18 ? 0.8 :
userAge > 65 ? 0.6 :
1

const travelPriceRaw = travelLenght * 0.21;