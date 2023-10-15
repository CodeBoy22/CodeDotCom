const ctx1 = document.getElementById('chart1').getContext('2d');
const ctx2 = document.getElementById('chart2').getContext('2d');

const chartData = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
        {
            label: 'Chart 1 Data',
            data: [12, 19, 3, 5, 2],
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
        },
        {
            label: 'Chart 2 Data',
            data: [5, 10, 15, 5, 20],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
        },
    ],
};

const chartOptions = {
    scales: {
        y: {
            beginAtZero: true,
        },
    },
};

new Chart(ctx1, {
    type: 'bar',
    data: chartData,
    options: chartOptions,
});

new Chart(ctx2, {
    type: 'line',
    data: chartData,
    options: chartOptions,
});
