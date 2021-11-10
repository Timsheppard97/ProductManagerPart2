import './App.css';
import Main from './Main'
import ProductView from './Components/ProductView'
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter className="App">
      <header className="App-header">
        <h1>Product Manager</h1>
      </header>
      <Switch>
        <Route exact path='/api/products'>
          <Main />
        </Route>
        <Route exact path='/api/products/:id'>
          <ProductView />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;