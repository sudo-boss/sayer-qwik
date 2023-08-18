// ---Dependencies
import { Slot, component$ } from '@builder.io/qwik';

interface Props {}

/**
 * StoreProvider Component:  Descripción del comportamiento...
 * @param {Props} props - Parámetros del componente como: ...
 */
export const StoreProvider = component$<Props>((props) => {
  // -----------------------CONSTS, HOOKS, STATES
  // -----------------------MAIN METHODS
  // -----------------------AUX METHODS
  // -----------------------RENDER
  return (
    <>
      <Slot />
    </>
  );
});
