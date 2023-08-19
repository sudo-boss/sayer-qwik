export interface AppInfoState {
  isMobile: boolean;
  winSize: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  isLoadingGlobal: boolean;
  test?: string;
  count: number;
}

export const APP_INFO_INIT: AppInfoState = {
  isLoadingGlobal: false,
  isMobile: true,
  winSize: 'sm',
  test: '',
  count: 0,
};
