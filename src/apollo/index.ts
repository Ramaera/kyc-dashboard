import { ApolloClient,createHttpLink, InMemoryCache } from '@apollo/client';
import CONFIG from '@/config';

import { setContext } from '@apollo/client/link/context';

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: ACCESSTOKEN ? `Bearer ${ACCESSTOKEN}` : "",
    }
  }
});

const httpLink = createHttpLink({
  uri:CONFIG.SERVER_URL,
  
});

let ACCESSTOKEN;
export const getApolloClient = () => {
  if (typeof window !== "undefined") {

    ACCESSTOKEN  = localStorage.getItem('accessToken')
    
    }
  // if(ACCESSTOKEN){
  //   return new ApolloClient({
  //     link: authLink.concat(httpLink),
  //     cache: new InMemoryCache()
  //   });
  // }
  // return new ApolloClient({
  //   uri: CONFIG.SERVER_URL,
  //   cache: new InMemoryCache()
  // });

  return new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
  });
};


