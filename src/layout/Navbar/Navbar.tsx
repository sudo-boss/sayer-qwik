// ---Dependencies
import { component$ } from '@builder.io/qwik';
// ---Styles
import style from './Navbar.module.scss';
import { Mcol, Mrow } from 'qwik-forge-grid';
import { useLocation, Link } from '@builder.io/qwik-city';
import { customResponsive } from 'src/utils/functions/responsiveUtils';

/**
 * Navbar Component:  Descripción del comportamiento...
 */
export const Navbar = component$(() => {
  // -----------------------CONSTS, HOOKS, STATES
  const location = useLocation();
  // -----------------------MAIN METHODS
  // -----------------------AUX METHODS
  // -----------------------RENDER
  return (
    <header class={style.Navbar}>
      <Mrow>
        <Mcol {...customResponsive(40, 100)}>
          <Link href="/">Home{location.url.pathname}</Link>
        </Mcol>
        <Mcol {...customResponsive(15, 50)}>
          <Link href="/health">Health</Link>
        </Mcol>
        <Mcol {...customResponsive(15, 50)}>
          <Link href="/err">Err</Link>
        </Mcol>
      </Mrow>
    </header>
  );
});
