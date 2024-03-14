import { CHECK_AGREEMENT_DATA_STATUS } from '@/apollo/queries/auth';
import { useQuery } from '@apollo/client';
import { Box, Button, Typography } from '@mui/material';
import { useAppSelector } from '@/hooks';
import NextLink from 'next/link';

const AgreementFile = () => {
  const user = useAppSelector((state) => state.user?.data);

  const { loading, data, error } = useQuery(CHECK_AGREEMENT_DATA_STATUS, {
    variables: {
      pwid: user?.pw_id
    }
  });

  const checkStatusComplete = data?.checkAgreementDataStatus?.isCompleted;
  const url = data?.checkAgreementDataStatus?.agreementUrl;

  console.log('data', url);
  return (
    <>
      <Box>
        <img src="./images/PDF_file.png" height={100} width={100} />
        <Typography>
          Ramaera 30% net profit partner <br />
          mutual agreement consent{' '}
        </Typography>
        {!checkStatusComplete ? (
          <NextLink href={'/agreement/thirty-percent-partner'}>
            <Button>Complete Your Agreement</Button>
          </NextLink>
        ) : (
          <>
            <a href={url} target="_blank" rel="noopener noreferrer">
              <Button>Download Agreement</Button>
            </a>
          </>
        )}
      </Box>
    </>
  );
};

export default AgreementFile;
