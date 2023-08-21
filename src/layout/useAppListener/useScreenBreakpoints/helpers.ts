import type { AppInfoState } from 'src/store/appInfo';

export type ResponsiveData = Pick<AppInfoState, 'isMobile' | 'winSize'>;

/** Calcula los puntos de interrupción de la pantalla y devuelve un objeto
 * ResponsiveData con propiedades "isMobile" y "winSize"
 * @returns {ResponsiveData}
 */
export function getScreen(width: number): ResponsiveData {
  const caseXS = width < 576;
  const caseSM = width > 576 && width < 768;
  const caseMD = width > 768 && width < 992;
  const caseLG = width > 992 && width < 1200;
  const caseXL = width > 1200 && width < 1600;
  const caseXXL = width > 1600;
  if (caseXS) return { isMobile: true, winSize: 'xs' };
  if (caseSM) return { isMobile: true, winSize: 'sm' };
  if (caseMD) return { isMobile: false, winSize: 'md' };
  if (caseLG) return { isMobile: false, winSize: 'lg' };
  if (caseXL) return { isMobile: false, winSize: 'xl' };
  if (caseXXL) return { isMobile: false, winSize: 'xxl' };
  return { isMobile: false, winSize: 'lg' };
}
