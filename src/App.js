import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { PopularSongs } from './components/PopularSongs'
import { DetailsInfo } from './components/DetailsInfo'

export const App = () => {
  return (
    // <Header />
    <BrowserRouter>
      <Switch>

        <Route path="/" exact>
          <PopularSongs />
        </Route>


        <Route path="/song/:id">
          <DetailsInfo />
        </Route>

      </Switch>
    </BrowserRouter>
  )
}
