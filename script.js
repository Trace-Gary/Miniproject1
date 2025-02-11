// Signup Box validation


function validatePassword() {
    let password = document.getElementById("password").value;
    
    if (password.length < 8) {
        alert("Your password must be at least 8 characters long.");
        return false;
    }
    
    return true;
};












const proxyUrl = "https://cors-anywhere.herokuapp.com/";
const apiKey = "81b7cb1ff32c4a21a1299de3202fa40a";
const url = "https://api.football-data.org/v4/competitions/PL/standings";

async function fetchStandings() {
  try {
    const response = await fetch(proxyUrl + url, {
      method: "GET",
      headers: {
        "X-Auth-Token": apiKey,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Fetched data:", data);

    if (!data.standings || data.standings.length === 0) {
      throw new Error("No standings data found.");
    }

    const standings = data.standings[0].table;
    const tbody = document.getElementById("standings-body");

    if (!tbody) {
      throw new Error("Table body element not found.");
    }

    tbody.innerHTML = ""; // Clear previous data
    standings.forEach((team) => {
      const row = document.createElement("tr");
      row.innerHTML = `
                  <td>${team.position}</td>
                  <td>${team.team.name}</td>
                  <td>${team.playedGames}</td>
                  <td>${team.won}</td>
                  <td>${team.draw}</td>
                  <td>${team.lost}</td>
                  <td>${team.points}</td>
              `;
      tbody.appendChild(row);
    });
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// Fetch data when the page loads
document.addEventListener("DOMContentLoaded", fetchStandings);



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