// ---Dependencies
import { component$ } from '@builder.io/qwik';
// ---Styles
import style from './Home.module.scss';
import AllProducts from '/public/images/home/TodosLosProductos.png?jsx';
import Locations from '/public/images/home/Ubicaciones.png?jsx';

/* comments */
import Star from '/public/images/star.svg?jsx';
import User from '/public/images/user.svg?jsx';
import { PromoBanner } from './PromoBanner/PromoBanner';
import { ProductSlider } from './ProductSlider/ProductSlider';
import { SocialBanner } from './SocialBanner/SocialBanner';
import { ComoHacerlo } from './ComoHacerlo/ComoHacerlo';
import { NuestrosPosts } from './NuestrosPosts/NuestrosPosts';

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

      {/* <div class={`${style.containerComments || ''} ${style.container || ''}`}>
        <div class="card">
          <div class="head">
            <div class="col01">
              <User />
            </div>
            <div class="col02">
              <p>Pedro Navajas C.</p>
              <div>
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
              </div>
            </div>
          </div>
          <div class="description">
            <span>Publicado el 21 de septiembre de 2023</span>
            <span>Pintura color: negro | </span>
            <span> Compra verificada</span>
          </div>
          <div class="comment">
            <p>
              Lorem ipsum dolor sit amet consectetur. Tellus faucibus morbi id vel sed vitae lorem
              orci scelerisque. Augue cras ut eget tortor scelerisque. Magna lacus sapien integer
              nisi ipsum. Ipsum at malesuada arcu malesuada adipiscing sagittis nibh gravida. Dui
              aliquam dui pellentesque sem faucibus interdum aliquet posuere.
            </p>
          </div>
        </div>
      </div> */}
    </div>
  );
});
