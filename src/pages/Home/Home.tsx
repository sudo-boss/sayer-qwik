// ---Dependencies
import { component$ } from '@builder.io/qwik';
import { ReduxTester } from './ReduxTester/ReduxTester';
// ---Styles
import { useStyleBuilder } from 'src/utils/app/useStyleBuilder';
import style from './Home.module.scss';

/**
 * Home Component:  Descripción del comportamiento...
 * @param {Props} props - Parámetros del componente como: ...
 */
export const Home = component$(() => {
  // -----------------------CONSTS, HOOKS, STATES
  const { classNames } = useStyleBuilder(style.Home);

  // -----------------------RENDER
  return (
    <div class={classNames.value}>
      <h1>Home</h1>
      <hr />
      classNames: {classNames.value}
      <br />
      <ReduxTester />
    </div>
  );
});
