const xValues = [50,60,70,80,90,100,110,120,130,140,150];
const yValues = [7,8,8,9,9,9,10,11,14,14,15];

const canvaNode = document.getElementById("myChart").getContext('2d');

chart = new Chart(canvaNode, {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{
        label: "Мое чсв",
        borderColor: "rgba(0, 255, 200 , 0.3 )",
        fill: false,
        data: yValues
    }]
  },
  options:{
    legend:{
      display: false,
    }
  }
});

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

let xMax = 150;
let yRand = 10;
let i = 10;

function updateData() {
  xMax += 10;
  yRand = Math.floor(Math.random() * 20);
  addData(chart, xMax, yRand);
  removeOne(chart);
}

