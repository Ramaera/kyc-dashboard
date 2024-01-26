import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Box, Button, Typography, Card, useTheme } from '@mui/material';
import CardPayment from '../CardPayment/CardPayment';
import CardRamaera from '../CardRamaera';
import toast, { Toaster } from 'react-hot-toast';
import { GENERATE_CARD } from '@/apollo/queries/auth';
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
  const [generateCard] = useMutation(GENERATE_CARD);

  const [selectedCard, setSelectedCard] = useState(null);

  const handleGenerateCard = () => {
    if (selectedCard?.id) {
      setShowCardPayment(true);
    }
  };
  // console.log('ghj', selectedCard?.type.toUpperCase());
  const handleCardClick = (cardDetail) => {
    setSelectedCard(cardDetail);
  };
  // const handleGenerateCard = async () => {
  //   if (selectedCard?.id) {
  //     try {
  //       const resp = await generateCard({
  //         variables: {
  //           cardType: selectedCard?.type.toUpperCase()
  //         }
  //       });

  //       toast.success('Card Generated Sucessfully');
  //       setShowCardPayment(true);

  //     } catch (err) {
  //       toast.error(err.message);
  //     }
  //   }
  // };

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
                  isSelected={selectedCard?.id === card.id}
                  onClick={() => handleCardClick(card)}
                />
              ))}
            </Box>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'center', padding: 1 }}>
            <Button
              variant="contained"
              type="submit"
              onClick={handleGenerateCard}
              disabled={!selectedCard}
            >
              Generate Your Card
            </Button>
          </Box>
        </Card>
      )}

      {showCardPayment && <CardPayment selectedCard={selectedCard} />}
    </>
  );
};

export default Cards;
