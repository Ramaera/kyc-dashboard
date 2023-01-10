import { useAppSelector } from '@/hooks';
import { Badge, Box, Typography } from '@mui/material';

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

          {/* <Grid> */}
          <Typography 
          variant="h3" 
          component="h3" 
          gutterBottom>
            Welcome, {user.name?user.name:user.rm_id}!
          </Typography>
          <Typography variant="h5" component="h5" align="left">
            Membership Type : <Badge badgeContent={user.membership}
          sx={{
            marginLeft:4
          }}
             color="success"></Badge>
          </Typography>
          <Typography variant="subtitle2">
            Complete Your KYC By Filling the form below
          </Typography>
          {/* </Grid> */}
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
