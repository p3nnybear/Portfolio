
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
