import { Box, Typography, Link, Stack } from '@mui/material';

const Footer = () => {
    return (
        <Box
            component="footer"
            id="contact"
            sx={{
                mt: 6,
                py: 4,
                px: 3,
                backgroundColor: '#f5f5f5',
                borderRadius: '16px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                textAlign: 'center',
            }}
        >
            <Typography variant="body1" gutterBottom>
                Contacto: <Link href="mailto:tuemail@ejemplo.com">tuemail@ejemplo.com</Link>
            </Typography>

            <Stack
                direction="row"
                spacing={3}
                justifyContent="center"
                sx={{ mt: 2, flexWrap: 'wrap' }}
            >
                <Link href="https://github.com/tuusuario" target="_blank" rel="noopener noreferrer">
                    GitHub
                </Link>
                <Link href="https://linkedin.com/in/tuusuario" target="_blank" rel="noopener noreferrer">
                    LinkedIn
                </Link>
            </Stack>

            <Typography variant="caption" display="block" sx={{ mt: 3 }}>
                &copy; {new Date().getFullYear()} Nombre. Todos los derechos reservados.
            </Typography>
        </Box>
    );
};

export default Footer;
