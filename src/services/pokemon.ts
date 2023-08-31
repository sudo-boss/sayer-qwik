export function getPokeApi() {
  const baseUrl = 'https://pokeapi.co/api/v2/pokemon/';
  const pokemonID = Math.floor(Math.random() * 150) + 1;
  return `${baseUrl}${pokemonID}`;
}

export interface Pokemon {
  name: string;
  sprites: {
    back_default: string;
    back_female: string;
    back_shiny: string;
    back_shiny_female: string;
    front_default: string;
    front_female: string;
    front_shiny: string;
    front_shiny_female: string;
    // Puedes agregar más propiedades dentro de 'sprites' si es necesario.
  };
}
