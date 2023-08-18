import { Slot, component$ } from '@builder.io/qwik';
import { StoreProvider } from 'src/store/config/StoreProvider';

export const LogicProvider = component$(() => {
  // -----------------------CONSTS, HOOKS, STATES
  // -----------------------RENDER
  return (
    <StoreProvider>
      <Slot />
    </StoreProvider>
  );
});
