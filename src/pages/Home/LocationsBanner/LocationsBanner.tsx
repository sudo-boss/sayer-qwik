// ---Dependencies
import { component$ } from '@builder.io/qwik';
import LocationsDesktop from '/public/images/home/ubicanos.png?jsx';
import LocationsMobile from '/public/images/home/UbicacionMovile.png?jsx';

// ---Styles
import style from './LocationsBanner.module.scss';

interface Props {
  isMobile: boolean;
}

/**
 * LocationsBanner Component:  Descripción del comportamiento...
 * @param {Props} props - Parámetros del componente como: ...
 */
export const LocationsBanner = component$<Props>(({ isMobile }) => {
  // -----------------------CONSTS, HOOKS, STATES
  // -----------------------MAIN METHODS
  // -----------------------AUX METHODS
  // -----------------------RENDER
  return (
    <div class={style['LocationsBanner']}>
      <a href="/locations">{isMobile ? <LocationsMobile /> : <LocationsDesktop />}</a>
    </div>
  );
});
