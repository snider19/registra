function calculateBMI() {
    var weight = parseFloat(document.getElementById('weight').value);
    var height = parseFloat(document.getElementById('height').value);
    
    var bmi = weight / (height * height);
    
    var bmiCategory;
    if (bmi < 18.5) {
      bmiCategory = "Bajo peso";
    } else if (bmi < 24.9) {
      bmiCategory = "Peso normal";
    } else if (bmi < 29.9) {
      bmiCategory = "Sobrepeso";
    } else {
      bmiCategory = "Obesidad";
    }
    document.getElementById('bmiResult').innerHTML = "Tu IMC es: " + bmi.toFixed(2) + " cm - " + bmiCategory;
  }
  
