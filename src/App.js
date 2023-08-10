import { ThemeProvider } from "@mui/material";
import Homepage from "./Pages/Homepage";
import { theme } from "./theme";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Recipe from "./Pages/Recipe";


function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />}/>
          <Route path='/recipe' element={<Recipe />}/>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
