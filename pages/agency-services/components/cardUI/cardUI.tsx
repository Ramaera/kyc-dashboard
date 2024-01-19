import React, { useState } from 'react';
import {
  Box,
  Button,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  Card
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const CardData = [
  { id: '1', type: 'Bronze' },
  { id: '2', type: 'Silver' },
  { id: '3', type: 'Gold' },
  { id: '4', type: 'Platinum' }
];

const CardUI = ({ nextStep, prevStep, formData: initialFormData }: any) => {
  const [formData, setFormData] = useState(
    initialFormData || {
      cardtype: ''
    }
  );

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    nextStep(formData);
  };

  return (
    <>
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
            sx={{ display: 'flex', justifyContent: 'center' }}
          >
            Select your Card Type
          </Typography>
          <RadioGroup
            name="cardtype"
            value={formData.cardtype}
            onChange={handleInputChange}
          >
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
                      padding: 2
                    }}
                  >
                    <Typography>{item.type}</Typography>
                    <Typography>#myCard</Typography>
                  </Box>
                  <Box
                    sx={{
                      backgroundColor: 'grey',
                      height: 200,
                      width: 400
                    }}
                  >
                    <Box
                      sx={{ display: 'flex', justifyContent: 'space-between' }}
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
                        letterSpacing: 6
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
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', padding: 1 }}>
          <Button type="submit" onClick={handleSubmit}>
            Next
          </Button>
        </Box>
      </Card>
    </>
  );
};

export default CardUI;
