function solve(name, age, weight, height) {
    let BMI = Math.round(weight / (Math.pow(height / 100, 2)));
    let person = {
        name,
        personalInfo: {
            age,
            weight,
            height
        },
        BMI,
        status: ''
    };
    if (BMI < 18.5) {
        person.status = 'underweight';
    } else if (BMI < 25) {
        person.status = 'normal';
    } else if (BMI < 30) {
        person.status = 'overweight';
    } else {
        person.status = 'obese';
        person.recommendation = 'admission required';
    }
   return person
    
}
solve('Peter', 29, 75, 182)