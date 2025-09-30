import { useState } from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Stack,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Box,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link as ScrollLink } from 'react-scroll';

const navItems = ['SOBRE MI', 'PROYECTOS', 'EDUCACION', 'CONTACTO'];


const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

    const drawer = (
        <Box
            sx={{
                width: 250,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                p: 1,
                backgroundColor: '#1a1a1a',
            }}
        >
            <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                <IconButton
                    onClick={handleDrawerToggle}
                    sx={{ color: 'white' }}
                    aria-label="Cerrar menú"
                >
                    <CloseIcon />
                </IconButton>
            </Box>

            <Typography
                variant="h6"
                sx={{
                    my: 2,
                    textAlign: 'center',
                    background: 'linear-gradient(45deg, #fc00ff, #00dbde)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    fontWeight: 'bold',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 1,
                }}
            >
                Mi Portfolio
            </Typography>


            <List>
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                        <ScrollLink
                            to={item}
                            smooth={true}
                            duration={500}
                            offset={-70}
                            onClick={handleDrawerToggle}
                        >
                            <ListItemButton
                                sx={{
                                    textAlign: 'center',
                                    color: '#ffffff',
                                    '&:hover': {
                                        backgroundColor: '#2a2a2a',
                                    },
                                }}
                            >
                                <ListItemText
                                    primary={
                                        item.charAt(0).toUpperCase() + item.slice(1)
                                    }
                                />
                            </ListItemButton>
                        </ScrollLink>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <>
            <AppBar
                component="nav"
                position="fixed"
                sx={{
                    backgroundColor: '#000000',
                    boxShadow: '0 4px 20px #00000033',
                    backdropFilter: 'blur(6px)',
                    zIndex: 1000,
                }}
            >
                <Toolbar
                    sx={{
                        justifyContent: 'space-between',
                        px: { xs: 2, sm: 3, md: 6 },
                        maxWidth: '1200px',
                        margin: '0 auto',
                        width: '100%',
                    }}
                >
                    <IconButton
                        color="inherit"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{
                            display: { md: 'none' },
                            mr: 1,
                        }}
                    >
                        <MenuIcon />
                    </IconButton>

                    <Typography
                        variant="h6"
                        sx={{
                            background: 'linear-gradient(45deg, #fc00ff, #00dbde)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            fontWeight: 'bold',
                            flexGrow: 1,
                            display: 'flex',
                            alignItems: 'center',
                            gap: 3,
                        }}
                    >
                        <Box
                            component="img"
                            src="/logo-navbar.png"
                            alt="Portfolio Icon"
                            sx={{
                                width: 50,
                                height: 50,
                                borderRadius: '50%',
                                objectFit: 'cover',
                            }}
                        />
                        Mi Portfolio
                    </Typography>


                    <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                        <Stack direction="row" spacing={2}>
                            {navItems.map((section) => (
                                <ScrollLink
                                    key={section}
                                    to={section}
                                    smooth={true}
                                    duration={500}
                                    offset={-70}
                                >
                                    <Button
                                        sx={{
                                            position: 'relative',
                                            color: '#ffffff',
                                            textTransform: 'none',
                                            fontWeight: 'bold',
                                            px: 1.5,
                                            overflow: 'hidden',
                                            transition: 'all 0.3s ease',

                                            '&::before': {
                                                content: '""',
                                                position: 'absolute',
                                                bottom: 0,
                                                left: 0,
                                                width: 0,
                                                height: '2px',
                                                background:
                                                    'linear-gradient(90deg, #fc00ff, #00dbde)',
                                                transition: 'width 0.3s ease',
                                            },

                                            '&:hover': {
                                                background: 'none',
                                                backgroundImage:
                                                    'linear-gradient(45deg, #fc00ff, #00dbde)',
                                                WebkitBackgroundClip: 'text',
                                                WebkitTextFillColor: 'transparent',
                                            },

                                            '&:hover::before': {
                                                width: '100%',
                                            },
                                        }}
                                    >
                                        {section.charAt(0).toUpperCase() + section.slice(1)}
                                    </Button>
                                </ScrollLink>
                            ))}
                        </Stack>
                    </Box>
                </Toolbar>
            </AppBar>

            <Drawer
                anchor="right"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{ keepMounted: true }}
                sx={{
                    display: { xs: 'block', md: 'none' },
                    '& .MuiDrawer-paper': {
                        boxSizing: 'border-box',
                        width: 250,
                        backgroundColor: '#1a1a1a',
                        color: '#fff',
                    },
                }}
            >
                {drawer}
            </Drawer>
        </>
    );
};


export default Navbar;
