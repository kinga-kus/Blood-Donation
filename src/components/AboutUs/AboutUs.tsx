import { Box, Typography } from '@mui/material';
import AboutUsImage from '../../assets/image2.png';

const AboutUs = () => {
    return (
        <Box sx={{ border: "2px solid red" }}>
            <Typography>O nas</Typography>
            <Box sx={{ border: "2px solid blue" }}>
                <Typography>Zadaniem priorytetowym Centrum Krwiodawstwa w Krakowie jest pobieranie krwi i jej składników od dawców krwi oraz przetwarzanie jej w celu wytworzenia preparatów niezbędnych dla ratowania życia i zdrowia pacjentów wymagających transfuzji.</Typography>
                <Typography>Procedury stosowane do wytworzenia składników krwi na które składa się: kwalifikacja krwiodawcy, pobranie krwi, jej przetworzenie, zbadanie, przechowanie i transportowanie gwarantują najwyższą jakość i bezpieczeństwo dla biorców.</Typography>
            </Box>
            <Box>
                <img src={AboutUsImage} alt="About us image" />
            </Box>
        </Box>
    );
};

export default AboutUs;
