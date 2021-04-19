import React, { useEffect, useMemo, useState } from "react";
import { GetServerSideProps } from "next";

import { Flex } from "@chakra-ui/react";

import { Header } from "../../components/Header";
import { Banner } from "../../components/Continent/Banner";
import { Information } from "../../components/Continent/Information";
import { Cities } from "../../components/Continent/Cities";
import { api } from "../../services/api";
import { useContinent } from "../../hooks/useContinent";

interface Continent {
  continentName: string;
  id: number;
  name: string;
  info: string;
  image: string;
  countries: number;
  languages: number;
  cities: number;
}

interface ContinentProps {
  continentName: string;
}

export default function Continent({ continentName }: ContinentProps) {
  const [isViewCities, setIsViewCities] = useState(false);
  const { continents, getContinentCurrent, continentCurrent } = useContinent();

//   console.log(continents, continentCurrent);

  useEffect(() => {
    getContinentCurrent(continentName);
  }, [continents]);

  function ViewCities() {
    setIsViewCities(true);
  }

  return (
    <Flex
      direction="column"
      display="block"
      height="100vh"
      width={["375px", "1262px"]}
      maxWidth={1480}
    >
      <Header href={`/continentName/${continentName}`} />
      {continentCurrent && (
        <Banner name={continentCurrent.name} image={continentCurrent.image} />
      )}
      {continentCurrent && (
        <Information
          setViewCities={ViewCities}
          isViewCities={isViewCities}
          info={continentCurrent.info}
          countries={continentCurrent.countries}
          languages={continentCurrent.languages}
          cities={continentCurrent.cities}
        />
      )}
      {/* {isViewCities &&  */}
      <Cities />
      {/* } */}
    </Flex>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { name } = params;
  return {
    props: {
      continentName: name,
    },
  };
};
