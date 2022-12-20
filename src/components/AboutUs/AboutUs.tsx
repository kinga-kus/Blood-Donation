import { Box, Container, Typography } from '@mui/material';
import AboutUsImage from '../../assets/image2.png';
import ActualEvents from '../ActualEvents/ActualEvents';

const AboutUs = () => {
    return (
        <Container>
            <Typography variant="h2" sx={{ textAlign: "center" }}>O nas</Typography>
            <Box sx={{ display: "flex" }}>
                <Typography variant="h3" color="red">MIS</Typography>
                <Typography variant="h3">JA</Typography>
            </Box>
            <Box sx={{ display: "flex" }}>
                <Box sx={{ marginTop: "114px" }}>
                    <Typography sx={{ fontSize: "16px", marginTop: "13px", width: "450px"}}>Zadaniem priorytetowym Centrum Krwiodawstwa w Krakowie jest pobieranie krwi i jej składników od dawców krwi oraz przetwarzanie jej w celu wytworzenia preparatów niezbędnych dla ratowania życia i zdrowia pacjentów wymagających transfuzji.</Typography>
                    <Typography sx={{ fontSize: "16px", marginTop: "10px", width: "660px"}}>Procedury stosowane do wytworzenia składników krwi na które składa się: kwalifikacja krwiodawcy, pobranie krwi, jej przetworzenie, zbadanie, przechowanie i transportowanie gwarantują najwyższą jakość i bezpieczeństwo dla biorców.</Typography>
                </Box>
                <Box sx={{ height: "100%", width: "100%" }}>
                    <img src={AboutUsImage} alt="About us image" />
                </Box>
            </Box>
            <ActualEvents />
        </Container>
    );
};

export default AboutUs;
