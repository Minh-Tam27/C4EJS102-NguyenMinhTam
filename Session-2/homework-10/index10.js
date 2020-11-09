console.log('Ex 10:');
let mass = prompt ('Your weight? (kg)');
let height = prompt ('Your height? (m)');
let bmi = mass/(height*height);
alert ('BMI = ' + bmi);
console.log ('BMI = ' + bmi);
if (bmi > 30)
{
    alert ('Obese');
    console.log ('Obese');
}
else if (bmi > 25)
{
    alert ('Overweight');
    console.log ('Overweight');
}
else if (bmi > 18.5)
{
    alert ('Normal');
    console.log ('Normal');
}
else if (bmi > 16)
{
    alert ('Underweight');
    console.log ('Underweight');
}
else
{
    alert ('Severely underweight');
    console.log ('Severely underweight');
}