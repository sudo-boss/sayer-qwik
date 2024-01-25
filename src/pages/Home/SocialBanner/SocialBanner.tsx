// ---Dependencies
import { component$ } from '@builder.io/qwik';
// ---Styles
import style from './SocialBanner.module.scss';
import { Fcol, Frow } from 'qwik-forge-grid';
import { customResponsive } from 'src/utils/functions/responsiveUtils';

import {
  IoLogoTwitter,
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoYoutube,
} from '@qwikest/icons/ionicons';

/**
 * SocialBanner Component:  Descripción del comportamiento...
 */
export const SocialBanner = component$(() => {
  // -----------------------CONSTS, HOOKS, STATES
  // -----------------------MAIN METHODS
  // -----------------------AUX METHODS
  // -----------------------RENDER
  return (
    <div class={style['SocialBanner']}>
      <h3>SÍGUENOS EN REDES SOCIALES</h3>
      <div class="iconsContainer">
        <div class="line" />
        <Frow>
          <Fcol {...customResponsive(25, 50)}>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <IoLogoFacebook />
            </a>
          </Fcol>
          <Fcol {...customResponsive(25, 50)}>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <IoLogoTwitter />
            </a>
          </Fcol>
          <Fcol {...customResponsive(25, 50)}>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <IoLogoInstagram />
            </a>
          </Fcol>
          <Fcol {...customResponsive(25, 50)}>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <IoLogoYoutube />
            </a>
          </Fcol>
        </Frow>
      </div>
    </div>
  );
});
