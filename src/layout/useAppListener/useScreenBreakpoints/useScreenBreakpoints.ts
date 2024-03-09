// ---Dependencies
import { useVisibleTask$ } from '@builder.io/qwik';
import { useFStore } from 'src/store/config/storeConfig';
import { useWindowSize } from 'src/utils/gen/useWindowSize';
import { getScreen } from './helpers';

/**
 * useScreenBreakpoints Component:  Descripción del comportamiento...
 * @param {Props} props - Parámetros del componente como: ...
 */
export function useScreenBreakpoints() {
  // -----------------------CONSTS, HOOKS, STATES
  const { state } = useFStore();
  const { windowSize } = useWindowSize();
  useVisibleTask$(({ track }) => {
    track(() => windowSize.width);
    const screenInfo = getScreen(windowSize.width);
    state.appInfo.isMobile = screenInfo.isMobile;
    state.appInfo.winSize = screenInfo.winSize;
    state.appInfo.clientLoaded = true;
  });
}
