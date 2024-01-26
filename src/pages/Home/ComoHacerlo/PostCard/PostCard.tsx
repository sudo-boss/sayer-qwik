// ---Dependencies
import { Slot, component$ } from '@builder.io/qwik';
// ---Styles
import style from './PostCard.module.scss';
import { CristalCard } from 'src/common/CristalCard/CristalCard';
import { Button } from 'src/common/Button/Button';

interface Props {
  prevText: string;
  url: string;
}

/**
 * PostCard Component:  Descripción del comportamiento...
 * @param {Props} props - Parámetros del componente como: ...
 */
export const PostCard = component$<Props>(({ prevText, url }) => {
  // -----------------------CONSTS, HOOKS, STATES
  // -----------------------MAIN METHODS
  // -----------------------AUX METHODS
  // -----------------------RENDER
  return (
    <CristalCard class={style['PostCard']} width={320} padding={15} transparency={0.14}>
      <Slot />
      <p>{prevText}</p>
      <a href={url}>
        <Button text="Ver post" classCustom="bgBtnOrangeSecondary" borderRadius="30px" />
      </a>
    </CristalCard>
  );
});
