function clearDisplay() {
  document.getElementById("display").value = "";
}

function appendToDisplay(value) {
  document.getElementById("display").value += value; // value = value + value
}

function deleteLast() {
  const display = document.getElementById("display");
  display.value = display.value.slice(0, -1);
}

function calculateResult() {
  try {
    const result = eval(document.getElementById("display").value);
    document.getElementById("display").value = result;
  } catch (error) {
    document.getElementById("display").value = "Error";
  }
}
