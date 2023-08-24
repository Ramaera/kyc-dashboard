import { Grid, Box, useTheme, Divider, TextField, Button } from '@mui/material';
import 'primereact/resources/themes/lara-light-indigo/theme.css'; //theme
import 'primereact/resources/primereact.min.css'; //core css
import 'primeicons/primeicons.css'; //icons
import { LoadingButton } from '@mui/lab';
import { useEffect, useState } from 'react';
// import {  CREATEDOCUMENT,  UPDATEDOCUMENT,UPSERTNOMINEE} from '@/apollo/queries/auth';
import { useMutation } from '@apollo/client';
// import { useAppSelector } from '@/hooks';
import documentsConfig from '@/config/documentsConfig';
import DocumentType from '@/state/types/document';
import toast, { Toaster } from 'react-hot-toast';
import {
  UPDATE_BY_ADMIN,
  UPDATE_STATUS_BY_ADMIN
} from '@/apollo/queries/updateUser';
import { useSelector, useDispatch } from 'react-redux';
import handleImageUpload from '@/utils/upload';
import { setFoundUser } from '@/state/slice/foundUserSlice';
import { setAllTheUsers } from '@/state/slice/allUsersSlice';
import allUsersUpdater from '@/utils/updateUserList';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const NomineeTab = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.foundUser.foundUser);
  const usersList = useSelector((state: any) => state.allUsers.allTheUsers);

  const [updateDataByAdmin] = useMutation(UPDATE_BY_ADMIN);
  const [updateDocumentStatusByAdmin, { data }] = useMutation(
    UPDATE_STATUS_BY_ADMIN
  );
  const [nomineeName, setNomineeName] = useState('');
  const [relationship, setRelationship] = useState('');
  const [isLoading, setLoading] = useState(false);
  //const [createDocument] = useMutation(CREATEDOCUMENT);
  // const [updateDocument] = useMutation(UPDATEDOCUMENT);
  // const [createOrUpdateNominee] = useMutation(UPSERTNOMINEE);
  const theme = useTheme();

  const [isFrontImageChanged, setFrontImageChanged] = useState<boolean>(false);
  const [isBackImageChanged, setBackImageChanged] = useState<boolean>(false);
  const [aadharFront, setAadharFront] = useState<any>('');
  const [aadharBack, setAadharBack] = useState<any>('');
  const [isSubmitButtonEnalbed, setSubmitButtonEnabled] =
    useState<boolean>(false);
  const [aadharFrontDocument, setAadharFrontDocument] =
    useState<DocumentType>();
  const [aadharBackDocument, setAadharBackDocument] = useState<DocumentType>();

  /*  const handleImageUpload = async (img) => {
    return 'https://upload.wikimedia.org/wikipedia/commons/4/45/X-Ray_Photograph_of_Tesla%27s_left_hand.jpg';
  }; */

  const validateForm = () => {
    if (!nomineeName) {
      alert('Please Enter Nominee Name');
      return null;
    }

    if (!relationship) {
      alert('Please Enter Nominee Relation');
      return null;
    }

    if (!aadharFrontDocument && !isFrontImageChanged) {
      alert('Please Select Nominee Aadhar Front');

      return null;
    }

    if (!aadharBackDocument && !isBackImageChanged) {
      alert('Please Select Nominee Aadhar Back');

      return null;
    }
    return true;
  };

  const updateUserObj = (docId, docStatus) => {
    let newUser = user;
    let newDocs = [];
    user?.documents?.map((item) => {
      if (item.id === docId) {
        newDocs.push({ ...item, status: docStatus });
      } else {
        newDocs.push(item);
      }
    });
    return { ...newUser, documents: newDocs };
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
  const changeDocumentStatus = async (docId, docStatus) => {
    await updateDocumentStatusByAdmin({
      variables: {
        id: docId,
        status: docStatus
      }
    });
    dispatch(setFoundUser(updateUserObj(docId, docStatus)));
    dispatch(
      setAllTheUsers(
        allUsersUpdater(usersList, updateUserObj(docId, docStatus))
      )
    );
  };
  const handleUpdateDocument = async (id: string, url: string) => {
    // console.log('idurl', user.id, id, url);
    const resp = await updateDataByAdmin({
      variables: {
        id: user.id,
        documentId: id,
        url: url
      }
    });
    dispatch(setFoundUser(updateUser(id, url)));
    dispatch(setAllTheUsers(allUsersUpdater(usersList, updateUser(id, url))));

    return resp;
  };

  /* const handleCreateDocument = async (url: string, title: string) => {
    const resp = await createDocument({
      variables: {
        title,
        url
      }
    });
    return resp;
  }; */
  const handleDocuments = async (isFront: boolean) => {
    const hasDocumentChanged = isFront
      ? isFrontImageChanged
      : isBackImageChanged;
    if (!hasDocumentChanged) {
      return;
    }
    const baseDocument = isFront ? aadharFront : aadharBack;

    const baseDocumenter = isFront ? aadharFrontDocument : aadharBackDocument;
    const documentTitle = isFront
      ? documentsConfig.nominee_aadhar.items[0].id
      : documentsConfig.nominee_aadhar.items[1].id;
    let imgUrl = await handleImageUpload(baseDocument);
    // console.log('baseDocument', baseDocument, 'imgUrl', imgUrl);
    if (baseDocument) {
      await handleUpdateDocument(baseDocumenter.id, imgUrl);
    } else {
      console.log('docs can only be updated, not created');
      // await handleCreateDocument(imgUrl, documentTitle);
    }
  };

  const handleNomineeSubmit = async () => {
    const isTextValid = validateForm();
    if (!isTextValid) {
      return;
    }
    setLoading(true);
    try {
      await updateDataByAdmin({
        variables: {
          id: user.id,
          nomineeName: nomineeName,
          nomineeRelationship: relationship
        }
      });
      await dispatch(
        setFoundUser({
          ...user,
          nomineeName: nomineeName,
          nomineeRelationship: relationship
        })
      );

      await dispatch(
        setAllTheUsers(
          allUsersUpdater(usersList, {
            ...user,
            nomineeName: nomineeName,
            nomineeRelationship: relationship
          })
        )
      );

      await handleDocuments(true);
      await handleDocuments(false);
      toast.success('Nominee Updated Succesfully');
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };
  useEffect(() => {
    if (
      data &&
      data.updateDocumentStatusByAdmin.id === aadharFrontDocument.id
    ) {
      setAadharFrontDocument({
        ...aadharFrontDocument,
        status: data.updateDocumentStatusByAdmin.status
      });
    }
    if (data && data.updateDocumentStatusByAdmin.id === aadharBackDocument.id) {
      setAadharBackDocument({
        ...aadharBackDocument,
        status: data.updateDocumentStatusByAdmin.status
      });
    }
  }, [data]);
  useEffect(() => {
    if (user) {
      if (user.nomineeName) {
        setNomineeName(user.nomineeName);
        setRelationship(user.nomineeRelationship);
      } else if (user.nominee) {
        setNomineeName(user.nominee.name);
        setRelationship(user.nominee.relationship);
      }

      if (user.documents && user?.documents?.length > 0) {
        user?.documents?.find((document: DocumentType) => {
          if (
            document.title.toLowerCase() ===
            documentsConfig.nominee_aadhar.items[1].id
          ) {
            setAadharBack(document.url);
            setAadharBackDocument(document);
          }
          if (
            document.title.toLowerCase() ===
            documentsConfig.nominee_aadhar.items[0].id
          ) {
            setAadharFront(document.url);
            setAadharFrontDocument(document);
            // console.log('document', document);
          }
        });
      }
    }
  }, [user]);

  return (
    <>
      <Grid container p={2} spacing={2}>
        <Grid item xs={12} sm={4}>
          <TextField
            id="outlined"
            label="Full Name*"
            fullWidth
            value={nomineeName}
            variant="outlined"
            onChange={(e) => {
              setNomineeName(e.target.value);
              setSubmitButtonEnabled(true);
            }}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            label="Relationship"
            variant="outlined"
            fullWidth
            value={relationship}
            onChange={(e) => {
              setRelationship(e.target.value);
              setSubmitButtonEnabled(true);
            }}
          />
        </Grid>
        <Grid item xs={4}></Grid>
      </Grid>
      <Grid container p={2} spacing={2}>
        <Grid item xs={12} sm={4}>
          {aadharFront && (
            <>
              <PhotoProvider>
                <PhotoView
                  src={
                    typeof aadharFront == 'object'
                      ? URL.createObjectURL(aadharFront)
                      : aadharFront
                  }
                >
                  <img
                    style={{ marginTop: '10px', cursor: 'pointer' }}
                    src={
                      typeof aadharFront == 'object'
                        ? URL.createObjectURL(aadharFront)
                        : aadharFront
                    }
                    height={200}
                    width={200}
                  />
                </PhotoView>
              </PhotoProvider>

              <Box>
                Status :{' '}
                <span
                  style={{
                    color: aadharFrontDocument
                      ? (aadharFrontDocument.status === 'APPROVED' &&
                          'green') ||
                        (aadharFrontDocument.status === 'REJECTED' && 'red')
                      : ''
                  }}
                >
                  {' '}
                  {data &&
                  data.updateDocumentStatusByAdmin.id === aadharFrontDocument.id
                    ? data.updateDocumentStatusByAdmin.status
                    : aadharFrontDocument
                    ? aadharFrontDocument.status
                    : null}
                </span>
              </Box>

              <Button
                variant="contained"
                component="label"
                sx={{ margin: '10px 0' }}
              >
                Upload Aadhar Card Front
                <input
                  type="file"
                  accept="image/*"
                  hidden
                  onChange={(f) => {
                    // console.log('aadhaar front', f.target.files[0]);
                    if (f.target.files.length > 0) {
                      setAadharFront(f.target.files[0]);
                      setFrontImageChanged(true);
                    }
                  }}
                />
              </Button>
              <Grid>
                <Button
                  variant="outlined"
                  onClick={() =>
                    changeDocumentStatus(aadharFrontDocument.id, 'APPROVED')
                  }
                  color="success"
                  sx={{ ml: 2 }}
                >
                  Approve
                </Button>
                <Button
                  variant="outlined"
                  onClick={() =>
                    changeDocumentStatus(aadharFrontDocument.id, 'REJECTED')
                  }
                  color="error"
                  sx={{ ml: 2 }}
                >
                  Reject
                </Button>
              </Grid>
            </>
          )}
        </Grid>
        <Grid item xs={12} sm={4}>
          {aadharBack && (
            <>
              <PhotoProvider>
                <PhotoView
                  src={
                    typeof aadharBack == 'object'
                      ? URL.createObjectURL(aadharBack)
                      : aadharBack
                  }
                >
                  <img
                    style={{ marginTop: '10px', cursor: 'pointer' }}
                    src={
                      typeof aadharBack == 'object'
                        ? URL.createObjectURL(aadharBack)
                        : aadharBack
                    }
                    height={200}
                    width={200}
                  />
                </PhotoView>
              </PhotoProvider>

              <Box>
                Status :{' '}
                <span
                  style={{
                    color: aadharBackDocument
                      ? (aadharBackDocument.status === 'APPROVED' && 'green') ||
                        (aadharBackDocument.status === 'REJECTED' && 'red')
                      : ''
                  }}
                >
                  {data &&
                  data.updateDocumentStatusByAdmin.id === aadharBackDocument.id
                    ? data.updateDocumentStatusByAdmin.status
                    : aadharBackDocument
                    ? aadharBackDocument.status
                    : null}
                </span>
                {/* {data
              ? data.updateDocumentStatusByAdmin.status
              : aadharBackDocument
              ? aadharBackDocument.status
              : null} */}
              </Box>
              <Button
                variant="contained"
                component="label"
                sx={{ margin: '10px 0' }}
              >
                Upload Aadhar Card Back
                <input
                  type="file"
                  accept="image/*"
                  hidden
                  onChange={(f) => {
                    if (f.target.files.length > 0) {
                      setAadharBack(f.target.files[0]);
                      setBackImageChanged(true);
                      setSubmitButtonEnabled(true);
                    }
                  }}
                />
              </Button>
              <Grid>
                <Button
                  variant="outlined"
                  onClick={() =>
                    changeDocumentStatus(aadharBackDocument.id, 'APPROVED')
                  }
                  color="success"
                  sx={{ ml: 2 }}
                >
                  Approve
                </Button>
                <Button
                  variant="outlined"
                  onClick={() =>
                    changeDocumentStatus(aadharBackDocument.id, 'REJECTED')
                  }
                  color="error"
                  sx={{ ml: 2 }}
                >
                  Reject
                </Button>
              </Grid>
            </>
          )}
        </Grid>
        <Grid item xs={4}></Grid>
        <Divider />
        <Box component="form" mt={2}>
          <LoadingButton
            loading={isLoading}
            variant="contained"
            component="label"
            disabled={!isSubmitButtonEnalbed}
            onClick={() => {
              handleNomineeSubmit();
            }}
          >
            Submit
          </LoadingButton>
          <Toaster position="bottom-center" reverseOrder={false} />
        </Box>
      </Grid>
    </>
  );
};
export default NomineeTab;
