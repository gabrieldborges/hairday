export function hoursClick() {
  const hours = document.querySelectorAll(".hour-available");

  // console.log(hours)

  hours.forEach((available) => {
    available.addEventListener("click", (selected) => {
      //Remover a classe hour-selected de todas as li não selecionadas
      hours.forEach((hour) => {
        hour.classList.remove("hour-selected");
      });
      //Adiciona o hour-selected para a li selecionada.
      selected.target.classList.add("hour-selected");
    });
    // console.log(available)
  });
}
