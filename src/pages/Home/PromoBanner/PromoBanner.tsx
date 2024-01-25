// ---Dependencies
import { component$ } from '@builder.io/qwik';
// ---Styles
import style from './PromoBanner.module.scss';
import Banner from '/public/images/home/banner1.png?jsx';

/**
 * PromoBanner Component:  Descripción del comportamiento...
 */
export const PromoBanner = component$(() => {
  // -----------------------CONSTS, HOOKS, STATES
  // -----------------------MAIN METHODS
  // -----------------------AUX METHODS
  // -----------------------RENDER
  return (
    <div class={style['PromoBanner']}>
      <section>
        <a href="/product_id">
          <Banner />
        </a>
      </section>
    </div>
  );
});
