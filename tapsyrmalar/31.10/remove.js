let money = +prompt("Бірінші ақшаны енгіз");

let currency = prompt(
  "Валюта енгіз:" + "\n dollar to tenge немесе tenge  to dollar (tg/$)"
);

const moneyConvert = (x, z) => {
  switch (z) {
    case "tg":
      return x / 496.92;  //1500
      break;
    case "$":
      return x * 496.92;
      break;
  }
};

alert("Конвертация нәтижесі:" + moneyConvert(money, currency));
