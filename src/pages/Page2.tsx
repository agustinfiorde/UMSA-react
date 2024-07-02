import { Box } from "@mui/material";
import { useRickAndMorty } from "../hooks/RickAndMortyContext";

const Page2: React.FC = () => {
  const { characters  } = useRickAndMorty();

  return (
    <Box>
      <Box>{JSON.stringify(characters, null, 2)}</Box>

    </Box>
  );
};

export default Page2;
