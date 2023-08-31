// ---Dependencies
import { component$ } from '@builder.io/qwik';
// ---Styles
import style from './SsrExample.module.scss';
import { useRandPokemon } from 'src/routes/layout';

/**
 * SsrExample Component:  Descripción del comportamiento...
 */
export const SsrExample = component$(() => {
  // -----------------------CONSTS, HOOKS, STATES
  const pokemon = useRandPokemon();
  // -----------------------MAIN METHODS
  // -----------------------AUX METHODS
  // -----------------------RENDER
  return (
    <div class={style['SsrExample']}>
      <h1>RANDOM POKEMON</h1>

      <h2>{pokemon.value.name}</h2>
      <img
        src={pokemon.value.sprites.front_default}
        alt={`Sprite of pokemon ${pokemon.value.name}`}
        width={200}
        height={200}
      />
    </div>
  );
});
