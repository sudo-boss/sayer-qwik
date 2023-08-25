// ---Dependencies
import { component$ } from '@builder.io/qwik';
// ---Styles
import style from './Health.module.scss';

/**
 * Health Component:  Descripción del comportamiento...
 */
export const Health = component$(() => {
  // -----------------------CONSTS, HOOKS, STATES
  // -----------------------MAIN METHODS
  // -----------------------AUX METHODS
  // -----------------------RENDER
  return (
    <div class={style['Health']}>
      <h1>Health</h1>
      <hr />
      <pre>{JSON.stringify({}, null, ' ')}</pre>
    </div>
  );
});
