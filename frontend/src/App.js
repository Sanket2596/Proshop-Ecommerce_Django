import Footer from "./components/Footer";
import Header from "./components/Header";
import { Container } from 'react-bootstrap';
import HomeScreen from "./screens/HomeScreen";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductScreen from "./screens/ProductScreen";
import LoginScreen from "./screens/LoginScreen";

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <main className="py-3">
        <Container>
          <Routes>
            <Route path='/' element={<HomeScreen />} exact></Route>
            <Route path='/product/:id' element={<ProductScreen/>} ></Route>
            <Route path='/login' element={<LoginScreen />} ></Route>
          </Routes>
        </Container>
      </main>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
