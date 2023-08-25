// ---Dependencies
import { component$ } from '@builder.io/qwik';
// ---Styles
import style from './Err404.module.scss';

/**
 * Err404 Component:  Descripción del comportamiento...
 */
export const Err404 = component$(() => {
  // -----------------------CONSTS, HOOKS, STATES
  // -----------------------MAIN METHODS
  // -----------------------AUX METHODS
  // -----------------------RENDER
  return (
    <div class={style['Err404']}>
      <h1>Error 404</h1>
      <p>Ups page not found!</p>
    </div>
  );
});
