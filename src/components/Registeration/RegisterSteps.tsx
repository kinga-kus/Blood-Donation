import React from 'react';
import {
  Box,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  styled,
  TextField,
  Typography
} from '@mui/material';
import Lifesaver from '../../assets/Lifesavers.png';

import { DateTimePicker, LocalizationProvider } from '@mui/x-date-pickers';
import dayjs, { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import 'dayjs/locale/pl';

const CustomBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  gap: theme.spacing(5),
  marginTop: theme.spacing(3),
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center'
  },
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center'
  }
}));

const PersonalInfo = [
  'Imię',
  'Nazwisko',
  'Data urodzenia',
  'Miejsce urodzenia',
  'Adres zamieszkania'
];

const ContactInfo = ['Numer telefonu', 'E-mail'];

const RegisterSteps = () => {
  const handleChangeDonationOption = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDonation({
      ...donation,
      [event.target.name]: event.target.checked
    });
  };

  interface IDonationOption {
    krew: boolean;
    osocze: boolean;
    trombafereza: boolean;
  }

  const [donation, setDonation] = React.useState<IDonationOption>({
    krew: false,
    osocze: false,
    trombafereza: false
  });

  const { krew, osocze, trombafereza } = donation;
  const error = [krew, osocze, trombafereza].filter((i) => i).length !== 1;

  const [value, setValue] = React.useState<Dayjs | null>(
    dayjs('2018-01-01T00:00:00.000Z')
  );

  const [gender, setGender] = React.useState('');

  const handleChangeGender = (event: SelectChangeEvent) => {
    setGender(event.target.value as string);
  };

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

  return (
    <Box sx={{ minHeight: '80vh' }}>
      <Container>
        <CustomBox>
          <Stack gap={2} sx={{ display: 'flex', width: 700 }}>
            <Grid>
              <FormControl
                required
                error={error}
                component="fieldset"
                variant="standard"
              >
                <FormLabel component="legend">Wybierz donacje</FormLabel>
                <FormGroup
                  sx={{
                    display: 'flex',
                    flexDirection: 'row'
                  }}
                >
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={krew}
                        onChange={handleChangeDonationOption}
                        name="krew"
                      />
                    }
                    label="Krew pełna"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={osocze}
                        onChange={handleChangeDonationOption}
                        name="osocze"
                      />
                    }
                    label="Osocze"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={trombafereza}
                        onChange={handleChangeDonationOption}
                        name="trombafereza"
                      />
                    }
                    label="Trombafereza"
                  />
                </FormGroup>
                <FormHelperText>Wybierz jedna opcje</FormHelperText>
              </FormControl>
            </Grid>
            <Grid>
              <LocalizationProvider
                adapterLocale="pl"
                dateAdapter={AdapterDayjs}
              >
                <DateTimePicker
                  inputFormat="DD-MM-YYYY"
                  label="Data i godzina"
                  renderInput={(params) => (
                    <TextField {...params} sx={{ width: 300 }} />
                  )}
                  value={value}
                  onChange={(newValue) => {
                    setValue(newValue);
                  }}
                />
              </LocalizationProvider>
            </Grid>
            <Grid>
              <FormControl>
                <InputLabel>Płeć</InputLabel>
                <Select
                  value={gender}
                  label="Płeć"
                  onChange={handleChangeGender}
                  sx={{ width: 300 }}
                >
                  <MenuItem value={'Kobieta'}>Kobieta</MenuItem>
                  <MenuItem value={'Męzczyzna'}>Męzczyzna</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Stack
              gap={2}
              sx={{
                display: 'flex',
                flexFlow: 'row wrap'
              }}
            >
              {PersonalInfo.map((person) => (
                <Grid>
                  <TextField
                    required
                    id="outlined-required"
                    label={person}
                    sx={{ width: '300px' }}
                  />
                </Grid>
              ))}
            </Stack>
            <Grid>
              <FormControl>
                <InputLabel>Grupa Krwi</InputLabel>
                <Select
                  value={bloodType}
                  label="Rodzaj krwi"
                  onChange={handleChangeBloodType}
                  sx={{ width: 300 }}
                >
                  {bloodTypes.map((blood) => (
                    <MenuItem value={blood}>{blood}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Stack
              gap={2}
              sx={{
                display: 'flex',
                flexFlow: 'row wrap'
              }}
            >
              {ContactInfo.map((contact) => (
                <Grid item xs={8}>
                  <TextField
                    required
                    id="outlined-required"
                    label={contact}
                    sx={{ width: '300px' }}
                  />
                </Grid>
              ))}
            </Stack>
          </Stack>
          <Box
            sx={{
              flex: '1.25',
              backgroundColor: '#E6F0FF',
              textAlign: 'center'
            }}
          >
            <Typography
              variant="h3"
              sx={{
                fontSize: '24px',
                fontWeight: 'bold',
                color: '#000339',
                padding: 8
              }}
            >
              Nie zgrywaj bohatera, zostań nim
            </Typography>
            <img
              src={Lifesaver}
              alt="Lifesaver"
              style={{ marginBottom: '2rem' }}
            />
          </Box>
        </CustomBox>
      </Container>
    </Box>
  );
};

export default RegisterSteps;
