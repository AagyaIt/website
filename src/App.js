import './App.css';
import NavBar from './NavBar'
import { Container, createTheme, ThemeProvider } from '@mui/material';
import {grey, purple} from '@mui/material/colors'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Story from './components/Story';
import Services from './components/Services';
import Contact from './components/Contact';
const theme = createTheme({
  typography: {
    h1: {
     /* this will change the font size for h1, we can also do 
        it for others, */
      fontSize: "3rem",
    }
  },
  palette: {
    /* this is used to turn the background dark, but we have 
        to use Paper for this inOrder to use it. */
    type: "dark",
    primary: {
     // main: colorName[hue],
     // we have to import the color first to use it
      main: grey[100],
    },
    secondary: {
      main: purple[800],
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg">
        <BrowserRouter>
          <NavBar />
          <Switch>    
            <Route exact path='/' component={Home} />
            <Route path="/story" component={Story} />
            <Route path="/services" component={Services} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </BrowserRouter>
      </Container>
    </ThemeProvider>
  );
}

export default App;
