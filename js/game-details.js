const gameID = urlParams.get('id')
const game = selectedGame

const gameDetailsHTML =  `
<h2>${game.name}</h2>
<p>${game.description}</p>
<img src="${game.background_image}" alt="${game.name}">
<!-- Agrega más información del juego aquí -->
`;

const gameDetailsContainer = document.getElementById('game-details-container');
gameDetailsContainer.innerHTML = gameDetailsHTML;