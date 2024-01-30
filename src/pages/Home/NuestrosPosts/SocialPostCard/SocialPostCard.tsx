// ---Dependencies
import { component$ } from '@builder.io/qwik';
// ---Styles
import style from './SocialPostCard.module.scss';
import { Fcol, Frow } from 'qwik-forge-grid';

import FacebookColor from '/public/images/home/NuestrosPosts/facebookColor.svg?jsx';
import InstagramColor from '/public/images/home/NuestrosPosts/instagramColor.svg?jsx';
import NewPost from '/public/images/home/NuestrosPosts/newPosts.png?jsx';

interface Props {
  title: string;
  p: string;
  variant: 'fb' | 'ig';
  url: string;
}

/**
 * SocialPostCard Component:  Descripción del comportamiento...
 * @param {Props} props - Parámetros del componente como: ...
 */
export const SocialPostCard = component$<Props>(({ title, p, variant, url }) => {
  // -----------------------CONSTS, HOOKS, STATES
  // -----------------------MAIN METHODS
  // -----------------------AUX METHODS
  // -----------------------RENDER
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <Frow vAlign="middle" class={style['SocialPostCard']}>
        <Fcol span={22}>{variant === 'fb' ? <FacebookColor /> : <InstagramColor />}</Fcol>
        <Fcol span={78}>
          <h4>{title}</h4>
          <p>{p}</p>
        </Fcol>
        <Fcol>
          <NewPost class="post" />
        </Fcol>
      </Frow>
    </a>
  );
});
