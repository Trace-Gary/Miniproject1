// Signup Box validation


function validatePassword() {
    let password = document.getElementById("password").value;
    
    if (password.length < 8) {
        alert("Your password must be at least 8 characters long.");
        return false;
    }
    
    return true;
};





document.getElementById('categoryFilter').addEventListener('change', function() {
    let selectedCategory = this.value;
    let cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        let category = card.getAttribute('data-category');

        if (selectedCategory === "all" || category === selectedCategory) {
            card.parentElement.style.display = "block"; // Show the card
        } else {
            card.parentElement.style.display = "none"; // Hide the card
        }
    });
});






const apiKey = '81b7cb1ff32c4a21a1299de3202fa40a';
        
        // API endpoint for Premier League standings
        const url = 'https://api.football-data.org/v4/competitions/PL/standings';

        // Fetch data from football-data.org
        fetch(url, {
            method: 'GET',
            headers: {
                'X-Auth-Token': apiKey
            }
        })
        .then(response => response.json())
        .then(data => {
            const standings = data.standings[0].table; // The standings data is within the "table" array
            const table = document.getElementById('standings');

            // Create table headers
            const header = table.createTHead();
            const headerRow = header.insertRow(0);
            headerRow.insertCell(0).innerText = 'Position';
            headerRow.insertCell(1).innerText = 'Team';
            headerRow.insertCell(2).innerText = 'Played';
            headerRow.insertCell(3).innerText = 'Won';
            headerRow.insertCell(4).innerText = 'Drawn';
            headerRow.insertCell(5).innerText = 'Lost';
            headerRow.insertCell(6).innerText = 'Points';

            // Create table rows for each team's standings
            standings.forEach(team => {
                const row = table.insertRow();
                row.insertCell(0).innerText = team.position;
                row.insertCell(1).innerText = team.team.name;
                row.insertCell(2).innerText = team.playedGames;
                row.insertCell(3).innerText = team.won;
                row.insertCell(4).innerText = team.draw;
                row.insertCell(5).innerText = team.lost;
                row.insertCell(6).innerText = team.points;
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
    });