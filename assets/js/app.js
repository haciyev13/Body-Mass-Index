let h = document.querySelector(".boy"),
  m = document.querySelector(".kq"),
  hesabla = document.querySelector(".hesabla"),
  result = document.querySelector(".result"),
  i,
  reset = document.querySelector("button[type='reset']"),
  expression = document.querySelector(".expression");

hesabla.addEventListener("click", function (e) {
  e.preventDefault();
  let value1 = h.value / 100;
  let value2 = m.value;
  i = value2 / Math.pow(value1, 2);
  result.textContent = i.toFixed(2);

  if (i < 18.49) {
    expression.innerHTML = "Kilonuz aşağıdır.";
  } else if (18.5 < i && i < 24.99) {
    expression.innerHTML = "Kilonuz Idealdır";
  } else if (25 < i && i < 29.99) {
    expression.innerHTML = "Kilonuz ideal kilodan artıqdır";
  } else if (30 < i) {
    expression.innerHTML = "Kilonuz ideal kilodan çox uzaqdır";
  } 
  
});

reset.addEventListener("click", function (e) {
  result.innerHTML = "";
  expression.innerHTML = "";
});
