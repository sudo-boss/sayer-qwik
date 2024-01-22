import { Slot, component$ } from '@builder.io/qwik';
import { useAppListener } from './useAppListener/useAppListener';
import { Footer } from './Footer/Footer';
import { Navbar } from './Navbar/Navbar';

export const LayoutProvider = component$(() => {
  // -----------------------CONSTS, HOOKS, STATES
  useAppListener();
  // -----------------------RENDER
  return (
    <>
      <Navbar />
      <main>
        <Slot />
      </main>
      <Footer />
    </>
  );
});
