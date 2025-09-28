import { Box, Typography, Grid } from '@mui/material';
import ProjectCard from './cards/ProjectCard';

const projects = [
    {
        title: 'Proyecto 1',
        description: 'Descripción breve del proyecto.',
        link: 'https://github.com/tuusuario/proyecto1',
    },
    {
        title: 'Proyecto 2',
        description: 'Otro proyecto interesante.',
        link: 'https://github.com/tuusuario/proyecto2',
    },
    {
        title: 'Proyecto 3',
        description: 'Un tercer proyecto con funcionalidades.',
        link: 'https://github.com/tuusuario/proyecto3',
    },
];

const Projects = () => {
    return (
        <Box
            component="section"
            id="projects"
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
                sx={{ color: '#e81cff' }}
            >
                Proyectos
            </Typography>

            <Grid container spacing={4} justifyContent="center">
                {projects.map((project, index) => (
                    <Grid item key={index}>
                        <ProjectCard
                            title={project.title}
                            description={project.description}
                            link={project.link}
                        />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Projects;
