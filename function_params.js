// function sum(a = 4, b) {
//   return a + b;
// }
// num1 = 5;
// num2 = 10;

// console.log(sum(num1, num2));

// =======================================

// const str1 = "hello";
// const str2 = "world";

// console.log(str1.concat(" ", str2));

// =======================================

// function Mobil(Merek, Nama, Jenis, Warna) {
//   this.Merek = Merek;
//   this.Nama = Nama;
//   this.Jenis = Jenis;
//   this.Warna = Warna;
// } //

// const mobil1 = new Mobil("Toyota", "Avanza", "MPV", "Silver");

// console.log(mobil1);

// =======================================

// function luasPersegi(sisi) {
//   return sisi * sisi;
// }

// function luasPersegiPanjang(panjang, lebar) {
//   return panjang * lebar;
// }

// console.log("luas persegi kamu adalah =", luasPersegi(5));
// console.log("luas persegi panjang kamu adalah =", luasPersegiPanjang(5, 10));

// =======================================

// function mahasiswa(nama, umur, jurusan) {
//   console.log(`nama mahasiswa saya adalah ${nama}`);
//   console.log(`umur mahasiswa saya adalah ${umur}`);
//   console.log(`jurusan mashasiswa saya adalah ${jurusan}`);

//   return mahasiswa;
// }

// mahasiswa("alfito", 20, "informatika");

// =======================================

// function firstTextCapital(text) {
//   let result = text[0].toLocaleUpperCase() + text.slice(1, text.length);
//   return result;
// }

// console.log("test", firstTextCapital("test"));
// console.log("sepatu", firstTextCapital("sepatu"));
// console.log("baju", firstTextCapital("baju"));

// =======================================

// bentuk satu
// function namaFunction() {}

// // bentuk dua
// let functionVariable = function () {};

// functionVariable();

// // bentuk tiga
// let arrowFunction = () => {};

// bentuk empat

// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(function (item) {
//   return item * 2;
// });

// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => {
//   return item * 2;
// });

// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => item * 2);

// =======================================

// pembuatan method
// let kucing = {
//   nama: "kucing",
//   warna: "hitam",
//   tidur: () => {},
//   makan: function () {},
// };

// =======================================

// callback and short syntax

let luasLinkaran = (r) => {
  3.14 * r * r;
};

console.log((luasLinkaran = input));
