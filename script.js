document.getElementById("btn").addEventListener("click", function () {
  let height = parseFloat(document.getElementById('height').value);
  let weight = parseFloat(document.getElementById('weight').value);
  let result = document.getElementById("result");

  if (!height || !weight || height <= 0 || weight <= 0) {
    result.innerHTML = "❌ Please enter valid height and weight!";
    result.style.color = "red";
    return;
  }

  let bmi = weight / ((height / 100) ** 2);
  let bmio = bmi.toFixed(1);
  let category = "";

  if (bmi < 18.5) {
    category = "Underweight";
  } else if (bmi >= 18.5 && bmi < 24.9) {
    category = "Normal weight";
  } else if (bmi >= 25 && bmi < 29.9) {
    category = "Overweight";
  } else {
    category = "Obesity";
  }

  result.style.color = "#2980b9";
  result.innerHTML = `Your BMI is <strong>${bmio}</strong> (${category})`;
});
