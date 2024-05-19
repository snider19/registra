function calculateDogAge() {
    var dogAge = parseInt(document.getElementById('dogAge').value);
    var humanAge;
    
    if (dogAge === 1) {
      humanAge = 15;
    } else if (dogAge === 2) {
      humanAge = 24;
    } else {
      humanAge = 24 + (dogAge - 2) * 4;
    }

    document.getElementById('humanAgeResult').innerHTML = "La edad de tu perro equivale a aproximadamente " + humanAge + " años humanos.";
  }