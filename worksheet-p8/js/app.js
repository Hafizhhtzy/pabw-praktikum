const profil = { 
    nama: "Muhammad Hafizh Dermawan",
    peran: "Mahasiswa Informatika",
    keahlian: ["HTML", "CSS", "JavaScript"], 
};

const kalimat = `Nama saya ${profil.nama}, dan saya belajar ${profil.keahlian.length} hal.`;
console.log(kalimat);

function buatPerkenalan({ nama, peran }) {
  return `${nama} — ${peran}`;
}

const formatKeahlian = (daftar) => daftar.join(" · ");

console.log(buatPerkenalan(profil));
console.log(formatKeahlian(profil.keahlian));