// ---Dependencies
import { component$ } from '@builder.io/qwik';
import { Button } from 'src/common/Button/Button';
// ---Styles
import style from './Home.module.scss';
import RectangleBluePrimary from '../../../public/images/rectangleBluePrimary.svg?jsx';
import RectangleBlueSecondary from '../../../public/images/rectangleBlueSecondary.svg?jsx';
import RectangleGreen from '../../../public/images/rectangleGreen.svg?jsx';
import Rectanglelocation from '/public/images/rectanglelocation.svg';
import PinturasBanner from '/public/images/pinturasBanner.webp?jsx';
import Pintura01 from '/public/images/pintura01.png?jsx';

import ProductosLocation from '/public/images/ProductosLocation.webp?jsx';
import MapLocation from '/public/images/MapLocation.webp?jsx';

/* icons social media */
import FacebookIcon from '/public/images/facebookIcon.svg?jsx';
import InstagramIcon from '/public/images/instagramIcon.svg?jsx';
import YoutubeIcon from '/public/images/youtubeIcon.svg?jsx';
import TwitterIcon from '/public/images/twitterIcon.svg?jsx';

/* posts */
import Post01 from '/public/images/post01.png?jsx';

/* new posts */
import InstagramColor from '/public/images/instagramColor.svg?jsx';
import FacebookColor from '/public/images/facebookColor.svg?jsx';
import NewPosts from '/public/images/newPosts.png?jsx';

/* comments */
import Star from '/public/images/star.svg?jsx';
import User from '/public/images/user.svg?jsx';

/**
 * Home Component:  Descripción del comportamiento...
 * @param {Props} props - Parámetros del componente como: ...
 */
export const Home = component$(() => {
  // -----------------------CONSTS, HOOKS, STATES

  // -----------------------RENDER
  return (
    <div class={style.Home}>
      <div class={style.containerBanner}>
        <div class={`${style.rowGlobalBanner || ''} ${style.container || ''}`}>
          <div class="col01">
            <p>20 %</p>
            <p>de descuento</p>
            <a href="#">Comprar ahora</a>
          </div>
          <div class="col02">
            <RectangleBluePrimary class={style.rectangleBluePrimary} />
            <RectangleBlueSecondary class={style.rectangleBlueSecondary} />
            <PinturasBanner class="pinturasBanner" />
          </div>
        </div>
      </div>

      <div class={style.containerProducts}>
        <div class={style.rowGlobalProducts}>
          <div class="col">
            <div class="row">
              <div class="tagDiscount">-10%</div>
              <Pintura01 />
              <p>Pintura roja</p>
              <p>19 litros</p>
              <Button text="Contactanos" classCustom="bgBtnBlueSecondary" borderRadius="20px" />
            </div>
          </div>
        </div>
      </div>

      <div class={style.containerShowMore}>
        <div class={`${style.rowGlobalShowMore || ''} ${style.container || ''}`}>
          <div class="col01">
            <h5>Los mejores colores para tu hogar</h5>
            <Button text="Ver mas" classCustom="bgBtnBlueSecondary" borderRadius="5px" />
          </div>
          <div class="col02">
            <Pintura01 class="pinturaShowMore" />
            <RectangleGreen class={style.rectangleShowMore} />
          </div>
        </div>
      </div>

      <div class={style.containerLocation}>
        <img src={Rectanglelocation} class="gradientlocation" width={600} height={600} alt="" />
        <div class={`${style.rowGlobalLocation || ''} ${style.container || ''}`}>
          <div class="col01">
            <div class="containerCol">
              <h5>Más productos</h5>
              <h5>En nuestras </h5>
              <h5>3 sucursales</h5>
              <Button text="Ubicanos" classCustom="bgBtnOrangeSecondary" borderRadius="30px" />
              <MapLocation class="mapLocation" />
            </div>
          </div>
          <div class="col02">
            <ProductosLocation class="productosLocation" />
          </div>
        </div>
      </div>

      <div class={style.containerSocial}>
        <div class={`${style.rowGlobalSocial || ''} ${style.container || ''}`}>
          <h3>
            SIGUENOS EN <br /> REDES SOCIALES
          </h3>
          <div class={style.line}></div>
          <div class={style.row}>
            <div class="col">
              <FacebookIcon />
            </div>
            <div class="col">
              <TwitterIcon />
            </div>
            <div class="col">
              <InstagramIcon />
            </div>
            <div class="col">
              <YoutubeIcon />
            </div>
          </div>
        </div>
      </div>

      <div class={`${style.containerPosts || ''} ${style.container || ''}`}>
        <h3>
          Como <br /> hacerlo...
        </h3>
        <p>
          Visite nuestra sección de instrucciones para obtener asesoramiento experto y paso a paso
          sobre su próximo proyecto o consulte nuestras redes sociales para mas post interesantes
        </p>
        <div class={style.rowGlobalPost}>
          <div class="card">
            <div class="cardImg">
              <Post01 />
              <FacebookIcon />
            </div>
            <div class="cardBody">
              <p>
                Aprenda los conceptos basicos del producto, la preparacion y el precio para
                transformar cualquier habitacion de su hogar
              </p>
              <Button text="Ver post" classCustom="bgBtnOrangeSecondary" borderRadius="30px" />
            </div>
          </div>
          <div class="card">
            <div class="cardImg">
              <Post01 />
              <InstagramIcon />
            </div>
            <div class="cardBody">
              <p>Cree un aspecto unico y duradero para las superficies de concreto de su hogar</p>
              <Button text="Ver post" classCustom="bgBtnOrangeSecondary" borderRadius="30px" />
            </div>
          </div>
          <div class="card">
            <div class="cardImg">
              <Post01 />
              <TwitterIcon />
            </div>
            <div class="cardBody">
              <p>
                Aprenda por que la preparacion es el secreto de cualquier gran proyecto de pintura
                exterior. Y como un poco de tiempo extra al comienzo dara sus frutos
              </p>
              <Button text="Ver post" classCustom="bgBtnOrangeSecondary" borderRadius="30px" />
            </div>
          </div>
        </div>
      </div>

      <div class={`${style.containerPosts || ''} ${style.container || ''}`}>
        <h3>
          Nuestros post más <br /> recientes...
        </h3>
        <div class={style.rowGlobalNewPost}>
          <div class="card">
            <div class="cardBody">
              <div class="iconContainer">
                <FacebookColor />
              </div>
              <div>
                <h6>Pinturas sayer</h6>
                <p>
                  Aprenda los conceptos basicos del producto, la preparacion y el precio para
                  transformar cualquier habitacion de su hogar
                </p>
              </div>
            </div>
            <div class="cardImg">
              <NewPosts />
            </div>
          </div>
          <div class="card">
            <div class="cardBody">
              <div class="iconContainer">
                <InstagramColor />
              </div>
              <div>
                <h6>Pinturas sayer</h6>
                <p>Cree un aspecto unico y duradero para las superficies de concreto de su hogar</p>
              </div>
            </div>
            <div class="cardImg">
              <NewPosts />
            </div>
          </div>
        </div>
      </div>

      <div class={`${style.containerComments || ''} ${style.container || ''}`}>
        <div class="card">
          <div class="head">
            <div class="col01">
              <User />
            </div>
            <div class="col02">
              <p>Pedro Navajas C.</p>
              <div>
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
              </div>
            </div>
          </div>
          <div class="description">
            <span>Publicado el 21 de septiembre de 2023</span>
            <span>Pintura color: negro | </span>
            <span> Compra verificada</span>
          </div>
          <div class="comment">
            <p>
              Lorem ipsum dolor sit amet consectetur. Tellus faucibus morbi id vel sed vitae lorem
              orci scelerisque. Augue cras ut eget tortor scelerisque. Magna lacus sapien integer
              nisi ipsum. Ipsum at malesuada arcu malesuada adipiscing sagittis nibh gravida. Dui
              aliquam dui pellentesque sem faucibus interdum aliquet posuere.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
});
