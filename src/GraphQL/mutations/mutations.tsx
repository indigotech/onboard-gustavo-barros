import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://tq-template-server-sample.herokuapp.com/graphql',
  cache: new InMemoryCache(),
});

export const LOGIN_MUTATION = gql`
  mutation login($email: String!, $password: String!) {
    login(data: { email: $email, password: $password }) {
      token
    }
  }
`;

export const CREATE_USER = gql`
  mutation CreateUser(
    $name: String!
    $email: String!
    $phone: String!
    $birthDate: String!
    $password: String!
    $role: String!
  ) {
    createUser(
      data: { name: $name, email: $email, phone: $phone, birthDate: $birthDate, password: $password, role: "user" }
    ) {
      id
      name
      email
    }
  }
`;
