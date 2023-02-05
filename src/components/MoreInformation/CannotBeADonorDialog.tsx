import React, { FC } from 'react';
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  List,
  ListItem,
  Typography
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface IDialogTitle {
  children?: React.ReactNode;
  onClose: () => void;
}

const whoCannotBeADonorLong = [
  'People who suffered from viral hepatitis (so-called infectious hepatitis), HIV carriers and AIDS patients cannot donate blood. Blood is not taken from drug addicts, from people who have had sexual contacts with multiple partners or partners, especially recently known ones.',
  'Blood donors should not be people with active or serious diseases of the circulatory system, nervous system, digestive system, respiratory system, kidneys, skin (e.g. psoriasis), immune system, endocrine system (e.g. diabetes, thyroid diseases), connective tissue . ',
  'You cannot donate blood while taking medication (except for hormonal contraception and some high blood pressure medications).',
  'The permanent disqualification applies to candidates with diseases of the blood and hematopoietic system, tendency to pathological bleeding, recurrent fainting and seizures, cancer, tropical diseases, mental illnesses, alcoholism.',
  'Persons treated with human growth hormone, after corneal transplantation, having a family member suffering from Creutzfeldt-Jakob disease and residing for more than half a year in the years 01/01/1980 - 31/12/1996 in Great Britain, France and Ireland are not eligible for blood donation.',
  'Temporary disqualification includes, among others, persons who have had contact with an infectious disease or have suffered an acute infectious disease, after vaccination, during pregnancy, after childbirth, during menstruation and around menstruation, after dental treatment.',
  'You cannot donate blood within 6 months after surgery, blood transfusion, tattooing, piercing of various parts of the body, acupuncture, cosmetic depilation, diagnostic procedures (e.g. gastroscopy), as well as after being in prison. Your blood will be tested to see if you are infected with syphilis, HIV, hepatitis B or C. If the test is positive, you will not receive a transfusion. However, with any infection, there is a period of time between when you become infected and when it becomes detectable by laboratory tests. During this period, under no circumstances should you donate blood, as it may be a source of infection, although laboratory tests are still negative. Therefore, do not donate blood if you have put yourself in danger through risky contacts or behavior.',
  'After staying in countries with endemic outbreaks of tropical diseases - the current list can be found on the website in the "News" tab. Current epidemiological situation.'
];

const CustomDialogTitle: FC<IDialogTitle> = ({
  children,
  onClose,
  ...props
}) => {
  return (
    <DialogTitle {...props} sx={{ m: 0, p: 2 }}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500]
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

const CannotBeADonorDialog = () => {
  const [open, setOpen] = React.useState(false);
  const handleClickOpenDialog = () => {
    setOpen(true);
  };
  const handleOnCloseDialog = () => {
    setOpen(false);
  };
  return (
    <div>
      <Button
        variant="outlined"
        onClick={handleClickOpenDialog}
        sx={{
          color: '#08415C',
          border: '1px solid #08415C',
          '&:hover': {
            backgroundColor: '#08415C',
            boxShadow: 'none',
            borderColor: '#08415C',
            color: '#EEE5E9'
          },
          '&:active': {
            boxShadow: 'none',
            backgroundColor: '#08415C'
          }
        }}
      >
        Read more
      </Button>
      <Dialog
        onClose={handleOnCloseDialog}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <CustomDialogContent handleOnCloseDialog={handleOnCloseDialog} />
      </Dialog>
    </div>
  );
};
export default CannotBeADonorDialog;

const CustomDialogContent: FC<{
  handleOnCloseDialog: () => void;
}> = ({ handleOnCloseDialog }) => {
  return (
    <>
      <CustomDialogTitle onClose={handleOnCloseDialog}>
        Regulations - who cannot donate blood?
      </CustomDialogTitle>
      <DialogContent dividers>
        <List
          sx={{
            ml: 4,
            fontFamily: 'Poppins',
            listStyleType: 'decimal',
            '& .MuiListItem-root': {
              display: 'list-item'
            }
          }}
        >
          {whoCannotBeADonorLong.map((infoText) => (
            <ListItem>
              <Typography gutterBottom>{infoText}</Typography>
            </ListItem>
          ))}
        </List>
      </DialogContent>
    </>
  );
};
