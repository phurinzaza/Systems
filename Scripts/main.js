function calculateBMR(age, weight, height, gender) {
    if (gender === "male") {
        return 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
    } else {
        return 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
    }
}
document.getElementById('bmr-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const age = parseFloat(document.getElementById('age').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const gender = document.getElementById('gender').value;
    const bmr = calculateBMR(age, weight, height, gender);
    document.getElementById('bmr-value').innerText = bmr.toFixed(2);
    document.getElementById('result').classList.remove('hidden');
});