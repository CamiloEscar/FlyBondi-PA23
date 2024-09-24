// Importación de componentes y estilos
import { Container, Grid, Typography } from '@mui/material';
import './App.css';
import Search from './components/Search';
import { FlyProvider } from './context/FlyProvider';

function App() {
  return (
    // Proveedor del contexto de vuelo
    <FlyProvider>
      {/* Contenedor principal */}
      <Container className='container'>
        {/* Encabezado */}
        <header>
          <Typography align='center' marginY={5} component="h1" variant='h3'>
            Buscador de vuelos
          </Typography>
        </header>

        {/* Cuadrícula */}
        <Grid>
          {/* Elemento de cuadrícula para la imagen y la búsqueda */}
          <Grid item xs={10} md={6} lg={4}>
            {/* Imagen del logotipo de FlyBondi */}
            <img className='flight-image' src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Flybondi_logo_simple.svg/320px-Flybondi_logo_simple.svg.png" alt="FlyBondi Logo" />
            {/* Componente de búsqueda */}
            <Search />
          </Grid>
        </Grid>
      </Container>
    </FlyProvider>
  );
}

export default App;

