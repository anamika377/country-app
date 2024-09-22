"use client";

import { useParams } from "next/navigation";
import { useFetchCountries } from "../hooks/useFetchCountries";

const CountryDetail = () => {
  const { name } = useParams(); // Get the country name from the URL
  const { countries, loading, error } = useFetchCountries();

  if (loading) {
    return <p>Loading...</p>; // Handle loading state
  }

  if (error) {
    return <p>Error: {error}</p>; // Handle error state
  }

  // Find the country based on the name from the URL
  const country = countries.find((c) => c.name.common === name);
  console.log("Fetched countries:", countries);
  console.log("Country name from URL:", name);

  if (!country) {
    return <p>Country not found.</p>; // Handle case where country is not found
  }

  return (
    <div>
      <h1>{country.name.common}</h1>
      <img src={country.flags.png} alt={`${country.name.common} flag`} />
      <p>Capital: {country.capital?.[0] || "N/A"}</p>
      <p>Population: {country.population.toLocaleString()}</p>
      <p>Region: {country.region}</p>
      <p>
        Currencies:{" "}
        {Object.values(country.currencies)
          .map((currency) => currency.name)
          .join(", ")}
      </p>
      <p>Languages: {Object.values(country.languages).join(", ")}</p>
      <p>Time Zones: {country.timezones.join(", ")}</p>
    </div>
  );
};

export default CountryDetail;
