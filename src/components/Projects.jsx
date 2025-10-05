import { Box, Typography, Grid } from '@mui/material';
import ProjectCard from './cards/ProjectCard';

const projects = [
    {
        title: 'Proyecto VirtualStore',
        description:
            'Proyecto Final Bootcamp: Node.js, React.js, MongoDB, JavaScript, JWT, Bcrypt y Postman',
        linkGithub: 'https://github.com/Chema-Ramirez/Proyecto-VirtualStore',
        linkLinkedin: 'https://www.linkedin.com/in/jose-mar%C3%ADa-ramirez-336a3b248/',
        thumbnail: 'projects/virtual.PNG',
    },
    {
        title: 'Proyecto HTML, CSS y JS',
        description:
            'HTML5, CSS3 JavaScript moderno y ES2024; Flexbox y CSS Grid Layout; Animaciones, transiciones y diseño avanzado.',
        linkGithub: 'https://github.com/Chema-Ramirez/html-css-js-practice',
        linkLinkedin: 'https://www.linkedin.com/posts/jose-mar%C3%ADa-ramirez-336a3b248_desarrolloweb-frontend-html5-activity-7332844973731508224-tHA3?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD1gtxoBbkEWjDGIWa4rklwEzc4WMPebQtQ',
        thumbnail: '/projects/html-css-js.PNG',
    },
    {
        title: 'Proyecto API POKEMON',
        description:
            'HTML5 & CSS3, JavaScript, PokéAPI, Aspecto visual y diseño; Búsqueda avanzada; Vista detallada; Interfaz amigable.',
        linkGithub: 'https://github.com/Chema-Ramirez/Pokedex-PokeProyecto',
        linkLinkedin: 'https://www.linkedin.com/posts/jose-mar%C3%ADa-ramirez-336a3b248_hace-aproximadamente-1-mes-que-finalic%C3%A9-mi-activity-7312922382929686528-K7WC?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD1gtxoBbkEWjDGIWa4rklwEzc4WMPebQtQ',
        thumbnail: 'projects/pokemon.PNG',
    },
];

const Projects = () => {
    return (
        <Box
            component="section"
            id="PROYECTOS"
            sx={{
                py: { xs: 4, sm: 6, md: 8 },
                px: { xs: 2, sm: 0, md: 4 },
                width: '100%',
                maxWidth: 1300,
                mx: 'auto',
                mt: { xs: 6, sm: 8, md: 10 },
                overflowX: 'hidden',
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
                    fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                }}
                marginBottom={8}
                marginTop={{ xs: -4, sm: -6 }}
            >
                Proyectos
            </Typography>

            <Grid container spacing={{ xs: 12, sm: 10, md: 6 }} justifyContent="center">
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
