import { component$, Slot } from '@builder.io/qwik';
import type { RequestHandler } from '@builder.io/qwik-city';
import { LayoutProvider } from 'src/layout/LayoutProvider';
import { LogicProvider } from 'src/providers/LogicProvider';

export const onGet: RequestHandler = async ({ cacheControl }) => {
  // Control caching for this request for best performance and to reduce hosting costs:
  // https://qwik.builder.io/docs/caching/
  cacheControl({
    // Always serve a cached response by default, up to a week stale
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
    maxAge: 5,
  });
};

import { routeLoader$ } from '@builder.io/qwik-city';
import type { Pokemon } from 'src/services/pokemon';
import { getPokeApi } from 'src/services/pokemon';

export const useRandPokemon = routeLoader$(async () => {
  const response = await fetch(getPokeApi(), {
    headers: { Accept: 'application/json', Purpose: 'Purpose' },
  });
  const pokemon = (await response.json()) as Pokemon;

  return pokemon;
});

export default component$(() => {
  return (
    <LogicProvider>
      <LayoutProvider>
        <Slot />
      </LayoutProvider>
    </LogicProvider>
  );
});
