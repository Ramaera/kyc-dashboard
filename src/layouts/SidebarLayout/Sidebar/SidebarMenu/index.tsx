import { Box, Button, List, ListItem, alpha, styled } from '@mui/material';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { useContext, useState } from 'react';
import { useSelector } from 'react-redux';
import { SidebarContext } from 'src/contexts/SidebarContext';
import { projectData } from './projectDetails';
import { logout } from '@/state/slice/userSlice';

import { useAppDispatch, useAppSelector } from '@/hooks';
import variables from '@/config/variables';

const MenuWrapper = styled(Box)(
  ({ theme }) => `
  .MuiList-root {
    padding: ${theme.spacing(1)};
    & > .MuiList-root {
      padding: 0 ${theme.spacing(0)} ${theme.spacing(1)};
    }
  }
    .MuiListSubheader-root {
      text-transform: uppercase;
      font-weight: bold;
      font-size: ${theme.typography.pxToRem(12)};
      color: ${theme.colors.alpha.trueWhite[50]};
      padding: ${theme.spacing(0, 2.5)};
      line-height: 1.4;
    }
`
);
const SubMenuWrapper = styled(Box)(
  ({ theme }) => `
    .MuiList-root {
      .MuiListItem-root {
        padding: 1px 0;
        .MuiBadge-root {
          position: absolute;
          right: ${theme.spacing(3.2)};
          .MuiBadge-standard {
            background: ${theme.colors.primary.main};
            font-size: ${theme.typography.pxToRem(10)};
            font-weight: bold;
            text-transform: uppercase;
            color: ${theme.palette.primary.contrastText};
          }
        }
        .MuiButton-root {
          display: flex;
          color: ${theme.colors.alpha.trueWhite[70]};
          background-color: transparent;
          width: 100%;
          justify-content: flex-start;
          padding: ${theme.spacing(1.2, 3)};
          .MuiButton-startIcon,
          .MuiButton-endIcon {
            transition: ${theme.transitions.create(['color'])};
            .MuiSvgIcon-root {
              font-size: inherit;
              transition: none;
            }
          }
          .MuiButton-startIcon {
            color: ${theme.colors.alpha.trueWhite[30]};
            font-size: ${theme.typography.pxToRem(20)};
            margin-right: ${theme.spacing(1)};
          }
          .MuiButton-endIcon {
            color: ${theme.colors.alpha.trueWhite[50]};
            margin-left: auto;
            opacity: .8;
            font-size: ${theme.typography.pxToRem(20)};
          }
          &.active,
          &:hover {
            background-color: ${alpha(theme.colors.alpha.trueWhite[100], 0.06)};
            color: ${theme.colors.alpha.trueWhite[100]};
            .MuiButton-startIcon,
            .MuiButton-endIcon {
              color: ${theme.colors.alpha.trueWhite[100]};
            }
          }
        }
        &.Mui-children {
          flex-direction: column;
          .MuiBadge-root {
            position: absolute;
            right: ${theme.spacing(7)};
          }
        }
        .MuiCollapse-root {
          width: 100%;
          .MuiList-root {
            padding: ${theme.spacing(1, 0)};
          }
          .MuiListItem-root {
            padding: 1px 0;
            .MuiButton-root {
              padding: ${theme.spacing(0.8, 3)};
              .MuiBadge-root {
                right: ${theme.spacing(3.2)};
              }
              &:before {
                content: ' ';
                background: ${theme.colors.alpha.trueWhite[100]};
                opacity: 0;
                transition: ${theme.transitions.create([
                  'transform',
                  'opacity'
                ])};
                width: 6px;
                height: 6px;
                transform: scale(0);
                transform-origin: center;
                border-radius: 20px;
                margin-right: ${theme.spacing(1.8)};
              }
              &.active,
              &:hover {
                &:before {
                  transform: scale(1);
                  opacity: 1;
                }
              }
            }
          }
        }
      }
    }
`
);
function SidebarMenu() {
  const user = useAppSelector((state) => state.user?.data);
  const { closeSidebar } = useContext(SidebarContext);
  const agencyCode = useSelector((state: any) => state.user?.agencyCode);
  const router = useRouter();
  const currentRoute = router.pathname;
  const currentQuery = router.query;
  const dispatch = useAppDispatch();
  const [listVisible, setListVisible] = useState(false);
  const [shareList, setShareList] = useState(false);

  return (
    <>
      <MenuWrapper>
        <List component="div">
          <SubMenuWrapper>
            <List component="div">
              <ListItem component="div">
                <NextLink href="/list" passHref>
                  <Button
                    className={currentRoute === '/list' ? 'active' : ''}
                    style={{
                      color: currentRoute === '/list' ? '#7063C0' : ''
                    }}
                    disableRipple
                    component="a"
                    onClick={() => {
                      setListVisible(false);
                      setShareList(false);
                      closeSidebar();
                    }}
                    startIcon={
                      <span
                        style={{
                          color: currentRoute === '/list' ? '#7063C0' : ''
                        }}
                      >
                        &#x2022;
                      </span>
                    }
                  >
                    DASHBOARD
                  </Button>
                </NextLink>
              </ListItem>
              {agencyCode && (
                <ListItem
                  component="div"
                  // sx={{ backgroundColor: '#ffffff10', borderRadius: 2 }}
                >
                  <NextLink href="/agency" passHref>
                    <Button
                      className={
                        currentRoute === '/agency'
                          ? 'active'
                          : currentRoute === '/agency/[index]'
                          ? 'active'
                          : ''
                      }
                      disableRipple
                      style={{
                        color:
                          currentRoute === '/agency'
                            ? '#7063C0'
                            : currentRoute === '/agency/[index]'
                            ? '#7063C0'
                            : ''
                      }}
                      component="a"
                      onClick={() => {
                        setListVisible(false);
                        setShareList(false);
                        closeSidebar();
                      }}
                      startIcon={
                        <span
                          style={{
                            color:
                              currentRoute === '/agency'
                                ? '#7063C0'
                                : currentRoute === '/agency/[index]'
                                ? '#7063C0'
                                : ''
                          }}
                        >
                          &#x2022;
                        </span>
                      }
                    >
                      AGENCY
                    </Button>
                  </NextLink>
                </ListItem>
              )}
              <ListItem component="div">
                <NextLink href="/dashboard" passHref>
                  <Button
                    className={currentRoute === '/dashboard' ? 'active' : ''}
                    style={{
                      color: currentRoute === '/dashboard' ? '#7063C0' : ''
                    }}
                    disableRipple
                    component="a"
                    onClick={() => {
                      setListVisible(false);
                      setShareList(false);
                      closeSidebar();
                    }}
                    // startIcon={<DesignServicesTwoToneIcon />}
                    startIcon={
                      <span
                        style={{
                          color: currentRoute === '/dashboard' ? '#7063C0' : ''
                        }}
                      >
                        &#x2022;
                      </span>
                    }
                  >
                    KYC
                  </Button>
                </NextLink>
              </ListItem>

              {user?.kyc === variables.status.APPROVED && (
                <ListItem component="div">
                  <Button
                    className={
                      currentRoute.includes('/dashboard/project')
                        ? 'active'
                        : ''
                    }
                    style={{
                      color: currentRoute.includes('/dashboard/project')
                        ? '#7063C0'
                        : ''
                    }}
                    onClick={() => {
                      setListVisible(!listVisible);
                      setShareList(false);
                    }}
                    startIcon={
                      <span
                        style={{
                          color: currentRoute.includes('/dashboard/project')
                            ? '#7063C0'
                            : ''
                        }}
                      >
                        &#x2022;
                      </span>
                    }
                  >
                    PROJECTS
                  </Button>
                </ListItem>
              )}

              {user?.kyc === variables.status.APPROVED && listVisible ? (
                <List component="div" style={{ marginLeft: '' }}>
                  {projectData.map((project) => {
                    return (
                      <ListItem component="div" onClick={closeSidebar}>
                        <NextLink
                          href={`/dashboard/project/${project.navigateTo}`}
                          passHref
                        >
                          <Button
                            onClick={closeSidebar}
                            style={{
                              color: currentQuery?.index?.includes(
                                `${project.navigateTo}`
                              )
                                ? '#7063C0'
                                : '',
                              fontWeight: 500,
                              fontSize: '12px',
                              textAlign: 'right',
                              padding: '10px 15px'
                            }}
                            className={
                              currentQuery?.index?.includes(
                                `${project.navigateTo}`
                              )
                                ? 'active'
                                : ''
                            }
                          >
                            {project.projectName}
                          </Button>
                        </NextLink>
                      </ListItem>
                    );
                  })}
                </List>
              ) : (
                ''
              )}
              {(user?.membership === variables.membership.BASIC ||
                user?.documents.find((doc) =>
                  doc.title.includes('to_advance')
                )) && (
                <ListItem component="div">
                  <NextLink href="/dashboard/toAdvance" passHref>
                    <Button
                      className={
                        currentRoute === '/dashboard/toAdvance' ? 'active' : ''
                      }
                      style={{
                        color:
                          currentRoute === '/dashboard/toAdvance'
                            ? '#7063C0'
                            : ''
                      }}
                      disableRipple
                      component="a"
                      onClick={() => {
                        setListVisible(false);
                        setShareList(false);
                        closeSidebar();
                      }}
                      // startIcon={<DesignServicesTwoToneIcon />}
                      startIcon={
                        <span
                          style={{
                            color:
                              currentRoute === '/dashboard/toAdvance'
                                ? '#7063C0'
                                : ''
                          }}
                        >
                          &#x2022;
                        </span>
                      }
                    >
                      UPGRADE MEMBERSHIP
                    </Button>
                  </NextLink>
                </ListItem>
              )}
              <ListItem component="div">
                <NextLink href="/dashboard/getAgency" passHref>
                  <Button
                    className={
                      currentRoute === '/dashboard/getAgency' ? 'active' : ''
                    }
                    style={{
                      color:
                        currentRoute === '/dashboard/getAgency' ? '#7063C0' : ''
                    }}
                    disableRipple
                    component="a"
                    onClick={() => {
                      setListVisible(false);
                      setShareList(false);
                      closeSidebar();
                    }}
                    // startIcon={<DesignServicesTwoToneIcon />}
                    startIcon={
                      <span
                        style={{
                          color:
                            currentRoute === '/dashboard/getAgency'
                              ? '#7063C0'
                              : ''
                        }}
                      >
                        &#x2022;
                      </span>
                    }
                  >
                    GET AGENCY
                  </Button>
                </NextLink>
              </ListItem>
              <ListItem component="div">
                <NextLink href="/dashboard/receipt" passHref>
                  <Button
                    className={
                      currentRoute === '/dashboard/receipt' ? 'active' : ''
                    }
                    style={{
                      color:
                        currentRoute === '/dashboard/receipt' ? '#7063C0' : ''
                    }}
                    disableRipple
                    component="a"
                    onClick={() => {
                      setListVisible(false);
                      setShareList(false);
                      closeSidebar();
                    }}
                    // startIcon={<DesignServicesTwoToneIcon />}
                    startIcon={
                      <span
                        style={{
                          color:
                            currentRoute === '/dashboard/receipt'
                              ? '#7063C0'
                              : ''
                        }}
                      >
                        &#x2022;
                      </span>
                    }
                  >
                    RECEIPT
                  </Button>
                </NextLink>
              </ListItem>
              {/*   {
                <ListItem component="div">
                  <NextLink href={`/dashboard/certificate`} passHref>
                    <Button
                      className={
                        currentRoute.includes('/dashboard/certificate')
                          ? 'active'
                          : ''
                      }
                      style={{
                        color: currentRoute.includes('/dashboard/certificate')
                          ? '#7063C0'
                          : ''
                      }}
                      onClick={() => {
                        setListVisible(false);
                        setShareList(false);
                      }}
                      startIcon={
                        <span
                          style={{
                            color: currentRoute.includes(
                              '/dashboard/certificate'
                            )
                              ? '#7063C0'
                              : ''
                          }}
                        >
                          &#x2022;
                        </span>
                      }
                    >
                      CERTIFICATE
                    </Button>
                  </NextLink>
                </ListItem>
              } */}
              {
                <ListItem component="div">
                  <Button
                    className={
                      currentRoute.includes('/dashboard/share') ? 'active' : ''
                    }
                    style={{
                      color: currentRoute.includes('/dashboard/share')
                        ? '#7063C0'
                        : ''
                    }}
                    onClick={() => {
                      setShareList(!shareList);
                      setListVisible(false);
                    }}
                    startIcon={
                      <span
                        style={{
                          color: currentRoute.includes('/dashboard/share')
                            ? '#7063C0'
                            : ''
                        }}
                      >
                        &#x2022;
                      </span>
                    }
                  >
                    SHARES
                  </Button>
                </ListItem>
              }

              {shareList ? (
                <List component="div" style={{ marginLeft: '' }}>
                  <ListItem component="div" onClick={closeSidebar}>
                    <NextLink href={`/dashboard/share/ramaera`} passHref>
                      <Button
                        style={{
                          color: currentQuery?.index?.includes(`ramaera`)
                            ? '#7063C0'
                            : '',
                          fontWeight: 500,
                          fontSize: '12px',
                          textAlign: 'right',
                          padding: '10px 15px'
                        }}
                        className={
                          currentQuery?.index?.includes(`ramaera`)
                            ? 'active'
                            : ''
                        }
                      >
                        Ramaera
                      </Button>
                    </NextLink>
                  </ListItem>
                  {projectData.map((project) => {
                    return (
                      <ListItem component="div" onClick={closeSidebar}>
                        <NextLink
                          href={`/dashboard/share/${project.navigateTo}`}
                          passHref
                        >
                          <Button
                            style={{
                              color: currentQuery?.index?.includes(
                                `${project.navigateTo}`
                              )
                                ? '#7063C0'
                                : '',
                              fontWeight: 500,
                              fontSize: '12px',
                              textAlign: 'right',
                              padding: '10px 15px'
                            }}
                            className={
                              currentQuery?.index?.includes(
                                `${project.navigateTo}`
                              )
                                ? 'active'
                                : ''
                            }
                          >
                            {project.projectName}
                          </Button>
                        </NextLink>
                      </ListItem>
                    );
                  })}
                </List>
              ) : (
                ''
              )}
              <ListItem component="div">
                <NextLink href="/settings" passHref>
                  <Button
                    className={currentRoute === '/settings' ? 'active' : ''}
                    style={{
                      color: currentRoute === '/settings' ? '#7063C0' : ''
                    }}
                    disableRipple
                    component="a"
                    onClick={() => {
                      setListVisible(false);
                      setShareList(false);
                      closeSidebar();
                    }}
                    // startIcon={<DesignServicesTwoToneIcon />}
                    startIcon={
                      <span
                        style={{
                          color: currentRoute === '/settings' ? '#7063C0' : ''
                        }}
                      >
                        &#x2022;
                      </span>
                    }
                  >
                    SETTINGS
                  </Button>
                </NextLink>
              </ListItem>

              <ListItem component="div">
                <Button
                  disableRipple
                  component="a"
                  onClick={() => {
                    setListVisible(false);
                    setShareList(false);
                    closeSidebar();
                    dispatch(logout());
                  }}
                >
                  LOGOUT
                </Button>
              </ListItem>
            </List>
          </SubMenuWrapper>
        </List>
      </MenuWrapper>
      <ListItem component="div"></ListItem>
    </>
  );
}
export default SidebarMenu;
