import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Nav from './Component/Nav';
import Footer from './Component/Footer';
import SignUp from './Component/SignUp';
import PrivateComponent from './Component/PrivateComponent';
import Login from './Component/Login';
function App() {
  return (
      <div className="App">
          <BrowserRouter>
              <Nav />
              <Routes>
                  <Route element={<PrivateComponent />}>
                        <Route path="/" element={<h1>Home Page Component</h1>} />
                        <Route path="/update" element={<h2>Update Profile Component</h2>} />
                        <Route path="/profile" element={<h3>Go to Profile Component</h3>} />
                        <Route path="/logout" element={<h4>Logout Component</h4>} />
                        <Route path="/addProduct" element={<h5>Add Product Component</h5>} />
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
