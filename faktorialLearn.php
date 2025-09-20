<?php

// Faktorial

$input = readline("Masukkan angka untuk faktorial: ");
$n = intval($input);

if (!is_numeric($input) || $n < 0) {
   echo "Input tidak valid!\n";
} else {
   $hasil = 1;
   for ($i = 1; $i <= $n; $i++) {
      $hasil
         *= $i;
   }
   echo "Faktorial dari $n adalah $hasil\n";
}