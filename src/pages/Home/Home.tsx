// ---Dependencies
import { component$ } from '@builder.io/qwik';
import { WindowTracker } from './WindowTracker/WindowTracker';
import { ReduxTester } from './ReduxTester/ReduxTester';
import { Fcol, Frow, Mcol, Mrow } from 'qwik-forge-grid';
// import { useSelectorBuilder } from 'src/utils/hooks/styles/useSelectorBuilder';
// ---Styles
// import style from './Home.module.scss';

/**
 * Home Component:  Descripción del comportamiento...
 * @param {Props} props - Parámetros del componente como: ...
 */
export const Home = component$(() => {
  // -----------------------CONSTS, HOOKS, STATES

  // -----------------------RENDER
  return (
    <div
    //className={classNames}
    >
      <h1>Home</h1>
      <hr />
      <Mrow space={0} debug>
        <Mcol span={70}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, nisi. Nihil provident sunt
          tempore, exercitationem aspernatur atque eum quidem vero natus, expedita fugiat blanditiis
          numquam possimus beatae! Assumenda, dignissimos consequatur.
        </Mcol>
        <Mcol span={20}>20%</Mcol>
        <Mcol span={10}>10%</Mcol>
        <Mcol span={25}>25%</Mcol>
        <Mcol span={25}>25%</Mcol>
        <Mcol span={25}>25%</Mcol>
        <Mcol span={25}>25%</Mcol>
        <Mcol span={40}>40%</Mcol>
        <Mcol span={60}>60%</Mcol>
      </Mrow>
      <br />
      <Frow debug>
        <Fcol span={70}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, nisi. Nihil provident sunt
          tempore, exercitationem aspernatur atque eum quidem vero natus, expedita fugiat blanditiis
          numquam possimus beatae! Assumenda, dignissimos consequatur.
        </Fcol>
        <Fcol span={20}>20%</Fcol>
        <Fcol span={10}>10%</Fcol>
        <Fcol span={25}>25%</Fcol>
        <Fcol span={25}>25%</Fcol>
        <Fcol span={25}>25%</Fcol>
        <Fcol span={25}>25%</Fcol>
        <Fcol span={40}>40%</Fcol>
        <Fcol span={60}>60%</Fcol>
      </Frow>
      <br />
      <WindowTracker />
      <br />
      <ReduxTester />
    </div>
  );
});
