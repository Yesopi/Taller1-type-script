import { series } from './data.js';
var seriesTbody = document.getElementById('series');
var seriesAvarage = document.getElementById("avarage");
renderSeriesInTable(series);
actualizarPromedioTemporadas(series);
function renderSeriesInTable(series) {
    console.log('Desplegando cursos');
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(serie.id, "</td>\n                           <td>").concat(serie.name, "</td>\n                           <td>").concat(serie.channel, "</td>\n                           <td>").concat(serie.seasons, "</td>");
        seriesTbody.appendChild(trElement);
    });
}
function actualizarPromedioTemporadas(listadoSeries) {
    var acumuladoTemporadas = 0;
    listadoSeries.forEach(function (serie) {
        acumuladoTemporadas += serie.seasons;
    });
    var promedioTemporadas = acumuladoTemporadas / listadoSeries.length;
    var promedioFinal = promedioTemporadas ? Math.ceil(promedioTemporadas) : 0; // Usamos ceil para redondear hacia arriba y manejar caso cero
    seriesAvarage.textContent = "Average Seasons: ".concat(promedioFinal);
}
