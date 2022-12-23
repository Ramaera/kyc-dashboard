import {Grid,useTheme,Button,Typography} from '@mui/material';
import { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useMutation } from '@apollo/client';
import { CREATEDOCUMENT, UPDATEDOCUMENT } from '@/apollo/queries/auth';
import { useAppSelector } from '@/hooks';
import documentsConfig from '@/config/documentsConfig';
import DocumentType from '@/state/types/document';
import toast, { Toaster } from 'react-hot-toast';
const rows = [
  {
    name: 'Company Name',
    value: 'RAMAERA INDUSTRIES LTD.'
  },

  {
    name: 'Bank Name',
    value: 'KOTAK MAHINDRA BANK '
  },

  {
    name: 'Branch',
    value: 'NOIDA SECTOR 63'
  },

  {
    name: 'A/C No.',
    value: '4747237385'
  },

  {
    name: 'IFSC CODE ',
    value: 'KKBK0000180'
  }
];
const InfoTab = () => {
  const user = useAppSelector(state => state.user.data);
  const theme = useTheme();
  const [isLoading,setLoading]=useState(false)
  const [isBasicMember, setBasicMember] = useState(false);
  const [proofImage, setProofImage] = useState("");
  const [paymentDocument,setPaymentDocument] = useState<DocumentType>();
  const [isImageChanged,setImageChanged]  = useState(false)
  const [isSubmitButtonEnalbed,setSubmitButtonEnabled] = useState(false)
  const [createDocument]=useMutation(CREATEDOCUMENT)
  const [updateDocument]=useMutation(UPDATEDOCUMENT)
  const handleImageUpload = async()=>{

    return "https://upload.wikimedia.org/wikipedia/en/8/86/Einstein_tongue.jpg"

  }

  const validateSubmit = (imgUrl)=>{
    if(!imgUrl){
        alert("Invalid Image")
        return false
    }

    return true
  }

  const handlePaymentSubmit= async ()=>{
    setLoading(true);
    try{
      let imgUrl = ""
      if(isImageChanged){
        imgUrl = await handleImageUpload();
      }else{
        imgUrl = proofImage
      }
      const isValid = validateSubmit(imgUrl)
      if(paymentDocument){
        const respupdateDocument=await updateDocument({
          variables:{
            name:documentsConfig.payment_proof.items[0].id,
            url:imgUrl,
            id:paymentDocument.id
          }
        })
        console.log({respupdateDocument})
      }else{
        const respDocument=await createDocument({
          variables:{
            title:documentsConfig.payment_proof.items[0].id,
            url:imgUrl
          }
        })
      }
      toast.success("Payment Slip Updated ")
    }catch(err){
      toast.error(err)
    }
    setLoading(false) 
}
useEffect(()=>{
  if (user && user.documents && user.documents.length>0){
    user.documents.find((document:DocumentType)=>{
      if(document.title.toLowerCase() === documentsConfig.payment_proof.items[0].id){
        setPaymentDocument(document)
        setProofImage(document.url)
      }
    })
  }
},[user])
  return (
    <>
      <Typography variant="h4" sx={{ my: 2 }}>
        Kindly Deposit Rs.{isBasicMember ? '10,000/-' : '1,25,000/-'} and upload
        the payment slip as a proof!
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 100 }} aria-label="simple table">
          <TableBody>
            {rows.map((row) => {
              return (
                <TableRow
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.value}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      {proofImage ? <img src={proofImage} height={200} width={200} /> : null}
      <Grid container p={2} spacing={2}>
        <Grid item xs={4}>
          <Button variant="contained" component="label">
            Select Payment Slip
            <input
              type="file"
              accept="image/*"
              hidden
              onChange={(f) => {
                if (f.target.files.length > 0) {
                  setSubmitButtonEnabled(true)
                  setProofImage(URL.createObjectURL(f.target.files[0]));
                  setImageChanged(true)
                }
              }}
            />
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button fullWidth 
          variant="contained" 
          disabled={!isSubmitButtonEnalbed}
          onClick={() => {
            handlePaymentSubmit();
          }}>
            Submit
          </Button>
        </Grid>
        <Toaster 
        position='bottom-center'
        reverseOrder={false}/>
      </Grid>
    </>
  );
};
export default InfoTab;