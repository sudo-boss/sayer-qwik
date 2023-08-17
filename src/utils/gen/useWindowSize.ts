// ---Dependencies
import { $, useStore } from '@builder.io/qwik';
import { useResizeListener } from './useResizeListener';

/**
 * useWindowSize Component: Devuelve un estado con el innerHeight e innerWidth del navegador
 * @param {Props} props - Parámetros del componente como: ...
 */
export function useWindowSize() {
  // -----------------------CONSTS, HOOKS, STATES
  const windowSize = useStore({ width: -1, height: -1 });

  const directHandler = $((width: number, height: number) => {
    windowSize.height = width;
    windowSize.width = height;
  });
  useResizeListener(
    $((event: any) => {
      windowSize.height = event.target?.innerHeight;
      windowSize.width = event.target?.innerWidth;
    }),
    directHandler
  );
  // -----------------------HOOK DATA
  return { windowSize };
}
