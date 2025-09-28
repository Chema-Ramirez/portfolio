import { Box, Typography, Paper } from '@mui/material';
import {
    Timeline,
    TimelineItem,
    TimelineSeparator,
    TimelineConnector,
    TimelineContent,
    TimelineDot,
    TimelineOppositeContent,
} from '@mui/lab';

const Education = () => {
    return (
        <Box
            component="section"
            id="education"
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

            <Timeline position="alternate">
                {/* Timeline Item 1 */}
                <TimelineItem>
                    <TimelineOppositeContent
                        sx={{ color: '#cccccc' }}
                    >
                        2023 - Presente
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot
                            sx={{
                                background: 'linear-gradient(135deg, #fc00ff, #00dbde)',
                            }}
                        />
                        <TimelineConnector
                            sx={{
                                background: 'linear-gradient(135deg, #fc00ff, #00dbde)',
                            }}
                        />
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
                                    borderColor: '#fc00ff',
                                    boxShadow: '0px 0px 18px rgba(252, 0, 255, 0.3)',
                                },
                            }}
                        >
                            <Typography variant="h6" component="span" sx={{ fontWeight: 'bold' }}>
                                Empresa 1
                            </Typography>
                            <Typography>Frontend Developer</Typography>
                        </Paper>
                    </TimelineContent>
                </TimelineItem>

                {/* Timeline Item 2 */}
                <TimelineItem>
                    <TimelineOppositeContent
                        sx={{ color: '#cccccc' }}
                    >
                        2021 - 2023
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot
                            sx={{
                                background: 'linear-gradient(135deg, #fc00ff, #00dbde)',
                            }}
                        />
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
                                Empresa 2
                            </Typography>
                            <Typography>Web Developer</Typography>
                        </Paper>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>
        </Box>
    );
};

export default Education;
