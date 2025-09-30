import { Box } from '@mui/material';

const languages = [
    { name: 'JavaScript', icon: '/js.png' },
    { name: 'TypeScript', icon: '/ts.png' },
    { name: 'MongoDB', icon: '/mongo.png' },
    { name: 'Github', icon: '/github.png' },
    { name: 'Angular', icon: '/angular.png' },
    { name: 'HTML', icon: '/html-5.png' },
    { name: 'CSS', icon: '/css-3.png' },
    { name: 'Node.js', icon: '/nodejs.png' },
    { name: 'React', icon: '/react.png' },
    { name: 'VueJS', icon: '/vue.png' },
    { name: 'Tailwind', icon: '/tailwind.png' },
    { name: 'MaterialUI', icon: '/mui.png' },
    { name: 'VisualStudioCode', icon: '/vscode.png' },
    { name: 'JavaScript', icon: '/js.png' },
    { name: 'TypeScript', icon: '/ts.png' },
    { name: 'MongoDB', icon: '/mongo.png' },
    { name: 'Github', icon: '/github.png' },
    { name: 'Angular', icon: '/angular.png' },
    { name: 'HTML', icon: '/html-5.png' },
    { name: 'CSS', icon: '/css-3.png' },
    { name: 'Node.js', icon: '/nodejs.png' },
    { name: 'React', icon: '/react.png' },
    { name: 'VueJS', icon: '/vue.png' },
    { name: 'Tailwind', icon: '/tailwind.png' },
    { name: 'MaterialUI', icon: '/mui.png' },
    { name: 'VisualStudioCode', icon: '/vscode.png' },
];

const SkillsCarousel = () => {
    return (
        <Box
            sx={{
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                width: '100%',
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
