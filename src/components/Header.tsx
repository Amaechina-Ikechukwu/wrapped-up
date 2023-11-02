import { Stack } from '@mui/joy'
import logo from '../assets/images/logo.png'

export default function Header() {
    return (
        <Stack sx={{ width: '100%', paddingBottom: 5 }}>
            <img src={logo} style={{ width: 60 }} />
        </Stack>
    )
}
