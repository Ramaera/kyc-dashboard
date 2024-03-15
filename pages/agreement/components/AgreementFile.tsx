import { CHECK_AGREEMENT_DATA_STATUS } from '@/apollo/queries/auth';
import { useQuery } from '@apollo/client';
import { Box, Button, Typography } from '@mui/material';
import { useAppSelector } from '@/hooks';
import NextLink from 'next/link';
import { useEffect } from 'react';

const AgreementFile = () => {
  const user = useAppSelector((state) => state.user?.data);

  const { loading, data, error, refetch } = useQuery(
    CHECK_AGREEMENT_DATA_STATUS,
    {
      variables: {
        pwid: user?.pw_id
      }
    }
  );

  const checkStatusComplete = data?.checkAgreementDataStatus?.isCompleted;
  const url = data?.checkAgreementDataStatus?.agreementUrl;

  useEffect(() => {
    refetch();
  }, []);

  // console.log('data', url);
  return (
    <>
      <Box
        sx={{ width: { sm: 300 } }}
        display={'flex'}
        flexDirection={'column'}
        alignItems={'center'}
      >
        <img src="./images/PDF_file.png" height={100} width={100} />
        <Typography my={1}>
          Ramaera 30% net profit partner <br />
          mutual agreement consent{' '}
        </Typography>
        {!checkStatusComplete ? (
          <NextLink href={'/agreement/thirty-percent-partner'}>
            <Button variant="contained">Complete Your Agreement</Button>
          </NextLink>
        ) : (
          <>
            <a href={url} target="_blank" rel="noopener noreferrer">
              <Button variant="contained">Download Agreement</Button>
            </a>
          </>
        )}
      </Box>
    </>
  );
};

export default AgreementFile;
