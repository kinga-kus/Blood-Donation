import { Container, Box } from '@mui/material';

export const Banner = () => {
    return (
        <section className="banner" id="home">
            <Box className="align-items-center" sx={{ backgroundColor: "green" }}>
                <Container>
                    <span className='tagline'>Welcome to my Page</span>
                    <h1>Hi this is me</h1>
                </Container>
            </Box>
        </section>
    )
}