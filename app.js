var css=document.querySelector('h3'); // 빈 글자창
var color1=document.querySelector('.color1'); //컬러1 인풋창
var color2=document.querySelector('.color2'); //컬러2 인풋창
var body=document.getElementById('gradient');



function setGradient() {
    body.style.backgound="linear-gradient(to right, "+color1.value+","+color2.value+")";
    css.textContent=body.style.backgroundColor + ";";
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);