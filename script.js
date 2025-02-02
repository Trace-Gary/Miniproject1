// Signup Box validation


function validatePassword() {
    let password = document.getElementById("password").value;
    
    if (password.length < 8) {
        alert("Your password must be at least 8 characters long.");
        return false;
    }
    
    return true;
}



let myChart = echarts.init(document.getElementById('main'));
                            // Specify the configuration items and data for the chart
    let option = {
        title: {
            text: 'ECharts Getting Started Example'
        },
        tooltip: {},
        legend: {
            data: ['sales']
        },
        xAxis: {
            data: ['Shirts', 'Cardigans', 'Chiffons', 'Pants', 'Heels', 'Socks']
        },
        yAxis: {},
        series: [
        {

        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
        }
        ]
        };
                            // Display the chart using the above configuration items and data
        myChart.setOption(option);




































// Filtering


document.getElementById('shop').addEventListener('click', function () {
    // Navigate to shop.html
    window.location.href = 'shop.html';
});
  

document.getElementById('index').addEventListener('click', function () {
    // Navigate to index.html
    window.location.href = 'index.html';
});


// Select all cards and dropdown items
const cards = document.querySelectorAll('.col');
const sortButtons = document.querySelectorAll('.dropdown .content a');

// Add event listeners to the sorting buttons
sortButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default link behavior
        const filter = button.textContent.toLowerCase(); // Get filter type from button text

        // Filter cards
        cards.forEach((card) => {
            const itemType = card.getAttribute('data-item'); // Get data-item value
            if (filter === 'all' || itemType === filter) {
                card.style.display = ''; // Show card
            } else {
                card.style.display = 'none'; // Hide card
            }
        });
    });
});