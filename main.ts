
import { Serie } from './serie.js';

import { series } from './data.js';

let seriesTbody: HTMLElement = document.getElementById('series')!;
const seriesAvarage: HTMLElement = document.getElementById("avarage")!;
renderSeriesInTable(series);
actualizarPromedioTemporadas(series);
function renderSeriesInTable(series: Serie[]): void {
  console.log('Desplegando cursos');
  series.forEach((serie) => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>${serie.id}</td>
                           <td>${serie.name}</td>
                           <td>${serie.channel}</td>
                           <td>${serie.seasons}</td>`;
  seriesTbody.appendChild(trElement);
  });
}

function actualizarPromedioTemporadas(listadoSeries: Serie[]): void {
  let acumuladoTemporadas = 0;
  listadoSeries.forEach(serie => {
    acumuladoTemporadas += serie.seasons;
  });
  const promedioTemporadas = acumuladoTemporadas / listadoSeries.length;
  const promedioFinal = promedioTemporadas ? Math.ceil(promedioTemporadas) : 0; // Usamos ceil para redondear hacia arriba y manejar caso cero
  seriesAvarage.textContent = `Average Seasons: ${promedioFinal}`;
}