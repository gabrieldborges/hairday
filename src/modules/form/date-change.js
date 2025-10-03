import { schedulesDay } from "../schedules/schedule-load.js";
//Seleciona o input de data

const selectedDate = document.getElementById("date");

//Recarega a lista de horários qundo o input de data mudar

selectedDate.onchange = () =>  schedulesDay()
