import { UPDATEUSERDETAILS } from '@/apollo/queries/auth';
import { useAppSelector } from '@/hooks';
import { useMutation } from '@apollo/client';
import { LoadingButton } from '@mui/lab';
import { Box, Grid, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';

const InfoTab = () => {

  const user = useAppSelector(state=>state.user.data);
  
  const [fullName,setFullName]=useState<any | null>(null);
  const [fatherHusbandName, setFatherHusbandName]=useState<any | null>(null);
  const [dob,setDob]=useState<any | null>(null);
  const [mobileNumber,SetMobileNumber]=useState<any | null>(null);
  const [AlternateMobileNumber,setAlternateMobileNumber]=useState<any | null>(null);
  const [email,setEmail]=useState<any | null>(null);
  const [isLoading, setLoading] = useState(false);
  const [updatedetails]=useMutation(UPDATEUSERDETAILS)
  const [demat,setDemat]=useState<any | null>(null);

  const handleSubmit=async ()=>{


    setLoading(true);
      try{
        const resp=await updatedetails({
          variables:{
            name:fullName,
            father_or_husband_name:fatherHusbandName,
            date_of_birth:dob,
            mobile_number:mobileNumber,
            alternate_mobile_number:AlternateMobileNumber,
            demat_account:demat,
            email:email
          }
        });
        const data = resp.data.updateUser
        console.log({data})
      }catch(err){
        toast.error(err.message)
      }
    setLoading(false)
  }

  useEffect(()=>{
    if(user){
      setFullName(user.name)
      setFatherHusbandName(user.father_or_husband_name)
      setDob(user.date_of_birth)
      SetMobileNumber(user.mobile_number)
      setAlternateMobileNumber(user.alternate_mobile_number)
      setEmail(user.email)
      setDemat(user.demat_account)
    }
  },[user])
  
  return (
    <>
      <Grid container p={2} spacing={2}>
        <Grid item xs={4}>
          <TextField
            id="outlined"
            label="Full Name*"
            fullWidth
            value={fullName}
            variant="outlined"
            onChange={(e)=>{
              setFullName(e.target.value)
            }}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            label="Father's/Husband's Name*"
            variant="outlined"
            fullWidth
            value={fatherHusbandName}
            onChange={(e)=>{
              setFatherHusbandName(e.target.value)
            }}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField label="DOB(DD/MM/YYYY)*" 
          variant="outlined" 
          fullWidth
          value={dob}
          onChange={(e)=>{
            setDob(e.target.value)
          }}
           />
        </Grid>
      </Grid>
      <Grid container p={2} spacing={2}>
        <Grid item xs={4}>
          <TextField 
          label="Mobile Number*" 
          variant="outlined" 
          fullWidth
          value={mobileNumber}
          onChange={(e)=>{
            SetMobileNumber(e.target.value)
          }} />
        </Grid>
        <Grid item xs={4}>
          <TextField
            id="outlined"
            label="Alternate Number*"
            fullWidth
            variant="outlined"
            value={AlternateMobileNumber}
            onChange={(e)=>{
              setAlternateMobileNumber(e.target.value)
            }}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField 
          label="Email ID*" 
          variant="outlined" 
          fullWidth
          value={email}
          onChange={(e)=>{
            setEmail(e.target.value)
          }}
           />
        </Grid>
      </Grid>

      <Grid container p={2} spacing={2}>
        <Grid item xs={4}>
          <TextField
            label="Demat A/C no (optional)"
            variant="outlined"
            fullWidth
            value={demat}
            onChange={(e)=>{
              setDemat(e.target.value)}}
          />
        </Grid>
        <Grid item xs={4}>
          <Box component="form">
          <LoadingButton loading={isLoading}
          fullWidth 
          variant="contained"
          onClick={()=>{
            handleSubmit();
          }}>
            Submit
          </LoadingButton>
          </Box>
        </Grid>
        <Grid item xs={4} />
      </Grid>
    </>
  );
};

export default InfoTab
