// ---Dependencies
import { component$ } from '@builder.io/qwik';
// ---Styles
import style from './Home.module.scss';
import AllProductsDesktop from '/public/images/home/LosMejoresColores.png?jsx';
import AllProductsMobile from '/public/images/home/LosMejoresColoresMobile.png?jsx';
import LocationsDesktop from '/public/images/home/ubicanos.png?jsx';
import LocationsMobile from '/public/images/home/UbicacionMovile.png?jsx';

import { PromoBanner } from './PromoBanner/PromoBanner';
import { ProductSlider } from './ProductSlider/ProductSlider';
import { SocialBanner } from './SocialBanner/SocialBanner';
import { ComoHacerlo } from './ComoHacerlo/ComoHacerlo';
import { NuestrosPosts } from './NuestrosPosts/NuestrosPosts';
import { ReviewsCard } from './ReviewsCard/ReviewsCard';
import { useFStore } from 'src/store/config/storeConfig';

/**
 * Home Component:  Descripción del comportamiento...
 * @param {Props} props - Parámetros del componente como: ...
 */
export const Home = component$(() => {
  // -----------------------CONSTS, HOOKS, STATES
  const { state } = useFStore()
  // -----------------------RENDER
  return (
    <div class={style.Home}>
      <PromoBanner />
      <ProductSlider />
      <div class="marginBanner">
        <a href="/products">
        {state.appInfo.isMobile ? <AllProductsMobile /> : <AllProductsDesktop />}
        </a>
      </div>
      <div class="marginBanner">
        <a href="/locations">
          {state.appInfo.isMobile ? <LocationsMobile /> : <LocationsDesktop />}
        </a>
      </div>
      <SocialBanner />
      <ComoHacerlo />
      <NuestrosPosts />
      <ReviewsCard />
    </div>
  );
});
