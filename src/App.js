import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Header } from './components/Header'
import { PopularSongs } from './components/PopularSongs'
import { DetailsInfo } from './components/DetailsInfo'


export const App = () => {
  return (
    <main>
    {/* <Header /> */}
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
    </main>
  )
}
