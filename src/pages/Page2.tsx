import { Box, Button } from "@mui/material";
import { useRickAndMorty } from "../hooks/RickAndMortyContext";

const Page2: React.FC = () => {
  const { characters, editData  } = useRickAndMorty();

  return (
    <Box>
      <Box>{JSON.stringify(characters, null, 2)}</Box>
      <Button onClick={() => editData()}>Toggle Active</Button>
    </Box>
  );
};

export default Page2;
