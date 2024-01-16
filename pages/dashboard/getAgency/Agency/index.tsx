import { Button, Grid } from '@mui/material';
import { useState } from 'react';

import { useSelector } from 'react-redux';
import UpgradeAgencyPayment from './upgradeAgencyPayment';

const index = () => {
  const [wantAgency, setWantAgency] = useState(false);

  const agencyCode = useSelector(
    (state: any) => state.user?.agencyCode?.agencyCode
  );

  return (
    <>
      {wantAgency ? (
        <>
          <UpgradeAgencyPayment />
        </>
      ) : (
        <>
          <Grid
            container
            py={2}
            spacing={2}
            margin={agencyCode ? 1 : 0}
            sx={{ display: 'flex', justifyContent: 'center' }}
          >
            <Button
              onClick={() => {
                setWantAgency(true);
              }}
              variant="contained"
              component="label"
            >
              {agencyCode ? 'Upgrade Agency License' : 'Get Agency'}
            </Button>
          </Grid>
        </>
      )}
    </>
  );
};
export default index;
