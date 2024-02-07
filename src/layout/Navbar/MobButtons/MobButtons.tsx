// ---Dependencies
import { component$ } from '@builder.io/qwik';
// ---Styles
import style from './MobButtons.module.scss';
import { Fcol, Frow } from 'qwik-forge-grid';
import { NavLink } from '../common/NavLink/NavLink';
import { LocationAndSocial } from '../common/LocationAndSocial/LocationAndSocial';

/**
 * MobButtons Component:  Descripción del comportamiento...
 */
export const MobButtons = component$(() => {
  // -----------------------CONSTS, HOOKS, STATES
  // -----------------------MAIN METHODS
  // -----------------------AUX METHODS
  // -----------------------RENDER
  return (
    <div class={style['MobButtons']}>
      <Frow vAlign="middle" hAlign="center" vSpace={10}>
        <Fcol span={100}>
          <NavLink href="/" label="Inicio" />
        </Fcol>
        <Fcol span={100}>
          <NavLink href="/productos/" label="Productos" />
        </Fcol>
        <Fcol span={100}>
          <NavLink href="/blog/" label="Blog" />
        </Fcol>
        <Fcol>
          <LocationAndSocial />
        </Fcol>
      </Frow>
    </div>
  );
});
