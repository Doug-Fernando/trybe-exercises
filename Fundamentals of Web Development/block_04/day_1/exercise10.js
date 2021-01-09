let itemPriceIn = 75;
let itemPriceOut = 100;
const tax = itemPriceIn * (20 / 100);
let finalPrice = itemPriceIn + tax;
const profit = (itemPriceOut - finalPrice) * 1000;

console.log(profit);
