import { Box } from '@mui/material';

const languages = [
    { name: 'JavaScript', icon: '/public/js.png' },
    { name: 'TypeScript', icon: '/public/ts.png' },
    { name: 'MongoDB', icon: '/public/mongo.png' },
    { name: 'Github', icon: '/public/github.png' },
    { name: 'Angular', icon: '/public/angular.png' },
    { name: 'HTML', icon: '/public/html-5.png' },
    { name: 'CSS', icon: '/public/css-3.png' },
    { name: 'Node.js', icon: '/public/nodejs.png' },
    { name: 'React', icon: '/public/react.png' },
    { name: 'VueJS', icon: '/public/vue.png' },
    { name: 'Tailwind', icon: '/public/tailwind.png' },
    { name: 'MaterialUI', icon: '/public/mui.png' },
    { name: 'VisualStudioCode', icon: '/public/vscode.png' },
    { name: 'JavaScript', icon: '/public/js.png' },
    { name: 'TypeScript', icon: '/public/ts.png' },
    { name: 'MongoDB', icon: '/public/mongo.png' },
    { name: 'Github', icon: '/public/github.png' },
    { name: 'Angular', icon: '/public/angular.png' },
    { name: 'HTML', icon: '/public/html-5.png' },
    { name: 'CSS', icon: '/public/css-3.png' },
    { name: 'Node.js', icon: '/public/nodejs.png' },
    { name: 'React', icon: '/public/react.png' },
    { name: 'VueJS', icon: '/public/vue.png' },
    { name: 'Tailwind', icon: '/public/tailwind.png' },
    { name: 'MaterialUI', icon: '/public/mui.png' },
    { name: 'VisualStudioCode', icon: '/public/vscode.png' },
];

const SkillsCarousel = () => {
    return (
        <Box
            sx={{
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                width: '100%',
                background: '#1a1a1a',
                py: 3,
                marginTop: '20px'
            }}
        >
            <Box
                sx={{
                    display: 'inline-block',
                    animation: 'scroll 25s linear infinite',
                    '@keyframes scroll': {
                        '0%': { transform: 'translateX(0)' },
                        '100%': { transform: 'translateX(-50%)' },
                    },
                }}
            >

                {[...languages, ...languages].map((lang, index) => (
                    <Box
                        key={index}
                        component="img"
                        src={lang.icon}
                        alt={lang.name}
                        title={lang.name}
                        sx={{
                            height: 60,
                            width: 60,
                            objectFit: 'contain',
                            mx: { xs: 2, sm: 3 },
                            display: 'inline-block',
                            filter: 'drop-shadow(0 0 4px rgba(255,255,255,0.4))',
                            transition: 'transform 0.3s ease',
                            '&:hover': {
                                transform: 'scale(1.2)',
                            },
                        }}
                    />
                ))}
            </Box>
        </Box>
    );
};

export default SkillsCarousel;
