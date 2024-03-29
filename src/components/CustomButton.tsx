import { Button, styled } from '@mui/material';
import React, { FC } from 'react';

interface ICustomButton {
  backgroundColor: string;
  color: string;
  buttonText: string;
}

const CustomButton: FC<ICustomButton> = ({
  backgroundColor,
  color,
  buttonText
}) => {
  const CustomButtonWrapper = styled(Button)(({ theme }) => ({
    backgroundColor: backgroundColor,
    width: 260,
    color: color,
    fontWeight: '700',
    fontSize: '14px',
    cursor: 'pointer',
    padding: '0.5rem 1.25rem',
    borderRadius: '10px',
    display: 'block',
    border: '2px solid transparent',
    '&:hover': {
      backgroundColor: color,
      color: backgroundColor,
      borderColor: backgroundColor
    },
    [theme.breakpoints.down('md')]: {
      margin: theme.spacing(0, 'auto', 3, 'auto'),
      width: '90%'
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(3),
      width: '90%'
    }
  }));

  return <CustomButtonWrapper>{buttonText}</CustomButtonWrapper>;
};

export default CustomButton;
