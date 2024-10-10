const height = document.querySelector(".height");
const weight = document.querySelector(".weight");
const calculateButton = document.querySelector(".calculate-btn");
let results = document.querySelector(".results");
let massage = document.querySelector(".massage");


calculateButton.addEventListener("click",()=>{
    const heightDigits = Number(height.value);
    const weightDigits = Number(weight.value);
    let BMI = ((weightDigits/heightDigits**2)*10000).toFixed(2);
    results.innerHTML = BMI;
    
    if(BMI < 16){
        massage.innerHTML = "extreme thinness"
    }else if(BMI >= 16 & BMI < 18){
        massage.innerHTML = "moderate thinness"
    }else if(BMI >= 18 & BMI < 25){
        massage.innerHTML = "normal"
    }else if(BMI >=25 & BMI < 30){
        massage.innerHTML = "obese class 1"
    }else if(BMI >= 30 & BMI < 40){
        massage.innerHTML = "obese class 2"
    }else if(BMI >= 40){
        massage.innerHTML = "obese class 3"
    }
});