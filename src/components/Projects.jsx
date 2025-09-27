import { Box, Typography, Grid, Card, CardContent, CardActions, Button } from '@mui/material';

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
                px: 3,
                backgroundColor: '#f5f5f5',
                borderRadius: '16px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                mt: 6,
            }}
        >
            <Typography variant="h4" component="h2" align="center" gutterBottom>
                Proyectos
            </Typography>

            <Grid container spacing={4} justifyContent="center">
                {projects.map((project, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                            <CardContent>
                                <Typography variant="h6" gutterBottom>
                                    {project.title}
                                </Typography>
                                <Typography variant="body2">{project.description}</Typography>
                            </CardContent>
                            <CardActions sx={{ mt: 'auto' }}>
                                <Button
                                    size="small"
                                    color="primary"
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Ver en GitHub
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Projects;
