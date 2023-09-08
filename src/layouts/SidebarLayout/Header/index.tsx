import { useAppSelector } from '@/hooks';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';

import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone';
import MenuTwoToneIcon from '@mui/icons-material/MenuTwoTone';
import {
  Box,
  Divider,
  IconButton,
  Stack,
  Tooltip,
  Typography,
  alpha,
  lighten,
  styled,
  useMediaQuery,
  useTheme
} from '@mui/material';
import { SidebarContext } from 'src/contexts/SidebarContext';

import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import HeaderUserbox from './Userbox';
import variables from '@/config/variables';

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
  const dispatch = useDispatch();
  const agencyCode = useSelector((state: any) => state.user?.agencyCode);
  const usersList = useSelector((state: any) => state.allUsers.allTheUsers);
  const mobile = useMediaQuery('(max-width:600px)');

  const [numbers, setNumbers] = useState({
    totalKYC: 0,
    totalHajipur: 0,
    totalAgra: 0
  });
  const { sidebarToggle, toggleSidebar } = useContext(SidebarContext);
  const theme = useTheme();
  const router = useRouter();
  const user = useAppSelector((state) => state.user?.data);

  const checkTotal = () => {
    let totalKycUsers = 0;
    let totalHajipurUsers = 0;
    let totalAgraUsers = 0;
    usersList.map((user) => {
      let totalHajipur = 0;
      let totalAgra = 0;

      if (user.role === variables.role.ADMIN) {
        return;
      }
      if (user.role !== variables.role.ADMIN) {
        totalKycUsers += 1;
      }

      user?.documents?.map((doc) => {
        if (
          doc.title
            .toLowerCase()
            .includes(variables.project.HAJIPUR.toLowerCase())
        ) {
          totalHajipur = +1;
        }
        if (
          doc.title.toLowerCase().includes(variables.project.AGRA.toLowerCase())
        ) {
          totalAgra = +1;
        }
      });
      if (totalHajipur) {
        totalHajipurUsers += 1;
      }
      if (totalAgra) {
        totalAgraUsers += 1;
      }
    });
    setNumbers({
      ...numbers,
      totalKYC: totalKycUsers,
      totalAgra: totalAgraUsers,
      totalHajipur: totalHajipurUsers
    });
  };

  useEffect(() => {
    checkTotal();
  }, [usersList]);
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
      <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        alignItems="center"
        justifyContent="flex-end"
        spacing={2}
      ></Stack>
      {router.pathname === '/dashboard' && (
        <Stack
          direction="row"
          divider={<Divider orientation="vertical" flexItem />}
          alignItems="center"
          justifyContent="flex-end"
          spacing={2}
        >
          {!mobile && (
            <Typography
              variant="h4"
              sx={{
                my: 2,
                [theme.breakpoints.down('sm')]: {
                  fontSize: 10,
                  width: 90
                }
              }}
            >
              RM ID : {user && user?.rm_id}
            </Typography>
          )}
          {agencyCode && (
            <Typography
              variant="h4"
              sx={{
                my: 2,
                [theme.breakpoints.down('sm')]: {
                  fontSize: 10,
                  width: 90
                }
              }}
            >
              Agency Code :{' '}
              <span
                style={{
                  cursor: 'pointer',
                  [theme.breakpoints.down('sm')]: {
                    fontSize: 10,
                    width: 90
                  }
                }}
                onClick={() => {
                  toast.success(`Agency Code Copied`);
                  navigator.clipboard.writeText(agencyCode);
                }}
              >
                {agencyCode}
              </span>
            </Typography>
          )}
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
          {numbers.totalKYC && (
            <Typography
              variant="h4"
              sx={{
                my: 2,
                [theme.breakpoints.down('sm')]: {
                  fontSize: 12
                }
              }}
            >
              Total Subscribers : {numbers.totalKYC}
            </Typography>
          )}
          {numbers.totalHajipur && (
            <Typography
              variant="h4"
              sx={{
                my: 2,
                [theme.breakpoints.down('sm')]: {
                  fontSize: 12
                }
              }}
            >
              Hajipur Enrolled : {numbers.totalHajipur}
            </Typography>
          )}
          {numbers.totalAgra && (
            <Typography
              variant="h4"
              sx={{
                my: 2,
                [theme.breakpoints.down('sm')]: {
                  fontSize: 12
                }
              }}
            >
              Agra Enrolled : {numbers.totalAgra}
            </Typography>
          )}
        </Stack>
      )}
      {router.pathname === '/agency' && agencyCode && (
        <Stack
          direction="row"
          divider={<Divider orientation="vertical" flexItem />}
          alignItems="center"
          justifyContent="flex-end"
          spacing={2}
        >
          <Typography
            variant="h4"
            sx={{
              my: 2,
              [theme.breakpoints.down('sm')]: {
                fontSize: 10,
                width: 90
              }
            }}
          >
            Agency Code :{' '}
            <span
              style={{ cursor: 'pointer' }}
              onClick={() => {
                toast.success(`Agency Code Copied`);
                navigator.clipboard.writeText(agencyCode);
              }}
            >
              {agencyCode}
            </span>
          </Typography>
        </Stack>
      )}
      <Box display="flex" alignItems="center">
        {/* <HeaderButtons /> */}
        <HeaderUserbox />
        <Box
          component="span"
          sx={{
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
