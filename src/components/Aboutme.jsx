import { Box, Grid, Avatar, Typography, useMediaQuery, useTheme } from '@mui/material';

const AboutMe = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box
            component="section"
            id="aboutme"
            sx={{
                py: 2,
                px: 3,
                backgroundColor: '#f5f5f5',
                minHeight: '50vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '16px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            }}
        >
            <Typography variant="h4" component="h2" align="center" gutterBottom>
                Sobre mí
            </Typography>

            <Grid
                container
                spacing={2}
                sx={{
                    mt: 4,
                    maxWidth: 900,
                    flexDirection: isSmallScreen ? 'column' : 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Grid item xs={12} md={4}>
                    <Typography>
                        Información izquierda (o arriba en móvil).
                    </Typography>
                </Grid>

                <Grid item xs={12} md={4} sx={{ textAlign: 'center' }}>
                    <Avatar
                        alt="Tu nombre"
                        src="/Fondo1.jpg"
                        sx={{ width: 200, height: 200, border: '4px solid #1976d2', margin: '0 auto' }}
                    />
                </Grid>

                <Grid item xs={12} md={4}>
                    <Typography>
                        Información derecha (o abajo en móvil).
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
};

export default AboutMe;
