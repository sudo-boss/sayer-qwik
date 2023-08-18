// ---Dependencies
import { component$ } from '@builder.io/qwik';
import { useStoreAppInfo } from 'src/store/appInfo/store';

/**
 * StateReader Component:  Descripción del comportamiento...
 */
export const StateReader = component$(() => {
  // -----------------------CONSTS, HOOKS, STATES
  const state = useStoreAppInfo();
  // -----------------------MAIN METHODS
  // -----------------------AUX METHODS
  // -----------------------RENDER
  return (
    <div class="StateReader">
      <p>StateReader</p>
      <pre>{JSON.stringify(state, null, ' ')}</pre>
    </div>
  );
});
