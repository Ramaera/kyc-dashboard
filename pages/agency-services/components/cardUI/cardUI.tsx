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
  const handleGenerateCard = () => {
    setShowCardPayment(true);
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
              Select your Card Type
            </Typography>
            <RadioGroup name="cardtype">
              <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'space-evenly'
                }}
              >
                {CardData.map((item) => (
                  <Box key={item.id} marginTop={2}>
                    <Box
                      sx={{
                        backgroundColor: 'black',
                        // height: 60,
                        width: 400,
                        justifyContent: 'space-between',
                        display: 'flex',
                        padding: 2,
                        [theme.breakpoints.down('sm')]: {
                          width: 250
                        }
                      }}
                    >
                      <Typography>{item.type}</Typography>
                      <Typography>#myCard</Typography>
                    </Box>
                    <Box
                      sx={{
                        backgroundColor: 'grey',
                        height: 200,
                        width: 400,
                        [theme.breakpoints.down('sm')]: {
                          width: 250
                        }
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
            <Button type="submit" onClick={handleGenerateCard}>
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
