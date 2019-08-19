
var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
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
    }
});