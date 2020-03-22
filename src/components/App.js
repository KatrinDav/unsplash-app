import React from 'react';
import MainView from './MainView/MainView';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SectionView from './SectionView/SectionView';
import ItemView from './ItemView/ItemView';

// '/collections?page=1&perPage=10&orderBy=latest'

class App extends React.Component {

  render() {

    return (
      <BrowserRouter>

        <Switch>

          <Route path="/SectionView/:id"> <SectionView />  </Route>
          <Route path="/ItemView/:id"> <ItemView />  </Route>
          <Route path="/" > <MainView />  </Route>


        </Switch>

      </BrowserRouter>


    );
  }
}

export default App;


