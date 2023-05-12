

/* для изначального поиска данных, формирует нынешний график */
getDataByAction(async (json) => { 
      await createChart(json);
}, 'getMany');

// setInterval(() => {
//       getDataByAction((json)=>{
//             var date = json.map(obj => obj.date);
//             var voltage = json.map(obj => obj.voltage).toString();

//             if(chart.data.labels.slice(-1).toString() != date.toString()){
//                   addData(chart, date, voltage);
//                   removeOne(chart);
//             }
//       }, 'getOne');
// }, 5000);


/* ФУНКЦИИ ДЛЯ ДОБАВЛЕНИЯ НОВОЙ ТОЧКИ, УДАЛЕНИЯ ПЕРВОЙ ТОЧКИ (ЧТОБ НЕ ЗАСОРЯТЬ ГРАФИК ИСПОЛЬЗУЕМ ОБЕ,
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

/* функция , создает новый график */
function createChart(data) {

      data = data.reverse();

      console.log(data)

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
                        display: true,
                  },
            }
      });
}


/* AJAX Methods */
/* получение данных из коллбека (from server) action это точки доступа к серверу  */
function getDataByAction(callback, action){

      $.ajax({
            type: "GET",
            url: "/app.php?action=" + action,
            data: "data",
            dataType: "json",
            success: function (data) {
                  return callback(data);
            }
      });
}

