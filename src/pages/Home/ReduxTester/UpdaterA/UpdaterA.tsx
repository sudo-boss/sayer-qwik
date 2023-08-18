// ---Dependencies
import { $, component$ } from '@builder.io/qwik';
import { appInfoStore } from 'src/store/appInfo/store';

/**
 * UpdaterA Component:  Descripción del comportamiento...
 */
export const UpdaterA = component$(() => {
  // -----------------------CONSTS, HOOKS, STATES
  const updateLoader = $(() => {
    appInfoStore.setState((state2) => ({
      ...state2,
      isLoadingGlobal: !state2.isLoadingGlobal
    }));
  });
  // -----------------------MAIN METHODS
  // -----------------------AUX METHODS
  // -----------------------RENDER
  return (
    <div class="UpdaterA">
      <p>UpdaterA</p>
      <button onClick$={updateLoader}>update loader</button>
    </div>
  );
});
