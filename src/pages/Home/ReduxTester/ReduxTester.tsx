// ---Dependencies
import { component$ } from '@builder.io/qwik';
import { StateReader } from './StateReader/StateReader';
import { UpdaterA } from './UpdaterA/UpdaterA';
import { UpdaterB } from './UpdaterB/UpdaterB';

/**
 * ReduxTester Component:  Descripción del comportamiento...
 */
export const ReduxTester = component$(() => {
  // -----------------------CONSTS, HOOKS, STATES
  // -----------------------MAIN METHODS
  // -----------------------AUX METHODS
  // -----------------------RENDER
  return (
    <div class="ReduxTester">
      <h3>ReduxTester</h3>
      <StateReader />
      <UpdaterA />
      <UpdaterB />
    </div>
  );
});
