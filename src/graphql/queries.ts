import {gql} from '@apollo/client';

export const GET_PEOPLE_QUERY = gql`
  query GetPeopleQuery($first: Int, $after: String) {
    allPeople(first: $first, after: $after) {
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
      }

      totalCount
    }
  }
`;
