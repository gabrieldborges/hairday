import dayjs from "dayjs";

//Data atual
const inputToday = dayjs(new Date()).format("YYYY-MM-DD");

// Variáveis para selecionar o html
const form = document.querySelector("form");
const selectedDate = document.getElementById("date");
const clientName = document.getElementById("client");

//Carrega a data atual e define a data atual como data mínima
selectedDate.value = inputToday;
selectedDate.min = inputToday;

form.onsubmit = (event) => {
  event.preventDefault();

  try {
    //Recupera o nome do cliente
    const name = clientName.value.trim();

    if (!name) {
      return alert("Informe o nome do cliente.");
    }

    const hourSelected = document.querySelector(".hour-selected");
    if (!hourSelected) {
      return alert("Insira o horário do agendamento");
    }
    //Recupera somente a hora
    const hour = hourSelected.value;
    console.log(name, hour);
    //Adiciona a hour na data
    const when = dayjs(selectedDate.value).add(hour, "hour")
    console.log(when)

    const id = new Date().getTime()
    console.log({
      id,
      name,
      when
    })


  } catch (error) {
    alert("Não foi possível realizar o agendamento");
    console.log(error);
  }
};
