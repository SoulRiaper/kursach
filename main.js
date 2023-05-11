

/* для изначального поиска данных, формирует нынешний график */
getData(async (json) => { 
      await createChart(json);
}, 'getMany');

setInterval(() => {
      getData((json)=>{
            json = JSON.parse(json);
            var date = json.map(obj => obj.date);
            var voltage = json.map(obj => obj.voltage).toString();

            if(chart.data.labels.slice(-1).toString() != date.toString()){
                  addData(chart, date, voltage);
                  removeOne(chart);
            }
      }, 'getOne');
}, 2000);


/* ФУНКЦИИ ДЛЯ ДОБАВЛЕНИЯ НОВОЙ ТОЧКИ, УДАЛЕНИЯ ПЕРВОЙ ТОЧКИ (ЧТОБ НЕ ЗАСОРЯТЬ ГРАФИК МОЖНО ИСПОЛЬЗОВАТЬ ОБЕ,
 ТАКИМ ОБРАЗОМ КОЛЛИЧЕСТВО ТОЧЕК ВСЕГДА БУДЕТ ОДИНАКОВЫМ) */

/*  добавляет новое значение к выбранному графику */
 function addData(chart, label, data) {
      chart.data.labels.push(label);
      chart.data.datasets.forEach((dataset) => {
            dataset.data.push(data);
      });
      chart.update();
}

/* функция удаляет последнее значение в графике */
function removeOne(chart) { // 
      chart.data.labels.shift();
      chart.data.datasets.forEach((dataset) => {
            dataset.data.shift();
      })
      chart.update();
}

/* получение данных из коллбека (from server) action это точки доступа к серверу  */
function getData(callback, action)
{
      let xhr = new XMLHttpRequest();
      xhr.open("GET", 'app.php?action=' + action, true);

      xhr.onload = function () {
            let data = xhr.response;
            return callback(data); // при вызове коллбека можно из аргумента data получить данные запроса
      }
      xhr.send();
}

/* функция , создает новый график */
function createChart(json) {

      data = JSON.parse(json).reverse();

      const canvaNode = document.getElementById("myChart"); // находит в html элемент графика

      const xValues = data.map(obj => obj.date);
      const yValues = data.map(obj => obj.voltage);

      chart = new Chart(canvaNode, { // создает новый элемент Chart.js
            type: "line",
            data: {
                  labels: xValues, // массив шкалы x
                  datasets: [{
                        label: "Напряжение  ", // название графика
                        borderColor: "rgba(0, 255, 200 , 0.3 )",
                        fill: false,
                        data: yValues //массив данных y
                  }]
            },
            options: {
                  legend: { // показывать легенду графиков
                        display: false,
                  },
            }
      });
}