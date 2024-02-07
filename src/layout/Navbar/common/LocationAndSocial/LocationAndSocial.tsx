// ---Dependencies
import { component$ } from '@builder.io/qwik';
// ---Styles
import style from './LocationAndSocial.module.scss';
import {
  IoLogoTwitter,
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoYoutube,
} from '@qwikest/icons/ionicons';
import LocationImg from '/public/images/layout/navbar/location.png?jsx';
import { customResponsive } from 'src/utils/functions/responsiveUtils';
import { Fcol, Frow } from 'qwik-forge-grid';

/**
 * LocationAndSocial Component:  Descripción del comportamiento...
 */
export const LocationAndSocial = component$(() => {
  // -----------------------CONSTS, HOOKS, STATES
  // -----------------------MAIN METHODS
  // -----------------------AUX METHODS
  // -----------------------RENDER
  return (
    <Frow vAlign="middle" hAlign="center" class={style['LocationAndSocial']}>
      <Fcol span={10}>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <IoLogoFacebook />
        </a>
      </Fcol>
      <Fcol span={10}>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <IoLogoTwitter />
        </a>
      </Fcol>
      <Fcol span={10}>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <IoLogoInstagram />
        </a>
      </Fcol>
      <Fcol span={10}>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <IoLogoYoutube />
        </a>
      </Fcol>

      <Fcol {...customResponsive(60, 50)}>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <div class="location">
            <LocationImg />
            <span>Ubicación</span>
          </div>
        </a>
      </Fcol>
    </Frow>
  );
});
