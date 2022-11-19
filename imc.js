function askName(){
    return prompt(`Enter your name: `);
}
let name = askName();

function askWeight(){
    return parseFloat(prompt("Enter your weight in kg: "));
}
let weight = askWeight();

function askHeight(){
    return parseFloat(prompt("Enter your height in mt: ")); 
}
let height = askHeight();

function calculateBMI(){
    return weight/(height * height);
}
let BMI = calculateBMI();

function checkBMI(){
    if(BMI < 18.5) return "underweight"
    else if(BMI >= 18.5 && BMI <= 24.9) return "normal weight"
    else if(BMI > 30.0) return "obesity"
}
let text = checkBMI();

function message(){
    alert(`${name} you have ${text}, your BMI is ${BMI.toFixed(2)}`);
}
message();