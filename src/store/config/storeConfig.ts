import { createContextId, useContext } from '@builder.io/qwik';
import { APP_INFO_INIT as appInfo } from '../appInfo';

export const INITIAL_REDUCERS = {
  appInfo,
};

export type IFStore = typeof INITIAL_REDUCERS;

export const FStore = createContextId<IFStore>('FStore');

/** Hook para leer y manipular el storage globalmente */
export const useFStore = () => {
  const state = useContext(FStore);
  return { state };
};
