// ---Dependencies
import { component$ } from '@builder.io/qwik';
import { useWindowSize } from 'src/utils/gen/useWindowSize';

/**
 * WindowTracker Component:  Descripción del comportamiento...
 * @param {Props} props - Parámetros del componente como: ...
 */
export const WindowTracker = component$(() => {
  // -----------------------CONSTS, HOOKS, STATES
  const { windowSize } = useWindowSize();
  // -----------------------MAIN METHODS
  // -----------------------AUX METHODS
  // -----------------------RENDER
  return (
    <div class="WindowTracker">
      <h3>WindowTracker</h3>
      <p>
        height: <span>{windowSize.height}</span>
      </p>
      <p>
        width: <span>{windowSize.width}</span>
      </p>
    </div>
  );
});
