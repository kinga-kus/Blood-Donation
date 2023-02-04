import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import { DateTimePicker, LocalizationProvider } from '@mui/x-date-pickers';
import dayjs, { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import 'dayjs/locale/en';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent
} from '@mui/material';

export default function Donation() {
  const [bloodType, setBloodType] = React.useState('');
  const bloodTypes = [
    'A Rh+',
    'A Rh-',
    'B Rh+',
    'B Rh-',
    '0 Rh+',
    '0 Rh-',
    'AB Rh+',
    'AB Rh-'
  ];

  const handleChangeBloodType = (event: SelectChangeEvent) => {
    setBloodType(event.target.value as string);
  };

  const [donation, setDonation] = React.useState('');

  const donationData = ['Full blood', 'Plasma', 'Trombafereza'];

  const handleChangeDonation = (event: SelectChangeEvent) => {
    setDonation(event.target.value as string);
  };

  const [value, setValue] = React.useState<Dayjs | null>(
    dayjs('2018-01-01T00:00:00.000Z')
  );

  const [gender, setGender] = React.useState('');

  const handleChangeGender = (event: SelectChangeEvent) => {
    setGender(event.target.value as string);
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Donation
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <FormControl fullWidth>
            <InputLabel>Blood types</InputLabel>
            <Select
              value={bloodType}
              label="Blood types"
              onChange={handleChangeBloodType}
            >
              {bloodTypes.map((blood) => (
                <MenuItem value={blood}>{blood}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6}>
          <LocalizationProvider adapterLocale="en" dateAdapter={AdapterDayjs}>
            <DateTimePicker
              inputFormat="DD-MM-YYYY"
              label="Date and time"
              renderInput={(params) => <TextField {...params} />}
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
              }}
            />
          </LocalizationProvider>
        </Grid>
        <Grid item xs={12} md={6}>
          <FormControl fullWidth>
            <InputLabel>Gender</InputLabel>
            <Select value={gender} label="Płeć" onChange={handleChangeGender}>
              <MenuItem value={'Women'}>Women</MenuItem>
              <MenuItem value={'Men'}>Men</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6}>
          <FormControl fullWidth>
            <InputLabel>Donation</InputLabel>
            <Select
              value={donation}
              label="Donation"
              onChange={handleChangeDonation}
            >
              {donationData.map((donation) => (
                <MenuItem value={donation}>{donation}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
