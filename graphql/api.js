import { GraphQLClient, gql } from 'graphql-request';

export const graphcms = new GraphQLClient("https://api-ap-south-1.hygraph.com/v2/cliuao2xb02ih01ul3edr5r2u/master");

export const QUERY = gql`
query {
  posts {
    id
    title
    publishedAt
    content {
      html
    }
    coverPhoto {
      url
    }
    author {
      username
      avatar {
        url
      }
    }
    slug
  }
}
`;