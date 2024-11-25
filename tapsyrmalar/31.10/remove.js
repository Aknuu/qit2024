// 2 тапсырма сандарды косу
let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i; 
}
console.log("Сумма чисел от 1 до 100:", sum);


// 1 так немесе жуп
let number = prompt("Введите число:"); 
if (number % 2 === 0) {
  console.log("Число четное.");
} else {
  console.log("Число нечетное.");
}


// карапайм сан табу
let num = prompt("Введите число:");
let isPrime = true;

if (number <= 1) {
  isPrime = false; 
} else {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      isPrime = false;
      break;
    }
  }
}

if (isPrime) {
  console.log("Число является простым.");
} else {
  console.log("Число не является простым.");
}
