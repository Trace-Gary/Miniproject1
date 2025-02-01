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