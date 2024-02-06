// ---Dependencies
import { component$ } from '@builder.io/qwik';
// ---Styles
import style from './ReviewsCard.module.scss';
import { Fcol, Frow } from 'qwik-forge-grid';
import { basicResponsive, customResponsive } from 'src/utils/functions/responsiveUtils';
import { LuChevronRight, LuChevronLeft } from '@qwikest/icons/lucide';

import User from '/public/images/user.svg?jsx';
import Star from '/public/images/star.svg?jsx';

/**
 * ReviewsCard Component:  Descripción del comportamiento...
 */
export const ReviewsCard = component$(() => {
  // -----------------------CONSTS, HOOKS, STATES
  // -----------------------MAIN METHODS
  // -----------------------AUX METHODS
  // -----------------------RENDER
  return (
    <div class={style['ReviewsCard']}>
      <Frow>
        <Fcol {...basicResponsive(60)}>
          <Frow vAlign="middle">
            <Fcol {...customResponsive(15, 25)}>
              <User />
            </Fcol>
            <Fcol {...customResponsive(85, 75)}>
              <p class="title">Pedro Navajas C.</p>
              <div class="stars">
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
              </div>
            </Fcol>
          </Frow>
        </Fcol>
        <Fcol {...basicResponsive(40)}>
          <p class="date">Publicado el 21 de septiembre de 2023</p>
          <p class="verified">Reseña verificada</p>
        </Fcol>
      </Frow>
      <p class="comments">
        Lorem ipsum dolor sit amet consectetur. Tellus faucibus morbi id vel sed vitae lorem orci
        scelerisque. Augue cras ut eget tortor scelerisque. Magna lacus sapien integer nisi ipsum.
        Ipsum at malesuada arcu malesuada adipiscing sagittis nibh gravida. Dui aliquam dui
        pellentesque sem faucibus interdum aliquet posuere.
      </p>
      <div class="arrows">
        <LuChevronLeft />
        <LuChevronRight />
      </div>
    </div>
  );
});
