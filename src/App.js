import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import Header from "./components/Header/Header";

function App() {

  const [selectedProperty, setSelectedProperty] = useState(null);

  const handlePropertyChange = propertyName => setSelectedProperty(propertyName);

  return (
    <div className="App">
      <Header onPropertyChange={handlePropertyChange} />
      <Box sx={{ justifyContent: "center", display: "flex" }}>
        {selectedProperty}
      </Box>
    </div>
  );
}

export default App;
