// ---Dependencies
import { component$ } from '@builder.io/qwik';
// ---Styles
import style from './Home.module.scss';

import { PromoBanner } from './PromoBanner/PromoBanner';
import { ProductSlider } from './ProductSlider/ProductSlider';
import { SocialBanner } from './SocialBanner/SocialBanner';
import { ComoHacerlo } from './ComoHacerlo/ComoHacerlo';
import { NuestrosPosts } from './NuestrosPosts/NuestrosPosts';
import { ReviewsCard } from './ReviewsCard/ReviewsCard';
import { useFStore } from 'src/store/config/storeConfig';
import { AllProductsBanner } from './AllProductsBanner/AllProductsBanner';
import { LocationsBanner } from './LocationsBanner/LocationsBanner';

/**
 * Home Component:  Descripción del comportamiento...
 * @param {Props} props - Parámetros del componente como: ...
 */
export const Home = component$(() => {
  // -----------------------CONSTS, HOOKS, STATES
  const { state } = useFStore();
  // -----------------------RENDER
  return (
    <div class={style.Home}>
      <PromoBanner isMobile={state.appInfo.isMobile} />
      <ProductSlider winSize={state.appInfo.winSize} />
      <AllProductsBanner isMobile={state.appInfo.isMobile} />
      <LocationsBanner isMobile={state.appInfo.isMobile} />
      <SocialBanner />
      <ComoHacerlo isMobile={state.appInfo.isMobile} />
      <NuestrosPosts isMobile={state.appInfo.isMobile} />
      <ReviewsCard />
    </div>
  );
});
