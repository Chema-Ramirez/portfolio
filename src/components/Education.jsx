import { Box, Typography, useTheme, useMediaQuery } from '@mui/material';

const timelineData = [
    {
        fecha: 'JULIO 2025',
        titulo: 'NEOLAND',
        descripcion: 'CURSO ANGULAR FRAMEWORK (PRIMENG)',
    },
    {
        fecha: 'SEPTIEMBRE 2024 - FEBRERO 2025',
        titulo: 'NEOLAND',
        descripcion: 'BOOTCAMP NEOLAND WEBDEVELOPMENT',
    },
    {
        fecha: 'JUNIO 2024',
        titulo: 'UDEMY',
        descripcion: 'DESARROLLO WEB - FRONTEND DEVELOPER',
    },
    {
        fecha: 'ABRIL 2024',
        titulo: 'UDEMY',
        descripcion: 'UNIVERSIDAD HTML',
    },
];

const Education = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box
            component="section"
            id="EDUCACION"
            sx={{
                mt: 8,
                py: 6,
                px: { xs: 2, sm: 4 },
                width: '100%',
                maxWidth: '900px',
                mx: 'auto',
                background: 'linear-gradient(135deg, #0f0f0f, #1a1a1a)',
                borderRadius: '24px',
                boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.4)',
                fontFamily: 'Poppins, sans-serif',
                boxSizing: 'border-box'
            }}
        >
            <Typography
                variant="h3"
                align="center"
                sx={{
                    background: 'linear-gradient(90deg, #fc00ff, #00dbde)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    fontWeight: 'bold',
                    mb: 8,
                    fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                }}
            >
                Educación
            </Typography>

            <Box sx={{ position: 'relative', width: '100%' }}>

                <Box
                    sx={{
                        position: 'absolute',
                        top: 0,
                        bottom: 0,
                        left: isSmallScreen ? '15px' : '50%',
                        width: '2px',
                        background: 'linear-gradient(180deg, #fc00ff, #00dbde)',
                        transform: isSmallScreen ? 'none' : 'translateX(-50%)',
                    }}
                />

                {timelineData.map((item, index) => {
                    const isEven = index % 2 === 0;

                    return (
                        <Box
                            key={index}
                            sx={{
                                display: 'flex',
                                width: '100%',
                                justifyContent: isSmallScreen
                                    ? 'flex-start'
                                    : isEven ? 'flex-start' : 'flex-end',
                                alignItems: 'center',
                                mb: 6,
                                position: 'relative'
                            }}
                        >
                            <Box
                                sx={{
                                    position: 'absolute',
                                    top: '50%',
                                    left: isSmallScreen ? '15px' : '50%',
                                    transform: 'translate(-50%, -50%)',
                                    width: '14px',
                                    height: '14px',
                                    borderRadius: '50%',
                                    background: 'linear-gradient(135deg, #fc00ff, #00dbde)',
                                    border: '2px solid #fff',
                                    zIndex: 2,
                                }}
                            />

                            <Box
                                sx={{
                                    width: { xs: 'calc(100% - 40px)', sm: '44%' },
                                    ml: isSmallScreen ? '40px' : 0,
                                    background: 'rgba(20, 20, 20, 0.9)',
                                    border: '1px solid #333',
                                    borderRadius: '12px',
                                    p: 2.5,
                                    boxShadow: '0px 0px 12px rgba(0,219,222,0.1)',
                                    transition: 'all 0.3s ease',
                                    boxSizing: 'border-box',
                                    '&:hover': {
                                        transform: 'scale(1.03)',
                                        borderColor: '#00dbde',
                                        boxShadow: '0px 0px 18px rgba(0, 219, 222, 0.3)',
                                    },
                                }}
                            >
                                <Typography
                                    variant="subtitle2"
                                    sx={{ color: '#00dbde', fontWeight: 'bold', mb: 0.5, letterSpacing: '1px' }}
                                >
                                    {item.fecha}
                                </Typography>
                                <Typography
                                    variant="h6"
                                    sx={{
                                        fontWeight: 'bold',
                                        fontSize: '1.1rem',
                                        color: '#fff',
                                    }}
                                >
                                    {item.titulo}
                                </Typography>
                                <Typography sx={{ mt: 1, fontSize: '0.9rem', color: '#bbb', lineHeight: 1.5 }}>
                                    {item.descripcion}
                                </Typography>
                            </Box>
                        </Box>
                    );
                })}
            </Box>
        </Box>
    );
};

export default Education;