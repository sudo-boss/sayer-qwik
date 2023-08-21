import { Slot, component$ } from '@builder.io/qwik';
import { useAppListener } from './useAppListener/useAppListener';

export const LayoutProvider = component$(() => {
  // -----------------------CONSTS, HOOKS, STATES
  useAppListener();
  // -----------------------RENDER
  return (
    <main>
      <Slot />
    </main>
  );
});
