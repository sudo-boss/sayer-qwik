import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Err404 } from 'src/pages/Err404/Err404';

export default component$(() => {
  return (
    <>
      <Err404 />
    </>
  );
});

export const head: DocumentHead = {
  title: 'Welcome to 404',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};
