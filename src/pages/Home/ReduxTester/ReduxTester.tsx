// ---Dependencies
import { component$ } from '@builder.io/qwik';
import { StateReader } from './StateReader/StateReader';
import { UpdaterA } from './UpdaterA/UpdaterA';
import { UpdaterB } from './UpdaterB/UpdaterB';
import { Fcol, Frow } from 'qwik-forge-grid';
import { basicResponsive } from 'src/utils/functions/responsiveUtils';

/**
 * ReduxTester Component:  Descripción del comportamiento...
 */
export const ReduxTester = component$(() => {
  // -----------------------CONSTS, HOOKS, STATES
  // -----------------------MAIN METHODS
  // -----------------------AUX METHODS
  // -----------------------RENDER
  return (
    <Frow vAlign="middle" class="ReduxTester">
      <Fcol>
        <h3>ReduxTester</h3>
      </Fcol>
      <Fcol {...basicResponsive(33)}>
        <StateReader />
      </Fcol>
      <Fcol {...basicResponsive(33)}>
        <UpdaterA />
      </Fcol>
      <Fcol {...basicResponsive(33)}>
        <UpdaterB />
      </Fcol>
    </Frow>
  );
});
