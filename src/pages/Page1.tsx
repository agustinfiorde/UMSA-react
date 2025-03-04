import { Box, Button } from "@mui/material";
import usePerro from "../hooks/usePerro";
import { useEffect } from "react";

const Page1: React.FC = () => {
  const { count, increment, isActive, toggleActive } = usePerro({
    initialCount: 192,
    initialIsActive: true,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      increment();
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box>
      {isActive ? <Box>{count}</Box> : null}
      <Button onClick={() => toggleActive()}>Toggle Active</Button>
    </Box>
  );
};

export default Page1;
