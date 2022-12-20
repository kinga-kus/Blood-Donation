import { Box, Grid, Typography } from '@mui/material';
import ActualEvent1 from '../../assets/event1.png';
import ActualEvent2 from '../../assets/event2.png';
import ActualEvent3 from '../../assets/event3.png';


const ActualEvents = () => {
    return (
        <Box>
            <Box sx={{ display: "flex" }}>
                <Typography variant="h3" color="red">AKTUALNE</Typography>
                <Typography>&nbsp; &nbsp;</Typography>
                <Typography variant="h3">WYDARZENIA</Typography>
            </Box>
            <Grid container spacing={0}>
                <Grid>
                    <img src={ActualEvent1} alt="Actual event number 1" />
                </Grid>
                <Grid>
                    <img src={ActualEvent2} alt="Actual event number 2" />
                </Grid>
                <Grid>
                    <img src={ActualEvent3} alt="Actual event number 3" />
                </Grid>
            </Grid>
        </Box>
    );
};

export default ActualEvents;
