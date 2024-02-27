const celsiusField = document.querySelector("#cel");
const degree = document.querySelector("#degree");
const button = document.querySelector("#convert-btn");
const tempType = document.querySelector("#temp-type");
window.addEventListener("load", () => {
  degree.value = "";
  celsiusField.innerHTML = "";
});
button.addEventListener("click", (e) => {
  e.preventDefault();
  converttoCelsius();
  // add load feature
  button.innerHTML =
    "<span><i class='fa fa-spinner fa-spin'></i>Converting</span>";
  setTimeout(() => {
    button.innerHTML = "<span>Convert</span>";
  }, 1000);
});
function converttoCelsius() {
  let inputValue = degree.value;
  setTimeout(() => {
    if (tempType.value === "fahrenheit") {
      const ftoc = (inputValue - 32) * (5 / 9);
      celsiusField.innerHTML = `${ftoc.toFixed(3)} &deg;c`;
    } else if (tempType.value === "kelvin") {
      const ktoc = inputValue - 273.15;
      celsiusField.innerHTML = `${ktoc.toFixed(3)} &deg;c`;
    }
  }, 1000);
}
