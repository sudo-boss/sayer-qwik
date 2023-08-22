// ---Dependencies
import { component$ } from '@builder.io/qwik';
import { useStyleBuilder } from 'src/utils/app/useStyleBuilder';
// ---Styles
import style from './Navbar.module.scss';

/**
 * Navbar Component:  Descripción del comportamiento...
 */
export const Navbar = component$(() => {
  // -----------------------CONSTS, HOOKS, STATES
  const { classNames } = useStyleBuilder(style.Navbar);
  // -----------------------MAIN METHODS
  // -----------------------AUX METHODS
  // -----------------------RENDER
  return (
    <header class={classNames.value}>
      <p>Navbar</p>
    </header>
  );
});
