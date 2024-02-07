// ---Dependencies
import { component$ } from '@builder.io/qwik';
import { Fcol } from 'qwik-forge-grid';
import { customResponsive } from 'src/utils/functions/responsiveUtils';
import { NavLink } from '../common/NavLink/NavLink';
import { LocationAndSocial } from '../common/LocationAndSocial/LocationAndSocial';

/**
 * DeskButtons Component:  Descripción del comportamiento...
 */
export const DeskButtons = component$(() => {
  // -----------------------RENDER
  return (
    <>
      <Fcol {...customResponsive(15, 50)}>
        <NavLink href="/" label="Inicio" />
      </Fcol>
      <Fcol {...customResponsive(15, 50)}>
        <NavLink href="/productos/" label="Productos" />
      </Fcol>
      <Fcol {...customResponsive(15, 50)}>
        <NavLink href="/blog/" label="Blog" />
      </Fcol>
      <Fcol {...customResponsive(5, 50)}>.</Fcol>
      <Fcol {...customResponsive(25, 50)}>
        <LocationAndSocial />
      </Fcol>
    </>
  );
});
