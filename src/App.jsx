import "./App.css";
import Home from "./pages/home/Home";
import { Route, Routes } from "react-router-dom";
import Header from '../src/components/header/Header.jsx'
import CountryDetails from '../src/pages/country-detail/CountryDetail' 
const App = () => {
  return (
    <main className="main-container">
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Header />
              <Home />
            </div>
          }
        />
        <Route path="/:Details" element={<CountryDetails />} />
      </Routes>
    </main>
  );
};

export default App;
