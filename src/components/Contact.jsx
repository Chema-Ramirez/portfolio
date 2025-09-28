import {
    Box,
    Typography,
    TextField,
    Button,
    Grid,
    useTheme,
    useMediaQuery,
} from '@mui/material';
import { useState } from 'react';

const Contact = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Datos del formulario:', formData);

        setFormData({
            name: '',
            email: '',
            message: '',
        });
    };

    return (
        <Box
            component="section"
            id="contact"
            sx={{
                py: 6,
                px: 3,
                background: 'linear-gradient(135deg, #0f0f0f, #1a1a1a)',
                color: '#ffffff',
                minHeight: '25vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                borderTopLeftRadius: '32px',
                borderTopRightRadius: '32px',
                boxShadow: '0 -4px 20px rgba(0,0,0,0.3)',
                width: '90%',
                maxWidth: 1400,
                mx: 'auto',

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
                Contáctame
            </Typography>

            <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{ mt: 4, width: '100%' }}
            >
                <Grid container spacing={3} justifyContent="center">
                    {/* Nombre */}
                    <Grid item xs={12} sm={10} md={6}>
                        <TextField
                            fullWidth
                            label="Nombre"
                            name="name"
                            variant="outlined"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            InputLabelProps={{ style: { color: '#cccccc' } }}
                            InputProps={{ style: { color: '#ffffff' } }}
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': {
                                        borderColor: '#00dbde',
                                    },
                                    '&:hover fieldset': {
                                        borderColor: '#fc00ff',
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: '#fc00ff',
                                    },
                                },
                            }}
                        />
                    </Grid>

                    {/* Correo */}
                    <Grid item xs={12} sm={10} md={6}>
                        <TextField
                            fullWidth
                            label="Correo electrónico"
                            name="email"
                            type="email"
                            variant="outlined"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            InputLabelProps={{ style: { color: '#cccccc' } }}
                            InputProps={{ style: { color: '#ffffff' } }}
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': {
                                        borderColor: '#00dbde',
                                    },
                                    '&:hover fieldset': {
                                        borderColor: '#fc00ff',
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: '#fc00ff',
                                    },
                                },
                            }}
                        />
                    </Grid>

                    {/* Mensaje */}
                    <Grid item xs={12} sm={10}>
                        <TextField
                            fullWidth
                            label="Mensaje"
                            name="message"
                            multiline
                            rows={5}
                            variant="outlined"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            InputLabelProps={{ style: { color: '#cccccc' } }}
                            InputProps={{ style: { color: '#ffffff' } }}
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': {
                                        borderColor: '#00dbde',
                                    },
                                    '&:hover fieldset': {
                                        borderColor: '#fc00ff',
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: '#fc00ff',
                                    },
                                },
                            }}
                        />
                    </Grid>

                    {/* Botón */}
                    <Grid item xs={12} sm={10} textAlign={isSmallScreen ? 'center' : 'right'}>
                        <Button
                            type="submit"
                            variant="contained"
                            sx={{
                                mt: 2,
                                px: 4,
                                py: 1,
                                background: 'linear-gradient(45deg, #fc00ff, #00dbde)',
                                color: '#ffffff',
                                fontWeight: 'bold',
                                textTransform: 'none',
                                borderRadius: '8px',
                                boxShadow: '0px 0px 12px rgba(252, 0, 255, 0.3)',
                                transition: '0.3s',
                                '&:hover': {
                                    background: 'linear-gradient(45deg, #00dbde, #fc00ff)',
                                    boxShadow: '0px 0px 16px rgba(0, 219, 222, 0.4)',
                                },
                            }}
                        >
                            Enviar mensaje
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default Contact;
