let angka = 6;

// Ganjil genap
if (angka % 2 === 0) {
  console.log("${angka} Angka Genap");
} else {
  console.log("${angka} Angka Ganjil");
}

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Faktorial
rl.question("Masukkan angka untuk faktorial: ", function (input) {
  let n = parseInt(input);

  if (isNaN(n) || n < 0) {
    console.log("Input tidak valid!");
  } else {
    let hasil = 1;
    for (let i = 1; i <= n; i++) {
      hasil *= i;
    }
    console.log(`Faktorial dari ${n} adalah ${hasil}`);
  }

  rl.close();
});

// Fibonacci
rl.question("Masukkan jumlah deret Fibonacci: ", function (input) {
  let n = parseInt(input);

  if (isNaN(n) || n <= 0) {
    console.log("Input tidak valid!");
  } else {
    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
      fib[i] = fib[i - 1] + fib[i - 2];
    }
    console.log(`Deret Fibonacci ${n} angka pertama:`);
    console.log(fib.slice(0, n).join(", "));
  }

  rl.close();
});
