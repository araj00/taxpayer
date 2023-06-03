import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from '../pages/Home/Home';
import { ROUTES } from './RouterConfig';
import SecondPage from '../pages/SecondPage/SecondPage.jsx';
import ThirdPage from '../pages/ThirdPage/ThirdPage';
import FourthPage from '../pages/FourthPage/FourthPage';
import FifthPage from '../pages/FifthPage/FifthPage';
import SixthPage from '../pages/SixthPage/SixthPage';


const Router = () => {

    const RouteWithRole = ({ Element }) => {
        return (
          <>
            <Element/>
          </>
        );
      }

  return (
    <div>
        <Routes>
            <Route exact path={ROUTES.Home} element={<RouteWithRole Element={Home} />}></Route>
            <Route exact path={ROUTES.Second} element={<RouteWithRole Element={SecondPage} />}></Route>
            <Route exact path={ROUTES.Third} element={<RouteWithRole Element={ThirdPage} />}></Route>
            <Route exact path={ROUTES.Fourth} element={<RouteWithRole Element={FourthPage} />}></Route>
            <Route exact path={ROUTES.Fifth} element={<RouteWithRole Element={FifthPage} />}></Route>
            <Route exact path={ROUTES.Sixth} element={<RouteWithRole Element={SixthPage} />}></Route>

        </Routes>
    </div>
  )
}

export default Router