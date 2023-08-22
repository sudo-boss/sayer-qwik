// ---Dependencies
import { component$ } from '@builder.io/qwik';
import { ReduxTester } from './ReduxTester/ReduxTester';
// ---Styles
import style from './Home.module.scss';
import { ThemeExample } from 'src/layout/useAppListener/useTheme/ThemeExample/ThemeExample';

/**
 * Home Component:  Descripción del comportamiento...
 * @param {Props} props - Parámetros del componente como: ...
 */
export const Home = component$(() => {
  // -----------------------CONSTS, HOOKS, STATES

  // -----------------------RENDER
  return (
    <div class={style.Home}>
      <h1>Home</h1>
      <hr />
      classNames: {style.Home}
      <br />
      <ReduxTester />
      <br />
      <ThemeExample />
    </div>
  );
});
