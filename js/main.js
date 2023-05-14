var chart;

/* для изначального поиска данных, формирует нынешний график */
getDataByAction(async (json) => {
      await createChart(json);
}, 'getMany');

fetchVersionData();
setDateIntervals();
getDbConf();

//TODO: разобраться как остановить set interval

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
function removeOne(chart) {
      chart.data.labels.shift();
      chart.data.datasets.forEach((dataset) => {
            dataset.data.shift();
      })
      chart.update();
}

/* функция , создает новый график */
function createChart(data) {

      resetCanvas();

      data = data.reverse();

      const canvaNode = document.getElementById("myChart"); // находит в html элемент графика

      const xValues = data.map(obj => obj.date);
      const yValues = data.map(obj => obj.voltage);



      this.chart = new Chart(canvaNode, {
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
            options: { // опции отображения
                  scales:{
                        yAxes:[
                              {
                                    scaleLabel:{
                                          display: true,
                                          labelString: 'Напряжение U, B'
                                    },
                                    ticks:{
                                          beginAtZero: true,
                                          max: 10
                                    }
                              }
                        ],
                        xAxes:[
                              {
                                    scaleLabel: {
                                          display: true,
                                          labelString: 'Время, t'
                                    }
                              }
                        ]
                  },
                  legend: { 
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

// отправляет запрос на сервер (две даты) и формирует новый график по ним
$(async function() {
      
      await $('#submitDate').on('click', function () {
            let result ={
                  start_date: $('#startDate').val(),
                  stop_date: $('#stopDate').val(),

            };

            $.ajax({
                  type: "POST",
                  url: "/app.php?action=getByDate",
                  data: {data: result},
                  success: function (response) {
                        let json = JSON.parse(response);
                        json = json.reverse();

                        createChart(json);
                  }
            });
            
      })

})

//ПЕРЕЗАГРУЖАЕТ ЭЛЕМЕНТ ГРАФИКА
var resetCanvas = function(){
      $('#myChart').remove();
      $('.chartjs-size-monitor').remove();
      $('.canvasContainer').append('<canvas id="myChart" style="width:100%;max-width:900px;margin:auto"></canvas>');
}

function fetchVersionData() {
      getDataByAction((json)=>{
            $('#phpVersion').text(json.php_version);
            $('#serverVersion').text(json.php_server);
      }, 'getPhpInfo')
}

function setDateIntervals() {
      getDataByAction((json)=>{
            $('#startDate').attr({min: json.start_date, max: json.stop_date});
            $('#stopDate').attr({min: json.start_date, max: json.stop_date});
      }, 'getDateIntervals' )
}

function getDbConf() {
      getDataByAction((json)=>{
            console.log(json);
      }, "getDbConf");
}