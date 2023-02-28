import { ChocolateList } from "./components/ChocolateList/ChocolateList";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Typography
        component="h3"
        variant="h3"
        align="center"
        color="text.primary"
        padding= "100px"
      >
        Welcome to our Chocolate Shop!
      </Typography>
      <ChocolateList />
    </ThemeProvider>
  ); 
}

export default App;
