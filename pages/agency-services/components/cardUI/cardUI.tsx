import React, { useState } from 'react';
import {
  Box,
  Button,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  Card,
  useTheme
} from '@mui/material';
import CardPayment from '../CardPayment/CardPayment';
import CardRamaera from '../CardRamaera';
const CardData = [
  {
    id: '1',
    type: 'bronze',
    cardNumber: 'XXXXXXXXXXXXXX34',
    cardHolder: 'Your Name',
    expiry: 'Validity'
  },
  {
    id: '2',
    type: 'silver',
    cardNumber: 'XXXXXXXXXXXXXX34',
    cardHolder: 'Your Name',
    expiry: 'Validity'
  },
  {
    id: '3',
    type: 'gold',
    cardNumber: 'XXXXXXXXXXXXXX34',
    cardHolder: 'Your Name',
    expiry: 'Validity'
  },
  {
    id: '4',
    type: 'platinum',
    cardNumber: 'XXXXXXXXXXXXXX34',
    cardHolder: 'Your Name',
    expiry: 'Validity'
  }
];

const Cards = () => {
  const [showCardPayment, setShowCardPayment] = useState(false);

  const [selectedCard, setSelectedCard] = useState(null);

  const handleGenerateCard = () => {
    if (selectedCard) {
      setShowCardPayment(true);
    }
  };
  const handleCardClick = (cardId) => {
    setSelectedCard(cardId);
  };

  const theme = useTheme();

  return (
    <>
      {!showCardPayment && (
        <Card>
          <Box
            marginTop={2}
            sx={{
              width: '100%'
            }}
          >
            <Typography
              fontSize={30}
              fontWeight={600}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                [theme.breakpoints.down('sm')]: {
                  width: '100%'
                }
              }}
            >
              Select Card Type
            </Typography>
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                paddingX: '15px'
              }}
            >
              {CardData.map((card) => (
                <CardRamaera
                  key={card.id}
                  {...card}
                  isSelected={selectedCard === card.id}
                  onClick={() => handleCardClick(card.id)}
                />
              ))}
            </Box>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'center', padding: 1 }}>
            <Button
              type="submit"
              onClick={handleGenerateCard}
              disabled={!selectedCard}
            >
              Generate Your Card
            </Button>
          </Box>
        </Card>
      )}

      {showCardPayment && <CardPayment />}
    </>
  );
};

export default Cards;
