
  
/* генерація рамдомного числа */
let totalCount = 0;
let evenCount = 0;
let oddCount = 0;
for (let i = 0; i < 20; i++)
{
let randomNumber = Math.floor(Math.random() * ((1000 - 100 + 1) + 100))
console.log(randomNumber);

totalCount++;

  if (randomNumber % 2 === 0) {
    evenCount++;
  } else {
    oddCount++;
  }
}
let evenPercentage = (evenCount / totalCount) * 100;

console.log("Всього згенеровано чисел: " + totalCount);
console.log("Парних чисел: " + evenCount);
console.log("Непарних чисел: " + oddCount);
console.log("Відсоток парних чисел: " + Math.round(evenPercentage) + "%");

