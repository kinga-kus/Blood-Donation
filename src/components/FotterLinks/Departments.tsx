import React from 'react';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import Navbar from '../OnePage/Navbar';
import Contact from '../OnePage/Contact';
import Footer from '../OnePage/Footer';
import { Box } from '@mui/material';
import { CustomQuote } from '../TitlesAndHeaders';

const rows: GridRowsProp = [
  {
    id: 1,
    col1: 'II Cracow Blood Donation Center',
    col2: '9 Chinook Pass',
    col3: 'Cracow',
    col4: '930-607-5483',
    col5: 'krakow.centrumkrwiodawstwa@ck.pl',
    col6: '6:00 - 16:30'
  },
  {
    id: 2,
    col1: 'Warsaw Blood Donation Center',
    col2: '4736 Stoughton Street',
    col3: 'Warsaw',
    col4: '423-957-2057',
    col5: 'warsaw.centrumkrwiodawstwa@ck.pl',
    col6: '6:00 - 16:00'
  },
  {
    id: 3,
    col1: 'Gdynia Blood Donation Center',
    col2: '9 Chinook Pass',
    col3: 'Gdynia',
    col4: '801-264-7244',
    col5: 'gdynia.centrumkrwiodawstwa@ck.pl',
    col6: '7:00 - 16:30'
  },
  {
    id: 4,
    col1: 'Sandomierz Blood Donation Center',
    col2: '9 Chinook Pass',
    col3: 'Sandomierz',
    col4: '232-586-6407',
    col5: 'sandomierz.centrumkrwiodawstwa@ck.pl',
    col6: '6:00 - 14:30'
  },
  {
    id: 5,
    col1: 'Opole Blood Donation Center',
    col2: '9 Chinook Pass',
    col3: 'Opole',
    col4: '179-447-3413',
    col5: 'opole.centrumkrwiodawstwa@ck.pl',
    col6: '6:00 - 16:30'
  },
  {
    id: 6,
    col1: 'Szczawnica Blood Donation Center',
    col2: '9 Chinook Pass',
    col3: 'Szczawnica',
    col4: '249-722-7641',
    col5: 'szczawnica.centrumkrwiodawstwa@ck.pl',
    col6: '6:45 - 16:30'
  },
  {
    id: 7,
    col1: 'Wroclaw Blood Donation Center',
    col2: '9 Chinook Pass',
    col3: 'Cracow',
    col4: '733-233-0248',
    col5: 'wroclaw.centrumkrwiodawstwa@ck.pl',
    col6: '6:00 - 16:00'
  },
  {
    id: 8,
    col1: 'sth',
    col2: '9 Chinook Pass',
    col3: 'Cracow',
    col4: '254-236-0193',
    col5: 'ddudleston0@cnbc.com',
    col6: '11:00 - 16:30'
  },
  {
    id: 9,
    col1: 'sth',
    col2: '9 Chinook Pass',
    col3: 'Cracow',
    col4: '267-637-3894',
    col5: 'ddudleston0@cnbc.com',
    col6: '7:30 - 16:00'
  },
  {
    id: 10,
    col1: 'sth',
    col2: '9 Chinook Pass',
    col3: 'Cracow',
    col4: '702-646-3328',
    col5: 'ddudleston0@cnbc.com',
    col6: '8:00 - 16:00'
  }
];

const columns: GridColDef[] = [
  { field: 'col1', headerName: 'Name', width: 200 },
  { field: 'col2', headerName: 'Street', width: 200 },
  { field: 'col3', headerName: 'City', width: 150 },
  { field: 'col4', headerName: 'Phone', width: 150 },
  { field: 'col5', headerName: 'E-mail', width: 200 },
  { field: 'col6', headerName: 'Hours', width: 150 }
];

const Departments = () => {
  return (
    <>
      <Navbar />
      <Box
        sx={{
          height: 578,
          width: '80%',
          justifyContent: 'center',
          alignItems: 'center',
          margin: 'auto'
        }}
      >
        <CustomQuote quoteText="Meet Us!" />
        <DataGrid
          rows={rows}
          columns={columns}
          hideFooter={true}
          sx={{ marginTop: '30px' }}
        />
      </Box>
      <Contact />
      <Footer />
    </>
  );
};

export default Departments;
