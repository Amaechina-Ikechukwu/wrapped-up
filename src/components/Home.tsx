import { Box, Stack, Typography } from '@mui/joy'
import { OpenInNew } from "@mui/icons-material";
import WUButton from '../Constants/WUButton';
import GradientCardCover from './Home Components/GradientCardCover';

import Fade from '@mui/material/Fade';
export default function Home() {
    return (
        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 16, mt: 10 }}>
            <Stack spacing={8}>
                <Fade in={true}  {...({ timeout: 3000 })}>
                    <Typography level='h1' sx={{ color: 'wpc.text', fontSize: 40, textAlign: 'center', width: "100%" }}>
                        Have your own
                        <Typography variant="outlined" sx={{ color: 'wpc.green', fontSize: 52, display: 'block', textAlign: 'center' }}>
                            WRAPPED UP
                        </Typography>
                        made for you with ease
                    </Typography>
                </Fade>

                <WUButton sx={{
                    backgroundColor: "wpc.orange", borderRadius: 0, transform: { xs: "scale(1.0)", sm: 'scale(1.5)' }, padding: 2, '&:hover': {
                        backgroundColor: "wpc.green"

                    }
                }} text='Connect Your Spotify' startDecorator={<OpenInNew />} onClick={() => { }} />
            </Stack>


            <GradientCardCover />
        </Box>
    )
}
