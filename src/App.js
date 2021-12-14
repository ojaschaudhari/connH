import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './Components/Home';
import Product from './Components/Product';
import Menu from './Components/Menu';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Menu></Menu>
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/products" element={<Product></Product>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
