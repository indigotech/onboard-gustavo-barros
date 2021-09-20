import { ApolloClient, createHttpLink, InMemoryCache, gql } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: 'https://tq-template-server-sample.herokuapp.com/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('authtoken');
  return {
    headers: {
      ...headers,
      authorization: token ? `${token}` : '',
    },
  };
});

export const clientUsersRequest = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export const GET_USERS = gql`
  query GetUsers {
    users(pageInfo: {}) {
      nodes {
        id
        name
        email
      }
    }
  }
`;

export const USER_DETAILS = gql`
  query UserDetails($id: ID!) {
    user(id: $id) {
      name
      phone
      birthDate
      email
      role
    }
  }
`;
