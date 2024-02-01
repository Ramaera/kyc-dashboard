import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Box, Button, Typography, Card, useTheme } from '@mui/material';
import CardRamaera from '../CardRamaera';
import { useQuery } from '@apollo/client';
import toast, { Toaster } from 'react-hot-toast';
import { CARD_USERS_DETAIL, GENERATE_CARD } from '@/apollo/queries/auth';
import { useSelector } from 'react-redux';
import { LoadingButton } from '@mui/lab';
import CardPayment from '../CardPayment/CardPayment';
enum CARD_TYPE {
  BRONZE = 'BRONZE',
  SILVER = 'SILVER',
  GOLD = 'GOLD',
  DIAMOND = 'DIAMOND'
}
const Cards = (props) => {
  const { cardId } = props;
  const [isLoading, setLoading] = useState(false);
  const [showCardPayment, setShowCardPayment] = useState(false);
  const [generateCard] = useMutation(GENERATE_CARD);
  const [selectedCardType, setSelectedCardType] = useState(null);
  const [generatedCardData, setGeneratedCardData] = useState(null);

  const agencyCode = useSelector(
    (state: any) => state.user?.agencyCode?.agencyCode
  );
  const cardUserData = useQuery(CARD_USERS_DETAIL, {
    variables: { agencyCode: agencyCode }
  });
  const userData = cardUserData.data?.findCardHoldersInAgency?.find(
    (item) => item.id == cardId
  );
  const handleCardClick = (cardType) => {
    setSelectedCardType(cardType);
  };
  const handleGenerateCard = async () => {
    if (selectedCardType) {
      setLoading(true);

      try {
        const resp = await generateCard({
          variables: {
            cardType: selectedCardType,
            cardHolderId: cardId
          }
        });
        toast.success('Card Generated Sucessfully');

        if (resp.data) {
          setGeneratedCardData(resp.data?.createCard);
          setShowCardPayment(true);
        }
      } catch (err) {
        console.log('err', err);

        // toast.error(err.message);
      }
    }
    setLoading(false);
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
              {Object.keys(CARD_TYPE).map((cardType) => (
                <CardRamaera
                  key={cardType}
                  type={cardType}
                  cardNumber={'XXXXXXXXXXXXXX34'}
                  expiry={'Validity'}
                  cardHolder={userData?.name}
                  isSelected={selectedCardType === cardType}
                  onClick={() => handleCardClick(cardType)}
                />
              ))}
            </Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              padding: 1,
              marginBottom: 2
            }}
          >
            <LoadingButton
              loading={isLoading}
              variant="contained"
              type="submit"
              onClick={handleGenerateCard}
              disabled={!selectedCardType}
            >
              Generate Your Card
            </LoadingButton>
          </Box>
        </Card>
      )}

      {showCardPayment && generatedCardData && (
        <CardPayment
          id={cardId}
          type={selectedCardType}
          cardHolder={userData?.name}
          generatedCardData={generatedCardData}
        />
      )}
    </>
  );
};

export default Cards;
