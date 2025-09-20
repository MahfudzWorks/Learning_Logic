<?php

// Fibonacci

$input = readline("Masukkan jumlah deret Fibonacci: ");
$n = intval($input);

if (!is_numeric($input) || $n <= 0) {
   echo "Input tidak valid!\n";
} else {
   $fib = [0, 1];
   for ($i = 2; $i < $n; $i++) {
      $fib[$i] = $fib[$i - 1] + $fib[$i - 2];
   }
   echo "Deret Fibonacci $n angka pertama:\n";
   echo
   implode(", ", array_slice($fib, 0, $n)) . " \n";
}