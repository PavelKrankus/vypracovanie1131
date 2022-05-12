function pocitadlo(x = 4, y = 2) {
  console.log("Hodnota x = " + x + " " + "Hodnota y = " + y);
  console.log("Vykonávam matematické operácie");
  console.log(x + " + " + y + " = " + (x + y));
  console.log(x + " - " + y + " = " + (x - y));
  console.log(x + " * " + y + " = " + x * y);
  console.log(x + " / " + y + " = " + x / y);
}
console.log(pocitadlo((x = 4), (y = 2)));
