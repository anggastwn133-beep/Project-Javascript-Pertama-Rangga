const judul = document.getElementById("judul");
const tombol = document.getElementById("tombolAksi");
const kembali = document.getElementById("kembali");
const inputNama = document.getElementById("inputNama");
const tombolSapa = document.getElementById("tombolSapa");
const loading = document.getElementById("loading");

const modeDark = document.getElementById("modeDark");
const modeCoklat = document.getElementById("modeCoklat");
const modeRainbow = document.getElementById("modeRainbow");
const modeReset = document.getElementById("modeReset");

function resetMode() {
  document.body.classList.remove("dark", "coklat", "rainbow");
}

tombol.addEventListener("click", function () {
  judul.innerText = "Yess! JavaScript Berhasil!";
  judul.className = "orange";
});

kembali.addEventListener("click", function () {
  judul.innerText = "Halo, Selamat Datang!";
  judul.className = "";

  inputNama.value = "";
});

tombolSapa.addEventListener("click", function () {
  let namaUser = inputNama.value.trim();

  if (namaUser === "") {
    alert("Isi dulu namanya!");
    return;
  }

  loading.classList.remove("hidden");

  setTimeout(() => {
    loading.classList.add("hidden");
    judul.innerText = `Halo ${namaUser}! 😎`;
    judul.className = "biru";
  }, 800);
});

modeDark.addEventListener("click", function () {
  resetMode();
  document.body.classList.add("dark");
});

modeCoklat.addEventListener("click", function () {
  resetMode();
  document.body.classList.add("coklat");
});

modeRainbow.addEventListener("click", function () {
  resetMode();
  document.body.classList.add("rainbow");
});

modeReset.addEventListener("click", function () {
  resetMode();
});