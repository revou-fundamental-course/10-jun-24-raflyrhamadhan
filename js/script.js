// bagian ini untuk bagian fillable bisa diisi hanya dengan angka saja tidak dengan yang lain
function validateInput(inputField) {
    // Hanya izinkan input berupa angka
    inputField.value = inputField.value.replace(/[^0-9\-]/g, '');
}
// ini adalah fungsi javascript untuk mengkonversi suhu Celcius ke Fahrenheit
function convertToCelsius() {
    // untuk pengecekan atau validasi pengiaian fillable
    var input1 = document.getElementById("input1").value.trim();
    if (input1 === "") {
        alert("Masukkan suhu yang ingin dikonversi.");
        return;
    }
    
    var temperature = parseFloat(input1);
    var convertedTemperature = (temperature * 9/5) + 32; // Konversi Celcius ke Fahrenheit
    
    // untuk menampilkan hasil kalkulasi
    var calculationDetails = temperature + " °C * (9/5) + 32 = " + convertedTemperature.toFixed(2) + " °F.";
    
    document.getElementById("input2").value = convertedTemperature.toFixed(2);
    document.getElementById("calculationDetails").innerText = calculationDetails;
}
// ini adalah fungsi javascript untuk mengkonversi suhu Fahrenheit ke Celcius
function convertToFahrenheit() {
    // untuk pengecekan atau validasi pengiaian fillable
    var input2 = document.getElementById("input2").value.trim();
    if (input2 === "") {
        alert("Masukkan suhu yang ingin dikonversi.");
        return;
    }
    
    var temperature = parseFloat(input2);
    var convertedTemperature = (temperature - 32) * 5/9; // Konversi Fahrenheit ke Celcius
    
    // untuk menampilkan hasil kalkulasi
    var calculationDetails = "(" + temperature + " °F - 32) * 5/9 = " + convertedTemperature.toFixed(2) + " °C.";
    
    document.getElementById("input1").value = convertedTemperature.toFixed(2);
    document.getElementById("calculationDetails").innerText = calculationDetails;
}

// fungsi untuk mereset semua text dan fillable yang sudah terisi
function resetAll() {
    document.getElementById("input1").value = "";
    document.getElementById("input2").value = "";
    document.getElementById("calculationDetails").innerText = "";
}