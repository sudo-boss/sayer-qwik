// ---Dependencies
import type { NoSerialize } from '@builder.io/qwik';
import {
  Slot,
  component$,
  noSerialize,
  useContextProvider,
  useSignal,
  useStore,
  useVisibleTask$,
} from '@builder.io/qwik';
import { APP_NAME, IS_PROD } from 'src/appConfig/globalConfig';
import type { IFStore } from './storeConfig';
import type { ReduxDevtools } from 'src/declarations';
import { INITIAL_REDUCERS, FStore } from './storeConfig';

interface Props {
  withDevTools?: boolean;
}

/**
 * StoreProvider Component:  Descripción del comportamiento...
 * @param {Props} props - Parámetros del componente como: ...
 */
export const StoreProvider = component$<Props>(({ withDevTools = !IS_PROD }) => {
  // -----------------------CONSTS, HOOKS, STATES
  const state = useStore<IFStore>(INITIAL_REDUCERS);
  const devConn = useSignal<null | NoSerialize<ReturnType<ReduxDevtools['connect']>>>(null);

  //--- Initialize devtools
  useVisibleTask$(({ cleanup }) => {
    const useDevTools = withDevTools && window.__REDUX_DEVTOOLS_EXTENSION__;
    if (useDevTools) {
      const connection = useDevTools.connect({
        name: APP_NAME,
      });

      devConn.value = noSerialize(connection);

      connection.send(
        {
          type: 'STORE_INIT',
          INITIAL_REDUCERS,
        },
        INITIAL_REDUCERS,
      );
    }

    cleanup(() => {
      if (useDevTools) {
        useDevTools.disconnect();
      }
    });
  });

  //---Update State to Devtools
  useVisibleTask$(({ track }) => {
    if (devConn.value) {
      track(() => {
        const allProps = getAllProps(state);
        return allProps;
      });

      devConn.value.send(
        {
          type: 'STORE_CHANGE',
          state,
        },
        state,
      );
    }
  });

  //---Update Devtools to State (when back steps)
  useVisibleTask$(({ cleanup }) => {
    if (devConn.value) {
      devConn.value.subscribe((evt: { type: string; state: string }) => {
        if (evt.type === 'DISPATCH') {
          const prevState = JSON.parse(evt.state) as IFStore;

          const propNames = Object.keys(state) as (keyof IFStore)[];

          propNames.forEach((prop) => {
            state[prop] = prevState[prop];
          });
        }
      });
    }

    cleanup(() => {
      if (devConn.value) {
        devConn.value.unsubscribe();
      }
    });
  });

  // -----------------------MAIN METHODS
  // -----------------------AUX METHODS
  // -----------------------RENDER
  useContextProvider(FStore, state);
  return (
    <>
      <Slot />
    </>
  );
});

function getAllProps(obj: any, prefix: string = ''): any[] {
  let properties: any[] = [];

  for (const key in obj) {
    if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
      properties = properties.concat(getAllProps(obj[key], `${prefix}${key}.`));
    } else {
      properties.push(obj[key]);
    }
  }

  return properties;
}
