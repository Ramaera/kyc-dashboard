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
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CardPayment from '../CardPayment/CardPayment';

const CardData = [
  { id: '1', type: 'Bronze' },
  { id: '2', type: 'Silver' },
  { id: '3', type: 'Gold' },
  { id: '4', type: 'Platinum' }
];

const CardUI = () => {
  const [showCardPayment, setShowCardPayment] = useState(false);

  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardSelect = (event) => {
    setSelectedCard(event.target.value);
  };
  const handleGenerateCard = () => {
    if (selectedCard) {
      setShowCardPayment(true);
    }
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
            <RadioGroup
              name="cardtype"
              value={selectedCard}
              onChange={handleCardSelect}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'space-evenly'
                }}
              >
                {CardData.map((item) => (
                  <Box
                    sx={{
                      width: 400,
                      [theme.breakpoints.down('sm')]: {
                        width: 250
                      }
                    }}
                    key={item.id}
                    marginTop={2}
                  >
                    <Box
                      sx={{
                        backgroundColor: 'black',
                        justifyContent: 'space-between',
                        display: 'flex',
                        padding: 2
                      }}
                    >
                      <Typography>{item.type}</Typography>
                      <Typography>#myCard</Typography>
                    </Box>
                    <Box
                      sx={{
                        backgroundColor: 'grey',
                        height: 200
                      }}
                    >
                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'space-between'
                        }}
                      >
                        <img
                          // alt="500"

                          style={{ marginLeft: 5 }}
                          height={70}
                          src="/static/images/logo/logo.png"
                        />
                        <ShoppingCartIcon style={{ marginRight: 5 }} />
                      </Box>{' '}
                      <Typography
                        sx={{
                          marginTop: 3,
                          display: 'flex',
                          justifyContent: 'center',
                          fontSize: 20,
                          letterSpacing: 6,
                          [theme.breakpoints.down('sm')]: {
                            letterSpacing: 2
                          }
                        }}
                      >
                        1234567890123456
                      </Typography>
                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          marginTop: 1,
                          padding: 2
                        }}
                      >
                        <Typography>Kartikey Sharma</Typography>
                        <Typography>Expiry:- 11/24</Typography>
                      </Box>
                    </Box>

                    <FormControlLabel
                      value={item.type}
                      control={<Radio color="primary" />}
                      label="Select"
                    />
                  </Box>
                ))}
              </Box>
            </RadioGroup>
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

export default CardUI;
