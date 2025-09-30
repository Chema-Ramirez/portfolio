import { Box, Grid, Avatar, Typography, IconButton, useMediaQuery, useTheme } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DownloadIcon from '@mui/icons-material/Download';
import { useEffect, useState } from 'react';

const AboutMe = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setVisible(true), 300);
        return () => clearTimeout(timer);
    }, []);

    const circlesPositions = [
        { top: '5%', left: '105%' },
        { top: '40%', left: '120%' },
        { top: '75%', left: '105%' },
    ];

    const iconsData = [
        {
            name: 'GitHub',
            icon: <GitHubIcon sx={{ color: '#fff', fontSize: 32 }} />,
            link: 'https://github.com/Chema-Ramirez',
        },
        {
            name: 'LinkedIn',
            icon: <LinkedInIcon sx={{ color: '#ffffffff', fontSize: 32 }} />,
            link: 'https://www.linkedin.com/in/jose-mar%C3%ADa-ramirez-336a3b248/',
        },
        {
            name: 'Descargar CV',
            icon: <DownloadIcon sx={{ color: '#ffffffff', fontSize: 32 }} />,
            link: '/JOSE MARIA RAMIREZ QUIROS - CV.pdf',
            download: true,
        },
    ];

    return (
        <Box
            component="section"
            id="SOBRE MI"
            sx={{
                py: { xs: 4, sm: 6 },
                px: { xs: 3, sm: 4, md: 2 },
                background: 'linear-gradient(135deg, #1a1a1a, #000000)',
                color: '#ffffff',
                minHeight: '60vh',
                width: '93%',
                borderBottomLeftRadius: '32px',
                borderBottomRightRadius: '32px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                boxShadow: '0 8px 20px rgba(0, 0, 0, 0.5)',
                marginTop: '-60px',
            }}
        >
            <Typography
                variant="h3"
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

                {/* Texto dinámico a la izquierda */}
                <Box
                    sx={{
                        maxWidth: 450,
                        mx: isSmallScreen ? 'auto' : 0,
                        opacity: visible ? 1 : 0,
                        transform: visible ? 'translateY(0)' : 'translateY(20px)',
                        transition: 'all 0.8s ease',
                        pr: { md: 6 },
                        textAlign: isSmallScreen ? 'center' : 'left',
                    }}
                >
                    {/* Párrafo 1 */}
                    <Typography
                        variant="body1"
                        sx={{
                            color: '#cccccc',
                            fontFamily: 'Poppins, sans-serif',
                            fontSize: '1rem',
                            lineHeight: 1.8,
                        }}
                    >
                        Bienvenid@ a mi Portfolio web! Mi nombre es Chema. Me apasiona el{' '}
                        <Box component="span" sx={{
                            background: 'linear-gradient(45deg, #fc00ff, #00dbde)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            fontWeight: 'bold',
                        }}>
                            desarrollo web
                        </Box>{' '}
                        y busco oportunidades donde pueda seguir creciendo, aprender{' '}
                        <Box component="span" sx={{
                            background: 'linear-gradient(45deg, #00dbde, #fc00ff)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            fontWeight: 'bold',
                        }}>
                            nuevas tecnologías
                        </Box>{' '}
                        y aportar valor real a los proyectos en los que participo.
                    </Typography>

                    {/* Párrafo 2 */}
                    <Typography
                        variant="body1"
                        sx={{
                            color: '#cccccc',
                            fontFamily: 'Poppins, sans-serif',
                            fontSize: '1rem',
                            lineHeight: 1.8,
                            mt: 2,
                        }}
                    >
                        Estoy en constante búsqueda de{' '}
                        <Box component="span" sx={{ fontStyle: 'italic', fontWeight: 500 }}>
                            mejorar mis habilidades
                        </Box>{' '}
                        y adaptarme a los cambios del sector.
                    </Typography>

                    {/* Párrafo 3 */}
                    <Typography
                        variant="body1"
                        sx={{
                            color: '#cccccc',
                            fontFamily: 'Poppins, sans-serif',
                            fontSize: '1rem',
                            lineHeight: 1.8,
                            mt: 2,
                        }}
                    >
                        Disfruto enfrentar{' '}
                        <Box component="span" sx={{
                            background: 'linear-gradient(45deg, #fc00ff, #00dbde)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            fontWeight: 'bold',
                        }}>
                            desafíos
                        </Box>{' '}
                        que me impulsen a dar lo mejor de mí como profesional y como parte de un equipo.
                    </Typography>
                </Box>


                {/* Imagen central */}
                <Grid
                    item
                    xs={12}
                    md={4}
                    sx={{
                        position: 'relative',
                        width: 410,
                        height: 410,
                        mx: 'auto',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transform: visible ? 'scale(1)' : 'scale(0.8)',
                        opacity: visible ? 1 : 0,
                        transition: 'opacity 1s ease, transform 1s ease',
                    }}
                >
                    {/* Círculo difuminado de fondo */}
                    <Box
                        sx={{
                            position: 'absolute',
                            width: 410,
                            height: 410,
                            borderRadius: '50%',
                            background: 'linear-gradient(135deg, #fc00ff, #00dbde)',
                            filter: 'blur(40px)',
                            opacity: 0.4,
                            zIndex: 0,
                        }}
                    />
                    {/* Avatar principal */}
                    <Avatar
                        alt="Tu nombre"
                        src="/Fondo3.png"
                        sx={{
                            width: 400,
                            height: 400,
                            border: '4px transparent #fff',
                            zIndex: 1,
                        }}
                    />

                    {/* Círculos con enlaces en forma de arco */}
                    {!isSmallScreen && iconsData.map((item, i) => (
                        <Box
                            key={item.name}
                            component="a"
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            download={item.download || false}
                            aria-label={item.name}
                            sx={{
                                position: 'absolute',
                                top: circlesPositions[i].top,
                                left: circlesPositions[i].left,
                                width: 70,
                                height: 70,
                                borderRadius: '50%',
                                background: 'linear-gradient(45deg, #fc00ff, #00dbde)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                boxShadow: '0 4px 10px rgba(252, 0, 255, 0.6)',
                                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                cursor: 'pointer',
                                transformOrigin: 'center',
                                '&:hover': {
                                    transform: 'scale(1.2)',
                                    boxShadow: '0 6px 20px rgba(252, 0, 255, 0.9)',
                                },
                            }}
                        >
                            {item.icon}
                        </Box>
                    ))}
                </Grid>

                {/* Columna derecha para móvil */}
                {isSmallScreen && (
                    <Grid item xs={12} sx={{ mt: 4, textAlign: 'center' }}>
                        {iconsData.map((item) => (
                            <Box
                                key={item.name}
                                component="a"
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                download={item.download || false}
                                aria-label={item.name}
                                sx={{
                                    display: 'inline-flex',
                                    width: 60,
                                    height: 60,
                                    borderRadius: '50%',
                                    background: 'linear-gradient(45deg, #fc00ff, #00dbde)',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    boxShadow: '0 4px 10px rgba(252, 0, 255, 0.6)',
                                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                    cursor: 'pointer',
                                    mr: 2,
                                    '&:hover': {
                                        transform: 'scale(1.2)',
                                        boxShadow: '0 6px 20px rgba(252, 0, 255, 0.9)',
                                    },
                                }}
                            >
                                {item.icon}
                            </Box>
                        ))}
                    </Grid>
                )}
            </Grid>
        </Box>
    );
};

export default AboutMe;