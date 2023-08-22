import styles from './themeColors.module.scss';

// Puedes agregar las variables en sass ( $color1: var(--someVariable))

export const themeColors = {
  greenTheme: {
    '--primaryBgColor': styles.colorGreen as string,
    '--primaryFontColor': styles.colorDark6 as string,
  },
  purpleTheme: {
    '--primaryBgColor': styles.colorPurple13 as string,
    '--primaryFontColor': styles.colorLight1 as string,
  },
};
