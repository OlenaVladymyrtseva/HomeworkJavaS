var services = {
  "стрижка": "60 грн",
  "гоління": "80 грн",
  "Миття голови": "100 грн"
};
function getTotalPrice (services){
  let total = 0;
  for (let item in services){
    let price = parseInt(services[item]);
    total += price
  }
  return total;
} 
let minMax = getMinMaxPrice(services);
function getMinMaxPrice(services) {
  let min = Infinity;
  let max = -Infinity;
  for (let item in services) {
    let price = parseInt(services[item]);
    if (price < min) min = price;
    if (price > max) max = price;
  }
  return { min, max };
}
function addService(services, name, price) {
  services[name] = price + "грн";
}
console.log("Загальна вартість послуг: ", getTotalPrice(services) + "грн");
console.log("Мінімальна ціна за послугу: ", minMax.min + "грн");
console.log("Максимальна ціна за послугу: ", minMax.max + "грн");

addService(services, "Розбити скло", 200);
console.log("+ Розбити скло, загальна вартість послуг: ", getTotalPrice(services) + "грн");
minMax = getMinMaxPrice(services);
console.log("Мінімальна ціна за послугу: ", minMax.min + "грн");
console.log("Максимальна ціна за послугу: ", minMax.max + "грн");
