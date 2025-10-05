import { Box, Typography, Link, Stack } from '@mui/material';

const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                mt: 6,
                py: 4,
                px: 3,
                background: 'linear-gradient(135deg, #000000, #1a1a1a)',
                color: '#ffffff',
                borderTopLeftRadius: '32px',
                borderTopRightRadius: '32px',
                textAlign: 'center',
                width: '85%',
                maxWidth: 1800,
                mx: 'auto',
                boxShadow: '0 -4px 20px rgba(0,0,0,0.5)',
            }}
        >
            <Typography variant="body1" gutterBottom>
                Contacto:{' '}
                <Link
                    href="mailto:josemaria.ramirez.dev@gmail.com"
                    underline="hover"
                    sx={{
                        background: 'linear-gradient(45deg, #fc00ff, #00dbde)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        fontWeight: 'bold',
                        transition: '0.3s',
                        '&:hover': {
                            opacity: 0.8,
                        },
                    }}
                >
                    Josemaria.ramirez.dev@gmail.com
                </Link>
            </Typography>

            <Stack
                direction="row"
                spacing={4}
                justifyContent="center"
                sx={{ mt: 6, flexWrap: 'wrap' }}
            >
                <Link
                    href="https://github.com/Chema-Ramirez"
                    target="_blank"
                    rel="noopener noreferrer"
                    underline="hover"
                    sx={{
                        background: 'linear-gradient(45deg, #fc00ff, #00dbde)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        fontWeight: 'bold',
                        transition: '0.3s',
                        '&:hover': {
                            opacity: 0.8,
                        },
                    }}
                >
                    GitHub
                </Link>
                <Link
                    href="https://www.linkedin.com/in/jose-mar%C3%ADa-ramirez-336a3b248/"
                    target="_blank"
                    rel="noopener noreferrer"
                    underline="hover"
                    sx={{
                        background: 'linear-gradient(45deg, #fc00ff, #00dbde)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        fontWeight: 'bold',
                        transition: '0.3s',
                        '&:hover': {
                            opacity: 0.8,
                        },
                    }}
                >
                    LinkedIn
                </Link>
            </Stack>

            <Typography
                variant="caption"
                display="block"
                sx={{
                    mt: 4,
                    color: '#888888',
                }}
            >
                &copy; {new Date().getFullYear()} Chema Ramirez (2025). Todos los derechos reservados.
            </Typography>
        </Box>
    );
};

export default Footer;
