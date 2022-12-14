import { ApolloClient, InMemoryCache } from '@apollo/client';
import CONFIG from '@/config';


export const getApolloClient = () => {
  return new ApolloClient({
    uri: CONFIG.SERVER_URL,
    cache: new InMemoryCache()
  });
};
