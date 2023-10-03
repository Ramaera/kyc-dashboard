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
  styled
} from '@mui/material';
import { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import ProjectList from '../ProjectList';
import { AllBankDetails, AllProjectDetails } from './AllProjectData';
import { useSelector } from 'react-redux';
import { useTheme } from '@emotion/react';
import Image from 'next/image';
export const rows = [
  {
    config: documentsConfig.project_payment
  }
];
const DocumentRow = ({
  data,
  documents = [],
  user,
  rowNo,
  projectTitle,
  hideAdditionalDocuments
}) => {
  const theme = useTheme();
  const [images, setImages] = useState([]);
  const [imagesChanged, setImagesChange] = useState([]);
  const [moreRow, setMoreRow] = useState(rowNo);
  const [createDocument] = useMutation(CREATEDOCUMENT);
  const [updateDocument] = useMutation(UPDATEDOCUMENT);
  const [isLoading, setLoading] = useState(false);
  const [statusUpdate, setStatusUpdate] = useState([]);
  const dispatch = useAppDispatch();
  useEffect(() => {
    setMoreRow(rowNo);
  }, [rowNo]);
  useEffect(() => {
    const _imgs = [];
    for (let _document of documents) {
      _imgs.push(_document.url);
    }
    setImages(_imgs);
  }, [documents, user]);
  console.log(imagesChanged);
  const handleCreateDocument = async (title: string, url: string) => {
    return await createDocument({
      variables: {
        title,
        url
      }
    });
  };

  const handleUpdateDocument = async (
    id: string,
    title: string,
    url: string
  ) => {
    return await updateDocument({
      variables: {
        id,
        title,
        url
      }
    });
  };

  /*   const isValidToClick = () => {
    const hasSomethingChanged = imagesChanged.find((img) => {
      if (img) {
        return true;
      }
    });
    if (rowNo == data.config.items.length && hasSomethingChanged) {
      return true;
    }
  }; */
  const updateUser = (id, title, imgUrl) => {
    let newUser = user;
    let newDocs = [];
    user?.documents?.map((item) => {
      if (item.id === id) {
        newDocs.push({ ...item, title: 'avatar' });
      } else if (item.title !== title) {
        newDocs.push(item);
      }
    });
    return { ...newUser, documents: newDocs };
  };

  const statusCheck = (docId) => {
    let updatedStatus = false;
    statusUpdate?.map((stat) => {
      if (docId === stat.id) {
        updatedStatus = stat.status;
      }
    });
    // console.log(updatedStatus);
    return updatedStatus;
  };
  const handleDocumentUpload = async () => {
    setLoading(true);

    // console.log({ imagesChanged, images });
    //handle upload
    try {
      for (let i = 0; i < moreRow; i++) {
        if (imagesChanged[i]) {
          const documentTitle = projectTitle + '_' + data.config.items[i].id;
          const imgUrl = await handleImageUpload(images[i]);
          const _document = documents.find((document) => {
            if (document.title.toLowerCase() === documentTitle.toLowerCase()) {
              return true;
            }
          });
          let userAllDocuments = user?.documents;
          if (!userAllDocuments) {
            userAllDocuments = [];
          }
          if (_document) {
            const resp = await handleUpdateDocument(
              _document.id,
              documentTitle.toLowerCase(),
              imgUrl
            );
            await dispatch(
              setOrUpdateUser(updateUser(_document.id, documentTitle, imgUrl))
            );
            toast.success(`${documentTitle} Uploaded`);
            // location.reload();

            const listAfterRemovingExistingDocument = userAllDocuments.filter(
              (doc: any) => {
                return doc.id !== document.id;
              }
            );
            listAfterRemovingExistingDocument.push(resp.data.updateDocument);
            userAllDocuments = listAfterRemovingExistingDocument;
          } else {
            //create document
            const resp = await handleCreateDocument(
              documentTitle.toLowerCase(),
              imgUrl
            );
            toast.success(`${documentTitle} Uploaded`);
            userAllDocuments = [...userAllDocuments, resp.data.createDocument];
          }
          const _user = { ...user };
          _user.documents = userAllDocuments;
          dispatch(setOrUpdateUser(_user));
        }
      }
    } catch (err) {
      console.log('error', err);
    }
    setLoading(false);
  };
  const getActionCell = () => {
    const views = [];
    const items = data.config.items;
    for (let i = 0; i < moreRow; i++) {
      views.push(
        <Box
          sx={{
            height: 160,
            marginTop: 10,
            [theme.breakpoints.down('sm')]: {
              height: 60
            }
          }}
        >
          <div style={{ marginBottom: 10 }}>
            Status:{' '}
            <span
              style={{
                color:
                  statusCheck(documents[i]?.id) === 'APPROVED'
                    ? 'green'
                    : statusCheck(documents[i]?.id) === 'REJECTED'
                    ? 'red'
                    : documents[i]
                    ? (documents[i].status === 'APPROVED' && 'green') ||
                      (documents[i].status === 'REJECTED' && 'red')
                    : ''
              }}
            >
              {statusCheck(documents[i]?.id) ||
                documents[i]?.status ||
                'NOT STARTED'}
            </span>
          </div>
          <Button
            style={{
              cursor: documents[i]
                ? documents[i].status === 'APPROVED'
                  ? 'not-allowed'
                  : 'pointer'
                : 'pointer',
              marginTop: '10px'
            }}
            component="label"
            color={
              documents[i]
                ? documents[i].status === 'APPROVED'
                  ? 'secondary'
                  : 'primary'
                : 'primary'
            }
          >
            Choose {items[i]?.name}
            <input
              type="file"
              accept="image/*"
              hidden
              disabled={
                documents[i]
                  ? documents[i].status === 'APPROVED'
                    ? true
                    : false
                  : false
              }
              onChange={(f) => {
                if (f.target.files.length > 0) {
                  const _images = [...images];
                  _images[i] = f.target.files[0];
                  setImages(_images);
                  console.log('imageChanged', _images[i]);
                  const _imagesChanged = [...imagesChanged];
                  _imagesChanged[i] = true;
                  setImagesChange(_imagesChanged);
                }
              }}
            />
          </Button>
        </Box>
      );
    }
    return views;
  };

  const getPreview = () => {
    const views: any = [];
    const items = data.config.items;
    for (let i = 0; i < moreRow; i++) {
      const _img = images[i];
      if (_img) {
        views.push(
          <div style={{ marginTop: 15 }}>
            <img
              src={typeof _img == 'object' ? URL.createObjectURL(_img) : _img}
              height={150}
              style={{ marginLeft: '5px' }}
            />
          </div>
        );
      }
    }
    if (views.length == 0) {
      return <Typography variant="subtitle1">No Document</Typography>;
    }
    return views;
  };
  return (
    <>
      <TableRow
        key={data.config.name}
        sx={{
          '&:last-child td, &:last-child th': { border: 0 },
          [theme.breakpoints.down('sm')]: {
            display: 'flex',
            flexDirection: 'column'
          }
        }}
      >
        {/*   <TableCell component="th" scope="row" style={{ border: 'none' }}>
          {data.config.name} {data.isOptional ? '(Optional)' : ''}
        </TableCell> */}

        <TableCell
          style={{ display: 'flex', flexDirection: 'column', border: 'none' }}
          width={300}
        >
          {getPreview()}
        </TableCell>

        <TableCell style={{ border: 'none' }} width={300}>
          {getActionCell()}
        </TableCell>
        <TableCell style={{ border: 'none' }} width={300}>
          <LoadingButton
            loading={isLoading}
            // disabled={!isValidToClick()}
            variant="contained"
            onClick={() => {
              handleDocumentUpload();
            }}
          >
            Upload
          </LoadingButton>
        </TableCell>

        {/* <TableCell>
          <span
            style={{
              color: documents[0]
                ? (documents[0].status === 'APPROVED' && 'green') ||
                  (documents[0].status === 'REJECTED' && 'red')
                : ''
            }}
          >
            {documents[0] && documents[0].status}
          </span>
        </TableCell> */}
      </TableRow>
      <div style={{ marginBottom: 40 }}>
        {moreRow <= 3 && (
          <LoadingButton
            variant="contained"
            disabled={images.length !== moreRow}
            onClick={() => {
              setMoreRow(moreRow + 1);
            }}
          >
            Add More
          </LoadingButton>
        )}
        <LoadingButton
          sx={{ marginLeft: 2 }}
          variant="contained"
          onClick={hideAdditionalDocuments}
        >
          Go Back
        </LoadingButton>
      </div>
    </>
  );
};
const InfoTab = ({ title }) => {
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user?.data);
  const [additionalDocuments, setAdditionalDocuments] = useState(false);
  const [rowNo, setRowNo] = useState(0);
  const [isLoading, setLoading] = useState(false);
  const [showBankDetails, setBankDetails] = useState(false);
  const [enrollNow, setEnrollNow] = useState(false);
  const [proofImage, setProofImage] = useState<any | null>(null);
  const [paymentDocument, setPaymentDocument] = useState<DocumentType | null>();
  const [isImageChanged, setImageChanged] = useState(false);
  const [isSubmitButtonEnalbed, setSubmitButtonEnabled] = useState(false);
  const [createDocument] = useMutation(CREATEDOCUMENT);
  const [updateDocument] = useMutation(UPDATEDOCUMENT);
  const [isHidden, setHidden] = useState({ project: false });
  const [isEnrolled, setEnrolled] = useState(false);
  const [loadList, startLoadingList] = useState(false);
  let projectTitle = title + 'ProjectDetails';
  const amountFromProject = `total${title}Amount`;
  const projectAmount = useSelector(
    (state: any) => state.allUsers[amountFromProject]
  );

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
  const risedFundPer = title.toLowerCase() === 'hajipur' ? 100 : diff * 100;

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
        // newDocs.push(...item, url:imgUrl);
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
            id: paymentDocument.id
          }
        });

        dispatch(setOrUpdateUser(updateUser(paymentDocument.id, imgUrl)));
      } else {
        await createDocument({
          variables: {
            title:
              title.toLowerCase() + '_' + documentsConfig.project_payment.id,
            url: imgUrl
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

    setProofImage(null);
    setEnrollNow(false);
    if (user && user?.documents && user?.documents?.length > 0) {
      user?.documents?.find((document: DocumentType) => {
        if (
          document.title.toLowerCase() ===
          title.toLowerCase() + '_' + documentsConfig.project_payment.id
        ) {
          setPaymentDocument(document);
          setProofImage(document.url);
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

  return (
    <>
      {!additionalDocuments ? (
        <>
          <>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
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
                              '&:last-child td, &:last-child th': { border: 0 }
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
                                : row.info}
                            </TableCell>
                          </TableRow>
                        );
                      })}
                    </TableBody>
                  </Table>
                </TableContainer>
              </>
            )}

            <Box sx={{ flexGrow: 1, my: 2 }}>
              <Typography variant="h6" mb={2} textTransform={'uppercase'}>
                Total Funding Completed :{' '}
                {`₹ ${
                  title.toLowerCase() === 'hajipur' ? '20000000' : projectAmount
                }`}
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
                variant="outlined"
                onClick={() => setBankDetails(!showBankDetails)}
              >
                <Typography variant="h4">Bank Details</Typography>
              </Button>
              <br />
            </>
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
                    ? (paymentDocument.status === 'APPROVED' && 'green') ||
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

          {showBankDetails && (
            <TableContainer component={Paper} sx={{ mt: 2 }}>
              <Table sx={{ minWidth: 100 }} aria-label="simple table">
                <TableBody>
                  {AllBankDetails[title + 'BankDetails'].map((bankData) => {
                    return (
                      <TableRow
                        key={bankData.key}
                        sx={{
                          '&:last-child td, &:last-child th': { border: 0 }
                        }}
                      >
                        <TableCell component="th" scope="row">
                          {bankData.key}
                        </TableCell>
                        <TableCell align="right">{bankData.info}</TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          )}
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
      {isEnrolled && (
        <>
          {!loadList ? (
            <Box my={2} display={'flex'} gap={2} flexDirection={'column'}>
              <Button
                variant="outlined"
                sx={{
                  textTransform: 'uppercase',
                  width: '490px',
                  [theme.breakpoints.down('sm')]: {
                    width: '100%'
                  }
                }}
                onClick={() => {
                  startLoadingList(true);
                }}
              >
                Total Enrolled {title}
              </Button>
            </Box>
          ) : (
            <ProjectList title={title} />
          )}
        </>
      )}
    </>
  );
};
export default InfoTab;
