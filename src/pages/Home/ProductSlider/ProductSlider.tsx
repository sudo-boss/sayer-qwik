// ---Dependencies
import { component$ } from '@builder.io/qwik';
import { ProductCard } from './ProductCard/ProductCard';
import style from './ProductSlider.module.scss';
import Pintura01 from '/public/images/home/ProductSlider/pintura01.png?jsx';
import { Fcol, Frow } from 'qwik-forge-grid';
import { customResponsive } from 'src/utils/functions/responsiveUtils';
import { BsArrowLeftSquare, BsArrowRightSquare } from '@qwikest/icons/bootstrap';
import { useFStore } from 'src/store/config/storeConfig';

const products = [
  { title: 'Pintura roja 19 litros', discount: 10, Image: Pintura01 },
  { title: 'Pintura roja 19 litros', discount: 10, Image: Pintura01 },
  { title: 'Pintura roja 19 litros', discount: 10, Image: Pintura01 },
  { title: 'Pintura roja 19 litros', discount: 10, Image: Pintura01 },
];

/**
 * ProductSlider Component:  Descripción del comportamiento...
 */
export const ProductSlider = component$(() => {
  // -----------------------CONSTS, HOOKS, STATES
  const { state } = useFStore();
  const copy = productsBySize();
  // -----------------------MAIN METHODS
  // -----------------------AUX METHODS
  function productsBySize() {
    switch (state.appInfo.winSize) {
      case 'xs':
      case 'sm':
        return products.slice(0, 1);
      case 'md':
      case 'lg':
        return products.slice(0, 2);
      case 'xl':
      case 'xxl':
        return products.slice(0, 4);
      default:
        return products; // Retorna todos si el tamaño no se reconoce
    }
  }
  // -----------------------RENDER
  return (
    <Frow class={style['ProductSlider']} vAlign="middle" hAlign="center">
      <Fcol {...customResponsive(6, 15)}>
        <BsArrowLeftSquare />
      </Fcol>
      {copy.map(({ Image, discount, title }, i) => (
        <Fcol key={`ProductCard ${i}`} {...customResponsive(22, 70)}>
          <ProductCard title={title} discount={discount}>
            <Image />
          </ProductCard>
        </Fcol>
      ))}
      <Fcol {...customResponsive(6, 15)}>
        <BsArrowRightSquare />
      </Fcol>
    </Frow>
  );
});
