import dayjs from "dayjs";
import { openingHours } from "../../utils/opening-hours.js";
import { hoursClick } from "./hours-click.js";

//Selecionar a lista
const hours = document.getElementById("hours");

export function hoursLoad({ date }) {
  const opening = openingHours.map((hour) => {
    // Recupera somente a hora
    const [scheduleHour] = hour.split(":");

    //Adiciona a hora no date e Verifica se a hora está no passado.
    const isHourPast = dayjs(date).add(scheduleHour, "hour").isAfter(dayjs());

    return {
      hour,
      available: isHourPast,
    };
  });

  // Renderiza os horários

  opening.forEach(({ hour, available }) => {
    const li = document.createElement("li");
    //Encontra e salva a hora em que o estabelicimento abre para agendamentos.
    const earliestHour = parseInt(opening[0].hour);
    // Adiciona as classes equivalentes
    li.classList.add("hour");
    li.classList.add(available ? "hour-available" : "hour-unavailable");
    li.textContent = hour;
    li.setAttribute("value", hour);
    // Atribuir o período do dia
    if (parseInt(hour) >= earliestHour && parseInt(hour) < 12) {
      li.setAttribute("data-period", "morning");
    } else if (parseInt(hour) >= 12 && parseInt(hour) < 18) {
      li.setAttribute("data-period", "afternoon");
    } else if (parseInt(hour) >= 18) {
      li.setAttribute("data-period", "night");
    }
    // Adiciona o título do período específico.
    switch (hour) {
      case "9:00":
        hourHeaderAdd("Manhã");
        break;
      case "12:00":
        hourHeaderAdd("Tarde");
        break;
      case "18:00":
        hourHeaderAdd("Noite");
        break;
    }

    hours.append(li);

    // console.log(li);
  });
// Adiciona os eventos de click nos horários disponíveis
  hoursClick()
}

function hourHeaderAdd(title) {
  const header = document.createElement("li");
  header.classList.add("hour-period");
  header.textContent = title;

  hours.append(header);
}
