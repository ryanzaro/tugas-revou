function hitungBMI() {
  var beratbadan = document.getElementById("beratbadan").value;
  var tinggibadan = document.getElementById("tinggibadan").value;

  // Rumus BMI & Hasil kolom hasil2
  if (beratbadan > 0 && tinggibadan > 0) {
    var hasilbmi = beratbadan / (((tinggibadan / 100) * tinggibadan) / 100);
    document.getElementById("hasil2").value = hasilbmi;
  }

  // Hasil kolom hasil1
  if (hasilbmi < 18.5) {
    document.getElementById("hasil1").value = "Kekurangan Berat Badan";
  }

  if (hasilbmi > 18.5 && hasilbmi < 24.9) {
    document.getElementById("hasil1").value = "Normal (Ideal)";
  }

  if (hasilbmi > 25.0 && hasilbmi < 29.9) {
    document.getElementById("hasil1").value = "Kelebihan Berat Badan";
  }

  if (hasilbmi > 30) {
    document.getElementById("hasil1").value = "Kegemukan (Obesitas)";
  }

  // Hasil Kolom hasil3

  if (hasilbmi < 18.5) {
    document.getElementById("hasil3").value =
      "Anda Memiliki Berat Badan Kurang";
  }

  if (hasilbmi > 18.5 && hasilbmi < 24.9) {
    document.getElementById("hasil3").value =
      "Anda Memiliki Berat Badan Yang Ideal";
  }

  if (hasilbmi > 25.0) {
    document.getElementById("hasil3").value =
      "Anda Memiliki Berat Badan Yang Berlebih";
  }
}

// Function Tombol Reset

function functionreset() {
  document.getElementById("form").reset();
}
