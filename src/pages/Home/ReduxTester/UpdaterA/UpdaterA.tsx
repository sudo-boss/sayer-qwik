// ---Dependencies
import { $, component$ } from '@builder.io/qwik';
import { useFStore } from 'src/store/config/storeConfig';

/**
 * UpdaterA Component:  Descripción del comportamiento...
 */
export const UpdaterA = component$(() => {
  // -----------------------CONSTS, HOOKS, STATES
  const { state } = useFStore();

  // -----------------------MAIN METHODS
  const updateLoader = $(() => {
    state.appInfo.isLoadingGlobal = !state.appInfo.isLoadingGlobal;
  });

  // -----------------------RENDER
  return (
    <div class="UpdaterA">
      <p>
        UpdaterA: <span>{String(state.appInfo.isLoadingGlobal)}</span>
      </p>
      <button onClick$={updateLoader}>update loader</button>
    </div>
  );
});
