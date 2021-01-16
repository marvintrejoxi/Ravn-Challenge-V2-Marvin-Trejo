import React, {useState, useEffect} from 'react';
import {useQuery} from '@apollo/client';

// custom
import {useIsMobile} from 'hooks/useIsMobile';
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
  const isMobile = useIsMobile();
  const [people, setPeople] = useState<Person[]>([]);
  const [currentPerson, setCurrentPerson] = useState<Person | null>(null);
  const [shouldFetchMoreData, setShouldFetchMoreData] = useState<boolean>(true);
  const [showMobileContent, setShowMobileContent] = useState<boolean>(false);
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

  useEffect(() => {
    if (!isMobile) {
      setShowMobileContent(false);
    }
  }, [isMobile]);

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

  const onClickPerson = (person: Person) => {
    if (isMobile) {
      setShowMobileContent(true);
    }

    setCurrentPerson(person);
  };

  return (
    <Container>
      <Header
        isMobile={isMobile}
        isShowingMobileContent={showMobileContent}
        mobileTitle={!!currentPerson ? currentPerson.name : ''}
        onMobileBack={() => {
          setCurrentPerson(null);
          setShowMobileContent(false);
        }}
      />

      <Wrapper isMobile={isMobile}>
        {!showMobileContent && (
          <Sidebar
            dataLength={allPeople?.people.length || 0}
            next={() => fetchMorePeople()}
            hasMore={shouldFetchMoreData}
            loader={<Loader />}
            height="100%"
            isMobile={isMobile}
          >
            {people.map((person, index) => (
              <RegisterCard
                key={index}
                person={person}
                isSelected={currentPerson?.id === person.id}
                onClick={onClickPerson}
              />
            ))}

            {!loading && !!error && <CustomError />}
          </Sidebar>
        )}

        {(showMobileContent || !isMobile) && (
          <Content isMobile={isMobile}>
            {!!currentPerson && <GeneralInformation person={currentPerson} />}
          </Content>
        )}
      </Wrapper>
    </Container>
  );
};
