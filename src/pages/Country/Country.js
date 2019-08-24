import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import Button from "../../components/Button";
const COUNTTRY_QUERY = gql`
  query Country($code: String!) {
    country(code: $code) {
      name
      currency
      phone
    }
  }
`;
const Country = ({ match, history }) => {
  const { code } = match.params;
  const { loading, error, data } = useQuery(COUNTTRY_QUERY, {
    variables: { code }
  });
  if (loading) return <h3>Loading Wait</h3>;
  if (error)
    return (
      <>
        <h2>Go Back Try Again</h2>
        <Button handleClick={() => history.goBack()}>Go Back</Button>
      </>
    );
  if (data.country == undefined)
    return (
      <>
        <h2>Wrong Code No Data Found</h2>
        <Button handleClick={() => history.goBack()}>Go Back</Button>
      </>
    );
  return (
    <>
      <h1>Country Code</h1>
      <h3>Name {data.country.name}</h3>
      <h3>Currency {data.country.currency}</h3>
      <h3>Phone Code {data.country.phone}</h3>

      <Button handleClick={() => history.goBack()}>Go Back</Button>
    </>
  );
};

export default Country;
