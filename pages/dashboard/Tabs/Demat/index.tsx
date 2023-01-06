import { CREATEDOCUMENT, UPDATEDOCUMENT, UPDATEUSERDETAILS } from '@/apollo/queries/auth';
import documentsConfig from '@/config/documentsConfig';
import { useAppSelector } from '@/hooks';
import DocumentType from '@/state/types/document';
import handleImageUpload from '@/utils/upload';
import { useMutation } from '@apollo/client';
import { LoadingButton } from '@mui/lab';
import { Box, Button, Grid, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const DematTab = () => {
  const user = useAppSelector(state => state.user.data);
  const [dematAccount,setDematAccount]=useState('')
  const [dematDocumentImage,setDematDocumentImage]=useState<any | null>(null);
  const [dematDocument,setDematDocument]=useState<DocumentType>();
  const [isImageChanged, setImageChanged] = useState(false)
  const [isLoading, setLoading] = useState(false);
  const [createDocument] = useMutation(CREATEDOCUMENT)
  const [updateDocument] = useMutation(UPDATEDOCUMENT)
  const [updatedetails]=useMutation(UPDATEUSERDETAILS)

  const validateSubmit = (imgUrl) => {
    if (!imgUrl) {
      alert("Invalid Image")
      return false
    }

    return true
  }

  const handleSubmit = async () => {
    const isValid = validateSubmit(dematDocumentImage)
    if (!isValid) {
      return
    }
    setLoading(true);
    
    try {
      await updatedetails({
        variables:{
          demat_account:dematAccount,
        
        }
      });
      let imgUrl = ""
      if (isImageChanged) {
        imgUrl = await handleImageUpload(dematDocumentImage);
      } else {
        imgUrl = dematDocumentImage
      }

      toast.success("Payment Slip Updated ")
      if (dematDocument) {
        console.log("checkpoint")
        await updateDocument({
          variables: {
            title: documentsConfig.demat_document.items[0].id,
            url: imgUrl,
            id: dematDocument.id
          }
        })
      } else {
        await createDocument({
          variables: {
            title: documentsConfig.demat_document.items[0].id,
            url: imgUrl
          }
        })
      }
    } catch (err) {

    }
    setLoading(false)
  }
  useEffect(() => {
    console.log("user details",user)
    if(user){
      setDematAccount(user.demat_account)
    }
    if (user && user.documents && user.documents.length > 0) {
      user.documents.find((document: DocumentType) => {
        if (document.title.toLowerCase() === documentsConfig.demat_document.items[0].id) {
          setDematDocument(document)
          setDematDocumentImage(document.url)
        }
      })
    }
  }, [user])

  
  return (
    <>
      <Grid container p={2} spacing={2}>
        <Grid item xs={4}>
          <TextField
            id="outlined"
            label="Demat Account No."
            fullWidth
            value={dematAccount}
            variant="outlined"
            onChange={(e)=>{
              setDematAccount(e.target.value)
            }}
          />
        </Grid>
        
        <Grid item xs={4}>
          <Button variant="contained" component="label">
            Upload Demat Account Details 
            <input
              type="file"
              accept="image/*"
              hidden
              onChange={(f) => {
                if (f.target.files.length > 0) {
                  setDematDocumentImage(f.target.files[0]);
                  setImageChanged(true)
                }
              }}
            />
          </Button>
        </Grid>
        {dematDocumentImage ? <img src={typeof dematDocumentImage == 'object' ? URL.createObjectURL(dematDocumentImage) : dematDocumentImage} height={200} width={200} /> : null}
        <Grid item xs={4}>
          <Box component="form">
          <LoadingButton 
          loading={isLoading}
          fullWidth 
          variant="contained"
          onClick={()=>{
            handleSubmit();
          }}
          >
            Submit
          </LoadingButton>
          </Box>
        </Grid>
        <Grid item xs={4} />
      </Grid>
    </>
  );
};

export default DematTab
