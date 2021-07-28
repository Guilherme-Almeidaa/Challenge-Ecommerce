import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ProductsPage from './pages/ProductsPage';
import Provider from './provider/Provider';
import CartPage from './pages/CartPage';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <Provider>
        <Header />
        <Switch>
          <Route exact path="/" component={ProductsPage} />
          <Route path="/cart" component={CartPage} />
        </Switch>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
