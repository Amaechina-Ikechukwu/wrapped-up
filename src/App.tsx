import Header from './components/Header';
import Home from './components/Home'; // Fixed typo in 'components'
import { Container, Box } from '@mui/material';


function App() {
  const containerStyle = {
    position: 'relative',
    width: '100%',
    height: '100vh',
    overflow: 'hidden',
  };

  const circleStyle = {
    position: 'absolute',
    width: '250px', // Adjust the circle size as needed
    height: '250px',
    backgroundColor: 'secondary.green', // Blurred white circle
    borderRadius: '50%',
    filter: 'blur(50px)', // Adjust the blur amount as needed
  };
  return (
    <Box sx={{
      width: '100vw', // Adjusted the width to take the full viewport width
      height: '100vh',
      display: 'flex', // Center content using flexbox
      alignItems: 'center', // Center vertically
      justifyContent: 'center', // Center horizontally
      backgroundColor: 'secondary.background', overflow: 'auto'
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
