// Soal 1

// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// let keluarga = {
//   kakak: "polindrom",
//   adek: "polindrom",
//   orangtua: "nonpolindrom",
// };

// rl.question("masukkan nama anggota keluarga (kakak/adek/orangtua):", (cari) => {
//   if (keluarga[cari]) {
//     console.log(cari + " = " + keluarga[cari]);
//   } else {
//     console.log("anggota keluarga tidak ditemukan");
//   }

//   rl.close();
// });

// Soal 2

// let n = 5;

// for (let i = 1; i <= n; i++) {
//   console.log("*".repeat(i));
// }

// for (let i = 1; i <= n; i++) {
//   console.log(" ".repeat(n - i) + "*".repeat(i));
// }

// for (let i = 1; i <= n; i++) {
//   console.log(" ".repeat(n - i) + "*".repeat(2 * i - 1));
// }

// Soal 3
function segitigaGanjil(n) {
  let hasil = [];

  // bagian atas
  for (let i = 1; i <= n; i++) {
    let baris = [];
    let start = i * 2 - 1; // angka awal tiap baris
    for (let j = 0; j < i; j++) {
      baris.push(start + j * 2);
    }
    hasil.push(baris.join(" "));
  }

  // bagian bawah
  for (let i = n - 1; i >= 1; i--) {
    let baris = [];
    let start = i * 2 - 1;
    for (let j = 0; j < i; j++) {
      baris.push(start + j * 2);
    }
    hasil.push(baris.join(" "));
  }

  // cetak hasil
  console.log(hasil.join("\n"));
}

segitigaGanjil(5);

// Soal 4
