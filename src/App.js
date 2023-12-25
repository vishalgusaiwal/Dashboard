import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Nav from './Component/Nav';
import Footer from './Component/Footer';
import SignUp from './Component/SignUp';
import PrivateComponent from './Component/PrivateComponent';
import Login from './Component/Login';
import AddProduct from './Component/AddProduct';
import ProductList from './Component/Products';
function App() {
  return (
      <div className="App">
          <BrowserRouter>
              <Nav />
              <Routes>
                  <Route element={<PrivateComponent />}>
                      <Route path="/" element={<ProductList />} />
                        <Route path="/update" element={<h2>Update Profile Component</h2>} />
                        <Route path="/profile" element={<h3>Go to Profile Component</h3>} />
                      <Route path="/logout" element={<h4>Logout Component</h4>} />
                      <Route path="/addProduct" element={<AddProduct/>} />
                  </Route>
                  <Route path="/SignUp" element={<SignUp />} />
                  <Route path="/Login" element={<Login /> } />
              </Routes>
          </BrowserRouter>
          <Footer />
    </div>
  );
}

export default App;
