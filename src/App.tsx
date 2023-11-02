import Header from './components/Header';
import Home from './components/Home'; // Fixed typo in 'components'
import { Container, Box } from '@mui/material';


function App() {



  return (
    <Box sx={{
      width: '100vw', // Adjusted the width to take the full viewport width
      height: '100vh',
      display: 'flex', // Center content using flexbox
      alignItems: 'center', // Center vertically
      justifyContent: 'center', // Center horizontally
      backgroundColor: 'primary.50', overflow: 'auto'
    }}>
      <Container maxWidth='md' sx={{
        width: '100%', height: '100%'

      }}

      >

        <Box sx={{ width: '100%', flex: 1 }}>
          <Header />
          <Home />
        </Box>
      </Container>
    </Box>

  );
}

export default App;
