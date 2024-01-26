// ---Dependencies
import { component$ } from '@builder.io/qwik';
// ---Styles
import style from './ComoHacerlo.module.scss';

/**
 * ComoHacerlo Component:  Descripción del comportamiento...
 */
export const ComoHacerlo = component$(() => {
  // -----------------------CONSTS, HOOKS, STATES
  // -----------------------MAIN METHODS
  // -----------------------AUX METHODS
  // -----------------------RENDER
  return (
    <div class={style['ComoHacerlo']}>
      <h3>Como hacerlo...</h3>
      <p>
        Visite nuestra sección de instrucciones para obtener asesoramiento experto y paso a paso
        sobre su próximo proyecto o consulte nuestras redes sociales para mas post interesantes.
      </p>
    </div>
  );
});
