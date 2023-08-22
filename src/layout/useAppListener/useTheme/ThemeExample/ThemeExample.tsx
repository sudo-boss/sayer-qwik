// ---Dependencies
import { $, component$, useComputed$ } from '@builder.io/qwik';
// ---Styles
import style from './ThemeExample.module.scss';
import { useFStore } from 'src/store/config/storeConfig';
import { useTheme } from '../useTheme';

/**
 * ThemeExample Component: Ejemplifica la implementación de temas usando useTheme,
 * lógica para cambiar el tema y los estilos que se deben de utilizar
 */
export const ThemeExample = component$(() => {
  // -----------------------CONSTS, HOOKS, STATES
  const { state } = useFStore();
  useTheme(); // Añade esto en la capa de providers/layout
  const isGreen = useComputed$(() => state.appInfo.theme == 'green');
  // -----------------------MAIN METHODS
  const onInput = $(() => {
    const newTheme = isGreen.value ? 'purple' : 'green';
    state.appInfo.theme = newTheme;
  });
  // -----------------------AUX METHODS
  // -----------------------RENDER
  return (
    <div class={style.ThemeExample}>
      <p>
        El tema es: <span>{state.appInfo.theme}</span>
      </p>
      <div>
        <span>default: </span>
        <input type="checkbox" checked={isGreen.value} onInput$={onInput} />
      </div>
    </div>
  );
});
