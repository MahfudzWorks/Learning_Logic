// Soal 1

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let keluarga = {
  kakak: "polindrom",
  adek: "polindrom",
  orangtua: "nonpolindrom",
};

rl.question("masukkan nama anggota keluarga (kakak/adek/orangtua):", (cari) => {
  if (keluarga[cari]) {
    console.log(cari + " = " + keluarga[cari]);
  } else {
    console.log("anggota keluarga tidak ditemukan");
  }

  rl.close();
});

// let keluarga = {
//   kakak: "polindrom",
//   adek: "polindrom",
//   orangtua: "nonpolindrom",
// };

// // ambil input dari argumen command line
// let cari = process.argv[2];

// if (keluarga[cari]) {
//   console.log(cari + " = " + keluarga[cari]);
// } else {
//   console.log("Keluarga tidak ditemukan

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
// function segitigaGanjil(n) {
//   let hasil = [];

//   // bagian atas
//   for (let i = 1; i <= n; i++) {
//     let baris = [];
//     let start = i * 2 - 1; // angka awal tiap baris
//     for (let j = 0; j < i; j++) {
//       baris.push(start + j * 2);
//     }
//     hasil.push(baris.join(" "));
//   }

//   // bagian bawah
//   for (let i = n - 1; i >= 1; i--) {
//     let baris = [];
//     let start = i * 2 - 1;
//     for (let j = 0; j < i; j++) {
//       baris.push(start + j * 2);
//     }
//     hasil.push(baris.join(" "));
//   }

//   // cetak hasil
//   console.log(hasil.join("\n"));
// }

// segitigaGanjil(5);

// Soal 4
// function cariModus(arr) {
//   let frekuensi = {};
//   let modus = [];
//   let maxCount = 0;

//   // hitung frekuensi tiap angka
//   for (let num of arr) {
//     frekuensi[num] = (frekuensi[num] || 0) + 1;

//     // update maxCount
//     if (frekuensi[num] > maxCount) {
//       maxCount = frekuensi[num];
//     }
//   }

//   // ambil semua angka dengan frekuensi == maxCount
//   for (let num in frekuensi) {
//     if (frekuensi[num] === maxCount) {
//       modus.push(Number(num));
//     }
//   }

//   return modus;
// }

// let data = [2, 3, 3, 5, 7, 7, 7, 2, 3];
// console.log("Data:", data.join(", "));
// console.log("Modus:", cariModus(data));

// Soal 4 V2
// function cariModus(arr) {
//   let frekuensi = {};
//   let maxCount = 0;
//   let modus = null;

//   for (let i = 0; i < arr.length; i++) {
//     let num = arr[i];
//     frekuensi[num] = (frekuensi[num] || 0) + 1;

//     // kalau frekuensi lebih besar dari maxCount, update modus
//     if (frekuensi[num] > maxCount) {
//       maxCount = frekuensi[num];
//       modus = num;
//     }
//   }

//   return modus;
// }

// let data = [2, 3, 3, 5, 7, 7, 7, 2, 3];
// console.log("Data:", data.join(", "));
// console.log("Modus:", cariModus(data));
