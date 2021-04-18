import { Grid, GridItem } from "@chakra-ui/react";
import { CityBox } from "./CityBox";

export function CitiesGrid() {
  return (
    <Grid
      gap={["20px", "30px", "45px"]}
      templateColumns={["repeat(1, 1fr)", "repeat(4, 1fr)"]}
      align="center"
      marginTop={["20px", "40px"]}
    >
      <GridItem colSpan={1}>
        <CityBox />
      </GridItem>

      <GridItem colSpan={1}>
        <CityBox />
      </GridItem>

      <GridItem colSpan={1}>
        <CityBox />
      </GridItem>

      <GridItem colSpan={1}>
        <CityBox />
      </GridItem>

      <GridItem colSpan={1}>
        <CityBox />
      </GridItem>



    </Grid>
  );
}
