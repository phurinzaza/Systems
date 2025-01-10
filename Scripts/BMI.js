function calculateBMI(weight, height) {
    const heightInMeters = height / 100;
    return weight / (heightInMeters * heightInMeters);
}
function getBMICategory(bmi) {
    if (bmi < 18.5) return 'Underweight';
    if (bmi >= 18.5 && bmi < 24.9) return 'Normal weight';
    if (bmi >= 25 && bmi < 29.9) return 'Overweight';
    return 'Obesity';
}
document.getElementById('bmi-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const bmi = calculateBMI(weight, height);
    document.getElementById('bmi-value').innerText = bmi.toFixed(2);
    document.getElementById('bmi-category').innerText = getBMICategory(bmi);
    document.getElementById('result').classList.remove('hidden');
});