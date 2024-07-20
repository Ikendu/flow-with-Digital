let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let calcForm = document.getElementById("calcForm");
let calc = document.getElementById("calc");
let result = document.getElementById("result");

calcForm.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!num1.value || !num2.value) {
    alert("Please make sure to enter approprate value");
  } else {
    let smallNum = Number(num1.value);
    let bigNum = Number(num2.value);

    let percentage = (smallNum / bigNum) * 100;
    result.innerText = "Result: " + percentage + "%";
  }
});
