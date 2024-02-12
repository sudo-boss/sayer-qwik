// ---Dependencies
import { component$ } from '@builder.io/qwik';
import AllProductsDesktop from '/public/images/home/LosMejoresColores.png?jsx';
import AllProductsMobile from '/public/images/home/LosMejoresColoresMobile.png?jsx';
// ---Styles
import style from './AllProductsBanner.module.scss';

interface Props {
  isMobile: boolean;
}

/**
 * AllProductsBanner Component:  Descripción del comportamiento...
 * @param {Props} props - Parámetros del componente como: ...
 */
export const AllProductsBanner = component$<Props>(({ isMobile }) => {
  // -----------------------CONSTS, HOOKS, STATES
  // -----------------------MAIN METHODS
  // -----------------------AUX METHODS
  // -----------------------RENDER
  return (
    <div class={style['AllProductsBanner']}>
      <a href="/products">{isMobile ? <AllProductsMobile /> : <AllProductsDesktop />}</a>
    </div>
  );
});
