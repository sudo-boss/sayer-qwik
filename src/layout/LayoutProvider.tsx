import { Slot, component$ } from '@builder.io/qwik';

export const LayoutProvider = component$(() => {
  // -----------------------CONSTS, HOOKS, STATES
  // -----------------------RENDER
  return (
    <main>
      <Slot />
    </main>
  );
});
