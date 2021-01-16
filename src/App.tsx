import React, {useState, useEffect} from 'react';
import {useQuery} from '@apollo/client';

// custom
import {Container, Wrapper, Sidebar, Content} from 'app.styled';
import {Header} from 'components/Header';
import {Loader} from 'components/Loader';
import {RegisterCard} from 'components/RegisterCard';
import {GeneralInformation} from 'components/GeneralInFormation';
import {CustomError} from 'components/CustomError';

// queries
import {GET_PEOPLE_QUERY} from 'graphql/queries';

// types
import {PeopleVariables, PeopleList, Person} from 'types';

export const App: React.FC = () => {
  const [people, setPeople] = useState<Person[]>([]);
  const [currentPerson, setCurrentPerson] = useState<Person | null>(null);
  const [shouldFetchMoreData, setShouldFetchMoreData] = useState<boolean>(true);
  const {data: {allPeople} = {}, error, loading, fetchMore} = useQuery<
    PeopleList,
    PeopleVariables
  >(GET_PEOPLE_QUERY, {
    variables: {first: 14, after: ''},
    fetchPolicy: 'cache-and-network',
  });

  useEffect(() => {
    if (allPeople?.people.length) {
      if (!allPeople.pageInfo.hasNextPage) {
        setShouldFetchMoreData(false);
      }

      setPeople(allPeople.people);
    }
  }, [allPeople?.people, allPeople?.people.length, allPeople?.pageInfo]);

  const fetchMorePeople = () => {
    if (allPeople?.people.length)
      fetchMore({
        variables: {
          after: allPeople?.pageInfo.endCursor,
          first: 5,
        },
        updateQuery: (previous, {fetchMoreResult}) => {
          if (
            !fetchMoreResult?.allPeople?.people.length ||
            allPeople.people.length === allPeople.totalCount
          ) {
            return previous;
          }

          fetchMoreResult.allPeople.people = [
            ...previous.allPeople.people,
            ...fetchMoreResult.allPeople.people,
          ];

          return fetchMoreResult;
        },
      });
  };

  return (
    <Container>
      <Header />

      <Wrapper>
        <Sidebar
          dataLength={allPeople?.people.length || 0}
          next={() => fetchMorePeople()}
          hasMore={shouldFetchMoreData}
          loader={<Loader />}
          height="100%"
        >
          {people.map((person, index) => (
            <RegisterCard
              key={index}
              person={person}
              isSelected={currentPerson?.id === person.id}
              onClick={setCurrentPerson}
            />
          ))}

          {!loading && !!error && <CustomError />}
        </Sidebar>

        <Content>
          {!!currentPerson && <GeneralInformation person={currentPerson} />}
        </Content>
      </Wrapper>
    </Container>
  );
};
