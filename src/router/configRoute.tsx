import React from "react";
import { routerPath } from "./routepath";
import {Routes,Route} from 'react-router-dom';

type RouteProps = {
    path: string,
    element: any
}

export const AppRoute = () => {
  return(
    <>
      <Routes>
          {
            routerPath.map((route:RouteProps,index: number) => {
              return (
                <Route
                  path={route.path}
                  element={route.element}
                  key={index}
                />
              )
            })
          }
      </Routes>
    </>

  )
}