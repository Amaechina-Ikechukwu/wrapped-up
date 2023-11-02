import { Box } from '@mui/joy'
import Spot from '../../assets/images/spotify1.png'

export default function SpotImage() {

    const containerStyle = {
        backgroundColor: 'primary.100',
        borderRadius: '100%',
        width: 500,
        height: 500,
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
        boxShadow: '0 0 50px primary.100', // Add round orange shadow
    };

    const innerBoxStyle = {
        position: 'relative',
        bottom: 0,
    };

    const imgStyle = {
        width: 200,
    };
    return (
        <Box>
            <Box sx={containerStyle}>
                <Box sx={innerBoxStyle}>
                    <img src={Spot} style={imgStyle} alt="Your Image" />
                </Box>
            </Box></Box>

    )
}
