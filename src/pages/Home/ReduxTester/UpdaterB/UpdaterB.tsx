// ---Dependencies
import { $, component$ } from '@builder.io/qwik';
import { appInfoStore } from 'src/store/appInfo/store';
import type { OnInput } from 'src/utils/types/qwik';

/**
 * UpdaterB Component:  Descripción del comportamiento...
 */
export const UpdaterB = component$(() => {
  // -----------------------CONSTS, HOOKS, STATES
  // -----------------------MAIN METHODS
  const updateTest: OnInput = $((_, el) => {
    appInfoStore.setState((state) => ({
      ...state,
      test: el.value
    }));
  });
  // -----------------------AUX METHODS
  // -----------------------RENDER
  return (
    <div class="UpdaterB">
      <p>UpdaterB</p>
      <input type="text" onInput$={updateTest} />
    </div>
  );
});
