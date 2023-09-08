import { GET_AGENCY_CODE, GetUser } from '@/apollo/queries/auth';
import { useAppDispatch } from '@/hooks';
import { setAgencyCode, setOrUpdateUser } from '@/state/slice/userSlice';
import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const RamaeraRouter = ({ children }) => {
  const router = useRouter();
  const userResp = useQuery(GetUser);
  const agencyCode = useQuery(GET_AGENCY_CODE, {
    variables: { userID: userResp?.data?.me.id }
  });

  const dispatch = useAppDispatch();
  if (agencyCode?.data?.kycAgency.agencyCode) {
    dispatch(setAgencyCode(agencyCode.data.kycAgency.agencyCode));
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
