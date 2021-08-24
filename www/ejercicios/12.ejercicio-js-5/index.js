'use strict';

const URL = 'https://rickandmortyapi.com/api/episode';

async function characters() {
    try {
        const response = await fetch(URL);
        const { results } = await response.json();

        const month = 'January';

        const fecha = results.filter((date) => {
            return date.air_date.indexOf(month) === 0;
        });

        const personajes = fecha.map((personaje) => {
            return personaje.characters;
        });
        console.log(personajes);
    } catch (error) {
        console.log(error);
    }
}

characters();
