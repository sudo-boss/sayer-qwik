// ---Dependencies
import { component$ } from '@builder.io/qwik';
// ---Styles
import style from './PromoBanner.module.scss';
import BannerDesktop from '/public/images/home/banner1.png?jsx';
import BannerMobile from '/public/images/home/banner1Mobile.png?jsx';

/**
 * PromoBanner Component:  Descripción del comportamiento...
 */
export const PromoBanner = component$(({ isMobile }: { isMobile: boolean }) => {
  // -----------------------CONSTS, HOOKS, STATES
  // -----------------------MAIN METHODS
  // -----------------------AUX METHODS
  // -----------------------RENDER
  return (
    <div class={style['PromoBanner']}>
      <section>
        <a href="/product_id">{isMobile ? <BannerMobile /> : <BannerDesktop />}</a>
      </section>
    </div>
  );
});
