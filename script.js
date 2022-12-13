/*
var xValues = [50,60,70,80,90,100,110,120,130,140,150];
var yValues = [7,8,8,9,9,9,10,11,14,14,15];

new Chart("myChart", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: "rgba(0,0,0,1.0)",
      borderColor: "rgba(0,0,0,0.1)",
      data: yValues
    }]
  }
});
*/



// value - Essa propriedade retorna o valor inserido em campos de formulário, como inputs e checkboxes, etc..
// innertText e text - Essas duas propriedades retornam o texto que está no interior de um container, como uma div, span, etc..
// innertHTML - Essa propriedade retorna não somente o texto que está no interior, mas também as tags que estivem também.

// ----> Vou ter que pegar todos os valores de dia e valor <----

var dias = document.getElementsByClassName('dia');

//console.log(dias[5].innerHTML);

console.log(dias.length);

var teste = document.getElementById('teste').innerHTML;

google.charts.load('current',{packages:['corechart']});

google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    // Set Data
    var data = google.visualization.arrayToDataTable([
      ['Price', 'Size'],
      [teste,7],[60,8],[70,8],[80,9],[90,9],[100,9],
      [110,10],[120,11],[130,14],[140,13],[150,15]
      ]);
    // Set Options
    var options = {
      title: 'House Prices vs Size',
      hAxis: {title: 'Square Meters'},
      vAxis: {title: 'Price in Millions'},
      legend: 'none'
    };
    // Draw Chart
    var chart = new google.visualization.LineChart(document.getElementById('myChart'));
    chart.draw(data, options);
    }
