import axios from "axios";
import { useEffect, useState } from "react";
import CountryCard from "./CountryCard";
import useFetch from "../hooks/useFetch";

const CountriesList = () => {
  const { isLoading, data: countries } = useFetch(
    "https://restcountries.com/v3.1/all"
  );

  return (
    <main>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {isLoading ? (
          <article className="h-96 w-36 bg-slate-300 rounded-md">
            <div className="w-full h-36"></div>
            <div className="w-3/4 h-16"></div>
            <div className="w-1/2 h-8"></div>
          </article>
        ) : (
          countries.map((country) => {
            return (
              <CountryCard
                key={country.altSpellings[1]}
                capital={country.capital}
                countryName={country.name.common}
                flag={country.flags.svg}
                population={country.population}
                region={country.region}
              />
            );
          })
        )}
      </div>
    </main>
  );
};

export default CountriesList;
