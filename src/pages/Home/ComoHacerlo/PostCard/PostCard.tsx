// ---Dependencies
import { Slot, component$ } from '@builder.io/qwik';
// ---Styles
import style from './PostCard.module.scss';
import { CristalCard } from 'src/common/CristalCard/CristalCard';
import { Button } from 'src/common/Button/Button';
import { useFStore } from 'src/store/config/storeConfig';

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
  const { state } = useFStore();
  // -----------------------MAIN METHODS
  // -----------------------AUX METHODS
  // -----------------------RENDER
  return (
    <CristalCard
      class={style['PostCard']}
      width={state.appInfo.isMobile ? 280 : 320}
      padding={15}
      transparency={0.14}
    >
      <Slot />
      <p>{prevText}</p>
      <a href={url}>
        <Button text="Ver post" classCustom="bgBtnOrangeSecondary" borderRadius="30px" />
      </a>
    </CristalCard>
  );
});
