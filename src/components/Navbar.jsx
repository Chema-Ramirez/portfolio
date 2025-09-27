// src/components/Navbar.jsx
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import CloseIcon from '@mui/icons-material/Close';


const sections = [
    { id: 'about', label: 'Sobre mí' },
    { id: 'education', label: 'Educación' },
    { id: 'projects', label: 'Proyectos' },
    { id: 'contact', label: 'Contacto' },
];

const Navbar = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [drawerOpen, setDrawerOpen] = React.useState(false);

    const handleScroll = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
        setDrawerOpen(false);
    };

    return (
        <AppBar
            position="fixed"
            color="primary"
            elevation={2}
            sx={{ top: '32px', zIndex: 1200 }}
        >
            <Toolbar sx={{ justifyContent: 'space-between' }}>
                <Typography
                    variant="h6"
                    sx={{ cursor: 'pointer' }}
                    onClick={() => handleScroll('about')}
                >
                    Mi Portfolio
                </Typography>


                {isMobile ? (
                    <>
                        <IconButton
                            edge="end"
                            color="inherit"
                            onClick={() => setDrawerOpen(true)}
                            aria-label="menu"
                            size="large"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Drawer
                            anchor="right"
                            open={drawerOpen}
                            onClose={() => setDrawerOpen(false)}
                            slotProps={{
                                paper: {
                                    sx: {
                                        zIndex: 1400,
                                    },
                                },
                            }}
                        >
                            <Box
                                sx={{ width: 250 }}
                                role="presentation"
                            >
                                {/* Nueva sección: botón de cerrar */}
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2 }}>
                                    <Typography variant="h6">Navegación</Typography>
                                    <IconButton onClick={() => setDrawerOpen(false)} aria-label="Cerrar">
                                        <CloseIcon />
                                    </IconButton>
                                </Box>

                                <Divider />

                                {/* Lista de secciones */}
                                <List>
                                    {sections.map((section) => (
                                        <ListItem
                                            button
                                            key={section.id}
                                            onClick={() => handleScroll(section.id)}
                                        >
                                            <ListItemText primary={section.label} />
                                        </ListItem>
                                    ))}
                                </List>
                            </Box>
                        </Drawer>

                    </>
                ) : (
                    <Box>
                        {sections.map((section) => (
                            <Button
                                key={section.id}
                                color="inherit"
                                onClick={() => handleScroll(section.id)}
                            >
                                {section.label}
                            </Button>
                        ))}
                    </Box>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
