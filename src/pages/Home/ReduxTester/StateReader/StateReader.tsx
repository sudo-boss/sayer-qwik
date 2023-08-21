// ---Dependencies
import { component$ } from '@builder.io/qwik';
import { useFStore } from 'src/store/config/storeConfig';

/**
 * StateReader Component:  Descripción del comportamiento...
 */
export const StateReader = component$(() => {
  // -----------------------CONSTS, HOOKS, STATES
  const { state } = useFStore();
  // -----------------------MAIN METHODS
  // -----------------------AUX METHODS
  // -----------------------RENDER
  return (
    <div class="StateReader">
      <pre>{JSON.stringify(state, null, ' ')}</pre>
    </div>
  );
});
