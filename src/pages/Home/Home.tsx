// ---Dependencies
import { component$ } from '@builder.io/qwik';
// ---Styles
import style from './Home.module.scss';
import AllProducts from '/public/images/home/TodosLosProductos.png?jsx';
import Locations from '/public/images/home/Ubicaciones.png?jsx';

import { PromoBanner } from './PromoBanner/PromoBanner';
import { ProductSlider } from './ProductSlider/ProductSlider';
import { SocialBanner } from './SocialBanner/SocialBanner';
import { ComoHacerlo } from './ComoHacerlo/ComoHacerlo';
import { NuestrosPosts } from './NuestrosPosts/NuestrosPosts';
import { ReviewsCard } from './ReviewsCard/ReviewsCard';

/**
 * Home Component:  Descripción del comportamiento...
 * @param {Props} props - Parámetros del componente como: ...
 */
export const Home = component$(() => {
  // -----------------------CONSTS, HOOKS, STATES

  // -----------------------RENDER
  return (
    <div class={style.Home}>
      <PromoBanner />
      <ProductSlider />
      <div class="marginBanner">
        <a href="/products">
          <AllProducts />
        </a>
      </div>
      <div class="marginBanner">
        <a href="/locations">
          <Locations />
        </a>
      </div>
      <SocialBanner />
      <ComoHacerlo />
      <NuestrosPosts />
      <ReviewsCard />
    </div>
  );
});
