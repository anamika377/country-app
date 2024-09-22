"use client"; // Add this line at the top

import { useState, useEffect } from "react";

export interface Country {
  name: { common: string };
  flags: { png: string };
  capital: string[];
  population: number;
  region: string;
  currencies?: { [key: string]: { name: string } };
  languages?: { [key: string]: string };
  timezones?: string[];
}

export const useFetchCountries = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        if (!response.ok) {
          throw new Error("Failed to fetch countries");
        }
        const data = await response.json();
        setCountries(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  return { countries, loading, error };
};
