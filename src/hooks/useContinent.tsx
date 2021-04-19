import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { api } from "../services/api";

interface ContinentProviderProps {
  children: ReactNode;
}

interface ContinentFormat {
  continentName: string;
  id: number;
  name: string;
  info: string;
  image: string;
  countries: number;
  languages: number;
  cities: number;
}

interface CityFormat {
  id: number;
  city: string;
  country: string;
  flag: string;
  image: string;
}

interface ContinentContextData {
  cities: CityFormat[];
  continents: ContinentFormat[];
  continentCurrent: ContinentFormat;
  getContinentCurrent: (continentName: string) => void;
}

export const ContinentContext = createContext<ContinentContextData>(
  {} as ContinentContextData
);

export function ContinentProvider({ children }: ContinentProviderProps) {
  const [continents, setContinents] = useState<ContinentFormat[]>([]);
  const [continentCurrent, setcontinentCurrent] = useState<ContinentFormat>();
  const [cities, setCities] = useState<CityFormat[]>([]);

  useEffect(() => {
    api.get<ContinentFormat[]>("continents").then((response) => {
      setContinents(response.data);
    });
  }, []);

  async function getCities(continentName: string) {
    try {
      const response = await api.get(`cities`);

      if (!response.data) {
        throw new Error();
      }

      let dataCities = response.data.find(
        (continent) => continent.continentName === continentName
      );
      setCities(dataCities.cities);
    } catch (err) {
      console.log("error ", err);
    }
  }

  const getContinentCurrent = (continentName: string) => {
    if (continents) {
      const continent = continents.find(
        (continent) => continent.continentName === continentName
      );
      setcontinentCurrent(continent);
      getCities(continentName);
    }
  };

  return (
    <ContinentContext.Provider
      value={{ continents, continentCurrent, getContinentCurrent, cities }}
    >
      {children}
    </ContinentContext.Provider>
  );
}

export function useContinent(): ContinentContextData {
  const context = useContext(ContinentContext);

  return context;
}
