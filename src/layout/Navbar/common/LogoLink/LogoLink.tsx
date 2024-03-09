// ---Dependencies
import { component$ } from '@builder.io/qwik';
// ---Styles
import style from './LogoLink.module.scss';
import TextLogo from '/public/images/layout/navbar/sayerBlack.png?jsx';
import { Link } from '@builder.io/qwik-city';
import Logo from '/public/images/loguito.png?jsx';

/**
 * LogoLink Component:  Descripción del comportamiento...
 */
export const LogoLink = component$(() => {
  // -----------------------CONSTS, HOOKS, STATES
  // -----------------------MAIN METHODS
  // -----------------------AUX METHODS
  // -----------------------RENDER
  return (
    <div class={style['LogoLink']}>
      <Link href="/">
        <Logo />
      </Link>
    </div>
  );
});
