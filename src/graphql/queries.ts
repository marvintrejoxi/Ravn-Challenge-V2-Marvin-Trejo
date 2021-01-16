import {gql} from '@apollo/client';

export const GET_PEOPLE_QUERY = gql`
  query GetPeopleQuery($first: Int, $after: String, $last: Int) {
    allPeople(first: $first, after: $after, last: $last) {
      people {
        id
        birthYear
        name
        eyeColor
        hairColor
        skinColor
        species {
          id
          name
        }
        homeworld {
          id
          name
        }
        vehicleConnection {
          vehicles {
            name
          }
        }
      }
      pageInfo {
        endCursor
        hasNextPage
      }

      totalCount
    }
  }
`;
