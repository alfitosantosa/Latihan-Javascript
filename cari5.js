let arrAngka = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < arrAngka.length; i++) {
  if (arrAngka[i] == 5) {
    console.log("angka 5 ditemukan di urutan ke-" + i);
    break;
  }
  console.log(arrAngka[i]);
}
