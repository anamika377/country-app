import Link from "next/link";
import { Country } from "../hooks/useFetchCountries";

interface CountryCardProps {
  country: Country;
}

const CountryCard: React.FC<CountryCardProps> = ({ country }) => {
  return (
    <div className="card">
      <Link href={`/${country.name.common}`}>
        <img src={country.flags.png} alt={`${country.name.common} flag`} />
        <h2>{country.name.common}</h2>
        <p>Capital: {country.capital?.[0] || "N/A"}</p>
        <p>Population: {country.population.toLocaleString()}</p>
        <p>Region: {country.region}</p>
      </Link>
    </div>
  );
};

export default CountryCard;
