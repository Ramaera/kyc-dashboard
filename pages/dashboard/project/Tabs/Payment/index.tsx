import { CREATEDOCUMENT, UPDATEDOCUMENT } from '@/apollo/queries/auth';
import documentsConfig from '@/config/documentsConfig';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { setOrUpdateUser } from '@/state/slice/userSlice';
import DocumentType from '@/state/types/document';
import handleImageUpload from '@/utils/upload';
import { useMutation } from '@apollo/client';
import { LoadingButton } from '@mui/lab';
import {
  Box,
  Button,
  Grid,
  LinearProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
  linearProgressClasses,
  styled,
  Tab,
  Tabs,
  useTheme,
  TextField
} from '@mui/material';
import { ChangeEvent, useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { AllBankDetails, AllProjectDetails } from './AllProjectData';
import { useSelector } from 'react-redux';

import Image from 'next/image';
import variables from '@/config/variables';
import DocumentRow from './Components/DocumentRow';
import EnrolledAmount from './Components/EnrolledAmount';

const TabsContainerWrapper = styled(Box)(
  ({ theme }) => `
      .MuiTabs-scrollableX {
        overflow-x: auto !important;
      }

  `
);

export const rows = [
  {
    config: documentsConfig.project_payment
  }
];

const InfoTab = ({ title }) => {
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user?.data);
  const [additionalDocuments, setAdditionalDocuments] = useState(false);
  const [rowNo, setRowNo] = useState(0);
  const [isLoading, setLoading] = useState(false);
  const [showBankDetails, setBankDetails] = useState(false);
  const [showUPIDetails, setUPIDetails] = useState(false);
  const [enrollNow, setEnrollNow] = useState(false);
  const [proofImage, setProofImage] = useState<any | null>(null);
  const [paymentDocument, setPaymentDocument] = useState<DocumentType | null>();
  const [isImageChanged, setImageChanged] = useState(false);
  const [isSubmitButtonEnalbed, setSubmitButtonEnabled] = useState(false);
  const [createDocument] = useMutation(CREATEDOCUMENT);
  const [updateDocument] = useMutation(UPDATEDOCUMENT);
  const [isHidden, setHidden] = useState({ project: false });
  const [isEnrolled, setEnrolled] = useState(false);
  let projectTitle = title + 'ProjectDetails';
  var investmentAmount = 0;
  const amountFromProject = `total${title}Amount`;
  const [paymentReferralCode, setPaymentReferralCode] = useState('');
  const projectAmount = useSelector(
    (state: any) => state.allUsers[amountFromProject]
  );

  const phaseData = {
    Phase1: [
      {
        key: 'Phase 1 Running',
        info: 6000000
      },
      {
        key: 'Last Date',
        info: '15/Mar/2024'
      },
      {
        key: 'Your Enrolled Funds',
        info: investmentAmount
      },
      {
        key: 'Your Total Profit Units',
        info: investmentAmount / 2500
      },
      {
        key: 'Till Raised Fund By Public',
        info: projectAmount
      },
      {
        key: 'Total Units Distributed',
        info: projectAmount / 2500
      },
      {
        key: 'Remaining Funding',
        info: AllProjectDetails[projectTitle][0] - projectAmount
      }
    ]
  };
  const [currentTab, setCurrentTab] = useState<string>('basicInfo');

  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 20,
    borderRadius: 10,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor:
        theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800]
    }
  }));

  const diff = projectAmount / AllProjectDetails[projectTitle][0];
  // console.log('', AllProjectDetails[projectTitle]);
  const risedFundPer =
    title.toLowerCase() === 'hajipur' || title.toLowerCase() === 'agra'
      ? 100
      : title.toLowerCase() === 'hyderabad'
      ? diff * 100
      : diff * 100;

  const validateSubmit = (imgUrl) => {
    if (!imgUrl) {
      alert('Invalid Image');
      return false;
    }

    return true;
  };
  const getDocNum = () => {
    let count = 0;
    user?.documents?.map((doc) => {
      if (
        doc.title.slice(0, 17 + title.length).toLowerCase() ===
        title.toLowerCase() + '_' + documentsConfig.project_payment.id + '_'
      ) {
        count += 1;
      }
      setRowNo(count);
    });
  };
  const getDocumentsByConfig = (configs) => {
    const documents = [];
    if (user && user?.documents) {
      for (let config of configs) {
        const document = user?.documents?.find((doc: DocumentType) => {
          if (
            doc.title.toLowerCase() ===
            title.toLowerCase() + '_' + config.id.toLowerCase()
          ) {
            return true;
          }
        });
        if (document) {
          documents.push(document);
        }
      }
    }
    return documents;
  };

  const updateUser = (id, imgUrl) => {
    let newUser = user;
    let newDocs = [];
    user?.documents?.map((item) => {
      if (item.id === id) {
        newDocs.push({ ...item, url: imgUrl });
      } else {
        newDocs.push(item);
      }
    });
    return { ...newUser, documents: newDocs };
  };
  const handlePaymentSubmit = async () => {
    const isValid = validateSubmit(proofImage);
    if (!isValid) {
      return;
    }
    setLoading(true);

    try {
      let imgUrl = '';
      if (isImageChanged) {
        imgUrl = await handleImageUpload(proofImage);
      } else {
        imgUrl = proofImage;
      }

      toast.success('Payment Slip Updated ');
      if (paymentDocument) {
        await updateDocument({
          variables: {
            title:
              title.toLowerCase() + '_' + documentsConfig.project_payment.id,
            url: imgUrl,
            id: paymentDocument.id,
            referralAgencyCode: paymentReferralCode
          }
        });

        dispatch(
          setOrUpdateUser(
            updateUser(paymentDocument.id, imgUrl, paymentReferralCode)
          )
        );
      } else {
        await createDocument({
          variables: {
            title:
              title.toLowerCase() + '_' + documentsConfig.project_payment.id,
            url: imgUrl,
            referralAgencyCode: paymentReferralCode
          }
        });
      }
    } catch (err) {}
    setLoading(false);
    setSubmitButtonEnabled(false);
  };

  useEffect(() => {
    setPaymentDocument(null);
    setEnrolled(false);

    setPaymentReferralCode(null);
    setProofImage(null);
    setEnrollNow(false);
    if (user && user?.documents && user?.documents?.length > 0) {
      user?.documents?.find((document: DocumentType) => {
        if (
          document.title.toLowerCase() ===
          title.toLowerCase() + '_' + documentsConfig.project_payment.id
        ) {
          investmentAmount += document.amount;
          setPaymentDocument(document);

          setProofImage(document.url);
          setPaymentReferralCode(document.referralAgencyCode);

          setEnrollNow(true);
        }
        if (
          document.title.includes(title.toLowerCase()) &&
          document.status === 'APPROVED'
        ) {
          setEnrolled(true);
        }
      });
    }
  }, [user, title]);
  useEffect(() => {
    getDocNum();
  }, [title]);

  const hideAdditionalDocuments = () => {
    setAdditionalDocuments(false);
  };

  const tabs = [
    { value: 'basicInfo', label: 'Basic Info', title: title },
    { value: 'enrolledAmt', label: 'Enrolled Amount', title: title }
  ];

  const handleTabsChange = (_event: ChangeEvent<{}>, value: string): void => {
    setCurrentTab(value);
  };

  let totalfund = 20000000;
  let proAmt = projectAmount;
  const ramaeraFund = totalfund - proAmt;

  const btnShowBankDetails = () => {
    setBankDetails(true);
    setUPIDetails(false);
  };

  const btnShowUPIDetails = () => {
    setBankDetails(false);
    setUPIDetails(true);
  };

  return (
    <>
      <div>
        <TabsContainerWrapper sx={{ marginBottom: 4 }}>
          <Tabs
            onChange={handleTabsChange}
            value={currentTab}
            // variant={mobile ? 'fullWidth' : 'scrollable'}
            textColor="primary"
            visibleScrollbar={true}
            indicatorColor="primary"
          >
            {tabs.map((tab) =>
              tab.title.toLowerCase() === 'hyderabad' ? (
                tab.label === 'Basic Info' && (
                  <Tab key={tab.value} label={tab.label} value={tab.value} />
                )
              ) : (
                <Tab key={tab.value} label={tab.label} value={tab.value} />
              )
            )}
          </Tabs>
        </TabsContainerWrapper>
      </div>
      {currentTab === 'basicInfo' && (
        <div>
          {!additionalDocuments ? (
            <>
              <div>
                <>
                  <Box
                    sx={{ display: 'flex', justifyContent: 'space-between' }}
                  >
                    <Button
                      variant="outlined"
                      onClick={() =>
                        setHidden({ ...isHidden, project: !isHidden.project })
                      }
                    >
                      <Typography
                        variant="h4"
                        sx={{
                          [theme.breakpoints.down('sm')]: {
                            fontSize: 12
                          }
                        }}
                      >
                        Project Details
                      </Typography>
                    </Button>

                    <Typography
                      variant="h4"
                      sx={{
                        [theme.breakpoints.down('sm')]: {
                          fontSize: 12,
                          textAlign: 'right'
                        }
                      }}
                    >
                      Enrollment Status :{' '}
                      <span style={{ color: isEnrolled ? 'green' : 'red' }}>
                        {isEnrolled ? 'Enrolled' : 'Not Enrolled'}
                      </span>{' '}
                    </Typography>
                  </Box>
                  {isHidden.project && (
                    <>
                      {title === 'Hajipur' && (
                        <a
                          href="https://kyc.ramaera.com/Docs/Spice_Project.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Image
                            style={{ transform: 'scale(0.75)' }}
                            src="/images/pdf.png"
                            alt="pdf"
                            height={60}
                            width={60}
                          />
                        </a>
                      )}
                      <TableContainer component={Paper} sx={{ mt: 2 }}>
                        <Table sx={{ minWidth: 100 }} aria-label="simple table">
                          <TableBody>
                            {AllProjectDetails[projectTitle].map((row) => {
                              if (!row.key) {
                                return;
                              }
                              return (
                                <TableRow
                                  key={row.key}
                                  sx={{
                                    '&:last-child td, &:last-child th': {
                                      border: 0
                                    }
                                  }}
                                >
                                  <TableCell component="th" scope="row">
                                    {row.key}
                                  </TableCell>
                                  <TableCell align="right">
                                    {row.key === 'Till Raised Fund'
                                      ? projectAmount
                                      : row.key === 'Remain Funding'
                                      ? AllProjectDetails[projectTitle][0] -
                                        projectAmount
                                      : row.key === 'Total Enrolled'
                                      ? title.toLowerCase() === 'hyderabad'
                                        ? projectAmount / 5000
                                        : row.info
                                      : row.key === 'Upcoming Enroll'
                                      ? title.toLowerCase() === 'hyderabad'
                                        ? (AllProjectDetails[projectTitle][0] -
                                            projectAmount) /
                                          5000
                                        : row.info
                                      : row.info}
                                  </TableCell>
                                </TableRow>
                              );
                            })}
                          </TableBody>
                        </Table>
                      </TableContainer>

                      {title.toLowerCase() === 'hyderabad' && (
                        <TableContainer component={Paper} sx={{ mt: 2 }}>
                          <Table
                            sx={{ minWidth: 100 }}
                            aria-label="simple table"
                          >
                            <TableBody>
                              {phaseData['Phase1'].map((row) => (
                                <TableRow>
                                  <TableCell>{row.key}</TableCell>
                                  <TableCell>{row.info}</TableCell>
                                </TableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </TableContainer>
                      )}
                    </>
                  )}

                  <Box sx={{ flexGrow: 1, my: 2 }}>
                    <Typography variant="h6" mb={2} textTransform={'uppercase'}>
                      Total Funding Completed :{' '}
                      {`₹ ${
                        title.toLowerCase() === 'hajipur'
                          ? '20000000 / ₹20000000'
                          : title.toLowerCase() === 'agra'
                          ? `${projectAmount} / ₹3300000`
                          : `${projectAmount}/ ₹15000000`
                      } `}
                    </Typography>
                    <BorderLinearProgress
                      variant="determinate"
                      value={risedFundPer}
                    />
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      style={{
                        display: 'flex',
                        position: 'absolute',
                        marginTop: '-20px',
                        marginLeft: '50px',
                        fontWeight: 'bold',
                        color: 'white'
                      }}
                    >{`${Math.round(risedFundPer)}%`}</Typography>
                  </Box>
                </>
                {enrollNow && (
                  <>
                    <Button
                      style={{ marginRight: 20 }}
                      variant={showBankDetails ? 'contained' : 'outlined'}
                      onClick={() => {
                        btnShowBankDetails();
                      }}
                    >
                      <Typography variant="h4">Bank Details</Typography>
                    </Button>

                    {title.toLowerCase() === 'hyderabad' && (
                      <Button
                        variant={showUPIDetails ? 'contained' : 'outlined'}
                        onClick={() => {
                          btnShowUPIDetails();
                        }}
                      >
                        <Typography variant="h4">UPI</Typography>
                      </Button>
                    )}
                    <br />
                  </>
                )}
                {showBankDetails && enrollNow && (
                  <TableContainer component={Paper} sx={{ mt: 2 }}>
                    <Table sx={{ minWidth: 100 }} aria-label="simple table">
                      <TableBody>
                        {AllBankDetails[title + 'BankDetails'].map(
                          (bankData) => {
                            return (
                              <TableRow
                                key={bankData.key}
                                sx={{
                                  '&:last-child td, &:last-child th': {
                                    border: 0
                                  }
                                }}
                              >
                                <TableCell component="th" scope="row">
                                  {bankData.key}
                                </TableCell>
                                <TableCell align="right">
                                  {bankData.info}
                                </TableCell>
                              </TableRow>
                            );
                          }
                        )}
                      </TableBody>
                    </Table>
                  </TableContainer>
                )}

                {showUPIDetails &&
                  enrollNow &&
                  title.toLowerCase() === 'hyderabad' && (
                    <TableContainer component={Paper} sx={{ mt: 2 }}>
                      <Table sx={{ minWidth: 100 }} aria-label="simple table">
                        <TableBody>
                          <img
                            style={{
                              width: '250px',
                              borderRadius: '20px',
                              padding: '10px'
                            }}
                            src="/images/hyderabad_upi.png"
                          />
                          <Typography variant="body1" sx={{ my: 2, pl: 2 }}>
                            OR
                          </Typography>
                          <Typography variant="h4" sx={{ my: 2, pl: 2 }}>
                            <a href="#">UPI ID : ramaeraindustries@sbi</a>
                          </Typography>
                        </TableBody>
                      </Table>
                    </TableContainer>
                  )}
                {proofImage ? (
                  <img
                    src={
                      typeof proofImage == 'object'
                        ? URL.createObjectURL(proofImage)
                        : proofImage
                    }
                    style={{ marginTop: '10px', maxWidth: '100%' }}
                    height={200}
                  />
                ) : null}
                {paymentDocument && paymentDocument.status && (
                  <Typography variant="h4" sx={{ my: 2 }}>
                    Status :{' '}
                    <span
                      style={{
                        color: paymentDocument
                          ? (paymentDocument.status === 'APPROVED' &&
                              'green') ||
                            (paymentDocument.status === 'REJECTED' && 'red')
                          : ''
                      }}
                    >
                      {paymentDocument && paymentDocument.status}
                    </span>
                  </Typography>
                )}
                {!enrollNow && (
                  <Button
                    variant="contained"
                    sx={{ mb: 2 }}
                    onClick={() => setEnrollNow(true)}
                  >
                    Enroll Now
                  </Button>
                )}
              </div>

              {enrollNow && (
                <Grid container py={2} spacing={2}>
                  <Grid item xs={12} sm={5} md={3} lg={3}>
                    <Button
                      variant="contained"
                      component="label"
                      style={{
                        cursor: paymentDocument
                          ? paymentDocument.status === 'APPROVED'
                            ? 'not-allowed'
                            : 'pointer'
                          : 'pointer'
                      }}
                      color={
                        paymentDocument
                          ? paymentDocument.status === 'APPROVED'
                            ? 'secondary'
                            : 'primary'
                          : 'primary'
                      }
                    >
                      Select Payment Slip
                      <input
                        type="file"
                        accept="image/*"
                        hidden
                        disabled={
                          paymentDocument
                            ? paymentDocument.status === 'APPROVED'
                              ? true
                              : false
                            : false
                        }
                        onChange={(f) => {
                          if (f.target.files.length > 0) {
                            setSubmitButtonEnabled(true);
                            setProofImage(f.target.files[0]);
                            setImageChanged(true);
                          }
                        }}
                      />
                    </Button>
                  </Grid>
                  {!user.isKycAgent && (
                    <Grid item xs={12} sm={4}>
                      <TextField
                        required
                        id="outlined"
                        label="Secondary Promoter"
                        disabled={
                          paymentDocument
                            ? paymentDocument.status === 'APPROVED'
                              ? true
                              : false
                            : false
                        }
                        fullWidth
                        value={paymentReferralCode}
                        variant="outlined"
                        onChange={(e) => {
                          setPaymentReferralCode(e.target.value);
                        }}
                      />
                    </Grid>
                  )}
                  <Grid item xs={2}>
                    <LoadingButton
                      loading={isLoading}
                      fullWidth
                      variant="contained"
                      disabled={!isSubmitButtonEnalbed}
                      onClick={() => {
                        handlePaymentSubmit();
                      }}
                    >
                      Submit
                    </LoadingButton>
                  </Grid>
                  <Toaster position="bottom-center" reverseOrder={false} />
                </Grid>
              )}
              {proofImage && (
                <LoadingButton
                  variant="contained"
                  sx={{
                    [theme.breakpoints.down('sm')]: {
                      fontSize: 12
                    },
                    mb: 4
                  }}
                  onClick={() => {
                    setAdditionalDocuments(true);
                  }}
                >
                  Additional Documents
                </LoadingButton>
              )}
            </>
          ) : (
            <>
              {rows.map((row, index) => (
                <DocumentRow
                  hideAdditionalDocuments={hideAdditionalDocuments}
                  data={row}
                  rowNo={rowNo}
                  key={index}
                  projectTitle={title}
                  user={user}
                  documents={getDocumentsByConfig(row.config.items)}
                />
              ))}
            </>
          )}
        </div>
      )}
      {currentTab === 'enrolledAmt' && (
        <EnrolledAmount
          projectAmount={projectAmount}
          title={title}
          ramaeraFund={ramaeraFund}
          isEnrolled={isEnrolled}
        />
      )}
    </>
  );
};
export default InfoTab;
