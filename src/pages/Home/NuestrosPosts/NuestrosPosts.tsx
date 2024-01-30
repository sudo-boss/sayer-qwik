// ---Dependencies
import { component$ } from '@builder.io/qwik';
// ---Styles
import style from './NuestrosPosts.module.scss';
import { Mcol, Mrow } from 'qwik-forge-grid';
import { SocialPostCard } from './SocialPostCard/SocialPostCard';
import { basicResponsiveMD } from 'src/utils/functions/responsiveUtils';

/**
 * NuestrosPosts Component:  Descripción del comportamiento...
 */
export const NuestrosPosts = component$(() => {
  // -----------------------CONSTS, HOOKS, STATES
  // -----------------------MAIN METHODS
  // -----------------------AUX METHODS
  // -----------------------RENDER
  return (
    <div class={style['NuestrosPosts']}>
      <h3>Nuestros post más recientes...</h3>
      <Mrow>
        <Mcol {...basicResponsiveMD(50)}>
          <SocialPostCard
            title="Pinturas sayer"
            variant="fb"
            url="facebook"
            p="No esperes más para renovar tu espacio favorito con nuestras líneas de pintura Contractor. Facilita... Ver más"
          />
        </Mcol>
        <Mcol {...basicResponsiveMD(50)}>
          <SocialPostCard
            title="Pinturas_sayer"
            variant="ig"
            url="instagram"
            p="No esperes más para renovar tu espacio favorito con nuestras líneas de pintura Contractor. Facilita... Ver más"
          />
        </Mcol>
      </Mrow>
    </div>
  );
});
