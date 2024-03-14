import { Box, Button, Typography } from '@mui/material';

const AgreementFile = () => {
  return (
    <>
      <Box>
        <img src="./images/PDF_file.png" height={100} width={100} />
        <Typography>
          {' '}
          Ramaera 30% net profit partner <br />
          mutual agreement consent{' '}
        </Typography>
        <Button>Complete Your Agreement</Button>
        <Button>View Agreement</Button>
        <Button>Download Agreement</Button>
      </Box>
    </>
  );
};

export default AgreementFile;
