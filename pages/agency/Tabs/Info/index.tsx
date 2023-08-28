import { Grid, Box, TextField } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { useEffect, useState } from 'react';
import { useMutation } from '@apollo/client';
import { Toaster, toast } from 'react-hot-toast';
import { UPDATE_BY_ADMIN } from '@/apollo/queries/updateUser';
import { useSelector, useDispatch } from 'react-redux';
import { setFoundUser } from '@/state/slice/foundUserSlice';
import { setAllTheUsers } from '@/state/slice/allUsersSlice';
import allUsersUpdater from '@/utils/updateUserList';

const InfoTab = () => {
  const dispatch = useDispatch();
  const user = useSelector((persistor: any) => persistor.foundUser.foundUser);
  const usersList = useSelector((state: any) => state.allUsers.allTheUsers);
  const [userId, setUserID] = useState('');
  const [fullName, setFullName] = useState('');
  const [isSubmitButtonEnalbed, setSubmitButtonEnabled] = useState(false);
  const [fatherHusbandName, setFatherHusbandName] = useState('');
  const [dob, setDob] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [AlternateMobileNumber, setAlternateMobileNumber] = useState('');
  const [email, setEmail] = useState('');
  const [isLoading, setLoading] = useState(false);
  const [updateDataByAdmin] = useMutation(UPDATE_BY_ADMIN);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      await updateDataByAdmin({
        variables: {
          id: userId,
          name: fullName,
          father_or_husband_name: fatherHusbandName,
          date_of_birth: dob,
          mobile_number: mobileNumber,
          alternate_mobile_number: AlternateMobileNumber,
          email: email
        }
      });
      toast.success('Details Updated');
      const updatedUser = {
        ...user,
        name: fullName,
        father_or_husband_name: fatherHusbandName,
        date_of_birth: dob,
        mobile_number: mobileNumber,
        alternate_mobile_number: AlternateMobileNumber,
        email: email
      };
      dispatch(setFoundUser(updatedUser));
      dispatch(setAllTheUsers(allUsersUpdater(usersList, updatedUser)));
    } catch (err) {
      toast.error(err.message);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (user) {
      setUserID(user?.id);
      setFullName(user?.name);
      setDob(user?.date_of_birth?.slice(0, 10));
      setFatherHusbandName(user?.father_or_husband_name);
      setMobileNumber(user?.mobile_number);
      setAlternateMobileNumber(user?.alternate_mobile_number);
      setEmail(user?.email);
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
            value={fullName}
            variant="outlined"
            onChange={(e) => {
              setFullName(e.target.value);
              setSubmitButtonEnabled(true);
            }}
          />
        </Grid>

        <Grid item xs={12} sm={4}>
          <TextField
            label="Father's/Husband's Name*"
            variant="outlined"
            fullWidth
            value={fatherHusbandName}
            onChange={(e) => {
              setFatherHusbandName(e.target.value);
              setSubmitButtonEnabled(true);
            }}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
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
              setSubmitButtonEnabled(true);
            }}
          />
          {/* <DesktopDatePicker
            label="Date of Birth"
            inputFormat="dd/MM/yyyy"
            value={dob}
            disableFuture
            onChange={(e) => {
              console.log('dob', e);
              setDob(e);
              setSubmitButtonEnabled(true);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
          <DesktopDatePicker
            label="Date of Birth"
            inputFormat="dd/MM/yyyy"
            value={dob}
            // disableFuture
            onChange={(e) => {
              setDob(e);

              console.log(changeDate(e));
              setSubmitButtonEnabled(true);
            }}
            renderInput={(params) => (
              <TextField {...params} sx={{ width: '100%' }} />
            )}
          />  
          <TextField
            type="date"
            label="Date of Birth"
            inputFormat="dd/MM/yyyy"
            label="DOB(DD/MM/YYYY)"
            variant="outlined"
            placeholder="DOB(DD/MM/YYYY)*"
            fullWidth
            value={dob}
            onChange={(e) => {
              setDob(e.target.value);
              // console.log(e.target.value, dob);
              setSubmitButtonEnabled(true);
            }}
          /> */}
        </Grid>
      </Grid>
      <Grid container p={2} spacing={2}>
        <Grid item xs={12} sm={4}>
          <TextField
            type="number"
            inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
            label="Mobile Number*"
            variant="outlined"
            fullWidth
            value={mobileNumber}
            onChange={(e) => {
              setMobileNumber(e.target.value);
              setSubmitButtonEnabled(true);
            }}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            id="outlined"
            type="number"
            inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
            label="Alternate Number*"
            fullWidth
            variant="outlined"
            value={AlternateMobileNumber}
            onChange={(e) => {
              setAlternateMobileNumber(e.target.value);
              setSubmitButtonEnabled(true);
            }}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            type="email"
            label="Email ID*"
            variant="outlined"
            fullWidth
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setSubmitButtonEnabled(true);
            }}
          />
        </Grid>
      </Grid>

      <Grid container p={2} spacing={2}>
        <Grid item xs={12} sm={4}>
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
              Update Details
            </LoadingButton>
          </Box>
        </Grid>

        <Grid item xs={4} />
        <Toaster position="bottom-center" reverseOrder={false} />
      </Grid>
    </>
  );
};

export default InfoTab;
