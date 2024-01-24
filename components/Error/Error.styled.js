import styled from "styled-components";

const ErrorMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export default function Error() {
  return (
    <ErrorMessage>
      <h1>404</h1>
      <br />
      <p>@!# Page not found</p>
    </ErrorMessage>
  );
}
