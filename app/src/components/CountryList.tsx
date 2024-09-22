"use client";

import { useState } from "react";
import { useFetchCountries, Country } from "../hooks/useFetchCountries";
import {
  sortCountriesByPopulation,
  filterCountriesByRegion,
  searchCountriesByNameOrCapital,
} from "../utils/countryUtils";
import CountryCard from "./CountryCard";

const CountryList = () => {
  const { countries, loading, error } = useFetchCountries();
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [selectedRegion, setSelectedRegion] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  let displayedCountries: Country[] = countries;

  if (searchTerm) {
    displayedCountries = searchCountriesByNameOrCapital(countries, searchTerm);
  }

  if (selectedRegion) {
    displayedCountries = filterCountriesByRegion(
      displayedCountries,
      selectedRegion
    );
  }

  displayedCountries = sortCountriesByPopulation(displayedCountries, sortOrder);

  return (
    <div>
      <div>
        <label>Sort by Population: </label>
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value as "asc" | "desc")}
        >
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>

      <div>
        <label>Filter by Region: </label>
        <select
          value={selectedRegion}
          onChange={(e) => setSelectedRegion(e.target.value)}
        >
          <option value="">All</option>
          <option value="Africa">Africa</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Americas">Americas</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>

      <div>
        <input
          type="text"
          placeholder="Search by name or capital"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {displayedCountries.map((country) => (
          <CountryCard key={country.name.common} country={country} />
        ))}
      </div>
    </div>
  );
};

export default CountryList;
