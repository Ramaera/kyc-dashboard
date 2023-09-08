import { useRef, useState } from 'react';

import {
  Box,
  Button,
  Divider,
  Hidden,
  lighten,
  Popover,
  Stack,
  Avatar,
  Typography
} from '@mui/material';
// import { badgeClasses } from '@mui/material/Badge';

import { useAppDispatch, useAppSelector } from '@/hooks';
import { logout } from '@/state/slice/userSlice';
import ExpandMoreTwoToneIcon from '@mui/icons-material/ExpandMoreTwoTone';
import LockOpenTwoToneIcon from '@mui/icons-material/LockOpenTwoTone';
import SettingsIcon from '@mui/icons-material/Settings';
import { styled } from '@mui/material/styles';
import { useRouter } from 'next/router';
const UserBoxButton = styled(Button)(
  ({ theme }) => `
        padding-left: ${theme.spacing(1)};
        padding-right: ${theme.spacing(1)};
`
);

const MenuUserBox = styled(Box)(
  ({ theme }) => `
        background: ${theme.colors.alpha.black[5]};
        padding: ${theme.spacing(2)};
`
);

const UserBoxText = styled(Box)(
  ({ theme }) => `
        text-align: left;
        padding-left: ${theme.spacing(1)};
`
);

const UserBoxLabel = styled(Typography)(
  ({ theme }) => `
        font-weight: ${theme.typography.fontWeightBold};
        color: ${theme.palette.secondary.main};
        display: block;
`
);

const UserBoxDescription = styled(Typography)(
  ({ theme }) => `
        color: ${lighten(theme.palette.secondary.main, 0.5)}
`
);

function HeaderUserbox() {
  const router = useRouter();
  const user = useAppSelector((state) => state.user?.data);

  const ref = useRef<any>(null);
  const [isOpen, setOpen] = useState<boolean>(false);

  const dispatch = useAppDispatch();
  const handleOpen = (): void => {
    setOpen(true);
  };

  const handleClose = (): void => {
    setOpen(false);
  };

  return (
    <div>
      <UserBoxButton color="secondary" ref={ref} onClick={handleOpen}>
        <Hidden smUp>
          <img height={40} src="/static/images/logo/logo.png" />
        </Hidden>
        <Hidden mdDown>
          <UserBoxText>
            <UserBoxLabel variant="body2">
              {user?.name || user?.rm_id}
            </UserBoxLabel>
          </UserBoxText>
        </Hidden>
        <Hidden smDown>
          <ExpandMoreTwoToneIcon sx={{ ml: 1 }} />
        </Hidden>
      </UserBoxButton>
      <Popover
        anchorEl={ref.current}
        onClose={handleClose}
        open={isOpen}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
      >
        <MenuUserBox display="flex">
          <UserBoxText>
            <UserBoxLabel variant="body1">
              {user?.name ? user?.name : ''}
            </UserBoxLabel>
            <UserBoxDescription variant="body2">
              {user && user?.rm_id}
            </UserBoxDescription>
            <UserBoxDescription variant="body2">
              {user && user?.pw_id}
            </UserBoxDescription>
          </UserBoxText>
        </MenuUserBox>
        <Divider sx={{ mb: 0 }} />

        <Divider />
        <Box sx={{ m: 1 }}>
          <Button
            color="primary"
            fullWidth
            onClick={() => {
              dispatch(logout());
            }}
          >
            <LockOpenTwoToneIcon sx={{ mr: 1 }} />
            Sign out
          </Button>
        </Box>
        <Divider />
        <Box sx={{ m: 1 }}>
          <Button
            color="primary"
            fullWidth
            onClick={() => {
              router.push('/settings');
              handleClose();
            }}
          >
            <SettingsIcon sx={{ mr: 1 }} />
            Settings
          </Button>
        </Box>
      </Popover>
    </div>
  );
}

export default HeaderUserbox;
