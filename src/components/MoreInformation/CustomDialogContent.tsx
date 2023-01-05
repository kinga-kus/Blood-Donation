import React, { FC } from 'react';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  List,
  ListItem,
  styled,
  Typography
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface IDialogTitle {
  children?: React.ReactNode;
  onClose: () => void;
}

const whoCannotBeADonorLong = [
  'Nie mogą oddawać krwi osoby, które chorowały na wirusowe zapalenie wątroby (tzw. żółtaczkę zakaźną), nosiciele wirusa HIV oraz chorzy na AIDS. Krwi nie pobiera się od narkomanów, od osób mających kontakty seksualne z wieloma partnerami lub partnerkami, szczególnie znanymi od niedawna.',

  'Dawcami krwi nie powinni być osoby z aktywną lub przebytą poważną chorobą układu krążenia, układu nerwowego, układu pokarmowego, układu oddechowego, nerek, skóry (np. łuszczyca), układu immunologicznego, układu endokrynnego (np. cukrzyca, choroby tarczycy), tkanki łącznej. ',

  'Nie można oddawać krwi zażywając leki (poza antykoncepcją hormonalną i niektórymi lekami na nadciśnienie).',

  'Dyskwalifikacją stałą objęci są kandydaci z chorobami krwi i układu krwiotwórczego, skłonnością do patologicznych krwawień, z nawracającymi omdleniami i napadami drgawkowymi, chorobami nowotworowymi, chorobami tropikalnymi, chorobami psychicznymi, chorobą alkoholową.',

  'Nie kwalifikują się na krwiodawców osoby leczone ludzkim hormonem wzrostu, po przeszczepie rogówki, posiadające w rodzinie chorego na chorobę Creutzfeldta-Jakoba oraz przebywające powyżej pół roku w latach 01.01.1980 – 31.12.1996 w Wielkiej Brytanii, Francji i Irlandii.',

  'Dyskwalifikacją czasową obejmuje się między innymi osoby, które miały kontakt z zakaźnie chorym lub przebyły ostrą chorobę zakaźną, po szczepieniach ochronnych, w ciąży, po porodzie, w trakcie miesiączki i okresie okołomiesiączkowym, po leczeniu stomatologicznym.',

  'Nie można oddawać krwi w ciągu 6 miesięcy po zabiegu operacyjnym, po przetoczeniu krwi, po wykonaniu tatuażu, przekłuciu różnych części ciała, akupunkturze, depilacji kosmetycznej, zabiegach diagnostycznych (np. gastroskopii), a także po pobycie w zakładzie karnym. Twoja krew zostanie zbadana, aby stwierdzić, czy nie jesteś zakażony/a kiłą, HIV, żółtaczką zakaźną B lub C. Jeśli test wypadnie dodatnio, nie zostanie przetoczona. Jednak przy każdej infekcji pomiędzy momentem zakażenia i chwilą, gdy staje się możliwe wykrycie go drogą badań laboratoryjnych, upływa pewien czas. W tym okresie w żadnym przypadku nie wolno oddawać krwi, ponieważ może być źródłem zakażenia, chociaż testy laboratoryjne są jeszcze ujemne. Nie oddawaj więc krwi, jeżeli przez ryzykowne kontakty lub zachowania naraziłeś/aś się na niebezpieczeństwo.',

  'Po pobycie w krajach, w których występują ogniska endemiczne chorób tropikalnych – aktualna lista znajduje się na stronie www w zakładce „Aktualności” Aktualna sytuacja epidemiologiczna.'
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

const CustomDialogContent: FC<{
  handleOnCloseDialog: () => void;
}> = ({ handleOnCloseDialog }) => {
  return (
    <>
      <CustomDialogTitle onClose={handleOnCloseDialog}>
        Regulamin - kto nie może oddać krew?
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

export default CustomDialogContent;
