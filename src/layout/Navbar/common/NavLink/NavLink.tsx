// ---Dependencies
import { component$ } from '@builder.io/qwik';
import { useLocation } from '@builder.io/qwik-city';
import style from './NavLink.module.scss';

interface Props {
  href: string;
  label: string;
}

/**
 * NavLink Component:  Descripción del comportamiento...
 * @param {Props} props - Parámetros del componente como: ...
 */
export const NavLink = component$<Props>(({ href, label }) => {
  // -----------------------CONSTS, HOOKS, STATES
  const location = useLocation();
  // -----------------------MAIN METHODS
  // -----------------------AUX METHODS
  // -----------------------RENDER
  return (
    <a href={href} class={`${style.NavLink}  ${location.url.pathname === href ? 'active' : ''}`}>
      {label}
    </a>
  );
});
