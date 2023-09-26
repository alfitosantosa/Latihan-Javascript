// if
//switch
//ternary operator

//when
//jika saya lapar maka saya makan

// ======================================

// let lapar = false;

// if (lapar) {
//   console.log("saya makan");
// } else {
//   console.log("saya tidak makan");
//   //eksekusi
// }

// ======================================

// let lampu = prompt("masukkan warna lampu");
// let jalanan = prompt("jalananya sepi nggga?");
// lampu == lampu.toLowerCase();

// if (lampu == "merah") {
//   console.log("berhenti");
// } else if (lampu == "kuning") {
//   console.log("bersiap");
// } else if (lampu == "hijau") {
//   console.log("jalan");
//   if (jalanan == "sepi") {
//     console.log("jalan pelan-pelan");
//   } else {
//     console.log("jalan cepat");
//   }
// } else {
//   console.log("lampu rusak");
// } //eksekusi

// ======================================
// soal if

// nilai A 90 - 100
// nilai B 80 - 89
// nilai C 70 - 79
// nilai D 60 - 69

// let nilai = prompt("masukkan nilai");
// if (nilai >= 90 && nilai <= 100) {
//   console.log("nilai anda adalah " + nilai + " nilai anda A");
// } else if (nilai >= 80 && nilai <= 89) {
//   console.log("nilai anda adalah" + nilai + " nilai anda B");
// } else if (nilai >= 70 && nilai <= 79) {
//   console.log("nilai anda adalah" + nilai + " nilai anda C");
// } else if (nilai >= 60 && nilai <= 69) {
//   console.log("nilai anda adalah " + nilai + " nilai anda D");
// } else if (nilai >= 0 && nilai <= 59) {
//   console.log("nilai anda adalah " + nilai + " nilai anda E");
// } else {
//   console.log("nilai anda tidak valid");
// }

// ======================================

// if (38 % 2) {
//   console.log("genap");
// } else {
//   console.log("ganjil");
// }
// =======================================

// switch

// nilai A 90 - 100
// nilai B 80 - 89
// nilai C 70 - 79
// nilai D 60 - 69

// nilai = prompt("masukkan nilai");

// switch (nilai) {
//   case 90:
//     console.log("nilai anda A");
//     break;
//   case 80:
//     console;
//     log("nilai anda B");
//     break;
//   case 70:
//     console.log("nilai anda C");
//     break;
//   case 60:
//     console.log("nilai anda D");
//     break;
//   default:
//     console.log("nilai anda tidak valid");
//     break;
// }

// =======================================

// PERULANGAN

// for
// while
// do while

// for (start; stop; step) {}

// biar ngga ketiban

// let simpan = 1;
// simpan = simpan + 1;
// simpan += 1;
// console.log(simpan);

// let data = "";

// for (let i = 0; i <= 100; i++) {
//   data += i + " ";
// }
// console.log(data);

// for (let i = 100; i >= 1; i -= 2) {
//   console.log(i);
// }

// =======================================
// while

let angka = 1;
// while (angka <= 100) {
//   console.log(angka);
//   angka += 10;
// }

// =======================================

// do {
//   console.log(angka);
//   angka++;
// } while (angka <= 100);

// let input
// console.log("input kartu dan pin");

// do {
//     input = prompt("masukkan kartu dan pin");
//     input = Number(input);
// }

// switch (input) {
//     case 1:
//         console.log("kartu dan pin valid");
//         break;

//     case 2:
//         console.log("tarik tunai");
//         break;

//     case 3:
//         console.log("cek saldo");
//         break;
// } while (input != 4) {
//     console.log("kartu dan pin tidak valid");
// }

// =======================================

// for (let i = 1; i <= 10; i++) {
//   if (i % 2 == 0) {
//     console.log(i, " adalah genap");
//     continue;
//   } else console.log(i, " adalah ganjil");
// }

// =======================================

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < data.length; i++) {
  if (data[i] == 5) {
    console.log(data[i], " adalah angka 5");
    continue;
  }
  console.log(data[i]);
}
