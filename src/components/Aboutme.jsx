import {
    Box,
    Grid,
    Avatar,
    Typography,
    useMediaQuery,
    useTheme
} from '@mui/material';

const AboutMe = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box
            component="section"
            id="aboutme"
            sx={{
                py: { xs: 4, sm: 6 },
                px: { xs: 3, sm: 4, md: 8 },
                background: 'linear-gradient(135deg, #1a1a1a, #000000)',
                color: '#ffffff',
                minHeight: '70vh',
                width: '100%',
                borderBottomLeftRadius: '32px',
                borderBottomRightRadius: '32px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                boxShadow: '0 8px 20px rgba(0, 0, 0, 0.5)',
                marginTop: '-30px',
            }}
        >
            <Typography
                variant="h4"
                component="h2"
                align="center"
                gutterBottom
                sx={{
                    background: 'linear-gradient(45deg, #fc00ff, #00dbde)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    fontWeight: 'bold',
                }}
            >
                Sobre mí
            </Typography>

            <Grid
                container
                spacing={5}
                sx={{
                    mt: 2,
                    flexDirection: isSmallScreen ? 'column' : 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                }}
            >
                <Grid item xs={12} md={4}>
                    <Typography
                        variant="body1"
                        sx={{
                            color: '#cccccc',
                            textAlign: isSmallScreen ? 'center' : 'right',
                        }}
                    >
                        Información izquierda (o arriba en móvil).
                    </Typography>
                </Grid>

                <Grid item xs={12} md={4} sx={{ textAlign: 'center' }}>
                    <Box
                        sx={{
                            width: 410,
                            height: 410,
                            borderRadius: '50%',
                            background: 'linear-gradient(135deg, #fc00ff, #00dbde)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            mx: 'auto',
                            p: '4px',
                            boxShadow: '0 0 20px rgba(252, 0, 255, 0.3)',
                        }}
                    >
                        <Avatar
                            alt="Tu nombre"
                            src="/Fondo3.png"
                            sx={{
                                width: 400,
                                height: 400,
                                border: '4px solid #fff',
                            }}
                        />
                    </Box>
                </Grid>

                <Grid item xs={12} md={4}>
                    <Typography
                        variant="body1"
                        sx={{
                            color: '#cccccc',
                            textAlign: isSmallScreen ? 'center' : 'left',
                        }}
                    >
                        Información derecha (o abajo en móvil).
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
};

export default AboutMe;
