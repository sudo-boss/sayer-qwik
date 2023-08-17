import { $, useOnDocument, useOnWindow } from '@builder.io/qwik';

type EventType = keyof WindowEventMap | keyof HTMLElementEventMap;

// export function useEventListenerOnElement$(
//   eventName: EventType,
//   handler: (event: Event) => void,
//   elementSignal: typeof useSignal<HTMLElement | null>
// ) {
//   const targetElement = (elementSignal as any)?.value;
//   const qrlHandler = $(handler);

//   if (targetElement) {
//     useOn(eventName, qrlHandler, targetElement);
//   }
// }

// export function useEventListenerOnWindow(
//   eventName: EventType,
//   handler: (event: Event) => void
// ) {
//   console.log({ handler });

//   const qrlHandler = $(handler);
//   console.log({ qrlHandler });
//   useOnWindow(eventName, qrlHandler);
// }

// export function useEventListenerOnDocument$(
//   eventName: EventType,
//   handler: (event: Event) => void
// ) {
//   const qrlHandler = $(handler);
//   useOnDocument(eventName, qrlHandler);
// }

// Ejemplo de uso:
import { component$ } from '@builder.io/qwik';
import { useWindowSize } from './useWindowSize';

export const Example = component$(() => {
  const { windowSize } = useWindowSize();

  return (
    <div>
      <p>height: {windowSize.height}</p>
      <p>width: {windowSize.width}</p>
    </div>
  );
});
