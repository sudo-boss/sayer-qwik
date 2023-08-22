// ---Dependencies
import { useSignal, useVisibleTask$ } from '@builder.io/qwik';
import type { ResponsiveData } from 'src/layout/useAppListener/useScreenBreakpoints/helpers';
import { useFStore } from 'src/store/config/storeConfig';

/**
 * useStyleBuilder Component:  Descripción del comportamiento...
 */
export function useStyleBuilder(containerName?: string) {
  // -----------------------CONSTS, HOOKS, STATES
  const { state } = useFStore();
  // -----------------------MAIN METHODS
  // -----------------------AUX METHODS
  const classNames = useSignal('');
  useVisibleTask$(({ track }) => {
    track(() => [state.appInfo.winSize]);
    classNames.value = classBuilder({
      containerName,
      isMobile: state.appInfo.isMobile,
      winSize: state.appInfo.winSize,
    });
  });
  // -----------------------HOOK DATA
  return { classNames: classNames };
}

interface ClassBuilderProps extends ResponsiveData {
  containerName?: string;
}
function classBuilder({ isMobile, containerName, winSize }: ClassBuilderProps) {
  if (!containerName) return '';
  const screenType = isMobile ? 'mobile' : 'desktop';
  return `${containerName} ${containerName}-${screenType} ${containerName}-${winSize}`;
}
