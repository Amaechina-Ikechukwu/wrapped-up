import { Box, Stack, Typography } from '@mui/joy'
import { OpenInNew } from "@mui/icons-material";
import WUButton from '../Constants/WUButton';
import GradientCardCover from './Home Components/GradientCardCover';

// import Fade from '@mui/material/Fade';
// import { Zoom } from '@mui/material';
export default function Home() {
    return (
        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 16, mt: 10 }}>
            <Stack spacing={8}>
                {/* <Zoom in={true} style={{ transitionDelay: '3000ms' }}> */}
                <Box>
                    <Typography level='h1' sx={{ color: 'primary.300', fontSize: 40, textAlign: 'center', width: "100%" }}>
                        Have your own
                        <Typography variant="outlined" sx={{ color: 'primary.200', fontSize: 52, display: 'block', textAlign: 'center' }}>
                            WRAPPED UP
                        </Typography>
                        made for you with ease
                    </Typography>
                </Box>

                {/* </Zoom> */}

                <WUButton sx={{
                    backgroundColor: "primary.100", borderRadius: 0, transform: { xs: "scale(1.0)", sm: 'scale(1.5)' }, padding: 2, '&:hover': {
                        backgroundColor: "primary.200"

                    }
                }} text='Connect Your Spotify' startDecorator={<OpenInNew />} onClick={() => { }} />
            </Stack>


            <GradientCardCover />
        </Box>
    )
}
