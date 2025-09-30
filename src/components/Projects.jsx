import { Box, Typography, Grid } from '@mui/material';
import ProjectCard from './cards/ProjectCard';

const projects = [
    {
        title: 'Proyecto VirtualStore',
        description: 'Proyecto Final Bootcamp: Node.js, React.js, MongoDB, JavaScript, JWT, Bcrypt y Postman',
        linkGithub: 'https://github.com/tuusuario/proyecto1',
        linkLinkedin: 'https://linkedin.com/posts/tuusuario/proyecto1',
        thumbnail: 'projects/virtual.PNG',
    },
    {
        title: 'Proyecto HTML, CSS y JS',
        description: 'HTML5, CSS3 JavaScript moderno y ES2024; Flexbox y CSS Grid Layout; Animaciones, transiciones y diseño avanzado.',
        linkGithub: 'https://github.com',
        linkLinkedin: 'https://linkedin.com/posts/tuusuario/proyecto2',
        thumbnail: '/projects/html-css-js.PNG',
    },
    {
        title: 'Proyecto API POKEMON',
        description: 'HTML5 & CSS3, JavaScript, PokéAPI, Aspecto visual y diseño; Búsqueda avanzada; Vista detallada; Interfaz amigable.',
        linkGithub: 'https://github.com/tuusuario/proyecto3',
        linkLinkedin: 'https://linkedin.com/posts/tuusuario/proyecto3',
        thumbnail: 'projects/pokemon.PNG',
    },
];

const Projects = () => {
    return (
        <Box
            component="section"
            id="PROYECTOS"
            sx={{
                py: 6,
                px: 2,
                width: '90%',
                maxWidth: 1200,
                mx: 'auto',
                mt: 8,
            }}
        >
            <Typography
                variant="h4"
                component="h2"
                align="center"
                gutterBottom
                sx={{
                    background: 'linear-gradient(65deg, #00dbde, #fc00ff)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    fontWeight: 'bold',
                }}
                marginBottom={8}
                marginTop={-6}
            >
                Proyectos
            </Typography>

            <Grid container spacing={6} justifyContent="center">
                {projects.map((project, index) => (
                    <Grid
                        item
                        key={index}
                        xs={12}
                        sm={6}
                        md={4}
                        lg={3}
                        sx={{ display: 'flex', justifyContent: 'center' }}
                    >
                        <ProjectCard
                            title={project.title}
                            description={project.description}
                            linkGithub={project.linkGithub}
                            linkLinkedin={project.linkLinkedin}
                            thumbnail={project.thumbnail}
                        />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};


export default Projects;
