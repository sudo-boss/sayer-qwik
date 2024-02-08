// ---Dependencies
import { component$ } from '@builder.io/qwik';
// ---Styles
import style from './ComoHacerlo.module.scss';
import { Mcol, Mrow } from 'qwik-forge-grid';

import ImgPost1 from '/public/images/home/ComoHacerlo/post1.png?jsx';
import ImgPost2 from '/public/images/home/ComoHacerlo/post2.png?jsx';
import ImgPost3 from '/public/images/home/ComoHacerlo/post3.png?jsx';
import { PostCard } from './PostCard/PostCard';
import { basicResponsiveMD } from 'src/utils/functions/responsiveUtils';
import { ScrollAnimate } from 'src/common/ScrollAnimate/ScrollAnimate';
import { useFStore } from 'src/store/config/storeConfig';

const posts = [
  {
    prevText:
      'Aprenda los conceptos basicos del producto, la preparacion y el precio para transformar cualquier habitacion de su hogar',
    url: '/post',
    Image: ImgPost1,
  },
  {
    prevText: 'Cree un aspecto unico y duradero para las superficies de concreto de su hogar',
    url: '/post',
    Image: ImgPost2,
  },
  {
    prevText:
      'Aprenda por que la preparacion es el secreto de cualquier gran proyecto de pintura exterior. Y como un poco de tiempo extra al comienzo dara sus frutos',
    url: '/post',
    Image: ImgPost3,
  },
];

/**
 * ComoHacerlo Component:  Descripción del comportamiento...
 */
export const ComoHacerlo = component$(() => {
  // -----------------------CONSTS, HOOKS, STATES
  const { state } = useFStore();
  // -----------------------MAIN METHODS
  // -----------------------AUX METHODS
  // -----------------------RENDER
  return (
    <div class={style['ComoHacerlo']}>
      <h3>Como hacerlo...</h3>
      <p>
        Visite nuestra sección de instrucciones para obtener asesoramiento experto y paso a paso
        sobre su próximo proyecto o consulte nuestras redes sociales para mas post interesantes.
      </p>
      <Mrow>
        {posts.map(({ Image, prevText, url }, i) => (
          <Mcol key={`PostCard-${i}`} {...basicResponsiveMD(33)}>
            <ScrollAnimate
              always={!state.appInfo.isMobile}
              delay={state.appInfo.isMobile ? i * 100 : i * 500}
            >
              <PostCard prevText={prevText} url={url}>
                <Image />
              </PostCard>
            </ScrollAnimate>
          </Mcol>
        ))}
      </Mrow>
    </div>
  );
});
