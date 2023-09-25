function searchMahasiswa() {
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
    if (arrMahasiswa[index].charAt(0) == "f") {
      hasilSearch.push(arrMahasiswa[index]);
      break;
    }
  }
  console.log(hasilSearch);
}

searchMahasiswa();
