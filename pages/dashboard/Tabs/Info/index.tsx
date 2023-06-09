import { UPDATEUSERDETAILS } from '@/apollo/queries/auth';
import { useAppSelector, useAppDispatch } from '@/hooks';
import { setOrUpdateUser } from '@/state/slice/userSlice';
import { useMutation } from '@apollo/client';
import { DesktopDatePicker, LoadingButton } from '@mui/lab';
import { Box, Grid, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const InfoTab = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user.data);
  const [fullName, setFullName] = useState<any | null>(null);
  const [fatherHusbandName, setFatherHusbandName] = useState<any | null>(null);
  const [dob, setDob] = useState<any | null>(null);
  const [mobileNumber, SetMobileNumber] = useState<any | null>(null);
  const [AlternateMobileNumber, setAlternateMobileNumber] = useState<
    any | null
  >(null);
  const [email, setEmail] = useState<any | null>(null);
  const [isLoading, setLoading] = useState(false);
  const [updatedetails] = useMutation(UPDATEUSERDETAILS);
  const [demat, setDemat] = useState<any | null>(null);
  const [errors, setErrors] = useState({
    mobileNumber: null,
    AlternateMobileNumber: null,
    email: null
  });
  const validateEmail = (email) => {
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
  };
  const validateMobileNumber = (mobile_number) => {
    const mobileNumberRegex = /^\d{10}$/;
    return mobileNumberRegex.test(mobile_number);
  };

  const handleSubmit = async () => {
    if (!validateMobileNumber(mobileNumber)) {
      setErrors({
        ...errors,
        mobileNumber: 'Please enter a valid mobile number'
      });
      return;
    } else {
      setErrors({ ...errors, mobileNumber: '' });
    }
    if (!validateMobileNumber(AlternateMobileNumber)) {
      setErrors({
        ...errors,
        AlternateMobileNumber: 'Please enter a valid Alternate mobile number'
      });
      return;
    } else {
      setErrors({ ...errors, AlternateMobileNumber: '' });
    }
    if (!validateEmail(email)) {
      setErrors({ ...errors, email: 'Please enter a valid Email' });
      return;
    }
    setLoading(true);
    try {
      await updatedetails({
        variables: {
          name: fullName,
          father_or_husband_name: fatherHusbandName,
          date_of_birth: dob,
          mobile_number: mobileNumber,
          alternate_mobile_number: AlternateMobileNumber,
          demat_account: demat,
          email: email
        }
      });
      dispatch(
        setOrUpdateUser({
          ...user,
          name: fullName,
          father_or_husband_name: fatherHusbandName,
          date_of_birth: dob,
          mobile_number: mobileNumber,
          alternate_mobile_number: AlternateMobileNumber,
          demat_account: demat,
          email: email
        })
      );
      toast.success('Details Updated');
    } catch (err) {
      console.log(err.message);
      toast.error('Email already registered');
    }
    setLoading(false);
  };
  useEffect(() => {
    if (user) {
      setFullName(user.name);
      setFatherHusbandName(user.father_or_husband_name);
      setDob(user.date_of_birth.slice(0, 10));
      SetMobileNumber(user.mobile_number);
      setAlternateMobileNumber(user.alternate_mobile_number);
      setEmail(user.email);
      setDemat(user.demat_account);
    }
  }, [user]);

  return (
    <>
      <Grid container p={2} spacing={2}>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="outlined"
            label="Full Name"
            fullWidth
            value={fullName}
            variant="outlined"
            onChange={(e) => {
              setFullName(e.target.value);
            }}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            label="Father's/Husband's Name"
            variant="outlined"
            fullWidth
            value={fatherHusbandName}
            onChange={(e) => {
              setFatherHusbandName(e.target.value);
            }}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          {/*  <DesktopDatePicker
            label="Date of Birth"
            inputFormat="dd/MM/yyyy"
            value={dob}
            // disableFuture
            onChange={(e) => {
              console.log(e);
              setDob(e);
            }}
            renderInput={(params) => (
              <TextField {...params} sx={{ width: '100%' }} />
            )}
          /> */}
          <TextField
            required
            hidden
            label="Date of Birth"
            variant="outlined"
            fullWidth
            placeholder=""
            value={dob}
            onChange={(e) => {
              setDob(e.target.value);
            }}
          />
        </Grid>
      </Grid>
      <Grid container pr={2} pb={2} pl={2} spacing={2}>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            label="Mobile Number"
            variant="outlined"
            fullWidth
            value={mobileNumber}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              SetMobileNumber(e.target.value);

              if (validateMobileNumber(e.target.value)) {
                setErrors({ ...errors, mobileNumber: '' });
              } else {
                setErrors({
                  ...errors,
                  mobileNumber: 'Please enter a valid mobile number'
                });
              }
            }}
          />
          {errors.mobileNumber && <p>{errors.mobileNumber}</p>}
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="outlined"
            label="Alternate Number"
            fullWidth
            variant="outlined"
            value={AlternateMobileNumber}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setAlternateMobileNumber(e.target.value);
              if (validateMobileNumber(e.target.value)) {
                setErrors({ ...errors, AlternateMobileNumber: '' });
              } else {
                setErrors({
                  ...errors,
                  AlternateMobileNumber: 'Please enter a valid Alternate number'
                });
              }
            }}
          />
          {errors.AlternateMobileNumber && (
            <p>{errors.AlternateMobileNumber}</p>
          )}
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            label="Email ID"
            variant="outlined"
            fullWidth
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setEmail(e.target.value);
              if (validateEmail(e.target.value)) {
                setErrors({ ...errors, email: null });
              } else {
                setErrors({
                  ...errors,
                  email: 'Please enter a valid Email'
                });
              }
            }}
          />
          {errors.email && <p>{errors.email}</p>}
        </Grid>
      </Grid>
      <Grid container p={2} spacing={2}>
        {user.kyc === 'APPROVED' ? null : (
          <Grid item xs={4}>
            <Box component="form">
              <LoadingButton
                loading={isLoading}
                disabled={
                  errors.AlternateMobileNumber ||
                  errors.email ||
                  errors.mobileNumber
                }
                fullWidth
                variant="contained"
                onClick={() => {
                  handleSubmit();
                }}
              >
                Submit
              </LoadingButton>
            </Box>
          </Grid>
        )}
        <Toaster position="bottom-center" reverseOrder={false} />
        <Grid item xs={4} />
      </Grid>
    </>
  );
};

export default InfoTab;
