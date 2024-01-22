// ---Dependencies
import { component$ } from '@builder.io/qwik';
// ---Styles
import style from './Button.module.scss';

interface ButtonProps {
  borderRadius?: string;
  color?: string;
  marginTop?: string;
  classCustom: 'bgBtnBluePrimary' | 'bgBtnBlueSecondary' | 'bgBtnOrangeSecondary';
  text: string;
  onClick?: () => void;
}

/**
 * ContactItem Component:  Descripción del comportamiento...
 * @param {Props} props - Parámetros del componente como: ...
 */
export const Button = component$<ButtonProps>(
  ({ borderRadius, color, classCustom = 'bgBtnBluePrimary', marginTop = '8px', text, onClick }) => {
    const buttonClass = `${style.button || ''} ${style[classCustom] || ''}`;

    return (
      <button class={buttonClass} style={{ borderRadius, color, marginTop }} onClick$={onClick}>
        {text}
      </button>
    );
  },
);
