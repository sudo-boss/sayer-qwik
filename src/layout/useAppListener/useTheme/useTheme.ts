import { $, useVisibleTask$ } from '@builder.io/qwik';
import type { AppInfoState } from 'src/store/appInfo';
import { useFStore } from 'src/store/config/storeConfig';
import { themeColors } from './themeColors';

/**
 * useTheme Component: Escucha el tema en el FStore y cambia dinámicamente las variables de tema en el css
 */
export function useTheme() {
  // -----------------------CONSTS, HOOKS, STATES
  const { state } = useFStore();
  // -----------------------MAIN METHODS
  const onThemeChange = $((theme: AppInfoState['theme']) => {
    const colorSchema = themeColors[`${theme}Theme`];
    for (const key in colorSchema) {
      document.documentElement.style.setProperty(key, colorSchema[key as keyof typeof colorSchema]);
    }
  });

  useVisibleTask$(({ track }) => {
    const theme = track(() => state.appInfo.theme);
    onThemeChange(theme);
  });
}
