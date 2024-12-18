function calculateBMI() {
    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const age = document.getElementById('age').value;
    const sex = document.getElementById('sex').value;

    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        document.getElementById('bmi-result').innerHTML = "Please enter valid height and weight!";
        return;
    }

    const bmi = weight / ((height / 100) ** 2);
    const bmiRounded = bmi.toFixed(2);

    let category = '';

    if (bmi < 18.5) {
        category = 'Underweight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = 'Normal weight';
    } else if (bmi >= 25 && bmi < 29.9) {
        category = 'Overweight';
    } else {
        category = 'Obesity';
    }

    document.getElementById('bmi-result').innerHTML = `
        Age: <strong>${age}</strong><br>
        Sex: <strong>${sex.charAt(0).toUpperCase() + sex.slice(1)}</strong><br>
        Your BMI is <strong>${bmiRounded}</strong>, which is considered <strong>${category}</strong>.
    `;

    // Clear the input fields after calculation
    document.getElementById('height').value = '';
    document.getElementById('weight').value = '';
    document.getElementById('age').value = '';
    document.getElementById('sex').value = 'male'; // Reset to default value
}

function toggleBMIChart() {
    const chart = document.getElementById('bmi-chart');
    chart.style.display = (chart.style.display === "none") ? "block" : "none";
}

// function calculateBMI() {
//     const height = parseFloat(document.getElementById('height').value);
//     const weight = parseFloat(document.getElementById('weight').value);
//     const age = document.getElementById('age').value;
//     const sex = document.getElementById('sex').value;

//     if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
//         document.getElementById('bmi-result').innerHTML = "Please enter valid height and weight!";
//         return;
//     }

//     const bmi = weight / ((height / 100) ** 2);
//     const bmiRounded = bmi.toFixed(2);

//     let category = '';

//     if (bmi < 18.5) {
//         category = 'Underweight';
//     } else if (bmi >= 18.5 && bmi < 24.9) {
//         category = 'Normal weight';
//     } else if (bmi >= 25 && bmi < 29.9) {
//         category = 'Overweight';
//     } else {
//         category = 'Obesity';
//     }

//     document.getElementById('bmi-result').innerHTML = `
//         Age: <strong>${age}</strong><br>
//         Sex: <strong>${sex.charAt(0).toUpperCase() + sex.slice(1)}</strong><br>
//         Your BMI is <strong>${bmiRounded}</strong>, which is considered <strong>${category}</strong>.
//     `;
// }

// function toggleBMIChart() {
//     const chart = document.getElementById('bmi-chart');
//     chart.style.display = (chart.style.display === "none") ? "block" : "none";
// }

// function calculateBMI() {
//     const height = parseFloat(document.getElementById('height').value);
//     const weight = parseFloat(document.getElementById('weight').value);
//     const age = document.getElementById('age').value;
//     const sex = document.getElementById('sex').value;

//     if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
//         document.getElementById('bmi-result').innerHTML = "Please enter valid height and weight!";
//         return;
//     }

//     const bmi = weight / ((height / 100) ** 2);
//     const bmiRounded = bmi.toFixed(2);

//     let category = '';

//     if (bmi < 18.5) {
//         category = 'Underweight';
//     } else if (bmi >= 18.5 && bmi < 24.9) {
//         category = 'Normal weight';
//     } else if (bmi >= 25 && bmi < 29.9) {
//         category = 'Overweight';
//     } else {
//         category = 'Obesity';
//     }

//     document.getElementById('bmi-result').innerHTML = `
//         Age: <strong>${age}</strong><br>
//         Sex: <strong>${sex.charAt(0).toUpperCase() + sex.slice(1)}</strong><br>
//         Your BMI is <strong>${bmiRounded}</strong>, which is considered <strong>${category}</strong>.
//     `;
// }

// function calculateBMI() {
//     const height = parseFloat(document.getElementById('height').value);
//     const weight = parseFloat(document.getElementById('weight').value);

//     if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
//         document.getElementById('bmi-result').innerHTML = "Please enter valid values!";
//         return;
//     }

//     const bmi = weight / ((height / 100) ** 2);
//     const bmiRounded = bmi.toFixed(2);

//     let category = '';

//     if (bmi < 18.5) {
//         category = 'Underweight';
//     } else if (bmi >= 18.5 && bmi < 24.9) {
//         category = 'Normal weight';
//     } else if (bmi >= 25 && bmi < 29.9) {
//         category = 'Overweight';
//     } else {
//         category = 'Obesity';
//     }

//     document.getElementById('bmi-result').innerHTML = `
//         Your BMI is <strong>${bmiRounded}</strong> which is considered <strong>${category}</strong>.
//     `;
// }

/*
const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}


document.getElementById('bmiForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const height = parseFloat(document.getElementById('height').value) / 100;
  const weight = parseFloat(document.getElementById('weight').value);
  const bmi = weight / (height * height);
  let resultText;

  if (bmi < 18.5) {
      resultText = 'Underweight';
  } else if (bmi >= 18.5 && bmi <= 24.9) {
      resultText = 'Healthy';
  } else if (bmi >= 25 && bmi <= 29.9) {
      resultText = 'Overweight';
  } else {
      resultText = 'Obese';
  }

  document.getElementById('bmiResult').innerText = `Your BMI is ${bmi.toFixed(1)} (${resultText})`;
});
*/