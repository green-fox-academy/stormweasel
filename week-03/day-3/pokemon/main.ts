'use strict';
import { Pokemon } from './Pokemon'

let pokemonOfAsh: Pokemon[] = initializePokemon();

// Every pokemon has a name and a type.
// Certain types are effective against others, e.g. water is effective against fire.

// Ash has a few pokemon.
// A wild pokemon appeared!

let wildPokemon: Pokemon = new Pokemon('Oddish', 'leaf', 'water');

// Which pokemon should Ash use?

// Implement the following `chooseEffective` function which will choose the most effective pokemon for Ash
//console.log(`I choose you!, ${chooseEffective(pokemonOfAsh, wildPokemon)}`);

function initializePokemon(): Pokemon[] {
    return [
        new Pokemon('Balbasaur', 'leaf', 'water'),
        new Pokemon('Pikatchu', 'electric', 'water'),
        new Pokemon('Charizard', 'fire', 'leaf'),
        new Pokemon('Balbasaur2', 'water', 'fire'),
        new Pokemon('Kingler', 'water', 'fire')
    ];
}
/* 1. megoldás
for (let i: number= 0;i < pokemonOfAsh.length; i++) {
    if ( wildPokemon.type === pokemonOfAsh[i].effectiveAgainst)
console.log(`I choose you!, ${pokemonOfAsh [i].name}`);
}
*/
//2. megoldás
function chooseEffective(arrayOfPokemons: Pokemon[], wildPokemon: Pokemon) {
    for (let j: number = 0; j < arrayOfPokemons.length; j++) {
        if (arrayOfPokemons[j].isEffectiveAgainst(wildPokemon)) {
            console.log(`I choose you!, ${arrayOfPokemons[j].name}`);
        }
    }
}
chooseEffective(pokemonOfAsh, wildPokemon);
/* 3. megoldás
console.log(`I choose you!, ${pokemonOfAsh.find(pokemon => pokemon.effectiveAgainst === wildPokemon.type).name}`)
*/