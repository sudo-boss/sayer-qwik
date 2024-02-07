// ---Dependencies
import { component$ } from '@builder.io/qwik';
// ---Styles
import style from './Footer.module.scss';
import VectorFooter from '/public/images/layout/footer/VectorFooter.svg?jsx';

/**
 * Footer Component:  Descripción del comportamiento...
 */
export const Footer = component$(() => {
  // -----------------------CONSTS, HOOKS, STATES
  // -----------------------MAIN METHODS
  // -----------------------AUX METHODS
  // -----------------------RENDER
  return (
    <footer class={style['Footer']}>
      <div class={`${style.containerFooter || ''}`}>
        <VectorFooter />
        <div class={style.container}>
          <div class="row01">
            <ul>
              <li>Acerca de nosotros</li>
              <li>Quienes somos</li>
              <li>Trabaja con nosotros</li>
              <li>Contacto</li>
              <li>Localiza la tienda</li>
            </ul>

            <ul>
              <li>Tienda en linea</li>
              <li>Como comprar?</li>
              <li>Preguntas frecuentes</li>
              <li>Formas de pago</li>
              <li>Tiempos de entrega</li>
              <li>Devoluciones</li>
              <li>Facturacion</li>
            </ul>
          </div>
          <div class="row02">
            <p>Hecho por forgemytech.com</p>
            <p>Terminos y condiciones | Aviso de privacidad</p>
          </div>
          <div class="row03">
            <p>©2023 Sayer</p>
          </div>
        </div>
      </div>
    </footer>
  );
});
