import { createStore } from 'zustand';
import type { AppInfoState } from './definitions';
import { useSignal, useVisibleTask$ } from '@builder.io/qwik';

export const INITIAL_STATE: AppInfoState = {
  isLoadingGlobal: false,
  isMobile: true,
  winSize: 'sm',
  test: ''
};

export const appInfoStore = createStore(() => INITIAL_STATE);

export const useStoreAppInfo = () => {
  const state = useSignal<AppInfoState>(appInfoStore.getState());

  useVisibleTask$(({ cleanup }) => {
    const unsubscribe = appInfoStore.subscribe((storeState) => {
      state.value = storeState;
      if (window.__REDUX_DEVTOOLS_EXTENSION__) {
        const connection = window.__REDUX_DEVTOOLS_EXTENSION__.connect({
          name: 'Devtools MLG Example'
        });
        connection.send(
          {
            type: 'APP_INFO_CHANGE',
            payload: storeState
          },
          storeState
        );
      }
    });
    cleanup(() => {
      unsubscribe();
      if (window.__REDUX_DEVTOOLS_EXTENSION__) {
        window.__REDUX_DEVTOOLS_EXTENSION__.disconnect();
      }
    });
  });

  useVisibleTask$(({ cleanup }) => {
    if (window.__REDUX_DEVTOOLS_EXTENSION__) {
      const connection = window.__REDUX_DEVTOOLS_EXTENSION__.connect({
        name: 'Devtools MLG Example'
      });
      connection.send(
        {
          type: 'APP_INFO_INIT',
          payload: INITIAL_STATE
        },
        INITIAL_STATE
      );
    }

    cleanup(() => {
      if (window.__REDUX_DEVTOOLS_EXTENSION__) {
        window.__REDUX_DEVTOOLS_EXTENSION__.disconnect();
      }
    });
  });

  return state.value;
};

export const useActionsAppInfo = appInfoStore.setState;
