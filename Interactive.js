// script.js
function showEventDetails(year) {
    const eventText = {
        '2025': 'In 2025, technology reached a new milestone with AI taking over several industries. Innovations included autonomous cars and quantum computing.',
        '2020': 'In 2020, the world faced the global COVID-19 pandemic which changed the way we live, work, and connect.',
        '2015': 'In 2015, we saw significant progress in renewable energy and environmental awareness, with major agreements on climate action.',
    };

    // Display the event details
    document.getElementById('event-text').textContent = eventText[year];
    document.getElementById('event-details').style.display = 'block';
}

function closeDetails() {
    document.getElementById('event-details').style.display = 'none';
}

