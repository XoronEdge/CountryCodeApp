import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

import { ListCard } from "../../components/Country";
import Button from "../../components/Button";
const COUNTRIES_QUERY = gql`
  {
    countries {
      name
      code
      continent {
        name
      }
      languages {
        name
        native
      }
    }
  }
`;
const Countries = ({ match, history }) => {
  const { loading, error, data } = useQuery(COUNTRIES_QUERY);
  if (loading) return <h3>Loading Wait</h3>;
  if (error)
    return (
      <>
        <h2>Go Back Try Again</h2>
        <Button handleClick={() => history.goBack()}>Go Back</Button>
      </>
    );
  return (
    <>
      <h1>Countries</h1>
      <ul>
        {data.countries.map(country => {
          return (
            <ListCard
              key={country.name + country.currency}
              match={match}
              country={country}
            />
          );
        })}
      </ul>
    </>
  );
};

export default Countries;
