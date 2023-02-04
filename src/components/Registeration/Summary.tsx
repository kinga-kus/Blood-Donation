import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const addresses = ['Street', 'State', 'Postal code', 'Country'];
const donation = [
  { name: 'Blood type', detail: 'AB Rh+' },
  { name: 'Donation', detail: 'Full blood' }
];

export default function Summary() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Donation summary
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Personal data
          </Typography>
          <Typography gutterBottom>Name Surname</Typography>
          <Typography gutterBottom>{addresses.join(', ')}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Donation details
          </Typography>
          <Grid container>
            {donation.map((donation) => (
              <React.Fragment key={donation.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{donation.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{donation.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
