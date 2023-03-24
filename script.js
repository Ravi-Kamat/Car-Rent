

const days_Rented = 5;
const carType = 'Luxury';

function calc_Renta_lCost(days, carType) {
    let rentalCost;
    if (carType === 'Economy') {
        rentalCost = 4000;
    } else if (carType === 'Midsize') {
        rentalCost = 10000;
    } else if (carType === 'Luxury') {
        rentalCost = 20000;
    } else {
        console.log('Invalid car type');
        return;
    }
    const totalCost = rentalCost * days;
    return totalCost;
}


const rentalCost = calc_Renta_lCost(days_Rented, carType);
console.log(rentalCost); 
