

getData(async (json) => { // для изначального поиска данных, формирует нынешний график
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


// функции для добавления новой точки, удаления первой точки (чтоб не засорять график можно использовать обе, таким образом колличество точек всегда будет одинаковым)
function addData(chart, label, data) { // добавляет новое значение к выбранному графику
      chart.data.labels.push(label);
      chart.data.datasets.forEach((dataset) => {
            dataset.data.push(data);
      });
      chart.update();
}

function removeOne(chart) { // функция удаляет последнее значение в графике
      chart.data.labels.shift();
      chart.data.datasets.forEach((dataset) => {
            dataset.data.shift();
      })
      chart.update();
}

function getData(callback, action) // получение данных из коллбека (from server)
{
      let xhr = new XMLHttpRequest();
      xhr.open("GET", 'app.php?action=' + action, true);

      xhr.onload = function () {
            let data = xhr.response;
            return callback(data); // при вызове коллбека можно из аргумента data получить данные запроса
      }
      xhr.send();
}

function createChart(json) { // функция , создает новый график

      data = JSON.parse(json).reverse();

      const canvaNode = document.getElementById("myChart"); // находим в html элемент графика (у него id = myChart)

      const xValues = data.map(obj => obj.date);
      const yValues = data.map(obj => obj.voltage);

      chart = new Chart(canvaNode, { // создаем новый элемент Chart.js (библиотека для графиков) и задаем его свойства
            type: "line",
            data: {
                  labels: xValues, // массив шкалы
                  datasets: [{
                        label: "Напряжение  ", // название графика
                        borderColor: "rgba(0, 255, 200 , 0.3 )",
                        fill: false,
                        data: yValues // задаем массив данных
                  }]
            },
            options: {
                  legend: { // не показывать легенду графиков
                        display: false,
                  },
            }
      });
}