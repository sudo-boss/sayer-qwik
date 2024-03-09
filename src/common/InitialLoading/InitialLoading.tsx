// ---Dependencies
import { component$ } from '@builder.io/qwik';
// ---Styles
import style from './InitialLoading.module.scss';

/**
 * InitialLoading Component:  Descripción del comportamiento...
 */
export const InitialLoading = component$(() => {
  // -----------------------CONSTS, HOOKS, STATES
  // -----------------------MAIN METHODS
  // -----------------------AUX METHODS
  // -----------------------RENDER
  return (
    <div class={style['InitialLoading']}>
      <p>Combinando colores...</p>
    </div>
  );
});
