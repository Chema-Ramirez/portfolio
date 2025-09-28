import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const HeaderInfoBar = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box
            sx={{
                position: 'fixed',
                top: 0,
                left: '50%',
                transform: 'translateX(-50%)',
                width: { xs: '95%', sm: '99%', md: '99%' },
                backgroundColor: '#3C3C3C',
                color: '#fff',
                py: 0.8,
                px: 2,
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                justifyContent: 'space-between',
                alignItems: 'center',
                fontSize: '0.875rem',
                zIndex: 1200,
                textAlign: 'center',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
                gap: { xs: 0.5, sm: 0 },
            }}
        >
            <Typography
                variant="body2"
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                }}
            >
                <PhoneIcon fontSize="small" sx={{ mr: 0.5, color: 'rgba(255, 204, 0, 1)' }} />
                +34 123 456 789
                <EmailIcon fontSize="small" sx={{ ml: 2, mr: 0.5, color: 'rgba(255, 204, 0, 1)' }} />
                tuemail@ejemplo.com
            </Typography>

            {!isMobile && (
                <Typography
                    variant="body2"
                    sx={{ color: 'rgba(255, 204, 0, 1)', fontWeight: 'bold' }}
                >
                    Disponible para nuevos proyectos 🚀
                </Typography>
            )}
        </Box>
    );
};

export default HeaderInfoBar;
