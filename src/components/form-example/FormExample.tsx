import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { fetchCharacters } from "../../services/example.service";

const FormExample: React.FC = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const characters = await fetchCharacters();
        console.log(characters);
      } catch (error) {
        console.error("Error fetching character data:", error);
      }
    };

    fetchData();
  }, []);
  const [nombre, setNombre] = useState("");
  const [nombreInputPassed] = useState(true);

  const [edad, setEdad] = useState("");
  const [ciudad, setCiudad] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("event:", event);
    console.log("Datos enviados:", { nombre, edad, ciudad });
    setNombre("");
    setEdad("");
    setCiudad("");
  };

  return (
    <Box sx={{ maxWidth: 400, margin: "auto", padding: 2 }}>
      <Typography variant="h5" gutterBottom>
        Formulario con Material-UI
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          id="nombre"
          label="Nombre"
          variant="outlined"
          value={nombre}
          onChange={(e) => {
            const valor = e.target.value;
            console.log("El valor al momento es de :" + valor);
            setNombre(valor);
          }}
          margin="normal"
          error={nombreInputPassed}
        />
        <TextField
          fullWidth
          id="edad"
          label="Edad"
          variant="outlined"
          type="number"
          value={edad}
          onChange={(e) => setEdad(e.target.value)}
          margin="normal"
        />
        <FormControl fullWidth variant="outlined" margin="normal">
          <InputLabel id="ciudad-label">Ciudad</InputLabel>
          <Select
            labelId="ciudad-label"
            id="ciudad"
            value={ciudad}
            onChange={(e) => setCiudad(e.target.value as string)}
            label="Ciudad"
          >
            <MenuItem value="">
              <em>Seleccionar ciudad</em>
            </MenuItem>
            <MenuItem value="New York">New York</MenuItem>
            <MenuItem value="Los Angeles">Los Angeles</MenuItem>
            <MenuItem value="Chicago">Chicago</MenuItem>
            <MenuItem value="Houston">Houston</MenuItem>
          </Select>
        </FormControl>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          disabled={nombreInputPassed}
        >
          Enviar
        </Button>
      </form>
    </Box>
  );
};

export default FormExample;
