import { Link } from "react-router-dom";

function HomePage({ countries }) {
  return (
    <div className="container" style={{ maxHeight: "90vh" }}>
      <h1 >
        WikiCountries: Your Guide to the World
      </h1>
      <div className="list-group">
        {countries.map((country, index) => {
          return (
            <Link
              to={`/country/${country.alpha3Code}`}
              key={country.alpha3Code}
              countrycode={country.alpha3Code}
              className="list-group-item list-group-item-action"
            >
            <img
            style={{width:"30px", marginRight: "15px"}}
            src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
            />
              {country.name.common}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default HomePage;