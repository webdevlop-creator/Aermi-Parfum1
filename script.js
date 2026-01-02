function openDetail(nama, deskripsi, harga) {
  document.getElementById("detail").style.display = "block";
  document.getElementById("namaParfum").innerText = nama;
  document.getElementById("deskripsiParfum").innerText = deskripsi;
  document.getElementById("hargaParfum").innerText = "Harga: Rp" + harga + " (30ml)";

  const nomorWA = "6285187337263"; 

  const pesan = `Halo, saya mau pesan ${nama} ukuran 30ml dengan harga Rp${harga}`;

  document.getElementById("waBtn").href =
    "https://wa.me/" + nomorWA + "?text=" + encodeURIComponent(pesan);
}