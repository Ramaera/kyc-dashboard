import { GET_AGENCY_CODE, GetUser } from '@/apollo/queries/auth';
import {
  GET_NUMBERS,
  GET_PROJECT_AMOUNTS,
  GET_RLI
} from '@/apollo/queries/updateUser';
import { GET_ALL_SHARE_HOLDER } from '@/apollo/queries/auth';
import { useAppDispatch } from '@/hooks';
import {
  setNumbers,
  setTotalAgraAmount,
  setTotalHajipurAmount,
  setTotalHyderabadAmount,
  setTotalReverseSpiceAmount
} from '@/state/slice/allUsersSlice';
import { setAllNumberShareHolder } from '@/state/slice/allShareHolderSlice';
import { setAgencyCode, setOrUpdateUser } from '@/state/slice/userSlice';
import { useLazyQuery, useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const RamaeraRouter = ({ children }) => {
  const router = useRouter();
  const userResp = useQuery(GetUser);
  const RamaLegalIT = useQuery(GET_RLI);
  const allNumbers = useQuery(GET_NUMBERS);
  const allShareHolder = useQuery(GET_ALL_SHARE_HOLDER);
  const allProjectAmounts = useQuery(GET_PROJECT_AMOUNTS);
  const [agencyCode, { loading, data }] = useLazyQuery(GET_AGENCY_CODE, {
    variables: { userID: userResp?.data?.me.id }
  });

  const dispatch = useAppDispatch();
  if (allProjectAmounts?.data?.getProjectsPayment) {
    dispatch(
      setTotalHajipurAmount(
        allProjectAmounts?.data?.getProjectsPayment.ProjectHajipurAmountReceived
      )
    );
    dispatch(
      setTotalAgraAmount(
        allProjectAmounts?.data?.getProjectsPayment.ProjectAgraAmountReceived
      )
    );
    dispatch(
      setTotalHyderabadAmount(
        allProjectAmounts?.data?.getProjectsPayment
          .ProjectHyderabadAmountReceived
      )
    );
    dispatch(
      setTotalReverseSpiceAmount(
        allProjectAmounts?.data?.getProjectsPayment
          .ProjectFundingReplacementAmountReceived
      )
    );
  }
  if (allNumbers?.data?.getAllUsersCount) {
    dispatch(setNumbers(allNumbers?.data?.getAllUsersCount));
  }
  if (allShareHolder?.data?.getAllShareHoldersCount) {
    dispatch(
      setAllNumberShareHolder(allShareHolder?.data?.getAllShareHoldersCount)
    );
  }
  useEffect(() => {
    agencyCode();
  }, [agencyCode]);

  if (data?.kycAgency.agencyCode) {
    dispatch(setAgencyCode(data.kycAgency));
  }

  const [isLoading, setLoading] = useState(true);
  /*  const gotData = useSelector((state: any) => state.allUsers.gotData);
  useEffect(() => {
    if (!gotData) {
      router.replace('/dashboard');
    }
  }, []); */
  const [isAuthenticated, setAuthenticated] = useState(false);

  const [isAuthFinished, setAuthFinished] = useState(false);

  const loadUser = async () => {
    try {
      const resp = await userResp.refetch();
      // console.log('resp', resp);

      return resp.data.me;
    } catch (err) {
      if (userResp.error && userResp.error.graphQLErrors) {
        for (let error of userResp.error.graphQLErrors) {
          if (error.extensions.code === 'UNAUTHENTICATED') {
            localStorage.clear();
          }
        }
      }
    }
    return null;
  };
  const validatedAuth = async () => {
    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken) {
      setLoading(false);
    }
    const user = await loadUser();
    if (user) {
      setAuthenticated(true);

      dispatch(setOrUpdateUser(user));
    }
    setLoading(false);
  };

  useEffect(() => {
    validatedAuth();
  }, []);

  const handleRoutes = async () => {
    if (
      !isAuthenticated &&
      router.pathname.toLowerCase() !== '/auth/login'.toLowerCase() &&
      router.pathname.toLowerCase() !== '/auth/signup'.toLowerCase()
    ) {
      await router.replace('/auth/login');
    } else if (
      isAuthenticated &&
      (router.pathname.toLowerCase() == '/auth/login'.toLowerCase() ||
        router.pathname.toLowerCase() == '/auth/signup'.toLowerCase())
    ) {
      await router.replace('/dashboard');
    }
    setAuthFinished(true);
  };

  useEffect(() => {
    if (!isLoading) {
      handleRoutes();
    }
  }, [isLoading, isAuthenticated]);

  return <>{!isLoading && isAuthFinished ? children : null}</>;
};

export default RamaeraRouter;
