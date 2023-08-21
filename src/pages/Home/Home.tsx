// ---Dependencies
import { component$ } from '@builder.io/qwik';
import { ReduxTester } from './ReduxTester/ReduxTester';
// import { useSelectorBuilder } from 'src/utils/hooks/styles/useSelectorBuilder';
// ---Styles
// import style from './Home.module.scss';

/**
 * Home Component:  Descripción del comportamiento...
 * @param {Props} props - Parámetros del componente como: ...
 */
export const Home = component$(() => {
  // -----------------------CONSTS, HOOKS, STATES

  // -----------------------RENDER
  return (
    <div
    //className={classNames}
    >
      <h1>Home</h1>
      <hr />
      <br />
      <ReduxTester />
    </div>
  );
});
