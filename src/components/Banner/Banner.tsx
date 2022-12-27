import { Container, Box, Typography, Button, ButtonProps, styled } from '@mui/material';
import { red } from '@mui/material/colors';
import "./Banner.css"
import photo from '../../assets/image1.png';

const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.getContrastText(red[600]),
  backgroundColor: red[600],
  '&:hover': {
    backgroundColor: red[800],
  },
  borderRadius: "50px",
  marginTop: "84px",
}));

const Banner = () => {
  return (
    <Container sx={{ border: "2px solid green", display: "flex", marginTop: "66px" }}>
      <Box sx={{ border: "2px solid red", width: "460px", height: "412px", left: "50px", marginTop: "205px" }}>
        <Typography sx={{ fontFamily: "Poppins", fontWeight: 700, fontSize: "50px", display: "flex" }}>Centrum Krwiodawstwa</Typography>
        <Typography sx={{ fontFamily: "Poppins", fontWeight: 400, fontSize: "24px", display: "flex", marginTop: "11px" }}>Możesz uratować życie wielu osobom  - zostań dawcą krwi. To nic nie kosztuje, a wystarczą tylko chęci!</Typography>
        <ColorButton variant="contained" size="large">WIĘCEJ</ColorButton>
      </Box>
      <Box sx={{ border: "2px solid green", float: "right", marginLeft: "auto"}}>
        <img src={photo} alt="image" />
      </Box>
    </Container>
  );
};

export default Banner;

