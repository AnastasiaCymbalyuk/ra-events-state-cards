import './App.css';
import Store from './components/Store';
import productsList from './components/productsList';

function App() {
  return (
    <Store products={productsList()}/>
  );
}

export default App;
