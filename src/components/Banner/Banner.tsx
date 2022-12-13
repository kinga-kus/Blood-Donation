import { Container, Box, Typography } from '@mui/material';
import "./Banner.css"
import photo from '../../assets/image1.png';


const Banner = () => {
    return (
        <Box sx={{ border: "2px solid green", display: "inline-flex", width: "100%", marginTop: "66px"}}>
            <Box>
                <img src={photo} alt="image"/>
            </Box>
            <Box sx={{ height: 500, display: "flex", alignItems: "center", justifyContent: "center", marginLeft: "auto", marginRight: 0, textAlign: "right"  }}>
                <Box sx={{ marginRight: "130px" }}>
                    <Typography variant="h1" align="center">Centrum</Typography>
                    <Box sx={{ display: "flex" }}>
                        <Typography variant="h1" sx={{ color: "#FF0E00" }}>Krwio</Typography>
                        <Typography variant="h1" sx={{ marginTop: "20px" }}>dawstwa</Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Banner;
