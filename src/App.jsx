import "./App.css";
import "./App.css";
import HomePage from "./pages/HomePage";
import CountryDetails from "./pages/CountryDetailsPage";
import Navbar from "./components/Navbar";

import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";


function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const url = `https://ih-countries-api.herokuapp.com/countries`;
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        setCountries(data);
      });
  }, []);   

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage countries={countries} />} />
        <Route path="/country/:countryId" element={<CountryDetails />} />
      </Routes>
    </div>
  );
}

export default App;