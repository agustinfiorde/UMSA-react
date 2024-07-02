import { Box } from "@mui/material";
import { useRickAndMorty } from "../hooks/RickAndMortyContext";

const Page3: React.FC = () => {
  const { episodes, locations } = useRickAndMorty();

  return (
    <Box>
      <Box>{JSON.stringify(episodes, null, 2)}</Box>
      <Box>{JSON.stringify(locations, null, 2)}</Box>
    </Box>
  );
};

export default Page3;
