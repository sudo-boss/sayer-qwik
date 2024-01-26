// ---Dependencies
import { Slot, component$ } from '@builder.io/qwik';
// ---Styles
import style from './CristalCard.module.scss';

interface Props {
  width: number | string;
  height?: number | string;
  padding?: number;
  class?: string;
  /** balue between 0 and 1 */
  transparency?: number;
}

/**
 * CristalCard Component:  Descripción del comportamiento...
 * @param {Props} props - Parámetros del componente como: ...
 */
export const CristalCard = component$<Props>(
  ({ height, width = '100%', padding, class: className = '', transparency = 0.275 }) => {
    // -----------------------CONSTS, HOOKS, STATES
    const { adjustedHeight, adjustedWidth, top, left } = getAdjustedValues();

    const cardStyles = {
      width: `${width}px`,
      height: height ? `${height}px` : undefined,
      padding: padding ? `${padding}px` : undefined,
    };

    const pseudoElementStyles = {
      width: adjustedWidth,
      height: adjustedHeight,
      borderRadius: '8px',
      // backgroundColor: 'rgba(75, 70, 70, 0.275)',
      backgroundColor: `rgba(75, 70, 70, ${transparency})`,
      filter: 'blur(14px)',
      position: 'absolute',
      top: top,
      left: left,
      zIndex: -1,
    } as const;

    // -----------------------MAIN METHODS
    // -----------------------AUX METHODS
    function getAdjustedValues() {
      const extraW = 10;
      const extraH = 5;
      const paddingValue = (padding || 0) * 2;

      const isWidthNumeric = typeof width === 'number';
      const isHeightNumeric = typeof height === 'number';

      const adjustedWidth = isWidthNumeric
        ? `${width + paddingValue + extraW}px`
        : `calc(${width} + ${paddingValue}px + ${extraW}px)`;
      const adjustedHeight =
        height === undefined
          ? `calc(100% + ${paddingValue}px + ${extraH}px)`
          : isHeightNumeric
          ? `${height + paddingValue + extraH}px`
          : `calc(${height} + ${paddingValue}px + ${extraH}px)`;

      const top = `-${(extraH + paddingValue) / 2}px`;
      const left = 0;

      return { adjustedWidth, adjustedHeight, top, left };
    }

    // -----------------------RENDER
    return (
      <div class={`${style['CristalCard'] || ''} ${className}`} style={cardStyles}>
        <div class="glass" style={pseudoElementStyles} />
        <Slot />
      </div>
    );
  },
);
