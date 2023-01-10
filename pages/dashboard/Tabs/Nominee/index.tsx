import { CREATEDOCUMENT, UPDATEDOCUMENT, UPSERTNOMINEE } from '@/apollo/queries/auth';
import documentsConfig from '@/config/documentsConfig';
import { useAppSelector } from '@/hooks';
import DocumentType from '@/state/types/document';
import handleImageUpload from '@/utils/upload';
import { useMutation } from '@apollo/client';
import { LoadingButton } from '@mui/lab';
import {
  Box, Button, Divider, Grid, TextField, Typography
} from '@mui/material';
import 'primeicons/primeicons.css'; //icons
import 'primereact/resources/primereact.min.css'; //core css
import 'primereact/resources/themes/lara-light-indigo/theme.css'; //theme
import { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
const NomineeTab = () => {
  const user = useAppSelector(state => state.user.data);
  const [nomineeName, setNomineeName] = useState('')
  const [relationship, setRelationship] = useState('')
  const [isLoading, setLoading] = useState(false);
  const [createDocument] = useMutation(CREATEDOCUMENT)
  const [updateDocument] = useMutation(UPDATEDOCUMENT)
  const [createOrUpdateNominee] = useMutation(UPSERTNOMINEE)
  const [isFrontImageChanged, setFrontImageChanged] = useState(false)
  const [isBackImageChanged, setBackImageChanged] = useState(false)
  const [aadharFront, setAadharFront] = useState<any | null>(null);
  const [aadharBack, setAadharBack] = useState<any | null>(null);
  const [isSubmitButtonEnalbed, setSubmitButtonEnabled] = useState(false)
  const [aadharFrontDocument, setAadharFrontDocument] = useState<DocumentType>();
  const [aadharBackDocument, setAadharBackDocument] = useState<DocumentType>();
  const validateForm = () => {

    if (!nomineeName) {
      alert("Please Enter Nominee Name")
      return null
    }

    if (!relationship) {
      alert("Please Enter Nominee Relation")
      return null
    }


    if (!aadharFrontDocument && !isFrontImageChanged) {
      alert("Please Select Nominee Aadhar Front")

      return null
    }

    if (!aadharBackDocument && !isBackImageChanged) {
      alert("Please Select Nominee Aadhar Back")

      return null
    }
    return true
  }

  const handleUpdateDocument = async (id: string, url: string, title: string) => {
    const resp = await updateDocument({
      variables: {
        id,
        title,
        url,
      }
    })
    return resp
  }

  const handleCreateDocument = async (url: string, title: string) => {
    const resp = await createDocument({
      variables: {
        title,
        url
      }
    })
    
    return resp
  }
  const handleDocuments = async (isFront: boolean) => {
    const hasDocumentChanged = isFront ? isFrontImageChanged : isBackImageChanged
    if (!hasDocumentChanged) {
      return
    }

    const baseDocument = isFront ? aadharFrontDocument : aadharBackDocument;
    const documentTitle = isFront ? documentsConfig.nominee_aadhar.items[0].id : documentsConfig.nominee_aadhar.items[1].id

    let imgUrl = ''
    if (documentTitle === 'nominee_aadhar_front') {
      imgUrl = await handleImageUpload(aadharFront);
      toast.success("Nominee Aadhar Front Updated")
    } else {
      imgUrl = await handleImageUpload(aadharBack)
      toast.success("Nominee Aadhar Back Updated")
    }
    
    if (baseDocument) {
      await handleUpdateDocument(baseDocument.id, imgUrl, documentTitle)
    } else {
      await handleCreateDocument(imgUrl, documentTitle)
    }
  }



  const handleNomineeSubmit = async () => {
    const isTextValid = validateForm()
    if (!isTextValid) {
      return
    }
    setLoading(true);
    try {
      await createOrUpdateNominee({
        variables: {
          name: nomineeName,
          relationship: relationship
        }
      });
      
      await handleDocuments(true)
      await handleDocuments(false)
      toast.success("Nominee Updated Succesfully")
    } catch (err) {
      console.log(err)
    }
    setLoading(false)
  }
  useEffect(() => {
    if (user) {
      if (user.nominee) {
        setNomineeName(user.nominee.name)
        setRelationship(user.nominee.relationship)
      }
      if (user.documents && user.documents.length > 0) {
        user.documents.find((document: DocumentType) => {
          if (document.title.toLowerCase() === documentsConfig.nominee_aadhar.items[0].id) {
            setAadharFrontDocument(document)
            setAadharFront(document.url)
          } else if (document.title.toLowerCase() === documentsConfig.nominee_aadhar.items[1].id) {
            setAadharBack(document.url)
            setAadharBackDocument(document)
          }
        })
      }
    }
  }, [user])
  return (
    <>
      <Typography variant="h4" sx={{ my: 2 }}>
        Please Fill the form to enlist nominee
      </Typography>

      <Grid container p={2} spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            id="outlined"
            label="Full Name*"
            fullWidth
            value={nomineeName}
            variant="outlined"
            onChange={(e) => {
              setNomineeName(e.target.value)
              setSubmitButtonEnabled(true)
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TextField label="Relationship"
            variant="outlined"
            fullWidth
            value={relationship}
            onChange={(e) => {
              setRelationship(e.target.value)
              setSubmitButtonEnabled(true)
            }} />
        </Grid>
        {/* <Grid item xs={4}></Grid> */}
      </Grid>

      <Grid container pt={1} pl={2} pb={2} pr={2} spacing={2}>
        <Grid item xs={12} sm={6} md={4} lg={3.5}>
          {aadharFront ? (
            <img src={typeof aadharFront == 'object' ? URL.createObjectURL(aadharFront) : aadharFront} height={200} width={200} />
          ) : null}
          <Button variant="contained" component="label">
            Upload Aadhar Card Front
            <input
              type="file"
              accept="image/*"
              hidden
              onChange={(f) => {
                if (f.target.files.length > 0) {
                  setAadharFront(f.target.files[0]);
                  setFrontImageChanged(true)
                  setSubmitButtonEnabled(true)
                }
              }}
            />
          </Button>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3.5}>
          {aadharBack ? (
            <img src={typeof aadharBack == 'object' ? URL.createObjectURL(aadharBack) : aadharBack} height={200} width={200} />
          ) : null}
          <Button variant="contained" component="label">
            Upload Aadhar Card Back
            <input
              type="file"
              accept="image/*"
              hidden
              onChange={(f) => {
                if (f.target.files.length > 0) {
                  setAadharBack(f.target.files[0]);
                  setBackImageChanged(true)
                  setSubmitButtonEnabled(true)
                }
              }}
            />
          </Button>
        </Grid>
        {/* <Grid item xs={4}></Grid>
        <Divider /> */}
        
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3} pl={2}>
        <Box component="form" mt={2}>
          <LoadingButton loading={isLoading}
            variant="contained"
            component="label"
            disabled={!isSubmitButtonEnalbed}
            onClick={() => {
              handleNomineeSubmit();
            }}>
            Submit</LoadingButton>
          <Toaster
            position='bottom-center'
            reverseOrder={false} />
        </Box>
      </Grid>
    </>
  );
};
export default NomineeTab;
