import React, { useState } from 'react';
import { Card, CardContent, Typography, useTheme, Box } from '@mui/material';
const CardRamaera = (props) => {
  const { cardNumber, cardHolder, expiry, type, isSelected, onClick } = props;
  const theme = useTheme();

  return (
    <>
      <Card
        onClick={onClick}
        sx={{
          margin: '15px',
          cursor: 'pointer',
          transition: 'transform 0.3s',
          transform: isSelected ? 'scale(1.12)' : 'scale(1)',
          '&:hover': {
            boxShadow: theme.shadows[8]
          },
          [theme.breakpoints.down('sm')]: {
            margin: '10px'
          }
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            color: 'black'
          }}
          className={`credit-card ${type}`}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <div
              style={{ display: 'flex', alignItems: 'center' }}
              className="logo"
            >
              <img
                style={{
                  height: '50px',
                  width: '50px'
                }}
                src="/images/logo.png"
                alt=""
              />{' '}
            </div>
            <div style={{ fontSize: '20px' }}>#myCard</div>
          </div>

          <Box
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Typography
              textTransform={'uppercase'}
              fontSize={20}
              marginTop={-2}
            >
              {type}
            </Typography>
            <Typography
              fontSize={25}
              letterSpacing={3}
              sx={{
                [theme.breakpoints.down('sm')]: {
                  letterSpacing: 2,
                  fontSize: 20
                }
              }}
            >
              {cardNumber}
            </Typography>
          </Box>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between'
            }}
          >
            <div
              style={{
                fontSize: '16px'
              }}
            >
              {cardHolder}
            </div>
            <div
              style={{
                fontSize: '16px'
              }}
            >
              {expiry} Months
            </div>
          </div>
        </div>
      </Card>
    </>
  );
};

export default CardRamaera;
