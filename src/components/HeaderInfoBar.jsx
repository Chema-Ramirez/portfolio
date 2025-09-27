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
                width: '99%',
                backgroundColor: '#1976d2',
                color: '#fff',
                py: 0.5,
                px: 2,
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                justifyContent: 'space-between',
                alignItems: 'center',
                fontSize: '0.875rem',
                zIndex: 1000,
                textAlign: 'center',
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
                <PhoneIcon fontSize="small" sx={{ mr: 0.5 }} />
                +34 123 456 789
                <EmailIcon fontSize="small" sx={{ ml: 2, mr: 0.5 }} />
                tuemail@ejemplo.com
            </Typography>

            {!isMobile && (
                <Typography variant="body2">
                    Disponible para nuevos proyectos 🚀
                </Typography>
            )}
        </Box>
    );
};

export default HeaderInfoBar;
