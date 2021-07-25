import "./App.css";
import {
  AppBar,
  Toolbar,
  Typography,
  CssBaseline,
  Container,
  Grid,
} from "@material-ui/core";
import { ProductView } from "./components/ProductView";
import { ProductOperations } from "./components/ProductOperations";


function App() {

  return (
    <div className="App">
      <CssBaseline />

      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h4">Shopvy</Typography>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" >
        <Grid container direction="row">
          <Grid item style={{ width: "20%"}}>
            <ProductOperations />
          </Grid>
          <Grid item style={{ width: "70%" }}>
            <ProductView />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
