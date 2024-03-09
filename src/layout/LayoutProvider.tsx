import { Slot, component$ } from '@builder.io/qwik';
import { useAppListener } from './useAppListener/useAppListener';
import { Footer } from './Footer/Footer';
import { Navbar } from './Navbar/Navbar';
import { useFStore } from 'src/store/config/storeConfig';
import { InitialLoading } from 'src/common/InitialLoading/InitialLoading';

export const LayoutProvider = component$(() => {
  // -----------------------CONSTS, HOOKS, STATES
  useAppListener();
  const { state } = useFStore();
  // -----------------------RENDER
  if (!state.appInfo.clientLoaded) return <InitialLoading />;
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
