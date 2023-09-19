import {
  CREATEDOCUMENT,
  UPDATEDOCUMENT,
  UPDATEUSERDETAILS
} from '@/apollo/queries/auth';
import documentsConfig from '@/config/documentsConfig';
import variables from '@/config/variables';
import { useAppSelector, useAppDispatch } from '@/hooks';
import { setOrUpdateUser } from '@/state/slice/userSlice';
import DocumentType from '@/state/types/document';
import handleImageUpload from '@/utils/upload';
import { useMutation } from '@apollo/client';
import { LoadingButton } from '@mui/lab';
import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
const DematTab = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user?.data);
  const [dematAccount, setDematAccount] = useState<any | null>(null);
  const [dematDocumentImage, setDematDocumentImage] = useState<any | null>(
    null
  );
  const [dematDocument, setDematDocument] = useState<DocumentType>();
  const [isImageChanged, setImageChanged] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [isSubmitButtonEnalbed, setSubmitButtonEnabled] = useState(false);
  const [createDocument] = useMutation(CREATEDOCUMENT);
  const [updateDocument] = useMutation(UPDATEDOCUMENT);
  const [updatedetails] = useMutation(UPDATEUSERDETAILS);

  const validateSubmit = (imgUrl) => {
    if (!imgUrl) {
      alert('Invalid Image');
      return false;
    }

    return true;
  };
  const updateUser = (dematId, imgUrl, dematAccount) => {
    let newUser = user;
    let newDocs = [];
    user?.documents?.map((item) => {
      if (item.id === dematId) {
        newDocs.push({ ...item, url: imgUrl });
      } else {
        newDocs.push(item);
      }
    });
    return { ...newUser, documents: newDocs, demat_account: dematAccount };
  };

  const handleSubmit = async () => {
    const isValid = validateSubmit(dematDocumentImage);
    if (!isValid) {
      return;
    }
    setLoading(true);

    try {
      if (dematAccount) {
        await updatedetails({
          variables: {
            demat_account: dematAccount
          }
        });
        await dispatch(
          setOrUpdateUser({ ...user, demat_account: dematAccount })
        );
      }
      let imgUrl = '';
      if (isImageChanged) {
        imgUrl = await handleImageUpload(dematDocumentImage);
      } else {
        imgUrl = dematDocumentImage;
      }

      if (dematDocument) {
        await updateDocument({
          variables: {
            title: documentsConfig.demat_document.items[0].id,
            url: imgUrl,
            id: dematDocument.id
          }
        });
        dispatch(
          setOrUpdateUser(updateUser(dematDocument.id, imgUrl, dematAccount))
        );
        toast.success('Demat Details Updated ');
      } else {
        await createDocument({
          variables: {
            title: documentsConfig.demat_document.items[0].id,
            url: imgUrl
          }
        });
      }
    } catch (err) {}
    setLoading(false);
  };
  useEffect(() => {
    if (user) {
      setDematAccount(user?.demat_account);
    }
    if (user && user?.documents && user?.documents?.length > 0) {
      user?.documents?.find((document: DocumentType) => {
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
      <Typography variant="h4" sx={{ my: 2 }}>
        Kindly Fill the form add demat details
      </Typography>
      {/* <Grid container p={2} spacing={2}> */}
      <Grid item xs={12} sm={6} md={4}>
        <TextField
          id="outlined"
          label="Demat Account No."
          fullWidth
          value={dematAccount}
          variant="outlined"
          onChange={(e) => {
            setDematAccount(e.target.value);
            setSubmitButtonEnabled(true);
          }}
        />
      </Grid>
      {dematDocumentImage ? (
        <img
          src={
            typeof dematDocumentImage == 'object'
              ? URL.createObjectURL(dematDocumentImage)
              : dematDocumentImage
          }
          style={{ marginTop: '10px' }}
          height={200}
        />
      ) : null}
      {dematDocument && dematDocument.status && (
        <Typography variant="h4" sx={{ mt: 2 }}>
          Status :{' '}
          <span
            style={{
              color: dematDocument
                ? (dematDocument.status === 'APPROVED' && 'green') ||
                  (dematDocument.status === 'REJECTED' && 'red')
                : ''
            }}
          >
            {' '}
            {dematDocument && dematDocument.status}
          </span>
        </Typography>
      )}
      {user?.kyc !== variables.status.APPROVED && (
        <Grid container pt={3} pb={2} pr={2} spacing={2}>
          <Grid item xs={12} sm={6} md={4} lg={3.5}>
            <Button
              variant="contained"
              style={{
                cursor: dematDocument
                  ? dematDocument.status === 'APPROVED'
                    ? 'not-allowed'
                    : 'pointer'
                  : 'pointer'
              }}
              component="label"
              color={
                dematDocument
                  ? dematDocument.status === 'APPROVED'
                    ? 'secondary'
                    : 'primary'
                  : 'primary'
              }
            >
              Upload Demat Account Details
              <input
                type="file"
                accept="image/*"
                hidden
                disabled={
                  dematDocument
                    ? dematDocument.status === 'APPROVED'
                      ? true
                      : false
                    : false
                }
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
              >
                Submit
              </LoadingButton>
            </Box>
          </Grid>
          <Toaster position="bottom-right" reverseOrder={false} />
        </Grid>
      )}
      <Grid item xs={4} />
      {/* </Grid> */}
    </>
  );
};

export default DematTab;
