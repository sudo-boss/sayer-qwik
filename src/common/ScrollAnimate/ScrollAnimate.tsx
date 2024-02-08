// ---Dependencies
import { Slot, component$, useSignal, useVisibleTask$ } from '@builder.io/qwik';
// ---Styles
import style from './ScrollAnimate.module.scss';

interface Props {
  /** Si se activa la animación se repetirá cada que el componente sea visible */
  always?: boolean;
  /** Numero en ms para retrasar la animación */
  delay?: number;
  /** Renderiza el children sin modificar ni animar cuando TRUE */
  disabled?: boolean;
}

/**
 * ScrollAnimate Component:  Descripción del comportamiento...
 * @param {Props} props - Parámetros del componente como: ...
 */
export const ScrollAnimate = component$<Props>(({ always = false, delay = 0, disabled }) => {
  // -----------------------CONSTS, HOOKS, STATES
  const classNames = useSignal(style.ScrollAnimate);
  const elementRef = useSignal<HTMLElement>();

  useVisibleTask$(({ track, cleanup }) => {
    track(() => always); // Re-track `always` for re-execution
    const element = elementRef.value;
    if (disabled || !element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry?.isIntersecting) {
          classNames.value = `${style.ScrollAnimate} ${style.ScrollAnimate}-show`;
        } else {
          if (always) {
            classNames.value = style.ScrollAnimate;
          }
        }
      },
      {
        threshold: 0.6,
      },
    );

    observer.observe(element);
    cleanup(() => observer.disconnect());
  });

  if (disabled) {
    return (
      <>
        <Slot />
      </>
    );
  }

  return (
    <div ref={elementRef} style={{ transitionDelay: `${delay}ms` }} class={classNames.value}>
      <Slot />
    </div>
  );
});
