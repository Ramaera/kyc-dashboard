import { useContext, useEffect, useState } from 'react';
import { useAppSelector } from '@/hooks';
import { useRouter } from 'next/router';

import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone';
import MenuTwoToneIcon from '@mui/icons-material/MenuTwoTone';
import {
  alpha,
  Box,
  Divider,
  IconButton,
  lighten,
  Typography,
  Stack,
  styled,
  Tooltip,
  useTheme
} from '@mui/material';
import { SidebarContext } from 'src/contexts/SidebarContext';

import HeaderUserbox from './Userbox';
import { useSelector } from 'react-redux';

const HeaderWrapper = styled(Box)(
  ({ theme }) => `
  height: ${theme.header.height};
  color: ${theme.header.textColor};
  padding: ${theme.spacing(0, 2)};
  right: 0;
  z-index: 6;
  background-color: ${alpha(theme.header.background, 0.95)};
  backdrop-filter: blur(3px);
  position: fixed;
  justify-content: space-between;
  width: 100%;
  @media (min-width: ${theme.breakpoints.values.lg}px) {
    left: ${theme.sidebar.width};
    width: auto;
  }
  `
);

function Header() {
  const usersList = useSelector((state: any) => state.allUsers.allTheUsers);
  const [numbers, setNumbers] = useState({
    totalKYC: 0,
    totalHajipur: 0,
    totalAgra: 0
  });
  const { sidebarToggle, toggleSidebar } = useContext(SidebarContext);
  const theme = useTheme();
  const router = useRouter();
  const user = useAppSelector((state) => state.user.data);

  const checkTotal = () => {
    let totalKyc = 0;
    let totalHajipur = 0;
    let totalAgra = 0;
    usersList.map((user) => {
      user.documents.map((doc) => {
        if (doc.title === 'payment_proof' && doc.status != 'REJECTED') {
          totalKyc += 1;
        }
        if (
          doc.title.toLowerCase() === 'hajipur_project_payment' &&
          doc.status != 'REJECTED'
        ) {
          totalHajipur += 1;
        }
        if (
          doc.title.toLowerCase() === 'agra_project_payment' &&
          doc.status != 'REJECTED'
        ) {
          totalAgra += 1;
        }
      });
    });
    setNumbers({
      ...numbers,
      totalKYC: totalKyc,
      totalAgra: totalAgra,
      totalHajipur: totalHajipur
    });
  };

  useEffect(() => {
    checkTotal();
  }, []);
  return (
    <HeaderWrapper
      display="flex"
      alignItems="center"
      sx={{
        boxShadow:
          theme.palette.mode === 'dark'
            ? `0 1px 0 ${alpha(
                lighten(theme.colors.primary.main, 0.7),
                0.15
              )}, 0px 2px 8px -3px rgba(0, 0, 0, 0.2), 0px 5px 22px -4px rgba(0, 0, 0, .1)`
            : `0px 2px 8px -3px ${alpha(
                theme.colors.alpha.black[100],
                0.2
              )}, 0px 5px 22px -4px ${alpha(
                theme.colors.alpha.black[100],
                0.1
              )}`
      }}
    >
      {router.pathname === '/dashboard' && (
        <Stack
          direction="row"
          divider={<Divider orientation="vertical" flexItem />}
          alignItems="center"
          justifyContent="flex-end"
          spacing={2}
        >
          <Typography variant="h4" sx={{ my: 2 }}>
            RM ID : {user && user.rm_id}
          </Typography>
        </Stack>
      )}
      {router.pathname === '/list' && (
        <Stack
          direction="row"
          divider={<Divider orientation="vertical" flexItem />}
          alignItems="center"
          justifyContent="flex-end"
          spacing={2}
        >
          <Typography variant="h4" sx={{ my: 2 }}>
            Total KYC : {numbers.totalKYC}
          </Typography>
          <Typography variant="h4" sx={{ my: 2 }}>
            Total Hajipur KYC : {numbers.totalHajipur}
          </Typography>
          <Typography variant="h4" sx={{ my: 2 }}>
            Total Agra KYC : {numbers.totalAgra}
          </Typography>
        </Stack>
      )}
      <Box display="flex" alignItems="center">
        {/* <HeaderButtons /> */}
        <HeaderUserbox />
        <Box
          component="span"
          sx={{
            ml: 2,
            display: { lg: 'none', xs: 'inline-block' }
          }}
        >
          <Tooltip arrow title="Toggle Menu">
            <IconButton color="primary" onClick={toggleSidebar}>
              {!sidebarToggle ? (
                <MenuTwoToneIcon fontSize="small" />
              ) : (
                <CloseTwoToneIcon fontSize="small" />
              )}
            </IconButton>
          </Tooltip>
        </Box>
      </Box>
    </HeaderWrapper>
  );
}

export default Header;
