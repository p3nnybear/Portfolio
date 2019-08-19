var ctx = document.getElementById("chart2");
var chart2 = new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ["Almost Everyday", "1-3 times / week", "4-6 times / week", "1-3 times / month"],
      datasets: [{
        label: "Frequency",
        backgroundColor: ["#e8c3b9", "#8e5ea2","#3cba9f","#3e95cd"],
        data: [2,8,2,37]
      }]
    },
    options: {
      title: {
        display: true,
        text: 'How often do you shop on the website?'
      }
    //   tooltips: {
    //     enabled: false
    //   },
    //  plugins: {
    //   datalabels: {
    //       formatter: (value, ctx) => {
    //         let sum = 0;
    //         let dataArr = ctx.chart.data.datasets[0].data;
    //         dataArr.map(data => {
    //             sum += data;
    //         });
    //         let percentage = (value*100 / sum).toFixed(2)+"%";
    //         return percentage;
    //       },
    //       color: '#fff'
    //     }
    //   }
    }
});

var ctx = document.getElementById("chart1");
var chart1 = new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ["Yes", "No", "Maybe"],
      datasets: [{
        label: "Answer",
        backgroundColor: ["#e8c3b9", "#8e5ea2","#3cba9f","#3e95cd"],
        data: [34,5,10]
      }]
    },
    options: {
      title: {
        display: true,
        text: 'Are you willing to spend money on designer brands?'
      }
    }
});