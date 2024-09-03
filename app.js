const form = document.getElementById("form");
const input = document.getElementById("input");
const result = document.getElementById("result");

form.addEventListener("submit", (event) => {
  event.preventDefault()
  const score = input.value; 

  if (score >= 90 && score <= 100){
    result.innerHTML = "Your Grade Is  <span style='color: green'>A+</span>"
  } else if (score >= 80 && score <= 89) {
    result.innerHTML = "Your Grade Is  <span style='color: green'>A</span>"
  } else if (score >= 70 && score <= 79) {
    result.innerHTML = "Your Grade Is  <span style='color: green'>B</span>"
  } else if (score >= 60 && score <= 69) {
    result.innerHTML = "Your Grade Is  <span style='color: green'>C</span>"
  } else if (score >= 40 && score <= 59) {
    result.innerHTML = "Your Grade Is  <span style='color: green'>D</span>"
  } else if (score < 40 && score >= 1) {
    // result.style.color = "red"
    result.innerHTML ="<span style='color: red'>FAIL</span>"
  } else {

    result.innerHTML = "<span style='color: red'>In validate Number</span>"
  }
})