const ENDPOINT = 'https://pokeapi.co/api/v2/';

const POKEMON_TO_LOAD = 20;

function createPokemonBlock(pokemonData) {
    const contentDiv = document.getElementById('content');
    const pokemonDiv = document.createElement('div');
    pokemonDiv.classList.add('pokemon');

    const nameDiv = document.createElement('div');
    nameDiv.textContent = `Nombre: ${pokemonData.name}`;

    const heightDiv = document.createElement('div');
    heightDiv.textContent = `Peso: ${pokemonData.height}`;

    const weightDiv = document.createElement('div');
    weightDiv.textContent = `Altura: ${pokemonData.weight}`;

    const imgDiv = document.createElement('img');
    imgDiv.classList.add('pokephoto');
    imgDiv.src = pokemonData['sprites']['front_default'];

    pokemonDiv.appendChild(imgDiv);
    pokemonDiv.appendChild(nameDiv);
    pokemonDiv.appendChild(heightDiv);
    pokemonDiv.appendChild(weightDiv);

    contentDiv.appendChild(pokemonDiv);
};

async function loadPokemons(){

    for (let i = 1; i < POKEMON_TO_LOAD + 1; i++) {
        let api = `${ENDPOINT}pokemon/${i}`;
        const response = await fetch(api);
        const pokemonData = await response.json();
        console.log(pokemonData);
        createPokemonBlock(pokemonData);    
    }
};

loadPokemons();