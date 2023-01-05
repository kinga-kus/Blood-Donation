import React from 'react';
import { Button, Dialog } from '@mui/material';
import CustomDialogContent from './CustomDialogContent';

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
      <Button variant="outlined" onClick={handleClickOpenDialog}>
        Czytaj więcej
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
