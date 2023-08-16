import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
// import Products from './pages/Products';
// import ProductDetail from './pages/ProductDetail';

function App() {
  return (
    <>
      <Router basename={process.env.PUBLIC_URL}>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          {/* <Route path='/products' element={<Products />} /> */}
          {/* <Route path='/product/:id' element={<ProductDetail />} /> */}
          {/* Other routes */}
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
