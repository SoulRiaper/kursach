const xValues = [50,60,70,80,90,100,110,120,130,140,150];
const yValues = [7,8,8,9,9,9,10,11,14,14,15];

const canvaNode = document.getElementById("myChart"); // находим в html элемент графика (у него id = myChart)

chart = new Chart(canvaNode, { // создаем новый элемент Chart.js (библиотека для графиков) и задаем его свойства
  type: "line",
  data: {
    labels: xValues, // массив шкалы
    datasets: [{
        label: "Мое чсв", // название графика
        borderColor: "rgba(0, 255, 200 , 0.3 )",
        fill: false,
        data: yValues // задаем массив данных
    }]
  },
  options:{
    legend:{ // не показывать легенду графиков
      display: false,
    }
  }
});

let xMax = 150;
let yRand;

function updateData() { // функция добавляет рандомные значения в график
  xMax += 10;
  yRand = Math.floor(Math.random() * 20);
  addData(chart, xMax, yRand);
  removeOne(chart);
}

// функции для добавления новой точки, удаления первой точки (чтоб не засорять график можно использовать обе, таким образом колличество точек всегда будет одинаковым)
function addData(chart, label, data) {
  chart.data.labels.push(label);
  chart.data.datasets.forEach((dataset) => {
      dataset.data.push(data);
  });
  chart.update();
}

function removeOne(chart) {
chart.data.labels.shift();
chart.data.datasets.forEach((dataset)=> {
  dataset.data.shift();
})
chart.update();
}
