import dayjs from "dayjs"


//Data atual 
const inputToday = dayjs(new Date()).format("YYYY-MM-DD")

// Variáveis para selecionar o html
const form = document.querySelector("form");
const selectedDate = document.getElementById("date");

//Carrega a data atual e define a data atual como data mínima
selectedDate.value = inputToday
selectedDate.min = inputToday


form.onsubmit = (event) => {
  event.preventDefault();

  console.log("Form submitted!");
};
