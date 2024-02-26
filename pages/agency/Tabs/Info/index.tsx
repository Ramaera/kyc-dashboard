import { UPDATE_BASIC_DETAILS_BY_ADMIN } from '@/apollo/queries/updateUser';
import variables from '@/config/variables';
import { setAllTheUsers } from '@/state/slice/allUsersSlice';
import { setFoundUser } from '@/state/slice/foundUserSlice';
import allUsersUpdater from '@/utils/updateUserList';
import { useMutation } from '@apollo/client';
import { LoadingButton } from '@mui/lab';
import { Box, Grid, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';

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
  const [referral, setReferral] = useState('');
  const [isLoading, setLoading] = useState(false);
  const [updateDataByAdmin] = useMutation(UPDATE_BASIC_DETAILS_BY_ADMIN);

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
      setUserID(user.id || '');
      setFullName(user.name || '');
      setDob(user?.date_of_birth?.slice(0, 10) || '');
      setFatherHusbandName(user.father_or_husband_name || '');
      setMobileNumber(user.mobile_number || '');
      setAlternateMobileNumber(user.alternate_mobile_number || '');
      setEmail(user.email || '');
      setReferral(user.referralAgencyCode || '');
    }
  }, [user]);

  return (
    <>
      <Grid container p={2} spacing={2}>
        <Grid item xs={12} sm={4}>
          <TextField
            id="outlined"
            label="Full Name*"
            disabled={user?.kyc === variables.status.APPROVED}
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
            disabled={user?.kyc === variables.status.APPROVED}
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
            disabled={user?.kyc === variables.status.APPROVED}
            variant="outlined"
            fullWidth
            placeholder=""
            value={dob}
            onChange={(e) => {
              setDob(e.target.value);
              setSubmitButtonEnabled(true);
            }}
          />
        </Grid>
      </Grid>
      <Grid container p={2} spacing={2}>
        <Grid item xs={12} sm={4}>
          <TextField
            type="number"
            disabled={user?.kyc === variables.status.APPROVED}
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
            disabled={user?.kyc === variables.status.APPROVED}
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
            disabled={user?.kyc === variables.status.APPROVED}
            fullWidth
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setSubmitButtonEnabled(true);
            }}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            type="referral"
            label="Referral Code*"
            variant="outlined"
            fullWidth
            disabled
            value={referral}
          />
        </Grid>
      </Grid>

      <Grid container p={2} spacing={2}>
        {user?.kyc !== variables.status.APPROVED && (
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
        )}

        <Grid item xs={12} sm={4} />

        <Toaster position="bottom-center" reverseOrder={false} />
      </Grid>
    </>
  );
};

export default InfoTab;
