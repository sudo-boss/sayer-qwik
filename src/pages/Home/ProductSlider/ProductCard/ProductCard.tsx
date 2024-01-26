// ---Dependencies
import { Slot, component$ } from '@builder.io/qwik';
// ---Styles
import style from './ProductCard.module.scss';
import { Button } from 'src/common/Button/Button';
import { CristalCard } from 'src/common/CristalCard/CristalCard';

interface Props {
  title: string;
  discount?: number;
}

/**
 * ProductCard Component:  Descripción del comportamiento...
 * @param {Props} props - Parámetros del componente como: ...
 */
export const ProductCard = component$<Props>(({ title, discount }) => {
  // -----------------------CONSTS, HOOKS, STATES
  // -----------------------MAIN METHODS
  // -----------------------AUX METHODS
  // -----------------------RENDER
  return (
    <CristalCard class={style['ProductCard']} padding={10} width={220}>
      {discount ? <div class="tagDiscount">-{discount}%</div> : null}
      <Slot />
      <p>{title}</p>
      <Button text="Detalles" classCustom="bgBtnBlueSecondary" borderRadius="20px" />
    </CristalCard>
  );
});
