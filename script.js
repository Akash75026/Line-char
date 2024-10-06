const ctx = document.getElementById('salesChart').getContext('2d');

const salesData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [{
        label: 'Monthly Sales',
        data: [1000, 1200, 1500, 1800, 2000, 2200, 2500, 2800, 3000, 3200, 3500, 3800],
        borderColor: '#4CAF50', 
        backgroundColor: 'rgba(76, 175, 80, 0.2)', 
        borderWidth: 2,
        fill: true,
        tension: 0.3, 
        pointRadius: 5, 
        pointBackgroundColor: '#4CAF50', 
        pointBorderColor: '#fff', 
        pointBorderWidth: 2,
    }]
};

const salesChart = new Chart(ctx, {
    type: 'line',
    data: salesData,
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: 'top',
                labels: {
                    color: '#333', 
                }
            },
            title: {
                display: true,
                text: 'Monthly Sales Over the Past Year',
                color: '#333', 
                font: {
                    size: 16, 
                }
            }
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Month',
                    color: '#333',
                },
                grid: {
                    color: 'rgba(200, 200, 200, 0.5)', 
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Sales',
                    color: '#333',
                },
                beginAtZero: true,
                grid: {
                    color: 'rgba(200, 200, 200, 0.5)', 
                }
            }
        },
        elements: {
            line: {
                borderDash: [5, 5], 
            },
            point: {
                hoverRadius: 8, 
            }
        },
        tooltips: {
            callbacks: {
                label: function(tooltipItem) {
                    return `Sales:${tooltipItem.raw}`;
                }
            }
        }
    }
});
