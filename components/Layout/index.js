import styled from "styled-components";

const StyledLayout = styled.div`
  width: min(100% - 32px, 352px);
  margin: 0 auto;
  padding: 32px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #f2be1c;
  text-align: center;
  background-color: black;
  transform: perspective(10px) rotateX(2deg);
`;

export default function Layout({ children }) {
  return <StyledLayout>{children}</StyledLayout>;
}
