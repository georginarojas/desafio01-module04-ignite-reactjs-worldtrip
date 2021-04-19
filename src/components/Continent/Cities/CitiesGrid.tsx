import { Grid, GridItem } from "@chakra-ui/react";
import { CityBox } from "./CityBox";
import { useContinent } from "../../../hooks/useContinent";

export function CitiesGrid() {
  const { cities } = useContinent();

  return (
    <Grid
      gap={["20px", "30px", "45px"]}
      templateColumns={["repeat(1, 1fr)", "repeat(4, 1fr)"]}
      align="center"
      marginTop={["20px", "40px"]}
    >
      {cities.map((city, index) => (
        <GridItem key={index} colSpan={1}>
          <CityBox
            city={city.city}
            country={city.country}
            flag={city.flag}
            image={city.image}
          />
        </GridItem>
      ))}
    </Grid>
  );
}
