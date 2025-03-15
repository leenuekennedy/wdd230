const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');

const getProphetData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    
    console.table(data.prophets); // Check the data response

    // Comment this out once verified, then call displayProphets
    // console.table(data.prophets);

    displayProphets(data.prophets);
};

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        let card = document.createElement('section');
        let fullName = document.createElement('h2');
        let portrait = document.createElement('img');

        // Populate the heading with the prophet's full name
        fullName.textContent = `${prophet.name} ${prophet.lastname}`;

        // Set image attributes
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '200');
        portrait.setAttribute('height', '250');

        // Append elements to the card
        card.appendChild(fullName);
        card.appendChild(portrait);

        // Append the card to the "cards" div
        cards.appendChild(card);
    });
};

// Call the function to fetch and display data
getProphetData();
