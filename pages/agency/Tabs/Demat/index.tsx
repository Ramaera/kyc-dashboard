import {
  UPDATE_DEMAT_DATA_BY_ADMIN,
  UPDATE_DOCUMENT_URL_BY_ADMIN,
  UPDATE_STATUS_BY_ADMIN
} from '@/apollo/queries/updateUser';
import documentsConfig from '@/config/documentsConfig';
import variables from '@/config/variables';
import { setAllTheUsers } from '@/state/slice/allUsersSlice';
import { setFoundUser } from '@/state/slice/foundUserSlice';
import DocumentType from '@/state/types/document';
import allUsersUpdater from '@/utils/updateUserList';
import handleImageUpload from '@/utils/upload';
import { useMutation } from '@apollo/client';
import { LoadingButton } from '@mui/lab';
import { Box, Button, Grid, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { useDispatch, useSelector } from 'react-redux';

const DematTab = () => {
  const dispatch = useDispatch();

  // const user = useAppSelector((state) => state.user.data);
  const user = useSelector((state: any) => state.foundUser.foundUser);
  const usersList = useSelector((state: any) => state.allUsers.allTheUsers);

  const [dematAccount, setDematAccount] = useState<any | null>(null);
  const [dematDocumentImage, setDematDocumentImage] = useState<any | null>(
    null
  );
  const [dematDocument, setDematDocument] = useState<DocumentType>();
  const [isImageChanged, setImageChanged] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [isSubmitButtonEnalbed, setSubmitButtonEnabled] = useState(false);
  const [updateDematDataByAdmin] = useMutation(UPDATE_DEMAT_DATA_BY_ADMIN);
  const [updateDataByAdmin] = useMutation(UPDATE_DOCUMENT_URL_BY_ADMIN);
  const [updateDocumentStatusByAdmin, { data }] = useMutation(
    UPDATE_STATUS_BY_ADMIN
  );

  const updateUser = (dematId, imgUrl, dematAccount) => {
    let newUser = user;
    let newDocs = [];
    user.documents.map((item) => {
      if (item.id === dematId) {
        newDocs.push({ ...item, url: imgUrl });
      } else {
        newDocs.push(item);
      }
    });
    return { ...newUser, documents: newDocs, demat_account: dematAccount };
  };
  const updateUserStatus = (dematId, status) => {
    let newUser = user;
    let newDocs = [];
    user.documents.map((item) => {
      if (item.id === dematId) {
        newDocs.push({ ...item, status: status });
      } else {
        newDocs.push(item);
      }
    });
    return { ...newUser, documents: newDocs };
  };
  const validateSubmit = (imgUrl) => {
    if (!imgUrl) {
      alert('Invalid Image');
      return false;
    }

    return true;
  };

  const changeDocumentStatus = async (docId, docStatus) => {
    await updateDocumentStatusByAdmin({
      variables: {
        id: docId,
        status: docStatus
      }
    });
    dispatch(setFoundUser(updateUserStatus(dematDocument.id, docStatus)));
    dispatch(
      setAllTheUsers(
        allUsersUpdater(
          usersList,
          updateUserStatus(dematDocument.id, docStatus)
        )
      )
    );
  };
  const handleSubmit = async () => {
    const isValid = validateSubmit(dematDocumentImage);
    if (!isValid) {
      return;
    }
    setLoading(true);

    try {
      if (dematAccount) {
        await updateDematDataByAdmin({
          variables: {
            userId: user.id,
            demat_account: dematAccount
          }
        });
        dispatch(setFoundUser({ ...user, demat_account: dematAccount }));
        dispatch(
          setAllTheUsers(
            allUsersUpdater(usersList, { ...user, demat_account: dematAccount })
          )
        );
      }
      let imgUrl = '';
      if (isImageChanged) {
        imgUrl = await handleImageUpload(dematDocumentImage);
      } else {
        imgUrl = dematDocumentImage;
      }

      if (dematDocument) {
        await updateDataByAdmin({
          variables: {
            id: user.id,
            documentId: dematDocument.id,
            url: imgUrl
          }
        });
        dispatch(
          setFoundUser(updateUser(dematDocument.id, imgUrl, dematAccount))
        );
        dispatch(
          setAllTheUsers(
            allUsersUpdater(
              usersList,
              updateUser(dematDocument.id, imgUrl, dematAccount)
            )
          )
        );

        toast.success('Demat Details Updated ');
      } else {
        // console.log("can't create document");
        /* await createDocument({
          variables: {
            title: documentsConfig.demat_document.items[0].id,
            url: imgUrl
          }
        }); */
      }
    } catch (err) {}
    setLoading(false);
  };
  useEffect(() => {
    if (user) {
      setDematAccount(user.demat_account);
    }
    if (user && user.documents && user.documents.length > 0) {
      user.documents.find((document: DocumentType) => {
        if (
          document.title.toLowerCase() ===
          documentsConfig.demat_document.items[0].id
        ) {
          setDematDocument(document);
          setDematDocumentImage(document.url);
        }
      });
    }
  }, [user]);

  return (
    <>
      {/* <Grid container p={2} spacing={2}> */}
      <Grid item xs={12} sm={6} md={4}>
        <TextField
          id="outlined"
          label="Demat Account No."
          type="text"
          fullWidth
          disabled={user?.kyc === variables.status.APPROVED}
          value={dematAccount}
          variant="outlined"
          onChange={(e) => {
            setDematAccount(e.target.value);
            setSubmitButtonEnabled(true);
          }}
        />
      </Grid>
      {dematDocumentImage && (
        <>
          <PhotoProvider>
            <PhotoView
              src={
                typeof dematDocumentImage == 'object'
                  ? URL.createObjectURL(dematDocumentImage)
                  : dematDocumentImage
              }
            >
              <img
                style={{ marginTop: '10px', cursor: 'pointer' }}
                src={
                  typeof dematDocumentImage == 'object'
                    ? URL.createObjectURL(dematDocumentImage)
                    : dematDocumentImage
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
                color: dematDocument
                  ? (dematDocument.status === 'APPROVED' && 'limegreen') ||
                    (dematDocument.status === 'REJECTED' && 'red')
                  : ''
              }}
            >
              {data
                ? data.updateDocumentStatusByAdmin.status
                : dematDocument
                ? dematDocument.status
                : null}
            </span>
          </Box>
          <Box>
            {user?.kyc !== variables.status.APPROVED && (
              <Grid>
                <Button
                  onClick={() =>
                    changeDocumentStatus(dematDocument.id, 'APPROVED')
                  }
                  variant="outlined"
                  color="success"
                >
                  Approve
                </Button>
                <Button
                  onClick={() =>
                    changeDocumentStatus(dematDocument.id, 'REJECTED')
                  }
                  variant="outlined"
                  color="error"
                  sx={{ ml: 2 }}
                >
                  Reject
                </Button>
              </Grid>
            )}
          </Box>
        </>
      )}
      {user?.kyc !== variables.status.APPROVED && (
        <>
          <Grid container pt={3} pb={2} pr={2} spacing={2}>
            {dematDocumentImage && (
              <Grid item xs={12} sm={6} md={4} lg={3.5}>
                <Button variant="contained" component="label">
                  Upload Demat Account Details
                  <input
                    type="file"
                    accept="image/*"
                    hidden
                    onChange={(f) => {
                      if (f.target.files.length > 0) {
                        setDematDocumentImage(f.target.files[0]);
                        setImageChanged(true);
                        setSubmitButtonEnabled(true);
                      }
                    }}
                  />
                </Button>
              </Grid>
            )}

            <Grid item xs={12} sm={6} md={4} lg={3.5}>
              <Box component="form">
                <LoadingButton
                  loading={isLoading}
                  fullWidth
                  disabled={!isSubmitButtonEnalbed}
                  variant="contained"
                  onClick={() => {
                    handleSubmit();
                  }}
                  sx={{ paddingX: 20.5 }}
                >
                  Submit
                </LoadingButton>
              </Box>
            </Grid>
            <Toaster position="bottom-right" reverseOrder={false} />
          </Grid>
        </>
      )}
      <Grid item xs={4} />
      {/* </Grid> */}
    </>
  );
};

export default DematTab;
