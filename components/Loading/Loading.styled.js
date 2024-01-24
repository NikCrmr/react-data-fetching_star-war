import styled from "styled-components";

const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export default function Loader() {
  return (
    <Loading>
      <div className="loader"></div>
    </Loading>
  );
}
