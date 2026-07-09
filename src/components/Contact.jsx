import { Box, Typography } from '@mui/material';
import DetailsBar from '../components/contactBar/DetailBar';
import InputSide from '../components/contactBar/InputSide';

const Contact = () => {

  return (
    <Box
      component="section"
      id="CONTACTO"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: { xs: '40px 15px', sm: '50px 20px' },
        color: '#ffffff',
        fontFamily: 'Poppins, sans-serif',
        width: '100%',
        maxWidth: '1200px',
        mx: 'auto'
      }}
    >
      <Box sx={{ textAlign: 'center', marginBottom: '40px' }}>
        <Typography
          variant="h3"
          component="h2"
          sx={{
            fontSize: { xs: '28px', sm: '36px' },
            background: 'linear-gradient(45deg, #fc00ff, #00dbde)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontWeight: 'bold',
          }}
        >
          Contáctame
        </Typography>
        <Typography
          variant="body1"
          component="p"
          sx={{
            color: '#cccccc',
            fontSize: '16px',
            maxWidth: '600px',
            margin: '10px auto 0',
          }}
        >
          ¿Tienes alguna pregunta o comentario? ¡Escríbeme un mensaje!
        </Typography>
      </Box>

      <Box
        sx={{
          display: 'flex',
          gap: { xs: '20px', md: '40px' },
          width: '100%',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'stretch',
        }}
      >
        <Box sx={{ flex: 1 }}>
          <DetailsBar />
        </Box>
        <Box sx={{ flex: 2 }}>
          <InputSide />
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;