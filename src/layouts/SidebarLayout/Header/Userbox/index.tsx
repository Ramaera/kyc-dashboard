import { useRef, useState } from 'react';

import {
  Badge,
  Box,
  Button,
  Divider,
  Grid,
  Hidden,
  lighten,
  Popover,
  Stack,
  Typography
} from '@mui/material';
import Paper from '@mui/material/Paper';
import { badgeClasses } from '@mui/material/Badge';

import { useAppDispatch, useAppSelector } from '@/hooks';
import { logout } from '@/state/slice/userSlice';
import ExpandMoreTwoToneIcon from '@mui/icons-material/ExpandMoreTwoTone';
import LockOpenTwoToneIcon from '@mui/icons-material/LockOpenTwoTone';
import { styled } from '@mui/material/styles';
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

const Item = styled(Typography)(({ theme }) => ({
  // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  // ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center'
  // color: theme.palette.text.secondary,
}));
function HeaderUserbox() {
  const user = useAppSelector((state) => state.user.data);

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
      {/* <Grid container spacing={2}>
                <Grid item>
                  <Badge badgeContent={user.membership} color="success" />
                </Grid>
                <Grid item>
                  <Badge
                    variant="standard"
                    sx={{
                      marginLeft: 1,
                      marginRight: 1,
                      [`& .${badgeClasses.standard}`]: {
                        // width: '100%'
                        // minWidth:"100%",
                      }
                    }}
                    // classes={{ badge: classes.badge }}
                    badgeContent={user.rm_id}
                    color="primary"
                  />
                </Grid>
              </Grid> */}
      <UserBoxButton color="secondary" ref={ref} onClick={handleOpen}>
        {/* <Avatar variant="rounded" alt={user.name} src={} /> */}
        <Hidden mdDown>
          <UserBoxText>
            <UserBoxLabel variant="body2">{user.name}</UserBoxLabel>
            <Stack spacing={8} direction="row" mt={1}>
              <Badge badgeContent={user.membership} color="success" />

              <Badge
                variant="standard"
                sx={{
                  // marginLeft: 1,
                  // marginRight: 1,
                  [`& .${badgeClasses.standard}`]: {
                    // width: '100%'
                    minWidth: '75px'
                  }
                }}
                // classes={{ badge: classes.badge }}
                badgeContent={user.rm_id}
                color="primary"
              />
            </Stack>
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
          {/* <Avatar variant="rounded" alt={user.name} src={user.avatar} /> */}
          <UserBoxText>
            <UserBoxLabel variant="body1">{user.name}</UserBoxLabel>
            <UserBoxDescription variant="body2">
              {user.rm_id}
            </UserBoxDescription>
          </UserBoxText>
        </MenuUserBox>
        <Divider sx={{ mb: 0 }} />
        {/* <List sx={{ p: 1 }} component="nav">
          <NextLink href="/management/profile" passHref>
            <ListItem button>
              <AccountBoxTwoToneIcon fontSize="small" />
              <ListItemText primary="My Profile" />
            </ListItem>
          </NextLink>
          <NextLink href="/applications/messenger" passHref>
            <ListItem button>
              <InboxTwoToneIcon fontSize="small" />
              <ListItemText primary="Messenger" />
            </ListItem>
          </NextLink>
          <NextLink href="/management/profile/settings" passHref>
            <ListItem button>
              <AccountTreeTwoToneIcon fontSize="small" />
              <ListItemText primary="Account Settings" />
            </ListItem>
          </NextLink>
        </List> */}

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
      </Popover>
    </div>
  );
}

export default HeaderUserbox;
