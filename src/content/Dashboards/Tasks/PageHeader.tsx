import { useAppSelector } from '@/hooks';
import { Box, Typography } from '@mui/material';

function PageHeader() {
 
const user = useAppSelector(state=>state.user.data);


  return (
    <Box
      display="flex"
      alignItems={{ xs: 'stretch', md: 'center' }}
      flexDirection={{ xs: 'column', md: 'row' }}
      justifyContent="space-between"
    >
      <Box display="flex" alignItems="center">
        {/* <AvatarPageTitle variant="rounded">
          <AddAlertTwoToneIcon fontSize="large" />
        </AvatarPageTitle> */}
        <Box>
          <Typography variant="h3" component="h3" gutterBottom>
            Welcome, {user.name}!
          </Typography>
          <Typography variant="subtitle2">
            Complete Your KYC By Filling the form below
          </Typography>
        </Box>
      </Box>
      <Box mt={{ xs: 3, md: 0 }}>
        {/* <Button variant="contained" startIcon={<DocumentScannerTwoToneIcon />}>
          Export
        </Button> */}
      </Box>
    </Box>
  );
}

export default PageHeader;
