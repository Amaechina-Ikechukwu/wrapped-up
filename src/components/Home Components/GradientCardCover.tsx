import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import MusicNoteOutlinedIcon from '@mui/icons-material/MusicNoteOutlined';
import { Box, Stack } from '@mui/joy';
import logo from '../../assets/images/logo.png';
import Grow from '@mui/material/Grow';

const musics = [
    {
        type: 'album',
        image:
            'https://images.pexels.com/photos/167092/pexels-photo-167092.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        name: 'More Love, Less Ego',
        by: 'Wizkid',
    },
    {
        type: 'Top Picks',
        image:
            'https://images.pexels.com/photos/4822764/pexels-photo-4822764.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        name: 'Ma Cherie',
        by: 'Bein',
    },
    {
        type: 'Top Artist',
        image:
            'https://cdn.thenationonlineng.net/wp-content/uploads/2022/11/24115128/images-6-2.jpeg',
        name: 'Stand Up',
        by: 'Davido',
    },
];

export default function GradientCardCover() {
    return (
        <Stack spacing={8} direction={{ xs: 'column', md: 'row' }}>
            {musics.map((music, index) => (
                <Grow
                    in={true}
                    style={{ transformOrigin: '0 0 0' }}
                    {...({ timeout: 3000 * index })}
                ><Box
                    key={index}
                    sx={{
                        position: 'relative',
                        marginLeft: index > 0 ? '10px' : 0, // Add spacing between music items
                        transition: 'transform 0.3s', // Add a transition for the transform property
                        '&:hover': {
                            transform: 'scale(1.05)', // Scale up on hover
                        },
                    }}
                >
                        <Box
                            sx={{
                                aspectRatio: 9 / 16,
                                backgroundColor: 'wpc.green',
                                borderRadius: 5,
                                transform: 'skewY(-5deg)', // Tilt the green background
                                zIndex: 1,
                                position: 'absolute',
                                width: '100%',
                                height: '100%',
                            }}
                        />
                        <Box
                            sx={{
                                aspectRatio: 9 / 16,
                                backgroundColor: 'wpc.orange',
                                borderRadius: 5,
                                transform: 'skewY(5deg)', // Tilt the orange background
                                zIndex: 2,
                                position: 'absolute',
                                width: '100%',
                                height: '100%',
                                padding: 2,
                            }}
                        />
                        <Card sx={{ minHeight: '280px', width: 320, aspectRatio: 9 / 16, zIndex: 4 }}>
                            <Stack
                                sx={{
                                    background:
                                        'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.6), rgba(0,0,0,0) 300px)',
                                }}
                            >
                                <img src={logo} loading="lazy" alt="" style={{ width: 30, height: 30, zIndex: 5 }} />
                            </Stack>
                            <CardCover>
                                <img src={music.image} loading="lazy" alt="" />
                            </CardCover>
                            <CardCover
                                sx={{
                                    background:
                                        'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)',
                                }}
                            />
                            <CardContent sx={{ justifyContent: 'flex-end' }}>
                                <Typography startDecorator={<MusicNoteOutlinedIcon />} level="title-lg" textColor="#fff">
                                    {music.type}
                                </Typography>
                                <Typography sx={{}} textColor="neutral.300" level="body-lg">
                                    {music.name}
                                </Typography>
                                <Typography sx={{ display: 'block' }} level="body-sm">
                                    {music.by}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Box></Grow>

            ))
            }
        </Stack >
    );
}
