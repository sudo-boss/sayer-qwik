// ---Dependencies
import { component$ } from '@builder.io/qwik';
import { useFStore } from 'src/store/config/storeConfig';
// ---Styles
import style from './PromoBanner.module.scss';
import BannerDesktop from '/public/images/home/banner1.png?jsx';
import BannerMobile from '/public/images/home/banner1Mobile.png?jsx';

/**
 * PromoBanner Component:  Descripción del comportamiento...
 */
export const PromoBanner = component$(() => {
  // -----------------------CONSTS, HOOKS, STATES
  const { state } = useFStore()
  // -----------------------MAIN METHODS
  // -----------------------AUX METHODS
  // -----------------------RENDER
  return (
    <div class={style['PromoBanner']}>
      <section>
        <a href="/product_id">
        {state.appInfo.isMobile ? <BannerMobile /> : <BannerDesktop />}
        </a>
      </section>
    </div>
  );
});
