import { IoIosSearch } from "react-icons/io";
import CountriesList from "../components/CountriesList";

const HomePage = () => {
  return (
    <main>
      <div className="container">
        <header className="flex justify-between items-center py-8">
          <div className="inline-flex items-center border shadow-sm rounded-md">
            <span className="p-2">
              <IoIosSearch />
            </span>
            <input
              type="search"
              name="search"
              id="search"
              className="outline-none"
            />
          </div>
          <select
            name="region"
            id="region"
            className="border shadow-sm rounded-md p-2"
          >
            <option value="asia">Asia</option>
            <option value="africa">Africa</option>
            <option value="europe">Europe</option>
            <option value="america">America</option>
            <option value="oceania">Oceania</option>
          </select>
        </header>
        <CountriesList />
      </div>
    </main>
  );
};

export default HomePage;
