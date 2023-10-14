import { Slot, component$ } from '@builder.io/qwik';
import { envs } from 'src/envs/envsLoaded';
import { StoreProvider } from 'src/store/config/StoreProvider';

export const LogicProvider = component$(() => {
  // -----------------------CONSTS, HOOKS, STATES
  // -----------------------RENDER
  return (
    <StoreProvider useLocalStorage={envs.LOCALSTORAGE}>
      <Slot />
    </StoreProvider>
  );
});
