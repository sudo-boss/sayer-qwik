// ---Dependencies
import { component$ } from '@builder.io/qwik';
// ---Styles
import style from './Navbar.module.scss';
import { Frow, Fcol } from 'qwik-forge-grid';
import { customResponsive } from 'src/utils/functions/responsiveUtils';

import { useFStore } from 'src/store/config/storeConfig';
import { useDrawer } from 'src/utils/app/useDrawer/useDrawer';
import { MobButtons } from './MobButtons/MobButtons';
import { LogoLink } from './common/LogoLink/LogoLink';
import { BsList } from '@qwikest/icons/bootstrap';
import { DeskButtons } from './DeskButtons/DeskButtons';

/**
 * Navbar Component:  Descripción del comportamiento...
 */
export const Navbar = component$(() => {
  // -----------------------CONSTS, HOOKS, STATES
  const { state } = useFStore();
  const { handleOpen, Drawer } = useDrawer({
    theme: 'light',
    defaultOpen: false,
    headerCloseModal: true,
    title: <LogoLink />,
    content: <MobButtons />,
  });
  // -----------------------MAIN METHODS
  // -----------------------AUX METHODS
  // -----------------------RENDER
  return (
    <header class={style.Navbar}>
      <Frow vAlign="middle" hAlign="center">
        <Fcol {...customResponsive(25, 100)}>
          <LogoLink />
        </Fcol>
        {state.appInfo.isMobile ? (
          <Fcol {...customResponsive(15, 50)}>
            <button class="hamburger" onClick$={handleOpen}>
              <BsList />
            </button>
          </Fcol>
        ) : (
          <DeskButtons />
        )}
      </Frow>
      <Drawer />
    </header>
  );
});
