import { Country } from "../hooks/useFetchCountries";

// Function to sort countries by population
export const sortCountriesByPopulation = (
  countries: Country[],
  order: "asc" | "desc"
): Country[] => {
  return countries.sort((a, b) => {
    return order === "asc"
      ? a.population - b.population
      : b.population - a.population;
  });
};

// Function to filter countries by region
export const filterCountriesByRegion = (
  countries: Country[],
  region: string
): Country[] => {
  return countries.filter((country) => country.region === region);
};

// Function to search countries by name or capital
export const searchCountriesByNameOrCapital = (
  countries: Country[],
  searchTerm: string
): Country[] => {
  return countries.filter(
    (country) =>
      country.name.common.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (country.capital?.[0] || "")
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
  );
};
