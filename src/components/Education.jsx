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
                mt: 3,
                py: 4,
                px: 3,
                backgroundColor: '#f5f5f5',
                borderRadius: '16px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                width: '97,5%',
            }}
        >
            <Typography variant="h4" component="h2" gutterBottom align="center">
                Educación
            </Typography>

            <Timeline position="alternate">
                <TimelineItem>
                    <TimelineOppositeContent color="text.secondary">
                        2023 - Presente
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot color="primary" />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Paper elevation={3} sx={{ p: 2 }}>
                            <Typography variant="h6" component="span">
                                Empresa 1
                            </Typography>
                            <Typography>Frontend Developer</Typography>
                        </Paper>
                    </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                    <TimelineOppositeContent color="text.secondary">
                        2021 - 2023
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot color="primary" />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Paper elevation={3} sx={{ p: 2 }}>
                            <Typography variant="h6" component="span">
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
