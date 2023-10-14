// ---Dependencies
import { component$ } from '@builder.io/qwik';
// ---Styles
import style from './Health.module.scss';
import * as commitInfo from 'src/appConfig/health/appVersion';
import { envs } from 'src/envs/envsLoaded';

/**
 * Health Component:  Descripción del comportamiento...
 */
export const Health = component$(() => {
  // -----------------------CONSTS, HOOKS, STATES
  // -----------------------MAIN METHODS
  // -----------------------AUX METHODS
  // -----------------------RENDER
  return (
    <div class={style['Health']}>
      <h1>Health</h1>
      <hr />
      <br />
      <h2>COMMIT INFO</h2>
      <pre>{JSON.stringify(commitInfo, null, ' ')}</pre>
      <br />
      <h2>ENVS</h2>
      <pre>{JSON.stringify(envs, null, ' ')}</pre>
    </div>
  );
});
