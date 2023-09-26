function searchMahasiswa() {
  pencarian = prompt("Masukkan nama mahasiswa yang dicari: ");

  let arrMahasiswa = [
    "alfito",
    "budi",
    "caca",
    "didi",
    "eka",
    "fafa",
    "gaga",
    "haha",
    "ika",
    "jaja",
    "kaka",
    "lala",
    "mama",
    "nana",
    "ojo",
    "papa",
    "qiqi",
    "rara",
    "sasa",
    "tata",
    "uji",
    "vivi",
    "wawa",
    "xixi",
    "yaya",
    "zizi",
  ];

  const hasilSearch = [];

  for (let index = 0; index < arrMahasiswa.length; index++) {
    if (arrMahasiswa[index].charAt(0) == pencarian.charAt(0)) {
      hasilSearch.push(arrMahasiswa[index]);
      break;
    } else {
      console.log("Tidak ada nama mahasiswa yang dimaksud");
      brake;
    }
  }
  console.log(hasilSearch);
}

searchMahasiswa();
