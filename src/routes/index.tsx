import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Home } from 'src/pages/Home/Home';

export default component$(() => {
  return (
    <>
      <Home />
    </>
  );
});

export const head: DocumentHead = {
  title: 'Home | Sayer Pro Soluciones',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
  links: [],
};
