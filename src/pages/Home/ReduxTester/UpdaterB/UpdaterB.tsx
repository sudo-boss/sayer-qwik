// ---Dependencies
import { $, component$ } from '@builder.io/qwik';
import { useFStore } from 'src/store/config/storeConfig';
import type { OnInput } from 'src/utils/types/qwik';

/**
 * UpdaterB Component:  Descripción del comportamiento...
 */
export const UpdaterB = component$(() => {
  // -----------------------CONSTS, HOOKS, STATES
  const { state } = useFStore();
  // -----------------------MAIN METHODS
  const updateTest: OnInput = $((_, el) => {
    state.appInfo.test = el.value;
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
