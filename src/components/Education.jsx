import { Box, Typography, Paper } from '@mui/material';
import {
    Timeline,
    TimelineItem,
    TimelineSeparator,
    TimelineContent,
    TimelineDot,
    TimelineOppositeContent,
} from '@mui/lab';

const timelineData = [
    {
        fecha: 'JULIO 2025',
        titulo: 'NEOLAND',
        descripcion: 'CURSO ANGULAR FRAMEWORK (PRIMENG)',
    },
    {
        fecha: 'SEPTIEMBRE 2024 - FEBRERO 2025',
        titulo: 'NEOLAND',
        descripcion: 'BOOTCAMP NEOLAND WEBDEVELOPMENT',
    },
    {
        fecha: 'JUNIO 2024',
        titulo: 'UDEMY',
        descripcion: 'DESARROLLO WEB - FRONTEND DEVELOPER',
    },
    {
        fecha: 'ABRIL 2024',
        titulo: 'UDEMY',
        descripcion: 'UNIVERSIDAD HTML',
    },
];

const Education = () => {
    return (
        <Box
            component="section"
            id="EDUCACION"
            sx={{
                mt: 8,
                py: 6,
                px: 2,
                width: '90%',
                maxWidth: 900,
                mx: 'auto',
                background: 'linear-gradient(135deg, #0f0f0f, #1a1a1a)',
                borderRadius: '24px',
                boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.4)',
                marginBottom: '50px'
            }}
        >
            <Typography
                variant="h4"
                component="h2"
                gutterBottom
                align="center"
                sx={{
                    background: 'linear-gradient(90deg, #fc00ff, #00dbde)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    fontWeight: 'bold',
                    mb: 4,
                }}
            >
                Educación
            </Typography>

            {/* Timeline con línea personalizada */}
            <Timeline
                position="alternate"
                sx={{
                    position: 'relative',
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        bottom: 0,
                        left: '50%',
                        width: '2px',
                        background: 'linear-gradient(135deg, #fc00ff, #00dbde)',
                        transform: 'translateX(-50%)',
                    },
                }}
            >
                {timelineData.map((item, index) => (
                    <TimelineItem key={index} sx={{ mb: 6 }}>
                        <TimelineOppositeContent sx={{ color: '#cccccc' }}>
                            {item.fecha}
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot
                                sx={{
                                    background: 'linear-gradient(135deg, #fc00ff, #00dbde)',
                                }}
                            />
                            {/* No TimelineConnector */}
                        </TimelineSeparator>
                        <TimelineContent>
                            <Paper
                                elevation={6}
                                sx={{
                                    p: 2,
                                    background: 'rgba(20, 20, 20, 0.9)',
                                    border: '2px solid transparent',
                                    borderRadius: '12px',
                                    transition: 'all 0.3s ease',
                                    color: '#ffffff',
                                    '&:hover': {
                                        transform: 'scale(1.03)',
                                        borderColor: '#00dbde',
                                        boxShadow: '0px 0px 18px rgba(0, 219, 222, 0.3)',
                                    },
                                }}
                            >
                                <Typography variant="h6" component="span" sx={{ fontWeight: 'bold' }}>
                                    {item.titulo}
                                </Typography>
                                <Typography>{item.descripcion}</Typography>
                            </Paper>
                        </TimelineContent>
                    </TimelineItem>
                ))}
            </Timeline>
        </Box>
    );
};

export default Education;
